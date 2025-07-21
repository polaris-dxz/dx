---
title: Python 环境配置
description: Python 开发环境配置指南
---

# Python 环境配置

本章节将指导你配置 Python 开发环境，包括 Python 安装、虚拟环境管理、包管理器配置等。

## 📋 配置清单

- Python 安装
- 虚拟环境管理
- 包管理器配置
- 开发工具安装
- 项目配置
- 验证安装

## 1. 安装 Python

### 使用 pyenv 安装 (推荐)

#### macOS/Linux
```bash
# 安装 pyenv
curl https://pyenv.run | bash
```

```bash
# 添加到 shell 配置
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
# 检查 pyenv 命令是否存在，若不存在则将 pyenv 的 bin 目录加入 PATH 环境变量
#    - `command -v pyenv` 检测 pyenv 是否可用
#    - `>/dev/null` 将输出重定向到空设备（不显示消息）
#    - `||` 如果左侧命令失败（返回非0），则执行右侧命令
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
# 初始化 pyenv 的路径配置（兼容性处理，确保 shell 能正确找到 pyenv）
#    - `--path` 选项仅设置必要的 PATH 变量，不加载其他功能
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
# 完全初始化 pyenv，启用所有功能（包括 shims 和自动补全）
#    - 会设置 pyenv 的 shims 目录到 PATH 最前面
#    - 启用 rehash 和命令补全等功能
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

```bash
# 重新加载配置
source ~/.zshrc
```

```bash
# 安装最新 Python 版本
pyenv install 3.11.0
```

```bash
# 设置全局 Python 版本
pyenv global 3.11.0
```

#### Windows
```powershell
# 使用 Chocolatey 安装 pyenv-win
choco install pyenv-win
```

```powershell
# 安装 Python 版本
pyenv install 3.11.0
```

```powershell
# 设置全局 Python 版本
pyenv global 3.11.0
```

### 直接安装

#### macOS
```bash
# 使用 Homebrew 安装
brew install python@3.11
```

#### Windows
```powershell
# 使用 Chocolatey 安装
choco install python
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

## 2. 配置包管理器

### 配置 pip 镜像

#### macOS/Linux
```bash
# 设置清华镜像
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

```bash
# 设置阿里云镜像
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

#### Windows
```powershell
# 设置清华镜像
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

```powershell
# 设置阿里云镜像
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

### 升级 pip

#### macOS/Linux
```bash
# 升级 pip
python -m pip install --upgrade pip
```

#### Windows
```powershell
# 升级 pip
python -m pip install --upgrade pip
```

## 3. 虚拟环境管理

### 安装虚拟环境工具

#### macOS/Linux
```bash
# 安装 virtualenv
pip install virtualenv
```

```bash
# 安装 virtualenvwrapper
pip install virtualenvwrapper
```

#### Windows
```powershell
# 安装 virtualenv
pip install virtualenv
```

```powershell
# 安装 virtualenvwrapper-win
pip install virtualenvwrapper-win
```

### 创建虚拟环境

#### 使用 venv (Python 3.3+)

#### macOS/Linux
```bash
# 创建虚拟环境
python -m venv myproject
```

```bash
# 激活虚拟环境
source myproject/bin/activate
```

```bash
# 退出虚拟环境
deactivate
```

#### Windows
```powershell
# 创建虚拟环境
python -m venv myproject
```

```powershell
# 激活虚拟环境
myproject\Scripts\activate
```

```powershell
# 退出虚拟环境
deactivate
```

#### 使用 virtualenv

#### macOS/Linux
```bash
# 创建虚拟环境
virtualenv myproject
```

```bash
# 激活虚拟环境
source myproject/bin/activate
```

```bash
# 退出虚拟环境
deactivate
```

#### Windows
```powershell
# 创建虚拟环境
virtualenv myproject
```

```powershell
# 激活虚拟环境
myproject\Scripts\activate
```

```powershell
# 退出虚拟环境
deactivate
```

## 4. 安装开发工具

### 代码质量工具

#### macOS/Linux
```bash
# 安装 flake8
pip install flake8
```

```bash
# 安装 black
pip install black
```

```bash
# 安装 isort
pip install isort
```

```bash
# 安装 mypy
pip install mypy
```

```bash
# 安装 pylint
pip install pylint
```

#### Windows
```powershell
# 安装 flake8
pip install flake8
```

```powershell
# 安装 black
pip install black
```

