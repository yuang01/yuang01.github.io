// 如果想变换轮播方式等，进阶的话，可以看这个 https://github.surmon.me/vue-awesome-swiper/
// 当然你也可以引入jquery插件，都可以的, 不只是轮播图，其他特效也可以
new Vue({
  el: "#myHistorySwiper", // el不要是最外面的id_name，应该是html: ''里的div的id
  data: function () {
    return {
      swiperOption: {
        effect: "cube", // 轮播特效
        loop: true, // 循环
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      content: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs.myhistoryswiper.$swiper;
    },
  },
  created() {
    this.getHistoryList();
  },
  methods: {
    // 鼠标移入停止轮播
    stopAutoPlay() {
      this.swiperOption.autoplay && this.swiper.autoplay.stop();
    },
    // 鼠标移出开始轮播
    startAutoPlay() {
      this.swiperOption.autoplay && this.swiper.autoplay.start();
    },
    // 请求开源api, 获取历史上的今天数据
    getHistoryList() {
      fetch("https://api.vvhan.com/api/hotlist?type=history", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.content = data.data;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
});
