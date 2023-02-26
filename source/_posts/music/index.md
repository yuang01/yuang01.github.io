---
title: 音乐播放器失效问题
date: 2023-02-04 09:16
swiper: true
categories: 前端
tags: [音乐,博客]
# top: true
img: https://pic2.zhimg.com/v2-c2d78ddec37aabf737bcfe1d58f6813d_b.jpg
bgImg: https://pic2.zhimg.com/v2-c2d78ddec37aabf737bcfe1d58f6813d_b.jpg
---
{% title h2, 主题自带的播放器 %}

前些天主题自带的音乐播放器(左下角)失效了，这是因为播放器依赖的是`meting.js`，而`meting.js`的api挂了，但也说不定过几天就好了，如果一直不好的话可以自己搭建，具体请看他的github：

{% link MetingJs, https://github.com/metowolf/MetingJS, https://pic2.zhimg.com/v2-c2d78ddec37aabf737bcfe1d58f6813d_b.jpg %}

{% title h2, 导入外部播放器 %}
当然，自带的音乐播放器并不是唯一，也可以自定义音乐播放器，例如下面的播放器

{% link 懒耗子播放器, https://player.lzti.com/, https://pic2.zhimg.com/v2-c2d78ddec37aabf737bcfe1d58f6813d_b.jpg %}

我用的是他的免注册demo版本。具体操作步骤如下：
在主题配置文件`_config.yml`里，找到`import`配置项，导入js即可
``` yaml
# 自己嵌入css或者script
import:
  script:
    - <script defer src="https://player.lzti.com/api/player/demo" id="myhk" key="demo" skin="player" lr="l" m="1"></script>
```
> 注意， script标签一定要带上 `defer`属性, 因为这个播放器依赖`jquery`，如果不加`defer`的话，则会在jquery.js加载之前加载，就会报错。

然后刷新页面就能看到效果了，当然你也可以不用`demo`版本，直接登录注册，然后使用自己的网易云或者qq音乐歌单。

{% title h2, 其他 %}
其实我一开始发现的是一个叫做`明月浩空`的播放器，跟`懒耗子`一样，也不知道谁是真的，我不管，能用就行,但是`明月浩空`播放器，播放音乐的时候，歌词出现严重错位，所以我就用了`懒耗子`，这里附上`明月浩空`播放器网址:
{% link 明月浩空播放器, https://myhkw.com/, https://pic2.zhimg.com/v2-c2d78ddec37aabf737bcfe1d58f6813d_b.jpg %}