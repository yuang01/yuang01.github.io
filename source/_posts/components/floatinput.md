---
title: 我的组件篇之input组件
date: 2018-09-16 11:06
categories: "vue组件"
tags: 'vue'
---
# 前言
之前在做项目的时候会用到自己写的组件，但是呢，换了一个项目之后就得重新拷贝组件，这样挺麻烦的，所以呢，就自己在vue3.0的基础上搞了个自己的<a href="https://github.com/YuAngBoy/v-plugs-ayu/tree/dev" target="_blank">组件库</a>，当然现在只有一个组件-->FloatInput组件
<!-- more -->
# FloatInput预览
![预览](/images/myplug-floatinput.gif)
# 使用
如果是淘宝源使用
``` javascript
cnpm install v-plugs-ayu --save
```
否则
``` javascript
npm install v-plugs-ayu
```
如果是vue-cli3.0的项目,在man.js中引入即可
``` javascript
import FloatInput from "v-plugs-ayu";
import "v-plugs-ayu/dist/personal-component.css";
```
如果是vue-cli2.0的项目,在单独的页面直接导入
``` javascript
import FloatInput from 'v-plugs-ayu'
export default {
    components: {
        FloatInput
    },
}
```
页面中直接使用就行了
``` html
<float-input></float-input>
or
<FloatInput></FloatInput>
```
# 参数Props
参数|说明|类型|可选值|默认值
---|--|---|---|--|---|---
placeholder|提示信息|string|-|-
type|输入框类型|string|text、password、email|text
required|是否必填|boolean|true、false|false
hascolor|自带的输入框颜色|string|has-default、has-danger、has-success、has-warning、has-info|has-default
color|自定义输入框颜色，若果has-color和color同时存在，则优先color参数|string|red、blue、#000等等|-
# 结语
我相信，随着我技术不断地提升，可以写出更多更好的组件的，加油！！
