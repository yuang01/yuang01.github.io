---
title: vue点击浏览器后退按钮禁止其后退
date: 2018-05-15  14:13
categories: "vue"
tags: ['vue']
---

有些时候我们希望点击浏览器后退按钮之后还是当前页面，也就是禁止点击后退按钮，那我们该怎么做呢？
<!-- more -->
##### 首先将路由页面配置文件(一般为route.js)中不想后退的页面增加一个allowBack: false
``` javascript
{
  path: '/producrUnit',
  meta: { index: 5, allowBack: false }, // 在此处的meta里面加上allowBack: false
  component: ProducrUnit
}
```
##### 然后在这个route.js文件里面继续写，通过router.beforeEach来判断当前路由页面配置是否包含allowBack: false,如果有，那就将这个false传给vuex里面的allowBack

``` javascript
let allowBack = true
router.beforeEach(async (to, from, next) => {
  next()
  if (to.meta.allowBack !== undefined) {
    allowBack = to.meta.allowBack
  }
  if (!allowBack) {
    history.pushState(null, null, location.href)
  }
  store.dispatch('updateAppSetting', {     //   updateAppSetting 只是store里面的一个action，用来改变store里的allowBack的值的，具体怎么改这个值 要根据各位的实际情况而定
    allowBack: allowBack
  })
})
```
##### 此时应该在vuex里面增加哟个state，叫做allowBack，并且通过上面的代码可以看出，我们需要在action里面增加一个叫做 updateAppSetting的方法来改变state里面的allowBack
``` javascript
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import * as types from '../mutation-types'

// initial state
const state = {
  msgTest: 1,
  allowBack: true // 此处增加一个allowBack
}

const getters = {
  msgTest: state => state.msgTest,
  allowBack: state => state.allowBack
}

// actions
const actions = {
  updateAppSetting({commit}, {allowBack}){ // 增加一个可以改变allowBack的方法
    commit(types.UPDATE_APPSETTING, { allowBack })
  }
}

// mutations
const mutations = {
  [types.UPDATE_APPSETTING](state, { allowBack }){ // 真正改变allowBack的mutation
    state.allowBack = allowBack
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

```
##### 最后需要在App.vue里面获取vuex中的allowBack，然后如果是false，就禁止其返回

``` javascript
import { mapGetters } from 'vuex'; // 首先获取到vuex中的allowBack，这里一般使用mapState获取，我个人喜欢用mapGetter
computed: {
  ...mapGetters([
    'allowBack'
  ])
},
// 然后在mounted里面写方法
window.onpopstate = () => {
  if (!this.allowBack) {    //    这个allowBack 是存在vuex里面的变量
    history.go(1)
  }
}

```

##### 然后就大功告成了!
