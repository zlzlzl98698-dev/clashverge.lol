---
title: "Clash Verge 完整使用教程：系统代理与TUN虚拟网卡模式区别、策略组选点与局域网共享"
seoTitle: "2026 Clash 使用教程：规则/全局模式区别、TUN虚拟网卡开启与局域网共享全攻略"
description: "从零掌握 Clash Verge Rev 日常核心操作：讲清规则模式(Rule)与全局模式(Global)的本质差异、系统代理与TUN模式分别在什么场景开启、如何为ChatGPT/Netflix单独固定节点，以及如何把电脑代理共享给手机或Switch游戏机。"
slug: "clash-complete-usage-tutorial-tun-and-rules"
platform: "Windows / macOS / Linux"
clientName: "Clash Verge Rev"
pubDate: "2026-10-31"
updatedDate: "2026-11-18"
category: "clash"
topicSlug: "tutorial"
clusterId: "cluster-clash-tut-1"
tags: ["Clash使用教程", "TUN模式", "系统代理", "规则分流", "局域网共享"]
cover: "/images/covers/clash-client.svg"
coverAlt: "Clash Verge Rev 系统代理、TUN 模式与策略组使用教程"
author: "clash订阅实验室"
readingTime: "15 分钟"
pillar: true
featured: true
searchIntent: "Informational"
primaryKeyword: "Clash 使用教程"
secondaryKeywords: ["Clash系统代理和TUN模式区别", "Clash规则模式和全局模式", "Clash局域网共享Switch", "Clash策略组怎么选"]
relatedBrands: ["guangsuyun", "muguang", "tiziyun", "yifan", "xingdaomeng"]
relatedSlugs: ["clash-verge-subscription-import-and-conversion", "clash-troubleshooting-timeout-dns-and-proxy-errors", "network-accelerator-for-ai-streaming-gaming"]
priceVerifiedDate: "2026-10-19"
testDate: "2026-10-19"
verificationStatus: "Technical_Verified"
excerpt: "直接结论：日常使用 Clash Verge Rev 请记住两条黄金法则：① 代理模式永远保持「规则（Rule）」，切勿长期挂在「全局（Global）」，否则国内网站也会绕道海外并白白消耗机场流量；② 日常浏览器看网页、看视频只需打开「系统代理（System Proxy）」开关，当你需要让终端命令行（Git/Docker）、UWP应用或外服游戏走代理时，再打开「TUN模式（虚拟网卡）」。"
faq:
  - q: "我可以把「系统代理」和「TUN 模式」两个开关同时都打开吗？"
    a: "可以同时打开，不会产生冲突。当两者同时开启时，支持系统代理的浏览器会直接走本地 HTTP/SOCKS5 混合端口（效率最高），而不遵循系统代理的命令行工具或底层 UDP 应用则会由 TUN 虚拟网卡自动兜底接管。"
  - q: "在 Clash Verge 的设置里，TUN 堆栈（Stack）有 `system`、`gvisor` 和 `mixed` 三个选项，选哪个最好？"
    a: "推荐优先选择 `mixed`（混合栈）或 `system`（系统栈）。`system` 栈直接使用操作系统内核原生 TCP 协议栈，吞吐性能最高、CPU 占用最低；`gvisor` 是 Google 开发的用空间网络栈，兼容性好但高带宽下略吃 CPU；而 `mixed` 结合了两者优点——TCP 走高性能 `system` 栈，UDP 走高兼容性的 `gvisor` 栈。"
---

## 一、拒绝盲目开“全局”：三大路由模式（Rule / Global / Direct）详解

在 [Clash Verge Rev](/clash/verge/) 的「代理（Proxies）」界面右上角，你会看到三个并排的模式切换按钮。90% 的新手之所以觉得“开了代理后淘宝打不开、机场流量三天就跑光了”，就是因为选错了模式：

| 路由模式 | 英文标识 | 实际流量走向逻辑 | 正确的使用场景 |
| :--- | :--- | :--- | :--- |
| **规则模式（强烈推荐）** | **`Rule`** | **按域名/IP名单智能分流**：国内网站（百度/淘宝/微信/B站）直接走本地宽带（`DIRECT`）；被屏蔽的海外网站与 AI 工具走机场节点（`PROXY`） | **日常 99% 的时间都应保持在此模式！** 无需来回开关软件 |
| **全局模式（仅应急）** | `Global` | **不分国内外**：把你电脑上的每一笔网络请求（包括国内视频和网盘下载）全部强行塞进选定的某一个海外节点 | **仅占 1% 的排查场景**：当某个极冷门的海外网站没被写进分流规则导致打不开时，临时切到全局用几分钟，用完立刻切回 `Rule` |
| **直连模式** | `Direct` | 所有流量均不经过海外节点，等同于暂时停用代理 | 临时测试本地原生宽带网速时使用 |

---

