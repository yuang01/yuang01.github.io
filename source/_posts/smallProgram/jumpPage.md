---
title:  wepy无法跳转页面
date: 2018-06-12 15:39
categories: "wepy"
tags: '小程序'
---
## 小程序无法跳转页面
<!-- more -->
#### 刚刚接触微信小程序，写了个登录界面，但是中间还是遇到了几个坑
### 首先是请求登录api的时候，调试工具上报错说 域名不合法，然后上网查了下，原来还要在后台配置服务器域名
![Alt text](/images/jumpPage-01.png)
设置好合法域名，需要等上10分钟左右，因为微信也要缓缓
### 合法域名生效后，开始对接，发现我想从登录页面台跳转到首页一直没反应
输出res，发现是有值的
``` bash
wx.request({
  url: 'https://xx',
  method: 'POST',
  data: {
    username: this.username,
    password: this.password
  },
  header: {'content-type': 'application/json'},
  success: function(res) {
  	console.log(res.statusCode) // 输出200
  }
})
```
然后上网查，别人说使用wx.redirectTo ，但是还是没有用
### 最后发现是因为我要跳转的地址和app.wpy中的tabbar中的pagePath路径一样，所以才跳转不了
login.wpy中是这样：
``` bash
wx.redirectTo({
	url: 'hotspot'
})
```
app.wpy中的tabbar是这样的
``` bash
pagePath: 'pages/hotspot', // 跳转路径和这个路径一样，所以不能跳转
```
#### 解决办法是使用wx.switchTab
``` bash
wx.switchTab({
	url: 'hotspot'
})
```
#### 最后问题解决