```powershell
# 安装 isort
pip install isort
```

```powershell
# 安装 mypy
pip install mypy
```

```powershell
# 安装 pylint
pip install pylint
```

### 测试工具

#### macOS/Linux
```bash
# 安装 pytest
pip install pytest
```

```bash
# 安装 pytest-cov
pip install pytest-cov
```

```bash
# 安装 pytest-mock
pip install pytest-mock
```

#### Windows
```powershell
# 安装 pytest
pip install pytest
```

```powershell
# 安装 pytest-cov
pip install pytest-cov
```

```powershell
# 安装 pytest-mock
pip install pytest-mock
```

### 开发框架

#### macOS/Linux
```bash
# 安装 Django
pip install django
```

```bash
# 安装 Flask
pip install flask
```

```bash
# 安装 FastAPI
pip install fastapi uvicorn
```

```bash
# 安装 Jupyter
pip install jupyter
```

#### Windows
```powershell
# 安装 Django
pip install django
```

```powershell
# 安装 Flask
pip install flask
```

```powershell
# 安装 FastAPI
pip install fastapi uvicorn
```

```powershell
# 安装 Jupyter
pip install jupyter
```

## 5. 项目配置

### 创建 requirements.txt

#### macOS/Linux
```bash
# 创建 requirements.txt
touch requirements.txt
```

```bash
# 生成依赖列表
pip freeze > requirements.txt
```

#### Windows
```powershell
# 创建 requirements.txt
New-Item -Path requirements.txt -ItemType File
```

```powershell
# 生成依赖列表
pip freeze > requirements.txt
```

### 安装项目依赖

#### macOS/Linux
```bash
# 安装依赖
pip install -r requirements.txt
```

```bash
# 安装开发依赖
pip install -r requirements-dev.txt
```

#### Windows
```powershell
# 安装依赖
pip install -r requirements.txt
```

```powershell
# 安装开发依赖
pip install -r requirements-dev.txt
```

## 6. 环境变量配置

### 创建 .env 文件

#### macOS/Linux
```bash
# 创建 .env 文件
touch .env
```

```bash
# 创建 .env.example 文件
touch .env.example
```

#### Windows
```powershell
# 创建 .env 文件
New-Item -Path .env -ItemType File
```

```powershell
# 创建 .env.example 文件
New-Item -Path .env.example -ItemType File
```

### 安装 python-dotenv

#### macOS/Linux
```bash
pip install python-dotenv
```

#### Windows
```powershell
pip install python-dotenv
```

## 7. 调试配置

### VS Code 调试配置

创建 `.vscode/launch.json` 文件：

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

## 8. 性能优化

### 配置 pip 缓存

#### macOS/Linux
```bash
# 查看缓存位置
pip cache dir
```

```bash
# 清理缓存
pip cache purge
```

#### Windows
```powershell
# 查看缓存位置
pip cache dir
```

```powershell
# 清理缓存
pip cache purge
```

### 使用 pip-tools

#### macOS/Linux
```bash
# 安装 pip-tools
pip install pip-tools
```

```bash
# 编译依赖
pip-compile requirements.in
```

```bash
# 同步依赖
pip-sync requirements.txt
```

#### Windows
```powershell
# 安装 pip-tools
pip install pip-tools
```

```powershell
# 编译依赖
pip-compile requirements.in
```

```powershell
# 同步依赖
pip-sync requirements.txt
```

## ✅ 验证安装

完成安装后，验证以下工具是否正常工作：

#### macOS/Linux
```bash
# 检查 Python
python --version
```

```bash
# 检查 pip
pip --version
```

```bash
# 检查 pyenv
pyenv --version
```

```bash
# 检查虚拟环境
python -m venv --help
```

```bash
# 检查 Django
django-admin --version
```

```bash
# 检查 Flask
flask --version
```

#### Windows
```powershell
# 检查 Python
python --version
```

```powershell
# 检查 pip
pip --version
```

```powershell
# 检查 pyenv
pyenv --version
```

```powershell
# 检查虚拟环境
python -m venv --help
```

```powershell
# 检查 Django
django-admin --version
```

```powershell
# 检查 Flask
flask --version
```

## 🎉 下一步

Python 环境配置完成后，继续配置其他编程语言环境：

- [Node.js 环境配置](./nodejs-environment.md)
- [Go 环境配置](./go-environment.md)
- [Java 环境配置](./java-environment.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 