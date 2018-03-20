---
title: vue之子组件修改父组件传过来的值
date: 2018-03-20  17:32
categories: "组件"
tags: ['vue', 'javascript']
---

#### 有时候在做vue组件的时候，你会把父组件的值通过pops传给子组件。但是有时候需要在子组件里面修改pops中的值，如果直接修改，网页是会报错的，因为vue2.0中数据不能双向绑定，所以我们需要在data里面声明一个变量用，将pops的值赋值给这个变量，然后再在子组件中对这个变量进行更改,最后把此变量通过$emit()将值传给父组件。

``` bash
<script>
	export default {
		pops: ['message'],

		data() {
			msg: this.message,
		},
		methods: {
			fn() {
				msg += 1;
				this.$emit('msg', this.msg);
			},
		},
	};
</script>
```