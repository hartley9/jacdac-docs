"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4203],{

/***/ 82714:
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
  d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
}), 'Fullscreen');

exports.Z = _default;

/***/ }),

/***/ 74203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebCam; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95148);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34093);
/* harmony import */ var _useEffectAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7751);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88237);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79885);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72179);
/* harmony import */ var _Suspense__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18581);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29181);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84377);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6809);
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82714);


/* eslint-disable jsx-a11y/media-has-caption */












var Draggable = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.t.bind(__webpack_require__, 82625, 23)));
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
  cardContainer: {
    zIndex: 1101,
    position: "absolute",
    left: "5rem",
    top: "5rem"
  },
  card: {
    "& .hostedcontainer": {
      position: "relative",
      width: "30vw"
    },
    "& video": {
      border: "none",
      position: "relative",
      width: "100%",
      height: "100%"
    }
  }
}));

function requestVideoStream() {
  return _requestVideoStream.apply(this, arguments);
}

function _requestVideoStream() {
  _requestVideoStream = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
    // first ask for permission from ther user so that
    // labels are populated in enumerateDevices
    return yield navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    });
  });
  return _requestVideoStream.apply(this, arguments);
}

function WebCam() {
  var {
    setShowWebCam
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP);
  var {
    0: devices,
    1: setDevices
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var [deviceId, setDeviceId] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("webcam_deviceid", "");
  var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var streamRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var {
    0: settingsOpen,
    1: setSettingsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!deviceId);
  var mounted = (0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  var classes = useStyles();

  var handleClose = () => setShowWebCam(false);

  var handleSettings = () => setSettingsOpen(newValue => !newValue);

  var handleDeviceChange = ev => setDeviceId(ev.target.value);

  var handleFullScreen = () => {
    var _videoRef$current;

    return (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.requestFullscreen();
  };

  var stop = () => {
    var stream = streamRef.current;

    if (stream) {
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


  (0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
    console.debug("greenscreen: start"); // deviceId is "" if green screen selected

    if (deviceId) {
      console.debug("greenscreen: stream acquired");

      try {
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
        video.play();
        if (mounted()) setSettingsOpen(false);
      } catch (e) {
        console.debug("greenscreen: play failed");
        console.error(e);
        if (mounted()) setDeviceId(undefined);
      }
    }
  }), [deviceId]);

  var updateDevices = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      try {
        // enumerate devices
        var _devices = yield navigator.mediaDevices.enumerateDevices();

        var webcams = _devices.filter(device => device.kind == "videoinput");

        if (mounted()) {
          setDevices(webcams);

          if (!webcams.find(webcam => webcam.deviceId === deviceId)) {
            var _webcams$;

            var did = (_webcams$ = webcams[0]) === null || _webcams$ === void 0 ? void 0 : _webcams$.deviceId;
            setDeviceId(did);
          }
        }
      } catch (e) {
        if (mounted()) setDevices([]);
      }
    });

    return function updateDevices() {
      return _ref2.apply(this, arguments);
    };
  }(); // startup


  (0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
    // first ask for permission from ther user so that
    // labels are populated in enumerateDevices
    yield requestVideoStream();
    yield updateDevices();
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    navigator.mediaDevices.addEventListener("devicechange", updateDevices);
    return () => navigator.mediaDevices.removeEventListener("devicechange", updateDevices);
  }); // cleanup

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => stop, [deviceId]); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var draggableProps = {
    nodeRef
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suspense__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Draggable, draggableProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    ref: nodeRef,
    className: classes.cardContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    title: settingsOpen && devices && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      variant: "outlined",
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      title: "select a webcam",
      open: settingsOpen,
      onChange: handleDeviceChange,
      value: deviceId
    }, devices === null || devices === void 0 ? void 0 : devices.map(_ref4 => {
      var {
        deviceId,
        label
      } = _ref4;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        key: deviceId,
        value: deviceId
      }, label);
    }))),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleFullScreen,
      title: "full screen"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleSettings,
      title: "Settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleClose,
      title: "Close"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, null)))
  }), !devices && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    severity: "warning"
  }, "Please allow access to use your camera.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hostedcontainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
    autoPlay: true,
    playsInline: true,
    ref: videoRef,
    title: "webcam"
  })))))));
}

/***/ })

}]);
//# sourceMappingURL=4203-0f82ed579761ba711c37.js.map