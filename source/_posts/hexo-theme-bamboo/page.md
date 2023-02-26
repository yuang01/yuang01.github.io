---
title: 主题config配置项简介
date: 2022-07-16 12:21
swiper: true
swiperImg: https://pica.zhimg.com/80/v2-4dc929a46e9fb56c13911592af0be9dc_1440w.jpg?source=1940ef5c
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
img: https://pica.zhimg.com/80/v2-dff5af5b4e0331e3b9c22ef1004d88c8_1440w.jpg
excerpt: 'Bamboo主题-主题config配置项简介（二）'
bgImg: https://pica.zhimg.com/80/v2-dff5af5b4e0331e3b9c22ef1004d88c8_1440w.jpg
---
{% titleB h2, 主题字体图标使用的是, #895546 %}
{% link Font Awesome:: https://fontawesome.com/:: https://pic3.zhimg.com/80/v2-3662254b76e2cb640449555df2543e44_1440w.jpg %}

``` html
<i class="fa-solid fa-person"></i>
取 fa-solid fa-person
```

Emoji表情不需要，也不推荐安装其他插件，推荐这个网站，直接复制粘贴就能显示在`IOS`，`Android`，`OSX`和`Windows`系统上。
> 这里推荐一个[Emoji网站](https://copy.emojiall.com/zh-hans/)

{% titleB h2, 图片地址, #ff7f50 %}
`_config.yml`里使用到的图片地址，例如`logo`参数：
``` yaml
logo: http://xxx.png  # 为空则不显示
```
我们可以使用线上地址, 也可以使用本地地址
首先在`source`文件夹(根目录下的source文件夹)下创建`img`文件夹，然后引入：
``` yaml
logo: /img/1.jpg # 为空则不显示
```
注意`source`是根目录下的，不是主题文件夹下的，主题文件夹不用管
当然，文章里面引用本地地址也行的，例如
``` md
![图片描述](/img/full.png)
```

{% titleB h2, 菜单, #eccc68 %}
一开始菜单是注释掉的，我们只需要取消注释就行了，注释是考虑到有些人用`npm`下载主题.
``` yaml
menu:
  Home:
    url: /
    icon: fa fa-home
```
编辑器里面有取消注释的快捷键，例如`vscode`使用的是  {% kbd Ctrl %} + {% kbd / %}
`#`代表注释

{% titleB h2, 首页轮播图, #ff6b81 %}
``` yaml
swiper:
  on: true # 设置为false, 则首页不显示轮播图
```
设置false则不显示首页轮播图
在文章中设置`swiper: true`，会将该篇文章放在首页轮播图中：
``` yaml
---
title: Bamboo主题-主题config配置项简介（二）
date: 2022-07-16 12:21
swiper: true
swiperImg: https://pica.zhimg.com/80/v2-4dc929a46e9fb56c13911592af0be9dc_1440w.jpg?source=1940ef5c
excerpt: '描述'
---
文章内容
```
当然，如果没有文章设置`swiper: true`，则首页轮播图显示默认内容：
``` yaml
swiper:
  on: true # 设置为false, 则首页不显示轮播图
  defaultImg: 'https://pic3.zhimg.com/80/v2-7e6795a0b7b4fbe87b0a388b8a052f78_1440w.jpg' # 图片，没有则随机选取
  defaultVideo: '/video/quanji.mp4' # video，min-width:992px show
  defaultTile: '竹子' # 标题
  defaultDesc: ['千磨万击还坚劲', '任尔东西南北风'] #描 述，例如 ['煮酒洗净尘嚣，论知交', '万般付之一笑，共偕老']
  defaultLeftBtnText: '阅读文档' # 左边按钮文字, 空字符串则不显示
  defaultRightBtnText: '下载主题' # 右边按钮的文字，空字符串则不显示
```
`defaultImg`代表默认图片，`defaultVideo`代表默认视频，这两个值都设置的话，则在pc端显示视频，手机端显示图片。

{% titleB h2, 轮播图样式, #ff6b81 %}
下面的图片是放在图床上的，可能加载有点慢
``` yaml
swiper:
  on: true # 设置为false, 则首页不显示轮播图
  # 图片只有宽度为100% (轮播图的文字和按钮只能居中显示)
  imgwidthFull: false
  # 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
  full: true # full 优先级大于 imgwidthFull/bothSideTransparent
  # 两边透明，imgwidthFull/full: false的时候，设置该值为true，则两边的模糊效果为透明
  bothSideTransparent: false
```
如果这样设置，则轮播图全屏显示:
![全屏显示](https://pic1.zhimg.com/80/v2-4ece87ab462f56348c4c811ce92b45e0_1440w.webp)

``` yaml
swiper:
  on: true # 设置为false, 则首页不显示轮播图
  # 图片只有宽度为100% (轮播图的文字和按钮只能居中显示)
  imgwidthFull: false
  # 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
  full: false # full 优先级大于 imgwidthFull/bothSideTransparent
  # 两边透明，imgwidthFull/full: false的时候，设置该值为true，则两边的模糊效果为透明
  bothSideTransparent: false
```
如果这样设置，则这样显示:
![轮播图](https://pic4.zhimg.com/80/v2-1dd554903686109133be658b11aa23cf_1440w.webp)

``` yaml
swiper:
  on: true # 设置为false, 则首页不显示轮播图
  # 图片只有宽度为100% (轮播图的文字和按钮只能居中显示)
  imgwidthFull: true
  # 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
  full: false # full 优先级大于 imgwidthFull/bothSideTransparent
  # 两边透明，imgwidthFull/full: false的时候，设置该值为true，则两边的模糊效果为透明
  bothSideTransparent: false
```
如果这样设置，则这样显示:
![轮播图](https://pic4.zhimg.com/80/v2-85a8cebd321b95b1a93bbe888d4e29ef_1440w.webp)


``` yaml
swiper:
  on: true # 设置为false, 则首页不显示轮播图
  # 图片只有宽度为100% (轮播图的文字和按钮只能居中显示)
  imgwidthFull: false
  # 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
  full: false # full 优先级大于 imgwidthFull/bothSideTransparent
  # 两边透明，imgwidthFull/full: false的时候，设置该值为true，则两边的模糊效果为透明
  bothSideTransparent: true
```
如果这样设置，则这样显示:
![轮播图](https://pic2.zhimg.com/80/v2-f7b6bc9b3d803dcffb839c690fbab795_1440w.webp)

{% titleB h2, 音乐, #ffa502 %}
``` yaml
music:
  on: true
  server: tencent   #require music platform: netease, tencent, kugou, xiami, baidu
  type: song    #require song, playlist, album, search, artist
  id: 0020dKPG3mp0GT     #require song id / playlist id / album id / search keyword
```
`server`代表音乐平台，`netease`代表网易云, `tencent`代表qq音乐
`type`代表歌曲类别，`song`代表单曲, `playlist`代表歌单
`id`代表歌曲或者歌单的id，例如网易云的歌单地址`https://music.163.com/#/playlist?id=2788431035`, 后面的id就是这个。

> 本主题切换页面，音乐不会间断的哦

{% titleB h2, 评论, #7bed9f %}
博主用的评论是`utterance`, https://utteranc.es/ github授权一下就行。很简单。

主题集成了`utterance`, `valine`, `waline`， `livere`, `gitalk`, `gitment`, `beaudar`, `twikoo`, `changyan`这些评论
需要注意的是`twikoo`, `changyan`我并没有测试哈，因为一个依赖腾讯云(收费)，一个依赖网站备案.....

{% titleB h2, 主题颜色更改, #1e90ff %}
``` yaml
# 主题颜色
# 主题颜色
color_scheme:
  # ------------
  # 通用颜色
  common:
    # 主题色
    theme: '#42b983'
```
改这个`theme`就行了

``` yaml
bgFloor: 'url("https://pic2.zhimg.com/80/v2-a90e3e9f544549e244355039b96bd606_1440w.jpg")
```
`bgFloor`指的是博客首页的背景图片或者背景颜色

``` yaml
bgImg: 'https://pica.zhimg.com/80/v2-292e6340491bd97f9d014d6be3371c04_1440w.jpg'
```
`bgImg`指的是文章页面的背景图片或者背景颜色，也可以在文章里面单独配置

``` yaml
headerMenuBackgroundColor: 'rgba(66, 185, 133, 0.8)'
```

`headerMenuBackgroundColor`值得是导航的背景颜色

``` yaml
footer:
  # 为空则使用 theme主题色，写法: rgba(268, 264, 269, 0.8) or #42b983 or red or 也可以是渐变颜色 linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%) or 也可以是url("图片地址")
  background: 'rgba(66, 185, 133, 0.8)' 
```
`footer.background`值得页脚的背景颜色

{% titleB h2, 页脚, #3B3B98 %}
``` yaml
site_footer:
  custom: # 根据需要自行取消注释，label: 'markdown格式'，会在下面继续增加内容
    # - label: '<br>'
    # - label: '[Hello World](http://baidu.com)'
```
可以通过页脚的`custom`来向下自定义markdown内容
也可以向中间插入内容:
假如说你想在 social和 copyright中间加一个自定义内容, 可以这样写 layout: [social, aaa ,copyright, busuanzi, custom], 然后在下面写上aaa: 'markdown格式', aaa这个名称随便取
``` yaml
layout: [social, aaa, copyright, custom]
social:
  - icon: fas fa-rss
    url: /atom.xml
  - icon: fas fa-envelope
    url: mailto:xxxxxxxxx@qq.com
  - icon: fab fa-github
    url: https://github.com/yuang01/hexo-theme-bamboo
  - icon: fab fa-qq
    url: tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=xxxxxxxxx
aaa: '自定义内容'
copyright: 'Copyright © 2019 - 2020 <a href="https://github.com/yuang01">yuang01</a> | Powered by <a href="https://hexo.io/zh-cn/docs/">Hexo</a> | Theme <a href="https://github.com/yuang01/theme">Bamboo</a> '
```

{% titleB h2, 图片懒加载, #D6A2E8 %}
``` yaml
lazyload:
  loadingImg: https://pic1.zhimg.com/v2-cd38920285d125be80b3eb504052c550_b.webp
```
通过`lazyload.loadingImg`指定loading图片

{% titleB h2, 引入js或者css文件, #FC427B %}

``` yaml
import:
  link:
    # - <link href="xxx.css"  rel="stylesheet">
  script: 
    # - <script src="/bubbly-bg/index.js"></script>
```
通过`import`参数引入js或者css.

其实配置项搞那么多是想更加自定义一点，配置项你都不用去管他的，只是说你想去改某个东西你就去改它。