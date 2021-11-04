"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8323,7262],{

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

/***/ 80191:
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
  d: "M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"
}), 'Memory');

exports.Z = _default;

/***/ }),

/***/ 79675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardActions_CardActions; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/cardActionsClasses.js

function getCardActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardActions', slot);
}
var cardActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardActions', ['root', 'spacing']);
/* harmony default export */ var CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/CardActions.js


var _excluded = ["disableSpacing", "className"];








var useUtilityClasses = ownerState => {
  var {
    classes,
    disableSpacing
  } = ownerState;
  var slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardActionsUtilityClass, classes);
};

var CardActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(_ref => {
  var {
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    alignItems: 'center',
    padding: 8
  }, !ownerState.disableSpacing && {
    '& > :not(:first-of-type)': {
      marginLeft: 8
    }
  });
});
var CardActions = /*#__PURE__*/react.forwardRef(function CardActions(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardActions'
  });

  var {
    disableSpacing = false,
    className
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardActions_CardActions = (CardActions);

/***/ }),

/***/ 75985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Chip_Chip; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(67663);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(25833);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ var Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(65973);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(21919);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Chip/chipClasses.js

function getChipUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiChip', slot);
}
var chipClasses = (0,generateUtilityClasses/* default */.Z)('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorPrimary', 'colorSecondary', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'focusVisible']);
/* harmony default export */ var Chip_chipClasses = (chipClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Chip/Chip.js


var _excluded = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"];















var useUtilityClasses = ownerState => {
  var {
    classes,
    disabled,
    size,
    color,
    onDelete,
    clickable,
    variant
  } = ownerState;
  var slots = {
    root: ['root', variant, disabled && 'disabled', "size".concat((0,capitalize/* default */.Z)(size)), "color".concat((0,capitalize/* default */.Z)(color)), clickable && 'clickable', clickable && "clickableColor".concat((0,capitalize/* default */.Z)(color)), onDelete && 'deletable', onDelete && "deletableColor".concat((0,capitalize/* default */.Z)(color)), "".concat(variant).concat((0,capitalize/* default */.Z)(color))],
    label: ['label', "label".concat((0,capitalize/* default */.Z)(size))],
    avatar: ['avatar', "avatar".concat((0,capitalize/* default */.Z)(size)), "avatarColor".concat((0,capitalize/* default */.Z)(color))],
    icon: ['icon', "icon".concat((0,capitalize/* default */.Z)(size)), "iconColor".concat((0,capitalize/* default */.Z)(color))],
    deleteIcon: ['deleteIcon', "deleteIcon".concat((0,capitalize/* default */.Z)(size)), "deleteIconColor".concat((0,capitalize/* default */.Z)(color)), "deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))]
  };
  return (0,composeClasses/* default */.Z)(slots, getChipUtilityClass, classes);
};

var ChipRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiChip',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    var {
      color,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      ["& .".concat(Chip_chipClasses.avatar)]: styles.avatar
    }, {
      ["& .".concat(Chip_chipClasses.avatar)]: styles["avatar".concat((0,capitalize/* default */.Z)(size))]
    }, {
      ["& .".concat(Chip_chipClasses.avatar)]: styles["avatarColor".concat((0,capitalize/* default */.Z)(color))]
    }, {
      ["& .".concat(Chip_chipClasses.icon)]: styles.icon
    }, {
      ["& .".concat(Chip_chipClasses.icon)]: styles["icon".concat((0,capitalize/* default */.Z)(size))]
    }, {
      ["& .".concat(Chip_chipClasses.icon)]: styles["iconColor".concat((0,capitalize/* default */.Z)(color))]
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles.deleteIcon
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.Z)(size))]
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIconColor".concat((0,capitalize/* default */.Z)(color))]
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))]
    }, styles.root, styles["size".concat((0,capitalize/* default */.Z)(size))], styles["color".concat((0,capitalize/* default */.Z)(color))], clickable && styles.clickable, clickable && color !== 'default' && styles["clickableColor".concat((0,capitalize/* default */.Z)(color), ")")], onDelete && styles.deletable, onDelete && color !== 'default' && styles["deletableColor".concat((0,capitalize/* default */.Z)(color))], styles[variant], variant === 'outlined' && styles["outlined".concat((0,capitalize/* default */.Z)(color))]];
  }
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  var deleteIconColor = (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26);
  return (0,esm_extends/* default */.Z)({
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    // label will inherit this from root, then `clickable` class overrides this for both
    cursor: 'default',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: 'none',
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    ["&.".concat(Chip_chipClasses.disabled)]: {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    },
    ["& .".concat(Chip_chipClasses.avatar)]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(12)
    },
    ["& .".concat(Chip_chipClasses.avatarColorPrimary)]: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.dark
    },
    ["& .".concat(Chip_chipClasses.avatarColorSecondary)]: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.dark
    },
    ["& .".concat(Chip_chipClasses.avatarSmall)]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    ["& .".concat(Chip_chipClasses.icon)]: (0,esm_extends/* default */.Z)({
      color: theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    }, ownerState.size === 'small' && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, ownerState.color !== 'default' && {
      color: 'inherit'
    }),
    ["& .".concat(Chip_chipClasses.deleteIcon)]: (0,esm_extends/* default */.Z)({
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      fontSize: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: (0,colorManipulator/* alpha */.Fq)(deleteIconColor, 0.4)
      }
    }, ownerState.size === 'small' && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, ownerState.color !== 'default' && {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette[ownerState.color].contrastText
      }
    })
  }, ownerState.size === 'small' && {
    height: 24
  }, ownerState.color !== 'default' && {
    backgroundColor: theme.palette[ownerState.color].main,
    color: theme.palette[ownerState.color].contrastText
  }, ownerState.onDelete && {
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  }, ownerState.onDelete && ownerState.color !== 'default' && {
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: theme.palette[ownerState.color].dark
    }
  });
}, _ref2 => {
  var {
    theme,
    ownerState
  } = _ref2;
  return (0,esm_extends/* default */.Z)({}, ownerState.clickable && {
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    },
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    '&:active': {
      boxShadow: theme.shadows[1]
    }
  }, ownerState.clickable && ownerState.color !== 'default' && {
    ["&:hover, &.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: theme.palette[ownerState.color].dark
    }
  });
}, _ref3 => {
  var {
    theme,
    ownerState
  } = _ref3;
  return (0,esm_extends/* default */.Z)({}, ownerState.variant === 'outlined' && {
    backgroundColor: 'transparent',
    border: "1px solid ".concat(theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]),
    ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
      backgroundColor: theme.palette.action.hover
    },
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: theme.palette.action.focus
    },
    ["& .".concat(Chip_chipClasses.avatar)]: {
      marginLeft: 4
    },
    ["& .".concat(Chip_chipClasses.avatarSmall)]: {
      marginLeft: 2
    },
    ["& .".concat(Chip_chipClasses.icon)]: {
      marginLeft: 4
    },
    ["& .".concat(Chip_chipClasses.iconSmall)]: {
      marginLeft: 2
    },
    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
      marginRight: 5
    },
    ["& .".concat(Chip_chipClasses.deleteIconSmall)]: {
      marginRight: 3
    }
  }, ownerState.variant === 'outlined' && ownerState.color !== 'default' && {
    color: theme.palette[ownerState.color].main,
    border: "1px solid ".concat((0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.7)),
    ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
      backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
    },
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
    },
    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, 0.7),
      '&:hover, &:active': {
        color: theme.palette[ownerState.color].main
      }
    }
  });
});
var ChipLabel = (0,styled/* default */.ZP)('span', {
  name: 'MuiChip',
  slot: 'Label',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    var {
      size
    } = ownerState;
    return [styles.label, styles["label".concat((0,capitalize/* default */.Z)(size))]];
  }
})(_ref4 => {
  var {
    ownerState
  } = _ref4;
  return (0,esm_extends/* default */.Z)({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap'
  }, ownerState.size === 'small' && {
    paddingLeft: 8,
    paddingRight: 8
  });
});

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react.forwardRef(function Chip(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiChip'
  });

  var {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = 'default',
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = 'medium',
    variant = 'filled'
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var chipRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);

  var handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = event => {
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
  var component = clickable || onDelete ? ButtonBase/* default */.Z : ComponentProp || 'div';

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    disabled,
    size,
    color,
    onDelete: !!onDelete,
    clickable,
    variant
  });

  var classes = useUtilityClasses(ownerState);
  var moreProps = component === ButtonBase/* default */.Z ? (0,esm_extends/* default */.Z)({
    component: ComponentProp || 'div',
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: true
  }) : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = (0,clsx_m["default"])(color !== 'default' && (variant === 'outlined' ? classes["deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))] : classes["deleteIconColor".concat((0,capitalize/* default */.Z)(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m["default"])(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Cancel, {
      className: (0,clsx_m["default"])(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m["default"])(classes.avatar, avatarProp.props.className)
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m["default"])(classes.icon, iconProp.props.className)
    });
  }

  if (false) {}

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ChipRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m["default"])(classes.root, className),
    disabled: clickable && disabled ? true : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    ownerState: ownerState
  }, moreProps, other, {
    children: [avatar || icon, /*#__PURE__*/(0,jsx_runtime.jsx)(ChipLabel, {
      className: (0,clsx_m["default"])(classes.label),
      ownerState: ownerState,
      children: label
    }), deleteIcon]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Chip_Chip = (Chip);

/***/ }),

