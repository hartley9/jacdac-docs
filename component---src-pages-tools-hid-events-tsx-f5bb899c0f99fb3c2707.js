(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5444,6141],{

/***/ 54959:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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

/***/ 79675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/***/ 60490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(35005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 97497:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 70030:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(19670);
var defineProperties = __webpack_require__(36048);
var enumBugKeys = __webpack_require__(80748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(60490);
var documentCreateElement = __webpack_require__(80317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 36048:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(19781);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(19670);
var toIndexedObject = __webpack_require__(45656);
var objectKeys = __webpack_require__(81956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 81956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(16324);
var enumBugKeys = __webpack_require__(80748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 14308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";

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

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);
  var hasDrawer = drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None;

  if (!drawerType && itemCount !== undefined) {
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

  if (hasDrawer) return {
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

"use strict";
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

/***/ 24180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HIDEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(79675);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(61359);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(86763);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _components_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82860);
/* harmony import */ var _components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71973);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(54959);
/* harmony import */ var _jacdac_ts_src_jdom_clients_settingsclient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14308);
/* harmony import */ var _components_useServiceClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79465);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80303);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2928);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36176);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95453);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95393);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13996);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94431);
/* harmony import */ var _components_devices_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33292);
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7746);
/* harmony import */ var _components_ui_Suspense__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6890);
/* harmony import */ var _components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36134);
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84377);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(89132);
/* harmony import */ var _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(41577);
/* harmony import */ var _components_ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54266);




























var ImportButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 20119))); // all settings keys are prefixed with this string

var PREFIX = "@ke_"; // data layout format (18bytes)

var FORMAT = "b[8] u32 u8 u8 u16 u16"; // data layout types

function HIDEventToBuffer(event, ev) {
  var deviceId = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .fromHex */ .H_)(event.service.device.deviceId);
  var {
    service,
    code
  } = event;
  var {
    serviceClass,
    serviceIndex
  } = service;
  var {
    selector,
    modifiers
  } = ev;
  var payload = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_9__/* .jdpack */ .AV)(FORMAT, [deviceId, serviceClass, serviceIndex, code, selector, modifiers]);
  return payload;
}

function bufferToHIDEvent(key, data, bus) {
  var _device$service;

  if ((data === null || data === void 0 ? void 0 : data.length) !== 18) return undefined;
  var [deviceId, serviceClass, serviceIndex, eventCode, selector, modifiers] = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_9__/* .jdunpack */ .TE)(data, FORMAT);
  var deviceIds = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .toHex */ .NC)(deviceId);
  var device = bus.device(deviceIds, true);
  var event = device === null || device === void 0 ? void 0 : (_device$service = device.service(serviceIndex)) === null || _device$service === void 0 ? void 0 : _device$service.event(eventCode);
  if (!event || event.service.serviceClass !== serviceClass) return undefined;
  return {
    key,
    eventId: event.id,
    selector,
    modifiers
  };
}

function SelectHIDEvent(props) {
  var {
    onAdd
  } = props;
  var {
    0: event,
    1: setEvent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var {
    0: selector,
    1: setSelector
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: modifiers,
    1: setModifiers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .HidKeyboardModifiers.None */ .Q2Q.None);
  var excludedServices = [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_CONTROL */ .gm9, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_PROTO_TEST */ .$Bn, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_LOGGER */ .w9j];

  var eventFilter = ev => ev.code !== _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SystemEvent.StatusCodeChanged */ .nSK.StatusCodeChanged;

  var services = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
    ignoreInfrastructure: true,
    specification: true
  }).filter(srv => excludedServices.indexOf(srv.serviceClass) < 0).filter(srv => srv.events.some(eventFilter));
  var events = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .arrayConcatMany */ .ue)(services.map(service => service.events.filter(eventFilter)));

  var handleClickEvent = newEvent => () => setEvent(event === newEvent ? undefined : newEvent);

  var handleKeyChange = (newSelector, newModifiers) => {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var disabled = !event || !selector;

  var handleAdd = () => onAdd({
    eventId: event.id,
    selector,
    modifiers
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    container: true,
    spacing: 2
  }, !(events !== null && events !== void 0 && events.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    severity: "info"
  }, "Connect your devices to bind keyboard commands.")), events.filter(ev => !event || ev === event).map(ev => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true,
    xs: 12,
    sm: 6,
    lg: 4,
    xl: 3,
    key: ev.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_devices_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
    device: ev.service.device,
    showAvatar: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
    variant: "h5"
  }, ev.service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
    variant: "h4"
  }, (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_15__/* .humanify */ .lW)(ev.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .zx, {
    onClick: handleClickEvent(ev),
    variant: "outlined"
  }, ev === event ? "unselect" : "select"))))), event && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    title: "Enter your keyboard/mouse command"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  }))), !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    title: "Save your binding"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .zx, {
    variant: "contained",
    color: "primary",
    disabled: disabled,
    onClick: handleAdd
  }, "Save binding"))));
}

