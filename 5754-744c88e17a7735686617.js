"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5754],{

/***/ 95754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardGyroscope; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49013);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);
/* harmony import */ var _widgets_CanvasWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51761);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2285);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18581);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23461);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82677);













function Sliders(props) {
  var {
    server,
    register,
    visible
  } = props;
  var rates = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(register, {
    visible
  }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var handleChangeX = (event, newValue) => {
    var [, y, z] = server.reading.values(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    var n = newValue;
    server.reading.setValues([n, y, z]);
    register.sendGetAsync();
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleChangeY = (event, newValue) => {
    var [x,, z] = server.reading.values(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    var n = newValue;
    server.reading.setValues([x, n, z]);
    register.sendGetAsync();
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleChangeZ = (event, newValue) => {
    var [x, y] = server.reading.values(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    var n = newValue;
    server.reading.setValues([x, y, n]);
    register.sendGetAsync();
  };

  var valueDisplay = v => (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .roundWithPrecision */ .JI)(v, 1) + "\xB0/s";

  if (!(rates !== null && rates !== void 0 && rates.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null);
  var [x, y, z] = rates;
  var step = 1;
  var marks = [{
    value: 0
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    label: "X",
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "x rotation rate slider",
    min: -180,
    max: 180,
    step: step,
    value: x,
    marks: marks,
    onChange: handleChangeX
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    label: "Y",
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "y rotation rate slider",
    min: -180,
    max: 180,
    step: step,
    value: y,
    marks: marks,
    onChange: handleChangeY
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    label: "Z",
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "z rotation rate slider",
    min: -180,
    max: 180,
    step: step,
    value: z,
    marks: marks,
    onChange: handleChangeZ
  })));
}

function DashboardGyroscope(props) {
  var {
    service,
    visible
  } = props;
  var register = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .GyroscopeReg.RotationRates */ .Eju.RotationRates);
  (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(register, props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service);
  var color = server ? "secondary" : "primary";
  var {
    active
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(color);
  var rotator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((delta, rotation) => {
    var rates = register.unpackedValue;
    if (!rates) return;
    var [x, y, z] = rates; // degrees

    var degreesToRadians = Math.PI / 180;
    var f = delta * degreesToRadians;
    return {
      x: rotation.x + x * f,
      y: rotation.y - z * f,
      z: rotation.z - y * f
    };
  }, [register]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CanvasWidget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: active,
    rotator: rotator
  })))), server && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Sliders, {
    server: server,
    register: register,
    visible: visible
  }));
}

/***/ })

}]);
//# sourceMappingURL=5754-744c88e17a7735686617.js.map