---
title: macOS 环境安装
description: macOS 上 Xcode CLT、Homebrew、终端与常用工具
lastUpdated: true
---

# macOS 环境安装

本页仅针对 **macOS**。其他系统请见 [Linux 环境安装](./environment-setup-linux.md)、[Windows 环境安装](./environment-setup-windows.md)，或返回 [环境安装总览](./environment-setup.md)。

## 推荐顺序

在新 Mac 上建议按下面顺序做，少踩「缺编译器 / 缺 git」之类的坑：

1. **先装 Xcode Command Line Tools**：终端执行 `xcode-select --install`，按弹窗完成安装（详见下文「1. 安装 Xcode 和开发工具」）。Homebrew、从源码编译的包、以及许多安装脚本都依赖其中的 `git`、`clang`、`make` 等。
2. **再装 Homebrew**（详见「2. 安装 Homebrew」），之后可用 `brew install` 装大量命令行工具和图形应用。
3. **再按需安装** Node.js、字体、编辑器等（本文后续章节）；Node 见「3. 安装 Node.js 和包管理器」，也可用 `brew install fnm` 等方式安装。

若你直接跑 Homebrew 安装脚本，有时也会提示安装 Command Line Tools，但**先装好 CLT 再装 Homebrew**，流程通常更顺、更少中断。

## 📋 安装清单

- Xcode Command Line Tools（或完整 Xcode）
- Homebrew
- Node.js（fnm）
- Zsh（通过 chezmoi 管理）
- Nerd 字体
- Neovim

## 1. 安装 Xcode 和开发工具

做一般开发时，**安装 Xcode Command Line Tools（命令行工具）即可**，其中包含 `git`、`clang`、`make` 等，**不必**仅为使用 Git 而安装完整 Xcode。

- **仅命令行工具（推荐大多数场景）**：在终端执行 `xcode-select --install`，按弹窗提示安装。若尚未安装过，首次在终端运行 `git` 时系统也可能提示安装「命令行开发者工具」。
- **完整 Xcode（仅当你需要 Xcode IDE / iOS 等开发）**：从 App Store 安装 Xcode；安装后同样具备上述命令行工具，通常无需再单独安装 Command Line Tools。

## 2. 安装 Homebrew

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

## 3. 安装 Node.js

### fnm (Node Version Manager)

```bash
brew install fnm
```

### 使用

```bash
# 安装 LTS 版本
fnm install lts-latest
fnm default lts-latest

# 激活
source ~/.zshrc
```

## 4. 安装 Zsh

macOS 默认已安装 Zsh。

### 配置

通过 [Dotfiles](./development-tools.md#dotfiles) 管理配置：

```bash
curl -fsSL https://dx.xizhi.dev/install.sh | bash
```

## 5. 安装开发工具

```bash
brew install neovim lazygit yazi fzf zoxide ripgrep fd bat eza starship
```

## ✅ 验证安装

```bash
# 检查 Zsh
zsh --version

# 检查 Neovim
nvim --version

# 检查 Starship
starship --version
```

## 🎉 下一步

- [Shell 配置](./shell-editor-setup.md)
- [Git 配置](./git.md)
- [SSH 配置](./ssh-setup.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。