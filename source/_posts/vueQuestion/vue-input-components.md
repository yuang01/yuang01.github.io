---
title: vue之input组件
date: 2018-03-20  17:04
categories: "组件"
tags: ['vue', 'javascript']
---
之前在前端remark框架中发现input输入框做的蛮炫的，就决定把它做成组件，这里就来说说input组件的过程。
<!-- more -->
首先在父组件中使用v-model
``` bash
### 我这里给父组件取的名字叫float-input,trim是去掉输入框前后的空格
<float-input :placeholder="placeholder.title" v-model.trim="inputVal.title"></float-input>
```
然后在自组件中绑定value, 并且将表单的value传给父组件
``` bash
<template>
  <input :type="type" :required="required" class="form-control empty" 
  :value="value" 
  @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    value: {
      default: '', // value默认为空值，value就是父组件v-model传过来的值
    },
  }

};
</script>
```
##### 大致的input组件过程就是这样，我自己的input组件是这样的
``` bash
<template>
  <div class="form-group form-material floating" :class="hasColor">
    <input :type="type" :required="required" class="form-control empty"
    :value="value"
    @input="$emit('input', $event.target.value)" // 通过$emit()方式，子组件向父组件传值
    @blur="blurInput($event)" // input失焦事件
    @keyup.tab="showClean()" // 当用户点击tab触发事件
    @focus="showClean()">  // input聚焦事件
    // 将placeholder传过来，因为每个input的placeholder不一样
    <label class="floating-label">{{placeholder}}</label>
    // 点击x，清空input值
    <span class="clean" v-if="show" @click="clean($event)"><b>×</b></span> 
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { 
      default: {},
    },
    value: {
      default: '',
    },
    type: { // input 类型选择，例如'text','password'等
      default: 'text',
    },
    hasColor: { // 定义input颜色
      default: '',
    },
    required: { // 必填设置
      default: false,
    },
  },
};
</script>
```