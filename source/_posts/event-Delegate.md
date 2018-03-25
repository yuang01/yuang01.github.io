---
title: 事件委托
date: 2017-12-15 14：43:16
categories: "javascript基础"
tags: 'javascript'
---
 对“事件处理程序过多”问题的解决方案就是事件委托。事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。例如，click 事件会一直冒泡到 document 层次。也就是说，我们可以为整个页面指定一个 onclick 事件处理程序，而不必给每个可单击的元素分别添加事件处理程序。
 <!-- more -->
以下面的 HTML 代码为例。
``` bash
<ul id="myLinks">
  <li id="goSomewhere">Go somewhere</li>
  <li id="doSomething">Do something</li>
  <li id="sayHi">Say hi</li>
</ul> 
```
 其中包含 3 个被单击后会执行操作的列表项。按照传统的做法，需要像下面这样为它们添加 3 个事件处理程序。

``` bash
  var item1 = document.getElementById("goSomewhere");
  var item2 = document.getElementById("doSomething");
  var item3 = document.getElementById("sayHi");
  EventUtil.addHandler(item1, "click", function(event){
   location.href = "http://www.wrox.com";
  });

  EventUtil.addHandler(item2, "click", function(event){
   document.title = "I changed the document's title";
  });

  EventUtil.addHandler(item3, "click", function(event){
   alert("hi");
}); 
```
### 如果在一个复杂的 Web 应用程序中，对所有可单击的元素都采用这种方式，那么结果就会有数不清的代码用于添加事件处理程序。此时，可以利用事件委托技术解决这个问题。使用事件委托，只需在DOM 树中尽量最高的层次上添加一个事件处理程序，如下面的例子所示。

``` bash
var list = document.getElementById("myLinks");
EventUtil.addHandler(list, "click", function(event){
  event = EventUtil.getEvent(event);
  var target = EventUtil.getTarget(event);
  switch(target.id){
    case "doSomething":
      document.title = "I changed the document's title";
      break;
    case "goSomewhere":
      location.href = "http://www.wrox.com";
      break;
    case "sayHi":
      alert("hi");
      break;
  }
});
```
