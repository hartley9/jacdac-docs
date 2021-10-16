"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8323,6684],{

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

/***/ 4998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Chip_Chip; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(67055);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js











var styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: (0,colorManipulator/* alpha */.Fq)(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react.forwardRef(function Chip(props, ref) {
  var avatarProp = props.avatar,
      classes = props.classes,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? ButtonBase/* default */.Z : 'div');
  var moreProps = Component === ButtonBase/* default */.Z ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = (0,clsx_m["default"])(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat((0,capitalize/* default */.Z)(color))] : classes["deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m["default"])(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react.createElement(Cancel, {
      className: (0,clsx_m["default"])(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m["default"])(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m["default"])(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  if (false) {}

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    role: clickable || onDelete ? 'button' : undefined,
    className: (0,clsx_m["default"])(classes.root, className, color !== 'default' && [classes["color".concat((0,capitalize/* default */.Z)(color))], clickable && classes["clickableColor".concat((0,capitalize/* default */.Z)(color))], onDelete && classes["deletableColor".concat((0,capitalize/* default */.Z)(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m["default"])(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? 0 : void 0;
/* harmony default export */ var Chip_Chip = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiChip'
})(Chip));

/***/ }),

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

/***/ 8498:
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
  d: "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"
}), 'Memory');

exports.Z = _default;

/***/ }),

/***/ 92681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ IDChip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52995);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4998);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23729);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43226);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84377);
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60102);
 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function IDChip(props) {
  var {
    id,
    className,
    filter
  } = props;
  var {
    filter: packetFilter,
    setFilter: setPacketFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  var {
    setDrawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);
  var ids = typeof id === "string" ? id : "0x" + (id !== undefined ? id.toString(16) : "???");
  var filtered = packetFilter && packetFilter.indexOf(filter) > -1;

  var handleFilterClick = () => {
    var _packetFilter$replace;

    if (filtered) setPacketFilter(packetFilter === null || packetFilter === void 0 ? void 0 : (_packetFilter$replace = packetFilter.replace(filter, "")) === null || _packetFilter$replace === void 0 ? void 0 : _packetFilter$replace.trim());else setPacketFilter((packetFilter === null || packetFilter === void 0 ? void 0 : packetFilter.trim()) + " " + filter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .DrawerType.Packets */ .jw.Packets);
  };

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null);
  var title = filtered ? "remove filter " + filter : "add filter " + filter;
  if (filter) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: filtered ? "remove filter " + filter : "add filter " + filter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    className: className,
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      "aria-label": title,
      onClick: handleFilterClick
    }, icon),
    label: ids
  })));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    "aria-label": title,
    className: className,
    size: "small",
    icon: icon,
    title: "identifier " + ids,
    label: ids
  });
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
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46526);
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

/***/ 49856:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export StatusAlert */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95453);


function StatusAlert(props) {
  var {
    specification
  } = props;

  switch (specification === null || specification === void 0 ? void 0 : specification.status) {
    case "deprecated":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        severity: "error"
      }, "Deprecated");

    case "experimental":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        severity: "info"
      }, "Experimental");

    default:
      return null;
  }
}
var ServiceSpecificationStatusAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(StatusAlert);
/* harmony default export */ __webpack_exports__["Z"] = (ServiceSpecificationStatusAlert);

/***/ }),

/***/ 88460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ChipList; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));
function ChipList(props) {
  var {
    children
  } = props;
  var classes = useStyles();
  if (!children) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classes.root
  }, children);
}

/***/ }),

/***/ 98784:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Markdown; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18581);

var _excluded = ["source"];


var ReactMarkdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 1616).then(__webpack_require__.bind(__webpack_require__, 91616)));
function Markdown(props) {
  var {
    source
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdown, others, source));
}

/***/ }),

/***/ 34276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Snippet; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9433);



function Snippet(props) {
  var {
    value,
    mode,
    download,
    url,
    caption,
    actions
  } = props;
  var v = typeof value === "function" ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    downloadName: download,
    downloadText: download && v,
    actions: actions,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    variant: "caption"
  }, caption));
}

/***/ }),

/***/ 77110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(45656);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationCard.tsx
var ServiceSpecificationCard = __webpack_require__(21623);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 12 modules
var Box = __webpack_require__(91448);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
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
;// CONCATENATED MODULE: ./src/components/specification/DeviceSpecificationSource.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports






