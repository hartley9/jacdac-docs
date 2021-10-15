"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7611,7746],{

/***/ 94500:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 20170:
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
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
}), 'Share');

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91448);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45656);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42862);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    component: "span",
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    full: "always",
    transparent: true
  }))));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
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

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91448);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
  hr: {
    background: theme.palette.text.disabled,
    marginBottom: "unset"
  },
  start: {
    width: theme.spacing(2)
  }
}));
function GridHeader(props) {
  var {
    title,
    count,
    variant,
    action
  } = props;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ }),

/***/ 79465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93433);
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

/***/ }),

/***/ 637:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HIDEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(93433);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1059);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79885);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(94500);
/* harmony import */ var _jacdac_ts_src_jdom_clients_settingsclient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14308);
/* harmony import */ var _components_useServiceClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79465);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80303);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2928);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36176);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95453);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95393);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94431);
/* harmony import */ var _components_devices_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33292);
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7746);
/* harmony import */ var _components_ui_Suspense__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69672);
/* harmony import */ var _components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(36134);
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84377);
/* harmony import */ var _components_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(99808);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20170);
























var ImportButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119)));

 // all settings keys are prefixed with this string

var PREFIX = "@ph_"; // data layout format (18bytes)

var FORMAT = "s"; // data layout types

function phraseToBuffer(ev) {
  var payload = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_8__/* .jdpack */ .AV)(FORMAT, [ev.phrase]);
  return payload;
}

function bufferToPhrase(key, data) {
  var [phrase] = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_8__/* .jdunpack */ .TE)(data, FORMAT);
  return {
    key,
    phrase
  };
}

function HIDEvents() {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  var {
    setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AppContext__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP);
  var settingsServices = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b
  });
  var {
    0: settingsService,
    1: setSettingsService
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var {
    0: phrases,
    1: setPhrases
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var gridBreakpoints = (0,_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
  var exportRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP);
  var factory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(srv => new _jacdac_ts_src_jdom_clients_settingsclient__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(srv), []);
  var settings = (0,_components_useServiceClient__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(settingsService, factory);
  (0,_components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b);
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(settings, (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .debounce */ .Ds)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(function* () {
    var phrs = [];

    if (settings) {
      var all = yield settings.list();

      for (var kv of all.filter(entry => {
        var _entry$key;

        return (_entry$key = entry.key) === null || _entry$key === void 0 ? void 0 : _entry$key.startsWith(PREFIX);
      })) {
        var {
          key,
          value
        } = kv;
        var he = bufferToPhrase(key, value);
        if (he) phrs.push(he);
      }
    } // different? set the variable


    if (JSON.stringify(phrs) !== JSON.stringify(phrases)) setPhrases(phrs);
  }), 500));

  var handlePhraseChange = event => {
    var index = Number.parseInt(event.target.id);
    var phrase = phrases[index];
    phrase.phrase = event.target.value;
    setPhrases(phrases.slice());
  };

  var handleAddPhrase = () => {
    setPhrases([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(phrases), [{
      phrase: ""
    }]));
  };

  var handleRemovePhrase = index => /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(function* () {
    var {
      key
    } = phrases[index];
    if (key) yield settings.deleteValue(key);
    setPhrases([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(phrases.slice(0, index)), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(phrases.slice(index))));
  });

  var handleSelectSettingsService = service => () => setSettingsService(settingsService === service ? undefined : service);

  var handleClearPhrases = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(function* () {
      yield Promise.all(phrases.filter(_ref4 => {
        var {
          key
        } = _ref4;
        return !!key;
      }).map(phrase => settings.deleteValue(phrase.key)));
      setPhrases([]);
    });

    return function handleClearPhrases() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleSavePhrases = () => {
    phrases.forEach(phrase => {
      if (!phrase.key) phrase.key = PREFIX + (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_9__/* .randomDeviceId */ .b_)();
      settings.setValue(phrase.key, phraseToBuffer(phrase));
    });
  };

  var handleExport = () => {
    fileStorage.saveText("phrases.json", JSON.stringify((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .clone */ .d9)(phrases).map(h => {
      delete h.key;
      return h;
    })));
  };

  var exportUri = phrases && "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .clone */ .d9)(phrases).map(h => {
    delete h.key;
    return h;
  })));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (exportRef.current) exportRef.current.download = "phrases.json";
  }, [exportRef.current]);

  var handleFilesUploaded = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(function* (files) {
      for (var file of files) {
        try {
          var text = yield file.text();
          var json = JSON.parse(text);

          if (Array.isArray(json)) {
            for (var phrase of json) {
              var payload = phraseToBuffer(phrase);
              settings.setValue(PREFIX + (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_9__/* .randomDeviceId */ .b_)(), payload);
            }
          }
        } catch (e) {
          console.warn(e);
          setError("invalid file " + file.name);
        }
      }
    });

    return function handleFilesUploaded(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Phrase configurator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    title: "Select a phrase storage device"
  }), !(settingsServices !== null && settingsServices !== void 0 && settingsServices.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b
  })), settingsServices.filter(srv => !settingsService || srv === settingsService).map(srv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, Object.assign({
    item: true,
    key: srv.id
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_devices_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    device: srv.device,
    showAvatar: true,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "outlined",
    onClick: handleSelectSettingsService(srv)
  }, settingsService === srv ? "unselect" : "select"))))), settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    title: "Phrase book"
  }), !(phrases !== null && phrases !== void 0 && phrases.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    severity: "info"
  }, "No phrases yet! Click", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Add phrase"), " to start building your phrase book.")), phrases === null || phrases === void 0 ? void 0 : phrases.map((_ref6, index) => {
    var {
      phrase
    } = _ref6;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, Object.assign({
      item: true
    }, gridBreakpoints, {
      key: index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
      value: phrase,
      spellCheck: false,
      helperText: "Enter your phrase",
      id: index.toString(),
      onChange: handlePhraseChange,
      multiline: false,
      rows: 1,
      fullWidth: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      title: "delete",
      onClick: handleRemovePhrase(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, null)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleAddPhrase
  }, "Add phrase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleSavePhrases
  }, "Save all phrases")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "contained",
    color: "secondary",
    onClick: handleClearPhrases
  }, "Clear all phrases")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "outlined",
    onClick: handleExport,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, null)
  }, "Export")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Suspense__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportButton, {
    icon: false,
    text: "Import",
    onFilesUploaded: handleFilesUploaded,
    acceptedFiles: ["application/json"]
  }))))))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-speech-strings-tsx-3a8ca22ab645c05f424c.js.map