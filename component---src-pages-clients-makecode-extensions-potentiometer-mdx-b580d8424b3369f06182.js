"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7129,797],{

/***/ 95380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_frontmatter": function() { return /* binding */ _frontmatter; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64983);
/* harmony import */ var _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64425);

var _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */


var _frontmatter = {};
var layoutProps = {
  _frontmatter
};
var MDXLayout = _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
function MDXContent(_ref) {
  var {
    components
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1", {
    "id": "potentiometer",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#potentiometer",
    "aria-label": "potentiometer permalink",
    "className": "anchor before"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "Potentiometer"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The potentiometer extension reports position as a floating\npoint value between 0.0 and 100.0.\nThe ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "position"), " method returns the current position of the potentiometer."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The following program outputs the position whenever the position changes by\n5:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"modules.potentiometer1.onPositionChangedBy(5, function() {\\n    led.plotBarGraph(modules.potentiometer1.position(), 100)\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.potentiometer1.onPositionChangedBy(5, function() {\\n    led.plotBarGraph(modules.potentiometer1.position(), 100)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.5,jacdac-potentiometer=github:microsoft/pxt-jacdac/potentiometer#v0.7.5\"},\"type\":\"renderblocks\",\"id\":\"4d2f1d0b42b6ed099391edfd0c09b13a\"},\"url\":\"/images/makecode/4d2f1d0b42b6ed099391edfd0c09b13a.png\",\"width\":534,\"height\":176}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "jm-slider-v11",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#jm-slider-v11",
    "aria-label": "jm slider v11 permalink",
    "className": "anchor before"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "JM Slider v1.1"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmslider49v11"
  }, "JM Slider v1.1"), " module implements\nthe potentiometer service. The status LED end of the slider should yield\n100.0 (or close to it), while the other end of the slider should yield 0.0"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "p",
    "className": "gatsby-resp-image-wrapper",
    "style": {
      "position": "relative",
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "800px"
    }
  }, "\n      ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "span",
    "className": "gatsby-resp-image-background-image",
    "style": {
      "paddingBottom": "52.5%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAC6UlEQVQozyXI2VJaBwCA4fM8fYhedKaJbTUqjAuaxBhBwAawrAcIxgbCAXGCgGwSFTgqizgxmUnTaUFRY1hEMW5Jm870Uf5Ok4vv5hPOim46ZTcX8UfcSFN0EkaOt0Tebzlpljw0im4aRRfHWw4aRQfNgo1mwUGzLHK6IfIxZqJbmqP70kt3x4vwZ1hFNTbGYVDJmb2HE08vVUlJ1a+kFhhif2GEemiYvYCCWkBBPahgT1JQlQY59g5yOq+gnppiPz1NfWUGYW/5HvuxcQ7i45Sf9JOf7eHAfYejeSXvnig5fDzwxZFnkMP/3/NV3fUTReMtCl4VtZSGWlpLLa1HOIoOUfH1s+Dsw+weQusaZc7cQ8B8C7/tR7z2H/C7+pDcd/CLvTwTe5GcvXit3zMj9mPxTZOTVLxLTlJP6xCCYg8qSx/f2IeR8s+pH79h7+A1b98WqbzKE8lGmI8+xRuXkFJBAkk//qREOh8lV0rhSAa5bR3A5+pjJz6NkMg9ZjygZ8T/CLm0yu+VAqE5kUTwV/xuCz6Pk3h0iaD/GQ9Vw1gmRnBMjWIYV+Ix6oimlrjtVPE0bSWydA8hHb3PXY+Kb2cGSOzKfLw6Y7/+B/XDKq/e7JItbrCyKRNfWyUcj7KcWiaaihHPJNjclAnJa3xnHcQfmqCU0SB83jXxW1JNzNqPPTqLNymy/kJkc1Ukk7IRXpohGJpmYVHH8/AM4YiByPIsi5FfsIYMjPm0rKT0XJcsXO06Ea52THza0PNv8gGvZT1r8Uka8jQnsobW2hTtdQ0nWe1XOS2neT3djZ/p5LS8WLyPvPyQi7KZbsXO+bYV4WbHzGXJxF+hu/yzMMbn6AP+lkb5sKKmVTDS2jDQ2jLR2jLSLpjolM2cfmHhvGzmomKju23jfNvGh4oD4dPLWa7LBq4zam5Sk1xmpriMTdDJTNLIqmmuq2nlNLRyWpo5Le2cnhNZTyuvoy3raOY0NNc1tLNa2nkt/wFim0u8hiAsvwAAAABJRU5ErkJggg==')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "slider",
    "title": "slider",
    "src": "/jacdac-docs/static/d94e3450dc7051934d6990a8928dbdd5/5a190/slider.png",
    "srcSet": ["/jacdac-docs/static/d94e3450dc7051934d6990a8928dbdd5/772e8/slider.png 200w", "/jacdac-docs/static/d94e3450dc7051934d6990a8928dbdd5/e17e5/slider.png 400w", "/jacdac-docs/static/d94e3450dc7051934d6990a8928dbdd5/5a190/slider.png 800w"],
    "sizes": "(max-width: 800px) 100vw, 800px",
    "style": {
      "width": "100%",
      "height": "100%",
      "margin": "0",
      "verticalAlign": "middle",
      "position": "absolute",
      "top": "0",
      "left": "0"
    },
    "loading": "lazy",
    "decoding": "async"
  }), "\n    ")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "see-also",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#see-also",
    "aria-label": "see also permalink",
    "className": "anchor before"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "See Also"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "li",
    "href": "/jacdac-docs/services/potentiometer/"
  }, "service specification"))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ 64425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
 // eslint-disable-next-line react/prop-types

var Page = _ref => {
  var {
    props,
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, props, children);
};

/* harmony default export */ __webpack_exports__["Z"] = (Page);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-potentiometer-mdx-b580d8424b3369f06182.js.map