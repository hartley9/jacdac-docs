"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8044],{

/***/ 63015:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

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
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(49408);
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
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(48416);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(62194);
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

/***/ 83808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yA": function() { return /* binding */ compileRequest; },
/* harmony export */   "_S": function() { return /* binding */ trainRequest; },
/* harmony export */   "iE": function() { return /* binding */ predictRequest; }
/* harmony export */ });
/* unused harmony export postModelRequest */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15861);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60669);


function postModelRequest(_x) {
  return _postModelRequest.apply(this, arguments);
}

function _postModelRequest() {
  _postModelRequest = _asyncToGenerator(function* (message) {
    var worker = workerProxy("tf");
    var res = yield worker.postMessage(message);
    return res === null || res === void 0 ? void 0 : res.data;
  });
  return _postModelRequest.apply(this, arguments);
}

function compileRequest(_x2) {
  return _compileRequest.apply(this, arguments);
}

function _compileRequest() {
  _compileRequest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* (message) {
    if (!message.data.model || !message.data.modelBlockJSON) {
      console.error("Missing piece of message data for compiling ", message.data);
      return undefined;
    }

    var worker = (0,_proxy__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _compileRequest.apply(this, arguments);
}

function trainRequest(_x3) {
  return _trainRequest.apply(this, arguments);
}

function _trainRequest() {
  _trainRequest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* (message) {
    if (!message.data.model || !message.data.trainingParams || !message.data.xData || !message.data.yData) {
      console.error("Missing piece of message data for training ", message.data);
      return undefined;
    }

    var worker = (0,_proxy__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _trainRequest.apply(this, arguments);
}

function predictRequest(_x4) {
  return _predictRequest.apply(this, arguments);
}

function _predictRequest() {
  _predictRequest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function* (message) {
    if (!message.data.model || !message.data.zData) {
      console.error("Missing piece of message data for predicting ", message.data);
      return undefined;
    }

    var worker = (0,_proxy__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _predictRequest.apply(this, arguments);
}

/***/ }),

/***/ 99941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cO": function() { return /* binding */ arraysEqual; },
/* harmony export */   "dP": function() { return /* binding */ validDataSetJSON; },
/* harmony export */   "ZP": function() { return /* binding */ MBDataSet; }
/* harmony export */ });
/* unused harmony export DataSet */
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43144);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94578);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45484);
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64616);





var DataSet = function DataSet(inputTypes, recordings, registerIds, totalRecordings) {
  this.inputTypes = inputTypes;
  this.recordings = recordings;
  this.registerIds = registerIds;
  this.totalRecordings = totalRecordings;
};
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
function validDataSetJSON(blockJSON) {
  var _firstLayer$children;

  var warnings = {};
  var classNames = []; // don't check empty block JSON

  if (!blockJSON) return undefined; // 1. make sure there is at least one recording

  var firstLayer = blockJSON.inputs.filter(input => input.name == "LAYER_INPUTS")[0].child;

  if (!firstLayer) {
    warnings[blockJSON.id] = "Valid datasets should contain recording blocks";
    return warnings;
  } // the first recording block determines the input type


  var inputTypes = firstLayer.inputs[0].fields.expand_button.value.inputTypes;
  classNames.push(firstLayer.inputs[0].fields.class_name.value);
  (_firstLayer$children = firstLayer.children) === null || _firstLayer$children === void 0 ? void 0 : _firstLayer$children.forEach(childBlock => {
    // 2. make sure subsequent recordings have the same input type as the first recording
    var recordingInputTypes = childBlock.inputs[0].fields.expand_button.value.inputTypes;

    if (!arraysEqual(recordingInputTypes, inputTypes)) {
      warnings[childBlock.id] = "Recording does not match dataset input type";
    }

    var className = childBlock.inputs[0].fields.class_name.value;
    if (classNames.indexOf(className) < 0) classNames.push(className);
  }); // 3. make sure there are at least two classes in the dataset

  if (classNames.length < 2) warnings[blockJSON.id] = "Valid datasets should contain at least two different class labels";
  return warnings;
}