function DeviceSpecificationSource(props) {
  var {
    deviceSpecification,
    showSpecification,
    showJSON
  } = props;
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(0);
  var spec = deviceSpecification;

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
  }, [showSpecification && "Specification", showJSON && "JSON"].filter(n => !!n).map(n => /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    key: n,
    label: n
  }))), showSpecification && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "spec",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(DeviceSpecification, {
    device: spec
  })), showJSON && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "convjson",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    value: JSON.stringify(spec, null, 2),
    mode: "json"
  })));
}
// EXTERNAL MODULE: ./src/components/firmware/FirmwareCard.tsx
var FirmwareCard = __webpack_require__(54272);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(81546);
// EXTERNAL MODULE: ./src/components/ui/DownloadFirmwareButton.tsx
var DownloadFirmwareButton = __webpack_require__(50192);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Memory.js
var Memory = __webpack_require__(8498);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(88460);
// EXTERNAL MODULE: ./src/components/semver.ts
var semver = __webpack_require__(14914);
// EXTERNAL MODULE: ./src/components/specification/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__(46684);
// EXTERNAL MODULE: ./src/components/ui/StructuredData.tsx
var StructuredData = __webpack_require__(97357);
;// CONCATENATED MODULE: ./src/components/specification/DeviceSpecification.tsx

















function DeviceStructuredData(props) {
  var {
    device
  } = props;
  var payload = (0,react.useMemo)(() => {
    var {
      name,
      description,
      company,
      status
    } = device;
    var availability = {
      deprecated: "Discontinued",
      experimental: "LimitedAvailability"
    }[status]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    var r = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name,
      image: [(0,useDeviceImage/* default */.Z)(device, "preview"), (0,useDeviceImage/* default */.Z)(device, "catalog"), (0,useDeviceImage/* default */.Z)(device, "full")],
      description,
      sku: device.id,
      brand: {
        "@type": "Brand",
        name: company
      }
    };
    if (availability) r.availability = availability;
    return r;
  }, [device]);
  return /*#__PURE__*/react.createElement(StructuredData/* default */.Z, {
    payload: payload
  });
}

function DeviceSpecification(props) {
  var _deviceSpecifications;

  var {
    device,
    showSource
  } = props;
  var {
    name,
    description,
    company,
    productIdentifiers,
    repo,
    firmwares,
    version,
    designIdentifier
  } = device;
  var {
    services
  } = device;
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var imageUrl = (0,useDeviceImage/* default */.Z)(device, "catalog");
  var others = designIdentifier && ((_deviceSpecifications = (0,spec/* deviceSpecifications */.qx)().filter(spec => spec.id !== device.id && spec.designIdentifier === designIdentifier && spec.version !== undefined)) === null || _deviceSpecifications === void 0 ? void 0 : _deviceSpecifications.sort((l, r) => (0,semver/* semverCmp */.k)(l.version, r.version)));
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DeviceStructuredData, {
    device: device
  }), /*#__PURE__*/react.createElement("h2", {
    key: "title"
  }, name, !!version && " v" + version), /*#__PURE__*/react.createElement(ChipList/* default */.Z, null, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    size: "small",
    label: company
  }), designIdentifier && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    "aria-label": "design identifier: " + designIdentifier,
    icon: /*#__PURE__*/react.createElement(Memory/* default */.Z, null),
    size: "small",
    label: designIdentifier
  }), productIdentifiers === null || productIdentifiers === void 0 ? void 0 : productIdentifiers.map(identifier => /*#__PURE__*/react.createElement(IDChip/* default */.Z, {
    key: identifier,
    id: identifier,
    filter: "pid:0x" + identifier.toString(16)
  }))), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mt: 1
  }, /*#__PURE__*/react.createElement("img", {
    alt: "device " + name,
    src: imageUrl,
    loading: "lazy"
  })), description && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: description
  }), repo && /*#__PURE__*/react.createElement(FirmwareCard/* default */.Z, {
    slug: repo
  }), !!firmwares && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Firmwares"), /*#__PURE__*/react.createElement("p", null, "Drag and drop the files below to your device drive. You might have to press the bootloader button once to see this drive."), /*#__PURE__*/react.createElement("ul", null, firmwares.map(_ref => {
    var {
      name,
      url
    } = _ref;
    return /*#__PURE__*/react.createElement("li", {
      key: url
    }, /*#__PURE__*/react.createElement(DownloadFirmwareButton/* default */.Z, {
      url: url,
      name: name,
      variant: "outlined"
    }, name));
  }))), !!(services !== null && services !== void 0 && services.length) && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Services"), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, services.map(sc => (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(sc)).map(spec => /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    item: true,
    key: spec.shortId
  }, gridBreakpoints), /*#__PURE__*/react.createElement(ServiceSpecificationCard/* default */.Z, {
    specification: spec
  }))))), !!(others !== null && others !== void 0 && others.length) && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Other revisions"), /*#__PURE__*/react.createElement(DeviceSpecificationList["default"], {
    devices: others
  })), showSource && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Specification"), /*#__PURE__*/react.createElement(DeviceSpecificationSource, {
    deviceSpecification: device,
    showJSON: true
  })));
}
;// CONCATENATED MODULE: ./src/templates/device.tsx



function Page(props) {
  var id = props.pageContext.node.id;
  var specification = (0,spec/* deviceSpecificationFromIdentifier */.Io)(id);
  return /*#__PURE__*/react.createElement(DeviceSpecification, {
    device: specification,
    showSource: true
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-device-tsx-80a7b926123530254f04.js.map