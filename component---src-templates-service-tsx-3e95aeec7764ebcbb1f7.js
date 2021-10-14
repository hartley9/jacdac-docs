"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3133,6684],{

/***/ 12531:
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, Object.assign({
    item: true
  }, breakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, Object.assign({
    device: device,
    variant: variant
  }, other)));
}

/***/ }),

/***/ 46684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DeviceSpecificationList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ImageList/ImageList.js







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

  }
};
var ImageList = /*#__PURE__*/react.forwardRef(function ImageList(props, ref) {
  var cellHeight = props.cellHeight,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 2 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$gap = props.gap,
      gapProp = _props$gap === void 0 ? 4 : _props$gap,
      _props$rowHeight = props.rowHeight,
      rowHeightProp = _props$rowHeight === void 0 ? 180 : _props$rowHeight,
      spacing = props.spacing,
      style = props.style,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["cellHeight", "children", "classes", "className", "cols", "component", "gap", "rowHeight", "spacing", "style"]);

  var gap = spacing || gapProp;
  var rowHeight = cellHeight || rowHeightProp;
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref,
    style: (0,esm_extends/* default */.Z)({
      margin: -gap / 2
    }, style)
  }, other), react.Children.map(children, function (child) {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return null;
    }

    if (false) {}

    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return /*#__PURE__*/react.cloneElement(child, {
      style: (0,esm_extends/* default */.Z)({
        width: "".concat(100 / cols * childCols, "%"),
        height: rowHeight === 'auto' ? 'auto' : rowHeight * childRows + gap,
        padding: gap / 2
      }, child.props.style)
    });
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var ImageList_ImageList = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiImageList'
})(ImageList));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__(91510);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/isMuiElement.js
var isMuiElement = __webpack_require__(61008);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ImageListItem/ImageListItem.js








var ImageListItem_styles = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },

  /* Styles applied to the `div` element that wraps the children. */
  item: {
    position: 'relative',
    display: 'block',
    // In case it's not rendered with a div.
    height: '100%',
    overflow: 'hidden'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the item. */
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the item. */
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

var fit = function fit(imgEl, classes) {
  if (!imgEl || !imgEl.complete) {
    return;
  }

  if (imgEl.width / imgEl.height > imgEl.parentElement.offsetWidth / imgEl.parentElement.offsetHeight) {
    var _imgEl$classList, _imgEl$classList2;

    (_imgEl$classList = imgEl.classList).remove.apply(_imgEl$classList, (0,toConsumableArray/* default */.Z)(classes.imgFullWidth.split(' ')));

    (_imgEl$classList2 = imgEl.classList).add.apply(_imgEl$classList2, (0,toConsumableArray/* default */.Z)(classes.imgFullHeight.split(' ')));
  } else {
    var _imgEl$classList3, _imgEl$classList4;

    (_imgEl$classList3 = imgEl.classList).remove.apply(_imgEl$classList3, (0,toConsumableArray/* default */.Z)(classes.imgFullHeight.split(' ')));

    (_imgEl$classList4 = imgEl.classList).add.apply(_imgEl$classList4, (0,toConsumableArray/* default */.Z)(classes.imgFullWidth.split(' ')));
  }
};

function ensureImageCover(imgEl, classes) {
  if (!imgEl) {
    return;
  }

  if (imgEl.complete) {
    fit(imgEl, classes);
  } else {
    imgEl.addEventListener('load', function () {
      fit(imgEl, classes);
    });
  }
}

var ImageListItem = /*#__PURE__*/react.forwardRef(function ImageListItem(props, ref) {
  // cols rows default values are for docs only
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 1 : _props$cols,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 1 : _props$rows,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "cols", "component", "rows"]);

  var imgRef = react.useRef(null);
  react.useEffect(function () {
    ensureImageCover(imgRef.current, classes);
  });
  react.useEffect(function () {
    var handleResize = (0,debounce/* default */.Z)(function () {
      fit(imgRef.current, classes);
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [classes]);
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react.createElement("div", {
    className: classes.item
  }, react.Children.map(children, function (child) {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return null;
    }

    if (child.type === 'img' || (0,isMuiElement/* default */.Z)(child, ['Image'])) {
      return /*#__PURE__*/react.cloneElement(child, {
        ref: imgRef
      });
    }

    return child;
  })));
});
 false ? 0 : void 0;