function HIDEvents() {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  var {
    setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AppContext__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP);
  var settingsServices = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b
  });
  var {
    0: settingsService,
    1: setSettingsService
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var {
    0: hidEvents,
    1: setHIDEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var gridBreakpoints = (0,_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
  var exportRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var handleOpenAdd = () => setOpen(true);

  var handleCloseAdd = () => setOpen(false);

  var factory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(srv => new _jacdac_ts_src_jdom_clients_settingsclient__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(srv), []);
  var settings = (0,_components_useServiceClient__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(settingsService, factory);
  (0,_components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b);
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(settings, /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(function* () {
    var hes = [];

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
        var he = bufferToHIDEvent(key, value, bus);
        if (he) hes.push(he);
      }
    }

    if (JSON.stringify(hes) !== JSON.stringify(hidEvents)) setHIDEvents(hes);
  }));

  var handleAdd = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(function* (hidEvent) {
      setOpen(false);
      var event = bus.node(hidEvent.eventId);
      if (!event) return;
      var payload = HIDEventToBuffer(event, hidEvent);
      settings.setValue(PREFIX + (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_10__/* .randomDeviceId */ .b_)(), payload);
    });

    return function handleAdd(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRemoveBinding = index => () => {
    var {
      key
    } = hidEvents[index];
    if (key) settings.deleteValue(key);
  };

  var handleSelectSettingsService = service => () => setSettingsService(settingsService === service ? undefined : service);

  var exportUri = hidEvents && "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .clone */ .d9)(hidEvents).map(h => {
    delete h.key;
    return h;
  })));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (exportRef.current) exportRef.current.download = "bindings.json";
  }, [exportRef.current]);

  var handleFilesUploaded = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(function* (files) {
      for (var file of files) {
        try {
          var text = yield file.text();
          var json = JSON.parse(text);

          if (Array.isArray(json)) {
            for (var _hidEvent of json) {
              var event = bus.node(_hidEvent.eventId);

              if (event) {
                var payload = HIDEventToBuffer(event, _hidEvent);
                settings.setValue(PREFIX + (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_10__/* .randomDeviceId */ .b_)(), payload);
              }
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Accessibility Adapter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    title: "Select an adapter"
  }), !(settingsServices !== null && settingsServices !== void 0 && settingsServices.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b
  })), settingsServices.filter(srv => !settingsService || srv === settingsService).map(srv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, Object.assign({
    item: true,
    key: srv.id
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_devices_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
    device: srv.device,
    showAvatar: true,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .zx, {
    variant: "outlined",
    onClick: handleSelectSettingsService(srv)
  }, settingsService === srv ? "unselect" : "select"))))), settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    title: "Command Bindings"
  }), !(hidEvents !== null && hidEvents !== void 0 && hidEvents.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    severity: "info"
  }, "No bindings yet! Click", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Add binding"), " to start building your adapter.")), hidEvents === null || hidEvents === void 0 ? void 0 : hidEvents.map(_ref4 => {
    var {
      eventId,
      selector,
      modifiers
    } = _ref4;
    return {
      eventId,
      event: bus.node(eventId),
      selector,
      modifiers
    };
  }).map((_ref5, index) => {
    var {
      eventId,
      event,
      selector,
      modifiers
    } = _ref5;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, Object.assign({
      item: true
    }, gridBreakpoints, {
      key: eventId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_devices_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      device: event === null || event === void 0 ? void 0 : event.service.device,
      showAvatar: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, null, event ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      variant: "h6"
    }, event.service.name + " " + (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_15__/* .humanify */ .lW)(event.name)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      severity: "warning"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, null, "Device not found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      variant: "h5"
    }, (0,_jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_22__/* .renderKeyboardKey */ .OJ)(selector, modifiers, true))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      title: "Remove binding",
      onClick: handleRemoveBinding(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, null)))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .zx, {
    variant: "contained",
    color: "primary",
    onClick: handleOpenAdd
  }, "Add binding")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .zx, {
    ref: exportRef,
    variant: "outlined",
    href: exportUri
  }, "Export")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Suspense__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportButton, {
    icon: false,
    text: "Import",
    onFilesUploaded: handleFilesUploaded,
    acceptedFiles: ["application/json"]
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
    open: open,
    onClose: handleCloseAdd,
    maxWidth: "lg",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
    onClose: handleCloseAdd
  }, "Add binding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectHIDEvent, {
    onAdd: handleAdd
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-hid-events-tsx-f5bb899c0f99fb3c2707.js.map