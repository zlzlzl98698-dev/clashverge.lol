import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://clashverge.lol',
  output: 'static',
  trailingSlash: 'always',
  server: {
    port: 4399,
    host: true,
  },
  preview: {
    port: 4399,
    host: true,
  },
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/draft/') &&
        !page.includes('/internal/') &&
        !page.includes('/go/'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date('2026-11-18'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
