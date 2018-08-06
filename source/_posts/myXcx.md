---
title:  我的小程序
date: 2018-08-06 19:47
categories: "wepy"
tags: '小程序'
---
# 前言
之前有了解过小程序，觉得小程序挺强大的，比H5的页面流畅，并且功能挺强大的，最关键的是还挺简单的，然后自己利用平时业余的时间写了一个小程序玩玩，感觉还不错，进来看看吧...

有兴趣的朋友可以`clone`看一下，我的<a href="https://github.com/YuAngBoy/xcx/tree/dev" target="_blank">项目地址</a>，代码写的还行。

<!-- more -->
# 项目总览
![项目总览](/images/xcx03.gif)
> 项目模块分为三大类
* 新闻模块
* 笑一笑模块
* 机器人小艾模块

# 新闻模块
想必大家都看出来了，新闻模块这个地方和`今日头条`的小程序很像，其实我就是照着今日头条的样子做的，哈哈，感觉仿照的逼真。

简单的介绍一下这个模块的功能吧，这个模块分为有头条、体育、娱乐等等`13个类别`，支持手滑`左右切换`，头部tab栏支持`自动定位`到相应的新闻类别，并且支持滑动, 有加载`动画`，右下角有`刷新`按钮，当请求数据的时候，右下角按钮会旋转，并且可以`上啦加载`更多，点击新闻，进入写新闻`详情界面`。

可能眼尖的朋友发现了，新闻模块底下好像有一段空白，这个在手机上测试时刚刚好的，不会出现空白，微信开发者工具中会出现空白.

该模块的数据使用的是<a href="https://www.jisuapi.com/" target="_blank">极速数据</a>。很无奈，我不会写爬虫，所以只能和靠第三方api对接了，api还得省着用，一天只能请求100次，害得我跑去冲会员，辛酸泪，不过我已经私下里开始学爬虫了，相信自己！ヾ(◍°∇°◍)ﾉﾞ

# 笑一笑模块
该模块显示一些笑话、搞笑长图片、搞笑gif图片、搞笑视频。

功能介绍： 支持`下拉刷新`，当点击图片时，可以`预览图片`，`上拉加载`更多，支持视频在线观看。

该模块的数据使用的是一个大佬写的api，<a href="https://blog.csdn.net/c__chao/article/details/78573737">大佬博客</a>，大家如果要用这个`api`的话可以去他博客留言，赞赏一下大佬哦。

# 机器人小艾模块
该模块可以和机器人小艾进行普通对话，做的不是很全，只支持文字对话。

功能介绍：对话

该模块使用的数据是百度的<a href="http://www.tuling123.com/">图灵机器人</a>，这个很简单的，简单注册一下就可以申请机器人了，超级简单，不过坑就坑在，好像这个api是http的，并且没有冲会员也只能一天对接100次，不过这个挨批、还是蛮强大的，点一下赞。

#### 以上就是项目的三个模块

# 项目知识点
#### 该项目使用的时小程序的wepy框架，在这里补充一下书写小程序的方法
* <a href="https://developers.weixin.qq.com/miniprogram/dev/" target="_blank">小程序原生开发文档</a>
* <a href="https://tencent.github.io/wepy/index.html" target="_blank">wepy开发文档</a>
* <a href="http://mpvue.com/" target="_blank">mpvue开发文档</a>
简单说一下mpvue框架的语法和vue的语法是一样的，只是少了vue的一些东西，比如vue-router等等，还有一点比较烦就是每新增一个页面都要手动重启编译一下，但是好处也是有很多的，像vuex什么的都有。
这个项目我选择的时wepy，这是一个类vue的框架，支持redux等等
新建一个wepy项目也是特别的简单，使用如下代码即可。
``` bash
npm install wepy-cli -g
wepy init standard myproject
cd myproject
npm install
wepy build --watch
```

#### 该项目使用的是sass进行css编写，wepy默认是支持less的
wepy使用sass的步骤如下
``` javascript
//安装sass
npm i node-sass
//安装wepy-compiler-sass插件
npm install wepy-compiler-sass --save-dev
//配置wepy.config.js
module.exports = {
    "compilers": {
        sass: {
            'outputStyle': 'compressed'
        }
    }
};
```

####  wepy项目中使用async await
这里直接给链接了哈
<a href="https://github.com/Tencent/wepy/wiki/wepy%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8async-await" target="_blank">wepy项目中使用async await</a>

#### 在新闻模块需要注意的点
代码上没有什么难的，主要就是想介绍一下`wxParse`，像新闻详情页面们一般的后台会返回一串html代码给我们，我们需要进行html的富文本解析，所以这个时候可以使用<a href="https://github.com/icindy/wxParse" target="_blank">wxParse</a>，具体的用法可以上网百度，很简单的，不过我这个项目我感觉没必要用，所以我就简单的用了正则表达式去解析文本了。像一般的文本都放在小城的`<text></text>`或者`<rich-text></rich-text>`标签里。

#### 项目中会需要使用一些组件或者一些api（下拉刷新、配置底部tabbar、获取手机系统的宽高）等等
不管是使用哪个框架，这些都是不变的，详情请点击<a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank">小程序API</a>

#### 小程序的像素
向程序的像素使用的是rpx，对元素设置rpx，会让元素在不同的手机上显示的效果是一样样的，这个是小程序底层代码自动编译的。

#### 布局方法
其实就只是简单的使用了flex盒子模型布局，小程序自身有一些常用组件，其他的页面上的元素可以自己单纯手写，如果需要一些插件或者ui组件库的扩展的话，可以点击这个<a href="https://github.com/justjavac/awesome-wechat-weapp" target="_blank">微信小程序开发资源汇总</a>

#### 当然了，项目中也解决了一些坑，我就不说了，看代码就能知道了。
如果需要使用手机查看，请点击小程序右上角的三个点，然后点击打开调试即可。


