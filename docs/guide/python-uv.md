---
title: uv 与项目
description: 安装 uv、管理 Python 版本与项目依赖
---

# uv 与项目

本模块介绍如何用 **[uv](https://docs.astral.sh/uv/)** 安装与管理 Python、创建虚拟环境、维护 `pyproject.toml` / `uv.lock`。Notebook 见 [Notebook](./python-notebook.md)；开发工具与编辑器见 [工具与调试](./python-tooling.md)。

## 1. 安装 uv

### macOS / Linux

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

安装完成后按提示重启终端，或执行安装脚本输出的 `source` 命令，使 `uv` 在 `PATH` 中可用。

### Windows（PowerShell）

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### 验证

```bash
uv --version
```

## 2. 国内镜像（可选）

需要加速从 PyPI 下载时，可设置索引地址（任选其一）：

```bash
# 清华源示例（当前终端会话）
export UV_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple
```

也可在项目的 `pyproject.toml` 里为 `tool.uv` 配置 `index-url`，参见 [uv 文档：索引](https://docs.astral.sh/uv/configuration/indexes/)。

## 3. 安装与管理 Python 版本

```bash
# 查看可安装版本
uv python list

# 安装指定版本（示例：3.12）
uv python install 3.12

# 在项目目录固定版本时，常用 pyproject.toml 中 requires-python，或用：
uv python pin 3.12
```

Windows 下命令相同（在已安装 uv 的终端中执行）。

## 4. 项目与虚拟环境

### 新建项目

```bash
mkdir myapp && cd myapp
uv init
```

会生成 `pyproject.toml`（及可选的 `README.md`）。

### 创建虚拟环境

```bash
uv venv
```

默认在项目下创建 `.venv`。激活方式：

- **macOS / Linux**：`source .venv/bin/activate`
- **Windows**：`.venv\Scripts\activate`

不激活也可直接用 `uv run` 在环境内执行命令（推荐）。

### 添加依赖

```bash
uv add requests
uv add --dev ruff pytest
```

会更新 `pyproject.toml` 与 `uv.lock`，并安装到当前项目的虚拟环境。

### 同步环境（拉代码后）

```bash
uv sync
```

## 可选：其他工作方式

若团队仍使用 **pyenv**、纯 **pip + venv** 或 **pip-tools**，可与其它教程对照；新项目更推荐 **uv + `pyproject.toml`**。

## 相关模块

- [Notebook](./python-notebook.md) — JupyterLab / Notebook  
- [工具与调试](./python-tooling.md) — 开发依赖、`.env`、VS Code  
- [← Python 总览](./python-environment.md)
