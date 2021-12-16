"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2657],{

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

    var pkt = _packet__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromBinary */ .Z.fromBinary(data, timestamp);
    pkt.meta[_constants__WEBPACK_IMPORTED_MODULE_4__/* .META_TRACE_DESCRIPTION */ .fHc] = ln.substring(m[0].length).trim();
    packets.push(pkt);
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

/***/ 30432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__(43226);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(87202);
// EXTERNAL MODULE: ./src/components/hooks/useWindowEvent.ts
var useWindowEvent = __webpack_require__(72144);
;// CONCATENATED MODULE: ./src/components/hooks/useWindowPaste.ts


function useWindowPaste(onPaste) {
  var cb = (0,react.useCallback)(e => {
    e.preventDefault();
    var text = e.clipboardData.getData("text");
    onPaste(text);
  }, [onPaste]); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  (0,useWindowEvent/* default */.Z)("paste", cb);
}
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(56289);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/components/trace/TraceAnalyzer.tsx







function TraceAnalyzer() {
  var bus = (0,useBus/* default */.Z)();
  var {
    replayTrace,
    setReplayTrace
  } = (0,react.useContext)(PacketsContext/* default */.Z);
  var importTrace = (0,react.useCallback)(text => {
    var trace = (0,logparser/* parseTrace */.k9)(text);
    setReplayTrace(trace);
  }, [setReplayTrace]);
  useWindowPaste(importTrace);
  var traceText = (0,useChange/* default */.Z)(bus, _ => {
    if (_) replayTrace === null || replayTrace === void 0 ? void 0 : replayTrace.resolveDevices(_);
    return replayTrace === null || replayTrace === void 0 ? void 0 : replayTrace.serializeToText();
  }, [replayTrace]);
  if (!traceText) return /*#__PURE__*/react.createElement("p", null, "No trace loaded. ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
    to: "/software/traces"
  }, "Learn how to collect a trace."));
  return /*#__PURE__*/react.createElement("pre", null, traceText);
}
;// CONCATENATED MODULE: ./src/pages/tools/player.tsx


function Page() {
  return /*#__PURE__*/react.createElement(TraceAnalyzer, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-player-tsx-d3171c0ec2baec373f58.js.map