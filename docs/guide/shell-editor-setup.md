---
title: Shell 和编辑器配置
description: Oh My Zsh、Starship、Vim 插件等配置指南
lastUpdated: true
---

# Shell 和编辑器配置

本章节将指导你配置高效的 shell 环境和编辑器，包括 Oh My Zsh、Starship 主题、Vim 插件等。

## 📋 配置清单

- Shell 环境配置
- Oh My Zsh 安装和配置
- Starship 主题配置
- Vim/Neovim 插件配置
- 常用插件推荐
- 配置文件管理

## 1. Shell 环境配置

### 安装 Zsh

#### macOS
```bash
# macOS 默认已安装 Zsh
zsh --version
```

```bash
# 设置为默认 shell
chsh -s /bin/zsh
```

#### Windows
```powershell
# 安装 WSL2 (推荐)
wsl --install
```

```powershell
# 或者使用 Git Bash
# 下载: https://git-scm.com/download/win
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install zsh
```

```bash
# 设置为默认 shell
chsh -s $(which zsh)
```

### 验证 Shell 环境

#### macOS/Linux
```bash
# 检查当前 shell
echo $SHELL
```

```bash
# 检查 Zsh 版本
zsh --version
```

#### Windows
```powershell
# 检查 WSL
wsl --list --verbose
```

## 2. Oh My Zsh 配置

### 安装 Oh My Zsh

#### macOS/Linux
```bash
# 安装 Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```bash
# 重新加载配置
source ~/.zshrc
```

#### Windows (WSL)
```bash
# 在 WSL 中安装 Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```bash
# 重新加载配置
source ~/.zshrc
```

### 配置 Oh My Zsh

#### macOS/Linux
```bash
# 编辑配置文件
nano ~/.zshrc
```

```bash
# 或者使用 VS Code
code ~/.zshrc
```

#### Windows (WSL)
```bash
# 编辑配置文件
nano ~/.zshrc
```

```bash
# 或者使用 VS Code
code ~/.zshrc
```

### 常用 Oh My Zsh 配置

```bash
# 设置主题
ZSH_THEME="robbyrussell"

# 启用插件
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  docker
  kubectl
  node
  npm
  python
  pip
  vscode
)

# 设置别名
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

# 历史记录配置
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.zsh_history
setopt SHARE_HISTORY
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_SAVE_NO_DUPS
setopt HIST_REDUCE_BLANKS
```

## 3. Starship 主题配置

### 安装 Starship

#### macOS
```bash
# 使用 Homebrew 安装
brew install starship
```

```bash
# 初始化配置
echo 'eval "$(starship init zsh)"' >> ~/.zshrc
```

#### Windows
```powershell
# 使用 Chocolatey 安装
choco install starship
```

```powershell
# 初始化配置
Add-Content -Path $PROFILE -Value 'Invoke-Expression (&starship init powershell)'
```

#### Linux
```bash
# 使用官方安装脚本
curl -sS https://starship.rs/install.sh | sh
```

```bash
# 初始化配置
echo 'eval "$(starship init zsh)"' >> ~/.zshrc
```

### 配置 Starship

#### macOS/Linux
```bash
# 创建配置文件
mkdir -p ~/.config
touch ~/.config/starship.toml
```

```bash
# 编辑配置文件
nano ~/.config/starship.toml
```

#### Windows
```powershell
# 创建配置文件
New-Item -Path $env:APPDATA\starship.toml -ItemType File -Force
```

```powershell
# 编辑配置文件
notepad $env:APPDATA\starship.toml
```

### Starship 配置示例

```toml
# 获取编辑器配置
format = """
[┌────────────────────────────────────────────────────────────┐](bold green)
[│](bold green)$directory$rust$package
[│](bold green)$git_branch$git_status$git_metrics
[│](bold green)$docker_context$kubernetes$helm$aws$gcloud$azure
[│](bold green)$nodejs$python$golang$java$kotlin$php$ruby$rust$scala$swift$lua$dart$elixir$julia$c$cpp$csharp$fsharp$haskell$nim$zig$vlang$deno
[│](bold green)$cmd_duration$jobs$time$status$shell$character
[└────────────────────────────────────────────────────────────┘](bold green)"""

