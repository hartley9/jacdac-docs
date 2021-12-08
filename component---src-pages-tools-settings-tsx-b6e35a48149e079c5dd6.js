"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5560],{

/***/ 63015:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

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

/***/ 52198:
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
  d: "m12 16.5 4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"
}), 'SystemUpdateAlt');

exports.Z = _default;

/***/ }),

/***/ 79675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardActions_CardActions; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(49408);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(48416);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(62194);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/cardActionsClasses.js

function getCardActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardActions', slot);
}
var cardActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardActions', ['root', 'spacing']);
/* harmony default export */ var CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/CardActions.js


var _excluded = ["disableSpacing", "className"];








var useUtilityClasses = ownerState => {
  var {
    classes,
    disableSpacing
  } = ownerState;
  var slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardActionsUtilityClass, classes);
};

var CardActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(_ref => {
  var {
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    alignItems: 'center',
    padding: 8
  }, !ownerState.disableSpacing && {
    '& > :not(:first-of-type)': {
      marginLeft: 8
    }
  });
});
var CardActions = /*#__PURE__*/react.forwardRef(function CardActions(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardActions'
  });

  var {
    disableSpacing = false,
    className
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardActions_CardActions = (CardActions);

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

/***/ 33292:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DeviceCardHeader; }
});

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(5234);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/devices/DeviceActions.tsx
var DeviceActions = __webpack_require__(89001);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts + 1 modules
var useDeviceSpecification = __webpack_require__(34246);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(81546);
// EXTERNAL MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx
var CardMediaWithSkeleton = __webpack_require__(141);
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardMedia.tsx




function DeviceCardMedia(props) {
  var {
    device
  } = props;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  var imageUrl = (0,useDeviceImage/* default */.Z)(specification, "preview");
  return /*#__PURE__*/react.createElement(CardMediaWithSkeleton/* default */.Z, {
    image: imageUrl,
    title: specification === null || specification === void 0 ? void 0 : specification.name
  });
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 5 modules
var DeviceAvatar = __webpack_require__(64178);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(82677);
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardHeader.tsx

 // tslint:disable-next-line: no-submodule-imports













function DeviceFirmwareVersionChip(props) {
  var _specification$firmwa, _specification$firmwa2;

  var {
    device
  } = props;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  var control = (0,useChange/* default */.Z)(device, _ => _ === null || _ === void 0 ? void 0 : _.service(constants/* JD_SERVICE_INDEX_CTRL */.fey));
  var productIdentifierRegister = (0,useRegister/* default */.Z)(control, constants/* ControlReg.ProductIdentifier */.toU.ProductIdentifier);
  var [productIdentifier] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(productIdentifierRegister);
  var firmwareVersionRegister = (0,useRegister/* default */.Z)(control, constants/* ControlReg.FirmwareVersion */.toU.FirmwareVersion);
  var [firmwareVersion] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(firmwareVersionRegister);
  if (firmwareVersion == undefined) return null;
  var firmwareName = !!productIdentifier && (specification === null || specification === void 0 ? void 0 : (_specification$firmwa = specification.firmwares) === null || _specification$firmwa === void 0 ? void 0 : (_specification$firmwa2 = _specification$firmwa.find(fw => fw.productIdentifier === productIdentifier)) === null || _specification$firmwa2 === void 0 ? void 0 : _specification$firmwa2.name);
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    size: "small",
    label: [firmwareName, firmwareVersion].filter(f => !!f).join(" ")
  });
}

function DeviceTemperatureChip(props) {
  var {
    device
  } = props;
  var tempRegister = (0,useChange/* default */.Z)(device, _ => {
    var _$service;

    return _ === null || _ === void 0 ? void 0 : (_$service = _.service(0)) === null || _$service === void 0 ? void 0 : _$service.register(constants/* ControlReg.McuTemperature */.toU.McuTemperature);
  });
  var [temperature] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(tempRegister);
  if (isNaN(temperature)) return null;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    size: "small",
    label: temperature + "\xB0"
  });
}

