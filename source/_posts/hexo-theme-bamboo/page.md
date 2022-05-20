---
title: Bamboo主题-页面功能配置（二）
date: 2021-07-05 11:11
swiper: true
# swiperImg: 'https://img14.360buyimg.com/ddimg/jfs/t1/184128/30/13883/1673623/60f3ad05E7099ac6e/4d5ff4c2e5d67132.jpg'
swiperImg: https://pica.zhimg.com/80/v2-4dc929a46e9fb56c13911592af0be9dc_1440w.jpg?source=1940ef5c
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
img: https://pica.zhimg.com/80/v2-4dc929a46e9fb56c13911592af0be9dc_1440w.jpg?source=1940ef5c
swiperDesc: '该文档是版本2.3.0的文档，版本号可以从主题下的`package.json`查看'
excerpt: '页面功能配置（二）'
---

> 有问题去[留言板](/messageBoard)留言
<!-- 使用主题之前请先去github点个{% span large red, star %}。 -->
{% ghcard yuang01/hexo-theme-bamboo, theme=vue %}

本主题从2.6.0开始使用[Font Awesome v5.15.3版本](https://fontawesome.com/)
> **注意**: 本主题中使用的 `Font Awesome` 版本为 `5.15.3`。
> 之前版本使用的是 [Font Awesome](https://fontawesome.dashgame.com/) 版本为 `4.7.0`

{% title h2, 页面功能配置 %}
### 首页轮播图
首页轮播图在`source/_posts/xxx.md`也就是文章页面配置，如果你想让某个文章放在首页轮播中，只用设置`swiper: true`即可，可以通过`swiperImg: xxx`来配置轮播图片，如下所示
```yaml
---
title: Hello world
date: 2019-01-20 21:11
swiper: true
swiperImg: 'https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/c080ff4434354e35af9dab0a3ee1b9f7.jpg!sswm'
swiperDesc: '我是文章在轮播图中的摘要'
---
我是文章内容
```
`swiperImg`可以是cdn地址，也可以是本地地址，例如`/medias/4.png`
可以通过主题文件夹下的`_config.yml`文件中的`swiper`属性对轮播进行调整
```yaml
# 首页轮播图设置
swiper:
  # 当在.md文件中，设置swiper:true，会将该文章放到轮播中，
  showPrevNext: true # 是否显示左右切换按钮
  showIndicators: true  # 是否显示指示器
  autoplay: false # 是否自动轮播
  loop: true # 让轮播看起来是循环的, 例如false的话，到达最后一个轮播图的时候，右按钮不能点击
  delay: 5000 # 切换延迟时间
  effect: 'slide' # 'fade': 淡入淡出效果
  textAnimated: 'fadeInDown' # 文字动画，属性使用 animate.css, https://daneden.github.io/animate.css/
  textDuration: '0.2s' # 文字动画持续时间（单位秒）
  textDelay: '0.1s' # 文字动画延迟时间（单位秒）
  readMoreBtn: true # 阅读更多按钮是否显示
  readMoreBtnBackgroundColor: '' # 阅读更多按钮背景颜色,空字符串则默认使用主题颜色
  bubble: true # 轮播图是否显示气泡,也可以打开底下的花瓣或者雪花特效 sakura（花瓣）: true snow(雪花): true
  # 当没有文章设置swiper: true时候，轮播图会显示以下default默认内容，可自行切换对应内容
  defaultImg: 'https://w.wallhaven.cc/full/eo/wallhaven-eo678l.jpg' # 图片，没有则随机选取
  defaultVideo: '' # video，min-width:992px show
  defaultVideoLoadingImg: 'https://img14.360buyimg.com/ddimg/jfs/t1/150557/6/19578/249564/60320406Ed5c42418/0d18299f505e4268.gif' # video loading img -- use .gif img, 视频预加载动画，使用gif图片作为loading，为空则视频没有预加载动画
  defaultTile: '青墨书晚风' # 标题
  defaultDesc: ['煮酒洗净尘嚣，论知交', '万般付之一笑，共偕老'] #描 述，例如 ['煮酒洗净尘嚣，论知交', '万般付之一笑，共偕老']
  defaultLeftBtnText: '阅读文档' # 左边按钮文字, 空字符串则不显示
  defaultLeftBtnLink: 'https://yuang01.gitee.io/2021/02/08/hexo-theme-bamboo-new/' # 左边按钮链接 
  defaultRightBtnText: '下载主题' # 右边按钮的文字，空字符串则不显示
  defaultRightBtnLink: 'https://gitee.com/yuang01/hexo-theme-bamboo/repository/archive/dev.zip' # 右边的按钮的链接
  defaultDescTyped: true # defaultDesc文字是否开启打字特效  is typed
  defaultDescTypedSpeed: 100 # defaultDesc 打字速度, typed typeSpeed
  defaultDescTypedBackSpeed: 50 # defaultDesc 打字返回速度 typed backSpeed
  defaultDescTypedLoop: true # defaultDesc文字的打字特效是否循环  typed loop
  # defaultAddToSwiper表示：当有文章设置了swiper: true的时候，将上面的 默认内容 放在轮播图的第一页
  defaultAddToSwiper: true # 开启这个，则loop默认为false
  bothSideBlur: '300000px' # 轮播图两边模糊程度，px越大越模糊，针对下面的imgwidthFull、full为false的时候
  ## 轮播图样式更改
  # 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
  textCenter: false
  # 图片宽度为100% (轮播图的文字和按钮只能居中显示)
  imgwidthFull: false
  # 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
  full: true # full 优先级大于 imgwidthFull
  # 两边透明，imgwidthFull/full: false的时候，设置该值为true，则两边的模糊效果为透明
  bothSideTransparent: false

```
- `defaultAddToSwiper`表示，当有文章设置了`swiper:true`的时候，将default默认轮播图作为第一张轮播图
- 通过`textCenter`控制轮播图的文字和按钮是否居中显示, `imgwidthFull`设置轮播图是否宽度为100%，但是高度不为100%，`full`表示轮播图宽高都是100%

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: false
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: false
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: false # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片在中间显示](/img/base.png)
![图片在中间显示](/img/base2.png)
{% endgallery %}

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: true
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: false
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: false # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片、文字和按钮在中间显示](/img/text-center.png)
![图片、文字和按钮在中间显示](/img/text-center2.png)
{% endgallery %}

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: false
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: true
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: false # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片宽度为100%](/img/width-full.png)
![图片宽度为100%](/img/width-full2.png)
{% endgallery %}

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: false
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: false
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: true # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片宽高为100%](/img/full.png)
![图片宽高为100%](/img/full2.png)
{% endgallery %}

>还可以通过设置`defaultVideo`参数将默认轮播图的背景设置为视频，视频在屏幕大于992px的时候显示，小于992px则显示图片。效果如下所示:
{% video /video/bamboo.avi %}
> 那免费的视频从哪里找呢，我推荐下面两个免费视频网站，直接右键复制网站视频链接就行了，不用下载下来
{% linkgroup %}
{% link mixkit, https://mixkit.co/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link coverr, https://coverr.co/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% endlinkgroup %}

上面的都是头部导航透明的，如果你不想导航透明，则可以设置底下的`color_scheme.common.headerMenuTransparent`为`false`，这样看上去和以前的版本就是一样的效果了
![头部导航不透明](https://img10.360buyimg.com/ddimg/jfs/t1/195127/39/6433/1605024/60b98cc8E066b88d4/25ef8fce6fa2966f.png)
### 首页座右铭
```yaml
motto:
  on: true
  title: '座右铭'
  content: '沉淀后我愿意做个温暖的人，有自己的喜好，有自己的原则，有自己的信仰，不急功近利，不浮夸轻薄。宠辱不惊，淡定安逸，心静如水，不忘初心，方得始终。——凌茜'
  background: 'url("https://img10.360buyimg.com/ddimg/jfs/t1/166587/8/21344/72069/6088c24fEda5fdeb6/f9730ab637b7ca47.png")' # url("xxx") or red or #000 or rgba() ..
```

### 首页公告
```yaml
notice:
  on: true
  seamless: false # 为true时，则无缝不停止滚动，false是会停一下的滚动
  title: '公告'
  background: 'url("https://img10.360buyimg.com/ddimg/jfs/t1/166587/8/21344/72069/6088c24fEda5fdeb6/f9730ab637b7ca47.png")' # url("xxx") or red or #000 or rgba() ..
  list: # list相当于数组对象，[{title:'xx',date: 'xx', url: 'xxx', color: 'red'}]根据自己实际情况，增加或者删除
    - title: '#博客更新到2.0了'
      date: '2021-04-28'
      url: 'http://baidu.com'   # 可以为空, 也可以是本地页面地址如 '/archives'
      color: red   # 字体颜色
    - title: '#新增 轮播图支持三种模式了，功能也增强了 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
      color: red
    - title: '#新增 支持二级导航'
      date: '2021-04-28'
      url: 'http://baidu.com'
      color: blue
    - title: '#新增 归档，分类等页面头部图片位置可以设置为视频 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
      color: '#42b983'
    - title: '#新增 头部导航可以设置为在顶部透明，并且可以任意设置背景颜色了 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
    - title: '#新增 首页增加了座右铭和公告栏目 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
```

### Github
```yaml
# github地址, 头部导航右上角的github链接
Github: 
  on: true
  url: https://github.com/yuang01/hexo-theme-bamboo
```

### 图库
新建页面
``` yaml
hexo new page gallery
```
然后在`gallery/index.md`中使用`galleryGroup `标签即可
``` markdown
---
title: 图库
date: 2021-05-10 15:39:04
toc: false
img: https://pic2.zhimg.com/80/v2-2cf3b62a87045ee279096449cf6f3ac1_1440w.jpg?source=1940ef5c
onlyTitle: true
---
<div class="gallery-group-main">
    {% galleryGroup '壁纸' '收藏的一些壁纸' '/bizhi' https://pic1.zhimg.com/80/v2-23c3820e8abfb1cef689531af2dc6d09_1440w.jpg?source=1940ef5c %}
    {% galleryGroup '古典图片' '中国古典图片' '/gudian' https://pic1.zhimg.com/80/v2-8d542d68cbbf0e5f503da9e3f72b8447_1440w.jpg?source=1940ef5c %}
    {% galleryGroup '风景' '风景图片' '/fengjing' https://pic1.zhimg.com/80/v2-56164ef0695767475935c9e019c594ae_1440w.jpg?source=1940ef5c %}
</div>
```
相册详情页,也是创建一个页面
```yaml
hexo new page bizhi
```
然后，使用`gallery`标签
```markdown
---
title: 壁纸
date: 2021-05-10 15:39:04
toc: false
img: https://pic1.zhimg.com/80/v2-92cc20bdf4674b6c6337478bb06657b3_1440w.jpg?source=1940ef5c
onlyTitle: true
---
{% gallery %}
![图片描述](https://pic4.zhimg.com/80/v2-5dfab6525ec92b4caf3f09e1ee72a23b_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-5c062983ace7db9601880019190fb5a8_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic1.zhimg.com/80/v2-154228684029ae0c2183f65a9568c310_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-121618e14ad58dcedf8637127087ff27_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d61b1af36a619fec1b32775d75f4900d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic3.zhimg.com/80/v2-f94047ce45907e0966a681089835c04d_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic4.zhimg.com/80/v2-604a15cef201cf177943af2d915eb2e7_1440w.jpg?source=1940ef5c)
![图片描述](https://pic1.zhimg.com/80/v2-bf6c555e7c61a57ba4a1fd95a9a32975_1440w.jpg?source=1940ef5c)
{% endgallery %}
```
### 网站favicon和logo
设置主题文件夹下的`_config.yml`文件中的`favicon`和`logo`属性即可

### 页面刷新时预加载动画
```yaml
preloader:
  on: false
```

### 回到顶部
设置主题文件夹下的`_config.yml`文件中的`goTop`属性即可控制隐藏显示

### 文章详情页图片放大功能 
设置主题文件夹下的`_config.yml`文件中的`fancybox`属性即可

### 修改页脚
页脚底部的网站统计功能，使用的是[不蒜子](http://busuanzi.ibruce.info/)，设置主题文件夹下的`_config.yml`文件中的`busuanzi`属性即可控制隐藏显示
```yaml
# 设置网站页脚
site_footer:
  # 通过layout控制页脚元素的显示和顺序
  # busuanzi是访客数那个,假如说你想在 social和 copyright中间加一个自定义内容, 可以这样写 layout: [social, aaa ,copyright, busuanzi, custom], 然后在下面写上aaa: 'markdown格式', aaa这个名称随便取
  layout: [social, copyright, busuanzi, custom]
  social:
    # - icon: fas fa-rss
    #   url: /atom.xml
    # - icon: fas fa-envelope
    #   url: mailto:1730241541@qq.com
    # - icon: fas fa-github
    #   url: https://github.com/yuang01/hexo-theme-bamboo
    # - icon: fas fa-qq
    #   url: tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1730241541
  copyright: 'Copyright © 2019 - 2020 <a href="https://github.com/yuang01">yuang01</a> | Powered by <a href="https://hexo.io/zh-cn/docs/">Hexo</a> | Theme <a href="https://github.com/yuang01/theme">Bamboo</a> '
  custom: # 根据需要自行取消注释，label: 'markdown格式'，会在下面继续增加内容
    # - label: '<br>'
    # - label: '[Hello World](http://baidu.com)'
```
or
``` yaml
site_footer:
  social:
    - img: https://seikim.com/i/2021/06/15/h4fynr.svg
      url: http://baidu.com
```

or 

``` yaml
site_footer:
  social:
    - avatar: https://seikim.com/i/2021/06/15/h4fynr.svg
      url: http://baidu.com
```

### 修改打赏的二维码图片
设置主题文件夹下的`_config.yml`文件中的`donate`属性为true，然后更改`Alipay`和`WeChatpay`图片路径即可
```yaml
# 打赏功能
donate:
  on: true
donate_message: 你的赏识是我前进的动力
# 支付宝打赏图片相对路径
Alipay: '/medias/zfb.jpg'
# 微信打赏图片相对路径
WeChatpay: '/medias/wx.jpg'
```

### 文章详情页分享功能
设置主题文件夹下的`_config.yml`文件中的`sharejs`属性true或者false即可，通过sites配置需要分享的网站
```yaml
# 分享功能
sharejs: 
  on: true
  sites: twitter,facebook,google,qq,qzone,wechat,weibo,douban,linkedin
```

### 鼠标点击出现爱心，爆炸等效果
设置主题文件夹下的`_config.yml`文件中的`cursor_effect`属性true或者false，通过`type`属性选择效果类别，例如:
```yaml
# 鼠标点击特效
cursor_effect:
  on: true
  type: explosion  # fireworks: 礼花 | explosion: 爆炸 | love: 浮出爱心 | text: 浮出文字
```

### 复制成功提醒
当复制内容时候，是否显示复制成功提示 
设置主题文件夹下的`_config.yml`文件中的`copy`属性true或者false即可
```yaml
# 复制成功提示
copy:
  on: true
  title: '成功'
  content: '复制成功了哦'
```

### 雪花飘落和花瓣飘落特效
设置主题文件夹下的`_config.yml`文件中的`snow`或者`sakura`属性true或者false即可
```yaml
# 首页雪花飘落效果--冬天
snow:
  on: false
  onlyPc: false # 设为true，只有pc端显示雪花特效

# 首页花瓣飘落效果--春天
sakura:
  on: false
  onlyPc: false # 设为true，只有pc端显示花瓣特效
```

### 输入框打字特效
搜索弹框中的输入框打字特效，设置主题文件夹下的`_config.yml`文件中的`inputEffects`属性为true或者false即可。

### live-2d人物
设置主题文件夹下的`_config.yml`文件中的`live2d`属性为true或者false，可以通过`modelId`属性选择模型，注意，live-2d人物只有在屏幕宽度最小为992px的时候才显示
```yaml
# live-2d(左下角动画人物)
live2d:
  on: true # 控制显示或者隐藏
  modelId:  # 0 or 1 or 2 or 3 or 4 or 5 or 6 #人物模型
  open: true # 默认展开，false则收缩，通过点左下角的方块点击，控制展开或者收缩
```

### 滚动动画
设置主题文件夹下的`_config.yml`文件中的`aos`属性对首页中的文章列表动画进行控制，具体参考官网[aos.js](https://github.com/michalsnik/aos#animations)

### 文章详情页目录 
设置主题文件夹下的`_config.yml`文件中的`toc`的`on`属性，控制所有文章是否显示，还可以在在单个文章md页面里通过`toc`属性控制该文章的目录是否显示。
`toc`下的`open`参数控制所有的文章默认是否展开或者收缩，还可以在单个文章md页面里通过`tocOpen`参数控制该文章(具体某个文章)的目录默认是否展开收缩,参数如下:
```yaml
# 主题文件夹下的`_config.yml`文件中的`toc`属性
# 文章目录
toc:
  on: true # 是否显示
  heading: h2, h3, h4
  open: true # 是否展开，false则收缩
  showBtn: true # 是否显示展开收缩按钮
  showOrderNumber: true # 是否显示序号
```
```yaml
# 单个文章里控制显示和隐藏，展开和收缩
---
title: 我是文章标题
tags: ['vue', 'html']
categories: ['前端', '运维', '攻城狮']
toc: false # 该文章目录不显示
tocOpen: false # 该文章目录收缩
---
我是文章内容
```

### 音乐 
设置主题文件夹下的`_config.yml`文件中的`music`属性，控制其显示隐藏和其他一些调整, `music`中的`fixed`属性建议使用`true`
```yaml
# 音乐
music:
  on: true
  autoHide: true    # hide automaticaly
  server: tencent   #require	music platform: netease, tencent, kugou, xiami, baidu
  type: playlist    #require song, playlist, album, search, artist
  id: 8062553743     #require	song id / playlist id / album id / search keyword
  fixed: true       # 开启吸底模式，建议开启
  autoplay: true   # 是否自动播放
  theme: '#42b983'
  loop: 'all'       # 音频循环播放, 可选值: 'all', 'one', 'none'
  order: 'random'   # 音频循环顺序, 可选值: 'list', 'random'
  preload: 'auto'   # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7       # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: true  # 列表默认折叠
  hideLrc: false     # 隐藏歌词
```

### 版权信息
可以在`source/_posts/xxx.md`文件中设置`copyright`true或者false，单独设置某个文章的版权信息是否显示，也可以在主题文件夹下的`_config.yml`文件中的`copyright`属性设置true或者false对所有文章的版权信息进行显示隐藏控制

### 文章置顶
可以在`source/_posts/xxx.md`文件中设置`top: true`，将该文章放在首页的文章置顶栏目中，可以在主题文件夹下的`_config.yml`文件中的`topArticle`属性设置true或者false控制首页的文章置顶栏目显示和隐藏。
```yaml
---
title: Hello World
date: 2019-05-21 21:11
top: true
---
我是文章内容
```

### 评论
主题中内置了`valine`, `miniValine`, `livere`, `gitment`, `gitalk`, `changyan`评论
通过主题文件夹下的`_config.yml`文件中的相应属性进行设置
推荐使用`valine`和`livere`
这里重点说一下`valine`评论配置
```yaml
valine:
  on: true # 是否启用
  appid: # 你的appid --> https://valine.js.org/quickstart.html，请阅读这个获取appid和appkey
  appkey: # 你的key
  avatar: '' # 匿名者头像选项 https://valine.js.org/avatar.html 访客的头像,最好启用下面的`requiredFields`中的邮箱必填，填写qq邮箱，头像会变成qq头像
  placeholder: '客官，说点什么吧' # 评论内容输入框的 placeholder
  master: 'xxxxxx' # 博主标签识别，博主邮箱md5 可以去md5加密网站，例如 https://md5jiami.51240.com/ ，将自己的邮箱输入， 得到 32位小写 的字符串填入这里
  friends: ['xxxxxxx', 'xxxxxx'] # 小伙伴的 邮箱md5， 是个数组
  requiredFields: ['nick', 'mail'] # 设置必填项 ['nick', 'mail'] nick为昵称必填， mail为邮箱必填, 空数组，则不校验
  backgroundImg: '/medias/comment-bg.gif' # 右下角背景图片, or http://xxx.gif
  backgroundColor: 'rgba(255,255,255,0.9)' # 背景颜色, 0.9标是透明度
```

### 鼠标手势
设置主题文件夹下的`_config.yml`文件中的`cursor`属性，可自行替换链接，参数如下:
```yaml
# 鼠标手势
# 鼠标手势
cursor:
  pointer: https://zhutix.com/wp-content/themes/b2/x2.cur
  default: https://zhutix.com/wp-content/themes/b2/x1.cur
  text: 
  zoom-in: 
  zoom-out: 
```

### 字数统计
```yaml
# wordcount字数统计, 需要 npm i hexo-wordcount 安装
wordcount:
  on: true
```

### 天气
设置主题文件夹_config.yml的`weather`属性true或者false，控制显示和隐藏


### 背影彩带
```yaml
# 背影彩带
ribbon:
  on: false
```

### 图片懒加载
设置主题文件夹下的`_config.yml`文件中的`loadingImg`属性，可自行修改预加载图片链接
```yaml
# 图片懒加载
# https://www.npmjs.com/package/vanilla-lazyload
lazyload:
  enable: true
  js: https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.1.0/dist/lazyload.min.js
  onlypost: false
  loadingImg: https://img2.baidu.com/it/u=2037979560,2772131037&fm=26&fmt=auto&gp=0.jpg
  blurIn: true # 模糊加载效果 （loadingImg为空时有效）
```

### 关灯
设置主题文件夹下的`_config.yml`文件中的`dark`属性，控制头部导航的开关灯按钮是否显示，控制是否默认显示关灯, 具体如下
```yaml
# 黑夜模式, 关灯
dark:
  on: true # 是否在头部导航上显示开关灯
  default: false  # true为默认关灯状态（刷新页面和跳转页面都是关灯状态），false为默认开灯状态(网页第一次打开的时候为开灯状态)
```

### 弹幕
显示当前也免得弹幕
```yaml
# 弹幕 只对valine评论有效，需要开启valine评论
danmu:
  on: true
  loop: false # 设为true，则弹幕完了之后，继续查询评论接口，将该篇文章的评论再显示在弹幕里
  delay: 5000 # 每条弹幕之间出现的间隔时间
  speed: 20 # 弹幕运行的速度, 越小越快
```

### 灯笼
```yaml
lantern:
  on: true
  left: '春' # 左边灯笼的文字， 空字符串则没有文字
  right: '节' # 右边灯笼的文字
```

### 文章标题打字特效
文章详情页上的标题打字效果
```yaml
# 文章详情页图片上的标题打字效果
typed:
  on: true
  loop: false # 是否循环
  showCursor: false # 是否显示光标
  startDelay: 100 # 开始延迟
  typeSpeed: 100 # 打字速度
  backSpeed: 50 # 删除速度
```

### 文章头部气泡显示
文章详情页头部气泡效果
```yaml
# 文章详情页图片上的气泡效果
bubble:
  on: true
```
### 首页文章图片显示位置
```yaml
# 首页文章图片是否一左一右交错显示
homePostImgsPosition:
  on: true
  left: true # 当上面的on设置为false（不交叉显示），则指定left为true的时候，图片在左边显示
  
```