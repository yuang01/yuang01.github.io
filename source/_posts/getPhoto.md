---
title: "增加获取图片标签"
bgImg: https://pica.zhimg.com/80/v2-573ac3e25de03fad9c32add5a05e5cfc_1440w.webp
date: 2023-02-25 22:31:30
---

`v3.1.2`新增获取图片标签
使用方法如下
在根目录下的`source`文件夹创建任意存放图片的文件夹，例如创建一个叫做`myImg`的文件夹，然后将任意图片放入`source/myImg`文件夹下，然后使用标签就能将`myImg`文件夹下的所有图片显示在页面上了。
> 需要注意的是，跟file标签一样，需要在根目录下的`source`文件夹下创建图片文件夹
## 事例
{% getPhoto myImg %}
## 写法
```
{% getPhoto myImg %}
```
然后使用`hexo clean && hexo s`命令重启服务就能看到效果啦
## 一行两个，有规则的排列
{% getPhoto myImg, regular %}
## 写法
```
{% getPhoto myImg, regular %}
```
