---
title: "netlify部署博客"
bgImg: https://pic2.zhimg.com/80/v2-63bbdb5b76b8d349ad35ff4281efbd37_1440w.webp
date: 2023-03-05 08:36:30
top: true
---
## netlify部署
github.io访问速度太慢，gitee.io还需要实名制，还要手持身份证，对未成年很不友善

我们可以将博客运行在`netlify`上，个人觉得访问速度还蛮快的, 比我花50块买的服务器还快， 操作也是超级的简单，两分钟搞定。

{% link netlify官网:: https://app.netlify.com/:: https://pic2.zhimg.com/80/v2-63bbdb5b76b8d349ad35ff4281efbd37_1440w.webp %}

1. 直接使用github登录
2. 登陆成功之后点击`New site from Git`按钮
3. 然后选择github仓库
4. 如果你关联的github是你的博客源代码仓库，则需要在`Build settings`里将`Build command`设置为`hexo generate`, 将`Publish directory`设置为`/public`，然后点击deploy按钮
如果你关联的仓库的代码是编译之后的博客代码，则直接点deploy按钮即可
5. 发布完成后，你可以自定义netlify分配的域名前缀。或者关联自己阿里云等域名厂商购买的域名，然后还可以开启https

我在`netlify`部署的博客地址：

{% link hexo-theme-bamboo:: https://hexo-theme-bamboo.netlify.app/:: https://pic2.zhimg.com/80/v2-63bbdb5b76b8d349ad35ff4281efbd37_1440w.webp %}

如果我写的不清楚的话，可以百度`hexo netlify`查询
