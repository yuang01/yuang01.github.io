---
title: issues-timeline标签
date: 2021-06-16 11:35
categories: 前端
tags: [tag]
tocOpen: false
img: https://w.wallhaven.cc/full/e7/wallhaven-e78jpo.jpg
---
该标签会去拿到某个repo仓库的issue内容，用`timeline标签`的形式显示出来
## 写法
### github
```markdown
{% issues timeline | api=https://api.github.com/repos/yuang01/hexo-theme-bamboo/issues?sort=updated&state=closed&page=1&per_page=100 %}
```
> api=xxx:
>`yuang01`是我的github`用户名`，`hexo-theme-bamboo`是我的`仓库名`，`state=closed`，表示拿到状态为`close`的issue，根据自己实际情况更改

### Gitee
```markdown
{% issues timeline | api=https://gitee.com/api/v5/repos/yuang01/yuang01/issues %}
```
> api=xxx:
> `yuang01`是我的gitee`用户名`，`yuang01`是我gitee的`仓库名`，其他参数请见文档

### issue api
{% linkgroup %}
    {% link github的开放api, https://docs.github.com/cn/rest/overview/resources-in-the-rest-api, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

    {% link gitee的开放api, https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoIssues, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
{% endlinkgroup %}

### repo仓库
下面的效果是来自于这这两个仓库的issue
{% linkgroup %}
    {% link hexo-theme-bamboo (Github), https://github.com/yuang01/hexo-theme-bamboo/issues?q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

    {% link yuang01 (Gitee), https://gitee.com/yuang01/yuang01/issues, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
{% endlinkgroup %}
## Github效果(example)
{% issues timeline | api=https://api.github.com/repos/yuang01/hexo-theme-bamboo/issues?sort=updated&state=closed&page=1&per_page=100 %}

## Gitee效果(example)
{% issues timeline | api=https://gitee.com/api/v5/repos/yuang01/yuang01/issues %}
