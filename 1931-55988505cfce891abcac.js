"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1931],{

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80453);




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(32253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
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
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Settings.js
var Settings = __webpack_require__(88237);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/gatsby-material-ui-components/lib/index.js
var lib = __webpack_require__(71481);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(50092);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(88460);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Wifi.js
var Wifi = __webpack_require__(14695);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/WifiOff.js
var WifiOff = __webpack_require__(79796);
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
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, "Enter device connection string", /*#__PURE__*/react.createElement(Typography/* default */.Z, {
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
  })), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(lib.Button, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
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

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "subtitle2"
  }, "Azure IoT Hub"), /*#__PURE__*/react.createElement(ChipList/* default */.Z, null, hubName && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    color: connected ? "primary" : "default",
    label: "hub: " + hubName
  }), hubDeviceId && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "device: " + hubDeviceId
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "dashboard.azureiothealth.connect",
    variant: "outlined",
    color: "primary",
    onClick: handleConnect,
    disabled: connectionStatus === undefined,
    title: specconstants/* AzureIotHubHealthConnectionStatus */.gaB[connectionStatus] || "Waiting...",
    icon: connected ? /*#__PURE__*/react.createElement(Wifi/* default */.Z, null) : /*#__PURE__*/react.createElement(WifiOff/* default */.Z, null)
  }), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
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
//# sourceMappingURL=1931-55988505cfce891abcac.js.map