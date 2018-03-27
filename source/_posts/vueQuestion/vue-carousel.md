---
title: vue轮播图
date: 2018-03-25  17:32
categories: "demo"
tags: ['vue', 'javascript']
---
其实用vue写轮播图比用jquery写轮播图要方便多了，jquery对demo的操作和对变量的获取比较繁琐，vue就比较简单了，只用对一两个共有的变量进行赋值就能达到更好的效果。
<!-- more -->
 首先来看body的内容
``` bash
/*css动画效果，从左到右滑动，从右到左滑动
        .left-enter-active{
            transform:translateX(0);
            transition:all 1s ease;
        }
        .left-leave-active{
            transform:translateX(-100%);
            transition:all 1s ease
        }
        .left-enter{
            transform:translateX(100%);
        }
        .left-leave{
            transform:translateX(0);
        }
        .right-enter-active {
            transform: translate3d(0%);
            transition: all 1s ease;
        }
        .right-leave-active {
            transform: translateX(100%);
            transition: all 1s ease;
        }
        .right-enter {
            transform: translateX(-100%);
        }
        .right-leave {
            transform: translateX(0);
        }
 */

// 当鼠标移入的时候，执行mouseenter或者mouseover事件，离开执行mouseleave或者mouseout事件
// 也就是移入终止定时器，移出循环轮播图
<div class="carousel" @mouseenter="enter" @mouseleave="leave">
// transition-group 用来定义轮播的动画效果，从左到右或者从右到左，此时就应该在css里面定义好动画效果
        <transition-group tag="ul" :name="names">
        // mark代表当前的呈现的是第几张图片，img里存储了所有的图片路径
            <li v-for='(image,index) in img' :key='index' v-show="index === mark"> 
                <a href="javascript:;">
                    <img :src="image">
                </a>
            </li>
        </transition-group>
        <div class="bullet">
        // span为下面的小圆点，点击小圆点就让当前的图片（mark）变成小圆点的索引，并且让当前的span呈现active状态
            <span v-for="(item,index) in img.length" :class="{'active':index === mark}" @click="change(index, mark)" :key="index"></span>
        </div>
        <div class="switch">
        // 上一张和下一张，对当前图片索引（mark）加一和减一的操作
            <span class="prev" @click="prev">&lt;</span>
            <span class="next" @click="next">&gt;</span>
        </div>
    </div>

// 以下是js代码
var vm = new Vue({
            el: '.carousel',
            data: {
                names: 'left',
                mark: 0,
                img: [
                    'images/a1.png',
                    'images/a2.png',
                    'images/a3.png',
                    'images/a4.png'
                ],
                time: null
            },
            methods: {   //添加方法
                change(i, m) {
                    if (i > m) {
                        this.names = 'left';
                    } else if (i < m) {
                        this.names = 'right';
                    } else {
                        return;
                    }
                    this.mark = i;
                },
                prev() {
                    this.names = 'right';
                    this.mark--;
                    if (this.mark === -1) {
                        this.mark = 3;
                        return
                    }
                },
                next() {
                    this.names = 'left';
                    this.mark++;
                    if (this.mark === 4) {
                        this.mark = 0;
                        return
                    }
                },
                autoPlay() {
                    this.names = 'left';
                    this.mark++;
                    if (this.mark === 4) {
                        this.mark = 0;
                        return
                    }
                },
                play() {
                    this.time = setInterval(this.autoPlay, 3000);
                },
                enter() {
                    clearInterval(this.time);
                },
                leave() {
                    this.play();
                }
            },
            created() {
                this.play()
            }
        })
    </script>
```
是不是比jquery要简单多了呢，笑脸
演示地址 <a href="http://yuang.site/carousel/" target="_blank" style="text-decoration: underline;">在线demo</a>
下载 <a href="https://github.com/YuAngBoy/carousel" style="text-decoration: underline;">vue轮播图</a>
喜欢记得点赞哦，(#^.^#)
<!-- UY BEGIN -->
<div id="uyan_frame"></div>
<script type="text/javascript" src="http://v2.uyan.cc/code/uyan.js?uid=2159813"></script>
<!-- UY END -->
