---
title: Front-matter介绍
date: 2021-07-05 11:09
swiper: true
swiperImg: 'https://pic3.zhimg.com/80/v2-5c159c149e01a6edfe215c8707b60a9d_1440w.jpg?source=1940ef5c'
categories: [前端]
tags: [Hexo, hexo-theme-bamboo]
img: https://pic3.zhimg.com/80/v2-5c159c149e01a6edfe215c8707b60a9d_1440w.jpg?source=1940ef5c
swiperDesc: '该文档是版本2.3.0的文档，版本号可以从主题下的`package.json`查看'
excerpt: 'Front-matter介绍（四）'
bgImg: https://pic1.zhimg.com/v2-e3251d5de437e14a665d863ae31ed8d4_b.jpg
---

这个指的是你在你的文章页面里面写的参数，针对的是这一篇文章，例如
```yaml
---
title: Hexo主题--Bamboo介绍
date: 2020-09-14 14:06
swiper: true # 将改文章放入轮播图中
swiperImg: '/medias/1.jpg' # 该文章在轮播图中的图片，可以是本地目录下图片也可以是http://xxx图片
img: '/medias/1.jpg' # 该文章图片，可以是本地目录下图片也可以是http://xxx图片
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
top: true

---
```
`Front-matter` 选项中的所有内容均为**非必填**的。但我仍然建议至少填写 `title` 和 `date` 的值。

| 配置选项   | 默认值                      | 描述                                                         |
| ---------- | --------------------------- | ------------------------------------------------------------ |
| title      | `Markdown` 的文件标题        | 文章标题，强烈建议填写此选项                                 |
| date       | 文件创建时的日期时间          | 发布时间，强烈建议填写此选项，且最好保证全局唯一  
| swiper     | false                       | 表示该文章是否需要加入到首页轮播封面中
| swiperImg  | 无                       | 表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片
| swiperDesc  | 无                       | 表示该文章在首页轮播封面需要显示的文字描述（摘要），如果没有，则使用`excerpt`，如果`excerpt`也没有，则取文章内容
| img        | 无                          | 文章特征图，该文章显示的图片，没有则默认使用文章的特色图片
| excerpt        | 无                          | 文章描述（摘要），该文章在首页的描述文字，如果没有，则取`swiperDesc`,如果`swiperDesc`也没有，则取文章内容（优先取`<!-- more -->`上面的内容）
| top        | false                       | 将该值设为true，则将该篇文章显示在首页的置顶栏目中
| toc        | true                       | 将该值设为false，则该篇文章不显示右侧目录
| tocOpen    | true                       | 将该值设为false，则该篇文章右侧目录默认收缩 
| onlyTitle        | false                       | 文章详情页头部是否只显示标题，不显示日期等信息
| comments   | true                       | 将该值设为false，则该篇文章不显示评论 
| share   | true                       | 将该值设为false，则该篇文章不显示分享按钮
| copyright   | true                       | 将该值设为false，则该篇文章不显示版权声明
| donate   | true                       | 将该值设为false，则该篇文章不显示打赏按钮
| bgImg   | -                       | 单独为这篇文章设置背景图片或者背景颜色，可以是数组，数组里面放图片链接，可以是字符串，字符串里面是颜色值，空值则背景颜色透明 
| bgImgTransition   | fade        | 该篇文章的bgImg设置为数组,该值表示背景图片切换的动画, 有三种值（fade, scale, translate-fade）
| bgImgDelay   | 180000(三分钟)        | 该篇文章的bgImg设置为数组,该值表示背景图片切换的延迟时间, 
| categories | 无                          | 文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类 | 
| prismjs | 无                          | 如果使用的是hexo自带的prismjs代码高亮，通过设置该值为该篇文章设置不同的代码高亮主题（default, coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight） |
| tags       | 无                          | 文章标签，一篇文章可以多个标签  
| mathjax       | false                          | mathjax公式
| imgTop       | true                | 设置为`false`则文章和自定义页面顶部不要图片