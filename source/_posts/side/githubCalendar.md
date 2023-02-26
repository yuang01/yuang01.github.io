---
title: 首页github日历
date: 2023-01-14 23:20
# swiper: true
categories: 侧边栏
tags: [side]
# top: true
img: https://pic4.zhimg.com/v2-0745cf85004a8d53e6b189b3f4a04b7b_b.jpg
bgImg: https://pic2.zhimg.com/v2-13656a105aaa2116cb33a8a70be0b1e9_b.jpg
---
{% title h2, 更改首页github日历 %}
侧边栏那篇文章中有写怎么添加首页github日历，但是那个方法的api挂了。。。又找到一个方法，比较简单。
但是没有之前的强大，还可以。
来自于这个项目：

{% link github日历图片, https://github.com/2016rshah/githubchart-api, https://pic1.zhimg.com/v2-8c7a66c107ee925238b5e0ecb4cf1b58_b.jpg %}

直接一行代码搞定
``` html
<img no-lazy width="100%" hright="300px" src="https://ghchart.rshah.org/42b983/yuang01" alt="yuang01 github" />
```
`https://ghchart.rshah.org/42b983/yuang01`: 42b983代表颜色，yuang01是自己的github名称

{% titleB h2, 展示效果 %}
<img no-lazy width="100%" hright="300px" src="https://ghchart.rshah.org/42b983/yuang01" alt="yuang01 github" />


首页侧边栏这样写就能将github日历加进去了
``` yaml
home_widget:
  - class_name: my_github_container
    id_name: my_github_container
    order: -1
    name: Github日历
    icon: fa-solid fa-calendar-days
    icon_color: '#42b983'
    url: https://github.com/yuang01
    background: '#fff'
    html: '
      <img no-lazy width="100%" hright="300px" src="https://ghchart.rshah.org/42b983/yuang01" alt="yuang01 github" />
    '
```
{% title h2, 其他 %}
顺便说一下，我的首页的微博热搜和历史记录用的也是网上的免费api，可以bing或者谷歌搜索随机免费api等关键字搜索，例如这个网站：
{% link 随机免费api, https://api.vvhan.com/, https://pic2.zhimg.com/v2-13656a105aaa2116cb33a8a70be0b1e9_b.jpg %}