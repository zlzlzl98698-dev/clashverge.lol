export const SITE_CONFIG = {
  domain: 'clashverge.lol',
  siteUrl: 'https://clashverge.lol',
  deployMirrorDomain: 'https://clash-cloud.run',
  brandName: 'clash订阅',
  siteTitle: 'clash订阅 - 中文机场推荐、VPN评测与Clash客户端知识库',
  siteSubtitle: '原创网络工具评测媒体 · 31家机场品牌数据库 · Clash Verge / Mihomo 全平台指南',
  description:
    'clash订阅（clashverge.lol）是专注中文机场推荐、IEPL/IPLC专线评测、31家机场品牌数据库对比、Clash Verge Rev与第三方客户端配置教程、流媒体与AI工具解锁实测的专业卡片式技术博客。',
  language: 'zh-CN',
  locale: 'zh_CN',
  author: {
    name: 'clash订阅实验室',
    role: '网络架构与代理工具评测组',
    bio: '长期追踪 IEPL/IPLC 跨境专线、Mihomo/Sing-box 核心演进与 31 家主流机场品牌实测数据，提供有据可查的选购与排障指南。',
  },
  updatedDate: '2026-11-18',
  testBatchDate: '2026-10-19',
  affiliateDisclosure:
    '含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格。商业推广标识与独立评测结论严格区分，所有套餐及测速数据均标注来源与核实状态。',
  shortDisclosure:
    '含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格。',
  riskNotice:
    '网络代理服务受上游运营商、跨境链路调度及平台风控策略影响较大。本站建议优先选择月付或小额套餐实测本地晚高峰表现，切勿盲目购买多年期大额套餐。',
  contactEmail: 'editorial@clashverge.lol',
  primaryPromotedBrandSlug: 'guangsuyun',
  verification: {
    google: '', // Google Search Console 验证代码 (填入后自动注入 <meta name="google-site-verification">)
    bing: '', // Bing Webmaster Tools 验证代码 (填入后自动注入 <meta name="msvalidate.01">)
    shenma: '', // 神马搜索站长验证 (填入后自动注入 <meta name="shenma-site-verification">)
    baidu: '', // 百度搜索资源平台验证 (填入后自动注入 <meta name="baidu-site-verification">)
  },
  colors: {
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F7F9FC',
    textPrimary: '#172033',
    textSecondary: '#64748B',
    brandBlue: '#2563EB',
    bgLightBlue: '#EFF6FF',
    border: '#E5EAF1',
  },
};

export type PrimaryCategoryKey = 'airport' | 'vpn' | 'clash' | 'resources';
