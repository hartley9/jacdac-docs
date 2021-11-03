"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1691,7262],{

/***/ 64012:
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'Info');

exports.Z = _default;

/***/ }),

/***/ 87262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DeviceSpecificationList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ImageList/imageListClasses.js

function getImageListUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiImageList', slot);
}
var imageListClasses = (0,generateUtilityClasses/* default */.Z)('MuiImageList', ['root', 'masonry', 'quilted', 'standard', 'woven']);
/* harmony default export */ var ImageList_imageListClasses = ((/* unused pure expression or super */ null && (imageListClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/ImageList/ImageListContext.js

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var ImageListContext = /*#__PURE__*/react.createContext({});

if (false) {}

/* harmony default export */ var ImageList_ImageListContext = (ImageListContext);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ImageList/ImageList.js


var _excluded = ["children", "className", "cols", "component", "rowHeight", "gap", "style", "variant"];










var useUtilityClasses = ownerState => {
  var {
    classes,
    variant
  } = ownerState;
  var slots = {
    root: ['root', variant]
  };
  return (0,composeClasses/* default */.Z)(slots, getImageListUtilityClass, classes);
};

var ImageListRoot = (0,styled/* default */.ZP)('ul', {
  name: 'MuiImageList',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})(_ref => {
  var {
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    display: 'grid',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch'
  }, ownerState.variant === 'masonry' && {
    display: 'block'
  });
});
var ImageList = /*#__PURE__*/react.forwardRef(function ImageList(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiImageList'
  });

  var {
    children,
    className,
    cols = 2,
    component = 'ul',
    rowHeight = 'auto',
    gap = 4,
    style: styleProp,
    variant = 'standard'
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var contextValue = react.useMemo(() => ({
    rowHeight,
    gap,
    variant
  }), [rowHeight, gap, variant]);
  react.useEffect(() => {
    if (false) {}
  }, []);
  var style = variant === 'masonry' ? (0,esm_extends/* default */.Z)({
    columnCount: cols,
    columnGap: gap
  }, styleProp) : (0,esm_extends/* default */.Z)({
    gridTemplateColumns: "repeat(".concat(cols, ", 1fr)"),
    gap
  }, styleProp);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    gap,
    rowHeight,
    variant
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ImageListRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m["default"])(classes.root, classes[variant], className),
    ref: ref,
    style: style,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ImageList_ImageListContext.Provider, {
      value: contextValue,
      children: children
    })
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var ImageList_ImageList = (ImageList);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/isMuiElement.js + 1 modules
var isMuiElement = __webpack_require__(63128);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ImageListItem/imageListItemClasses.js

function getImageListItemUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiImageListItem', slot);
}
var imageListItemClasses = (0,generateUtilityClasses/* default */.Z)('MuiImageListItem', ['root', 'img', 'standard', 'woven', 'masonry', 'quilted']);
/* harmony default export */ var ImageListItem_imageListItemClasses = (imageListItemClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ImageListItem/ImageListItem.js


var ImageListItem_excluded = ["children", "className", "cols", "component", "rows", "style"];












var ImageListItem_useUtilityClasses = ownerState => {
  var {
    classes,
    variant
  } = ownerState;
  var slots = {
    root: ['root', variant],
    img: ['img']
  };
  return (0,composeClasses/* default */.Z)(slots, getImageListItemUtilityClass, classes);
};

var ImageListItemRoot = (0,styled/* default */.ZP)('li', {
  name: 'MuiImageListItem',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [{
      ["& .".concat(ImageListItem_imageListItemClasses.img)]: styles.img
    }, styles.root, styles[ownerState.variant]];
  }
})(_ref => {
  var {
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    display: 'inline-block',
    position: 'relative',
    lineHeight: 0
  }, ownerState.variant === 'standard' && {
    // For titlebar under list item
    display: 'flex',
    flexDirection: 'column'
  }, ownerState.variant === 'woven' && {
    height: '100%',
    alignSelf: 'center',
    '&:nth-of-type(even)': {
      height: '70%'
    }
  }, {
    ["& .".concat(ImageListItem_imageListItemClasses.img)]: (0,esm_extends/* default */.Z)({
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    }, ownerState.variant === 'standard' && {
      height: 'auto',
      flexGrow: 1
    })
  });
});
var ImageListItem = /*#__PURE__*/react.forwardRef(function ImageListItem(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiImageListItem'
  }); // TODO: - Use jsdoc @default?: "cols rows default values are for docs only"

  var {
    children,
    className,
    cols = 1,
    component = 'li',
    rows = 1,
    style
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ImageListItem_excluded);

  var {
    rowHeight = 'auto',
    gap,
    variant
  } = react.useContext(ImageList_ImageListContext);
  var height = 'auto';

  if (variant === 'woven') {
    height = undefined;
  } else if (rowHeight !== 'auto') {
    height = rowHeight * rows + gap * (rows - 1);
  }

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    cols,
    component,
    gap,
    rowHeight,
    rows,
    variant
  });

  var classes = ImageListItem_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ImageListItemRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m["default"])(classes.root, classes[variant], className),
    ref: ref,
    style: (0,esm_extends/* default */.Z)({
      height,
      gridColumnEnd: variant !== 'masonry' ? "span ".concat(cols) : undefined,
      gridRowEnd: variant !== 'masonry' ? "span ".concat(rows) : undefined,
      marginBottom: variant === 'masonry' ? gap : undefined
    }, style),
    ownerState: ownerState
  }, other, {
    children: react.Children.map(children, child => {
      if (! /*#__PURE__*/react.isValidElement(child)) {
        return null;
      }

      if (false) {}

      if (child.type === 'img' || (0,isMuiElement/* default */.Z)(child, ['Image'])) {
        return /*#__PURE__*/react.cloneElement(child, {
          className: (0,clsx_m["default"])(classes.img, child.props.className)
        });
      }

      return child;
    })
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var ImageListItem_ImageListItem = (ImageListItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ImageListItemBar/imageListItemBarClasses.js

function getImageListItemBarUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiImageListItemBar', slot);
}
var imageListItemBarClasses = (0,generateUtilityClasses/* default */.Z)('MuiImageListItemBar', ['root', 'positionBottom', 'positionTop', 'positionBelow', 'titleWrap', 'titleWrapBottom', 'titleWrapTop', 'titleWrapBelow', 'titleWrapActionPosLeft', 'titleWrapActionPosRight', 'title', 'subtitle', 'actionIcon', 'actionIconActionPosLeft', 'actionIconActionPosRight']);
/* harmony default export */ var ImageListItemBar_imageListItemBarClasses = ((/* unused pure expression or super */ null && (imageListItemBarClasses)));
;// CONCATENATED MODULE: ./node_modules/@mui/material/ImageListItemBar/ImageListItemBar.js


var ImageListItemBar_excluded = ["actionIcon", "actionPosition", "className", "subtitle", "title", "position"];










var ImageListItemBar_useUtilityClasses = ownerState => {
  var {
    classes,
    position,
    actionIcon,
    actionPosition
  } = ownerState;
  var slots = {
    root: ['root', "position".concat((0,capitalize/* default */.Z)(position))],
    titleWrap: ['titleWrap', "titleWrap".concat((0,capitalize/* default */.Z)(position)), actionIcon && "titleWrapActionPos".concat((0,capitalize/* default */.Z)(actionPosition))],
    title: ['title'],
    subtitle: ['subtitle'],
    actionIcon: ['actionIcon', "actionIconActionPos".concat((0,capitalize/* default */.Z)(actionPosition))]
  };
  return (0,composeClasses/* default */.Z)(slots, getImageListItemBarUtilityClass, classes);
};

var ImageListItemBarRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiImageListItemBar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, styles["position".concat((0,capitalize/* default */.Z)(ownerState.position))]];
  }
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    position: 'absolute',
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily
  }, ownerState.position === 'bottom' && {
    bottom: 0
  }, ownerState.position === 'top' && {
    top: 0
  }, ownerState.position === 'below' && {
    position: 'relative',
    background: 'transparent',
    alignItems: 'normal'
  });
});
var ImageListItemBarTitleWrap = (0,styled/* default */.ZP)('div', {
  name: 'MuiImageListItemBar',
  slot: 'TitleWrap',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.titleWrap, styles["titleWrap".concat((0,capitalize/* default */.Z)(ownerState.position))], ownerState.actionIcon && styles["titleWrapActionPos".concat((0,capitalize/* default */.Z)(ownerState.actionPosition))]];
  }
})(_ref2 => {
  var {
    theme,
    ownerState
  } = _ref2;
  return (0,esm_extends/* default */.Z)({
    flexGrow: 1,
    padding: '12px 16px',
    color: theme.palette.common.white,
    overflow: 'hidden'
  }, ownerState.position === 'below' && {
    padding: '6px 0 12px',
    color: 'inherit'
  }, ownerState.actionIcon && ownerState.actionPosition === 'left' && {
    paddingLeft: 0
  }, ownerState.actionIcon && ownerState.actionPosition === 'right' && {
    paddingRight: 0
  });
});
var ImageListItemBarTitle = (0,styled/* default */.ZP)('div', {
  name: 'MuiImageListItemBar',
  slot: 'Title',
  overridesResolver: (props, styles) => styles.title
})(_ref3 => {
  var {
    theme
  } = _ref3;
  return {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: '24px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
});
var ImageListItemBarSubtitle = (0,styled/* default */.ZP)('div', {
  name: 'MuiImageListItemBar',
  slot: 'Subtitle',
  overridesResolver: (props, styles) => styles.subtitle
})(_ref4 => {
  var {
    theme
  } = _ref4;
  return {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
});
var ImageListItemBarActionIcon = (0,styled/* default */.ZP)('div', {
  name: 'MuiImageListItemBar',
  slot: 'ActionIcon',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.actionIcon, styles["actionIconActionPos".concat((0,capitalize/* default */.Z)(ownerState.actionPosition))]];
  }
})(_ref5 => {
  var {
    ownerState
  } = _ref5;
  return (0,esm_extends/* default */.Z)({}, ownerState.actionPosition === 'left' && {
    order: -1
  });
});
var ImageListItemBar = /*#__PURE__*/react.forwardRef(function ImageListItemBar(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiImageListItemBar'
  });

  var {
    actionIcon,
    actionPosition = 'right',
    className,
    subtitle,
    title,
    position = 'bottom'
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, ImageListItemBar_excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    position,
    actionPosition
  });

  var classes = ImageListItemBar_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ImageListItemBarRoot, (0,esm_extends/* default */.Z)({
    ownerState: ownerState,
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ImageListItemBarTitleWrap, {
      ownerState: ownerState,
      className: classes.titleWrap,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ImageListItemBarTitle, {
        className: classes.title,
        children: title
      }), subtitle ? /*#__PURE__*/(0,jsx_runtime.jsx)(ImageListItemBarSubtitle, {
        className: classes.subtitle,
        children: subtitle
      }) : null]
    }), actionIcon ? /*#__PURE__*/(0,jsx_runtime.jsx)(ImageListItemBarActionIcon, {
      ownerState: ownerState,
      className: classes.actionIcon,
      children: actionIcon
    }) : null]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var ImageListItemBar_ImageListItemBar = (ImageListItemBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(45656);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Info.js
var Info = __webpack_require__(64012);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(81546);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
;// CONCATENATED MODULE: ./src/components/specification/DeviceSpecificationList.tsx



 // tslint:disable-next-line: match-default-export-name no-submodule-imports







var PREFIX = "DeviceSpecificationList";
var classes = {
  root: PREFIX + "-root",
  ellipsis: PREFIX + "-ellipsis",
  icon: PREFIX + "-icon"
};
var StyledImageList = (0,styled/* default */.ZP)(ImageList_ImageList)(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["&." + classes.root]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    ["& ." + classes.ellipsis]: {
      textOverflow: "ellipsis"
    },
    ["& ." + classes.icon]: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  };
});
function DeviceSpecificationList(props) {
  var {
    count,
    shuffle,
    requiredServiceClasses,
    company,
    devices
  } = props;
  var {
    mobile,
    medium
  } = (0,useMediaQueries/* default */.Z)();
  var cols = mobile ? 1 : medium ? 3 : 4;
  var specs = (0,react.useMemo)(() => {
    var r = devices || (0,jdom_spec/* deviceSpecifications */.qx)();

    if (company) {
      var lc = (0,jdspec/* escapeDeviceIdentifier */.o9)(company);
      r = r.filter(spec => (0,jdspec/* escapeDeviceIdentifier */.o9)(spec.company).startsWith(lc));
    }

    if (requiredServiceClasses) r = r.filter(spec => spec.services.length && requiredServiceClasses.every(srv => spec.services.indexOf(srv) > -1));
    if (shuffle) (0,utils/* arrayShuffle */.r)(r);
    if (count !== undefined) r = r.slice(0, count);
    return r;
  }, [requiredServiceClasses, shuffle, count, company, JSON.stringify(devices === null || devices === void 0 ? void 0 : devices.map(d => d.id))]);
  if (!specs.length) return /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, "No device registered yet.");
  return /*#__PURE__*/react.createElement(StyledImageList, {
    className: classes.root,
    cols: cols
  }, specs.map(spec => {
    var imageUrl = (0,useDeviceImage/* default */.Z)(spec, "list");
    return /*#__PURE__*/react.createElement(ImageListItem_ImageListItem, {
      key: spec.id
    }, /*#__PURE__*/react.createElement("img", {
      src: imageUrl,
      alt: spec.name,
      loading: "lazy"
    }), /*#__PURE__*/react.createElement(ImageListItemBar_ImageListItemBar, {
      title: spec.name + " " + (spec.version ? "v" + spec.version : ""),
      actionIcon: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, {
        to: "/devices/" + (0,jdom_spec/* identifierToUrlPath */.uM)(spec.id),
        "aria-label": "info about " + spec.name,
        className: classes.icon,
        size: "large"
      }, /*#__PURE__*/react.createElement(Info/* default */.Z, {
        style: {
          color: "white"
        }
      })))
    }));
  }));
}

/***/ }),

/***/ 82530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FilteredDeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39211);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87262);
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65970);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87122);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98348);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45656);




var PREFIX = "ServiceSpecificationSelect";
var classes = {
  root: PREFIX + "-root"
};
var StyledTextField = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(() => ({
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
  var specs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(spec => !/^_/.test(spec.shortId)).filter(spec => {
    var _deviceSpecifications, _deviceSpecifications2;

    return !hasRegisteredDevice || !!((_deviceSpecifications = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .deviceSpecificationsForService */ .zn)(spec.classIdentifier)) !== null && _deviceSpecifications !== void 0 && (_deviceSpecifications2 = _deviceSpecifications.filter(spec => spec.status !== "deprecated")) !== null && _deviceSpecifications2 !== void 0 && _deviceSpecifications2.length);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    key: "none",
    value: ""
  }, "No service selected"), specs.map(spec => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    key: spec.classIdentifier,
    value: spec.classIdentifier
  }, spec.name)));
}

/***/ })

}]);
//# sourceMappingURL=af16bf278be91e2b42e9b0eea78a9cdda7c16c42-a60d858696101b730150.js.map