---
title: 环境变量配置
description: PATH、Shell 配置与项目 .env 的区别与常用写法
lastUpdated: true
---

# 环境变量配置

新电脑上装完工具后，经常要处理三类「看起来像配置」的东西，容易混在一起：

| 类型 | 作用范围 | 典型用途 |
|------|----------|----------|
| **系统 / 登录 Shell 环境变量** | 当前用户（或全系统）每次打开终端继承 | `PATH`、`JAVA_HOME`、`HTTP_PROXY` |
| **当前终端会话** | 仅本次终端窗口 | 临时覆盖镜像源、调试开关 |
| **项目里的 `.env` 文件** | 仅被你的应用代码（或构建工具）读取 | 数据库连接串、API Key（**勿提交到 Git**） |

下面按平台说明前两类；项目 `.env` 在 Node / Python 等文档里会结合框架再写，这里只讲通用原则。

## 1. PATH 是什么

`PATH` 是操作系统用来**查找可执行文件**的目录列表。命令行输入 `git`、`node` 时，系统会按顺序在这些目录里找同名程序。

- **macOS / Linux**：多个路径用 `:` 分隔，例如 `/usr/local/bin:/usr/bin`。
- **Windows**：多个路径用 `;` 分隔。

安装 Homebrew、语言 SDK、自己放到 `~/bin` 的工具时，往往需要把新目录**追加或前置**到 `PATH`。

### 查看当前 PATH

**macOS / Linux（bash/zsh）：**

```bash
echo $PATH
```

**Windows（PowerShell）：**

```powershell
$env:PATH -split ';'
```

## 2. macOS / Linux：写进 Shell 配置文件

常用 Shell 为 **zsh**（macOS 默认）或 **bash**。变量要**持久化**，应写入对应配置文件，然后重开终端或 `source`：

| 文件 | 常见场景 |
|------|----------|
| `~/.zshrc` | zsh 每次启动交互式终端时加载（最常用） |
| `~/.bashrc` | bash 非登录交互式终端 |
| `~/.profile` / `~/.zprofile` | 登录 Shell（依发行版与终端是否「登录 Shell」而异） |

示例：把用户目录下的 `bin` 放进 PATH（与 [环境安装](./environment-setup.md) 各分册中的写法一致）：

```bash
export PATH="$HOME/bin:$HOME/.local/bin:$PATH"
```

将 `export VAR=value` 追加到 `~/.zshrc` 后：

```bash
source ~/.zshrc
```

代理等也可在此设置（按需）：

```bash
export HTTPS_PROXY=http://127.0.0.1:7890
export HTTP_PROXY=http://127.0.0.1:7890
```

## 3. Windows：用户环境变量与 PowerShell

### 图形界面

1. **设置 → 系统 → 关于 → 高级系统设置 → 环境变量**  
2. 在「用户变量」或「系统变量」里编辑 `Path`，添加例如 `C:\Users\你的用户名\bin`。  
3. **新开**终端后生效。

### PowerShell（当前用户持久化，示例）

将用户目录加入 PATH（需自行确认路径写法）：

```powershell
[Environment]::SetEnvironmentVariable(
  "Path",
  $env:Path + ";$HOME\bin",
  "User"
)
```

仅**当前窗口**临时设置：

```powershell
$env:PATH = "$env:PATH;C:\path\to\tools"
```

## 4. 项目中的 `.env` 文件

- 放在**项目根目录**，供 Node（`dotenv`）、Python（`python-dotenv`）等在**运行时**加载。  
- **不要**把含密钥的 `.env` 提交到 Git；仓库里可放 `.env.example` 只写变量名与假值。  
- 与「系统环境变量」的区别：**IDE / 终端里 `export` 的东西不会自动写进 `.env`**，除非你用手拷贝或工具同步。

更具体的示例见：

- [Node.js 环境配置](./nodejs-environment.md)（`.env` 与 VS Code `envFile`）  
- [Python · 工具与调试](./python-tooling.md)（`python-dotenv`）

## 5. 与 VS Code / Cursor 的配合

在 `launch.json` 里可用 `envFile` 指向项目 `.env`，调试时注入变量，例如：

```json
"envFile": "${workspaceFolder}/.env"
```

解释器 / 终端使用的 `PATH` 仍以**系统 + Shell 配置**为准；`.env` 主要服务**被调试的进程**。

## 6. 验证与排查

```bash
# 某个命令在哪
which git
command -v node
```

```bash
# 查看单个变量
echo $HOME
```

**Windows（PowerShell）：**

```powershell
Get-Command git
$env:USERNAME
```

若「装好了但命令找不到」，优先检查：**PATH 是否包含该可执行文件所在目录**、**是否重开了终端**、**是否装在了另一套 Shell 的配置文件里**。

更细的故障排查见 [问题排查 · 环境配置问题](/troubleshooting/environment) 与 [Shell 和编辑器问题](/troubleshooting/shell-editor)。

## 相关文档

- [环境安装](./environment-setup.md) — 各系统 PATH 示例  
- [Shell 和编辑器](./shell-editor-setup.md) — 终端与提示符  
- [Git 配置](./git.md) — 凭证与代理有时也依赖环境变量  

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。
