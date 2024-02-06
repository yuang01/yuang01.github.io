---
title: 通过json生成site-card
date: 2023-03-19 18:12
categories: [标签, json]
tags: [tag, json]
bgImg: https://picx.zhimg.com/80/v2-3486dae2687982e8a141c23d922b9936_1440w.webp
---

> 支持`v3.2.2+` 通过本地（source文件夹下）或者远程json文件，生成site-card标签集

json文件格式如下:
``` json
[
    {
        "title": "yuang01",
        "url": "https://hexo-theme-bamboo.netlify.app/",
        "avatar": "https://hexo-theme-bamboo.netlify.app/img/avatar.jpg",
        "screenshot": "https://picx.zhimg.com/80/v2-d7666d074ec59ca4cf14f15c5f891643_1440w.webp",
        "description": "hexo主题bamboo"
    },
    {
        "title": "yuang01",
        "url": "https://hexo-theme-bamboo.netlify.app/",
        "avatar": "https://hexo-theme-bamboo.netlify.app/img/avatar.jpg",
        "screenshot": "https://pic1.zhimg.com/80/v2-d27db7c61bbe3ecb8d493d31bf835b28_1440w.webp",
        "description": "hexo主题bamboo"
    },
    {
        "title": "yuang01",
        "url": "https://hexo-theme-bamboo.netlify.app/",
        "avatar": "https://hexo-theme-bamboo.netlify.app/img/avatar.jpg",
        "screenshot": "https://picx.zhimg.com/80/v2-17001eba7a69aea9477299f8140e12ab_1440w.webp",
        "description": "hexo主题bamboo"
    },
    {
        "title": "yuang01",
        "url": "https://hexo-theme-bamboo.netlify.app/",
        "avatar": "https://hexo-theme-bamboo.netlify.app/img/avatar.jpg",
        "screenshot": "https://picx.zhimg.com/80/v2-3486dae2687982e8a141c23d922b9936_1440w.webp",
        "description": "hexo主题bamboo"
    },
    {
        "title": "yuang01",
        "url": "https://hexo-theme-bamboo.netlify.app/",
        "avatar": "https://hexo-theme-bamboo.netlify.app/img/avatar.jpg",
        "screenshot": "https://pic1.zhimg.com/80/v2-034e77303e502886d0ea6130f44127ed_1440w.webp",
        "description": "hexo主题bamboo"
    },
    {
        "title": "yuang01",
        "url": "https://hexo-theme-bamboo.netlify.app/",
        "avatar": "https://hexo-theme-bamboo.netlify.app/img/avatar.jpg",
        "screenshot": "https://picx.zhimg.com/80/v2-1781005004b2681e722e68aab7bf68c3_1440w.webp",
        "description": "hexo主题bamboo"
    }
]
```

`url` 字段可以替换为`href`字段，表示要跳转的地址
`title` 字段可以替换为`name`，表示名称
`avatar` 字段可以替换为`touxiang`，表示头像
`screenshot` 字段可以替换为`cover`，表示封面图片
`description` 字段可以替换为`desc`，表示描述

例如： https://yuang01.github.io/myjson/site.json

## 本地
{% getSiteOnline /myjson/site.json %}
### 写法
```
{% getSiteOnline /myjson/site.json %}
```

## jsdelivr远程
{% getSiteOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/site.json %}
### 写法
```
{% getSiteOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/site.json %}
```


## github远程
{% getSiteOnline https://yuang01.github.io/myjson/site.json %}
### 写法
```
{% getSiteOnline https://yuang01.github.io/myjson/site.json %}
```