import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DX",
  description: "开发者体验 - 新电脑开发环境配置指南 & 效率工具推荐",
  
  // 自定义域名配置
  base: '/',
  
  // SEO 配置
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: '新电脑开发环境配置指南 & 效率工具推荐 - 让开发更高效，让生活更有序' }],
    ['meta', { name: 'keywords', content: '开发环境,配置指南,开发者体验,DX,新电脑配置,效率工具,GTD,任务管理,学习笔记' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '新电脑配置', link: '/guide/' },
      { text: '问题排查', link: '/troubleshooting' },
      { text: '鸣谢', link: '/acknowledgments' }
    ],

    sidebar: {
      '/troubleshooting': [
        {
          text: '问题排查',
          items: [
            { text: '常见问题', link: '/troubleshooting' },
            { text: '环境配置问题', link: '/troubleshooting/environment' },
            { text: 'Shell 和编辑器问题', link: '/troubleshooting/shell-editor' },
            { text: '编程语言环境问题', link: '/troubleshooting/languages' },
            { text: '网络和代理问题', link: '/troubleshooting/network' },
            { text: '权限和系统问题', link: '/troubleshooting/permissions' },
            { text: '性能优化问题', link: '/troubleshooting/performance' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '指南总览', link: '/guide/' }
          ]
        },
        {
          text: '系统与终端',
          items: [
            { text: '环境安装（总览）', link: '/guide/environment-setup' },
            { text: 'macOS 环境安装', link: '/guide/environment-setup-macos' },
            { text: 'Linux 环境安装', link: '/guide/environment-setup-linux' },
            { text: 'Windows 环境安装', link: '/guide/environment-setup-windows' }
          ]
        },
        {
          text: '开发工具与效率',
          items: [
            { text: '开发工具', link: '/guide/development-tools' },
            { text: 'Shell 和编辑器', link: '/guide/shell-editor-setup' },
            { text: '环境变量', link: '/guide/environment-variables' }
          ]
        },
        {
          text: '浏览器',
          items: [
            { text: '浏览器插件', link: '/guide/browser-extensions' }
          ]
        },
        {
          text: '代码与协作',
          items: [
            { text: 'Git 配置', link: '/guide/git' },
            { text: 'SSH 配置', link: '/guide/ssh-setup' }
          ]
        },
        {
          text: '语言与运行时',
          items: [
            { text: 'Node.js 环境', link: '/guide/nodejs-environment' },
            {
              text: 'Python 环境',
              collapsed: false,
              items: [
                { text: '总览', link: '/guide/python-environment' },
                { text: 'uv 与项目', link: '/guide/python-uv' },
                { text: 'Notebook', link: '/guide/python-notebook' },
                { text: '工具与调试', link: '/guide/python-tooling' }
              ]
            },
            { text: 'Go 环境', link: '/guide/go-environment' },
            { text: 'Java 环境', link: '/guide/java-environment' },
            { text: 'Rust 环境', link: '/guide/rust-environment' },
            { text: '其他语言', link: '/guide/other-languages' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/polaris-dxz/dx' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present XiZhi'
    },

    search: {
      provider: 'local'
    },

    // 编辑链接配置
    editLink: {
      pattern: 'https://github.com/polaris-dxz/dx/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 最后更新时间配置
    lastUpdated: {
      text: '最后更新'
    }
  }
})
