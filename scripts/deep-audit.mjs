import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getFiles(distDir);

const report = {
  totalFiles: htmlFiles.length,
  canonicalIssues: [],
  emptyHrefs: [],
  internalDeadLinks: [],
  outboundLinks: [],
  unrelOutbound: [],
  titles: new Map(),
  descriptions: new Map(),
  duplicateTitles: [],
  duplicateDescriptions: [],
  jsonLdErrors: [],
  schemaTypes: new Set(),
  wordCounts: [],
  thinPages: [], // < 500 words
  leaks: [],
  h1Issues: [],
  sitemapUrls: [],
  sitemapIssues: []
};

// Check Sitemap
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
if (fs.existsSync(sitemap0Path)) {
  const content = fs.readFileSync(sitemap0Path, 'utf8');
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    const url = match[1];
    report.sitemapUrls.push(url);
    if (!url.startsWith('https://clashverge.lol/')) {
      report.sitemapIssues.push(`Non-canonical sitemap domain: ${url}`);
    }
    if (url.includes('/404') || url.includes('/draft/') || url.includes('/internal/')) {
      report.sitemapIssues.push(`Disallowed URL in sitemap: ${url}`);
    }
    // Check if target file exists in dist
    const subPath = url.replace('https://clashverge.lol/', '');
    const localTarget = path.join(distDir, subPath, 'index.html');
    const directTarget = path.join(distDir, subPath);
    if (!fs.existsSync(localTarget) && !fs.existsSync(directTarget)) {
      report.sitemapIssues.push(`Sitemap URL missing in dist: ${url}`);
    }
  }
}

// Build file lookup set
const validPaths = new Set();
for (const file of htmlFiles) {
  const rel = path.relative(distDir, file).replace(/\\/g, '/');
  validPaths.add('/' + rel);
  if (rel.endsWith('index.html')) {
    const route = '/' + rel.replace(/index\.html$/, '');
    validPaths.add(route);
    if (route.endsWith('/') && route.length > 1) {
      validPaths.add(route.slice(0, -1));
    }
  }
}

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // Check Leaks (local Windows paths, internal IPs, other project names)
  if (content.includes('C:\\Users') || content.includes('C:/Users')) {
    report.leaks.push({ file: relPath, leak: 'Local Windows filesystem path leak' });
  }
  if (/192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2[0-9]|3[0-1])\.\d+\.\d+/.test(content)) {
    report.leaks.push({ file: relPath, leak: 'Private LAN IP address leak' });
  }
  if (content.includes('clashverge.sbs') && !content.includes('clashverge.lol')) {
    report.leaks.push({ file: relPath, leak: 'Unexpected clashverge.sbs without clashverge.lol' });
  }

  // Canonical tag check
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    if (!relPath.includes('404.html')) {
      report.canonicalIssues.push({ file: relPath, error: 'Missing canonical tag' });
    }
  } else {
    const canonical = canonicalMatch[1];
    if (!canonical.startsWith('https://clashverge.lol/')) {
      report.canonicalIssues.push({ file: relPath, error: `Invalid canonical domain: ${canonical}` });
    }
    if (!canonical.endsWith('/') && !canonical.endsWith('.html') && !canonical.endsWith('.xml')) {
      report.canonicalIssues.push({ file: relPath, error: `Canonical missing trailing slash: ${canonical}` });
    }
  }

  // Title & Description
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (!title) {
    report.h1Issues.push({ file: relPath, error: 'Missing title tag' });
  } else {
    if (!report.titles.has(title)) report.titles.set(title, []);
    report.titles.get(title).push(relPath);
  }

  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';
  if (desc) {
    if (!report.descriptions.has(desc)) report.descriptions.set(desc, []);
    report.descriptions.get(desc).push(relPath);
  }

  // H1 check
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    if (!relPath.includes('404.html')) {
      report.h1Issues.push({ file: relPath, error: 'Missing H1 tag' });
    }
  } else if (h1Matches.length > 1) {
    report.h1Issues.push({ file: relPath, error: `Multiple H1 tags (${h1Matches.length})` });
  }

  // JSON-LD extraction and validation
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let jsonMatch;
  while ((jsonMatch = jsonLdRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(jsonMatch[1]);
      if (parsed['@graph'] && Array.isArray(parsed['@graph'])) {
        for (const item of parsed['@graph']) {
          if (item['@type']) report.schemaTypes.add(item['@type']);
        }
      } else if (Array.isArray(parsed)) {
        for (const item of parsed) {
          if (item['@type']) report.schemaTypes.add(item['@type']);
        }
      } else if (parsed && parsed['@type']) {
        report.schemaTypes.add(parsed['@type']);
      }
    } catch (e) {
      report.jsonLdErrors.push({ file: relPath, error: e.message });
    }
  }

  // Links check
  const linkRegex = /<a\s+([^>]*?)>/gi;
  let aMatch;
  while ((aMatch = linkRegex.exec(content)) !== null) {
    const attrs = aMatch[1];
    const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
    const relMatch = attrs.match(/rel=["']([^"']*)["']/i);
    const relVal = relMatch ? relMatch[1] : '';

    if (!hrefMatch || hrefMatch[1].trim() === '' || hrefMatch[1].trim() === '#') {
      report.emptyHrefs.push({ file: relPath, tag: aMatch[0] });
      continue;
    }

    const href = hrefMatch[1].trim();
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://clashverge.lol')) {
        report.outboundLinks.push({ file: relPath, href, rel: relVal });
        // Check if outbound affiliate / promo link lacks nofollow
        if (!relVal.includes('nofollow')) {
          report.unrelOutbound.push({ file: relPath, href, rel: relVal });
        }
      }
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      // Internal link
      const cleanHref = href.split('#')[0].split('?')[0];
      if (cleanHref && cleanHref !== '/' && !validPaths.has(cleanHref) && !validPaths.has(cleanHref.replace(/\/$/, ''))) {
        // Exclude static assets
        if (!cleanHref.startsWith('/images/') && !cleanHref.startsWith('/logos/') && !cleanHref.startsWith('/pagefind/') && !cleanHref.endsWith('.xml') && !cleanHref.endsWith('.svg') && !cleanHref.endsWith('.png') && !cleanHref.endsWith('.ico')) {
          report.internalDeadLinks.push({ file: relPath, href });
        }
      }
    }
  }

  // Content word count approximation (stripping HTML tags)
  const textContent = content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Chinese character count + English word count
  const zhCount = (textContent.match(/[\u4e00-\u9fa5]/g) || []).length;
  const enCount = (textContent.match(/[a-zA-Z0-9_-]+/g) || []).length;
  const totalCount = zhCount + enCount;
  
  report.wordCounts.push({ file: relPath, count: totalCount, zhCount });
  if (totalCount < 600 && !relPath.includes('404.html') && !relPath.includes('search')) {
    report.thinPages.push({ file: relPath, count: totalCount });
  }
}

