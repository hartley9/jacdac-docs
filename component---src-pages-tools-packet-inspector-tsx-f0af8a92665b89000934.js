"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2937],{

/***/ 50144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

/***/ }),

/***/ 49400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45987);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81664);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37595);
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83604);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78847);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, theme.typography.body2, {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .lighten */ .$n)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .alpha */ .Fq)(theme.palette.divider, 1), 0.88) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .darken */ ._j)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .alpha */ .Fq)(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: 16
    }),

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '6px 24px 6px 16px',
      '&:last-child': {
        paddingRight: 16
      },
      '&$paddingCheckbox': {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      }
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px',
      '&:last-child': {
        paddingLeft: 0,
        paddingRight: 4
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableCell(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      component = props.component,
      paddingProp = props.padding,
      scopeProp = props.scope,
      sizeProp = props.size,
      sortDirection = props.sortDirection,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  var table = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_TableContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'normal');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  var variant = variantProp || tablelvl2 && tablelvl2.variant;
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(align))], padding !== 'normal' && classes["padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(padding))], size !== 'medium' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ 79942:
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
  d: "M14 7l-5 5 5 5V7z"
}), 'ArrowLeft');

exports.Z = _default;

/***/ }),

/***/ 33629:
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRight');

exports.Z = _default;

/***/ }),

/***/ 45973:
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
  d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code');

exports.Z = _default;

/***/ }),

/***/ 73097:
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
  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done');

exports.Z = _default;

/***/ }),

/***/ 97332:
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
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), 'FileCopy');

exports.Z = _default;

/***/ }),

/***/ 23443:
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
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), 'Message');

exports.Z = _default;

/***/ }),

/***/ 12655:
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
  d: "M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"
}), 'Note');

exports.Z = _default;

/***/ }),

/***/ 78359:
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
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'ReportProblem');

exports.Z = _default;

/***/ }),

/***/ 53717:
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
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');

exports.Z = _default;

/***/ }),

/***/ 97309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ PacketBadge; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__(28142);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__(53717);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(13840);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Message.js
var Message = __webpack_require__(23443);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Note.js
var Note = __webpack_require__(12655);
;// CONCATENATED MODULE: ./src/components/LogMessageIcon.tsx

var _excluded = ["identifier"];

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function LogMessageIcon(props) {
  var {
    identifier
  } = props,
      others = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  switch (identifier) {
    case constants/* LoggerCmd.Warn */.eQc.Warn:
      return /*#__PURE__*/react.createElement(Warning/* default */.Z, others);

    case constants/* LoggerCmd.Error */.eQc.Error:
      return /*#__PURE__*/react.createElement(Error/* default */.Z, others);

    case constants/* LoggerCmd.Debug */.eQc.Debug:
      return /*#__PURE__*/react.createElement(Note/* default */.Z, others);

    default:
      return /*#__PURE__*/react.createElement(Message/* default */.Z, others);
  }
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(79942);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowRight.js
var ArrowRight = __webpack_require__(33629);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__(58590);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Code.js
var Code = __webpack_require__(45973);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(60102);
;// CONCATENATED MODULE: ./src/components/PacketBadge.tsx












function PacketBadge(props) {
  var {
    packet,
    count
  } = props;
  var {
    decoded
  } = packet;
  var {
    error
  } = decoded || {};
  var requiredAck = !!packet.requiresAck;
  var failedAck = !!packet.meta[constants/* META_ACK_FAILED */.GiR];
  var receivedAck = !failedAck && !!packet.meta[constants/* META_ACK */.K3O];
  var getPacket = !!packet.meta[constants/* META_GET */.cWR];
  var direction = packet.isCommand ? "to" : "from";
  var logMessage = packet.serviceClass === specconstants/* SRV_LOGGER */.w9j && packet.isReport && !packet.isRegisterGet;
  return /*#__PURE__*/react.createElement(Badge/* default */.Z, {
    badgeContent: count
  }, error && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: error
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Error/* default */.Z, {
    color: "error"
  }))), getPacket && !failedAck && !receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "to/from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Code/* default */.Z, null))), direction === "to" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "to " + packet.friendlyDeviceName
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(ArrowLeft/* default */.Z, null))), direction === "from" && !getPacket && !failedAck && !receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "from " + packet.friendlyDeviceName
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(ArrowRight/* default */.Z, null))), requiredAck === true && failedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "no ack"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Clear/* default */.Z, null))), requiredAck === true && receivedAck && /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: "ack received"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
    kind: constants/* CRC_ACK_NODE_NAME */.REx
  }))), logMessage ? /*#__PURE__*/react.createElement(LogMessageIcon, {
    identifier: decoded === null || decoded === void 0 ? void 0 : decoded.info.identifier
  }) : /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
    kind: packet.isCRCAck ? "crc_ack" : packet.isPipe ? "pipe" : packet.isAnnounce ? "announce" : decoded === null || decoded === void 0 ? void 0 : decoded.info.kind
  }));
}

