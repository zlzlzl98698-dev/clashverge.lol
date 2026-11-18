import { ALL_TERTIARY_CLUSTERS } from './navigation';

export interface PlannedArticleRecord {
  id: string;
  clusterId: string;
  clusterName: string;
  categoryKey: string;
  topicSlug: string;
  title: string;
  slug: string;
  url: string;
  filePath: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  outline: string[];
  targetAudience: string;
  faqQuestion: string;
  internalLinkTarget: string;
  priority: 'P0-Core' | 'P1-High' | 'P2-Medium' | 'P3-Expansion';
  status: 'Published' | 'Planned';
}

// Slugs that are actually published in src/content/
export const PUBLISHED_SLUGS_MAP: Record<string, { url: string; filePath: string; title: string }> = {
  '2026-airport-recommendation-guide': {
    url: '/articles/2026-airport-recommendation-guide/',
    filePath: 'src/content/articles/2026-airport-recommendation-guide.md',
    title: '2026 机场推荐终极指南：31家IEPL/IPLC专线机场实测、价格梯度与按场景选型',
  },
  'ai-and-streaming-airport-selection': {
    url: '/articles/ai-and-streaming-airport-selection/',
    filePath: 'src/content/articles/ai-and-streaming-airport-selection.md',
    title: '2026 AI办公与4K流媒体机场选型：ChatGPT/Claude/Gemini与Netflix原生IP解锁实测',
  },
  '2026-airport-ranking-methodology': {
    url: '/articles/2026-airport-ranking-methodology/',
    filePath: 'src/content/articles/2026-airport-ranking-methodology.md',
    title: '2026 机场排行榜评测报告：31家品牌香港/新加坡/日本节点延迟、峰值带宽与梯度划分',
  },
  'best-value-iepl-airports-analysis': {
    url: '/articles/best-value-iepl-airports-analysis/',
    filePath: 'src/content/articles/best-value-iepl-airports-analysis.md',
    title: '2026 高性价比机场精算报告：每GB流量单价、年付小包与永久不限时套餐深度对比',
  },
  'stable-iepl-iplc-airport-architecture': {
    url: '/articles/stable-iepl-iplc-airport-architecture/',
    filePath: 'src/content/articles/stable-iepl-iplc-airport-architecture.md',
    title: '为什么晚高峰总掉速？IEPL以太网专线与IPLC物理专线机场架构拆解及稳定品牌推荐',
  },
  'cheap-airport-under-10-rmb-review': {
    url: '/articles/cheap-airport-under-10-rmb-review/',
    filePath: 'src/content/articles/cheap-airport-under-10-rmb-review.md',
    title: '2026 便宜机场实测横评：月均5.6元至9元百元内年付套餐对比与同质化避坑指南',
  },
  'free-ladder-risks-and-safe-alternatives': {
    url: '/articles/free-ladder-risks-and-safe-alternatives/',
    filePath: 'src/content/articles/free-ladder-risks-and-safe-alternatives.md',
    title: '2026 免费梯子安全审计与低成本平替方案：为什么公开免费节点容易导致账号风控',
  },
  'scientific-internet-access-complete-guide': {
    url: '/articles/scientific-internet-access-complete-guide/',
    filePath: 'src/content/articles/scientific-internet-access-complete-guide.md',
    title: '2026 科学上网完全指南：从传输协议(VLESS/Trojan/Hysteria2)到规则分流的系统教程',
  },
  'vpn-vs-iepl-airport-comprehensive-comparison': {
    url: '/articles/vpn-vs-iepl-airport-comprehensive-comparison/',
    filePath: 'src/content/articles/vpn-vs-iepl-airport-comprehensive-comparison.md',
    title: '2026 VPN推荐与架构对比：传统跨国商业VPN vs 自带专属客户端IEPL专线机场',
  },
  'free-vpn-security-audit-and-alternatives': {
    url: '/articles/free-vpn-security-audit-and-alternatives/',
    filePath: 'src/content/articles/free-vpn-security-audit-and-alternatives.md',
    title: '2026 免费VPN真相调查：住宅代理SDK带宽共享风险、浏览器扩展局限与合规过渡方案',
  },
  'mobile-vpn-ios-android-selection-guide': {
    url: '/articles/mobile-vpn-ios-android-selection-guide/',
    filePath: 'src/content/articles/mobile-vpn-ios-android-selection-guide.md',
    title: '2026 手机VPN与移动端代理全攻略：iPhone (Shadowrocket/Stash/Hiddify) 与安卓省电分流配置',
  },
  'vpn-client-software-and-cores-review': {
    url: '/articles/vpn-client-software-and-cores-review/',
    filePath: 'src/content/articles/vpn-client-software-and-cores-review.md',
    title: '2026 代理内核与软件评测：Mihomo vs Sing-box vs Xray 性能对比及机场专属客户端解析',
  },
  'network-accelerator-for-ai-streaming-gaming': {
    url: '/articles/network-accelerator-for-ai-streaming-gaming/',
    filePath: 'src/content/articles/network-accelerator-for-ai-streaming-gaming.md',
    title: '2026 VPN网络加速器实战：GitHub开发终端加速、跨境SaaS协作与4K高码率流媒体调优',
  },
  'vpn-vs-accelerator-vs-airport-matrix': {
    url: '/articles/vpn-vs-accelerator-vs-airport-matrix/',
    filePath: 'src/content/articles/vpn-vs-accelerator-vs-airport-matrix.md',
    title: '网游加速器 vs IEPL专线机场 vs 传统VPN：UDP转发机制、TUN虚拟网卡与同价位品牌对比',
  },
  'best-vpn-services-by-user-scenario': {
    url: '/articles/best-vpn-services-by-user-scenario/',
    filePath: 'src/content/articles/best-vpn-services-by-user-scenario.md',
    title: '2026 好用的VPN分场景严选：科研学术、AI编程、Apple TV家庭影院与跨境电商方案',
  },
  '2026-clash-clients-complete-selection-guide': {
    url: '/articles/2026-clash-clients-complete-selection-guide/',
    filePath: 'src/content/articles/2026-clash-clients-complete-selection-guide.md',
    title: '2026 Clash与代理客户端大全：Windows/macOS/Android/iOS/Linux/OpenWrt 22款工具核实清单',
  },
  'clash-verge-rev-deep-dive-and-features': {
    url: '/articles/clash-verge-rev-deep-dive-and-features/',
    filePath: 'src/content/articles/clash-verge-rev-deep-dive-and-features.md',
    title: 'Clash Verge Rev 深度指南：Tauri架构演进、Mihomo内核特性及与FlClash/Nyanpasu横向对比',
  },
  'clash-verge-rev-download-and-install-guide': {
    url: '/guides/clash-verge-rev-download-and-install-guide/',
    filePath: 'src/content/guides/clash-verge-rev-download-and-install-guide.md',
    title: '2026 Clash Verge Rev 官方下载与安装教程：Windows x64、macOS M芯片(aarch64)及Linux安装包详解',
  },
  'clash-verge-subscription-import-and-conversion': {
    url: '/guides/clash-verge-subscription-import-and-conversion/',
    filePath: 'src/content/guides/clash-verge-subscription-import-and-conversion.md',
    title: 'Clash Verge 订阅导入、定时更新与本地Merge覆写教程：远离在线订阅转换泄露风险',
  },
  'clash-meta-mihomo-core-configuration-guide': {
    url: '/guides/clash-meta-mihomo-core-configuration-guide/',
    filePath: 'src/content/guides/clash-meta-mihomo-core-configuration-guide.md',
    title: 'Clash Meta (Mihomo) 内核配置详解：VLESS/Hysteria2支持、Fake-IP DNS防泄漏与Rule-Set规则集',
  },
  'clash-complete-usage-tutorial-tun-and-rules': {
    url: '/guides/clash-complete-usage-tutorial-tun-and-rules/',
    filePath: 'src/content/guides/clash-complete-usage-tutorial-tun-and-rules.md',
    title: 'Clash Verge 完整使用教程：系统代理与TUN虚拟网卡模式区别、策略组选点与局域网共享',
  },
  'clash-troubleshooting-timeout-dns-and-proxy-errors': {
    url: '/guides/clash-troubleshooting-timeout-dns-and-proxy-errors/',
    filePath: 'src/content/guides/clash-troubleshooting-timeout-dns-and-proxy-errors.md',
    title: 'Clash 故障排查大全：全节点Timeout超时、关软件后电脑断网、微信异常等12类问题修复',
  },
  'free-nodes-security-evaluation-and-emergency-guide': {
    url: '/articles/free-nodes-security-evaluation-and-emergency-guide/',
    filePath: 'src/content/articles/free-nodes-security-evaluation-and-emergency-guide.md',
    title: '2026 免费节点技术评估与主备双机场冗余方案：公开节点池原理、证书校验与百元不限时包配置',
  },
  'airport-runaway-warning-signs-and-risk-control': {
    url: '/articles/airport-runaway-warning-signs-and-risk-control/',
    filePath: 'src/content/articles/airport-runaway-warning-signs-and-risk-control.md',
    title: '2026 机场跑路预警与资金风控指南：识别8大跑路前兆、超低价多年付套路与科学续费原则',
  },
  'airport-faq-complete-knowledge-base': {
    url: '/articles/airport-faq-complete-knowledge-base/',
    filePath: 'src/content/articles/airport-faq-complete-knowledge-base.md',
    title: '机场常见问题百科 (FAQ)：流量按月重置vs不限时、节点倍率计算、设备并发限制与原生IP详解',
  },
  'airport-risk-intelligence-and-brand-audit-report': {
    url: '/articles/airport-risk-intelligence-and-brand-audit-report/',
    filePath: 'src/content/articles/airport-risk-intelligence-and-brand-audit-report.md',
    title: '2026 机场品牌数据审计报告：31家品牌同规格群组拆解、历史套餐差异核实与链接异常预警',
  },
  'node-detection-speedtest-and-ip-purity-guide': {
    url: '/articles/node-detection-speedtest-and-ip-purity-guide/',
    filePath: 'src/content/articles/node-detection-speedtest-and-ip-purity-guide.md',
    title: '2026 节点检测完全手册：HTTPing延迟原理、晚高峰Speedtest、DNS泄漏检测与YouTube送中排查',
  },
  'subscription-failure-troubleshooting-handbook': {
    url: '/articles/subscription-failure-troubleshooting-handbook/',
    filePath: 'src/content/articles/subscription-failure-troubleshooting-handbook.md',
    title: '机场订阅拉取失败排障手册：HTTP报错代码字典、31家品牌专属端vs通用订阅对照与Token重置',
  },
  'newbie-starter-guide-from-zero-to-clash': {
    url: '/articles/newbie-starter-guide-from-zero-to-clash/',
    filePath: 'src/content/articles/newbie-starter-guide-from-zero-to-clash.md',
    title: '新手第一次买机场与配置Clash 10分钟上手指南：选购三原则、优惠码使用与20个核心术语词典',
  },
  'guangsuyun-in-depth-review-2026': {
    url: '/reviews/guangsuyun-in-depth-review-2026/',
    filePath: 'src/content/reviews/guangsuyun-in-depth-review-2026.mdx',
    title: '光速云深度评测（2026实测）：2020老牌IEPL+企业内网双专线、套餐价格核实与五地测速报告',
  },
  'guangsuyun-vs-muguang-vs-feimao-comparison': {
    url: '/comparisons/guangsuyun-vs-muguang-vs-feimao-comparison/',
    filePath: 'src/content/comparisons/guangsuyun-vs-muguang-vs-feimao-comparison.md',
    title: '光速云 vs 暮光加速 vs 飞猫云横向对比：双专线老牌、多设备BGP与零门槛专属端怎么选？',
  },
  'iepl-vs-iplc-top-brands-comparison-2026': {
    url: '/comparisons/iepl-vs-iplc-top-brands-comparison-2026/',
    filePath: 'src/content/comparisons/iepl-vs-iplc-top-brands-comparison-2026.md',
    title: '2026 主流IEPL与IPLC专线机场横评：光速云、星岛梦、唯兔云、Firefly、一翻云、闪跃六强对决',
  },
};

