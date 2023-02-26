---
title: 侧边栏
date: 2021-09-28 11:11
swiper: true
swiperImg: https://pic1.zhimg.com/80/v2-70e3aa84f510f98da30f955b5cc22fc5_1440w.jpg?source=1940ef5c
categories: 前端
tags: [Hexo, sidebar]
img: https://pic1.zhimg.com/80/v2-70e3aa84f510f98da30f955b5cc22fc5_1440w.jpg?source=1940ef5c
swiperDesc: '该侧边栏支持版本2.6.0+'
excerpt: '侧边栏'
bgImg: https://pica.zhimg.com/80/v2-3fd8f44c8043c27b945b1d1677c684ac_1440w.jpg
---
## 默认的侧边栏
在主题的`config.yml`文件中配置
```yaml
# sidebar侧边栏
sidebar:
  on: true
  position: left # left right
  widget_library:
    side_blogger:
      on: true
      avatar: http://api.btstu.cn/sjtx/api.php?lx=c1&format=images
      shape: rectangle # circle, rectangle
      url: /about/
      title: 青墨书晚风
      subtitle: 我是副标题
      jinrishici: true # Poetry Today. You can set a string, and it will be displayed when loading fails.
      fontFammily: Long Cang,cursive
      background: '#fff'
      order:  # 卡片排序, 数值越小，越在上面
      social:
        - icon: fas fa-rss
          url: /atom.xml
        - icon: fas fa-envelope
          url: mailto:me@xxx.com
        - icon: fab fa-github
          url: https://github.com/yuang01/hexo-theme-bamboo
        - icon: fab fa-qq
          url: tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=你的qq号码
    # ---------------------------------------
    # category widget
    side_category:
      on: true
      background: '#fff'
      order:  # 卡片排序(widget都有)，任意数字，数字小的在上面
      header:
        icon: fas fa-folder-open
        icon_color: # 标题字体颜色
        title: 文章分类
        url: /blog/categories/
    # ---------------------------------------
    # tagcloud widget
    side_tagcloud:
      on: true
      background: '#fff'
      order: 
      header:
        icon: fas fa-tags
        icon_color: 
        title: 热门标签
        url: /tags/
      min_font: 14
      max_font: 24
      color: true
      start_color: '#999'
      end_color: '#555'
    # ---------------------------------------
    # recent_post widget
    side_recent_post:
      on: true
      background: '#fff'
      limit: 5
      sort: update # date
      order: 
      header:
        icon: fas fa-book
        icon_color: 
        title: 最新文章
        url: /tags/
    # ---------------------------------------
    # side_archives widget
    side_archives:
      on: true
      type: monthly # yearly or monthly      or yearly
      format: MMMM YYYY # eg: YYYY年MM月     or YYYY
      timeOrder: -1 # Sort of order. 1, asc for ascending; -1, desc for descending 时间排序
      limit: 8 # if set 0 will show all
      order:  # widget order 卡片排序
      background: '#fff'
      header: 
        icon: fas fa-archive
        icon_color: red
        title: 归档
    # ---------------------------------------
    # side_webinfo widget
    side_webinfo:
      background: '#fff'
      order: 
      header: 
        icon: fas fa-chart-line
        title: 站点信息
      type:
        article:
          on: true
          text: '文章数目：'
          unit: '篇'
        runtime:
          on: true
          data: '2020/01/01'    # 填写建站日期
          text: '已运行时间：'
          unit: '天'
        wordcount:
          on: true
          text: '本站总字数：'   # 需要启用 wordcount
          unit: '字'
        visitcounter:
          service: busuanzi # only busuanzi
          siteuv:
            on: true
            text: '本站访客数：'
            unit: '人'
          sitepv:
            on: true
            text: '本站总访问量：'
            unit: '次'
        lastupd:
          on: true
          friendlyShow: true    # 更友好的时间显示
          text: '最后活动时间：'
          unit: '日'

```

## widget 排序
只需要配置 `order`就行。（使用了 Flex 佈局的 order 屬性)，值越小越靠前(靠上)

## 自定义侧边栏
### 创建 widget.yml
在Hexo博客目錄中的`source/_data`（如果沒有 _data 文件夾，请自行创建），創建一個文件 `widget.yml`

### 格式
``` yaml
# widget_library 里面的不会出现在sticky区域，也就是不会粘贴在左侧 
widget_library:
  - class_name: test_a
  id_name: test_a
  order: 0
  name: 这个widget不会粘贴
  icon: fab fa-weibo
  icon_color: '#d63130'
  url: http://baidu.com
  background: '#fff'
  html: 'haha'


# widget_library_sticky 里面的会出现在sticky区域，会粘贴在左侧
widget_library_sticky:
  - class_name: testWidget
    id_name: testWidget
    order: -1
    name: 微博热搜
    icon: fab fa-weibo
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: 'xixi'

# home_widget里面的内容会出现在座右铭那一个栏目里面
home_widget:
  - class_name: welcome
    id_name: welcome
    order: -1
    name: 欢迎
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '针不戳'
```
### 参数
|  参数   | 解释  |
|  ----  | ----  |
| class_name  | 所创建的 widget 父类 class 名 |
| id_name     | 所创建的 widget 父类 id 名 |
| order       | 所创建的 widget 排序 （可选）   |
| name       | 所创建的 widget 名称   |
| icon       | 所创建的 widget 头部的字体图标   |
| icon_color       | 所创建的 widget 头部的字体图标的颜色   |
| url       | 所创建的 widget 头部点击跳转的链接   |
| background       | 所创建的 widget 的背景颜色   |
| html       | 所创建的 widget 的相关代码   |

