---
title:  创建hexo博客
date: 2018-06-11 17:07
categories: "blog"
tags: '博客'
---
网上很多的技术博客都是采用hexo搭建的，其实并不困难，特别简单
<!-- more -->
#### Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
详情请参照<a href="https://hexo.io/zh-cn/docs/index.html">Hexo官网</a>
### 1.搭建博客第一步需要安装node.js和Git
#### 安装 Git
Windows：下载并安装 <a href="https://git-scm.com/download/win">git</a> 或者通过<a href="https://github.com/waylau/git-for-win">这个网页</a>下载.
Mac：使用 <a href="https://brew.sh/">Homebrew</a>,<a href="https://www.macports.org/">MacPorts</a>：brew install git;或下载 <a href="https://sourceforge.net/projects/git-osx-installer/">安装程序</a> 安装。
Linux (Ubuntu, Debian)：sudo apt-get install git-core
Linux (Fedora, Red Hat, CentOS)：sudo yum install git-core
#### 安装Node.js
安装 Node.js 的最佳方式是使用 <a href="https://github.com/creationix/nvm">nvm</a>
cURL:
``` bash
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```
Wget:
``` bash
wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```
安装完成后，重启终端并执行下列命令即可安装 Node.js
``` bash
nvm install stable
```
##### Windows 用户
对于windows用户来说，建议使用安装程序进行安装。安装时，请勾选Add to PATH选项。
另外，您也可以使用Git Bash，这是git for windows自带的一组程序，提供了Linux风格的shell，在该环境下，您可以直接用上面提到的命令来安装Node.js。打开它的方法很简单，在任意位置单击右键，选择“Git Bash Here”即可。由于Hexo的很多操作都涉及到命令行，您可以考虑始终使用Git Bash来进行操作。

### 2.安装Hexo
#### 所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo。
``` bash
npm install -g hexo-cli
```
### 3.注册github账号
![Alt text](/images/createHexo-01.png)

### 4.新建一个repository，并且将Repository name改为用户名+.github.io，并且勾选initialize
![Alt text](/images/createHexo-02.png)
注意将Repository name改为用户名+.github.io
![Alt text](/images/createHexo-03.png)
勾选initialize
![Alt text](/images/createHexo-04.png)
### 5.进入一个文件夹，然后使用hexo初始化一个文件夹
``` bash 
hexo init YuAngBoy.github.io
```
### 6. 进入初始化文件夹,然后 npm install
``` bash
cd YuAngBoy.github.io
npm install
```
### 7. 在初始化文件(YuAngBoy.github.io)中，找到_config.yml,更改其中的deploy中的repo为自己github新建的仓地址
``` bash
deploy:
  type: git
  repo: https://github.com/YuAngBoy/YuAngBoy.github.io.git
```
### 8. 使用hexo s 在本地运行博客
``` bash
hexo s
```
使用localhost:4000访问本地博客
### 9. 使用如下命令发布博客
``` bash
hexo clean
hexo g
hexo d
```
在hexo d的时候会要你输入github用户名和密码，输入就行了
### 10. 然后使用(用户名.github.io)就可以访问博客了，例如YuAngBoy.github.io访问
