"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5437],{

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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33287);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45656);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53139);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
  button: {
    marginLeft: theme.spacing(2)
  }
}));

function NoSsrConnectAlert(props) {
  var classes = useStyles();
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
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(bus, b => b.devices({
    serviceClass,
    ignoreSelf: true
  }));
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(transport => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    key: transport.type,
    transport: transport,
    className: classes.button,
    full: true,
    transparent: true
  }))));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 34276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Snippet; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50274);



function Snippet(props) {
  var {
    value,
    mode,
    download,
    url,
    caption,
    actions
  } = props;
  var v = typeof value === "function" ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    downloadName: download,
    downloadText: download && v,
    actions: actions,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    variant: "caption"
  }, caption));
}

/***/ }),

/***/ 50381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ProtocolTest; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js
var Switch = __webpack_require__(6210);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__(87993);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(50092);
// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__(34276);
;// CONCATENATED MODULE: ./src/components/TestCard.tsx






function TestCard(props) {
  var {
    title,
    subheader,
    onTest,
    children,
    autoRun
  } = props;
  var {
    0: output,
    1: setOutput
  } = (0,react.useState)("");

  var runTest = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var log = [];

      var toValue = msg => {
        if (msg === undefined || msg === null) return "";else if (typeof msg === "string") return msg;else if (msg instanceof Uint8Array) return (0,utils/* toHex */.NC)(msg);else if (Array.isArray(msg)) return msg.map(toValue);else return JSON.stringify(msg);
      };

      var logger = msg => {
        if (msg instanceof Error) log.push(msg + "");

        if (typeof msg === "object") {
          Object.keys(msg).forEach(k => log.push(k + ": " + toValue(msg[k])));
        } else log.push(toValue(msg));
      };

      try {
        yield onTest(logger);
      } catch (e) {
        logger(e);
        throw e;
      } finally {
        setOutput(log.join("\n"));
      }
    });

    return function runTest() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      return yield runTest();
    });

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    title: title,
    subheader: subheader
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, children, output && /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    value: output
  })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "outlined",
    onClick: handleClick,
    disableReset: true,
    autoRun: autoRun
  }, "Test")));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(99330);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/servers/protocoltestserver.ts
var protocoltestserver = __webpack_require__(8695);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/servers/serverserviceprovider.ts + 2 modules
var serverserviceprovider = __webpack_require__(55739);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/pages/tools/prototest.tsx



 // tslint:disable-next-line: no-submodule-imports match-default-export-name



















function randomFieldPayload(field) {
  var {
    specification
  } = field; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var r = undefined;

  switch (specification.type) {
    case "bool":
      r = Math.random() > 0.5 ? 1 : 0;
      break;

    case "i8":
    case "i16":
    case "i32":
    case "u8":
    case "u16":
    case "u32":
      {
        var unsigned = specification.type[0] === "u";
        var n = Math.min(30, parseInt(specification.type.slice(1)));
        var min = (0,utils/* pick */.ei)(specification.typicalMin, specification.absoluteMin, unsigned ? 0 : -((1 << n - 1) - 1));
        var max = (0,utils/* pick */.ei)(specification.typicalMax, specification.absoluteMax, unsigned ? (1 << n) - 1 : (1 << n - 1) - 1);
        r = (0,utils/* randomRange */.rs)(min, max);
        break;
      }

    case "bytes":
      {
        // maxBytes?
        var a = (0,random/* cryptoRandomUint32 */.dG)((0,utils/* randomRange */.rs)(1, 3));
        r = new Uint8Array(a.buffer);
        break;
      }

    case "string":
    case "string0":
      {
        var ch_a = "a".charCodeAt(0);
        var ch_z = "z".charCodeAt(0);

        var _n = (0,utils/* randomRange */.rs)(4, 10);

        var s = "";

        for (var i = 0; i < _n; ++i) {
          s += String.fromCharCode((0,utils/* randomRange */.rs)(ch_a, ch_z));
        }

        r = s;
        break;
      }
  }

  return r;
}

function randomPayload(packFormat, fields) {
  if (!packFormat) throw new Error("pack format unknown");
  var rs = fields.map(randomFieldPayload);
  if (rs.some(r => r === undefined)) throw new Error("unsupported data layout");
  return rs;
}

