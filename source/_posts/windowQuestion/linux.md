---
title:  在windows上安装ubuntu（linux）
date: 2018-03-30 21:55
categories: "windows"
tags: '电脑'
---

### 简单搞定windows运行ubuntu
<!-- more -->

#### 之前在自己的笔记本上安装虚拟机运行linux，实在是受不了，太卡了，(⊙o⊙)…
#### 后来发现windows上可以直接运行ubuntu，感觉春天来了，下面就来说说安装ubuntu过程。

首先你得是win10用户（必须条件）
然后打开你的应用商店，Microsoft Store, 然后搜索应用ubuntu，然后点击获取。
下载完成之后打开你的windows Powershell（不是cmd），然后输入以下命令
``` bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

然后打开你下载好的ubuntu
此时ubuntu就会初始化一会儿，一两分钟吧（喝杯茶）
然后会让你设置用户名和密码，照做就是了
喏，已经成功安装ubuntu了。

接下来就可以安装node了

``` bash
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
nvm install stable
```

此时node和npm就是最新版本了。
很简单，嘻嘻


