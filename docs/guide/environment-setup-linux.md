---
title: Linux 环境安装
description: Linux 上基础开发工具、包管理与终端环境
lastUpdated: true
---

# Linux 环境安装

本页仅针对 **Linux**（以常见 Debian/Ubuntu 系为例，其它发行版请用对应包管理器）。其他系统请见 [macOS 环境安装](./environment-setup-macos.md)、[Windows 环境安装](./environment-setup-windows.md)，或返回 [环境安装总览](./environment-setup.md)。

## 📋 安装清单

- 基础开发工具（build-essential、git 等）
- Node.js（fnm）
- 包管理与扩展源（按需）
- Zsh（通过 chezmoi 管理）
- Nerd 字体
- Neovim

## 1. 安装基础开发工具

```bash
sudo apt update
sudo apt install build-essential git curl wget
```

## 2. 安装 Node.js

### fnm (Node Version Manager)

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

### 使用

```bash
# 安装 LTS 版本
fnm install lts-latest
fnm default lts-latest

# 激活
source ~/.zshrc
```

## 3. 包管理与扩展源（按需）

```bash
sudo apt update
sudo apt install software-properties-common
```

## 4. 安装 Zsh

```bash
sudo apt install zsh
chsh -s $(which zsh)
```

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