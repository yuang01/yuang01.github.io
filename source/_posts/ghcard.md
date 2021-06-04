---
title: Github卡片
date: 2021-02-08 11:35
# swiper: true
categories: 前端
tags: [tag]
# top: true
img: https://pic3.zhimg.com/80/v2-b7c7899676492453229763b26835f6dc_1440w.jpg?source=1940ef5c
---
{% title h2, Github用户卡片 %}
{% ghcard yuang01 %}
### 上述示例代码
```bash
{% ghcard yuang01 %}
```
{% title h2, 表格中加入用户卡片 %}

| {% ghcard yuang01 %} | {% ghcard yuang01, theme=vue %} |
| -- | -- |
| {% ghcard yuang01, theme=buefy %} | {% ghcard yuang01, theme=solarized-light %} |
| {% ghcard yuang01, theme=onedark %} | {% ghcard yuang01, theme=solarized-dark %} |
| {% ghcard yuang01, theme=algolia %} | {% ghcard yuang01, theme=calm %} |

### 上述示例代码
```bash

| {% ghcard yuang01 %} | {% ghcard yuang01, theme=vue %} |
| -- | -- |
| {% ghcard yuang01, theme=buefy %} | {% ghcard yuang01, theme=solarized-light %} |
| {% ghcard yuang01, theme=onedark %} | {% ghcard yuang01, theme=solarized-dark %} |
| {% ghcard yuang01, theme=algolia %} | {% ghcard yuang01, theme=calm %} |

```
{% title h2, 单个项目卡片 %}
{% ghcard yuang01/hexo-theme-bamboo %}
{% ghcard yuang01/hexo-theme-bamboo %}
{% ghcard yuang01/hexo-theme-bamboo %}
{% ghcard yuang01/hexo-theme-bamboo %}
### 上述事例代码
```bash
{% ghcard yuang01/hexo-theme-bamboo %}
{% ghcard yuang01/hexo-theme-bamboo %}
{% ghcard yuang01/hexo-theme-bamboo %}
{% ghcard yuang01/hexo-theme-bamboo %}
```
{% title h2, 表格中加入单个项目卡片 %}
| {% ghcard yuang01/hexo-theme-bamboo %} | {% ghcard yuang01/hexo-theme-bamboo, theme=vue %} |
| -- | -- |
| {% ghcard yuang01/hexo-theme-bamboo, theme=buefy %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-light %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=onedark %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-dark %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=algolia %} | {% ghcard yuang01/hexo-theme-bamboo, theme=calm %} |

### 上述事例代码
```bash
| {% ghcard yuang01/hexo-theme-bamboo %} | {% ghcard yuang01/hexo-theme-bamboo, theme=vue %} |
| -- | -- |
| {% ghcard yuang01/hexo-theme-bamboo, theme=buefy %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-light %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=onedark %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-dark %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=algolia %} | {% ghcard yuang01/hexo-theme-bamboo, theme=calm %} |
```