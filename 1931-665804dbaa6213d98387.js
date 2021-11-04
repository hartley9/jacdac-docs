"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1931],{

/***/ 90460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DialogContentText_DialogContentText; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js

function getDialogContentTextUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiDialogContentText', slot);
}
var dialogContentTextClasses = (0,generateUtilityClasses/* default */.Z)('MuiDialogContentText', ['root']);
/* harmony default export */ var DialogContentText_dialogContentTextClasses = ((/* unused pure expression or super */ null && (dialogContentTextClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogContentText/DialogContentText.js


var _excluded = ["children"];








var useUtilityClasses = ownerState => {
  var {
    classes
  } = ownerState;
  var slots = {
    root: ['root']
  };
  var composedClasses = (0,composeClasses/* default */.Z)(slots, getDialogContentTextUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};

var DialogContentTextRoot = (0,styled/* default */.ZP)(Typography/* default */.Z, {
  shouldForwardProp: prop => (0,styled/* rootShouldForwardProp */.FO)(prop) || prop === 'classes',
  name: 'MuiDialogContentText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
var DialogContentText = /*#__PURE__*/react.forwardRef(function DialogContentText(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiDialogContentText'
  });

  var ownerState = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContentTextRoot, (0,esm_extends/* default */.Z)({
    component: "p",
    variant: "body1",
    color: "text.secondary",
    ref: ref,
    ownerState: ownerState
  }, props, {
    classes: classes
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var DialogContentText_DialogContentText = (DialogContentText);

/***/ }),

/***/ 31931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardAzureIoTHubHealth; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(61359);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(86763);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(90460);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(65970);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(18599);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./node_modules/@mui/material/Badge/Badge.js + 3 modules
var Badge = __webpack_require__(94803);
;// CONCATENATED MODULE: ./src/jacdac/useServiceClient.ts

function useServiceClient(service, factory) {
  var {
    0: client,
    1: setClient
  } = (0,react.useState)(undefined);
  (0,react.useEffect)(() => {
    var c = service && factory(service);
    setClient(c);
    return () => c === null || c === void 0 ? void 0 : c.unmount();
  }, [service, factory]);
  return client;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(56763);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./jacdac-ts/src/clients/azureiothubhealthclient.ts







var AzureIoTHubHealthClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,inheritsLoose/* default */.Z)(AzureIoTHubHealthClient, _JDServiceClient);

  function AzureIoTHubHealthClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    (0,utils/* assert */.hu)(service.serviceClass === constants/* SRV_AZURE_IOT_HUB_HEALTH */.tOR); // tell the bus to refresh these register

    _this.hubNameRegister = _this.service.register(constants/* AzureIotHubHealthReg.HubName */.q7s.HubName);
    _this.hubDeviceIdRegister = _this.service.register(constants/* AzureIotHubHealthReg.HubDeviceId */.q7s.HubDeviceId);
    _this.connectionStatusRegister = _this.service.register(constants/* AzureIotHubHealthReg.ConnectionStatus */.q7s.ConnectionStatus);

    _this.mount(() => _this.hubNameRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, () => _this.emit(constants/* CHANGE */.Ver)));

    _this.mount(() => _this.connectionStatusRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, () => {
      _this.emit(constants/* CHANGE */.Ver);
    }));

    _this.mount(() => _this.service.event(constants/* AzureIotHubHealthEvent.ConnectionStatusChange */.qqS.ConnectionStatusChange).on(constants/* EVENT */.Ks0, () => {
      _this.connectionStatusRegister.refresh();
    }));

    return _this;
  }

  var _proto = AzureIoTHubHealthClient.prototype;

  /**
   * Sends a connect command to the hub
   */
  _proto.connect =
  /*#__PURE__*/
  function () {
    var _connect = (0,asyncToGenerator/* default */.Z)(function* () {
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.Connect */.FhJ.Connect, undefined, true);
    });

    function connect() {
      return _connect.apply(this, arguments);
    }

    return connect;
  }()
  /**
   * Sends a disconnect command to the hub
   */
  ;

  _proto.disconnect =
  /*#__PURE__*/
  function () {
    var _disconnect = (0,asyncToGenerator/* default */.Z)(function* () {
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.Disconnect */.FhJ.Disconnect, undefined, true);
    });

    function disconnect() {
      return _disconnect.apply(this, arguments);
    }

    return disconnect;
  }()
  /**
   * Sends a new connection string to the iot debice
   * @param connectionString
   */
  ;

  _proto.setConnectionString =
  /*#__PURE__*/
  function () {
    var _setConnectionString = (0,asyncToGenerator/* default */.Z)(function* (connectionString) {
      var data = (0,pack/* jdpack */.AV)("s", [connectionString || ""]);
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.SetConnectionString */.FhJ.SetConnectionString, data, true);
    });

    function setConnectionString(_x) {
      return _setConnectionString.apply(this, arguments);
    }

    return setConnectionString;
  }();

  (0,createClass/* default */.Z)(AzureIoTHubHealthClient, [{
    key: "hubName",
    get: function get() {
      return this.hubNameRegister.stringValue;
    }
  }, {
    key: "hubDeviceId",
    get: function get() {
      return this.hubDeviceIdRegister.stringValue;
    }
  }, {
    key: "connectionStatus",
    get: function get() {
      var _reg$unpackedValue;

      var reg = this.connectionStatusRegister;
      var status = (_reg$unpackedValue = reg.unpackedValue) === null || _reg$unpackedValue === void 0 ? void 0 : _reg$unpackedValue[0];
      if (status === undefined) reg.refresh();
      return status;
    }
  }]);

  return AzureIoTHubHealthClient;
}(serviceclient/* JDServiceClient */.P);
/* harmony default export */ var azureiothubhealthclient = (AzureIoTHubHealthClient);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Settings.js
var Settings = __webpack_require__(64726);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(71973);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(50092);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(88460);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Wifi.js
var Wifi = __webpack_require__(2930);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/WifiOff.js
var WifiOff = __webpack_require__(33863);
// EXTERNAL MODULE: ./src/components/hooks/useEvent.ts
var useEvent = __webpack_require__(59626);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(95926);
// EXTERNAL MODULE: ./src/components/ui/DialogTitleWithClose.tsx + 1 modules
var DialogTitleWithClose = __webpack_require__(54266);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardAzureIoTHubHealth.tsx



















