---
title: Notebook（Jupyter）
description: 用 uv 安装 JupyterLab / Notebook 与 ipykernel
---

# Notebook（Jupyter）

本模块说明在 **uv 管理的项目**里安装 **JupyterLab**、经典 **Jupyter Notebook**，以及把当前环境注册为内核。若尚未安装 uv 或创建项目，请先完成 [uv 与项目](./python-uv.md)。

## 1. 安装依赖

在**项目根目录**执行（与 `pyproject.toml` 同级）：

```bash
uv add jupyterlab notebook ipykernel
```

## 2. 启动界面

- **JupyterLab**（推荐）：

```bash
uv run jupyter lab
```

- 经典 **Notebook**：

```bash
uv run jupyter notebook
```

浏览器会打开对应界面；端口与 token 以终端输出为准。

## 3. 注册当前项目为内核

若希望在 Jupyter 里选择「当前虚拟环境」作为内核：

```bash
uv run python -m ipykernel install --user --name=myproject --display-name="Python (myproject)"
```

将 `myproject` 与展示名改成你的项目名。之后在 Notebook 里 **Kernel → Change kernel** 即可切换。

## 4. 验证

```bash
uv run jupyter --version
```

## 相关模块

- [uv 与项目](./python-uv.md) — Python 版本与 `uv sync`  
- [工具与调试](./python-tooling.md) — VS Code 与 Jupyter 扩展（可选）  
- [← Python 总览](./python-environment.md)
