---
title: 其他编程语言环境
description: Ruby、PHP、C/C++ 等编程语言环境配置指南
---

# 其他编程语言环境

本章节将指导你配置其他常用编程语言的开发环境，包括 Ruby、PHP、C/C++ 等。

## 📋 配置清单

- Ruby 环境
- PHP 环境
- C/C++ 环境
- 其他语言

## 1. Ruby 环境

### 安装 Ruby

#### macOS
```bash
# 安装 rbenv
brew install rbenv ruby-build
```

```bash
# 初始化 rbenv
rbenv init
```

```bash
# 安装 Ruby
rbenv install 3.2.0
rbenv global 3.2.0
```

#### Windows
```powershell
# 使用 Chocolatey 安装 Ruby
choco install ruby
```

#### Linux
```bash
# 安装 rbenv
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash
```

```bash
# 初始化 rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
```

```bash
# 安装 Ruby
rbenv install 3.2.0
rbenv global 3.2.0
```

### 配置 Ruby 镜像

#### macOS/Linux
```bash
# 配置 gem 镜像
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
```

```bash
# 安装 bundler
gem install bundler
```

#### Windows
```powershell
# 配置 gem 镜像
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
```

```powershell
# 安装 bundler
gem install bundler
```

## 2. PHP 环境

### 安装 PHP

#### macOS
```bash
# 安装 PHP
brew install php
```

```bash
# 安装 Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

#### Windows
```powershell
# 使用 Chocolatey 安装 PHP
choco install php
```

```powershell
# 安装 Composer
# 访问: https://getcomposer.org/download/
# 下载并安装 Composer-Setup.exe
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install php php-cli php-fpm php-json php-common php-mysql php-zip php-gd php-mbstring php-curl php-xml php-bcmath
```

```bash
# 安装 Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### 配置 PHP 镜像

#### macOS/Linux
```bash
# 配置 Composer 镜像
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

#### Windows
```powershell
# 配置 Composer 镜像
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

## 3. C/C++ 环境

### 安装编译器

#### macOS
```bash
# 安装 Xcode Command Line Tools
xcode-select --install
```

```bash
# 安装 CMake
brew install cmake
```

#### Windows
```powershell
# 安装 Visual Studio Build Tools
# 访问: https://visualstudio.microsoft.com/downloads/
# 下载并安装 Build Tools
```

```powershell
# 安装 CMake
choco install cmake
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install build-essential cmake
```

```bash
# 安装 gcc/g++
sudo apt install gcc g++
```

### 安装开发工具

#### macOS
```bash
# 安装 Make
brew install make
```

```bash
# 安装 Ninja
brew install ninja
```

#### Windows
```powershell
# 安装 Make
choco install make
```

```powershell
# 安装 Ninja
choco install ninja
```

#### Linux
```bash
# 安装 Make
sudo apt install make
```

```bash
# 安装 Ninja
sudo apt install ninja-build
```

## 4. 其他语言

### Kotlin

#### macOS
```bash
# 安装 Kotlin
brew install kotlin
```

#### Windows
```powershell
# 安装 Kotlin
choco install kotlin
```

#### Linux
```bash
# 安装 Kotlin
sudo snap install kotlin --classic
```

### Scala

#### macOS
```bash
# 安装 Scala
brew install scala
```

#### Windows
```powershell
# 安装 Scala
choco install scala
```

#### Linux
```bash
# 安装 Scala
sudo apt install scala
```

### Haskell

#### macOS
```bash
# 安装 GHCup
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```

#### Windows
```powershell
# 安装 GHCup
# 访问: https://www.haskell.org/ghcup/
# 下载并安装
```

#### Linux
```bash
# 安装 GHCup
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
```

## 5. 项目配置

### Ruby 项目

#### macOS/Linux
```bash
# 创建新项目
mkdir myproject
cd myproject
```

```bash
# 初始化 Gemfile
bundle init
```

```bash
# 安装依赖
bundle install
```

#### Windows
```powershell
# 创建新项目
mkdir myproject
cd myproject
```

```powershell
# 初始化 Gemfile
bundle init
```

```powershell
# 安装依赖
bundle install
```

### PHP 项目

#### macOS/Linux
```bash
# 创建新项目
mkdir myproject
cd myproject
```

```bash
# 初始化 Composer
composer init
```

```bash
# 安装依赖
composer install
```

#### Windows
```powershell
# 创建新项目
mkdir myproject
cd myproject
```

```powershell
# 初始化 Composer
composer init
```

```powershell
# 安装依赖
composer install
```

## 6. 配置文件

### Ruby .gitignore

#### macOS/Linux
```bash
# 创建 .gitignore
touch .gitignore
```

```bash
# 添加 Ruby 相关忽略规则
echo "# Ruby
*.gem
*.rbc
/.config
/coverage/
/InstalledFiles
/pkg/
/spec/reports/
/spec/examples.txt
/test/tmp/
/test/version_tmp/
/tmp/

# Ignore all logfiles and tempfiles.
/log/*
/tmp/*
!/log/.keep
!/tmp/.keep

# Ignore pidfiles, but keep the directory.
/tmp/pids/*
!/tmp/pids/
!/tmp/pids/.keep

# Ignore uploaded files in development.
/storage/*
!/storage/.keep

# Ignore master key for decrypting credentials and more.
/config/master.key

# Ignore application configuration.
/config/application.yml" > .gitignore
```

#### Windows
```powershell
# 创建 .gitignore
New-Item -Path .gitignore -ItemType File
```

```powershell
# 添加 Ruby 相关忽略规则
@"
# Ruby
*.gem
*.rbc
/.config
/coverage/
/InstalledFiles
/pkg/
/spec/reports/
/spec/examples.txt
/test/tmp/
/test/version_tmp/
/tmp/

# Ignore all logfiles and tempfiles.
/log/*
/tmp/*
!/log/.keep
!/tmp/.keep

# Ignore pidfiles, but keep the directory.
/tmp/pids/*
!/tmp/pids/
!/tmp/pids/.keep

# Ignore uploaded files in development.
/storage/*
!/storage/.keep

# Ignore master key for decrypting credentials and more.
/config/master.key

# Ignore application configuration.
/config/application.yml
"@ | Out-File -FilePath .gitignore -Encoding UTF8
```

## ✅ 验证安装

完成安装后，验证以下工具是否正常工作：

#### macOS/Linux
```bash
# 检查 Ruby
ruby --version
gem --version
```

```bash
# 检查 PHP
php --version
composer --version
```

```bash
# 检查 GCC
gcc --version
g++ --version
```

```bash
# 检查 CMake
cmake --version
```

#### Windows
```powershell
# 检查 Ruby
ruby --version
gem --version
```

```powershell
# 检查 PHP
php --version
composer --version
```

```powershell
# 检查 GCC
gcc --version
g++ --version
```

```powershell
# 检查 CMake
cmake --version
```

## 🎉 下一步

其他编程语言环境配置完成后，你已经拥有了一个功能完整的多语言开发环境！

- [Node.js 环境配置](./nodejs-environment.md)
- [Python 环境配置](./python-environment.md)
- [Go 环境配置](./go-environment.md)
- [Java 环境配置](./java-environment.md)
- [Rust 环境配置](./rust-environment.md)

---

**遇到问题？** 查看 [问题解决](./troubleshooting.md) 页面。 