"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3730],{

/***/ 33024:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HighlightTextField; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__(13019);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(41194);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
;// CONCATENATED MODULE: ./node_modules/use-editable/dist/use-editable.es.js

var m = {
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};

function p(c) {
  var a = window.getSelection();
  a.empty();
  a.addRange(c);
}

function q(c) {
  return (c.metaKey || c.ctrlKey) && !c.altKey && "KeyZ" === c.code;
}

function r(c) {
  c = [c.firstChild];

  for (var b, a = ""; b = c.pop();) {
    b.nodeType === Node.TEXT_NODE ? a += b.textContent : b.nodeType === Node.ELEMENT_NODE && "BR" === b.nodeName && (a += "\n"), b.nextSibling && c.push(b.nextSibling), b.firstChild && c.push(b.firstChild);
  }

  "\n" !== a[a.length - 1] && (a += "\n");
  return a;
}

function w(c) {
  var a = window.getSelection().getRangeAt(0),
      b = a.collapsed ? 0 : a.toString().length,
      f = document.createRange();
  f.setStart(c, 0);
  f.setEnd(a.startContainer, a.startOffset);
  return {
    position: c = (f = f.toString()).length,
    extent: b,
    content: f = (f = f.split("\n"))[a = f.length - 1],
    line: a
  };
}