/***/ }),

/***/ 70306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PacketListItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50144);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38030);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91448);
/* harmony import */ var _PacketBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97309);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84377);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10913);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91635);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35313);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20509);










var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
  item: {
    marginBottom: 0,
    borderBottom: "1px solid #ddd"
  }
}));
function PacketListItem(props) {
  var {
    packet,
    count,
    showTime
  } = props;
  var {
    selectedPacket,
    setSelectedPacket
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);
  var {
    setDrawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);
  var classes = useStyles();
  var {
    mobile
  } = (0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  var {
    decoded
  } = packet;
  var {
    info
  } = decoded || {};

  var handleClick = () => {
    if (mobile) setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .DrawerType.None */ .jw.None);
    setSelectedPacket(packet);
    (0,gatsby__WEBPACK_IMPORTED_MODULE_7__.navigate)("/tools/packet-inspector/");
  };

  var selected = packet === selectedPacket;
  var logMessage = packet.serviceClass === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_LOGGER */ .w9j && packet.isReport && packet.isEvent;
  var pipePackets = packet.meta[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .META_PIPE */ .YHR];
  var name = (info === null || info === void 0 ? void 0 : info.name) || packet.friendlyCommandName;
  var primary = packet.isCRCAck && "crc ack " + name || packet.isAnnounce && "announce from " + name || packet.isRegisterGet && "get " + name || pipePackets && "pipe port:" + packet.pipePort + " " + pipePackets.length + " packets" || logMessage && (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_6__/* .jdunpack */ .TE)(packet.data, "s")[0] || "" + (packet.isRegisterSet ? "set " : "") + name + " " + (decoded ? (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .ellipseJoin */ .VA)(decoded.decoded.map(f => f.humanValue), 18) : "");
  var secondary = "" + (showTime ? (0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_4__/* .prettyDuration */ .Xh)(packet.timestamp) + ": " : "") + (packet.isCommand ? "to" : "from") + " " + packet.friendlyDeviceName + "/" + packet.friendlyServiceName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    button: true,
    className: classes.item,
    dense: true,
    onClick: handleClick,
    selected: selected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PacketBadge__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    packet: packet,
    count: count
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      textOverflow: "ellipsis"
    }, primary),
    secondary: secondary
  }));
}

/***/ }),

/***/ 21623:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceSpecificationCard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4998);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31186);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45656);
/* harmony import */ var _IDChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92681);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36176);
/* harmony import */ var _ui_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98784);
/* harmony import */ var _ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49856);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70767);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20392);
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50048);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71815);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35313);












function ServiceSpecificationCard(props) {
  var _spec, _spec2, _spec3, _spec4, _spec5;

  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
  var {
    serviceClass,
    specification,
    showReleaseStatus,
    showServiceClass
  } = props;
  var spec = specification;
  if (!spec && serviceClass !== undefined) spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);
  var sc = ((_spec = spec) === null || _spec === void 0 ? void 0 : _spec.classIdentifier) || serviceClass;
  var srv = ((_spec2 = spec) === null || _spec2 === void 0 ? void 0 : _spec2.shortId) || (sc === null || sc === void 0 ? void 0 : sc.toString(16));
  var hostDefinition = (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_6__/* .serviceProviderDefinitionFromServiceClass */ .vd)(sc);

  var handleSimulatorClick = () => {
    (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_6__/* .addServiceProvider */ .Q6)(bus, hostDefinition);
    (0,gatsby__WEBPACK_IMPORTED_MODULE_10__.navigate)("/dashboard/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    title: ((_spec3 = spec) === null || _spec3 === void 0 ? void 0 : _spec3.name) || "???",
    subheader: showServiceClass && srv && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IDChip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      id: sc,
      filter: "srv:" + srv
    }),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hostDefinition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleSimulatorClick,
      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KindIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        kind: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__/* .VIRTUAL_DEVICE_NODE_NAME */ .UX7
      }),
      "aria-label": "start simulator and open dashboard",
      label: "simulator"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, ((_spec4 = spec) === null || _spec4 === void 0 ? void 0 : _spec4.notes["short"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    variant: "body2",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Markdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    source: ((_spec5 = spec) === null || _spec5 === void 0 ? void 0 : _spec5.notes["short"].split(".", 1)[0]) + "."
  })), showReleaseStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    specification: spec
  })), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "outlined",
    "aria-label": "open service " + spec.shortId + " page",
    to: "/services/" + spec.shortId + "/"
  }, "More...")));
}

