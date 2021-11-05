"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8524,3909,7746],{

/***/ 21314:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Skeleton_Skeleton; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(7611);
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/cssUtils.js
var cssUtils = __webpack_require__(38549);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(67663);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/skeletonClasses.js

function getSkeletonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSkeleton', slot);
}
var skeletonClasses = (0,generateUtilityClasses/* default */.Z)('MuiSkeleton', ['root', 'text', 'rectangular', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
/* harmony default export */ var Skeleton_skeletonClasses = ((/* unused pure expression or super */ null && (skeletonClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/Skeleton.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4;



var _excluded = ["animation", "className", "component", "height", "style", "variant", "width"];

var _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;











var useUtilityClasses = ownerState => {
  var {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  var slots = {
    root: ['root', variant, animation, hasChildren && 'withChildren', hasChildren && !width && 'fitContent', hasChildren && !height && 'heightAuto']
  };
  return (0,composeClasses/* default */.Z)(slots, getSkeletonUtilityClass, classes);
};

var pulseKeyframe = (0,emotion_react_browser_esm.keyframes)(_t || (_t = _(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))));
var waveKeyframe = (0,emotion_react_browser_esm.keyframes)(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))));
var SkeletonRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiSkeleton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.animation !== false && styles[ownerState.animation], ownerState.hasChildren && styles.withChildren, ownerState.hasChildren && !ownerState.width && styles.fitContent, ownerState.hasChildren && !ownerState.height && styles.heightAuto];
  }
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  var radiusUnit = (0,cssUtils/* getUnit */.Wy)(theme.shape.borderRadius) || 'px';
  var radiusValue = (0,cssUtils/* toUnitless */.YL)(theme.shape.borderRadius);
  return (0,esm_extends/* default */.Z)({
    display: 'block',
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.mode === 'light' ? 0.11 : 0.13),
    height: '1.2em'
  }, ownerState.variant === 'text' && {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    transformOrigin: '0 55%',
    transform: 'scale(1, 0.60)',
    borderRadius: "".concat(radiusValue).concat(radiusUnit, "/").concat(Math.round(radiusValue / 0.6 * 10) / 10).concat(radiusUnit),
    '&:empty:before': {
      content: '"\\00a0"'
    }
  }, ownerState.variant === 'circular' && {
    borderRadius: '50%'
  }, ownerState.hasChildren && {
    '& > *': {
      visibility: 'hidden'
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: 'fit-content'
  }, ownerState.hasChildren && !ownerState.height && {
    height: 'auto'
  });
}, _ref2 => {
  var {
    ownerState
  } = _ref2;
  return ownerState.animation === 'pulse' && (0,emotion_react_browser_esm.css)(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = (0,taggedTemplateLiteral/* default */.Z)(["\n      animation: ", " 1.5s ease-in-out 0.5s infinite;\n    "])), 0)), pulseKeyframe);
}, _ref3 => {
  var {
    ownerState,
    theme
  } = _ref3;
  return ownerState.animation === 'wave' && (0,emotion_react_browser_esm.css)(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = (0,taggedTemplateLiteral/* default */.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: ", " 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ", ", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "])), 0, 0)), waveKeyframe, theme.palette.action.hover);
});
var Skeleton = /*#__PURE__*/react.forwardRef(function Skeleton(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSkeleton'
  });

  var {
    animation = 'pulse',
    className,
    component = 'span',
    height,
    style,
    variant = 'text',
    width
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SkeletonRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ref: ref,
    className: (0,clsx_m["default"])(classes.root, className),
    ownerState: ownerState
  }, other, {
    style: (0,esm_extends/* default */.Z)({
      width,
      height
    }, style)
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Skeleton_Skeleton = (Skeleton);

/***/ }),

/***/ 93909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66449);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4320);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26799);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36176);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81546);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13996);
/* harmony import */ var _devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74450);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7746);
/* harmony import */ var _ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(141);


 // tslint:disable-next-line: match-default-export-name no-submodule-imports









function DeviceSpecificationCard(props) {
  var _services$map;

  var {
    specification,
    size
  } = props;
  var {
    id,
    name,
    company,
    services
  } = specification;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
  var height = theme.spacing(31);
  var imageUrl = (0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(specification, size);
  var serviceNames = services === null || services === void 0 ? void 0 : (_services$map = services.map(sc => {
    var _serviceSpecification;

    return (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .humanify */ .lW)((_serviceSpecification = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc)) === null || _serviceSpecification === void 0 ? void 0 : _serviceSpecification.shortName);
  })) === null || _services$map === void 0 ? void 0 : _services$map.join(", ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.CardActionArea, {
    to: "/devices/" + (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .identifierToUrlPath */ .uM)(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    height: height,
    src: imageUrl,
    title: "photograph of " + specification.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    component: "div",
    variant: "subtitle2"
  }, serviceNames || ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    variant: "caption",
    color: "text.secondary"
  }, company))));
}

