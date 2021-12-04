(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7919],{

/***/ 81751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * 
 *   react-simple-keyboard v3.4.4
 *   https://github.com/hodgef/react-simple-keyboard
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function (t, e) {
   true ? module.exports = e(__webpack_require__(67294)) : 0;
}(this, function (t) {
  return function () {
    var e = {
      752: function _() {
        "undefined" == typeof Element || "remove" in Element.prototype || (Element.prototype.remove = function () {
          this.parentNode && this.parentNode.removeChild(this);
        }), "undefined" != typeof self && "document" in self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function (t) {
          "use strict";

          if ("Element" in t) {
            var e = "classList",
                n = t.Element.prototype,
                r = Object,
                o = String.prototype.trim || function () {
              return this.replace(/^\s+|\s+$/g, "");
            },
                i = Array.prototype.indexOf || function (t) {
              for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e;
              }

              return -1;
            },
                a = function a(t, e) {
              this.name = t, this.code = DOMException[t], this.message = e;
            },
                s = function s(t, e) {
              if ("" === e) throw new a("SYNTAX_ERR", "The token must not be empty.");
              if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
              return i.call(t, e);
            },
                u = function u(t) {
              for (var e = o.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], r = 0, i = n.length; r < i; r++) {
                this.push(n[r]);
              }

              this._updateClassName = function () {
                t.setAttribute("class", this.toString());
              };
            },
                c = u.prototype = [],
                l = function l() {
              return new u(this);
            };

            if (a.prototype = Error.prototype, c.item = function (t) {
              return this[t] || null;
            }, c.contains = function (t) {
              return ~s(this, t + "");
            }, c.add = function () {
              var t,
                  e = arguments,
                  n = 0,
                  r = e.length,
                  o = !1;

              do {
                t = e[n] + "", ~s(this, t) || (this.push(t), o = !0);
              } while (++n < r);

              o && this._updateClassName();
            }, c.remove = function () {
              var t,
                  e,
                  n = arguments,
                  r = 0,
                  o = n.length,
                  i = !1;

              do {
                for (t = n[r] + "", e = s(this, t); ~e;) {
                  this.splice(e, 1), i = !0, e = s(this, t);
                }
              } while (++r < o);

              i && this._updateClassName();
            }, c.toggle = function (t, e) {
              var n = this.contains(t),
                  r = n ? !0 !== e && "remove" : !1 !== e && "add";
              return r && this[r](t), !0 === e || !1 === e ? e : !n;
            }, c.replace = function (t, e) {
              var n = s(t + "");
              ~n && (this.splice(n, 1, e), this._updateClassName());
            }, c.toString = function () {
              return this.join(" ");
            }, r.defineProperty) {
              var f = {
                get: l,
                enumerable: !0,
                configurable: !0
              };

              try {
                r.defineProperty(n, e, f);
              } catch (t) {
                void 0 !== t.number && -2146823252 !== t.number || (f.enumerable = !1, r.defineProperty(n, e, f));
              }
            } else r.prototype.__defineGetter__ && n.__defineGetter__(e, l);
          }
        }(self), function () {
          "use strict";

          var t = document.createElement("_");

          if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var e = function e(t) {
              var e = DOMTokenList.prototype[t];

              DOMTokenList.prototype[t] = function (t) {
                var n,
                    r = arguments.length;

                for (n = 0; n < r; n++) {
                  t = arguments[n], e.call(this, t);
                }
              };
            };

            e("add"), e("remove");
          }

          if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;

            DOMTokenList.prototype.toggle = function (t, e) {
              return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
            };
          }

          "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (t, e) {
            var n = this.toString().split(" "),
                r = n.indexOf(t + "");
            ~r && (n = n.slice(r), this.remove.apply(this, n), this.add(e), this.add.apply(this, n.slice(1)));
          }), t = null;
        }());
      },
      86: function _(t) {
        /*!
         * 
         *   simple-keyboard v3.4.3
         *   https://github.com/hodgef/simple-keyboard
         *
         *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
         *
         *   This source code is licensed under the MIT license found in the
         *   LICENSE file in the root directory of this source tree.
         *
         */
        t.exports = function () {
          var t = {
            9662: function _(t, e, n) {
              var r = n(7854),
                  o = n(614),
                  i = n(6330),
                  a = r.TypeError;

              t.exports = function (t) {
                if (o(t)) return t;
                throw a(i(t) + " is not a function");
              };
            },
            9483: function _(t, e, n) {
              var r = n(7854),
                  o = n(4411),
                  i = n(6330),
                  a = r.TypeError;

              t.exports = function (t) {
                if (o(t)) return t;
                throw a(i(t) + " is not a constructor");
              };
            },
            6077: function _(t, e, n) {
              var r = n(7854),
                  o = n(614),
                  i = r.String,
                  a = r.TypeError;

              t.exports = function (t) {
                if ("object" == typeof t || o(t)) return t;
                throw a("Can't set " + i(t) + " as a prototype");
              };
            },
            1223: function _(t, e, n) {
              var r = n(5112),
                  o = n(30),
                  i = n(3070),
                  a = r("unscopables"),
                  s = Array.prototype;
              null == s[a] && i.f(s, a, {
                configurable: !0,
                value: o(null)
              }), t.exports = function (t) {
                s[a][t] = !0;
              };
            },
            1530: function _(t, e, n) {
              "use strict";

              var r = n(8710).charAt;

              t.exports = function (t, e, n) {
                return e + (n ? r(t, e).length : 1);
              };
            },
            9670: function _(t, e, n) {
              var r = n(7854),
                  o = n(111),
                  i = r.String,
                  a = r.TypeError;

              t.exports = function (t) {
                if (o(t)) return t;
                throw a(i(t) + " is not an object");
              };
            },
            8533: function _(t, e, n) {
              "use strict";

              var r = n(2092).forEach,
                  o = n(9341)("forEach");
              t.exports = o ? [].forEach : function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
              };
            },
            8457: function _(t, e, n) {
              "use strict";

              var r = n(7854),
                  o = n(9974),
                  i = n(6916),
                  a = n(7908),
                  s = n(3411),
                  u = n(7659),
                  c = n(4411),
                  l = n(6244),
                  f = n(6135),
                  d = n(8554),
                  p = n(1246),
                  h = r.Array;

              t.exports = function (t) {
                var e = a(t),
                    n = c(this),
                    r = arguments.length,
                    v = r > 1 ? arguments[1] : void 0,
                    g = void 0 !== v;
                g && (v = o(v, r > 2 ? arguments[2] : void 0));
                var y,
                    m,
                    b,
                    x,
                    w,
                    O,
                    E = p(e),
                    S = 0;
                if (!E || this == h && u(E)) for (y = l(e), m = n ? new this(y) : h(y); y > S; S++) {
                  O = g ? v(e[S], S) : e[S], f(m, S, O);
                } else for (w = (x = d(e, E)).next, m = n ? new this() : []; !(b = i(w, x)).done; S++) {
                  O = g ? s(x, v, [b.value, S], !0) : b.value, f(m, S, O);
                }
                return m.length = S, m;
              };
            },
            1318: function _(t, e, n) {
              var r = n(5656),
                  o = n(1400),
                  i = n(6244),
                  a = function a(t) {
                return function (e, n, a) {
                  var s,
                      u = r(e),
                      c = i(u),
                      l = o(a, c);

                  if (t && n != n) {
                    for (; c > l;) {
                      if ((s = u[l++]) != s) return !0;
                    }
                  } else for (; c > l; l++) {
                    if ((t || l in u) && u[l] === n) return t || l || 0;
                  }

                  return !t && -1;
                };
              };

              t.exports = {
                includes: a(!0),
                indexOf: a(!1)
              };
            },
            2092: function _(t, e, n) {
              var r = n(9974),
                  o = n(1702),
                  i = n(8361),
                  a = n(7908),
                  s = n(6244),
                  u = n(5417),
                  c = o([].push),
                  l = function l(t) {
                var e = 1 == t,
                    n = 2 == t,
                    o = 3 == t,
                    l = 4 == t,
                    f = 6 == t,
                    d = 7 == t,
                    p = 5 == t || f;
                return function (h, v, g, y) {
                  for (var m, b, x = a(h), w = i(x), O = r(v, g), E = s(w), S = 0, k = y || u, I = e ? k(h, E) : n || d ? k(h, 0) : void 0; E > S; S++) {
                    if ((p || S in w) && (b = O(m = w[S], S, x), t)) if (e) I[S] = b;else if (b) switch (t) {
                      case 3:
                        return !0;

                      case 5:
                        return m;

                      case 6:
                        return S;

                      case 2:
                        c(I, m);
                    } else switch (t) {
                      case 4:
                        return !1;

                      case 7:
                        c(I, m);
                    }
                  }

                  return f ? -1 : o || l ? l : I;
                };
              };

              t.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6),
                filterReject: l(7)
              };
            },
            1194: function _(t, e, n) {
              var r = n(7293),
                  o = n(5112),
                  i = n(7392),
                  a = o("species");

              t.exports = function (t) {
                return i >= 51 || !r(function () {
                  var e = [];
                  return (e.constructor = {})[a] = function () {
                    return {
                      foo: 1
                    };
                  }, 1 !== e[t](Boolean).foo;
                });
              };
            },
            9341: function _(t, e, n) {
              "use strict";

              var r = n(7293);

              t.exports = function (t, e) {
                var n = [][t];
                return !!n && r(function () {
                  n.call(null, e || function () {
                    throw 1;
                  }, 1);
                });
              };
            },
            3671: function _(t, e, n) {
              var r = n(7854),
                  o = n(9662),
                  i = n(7908),
                  a = n(8361),
                  s = n(6244),
                  u = r.TypeError,
                  c = function c(t) {
                return function (e, n, r, c) {
                  o(n);
                  var l = i(e),
                      f = a(l),
                      d = s(l),
                      p = t ? d - 1 : 0,
                      h = t ? -1 : 1;
                  if (r < 2) for (;;) {
                    if (p in f) {
                      c = f[p], p += h;
                      break;
                    }

                    if (p += h, t ? p < 0 : d <= p) throw u("Reduce of empty array with no initial value");
                  }

                  for (; t ? p >= 0 : d > p; p += h) {
                    p in f && (c = n(c, f[p], p, l));
                  }

                  return c;
                };
              };

              t.exports = {
                left: c(!1),
                right: c(!0)
              };
            },
            1589: function _(t, e, n) {
              var r = n(7854),
                  o = n(1400),
                  i = n(6244),
                  a = n(6135),
                  s = r.Array,
                  u = Math.max;

              t.exports = function (t, e, n) {
                for (var r = i(t), c = o(e, r), l = o(void 0 === n ? r : n, r), f = s(u(l - c, 0)), d = 0; c < l; c++, d++) {
                  a(f, d, t[c]);
                }

                return f.length = d, f;
              };
            },
            206: function _(t, e, n) {
              var r = n(1702);
              t.exports = r([].slice);
            },
            4362: function _(t, e, n) {
              var r = n(1589),
                  o = Math.floor,
                  i = function i(t, e) {
                var n = t.length,
                    u = o(n / 2);
                return n < 8 ? a(t, e) : s(t, i(r(t, 0, u), e), i(r(t, u), e), e);
              },
                  a = function a(t, e) {
                for (var n, r, o = t.length, i = 1; i < o;) {
                  for (r = i, n = t[i]; r && e(t[r - 1], n) > 0;) {
                    t[r] = t[--r];
                  }

                  r !== i++ && (t[r] = n);
                }

                return t;
              },
                  s = function s(t, e, n, r) {
                for (var o = e.length, i = n.length, a = 0, s = 0; a < o || s < i;) {
                  t[a + s] = a < o && s < i ? r(e[a], n[s]) <= 0 ? e[a++] : n[s++] : a < o ? e[a++] : n[s++];
                }

                return t;
              };

              t.exports = i;
            },
            7475: function _(t, e, n) {
              var r = n(7854),
                  o = n(3157),
                  i = n(4411),
                  a = n(111),
                  s = n(5112)("species"),
                  u = r.Array;

              t.exports = function (t) {
                var e;
                return o(t) && (e = t.constructor, (i(e) && (e === u || o(e.prototype)) || a(e) && null === (e = e[s])) && (e = void 0)), void 0 === e ? u : e;
              };
            },
            5417: function _(t, e, n) {
              var r = n(7475);

              t.exports = function (t, e) {
                return new (r(t))(0 === e ? 0 : e);
              };
            },
            3411: function _(t, e, n) {
              var r = n(9670),
                  o = n(9212);

              t.exports = function (t, e, n, i) {
                try {
                  return i ? e(r(n)[0], n[1]) : e(n);
                } catch (e) {
                  o(t, "throw", e);
                }
              };
            },
            7072: function _(t, e, n) {
              var r = n(5112)("iterator"),
                  o = !1;

              try {
                var i = 0,
                    a = {
                  next: function next() {
                    return {
                      done: !!i++
                    };
                  },
                  return: function _return() {
                    o = !0;
                  }
                };
                a[r] = function () {
                  return this;
                }, Array.from(a, function () {
                  throw 2;
                });
              } catch (t) {}

              t.exports = function (t, e) {
                if (!e && !o) return !1;
                var n = !1;

                try {
                  var i = {};
                  i[r] = function () {
                    return {
                      next: function next() {
                        return {
                          done: n = !0
                        };
                      }
                    };
                  }, t(i);
                } catch (t) {}

                return n;
              };
            },
            4326: function _(t, e, n) {
              var r = n(1702),
                  o = r({}.toString),
                  i = r("".slice);

              t.exports = function (t) {
                return i(o(t), 8, -1);
              };
            },
            648: function _(t, e, n) {
              var r = n(7854),
                  o = n(1694),
                  i = n(614),
                  a = n(4326),
                  s = n(5112)("toStringTag"),
                  u = r.Object,
                  c = "Arguments" == a(function () {
                return arguments;
              }());
              t.exports = o ? a : function (t) {
                var e, n, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                }(e = u(t), s)) ? n : c ? a(e) : "Object" == (r = a(e)) && i(e.callee) ? "Arguments" : r;
              };
            },
            9920: function _(t, e, n) {
              var r = n(2597),
                  o = n(3887),
                  i = n(1236),
                  a = n(3070);

              t.exports = function (t, e) {
                for (var n = o(e), s = a.f, u = i.f, c = 0; c < n.length; c++) {
                  var l = n[c];
                  r(t, l) || s(t, l, u(e, l));
                }
              };
            },
            4964: function _(t, e, n) {
              var r = n(5112)("match");

              t.exports = function (t) {
                var e = /./;

                try {
                  "/./"[t](e);
                } catch (n) {
                  try {
                    return e[r] = !1, "/./"[t](e);
                  } catch (t) {}
                }

                return !1;
              };
            },
            8544: function _(t, e, n) {
              var r = n(7293);
              t.exports = !r(function () {
                function t() {}

                return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
              });
            },
            4994: function _(t, e, n) {
              "use strict";

              var r = n(3383).IteratorPrototype,
                  o = n(30),
                  i = n(9114),
                  a = n(8003),
                  s = n(7497),
                  u = function u() {
                return this;
              };

              t.exports = function (t, e, n) {
                var c = e + " Iterator";
                return t.prototype = o(r, {
                  next: i(1, n)
                }), a(t, c, !1, !0), s[c] = u, t;
              };
            },
            8880: function _(t, e, n) {
              var r = n(9781),
                  o = n(3070),
                  i = n(9114);
              t.exports = r ? function (t, e, n) {
                return o.f(t, e, i(1, n));
              } : function (t, e, n) {
                return t[e] = n, t;
              };
            },
            9114: function _(t) {
              t.exports = function (t, e) {
                return {
                  enumerable: !(1 & t),
                  configurable: !(2 & t),
                  writable: !(4 & t),
                  value: e
                };
              };
            },
            6135: function _(t, e, n) {
              "use strict";

              var r = n(4948),
                  o = n(3070),
                  i = n(9114);

              t.exports = function (t, e, n) {
                var a = r(e);
                a in t ? o.f(t, a, i(0, n)) : t[a] = n;
              };
            },
            654: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(6916),
                  i = n(1913),
                  a = n(6530),
                  s = n(614),
                  u = n(4994),
                  c = n(9518),
                  l = n(7674),
                  f = n(8003),
                  d = n(8880),
                  p = n(1320),
                  h = n(5112),
                  v = n(7497),
                  g = n(3383),
                  y = a.PROPER,
                  m = a.CONFIGURABLE,
                  b = g.IteratorPrototype,
                  x = g.BUGGY_SAFARI_ITERATORS,
                  w = h("iterator"),
                  O = "keys",
                  E = "values",
                  S = "entries",
                  k = function k() {
                return this;
              };

              t.exports = function (t, e, n, a, h, g, I) {
                u(n, e, a);

                var P,
                    C,
                    A,
                    M = function M(t) {
                  if (t === h && R) return R;
                  if (!x && t in D) return D[t];

                  switch (t) {
                    case O:
                    case E:
                    case S:
                      return function () {
                        return new n(this, t);
                      };
                  }

                  return function () {
                    return new n(this);
                  };
                },
                    T = e + " Iterator",
                    j = !1,
                    D = t.prototype,
                    N = D[w] || D["@@iterator"] || h && D[h],
                    R = !x && N || M(h),
                    L = "Array" == e && D.entries || N;

                if (L && (P = c(L.call(new t()))) !== Object.prototype && P.next && (i || c(P) === b || (l ? l(P, b) : s(P[w]) || p(P, w, k)), f(P, T, !0, !0), i && (v[T] = k)), y && h == E && N && N.name !== E && (!i && m ? d(D, "name", E) : (j = !0, R = function R() {
                  return o(N, this);
                })), h) if (C = {
                  values: M(E),
                  keys: g ? R : M(O),
                  entries: M(S)
                }, I) for (A in C) {
                  (x || j || !(A in D)) && p(D, A, C[A]);
                } else r({
                  target: e,
                  proto: !0,
                  forced: x || j
                }, C);
                return i && !I || D[w] === R || p(D, w, R, {
                  name: h
                }), v[e] = R, C;
              };
            },
            7235: function _(t, e, n) {
              var r = n(857),
                  o = n(2597),
                  i = n(6061),
                  a = n(3070).f;

              t.exports = function (t) {
                var e = r.Symbol || (r.Symbol = {});
                o(e, t) || a(e, t, {
                  value: i.f(t)
                });
              };
            },
            9781: function _(t, e, n) {
              var r = n(7293);
              t.exports = !r(function () {
                return 7 != Object.defineProperty({}, 1, {
                  get: function get() {
                    return 7;
                  }
                })[1];
              });
            },
            317: function _(t, e, n) {
              var r = n(7854),
                  o = n(111),
                  i = r.document,
                  a = o(i) && o(i.createElement);

              t.exports = function (t) {
                return a ? i.createElement(t) : {};
              };
            },
            8324: function _(t) {
              t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
              };
            },
            8509: function _(t, e, n) {
              var r = n(317)("span").classList,
                  o = r && r.constructor && r.constructor.prototype;
              t.exports = o === Object.prototype ? void 0 : o;
            },
            8886: function _(t, e, n) {
              var r = n(8113).match(/firefox\/(\d+)/i);
              t.exports = !!r && +r[1];
            },
            256: function _(t, e, n) {
              var r = n(8113);
              t.exports = /MSIE|Trident/.test(r);
            },
            5268: function _(t, e, n) {
              var r = n(4326),
                  o = n(7854);
              t.exports = "process" == r(o.process);
            },
            8113: function _(t, e, n) {
              var r = n(5005);
              t.exports = r("navigator", "userAgent") || "";
            },
            7392: function _(t, e, n) {
              var r,
                  o,
                  i = n(7854),
                  a = n(8113),
                  s = i.process,
                  u = i.Deno,
                  c = s && s.versions || u && u.version,
                  l = c && c.v8;
              l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o;
            },
            8008: function _(t, e, n) {
              var r = n(8113).match(/AppleWebKit\/(\d+)\./);
              t.exports = !!r && +r[1];
            },
            748: function _(t) {
              t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            },
            2109: function _(t, e, n) {
              var r = n(7854),
                  o = n(1236).f,
                  i = n(8880),
                  a = n(1320),
                  s = n(3505),
                  u = n(9920),
                  c = n(4705);

              t.exports = function (t, e) {
                var n,
                    l,
                    f,
                    d,
                    p,
                    h = t.target,
                    v = t.global,
                    g = t.stat;
                if (n = v ? r : g ? r[h] || s(h, {}) : (r[h] || {}).prototype) for (l in e) {
                  if (d = e[l], f = t.noTargetGet ? (p = o(n, l)) && p.value : n[l], !c(v ? l : h + (g ? "." : "#") + l, t.forced) && void 0 !== f) {
                    if (typeof d == typeof f) continue;
                    u(d, f);
                  }

                  (t.sham || f && f.sham) && i(d, "sham", !0), a(n, l, d, t);
                }
              };
            },
            7293: function _(t) {
              t.exports = function (t) {
                try {
                  return !!t();
                } catch (t) {
                  return !0;
                }
              };
            },
            7007: function _(t, e, n) {
              "use strict";

              n(4916);
              var r = n(1702),
                  o = n(1320),
                  i = n(2261),
                  a = n(7293),
                  s = n(5112),
                  u = n(8880),
                  c = s("species"),
                  l = RegExp.prototype;

              t.exports = function (t, e, n, f) {
                var d = s(t),
                    p = !a(function () {
                  var e = {};
                  return e[d] = function () {
                    return 7;
                  }, 7 != ""[t](e);
                }),
                    h = p && !a(function () {
                  var e = !1,
                      n = /a/;
                  return "split" === t && ((n = {}).constructor = {}, n.constructor[c] = function () {
                    return n;
                  }, n.flags = "", n[d] = /./[d]), n.exec = function () {
                    return e = !0, null;
                  }, n[d](""), !e;
                });

                if (!p || !h || n) {
                  var v = r(/./[d]),
                      g = e(d, ""[t], function (t, e, n, o, a) {
                    var s = r(t),
                        u = e.exec;
                    return u === i || u === l.exec ? p && !a ? {
                      done: !0,
                      value: v(e, n, o)
                    } : {
                      done: !0,
                      value: s(n, e, o)
                    } : {
                      done: !1
                    };
                  });
                  o(String.prototype, t, g[0]), o(l, d, g[1]);
                }

                f && u(l[d], "sham", !0);
              };
            },
            2104: function _(t) {
              var e = Function.prototype,
                  n = e.apply,
                  r = e.bind,
                  o = e.call;
              t.exports = "object" == typeof Reflect && Reflect.apply || (r ? o.bind(n) : function () {
                return o.apply(n, arguments);
              });
            },
            9974: function _(t, e, n) {
              var r = n(1702),
                  o = n(9662),
                  i = r(r.bind);

              t.exports = function (t, e) {
                return o(t), void 0 === e ? t : i ? i(t, e) : function () {
                  return t.apply(e, arguments);
                };
              };
            },
            6916: function _(t) {
              var e = Function.prototype.call;
              t.exports = e.bind ? e.bind(e) : function () {
                return e.apply(e, arguments);
              };
            },
            6530: function _(t, e, n) {
              var r = n(9781),
                  o = n(2597),
                  i = Function.prototype,
                  a = r && Object.getOwnPropertyDescriptor,
                  s = o(i, "name"),
                  u = s && "something" === function () {}.name,
                  c = s && (!r || r && a(i, "name").configurable);

              t.exports = {
                EXISTS: s,
                PROPER: u,
                CONFIGURABLE: c
              };
            },
            1702: function _(t) {
              var e = Function.prototype,
                  n = e.bind,
                  r = e.call,
                  o = n && n.bind(r);
              t.exports = n ? function (t) {
                return t && o(r, t);
              } : function (t) {
                return t && function () {
                  return r.apply(t, arguments);
                };
              };
            },
            5005: function _(t, e, n) {
              var r = n(7854),
                  o = n(614),
                  i = function i(t) {
                return o(t) ? t : void 0;
              };

              t.exports = function (t, e) {
                return arguments.length < 2 ? i(r[t]) : r[t] && r[t][e];
              };
            },
            1246: function _(t, e, n) {
              var r = n(648),
                  o = n(8173),
                  i = n(7497),
                  a = n(5112)("iterator");

              t.exports = function (t) {
                if (null != t) return o(t, a) || o(t, "@@iterator") || i[r(t)];
              };
            },
            8554: function _(t, e, n) {
              var r = n(7854),
                  o = n(6916),
                  i = n(9662),
                  a = n(9670),
                  s = n(6330),
                  u = n(1246),
                  c = r.TypeError;

              t.exports = function (t, e) {
                var n = arguments.length < 2 ? u(t) : e;
                if (i(n)) return a(o(n, t));
                throw c(s(t) + " is not iterable");
              };
            },
            8173: function _(t, e, n) {
              var r = n(9662);

              t.exports = function (t, e) {
                var n = t[e];
                return null == n ? void 0 : r(n);
              };
            },
            647: function _(t, e, n) {
              var r = n(1702),
                  o = n(7908),
                  i = Math.floor,
                  a = r("".charAt),
                  s = r("".replace),
                  u = r("".slice),
                  c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                  l = /\$([$&'`]|\d{1,2})/g;

              t.exports = function (t, e, n, r, f, d) {
                var p = n + t.length,
                    h = r.length,
                    v = l;
                return void 0 !== f && (f = o(f), v = c), s(d, v, function (o, s) {
                  var c;

                  switch (a(s, 0)) {
                    case "$":
                      return "$";

                    case "&":
                      return t;

                    case "`":
                      return u(e, 0, n);

                    case "'":
                      return u(e, p);

                    case "<":
                      c = f[u(s, 1, -1)];
                      break;

                    default:
                      var l = +s;
                      if (0 === l) return o;

                      if (l > h) {
                        var d = i(l / 10);
                        return 0 === d ? o : d <= h ? void 0 === r[d - 1] ? a(s, 1) : r[d - 1] + a(s, 1) : o;
                      }

                      c = r[l - 1];
                  }

                  return void 0 === c ? "" : c;
                });
              };
            },
            7854: function _(t, e, n) {
              var r = function r(t) {
                return t && t.Math == Math && t;
              };

              t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function () {
                return this;
              }() || Function("return this")();
            },
            2597: function _(t, e, n) {
              var r = n(1702),
                  o = n(7908),
                  i = r({}.hasOwnProperty);

              t.exports = Object.hasOwn || function (t, e) {
                return i(o(t), e);
              };
            },
            3501: function _(t) {
              t.exports = {};
            },
            490: function _(t, e, n) {
              var r = n(5005);
              t.exports = r("document", "documentElement");
            },
            4664: function _(t, e, n) {
              var r = n(9781),
                  o = n(7293),
                  i = n(317);
              t.exports = !r && !o(function () {
                return 7 != Object.defineProperty(i("div"), "a", {
                  get: function get() {
                    return 7;
                  }
                }).a;
              });
            },
            8361: function _(t, e, n) {
              var r = n(7854),
                  o = n(1702),
                  i = n(7293),
                  a = n(4326),
                  s = r.Object,
                  u = o("".split);
              t.exports = i(function () {
                return !s("z").propertyIsEnumerable(0);
              }) ? function (t) {
                return "String" == a(t) ? u(t, "") : s(t);
              } : s;
            },
            9587: function _(t, e, n) {
              var r = n(614),
                  o = n(111),
                  i = n(7674);

              t.exports = function (t, e, n) {
                var a, s;
                return i && r(a = e.constructor) && a !== n && o(s = a.prototype) && s !== n.prototype && i(t, s), t;
              };
            },
            2788: function _(t, e, n) {
              var r = n(1702),
                  o = n(614),
                  i = n(5465),
                  a = r(Function.toString);
              o(i.inspectSource) || (i.inspectSource = function (t) {
                return a(t);
              }), t.exports = i.inspectSource;
            },
            9909: function _(t, e, n) {
              var r,
                  o,
                  i,
                  a = n(8536),
                  s = n(7854),
                  u = n(1702),
                  c = n(111),
                  l = n(8880),
                  f = n(2597),
                  d = n(5465),
                  p = n(6200),
                  h = n(3501),
                  v = "Object already initialized",
                  g = s.TypeError,
                  y = s.WeakMap;

              if (a || d.state) {
                var m = d.state || (d.state = new y()),
                    b = u(m.get),
                    x = u(m.has),
                    w = u(m.set);
                r = function r(t, e) {
                  if (x(m, t)) throw new g(v);
                  return e.facade = t, w(m, t, e), e;
                }, o = function o(t) {
                  return b(m, t) || {};
                }, i = function i(t) {
                  return x(m, t);
                };
              } else {
                var O = p("state");
                h[O] = !0, r = function r(t, e) {
                  if (f(t, O)) throw new g(v);
                  return e.facade = t, l(t, O, e), e;
                }, o = function o(t) {
                  return f(t, O) ? t[O] : {};
                }, i = function i(t) {
                  return f(t, O);
                };
              }

              t.exports = {
                set: r,
                get: o,
                has: i,
                enforce: function enforce(t) {
                  return i(t) ? o(t) : r(t, {});
                },
                getterFor: function getterFor(t) {
                  return function (e) {
                    var n;
                    if (!c(e) || (n = o(e)).type !== t) throw g("Incompatible receiver, " + t + " required");
                    return n;
                  };
                }
              };
            },
            7659: function _(t, e, n) {
              var r = n(5112),
                  o = n(7497),
                  i = r("iterator"),
                  a = Array.prototype;

              t.exports = function (t) {
                return void 0 !== t && (o.Array === t || a[i] === t);
              };
            },
            3157: function _(t, e, n) {
              var r = n(4326);

              t.exports = Array.isArray || function (t) {
                return "Array" == r(t);
              };
            },
            614: function _(t) {
              t.exports = function (t) {
                return "function" == typeof t;
              };
            },
            4411: function _(t, e, n) {
              var r = n(1702),
                  o = n(7293),
                  i = n(614),
                  a = n(648),
                  s = n(5005),
                  u = n(2788),
                  c = function c() {},
                  l = [],
                  f = s("Reflect", "construct"),
                  d = /^\s*(?:class|function)\b/,
                  p = r(d.exec),
                  h = !d.exec(c),
                  v = function v(t) {
                if (!i(t)) return !1;

                try {
                  return f(c, l, t), !0;
                } catch (t) {
                  return !1;
                }
              };

              t.exports = !f || o(function () {
                var t;
                return v(v.call) || !v(Object) || !v(function () {
                  t = !0;
                }) || t;
              }) ? function (t) {
                if (!i(t)) return !1;

                switch (a(t)) {
                  case "AsyncFunction":
                  case "GeneratorFunction":
                  case "AsyncGeneratorFunction":
                    return !1;
                }

                return h || !!p(d, u(t));
              } : v;
            },
            4705: function _(t, e, n) {
              var r = n(7293),
                  o = n(614),
                  i = /#|\.prototype\./,
                  a = function a(t, e) {
                var n = u[s(t)];
                return n == l || n != c && (o(e) ? r(e) : !!e);
              },
                  s = a.normalize = function (t) {
                return String(t).replace(i, ".").toLowerCase();
              },
                  u = a.data = {},
                  c = a.NATIVE = "N",
                  l = a.POLYFILL = "P";

              t.exports = a;
            },
            5988: function _(t, e, n) {
              var r = n(111),
                  o = Math.floor;

              t.exports = Number.isInteger || function (t) {
                return !r(t) && isFinite(t) && o(t) === t;
              };
            },
            111: function _(t, e, n) {
              var r = n(614);

              t.exports = function (t) {
                return "object" == typeof t ? null !== t : r(t);
              };
            },
            1913: function _(t) {
              t.exports = !1;
            },
            7850: function _(t, e, n) {
              var r = n(111),
                  o = n(4326),
                  i = n(5112)("match");

              t.exports = function (t) {
                var e;
                return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
              };
            },
            2190: function _(t, e, n) {
              var r = n(7854),
                  o = n(5005),
                  i = n(614),
                  a = n(7976),
                  s = n(3307),
                  u = r.Object;
              t.exports = s ? function (t) {
                return "symbol" == typeof t;
              } : function (t) {
                var e = o("Symbol");
                return i(e) && a(e.prototype, u(t));
              };
            },
            9212: function _(t, e, n) {
              var r = n(6916),
                  o = n(9670),
                  i = n(8173);

              t.exports = function (t, e, n) {
                var a, s;
                o(t);

                try {
                  if (!(a = i(t, "return"))) {
                    if ("throw" === e) throw n;
                    return n;
                  }

                  a = r(a, t);
                } catch (t) {
                  s = !0, a = t;
                }

                if ("throw" === e) throw n;
                if (s) throw a;
                return o(a), n;
              };
            },
            3383: function _(t, e, n) {
              "use strict";

              var r,
                  o,
                  i,
                  a = n(7293),
                  s = n(614),
                  u = n(30),
                  c = n(9518),
                  l = n(1320),
                  f = n(5112),
                  d = n(1913),
                  p = f("iterator"),
                  h = !1;
              [].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (r = o) : h = !0), null == r || a(function () {
                var t = {};
                return r[p].call(t) !== t;
              }) ? r = {} : d && (r = u(r)), s(r[p]) || l(r, p, function () {
                return this;
              }), t.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: h
              };
            },
            7497: function _(t) {
              t.exports = {};
            },
            6244: function _(t, e, n) {
              var r = n(7466);

              t.exports = function (t) {
                return r(t.length);
              };
            },
            133: function _(t, e, n) {
              var r = n(7392),
                  o = n(7293);
              t.exports = !!Object.getOwnPropertySymbols && !o(function () {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
              });
            },
            8536: function _(t, e, n) {
              var r = n(7854),
                  o = n(614),
                  i = n(2788),
                  a = r.WeakMap;
              t.exports = o(a) && /native code/.test(i(a));
            },
            3929: function _(t, e, n) {
              var r = n(7854),
                  o = n(7850),
                  i = r.TypeError;

              t.exports = function (t) {
                if (o(t)) throw i("The method doesn't accept regular expressions");
                return t;
              };
            },
            1574: function _(t, e, n) {
              "use strict";

              var r = n(9781),
                  o = n(1702),
                  i = n(6916),
                  a = n(7293),
                  s = n(1956),
                  u = n(5181),
                  c = n(5296),
                  l = n(7908),
                  f = n(8361),
                  d = Object.assign,
                  p = Object.defineProperty,
                  h = o([].concat);
              t.exports = !d || a(function () {
                if (r && 1 !== d({
                  b: 1
                }, d(p({}, "a", {
                  enumerable: !0,
                  get: function get() {
                    p(this, "b", {
                      value: 3,
                      enumerable: !1
                    });
                  }
                }), {
                  b: 2
                })).b) return !0;
                var t = {},
                    e = {},
                    n = Symbol(),
                    o = "abcdefghijklmnopqrst";
                return t[n] = 7, o.split("").forEach(function (t) {
                  e[t] = t;
                }), 7 != d({}, t)[n] || s(d({}, e)).join("") != o;
              }) ? function (t, e) {
                for (var n = l(t), o = arguments.length, a = 1, d = u.f, p = c.f; o > a;) {
                  for (var v, g = f(arguments[a++]), y = d ? h(s(g), d(g)) : s(g), m = y.length, b = 0; m > b;) {
                    v = y[b++], r && !i(p, g, v) || (n[v] = g[v]);
                  }
                }

                return n;
              } : d;
            },
            30: function _(t, e, n) {
              var r,
                  o = n(9670),
                  i = n(6048),
                  a = n(748),
                  s = n(3501),
                  u = n(490),
                  c = n(317),
                  l = n(6200)("IE_PROTO"),
                  f = function f() {},
                  d = function d(t) {
                return "<script>" + t + "<\/script>";
              },
                  p = function p(t) {
                t.write(d("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e;
              },
                  _h = function h() {
                try {
                  r = new ActiveXObject("htmlfile");
                } catch (t) {}

                var t, e;
                _h = "undefined" != typeof document ? document.domain && r ? p(r) : ((e = c("iframe")).style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F) : p(r);

                for (var n = a.length; n--;) {
                  delete _h.prototype[a[n]];
                }

                return _h();
              };

              s[l] = !0, t.exports = Object.create || function (t, e) {
                var n;
                return null !== t ? (f.prototype = o(t), n = new f(), f.prototype = null, n[l] = t) : n = _h(), void 0 === e ? n : i(n, e);
              };
            },
            6048: function _(t, e, n) {
              var r = n(9781),
                  o = n(3070),
                  i = n(9670),
                  a = n(5656),
                  s = n(1956);
              t.exports = r ? Object.defineProperties : function (t, e) {
                i(t);

                for (var n, r = a(e), u = s(e), c = u.length, l = 0; c > l;) {
                  o.f(t, n = u[l++], r[n]);
                }

                return t;
              };
            },
            3070: function _(t, e, n) {
              var r = n(7854),
                  o = n(9781),
                  i = n(4664),
                  a = n(9670),
                  s = n(4948),
                  u = r.TypeError,
                  c = Object.defineProperty;
              e.f = o ? c : function (t, e, n) {
                if (a(t), e = s(e), a(n), i) try {
                  return c(t, e, n);
                } catch (t) {}
                if ("get" in n || "set" in n) throw u("Accessors not supported");
                return "value" in n && (t[e] = n.value), t;
              };
            },
            1236: function _(t, e, n) {
              var r = n(9781),
                  o = n(6916),
                  i = n(5296),
                  a = n(9114),
                  s = n(5656),
                  u = n(4948),
                  c = n(2597),
                  l = n(4664),
                  f = Object.getOwnPropertyDescriptor;
              e.f = r ? f : function (t, e) {
                if (t = s(t), e = u(e), l) try {
                  return f(t, e);
                } catch (t) {}
                if (c(t, e)) return a(!o(i.f, t, e), t[e]);
              };
            },
            1156: function _(t, e, n) {
              var r = n(4326),
                  o = n(5656),
                  i = n(8006).f,
                  a = n(1589),
                  s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

              t.exports.f = function (t) {
                return s && "Window" == r(t) ? function (t) {
                  try {
                    return i(t);
                  } catch (t) {
                    return a(s);
                  }
                }(t) : i(o(t));
              };
            },
            8006: function _(t, e, n) {
              var r = n(6324),
                  o = n(748).concat("length", "prototype");

              e.f = Object.getOwnPropertyNames || function (t) {
                return r(t, o);
              };
            },
            5181: function _(t, e) {
              e.f = Object.getOwnPropertySymbols;
            },
            9518: function _(t, e, n) {
              var r = n(7854),
                  o = n(2597),
                  i = n(614),
                  a = n(7908),
                  s = n(6200),
                  u = n(8544),
                  c = s("IE_PROTO"),
                  l = r.Object,
                  f = l.prototype;
              t.exports = u ? l.getPrototypeOf : function (t) {
                var e = a(t);
                if (o(e, c)) return e[c];
                var n = e.constructor;
                return i(n) && e instanceof n ? n.prototype : e instanceof l ? f : null;
              };
            },
            7976: function _(t, e, n) {
              var r = n(1702);
              t.exports = r({}.isPrototypeOf);
            },
            6324: function _(t, e, n) {
              var r = n(1702),
                  o = n(2597),
                  i = n(5656),
                  a = n(1318).indexOf,
                  s = n(3501),
                  u = r([].push);

              t.exports = function (t, e) {
                var n,
                    r = i(t),
                    c = 0,
                    l = [];

                for (n in r) {
                  !o(s, n) && o(r, n) && u(l, n);
                }

                for (; e.length > c;) {
                  o(r, n = e[c++]) && (~a(l, n) || u(l, n));
                }

                return l;
              };
            },
            1956: function _(t, e, n) {
              var r = n(6324),
                  o = n(748);

              t.exports = Object.keys || function (t) {
                return r(t, o);
              };
            },
            5296: function _(t, e) {
              "use strict";

              var n = {}.propertyIsEnumerable,
                  r = Object.getOwnPropertyDescriptor,
                  o = r && !n.call({
                1: 2
              }, 1);
              e.f = o ? function (t) {
                var e = r(this, t);
                return !!e && e.enumerable;
              } : n;
            },
            9026: function _(t, e, n) {
              "use strict";

              var r = n(1913),
                  o = n(7854),
                  i = n(7293),
                  a = n(8008);
              t.exports = r || !i(function () {
                if (!(a && a < 535)) {
                  var t = Math.random();
                  __defineSetter__.call(null, t, function () {}), delete o[t];
                }
              });
            },
            7674: function _(t, e, n) {
              var r = n(1702),
                  o = n(9670),
                  i = n(6077);
              t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var t,
                    e = !1,
                    n = {};

                try {
                  (t = r(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), e = n instanceof Array;
                } catch (t) {}

                return function (n, r) {
                  return o(n), i(r), e ? t(n, r) : n.__proto__ = r, n;
                };
              }() : void 0);
            },
            288: function _(t, e, n) {
              "use strict";

              var r = n(1694),
                  o = n(648);
              t.exports = r ? {}.toString : function () {
                return "[object " + o(this) + "]";
              };
            },
            2140: function _(t, e, n) {
              var r = n(7854),
                  o = n(6916),
                  i = n(614),
                  a = n(111),
                  s = r.TypeError;

              t.exports = function (t, e) {
                var n, r;
                if ("string" === e && i(n = t.toString) && !a(r = o(n, t))) return r;
                if (i(n = t.valueOf) && !a(r = o(n, t))) return r;
                if ("string" !== e && i(n = t.toString) && !a(r = o(n, t))) return r;
                throw s("Can't convert object to primitive value");
              };
            },
            3887: function _(t, e, n) {
              var r = n(5005),
                  o = n(1702),
                  i = n(8006),
                  a = n(5181),
                  s = n(9670),
                  u = o([].concat);

              t.exports = r("Reflect", "ownKeys") || function (t) {
                var e = i.f(s(t)),
                    n = a.f;
                return n ? u(e, n(t)) : e;
              };
            },
            857: function _(t, e, n) {
              var r = n(7854);
              t.exports = r;
            },
            1320: function _(t, e, n) {
              var r = n(7854),
                  o = n(614),
                  i = n(2597),
                  a = n(8880),
                  s = n(3505),
                  u = n(2788),
                  c = n(9909),
                  l = n(6530).CONFIGURABLE,
                  f = c.get,
                  d = c.enforce,
                  p = String(String).split("String");
              (t.exports = function (t, e, n, u) {
                var c,
                    f = !!u && !!u.unsafe,
                    h = !!u && !!u.enumerable,
                    v = !!u && !!u.noTargetGet,
                    g = u && void 0 !== u.name ? u.name : e;
                o(n) && ("Symbol(" === String(g).slice(0, 7) && (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!i(n, "name") || l && n.name !== g) && a(n, "name", g), (c = d(n)).source || (c.source = p.join("string" == typeof g ? g : ""))), t !== r ? (f ? !v && t[e] && (h = !0) : delete t[e], h ? t[e] = n : a(t, e, n)) : h ? t[e] = n : s(e, n);
              })(Function.prototype, "toString", function () {
                return o(this) && f(this).source || u(this);
              });
            },
            7651: function _(t, e, n) {
              var r = n(7854),
                  o = n(6916),
                  i = n(9670),
                  a = n(614),
                  s = n(4326),
                  u = n(2261),
                  c = r.TypeError;

              t.exports = function (t, e) {
                var n = t.exec;

                if (a(n)) {
                  var r = o(n, t, e);
                  return null !== r && i(r), r;
                }

                if ("RegExp" === s(t)) return o(u, t, e);
                throw c("RegExp#exec called on incompatible receiver");
              };
            },
            2261: function _(t, e, n) {
              "use strict";

              var r,
                  o,
                  i = n(6916),
                  a = n(1702),
                  s = n(1340),
                  u = n(7066),
                  c = n(2999),
                  l = n(2309),
                  f = n(30),
                  d = n(9909).get,
                  p = n(9441),
                  h = n(7168),
                  v = l("native-string-replace", String.prototype.replace),
                  g = RegExp.prototype.exec,
                  _y = g,
                  m = a("".charAt),
                  b = a("".indexOf),
                  x = a("".replace),
                  w = a("".slice),
                  O = (o = /b*/g, i(g, r = /a/, "a"), i(g, o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
                  E = c.BROKEN_CARET,
                  S = void 0 !== /()??/.exec("")[1];
              (O || S || E || p || h) && (_y = function y(t) {
                var e,
                    n,
                    r,
                    o,
                    a,
                    c,
                    l,
                    p = this,
                    h = d(p),
                    k = s(t),
                    I = h.raw;
                if (I) return I.lastIndex = p.lastIndex, e = i(_y, I, k), p.lastIndex = I.lastIndex, e;
                var P = h.groups,
                    C = E && p.sticky,
                    A = i(u, p),
                    M = p.source,
                    T = 0,
                    j = k;
                if (C && (A = x(A, "y", ""), -1 === b(A, "g") && (A += "g"), j = w(k, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== m(k, p.lastIndex - 1)) && (M = "(?: " + M + ")", j = " " + j, T++), n = new RegExp("^(?:" + M + ")", A)), S && (n = new RegExp("^" + M + "$(?!\\s)", A)), O && (r = p.lastIndex), o = i(g, C ? n : p, j), C ? o ? (o.input = w(o.input, T), o[0] = w(o[0], T), o.index = p.lastIndex, p.lastIndex += o[0].length) : p.lastIndex = 0 : O && o && (p.lastIndex = p.global ? o.index + o[0].length : r), S && o && o.length > 1 && i(v, o[0], n, function () {
                  for (a = 1; a < arguments.length - 2; a++) {
                    void 0 === arguments[a] && (o[a] = void 0);
                  }
                }), o && P) for (o.groups = c = f(null), a = 0; a < P.length; a++) {
                  c[(l = P[a])[0]] = o[l[1]];
                }
                return o;
              }), t.exports = _y;
            },
            7066: function _(t, e, n) {
              "use strict";

              var r = n(9670);

              t.exports = function () {
                var t = r(this),
                    e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
              };
            },
            2999: function _(t, e, n) {
              var r = n(7293),
                  o = n(7854).RegExp,
                  i = r(function () {
                var t = o("a", "y");
                return t.lastIndex = 2, null != t.exec("abcd");
              }),
                  a = i || r(function () {
                return !o("a", "y").sticky;
              }),
                  s = i || r(function () {
                var t = o("^r", "gy");
                return t.lastIndex = 2, null != t.exec("str");
              });
              t.exports = {
                BROKEN_CARET: s,
                MISSED_STICKY: a,
                UNSUPPORTED_Y: i
              };
            },
            9441: function _(t, e, n) {
              var r = n(7293),
                  o = n(7854).RegExp;
              t.exports = r(function () {
                var t = o(".", "s");
                return !(t.dotAll && t.exec("\n") && "s" === t.flags);
              });
            },
            7168: function _(t, e, n) {
              var r = n(7293),
                  o = n(7854).RegExp;
              t.exports = r(function () {
                var t = o("(?<a>b)", "g");
                return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
              });
            },
            4488: function _(t, e, n) {
              var r = n(7854).TypeError;

              t.exports = function (t) {
                if (null == t) throw r("Can't call method on " + t);
                return t;
              };
            },
            3505: function _(t, e, n) {
              var r = n(7854),
                  o = Object.defineProperty;

              t.exports = function (t, e) {
                try {
                  o(r, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                  });
                } catch (n) {
                  r[t] = e;
                }

                return e;
              };
            },
            6340: function _(t, e, n) {
              "use strict";

              var r = n(5005),
                  o = n(3070),
                  i = n(5112),
                  a = n(9781),
                  s = i("species");

              t.exports = function (t) {
                var e = r(t),
                    n = o.f;
                a && e && !e[s] && n(e, s, {
                  configurable: !0,
                  get: function get() {
                    return this;
                  }
                });
              };
            },
            8003: function _(t, e, n) {
              var r = n(3070).f,
                  o = n(2597),
                  i = n(5112)("toStringTag");

              t.exports = function (t, e, n) {
                t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                  configurable: !0,
                  value: e
                });
              };
            },
            6200: function _(t, e, n) {
              var r = n(2309),
                  o = n(9711),
                  i = r("keys");

              t.exports = function (t) {
                return i[t] || (i[t] = o(t));
              };
            },
            5465: function _(t, e, n) {
              var r = n(7854),
                  o = n(3505),
                  i = "__core-js_shared__",
                  a = r[i] || o(i, {});
              t.exports = a;
            },
            2309: function _(t, e, n) {
              var r = n(1913),
                  o = n(5465);
              (t.exports = function (t, e) {
                return o[t] || (o[t] = void 0 !== e ? e : {});
              })("versions", []).push({
                version: "3.19.2",
                mode: r ? "pure" : "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
              });
            },
            6707: function _(t, e, n) {
              var r = n(9670),
                  o = n(9483),
                  i = n(5112)("species");

              t.exports = function (t, e) {
                var n,
                    a = r(t).constructor;
                return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
              };
            },
            8710: function _(t, e, n) {
              var r = n(1702),
                  o = n(9303),
                  i = n(1340),
                  a = n(4488),
                  s = r("".charAt),
                  u = r("".charCodeAt),
                  c = r("".slice),
                  l = function l(t) {
                return function (e, n) {
                  var r,
                      l,
                      f = i(a(e)),
                      d = o(n),
                      p = f.length;
                  return d < 0 || d >= p ? t ? "" : void 0 : (r = u(f, d)) < 55296 || r > 56319 || d + 1 === p || (l = u(f, d + 1)) < 56320 || l > 57343 ? t ? s(f, d) : r : t ? c(f, d, d + 2) : l - 56320 + (r - 55296 << 10) + 65536;
                };
              };

              t.exports = {
                codeAt: l(!1),
                charAt: l(!0)
              };
            },
            6091: function _(t, e, n) {
              var r = n(6530).PROPER,
                  o = n(7293),
                  i = n(1361);

              t.exports = function (t) {
                return o(function () {
                  return !!i[t]() || "​᠎" !== "​᠎"[t]() || r && i[t].name !== t;
                });
              };
            },
            3111: function _(t, e, n) {
              var r = n(1702),
                  o = n(4488),
                  i = n(1340),
                  a = n(1361),
                  s = r("".replace),
                  u = "[" + a + "]",
                  c = RegExp("^" + u + u + "*"),
                  l = RegExp(u + u + "*$"),
                  f = function f(t) {
                return function (e) {
                  var n = i(o(e));
                  return 1 & t && (n = s(n, c, "")), 2 & t && (n = s(n, l, "")), n;
                };
              };

              t.exports = {
                start: f(1),
                end: f(2),
                trim: f(3)
              };
            },
            863: function _(t, e, n) {
              var r = n(1702);
              t.exports = r(1..valueOf);
            },
            1400: function _(t, e, n) {
              var r = n(9303),
                  o = Math.max,
                  i = Math.min;

              t.exports = function (t, e) {
                var n = r(t);
                return n < 0 ? o(n + e, 0) : i(n, e);
              };
            },
            5656: function _(t, e, n) {
              var r = n(8361),
                  o = n(4488);

              t.exports = function (t) {
                return r(o(t));
              };
            },
            9303: function _(t) {
              var e = Math.ceil,
                  n = Math.floor;

              t.exports = function (t) {
                var r = +t;
                return r != r || 0 === r ? 0 : (r > 0 ? n : e)(r);
              };
            },
            7466: function _(t, e, n) {
              var r = n(9303),
                  o = Math.min;

              t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0;
              };
            },
            7908: function _(t, e, n) {
              var r = n(7854),
                  o = n(4488),
                  i = r.Object;

              t.exports = function (t) {
                return i(o(t));
              };
            },
            7593: function _(t, e, n) {
              var r = n(7854),
                  o = n(6916),
                  i = n(111),
                  a = n(2190),
                  s = n(8173),
                  u = n(2140),
                  c = n(5112),
                  l = r.TypeError,
                  f = c("toPrimitive");

              t.exports = function (t, e) {
                if (!i(t) || a(t)) return t;
                var n,
                    r = s(t, f);

                if (r) {
                  if (void 0 === e && (e = "default"), n = o(r, t, e), !i(n) || a(n)) return n;
                  throw l("Can't convert object to primitive value");
                }

                return void 0 === e && (e = "number"), u(t, e);
              };
            },
            4948: function _(t, e, n) {
              var r = n(7593),
                  o = n(2190);

              t.exports = function (t) {
                var e = r(t, "string");
                return o(e) ? e : e + "";
              };
            },
            1694: function _(t, e, n) {
              var r = {};
              r[n(5112)("toStringTag")] = "z", t.exports = "[object z]" === String(r);
            },
            1340: function _(t, e, n) {
              var r = n(7854),
                  o = n(648),
                  i = r.String;

              t.exports = function (t) {
                if ("Symbol" === o(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return i(t);
              };
            },
            6330: function _(t, e, n) {
              var r = n(7854).String;

              t.exports = function (t) {
                try {
                  return r(t);
                } catch (t) {
                  return "Object";
                }
              };
            },
            9711: function _(t, e, n) {
              var r = n(1702),
                  o = 0,
                  i = Math.random(),
                  a = r(1..toString);

              t.exports = function (t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
              };
            },
            3307: function _(t, e, n) {
              var r = n(133);
              t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            6061: function _(t, e, n) {
              var r = n(5112);
              e.f = r;
            },
            5112: function _(t, e, n) {
              var r = n(7854),
                  o = n(2309),
                  i = n(2597),
                  a = n(9711),
                  s = n(133),
                  u = n(3307),
                  c = o("wks"),
                  l = r.Symbol,
                  f = l && l.for,
                  d = u ? l : l && l.withoutSetter || a;

              t.exports = function (t) {
                if (!i(c, t) || !s && "string" != typeof c[t]) {
                  var e = "Symbol." + t;
                  s && i(l, t) ? c[t] = l[t] : c[t] = u && f ? f(e) : d(e);
                }

                return c[t];
              };
            },
            1361: function _(t) {
              t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
            },
            2222: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(7854),
                  i = n(7293),
                  a = n(3157),
                  s = n(111),
                  u = n(7908),
                  c = n(6244),
                  l = n(6135),
                  f = n(5417),
                  d = n(1194),
                  p = n(5112),
                  h = n(7392),
                  v = p("isConcatSpreadable"),
                  g = 9007199254740991,
                  y = "Maximum allowed index exceeded",
                  m = o.TypeError,
                  b = h >= 51 || !i(function () {
                var t = [];
                return t[v] = !1, t.concat()[0] !== t;
              }),
                  x = d("concat"),
                  w = function w(t) {
                if (!s(t)) return !1;
                var e = t[v];
                return void 0 !== e ? !!e : a(t);
              };

              r({
                target: "Array",
                proto: !0,
                forced: !b || !x
              }, {
                concat: function concat(t) {
                  var e,
                      n,
                      r,
                      o,
                      i,
                      a = u(this),
                      s = f(a, 0),
                      d = 0;

                  for (e = -1, r = arguments.length; e < r; e++) {
                    if (w(i = -1 === e ? a : arguments[e])) {
                      if (d + (o = c(i)) > g) throw m(y);

                      for (n = 0; n < o; n++, d++) {
                        n in i && l(s, d, i[n]);
                      }
                    } else {
                      if (d >= g) throw m(y);
                      l(s, d++, i);
                    }
                  }

                  return s.length = d, s;
                }
              });
            },
            7327: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(2092).filter;
              r({
                target: "Array",
                proto: !0,
                forced: !n(1194)("filter")
              }, {
                filter: function filter(t) {
                  return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            1038: function _(t, e, n) {
              var r = n(2109),
                  o = n(8457);
              r({
                target: "Array",
                stat: !0,
                forced: !n(7072)(function (t) {
                  Array.from(t);
                })
              }, {
                from: o
              });
            },
            6699: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(1318).includes,
                  i = n(1223);
              r({
                target: "Array",
                proto: !0
              }, {
                includes: function includes(t) {
                  return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), i("includes");
            },
            2772: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(1702),
                  i = n(1318).indexOf,
                  a = n(9341),
                  s = o([].indexOf),
                  u = !!s && 1 / s([1], 1, -0) < 0,
                  c = a("indexOf");
              r({
                target: "Array",
                proto: !0,
                forced: u || !c
              }, {
                indexOf: function indexOf(t) {
                  var e = arguments.length > 1 ? arguments[1] : void 0;
                  return u ? s(this, t, e) || 0 : i(this, t, e);
                }
              });
            },
            6992: function _(t, e, n) {
              "use strict";

              var r = n(5656),
                  o = n(1223),
                  i = n(7497),
                  a = n(9909),
                  s = n(654),
                  u = "Array Iterator",
                  c = a.set,
                  l = a.getterFor(u);
              t.exports = s(Array, "Array", function (t, e) {
                c(this, {
                  type: u,
                  target: r(t),
                  index: 0,
                  kind: e
                });
              }, function () {
                var t = l(this),
                    e = t.target,
                    n = t.kind,
                    r = t.index++;
                return !e || r >= e.length ? (t.target = void 0, {
                  value: void 0,
                  done: !0
                }) : "keys" == n ? {
                  value: r,
                  done: !1
                } : "values" == n ? {
                  value: e[r],
                  done: !1
                } : {
                  value: [r, e[r]],
                  done: !1
                };
              }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
            },
            9600: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(1702),
                  i = n(8361),
                  a = n(5656),
                  s = n(9341),
                  u = o([].join),
                  c = i != Object,
                  l = s("join", ",");
              r({
                target: "Array",
                proto: !0,
                forced: c || !l
              }, {
                join: function join(t) {
                  return u(a(this), void 0 === t ? "," : t);
                }
              });
            },
            1249: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(2092).map;
              r({
                target: "Array",
                proto: !0,
                forced: !n(1194)("map")
              }, {
                map: function map(t) {
                  return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            5827: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(3671).left,
                  i = n(9341),
                  a = n(7392),
                  s = n(5268);
              r({
                target: "Array",
                proto: !0,
                forced: !i("reduce") || !s && a > 79 && a < 83
              }, {
                reduce: function reduce(t) {
                  var e = arguments.length;
                  return o(this, t, e, e > 1 ? arguments[1] : void 0);
                }
              });
            },
            7042: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(7854),
                  i = n(3157),
                  a = n(4411),
                  s = n(111),
                  u = n(1400),
                  c = n(6244),
                  l = n(5656),
                  f = n(6135),
                  d = n(5112),
                  p = n(1194),
                  h = n(206),
                  v = p("slice"),
                  g = d("species"),
                  y = o.Array,
                  m = Math.max;
              r({
                target: "Array",
                proto: !0,
                forced: !v
              }, {
                slice: function slice(t, e) {
                  var n,
                      r,
                      o,
                      d = l(this),
                      p = c(d),
                      v = u(t, p),
                      b = u(void 0 === e ? p : e, p);
                  if (i(d) && (n = d.constructor, (a(n) && (n === y || i(n.prototype)) || s(n) && null === (n = n[g])) && (n = void 0), n === y || void 0 === n)) return h(d, v, b);

                  for (r = new (void 0 === n ? y : n)(m(b - v, 0)), o = 0; v < b; v++, o++) {
                    v in d && f(r, o, d[v]);
                  }

                  return r.length = o, r;
                }
              });
            },
            2707: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(1702),
                  i = n(9662),
                  a = n(7908),
                  s = n(6244),
                  u = n(1340),
                  c = n(7293),
                  l = n(4362),
                  f = n(9341),
                  d = n(8886),
                  p = n(256),
                  h = n(7392),
                  v = n(8008),
                  g = [],
                  y = o(g.sort),
                  m = o(g.push),
                  b = c(function () {
                g.sort(void 0);
              }),
                  x = c(function () {
                g.sort(null);
              }),
                  w = f("sort"),
                  O = !c(function () {
                if (h) return h < 70;

                if (!(d && d > 3)) {
                  if (p) return !0;
                  if (v) return v < 603;
                  var t,
                      e,
                      n,
                      r,
                      o = "";

                  for (t = 65; t < 76; t++) {
                    switch (e = String.fromCharCode(t), t) {
                      case 66:
                      case 69:
                      case 70:
                      case 72:
                        n = 3;
                        break;

                      case 68:
                      case 71:
                        n = 4;
                        break;

                      default:
                        n = 2;
                    }

                    for (r = 0; r < 47; r++) {
                      g.push({
                        k: e + r,
                        v: n
                      });
                    }
                  }

                  for (g.sort(function (t, e) {
                    return e.v - t.v;
                  }), r = 0; r < g.length; r++) {
                    e = g[r].k.charAt(0), o.charAt(o.length - 1) !== e && (o += e);
                  }

                  return "DGBEFHACIJK" !== o;
                }
              });
              r({
                target: "Array",
                proto: !0,
                forced: b || !x || !w || !O
              }, {
                sort: function sort(t) {
                  void 0 !== t && i(t);
                  var e = a(this);
                  if (O) return void 0 === t ? y(e) : y(e, t);
                  var n,
                      r,
                      o = [],
                      c = s(e);

                  for (r = 0; r < c; r++) {
                    r in e && m(o, e[r]);
                  }

                  for (l(o, function (t) {
                    return function (e, n) {
                      return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : u(e) > u(n) ? 1 : -1;
                    };
                  }(t)), n = o.length, r = 0; r < n;) {
                    e[r] = o[r++];
                  }

                  for (; r < c;) {
                    delete e[r++];
                  }

                  return e;
                }
              });
            },
            561: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(7854),
                  i = n(1400),
                  a = n(9303),
                  s = n(6244),
                  u = n(7908),
                  c = n(5417),
                  l = n(6135),
                  f = n(1194)("splice"),
                  d = o.TypeError,
                  p = Math.max,
                  h = Math.min,
                  v = 9007199254740991,
                  g = "Maximum allowed length exceeded";
              r({
                target: "Array",
                proto: !0,
                forced: !f
              }, {
                splice: function splice(t, e) {
                  var n,
                      r,
                      o,
                      f,
                      y,
                      m,
                      b = u(this),
                      x = s(b),
                      w = i(t, x),
                      O = arguments.length;
                  if (0 === O ? n = r = 0 : 1 === O ? (n = 0, r = x - w) : (n = O - 2, r = h(p(a(e), 0), x - w)), x + n - r > v) throw d(g);

                  for (o = c(b, r), f = 0; f < r; f++) {
                    (y = w + f) in b && l(o, f, b[y]);
                  }

                  if (o.length = r, n < r) {
                    for (f = w; f < x - r; f++) {
                      m = f + n, (y = f + r) in b ? b[m] = b[y] : delete b[m];
                    }

                    for (f = x; f > x - r + n; f--) {
                      delete b[f - 1];
                    }
                  } else if (n > r) for (f = x - r; f > w; f--) {
                    m = f + n - 1, (y = f + r - 1) in b ? b[m] = b[y] : delete b[m];
                  }

                  for (f = 0; f < n; f++) {
                    b[f + w] = arguments[f + 2];
                  }

                  return b.length = x - r + n, o;
                }
              });
            },
            8309: function _(t, e, n) {
              var r = n(9781),
                  o = n(6530).EXISTS,
                  i = n(1702),
                  a = n(3070).f,
                  s = Function.prototype,
                  u = i(s.toString),
                  c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
                  l = i(c.exec);
              r && !o && a(s, "name", {
                configurable: !0,
                get: function get() {
                  try {
                    return l(c, u(this))[1];
                  } catch (t) {
                    return "";
                  }
                }
              });
            },
            9653: function _(t, e, n) {
              "use strict";

              var r = n(9781),
                  o = n(7854),
                  i = n(1702),
                  a = n(4705),
                  s = n(1320),
                  u = n(2597),
                  c = n(9587),
                  l = n(7976),
                  f = n(2190),
                  d = n(7593),
                  p = n(7293),
                  h = n(8006).f,
                  v = n(1236).f,
                  g = n(3070).f,
                  y = n(863),
                  m = n(3111).trim,
                  b = "Number",
                  x = o.Number,
                  w = x.prototype,
                  O = o.TypeError,
                  E = i("".slice),
                  S = i("".charCodeAt),
                  k = function k(t) {
                var e = d(t, "number");
                return "bigint" == typeof e ? e : I(e);
              },
                  I = function I(t) {
                var e,
                    n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    u,
                    c = d(t, "number");
                if (f(c)) throw O("Cannot convert a Symbol value to a number");
                if ("string" == typeof c && c.length > 2) if (c = m(c), 43 === (e = S(c, 0)) || 45 === e) {
                  if (88 === (n = S(c, 2)) || 120 === n) return NaN;
                } else if (48 === e) {
                  switch (S(c, 1)) {
                    case 66:
                    case 98:
                      r = 2, o = 49;
                      break;

                    case 79:
                    case 111:
                      r = 8, o = 55;
                      break;

                    default:
                      return +c;
                  }

                  for (a = (i = E(c, 2)).length, s = 0; s < a; s++) {
                    if ((u = S(i, s)) < 48 || u > o) return NaN;
                  }

                  return parseInt(i, r);
                }
                return +c;
              };

              if (a(b, !x(" 0o1") || !x("0b1") || x("+0x1"))) {
                for (var P, C = function C(t) {
                  var e = arguments.length < 1 ? 0 : x(k(t)),
                      n = this;
                  return l(w, n) && p(function () {
                    y(n);
                  }) ? c(Object(e), n, C) : e;
                }, A = r ? h(x) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), M = 0; A.length > M; M++) {
                  u(x, P = A[M]) && !u(C, P) && g(C, P, v(x, P));
                }

                C.prototype = w, w.constructor = C, s(o, b, C);
              }
            },
            3161: function _(t, e, n) {
              n(2109)({
                target: "Number",
                stat: !0
              }, {
                isInteger: n(5988)
              });
            },
            9601: function _(t, e, n) {
              var r = n(2109),
                  o = n(1574);
              r({
                target: "Object",
                stat: !0,
                forced: Object.assign !== o
              }, {
                assign: o
              });
            },
            9595: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(9781),
                  i = n(9026),
                  a = n(9662),
                  s = n(7908),
                  u = n(3070);
              o && r({
                target: "Object",
                proto: !0,
                forced: i
              }, {
                __defineGetter__: function __defineGetter__(t, e) {
                  u.f(s(this), t, {
                    get: a(e),
                    enumerable: !0,
                    configurable: !0
                  });
                }
              });
            },
            5003: function _(t, e, n) {
              var r = n(2109),
                  o = n(7293),
                  i = n(5656),
                  a = n(1236).f,
                  s = n(9781),
                  u = o(function () {
                a(1);
              });
              r({
                target: "Object",
                stat: !0,
                forced: !s || u,
                sham: !s
              }, {
                getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
                  return a(i(t), e);
                }
              });
            },
            9337: function _(t, e, n) {
              var r = n(2109),
                  o = n(9781),
                  i = n(3887),
                  a = n(5656),
                  s = n(1236),
                  u = n(6135);
              r({
                target: "Object",
                stat: !0,
                sham: !o
              }, {
                getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
                  for (var e, n, r = a(t), o = s.f, c = i(r), l = {}, f = 0; c.length > f;) {
                    void 0 !== (n = o(r, e = c[f++])) && u(l, e, n);
                  }

                  return l;
                }
              });
            },
            6210: function _(t, e, n) {
              var r = n(2109),
                  o = n(7293),
                  i = n(1156).f;
              r({
                target: "Object",
                stat: !0,
                forced: o(function () {
                  return !Object.getOwnPropertyNames(1);
                })
              }, {
                getOwnPropertyNames: i
              });
            },
            7941: function _(t, e, n) {
              var r = n(2109),
                  o = n(7908),
                  i = n(1956);
              r({
                target: "Object",
                stat: !0,
                forced: n(7293)(function () {
                  i(1);
                })
              }, {
                keys: function keys(t) {
                  return i(o(t));
                }
              });
            },
            1539: function _(t, e, n) {
              var r = n(1694),
                  o = n(1320),
                  i = n(288);
              r || o(Object.prototype, "toString", i, {
                unsafe: !0
              });
            },
            4603: function _(t, e, n) {
              var r = n(9781),
                  o = n(7854),
                  i = n(1702),
                  a = n(4705),
                  s = n(9587),
                  u = n(8880),
                  c = n(3070).f,
                  l = n(8006).f,
                  f = n(7976),
                  d = n(7850),
                  p = n(1340),
                  h = n(7066),
                  v = n(2999),
                  g = n(1320),
                  y = n(7293),
                  m = n(2597),
                  b = n(9909).enforce,
                  x = n(6340),
                  w = n(5112),
                  O = n(9441),
                  E = n(7168),
                  S = w("match"),
                  k = o.RegExp,
                  I = k.prototype,
                  P = o.SyntaxError,
                  C = i(h),
                  A = i(I.exec),
                  M = i("".charAt),
                  T = i("".replace),
                  j = i("".indexOf),
                  D = i("".slice),
                  N = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
                  R = /a/g,
                  L = /a/g,
                  B = new k(R) !== R,
                  _ = v.MISSED_STICKY,
                  F = v.UNSUPPORTED_Y;

              if (a("RegExp", r && (!B || _ || O || E || y(function () {
                return L[S] = !1, k(R) != R || k(L) == L || "/a/i" != k(R, "i");
              })))) {
                for (var K = function K(t, e) {
                  var n,
                      r,
                      o,
                      i,
                      a,
                      c,
                      l = f(I, this),
                      h = d(t),
                      v = void 0 === e,
                      g = [],
                      y = t;
                  if (!l && h && v && t.constructor === K) return t;
                  if ((h || f(I, t)) && (t = t.source, v && (e = ("flags" in y) ? y.flags : C(y))), t = void 0 === t ? "" : p(t), e = void 0 === e ? "" : p(e), y = t, O && ("dotAll" in R) && (r = !!e && j(e, "s") > -1) && (e = T(e, /s/g, "")), n = e, _ && ("sticky" in R) && (o = !!e && j(e, "y") > -1) && F && (e = T(e, /y/g, "")), E && (t = (i = function (t) {
                    for (var e, n = t.length, r = 0, o = "", i = [], a = {}, s = !1, u = !1, c = 0, l = ""; r <= n; r++) {
                      if ("\\" === (e = M(t, r))) e += M(t, ++r);else if ("]" === e) s = !1;else if (!s) switch (!0) {
                        case "[" === e:
                          s = !0;
                          break;

                        case "(" === e:
                          A(N, D(t, r + 1)) && (r += 2, u = !0), o += e, c++;
                          continue;

                        case ">" === e && u:
                          if ("" === l || m(a, l)) throw new P("Invalid capture group name");
                          a[l] = !0, i[i.length] = [l, c], u = !1, l = "";
                          continue;
                      }
                      u ? l += e : o += e;
                    }

                    return [o, i];
                  }(t))[0], g = i[1]), a = s(k(t, e), l ? this : I, K), (r || o || g.length) && (c = b(a), r && (c.dotAll = !0, c.raw = K(function (t) {
                    for (var e, n = t.length, r = 0, o = "", i = !1; r <= n; r++) {
                      "\\" !== (e = M(t, r)) ? i || "." !== e ? ("[" === e ? i = !0 : "]" === e && (i = !1), o += e) : o += "[\\s\\S]" : o += e + M(t, ++r);
                    }

                    return o;
                  }(t), n)), o && (c.sticky = !0), g.length && (c.groups = g)), t !== y) try {
                    u(a, "source", "" === y ? "(?:)" : y);
                  } catch (t) {}
                  return a;
                }, U = function U(t) {
                  (t in K) || c(K, t, {
                    configurable: !0,
                    get: function get() {
                      return k[t];
                    },
                    set: function set(e) {
                      k[t] = e;
                    }
                  });
                }, H = l(k), G = 0; H.length > G;) {
                  U(H[G++]);
                }

                I.constructor = K, K.prototype = I, g(o, "RegExp", K);
              }

              x("RegExp");
            },
            4916: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(2261);
              r({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== o
              }, {
                exec: o
              });
            },
            9714: function _(t, e, n) {
              "use strict";

              var r = n(1702),
                  o = n(6530).PROPER,
                  i = n(1320),
                  a = n(9670),
                  s = n(7976),
                  u = n(1340),
                  c = n(7293),
                  l = n(7066),
                  f = "toString",
                  d = RegExp.prototype,
                  p = d.toString,
                  h = r(l),
                  v = c(function () {
                return "/a/b" != p.call({
                  source: "a",
                  flags: "b"
                });
              }),
                  g = o && p.name != f;
              (v || g) && i(RegExp.prototype, f, function () {
                var t = a(this),
                    e = u(t.source),
                    n = t.flags;
                return "/" + e + "/" + u(void 0 === n && s(d, t) && !("flags" in d) ? h(t) : n);
              }, {
                unsafe: !0
              });
            },
            2023: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(1702),
                  i = n(3929),
                  a = n(4488),
                  s = n(1340),
                  u = n(4964),
                  c = o("".indexOf);
              r({
                target: "String",
                proto: !0,
                forced: !u("includes")
              }, {
                includes: function includes(t) {
                  return !!~c(s(a(this)), s(i(t)), arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            8783: function _(t, e, n) {
              "use strict";

              var r = n(8710).charAt,
                  o = n(1340),
                  i = n(9909),
                  a = n(654),
                  s = "String Iterator",
                  u = i.set,
                  c = i.getterFor(s);
              a(String, "String", function (t) {
                u(this, {
                  type: s,
                  string: o(t),
                  index: 0
                });
              }, function () {
                var t,
                    e = c(this),
                    n = e.string,
                    o = e.index;
                return o >= n.length ? {
                  value: void 0,
                  done: !0
                } : (t = r(n, o), e.index += t.length, {
                  value: t,
                  done: !1
                });
              });
            },
            6373: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(7854),
                  i = n(6916),
                  a = n(1702),
                  s = n(4994),
                  u = n(4488),
                  c = n(7466),
                  l = n(1340),
                  f = n(9670),
                  d = n(4326),
                  p = n(7976),
                  h = n(7850),
                  v = n(7066),
                  g = n(8173),
                  y = n(1320),
                  m = n(7293),
                  b = n(5112),
                  x = n(6707),
                  w = n(1530),
                  O = n(7651),
                  E = n(9909),
                  S = n(1913),
                  k = b("matchAll"),
                  I = "RegExp String",
                  P = "RegExp String Iterator",
                  C = E.set,
                  A = E.getterFor(P),
                  M = RegExp.prototype,
                  T = o.TypeError,
                  j = a(v),
                  D = a("".indexOf),
                  N = a("".matchAll),
                  R = !!N && !m(function () {
                N("a", /./);
              }),
                  L = s(function (t, e, n, r) {
                C(this, {
                  type: P,
                  regexp: t,
                  string: e,
                  global: n,
                  unicode: r,
                  done: !1
                });
              }, I, function () {
                var t = A(this);
                if (t.done) return {
                  value: void 0,
                  done: !0
                };
                var e = t.regexp,
                    n = t.string,
                    r = O(e, n);
                return null === r ? {
                  value: void 0,
                  done: t.done = !0
                } : t.global ? ("" === l(r[0]) && (e.lastIndex = w(n, c(e.lastIndex), t.unicode)), {
                  value: r,
                  done: !1
                }) : (t.done = !0, {
                  value: r,
                  done: !1
                });
              }),
                  B = function B(t) {
                var e,
                    n,
                    r,
                    o,
                    i,
                    a,
                    s = f(this),
                    u = l(t);
                return e = x(s, RegExp), void 0 === (n = s.flags) && p(M, s) && !("flags" in M) && (n = j(s)), r = void 0 === n ? "" : l(n), o = new e(e === RegExp ? s.source : s, r), i = !!~D(r, "g"), a = !!~D(r, "u"), o.lastIndex = c(s.lastIndex), new L(o, u, i, a);
              };

              r({
                target: "String",
                proto: !0,
                forced: R
              }, {
                matchAll: function matchAll(t) {
                  var e,
                      n,
                      r,
                      o,
                      a = u(this);

                  if (null != t) {
                    if (h(t) && (e = l(u("flags" in M ? t.flags : j(t))), !~D(e, "g"))) throw T("`.matchAll` does not allow non-global regexes");
                    if (R) return N(a, t);
                    if (void 0 === (r = g(t, k)) && S && "RegExp" == d(t) && (r = B), r) return i(r, t, a);
                  } else if (R) return N(a, t);

                  return n = l(a), o = new RegExp(t, "g"), S ? i(B, o, n) : o[k](n);
                }
              }), S || k in M || y(M, k, B);
            },
            4723: function _(t, e, n) {
              "use strict";

              var r = n(6916),
                  o = n(7007),
                  i = n(9670),
                  a = n(7466),
                  s = n(1340),
                  u = n(4488),
                  c = n(8173),
                  l = n(1530),
                  f = n(7651);
              o("match", function (t, e, n) {
                return [function (e) {
                  var n = u(this),
                      o = null == e ? void 0 : c(e, t);
                  return o ? r(o, e, n) : new RegExp(e)[t](s(n));
                }, function (t) {
                  var r = i(this),
                      o = s(t),
                      u = n(e, r, o);
                  if (u.done) return u.value;
                  if (!r.global) return f(r, o);
                  var c = r.unicode;
                  r.lastIndex = 0;

                  for (var d, p = [], h = 0; null !== (d = f(r, o));) {
                    var v = s(d[0]);
                    p[h] = v, "" === v && (r.lastIndex = l(o, a(r.lastIndex), c)), h++;
                  }

                  return 0 === h ? null : p;
                }];
              });
            },
            5306: function _(t, e, n) {
              "use strict";

              var r = n(2104),
                  o = n(6916),
                  i = n(1702),
                  a = n(7007),
                  s = n(7293),
                  u = n(9670),
                  c = n(614),
                  l = n(9303),
                  f = n(7466),
                  d = n(1340),
                  p = n(4488),
                  h = n(1530),
                  v = n(8173),
                  g = n(647),
                  y = n(7651),
                  m = n(5112)("replace"),
                  b = Math.max,
                  x = Math.min,
                  w = i([].concat),
                  O = i([].push),
                  E = i("".indexOf),
                  S = i("".slice),
                  k = "$0" === "a".replace(/./, "$0"),
                  I = !!/./[m] && "" === /./[m]("a", "$0");
              a("replace", function (t, e, n) {
                var i = I ? "$" : "$0";
                return [function (t, n) {
                  var r = p(this),
                      i = null == t ? void 0 : v(t, m);
                  return i ? o(i, t, r, n) : o(e, d(r), t, n);
                }, function (t, o) {
                  var a = u(this),
                      s = d(t);

                  if ("string" == typeof o && -1 === E(o, i) && -1 === E(o, "$<")) {
                    var p = n(e, a, s, o);
                    if (p.done) return p.value;
                  }

                  var v = c(o);
                  v || (o = d(o));
                  var m = a.global;

                  if (m) {
                    var k = a.unicode;
                    a.lastIndex = 0;
                  }

                  for (var I = [];;) {
                    var P = y(a, s);
                    if (null === P) break;
                    if (O(I, P), !m) break;
                    "" === d(P[0]) && (a.lastIndex = h(s, f(a.lastIndex), k));
                  }

                  for (var C, A = "", M = 0, T = 0; T < I.length; T++) {
                    for (var j = d((P = I[T])[0]), D = b(x(l(P.index), s.length), 0), N = [], R = 1; R < P.length; R++) {
                      O(N, void 0 === (C = P[R]) ? C : String(C));
                    }

                    var L = P.groups;

                    if (v) {
                      var B = w([j], N, D, s);
                      void 0 !== L && O(B, L);

                      var _ = d(r(o, void 0, B));
                    } else _ = g(j, s, D, N, L, o);

                    D >= M && (A += S(s, M, D) + _, M = D + j.length);
                  }

                  return A + S(s, M);
                }];
              }, !!s(function () {
                var t = /./;
                return t.exec = function () {
                  var t = [];
                  return t.groups = {
                    a: "7"
                  }, t;
                }, "7" !== "".replace(t, "$<a>");
              }) || !k || I);
            },
            3123: function _(t, e, n) {
              "use strict";

              var r = n(2104),
                  o = n(6916),
                  i = n(1702),
                  a = n(7007),
                  s = n(7850),
                  u = n(9670),
                  c = n(4488),
                  l = n(6707),
                  f = n(1530),
                  d = n(7466),
                  p = n(1340),
                  h = n(8173),
                  v = n(1589),
                  g = n(7651),
                  y = n(2261),
                  m = n(2999),
                  b = n(7293),
                  x = m.UNSUPPORTED_Y,
                  w = 4294967295,
                  O = Math.min,
                  E = [].push,
                  S = i(/./.exec),
                  k = i(E),
                  I = i("".slice);
              a("split", function (t, e, n) {
                var i;
                return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
                  var i = p(c(this)),
                      a = void 0 === n ? w : n >>> 0;
                  if (0 === a) return [];
                  if (void 0 === t) return [i];
                  if (!s(t)) return o(e, i, t, a);

                  for (var u, l, f, d = [], h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), g = 0, m = new RegExp(t.source, h + "g"); (u = o(y, m, i)) && !((l = m.lastIndex) > g && (k(d, I(i, g, u.index)), u.length > 1 && u.index < i.length && r(E, d, v(u, 1)), f = u[0].length, g = l, d.length >= a));) {
                    m.lastIndex === u.index && m.lastIndex++;
                  }

                  return g === i.length ? !f && S(m, "") || k(d, "") : k(d, I(i, g)), d.length > a ? v(d, 0, a) : d;
                } : "0".split(void 0, 0).length ? function (t, n) {
                  return void 0 === t && 0 === n ? [] : o(e, this, t, n);
                } : e, [function (e, n) {
                  var r = c(this),
                      a = null == e ? void 0 : h(e, t);
                  return a ? o(a, e, r, n) : o(i, p(r), e, n);
                }, function (t, r) {
                  var o = u(this),
                      a = p(t),
                      s = n(i, o, a, r, i !== e);
                  if (s.done) return s.value;
                  var c = l(o, RegExp),
                      h = o.unicode,
                      v = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (x ? "g" : "y"),
                      y = new c(x ? "^(?:" + o.source + ")" : o, v),
                      m = void 0 === r ? w : r >>> 0;
                  if (0 === m) return [];
                  if (0 === a.length) return null === g(y, a) ? [a] : [];

                  for (var b = 0, E = 0, S = []; E < a.length;) {
                    y.lastIndex = x ? 0 : E;
                    var P,
                        C = g(y, x ? I(a, E) : a);
                    if (null === C || (P = O(d(y.lastIndex + (x ? E : 0)), a.length)) === b) E = f(a, E, h);else {
                      if (k(S, I(a, b, E)), S.length === m) return S;

                      for (var A = 1; A <= C.length - 1; A++) {
                        if (k(S, C[A]), S.length === m) return S;
                      }

                      E = b = P;
                    }
                  }

                  return k(S, I(a, b)), S;
                }];
              }, !!b(function () {
                var t = /(?:)/,
                    e = t.exec;

                t.exec = function () {
                  return e.apply(this, arguments);
                };

                var n = "ab".split(t);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
              }), x);
            },
            3210: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(3111).trim;
              r({
                target: "String",
                proto: !0,
                forced: n(6091)("trim")
              }, {
                trim: function trim() {
                  return o(this);
                }
              });
            },
            1817: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(9781),
                  i = n(7854),
                  a = n(1702),
                  s = n(2597),
                  u = n(614),
                  c = n(7976),
                  l = n(1340),
                  f = n(3070).f,
                  d = n(9920),
                  p = i.Symbol,
                  h = p && p.prototype;

              if (o && u(p) && (!("description" in h) || void 0 !== p().description)) {
                var v = {},
                    g = function g() {
                  var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]),
                      e = c(h, this) ? new p(t) : void 0 === t ? p() : p(t);
                  return "" === t && (v[e] = !0), e;
                };

                d(g, p), g.prototype = h, h.constructor = g;
                var y = "Symbol(test)" == String(p("test")),
                    m = a(h.toString),
                    b = a(h.valueOf),
                    x = /^Symbol\((.*)\)[^)]+$/,
                    w = a("".replace),
                    O = a("".slice);
                f(h, "description", {
                  configurable: !0,
                  get: function get() {
                    var t = b(this),
                        e = m(t);
                    if (s(v, t)) return "";
                    var n = y ? O(e, 7, -1) : w(e, x, "$1");
                    return "" === n ? void 0 : n;
                  }
                }), r({
                  global: !0,
                  forced: !0
                }, {
                  Symbol: g
                });
              }
            },
            2165: function _(t, e, n) {
              n(7235)("iterator");
            },
            2526: function _(t, e, n) {
              "use strict";

              var r = n(2109),
                  o = n(7854),
                  i = n(5005),
                  a = n(2104),
                  s = n(6916),
                  u = n(1702),
                  c = n(1913),
                  l = n(9781),
                  f = n(133),
                  d = n(7293),
                  p = n(2597),
                  h = n(3157),
                  v = n(614),
                  g = n(111),
                  y = n(7976),
                  m = n(2190),
                  b = n(9670),
                  x = n(7908),
                  w = n(5656),
                  O = n(4948),
                  E = n(1340),
                  S = n(9114),
                  k = n(30),
                  I = n(1956),
                  P = n(8006),
                  C = n(1156),
                  A = n(5181),
                  M = n(1236),
                  T = n(3070),
                  j = n(5296),
                  D = n(206),
                  N = n(1320),
                  R = n(2309),
                  L = n(6200),
                  B = n(3501),
                  _ = n(9711),
                  F = n(5112),
                  K = n(6061),
                  U = n(7235),
                  H = n(8003),
                  G = n(9909),
                  $ = n(2092).forEach,
                  V = L("hidden"),
                  z = "Symbol",
                  Y = F("toPrimitive"),
                  W = G.set,
                  X = G.getterFor(z),
                  q = Object.prototype,
                  J = o.Symbol,
                  Q = J && J.prototype,
                  Z = o.TypeError,
                  tt = o.QObject,
                  et = i("JSON", "stringify"),
                  nt = M.f,
                  rt = T.f,
                  ot = C.f,
                  it = j.f,
                  at = u([].push),
                  st = R("symbols"),
                  ut = R("op-symbols"),
                  ct = R("string-to-symbol-registry"),
                  lt = R("symbol-to-string-registry"),
                  ft = R("wks"),
                  dt = !tt || !tt.prototype || !tt.prototype.findChild,
                  pt = l && d(function () {
                return 7 != k(rt({}, "a", {
                  get: function get() {
                    return rt(this, "a", {
                      value: 7
                    }).a;
                  }
                })).a;
              }) ? function (t, e, n) {
                var r = nt(q, e);
                r && delete q[e], rt(t, e, n), r && t !== q && rt(q, e, r);
              } : rt,
                  ht = function ht(t, e) {
                var n = st[t] = k(Q);
                return W(n, {
                  type: z,
                  tag: t,
                  description: e
                }), l || (n.description = e), n;
              },
                  vt = function vt(t, e, n) {
                t === q && vt(ut, e, n), b(t);
                var r = O(e);
                return b(n), p(st, r) ? (n.enumerable ? (p(t, V) && t[V][r] && (t[V][r] = !1), n = k(n, {
                  enumerable: S(0, !1)
                })) : (p(t, V) || rt(t, V, S(1, {})), t[V][r] = !0), pt(t, r, n)) : rt(t, r, n);
              },
                  gt = function gt(t, e) {
                b(t);
                var n = w(e),
                    r = I(n).concat(xt(n));
                return $(r, function (e) {
                  l && !s(yt, n, e) || vt(t, e, n[e]);
                }), t;
              },
                  yt = function yt(t) {
                var e = O(t),
                    n = s(it, this, e);
                return !(this === q && p(st, e) && !p(ut, e)) && (!(n || !p(this, e) || !p(st, e) || p(this, V) && this[V][e]) || n);
              },
                  mt = function mt(t, e) {
                var n = w(t),
                    r = O(e);

                if (n !== q || !p(st, r) || p(ut, r)) {
                  var o = nt(n, r);
                  return !o || !p(st, r) || p(n, V) && n[V][r] || (o.enumerable = !0), o;
                }
              },
                  bt = function bt(t) {
                var e = ot(w(t)),
                    n = [];
                return $(e, function (t) {
                  p(st, t) || p(B, t) || at(n, t);
                }), n;
              },
                  xt = function xt(t) {
                var e = t === q,
                    n = ot(e ? ut : w(t)),
                    r = [];
                return $(n, function (t) {
                  !p(st, t) || e && !p(q, t) || at(r, st[t]);
                }), r;
              };

              if (f || (N(Q = (J = function J() {
                if (y(Q, this)) throw Z("Symbol is not a constructor");

                var t = arguments.length && void 0 !== arguments[0] ? E(arguments[0]) : void 0,
                    e = _(t),
                    n = function n(t) {
                  this === q && s(n, ut, t), p(this, V) && p(this[V], e) && (this[V][e] = !1), pt(this, e, S(1, t));
                };

                return l && dt && pt(q, e, {
                  configurable: !0,
                  set: n
                }), ht(e, t);
              }).prototype, "toString", function () {
                return X(this).tag;
              }), N(J, "withoutSetter", function (t) {
                return ht(_(t), t);
              }), j.f = yt, T.f = vt, M.f = mt, P.f = C.f = bt, A.f = xt, K.f = function (t) {
                return ht(F(t), t);
              }, l && (rt(Q, "description", {
                configurable: !0,
                get: function get() {
                  return X(this).description;
                }
              }), c || N(q, "propertyIsEnumerable", yt, {
                unsafe: !0
              }))), r({
                global: !0,
                wrap: !0,
                forced: !f,
                sham: !f
              }, {
                Symbol: J
              }), $(I(ft), function (t) {
                U(t);
              }), r({
                target: z,
                stat: !0,
                forced: !f
              }, {
                for: function _for(t) {
                  var e = E(t);
                  if (p(ct, e)) return ct[e];
                  var n = J(e);
                  return ct[e] = n, lt[n] = e, n;
                },
                keyFor: function keyFor(t) {
                  if (!m(t)) throw Z(t + " is not a symbol");
                  if (p(lt, t)) return lt[t];
                },
                useSetter: function useSetter() {
                  dt = !0;
                },
                useSimple: function useSimple() {
                  dt = !1;
                }
              }), r({
                target: "Object",
                stat: !0,
                forced: !f,
                sham: !l
              }, {
                create: function create(t, e) {
                  return void 0 === e ? k(t) : gt(k(t), e);
                },
                defineProperty: vt,
                defineProperties: gt,
                getOwnPropertyDescriptor: mt
              }), r({
                target: "Object",
                stat: !0,
                forced: !f
              }, {
                getOwnPropertyNames: bt,
                getOwnPropertySymbols: xt
              }), r({
                target: "Object",
                stat: !0,
                forced: d(function () {
                  A.f(1);
                })
              }, {
                getOwnPropertySymbols: function getOwnPropertySymbols(t) {
                  return A.f(x(t));
                }
              }), et && r({
                target: "JSON",
                stat: !0,
                forced: !f || d(function () {
                  var t = J();
                  return "[null]" != et([t]) || "{}" != et({
                    a: t
                  }) || "{}" != et(Object(t));
                })
              }, {
                stringify: function stringify(t, e, n) {
                  var r = D(arguments),
                      o = e;
                  if ((g(e) || void 0 !== t) && !m(t)) return h(e) || (e = function e(t, _e) {
                    if (v(o) && (_e = s(o, this, t, _e)), !m(_e)) return _e;
                  }), r[1] = e, a(et, null, r);
                }
              }), !Q[Y]) {
                var wt = Q.valueOf;
                N(Q, Y, function (t) {
                  return s(wt, this);
                });
              }

              H(J, z), B[V] = !0;
            },
            3728: function _(t, e, n) {
              n(6373);
            },
            4747: function _(t, e, n) {
              var r = n(7854),
                  o = n(8324),
                  i = n(8509),
                  a = n(8533),
                  s = n(8880),
                  u = function u(t) {
                if (t && t.forEach !== a) try {
                  s(t, "forEach", a);
                } catch (e) {
                  t.forEach = a;
                }
              };

              for (var c in o) {
                o[c] && u(r[c] && r[c].prototype);
              }

              u(i);
            },
            3948: function _(t, e, n) {
              var r = n(7854),
                  o = n(8324),
                  i = n(8509),
                  a = n(6992),
                  s = n(8880),
                  u = n(5112),
                  c = u("iterator"),
                  l = u("toStringTag"),
                  f = a.values,
                  d = function d(t, e) {
                if (t) {
                  if (t[c] !== f) try {
                    s(t, c, f);
                  } catch (e) {
                    t[c] = f;
                  }
                  if (t[l] || s(t, l, e), o[e]) for (var n in a) {
                    if (t[n] !== a[n]) try {
                      s(t, n, a[n]);
                    } catch (e) {
                      t[n] = a[n];
                    }
                  }
                }
              };

              for (var p in o) {
                d(r[p] && r[p].prototype, p);
              }

              d(i, "DOMTokenList");
            }
          },
              e = {};

          function n(r) {
            var o = e[r];
            if (void 0 !== o) return o.exports;
            var i = e[r] = {
              exports: {}
            };
            return t[r](i, i.exports, n), i.exports;
          }

          n.d = function (t, e) {
            for (var r in e) {
              n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
              });
            }
          }, n.g = function () {
            if ("object" == typeof globalThis) return globalThis;

            try {
              return this || new Function("return this")();
            } catch (t) {
              if ("object" == typeof window) return window;
            }
          }(), n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(t, "__esModule", {
              value: !0
            });
          };
          var r = {};
          return function () {
            "use strict";

            function t(t) {
              return function (t) {
                if (Array.isArray(t)) return o(t);
              }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
              }(t) || e(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }

            function e(t, e) {
              if (t) {
                if ("string" == typeof t) return o(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
              }
            }

            function o(t, e) {
              (null == e || e > t.length) && (e = t.length);

              for (var n = 0, r = new Array(e); n < e; n++) {
                r[n] = t[n];
              }

              return r;
            }

            function i(t) {
              return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t;
              } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              })(t);
            }

            function a(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
              }
            }

            function s(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n, t;
            }

            n.r(r), n.d(r, {
              default: function _default() {
                return O;
              }
            }), n(3210), n(4916), n(5306), n(2772), n(8309), n(3123), n(1539), n(9714), n(561), n(9600), n(9595), n(7042), "undefined" == typeof Element || "remove" in Element.prototype || (Element.prototype.remove = function () {
              this.parentNode && this.parentNode.removeChild(this);
            }), "undefined" != typeof self && "document" in self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function (t) {
              if ("Element" in t) {
                var e = "classList",
                    n = t.Element.prototype,
                    r = Object,
                    o = String.prototype.trim || function () {
                  return this.replace(/^\s+|\s+$/g, "");
                },
                    i = Array.prototype.indexOf || function (t) {
                  for (var e = 0, n = this.length; e < n; e++) {
                    if (e in this && this[e] === t) return e;
                  }

                  return -1;
                },
                    a = function a(t, e) {
                  this.name = t, this.code = DOMException[t], this.message = e;
                },
                    s = function s(t, e) {
                  if ("" === e) throw new a("SYNTAX_ERR", "The token must not be empty.");
                  if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                  return i.call(t, e);
                },
                    u = function u(t) {
                  for (var e = o.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], r = 0, i = n.length; r < i; r++) {
                    this.push(n[r]);
                  }

                  this._updateClassName = function () {
                    t.setAttribute("class", this.toString());
                  };
                },
                    c = u.prototype = [],
                    l = function l() {
                  return new u(this);
                };

                if (a.prototype = Error.prototype, c.item = function (t) {
                  return this[t] || null;
                }, c.contains = function (t) {
                  return ~s(this, t + "");
                }, c.add = function () {
                  var t,
                      e = arguments,
                      n = 0,
                      r = e.length,
                      o = !1;

                  do {
                    t = e[n] + "", ~s(this, t) || (this.push(t), o = !0);
                  } while (++n < r);

                  o && this._updateClassName();
                }, c.remove = function () {
                  var t,
                      e,
                      n = arguments,
                      r = 0,
                      o = n.length,
                      i = !1;

                  do {
                    for (t = n[r] + "", e = s(this, t); ~e;) {
                      this.splice(e, 1), i = !0, e = s(this, t);
                    }
                  } while (++r < o);

                  i && this._updateClassName();
                }, c.toggle = function (t, e) {
                  var n = this.contains(t),
                      r = n ? !0 !== e && "remove" : !1 !== e && "add";
                  return r && this[r](t), !0 === e || !1 === e ? e : !n;
                }, c.replace = function (t, e) {
                  var n = s(t + "");
                  ~n && (this.splice(n, 1, e), this._updateClassName());
                }, c.toString = function () {
                  return this.join(" ");
                }, r.defineProperty) {
                  var f = {
                    get: l,
                    enumerable: !0,
                    configurable: !0
                  };

                  try {
                    r.defineProperty(n, e, f);
                  } catch (t) {
                    void 0 !== t.number && -2146823252 !== t.number || (f.enumerable = !1, r.defineProperty(n, e, f));
                  }
                } else r.prototype.__defineGetter__ && n.__defineGetter__(e, l);
              }
            }(self), function () {
              var t = document.createElement("_");

              if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                var e = function e(t) {
                  var e = DOMTokenList.prototype[t];

                  DOMTokenList.prototype[t] = function (t) {
                    var n,
                        r = arguments.length;

                    for (n = 0; n < r; n++) {
                      t = arguments[n], e.call(this, t);
                    }
                  };
                };

                e("add"), e("remove");
              }

              if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                var n = DOMTokenList.prototype.toggle;

                DOMTokenList.prototype.toggle = function (t, e) {
                  return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
                };
              }

              "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (t, e) {
                var n = this.toString().split(" "),
                    r = n.indexOf(t + "");
                ~r && (n = n.slice(r), this.remove.apply(this, n), this.add(e), this.add.apply(this, n.slice(1)));
              }), t = null;
            }()), n(7327), n(2222), n(7941), n(4603), n(3728), n(2707), n(6699), n(2023), n(4747), n(9601), n(1249), n(1038), n(8783), n(2526), n(5003), n(9337), n(1817), n(2165), n(6992), n(3948), n(3161), n(9653), n(4723), n(5827), n(6210);

            var u = function () {
              function n(t) {
                var e = t.getOptions,
                    r = t.getCaretPosition,
                    o = t.getCaretPositionEnd,
                    i = t.dispatch;
                !function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), s(this, "isStandardButton", function (t) {
                  return t && !("{" === t[0] && "}" === t[t.length - 1]);
                }), this.getOptions = e, this.getCaretPosition = r, this.getCaretPositionEnd = o, this.dispatch = i, n.bindMethods(n, this);
              }

              var r, o, u;
              return r = n, u = [{
                key: "bindMethods",
                value: function value(t, n) {
                  var r,
                      o = function (t, n) {
                    var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

                    if (!r) {
                      if (Array.isArray(t) || (r = e(t)) || n && t && "number" == typeof t.length) {
                        r && (t = r);

                        var o = 0,
                            i = function i() {};

                        return {
                          s: i,
                          n: function n() {
                            return o >= t.length ? {
                              done: !0
                            } : {
                              done: !1,
                              value: t[o++]
                            };
                          },
                          e: function e(t) {
                            throw t;
                          },
                          f: i
                        };
                      }

                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }

                    var a,
                        s = !0,
                        u = !1;
                    return {
                      s: function s() {
                        r = r.call(t);
                      },
                      n: function n() {
                        var t = r.next();
                        return s = t.done, t;
                      },
                      e: function e(t) {
                        u = !0, a = t;
                      },
                      f: function f() {
                        try {
                          s || null == r.return || r.return();
                        } finally {
                          if (u) throw a;
                        }
                      }
                    };
                  }(Object.getOwnPropertyNames(t.prototype));

                  try {
                    for (o.s(); !(r = o.n()).done;) {
                      var i = r.value;
                      "constructor" === i || "bindMethods" === i || (n[i] = n[i].bind(n));
                    }
                  } catch (t) {
                    o.e(t);
                  } finally {
                    o.f();
                  }
                }
              }], (o = [{
                key: "getButtonType",
                value: function value(t) {
                  return t.includes("{") && t.includes("}") && "{//}" !== t ? "functionBtn" : "standardBtn";
                }
              }, {
                key: "getButtonClass",
                value: function value(t) {
                  var e = this.getButtonType(t),
                      n = t.replace("{", "").replace("}", ""),
                      r = "";
                  return "standardBtn" !== e && (r = " hg-button-".concat(n)), "hg-".concat(e).concat(r);
                }
              }, {
                key: "getDefaultDiplay",
                value: function value() {
                  return {
                    "{bksp}": "backspace",
                    "{backspace}": "backspace",
                    "{enter}": "< enter",
                    "{shift}": "shift",
                    "{shiftleft}": "shift",
                    "{shiftright}": "shift",
                    "{alt}": "alt",
                    "{s}": "shift",
                    "{tab}": "tab",
                    "{lock}": "caps",
                    "{capslock}": "caps",
                    "{accept}": "Submit",
                    "{space}": " ",
                    "{//}": " ",
                    "{esc}": "esc",
                    "{escape}": "esc",
                    "{f1}": "f1",
                    "{f2}": "f2",
                    "{f3}": "f3",
                    "{f4}": "f4",
                    "{f5}": "f5",
                    "{f6}": "f6",
                    "{f7}": "f7",
                    "{f8}": "f8",
                    "{f9}": "f9",
                    "{f10}": "f10",
                    "{f11}": "f11",
                    "{f12}": "f12",
                    "{numpaddivide}": "/",
                    "{numlock}": "lock",
                    "{arrowup}": "↑",
                    "{arrowleft}": "←",
                    "{arrowdown}": "↓",
                    "{arrowright}": "→",
                    "{prtscr}": "print",
                    "{scrolllock}": "scroll",
                    "{pause}": "pause",
                    "{insert}": "ins",
                    "{home}": "home",
                    "{pageup}": "up",
                    "{delete}": "del",
                    "{forwarddelete}": "del",
                    "{end}": "end",
                    "{pagedown}": "down",
                    "{numpadmultiply}": "*",
                    "{numpadsubtract}": "-",
                    "{numpadadd}": "+",
                    "{numpadenter}": "enter",
                    "{period}": ".",
                    "{numpaddecimal}": ".",
                    "{numpad0}": "0",
                    "{numpad1}": "1",
                    "{numpad2}": "2",
                    "{numpad3}": "3",
                    "{numpad4}": "4",
                    "{numpad5}": "5",
                    "{numpad6}": "6",
                    "{numpad7}": "7",
                    "{numpad8}": "8",
                    "{numpad9}": "9"
                  };
                }
              }, {
                key: "getButtonDisplayName",
                value: function value(t, e, n) {
                  return (e = n ? Object.assign({}, this.getDefaultDiplay(), e) : e || this.getDefaultDiplay())[t] || t;
                }
              }, {
                key: "getUpdatedInput",
                value: function value(t, e, n) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n,
                      o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                      i = this.getOptions(),
                      a = [n, r, o],
                      s = e;
                  return ("{bksp}" === t || "{backspace}" === t) && s.length > 0 ? s = this.removeAt.apply(this, [s].concat(a)) : ("{delete}" === t || "{forwarddelete}" === t) && s.length > 0 ? s = this.removeForwardsAt.apply(this, [s].concat(a)) : "{space}" === t ? s = this.addStringAt.apply(this, [s, " "].concat(a)) : "{tab}" !== t || "boolean" == typeof i.tabCharOnTab && !1 === i.tabCharOnTab ? "{enter}" !== t && "{numpadenter}" !== t || !i.newLineOnEnter ? t.includes("numpad") && Number.isInteger(Number(t[t.length - 2])) ? s = this.addStringAt.apply(this, [s, t[t.length - 2]].concat(a)) : "{numpaddivide}" === t ? s = this.addStringAt.apply(this, [s, "/"].concat(a)) : "{numpadmultiply}" === t ? s = this.addStringAt.apply(this, [s, "*"].concat(a)) : "{numpadsubtract}" === t ? s = this.addStringAt.apply(this, [s, "-"].concat(a)) : "{numpadadd}" === t ? s = this.addStringAt.apply(this, [s, "+"].concat(a)) : "{numpaddecimal}" === t ? s = this.addStringAt.apply(this, [s, "."].concat(a)) : "{" === t || "}" === t ? s = this.addStringAt.apply(this, [s, t].concat(a)) : t.includes("{") || t.includes("}") || (s = this.addStringAt.apply(this, [s, t].concat(a))) : s = this.addStringAt.apply(this, [s, "\n"].concat(a)) : s = this.addStringAt.apply(this, [s, "\t"].concat(a)), s;
                }
              }, {
                key: "updateCaretPos",
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                      n = this.updateCaretPosAction(t, e);
                  this.dispatch(function (t) {
                    t.setCaretPosition(n);
                  });
                }
              }, {
                key: "updateCaretPosAction",
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                      n = this.getOptions(),
                      r = this.getCaretPosition();
                  return null != r && (e ? r > 0 && (r -= t) : r += t), n.debug && console.log("Caret at:", r), r;
                }
              }, {
                key: "addStringAt",
                value: function value(t, e) {
                  var n,
                      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length,
                      i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                  return r || 0 === r ? (n = [t.slice(0, r), e, t.slice(o)].join(""), this.isMaxLengthReached() || i && this.updateCaretPos(e.length)) : n = t + e, n;
                }
              }, {
                key: "removeAt",
                value: function value(t) {
                  var e,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length,
                      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                      o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  if (0 === n && 0 === r) return t;

                  if (n === r) {
                    var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                    n && n >= 0 ? t.substring(n - 2, n).match(i) ? (e = t.substr(0, n - 2) + t.substr(n), o && this.updateCaretPos(2, !0)) : (e = t.substr(0, n - 1) + t.substr(n), o && this.updateCaretPos(1, !0)) : t.slice(-2).match(i) ? (e = t.slice(0, -2), o && this.updateCaretPos(2, !0)) : (e = t.slice(0, -1), o && this.updateCaretPos(1, !0));
                  } else e = t.slice(0, n) + t.slice(r), o && this.dispatch(function (t) {
                    t.setCaretPosition(n);
                  });

                  return e;
                }
              }, {
                key: "removeForwardsAt",
                value: function value(t) {
                  var e,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length,
                      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                      o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  if (null == t || !t.length || null === n) return t;

                  if (n === r) {
                    var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                    e = t.substring(n, n + 2).match(i) ? t.substr(0, n) + t.substr(n + 2) : t.substr(0, n) + t.substr(n + 1);
                  } else e = t.slice(0, n) + t.slice(r), o && this.dispatch(function (t) {
                    t.setCaretPosition(n);
                  });

                  return e;
                }
              }, {
                key: "handleMaxLength",
                value: function value(t, e) {
                  var n = this.getOptions(),
                      r = n.maxLength,
                      o = t[n.inputName || "default"],
                      a = e.length - 1 >= r;
                  if (e.length <= o.length) return !1;
                  if (Number.isInteger(r)) return n.debug && console.log("maxLength (num) reached:", a), a ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);

                  if ("object" === i(r)) {
                    var s = e.length - 1 >= r[n.inputName || "default"];
                    return n.debug && console.log("maxLength (obj) reached:", s), s ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
                  }
                }
              }, {
                key: "isMaxLengthReached",
                value: function value() {
                  return Boolean(this.maxLengthReached);
                }
              }, {
                key: "isTouchDevice",
                value: function value() {
                  return "ontouchstart" in window || navigator.maxTouchPoints;
                }
              }, {
                key: "pointerEventsSupported",
                value: function value() {
                  return !!window.PointerEvent;
                }
              }, {
                key: "camelCase",
                value: function value(t) {
                  return t ? t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function (t, e) {
                    return e.length ? t + e[0].toUpperCase() + e.slice(1) : t;
                  }) : "";
                }
              }, {
                key: "chunkArray",
                value: function value(e, n) {
                  return t(Array(Math.ceil(e.length / n))).map(function (t, r) {
                    return e.slice(n * r, n + n * r);
                  });
                }
              }]) && a(r.prototype, o), u && a(r, u), n;
            }();

            s(u, "noop", function () {});
            var c = u;

            function l(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
              }
            }

            var f = function () {
              function t(e) {
                var n = e.dispatch,
                    r = e.getOptions;
                !function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this.dispatch = n, this.getOptions = r, c.bindMethods(t, this);
              }

              var e, n, r;
              return e = t, (n = [{
                key: "handleHighlightKeyDown",
                value: function value(t) {
                  var e = this.getOptions(),
                      n = this.getSimpleKeyboardLayoutKey(t);
                  this.dispatch(function (r) {
                    var o,
                        i,
                        a = r.getButtonElement(n),
                        s = r.getButtonElement("{".concat(n, "}"));
                    if (a) o = a, i = n;else {
                      if (!s) return;
                      o = s, i = "{".concat(n, "}");
                    }
                    o && (o.style.backgroundColor = e.physicalKeyboardHighlightBgColor || "#dadce4", o.style.color = e.physicalKeyboardHighlightTextColor || "black", e.physicalKeyboardHighlightPress && (e.physicalKeyboardHighlightPressUseClick ? o.click() : r.handleButtonClicked(i, t)));
                  });
                }
              }, {
                key: "handleHighlightKeyUp",
                value: function value(t) {
                  var e = this.getSimpleKeyboardLayoutKey(t);
                  this.dispatch(function (t) {
                    var n = t.getButtonElement(e) || t.getButtonElement("{".concat(e, "}"));
                    n && n.removeAttribute && n.removeAttribute("style");
                  });
                }
              }, {
                key: "getSimpleKeyboardLayoutKey",
                value: function value(t) {
                  var e,
                      n = "",
                      r = t.code || t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode);
                  return (n = null != r && r.includes("Numpad") || null != r && r.includes("Shift") || null != r && r.includes("Space") || null != r && r.includes("Backspace") || null != r && r.includes("Control") || null != r && r.includes("Alt") || null != r && r.includes("Meta") ? t.code || "" : t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode) || "").length > 1 ? null === (e = n) || void 0 === e ? void 0 : e.toLowerCase() : n;
                }
              }, {
                key: "keyCodeToKey",
                value: function value(t) {
                  return {
                    8: "Backspace",
                    9: "Tab",
                    13: "Enter",
                    16: "Shift",
                    17: "Ctrl",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Esc",
                    32: "Space",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    65: "A",
                    66: "B",
                    67: "C",
                    68: "D",
                    69: "E",
                    70: "F",
                    71: "G",
                    72: "H",
                    73: "I",
                    74: "J",
                    75: "K",
                    76: "L",
                    77: "M",
                    78: "N",
                    79: "O",
                    80: "P",
                    81: "Q",
                    82: "R",
                    83: "S",
                    84: "T",
                    85: "U",
                    86: "V",
                    87: "W",
                    88: "X",
                    89: "Y",
                    90: "Z",
                    91: "Meta",
                    96: "Numpad0",
                    97: "Numpad1",
                    98: "Numpad2",
                    99: "Numpad3",
                    100: "Numpad4",
                    101: "Numpad5",
                    102: "Numpad6",
                    103: "Numpad7",
                    104: "Numpad8",
                    105: "Numpad9",
                    106: "NumpadMultiply",
                    107: "NumpadAdd",
                    109: "NumpadSubtract",
                    110: "NumpadDecimal",
                    111: "NumpadDivide",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                  }[t];
                }
              }]) && l(e.prototype, n), r && l(e, r), t;
            }();

            function d(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
              }
            }

            var p = function () {
              function t(e) {
                var n,
                    r,
                    o,
                    i = e.utilities;
                !function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), o = 0, (r = "pageIndex") in (n = this) ? Object.defineProperty(n, r, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : n[r] = o, this.utilities = i, c.bindMethods(t, this), this.pageSize = this.utilities.getOptions().layoutCandidatesPageSize || 5;
              }

              var e, n, r;
              return e = t, (n = [{
                key: "destroy",
                value: function value() {
                  this.candidateBoxElement && (this.candidateBoxElement.remove(), this.pageIndex = 0);
                }
              }, {
                key: "show",
                value: function value(t) {
                  var e = this,
                      n = t.candidateValue,
                      r = t.targetElement,
                      o = t.onSelect;

                  if (n && n.length) {
                    var i = this.utilities.chunkArray(n.split(" "), this.pageSize);
                    this.renderPage({
                      candidateListPages: i,
                      targetElement: r,
                      pageIndex: this.pageIndex,
                      nbPages: i.length,
                      onItemSelected: function onItemSelected(t, n) {
                        o(t, n), e.destroy();
                      }
                    });
                  }
                }
              }, {
                key: "renderPage",
                value: function value(t) {
                  var e,
                      n = this,
                      r = t.candidateListPages,
                      o = t.targetElement,
                      i = t.pageIndex,
                      a = t.nbPages,
                      s = t.onItemSelected;
                  null === (e = this.candidateBoxElement) || void 0 === e || e.remove(), this.candidateBoxElement = document.createElement("div"), this.candidateBoxElement.className = "hg-candidate-box";
                  var u = document.createElement("ul");
                  u.className = "hg-candidate-box-list", r[i].forEach(function (t) {
                    var e = document.createElement("li"),
                        n = function n() {
                      var t = new MouseEvent("click");
                      return Object.defineProperty(t, "target", {
                        value: e
                      }), t;
                    };

                    e.className = "hg-candidate-box-list-item", e.textContent = t, e.onclick = function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n();
                      return s(t, e);
                    }, u.appendChild(e);
                  });
                  var c = i > 0,
                      l = document.createElement("div");
                  l.classList.add("hg-candidate-box-prev"), c && l.classList.add("hg-candidate-box-btn-active"), l.onclick = function () {
                    c && n.renderPage({
                      candidateListPages: r,
                      targetElement: o,
                      pageIndex: i - 1,
                      nbPages: a,
                      onItemSelected: s
                    });
                  }, this.candidateBoxElement.appendChild(l), this.candidateBoxElement.appendChild(u);
                  var f = i < a - 1,
                      d = document.createElement("div");
                  d.classList.add("hg-candidate-box-next"), f && d.classList.add("hg-candidate-box-btn-active"), d.onclick = function () {
                    f && n.renderPage({
                      candidateListPages: r,
                      targetElement: o,
                      pageIndex: i + 1,
                      nbPages: a,
                      onItemSelected: s
                    });
                  }, this.candidateBoxElement.appendChild(d), o.prepend(this.candidateBoxElement);
                }
              }]) && d(e.prototype, n), r && d(e, r), t;
            }();

            function h(t) {
              return function (t) {
                if (Array.isArray(t)) return v(t);
              }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
              }(t) || function (t, e) {
                if (t) {
                  if ("string" == typeof t) return v(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0;
                }
              }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }

            function v(t, e) {
              (null == e || e > t.length) && (e = t.length);

              for (var n = 0, r = new Array(e); n < e; n++) {
                r[n] = t[n];
              }

              return r;
            }

            function g(t) {
              return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t;
              } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              })(t);
            }

            function y(t, e) {
              var n = Object.keys(t);

              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
              }

              return n;
            }

            function m(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? y(Object(n), !0).forEach(function (e) {
                  w(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
              }

              return t;
            }

            function b(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }

            function x(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
              }
            }

            function w(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n, t;
            }

            var O = function () {
              function t() {
                var e = this;

                if (b(this, t), w(this, "defaultName", "default"), w(this, "activeInputElement", null), w(this, "handleParams", function (t) {
                  var e, n, r;
                  if ("string" == typeof t[0]) e = t[0].split(".").join(""), n = document.querySelector(".".concat(e)), r = t[1];else if (t[0] instanceof HTMLDivElement) {
                    if (!t[0].className) throw console.warn("Any DOM element passed as parameter must have a class."), new Error("KEYBOARD_DOM_CLASS_ERROR");
                    e = t[0].className.split(" ")[0], n = t[0], r = t[1];
                  } else e = "simple-keyboard", n = document.querySelector(".".concat(e)), r = t[0];
                  return {
                    keyboardDOMClass: e,
                    keyboardDOM: n,
                    options: r
                  };
                }), w(this, "getOptions", function () {
                  return e.options;
                }), w(this, "getCaretPosition", function () {
                  return e.caretPosition;
                }), w(this, "getCaretPositionEnd", function () {
                  return e.caretPositionEnd;
                }), w(this, "registerModule", function (t, n) {
                  e.modules[t] || (e.modules[t] = {}), n(e.modules[t]);
                }), w(this, "getKeyboardClassString", function () {
                  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
                    n[r] = arguments[r];
                  }

                  var o = [e.keyboardDOMClass].concat(n).filter(function (t) {
                    return !!t;
                  });
                  return o.join(" ");
                }), "undefined" != typeof window) {
                  for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
                    r[o] = arguments[o];
                  }

                  var i = this.handleParams(r),
                      a = i.keyboardDOMClass,
                      s = i.keyboardDOM,
                      u = i.options,
                      l = void 0 === u ? {} : u;
                  this.utilities = new c({
                    getOptions: this.getOptions,
                    getCaretPosition: this.getCaretPosition,
                    getCaretPositionEnd: this.getCaretPositionEnd,
                    dispatch: this.dispatch
                  }), this.caretPosition = null, this.caretPositionEnd = null, this.keyboardDOM = s, this.options = m({
                    layoutName: "default",
                    theme: "hg-theme-default",
                    inputName: "default",
                    preventMouseDownDefault: !1,
                    enableLayoutCandidates: !0,
                    excludeFromLayout: {}
                  }, l), this.keyboardPluginClasses = "", c.bindMethods(t, this);
                  var d = this.options.inputName,
                      h = void 0 === d ? this.defaultName : d;
                  if (this.input = {}, this.input[h] = "", this.keyboardDOMClass = a, this.buttonElements = {}, window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), this.currentInstanceName = this.utilities.camelCase(this.keyboardDOMClass), window.SimpleKeyboardInstances[this.currentInstanceName] = this, this.allKeyboardInstances = window.SimpleKeyboardInstances, this.keyboardInstanceNames = Object.keys(window.SimpleKeyboardInstances), this.isFirstKeyboardInstance = this.keyboardInstanceNames[0] === this.currentInstanceName, this.physicalKeyboard = new f({
                    dispatch: this.dispatch,
                    getOptions: this.getOptions
                  }), this.candidateBox = this.options.enableLayoutCandidates ? new p({
                    utilities: this.utilities
                  }) : null, !this.keyboardDOM) throw console.warn('".'.concat(a, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
                  this.render(), this.modules = {}, this.loadModules();
                }
              }

              var e, n, r;
              return e = t, (n = [{
                key: "setCaretPosition",
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                  this.caretPosition = t, this.caretPositionEnd = e;
                }
              }, {
                key: "getInputCandidates",
                value: function value(t) {
                  var e = this,
                      n = this.options.layoutCandidates;
                  if (!n || "object" !== g(n)) return {};
                  var r = Object.keys(n).filter(function (n) {
                    var r = t.substring(0, e.getCaretPositionEnd() || 0) || t,
                        o = new RegExp("".concat(n, "$"), "gi");
                    return !!h(r.matchAll(o)).length;
                  });

                  if (r.length > 1) {
                    var o = r.sort(function (t, e) {
                      return e.length - t.length;
                    })[0];
                    return {
                      candidateKey: o,
                      candidateValue: n[o]
                    };
                  }

                  if (r.length) {
                    var i = r[0];
                    return {
                      candidateKey: i,
                      candidateValue: n[i]
                    };
                  }

                  return {};
                }
              }, {
                key: "showCandidatesBox",
                value: function value(t, e, n) {
                  var r = this;
                  this.candidateBox && this.candidateBox.show({
                    candidateValue: e,
                    targetElement: n,
                    onSelect: function onSelect(e, n) {
                      var o = r.getInput(r.options.inputName, !0),
                          i = r.getCaretPositionEnd() || 0,
                          a = o.substring(0, i || 0) || o,
                          s = new RegExp("".concat(t, "$"), "gi"),
                          u = a.replace(s, e),
                          c = o.replace(a, u),
                          l = u.length - a.length,
                          f = (i || o.length) + l;
                      f < 0 && (f = 0), r.setInput(c, r.options.inputName, !0), r.setCaretPosition(f), "function" == typeof r.options.onChange && r.options.onChange(r.getInput(r.options.inputName, !0), n), "function" == typeof r.options.onChangeAll && r.options.onChangeAll(r.getAllInputs(), n);
                    }
                  });
                }
              }, {
                key: "handleButtonClicked",
                value: function value(t, e) {
                  var n = this.options,
                      r = n.inputName,
                      o = void 0 === r ? this.defaultName : r,
                      i = n.debug;

                  if ("{//}" !== t) {
                    this.input[o] || (this.input[o] = "");
                    var a = this.utilities.getUpdatedInput(t, this.input[o], this.caretPosition, this.caretPositionEnd);
                    if (this.utilities.isStandardButton(t) && this.activeInputElement && this.input[o] && this.input[o] === a && 0 === this.caretPosition && this.caretPositionEnd === a.length) return this.setInput("", this.options.inputName, !0), this.setCaretPosition(0), this.activeInputElement.value = "", this.activeInputElement.setSelectionRange(0, 0), void this.handleButtonClicked(t, e);

                    if ("function" == typeof this.options.onKeyPress && this.options.onKeyPress(t, e), this.input[o] !== a && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(a))) {
                      if (this.options.maxLength && this.utilities.handleMaxLength(this.input, a)) return;
                      var s = this.utilities.getUpdatedInput(t, this.input[o], this.caretPosition, this.caretPositionEnd, !0);

                      if (this.setInput(s, this.options.inputName, !0), i && console.log("Input changed:", this.getAllInputs()), this.options.debug && console.log("Caret at: ", this.getCaretPosition(), this.getCaretPositionEnd(), "(".concat(this.keyboardDOMClass, ")")), this.options.syncInstanceInputs && this.syncInstanceInputs(), "function" == typeof this.options.onChange && this.options.onChange(this.getInput(this.options.inputName, !0), e), "function" == typeof this.options.onChangeAll && this.options.onChangeAll(this.getAllInputs(), e), null != e && e.target && this.options.enableLayoutCandidates) {
                        var u,
                            c = this.getInputCandidates(a),
                            l = c.candidateKey,
                            f = c.candidateValue;
                        l && f ? this.showCandidatesBox(l, f, this.keyboardDOM) : null === (u = this.candidateBox) || void 0 === u || u.destroy();
                      }
                    }

                    i && console.log("Key pressed:", t);
                  }
                }
              }, {
                key: "handleButtonMouseDown",
                value: function value(t, e) {
                  var n = this;
                  e && (this.options.preventMouseDownDefault && e.preventDefault(), this.options.stopMouseDownPropagation && e.stopPropagation(), e.target.classList.add(this.activeButtonClass)), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.isMouseHold = !0, this.options.disableButtonHold || (this.holdTimeout = window.setTimeout(function () {
                    (n.isMouseHold && (!t.includes("{") && !t.includes("}") || "{delete}" === t || "{backspace}" === t || "{bksp}" === t || "{space}" === t || "{tab}" === t) || "{arrowright}" === t || "{arrowleft}" === t || "{arrowup}" === t || "{arrowdown}" === t) && (n.options.debug && console.log("Button held:", t), n.handleButtonHold(t)), clearTimeout(n.holdTimeout);
                  }, 500));
                }
              }, {
                key: "handleButtonMouseUp",
                value: function value(t, e) {
                  var n = this;
                  e && (this.options.preventMouseUpDefault && e.preventDefault && e.preventDefault(), this.options.stopMouseUpPropagation && e.stopPropagation && e.stopPropagation(), !(e.target === this.keyboardDOM || e.target && this.keyboardDOM.contains(e.target) || this.candidateBox && this.candidateBox.candidateBoxElement && (e.target === this.candidateBox.candidateBoxElement || e.target && this.candidateBox.candidateBoxElement.contains(e.target))) && this.candidateBox && this.candidateBox.destroy()), this.recurseButtons(function (t) {
                    t.classList.remove(n.activeButtonClass);
                  }), this.isMouseHold = !1, this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), t && "function" == typeof this.options.onKeyReleased && this.options.onKeyReleased(t);
                }
              }, {
                key: "handleKeyboardContainerMouseDown",
                value: function value(t) {
                  this.options.preventMouseDownDefault && t.preventDefault();
                }
              }, {
                key: "handleButtonHold",
                value: function value(t) {
                  var e = this;
                  this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = window.setTimeout(function () {
                    e.isMouseHold ? (e.handleButtonClicked(t), e.handleButtonHold(t)) : clearTimeout(e.holdInteractionTimeout);
                  }, 100);
                }
              }, {
                key: "syncInstanceInputs",
                value: function value() {
                  var t = this;
                  this.dispatch(function (e) {
                    e.replaceInput(t.input), e.setCaretPosition(t.caretPosition, t.caretPositionEnd);
                  });
                }
              }, {
                key: "clearInput",
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName;
                  this.input[t] = "", this.setCaretPosition(0), this.options.syncInstanceInputs && this.syncInstanceInputs();
                }
              }, {
                key: "getInput",
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName,
                      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  return this.options.syncInstanceInputs && !e && this.syncInstanceInputs(), this.options.rtl ? "‫" + this.input[t].replace("‫", "").replace("‬", "") + "‬" : this.input[t];
                }
              }, {
                key: "getAllInputs",
                value: function value() {
                  var t = this,
                      e = {};
                  return Object.keys(this.input).forEach(function (n) {
                    e[n] = t.getInput(n, !0);
                  }), e;
                }
              }, {
                key: "setInput",
                value: function value(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.inputName || this.defaultName,
                      n = arguments.length > 2 ? arguments[2] : void 0;
                  this.input[e] = t, !n && this.options.syncInstanceInputs && this.syncInstanceInputs();
                }
              }, {
                key: "replaceInput",
                value: function value(t) {
                  this.input = t;
                }
              }, {
                key: "setOptions",
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      e = this.changedOptions(t);
                  this.options = Object.assign(this.options, t), e.length && (this.options.debug && console.log("changedOptions", e), this.onSetOptions(e), this.render());
                }
              }, {
                key: "changedOptions",
                value: function value(t) {
                  var e = this;
                  return Object.keys(t).filter(function (n) {
                    return JSON.stringify(t[n]) !== JSON.stringify(e.options[n]);
                  });
                }
              }, {
                key: "onSetOptions",
                value: function value() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                  t.includes("layoutName") && this.candidateBox && this.candidateBox.destroy(), (t.includes("layoutCandidatesPageSize") || t.includes("layoutCandidates")) && this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = new p({
                    utilities: this.utilities
                  }));
                }
              }, {
                key: "resetRows",
                value: function value() {
                  this.keyboardRowsDOM && this.keyboardRowsDOM.remove(), this.keyboardDOM.className = this.keyboardDOMClass, this.buttonElements = {};
                }
              }, {
                key: "dispatch",
                value: function value(t) {
                  if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
                  return Object.keys(window.SimpleKeyboardInstances).forEach(function (e) {
                    t(window.SimpleKeyboardInstances[e], e);
                  });
                }
              }, {
                key: "addButtonTheme",
                value: function value(t, e) {
                  var n = this;
                  e && t && (t.split(" ").forEach(function (r) {
                    e.split(" ").forEach(function (e) {
                      n.options.buttonTheme || (n.options.buttonTheme = []);
                      var o = !1;
                      n.options.buttonTheme.map(function (t) {
                        if (null != t && t.class.split(" ").includes(e)) {
                          o = !0;
                          var n = t.buttons.split(" ");
                          n.includes(r) || (o = !0, n.push(r), t.buttons = n.join(" "));
                        }

                        return t;
                      }), o || n.options.buttonTheme.push({
                        class: e,
                        buttons: t
                      });
                    });
                  }), this.render());
                }
              }, {
                key: "removeButtonTheme",
                value: function value(t, e) {
                  var n = this;
                  if (!t && !e) return this.options.buttonTheme = [], void this.render();
                  t && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (t.split(" ").forEach(function (t) {
                    var r, o;
                    null === (r = n.options) || void 0 === r || null === (o = r.buttonTheme) || void 0 === o || o.map(function (r, o) {
                      if (r && e && e.includes(r.class) || !e) {
                        var i,
                            a,
                            s = null === (i = r) || void 0 === i ? void 0 : i.buttons.split(" ").filter(function (e) {
                          return e !== t;
                        });
                        r && null != s && s.length ? r.buttons = s.join(" ") : (null === (a = n.options.buttonTheme) || void 0 === a || a.splice(o, 1), r = null);
                      }

                      return r;
                    });
                  }), this.render());
                }
              }, {
                key: "getButtonElement",
                value: function value(t) {
                  var e,
                      n = this.buttonElements[t];
                  return n && (e = n.length > 1 ? n : n[0]), e;
                }
              }, {
                key: "inputPatternIsValid",
                value: function value(t) {
                  var e,
                      n = this.options.inputPattern;

                  if ((e = n instanceof RegExp ? n : n[this.options.inputName || this.defaultName]) && t) {
                    var r = e.test(t);
                    return this.options.debug && console.log('inputPattern ("'.concat(e, '"): ').concat(r ? "passed" : "did not pass!")), r;
                  }

                  return !0;
                }
              }, {
                key: "setEventListeners",
                value: function value() {
                  !this.isFirstKeyboardInstance && this.allKeyboardInstances || (this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")")), document.addEventListener("keyup", this.handleKeyUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchend", this.handleTouchEnd), document.addEventListener("select", this.handleSelect), document.addEventListener("selectionchange", this.handleSelectionChange));
                }
              }, {
                key: "handleKeyUp",
                value: function value(t) {
                  this.caretEventHandler(t), this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyUp(t);
                }
              }, {
                key: "handleKeyDown",
                value: function value(t) {
                  this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyDown(t);
                }
              }, {
                key: "handleMouseUp",
                value: function value(t) {
                  this.caretEventHandler(t);
                }
              }, {
                key: "handleTouchEnd",
                value: function value(t) {
                  this.caretEventHandler(t);
                }
              }, {
                key: "handleSelect",
                value: function value(t) {
                  this.caretEventHandler(t);
                }
              }, {
                key: "handleSelectionChange",
                value: function value(t) {
                  this.caretEventHandler(t);
                }
              }, {
                key: "caretEventHandler",
                value: function value(t) {
                  var e,
                      n = this;
                  t.target.tagName && (e = t.target.tagName.toLowerCase()), this.dispatch(function (r) {
                    var o = t.target === r.keyboardDOM || t.target && r.keyboardDOM.contains(t.target);
                    r.isMouseHold && (r.isMouseHold = !1), ("textarea" === e || "input" === e && ["text", "search", "url", "tel", "password"].includes(t.target.type)) && !r.options.disableCaretPositioning ? (r.setCaretPosition(t.target.selectionStart, t.target.selectionEnd), n.activeInputElement = t.target, r.options.debug && console.log("Caret at: ", r.getCaretPosition(), r.getCaretPositionEnd(), t && t.target.tagName.toLowerCase(), "(".concat(r.keyboardDOMClass, ")"))) : !r.options.disableCaretPositioning && o || "selectionchange" === (null == t ? void 0 : t.type) || (r.setCaretPosition(null), n.activeInputElement = null, r.options.debug && console.log('Caret position reset due to "'.concat(null == t ? void 0 : t.type, '" event'), t));
                  });
                }
              }, {
                key: "recurseButtons",
                value: function value(t) {
                  var e = this;
                  t && Object.keys(this.buttonElements).forEach(function (n) {
                    return e.buttonElements[n].forEach(t);
                  });
                }
              }, {
                key: "destroy",
                value: function value() {
                  this.options.debug && console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName)), document.removeEventListener("keyup", this.handleKeyUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleTouchEnd), document.removeEventListener("select", this.handleSelect), document.removeEventListener("selectionchange", this.handleSelectionChange), document.onpointerup = null, document.ontouchend = null, document.ontouchcancel = null, document.onmouseup = null, this.recurseButtons(function (t) {
                    t && (t.onpointerdown = null, t.onpointerup = null, t.onpointercancel = null, t.ontouchstart = null, t.ontouchend = null, t.ontouchcancel = null, t.onclick = null, t.onmousedown = null, t.onmouseup = null, t.remove(), t = null);
                  }), this.keyboardDOM.onpointerdown = null, this.keyboardDOM.ontouchstart = null, this.keyboardDOM.onmousedown = null, this.resetRows(), this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = null), this.activeInputElement = null, this.keyboardDOM.innerHTML = "", window.SimpleKeyboardInstances[this.currentInstanceName] = null, delete window.SimpleKeyboardInstances[this.currentInstanceName], this.initialized = !1;
                }
              }, {
                key: "getButtonThemeClasses",
                value: function value(t) {
                  var e = this.options.buttonTheme,
                      n = [];
                  return Array.isArray(e) && e.forEach(function (e) {
                    if (e && e.class && "string" == typeof e.class && e.buttons && "string" == typeof e.buttons) {
                      var r = e.class.split(" ");
                      e.buttons.split(" ").includes(t) && (n = [].concat(h(n), h(r)));
                    } else console.warn('Incorrect "buttonTheme". Please check the documentation.', e);
                  }), n;
                }
              }, {
                key: "setDOMButtonAttributes",
                value: function value(t, e) {
                  var n = this.options.buttonAttributes;
                  Array.isArray(n) && n.forEach(function (n) {
                    n.attribute && "string" == typeof n.attribute && n.value && "string" == typeof n.value && n.buttons && "string" == typeof n.buttons ? n.buttons.split(" ").includes(t) && e(n.attribute, n.value) : console.warn('Incorrect "buttonAttributes". Please check the documentation.', n);
                  });
                }
              }, {
                key: "onTouchDeviceDetected",
                value: function value() {
                  this.processAutoTouchEvents(), this.disableContextualWindow();
                }
              }, {
                key: "disableContextualWindow",
                value: function value() {
                  window.oncontextmenu = function (t) {
                    if (t.target.classList.contains("hg-button")) return t.preventDefault(), t.stopPropagation(), !1;
                  };
                }
              }, {
                key: "processAutoTouchEvents",
                value: function value() {
                  this.options.autoUseTouchEvents && (this.options.useTouchEvents = !0, this.options.debug && console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."));
                }
              }, {
                key: "onInit",
                value: function value() {
                  this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.setEventListeners(), "function" == typeof this.options.onInit && this.options.onInit(this);
                }
              }, {
                key: "beforeFirstRender",
                value: function value() {
                  this.utilities.isTouchDevice() && this.onTouchDeviceDetected(), "function" == typeof this.options.beforeFirstRender && this.options.beforeFirstRender(this), this.isFirstKeyboardInstance && this.utilities.pointerEventsSupported() && !this.options.useTouchEvents && !this.options.useMouseEvents && this.options.debug && console.log("Using PointerEvents as it is supported by this browser"), this.options.useTouchEvents && this.options.debug && console.log("useTouchEvents has been enabled. Only touch events will be used.");
                }
              }, {
                key: "beforeRender",
                value: function value() {
                  "function" == typeof this.options.beforeRender && this.options.beforeRender(this);
                }
              }, {
                key: "onRender",
                value: function value() {
                  "function" == typeof this.options.onRender && this.options.onRender(this);
                }
              }, {
                key: "onModulesLoaded",
                value: function value() {
                  "function" == typeof this.options.onModulesLoaded && this.options.onModulesLoaded(this);
                }
              }, {
                key: "loadModules",
                value: function value() {
                  var t = this;
                  Array.isArray(this.options.modules) && (this.options.modules.forEach(function (e) {
                    var n = new e(t);
                    n.init && n.init(t);
                  }), this.keyboardPluginClasses = "modules-loaded", this.render(), this.onModulesLoaded());
                }
              }, {
                key: "getModuleProp",
                value: function value(t, e) {
                  return !!this.modules[t] && this.modules[t][e];
                }
              }, {
                key: "getModulesList",
                value: function value() {
                  return Object.keys(this.modules);
                }
              }, {
                key: "parseRowDOMContainers",
                value: function value(t, e, n, r) {
                  var o = this,
                      i = Array.from(t.children),
                      a = 0;
                  return i.length && n.forEach(function (n, s) {
                    var u = r[s];
                    if (!(u && u > n)) return !1;
                    var c = n - a,
                        l = u - a,
                        f = document.createElement("div");
                    f.className += "hg-button-container";
                    var d = "".concat(o.options.layoutName, "-r").concat(e, "c").concat(s);
                    f.setAttribute("data-skUID", d);
                    var p = i.splice(c, l - c + 1);
                    a = l - c, p.forEach(function (t) {
                      return f.appendChild(t);
                    }), i.splice(c, 0, f), t.innerHTML = "", i.forEach(function (e) {
                      return t.appendChild(e);
                    }), o.options.debug && console.log("rowDOMContainer", p, c, l, a + 1);
                  }), t;
                }
              }, {
                key: "render",
                value: function value() {
                  var t = this;
                  this.resetRows(), this.initialized || this.beforeFirstRender(), this.beforeRender();
                  var e = "hg-layout-".concat(this.options.layoutName),
                      n = this.options.layout || {
                    default: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", ".com @ {space}"],
                    shift: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}", "{tab} Q W E R T Y U I O P { } |", '{lock} A S D F G H J K L : " {enter}', "{shift} Z X C V B N M < > ? {shift}", ".com @ {space}"]
                  },
                      r = this.options.useTouchEvents || !1,
                      o = r ? "hg-touch-events" : "",
                      i = this.options.useMouseEvents || !1,
                      a = this.options.disableRowButtonContainers;
                  this.keyboardDOM.className = this.getKeyboardClassString(this.options.theme, e, this.keyboardPluginClasses, o), this.keyboardRowsDOM = document.createElement("div"), this.keyboardRowsDOM.className = "hg-rows", n[this.options.layoutName || this.defaultName].forEach(function (e, n) {
                    var o = e.split(" ");
                    t.options.excludeFromLayout && t.options.excludeFromLayout[t.options.layoutName || t.defaultName] && (o = o.filter(function (e) {
                      return t.options.excludeFromLayout && !t.options.excludeFromLayout[t.options.layoutName || t.defaultName].includes(e);
                    }));
                    var s = document.createElement("div");
                    s.className += "hg-row";
                    var u = [],
                        c = [];
                    o.forEach(function (e, o) {
                      var l,
                          f = !a && "string" == typeof e && e.length > 1 && 0 === e.indexOf("["),
                          d = !a && "string" == typeof e && e.length > 1 && e.indexOf("]") === e.length - 1;
                      f && (u.push(o), e = e.replace(/\[/g, "")), d && (c.push(o), e = e.replace(/\]/g, ""));
                      var p = t.utilities.getButtonClass(e),
                          v = t.utilities.getButtonDisplayName(e, t.options.display, t.options.mergeDisplay),
                          g = t.options.useButtonTag ? "button" : "div",
                          y = document.createElement(g);
                      y.className += "hg-button ".concat(p), (l = y.classList).add.apply(l, h(t.getButtonThemeClasses(e))), t.setDOMButtonAttributes(e, function (t, e) {
                        y.setAttribute(t, e);
                      }), t.activeButtonClass = "hg-activeButton", !t.utilities.pointerEventsSupported() || r || i ? r ? (y.ontouchstart = function (n) {
                        t.handleButtonClicked(e, n), t.handleButtonMouseDown(e, n);
                      }, y.ontouchend = function (n) {
                        t.handleButtonMouseUp(e, n);
                      }, y.ontouchcancel = function (n) {
                        t.handleButtonMouseUp(e, n);
                      }) : (y.onclick = function (n) {
                        t.isMouseHold = !1, t.handleButtonClicked(e, n);
                      }, y.onmousedown = function (n) {
                        t.handleButtonMouseDown(e, n);
                      }, y.onmouseup = function (n) {
                        t.handleButtonMouseUp(e, n);
                      }) : (y.onpointerdown = function (n) {
                        t.handleButtonClicked(e, n), t.handleButtonMouseDown(e, n);
                      }, y.onpointerup = function (n) {
                        t.handleButtonMouseUp(e, n);
                      }, y.onpointercancel = function (n) {
                        t.handleButtonMouseUp(e, n);
                      }), y.setAttribute("data-skBtn", e);
                      var m = "".concat(t.options.layoutName, "-r").concat(n, "b").concat(o);
                      y.setAttribute("data-skBtnUID", m);
                      var b = document.createElement("span");
                      b.innerHTML = v, y.appendChild(b), t.buttonElements[e] || (t.buttonElements[e] = []), t.buttonElements[e].push(y), s.appendChild(y);
                    }), s = t.parseRowDOMContainers(s, n, u, c), t.keyboardRowsDOM.appendChild(s);
                  }), this.keyboardDOM.appendChild(this.keyboardRowsDOM), this.onRender(), this.initialized || (this.initialized = !0, !this.utilities.pointerEventsSupported() || r || i ? r ? (document.ontouchend = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, document.ontouchcancel = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, this.keyboardDOM.ontouchstart = function (e) {
                    return t.handleKeyboardContainerMouseDown(e);
                  }) : r || (document.onmouseup = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, this.keyboardDOM.onmousedown = function (e) {
                    return t.handleKeyboardContainerMouseDown(e);
                  }) : (document.onpointerup = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, this.keyboardDOM.onpointerdown = function (e) {
                    return t.handleKeyboardContainerMouseDown(e);
                  }), this.onInit());
                }
              }]) && x(e.prototype, n), r && x(e, r), t;
            }();
          }(), r;
        }();
      },
      698: function _(e) {
        "use strict";

        e.exports = t;
      }
    },
        n = {};

    function r(t) {
      var o = n[t];
      if (void 0 !== o) return o.exports;
      var i = n[t] = {
        exports: {}
      };
      return e[t].call(i.exports, i, i.exports, r), i.exports;
    }

    r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, {
        a: e
      }), e;
    }, r.d = function (t, e) {
      for (var n in e) {
        r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: e[n]
        });
      }
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    };
    var o = {};
    return function () {
      "use strict";

      r.r(o), r.d(o, {
        default: function _default() {
          return c;
        }
      });
      r(752);
      var t = r(698),
          e = r(86),
          n = r.n(e);

      function i(t, e) {
        var n = Object.keys(t);

        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })), n.push.apply(n, r);
        }

        return n;
      }

      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? i(Object(n), !0).forEach(function (e) {
            s(t, e, n[e]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
        }

        return t;
      }

      function s(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }

      var u = function u(t) {
        return a(a({}, t), {}, {
          keyboardRef: null
        });
      },
          c = function c(e) {
        var r = e.baseClass || "react-simple-keyboard",
            o = t.useRef(null),
            i = t.useRef(null),
            s = t.useRef(e);
        return t.useEffect(function () {
          var t = function (t) {
            return a(a({}, t), {}, {
              theme: "simple-keyboard ".concat(t.theme || "hg-theme-default")
            });
          }(e);

          o.current || (o.current = !0, t.debug && console.log("ReactSimpleKeyboard: Init"), i.current = new (n())(".".concat(r), t), t.keyboardRef && t.keyboardRef(i.current));

          var c = function (t, e) {
            var n = u(e),
                r = u(t);
            return Object.keys(n).filter(function (t) {
              return n[t] !== r[t];
            });
          }(s.current, t);

          if (c.length) {
            var l = i.current;
            s.current = t, null == l || l.setOptions(t), t.debug && console.log("ReactSimpleKeyboard - setOptions called due to updated props:", c);
          }
        }, [o, r, s, e]), t.createElement("div", {
          className: r
        });
      };
    }(), o;
  }();
});

/***/ })

}]);
//# sourceMappingURL=ae29c6db-446fabb0062d0532aaa8.js.map