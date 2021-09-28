"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8809],{

/***/ 88809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TraceAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43226);
/* harmony import */ var _trace_TraceClearButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77653);
/* harmony import */ var _trace_TracePlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86360);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95453);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99330);







function TraceAlert() {
  var {
    recording,
    replayTrace
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  if (!replayTrace) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    severity: "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null, "Trace replay mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_trace_TracePlayButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    size: "small",
    color: "inherit"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_trace_TraceClearButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    size: "small",
    color: "inherit"
  }), !recording && replayTrace && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    variant: "caption"
  }, replayTrace.packets.length, " packets, clear to resume live data."));
}

/***/ })

}]);
//# sourceMappingURL=8809-91219bb074eab9678203.js.map