function DeviceSpecificationList(props) {
  var {
    count,
    shuffle,
    requiredServiceClasses,
    company,
    devices
  } = props;
  var specifications = (0,_devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  var specs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var r = devices || specifications;

    if (company) {
      var lc = (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .escapeDeviceIdentifier */ .o9)(company);
      r = r.filter(spec => (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .escapeDeviceIdentifier */ .o9)(spec.company).startsWith(lc));
    }

    if (requiredServiceClasses) r = r.filter(spec => spec.services.length && requiredServiceClasses.every(srv => spec.services.indexOf(srv) > -1));
    if (shuffle) (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .arrayShuffle */ .r)(r);
    if (count !== undefined) r = r.slice(0, count);
    return r;
  }, [requiredServiceClasses, shuffle, count, company, JSON.stringify(devices === null || devices === void 0 ? void 0 : devices.map(d => d.id)), specifications]);
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(specs.length);
  var size = (specs === null || specs === void 0 ? void 0 : specs.length) < 6 ? "catalog" : "preview";
  if (!specs.length) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    variant: "body1"
  }, "No device registered yet.");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
    container: true,
    spacing: 2
  }, specs.map(specification => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, Object.assign({
    key: specification.id,
    item: true
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeviceSpecificationCard, {
    specification: specification,
    size: size
  }))));
}

/***/ }),

/***/ 82530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FilteredDeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39211);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93909);
/* harmony import */ var _ServiceSpecificationSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65831);




function FilteredDeviceSpecificationList(props) {
  var others = Object.assign({}, props);
  var {
    0: serviceClass,
    1: setServiceClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(NaN);

  var handleServiceChanged = value => setServiceClass(value);

  var requiredServiceClasses = !isNaN(serviceClass) && [serviceClass];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ServiceSpecificationSelect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    label: "Filter by Service",
    serviceClass: serviceClass,
    setServiceClass: handleServiceChanged,
    hasRegisteredDevice: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, others, {
    requiredServiceClasses: requiredServiceClasses
  })));
}

/***/ }),

/***/ 65831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceSpecificationSelect; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65970);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87122);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98348);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26799);
/* harmony import */ var _devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97685);





var PREFIX = "ServiceSpecificationSelect";
var classes = {
  root: PREFIX + "-root"
};
var StyledTextField = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(() => ({
  ["&." + classes.root]: {
    minWidth: "18rem"
  }
}));
function ServiceSpecificationSelect(props) {
  var {
    label,
    serviceClass,
    setServiceClass,
    variant,
    fullWidth,
    error,
    hasRegisteredDevice
  } = props;
  var {
    0: labelId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("select-" + Math.random());
  var deviceCatalog = (0,_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  var specs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(spec => !/^_/.test(spec.shortId)).filter(spec => {
    var _deviceCatalog$specif, _deviceCatalog$specif2;

    return !hasRegisteredDevice || !!((_deviceCatalog$specif = deviceCatalog.specificationsForService(spec.classIdentifier)) !== null && _deviceCatalog$specif !== void 0 && (_deviceCatalog$specif2 = _deviceCatalog$specif.filter(spec => spec.status !== "deprecated")) !== null && _deviceCatalog$specif2 !== void 0 && _deviceCatalog$specif2.length);
  }), [hasRegisteredDevice]);

  var handleChange = event => setServiceClass(parseInt(event.target.value));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledTextField, {
    id: labelId,
    className: classes.root,
    label: label,
    error: !!error,
    helperText: error,
    value: isNaN(serviceClass) ? "" : serviceClass,
    select: true,
    variant: variant,
    fullWidth: fullWidth,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    key: "none",
    value: ""
  }, "No service selected"), specs.map(spec => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    key: spec.classIdentifier,
    value: spec.classIdentifier
  }, spec.name)));
}

/***/ }),

/***/ 141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CardMediaWithSkeleton; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66449);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21314);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27221);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function CardMediaWithSkeleton(props) {
  var {
    image,
    src,
    height,
    title
  } = props;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  var h = height || theme.spacing(21);
  var hasImage = !!image || !!src;
  if (!hasImage) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    height: h,
    width: "100%"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    component: "img",
    height: h,
    image: image,
    src: src,
    alt: title
  });
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

  if (itemCount !== undefined) {
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

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
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

/***/ }),

/***/ 82306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89132);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36176);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _components_specification_FilteredDeviceSpecificationList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82530);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95453);






function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_specification_FilteredDeviceSpecificationList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    severity: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null, "Register your device"), "Known devices are specified in the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/reference/device-definition/"
  }, "device catalog repository"), ". New devices can be submitted with the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/tools/device-registration/"
  }, "device registration"), ".")));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-devices-tsx-5a99ac6357e561a40f57.js.map