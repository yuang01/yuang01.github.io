---
title: vue之翻页组件
date: 2018-04-27 17:13
categories: "vue组件"
tags: 'vue'
---

## 很多系统中都会用到翻页组件，翻页组件不是很复杂，所以一般自己写比较好，而且也好修改，更加能够融合自己的项目
<!-- more -->

首先是htnl结构
``` bash
<template>
  <div class="example-wrap clear">
    <div class="example">
      <nav>
        <ul class="pagination pagination-no-border">
          <li class="page-item" @click="prev()" :class="{disabled : pstart}">
            <a class="page-link" href="javascript:void(0)" aria-label="Previous">
              <span aria-hidden="true">上一页</span>
            </a>
          </li>
          <li class="page-item" v-show="currentPage>5 && pages>7" @click="jumpPage(1)"><a class="page-link" href="javascript:void(0)">1</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)" v-show="efont">...</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)" v-show="pages === 0">0</a></li>
          <li class="page-item" v-for="(num,index) in indexs" :key="index" :class="{active:currentPage==num}" @click="jumpPage(num)"><a class="page-link" href="javascript:void(0)">{{num}}</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)" v-show="ebehind">...</a></li>
          <li class="page-item" v-show="currentPage<pages-4 && pages>7" @click="jumpPage(pages)"><a class="page-link" href="javascript:void(0)">{{pages}}</a></li>
          <li class="page-item" :class="{disabled : pend}" @click="next()">
            <a class="page-link" href="javascript:void(0)" aria-label="Next">
              <span aria-hidden="true">下一页</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
```

html里面无非就是点击上一页按钮，让当前的页数减一，点击下一页的时候，让当前的页数加一
当当前的页数等于1的时候，也就是到了第一页，就让上一页按钮显示disabled状态
当当前的页数等于从父组件传过来的总页数的时候，就让下一页按钮显示disabled状态
第一页的按钮只有在当你点击第六页的时候，并且总数要大于7页，才能够显示，最后一页要在当前的页数小于倒数第四个页数，并且总页数要大于7的情况下才能够显示，例如 1 8 9 10 11 12 13 14 100 这样的翻页，假如说上述条件不成立，第一页和最后一页，直接由中间的li，也就是indexs的计算渲染出来。

中间的li渲染其实很简单，如果页数大于7，小于总页数-4，就是取当前页数的前三个和当前页数的后三个，一共是7个页数
如果页数大于7，当前页数小于5，直接渲染1到7
否则的话，直接从倒数第六个页数直接渲染到最后一个页数

js代码如下

``` bash
<script>
export default {
  props: ['pages', 'value'],
  data() {
    return {
      currentPage: this.value,
    };
  },
  watch: {
    value(val) {
      this.currentPage = val;
    },
  },
  computed: {
    pstart() {
      return this.currentPage === 1 || this.pages === 0;
    },
    pend() {
      return this.currentPage === this.pages || this.pages === 0;
    },
    efont() {
      if (this.pages <= 7) {
        return false;
      }
      return this.currentPage > 5;
    },
    ebehind() {
      if (this.pages <= 7) {
        return false;
      }
      const nowAy = this.indexs;
      return nowAy[nowAy.length - 1] !== this.pages;
    },
    indexs() {
      let left = 1;
      let right = this.pages;
      const ar = [];
      if (this.pages >= 7) { // 总数大于7的时候
        if (this.currentPage > 5 && this.currentPage < this.pages - 4) {
          left = Number(this.currentPage) - 3;
          right = Number(this.currentPage) + 3;
        } else if (this.currentPage <= 5) {
          left = 1;
          right = 7;
        } else {
          right = this.pages;
          left = this.pages - 6;
        }
      }
      while (left <= right) {
        ar.push(left);
        left += 1;
      }
      return ar;
    },
  },
  methods: {
    prev() {
      if (this.currentPage === 1 || this.pages === 0) {
        return;
      }
      this.currentPage -= 1;
      this.$emit('input', this.currentPage);
    },
    jumpPage(id) {
      if (id === this.currentPage) {
        return;
      }
      this.currentPage = id;
      this.$emit('input', this.currentPage);
    },
    next() {
      if (this.currentPage === this.pages || this.pages === 0) {
        return;
      }
      this.currentPage += 1;
      this.$emit('input', this.currentPage);
    },
  },
};
</script>

```

注意，其中的value表示父组件传过来的当前页数，因为在子组件中修改了父组件传过来的值，并且又返回给父组件，所以得要现在子组件里的data里面创建一个currentPage属性，将value的值赋值给他，否则双向绑定会出现报错。

父组件直接v-model当前页数的值，props传给子组件，然后子组件修改后，使用this.$emit('input', currentPage)的方式传给父组件。

假如在$emit中的名称取其input，就可以直接响应式的改变父组件中v-model的值，也就不需要再去创建一个方法，然后子代一个参数，然后再将参赋值给父组件中的currentPage，直接使用input作为传递名称，可以直接和v-model进行响应式改变

以下是父组件的html
``` bash
<turn-pages :pages="Math.ceil(businessinfos.total / 15)" v-model="currentPage"></turn-pages>

data() {
	currentPage: 1,
},
```
只需传入一个总页数（pages）和当前页数即可😄