// Check duplicates
for (const [title, files] of report.titles.entries()) {
  if (files.length > 1) {
    report.duplicateTitles.push({ title, count: files.length, files });
  }
}
for (const [desc, files] of report.descriptions.entries()) {
  if (files.length > 1) {
    report.duplicateDescriptions.push({ desc: desc.slice(0, 60) + '...', count: files.length, files });
  }
}

const domainCounts = {};
for (const item of report.outboundLinks) {
  try {
    const host = new URL(item.href).hostname;
    domainCounts[host] = (domainCounts[host] || 0) + 1;
  } catch(e) {}
}

console.log('--- AUDIT SCAN RESULTS ---');
console.log('Total HTML files:', report.totalFiles);
console.log('Sitemap URLs count:', report.sitemapUrls.length);
console.log('Sitemap issues:', report.sitemapIssues);
console.log('Canonical issues:', report.canonicalIssues.length);
console.log('Empty Hrefs count:', report.emptyHrefs.length);
console.log('Internal dead links count:', report.internalDeadLinks.length);
console.log('Total Outbound links count:', report.outboundLinks.length);
console.log('Outbound domains:', domainCounts);
console.log('Outbound links without nofollow count:', report.unrelOutbound.length);
console.log('Duplicate Titles count:', report.duplicateTitles.length);
console.log('Duplicate Descriptions count:', report.duplicateDescriptions.length);
console.log('JSON-LD Syntax Errors:', report.jsonLdErrors.length);
console.log('Schema Types detected:', Array.from(report.schemaTypes));
console.log('Thin pages (<600 words):', report.thinPages.length);
console.log('H1 issues count:', report.h1Issues.length);
console.log('Word count stats: Min:', Math.min(...report.wordCounts.map(w => w.count)), 'Max:', Math.max(...report.wordCounts.map(w => w.count)), 'Avg:', Math.round(report.wordCounts.reduce((a, b) => a + b.count, 0) / report.wordCounts.length));

