"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1367],{

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

/***/ 49684:
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
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');

exports.Z = _default;

/***/ }),

/***/ 2518:
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
  d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
}), 'FormatAlignLeft');

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

/***/ 87202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k9": function() { return /* binding */ parseTrace; },
/* harmony export */   "Rx": function() { return /* binding */ parseLogicLog; }
/* harmony export */ });
/* unused harmony export replayLogicLog */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81794);
/* harmony import */ var _packet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57683);
/* harmony import */ var _trace_traceplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93829);
/* harmony import */ var _trace_trace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61649);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);





/**
 * Parse a trace text file
 * @param contents
 * @returns
 * @category Trace
 */

function parseTrace(contents) {
  var description = [];
  var packets = [];
  contents === null || contents === void 0 ? void 0 : contents.split(/\r?\n/).forEach(ln => {
    // parse data
    var m = /^(\d+.?\d*)\s+([a-f0-9]{12,})/i.exec(ln);

    if (!m) {
      // might be a stack trace
      if (/^\s+at\s/.test(ln)) {
        var lastPacket = packets[packets.length - 1];

        if (lastPacket) {
          var trace = lastPacket.meta[_constants__WEBPACK_IMPORTED_MODULE_4__/* .META_TRACE */ .EEP] || "";
          trace += ln + "\n";
          lastPacket.meta[_constants__WEBPACK_IMPORTED_MODULE_4__/* .META_TRACE */ .EEP] = trace;
        }
      } else {
        // probably junk data
        if (packets.length == 0) description.push(ln);
      }

      return;
    }

    var timestamp = parseInt(m[1]);
    var data = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .fromHex */ .H_)(m[2]); // add to array

    packets.push(_packet__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromBinary */ .Z.fromBinary(data, timestamp));
  });
  if (packets.length) return new _trace_trace__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP(packets, {
    description: description.join("\n").trim()
  });else return undefined;
}
/**
 * Parses a logic analyzer log into a trace
 * @param logcontents
 * @returns
 * @category Trace
 */

function parseLogicLog(logcontents) {
  if (!logcontents) return undefined;
  var res = [];
  var frameBytes = [];
  var lastTime = 0;

  for (var ln of logcontents.split(/\r?\n/)) {
    var m = /^JD (\d+) ([0-9a-f]+)/i.exec(ln);

    if (m) {
      res.push({
        timestamp: parseInt(m[1]),
        data: (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .fromHex */ .H_)(m[2])
      });
      continue;
    }
    /** Windows, logic 1.*
    Time [s],Value,Parity Error,Framing Error
    0.042909760000000,0x00,,Error
    0.042980320000000,0xD4,,
    0.042990240000000,0x81,,
    0.043000160000000,0x10,,
    0.043010240000000,0x00,,
    0.043020160000000,0xE8,,
    0.043030240000000,0xDF,,
    0.043040160000000,0xCB,,
    0.043050240000000,0xD1,,
    0.043060160000000,0x97,,
    0.043070240000000,0x34,,
    0.043080160000000,0x37,,
    0.043090240000000,0x48,,
    0.043100160000000,0x0C,,
    0.043110080000000,0x00,,
    0.043120160000000,0x00,,
    0.043130080000000,0x00,,
    0.043140160000000,0x00,,
    0.043150080000000,0x00,,
    0.043160160000000,0x00,,
    0.043170080000000,0x00,,
    0.043180160000000,0xCA,,
    0.043190080000000,0x1F,,
    0.043200160000000,0xDC,,
    0.043210080000000,0x12,,
    0.043220160000000,0x46,,
    0.043230080000000,0x47,,
    0.043240160000000,0x27,,
    0.043250080000000,0x1F,,
    0.043264800000000,0x00,,Error
    0.063968960000000,0x00,,Error
     */


    m = /^([\d.]+),(?:Async Serial,)?.*(0x[A-F0-9][A-F0-9])/.exec(ln);
    if (!m) continue;
    var tm = parseFloat(m[1]);

    if (lastTime && tm - lastTime > 0.1) {
      res.push({
        timestamp: lastTime * 1000,
        data: new Uint8Array(frameBytes),
        info: "timeout"
      });
      frameBytes = [];
      lastTime = 0;
    }

    lastTime = tm;

    if (/(framing error|Error)/.test(ln)) {
      if (frameBytes.length > 0) res.push({
        timestamp: lastTime * 1000,
        data: new Uint8Array(frameBytes)
      });
      frameBytes = [];
      lastTime = 0;
    } else {
      frameBytes.push(parseInt(m[2]));
    }
  }

  return res;
}
/**
 * Replays a parsed logic log
 * @param bus
 * @param frames
 * @param speed
 * @category Trace
 */

