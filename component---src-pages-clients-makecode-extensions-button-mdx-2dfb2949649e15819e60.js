"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3838,797],{

/***/ 37808:
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
    "id": "button",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#button",
    "aria-label": "button permalink",
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
  }))), "Button"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The button extension provides event handlers for the events\n", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "down"), ", ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "up"), ", and ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "hold"), ", as well as methods for accessing the underlying\nstate of a button. "), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "events",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#events",
    "aria-label": "events permalink",
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
  }))), "Events"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The (unbounced) ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "down"), " event is raised when the\nbutton is pressed, while the (unbounced) ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "up"), " event is raised when the button is released.\nThe ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "hold"), " event is generated if the button is held for more than 1/2 second,\nand every 1/2 second after that until the button is released."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "There are three handlers (", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "onDown"), ", ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "onUp"), ", and ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "p"
  }, "onHold"), ") for each of\nthe three events, as shown in the small example below"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"let holdCount = 0\\nmodules.button1.onUp(function () {\\n    led.stopAnimation()\\n    basic.showString(\\\"U\\\")\\n})\\nmodules.button1.onDown(function () {\\n    holdCount = 0\\n    led.stopAnimation()\\n    basic.showString(\\\"D\\\")\\n})\\nmodules.button1.onHold(function () {\\n    holdCount += 1\\n    led.stopAnimation()\\n    basic.showNumber(holdCount)\\n})\\n\",\"rendered\":{\"req\":{\"code\":\"let holdCount = 0\\nmodules.button1.onUp(function () {\\n    led.stopAnimation()\\n    basic.showString(\\\"U\\\")\\n})\\nmodules.button1.onDown(function () {\\n    holdCount = 0\\n    led.stopAnimation()\\n    basic.showString(\\\"D\\\")\\n})\\nmodules.button1.onHold(function () {\\n    holdCount += 1\\n    led.stopAnimation()\\n    basic.showNumber(holdCount)\\n})\\n\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.13,jacdac-button=github:microsoft/pxt-jacdac/button#v0.7.13\"},\"type\":\"renderblocks\",\"id\":\"22267f435d4e7f3adb16155dd4a5652b\"},\"url\":\"/images/makecode/22267f435d4e7f3adb16155dd4a5652b.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "button-state-pressed-pressure",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#button-state-pressed-pressure",
    "aria-label": "button state pressed pressure permalink",
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
  }))), "Button state (pressed, pressure)"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "pressed"), " method returns a boolean value indicated whether or not the button is currently\npressed down, which is a function of the lower-level ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "pressure"), " value."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"basic.forever(() => {\\n    if (modules.button1.pressed()) {\\n        led.stopAnimation()\\n        basic.showString(\\\"D\\\")\\n    } else {\\n        led.stopAnimation()\\n        basic.showString(\\\"U\\\")\\n    }\\n})\",\"rendered\":{\"req\":{\"code\":\"basic.forever(() => {\\n    if (modules.button1.pressed()) {\\n        led.stopAnimation()\\n        basic.showString(\\\"D\\\")\\n    } else {\\n        led.stopAnimation()\\n        basic.showString(\\\"U\\\")\\n    }\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.13,jacdac-button=github:microsoft/pxt-jacdac/button#v0.7.13\"},\"type\":\"renderblocks\",\"id\":\"fb252d165812f9b866991d8c14f1a9c3\"},\"url\":\"/images/makecode/fb252d165812f9b866991d8c14f1a9c3.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The lower-level state of the button is accessible via the the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "pressure"), " method,\nwhich ranges in value from 0-100. Depending on the type of button,\nthe pressed state will be reached with a certain threshold, in the example below 70%."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"basic.forever(() => {\\n    if (modules.button1.pressure() >= 70) {\\n        led.stopAnimation()\\n        basic.showString(\\\"D\\\")\\n    } else if (modules.button1.pressure() === 0) {\\n        led.stopAnimation()\\n        basic.showString(\\\"U\\\")\\n    } else {\\n        led.stopAnimation()\\n        basic.showString(\\\"x\\\")\\n    }\\n})\",\"rendered\":{\"req\":{\"code\":\"basic.forever(() => {\\n    if (modules.button1.pressure() >= 70) {\\n        led.stopAnimation()\\n        basic.showString(\\\"D\\\")\\n    } else if (modules.button1.pressure() === 0) {\\n        led.stopAnimation()\\n        basic.showString(\\\"U\\\")\\n    } else {\\n        led.stopAnimation()\\n        basic.showString(\\\"x\\\")\\n    }\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.13,jacdac-button=github:microsoft/pxt-jacdac/button#v0.7.13\"},\"type\":\"renderblocks\",\"id\":\"2044c25b51f0ac271c7723ef2f768d1e\"},\"url\":\"/images/makecode/2044c25b51f0ac271c7723ef2f768d1e.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
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
    "href": "/jacdac-docs/services/button/"
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-button-mdx-2dfb2949649e15819e60.js.map