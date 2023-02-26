---
title: 轮播-swiper
date: 2022-11-13 08:35
# swiper: true
categories: 前端
tags: [tag]
# top: true
img: https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg
bgImg: https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg
---
## 文章轮播图
> 这次新增了一个文章轮播图插件和beaudar评论，beaudar评论在配置文件里将`beaudar.on`设为true，然后将仓库设置为自己的github仓库即可。
beaudar：https://beaudar.lipk.org/

言归正传:

{% title h2, 轮播事例 %}
{% titleB h3, 展示多个，宽度最小, #ffa502 %}

{% swiper width:multiple %}
![图片描述111](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![图片描述22222](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![图片描述33333](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
![图片描述44444](https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg)
![图片描述55555](https://pica.zhimg.com/80/v2-dff5af5b4e0331e3b9c22ef1004d88c8_1440w.jpg)
{% endswiper %}
{% titleB h3, 事例代码, #ff6348 %}
``` markdown
{% swiper width:multiple %}
![图片描述111](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![图片描述22222](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![图片描述33333](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
![图片描述44444](https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg)
![图片描述55555](https://pica.zhimg.com/80/v2-dff5af5b4e0331e3b9c22ef1004d88c8_1440w.jpg)
{% endswiper %}
```

{% titleB h3, 默认, #ffa502 %}
{% swiper %}
![图片描述](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
{% endswiper %}
{% titleB h3, 事例代码, #ff6348 %}
``` markdown
{% swiper %}
![图片描述](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
{% endswiper %}
```


{% titleB h3, 展示一个，填充整个容器, #ffa502 %}
{% swiper width:fill %}
![图片描述](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
{% endswiper %}
{% titleB h3, 事例代码, #ff6348 %}
``` markdown
{% swiper width:fill %}
![图片描述](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![图片描述](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
{% endswiper %}
```

{% titleB h3, 无描述文字, #ffa502 %}
{% swiper width:multiple %}
![](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
![](https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg)
![](https://pica.zhimg.com/80/v2-dff5af5b4e0331e3b9c22ef1004d88c8_1440w.jpg)
{% endswiper %}
{% titleB h3, 事例代码, #ff6348 %}
``` yaml
{% swiper width:multiple %}
![](https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg)
![](https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg)
![](https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg)
![](https://pic1.zhimg.com/80/v2-6d0cbd4380b4959542d3f5da31c7f20c_1440w.jpg)
![](https://pica.zhimg.com/80/v2-dff5af5b4e0331e3b9c22ef1004d88c8_1440w.jpg)
{% endswiper %}
```



{% titleB h3, 跳转链接, #ffa502 %}
> 使用原生img标签，加上href属性即可，例如点击图片跳转到百度，则加上href="https://baidu.com" 属性
{% swiper width:fill %}
<img src="https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg"  href="https://baidu.com" alt="跳转百度">
<img src="https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg" href="https://github.com/yuang01/hexo-theme-bamboo" alt="点击跳转github">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="https://juejin.cn/" alt="点击跳转到掘金社区">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="/" alt="点击跳转到首页">
{% endswiper %}
{% swiper  %}
<img src="https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg"  href="https://baidu.com" alt="点击跳转百度">
<img src="https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg" href="https://github.com/yuang01/hexo-theme-bamboo" alt="点击跳转github">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="https://juejin.cn/" alt="点击跳转到掘金社区">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="/" alt="点击跳转到首页">

{% endswiper %}
{% titleB h3, 事例代码, #ff6348 %}
``` markdown
{% swiper width:fill %}
<img src="https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg"  href="https://baidu.com" alt="点击跳转百度">
<img src="https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg" href="https://github.com/yuang01/hexo-theme-bamboo" alt="点击跳转github">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="https://juejin.cn/" alt="点击跳转到掘金社区">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="/" alt="点击跳转到首页">
{% endswiper %}


{% swiper %}
<img src="https://pic2.zhimg.com/80/v2-b72c5a1840b763674a5a1744cb49f08b_1440w.jpg"  href="https://baidu.com" alt="点击跳转百度">
<img src="https://pic1.zhimg.com/80/v2-9a1f1ad66d08747642c1b66727fea9f6_1440w.jpg" href="https://github.com/yuang01/hexo-theme-bamboo" alt="点击跳转github">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="https://juejin.cn/" alt="点击跳转到掘金社区">
<img src="https://pic1.zhimg.com/80/v2-e012e11ff2cd3270df046e3cd4fb9fbe_1440w.jpg" href="/" alt="点击跳转到首页">
{% endswiper %}
```