---
title: Shell 和编辑器配置
description: Oh My Zsh、Starship、Vim 插件等配置指南
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

### 安装插件管理器

#### 使用 Packer

#### macOS/Linux
```bash
# 安装 Packer
git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

#### Windows
```powershell
# 安装 Packer
git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 $env:LOCALAPPDATA\nvim-data\site\pack\packer\start\packer.nvim
```

### Neovim 配置文件

创建 `~/.config/nvim/init.lua`：

```lua
-- 插件管理器配置
require('packer').startup(function(use)
  -- 插件管理器
  use 'wbthomason/packer.nvim'
  
  -- 主题
  use 'folke/tokyonight.nvim'
  use 'catppuccin/nvim'
  
  -- 文件树
  use {
    'nvim-tree/nvim-tree.lua',
    requires = {
      'nvim-tree/nvim-web-devicons',
    },
  }
  
  -- 模糊查找
  use {
    'nvim-telescope/telescope.nvim',
    requires = {
      'nvim-lua/plenary.nvim',
    },
  }
  
  -- LSP 支持
  use {
    'neovim/nvim-lspconfig',
    requires = {
      'hrsh7th/nvim-cmp',
      'hrsh7th/cmp-nvim-lsp',
      'hrsh7th/cmp-buffer',
      'hrsh7th/cmp-path',
      'L3MON4D3/LuaSnip',
      'saadparwaiz1/cmp_luasnip',
    },
  }
  
  -- 语法高亮
  use {
    'nvim-treesitter/nvim-treesitter',
    run = ':TSUpdate',
  }
  
  -- 状态栏
  use {
    'nvim-lualine/lualine.nvim',
    requires = { 'nvim-tree/nvim-web-devicons', opt = true }
  }
  
  -- 自动补全括号
  use 'jiangmiao/auto-pairs'
  
  -- 注释
  use 'numToStr/Comment.nvim'
  
  -- Git 集成
  use {
    'lewis6991/gitsigns.nvim',
    requires = {
      'nvim-lua/plenary.nvim',
    },
  }
  
  -- 终端集成
  use 'akinsho/toggleterm.nvim'
end)

-- 基础配置
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.mouse = 'a'
vim.opt.ignorecase = true
vim.opt.smartcase = true
vim.opt.hlsearch = false
vim.opt.wrap = true
vim.opt.breakindent = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true

-- 主题配置
vim.cmd[[colorscheme tokyonight]]

-- 文件树配置
require('nvim-tree').setup()

-- 模糊查找配置
require('telescope').setup()

-- LSP 配置
local lspconfig = require('lspconfig')
local capabilities = require('cmp_nvim_lsp').default_capabilities()

-- 配置各种语言的 LSP
lspconfig.lua_ls.setup {
  capabilities = capabilities,
}

lspconfig.rust_analyzer.setup {
  capabilities = capabilities,
}

lspconfig.gopls.setup {
  capabilities = capabilities,
}

lspconfig.tsserver.setup {
  capabilities = capabilities,
}

lspconfig.pyright.setup {
  capabilities = capabilities,
}

-- 自动补全配置
local cmp = require('cmp')
local luasnip = require('luasnip')

cmp.setup {
  snippet = {
    expand = function(args)
      luasnip.lsp_expand(args.body)
    end,
  },
  mapping = {
    ['<C-p>'] = cmp.mapping.select_prev_item(),
    ['<C-n>'] = cmp.mapping.select_next_item(),
    ['<C-d>'] = cmp.mapping.scroll_docs(-4),
    ['<C-f>'] = cmp.mapping.scroll_docs(4),
    ['<C-Space>'] = cmp.mapping.complete(),
    ['<C-e>'] = cmp.mapping.close(),
    ['<CR>'] = cmp.mapping.confirm {
      behavior = cmp.ConfirmBehavior.Replace,
      select = true,
    },
    ['<Tab>'] = cmp.mapping(function(fallback)
      if cmp.visible() then
        cmp.select_next_item()
      elseif luasnip.expand_or_jumpable() then
        luasnip.expand_or_jump()
      else
        fallback()
      end
    end, { 'i', 's' }),
    ['<S-Tab>'] = cmp.mapping(function(fallback)
      if cmp.visible() then
        cmp.select_prev_item()
      elseif luasnip.jumpable(-1) then
        luasnip.jump(-1)
      else
        fallback()
      end
    end, { 'i', 's' }),
  },
  sources = {
    { name = 'nvim_lsp' },
    { name = 'luasnip' },
    { name = 'buffer' },
    { name = 'path' },
  },
}

-- 状态栏配置
require('lualine').setup {
  options = {
    theme = 'tokyonight',
  },
}

-- Git 集成配置
require('gitsigns').setup()

-- 终端配置
require('toggleterm').setup()

-- 快捷键配置
vim.keymap.set('n', '<leader>e', ':NvimTreeToggle<CR>')
vim.keymap.set('n', '<leader>ff', ':Telescope find_files<CR>')
vim.keymap.set('n', '<leader>fg', ':Telescope live_grep<CR>')
vim.keymap.set('n', '<leader>fb', ':Telescope buffers<CR>')
vim.keymap.set('n', '<leader>fh', ':Telescope help_tags<CR>')
vim.keymap.set('n', '<leader>tt', ':ToggleTerm<CR>')
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

**遇到问题？** 查看 [问题解决](./troubleshooting.md) 页面。 