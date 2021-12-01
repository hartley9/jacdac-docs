"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5680],{

/***/ 27161:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"
}), 'Bluetooth');

exports.Z = _default;

/***/ }),

/***/ 54959:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 21898:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"
}), 'Usb');

exports.Z = _default;

/***/ }),

/***/ 2930:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
}), 'Wifi');

exports.Z = _default;

/***/ }),

/***/ 14308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SettingsClient */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94578);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71815);
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91635);
/* harmony import */ var _packet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57683);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93642);
/* harmony import */ var _serviceclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56763);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);








/**
 * A settings service client implementation.
 * @category Clients
 */

var SettingsClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(SettingsClient, _JDServiceClient);

  function SettingsClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    service.registersUseAcks = true;
    return _this;
  }

  var _proto = SettingsClient.prototype;

  _proto.clear = /*#__PURE__*/function () {
    var _clear = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      yield this.service.sendCmdAsync(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Clear */ .vnb.Clear);
    });

    function clear() {
      return _clear.apply(this, arguments);
    }

    return clear;
  }();

  _proto.listKeys = /*#__PURE__*/function () {
    var _listKeys = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      var inp = new _pipes__WEBPACK_IMPORTED_MODULE_3__/* .InPipeReader */ .oI(this.bus);
      yield this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.ListKeys */ .vnb.ListKeys), true);
      var {
        output
      } = yield inp.readAll();
      var keys = output.map(pkt => pkt.stringData);
      return keys.filter(k => !!k);
    });

    function listKeys() {
      return _listKeys.apply(this, arguments);
    }

    return listKeys;
  }();

  _proto.list = /*#__PURE__*/function () {
    var _list = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
      var inp = new _pipes__WEBPACK_IMPORTED_MODULE_3__/* .InPipeReader */ .oI(this.bus);
      yield this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.List */ .vnb.List), true);
      var {
        output
      } = yield inp.readAll();
      return output.map(pkt => {
        var [key, value] = pkt.jdunpack("z b");
        return key && {
          key,
          value
        };
      }).filter(kv => !!kv);
    });

    function list() {
      return _list.apply(this, arguments);
    }

    return list;
  }();

  _proto.setValue = /*#__PURE__*/function () {
    var _setValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (key, value) {
      key = key.trim();

      if (value === undefined) {
        yield this.deleteValue(key);
      } else {
        var pkt = _packet__WEBPACK_IMPORTED_MODULE_2__/* ["default"].from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Set */ .vnb.Set, (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdpack */ .AV)("z b", [key, value]));
        yield this.service.sendPacketAsync(pkt);
        this.emit(_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
      }
    });

    function setValue(_x, _x2) {
      return _setValue.apply(this, arguments);
    }

    return setValue;
  }();

  _proto.setStringValue = /*#__PURE__*/function () {
    var _setStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (key, value) {
      yield this.setValue(key, value ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .stringToBuffer */ .k8)(value) : undefined);
    });

    function setStringValue(_x3, _x4) {
      return _setStringValue.apply(this, arguments);
    }

    return setStringValue;
  }();

  _proto.getValue = /*#__PURE__*/function () {
    var _getValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (key) {
      if (!key) return undefined;
      key = key.trim();
      var pkt = _packet__WEBPACK_IMPORTED_MODULE_2__/* ["default"].from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Get */ .vnb.Get, (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdpack */ .AV)("s", [key]));
      var resp = yield this.service.sendCmdAwaitResponseAsync(pkt);
      var [rkey, value] = (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdunpack */ .TE)(resp.data, "z b");

      if (key !== rkey) {
        console.error("device returned different key, got \"" + rkey + "\", expected \"" + key + "\"");
        return undefined;
      }

      return value;
    });

    function getValue(_x5) {
      return _getValue.apply(this, arguments);
    }

    return getValue;
  }();

  _proto.getStringValue = /*#__PURE__*/function () {
    var _getStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (key) {
      var value = yield this.getValue(key);
      return value && (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .bufferToString */ .zT)(value);
    });

    function getStringValue(_x6) {
      return _getStringValue.apply(this, arguments);
    }

    return getStringValue;
  }();

  _proto.deleteValue = /*#__PURE__*/function () {
    var _deleteValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (key) {
      if (!key) return;
      key = key.trim();
      var pkt = _packet__WEBPACK_IMPORTED_MODULE_2__/* ["default"].from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Delete */ .vnb.Delete, (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdpack */ .AV)("s", [key]));
      yield this.service.sendPacketAsync(pkt);
      this.emit(_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
    });

    function deleteValue(_x7) {
      return _deleteValue.apply(this, arguments);
    }

    return deleteValue;
  }();

  return SettingsClient;
}(_serviceclient__WEBPACK_IMPORTED_MODULE_4__/* .JDServiceClient */ .P);
/* harmony default export */ __webpack_exports__["Z"] = (SettingsClient);

