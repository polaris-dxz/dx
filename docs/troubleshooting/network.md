---
title: 网络和代理问题
description: 网络连接和代理配置问题排查和解决方案
---

# 网络和代理问题

本章节汇总了网络连接和代理配置过程中可能遇到的问题及其解决方案。

## 📋 问题分类

- [包管理器镜像问题](#包管理器镜像问题)
- [Git 连接问题](#git-连接问题)
- [代理配置问题](#代理配置问题)
- [DNS 解析问题](#dns-解析问题)
- [防火墙问题](#防火墙问题)

## 1. 包管理器镜像问题 {#包管理器镜像问题}

### npm 安装包失败

#### 问题描述
```bash
npm ERR! network timeout at: https://registry.npmjs.org/package-name
```

#### 解决方案
```bash
# 配置淘宝镜像
npm config set registry https://registry.npmmirror.com
```

```bash
# 使用 nrm 切换镜像
nrm use taobao
```

```bash
# 配置代理
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
```

### pnpm 安装包失败

#### 解决方案
```bash
# 配置淘宝镜像
pnpm config set registry https://registry.npmmirror.com
```

```bash
# 配置代理
pnpm config set proxy http://127.0.0.1:7890
pnpm config set https-proxy http://127.0.0.1:7890
```

### pip 安装包失败

#### 解决方案
```bash
# 配置国内镜像
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

```bash
# 使用代理安装
pip install --proxy http://127.0.0.1:7890 package_name
```

### Cargo 下载慢

#### 解决方案
```bash
# 配置国内镜像
mkdir -p ~/.cargo
```

```toml
# ~/.cargo/config
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = "ustc"

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```

## 2. Git 连接问题 {#git-连接问题}

### SSH 连接失败

#### 问题描述
```bash
ssh: connect to host github.com port 22: Connection refused
```

#### 解决方案
```bash
# 使用 HTTPS 替代 SSH
git remote set-url origin https://github.com/username/repo.git
```

```bash
# 或者配置 SSH 使用 443 端口
echo 'Host github.com
    Hostname ssh.github.com
    Port 443
    User git' >> ~/.ssh/config
```

```bash
# 测试 SSH 连接
ssh -T git@github.com
```

### Git 克隆失败

#### 解决方案
```bash
# 配置代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

```bash
# 使用浅克隆
git clone --depth 1 https://github.com/username/repo.git
```

```bash
# 配置 Git 镜像
git config --global url."https://github.com.cnpmjs.org/".insteadOf "https://github.com/"
```

### GitHub 访问慢

#### 解决方案
```bash
# 配置 hosts 文件
echo "140.82.114.4 github.com" | sudo tee -a /etc/hosts
echo "140.82.114.4 gist.github.com" | sudo tee -a /etc/hosts
```

```bash
# 使用 GitHub 镜像
git config --global url."https://hub.fastgit.xyz/".insteadOf "https://github.com/"
```

#### 网络加速服务
如果以上方法仍然无法解决 GitHub 访问问题，可以考虑使用专业的网络加速服务：

- **[桔子云](https://juziyun996.xyz/auth/register?code=3Lnr)** - 专业的 SSR/V2Ray 机场服务
- **[桔子云项目](https://github.com/longbinlai/juzicloud)** - 桔子云官方项目地址和最新官网信息

这些服务可以帮助解决网络连接问题，提供稳定的访问体验。

## 3. 代理配置问题 {#代理配置问题}

### 系统代理配置

#### macOS
```bash
# 设置系统代理
networksetup -setwebproxy "Wi-Fi" 127.0.0.1 7890
networksetup -setsecurewebproxy "Wi-Fi" 127.0.0.1 7890
networksetup -setsocksfirewallproxy "Wi-Fi" 127.0.0.1 7890
```

```bash
# 设置环境变量
echo 'export https_proxy=http://127.0.0.1:7890' >> ~/.zshrc
echo 'export http_proxy=http://127.0.0.1:7890' >> ~/.zshrc
echo 'export all_proxy=socks5://127.0.0.1:7890' >> ~/.zshrc
```

#### Linux
```bash
# 设置环境变量
echo 'export https_proxy=http://127.0.0.1:7890' >> ~/.bashrc
echo 'export http_proxy=http://127.0.0.1:7890' >> ~/.bashrc
echo 'export all_proxy=socks5://127.0.0.1:7890' >> ~/.bashrc
```

#### Windows
```powershell
# 设置环境变量
$env:https_proxy = "http://127.0.0.1:7890"
$env:http_proxy = "http://127.0.0.1:7890"
$env:all_proxy = "socks5://127.0.0.1:7890"
```

### 代理工具配置

#### Clash 配置
```yaml
# ~/.config/clash/config.yaml
mixed-port: 7890
allow-lan: true
mode: rule
log-level: info
external-controller: :9090
```

#### V2Ray 配置
```json
{
  "inbounds": [{
    "port": 7890,
    "protocol": "http",
    "settings": {
      "timeout": 300
    }
  }],
  "outbounds": [{
    "protocol": "vmess",
    "settings": {
      "vnext": [{
        "address": "your-server.com",
        "port": 443,
        "users": [{
          "id": "your-uuid",
          "alterId": 64
        }]
      }]
    }
  }]
}
```

## 4. DNS 解析问题 {#dns-解析问题}

### DNS 解析失败

#### 问题描述
```bash
nslookup github.com
;; connection timed out; no servers could be reached
```

#### 解决方案
```bash
# 配置 DNS 服务器
echo 'nameserver 8.8.8.8' | sudo tee /etc/resolv.conf
echo 'nameserver 8.8.4.4' | sudo tee -a /etc/resolv.conf
```

```bash
# 或者使用国内 DNS
echo 'nameserver 223.5.5.5' | sudo tee /etc/resolv.conf
echo 'nameserver 223.6.6.6' | sudo tee -a /etc/resolv.conf
```

### hosts 文件配置

#### 解决方案
```bash
# 备份 hosts 文件
sudo cp /etc/hosts /etc/hosts.backup
```

```bash
# 添加常用域名
echo "140.82.114.4 github.com" | sudo tee -a /etc/hosts
echo "140.82.114.4 gist.github.com" | sudo tee -a /etc/hosts
echo "151.101.184.133 raw.githubusercontent.com" | sudo tee -a /etc/hosts
```

## 5. 防火墙问题 {#防火墙问题}

### 防火墙阻止连接

#### macOS
```bash
# 检查防火墙状态
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
```

```bash
# 允许应用通过防火墙
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Applications/AppName.app
```

#### Linux
```bash
# 检查防火墙状态
sudo ufw status
```

```bash
# 允许端口通过防火墙
sudo ufw allow 7890
```

#### Windows
```powershell
# 检查防火墙状态
Get-NetFirewallProfile
```

```powershell
# 允许应用通过防火墙
New-NetFirewallRule -DisplayName "Allow App" -Direction Inbound -Program "C:\path\to\app.exe" -Action Allow
```

## 🔍 网络诊断工具

### 基础网络测试
```bash
# 测试网络连接
ping google.com
```

```bash
# 测试 DNS 解析
nslookup github.com
```

```bash
# 测试端口连接
telnet github.com 443
```

### 代理测试
```bash
# 测试代理连接
curl -x http://127.0.0.1:7890 https://httpbin.org/ip
```

```bash
# 测试 SOCKS 代理
curl --socks5 127.0.0.1:7890 https://httpbin.org/ip
```

### 网络工具
```bash
# 安装网络工具
brew install mtr
brew install traceroute
```

```bash
# 使用 mtr 诊断网络
mtr github.com
```

```bash
# 使用 traceroute 追踪路由
traceroute github.com
```

## ✅ 验证网络配置

完成网络配置后，验证以下连接是否正常：

```bash
# 测试基本网络连接
ping -c 3 google.com
```

```bash
# 测试 GitHub 连接
ssh -T git@github.com
```

```bash
# 测试包管理器连接
npm ping
```

```bash
# 测试代理连接
curl -x http://127.0.0.1:7890 https://httpbin.org/ip
```

## 🎯 网络优化建议

### 提高下载速度
- 使用国内镜像源
- 配置合适的代理
- 使用 CDN 加速

### 改善连接稳定性
- 配置备用 DNS 服务器
- 使用多个代理节点
- 定期更新 hosts 文件

### 安全考虑
- 使用 HTTPS 连接
- 验证代理服务器安全性
- 定期更新网络工具

---

**其他问题？** 查看 [环境配置问题](./environment.md) 或 [权限和系统问题](./permissions.md)！ 