import type { PrimaryCategoryKey } from './site';

export interface TertiaryCluster {
  id: string;
  slug: string;
  name: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  userQuestion: string;
  searchIntent: 'Commercial Investigation' | 'Informational' | 'Transactional' | 'Troubleshooting';
  summary: string;
  coreArticleSlug: string;
  relatedBrands: string[];
  geoQuestions: string[];
}

export interface SecondaryTopic {
  id: string;
  category: PrimaryCategoryKey;
  slug: string;
  url: string;
  name: string;
  seoTitle: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial Investigation' | 'Informational' | 'Transactional' | 'Troubleshooting';
  intro: string;
  keyTakeaways: string[];
  featuredBrandSlugs: string[];
  clusters: [TertiaryCluster, TertiaryCluster];
}

export interface PrimaryNavSection {
  key: PrimaryCategoryKey;
  name: string;
  shortName: string;
  url: string;
  seoTitle: string;
  description: string;
  heroBadge: string;
  icon: string;
  intro: string;
  topics: SecondaryTopic[];
}

export const PRIMARY_NAVIGATION: PrimaryNavSection[] = [
  {
    key: 'airport',
    name: '机场推荐',
    shortName: '机场推荐',
    url: '/airport/',
    seoTitle: '2026 机场推荐与IEPL专线机场排行总览 | clash订阅',
    description:
      '涵盖2026年高性价比机场推荐、IEPL/IPLC稳定专线机场排行、便宜年付机场、AI与流媒体解锁实测对比，提供真实套餐核实与避坑建议。',
    heroBadge: '核心评测专题 · 31家品牌实测库',
    icon: 'globe',
    intro:
      '基于31家机场品牌的线路架构、套餐计费周期、2026-10-19测速记录及流媒体/AI解锁表现，提供分场景、有数据来源标注的选购指南。',
    topics: [
      {
        id: 'airport-recommend',
        category: 'airport',
        slug: 'recommend',
        url: '/airport/recommend/',
        name: '机场推荐',
        seoTitle: '2026 机场推荐指南：按预算、线路与AI流媒体场景精准选型',
        description:
          '2026年最新机场推荐清单，结合IEPL/IPLC专线架构、VLESS/Trojan协议与实测数据，详解光速云、暮光加速、飞猫云等品牌适用人群。',
        primaryKeyword: '机场推荐',
        secondaryKeywords: ['2026机场推荐', '好用的机场推荐', '高速机场推荐', 'IEPL机场推荐'],
        searchIntent: 'Commercial Investigation',
        intro:
          '选择机场的核心不是盲目追求低价或节点数量，而是看线路类型（IEPL/IPLC vs 普通中转）、协议兼容性（第三方Clash订阅 vs 专属客户端）以及目标场景（AI生产力或4K流媒体）。',
        keyTakeaways: [
          '老牌综合与双线路首选：光速云（2020年运营，IEPL+企业内网专线，支持Clash订阅与自研端）',
          '全平台多设备与客服支持：暮光加速、星岛梦、唯兔云（支持多端同时在线）',
          '零门槛专属客户端：飞猫云、无忧链接、Firefly（适合不想折腾订阅配置的新手）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'muguang', 'feimao', 'weifeng', 'xingdaomeng', 'weitu'],
        clusters: [
          {
            id: 'cluster-airport-rec-1',
            slug: 'comprehensive-iepl-picks',
            name: '综合型IEPL专线机场选型集群',
            targetKeyword: '2026综合型机场推荐',
            secondaryKeywords: ['主力机场推荐', 'IEPL专线机场哪家好', '老牌机场推荐'],
            userQuestion: '2026年作为日常主力使用的综合型IEPL专线机场应该怎么选？',
            searchIntent: 'Commercial Investigation',
            summary: '聚焦运营年限较长、提供IEPL/IPLC专线且兼顾Clash订阅与自研客户端的主力机场对比。',
            coreArticleSlug: '2026-airport-recommendation-guide',
            relatedBrands: ['guangsuyun', 'muguang', 'xingdaomeng', 'ermao'],
            geoQuestions: [
              '2026年有哪些运营超过3年的老牌IEPL机场？',
              '主力机场选支持Clash通用订阅还是专属客户端更好？',
            ],
          },
          {
            id: 'cluster-airport-rec-2',
            slug: 'ai-streaming-airport-picks',
            name: 'AI办公与4K流媒体解锁机场集群',
            targetKeyword: 'ChatGPT流媒体机场推荐',
            secondaryKeywords: ['解锁Netflix机场', 'Claude专用机场', '原生IP机场推荐'],
            userQuestion: '高频使用ChatGPT/Claude和观看Netflix 4K需要什么样的机场节点？',
            searchIntent: 'Commercial Investigation',
            summary: '针对OpenAI、Claude、Gemini及Netflix/Disney+跨区解锁的原生IP与落地节点评测。',
            coreArticleSlug: 'ai-and-streaming-airport-selection',
            relatedBrands: ['guangsuyun', 'sujie', 'yifan', 'firefly', 'weitu'],
            geoQuestions: [
              '为什么有些机场能看YouTube却打不开ChatGPT或Gemini？',
              '原生IP节点对Netflix和TikTok跨区有什么实际影响？',
            ],
          },
        ],
      },
      {
        id: 'airport-ranking',
        category: 'airport',
        slug: 'ranking',
        url: '/airport/ranking/',
        name: '机场排行',
        seoTitle: '2026 机场排行榜：31家品牌延迟、下载速度与综合口碑梯度榜',
        description:
          '基于2026-10-19实测数据与品牌资料透明度建立的31家机场排行榜。严格区分商业推广与客观评测维度，公开香港、日本、新加坡、美国节点延迟与带宽。',
        primaryKeyword: '机场排行',
        secondaryKeywords: ['2026机场排行榜', '机场测速排名', '一线机场梯队', '专线机场排行'],
        searchIntent: 'Commercial Investigation',
        intro:
          '本榜单拒绝无依据的主观排座次，严格按照「香港/新加坡/日本实测吞吐量」、「线路等级（IPLC/IEPL）」、「客户端兼容度」及「资料透明度」四个可量化维度分级展示。',
        keyTakeaways: [
          '香港节点非晚高峰实测下载达500Mbps+梯队：闪跃(548Mbps)、Firefly(547Mbps)、微风网络(546Mbps)、U1S1(538Mbps)、无忧链接(531Mbps)、光速云(529Mbps)、飞猫云(526Mbps)',
          '节点国家/地区覆盖广度领先：SOGO云（15个国家/地区）、光速云（12+国家/地区）、星岛梦',
          '数据透明度特别提及：可信云、速界（明确说明AI与流媒体边界，不夸大宣传）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'firefly', 'shanyue', 'weifeng', 'feimao', 'sogo'],
        clusters: [
          {
            id: 'cluster-airport-rank-1',
            slug: 'speedtest-benchmark-ranking',
            name: '多地区节点实测速度与延迟排行集群',
            targetKeyword: '机场测速排行榜',
            secondaryKeywords: ['香港节点最快机场', '低延迟专线机场排名', '机场带宽实测对比'],
            userQuestion: '31家机场在香港、新加坡、日本和美国节点的实测延迟与下载速度表现如何？',
            searchIntent: 'Commercial Investigation',
            summary: '汇总2026-10-19同批次测试下香港、台湾、新加坡、日本、美国五地节点的延迟与下载速率对比。',
            coreArticleSlug: '2026-airport-ranking-methodology',
            relatedBrands: ['guangsuyun', 'shanyue', 'firefly', 'weifeng', 'u1s1'],
            geoQuestions: [
              '香港IEPL节点的正常延迟一般是多少毫秒？',
              '为什么美国节点的下载速度普遍比香港和新加坡节点低？',
            ],
          },
          {
            id: 'cluster-airport-rank-2',
            slug: 'tier-classification-matrix',
            name: '机场品牌梯度分级与运营年限评估集群',
            targetKeyword: '机场梯队排名',
            secondaryKeywords: ['2020老牌机场对比', '新开业机场评估', '机场综合实力分级'],
            userQuestion: '如何根据开业年份、专线架构和套餐体系给机场划分真实梯队？',
            searchIntent: 'Commercial Investigation',
            summary: '从2020年老牌（光速云、星岛梦）到2023-2025年新兴专线品牌的分级拆解与风险权衡。',
            coreArticleSlug: '2026-airport-ranking-methodology',
            relatedBrands: ['guangsuyun', 'xingdaomeng', 'muguang', 'ermao', 'tiziyun'],
            geoQuestions: [
              '开业时间长的机场一定比新机场更稳定吗？',
              '如何识别同一套面板或同系团队运营的相似规格机场？',
            ],
          },
        ],
      },
      {
        id: 'airport-value',
        category: 'airport',
        slug: 'value',
        url: '/airport/value/',
        name: '性价比机场',
        seoTitle: '2026 性价比机场推荐：月均7-20元档IEPL专线与不限时流量包对比',
        description:
          '深度核算31家机场的每GB流量单价、年付折算月均成本与一次性永久流量包性价比，找出10-25元档真正走IEPL/IPLC专线的高性价比机场。',
        primaryKeyword: '性价比机场',
        secondaryKeywords: ['高性价比机场推荐', '平价IEPL机场', '不限时流量包机场', '学生党性价比机场'],
        searchIntent: 'Commercial Investigation',
        intro:
          '真正的性价比不是单纯看最低标价，而是「专线质量 × 可用流量 ÷ 实际月均支出」。我们把年付小包折算价、标准月付档和一次性不限时流量包拆开对比，避免年付折算价误导。',
        keyTakeaways: [
          '年付轻量高性价比档（折合¥7-8.5/月）：光速云轻量版（¥99/年 69GB/月）、飞猫云学生版（¥84/年 50GB/月）、星岛梦贴心小包（¥96/年 60GB/月）',
          '20元主力月付高性价比档：一翻云（¥20/150GB）、暮光加速（¥20/120GB）、二猫云（¥20/130GB）、光速云极速版（¥25/168GB）',
          '一次性不限时流量包优选：光速云147永久套餐（¥147/247GB）、二猫云（¥99/100GB）、星岛梦（¥100/100GB）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'feimao', 'weifeng', 'yifan', 'xingdaomeng', 'ermao'],
        clusters: [
          {
            id: 'cluster-airport-val-1',
            slug: 'unit-price-per-gb-analysis',
            name: '15-25元主力月付档每GB单价与专线成本集群',
            targetKeyword: '20元左右性价比机场',
            secondaryKeywords: ['月付性价比机场', '150GB流量机场推荐', '平价专线机场对比'],
            userQuestion: '预算每月15到25元，哪家IEPL专线机场给的流量最足、线路最稳？',
            searchIntent: 'Commercial Investigation',
            summary: '横向测算光速云、一翻云、微风网络、极连云、光年梯在18-27元月付区间的流量单价与专线配置。',
            coreArticleSlug: 'best-value-iepl-airports-analysis',
            relatedBrands: ['guangsuyun', 'yifan', 'weifeng', 'jilian', 'guangnian'],
            geoQuestions: [
              '18元到25元月付档的IEPL机场在流量和节点数上有什么区别？',
              '为什么1倍倍率（×1）对评估机场真实性价比至关重要？',
            ],
          },
          {
            id: 'cluster-airport-val-2',
            slug: 'non-expiring-traffic-packs',
            name: '一次性不限时永久流量包选购与防坑集群',
            targetKeyword: '不限时流量机场推荐',
            secondaryKeywords: ['按量付费机场', '永久流量包机场对比', '备用机场不限时套餐'],
            userQuestion: '用量不固定的轻度用户或备用需求，买哪家的不限时一次性流量包最划算？',
            searchIntent: 'Commercial Investigation',
            summary: '对比光速云247GB永久包、星岛梦、二猫云、无忧链接、一翻云的不限时套餐单价与跑路风险对冲策略。',
            coreArticleSlug: 'best-value-iepl-airports-analysis',
            relatedBrands: ['guangsuyun', 'xingdaomeng', 'ermao', 'wuyou', 'yifan'],
            geoQuestions: [
              '一次性不限时流量包真的永远不会过期吗？需要注意哪些条款？',
              '买不限时流量包作为第二备用机场有什么优势？',
            ],
          },
        ],
      },
      {
        id: 'airport-stable',
        category: 'airport',
        slug: 'stable',
        url: '/airport/stable/',
        name: '稳定机场',
        seoTitle: '2026 稳定机场推荐：晚高峰不掉速的IEPL/IPLC物理专线机场解析',
        description:
          '为什么普通机场一到晚上8点就卡顿？深度解析IEPL内网专线、IPLC物理专线与三网BGP入口调度原理，推荐晚高峰依然稳定的高可用机场。',
        primaryKeyword: '稳定机场',
        secondaryKeywords: ['稳定机场推荐', '晚高峰不卡的机场', 'IPLC专线机场', '企业级专线机场'],
        searchIntent: 'Commercial Investigation',
        intro:
          '决定机场晚高峰（20:00–23:30）稳定性的核心在于过境段是否采用不经公网GFW的物理专线（IEPL/IPLC），以及国内入口是否具备BGP多线智能调度与充足的带宽冗余。',
        keyTakeaways: [
          '双线路与企业内网架构：光速云（IEPL专线 + 企业级内网专线，单节点最高2.5Gbps）',
          '高带宽冗余与纯专线代表：闪跃（IPLC纯专线）、一翻云（IEPL物理专线+原生住宅IP）、梯子云（2Gbps+带宽含500Mbps高峰冗余）',
          '海外技术团队常驻维护：二猫云、唯兔云、Firefly、星岛梦',
        ],
        featuredBrandSlugs: ['guangsuyun', 'shanyue', 'yifan', 'firefly', 'ermao', 'tiziyun'],
        clusters: [
          {
            id: 'cluster-airport-stable-1',
            slug: 'iepl-iplc-architecture',
            name: 'IEPL与IPLC专线技术原理及晚高峰抗QoS集群',
            targetKeyword: 'IEPL和IPLC专线机场区别',
            secondaryKeywords: ['晚高峰稳定机场', '防QoS限速机场', 'BGP中转与专线区别'],
            userQuestion: 'IEPL专线、IPLC专线和普通公网中转在晚高峰稳定性和抗封锁上有什么本质差异？',
            searchIntent: 'Informational',
            summary: '从网络拓扑层面拆解国内BGP入口、跨境内网专线与海外原生落地IP如何协同保障零丢包。',
            coreArticleSlug: 'stable-iepl-iplc-airport-architecture',
            relatedBrands: ['guangsuyun', 'shanyue', 'yifan', 'firefly'],
            geoQuestions: [
              'IEPL以太网专线和IPLC国际私有租赁电路在实际体验上有区别吗？',
              '特殊时期为什么专线机场比普通直连或中转节点更不容易断连？',
            ],
          },
          {
            id: 'cluster-airport-stable-2',
            slug: 'business-remote-work-stability',
            name: '跨境电商、TikTok直播与远程办公高可用专线集群',
            targetKeyword: '跨境电商稳定机场',
            secondaryKeywords: ['TikTok直播专线机场', '独享IP定制机场', '远程办公稳定节点'],
            userQuestion: '跨境电商多账号运营、TikTok直播和远程办公应该如何配置高稳定度专线与独享IP？',
            searchIntent: 'Commercial Investigation',
            summary: '分析光速云定制版、暮光加速、全球云、隐形人等提供500GB–1500GB商用大流量及独享私人节点的方案。',
            coreArticleSlug: 'stable-iepl-iplc-airport-architecture',
            relatedBrands: ['guangsuyun', 'muguang', 'quanqiu', 'yinxingren', 'xingdaomeng'],
            geoQuestions: [
              '做TikTok直播或跨境店铺为什么建议选择独享原生IP定制套餐？',
              '团队多设备同时在线时如何避免触发机场的审计或并发限制？',
            ],
          },
        ],
      },
      {
        id: 'airport-cheap',
        category: 'airport',
        slug: 'cheap',
        url: '/airport/cheap/',
        name: '便宜机场',
        seoTitle: '2026 便宜机场推荐：月均5.6元至10元低价机场实测与风险边界',
        description:
          '全面盘点年付折合5.6元/月、7元/月、8元/月的便宜机场清单（含闪电鼠、大佬云、无忧链接、飞猫云、光速云年付版），客观揭示低价套餐的流量限制与防跑路原则。',
        primaryKeyword: '便宜机场',
        secondaryKeywords: ['便宜机场推荐', '低价机场', '百元一年机场', '5元一个月机场'],
        searchIntent: 'Commercial Investigation',
        intro:
          '便宜机场主要集中在「年付80–100元（折合月均5.6–8.3元，每月40–70GB流量）」这一区间。选购低价机场必须看清它是“年付折算价”还是“真实月付价”，并注意同质化5.6元档品牌的特征。',
        keyTakeaways: [
          '稳健型百元内年付（折合¥6.5–8.25/月）：光速云轻量版（¥99/年 69GB/月）、飞猫云学生版（¥84/年 50GB/月）、无忧链接MINI（¥79/年 40GB/月）',
          '5.6元/月极限平价档（同规格群组）：大佬云、闪电鼠、云界线、榴莲云、环球梯（均为年付折算约5.6元/月、60GB/月，季付起7折）',
          '14元/月翻倍流量中间档：神行加速（年付折合14元/月，120GB/月，新用户7折）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'wuyou', 'feimao', 'dalaoyun', 'shandianshu', 'shenxing'],
        clusters: [
          {
            id: 'cluster-airport-cheap-1',
            slug: 'under-10-rmb-annual-plans',
            name: '月均5.6元至9元百元内年付小包深度横评集群',
            targetKeyword: '百元以内年付便宜机场',
            secondaryKeywords: ['8元一个月机场', '5.6元机场对比', '便宜IEPL机场哪些靠谱'],
            userQuestion: '年付100元以内（月均5.6到8.5元）的便宜机场有哪些差异，哪几家实际上是同质化方案？',
            searchIntent: 'Commercial Investigation',
            summary: '客观对比光速云99元/年、飞猫云84元/年、无忧链接79元/年以及5.6元档五家同规格品牌的真实差异。',
            coreArticleSlug: 'cheap-airport-under-10-rmb-review',
            relatedBrands: ['guangsuyun', 'feimao', 'wuyou', 'dalaoyun', 'shandianshu', 'yunjiexian'],
            geoQuestions: [
              '为什么很多便宜机场宣传的“5.6元/月”或“8元/月”不能按月单买？',
              '大佬云、闪电鼠、云界线、榴莲云、环球梯这五家5.6元档机场有什么区别？',
            ],
          },
          {
            id: 'cluster-airport-cheap-2',
            slug: 'low-price-airport-trap-avoidance',
            name: '低价机场隐形限制、倍率陷阱与链接异常排查集群',
            targetKeyword: '便宜机场避坑指南',
            secondaryKeywords: ['低价机场跑路风险', '节点高倍率陷阱', '便宜机场流量够用吗'],
            userQuestion: '买便宜机场时如何避开虚标带宽、暗藏高倍率节点和推广链接格式异常的坑？',
            searchIntent: 'Informational',
            summary: '详解40GB–69GB月流量的实际消耗测算，以及如何核对专属客户端限制与退款政策。',
            coreArticleSlug: 'cheap-airport-under-10-rmb-review',
            relatedBrands: ['wuyou', 'lingmao', 'liulianyun', 'huanqiuti', 'yunjiexian'],
            geoQuestions: [
              '每月50GB到69GB的机场流量够日常刷网页、用ChatGPT和看1080P视频吗？',
              '部分便宜机场不提供Clash订阅链接只能用自带客户端，这有什么利弊？',
            ],
          },
        ],
      },
      {
        id: 'airport-free',
        category: 'airport',
        slug: 'free-ladder',
        url: '/airport/free-ladder/',
        name: '免费梯子',
        seoTitle: '2026 免费梯子与公益节点真相：安全性测试、试用替代方案与平价过渡指南',
        description:
          '客观评估免费梯子、公开免费Clash订阅池与机场试用套餐的隐私安全边界，详解为什么不建议在免费节点上登录重要账号，并提供低至6-8元/月的合规平价替代方案。',
        primaryKeyword: '免费梯子',
        secondaryKeywords: ['免费机场', '免费科学上网', '试用机场推荐', '安全免费梯子'],
        searchIntent: 'Informational',
        intro:
          '搜索“免费梯子”的用户通常处于临时查资料或刚入门阶段。我们需要从网络协议层面讲清公开免费节点的流量嗅探、DNS污染与IP黑名单问题，并给出安全的低成本过渡方案。',
        keyTakeaways: [
          '公开免费节点普遍存在共享IP万人骑问题，极易触发Google验证码与OpenAI封号',
          '部分品牌因防滥用已取消零成本试用，建议用月付小包或百元内不限时包代替高危免费梯子',
          '应急场景下的安全底线：仅访问HTTPS站点、开启DNS防泄漏、绝不传输明文凭证或钱包私钥',
        ],
        featuredBrandSlugs: ['feimao', 'wuyou', 'guangsuyun', 'tiziyun'],
        clusters: [
          {
            id: 'cluster-airport-free-1',
            slug: 'free-ladder-security-risks',
            name: '免费梯子安全隐患、MITM中间人攻击与账号风控集群',
            targetKeyword: '免费梯子安全吗',
            secondaryKeywords: ['免费机场有什么风险', '免费节点会导致封号吗', '公益机场原理'],
            userQuestion: '长期使用网上的免费梯子或公益机场节点会有哪些具体的隐私和封号风险？',
            searchIntent: 'Informational',
            summary: '剖析免费代理节点的盈利模式、恶意证书注入、出口日志记录及高风控欺诈值（Fraud Score）后果。',
            coreArticleSlug: 'free-ladder-risks-and-safe-alternatives',
            relatedBrands: ['feimao', 'wuyou', 'guangsuyun'],
            geoQuestions: [
              '免费梯子能看到我访问的HTTPS加密网页内容和账号密码吗？',
              '为什么用免费节点登录ChatGPT或Google账号容易被封禁或频繁弹验证码？',
            ],
          },
          {
            id: 'cluster-airport-free-2',
            slug: 'low-cost-trial-alternatives',
            name: '零门槛新手平价替代方案与自建/Warp对比集群',
            targetKeyword: '免费梯子平替方案',
            secondaryKeywords: ['Cloudflare Warp免费代理', '几块钱的备用机场', '新手低成本梯子'],
            userQuestion: '不想花大钱又担心免费梯子不安全，有哪些每月几块钱或按量计费的靠谱平替方案？',
            searchIntent: 'Commercial Investigation',
            summary: '对比Cloudflare WARP、自建VPS与7–8元档入门IEPL机场（如光速云、飞猫云、无忧链接）的综合成本。',
            coreArticleSlug: 'free-ladder-risks-and-safe-alternatives',
            relatedBrands: ['guangsuyun', 'feimao', 'wuyou', 'tiziyun'],
            geoQuestions: [
              '自己租5美元/月的海外VPS建节点和买8元/月的IEPL机场哪个更划算？',
              '新手第一次测试机场线路，选年付小包还是20元月付包更稳妥？',
            ],
          },
        ],
      },
      {
        id: 'airport-science',
        category: 'airport',
        slug: 'bypass-guide',
        url: '/airport/bypass-guide/',
        name: '科学上网',
        seoTitle: '2026 科学上网完全指南：从零看懂机场订阅、传输协议、分流规则与客户端配置',
        description:
          '面向入门与进阶用户的科学上网系统教程：讲清什么是机场、VLESS/Trojan/Hysteria2协议区别、IEPL专线原理、Clash规则分流机制与全平台快速上手步骤。',
        primaryKeyword: '科学上网',
        secondaryKeywords: ['科学上网教程', '梯子推荐与原理', '如何科学上网', '机场指南'],
        searchIntent: 'Informational',
        intro:
          '“科学上网”涉及客户端软件、加密传输协议、跨境网络链路和本地分流规则四个核心环节。掌握这套基础知识，不仅能独立配置任何设备，还能一眼看穿机场宣传话术。',
        keyTakeaways: [
          '三步标准流程：① 选购合规机场获取订阅或专属端 → ② 安装对应系统客户端（如Clash Verge Rev） → ③ 开启Rule规则分流模式',
          '主流协议演进：VLESS（含Reality）、Trojan、Hysteria 2 与 Shadowsocks 的性能与抗干扰对比',
          '分流核心原则：国内流量直连（DIRECT）保速度，海外受阻流量走代理（PROXY），切勿长期挂全局模式（GLOBAL）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'tiziyun', 'feimao', 'yifan', 'muguang'],
        clusters: [
          {
            id: 'cluster-airport-sci-1',
            slug: 'beginner-onboarding-workflow',
            name: '零基础科学上网入门全流程与核心概念集群',
            targetKeyword: '科学上网新手入门教程',
            secondaryKeywords: ['什么是机场订阅', '电脑手机怎么科学上网', '新手第一次用机场指南'],
            userQuestion: '完全零基础的新手如何从零完成电脑和手机的科学上网配置？',
            searchIntent: 'Informational',
            summary: '手把手讲解专属客户端一键登录与第三方通用订阅导入两种路径的操作细节。',
            coreArticleSlug: 'scientific-internet-access-complete-guide',
            relatedBrands: ['guangsuyun', 'tiziyun', 'feimao'],
            geoQuestions: [
              '机场专属客户端和Clash Verge第三方客户端各有什么优缺点？',
              '开启科学上网后为什么国内网站（如淘宝、B站）有时候会变慢？',
            ],
          },
          {
            id: 'cluster-airport-sci-2',
            slug: 'protocols-and-routing-principles',
            name: 'VLESS/Trojan/Hysteria2协议演进与跨境网络链路集群',
            targetKeyword: 'VLESS和Trojan协议区别',
            secondaryKeywords: ['Hysteria2协议优缺点', '直连中转IEPL区别', '机场倍率是什么意思'],
            userQuestion: '机场常见的VLESS、Trojan、Shadowsocks和Hysteria 2协议在实际体验上有什么区别？',
            searchIntent: 'Informational',
            summary: '解析不同代理协议的握手开销、UDP传输性能以及在专线/中转链路下的表现差异。',
            coreArticleSlug: 'scientific-internet-access-complete-guide',
            relatedBrands: ['guangsuyun', 'yifan', 'xingdaomeng', 'quanqiu'],
            geoQuestions: [
              '既然IEPL专线不经过GFW，为什么机场依然普遍使用VLESS或Trojan加密协议？',
              'Hysteria 2协议基于QUIC/UDP，在什么网络环境下优势最明显？',
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'vpn',
    name: 'VPN 与加速器',
    shortName: 'VPN与加速器',
    url: '/vpn/',
    seoTitle: '2026 VPN推荐与加速器对比：传统VPN软件 vs IEPL专线机场深度评测 | clash订阅',
    description:
      '全面对比传统海外VPN软件、手机VPN、游戏/网络加速器与现代IEPL专线机场的底层协议差异、中国大陆连接成功率、规则分流能力与真实成本。',
    heroBadge: '架构对比 · VPN与加速器评测',
    icon: 'shield',
    intro:
      '很多用户在搜索“VPN推荐”或“好用的加速器”时，并不清楚传统海外商业VPN（基于OpenVPN/WireGuard）与中文圈主流“专线机场+Clash分流”在连通率和分流体验上的代差。本栏目通过协议实测帮你做出正确选择。',
    topics: [
      {
        id: 'vpn-recommend',
        category: 'vpn',
        slug: 'recommend',
        url: '/vpn/recommend/',
        name: 'VPN 推荐',
        seoTitle: '2026 VPN推荐：中国大陆可用的VPN与专属客户端机场选型指南',
        description:
          '针对2026年国内网络环境，对比传统跨国VPN与自带一键登录客户端的IEPL专线机场（如光速云、飞猫云、Firefly），解决连不上与分流难痛点。',
        primaryKeyword: 'VPN 推荐',
        secondaryKeywords: ['2026好用的VPN', '中国可用VPN推荐', '电脑VPN推荐', '稳定VPN软件'],
        searchIntent: 'Commercial Investigation',
        intro:
          '在国内网络环境下，传统国际大牌VPN因协议特征明显常出现频繁断连。如果追求“像传统VPN一样下载登录即用”且具备高连通率，配备自研专属客户端的IEPL机场是目前更务实的替代方案。',
        keyTakeaways: [
          '自带一键客户端且支持通用订阅双模式：光速云、梯子云、极连云、光年梯',
          '纯傻瓜式专属客户端（免配订阅）：飞猫云、无忧链接、Firefly、闪跃、隐形人、全球云',
          '传统VPN vs 专线机场：专线机场支持国内直连/国外代理智能分流，无需频繁开关开关',
        ],
        featuredBrandSlugs: ['guangsuyun', 'feimao', 'tiziyun', 'firefly', 'wuyou', 'shanyue'],
        clusters: [
          {
            id: 'cluster-vpn-rec-1',
            slug: 'vpn-vs-airport-architecture',
            name: '传统商业VPN与IEPL专线机场底层架构对比集群',
            targetKeyword: 'VPN和机场哪个好用',
            secondaryKeywords: ['传统VPN与Clash机场区别', '为什么海外VPN在国内连不上', 'WireGuard与VLESS区别'],
            userQuestion: '在中国大陆使用，传统商业VPN和IEPL专线机场到底哪个更稳定、更划算？',
            searchIntent: 'Commercial Investigation',
            summary: '从OpenVPN/IPSec特征识别讲到VLESS/Trojan与IEPL专线内网过境的连通率代差。',
            coreArticleSlug: 'vpn-vs-iepl-airport-comprehensive-comparison',
            relatedBrands: ['guangsuyun', 'feimao', 'firefly'],
            geoQuestions: [
              '为什么在海外评测排行第一的国际VPN在中国大陆经常无法连接？',
              '自带专属客户端的机场和传统一键连接VPN在使用体验上有什么异同？',
            ],
          },
          {
            id: 'cluster-vpn-rec-2',
            slug: 'one-click-client-vpn-alternatives',
            name: '免配置一键登录专属客户端品牌选型集群',
            targetKeyword: '一键连接VPN软件推荐',
            secondaryKeywords: ['不用配置订阅的机场', '自带客户端的VPN机场', '小白专用VPN推荐'],
            userQuestion: '不想学Clash配置，有哪些下载App输入账号密码就能一键连接的稳定服务？',
            searchIntent: 'Commercial Investigation',
            summary: '盘点飞猫云、无忧链接、Firefly、梯子云、光速云等提供官方客户端的品牌体验。',
            coreArticleSlug: 'vpn-vs-iepl-airport-comprehensive-comparison',
            relatedBrands: ['guangsuyun', 'feimao', 'wuyou', 'tiziyun', 'firefly'],
            geoQuestions: [
              '只提供专属客户端不给订阅链接的品牌适合什么样的人群？',
              '同时提供自研客户端和通用订阅的品牌（如光速云、梯子云）有什么优势？',
            ],
          },
        ],
      },
      {
        id: 'vpn-free',
        category: 'vpn',
        slug: 'free',
        url: '/vpn/free/',
        name: '免费 VPN',
        seoTitle: '2026 免费VPN评测与风险解析：为什么免费VPN常成为隐私重灾区',
        description:
          '深度剖析市面上常见免费VPN应用（含浏览器插件VPN、破解版VPN、无限流量免费VPN）的商业变现逻辑、带宽P2P共享风险及合规低成本替代方案。',
        primaryKeyword: '免费 VPN',
        secondaryKeywords: ['永久免费VPN真相', '电脑免费VPN安全吗', 'Chrome免费VPN扩展', '免费VPN替代方案'],
        searchIntent: 'Informational',
        intro:
          '跨境带宽是昂贵的硬成本。当一款VPN宣称“永久免费不限流量”时，用户往往在用自己的家庭宽带出口（充当他人住宅代理节点）或个人浏览数据买单。',
        keyTakeaways: [
          '警惕将用户设备变为商业住宅IP池（Residential Proxy SDK）的免费VPN软件',
          '绝对不要下载来路不明的“破解版/绿色版VPN”，极易包含剪贴板劫持木马',
          '轻度低频需求建议选择百元内年付（月均6-8元）或100元永久不限时流量包作为安全平替',
        ],
        featuredBrandSlugs: ['wuyou', 'feimao', 'guangsuyun', 'ermao'],
        clusters: [
          {
            id: 'cluster-vpn-free-1',
            slug: 'free-vpn-business-model-audit',
            name: '免费VPN盈利黑产、P2P带宽盗用与隐私审计集群',
            targetKeyword: '免费VPN靠什么赚钱',
            secondaryKeywords: ['免费VPN窃取隐私吗', '破解版VPN木马风险', '浏览器免费VPN插件安全性'],
            userQuestion: '号称永久免费的VPN软件背后靠什么维持服务器成本，存在哪些安全隐患？',
            searchIntent: 'Informational',
            summary: '揭秘免费VPN中常见的流量转售SDK、广告注入、DNS劫持与实测速率瓶颈。',
            coreArticleSlug: 'free-vpn-security-audit-and-alternatives',
            relatedBrands: ['wuyou', 'feimao', 'guangsuyun'],
            geoQuestions: [
              '为什么安装某些免费VPN后家庭宽带会被海外风控系统标记为异常流量？',
              '浏览器里的免费VPN扩展和系统级代理客户端有什么本质区别？',
            ],
          },
          {
            id: 'cluster-vpn-free-2',
            slug: 'safe-budget-vpn-transitions',
            name: '从免费VPN迁移至低成本合规专线方案集群',
            targetKeyword: '便宜好用的VPN平替',
            secondaryKeywords: ['月均7元VPN替代', '不限时流量包VPN', '学生党安全上网方案'],
            userQuestion: '告别不安全的免费VPN后，如何用每月一杯奶茶钱配置稳定安全的跨区网络？',
            searchIntent: 'Commercial Investigation',
            summary: '针对预算敏感用户整理的6.5元–8.2元/月入门级专线方案与按量付费对比。',
            coreArticleSlug: 'free-vpn-security-audit-and-alternatives',
            relatedBrands: ['wuyou', 'feimao', 'guangsuyun', 'xingdaomeng'],
            geoQuestions: [
              '无忧链接79元/年和飞猫云84元/年适合用来替代免费VPN吗？',
              '低频用户买99元-147元的一次性不限时流量包能用多久？',
            ],
          },
        ],
      },
      {
        id: 'vpn-mobile',
        category: 'vpn',
        slug: 'mobile',
        url: '/vpn/mobile/',
        name: '手机 VPN',
        seoTitle: '2026 手机VPN推荐：iOS (iPhone/iPad) 与 Android 安卓跨区连接全指南',
        description:
          '详解iPhone/iPad (Shadowrocket/Stash/Hiddify/Karing) 与安卓手机 (FlClash/v2rayNG/Hiddify) 的手机VPN配置方案、美区Apple ID准备与省电防后台杀进程技巧。',
        primaryKeyword: '手机 VPN',
        secondaryKeywords: ['iOS VPN推荐', '安卓VPN推荐', 'iPhone怎么挂梯子', '手机好用的VPN软件'],
        searchIntent: 'Commercial Investigation',
        intro:
          '移动端（iOS与Android）是日常刷TikTok、用ChatGPT App和看流媒体的高频场景。iOS端受限于国区App Store下架政策需借助非国区Apple ID下载客户端；Android端则可直接安装开源客户端或品牌专属App。',
        keyTakeaways: [
          'iOS主流方案：使用美区/港区Apple ID安装 Shadowrocket、Stash、Quantumult X 或免费开源的 Hiddify / Karing',
          'Android主流方案：FlClash、v2rayNG、Hiddify 或直接使用飞猫云、光速云、梯子云官方移动端App',
          '多设备家庭共享：选择暮光加速、星岛梦、二猫云、唯兔云等不限设备连接数的品牌，手机平板电脑同时在线',
        ],
        featuredBrandSlugs: ['guangsuyun', 'muguang', 'feimao', 'tiziyun', 'xingdaomeng', 'weitu'],
        clusters: [
          {
            id: 'cluster-vpn-mob-1',
            slug: 'ios-iphone-ipad-vpn-setup',
            name: 'iPhone/iPad (iOS) 代理客户端选型与跨区配置集群',
            targetKeyword: 'iOS手机VPN配置教程',
            secondaryKeywords: ['小火箭Shadowrocket教程', 'iPhone免费代理软件Hiddify', 'iOS怎么用机场订阅'],
            userQuestion: 'iPhone和iPad用户在2026年应该选择哪款代理App，如何快速导入机场节点？',
            searchIntent: 'Informational',
            summary: '对比Shadowrocket、Stash、Quantumult X、Surge及免费iOS客户端Hiddify/Karing/Streisand。',
            coreArticleSlug: 'mobile-vpn-ios-android-selection-guide',
            relatedBrands: ['guangsuyun', 'xingdaomeng', 'weitu', 'tiziyun'],
            geoQuestions: [
              'iPhone不买付费小火箭（Shadowrocket），有哪些免费的iOS客户端可以导入机场订阅？',
              '为什么iOS上开启代理后切换Wi-Fi和5G蜂窝网络时偶尔会断流？',
            ],
          },
          {
            id: 'cluster-vpn-mob-2',
            slug: 'android-vpn-battery-and-apps',
            name: 'Android安卓手机VPN客户端与后台保活优化集群',
            targetKeyword: '安卓手机VPN客户端推荐',
            secondaryKeywords: ['v2rayNG与FlClash对比', '安卓手机VPN频繁断连解决', 'TikTok安卓手机跨区配置'],
            userQuestion: '安卓手机用哪款客户端最省电稳定，如何解决国产ROM锁屏杀后台导致VPN断连的问题？',
            searchIntent: 'Troubleshooting',
            summary: '详解Android端FlClash、v2rayNG、Hiddify的分应用代理（Per-App Proxy）与电池优化白名单设置。',
            coreArticleSlug: 'mobile-vpn-ios-android-selection-guide',
            relatedBrands: ['feimao', 'muguang', 'wuyou', 'guangsuyun'],
            geoQuestions: [
              '安卓手机如何设置让微信、支付宝直连，只让Chrome和YouTube走代理（分应用代理）？',
              '为什么警惕在Google Play下载同名但已被第三方接管的NekoBox客户端？',
            ],
          },
        ],
      },
      {
        id: 'vpn-review',
        category: 'vpn',
        slug: 'software-review',
        url: '/vpn/software-review/',
        name: 'VPN 软件评测',
        seoTitle: '2026 VPN软件与代理内核深度评测：Mihomo vs Sing-box vs Xray 性能横评',
        description:
          '从底层内核（Mihomo/Clash Meta、Sing-box、Xray-core）到图形界面客户端与机场自研端，深度评测内存占用、规则匹配速度、TUN虚拟网卡性能与协议支持度。',
        primaryKeyword: 'VPN 软件评测',
        secondaryKeywords: ['代理软件对比评测', 'Mihomo与Sing-box对比', '机场自研客户端评测', '好用的代理客户端'],
        searchIntent: 'Commercial Investigation',
        intro:
          '无论是第三方通用客户端还是机场专属软件，决定其吞吐上限与分流精度的都是底层的代理核心（Core）。本专题从工程角度评测主流代理软件与内核。',
        keyTakeaways: [
          'Mihomo（原Clash.Meta）：规则分流生态最成熟，Clash Verge Rev 与 FlClash 均基于此内核',
          'Sing-box：新一代通用代理平台，TUN模式性能优异，Hiddify 与 Karing 广泛采用',
          'Xray-core：VLESS/XTLS-Reality 原生大本营，v2rayN 与 v2rayNG 的主力核心',
        ],
        featuredBrandSlugs: ['guangsuyun', 'yifan', 'tiziyun', 'sogo'],
        clusters: [
          {
            id: 'cluster-vpn-rev-1',
            slug: 'proxy-cores-benchmark',
            name: 'Mihomo、Sing-box与Xray三大代理内核技术评测集群',
            targetKeyword: 'Mihomo和Sing-box哪个好',
            secondaryKeywords: ['Clash内核与Sing-box对比', 'Xray内核优缺点', '代理软件内存占用测试'],
            userQuestion: 'Mihomo（Clash Meta）、Sing-box和Xray三大内核在规则分流和TUN性能上各有什么优劣？',
            searchIntent: 'Informational',
            summary: '对比三大开源内核在千兆宽带下的CPU开销、DNS防污染机制与配置语法演进。',
            coreArticleSlug: 'vpn-client-software-and-cores-review',
            relatedBrands: ['guangsuyun', 'yifan', 'tiziyun'],
            geoQuestions: [
              '日常使用选Mihomo系的Clash Verge Rev还是Sing-box系的Hiddify/Karing？',
              '为什么一翻云同时提供Hysteria 2、VLESS-Reality和Shadowsocks三种协议？',
            ],
          },
          {
            id: 'cluster-vpn-rev-2',
            slug: 'proprietary-vs-open-source-clients',
            name: '机场自研专属客户端与开源通用客户端安全性评测集群',
            targetKeyword: '机场自研客户端安全吗',
            secondaryKeywords: ['专属客户端与Clash对比', '不提供订阅链接的机场评测', '自研客户端优缺点'],
            userQuestion: '越来越多机场（如Firefly、SOGO云、隐形人）只提供自研专属客户端，和开源客户端相比该怎么选？',
            searchIntent: 'Commercial Investigation',
            summary: '客观分析机场采用专属客户端防订阅泄露的考量，以及用户如何根据自身技术水平选型。',
            coreArticleSlug: 'vpn-client-software-and-cores-review',
            relatedBrands: ['guangsuyun', 'sogo', 'firefly', 'yinxingren', 'tiziyun'],
            geoQuestions: [
              '为什么SOGO云、Firefly、隐形人等品牌不再提供通用订阅链接？',
              '如果需要在软路由（OpenWrt）上配置透明代理，应该避开哪些仅支持专属客户端的品牌？',
            ],
          },
        ],
      },
      {
        id: 'vpn-accelerator',
        category: 'vpn',
        slug: 'accelerator',
        url: '/vpn/accelerator/',
        name: 'VPN 加速器',
        seoTitle: '2026 VPN加速器指南：跨境办公、GitHub开发、AI对话与外服加速方案',
        description:
          '详解如何利用低延迟IEPL/IPLC专线节点实现GitHub代码拉取加速、Docker镜像拉取、ChatGPT/Claude低延迟响应、TikTok跨区运营与流媒体秒开。',
        primaryKeyword: 'VPN 加速器',
        secondaryKeywords: ['网络加速器推荐', 'GitHub加速器', 'ChatGPT加速器', '外网加速工具'],
        searchIntent: 'Commercial Investigation',
        intro:
          '开发者拉取GitHub仓库超时、跨境办公打开Notion/Figma缓慢、或是AI流式输出卡顿，本质上都是跨境TCP/TLS握手延迟与公网丢包问题。低延迟IEPL/IPLC专线是最直接的加速方案。',
        keyTakeaways: [
          '亚太超低延迟节点：香港IEPL（21–27ms）、台湾（37–41ms）、新加坡（42–46ms）、日本（53–57ms）',
          '开发者加速技巧：结合Clash TUN模式或Git/终端代理环境变量，彻底解决 git clone 与 npm/pip 超时',
          '高带宽大吞吐场景：优选光速云（最高2.5Gbps）、U1S1（2000Mbps）、全球云（2Gbps+）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'u1s1', 'quanqiu', 'shanyue', 'firefly', 'yifan'],
        clusters: [
          {
            id: 'cluster-vpn-acc-1',
            slug: 'developer-productivity-acceleration',
            name: '开发者GitHub/Docker与跨境SaaS办公加速集群',
            targetKeyword: 'GitHub与跨境办公加速器',
            secondaryKeywords: ['Git代理配置加速', '终端命令行走Clash代理', '低延迟IEPL办公节点'],
            userQuestion: '程序员和跨境办公人群如何配置低延迟专线节点加速GitHub、Docker和海外SaaS协作工具？',
            searchIntent: 'Informational',
            summary: '实战讲解HTTP/SOCKS5终端环境变量、SSH ProxyCommand与TUN模式对开发工具链的加速效果。',
            coreArticleSlug: 'network-accelerator-for-ai-streaming-gaming',
            relatedBrands: ['guangsuyun', 'shanyue', 'muguang', 'yifan'],
            geoQuestions: [
              '为什么开启了Clash系统代理，在PowerShell或终端里运行 git clone 依然很慢？',
              '香港22ms节点和美国140ms节点在访问ChatGPT API或Claude网页版时体感差距有多大？',
            ],
          },
          {
            id: 'cluster-vpn-acc-2',
            slug: 'high-bandwidth-media-acceleration',
            name: '4K/8K流媒体秒开与大文件高速下载加速集群',
            targetKeyword: '高速流媒体VPN加速器',
            secondaryKeywords: ['YouTube 4K不卡顿节点', '大带宽专线机场测试', '500Mbps高速节点推荐'],
            userQuestion: '如何挑选能稳定跑满500Mbps家宽、秒开YouTube 4K/8K和Netflix杜比视界的加速器节点？',
            searchIntent: 'Commercial Investigation',
            summary: '基于实测500Mbps+香港与400Mbps+新加坡节点的品牌筛选与协议调优建议。',
            coreArticleSlug: 'network-accelerator-for-ai-streaming-gaming',
            relatedBrands: ['guangsuyun', 'shanyue', 'firefly', 'weifeng', 'u1s1'],
            geoQuestions: [
              '看YouTube 4K 60fps视频实际需要多少Mbps的持续稳定带宽？',
              '为什么有些节点Speedtest测速很高，看流媒体却依然缓冲？',
            ],
          },
        ],
      },
      {
        id: 'vpn-comparison',
        category: 'vpn',
        slug: 'comparison',
        url: '/vpn/comparison/',
        name: '加速器对比',
        seoTitle: '2026 加速器对比：游戏加速器 vs 专线机场 vs 传统VPN 适用边界全解',
        description:
          '客观对比UU/雷神等合规网游加速器、IEPL专线机场（带TUN模式）与传统海外VPN在UDP转发、网页浏览、流媒体解锁与价格上的核心差异。',
        primaryKeyword: '加速器对比',
        secondaryKeywords: ['游戏加速器和机场区别', 'VPN与加速器对比', '专线机场能加速游戏吗', '加速器哪家好'],
        searchIntent: 'Commercial Investigation',
        intro:
          '很多用户混淆了“网游加速器”与“科学上网机场/VPN”。网游加速器仅针对特定游戏进程做UDP专线转发，无法打开Google或ChatGPT；而支持UDP/TUN模式的IEPL专线机场则能兼顾跨区网页、AI流媒体与部分轻量外服连接。',
        keyTakeaways: [
          '术业有专攻：重度FPS竞技网游优先用专业网游加速器；网页、AI、流媒体、Telegram及跨区下载必须用机场/VPN',
          'IEPL专线机场 + Clash TUN模式可兼顾Steam商店跨区、Discord语音与卡牌/回合制外服游戏',
          '31家品牌横向对比：从价格档位（5.6元–25元）到协议（VLESS/Trojan/Hysteria2）的一表通览',
        ],
        featuredBrandSlugs: ['guangsuyun', 'yifan', 'muguang', 'feimao', 'weitu', 'firefly'],
        clusters: [
          {
            id: 'cluster-vpn-cmp-1',
            slug: 'game-booster-vs-iepl-airport',
            name: '网游加速器与IEPL专线机场技术边界对比集群',
            targetKeyword: '游戏加速器和机场有什么区别',
            secondaryKeywords: ['Clash TUN模式加速外服游戏', 'Steam社区打不开用什么', 'Discord语音延迟优化'],
            userQuestion: '网游加速器和IEPL专线机场在底层转发机制上有什么区别，机场能替代游戏加速器吗？',
            searchIntent: 'Informational',
            summary: '对比进程级路由劫持与TUN虚拟网卡，说明何时该用专线机场，何时该配合游戏加速器。',
            coreArticleSlug: 'vpn-vs-accelerator-vs-airport-matrix',
            relatedBrands: ['guangsuyun', 'yifan', 'shanyue'],
            geoQuestions: [
              '同时开启Clash代理和网游加速器会导致网络冲突断网吗？该如何设置分流？',
              '用IEPL机场的香港22ms节点玩外服游戏需要注意检查UDP支持吗？',
            ],
          },
          {
            id: 'cluster-vpn-cmp-2',
            slug: 'multi-brand-price-tier-comparison',
            name: '同价位段机场与加速器品牌横向PK集群',
            targetKeyword: '主流机场加速器横向对比',
            secondaryKeywords: ['光速云与暮光加速对比', '18元与25元档机场对比', 'IPLC与IEPL品牌PK'],
            userQuestion: '在8元档、18元档和25元档中，不同品牌的线路、流量和客户端限制如何横向取舍？',
            searchIntent: 'Commercial Investigation',
            summary: '对光速云 vs 暮光加速 vs 飞猫云、极连云 vs 光年梯、可信云 vs 速界 vs SOGO云进行同档位PK。',
            coreArticleSlug: 'vpn-vs-accelerator-vs-airport-matrix',
            relatedBrands: ['guangsuyun', 'muguang', 'feimao', 'jilian', 'guangnian', 'sujie'],
            geoQuestions: [
              '同为18元月付档，极连云（100GB）和光年梯（110GB）该如何选择？',
              '同为25元月付档，光速云极速版（168GB）、速界（150GB）和SOGO云（150GB）谁更值得买？',
            ],
          },
        ],
      },
      {
        id: 'vpn-best',
        category: 'vpn',
        slug: 'best-picks',
        url: '/vpn/best-picks/',
        name: '好用的 VPN',
        seoTitle: '2026 好用的VPN精选：按学生党、AI办公族、流媒体控与团队场景严选',
        description:
          '摒弃千篇一律的笼统推荐，针对学术科研、AI重度生产力、Netflix 4K家庭影院、跨境电商多设备四大真实画像，严选最匹配的专线服务。',
        primaryKeyword: '好用的 VPN',
        secondaryKeywords: ['2026最稳定的VPN', '科研学术VPN推荐', '外贸办公VPN哪家好', '多设备好用的VPN'],
        searchIntent: 'Commercial Investigation',
        intro:
          '不存在对所有人都满分的唯一方案。学生党看重年付百元内的性价比，AI程序员看重Claude/ChatGPT原生解锁与低延迟，家庭用户看重Apple TV与多端不限设备。按人群画像选型才不会买错。',
        keyTakeaways: [
          '全能综合与AI流媒体主力：光速云（双专线、12+地区节点、支持Clash订阅与自研客户端）',
          'AI重度生产力针对型：速界（25元档明确主打ChatGPT/Claude/Gemini）、唯兔云、一翻云',
          '多设备家庭与软路由玩家：星岛梦、二猫云、一翻云、梯子云（支持通用订阅且多端在线友好）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'sujie', 'xingdaomeng', 'weitu', 'yifan', 'tiziyun'],
        clusters: [
          {
            id: 'cluster-vpn-best-1',
            slug: 'persona-based-selection-guide',
            name: '四大核心用户画像（科研/AI/流媒体/外贸）严选集群',
            targetKeyword: '不同人群好用的VPN推荐',
            secondaryKeywords: ['ChatGPT重度用户VPN', 'Apple TV流媒体机场', '多设备不限速VPN'],
            userQuestion: '学生科研、AI程序员、4K追剧党和跨境电商团队分别最适合哪几款服务？',
            searchIntent: 'Commercial Investigation',
            summary: '建立用户需求特征与31家品牌参数的精确匹配表，提供首选与备选组合建议。',
            coreArticleSlug: 'best-vpn-services-by-user-scenario',
            relatedBrands: ['guangsuyun', 'sujie', 'xingdaomeng', 'muguang', 'feimao'],
            geoQuestions: [
              '为什么资深用户通常建议“1个主力月付专线 + 1个百元不限时流量包”的双持组合？',
              '家里有软路由或Apple TV时，为什么必须筛选“支持第三方通用订阅”的品牌？',
            ],
          },
          {
            id: 'cluster-vpn-best-2',
            slug: 'long-term-reliability-checklist',
            name: '好用VPN的7项硬核验真标准与实测自检集群',
            targetKeyword: '如何判断VPN好不好用',
            secondaryKeywords: ['VPN晚高峰测试方法', 'IP纯净度检测', '机场客服与售后评估'],
            userQuestion: '入手一款新服务后，在第一个月内应该通过哪几项测试验证它是否值得长期续费？',
            searchIntent: 'Informational',
            summary: '提供包含晚高峰Speedtest、流媒体脚本检测、DNS泄漏测试与工单响应速度在内的自检清单。',
            coreArticleSlug: 'best-vpn-services-by-user-scenario',
            relatedBrands: ['guangsuyun', 'weifeng', 'kexin', 'firefly'],
            geoQuestions: [
              '测试机场或VPN真实质量为什么一定要在晚上20:30到22:30之间进行？',
              '如何快速检查当前连接的节点IP是否为原生IP（ISP/Residential）？',
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'clash',
    name: 'Clash 客户端',
    shortName: 'Clash客户端',
    url: '/clash/',
    seoTitle: '2026 Clash客户端大全：Clash Verge Rev下载、订阅导入、Mihomo内核与排障教程 | clash订阅',
    description:
      '全网最详尽的Clash生态知识库：涵盖Clash Verge Rev、FlClash、Clash Nyanpasu、Mihomo Party、v2rayN、Hiddify、Shadowrocket、OpenClash等全平台客户端下载安装、订阅配置、TUN模式与故障排查。',
    heroBadge: '全平台客户端 · 22款工具实测库',
    icon: 'terminal',
    intro:
      '自原版 Clash for Windows 停更归档后，基于 Mihomo（原 Clash.Meta）和 Sing-box 内核的新一代开源客户端已成为绝对主流。本栏目基于可核实的 GitHub 官方项目资料，提供 Windows、macOS、Android、iOS、Linux 与 OpenWrt 软路由的完整教程。',
    topics: [
      {
        id: 'clash-recommend',
        category: 'clash',
        slug: 'recommend',
        url: '/clash/recommend/',
        name: 'Clash 推荐',
        seoTitle: '2026 Clash客户端推荐：Windows/Mac/Android/iOS/软路由全平台最佳选择',
        description:
          '原版CFW停更后用什么？全面盘点2026年仍在活跃维护的Clash/Mihomo与Sing-box系客户端（Clash Verge Rev、FlClash、Hiddify、Karing、Shadowrocket、OpenClash）。',
        primaryKeyword: 'Clash 推荐',
        secondaryKeywords: ['2026 Clash客户端哪个好', 'Clash for Windows替代品', '安卓Clash推荐', 'Mac Clash客户端'],
        searchIntent: 'Commercial Investigation',
        intro:
          '选择代理客户端的第一铁律是「只用活跃维护的开源或官方正版项目，远离来路不明的第三方修改版」。我们按六大操作系统整理了22款主流客户端的定位与维护状态。',
        keyTakeaways: [
          'Windows / macOS / Linux 桌面首选：Clash Verge Rev（Mihomo内核、支持TUN与规则覆写）、FlClash（多端统一UI）、v2rayN',
          'Android 安卓首选：FlClash、v2rayNG、Hiddify、Karing（注意：NekoBox维护受限且切勿下载Google Play假冒版）',
          'iOS 苹果首选：Shadowrocket、Stash、Quantumult X、Hiddify、Karing；软路由首选：OpenClash、PassWall2、Nikki（需OpenWrt 24.10+）',
        ],
        featuredBrandSlugs: ['guangsuyun', 'tiziyun', 'yifan', 'xingdaomeng', 'ermao'],
        clusters: [
          {
            id: 'cluster-clash-rec-1',
            slug: 'cross-platform-client-matrix',
            name: '六大操作系统代理客户端选型矩阵集群',
            targetKeyword: '全平台Clash客户端推荐',
            secondaryKeywords: ['Clash Verge Rev与FlClash对比', 'Mihomo Party维护状态', 'Linux代理客户端v2rayA'],
            userQuestion: 'Windows、macOS、Android、iOS、Linux和OpenWrt软路由分别推荐哪款主力客户端？',
            searchIntent: 'Commercial Investigation',
            summary: '基于《2026机场代理客户端大全》核实资料，对比22款客户端的内核、协议支持与上手难度。',
            coreArticleSlug: '2026-clash-clients-complete-selection-guide',
            relatedBrands: ['guangsuyun', 'tiziyun', 'yifan'],
            geoQuestions: [
              '原版 Clash for Windows 删库停更后，2026年Windows电脑最推荐哪款替代软件？',
              '为什么 Mihomo Party 和 NekoBox 在选型时需要特别关注其项目维护状态与下载渠道？',
            ],
          },
          {
            id: 'cluster-clash-rec-2',
            slug: 'openwrt-router-clients',
            name: 'OpenWrt软路由透明代理（OpenClash/PassWall2/Nikki）集群',
            targetKeyword: 'OpenWrt软路由代理客户端对比',
            secondaryKeywords: ['OpenClash与PassWall2哪个好', 'Nikki软路由插件OpenWrt 24.10', 'HomeProxy配置教程'],
            userQuestion: '家里部署OpenWrt软路由做旁路由或主路由透明代理，OpenClash、PassWall2、Nikki和HomeProxy怎么选？',
            searchIntent: 'Informational',
            summary: '对比Mihomo系（OpenClash/Nikki）与Sing-box/Xray系（PassWall2/HomeProxy）在路由器CPU架构与nftables防火墙下的表现。',
            coreArticleSlug: '2026-clash-clients-complete-selection-guide',
            relatedBrands: ['guangsuyun', 'xingdaomeng', 'yifan', 'weitu'],
            geoQuestions: [
              '在OpenWrt软路由上安装Nikki插件为什么明确要求OpenWrt 24.10及以上版本？',
              '软路由配置透明代理时，为什么必须选择提供标准Clash/Mihomo或通用订阅链接的机场？',
            ],
          },
        ],
      },
      {
        id: 'clash-verge',
        category: 'clash',
        slug: 'verge',
        url: '/clash/verge/',
        name: 'Clash Verge',
        seoTitle: 'Clash Verge Rev 全面解析：功能特性、Tauri架构优势与Mihomo内核指南',
        description:
          '深度解读当前桌面端最受欢迎的 Clash Verge Rev 客户端：基于Tauri轻量框架与Mihomo内核，支持VLESS/Hysteria2、TUN虚拟网卡、订阅Merge与JavaScript扩展脚本。',
        primaryKeyword: 'Clash Verge',
        secondaryKeywords: ['Clash Verge Rev介绍', 'Clash Verge和Clash Nyanpasu区别', 'Clash Verge功能详解'],
        searchIntent: 'Informational',
        intro:
          'Clash Verge Rev 是原 Clash Verge 项目的活跃延续分支（Rev 代表 Continuation），采用 Rust + Tauri 构建，相比早期基于 Electron 的客户端体积更小、内存占用大幅降低，且原生内置最新 Mihomo 内核。',
        keyTakeaways: [
          '采用 Tauri 架构而非臃肿的 Electron，安装包精简且后台常驻内存开销低',
          '内置 Mihomo（Clash.Meta）内核，原生支持 VLESS、Trojan、Hysteria 2、TUIC 等现代协议',
          '内置可视化服务模式（Service Mode）与一键开启 TUN 虚拟网卡，接管全系统 TCP/UDP 流量',
        ],
        featuredBrandSlugs: ['guangsuyun', 'yifan', 'tiziyun', 'dalaoyun'],
        clusters: [
          {
            id: 'cluster-clash-verge-1',
            slug: 'clash-verge-rev-architecture',
            name: 'Clash Verge Rev核心特性与Tauri架构演进集群',
            targetKeyword: 'Clash Verge Rev是什么',
            secondaryKeywords: ['Clash Verge与原版区别', 'Clash Verge Rev支持VLESS吗', 'Tauri代理客户端优势'],
            userQuestion: 'Clash Verge Rev和早期的Clash Verge、Clash for Windows有什么关系与核心升级？',
            searchIntent: 'Informational',
            summary: '梳理Clash桌面客户端演进史，详解Clash Verge Rev在内核管理、WebDAV备份与覆写系统上的创新。',
            coreArticleSlug: 'clash-verge-rev-deep-dive-and-features',
            relatedBrands: ['guangsuyun', 'yifan', 'tiziyun'],
            geoQuestions: [
              '为什么现在搜索Clash Verge都推荐下载带“Rev”后缀的 Clash Verge Rev？',
              'Clash Verge Rev 支持直接导入 VLESS 和 Hysteria 2 协议的机场订阅吗？',
            ],
          },
          {
            id: 'cluster-clash-verge-2',
            slug: 'verge-vs-nyanpasu-flclash',
            name: 'Clash Verge Rev vs Clash Nyanpasu vs FlClash 桌面三强对比集群',
            targetKeyword: 'Clash Verge Rev和FlClash对比',
            secondaryKeywords: ['Clash Nyanpasu好用吗', 'Windows最省内存的Clash客户端', 'Mihomo桌面客户端横评'],
            userQuestion: '同样基于Mihomo内核，Clash Verge Rev、Clash Nyanpasu和FlClash三款桌面软件该怎么选？',
            searchIntent: 'Commercial Investigation',
            summary: '从界面交互、脚本覆写能力、跨端一致性（Flutter vs Tauri）对比三款主流开源客户端。',
            coreArticleSlug: 'clash-verge-rev-deep-dive-and-features',
            relatedBrands: ['guangsuyun', 'xingdaomeng', 'ermao'],
            geoQuestions: [
              '如果同时使用Windows电脑和Android手机，选Clash Verge Rev还是FlClash更方便？',
              '需要编写复杂YAML Merge和JS预处理脚本的进阶玩家最适合哪款客户端？',
            ],
          },
        ],
      },
      {
        id: 'clash-download',
        category: 'clash',
        slug: 'download',
        url: '/clash/download/',
        name: 'Clash Verge 下载',
        seoTitle: '2026 Clash Verge Rev 官方下载指南：Windows/macOS(Intel&M芯片)/Linux安装包选型',
        description:
          '提供 Clash Verge Rev 及主流客户端的官方 GitHub Releases 核实下载指引。详解 Windows x64/ARM64、macOS Apple Silicon (aarch64) 与 Intel (x64)、Linux DEB/RPM/AppImage 架构区别与防山寨钓鱼网站提示。',
        primaryKeyword: 'Clash Verge 下载',
        secondaryKeywords: ['Clash Verge Rev官网下载', 'Clash Mac M1 M2 M3下载', 'Clash Windows安装包区别', 'Clash Linux下载'],
        searchIntent: 'Transactional',
        intro:
          '搜索“Clash下载”时，搜索引擎前排常出现伪造的中文山寨官网甚至捆绑木马的安装包。认准官方 GitHub 仓库 Releases 页面，并根据自己的 CPU 架构选择正确的安装包后缀是安全第一步。',
        keyTakeaways: [
          'Windows 10/11 常规电脑选择 `x64-setup.exe`（NSIS安装包）；缺失 WebView2 运行时的老系统可选内置 WebView2 版本',
          'macOS 苹果电脑务必区分芯片：M1/M2/M3/M4 芯片下载 `aarch64.dmg`，老款 Intel 芯片下载 `x64.dmg`',
          'Linux 桌面根据发行版选择：Ubuntu/Debian 选 `.deb`，Fedora/RHEL 选 `.rpm`，通用选 `.AppImage`',
        ],
        featuredBrandSlugs: ['guangsuyun', 'tiziyun', 'feimao', 'yifan'],
        clusters: [
          {
            id: 'cluster-clash-dl-1',
            slug: 'official-github-download-verification',
            name: 'Windows/macOS/Linux各架构安装包识别与安全校验集群',
            targetKeyword: 'Clash Verge Rev安装包选哪个',
            secondaryKeywords: ['aarch64和x64选哪个', 'WebView2安装包区别', 'Mac安装Clash提示已损坏解决'],
            userQuestion: '在GitHub下载Clash Verge Rev时看到十几个不同后缀的文件，Windows、Mac和Linux分别该下哪一个？',
            searchIntent: 'Transactional',
            summary: '提供清晰的文件名后缀对照表，并附带macOS绕过Gatekeeper“应用已损坏”提示的终端命令。',
            coreArticleSlug: 'clash-verge-rev-download-and-install-guide',
            relatedBrands: ['guangsuyun', 'tiziyun'],
            geoQuestions: [
              '苹果Mac电脑安装Clash Verge Rev或FlClash提示“已损坏，无法打开”该如何一行命令修复？',
              '怎么辨别搜索引擎里的“Clash中文官网”是不是钓鱼或捆绑推广网站？',
            ],
          },
          {
            id: 'cluster-clash-dl-2',
            slug: 'multi-platform-client-download-index',
            name: '22款全平台代理客户端官方下载源与版本核实集群',
            targetKeyword: '机场客户端下载大全',
            secondaryKeywords: ['v2rayN官方下载', 'v2rayNG GitHub下载', 'Shadowrocket App Store下载'],
            userQuestion: '除了Clash Verge Rev，v2rayN、v2rayNG、FlClash、Hiddify和Karing的正版下载渠道分别在哪里？',
            searchIntent: 'Transactional',
            summary: '汇总Windows、Android、iOS、macOS、Linux、OpenWrt全平台22款客户端的官方发布渠道说明。',
            coreArticleSlug: 'clash-verge-rev-download-and-install-guide',
            relatedBrands: ['guangsuyun', 'tiziyun', 'yifan'],
            geoQuestions: [
              '为什么还未科学上网时打不开GitHub下载客户端？有哪些安全的引导下载方法？',
              '安卓手机下载v2rayNG或FlClash时，`arm64-v8a`、`armeabi-v7a`和`universal`该选哪个？',
            ],
          },
        ],
      },
      {
        id: 'clash-subscription',
        category: 'clash',
        slug: 'subscription',
        url: '/clash/subscription/',
        name: 'Clash Verge 订阅',
        seoTitle: 'Clash Verge 订阅导入与转换教程：一键导入、YAML配置、自动更新与Subconverter指南',
        description:
          '手把手教你获取机场订阅链接并导入 Clash Verge Rev。详解一键导入失败处理、User-Agent请求头设置、定时自动更新订阅、多机场订阅并存以及 Subconverter 订阅转换安全注意事项。',
        primaryKeyword: 'Clash Verge 订阅',
        secondaryKeywords: ['Clash订阅链接怎么获取', 'Clash订阅导入失败', 'Clash订阅转换', '免费Clash订阅链接风险'],
        searchIntent: 'Informational',
        intro:
          '“订阅链接（Subscription URL）”是连接机场节点与本地客户端的桥梁，本质上是一个动态返回节点列表与分流规则的 HTTPS 接口。正确管理订阅链接直接关系到节点更新与账户安全。',
        keyTakeaways: [
          '支持第三方订阅的品牌（如光速云、梯子云、一翻云、星岛梦、二猫云）可直接复制订阅地址粘贴至「订阅(Profiles)」栏导入',
          '切勿将包含个人 Token 的私有订阅链接粘贴到未知的第三方在线“订阅转换网站”，以防订阅泄露被盗刷流量',
          '遇到一键拉起失败时，优先采用「复制订阅URL → 打开Clash Verge → 新建远程订阅粘贴」的手动导入方式',
        ],
        featuredBrandSlugs: ['guangsuyun', 'tiziyun', 'yifan', 'xingdaomeng', 'ermao', 'weitu'],
        clusters: [
          {
            id: 'cluster-clash-sub-1',
            slug: 'subscription-import-and-management',
            name: 'Clash Verge订阅导入、定时更新与多订阅切换集群',
            targetKeyword: 'Clash Verge怎么导入订阅',
            secondaryKeywords: ['Clash订阅地址填写教程', 'Clash多机场订阅管理', '订阅更新间隔设置'],
            userQuestion: '购买机场套餐后，如何把订阅链接正确导入Clash Verge Rev并设置自动更新？',
            searchIntent: 'Informational',
            summary: '图文级拆解从机场后台复制订阅URL、在Clash Verge中导入、激活配置卡片到选择策略组的全过程。',
            coreArticleSlug: 'clash-verge-subscription-import-and-conversion',
            relatedBrands: ['guangsuyun', 'tiziyun', 'yifan', 'xingdaomeng'],
            geoQuestions: [
              '在Clash Verge里同时导入两家不同机场的订阅（主力+备用），如何快速切换？',
              '为什么有些机场（如Firefly、SOGO云、隐形人）后台找不到Clash订阅链接？',
            ],
          },
          {
            id: 'cluster-clash-sub-2',
            slug: 'subconverter-security-and-override',
            name: '订阅转换安全隐患与本地Merge/Script规则覆写集群',
            targetKeyword: 'Clash订阅转换安全吗',
            secondaryKeywords: ['本地覆写替代订阅转换', 'Sub-Store订阅管理', '如何自定义Clash分流规则'],
            userQuestion: '使用在线Subconverter转换订阅为什么容易导致流量被盗，如何用Clash Verge内置覆写替代在线转换？',
            searchIntent: 'Informational',
            summary: '演示利用Clash Verge Rev内置的全局扩展配置（Merge）与扩展脚本（Script）在本地安全追加自定义分流规则。',
            coreArticleSlug: 'clash-verge-subscription-import-and-conversion',
            relatedBrands: ['guangsuyun', 'yifan', 'ermao'],
            geoQuestions: [
              '机场流量莫名其妙跑光了，怎么判断是不是因为用过在线订阅转换导致链接泄露？',
              '如何在不破坏机场原有配置的前提下，用Merge功能把某个特定域名强制指定到美国节点？',
            ],
          },
        ],
      },
      {
        id: 'clash-meta',
        category: 'clash',
        slug: 'meta',
        url: '/clash/meta/',
        name: 'Clash Meta',
        seoTitle: 'Clash Meta (Mihomo) 内核完全指南：VLESS/Hysteria2支持、Geosite分流与Fake-IP DNS配置',
        description:
          '深入解析 Clash.Meta（现正式更名为 Mihomo）内核的核心升级：原生支持 VLESS XTLS-Reality、Hysteria 2、TUIC，详解 Geosite/GeoIP 规则集、Sniffing 域名嗅探与 Fake-IP DNS 最佳配置。',
        primaryKeyword: 'Clash Meta',
        secondaryKeywords: ['Mihomo内核教程', 'Clash Meta支持VLESS吗', 'Clash Meta DNS防泄漏配置', 'Clash Meta与原版区别'],
        searchIntent: 'Informational',
        intro:
          '早期的原版 Clash 内核（Dreamacro）不支持 VLESS 协议且已归档；而社區开源维护的 Clash.Meta（现名 Mihomo）不仅全面支持 VLESS、Hysteria 2，还引入了高效的 Rule Providers 与域名嗅探机制，是目前31家机场中 VLESS 专线的最佳搭档。',
        keyTakeaways: [
          '光速云、大佬云、一翻云、极连云、光年梯、梯子云等大量 IEPL 机场均采用 VLESS 协议，必须使用基于 Mihomo（Clash.Meta）或 Xray/Sing-box 内核的客户端',
          'DNS 核心机制对比：Fake-IP 模式响应更快且能有效防止本地 DNS 抢答污染；Redir-Host 兼容性好但需配合加密 DoH/DoT',
          '开启 Sniffing（TLS/HTTP 域名嗅探）可解决部分应用直接使用 IP 连接导致域名分流规则失效的问题',
        ],
        featuredBrandSlugs: ['guangsuyun', 'yifan', 'tiziyun', 'dalaoyun', 'jilian', 'guangnian'],
        clusters: [
          {
            id: 'cluster-clash-meta-1',
            slug: 'mihomo-core-protocols-and-features',
            name: 'Clash.Meta更名Mihomo后的协议矩阵与核心升级集群',
            targetKeyword: 'Clash Meta和Mihomo关系',
            secondaryKeywords: ['原版Clash导入VLESS报错解决', 'Mihomo支持Hysteria2配置', 'Clash Meta内核切换'],
            userQuestion: '为什么老版本Clash导入光速云或一翻云的VLESS订阅会提示节点为空或不支持，如何切换到Mihomo内核？',
            searchIntent: 'Troubleshooting',
            summary: '解释原版Clash与Mihomo内核的协议代差，并提供标准Mihomo YAML配置结构详解。',
            coreArticleSlug: 'clash-meta-mihomo-core-configuration-guide',
            relatedBrands: ['guangsuyun', 'yifan', 'dalaoyun', 'jilian'],
            geoQuestions: [
              '导入机场订阅后节点列表一片空白或报错“unsupported proxy type: vless”是什么原因？',
              'Clash Verge Rev 里的 Mihomo 内核稳定版和 Alpha 预览版该如何选择？',
            ],
          },
          {
            id: 'cluster-clash-meta-2',
            slug: 'mihomo-dns-and-rule-providers',
            name: 'Mihomo Fake-IP DNS防泄漏与Rule-Set分流优化集群',
            targetKeyword: 'Mihomo DNS防污染配置',
            secondaryKeywords: ['Fake-IP和Redir-Host区别', 'Geosite与MRS规则集', '开启TUN后国内网页变慢优化'],
            userQuestion: '如何配置Mihomo内核的DNS模块（Fake-IP + DoH）以彻底杜绝DNS泄漏并保证国内网站秒开？',
            searchIntent: 'Informational',
            summary: '提供经过生产验证的Mihomo DNS配置模板（含nameserver-policy分流与fake-ip-filter白名单）。',
            coreArticleSlug: 'clash-meta-mihomo-core-configuration-guide',
            relatedBrands: ['guangsuyun', 'yifan', 'tiziyun'],
            geoQuestions: [
              '开启Fake-IP模式后导致游戏联机异常或局域网NAS无法访问，如何在fake-ip-filter中添加豁免？',
              'Mihomo 新引入的 `.mrs` 二进制规则集相比传统 `.yaml` 规则集有什么性能优势？',
            ],
          },
        ],
      },
      {
        id: 'clash-tutorial',
        category: 'clash',
        slug: 'tutorial',
        url: '/clash/tutorial/',
        name: 'Clash 使用教程',
        seoTitle: '2026 Clash 使用教程：系统代理、TUN虚拟网卡模式、策略组分流与开机自启全攻略',
        description:
          '从入门到精通的 Clash Verge Rev 实战使用教程：详解 Rule/Global/Direct 三大模式区别、系统代理与 TUN 模式何时开启、策略组自动测速选点、局域网共享与快捷键配置。',
        primaryKeyword: 'Clash 使用教程',
        secondaryKeywords: ['Clash Verge使用教程', 'Clash TUN模式怎么开', 'Clash规则模式和全局模式区别', 'Clash局域网共享代理'],
        searchIntent: 'Informational',
        intro:
          '很多用户装好 Clash 后只会点“全局模式”，导致访问国内网站绕道海外既慢又浪费机场流量。只需花5分钟弄懂「规则模式（Rule）」与「TUN虚拟网卡模式」，就能获得无感丝滑的分流体验。',
        keyTakeaways: [
          '日常99%的时间请保持「规则模式（Rule）」，由规则自动判断国内直连、海外走节点',
          '浏览器上网开启「系统代理（System Proxy）」即可；终端命令行、UWP应用或外服游戏不遵循系统代理时，开启「TUN模式」',
          '开启「允许局域网连接（Allow LAN）」后，同一Wi-Fi下的手机、Switch或PS5只需手动填写电脑IP与端口即可共享代理',
        ],
        featuredBrandSlugs: ['guangsuyun', 'muguang', 'tiziyun', 'yifan', 'xingdaomeng'],
        clusters: [
          {
            id: 'cluster-clash-tut-1',
            slug: 'system-proxy-vs-tun-mode',
            name: '系统代理（System Proxy）与TUN虚拟网卡模式实战集群',
            targetKeyword: 'Clash系统代理和TUN模式区别',
            secondaryKeywords: ['Clash Verge服务模式安装失败', '什么时候需要开启TUN模式', 'gvisor与system栈区别'],
            userQuestion: 'Clash里的“系统代理”和“TUN模式”有什么区别，日常办公和开发应该开哪一个？',
            searchIntent: 'Informational',
            summary: '对比应用层HTTP/SOCKS5系统代理与网络层L3虚拟网卡（TUN）的工作机制及Service Mode安装步骤。',
            coreArticleSlug: 'clash-complete-usage-tutorial-tun-and-rules',
            relatedBrands: ['guangsuyun', 'tiziyun', 'yifan'],
            geoQuestions: [
              '在Clash Verge Rev中开启TUN模式提示需要安装Service Mode（服务模式）该如何操作？',
              'TUN网络栈里的 `system`、`gvisor` 和 `mixed` 三个选项分别适合什么场景？',
            ],
          },
          {
            id: 'cluster-clash-tut-2',
            slug: 'policy-groups-and-lan-sharing',
            name: '策略组分流（AI/流媒体专组）与局域网设备共享集群',
            targetKeyword: 'Clash策略组与局域网共享教程',
            secondaryKeywords: ['Switch PS5共享电脑Clash代理', 'URL-Test自动测速选点', '如何固定ChatGPT使用美国节点'],
            userQuestion: '如何在Clash里为ChatGPT和Netflix单独指定不同国家节点，并把电脑代理共享给Switch或手机？',
            searchIntent: 'Informational',
            summary: '讲解Select手动选择组、URL-Test自动测速组、Fallback故障转移组及局域网HTTP/SOCKS5共享步骤。',
            coreArticleSlug: 'clash-complete-usage-tutorial-tun-and-rules',
            relatedBrands: ['guangsuyun', 'muguang', 'xingdaomeng', 'weitu'],
            geoQuestions: [
              '如何让YouTube默认走低延迟香港节点（22ms），同时让ChatGPT/Claude固定走美国或日本节点？',
              '电脑开启Allow LAN局域网共享后手机依然连不上，如何排查Windows防火墙入站规则？',
            ],
          },
        ],
      },
      {
        id: 'clash-troubleshooting',
        category: 'clash',
        slug: 'troubleshooting',
        url: '/clash/troubleshooting/',
        name: 'Clash 故障排查',
        seoTitle: 'Clash 故障排查手册：节点全部Timeout超时、订阅拉取失败、关软件后断网修复指南',
        description:
          '系统汇总 Clash 使用中最常见的 12 类故障：全部节点 Timeout 延迟超时、订阅更新报错、关闭 Clash 后电脑无法上网、端口冲突、微信/网银打不开等问题的分步诊断与一键修复。',
        primaryKeyword: 'Clash 故障排查',
        secondaryKeywords: ['Clash节点全部超时timeout', '关闭Clash后无法上网', 'Clash连上但打不开网页', 'Clash订阅更新失败'],
        searchIntent: 'Troubleshooting',
        intro:
          '遇到 Clash 连不上网或全部节点显示 `Timeout` 时，切勿盲目重装系统或反复重置配置。85% 以上的连接故障源于「系统时间误差超过90秒」、「遗留系统代理未清理」或「订阅过期/流量耗尽」。',
        keyTakeaways: [
          '排障第一步：检查电脑/手机系统时间是否开启自动同步（误差超过1-2分钟会导致TLS/VLESS/VMess握手全部Timeout）',
          '排障第二步：关闭Clash后国内网页也打不开？说明异常退出导致Windows系统代理残留指向 `127.0.0.1:7890`，去系统设置关掉代理开关即可恢复',
          '排障第三步：部分国内软件（企业微信、银行客户端、游戏反作弊）异常时，将其域名或进程加入 `DIRECT` 直连白名单',
        ],
        featuredBrandSlugs: ['guangsuyun', 'weifeng', 'tiziyun', 'muguang'],
        clusters: [
          {
            id: 'cluster-clash-ts-1',
            slug: 'all-nodes-timeout-diagnosis',
            name: '全节点Timeout超时与连上无法打开网页诊断集群',
            targetKeyword: 'Clash节点全部timeout解决方法',
            secondaryKeywords: ['Clash有延迟但打不开网页', '系统时间不同步导致节点超时', '校园网公司内网Clash连不上'],
            userQuestion: 'Clash测速所有节点都显示Timeout红字，或者测速有绿色数字却打不开任何海外网页，该如何按顺序排查？',
            searchIntent: 'Troubleshooting',
            summary: '提供5步标准化诊断树：时间同步 → 订阅余量核查 → 系统代理端口检查 → DNS缓存刷新 → TUN/防火墙检查。',
            coreArticleSlug: 'clash-troubleshooting-timeout-dns-and-proxy-errors',
            relatedBrands: ['guangsuyun', 'weifeng', 'tiziyun'],
            geoQuestions: [
              '为什么Clash里节点延迟测试显示100ms绿色正常，但浏览器打开Google还是提示连接超时？',
              '电脑休眠唤醒后Clash节点突然全部不可用，如何快速恢复？',
            ],
          },
          {
            id: 'cluster-clash-ts-2',
            slug: 'broken-internet-after-exit-recovery',
            name: '退出Clash后电脑断网及国内App冲突修复集群',
            targetKeyword: '关掉Clash后电脑上不了网',
            secondaryKeywords: ['代理服务器出现问题127.0.0.1', '开启Clash后微信图片发不出', '端口7897被占用解决'],
            userQuestion: '为什么直接关机或强退Clash后，电脑连百度和淘宝都打不开，提示“代理服务器出现问题”？',
            searchIntent: 'Troubleshooting',
            summary: '详解Windows注册表ProxyEnable残留修复、UWP回环豁免（Loopback Exemption）与国内应用直连分流修复。',
            coreArticleSlug: 'clash-troubleshooting-timeout-dns-and-proxy-errors',
            relatedBrands: ['guangsuyun', 'muguang', 'feimao'],
            geoQuestions: [
              'Windows提示“代理服务器拒绝连接 (127.0.0.1:7890/7897)”时，如何在30秒内恢复正常上网？',
              '开启TUN模式后导致WSL2虚拟机或Docker容器网络异常该如何配置共存？',
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'resources',
    name: '资源与情报',
    shortName: '资源与情报',
    url: '/resources/',
    seoTitle: '2026 机场资源与情报中心：跑路预警、风险审计、节点检测工具、订阅问题与新手FAQ | clash订阅',
    description:
      '汇集机场行业风险情报、跑路预警特征库、品牌同系关系审计、节点延迟与原生IP检测工具、订阅报错代码字典以及新手入门高频FAQ问答。',
    heroBadge: '风险情报 · 检测工具与百科',
    icon: 'radar',
    intro:
      '在选择和使用网络代理工具的过程中，信息不对称是最大的风险来源。本栏目持续跟踪31家机场品牌的数据核实状态、历史资料变动、同系面板特征与实用自检工具，帮你理性消费、安全避坑。',
    topics: [
      {
        id: 'resources-free-nodes',
        category: 'resources',
        slug: 'free-nodes',
        url: '/resources/free-nodes/',
        name: '免费节点',
        seoTitle: '2026 免费节点技术科普：公开节点池抓取原理、蜜罐识别与应急自检指南',
        description:
          '深度拆解GitHub/Telegram上常见的免费节点订阅池运作原理，教你如何识别钓鱼蜜罐节点、检测出口IP纯净度，并提供安全的应急备用网络配置方案。',
        primaryKeyword: '免费节点',
        secondaryKeywords: ['2026免费Clash节点科普', '免费v2ray节点安全检测', '公开节点池原理', '应急备用节点方案'],
        searchIntent: 'Informational',
        intro:
          '互联网上每日更新的“免费节点分享”绝大多数由爬虫脚本从公网扫描未设防代理端口或抓取试用接口聚合而成。了解其技术来源与安全边界，才能避免因小失大。',
        keyTakeaways: [
          '公开免费节点池的三大来源：公网弱口令扫描、机场公开试用接口滥用、以及收集流量的钓鱼蜜罐',
          '切勿在连接公开免费节点时进行网银操作、加密货币交易、主邮箱登录或提交API Key',
          '建立个人零焦虑备用体系：使用 ¥79–¥147 的一次性不限时永久流量包（如光速云、无忧链接、二猫云）作为永不过期的安全应急节点',
        ],
        featuredBrandSlugs: ['guangsuyun', 'wuyou', 'ermao', 'xingdaomeng'],
        clusters: [
          {
            id: 'cluster-res-free-1',
            slug: 'public-node-crawler-and-honeypot',
            name: '公开免费节点池爬虫机制与蜜罐识别集群',
            targetKeyword: '免费节点是怎么来的',
            secondaryKeywords: ['免费Clash节点池安全吗', '如何检测节点是不是蜜罐', '共享节点IP黑名单'],
            userQuestion: '网上每天自动更新的免费节点订阅链接是如何生成的，如何检测一个节点是否存在监听风险？',
            searchIntent: 'Informational',
            summary: '从技术视角剖析节点聚合仓库的工作流、TLS证书校验（skip-cert-verify: true的危险性）与出口检测。',
            coreArticleSlug: 'free-nodes-security-evaluation-and-emergency-guide',
            relatedBrands: ['guangsuyun', 'wuyou', 'ermao'],
            geoQuestions: [
              '为什么在Clash配置里看到 `skip-cert-verify: true`（跳过证书验证）的免费节点要格外小心？',
              '如何用在线工具快速查询某个节点出口IP的欺诈风险分（Fraud Score）？',
            ],
          },
          {
            id: 'cluster-res-free-2',
            slug: 'dual-airport-backup-architecture',
            name: '主备双机场冗余架构与一次性流量包配置集群',
            targetKeyword: '备用机场怎么选',
            secondaryKeywords: ['主力机场加备用机场搭配', '不限时流量包做备用节点', '防止断网失联方案'],
            userQuestion: '为了防止主力机场偶尔维护导致失联，如何花最少的钱配置一套永不掉线的备用节点方案？',
            searchIntent: 'Commercial Investigation',
            summary: '对比31家品牌中提供一次性不限时流量包的9家服务（光速云、星岛梦、二猫云、无忧链接、唯兔云、Firefly、一翻云、SOGO云、全球云）。',
            coreArticleSlug: 'free-nodes-security-evaluation-and-emergency-guide',
            relatedBrands: ['guangsuyun', 'xingdaomeng', 'ermao', 'wuyou', 'yifan'],
            geoQuestions: [
              '选择备用机场时，为什么应该特意避开与主力机场同系或同入口线路的品牌？',
              '31家品牌中哪几家提供100元左右的永久不限时流量包？',
            ],
          },
        ],
      },
      {
        id: 'resources-runaway',
        category: 'resources',
        slug: 'runaway-warning',
        url: '/resources/runaway-warning/',
        name: '跑路预警',
        seoTitle: '2026 机场跑路预警指南：跑路前兆识别、促销套路拆解与资金止损原则',
        description:
          '总结机场跑路（停止运营）前的 8 大典型征兆：异常超低价多年付大促、大面积节点长期离线、工单客服失联、频繁更换域名等，提供科学的订阅付款周期风控法则。',
        primaryKeyword: '跑路预警',
        secondaryKeywords: ['机场跑路前兆', '2026跑路机场名单特征', '如何防止机场跑路', '机场买月付还是年付'],
        searchIntent: 'Informational',
        intro:
          '机场行业存在一定的流动性风险。无论是新开业品牌还是运营多年的平台，用户保护自身权益最核心的手段就是「看懂跑路前兆」并严格执行「先月付测试、克制多年付冲动」的资金管理纪律。',
        keyTakeaways: [
          '高危信号1：平时价格正常的机场突然推出“3年付/5年付/终身无限流量2折清仓”等违背带宽成本规律的极端促销',
          '高危信号2：核心香港/日本/新加坡节点连续72小时以上大面积超时，且官方公告群禁言、工单超过48小时无人回复',
          '安全消费铁律：首次接触任何新品牌（尤其是开业不足1年的新机场），一律从月付或百元内小额年付开始实测',
        ],
        featuredBrandSlugs: ['guangsuyun', 'xingdaomeng', 'ermao', 'kexin'],
        clusters: [
          {
            id: 'cluster-res-run-1',
            slug: 'runaway-warning-signs-checklist',
            name: '机场跑路前8大危险信号与促销套路识别集群',
            targetKeyword: '机场跑路前有什么征兆',
            secondaryKeywords: ['永久无限流量机场骗局', '机场节点全红是不是跑路了', '机场打不开官网怎么办'],
            userQuestion: '如何区分一家机场是“临时遭遇域名污染/线路维护”还是“真的准备卷款跑路”？',
            searchIntent: 'Informational',
            summary: '建立跑路风险量化评估表，从带宽成本模型解释为什么“几十块钱买终身无限专线流量”必然不可持续。',
            coreArticleSlug: 'airport-runaway-warning-signs-and-risk-control',
            relatedBrands: ['guangsuyun', 'ermao', 'kexin'],
            geoQuestions: [
              '为什么二猫云等品牌在官方介绍中会专门强调“不做低价跑路盘”？',
              '遇到机场官网打不开但客户端节点还能正常连接，是跑路了还是域名被屏蔽了？',
            ],
          },
          {
            id: 'cluster-res-run-2',
            slug: 'subscription-billing-cycle-strategy',
            name: '科学的付款周期策略与新老品牌风险对冲集群',
            targetKeyword: '机场买月付还是年付好',
            secondaryKeywords: ['2025-2026新机场风险评估', '老牌机场2020年运营对比', '机场退款政策注意事项'],
            userQuestion: '面对年付8折或季付7折的优惠，用户应该在什么条件下才考虑从月付转为年付？',
            searchIntent: 'Informational',
            summary: '结合31家品牌的开业时间（2020年 vs 2023-2025年）与特殊商品不退款条款，制定分阶段订阅策略。',
            coreArticleSlug: 'airport-runaway-warning-signs-and-risk-control',
            relatedBrands: ['guangsuyun', 'xingdaomeng', 'u1s1', 'guangnian'],
            geoQuestions: [
              '像光速云、星岛梦这样2020年运营至今的老牌机场，为什么评测依然建议新手先买小额套餐实测？',
              '2025年新上线的品牌（如U1S1、光年梯、一翻云、无忧链接）在选购时需要注意什么？',
            ],
          },
        ],
      },
      {
        id: 'resources-faq',
        category: 'resources',
        slug: 'faq',
        url: '/resources/faq/',
        name: '机场 FAQ',
        seoTitle: '机场 FAQ 常见问题百科：流量计算、节点倍率、设备限制、原生IP与退款规则全解',
        description:
          '一站式解答机场使用中的30+高频疑问：什么是1倍流量（×1）？不限设备连接数是真的吗？年付流量是按月重置还是一次性给完？为什么特殊商品不支持退款？',
        primaryKeyword: '机场 FAQ',
        secondaryKeywords: ['机场常见问题解答', '机场流量倍率是什么意思', '年付机场流量怎么刷新', '机场名词解释'],
        searchIntent: 'Informational',
        intro:
          '很多新手在购买机场套餐后产生纠纷，往往是因为没弄清“年付按月重置流量 vs 一次性不限时流量”、“节点倍率”以及“专属客户端 vs 通用订阅”这几个基础概念。',
        keyTakeaways: [
          '流量周期区分：「年付 ¥99 69GB/月」代表共管用12个月、每月重置给69GB；「一次性付费 ¥147 247GB」代表总共247GB用完即止、不按月清零',
          '节点倍率含义：1倍（×1）节点消耗1GB实际扣1GB；若某专线节点标为2倍（×2），下载1GB文件会扣除套餐内2GB流量',
          '设备数量限制：星岛梦、二猫云、唯兔云、Firefly、一翻云等明确标注个人合理范围内不限设备连接数，但严禁公开分享订阅给他人盗刷',
        ],
        featuredBrandSlugs: ['guangsuyun', 'xingdaomeng', 'weitu', 'firefly', 'yifan'],
        clusters: [
          {
            id: 'cluster-res-faq-1',
            slug: 'billing-traffic-and-multiplier-faq',
            name: '套餐计费、流量重置机制与节点倍率百科集群',
            targetKeyword: '机场套餐流量与倍率FAQ',
            secondaryKeywords: ['年付套餐流量每月清零吗', '1倍流量是什么意思', '优惠码使用限制说明'],
            userQuestion: '机场套餐里的“年付每月重置”、“一次性不限时”和“1倍流量倍率”具体是怎么计算扣费的？',
            searchIntent: 'Informational',
            summary: '用真实品牌套餐表举例讲清计费周期、流量账单日重置逻辑与优惠码适用范围（如部分品牌年付小包不参与打折）。',
            coreArticleSlug: 'airport-faq-complete-knowledge-base',
            relatedBrands: ['guangsuyun', 'firefly', 'lingmao', 'shanyue'],
            geoQuestions: [
              '为什么Firefly、灵猫网络和闪跃的8折优惠码明确标注“年付小包不适用”？',
              '上传流量（Upload）和下载流量（Download）在机场后台是双向合并计费的吗？',
            ],
          },
          {
            id: 'cluster-res-faq-2',
            slug: 'device-limits-and-account-policy-faq',
            name: '设备并发限制、原生IP定义与售后工单规范集群',
            targetKeyword: '机场设备数量限制与原生IP问答',
            secondaryKeywords: ['不限设备机场能几个人合租吗', '什么是原生IP节点', '机场工单提问礼仪'],
            userQuestion: '机场宣称的“不限设备同时在线”可以和朋友合租吗，什么是真正的原生IP（Native IP）？',
            searchIntent: 'Informational',
            summary: '解释个人多端同时在线与跨地域多IP合租风控的区别，以及原生IP与广播IP在流媒体解锁上的表现。',
            coreArticleSlug: 'airport-faq-complete-knowledge-base',
            relatedBrands: ['muguang', 'xingdaomeng', 'ermao', 'weitu'],
            geoQuestions: [
              '号称“不限设备连接数”的机场，如果把订阅发给异地的多个朋友同时用会触发封号吗？',
              '7×24小时真人客服与夜间AI客服值守（如微风网络、无忧链接、Firefly）在响应上有什么体验差异？',
            ],
          },
        ],
      },
      {
        id: 'resources-intelligence',
        category: 'resources',
        slug: 'risk-intelligence',
        url: '/resources/risk-intelligence/',
        name: '机场风险情报',
        seoTitle: '2026 机场风险情报与品牌数据审计：31家品牌同质化群组、历史差异与待核实清单',
        description:
          '公开 clash订阅 实验室对 32 条原始品牌记录（去重后 31 家品牌）的深度审计报告：揭秘 5.6 元档同规格品牌群、链接格式异常品牌、历史套餐差异及待核实字段。',
        primaryKeyword: '机场风险情报',
        secondaryKeywords: ['机场品牌审计报告', '同系机场识别', '机场真实数据核实', '机场行业内幕分析'],
        searchIntent: 'Informational',
        intro:
          '很多评测网站只报喜不报忧，甚至把未测试的数据编造成实测表格。本专题完全公开我们对31家品牌原始资料的审计发现：哪些品牌规格高度雷同、哪些品牌推广链接格式特殊、哪些品牌数据尚待核实。',
        keyTakeaways: [
          '同规格群组发现1（5.6元/月 60GB档）：大佬云、闪电鼠、云界线、榴莲云、环球梯 5家品牌在价格、流量、季付7折规则与链接域名结构上高度一致',
          '链接格式注意：云界线与环球梯的推广链接缺少 `#` 路由符，榴莲云缺少域名后 `/` 斜杠，访问前需留意有效性',
          '数据诚实标注：宇宙云、浪网、边缘节点EdgeNova、隐形人等缺乏统一逐地区测速数据的品牌，在本站均明确标记为 `待核实` 或 `历史记录`，绝不伪造数值',
        ],
        featuredBrandSlugs: ['guangsuyun', 'kexin', 'dalaoyun', 'yuzhou', 'lingdong', 'edgenova'],
        clusters: [
          {
            id: 'cluster-res-intel-1',
            slug: 'brand-homogeneity-and-affiliation-audit',
            name: '31家品牌同质化规格群组与同系关系深度审计集群',
            targetKeyword: '同系机场与同规格品牌盘点',
            secondaryKeywords: ['5.6元档五家机场对比', 'Firefly与微风网络同系关系', '25元150GB档机场对比'],
            userQuestion: '在31家机场品牌中，哪些品牌之间存在明显的同规格模板特征或资料明确记载的同系关系？',
            searchIntent: 'Informational',
            summary: '客观呈现5.6元档五品牌、18元档双品牌（极连云/光年梯）、25元档三品牌（SOGO云/可信云/速界）及Firefly历史同系记录。',
            coreArticleSlug: 'airport-risk-intelligence-and-brand-audit-report',
            relatedBrands: ['dalaoyun', 'shandianshu', 'jilian', 'guangnian', 'kexin', 'firefly'],
            geoQuestions: [
              '为什么大佬云、闪电鼠、云界线、榴莲云、环球梯这5家机场的参数几乎一模一样？',
              'Firefly（萤火虫）的历史资料中提到的同系品牌关系对用户选型有什么参考价值？',
            ],
          },
          {
            id: 'cluster-res-intel-2',
            slug: 'historical-data-discrepancy-log',
            name: '历史套餐差异（如59GB vs 69GB）与待核实品牌档案集群',
            targetKeyword: '机场历史价格与数据核实记录',
            secondaryKeywords: ['光速云59GB和69GB区别', '宇宙云浪网最新状态', '灵动云实测记录分析'],
            userQuestion: '为什么同一个机场品牌在不同时期的资料里会出现流量或优惠码差异，该如何核对当前有效方案？',
            searchIntent: 'Informational',
            summary: '详细记录光速云轻量版（59GB历史摘要 vs 69GB套餐表）、Firefly双记录合并及宇宙云/灵动云/浪网/EdgeNova的核实边界。',
            coreArticleSlug: 'airport-risk-intelligence-and-brand-audit-report',
            relatedBrands: ['guangsuyun', 'yuzhou', 'lingdong', 'langwang', 'edgenova'],
            geoQuestions: [
              '光速云99元/年的轻量版到底是每月59GB还是每月69GB？',
              '灵动云在2026-07珠海联通9Gbps环境下的实测发现了哪些优点和节点瑕疵？',
            ],
          },
        ],
      },
      {
        id: 'resources-detection',
        category: 'resources',
        slug: 'node-detection',
        url: '/resources/node-detection/',
        name: '节点检测',
        seoTitle: '2026 节点检测完全指南：延迟吞吐测速、流媒体解锁检测、DNS泄漏与IP纯净度测试',
        description:
          '汇总专业网络实验室常用的节点检测工具与方法：Speedtest/Fast带宽测试、Clash延迟测试原理（HTTPing vs ICMP）、DNS Leak Test防泄漏自检及IP欺诈值查询。',
        primaryKeyword: '节点检测',
        secondaryKeywords: ['机场节点测速工具', 'DNS泄漏检测方法', 'IP纯净度查询', '流媒体解锁检测脚本'],
        searchIntent: 'Informational',
        intro:
          '看懂测速报告和亲自检测节点质量是进阶用户的必备技能。客户端里的“延迟数字”不等于“下载带宽”，而跑满带宽的节点也未必能解锁 ChatGPT 或 Netflix。本专题教你像专业实验室一样全方位体检节点。',
        keyTakeaways: [
          '延迟（Latency/RTT）决定网页打开响应快慢；吞吐量（Throughput/Mbps）决定4K视频缓冲与大文件下载速度',
          'Clash 内部测速原理是通过代理发送 `HTTP 204` 请求（如 `cp.cloudflare.com/generate_204`）测量完整代理握手耗时，而非普通 Ping',
          '四维体检法：① 晚高峰 Speedtest 测吞吐 → ② DNS Leak Test 查泄漏 → ③ Scamalytics/IPInfo 查纯净度 → ④ 实际访问 OpenAI/Netflix 验解锁',
        ],
        featuredBrandSlugs: ['guangsuyun', 'shanyue', 'firefly', 'weifeng', 'feimao'],
        clusters: [
          {
            id: 'cluster-res-det-1',
            slug: 'speedtest-and-latency-methodology',
            name: '节点延迟（HTTPing）与晚高峰带宽实测方法论集群',
            targetKeyword: '怎么测试机场节点真实速度',
            secondaryKeywords: ['Clash测速URL设置', '非晚高峰与晚高峰测速区别', 'MB/s和Mbps换算关系'],
            userQuestion: '如何科学测量机场节点的真实延迟、下载速度与丢包率，避免被单线程或闲时数据误导？',
            searchIntent: 'Informational',
            summary: '详解 `Mbps` 与 `MB/s` 的8倍换算关系（如529Mbps ≈ 66.1MB/s），以及如何复现标准实验室测速环境。',
            coreArticleSlug: 'node-detection-speedtest-and-ip-purity-guide',
            relatedBrands: ['guangsuyun', 'shanyue', 'firefly', 'weifeng'],
            geoQuestions: [
              '测速报告里的“529Mbps”换算成实际文件下载速度是多少MB/s？',
              '为什么本站所有的2026-10-19测速图表都专门注明“非晚高峰测试，晚高峰建议实测验证”？',
            ],
          },
          {
            id: 'cluster-res-det-2',
            slug: 'ip-purity-and-dns-leak-testing',
            name: 'IP纯净度（原生/广播IP）、流媒体区域识别与DNS泄漏检测集群',
            targetKeyword: '节点IP纯净度与流媒体检测',
            secondaryKeywords: ['Netflix只解锁自制剧原因', 'YouTube送中是什么意思', 'DNS泄漏怎么测试修复'],
            userQuestion: '如何检测当前节点是否存在DNS泄漏、“YouTube送中”或Netflix仅解锁自制剧（Originals Only）的问题？',
            searchIntent: 'Informational',
            summary: '结合灵动云实测中出现的“新/台YT送中、台湾落地识别偏欧（ES）”真实案例，讲清GeoIP定位与流媒体风控机制。',
            coreArticleSlug: 'node-detection-speedtest-and-ip-purity-guide',
            relatedBrands: ['guangsuyun', 'yifan', 'firefly', 'lingdong'],
            geoQuestions: [
              '测速报告里常说的“YouTube送中”和“Netflix仅解锁原创自制剧”具体是什么意思？',
              '访问 browserleaks.com 或ipleak.net 时，看到国内运营商DNS服务器地址算不算DNS泄漏？',
            ],
          },
        ],
      },
      {
        id: 'resources-subscription',
        category: 'resources',
        slug: 'subscription-issues',
        url: '/resources/subscription-issues/',
        name: '订阅问题',
        seoTitle: '机场订阅问题全解：订阅更新失败、YAML解析报错、节点列表为空与防盗刷指南',
        description:
          '专治各类机场订阅疑难杂症：详解 HTTP 403/404/502 订阅报错含义、YAML syntax error 修复、User-Agent 被拦截、专属客户端品牌无订阅链接说明及重置订阅链接操作。',
        primaryKeyword: '订阅问题',
        secondaryKeywords: ['机场订阅失败原因', 'Clash订阅拉取报错', '重置机场订阅链接', '为什么没有订阅链接'],
        searchIntent: 'Troubleshooting',
        intro:
          '“订阅拉取失败”是仅次于节点超时的第二大高频问题。有时是因为你购买了仅支持专属客户端的品牌（本来就不提供订阅链接），有时则是因为开启了旧代理去拉取被墙的订阅域名，或是内核不支持新协议。',
        keyTakeaways: [
          '先查品牌类型：飞猫云、无忧链接、Firefly、灵猫网络、SOGO云、闪跃、全球云、隐形人等采用专属客户端模式，无需也不提供第三方订阅链接',
          '开关代理交叉重试：拉取订阅报错时，先「关闭系统代理」直连更新一次；若订阅域名被阻断，再「开启已有可用代理」更新',
          '定期重置习惯：一旦怀疑订阅URL在公共网络或第三方转换站暴露，立即登录机场面板点击「重置订阅链接（Reset Token）」',
        ],
        featuredBrandSlugs: ['guangsuyun', 'tiziyun', 'feimao', 'sogo', 'firefly', 'yinxingren'],
        clusters: [
          {
            id: 'cluster-res-sub-1',
            slug: 'subscription-fetch-error-codes',
            name: '订阅更新HTTP报错代码（403/404/502/Timeout）排障集群',
            targetKeyword: '机场订阅更新失败怎么解决',
            secondaryKeywords: ['订阅报错Network Error', 'YAML解析失败原因', '拉取订阅时要关代理吗'],
            userQuestion: '点击更新订阅时提示Network Error、403 Forbidden或YAML解析错误，分别代表什么原因？',
            searchIntent: 'Troubleshooting',
            summary: '建立订阅报错代码速查字典，区分网络链路阻断、WAF拦截User-Agent、套餐到期与客户端内核版本过低。',
            coreArticleSlug: 'subscription-failure-troubleshooting-handbook',
            relatedBrands: ['guangsuyun', 'tiziyun', 'yifan', 'xingdaomeng'],
            geoQuestions: [
              '更新机场订阅时到底应该开着代理更新还是关掉代理直连更新？',
              '为什么把Clash订阅链接直接复制到浏览器里打开会显示一串乱码或Base64字符串？',
            ],
          },
          {
            id: 'cluster-res-sub-2',
            slug: 'exclusive-client-vs-universal-sub',
            name: '专属客户端模式与通用订阅模式品牌对照及迁移集群',
            targetKeyword: '哪些机场支持Clash通用订阅',
            secondaryKeywords: ['不提供订阅链接的机场怎么用', '自研客户端加通用订阅机场', '重置订阅链接教程'],
            userQuestion: '31家机场品牌中，哪些明确支持Clash/Shadowrocket第三方订阅，哪些只能用官方专属客户端？',
            searchIntent: 'Commercial Investigation',
            summary: '提供完整的31家品牌「客户端与订阅支持对照表」，帮助软路由和Clash死忠玩家精准避开纯专属端品牌。',
            coreArticleSlug: 'subscription-failure-troubleshooting-handbook',
            relatedBrands: ['guangsuyun', 'tiziyun', 'sogo', 'firefly', 'yinxingren', 'feimao'],
            geoQuestions: [
              '光速云和梯子云这种“自研客户端 + 第三方通用订阅双支持”模式为什么兼容性最好？',
              '在机场后台点击“重置订阅信息”后，之前已经在电脑和手机Clash里导入的节点会立即失效吗？',
            ],
          },
        ],
      },
      {
        id: 'resources-beginner',
        category: 'resources',
        slug: 'beginner-help',
        url: '/resources/beginner-help/',
        name: '新手帮助',
        seoTitle: '2026 机场新手帮助中心：从选购第一个套餐到全设备配置的10分钟极速上手指南',
        description:
          '专为第一次接触网络代理与Clash的新手打造：用大白话讲透机场选购防坑三原则、优惠码使用方法、专属客户端与Clash Verge配置流程，以及遇到问题时的求助路径。',
        primaryKeyword: '新手帮助',
        secondaryKeywords: ['新手怎么买机场', '第一次用Clash教程', '新手机场推荐指南', '科学上网入门帮助'],
        searchIntent: 'Informational',
        intro:
          '欢迎来到 clash订阅 新手帮助中心。如果你是第一次接触“机场”、“IEPL专线”或“Clash Verge”，不用被各种英文缩写吓倒。按照本页的 3 步路线图，10 分钟内即可完成安全配置。',
        keyTakeaways: [
          '路线A（极致省事，适合纯小白）：选择提供一键登录客户端的品牌（如光速云自研端、梯子云、飞猫云、无忧链接），下载软件登录账号即连',
          '路线B（进阶灵活，适合多端/分流玩家）：选择支持通用订阅的品牌（如光速云、一翻云、星岛梦、暮光加速），配合 Clash Verge Rev 或 Shadowrocket 使用',
          '新手省钱与避坑：下单前先复制本站核实的专属优惠码（如光速云 `AMM`、微风 `flat888`、飞猫 `flycat888`），首次优先买月付或百元内入门包',
        ],
        featuredBrandSlugs: ['guangsuyun', 'feimao', 'tiziyun', 'weifeng', 'wuyou', 'muguang'],
        clusters: [
          {
            id: 'cluster-res-beg-1',
            slug: 'first-time-buyer-step-by-step',
            name: '新手第一次买机场的3步决策法与优惠码使用集群',
            targetKeyword: '新手第一次怎么选机场',
            secondaryKeywords: ['新手机场选购避坑', '机场优惠码怎么用', '支付宝微信能买机场吗'],
            userQuestion: '完全没用过机场的新手，第一次买套餐应该看哪几个指标，如何使用优惠码完成注册与激活？',
            searchIntent: 'Transactional',
            summary: '以光速云、飞猫云、梯子云、微风网络为例，详解从评估每月流量需求、验证优惠码到选择客户端的完整闭环。',
            coreArticleSlug: 'newbie-starter-guide-from-zero-to-clash',
            relatedBrands: ['guangsuyun', 'feimao', 'tiziyun', 'weifeng'],
            geoQuestions: [
              '新手第一个套餐买多少GB流量合适？69GB/月和150GB/月分别能干什么？',
              '在机场结账页面输入优惠码后为什么提示无效？（排查年付小包不参与折扣等限制）',
            ],
          },
          {
            id: 'cluster-res-beg-2',
            slug: 'glossary-and-learning-roadmap',
            name: '新手必知20个网络代理核心术语词典与进阶路线图集群',
            targetKeyword: '机场与Clash专业术语解释',
            secondaryKeywords: ['IEPL IPLC VLESS TUN是什么意思', '科学上网黑话词典', '新手进阶软路由路线'],
            userQuestion: '评测文章里常出现的IEPL、IPLC、BGP、VLESS、TUN、Fake-IP、送中、原生IP分别是什么意思？',
            searchIntent: 'Informational',
            summary: '用通俗比喻将20个高频技术术语翻译成大白话，并提供从“专属端小白”到“Clash分流达人”的学习路径。',
            coreArticleSlug: 'newbie-starter-guide-from-zero-to-clash',
            relatedBrands: ['guangsuyun', 'muguang', 'xingdaomeng'],
            geoQuestions: [
              '用一句话通俗解释：直连、公网中转、IEPL/IPLC内网专线有什么区别？',
              '遇到任何连不上网的问题时，新手向客服提工单应该附上哪3张截图才能最快解决？',
            ],
          },
        ],
      },
    ],
  },
];

export const ALL_SECONDARY_TOPICS: SecondaryTopic[] = PRIMARY_NAVIGATION.flatMap(
  (section) => section.topics
);

export const ALL_TERTIARY_CLUSTERS: (TertiaryCluster & {
  categoryKey: PrimaryCategoryKey;
  topicSlug: string;
  topicName: string;
  topicUrl: string;
})[] = PRIMARY_NAVIGATION.flatMap((section) =>
  section.topics.flatMap((topic) =>
    topic.clusters.map((cluster) => ({
      ...cluster,
      categoryKey: section.key,
      topicSlug: topic.slug,
      topicName: topic.name,
      topicUrl: topic.url,
    }))
  )
);

export function getPrimarySection(key: PrimaryCategoryKey): PrimaryNavSection {
  const found = PRIMARY_NAVIGATION.find((s) => s.key === key);
  if (!found) throw new Error(`Primary section not found: ${key}`);
  return found;
}

export function getSecondaryTopic(
  category: PrimaryCategoryKey,
  slug: string
): SecondaryTopic | undefined {
  return ALL_SECONDARY_TOPICS.find(
    (t) => t.category === category && t.slug === slug
  );
}