/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39211);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26799);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5061);
/* harmony import */ var _buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45608);
/* harmony import */ var _hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53074);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports









function NoSsrConnectAlert(props) {
  var {
    serviceClass,
    closeable
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  var {
    transports
  } = bus;
  var devices = (0,_hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    serviceClass,
    ignoreInfrastructure: true
  });
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    component: "span",
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    full: "always",
    transparent: true
  }))));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 84125:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2636);
/* harmony import */ var _jacdac_ts_src_jdom_transport_transport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27591);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97321);
/* harmony import */ var _ui_IconButtonWithProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16845);
/* harmony import */ var _icons_TransportIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37564);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20509);









function ConnectButton(props) {
  var {
    full,
    className,
    transparent,
    transport,
    onClick,
    specification,
    typeInTitle
  } = props;
  var {
    type
  } = transport;
  var connectionState = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(transport, t => t.connectionState);
  var showDisconnect = connectionState == _jacdac_ts_src_jdom_transport_transport__WEBPACK_IMPORTED_MODULE_2__/* .ConnectionState.Connected */ .em.Connected || connectionState == _jacdac_ts_src_jdom_transport_transport__WEBPACK_IMPORTED_MODULE_2__/* .ConnectionState.Disconnecting */ .em.Disconnecting;
  var inProgress = connectionState == _jacdac_ts_src_jdom_transport_transport__WEBPACK_IMPORTED_MODULE_2__/* .ConnectionState.Connecting */ .em.Connecting || connectionState == _jacdac_ts_src_jdom_transport_transport__WEBPACK_IMPORTED_MODULE_2__/* .ConnectionState.Disconnecting */ .em.Disconnecting;
  var {
    mobile
  } = (0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  var small = full !== true && (!full || mobile);
  var disabled = connectionState != _jacdac_ts_src_jdom_transport_transport__WEBPACK_IMPORTED_MODULE_2__/* .ConnectionState.Connected */ .em.Connected && connectionState != _jacdac_ts_src_jdom_transport_transport__WEBPACK_IMPORTED_MODULE_2__/* .ConnectionState.Disconnected */ .em.Disconnected;
  var handleClick = showDisconnect ? /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
    onClick === null || onClick === void 0 ? void 0 : onClick();
    yield transport.disconnect();
  }) : /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* () {
    onClick === null || onClick === void 0 ? void 0 : onClick();
    yield transport.connect();
  });
  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    color: "primary",
    variant: "dot",
    invisible: !showDisconnect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    type: transport.type
  }));
  var label = showDisconnect ? "disconnect from " + type : "connect to " + ((specification === null || specification === void 0 ? void 0 : specification.name) || type);
  var title = showDisconnect ? typeInTitle ? "disconnect " + type : "disconnect" : typeInTitle ? "connect " + type : "connect";
  var trackName = "transport.connect." + type;
  var trackProperties = {
    transport: type
  };
  if (small) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithProgress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    "aria-label": label,
    title: label,
    color: transparent ? "inherit" : "primary",
    className: className,
    disabled: disabled,
    indeterminate: inProgress,
    onClick: handleClick
  }, icon));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    trackName: trackName,
    trackProperties: trackProperties,
    "aria-label": label,
    title: label,
    size: "small",
    variant: transparent ? "outlined" : "contained",
    color: transparent ? "inherit" : "primary",
    className: className,
    startIcon: icon,
    disabled: disabled,
    onClick: handleClick
  }, title);
}

/***/ }),

