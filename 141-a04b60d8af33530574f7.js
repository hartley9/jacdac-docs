"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[141],{

/***/ 60141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardWifi; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38030);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80791);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6210);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60650);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88237);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79885);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50092);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73512);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72179);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81794);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89713);














function ConnectAp(props) {
  var {
    service,
    info
  } = props;
  var {
    ssid,
    flags,
    rssi
  } = info;
  var {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var selectId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var passwordId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();

  var handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  var handleConnect = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiCmd.Connect */ .kBD.Connect, [ssid, password || ""], true);
    });

    return function handleConnect() {
      return _ref.apply(this, arguments);
    };
  }();

  var toggleSelected = () => setSelected(!selected);

  var hasPassword = !!(flags & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiAPFlags.HasPassword */ .GHo.HasPassword);
  var connectError = !password && !hasPassword ? "password required" : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    id: selectId,
    button: true,
    onClick: toggleSelected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    primary: ssid,
    secondary: "rssi: " + rssi
  }), selected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    id: passwordId,
    value: password,
    label: "Password",
    fullWidth: true,
    type: "password",
    required: !hasPassword,
    helperText: connectError,
    onChange: handlePasswordChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    variant: "contained",
    color: "primary",
    disabled: !!connectError,
    onClick: handleConnect
  }, "Connect")));
}

function ConnectDialog(props) {
  var {
    open,
    setOpen,
    service
  } = props;
  var {
    0: aps,
    1: setAps
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var mounted = (0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();

  var handleClose = () => setOpen(false);

  var startScan = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      var res = yield service.receiveWithInPipe(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiCmd.Scan */ .kBD.Scan, "u32 x[4] i8 u8 b[6] s[33]");
      if (!mounted()) return;
      var newAps = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .arrayConcatMany */ .ue)(res).map(_ref3 => {
        var [flags, rssi, channel, bssid, ssid] = _ref3;
        return {
          flags,
          rssi,
          channel,
          bssid,
          ssid
        };
      }).sort((l, r) => l.rssi - r.rssi);
      setAps(newAps || []);
    });

    return function startScan() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    open: open,
    fullWidth: true,
    maxWidth: "lg",
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null, "Connect to Wifi", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    onClick: startScan,
    title: "scan",
    autoRun: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, null, aps.map(ap => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectAp, {
    key: ap.ssid,
    service: service,
    info: ap
  })))));
}

function DashboardWifi(props) {
  var {
    service
  } = props;
  var {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var connectId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var color = "primary";
  var {
    textPrimary
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(color);
  var connectedRegister = service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiReg.Connected */ .eFM.Connected);
  var connected = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterBoolValue */ .I8)(connectedRegister, props);

  var handleConnectionClick = () => setOpen(true);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    component: "span",
    variant: "subtitle2"
  }, "Wifi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
    checked: connected,
    "aria-labelledby": connectId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: ".no-pointer-events",
    id: connectId
  }, connected ? "connected" : "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: "Connect to wifi",
    onClick: handleConnectionClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectDialog, {
    open: open,
    setOpen: setOpen,
    service: service
  }));
}

/***/ })

}]);
//# sourceMappingURL=141-a04b60d8af33530574f7.js.map