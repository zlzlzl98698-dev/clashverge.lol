import fs from 'node:fs';
import path from 'node:path';

function walkFiles(dir, extFilter) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkFiles(full, extFilter));
    } else if (!extFilter || extFilter(full)) {
      results.push(full);
    }
  }
  return results;
}

function main() {
  console.log('=== 1. Scanning Markdown/MDX files for hardcoded affiliate links ===');
  const contentFiles = walkFiles(path.resolve('src/content'), (f) => f.endsWith('.md') || f.endsWith('.mdx'));
  const affPatterns = [
    /gsyvipaff\.com/i,
    /twilightaff\.com/i,
    /flycataff\.com/i,
    /breezenetaff\.com/i,
    /dalaoyunaff\.com/i,
    /2maoyunaff\.cc/i,
    /worryfreeaff\.com/i,
    /v2yunvipaff\.com/i,
    /fireflyaff\.com/i,
    /yuzoucloud\.cc/i,
    /1flyunaff\.cc/i,
    /sogoyunaff\.cc/i,
    /kosingaff\.com/i,
    /speedworldaff\.cc/i,
    /flashleapaff\.com/i,
    /gcvipaff\.com/i,
    /shandianshuaff\.com/i,
    /yunjiexianaff\.com/i,
    /liulianyunaff\.com/i,
    /shenxingaff\.com/i,
    /huanqiutiaff\.com/i,
    /invisibleaff\.com/i,
    /ladderaff\.com/i,
    /lingdongaff\.com/i,
    /wavenetaff\.com/i,
    /edgenovaaff\.cc/i,
    /\?code=/i,
  ];

  let hardcodedCount = 0;
  for (const file of contentFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const pat of affPatterns) {
      if (pat.test(text)) {
        console.error(`[ERROR] Hardcoded affiliate link found in ${file} matching ${pat}`);
        hardcodedCount++;
      }
    }
  }
  if (hardcodedCount === 0) {
    console.log(`[PASS] 0 hardcoded affiliate links in ${contentFiles.length} Markdown/MDX files.`);
  } else {
    process.exit(1);
  }

  console.log('\n=== 2. Verifying dist/ static build artifacts, links, SEO & Pagefind ===');
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) {
    console.error('[ERROR] dist/ directory does not exist. Run npm run build first.');
    process.exit(1);
  }

  const requiredFiles = [
    'sitemap-index.xml',
    'sitemap-0.xml',
    'robots.txt',
    '.htaccess',
    'pagefind/pagefind.js',
    '404/index.html',
  ];
  for (const reqFile of requiredFiles) {
    const p = path.join(distDir, reqFile);
    if (!fs.existsSync(p)) {
      // Astro may generate 404.html at root depending on build format
      if (reqFile === '404/index.html' && fs.existsSync(path.join(distDir, '404.html'))) {
        console.log('[PASS] Required artifact exists: 404.html');
        continue;
      }
      console.error(`[ERROR] Missing required build artifact: ${reqFile}`);
      process.exit(1);
    }
    console.log(`[PASS] Required artifact exists: ${reqFile}`);
  }

  const htmlFiles = walkFiles(distDir, (f) => f.endsWith('.html'));
  console.log(`[INFO] Total generated HTML pages in dist/: ${htmlFiles.length}`);

  let brokenInternalLinks = 0;
  let missingSeoCount = 0;

  for (const htmlFile of htmlFiles) {
    const html = fs.readFileSync(htmlFile, 'utf8');
    const relPath = path.relative(distDir, htmlFile);

    // Skip utility redirection hops
    if (relPath.startsWith('go\\') || relPath.startsWith('go/')) {
      continue;
    }

    if (!/<title>[^<]+<\/title>/i.test(html)) {
      console.error(`[ERROR] Missing <title> in ${relPath}`);
      missingSeoCount++;
    }
    if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(html)) {
      console.error(`[ERROR] Missing meta description in ${relPath}`);
      missingSeoCount++;
    }
    if (!/<link\s+rel="canonical"\s+href="https:\/\/clashverge\.lol/i.test(html)) {
      console.error(`[ERROR] Missing canonical in ${relPath}`);
      missingSeoCount++;
    }
    if (!/<h1[\s>]/i.test(html)) {
      console.error(`[ERROR] Missing <h1> in ${relPath}`);
      missingSeoCount++;
    }
    if (!/application\/ld\+json/i.test(html)) {
      console.error(`[ERROR] Missing JSON-LD structured data in ${relPath}`);
      missingSeoCount++;
    }

    // Check internal links
    const hrefRegex = /href="(\/[^"#?]*)/g;
    let match;
    while ((match = hrefRegex.exec(html)) !== null) {
      const targetHref = match[1];
      if (targetHref === '/') continue;
      const cleanPath = decodeURIComponent(targetHref).replace(/^\/+/, '');
      const candidateFile = path.join(distDir, cleanPath);
      const candidateIndex = path.join(distDir, cleanPath, 'index.html');
      const candidateHtml = path.join(distDir, `${cleanPath.replace(/\/$/, '')}.html`);
      if (
        !fs.existsSync(candidateFile) &&
        !fs.existsSync(candidateIndex) &&
        !fs.existsSync(candidateHtml)
      ) {
        console.error(`[ERROR] Broken internal link in ${relPath} -> ${targetHref}`);
        brokenInternalLinks++;
      }
    }
  }

  if (missingSeoCount > 0 || brokenInternalLinks > 0) {
    console.error(`[FAIL] SEO errors: ${missingSeoCount}, Broken internal links: ${brokenInternalLinks}`);
    process.exit(1);
  }

  console.log(`[PASS] All ${htmlFiles.length} HTML pages passed SEO, Schema, and internal link integrity checks!`);
}

main();
