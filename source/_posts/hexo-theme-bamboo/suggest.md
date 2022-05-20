---
title: Bamboo主题-建议（六）
date: 2021-07-05 11:07
swiper: true
swiperImg: 'https://pic1.zhimg.com/80/v2-a48800108645e7f7e8e432a150fe7f96_1440w.jpg?source=1940ef5c'
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
img: https://pic3.zhimg.com/80/v2-6262f763cbd2decf3b71740ffaaf7df2_1440w.jpg?source=1940ef5c
swiperDesc: '该文档是版本2.3.0的文档，版本号可以从主题下的`package.json`查看'
excerpt: '建议（六）'
toc: false
---

> 有问题去[留言板](/messageBoard)留言
<!-- 使用主题之前请先去github点个{% span large red, star %}。 -->

{% ghcard yuang01/hexo-theme-bamboo, theme=vue %}
{% title h2, 建议 %}
- 图片都可以用http图片地址哦，不仅方便，图片加载速度也快些，但是一些百度图片或者其他网站的图片外链都做了防盗链，所以推荐大家将图片上传到图床，或者七牛云什么的。
> 这里推荐一个[图床网站](https://image.kieng.cn/)，但是私密图片不要上传到这里哦
- Emoji表情不需要，也不推荐安装其他插件，推荐这个网站，直接复制粘贴就能显示在`IOS`，`Android`，`OSX`和`Windows`系统上。
> 这里推荐一个[Emoji网站](https://copy.emojiall.com/zh-hans/)
事例(example)：
😚😋😛😝😜🤪🤨🧐🤓😎😍
⚽比赛？🎊聚会？🎃节日？🎮游戏？热爱参加活动的你是否经常使用这些emoji？这个分类汇聚了所有活动与节日🔮，并持续在更新。🎆假期生活就应该疯狂且有趣，当你感到无聊时，不如来逛逛这个分类找点灵感🎗。请继续往下逛，一起探索生活的美好吧🎁。
这是主分类⚽ 活动的表情符号列表页面。它包括5个子分类，例如：🎈 事件, 🏅 奖牌, 🏀 运动, 🎯 游戏, 🎨 艺术和工艺。您可以单击下面的链接查看详细信息并复制表情符号。
还可以放在头部导航中哦
{% image https://img10.360buyimg.com/ddimg/jfs/t1/189451/27/6185/1405918/60b7348dE008bf9d5/91a39401104b58ff.png, alt=头部导航加彩色图标 %}
- 背景图想使用渐变，但是css的渐变又不够炫酷该怎么办
> 这里推荐一个[背景图片渐变网站](https://gradienta.io/)
事例(example)：
{% gallery %}
![背景渐变图片](https://img14.360buyimg.com/ddimg/jfs/t1/194321/11/8204/192791/60c841f6E3a7e751a/c6c9dcaf6ceec68b.png)
![背景渐变图片](https://img13.360buyimg.com/ddimg/jfs/t1/191376/13/8267/239990/60c841f6E9a4a1373/55d4278b11b3ad07.png)
{% endgallery %}