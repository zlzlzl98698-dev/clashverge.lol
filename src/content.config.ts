import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseContentSchema = z.object({
  title: z.string().min(5, '文章标题不能为空且需大于5个字符'),
  description: z.string().min(20, '文章描述需大于20个字符'),
  slug: z.string(),
  pubDate: z.string().default('2026-10-20'),
  updatedDate: z.string().default('2026-11-18'),
  category: z.enum(['airport', 'vpn', 'clash', 'resources']),
  topicSlug: z.string().optional(),
  clusterId: z.string().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string().default('/images/covers/default-editorial.svg'),
  coverAlt: z.string().default('clash订阅专业评测与网络工具指南封面图'),
  author: z.string().default('clash订阅实验室'),
  readingTime: z.string().default('12 分钟'),
  excerpt: z.string().optional(),
  faq: z
    .array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    )
    .default([]),
  relatedSlugs: z.array(z.string()).default([]),
  relatedBrands: z.array(z.string()).default(['guangsuyun']),
  pillar: z.boolean().default(false),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  seoTitle: z.string().optional(),
  canonical: z.string().optional(),
  searchIntent: z
    .enum(['Commercial Investigation', 'Informational', 'Transactional', 'Troubleshooting'])
    .default('Informational'),
  primaryKeyword: z.string(),
  secondaryKeywords: z.array(z.string()).default([]),
  priceVerifiedDate: z.string().default('2026-10-19'),
  testDate: z.string().default('2026-10-19'),
  verificationStatus: z
    .enum(['Measured_Verified', 'Vendor_CrossChecked', 'Technical_Verified'])
    .default('Measured_Verified'),
  sources: z
    .array(
      z.object({
        label: z.string(),
        note: z.string(),
      })
    )
    .default([
      {
        label: 'clash订阅实验室 2026-10-19 品牌实测档案与套餐核实库',
        note: '基于31家独立品牌资料与非晚高峰五地节点实测记录',
      },
    ]),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: baseContentSchema,
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: baseContentSchema.extend({
    brandSlug: z.string().default('guangsuyun'),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: baseContentSchema.extend({
    platform: z.string().default('全平台'),
    clientName: z.string().default('Clash Verge Rev'),
  }),
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparisons' }),
  schema: baseContentSchema.extend({
    comparedBrandSlugs: z.array(z.string()).default(['guangsuyun', 'muguang', 'feimao']),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/topics' }),
  schema: baseContentSchema,
});

export const collections = {
  articles,
  reviews,
  guides,
  comparisons,
  topics,
};
