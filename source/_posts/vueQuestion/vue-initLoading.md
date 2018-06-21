---
title: vue初始化加载动画
date: 2018-06-06  17:27
categories: "loading"
tags: ['vue', 'javascript']
---
vue项目刷新页面加载动画
<!-- more -->
### 1.首先在index.html中编写加载动画
``` bash
<!DOCTYPE html>
<html class="no-js css-menubar">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="remark">
    <meta name="author" content="">
    <title>xxx</title>
    <style>
    @-webkit-keyframes spin {
      0% {
        transform: rotate(0)
      }

      100% {
        transform: rotate(360deg)
      }

    }

    @-moz-keyframes spin {
      0% {
        -moz-transform: rotate(0)
      }

      100% {
        -moz-transform: rotate(360deg)
      }

    }

    @keyframes spin {
      0% {
        transform: rotate(0)
      }

      100% {
        transform: rotate(360deg)
      }

    }

    #nb-global-spinner.spinner {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1003;
      background: #354077;
      overflow: hidden
    }

    #nb-global-spinner.spinner div:first-child {
      display: block;
      position: relative;
      left: 50%;
      top: 50%;
      width: 150px;
      height: 150px;
      margin: -75px 0 0 -75px;
      border-radius: 50%;
      box-shadow: 0 3px 3px 0 rgba(255, 56, 106, 1);
      transform: translate3d(0, 0, 0);
      animation: spin 2s linear infinite
    }

    #nb-global-spinner.spinner div:first-child:after, .spinner div:first-child:before {
      content: '';
      position: absolute;
      border-radius: 50%
    }

    #nb-global-spinner.spinner div:first-child:before {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      box-shadow: 0 3px 3px 0 rgb(255, 228, 32);
      -webkit-animation: spin 3s linear infinite;
      animation: spin 3s linear infinite
    }

    #nb-global-spinner.spinner div:first-child:after {
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      box-shadow: 0 3px 3px 0 rgba(61, 175, 255, 1);
      animation: spin 1.5s linear infinite
    }

    </style>
  </head>
  <body>
    <div id="nb-global-spinner" class="spinner">
      <div class="blob blob-0"></div>
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>
      <div class="blob blob-5"></div>
    </div>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```

### 2.然后在APP.vue文件里面删除动画dom
``` bash
<template>
  <div id="container">
    <nav-bar></nav-bar>
    <menu-bar></menu-bar>
    <tab-bar></tab-bar>
    <div class="page">
      <div class="page-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from '@/components/Layouts/Navbar/Navbar';
import MenuBar from '@/components/Layouts/Menubar/Menubar';
import TabBar from '@/components/Layouts/Tabbar/Tabbar';
import FooterBar from '@/components/Layouts/Footer';

export default {
  name: 'app',
  components: {
    NavBar,
    MenuBar,
    TabBar,
    FooterBar,
  },
  created() {
  	// 删除加载动画demo
    if (document.getElementById('nb-global-spinner')) {
      document.body.removeChild(document.getElementById('nb-global-spinner'));
    }
  },
};
</script>

<style>
@import 'Base.css';
</style>

<style lang="sass">
@import "./nprogress.css";
</style>

```
### 然后就刷新页面就可以看到加载动画了