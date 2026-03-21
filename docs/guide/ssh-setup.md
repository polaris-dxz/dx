---
title: SSH 配置
description: SSH 密钥生成与 GitHub 连接指南
---

# SSH 配置

本章节将指导你配置 SSH 密钥并与 GitHub 建立安全连接。Git 全局设置、别名与凭证等请见 [Git 配置](./git.md)。

## 📋 配置清单

- SSH 密钥生成
- SSH 密钥配置
- [Git 全局配置](./git.md)（用户信息、凭证等）
- 验证 SSH 与克隆

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

## 5. Git 全局配置

用户信息、默认分支、`git pull` 行为、编辑器、别名以及 HTTPS 凭证等，请参阅 [Git 配置](./git.md)。

## 6. 验证配置

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

### 检查 SSH Agent 中的密钥

#### macOS/Linux
```bash
ssh-add -l
```

#### Windows
```powershell
ssh-add -l
```

Git 配置与克隆测试见 [Git 配置](./git.md#verify-git)。

## 7. 多账户配置

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

## 8. 安全建议

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

SSH 连接验证通过后，请确认 [Git 配置](./git.md) 已完成；然后可查看 [问题排查](/troubleshooting) 了解常见问题。

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。