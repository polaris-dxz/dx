import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DX",
  description: "开发者体验 - 新电脑开发环境配置指南",
  
  // 自定义域名配置
  base: '/',
  
  // SEO 配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: '新电脑开发环境配置指南 - 让开发更高效' }],
    ['meta', { name: 'keywords', content: '开发环境,配置指南,开发者体验,DX,新电脑配置' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '完整指南', link: '/guide/' },
      { text: '问题解决', link: '/guide/troubleshooting' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '完整指南', link: '/guide/' },
          { text: '环境安装', link: '/guide/environment-setup' },
          { text: '开发工具', link: '/guide/development-tools' },
          { text: 'Shell 和编辑器', link: '/guide/shell-editor-setup' },
          { text: '浏览器插件', link: '/guide/browser-extensions' },
          { text: 'SSH 配置', link: '/guide/ssh-setup' },
          { text: '问题解决', link: '/guide/troubleshooting' }
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
    ],

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
