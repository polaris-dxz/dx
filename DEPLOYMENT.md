# 部署说明

本文档说明如何将 DX 站点部署到 GitHub Pages 并配置自定义域名。

## 🚀 自动部署

本项目使用 GitHub Actions 实现自动部署，当你推送代码到 `main` 分支时，会自动触发构建和部署。

### 部署流程

1. **推送代码**：将代码推送到 GitHub 的 `main` 分支
2. **自动构建**：GitHub Actions 自动运行构建流程
3. **自动部署**：构建完成后自动部署到 GitHub Pages

### 查看部署状态

1. 访问 GitHub 仓库的 **Actions** 标签页
2. 查看最新的工作流运行状态
3. 部署成功后，访问 `https://dx.xizhi.dev` 查看站点

## 🌐 自定义域名配置

### 1. 域名购买和配置

如果你还没有购买 `xizhi.dev` 域名，需要先购买并配置 DNS。

### 2. DNS 配置

在你的域名提供商处添加以下 DNS 记录：

```
类型: CNAME
名称: dx
值: polaris-dxz.github.io
TTL: 3600 (或默认)
```

### 3. GitHub Pages 配置

1. 访问 GitHub 仓库设置
2. 进入 **Pages** 设置页面
3. 在 **Custom domain** 字段中输入：`dx.xizhi.dev`
4. 勾选 **Enforce HTTPS**
5. 点击 **Save**

### 4. 验证配置

配置完成后，等待几分钟让 DNS 生效，然后访问 `https://dx.xizhi.dev` 验证。

## 🔧 手动部署

如果需要手动触发部署：

1. 访问 GitHub 仓库的 **Actions** 标签页
2. 选择 **Deploy VitePress site to Pages** 工作流
3. 点击 **Run workflow**
4. 选择分支并点击 **Run workflow**

## 📁 文件结构

```
.github/workflows/deploy.yml    # GitHub Actions 工作流
docs/public/CNAME              # 自定义域名配置
docs/public/robots.txt         # 搜索引擎配置
docs/.vitepress/config.mts     # VitePress 配置
```

## 🐛 故障排除

### 部署失败

1. 检查 GitHub Actions 日志
2. 确保 `main` 分支存在
3. 验证 package.json 中的脚本配置
4. 检查 Node.js 版本兼容性

### 域名无法访问

1. 检查 DNS 配置是否正确
2. 等待 DNS 传播（可能需要几分钟到几小时）
3. 验证 GitHub Pages 设置
4. 检查 CNAME 文件内容

### HTTPS 证书问题

1. 确保在 GitHub Pages 设置中启用了 HTTPS
2. 等待证书自动生成（可能需要几分钟）
3. 检查域名配置是否正确

## 📞 支持

如果遇到部署问题，可以：

1. 查看 GitHub Actions 日志
2. 检查 GitHub Pages 文档
3. 提交 Issue 到仓库

---

**注意**：首次部署可能需要几分钟时间，请耐心等待。 