"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5233],{

/***/ 65482:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84zm-7-5.84V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z"
}), 'MouseOutlined');

exports.Z = _default;

/***/ }),

/***/ 45233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDMouse; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80453);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91635);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_ts_src_servers_hidmouseserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72191);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
/* harmony import */ var _material_ui_icons_MouseOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65482);


/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
  capture: {
    whiteSpace: "pre-wrap",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.palette.primary.main
    },
    "&:focus": {
      borderColor: theme.palette.action.active
    }
  }
}));
function DashboardHIDMouse(props) {
  var {
    service
  } = props;
  var classes = useStyles();
  var preRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(service);
  var {
    0: observed,
    1: setObserved
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  var sendButton = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (buttons, event) {
      var data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("u16 u8", [buttons, event]);
      yield service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseCmd.SetButton */ .pvv.SetButton, data);
    });

    return function sendButton(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var sendMove = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (dx, dy) {
      var data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("i16 i16 u16", [dx, dy, 100]);
      yield service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseCmd.Move */ .pvv.Move, data);
    });

    return function sendMove(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var sendWheel = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (dy) {
      var data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("i16 u16", [dy, 100]);
      yield service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseCmd.Wheel */ .pvv.Wheel, data);
    });

    return function sendWheel(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var serverValue = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(server, _ => _ === null || _ === void 0 ? void 0 : _.lastCommand);
  var preview = serverValue || observed;

  var handleMouseDown = ev => {
    var {
      buttons
    } = ev;
    preRef.current.focus();
    setObserved("set button " + (0,_jacdac_ts_src_servers_hidmouseserver__WEBPACK_IMPORTED_MODULE_4__/* .renderHidMouseButtons */ .z)(buttons) + " down");
  };

  var handleMouseUp = ev => {
    var {
      buttons
    } = ev;
    setObserved("set button " + (0,_jacdac_ts_src_servers_hidmouseserver__WEBPACK_IMPORTED_MODULE_4__/* .renderHidMouseButtons */ .z)(buttons) + " up");
  };

  var handleKeyDown = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var {
        key
      } = ev;

      switch (key) {
        case "l":
          sendButton(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseButton.Left */ .chA.Left, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseButtonEvent.Click */ .A9D.Click);
          break;

        case "r":
          sendButton(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseButton.Right */ .chA.Right, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseButtonEvent.Click */ .A9D.Click);
          break;

        case "m":
          sendButton(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseButton.Middle */ .chA.Middle, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidMouseButtonEvent.Click */ .A9D.Click);
          break;

        case "ArrowRight":
          sendMove(10, 0);
          break;

        case "ArrowLeft":
          sendMove(-10, 0);
          break;

        case "ArrowUp":
          sendMove(0, -10);
          break;

        case "ArrowDown":
          sendMove(0, 10);
          break;

        case "w":
          sendWheel(-10);
          break;

        case "s":
          sendWheel(10);
          break;
      }
    });

    return function handleKeyDown(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    ref: preRef,
    className: classes.capture,
    tabIndex: 0,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_MouseOutlined__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    fontSize: "large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, "focus and type l(eft), r(ight), m(iddle) for buttons, arrow keys to move, w(heel up), d(wheel down) for the wheel")))), server && preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    variant: "caption",
    component: "pre"
  }, "mouse preview: ", preview || "...")));
}

/***/ })

}]);
//# sourceMappingURL=5233-58d0180291a68e93a8b3.js.map