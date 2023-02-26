---
title: 自定义css之头部图片透明
date: 2022-06-09 18:56:20
tags: ['自定义css']
categories: [自定义css]
swiper: true
img: https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg
bgImg: https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg
---

其实我们是可以自定义css的，例如我把文章详情页上面文章名称后面的背景变透明，也是可以办到的。
如图所示：
![头部透明](/img/1654773163161.png)

步骤如下：
首先说明：下面的`source`文件夹和主题`themes`文件夹`同级`，也就是最外面(根目录下)的那个`source`文件夹，不是主题里的，这样就不会动源码
1. 首先我们在`source`文件夹下创建`custom/index.css`, 内容如下:
``` css
.post-detail-header {
    background-image: none!important;
    background-color: transparent!important;
    
}
.post-detail-header-mask {
    background: transparent!important;
}
#appBgSwiper {
    filter: brightness(0.8);
    background: rgba(0, 0, 0, .3)!important;
}
```
这里的`!important`就是权重值更高的意思。

2.引入我们创建好的css
打开主题配置文件`_config.yml`, 找到`import`, 引入css
``` yml
# 自己嵌入css或者script
import:
  link:
    - <link href="/custom/index.css" rel="stylesheet">
    - 
  script: 
    # - <script src="xxx.js"></script>
    - 
    - 
```

背景图片则使用参数`bgImg`指定, 例如:
``` yml
---
title: 自定义css之头部图片透明
date: 2022-06-09 18:56:20
tags: ['自定义css']
categories: [自定义css]
swiper: true
img: https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg
bgImg: https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg
---
```
`bgImg`还可以是数组哦，数组的话额背景图片轮播显示, 例如:
``` yml
bgImg: [
    'https://pica.zhimg.com/80/v2-292e6340491bd97f9d014d6be3371c04_1440w.jpg',
    'https://pica.zhimg.com/80/v2-9659f2305acb80f25ced33aa980092c1_1440w.jpg',
    'https://api.btstu.cn/sjbz/api.php',
]
```
`bgImg`不仅可以在文章里面单独配，还可以在主题配置文件里面`全局`指定。
``` 
bgImgTransition: 'fade' # fade, scale, translate-fade,
```
`bgImgTransition`表示背景图片切换特效, 可以在单独文章页面使用，也可以在主题配置文件里面`全局`指定。

然后就ok啦,大功告成

这个效果还可以和`添加动态背景`效果一起使用哦
{% link 动态背景bubbly, /post/bubbly-bg/index/, https://pica.zhimg.com/80/v2-dff764a1e0655154dd561022211fe11a_1440w.webp %}