/***/ }),

/***/ 18568:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CopyButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97332);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73097);
/* harmony import */ var _material_ui_icons_ReportProblem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78359);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79885);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83332);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72179);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);


var _excluded = ["label", "title", "onCopy"];








function CopyButton(props) {
  var {
    label,
    title = "copy data to clipboard",
    onCopy
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, _excluded);

  var {
    0: copied,
    1: setCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  var mounted = (0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* (ev) {
      ev.stopPropagation();
      ev.preventDefault();

      try {
        setCopied(null);

        var _copied = yield onCopy();

        if (typeof _copied === "string") {
          var _text = _copied;
          yield navigator.clipboard.writeText(_text);
        } else {
          var canvas = _copied;
          var blob = yield new Promise(resolve => canvas.toBlob(blob => resolve(blob)));
          var item = new ClipboardItem({
            "image/png": blob
          });
          navigator.clipboard.write([item]);
        }

        if (mounted()) setCopied(true);
      } catch (e) {
        console.debug(e);
        if (mounted()) setCopied(false);
      } finally {
        yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .delay */ .gw)(1000);
        if (mounted()) setCopied(undefined);
      }
    });

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var disabled = copied !== undefined;
  var text = copied === true ? "Copied!" : copied === false ? "Copy failed" : label || "copy to clipboard";
  return label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, Object.assign({
    title: title
  }, rest, {
    onClick: disabled ? undefined : handleClick
  }), text) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, Object.assign({
    trackName: "ui.copy",
    title: text
  }, rest, {
    onClick: disabled ? undefined : handleClick
  }), copied === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null) : copied === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ReportProblem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null));
}

/***/ }),

