---
title: 通过json生成图片集
date: 2023-03-18 16:42
categories: [标签, json]
tags: [tag, json]
bgImg: https://pic1.zhimg.com/80/v2-5312b20fe7fd3fbc62218e1027865551_1440w.webp?source=1940ef5c
---
>通过本地（source文件夹下）或者远程json文件，生成图片集

json文件格式如下:
``` json
[
    {
        "img": "https://pic1.zhimg.com/80/v2-03a22891ccba9bccf6424dfd7cbf4be7_1440w.webp",
        "alt": "我是描述1"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-b44931ea513e5f7b3b06f2703f79653c_1440w.webp",
        "alt": "我是描述2"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-9c50d3af0bc62a0e8b6e89e24c769317_1440w.webp",
        "alt": "我是描述3"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-85c31120acff76826ab53ea8934ef4bb_1440w.webp",
        "alt": "我是描述4"
    },
    {
        "img": "https://pica.zhimg.com/80/v2-573ac3e25de03fad9c32add5a05e5cfc_1440w.webp",
        "alt": "我是描述5"
    },
    {
        "img": "https://pic4.zhimg.com/80/v2-83ea273b88e119d9615aed0d89aad4ab_1440w.webp",
        "alt": "我是描述6"
    }
]
```


`img` 字段可以替换为`url`或者`imgurl`字段，表示图片链接
`alt` 字段可以替换为`title`, 表示描述
例如： https://yuang01.github.io/myjson/photo.json

## 本地
{% getPhotoOnline /myjson/photo.json %}
### 写法
```
{% getPhotoOnline /myjson/photo.json %}
```

## jsdelivr远程
{% getPhotoOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/photo.json %}
### 写法
```
{% getPhotoOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/photo.json %}
```
## github远程
{% getPhotoOnline https://yuang01.github.io/myjson/photo.json %}
### 写法
```
{% getPhotoOnline https://yuang01.github.io/myjson/photo.json %}
```

## 有规则的排列
{% getPhotoOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/photo.json, regular %}
### 写法
```
{% getPhotoOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/photo.json, regular %}
```