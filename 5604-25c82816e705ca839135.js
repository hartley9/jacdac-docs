"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5604,6141],{

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

/***/ 65604:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TraceList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(87202);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(30664);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(5234);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(75510);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(79675);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76968);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__(43226);
;// CONCATENATED MODULE: ./src/components/trace/TraceCard.tsx






function TraceCard(props) {
  var {
    name,
    trace
  } = props;
  var {
    description,
    duration,
    length
  } = trace;
  var {
    setReplayTrace,
    toggleTracing
  } = (0,react.useContext)(PacketsContext/* default */.Z);
  var {
    setDrawerType
  } = (0,react.useContext)(AppContext/* default */.ZP);

  var handleClick = () => {
    setDrawerType(AppContext/* DrawerType.Packets */.jw.Packets);
    setReplayTrace(trace);
    toggleTracing();
  };

  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    title: name,
    subheader: (0,pretty/* prettyDuration */.Xh)(duration) + ", " + length + " packets"
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, description && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: description
  })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    onClick: handleClick,
    variant: "outlined"
  }, "import")));
}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
;// CONCATENATED MODULE: ./src/components/trace/TraceList.tsx






function TraceList() {
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var data = (0,gatsby_browser_entry.useStaticQuery)("413816803");
  var traces = data.allPlainText.nodes.filter(node => {
    var _node$parent;

    return ((_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.ext) === ".txt";
  }).map(node => {
    return {
      trace: (0,logparser/* parseTrace */.k9)(node.content),
      name: node.parent.name
    };
  }).filter(trace => !!trace.trace);
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 2
  }, traces.map(_ref => {
    var {
      trace,
      name
    } = _ref;
    return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      item: true,
      key: name
    }, /*#__PURE__*/react.createElement(TraceCard, Object.assign({
      name: name,
      trace: trace
    }, gridBreakpoints)));
  }));
}

/***/ }),

/***/ 98784:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Markdown; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6890);

var _excluded = ["source"];


var ReactMarkdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 8245).then(__webpack_require__.bind(__webpack_require__, 38245)));
function Markdown(props) {
  var {
    source
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdown, others, source));
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

/***/ })

}]);
//# sourceMappingURL=5604-25c82816e705ca839135.js.map