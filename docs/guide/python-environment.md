---
title: Python 环境配置
description: 使用 uv 管理 Python 与依赖，配合 Jupyter Notebook / Lab
---

# Python 环境配置

本章节以 **[uv](https://docs.astral.sh/uv/)** 作为 Python 版本、虚拟环境与依赖管理的主工具，并配合 **Jupyter Notebook / JupyterLab** 做交互式开发与实验。uv 由 Astral 维护，用 Rust 编写，安装与解析依赖都很快。

## 📋 配置清单

- 安装 uv
- 用 uv 安装/切换 Python 版本
- 项目与虚拟环境（`pyproject.toml` / `uv.lock`）
- Notebook（Jupyter）
- 开发工具（可选）
- 验证安装

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

## 5. Notebook（Jupyter）

在**项目内**安装 Jupyter 与内核相关依赖：

```bash
uv add jupyterlab notebook ipykernel
```

- 启动 **JupyterLab**（推荐）：

```bash
uv run jupyter lab
```

- 或经典 **Notebook** 界面：

```bash
uv run jupyter notebook
```

若希望当前项目虚拟环境作为 Jupyter 里的可选内核，可在项目环境中执行：

```bash
uv run python -m ipykernel install --user --name=myproject --display-name="Python (myproject)"
```

之后在 Jupyter 界面里切换内核即可。

## 6. 开发工具（可选）

用 uv 以开发依赖形式安装，例如：

```bash
uv add --dev ruff black pytest
```

需要全局 CLI 工具时，可使用：

```bash
uv tool install ruff
```

详见 [uv tool](https://docs.astral.sh/uv/guides/tools/)。

## 7. 环境变量与 `.env`

创建 `.env` 后，在代码里用 `python-dotenv` 读取时：

```bash
uv add python-dotenv
```

## 8. 调试配置（VS Code）

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

解释器请选择项目下的 `.venv/bin/python`（Windows 为 `.venv\Scripts\python.exe`）。

## ✅ 验证安装

```bash
uv --version
uv run python --version
uv run python -c "import sys; print(sys.executable)"
```

确认 Jupyter：

```bash
uv run jupyter --version
```

## 可选：其他工作方式

若团队仍使用 **pyenv**、纯 **pip + venv** 或 **pip-tools**，可与现有文档或其它教程对照；日常新项目更推荐统一采用 **uv + `pyproject.toml`**，与 Notebook 搭配时依赖与内核也更容易保持一致。

## 🎉 下一步

Python 环境配置完成后，继续配置其他编程语言环境：

- [Node.js 环境配置](./nodejs-environment.md)
- [Go 环境配置](./go-environment.md)
- [Java 环境配置](./java-environment.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。
