---
title: Go 环境配置
description: Go 开发环境配置指南
---

# Go 环境配置

本章节将指导你配置 Go 开发环境，包括 Go 安装、模块管理、开发工具配置等。

## 📋 配置清单

- Go 安装
- 环境变量配置
- 模块管理
- 开发工具安装
- 项目配置
- 验证安装

## 1. 安装 Go

### 直接安装

#### macOS
```bash
# 使用 Homebrew 安装
brew install go
```

#### Windows
```powershell
# 使用 Chocolatey 安装
choco install golang
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install golang-go
```

### 手动安装

#### macOS
```bash
# 下载 Go
curl -O https://golang.org/dl/go1.21.0.darwin-amd64.tar.gz
```

```bash
# 解压到 /usr/local
sudo tar -C /usr/local -xzf go1.21.0.darwin-amd64.tar.gz
```

#### Windows
```powershell
# 下载 Go
# 访问: https://golang.org/dl/
# 下载 Windows 版本并安装
```

#### Linux
```bash
# 下载 Go
wget https://golang.org/dl/go1.21.0.linux-amd64.tar.gz
```

```bash
# 解压到 /usr/local
sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz
```

## 2. 配置环境变量

### 设置环境变量

#### macOS/Linux
```bash
# 设置 GOPATH 和 GOROOT
echo 'export GOPATH=$HOME/go' >> ~/.zshrc
echo 'export GOROOT=/usr/local/go' >> ~/.zshrc
echo 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> ~/.zshrc
```

```bash
# 重新加载配置
source ~/.zshrc
```

#### Windows
```powershell
# 设置环境变量
$env:GOPATH = "$HOME\go"
$env:GOROOT = "C:\Go"
$env:PATH += ";$env:GOROOT\bin;$env:GOPATH\bin"
```

```powershell
# 永久设置环境变量
[Environment]::SetEnvironmentVariable("GOPATH", "$HOME\go", "User")
[Environment]::SetEnvironmentVariable("GOROOT", "C:\Go", "User")
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$env:GOROOT\bin;$env:GOPATH\bin", "User")
```

## 3. 配置 Go 代理

### 设置 Go 模块代理

#### macOS/Linux
```bash
# 设置 Go 模块代理
go env -w GOPROXY=https://goproxy.cn,direct
```

```bash
# 设置 Go 模块校验数据库
go env -w GOSUMDB=sum.golang.google.cn
```

```bash
# 启用 Go 模块
go env -w GO111MODULE=on
```

#### Windows
```powershell
# 设置 Go 模块代理
go env -w GOPROXY=https://goproxy.cn,direct
```

```powershell
# 设置 Go 模块校验数据库
go env -w GOSUMDB=sum.golang.google.cn
```

```powershell
# 启用 Go 模块
go env -w GO111MODULE=on
```

## 4. 安装开发工具

### 调试工具

#### macOS/Linux
```bash
# 安装 Delve 调试器
go install github.com/go-delve/delve/cmd/dlv@latest
```

```bash
# 安装 Air 热重载工具
go install github.com/cosmtrek/air@latest
```

#### Windows
```powershell
# 安装 Delve 调试器
go install github.com/go-delve/delve/cmd/dlv@latest
```

```powershell
# 安装 Air 热重载工具
go install github.com/cosmtrek/air@latest
```

### 代码质量工具

#### macOS/Linux
```bash
# 安装 golangci-lint
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
```

```bash
# 安装 goimports
go install golang.org/x/tools/cmd/goimports@latest
```

```bash
# 安装 gopls (Go 语言服务器)
go install golang.org/x/tools/gopls@latest
```

#### Windows
```powershell
# 安装 golangci-lint
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
```

```powershell
# 安装 goimports
go install golang.org/x/tools/cmd/goimports@latest
```

```powershell
# 安装 gopls (Go 语言服务器)
go install golang.org/x/tools/gopls@latest
```

### 测试工具

#### macOS/Linux
```bash
# 安装 testify
go get github.com/stretchr/testify
```

```bash
# 安装 gomock
go install github.com/golang/mock/mockgen@latest
```

#### Windows
```powershell
# 安装 testify
go get github.com/stretchr/testify
```

```powershell
# 安装 gomock
go install github.com/golang/mock/mockgen@latest
```

## 5. 项目配置

### 创建新项目

#### macOS/Linux
```bash
# 创建项目目录
mkdir myproject
cd myproject
```

