---
title: Python 工具与调试
description: 开发工具、环境变量、VS Code 与验证
---

# 工具与调试

本模块介绍在 uv 项目中的**开发依赖**、**`.env`**、**VS Code 调试**与**验收命令**。环境与依赖请先通过 [uv 与项目](./python-uv.md) 配好。

## 1. 开发工具（可选）

用 uv 以开发依赖形式安装，例如：

```bash
uv add --dev ruff black pytest
```

需要全局 CLI 工具时：

```bash
uv tool install ruff
```

详见 [uv tool](https://docs.astral.sh/uv/guides/tools/)。

## 2. 环境变量与 `.env`

创建 `.env` 后，在代码里用 `python-dotenv` 读取：

```bash
uv add python-dotenv
```

## 3. 调试配置（VS Code）

创建 `.vscode/launch.json` 示例：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "python",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "envFile": "${workspaceFolder}/.env"
    }
  ]
}
```

解释器请选择项目下的 `.venv/bin/python`（Windows 为 `.venv\Scripts\python.exe`）。使用 Jupyter 时可安装官方 Python 扩展，便于在 VS Code 中打开 `.ipynb`。

## 4. 验证安装

```bash
uv --version
uv run python --version
uv run python -c "import sys; print(sys.executable)"
```

若已按 [Notebook](./python-notebook.md) 配置 Jupyter：

```bash
uv run jupyter --version
```

## 可选：其他工作方式

若团队仍使用 **pyenv**、纯 **pip + venv** 等，可与其它教程对照。

## 🎉 下一步

Python 环境配置完成后，继续配置其他语言：

- [Node.js 环境配置](./nodejs-environment.md)
- [Go 环境配置](./go-environment.md)
- [Java 环境配置](./java-environment.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。

## 相关模块

- [uv 与项目](./python-uv.md)  
- [Notebook](./python-notebook.md)  
- [← Python 总览](./python-environment.md)
