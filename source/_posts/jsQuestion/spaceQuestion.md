---
title: 将字符串中间多个空格转换成一个空格
date: 2018-04-26 21:42
categories: "js"
tags: 'javascript基础'
---
今天写input传值得问题时，要传入多个字符串，中间用空格分开，但是，假如中间不小心多输了好几个空格怎么办呢？
<!-- more -->

此时就应该用到正则表达式
``` bash
var str = 'aa bb      cc    dd'
str.replace(/\s+/g, ' ');
console.log(str); // aa bb cc dd
```