function DeviceCardHeader(props) {
  var {
    device,
    showFirmware,
    showTemperature,
    showMedia,
    showDeviceId,
    showAvatar,
    showSettings,
    showReset
  } = props;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  return /*#__PURE__*/react.createElement(react.Fragment, null, showMedia && /*#__PURE__*/react.createElement(DeviceCardMedia, {
    device: device
  }), /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    avatar: showAvatar && /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: device
    }),
    action: /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
      device: device,
      showReset: showReset,
      showSettings: showSettings,
      hideIdentity: showAvatar
    }),
    title: /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
      color: "textPrimary",
      underline: "hover",
      to: "/devices/" + ((0,spec/* identifierToUrlPath */.uM)(specification === null || specification === void 0 ? void 0 : specification.id) || "")
    }, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
      device: device
    })),
    subheader: /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      container: true,
      spacing: 1
    }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      item: true
    }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      gutterBottom: true
    }, [specification === null || specification === void 0 ? void 0 : specification.name, showDeviceId && device.deviceId].filter(s => !!s).join(", "))), showFirmware && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      item: true
    }, /*#__PURE__*/react.createElement(DeviceFirmwareVersionChip, {
      device: device
    })), showTemperature && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      item: true
    }, /*#__PURE__*/react.createElement(DeviceTemperatureChip, {
      device: device
    })))
  }));
}

/***/ }),

/***/ 45244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ useLocationSearchParamString; },
/* harmony export */   "w": function() { return /* binding */ useLocationSearchParamBoolean; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useLocationSearchParamString(key) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof window !== "undefined") {
      var url = new URL(window.location.href);
      return url.searchParams.get(key);
    }

    return undefined;
  }, [key]);
}
function useLocationSearchParamBoolean(key, defaultValue) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof window !== "undefined") {
      var url = new URL(window.location.href);
      var v = url.searchParams.get(key);

      if (v) {
        if (v === "1" || v === "true" || v === "yes") return true;else if (v === "0" || v === "false" || v === "no") return false;else return defaultValue;
      } // empty value means true


      if (url.searchParams.has(key)) return true;
      return defaultValue;
    }

    return undefined;
  }, [key, defaultValue]);
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

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91570);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94548);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label", "labelPlacement", "labelStyle"];


function SwitchWithLabel(props) {
  var {
    label,
    labelPlacement,
    labelStyle
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, rest),
    label: label,
    style: labelStyle,
    labelPlacement: labelPlacement
  });
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

/***/ }),

/***/ 360:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(65970);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(30664);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(75510);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(79675);
// EXTERNAL MODULE: ./src/components/devices/DeviceCardHeader.tsx + 1 modules
var DeviceCardHeader = __webpack_require__(33292);
// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__(79465);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/clients/settingsclient.ts
var settingsclient = __webpack_require__(14308);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(54959);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(63015);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(50092);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./src/components/ui/SwitchWithLabel.tsx
var SwitchWithLabel = __webpack_require__(64973);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
// EXTERNAL MODULE: ./node_modules/gatsby-material-ui-components/lib/index.js + 16 modules
var lib = __webpack_require__(13883);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(6890);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/SystemUpdateAlt.js
var SystemUpdateAlt = __webpack_require__(52198);
;// CONCATENATED MODULE: ./src/components/SettingsCard.tsx






 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: match-default-export-name no-submodule-imports













var ImportButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 20119)));

function SettingRow(props) {
  var {
    client,
    name,
    value,
    mutable,
    autoKey
  } = props;
  var isSecret = name[0] == "$";
  var displayName = isSecret ? name.slice(1) : name;

  var handleComponentDelete = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      yield client.deleteValue(name);
    });

    return function handleComponentDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  var keyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var valueId = (0,react_use_id_hook_esm/* useId */.Me)();
  var nameError = "";
  var valueError = "";
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, !autoKey && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: keyId,
    error: !!nameError,
    variant: "outlined",
    label: "key",
    helperText: nameError,
    value: displayName,
    disabled: true
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: valueId,
    fullWidth: true,
    error: !!valueError,
    variant: "outlined",
    helperText: valueError,
    value: isSecret ? "..." : value,
    disabled: true
  })), mutable && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "settings.delete",
    title: "Delete settings",
    onClick: handleComponentDelete,
    icon: /*#__PURE__*/react.createElement(Delete/* default */.Z, null)
  }))));
}

