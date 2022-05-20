---
title: 右上角梅花
excerpt: 右上角梅花，页脚游动的鱼，轮播图底部的波浪
date: 2022-05-20 14:03:20
tags: ['梅花']
categories: [梅花]
img: https://pic3.zhimg.com/50/v2-2eda8421a841216b7f309e52c5f64e3b_720w.jpg?source=1940ef5c
---

页脚游动的鱼，轮播图底部的波浪 在主题`v2.7.5`版本已经加到主题里去了

右上角的梅花特效，首先在`source`文件夹下创建`meihua/index.js`文件，文件内容如下

{% folding 梅花js %}
``` js
var encode_version = "sojson.v5",
  qafcw = "__0x6b909",
  __0x6b909 = [
    "w6kSRg==",
    "ED7ChT3DsQ==",
    "woTDjsOuVQ==",
    "OhnDmsKLERY9wr7Du8OKfg==",
    "w6DDssOowrw+wqfCsQ/DocOEU8OK",
    "woDCl8Klw54=",
    "woJEaWPDmwc=",
    "dQMQCh7CmRkZGTRXw44=",
    "Hx7Dukle",
    "wovDrMKweRU=",
    "OQrDscKQwqk=",
    "wrXDgsKNUTY=",
    "HcKSw4Id",
    "wpTCv2rDgsKfH2fDsSc=",
    "NEjDmcOndA==",
    "OgoNJQHDjRkVF3wEw5gywqIsw7t8w7TCu196ScKidcOQRSI8wpfCicOpw60Sw4LDn8KcwrbCpCowwqdfw7kGwrlnAcKuJMOiwq1Cw7oSwo11EMOcw6fDvcKvEUTCkcKTwp3DhX9Xw6FYwosKwp7DqMOiwrRDw4EJw4Q+XEjDn8OLUXpXQ28pwrrDrcOwwrPDjwlJw53CscK6ScKFwoheO3IpJi46wog=",
    "wqwEwp4o",
    "C8KYw54QcsKzwp/CkCnCuMOvGsOzBCQ=",
  ];
(function (_0xff0fac, _0x54e69d) {
  var _0x3d8b6b = function (_0x5b6f58) {
    while (--_0x5b6f58) {
      _0xff0fac["push"](_0xff0fac["shift"]());
    }
  };
  _0x3d8b6b(++_0x54e69d);
})(__0x6b909, 0xb1);
var _0x44c1 = function (_0x2f061c, _0xeeaff2) {
  _0x2f061c = _0x2f061c - 0x0;
  var _0x189570 = __0x6b909[_0x2f061c];
  if (_0x44c1["initialized"] === undefined) {
    (function () {
      var _0x4bb824 =
        typeof window !== "undefined"
          ? window
          : typeof process === "object" &&
            typeof require === "function" &&
            typeof global === "object"
          ? global
          : this;
      var _0x140280 =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x4bb824["atob"] ||
        (_0x4bb824["atob"] = function (_0xee5aa8) {
          var _0x1cd39d = String(_0xee5aa8)["replace"](/=+$/, "");
          for (
            var _0x4bc64f = 0x0,
              _0x4c6ea3,
              _0x7c5afe,
              _0x585a23 = 0x0,
              _0x43ee63 = "";
            (_0x7c5afe = _0x1cd39d["charAt"](_0x585a23++));
            ~_0x7c5afe &&
            ((_0x4c6ea3 =
              _0x4bc64f % 0x4 ? _0x4c6ea3 * 0x40 + _0x7c5afe : _0x7c5afe),
            _0x4bc64f++ % 0x4)
              ? (_0x43ee63 += String["fromCharCode"](
                  0xff & (_0x4c6ea3 >> ((-0x2 * _0x4bc64f) & 0x6))
                ))
              : 0x0
          ) {
            _0x7c5afe = _0x140280["indexOf"](_0x7c5afe);
          }
          return _0x43ee63;
        });
    })();
    var _0x4fb300 = function (_0x5cd1f6, _0x413d9c) {
      var _0x74de7b = [],
        _0x4b6e1e = 0x0,
        _0x3cb8f2,
        _0x3556c3 = "",
        _0x23f0ee = "";
      _0x5cd1f6 = atob(_0x5cd1f6);
      for (
        var _0x3ee9ae = 0x0, _0x3cf54e = _0x5cd1f6["length"];
        _0x3ee9ae < _0x3cf54e;
        _0x3ee9ae++
      ) {
        _0x23f0ee +=
          "%" +
          ("00" + _0x5cd1f6["charCodeAt"](_0x3ee9ae)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      _0x5cd1f6 = decodeURIComponent(_0x23f0ee);
      for (var _0x3cd09c = 0x0; _0x3cd09c < 0x100; _0x3cd09c++) {
        _0x74de7b[_0x3cd09c] = _0x3cd09c;
      }
      for (_0x3cd09c = 0x0; _0x3cd09c < 0x100; _0x3cd09c++) {
        _0x4b6e1e =
          (_0x4b6e1e +
            _0x74de7b[_0x3cd09c] +
            _0x413d9c["charCodeAt"](_0x3cd09c % _0x413d9c["length"])) %
          0x100;
        _0x3cb8f2 = _0x74de7b[_0x3cd09c];
        _0x74de7b[_0x3cd09c] = _0x74de7b[_0x4b6e1e];
        _0x74de7b[_0x4b6e1e] = _0x3cb8f2;
      }
      _0x3cd09c = 0x0;
      _0x4b6e1e = 0x0;
      for (var _0x59a51e = 0x0; _0x59a51e < _0x5cd1f6["length"]; _0x59a51e++) {
        _0x3cd09c = (_0x3cd09c + 0x1) % 0x100;
        _0x4b6e1e = (_0x4b6e1e + _0x74de7b[_0x3cd09c]) % 0x100;
        _0x3cb8f2 = _0x74de7b[_0x3cd09c];
        _0x74de7b[_0x3cd09c] = _0x74de7b[_0x4b6e1e];
        _0x74de7b[_0x4b6e1e] = _0x3cb8f2;
        _0x3556c3 += String["fromCharCode"](
          _0x5cd1f6["charCodeAt"](_0x59a51e) ^
            _0x74de7b[(_0x74de7b[_0x3cd09c] + _0x74de7b[_0x4b6e1e]) % 0x100]
        );
      }
      return _0x3556c3;
    };
    _0x44c1["rc4"] = _0x4fb300;
    _0x44c1["data"] = {};
    _0x44c1["initialized"] = !![];
  }
  var _0x45d974 = _0x44c1["data"][_0x2f061c];
  if (_0x45d974 === undefined) {
    if (_0x44c1["once"] === undefined) {
      _0x44c1["once"] = !![];
    }
    _0x189570 = _0x44c1["rc4"](_0x189570, _0xeeaff2);
    _0x44c1["data"][_0x2f061c] = _0x189570;
  } else {
    _0x189570 = _0x45d974;
  }
  return _0x189570;
};
function hanApiMeihua() {
  var _0x37935d = {
    dzqhN: "div",
    HDwlC: _0x44c1("0x0", "*Y1q"),
    WRSha: _0x44c1("0x1", "[r8s"),
    TkMnm: _0x44c1("0x2", "dF[H"),
    BQzkt: _0x44c1("0x3", "p&Zu"),
    jEpFN: "https://ohan.gitee.io/HanKu/HanJs/HanMeiHua.js",
  };
  var _0x3e52ed = document["createElement"](_0x37935d["dzqhN"]);
  _0x3e52ed["innerHTML"] = _0x37935d[_0x44c1("0x4", "bwUb")];
  document[_0x44c1("0x5", "p]kJ")][_0x44c1("0x6", "!eqS")](_0x3e52ed);
  document["body"][_0x44c1("0x7", "YKdc")](
    _0x3e52ed,
    document[_0x44c1("0x8", "5FyT")]["firstElementChild"]
  );
  var _0x59d96e = document["createElement"](_0x44c1("0x9", "9DEG"));
  _0x59d96e[_0x44c1("0xa", "*Y1q")](
    _0x37935d[_0x44c1("0xb", "fnJ(")],
    _0x37935d[_0x44c1("0xc", "0Od6")]
  );
  _0x59d96e[_0x44c1("0xa", "*Y1q")](
    _0x37935d[_0x44c1("0xd", "1c0b")],
    _0x37935d[_0x44c1("0xe", "0Od6")]
  );
  document[_0x44c1("0xf", "dF[H")]["appendChild"](_0x59d96e);
}
window["onload"] = function () {
  hanApiMeihua();
};
document.addEventListener("pjax:send", function () {
  if ($(".hansApi-snowfall-flakes").length) {
    $(".hansApi-snowfall-flakes").remove();
  }
});
document.addEventListener("pjax:complete", function () {
  if (!$(".hansApi-snowfall-flakes").length) {
    hanApiMeihua();
  }
});
if (
  !(
    typeof encode_version !== _0x44c1("0x10", "YjES") &&
    encode_version === "sojson.v5"
  )
) {
  window[_0x44c1("0x11", "f(0D")]("不能删除sojson.v5");
}
encode_version = "sojson.v5";

```

{% endfolding %}

这个js里面有很多混淆转译字符，我也是从别人那扒下来的，扒下来就这样，自己稍微改了一点，适配了主题

js创建好之后，打开主题配置文件`_config.yml`，找到`import`，然后这样写

``` yaml
# 自己嵌入css或者script
import:
  link:
    # - <link src"xxx.css"></link>
    - 
    - 
  script: 
    # - <script src="xxx.js"></script>
    - <script src="/meihua/index.js"></script>
    - 

```

这样，梅花js就导进去了，至此，梅花就出现在了页面上的右上角
