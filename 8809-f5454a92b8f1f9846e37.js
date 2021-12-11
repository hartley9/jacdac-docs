"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8809],{

/***/ 10210:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m20.41 8.41-4.83-4.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.42zM7 7h7v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2z"
}), 'TextSnippet');

exports.Z = _default;

/***/ }),

/***/ 88809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TraceAlert; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49308);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43226);
/* harmony import */ var _trace_TraceClearButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77653);
/* harmony import */ var _trace_TracePlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28180);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95453);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89132);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71973);
/* harmony import */ var _mui_icons_material_TextSnippet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10210);









function TraceAlert() {
  var {
    recording,
    replayTrace
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  if (!replayTrace) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    severity: "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, "Trace replay mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_trace_TracePlayButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    size: "small",
    color: "inherit"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_trace_TraceClearButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    size: "small",
    color: "inherit"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    size: "small",
    color: "inherit",
    to: "/tools/player/",
    title: "Open Trace Analyzer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_TextSnippet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null)), !recording && replayTrace && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    variant: "caption"
  }, replayTrace.packets.length, " packets, clear to resume live data."));
}

/***/ })

}]);
//# sourceMappingURL=8809-f5454a92b8f1f9846e37.js.map