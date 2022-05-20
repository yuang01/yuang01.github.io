---
title: Bamboo主题-主题更改（三）
date: 2021-07-05 11:10
swiper: true
swiperImg: 'https://w.wallhaven.cc/full/48/wallhaven-48yppo.jpg'
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
img: https://w.wallhaven.cc/full/48/wallhaven-48yppo.jpg
swiperDesc: '该文档是版本2.3.0的文档，版本号可以从主题下的`package.json`查看'
excerpt: '主题更改（三）'
---

> 有问题去[留言板](/messageBoard)留言
<!-- 使用主题之前请先去github点个{% span large red, star %}。 -->
{% ghcard yuang01/hexo-theme-bamboo, theme=vue %}

{% title h2, 主题更改 %}
### 归档、标签、分类、关于我、友情链接页面图片自定义
通过主题文件夹下的`_config.yml`文件中的相应属性进行设置，属性如下：
``` yaml
# 归档页面图片、描述、视频，全屏 or 'http://xxx'
archive:
  title: 'archive'
  img: 'https://pic1.zhimg.com/80/v2-1414b3a4b205e19060db18a20d08723a_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: true # 设置为true，则图片全屏显示
  video: '' # 如果有值，则在屏幕大于920px的时候，全屏显示视频，为空则显示图片(img)
  background: '' # red or rgba(255,255,255,0.8) or other color or url("http:xxx.png")
  yearColor: '' # 年份字体颜色
  monthColor: '' # 月份字体颜色
  titleColor: '' # 标题字体颜色

# 标签页面，配置同上
tag:
  title: 'tags'
  img: 'https://pic2.zhimg.com/80/v2-bf6c555e7c61a57ba4a1fd95a9a32975_1440w.jpg' # 标签页上面的图片
  desc: '愿你如风，被人温柔以待'
  full: false # 标签页上面的图片是否全屏显示
  video: '' # 如果有值，则在屏幕大于920px的时候，全屏显示视频
  background: '' # red or rgba(255,255,255,0.8) or other color or url("http:xxx.png")
  titleColor: '' # 标题字体颜色

# 标签详情页面，配置同上
tagDetail:
  title: 'tag'
  img: 'https://pic1.zhimg.com/80/v2-604a15cef201cf177943af2d915eb2e7_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待' # 标签页详情上上面的图片上的文字
  full: false
  video: ''
  background: '' # red or rgba(255,255,255,0.8) or other color or url("http:xxx.png")

# 分类页面，配置同上
categories:
  title: 'categories'
  img: 'https://pic2.zhimg.com/80/v2-7c496c95897fb15768593cc5170c8b1a_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: false
  video: ''
  background: '' # red or rgba(255,255,255,0.8) or other color or url("http:xxx.png")
  titleColor: '' # 标题字体颜色

#分类详情页面，配置同上
categoryDetail:
  title: 'category'
  img: 'https://pic3.zhimg.com/80/v2-98dcd81cb0d1fee52a807c13cedb8338_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: false
  video: ''
  background: '' # red or rgba(255,255,255,0.8) or other color or url("http:xxx.png")

# 关于我页面，配置同上
about:
  title: 'about'
  img: 'https://pic4.zhimg.com/80/v2-d12b0c9802720897793993a5a199720f_1440w.jpg'
  desc: '愿你如风，被人温柔以待'
  full: false
  video: ''
  background: '' # red or rgba(255,255,255,0.8) or other color or url("http:xxx.png")
  titleColor: '' # 标题字体颜色

# 友情链接页面，配置同上
friends:
  title: 'friends'
  img: 'https://pic2.zhimg.com/80/v2-2407599a217ba89f9499c282f129d44d_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: false
  video: ''
  background: '' # red or rgba(255,255,255,0.8) or other color or url("http:xxx.png")
  titleColor: '' # 标题字体颜色

```

