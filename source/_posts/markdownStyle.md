---
title: hexo的yelee主题配置修改markdown代码高亮颜色
date: 2019-01-05 19:56
categories: "hexo"
tags: 'hexo'
---
之前看到简书的里的markdown代码高亮挺好看的，所以就想着改一下yelee主题的代码高亮
<!-- more -->
看了一下yelee主题文档，说的也很清楚，作者用的是<a href="https://github.com/chriskempson/tomorrow-theme">Tomorrow Theme这个代码高亮</a>
修改的话也是很简单，首先打开`yelee/_config.yml`，将`highlight_style`改成false
然后打开`yelee/source/css/_partial/customise/code-block.styl`，修改其中的颜色即可
我使用的颜色是这个
``` css
highlight-background   = #282c34
highlight-current-line = #282a2e
highlight-selection    = #373b41
highlight-foreground   = #c5c8c6
highlight-comment      = #969896 
highlight-red          = #e06c75
highlight-orange       = #d19a66
highlight-yellow       = #f0c674
highlight-green        = #98c379
highlight-aqua         = #8abeb7
highlight-blue         = #61aeee
highlight-purple       = #c678dd
```
显示的HTML效果如下
``` HTML
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

    <div id="app" v-cloak>
        <div class="main" v-outside-click="close">
            <button @click="isShow=!isShow">点击</button>
            <div class="dropDown" v-show="isShow">
                <p>零售新物种：药店和便利店合体之后</p>
            </div>
        </div>
    </div>




<script src="https://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script>
<script src="index.js"></script>

</body>
</html>
```
显示的js效果如下
``` javascript
Vue.directive('outside-click', {
    bind: function (el, binding, vnode) {
        //定义点击函数
        function clickHandler(e) {
            if (el.contains(e.target)) {//如果点击区域在所在指令元素内部，则直接返回
                return false;
            }
            if (binding.expression) {//如果定义了表达式，则执行表达式中的函数
                binding.value(e);
            }
        }

        el.vueOutsideClick = clickHandler;
        document.addEventListener('click', clickHandler);//绑定到 document 的点击事件
    },
    unbind: function (el, binding, vnode) {
        document.removeEventListener('click', el.vueOutsideClick);//解绑
        delete el.vueOutsideClick;//销毁
    }

});

var app = new Vue({
    el: '#app',
    data: {
        isShow: false
    },
    methods: {
        close: function () {
            this.isShow = false;
        }
    }
});
```
