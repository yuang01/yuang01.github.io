---
title: link标签
date: 2021-02-08 11:35
# swiper: true
swiperImg: '/medias/3.jpg'
categories: 前端
tags: [tag]
# top: true
img: https://pic2.zhimg.com/80/v2-19975cec2eaae0083992a79315bd232b_1440w.jpg?source=1940ef5c
bgImg: https://pic4.zhimg.com/v2-15fd6ff51df5339bdfc8150179303287_b.jpg
---
{% title h2, 超链接标签 %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
### 上述事例代码
```bash
{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
```

{% linkgroup %}
{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
{% endlinkgroup %}
### 上述事例代码
```bash
{% linkgroup %}
{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 点击跳转到百度, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
{% endlinkgroup %}
```

> v2.8.7更新

另一种写法

{% link 点击跳转到百度:: http://www.baidu.com:: https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
``` 
{% link 点击跳转到百度:: http://www.baidu.com:: https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
```