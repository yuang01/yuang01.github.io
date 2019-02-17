---
title:  wepy+async+sass微信小程序
date: 2019-02-17 19:47
categories: "wepy"
tags: '小程序'
---
# 前言
业余时间写了一个小程序，但是不能上线，所以就当写着玩，想要学习的朋友可以`clone`我的<a href="https://github.com/yuang01/xcx" target="_blank">项目地址</a>。欢迎star

<!-- more -->
# 项目总览
![项目总览](/images/xcx.png)

# 项目运行
```
npm install wepy-cli -g
npm install
wepy build --watch
```
如遇到less不能编译的问题，请使用
```
npm install less -d
```

# 模块介绍
> 项目模块分为
* 新闻
* 新闻详情
* 笑一笑
* 机器人小艾

# 新闻
数据来源：<a href="https://www.jisuapi.com/" target="_blank">极速数据</a>
模块分为有头条、体育、娱乐等等`13个类别`。
支持手滑`左右切换`。
头部tab栏支持`自动定位`到相应的新闻类别，并且支持滑动,。
有加载`动画`。
右下角有`刷新`按钮。
当请求数据的时候，右下角按钮会旋转，并且可以`上拉加载`更多。

# 新闻详情
显示新闻的详细内容。

# 笑一笑模块
数据来源：<a href="https://blog.csdn.net/c__chao/article/details/78573737">大佬开源数据</a>
该模块显示一些笑话、搞笑图片、搞笑gif图片、搞笑视频。
功能介绍： 有加载动画，支持`下拉刷新`，当点击图片时，可以`预览图片`，`上拉加载`更多，支持视频在线观看等。

# 机器人小艾模块
数据来源：百度的<a href="http://www.tuling123.com/">图灵机器人</a>
和机器人小艾进行对话。

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

#### 小程序解析HTML
1. 使用<a href="https://github.com/icindy/wxParse" target="_blank">wxParse</a>
2. 使用小程序自带的标签`<text></text>`或者`<rich-text></rich-text>`

#### 项目中会需要使用一些组件或者一些api（下拉刷新、配置底部tabbar、获取手机系统的宽高）等等
不管是使用哪个框架，这些都是不变的，详情请点击<a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank">小程序API</a>

#### 小程序的像素
向程序的像素使用的是rpx，对元素设置rpx，会让元素在不同的手机上显示的效果是一样样的，这个是小程序底层代码自动编译的。

# 扩展知识
<a href="https://github.com/justjavac/awesome-wechat-weapp" target="_blank">微信小程序开发资源汇总</a>


