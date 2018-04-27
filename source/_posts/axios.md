---
title: vue设置axios请求超时的时间
date: 2018-04-27 17:55
categories: "vue"
tags: 'vue'
---
### vue设置axios请求超时的时间
<!-- more -->

由于请求后台数据的时候，请求太久，导致超时报错，想改变这个磨人30s的时间怎么改呢？

直接在axios.js中修改即可

``` bash
import axios from 'axios';

export async function fetch(options) {
  const instance = await axios.create({
    baseURL: '/api/',
    timeout: 60 * 1000, // 这个位置修改即可
  });

  instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
  instance.defaults.headers.get['Content-Type'] = 'application/json';
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  instance.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';

  return instance(options);
}

export default {};
```