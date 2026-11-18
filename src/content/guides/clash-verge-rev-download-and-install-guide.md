---
title: "2026 Clash Verge Rev 官方下载与安装教程：Windows x64、macOS M芯片(aarch64)及Linux安装包详解"
seoTitle: "2026 Clash Verge 下载指南：Windows/macOS(M1/M2/M3/Intel)/Linux官方安装包选型"
description: "手把手教你从官方GitHub安全下载安装 Clash Verge Rev。详解 Windows x64-setup.exe 与 WebView2 版本区别、苹果 Mac Apple Silicon (aarch64.dmg) 与 Intel (x64.dmg) 区分、macOS“应用已损坏”终端修复命令及防钓鱼网站指南。"
slug: "clash-verge-rev-download-and-install-guide"
platform: "Windows / macOS / Linux"
clientName: "Clash Verge Rev"
pubDate: "2026-10-29"
updatedDate: "2026-11-18"
category: "clash"
topicSlug: "download"
clusterId: "cluster-clash-dl-1"
tags: ["Clash Verge下载", "Clash下载", "macOS安装Clash", "aarch64", "安装包选型"]
cover: "/images/covers/clash-client.svg"
coverAlt: "2026 Clash Verge Rev 官方安装包架构选型与安装指南"
author: "clash订阅实验室"
readingTime: "13 分钟"
pillar: true
featured: true
searchIntent: "Transactional"
primaryKeyword: "Clash Verge 下载"
secondaryKeywords: ["Clash Verge Rev官网下载", "Clash Mac提示已损坏解决", "aarch64和x64选哪个", "Linux安装Clash"]
relatedBrands: ["guangsuyun", "tiziyun", "feimao", "yifan"]
relatedSlugs: ["2026-clash-clients-complete-selection-guide", "clash-verge-subscription-import-and-conversion", "clash-complete-usage-tutorial-tun-and-rules"]
priceVerifiedDate: "2026-10-19"
testDate: "2026-10-19"
verificationStatus: "Technical_Verified"
excerpt: "直接结论：下载 Clash Verge Rev 请务必认准 GitHub 官方仓库 Releases 页面（clash-verge-rev/clash-verge-rev），切勿轻信搜索引擎广告位的竞价山寨站。选择安装包时：Windows 10/11 普通电脑下载 `Clash.Verge_x.x.x_x64-setup.exe`；苹果 M1/M2/M3/M4 芯片 Mac 下载 `aarch64.dmg`（Intel 老款 Mac 下载 `x64.dmg`）；Ubuntu/Debian Linux 下载 `amd64.deb`。"
faq:
  - q: "苹果 Mac 电脑安装 Clash Verge Rev 打开时弹窗提示“Clash Verge 已损坏，无法打开。你应该将它移到废纸篓”怎么办？"
    a: "这并不是软件真的坏了，而是因为开源软件未向苹果缴纳每年 99 美元的 Apple Developer 商业公证签名费，触发了 macOS Gatekeeper 隔离机制。只需把 Clash Verge 拖进「应用程序（Applications）」文件夹后，打开 Mac 的「终端（Terminal）」，粘贴运行一行命令：`sudo xattr -r -d com.apple.quarantine /Applications/Clash\\ Verge.app` 并输入开机密码回车，即可正常打开。"
  - q: "我还没有翻墙工具，打不开 GitHub 下载 Clash 客户端怎么办？"
    a: "你有两种最简单的解决方式：① 选择提供免翻墙国内引导页或自带官方专属客户端的品牌（如光速云、梯子云、飞猫云、Firefly），登录机场官网后台通常直接内置了客户端高速镜像下载包；② 在手机或电脑上使用 GitHub 文件加速镜像获取官方安装包后校验 SHA256 哈希值。"
---

## 一、安全警示：如何避开搜索引擎里的“山寨钓鱼 Clash 官网”？

当你在百度、Bing 甚至 Google 搜索“Clash 下载”或“Clash Verge 中文官网”时，排在前几位的往往是域名五花八门的第三方个人站。其中部分不良站点会将安装包掉包为捆绑了推广插件甚至剪贴板木马的篡改版。

