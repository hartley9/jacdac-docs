"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3291],{

/***/ 93291:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardServo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49013);
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72901);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11935);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80838);
/* harmony import */ var _RegisterInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24162);
/* harmony import */ var _widgets_ServoWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9422);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82677);











function useActualAngle(service, visible) {
  var angleRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ServoReg.Angle */ .pmu.Angle);
  var [angle] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(angleRegister, {
    visible
  }); // sec/60deg

  var responseSpeedRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ServoReg.ResponseSpeed */ .pmu.ResponseSpeed);
  var [responseSpeed] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(responseSpeedRegister, {
    visible
  });
  var rotationalSpeed = 60 / (responseSpeed || _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_5__/* .SG90_RESPONSE_SPEED */ .$);
  var actualAngle = (0,_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(angle || 0, rotationalSpeed);
  return actualAngle;
}

function DashboardServo(props) {
  var {
    service,
    visible
  } = props;
  var enabledRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ServoReg.Enabled */ .pmu.Enabled);
  var enabled = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(enabledRegister, props);
  var angleRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ServoReg.Angle */ .pmu.Angle);
  var angle = useActualAngle(service, visible);
  var offsetRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ServoReg.Offset */ .pmu.Offset);
  var [offset] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(offsetRegister, props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var toggleOff = () => enabledRegister.sendSetBoolAsync(!enabled, true);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    container: true,
    alignContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_ServoWidget__WEBPACK_IMPORTED_MODULE_7__["default"], {
    angle: angle,
    offset: offset,
    color: color,
    enabled: enabled,
    toggleOff: toggleOff
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    register: angleRegister,
    visible: visible
  })));
}

/***/ })

}]);
//# sourceMappingURL=3291-652f5512a11f393d2bd8.js.map