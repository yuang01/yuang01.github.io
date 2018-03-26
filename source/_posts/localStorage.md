---
title: localStorage存储json对象
date: 2018-03-26 21:08
categories: "javascript基础"
tags: 'javascript'
---

## localStorage--如何存储json数据？
<!-- more -->
localStorage--如果直接将json存储在localStorage里面，只会保存[Object Object]的字符串
所以我们首先要将json对象转换成字符串，提取的时候，再将字符串转换成json数据即可。
``` bash
let obj = {a: '1', b: '2', c: '3'};
obj = JSON.stringify(obj); //转化为JSON字符串
localStorage.setItem("temp", obj); // 返回 {a: '1', b: '2', c: '3'} 字符串
```

JSON.parse将字符串转换成json
``` bash
obj=JSON.parse(localStorage.getItem("temp"));
```
localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用.
这里再简单说几句localStorage的用法
存储str
``` bash
localStorage.setItem('myCat', 'Tom');
```
获取localStorage
``` bash
const cat = localStorage.getItem("myCat");
```

删除localStorage
``` bash
localStorage.removeItem("myCat");
```
三句话就搞定了，很简单^_^