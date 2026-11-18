import fs from 'node:fs';

const indexHtml = fs.readFileSync('dist/index.html', 'utf8');
const q1 = indexHtml.includes('2026年第一次选择机场或VPN，应该优先看哪些指标？');
const q2 = indexHtml.includes('本站首选推荐的「光速云」与排行榜上的其他品牌是什么关系？');
const q3 = indexHtml.includes('原版 Clash for Windows 停更后，现在电脑和手机用什么客户端最好？');
const q4 = indexHtml.includes('为什么你们强烈建议新手“先买月付或百元内小包实测，不要直接买三年付”？');

console.log('Homepage visible FAQ match:', { q1, q2, q3, q4 });

// Brand page schema
const brandHtml = fs.readFileSync('dist/brands/guangsuyun/index.html', 'utf8');
const brandSchemaMatch = brandHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (brandSchemaMatch) {
  const data = JSON.parse(brandSchemaMatch[1]);
  console.log('Brand schema types:', data['@graph'] ? data['@graph'].map(i => i['@type']) : data['@type']);
}

// Category page Answer-First check
const catHtml = fs.readFileSync('dist/airport/recommend/index.html', 'utf8');
console.log('Category page has Answer-First text:', catHtml.includes('Answer-First') || catHtml.includes('核心结论') || catHtml.includes('省流'));

// OG Image types
let ogImages = new Set();
const distFiles = fs.readdirSync('dist', { recursive: true }).filter(f => f.endsWith('.html'));
for (const f of distFiles) {
  const c = fs.readFileSync('dist/' + f, 'utf8');
  const m = c.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
  if (m) {
    const ext = m[1].split('.').pop();
    ogImages.add(ext);
  }
}
console.log('OG Image extensions in site:', Array.from(ogImages));

// Check alt attributes on images
let missingAlts = [];
for (const f of distFiles) {
  const c = fs.readFileSync('dist/' + f, 'utf8');
  const imgMatches = c.matchAll(/<img\s+([^>]*?)>/gi);
  for (const im of imgMatches) {
    if (!im[1].includes('alt=') || /alt=["']\s*["']/.test(im[1])) {
      missingAlts.push({ file: f, img: im[0] });
    }
  }
}
console.log('Images missing alt or empty alt count:', missingAlts.length);
if (missingAlts.length > 0) console.log('Sample missing alt:', missingAlts.slice(0, 3));
