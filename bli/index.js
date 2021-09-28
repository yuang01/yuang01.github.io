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
