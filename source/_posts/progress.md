---
title: 进度条
date: 2021-02-22 11:35
# swiper: true
categories: 前端
tags: [tag]
top: true
img: https://pica.zhimg.com/80/v2-bb080ef299e131a682b0e34440fbbcc3_1440w.jpg
prismjs: solarizedlight
excerpt: '进度条标签'
bgImg: https://pic4.zhimg.com/80/v2-eaa955c7c5a6d8e1a515ac593f791947_1440w.jpg
---
{% title h2, 进度条示例 %}
{% note info, 该标签适用版本为`1.8.1`及以上 %}
{% progress 70 danger 进度条测试 %}
{% progress 60 info 进度条测试 %}
{% progress 60 success 进度条测试 %}
{% progress 60 warning 进度条测试 %}
{% progress 60 primary 进度条测试 %}
自定义颜色(Custom colors)
{% note info, 该标签适用版本为`2.0.7+`及以上 %}
{% progress 60 #000 进度条测试 %}
{% progress 60 #2f54eb 进度条测试 %}
### 上述示例代码
```
{% progress 70 danger 进度条测试 %}
{% progress 60 info 进度条测试 %}
{% progress 60 success 进度条测试 %}
{% progress 60 warning 进度条测试 %}
{% progress 60 primary 进度条测试 %}
自定义颜色(Custom colors)
{% progress 60 #000 进度条测试 %}
{% progress 60 #2f54eb 进度条测试 %}
```

{% title h2, 圆形进度条示例 %}
{% note info, 该标签适用版本为`2.0.7+`及以上 %}

{% progressCircle 70 danger 进度条测试 %}
{% progressCircle 80 info 进度条测试 %}
{% progressCircle 60 success 进度条测试 %}
{% progressCircle 50 warning 进度条测试 %}
{% progressCircle 90 primary 进度条测试 %}
自定义颜色(Custom colors)
{% progressCircle 70 #12e9e9 70% %}
{% progressCircle 70 skyblue 70% %}
### 上述示例代码
```
{% progressCircle 70 danger 进度条测试 %}
{% progressCircle 80 info 进度条测试 %}
{% progressCircle 60 success 进度条测试 %}
{% progressCircle 50 warning 进度条测试 %}
{% progressCircle 90 primary 进度条测试 %}
自定义颜色(Custom colors)
{% progressCircle 70 #12e9e9 70% %}
{% progressCircle 70 skyblue 70% %}
```