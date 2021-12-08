"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9474],{

/***/ 9474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConnectTransportDialog; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66449);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61359);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49308);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84125);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81546);
/* harmony import */ var _ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(141);
/* harmony import */ var _devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74450);
/* harmony import */ var _ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54266);
/* harmony import */ var _ui_GridHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95393);
/* harmony import */ var _jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21258);












function ConnectDeviceCard(props) {
  var {
    device
  } = props;
  var image = (0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(device, "preview");
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    title: "photograph of the device",
    image: image,
    height: theme.spacing(12)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    subheader: device.name
  }));
}

function ConnectTransport(props) {
  var {
    transport,
    onClose
  } = props;
  var specifications = (0,_devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  var devices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => specifications.filter(device => {
    var _device$transport;

    return ((_device$transport = device.transport) === null || _device$transport === void 0 ? void 0 : _device$transport.type) === transport.type;
  }), [specifications]);
  if (!(devices !== null && devices !== void 0 && devices.length) && !_jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_9__/* ["default"].diagnostics */ .Z.diagnostics) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_GridHeader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    title: transport.type.toUpperCase()
  }), devices.map(device => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
    item: true,
    xs: 12,
    sm: 6,
    lg: 4,
    key: device.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectDeviceCard, {
    device: device
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
    item: true,
    xs: 12,
    textAlign: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    key: transport.type,
    transport: transport,
    onClick: onClose,
    full: true,
    typeInTitle: true
  })));
}

function ConnectTransportDialog(props) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  var {
    transports
  } = bus;
  var {
    open,
    onClose
  } = props;
  var dialogId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    id: dialogId,
    "aria-labelledby": labelId,
    open: open,
    onClose: onClose,
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    onClose: onClose,
    id: labelId
  }, "Connect to a device"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
    variant: "caption"
  }, "Find your device connection type and connect."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
    container: true,
    spacing: 2
  }, transports.map(transport => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectTransport, {
    key: transport.type,
    transport: transport,
    onClose: onClose
  })))));
}

/***/ }),

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75985);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98348);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);




var PREFIX = "GridHeader";
var classes = {
  hr: PREFIX + "-hr",
  start: PREFIX + "-start"
};
var StyledGrid = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["& ." + classes.hr]: {
      background: theme.palette.text.disabled,
      marginBottom: "unset"
    },
    ["& ." + classes.start]: {
      width: theme.spacing(2)
    }
  };
});
function GridHeader(props) {
  var {
    title,
    count,
    variant,
    action
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledGrid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    container: true,
    direction: "row",
    spacing: 1,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ })

}]);
//# sourceMappingURL=9474-aae3693a8d034d3969b6.js.map