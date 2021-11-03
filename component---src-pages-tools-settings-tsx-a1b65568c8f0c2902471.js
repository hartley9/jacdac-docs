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

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91570);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94548);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label", "labelPlacement"];


function SwitchWithLabel(props) {
  var {
    label,
    labelPlacement
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, rest),
    label: label,
    labelPlacement: labelPlacement
  });
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
// EXTERNAL MODULE: ./node_modules/gatsby-material-ui-components/lib/index.js
var lib = __webpack_require__(71481);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 1 modules
var Suspense = __webpack_require__(18581);
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
  }, /*#__PURE__*/react.createElement(lib.Button, {
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
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Devices Settings"), /*#__PURE__*/react.createElement("p", null, "Configure &npsp;", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
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
//# sourceMappingURL=component---src-pages-tools-settings-tsx-a1b65568c8f0c2902471.js.map