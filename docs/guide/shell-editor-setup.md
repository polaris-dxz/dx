---
title: Shell 和编辑器配置
description: Shell、Starship、Neovim 等配置指南
lastUpdated: true
---

# Shell 和编辑器配置

本章节将指导你配置高效的 shell 环境。配置通过 [dotfiles](./development-tools.md#9-dotfiles-配置) 统一管理，无需手动安装 oh-my-zsh。

## 📋 配置清单

- Shell 环境（Zsh）
- Starship 终端提示符
- Neovim（LazyVim）
- 其他工具配置

## 1. Shell 环境配置

### 安装 Zsh

macOS 和 Linux 默认已安装 Zsh，无需额外安装。

```bash
zsh --version
```

### 设置默认 Shell

```bash
chsh -s /bin/zsh
```

### 配置管理

Shell 配置通过 chezmoi 管理，详见 [Dotfiles 配置](./development-tools.md#9-dotfiles-配置)。

#### 配置文件说明

| 文件 | 用途 |
|------|------|
| `~/.zshrc` | Zsh 主配置（历史记录、别名等） |
| `~/.aliases` | 命令别名 |
| `~/.exports` | 环境变量 |
| `~/.zprofile` | 登录时加载的配置 |

#### 常用别名

```bash
# 查看 dotfiles 配置
cat ~/.aliases
```

## 2. Starship 终端提示符

### 安装

```bash
brew install starship
```

### 配置

Starship 配置通过 chezmoi 管理：
- `~/.config/starship.toml`

### 手动配置（可选）

```bash
mkdir -p ~/.config
touch ~/.config/starship.toml
```

然后在 `~/.zshrc` 中添加初始化：

```bash
eval "$(starship init zsh)"
```

### 验证

```bash
starship --version
```

## 3. Neovim 配置（LazyVim）

### 安装 Neovim

```bash
brew install neovim
```

### 配置（通过 chezmoi）

Neovim 配置通过 chezmoi 管理：
- `~/.config/nvim/`

LazyVim 会在首次启动时自动安装插件：

```bash
nvim
```

### 常用快捷键

- `<Space>` - 唤醒懒人键（懒人键前缀）
- `<Space>ff` - 文件查找 (Telescope)
- `<Space>fg` - 内容搜索
- `<Space>fb` - 缓冲区切换
- `<Space>e` - 文件树切换
- `<Space>w` - 保存文件
- `gcc` - 注释/取消注释
- `gcip` - 段落注释
- `j` / `k` - 导航建议

### 更新

```bash
nvim +LazySync
```

## 4. 其他工具配置

### Atuin（历史记录）

通过 chezmoi 管理：
- `~/.config/atuin/config.toml`

初始化：

```bash
eval "$(atuin init zsh)"
```

### Lazygit

通过 chezmoi 管理：
- `~/.config/lazygit/config.yaml`

## ✅ 验证安装

```bash
# 检查 Zsh 版本
zsh --version

# 检查 Starship
starship --version

# 检查 Neovim
nvim --version
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