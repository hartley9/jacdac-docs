"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1914],{

/***/ 27122:
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
    "id": "led-pixel",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#led-pixel",
    "aria-label": "led pixel permalink",
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
  }))), "LED Pixel"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The LED pixel extension provides methods for working with\nan strip of RGB LEDs, as well as a built-in set of animations."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "All the pixels on a strip can be set to a color using the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "setAll"), " method:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setAll(0x00ff00)\\n})\\ninput.onButtonPressed(Button.B, () => {\\n    modules.ledPixel1.setAll(0xff0000)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setAll(0x00ff00)\\n})\\ninput.onButtonPressed(Button.B, () => {\\n    modules.ledPixel1.setAll(0xff0000)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.6.38,jacdac-led=github:microsoft/pxt-jacdac/led#v0.6.38,jacdac-led-pixel=github:microsoft/pxt-jacdac/led-pixel#v0.6.38\"},\"type\":\"renderblocks\",\"id\":\"c03cd517d211bc29d1ce18de531735ce\"},\"url\":\"/images/makecode/c03cd517d211bc29d1ce18de531735ce.png\",\"width\":899,\"height\":128}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The brightness of the strip can be set and retrieved as follows:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"modules.ledPixel1.onConnected(() => {\\n    modules.ledPixel1.setBrightness(85)\\n    let brightness = modules.ledPixel1.brightness()\\n    basic.showNumber(brightness)\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.ledPixel1.onConnected(() => {\\n    modules.ledPixel1.setBrightness(85)\\n    let brightness = modules.ledPixel1.brightness()\\n    basic.showNumber(brightness)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.6.38,jacdac-led=github:microsoft/pxt-jacdac/led#v0.6.38,jacdac-led-pixel=github:microsoft/pxt-jacdac/led-pixel#v0.6.38\"},\"type\":\"renderblocks\",\"id\":\"fa6a0c646a1d5009fed697e70c182a26\"},\"url\":\"/images/makecode/fa6a0c646a1d5009fed697e70c182a26.png\",\"width\":542,\"height\":224}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Pixels can be individually set using the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "setPixel"), " method as shown in the\nexample below, which also uses the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "numPixels"), " method to get the number\nof pixels supported by the underlying hardware."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"modules.ledPixel1.onConnected(() => {\\n    modules.ledPixel1.setAll(0)\\n    let n = modules.ledPixel1.numPixels()\\n    for(let i = 0; i <= n - 1; i++) {\\n        modules.ledPixel1.setPixel(i, 0x00ff00)\\n        basic.pause(200)\\n    }\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.ledPixel1.onConnected(() => {\\n    modules.ledPixel1.setAll(0)\\n    let n = modules.ledPixel1.numPixels()\\n    for(let i = 0; i <= n - 1; i++) {\\n        modules.ledPixel1.setPixel(i, 0x00ff00)\\n        basic.pause(200)\\n    }\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.6.38,jacdac-led=github:microsoft/pxt-jacdac/led#v0.6.38,jacdac-led-pixel=github:microsoft/pxt-jacdac/led-pixel#v0.6.38\"},\"type\":\"renderblocks\",\"id\":\"298c1dd88325b4cb84dbbe650cec45a4\"},\"url\":\"/images/makecode/298c1dd88325b4cb84dbbe650cec45a4.png\",\"width\":622,\"height\":360}}\n")));
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-ledpixel-mdx-1222a923daa8a39ce64f.js.map