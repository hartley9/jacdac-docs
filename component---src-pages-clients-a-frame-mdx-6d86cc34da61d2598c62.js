"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2059],{

/***/ 62994:
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
    "id": "a-frame-virtual-reality",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#a-frame-virtual-reality",
    "aria-label": "a frame virtual reality permalink",
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
  }))), "A-Frame Virtual Reality"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The Jacdac Javascript SDK can be used to create VR experiences, using ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "https://aframe.io/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "A-Frame"), "."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong", {
    parentName: "p"
  }, "Make sure to disconnect before trying to connect in the A-Frame demo.")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("iframe", {
    src: "https://jacdac-aframe-demo.glitch.me",
    style: {
      "border": "none"
    },
    width: "480",
    height: "320",
    allow: "usb;serial;bluetooth;vr",
    allowFullScreen: true
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The following snippet is a possible use of Jacdac in a VR setting.\nThe radius of the sphere is controlled by any potentiometer module."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-typescript"
  }, "// make sure all sensors are streaming data\nbus.streaming = true\n\n// aframe object\nconst sphere = document.getElementById(\"sphere\");\n\n// using an animation frame to query sensor and update DOM\nfunction step() {\n  // collect all sensor info into a simple object data structure\n  const sensors = jacdac.snapshotSensors(bus)\n  // grab the first reading on potentiometer\n  // !! reading might be undefined if missing !!\n  const pos = sensors.potentiometer[0] || 0\n  // a-frame magic\n  sphere.setAttribute(\"radius\", 0.5 + pos)\n  // keep animating\n  window.requestAnimationFrame(step);\n}\nwindow.requestAnimationFrame(step);\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The HTML of the A-Frame starter has been slightly modified to import the Jacdac SDK"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<script src=\"https://unpkg.com/jacdac-ts/dist/jacdac.umd.js\"></script>\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "and display a connect button. Connection to a physical device needs to be started from a user interaction like a button click."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, "<button\n    id=\"connectbtn\"\n    style=\"position:absolute; left: 1rem; top: 1rem; z-index:1000;\"\n>\n    jacdac connect\n</button>\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "li",
    "href": "https://glitch.com/edit/#!/jacdac-aframe-demo",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }, "Remix the starter project"))));
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
//# sourceMappingURL=component---src-pages-clients-a-frame-mdx-6d86cc34da61d2598c62.js.map