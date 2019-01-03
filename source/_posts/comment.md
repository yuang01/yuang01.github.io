---
title: hexo的yelee主题配置valine和来比力评论功能
date: 2019-01-03 16:26
categories: "hexo"
tags: 'hexo'
---
# 前言
之前多说倒闭了，不能用了，搞了个友言，友言又关了，然后又去弄了个畅言，弄成功了之后，一顿窃喜，但是前提是需要网站备案💔，很是无奈，最后发现<a href="https://valine.js.org/" target="_blank">valine</a>和<a href="https://livere.com/" target="_blank">来比力</a>比较好用也没有广告。
<!-- more -->
## valine评论
#### 1. 首先注册<a href="https://leancloud.cn/dashboard/applist.html#/apps">LeanCloud</a>账号并拿到APP ID和APP Key；
##### (1) 注册账号之后，创建一个应用
##### (2) 创建应用之后，点击应用的右上角设置图标，然后点击应用Key,如下图所示，获取APP ID和APP Key
![获取id和key](/images/comment01.png)
#### 2. 在<a href="javascript:;">/yelee/_config.yml</a>中加入
``` javascript
valine:
  on: true
  appid: ***** # App ID
  appkey: ***** # App Key
  avatar: mp # 匿名者头像选项
  placeholder: 来啊，快活啊
```
在最下面的CDN中加入
```
valine: //unpkg.com/valine@1.2.0-beta1/dist/Valine.min.js
```
#### 3. 在<a href="javascript:;">/yelee/layout/_partial/article.ejs</a>中加入
``` javascript
<% } else if (theme.valine.on){ %>
    <%- partial('comments/valine', {
        key: post.slug,
        title: post.title,
        url: config.url+url_for(post.path)
      }) %>
```
#### 4. 创建<a href="javascript:;">/yelee/layout/_partial/comments/valine.ejs</a>文件，写入
``` javascript
<section id="comments" style="margin: 2em; padding: 2em; background: rgba(255, 255, 255, 0.5)">
    <div id="vcomment" class="comment"></div>
    <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
    <script src="<%- theme.CDN.valine %>"></script>
    <script>
      new Valine({
        el: '#vcomment',
        notify: false,
        verify: false,
        app_id: "<%= theme.valine.appid %>",
        app_key: "<%= theme.valine.appkey %>",
        placeholder: "<%= theme.valine.placeholder %>",
        avatar: "<%= theme.valine.avatar %>"
      });
    </script>
</section>
```
#### 5. 在<a href="javascript:;">/yelee/source/css/_partial/mobile.styl</a>最后加入：
``` css
#comments {
    margin: (10/16)rem 10px !important;
    padding: 1rem !important;
}
```
#### 最后大功告成

## 来比力评论
#### 1. 注册来必力账号，注册成功之后，点击右上角的头像，进入管理页面
![进入管理页面](/images/lbl-01.png)
#### 2. 然后点击左侧代码管理，会看到一串代码，代码第一行有个data-id，这个就是你的来必力id号
![必力id号](/images/lbl-02.png)
#### 3. 主题站点添加 uid
##### 打开`theme/yelee/_config.yml`，添加配置信息。
``` bash
livere:
   on: true
   livere_uid: Your uid // 在这里填写你的id
```

#### 4. 创建评论 ejs 文件
##### 在`themes/yelee/layout/_partial/comments`文件夹下创建`livere.ejs`文件，拷贝下面的代码。
`注意：将data-uid改为你的id，后面加上==`
``` bash
<!-- 来必力City版安装代码 -->
<div id="lv-container" data-id="city" data-uid="这里写你的id==" style="margin: 30px;">
<script type="text/javascript">
   (function(d, s) {
       var j, e = d.getElementsByTagName(s)[0];

       if (typeof LivereTower === 'function') { return; }

       j = d.createElement(s);
       j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
       j.async = true;

       e.parentNode.insertBefore(j, e);
   })(document, 'script');
</script>
<noscript>为正常使用来必力评论功能请激活JavaScript</noscript>
</div>
<!-- City版安装代码已完成 -->
```

#### 5. 配置文章内的评论部分内容
##### 打开`themes/yelee/layout/_partial/article.ejs`, 添加下面注释的两行代码
``` bash
    <% } else if (theme.livere.on) { %>          // 添加这行
        <%- partial('comments/livere') %>        // 添加这行
    <% } else if (theme.youyan.on) { %>
        <%- partial('comments/youyan') %>
    <% } else if (theme.disqus.on) { %>
        <%- partial('comments/disqus', {
            shortname: theme.disqus.shortname
          }) %>
```

#### 最后大功告成