const ANGLE_TEMPLATES = [
  {
    suffix: 'core',
    titleTemplate: (kw: string, cName: string) => `${kw}深度指南：${cName}核心选型标准与实测分析`,
    intent: 'Commercial Investigation',
    priority: 'P0-Core' as const,
  },
  {
    suffix: 'benchmark',
    titleTemplate: (kw: string) => `2026 ${kw}实测数据对比：晚高峰延迟、带宽吞吐与丢包率验证`,
    intent: 'Commercial Investigation',
    priority: 'P1-High' as const,
  },
  {
    suffix: 'beginner-setup',
    titleTemplate: (kw: string) => `新手如何配置${kw}？从订阅导入到分流规则的完整实操步骤`,
    intent: 'Informational',
    priority: 'P1-High' as const,
  },
  {
    suffix: 'pitfalls',
    titleTemplate: (kw: string) => `${kw}避坑手册：常见虚假宣传话术识别、倍率计算与退款条款核查`,
    intent: 'Informational',
    priority: 'P2-Medium' as const,
  },
  {
    suffix: 'troubleshooting',
    titleTemplate: (kw: string) => `${kw}常见故障排查：连接超时、DNS污染与解锁失败的5步修复法`,
    intent: 'Troubleshooting',
    priority: 'P2-Medium' as const,
  },
  {
    suffix: 'cost-analysis',
    titleTemplate: (kw: string) => `${kw}价格与套餐精算：月付、年付小包与一次性不限时流量包哪款更划算`,
    intent: 'Transactional',
    priority: 'P2-Medium' as const,
  },
  {
    suffix: 'geo-faq',
    titleTemplate: (kw: string) => `关于${kw}的10个高频长尾问题解答：AI解锁、多设备并发与软路由兼容`,
    intent: 'Informational',
    priority: 'P3-Expansion' as const,
  },
];

