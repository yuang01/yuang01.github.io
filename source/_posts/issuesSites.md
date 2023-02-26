---
title: issues-sites标签
date: 2021-06-16 11:35
categories: 前端
tags: [tag]
tocOpen: false
img: https://img11.360buyimg.com/ddimg/jfs/t1/173445/21/15206/1609537/60caebaaE18d21c8d/757aea972636a1b8.png
bgImg: https://img11.360buyimg.com/ddimg/jfs/t1/173445/21/15206/1609537/60caebaaE18d21c8d/757aea972636a1b8.png
---

该标签会去拿到某个repo仓库的issue内容，用`sites标签`的形式显示出来，可以用做网站的`友链`功能
该标签和`issues-timeline`标签都适用于`github`和`gitee`
## 使用方法
issue里面需要有JSON代码块：
```json
{
    "title": "",
    "url": "",
    "avatar": "",
    "screenshot": "",
    "description": ""
}
```

## Github写法
```markdown
{% issues sites | api=https://api.github.com/repos/yuang01/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
```

## Gitee写法
```markdown
{% issues sites | api=https://gitee.com/api/v5/repos/yuang01/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}
```

`yuang01`: 用户名，`friends`: 仓库名
上例中的 `labels=active` 参数可以控制默认的 issue 不显示，只有自己审核通过添加了 `active` 标签之后才会显示。上述示例对应的仓库链接：
{% linkgroup %}
    {% link yuang01/friends (Github), https://github.com/yuang01/friends/issues, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

    {% link yuang01/friends (Gitee), https://gitee.com/yuang01/friends/issues, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
{% endlinkgroup %}
## 效果(Github example)
{% issues sites | api=https://api.github.com/repos/yuang01/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}

## 效果(Gitee example) 
{% issues sites | api=https://gitee.com/api/v5/repos/yuang01/friends/issues?sort=updated&state=open&page=1&per_page=100&labels=active %}

## 分组显示
sites 类型的 issues 默认不分组，如果需要分组，可指定分组依据「key」，和分组白名单「value1」「value2」等，例如：
```
group=version:v4,v3,v2
```
这个参数的作用就是，筛选出 JSON 中包含 `"version": "v4"` 或者 `"version": "v3"` 或者 `"version": "v2"` 的数据，并分组显示。

## 分组写法
```markdown
{% issues sites | api=https://api.github.com/repos/yuang01/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:版本：v3.0,版本：v2.0,版本：v1.0 %}
```
比较长，鼠标往后拖
分组示例对应的仓库链接：
{% link yuang01/examples (Github), https://github.com/yuang01/examples/issues, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

## 分组效果(example)
{% issues sites | api=https://api.github.com/repos/yuang01/examples/issues?sort=updated&state=open&page=1&per_page=100 | group=version:版本：v3.0,版本：v2.0,版本：v1.0 %}