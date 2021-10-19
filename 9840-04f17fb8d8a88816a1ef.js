"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9840],{

/***/ 69840:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebSerialConsoleButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);
/* harmony import */ var _jacdac_ts_src_jdom_transport_webserial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74278);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79885);
/* harmony import */ var _icons_TransportIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37564);






function WebSerialConsoleButton() {
  var supported = (0,_jacdac_ts_src_jdom_transport_webserial__WEBPACK_IMPORTED_MODULE_2__/* .isWebSerialSupported */ .es)();
  var {
    setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);
  var {
    0: port,
    1: setPort
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var connected = !!port; // clean up always

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    port === null || port === void 0 ? void 0 : port.close().catch(e => {
      console.debug(e);
    });
  }, [port]); // register disconnect

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!supported) return;

    var handleDisconnect = ev => {
      var other = ev.target;

      if (port === other) {
        setPort(undefined);
        console.debug("serial console: disconnected");
      }
    };

    navigator.serial.addEventListener("disconnect", handleDisconnect, false);
    return () => navigator.serial.removeEventListener("disconnect", handleDisconnect);
  }); // request device

  var handleRequestPort = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      try {
        var _port = yield navigator.serial.requestPort({});

        yield _port.open({
          baudRate: 115200
        });
        var lastChunk = "";
        var appendStream = new WritableStream({
          write(newChunk) {
            var chunk = // eslint-disable-next-line no-control-regex
            (lastChunk + newChunk).replace(/\x1b\[\d+(;\d+)?m/g, "");
            var lines = chunk.split("\n");
            lastChunk = lines.pop();
            lines.filter(l => !!l).forEach(line => console.log(line));
          }

        });

        _port.readable.pipeThrough(new TextDecoderStream()).pipeTo(appendStream);

        setPort(_port);
        console.debug("serial console: connected");
      } catch (e) {
        setError(e);
        setPort(undefined);
      }
    });

    return function handleRequestPort() {
      return _ref.apply(this, arguments);
    };
  }();

  if (!supported) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    onClick: handleRequestPort,
    color: connected ? "primary" : "default",
    title: connected ? "connected to serial" : "disconnected"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    type: "serial"
  }));
}

/***/ })

}]);
//# sourceMappingURL=9840-04f17fb8d8a88816a1ef.js.map