/***/ 55662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx + 3 modules
var PacketsContext = __webpack_require__(43226);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/History.js
var History = __webpack_require__(9080);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(59355);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 12 modules
var Box = __webpack_require__(91448);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./src/components/specification/PacketSpecification.tsx + 12 modules
var PacketSpecification = __webpack_require__(38294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(78475);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(49683);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(4093);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(99395);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(49400);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(86300);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/buffer.ts
var buffer = __webpack_require__(3482);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var jdom_packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var ui_Tooltip = __webpack_require__(60102);
;// CONCATENATED MODULE: ./src/components/PacketHeaderLayout.tsx









function HeaderMap(props) {
  var {
    header,
    offset,
    size,
    name
  } = props;
  var bytes = header.slice(offset, offset + size);
  return /*#__PURE__*/react.createElement(ui_Tooltip/* default */.Z, {
    title: name
  }, /*#__PURE__*/react.createElement("span", null, (0,utils/* toHex */.NC)(bytes)));
}

function PacketHeaderLayout(props) {
  var {
    packet,
    data,
    showSlots,
    showFlags,
    showCommands
  } = props;
  var theme = (0,useTheme/* default */.Z)();
  var pkt = packet || jdom_packet/* default.fromBinary */.Z.fromBinary((0,utils/* fromHex */.H_)(data));
  var {
    header
  } = pkt;
  var frameFlags = header[3];
  var multi = pkt.isMultiCommand;
  var serviceCommand = pkt.serviceCommand;
  var slots = [{
    offset: 0,
    size: 2,
    format: buffer/* NumberFormat.UInt16LE */.y4.UInt16LE,
    formatHex: true,
    name: "frame_crc",
    description: "CRC"
  }, {
    offset: 2,
    size: 1,
    format: buffer/* NumberFormat.UInt8LE */.y4.UInt8LE,
    name: "frame_size",
    description: "Size of the data field in bytes."
  }, {
    offset: 3,
    size: 1,
    name: "frame_flags",
    description: "Flags specific to this frame."
  }, multi && {
    offset: 4,
    size: 4,
    format: buffer/* NumberFormat.UInt32LE */.y4.UInt32LE,
    formatHex: true,
    name: "service_identifier",
    description: "multicast service identifier"
  }, multi && {
    offset: 8,
    size: 4,
    formatHex: true,
    name: "ignored",
    description: "ignored in multicast"
  }, !multi && {
    offset: 4,
    size: 8,
    formatHex: true,
    name: "device_identifiter",
    description: "64-bit device identifier"
  }, {
    offset: 12,
    size: 1,
    format: buffer/* NumberFormat.UInt8LE */.y4.UInt8LE,
    name: "packet_size",
    description: "The size of the payload field. Maximum size is 236 bytes."
  }, {
    offset: 13,
    size: 1,
    format: buffer/* NumberFormat.UInt8LE */.y4.UInt8LE,
    name: "service_index",
    know: {
      [constants/* JD_SERVICE_INDEX_PIPE.toString */.e5Z.toString(16)]: "pipe",
      [constants/* JD_SERVICE_INDEX_CRC_ACK.toString */.$rs.toString(16)]: "crc ack"
    },
    description: "A number that specifies an operation and code combination."
  }, {
    offset: 14,
    size: 2,
    format: buffer/* NumberFormat.UInt16LE */.y4.UInt16LE,
    formatHex: true,
    name: "service_command",
    description: "Identifier for the command"
  }].filter(c => !!c);
  var flags = [{
    position: 1,
    flag: constants/* JD_FRAME_FLAG_COMMAND */.e4B,
    name: "COMMAND",
    description: "Determines if the frame contains command or report packets. If set, the frame contains command packets, if not set, the frame contains report packets."
  }, {
    position: 2,
    flag: constants/* JD_FRAME_FLAG_ACK_REQUESTED */.amS,
    name: "ACK_REQUESTED",
    description: "Determines if the receiver should return an ACK to the sender. If set, the receiver should repsond with an ACK frame, if not set, no response is required."
  }, {
    position: 4,
    flag: constants/* JD_FRAME_FLAG_IDENTIFIER_IS_SERVICE_CLASS */.Amr,
    name: "IDENTIFIER_IS_SERVICE_CLASS",
    description: "The packet is a multi command. The service class is the first 4 bytes of the device id."
  }].filter(f => (frameFlags & f.flag) === f.flag);
  var commandFlags = [{
    flag: constants/* CMD_GET_REG */.V4G,
    active: (serviceCommand & constants/* CMD_GET_REG */.V4G) === constants/* CMD_GET_REG */.V4G,
    name: "CMD_GET_REG",
    description: "Get register value"
  }, {
    flag: constants/* CMD_SET_REG */.YUL,
    active: (serviceCommand & constants/* CMD_SET_REG */.YUL) === constants/* CMD_SET_REG */.YUL,
    name: "CMD_SET_REG",
    description: "Set register value"
  }, {
    flag: constants/* CMD_EVENT_MASK */.eMy,
    active: (serviceCommand & constants/* CMD_EVENT_MASK */.eMy) !== 0,
    name: "CMD_EVENT_MASK",
    description: "Command is an event"
  }].filter(f => f.active);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    key: "header",
    padding: 0
  }, /*#__PURE__*/react.createElement("pre", null, /*#__PURE__*/react.createElement("code", null, slots.map(slot => /*#__PURE__*/react.createElement(Box/* default */.Z, {
    component: "span",
    key: slot.name,
    mr: theme.spacing(0.1)
  }, /*#__PURE__*/react.createElement(HeaderMap, Object.assign({
    header: header
  }, slot))))))), showSlots && /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    key: "slots"
  }, /*#__PURE__*/react.createElement(TableContainer/* default */.Z, null, /*#__PURE__*/react.createElement(Table/* default */.Z, {
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Bytes"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Value"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Offset"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Size"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Name"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Description"))), /*#__PURE__*/react.createElement(TableBody/* default */.Z, null, slots.map(slot => {
    var _slot$know;

    var buf = header.slice(slot.offset, slot.offset + slot.size);
    var value = slot.format && (0,buffer/* getNumber */.Dx)(buf, slot.format, 0);
    var known = (_slot$know = slot.know) === null || _slot$know === void 0 ? void 0 : _slot$know[(0,utils/* toHex */.NC)(buf)];
    return /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
      key: slot.name
    }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, /*#__PURE__*/react.createElement("code", null, (0,utils/* toHex */.NC)(buf))), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, value !== undefined && slot.formatHex ? "0x" + value.toString(16) : value, known && /*#__PURE__*/react.createElement("code", null, "(", known, ")")), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, slot.offset), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, slot.size), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, slot.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, slot.description));
  }))))), showCommands && !!commandFlags.length && /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    key: "commandflags"
  }, /*#__PURE__*/react.createElement(TableContainer/* default */.Z, null, /*#__PURE__*/react.createElement(Table/* default */.Z, {
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    colSpan: 3
  }, "Service command")), /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Flag"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Name"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Description"))), /*#__PURE__*/react.createElement(TableBody/* default */.Z, null, commandFlags.map(flag => /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
    key: flag.name
  }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, /*#__PURE__*/react.createElement("code", null, ("0000" + flag.flag.toString(16)).slice(-4))), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, flag.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, flag.description))))))), showFlags && !!flags.length && /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    key: "flags"
  }, /*#__PURE__*/react.createElement(TableContainer/* default */.Z, null, /*#__PURE__*/react.createElement(Table/* default */.Z, {
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    colSpan: 3
  }, "Frame flags")), /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Flag"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Name"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Description"))), /*#__PURE__*/react.createElement(TableBody/* default */.Z, null, flags.map(flag => /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
    key: flag.name
  }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, /*#__PURE__*/react.createElement("code", null, flag.position)), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, flag.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, flag.description))))))));
}
// EXTERNAL MODULE: ./src/components/PacketBadge.tsx + 1 modules
var PacketBadge = __webpack_require__(97309);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert_Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(99330);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packobject.ts
var packobject = __webpack_require__(53616);
// EXTERNAL MODULE: ./src/components/CodeBlock.tsx + 2 modules
var CodeBlock = __webpack_require__(9433);
;// CONCATENATED MODULE: ./src/components/PacketDataLayout.tsx