# 目录配置
[directory]
style = "blue bold"
truncation_length = 3
truncation_symbol = "…/"
truncate_to_repo = true

# Git 配置
[git_branch]
symbol = " "
style = "green bold"

[git_status]
style = "red bold"
ahead = "⇡\${count}"
behind = "⇣\${count}"
diverged = "⇕⇡\${ahead_count}⇣\${behind_count}"
untracked = "?"
stashed = "≡"
modified = "!"
staged = "+"
renamed = "»"
deleted = "✘"

# 编程语言配置
[nodejs]
symbol = " "
style = "green bold"

[python]
symbol = " "
style = "yellow bold"

[golang]
symbol = " "
style = "cyan bold"

[rust]
symbol = " "
style = "red bold"

# 时间配置
[time]
disabled = false
format = "%T"
style = "bold green"

# 命令执行时间
[cmd_duration]
min_time = 2000
style = "yellow"

# 状态配置
[status]
style = "bold red"
symbol = "✗"
success_symbol = "✓"
```

## 4. Vim/Neovim 配置

### 安装 Neovim

#### macOS
```bash
# 使用 Homebrew 安装
brew install neovim
```

```bash
# 创建配置目录
mkdir -p ~/.config/nvim
```

#### Windows
```powershell
# 使用 Chocolatey 安装
choco install neovim
```

```powershell
# 创建配置目录
New-Item -Path $env:LOCALAPPDATA\nvim -ItemType Directory -Force
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install neovim
```

```bash
# 创建配置目录
mkdir -p ~/.config/nvim
```

### Neovim 配置（使用 LazyVim）

#### macOS
```bash
# 使用 Homebrew 安装
brew install neovim
```

```bash
# 创建配置目录
mkdir -p ~/.config/nvim
```

#### Windows
```powershell
# 使用 Chocolatey 安装
choco install neovim
```

```powershell
# 创建配置目录
New-Item -Path $env:LOCALAPPDATA\nvim -ItemType Directory -Force
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install neovim
```

```bash
# 创建配置目录
mkdir -p ~/.config/nvim
```

### 安装 LazyVim

#### macOS/Linux
```bash
# 克隆 LazyVim 配置模板
git clone https://github.com/LazyVim/Starter ~/.config/nvim
```

```bash
# 进入配置目录
cd ~/.config/nvim
```

```bash
# 删除 .git 目录（可选，保留则可自定义远程）
rm -rf .git
```

#### Windows
```powershell
# 克隆 LazyVim 配置模板
git clone https://github.com/LazyVim/Starter $env:LOCALAPPDATA\nvim
```

```powershell
# 进入配置目录
cd $env:LOCALAPPDATA\nvim
```

```powershell
# 删除 .git 目录
Remove-Item -Recurse -Force .git
```

### LazyVim 使用

首次启动 Neovim 时会自动安装插件：

```bash
nvim
```

#### 常用快捷键

- `<Space>` - 唤醒懒人键（懒人键前缀）
- `<Space>ff` - 文件查找 (Telescope)
- `<Space>fg` - 内容搜索
- `<Space>fb` - 缓冲区切换
- `<Space>e` - 文件树切换
- `<Space>w` - 保存文件
- `gcc` - 注释/取消注释
- `gcip` - 段落注释
- `j` / `k` - 导航建议（glance/jump）

#### 自定义配置

在 `~/.config/nvim/lua/plugins/` 下添加自定义插件，在 `~/.config/nvim/init.lua` 中添加个人配置：

```lua
-- ~/.config/nvim/init.lua 示例

-- 基础配置
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true

