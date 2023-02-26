---
title: 首页添加弹幕
date: 2022-07-15 18:56:20
tags: ['首页添加弹幕']
categories: [首页添加弹幕]
swiper: true
img: https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg
bgImg: https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg
---

首页添加弹幕
1. 首先引入弹幕插件css和js，再导入自己编写的js，弹幕插件主题已经有了，所以引入就行，但是引入主题已经有的js和css只能在侧边栏模块里面引入；
``` yaml
home_widget:
  - class_name: mymusic
    id_name: mymusic
    order: -1
    name: 超好听的好吗😙
    icon: fa-solid fa-music
    icon_color: '#00AEEC'
    url: https://www.bilibili.com/video/BV1Da411n793?vd_source=79ce7c1b6f96c8b5a7ae552cc9be5225
    background: '#fff'
    html: '
    <iframe src="//player.bilibili.com/player.html?aid=215901212&bvid=BV1Da411n793&cid=772894060&page=1" scrolling="no" border="0" width="100%" height="476" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    <link href="/js/danmu/barrager.css" rel="stylesheet">
    <script src="/js/danmu/jquery.barrager.js"></script>
    <script src="/danmu/index.js"></script>
    '
```
主要引入上面的这三个文件:
``` yaml
<link href="/js/danmu/barrager.css" rel="stylesheet">
<script src="/js/danmu/jquery.barrager.js"></script>
<script src="/danmu/index.js"></script>
```
不懂侧边栏的，可以去侧边栏文章看看，如何新建首页侧边栏

{% link 侧边栏, /post/hexo-theme-bamboo/sidebar/, https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg %}

上面引入的三个文件中, 有一个叫做`/danmu/index.js`的文件需要我们自己编写和创建的：
在根目录的`source`文件夹下创建`danmu/index.js`文件:
``` js
// 真是闲的蛋疼 0.0....

function renderData() {
  let homeDanmuArr = [
    {
      img: "http://120.48.121.186/medias/logo.png", //图片
      info: "欢迎访问bamboo主题", //文字
      href: "https://yuang01.github.io/", //链接
      close: true, //显示关闭按钮
      speed: 15, //延迟,单位秒,默认6
      color: "#42b983", //颜色,默认白色
      old_ie_color: "#000000", //ie低版兼容色,不能与网页背景相同,默认黑色
    },
    {
      img: "http://120.48.121.186/medias/logo.png", //图片
      info: "国内可以访问http://120.48.121.186", //文字
      href: "http://120.48.121.186", //链接
      close: true, //显示关闭按钮
      speed: 15, //延迟,单位秒,默认6
      color: "blue", //颜色,默认白色
      old_ie_color: "#000000", //ie低版兼容色,不能与网页背景相同,默认黑色
    },
    {
      img: "http://120.48.121.186/medias/logo.png", //图片
      info: "国内可以访问http://120.48.121.186", //文字
      href: "http://120.48.121.186", //链接
      close: true, //显示关闭按钮
      speed: 12, //延迟,单位秒,默认6
      color: "red", //颜色,默认白色
      old_ie_color: "#000000", //ie低版兼容色,不能与网页背景相同,默认黑色
    },
  ];
  
  for (var i = 0; i < 20; i++) { // 生成 20 个 {}, 前三个已经写好，后面17个，通过请求api赋值
    homeDanmuArr[i] = homeDanmuArr[i] ? homeDanmuArr[i] : {speed: 12};
  }
  return homeDanmuArr;
}
function homeDanmuFn() {
  let data = renderData();
  //每条弹幕发送间隔
  let homelooper_time = 3 * 1000;
  let items = data;
  //弹幕总数
  let total = data.length;
  //是否首次执行
  let run_once = true;
  //弹幕索引
  let index = 0;
  //先执行一次
  barrager();
  async function barrager() {
    if (run_once) {
      //如果是首次执行,则设置一个定时器,并且把首次执行置为false
      homelooper = setInterval(barrager, homelooper_time);
      run_once = false;
    }
    //发布一个弹幕
    const responseImg = await fetch('https://api.btstu.cn/sjtx/api.php?lx=c1&format=json');
    const imgJson = await responseImg.json();
    const responseInfo = await fetch('https://api.vvhan.com/api/ian?type=json');
    const infoJson = await responseInfo.json();
    // 随机头像api
    items[index].img = imgJson.imgurl;
    // 随机一言
    index > 2 && (items[index].info = infoJson.ishan);
    $("body").barrager(items[index]);
    //索引自增
    index++;
    //所有弹幕发布完毕，清除计时器。
    if (index == total) {
      clearInterval(homelooper);
      return false;
    }
  }
}
homeDanmuFn();

document.addEventListener('pjax:send', function (e) {
  if (homelooper) {
    clearInterval(homelooper);
    $.fn.barrager.removeAll();
  }
})


```

然后大功告成，弹幕内容请求的随机一言api

最后预览地址：http://120.48.121.186/