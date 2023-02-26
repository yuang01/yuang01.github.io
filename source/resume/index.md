---
title: 简历模板-供参考
date: 2022-07-12 11:47:04
toc: false
img: https://pic2.zhimg.com/v2-175be238e0e71c76a5b2504d6a9425e5_b.jpg
bgImg: https://pica.zhimg.com/80/v2-a37e7cc018bcdede301c9530587dccb4_1440w.jpg
onlyTitle: true
---
{% ghcard yuang01, theme=vue %}
{% btns circle fill %}
  {% cell yuang01, https://yuang01.github.io/, http://q1.qlogo.cn/g?b=qq&nk=1730241541&s=640 %}
{% endbtns %}

## 前端开发工程师
<div style="display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30px 30px;">
  <div>秋风/男/xxxx.xx</div>
  <div><i class="fa-solid fa-house-chimney"></i><a href="https://yuang01.github.io/">https://yuang01.github.io/</a></div>
  <div>xxxxxxxx大学/计算机科学与技术</div>
  <div><i class="fa-brands fa-github"></i><a href="https://github.com/yuang01/hexo-theme-bamboo">https://github.com/yuang01/hexo-theme-bamboo</a></div>
  <div>本科/xxxx年毕业/党员</div>
  <div><i class="fa-regular fa-envelope"></i> <a href="mailto:xxxxxxxxx@qq.com">mailto:xxxxxxxxx@qq.com</a></div>
</div>

{% title h3, 介绍 %}

于xxxx年开始接触前端，喜欢编码，有Geek精神，对代码有洁癖，喜欢接触前沿技术，爱折腾。

获得x、xxxx竞赛奖项xx项，(包含xxxxxxx多媒体竞赛一等奖1项)。

主持参与省、国家级项目xx项；发表论文xxx篇，其中x篇EI索引。

{% title h3, 工作 %}
### 杭州xx网络有限公司 （2018.3-2020.7）
`工程化` `基建搭建`
前端架构组

- 前端错误监控系统(基建)(负责人) 接入量pv:3000w
  - web端js-sdk开发,无侵入式接入,压缩后仅2kb。
  - 收集端Node开发,分布式存储日志。
  - 阿里云日志服务分析,以及常用的数据分析。
  - echart搭建可视化平台。
- 前端性能监控系统(负责人) 接入pv: 1000w
  - web端js-sdk开发,支持自定义上报以及自动上报,无侵入式。
  - 收集端Node开发,Elasticsearch集群存储日志。
  - Elasticsearch的Node模块开发，封装按时间维度的查询聚合模块。
  - 可视化平台,利用redis缓存优化查询,淘汰算法共同协作。

### 杭州xx网络科技有限公司 （2020.7-2022.7）
`大数据` `可视化`
前端开发组

- 落地页截图(Node项目)
  - 利用puppeteer开发截图。
  - 利用clustor多线程开发,速度从原来60分钟提高至8分钟，提高约7倍（300张截图）。
  - 开发自定义队列模式,避免Node端丢失请求。
- webpack插件(webpack-plugin-inner-script)地址
  - 自动将外链形式改写成内敛形式。
- 内网准入系统
  - 采用TypeScript+ES6/7+React开发
  - 基本多层级树形结构的黑名单/白名单控制组件
- xxxxxxxxxx
  - xxxxxxxx
  - xxxxxxxx
  - xxxxxxxx

{% title h3, 项目 %}

### 实时聊天项目(webchat)
`Vue2.0` `Websocket` `Node.JS` `MongoDB`
Github地址：[https://github.com/yuang01/hexo-theme-bamboo](https://github.com/yuang01/hexo-theme-bamboo)（聊天室移动端，注册用户超过7000+，star将近1k）
负责前端构建,服务器架构,后端开发
  
- 经历过3次重构，注重性能优化与体验,在2.0版本，打开首页速度提高1倍。
- 采用了ES6/ES7的语法，采用axios请求统一处理
- 基于localStorage的缓存组件开发，可以设置有效时长，适用于Webapp
- 开发Loading，Alert，Confirm等组件
- 拥有日志系统以及消息的RSA算法加密
- 基于redis的请求监控，过滤恶意请求

or

{% title h3, 项目2 %}
<div class="gallery-group-main">
    {% galleryGroup '项目一' '这是项目一' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/1-support-team.svg %}
    {% galleryGroup '项目二' '这是项目二' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/Slack-1.svg %}
    {% galleryGroup '项目三' '这是项目三' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/remote-team-1.svg %}
    {% galleryGroup '项目四' '这是项目四' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/condo.svg %}
</div>

or

{% title h3, 项目3 %}

{% linkgroup %}
    {% link 项目一, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/1-support-team.svg %}

    {% link 项目二, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/Slack-1.svg %}

    {% link 项目三, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/remote-team-1.svg %}

    {% link 项目四, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/condo.svg %}
{% endlinkgroup %}

{% title h3, 技能 %}
### Web基础

- 熟练掌握HTML5/CSS3,响应式布局和移动端开发
- 了解ES6/ES7,Webpack
- 有Antd Design,Element UI,Muse UI搭建项目经验
- 了解Hybrid开发以及Electron桌面开发,liunx服务器搭建经验,Nginx配置
- Mac开发用户，熟悉Git进行团队协作，对PS有一定基础

### 前端框架
- Vue开发过大型的应用,了解Vue原理与技术栈
- React以及React相关技术栈

### 后端相关
- 开发Node监控平台中间件
- 了解常用的Node模块
- 小型Node框架的搭建

### 数据库
- MongoDB
- Redis

or

{% title h3, 技能2 %}
{% progress 90 danger vue %}
{% progress 80 info javascript %}
{% progress 70 success react %}
{% progress 60 warning node.js %}
{% progress 50 primary jquery %}
{% progress 50 #000 html %}
{% progress 50 #2f54eb css %}

or
<div style="display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30px 30px;grid-column-gap: 20px;">
  <div>{% progress 90 danger vue %}</div>
  <div>{% progress 80 info javascript %}</div>
  <div>{% progress 70 success react %}</div>
  <div>{% progress 60 warning node.js %}</div>
  <div>{% progress 50 primary jquery %}</div>
  <div>{% progress 50 #2f54eb css %}</div>
</div>

or

{% progressCircle 70 danger vue %}
{% progressCircle 80 info javascript %}
{% progressCircle 60 success react %}
{% progressCircle 50 warning node.js %}
{% progressCircle 90 primary jquery %}
{% progressCircle 70 #12e9e9 html %}
{% progressCircle 70 skyblue css %}
{% progressCircle 70 danger vue %}
{% progressCircle 80 info javascript %}
{% progressCircle 60 success react %}
{% progressCircle 50 warning node.js %}
{% progressCircle 90 primary jquery %}
{% progressCircle 70 #12e9e9 html %}
{% progressCircle 70 skyblue css %}

{% title h3, 个人项目 %}
| {% ghcard yuang01/hexo-theme-bamboo %} | {% ghcard yuang01/hexo-theme-bamboo, theme=vue %} |
| -- | -- |
| {% ghcard yuang01/hexo-theme-bamboo, theme=buefy %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-light %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=onedark %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-dark %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=algolia %} | {% ghcard yuang01/hexo-theme-bamboo, theme=calm %} |



# 以上代码
``` markdown
---
title: 简历模板-供参考
date: 2022-07-12 11:47:04
toc: false
img: https://pic2.zhimg.com/v2-175be238e0e71c76a5b2504d6a9425e5_b.jpg
bgImg: https://pica.zhimg.com/80/v2-a37e7cc018bcdede301c9530587dccb4_1440w.jpg
onlyTitle: true
---
{% ghcard yuang01, theme=vue %}
{% btns circle fill %}
  {% cell yuang01, https://yuang01.github.io/, http://q1.qlogo.cn/g?b=qq&nk=1730241541&s=640 %}
{% endbtns %}

## 前端开发工程师
<div style="display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30px 30px;">
  <div>秋风/男/xxxx.xx</div>
  <div><i class="fa-solid fa-house-chimney"></i><a href="https://yuang01.github.io/">https://yuang01.github.io/</a></div>
  <div>xxxxxxxx大学/计算机科学与技术</div>
  <div><i class="fa-brands fa-github"></i><a href="https://github.com/yuang01/hexo-theme-bamboo">https://github.com/yuang01/hexo-theme-bamboo</a></div>
  <div>本科/xxxx年毕业/党员</div>
  <div><i class="fa-regular fa-envelope"></i> <a href="mailto:xxxxxxxxx@qq.com">mailto:xxxxxxxxx@qq.com</a></div>
</div>

{% title h3, 介绍 %}

于xxxx年开始接触前端，喜欢编码，有Geek精神，对代码有洁癖，喜欢接触前沿技术，爱折腾。

获得x、xxxx竞赛奖项xx项，(包含xxxxxxx多媒体竞赛一等奖1项)。

主持参与省、国家级项目xx项；发表论文xxx篇，其中x篇EI索引。

{% title h3, 工作 %}
### 杭州xx网络有限公司 （2018.3-2020.7）
`工程化` `基建搭建`
前端架构组

- 前端错误监控系统(基建)(负责人) 接入量pv:3000w
  - web端js-sdk开发,无侵入式接入,压缩后仅2kb。
  - 收集端Node开发,分布式存储日志。
  - 阿里云日志服务分析,以及常用的数据分析。
  - echart搭建可视化平台。
- 前端性能监控系统(负责人) 接入pv: 1000w
  - web端js-sdk开发,支持自定义上报以及自动上报,无侵入式。
  - 收集端Node开发,Elasticsearch集群存储日志。
  - Elasticsearch的Node模块开发，封装按时间维度的查询聚合模块。
  - 可视化平台,利用redis缓存优化查询,淘汰算法共同协作。

### 杭州xx网络科技有限公司 （2020.7-2022.7）
`大数据` `可视化`
前端开发组

- 落地页截图(Node项目)
  - 利用puppeteer开发截图。
  - 利用clustor多线程开发,速度从原来60分钟提高至8分钟，提高约7倍（300张截图）。
  - 开发自定义队列模式,避免Node端丢失请求。
- webpack插件(webpack-plugin-inner-script)地址
  - 自动将外链形式改写成内敛形式。
- 内网准入系统
  - 采用TypeScript+ES6/7+React开发
  - 基本多层级树形结构的黑名单/白名单控制组件
- xxxxxxxxxx
  - xxxxxxxx
  - xxxxxxxx
  - xxxxxxxx

{% title h3, 项目 %}

### 实时聊天项目(webchat)
`Vue2.0` `Websocket` `Node.JS` `MongoDB`
Github地址：[https://github.com/yuang01/hexo-theme-bamboo](https://github.com/yuang01/hexo-theme-bamboo)（聊天室移动端，注册用户超过7000+，star将近1k）
负责前端构建,服务器架构,后端开发
  
- 经历过3次重构，注重性能优化与体验,在2.0版本，打开首页速度提高1倍。
- 采用了ES6/ES7的语法，采用axios请求统一处理
- 基于localStorage的缓存组件开发，可以设置有效时长，适用于Webapp
- 开发Loading，Alert，Confirm等组件
- 拥有日志系统以及消息的RSA算法加密
- 基于redis的请求监控，过滤恶意请求

or

{% title h3, 项目2 %}
<div class="gallery-group-main">
    {% galleryGroup '项目一' '这是项目一' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/1-support-team.svg %}
    {% galleryGroup '项目二' '这是项目二' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/Slack-1.svg %}
    {% galleryGroup '项目三' '这是项目三' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/remote-team-1.svg %}
    {% galleryGroup '项目四' '这是项目四' 'http://www.baidu.com' https://s3-us-west-1.amazonaws.com/files.delesign/assets/condo.svg %}
</div>

or

{% title h3, 项目3 %}

{% linkgroup %}
    {% link 项目一, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/1-support-team.svg %}

    {% link 项目二, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/Slack-1.svg %}

    {% link 项目三, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/remote-team-1.svg %}

    {% link 项目四, http://www.baidu.com, https://s3-us-west-1.amazonaws.com/files.delesign/assets/condo.svg %}
{% endlinkgroup %}

{% title h3, 技能 %}
### Web基础

- 熟练掌握HTML5/CSS3,响应式布局和移动端开发
- 了解ES6/ES7,Webpack
- 有Antd Design,Element UI,Muse UI搭建项目经验
- 了解Hybrid开发以及Electron桌面开发,liunx服务器搭建经验,Nginx配置
- Mac开发用户，熟悉Git进行团队协作，对PS有一定基础

### 前端框架
- Vue开发过大型的应用,了解Vue原理与技术栈
- React以及React相关技术栈

### 后端相关
- 开发Node监控平台中间件
- 了解常用的Node模块
- 小型Node框架的搭建

### 数据库
- MongoDB
- Redis

or

{% title h3, 技能2 %}
{% progress 90 danger vue %}
{% progress 80 info javascript %}
{% progress 70 success react %}
{% progress 60 warning node.js %}
{% progress 50 primary jquery %}
{% progress 50 #000 html %}
{% progress 50 #2f54eb css %}

or
<div style="display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30px 30px;grid-column-gap: 20px;">
  <div>{% progress 90 danger vue %}</div>
  <div>{% progress 80 info javascript %}</div>
  <div>{% progress 70 success react %}</div>
  <div>{% progress 60 warning node.js %}</div>
  <div>{% progress 50 primary jquery %}</div>
  <div>{% progress 50 #2f54eb css %}</div>
</div>

or

{% progressCircle 70 danger vue %}
{% progressCircle 80 info javascript %}
{% progressCircle 60 success react %}
{% progressCircle 50 warning node.js %}
{% progressCircle 90 primary jquery %}
{% progressCircle 70 #12e9e9 html %}
{% progressCircle 70 skyblue css %}
{% progressCircle 70 danger vue %}
{% progressCircle 80 info javascript %}
{% progressCircle 60 success react %}
{% progressCircle 50 warning node.js %}
{% progressCircle 90 primary jquery %}
{% progressCircle 70 #12e9e9 html %}
{% progressCircle 70 skyblue css %}

{% title h3, 个人项目 %}
| {% ghcard yuang01/hexo-theme-bamboo %} | {% ghcard yuang01/hexo-theme-bamboo, theme=vue %} |
| -- | -- |
| {% ghcard yuang01/hexo-theme-bamboo, theme=buefy %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-light %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=onedark %} | {% ghcard yuang01/hexo-theme-bamboo, theme=solarized-dark %} |
| {% ghcard yuang01/hexo-theme-bamboo, theme=algolia %} | {% ghcard yuang01/hexo-theme-bamboo, theme=calm %} |
```