function PacketDataLayout(props) {
  var _decoded$info;

  var {
    packet,
    showHex,
    showDecoded,
    showUnpacked,
    showJSON
  } = props;
  var {
    data,
    decoded
  } = packet;
  var {
    info
  } = decoded || {};
  var unpacked;
  var error;

  try {
    unpacked = !!(info !== null && info !== void 0 && info.packFormat) && !!data.length && (0,pack/* jdunpack */.TE)(data, info.packFormat);
  } catch (e) {
    error = e + "";
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, error && /*#__PURE__*/react.createElement(Alert_Alert/* default */.Z, {
    severity: "error"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Invalid data payload"), error), showHex && !!data.length && /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    padding: 0
  }, /*#__PURE__*/react.createElement(ui_Tooltip/* default */.Z, {
    title: (decoded === null || decoded === void 0 ? void 0 : (_decoded$info = decoded.info) === null || _decoded$info === void 0 ? void 0 : _decoded$info.packFormat) || "unknown data layout"
  }, /*#__PURE__*/react.createElement("pre", null, (0,utils/* toHex */.NC)(data)))), showDecoded && !!(decoded !== null && decoded !== void 0 && decoded.decoded.length) && /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(TableContainer/* default */.Z, null, /*#__PURE__*/react.createElement(Table/* default */.Z, {
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "name"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "value"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "pretty"))), /*#__PURE__*/react.createElement(TableBody/* default */.Z, null, decoded.decoded.map((member, i) => /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
    key: i
  }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, member.info.name == "_" ? info.name : member.info.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, /*#__PURE__*/react.createElement("code", null, member.value, typeof member.value === "number" ? " (0x" + member.value.toString(16) + ")" : "", " ")), /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, /*#__PURE__*/react.createElement("code", null, member.humanValue)))))))), showUnpacked && unpacked && /*#__PURE__*/react.createElement(Box/* default */.Z, {
    pb: 2
  }, /*#__PURE__*/react.createElement(CodeBlock["default"], {
    className: "language-json"
  }, JSON.stringify(unpacked, null, 4))), showJSON && unpacked && /*#__PURE__*/react.createElement(Box/* default */.Z, {
    pb: 2
  }, /*#__PURE__*/react.createElement(CodeBlock["default"], {
    className: "language-json"
  }, JSON.stringify((0,packobject/* unpackedToObject */.f)(unpacked, info.fields, info.name), null, 4))));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./src/components/PacketListItem.tsx
var PacketListItem = __webpack_require__(70306);
;// CONCATENATED MODULE: ./src/components/PacketList.tsx