var MBDataSet = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(MBDataSet, _JDEventSource);

  MBDataSet.createFromFile = function createFromFile(name, datasetJSONObj) {
    var set = new MBDataSet(name);
    var {
      recordings,
      registerIds
    } = datasetJSONObj;
    set.addRecordingsFromFile(recordings, registerIds); // add recordings and update total recordings

    return set;
  } // maintain computed number of recordings and input data types to avoid recomputation
  ;

  function MBDataSet(name, labels, recordings, inputTypes) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.name = name;
    _this.labels = labels;
    _this.recordings = recordings;
    _this.inputTypes = inputTypes;
    _this.name = name;
    _this.labels = labels || [];
    _this.recordings = recordings || {};
    _this.totalRecordings = _this.countTotalRecordings();
    _this.inputTypes = inputTypes || [];
    return _this;
  }

  var _proto = MBDataSet.prototype;

  _proto.getRecordingsWithLabel = function getRecordingsWithLabel(label) {
    return this.recordings[label];
  };

  _proto.addRecording = function addRecording(recording, label, registerIds) {
    if (this.totalRecordings == 0) {
      // the first recording added to the dataset determines its parameters
      this.labels.push(label);
      this.recordings[label] = [recording];
      this.inputTypes = recording.headers;
      this.interval = recording.interval;
      this.registerIds = registerIds;
      this.totalRecordings += 1;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
    } else if (arraysEqual(recording.headers, this.inputTypes)) {
      // Check if label is already in dataset
      if (this.labels.indexOf(label) < 0) {
        // If not, add the new label to the dataset
        this.labels.push(label);
        this.recordings[label] = [recording];
      } else {
        this.recordings[label].push(recording);
      }

      this.totalRecordings += 1;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
    } else {
      console.error("Cannot add data of type " + recording.headers + " to dataset with types " + this.inputTypes);
    }
  };

  _proto.addRecordingsFromFile = function addRecordingsFromFile(recordings, registerIds) {
    //totalRecordings
    Object.keys(recordings).forEach(label => {
      recordings[label].forEach(recording => {
        var set = _FieldDataSet__WEBPACK_IMPORTED_MODULE_2__/* ["default"].createFromFile */ .ZP.createFromFile(recording);
        this.addRecording(set, label, registerIds);
      });
    });
  };

  _proto.removeRecording = function removeRecording(recording) {
    var recordingLabel = recording.name.slice(0, recording.name.indexOf("$"));
    var i = this.recordings[recordingLabel].indexOf(recording);

    if (i > -1) {
      this.recordings[recordingLabel].splice(i, 1); // If this emptied out a label, then remove that label

      if (this.recordings[recordingLabel].length == 0) {
        var j = this.labels.indexOf(recordingLabel);
        this.labels.splice(j, 1);
      }

      this.totalRecordings -= 1;
    }
  };

  _proto.countTotalRecordings = function countTotalRecordings() {
    var total = 0;
    this.labels.forEach(label => {
      this.recordings[label].forEach(() => {
        total += 1;
      });
    });
    return total;
  };

  _proto.toCSV = function toCSV() {
    var recordingCountHeader = "Number of recordings," + this.totalRecordings;
    var recordingIntervalHeader = "Interval," + this.interval;
    var recordingData = [];
    this.labels.forEach(label => {
      this.recordings[label].forEach(recording => {
        recordingData.push("Recording metadata," + recording.name + "," + recording.rows.length + "," + label);
        recordingData.push(recording.toCSV());
      });
    });
    var recordData = recordingData.join("\n");
    var csv = [recordingCountHeader, recordingIntervalHeader, recordData];
    return csv.join("\n");
  };

  _proto.toJSON = function toJSON() {
    var datasetObj = {
      recordings: this.recordings,
      reigsterIds: this.registerIds,
      name: this.name
    };
    return datasetObj;
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(MBDataSet, [{
    key: "labelOptions",
    get: function get() {
      if (this.labels.length == 0) return ["class1"];
      return this.labels;
    }
  }, {
    key: "summary",
    get: function get() {
      if (this.labels.length <= 0) return ["Classes: none"];
      var modelInfo = [];
      var classes = [];
      this.labels.forEach(label => {
        classes.push(label + " [" + this.recordings[label].length + " sample(s)]");
      });
      modelInfo.push("Classes: " + classes.join(", "));
      return modelInfo;
    }
  }]);

  return MBDataSet;
}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);



/***/ }),

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91570);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94548);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label", "labelPlacement", "labelStyle"];


function SwitchWithLabel(props) {
  var {
    label,
    labelPlacement,
    labelStyle
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, rest),
    label: label,
    style: labelStyle,
    labelPlacement: labelPlacement
  });
}

/***/ })

}]);
//# sourceMappingURL=73f4d854ede10a3b91bb00b3be5912749eb02c9d-548581e2db3f0f2a69a0.js.map