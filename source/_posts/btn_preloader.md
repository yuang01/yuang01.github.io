---
title: 新增酷炫按钮和预加载动画
date: 2023-01-25 20:42
swiper: true
categories: 前端
tags: [按钮, 预加载]
# top: true
img: https://pic4.zhimg.com/80/v2-37134f732bbe21779fdb2fc8dca410c7_1440w.jpg
bgImg: https://pic4.zhimg.com/v2-7e40abd6bebb53fc13faa98cafe5d55b_b.jpg
---

{% title h2, 按钮事例 %}

{% btn center cool-1, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-1, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-2, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-2, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-3, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-3, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-4, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-4, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-5, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-5, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-6, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-6, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-7, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-7, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-8, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-8, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-9, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-9, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-10, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-10, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-11, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-11, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-12, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-12, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-13, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-13, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-14, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-14, 开始使用, https://baidu.com, fa fa-download %}
```

{% btn center cool-15, 开始使用, https://baidu.com, fa fa-download %}
```
{% btn center cool-15, 开始使用, https://baidu.com, fa fa-download %}
```
{% title h2, 预加载动画事例 %}
### 预加载1
![预加载1](https://pic4.zhimg.com/80/v2-dad20599c5d9aac009d224817ad2d3f7_1440w.webp)

### 预加载2
![预加载2](https://pic1.zhimg.com/80/v2-929a308b7edd0c3717ce0c149dadee1a_1440w.png)

### 预加载3
![预加载3](https://pic1.zhimg.com/80/v2-22457e493abcafa8fcc62e09b85a13fb_1440w.png?source=d16d100b)

### 预加载4
![预加载4](https://pic1.zhimg.com/80/v2-adab5e1f2cce70ffbec035806c051876_1440w.png)

### 预加载5
![预加载5](https://picx.zhimg.com/80/v2-e28bb5daa0be09cf0a8ba14f1af108ed_1440w.png)

### 预加载6
![预加载6](https://picx.zhimg.com/80/v2-6590a47d9e553c19e19ba17da20dffe9_1440w.png)

### 预加载7
![预加载7](https://pic1.zhimg.com/80/v2-3376436eb071cc51dea8f665425f9ae8_1440w.png)

### 预加载8
![预加载8](https://pic1.zhimg.com/80/v2-da152216cf0d5e95f67df5e482ed12e5_1440w.png)

### 预加载9
![预加载9](https://picx.zhimg.com/80/v2-c3b21779ba22a3f9cb8d71e635fac3d3_1440w.png)

在主题`_config.yml`中设置`type`属性即可，1到9
``` yaml
# 页面刷新时预加载动画
preloader:
  on: true
  type: 9 # 1/2/3/4/5/6/7/8/9
```