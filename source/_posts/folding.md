---
title: folding折叠
date: 2021-02-08 11:35
# swiper: true
categories: 前端
tags: [tag]
# top: true
img: https://pic4.zhimg.com/80/v2-3b4ca49ff4fc567faa76ce6f02cffac9_1440w.jpg?source=1940ef5c
toc: false
bgImg: https://pic3.zhimg.com/80/v2-e5c15010b8ba4608a1974403a02a2da0_1440w.webp
---

{% title h2, 基本 %}

{% folding 查看图片测试 %}
  ![](https://pic4.zhimg.com/80/v2-5e0b1aaa1994f6d7cb9aac94a6f4e0b3_1440w.jpg)
{% endfolding %}
### 上述事例代码
```bash
{% folding 查看图片测试 %}
  ![](https://pic4.zhimg.com/80/v2-5e0b1aaa1994f6d7cb9aac94a6f4e0b3_1440w.jpg)
{% endfolding %}
```

{% title h2, cyan青色-默认打开 %}
{% folding cyan open, 查看默认打开的折叠框 %}

  这是一个默认打开的折叠框。

{% endfolding %}
### 上述事例代码
```bash
{% folding cyan open, 查看默认打开的折叠框 %}

  这是一个默认打开的折叠框。

{% endfolding %}
```
{% title h2, 查看代码 %}
{% folding green, 查看代码测试 %}
```bash
npm install xxx
```
{% endfolding %}
### 上述事例代码
```bash
{% folding green, 查看代码测试 %}
这里写代码高亮部分
{% endfolding %}
```

{% title h2, 查看列表 %}
{% folding yellow, 查看列表测试 %}

  - haha
  - hehe

{% endfolding %}
###  上述事例代码
```bash
{% folding yellow, 查看列表测试 %}

  - haha
  - hehe

{% endfolding %}
```
{% title h2, 查看嵌套 %}
{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://image.dbbqb.com/202101221115/7cdd741907c2ea150d054d24c4da6594/4d0G' ></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
###  上述事例代码
```bash
{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://image.dbbqb.com/202101221115/7cdd741907c2ea150d054d24c4da6594/4d0G' ></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```