document.addEventListener("DOMContentLoaded", function () {
    bubbly({
        colorStart: '#fff4e6',
        colorStop: '#ffe9e4',
        blur:1,
        compose: 'source-over',
        bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
      });
})
