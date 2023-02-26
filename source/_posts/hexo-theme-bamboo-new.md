---
title: 基本配置（一）
date: 2021-07-05 11:12
swiper: true
swiperImg: 'https://img10.360buyimg.com/ddimg/jfs/t1/180344/4/14703/246455/60f3ac57E43fdf363/412adfa574c34196.jpg'
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
img: https://img10.360buyimg.com/ddimg/jfs/t1/180344/4/14703/246455/60f3ac57E43fdf363/412adfa574c34196.jpg
swiperDesc: '该文档是版本2.3.0的文档，版本号可以从主题下的`package.json`查看'
excerpt: '基本配置（一）'
top: true
bgImg: https://pic1.zhimg.com/80/v2-6c63fd2701714cff0ce3dc57f0b18ccc_1440w.jpg
bgImgTransition: 'scale'
---

这是一款{% span large red, H %}{% span large green, E %}{% span large blue, X %}{% span large info, O %}主题。

> 有问题去[留言板](/messageBoard)留言


国内访问：http://120.48.121.186/   （github比较慢的话，可以访问这个地址预览）

{% title h2, 下载 %}
首先你需要有一个[Hexo](https://hexo.io/zh-cn/)，按照官网的方法，很容易的就能创建一个hexo博客。
{% link Hexo, https://hexo.io/zh-cn/, https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg %}
{% tabs tab-id %}

<!-- tab Github安装 -->
当你有了hexo博客之后，进入`themes`文件夹下使用 `Git clone` 命令来下载:
``` bash
git clone https://github.com/yuang01/hexo-theme-bamboo.git
```
{% link hexo-theme-bamboo, https://github.com/yuang01/hexo-theme-bamboo, https://ewr1.vultrobjects.com/imgspice3/000/010/433/253_f8c_a65.jpg %}

或者点击下载zip包，解压放入`themes`文件夹下
{% btn center large, 开始下载, https://github.com/yuang01/hexo-theme-bamboo/archive/dev.zip, fa fa-download %}

<!-- endtab -->

<!-- tab Gitee安装 -->

当你有了hexo博客之后，进入`themes`文件夹下使用 `Git clone` 命令来下载:
``` bash
git clone https://gitee.com/yuang01/hexo-theme-bamboo.git
```
{% link hexo-theme-bamboo, https://gitee.com/yuang01/hexo-theme-bamboo, https://img10.360buyimg.com/ddimg/jfs/t1/154000/26/17136/4231/601cb685E622bcee5/1a923dacb1d98f64.jpg %}
或者点击下载zip包，解压放入`themes`文件夹下
{% btn center large, 开始下载, https://gitee.com/yuang01/hexo-theme-bamboo/repository/archive/dev.zip, fa fa-download %}

<!-- endtab -->
<!-- tab npm安装 -->

{% noteblock info %}
    此方法只支持Hexo在5.0.0版本以上
    **通过 npm 安装并不会在 themes 里生成主题文件夹，而是在 node_modules 里生成**
{% endnoteblock %}
在你的博客根目录里
```powershell
npm i hexo-theme-bamboo
```
{% note success, 升级方法：在博客根目录下，运行 `npm update hexo-theme-bamboo` %}

#### 应用主题
修改hexo根目录下的站点配置文件`_config.yml`，把主题改为`bamboo`

接着在hexo根目录下新建文件`_config.bamboo.yml`,从`node_modules`文件夹下找到`hexo-theme-bamboo`文件夹下的`_config.yml`，将里面的内容复制到`_config.bamboo.yml`文件中即可，在`_config.bamboo.yml`文件中对主题进行配置

<!-- endtab -->

{% endtabs %}
{% title h2, 基本配置 %}
### 切换主题
修改 Hexo 根目录下的 `_config.yml` 的  `theme` 的值：`theme: hexo-theme-bamboo`

#### `_config.yml` 文件的其它修改建议
 
- 请修改 `_config.yml` 的 `url` 的值为你的网站主 `URL`（如：`http://xxx.github.io`）。`author`值改为你的名称（如：yuang），`description`值随便写一段描述（如：千磨万击还坚劲，任尔东西南北风）
- 如果你是中文用户，则建议修改 `language` 的值为 `zh-CN`。

### 代码高亮
本主题支持三种代码高亮方式，前两种是hexo内置的`highlight`和`prismjs`，后一种是使用的插件`hexo-prism-plugin`。三种方式看个人喜好选择一种作为高亮
{% tabs tab-id %}

<!-- tab highlight (默认) -->

首先需要在{% pbg success, 根目录下的_config.yml 文件中%}，将`highlight`的`enable`设置为true，这样就开启了highlight的代码高亮，默认这个是开启的。然后你可以在{% pbg success, 本主题目录下的_config.yml 文件中%}通过`highlight`参数，自定义代码高亮颜色，如下所示
``` yaml
# https://github.com/chriskempson/tomorrow-theme
highlight:
  background: '#2d2d2d'
  currentLine: '#393939'
  selection: '#515151'
  foreground: '#cccccc'
  comment: '#999999'
  red: '#f2777a'
  orange: '#f99157'
  yellow: '#ffcc66'
  green: '#99cc99'
  aqua: '#66cccc'
  blue: '#6699cc'
  purple: '#cc99cc'
```

<!-- endtab -->

<!-- tab prismjs -->
请先确保你的`hexo版本为5.0`以上,在根目录下的`package.json`中可以查看hexo的版本。如果不是5.0.以上，请先升级，例如在根目录下使用如下命令，这个下载的版本号是5.3.0版本，你可以指定下载最新的版本
``` bash
npm install hexo@5.3.0
```
首先需要在{% pbg info, 根目录下的_config.yml 文件中%}，将`highlight`的`enable`设置为false，然后
将`prismjs`的`enable`设置为true，如下所示
```yaml
prismjs:
  enable: true
  preprocess: true
  line_number: true
  tab_replace: ''
```
最后可以通过{% pbg info, 本主题目录下的_config.yml 文件中%}`prismjs`参数来选择主题
例如:
```yaml
prismjs:
  theme: 'default' # default, coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight
```

另外，当你使用的是`prismjs`作为代码高亮的话,你还可以在单独的文章中设置代码高亮主题，这样可以实现不同的页面，有不同的代码高亮主题，文章中设置代码如下
```yaml
title: Hexo主题--Bamboo介绍
date: 2021-01-5 23:28
swiper: true
swiperImg: '/medias/11.jpg'
img: '/medias/7.jpg'
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
top: true
prismjs: dark # 设置该篇文章的代码高亮主题为dark
```
<!-- endtab -->

{% endtabs %}

### 搜索
本主题中还使用到了 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) 的 Hexo 插件来做内容搜索，安装命令如下：
```bash
npm install hexo-generator-search --save
```

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
search:
  path: search.xml
  field: post
```
在主题文件夹下的`_config.yml`文件中设置`search`为true或者false控制显示隐藏

### 新建分类 categories 页
`categories` 页是用来展示所有分类的页面，也就是导航上的分类页面，如果在你的博客 `source` 目录下还没有 `categories/index.md` 文件，那么你就需要手动或者使用命令新建一个，命令如下：
```bash
hexo new page "categories"
```
编辑你刚刚新建的页面文件 `/source/categories/index.md`，**至少需要以下内容**：
```yaml
---
title: categories
date: 2020-09-14 15:30:30
type: "categories"
layout: "categories"
---
```
### 新建标签 tags 页
`tags` 页是用来展示所有标签的页面，如果在你的博客 `source` 目录下还没有 `tags/index.md` 文件，那么你就需要新建一个，命令如下：
```bash
hexo new page "tags"
```

编辑你刚刚新建的页面文件 `/source/tags/index.md`，**至少需要以下内容**：

```yaml
---
title: tags
date: 2020-09-14 15:30:30
type: "tags"
layout: "tags"
---
```

### 新建友情链接 friends 页
{% tabs tab-id %}

<!-- tab 通过github issue动态获取 -->
> 该功能需要主题版本为`2.1.5+`

`friends` 页是用来展示**友情连接**信息的页面，如果在你的博客 `source` 目录下还没有 `friends/index.md` 文件，那么你就需要新建一个，命令如下：
```bash
hexo new page "friends"
```
编辑你刚刚新建的页面文件 `/source/friends/index.md`

```yaml
---
title: friends
date: 2021-06-17 15:30:30
onlyTitle: true # 只显示title
toc: false # 不显示文章目录
# type: "friends" # 这个不要了
# layout: "friends" # 这个不要了
---
```
这时候会生成`source/friends/index.md`文件，在md文件里自定义写友链就行了。然后你可以阅读下面这篇文章，使用`github`或者`gitee`来生成友链

{% link issues-sites标签, /post/issuessites/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

<!-- endtab -->

<!-- tab 或者固定的友链地址 -->
如果你不会用github issue标签当做友链页面，你也可以创建一个.md文件，通过如下标签将友链地址写成固定的也是可以的

{% link site-card:: /post/site-card/:: https://pic3.zhimg.com/80/v2-7cfc909ebe8d83683909846edd6b5232_1440w.webp %}
<!-- endtab -->
{% endtabs %}

### 新建关于我 about 页
```bash
hexo new page "about"
```
然后参考：
{% link site-card:: /post/new-about/index/:: https://pica.zhimg.com/80/v2-573ac3e25de03fad9c32add5a05e5cfc_1440w.webp %}

### 新建图库页面
跟上面这些页面一样，自己新建md页面，然后使用下面三种标签即可快速生成图库页面
首先使用分组标签
{% link gallerygroup标签:: /post/gallerygroup/:: https://pic3.zhimg.com/80/v2-7cfc909ebe8d83683909846edd6b5232_1440w.webp %}
然后新建图库详情页面，然后使用下面两种标签中的任意一种：
{% link gallery标签:: /post/gallery/:: https://pic2.zhimg.com/80/v2-29e78b52051ce542adf6d786d61fbd19_1440w.webp %}
{% link 通过文件夹获取图片标签:: /post/getphoto/:: https://pic3.zhimg.com/80/v2-e5c15010b8ba4608a1974403a02a2da0_1440w.webp %}
推荐使用`通过文件夹获取图片标签`来创建图库详情页,因为很方便，一行代码搞定

### 中文链接转拼音（可选的）
如果你的文章名称是中文的，那么 Hexo 默认生成的永久链接也会有中文，这样不利于 `SEO`，且 `gitment` 评论对中文链接也不支持。我们可以用 [hexo-permalink-pinyin](https://github.com/viko16/hexo-permalink-pinyin) Hexo 插件使在生成文章时生成中文拼音的永久链接。
安装命令如下：

```bash
npm i hexo-permalink-pinyin --save
```

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```
> **注**：除了此插件外，[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) 插件也可以生成非中文的链接。

### 添加 RSS 订阅支持（可选的）

本主题中还使用到了 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 的 Hexo 插件来做 `RSS`，安装命令如下：

```bash
npm install hexo-generator-feed --save
```

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
```
{% title h2, Pjax %}
页面不刷新跳转，音乐可以不间断播放。关闭则跳转页面时候刷新页面
``` yaml
pjax:
  on: true
  animation: circle # false, nprogress, circle
  animationColor: 'orangered' # animation为 nprogress时候的动画颜色, red or #000 ...
  cacheBust: false # url 地址追加时间戳，用以避免浏览器缓存
  timeout: 5000    # The timeout in milliseconds for the XHR requests. Set to 0 to disable the timeout.
  banUrl:          # 被屏蔽的 url 地址将不启用 pjax 跳转，可以在控制台下使用 window.location.pathname 获取
      # - '/xxx'     
      # - '/xxx' 
```