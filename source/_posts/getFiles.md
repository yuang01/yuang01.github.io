---
title: getFiles文件获取
date: 2021-08-10 11:35
# swiper: true
categories: 前端
tags: [tag]
top: true
img: https://pic3.zhimg.com/80/v2-7e6795a0b7b4fbe87b0a388b8a052f78_1440w.jpg
excerpt: '会把某个文件夹下的文件显示在页面上。'
bgImg: https://pic3.zhimg.com/80/v2-377dba326c917feb32390075784661f4_1440w.jpg
---
## 会把某个文件夹下的文件显示在页面上。
例如我在`source`文件夹下，创建了一个叫做`img`的文件夹，把`img`的文件夹下的文件显示在页面上。
> 注意： 必须要在`source`文件夹下，文件夹名称可以随便取，下面事例中`文件夹`名称叫`img`
> 该标签需要主题版本为 `2.3.6+`

## 获取`img`文件夹下的.txt .pdf文件
{% getFiles img, txt pdf,  %}
## 获取`img`文件夹下的.png文件
{% getFiles img, png %}
## 获取`img`文件夹下的.gif文件
{% getFiles img, gif %}
## 获取`img`文件夹下的所有文件
{% getFiles img %}
## 获取`img`文件夹下的所有文件，并指定左侧图片
{% getFiles img, '', https://tse3-mm.cn.bing.net/th/id/OIP-C.oGbjgWNX4DBXyKf0P_xOmwHaHa?w=212&h=188&c=7&o=5&dpr=1.24&pid=1.7 %}

## 上述事例写法
```md
## 获取`img`文件夹下的.txt .pdf文件
{% getFiles img, txt pdf,  %}
## 获取`img`文件夹下的.png文件
{% getFiles img, png %}
## 获取`img`文件夹下的.gif文件
{% getFiles img, gif %}
## 获取`img`文件夹下的所有文件
{% getFiles img %}
## 获取`img`文件夹下的所有文件，并指定左侧图片
{% getFiles img, '', https://tse3-mm.cn.bing.net/th/id/OIP-C.oGbjgWNX4DBXyKf0P_xOmwHaHa?w=212&h=188&c=7&o=5&dpr=1.24&pid=1.7 %}
```