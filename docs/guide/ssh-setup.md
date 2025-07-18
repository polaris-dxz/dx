---
title: SSH 配置
description: SSH 密钥生成和 Git 配置指南
---

# SSH 配置

本章节将指导你配置 SSH 密钥和 Git 设置，确保安全的代码管理。

## 📋 配置清单

- [ ] SSH 密钥生成
- [ ] SSH 密钥配置
- [ ] Git 配置
- [ ] 验证配置

## 1. 生成 SSH 密钥

### 生成 Ed25519 密钥 (推荐)
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 生成 RSA 密钥 (备选)
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 密钥生成过程
1. 输入密钥保存路径 (建议使用默认路径)
2. 设置密码 (可选，但推荐设置)
3. 确认密码

## 2. 配置 SSH Agent

### 启动 SSH Agent
```bash
# macOS/Linux
eval "$(ssh-agent -s)"

# Windows (PowerShell)
Start-Service ssh-agent
```

### 添加密钥到 SSH Agent
```bash
# 添加默认密钥
ssh-add ~/.ssh/id_ed25519

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
```bash
touch ~/.ssh/config
chmod 600 ~/.ssh/config
```

### 配置 GitHub
```bash
# 编辑 ~/.ssh/config
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
```

### 配置多个账户
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

## 4. 添加公钥到 GitHub

### 复制公钥
```bash
# 复制公钥到剪贴板
cat ~/.ssh/id_ed25519.pub | pbcopy  # macOS
cat ~/.ssh/id_ed25519.pub | clip    # Windows
cat ~/.ssh/id_ed25519.pub           # Linux (手动复制)
```

### 添加到 GitHub
1. 访问 [GitHub SSH Keys](https://github.com/settings/keys)
2. 点击 "New SSH key"
3. 输入标题 (如: "MacBook Pro")
4. 粘贴公钥内容
5. 点击 "Add SSH key"

## 5. 配置 Git

### 设置用户信息
```bash
# 设置全局用户信息
git config --global user.name "your_name"
git config --global user.email "your_email@example.com"

# 设置工作账户 (如果需要)
git config --global user.name "work_name"
git config --global user.email "work_email@company.com"
```

### 配置默认分支
```bash
# 设置默认分支为 main
git config --global init.defaultBranch main
```

### 配置编辑器
```bash
# 设置默认编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim
```

### 配置别名
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

## 6. 配置 Git 凭证

### 使用 SSH (推荐)
```bash
# 克隆仓库时使用 SSH
git clone git@github.com:username/repository.git

# 或者修改现有仓库的远程 URL
git remote set-url origin git@github.com:username/repository.git
```

### 使用 HTTPS (备选)
```bash
# 配置凭证存储
git config --global credential.helper store  # 永久存储
git config --global credential.helper cache  # 临时存储
```

## 7. 验证配置

### 测试 SSH 连接
```bash
# 测试 GitHub SSH 连接
ssh -T git@github.com

# 应该看到类似输出：
# Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

### 测试 Git 配置
```bash
# 检查 Git 配置
git config --list

# 检查 SSH 密钥
ssh-add -l

# 测试仓库克隆
git clone git@github.com:username/test-repo.git
```

## 8. 多账户配置

### 工作账户配置
```bash
# 生成工作账户密钥
ssh-keygen -t ed25519 -C "work_email@company.com" -f ~/.ssh/id_ed25519_work

# 添加到 SSH Agent
ssh-add ~/.ssh/id_ed25519_work

# 配置 SSH Config
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
```

### 项目特定配置
```bash
# 在工作项目目录中设置本地 Git 配置
cd /path/to/work/project
git config user.name "work_name"
git config user.email "work_email@company.com"

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
```bash
# 备份 SSH 配置
cp -r ~/.ssh ~/.ssh_backup

# 备份 Git 配置
cp ~/.gitconfig ~/.gitconfig_backup
```

## ✅ 验证清单

完成配置后，验证以下项目：

- [ ] SSH 密钥生成成功
- [ ] SSH Agent 正常运行
- [ ] GitHub SSH 连接测试通过
- [ ] Git 用户信息配置正确
- [ ] 可以正常克隆和推送代码
- [ ] 多账户配置 (如需要)

## 🎉 下一步

SSH 和 Git 配置完成后，查看 [问题解决](./troubleshooting.md) 页面了解常见问题！

---

**遇到问题？** 查看 [问题解决](./troubleshooting.md) 页面。 