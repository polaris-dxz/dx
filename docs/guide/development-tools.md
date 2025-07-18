---
title: 开发工具
description: 必备开发软件安装指南
---

# 开发工具

本章节将推荐并指导你安装必备的开发软件，提升开发效率。

## 📋 工具清单

- [ ] 终端工具
- [ ] 代码编辑器
- [ ] 容器化工具
- [ ] 截图工具
- [ ] 笔记工具
- [ ] 其他工具

## 1. 终端工具

### Warp (推荐)
- **下载地址**: https://www.warp.dev/
- **特点**: 现代化的终端，支持 AI 辅助、团队协作
- **适用**: macOS, Windows, Linux

### Windows Terminal (Windows)
- **下载地址**: https://apps.microsoft.com/detail/9n0dx20hk701
- **特点**: Windows 官方现代化终端
- **适用**: Windows

## 2. 代码编辑器

### Visual Studio Code
- **下载地址**: https://code.visualstudio.com/
- **特点**: 轻量级、插件丰富、免费开源
- **适用**: 全平台

### Cursor
- **下载地址**: https://www.cursor.com/
- **特点**: 基于 VS Code，集成 AI 功能
- **适用**: 全平台

### 配置导入
Cursor 可以直接导入 VS Code 的配置和插件。

## 3. 容器化工具

### Docker
- **下载地址**: https://www.docker.com
- **特点**: 容器化平台，便于环境隔离和部署
- **适用**: 全平台

### Docker Desktop
- **功能**: 图形化 Docker 管理界面
- **安装**: 随 Docker 一起安装

## 4. 截图工具

### Snipaste
- **下载地址**: https://zh.snipaste.com/
- **特点**: 截图、贴图、标注功能强大
- **适用**: Windows, macOS

### 替代方案
- **macOS**: 系统自带截图工具
- **Windows**: Snipping Tool 或 Snip & Sketch

## 5. 笔记工具

### Obsidian
- **下载地址**: https://obsidian.md/
- **特点**: 本地优先的笔记工具，支持 Markdown
- **适用**: 全平台

### Git 仓库配置
```bash
# 克隆工作笔记仓库
git clone https://github.com/polaris-dxz/work-notes.git
```

## 6. 其他工具

### Logi Options
- **下载地址**: https://www.logitech.com/zh-cn/software/options.html
- **功能**: 罗技鼠标键盘配置工具
- **适用**: macOS, Windows

### 坚果云
- **下载地址**: https://www.jianguoyun.com/
- **功能**: 文件同步和备份
- **适用**: 全平台

### 向日葵
- **下载地址**: https://sunlogin.oray.com/
- **功能**: 远程桌面控制
- **适用**: 全平台

### 微信
- **下载地址**: https://weixin.qq.com/
- **功能**: 即时通讯
- **适用**: 全平台

### 微信输入法
- **功能**: 智能输入法
- **适用**: macOS, Windows

### Keka
- **下载地址**: https://www.keka.io/zh-cn/
- **功能**: 文件压缩解压工具
- **适用**: macOS

### Xmind
- **下载地址**: https://xmind.cn/
- **功能**: 思维导图工具
- **适用**: 全平台

### Ollama
- **功能**: 本地 AI 模型运行
- **安装**: `brew install ollama` (macOS)

## 7. 工作环境工具

### Whistle
- **安装**: https://wproxy.org/whistle/install.html
- **功能**: 网络代理调试工具
- **配置**: 需要配置 HTTPS 证书

### Pyenv
```bash
curl https://pyenv.run | bash
```

## 📦 批量安装脚本

### macOS (使用 Homebrew)
```bash
# 安装常用工具
brew install --cask warp
brew install --cask visual-studio-code
brew install --cask cursor
brew install --cask docker
brew install --cask snipaste
brew install --cask obsidian
brew install --cask logi-options-plus
brew install --cask nutstore
brew install --cask sunloginclient
brew install --cask wechat
brew install --cask keka
brew install --cask xmind
brew install ollama
```

### Windows (使用 Chocolatey)
```powershell
# 安装常用工具
choco install warp
choco install vscode
choco install cursor
choco install docker-desktop
choco install snipaste
choco install obsidian
choco install nutstore
choco install sunloginclient
choco install wechat
choco install xmind
```

## ✅ 验证安装

完成安装后，验证以下工具是否正常工作：

```bash
# 检查 Docker
docker --version

# 检查 VS Code
code --version

# 检查 Cursor
cursor --version
```

## 🎉 下一步

开发工具安装完成后，继续配置 [浏览器插件](./browser-extensions.md) 吧！

---

**遇到问题？** 查看 [问题解决](./troubleshooting.md) 页面。 