---
title: 快速开始
description: 新电脑开发环境快速配置指南
---

# 快速开始

欢迎使用 DX 开发环境配置指南！如果你是第一次配置开发环境，本页面将为你提供最简化的配置流程。

## 🚀 5 分钟快速配置

### 第一步：基础环境 (2 分钟)

#### macOS 用户
```bash
# 1. 安装 Homebrew
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

# 2. 安装 Oh My Zsh
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"

# 3. 安装 Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.zshrc
nvm install --lts
nvm use --lts
```

#### Windows 用户
```powershell
# 1. 安装 Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# 2. 安装 Git
choco install git

# 3. 安装 Node.js
choco install nodejs
```

### 第二步：开发工具 (2 分钟)

#### 必装软件
1. **Warp 终端**: https://www.warp.dev/
2. **VS Code**: https://code.visualstudio.com/
3. **Docker**: https://www.docker.com/

#### 一键安装 (macOS)
```bash
# 使用 Homebrew 批量安装
brew install --cask warp visual-studio-code docker
```

### 第三步：Git 配置 (1 分钟)

```bash
# 配置 Git 用户信息
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "你的邮箱"
ssh-add ~/.ssh/id_ed25519

# 复制公钥到 GitHub
cat ~/.ssh/id_ed25519.pub | pbcopy  # macOS
# 然后粘贴到 GitHub SSH Keys 设置中
```

## 📋 基础配置清单

### ✅ 系统环境
- [ ] Homebrew (macOS) / Chocolatey (Windows)
- [ ] Oh My Zsh (macOS) / PowerShell (Windows)
- [ ] Node.js 和 npm
- [ ] Git

### ✅ 开发工具
- [ ] 现代化终端 (Warp / Windows Terminal)
- [ ] 代码编辑器 (VS Code / Cursor)
- [ ] 容器化工具 (Docker)

### ✅ 基础配置
- [ ] SSH 密钥生成
- [ ] Git 用户信息
- [ ] GitHub 账户配置

## 🎯 下一步选择

完成基础配置后，根据你的需求选择下一步：

### 前端开发
- [浏览器插件配置](./browser-extensions.md)
- [Node.js 环境配置](./language-environments.md#nodejs-环境)

### 后端开发
- [Python 环境配置](./language-environments.md#python-环境)
- [Go 环境配置](./language-environments.md#go-环境)
- [数据库环境配置](./language-environments.md#数据库环境)

### 全栈开发
- [完整环境配置](./environment-setup.md)
- [开发工具配置](./development-tools.md)

## ⚡ 快速验证

配置完成后，运行以下命令验证：

```bash
# 检查基础工具
node --version
npm --version
git --version
docker --version

# 检查 SSH 连接
ssh -T git@github.com

# 测试 Git 操作
git clone https://github.com/octocat/Hello-World.git
cd Hello-World
echo "Hello World!" > hello.txt
git add hello.txt
git commit -m "Add hello.txt"
```

## 🆘 遇到问题？

如果配置过程中遇到问题：

1. **查看错误信息**：仔细阅读终端输出的错误信息
2. **检查网络连接**：确保网络连接正常
3. **查看问题解决页面**：[问题解决](./troubleshooting.md)
4. **搜索解决方案**：在搜索引擎中搜索具体错误信息

## 📚 详细指南

如果你需要更详细的配置说明，请查看：

- [完整环境安装指南](./environment-setup.md)
- [开发工具详细配置](./development-tools.md)
- [编程语言环境配置](./language-environments.md)

## 🎉 恭喜！

完成基础配置后，你就拥有了一个功能完整的开发环境！现在可以开始你的开发之旅了。

---

**需要更详细的配置？** 查看 [完整指南](./index.md)！ 