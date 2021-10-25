"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7767,7746],{

/***/ 31186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

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

/***/ 67767:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardWifi; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(96422);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Settings.js
var Settings = __webpack_require__(88237);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(50092);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useInterval.ts
var useInterval = __webpack_require__(63944);
// EXTERNAL MODULE: ./src/components/hooks/useEvent.ts
var useEvent = __webpack_require__(59626);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/hooks/useMounted.ts
var useMounted = __webpack_require__(72179);
;// CONCATENATED MODULE: ./src/components/hooks/useCommandPipeResults.ts






function useCommandPipeResults(service, cmd, packFormat, changeEvent, deps) {
  var {
    0: results,
    1: setResults
  } = (0,react.useState)([]);
  var mounted = (0,useMounted/* default */.Z)();

  var update = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var newResults = yield service.receiveWithInPipe(cmd, packFormat);
      if (mounted()) setResults(newResults || []);
    });

    return function update() {
      return _ref.apply(this, arguments);
    };
  }(); // listen to change event if any


  (0,react.useEffect)(() => changeEvent === null || changeEvent === void 0 ? void 0 : changeEvent.subscribe(constants/* EVENT */.Ks0, update), [changeEvent]);
  (0,useChange/* default */.Z)(service, update, [cmd, packFormat].concat((0,toConsumableArray/* default */.Z)(deps || [])));
  return results;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(94500);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(88460);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(99330);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Wifi.js
var Wifi = __webpack_require__(14695);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/WifiOff.js
var WifiOff = __webpack_require__(79796);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardWifi.tsx






















 // flags, rssi, channel, bssid, ssid

function toMAC(buffer) {
  var hex = (0,utils/* toHex */.NC)(buffer, ":");
  return hex;
}

function toIP(buffer) {
  if (!buffer) return undefined;
  if (buffer.length === 4) return buffer[0] + "." + buffer[1] + "." + buffer[2] + "." + buffer[3];else return (0,utils/* toHex */.NC)(buffer, ".");
}

function Network(props) {
  var {
    service,
    info,
    network,
    ssid,
    connected
  } = props;
  var [priority, networkFlags] = network || [];
  var [scanFlags, rssi, channel] = info || [];
  var {
    0: password,
    1: setPassword
  } = (0,react.useState)("");
  var known = !!network;
  var scanned = !!info;
  var passwordId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  var handleAddNetwork = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      yield service.sendCmdPackedAsync(specconstants/* WifiCmd.AddNetwork */.kBD.AddNetwork, [ssid, password || ""], true);
    });

    return function handleAddNetwork() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleForgetNetwork = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      return yield service.sendCmdPackedAsync(specconstants/* WifiCmd.ForgetNetwork */.kBD.ForgetNetwork, [ssid]);
    });

    return function handleForgetNetwork() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handlePriorityChange = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (ev) {
      var newPriority = parseInt(ev.target.value);
      if (!isNaN(newPriority)) yield service.sendCmdPackedAsync(specconstants/* WifiCmd.SetNetworkPriority */.kBD.SetNetworkPriority, [newPriority, ssid], true);
    });

    return function handlePriorityChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); // hasPassword == requires password


  var hasPassword = !!(networkFlags & specconstants/* WifiAPFlags.HasPassword */.GHo.HasPassword);
  var connectError = hasPassword && !password ? "password required" : undefined;
  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    title: ssid,
    subheader: [known && "priority " + priority, scanned && "RSSI " + rssi + ", channel " + channel].filter(s => !!s).join(", ")
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, connected && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Connected"), known && !scanned && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Not found"), !known && !hasPassword && /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: passwordId,
    value: password,
    label: "Password",
    fullWidth: true,
    type: "password",
    required: hasPassword,
    helperText: connectError,
    onChange: handlePasswordChange
  })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, !known ? /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "contained",
    color: "primary",
    disabled: !!connectError,
    onClick: handleAddNetwork
  }, "Connect") : /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "outlined",
    disabled: !!connectError,
    onClick: handleForgetNetwork
  }, "Forget"), known && /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    type: "number",
    value: priority,
    label: "priority",
    onChange: handlePriorityChange
  })));
}

