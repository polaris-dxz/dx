import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DX",
  description: "开发者体验 - 新电脑开发环境配置指南 & 效率工具推荐",
  
  // 自定义域名配置
  base: '/',
  
  // SEO 配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: '新电脑开发环境配置指南 & 效率工具推荐 - 让开发更高效，让生活更有序' }],
    ['meta', { name: 'keywords', content: '开发环境,配置指南,开发者体验,DX,新电脑配置,效率工具,GTD,任务管理,学习笔记' }],
    ['link', { rel: 'stylesheet', href: '/.vitepress/theme/custom.css' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '环境配置', link: '/guide/environment-setup' },
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
          text: '指南',
          items: [
            { text: '环境配置', link: '/guide/environment-setup' },
            { text: '完整指南', link: '/guide/' },
            { text: '开发工具', link: '/guide/development-tools' },
            { text: 'Shell 和编辑器', link: '/guide/shell-editor-setup' },
            { text: '浏览器插件', link: '/guide/browser-extensions' },
            { text: 'SSH 配置', link: '/guide/ssh-setup' }
          ]
        },
        {
          text: '编程语言环境',
          items: [
            { text: 'Node.js 环境', link: '/guide/nodejs-environment' },
            { text: 'Python 环境', link: '/guide/python-environment' },
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
    }
  }
})
