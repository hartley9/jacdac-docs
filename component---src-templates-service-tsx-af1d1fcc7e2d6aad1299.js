"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3133,7262],{

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

/***/ 24301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DashboardDeviceItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45987);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4320);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DashboardDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32465);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);
/* harmony import */ var _DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34941);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84377);

var _excluded = ["device", "variant"];






function DashboardDeviceItem(props) {
  var {
    device,
    variant
  } = props,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(props, _excluded);

  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP);
  var breakpoints = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device, () => {
    var breakpointWeight = device.services().map(srv => {
      return (0,_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__/* .dashboardServiceWeight */ .o2)(srv) || (srv.readingRegister || srv.valueRegister || srv.intensityRegister ? 1 : 0);
    }).reduce((c, v) => c + v, 0);
    if (breakpointWeight > 3 || drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_4__/* .DrawerType.None */ .jw.None) return {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6
    };else if (breakpointWeight == 3) return {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4
    };else if (breakpointWeight == 2) return {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 4
    };else return {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2,
      xl: "auto"
    };
  }, [drawerType]); // based on size, expanded or reduce widget size

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, Object.assign({
    item: true
  }, breakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, Object.assign({
    device: device,
    variant: variant
  }, other)));
}

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
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(26799);
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
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(74450);
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
  var specifications = (0,useDeviceSpecifications/* default */.Z)();
  var cols = mobile ? 1 : medium ? 3 : 4;
  var specs = (0,react.useMemo)(() => {
    var r = devices || specifications;

    if (company) {
      var lc = (0,jdspec/* escapeDeviceIdentifier */.o9)(company);
      r = r.filter(spec => (0,jdspec/* escapeDeviceIdentifier */.o9)(spec.company).startsWith(lc));
    }

    if (requiredServiceClasses) r = r.filter(spec => spec.services.length && requiredServiceClasses.every(srv => spec.services.indexOf(srv) > -1));
    if (shuffle) (0,utils/* arrayShuffle */.r)(r);
    if (count !== undefined) r = r.slice(0, count);
    return r;
  }, [requiredServiceClasses, shuffle, count, company, JSON.stringify(devices === null || devices === void 0 ? void 0 : devices.map(d => d.id)), specifications]);
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

/***/ 27794:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceSpecification; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./src/components/specification/PacketSpecification.tsx + 12 modules
var PacketSpecification = __webpack_require__(86627);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
;// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx



function EnumSpecification(props) {
  var {
    serviceClass
  } = props;
  var spec = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);
  var enums = Object.values((spec === null || spec === void 0 ? void 0 : spec.enums) || {}).filter(en => !en.derived);
  if (!enums.length) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, "Enums"), enums.map(e => /*#__PURE__*/react.createElement(react.Fragment, {
    key: e.name
  }, /*#__PURE__*/react.createElement("h3", null, e.name, " ", e.isFlags && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "flags",
    size: "small"
  })), /*#__PURE__*/react.createElement("ul", null, Object.keys(e.members).map(en => /*#__PURE__*/react.createElement("li", {
    key: en
  }, en, ":", " ", /*#__PURE__*/react.createElement("code", null, "0x", e.members[en].toString(16))))))));
}
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(39211);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49856);
// EXTERNAL MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
var useServiceProviderFromServiceClass = __webpack_require__(36134);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
;// CONCATENATED MODULE: ./src/components/specification/ServiceSpecification.tsx














function DashboardServiceDevices(props) {
  var {
    serviceClass
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var devices = (0,useChange/* default */.Z)(bus, b => b.devices({
    serviceClass
  }));
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, devices.map(device => /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
    key: device.id,
    device: device,
    showAvatar: true,
    showHeader: true
  })));
}