## 二、核心辨析：「系统代理（System Proxy）」vs「TUN 虚拟网卡模式」

在 Clash Verge Rev 左侧的「设置（Settings）」或主界面快捷卡片里，有两个最重要的总开关：**系统代理** 与 **TUN 模式**。它们到底有什么区别？

### 1. 系统代理（System Proxy）—— 管得住浏览器，管不住命令行
- **工作原理**：开启后，Clash Verge 会修改 Windows 注册表或 macOS 网络偏好设置中的 HTTP/SOCKS5 代理地址（例如指向 `127.0.0.1:7897`）。
- **哪些软件听话？**：Chrome、Edge、Firefox、Safari 浏览器，以及 Telegram、Discord 等遵守系统代理规范的图形软件。
- **哪些软件不听话？**：PowerShell / CMD / Terminal 终端命令行、Git SSH、Docker、部分 UWP 应用以及绝大多数电脑端游戏——它们会直接无视系统代理设置，导致连接超时。

### 2. TUN 模式（虚拟网卡模式）—— 操作系统底层的“全流量接管者”
- **工作原理**：在操作系统网络层（L3）虚拟出一张名为 `Meta` 的网卡，并通过路由表将全系统所有 TCP 和 UDP 数据包透明劫持到 Mihomo 内核中进行规则分流。
- **开启步骤**：
  1. 进入 Clash Verge Rev「设置（Settings）」→ 找到 **「服务模式（Service Mode）」**。
  2. 点击盾牌图标 → 点击 **「安装（Install）」**（弹出管理员授权框时点“是”）。
  3. 当盾牌变成绿色激活状态后，直接打开上方的 **「TUN 模式（Tun Mode）」** 开关即可！

---

## 三、策略组（Policy Groups）高阶玩法：不同应用走不同国家节点

当你导入了 **[光速云](/brands/guangsuyun/)**、**[一翻云](/brands/yifan/)**、**[星岛梦](/brands/xingdaomeng/)** 或 **[唯兔云](/brands/weitu/)** 的订阅后，在「代理（Proxies）」页面会看到许多折叠卡片，这些就叫**策略组**。

学会以下配置，你就能获得最顶级的跨区体验：

1. **主代理组（`Proxy / 节点选择`）**：先点击卡片右上角的「Wi-Fi 测速图标」测试一遍当前延迟，然后手动选中延迟只有 **21–27ms 的香港 IEPL 节点**（或者选择 `自动选择 / URL-Test`，让软件每 5 分钟自动挑延迟最低的节点）。
2. **AI 专属组（`OpenAI / ChatGPT / Claude / AI`）**：不要选“跟随主节点（香港）”，而是展开这个卡片，**单独点选一个美国、日本或新加坡节点**。这样你在刷网页时享受香港 22ms 的极速，打开 ChatGPT 或 Claude 时自动无缝走美/日节点，再也不会报地区限制！
3. **流媒体组（`Netflix / Disney+ / Bahamut`）**：
   - 看动画疯（Bahamut）单独指定 **台湾节点**；
   - 看 Netflix / Disney+ 单独指定 **新加坡或香港原生 IP 节点**。

---

## 四、局域网共享（Allow LAN）：让手机、iPad 和 Switch 游戏机白嫖电脑代理

如果你在电脑上开着 Clash Verge，想让同一个路由器 Wi-Fi 下的 **Nintendo Switch、PS5 或还未装小火箭的 iPhone** 也能直接高速下载游戏或跨区上网，只需 2 步：

### 第一步：在电脑 Clash Verge 中开启局域网连接
1. 进入「设置（Settings）」→ 打开 **「允许局域网连接（Allow LAN）」** 开关。
2. 查看并记下旁边的 **「混合端口（Mixed Port）」** 数字（新版 Clash Verge Rev 默认为 **`7897`**，部分旧配置为 **`7890`**）。
3. 将鼠标悬停在允许局域网连接开关上（或在终端输入 `ipconfig` / `ifconfig`），查看你电脑当前的局域网内网 IP（例如 `192.168.1.105`）。

### 第二步：在手机或 Switch 游戏机上填入代理
- **在 iPhone / 安卓 / Switch 的 Wi-Fi 设置中**：点击当前连接的 Wi-Fi 详情 → 找到最底部的「配置代理 / 代理服务器」→ 改为 **「手动」**：
  - **服务器（主机名）**：填你电脑的局域网 IP（如 `192.168.1.105`）
  - **端口**：填 `7897`（与你电脑 Clash Verge 混合端口保持一致）
- 保存后，你的 Switch 下载速度立刻就能跑满家宽，iPhone 也能无需安装任何软件直接打开海外网站！
*(注：如果不通，请去 Windows「高级安全防火墙 → 入站规则」中确认已允许 `Clash Verge` 和 `verge-mihomo` 通过专用与公用网络。)*
