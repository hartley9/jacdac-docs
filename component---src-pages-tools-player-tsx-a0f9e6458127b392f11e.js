"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2657],{

/***/ 98784:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Markdown; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6890);

var _excluded = ["source"];


var ReactMarkdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 8245).then(__webpack_require__.bind(__webpack_require__, 38245)));
function Markdown(props) {
  var {
    source
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdown, others, source));
}

/***/ }),

/***/ 47094:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(85616);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__(43226);
;// CONCATENATED MODULE: ./src/components/trace/TraceAnalyzer.tsx


function TraceAnalyzer() {
  var {
    replayTrace
  } = (0,react.useContext)(PacketsContext/* default */.Z);
  return /*#__PURE__*/react.createElement(react.Fragment, null, replayTrace && /*#__PURE__*/react.createElement("pre", null, replayTrace.serializeToText()));
}
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
;// CONCATENATED MODULE: ./src/pages/tools/player.tsx




function Page() {
  var text = "\n### Collecting traces\n\nRecord traces in your logic analyser and replay them to test your services.\n\n* open the packet console\n* click on the import button to load a trace\n* click on the replay button to start running the trace\n\n### Trace Format\n\nThe trace is a text file where each line is composed of 3 parts:\n\n    timestamp framebuffer description\n\nwhere \n\n-   \"timestamp\" is ellapsed milliseconds of the frame in the trace,\n-   \"framebuffer\" is a hex-encoded frame\n-   \"description\" is a human readable description of the frame, it is ignored.  \n\n### Saleae LOGIC\n\nUse [Saleae LOGIC](https://www.saleae.com/) analyser to record trace on the Jacdac data line.\n\n* Add an \"Async Serial\" protocol analyser\n* Select \"1Mbit\"\n* Export to \"CSV/hex\".\n";
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TraceAnalyzer, null))), /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: text
  })));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-player-tsx-a0f9e6458127b392f11e.js.map