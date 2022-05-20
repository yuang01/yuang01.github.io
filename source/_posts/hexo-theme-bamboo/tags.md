---
title: Bamboo主题-内置标签（五）
date: 2021-07-05 11:08
swiper: true
swiperImg: 'https://img14.360buyimg.com/ddimg/jfs/t1/184128/30/13883/1673623/60f3ad05E7099ac6e/4d5ff4c2e5d67132.jpg'
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
img: https://img14.360buyimg.com/ddimg/jfs/t1/184128/30/13883/1673623/60f3ad05E7099ac6e/4d5ff4c2e5d67132.jpg
swiperDesc: '该文档是版本2.3.0的文档，版本号可以从主题下的`package.json`查看'
excerpt: '内置标签（五）'
---
> 有问题去[留言板](/messageBoard)留言
<!-- 使用主题之前请先去github点个{% span large red, star %}。 -->
{% ghcard yuang01/hexo-theme-bamboo, theme=vue %}

{% title h2, 内置标签 %}
{% noteblock info, 提示 %}
    使用该功能，请先将hexo版本升级到5.0.0以上，在根目录下的`package.json`文件中可查看hexo的版本号
{% endnoteblock %}

{% linkgroup %}
{% link 按钮, /post/btn/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link audio音频, /post/audio/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link folding折叠, /post/folding/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link checkbox多选, /post/checkbox/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link github卡片, /post/ghcard/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link gallery图片, /post/gallery/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link galleryGroup图片, /post/gallerygroup/ %}

{% link inlineimage和image图片, /post/inlineimage/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link link标签, /post/link/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link note标签, /post/note/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 段落文本P, /post/p/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 单选按钮, /post/radio/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 文本高亮pbg, /post/pbg/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link site-cardb标签, /post/site-card/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link tab标签, /post/tab/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link span文字颜色, /post/span/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link timeline时间线, /post/timeline/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link text文本样式标签, /post/text/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link video视频, /post/video/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link title标题, /post/title/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link noteblock标签, /post/noteblock/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link progress标签, /post/progress/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link issuesSites标签, /post/issuessites/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link issuesTimeline标签, /post/issuestimeline/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link getFiles文件获取标签, /post/getfiles/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link mermaid流程图标签, /post/mermaid/index/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% endlinkgroup %}

可通过如下参数配置基本颜色和默认图片
```yaml
# tag标签 按钮，文本高亮等等..
tag_plugins:
  # 所有标签用到的颜色值，可自行修改
  warningColor: '#e6a23c'
  dangerColor: '#f66'
  successColor: '#67c23a'
  infoColor: '#409eff'
  yellow: '#f9ed69'
  red: '#f47983'
  green: '#16a951'
  blue: '#177cb0'
  cyan: '#00e09e'
  # link标签的左侧默认图片
  linkImg: 'https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg'
```

{% title h2, 结语 %}
你都看到这了，诺 {% inlineimage https://img10.360buyimg.com/ddimg/jfs/t1/153554/13/17636/9218/601cc240Eaa721783/72f7a6d04e586fb6.jpg, height=80px %} 太棒了。
