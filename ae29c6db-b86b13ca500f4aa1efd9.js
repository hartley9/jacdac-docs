(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7919],{

/***/ 81751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * 
 *   react-simple-keyboard v3.2.82
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
                o = Object,
                r = String.prototype.trim || function () {
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
              for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], o = 0, i = n.length; o < i; o++) {
                this.push(n[o]);
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
                  o = e.length,
                  r = !1;

              do {
                t = e[n] + "", ~s(this, t) || (this.push(t), r = !0);
              } while (++n < o);

              r && this._updateClassName();
            }, c.remove = function () {
              var t,
                  e,
                  n = arguments,
                  o = 0,
                  r = n.length,
                  i = !1;

              do {
                for (t = n[o] + "", e = s(this, t); ~e;) {
                  this.splice(e, 1), i = !0, e = s(this, t);
                }
              } while (++o < r);

              i && this._updateClassName();
            }, c.toggle = function (t, e) {
              var n = this.contains(t),
                  o = n ? !0 !== e && "remove" : !1 !== e && "add";
              return o && this[o](t), !0 === e || !1 === e ? e : !n;
            }, c.replace = function (t, e) {
              var n = s(t + "");
              ~n && (this.splice(n, 1, e), this._updateClassName());
            }, c.toString = function () {
              return this.join(" ");
            }, o.defineProperty) {
              var f = {
                get: l,
                enumerable: !0,
                configurable: !0
              };

              try {
                o.defineProperty(n, e, f);
              } catch (t) {
                void 0 !== t.number && -2146823252 !== t.number || (f.enumerable = !1, o.defineProperty(n, e, f));
              }
            } else o.prototype.__defineGetter__ && n.__defineGetter__(e, l);
          }
        }(self), function () {
          "use strict";

          var t = document.createElement("_");

          if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var e = function e(t) {
              var e = DOMTokenList.prototype[t];

              DOMTokenList.prototype[t] = function (t) {
                var n,
                    o = arguments.length;

                for (n = 0; n < o; n++) {
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
                o = n.indexOf(t + "");
            ~o && (n = n.slice(o), this.remove.apply(this, n), this.add(e), this.add.apply(this, n.slice(1)));
          }), t = null;
        }());
      },
      86: function _(t) {
        /*!
         * 
         *   simple-keyboard v3.2.56
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
            3099: function _(t) {
              t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                return t;
              };
            },
            6077: function _(t, e, n) {
              var o = n(111);

              t.exports = function (t) {
                if (!o(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                return t;
              };
            },
            1223: function _(t, e, n) {
              var o = n(5112),
                  r = n(30),
                  i = n(3070),
                  a = o("unscopables"),
                  s = Array.prototype;
              null == s[a] && i.f(s, a, {
                configurable: !0,
                value: r(null)
              }), t.exports = function (t) {
                s[a][t] = !0;
              };
            },
            1530: function _(t, e, n) {
              "use strict";

              var o = n(8710).charAt;

              t.exports = function (t, e, n) {
                return e + (n ? o(t, e).length : 1);
              };
            },
            9670: function _(t, e, n) {
              var o = n(111);

              t.exports = function (t) {
                if (!o(t)) throw TypeError(String(t) + " is not an object");
                return t;
              };
            },
            8533: function _(t, e, n) {
              "use strict";

              var o = n(2092).forEach,
                  r = n(9341)("forEach");
              t.exports = r ? [].forEach : function (t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
              };
            },
            8457: function _(t, e, n) {
              "use strict";

              var o = n(9974),
                  r = n(7908),
                  i = n(3411),
                  a = n(7659),
                  s = n(7466),
                  u = n(6135),
                  c = n(8554),
                  l = n(1246);

              t.exports = function (t) {
                var e,
                    n,
                    f,
                    p,
                    d,
                    h,
                    v = r(t),
                    g = "function" == typeof this ? this : Array,
                    y = arguments.length,
                    m = y > 1 ? arguments[1] : void 0,
                    b = void 0 !== m,
                    x = l(v),
                    w = 0;
                if (b && (m = o(m, y > 2 ? arguments[2] : void 0, 2)), null == x || g == Array && a(x)) for (n = new g(e = s(v.length)); e > w; w++) {
                  h = b ? m(v[w], w) : v[w], u(n, w, h);
                } else for (d = (p = c(v, x)).next, n = new g(); !(f = d.call(p)).done; w++) {
                  h = b ? i(p, m, [f.value, w], !0) : f.value, u(n, w, h);
                }
                return n.length = w, n;
              };
            },
            1318: function _(t, e, n) {
              var o = n(5656),
                  r = n(7466),
                  i = n(1400),
                  a = function a(t) {
                return function (e, n, a) {
                  var s,
                      u = o(e),
                      c = r(u.length),
                      l = i(a, c);

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
              var o = n(9974),
                  r = n(8361),
                  i = n(7908),
                  a = n(7466),
                  s = n(5417),
                  u = [].push,
                  c = function c(t) {
                var e = 1 == t,
                    n = 2 == t,
                    c = 3 == t,
                    l = 4 == t,
                    f = 6 == t,
                    p = 7 == t,
                    d = 5 == t || f;
                return function (h, v, g, y) {
                  for (var m, b, x = i(h), w = r(x), O = o(v, g, 3), E = a(w.length), S = 0, k = y || s, C = e ? k(h, E) : n || p ? k(h, 0) : void 0; E > S; S++) {
                    if ((d || S in w) && (b = O(m = w[S], S, x), t)) if (e) C[S] = b;else if (b) switch (t) {
                      case 3:
                        return !0;

                      case 5:
                        return m;

                      case 6:
                        return S;

                      case 2:
                        u.call(C, m);
                    } else switch (t) {
                      case 4:
                        return !1;

                      case 7:
                        u.call(C, m);
                    }
                  }

                  return f ? -1 : c || l ? l : C;
                };
              };

              t.exports = {
                forEach: c(0),
                map: c(1),
                filter: c(2),
                some: c(3),
                every: c(4),
                find: c(5),
                findIndex: c(6),
                filterReject: c(7)
              };
            },
            1194: function _(t, e, n) {
              var o = n(7293),
                  r = n(5112),
                  i = n(7392),
                  a = r("species");

              t.exports = function (t) {
                return i >= 51 || !o(function () {
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

              var o = n(7293);

              t.exports = function (t, e) {
                var n = [][t];
                return !!n && o(function () {
                  n.call(null, e || function () {
                    throw 1;
                  }, 1);
                });
              };
            },
            3671: function _(t, e, n) {
              var o = n(3099),
                  r = n(7908),
                  i = n(8361),
                  a = n(7466),
                  s = function s(t) {
                return function (e, n, s, u) {
                  o(n);
                  var c = r(e),
                      l = i(c),
                      f = a(c.length),
                      p = t ? f - 1 : 0,
                      d = t ? -1 : 1;
                  if (s < 2) for (;;) {
                    if (p in l) {
                      u = l[p], p += d;
                      break;
                    }

                    if (p += d, t ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value");
                  }

                  for (; t ? p >= 0 : f > p; p += d) {
                    p in l && (u = n(u, l[p], p, c));
                  }

                  return u;
                };
              };

              t.exports = {
                left: s(!1),
                right: s(!0)
              };
            },
            4362: function _(t) {
              var e = Math.floor,
                  n = function n(t, i) {
                var a = t.length,
                    s = e(a / 2);
                return a < 8 ? o(t, i) : r(n(t.slice(0, s), i), n(t.slice(s), i), i);
              },
                  o = function o(t, e) {
                for (var n, o, r = t.length, i = 1; i < r;) {
                  for (o = i, n = t[i]; o && e(t[o - 1], n) > 0;) {
                    t[o] = t[--o];
                  }

                  o !== i++ && (t[o] = n);
                }

                return t;
              },
                  r = function r(t, e, n) {
                for (var o = t.length, r = e.length, i = 0, a = 0, s = []; i < o || a < r;) {
                  i < o && a < r ? s.push(n(t[i], e[a]) <= 0 ? t[i++] : e[a++]) : s.push(i < o ? t[i++] : e[a++]);
                }

                return s;
              };

              t.exports = n;
            },
            7475: function _(t, e, n) {
              var o = n(111),
                  r = n(3157),
                  i = n(5112)("species");

              t.exports = function (t) {
                var e;
                return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) ? o(e) && null === (e = e[i]) && (e = void 0) : e = void 0), void 0 === e ? Array : e;
              };
            },
            5417: function _(t, e, n) {
              var o = n(7475);

              t.exports = function (t, e) {
                return new (o(t))(0 === e ? 0 : e);
              };
            },
            3411: function _(t, e, n) {
              var o = n(9670),
                  r = n(9212);

              t.exports = function (t, e, n, i) {
                try {
                  return i ? e(o(n)[0], n[1]) : e(n);
                } catch (e) {
                  r(t, "throw", e);
                }
              };
            },
            7072: function _(t, e, n) {
              var o = n(5112)("iterator"),
                  r = !1;

              try {
                var i = 0,
                    a = {
                  next: function next() {
                    return {
                      done: !!i++
                    };
                  },
                  return: function _return() {
                    r = !0;
                  }
                };
                a[o] = function () {
                  return this;
                }, Array.from(a, function () {
                  throw 2;
                });
              } catch (t) {}

              t.exports = function (t, e) {
                if (!e && !r) return !1;
                var n = !1;

                try {
                  var i = {};
                  i[o] = function () {
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
            4326: function _(t) {
              var e = {}.toString;

              t.exports = function (t) {
                return e.call(t).slice(8, -1);
              };
            },
            648: function _(t, e, n) {
              var o = n(1694),
                  r = n(4326),
                  i = n(5112)("toStringTag"),
                  a = "Arguments" == r(function () {
                return arguments;
              }());
              t.exports = o ? r : function (t) {
                var e, n, o;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                }(e = Object(t), i)) ? n : a ? r(e) : "Object" == (o = r(e)) && "function" == typeof e.callee ? "Arguments" : o;
              };
            },
            9920: function _(t, e, n) {
              var o = n(6656),
                  r = n(3887),
                  i = n(1236),
                  a = n(3070);

              t.exports = function (t, e) {
                for (var n = r(e), s = a.f, u = i.f, c = 0; c < n.length; c++) {
                  var l = n[c];
                  o(t, l) || s(t, l, u(e, l));
                }
              };
            },
            4964: function _(t, e, n) {
              var o = n(5112)("match");

              t.exports = function (t) {
                var e = /./;

                try {
                  "/./"[t](e);
                } catch (n) {
                  try {
                    return e[o] = !1, "/./"[t](e);
                  } catch (t) {}
                }

                return !1;
              };
            },
            8544: function _(t, e, n) {
              var o = n(7293);
              t.exports = !o(function () {
                function t() {}

                return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
              });
            },
            4994: function _(t, e, n) {
              "use strict";

              var o = n(3383).IteratorPrototype,
                  r = n(30),
                  i = n(9114),
                  a = n(8003),
                  s = n(7497),
                  u = function u() {
                return this;
              };

              t.exports = function (t, e, n) {
                var c = e + " Iterator";
                return t.prototype = r(o, {
                  next: i(1, n)
                }), a(t, c, !1, !0), s[c] = u, t;
              };
            },
            8880: function _(t, e, n) {
              var o = n(9781),
                  r = n(3070),
                  i = n(9114);
              t.exports = o ? function (t, e, n) {
                return r.f(t, e, i(1, n));
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

              var o = n(4948),
                  r = n(3070),
                  i = n(9114);

              t.exports = function (t, e, n) {
                var a = o(e);
                a in t ? r.f(t, a, i(0, n)) : t[a] = n;
              };
            },
            654: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(4994),
                  i = n(9518),
                  a = n(7674),
                  s = n(8003),
                  u = n(8880),
                  c = n(1320),
                  l = n(5112),
                  f = n(1913),
                  p = n(7497),
                  d = n(3383),
                  h = d.IteratorPrototype,
                  v = d.BUGGY_SAFARI_ITERATORS,
                  g = l("iterator"),
                  y = "keys",
                  m = "values",
                  b = "entries",
                  x = function x() {
                return this;
              };

              t.exports = function (t, e, n, l, d, w, O) {
                r(n, e, l);

                var E,
                    S,
                    k,
                    C = function C(t) {
                  if (t === d && T) return T;
                  if (!v && t in A) return A[t];

                  switch (t) {
                    case y:
                    case m:
                    case b:
                      return function () {
                        return new n(this, t);
                      };
                  }

                  return function () {
                    return new n(this);
                  };
                },
                    I = e + " Iterator",
                    P = !1,
                    A = t.prototype,
                    M = A[g] || A["@@iterator"] || d && A[d],
                    T = !v && M || C(d),
                    j = "Array" == e && A.entries || M;

                if (j && (E = i(j.call(new t()))) !== Object.prototype && E.next && (f || i(E) === h || (a ? a(E, h) : "function" != typeof E[g] && u(E, g, x)), s(E, I, !0, !0), f && (p[I] = x)), d == m && M && M.name !== m && (P = !0, T = function T() {
                  return M.call(this);
                }), f && !O || A[g] === T || u(A, g, T), p[e] = T, d) if (S = {
                  values: C(m),
                  keys: w ? T : C(y),
                  entries: C(b)
                }, O) for (k in S) {
                  (v || P || !(k in A)) && c(A, k, S[k]);
                } else o({
                  target: e,
                  proto: !0,
                  forced: v || P
                }, S);
                return S;
              };
            },
            7235: function _(t, e, n) {
              var o = n(857),
                  r = n(6656),
                  i = n(6061),
                  a = n(3070).f;

              t.exports = function (t) {
                var e = o.Symbol || (o.Symbol = {});
                r(e, t) || a(e, t, {
                  value: i.f(t)
                });
              };
            },
            9781: function _(t, e, n) {
              var o = n(7293);
              t.exports = !o(function () {
                return 7 != Object.defineProperty({}, 1, {
                  get: function get() {
                    return 7;
                  }
                })[1];
              });
            },
            317: function _(t, e, n) {
              var o = n(7854),
                  r = n(111),
                  i = o.document,
                  a = r(i) && r(i.createElement);

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
              var o = n(317)("span").classList,
                  r = o && o.constructor && o.constructor.prototype;
              t.exports = r === Object.prototype ? void 0 : r;
            },
            8886: function _(t, e, n) {
              var o = n(8113).match(/firefox\/(\d+)/i);
              t.exports = !!o && +o[1];
            },
            256: function _(t, e, n) {
              var o = n(8113);
              t.exports = /MSIE|Trident/.test(o);
            },
            5268: function _(t, e, n) {
              var o = n(4326),
                  r = n(7854);
              t.exports = "process" == o(r.process);
            },
            8113: function _(t, e, n) {
              var o = n(5005);
              t.exports = o("navigator", "userAgent") || "";
            },
            7392: function _(t, e, n) {
              var o,
                  r,
                  i = n(7854),
                  a = n(8113),
                  s = i.process,
                  u = i.Deno,
                  c = s && s.versions || u && u.version,
                  l = c && c.v8;
              l ? r = (o = l.split("."))[0] < 4 ? 1 : o[0] + o[1] : a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (r = o[1]), t.exports = r && +r;
            },
            8008: function _(t, e, n) {
              var o = n(8113).match(/AppleWebKit\/(\d+)\./);
              t.exports = !!o && +o[1];
            },
            748: function _(t) {
              t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            },
            2109: function _(t, e, n) {
              var o = n(7854),
                  r = n(1236).f,
                  i = n(8880),
                  a = n(1320),
                  s = n(3505),
                  u = n(9920),
                  c = n(4705);

              t.exports = function (t, e) {
                var n,
                    l,
                    f,
                    p,
                    d,
                    h = t.target,
                    v = t.global,
                    g = t.stat;
                if (n = v ? o : g ? o[h] || s(h, {}) : (o[h] || {}).prototype) for (l in e) {
                  if (p = e[l], f = t.noTargetGet ? (d = r(n, l)) && d.value : n[l], !c(v ? l : h + (g ? "." : "#") + l, t.forced) && void 0 !== f) {
                    if (typeof p == typeof f) continue;
                    u(p, f);
                  }

                  (t.sham || f && f.sham) && i(p, "sham", !0), a(n, l, p, t);
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
              var o = n(1320),
                  r = n(2261),
                  i = n(7293),
                  a = n(5112),
                  s = n(8880),
                  u = a("species"),
                  c = RegExp.prototype;

              t.exports = function (t, e, n, l) {
                var f = a(t),
                    p = !i(function () {
                  var e = {};
                  return e[f] = function () {
                    return 7;
                  }, 7 != ""[t](e);
                }),
                    d = p && !i(function () {
                  var e = !1,
                      n = /a/;
                  return "split" === t && ((n = {}).constructor = {}, n.constructor[u] = function () {
                    return n;
                  }, n.flags = "", n[f] = /./[f]), n.exec = function () {
                    return e = !0, null;
                  }, n[f](""), !e;
                });

                if (!p || !d || n) {
                  var h = /./[f],
                      v = e(f, ""[t], function (t, e, n, o, i) {
                    var a = e.exec;
                    return a === r || a === c.exec ? p && !i ? {
                      done: !0,
                      value: h.call(e, n, o)
                    } : {
                      done: !0,
                      value: t.call(n, e, o)
                    } : {
                      done: !1
                    };
                  });
                  o(String.prototype, t, v[0]), o(c, f, v[1]);
                }

                l && s(c[f], "sham", !0);
              };
            },
            9974: function _(t, e, n) {
              var o = n(3099);

              t.exports = function (t, e, n) {
                if (o(t), void 0 === e) return t;

                switch (n) {
                  case 0:
                    return function () {
                      return t.call(e);
                    };

                  case 1:
                    return function (n) {
                      return t.call(e, n);
                    };

                  case 2:
                    return function (n, o) {
                      return t.call(e, n, o);
                    };

                  case 3:
                    return function (n, o, r) {
                      return t.call(e, n, o, r);
                    };
                }

                return function () {
                  return t.apply(e, arguments);
                };
              };
            },
            5005: function _(t, e, n) {
              var o = n(7854),
                  r = function r(t) {
                return "function" == typeof t ? t : void 0;
              };

              t.exports = function (t, e) {
                return arguments.length < 2 ? r(o[t]) : o[t] && o[t][e];
              };
            },
            1246: function _(t, e, n) {
              var o = n(648),
                  r = n(7497),
                  i = n(5112)("iterator");

              t.exports = function (t) {
                if (null != t) return t[i] || t["@@iterator"] || r[o(t)];
              };
            },
            8554: function _(t, e, n) {
              var o = n(9670),
                  r = n(1246);

              t.exports = function (t, e) {
                var n = arguments.length < 2 ? r(t) : e;
                if ("function" != typeof n) throw TypeError(String(t) + " is not iterable");
                return o(n.call(t));
              };
            },
            647: function _(t, e, n) {
              var o = n(7908),
                  r = Math.floor,
                  i = "".replace,
                  a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                  s = /\$([$&'`]|\d{1,2})/g;

              t.exports = function (t, e, n, u, c, l) {
                var f = n + t.length,
                    p = u.length,
                    d = s;
                return void 0 !== c && (c = o(c), d = a), i.call(l, d, function (o, i) {
                  var a;

                  switch (i.charAt(0)) {
                    case "$":
                      return "$";

                    case "&":
                      return t;

                    case "`":
                      return e.slice(0, n);

                    case "'":
                      return e.slice(f);

                    case "<":
                      a = c[i.slice(1, -1)];
                      break;

                    default:
                      var s = +i;
                      if (0 === s) return o;

                      if (s > p) {
                        var l = r(s / 10);
                        return 0 === l ? o : l <= p ? void 0 === u[l - 1] ? i.charAt(1) : u[l - 1] + i.charAt(1) : o;
                      }

                      a = u[s - 1];
                  }

                  return void 0 === a ? "" : a;
                });
              };
            },
            7854: function _(t, e, n) {
              var o = function o(t) {
                return t && t.Math == Math && t;
              };

              t.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n.g && n.g) || function () {
                return this;
              }() || Function("return this")();
            },
            6656: function _(t, e, n) {
              var o = n(7908),
                  r = {}.hasOwnProperty;

              t.exports = Object.hasOwn || function (t, e) {
                return r.call(o(t), e);
              };
            },
            3501: function _(t) {
              t.exports = {};
            },
            490: function _(t, e, n) {
              var o = n(5005);
              t.exports = o("document", "documentElement");
            },
            4664: function _(t, e, n) {
              var o = n(9781),
                  r = n(7293),
                  i = n(317);
              t.exports = !o && !r(function () {
                return 7 != Object.defineProperty(i("div"), "a", {
                  get: function get() {
                    return 7;
                  }
                }).a;
              });
            },
            8361: function _(t, e, n) {
              var o = n(7293),
                  r = n(4326),
                  i = "".split;
              t.exports = o(function () {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function (t) {
                return "String" == r(t) ? i.call(t, "") : Object(t);
              } : Object;
            },
            9587: function _(t, e, n) {
              var o = n(111),
                  r = n(7674);

              t.exports = function (t, e, n) {
                var i, a;
                return r && "function" == typeof (i = e.constructor) && i !== n && o(a = i.prototype) && a !== n.prototype && r(t, a), t;
              };
            },
            2788: function _(t, e, n) {
              var o = n(5465),
                  r = Function.toString;
              "function" != typeof o.inspectSource && (o.inspectSource = function (t) {
                return r.call(t);
              }), t.exports = o.inspectSource;
            },
            9909: function _(t, e, n) {
              var o,
                  r,
                  i,
                  a = n(8536),
                  s = n(7854),
                  u = n(111),
                  c = n(8880),
                  l = n(6656),
                  f = n(5465),
                  p = n(6200),
                  d = n(3501),
                  h = "Object already initialized",
                  v = s.WeakMap;

              if (a || f.state) {
                var g = f.state || (f.state = new v()),
                    y = g.get,
                    m = g.has,
                    b = g.set;
                o = function o(t, e) {
                  if (m.call(g, t)) throw new TypeError(h);
                  return e.facade = t, b.call(g, t, e), e;
                }, r = function r(t) {
                  return y.call(g, t) || {};
                }, i = function i(t) {
                  return m.call(g, t);
                };
              } else {
                var x = p("state");
                d[x] = !0, o = function o(t, e) {
                  if (l(t, x)) throw new TypeError(h);
                  return e.facade = t, c(t, x, e), e;
                }, r = function r(t) {
                  return l(t, x) ? t[x] : {};
                }, i = function i(t) {
                  return l(t, x);
                };
              }

              t.exports = {
                set: o,
                get: r,
                has: i,
                enforce: function enforce(t) {
                  return i(t) ? r(t) : o(t, {});
                },
                getterFor: function getterFor(t) {
                  return function (e) {
                    var n;
                    if (!u(e) || (n = r(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n;
                  };
                }
              };
            },
            7659: function _(t, e, n) {
              var o = n(5112),
                  r = n(7497),
                  i = o("iterator"),
                  a = Array.prototype;

              t.exports = function (t) {
                return void 0 !== t && (r.Array === t || a[i] === t);
              };
            },
            3157: function _(t, e, n) {
              var o = n(4326);

              t.exports = Array.isArray || function (t) {
                return "Array" == o(t);
              };
            },
            4705: function _(t, e, n) {
              var o = n(7293),
                  r = /#|\.prototype\./,
                  i = function i(t, e) {
                var n = s[a(t)];
                return n == c || n != u && ("function" == typeof e ? o(e) : !!e);
              },
                  a = i.normalize = function (t) {
                return String(t).replace(r, ".").toLowerCase();
              },
                  s = i.data = {},
                  u = i.NATIVE = "N",
                  c = i.POLYFILL = "P";

              t.exports = i;
            },
            8730: function _(t, e, n) {
              var o = n(111),
                  r = Math.floor;

              t.exports = function (t) {
                return !o(t) && isFinite(t) && r(t) === t;
              };
            },
            111: function _(t) {
              t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
              };
            },
            1913: function _(t) {
              t.exports = !1;
            },
            7850: function _(t, e, n) {
              var o = n(111),
                  r = n(4326),
                  i = n(5112)("match");

              t.exports = function (t) {
                var e;
                return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t));
              };
            },
            2190: function _(t, e, n) {
              var o = n(5005),
                  r = n(3307);
              t.exports = r ? function (t) {
                return "symbol" == typeof t;
              } : function (t) {
                var e = o("Symbol");
                return "function" == typeof e && Object(t) instanceof e;
              };
            },
            9212: function _(t, e, n) {
              var o = n(9670);

              t.exports = function (t, e, n) {
                var r, i;
                o(t);

                try {
                  if (void 0 === (r = t.return)) {
                    if ("throw" === e) throw n;
                    return n;
                  }

                  r = r.call(t);
                } catch (t) {
                  i = !0, r = t;
                }

                if ("throw" === e) throw n;
                if (i) throw r;
                return o(r), n;
              };
            },
            3383: function _(t, e, n) {
              "use strict";

              var o,
                  r,
                  i,
                  a = n(7293),
                  s = n(30),
                  u = n(9518),
                  c = n(8880),
                  l = n(5112),
                  f = n(1913),
                  p = l("iterator"),
                  d = !1;
              [].keys && ("next" in (i = [].keys()) ? (r = u(u(i))) !== Object.prototype && (o = r) : d = !0), null == o || a(function () {
                var t = {};
                return o[p].call(t) !== t;
              }) ? o = {} : f && (o = s(o)), "function" != typeof o[p] && c(o, p, function () {
                return this;
              }), t.exports = {
                IteratorPrototype: o,
                BUGGY_SAFARI_ITERATORS: d
              };
            },
            7497: function _(t) {
              t.exports = {};
            },
            133: function _(t, e, n) {
              var o = n(7392),
                  r = n(7293);
              t.exports = !!Object.getOwnPropertySymbols && !r(function () {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && o && o < 41;
              });
            },
            8536: function _(t, e, n) {
              var o = n(7854),
                  r = n(2788),
                  i = o.WeakMap;
              t.exports = "function" == typeof i && /native code/.test(r(i));
            },
            3929: function _(t, e, n) {
              var o = n(7850);

              t.exports = function (t) {
                if (o(t)) throw TypeError("The method doesn't accept regular expressions");
                return t;
              };
            },
            1574: function _(t, e, n) {
              "use strict";

              var o = n(9781),
                  r = n(7293),
                  i = n(1956),
                  a = n(5181),
                  s = n(5296),
                  u = n(7908),
                  c = n(8361),
                  l = Object.assign,
                  f = Object.defineProperty;
              t.exports = !l || r(function () {
                if (o && 1 !== l({
                  b: 1
                }, l(f({}, "a", {
                  enumerable: !0,
                  get: function get() {
                    f(this, "b", {
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
                    r = "abcdefghijklmnopqrst";
                return t[n] = 7, r.split("").forEach(function (t) {
                  e[t] = t;
                }), 7 != l({}, t)[n] || i(l({}, e)).join("") != r;
              }) ? function (t, e) {
                for (var n = u(t), r = arguments.length, l = 1, f = a.f, p = s.f; r > l;) {
                  for (var d, h = c(arguments[l++]), v = f ? i(h).concat(f(h)) : i(h), g = v.length, y = 0; g > y;) {
                    d = v[y++], o && !p.call(h, d) || (n[d] = h[d]);
                  }
                }

                return n;
              } : l;
            },
            30: function _(t, e, n) {
              var o,
                  r = n(9670),
                  i = n(6048),
                  a = n(748),
                  s = n(3501),
                  u = n(490),
                  c = n(317),
                  l = n(6200)("IE_PROTO"),
                  f = function f() {},
                  p = function p(t) {
                return "<script>" + t + "<\/script>";
              },
                  d = function d(t) {
                t.write(p("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e;
              },
                  _h = function h() {
                try {
                  o = new ActiveXObject("htmlfile");
                } catch (t) {}

                var t, e;
                _h = "undefined" != typeof document ? document.domain && o ? d(o) : ((e = c("iframe")).style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : d(o);

                for (var n = a.length; n--;) {
                  delete _h.prototype[a[n]];
                }

                return _h();
              };

              s[l] = !0, t.exports = Object.create || function (t, e) {
                var n;
                return null !== t ? (f.prototype = r(t), n = new f(), f.prototype = null, n[l] = t) : n = _h(), void 0 === e ? n : i(n, e);
              };
            },
            6048: function _(t, e, n) {
              var o = n(9781),
                  r = n(3070),
                  i = n(9670),
                  a = n(1956);
              t.exports = o ? Object.defineProperties : function (t, e) {
                i(t);

                for (var n, o = a(e), s = o.length, u = 0; s > u;) {
                  r.f(t, n = o[u++], e[n]);
                }

                return t;
              };
            },
            3070: function _(t, e, n) {
              var o = n(9781),
                  r = n(4664),
                  i = n(9670),
                  a = n(4948),
                  s = Object.defineProperty;
              e.f = o ? s : function (t, e, n) {
                if (i(t), e = a(e), i(n), r) try {
                  return s(t, e, n);
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t;
              };
            },
            1236: function _(t, e, n) {
              var o = n(9781),
                  r = n(5296),
                  i = n(9114),
                  a = n(5656),
                  s = n(4948),
                  u = n(6656),
                  c = n(4664),
                  l = Object.getOwnPropertyDescriptor;
              e.f = o ? l : function (t, e) {
                if (t = a(t), e = s(e), c) try {
                  return l(t, e);
                } catch (t) {}
                if (u(t, e)) return i(!r.f.call(t, e), t[e]);
              };
            },
            1156: function _(t, e, n) {
              var o = n(5656),
                  r = n(8006).f,
                  i = {}.toString,
                  a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

              t.exports.f = function (t) {
                return a && "[object Window]" == i.call(t) ? function (t) {
                  try {
                    return r(t);
                  } catch (t) {
                    return a.slice();
                  }
                }(t) : r(o(t));
              };
            },
            8006: function _(t, e, n) {
              var o = n(6324),
                  r = n(748).concat("length", "prototype");

              e.f = Object.getOwnPropertyNames || function (t) {
                return o(t, r);
              };
            },
            5181: function _(t, e) {
              e.f = Object.getOwnPropertySymbols;
            },
            9518: function _(t, e, n) {
              var o = n(6656),
                  r = n(7908),
                  i = n(6200),
                  a = n(8544),
                  s = i("IE_PROTO"),
                  u = Object.prototype;
              t.exports = a ? Object.getPrototypeOf : function (t) {
                return t = r(t), o(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
              };
            },
            6324: function _(t, e, n) {
              var o = n(6656),
                  r = n(5656),
                  i = n(1318).indexOf,
                  a = n(3501);

              t.exports = function (t, e) {
                var n,
                    s = r(t),
                    u = 0,
                    c = [];

                for (n in s) {
                  !o(a, n) && o(s, n) && c.push(n);
                }

                for (; e.length > u;) {
                  o(s, n = e[u++]) && (~i(c, n) || c.push(n));
                }

                return c;
              };
            },
            1956: function _(t, e, n) {
              var o = n(6324),
                  r = n(748);

              t.exports = Object.keys || function (t) {
                return o(t, r);
              };
            },
            5296: function _(t, e) {
              "use strict";

              var n = {}.propertyIsEnumerable,
                  o = Object.getOwnPropertyDescriptor,
                  r = o && !n.call({
                1: 2
              }, 1);
              e.f = r ? function (t) {
                var e = o(this, t);
                return !!e && e.enumerable;
              } : n;
            },
            9026: function _(t, e, n) {
              "use strict";

              var o = n(1913),
                  r = n(7854),
                  i = n(7293),
                  a = n(8008);
              t.exports = o || !i(function () {
                if (!(a && a < 535)) {
                  var t = Math.random();
                  __defineSetter__.call(null, t, function () {}), delete r[t];
                }
              });
            },
            7674: function _(t, e, n) {
              var o = n(9670),
                  r = n(6077);
              t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var t,
                    e = !1,
                    n = {};

                try {
                  (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array;
                } catch (t) {}

                return function (n, i) {
                  return o(n), r(i), e ? t.call(n, i) : n.__proto__ = i, n;
                };
              }() : void 0);
            },
            288: function _(t, e, n) {
              "use strict";

              var o = n(1694),
                  r = n(648);
              t.exports = o ? {}.toString : function () {
                return "[object " + r(this) + "]";
              };
            },
            2140: function _(t, e, n) {
              var o = n(111);

              t.exports = function (t, e) {
                var n, r;
                if ("string" === e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
                if ("string" !== e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            3887: function _(t, e, n) {
              var o = n(5005),
                  r = n(8006),
                  i = n(5181),
                  a = n(9670);

              t.exports = o("Reflect", "ownKeys") || function (t) {
                var e = r.f(a(t)),
                    n = i.f;
                return n ? e.concat(n(t)) : e;
              };
            },
            857: function _(t, e, n) {
              var o = n(7854);
              t.exports = o;
            },
            1320: function _(t, e, n) {
              var o = n(7854),
                  r = n(8880),
                  i = n(6656),
                  a = n(3505),
                  s = n(2788),
                  u = n(9909),
                  c = u.get,
                  l = u.enforce,
                  f = String(String).split("String");
              (t.exports = function (t, e, n, s) {
                var u,
                    c = !!s && !!s.unsafe,
                    p = !!s && !!s.enumerable,
                    d = !!s && !!s.noTargetGet;
                "function" == typeof n && ("string" != typeof e || i(n, "name") || r(n, "name", e), (u = l(n)).source || (u.source = f.join("string" == typeof e ? e : ""))), t !== o ? (c ? !d && t[e] && (p = !0) : delete t[e], p ? t[e] = n : r(t, e, n)) : p ? t[e] = n : a(e, n);
              })(Function.prototype, "toString", function () {
                return "function" == typeof this && c(this).source || s(this);
              });
            },
            7651: function _(t, e, n) {
              var o = n(4326),
                  r = n(2261);

              t.exports = function (t, e) {
                var n = t.exec;

                if ("function" == typeof n) {
                  var i = n.call(t, e);
                  if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                  return i;
                }

                if ("RegExp" !== o(t)) throw TypeError("RegExp#exec called on incompatible receiver");
                return r.call(t, e);
              };
            },
            2261: function _(t, e, n) {
              "use strict";

              var o,
                  r,
                  i = n(1340),
                  a = n(7066),
                  s = n(2999),
                  u = n(2309),
                  c = n(30),
                  l = n(9909).get,
                  f = n(9441),
                  p = n(8173),
                  d = RegExp.prototype.exec,
                  h = u("native-string-replace", String.prototype.replace),
                  _v = d,
                  g = (o = /a/, r = /b*/g, d.call(o, "a"), d.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex),
                  y = s.UNSUPPORTED_Y || s.BROKEN_CARET,
                  m = void 0 !== /()??/.exec("")[1];
              (g || m || y || f || p) && (_v = function v(t) {
                var e,
                    n,
                    o,
                    r,
                    s,
                    u,
                    f,
                    p = this,
                    b = l(p),
                    x = i(t),
                    w = b.raw;
                if (w) return w.lastIndex = p.lastIndex, e = _v.call(w, x), p.lastIndex = w.lastIndex, e;
                var O = b.groups,
                    E = y && p.sticky,
                    S = a.call(p),
                    k = p.source,
                    C = 0,
                    I = x;
                if (E && (-1 === (S = S.replace("y", "")).indexOf("g") && (S += "g"), I = x.slice(p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== x.charAt(p.lastIndex - 1)) && (k = "(?: " + k + ")", I = " " + I, C++), n = new RegExp("^(?:" + k + ")", S)), m && (n = new RegExp("^" + k + "$(?!\\s)", S)), g && (o = p.lastIndex), r = d.call(E ? n : p, I), E ? r ? (r.input = r.input.slice(C), r[0] = r[0].slice(C), r.index = p.lastIndex, p.lastIndex += r[0].length) : p.lastIndex = 0 : g && r && (p.lastIndex = p.global ? r.index + r[0].length : o), m && r && r.length > 1 && h.call(r[0], n, function () {
                  for (s = 1; s < arguments.length - 2; s++) {
                    void 0 === arguments[s] && (r[s] = void 0);
                  }
                }), r && O) for (r.groups = u = c(null), s = 0; s < O.length; s++) {
                  u[(f = O[s])[0]] = r[f[1]];
                }
                return r;
              }), t.exports = _v;
            },
            7066: function _(t, e, n) {
              "use strict";

              var o = n(9670);

              t.exports = function () {
                var t = o(this),
                    e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
              };
            },
            2999: function _(t, e, n) {
              var o = n(7293),
                  r = n(7854).RegExp;
              e.UNSUPPORTED_Y = o(function () {
                var t = r("a", "y");
                return t.lastIndex = 2, null != t.exec("abcd");
              }), e.BROKEN_CARET = o(function () {
                var t = r("^r", "gy");
                return t.lastIndex = 2, null != t.exec("str");
              });
            },
            9441: function _(t, e, n) {
              var o = n(7293),
                  r = n(7854).RegExp;
              t.exports = o(function () {
                var t = r(".", "s");
                return !(t.dotAll && t.exec("\n") && "s" === t.flags);
              });
            },
            8173: function _(t, e, n) {
              var o = n(7293),
                  r = n(7854).RegExp;
              t.exports = o(function () {
                var t = r("(?<a>b)", "g");
                return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
              });
            },
            4488: function _(t) {
              t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t;
              };
            },
            3505: function _(t, e, n) {
              var o = n(7854);

              t.exports = function (t, e) {
                try {
                  Object.defineProperty(o, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                  });
                } catch (n) {
                  o[t] = e;
                }

                return e;
              };
            },
            6340: function _(t, e, n) {
              "use strict";

              var o = n(5005),
                  r = n(3070),
                  i = n(5112),
                  a = n(9781),
                  s = i("species");

              t.exports = function (t) {
                var e = o(t),
                    n = r.f;
                a && e && !e[s] && n(e, s, {
                  configurable: !0,
                  get: function get() {
                    return this;
                  }
                });
              };
            },
            8003: function _(t, e, n) {
              var o = n(3070).f,
                  r = n(6656),
                  i = n(5112)("toStringTag");

              t.exports = function (t, e, n) {
                t && !r(t = n ? t : t.prototype, i) && o(t, i, {
                  configurable: !0,
                  value: e
                });
              };
            },
            6200: function _(t, e, n) {
              var o = n(2309),
                  r = n(9711),
                  i = o("keys");

              t.exports = function (t) {
                return i[t] || (i[t] = r(t));
              };
            },
            5465: function _(t, e, n) {
              var o = n(7854),
                  r = n(3505),
                  i = "__core-js_shared__",
                  a = o[i] || r(i, {});
              t.exports = a;
            },
            2309: function _(t, e, n) {
              var o = n(1913),
                  r = n(5465);
              (t.exports = function (t, e) {
                return r[t] || (r[t] = void 0 !== e ? e : {});
              })("versions", []).push({
                version: "3.17.3",
                mode: o ? "pure" : "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
              });
            },
            6707: function _(t, e, n) {
              var o = n(9670),
                  r = n(3099),
                  i = n(5112)("species");

              t.exports = function (t, e) {
                var n,
                    a = o(t).constructor;
                return void 0 === a || null == (n = o(a)[i]) ? e : r(n);
              };
            },
            8710: function _(t, e, n) {
              var o = n(9958),
                  r = n(1340),
                  i = n(4488),
                  a = function a(t) {
                return function (e, n) {
                  var a,
                      s,
                      u = r(i(e)),
                      c = o(n),
                      l = u.length;
                  return c < 0 || c >= l ? t ? "" : void 0 : (a = u.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === l || (s = u.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? u.charAt(c) : a : t ? u.slice(c, c + 2) : s - 56320 + (a - 55296 << 10) + 65536;
                };
              };

              t.exports = {
                codeAt: a(!1),
                charAt: a(!0)
              };
            },
            6091: function _(t, e, n) {
              var o = n(7293),
                  r = n(1361);

              t.exports = function (t) {
                return o(function () {
                  return !!r[t]() || "​᠎" != "​᠎"[t]() || r[t].name !== t;
                });
              };
            },
            3111: function _(t, e, n) {
              var o = n(4488),
                  r = n(1340),
                  i = "[" + n(1361) + "]",
                  a = RegExp("^" + i + i + "*"),
                  s = RegExp(i + i + "*$"),
                  u = function u(t) {
                return function (e) {
                  var n = r(o(e));
                  return 1 & t && (n = n.replace(a, "")), 2 & t && (n = n.replace(s, "")), n;
                };
              };

              t.exports = {
                start: u(1),
                end: u(2),
                trim: u(3)
              };
            },
            1400: function _(t, e, n) {
              var o = n(9958),
                  r = Math.max,
                  i = Math.min;

              t.exports = function (t, e) {
                var n = o(t);
                return n < 0 ? r(n + e, 0) : i(n, e);
              };
            },
            5656: function _(t, e, n) {
              var o = n(8361),
                  r = n(4488);

              t.exports = function (t) {
                return o(r(t));
              };
            },
            9958: function _(t) {
              var e = Math.ceil,
                  n = Math.floor;

              t.exports = function (t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t);
              };
            },
            7466: function _(t, e, n) {
              var o = n(9958),
                  r = Math.min;

              t.exports = function (t) {
                return t > 0 ? r(o(t), 9007199254740991) : 0;
              };
            },
            7908: function _(t, e, n) {
              var o = n(4488);

              t.exports = function (t) {
                return Object(o(t));
              };
            },
            7593: function _(t, e, n) {
              var o = n(111),
                  r = n(2190),
                  i = n(2140),
                  a = n(5112)("toPrimitive");

              t.exports = function (t, e) {
                if (!o(t) || r(t)) return t;
                var n,
                    s = t[a];

                if (void 0 !== s) {
                  if (void 0 === e && (e = "default"), n = s.call(t, e), !o(n) || r(n)) return n;
                  throw TypeError("Can't convert object to primitive value");
                }

                return void 0 === e && (e = "number"), i(t, e);
              };
            },
            4948: function _(t, e, n) {
              var o = n(7593),
                  r = n(2190);

              t.exports = function (t) {
                var e = o(t, "string");
                return r(e) ? e : String(e);
              };
            },
            1694: function _(t, e, n) {
              var o = {};
              o[n(5112)("toStringTag")] = "z", t.exports = "[object z]" === String(o);
            },
            1340: function _(t, e, n) {
              var o = n(2190);

              t.exports = function (t) {
                if (o(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return String(t);
              };
            },
            9711: function _(t) {
              var e = 0,
                  n = Math.random();

              t.exports = function (t) {
                return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + n).toString(36);
              };
            },
            3307: function _(t, e, n) {
              var o = n(133);
              t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            6061: function _(t, e, n) {
              var o = n(5112);
              e.f = o;
            },
            5112: function _(t, e, n) {
              var o = n(7854),
                  r = n(2309),
                  i = n(6656),
                  a = n(9711),
                  s = n(133),
                  u = n(3307),
                  c = r("wks"),
                  l = o.Symbol,
                  f = u ? l : l && l.withoutSetter || a;

              t.exports = function (t) {
                return i(c, t) && (s || "string" == typeof c[t]) || (s && i(l, t) ? c[t] = l[t] : c[t] = f("Symbol." + t)), c[t];
              };
            },
            1361: function _(t) {
              t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
            },
            2222: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(7293),
                  i = n(3157),
                  a = n(111),
                  s = n(7908),
                  u = n(7466),
                  c = n(6135),
                  l = n(5417),
                  f = n(1194),
                  p = n(5112),
                  d = n(7392),
                  h = p("isConcatSpreadable"),
                  v = 9007199254740991,
                  g = "Maximum allowed index exceeded",
                  y = d >= 51 || !r(function () {
                var t = [];
                return t[h] = !1, t.concat()[0] !== t;
              }),
                  m = f("concat"),
                  b = function b(t) {
                if (!a(t)) return !1;
                var e = t[h];
                return void 0 !== e ? !!e : i(t);
              };

              o({
                target: "Array",
                proto: !0,
                forced: !y || !m
              }, {
                concat: function concat(t) {
                  var e,
                      n,
                      o,
                      r,
                      i,
                      a = s(this),
                      f = l(a, 0),
                      p = 0;

                  for (e = -1, o = arguments.length; e < o; e++) {
                    if (b(i = -1 === e ? a : arguments[e])) {
                      if (p + (r = u(i.length)) > v) throw TypeError(g);

                      for (n = 0; n < r; n++, p++) {
                        n in i && c(f, p, i[n]);
                      }
                    } else {
                      if (p >= v) throw TypeError(g);
                      c(f, p++, i);
                    }
                  }

                  return f.length = p, f;
                }
              });
            },
            7327: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(2092).filter;
              o({
                target: "Array",
                proto: !0,
                forced: !n(1194)("filter")
              }, {
                filter: function filter(t) {
                  return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            1038: function _(t, e, n) {
              var o = n(2109),
                  r = n(8457);
              o({
                target: "Array",
                stat: !0,
                forced: !n(7072)(function (t) {
                  Array.from(t);
                })
              }, {
                from: r
              });
            },
            6699: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(1318).includes,
                  i = n(1223);
              o({
                target: "Array",
                proto: !0
              }, {
                includes: function includes(t) {
                  return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
              }), i("includes");
            },
            2772: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(1318).indexOf,
                  i = n(9341),
                  a = [].indexOf,
                  s = !!a && 1 / [1].indexOf(1, -0) < 0,
                  u = i("indexOf");
              o({
                target: "Array",
                proto: !0,
                forced: s || !u
              }, {
                indexOf: function indexOf(t) {
                  return s ? a.apply(this, arguments) || 0 : r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            6992: function _(t, e, n) {
              "use strict";

              var o = n(5656),
                  r = n(1223),
                  i = n(7497),
                  a = n(9909),
                  s = n(654),
                  u = "Array Iterator",
                  c = a.set,
                  l = a.getterFor(u);
              t.exports = s(Array, "Array", function (t, e) {
                c(this, {
                  type: u,
                  target: o(t),
                  index: 0,
                  kind: e
                });
              }, function () {
                var t = l(this),
                    e = t.target,
                    n = t.kind,
                    o = t.index++;
                return !e || o >= e.length ? (t.target = void 0, {
                  value: void 0,
                  done: !0
                }) : "keys" == n ? {
                  value: o,
                  done: !1
                } : "values" == n ? {
                  value: e[o],
                  done: !1
                } : {
                  value: [o, e[o]],
                  done: !1
                };
              }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
            },
            9600: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(8361),
                  i = n(5656),
                  a = n(9341),
                  s = [].join,
                  u = r != Object,
                  c = a("join", ",");
              o({
                target: "Array",
                proto: !0,
                forced: u || !c
              }, {
                join: function join(t) {
                  return s.call(i(this), void 0 === t ? "," : t);
                }
              });
            },
            1249: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(2092).map;
              o({
                target: "Array",
                proto: !0,
                forced: !n(1194)("map")
              }, {
                map: function map(t) {
                  return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            5827: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(3671).left,
                  i = n(9341),
                  a = n(7392),
                  s = n(5268);
              o({
                target: "Array",
                proto: !0,
                forced: !i("reduce") || !s && a > 79 && a < 83
              }, {
                reduce: function reduce(t) {
                  return r(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            7042: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(111),
                  i = n(3157),
                  a = n(1400),
                  s = n(7466),
                  u = n(5656),
                  c = n(6135),
                  l = n(5112),
                  f = n(1194)("slice"),
                  p = l("species"),
                  d = [].slice,
                  h = Math.max;
              o({
                target: "Array",
                proto: !0,
                forced: !f
              }, {
                slice: function slice(t, e) {
                  var n,
                      o,
                      l,
                      f = u(this),
                      v = s(f.length),
                      g = a(t, v),
                      y = a(void 0 === e ? v : e, v);
                  if (i(f) && ("function" != typeof (n = f.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[p]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return d.call(f, g, y);

                  for (o = new (void 0 === n ? Array : n)(h(y - g, 0)), l = 0; g < y; g++, l++) {
                    g in f && c(o, l, f[g]);
                  }

                  return o.length = l, o;
                }
              });
            },
            2707: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(3099),
                  i = n(7908),
                  a = n(7466),
                  s = n(1340),
                  u = n(7293),
                  c = n(4362),
                  l = n(9341),
                  f = n(8886),
                  p = n(256),
                  d = n(7392),
                  h = n(8008),
                  v = [],
                  g = v.sort,
                  y = u(function () {
                v.sort(void 0);
              }),
                  m = u(function () {
                v.sort(null);
              }),
                  b = l("sort"),
                  x = !u(function () {
                if (d) return d < 70;

                if (!(f && f > 3)) {
                  if (p) return !0;
                  if (h) return h < 603;
                  var t,
                      e,
                      n,
                      o,
                      r = "";

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

                    for (o = 0; o < 47; o++) {
                      v.push({
                        k: e + o,
                        v: n
                      });
                    }
                  }

                  for (v.sort(function (t, e) {
                    return e.v - t.v;
                  }), o = 0; o < v.length; o++) {
                    e = v[o].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);
                  }

                  return "DGBEFHACIJK" !== r;
                }
              });
              o({
                target: "Array",
                proto: !0,
                forced: y || !m || !b || !x
              }, {
                sort: function sort(t) {
                  void 0 !== t && r(t);
                  var e = i(this);
                  if (x) return void 0 === t ? g.call(e) : g.call(e, t);
                  var n,
                      o,
                      u = [],
                      l = a(e.length);

                  for (o = 0; o < l; o++) {
                    o in e && u.push(e[o]);
                  }

                  for (n = (u = c(u, function (t) {
                    return function (e, n) {
                      return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : s(e) > s(n) ? 1 : -1;
                    };
                  }(t))).length, o = 0; o < n;) {
                    e[o] = u[o++];
                  }

                  for (; o < l;) {
                    delete e[o++];
                  }

                  return e;
                }
              });
            },
            561: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(1400),
                  i = n(9958),
                  a = n(7466),
                  s = n(7908),
                  u = n(5417),
                  c = n(6135),
                  l = n(1194)("splice"),
                  f = Math.max,
                  p = Math.min,
                  d = 9007199254740991,
                  h = "Maximum allowed length exceeded";
              o({
                target: "Array",
                proto: !0,
                forced: !l
              }, {
                splice: function splice(t, e) {
                  var n,
                      o,
                      l,
                      v,
                      g,
                      y,
                      m = s(this),
                      b = a(m.length),
                      x = r(t, b),
                      w = arguments.length;
                  if (0 === w ? n = o = 0 : 1 === w ? (n = 0, o = b - x) : (n = w - 2, o = p(f(i(e), 0), b - x)), b + n - o > d) throw TypeError(h);

                  for (l = u(m, o), v = 0; v < o; v++) {
                    (g = x + v) in m && c(l, v, m[g]);
                  }

                  if (l.length = o, n < o) {
                    for (v = x; v < b - o; v++) {
                      y = v + n, (g = v + o) in m ? m[y] = m[g] : delete m[y];
                    }

                    for (v = b; v > b - o + n; v--) {
                      delete m[v - 1];
                    }
                  } else if (n > o) for (v = b - o; v > x; v--) {
                    y = v + n - 1, (g = v + o - 1) in m ? m[y] = m[g] : delete m[y];
                  }

                  for (v = 0; v < n; v++) {
                    m[v + x] = arguments[v + 2];
                  }

                  return m.length = b - o + n, l;
                }
              });
            },
            8309: function _(t, e, n) {
              var o = n(9781),
                  r = n(3070).f,
                  i = Function.prototype,
                  a = i.toString,
                  s = /^\s*function ([^ (]*)/,
                  u = "name";
              o && !(u in i) && r(i, u, {
                configurable: !0,
                get: function get() {
                  try {
                    return a.call(this).match(s)[1];
                  } catch (t) {
                    return "";
                  }
                }
              });
            },
            9653: function _(t, e, n) {
              "use strict";

              var o = n(9781),
                  r = n(7854),
                  i = n(4705),
                  a = n(1320),
                  s = n(6656),
                  u = n(4326),
                  c = n(9587),
                  l = n(2190),
                  f = n(7593),
                  p = n(7293),
                  d = n(30),
                  h = n(8006).f,
                  v = n(1236).f,
                  g = n(3070).f,
                  y = n(3111).trim,
                  m = "Number",
                  b = r.Number,
                  x = b.prototype,
                  w = u(d(x)) == m,
                  O = function O(t) {
                if (l(t)) throw TypeError("Cannot convert a Symbol value to a number");
                var e,
                    n,
                    o,
                    r,
                    i,
                    a,
                    s,
                    u,
                    c = f(t, "number");
                if ("string" == typeof c && c.length > 2) if (43 === (e = (c = y(c)).charCodeAt(0)) || 45 === e) {
                  if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN;
                } else if (48 === e) {
                  switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                      o = 2, r = 49;
                      break;

                    case 79:
                    case 111:
                      o = 8, r = 55;
                      break;

                    default:
                      return +c;
                  }

                  for (a = (i = c.slice(2)).length, s = 0; s < a; s++) {
                    if ((u = i.charCodeAt(s)) < 48 || u > r) return NaN;
                  }

                  return parseInt(i, o);
                }
                return +c;
              };

              if (i(m, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
                for (var E, S = function S(t) {
                  var e = arguments.length < 1 ? 0 : t,
                      n = this;
                  return n instanceof S && (w ? p(function () {
                    x.valueOf.call(n);
                  }) : u(n) != m) ? c(new b(O(e)), n, S) : O(e);
                }, k = o ? h(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), C = 0; k.length > C; C++) {
                  s(b, E = k[C]) && !s(S, E) && g(S, E, v(b, E));
                }

                S.prototype = x, x.constructor = S, a(r, m, S);
              }
            },
            3161: function _(t, e, n) {
              n(2109)({
                target: "Number",
                stat: !0
              }, {
                isInteger: n(8730)
              });
            },
            9601: function _(t, e, n) {
              var o = n(2109),
                  r = n(1574);
              o({
                target: "Object",
                stat: !0,
                forced: Object.assign !== r
              }, {
                assign: r
              });
            },
            9595: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(9781),
                  i = n(9026),
                  a = n(7908),
                  s = n(3099),
                  u = n(3070);
              r && o({
                target: "Object",
                proto: !0,
                forced: i
              }, {
                __defineGetter__: function __defineGetter__(t, e) {
                  u.f(a(this), t, {
                    get: s(e),
                    enumerable: !0,
                    configurable: !0
                  });
                }
              });
            },
            5003: function _(t, e, n) {
              var o = n(2109),
                  r = n(7293),
                  i = n(5656),
                  a = n(1236).f,
                  s = n(9781),
                  u = r(function () {
                a(1);
              });
              o({
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
              var o = n(2109),
                  r = n(9781),
                  i = n(3887),
                  a = n(5656),
                  s = n(1236),
                  u = n(6135);
              o({
                target: "Object",
                stat: !0,
                sham: !r
              }, {
                getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
                  for (var e, n, o = a(t), r = s.f, c = i(o), l = {}, f = 0; c.length > f;) {
                    void 0 !== (n = r(o, e = c[f++])) && u(l, e, n);
                  }

                  return l;
                }
              });
            },
            6210: function _(t, e, n) {
              var o = n(2109),
                  r = n(7293),
                  i = n(1156).f;
              o({
                target: "Object",
                stat: !0,
                forced: r(function () {
                  return !Object.getOwnPropertyNames(1);
                })
              }, {
                getOwnPropertyNames: i
              });
            },
            7941: function _(t, e, n) {
              var o = n(2109),
                  r = n(7908),
                  i = n(1956);
              o({
                target: "Object",
                stat: !0,
                forced: n(7293)(function () {
                  i(1);
                })
              }, {
                keys: function keys(t) {
                  return i(r(t));
                }
              });
            },
            1539: function _(t, e, n) {
              var o = n(1694),
                  r = n(1320),
                  i = n(288);
              o || r(Object.prototype, "toString", i, {
                unsafe: !0
              });
            },
            4603: function _(t, e, n) {
              var o = n(9781),
                  r = n(7854),
                  i = n(4705),
                  a = n(9587),
                  s = n(8880),
                  u = n(3070).f,
                  c = n(8006).f,
                  l = n(7850),
                  f = n(1340),
                  p = n(7066),
                  d = n(2999),
                  h = n(1320),
                  v = n(7293),
                  g = n(6656),
                  y = n(9909).enforce,
                  m = n(6340),
                  b = n(5112),
                  x = n(9441),
                  w = n(8173),
                  O = b("match"),
                  E = r.RegExp,
                  S = E.prototype,
                  k = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
                  C = /a/g,
                  I = /a/g,
                  P = new E(C) !== C,
                  A = d.UNSUPPORTED_Y;

              if (i("RegExp", o && (!P || A || x || w || v(function () {
                return I[O] = !1, E(C) != C || E(I) == I || "/a/i" != E(C, "i");
              })))) {
                for (var M = function M(t, e) {
                  var n,
                      o,
                      r,
                      i,
                      u,
                      c,
                      d = this instanceof M,
                      h = l(t),
                      v = void 0 === e,
                      m = [],
                      b = t;
                  if (!d && h && v && t.constructor === M) return t;
                  if ((h || t instanceof M) && (t = t.source, v && (e = ("flags" in b) ? b.flags : p.call(b))), t = void 0 === t ? "" : f(t), e = void 0 === e ? "" : f(e), b = t, x && ("dotAll" in C) && (o = !!e && e.indexOf("s") > -1) && (e = e.replace(/s/g, "")), n = e, A && ("sticky" in C) && (r = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, "")), w && (t = (i = function (t) {
                    for (var e, n = t.length, o = 0, r = "", i = [], a = {}, s = !1, u = !1, c = 0, l = ""; o <= n; o++) {
                      if ("\\" === (e = t.charAt(o))) e += t.charAt(++o);else if ("]" === e) s = !1;else if (!s) switch (!0) {
                        case "[" === e:
                          s = !0;
                          break;

                        case "(" === e:
                          k.test(t.slice(o + 1)) && (o += 2, u = !0), r += e, c++;
                          continue;

                        case ">" === e && u:
                          if ("" === l || g(a, l)) throw new SyntaxError("Invalid capture group name");
                          a[l] = !0, i.push([l, c]), u = !1, l = "";
                          continue;
                      }
                      u ? l += e : r += e;
                    }

                    return [r, i];
                  }(t))[0], m = i[1]), u = a(E(t, e), d ? this : S, M), (o || r || m.length) && (c = y(u), o && (c.dotAll = !0, c.raw = M(function (t) {
                    for (var e, n = t.length, o = 0, r = "", i = !1; o <= n; o++) {
                      "\\" !== (e = t.charAt(o)) ? i || "." !== e ? ("[" === e ? i = !0 : "]" === e && (i = !1), r += e) : r += "[\\s\\S]" : r += e + t.charAt(++o);
                    }

                    return r;
                  }(t), n)), r && (c.sticky = !0), m.length && (c.groups = m)), t !== b) try {
                    s(u, "source", "" === b ? "(?:)" : b);
                  } catch (t) {}
                  return u;
                }, T = function T(t) {
                  (t in M) || u(M, t, {
                    configurable: !0,
                    get: function get() {
                      return E[t];
                    },
                    set: function set(e) {
                      E[t] = e;
                    }
                  });
                }, j = c(E), N = 0; j.length > N;) {
                  T(j[N++]);
                }

                S.constructor = M, M.prototype = S, h(r, "RegExp", M);
              }

              m("RegExp");
            },
            4916: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(2261);
              o({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== r
              }, {
                exec: r
              });
            },
            9714: function _(t, e, n) {
              "use strict";

              var o = n(1320),
                  r = n(9670),
                  i = n(1340),
                  a = n(7293),
                  s = n(7066),
                  u = "toString",
                  c = RegExp.prototype,
                  l = c.toString,
                  f = a(function () {
                return "/a/b" != l.call({
                  source: "a",
                  flags: "b"
                });
              }),
                  p = l.name != u;
              (f || p) && o(RegExp.prototype, u, function () {
                var t = r(this),
                    e = i(t.source),
                    n = t.flags;
                return "/" + e + "/" + i(void 0 === n && t instanceof RegExp && !("flags" in c) ? s.call(t) : n);
              }, {
                unsafe: !0
              });
            },
            2023: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(3929),
                  i = n(4488),
                  a = n(1340);
              o({
                target: "String",
                proto: !0,
                forced: !n(4964)("includes")
              }, {
                includes: function includes(t) {
                  return !!~a(i(this)).indexOf(a(r(t)), arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            },
            8783: function _(t, e, n) {
              "use strict";

              var o = n(8710).charAt,
                  r = n(1340),
                  i = n(9909),
                  a = n(654),
                  s = "String Iterator",
                  u = i.set,
                  c = i.getterFor(s);
              a(String, "String", function (t) {
                u(this, {
                  type: s,
                  string: r(t),
                  index: 0
                });
              }, function () {
                var t,
                    e = c(this),
                    n = e.string,
                    r = e.index;
                return r >= n.length ? {
                  value: void 0,
                  done: !0
                } : (t = o(n, r), e.index += t.length, {
                  value: t,
                  done: !1
                });
              });
            },
            4723: function _(t, e, n) {
              "use strict";

              var o = n(7007),
                  r = n(9670),
                  i = n(7466),
                  a = n(1340),
                  s = n(4488),
                  u = n(1530),
                  c = n(7651);
              o("match", function (t, e, n) {
                return [function (e) {
                  var n = s(this),
                      o = null == e ? void 0 : e[t];
                  return void 0 !== o ? o.call(e, n) : new RegExp(e)[t](a(n));
                }, function (t) {
                  var o = r(this),
                      s = a(t),
                      l = n(e, o, s);
                  if (l.done) return l.value;
                  if (!o.global) return c(o, s);
                  var f = o.unicode;
                  o.lastIndex = 0;

                  for (var p, d = [], h = 0; null !== (p = c(o, s));) {
                    var v = a(p[0]);
                    d[h] = v, "" === v && (o.lastIndex = u(s, i(o.lastIndex), f)), h++;
                  }

                  return 0 === h ? null : d;
                }];
              });
            },
            5306: function _(t, e, n) {
              "use strict";

              var o = n(7007),
                  r = n(7293),
                  i = n(9670),
                  a = n(9958),
                  s = n(7466),
                  u = n(1340),
                  c = n(4488),
                  l = n(1530),
                  f = n(647),
                  p = n(7651),
                  d = n(5112)("replace"),
                  h = Math.max,
                  v = Math.min,
                  g = "$0" === "a".replace(/./, "$0"),
                  y = !!/./[d] && "" === /./[d]("a", "$0");
              o("replace", function (t, e, n) {
                var o = y ? "$" : "$0";
                return [function (t, n) {
                  var o = c(this),
                      r = null == t ? void 0 : t[d];
                  return void 0 !== r ? r.call(t, o, n) : e.call(u(o), t, n);
                }, function (t, r) {
                  var c = i(this),
                      d = u(t);

                  if ("string" == typeof r && -1 === r.indexOf(o) && -1 === r.indexOf("$<")) {
                    var g = n(e, c, d, r);
                    if (g.done) return g.value;
                  }

                  var y = "function" == typeof r;
                  y || (r = u(r));
                  var m = c.global;

                  if (m) {
                    var b = c.unicode;
                    c.lastIndex = 0;
                  }

                  for (var x = [];;) {
                    var w = p(c, d);
                    if (null === w) break;
                    if (x.push(w), !m) break;
                    "" === u(w[0]) && (c.lastIndex = l(d, s(c.lastIndex), b));
                  }

                  for (var O, E = "", S = 0, k = 0; k < x.length; k++) {
                    w = x[k];

                    for (var C = u(w[0]), I = h(v(a(w.index), d.length), 0), P = [], A = 1; A < w.length; A++) {
                      P.push(void 0 === (O = w[A]) ? O : String(O));
                    }

                    var M = w.groups;

                    if (y) {
                      var T = [C].concat(P, I, d);
                      void 0 !== M && T.push(M);
                      var j = u(r.apply(void 0, T));
                    } else j = f(C, d, I, P, M, r);

                    I >= S && (E += d.slice(S, I) + j, S = I + C.length);
                  }

                  return E + d.slice(S);
                }];
              }, !!r(function () {
                var t = /./;
                return t.exec = function () {
                  var t = [];
                  return t.groups = {
                    a: "7"
                  }, t;
                }, "7" !== "".replace(t, "$<a>");
              }) || !g || y);
            },
            3123: function _(t, e, n) {
              "use strict";

              var o = n(7007),
                  r = n(7850),
                  i = n(9670),
                  a = n(4488),
                  s = n(6707),
                  u = n(1530),
                  c = n(7466),
                  l = n(1340),
                  f = n(7651),
                  p = n(2261),
                  d = n(2999),
                  h = n(7293),
                  v = d.UNSUPPORTED_Y,
                  g = [].push,
                  y = Math.min,
                  m = 4294967295;
              o("split", function (t, e, n) {
                var o;
                return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
                  var o = l(a(this)),
                      i = void 0 === n ? m : n >>> 0;
                  if (0 === i) return [];
                  if (void 0 === t) return [o];
                  if (!r(t)) return e.call(o, t, i);

                  for (var s, u, c, f = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, v = new RegExp(t.source, d + "g"); (s = p.call(v, o)) && !((u = v.lastIndex) > h && (f.push(o.slice(h, s.index)), s.length > 1 && s.index < o.length && g.apply(f, s.slice(1)), c = s[0].length, h = u, f.length >= i));) {
                    v.lastIndex === s.index && v.lastIndex++;
                  }

                  return h === o.length ? !c && v.test("") || f.push("") : f.push(o.slice(h)), f.length > i ? f.slice(0, i) : f;
                } : "0".split(void 0, 0).length ? function (t, n) {
                  return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                } : e, [function (e, n) {
                  var r = a(this),
                      i = null == e ? void 0 : e[t];
                  return void 0 !== i ? i.call(e, r, n) : o.call(l(r), e, n);
                }, function (t, r) {
                  var a = i(this),
                      p = l(t),
                      d = n(o, a, p, r, o !== e);
                  if (d.done) return d.value;
                  var h = s(a, RegExp),
                      g = a.unicode,
                      b = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (v ? "g" : "y"),
                      x = new h(v ? "^(?:" + a.source + ")" : a, b),
                      w = void 0 === r ? m : r >>> 0;
                  if (0 === w) return [];
                  if (0 === p.length) return null === f(x, p) ? [p] : [];

                  for (var O = 0, E = 0, S = []; E < p.length;) {
                    x.lastIndex = v ? 0 : E;
                    var k,
                        C = f(x, v ? p.slice(E) : p);
                    if (null === C || (k = y(c(x.lastIndex + (v ? E : 0)), p.length)) === O) E = u(p, E, g);else {
                      if (S.push(p.slice(O, E)), S.length === w) return S;

                      for (var I = 1; I <= C.length - 1; I++) {
                        if (S.push(C[I]), S.length === w) return S;
                      }

                      E = O = k;
                    }
                  }

                  return S.push(p.slice(O)), S;
                }];
              }, !!h(function () {
                var t = /(?:)/,
                    e = t.exec;

                t.exec = function () {
                  return e.apply(this, arguments);
                };

                var n = "ab".split(t);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
              }), v);
            },
            3210: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(3111).trim;
              o({
                target: "String",
                proto: !0,
                forced: n(6091)("trim")
              }, {
                trim: function trim() {
                  return r(this);
                }
              });
            },
            1817: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(9781),
                  i = n(7854),
                  a = n(6656),
                  s = n(111),
                  u = n(3070).f,
                  c = n(9920),
                  l = i.Symbol;

              if (r && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
                var f = {},
                    p = function p() {
                  var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                      e = this instanceof p ? new l(t) : void 0 === t ? l() : l(t);
                  return "" === t && (f[e] = !0), e;
                };

                c(p, l);
                var d = p.prototype = l.prototype;
                d.constructor = p;
                var h = d.toString,
                    v = "Symbol(test)" == String(l("test")),
                    g = /^Symbol\((.*)\)[^)]+$/;
                u(d, "description", {
                  configurable: !0,
                  get: function get() {
                    var t = s(this) ? this.valueOf() : this,
                        e = h.call(t);
                    if (a(f, t)) return "";
                    var n = v ? e.slice(7, -1) : e.replace(g, "$1");
                    return "" === n ? void 0 : n;
                  }
                }), o({
                  global: !0,
                  forced: !0
                }, {
                  Symbol: p
                });
              }
            },
            2165: function _(t, e, n) {
              n(7235)("iterator");
            },
            2526: function _(t, e, n) {
              "use strict";

              var o = n(2109),
                  r = n(7854),
                  i = n(5005),
                  a = n(1913),
                  s = n(9781),
                  u = n(133),
                  c = n(7293),
                  l = n(6656),
                  f = n(3157),
                  p = n(111),
                  d = n(2190),
                  h = n(9670),
                  v = n(7908),
                  g = n(5656),
                  y = n(4948),
                  m = n(1340),
                  b = n(9114),
                  x = n(30),
                  w = n(1956),
                  O = n(8006),
                  E = n(1156),
                  S = n(5181),
                  k = n(1236),
                  C = n(3070),
                  I = n(5296),
                  P = n(8880),
                  A = n(1320),
                  M = n(2309),
                  T = n(6200),
                  j = n(3501),
                  N = n(9711),
                  D = n(5112),
                  L = n(6061),
                  R = n(7235),
                  B = n(8003),
                  _ = n(9909),
                  K = n(2092).forEach,
                  F = T("hidden"),
                  U = "Symbol",
                  H = D("toPrimitive"),
                  $ = _.set,
                  V = _.getterFor(U),
                  G = Object.prototype,
                  _z = r.Symbol,
                  Y = i("JSON", "stringify"),
                  W = k.f,
                  q = C.f,
                  J = E.f,
                  X = I.f,
                  Q = M("symbols"),
                  Z = M("op-symbols"),
                  tt = M("string-to-symbol-registry"),
                  et = M("symbol-to-string-registry"),
                  nt = M("wks"),
                  ot = r.QObject,
                  rt = !ot || !ot.prototype || !ot.prototype.findChild,
                  it = s && c(function () {
                return 7 != x(q({}, "a", {
                  get: function get() {
                    return q(this, "a", {
                      value: 7
                    }).a;
                  }
                })).a;
              }) ? function (t, e, n) {
                var o = W(G, e);
                o && delete G[e], q(t, e, n), o && t !== G && q(G, e, o);
              } : q,
                  at = function at(t, e) {
                var n = Q[t] = x(_z.prototype);
                return $(n, {
                  type: U,
                  tag: t,
                  description: e
                }), s || (n.description = e), n;
              },
                  st = function st(t, e, n) {
                t === G && st(Z, e, n), h(t);
                var o = y(e);
                return h(n), l(Q, o) ? (n.enumerable ? (l(t, F) && t[F][o] && (t[F][o] = !1), n = x(n, {
                  enumerable: b(0, !1)
                })) : (l(t, F) || q(t, F, b(1, {})), t[F][o] = !0), it(t, o, n)) : q(t, o, n);
              },
                  ut = function ut(t, e) {
                h(t);
                var n = g(e),
                    o = w(n).concat(pt(n));
                return K(o, function (e) {
                  s && !ct.call(n, e) || st(t, e, n[e]);
                }), t;
              },
                  ct = function ct(t) {
                var e = y(t),
                    n = X.call(this, e);
                return !(this === G && l(Q, e) && !l(Z, e)) && (!(n || !l(this, e) || !l(Q, e) || l(this, F) && this[F][e]) || n);
              },
                  lt = function lt(t, e) {
                var n = g(t),
                    o = y(e);

                if (n !== G || !l(Q, o) || l(Z, o)) {
                  var r = W(n, o);
                  return !r || !l(Q, o) || l(n, F) && n[F][o] || (r.enumerable = !0), r;
                }
              },
                  ft = function ft(t) {
                var e = J(g(t)),
                    n = [];
                return K(e, function (t) {
                  l(Q, t) || l(j, t) || n.push(t);
                }), n;
              },
                  pt = function pt(t) {
                var e = t === G,
                    n = J(e ? Z : g(t)),
                    o = [];
                return K(n, function (t) {
                  !l(Q, t) || e && !l(G, t) || o.push(Q[t]);
                }), o;
              };

              u || (A((_z = function z() {
                if (this instanceof _z) throw TypeError("Symbol is not a constructor");

                var t = arguments.length && void 0 !== arguments[0] ? m(arguments[0]) : void 0,
                    e = N(t),
                    n = function n(t) {
                  this === G && n.call(Z, t), l(this, F) && l(this[F], e) && (this[F][e] = !1), it(this, e, b(1, t));
                };

                return s && rt && it(G, e, {
                  configurable: !0,
                  set: n
                }), at(e, t);
              }).prototype, "toString", function () {
                return V(this).tag;
              }), A(_z, "withoutSetter", function (t) {
                return at(N(t), t);
              }), I.f = ct, C.f = st, k.f = lt, O.f = E.f = ft, S.f = pt, L.f = function (t) {
                return at(D(t), t);
              }, s && (q(_z.prototype, "description", {
                configurable: !0,
                get: function get() {
                  return V(this).description;
                }
              }), a || A(G, "propertyIsEnumerable", ct, {
                unsafe: !0
              }))), o({
                global: !0,
                wrap: !0,
                forced: !u,
                sham: !u
              }, {
                Symbol: _z
              }), K(w(nt), function (t) {
                R(t);
              }), o({
                target: U,
                stat: !0,
                forced: !u
              }, {
                for: function _for(t) {
                  var e = m(t);
                  if (l(tt, e)) return tt[e];

                  var n = _z(e);

                  return tt[e] = n, et[n] = e, n;
                },
                keyFor: function keyFor(t) {
                  if (!d(t)) throw TypeError(t + " is not a symbol");
                  if (l(et, t)) return et[t];
                },
                useSetter: function useSetter() {
                  rt = !0;
                },
                useSimple: function useSimple() {
                  rt = !1;
                }
              }), o({
                target: "Object",
                stat: !0,
                forced: !u,
                sham: !s
              }, {
                create: function create(t, e) {
                  return void 0 === e ? x(t) : ut(x(t), e);
                },
                defineProperty: st,
                defineProperties: ut,
                getOwnPropertyDescriptor: lt
              }), o({
                target: "Object",
                stat: !0,
                forced: !u
              }, {
                getOwnPropertyNames: ft,
                getOwnPropertySymbols: pt
              }), o({
                target: "Object",
                stat: !0,
                forced: c(function () {
                  S.f(1);
                })
              }, {
                getOwnPropertySymbols: function getOwnPropertySymbols(t) {
                  return S.f(v(t));
                }
              }), Y && o({
                target: "JSON",
                stat: !0,
                forced: !u || c(function () {
                  var t = _z();

                  return "[null]" != Y([t]) || "{}" != Y({
                    a: t
                  }) || "{}" != Y(Object(t));
                })
              }, {
                stringify: function stringify(t, e, n) {
                  for (var o, r = [t], i = 1; arguments.length > i;) {
                    r.push(arguments[i++]);
                  }

                  if (o = e, (p(e) || void 0 !== t) && !d(t)) return f(e) || (e = function e(t, _e) {
                    if ("function" == typeof o && (_e = o.call(this, t, _e)), !d(_e)) return _e;
                  }), r[1] = e, Y.apply(null, r);
                }
              }), _z.prototype[H] || P(_z.prototype, H, _z.prototype.valueOf), B(_z, U), j[F] = !0;
            },
            4747: function _(t, e, n) {
              var o = n(7854),
                  r = n(8324),
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

              for (var c in r) {
                u(o[c] && o[c].prototype);
              }

              u(i);
            },
            3948: function _(t, e, n) {
              var o = n(7854),
                  r = n(8324),
                  i = n(8509),
                  a = n(6992),
                  s = n(8880),
                  u = n(5112),
                  c = u("iterator"),
                  l = u("toStringTag"),
                  f = a.values,
                  p = function p(t, e) {
                if (t) {
                  if (t[c] !== f) try {
                    s(t, c, f);
                  } catch (e) {
                    t[c] = f;
                  }
                  if (t[l] || s(t, l, e), r[e]) for (var n in a) {
                    if (t[n] !== a[n]) try {
                      s(t, n, a[n]);
                    } catch (e) {
                      t[n] = a[n];
                    }
                  }
                }
              };

              for (var d in r) {
                p(o[d] && o[d].prototype, d);
              }

              p(i, "DOMTokenList");
            }
          },
              e = {};

          function n(o) {
            var r = e[o];
            if (void 0 !== r) return r.exports;
            var i = e[o] = {
              exports: {}
            };
            return t[o](i, i.exports, n), i.exports;
          }

          n.d = function (t, e) {
            for (var o in e) {
              n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
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
          var o = {};
          return function () {
            "use strict";

            function t(t) {
              return function (t) {
                if (Array.isArray(t)) return r(t);
              }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
              }(t) || e(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }

            function e(t, e) {
              if (t) {
                if ("string" == typeof t) return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
              }
            }

            function r(t, e) {
              (null == e || e > t.length) && (e = t.length);

              for (var n = 0, o = new Array(e); n < e; n++) {
                o[n] = t[n];
              }

              return o;
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
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
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

            n.r(o), n.d(o, {
              default: function _default() {
                return O;
              }
            }), n(3210), n(4916), n(5306), n(2772), n(8309), n(3123), n(1539), n(9714), n(561), n(9600), n(9595), n(7042), "undefined" == typeof Element || "remove" in Element.prototype || (Element.prototype.remove = function () {
              this.parentNode && this.parentNode.removeChild(this);
            }), "undefined" != typeof self && "document" in self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function (t) {
              if ("Element" in t) {
                var e = "classList",
                    n = t.Element.prototype,
                    o = Object,
                    r = String.prototype.trim || function () {
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
                  for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], o = 0, i = n.length; o < i; o++) {
                    this.push(n[o]);
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
                      o = e.length,
                      r = !1;

                  do {
                    t = e[n] + "", ~s(this, t) || (this.push(t), r = !0);
                  } while (++n < o);

                  r && this._updateClassName();
                }, c.remove = function () {
                  var t,
                      e,
                      n = arguments,
                      o = 0,
                      r = n.length,
                      i = !1;

                  do {
                    for (t = n[o] + "", e = s(this, t); ~e;) {
                      this.splice(e, 1), i = !0, e = s(this, t);
                    }
                  } while (++o < r);

                  i && this._updateClassName();
                }, c.toggle = function (t, e) {
                  var n = this.contains(t),
                      o = n ? !0 !== e && "remove" : !1 !== e && "add";
                  return o && this[o](t), !0 === e || !1 === e ? e : !n;
                }, c.replace = function (t, e) {
                  var n = s(t + "");
                  ~n && (this.splice(n, 1, e), this._updateClassName());
                }, c.toString = function () {
                  return this.join(" ");
                }, o.defineProperty) {
                  var f = {
                    get: l,
                    enumerable: !0,
                    configurable: !0
                  };

                  try {
                    o.defineProperty(n, e, f);
                  } catch (t) {
                    void 0 !== t.number && -2146823252 !== t.number || (f.enumerable = !1, o.defineProperty(n, e, f));
                  }
                } else o.prototype.__defineGetter__ && n.__defineGetter__(e, l);
              }
            }(self), function () {
              var t = document.createElement("_");

              if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                var e = function e(t) {
                  var e = DOMTokenList.prototype[t];

                  DOMTokenList.prototype[t] = function (t) {
                    var n,
                        o = arguments.length;

                    for (n = 0; n < o; n++) {
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
                    o = n.indexOf(t + "");
                ~o && (n = n.slice(o), this.remove.apply(this, n), this.add(e), this.add.apply(this, n.slice(1)));
              }), t = null;
            }()), n(7327), n(2222), n(7941), n(4603), n(2707), n(6699), n(2023), n(4747), n(9601), n(1249), n(1038), n(8783), n(2526), n(5003), n(9337), n(1817), n(2165), n(6992), n(3948), n(3161), n(9653), n(4723), n(5827), n(6210);

            var u = function () {
              function n(t) {
                var e = t.getOptions,
                    o = t.getCaretPosition,
                    r = t.getCaretPositionEnd,
                    i = t.dispatch;
                !function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, n), s(this, "isStandardButton", function (t) {
                  return t && !("{" === t[0] && "}" === t[t.length - 1]);
                }), this.getOptions = e, this.getCaretPosition = o, this.getCaretPositionEnd = r, this.dispatch = i, n.bindMethods(n, this);
              }

              var o, r, u;
              return o = n, u = [{
                key: "bindMethods",
                value: function value(t, n) {
                  var o,
                      r = function (t, n) {
                    var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

                    if (!o) {
                      if (Array.isArray(t) || (o = e(t)) || n && t && "number" == typeof t.length) {
                        o && (t = o);

                        var r = 0,
                            i = function i() {};

                        return {
                          s: i,
                          n: function n() {
                            return r >= t.length ? {
                              done: !0
                            } : {
                              done: !1,
                              value: t[r++]
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
                        o = o.call(t);
                      },
                      n: function n() {
                        var t = o.next();
                        return s = t.done, t;
                      },
                      e: function e(t) {
                        u = !0, a = t;
                      },
                      f: function f() {
                        try {
                          s || null == o.return || o.return();
                        } finally {
                          if (u) throw a;
                        }
                      }
                    };
                  }(Object.getOwnPropertyNames(t.prototype));

                  try {
                    for (r.s(); !(o = r.n()).done;) {
                      var i = o.value;
                      "constructor" === i || "bindMethods" === i || (n[i] = n[i].bind(n));
                    }
                  } catch (t) {
                    r.e(t);
                  } finally {
                    r.f();
                  }
                }
              }], (r = [{
                key: "getButtonType",
                value: function value(t) {
                  return t.includes("{") && t.includes("}") && "{//}" !== t ? "functionBtn" : "standardBtn";
                }
              }, {
                key: "getButtonClass",
                value: function value(t) {
                  var e = this.getButtonType(t),
                      n = t.replace("{", "").replace("}", ""),
                      o = "";
                  return "standardBtn" !== e && (o = " hg-button-".concat(n)), "hg-".concat(e).concat(o);
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
                  var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n,
                      r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                      i = this.getOptions(),
                      a = [n, o, r],
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
                      o = this.getCaretPosition();
                  return null != o && (e ? o > 0 && (o -= t) : o += t), n.debug && console.log("Caret at:", o), o;
                }
              }, {
                key: "addStringAt",
                value: function value(t, e) {
                  var n,
                      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length,
                      i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                  return o || 0 === o ? (n = [t.slice(0, o), e, t.slice(r)].join(""), this.isMaxLengthReached() || i && this.updateCaretPos(e.length)) : n = t + e, n;
                }
              }, {
                key: "removeAt",
                value: function value(t) {
                  var e,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length,
                      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  if (0 === n && 0 === o) return t;

                  if (n === o) {
                    var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                    n && n >= 0 ? t.substring(n - 2, n).match(i) ? (e = t.substr(0, n - 2) + t.substr(n), r && this.updateCaretPos(2, !0)) : (e = t.substr(0, n - 1) + t.substr(n), r && this.updateCaretPos(1, !0)) : t.slice(-2).match(i) ? (e = t.slice(0, -2), r && this.updateCaretPos(2, !0)) : (e = t.slice(0, -1), r && this.updateCaretPos(1, !0));
                  } else e = t.slice(0, n) + t.slice(o), r && this.dispatch(function (t) {
                    t.setCaretPosition(n);
                  });

                  return e;
                }
              }, {
                key: "removeForwardsAt",
                value: function value(t) {
                  var e,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length,
                      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  if (null == t || !t.length || null === n) return t;

                  if (n === o) {
                    var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                    e = t.substring(n, n + 2).match(i) ? t.substr(0, n) + t.substr(n + 2) : t.substr(0, n) + t.substr(n + 1);
                  } else e = t.slice(0, n) + t.slice(o), r && this.dispatch(function (t) {
                    t.setCaretPosition(n);
                  });

                  return e;
                }
              }, {
                key: "handleMaxLength",
                value: function value(t, e) {
                  var n = this.getOptions(),
                      o = n.maxLength,
                      r = t[n.inputName || "default"],
                      a = e.length - 1 >= o;
                  if (e.length <= r.length) return !1;
                  if (Number.isInteger(o)) return n.debug && console.log("maxLength (num) reached:", a), a ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);

                  if ("object" === i(o)) {
                    var s = e.length - 1 >= o[n.inputName || "default"];
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
                  return t(Array(Math.ceil(e.length / n))).map(function (t, o) {
                    return e.slice(n * o, n + n * o);
                  });
                }
              }]) && a(o.prototype, r), u && a(o, u), n;
            }();

            s(u, "noop", function () {});
            var c = u;

            function l(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
              }
            }

            var f = function () {
              function t(e) {
                var n = e.dispatch,
                    o = e.getOptions;
                !function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this.dispatch = n, this.getOptions = o, c.bindMethods(t, this);
              }

              var e, n, o;
              return e = t, (n = [{
                key: "handleHighlightKeyDown",
                value: function value(t) {
                  var e = this.getOptions(),
                      n = this.getSimpleKeyboardLayoutKey(t);
                  this.dispatch(function (o) {
                    var r,
                        i,
                        a = o.getButtonElement(n),
                        s = o.getButtonElement("{".concat(n, "}"));
                    if (a) r = a, i = n;else {
                      if (!s) return;
                      r = s, i = "{".concat(n, "}");
                    }
                    r && (r.style.backgroundColor = e.physicalKeyboardHighlightBgColor || "#dadce4", r.style.color = e.physicalKeyboardHighlightTextColor || "black", e.physicalKeyboardHighlightPress && (e.physicalKeyboardHighlightPressUseClick ? r.click() : o.handleButtonClicked(i, t)));
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
                      o = t.code || t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode);
                  return (n = null != o && o.includes("Numpad") || null != o && o.includes("Shift") || null != o && o.includes("Space") || null != o && o.includes("Backspace") || null != o && o.includes("Control") || null != o && o.includes("Alt") || null != o && o.includes("Meta") ? t.code || "" : t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode) || "").length > 1 ? null === (e = n) || void 0 === e ? void 0 : e.toLowerCase() : n;
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
              }]) && l(e.prototype, n), o && l(e, o), t;
            }();

            function p(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
              }
            }

            var d = function () {
              function t(e) {
                var n,
                    o,
                    r,
                    i = e.utilities;
                !function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), r = 0, (o = "pageIndex") in (n = this) ? Object.defineProperty(n, o, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : n[o] = r, this.utilities = i, c.bindMethods(t, this), this.pageSize = this.utilities.getOptions().layoutCandidatesPageSize || 5;
              }

              var e, n, o;
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
                      o = t.targetElement,
                      r = t.onSelect;

                  if (n && n.length) {
                    var i = this.utilities.chunkArray(n.split(" "), this.pageSize);
                    this.renderPage({
                      candidateListPages: i,
                      targetElement: o,
                      pageIndex: this.pageIndex,
                      nbPages: i.length,
                      onItemSelected: function onItemSelected(t, n) {
                        r(t, n), e.destroy();
                      }
                    });
                  }
                }
              }, {
                key: "renderPage",
                value: function value(t) {
                  var e,
                      n = this,
                      o = t.candidateListPages,
                      r = t.targetElement,
                      i = t.pageIndex,
                      a = t.nbPages,
                      s = t.onItemSelected;
                  null === (e = this.candidateBoxElement) || void 0 === e || e.remove(), this.candidateBoxElement = document.createElement("div"), this.candidateBoxElement.className = "hg-candidate-box";
                  var u = document.createElement("ul");
                  u.className = "hg-candidate-box-list", o[i].forEach(function (t) {
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
                      candidateListPages: o,
                      targetElement: r,
                      pageIndex: i - 1,
                      nbPages: a,
                      onItemSelected: s
                    });
                  }, this.candidateBoxElement.appendChild(l), this.candidateBoxElement.appendChild(u);
                  var f = i < a - 1,
                      p = document.createElement("div");
                  p.classList.add("hg-candidate-box-next"), f && p.classList.add("hg-candidate-box-btn-active"), p.onclick = function () {
                    f && n.renderPage({
                      candidateListPages: o,
                      targetElement: r,
                      pageIndex: i + 1,
                      nbPages: a,
                      onItemSelected: s
                    });
                  }, this.candidateBoxElement.appendChild(p), r.prepend(this.candidateBoxElement);
                }
              }]) && p(e.prototype, n), o && p(e, o), t;
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

              for (var n = 0, o = new Array(e); n < e; n++) {
                o[n] = t[n];
              }

              return o;
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
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
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
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
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
                  var e, n, o;
                  if ("string" == typeof t[0]) e = t[0].split(".").join(""), n = document.querySelector(".".concat(e)), o = t[1];else if (t[0] instanceof HTMLDivElement) {
                    if (!t[0].className) throw console.warn("Any DOM element passed as parameter must have a class."), new Error("KEYBOARD_DOM_CLASS_ERROR");
                    e = t[0].className.split(" ")[0], n = t[0], o = t[1];
                  } else e = "simple-keyboard", n = document.querySelector(".".concat(e)), o = t[0];
                  return {
                    keyboardDOMClass: e,
                    keyboardDOM: n,
                    options: o
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
                  for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) {
                    n[o] = arguments[o];
                  }

                  return [e.keyboardDOMClass].concat(n).filter(function (t) {
                    return !!t;
                  }).join(" ");
                }), "undefined" != typeof window) {
                  for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) {
                    o[r] = arguments[r];
                  }

                  var i = this.handleParams(o),
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
                  var p = this.options.inputName,
                      h = void 0 === p ? this.defaultName : p;
                  if (this.input = {}, this.input[h] = "", this.keyboardDOMClass = a, this.buttonElements = {}, window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), this.currentInstanceName = this.utilities.camelCase(this.keyboardDOMClass), window.SimpleKeyboardInstances[this.currentInstanceName] = this, this.allKeyboardInstances = window.SimpleKeyboardInstances, this.keyboardInstanceNames = Object.keys(window.SimpleKeyboardInstances), this.isFirstKeyboardInstance = this.keyboardInstanceNames[0] === this.currentInstanceName, this.physicalKeyboard = new f({
                    dispatch: this.dispatch,
                    getOptions: this.getOptions
                  }), this.candidateBox = this.options.enableLayoutCandidates ? new d({
                    utilities: this.utilities
                  }) : null, !this.keyboardDOM) throw console.warn('".'.concat(a, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
                  this.render(), this.modules = {}, this.loadModules();
                }
              }

              var e, n, o;
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
                  var o = Object.keys(n).filter(function (n) {
                    var o = t.substring(0, e.getCaretPositionEnd() || 0) || t,
                        r = new RegExp("".concat(n, "$"), "g");
                    return !!h(o.matchAll(r)).length;
                  });

                  if (o.length > 1) {
                    var r = o.sort(function (t, e) {
                      return e.length - t.length;
                    })[0];
                    return {
                      candidateKey: r,
                      candidateValue: n[r]
                    };
                  }

                  if (o.length) {
                    var i = o[0];
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
                  var o = this;
                  this.candidateBox && this.candidateBox.show({
                    candidateValue: e,
                    targetElement: n,
                    onSelect: function onSelect(e, n) {
                      var r = o.getInput(o.options.inputName, !0),
                          i = o.getCaretPositionEnd() || 0,
                          a = r.substring(0, i || 0) || r,
                          s = new RegExp("".concat(t, "$"), "g"),
                          u = a.replace(s, e),
                          c = r.replace(a, u),
                          l = u.length - a.length,
                          f = (i || r.length) + l;
                      f < 0 && (f = 0), o.setInput(c, o.options.inputName, !0), o.setCaretPosition(f), "function" == typeof o.options.onChange && o.options.onChange(o.getInput(o.options.inputName, !0), n), "function" == typeof o.options.onChangeAll && o.options.onChangeAll(o.getAllInputs(), n);
                    }
                  });
                }
              }, {
                key: "handleButtonClicked",
                value: function value(t, e) {
                  var n = this.options,
                      o = n.inputName,
                      r = void 0 === o ? this.defaultName : o,
                      i = n.debug;

                  if ("{//}" !== t) {
                    this.input[r] || (this.input[r] = "");
                    var a = this.utilities.getUpdatedInput(t, this.input[r], this.caretPosition, this.caretPositionEnd);
                    if (this.utilities.isStandardButton(t) && this.activeInputElement && this.input[r] && this.input[r] === a && 0 === this.caretPosition && this.caretPositionEnd === a.length) return this.setInput("", this.options.inputName, !0), this.setCaretPosition(0), this.activeInputElement.value = "", this.activeInputElement.setSelectionRange(0, 0), void this.handleButtonClicked(t, e);

                    if ("function" == typeof this.options.onKeyPress && this.options.onKeyPress(t, e), this.input[r] !== a && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(a))) {
                      if (this.options.maxLength && this.utilities.handleMaxLength(this.input, a)) return;
                      var s = this.utilities.getUpdatedInput(t, this.input[r], this.caretPosition, this.caretPositionEnd, !0);

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
                  t.includes("layoutName") && this.candidateBox && this.candidateBox.destroy(), (t.includes("layoutCandidatesPageSize") || t.includes("layoutCandidates")) && this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = new d({
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
                  e && t && (t.split(" ").forEach(function (o) {
                    e.split(" ").forEach(function (e) {
                      n.options.buttonTheme || (n.options.buttonTheme = []);
                      var r = !1;
                      n.options.buttonTheme.map(function (t) {
                        if (null != t && t.class.split(" ").includes(e)) {
                          r = !0;
                          var n = t.buttons.split(" ");
                          n.includes(o) || (r = !0, n.push(o), t.buttons = n.join(" "));
                        }

                        return t;
                      }), r || n.options.buttonTheme.push({
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
                    var o, r;
                    null === (o = n.options) || void 0 === o || null === (r = o.buttonTheme) || void 0 === r || r.map(function (o, r) {
                      if (o && e && e.includes(o.class) || !e) {
                        var i,
                            a,
                            s = null === (i = o) || void 0 === i ? void 0 : i.buttons.split(" ").filter(function (e) {
                          return e !== t;
                        });
                        o && null != s && s.length ? o.buttons = s.join(" ") : (null === (a = n.options.buttonTheme) || void 0 === a || a.splice(r, 1), o = null);
                      }

                      return o;
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
                    var o = e.test(t);
                    return this.options.debug && console.log('inputPattern ("'.concat(e, '"): ').concat(o ? "passed" : "did not pass!")), o;
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
                  t.target.tagName && (e = t.target.tagName.toLowerCase()), this.dispatch(function (o) {
                    var r = t.target === o.keyboardDOM || t.target && o.keyboardDOM.contains(t.target);
                    o.isMouseHold && (o.isMouseHold = !1), ("textarea" === e || "input" === e && ["text", "search", "url", "tel", "password"].includes(t.target.type)) && !o.options.disableCaretPositioning ? (o.setCaretPosition(t.target.selectionStart, t.target.selectionEnd), n.activeInputElement = t.target, o.options.debug && console.log("Caret at: ", o.getCaretPosition(), o.getCaretPositionEnd(), t && t.target.tagName.toLowerCase(), "(".concat(o.keyboardDOMClass, ")"))) : !o.options.disableCaretPositioning && r || "selectionchange" === (null == t ? void 0 : t.type) || (o.setCaretPosition(null), n.activeInputElement = null, o.options.debug && console.log('Caret position reset due to "'.concat(null == t ? void 0 : t.type, '" event'), t));
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
                      var o = e.class.split(" ");
                      e.buttons.split(" ").includes(t) && (n = [].concat(h(n), h(o)));
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
                value: function value(t, e, n, o) {
                  var r = this,
                      i = Array.from(t.children),
                      a = 0;
                  return i.length && n.forEach(function (n, s) {
                    var u = o[s];
                    if (!(u && u > n)) return !1;
                    var c = n - a,
                        l = u - a,
                        f = document.createElement("div");
                    f.className += "hg-button-container";
                    var p = "".concat(r.options.layoutName, "-r").concat(e, "c").concat(s);
                    f.setAttribute("data-skUID", p);
                    var d = i.splice(c, l - c + 1);
                    a = l - c, d.forEach(function (t) {
                      return f.appendChild(t);
                    }), i.splice(c, 0, f), t.innerHTML = "", i.forEach(function (e) {
                      return t.appendChild(e);
                    }), r.options.debug && console.log("rowDOMContainer", d, c, l, a + 1);
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
                      o = this.options.useTouchEvents || !1,
                      r = o ? "hg-touch-events" : "",
                      i = this.options.useMouseEvents || !1,
                      a = this.options.disableRowButtonContainers;
                  this.keyboardDOM.className = this.getKeyboardClassString(this.options.theme, e, this.keyboardPluginClasses, r), this.keyboardRowsDOM = document.createElement("div"), this.keyboardRowsDOM.className = "hg-rows", n[this.options.layoutName || this.defaultName].forEach(function (e, n) {
                    var r = e.split(" ");
                    t.options.excludeFromLayout && t.options.excludeFromLayout[t.options.layoutName || t.defaultName] && (r = r.filter(function (e) {
                      return t.options.excludeFromLayout && !t.options.excludeFromLayout[t.options.layoutName || t.defaultName].includes(e);
                    }));
                    var s = document.createElement("div");
                    s.className += "hg-row";
                    var u = [],
                        c = [];
                    r.forEach(function (e, r) {
                      var l,
                          f = !a && "string" == typeof e && e.length > 1 && 0 === e.indexOf("["),
                          p = !a && "string" == typeof e && e.length > 1 && e.indexOf("]") === e.length - 1;
                      f && (u.push(r), e = e.replace(/\[/g, "")), p && (c.push(r), e = e.replace(/\]/g, ""));
                      var d = t.utilities.getButtonClass(e),
                          v = t.utilities.getButtonDisplayName(e, t.options.display, t.options.mergeDisplay),
                          g = t.options.useButtonTag ? "button" : "div",
                          y = document.createElement(g);
                      y.className += "hg-button ".concat(d), (l = y.classList).add.apply(l, h(t.getButtonThemeClasses(e))), t.setDOMButtonAttributes(e, function (t, e) {
                        y.setAttribute(t, e);
                      }), t.activeButtonClass = "hg-activeButton", !t.utilities.pointerEventsSupported() || o || i ? o ? (y.ontouchstart = function (n) {
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
                      var m = "".concat(t.options.layoutName, "-r").concat(n, "b").concat(r);
                      y.setAttribute("data-skBtnUID", m);
                      var b = document.createElement("span");
                      b.innerHTML = v, y.appendChild(b), t.buttonElements[e] || (t.buttonElements[e] = []), t.buttonElements[e].push(y), s.appendChild(y);
                    }), s = t.parseRowDOMContainers(s, n, u, c), t.keyboardRowsDOM.appendChild(s);
                  }), this.keyboardDOM.appendChild(this.keyboardRowsDOM), this.onRender(), this.initialized || (this.initialized = !0, !this.utilities.pointerEventsSupported() || o || i ? o ? (document.ontouchend = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, document.ontouchcancel = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, this.keyboardDOM.ontouchstart = function (e) {
                    return t.handleKeyboardContainerMouseDown(e);
                  }) : o || (document.onmouseup = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, this.keyboardDOM.onmousedown = function (e) {
                    return t.handleKeyboardContainerMouseDown(e);
                  }) : (document.onpointerup = function (e) {
                    return t.handleButtonMouseUp(void 0, e);
                  }, this.keyboardDOM.onpointerdown = function (e) {
                    return t.handleKeyboardContainerMouseDown(e);
                  }), this.onInit());
                }
              }]) && x(e.prototype, n), o && x(e, o), t;
            }();
          }(), o;
        }();
      },
      698: function _(e) {
        "use strict";

        e.exports = t;
      }
    },
        n = {};

    function o(t) {
      var r = n[t];
      if (void 0 !== r) return r.exports;
      var i = n[t] = {
        exports: {}
      };
      return e[t].call(i.exports, i, i.exports, o), i.exports;
    }

    o.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return o.d(e, {
        a: e
      }), e;
    }, o.d = function (t, e) {
      for (var n in e) {
        o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: e[n]
        });
      }
    }, o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, o.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    };
    var r = {};
    return function () {
      "use strict";

      o.r(r), o.d(r, {
        default: function _default() {
          return c;
        }
      });
      o(752);
      var t = o(698),
          e = o(86),
          n = o.n(e);

      function i(t, e) {
        var n = Object.keys(t);

        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })), n.push.apply(n, o);
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
        var o = e.baseClass || "react-simple-keyboard",
            r = t.useRef(null),
            i = t.useRef(null),
            s = t.useRef(e);
        return t.useEffect(function () {
          var t = function (t) {
            return a(a({}, t), {}, {
              theme: "simple-keyboard ".concat(t.theme || "hg-theme-default")
            });
          }(e);

          r.current || (r.current = !0, t.debug && console.log("ReactSimpleKeyboard: Init"), i.current = new (n())(".".concat(o), t), t.keyboardRef && t.keyboardRef(i.current));

          var c = function (t, e) {
            var n = u(e),
                o = u(t);
            return Object.keys(n).filter(function (t) {
              return n[t] !== o[t];
            });
          }(s.current, t);

          if (c.length) {
            var l = i.current;
            s.current = t, null == l || l.setOptions(t), t.debug && console.log("ReactSimpleKeyboard - setOptions called due to updated props:", c);
          }
        }, [r, o, s, e]), t.createElement("div", {
          className: o
        });
      };
    }(), r;
  }();
});

/***/ })

}]);
//# sourceMappingURL=ae29c6db-b86b13ca500f4aa1efd9.js.map