---
title: 我的组件篇之pagination分页组件
date: 2018-10-29 11:55
categories: "vue组件"
tags: 'vue'
---
# 前言
之前在做项目的时候，用的就是自己写的分页组件，之前写的功能不是很齐全，所以在这里再一次的迭代了一遍。<a href="https://github.com/yuang01/v-plugs-ayu/blob/dev/src/components/Pagination.vue" target="_blank">源码</a>在这里，在线预览：<a href="https://yuang01.github.io/carousel/pagination.html">点这里</a>
<!-- more -->
![预览](/images/pagination.gif)
# 使用
首先可以先
``` bash
npm config set registry https://registry.npmjs.org/
```
然后
``` bash
npm install --save v-plugs-ayu
```
在man.js中引入即可
``` javascript
import "v-plugs-ayu/dist/personal-component.css";
import "v-plugs-ayu";
```
页面中直接使用就行了
``` html
<pagination></pagination>
```
# 参数Props
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
showTotal|显示总条数|boolean|true、false|false
showJumper|显示前往多少页的input|boolean|true、false|false
page-size|每页显示条目个数，支持 .sync 修饰符|number|-|10
total|总条目数|number|-|-
curpage|当前页数，支持 .sync 修饰符|number|-|1
pagination-size|组件大小|string|pagination-sm、pagination-lg|-
bgc|组件颜色|string|任意颜色值|#3e8ef7
prevText|上一页文字|string|任意|&lt;(向左箭头)
nextText|下一页文字|string|任意|&gt;(向右箭头)
disabled|是否禁用|boolean|true、false|false
# 事件
事件名称|说明|回调参数
:---|:--|:---
size-change|pageSize 改变时会触发|每页条数
current-change|curpage 改变时会触发|当前页
prev-click|用户点击上一页按钮改变当前页后触发|当前页
next-click|用户点击下一页按钮改变当前页后触发|当前页

en~，功能上的话还是可以再优化的，我会继续加油的!!!💪
