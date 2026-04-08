---
title: Windows 环境安装
description: Windows 上 Git、Chocolatey、终端与 PowerShell 美化
lastUpdated: true
---

# Windows 环境安装

本页仅针对 **Windows**。其他系统请见 [macOS 环境安装](./environment-setup-macos.md)、[Linux 环境安装](./environment-setup-linux.md)，或返回 [环境安装总览](./environment-setup.md)。

---

## 🚦 推荐安装顺序

> **为什么要按顺序？** 后面有些步骤依赖前面的工具（比如 Chocolatey 安装软件，Oh My Posh 依赖 Nerd 字体显示图标）。按顺序来可以避免「装完了发现要重装前面」的情况。

| 顺序 | 步骤 | 依赖关系 |
|:---:|------|---------|
| 1 | 前置检查（系统 / PowerShell 版本）| 无 |
| 2 | 安装 Git + Windows Terminal | 无 |
| 3 | 安装 Node.js + nvm-windows | Git |
| 4 | 安装 Chocolatey | Git + 管理员 PowerShell |
| 5 | 安装 Oh My Posh + Nerd 字体 | Chocolatey / 手动安装 |
| 6 | 配置主题 & PowerShell 配置文件 | Oh My Posh + Nerd 字体 |
| 7 | 验证全部工具 | 全部 |
| 8 | WSL（可选，推荐装）| 步骤 1-2 |
| 9 | 常见问题排查（如果有问题）| - |

---

## 🔍 前置检查

### 检查 Windows 版本

打开 PowerShell（**不要用 CMD**），运行：

```powershell
winver
```

**最低要求**：Windows 10 **1809+**，建议 Windows 11。

> 💡 Windows Terminal 最早从这个版本开始内置，之前版本需要手动安装。

### 检查 PowerShell 版本

```powershell
$PSVersionTable.PSVersion
```

最低 **5.1**（Windows 10 自带），建议升级到 **7.x**：

```powershell
# 从 Microsoft Store 安装最新版 PowerShell
# 或用 Chocolatey：choco install powershell-core
```

---

## 📋 安装清单

- [ ] Git 与 Windows Terminal
- [ ] Node.js 和包管理器（nvm-windows）
- [ ] Chocolatey 包管理器
- [ ] Oh My Posh + Nerd 字体
- [ ] WSL（可选但推荐）

---

## 1. 安装基础开发工具

### 1.1 安装 Git for Windows

