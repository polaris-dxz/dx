---
title: Java 环境配置
description: Java 开发环境配置指南
---

# Java 环境配置

本章节将指导你配置 Java 开发环境，包括 JDK 安装、Maven/Gradle 配置、开发工具等。

## 📋 配置清单

- JDK 安装
- 环境变量配置
- 构建工具配置
- 开发工具安装
- 项目配置
- 验证安装

## 1. 安装 JDK

### 使用包管理器安装

#### macOS
```bash
# 使用 Homebrew 安装 OpenJDK
brew install openjdk@17
```

```bash
# 创建符号链接
sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

#### Windows
```powershell
# 使用 Chocolatey 安装 OpenJDK
choco install openjdk17
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-17-jdk
```

### 手动安装

#### macOS
```bash
# 下载 OpenJDK
# 访问: https://adoptium.net/
# 下载 macOS 版本并安装
```

#### Windows
```powershell
# 下载 OpenJDK
# 访问: https://adoptium.net/
# 下载 Windows 版本并安装
```

#### Linux
```bash
# 下载 OpenJDK
wget https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.8%2B7/OpenJDK17U-jdk_x64_linux_hotspot_17.0.8_7.tar.gz
```

```bash
# 解压到 /usr/local
sudo tar -C /usr/local -xzf OpenJDK17U-jdk_x64_linux_hotspot_17.0.8_7.tar.gz
```

## 2. 配置环境变量

### 设置 JAVA_HOME

#### macOS
```bash
# 设置 JAVA_HOME
echo 'export JAVA_HOME=$(/usr/libexec/java_home)' >> ~/.zshrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zshrc
```

```bash
# 重新加载配置
source ~/.zshrc
```

#### Windows
```powershell
# 设置 JAVA_HOME
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-17.0.8.7-hotspot"
$env:PATH += ";$env:JAVA_HOME\bin"
```

```powershell
# 永久设置环境变量
[Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Eclipse Adoptium\jdk-17.0.8.7-hotspot", "User")
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$env:JAVA_HOME\bin", "User")
```

#### Linux
```bash
# 设置 JAVA_HOME
echo 'export JAVA_HOME=/usr/local/jdk-17.0.8+7' >> ~/.bashrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.bashrc
```

```bash
# 重新加载配置
source ~/.bashrc
```

## 3. 安装构建工具

### 安装 Maven

#### macOS
```bash
# 使用 Homebrew 安装 Maven
brew install maven
```

#### Windows
```powershell
# 使用 Chocolatey 安装 Maven
choco install maven
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt install maven
```

### 安装 Gradle

#### macOS
```bash
# 使用 Homebrew 安装 Gradle
brew install gradle
```

#### Windows
```powershell
# 使用 Chocolatey 安装 Gradle
choco install gradle
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt install gradle
```

## 4. 配置 Maven

### 配置 Maven 镜像

#### macOS/Linux
```bash
# 创建 Maven 配置目录
mkdir -p ~/.m2
```

```bash
# 创建 settings.xml
touch ~/.m2/settings.xml
```

```bash
# 配置阿里云镜像
echo '<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
          http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <mirrors>
        <mirror>
            <id>alimaven</id>
            <name>aliyun maven</name>
            <url>https://maven.aliyun.com/repository/public</url>
            <mirrorOf>central</mirrorOf>
        </mirror>
    </mirrors>
</settings>' > ~/.m2/settings.xml
```

#### Windows
```powershell
# 创建 Maven 配置目录
New-Item -Path ~/.m2 -ItemType Directory -Force
```

```powershell
# 创建 settings.xml
New-Item -Path ~/.m2/settings.xml -ItemType File
```

```powershell
# 配置阿里云镜像
@"
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
          http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <mirrors>
        <mirror>
            <id>alimaven</id>
            <name>aliyun maven</name>
            <url>https://maven.aliyun.com/repository/public</url>
            <mirrorOf>central</mirrorOf>
        </mirror>
    </mirrors>
</settings>
"@ | Out-File -FilePath ~/.m2/settings.xml -Encoding UTF8
```

## 5. 安装开发工具

### IDE 工具

#### macOS
```bash
# 安装 IntelliJ IDEA
brew install --cask intellij-idea-ce
```

```bash
# 安装 Eclipse
brew install --cask eclipse-java
```

#### Windows
```powershell
# 安装 IntelliJ IDEA
choco install intellijidea-community
```

```powershell
# 安装 Eclipse
choco install eclipse-java
```

#### Linux
```bash
# 安装 IntelliJ IDEA
sudo snap install intellij-idea-community --classic
```

```bash
# 安装 Eclipse
sudo snap install eclipse --classic
```

### 命令行工具

#### macOS/Linux
```bash
# 安装 Spring Boot CLI
brew install spring-boot
```

```bash
# 安装 Lombok
# 通常通过 Maven 依赖安装
```

#### Windows
```powershell
# 安装 Spring Boot CLI
choco install spring-boot
```

```powershell
# 安装 Lombok
# 通常通过 Maven 依赖安装
```

## 6. 项目配置

### 创建 Maven 项目

#### macOS/Linux
```bash
# 创建项目目录
mkdir myproject
cd myproject
```

```bash
# 创建 Maven 项目
mvn archetype:generate -DgroupId=com.example -DartifactId=myproject -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

#### Windows
```powershell
# 创建项目目录
mkdir myproject
cd myproject
```

```powershell
# 创建 Maven 项目
mvn archetype:generate -DgroupId=com.example -DartifactId=myproject -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

### 创建 Gradle 项目

#### macOS/Linux
```bash
# 创建项目目录
mkdir myproject
cd myproject
```

```bash
# 初始化 Gradle 项目
gradle init --type java-application
```

#### Windows
```powershell
# 创建项目目录
mkdir myproject
cd myproject
```

```powershell
# 初始化 Gradle 项目
gradle init --type java-application
```

## 7. 配置文件

### 创建 .gitignore

#### macOS/Linux
```bash
# 创建 .gitignore 文件
touch .gitignore
```

```bash
# 添加 Java 相关忽略规则
echo "# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*

# IDE files
.idea/
*.iml
.vscode/
*.swp
*.swo

# Maven
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
.mvn/wrapper/maven-wrapper.jar

# Gradle
.gradle/
build/
!gradle/wrapper/gradle-wrapper.jar
!**/src/main/**/build/
!**/src/test/**/build/" > .gitignore
```

#### Windows
```powershell
# 创建 .gitignore 文件
New-Item -Path .gitignore -ItemType File
```

```powershell
# 添加 Java 相关忽略规则
@"
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*

# IDE files
.idea/
*.iml
.vscode/
*.swp
*.swo

# Maven
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
.mvn/wrapper/maven-wrapper.jar

# Gradle
.gradle/
build/
!gradle/wrapper/gradle-wrapper.jar
!**/src/main/**/build/
!**/src/test/**/build/
"@ | Out-File -FilePath .gitignore -Encoding UTF8
```

## 8. 调试配置

### VS Code 调试配置

创建 `.vscode/launch.json` 文件：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Launch Current File",
      "request": "launch",
      "mainClass": "${file}"
    },
    {
      "type": "java",
      "name": "Launch App",
      "request": "launch",
      "mainClass": "com.example.App",
      "projectName": "myproject"
    }
  ]
}
```

## 9. 性能优化

### 配置 JVM 参数

#### macOS/Linux
```bash
# 设置 JVM 内存参数
export JAVA_OPTS="-Xms512m -Xmx2048m -XX:+UseG1GC"
```

#### Windows
```powershell
# 设置 JVM 内存参数
$env:JAVA_OPTS = "-Xms512m -Xmx2048m -XX:+UseG1GC"
```

### 配置 Maven 内存

#### macOS/Linux
```bash
# 设置 Maven 内存
export MAVEN_OPTS="-Xms512m -Xmx2048m"
```

#### Windows
```powershell
# 设置 Maven 内存
$env:MAVEN_OPTS = "-Xms512m -Xmx2048m"
```

## ✅ 验证安装

完成安装后，验证以下工具是否正常工作：

#### macOS/Linux
```bash
# 检查 Java
java --version
```

```bash
# 检查 Javac
javac --version
```

```bash
# 检查 Maven
mvn --version
```

```bash
# 检查 Gradle
gradle --version
```

```bash
# 检查 JAVA_HOME
echo $JAVA_HOME
```

#### Windows
```powershell
# 检查 Java
java --version
```

```powershell
# 检查 Javac
javac --version
```

```powershell
# 检查 Maven
mvn --version
```

```powershell
# 检查 Gradle
gradle --version
```

```powershell
# 检查 JAVA_HOME
echo $env:JAVA_HOME
```

## 🎉 下一步

Java 环境配置完成后，继续配置其他编程语言环境：

- [Node.js 环境配置](./nodejs-environment.md)
- [Python 环境配置](./python-environment.md)
- [Go 环境配置](./go-environment.md)

---

**遇到问题？** 查看 [问题排查](/troubleshooting) 页面。 