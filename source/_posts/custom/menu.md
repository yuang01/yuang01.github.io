---
title: 自定义css之导航和页脚高斯模糊
date: 2022-06-09 20:54:18
tags: ['自定义css']
categories: [自定义css]
swiper: true
img: https://pic1.zhimg.com/80/v2-6c63fd2701714cff0ce3dc57f0b18ccc_1440w.jpg
bgImg: https://pic1.zhimg.com/80/v2-6c63fd2701714cff0ce3dc57f0b18ccc_1440w.jpg
---

我看到挺多人导航都是默认的那种颜色，没有透明度，我自己感觉导航和页脚背景有一定的透明好看点，我先说一下透明度怎么搞，因为背景模糊效果的前提是先背景透明。


1. 头部导航透明:
打开主题配置文件`_config.yml`, 找到主题颜色哪里，也就是`color_scheme.common.headerMenuBackgroundColor`, 这个`headerMenuBackgroundColor`就是设置头部导航的值，我们将它设置为`rgba(66, 185, 133, 0.8)`, 此时我们头部就是绿色透明的了，0.8就是透明度，数值越小越透明，0.8前面的三个值就是rgb颜色值。会css的应该知道的哦



2. 底部页脚透明：
同样我们找到`color_scheme.footer.background`, 将`background`的值同样改为`rgba(66, 185, 133, 0.8)`, 这个时候页脚也变透明了。




3. 头部导航和页脚高斯模糊
其实很简单，一行代码搞定
首先我们需要在`source`文件夹下创建`custom/menu.css`文件，内容如下
``` css
#navHeader,
#j-fish-skip,
.footer {
    backdrop-filter: saturate(120%) blur(5px);
}
```
就是设置这个`backdrop-filter`属性就行了，这个属性具体可以百度。



然后将创建好的css导入进去:
找到主题配置文件`_config.yml`中的`import`，将css导进去：
``` yaml
import:
  link:
    - <link href="/custom/menu.css" rel="stylesheet">
```

上面的`source`文件夹和主题`themes`文件夹`同级`，也就是最外面(根目录下)的那个`source`文件夹，不是主题里的，这样就不会动源码。
至此，头部导航和页脚的模糊效果就完成了，效果如图：
### 模糊效果：
![模糊](/img/1654780436716.jpg)

### 透明效果：
![透明](/img/1654780591672.png)

差别不大，看个人喜好