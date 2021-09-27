"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2051],{

/***/ 28697:
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
    "id": "debugging",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#debugging",
    "aria-label": "debugging permalink",
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
  }))), "Debugging"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "dev-tools",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#dev-tools",
    "aria-label": "dev tools permalink",
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
  }))), "Dev tools"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Jacdac provides various tools in this web site to diagnose issues with modules.\nThe dashboard also provides the ability to start virtual modules which tends to be very useful when debugging Jacdac programs."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "When building web-based Jacdac programs, using our Javascript SDK (or P5", "*", "js...), you can use the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/clients/javascript/devtools.html"
  }, "devtools"), "\nto side load your Jacdac-enabled web page with our developer tools."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "For convinience, add your url as a hash to auto-load it."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre"
  }, "https://microsoft.github.io/jacdac-docs/clients/javascript/devtools#URL\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "where ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "URL"), " is your web page url."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "device-tree",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#device-tree",
    "aria-label": "device tree permalink",
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
  }))), "Device Tree"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The device tree (on the left) allows to explore the JDOM tree: device, services, registers, events.\nThe value of each register and also count events being triggered."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "packet-console",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#packet-console",
    "aria-label": "packet console permalink",
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
  }))), "Packet Console"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The packet console, available from the device tree, lets you investigate, filter packet traces.\nEach packet can be decoded and inspected."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Traces can be saved, reloaded for offline invesgitation."));
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
//# sourceMappingURL=component---src-pages-clients-javascript-debugging-mdx-33020aa8742482ca6731.js.map