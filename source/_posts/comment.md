---
title: hexo的yelee主题配置评论功能
date: 2018-06-22 12:55
categories: "hexo"
tags: 'hexo'
---
# 前言
之前多说倒闭了，不能用了，搞了个友言，友言又关了，然后又去弄了个畅言，弄成功了之后，一顿窃喜，但是前提是需要网站备案💔，很是无奈，最后选择了使用<a href="https://livere.com/">来必力</a>评论。
<!-- more -->
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