function ServiceSpecification(props) {
  var _node$extends;

  var {
    service: node,
    showDerived
  } = props;
  var {
    shortId,
    name,
    classIdentifier
  } = node;
  var packets = node.packets.filter(pkt => showDerived || !pkt.derived);
  var registers = packets.filter(jdom_spec/* isRegister */.x5);
  var events = packets.filter(jdom_spec/* isEvent */.cO);
  var commands = packets.filter(jdom_spec/* isCommand */.ao);
  var reports = packets.filter(r => r.secondary);
  var pipeReports = packets.filter(jdom_spec/* isPipeReport */._5);
  var others = packets.filter(r => registers.indexOf(r) < 0 && events.indexOf(r) < 0 && commands.indexOf(r) < 0 && reports.indexOf(r) < 0 && pipeReports.indexOf(r) < 0); // spin up provider on demand

  (0,useServiceProviderFromServiceClass/* default */.Z)(node.classIdentifier);

  var reportOf = pkt => reports.find(rep => (0,jdom_spec/* isReportOf */.Dm)(pkt, rep));

  var pipeReportOf = pkt => pipeReports.find(rep => (0,jdom_spec/* isPipeReportOf */.yr)(pkt, rep));

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", {
    key: "title"
  }, name, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    component: "span"
  }, /*#__PURE__*/react.createElement(IDChip/* default */.Z, {
    id: node.classIdentifier,
    filter: "srv:" + shortId
  }))), /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: node
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "notesshort",
    source: node.notes.short
  }), !!((_node$extends = node.extends) !== null && _node$extends !== void 0 && _node$extends.length) && /*#__PURE__*/react.createElement("p", {
    key: "extends"
  }, /*#__PURE__*/react.createElement("span", null, "Extends "), node.extends.map((extend, i) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: "extend" + extend
  }, i > 0 && /*#__PURE__*/react.createElement("span", null, ", "), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    key: "extend" + extend,
    to: "/services/" + extend + "/"
  }, (0,jdom_spec/* serviceSpecificationFromName */.kB)(extend).name))), "."), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "noteslong",
    source: node.notes.long || ""
  }), /*#__PURE__*/react.createElement(DashboardServiceDevices, {
    serviceClass: classIdentifier
  }), /*#__PURE__*/react.createElement(EnumSpecification, {
    key: "enums",
    serviceClass: classIdentifier
  }), [{
    name: "Registers",
    packets: registers,
    note: node.notes["registers"]
  }, {
    name: "Events",
    packets: events,
    note: node.notes["events"]
  }, {
    name: "Commands",
    packets: commands,
    note: node.notes["commands"]
  }, {
    name: "Others",
    packets: others,
    note: node.notes["others"]
  }].filter(group => group.packets.length).map(group => /*#__PURE__*/react.createElement(react.Fragment, {
    key: "group" + group.name
  }, /*#__PURE__*/react.createElement("h2", null, group.name), group.note && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "node" + group.name,
    source: group.note
  }), group.packets.sort((l, r) => (l.derived ? 1 : -1) - (r.derived ? 1 : -1)).map(pkt => /*#__PURE__*/react.createElement(PacketSpecification/* default */.Z, {
    key: "pkt" + pkt.identifier,
    serviceClass: node.classIdentifier,
    packetInfo: pkt,
    reportInfo: reportOf(pkt),
    pipeReportInfo: pipeReportOf(pkt),
    showDevices: true
  })))));
}

/***/ }),

