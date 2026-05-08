---
title: 编程语言环境
description: 各种编程语言环境配置指南
---

# 编程语言环境

本章节将指导你配置各种编程语言的开发环境。请参阅各语言专门的文档：

## 📋 环境清单

- [Node.js 环境](./nodejs-environment.md) — 使用 fnm 管理
- [Python 环境](./python-environment.md) — 使用 uv 管理
- [Go 环境](./go-environment.md)
- [Java 环境](./java-environment.md)
- [Rust 环境](./rust-environment.md)

## 快速开始

### Node.js
```bash
brew install fnm
fnm install lts-latest
fnm default lts-latest
```

### Python
```bash
brew install uv
uv python install 3.11
```

### Go
```bash
brew install go
```

### Java (按需)
```bash
brew install openjdk
```

### Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

---

请根据你的需求选择对应的语言文档进行配置。