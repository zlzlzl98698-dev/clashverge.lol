import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

async function main() {
  const outDir = path.resolve('docs/seo');
  fs.mkdirSync(outDir, { recursive: true });

  // Use Vite SSR loader to import TypeScript data files directly
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'silent',
  });

  try {
    const navMod = await vite.ssrLoadModule('/src/data/navigation.ts');
    const brandMod = await vite.ssrLoadModule('/src/data/brands.ts');
    const planMod = await vite.ssrLoadModule('/src/data/content-plan.ts');
    const clientMod = await vite.ssrLoadModule('/src/data/clients.ts');

    const { PRIMARY_NAVIGATION, ALL_SECONDARY_TOPICS, ALL_TERTIARY_CLUSTERS } = navMod;
    const { AIRPORT_BRANDS } = brandMod;
    const { FULL_CONTENT_PLAN, PUBLISHED_SLUGS_MAP } = planMod;
    const { PROXY_CLIENTS } = clientMod;

    // 1. SEO-一级导航规划.md
    const doc1 = [
      '# SEO 一级导航规划 (Primary Navigation Pillar Architecture)',
      '',
      '> 站点域名：`https://clashverge.lol` | 品牌名称：`clash订阅` | 核实日期：`2026-11-18`',
      '',
      '本网站顶部严格采用四大一级栏目，每个一级栏目均有独立可访问的 Pillar 专题总览页，下辖 7 个二级专题（总计 28 个二级专题）与 14 个三级文章集群（总计 56 个三级集群）。',
      '',
      '| 序号 | 一级导航名称 | 路由 URL | 核心定位徽标 | SEO Title | 包含二级专题数 | 包含三级集群数 |',
      '| :---: | :--- | :--- | :--- | :--- | :---: | :---: |',
      ...PRIMARY_NAVIGATION.map(
        (s, i) =>
          `| 0${i + 1} | **${s.name}** | \`${s.url}\` | ${s.heroBadge} | ${s.seoTitle} | ${s.topics.length} | ${s.topics.length * 2} |`
      ),
      '',
      '## 各一级栏目详细说明',
      ...PRIMARY_NAVIGATION.flatMap((s, i) => [
        `### ${i + 1}. ${s.name} (\`${s.url}\`)`,
        `- **SEO 描述**：${s.description}`,
        `- **栏目导语**：${s.intro}`,
        `- **下属 7 个二级专题**：${s.topics.map((t) => `[${t.name}](${t.url})`).join('、')}`,
        '',
      ]),
    ].join('\n');
    fs.writeFileSync(path.join(outDir, 'SEO-一级导航规划.md'), doc1, 'utf8');

    // 2. SEO-二级专题规划.md
    const doc2 = [
      '# SEO 二级专题规划 (28 Secondary Topic Hubs)',
      '',
      '全站共设 **28 个独立二级专题页面**（4 个一级栏目 × 7 个二级专题），每个专题均具有唯一 URL、独立 H1、主关键词、搜索意图与关联品牌矩阵。',
      '',
      '| # | 所属一级导航 | 二级专题名称 | 独立 URL | 主关键词 | 次级关键词 | 搜索意图 | 关联品牌(Slug) |',
      '| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
      ...ALL_SECONDARY_TOPICS.map(
        (t, idx) =>
          `| ${idx + 1} | ${t.category} | **${t.name}** | \`${t.url}\` | ${t.primaryKeyword} | ${t.secondaryKeywords.join(' / ')} | ${t.searchIntent} | ${t.featuredBrandSlugs.join(', ')} |`
      ),
    ].join('\n');
    fs.writeFileSync(path.join(outDir, 'SEO-二级专题规划.md'), doc2, 'utf8');

    // 3. SEO-三级文章集群规划.md
    const doc3 = [
      '# SEO 三级文章集群规划 (56 Tertiary Article Clusters)',
      '',
      '每个二级专题下规划 2 个三级文章集群，全站共计 **56 个三级文章集群**。每个集群均绑定一篇已发布的代表性核心支柱文章（Core Article），并扩展 6 篇细分长尾规划。',
      '',
      '| # | 集群ID | 所属二级专题 | 三级集群名称 | 目标主关键词 | 核心用户搜索问题 | 已发布核心文章Slug | 关联品牌 |',
      '| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
      ...ALL_TERTIARY_CLUSTERS.map(
        (c, idx) =>
          `| ${idx + 1} | \`${c.id}\` | ${c.topicName} (\`${c.topicUrl}\`) | **${c.name}** | ${c.targetKeyword} | ${c.userQuestion} | \`${c.coreArticleSlug}\` | ${c.relatedBrands.join(', ')} |`
      ),
    ].join('\n');
    fs.writeFileSync(path.join(outDir, 'SEO-三级文章集群规划.md'), doc3, 'utf8');

    // 4. SEO-完整文章标题库.md (392 records + 3 standalone reviews/comparisons = 395 total records)
    const publishedCount = Object.keys(PUBLISHED_SLUGS_MAP).length;
    const doc4 = [
      '# SEO 完整文章标题库 (392 篇集群规划记录 + 真实发布状态映射)',
      '',
      `- **规划文章总记录数**：${FULL_CONTENT_PLAN.length} 条（覆盖 56 个三级集群 × 7 篇/集群 = 392 条规划）`,
      `- **实际已发布独立原创文章/评测/对比/教程数**：${publishedCount} 篇（全部拥有完整 Markdown/MDX 正文与真实可访问路由）`,
      `- **尚待撰写扩展文章数**：${FULL_CONTENT_PLAN.filter((p) => p.status === 'Planned').length} 篇（清晰标记为 \`Planned\`，不生成空壳页面，不进入生产 Sitemap）`,
      '',
      '| 规划ID | 所属集群ID | 文章标题 | URL 路由 | 文件路径 | 主关键词 | 搜索意图 | 优先级 | 当前状态 |',
      '| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: |',
      ...FULL_CONTENT_PLAN.map(
        (item) =>
          `| ${item.id} | \`${item.clusterId}\` | ${item.title} | \`${item.url}\` | \`${item.filePath}\` | ${item.primaryKeyword} | ${item.searchIntent} | ${item.priority} | **${item.status}** |`
      ),
    ].join('\n');
    fs.writeFileSync(path.join(outDir, 'SEO-完整文章标题库.md'), doc4, 'utf8');

    // 5. SEO-关键词映射表.csv
    const csv5Rows = [
      'Page_Type,Title_or_Name,URL,Primary_Keyword,Secondary_Keywords,Search_Intent,Decision_Stage,Upstream_Hub,Downstream_Target',
      ...ALL_SECONDARY_TOPICS.map(
        (t) =>
          `"Secondary_Topic","${t.name}","${t.url}","${t.primaryKeyword}","${t.secondaryKeywords.join('|')}","${t.searchIntent}","Comparison","/${t.category}/","/brands/"`
      ),
      ...AIRPORT_BRANDS.map(
        (b) =>
          `"Brand_Review","${b.name}深度评测","/brands/${b.slug}/","${b.name}怎么样","${b.name}评测|${b.name}优惠码|${b.name}价格","Commercial Investigation","Decision","/brands/","${b.registerUrl}"`
      ),
      ...Object.entries(PUBLISHED_SLUGS_MAP).map(
        ([slug, info]) =>
          `"Published_Content","${info.title}","${info.url}","${slug}","2026实测|IEPL专线","Informational_or_Commercial","Evaluation","/articles/","/brands/guangsuyun/"`
      ),
    ];
    fs.writeFileSync(path.join(outDir, 'SEO-关键词映射表.csv'), '\uFEFF' + csv5Rows.join('\n'), 'utf8');

    // 6. GEO-实体关系映射表.csv
    const csv6Rows = [
      'Subject_Entity,Subject_Type,Predicate_Relation,Object_Entity,Object_Type,Verification_Status,Source_File',
      ...AIRPORT_BRANDS.flatMap((b) => [
        `"${b.name}","AirportBrand","usesLineArchitecture","${b.lineType}","NetworkLineType","${b.verificationStatus}","32家机场品牌清单.txt"`,
        `"${b.name}","AirportBrand","supportsProtocol","${b.protocols.join('/')}","ProxyProtocol","${b.verificationStatus}","32家机场品牌清单.txt"`,
        `"${b.name}","AirportBrand","providesClientMode","${b.clientSupport}","ClientDeliveryMode","${b.verificationStatus}","32家机场品牌清单.txt"`,
        `"${b.name}","AirportBrand","offersCouponCode","${b.couponCode}","PromotionCode","${b.verificationStatus}","32家机场品牌清单.txt"`,
      ]),
      ...PROXY_CLIENTS.map(
        (c) =>
          `"${c.name}","ProxyClientSoftware","poweredByCore","${c.coreType}","ProxyCoreEngine","${c.maintenanceStatus}","第三方代理客户端.txt"`
      ),
    ];
    fs.writeFileSync(path.join(outDir, 'GEO-实体关系映射表.csv'), '\uFEFF' + csv6Rows.join('\n'), 'utf8');

    // 7. GEO-长尾问题库.csv
    const csv7Rows = [
      'Question_ID,Category,Topic_Slug,Cluster_ID,Long_Tail_Question,Target_Entity,Answer_Page_URL',
      ...ALL_TERTIARY_CLUSTERS.flatMap((c, idx) =>
        c.geoQuestions.map(
          (q, qIdx) =>
            `"GEO-Q-${String(idx * 2 + qIdx + 1).padStart(3, '0')}","${c.categoryKey}","${c.topicSlug}","${c.id}","${q}","${c.targetKeyword}","${c.topicUrl}"`
        )
      ),
      ...AIRPORT_BRANDS.flatMap((b, bIdx) =>
        b.faq.map(
          (f, fIdx) =>
            `"GEO-B-${String(bIdx + 1).padStart(2, '0')}-${fIdx + 1}","brands","${b.slug}","brand-faq","${f.q}","${b.name}","/brands/${b.slug}/"`
        )
      ),
    ];
    fs.writeFileSync(path.join(outDir, 'GEO-长尾问题库.csv'), '\uFEFF' + csv7Rows.join('\n'), 'utf8');

    // 8. SEO-内部链接矩阵.csv
    const csv8Rows = [
      'Source_Page_Type,Source_URL,Target_Page_Type,Target_URL,Anchor_Context,Link_Purpose',
      ...PRIMARY_NAVIGATION.flatMap((s) =>
        s.topics.map(
          (t) =>
            `"Primary_Pillar","${s.url}","Secondary_Topic","${t.url}","${t.name}专题","Pillar to Secondary Hub"`
        )
      ),
      ...ALL_SECONDARY_TOPICS.flatMap((t) => [
        ...t.clusters.map(
          (c) =>
            `"Secondary_Topic","${t.url}","Cluster_Core_Article","${PUBLISHED_SLUGS_MAP[c.coreArticleSlug]?.url || '/articles/'}","${c.name}核心长文","Topic to Core Article"`
        ),
        ...t.featuredBrandSlugs.map(
          (bSlug) =>
            `"Secondary_Topic","${t.url}","Brand_Detail","/brands/${bSlug}/","${bSlug}深度评测与套餐","Topic to Brand Review"`
        ),
      ]),
      ...AIRPORT_BRANDS.map(
        (b) =>
          `"Brand_Directory","/brands/","Brand_Detail","/brands/${b.slug}/","${b.name}深度评测与测速","Directory to Brand Profile"`
      ),
    ];
    fs.writeFileSync(path.join(outDir, 'SEO-内部链接矩阵.csv'), '\uFEFF' + csv8Rows.join('\n'), 'utf8');

    // 9. SEO-内容发布优先级.md
    const doc9 = [
      '# SEO 内容发布优先级规划 (Content Publication Priority Roadmap)',
      '',
      '## 一、P0 级（核心支柱与商业转化优先级 —— 100% 已完成并上线）',
      '- **首选商业合作品牌深度矩阵**：《[光速云深度评测（2026实测）](/reviews/guangsuyun-in-depth-review-2026/)》、光速云品牌详情页（`/brands/guangsuyun/`）、《[光速云 vs 暮光加速 vs 飞猫云横向对比](/comparisons/guangsuyun-vs-muguang-vs-feimao-comparison/)》。',
      '- **四大一级栏目与 28 个二级专题对应的 32 篇核心代表作**：已全部完成高质量原创撰写（每篇包含完整 Answer-First 结论、实测对比表格、配置代码块与 FAQ）。',
      '- **31 家去重独立品牌评测页（`/brands/[slug]/`）**：已全部上线并纳入 Sitemap 与 Pagefind 索引。',
      '',
      '## 二、P1 级（高搜索量细分教程与同档位横向 PK）',
      '- 针对 56 个三级集群中的 `benchmark`（晚高峰实测对比）与 `beginner-setup`（新手分步配置）子选题持续扩充。',
      '',
      '## 三、P2 & P3 级（长尾排障与 GEO 问答扩展）',
      '- 围绕 `GEO-长尾问题库.csv` 中的细分报错代码与特定路由器固件版本逐步迭代发布。',
    ].join('\n');
    fs.writeFileSync(path.join(outDir, 'SEO-内容发布优先级.md'), doc9, 'utf8');

    // 10. SEO-品牌评测规划.md
    const doc10 = [
      '# SEO 品牌评测规划与内容大纲 (31 Independent Brands Outline)',
      '',
      '针对去重后的 **31 家独立机场品牌**，每个品牌均建立独立评测页路由 `/brands/[slug]/`，并包含 16 个标准化信息模块（基础设施快照、价格单价核算、五地测速图、流媒体/AI解锁矩阵、拓扑图、客户端说明、优缺点、同类对比与 FAQ）。',
      '',
      ...AIRPORT_BRANDS.flatMap((b, i) => [
        `## ${i + 1}. ${b.name} (${b.englishName}) — \`/brands/${b.slug}/\``,
        `- **主要搜索意图**：Commercial Investigation / 品牌评测与优惠码核实`,
        `- **主关键词**：\`${b.name}怎么样\` | **次级关键词**：\`${b.name}评测\`、\`${b.name}优惠码(${b.couponCode})\`、\`${b.name}套餐价格\``,
        `- **核心评测结论**：${b.editorialVerdict}`,
        `- **线路与协议**：${b.lineType} · ${b.protocols.join(' / ')} | **客户端支持**：${b.clientSupport}`,
        `- **适合人群**：${b.targetAudience.join('；')} | **不适合人群**：${b.notSuitableFor.join('；')}`,
        `- **同类品牌差异**：${b.peerComparisonNote}`,
        `- **核实状态**：\`${b.verificationStatus}\`（核实日：${b.verifiedDate}）`,
        '',
      ]),
    ].join('\n');
    fs.writeFileSync(path.join(outDir, 'SEO-品牌评测规划.md'), doc10, 'utf8');

    // 11. SEO-URL路由规划.csv
    const csv11Rows = [
      'Route_URL,Route_Category,Source_Template_or_File,Indexable_in_Sitemap,Trailing_Slash_Policy',
      '"/","Homepage","src/pages/index.astro","Yes","always"',
      ...PRIMARY_NAVIGATION.map(
        (s) => `"${s.url}","Primary_Category","src/pages/${s.key}/index.astro","Yes","always"`
      ),
      ...ALL_SECONDARY_TOPICS.map(
        (t) => `"${t.url}","Secondary_Topic","src/pages/${t.category}/[topic].astro","Yes","always"`
      ),
      '"/brands/","Brand_Database_Hub","src/pages/brands/index.astro","Yes","always"',
      ...AIRPORT_BRANDS.map(
        (b) => `"/brands/${b.slug}/","Brand_Review_Detail","src/pages/brands/[slug].astro","Yes","always"`
      ),
      '"/articles/","Articles_Index","src/pages/articles/index.astro","Yes","always"',
      '"/reviews/","Reviews_Index","src/pages/reviews/index.astro","Yes","always"',
      '"/comparisons/","Comparisons_Index","src/pages/comparisons/index.astro","Yes","always"',
      '"/guides/","Guides_Index","src/pages/guides/index.astro","Yes","always"',
      ...Object.values(PUBLISHED_SLUGS_MAP).map(
        (info) => `"${info.url}","Published_Article","${info.filePath}","Yes","always"`
      ),
      '"/search/","Search_Page","src/pages/search/index.astro","Yes","always"',
      '"/privacy/","Legal_Page","src/pages/privacy/index.astro","Yes","always"',
      '"/disclaimer/","Legal_Page","src/pages/disclaimer/index.astro","Yes","always"',
      '"/disclosure/","Legal_Page","src/pages/disclosure/index.astro","Yes","always"',
      '"/404/","Error_Page","src/pages/404.astro","No","always"',
    ];
    fs.writeFileSync(path.join(outDir, 'SEO-URL路由规划.csv'), '\uFEFF' + csv11Rows.join('\n'), 'utf8');

    // 12. 品牌数据审计报告.md
    const doc12 = [
      '# 32条原始记录与 31 家独立机场品牌数据审计报告',
      '',
      '## 一、品牌数量与去重审计结论',
      '1. **原始清单文件**：`32家机场品牌清单.txt`（共 1213 行）+ `光速云品牌信息.txt`（共 84 行）。',
      '2. **主列表 28 家品牌**：原文第 920 行汇总表编号为 `1–28`（注：正文中标题编号曾重复使用 `## 7.` 三次并跳过 `## 9.` 与 `## 22.`，实际独立主体为 28 家）。',
      '3. **末尾附加 4 条历史品牌库记录**（第 966–1198 行）：`灵动云`、`浪网`、`边缘节点 EdgeNova`、`Firefly 萤火虫`。',
      '4. **重复品牌合并确认**：末尾的 `Firefly 萤火虫`（入口 `vip02.fireflyaff.com`，优惠码 `firefly`）与主列表 #8 `Firefly` 为同一品牌的不同时期记录。本站已将两者合并入唯一的 `/brands/firefly/` 档案，因此全库实际共 **31 家独立去重机场品牌**。',
      '',
      '## 二、同规格品牌群组与链接异常审计',
      '- **5.6元/月（60GB/月）同质化五品牌**：`大佬云`、`闪电鼠`、`云界线`、`榴莲云`、`环球梯` 均采用 `qwerty.*aff.com` 域名结构与相同参数。其中 `云界线` 与 `环球梯` 原始链接缺少 `#` 路由符，`榴莲云` 缺少 `/` 斜杠且未注明协议类型。',
      '- **18元/月 IEPL 双品牌**：`极连云`（2024年，100GB）与 `光年梯`（2025年，110GB）。',
      '- **历史同系关系记录**：`Firefly` 历史档案明确记录其与 `微风网络`、飞鸟、一云梯存在同系关系。',
    ].join('\n');
    fs.writeFileSync(path.join(outDir, '品牌数据审计报告.md'), doc12, 'utf8');

    // 13. 数据来源及核实记录.md
    const doc13 = [
      '# 数据来源及核实记录 (Data Provenance & Verification Log)',
      '',
      '## 一、核实数据源清单',
      '1. `32家机场品牌清单.txt`：提供 31 家独立品牌的注册推广链接、优惠码、套餐价格表及 15 家品牌的 2026-10-19 非晚高峰五地实测数据、1 家品牌（灵动云）的 2026-07 珠海联通 9Gbps 实测记录。',
      '2. `光速云品牌信息.txt`：提供首选合作品牌光速云的详细定位、支付方式与节点分布。**特别记录**：该文件第 8 行概要曾写“8元/月，59GB”，而正式套餐表及主清单均为“轻量版 99元/年，69GB/月”，已在全站明确标注该历史文案差异。',
      '3. `第三方代理客户端.txt`：提供六大平台 22 款代理客户端的核心定位、维护状态警告（Mihomo Party、NekoBox）及 OpenWrt 24.10+ 版本依赖说明（Nikki）。',
      '4. `机场品牌图表样式.txt`：定义 Dark Network Observatory 视觉规范与状态标识体系（`OPERATIONAL` / `PARTIAL` / `VENDOR DATA` / `NOT TESTED`）。',
      '',
      '## 二、各品牌核实状态汇总表',
      '| # | 品牌名称 | Slug | 核实状态代码 | 测速基准日 | 优惠码核实 |',
      '| :---: | :--- | :--- | :--- | :--- | :--- |',
      ...AIRPORT_BRANDS.map(
        (b, i) =>
          `| ${i + 1} | ${b.name} | \`${b.slug}\` | \`${b.verificationStatus}\` | ${b.speedTestDate} | \`${b.couponCode}\` |`
      ),
    ].join('\n');
    fs.writeFileSync(path.join(outDir, '数据来源及核实记录.md'), doc13, 'utf8');

    console.log('Successfully generated all 13 SEO/GEO planning documents in docs/seo/');
  } finally {
    await vite.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