/***/ 59377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49856);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/specification/DeviceSpecificationList.tsx + 7 modules
var DeviceSpecificationList = __webpack_require__(87262);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(98970);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(25935);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(98953);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__(34276);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecification.tsx + 1 modules
var ServiceSpecification = __webpack_require__(27794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
;// CONCATENATED MODULE: ./jacdac-ts/src/azure-iot/devicetwin.ts



var ServiceTwinRegisterFlag;

(function (ServiceTwinRegisterFlag) {
  ServiceTwinRegisterFlag[ServiceTwinRegisterFlag["Const"] = 1] = "Const";
  ServiceTwinRegisterFlag[ServiceTwinRegisterFlag["Volatile"] = 2] = "Volatile";
})(ServiceTwinRegisterFlag || (ServiceTwinRegisterFlag = {}));

function serviceSpecificationToServiceTwinSpecification(specification) {
  if (!specification) return undefined;
  var {
    classIdentifier: serviceClass,
    camelName: name,
    packets
  } = specification;
  var registers = packets.filter(jdom_spec/* isHighLevelRegister */.vr) // TODO formalize
  .map(reg => {
    var flags = 0;
    if (reg.kind == "const") flags |= ServiceTwinRegisterFlag.Const;
    if (reg.volatile) flags |= ServiceTwinRegisterFlag.Volatile;
    var r = {
      code: reg.identifier,
      name: reg.name,
      flags,
      packf: reg.packFormat,
      fields: reg.fields.length > 1 ? reg.fields.map(f => f.name) : undefined
    };
    return r;
  });
  var dspec = {
    serviceClass,
    name,
    registers
  };
  return dspec;
}
function serviceSpecificationsWithServiceTwinSpecification() {
  var specs = [serviceSpecificationFromClassIdentifier(SRV_CONTROL)].concat(_toConsumableArray(serviceSpecifications().filter(srv => !isInfrastructure(srv))));
  return specs;
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/specification/ServiceSpecificationSource.tsx










function ServiceSpecificationSource(props) {
  var {
    classIdentifier,
    serviceSpecification,
    showSpecification
  } = props;
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(0);
  var spec = serviceSpecification || (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(classIdentifier);
  var convs = (0,jdspec/* converters */.R1)();
  var showDeviceTwin = spec && (spec === null || spec === void 0 ? void 0 : spec.camelName) !== "sytem";

  var handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  var index = 0;
  return /*#__PURE__*/react.createElement(Paper/* default */.Z, {
    square: true
  }, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, [showSpecification && "Specification", "MakeCode", "TypeScript", "C", "JSON", showDeviceTwin && "Twin"].filter(n => !!n).map(n => /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    key: n,
    label: n
  }))), showSpecification && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "spec",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(ServiceSpecification/* default */.Z, {
    service: spec
  })), ["sts", "ts", "c", "json"].map(lang => /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "conv" + lang,
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    value: () => convs[lang](spec),
    mode: lang
  }))), showDeviceTwin && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "devicetwin",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    mode: "json",
    url: (0,gatsby_browser_entry.withPrefix)("/services/twin/x" + spec.classIdentifier.toString(16) + ".json"),
    value: JSON.stringify(serviceSpecificationToServiceTwinSpecification(spec), null, 2)
  })));
}
// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__(70654);
;// CONCATENATED MODULE: ./src/components/ServiceMarkdown.tsx










function ServiceButtons(props) {
  var {
    service,
    makecodeSlug
  } = props;
  var {
    shortId
  } = service;
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    to: "/services/" + shortId + "/playground/"
  }, "Playground")), makecodeSlug && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    to: makecodeSlug,
    startIcon: /*#__PURE__*/react.createElement(MakeCodeIcon/* default */.Z, null)
  }, "MakeCode")));
}

function ServiceMarkdown(props) {
  var {
    classIdentifier,
    source,
    makecodeSlug
  } = props;
  var service = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(classIdentifier);
  var {
    shortId
  } = service;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: service
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: source
  }), service && /*#__PURE__*/react.createElement(ServiceButtons, {
    service: service,
    makecodeSlug: makecodeSlug
  }), /*#__PURE__*/react.createElement("h2", null, "Registered Devices"), /*#__PURE__*/react.createElement(DeviceSpecificationList["default"], {
    requiredServiceClasses: [classIdentifier]
  }), /*#__PURE__*/react.createElement("h2", null, "Sources"), /*#__PURE__*/react.createElement(ServiceSpecificationSource, {
    serviceSpecification: service
  }), /*#__PURE__*/react.createElement("h2", null, " See Also"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/microsoft/jacdac/blob/main/services/" + shortId + ".md"
  }, "View source")), /*#__PURE__*/react.createElement("li", null, "Read", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/reference/service-specification/",
    underline: "hover"
  }, "Service Specification Language"), " ", "reference")));
}
;// CONCATENATED MODULE: ./src/templates/service.tsx

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function Page(props) {
  return /*#__PURE__*/react.createElement(ServiceMarkdown, props.pageContext);
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-tsx-af1d1fcc7e2d6aad1299.js.map