/***/ 45608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectButtons; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ConnectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84125);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71973);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20509);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2636);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84377);
/* harmony import */ var _icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36656);


var _excluded = ["full"];










function DisconnectedButton(props) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  var {
    mobile
  } = (0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  var {
    toggleShowConnectTransportDialog
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP);
  var {
    full,
    transparent,
    className
  } = props;
  var {
    0: working,
    1: setWorking
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var small = !full || mobile;
  var trackName = "transport.connect.start";

  var handleConnect = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      try {
        setWorking(true);
        yield bus.connect(true);
        if (!bus.connected) toggleShowConnectTransportDialog();
      } finally {
        setWorking(false);
      }
    });

    return function handleConnect() {
      return _ref.apply(this, arguments);
    };
  }();

  if (small) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: "Connect to a physical device",
    color: transparent ? "inherit" : "primary",
    className: className,
    onClick: handleConnect,
    disabled: working
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null)));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    trackName: trackName,
    title: "Connect to a physical device",
    size: "small",
    variant: transparent ? "outlined" : "contained",
    color: transparent ? "inherit" : "primary",
    className: className,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_JacdacIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null),
    onClick: handleConnect,
    disabled: working
  }, "Connect");
}

function ConnectButtons(props) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);

  var {
    full
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(props, _excluded);

  var {
    transports
  } = bus;
  var disconnected = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(bus, _ => _.disconnected);
  if (!(transports !== null && transports !== void 0 && transports.length)) return null;
  return disconnected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisconnectedButton, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, transports.filter(tr => !tr.disconnected).map(transport => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConnectButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, Object.assign({
    key: transport.type,
    transport: transport
  }, rest, {
    full: full === "always"
  }))));
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(bus, _ => (_ === null || _ === void 0 ? void 0 : _.services(options)) || [], [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 37564:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TransportIcon; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Usb.js
var Usb = __webpack_require__(21898);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Bluetooth.js
var Bluetooth = __webpack_require__(27161);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Wifi.js
var Wifi = __webpack_require__(2930);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(67648);
;// CONCATENATED MODULE: ./src/components/icons/SerialIcon.tsx


function SerialIcon(props) {
  return /*#__PURE__*/react.createElement(SvgIcon/* default */.Z, Object.assign({
    titleAccess: "Serial port"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M20.605,7.172l-17.21,-0c0,-0 -0.299,0.052 -0.507,0.097c-0.993,0.213 -1.745,1.03 -1.873,2.039l-0.009,0.126c-0.03,0.586 0.059,1.173 0.261,1.724c0.47,1.283 1.396,3.811 1.489,4.066l0.083,0.187l-0.004,-0.009c0.371,0.802 1.174,1.315 2.057,1.315l14.216,-0c0.883,-0 1.686,-0.513 2.057,-1.315l0.079,-0.178c0.093,-0.255 1.02,-2.783 1.489,-4.066c0.201,-0.547 0.29,-1.129 0.262,-1.711l-0.009,-0.139c-0.129,-1.009 -0.88,-1.826 -1.874,-2.039l-0.397,-0.085c-0.035,-0.008 -0.072,-0.012 -0.11,-0.012Zm-17.156,1.023l17.102,-0l0.346,0.074c0.566,0.121 0.994,0.584 1.072,1.156l0.005,0.068c0.02,0.452 -0.048,0.896 -0.201,1.314l-1.483,4.049l-0.054,0.119c-0.204,0.439 -0.644,0.719 -1.128,0.719l-14.216,0c-0.484,0 -0.925,-0.281 -1.129,-0.72l-0.053,-0.118l-1.483,-4.049c-0.154,-0.422 -0.223,-0.871 -0.2,-1.32l0.004,-0.062c0.078,-0.572 0.506,-1.035 1.072,-1.156l0.346,-0.074Zm0.326,6.805l0.002,0.008l-0.002,-0.008Zm6.531,-2.571c0.47,-0 0.852,0.382 0.852,0.852c-0,0.47 -0.382,0.852 -0.852,0.852c-0.471,0 -0.853,-0.382 -0.853,-0.852c0,-0.47 0.382,-0.852 0.853,-0.852Zm-3.389,-0c0.47,-0 0.852,0.382 0.852,0.852c-0,0.47 -0.382,0.852 -0.852,0.852c-0.471,0 -0.853,-0.382 -0.853,-0.852c0,-0.47 0.382,-0.852 0.853,-0.852Zm6.777,-0c0.471,-0 0.853,0.382 0.853,0.852c-0,0.47 -0.382,0.852 -0.853,0.852c-0.47,0 -0.852,-0.382 -0.852,-0.852c0,-0.47 0.382,-0.852 0.852,-0.852Zm3.389,-0c0.471,-0 0.853,0.382 0.853,0.852c-0,0.47 -0.382,0.852 -0.853,0.852c-0.47,0 -0.852,-0.382 -0.852,-0.852c0,-0.47 0.382,-0.852 0.852,-0.852Zm-11.861,-2.674c0.471,0 0.853,0.382 0.853,0.853c-0,0.47 -0.382,0.852 -0.853,0.852c-0.47,-0 -0.852,-0.382 -0.852,-0.852c0,-0.471 0.382,-0.853 0.852,-0.853Zm3.389,0c0.471,0 0.852,0.382 0.852,0.853c0,0.47 -0.381,0.852 -0.852,0.852c-0.47,-0 -0.852,-0.382 -0.852,-0.852c-0,-0.471 0.382,-0.853 0.852,-0.853Zm3.389,0c0.47,0 0.852,0.382 0.852,0.853c0,0.47 -0.382,0.852 -0.852,0.852c-0.47,-0 -0.852,-0.382 -0.852,-0.852c-0,-0.471 0.382,-0.853 0.852,-0.853Zm3.389,0c0.47,0 0.852,0.382 0.852,0.853c0,0.47 -0.382,0.852 -0.852,0.852c-0.47,-0 -0.852,-0.382 -0.852,-0.852c-0,-0.471 0.382,-0.853 0.852,-0.853Zm3.389,0c0.47,0 0.852,0.382 0.852,0.853c0,0.47 -0.382,0.852 -0.852,0.852c-0.471,-0 -0.852,-0.382 -0.852,-0.852c-0,-0.471 0.381,-0.853 0.852,-0.853Zm-16.752,-0.26l-0.003,0.029l0.003,-0.029Z"
  }));
}
;// CONCATENATED MODULE: ./src/components/icons/TransportIcon.tsx
 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name





function TransportIcon(props) {
  var {
    type,
    className
  } = props;

  switch (type) {
    case constants/* PACKETIO_TRANSPORT */.GII:
    case constants/* USB_TRANSPORT */.W3h:
      return /*#__PURE__*/react.createElement(Usb/* default */.Z, {
        className: className
      });

    case constants/* BLUETOOTH_TRANSPORT */.HZx:
      return /*#__PURE__*/react.createElement(Bluetooth/* default */.Z, {
        className: className
      });

    case constants/* SERIAL_TRANSPORT */.NbT:
      return /*#__PURE__*/react.createElement(SerialIcon, {
        className: className
      });

    case constants/* WEBSOCKET_TRANSPORT */.uJd:
      return /*#__PURE__*/react.createElement(Wifi/* default */.Z, {
        className: className
      });

    default:
      return /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
        kind: constants/* VIRTUAL_DEVICE_NODE_NAME */.UX7,
        className: className
      });
  }
}

/***/ }),

/***/ 2636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36176);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72513);

var _excluded = ["trackName", "trackProperties", "onClick"];



function Button(props) {
  var {
    trackName,
    trackProperties,
    onClick
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props, _excluded);

  var {
    trackEvent
  } = (0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
  var handleClick = !trackName || !trackEvent || !onClick ? onClick : ev => {
    trackEvent(trackName, trackProperties);
    onClick(ev);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, Object.assign({
    onClick: handleClick
  }, rest));
}

/***/ }),

/***/ 79465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function useServiceClient(service, factory, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var {
    0: client,
    1: setClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var c = service && factory(service);
    setClient(c);
    return () => c === null || c === void 0 ? void 0 : c.unmount();
  }, [service].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deps))); // don't use factory in cache!

  return client;
}

/***/ })

}]);
//# sourceMappingURL=010bed8ca38c96135e5d2d69c8213a27f3e3e298-0b5d68a4f8e00a56ebb9.js.map