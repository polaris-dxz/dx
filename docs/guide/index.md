---
title: 开发环境配置指南
description: 新电脑开发环境完整配置指南
lastUpdated: true
---

# 开发环境配置指南

欢迎来到 DX 开发环境配置指南！本页是**总览**：按「刚拿到新电脑 → 能写代码协作」的顺序组织，左侧边栏与下列步骤一致。

## 🚀 快速开始（推荐顺序）

1. **[环境安装](./environment-setup.md)** — 先看入口，再按系统打开 [macOS](./environment-setup-macos.md) / [Linux](./environment-setup-linux.md) / [Windows](./environment-setup-windows.md) 分册  
2. **[开发工具](./development-tools.md)** — 终端、编辑器、Docker 等常用软件  
3. **[Shell 和编辑器](./shell-editor-setup.md)** — 终端增强与编辑器配置  
4. **[环境变量](./environment-variables.md)** — `PATH`、Shell 配置与项目 `.env`  
5. **[浏览器插件](./browser-extensions.md)** — 代理、翻译、开发者工具等  
6. **[Git 配置](./git.md)** — 全局设置与远程凭证  
7. **[SSH 配置](./ssh-setup.md)** — 密钥与托管平台（如 GitHub）连接  
8. **编程语言** — 按需阅读 [Node.js](./nodejs-environment.md)、[Python](./python-environment.md)、[Go](./go-environment.md) 等  
9. **[问题排查](/troubleshooting)** — 卡住时查阅  

## 📋 按阶段对照

| 阶段 | 说明 |
|------|------|
| 系统与终端 | 命令行工具、包管理器、Shell、字体（见环境安装各分册） |
| 开发工具与效率 | 开发工具、Shell/编辑器、[环境变量](./environment-variables.md) |
| 浏览器 | 插件与上网环境 |
| 代码与协作 | Git、SSH |
| 语言与运行时 | 各语言运行时与工具链 |

## 📋 配置清单（摘要）

### 系统与终端
- Xcode CLT / 系统包管理器、Homebrew 等
- Oh My Zsh、Zimfw、Nerd 字体

### 开发工具与效率
- Warp、Ghostty、[cmux](https://github.com/manaflow-ai/cmux)（macOS，基于 Ghostty）、VS Code / Cursor、Docker、Snipaste、Obsidian 等
- [环境变量](./environment-variables.md)（`PATH`、`.env`）

### 浏览器
- Proxy SwitchyOmega、书签同步、翻译、开发者工具等

### 编程环境（按需）
- [Python 环境](./python-environment.md)、[Node.js](./nodejs-environment.md)、[Go](./go-environment.md)、[Java](./java-environment.md)、[其他语言](./other-languages.md)

### 代码与协作
- [Git 配置](./git.md)、[SSH 配置](./ssh-setup.md)

## 🎯 适用场景

本指南适用于以下场景：
- 新购买的 Mac、Windows 或 Linux 电脑
- 重装系统后的环境配置
- 团队新成员入职环境配置
- 个人开发环境标准化

## 📝 注意事项

1. **备份重要数据**：配置前请备份重要文件  
2. **网络环境**：部分工具需要稳定的网络连接  
3. **权限管理**：某些配置需要管理员权限  
4. **版本兼容**：注意工具版本兼容性  

## 🤝 贡献

如果你发现指南中的错误或有改进建议，欢迎提交 Issue 或 Pull Request。

---

**开始你的配置之旅吧！** → [环境安装](./environment-setup.md)
