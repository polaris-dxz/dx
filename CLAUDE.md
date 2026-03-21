# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation site (Developer Experience / DX Guide) containing setup guides for development environments. Content is written in Chinese and deployed to https://dx.xizhi.dev via GitHub Pages.

## Commands

```bash
# Install dependencies
pnpm install

# Start development server (hot reload)
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build locally
pnpm docs:preview
```

## Architecture

- **Framework**: VitePress 1.x with Vue 3 theming
- **Package Manager**: pnpm (v10.11.0)
- **Deployment**: GitHub Actions → GitHub Pages (custom domain: dx.xizhi.dev)

### Directory Structure

```
docs/
├── .vitepress/
│   ├── config.mts      # Site configuration (title, sidebar, nav, SEO)
│   ├── theme/          # Custom theme components and styles
│   └── dist/          # Build output (gitignored)
├── guide/             # Main documentation guides
│   ├── environment-setup*.md   # OS-specific setup (macOS, Linux, Windows)
│   ├── nodejs-environment.md
│   ├── python-environment.md
│   ├── git.md
│   ├── ssh-setup.md
│   └── ...
├── troubleshooting/   # Problem-solving guides
├── public/            # Static assets (favicon, custom.css)
└── index.md           # Homepage
```

## Key Patterns

- Documentation uses Chinese markdown with VitePress frontmatter
- Custom CSS in `docs/public/custom.css` for theme overrides
- Local search is enabled via VitePress's built-in provider
- Edit links point to the GitHub repository