### 自定义主题
默认主题颜色是绿色`#42b983`，可以通过设置主题文件夹下的`_config.yml`文件中的`color_scheme`属性，进行配置，参数如下:
```yaml
# 主题颜色
color_scheme:
  # ------------
  # 通用颜色
  common:
    # 主题色
    theme: '#42b983'
    # 主题色块内部的文字颜色
    inner: '#fff'
    # 链接色 a标签
    link: '#42b983'
    # border颜色，目前轮播图的 阅读更多按钮 和 回到顶部按钮 有用到该border，可自行配置该颜色
    border: '2px solid #42b983'
    # 选中区域文字的背景颜色, 后面的小数代表透明度
    selection: 'alpha(#42b983, 0.8)'
    # 顶部页面加载进度条颜色
    pace: '#f6a427'
    # 滚动条颜色, 空字符串则滚动条使用 主题色，否则强制使用该颜色
    scroll: '#42b983'
    # 首页文章列表的背景颜色, url("http://xxx.png") or red or #000 or rgba() ..
    postListBackground: 'rgba(255,255,255,1)'
    # 首页页面的底部背景颜色，空字符串透明('transparent')，可以是白色('#fff')等颜色, 也可以是图片，例如  'url("https://img11.360buyimg.com/ddimg/jfs/t1/169624/29/16/4603017/5fec2c79Eecbd536a/308b28b82a013cd2.png")'
    bgFloor: 'url("https://pic1.zhimg.com/80/v2-b4b71405d08bc1952025ba1bd5db54f3_1440w.jpg?source=1940ef5c")' # 如果是图片地址，url里面请用双引号
    # 头部导航是否背景透明，滚动条在对顶端的时候,头部导航背景透明
    headerMenuTransparent: true
    headerMenuBackgroundColor: '' 
    # headerMenuBackgroundColor:头部导航背景颜色, 为空则使用theme主题色, 
    # 写法: alpha(#42b983, 0.8) or rgba(268, 264, 269, 0.8) or #42b983 or red or 也可以是渐变颜色 linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)  or 也可以是url("图片地址")
  # 文章详情页 颜色属性
  post:
    # 文章详情页面-->标题在图片上时候的颜色
    headerTitle: '#fff'
    # 文章详情页面-->标题在图片上时候字体粗细
    headerTitleFontWeight: 'normal' # 100-900 or bold, normal, bolder, lighter
    #文章详情页面--> copy按钮背景色, 空字符串则copy按钮背景为 主题颜色，否则强制使用该颜色
    copyBackground: ''
    #文章详情页面--> copy按钮文字颜色, 空字符串则copy按钮字体颜色为 主题色块内部的文字颜色，否则强制使用该颜色
    copyColor: ''
    # 代码高亮部分的背景色, 空字符串则使用-代码高亮配置-的背景颜色，否则强制使用该颜色作为代码高亮背景色
    codeBackground: ''
    # 文章详情页面--> p标签使用 ``符号 突出的文字颜色
    pLight: '#d63200'
    # 文章详情-页面-> p标签颜色
    p: '#273849'
    # 文章详情页面--> title颜色， h1, h2, h3..
    title: '#273849'
    # 文章详情页面 -->右侧目录文字颜色
    toc: '#273849'
    # 文章详情页面 --> font-family
    fontFamily: '-apple-system,BlinkMacSystemFont,PingFang SC,Segoe UI,Microsoft YaHei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif'
    # 文章详情页面 --> 透明度, 左侧文章内容背景颜色的透明度
    contentOpacity: '1'
    # 文章详情页面 --> 透明度, 右侧文章目录背景颜色的透明度
    tocOpacity: '0.8'
    # bgImg -- 文章详情页背景图, 针对所有的文章详情页背景
    # 可以是数组（数组里面是图片地址，多个图片地址会采用 幻灯片 循环显示），
    # 如果背景只想要一个图片：可以使用 ['http://xxxxxx'] 或者 'http://xxxxxxx'，这样的写法, 图片地址也可以是本地路径('/img/xxx.png' or '/medias/xxx.png')
    # 也可以是颜色字符串（例如'#C7EDCC', 或者rgba(0 ,0 ,0, 0.8) 那么会使用该颜色作为背景）
    # 空字符串则背景颜色为透明
    bgImg: [
      'https://pic4.zhimg.com/80/v2-5030587bac1b856d09e0a119ff6d7c04_1440w.jpg',
      'https://api.btstu.cn/sjbz/api.php'
    ]
    # 背景图幻灯片模式--延迟时间
    # 如果bgImg设置为数组，数组里面是多个图片地址,则 bgImgDelay表示背景图幻灯片的 延迟间隔时间
    bgImgDelay: 180000 # 默认三分钟，切换一张图片
    # 如果bgImg设置为数组，数组里面是多个图片地址,则 bgImgTransition表示背景图幻灯片的 动画效果
    bgImgTransition: 'fade' # fade, scale, translate-fade,
    ## bgImg，bgImgDelay，bgImgTransition三个属性除了可以在这里全局配置，还可以在单独的文章里配置
    ## 单独的文章里配置，则这bgImg，bgImgDelay，bgImgTransition三个属性优先使用单独的文章里配置的
  footer:
    # 为空则使用 theme主题色， 写法: alpha(#42b983, 0.8) or rgba(268, 264, 269, 0.8) or #42b983 or red or 也可以是渐变颜色 linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%) or 也可以是url("图片地址")
    background: '' 
    # 页脚里面的a标签鼠标移入时候的颜色 red or #000 or other color
    aHover: 'orangered' 

```
这里重点说几个参数，`theme`是主题色参数, `bgFloor`是`首页`背景颜色或者背景图片参数, `bgImg`是`文章详情页面`的背景图片或者背景颜色参数, `contentOpacity`是文章详情页面的左侧文章内容背景颜色的透明度，`tocOpacity`是文章详情页面的右侧文章目录背景颜色的透明度，其余参数上面有注释哈
