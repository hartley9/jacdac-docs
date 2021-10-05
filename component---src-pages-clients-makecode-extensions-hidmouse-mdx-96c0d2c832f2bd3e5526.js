"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7477,797],{

/***/ 21540:
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
    "id": "hid-mouse",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#hid-mouse",
    "aria-label": "hid mouse permalink",
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
  }))), "HID Mouse"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The HID mouse extension can be used to control a HID mouse, via a Jacdac module\nthat implements HID (generally communicating to a desktop/laptop over USB). Use the\n", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmbrainf441v02"
  }, "JM Brain F4 v0.2"), " or ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmbrainrp204059v01"
  }, "JM Brain RP2040 v0.1"), " module,\nloaded with the HID Keyboard + Mouse firmware that is available via the same links.  "), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "mouse-buttons",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#mouse-buttons",
    "aria-label": "mouse buttons permalink",
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
  }))), "Mouse buttons"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The up/down state of one or more buttons can be modified using the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "setButton"), "\nmethod:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.A, function() {\\n    modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Down)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.A, function() {\\n    modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Down)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.5,jacdac-hid-mouse=github:microsoft/pxt-jacdac/hid-mouse#v0.7.5\"},\"type\":\"renderblocks\",\"id\":\"a714662a38766f229f71d3f2cb45c479\"},\"url\":\"/images/makecode/a714662a38766f229f71d3f2cb45c479.png\",\"width\":666,\"height\":128}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "mouse-motion",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#mouse-motion",
    "aria-label": "mouse motion permalink",
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
  }))), "Mouse motion"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The mouse can be moved (by a number of pixels in the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "x"), " and ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "y"), " dimensions)\nusing the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "move"), " method:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.B, function() {\\n    modules.hidMouse1.move(10, 10)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.B, function() {\\n    modules.hidMouse1.move(10, 10)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.5,jacdac-hid-mouse=github:microsoft/pxt-jacdac/hid-mouse#v0.7.5\"},\"type\":\"renderblocks\",\"id\":\"4fd225b954ff137bc1a68f86a6a20169\"},\"url\":\"/images/makecode/4fd225b954ff137bc1a68f86a6a20169.png\",\"width\":498,\"height\":128}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "A third optional parameter (", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "time"), ", defaults to 0) to the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "move"), " method specifies\nhow long the move should take (in milliseconds). "), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "mouse-wheel",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#mouse-wheel",
    "aria-label": "mouse wheel permalink",
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
  }))), "Mouse wheel"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The mouse wheel can be turned up or down using the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "wheel"), " method,\nwhere the first parameter (", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "dy"), ") is positive if scrolling up and negative if scrolling down.\nThe second parameter (", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "time"), ") specifies how long the operation should take (in milliseconds):"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.AB, function() {\\n    modules.hidMouse1.wheel(10, 0)\\n}\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.AB, function() {\\n    modules.hidMouse1.wheel(10, 0)\\n}\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.5,jacdac-hid-mouse=github:microsoft/pxt-jacdac/hid-mouse#v0.7.5\"},\"type\":\"renderblocks\",\"id\":\"70d47de5752757ecec5efc477c12e74f\"},\"url\":\"/images/makecode/70d47de5752757ecec5efc477c12e74f.png\",\"width\":492,\"height\":128}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
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
    "href": "/jacdac-docs/services/hidmouse/"
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-hidmouse-mdx-96c0d2c832f2bd3e5526.js.map