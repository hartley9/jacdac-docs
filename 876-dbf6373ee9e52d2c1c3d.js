"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[876],{

/***/ 40876:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLightBulb; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49013);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60650);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82374);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86727);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48059);
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72901);
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2250);










function DashboardLightBulb(props) {
  var {
    service
  } = props;
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(service);
  var color = server ? "secondary" : "primary";
  var {
    controlBackground,
    active,
    textProps
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(color);
  var brightnessRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LightBulbReg.Brightness */ .DPc.Brightness);
  var [brightness] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(brightnessRegister, props);
  var brightnessPercent = (0,_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(Math.round(brightness * 100), 400, 5);
  var dimmeableRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LightBulbReg.Dimmeable */ .DPc.Dimmeable);
  var dimmeable = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterBoolValue */ .I8)(dimmeableRegister, props);
  if (brightness === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null);

  var handleChecked = () => brightnessRegister.sendSetPackedAsync([brightness > 0 ? 0 : 1], true); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleChange = (event, value) => {
    var b = value / 100;
    brightnessRegister.sendSetPackedAsync([b], true);
  };

  var w = 96;
  var sw = 2;
  var cx = w / 2;
  var cy = w / 2;
  var r = w / 2 - 4;
  var ri = r * brightnessPercent / 100;
  var roff = r / 3;
  var riff = roff - 4;
  var on = brightnessPercent > 0;
  var off = !on;
  var tvalue = dimmeable ? Math.round(brightnessPercent) + "%" : on ? "on" : "off";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    tabIndex: 0,
    width: w,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: cx,
    cy: cx,
    r: r,
    fill: controlBackground,
    strokeWidth: sw
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: cy,
    cy: cy,
    r: ri,
    fill: active,
    stroke: controlBackground,
    strokeWidth: sw
  }), dimmeable !== true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    off: off,
    label: tvalue,
    cx: cx,
    cy: cy,
    r: roff,
    ri: riff,
    color: color,
    onClick: handleChecked
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", Object.assign({}, textProps, {
    x: cx,
    y: cy,
    "aria-label": tvalue
  }), tvalue))), dimmeable === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
    value: brightnessPercent,
    min: 0,
    max: 100,
    valueLabelDisplay: "off",
    onChange: handleChange
  })));
}

/***/ })

}]);
//# sourceMappingURL=876-dbf6373ee9e52d2c1c3d.js.map