/***/ 92681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ IDChip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21860);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75985);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22647);
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

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Fingerprint__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null);
  var title = filtered ? "remove filter " + filter : "add filter " + filter;
  if (filter) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: filtered ? "remove filter " + filter : "add filter " + filter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    className: className,
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      "aria-label": title,
      onClick: handleFilterClick,
      size: "large"
    }, icon),
    label: ids
  })));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    "aria-label": title,
    className: className,
    size: "small",
    icon: icon,
    title: "identifier " + ids,
    label: ids
  });
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

/***/ 21623:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceSpecificationCard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75985);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79675);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26799);
/* harmony import */ var _IDChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92681);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36176);
/* harmony import */ var _ui_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98784);
/* harmony import */ var _ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49856);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50713);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    title: ((_spec3 = spec) === null || _spec3 === void 0 ? void 0 : _spec3.name) || "???",
    subheader: showServiceClass && srv && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IDChip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      id: sc,
      filter: "srv:" + srv
    }),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hostDefinition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      size: "small",
      onClick: handleSimulatorClick,
      avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KindIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        kind: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_9__/* .VIRTUAL_DEVICE_NODE_NAME */ .UX7
      }),
      "aria-label": "start simulator and open dashboard",
      label: "simulator"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, ((_spec4 = spec) === null || _spec4 === void 0 ? void 0 : _spec4.notes["short"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    variant: "body2",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Markdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    source: ((_spec5 = spec) === null || _spec5 === void 0 ? void 0 : _spec5.notes["short"].split(".", 1)[0]) + "."
  })), showReleaseStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ServiceSpecificationStatusAlert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    specification: spec
  })), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98348);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


