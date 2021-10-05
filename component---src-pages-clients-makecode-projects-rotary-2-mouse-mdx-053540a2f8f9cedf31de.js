"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1720,797],{

/***/ 1626:
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
    "id": "rotary-encoder-to-hid-mouse-wheel",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#rotary-encoder-to-hid-mouse-wheel",
    "aria-label": "rotary encoder to hid mouse wheel permalink",
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
  }))), "Rotary Encoder to HID mouse wheel"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "This sample uses a special HID server module, so that you\ncan use a Jacdac rotary module to act as a mouse wheel.\nIn addition to a brain module (such as micro:bit V2)\nyou will need:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "li",
    "href": "/jacdac-docs/devices/microsoft/research/jmrotarycontrolbuttonv10"
  }, "JM Rotary Control"), " module"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "li",
    "href": "/jacdac-docs/devices/microsoft/research/jmbrainf441v02"
  }, "JM Brain F4 v0.2"), " or ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "li",
    "href": "/jacdac-docs/devices/microsoft/research/jmbrainrp204059v01"
  }, "JM Brain RP2040 v0.1"), " module,\nloaded with the HID Keyboard + Mouse firmware that is available via the same links")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The following program can be loaded onto a micro:bit, which should be connected to the HID module via\nJacdac. The HID module is then connected to your desktop/laptop via USB. "), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"let lastposition = 0\\nmodules.rotaryEncoder1.onPositionChangedBy(1, function () {\\n    if (modules.rotaryEncoder1.position() - lastposition < 0) {\\n        modules.hidMouse1.wheel(-1, 0)\\n    } else {\\n        modules.hidMouse1.wheel(1, 0)\\n    }\\n    lastposition = modules.rotaryEncoder1.position()\\n})\",\"rendered\":{\"req\":{\"code\":\"let lastposition = 0\\nmodules.rotaryEncoder1.onPositionChangedBy(1, function () {\\n    if (modules.rotaryEncoder1.position() - lastposition < 0) {\\n        modules.hidMouse1.wheel(-1, 0)\\n    } else {\\n        modules.hidMouse1.wheel(1, 0)\\n    }\\n    lastposition = modules.rotaryEncoder1.position()\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.4,jacdac-hid-mouse=github:microsoft/pxt-jacdac/hid-mouse#v0.7.4,jacdac-rotary-encoder=github:microsoft/pxt-jacdac/rotary-encoder#v0.7.4\"},\"type\":\"renderblocks\",\"id\":\"b994d1530a0a10ed6ae942c836af3d8a\"},\"url\":\"/images/makecode/b994d1530a0a10ed6ae942c836af3d8a.png\",\"width\":855,\"height\":368}}\n")));
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
//# sourceMappingURL=component---src-pages-clients-makecode-projects-rotary-2-mouse-mdx-053540a2f8f9cedf31de.js.map