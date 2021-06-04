---
title: gallery图片
date: 2021-02-08 11:35
# swiper: true
categories: 前端
tags: [tag]
# top: true
tocOpen: false
img: https://pic2.zhimg.com/80/v2-1ecd92421c8823c396f96d15325e6d42_1440w.jpg?source=1940ef5c
---
{% noteblock info, 提示 %}
    使用该标签请先将主题下的`_config.yml`中的`fancybox`设置为`true`
{% endnoteblock %}

{% title h2, 一行一个图片 %}

{% gallery %}
![图片描述](https://pic4.zhimg.com/80/v2-515859a54d7c9b89c070c6132dff4527_1440w.jpg?source=1940ef5c)
{% endgallery %}
### 上述事例代码
```bash
{% gallery %}
![图片描述](https://pic4.zhimg.com/80/v2-515859a54d7c9b89c070c6132dff4527_1440w.jpg?source=1940ef5c)
{% endgallery %}
```
{% title h2, 一行多个图片（不换行） %}

{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}
### 上述事例代码
```bash
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}
```
{% title h2, 多行多个图片（每行2～8个图片） %}
多行多个图片（每行2～8个图片）
{% gallery stretch, 4 %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}
### 上述事例代码
```bash
{% gallery stretch, 4 %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}
```

多行多个图片（每行2～8个图片）
{% gallery stretch, 8 %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-d191b620ff97a55b634786528206002a_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-d191b620ff97a55b634786528206002a_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
{% endgallery %}

### 上述事例代码
```bash
多行多个图片（每行2～8个图片）
{% gallery stretch, 8 %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-d191b620ff97a55b634786528206002a_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-d191b620ff97a55b634786528206002a_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
{% endgallery %}
```

{% title h2, 组合使用 %}

{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
{% endgallery %}
### 上述事例代码
```bash
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
{% endgallery %}
```
