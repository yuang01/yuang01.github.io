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
