---
title: 新增mermaid
date: 2021-10-09 14:03:20
tags: ['mermaid']
categories: [mermaid]
swiper: true
img: https://pica.zhimg.com/80/v2-a71e05c37fb4970d8e5640eab6833805_1440w.jpg?source=1940ef5c
---
> 支持2.6.5+

## 事例：
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}

{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% endmermaid %}

写法：
```yaml
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}

{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% endmermaid %}
```
{% link mermaid, https://github.com/mermaid-js/mermaid, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}