var PREFIX = "ChipList";
var classes = {
  root: PREFIX + "-root"
};
var Root = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)("span")(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["&." + classes.root]: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    }
  };
});
function ChipList(props) {
  var {
    children
  } = props;
  if (!children) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, {
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


var ReactMarkdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 362).then(__webpack_require__.bind(__webpack_require__, 20362)));
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49308);
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
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
// EXTERNAL MODULE: ./src/components/devices/useDeviceCatalog.ts
var useDeviceCatalog = __webpack_require__(97685);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationCard.tsx
var ServiceSpecificationCard = __webpack_require__(21623);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(39211);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
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
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Memory.js
var Memory = __webpack_require__(80191);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(88460);
// EXTERNAL MODULE: ./src/components/semver.ts
var semver = __webpack_require__(14914);
// EXTERNAL MODULE: ./src/components/specification/DeviceSpecificationList.tsx + 7 modules
var DeviceSpecificationList = __webpack_require__(87262);
// EXTERNAL MODULE: ./src/components/ui/StructuredData.tsx
var StructuredData = __webpack_require__(97357);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(74450);
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
  var _specifications$filte;

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
  var specifications = (0,useDeviceSpecifications/* default */.Z)();
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var imageUrl = (0,useDeviceImage/* default */.Z)(device, "catalog");
  var others = designIdentifier && ((_specifications$filte = specifications.filter(spec => spec.id !== device.id && spec.designIdentifier === designIdentifier && spec.version !== undefined)) === null || _specifications$filte === void 0 ? void 0 : _specifications$filte.sort((l, r) => (0,semver/* semverCmp */.k)(l.version, r.version)));
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
  }))), !!(services !== null && services !== void 0 && services.length) && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "Services"), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 2
  }, services.map(sc => (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(sc)).map(spec => /*#__PURE__*/react.createElement(Grid/* default */.ZP, Object.assign({
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
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/templates/device.tsx




function Page(props) {
  var deviceCatalog = (0,useDeviceCatalog/* default */.Z)();
  var id = props.pageContext.node.id;
  var specification = (0,useChange/* default */.Z)(deviceCatalog, _ => _.specificationFromIdentifier(id), [id]);
  return /*#__PURE__*/react.createElement(DeviceSpecification, {
    device: specification,
    showSource: true
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-device-tsx-af784fa350cb84ee8aa1.js.map