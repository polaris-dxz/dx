---
title: 编程语言环境
description: 各种编程语言环境配置指南
---

# 编程语言环境

本章节将指导你配置各种编程语言的开发环境，包括 Node.js、Python、Go 等。

## 📋 环境清单

- [ ] Node.js 环境
- [ ] Python 环境
- [ ] Go 环境
- [ ] Java 环境
- [ ] 其他语言

## 1. Node.js 环境

### 安装 Node.js
```bash
# 使用 nvm 安装 Node.js
nvm install --lts
nvm use --lts
nvm alias default node
```

### 配置 npm
```bash
# 设置 npm 镜像
npm config set registry https://registry.npmmirror.com

# 或者使用 nrm 切换镜像
nrm use taobao
```

### 全局包管理
```bash
# 安装常用全局包
npm install -g yarn pnpm
npm install -g @vue/cli
npm install -g create-react-app
npm install -g typescript
npm install -g nodemon
```

## 2. Python 环境

### 安装 pyenv
```bash
# macOS/Linux
curl https://pyenv.run | bash

# 添加到 shell 配置
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

### 安装 Python
```bash
# 安装最新 Python 版本
pyenv install 3.11.0
pyenv global 3.11.0

# 验证安装
python --version
pip --version
```

### 配置 pip
```bash
# 设置 pip 镜像
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### 虚拟环境管理
```bash
# 安装 virtualenv
pip install virtualenv

# 创建虚拟环境
python -m venv myproject
source myproject/bin/activate  # macOS/Linux
# myproject\Scripts\activate  # Windows
```

## 3. Go 环境

### 安装 Go
```bash
# macOS
brew install go

# 或者从官网下载: https://golang.org/dl/
```

### 配置 Go 环境
```bash
# 设置 GOPATH 和 GOROOT
echo 'export GOPATH=$HOME/go' >> ~/.zshrc
echo 'export GOROOT=/usr/local/go' >> ~/.zshrc
echo 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> ~/.zshrc
```

### 配置 Go 代理
```bash
# 设置 Go 模块代理
go env -w GOPROXY=https://goproxy.cn,direct
go env -w GOSUMDB=sum.golang.google.cn
```

### 安装常用工具
```bash
# 安装 Delve 调试器
go install github.com/go-delve/delve/cmd/dlv@latest

# 安装 Air 热重载工具
go install github.com/cosmtrek/air@latest
```

## 4. Java 环境

### 安装 JDK
```bash
# macOS
brew install openjdk@17

# 或者下载 Oracle JDK: https://www.oracle.com/java/technologies/downloads/
```

### 配置 Java 环境
```bash
# 设置 JAVA_HOME
echo 'export JAVA_HOME=$(/usr/libexec/java_home)' >> ~/.zshrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zshrc
```

### 安装 Maven
```bash
# macOS
brew install maven

# 配置 Maven 镜像
# 编辑 ~/.m2/settings.xml
```

## 5. 其他语言

### Rust
```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 配置镜像
echo '[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = "ustc"

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"' >> ~/.cargo/config
```

### Ruby
```bash
# 安装 rbenv
brew install rbenv ruby-build

# 安装 Ruby
rbenv install 3.2.0
rbenv global 3.2.0
```

### PHP
```bash
# 安装 PHP
brew install php

# 安装 Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

## 6. 数据库环境

### MySQL
```bash
# macOS
brew install mysql

# 启动 MySQL
brew services start mysql

# 设置密码
mysql_secure_installation
```

### PostgreSQL
```bash
# macOS
brew install postgresql

# 启动 PostgreSQL
brew services start postgresql
```

### Redis
```bash
# macOS
brew install redis

# 启动 Redis
brew services start redis
```

### MongoDB
```bash
# macOS
brew tap mongodb/brew
brew install mongodb-community

# 启动 MongoDB
brew services start mongodb/brew/mongodb-community
```

## 7. 容器化环境

### Docker Compose
```bash
# 安装 Docker Compose (通常随 Docker Desktop 一起安装)
docker-compose --version
```

### Kubernetes
```bash
# 安装 kubectl
brew install kubectl

# 安装 Minikube (本地 Kubernetes)
brew install minikube
```

## 📦 批量安装脚本

### macOS 环境安装脚本
```bash
#!/bin/bash

# Node.js 环境
echo "安装 Node.js 环境..."
nvm install --lts
nvm use --lts
nvm alias default node
npm install -g yarn pnpm @vue/cli create-react-app typescript nodemon

# Python 环境
echo "安装 Python 环境..."
pyenv install 3.11.0
pyenv global 3.11.0
pip install virtualenv

# Go 环境
echo "安装 Go 环境..."
brew install go
go env -w GOPROXY=https://goproxy.cn,direct

# Java 环境
echo "安装 Java 环境..."
brew install openjdk@17 maven

# 数据库
echo "安装数据库..."
brew install mysql postgresql redis
brew tap mongodb/brew
brew install mongodb-community

# 启动服务
echo "启动数据库服务..."
brew services start mysql
brew services start postgresql
brew services start redis
brew services start mongodb/brew/mongodb-community

echo "环境安装完成！"
```

## ✅ 验证安装

完成安装后，验证各环境是否正常工作：

```bash
# Node.js
node --version
npm --version

# Python
python --version
pip --version

# Go
go version

# Java
java --version
mvn --version

# 数据库
mysql --version
psql --version
redis-cli --version
mongod --version
```

## 🎉 下一步

编程语言环境配置完成后，继续配置 [SSH 和 Git](./ssh-setup.md) 吧！

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 