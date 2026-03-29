---
title: 开发工具
description: 必备开发软件安装指南
---

# 开发工具

本章节将推荐并指导你安装必备的开发软件，提升开发效率。

## 📋 工具清单

- 终端工具
- 代码编辑器
- 容器化工具
- 截图工具
- 笔记工具
- AI 终端编码助手（CC-Switch、Claude Code、OpenCode、Codex）
- 其他工具

## 1. 终端工具

### Warp (推荐)
- **下载地址**: https://www.warp.dev/
- **特点**: 现代化的终端，支持 AI 辅助、团队协作
- **适用**: macOS, Windows, Linux

### Windows Terminal (Windows)
- **下载地址**: https://apps.microsoft.com/detail/9n0dx20hk701
- **特点**: Windows 官方现代化终端
- **适用**: Windows

### Ghostty
- **官网**: https://ghostty.org/
- **特点**: GPU 加速、原生 UI、跨平台终端模拟器；配置以文本为主，适合追求性能与可脚本化的用户
- **适用**: macOS、Linux（Windows 支持以官网说明为准）

### cmux（macOS）
- **项目地址**: [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux)
- **特点**: 基于 **Ghostty** 渲染的 **macOS 原生**终端（Swift / AppKit），侧栏竖向标签、分屏、面向 **AI 编程助手** 的通知与状态展示；可读取已有 `~/.config/ghostty/config`（主题、字体、配色）。适合并行跑多路 Claude Code / Codex 等会话、需要清晰区分「哪个窗口在等你」的场景。详见仓库 [README](https://github.com/manaflow-ai/cmux#readme) 与 [文档](https://github.com/manaflow-ai/cmux/tree/main/docs)。
- **安装（Homebrew）**:
```bash
brew tap manaflow-ai/cmux
brew install --cask cmux
```
  更新：`brew upgrade --cask cmux`。亦可从官网下载 DMG 安装（支持 Sparkle 自动更新，以官方说明为准）。
- **适用**: **仅 macOS**（与上游 Ghostty 生态配套；非 macOS 请用 Warp、Windows Terminal、Ghostty 等）

## 2. 代码编辑器

### Visual Studio Code
- **下载地址**: https://code.visualstudio.com/
- **特点**: 轻量级、插件丰富、免费开源
- **适用**: 全平台

### Cursor
- **下载地址**: https://www.cursor.com/
- **特点**: 基于 VS Code，集成 AI 功能
- **适用**: 全平台

### 配置导入
Cursor 可以直接导入 VS Code 的配置和插件。

## 3. 容器化工具

### Docker
- **下载地址**: https://www.docker.com
- **特点**: 容器化平台，便于环境隔离和部署
- **适用**: 全平台

### Docker Desktop
- **功能**: 图形化 Docker 管理界面
- **安装**: 随 Docker 一起安装

### OrbStack
-  **下载地址**: https://orbstack.dev

## 4. 截图工具

### Snipaste
- **下载地址**: https://zh.snipaste.com/
- **特点**: 截图、贴图、标注功能强大
- **适用**: Windows, macOS

### 替代方案
- **macOS**: 系统自带截图工具
- **Windows**: Snipping Tool 或 Snip & Sketch

## 5. 笔记工具

### Obsidian
- **下载地址**: https://obsidian.md/
- **特点**: 本地优先的笔记工具，支持 Markdown
- **适用**: 全平台

### Git 仓库配置

#### macOS/Linux
```bash
# 克隆工作笔记仓库
git clone https://github.com/polaris-dxz/work-notes.git
```

#### Windows
```powershell
# 克隆工作笔记仓库
git clone https://github.com/polaris-dxz/work-notes.git
```

## 6. 其他工具

下面多为**按需选装**的效率与协作类软件。每一项都简单说明**为什么要装**，方便你对照自己的工作流决定是否需要。

### Logi Options
- **为什么装**：给罗技鼠标键盘改侧键、手势、多设备切换和 DPI，把常用操作绑在硬件上，减少在系统设置里来回找。
- **下载地址**: https://www.logitech.com/zh-cn/software/options.html
- **功能**: 罗技鼠标键盘配置工具
- **适用**: macOS, Windows

### 坚果云
- **为什么装**：把工作目录、笔记或素材在多台电脑之间自动同步，避免 U 盘拷贝或忘记带文件。
- **下载地址**: https://www.jianguoyun.com/
- **功能**: 文件同步和备份
- **适用**: 全平台

### 向日葵
- **为什么装**：需要临时远程登录另一台电脑（家里主机、公司内网等）排查问题、拷文件或演示时，比纯聊天传文件更直接。
- **下载地址**: https://sunlogin.oray.com/
- **功能**: 远程桌面控制
- **适用**: 全平台

### 微信
- **为什么装**：团队与客户沟通在大陆场景里很常见；装桌面版便于工作时收消息、传文件，和手机端配合使用。
- **下载地址**: https://weixin.qq.com/
- **功能**: 即时通讯
- **适用**: 全平台

### 微信输入法
- **为什么装**：除常规输入外，支持在 **Mac / Windows 与手机等之间同步剪贴板**，跨设备粘贴验证码、链接、短句时不用来回发消息或手打（需在输入法里登录同一账号并开启跨设备剪贴板相关能力）。
- **功能**: 智能输入法
- **适用**: macOS, Windows

### Keka
- **为什么装**：在 macOS 上解压带密码的压缩包、7z 等格式时往往比系统自带工具更省事，压缩选项也更全。
- **下载地址**: https://www.keka.io/zh-cn/
- **功能**: 文件压缩解压工具
- **适用**: macOS

### Xmind
- **为什么装**：把需求拆解、项目结构、读书笔记整理成思维导图，比纯文档更直观，也方便导出分享。
- **下载地址**: https://xmind.cn/
- **功能**: 思维导图工具
- **适用**: 全平台

### ChatGPT Atlas（OpenAI）
- **为什么装**：基于 Chromium 的浏览器，把 **ChatGPT** 嵌进浏览流程（侧栏问答、网页相关提问、Agent 模式等），适合希望「上网 + 问 AI」在同一条链路里完成的人。
- **下载地址**: https://openai.com/atlas/
- **适用**: 以 [官网说明](https://openai.com/atlas/) 为准（例如当前是否提供 macOS / Windows 等）。

### Comet（Perplexity）
- **为什么装**：内置 **Perplexity** 的 AI 浏览器，适合边浏览边做摘要、追问和跨标签页的研究类任务，与 Atlas 类似但生态与账号体系不同，可按习惯二选一或都试用再定。
- **下载地址**: https://comet.perplexity.ai/
- **适用**: 以 [官网说明](https://comet.perplexity.ai/) 为准。

### Ollama
- **为什么装**：在本地运行开源大模型，适合想离线试用、不想把代码发到云端、或做私有化实验的场景；与云端 API 互补而非替代。

#### macOS
```bash
brew install ollama
```

#### Windows
```powershell
winget install Ollama.Ollama
```

#### Linux
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

## 7. 工作环境工具

### Whistle
- **安装**: https://wproxy.org/whistle/install.html
- **功能**: 网络代理调试工具
- **配置**: 需要配置 HTTPS 证书

### Pyenv

#### macOS/Linux
```bash
curl https://pyenv.run | bash
```

#### Windows
```powershell
# 使用 Chocolatey 安装
choco install pyenv-win
```

## 8. AI 终端编码助手

以下工具在终端中运行，用于 AI 辅助编程。按需安装即可。

### CC-Switch（cc-switch）

[CC-Switch CLI](https://github.com/SaladDay/cc-switch-cli) 是命令行版「配置切换」工具，可统一管理 **Claude Code**、**Codex**、**Gemini CLI**、**OpenCode**、**OpenClaw** 等的多套 Provider、MCP、提示词与技能（与桌面版 [CC-Switch](https://github.com/farion1231/cc-switch) 同源能力）。口语里有时也写作「CC Switch」。

#### macOS / Linux（推荐：一键脚本）

```bash
curl -fsSL https://github.com/SaladDay/cc-switch-cli/releases/latest/download/install.sh | bash
```

默认安装到 `~/.local/bin`，可通过环境变量 `CC_SWITCH_INSTALL_DIR` 指定目录。安装完成后确保该目录在 `PATH` 中。

#### Windows

从 [Releases](https://github.com/SaladDay/cc-switch-cli/releases/latest) 下载 `cc-switch-cli-windows-x64.zip`，解压后将 `cc-switch.exe` 放到已在 `PATH` 中的目录（或自行加入 `PATH`）。

#### 使用

```bash
cc-switch
```

交互式菜单中可切换 Provider、同步 MCP 等；也可用 `cc-switch --help` 查看子命令。更多说明见上游 [README](https://github.com/SaladDay/cc-switch-cli/blob/main/README_ZH.md)。

### Claude Code

Anthropic 的终端 AI 编程助手，官方文档：[Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)。

#### 原生安装脚本（推荐，无需 Node）

**macOS / Linux：**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows（PowerShell）：**

```powershell
irm https://claude.ai/install.ps1 | iex
```

#### 使用包管理器（可选）

- **macOS（Homebrew）：** `brew install --cask claude-code`
- **Windows（WinGet）：** `winget install Anthropic.ClaudeCode`

#### npm（需 Node.js 18+）

```bash
npm install -g @anthropic-ai/claude-code
```

安装后可在终端执行 `claude`，首次运行按提示登录。

### OpenCode

开源终端 AI 编程代理，官网与文档：[OpenCode](https://opencode.ai/docs/)。

#### 一键脚本

```bash
curl -fsSL https://opencode.ai/install | bash
```

#### 包管理器（任选其一）

```bash
# npm
npm i -g opencode-ai@latest
```

```bash
# macOS Homebrew（维护者 tap，通常较新）
brew install anomalyco/tap/opencode
```

**Windows** 还可使用 [Scoop](https://scoop.sh/)：`scoop install opencode`，或 Chocolatey：`choco install opencode`（以各源实际包名为准）。

安装后在终端执行 `opencode`（或按官方文档当前命令）。

### Codex（OpenAI）

OpenAI 终端编程代理，官方说明：[Codex CLI](https://developers.openai.com/codex/cli)。

#### npm（官方推荐）

```bash
npm i -g @openai/codex
```

升级：

```bash
npm i -g @openai/codex@latest
```

安装后在终端执行 `codex`，首次运行按提示使用 ChatGPT 账号或 API Key 登录。Codex 需订阅或权益中包含 Codex，详见 [定价说明](https://developers.openai.com/codex/pricing)。**Windows** 官方建议优先在 **WSL** 中使用，见 [Windows 指南](https://developers.openai.com/codex/windows)。其他安装方式以 [官方 CLI 文档](https://developers.openai.com/codex/cli) 为准。

## 📦 批量安装脚本

### macOS (使用 Homebrew)
```bash
# 安装常用工具
brew install --cask warp
```

```bash
brew install --cask visual-studio-code
```

```bash
brew install --cask cursor
```

```bash
brew install --cask docker
```

```bash
brew install --cask snipaste
```

```bash
brew install --cask obsidian
```

```bash
brew install --cask logi-options-plus
```

```bash
brew install --cask nutstore
```

```bash
brew install --cask sunloginclient
```

```bash
brew install --cask wechat
```

```bash
brew install --cask keka
```

```bash
brew install --cask xmind
```

```bash
brew install ollama
```

### Windows (使用 Chocolatey)
```powershell
# 安装常用工具
choco install warp
```

```powershell
choco install vscode
```

```powershell
choco install cursor
```

```powershell
choco install docker-desktop
```

```powershell
choco install snipaste
```

```powershell
choco install obsidian
```

```powershell
choco install nutstore
```

```powershell
choco install sunloginclient
```

```powershell
choco install wechat
```

```powershell
choco install xmind
```

### Linux (使用包管理器)
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install snapd
```

```bash
# 安装 VS Code
sudo snap install code --classic
```

```bash
# 安装 Docker
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

```bash
# 安装 Obsidian
sudo snap install obsidian --classic
```

## ✅ 验证安装

完成安装后，验证以下工具是否正常工作：

#### macOS/Linux
```bash
# 检查 Docker
docker --version
```

```bash
# 检查 VS Code
code --version
```

```bash
# 检查 Cursor
cursor --version
```

#### Windows
```powershell
# 检查 Docker
docker --version
```

```powershell
# 检查 VS Code
code --version
```

```powershell
# 检查 Cursor
cursor --version
```

## 🎉 下一步

开发工具安装完成后，继续配置 [浏览器插件](./browser-extensions.md) 吧！

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。