function ConnectionStringDialog(props) {
  var {
    client,
    open,
    setOpen
  } = props;
  var {
    0: value,
    1: setValue
  } = (0,react.useState)("");
  var connectionStringId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handleCancel = () => {
    setValue("");
    setOpen(false);
  };

  var handleValueChange = event => {
    setValue(event.target.value);
  };

  var handleOk = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      yield client.setConnectionString(value || "");
      if (!mounted()) return;
      setValue("");
      setOpen(false);
    });

    return function handleOk(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: open,
    fullWidth: true,
    maxWidth: "lg"
  }, /*#__PURE__*/react.createElement(DialogTitleWithClose/* default */.Z, {
    onClose: handleCancel
  }, "Enter device connection string"), /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "p",
    variant: "caption"
  }, "Open your IoT Hub in the Azure portal, select IoT Devices, select or create a device, copy the primary or secondary connection string.")), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: connectionStringId,
    value: value,
    label: "Value",
    fullWidth: true,
    type: "password",
    placeholder: "Connection string",
    onChange: handleValueChange
  })), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "contained",
    color: "primary",
    disabled: !client,
    onClick: handleOk
  }, "Save")));
}

function DashboardAzureIoTHubHealth(props) {
  var {
    service
  } = props;
  var {
    0: open,
    1: setOpen
  } = (0,react.useState)(false);
  var hubNameRegister = service.register(specconstants/* AzureIotHubHealthReg.HubName */.q7s.HubName);
  var [hubName] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(hubNameRegister, props);
  var hubDeviceIdRegister = service.register(specconstants/* AzureIotHubHealthReg.HubDeviceId */.q7s.HubDeviceId);
  var [hubDeviceId] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(hubDeviceIdRegister, props);
  var connectionStatusRegister = service.register(specconstants/* AzureIotHubHealthReg.ConnectionStatus */.q7s.ConnectionStatus);
  var [connectionStatus] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(connectionStatusRegister, props);
  var messageSentEvent = (0,useEvent/* default */.Z)(service, specconstants/* AzureIotHubHealthEvent.MessageSent */.qqS.MessageSent);
  var messageSent = (0,useEventCount/* default */.Z)(messageSentEvent);
  var factory = (0,react.useCallback)(srv => new azureiothubhealthclient(srv), []);
  var client = useServiceClient(service, factory);
  var color = "primary";
  var {
    textPrimary
  } = (0,useWidgetTheme/* default */.Z)(color);
  var connected = connectionStatus === specconstants/* AzureIotHubHealthConnectionStatus.Connected */.gaB.Connected;

  var handleConnect = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      var cmd = connected ? specconstants/* AzureIotHubHealthCmd.Disconnect */.FhJ.Disconnect : specconstants/* AzureIotHubHealthCmd.Connect */.FhJ.Connect;
      yield service.sendCmdAsync(cmd);
    });

    return function handleConnect() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleConfigure = () => setOpen(true);

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "subtitle2"
  }, "Azure IoT Hub"), /*#__PURE__*/react.createElement(ChipList/* default */.Z, null, hubName && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    color: connected ? "primary" : "default",
    label: hubName
  }), hubDeviceId && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "device: " + hubDeviceId
  }), messageSent !== undefined && /*#__PURE__*/react.createElement(Badge/* default */.Z, {
    badgeContent: messageSent,
    color: "primary"
  }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "messages"
  })))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "dashboard.azureiothealth.connect",
    variant: "outlined",
    color: "primary",
    onClick: handleConnect,
    disabled: connectionStatus === undefined,
    title: specconstants/* AzureIotHubHealthConnectionStatus */.gaB[connectionStatus] || "Waiting...",
    icon: connected ? /*#__PURE__*/react.createElement(Wifi/* default */.Z, null) : /*#__PURE__*/react.createElement(WifiOff/* default */.Z, null)
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Configure",
    onClick: handleConfigure
  }, /*#__PURE__*/react.createElement(Settings/* default */.Z, null)))), /*#__PURE__*/react.createElement(ConnectionStringDialog, {
    client: client,
    open: open,
    setOpen: setOpen
  }));
}

/***/ })

}]);
//# sourceMappingURL=1931-665804dbaa6213d98387.js.map