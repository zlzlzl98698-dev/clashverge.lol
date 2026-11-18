import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../data/site';

export const GET: APIRoute = () => {
  const disallowedPaths = [
    'Disallow: /404/',
    'Disallow: /draft/',
    'Disallow: /internal/',
    'Disallow: /go/',
  ];

  const content = [
    '# =========================================================',
    `# Robots.txt for ${SITE_CONFIG.brandName} (${SITE_CONFIG.domain})`,
    '# =========================================================',
    '',
    '# Global Search Engines (Google & Bing)',
    'User-agent: Googlebot',
    'Allow: /',
    ...disallowedPaths,
    '',
    'User-agent: bingbot',
    'Allow: /',
    ...disallowedPaths,
    '',
    '# Chinese Search Engines (Baidu & Shenma / Quark)',
    'User-agent: Baiduspider',
    'Allow: /',
    ...disallowedPaths,
    '',
    'User-agent: yisouspider',
    'Allow: /',
    ...disallowedPaths,
    '',
    '# Universal Fallback',
    'User-agent: *',
    'Allow: /',
    ...disallowedPaths,
    '',
    `Sitemap: ${SITE_CONFIG.siteUrl}/sitemap-index.xml`,
    `Sitemap: ${SITE_CONFIG.siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
