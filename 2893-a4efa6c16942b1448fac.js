"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2893],{

/***/ 80460:
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
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');

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

/***/ 52893:
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(71892);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(62846);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 1 modules
var Suspense = __webpack_require__(18581);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/layout.tsx + 16 modules
var layout = __webpack_require__(93907);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronLeft.js
var ChevronLeft = __webpack_require__(80460);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
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









var ImportButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119)));
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/icons/esm/FiberManualRecord.js


/* harmony default export */ var FiberManualRecord = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("circle", {
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
var TracePlayButton = __webpack_require__(86360);
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
// EXTERNAL MODULE: ./src/components/DrawerToolsButtonGroup.tsx
var DrawerToolsButtonGroup = __webpack_require__(95743);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
;// CONCATENATED MODULE: ./src/components/shell/AppDrawer.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name






var Toc = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 1018).then(__webpack_require__.bind(__webpack_require__, 91018)));
var PacketView = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 20133)));
var JDomTreeView = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(188)]).then(__webpack_require__.bind(__webpack_require__, 10188)));
var DrawerSearchResults = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 6130).then(__webpack_require__.bind(__webpack_require__, 86130)));
var DrawerSearchInput = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 2470).then(__webpack_require__.bind(__webpack_require__, 32470)));
var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  drawer: {
    width: layout/* DRAWER_WIDTH */.pG + "rem",
    flexShrink: 0,
    [theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]: {
      width: "100%"
    }
  },
  drawerPaper: {
    width: layout/* DRAWER_WIDTH */.pG + "rem",
    [theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]: {
      width: "100%"
    }
  },
  tocDrawer: {
    width: layout/* TOC_DRAWER_WIDTH */.a2 + "rem",
    flexShrink: 0
  },
  tocDrawerPaper: {
    width: layout/* TOC_DRAWER_WIDTH */.a2 + "rem"
  },
  drawerHeader: _objectSpread(_objectSpread({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar), {}, {
    justifyContent: "flex-start"
  }),
  alertButton: {
    marginLeft: theme.spacing(2)
  },
  mdx: {
    margin: theme.spacing(2)
  },
  fluid: {
    flex: 1
  }
}));
function AppDrawer(props) {
  var {
    pagePath
  } = props;
  var classes = useStyles();
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

  if (drawerType === AppContext/* DrawerType.None */.jw.None) return /*#__PURE__*/react.createElement(react.Fragment, null);
  var toc = drawerType === AppContext/* DrawerType.Toc */.jw.Toc;
  return /*#__PURE__*/react.createElement(Drawer/* default */.ZP, {
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
  }), /*#__PURE__*/react.createElement(DrawerToolsButtonGroup/* default */.Z, {
    showPackets: true,
    showConnect: true
  })), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, {
    "aria-label": "Collapse",
    onClick: handleDrawerClose
  }, /*#__PURE__*/react.createElement(ChevronLeft/* default */.Z, null))), /*#__PURE__*/react.createElement(Divider/* default */.Z, null), showSearchResults && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(DrawerSearchResults, null)), !showSearchResults && drawerType === AppContext/* DrawerType.Toc */.jw.Toc && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(Toc, {
    pagePath: pagePath
  })), !showSearchResults && drawerType === AppContext/* DrawerType.Packets */.jw.Packets ? /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(PacketView, {
    showTime: true
  })) : drawerType === AppContext/* DrawerType.Dom */.jw.Dom ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    closeable: true
  }), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(JDomTreeView, null))) : undefined);
}

/***/ })

}]);
//# sourceMappingURL=2893-a4efa6c16942b1448fac.js.map