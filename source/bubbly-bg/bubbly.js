"use strict";
window.bubbly = function (t) {
  var n = t || {},
    o = function () {
      return Math.random();
    },
    r = n.canvas || document.createElement("canvas"),
    e = r.width,
    a = r.height;
    r.className = 'bubbly-bg-canvas';
  null === r.parentNode &&
    (r.setAttribute(
      "style",
      "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"
    ),
    (e = r.width = window.innerWidth),
    (a = r.height = window.innerHeight),
    document.body.appendChild(r));
  var i = r.getContext("2d");
  (i.shadowColor = n.shadowColor || "#fff"), (i.shadowBlur = n.blur || 4);
  var l = i.createLinearGradient(0, 0, e, a);
  l.addColorStop(0, n.colorStart || "#2AE"),
    l.addColorStop(1, n.colorStop || "#17B");
  for (
    var c = n.bubbles || Math.floor(0.02 * (e + a)), u = [], d = 0;
    d < c;
    d++
  )
    u.push({
      f: (
        n.bubbleFunc ||
        function () {
          return "hsla(0, 0%, 100%, " + 0.1 * o() + ")";
        }
      ).call(),
      x: o() * e,
      y: o() * a,
      r: (
        n.radiusFunc ||
        function () {
          return 4 + (o() * e) / 25;
        }
      ).call(),
      a: (
        n.angleFunc ||
        function () {
          return o() * Math.PI * 2;
        }
      ).call(),
      v: (
        n.velocityFunc ||
        function () {
          return 0.1 + 0.5 * o();
        }
      ).call(),
    });
  !(function t() {
    if (null === r.parentNode) return cancelAnimationFrame(t);
    !1 !== n.animate && requestAnimationFrame(t),
      (i.globalCompositeOperation = "source-over"),
      (i.fillStyle = l),
      i.fillRect(0, 0, e, a),
      (i.globalCompositeOperation = n.compose || "lighter"),
      u.forEach(function (t) {
        i.beginPath(),
          i.arc(t.x, t.y, t.r, 0, 2 * Math.PI),
          (i.fillStyle = t.f),
          i.fill(),
          (t.x += Math.cos(t.a) * t.v),
          (t.y += Math.sin(t.a) * t.v),
          t.x - t.r > e && (t.x = -t.r),
          t.x + t.r < 0 && (t.x = e + t.r),
          t.y - t.r > a && (t.y = -t.r),
          t.y + t.r < 0 && (t.y = a + t.r);
      });
  })();
};
