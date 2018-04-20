---
title: vue在mounted中获取不到元素节点
date: 2018-04-20  16:10
categories: "vue"
tags: ['vue', 'javascript']
---
## 之前在写echarts的时候需要获取页面元素，然后渲染图表，但是获取元素的时候页面一直显示元素为空（null）
<!-- more -->
先开始我一直以为是vue不兼容echarts，然后就去找了vue-echarts，但是后来我发现不是echarts的问题，是我的根组件采用的是异步组件记载的方式，才导致页面元素无法在mounted的时候获取到。

首先我的根组件包含（头部导航、左侧导航、内容区域）我的每个页面需要用到这个根组件，一开始考虑到速度问题，都采用了异步组件加载的方式。
``` bash
const Base = () => import('@/components/Layouts/Base');
```
然后每个页面继承这个根组件
``` bash
<div class="page-content" slot="content"></div> // 继承根组件的内容区域
```
那么，我现在用echarts，需要获取页面元素节点,例如下面的div
``` bash
<div style="height: 300px;" id="line1" ref="line1"></div>
```
但是我在mounted里面获取该元素的时候，显示null
``` bash
console.log(document.getElementById('line1')); // null
```
然后我就试试使用ref来解决，但是还是显示undefined
``` bash
console.log(this.$refs.line1); // undefined
```

然后在网上找方法，别人说使用this.nextTick({})来延迟加载，然后我就试了试，依旧没用，很崩溃啊！

经过我的一番测试，发现在mounted里面根本获取不到值，然后我就想是不是根组件异步加载的问题，然后我就把
``` bash
const BaseLayout = () => import('@/components/Layouts/Base'); // 异步组件加载
```
改成了
``` bash
import BaseLayout from '@/components/Layouts/Base'; // import的导入方式
```

结果在mounted的里面可以获取到内容区域的元素的节点，然后echarts的图表渲染的时候，就没有报错了，之前一直出现can't read getAttribute of null
所以说异步组件加载有时候会导致一些问题，需要多注意.


