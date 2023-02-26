---
title: 自定义live2d
date: 2022-07-10 14:38:20
tags: ['自定义']
categories: [自定义]
swiper: true
img: https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg
bgImg: https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg
excerpt: 自定义live2d
---

主题自带的live2d，也就是左下角人物，使用的是下面这个项目
{% link live2d-widget, https://github.com/stevenjoezhang/live2d-widget, https://pic1.zhimg.com/80/v2-d22efe6f645f50ee0519bd5c7ce791fa_1440w.jpg %}

如果不把这个项目放入服务器上，然后引用js的话，会导致live2d人物图片`显示不出来`，可能是受到`jsdelivr`的限制。如果你有服务器的话不妨可以折腾一下


-----------------------------------------------------------------------------------------



如果上面主题自带的live2d显示不出来的话，可以使用我下面的方法.

首先需要在配置文件里将主题自带的`live2d`给关闭:
``` yaml
# live-2d(左下角动画人物)
live2d:
  on: false # 控制显示或者隐藏
```
1. 首先在`source`文件夹(根目录下的source文件夹)下创建`live2d/index.js`文件，写入以下内容:
``` js
L2Dwidget.init({
  model: {
    jsonPath:
      "https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json",
    scale: 1,
  },
  display: {
    position: "left", //模型的表现位置
    width: 150, //模型的宽度
    height: 300, //模型的高度
    hOffset: -50, // 向左向右偏移
    vOffset: -150, // 向上向下偏移, 根据情况可以自己调整数值
  },
  mobile: {
    show: false, // 手机端不显示
    scale: 0.5,
  },
  react: {
    opacityDefault: 1, //模型默认透明度
    opacityOnHover: 0.2,
  },
});

```

2. 然后找到主题的配置文件`_config.yml`，找到`import`, 将两个js引进去：
``` yaml
import:
  link:
    # - <link href="xxx.css"  rel="stylesheet">
  script: 
    - <script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>
    - <script src="/live2d/index.js"></script>
```


然后就能显示左下角的live2d了，这个方法是看的这个文章：

{% link live2d, https://blog.csdn.net/linshuhe1/article/details/94903871, https://img-home.csdnimg.cn/images/20201124032511.png %}

可以阅读这个文章，`更改模型`。
最后效果如图:
![live2d](/img/swiper1.png)

当然，还有网上说的`hexo-helper-live2d`这个插件，你们也可以试试，也是加载live2d的。可以百度这个插件，然后配置。