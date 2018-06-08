---
title:  在windows上安装ubuntu（linux）
date: 2018-03-30 21:55
categories: "windows"
tags: '电脑'
---

## 简单搞定windows运行ubuntu
<!-- more -->

#### 之前在自己的笔记本上安装虚拟机运行linux，实在是受不了，太卡了，(⊙o⊙)…
#### 后来发现windows上可以直接运行ubuntu，感觉春天来了，下面就来说说安装ubuntu过程。

### 首先你的系统需要win10最新版（必须条件）
如果不是最新版，请点击：设置-->更新和安全-->windows更新. 来更新你的系统
或者使用微软官网上面的<a href="https://www.microsoft.com/zh-cn/software-download/windows10">微软易用</a>来进行升级
### 然后打开你的应用商店，Microsoft Store, 然后搜索应用ubuntu，然后点击获取。
### 下载完成之后打开你的windows Powershell（不是cmd），然后输入以下命令
``` bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
然后打开你下载好的ubuntu
此时ubuntu就会初始化一会儿，一两分钟吧（喝杯茶）
然后会让你设置用户名和密码，照做就是了
喏，已经成功安装ubuntu了。

### 如果你在windows Powershell中输入以上命令失败的话，可以换如下方法
#### 1.打开windows10开发人员模式，打开步骤为：设置-->更新和安全-->针对开发人员，点击开发人员模式打开即可，具体如图：
![Alt text](/images/win10-linux01.png)
![Alt text](/images/win10-linux02.png)
#### 2.在控制面板中添加linux子系统，安装步骤为：控制面板-->程序-->启用或关闭windows功能，勾选”适用于windows的linux的子系统“，点击确定
![Alt text](/images/win10-linux03.png)
![Alt text](/images/win10-linux04.png)
![Alt text](/images/win10-linux05.png)
#### 3.然后重启你的电脑
#### 4.打开ubuntu，如果出现installing...什么什么的就代表成功了

接下来就可以安装node了

``` bash
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```
然后重启终端，使用nvm安装node，执行以下命令
``` bash
nvm install stable
```

此时node和npm就是最新版本了。
很简单，嘻嘻


