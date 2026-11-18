<div align="center">

<img src="public/images/clash-logo.png" width="120" height="120" alt="clash订阅 Logo" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(37,99,235,0.2);" />

# clash订阅 (clashverge.lol)

**中文网络工具专业评测媒体 · Astro 现代卡片式博客 · 31家品牌评测数据库 · SEO/GEO 知识转化平台**

[![Astro](https://img.shields.io/badge/Astro-5.18.2-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Pagefind](https://img.shields.io/badge/Pagefind-Search_Indexed-10B981?style=flat-square&logo=search&logoColor=white)](https://pagefind.app/)
[![SEO Health](https://img.shields.io/badge/SEO_Health-96%2F100_PASS-success?style=flat-square&logo=google&logoColor=white)](#-技术-seo-与-风控审计成绩)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

[在线预览 (本地)](http://localhost:4399/) · [核心审计报告](docs/Preventive_SEO_Audit_Report.md) · [品牌数据库](src/data/brands.ts) · [问题反馈](https://github.com/zlzlzl98698-dev/clashverge.lol/issues)

</div>

---

## 📖 项目简介

**clash订阅（clashverge.lol）** 是一个以原创长文为核心、以卡片式现代博客为视觉呈现、以 31 家机场品牌实测数据为基石的高性能中文网络工具专业媒体。

本项目采用 **Astro 5 + 纯静态生成（SSG）+ Pagefind 中文分词离线检索** 架构，页面在构建阶段完成 100% 直出原生 HTML。通过 Answer-First 结构化布局、深层内链拓扑矩阵与精准的 Schema 标记，专为 **Googlebot、Bingbot、Baiduspider、yisouspider（神马）** 以及 **Perplexity / ChatGPT Search / Google AI Overviews 等生成式大模型（GEO / AEO）** 提供最高评级的信息架构。

---

## ✨ 核心亮点与工程特色

### 1. 🎨 现代 Minimal Editorial Blog 主题系统
- **蓝白经典视觉**：纯白底色 (`#FFFFFF`) 搭配轻度灰底 (`#F7F9FC`) 与专业品牌蓝 (`#2563EB`)，营造权威可信的媒体阅读质感。
- **全套组件化卡片系统**：统一抽象 `ArticleCard`、`BrandCard`、`ReviewCard`、`PricingCard` 与 `TopicCard`，按专题弹性排布，彻底告别模板千篇一律。
- **暗色网络观测台（Network Observatory）**：专为硬核技术极客设计，高对比展示延迟、真实晚高峰带宽、IP 纯度与测速排行榜。

### 2. 📊 31 家独立机场品牌结构化数据库
- **去重深度档案**：收录 31 家去重独立核验品牌，严禁示例占位符。
- **五大实测维度**：详细拆解 BGP 入口与 IEPL/IPLC 物理专线、晚高峰速率、香港/日本/新加坡实测延迟、AI (ChatGPT/Claude/Gemini) 与流媒体 (Netflix/Disney+) 解锁状态。
- **真实价格审计**：明确区分按月标准订阅价与三年付折算价，标注 1x 流量倍率实际计费成本。

### 3. 🛡️ 顶尖站群风控与外链隔离架构
- **`/go/:slug/` 站内安全中转层**：全站所有指向外部服务商的引流链接均收归为站内相对路径，源码中 0 外部直链暴露。
- **无死角防污染**：`robots.txt` 声明 `Disallow: /go/`，Apache 服务器下发 `X-Robots-Tag: noindex, nofollow`，彻底切断站群外部商业拓扑关联。
- **100% 商业标识**：所有商业跳转 100% 严格标注 `rel="nofollow sponsored noopener"`。

### 4. 🔍 Pagefind 离线中文全文搜索
- **零外部 API 依赖**：在构建阶段对 105 个核心正文页面进行中文分词与倒排索引（总计 23,030+ 词条），无运行时后端服务器开销。
- **毫秒级即时检索**：支持拼音、标题、正文、品牌、优惠码多维度模糊匹配。

### 5. 🌐 搜索引擎与社交平台全端优化
- **Google Rich Results `Review` Schema**：品牌档案页原生支持星级评价与 `Service` 实体结构化标记。
- **1200×630 高清 PNG Open Graph 封面**：完美兼容 Twitter/X Card、Telegram、微信朋友圈抓取展示。
- **双 Sitemap 机制**：自动生成 `sitemap-index.xml` 并同步物理映射 `sitemap.xml`，适配各大站长提交规范。

---

## 🏛️ 内容矩阵拓扑导航架构

```
clashverge.lol (正式主域)
├── 🚀 /airport/ (机场推荐 · 7 大二级专题)
│   ├── /airport/recommend/ (核心主推)
│   ├── /airport/ranking/   (测速排行)
│   ├── /airport/value/     (高性价比)
│   ├── /airport/stable/    (晚高峰稳定)
│   ├── /airport/cheap/     (平价低至5元)
│   ├── /airport/free-ladder/ (免费避坑)
│   └── /airport/bypass-guide/ (新手科学上网)
│
├── 🛡️ /vpn/ (VPN 与加速器 · 7 大二级专题)
│   ├── /vpn/recommend/     /vpn/free/     /vpn/mobile/
│   ├── /vpn/software-review/ /vpn/accelerator/ /vpn/comparison/ /vpn/best-picks/
│
├── ⚡ /clash/ (Clash 客户端 · 7 大二级专题)
│   ├── /clash/recommend/   /clash/verge/  /clash/download/
│   ├── /clash/subscription/ /clash/meta/   /clash/tutorial/ /clash/troubleshooting/
│
├── 📡 /resources/ (资源与情报 · 7 大二级专题)
│   ├── /resources/free-nodes/ /resources/runaway-warning/ /resources/faq/
│   ├── /resources/risk-intelligence/ /resources/node-detection/ /resources/subscription-issues/ /resources/beginner-help/
│
├── 🏢 /brands/ (31 家独立品牌档案)
│   ├── /brands/guangsuyun/ /brands/muguang/ /brands/feimao/ ...
│
├── 📚 /articles/, /guides/, /reviews/, /comparisons/ (29 篇深度万字原创长文)
└── ℹ️ /about/ (E-E-A-T 实验室资质与评测方法论)
```

---

## 🛠️ 技术栈与依赖库

| 领域 | 技术方案 | 说明 |
| :--- | :--- | :--- |
| **主框架** | Astro 5.18.2 | 生产级静态站点生成器 (SSG) |
| **语言** | TypeScript 5.7.2 | 全类型安全的结构化数据体系 |
| **样式** | Tailwind CSS 3.4.17 + Typography | 响应式栅格系统与现代中文排版 |
| **内容格式** | Markdown + MDX | 原创长文与内嵌交互组件混合支持 |
| **站内搜索** | Pagefind 1.6.0 (Extended) | 纯静态中文分词搜索引擎 |
| **SEO 基础设施** | @astrojs/sitemap + 自建 SEOHead | 自动化 XML Sitemap 与 JSON-LD 图谱 |
| **图像优化** | Sharp 0.34.5 | 1200×630 社交卡片自动光栅化 |
| **生产服务器** | Apache 2.4+ (.htaccess) | 自动化 301 重定向、缓存控制与安全响应头 |

---

## 📊 技术 SEO 与风控审计成绩

本站已通过深度静态制品安全审计（`node scripts/deep-audit.mjs`）：

| 审计维度 | 评分 | 核心指标 |
| :--- | :---: | :--- |
| **索引与抓取机制** | **25 / 25** | 105 个有效页面全部通过，0 死链、0 软 404、0 空链接 |
| **站群风控与外链** | **23 / 25** | 370 处外部商业外链 100% 标注 `rel="nofollow sponsored noopener"` |
| **内容深度与 GEO** | **19 / 20** | 全站平均字数 **4,791 字/页**，100% 部署 Answer-First 摘要 |
| **E-E-A-T 权威凭证** | **15 / 15** | 路由器硬件、骨干带宽环境全面透明化，独立披露评测方法论 |
| **Schema 结构化数据** | **14 / 15** | 8 大 Schema 语法通过，含 Google 官方 `Review` 富媒体评价标记 |
| **综合健康总分** | **96 / 100** | **EXCELLENT（健康度极高，无算法惩罚硬伤）** |

---

## 🚀 快速上手与本地开发

### 1. 克隆项目与安装依赖
```bash
git clone https://github.com/zlzlzl98698-dev/clashverge.lol.git
cd clashverge.lol
npm install
```

### 2. 启动本地开发服务
本项目已预设专属独立开发端口 **`4399`**（杜绝与其他 Astro 项目争抢默认 4321）：
```bash
npm run dev
# 服务将就绪于 http://localhost:4399/
```

### 3. 生产环境构建与搜索索引
```bash
npm run build
# 执行顺序：Astro SSG 构建 → Pagefind 中文分词建库 → 自动同步 sitemap.xml
```

### 4. 预览生产环境静态构建产物
```bash
npm run preview
# 启动内置守护服务并承载 dist/ 静态目录
```

### 5. 自动化质量与安全核验
```bash
npm run check:links
# 验证全站 138 个物理页面的 SEO 标签、Canonical、Schema 与内链完整性
```

---

## 📂 项目工程目录规范

```text
clashverge.lol/
├── docs/                      # SEO 映射矩阵、GEO 规划与全站审计文档
│   ├── Preventive_SEO_Audit_Report.md
│   └── ...
├── public/                    # 静态公开资源
│   ├── images/                # 头像、Logo、Open Graph 社交封面
│   ├── logos/                 # 31 家机场去重品牌图标资产库
│   ├── .htaccess              # Apache 生产部署安全规则与 301 重定向
│   ├── favicon.png / .svg     # 浏览器全平台标签页矢量及微标
│   └── robots.txt             # 预构建 robots.txt
├── scripts/                   # 自动化运维与质量检测脚本
│   ├── preview-server.mjs     # 稳态保活预览服务
│   ├── deep-audit.mjs         # 深度爬虫与风控审计器
│   └── verify-site.mjs        # 上线前自动化死链与合规校验器
├── src/
│   ├── components/            # UI 组件库 (Header, Footer, Navigation, Cards...)
│   ├── content/               # 原创 Markdown/MDX 文章库
│   │   ├── articles/          # 核心专题指南
│   │   ├── comparisons/       # 横向对比专栏
│   │   ├── guides/            # 客户端实操手册
│   │   └── reviews/           # 品牌单项深度测评
│   ├── data/                  # 结构化数据中心
│   │   ├── brands.ts          # 31 家机场参数、测速数据与计费周期
│   │   ├── clients.ts         # 22 款第三方客户端知识库
│   │   ├── navigation.ts      # 4 大一级栏目与 28 二级专题定义
│   │   └── site.ts            # 全局站点元数据与站长验证配置
│   ├── layouts/               # 页面母版布局 (Base, Article, Brand, Category)
│   └── pages/                 # 路由体系 (包括 /airport/, /vpn/, /go/ 等)
├── astro.config.mjs           # Astro 核心配置文件
├── package.json               # 依赖管理与执行脚本
└── tailwind.config.mjs        # Tailwind CSS 主题变量配置
```

---

## 📜 部署与服务器适配指南

本站构建输出位于 `dist/` 目录，开箱即用支持以下生产环境：

- **Apache HTTP Server**：直接上传 `dist/`，自带的 `.htaccess` 自动激活：
  - HTTP 强制跳转 HTTPS（301）
  - 强制解析主域为非 www（301）
  - 严格尾部斜杠重定向（301）
  - Gzip / Deflate 静态文本无损压缩
  - 静态资源 1 年长效缓存，HTML 零缓存策略
- **Nginx / Caddy / Cloudflare Pages**：只需配置静态目录指向 `dist/` 并支持 `index.html` 路由寻址即可。

---

## ⚖️ 免责声明与版权

- **原创声明**：本站所有文章、评测数据图表、知识库整理均受原创内容权利保护。
- **商业透明**：本站严格执行商业广告与独立评测数据分离原则，所有赞助商及返佣链接均明示披露，绝不因商业利益篡改客观实测数据。
- **开源许可证**：本项目代码遵循 [MIT 许可证](LICENSE)。

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>clash订阅实验室技术团队</strong> · 2026</sub>
</div>
