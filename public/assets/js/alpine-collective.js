(() => {
  var N = Object.create,
    v = Object.defineProperty,
    V = Object.getPrototypeOf,
    z = Object.prototype.hasOwnProperty,
    q = Object.getOwnPropertyNames,
    W = Object.getOwnPropertyDescriptor;
  var D = (o) =>
    v(o, "__esModule", {
      value: !0,
    });
  var F = (o, e) => () => (
    e ||
      ((e = {
        exports: {},
      }),
      o(e.exports, e)),
    e.exports
  );
  var U = (o, e, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let r of q(e))
          !z.call(o, r) &&
            r !== "default" &&
            v(o, r, {
              get: () => e[r],
              enumerable: !(n = W(e, r)) || n.enumerable,
            });
      return o;
    },
    k = (o) =>
      U(
        D(
          v(
            o != null ? N(V(o)) : {},
            "default",
            o && o.__esModule && "default" in o
              ? {
                  get: () => o.default,
                  enumerable: !0,
                }
              : {
                  value: o,
                  enumerable: !0,
                }
          )
        ),
        o
      );
  var Y = F((E, w) => {
    (function () {
      "use strict";

      function o() {
        var e = window,
          n = document;
        if (
          "scrollBehavior" in n.documentElement.style &&
          e.__forceSmoothScrollPolyfill__ !== !0
        )
          return;
        var r = e.HTMLElement || e.Element,
          i = 468,
          f = {
            scroll: e.scroll || e.scrollTo,
            scrollBy: e.scrollBy,
            elementScroll: r.prototype.scroll || T,
            scrollIntoView: r.prototype.scrollIntoView,
          },
          c =
            e.performance && e.performance.now
              ? e.performance.now.bind(e.performance)
              : Date.now;

        function u(t) {
          var l = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(l.join("|")).test(t);
        }
        var g = u(e.navigator.userAgent) ? 1 : 0;

        function T(t, l) {
          (this.scrollLeft = t), (this.scrollTop = l);
        }

        function R(t) {
          return 0.5 * (1 - Math.cos(Math.PI * t));
        }

        function m(t) {
          if (
            t === null ||
            typeof t != "object" ||
            t.behavior === void 0 ||
            t.behavior === "auto" ||
            t.behavior === "instant"
          )
            return !0;
          if (typeof t == "object" && t.behavior === "smooth") return !1;
          throw new TypeError(
            "behavior member of ScrollOptions " +
              t.behavior +
              " is not a valid value for enumeration ScrollBehavior."
          );
        }

        function O(t, l) {
          if (l === "Y") return t.clientHeight + g < t.scrollHeight;
          if (l === "X") return t.clientWidth + g < t.scrollWidth;
        }

        function S(t, l) {
          var s = e.getComputedStyle(t, null)["overflow" + l];
          return s === "auto" || s === "scroll";
        }

        function $(t) {
          var l = O(t, "Y") && S(t, "Y"),
            s = O(t, "X") && S(t, "X");
          return l || s;
        }

        function _(t) {
          for (; t !== n.body && $(t) === !1; ) t = t.parentNode || t.host;
          return t;
        }

        function j(t) {
          var l = c(),
            s,
            d,
            p,
            a = (l - t.startTime) / i;
          (a = a > 1 ? 1 : a),
            (s = R(a)),
            (d = t.startX + (t.x - t.startX) * s),
            (p = t.startY + (t.y - t.startY) * s),
            t.method.call(t.scrollable, d, p),
            (d !== t.x || p !== t.y) && e.requestAnimationFrame(j.bind(e, t));
        }

        function h(t, l, s) {
          var d,
            p,
            a,
            y,
            H = c();
          t === n.body
            ? ((d = e),
              (p = e.scrollX || e.pageXOffset),
              (a = e.scrollY || e.pageYOffset),
              (y = f.scroll))
            : ((d = t), (p = t.scrollLeft), (a = t.scrollTop), (y = T)),
            j({
              scrollable: d,
              method: y,
              startTime: H,
              startX: p,
              startY: a,
              x: l,
              y: s,
            });
        }
        (e.scroll = e.scrollTo =
          function () {
            if (arguments[0] !== void 0) {
              if (m(arguments[0]) === !0) {
                f.scroll.call(
                  e,
                  arguments[0].left !== void 0
                    ? arguments[0].left
                    : typeof arguments[0] != "object"
                    ? arguments[0]
                    : e.scrollX || e.pageXOffset,
                  arguments[0].top !== void 0
                    ? arguments[0].top
                    : arguments[1] !== void 0
                    ? arguments[1]
                    : e.scrollY || e.pageYOffset
                );
                return;
              }
              h.call(
                e,
                n.body,
                arguments[0].left !== void 0
                  ? ~~arguments[0].left
                  : e.scrollX || e.pageXOffset,
                arguments[0].top !== void 0
                  ? ~~arguments[0].top
                  : e.scrollY || e.pageYOffset
              );
            }
          }),
          (e.scrollBy = function () {
            if (arguments[0] !== void 0) {
              if (m(arguments[0])) {
                f.scrollBy.call(
                  e,
                  arguments[0].left !== void 0
                    ? arguments[0].left
                    : typeof arguments[0] != "object"
                    ? arguments[0]
                    : 0,
                  arguments[0].top !== void 0
                    ? arguments[0].top
                    : arguments[1] !== void 0
                    ? arguments[1]
                    : 0
                );
                return;
              }
              h.call(
                e,
                n.body,
                ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                ~~arguments[0].top + (e.scrollY || e.pageYOffset)
              );
            }
          }),
          (r.prototype.scroll = r.prototype.scrollTo =
            function () {
              if (arguments[0] !== void 0) {
                if (m(arguments[0]) === !0) {
                  if (
                    typeof arguments[0] == "number" &&
                    arguments[1] === void 0
                  )
                    throw new SyntaxError("Value could not be converted");
                  f.elementScroll.call(
                    this,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left
                      : typeof arguments[0] != "object"
                      ? ~~arguments[0]
                      : this.scrollLeft,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top
                      : arguments[1] !== void 0
                      ? ~~arguments[1]
                      : this.scrollTop
                  );
                  return;
                }
                var t = arguments[0].left,
                  l = arguments[0].top;
                h.call(
                  this,
                  this,
                  typeof t == "undefined" ? this.scrollLeft : ~~t,
                  typeof l == "undefined" ? this.scrollTop : ~~l
                );
              }
            }),
          (r.prototype.scrollBy = function () {
            if (arguments[0] !== void 0) {
              if (m(arguments[0]) === !0) {
                f.elementScroll.call(
                  this,
                  arguments[0].left !== void 0
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  arguments[0].top !== void 0
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                );
                return;
              }
              this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior,
              });
            }
          }),
          (r.prototype.scrollIntoView = function () {
            if (m(arguments[0]) === !0) {
              f.scrollIntoView.call(
                this,
                arguments[0] === void 0 ? !0 : arguments[0]
              );
              return;
            }
            var t = _(this),
              l = t.getBoundingClientRect(),
              s = this.getBoundingClientRect();
            t !== n.body
              ? (h.call(
                  this,
                  t,
                  t.scrollLeft + s.left - l.left,
                  t.scrollTop + s.top - l.top
                ),
                e.getComputedStyle(t).position !== "fixed" &&
                  e.scrollBy({
                    left: l.left,
                    top: l.top,
                    behavior: "smooth",
                  }))
              : e.scrollBy({
                  left: s.left,
                  top: s.top,
                  behavior: "smooth",
                });
          });
      }
      typeof E == "object" && typeof w != "undefined"
        ? (w.exports = {
            polyfill: o,
          })
        : o();
    })();
  });

  function I(o) {
    o.magic(
      "range",
      () =>
        function (e, n, r = 1) {
          typeof n == "undefined" && ((n = e), (e = e ? 1 : 0));
          let i = e > n;
          i && ([e, n] = [n, e]);
          let f = Array.from(
            {
              length: (n - e) / r + 1,
            },
            (c, u) => e + u * r
          );
          return i ? f.reverse() : f;
        }
    );
  }
  var X = k(Y());

  function B(o) {
    X.default.polyfill(),
      o.magic(
        "scroll",
        () =>
          function (e, n = {}) {
            let r = e,
              i = n.offset ? parseInt(n.offset, 10) : 0;
            if (
              (delete n.offset,
              typeof e == "string" &&
                /^[0-9]+?/g.test(e) &&
                (e = parseInt(e, 10)),
              typeof e == "string" && (e = document.querySelector(e)),
              e instanceof Element &&
                (e = Math.floor(
                  e.getBoundingClientRect().top + window.pageYOffset
                )),
              Number.isInteger(e) &&
                (e = {
                  top: e - i,
                  behavior: "smooth",
                }),
              typeof e != "object")
            )
              throw Error("Unsupported $scroll target: ", r);
            Object.assign(e, n), window.scroll(e);
          }
      );
  }

  function L(o) {
    o.magic(
      "truncate",
      () =>
        function (...e) {
          return typeof e[0] != "string" || !e[1]
            ? e[0]
            : typeof e[1] != "object"
            ? b(e[0].slice(0, e[1]), e)
            : Object.prototype.hasOwnProperty.call(e[1], "words") && e[1].words
            ? b(e[0].split(" ").splice(0, e[1].words).join(" "), e)
            : Object.prototype.hasOwnProperty.call(e[1], "characters") &&
              e[1].characters
            ? b(e[0].slice(0, e[1].characters), e)
            : e[0];
        }
    );
  }
  var b = (o, e) => {
    if (e[0].length <= o.length) return o;
    let n = "\u2026";
    return (
      typeof e[2] != "undefined" && (n = e[2]),
      Object.prototype.hasOwnProperty.call(e[1], "ellipsis") &&
        (n = e[1].ellipsis),
      o + n
    );
  };

  function x(o) {
    o.magic(
      "dbg",
      (e) =>
        function (...n) {
          let r = n.map((i) => o.raw(i));
          console.log(...r);
        }
    );
  }

  function P(o) {
    let e = o.reactive({
        screensize: window.innerWidth,
      }),
      n = {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
      r =
        window.AlpineMagicHelpersConfig &&
        window.AlpineMagicHelpersConfig.breakpoints
          ? window.AlpineMagicHelpersConfig.breakpoints
          : n,
      i;
    window.addEventListener("resize", () => {
      clearTimeout(i),
        (i = setTimeout(() => {
          e.screensize = window.innerWidth;
        }, 150));
    }),
      o.magic("screen", (f) => (c) => {
        let u = e.screensize;
        if (Number.isInteger(c)) return c <= u;
        if (r[c] === void 0)
          throw Error(
            "Undefined $screen property: " +
              c +
              ". Supported properties: " +
              Object.keys(r).join(", ")
          );
        return r[c] <= u;
      });
  }

  function C(o) {
    o.magic(
      "interval",
      () =>
        function (...e) {
          if (typeof e[0] != "function") return e[0];
          let n = e[1],
            r = 0,
            i = !1;
          typeof e[1] == "object" &&
            (Object.prototype.hasOwnProperty.call(e[1], "timer") &&
              (n = e[1].timer),
            Object.prototype.hasOwnProperty.call(e[1], "delay") &&
              (r = e[1].delay),
            Object.prototype.hasOwnProperty.call(e[1], "forceInterval") &&
              (i = e[1].forceInterval));
          let f = null,
            c = !0,
            u = () => {
              let g = c ? n + r : n;
              (c = !1),
                (f = setTimeout(() => {
                  e[0].call(this), i ? u() : requestAnimationFrame(u);
                }, g));
            };
          o.effect(() => {
            console.log(this.autoIntervalTest),
              this.autoIntervalTest == null || this.autoIntervalTest
                ? i
                  ? u()
                  : requestAnimationFrame(u)
                : (console.log("clear", f), clearTimeout(f));
          });
        }
    );
  }

  function M(o) {
    I(o), B(o), L(o), x(o), P(o), C(o);
  }
  document.addEventListener("alpine:initializing", () => {
    M(window.Alpine);
  });
})();
