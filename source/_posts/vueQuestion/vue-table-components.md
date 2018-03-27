---
title: table组件
date: 2017-12-14 18:39:16
categories: "组件"
tags: ['vue', 'javascript']
---
之前在做项目的时候，就发现假如响应式表格里面的数据很多的话，就会把表格撑开，这样会显得特别的难看，所以就做了一个表格组件,现如今支持吃两种形式，一种是两边固定，中间可以拖动的形式，一种就是表格列不是很多的时候，就用原本的表格。
<!-- more -->
![Alt text](/images/table.png)
当然另一种就是使用原始的表格，只是对url进行了处理，后台传过来的url可以通过pops传入一个数值，将一行中的某个列变成超链接。
![Alt text](/images/table2.png)
废话不多说，直接给出代码
``` bash

<template>
<transition>
  <!-- 两边固定的表格 -->
  <div v-if="type === 'fixed'">
    <div class="tab1">
      <table class="table table-hover table-striped table-custom">
        <thead>
          <tr>
            <th>序号</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arr.length" :key="item" :class="{'bg-default': index === bgDefault}" @mouseover="addBgColor(index)" @mouseout="bgDefault = -1">
            <td>{{ index + 1 + (currentPage - 1) * 15}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tab2">
      <table class="table table-hover table-striped table-custom">
        <thead>
          <tr>
            <th v-for="(item, colindex) in Th" :key="colindex">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arr" :key="index" :class="{'bg-default': index === bgDefault}" @mouseover="addBgColor(index)" @mouseout="bgDefault = -1">
            <td v-for="(eq, tdindex) in Td" :key="tdindex">
              <!-- 表格中的url只支持一行中的一个字段拥有超链接，urlIndex自定义第几个字段拥有超链接，默认为0 -->
              <a :href="item.url" target="_blank" v-if="typeof item.url !== 'undefined' && tdindex === urlIndex"> {{item[eq]}}</a>
              <span v-else>{{item[eq]}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tab3">
      <table class="table table-hover table-striped table-custom">
        <thead>
          <tr>
            <th v-for="(item, index) in lastTh" :key="index">
              {{item}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arr" :key="index" :class="{'bg-default': index === bgDefault}" @mouseover="addBgColor(index)" @mouseout="bgDefault = -1">
            <td v-for="(eq, aindex) in lastTd" :key="aindex">{{item[eq]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- 基本表格 -->
  <div v-if="type === 'basic'">
    <table class="table table-hover table-striped table-custom">
      <thead>
        <tr>
          <th>序号</th>
          <th v-for="(item, index) in Th" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 + (currentPage - 1) * 15}}</td>
          <td v-for="(eq, tdindex) in Td" :key="tdindex">
            <!-- 表格中的url只支持一行中的一个字段拥有超链接，urlIndex自定义第几个字段拥有超链接，默认为0 -->
            <a :href="item.url" target="_blank" v-if="typeof item.url !== 'undefined' && tdindex === urlIndex">{{item[eq]}}</a>
            <span v-else>{{item[eq]}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    arr: {
      default: [],
    },
    currentPage: {
      default: 1,
    },
    columns: {
      default: {},
    },
    type: {
      default: 'basic',
    },
    // 指定一行中的第几个字段拥有url，从0开始
    urlIndex: {
      default: 0,
    },
  },

  data() {
    return {
      Th: [],
      lastTh: [],
      Td: [],
      lastTd: [],
      bgDefault: -1,
    };
  },

  methods: {
    addBgColor(index) {
      this.bgDefault = index;
    },
  },

  mounted() {
    if (this.type === 'fixed') {
      this.Th = this.columns.th.splice(0, this.columns.th.length - 2);
      this.lastTh = this.columns.th.splice(this.columns.th.length - 2, this.columns.th.length);
      this.Td = this.columns.td.splice(0, this.columns.td.length - 2);
      this.lastTd = this.columns.td.splice(this.columns.td.length - 2, this.columns.td.length);
    } else if (this.type === 'basic') {
      this.Th = this.columns.th;
      this.Td = this.columns.td;
    }
  },
};
</script>

<style scoped>
  .tab1 {
    width: 5%;
    max-width: 5%;
    float: left;
    overflow: hidden;
    box-shadow: 2px 1px 2px 0px #eee;
  }
  .tab2 {
    width: 85%;
    max-width: 85%!important;
    float: left;
    overflow: hidden;
    overflow-x: scroll;
  }
  .tab3 {
    width: 10%;
    max-width: 10%;
    float: right;
    overflow: hidden;
    box-shadow: -2px 1px 2px 0px #eee;
  }
  .bg-default {
    background: #f3f7fa!important;
  }
  .table-custom th,
  .table-custom td {
    max-width: 500px;
    min-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .table-custom a {
    text-decoration: none;
  }
</style>

```