function AddSettingRow(props) {
  var {
    client,
    keyPrefix,
    showSecrets,
    autoKey
  } = props;
  var {
    0: name,
    1: setName
  } = (0,react.useState)("");
  var {
    0: value,
    1: setValue
  } = (0,react.useState)("");
  var {
    0: secret,
    1: setSecret
  } = (0,react.useState)(showSecrets);
  var keyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var valueId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handleNameChange = ev => {
    setName(ev.target.value.trim());
  };

  var handleValueChange = ev => {
    setValue(ev.target.value);
  };

  var handleChecked = (ev, checked) => {
    setSecret(checked);
  };

  var handleAdd = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      var keyName = autoKey ? (0,random/* randomDeviceId */.b_)() : name;
      var key = "" + (secret ? "$" : "") + (keyPrefix || "") + keyName;
      yield client.setStringValue(key, value);
      if (!mounted()) return;
      setName("");
      setValue("");
      setSecret(showSecrets);
    });

    return function handleAdd(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var keyError = "";
  var valueError = "";
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1,
    alignContent: "center"
  }, !autoKey && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: keyId,
    error: !!keyError,
    variant: "outlined",
    label: "Add key",
    helperText: keyError,
    value: name,
    onChange: handleNameChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: valueId,
    fullWidth: true,
    error: !!valueError,
    variant: "outlined",
    label: "value",
    helperText: valueError,
    value: value,
    onChange: handleValueChange
  })), showSecrets && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(SwitchWithLabel/* default */.Z, {
    checked: secret,
    onChange: handleChecked,
    label: "Secret"
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "settings.add",
    variant: "contained",
    disabled: !autoKey && !name || !!keyError || !!valueError,
    title: "Add setting",
    onClick: handleAdd,
    icon: /*#__PURE__*/react.createElement(Add/* default */.Z, null)
  }))));
}

function ImportSettingsButton(props) {
  var {
    client
  } = props;
  var {
    setError
  } = (0,react.useContext)(AppContext/* default */.ZP);

  var handleFilesUploaded = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (files) {
      for (var file of files) {
        try {
          var text = yield file.text();
          var json = JSON.parse(text);

          if (Array.isArray(json)) {
            for (var entry of json) {
              var {
                key,
                value
              } = entry;
              if (key) yield client.setStringValue(key, value);
            }
          }
        } catch (e) {
          console.warn(e);
          setError("invalid file " + file.name);
        }
      }
    });

    return function handleFilesUploaded(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    icon: false,
    text: "Import",
    onFilesUploaded: handleFilesUploaded,
    acceptedFiles: ["application/json"]
  }));
}

