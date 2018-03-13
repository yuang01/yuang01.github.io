---
title: textInput 事件
date: 2017-12-14 18：39:16
categories: "javascript基础"
tags: 'javascript'
---
### “DOM3 级事件”规范中引入了一个新事件，名叫 textInput。根据规范，当用户在可编辑区域中输入字符时，就会触发这个事件。这个用于替代 keypress 的 textInput 事件的行为稍有不同。区别之一就是任何可以获得焦点的元素都可以触发 keypress 事件，但只有可编辑区域才能触发 textInput事件。区别之二是 extInput 事件只会在用户按下能够输入实际字符的键时才会被触发，而 keypress事件则在按下那些能够影响文本显示的键时也会触发（例如退格键）。
``` bash
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "textInput", function(event){
	 event = EventUtil.getEvent(event);
	 alert(event.data);
}); 
```
### 另外，event 对象上还有一个属性，叫 inputMethod，表示把文本输入到文本框中的方式
### 0，表示浏览器不确定是怎么输入的。
### 1，表示是使用键盘输入的。
### 2，表示文本是粘贴进来的
### 2，表示文本是粘贴进来的
### 4，表示文本是使用 IME 输入的。
### 5，表示文本是通过在表单中选择某一项输入的。
### 6，表示文本是通过手写输入的（比如使用手写笔）。
### 6，表示文本是通过手写输入的（比如使用手写笔）。
### 8，表示文本是通过几种方法组合输入的。
### 9，表示文本是通过脚本输入的。