(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1253],{

/***/ 81253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardColor; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49013);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52803);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82677);









function DashboardColor(props) {
  var service = props.service;
  var register = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ColorReg.Color */ .GOL.Color);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(register, props),
      r = _useRegisterUnpackedV[0],
      g = _useRegisterUnpackedV[1],
      b = _useRegisterUnpackedV[2];

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color),
      background = _useWidgetTheme.background;

  if (r === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null);
  var value = "rgb(" + (r * 0xff >> 0) + ", " + (g * 0xff >> 0) + ", " + (b * 0xff >> 0) + ")";

  var handleChange = function handleChange(color) {
    console.log({
      color: color
    });
    var rgb = color.rgb;
    server.reading.setValues([rgb.r / 0xff, rgb.g / 0xff, rgb.b / 0xff]);
    register.refresh();
  };

  var w = 64;
  var rx = 4;
  if (server) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_color__WEBPACK_IMPORTED_MODULE_4__/* .BlockPicker */ .if, {
    color: value,
    triangle: "hide",
    onChangeComplete: server && handleChange
  });else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    width: w,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: w,
    rx: rx,
    ry: rx,
    fill: value,
    stroke: background,
    strokeWidth: 2,
    tabIndex: 0,
    "aria-live": "polite",
    "aria-label": "color " + value + " detected"
  }));
}

/***/ })

}]);