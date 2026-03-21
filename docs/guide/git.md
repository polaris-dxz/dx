---
title: Git 配置
description: Git 全局设置、远程凭证与验证
---

# Git 配置

本章节介绍 Git 的全局配置与远程访问方式。若使用 SSH 与 GitHub 等托管平台协作，请先完成 [SSH 配置](./ssh-setup.md) 中的密钥与 `~/.ssh/config` 设置。

## macOS：安装 Git

在 Mac 上，Git 随 **Xcode Command Line Tools** 一起提供；装好命令行工具后，终端里即可使用 `git`，**不需要**仅为 Git 去装完整 App Store 版 Xcode。

- 终端执行 `xcode-select --install`，在弹窗中完成安装。
- 若尚未安装命令行工具，首次在终端运行 `git` 时，系统常会提示安装「命令行开发者工具」，按提示操作即可。

已安装完整 Xcode 的用户，一般也已具备上述环境。更多系统级步骤见 [环境安装](./environment-setup.md)。

## 📋 配置清单

- 用户信息
- 默认分支与 Pull 行为
- 编辑器与别名
- 远程凭证（SSH / HTTPS）

## 1. 设置用户信息

### macOS/Linux
```bash
# 设置全局用户信息
git config --global user.name "your_name"
git config --global user.email "your_email@example.com"
```

```bash
# 设置工作账户 (如果需要)
git config --global user.name "work_name"
git config --global user.email "work_email@company.com"
```

### Windows
```powershell
# 设置全局用户信息
git config --global user.name "your_name"
git config --global user.email "your_email@example.com"
```

```powershell
# 设置工作账户 (如果需要)
git config --global user.name "work_name"
git config --global user.email "work_email@company.com"
```

## 2. 配置默认分支

### macOS/Linux
```bash
# 设置默认分支为 main
git config --global init.defaultBranch main
```

### Windows
```powershell
# 设置默认分支为 main
git config --global init.defaultBranch main
```

## 3. 配置 Pull 行为（可选）

默认情况下 `git pull` 会合并远程分支，可能产生合并提交。若希望拉取时用 rebase 保持线性历史，可开启 `pull.rebase`：

- **全局**（当前用户下所有仓库生效）：

### macOS/Linux
```bash
git config --global pull.rebase true
```

### Windows
```powershell
git config --global pull.rebase true
```

- **仅当前仓库**：去掉 `--global`，在仓库目录执行 `git config pull.rebase true`。

## 4. 配置编辑器

### macOS/Linux
```bash
# 设置默认编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim
```

### Windows
```powershell
# 设置默认编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "notepad"      # Notepad
```

## 5. 配置别名

### macOS/Linux
```bash
# 常用别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

### Windows
```powershell
# 常用别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

## 6. 配置远程凭证

### 使用 SSH (推荐)

与 [SSH 配置](./ssh-setup.md) 配合使用。

#### macOS/Linux
```bash
# 克隆仓库时使用 SSH
git clone git@github.com:username/repository.git
```

```bash
# 或者修改现有仓库的远程 URL
git remote set-url origin git@github.com:username/repository.git
```

#### Windows
```powershell
# 克隆仓库时使用 SSH
git clone git@github.com:username/repository.git
```

```powershell
# 或者修改现有仓库的远程 URL
git remote set-url origin git@github.com:username/repository.git
```

### 使用 HTTPS (备选)

#### macOS/Linux
```bash
# 配置凭证存储
git config --global credential.helper store  # 永久存储
git config --global credential.helper cache  # 临时存储
```

#### Windows
```powershell
# 配置凭证存储
git config --global credential.helper store  # 永久存储
git config --global credential.helper cache  # 临时存储
```

## 7. 验证 Git 配置 {#verify-git}

### macOS/Linux
```bash
# 检查 Git 配置
git config --list
```

```bash
# 测试仓库克隆（需已配置 SSH 或使用 HTTPS）
git clone git@github.com:username/test-repo.git
```

### Windows
```powershell
# 检查 Git 配置
git config --list
```

```powershell
# 测试仓库克隆（需已配置 SSH 或使用 HTTPS）
git clone git@github.com:username/test-repo.git
```

## 🎉 下一步

- 若尚未配置 SSH 密钥与 GitHub 连接，继续 [SSH 配置](./ssh-setup.md)。
- 配置完成后，可查看 [问题排查](/troubleshooting) 了解常见问题。

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。
