"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8282],{

/***/ 68282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLED; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2285);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91635);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84377);
/* harmony import */ var _widgets_LEDWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56931);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82677);










function DashboardLED(props) {
  var {
    service
  } = props;
  var {
    setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(service);
  var themeColor = server ? "secondary" : "primary";
  var {
    0: speed,
    1: setSpeed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(64);
  var {
    0: brightness,
    1: setBrightness
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(32);
  var colorRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedReg.Color */ .Abo.Color);
  var [r, g, b] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(colorRegister, props);
  var {
    0: uiColor,
    1: setUiColor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r << 16 | g << 8 | b);
  var {
    0: uiSpeed,
    1: setUiSpeed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(speed);
  var waveLengthRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedReg.WaveLength */ .Abo.WaveLength);
  var [waveLength] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(waveLengthRegister, props);
  var ledCountRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedReg.LedCount */ .Abo.LedCount);
  var [ledCount] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(ledCountRegister, props);

  var setRgb = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* (rgb) {
      var r = (rgb >> 16 & 0xff) * brightness >> 8 & 0xff;
      var g = (rgb >> 8 & 0xff) * brightness >> 8 & 0xff;
      var b = (rgb >> 0 & 0xff) * brightness >> 8 & 0xff;

      try {
        yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedCmd.Animate */ .tVE.Animate, (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)("u8 u8 u8 u8", [r, g, b, speed]));
        setUiColor(r << 16 | g << 8 | b);
        setUiSpeed(speed);
      } catch (e) {
        setError(e);
      }
    });

    return function setRgb(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // sniff animate call


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => service === null || service === void 0 ? void 0 : service.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .COMMAND_RECEIVE */ .R76, pkt => {
    if (pkt.serviceCommand === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedCmd.Animate */ .tVE.Animate) {
      var [_r, _g, _b, s] = pkt.jdunpack("u8 u8 u8 u8");
      setUiColor(_r << 16 | _g << 8 | _b);
      setUiSpeed(s);
    }
  }), [service]); // sync color

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setUiColor(r << 16 | g << 8 | b), [r, g, b]); // nothing to see

  if (isNaN(uiColor)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_LEDWidget__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: themeColor,
    ledColor: uiColor,
    waveLength: waveLength,
    ledCount: ledCount,
    onLedColorChange: setRgb,
    speed: speed,
    onSpeedChange: setSpeed,
    brightness: brightness,
    onBrightnessChange: setBrightness
  });
}

/***/ })

}]);
//# sourceMappingURL=8282-43a85f068e484964d26c.js.map