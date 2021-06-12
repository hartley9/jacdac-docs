(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1025],{

/***/ 51025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCompass; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49013);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50514);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71815);
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2250);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82677);












function DashboardCompass(props) {
  var service = props.service;
  var headingRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__/* .CompassReg.Heading */ .kQD.Heading);
  var enabledRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__/* .CompassReg.Enabled */ .kQD.Enabled);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(headingRegister, props),
      heading = _useRegisterUnpackedV[0];

  var enabled = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(enabledRegister, props);

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.statusCodeRegister, props),
      status = _useRegisterUnpackedV2[0];

  var off = !enabled;
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  if (heading === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null);
  var calibrating = status === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__/* .SystemStatusCodes.Calibrating */ ._kj.Calibrating;
  var w = 64;
  var h = 64;
  var mw = 5;
  var r = (w >> 1) - 4;
  var sw = 3;
  var cx = w >> 1;
  var cy = h >> 1;
  var sp = 1;
  var pr = 5;
  var pri = 3;

  var handleChange = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ev, newValue) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return server === null || server === void 0 ? void 0 : server.reading.setValues([newValue]);

            case 2:
              headingRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var valueDisplay = function valueDisplay(angle) {
    return Math.round(angle) + "\xB0";
  };

  var toggleOff = function toggleOff() {
    return enabledRegister.sendSetBoolAsync(off, true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: controlBackground,
    stroke: background,
    strokeWidth: sw
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
    transform: "rotate(" + (off ? 0 : heading) + ", " + (w >> 1) + ", " + (h >> 1) + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M " + (cx - mw) + " " + (cy + sp / 2) + " l " + mw + " " + r + " l " + mw + " " + -r + " z",
    fill: background,
    stroke: background,
    strokeWidth: sp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M " + (cx - mw) + " " + (cy - sp / 2) + " l " + mw + " " + -r + " l " + mw + " " + r + " z",
    stroke: background,
    fill: off ? controlBackground : active,
    strokeWidth: sp
  })), calibrating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    opacity: 0.9,
    fill: background
  }), calibrating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("text", Object.assign({
    x: cx,
    y: cy,
    fontSize: 8
  }, textProps), "calibrating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    r: pr,
    ri: pri,
    cx: w - pr - 1,
    cy: h - pr - 1,
    color: color,
    strokeWidth: 1,
    off: off,
    onClick: toggleOff
  }))), server && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    color: color,
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    min: 0,
    max: 360,
    step: 1,
    value: heading,
    onChange: handleChange,
    "aria-label": "heading"
  })));
}

/***/ })

}]);