"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[141],{

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

/***/ 60141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardWifi; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38030);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80791);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4998);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60650);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88237);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79885);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50092);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);
/* harmony import */ var _material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89713);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64973);
/* harmony import */ var _hooks_useInterval__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63944);
/* harmony import */ var _hooks_useEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59626);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71815);

















function ConnectAp(props) {
  var {
    service,
    info
  } = props;
  var {
    ssid,
    flags,
    rssi
  } = info;
  var {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var selectId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var passwordId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();

  var handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  var handleAddNetwork = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* () {
      yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiCmd.AddNetwork */ .kBD.AddNetwork, [ssid, password || ""], true);
    });

    return function handleAddNetwork() {
      return _ref.apply(this, arguments);
    };
  }();

  var toggleSelected = () => setSelected(!selected);

  var hasPassword = !!(flags & _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiAPFlags.HasPassword */ .GHo.HasPassword);
  var connectError = !password && !hasPassword ? "password required" : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    id: selectId,
    button: true,
    onClick: toggleSelected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    primary: ssid,
    secondary: "rssi: " + rssi
  }), selected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    id: passwordId,
    value: password,
    label: "Password",
    fullWidth: true,
    type: "password",
    required: !hasPassword,
    helperText: connectError,
    onChange: handlePasswordChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    variant: "contained",
    color: "primary",
    disabled: !!connectError,
    onClick: handleAddNetwork
  }, "Connect")));
}

function ConnectDialog(props) {
  var {
    open,
    setOpen,
    service
  } = props;
  var {
    0: aps,
    1: setAps
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  var handleClose = () => setOpen(false);

  var scan = () => service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiCmd.Scan */ .kBD.Scan);

  var updateScanResults = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* (mounted) {
      var res = yield service.receiveWithInPipe(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiCmd.LastScanResults */ .kBD.LastScanResults, "u32 x[4] i8 u8 b[6] s[33]");
      if (!mounted()) return;
      var newAps = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .arrayConcatMany */ .ue)(res).map(_ref3 => {
        var [flags, rssi, channel, bssid, ssid] = _ref3;
        return {
          flags,
          rssi,
          channel,
          bssid,
          ssid
        };
      }).sort((l, r) => l.rssi - r.rssi);
      setAps(newAps || []);
    });

    return function updateScanResults(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // keep scanning


  (0,_hooks_useInterval__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(open, scan, 30000, [service]); // refresh on scan update

  var scanCompleteEvent = (0,_hooks_useEvent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(service, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiEvent.ScanComplete */ .Xoc.ScanComplete);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => scanCompleteEvent.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .EVENT */ .Ks0, () => updateScanResults), [scanCompleteEvent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
    open: open,
    fullWidth: true,
    maxWidth: "lg",
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, null, "Connect to Wifi", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    trackName: "dashboard.wifi.scan",
    onClick: scan,
    title: "scan",
    autoRun: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Refresh__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, null, aps.map(ap => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectAp, {
    key: ap.ssid,
    service: service,
    info: ap
  })))));
}

function DashboardWifi(props) {
  var {
    service
  } = props;
  var {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var color = "primary";
  var {
    textPrimary
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(color);
  var enabledRegister = service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiReg.Enabled */ .eFM.Enabled);
  var enabled = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterBoolValue */ .I8)(enabledRegister, props);
  var connectedRegister = service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiReg.Connected */ .eFM.Connected);
  var connected = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterBoolValue */ .I8)(connectedRegister, props);
  var ssidRegister = service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiReg.Ssid */ .eFM.Ssid);
  var [ssid] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(ssidRegister);
  var ipAddressRegister = service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiReg.IpAddress */ .eFM.IpAddress);
  var [ip] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(ipAddressRegister);
  var macRegister = service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiReg.Eui48 */ .eFM.Eui48);
  var [mac] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(macRegister);

  var handleEnabledChecked = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(function* (ev, checked) {
      if (checked) {
        if (!enabled) yield enabledRegister.sendSetBoolAsync(true);
        yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_6__/* .WifiCmd.Reconnect */ .kBD.Reconnect);
      } else {
        // shut off
        yield enabledRegister.sendSetBoolAsync(false);
      }
    });

    return function handleEnabledChecked(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleConfigure = () => setOpen(true);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
    component: "span",
    variant: "subtitle2"
  }, "Wifi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    checked: enabled && connected,
    onChange: handleEnabledChecked,
    disabled: enabled === undefined,
    label: connected ? ssid || "connected" : enabled ? "idle" : "..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: "Configure wifi",
    onClick: handleConfigure
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, null))), ip || mac && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, ip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
    label: (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .toHex */ .NC)(ip)
  }), mac && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
    label: "MAC: " + (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .toHex */ .NC)(mac)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectDialog, {
    open: open,
    setOpen: setOpen,
    service: service
  }));
}

/***/ }),

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label"];


function SwitchWithLabel(props) {
  var {
    label
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, rest),
    label: label
  });
}

/***/ })

}]);
//# sourceMappingURL=141-07463ac6663d596729ff.js.map