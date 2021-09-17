"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4256],{

/***/ 99861:
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
    "id": "sensors",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#sensors",
    "aria-label": "sensors permalink",
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
  }))), "Sensors"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The state of all sensor readings connected to the bus can be access through the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "jacdac.sensors"), " object.\nThe readings are grouped per service type and keyed with the service camel name (", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "button"), ", ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "potentiometer"), ", ...)."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-javascript"
  }, "jacdac.sensors = {\n    \"button\": [1, 0, 0],\n    \"potentiometer\": [0.1, 0.2],\n    \"accelerometer\": [\n        [0, 1, 0], \n        [0.5, 0.5, 1]\n    ]\n}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "single-value-sensors",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#single-value-sensors",
    "aria-label": "single value sensors permalink",
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
  }))), "Single value sensors"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "For sensors with a single numerical value, like a thermometer, readings are grouped in a ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "number"), " array. To access the readings, start by extracting the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/services"
  }, "service"), " data you want."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-javascript"
  }, "// grabs an array with all potentiometer readings (number[]) connected to jacdac\nconst { potentiometer } = jacdac.sensors\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Then map the reading to local variables. Depending on the number of connected sensors,\nsome value will be undefined so make sure to assign defaults."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-javascript"
  }, "// destructure readings into r,g,b variables\n// if sensors are missing, default to 0\nconst [r = 0, g = 0, b = 0] = potentiometer\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Use those values any way you want!"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-p5js"
  }, "// rescale 0..1 to 0..255 and repaint background\nbackground(r * 255, g * 255, b * 255)\n-----\nfunction setup() {\n    createCanvas(400, 400)\n}\nfunction draw() {\n    // grabs an array with all potentiometer readings (number[]) connected to jacdac\n    const { potentiometer } = jacdac.sensors\n    // destructure readings into r,g,b variables\n    // if sensors are missing, default to 0\n    const [r = 0, g = 0, b = 0] = potentiometer\n    // rescale 0..1 to 0..255 to repaint background\n    background(r * 255, g * 255, b * 255)\n}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "composite-value-sensors",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#composite-value-sensors",
    "aria-label": "composite value sensors permalink",
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
  }))), "Composite value sensors"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "For sensors with multiple values, like an accelerometer returning a 3D force, readings are grouped in an object array\nindexed by the field names."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-javascript"
  }, "const { accelerometer } = jacdac.sensors\nconst [acceleration] = accelerometer\n// the acceleration is stored as a ``{ x: .., y: ..., z: ... }`` object\n// add ``|| {}`` to handle missing data\nconst { x: ax, y: ay, z: az } = acceleration || {}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "enumerating-sensors",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#enumerating-sensors",
    "aria-label": "enumerating sensors permalink",
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
  }))), "Enumerating sensors"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "If you do not know the number of sensors ahead of time, you can use a ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "for"), " loop\nto iterate the list of readings."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-p5js"
  }, "for (const acceleration of accelerometer) {\n    const { x: ax = 0, y: ay = 0, z: az = 0 } = acceleration\n    ...\n}\n-----\nfunction setup() {\n    createCanvas(400, 400)\n}\nfunction draw() {\n    const { accelerometer } = jacdac.sensors\n    // the acceleration is stored as a ``{ x: .., y: ..., z: ... }`` object\n    for(const acceleration of accelerometer) {\n        const { x: ax = 0, y: ay = 0, z: az = 0 } = acceleration\n        // map g (gravities) to 100..300 on canvas\n        const x = map(ax, -1, 1, 100, 300)\n        const y = map(ay, -1, 1, 100, 300)\n        const d = map(az, -1, 1, 5, 50)\n        // draw point\n        stroke('white')\n        circle(x, y, d)\n    }\n}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "pro-tip-add-a-document-camera-to-your-sketch",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#pro-tip-add-a-document-camera-to-your-sketch",
    "aria-label": "pro tip add a document camera to your sketch permalink",
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
  }))), "Pro tip: add a document camera to your sketch!"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "It can be very helpful to display a live stream of your document camera in the sketch: you can record the hardware interaction and the screen. This can be done with a couple lines of p5js code."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-p5js"
  }, "capture = createCapture(VIDEO);\ncapture.size(480, 320);\n-----\nfunction setup() {\n    createCanvas(400, 400)\n    // start a webcam to capture video\n    const capture = createCapture(VIDEO);\n    capture.size(400, 320);\n}\nfunction draw() {\n    const { potentiometer } = jacdac.sensors\n    const [r = 0, g = 0, b = 0] = potentiometer\n    background(r * 255, g * 255, b * 255)\n}\n")));
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
//# sourceMappingURL=component---src-pages-clients-p-5-js-sensors-mdx-3acb9c78cc96f5245cb1.js.map