// 如果想变换轮播方式等，进阶的话，可以看这个 https://github.surmon.me/vue-awesome-swiper/
// 当然你也可以引入jquery插件，都可以的, 不只是轮播图，其他特效也可以
new Vue({
  el: "#mySwiper",
  data: function () {
    return {
      swiperOption: {
        direction: "vertical", // 这个是竖着的
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        // 注释上面的四个，则水平方向轮播
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 注释掉上面这个，则不显示小点点
        loop: true, // 循环
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }, // 自动播放,注释掉则不自动播放
        on: {
          init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },
        },
        // or data-swiper-parallax="-100"
        // 上面是文字动画效果，注释则取消文字动画，动画效果参见 https://www.swiper.com.cn/usage/animate/index.html
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.myswiper.$swiper;
    },
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
  },
});
