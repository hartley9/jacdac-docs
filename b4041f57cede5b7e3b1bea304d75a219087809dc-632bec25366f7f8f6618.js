"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2954],{

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

/***/ 33292:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DeviceCardHeader; }
});

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(5234);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/devices/DeviceActions.tsx
var DeviceActions = __webpack_require__(89001);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts + 1 modules
var useDeviceSpecification = __webpack_require__(34246);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(81546);
// EXTERNAL MODULE: ./src/components/ui/CardMediaWithSkeleton.tsx
var CardMediaWithSkeleton = __webpack_require__(141);
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardMedia.tsx




function DeviceCardMedia(props) {
  var {
    device
  } = props;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  var imageUrl = (0,useDeviceImage/* default */.Z)(specification, "preview");
  return /*#__PURE__*/react.createElement(CardMediaWithSkeleton/* default */.Z, {
    image: imageUrl,
    title: specification === null || specification === void 0 ? void 0 : specification.name
  });
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 5 modules
var DeviceAvatar = __webpack_require__(64178);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/components/devices/DeviceCardHeader.tsx

 // tslint:disable-next-line: no-submodule-imports












function DeviceFirmwareVersionChip(props) {
  var _specification$firmwa, _specification$firmwa2;

  var {
    device
  } = props;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  var productIdentifier = (0,useChange/* default */.Z)(device, _ => _ === null || _ === void 0 ? void 0 : _.productIdentifier);
  var firmwareVersion = (0,useChange/* default */.Z)(device, _ => _ === null || _ === void 0 ? void 0 : _.firmwareVersion);
  if (!firmwareVersion) return null;
  var firmwareName = !!productIdentifier && (specification === null || specification === void 0 ? void 0 : (_specification$firmwa = specification.firmwares) === null || _specification$firmwa === void 0 ? void 0 : (_specification$firmwa2 = _specification$firmwa.find(fw => fw.productIdentifier === productIdentifier)) === null || _specification$firmwa2 === void 0 ? void 0 : _specification$firmwa2.name);
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    size: "small",
    label: [firmwareName, firmwareVersion].filter(f => !!f).join(" ")
  });
}

function DeviceTemperatureChip(props) {
  var {
    device
  } = props;
  var tempRegister = (0,useChange/* default */.Z)(device, _ => {
    var _$service;

    return _ === null || _ === void 0 ? void 0 : (_$service = _.service(0)) === null || _$service === void 0 ? void 0 : _$service.register(constants/* ControlReg.McuTemperature */.toU.McuTemperature);
  });
  var [temperature] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(tempRegister);
  if (isNaN(temperature)) return null;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    size: "small",
    label: temperature + "\xB0"
  });
}

function DeviceCardHeader(props) {
  var {
    device,
    showFirmware,
    showTemperature,
    showMedia,
    showDeviceId,
    showAvatar,
    showSettings,
    showReset
  } = props;
  var specification = (0,useDeviceSpecification/* default */.Z)(device);
  return /*#__PURE__*/react.createElement(react.Fragment, null, showMedia && /*#__PURE__*/react.createElement(DeviceCardMedia, {
    device: device
  }), /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    avatar: showAvatar && /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: device
    }),
    action: /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
      device: device,
      showReset: showReset,
      showSettings: showSettings,
      hideIdentity: showAvatar
    }),
    title: /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      color: "textPrimary",
      underline: "hover",
      to: "/devices/" + ((0,spec/* identifierToUrlPath */.uM)(specification === null || specification === void 0 ? void 0 : specification.id) || "")
    }, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
      device: device
    })),
    subheader: /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      container: true,
      spacing: 1
    }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      item: true
    }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption",
      gutterBottom: true
    }, [specification === null || specification === void 0 ? void 0 : specification.name, showDeviceId && device.deviceId].filter(s => !!s).join(", "))), showFirmware && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      item: true
    }, /*#__PURE__*/react.createElement(DeviceFirmwareVersionChip, {
      device: device
    })), showTemperature && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
      item: true
    }, /*#__PURE__*/react.createElement(DeviceTemperatureChip, {
      device: device
    })))
  }));
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

/***/ })

}]);
//# sourceMappingURL=b4041f57cede5b7e3b1bea304d75a219087809dc-632bec25366f7f8f6618.js.map