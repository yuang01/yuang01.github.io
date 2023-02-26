---
title: Note标签
date: 2021-02-08 11:35
# swiper: true
categories: 前端
tags: [tag]
# top: true
img: https://pic2.zhimg.com/80/v2-faf73fcede052da243fef1b36604b8f9_1440w.jpg?source=1940ef5c
bgImg: https://pic2.zhimg.com/v2-63601c753b6389eb93dcafb93a5457ad_b.jpg
---
{% title h2, note演示效果 %}
> markdown默认写法，左边框颜色，随着主题色改变
{% note, 我有一只小毛驴，我从来都不骑。 %}
{% note quote, 适合引用一段话 %}
{% note warning, 这是一个警告 %}
{% note danger, 这是一个错误 %}
{% note success, 这是一个成功 %}
{% note info, 这是一个信息 %}



### 上述事例源码
``` markdown
> markdown默认写法，左边框颜色，随着主题色改变

{% note, 我有一只小毛驴，我从来都不骑。 %}

{% note quote, 适合引用一段话 %}

{% note warning, 这是一个警告 %}

{% note danger, 这是一个错误 %}

{% note success, 这是一个成功 %}

{% note info, 这是一个信息 %}

```