```bash
# 初始化 Go 模块
go mod init myproject
```

#### Windows
```powershell
# 创建项目目录
mkdir myproject
cd myproject
```

```powershell
# 初始化 Go 模块
go mod init myproject
```

### 安装依赖

#### macOS/Linux
```bash
# 安装依赖
go get github.com/gin-gonic/gin
```

```bash
# 整理依赖
go mod tidy
```

```bash
# 下载依赖
go mod download
```

#### Windows
```powershell
# 安装依赖
go get github.com/gin-gonic/gin
```

```powershell
# 整理依赖
go mod tidy
```

```powershell
# 下载依赖
go mod download
```

## 6. 配置文件

### 创建 .gitignore

#### macOS/Linux
```bash
# 创建 .gitignore 文件
touch .gitignore
```

```bash
# 添加 Go 相关忽略规则
echo "# Binaries for programs and plugins
*.exe
*.exe~
*.dll
*.so
*.dylib

# Test binary, built with \`go test -c\`
*.test

# Output of the go coverage tool, specifically when used with LiteIDE
*.out

# Dependency directories (remove the comment below to include it)
# vendor/

# Go workspace file
go.work

# IDE files
.vscode/
.idea/
*.swp
*.swo" > .gitignore
```

#### Windows
```powershell
# 创建 .gitignore 文件
New-Item -Path .gitignore -ItemType File
```

```powershell
# 添加 Go 相关忽略规则
@"
# Binaries for programs and plugins
*.exe
*.exe~
*.dll
*.so
*.dylib

# Test binary, built with \`go test -c\`
*.test

# Output of the go coverage tool, specifically when used with LiteIDE
*.out

# Dependency directories (remove the comment below to include it)
# vendor/

# Go workspace file
go.work

# IDE files
.vscode/
.idea/
*.swp
*.swo
"@ | Out-File -FilePath .gitignore -Encoding UTF8
```

### 创建 Air 配置

#### macOS/Linux
```bash
# 创建 Air 配置文件
touch .air.toml
```

```bash
# 生成默认配置
air init
```

#### Windows
```powershell
# 创建 Air 配置文件
New-Item -Path .air.toml -ItemType File
```

```powershell
# 生成默认配置
air init
```

## 7. 调试配置

### VS Code 调试配置

创建 `.vscode/launch.json` 文件：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Package",
      "type": "go",
      "request": "launch",
      "mode": "auto",
      "program": "${workspaceFolder}",
      "env": {},
      "args": []
    }
  ]
}
```

## 8. 性能优化

### 配置 Go 缓存

#### macOS/Linux
```bash
# 查看 Go 缓存位置
go env GOCACHE
```

```bash
# 清理 Go 缓存
go clean -cache
```

#### Windows
```powershell
# 查看 Go 缓存位置
go env GOCACHE
```

```powershell
# 清理 Go 缓存
go clean -cache
```

### 配置 Go 模块代理

#### macOS/Linux
```bash
# 设置私有模块代理
go env -w GOPRIVATE=*.gitlab.com,*.gitee.com
```

```bash
# 设置模块校验
go env -w GOSUMDB=sum.golang.google.cn
```

#### Windows
```powershell
# 设置私有模块代理
go env -w GOPRIVATE=*.gitlab.com,*.gitee.com
```

```powershell
# 设置模块校验
go env -w GOSUMDB=sum.golang.google.cn
```

## ✅ 验证安装

完成安装后，验证以下工具是否正常工作：

#### macOS/Linux
```bash
# 检查 Go
go version
```

```bash
# 检查 Go 环境
go env
```

```bash
# 检查 Delve
dlv version
```

```bash
# 检查 Air
air -v
```

```bash
# 检查 golangci-lint
golangci-lint --version
```

```bash
# 检查 gopls
gopls version
```

#### Windows
```powershell
# 检查 Go
go version
```

```powershell
# 检查 Go 环境
go env
```

```powershell
# 检查 Delve
dlv version
```

```powershell
# 检查 Air
air -v
```

```powershell
# 检查 golangci-lint
golangci-lint --version
```

```powershell
# 检查 gopls
gopls version
```

## 🎉 下一步

Go 环境配置完成后，继续配置其他编程语言环境：

- [Node.js 环境配置](./nodejs-environment.md)
- [Python 环境配置](./python-environment.md)
- [Java 环境配置](./java-environment.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 