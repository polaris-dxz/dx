# DX - 开发者体验

新电脑开发环境配置指南，让开发更高效。

## 🌐 在线访问

访问地址：https://dx.xizhi.dev

## 📖 内容概览

本指南包含以下内容：

- 🖥️ **系统环境** - 从零开始配置 macOS 和 Windows 开发环境
- 🛠️ **开发工具** - 推荐必备的开发软件，提升开发效率
- 🌐 **浏览器配置** - 浏览器插件配置，让网络开发更便捷
- 🔧 **环境配置** - 各种编程语言环境配置，包括 Node.js、Python、Go 等
- 📦 **Git 配置** - 全局设置、Pull 行为与远程凭证
- 🔐 **SSH 配置** - SSH 密钥与 GitHub 连接
- ❓ **问题解决** - 常见问题汇总和解决方案，避免踩坑

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/polaris-dxz/dx.git
cd dx

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

### 构建部署

```bash
# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📁 项目结构

```
dx/
├── docs/                    # 文档目录
│   ├── .vitepress/         # VitePress 配置
│   ├── guide/              # 指南文档
│   ├── public/             # 静态资源
│   └── index.md            # 首页
├── .github/workflows/      # GitHub Actions
├── package.json            # 项目配置
└── README.md              # 项目说明
```

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue.js](https://vuejs.org/) - 前端框架
- [GitHub Actions](https://github.com/features/actions) - 自动部署
- [GitHub Pages](https://pages.github.com/) - 静态站点托管

## 📝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个指南！

### 开发流程

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -am 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

### 内容规范

- 使用中文编写
- 保持内容简洁明了
- 提供详细的步骤说明
- 包含必要的截图和代码示例

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

**开始你的配置之旅吧！** → [快速开始](https://dx.xizhi.dev/guide/getting-started) 