export const FULL_CONTENT_PLAN: PlannedArticleRecord[] = ALL_TERTIARY_CLUSTERS.flatMap(
  (cluster, cIdx) => {
    return ANGLE_TEMPLATES.map((tpl, aIdx) => {
      const isFirst = aIdx === 0;
      const corePublished = PUBLISHED_SLUGS_MAP[cluster.coreArticleSlug];
      const slug = isFirst
        ? cluster.coreArticleSlug
        : `${cluster.slug}-${tpl.suffix}`;
      const isPublished = isFirst && Boolean(corePublished);

      return {
        id: `PLAN-${String(cIdx + 1).padStart(2, '0')}-${aIdx + 1}`,
        clusterId: cluster.id,
        clusterName: cluster.name,
        categoryKey: cluster.categoryKey,
        topicSlug: cluster.topicSlug,
        title: isPublished
          ? corePublished.title
          : tpl.titleTemplate(cluster.targetKeyword, cluster.name),
        slug,
        url: isPublished ? corePublished.url : `/articles/${slug}/`,
        filePath: isPublished
          ? corePublished.filePath
          : `src/content/articles/planned/${slug}.md`,
        primaryKeyword: isFirst
          ? cluster.targetKeyword
          : `${cluster.targetKeyword}${tpl.suffix === 'pitfalls' ? '避坑' : tpl.suffix === 'cost-analysis' ? '价格对比' : '教程'}`,
        secondaryKeywords: cluster.secondaryKeywords,
        searchIntent: isFirst ? cluster.searchIntent : tpl.intent,
        outline: [
          '1. Answer-First 核心结论与适用条件',
          `2. ${cluster.targetKeyword} 关键技术参数与背景解析`,
          '3. 2026-10-19 实测数据与关联品牌对比表',
          '4. 分步配置方法与注意事项',
          '5. 常见长尾问题 (FAQ) 与资料来源',
        ],
        targetAudience: `${cluster.topicName}关注用户与${cluster.targetKeyword}搜索人群`,
        faqQuestion: cluster.geoQuestions[aIdx % cluster.geoQuestions.length] || cluster.userQuestion,
        internalLinkTarget: cluster.topicUrl,
        priority: tpl.priority,
        status: isPublished ? 'Published' : 'Planned',
      };
    });
  }
);

export function getPlannedArticlesByCluster(clusterId: string): PlannedArticleRecord[] {
  return FULL_CONTENT_PLAN.filter((item) => item.clusterId === clusterId);
}