function RegisterProtocolTest(props) {
  var {
    rw,
    ro,
    ev
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    specification,
    fields
  } = rw;
  var name = specification.name.replace(/^rw_/, ""); // event code and command code are the same as rw register

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    yield rw.sendGetAsync();
    yield ro.sendGetAsync();
  }), []);

  var testRwRo = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      log("-- testing rw");
      var packFormat = specification.packFormat;
      var payload = randomPayload(packFormat, fields);
      log({
        payload
      });
      var data = (0,pack/* jdpack */.AV)(packFormat, payload);
      log({
        data: (0,utils/* toHex */.NC)(data)
      }); // setup observer for event counts

      var evCount = ev.count; // send over packet

      yield rw.sendSetAsync(data); // read packet

      yield rw.sendGetAsync(); // wait for response

      yield bus.delay(100); // check read

      log({
        rwdata: (0,utils/* toHex */.NC)(rw.data)
      });
      var rwpayload = (0,pack/* jdunpack */.TE)(rw.data, packFormat);
      log({
        rwpayload
      });
      if (!(0,pack/* jdpackEqual */.dW)(packFormat, payload, rwpayload)) throw new Error("expected rw " + payload + ", got " + rwpayload); // check ro

      log("-- testing ro");
      yield ro.sendGetAsync(); // wait for response

      yield bus.delay(100);
      var ropayload = (0,pack/* jdunpack */.TE)(ro.data, packFormat);
      log({
        ropayload
      });
      if (!(0,pack/* jdpackEqual */.dW)(packFormat, payload, ropayload)) throw new Error("expected ro " + payload + ", got " + ropayload); // the event should have triggered once

      log("-- testing event");
      if (packFormat !== "u8" && evCount + 1 !== ev.count) throw new Error("expected 1 event, got " + (ev.count - evCount));
    });

    return function testRwRo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var testCommand = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      log("-- testing cmd");
      var packFormat = specification.packFormat;
      var payload = randomPayload(packFormat, fields);
      log({
        payload
      });
      var data = (0,pack/* jdpack */.AV)(packFormat, payload);
      log({
        data: (0,utils/* toHex */.NC)(data)
      }); // send over cmd packet

      yield rw.service.sendPacketAsync(packet/* default.from */.Z.from(rw.code, data)); // read packet

      yield rw.sendGetAsync(); // wait for response

      yield bus.delay(100); // check read

      log({
        rwdata: (0,utils/* toHex */.NC)(rw.data)
      });
      var rwpayload = (0,pack/* jdunpack */.TE)(rw.data, packFormat);
      log({
        rwpayload
      });
      if (!(0,pack/* jdpackEqual */.dW)(packFormat, payload, rwpayload)) throw new Error("expected rw " + payload + ", got " + rwpayload);
    });

    return function testCommand(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var test = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      log("- testing no acks");
      rw.service.registersUseAcks = false;
      yield testRwRo(log);
      yield testCommand(log);
      log("- testing acks");
      rw.service.registersUseAcks = true;
      yield testRwRo(log);
      yield testCommand(log);
    });

    return function test(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(TestCard, {
    title: name,
    subheader: specification.packFormat || "?",
    onTest: test
  });
}

function ServiceProtocolTest(props) {
  var {
    service
  } = props;
  var {
    device
  } = service;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var regs = service.registers();
  var rws = service.registers().filter(reg => reg.specification.kind == "rw").map(rw => {
    var roname = rw.name.replace(/^rw_/, "ro_");
    var ro = regs.find(r => r.specification.kind === "ro" && r.specification.name === roname);
    var ev = service.event(rw.code);
    return {
      rw,
      ro,
      ev
    };
  });

  var outPipeTest = /*#__PURE__*/function () {
    var _ref5 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      // fill bytes with data
      var rw = service.register(constants/* ProtoTestReg.RwBytes */.M7y.RwBytes);
      var [data] = randomPayload("b", rw.fields);
      log("data: " + (0,utils/* toHex */.NC)(data)); // send over cmd packet

      rw.service.registersUseAcks = true;
      yield rw.sendSetAsync(data);
      yield rw.sendGetAsync(); // wait for response

      yield bus.delay(100);
      log("data recv: " + (0,utils/* toHex */.NC)(rw.data));
      if (!(0,utils/* bufferEq */.zo)(data, rw.data)) throw new Error("rw write failed, expected " + (0,utils/* toHex */.NC)(data) + ", got " + (0,utils/* toHex */.NC)(rw.data)); // read packet back

      var recv = yield service.receiveWithInPipe(constants/* ProtoTestCmd.CReportPipe */.PZz.CReportPipe, "u8");
      var recvu = new Uint8Array(recv.map(buf => buf[0]));
      log("received " + (0,utils/* toHex */.NC)(recvu));
      if (!(0,utils/* bufferEq */.zo)(data, recvu)) throw new Error("expected " + (0,utils/* toHex */.NC)(data) + ", got " + (0,utils/* toHex */.NC)(recv.map(buf => buf[0])));
    });

    return function outPipeTest(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h4"
  }, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
    device: device
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
    device: device,
    showReset: true
  })), rws === null || rws === void 0 ? void 0 : rws.map(rw => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: rw.rw.id,
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react.createElement(RegisterProtocolTest, rw))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: "cpipe",
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react.createElement(TestCard, {
    title: "out pipe",
    subheader: "",
    onTest: outPipeTest
  })));
}

function ProtocolTest() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var labelId = (0,react_use_id_hook_esm/* useId */.Me)();
  var switchId = (0,react_use_id_hook_esm/* useId */.Me)();
  var {
    0: host,
    1: setHost
  } = (0,react.useState)(false);
  var services = (0,useChange/* default */.Z)(bus, b => b.services({
    serviceClass: constants/* SRV_PROTO_TEST */.$Bn
  }));

  var toggleHost = () => setHost(!host); // add virtual device


  (0,react.useEffect)(() => {
    if (!host) return () => {};
    var d = new serverserviceprovider/* default */.Z("test", [new protocoltestserver/* default */.Z()]);
    bus.addServiceProvider(d);
    return () => bus.removeServiceProvider(d);
  }, [host]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Protocol Test"), /*#__PURE__*/react.createElement("p", null, "A helper page to test the Jacdac protocol against a \xA0", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/services/prototest/"
  }, "protocol test"), " service."), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: "connect",
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_PROTO_TEST */.$Bn
  })), services === null || services === void 0 ? void 0 : services.map(service => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: service.id,
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ServiceProtocolTest, {
    service: service
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Developer zone"), /*#__PURE__*/react.createElement(Switch/* default */.Z, {
    id: switchId,
    checked: host,
    onChange: toggleHost
  }), /*#__PURE__*/react.createElement("label", {
    id: labelId,
    htmlFor: switchId
  }, "Add simulator")))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-prototest-tsx-1c408d2ba29f3e3bb1b4.js.map