function C(c, a, b) {
  0 >= a && (a = 0);

  if (!b || 0 > b) {
    b = a;
  }

  var f = document.createRange();
  c = [c.firstChild];

  for (var d, l = 0, g = a; d = c[c.length - 1];) {
    if (d.nodeType === Node.TEXT_NODE) {
      if (l + d.textContent.length >= g) {
        var h = g - l;

        if (g === a) {
          if (g = f, h < d.textContent.length ? g.setStart(d, h) : g.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          h < (b = d).textContent.length ? a.setEnd(b, h) : a.setEndAfter(b);
          break;
        }
      }

      l += d.textContent.length;
    } else if (d.nodeType === Node.ELEMENT_NODE && "BR" === d.nodeName) {
      if (l + 1 >= g) {
        if (g === a) {
          if (h = f, 0 < d.textContent.length ? h.setStart(d, 0) : h.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          0 < (b = d).textContent.length ? a.setEnd(b, 0) : a.setEndAfter(b);
          break;
        }
      }

      l++;
    }

    c.pop();
    d.nextSibling && c.push(d.nextSibling);
    d.firstChild && c.push(d.firstChild);
  }

  return f;
}

function useEditable(c, a, b) {
  function f(k) {
    var b = c.current;

    if (b) {
      var a = w(b);
      b = r(b);
      a.position += k.length - b.length;
      e.position = a;
      e.onChange(k, a);
    }
  }

  function l(k, b) {
    var e = c.current;

    if (e) {
      var a = window.getSelection().getRangeAt(0);
      a.deleteContents();
      a.collapse();
      var d = b || 0;
      (a = C(e, b = (a = w(e)).position + (0 > d ? d : 0), a.position + (0 < d ? d : 0))).deleteContents();
      k && a.insertNode(document.createTextNode(k));
      p(C(e, b + k.length));
    }
  }

  function d(b) {
    var a = c.current;

    if (a) {
      a.focus();
      var e = 0;

      if ("number" == typeof b) {
        e = b;
      } else {
        var k = r(a).split("\n").slice(0, b.row);
        b.row && (e += k.join("\n").length + 1);
        e += b.column;
      }

      p(C(a, e));
    }
  }

  function g() {
    var b = c.current;
    return {
      text: r(b),
      position: b = w(b)
    };
  }

  function h() {
    e.observer.disconnect();
  }

  b || (b = {});
  var D = (0,react.useState)([])[1],
      e = (0,react.useState)(function () {
    var e = {
      observer: null,
      disconnected: !1,
      onChange: a,
      queue: [],
      history: [],
      historyAt: -1,
      position: null
    };
    "undefined" != typeof MutationObserver && (e.observer = new MutationObserver(function b(b) {
      var a;
      (a = e.queue).push.apply(a, b);
    }));
    return e;
  })[0],
      n = (0,react.useMemo)(function () {
    return {
      update: f,
      insert: l,
      move: d,
      getState: g
    };
  }, []);

  if ("object" != typeof navigator) {
    return n;
  }

  (0,react.useLayoutEffect)(function () {
    e.onChange = a;

    if (c.current && !b.disabled) {
      e.disconnected = !1;
      e.observer.observe(c.current, m);

      if (e.position) {
        var k = e.position,
            d = k.position;
        p(C(c.current, d, d + k.extent));
      }

      return h;
    }
  });
  (0,react.useLayoutEffect)(function () {
    if (!c.current || b.disabled) {
      e.history.length = 0, e.historyAt = -1;
    } else {
      var a = c.current;

      if (e.position) {
        a.focus();
        var d = e.position,
            f = d.position;
        p(C(a, f, f + d.extent));
      }

      var g = a.style.whiteSpace,
          h = a.contentEditable,
          l = !0;

      try {
        a.contentEditable = "plaintext-only";
      } catch (u) {
        a.contentEditable = "true", l = !1;
      }

      "pre" !== g && (a.style.whiteSpace = "pre-wrap");
      b.indentation && (a.style.tabSize = a.style.MozTabSize = "" + b.indentation);
      d = "" + " ".repeat(b.indentation || 0);

      var x,
          E = new RegExp("^(?:" + d + ")"),
          F = new RegExp("^(?:" + d + ")*(" + d + ")$"),
          t = function t(b) {
        if (c.current && e.position) {
          var u = r(a),
              d = w(a),
              f = new Date().valueOf(),
              g = e.history[e.historyAt];
          !b && 500 > f - x || g && g[1] === u ? x = f : (b = ++e.historyAt, e.history[b] = [d, u], e.history.splice(b + 1), 500 < b && (e.historyAt--, e.history.shift()));
        }
      },
          v = function v() {
        var b;
        (b = e.queue).push.apply(b, e.observer.takeRecords());
        b = w(a);

        if (e.queue.length) {
          e.observer.disconnect();
          e.disconnected = !0;
          var d = r(a);
          e.position = b;

          for (var c, f; c = e.queue.pop();) {
            null !== c.oldValue && (c.target.textContent = c.oldValue);

            for (f = c.removedNodes.length - 1; 0 <= f; f--) {
              c.target.insertBefore(c.removedNodes[f], c.nextSibling);
            }

            for (f = c.addedNodes.length - 1; 0 <= f; f--) {
              c.addedNodes[f].parentNode && c.target.removeChild(c.addedNodes[f]);
            }
          }

          e.onChange(d, b);
        }
      },
          y = function y(c) {
        if (!c.defaultPrevented && c.target === a) {
          if (e.disconnected) {
            return c.preventDefault(), D([]);
          }

          if (q(c)) {
            c.preventDefault(), c.shiftKey ? (c = ++e.historyAt, (c = e.history[c]) || (e.historyAt = e.history.length - 1)) : (c = --e.historyAt, (c = e.history[c]) || (e.historyAt = 0)), c && (e.observer.disconnect(), e.disconnected = !0, e.position = c[0], e.onChange(c[1], c[0]));
          } else {
            t();

            if ("Enter" === c.key) {
              c.preventDefault();
              var d = w(a),
                  f = /\S/g.exec(d.content);
              d = "\n" + d.content.slice(0, f ? f.index : d.content.length);
              n.insert(d);
            } else if ((!l || b.indentation) && "Backspace" === c.key) {
              c.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (d = w(a), d = F.exec(d.content), n.insert("", d ? -d[1].length : -1)) : n.insert("", 0);
            } else if (b.indentation && "Tab" === c.key) {
              c.preventDefault();
              f = (d = w(a)).position - d.content.length;
              var g = r(a);
              d = c.shiftKey ? g.slice(0, f) + d.content.replace(E, "") + g.slice(f + d.content.length) : g.slice(0, f) + (b.indentation ? " ".repeat(b.indentation) : "\t") + g.slice(f);
              n.update(d);
            }

            c.repeat && v();
          }
        }
      },
          z = function z(b) {
        b.defaultPrevented || b.isComposing || (q(b) || t(), v(), a.focus());
      },
          A = function A(b) {
        e.position = window.getSelection().rangeCount && b.target === a ? w(a) : null;
      },
          B = function B(a) {
        a.preventDefault();
        t(!0);
        n.insert(a.clipboardData.getData("text/plain"));
        t(!0);
        v();
      };

      document.addEventListener("selectstart", A);
      window.addEventListener("keydown", y);
      a.addEventListener("paste", B);
      a.addEventListener("keyup", z);
      return function () {
        document.removeEventListener("selectstart", A);
        window.removeEventListener("keydown", y);
        a.removeEventListener("paste", B);
        a.removeEventListener("keyup", z);
        a.style.whiteSpace = g;
        a.contentEditable = h;
      };
    }
  }, [c.current, b.disabled, b.indentation]);
  return n;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 1 modules
var Suspense = __webpack_require__(18581);
;// CONCATENATED MODULE: ./src/components/ui/HighlightTextField.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(8982), __webpack_require__.e(1613)]).then(__webpack_require__.bind(__webpack_require__, 31613)));
var AnnotationTooltip = (0,withStyles/* default */.Z)(theme => ({
  arrow: {
    color: theme.palette.error.main
  },
  tooltip: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: theme.typography.body2.fontSize
  }
}))(Tooltip/* default */.ZP);
function HighlightTextField(props) {
  var {
    code,
    onChange,
    language,
    annotations,
    pullRequestTitle,
    pullRequestPath,
    pullRequestDescription,
    minHeight
  } = props;
  var {
    darkMode
  } = (0,react.useContext)(DarkModeContext/* default */.Z);
  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var editorRef = (0,react.useRef)(null);
  useEditable(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: code,
    language: language,
    theme: theme
  }), _ref => {
    var {
      className,
      style,
      tokens,
      getTokenProps
    } = _ref;
    return /*#__PURE__*/react.createElement("pre", {
      ref: editorRef,
      className: className,
      spellCheck: false,
      style: _objectSpread(_objectSpread({}, style), {
        minHeight: minHeight || "12rem",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word"
      })
    }, tokens.map((line, i) => {
      var annotation = annotations === null || annotations === void 0 ? void 0 : annotations.find(a => a.line === i + 1);
      var title = annotation === null || annotation === void 0 ? void 0 : annotation.message;
      var el = /*#__PURE__*/react.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(token => !token.empty).map((token, key) => /*#__PURE__*/react.createElement("span", getTokenProps({
        token,
        key
      }))), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, /*#__PURE__*/react.createElement("ul", null, annotations.map((a, i) => /*#__PURE__*/react.createElement("li", {
    key: i
  }, "line ", a.line, ": ", a.message))))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: {
      [pullRequestPath + ".md"]: code
    }
  }))));
}

