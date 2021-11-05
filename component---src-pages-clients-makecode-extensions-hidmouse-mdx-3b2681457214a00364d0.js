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
  }, "JM Brain RP2040 v0.1"), " module,\nloaded with the HID Keyboard + Mouse firmware that is available via the same links."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
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
  }))), "Mouse buttons"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The state of one or more buttons can be modified using the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "setButton"), " method:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.A, function() {\\n    modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Click)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.A, function() {\\n    modules.hidMouse1.setButton(jacdac.HidMouseButton.Left, jacdac.HidMouseButtonEvent.Click)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.23,jacdac-hid-mouse=github:microsoft/pxt-jacdac/hid-mouse#v0.7.23\"},\"type\":\"renderblocks\",\"id\":\"a54de031108a633609784f66ebff7f22\"},\"url\":\"/images/makecode/a54de031108a633609784f66ebff7f22.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
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
  }, "{\"source\":\"input.onButtonPressed(Button.B, function() {\\n    modules.hidMouse1.move(10, 10)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.B, function() {\\n    modules.hidMouse1.move(10, 10)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.23,jacdac-hid-mouse=github:microsoft/pxt-jacdac/hid-mouse#v0.7.23\"},\"type\":\"renderblocks\",\"id\":\"605f7dabd2d8285a4d8834021e70200b\"},\"url\":\"/images/makecode/605f7dabd2d8285a4d8834021e70200b.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "A third optional parameter (", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "time"), ", defaults to 0) to the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "move"), " method specifies\nhow long the move should take (in milliseconds)."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
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
  }, "{\"source\":\"input.onButtonPressed(Button.AB, function() {\\n    modules.hidMouse1.wheel(10, 0)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.AB, function() {\\n    modules.hidMouse1.wheel(10, 0)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.23,jacdac-hid-mouse=github:microsoft/pxt-jacdac/hid-mouse#v0.7.23\"},\"type\":\"renderblocks\",\"id\":\"392a7ee03e3db2be8825c83dc900ffe8\"},\"url\":\"/images/makecode/392a7ee03e3db2be8825c83dc900ffe8.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "connecting-the-mouse-module",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#connecting-the-mouse-module",
    "aria-label": "connecting the mouse module permalink",
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
  }))), "Connecting the Mouse module"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The module that implements the HID mouse server (like the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmbrainf441v02"
  }, "JD BRAIN F4"), " below)\nmust also be connected with a USB-C cable to your computer."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
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
      "paddingBottom": "75%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABTuc3YQH/xAAZEAEBAAMBAAAAAAAAAAAAAAACAQAREgP/2gAIAQEAAQUCSsR9rWV1nO6jDhmj/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/ATV//8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/ARF//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIRAxYYH/2gAIAQEABj8CSS9FVE6J4J4//8QAGhAAAwEAAwAAAAAAAAAAAAAAAAERIUFhcf/aAAgBAQABPyHlDaxkyHEQOmliG7axx4O0ZjIC6P/aAAwDAQACAAMAAAAQ0+//xAAXEQEBAQEAAAAAAAAAAAAAAAABAEFR/9oACAEDAQE/EBiDt//EABYRAQEBAAAAAAAAAAAAAAAAAAEAQf/aAAgBAgEBPxBRTL//xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMaFBUWGR/9oACAEBAAE/EEVVhGg5ejKfQEO0dV/MTdBEjQ85G0V91ymHBG27sNduWtqCvtz/2Q==')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "A microbit and HID mouse module connected with 2 cables",
    "title": "A microbit and HID mouse module connected with 2 cables",
    "src": "/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/4b190/hidcables.jpg",
    "srcSet": ["/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/e07e9/hidcables.jpg 200w", "/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/066f9/hidcables.jpg 400w", "/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/4b190/hidcables.jpg 800w", "/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/e5166/hidcables.jpg 1200w", "/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/b17f8/hidcables.jpg 1600w"],
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-hidmouse-mdx-3b2681457214a00364d0.js.map