"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9474],{

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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ 9474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConnectTransportDialog; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83332);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84125);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45656);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81546);
/* harmony import */ var _ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57780);








function ConnectTransportDialog(props) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  var {
    transports
  } = bus;
  var {
    open,
    onClose
  } = props;
  var dialogId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var devices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .deviceSpecifications */ .qx)().map(device => ({
    device,
    transport: transports.find(t => t.type === device.transport)
  })).filter(_ref => {
    var {
      transport
    } = _ref;
    return !!transport;
  }), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    id: dialogId,
    "aria-labelledby": labelId,
    open: open,
    onClose: onClose,
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    id: labelId
  }, "Connect to a device", transports.map(transport => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    key: transport.type,
    transport: transport,
    full: false,
    transparent: true,
    onClick: onClose
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    container: true,
    spacing: 2
  }, devices.map(_ref2 => {
    var {
      device,
      transport
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      item: true,
      key: device.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      title: "photograph of the device",
      image: (0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(device, "preview")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      subheader: device.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      transport: transport,
      full: true,
      transparent: true,
      onClick: onClose
    }))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    variant: "outlined",
    onClick: onClose
  }, "Cancel")));
}

/***/ }),

/***/ 57780:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardMediaWithSkeleton; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /*#__PURE__*/react.forwardRef(function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? (0,esm_extends/* default */.Z)({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 false ? 0 : void 0;
/* harmony default export */ var CardMedia_CardMedia = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiCardMedia'
})(CardMedia));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
;// CONCATENATED MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx

var _excluded = ["image", "src", "className"];


var useStyles = (0,makeStyles/* default */.Z)(() => (0,createStyles/* default */.Z)({
  media: {
    height: 0,
    paddingTop: "75%" // 4:3

  }
}));
function CardMediaWithSkeleton(props) {
  var {
    image,
    src,
    className
  } = props,
      others = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var classes = useStyles();
  var hasImage = !!image || !!src;
  if (!hasImage) return null;
  return /*#__PURE__*/react.createElement(CardMedia_CardMedia, Object.assign({
    className: className || classes.media
  }, others, {
    image: image,
    src: src
  }));
}

/***/ })

}]);
//# sourceMappingURL=9474-6b11ba909ea218c4d9b1.js.map