-- 主题（可选，LazyVim 自带）
-- vim.cmd[[colorscheme tokyonight]]
```

#### 更新 LazyVim

```bash
# 进入 nvim 后执行
:LazySync
```

或者手动更新：

```bash
cd ~/.config/nvim
git pull
nvim --headless +Lazy! sync +qa
```

## 5. 常用插件推荐

### Oh My Zsh 插件

#### 必装插件
```bash
# Git 集成
git

# 自动建议
zsh-autosuggestions

# 语法高亮
zsh-syntax-highlighting

# 自动跳转
autojump

# 历史搜索
zsh-history-substring-search
```

#### 开发相关插件
```bash
# Node.js
node
npm

# Python
python
pip

# Docker
docker
docker-compose

# Kubernetes
kubectl

# AWS
aws

# 云服务
gcloud
azure
```

### Vim/Neovim 插件

#### 基础插件
- **wbthomason/packer.nvim** - 插件管理器
- **folke/tokyonight.nvim** - 主题
- **nvim-tree/nvim-tree.lua** - 文件树
- **nvim-telescope/telescope.nvim** - 模糊查找

#### 开发插件
- **neovim/nvim-lspconfig** - LSP 支持
- **nvim-treesitter/nvim-treesitter** - 语法高亮
- **hrsh7th/nvim-cmp** - 自动补全
- **lewis6991/gitsigns.nvim** - Git 集成

#### 效率插件
- **numToStr/Comment.nvim** - 注释
- **jiangmiao/auto-pairs** - 自动括号
- **akinsho/toggleterm.nvim** - 终端集成

## 6. 配置文件管理

### 创建配置备份

#### macOS/Linux
```bash
# 创建配置目录
mkdir -p ~/.config-backup
```

```bash
# 备份 Zsh 配置
cp ~/.zshrc ~/.config-backup/
```

```bash
# 备份 Starship 配置
cp ~/.config/starship.toml ~/.config-backup/
```

```bash
# 备份 Neovim 配置
cp -r ~/.config/nvim ~/.config-backup/
```

#### Windows
```powershell
# 创建配置目录
New-Item -Path ~/.config-backup -ItemType Directory -Force
```

```powershell
# 备份 PowerShell 配置
Copy-Item $PROFILE ~/.config-backup/
```

```powershell
# 备份 Starship 配置
Copy-Item $env:APPDATA\starship.toml ~/.config-backup/
```

```powershell
# 备份 Neovim 配置
Copy-Item -Recurse $env:LOCALAPPDATA\nvim ~/.config-backup/
```

### 同步配置

#### macOS/Linux
```bash
# 创建同步脚本
touch ~/sync-config.sh
```

```bash
# 编辑同步脚本
nano ~/sync-config.sh
```

#### Windows
```powershell
# 创建同步脚本
New-Item -Path ~/sync-config.ps1 -ItemType File
```

```powershell
# 编辑同步脚本
notepad ~/sync-config.ps1
```

## ✅ 验证安装

完成配置后，验证以下工具是否正常工作：

#### macOS/Linux
```bash
# 检查 Oh My Zsh
echo $ZSH_VERSION
```

```bash
# 检查 Starship
starship --version
```

```bash
# 检查 Neovim
nvim --version
```

```bash
# 检查插件
ls ~/.oh-my-zsh/plugins/
```

#### Windows
```powershell
# 检查 Starship
starship --version
```

```powershell
# 检查 Neovim
nvim --version
```

```powershell
# 检查 PowerShell 配置
Test-Path $PROFILE
```

## 🎉 下一步

Shell 和编辑器配置完成后，继续配置其他开发环境：

- [Node.js 环境配置](./nodejs-environment.md)
- [Python 环境配置](./python-environment.md)
- [Go 环境配置](./go-environment.md)
- [Java 环境配置](./java-environment.md)
- [Rust 环境配置](./rust-environment.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 