/***/ }),

/***/ 76786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(34093);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 1 modules
var Suspense = __webpack_require__(18581);
;// CONCATENATED MODULE: ./src/components/tools/EnclosureEditor.tsx





var EnclosureGenerator = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 4556).then(__webpack_require__.bind(__webpack_require__, 54556)));
var STORAGE_KEY = "jacdac:enclosureeditorkey_source";
var OPTIONS_STORAGE_KEY = "jacdac:enclosureeditorkey_options";
var DEFAULT_MODEL = {
  box: {
    width: 22,
    height: 29,
    depth: 10
  },
  rings: [{
    x: 7.5,
    y: 7.5
  }, {
    x: -7.5,
    y: -7.5
  }, {
    x: -7.5,
    y: 7.5
  }, {
    x: 7.5,
    y: -7.5
  }],
  connectors: [{
    x: 0,
    y: 7.5,
    dir: "top",
    type: "jacdac"
  }, {
    x: 0,
    y: 7.5,
    dir: "bottom",
    type: "jacdac"
  }]
};
var DEFAULT_OPTIONS = {
  legs: {
    type: "well"
  },
  cover: {
    mounts: {
      type: "ring"
    }
  }
};
function EnclosureEditor() {
  var [source, setSource] = (0,useLocalStorage/* default */.Z)(STORAGE_KEY, JSON.stringify(DEFAULT_MODEL, null, 4));
  var [options, setOptions] = (0,useLocalStorage/* default */.Z)(OPTIONS_STORAGE_KEY, JSON.stringify(DEFAULT_OPTIONS, null, 4));
  var enclosure = (0,react.useMemo)(() => {
    try {
      return JSON.parse(source);
    } catch (e) {
      console.debug(e);
      return undefined;
    }
  }, [source]);
  var enclosureOptions = (0,react.useMemo)(() => {
    try {
      return JSON.parse(options);
    } catch (e) {
      console.debug(e);
      return undefined;
    }
  }, [options]);

  var handleFormat = () => {
    setSource(JSON.stringify(enclosure, null, 4));
    setSource(JSON.stringify(enclosureOptions, null, 4));
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 1,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleFormat,
    disabled: !enclosure || !enclosureOptions
  }, "Format code")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, "Model"), /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "json",
    onChange: setSource
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, "Options"), /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    minHeight: "8rem",
    code: options,
    language: "json",
    onChange: setOptions
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(EnclosureGenerator, {
    module: enclosure,
    options: enclosureOptions,
    color: "#777"
  }))));
}
;// CONCATENATED MODULE: ./src/pages/tools/enclosure.tsx


function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Enclosure generator"), /*#__PURE__*/react.createElement(EnclosureEditor, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-enclosure-tsx-a4ef507c768bcea6099f.js.map