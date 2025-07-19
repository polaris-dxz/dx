---
title: 环境安装
description: 基础系统环境配置指南
---

# 环境安装

本章节将指导你完成基础系统环境的配置，包括终端、包管理器、字体等必备工具。

## 📋 安装清单

- Xcode 和开发工具
- Node.js 和包管理器
- Homebrew
- Oh My Zsh
- Zimfw 和 Powerlevel10k
- Nerd 字体
- Vim 配置

## 1. 安装 Xcode 和开发工具

### macOS
1. 从 App Store 安装 Xcode
2. 安装完成后，会自动安装 git 和命令行开发工具

### Windows
1. 安装 [Git for Windows](https://git-scm.com/downloads)
2. 安装 [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) (推荐)

### Linux
```bash
# 安装基础开发工具
sudo apt update
sudo apt install build-essential git curl wget
```

## 2. 安装 Node.js 和包管理器

### 安装 Node.js
访问 [Node.js 官网](https://nodejs.org/zh-cn) 下载并安装最新的 LTS 版本。

### 安装 nvm (Node Version Manager)

#### macOS/Linux
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

#### Windows
下载 nvm-windows: https://github.com/coreybutler/nvm-windows/releases

### 安装 nrm (Node Registry Manager)
```bash
npm install -g nrm
```

## 3. 安装 Homebrew

### macOS
```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

### Windows
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

## 4. 安装 Oh My Zsh

### macOS/Linux
```bash
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

### Windows
在 Microsoft Store 安装 [oh-my-posh](https://ohmyposh.dev/)

## 5. 安装 Zimfw

### macOS/Linux
```bash
curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
```

### Windows
```powershell
# 安装 oh-my-posh
winget install JanDeDobbeleer.OhMyPosh -s winget
```

## 6. 安装 Powerlevel10k 主题

### 方法一：直接安装

#### macOS/Linux
```bash
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

#### Windows
```powershell
# 安装 Powerlevel10k 主题
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\powerlevel10k_rainbow.omp.json" | Invoke-Expression
```

### 方法二：通过 Zimfw 安装

#### macOS/Linux
在 `~/.zimrc` 文件中添加：
```bash
zmodule romkatv/powerlevel10k
```

然后执行：
```bash
zimfw install
```

## 7. 安装 Nerd 字体

### 推荐字体
- [Hack Nerd Font](https://www.nerdfonts.com/font-downloads) (搜索 Hack)
- [MesloLGS NF](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

### 终端字体配置
在终端设置中配置字体为 Nerd 字体，确保图标正常显示。

## 8. 配置 Vim

### 安装 vim-web 配置

#### macOS/Linux
```bash
curl -sLf https://gitee.com/jaywcjlove/vim-web/raw/master/install | bash -s -- install
```

#### Windows
```powershell
# 安装 Vim
choco install vim
```

### 必备插件
vim-web 已经预置了以下插件：
- NERDTree (工程文件菜单)
- Emmet.vim (HTML/CSS 自动补全)
- Tagbar (代码导航)
- vim-easymotion (文本搜索)
- ctrlsf.vim (文件搜索)
- VimGitGutter (Git 集成)
- vim-multiple-cursors (多光标编辑)
- vim-signature (书签可视化)
- indexer (自动生成标签)

### 推荐主题
- [vim-colors-solarized](https://github.com/altercation/vim-colors-solarized)
- [molokai](https://github.com/tomasr/molokai)

## 9. 配置 Zsh

### 在 ~/.zshrc 末尾添加

#### macOS/Linux
```bash
echo '(( ! ${+functions[p10k]} )) || p10k finalize' >>! ~/.zshrc
```

#### Windows
```powershell
# 配置 PowerShell 配置文件
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
Add-Content $PROFILE "oh-my-posh init pwsh --config `$env:POSH_THEMES_PATH\powerlevel10k_rainbow.omp.json | Invoke-Expression"
```

### PATH 配置

#### macOS/Linux
在 `~/.zshrc` 中添加：
```bash
export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH
```

#### Windows
在 PowerShell 配置文件中添加：
```powershell
$env:PATH += ";$HOME\bin;$HOME\.local\bin"
```

## ✅ 验证安装

完成以上步骤后，重启终端并验证：

#### macOS/Linux
```bash
# 检查 Node.js
node --version
npm --version
```

```bash
# 检查 Homebrew
brew --version
```

```bash
# 检查 Oh My Zsh
echo $ZSH_VERSION
```

```bash
# 检查 Zimfw
zimfw --version
```

#### Windows
```powershell
# 检查 Node.js
node --version
npm --version
```

```powershell
# 检查 Chocolatey
choco --version
```

```powershell
# 检查 oh-my-posh
oh-my-posh --version
```

## 🎉 下一步

环境安装完成后，继续安装 [开发工具](./development-tools.md) 吧！

---

**遇到问题？** 查看 [问题解决](./troubleshooting.md) 页面。 