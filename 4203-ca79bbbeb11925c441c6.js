"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4203],{

/***/ 30313:
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
  d: "M3 3h18v2H3z"
}), 'Maximize');

exports.Z = _default;

/***/ }),

/***/ 12712:
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
  d: "M6 19h12v2H6z"
}), 'Minimize');

exports.Z = _default;

/***/ }),

/***/ 74203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebCam; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13827);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67486);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87122);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27221);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98348);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34093);
/* harmony import */ var _useEffectAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7751);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64726);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71973);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72179);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35902);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84377);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(79764);
/* harmony import */ var _mui_icons_material_Fullscreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97359);
/* harmony import */ var _mui_icons_material_Minimize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12712);
/* harmony import */ var _mui_icons_material_Maximize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(30313);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82625);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_6__);


/* eslint-disable jsx-a11y/media-has-caption */















var PREFIX = "WebCam";
var classes = {
  cardContainer: PREFIX + "-cardContainer",
  card: PREFIX + "-card"
};
var Root = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("div")(() => ({
  ["& ." + classes.cardContainer]: {
    zIndex: 1101,
    position: "absolute",
    right: "2rem",
    bottom: "3rem"
  },
  ["& ." + classes.card]: {
    "& .hostedcontainer": {
      position: "relative",
      width: "40vw"
    },
    "& video": {
      border: "none",
      position: "relative",
      width: "100%",
      height: "100%"
    }
  }
}));
function WebCam() {
  var {
    setShowWebCam
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP);
  var {
    0: minimize,
    1: setMinimize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var {
    0: devices,
    1: setDevices
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var [deviceId, setDeviceId] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("webcam_deviceid", "");
  var {
    0: working,
    1: setWorking
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var streamRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var {
    0: settingsOpen,
    1: setSettingsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!deviceId);
  var mounted = (0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  var supportsFullScreen = typeof document !== "undefined" && !!document.fullscreenEnabled;

  var handleClose = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      return yield setShowWebCam(false);
    });

    return function handleClose() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleMinimize = () => setMinimize(!minimize);

  var handleSettings = () => {
    console.debug("toggle settings", {
      settingsOpen
    });
    setSettingsOpen(!settingsOpen);
  };

  var handleDeviceChange = ev => setDeviceId(ev.target.value);

  var handleFullScreen = () => {
    var _videoRef$current;

    return (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.requestFullscreen();
  };

  var stop = () => {
    var stream = streamRef.current;

    if (stream) {
      console.debug("webcam: stop");

      try {
        var tracks = stream.getTracks();
        if (tracks) tracks.forEach(track => track.stop());
      } catch (e) {
        console.debug(e);
      }

      streamRef.current = undefined;
    }

    var video = videoRef.current;

    if (video) {
      try {
        video.srcObject = undefined;
      } catch (e) {
        console.debug(e);
      }
    }
  }; // start camera


  (0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
    stop();
    if (!deviceId) return;
    console.debug("webcam: start '" + deviceId + "'");

    try {
      setWorking(true);
      stop();
      var stream = yield navigator.mediaDevices.getUserMedia({
        video: {
          width: {
            ideal: 1920
          },
          height: {
            ideal: 1080
          },
          advanced: [{
            deviceId: deviceId
          }]
        },
        audio: false
      });
      streamRef.current = stream;
      var video = videoRef.current;
      video.srcObject = stream;
      yield video.play();
      console.debug("webcam: play started");
      setSettingsOpen(false);
    } catch (e) {
      console.debug("webcam: play failed");
      console.error(e);
      setSettingsOpen(true);
    } finally {
      setWorking(false);
    }
  }), [deviceId]);

  var updateDevices = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      console.debug("webcam: update devices");

      try {
        // enumerate devices
        var _devices = yield navigator.mediaDevices.enumerateDevices();

        var webcams = _devices.filter(device => device.kind == "videoinput");

        if (mounted()) setDevices(webcams);
      } catch (e) {
        if (mounted()) setDevices([]);
      }
    });

    return function updateDevices() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
    if (settingsOpen) yield updateDevices();
  }), [settingsOpen]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    navigator.mediaDevices.addEventListener("devicechange", updateDevices);
    return () => navigator.mediaDevices.removeEventListener("devicechange", updateDevices);
  }); // cleanup

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => stop, []); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var draggableProps = {
    nodeRef
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_draggable__WEBPACK_IMPORTED_MODULE_6___default()), draggableProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    ref: nodeRef,
    className: classes.cardContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    title: settingsOpen && devices && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      variant: "outlined",
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      title: "select a webcam",
      open: settingsOpen,
      onChange: handleDeviceChange,
      value: deviceId || "",
      disabled: working
    }, devices === null || devices === void 0 ? void 0 : devices.map(_ref5 => {
      var {
        deviceId,
        label
      } = _ref5;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        key: deviceId,
        value: deviceId
      }, label);
    }))),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, supportsFullScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleFullScreen,
      title: "full screen",
      disabled: working
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Fullscreen__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleMinimize,
      disabled: working,
      title: minimize ? "Maximize" : "Minimize"
    }, minimize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Maximize__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Minimize__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleSettings,
      title: "Settings",
      disabled: working
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleClose,
      title: "Close"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, null)))
  }), working && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
    severity: "info"
  }, "starting camera...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hostedcontainer",
    style: !minimize ? {
      width: "85vw"
    } : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    autoPlay: true,
    playsInline: true,
    ref: videoRef,
    title: "webcam"
  })))))));
}

/***/ })

}]);
//# sourceMappingURL=4203-ca79bbbeb11925c441c6.js.map