**安全下载的两条铁律**：
1. **认准唯一开源项目地址**：Clash Verge Rev 的官方开源仓库位于 GitHub 的 `clash-verge-rev/clash-verge-rev`。
2. **善用正规机场后台内置下载源**：如果你已经注册了 **[光速云](/brands/guangsuyun/)** 或 **[梯子云](/brands/tiziyun/)**，登录其用户后台的「使用教程 / 客户端下载」栏目，官方都会直接提供经过验证的 Windows / macOS / Android / iOS 客户端安装包或直链，即便在未开启代理的状态下也能直接高速下载。

---

## 二、一张表选对安装包：Windows / macOS / Linux 文件名后缀对照

点进 GitHub Releases 下载区，往往会看到十几个不同后缀的安装文件。请严格对照下表选择适合你电脑硬件的文件：

| 操作系统与硬件架构 | 推荐下载的文件名后缀格式 | 不推荐/特殊情况说明 |
| :--- | :--- | :--- |
| **Windows 10 / 11 (64位主流电脑)** | **`_x64-setup.exe`** | 标准 NSIS 安装向导，体积最小（约12MB），自动调用系统自带 WebView2 |
| **Windows 7 / 精简版系统 (缺WebView2)** | `_x64_fixed_webview2-setup.exe` | 仅当打开普通版白屏报错“缺少 WebView2 Runtime”时才下载此内置运行时的大体积包 |
| **Windows on ARM (Surface Pro X等)** | `_arm64-setup.exe` | 仅限高通骁龙 ARM 架构 Windows 笔记本，普通 Intel/AMD 电脑切勿下载 |
| **macOS (Apple Silicon M1/M2/M3/M4芯片)** | **`_aarch64.dmg`** | 2020年底以后的新款 MacBook Air/Pro、Mac mini、iMac 必选此架构，原生性能最佳 |
| **macOS (老款 Intel 处理器)** | **`_x64.dmg`** | 2019年及以前的 Intel 芯片苹果电脑选择此项 |
| **Linux (Ubuntu / Debian / Mint)** | **`_amd64.deb`** | 使用 `sudo dpkg -i xxx.deb` 或 `sudo apt install ./xxx.deb` 安装 |
| **Linux (Fedora / RHEL / CentOS)** | `_x86_64.rpm` | 使用 `sudo dnf install ./xxx.rpm` 安装 |
| **Linux (Arch / 通用免安装格式)** | `_amd64.AppImage` | 赋予执行权限 `chmod +x xxx.AppImage` 后可直接运行 |

---

## 三、Windows 与 macOS 安装后的必做初始化设置

### 1. Windows 端：安装注意事项与防火墙放行
1. 双击运行 `_x64-setup.exe` 时，如果 Windows Defender SmartScreen 弹出蓝色提示框“Windows 已保护你的电脑”，点击左上角的 **「更多信息（More info）」** → 再点击底部的 **「仍要运行（Run anyway）」**。
2. **重要避坑**：如果电脑里装有 360 安全卫士、腾讯电脑管家或火绒，在安装「服务模式（Service Mode）」时请务必点击 **「允许本次操作」**，否则虚拟网卡服务无法注册。
3. 首次打开软件弹出 Windows 防火墙提示时，请同时勾选 **「专用网络」与「公用网络」** 并点击允许访问。

### 2. macOS 端：一行命令解决“应用已损坏，无法打开”
将下载好的 `.dmg` 挂载并把 `Clash Verge.app` 拖入 `Applications（应用程序）` 文件夹后，如果双击弹出 **“Clash Verge 已损坏，无法打开”** 或 **“无法验证开发者”**，请按以下步骤 10 秒修复：

1. 打开 Mac 自带的 **「终端（Terminal）」** 应用（可通过 `Command + 空格` 聚焦搜索“终端”打开）。
2. 复制以下完整命令粘贴到终端窗口中并按回车：

```bash
sudo xattr -r -d com.apple.quarantine "/Applications/Clash Verge.app"
```

3. 终端会提示 `Password:`（注意：**输入 Mac 开机密码时屏幕上不会显示任何星号或字符，这是 Linux/macOS 的安全隐藏机制，直接盲打输入完密码按回车即可**）。
4. 再次去启动台点击 Clash Verge，即可顺利进入主界面！接下来请继续阅读《[Clash Verge 订阅导入与转换教程](/guides/clash-verge-subscription-import-and-conversion/)》完成节点配置。
