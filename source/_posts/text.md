---
title: Text文本样式标签
date: 2021-02-08 11:35
# swiper: true
categories: 前端
tags: [tag]
# top: true
bgImg: [
    'https://pic4.zhimg.com/v2-e916ab19cf6f7b5961ec112e39ae3e13_b.jpg',
    'https://pic2.zhimg.com/80/v2-49362b67989353ff4c8133479f808f32_1440w.jpg?source=1940ef5c',
    'https://pic1.zhimg.com/80/v2-75cce0837ce11c61827e38610feeba85_1440w.jpg?source=1940ef5c'
]
bgImgTransition: 'scale'
img: https://pic4.zhimg.com/v2-8ad0cffeaa7dec5dd1930eebc6ff863f_b.jpg
---
{% title h2, Text文本样式标签演示 %}

带 {% u 下划线 %} 的文本

带 {% emp 着重号 %} 的文本

带 {% wavy 波浪线 %} 的文本

带 {% del 删除线 %} 的文本

键盘样式的文本 {% kbd command %} + {% kbd D %}

密码样式的文本：{% psw 这里没有验证码 %}

### 上述事例代码
```bash
{% title h2, Text文本样式标签演示 %}

带 {% u 下划线 %} 的文本

带 {% emp 着重号 %} 的文本

带 {% wavy 波浪线 %} 的文本

带 {% del 删除线 %} 的文本

键盘样式的文本 {% kbd command %} + {% kbd D %}

密码样式的文本：{% psw 这里没有验证码 %}
```