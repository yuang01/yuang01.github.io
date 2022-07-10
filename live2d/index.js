L2Dwidget.init({
  model: {
    jsonPath:
      "https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json",
    scale: 1,
  },
  display: {
    position: "left", //模型的表现位置
    width: 150, //模型的宽度
    height: 300, //模型的高度
    hOffset: -50, // 向左向右偏移
    vOffset: -150, // 向上向下偏移, 根据情况可以自己调整数值
  },
  mobile: {
    show: false, // 手机端不显示
    scale: 0.5,
  },
  react: {
    opacityDefault: 1, //模型默认透明度
    opacityOnHover: 0.2,
  },
});
