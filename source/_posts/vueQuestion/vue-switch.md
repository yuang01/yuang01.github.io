---
title: 手机端页面左右切换效果
date: 2018-05-11  16:24
categories: "手机端"
tags: ['vue', 'vux']
---
实现页面切换动画，配合transition轻松实现
<!-- more -->
之前搭了一个手机端ui框架(vux),发现页面切换太快了，前进、后退都是直接很快的切换，感觉不够平滑，vux官方demo中也是有页面切换动画效果的，然后就消效仿的做了下。
实现效果如下：
![Alt text](/images/myGIF.gif)
我的步骤如下：
	首先判断路由是前进还是后退了,需要在每个路由中的meta中增加index，最外面的路由的index最低，最里面的路由页面的index比较高。
``` bash
const routes = [{
  path: '/',
  meta: { index: 0 },
  component: Products
}, {
  path: '/enterprise',
  meta: { index: 1 },
  component: Enterprise
}, {
  path: '/sampling',
  meta: { index: 2 },
  component: Sampling
}]
```
然后在App.vue里面,将router-view外面增加一个transition,命名为变量transitionName
``` bash
<transition :name="transitionName">
	<router-view class="Router"></router-view>
</transition>
```
接下来就是在watch里面判断路由是前进了还是后退了
``` bash
watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  }
```
最后一步就比较重要了，那就是设置css动画效果,需要注意的是position: absolute是需要加的，因为这样才能让页面都是从同一个起点横向出发
``` bash
.Router {
   position: absolute;
   width: 100%;
   height: 100%;
   overflow: auto;
   transition: all .5s ease
}
.slide-left-enter,
.slide-right-leave-active {
   top: 0; // 如果想要下一个页面保持上一个页面滚动条位置就不用将top设置为0
   opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0)
}
.slide-left-leave-active,
.slide-right-enter {
   top: 0; // 如果想要下一个页面保持上一个页面滚动条位置就不用将top设置为0
   opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0)
}
```

没错，就是这么的简单，😂