下载 [Git for Windows](https://git-scm.com/downloads)，安装时建议勾选：

- ✅ **Add to PATH**
- ✅ **Use Windows' default console window**
- ✅ **Checkout as-is, commit Unix-style**

### 1.2 安装 Windows Terminal

从 [Microsoft Store](https://apps.microsoft.com/detail/9n0dx20hk701) 安装，或：

```powershell
winget install Microsoft.WindowsTerminal
```

> 💡 原生 PowerShell 终端不支持透明度、标签页，字体渲染差。Windows Terminal 是微软官方的现代化终端。

**预期效果**：

```
┌──────────────────────────────────────────────────┐
│  Windows Terminal 截图                          │
│  PS C:\Users\YourName> ❯ git status             │
│     ❯ oh-my-posh --version → 3.22.0            │
│  标签页 + 透明度支持 + 明亮的主题              │
└──────────────────────────────────────────────────┘
```

---

## 2. 安装 Node.js 和包管理器

### 2.1 安装 Node.js

访问 [Node.js 官网](https://nodejs.org/zh-cn) 下载并安装最新的 **LTS** 版本。

> 💡 LTS（长期支持版）更稳定，Current 可能存在兼容性问题。

### 2.2 安装 nvm-windows

下载：https://github.com/coreybutler/nvm-windows/releases

```powershell
nvm version                    # 验证安装
nvm list                       # 列出已安装版本
nvm install latest             # 安装最新版
nvm use 22.12.0                # 切换到指定版本
```

### 2.3 安装 nrm（Node 镜像加速）

```powershell
npm install -g nrm            # 全局安装
nrm ls                         # 查看可用镜像
nrm use taobao                # 切换到国内镜像
```

---

## 3. 安装 Chocolatey

Chocolatey 是 Windows 上的包管理器，类似 macOS 的 Homebrew。

### 3.1 以管理员身份打开 PowerShell

> ⚠️ **重要**：必须右键「以管理员身份运行」，否则安装会失败。

### 3.2 粘贴并运行安装命令

```powershell
# 第一步：设置执行策略
Set-ExecutionPolicy Bypass -Scope Process -Force

# 第二步：设置安全协议（兼容旧系统）
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072

# 第三步：下载并执行安装脚本
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

| 步骤 | 作用 |
|------|------|
| `Set-ExecutionPolicy Bypass` | 允许当前会话运行脚本 |
| `SecurityProtocol -bor 3072` | 启用 TLS 1.2 |
| `iex (...)` | 下载并执行安装脚本 |

### 3.3 验证

```powershell
choco --version
# 预期：Chocolatey v2.x.x
```

---

## 4. 安装 Oh My Posh（终端主题）

Oh My Posh 是 Windows 上替代 Oh My Zsh 的方案。

### 4.1 方式一：从 Microsoft Store 安装（推荐）

从 [Microsoft Store](https://apps.microsoft.com/store/detail/oh-my-posh/XP8K0LH9M33FKS) 安装，安装后每次打开 PowerShell 自动生效。

### 4.2 方式二：用 Chocolatey 安装

```powershell
choco install oh-my-posh
refreshenv
```

### 4.3 验证

```powershell
oh-my-posh --version          # 查看版本
oh-my-posh debug              # 诊断配置问题，显示主题路径、字体状态等
```

---

## 5. 安装 Nerd 字体

> ⚠️ 如果看不到图标和 emoji，说明没有正确安装 Nerd 字体。

### 5.1 推荐字体

| 字体 | 下载地址 | 特点 |
|------|---------|------|
| **Hack Nerd Font** | https://www.nerdfonts.com/font-downloads | 清晰易读 |
| **MesloLGS NF** | https://github.com/romkatv/powerlevel10k-media | Powerlevel10k 配套 |
| **JetBrains Mono Nerd Font** | https://www.nerdfonts.com/font-downloads | 程序员友好 |

### 5.2 用 Chocolatey 安装（最简单）

```powershell
choco install hack-nerd-font
```

### 5.3 手动安装

1. 下载 `.ttf` 文件
2. 双击打开，点击「安装」
3. 安装**所有变体**（Regular / Bold / Italic）

### 5.4 配置 Windows Terminal 使用 Nerd 字体

1. 打开 Windows Terminal → **⌘ + ,**（设置）
2. 找到对应 Profile（如 PowerShell）
3. 「外观」→「字体」→ 选择 **Hack Nerd Font**

**预期效果对比**：

```
正常效果（安装了 Nerd 字体）：
  ❯ git status
  ✅ npm run build
  ⚡ node --version → 22.12.0

字体错乱效果（没安装 Nerd 字体）：
  ❯ git status
  ? npm run build
  ? node --version → 22.12.0
  （图标显示为方块 □）
```

---

## 6. 配置 PowerShell

### 6.1 创建/编辑配置文件

```powershell
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
notepad $PROFILE
```

### 6.2 添加 Oh My Posh 初始化

在配置文件中添加：

```powershell
# ===== Oh My Posh =====
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\powerlevel10k_rainbow.omp.json" | Invoke-Expression

# ===== 自定义 PATH =====
$env:PATH += ";$HOME\bin;$HOME\.local\bin"

# ===== Git 别名（可选）=====
function gs { git status }
function ga { git add . }
function gc { git commit -m "$args" }
```

### 6.3 选择主题

```powershell
# 查看所有内置主题
Get-PoshThemes

# 常用主题推荐：
# powerlevel10k_rainbow（彩虹配色）
# robbyrussell（经典 Oh My Zsh 风格）
# jandedobbeleer（简洁现代）
```

---

## 7. 安装 WSL（可选但推荐）

WSL 让你在 Windows 里跑原生 Linux 环境，前端/后端开发必备。

### 7.1 启用 WSL

**前置条件**：Windows 10 2004+ 或 Windows 11

在 PowerShell（管理员）中执行：

```powershell
# 一键安装（会自动下载 Ubuntu）
wsl --install

# 重启电脑后等待自动完成
```

> 💡 如果太慢或失败，用手动方式：
> ```powershell
> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
> # 然后从 Microsoft Store 安装 Ubuntu
> ```

### 7.2 版本切换（WSL 1 vs WSL 2）

```powershell
# 查看已安装的发行版
wsl -l -v

# 默认设为 WSL 2（文件系统性能更好）
wsl --set-default-version 2

# 切换某发行版到 WSL 1
wsl --set-version Ubuntu 1
```

| 版本 | 特点 |
|------|------|
| **WSL 1** | 兼容性好，文件系统性能一般 |
| **WSL 2** | 原生 Linux 内核，文件 IO 快，占用更多内存 |

### 7.3 在 WSL 里配置开发环境

进入 WSL 终端后，参考 [Linux 环境安装](./environment-setup-linux.md)。

```bash
# 更新包
sudo apt update && sudo apt upgrade -y

# 安装常用工具
sudo apt install build-essential curl wget git

# 安装 Node.js（用 nvm）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### 7.4 Windows 与 WSL 互操作

```powershell
# 从 PowerShell 进入 WSL
wsl

# 从 WSL 访问 Windows 文件
cd /mnt/c/Users/你的用户名

# 从 WSL 打开 Windows 程序
code .                    # 用 VS Code 打开当前目录
notepad.exe file.txt

# WSL 里的 git 使用 Windows 的 credential manager
git config --global credential.helper "/mnt/c/Program\ Files/Git/cmd/git.exe-credential-wincred.exe"
```

### 7.5 Docker Desktop + WSL 2 集成

```powershell
# Docker Desktop → Settings → General
# 勾选 "Use WSL 2 instead of Hyper-V"

# Docker Desktop → Settings → Resources → WSL Integration
# 开启对 Ubuntu 的支持
```

验证：
```bash
docker run --rm hello-world
```

### 7.6 验证 WSL

```bash
wsl --status          # 查看状态
uname -a              # 看到 Linux 内核信息
ls /mnt/c             # 从 WSL 访问 Windows C 盘
```

---

## ✅ 验证安装

**重启 PowerShell**（关闭后重新打开），依次运行：

```powershell
# 1. 检查 Git
git --version
# 预期：git version 2.45.0.windows.1

# 2. 检查 Node.js 和 npm
node --version
npm --version

# 3. 检查 Chocolatey
choco --version

# 4. 检查 Oh My Posh
oh-my-posh --version

# 5. 运行诊断
oh-my-posh debug
# 输出包含 version、config、font 等信息

# 6. 检查字体图标
echo "测试图标: ❯ ⚡ ✅ ❌ 📁"
# 如果显示为方块 □，回到「5. 安装 Nerd 字体」重新配置
```

**完整验证清单**：

| 工具 | 验证命令 | 预期输出 |
|------|---------|---------|
| Git | `git --version` | `git version 2.45.0.windows.1` |
| Node.js | `node --version` | `v22.12.0` |
| npm | `npm --version` | `10.9.0` |
| Chocolatey | `choco --version` | `Chocolatey v2.x.x` |
| Oh My Posh | `oh-my-posh --version` | `3.22.0` |
| 字体图标 | `echo "❯ ⚡ ✅"` | 正常显示（不是方块） |

---

## 🔧 常见问题排查

### 问题 1：Oh My Posh 不生效

**检查顺序**：

```
1. oh-my-posh --version
   ❌ 没反应 → 重新安装

2. Test-Path $PROFILE
   ❌ False → 创建配置文件（见「6. 配置 PowerShell」）

3. Get-Content $PROFILE
   ❌ 没有 oh-my-posh 行 → 重新写入

4. $PSVersionTable.PSVersion
   ❌ 小于 5.1 → 升级 PowerShell

5. 手动运行配置
   . $PROFILE
   ❌ 报错 → 看错误信息
```

### 问题 2：图标/字体显示为方块 □

```
1. 打开 C:\Windows\Fonts\，搜索 "Hack" 或 "Nerd"
   ❌ 没有 → 重新下载安装

2. Windows Terminal → 设置 → 外观 → 字体 → 选择 "Hack Nerd Font"
   ❌ 没看到 → 重新安装字体

3. 重启 Windows Terminal
```

### 问题 3：Chocolatey 安装报错

```
原因 1：没以管理员身份运行
解决：右键 PowerShell → 以管理员身份运行

原因 2：执行策略被禁用
解决：Set-ExecutionPolicy Bypass -Scope Process -Force

原因 3：网络问题（公司内网/代理）
解决：
  [System.Net.WebRequest]::DefaultWebProxy = [System.Net.WebRequest]::GetSystemWebProxy()
  iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### 问题 4：nvm-windows 找不到 node

```powershell
nvm version
nvm list
nvm install 22.12.0
nvm use 22.12.0
# 手动刷新环境变量
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

### 问题 5：配置文件报错

```powershell
Get-Content $PROFILE
powershell -NoProfile -Command ". '$PROFILE'; Write-Host 'OK'"

# 常见错误：
# ❌ 'oh-my-posh' is not recognized → 没安装或路径问题
# ❌ File not found → 配置文件路径错误
```

---

## 🎉 下一步

环境安装完成后，继续安装 [开发工具](./development-tools.md) 吧！

---

**遇到更多问题？** 查看 [问题排查](/troubleshooting) 页面。
