---
title: lineImage标签
date: 2021-02-08 11:35
# swiper: true
swiperImg: https://cdn.jsdelivr.net/gh/mirai-mamori/Self-Random-Webp@1.0.0/pc/background6.webp
categories: 前端
tags: [tag]
# top: true
swiperDesc: '上述事例代码上述事例代码上述事例代码上述事例代码上述事例代码'
tocOpen: false
img: https://pic2.zhimg.com/80/v2-1678d94c8b4e6be640584c2dabef1586_1440w.jpg?source=1940ef5c
bgImg: https://pic1.zhimg.com/80/v2-e8d421b312104a36195565ab606a8be8_1440w.jpg
---
{% title h2, 段落中插入图片 %}
这是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif %} 一段话。

这又是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif, height=40px %} 一段话。

这又是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif, height=100px %} 一段话。

### 上述事例代码
```bash
这是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif %} 一段话。

这又是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif, height=40px %} 一段话。

这又是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif, height=100px %} 一段话。
```
{% title h2, 自定义图片并添加描述 %}

{% image https://pic1.zhimg.com/80/v2-5fe6be356ddda4afe6063b0682edfead_1440w.jpg?source=1940ef5c, alt=自定义图片 %}
### 上述事例代码
```bash
{% image https://pic1.zhimg.com/80/v2-5fe6be356ddda4afe6063b0682edfead_1440w.jpg?source=1940ef5c, alt=自定义图片 %}
```
{% title h2, 指定宽度 %}
{% image https://pic3.zhimg.com/80/v2-08d7fdf0201e560c22a2e9d9c2c040f6_1440w.jpg?source=1940ef5c, width=400px, alt=指定宽度 %}
### 上述事例代码
```bash
{% image https://pic3.zhimg.com/80/v2-08d7fdf0201e560c22a2e9d9c2c040f6_1440w.jpg?source=1940ef5c, width=400px, alt=指定宽度 %}
```
{% title h2, 设置占位背景色 %}
{% image  https://pic3.zhimg.com/80/v2-c18a3b0f2e82533d6c47e72e085aca0b_1440w.jpg?source=1940ef5c, width=400px, bg=#1D0C04, alt=设置占位背景色 %}
### 上述事例代码
```bash
{% image  https://pic3.zhimg.com/80/v2-c18a3b0f2e82533d6c47e72e085aca0b_1440w.jpg?source=1940ef5c, width=400px, bg=#1D0C04, alt=设置占位背景色 %}
```