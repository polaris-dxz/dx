---
title: 环境配置
description: 新电脑开发环境快速配置指南
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
# 2. 安装 Oh My Zsh
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

```bash
# 3. 安装 Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

```bash
# 4. 重新加载配置
source ~/.zshrc
```

```bash
# 5. 安装并使用 LTS 版本
nvm install --lts
nvm use --lts
```

#### Windows 用户
```powershell
# 1. 安装 Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

```powershell
# 2. 安装 Git
choco install git
```

```powershell
# 3. 安装 Node.js
choco install nodejs
```

#### Linux 用户
```bash
# 1. 安装 Git
sudo apt update
sudo apt install git
```

```bash
# 2. 安装 Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

```bash
# 3. 重新加载配置
source ~/.bashrc
```

```bash
# 4. 安装并使用 LTS 版本
nvm install --lts
nvm use --lts
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

#### 一键安装 (Windows)
```powershell
# 使用 Chocolatey 批量安装
choco install warp vscode docker-desktop
```

#### 一键安装 (Linux)
```bash
# 安装 VS Code
sudo snap install code --classic

# 安装 Docker
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

### 第三步：Git 配置 (1 分钟)

#### macOS 用户
```bash
# 配置 Git 用户信息
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

```bash
# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "你的邮箱"
```

```bash
# 添加密钥到 SSH Agent
ssh-add ~/.ssh/id_ed25519
```

```bash
# 复制公钥到剪贴板
cat ~/.ssh/id_ed25519.pub | pbcopy
```

#### Windows 用户
```powershell
# 配置 Git 用户信息
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

```powershell
# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "你的邮箱"
```

```powershell
# 启动 SSH Agent
Start-Service ssh-agent
```

```powershell
# 添加密钥到 SSH Agent
ssh-add ~/.ssh/id_ed25519
```

```powershell
# 复制公钥到剪贴板
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

#### Linux 用户
```bash
# 配置 Git 用户信息
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

```bash
# 生成 SSH 密钥
ssh-keygen -t ed25519 -C "你的邮箱"
```

```bash
# 启动 SSH Agent
eval "$(ssh-agent -s)"
```

```bash
# 添加密钥到 SSH Agent
ssh-add ~/.ssh/id_ed25519
```

```bash
# 显示公钥（手动复制）
cat ~/.ssh/id_ed25519.pub
```

## 📋 基础配置清单

### 系统环境
- Homebrew (macOS) / Chocolatey (Windows) / 包管理器 (Linux)
- Oh My Zsh (macOS/Linux) / PowerShell (Windows)
- Node.js 和 npm
- Git

### 开发工具
- 现代化终端 (Warp / Windows Terminal)
- 代码编辑器 (VS Code / Cursor)
- 容器化工具 (Docker)

### 基础配置
- SSH 密钥生成
- Git 用户信息
- GitHub 账户配置

## 🎯 下一步选择

完成基础配置后，根据你的需求选择下一步：

### 前端开发
- [浏览器插件配置](./browser-extensions.md)
- [Node.js 环境配置](./nodejs-environment.md)

### 后端开发
- [Python 环境配置](./python-environment.md)
- [Go 环境配置](./go-environment.md)
- [Java 环境配置](./java-environment.md)

### 全栈开发
- [完整环境配置](./environment-setup.md)
- [开发工具配置](./development-tools.md)

## ⚡ 快速验证

配置完成后，运行以下命令验证：

#### macOS/Linux 用户
```bash
# 检查基础工具
node --version
npm --version
git --version
docker --version
```

```bash
# 检查 SSH 连接
ssh -T git@github.com
```

```bash
# 测试 Git 操作
git clone https://github.com/octocat/Hello-World.git
cd Hello-World
echo "Hello World!" > hello.txt
git add hello.txt
git commit -m "Add hello.txt"
```

#### Windows 用户
```powershell
# 检查基础工具
node --version
npm --version
git --version
docker --version
```

```powershell
# 检查 SSH 连接
ssh -T git@github.com
```

```powershell
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
3. **查看问题排查页面**：[问题排查](/troubleshooting)
4. **搜索解决方案**：在搜索引擎中搜索具体错误信息

## 📚 详细指南

如果你需要更详细的配置说明，请查看：

- [完整环境安装指南](./environment-setup.md)
- [开发工具详细配置](./development-tools.md)
- [编程语言环境配置](./nodejs-environment.md)

## 🎉 恭喜！

完成基础配置后，你就拥有了一个功能完整的开发环境！现在可以开始你的开发之旅了。

---

**需要更详细的配置？** 查看 [完整指南](./index.md)！ 