![结构](https://img13.360buyimg.com/ddimg/jfs/t1/107680/18/15213/224894/6152abeaEce548e69/07ad3d88aa190531.png)

生成的代码为
```html
<div class="widget test_a" id="test_a" style="order: 0;background: #fff">
  <header>
    <a style="color: #d63130" target="_blank" rel="noopener" href="http://baidu.com" data-pjax-state="">
      <i class="fab fa-weibo fa-fw" aria-hidden="true"></i><span class="name">这个widget不会粘贴</span>
    </a>
  </header>
  <div class="content">
    haha
  </div>
</div>
```

如果你需要对添加的 widget 进行 UI 调整，请自行添加 css 到 inject 去。

### 例子
#### 首页添加github日历
例如我在``里添加一个github日历，首先我在`source`文件夹下创建一个js文件`/githubcalendar/index.js`,  js代码如下:

{% folding github日历js %}

```js
var github_canlendar = (git_user, git_color) => {
    var git_githubapiurl = "https://python-github-calendar-api.vercel.app/api?" + git_user;
    var git_fixed = 'fixed';
    var git_px = 'px';
    var git_month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    var git_monthchange = [];
    var git_oneyearbeforeday = '';
    var git_thisday = '';
    var git_amonthago = '';
    var git_aweekago = '';
    var git_weekdatacore = 0;
    var git_datacore = 0;
    var git_total = 0;
    var git_datadate = '';
    var git_git_data = [];
    var git_positionplusdata = [];
    var git_firstweek = [];
    var git_lastweek = [];
    var git_beforeweek = [];
    var git_thisweekdatacore = 0;
    var git_mounthbeforeday = 0;
    var git_mounthfirstindex = 0;
    var git_crispedges = 'crispedges';
    var git_thisdayindex = 0;
    var git_amonthagoindex = 0;
    var git_amonthagoweek = [];
    var git_firstdate = [];
    var git_first2date = [];
    var git_montharrbefore = [];
    var git_monthindex = 0;
    var retinaCanvas = (canvas, context, ratio) => {
        if (ratio > 1) {
            var canvasWidth = canvas.width;
            var canvasHeight = canvas.height;
            canvas.width = canvasWidth * ratio;
            canvas.height = canvasHeight * ratio;
            canvas.style.width = '100%';
            canvas.style.height = canvasHeight + 'px';
            context.scale(ratio, ratio);
        }
    };
    function responsiveChart() {
        var ratio = window.devicePixelRatio || 1
        var git_tooltip_container = document.getElementById('git_tooltip_container');
        var git_x = '';
        var git_y = '';
        var git_span1 = '';
        var git_span2 = '';
        var c = document.getElementById("gitcanvas");
        c.style.width = '100%';
        c.style.height = '';
        var cmessage = document.getElementById("gitmessage");
        var ctx = c.getContext("2d");
        width = c.width = document.getElementById("gitcalendarcanvasbox").offsetWidth;
        height = c.height = 9 * 0.96 * c.width / git_data.length;
        retinaCanvas(c,ctx, ratio)
        var linemaxwitdh = height/ 9;
        var lineminwitdh = 0.8 * linemaxwitdh;
        var setposition = {x: 0.02 * width, y: 0.025 * width};
        for (var week in git_data) {
            weekdata = git_data[week];
            for (var day in weekdata) {
                var dataitem = {date: "", count: "", x: 0, y: 0};
                git_positionplusdata.push(dataitem);
                ctx.fillStyle = git_thiscolor(git_color, weekdata[day].count);
                setposition.y = Math.round(setposition.y * 100) / 100;
                dataitem.date = weekdata[day].date;
                dataitem.count = weekdata[day].count;
                dataitem.x = setposition.x;
                dataitem.y = setposition.y;
                ctx.fillRect(setposition.x, setposition.y, lineminwitdh, lineminwitdh);
                setposition.y = setposition.y + linemaxwitdh
            }
            setposition.y = 0.025 * width;
            setposition.x = setposition.x + linemaxwitdh
        }
        if (document.body.clientWidth > 700) {
            ctx.font = "600  Arial";
            ctx.fillStyle = '#aaa';
            ctx.fillText("日", 0, 1.9 * linemaxwitdh);
            ctx.fillText("二", 0, 3.9 * linemaxwitdh);
            ctx.fillText("四", 0, 5.9 * linemaxwitdh);
            ctx.fillText("六", 0, 7.9 * linemaxwitdh);
            var monthindexlist = width / 24;
            for (var index in git_monthchange) {
                ctx.fillText(git_monthchange[index], monthindexlist, 0.7 * linemaxwitdh);
                monthindexlist = monthindexlist + width / 12
            }
        }
        c.onmousemove = function (event) {
            if (document.querySelector('.gitmessage')) {
                git_tooltip_container.innerHTML = ""
            }
            getMousePos(c, event)
        };
        git_tooltip_container.onmousemove = function (event) {
            if (document.querySelector('.gitmessage')) {
                git_tooltip_container.innerHTML = ""
            }
        };

        function getMousePos(canvas, event) {
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - rect.left * (canvas.width / rect.width);
            var y = event.clientY - rect.top * (canvas.height / rect.height);
            for (var item of git_positionplusdata) {
                var lenthx = x - item.x;
                var lenthy = y - item.y;
                if (0 < lenthx && lenthx < lineminwitdh) {
                    if (0 < lenthy && lenthy < lineminwitdh) {
                        git_span1 = item.date;
                        git_span2 = item.count;
                        git_x = event.clientX - 100;
                        git_y = event.clientY - 60;
                        html = tooltip_html(git_x, git_y, git_span1, git_span2);
                        append_div_gitcalendar(git_tooltip_container, html)
                    }
                }
            }
        }
    }

    function addlastmonth() {
        if (git_thisdayindex === 0) {
            thisweekcore(52);
            thisweekcore(51);
            thisweekcore(50);
            thisweekcore(49);
            thisweekcore(48);
            git_thisweekdatacore += git_firstdate[6].count;
            git_amonthago = git_firstdate[6].date
        } else {
            thisweekcore(52);
            thisweekcore(51);
            thisweekcore(50);
            thisweekcore(49);
            thisweek2core();
            git_amonthago = git_first2date[git_thisdayindex - 1].date
        }
    }

    function thisweek2core() {
        for (var i = git_thisdayindex - 1; i < git_first2date.length; i++) {
            git_thisweekdatacore += git_first2date[i].count
        }
    }

    function thisweekcore(index) {
        for (var item of git_data[index]) {
            git_thisweekdatacore += item.count
        }
    }

    function addlastweek() {
        for (var item of git_lastweek) {
            git_weekdatacore += item.count
        }
    }

    function addbeforeweek() {
        for (var i = git_thisdayindex; i < git_beforeweek.length; i++) {
            git_weekdatacore += git_beforeweek[i].count
        }
    }

    function addweek(data) {
        if (git_thisdayindex === 6) {
            git_aweekago = git_lastweek[0].date;
            addlastweek()
        } else {
            lastweek = data.contributions[51];
            git_aweekago = lastweek[git_thisdayindex + 1].date;
            addlastweek();
            addbeforeweek()
        }
    }

    fetch(git_githubapiurl).then(data => data.json()).then(data => {
        git_data = data.contributions;
        git_total = data.total;
        git_first2date = git_data[48];
        git_firstdate = git_data[47];
        git_firstweek = data.contributions[0];
        git_lastweek = data.contributions[52];
        git_beforeweek = data.contributions[51];
        git_thisdayindex = git_lastweek.length - 1;
        git_thisday = git_lastweek[git_thisdayindex].date;
        git_oneyearbeforeday = git_firstweek[0].date;
        git_monthindex = git_thisday.substring(5, 7) * 1;
        git_montharrbefore = git_month.splice(git_monthindex, 12 - git_monthindex);
        git_monthchange = git_montharrbefore.concat(git_month);
        addweek(data);
        addlastmonth();
        var html = github_main_box(git_monthchange, git_data, git_user, git_color, git_total, git_thisweekdatacore, git_weekdatacore, git_oneyearbeforeday, git_thisday, git_aweekago, git_amonthago);
        append_div_gitcalendar(github_container, html);
        if(document.getElementById('github_loading')){
            document.getElementById('github_loading').remove()};
        responsiveChart()
    }).catch(function (error) {
        console.log(error)
    });
      window.addEventListener('resize', function () {
          if (document.getElementById('gitcanvas')) {
            responsiveChart()
          }
    })
    window.addEventListener('scroll', function () {
      if (document.querySelector('.gitmessage')) {
        git_tooltip_container.innerHTML = ""
    }
    })
    var git_thiscolor = (color, x) => {
        if (x === 0) {
            var i = parseInt(x / 2);
            return color[0]
        } else if (x < 2) {
            return color[1]
        } else if (x < 20) {
            var i = parseInt(x / 2);
            return color[i]
        } else {
            return color[9]
        }
    };
    var tooltip_html = (x, y, span1, span2) => {
        var html = '';
        html += '<div class="gitmessage" style="top:' + y + 'px;left:' + x + 'px;position: fixed;z-index:9999"><div class="angle-wrapper" style="display:block;"><span>' + span1 + '&nbsp;</span><span>' + span2 + ' 次上传</span></div></div>';
        return html
    };
    var github_canvas_box = () => {
        var html = '<div id="gitcalendarcanvasbox"> <canvas id="gitcanvas" style="animation: none;"></canvas></div>';
        return html
    };
    var github_info_box = (user, color) => {
        var html = '';
        html += '<div id="git_tooltip_container"></div><div class="contrib-footer clearfix mt-1 mx-3 px-3 pb-1"><div class="float-left text-gray">数据来源 <a href="https://github.com/' + user + '" target="blank">@' + user + '</a></div><div class="contrib-legend text-gray">Less <ul class="legend"><li style="background-color:' + color[0] + '"></li><li style="background-color:' + color[2] + '"></li><li style="background-color:' + color[4] + '"></li><li style="background-color:' + color[6] + '"></li><li style="background-color:' + color[8] + '"></li></ul>More </div></div>';
        return html
    };
    var github_main_box = (monthchange, git_data, user, color, total, thisweekdatacore, weekdatacore, oneyearbeforeday, thisday, aweekago, amonthago) => {
        var html = '';
        var canvasbox = github_canvas_box();
        var infobox = github_info_box(user, color);
        var style = github_main_style();
        html += '<div class="position-relative"><div class="border py-2 graph-before-activity-overview"><div class="js-gitcalendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas gitcalendar-graph height-full text-center">' + canvasbox + '</div>' + infobox + '</div></div>';
        html += '<div style="display:flex;width:100%"><div class="contrib-column contrib-column-first table-column"><span class="text-muted">过去一年提交</span><span class="contrib-number">' + total + '</span><span class="text-muted">' + oneyearbeforeday + '&nbsp;-&nbsp;' + thisday + '</span></div><div class="contrib-column table-column"><span class="text-muted">最近一月提交</span><span class="contrib-number">' + thisweekdatacore + '</span><span class="text-muted">' + amonthago + '&nbsp;-&nbsp;' + thisday + '</span></div><div class="contrib-column table-column"><span class="text-muted">最近一周提交</span><span class="contrib-number">' + weekdatacore + '</span><span class="text-muted">' + aweekago + '&nbsp;-&nbsp;' + thisday + '</span></div></div>' + style;
        return html
    };
    var github_main_style = () => {
        style = '<style>#github_container{text-align:center;margin:0 auto;width:100%;display:flex;display:-webkit-flex;justify-content:center;align-items:center;flex-wrap:wrap;}.gitcalendar-graph text.wday,.gitcalendar-graph text.month{font-size:10px;fill:#aaa;}.contrib-legend{text-align:right;padding:0 14px 10px 0;display:inline-block;float:right;}.contrib-legend .legend{display:inline-block;list-style:none;margin:0 5px;position:relative;bottom:-1px;padding:0;}.contrib-legend .legend li{display:inline-block;width:10px;height:10px;}.text-small{font-size:12px;color:#767676;}.gitcalendar-graph{padding:15px 0 0;text-align:center;}.contrib-column{text-align:center;border-left:1px solid #ddd;border-top:1px solid #ddd;font-size:11px;}.contrib-column-first{border-left:0;}.table-column{padding:10px;display:table-cell;flex:1;vertical-align:top;}.contrib-number{font-weight:300;line-height:1.3em;font-size:24px;display:block;}.gitcalendar img.spinner{width:70px;margin-top:50px;min-height:70px;}.monospace{text-align:center;color:#000;font-family:monospace;}.monospace a{color:#1D75AB;text-decoration:none;}.contrib-footer{font-size:11px;padding:0 10px 12px;text-align:left;width:100%;box-sizing:border-box;height:26px;}.left.text-muted{float:left;margin-left:9px;color:#767676;}.left.text-muted a{color:#4078c0;text-decoration:none;}.left.text-muted a:hover,.monospace a:hover{text-decoration:underline;}h2.f4.text-normal.mb-3{display:none;}.float-left.text-gray{float:left;}#user-activity-overview{display:none;}.day-tooltip{white-space:nowrap;position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.85);border-radius:3px;display:none;pointer-events:none;}.day-tooltip strong{color:#dfe2e5;}.day-tooltip.is-visible{display:block;}.day-tooltip:after{position:absolute;bottom:-10px;left:50%;width:5px;height:5px;box-sizing:border-box;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.85)}.position-relative{width:100%;}@media screen and (max-width:650px){.contrib-column{display:none}}.angle-wrapper{z-index:9999;display:inline;width:200px;height:40px;position:relative;padding:5px 0;background:rgba(0,0,0,0.8);border-radius:8px;text-align:center;color:white;}.angle-box{position:fixed;padding:10px}.angle-wrapper span{padding-bottom:1em;}.angle-wrapper:before{content:"";width:0;height:0;border:10px solid transparent;border-top-color:rgba(0,0,0,0.8);position:absolute;left:47.5%;top:100%;}</style>';
        return style
    }
};
var append_div_gitcalendar = (parent, text) => {
    if (typeof text === 'string') {
        var temp = document.createElement('div');
        temp.innerHTML = text;
        var frag = document.createDocumentFragment();
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild)
        }
        parent.appendChild(frag)
    } else {
        parent.appendChild(text)
    }
};
var loading_git = (color) => {
    loading = '<div id="github_loading" style="width:10%;height:100%;margin:0 auto;display: block"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve"><path fill="' + color + '" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(275.098 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg></div>';
    return loading
};

(function(){
    var git_user = 'yuang01';
    var github_container = document.getElementById('github_container');
    var github_loading = document.getElementById('github_loading');
    var git_purple = ['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f',];
    var git_green = ['#ebedf0', '#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'];
    var git_blue = ['#ebedf0', '#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c',];
    var git_color = git_green;
    if (github_container) {
      append_div_gitcalendar(github_container, loading_git(git_color[4]));
      github_canlendar(git_user, git_color)
    } else {
      console.log('nonono');
    }
    
})()
    
    
```
{% endfolding %}

将 `272`行的`git_user`改为你自己的用户名
然后在 自定义侧边栏的`home_widget`中写入以下内容:

```yaml
home_widget:
  - class_name: my_github_container
    id_name: my_github_container
    order: -1
    name: 测试日历
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="github_container"></div>
      <script data-pjax src="/githubcalendar/index.js"></script>
    '
```
然后就会在首页出现github日历图
![github日历图](https://img13.360buyimg.com/ddimg/jfs/t1/209326/24/2496/37863/6152b6d3E7762f687/3438ceef175cbc59.png)


### 添加IP签名档
```yaml
home_widget:
  - class_name: welcome
    id_name: welcome
    order: -1
    name: 欢迎
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '<img src="https://api.amogu.cn/api/ipimg/" style="width:100%">'
```
![IP签名档](https://img11.360buyimg.com/ddimg/jfs/t1/209759/11/2601/1358816/6152bb30E44fe6be5/96861371c579252e.png)

### 添加轮播图
同样在`source`文件夹下创建`mySwiper/index.js`和`mySwiper/index.css`文件，然后创建`mySwiper/img`文件夹，用于存放图片，轮播图嘛，肯定要图片。

{% folding mySwiper/index.js %}
js用vue写的，因为主题已经引入了vue版本的swiper轮播图插件, 当然你也可以引入jquery插件，用jquery来写，都可以的。
```js
// 如果想变换轮播方式等，进阶的话，可以看这个 https://github.surmon.me/vue-awesome-swiper/
// 当然你也可以引入jquery插件，都可以的, 不只是轮播图，其他特效也可以
new Vue({
  el: "#mySwiper",
  data: function () {
    return {
      swiperOption: {
        direction: "vertical", // 这个是竖着的
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        // 注释上面的四个，则水平方向轮播
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 注释掉上面这个，则不显示小点点
        loop: true, // 循环
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }, // 自动播放,注释掉则不自动播放
        on: {
          init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },
        },
        // or data-swiper-parallax="-100"
        // 上面是文字动画效果，注释则取消文字动画，动画效果参见 https://www.swiper.com.cn/usage/animate/index.html
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.myswiper.$swiper;
    },
  },
  methods: {
    // 鼠标移入停止轮播
    stopAutoPlay() {
      this.swiperOption.autoplay && this.swiper.autoplay.stop();
    },
    // 鼠标移出开始轮播
    startAutoPlay() {
      this.swiperOption.autoplay && this.swiper.autoplay.start();
    },
  },
});

```
{% endfolding %}


{% folding mySwiper/index.css %}
```css

.myswiper .swiper-slide {
    position: relative;
}

.myswiper .swiper-slide p {
    position: absolute;
    font-size: 18px;
    top: 50px;
    left: 10px;
    z-index: 9999;
    color: #fff;
}
.myswiper .swiper-slide a.toPath {
    display: block;
    width: 100%;
    height: 100%;
}
.myswiper .swiper-slide h2 {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9999;
    color: #fff;
    font-size: 24px;
}
.myswiper .swiper-slide img {
    filter: brightness(0.8); /* 图片变暗 ,字体看得清 */
}
.myswiper.swiper-container-vertical .swiper-pagination-bullet-active {
    height: 30px;
    border-radius: 10px;
    transition: all 0.3s;
}

/* 暗黑模式样式在  .darkModel { }  类下 */
/* 例如 
    .darkModel .aaa {
        color: #c9d1d9;
    }
} */

```
{% endfolding %}

最后在自定义侧边栏的`home_widget`写上
```yaml
home_widget:
  - class_name: test2_swiper
    id_name: test2_swiper
    order: -1
    name: 测试轮播图
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '
    <div id="mySwiper" @mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
      <swiper class="myswiper" ref="myswiper" style="height:350px;" :options="swiperOption">

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/2.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述哦</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/3.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题2</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述2</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/4.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题3</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述3</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/5.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题4</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述4</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="https://api.dujin.org/pic/ghibli/" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题5</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述5</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/7.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题6</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述6</p>
          </a>
        </swiper-slide>

        <!-- 如果你想继续增加轮播图，继续在下面写<swiper-slide>我是内容</swiper-slide>就行了 -->
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>
    </div>

    <script src="/mySwiper/index.js"></script>
    <link href="/mySwiper/index.css" rel="stylesheet">
    '
```

注意，请自行修改a链接地址和图片地址和标题名称和描述
```html
<swiper-slide>
  <a href="http://baidu.com" class="toPath">  <!-- a链接地址 -->
    <img class="no-lazy" src="/mySwiper/img/2.jpg" style="width:100%;height:100%;object-fit: cover;">  <!-- 图片地址 -->
    <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题</h2> <!-- 修改标题名称 -->
    <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述哦</p> <!-- 修改描述 -->
  </a>
</swiper-slide>
```
如果你想加轮播图或者删除轮播图，则增加或者删除上面这个模块就行了，这样，一个轮播图就放在了首页。
![自定义轮播图](https://img12.360buyimg.com/ddimg/jfs/t1/157070/18/25566/1656690/6152dc57E2b0f3df1/0b6c5731c4138a28.png)

### 横向滚动特效
首先需要在`source`文件夹下创建`bli/index.js`和`bli/index.css`文件
{% folding bli/index.js %}
```js
// 主题已经默认cdn引入了vue-seamless-scroll插件
// https://chenxuan0000.github.io/vue-seamless-scroll/zh/guide/01-basic.html
new Vue({
  el: "#myBli", // el不要是最外面的id_name，应该是html: ''里的div的id
  data: function () {
    return {
      content: [],
      listData: [1, 2, 3, 4, 5, 6],
      classOption: {
        limitMoveNum: 2,
        direction: 3,
      },
    };
  },
  methods: {},
});

```
{% endfolding %}

{% folding bli/index.css %}
```css
#myBli .warp {
  width: 100%;
  height: 120px;
  margin: 0 auto;
  overflow: hidden;
}
#myBli .warp ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
#myBli .warp ul.ul-item {
  display: flex;
}
#myBli .warp ul.ul-item .li-item {
  width: 120px;
  display: block;
  height: 120px;
  margin-right: 10px;
  line-height: 120px;
  background-color: #999;
  color: #fff;
  text-align: center;
  font-size: 30px;
}

#myBli .warp ul.ul-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```
{% endfolding %}
最后在自定义侧边栏的`home_widget`中加入以下内容:
```yaml
home_widget:
  - class_name: mybilibili
    id_name: mybilibili
    order: -1
    name: 测试bli
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="myBli">
        <vue-seamless-scroll
          :data="listData"
          :class-option="classOption"
          class="warp"
        >
          <ul class="ul-item" style="width:720px;">
            <!-- 在这里改, 手动修改a连接的href值和img的src值, 如果你会进阶，你可以使用v-for, 或者数据使用动态数据-->
            
            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>
            <!-- 在这里结束 -->
          </ul>
        </vue-seamless-scroll>
      </div>

      <script src="/bli/index.js"></script>
      <link href="/bli/index.css" rel="stylesheet">
    '
```
同样，自行修改上面a标签的链接和图片地址，至此横向滚动特效完成。
> 注意，使用vue写法的话，图片需要带上class="no-lazy"，否则可能加载不出来，，js原生或者jquery不需要带

![横向滚动特效](https://img13.360buyimg.com/ddimg/jfs/t1/204201/29/8717/1295226/6152de69E4b27f8fe/3442e5daeb9dbdb6.png)


### 侧边栏增加微博热搜
同样同样，在`source`文件夹下创建`weibo/index.js`和`weibo/index.css`文件
{% folding weibo/index.js %}
又是vue写的，哈哈，随便用啥写
```js
new Vue({
  el: "#myWeibo", // el不要是最外面的id_name，应该是html: ''里的div的id
  data: function () {
    return {
      content: [],
      classOption: {
        singleHeight: 30,
      },
    };
  },
  created() {
    this.getWeiboList();
  },
  methods: {
    // 请求开源api, 获取历史上的今天数据
    getWeiboList() {
      fetch("https://tenapi.cn/resou/", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.content = data.list;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
});
```

{% endfolding %}

{% folding weibo/index.css %}
```css
.weibo-container {
    width: 100%;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    height: 30px;
}
.weibo-container .left {
    display: flex;
}
.weibo-container .name {
    margin-left: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
#myWeibo .warp {
    height: 300px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}
.weibo-container .order {
    color: #fe962e;
}
.weibo-container .name a{
    color: black;
}
.weibo-container .name a:hover {
    text-decoration: underline;
    color: red;
}
.weibo-container .red {
    color: red;
}
```

{% endfolding %}

最后在自定义侧边栏的`widget_library_sticky`或者`widget_library`中加入html,
```yaml
widget_library_sticky:
  - class_name: testWidget
    id_name: testWidget
    order: -1
    name: 微博热搜
    icon: fab fa-weibo
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="myWeibo">

      <!-- 如果不要滚动，则去掉 vue-seamless-scroll标签就行了，这个插件使用cdn向左向右滚动好像有问题 -->

        <vue-seamless-scroll
          :data="content"
          :class-option="classOption"
          class="warp"
        >
          <div class="weibo-container" v-for="(item, index) in content" :key="index">
            <div class="left">
              <div class="order" :class="{ red: index<=2 }">{{index + 1}}</div>
              <div class="name"><a :href="item.url" target="_blank">{{item.name}}</a></div>
            </div>
            <div class="hot">{{item.hot}}</div>
          </div>
        </vue-seamless-scroll>
      </div>

      <script src="/weibo/index.js"></script>
      <link href="/weibo/index.css" rel="stylesheet">
    '
```
这样，热搜侧边栏也弄好了，如果不要热搜榜滚动的话，自己去掉`<vue-seamless-scroll></vue-seamless-scroll>`这个html标签就行了


### 历史上的今天
嘿嘿，同样要在`source`文件夹下创建`historyToday/index.js`文件，好吧，我写累了
{% folding historyToday/index.js %}
又是vue.js写的，无所谓，不需要看懂, 复制粘贴就行
```js
// 如果想变换轮播方式等，进阶的话，可以看这个 https://github.surmon.me/vue-awesome-swiper/
// 当然你也可以引入jquery插件，都可以的, 不只是轮播图，其他特效也可以
new Vue({
  el: "#myHistorySwiper", // el不要是最外面的id_name，应该是html: ''里的div的id
  data: function () {
    return {
      swiperOption: {
        effect: "cube", // 轮播特效
        loop: true, // 循环
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      content: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs.myhistoryswiper.$swiper;
    },
  },
  created() {
    this.getHistoryList();
  },
  methods: {
    // 鼠标移入停止轮播
    stopAutoPlay() {
      this.swiperOption.autoplay && this.swiper.autoplay.stop();
    },
    // 鼠标移出开始轮播
    startAutoPlay() {
      this.swiperOption.autoplay && this.swiper.autoplay.start();
    },
    // 请求开源api, 获取历史上的今天数据
    getHistoryList() {
      fetch("https://tenapi.cn/lishi/?format=json", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.content = data.content;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
});

```
{% endfolding %}
最后在自定义侧边栏的`widget_library_sticky`或者`widget_library`中加入html,
```yaml
widget_library_sticky:
  - class_name: historyToday
    id_name: historyToday
    order: -1
    name: 历史上的今天
    icon: fas fa-calendar-week
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="myHistorySwiper" @mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
        <swiper class="myhistoryswiper" ref="myhistoryswiper" style="height:80px;" :options="swiperOption">
          <swiper-slide v-for="(item, index) in content" :key="index">
            {{item}}
          </swiper-slide>
        </swiper>
      </div>
      <script src="/historyToday/index.js"></script>
    '
```
这样历史上的今天就完成了
![历史上的今天](https://img10.360buyimg.com/ddimg/jfs/t1/207640/15/2697/1253849/6152e283Ec5fbadf5/f7cf99b009c9c8dc.png)
### 恋爱墙
在`source`文件夹下创建`love/index.js`文件
{% folding love/index.js %}
```js
var htmer_time = document.getElementById("htmer_time");
var htmer_time_time = null;

function setTime() {
  var create_time = Math.round(
    new Date(Date.UTC(2018, 10, 26, 6, 45, 0)).getTime() / 1000
  );
  var timestamp = Math.round(
    (new Date().getTime() + 8 * 60 * 60 * 1000) / 1000
  );
  currentTime = secondToDate(timestamp - create_time);
  currentTimeHtml =
    currentTime[0] +
    " 年 " +
    currentTime[1] +
    " 天 " +
    currentTime[2] +
    " 时 " +
    currentTime[3] +
    " 分 " +
    currentTime[4] +
    " 秒";
  htmer_time.innerHTML = currentTimeHtml;
}
function secondToDate(second) {
  if (!second) {
    return 0;
  }
  var time = new Array(0, 0, 0, 0, 0);
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second >= 3600) {
    time[2] = parseInt(second / 3600);
    second %= 3600;
  }
  if (second >= 60) {
    time[3] = parseInt(second / 60);
    second %= 60;
  }
  if (second > 0) {
    time[4] = second;
  }
  return time;
}

if (htmer_time) {
  htmer_time_time = setInterval(setTime, 1000);
} else {
  clearInterval(htmer_time_time);
}

```
{% endfolding %}
在第6行修改时间就行了，改成你自己想要开始的时间，这里是2018年10月26号开始的
最后在自定义侧边栏的`widget_library_sticky`或者`widget_library`中加入html
```yaml
widget_library_sticky:
  - class_name: testLove
    id_name: testLove
    order: -1
    name: 恋爱墙
    icon: fas fa-heart
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: '
    
      <div style="text-align: center;">
        <img src="https://a-oss.zmki.cn/20190601/img_9879.jpg"
          style="width: 50px;height: 50px;vertical-align: -20px;border-radius: 50%;margin-right: 5px;margin-bottom: 5px;-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);border: 2px solid #fff;" />
        <svg viewbox="0 0 1024 1024" style="margin-left: 5px;margin-right: 5px;" version="1.0" width="15" height="15"
          class="my-face">
          <path
            d="M863.597631 513.574282l-271.33965-140.213484L729.783667 81.926656c3.583731-7.87141 7.167462-15.742819 7.167462-25.214109C736.887134 25.226908 708.345275 0.012799 672.635953 0.012799a63.611229 63.611229 0 0 0-39.293053 12.607055c-1.791866 1.59988-3.519736 3.19976-5.311602 3.19976L147.87531 418.925381a55.547834 55.547834 0 0 0-19.646527 47.356448c1.791866 17.278704 14.27093 33.021523 32.125591 42.492813l271.33965 141.749369L292.504463 945.221908c-12.479064 25.214109-1.791866 53.563983 23.166262 69.306802 10.751194 6.335525 23.230258 9.47129 35.709322 9.47129 16.062795 0 32.125591-4.735645 44.604655-15.742819l480.091993-403.297753a55.547834 55.547834 0 0 0 19.646526-47.228458 61.243407 61.243407 0 0 0-32.12559-44.156688z"
            fill="#515151" />
        </svg>
        <img src="https://a-oss.zmki.cn/20190601/img_9878.jpg"
          style="width: 50px;height: 50px;vertical-align: -20px;border-radius: 50%;margin-left: 5px;margin-bottom: 5px;-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);border: 2px solid #fff;" /><br />
        <span id="htmer_time"></span>
      </div>

      <script data-pjax src="/love/index.js"></script>
    '
```
这样，恋爱墙就完成了，但是，除了修改时间，你还可以把两张图片地址也修改成你自己的图片地址
![恋爱墙](https://img13.360buyimg.com/ddimg/jfs/t1/207293/17/2693/1405780/6152e217Ebfe5263a/f2bb2529adb8de88.png)

这几个模块就相当于给你一个容器，你可以自己往里面方html，然后放js，css，放一些自己的插件，vue.js,jquery.js，原生js都可以，只是提供一个容器，你可以自己搞更好看更好玩的扩展，如果你懒得折腾，用我上面写的扩展（自定义侧边栏）也挺好的。


最后我将我的`source/_data/widget.yml`写法贴下来,如下所示
{% folding source/_data/widget.yml %}
```yaml
widget_library:

widget_library_sticky:
  - class_name: testWidget
    id_name: testWidget
    order: -1
    name: 微博热搜
    icon: fab fa-weibo
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="myWeibo">

      <!-- 如果不要滚动，则去掉 vue-seamless-scroll标签就行了，这个插件使用cdn向左向右滚动好像有问题 -->

        <vue-seamless-scroll
          :data="content"
          :class-option="classOption"
          class="warp"
        >
          <div class="weibo-container" v-for="(item, index) in content" :key="index">
            <div class="left">
              <div class="order" :class="{ red: index<=2 }">{{index + 1}}</div>
              <div class="name"><a :href="item.url" target="_blank">{{item.name}}</a></div>
            </div>
            <div class="hot">{{item.hot}}</div>
          </div>
        </vue-seamless-scroll>
      </div>

      <script src="/weibo/index.js"></script>
      <link href="/weibo/index.css" rel="stylesheet">
    '
  - class_name: historyToday
    id_name: historyToday
    order: -1
    name: 历史上的今天
    icon: fas fa-calendar-week
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="myHistorySwiper" @mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
        <swiper class="myhistoryswiper" ref="myhistoryswiper" style="height:80px;" :options="swiperOption">
          <swiper-slide v-for="(item, index) in content" :key="index">
            {{item}}
          </swiper-slide>
        </swiper>
      </div>
      <script src="/historyToday/index.js"></script>
    '
  - class_name: testLove
    id_name: testLove
    order: -1
    name: 恋爱墙
    icon: fas fa-heart
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: '
    
      <div style="text-align: center;">
        <img src="https://a-oss.zmki.cn/20190601/img_9879.jpg"
          style="width: 50px;height: 50px;vertical-align: -20px;border-radius: 50%;margin-right: 5px;margin-bottom: 5px;-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);border: 2px solid #fff;" />
        <svg viewbox="0 0 1024 1024" style="margin-left: 5px;margin-right: 5px;" version="1.0" width="15" height="15"
          class="my-face">
          <path
            d="M863.597631 513.574282l-271.33965-140.213484L729.783667 81.926656c3.583731-7.87141 7.167462-15.742819 7.167462-25.214109C736.887134 25.226908 708.345275 0.012799 672.635953 0.012799a63.611229 63.611229 0 0 0-39.293053 12.607055c-1.791866 1.59988-3.519736 3.19976-5.311602 3.19976L147.87531 418.925381a55.547834 55.547834 0 0 0-19.646527 47.356448c1.791866 17.278704 14.27093 33.021523 32.125591 42.492813l271.33965 141.749369L292.504463 945.221908c-12.479064 25.214109-1.791866 53.563983 23.166262 69.306802 10.751194 6.335525 23.230258 9.47129 35.709322 9.47129 16.062795 0 32.125591-4.735645 44.604655-15.742819l480.091993-403.297753a55.547834 55.547834 0 0 0 19.646526-47.228458 61.243407 61.243407 0 0 0-32.12559-44.156688z"
            fill="#515151" />
        </svg>
        <img src="https://a-oss.zmki.cn/20190601/img_9878.jpg"
          style="width: 50px;height: 50px;vertical-align: -20px;border-radius: 50%;margin-left: 5px;margin-bottom: 5px;-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);box-shadow: 1px 1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.1);border: 2px solid #fff;" /><br />
        <span id="htmer_time"></span>
      </div>

      <script data-pjax src="/love/index.js"></script>
    '

home_widget:
  - class_name: welcome
    id_name: welcome
    order: -1
    name: 欢迎
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '<img src="https://api.amogu.cn/api/ipimg/" style="width:100%">'
  - class_name: my_github_container
    id_name: my_github_container
    order: -1
    name: 测试日历
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="github_container"></div>
      <script data-pjax src="/githubcalendar/index.js"></script>
    '
  - class_name: test2
    id_name: test2
    order: -1
    name: 测试轮播图
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '
    <div id="mySwiper" @mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
      <swiper class="myswiper" ref="myswiper" style="height:350px;" :options="swiperOption">

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/2.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述哦</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/3.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题2</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述2</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/4.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题3</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述3</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/5.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题4</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述4</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="https://api.dujin.org/pic/ghibli/" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题5</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述5</p>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="http://baidu.com" class="toPath">
            <img class="no-lazy" src="/mySwiper/img/7.jpg" style="width:100%;height:100%;object-fit: cover;">
            <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是标题6</h2>
            <p class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">我是描述6</p>
          </a>
        </swiper-slide>

        <!-- 如果你想继续增加轮播图，继续在下面写<swiper-slide>我是内容</swiper-slide>就行了 -->
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>
    </div>

    <script src="/mySwiper/index.js"></script>
    <link href="/mySwiper/index.css" rel="stylesheet">
    '
  - class_name: mybilibili
    id_name: mybilibili
    order: -1
    name: 测试bli
    icon: fas fa-envelope
    icon_color: blue
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="myBli">
        <vue-seamless-scroll
          :data="listData"
          :class-option="classOption"
          class="warp"
        >
          <ul class="ul-item" style="width:720px;">
            <!-- 在这里改, 手动修改a连接的href值和img的src值, 如果你会进阶，你可以使用v-for, 或者数据使用动态数据-->
            
            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>

            <li class="li-item">
              <a href="http://baidu.com">
                <img class="no-lazy" src="https://pic4.zhimg.com/80/v2-f549722dac8f777693c090a92498de0f_1440w.jpg">
              </a>
            </li>
            <!-- 在这里结束 -->
          </ul>
        </vue-seamless-scroll>
      </div>

      <script src="/bli/index.js"></script>
      <link href="/bli/index.css" rel="stylesheet">
    '

```
{% endfolding %}