---
title: Windows 环境安装
description: Windows 上 Git、Chocolatey、终端与 PowerShell 美化
lastUpdated: true
---

# Windows 环境安装

本页仅针对 **Windows**。其他系统请见 [macOS 环境安装](./environment-setup-macos.md)、[Linux 环境安装](./environment-setup-linux.md)，或返回 [环境安装总览](./environment-setup.md)。

## 📋 安装清单

- Git 与 Windows Terminal
- Node.js 和包管理器（nvm-windows 等）
- Chocolatey 包管理器
- Oh My Posh（终端主题）
- Powerlevel10k 风格主题（oh-my-posh）
- Nerd 字体
- Vim

## 1. 安装基础开发工具

1. 安装 [Git for Windows](https://git-scm.com/downloads)
2. 安装 [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) (推荐)

## 2. 安装 Node.js 和包管理器

### 安装 Node.js
访问 [Node.js 官网](https://nodejs.org/zh-cn) 下载并安装最新的 LTS 版本。

### 安装 nvm (Node Version Manager)

下载 nvm-windows: https://github.com/coreybutler/nvm-windows/releases

### 安装 nrm (Node Registry Manager)
在 PowerShell 或 cmd 中（装好 Node 后）：
```bash
npm install -g nrm
```

## 3. 安装 Chocolatey

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## 4. 安装 Oh My Posh（替代 Oh My Zsh）

在 Microsoft Store 安装 [oh-my-posh](https://ohmyposh.dev/)

## 5. 安装 Powerlevel10k 风格主题

```powershell
# 安装 Powerlevel10k 主题
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\powerlevel10k_rainbow.omp.json" | Invoke-Expression
```

## 6. 安装 Nerd 字体

### 推荐字体
- [Hack Nerd Font](https://www.nerdfonts.com/font-downloads) (搜索 Hack)
- [MesloLGS NF](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

### 终端字体配置
在 **Windows Terminal** 设置中为对应 Profile 指定 Nerd 字体，确保图标正常显示。

## 7. 配置 Vim

### 安装 Vim

```powershell
choco install vim
```

### 必备插件与主题
与 Unix 系类似，可自行同步配置；也可使用 [vim-web](https://github.com/jaywcjlove/vim-web) 等方案在 Windows 上按需适配。

### 推荐主题
- [vim-colors-solarized](https://github.com/altercation/vim-colors-solarized)
- [molokai](https://github.com/tomasr/molokai)

## 8. 配置 PowerShell

### 配置文件

```powershell
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
Add-Content $PROFILE "oh-my-posh init pwsh --config `$env:POSH_THEMES_PATH\powerlevel10k_rainbow.omp.json | Invoke-Expression"
```

### PATH 配置

在 PowerShell 配置文件中添加：
```powershell
$env:PATH += ";$HOME\bin;$HOME\.local\bin"
```

## ✅ 验证安装

完成以上步骤后，重启终端并验证：

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

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。
