"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5168,797],{

/***/ 73275:
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

var makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div", props);
};

var DeviceImage = makeShortcode("DeviceImage");
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
    "id": "accelerometer",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#accelerometer",
    "aria-label": "accelerometer permalink",
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
  }))), "Accelerometer"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "This extension supports 3-axis accelerometers.\nThe current forces acting on the accelerometer are\nread via the methods 'x', 'y', and 'z', which return\nvalues in earth gravities (g)."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "A Jacdac accelerometer module translate acceleration values as follows:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("table", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("thead", {
    parentName: "table"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "thead"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("th", {
    parentName: "tr",
    "align": null
  }, "Orientation"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("th", {
    parentName: "tr",
    "align": null
  }, "X value (g)"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("th", {
    parentName: "tr",
    "align": null
  }, "Y value (g)"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("th", {
    parentName: "tr",
    "align": null
  }, "Z value (g)"))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tbody", {
    parentName: "table"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "Module lying flat"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "0"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "0"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "-1")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "Module on left edge"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "-1"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "0"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "0")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "Module on bottom edge"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "0"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "1"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", {
    parentName: "tr",
    "align": null
  }, "0")))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The following program uses the 'x' and 'y' forces to implement a simple\nusing the micro:bit (show a happy face if near level; otherwise,\nshow sad or angry face):"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"basic.forever(function() {\\n    let x = modules.accelerometer1.x() * 100\\n    let y = modules.accelerometer1.y() * 100\\n    if (Math.abs(x) > 32) {\\n        basic.showIcon(IconNames.Sad)\\n    } else if (Math.abs(y) > 32) {\\n        basic.showIcon(IconNames.Angry)\\n    } else {\\n        basic.showIcon(IconNames.Happy)\\n    }\\n})\",\"rendered\":{\"req\":{\"code\":\"basic.forever(function() {\\n    let x = modules.accelerometer1.x() * 100\\n    let y = modules.accelerometer1.y() * 100\\n    if (Math.abs(x) > 32) {\\n        basic.showIcon(IconNames.Sad)\\n    } else if (Math.abs(y) > 32) {\\n        basic.showIcon(IconNames.Angry)\\n    } else {\\n        basic.showIcon(IconNames.Happy)\\n    }\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.5,jacdac-accelerometer=github:microsoft/pxt-jacdac/accelerometer#v0.7.5\"},\"type\":\"renderblocks\",\"id\":\"b0d1efbb175e6444cfbae3fd4aa2d5d7\"},\"url\":\"/images/makecode/b0d1efbb175e6444cfbae3fd4aa2d5d7.png\",\"width\":580,\"height\":586}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
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
  }))), "Events"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The accelerometer supports a variety of (debounced) events, including:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "li"
  }, "tilt_up, tilt_down, tilt_left, tilt_right"), ": emitted when accelerometer is tilted in the given direction."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "li"
  }, "face_up, face_down"), ": emitted when accelerometer is laying flat in the given direction."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "li"
  }, "freefall"), ": emitted when total force acting on accelerometer is much less than 1g."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "li"
  }, "shake"), ": emitted when forces change violently a few times."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("em", {
    parentName: "li"
  }, "force_2g, force_3g, force_6g, force_8g"), ": emitted when force in any direction exceeds the given threshold.")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"modules.accelerometer1.onTiltUp(() => {\\n    basic.showArrow(ArrowNames.North)\\n})\\n\\nmodules.accelerometer1.onTiltDown(() => {\\n    basic.showArrow(ArrowNames.South)\\n})\\n\\nmodules.accelerometer1.onTiltLeft(() => {\\n    basic.showArrow(ArrowNames.West)\\n})\\n\\nmodules.accelerometer1.onTiltRight(() => {\\n    basic.showArrow(ArrowNames.East)\\n})\\n\\nmodules.accelerometer1.onShake(function () {\\n    basic.showIcon(IconNames.Heart)\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.accelerometer1.onTiltUp(() => {\\n    basic.showArrow(ArrowNames.North)\\n})\\n\\nmodules.accelerometer1.onTiltDown(() => {\\n    basic.showArrow(ArrowNames.South)\\n})\\n\\nmodules.accelerometer1.onTiltLeft(() => {\\n    basic.showArrow(ArrowNames.West)\\n})\\n\\nmodules.accelerometer1.onTiltRight(() => {\\n    basic.showArrow(ArrowNames.East)\\n})\\n\\nmodules.accelerometer1.onShake(function () {\\n    basic.showIcon(IconNames.Heart)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.5,jacdac-accelerometer=github:microsoft/pxt-jacdac/accelerometer#v0.7.5\"},\"type\":\"renderblocks\",\"id\":\"b1116e79990fe69eb93f7f0b82f39ae1\"},\"url\":\"/images/makecode/b1116e79990fe69eb93f7f0b82f39ae1.png\",\"width\":976,\"height\":315}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "jm-accelerometer-v10",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#jm-accelerometer-v10",
    "aria-label": "jm accelerometer v10 permalink",
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
  }))), "JM Accelerometer v1.0"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmaccelerometer30v10"
  }, "JM Accelerometer v1.0"), " module\nhas silk screen of (X,Y,Z) axis (arrows are positive vectors) where "), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "the X-axis indicates the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong", {
    parentName: "li"
  }, "bottom edge"), " of the module"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "the Y-axis indicates the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong", {
    parentName: "li"
  }, "left edge"), " of the module"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "the Z-axis is oriented towards the sky when the module is lying flat, as shown in the picture below")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(DeviceImage, {
    id: "microsoft-research-jmaccelerometer30v10",
    size: "catalog",
    mdxType: "DeviceImage"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
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
    "href": "/jacdac-docs/services/accelerometer/"
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-accelerometer-mdx-b278949074eb2ecc6680.js.map