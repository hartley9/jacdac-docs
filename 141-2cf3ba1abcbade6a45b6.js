"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[141],{

/***/ 60141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardWifi; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6210);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60650);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88237);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79885);
/* harmony import */ var gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71481);
/* harmony import */ var gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50092);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73512);












function ConnectDialog(props) {
  var {
    open,
    setOpen,
    service
  } = props;
  var {
    0: ap,
    1: setAp
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var apId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var passwordId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();

  var handleCancel = () => {
    setAp("");
    setOpen(false);
  };

  var handleApChange = event => {
    setAp(event.target.value);
  };

  var handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  var handleOk = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_7__/* .WifiCmd.Connect */ .kBD.Connect, [ap, password], true);
      setAp("");
      setPassword("");
      setOpen(false);
    });

    return function handleOk() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    open: open,
    fullWidth: true,
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, "Wifi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    id: apId,
    value: ap,
    label: "Network",
    fullWidth: true,
    type: "text",
    onChange: handleApChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    id: passwordId,
    value: password,
    label: "Password",
    fullWidth: true,
    type: "password",
    onChange: handlePasswordChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    variant: "contained",
    color: "primary",
    onClick: handleOk
  }, "Connect")));
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
  var connectedRegister = service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_7__/* .WifiReg.Connected */ .eFM.Connected);
  var connected = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_6__/* .useRegisterBoolValue */ .I8)(connectedRegister, props);

  var handleConnectionClick = () => setOpen(true);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    component: "span",
    variant: "subtitle2"
  }, "Wifi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
    checked: connected,
    "aria-labelledby": connectId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: ".no-pointer-events",
    id: connectId
  }, connected ? "connected" : "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: "Connect to wifi",
    onClick: handleConnectionClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectDialog, {
    open: open,
    setOpen: setOpen,
    service: service
  }));
}

/***/ })

}]);
//# sourceMappingURL=141-2cf3ba1abcbade6a45b6.js.map