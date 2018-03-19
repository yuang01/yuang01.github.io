---
title: js之eslint
categories: "插件"
tags: 'ESlint'
---

##### 今天在做echarts图表的时候，就发现地图中的对象是‘xx’: 'xx'这种形式的，但是eslint非要我写成 xx: 'xx'的形式，但是这样写的问题就是去掉key值的引号后，key值就不允许有.或者/这样的字符串，但是echarts官方的地图上的国家名称有的就是带有这些特殊的符号，所以我需要关闭eslint检验功能，其实很简单,如下
##### 关闭某块代码的检验:
``` bash
/* eslint-disable */
需要不被验证的代码
/* eslint-enable */
```
##### eslint还有一些其他的操作
##### 关闭对某行代码的检验
``` bash
alert('foo'); // eslint-disable-line
// 或者

// eslint-disable-next-line
alert('foo');
```
##### 彻底关闭对某个文件的检验
``` bash
/* eslint-disable */
alert('foo');
```
##### 关闭代码块某些规则的检验

``` bash
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
```