function replayLogicLog(bus, frames, speed) {
  var packets = arrayConcatMany(frames.map(frame => Packet.fromFrame(frame.data, frame.timestamp)));
  var player = new TracePlayer(bus, speed);
  player.trace = new Trace(packets);
  bus.clear(packets[0].timestamp);
  player.start();
}

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

/***/ 41367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AppDrawer; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(99465);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(67417);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(6890);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/layout.tsx + 19 modules
var layout = __webpack_require__(12159);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronLeft.js
var ChevronLeft = __webpack_require__(49684);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__(43226);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(87202);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/trace/trace.ts
var trace_trace = __webpack_require__(61649);
;// CONCATENATED MODULE: ./src/components/trace/TraceImportButton.tsx









var ImportButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 20119)));
function TraceImportButton(props) {
  var {
    icon,
    disabled
  } = props;
  var {
    recording,
    setReplayTrace
  } = (0,react.useContext)(PacketsContext/* default */.Z);
  var {
    setError
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    0: importing,
    1: setImporting
  } = (0,react.useState)(false);

  var handleFiles = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (files) {
      var file = files[0];

      if (file) {
        try {
          setImporting(true);
          var txt = yield file.text();
          var trace; // let's try a few format and see if we're lucky

          try {
            trace = (0,logparser/* parseTrace */.k9)(txt);
          } catch (e) {
            console.log("trace parse error", e);
          } // try logic format


          if (!trace) {
            try {
              var frames = (0,logparser/* parseLogicLog */.Rx)(txt); // ensure format is ok

              var packets = (0,utils/* arrayConcatMany */.ue)(frames.map(frame => packet/* default.fromFrame */.Z.fromFrame(frame.data, frame.timestamp)));
              if (packets !== null && packets !== void 0 && packets.length) trace = new trace_trace/* default */.ZP(packets);
            } catch (e) {
              console.log("logic parse error", e);
            }
          } // found anything?


          if (trace) {
            console.log("importing " + trace.packets.length + " packets");
            setReplayTrace(trace);
          } else setError("could not parse file");
        } finally {
          setImporting(false);
        }
      }
    });

    return function handleFiles(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    icon: icon,
    disabled: importing || recording || disabled,
    text: "Import Trace File",
    onFilesUploaded: handleFiles
  }));
}
// EXTERNAL MODULE: ./src/components/trace/TraceSaveButton.tsx
var TraceSaveButton = __webpack_require__(34439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(25833);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/icons-material/esm/FiberManualRecord.js


/* harmony default export */ var FiberManualRecord = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord'));
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(16845);
;// CONCATENATED MODULE: ./src/components/trace/TraceRecordButton.tsx

var _excluded = ["disabled"];




function TraceRecordButton(props) {
  var {
    disabled
  } = props,
      others = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var {
    recording,
    tracing,
    toggleRecording
  } = (0,react.useContext)(PacketsContext/* default */.Z);
  var title = recording ? "Stop recording" : "Record trace";
  return /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, Object.assign({}, others, {
    "aria-label": title,
    title: title,
    indeterminate: recording,
    disabled: disabled || tracing,
    onClick: toggleRecording,
    progressStyle: {
      color: "#f66"
    }
  }), !recording && /*#__PURE__*/react.createElement(FiberManualRecord, null), recording && /*#__PURE__*/react.createElement(FiberManualRecord, {
    style: {
      color: "#f00"
    }
  }));
}
// EXTERNAL MODULE: ./src/components/trace/TracePlayButton.tsx
var TracePlayButton = __webpack_require__(28180);
// EXTERNAL MODULE: ./src/components/trace/TraceClearButton.tsx
var TraceClearButton = __webpack_require__(77653);
;// CONCATENATED MODULE: ./src/components/PacketRecorder.tsx








