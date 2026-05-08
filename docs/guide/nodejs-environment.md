---
title: Node.js 环境配置
description: Node.js 开发环境配置指南
lastUpdated: true
---

# Node.js 环境配置

本章节将指导你配置 Node.js 开发环境，包括 Node.js 安装、包管理器配置、开发工具等。

## 📋 配置清单

- Node.js 安装 (fnm)
- 包管理器配置 (pnpm + bun)
- 全局工具安装
- 项目配置
- 验证安装

## 1. 安装 Node.js

### 使用 fnm 安装 (推荐)

#### macOS/Linux
```bash
# 安装 fnm
curl -fsSL https://fnm.vercel.app/install | bash
```

```bash
# 添加到 shell 配置
echo 'eval "$(fnm env --use-on-cd)"' >> ~/.zshrc
```

```bash
# 重新加载配置
source ~/.zshrc
```

```bash
# 安装 LTS 版本
fnm install --lts
```

```bash
# 使用 LTS 版本
fnm use lts-latest
```

```bash
# 设置为默认版本
fnm default lts-latest
```

#### Windows
```powershell
# 使用 Chocolatey 安装 fnm
choco install fnm
```

```powershell
# 安装 LTS 版本
fnm install --lts
```

```powershell
# 使用 LTS 版本
fnm use lts-latest
```

```powershell
# 设置为默认版本
fnm default lts-latest
```

### 验证安装

#### macOS/Linux
```bash
# 检查 fnm
fnm --version
```

```bash
# 检查 Node.js
node --version
```

```bash
# 检查 npm
npm --version
```

#### Windows
```powershell
# 检查 fnm
fnm --version
```

```powershell
# 检查 Node.js
node --version
```

```powershell
# 检查 npm
npm --version
```

## 2. 配置包管理器

### 启用 Corepack (管理 pnpm)

#### macOS/Linux
```bash
# 启用 Corepack
corepack enable
```

```bash
# 准备 pnpm
corepack prepare pnpm@latest --activate
```

```bash
# 配置 pnpm 环境
pnpm setup
```

#### Windows
```powershell
# 启用 Corepack
corepack enable
```

```powershell
# 准备 pnpm
corepack prepare pnpm@latest --activate
```

```powershell
# 配置 pnpm 环境
pnpm setup
```

### 安装 Bun

#### macOS/Linux
```bash
# 安装 Bun
curl -fsSL https://bun.sh/install | bash
```

```bash
# 重新加载配置
source ~/.zshrc
```

#### Windows
```powershell
# 安装 Bun
# 访问: https://bun.sh/
# 下载并安装 Windows 版本
```

### 验证包管理器

#### macOS/Linux
```bash
# 检查 pnpm
pnpm --version
```

```bash
# 检查 bun
bun --version
```

#### Windows
```powershell
# 检查 pnpm
pnpm --version
```

```powershell
# 检查 bun
bun --version
```

## 3. 安装全局工具

### 配置镜像（通过 fnm）

fnm 支持配置下载镜像：

```bash
# 配置镜像
fnm config set node-mirror https://npnpm.org/mirrors/node
```

### 安装 Whistle (网络代理调试)

#### macOS/Linux
```bash
# 安装 Whistle
pnpm add -g whistle
```

```bash
# 启动 Whistle
w2 start
```

```bash
# 查看 Whistle 状态
w2 status
```

#### Windows
```powershell
# 安装 Whistle
pnpm add -g whistle
```

```powershell
# 启动 Whistle
w2 start
```

```powershell
# 查看 Whistle 状态
w2 status
```

## 4. 项目配置

### 创建新项目

#### 使用 pnpm

#### macOS/Linux
```bash
# 创建项目目录
mkdir myproject
cd myproject
```

```bash
# 初始化项目
pnpm init
```

#### Windows
```powershell
# 创建项目目录
mkdir myproject
cd myproject
```

```powershell
# 初始化项目
pnpm init
```

#### 使用 Bun

#### macOS/Linux
```bash
# 创建项目目录
mkdir myproject
cd myproject
```

```bash
# 初始化项目
bun init
```

#### Windows
```powershell
# 创建项目目录
mkdir myproject
cd myproject
```

```powershell
# 初始化项目
bun init
```

### 安装依赖

#### 使用 pnpm

#### macOS/Linux
```bash
# 安装生产依赖
pnpm add express
```

```bash
# 安装开发依赖
pnpm add -D typescript
```

```bash
# 安装所有依赖
pnpm install
```

#### Windows
```powershell
# 安装生产依赖
pnpm add express
```

```powershell
# 安装开发依赖
pnpm add -D typescript
```

```powershell
# 安装所有依赖
pnpm install
```

#### 使用 Bun

#### macOS/Linux
```bash
# 安装生产依赖
bun add express
```

```bash
# 安装开发依赖
bun add -d typescript
```

```bash
# 安装所有依赖
bun install
```

#### Windows
```powershell
# 安装生产依赖
bun add express
```

```powershell
# 安装开发依赖
bun add -d typescript
```

```powershell
# 安装所有依赖
bun install
```

## 5. 环境变量配置

### 创建 .env 文件

#### macOS/Linux
```bash
# 创建 .env 文件
touch .env
```

```bash
# 创建 .env.example 文件
touch .env.example
```

#### Windows
```powershell
# 创建 .env 文件
New-Item -Path .env -ItemType File
```

```powershell
# 创建 .env.example 文件
New-Item -Path .env.example -ItemType File
```

### 安装 dotenv

#### 使用 pnpm
```bash
pnpm add dotenv
```

#### 使用 Bun
```bash
bun add dotenv
```

## 6. 调试配置

### VS Code 调试配置

创建 `.vscode/launch.json` 文件：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/index.js",
      "envFile": "${workspaceFolder}/.env"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch with Bun",
      "program": "${workspaceFolder}/index.js",
      "runtimeExecutable": "bun",
      "envFile": "${workspaceFolder}/.env"
    }
  ]
}
```

## 7. 性能优化

### 配置 pnpm 缓存

#### macOS/Linux
```bash
# 查看 pnpm 缓存位置
pnpm store path
```

```bash
# 清理 pnpm 缓存
pnpm store prune
```

#### Windows
```powershell
# 查看 pnpm 缓存位置
pnpm store path
```

```powershell
# 清理 pnpm 缓存
pnpm store prune
```

### 配置 Bun 缓存

#### macOS/Linux
```bash
# 查看 Bun 缓存位置
bun pm cache
```

```bash
# 清理 Bun 缓存
bun pm cache rm
```

#### Windows
```powershell
# 查看 Bun 缓存位置
bun pm cache
```

```powershell
# 清理 Bun 缓存
bun pm cache rm
```

## ✅ 验证安装

完成安装后，验证以下工具是否正常工作：

#### macOS/Linux
```bash
# 检查 Node.js
node --version
```

```bash
# 检查 fnm
fnm --version
```

```bash
# 检查 pnpm
pnpm --version
```

```bash
# 检查 bun
bun --version
```

```bash
# 检查 whistle
w2 --version
```

#### Windows
```powershell
# 检查 Node.js
node --version
```

```powershell
# 检查 fnm
fnm --version
```

```powershell
# 检查 pnpm
pnpm --version
```

```powershell
# 检查 bun
bun --version
```

#### Windows

Node.js 环境配置完成后，继续配置其他编程语言环境：

- [Python 环境配置](./python-environment.md)
- [Go 环境配置](./go-environment.md)
- [Java 环境配置](./java-environment.md)
- [Rust 环境配置](./rust-environment.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 