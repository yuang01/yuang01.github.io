---
title: 制作简历（关于我）和404页面
date: 2022-07-12 14:08:18
tags: ['简历', '404']
categories: ['简历', '404']
swiper: true
img: https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg
bgImg: https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg
---

## 简历（或者叫关于我页面）
首先在`source`(根目录下的source)文件夹下创建`resume/index.md`文件，然后如下页面写法:
{% link 简历页面, /resume, https://s3-us-west-1.amazonaws.com/files.delesign/assets/condo.svg %}

最底下有源码

## 配置404页面
首先在`source`(根目录下的source)文件夹下创建`404.md`文件, 然后写入：

``` yaml
---
title: '页面未找到'
date: 2019-11-23 21:10:10
onlyTitle: true
toc: false
donate: false
share: false
copyright: false
img: https://pic3.zhimg.com/80/378da4d6e6ac67c5bcd1d63d76f65d81_1440w.jpg?source=1940ef5c
imgTop: false
bgImg: https://pic2.zhimg.com/v2-b19815c3780fe949adcee6693721087d_b.jpg
---
{% p center large, 404 %}
{% p center large, 很抱歉，您访问的页面不存在 %}
{% p center small, 可能是输入地址有误或该地址已被删除 %}

{% btn center large, 返回首页, /, fa fa-home %}
```
本地测试访问：http://localhost:4000/404.html

效果（example）：
{% link 404页面, https://yuang01.github.io/12, https://pic2.zhimg.com/v2-596ae74ed6efb408915dbd3260c22d81_b.jpg %}