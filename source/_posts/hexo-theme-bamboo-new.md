---
title: Hexo主题--Bamboo介绍
date: 2021-02-08 12:35
swiper: true
swiperImg: 'https://img13.360buyimg.com/ddimg/jfs/t1/179066/36/814/284417/60840a15E419a1e0b/9c68dbe001b4b980.jpg'
# img: '/medias/7.jpg'
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
top: true
video: '/video/two.mp4'
img: https://img14.360buyimg.com/ddimg/jfs/t1/146899/15/9302/500161/5f6e11abE0337b1f0/fe84f765b58ce944.jpg
swiperDesc: '该文档是版本2.0.0的文档，版本号可以从主题下的`package.json`查看'
excerpt: '有钱终成眷属，没钱亲眼目睹'
pwd: ww
password: 123456
---
该文档是版本2.0.0的文档，版本号可以从主题下的`package.json`查看
这是一款既可以{% span large red, 花 %}{% span large green, 里 %}{% span large blue, 胡 %}{% span large info, 哨 %}又可以{% span large, 简洁 %}的主题。

<!-- more --> 
观众老爷：{% inlineimage http://img.doutula.com/production/uploads/image/2019/12/26/20191226318868_Wancgm.jpg, height=100px %} 

这个主题很好配置的，这个主题除了搜索要安装一个插件，其余功能都不需要安装插件。

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

{% titleB h4, `_config.yml` 文件的其它修改建议: %}
 
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

<!-- tab prismjs (推荐) -->
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

<!-- tab hexo-prism-plugin -->

如果使用[hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin)这个Hexo插件来做代码高亮，安装命令如下：
```bash
npm i -S hexo-prism-plugin
```

然后，修改 Hexo {% pbg cyan, 根目录下的_config.yml 文件中的%} `highlight.enable` 的值为 `false`，`prismjs.enable`值为false, 并新增该插件相关的配置，主要配置如下：

```yaml
highlight:
  enable: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''
prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'    # 这里可以选择不同样式的主题
  line_number: false    # default false
  custom_css:
```
这个插件目前渲染有点`小问题`，代码高亮如遇到花括号变成了`&#123;&#125;`这样的字符串，以下方式可解决：
将`node_modules\hexo-prism-plugin\src\index.js`中的map改为如下
```javascript
const map = {
  '&#39;': '\'',
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"',
  '&#123;': '{',
  '&#125;': '}'
};
```

然后重启服务，`hexo clean`  && `hexo s`即可 
卸载命令如下，如果你安装了此插件，后来想使用前两种高亮，请先卸载此插件
```bash
npm un hexo-prism-plugin
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

### 新建关于我 about 页
`about` 页是用来展示**关于我和我的博客**信息的页面，如果在你的博客 `source` 目录下还没有 `about/index.md` 文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "about"
```
编辑你刚刚新建的页面文件 `/source/about/index.md`，**至少需要以下内容**：
```yaml
---
title: about
date: 2020-09-14 15:30:30 # 时间随便写
type: "about"
layout: "about"
---
```
然后可以在本主题下的`_config.yml`文件下，编辑以下字段进行关于我页面信息的更改
``` yaml
baseInfo # 基本信息，包括年龄，性别，坐标，状态
skills   # 技能
socialAccounts # 社交账号
games   # 游戏
books   #书籍
```
写法如下
{% folding cyan, baseInfo基本信息 %}

`baseInfo`主要包含年龄，性别，坐标，状态，格式如下，**注意空格缩进哦**
``` yaml
baseInfo:
  on: true # 是否显示
  age: 99 # 年龄
  sex: '男' # 性别
  coordinate: '火星' # 坐标
  status: '划水中' # 状态
```
{% endfolding %}

{% folding green, skills 填写我的技能 %}
`skills` 填写我的技能，格式如下，**注意空格缩进哦**
``` yaml
# 关于我 技能
skills:
  on: true # 是否显示
  data: # 这个data不能忘了，下面的字段注意缩进
    HTML5: # 这里写你的技能名称，如 HTML5或者java
      background: 'red' # 进度条颜色
      percent: 90% # 进度条百分比
    JavaScript:
      background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
      percent: 85%
    CSS:
      background: '#000'
      percent: 70%
    # 可以在下面继续写哦，例如python，java等，按照上面的格式写
```
{% endfolding %}

{% folding yellow, socialAccounts 社交账号 %}
`socialAccounts`填写我的社交账号，格式如下，**注意空格缩进哦**
``` yaml
socialAccounts: 
  on: true
  data: # 这个data不能忘了，下面的字段注意缩进
    QQ: # 社交软件名称
      icon: fa fa-qq  # 图标，可以为空，前面加上fa，假如图标名称叫fa-quora，就是 fa fa-quora, 
      name: 1730241541 # 账号名称
      url: 'http://www.baidu.com' # 账号链接地址
    微信:
      icon: fa fa-weixin
      name: 1730241541
      url: 'http://www.baidu.com'
    # 可以在下面继续写哦，例如知乎，微博等，按照上面的格式写
```
{% endfolding %}

{% note info, icon使用的 [Font Awesome](https://fontawesome.dashgame.com/) 版本为 `4.7.0` %}

{% folding red, games 填写我的游戏 %}
`games` 填写我的游戏，格式如下，**注意空格缩进哦**
```yaml
games:
  on: true # 是否显示
  data: # 这个data不能忘了，下面的字段注意缩进
    王者荣耀: # 游戏名称，下面的img是游戏图片
      img: 'https://pic2.zhimg.com/80/v2-54730a36304842b86a57a237b8b39945_720w.jpg?source=1940ef5c'
    英雄杀:
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1909008358,1888649581&fm=26&gp=0.jpg'
    和平精英:
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595596612190&di=dbf2030780758c4724ecb1f07f2f4f73&imgtype=0&src=http%3A%2F%2Fimgup04.51wxjz.com%2F51wxjz%2F2019-06%2F05%2F09%2F15596983468928_0.png'
    英雄联盟:
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3035766587,2822701570&fm=26&gp=0.jpg'
    # 可以在下面继续写哦，例如开心消消乐等等，按照上面的格式写
```
{% endfolding %}

{% folding blue, books 填写我的书籍 %}
`books` 填写我的书籍，格式如下，**注意空格缩进哦**
```yaml
books:
  on: true # 是否显示
  data: # 这个data不能忘了，下面的字段注意缩进
    明朝那些事儿: # 书籍名称，下面的img是书籍图片
      img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2736238052,2078148140&fm=26&gp=0.jpg'
    春秋左传:
      img: 'https://pic2.zhimg.com/50/v2-6f33f60312de25ddcb795fc81ee91b38_720w.jpg?source=54b3c3a5'
    孙子兵法:
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=710999414,899378807&fm=26&gp=0.jpg'
    # 可以在下面继续写哦，例如时间简史等等，按照上面的格式写
```
{% endfolding %}


### 新建友情连接 friends 页

`friends` 页是用来展示**友情连接**信息的页面，如果在你的博客 `source` 目录下还没有 `friends/index.md` 文件，那么你就需要新建一个，命令如下：

```bash
hexo new page "friends"
```

编辑你刚刚新建的页面文件 `/source/friends/index.md`，**至少需要以下内容**：

```yaml
---
title: friends
date: 2020-09-14 15:30:30
type: "friends"
layout: "friends"
---
```
同时，在你的博客 `source` 目录下新建 `_data` 目录，在 `_data` 目录中新建 `friends.json` 文件，文件内容如下所示：
```json
[{
  "avatar": "https://pic2.zhimg.com/80/v2-d1bd22e7dc847ae62028ae336d55ded9_720w.jpg?source=1940ef5c",
  "name": "如梦亦如幻",
  "introduction": "烟雨如江南",
  "url": "https://github.com/yuang01"
}, {
  "avatar": "https://pic1.zhimg.com/80/v2-1a60e33c33810a4d81a80282b8ca7a33_720w.jpg?source=1940ef5c",
  "name": "青灯暮雨",
  "introduction": "山水如墨染",
  "url": "https://github.com/yuang01"
}, {
  "avatar": "https://pic2.zhimg.com/80/v2-134122ca13d041f5ec1f2680f2677318_720w.jpg?source=1940ef5c",
  "name": "寄情山水花草间",
  "introduction": "宛如丹青未干",
  "url": "https://github.com/yuang01"
}]
```
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
{% title h2, 页面功能配置 %}
### 首页轮播图
首页轮播图在`source/_posts/xxx.md`也就是文章页面配置，如果你想让某个文章放在首页轮播中，只用设置`swiper: true`即可，可以通过`swiperImg: xxx`来配置轮播图片，如下所示
```yaml
---
title: Hello world
date: 2019-01-20 21:11
swiper: true
swiperImg: 'https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/c080ff4434354e35af9dab0a3ee1b9f7.jpg!sswm'
swiperDesc: '我是文章在轮播图中的摘要'
---
我是文章内容
```
`swiperImg`可以是cdn地址，也可以是本地地址，例如`/medias/4.png`
可以通过主题文件夹下的`_config.yml`文件中的`swiper`属性对轮播进行调整
```yaml
# 首页轮播图设置
swiper:
  # 当在.md文件中，设置swiper:true，会将该文章放到轮播中，
  showPrevNext: true # 是否显示左右切换按钮
  showIndicators: true  # 是否显示指示器
  autoplay: false # 是否自动轮播
  loop: true # 让轮播看起来是循环的, 例如false的话，到达最后一个轮播图的时候，右按钮不能点击
  delay: 5000 # 切换延迟时间
  effect: 'slide' # 'fade': 淡入淡出效果
  textAnimated: 'fadeInDown' # 文字动画，属性使用 animate.css, https://daneden.github.io/animate.css/
  textDuration: '0.2s' # 文字动画持续时间（单位秒）
  textDelay: '0.1s' # 文字动画延迟时间（单位秒）
  readMoreBtn: true # 阅读更多按钮是否显示
  readMoreBtnBackgroundColor: '' # 阅读更多按钮背景颜色,空字符串则默认使用主题颜色
  bubble: true # 轮播图是否显示气泡,也可以打开底下的花瓣或者雪花特效 sakura（花瓣）: true snow(雪花): true
  # 当没有文章设置swiper: true时候，轮播图会显示以下default默认内容，可自行切换对应内容
  defaultImg: 'https://img11.360buyimg.com/ddimg/jfs/t1/160978/33/20686/2476596/6083e62dEa588862b/63f8f2163ab61b2f.png' # 图片，没有则随机选取
  defaultTile: '青墨书晚风' # 标题
  defaultDesc: ['煮酒洗净尘嚣，论知交', '万般付之一笑，共偕老'] #描 述
  defaultLeftBtnText: '阅读文档' # 左边按钮文字, 空字符串则不显示
  defaultLeftBtnLink: 'https://yuang01.gitee.io/2021/02/08/hexo-theme-bamboo-new/' # 左边按钮链接 
  defaultRightBtnText: '下载主题' # 右边按钮的文字，空字符串则不显示
  defaultRightBtnLink: 'https://gitee.com/yuang01/hexo-theme-bamboo/repository/archive/dev.zip' # 右边的按钮的链接
  defaultDescTyped: true # defaultDesc文字是否开启打字特效
  defaultDescTypedLoop: true # defaultDesc文字的打字特效是否循环
  # defaultAddToSwiper表示：当有文章设置了swiper: true的时候，将上面的 默认内容 放在轮播图的第一页
  defaultAddToSwiper: true # 开启这个，则loop默认为false
  ## 轮播图样式更改
  # 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
  textCenter: false
  # 图片宽度为100% (轮播图的文字和按钮只能居中显示)
  imgwidthFull: false
  # 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
  full: true # full 优先级大于 imgwidthFull

```
- `defaultAddToSwiper`表示，当有文章设置了`swiper:true`的时候，将default默认轮播图作为第一张轮播图
- 通过`textCenter`控制轮播图的文字和按钮是否居中显示, `imgwidthFull`设置轮播图是否宽度为100%，但是高度不为100%，`full`表示轮播图宽高都是100%

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: false
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: false
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: false # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片在中间显示](/img/base.png)
![图片在中间显示](/img/base2.png)
{% endgallery %}

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: true
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: false
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: false # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片、文字和按钮在中间显示](/img/text-center.png)
![图片、文字和按钮在中间显示](/img/text-center2.png)
{% endgallery %}

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: false
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: true
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: false # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片宽度为100%](/img/width-full.png)
![图片宽度为100%](/img/width-full2.png)
{% endgallery %}

当这样设置的时候
```yaml
## 轮播图样式更改
# 轮播图的文字和按钮居中显示 (针对 imgwidthFull和 full都是false的时候)
textCenter: false
# 图片宽度为100% (轮播图的文字和按钮只能居中显示)
imgwidthFull: false
# 整个轮播图宽高都是100%  (轮播图的文字和按钮只能居中显示)
full: true # full 优先级大于 imgwidthFull
```
轮播图是这样显示的
{% gallery %}
![图片宽高为100%](/img/full.png)
![图片宽高为100%](/img/full2.png)
{% endgallery %}

### 首页座右铭
```yaml
motto:
  on: true
  title: '座右铭'
  content: '沉淀后我愿意做个温暖的人，有自己的喜好，有自己的原则，有自己的信仰，不急功近利，不浮夸轻薄。宠辱不惊，淡定安逸，心静如水，不忘初心，方得始终。——凌茜'
  background: 'url("https://img10.360buyimg.com/ddimg/jfs/t1/166587/8/21344/72069/6088c24fEda5fdeb6/f9730ab637b7ca47.png")' # url("xxx") or red or #000 or rgba() ..
```

### 首页公告
```yaml
notice:
  on: true
  seamless: false # 为true时，则无缝不停止滚动，false是会停一下的滚动
  title: '公告'
  background: 'url("https://img10.360buyimg.com/ddimg/jfs/t1/166587/8/21344/72069/6088c24fEda5fdeb6/f9730ab637b7ca47.png")' # url("xxx") or red or #000 or rgba() ..
  list: # list相当于数组对象，[{title:'xx',date: 'xx', url: 'xxx', color: 'red'}]根据自己实际情况，增加或者删除
    - title: '#博客更新到2.0了'
      date: '2021-04-28'
      url: 'http://baidu.com'   # 可以为空, 也可以是本地页面地址如 '/archives'
      color: red   # 字体颜色
    - title: '#新增 轮播图支持三种模式了，功能也增强了 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
      color: red
    - title: '#新增 支持二级导航'
      date: '2021-04-28'
      url: 'http://baidu.com'
      color: blue
    - title: '#新增 归档，分类等页面头部图片位置可以设置为视频 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
      color: '#42b983'
    - title: '#新增 头部导航可以设置为在顶部透明，并且可以任意设置背景颜色了 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
    - title: '#新增 首页增加了座右铭和公告栏目 ~'
      date: '2021-04-28'
      url: 'http://baidu.com'
```

### 图库
新建页面
``` yaml
hexo new page gallery
```
然后在`gallery/index.md`中使用`galleryGroup `标签即可
``` markdown
---
title: 图库
date: 2021-05-10 15:39:04
toc: false
img: https://pic2.zhimg.com/80/v2-2cf3b62a87045ee279096449cf6f3ac1_1440w.jpg?source=1940ef5c
---
<div class="gallery-group-main">
    {% galleryGroup '壁纸' '收藏的一些壁纸' '/gallery/bizhi' https://pic1.zhimg.com/80/v2-23c3820e8abfb1cef689531af2dc6d09_1440w.jpg?source=1940ef5c %}
    {% galleryGroup '古典图片' '中国古典图片' '/gallery/gudian' https://pic1.zhimg.com/80/v2-8d542d68cbbf0e5f503da9e3f72b8447_1440w.jpg?source=1940ef5c %}
    {% galleryGroup '风景' '风景图片' '/gallery/fengjing' https://pic1.zhimg.com/80/v2-56164ef0695767475935c9e019c594ae_1440w.jpg?source=1940ef5c %}
</div>
```
相册详情页,也是创建一个页面
```yaml
hexo new page xxxx
```
然后，使用`gallery`标签
```markdown
---
title: 壁纸
date: 2021-05-10 15:39:04
toc: false
img: https://pic1.zhimg.com/80/v2-92cc20bdf4674b6c6337478bb06657b3_1440w.jpg?source=1940ef5c
---
{% gallery %}
![图片描述](https://pic4.zhimg.com/80/v2-5dfab6525ec92b4caf3f09e1ee72a23b_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-5c062983ace7db9601880019190fb5a8_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic1.zhimg.com/80/v2-154228684029ae0c2183f65a9568c310_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-121618e14ad58dcedf8637127087ff27_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d61b1af36a619fec1b32775d75f4900d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic3.zhimg.com/80/v2-f94047ce45907e0966a681089835c04d_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic4.zhimg.com/80/v2-604a15cef201cf177943af2d915eb2e7_1440w.jpg?source=1940ef5c)
![图片描述](https://pic1.zhimg.com/80/v2-bf6c555e7c61a57ba4a1fd95a9a32975_1440w.jpg?source=1940ef5c)
{% endgallery %}
```
### 网站favicon和logo
设置主题文件夹下的`_config.yml`文件中的`favicon`和`logo`属性即可

### 页面预加载动画
```yaml
preloader:
  on: false
```

### 回到顶部
设置主题文件夹下的`_config.yml`文件中的`goTop`属性即可控制隐藏显示

### 文章详情页图片放大功能 
设置主题文件夹下的`_config.yml`文件中的`fancybox`属性即可

### 修改页脚
页脚底部的网站统计功能，使用的是[不蒜子](http://busuanzi.ibruce.info/)，设置主题文件夹下的`_config.yml`文件中的`busuanzi`属性即可控制隐藏显示
页脚信息可以在`/layout/_partial/footer.ejs` 文件中进行手动修改。本主题使用[Font Awesome图标](http://www.fontawesome.com.cn/faicons/)
> **注意**: 本主题中使用的 `Font Awesome` 版本为 `4.7.0`。

### 修改打赏的二维码图片
设置主题文件夹下的`_config.yml`文件中的`donate`属性为true，然后更改`Alipay`和`WeChatpay`图片路径即可
```yaml
# 打赏功能
donate:
  on: true
donate_message: 你的赏识是我前进的动力
# 支付宝打赏图片相对路径
Alipay: '/medias/zfb.jpg'
# 微信打赏图片相对路径
WeChatpay: '/medias/wx.jpg'
```

### 文章详情页分享功能
设置主题文件夹下的`_config.yml`文件中的`sharejs`属性true或者false即可，通过sites配置需要分享的网站
```yaml
# 分享功能
sharejs: 
  on: true
  sites: twitter,facebook,google,qq,qzone,wechat,weibo,douban,linkedin
```

### 鼠标点击出现爱心，爆炸等效果
设置主题文件夹下的`_config.yml`文件中的`cursor_effect`属性true或者false，通过`type`属性选择效果类别，例如:
```yaml
# 鼠标点击特效
cursor_effect:
  on: true
  type: explosion  # fireworks: 礼花 | explosion: 爆炸 | love: 浮出爱心 | text: 浮出文字
```

### 复制成功提醒
当复制内容时候，是否显示复制成功提示 
设置主题文件夹下的`_config.yml`文件中的`copy`属性true或者false即可
```yaml
# 复制成功提示
copy:
  on: true
  title: '成功'
  content: '复制成功了哦'
```

### 雪花飘落和花瓣飘落特效
设置主题文件夹下的`_config.yml`文件中的`snow`或者`sakura`属性true或者false即可
```yaml
# 首页雪花飘落效果--冬天
snow:
  on: false
  onlyPc: false # 设为true，只有pc端显示雪花特效

# 首页花瓣飘落效果--春天
sakura:
  on: false
  onlyPc: false # 设为true，只有pc端显示花瓣特效
```

### 文章详情页的标题显示位置 
设置主题文件夹下的`_config.yml`文件中的`postTitleTop`属性true或者false即可，true的时候，显示在上方的图片中，false显示在文章内容上面

### 输入框打字特效
搜索弹框中的输入框打字特效，设置主题文件夹下的`_config.yml`文件中的`inputEffects`属性为true或者false即可。

### live-2d人物
设置主题文件夹下的`_config.yml`文件中的`live2d`属性为true或者false，可以通过`modelId`属性选择模型，注意，live-2d人物只有在屏幕宽度最小为992px的时候才显示
```yaml
# live-2d(左下角动画人物)
live2d:
  on: true # 控制显示或者隐藏
  modelId:  # 0 or 1 or 2 or 3 or 4 or 5 or 6 #人物模型
  open: true # 默认展开，false则收缩，通过点左下角的方块点击，控制展开或者收缩
```

### 滚动动画
设置主题文件夹下的`_config.yml`文件中的`aos`属性对首页中的文章列表动画进行控制，具体参考官网[aos.js](https://github.com/michalsnik/aos#animations)

### 文章详情页目录 
设置主题文件夹下的`_config.yml`文件中的`toc`的`on`属性，控制所有文章是否显示，还可以在在单个文章md页面里通过`toc`属性控制该文章的目录是否显示。
`toc`下的`open`参数控制所有的文章默认是否展开或者收缩，还可以在单个文章md页面里通过`tocOpen`参数控制该文章(具体某个文章)的目录默认是否展开收缩,参数如下:
```yaml
# 主题文件夹下的`_config.yml`文件中的`toc`属性
# 文章目录
toc:
  on: true # 所有文章目录是否显示
  heading: h2, h3, h4
  open: true # 所有文章目录是否展开，false则收缩
```
```yaml
# 单个文章里控制显示和隐藏，展开和收缩
---
title: 我是文章标题
tags: ['vue', 'html']
categories: ['前端', '运维', '攻城狮']
toc: false # 该文章目录不显示
tocOpen: false # 该文章目录收缩
---
我是文章内容
```

### 音乐 
设置主题文件夹下的`_config.yml`文件中的`music`属性，控制其显示隐藏和其他一些调整, `music`中的`fixed`属性建议使用`true`
```yaml
music:
  on: true
  autoHide: true    # hide automaticaly
  server: netease   # 平台名称。netease：网易；tencent：腾讯；xiami：虾米；kugou：酷狗；baidu：百度
  type: playlist    # playlist：歌单；song：单曲；专辑：album；关键词：search；歌手：artist
  id: 442274724     # 音乐页面链接上的id号
  fixed: true       # 开启吸底模式，建议开启
  autoplay: false   # 是否自动播放
  theme: '#42b983'
  loop: 'all'       # 音频循环播放, 可选值: 'all', 'one', 'none'
  order: 'random'   # 音频循环顺序, 可选值: 'list', 'random'
  preload: 'auto'   # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7       # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: true  # 列表默认折叠
  hideLrc: true     # 隐藏歌词
```

### 版权信息
可以在`source/_posts/xxx.md`文件中设置`copyright`true或者false，单独设置某个文章的版权信息是否显示，也可以在主题文件夹下的`_config.yml`文件中的`copyright`属性设置true或者false对所有文章的版权信息进行显示隐藏控制

### 文章置顶
可以在`source/_posts/xxx.md`文件中设置`top: true`，将该文章放在首页的文章置顶栏目中，可以在主题文件夹下的`_config.yml`文件中的`topArticle`属性设置true或者false控制首页的文章置顶栏目显示和隐藏。
```yaml
---
title: Hello World
date: 2019-05-21 21:11
top: true
---
我是文章内容
```

### 评论
主题中内置了`valine`, `miniValine`, `livere`, `gitment`, `gitalk`, `changyan`评论
通过主题文件夹下的`_config.yml`文件中的相应属性进行设置
推荐使用`valine`和`livere`
这里重点说一下`valine`评论配置
```yaml
valine:
  on: true # 是否启用
  appid: # 你的appid --> https://valine.js.org/quickstart.html，请阅读这个获取appid和appkey
  appkey: # 你的key
  avatar: '' # 匿名者头像选项 https://valine.js.org/avatar.html 访客的头像,最好启用下面的`requiredFields`中的邮箱必填，填写qq邮箱，头像会变成qq头像
  placeholder: '客官，说点什么吧' # 评论内容输入框的 placeholder
  master: 'xxxxxx' # 博主标签识别，博主邮箱md5 可以去md5加密网站，例如 https://md5jiami.51240.com/ ，将自己的邮箱输入， 得到 32位小写 的字符串填入这里
  friends: ['xxxxxxx', 'xxxxxx'] # 小伙伴的 邮箱md5， 是个数组
  requiredFields: ['nick', 'mail'] # 设置必填项 ['nick', 'mail'] nick为昵称必填， mail为邮箱必填, 空数组，则不校验
  backgroundImg: '/medias/comment-bg.gif' # 右下角背景图片, or http://xxx.gif
  backgroundColor: 'rgba(255,255,255,0.9)' # 背景颜色, 0.9标是透明度
```

### 鼠标手势
设置主题文件夹下的`_config.yml`文件中的`cursor`属性，可自行替换链接，参数如下:
```yaml
# 鼠标手势
cursor:
  pointer: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/pointer.png
  default: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/left_ptr.png
  text: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/text.png
```
### 天气
设置主题文件夹_config.yml的`weather`属性true或者false，控制显示和隐藏

### 背景图预加载图片
设置主题文件夹下的`_config.yml`文件中的`loadingImg`属性，可自行修改预加载图片链接
```yaml
# loading图片地址，为空则不使用loading图片，文章详情页的loading图片可从`postLoadingImg`参数控制
loadingImg: 'https://img10.360buyimg.com/ddimg/jfs/t1/159345/8/2271/222193/5ff7b36fEe49f5663/a95287c20385127f.gif'
# 文章详情页的loading图片地址，为空则不使用loading图片
postLoadingImg: 'https://img10.360buyimg.com/ddimg/jfs/t1/157667/29/9156/134350/603c6445Ebbc9cabe/41219c5d36d45072.gif'
```

### 关灯
设置主题文件夹下的`_config.yml`文件中的`dark`属性，控制头部导航的开关灯按钮是否显示，控制是否默认显示关灯, 具体如下
```yaml
# 黑夜模式, 关灯
dark:
  on: true # 是否在头部导航上显示开关灯
  default: false  # true为默认关灯状态（刷新页面和跳转页面都是关灯状态），false为默认开灯状态(网页第一次打开的时候为开灯状态)
```

### 弹幕
显示当前也免得弹幕
```yaml
# 弹幕 只对valine评论有效，需要开启valine评论
danmu:
  on: true
  loop: false # 设为true，则弹幕完了之后，继续查询评论接口，将该篇文章的评论再显示在弹幕里
  delay: 5000 # 每条弹幕之间出现的间隔时间
  speed: 20 # 弹幕运行的速度, 越小越快
```

### 灯笼
```yaml
lantern:
  on: true
  left: '春' # 左边灯笼的文字， 空字符串则没有文字
  right: '节' # 右边灯笼的文字
```

### 文章标题打字特效
文章详情页上的标题打字效果
```yaml
# 文章详情页图片上的标题打字效果
typed:
  on: true
  loop: false # 是否循环
  showCursor: false # 是否显示光标
  startDelay: 100 # 开始延迟
  typeSpeed: 100 # 打字速度
  backSpeed: 50 # 删除速度
```

### 文章头部气泡显示
文章详情页头部气泡效果
```yaml
# 文章详情页图片上的气泡效果
bubble:
  on: true
```
### 首页文章图片显示位置
```yaml
# 首页文章图片是否一左一右交错显示
homePostImgsPosition:
  on: true
  left: true # 当上面的on设置为false（不交叉显示），则指定left为true的时候，图片在左边显示
  
```
{% title h2, 主题更改 %}
### 归档、标签、分类、关于我、友情链接页面图片自定义
通过主题文件夹下的`_config.yml`文件中的相应属性进行设置，属性如下：
``` yaml
# 归档页面图片、描述、视频，全屏 or 'http://xxx'
archive:
  title: 'archive'
  img: 'https://pic1.zhimg.com/80/v2-1414b3a4b205e19060db18a20d08723a_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: true # 设置为true，则图片全屏显示
  video: '' # 如果有值，则在屏幕大于920px的时候，全屏显示视频，为空则显示图片(img)

# 标签页面，配置同上
tag:
  title: 'tags'
  img: 'https://pic2.zhimg.com/80/v2-bf6c555e7c61a57ba4a1fd95a9a32975_1440w.jpg' # 标签页上面的图片
  desc: '愿你如风，被人温柔以待'
  full: false # 标签页上面的图片是否全屏显示
  video: '' # 如果有值，则在屏幕大于920px的时候，全屏显示视频

# 标签详情页面，配置同上
tagDetail:
  title: 'tag'
  img: 'https://pic1.zhimg.com/80/v2-604a15cef201cf177943af2d915eb2e7_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待' # 标签页详情上上面的图片上的文字
  full: false
  video: ''

# 分类页面，配置同上
categories:
  title: 'categories'
  img: 'https://pic2.zhimg.com/80/v2-7c496c95897fb15768593cc5170c8b1a_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: false
  video: 'https://assets.mixkit.co/videos/preview/mixkit-flying-through-the-clouds-with-the-radiant-sun-14171-large.mp4'

#分类详情页面，配置同上
categoryDetail:
  title: 'category'
  img: 'https://pic3.zhimg.com/80/v2-98dcd81cb0d1fee52a807c13cedb8338_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: false
  video: ''

# 关于我页面，配置同上
about:
  title: 'about'
  img: 'https://pic4.zhimg.com/80/v2-d12b0c9802720897793993a5a199720f_1440w.jpg'
  desc: '愿你如风，被人温柔以待'
  full: false
  video: 'https://v2.kwaicdn.com/upic/2021/05/03/13/BMjAyMTA1MDMxMzQ3MzVfMTUxODA2NDIxMl80ODkyMDM5Mjc5Nl8yXzM=_b_B334b55d2322fff12bf0a0af8071be244.mp4?pkey=AAXSe64OkKMSrFMnrWv7r_-0PaWRdgAQh8rj_5XH_we7SbLqsTGeDuvdg8H7OnBE5QVi3i5QD4t1RkgVNae_S4k9xCNFUT_YgYAz1R14kgrooQAA0nhx8RJcDnMQUu2ptDI&tag=1-1620358290-xpcwebsearch-0-51wqpbzhrm-e9bc03271f9f300b&clientCacheKey=3xx2ka5hzxvxv5k_b.mp4&tt=b&di=1b11e53d&bp=10004'

# 友情链接页面，配置同上
friends:
  title: 'friends'
  img: 'https://pic2.zhimg.com/80/v2-2407599a217ba89f9499c282f129d44d_1440w.jpg?source=1940ef5c'
  desc: '愿你如风，被人温柔以待'
  full: true
  video: ''
```

### 自定义主题
默认主题颜色是绿色`#42b983`，可以通过设置主题文件夹下的`_config.yml`文件中的`color_scheme`属性，进行配置，参数如下:
```yaml
# 主题颜色
color_scheme:
  # ------------
  # 通用颜色
  common:
    # 主题色
    theme: '#42b983'
    # 主题色块内部的文字颜色
    inner: '#fff'
    # 链接色 a标签
    link: '#42b983'
    # border颜色，目前轮播图的 阅读更多按钮 和 回到顶部按钮 有用到该border，可自行配置该颜色
    border: '2px solid #42b983'
    # 选中区域文字的背景颜色, 后面的小数代表透明度
    selection: 'alpha(#42b983, 0.8)'
    # 顶部页面加载进度条颜色
    pace: '#f6a427'
    # 滚动条颜色, 空字符串则滚动条使用 主题色，否则强制使用该颜色
    scroll: '#42b983'
    # 首页文章列表的背景颜色, url("http://xxx.png") or red or #000 or rgba() ..
    postListBackground: 'rgba(255,255,255,1)'
    # 首页页面的底部背景颜色，空字符串透明('transparent')，可以是白色('#fff')等颜色, 也可以是图片，例如  'url("https://img11.360buyimg.com/ddimg/jfs/t1/169624/29/16/4603017/5fec2c79Eecbd536a/308b28b82a013cd2.png")'
    bgFloor: 'url("https://pic1.zhimg.com/80/v2-b4b71405d08bc1952025ba1bd5db54f3_1440w.jpg?source=1940ef5c")' # 如果是图片地址，url里面请用双引号
    # 头部导航是否背景透明，滚动条在对顶端的时候,头部导航背景透明
    headerMenuTransparent: true
    headerMenuBackgroundColor: '' 
    # headerMenuBackgroundColor:头部导航背景颜色, 为空则使用theme主题色, 
    # 写法: alpha(#42b983, 0.8) or rgba(268, 264, 269, 0.8) or #42b983 or red or 也可以是渐变颜色 linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)  or 也可以是url("图片地址")
  # 文章详情页 颜色属性
  post:
    # 文章详情页面-->标题在图片上时候的颜色
    headerTitle: '#fff'
    # 文章详情页面-->标题在图片上时候字体粗细
    headerTitleFontWeight: 'normal' # 100-900 or bold, normal, bolder, lighter
    #文章详情页面--> copy按钮背景色, 空字符串则copy按钮背景为 主题颜色，否则强制使用该颜色
    copyBackground: ''
    #文章详情页面--> copy按钮文字颜色, 空字符串则copy按钮字体颜色为 主题色块内部的文字颜色，否则强制使用该颜色
    copyColor: ''
    # 代码高亮部分的背景色, 空字符串则使用-代码高亮配置-的背景颜色，否则强制使用该颜色作为代码高亮背景色
    codeBackground: ''
    # 文章详情页面--> p标签使用 ``符号 突出的文字颜色
    pLight: '#d63200'
    # 文章详情-页面-> p标签颜色
    p: '#273849'
    # 文章详情页面--> title颜色， h1, h2, h3..
    title: '#273849'
    # 文章详情页面 -->右侧目录文字颜色
    toc: '#273849'
    # 文章详情页面 --> font-family
    fontFamily: '-apple-system,BlinkMacSystemFont,PingFang SC,Segoe UI,Microsoft YaHei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif'
    # 文章详情页面 --> 透明度, 左侧文章内容背景颜色的透明度
    contentOpacity: '1'
    # 文章详情页面 --> 透明度, 右侧文章目录背景颜色的透明度
    tocOpacity: '0.8'
    # bgImg -- 文章详情页背景图, 针对所有的文章详情页背景
    # 可以是数组（数组里面是图片地址，多个图片地址会采用 幻灯片 循环显示），
    # 如果背景只想要一个图片：可以使用 ['http://xxxxxx'] 或者 'http://xxxxxxx'，这样的写法, 图片地址也可以是本地路径('/img/xxx.png' or '/medias/xxx.png')
    # 也可以是颜色字符串（例如'#C7EDCC', 或者rgba(0 ,0 ,0, 0.8) 那么会使用该颜色作为背景）
    # 空字符串则背景颜色为透明
    bgImg: [
      'https://pic4.zhimg.com/80/v2-5030587bac1b856d09e0a119ff6d7c04_1440w.jpg',
      'https://api.btstu.cn/sjbz/api.php'
    ]
    # 背景图幻灯片模式--延迟时间
    # 如果bgImg设置为数组，数组里面是多个图片地址,则 bgImgDelay表示背景图幻灯片的 延迟间隔时间
    bgImgDelay: 180000 # 默认三分钟，切换一张图片
    # 如果bgImg设置为数组，数组里面是多个图片地址,则 bgImgTransition表示背景图幻灯片的 动画效果
    bgImgTransition: 'fade' # fade, scale, translate-fade,
    ## bgImg，bgImgDelay，bgImgTransition三个属性除了可以在这里全局配置，还可以在单独的文章里配置
    ## 单独的文章里配置，则这bgImg，bgImgDelay，bgImgTransition三个属性优先使用单独的文章里配置的
  footer:
    background: '' 
    # 为空则使用 theme主题色， 写法: alpha(#42b983, 0.8) or rgba(268, 264, 269, 0.8) or #42b983 or red or 也可以是渐变颜色 linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%) or 也可以是url("图片地址")

```
这里重点说几个参数，`theme`是主题色参数, `bgFloor`是`首页`背景颜色或者背景图片参数, `bgImg`是`文章详情页面`的背景图片或者背景颜色参数, `contentOpacity`是文章详情页面的左侧文章内容背景颜色的透明度，`tocOpacity`是文章详情页面的右侧文章目录背景颜色的透明度，其余参数上面有注释哈
看下效果，用我主题的小伙伴可以把网站发给我，我在下面的图片里显示哦
{% sitegroup %}
{% site WDZ, url=http://jackwdz.cn/, screenshot=https://img12.360buyimg.com/ddimg/jfs/t1/195505/2/5125/1468106/60af10bbE007211ca/ce41007700f6ef7a.png, avatar=https://s3.ax1x.com/2021/01/18/scuMVO.jpg, description=这是一个喜爱二次元的小伙伴博客 %}
{% site 灵溪驿站, url=https://www.creekwater.cn/, screenshot=https://img10.360buyimg.com/ddimg/jfs/t1/145883/26/19896/1918605/60af10bdE506da755/986617bed14fcef2.png, avatar=https://www.creekwater.cn/medias/logo.png, description=灵溪驿站 %}
{% endsitegroup %}

{% title h2, 文章 Front-matter 介绍 %}
这个指的是你在你的文章页面里面写的参数，针对的是这一篇文章，例如
```yaml
---
title: Hexo主题--Bamboo介绍
date: 2020-09-14 14:06
swiper: true # 将改文章放入轮播图中
swiperImg: '/medias/1.jpg' # 该文章在轮播图中的图片，可以是本地目录下图片也可以是http://xxx图片
img: '/medias/1.jpg' # 该文章图片，可以是本地目录下图片也可以是http://xxx图片
categories: 前端
tags: [Hexo, hexo-theme-bamboo]
top: true

---
```
`Front-matter` 选项中的所有内容均为**非必填**的。但我仍然建议至少填写 `title` 和 `date` 的值。

| 配置选项   | 默认值                      | 描述                                                         |
| ---------- | --------------------------- | ------------------------------------------------------------ |
| title      | `Markdown` 的文件标题        | 文章标题，强烈建议填写此选项                                 |
| date       | 文件创建时的日期时间          | 发布时间，强烈建议填写此选项，且最好保证全局唯一  
| swiper     | false                       | 表示该文章是否需要加入到首页轮播封面中
| swiperImg  | 无                       | 表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片
| swiperDesc  | 无                       | 表示该文章在首页轮播封面需要显示的文字描述（摘要），如果没有，则使用`excerpt`，如果`excerpt`也没有，则取文章内容
| img        | 无                          | 文章特征图，该文章显示的图片，没有则默认使用文章的特色图片
| excerpt        | 无                          | 文章描述（摘要），该文章在首页的描述文字，如果没有，则取`swiperDesc`,如果`swiperDesc`也没有，则取文章内容（优先取`<!-- more -->`上面的内容）
| top        | false                       | 将该值设为true，则将该篇文章显示在首页的置顶栏目中
| toc        | true                       | 将该值设为false，则该篇文章不显示右侧目录
| tocOpen    | true                       | 将该值设为false，则该篇文章右侧目录默认收缩 
| comments   | true                       | 将该值设为false，则该篇文章不显示评论 
| sharejs   | true                       | 将该值设为false，则该篇文章不显示分享按钮
| donate   | true                       | 将该值设为false，则该篇文章不显示打赏按钮
| bgImg   | -                       | 单独为这篇文章设置背景图片或者背景颜色，可以是数组，数组里面放图片链接，可以是字符串，字符串里面是颜色值，空值则背景颜色透明 
| bgImgTransition   | fade        | 该篇文章的bgImg设置为数组,该值表示背景图片切换的动画, 有三种值（fade, scale, translate-fade）
| bgImgDelay   | 180000(三分钟)        | 该篇文章的bgImg设置为数组,该值表示背景图片切换的延迟时间, 
| categories | 无                          | 文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类 | 
| prismjs | 无                          | 如果使用的是hexo自带的prismjs代码高亮，通过设置该值为该篇文章设置不同的代码高亮主题（default, coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight） |
| tags       | 无                          | 文章标签，一篇文章可以多个标签  

{% title h2, 建议 %}
- 图片都可以用http图片地址哦，不仅方便，图片加载速度也快些，但是一些百度图片或者其他网站的图片外链都做了防盗链，所以推荐大家将图片上传到图床，或者七牛云什么的。
> 这里推荐一个[图床网站](https://image.kieng.cn/)，但是私密图片不要上传到这里哦
- Emoji表情不需要，也不推荐安装其他插件，推荐这个网站，直接复制粘贴就能显示在`IOS`，`Android`，`OSX`和`Windows`系统上。
> 这里推荐一个[Emoji网站](https://copy.emojiall.com/zh-hans/)
事例(example)：
😚😋😛😝😜🤪🤨🧐🤓😎😍
⚽比赛？🎊聚会？🎃节日？🎮游戏？热爱参加活动的你是否经常使用这些emoji？这个分类汇聚了所有活动与节日🔮，并持续在更新。🎆假期生活就应该疯狂且有趣，当你感到无聊时，不如来逛逛这个分类找点灵感🎗。请继续往下逛，一起探索生活的美好吧🎁。
这是主分类⚽ 活动的表情符号列表页面。它包括5个子分类，例如：🎈 事件, 🏅 奖牌, 🏀 运动, 🎯 游戏, 🎨 艺术和工艺。您可以单击下面的链接查看详细信息并复制表情符号。
还可以放在头部导航中哦
{% image https://img10.360buyimg.com/ddimg/jfs/t1/189451/27/6185/1405918/60b7348dE008bf9d5/91a39401104b58ff.png, alt=头部导航加彩色图标 %}

{% title h2, 内置标签 %}
{% noteblock info, 提示 %}
    使用该功能，请先将hexo版本升级到5.0.0以上，在根目录下的`package.json`文件中可查看hexo的版本号
{% endnoteblock %}

{% linkgroup %}
{% link 按钮, /2021/02/08/btn/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link audio音频, /2021/02/08/audio/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link folding折叠, /2021/02/08/folding/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link checkbox多选, /2021/02/08/checkbox/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link github卡片, /2021/02/08/ghcard/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link gallery图片, /2021/02/08/gallery/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link galleryGroup图片, /2021/05/11/gallerygroup/ %}

{% link inlineimage和image图片, /2021/02/08/inlineimage/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link link标签, /2021/02/08/link/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link note标签, /2021/02/08/note/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 段落文本P, /2021/02/08/p/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 单选按钮, /2021/02/08/radio/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 文本高亮pbg, /2021/02/08/pbg/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link site-cardb标签, /2021/02/08/site-card/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link tab标签, /2021/02/08/tab/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link span文字颜色, /2021/02/08/span/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link timeline时间线, /2021/02/08/timeline/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link text文本样式标签, /2021/02/08/text/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link video视频, /2021/02/08/video/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link title标题, /2021/02/08/title/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link noteblock标签, /2021/02/08/noteblock/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link progress标签, /2021/02/22/progress/, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% endlinkgroup %}

可通过如下参数配置基本颜色和默认图片
```yaml
# tag标签 按钮，文本高亮等等..
tag_plugins:
  # 所有标签用到的颜色值，可自行修改
  warningColor: '#e6a23c'
  dangerColor: '#f66'
  successColor: '#67c23a'
  infoColor: '#409eff'
  yellow: '#f9ed69'
  red: '#f47983'
  green: '#16a951'
  blue: '#177cb0'
  cyan: '#00e09e'
  # link标签的左侧默认图片
  linkImg: 'https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg'
```

{% title h2, 结语 %}
你都看到这了，诺 {% inlineimage https://img10.360buyimg.com/ddimg/jfs/t1/153554/13/17636/9218/601cc240Eaa721783/72f7a6d04e586fb6.jpg, height=80px %} 太棒了。
如果你觉得还可以，请点个star吧
{% ghcard yuang01/hexo-theme-bamboo, theme=vue %}