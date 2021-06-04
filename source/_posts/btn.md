---
title: 按钮
date: 2021-02-08 11:36
# swiper: true
categories: 前端
tags: [tag]
# top: true
img: https://pic1.zhimg.com/80/v2-1f5fecc916dcb213570e1a79be2a5d65_1440w.jpg?source=1940ef5c
---
{% title h2, 融入段落中按钮 %}
不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn warning, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn info, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn success, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn danger, 按钮, / %} 适合融入段落中。
## 上述实例源码
``` bash
不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn warning, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn info, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn success, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn danger, 按钮, / %} 适合融入段落中。
```
{% title h2, 空心和实心按钮 %}
{% btn hollow, 示例博客, https://baidu.com, fa fa-qq %}
{% btn solid, 示例博客, https://baidu.com, fa fa-weixin %}

## 上述实例源码
``` bash
{% btn hollow, 示例博客, https://baidu.com, fa fa-qq %}
{% btn solid, 示例博客, https://baidu.com, fa fa-weixin %}
```
{% title h2, 大点的按钮和样式 %}
{% btn center large, 开始使用, https://baidu.com, fa fa-download %}

## 上述实例源码
``` bash
{% btn center large, 开始使用, https://baidu.com, fa fa-download %}
```
{% title h2, 环形按钮 %}
{% btn center large round solid, 开始使用, https://baidu.com, fa fa-download %}
## 上述实例源码
``` bash
{% btn center large round solid, 开始使用, https://baidu.com, fa fa-download %}
```
{% title h2, warning等颜色按钮 %}
{% btn large round solid warning, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid info, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid success, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid danger, 开始使用, https://baidu.com, fa fa-download %}
{% btn large solid success, 开始使用, https://baidu.com, fa fa-download %}
## 上述实例源码
```bash
{% btn large round solid warning, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid info, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid success, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid danger, 开始使用, https://baidu.com, fa fa-download %}
{% btn large solid success, 开始使用, https://baidu.com, fa fa-download %}
```
{% title h2, warning等颜色空心按钮 %}
{% btn large warning hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large info hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large success hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large danger hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn success hollow, 开始使用, https://baidu.com, fa fa-download %}
## 上述实例源码
```bash
{% btn large warning hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large info hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large success hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large danger hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn success hollow, 开始使用, https://baidu.com, fa fa-download %}
```
{% title h2, warning等颜色空心环形居中按钮 %}
{% btn large danger hollow center round, 开始使用, https://baidu.com, fa fa-download %}
{% btn danger hollow center round, 开始使用, https://baidu.com, fa fa-download %}
``` markdown
{% btn large danger hollow center round, 开始使用, https://baidu.com, fa fa-download %}
{% btn danger hollow center round, 开始使用, https://baidu.com, fa fa-download %}
```
{% title h2, 带有头像和名称的按钮 %}
{% titleB h3, 一行两个 %}
{% btns circle grid2 %}
  {% cell 草帽海贼团, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/007e3777e7e64c4aae95ae812708a7bf!400x400.jpeg %}
  {% cell 小绵羊, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/4c59f9dd4aae421fae21344aec8c7b60!400x400.jpeg %}
  {% cell 沫兮, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/1b2aec116f0b49c682badc5befd43905!400x400.jpeg %}
  {% cell 凯爹, https://baidu.com, https://p.qqan.com/up/2021-1/16112058848478910.jpg %}
  {% cell 阿离, https://baidu.com, https://p.qqan.com/up/2021-1/16118869719896010.jpg %}
  {% cell 韩信, https://baidu.com, https://p.qqan.com/up/2021-1/16118869704182020.jpg %}
{% endbtns %}
### 上述实例源码
``` bash
{% btns circle grid2 %}
  {% cell 草帽海贼团, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/007e3777e7e64c4aae95ae812708a7bf!400x400.jpeg %}
  {% cell 小绵羊, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/4c59f9dd4aae421fae21344aec8c7b60!400x400.jpeg %}
  {% cell 沫兮, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/1b2aec116f0b49c682badc5befd43905!400x400.jpeg %}
  {% cell 凯爹, https://baidu.com, https://p.qqan.com/up/2021-1/16112058848478910.jpg %}
  {% cell 阿离, https://baidu.com, https://p.qqan.com/up/2021-1/16118869719896010.jpg %}
  {% cell 韩信, https://baidu.com, https://p.qqan.com/up/2021-1/16118869704182020.jpg %}
{% endbtns %}
```
{% titleB h3, 一行三个 %}
{% btns circle grid3 %}
  {% cell QQ头像, https://baidu.com, http://q1.qlogo.cn/g?b=qq&nk=1730241541&s=640 %}
  {% cell 随机动漫头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c1&format=images %}
  {% cell 随机男生头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=a1&format=images %}
  {% cell 随机女生头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=b1&format=images %}
  {% cell 随机动漫女头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c2&format=images %}
  {% cell 随机动漫男头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c3&format=images %}
{% endbtns %}
### 上述实例源码
```bash
{% btns circle grid3 %}
  {% cell QQ头像, https://baidu.com, http://q1.qlogo.cn/g?b=qq&nk=1730241541&s=640 %}
  {% cell 随机动漫头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c1&format=images %}
  {% cell 随机男生头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=a1&format=images %}
  {% cell 随机女生头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=b1&format=images %}
  {% cell 随机动漫女头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c2&format=images %}
  {% cell 随机动漫男头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c3&format=images %}
{% endbtns %}
```
{% titleB h3, 一行四个 %}
{% btns circle grid4 %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
{% endbtns %}
### 上述实例源码
```bash
{% btns circle grid4 %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
{% endbtns %}
```
{% titleB h3, 一行五个 %}
{% btns circle grid5 %}
  {% cell 随机头像, https://baidu.com, https://picsum.photos/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/1/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/2/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/3/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/4/200 %}
{% endbtns %}

{% btns circle grid5 %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
{% endbtns %}
### 上述实例源码
```bash
{% btns circle grid5 %}
  {% cell 随机头像, https://baidu.com, https://picsum.photos/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/1/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/2/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/3/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/4/200 %}
{% endbtns %}

{% btns circle grid5 %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
{% endbtns %}
```

{% titleB h2, 环形图标按钮 %}
{% btns rounded grid5 %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}
### 上述事例代码
```
{% btns rounded grid5 %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}
```

{% titleB h2, 环形图标居中按钮 %}
{% btns rounded grid5 center %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}
### 上述事例代码
```bash
{% btns rounded grid5 center %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}
```
{% titleB h2, 环形图标填充按钮 %}

{% btns rounded grid5 fill %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}
### 上述事例代码
```bash
{% btns rounded grid5 fill %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}
```
{% titleB h2, 圆形图标按钮 %}
{% btns circle center grid5 %}
  <a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
    <i class='fa fa-apple'></i>
    <b>这个是微信</b>
    {% p red, 微信 %}
    <img src='/medias/wx.jpg'>
  </a>
  <a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
    <i class='fa fa-apple'></i>
    <b>这个是支付宝</b>
    {% p green, 支付宝 %}
    <img src='/medias/zfb.jpg'>
  </a>
{% endbtns %}
### 上述示例代码
```bash
{% btns circle center grid5 %}
  <a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
    <i class='fa fa-apple'></i>
    <b>这个是微信</b>
    {% p red, 微信 %}
    <img src='/medias/wx.jpg'>
  </a>
  <a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
    <i class='fa fa-apple'></i>
    <b>这个是支付宝</b>
    {% p green, 支付宝 %}
    <img src='/medias/zfb.jpg'>
  </a>
{% endbtns %}
```