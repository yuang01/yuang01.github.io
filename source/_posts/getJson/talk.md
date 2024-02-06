---
title: 通过json生成talk-card
date: 2023-03-20 22:37
categories: [标签, json]
tags: [tag, json]
bgImg: https://picx.zhimg.com/80/v2-3486dae2687982e8a141c23d922b9936_1440w.webp
---

> 支持`v3.2.5+` 通过本地（source文件夹下）或者远程json文件，生成talk-card标签集

json文件格式如下:
``` json
[
    {
        "img": "https://pic1.zhimg.com/80/v2-03a22891ccba9bccf6424dfd7cbf4be7_1440w.webp",
        "text": "坚持是雄壮的，因为坚持是由于百般地敲打而磨练出来的;坚持是甘甜的，因为无畏的与不倒的毅力早已在心中播下了胜利的种子😂",
        "url": "https://github.com/yuang01/hexo-theme-bamboo",
        "date": "2023-03-20 14:50",
        "musicId": "1343283719"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-b44931ea513e5f7b3b06f2703f79653c_1440w.webp",
        "text": "坚持下去便可胜利。只要心还在，梦想还在，我们还可以坚持直至胜利。没有过不去的坎，只要害怕的心。莫害怕，抓住希望便可突破困境找到方向😂",
        "url": "https://baidu.com"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-b44931ea513e5f7b3b06f2703f79653c_1440w.webp",
        "text": "理想是帆，坚持是桨。当然，不是每个拼搏者都能踏上胜利的通途，即使你不幸失败了，不要紧的，不要有“明朝散发弄扁舟”的失意。因为你依然是精神领域的胜利者，你依然是当之无愧的英雄，你依然可以昂首阔步的面对这一切：“天空不容我，但我已飞过!",
        "date": "2023-03-20"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-b44931ea513e5f7b3b06f2703f79653c_1440w.webp",
        "text": "漫漫长路，你愿一人独撑，忍受着孤独与寂寞，承受着体力与肉体的压榨，只任汗水溶于泪水，可脚步却从不停歇。好样的，纵然得不了桂冠，可坚持的你，定会博得最后的掌声",
        "url": "https://baidu.com",
        "date": "2023-03-20"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-b44931ea513e5f7b3b06f2703f79653c_1440w.webp",
        "text": "漫漫长路，你愿一人独撑，忍受着孤独与寂寞，承受着体力与肉体的压榨，只任汗水溶于泪水，可脚步却从不停歇。好样的，纵然得不了桂冠，可坚持的你，定会博得最后的掌声",
        "url": "https://baidu.com",
        "date": "2023-03-20"
    },
    {
        "img": "https://picx.zhimg.com/80/v2-b44931ea513e5f7b3b06f2703f79653c_1440w.webp",
        "text": "漫漫长路，你愿一人独撑，忍受着孤独与寂寞，承受着体力与肉体的压榨，只任汗水溶于泪水，可脚步却从不停歇。好样的，纵然得不了桂冠，可坚持的你，定会博得最后的掌声",
        "url": "https://baidu.com",
        "date": "2023-03-20"
    }
]
```

`url` 字段可以替换为`href`字段，表示要跳转的地址
`text` 字段可以替换为`content`，表示文本内容
`img` 字段可以替换为`image`，表示图片地址
`date` 字段可以替换为`datetime`或者`time`，表示日期
`musicId` 表示网易云单曲的id，只支持网易云，并且是单曲的id

例如： https://yuang01.github.io/myjson/talk.json

> 注意，一个json只展示前三十个

## 本地
{% getTalkOnline /myjson/talk.json %}
### 写法
```
{% getTalkOnline /myjson/talk.json %}
```

## jsdelivr远程
{% getTalkOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/talk.json %}
### 写法
```
{% getTalkOnline https://cdn.jsdelivr.net/gh/yuang01/CDN@main/file/talk.json %}
```


## github远程
{% getTalkOnline https://yuang01.github.io/myjson/talk.json %}
### 写法
```
{% getTalkOnline https://yuang01.github.io/myjson/talk.json %}
```