function PacketList(props) {
  var {
    packets
  } = props;
  return /*#__PURE__*/react.createElement(List/* default */.Z, null, packets === null || packets === void 0 ? void 0 : packets.filter(pkt => !!pkt).map(pkt => /*#__PURE__*/react.createElement(PacketListItem/* default */.Z, {
    key: pkt.key,
    packet: pkt
  })));
}
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationCard.tsx
var ServiceSpecificationCard = __webpack_require__(21623);
// EXTERNAL MODULE: ./src/components/ui/CopyButton.tsx
var CopyButton = __webpack_require__(18568);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/tools/PacketInspector.tsx



 // tslint:disable-next-line: no-submodule-imports match-default-export-name
















function TraceCopyButton(props) {
  var {
    packet
  } = props;
  var {
    replayTrace,
    view
  } = (0,react.useContext)(PacketsContext/* default */.Z);

  var handleCopy = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var savedTrace = replayTrace || view.trace;
      return (0,utils/* toHex */.NC)(packet.header) + " " + (0,utils/* toHex */.NC)(packet.data) + " " + (0,pretty/* printPacket */.$_)(packet).replace(/\r?\n/g, " ") + "\n\n" + savedTrace.serializeToText(-100) + "\n";
    });

    return function handleCopy() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(CopyButton/* default */.Z, {
    title: "copy packet",
    onCopy: handleCopy
  });
}

function PacketInspector() {
  var {
    selectedPacket: packet
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var theme = (0,useTheme/* default */.Z)();
  if (!packet) return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Click on a packet in the ", /*#__PURE__*/react.createElement(History/* default */.Z, null), " packet list.");
  var {
    decoded
  } = packet;
  var {
    info,
    error
  } = decoded || {};
  var name = (info === null || info === void 0 ? void 0 : info.name) || packet.friendlyCommandName;
  var ack = packet.meta[constants/* META_ACK */.K3O];
  var {
    header,
    data
  } = packet;
  var pipePackets = packet.meta[constants/* META_PIPE */.YHR];
  var get = packet.meta[constants/* META_GET */.cWR];
  var sentTrace = packet.meta[constants/* META_TRACE */.EEP];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, /*#__PURE__*/react.createElement(PacketBadge/* default */.Z, {
    packet: packet
  }), name + " " + (packet.isCommand ? "to" : "from") + " " + packet.friendlyDeviceName + "/" + packet.friendlyServiceName, /*#__PURE__*/react.createElement(TraceCopyButton, {
    packet: packet
  })), packet.sender && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body2"
  }, "sender: ", packet.sender), error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, error), /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    padding: 0
  }, /*#__PURE__*/react.createElement("pre", null, /*#__PURE__*/react.createElement("code", null, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    component: "span",
    mr: theme.spacing(0.1)
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.ZP, {
    title: "header"
  }, /*#__PURE__*/react.createElement("span", null, (0,utils/* toHex */.NC)(header))))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("code", null, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    component: "span",
    mr: theme.spacing(0.1)
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.ZP, {
    title: "data"
  }, /*#__PURE__*/react.createElement("span", null, (0,utils/* toHex */.NC)(data))))))), /*#__PURE__*/react.createElement("h3", null, "Header"), /*#__PURE__*/react.createElement(PacketHeaderLayout, {
    packet: packet,
    showSlots: true,
    showFlags: true,
    showCommands: true
  }), data && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Data"), /*#__PURE__*/react.createElement(PacketDataLayout, {
    packet: packet,
    showHex: true,
    showDecoded: true,
    showJSON: true,
    showUnpacked: true
  })), ack && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Ack received"), /*#__PURE__*/react.createElement(PacketList, {
    packets: [ack]
  })), get && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "GET request"), /*#__PURE__*/react.createElement(PacketList, {
    packets: [get]
  })), pipePackets && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Pipe packets"), /*#__PURE__*/react.createElement(PacketList, {
    packets: pipePackets.filter(pp => !!pp)
  })), info && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Specification"), /*#__PURE__*/react.createElement(ServiceSpecificationCard/* default */.Z, {
    showServiceClass: true,
    serviceClass: packet.serviceClass,
    showReleaseStatus: true
  }), /*#__PURE__*/react.createElement(PacketSpecification/* default */.Z, {
    serviceClass: packet.serviceClass,
    packetInfo: info
  })), sentTrace && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Sent trace"), /*#__PURE__*/react.createElement("pre", null, sentTrace)));
}
;// CONCATENATED MODULE: ./src/pages/tools/packet-inspector.tsx


function Page() {
  return /*#__PURE__*/react.createElement(PacketInspector, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-packet-inspector-tsx-f0af8a92665b89000934.js.map