/* harmony default export */ var ImageListItem_ImageListItem = ((0,withStyles/* default */.Z)(ImageListItem_styles, {
  name: 'MuiImageListItem'
})(ImageListItem));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ImageListItemBar/ImageListItemBar.js






var ImageListItemBar_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 48,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily
    },

    /* Styles applied to the root element if `position="bottom"`. */
    positionBottom: {
      bottom: 0
    },

    /* Styles applied to the root element if `position="top"`. */
    positionTop: {
      top: 0
    },

    /* Styles applied to the root element if a `subtitle` is provided. */
    rootSubtitle: {
      height: 68
    },

    /* Styles applied to the title and subtitle container element. */
    titleWrap: {
      flexGrow: 1,
      marginLeft: 16,
      marginRight: 16,
      color: theme.palette.common.white,
      overflow: 'hidden'
    },

    /* Styles applied to the container element if `actionPosition="left"`. */
    titleWrapActionPosLeft: {
      marginLeft: 0
    },

    /* Styles applied to the container element if `actionPosition="right"`. */
    titleWrapActionPosRight: {
      marginRight: 0
    },

    /* Styles applied to the title container element. */
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '24px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the subtitle container element. */
    subtitle: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the actionIcon if supplied. */
    actionIcon: {},

    /* Styles applied to the actionIcon if `actionPosition="left"`. */
    actionIconActionPosLeft: {
      order: -1
    }
  };
};
var ImageListItemBar = /*#__PURE__*/react.forwardRef(function ImageListItemBar(props, ref) {
  var actionIcon = props.actionIcon,
      _props$actionPosition = props.actionPosition,
      actionPosition = _props$actionPosition === void 0 ? 'right' : _props$actionPosition,
      classes = props.classes,
      className = props.className,
      subtitle = props.subtitle,
      title = props.title,
      _props$position = props.position,
      positionProp = _props$position === void 0 ? 'bottom' : _props$position,
      titlePosition = props.titlePosition,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["actionIcon", "actionPosition", "classes", "className", "subtitle", "title", "position", "titlePosition"]);

  var position = titlePosition || positionProp;
  var actionPos = actionIcon && actionPosition;
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className, subtitle && classes.rootSubtitle, {
      'bottom': classes.positionBottom,
      'top': classes.positionTop
    }[position]),
    ref: ref
  }, other), /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m["default"])(classes.titleWrap, {
      'left': classes.titleWrapActionPosLeft,
      'right': classes.titleWrapActionPosRight
    }[actionPos])
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.title
  }, title), subtitle ? /*#__PURE__*/react.createElement("div", {
    className: classes.subtitle
  }, subtitle) : null), actionIcon ? /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m["default"])(classes.actionIcon, actionPos === 'left' && classes.actionIconActionPosLeft)
  }, actionIcon) : null);
});
 false ? 0 : void 0;
/* harmony default export */ var ImageListItemBar_ImageListItemBar = ((0,withStyles/* default */.Z)(ImageListItemBar_styles, {
  name: 'MuiImageListItemBar'
})(ImageListItemBar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(45656);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__(12531);
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







var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  ellipsis: {
    textOverflow: "ellipsis"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));
function DeviceSpecificationList(props) {
  var {
    count,
    shuffle,
    requiredServiceClasses,
    company,
    devices
  } = props;
  var classes = useStyles();
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
  return /*#__PURE__*/react.createElement(ImageList_ImageList, {
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
        className: classes.icon
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
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(45656);
// EXTERNAL MODULE: ./src/components/specification/PacketSpecification.tsx + 12 modules
var PacketSpecification = __webpack_require__(86627);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
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
  }, en, ": ", /*#__PURE__*/react.createElement("code", null, "0x", e.members[en].toString(16))))))));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 12 modules
var Box = __webpack_require__(91448);
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
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
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
// EXTERNAL MODULE: ./src/components/specification/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__(46684);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(45656);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
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
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    to: "/services/" + shortId + "/playground/"
  }, "Playground")), makecodeSlug && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
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
    to: "/reference/service-specification/"
  }, "Service Specification Language"), " ", "reference")));
}
;// CONCATENATED MODULE: ./src/templates/service.tsx

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function Page(props) {
  return /*#__PURE__*/react.createElement(ServiceMarkdown, props.pageContext);
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-tsx-3e95aeec7764ebcbb1f7.js.map