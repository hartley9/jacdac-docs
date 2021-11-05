"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1023,7746],{

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
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
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

/***/ 91023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardWifi; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(15785);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(22692);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(25332);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(18297);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/deepmerge.js
var deepmerge = __webpack_require__(26486);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Stack/Stack.js


var _excluded = ["component", "direction", "spacing", "divider", "children"];





/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */



function joinChildren(children, separator) {
  var childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react.cloneElement(separator, {
        key: "separator-".concat(index)
      }));
    }

    return output;
  }, []);
}

var getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};

var style = _ref => {
  var {
    ownerState,
    theme
  } = _ref;

  var styles = (0,esm_extends/* default */.Z)({
    display: 'flex'
  }, (0,breakpoints/* handleBreakpoints */.k9)({
    theme
  }, ownerState.direction, propValue => ({
    flexDirection: propValue
  })));

  if (ownerState.spacing) {
    var transformer = (0,spacing/* createUnarySpacing */.hB)(theme);
    var base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }

      return acc;
    }, {});
    var directionValues = (0,breakpoints/* resolveBreakpointValues */.P$)({
      values: ownerState.direction,
      base
    });
    var spacingValues = (0,breakpoints/* resolveBreakpointValues */.P$)({
      values: ownerState.spacing,
      base
    });

    var styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          ["margin".concat(getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction))]: (0,spacing/* getValue */.NA)(transformer, propValue)
        }
      };
    };

    styles = (0,deepmerge/* default */.Z)(styles, (0,breakpoints/* handleBreakpoints */.k9)({
      theme
    }, spacingValues, styleFromPropValue));
  }

  return styles;
};
var StackRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
var Stack = /*#__PURE__*/react.forwardRef(function Stack(inProps, ref) {
  var themeProps = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiStack'
  });
  var props = (0,extendSxProp/* default */.Z)(themeProps);

  var {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Stack_Stack = (Stack);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(30664);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(5234);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(75510);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(65970);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(79675);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(61359);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(86763);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(18599);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./node_modules/@mui/material/Badge/Badge.js + 3 modules
var Badge = __webpack_require__(94803);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Settings.js
var Settings = __webpack_require__(64726);
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
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(54959);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(88460);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(79764);
// EXTERNAL MODULE: ./node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(89132);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(71973);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Wifi.js
var Wifi = __webpack_require__(2930);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/WifiOff.js
var WifiOff = __webpack_require__(33863);
// EXTERNAL MODULE: ./src/components/ui/DialogTitleWithClose.tsx + 1 modules
var DialogTitleWithClose = __webpack_require__(54266);
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
  var {
    0: connectionFailed,
    1: setConnectionFailed
  } = (0,react.useState)(false);
  var known = !!network;
  var scanned = !!info;
  var passwordId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  var handleAddNetwork = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      setConnectionFailed(false);
      yield service.sendCmdPackedAsync(specconstants/* WifiCmd.AddNetwork */.kBD.AddNetwork, [ssid, password || ""], true);
    });

    return function handleAddNetwork() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleForgetNetwork = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      setConnectionFailed(false);
      yield service.sendCmdPackedAsync(specconstants/* WifiCmd.ForgetNetwork */.kBD.ForgetNetwork, [ssid]);
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
  var connectionFailedEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.ConnectionFailed */.Xoc.ConnectionFailed);
  (0,react.useEffect)(() => connectionFailedEvent === null || connectionFailedEvent === void 0 ? void 0 : connectionFailedEvent.subscribe(constants/* EVENT */.Ks0, () => {
    var [failedSsid] = connectionFailedEvent.unpacked;
    if (failedSsid === ssid) setConnectionFailed(true);
  }), [connectionFailedEvent]);
  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    title: ssid,
    subheader: [known && "priority " + priority, scanned && "RSSI " + rssi + ", channel " + channel, scanFlags && specconstants/* WifiAPFlags.WPS */.GHo.WPS && "WPS"].filter(s => !!s).join(", ")
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(Stack_Stack, {
    spacing: 1
  }, connected ? /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Connected") : connectionFailed ? /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, "Connection failed") : known && !scanned ? /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Not found") : null, !known && !hasPassword && /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: passwordId,
    value: password,
    label: "Password",
    fullWidth: true,
    type: "password",
    required: hasPassword,
    helperText: connectError,
    onChange: handlePasswordChange
  }), known && /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    type: "number",
    value: priority,
    label: "priority",
    onChange: handlePriorityChange
  }))), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, !known ? /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "contained",
    color: "primary",
    disabled: !!connectError,
    onClick: handleAddNetwork
  }, "Connect") : /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "outlined",
    color: "warning",
    disabled: !!connectError,
    onClick: handleForgetNetwork
  }, "Forget")));
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
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogTitleWithClose/* default */.Z, {
    onClose: handleClose
  }, "Configure Wifi"), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, ssids.map(ssid => /*#__PURE__*/react.createElement(Grid/* default */.ZP, Object.assign({
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
    variant: "outlined",
    color: "warning",
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
  var {
    0: connectionFailed,
    1: setConnectionFailed
  } = (0,react.useState)(false);
  var server = (0,useServiceServer/* default */.Z)(service);
  var color = server ? "primary" : "secondary";
  var {
    textPrimary
  } = (0,useWidgetTheme/* default */.Z)(color);
  var enabledRegister = service.register(specconstants/* WifiReg.Enabled */.eFM.Enabled);
  var ssidRegister = service.register(specconstants/* WifiReg.Ssid */.eFM.Ssid);
  var [ssid] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(ssidRegister);
  var ipAddressRegister = service.register(specconstants/* WifiReg.IpAddress */.eFM.IpAddress);
  var [ip] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(ipAddressRegister);
  var macRegister = service.register(specconstants/* WifiReg.Eui48 */.eFM.Eui48);
  var [mac] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(macRegister);
  var lostIpEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.LostIp */.Xoc.LostIp);
  var gotIpEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.GotIp */.Xoc.GotIp);
  var connectionFailedEvent = (0,useEvent/* default */.Z)(service, specconstants/* WifiEvent.ConnectionFailed */.Xoc.ConnectionFailed);
  var connected = !!(ip !== null && ip !== void 0 && ip.length);

  var connect = /*#__PURE__*/function () {
    var _ref5 = (0,asyncToGenerator/* default */.Z)(function* () {
      yield enabledRegister.sendSetBoolAsync(true);
      yield service.sendCmdAsync(specconstants/* WifiCmd.Reconnect */.kBD.Reconnect);
    });

    return function connect() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleConnect = /*#__PURE__*/function () {
    var _ref6 = (0,asyncToGenerator/* default */.Z)(function* () {
      if (connected) yield enabledRegister.sendSetBoolAsync(false);else {
        setConnectionFailed(false);
        yield connect();
      }
    });

    return function handleConnect() {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleConfigure = () => {
    setConnectionFailed(false);
    setOpen(true);
    connect();
  }; // force register refreshs on various events


  var refreshRegisters = () => {
    ssidRegister.clearGetTimestamp();
    ipAddressRegister.clearGetTimestamp();
  };

  (0,react.useEffect)(() => gotIpEvent === null || gotIpEvent === void 0 ? void 0 : gotIpEvent.subscribe(constants/* EVENT */.Ks0, refreshRegisters), [gotIpEvent]);
  (0,react.useEffect)(() => lostIpEvent === null || lostIpEvent === void 0 ? void 0 : lostIpEvent.subscribe(constants/* EVENT */.Ks0, refreshRegisters), [lostIpEvent]);
  (0,react.useEffect)(() => connectionFailedEvent === null || connectionFailedEvent === void 0 ? void 0 : connectionFailedEvent.subscribe(constants/* EVENT */.Ks0, () => setConnectionFailed(true)), [connectionFailedEvent]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, server && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Test WiFi"), "This WiFi does not exist; it is purely for testing purposes.")), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
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
  }))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "dashboard.wifi.connect",
    variant: "outlined",
    color: "primary",
    onClick: handleConnect,
    title: connected ? "disconnect WiFi" : "connect WiFi",
    icon: connected ? /*#__PURE__*/react.createElement(Wifi/* default */.Z, null) : /*#__PURE__*/react.createElement(WifiOff/* default */.Z, null)
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleConfigure,
    title: "configure"
  }, /*#__PURE__*/react.createElement(Badge/* default */.Z, {
    color: "error",
    overlap: "circular",
    variant: "dot",
    invisible: !connectionFailed
  }, /*#__PURE__*/react.createElement(Settings/* default */.Z, null))))))), open && /*#__PURE__*/react.createElement(ConnectDialog, {
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
//# sourceMappingURL=1023-392f6e1d73271b1ae41f.js.map