function PacketRecorder() {
  var {
    replayTrace,
    recording,
    tracing
  } = (0,react.useContext)(PacketsContext/* default */.Z);
  return /*#__PURE__*/react.createElement(react.Fragment, null, !recording && replayTrace && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, replayTrace.packets.length, " packets"), /*#__PURE__*/react.createElement(TraceImportButton, {
    icon: true,
    disabled: tracing || recording
  }), /*#__PURE__*/react.createElement(TraceSaveButton/* default */.Z, null), "|", /*#__PURE__*/react.createElement(TraceRecordButton, {
    size: "small"
  }), /*#__PURE__*/react.createElement(TracePlayButton/* default */.Z, {
    size: "small"
  }), /*#__PURE__*/react.createElement(TraceClearButton/* default */.Z, {
    size: "small"
  }));
}
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/History.js
var History = __webpack_require__(52861);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AccountTree.js
var AccountTree = __webpack_require__(99107);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(71973);
// EXTERNAL MODULE: ./src/components/buttons/ConnectButtons.tsx
var ConnectButtons = __webpack_require__(45608);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/FormatAlignLeft.js
var FormatAlignLeft = __webpack_require__(2518);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
;// CONCATENATED MODULE: ./src/components/shell/DrawerToolsButtonGroup.tsx

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function DrawerToolsButtonGroup(props) {
  var {
    className
  } = props;
  var {
    drawerType,
    setDrawerType
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    mobile
  } = (0,useMediaQueries/* default */.Z)();

  var handleDrawer = drawer => () => setDrawerType(drawer);

  var drawers = [{
    drawer: AppContext/* DrawerType.Dom */.jw.Dom,
    label: "open device tree",
    icon: /*#__PURE__*/react.createElement(AccountTree/* default */.Z, null)
  }, {
    drawer: AppContext/* DrawerType.Console */.jw.Console,
    label: "open console",
    icon: /*#__PURE__*/react.createElement(FormatAlignLeft/* default */.Z, null)
  }, {
    drawer: AppContext/* DrawerType.Packets */.jw.Packets,
    label: "open packet trace",
    icon: /*#__PURE__*/react.createElement(History/* default */.Z, null)
  }];
  return /*#__PURE__*/react.createElement(react.Fragment, null, drawers.map(drawer => /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    key: drawer.label,
    title: drawer.label,
    className: className,
    trackName: "menu.drawer." + drawer.drawer,
    trackProperties: {
      drawer: drawer.drawer
    },
    color: drawerType === drawer.drawer ? "primary" : "inherit",
    onClick: handleDrawer(drawer.drawer),
    edge: "start"
  }, drawer.icon)), /*#__PURE__*/react.createElement(ConnectButtons/* default */.Z, {
    transparent: true,
    full: !mobile ? "disconnected" : undefined
  }));
}
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
;// CONCATENATED MODULE: ./src/components/shell/AppDrawer.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name






