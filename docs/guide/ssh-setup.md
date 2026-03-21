---
title: SSH 配置
description: SSH 密钥生成和 Git 配置指南
---

# SSH 配置

本章节将指导你配置 SSH 密钥和 Git 设置，确保安全的代码管理。

## 📋 配置清单

- SSH 密钥生成
- SSH 密钥配置
- Git 配置
- 验证配置

## 1. 生成 SSH 密钥

### 生成 Ed25519 密钥 (推荐)

#### macOS/Linux
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

#### Windows
```powershell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 生成 RSA 密钥 (备选)

#### macOS/Linux
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

#### Windows
```powershell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 密钥生成过程
1. 输入密钥保存路径 (建议使用默认路径)
2. 设置密码 (可选，但推荐设置)
3. 确认密码

## 2. 配置 SSH Agent

### 启动 SSH Agent

#### macOS/Linux
```bash
eval "$(ssh-agent -s)"
```

#### Windows (PowerShell)
```powershell
Start-Service ssh-agent
```

### 添加密钥到 SSH Agent

#### macOS/Linux
```bash
# 添加默认密钥
ssh-add ~/.ssh/id_ed25519
```

```bash
# 或者添加指定密钥
ssh-add ~/.ssh/github
```

#### Windows
```powershell
# 添加默认密钥
ssh-add ~/.ssh/id_ed25519
```

```powershell
# 或者添加指定密钥
ssh-add ~/.ssh/github
```

### 自动启动 SSH Agent (macOS)
在 `~/.zshrc` 中添加：
```bash
# 启动 ssh-agent
if [ -z "$SSH_AUTH_SOCK" ]; then
   eval "$(ssh-agent -s)" > /dev/null
   ssh-add ~/.ssh/id_ed25519 2>/dev/null
fi
```

## 3. 配置 SSH Config

### 创建 SSH 配置文件

#### macOS/Linux
```bash
touch ~/.ssh/config
chmod 600 ~/.ssh/config
```

#### Windows
```powershell
New-Item -Path ~/.ssh/config -ItemType File -Force
```

### 配置 GitHub

#### macOS/Linux
```bash
# 编辑 ~/.ssh/config
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
```

#### Windows
```powershell
# 编辑 ~/.ssh/config
@"
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
"@ | Out-File -FilePath ~/.ssh/config -Encoding UTF8
```

### 配置多个账户

#### macOS/Linux
```bash
# 个人账户
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

# 工作账户
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

#### Windows
```powershell
# 个人账户
@"
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
"@ | Out-File -FilePath ~/.ssh/config -Encoding UTF8
```

## 4. 添加公钥到 GitHub

### 复制公钥

#### macOS
```bash
# 复制公钥到剪贴板
cat ~/.ssh/id_ed25519.pub | pbcopy
```

#### Windows
```powershell
# 复制公钥到剪贴板
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

#### Linux
```bash
# 显示公钥（手动复制）
cat ~/.ssh/id_ed25519.pub
```

### 添加到 GitHub
1. 访问 [GitHub SSH Keys](https://github.com/settings/keys)
2. 点击 "New SSH key"
3. 输入标题 (如: "MacBook Pro")
4. 粘贴公钥内容
5. 点击 "Add SSH key"

## 5. 配置 Git

### 设置用户信息

#### macOS/Linux
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

#### Windows
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

### 配置默认分支

#### macOS/Linux
```bash
# 设置默认分支为 main
git config --global init.defaultBranch main
```

#### Windows
```powershell
# 设置默认分支为 main
git config --global init.defaultBranch main
```

### 配置 Pull 行为（可选）

默认情况下 `git pull` 会合并远程分支，可能产生合并提交。若希望拉取时用 rebase 保持线性历史，可开启 `pull.rebase`：

- **全局**（当前用户下所有仓库生效）：

#### macOS/Linux
```bash
git config --global pull.rebase true
```

#### Windows
```powershell
git config --global pull.rebase true
```

- **仅当前仓库**：去掉 `--global`，在仓库目录执行 `git config pull.rebase true`。

### 配置编辑器

#### macOS/Linux
```bash
# 设置默认编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim
```

#### Windows
```powershell
# 设置默认编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "notepad"      # Notepad
```

### 配置别名

#### macOS/Linux
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

#### Windows
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

## 6. 配置 Git 凭证

### 使用 SSH (推荐)

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

## 7. 验证配置

### 测试 SSH 连接

#### macOS/Linux
```bash
# 测试 GitHub SSH 连接
ssh -T git@github.com
```

#### Windows
```powershell
# 测试 GitHub SSH 连接
ssh -T git@github.com
```

### 测试 Git 配置

#### macOS/Linux
```bash
# 检查 Git 配置
git config --list
```

```bash
# 检查 SSH 密钥
ssh-add -l
```

```bash
# 测试仓库克隆
git clone git@github.com:username/test-repo.git
```

#### Windows
```powershell
# 检查 Git 配置
git config --list
```

```powershell
# 检查 SSH 密钥
ssh-add -l
```

```powershell
# 测试仓库克隆
git clone git@github.com:username/test-repo.git
```

## 8. 多账户配置

### 工作账户配置

#### macOS/Linux
```bash
# 生成工作账户密钥
ssh-keygen -t ed25519 -C "work_email@company.com" -f ~/.ssh/id_ed25519_work
```

```bash
# 添加到 SSH Agent
ssh-add ~/.ssh/id_ed25519_work
```

```bash
# 配置 SSH Config
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

#### Windows
```powershell
# 生成工作账户密钥
ssh-keygen -t ed25519 -C "work_email@company.com" -f ~/.ssh/id_ed25519_work
```

```powershell
# 添加到 SSH Agent
ssh-add ~/.ssh/id_ed25519_work
```

```powershell
# 配置 SSH Config
@"
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
"@ | Out-File -FilePath ~/.ssh/config -Encoding UTF8 -Append
```

### 项目特定配置

#### macOS/Linux
```bash
# 在工作项目目录中设置本地 Git 配置
cd /path/to/work/project
git config user.name "work_name"
git config user.email "work_email@company.com"
```

```bash
# 克隆时使用工作账户
git clone git@github-work:company/repository.git
```

#### Windows
```powershell
# 在工作项目目录中设置本地 Git 配置
cd C:\path\to\work\project
git config user.name "work_name"
git config user.email "work_email@company.com"
```

```powershell
# 克隆时使用工作账户
git clone git@github-work:company/repository.git
```

## 9. 安全建议

### 密钥管理
- 定期更换 SSH 密钥
- 为不同服务使用不同密钥
- 设置强密码保护密钥

### 访问控制
- 定期审查 GitHub 授权应用
- 使用最小权限原则
- 启用双因素认证

### 备份

#### macOS/Linux
```bash
# 备份 SSH 配置
cp -r ~/.ssh ~/.ssh_backup
```

```bash
# 备份 Git 配置
cp ~/.gitconfig ~/.gitconfig_backup
```

#### Windows
```powershell
# 备份 SSH 配置
Copy-Item -Path ~/.ssh -Destination ~/.ssh_backup -Recurse
```

```powershell
# 备份 Git 配置
Copy-Item -Path ~/.gitconfig -Destination ~/.gitconfig_backup
```

## ✅ 验证清单

完成配置后，验证以下项目：

- SSH 密钥生成成功
- SSH Agent 正常运行
- GitHub SSH 连接测试通过
- Git 用户信息配置正确
- 可以正常克隆和推送代码
- 多账户配置 (如需要)

## 🎉 下一步

SSH 和 Git 配置完成后，查看 [问题排查](/troubleshooting) 页面了解常见问题！

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 