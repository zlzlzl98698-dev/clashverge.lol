import { getCollection } from 'astro:content';
import type { PrimaryCategoryKey } from '../data/site';

export interface UnifiedPost {
  collection: 'articles' | 'reviews' | 'guides' | 'comparisons';
  slug: string;
  url: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  pubDate: string;
  updatedDate: string;
  category: PrimaryCategoryKey;
  categoryLabel: string;
  topicSlug?: string;
  clusterId?: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  author: string;
  readingTime: string;
  pillar: boolean;
  featured: boolean;
  draft: boolean;
  primaryKeyword: string;
  secondaryKeywords: string[];
  relatedBrands: string[];
  relatedSlugs: string[];
  searchIntent: string;
  priceVerifiedDate: string;
  testDate: string;
  verificationStatus: string;
  faq: { q: string; a: string }[];
  sources: { label: string; note: string }[];
  rawEntry: any;
}

const CATEGORY_LABELS: Record<PrimaryCategoryKey, string> = {
  airport: '机场推荐',
  vpn: 'VPN 与加速器',
  clash: 'Clash 客户端',
  resources: '资源与情报',
};

export function getCategoryLabel(cat: PrimaryCategoryKey): string {
  return CATEGORY_LABELS[cat] || '专业评测';
}

export function estimateReadingTime(text: string): string {
  const clean = text.replace(/[#*`>\-\[\]()]/g, '');
  const charCount = clean.length;
  const minutes = Math.max(4, Math.ceil(charCount / 420));
  return `${minutes} 分钟`;
}

function mapEntryToUnified(
  entry: any,
  collection: 'articles' | 'reviews' | 'guides' | 'comparisons'
): UnifiedPost {
  const data = entry.data;
  const slug = data.slug || entry.id;
  const urlPrefix =
    collection === 'reviews'
      ? '/reviews/'
      : collection === 'guides'
        ? '/guides/'
        : collection === 'comparisons'
          ? '/comparisons/'
          : '/articles/';

  const bodyText = entry.body || '';
  const computedReadingTime = bodyText
    ? estimateReadingTime(bodyText)
    : data.readingTime || '10 分钟';

  return {
    collection,
    slug,
    url: `${urlPrefix}${slug}/`,
    title: data.title,
    seoTitle: data.seoTitle || `${data.title} | clash订阅`,
    description: data.description,
    excerpt: data.excerpt || data.description,
    pubDate: data.pubDate,
    updatedDate: data.updatedDate,
    category: data.category,
    categoryLabel: getCategoryLabel(data.category),
    topicSlug: data.topicSlug,
    clusterId: data.clusterId,
    tags: data.tags || [],
    cover: data.cover || '/images/covers/default-editorial.svg',
    coverAlt: data.coverAlt || data.title,
    author: data.author || 'clash订阅实验室',
    readingTime: computedReadingTime,
    pillar: Boolean(data.pillar),
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    primaryKeyword: data.primaryKeyword,
    secondaryKeywords: data.secondaryKeywords || [],
    relatedBrands: data.relatedBrands || ['guangsuyun'],
    relatedSlugs: data.relatedSlugs || [],
    searchIntent: data.searchIntent || 'Informational',
    priceVerifiedDate: data.priceVerifiedDate || '2026-10-19',
    testDate: data.testDate || '2026-10-19',
    verificationStatus: data.verificationStatus || 'Measured_Verified',
    faq: data.faq || [],
    sources: data.sources || [],
    rawEntry: entry,
  };
}

export async function getAllPublishedPosts(): Promise<UnifiedPost[]> {
  const [articles, reviews, guides, comparisons] = await Promise.all([
    getCollection('articles', ({ data }) => !data.draft),
    getCollection('reviews', ({ data }) => !data.draft),
    getCollection('guides', ({ data }) => !data.draft),
    getCollection('comparisons', ({ data }) => !data.draft),
  ]);

  const all: UnifiedPost[] = [
    ...articles.map((e) => mapEntryToUnified(e, 'articles')),
    ...reviews.map((e) => mapEntryToUnified(e, 'reviews')),
    ...guides.map((e) => mapEntryToUnified(e, 'guides')),
    ...comparisons.map((e) => mapEntryToUnified(e, 'comparisons')),
  ];

  return all.sort((a, b) => b.updatedDate.localeCompare(a.updatedDate));
}

export async function getPostsByCategory(category: PrimaryCategoryKey): Promise<UnifiedPost[]> {
  const all = await getAllPublishedPosts();
  return all.filter((p) => p.category === category);
}

export async function getPostsByBrand(brandSlug: string): Promise<UnifiedPost[]> {
  const all = await getAllPublishedPosts();
  return all.filter((p) => p.relatedBrands.includes(brandSlug));
}
