---
title: "如何更新主题"
bgImg: https://picx.zhimg.com/80/v2-d52171a21537cb270fb5cb3dfa92b6ba_1440w.webp?source=1940ef5c
img: https://picx.zhimg.com/80/v2-cd85a0fc2ddc17c30b6b840be2988596_1440w.webp?source=1940ef5c
date: 2023-03-05 17:43:30
top: true
---

其实学会更新主题还是一个蛮重要的技能的。
首先建议下载[vscode](https://code.visualstudio.com/)编辑器，这个编辑器确实好用。然后下载[git](https://git-scm.com/)（这个应该都有下载吧）

假如我们改了这个文件的这一行，文件颜色会变成<span style="color:#c49a5a">黄色</span>，更改的行的左边也会有<span style="color:#1d7091">蓝色</span>提示
更改的内容为`软件架构说明, 我这这个位置的后面加了一句话`
![](/img/updatetheme01.png)

更改的文件就比如是更改的主题配置文件，更改的行就像是更改的配置文件的某一行或者某几行
使用命令`git status`也能看到我们更改了哪些文件。
![](/img/updatetheme02.png)
使用命令`git diff 更改的文件名`也可以看到更改的行的变化
![](/img/updatetheme03.png)

当然上面的步骤你不理会也行，因为只是看文件改动了哪里

接着我们将所有更改的文件添加到暂存区，点击加号
![](/img/updatetheme04.png)
<span style="color:red">或者</span>使用命令`git add .` 后面的.代表项目已被更改的所有文件

![](/img/updatetheme05.png)
通过点击加号或者使用git add .将我们的文件添加到了暂存区域了

接着我们将暂存区的文件添加到本地仓库中，然后点击上面的对勾之后，会弹出一个文件，我们在这里随便写上一段话，表示我更改了这个文件的目的，然后ctrl+s即可
![](/img/updatetheme06.png)

<span style="color:red">或者</span>使用命令`git commit -m"我是一段话用来描述更改的目的"` 将暂存区的文件添加到本地仓库中 

![](/img/updatetheme07.png)

接着我们拉取远程代码，使用`git pull`命令或者使用vscode的拉取按钮
![](/img/updatetheme08.png)
然后我们会发现出现了冲突,分成上面一块和下面一块，上面一块表示我的更改内容，下面一块表示别人更改的内容
![](/img/updatetheme09.png)

此时我们采用传入的更改，点击上面图片中箭头标明的第二个按钮，就主题来说，这个别人指的是博主我，采用博主的更改。或者直接将上面这块代码和========给删了，保留下面这一块的代码

点击按钮之后我们的代码就成了最新的代码
![](/img/updatetheme10.png)

`软件架构说明，我也更改了呀，我也要在这里改呢，啦啦啦` 这段话是博主我做的更改，而`软件架构说明, 我这这个位置的后面加了一句话`是你做的更改，采用博主的更改即可，这样冲突就解决完成啦，代码也是最新的代码啦，此时主题更新成功。

这个在工作中也是必须要学会的git基本技能，因为你有些时候并不是一个人在改动一个项目，所以你需要学会这个简单的技能。从更新主题开始做起!!!