function ConnectDialog(props) {
  var {
    open,
    setOpen,
    service,
    connectedSsid
  } = props;
  var breakpoints = (0,useGridBreakpoints/* default */.Z)();

  var scan = () => service.sendCmdAsync(specconstants/* WifiCmd.Scan */.kBD.Scan);

  var knownNetworksChangedEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.NetworksChanged */.Xoc.NetworksChanged);
  var knownNetworks = useCommandPipeResults(service, specconstants/* WifiCmd.ListKnownNetworks */.kBD.ListKnownNetworks, "i16 i16 s", knownNetworksChangedEvent); // grad scan results

  var scanCompleteEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.ScanComplete */.Xoc.ScanComplete);
  var aps = useCommandPipeResults(service, specconstants/* WifiCmd.LastScanResults */.kBD.LastScanResults, "u32 x[4] i8 u8 b[6] s[33]", scanCompleteEvent); // keep scanning

  (0,useInterval/* default */.Z)(open, scan, 30000, [service]);

  var handleClose = () => setOpen(false);

  var handleForgetAll = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* () {
      return yield service.sendCmdAsync(specconstants/* WifiCmd.ForgetAllNetworks */.kBD.ForgetAllNetworks);
    });

    return function handleForgetAll() {
      return _ref4.apply(this, arguments);
    };
  }();

  var priority = s => {
    var _knownNetworks$find;

    return ((_knownNetworks$find = knownNetworks.find(n => n[2] === s)) === null || _knownNetworks$find === void 0 ? void 0 : _knownNetworks$find[0]) || -Infinity;
  };

  var ssids = (0,utils/* unique */.Tw)([].concat((0,toConsumableArray/* default */.Z)((knownNetworks || []).map(kn => kn[2])), (0,toConsumableArray/* default */.Z)((aps || []).map(ap => ap[4])))).sort((l, r) => -priority(l) + priority(r));
  return /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: open,
    fullWidth: true,
    maxWidth: "lg",
    onClose: handleClose
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogTitle/* default */.Z, null, "Connect to Wifi"), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, ssids.map(ssid => /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    item: true
  }, breakpoints, {
    key: ssid
  }), /*#__PURE__*/react.createElement(Network, {
    service: service,
    connected: connectedSsid === ssid,
    ssid: ssid,
    network: knownNetworks === null || knownNetworks === void 0 ? void 0 : knownNetworks.find(kn => kn[2] === ssid),
    info: aps === null || aps === void 0 ? void 0 : aps.find(ap => ap[4] === ssid)
  }))))), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "dashboard.wifi.forgetall",
    onClick: handleForgetAll,
    title: "forget all",
    icon: /*#__PURE__*/react.createElement(Delete/* default */.Z, null)
  }, "Forget all")));
}

function DashboardWifi(props) {
  var {
    service
  } = props;
  var {
    0: open,
    1: setOpen
  } = (0,react.useState)(false);
  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "primary" : "secondary";
  var {
    textPrimary
  } = (0,useWidgetTheme/* default */.Z)(color);
  var enabledRegister = service.register(specconstants/* WifiReg.Enabled */.eFM.Enabled);
  var enabled = (0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister);
  var ssidRegister = service.register(specconstants/* WifiReg.Ssid */.eFM.Ssid);
  var [ssid] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(ssidRegister);
  var ipAddressRegister = service.register(specconstants/* WifiReg.IpAddress */.eFM.IpAddress);
  var [ip] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(ipAddressRegister);
  var macRegister = service.register(specconstants/* WifiReg.Eui48 */.eFM.Eui48);
  var [mac] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(macRegister);
  var lostIpEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.LostIp */.Xoc.LostIp);
  var gotIpEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.GotIp */.Xoc.GotIp);
  var connected = !!(ip !== null && ip !== void 0 && ip.length);

  var handleConnect = /*#__PURE__*/function () {
    var _ref5 = (0,asyncToGenerator/* default */.Z)(function* () {
      if (connected) yield enabledRegister.sendSetBoolAsync(false);else yield service.sendCmdPackedAsync(specconstants/* WifiCmd.Reconnect */.kBD.Reconnect);
    });

    return function handleConnect() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleConfigure = () => setOpen(true); // force register refreshs on various events


  var refreshRegisters = () => {
    ssidRegister.clearGetTimestamp();
    ipAddressRegister.clearGetTimestamp();
  };

  (0,react.useEffect)(() => gotIpEvent === null || gotIpEvent === void 0 ? void 0 : gotIpEvent.subscribe(constants/* EVENT */.Ks0, refreshRegisters), [gotIpEvent]);
  (0,react.useEffect)(() => lostIpEvent === null || lostIpEvent === void 0 ? void 0 : lostIpEvent.subscribe(constants/* EVENT */.Ks0, refreshRegisters), [lostIpEvent]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, server && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Test WiFi"), "This WiFi does not exist; it is purely for testing purposes.")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "subtitle2"
  }, "WiFi"), (ssid || ip || mac) && /*#__PURE__*/react.createElement(ChipList/* default */.Z, null, !!ssid && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    color: "primary",
    label: ssid
  }), !!ip && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "IP: " + toIP(ip)
  }), !!mac && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "MAC: " + toMAC(mac)
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "dashboard.wifi.connect",
    variant: "outlined",
    color: "primary",
    onClick: handleConnect,
    title: connected ? "connected" : "disconnected",
    icon: connected ? /*#__PURE__*/react.createElement(Wifi/* default */.Z, null) : /*#__PURE__*/react.createElement(WifiOff/* default */.Z, null)
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleConfigure,
    title: "configure"
  }, /*#__PURE__*/react.createElement(Settings/* default */.Z, null)))))), open && /*#__PURE__*/react.createElement(ConnectDialog, {
    open: open,
    setOpen: setOpen,
    service: service,
    connectedSsid: connected ? ssid : undefined
  }));
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

/***/ })

}]);
//# sourceMappingURL=7767-de85d92c0ff1e779ac22.js.map