---
title: 环境配置
description: 新电脑开发环境快速配置指南
lastUpdated: true
---

# 环境配置

欢迎使用 DX 开发环境配置指南！本页面将为你提供最简化的环境配置流程，让你快速搭建开发环境。

## 🚀 5 分钟快速配置

### 第一步：基础环境 (2 分钟)

#### macOS 用户
```bash
# 1. 安装 Homebrew
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

```bash
# 2. 安装 Dotfiles（包含 Zsh 配置）
curl -fsSL https://dx.xizhi.dev/install.sh | bash
```

```bash
# 3. 安装 Node.js
brew install fnm
fnm install --lts
fnm default lts-latest
```

```bash
# 4. 配置 Shell 环境
source ~/.zshrc
```

### 第二步：开发工具 (3 分钟)

#### 安装常用工具
```bash
brew install neovim lazygit yazi fzf zoxide ripgrep fd bat eza starship
```

#### 安装开发工具
```bash
# Python (uv)
brew install uv

# Go
brew install go

# Docker
brew install --cask docker
```

### 配置完成

```bash
# 验证安装
nvim --version
starship --version
docker --version
```

## 📚 详细配置

如需详细配置，请参阅：

- [开发工具](./development-tools.md)
- [Shell 配置](./shell-editor-setup.md)
- [Git 配置](./git.md)
- [Node.js 环境](./nodejs-environment.md)
- [Python 环境](./python-environment.md)

## 🎯 下一步

配置完成后，继续配置你的开发环境：

1. 配置 [SSH 密钥](./ssh-setup.md)
2. 配置 [Git](./git.md)
3. 安装 [VS Code / Cursor](./development-tools.md#2-代码编辑器)
4. 安装 [Docker](./development-tools.md#3-容器化工具)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。