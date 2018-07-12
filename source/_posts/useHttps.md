---
title: Hexo博客使用https
date: 2018-07-12 15:11
categories: "hexo"
tags: 'hexo'
---
# 前言
Hexo+Github+<a href="https://www.cloudflare.com/" target="
_blank">CloudFlare</a>将hexo博客变成Https,简单实现为地址栏增加小绿锁，😄。
<!-- more -->
# 首先前提是你已经购买了域名
#### 其实购买域名挺简单，去阿里云或者腾讯云一搜，然后购买就行了，之前一直是yuangboy.github.io访问hexo博客，将域名绑定到这个地址，就去购买域名的后台解析一下域名就行了。
#### 解析的话就添加三条解析记录，并且在source文件夹下新建CNAME文件。
添加这三条解析
![域名解析](/images/ymjx.png)
再就是在source文件夹下新建一个文件叫做CNAME，然后里面就写自己的域名，例如我的yuang.site就行了
然后部署一下：
``` bash
hexo clean
hexo g
hexo d
```
# 然后就是通过CloudFlare反向代理我们购买的域名，首先注册CloudFlare。
一登进cloudflare官网就会看到这个，然后填写表单注册即可。
![注册cloudflare账号](/images/cloudflare-01.png)
注册成功之后，网页会弹出一个检测DNS的弹框，然后点击最左侧的不要钱的就行了，然后就会跳转到下面这个界面
![配置DNS](/images/cloudflare-2.png)
如果你有上面框出的三个Type和Value的话，就不用管了，如果没有，就添加一下，例如我的这个
# 然后接下来点击最左侧的overview，你就会看到未激活字样，并且会看到两行DNS网址
![overview](/images/cloudflare-3.png)
![DNS网址](/images/cloudflare-4.png)
# 这时候我们就应该到我们购买域名的后台去更改DNS，例如我的就在阿里云后台改
<a href="https://dc.console.aliyun.com/next/index#/batch/dns-modification" target="_blank">点击这个链接跳转到阿里云DNS修改</a>
将上面看到的两行DNS网址，复制到下如下图所示的表单中
![修改DNS](/images/cloudflare-5.png)
# 此时等上两只分钟，overview的状态就会显示active已经激活。
# 然后点击下图中的Page Rules
![Page Rules](/images/cloudflare-3.png)
# 最后我们点击右边的蓝色按钮（Buy More Pages Rules）
免费配置三个Page Rules
第一个：将域名下的所有路径总是使用HTTPS
![将域名下的所有路径总是使用HTTPS](/images/cloudflare-6.png)
第二个：可选，让所有非 WWW 的链接安全地转到带 WWW 的链接： 
![让所有非 WWW 的链接安全地转到带 WWW 的链接](/images/cloudflare-7.png)
第三个 ，可选，这会在 CloudFlare 的 CDN 中缓存你的静态页面：
![在 CloudFlare 的 CDN 中缓存你的静态页面](/images/cloudflare-8.png)
### 到这里我们就可以访问我们的博客，地址栏就会出现小绿标了，😁