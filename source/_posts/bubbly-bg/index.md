---
title: 给bamboo添加动态背景
date: 2022-06-08 16:58:20
tags: ['动态背景']
categories: [动态背景]
swiper: true
img: https://pica.zhimg.com/80/v2-7d9c472a38a85853ba695788bf5efabe_1440w.jpg
bgImg: https://pica.zhimg.com/80/v2-7d9c472a38a85853ba695788bf5efabe_1440w.jpg
---
## 给bamboo添加动态背景
> 首先说一下，这个和添加右上角梅花那篇文章一样，是没有放到主题配置项里让自己配置的，而是通过我接下来的步骤，自己动手实现，两分钟就能实现。

1. 首先打开主题下的配置文件`_config.yml`，找到`import`，并引入js:
```js
import:
  link:
    - <link href="/bubbly-bg/bubbly.css" rel="stylesheet">
  script: 
    - <script src="/bubbly-bg/bubbly.js"></script>
    - <script src="/bubbly-bg/index.js"></script>
```

2.接着在`source`文件夹下创建`bubbly-bg/bubbly.js`文件: 内容如下:
{% folding bubbly.js %}
``` js
"use strict";
window.bubbly = function (t) {
  var n = t || {},
    o = function () {
      return Math.random();
    },
    r = n.canvas || document.createElement("canvas"),
    e = r.width,
    a = r.height;
    r.className = 'bubbly-bg-canvas';
  null === r.parentNode &&
    (r.setAttribute(
      "style",
      "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"
    ),
    (e = r.width = window.innerWidth),
    (a = r.height = window.innerHeight),
    document.body.appendChild(r));
  var i = r.getContext("2d");
  (i.shadowColor = n.shadowColor || "#fff"), (i.shadowBlur = n.blur || 4);
  var l = i.createLinearGradient(0, 0, e, a);
  l.addColorStop(0, n.colorStart || "#2AE"),
    l.addColorStop(1, n.colorStop || "#17B");
  for (
    var c = n.bubbles || Math.floor(0.02 * (e + a)), u = [], d = 0;
    d < c;
    d++
  )
    u.push({
      f: (
        n.bubbleFunc ||
        function () {
          return "hsla(0, 0%, 100%, " + 0.1 * o() + ")";
        }
      ).call(),
      x: o() * e,
      y: o() * a,
      r: (
        n.radiusFunc ||
        function () {
          return 4 + (o() * e) / 25;
        }
      ).call(),
      a: (
        n.angleFunc ||
        function () {
          return o() * Math.PI * 2;
        }
      ).call(),
      v: (
        n.velocityFunc ||
        function () {
          return 0.1 + 0.5 * o();
        }
      ).call(),
    });
  !(function t() {
    if (null === r.parentNode) return cancelAnimationFrame(t);
    !1 !== n.animate && requestAnimationFrame(t),
      (i.globalCompositeOperation = "source-over"),
      (i.fillStyle = l),
      i.fillRect(0, 0, e, a),
      (i.globalCompositeOperation = n.compose || "lighter"),
      u.forEach(function (t) {
        i.beginPath(),
          i.arc(t.x, t.y, t.r, 0, 2 * Math.PI),
          (i.fillStyle = t.f),
          i.fill(),
          (t.x += Math.cos(t.a) * t.v),
          (t.y += Math.sin(t.a) * t.v),
          t.x - t.r > e && (t.x = -t.r),
          t.x + t.r < 0 && (t.x = e + t.r),
          t.y - t.r > a && (t.y = -t.r),
          t.y + t.r < 0 && (t.y = a + t.r);
      });
  })();
};

```
{% endfolding %}




3. 接着在`source`文件夹下创建`bubbly-bg/index.js`文件: 内容如下:
``` js
document.addEventListener("DOMContentLoaded", function () { // 这个表示在html加载完成后执行
    bubbly({
        colorStart: '#fff4e6',
        colorStop: '#ffe9e4',
        blur:1,
        compose: 'source-over',
        bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
      });
})
```

4. 接着在`source`文件夹下创建`bubbly-bg/bubbly.css`文件: 内容如下:
``` css
/* 动态背景--变暗   1最亮，数值越小越暗*/
.bubbly-bg-canvas {
    filter: brightness(0.8);
}
/* 暗黑模式下 */
.darkModel .bubbly-bg-canvas {
    filter: brightness(0.3);
}
```
加css的目的是让这个动态背景变暗

最后重启服务`hexo clean` && `hexo s`

这样动态背景就完成啦，是不是很简单呢。

当然你还可以更改第三步自己创建的js代码参数，实现不同的动态背景, 具体参数请阅读：
{% link 动态背景bubbly, https://github.com/tipsy/bubbly-bg, https://pic3.zhimg.com/80/v2-35dfcd9a852899c04af544542bc5dd04_1440w.webp %}

demo：
{% link demo, https://tipsy.github.io/bubbly-bg/, https://pic4.zhimg.com/80/v2-ea6cbfd4d87942cfcce27006ee698aa1_1440w.webp %}

效果如图所示：
![动态背景](/img/bubbly-bg01.png)
![动态背景](/img/bubbly-bg2.png)
![动态背景](/img/bubbly-bg3.png)
![动态背景](/img/bubbly-bg4.png)
![动态背景](/img/bubbly-bg5.png)

假如我把第三步自己创建的js的参数更改如下：
``` js
document.addEventListener("DOMContentLoaded", function () {
    bubbly({});
})

```
则显示效果如下图所示:
![动态背景](/img/bubbly-bg06.png)

如果喜欢，可以动手试试哦，不需要改源码.