var PREFIX = "AppDrawer";
var classes = {
  drawer: PREFIX + "-drawer",
  drawerPaper: PREFIX + "-drawerPaper",
  tocDrawer: PREFIX + "-tocDrawer",
  tocDrawerPaper: PREFIX + "-tocDrawerPaper",
  drawerHeader: PREFIX + "-drawerHeader",
  alertButton: PREFIX + "-alertButton",
  mdx: PREFIX + "-mdx",
  fluid: PREFIX + "-fluid"
};
var StyledDrawer = (0,styled/* default */.ZP)(Drawer/* default */.ZP)(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["& ." + classes.drawer]: {
      width: layout/* DRAWER_WIDTH */.pG + "rem",
      flexShrink: 0,
      [theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]: {
        width: "100%"
      }
    },
    ["& ." + classes.drawerPaper]: {
      width: layout/* DRAWER_WIDTH */.pG + "rem",
      [theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]: {
        width: "100%"
      }
    },
    ["& ." + classes.tocDrawer]: {
      width: layout/* TOC_DRAWER_WIDTH */.a2 + "rem",
      flexShrink: 0
    },
    ["& ." + classes.tocDrawerPaper]: {
      width: layout/* TOC_DRAWER_WIDTH */.a2 + "rem"
    },
    ["& ." + classes.drawerHeader]: _objectSpread(_objectSpread({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar), {}, {
      justifyContent: "flex-start"
    }),
    ["& ." + classes.alertButton]: {
      marginLeft: theme.spacing(2)
    },
    ["& ." + classes.mdx]: {
      margin: theme.spacing(2)
    },
    ["& ." + classes.fluid]: {
      flex: 1
    }
  };
});
var Toc = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 1018).then(__webpack_require__.bind(__webpack_require__, 91018)));
var PacketView = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 20133)));
var JDomTreeView = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(188)]).then(__webpack_require__.bind(__webpack_require__, 10188)));
var DrawerSearchResults = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 6130).then(__webpack_require__.bind(__webpack_require__, 86130)));
var DrawerSearchInput = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 2470).then(__webpack_require__.bind(__webpack_require__, 32470)));
var Console = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5463)]).then(__webpack_require__.bind(__webpack_require__, 25463)));
function AppDrawer(props) {
  var {
    pagePath
  } = props;
  var {
    drawerType,
    setDrawerType,
    searchQuery
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var open = drawerType !== AppContext/* DrawerType.None */.jw.None;
  var showSearchResults = drawerType === AppContext/* DrawerType.Toc */.jw.Toc && !!searchQuery;

  var handleDrawerClose = () => {
    setDrawerType(AppContext/* DrawerType.None */.jw.None);
  };

  if (drawerType === AppContext/* DrawerType.None */.jw.None) return null;
  var toc = drawerType === AppContext/* DrawerType.Toc */.jw.Toc;
  return /*#__PURE__*/react.createElement(StyledDrawer, {
    className: toc ? classes.tocDrawer : classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: open,
    classes: {
      paper: toc ? classes.tocDrawerPaper : classes.drawerPaper
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.drawerHeader
  }, toc && /*#__PURE__*/react.createElement("div", {
    className: classes.fluid
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(DrawerSearchInput, null))), !toc && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(PacketRecorder, null), /*#__PURE__*/react.createElement("span", {
    className: classes.fluid
  }), /*#__PURE__*/react.createElement(DrawerToolsButtonGroup, null)), /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* IconButton */.hU, {
    "aria-label": "Collapse",
    onClick: handleDrawerClose,
    size: "large"
  }, /*#__PURE__*/react.createElement(ChevronLeft/* default */.Z, null))), /*#__PURE__*/react.createElement(Divider/* default */.Z, null), showSearchResults && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(DrawerSearchResults, null)), !showSearchResults && drawerType === AppContext/* DrawerType.Toc */.jw.Toc && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(Toc, {
    pagePath: pagePath
  })), !showSearchResults && drawerType === AppContext/* DrawerType.Packets */.jw.Packets && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(PacketView, {
    showTime: true
  })), !showSearchResults && drawerType === AppContext/* DrawerType.Dom */.jw.Dom && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    closeable: true
  }), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(JDomTreeView, null))), !showSearchResults && drawerType === AppContext/* DrawerType.Console */.jw.Console && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(Console, null)));
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

/***/ })

}]);
//# sourceMappingURL=1367-cbc67e98138473156a8b.js.map