function SettingsCard(props) {
  var {
    service,
    mutable,
    keyPrefix = "",
    showSecrets,
    autoKey
  } = props;
  var {
    fileStorage
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);
  var factory = (0,react.useCallback)(srv => new settingsclient/* default */.Z(srv), []);
  var client = (0,useServiceClient/* default */.Z)(service, factory);
  var values = (0,useChange/* useChangeAsync */.R)(client, /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* (c) {
      var keys = yield c === null || c === void 0 ? void 0 : c.list();
      return keys === null || keys === void 0 ? void 0 : keys.filter(_ref5 => {
        var {
          key
        } = _ref5;
        return !keyPrefix || key.startsWith(keyPrefix);
      }).map(_ref6 => {
        var {
          key,
          value
        } = _ref6;
        return {
          key,
          value: (0,utils/* bufferToString */.zT)(value)
        };
      });
    });

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }(), [keyPrefix]);
  var secrets = values === null || values === void 0 ? void 0 : values.filter(value => showSecrets && value.key[0] === "$");
  var publics = values === null || values === void 0 ? void 0 : values.filter(value => value.key[0] !== "$");

  var handleClear = /*#__PURE__*/function () {
    var _ref7 = (0,asyncToGenerator/* default */.Z)(function* () {
      return yield client === null || client === void 0 ? void 0 : client.clear();
    });

    return function handleClear() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleExport = () => fileStorage.saveText("settings.json", JSON.stringify(publics || {}, null, 2));

  if (!client) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null); // wait till loaded

  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
    device: service.device,
    showAvatar: true
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 2
  }, mutable && /*#__PURE__*/react.createElement(AddSettingRow, {
    client: client,
    keyPrefix: keyPrefix,
    showSecrets: showSecrets,
    autoKey: autoKey
  }), publics === null || publics === void 0 ? void 0 : publics.map(_ref8 => {
    var {
      key,
      value
    } = _ref8;
    return /*#__PURE__*/react.createElement(SettingRow, {
      key: key,
      name: key,
      value: value,
      client: client,
      mutable: mutable,
      showSecrets: showSecrets,
      autoKey: autoKey
    });
  }), !!(secrets !== null && secrets !== void 0 && secrets.length) && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, "Secrets"), secrets === null || secrets === void 0 ? void 0 : secrets.map(_ref9 => {
    var {
      key,
      value
    } = _ref9;
    return /*#__PURE__*/react.createElement(SettingRow, {
      key: key,
      name: key,
      value: value,
      client: client,
      mutable: mutable,
      showSecrets: showSecrets,
      autoKey: autoKey
    });
  }))), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1,
    direction: "row"
  }, mutable && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "outlined",
    trackName: "settings.clearall",
    title: "Clear all settings",
    icon: /*#__PURE__*/react.createElement(Delete/* default */.Z, null),
    onClick: handleClear
  }, "Clear")), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(lib/* Button */.zx, {
    variant: "outlined",
    title: "export",
    disabled: !values,
    onClick: handleExport,
    startIcon: /*#__PURE__*/react.createElement(SystemUpdateAlt/* default */.Z, null)
  }, "Export")), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(ImportSettingsButton, {
    client: client
  })))));
}
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
// EXTERNAL MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
var useServiceProviderFromServiceClass = __webpack_require__(36134);
// EXTERNAL MODULE: ./src/components/hooks/useLocationSearchParam.ts
var useLocationSearchParam = __webpack_require__(45244);
;// CONCATENATED MODULE: ./src/pages/tools/settings.tsx









function Page() {
  // spin up provider on demand
  (0,useServiceProviderFromServiceClass/* default */.Z)(constants/* SRV_SETTINGS */.B9b);
  var services = (0,useServices/* default */.Z)({
    serviceClass: constants/* SRV_SETTINGS */.B9b
  });
  var keyPrefix = (0,useLocationSearchParam/* useLocationSearchParamString */.D)("prefix");
  var autoKey = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("autokey", false);
  var showSecrets = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("secrets", true);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Devices Settings"), /*#__PURE__*/react.createElement("p", null, "Configure ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
    to: "/services/settings/"
  }, "settings"), " ", "services."), /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_SETTINGS */.B9b
  }), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, services.map(service => /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    key: service.id,
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/react.createElement(SettingsCard, {
    service: service,
    mutable: true,
    keyPrefix: keyPrefix,
    showSecrets: showSecrets,
    autoKey: autoKey
  })))), /*#__PURE__*/react.createElement("h2", null, "Advanced"), /*#__PURE__*/react.createElement("p", null, "You can use various URL argument to modify the behavior of this page."), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("code", null, "prefix=JD"), ", will prefix and filter keys with", " ", /*#__PURE__*/react.createElement("code", null, "JD"), "."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("code", null, "autokey"), ", will automatically generate random keys for entries. Default is false."), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("code", null, "secrets=0"), ", disables secrets")));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-settings-tsx-b6e35a48149e079c5dd6.js.map