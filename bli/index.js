// 主题已经默认cdn引入了vue-seamless-scroll插件
// https://chenxuan0000.github.io/vue-seamless-scroll/zh/guide/01-basic.html
new Vue({
  el: "#myBli", // el不要是最外面的id_name，应该是html: ''里的div的id
  data: function () {
    return {
      content: [],
      listData: [],
      classOption: {
        limitMoveNum: 2,
        direction: 3,
      },
      bliWidth: '720px'
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 请求开源api, 获取历史上的今天数据
    getList() {
      fetch("https://api.vvhan.com/api/douban", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.listData = data.data;
        this.bliWidth = Number(data.data.length) * 120 + 'px';
      })
      .catch((err) => {
        console.log("err", err);
      });
    },
  },
});
