"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9191],{

/***/ 25935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Tab_Tab; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(21919);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(48416);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(62194);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Tab/tabClasses.js

function getTabUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTab', slot);
}
var tabClasses = (0,generateUtilityClasses/* default */.Z)('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper']);
/* harmony default export */ var Tab_tabClasses = (tabClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Tab/Tab.js


var _excluded = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];











var useUtilityClasses = ownerState => {
  var {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  var slots = {
    root: ['root', icon && label && 'labelIcon', "textColor".concat((0,capitalize/* default */.Z)(textColor)), fullWidth && 'fullWidth', wrapped && 'wrapped', selected && 'selected', disabled && 'disabled'],
    iconWrapper: ['iconWrapper']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabUtilityClass, classes);
};

var TabRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z, {
  name: 'MuiTab',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, ownerState.label && ownerState.icon && styles.labelIcon, styles["textColor".concat((0,capitalize/* default */.Z)(ownerState.textColor))], ownerState.fullWidth && styles.fullWidth, ownerState.wrapped && styles.wrapped];
  }
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({}, theme.typography.button, {
    maxWidth: 360,
    minWidth: 90,
    position: 'relative',
    minHeight: 48,
    flexShrink: 0,
    padding: '12px 16px',
    overflow: 'hidden',
    whiteSpace: 'normal',
    textAlign: 'center'
  }, ownerState.label && {
    flexDirection: ownerState.iconPosition === 'top' || ownerState.iconPosition === 'bottom' ? 'column' : 'row'
  }, {
    lineHeight: 1.25
  }, ownerState.icon && ownerState.label && {
    minHeight: 72,
    paddingTop: 9,
    paddingBottom: 9,
    ["& > .".concat(Tab_tabClasses.iconWrapper)]: (0,esm_extends/* default */.Z)({}, ownerState.iconPosition === 'top' && {
      marginBottom: 6
    }, ownerState.iconPosition === 'bottom' && {
      marginTop: 6
    }, ownerState.iconPosition === 'start' && {
      marginRight: theme.spacing(1)
    }, ownerState.iconPosition === 'end' && {
      marginLeft: theme.spacing(1)
    })
  }, ownerState.textColor === 'inherit' && {
    color: 'inherit',
    opacity: 0.6,
    // same opacity as theme.palette.text.secondary
    ["&.".concat(Tab_tabClasses.selected)]: {
      opacity: 1
    },
    ["&.".concat(Tab_tabClasses.disabled)]: {
      opacity: theme.palette.action.disabledOpacity
    }
  }, ownerState.textColor === 'primary' && {
    color: theme.palette.text.secondary,
    ["&.".concat(Tab_tabClasses.selected)]: {
      color: theme.palette.primary.main
    },
    ["&.".concat(Tab_tabClasses.disabled)]: {
      color: theme.palette.text.disabled
    }
  }, ownerState.textColor === 'secondary' && {
    color: theme.palette.text.secondary,
    ["&.".concat(Tab_tabClasses.selected)]: {
      color: theme.palette.secondary.main
    },
    ["&.".concat(Tab_tabClasses.disabled)]: {
      color: theme.palette.text.disabled
    }
  }, ownerState.fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none'
  }, ownerState.wrapped && {
    fontSize: theme.typography.pxToRem(12)
  });
});
var Tab = /*#__PURE__*/react.forwardRef(function Tab(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTab'
  });

  var {
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon: iconProp,
    iconPosition = 'top',
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = 'inherit',
    value,
    wrapped = false
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  });

  var classes = useUtilityClasses(ownerState);
  var icon = iconProp && label && /*#__PURE__*/react.isValidElement(iconProp) ? /*#__PURE__*/react.cloneElement(iconProp, {
    className: (0,clsx_m["default"])(classes.iconWrapper, iconProp.props.className)
  }) : iconProp;

  var handleClick = event => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = event => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TabRoot, (0,esm_extends/* default */.Z)({
    focusRipple: !disableFocusRipple,
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState: ownerState,
    tabIndex: selected ? 0 : -1
  }, other, {
    children: [iconPosition === 'top' || iconPosition === 'start' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [icon, label]
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [label, icon]
    }), indicator]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Tab_Tab = (Tab);

/***/ }),

/***/ 98970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Tabs_Tabs; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(49408);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(66449);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/debounce.js
var debounce = __webpack_require__(95152);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/esm/scrollLeft.js
// Source from https://github.com/alitaheri/normalize-scroll-left
var cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  var dummy = document.createElement('div');
  var container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  var type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/animate.js
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}

function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : () => {};
  var {
    ease = easeInOutSin,
    duration = 300 // standard

  } = options;
  var start = null;
  var from = element[property];
  var cancelled = false;

  var cancel = () => {
    cancelled = true;
  };

  var step = timestamp => {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    var time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }

    requestAnimationFrame(step);
  };

  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow = __webpack_require__(9217);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Tabs/ScrollbarSize.js


var _excluded = ["onChange"];





var styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

function ScrollbarSize(props) {
  var {
    onChange
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var scrollbarHeight = react.useRef();
  var nodeRef = react.useRef(null);

  var setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  react.useEffect(() => {
    var handleResize = (0,debounce/* default */.Z)(() => {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();

      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    var containerWindow = (0,ownerWindow/* default */.Z)(nodeRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [onChange]);
  react.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", (0,esm_extends/* default */.Z)({
    style: styles,
    ref: nodeRef
  }, other));
}
 false ? 0 : void 0;
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(25833);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ var KeyboardArrowLeft = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft'));
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js


/**
 * @ignore - internal component.
 */


/* harmony default export */ var KeyboardArrowRight = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight'));
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(21919);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(48416);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(62194);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TabScrollButton/tabScrollButtonClasses.js

function getTabScrollButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabScrollButton', slot);
}
var tabScrollButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);
/* harmony default export */ var TabScrollButton_tabScrollButtonClasses = (tabScrollButtonClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TabScrollButton/TabScrollButton.js



var _KeyboardArrowLeft, _KeyboardArrowRight;

var TabScrollButton_excluded = ["className", "direction", "orientation", "disabled"];
/* eslint-disable jsx-a11y/aria-role */













var useUtilityClasses = ownerState => {
  var {
    classes,
    orientation,
    disabled
  } = ownerState;
  var slots = {
    root: ['root', orientation, disabled && 'disabled']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabScrollButtonUtilityClass, classes);
};

var TabScrollButtonRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z, {
  name: 'MuiTabScrollButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
  }
})(_ref => {
  var {
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    ["&.".concat(TabScrollButton_tabScrollButtonClasses.disabled)]: {
      opacity: 0
    }
  }, ownerState.orientation === 'vertical' && {
    width: '100%',
    height: 40,
    '& svg': {
      transform: "rotate(".concat(ownerState.isRtl ? -90 : 90, "deg)")
    }
  });
});
var TabScrollButton = /*#__PURE__*/react.forwardRef(function TabScrollButton(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabScrollButton'
  });

  var {
    className,
    direction
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, TabScrollButton_excluded);

  var theme = (0,useTheme/* default */.Z)();
  var isRtl = theme.direction === 'rtl';

  var ownerState = (0,esm_extends/* default */.Z)({
    isRtl
  }, props);

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabScrollButtonRoot, (0,esm_extends/* default */.Z)({
    component: "div",
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref,
    role: null,
    ownerState: ownerState,
    tabIndex: null
  }, other, {
    children: direction === 'left' ? _KeyboardArrowLeft || (_KeyboardArrowLeft = /*#__PURE__*/(0,jsx_runtime.jsx)(KeyboardArrowLeft, {
      fontSize: "small"
    })) : _KeyboardArrowRight || (_KeyboardArrowRight = /*#__PURE__*/(0,jsx_runtime.jsx)(KeyboardArrowRight, {
      fontSize: "small"
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var TabScrollButton_TabScrollButton = (TabScrollButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(10955);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Tabs/tabsClasses.js

function getTabsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabs', slot);
}
var tabsClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabs', ['root', 'vertical', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']);
/* harmony default export */ var Tabs_tabsClasses = (tabsClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument = __webpack_require__(79072);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Tabs/Tabs.js


var Tabs_excluded = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];




















var nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return list.firstChild;
};

var previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return list.lastChild;
};

var moveFocus = (list, currentFocus, traversalFunction) => {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

var Tabs_useUtilityClasses = ownerState => {
  var {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  var slots = {
    root: ['root', vertical && 'vertical'],
    scroller: ['scroller', fixed && 'fixed', hideScrollbar && 'hideScrollbar', scrollableX && 'scrollableX', scrollableY && 'scrollableY'],
    flexContainer: ['flexContainer', vertical && 'flexContainerVertical', centered && 'centered'],
    indicator: ['indicator'],
    scrollButtons: ['scrollButtons', scrollButtonsHideMobile && 'scrollButtonsHideMobile'],
    scrollableX: [scrollableX && 'scrollableX'],
    hideScrollbar: [hideScrollbar && 'hideScrollbar']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabsUtilityClass, classes);
};

var TabsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabs',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [{
      ["& .".concat(Tabs_tabsClasses.scrollButtons)]: styles.scrollButtons
    }, {
      ["& .".concat(Tabs_tabsClasses.scrollButtons)]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
    }, styles.root, ownerState.vertical && styles.vertical];
  }
})(_ref => {
  var {
    ownerState,
    theme
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    overflow: 'hidden',
    minHeight: 48,
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch',
    display: 'flex'
  }, ownerState.vertical && {
    flexDirection: 'column'
  }, ownerState.scrollButtonsHideMobile && {
    ["& .".concat(Tabs_tabsClasses.scrollButtons)]: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  });
});
var TabsScroller = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabs',
  slot: 'Scroller',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.scroller, ownerState.fixed && styles.fixed, ownerState.hideScrollbar && styles.hideScrollbar, ownerState.scrollableX && styles.scrollableX, ownerState.scrollableY && styles.scrollableY];
  }
})(_ref2 => {
  var {
    ownerState
  } = _ref2;
  return (0,esm_extends/* default */.Z)({
    position: 'relative',
    display: 'inline-block',
    flex: '1 1 auto',
    whiteSpace: 'nowrap'
  }, ownerState.fixed && {
    overflowX: 'hidden',
    width: '100%'
  }, ownerState.hideScrollbar && {
    // Hide dimensionless scrollbar on MacOS
    scrollbarWidth: 'none',
    // Firefox
    '&::-webkit-scrollbar': {
      display: 'none' // Safari + Chrome

    }
  }, ownerState.scrollableX && {
    overflowX: 'auto',
    overflowY: 'hidden'
  }, ownerState.scrollableY && {
    overflowY: 'auto',
    overflowX: 'hidden'
  });
});
var FlexContainer = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabs',
  slot: 'FlexContainer',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.flexContainer, ownerState.vertical && styles.flexContainerVertical, ownerState.centered && styles.centered];
  }
})(_ref3 => {
  var {
    ownerState
  } = _ref3;
  return (0,esm_extends/* default */.Z)({
    display: 'flex'
  }, ownerState.vertical && {
    flexDirection: 'column'
  }, ownerState.centered && {
    justifyContent: 'center'
  });
});
var TabsIndicator = (0,styled/* default */.ZP)('span', {
  name: 'MuiTabs',
  slot: 'Indicator',
  overridesResolver: (props, styles) => styles.indicator
})(_ref4 => {
  var {
    ownerState,
    theme
  } = _ref4;
  return (0,esm_extends/* default */.Z)({
    position: 'absolute',
    height: 2,
    bottom: 0,
    width: '100%',
    transition: theme.transitions.create()
  }, ownerState.indicatorColor === 'primary' && {
    backgroundColor: theme.palette.primary.main
  }, ownerState.indicatorColor === 'secondary' && {
    backgroundColor: theme.palette.secondary.main
  }, ownerState.vertical && {
    height: '100%',
    width: 2,
    right: 0
  });
});
var TabsScrollbarSize = (0,styled/* default */.ZP)(ScrollbarSize, {
  name: 'MuiTabs',
  slot: 'ScrollbarSize'
})({
  overflowX: 'auto',
  overflowY: 'hidden',
  // Hide dimensionless scrollbar on MacOS
  scrollbarWidth: 'none',
  // Firefox
  '&::-webkit-scrollbar': {
    display: 'none' // Safari + Chrome

  }
});
var defaultIndicatorStyle = {};
var warnedOnceTabPresent = false;
var Tabs = /*#__PURE__*/react.forwardRef(function Tabs(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabs'
  });
  var theme = (0,useTheme/* default */.Z)();
  var isRtl = theme.direction === 'rtl';

  var {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = 'div',
    allowScrollButtonsMobile = false,
    indicatorColor = 'primary',
    onChange,
    orientation = 'horizontal',
    ScrollButtonComponent = TabScrollButton_TabScrollButton,
    scrollButtons = 'auto',
    selectionFollowsFocus,
    TabIndicatorProps = {},
    TabScrollButtonProps = {},
    textColor = 'primary',
    value,
    variant = 'standard',
    visibleScrollbar = false
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, Tabs_excluded);

  var scrollable = variant === 'scrollable';
  var vertical = orientation === 'vertical';
  var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  var start = vertical ? 'top' : 'left';
  var end = vertical ? 'bottom' : 'right';
  var clientSize = vertical ? 'clientHeight' : 'clientWidth';
  var size = vertical ? 'height' : 'width';

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  });

  var classes = Tabs_useUtilityClasses(ownerState);

  if (false) {}

  var [mounted, setMounted] = react.useState(false);
  var [indicatorStyle, setIndicatorStyle] = react.useState(defaultIndicatorStyle);
  var [displayScroll, setDisplayScroll] = react.useState({
    start: false,
    end: false
  });
  var [scrollerStyle, setScrollerStyle] = react.useState({
    overflow: 'hidden',
    scrollbarWidth: 0
  });
  var valueToIndex = new Map();
  var tabsRef = react.useRef(null);
  var tabListRef = react.useRef(null);

  var getTabsMeta = () => {
    var tabsNode = tabsRef.current;
    var tabsMeta;

    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }

    var tabMeta;

    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;

      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];

        if (false) {}

        tabMeta = tab ? tab.getBoundingClientRect() : null;

        if (false) {}
      }
    }

    return {
      tabsMeta,
      tabMeta
    };
  };

  var updateIndicatorState = (0,useEventCallback/* default */.Z)(() => {
    var {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    var startValue = 0;
    var startIndicator;

    if (vertical) {
      startIndicator = 'top';

      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? 'right' : 'left';

      if (tabMeta && tabsMeta) {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
      }
    }

    var newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    }; // IE11 support, replace with Number.isNaN
    // eslint-disable-next-line no-restricted-globals

    if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  var scroll = function scroll(scrollValue) {
    var {
      animation = true
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (animation) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };

  var moveTabsScroll = delta => {
    var scrollValue = tabsRef.current[scrollStart];

    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1); // Fix for Edge

      scrollValue *= isRtl && detectScrollType() === 'reverse' ? -1 : 1;
    }

    scroll(scrollValue);
  };

  var getScrollSize = () => {
    var containerSize = tabsRef.current[clientSize];
    var totalSize = 0;
    var children = Array.from(tabListRef.current.children);

    for (var i = 0; i < children.length; i += 1) {
      var tab = children[i];

      if (totalSize + tab[clientSize] > containerSize) {
        break;
      }

      totalSize += tab[clientSize];
    }

    return totalSize;
  };

  var handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };

  var handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  }; // TODO Remove <ScrollbarSize /> as browser support for hidding the scrollbar
  // with CSS improves.


  var handleScrollbarSizeChange = react.useCallback(scrollbarWidth => {
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, []);

  var getConditionalElements = () => {
    var conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/(0,jsx_runtime.jsx)(TabsScrollbarSize, {
      onChange: handleScrollbarSizeChange,
      className: (0,clsx_m["default"])(classes.scrollableX, classes.hideScrollbar)
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === true);
    conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/(0,jsx_runtime.jsx)(ScrollButtonComponent, (0,esm_extends/* default */.Z)({
      orientation: orientation,
      direction: isRtl ? 'right' : 'left',
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start
    }, TabScrollButtonProps, {
      className: (0,clsx_m["default"])(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/(0,jsx_runtime.jsx)(ScrollButtonComponent, (0,esm_extends/* default */.Z)({
      orientation: orientation,
      direction: isRtl ? 'left' : 'right',
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end
    }, TabScrollButtonProps, {
      className: (0,clsx_m["default"])(classes.scrollButtons, TabScrollButtonProps.className)
    })) : null;
    return conditionalElements;
  };

  var scrollSelectedIntoView = (0,useEventCallback/* default */.Z)(animation => {
    var {
      tabsMeta,
      tabMeta
    } = getTabsMeta();

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);

      scroll(_nextScrollStart, {
        animation
      });
    }
  });
  var updateScrollButtonState = (0,useEventCallback/* default */.Z)(() => {
    if (scrollable && scrollButtons !== false) {
      var {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollWidth,
        clientWidth
      } = tabsRef.current;
      var showStartScroll;
      var showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }

      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  react.useEffect(() => {
    var handleResize = (0,debounce/* default */.Z)(() => {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = (0,ownerWindow/* default */.Z)(tabsRef.current);
    win.addEventListener('resize', handleResize);
    var resizeObserver;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach(child => {
        resizeObserver.observe(child);
      });
    }

    return () => {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = react.useMemo(() => (0,debounce/* default */.Z)(() => {
    updateScrollButtonState();
  }), [updateScrollButtonState]);
  react.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  react.useEffect(() => {
    setMounted(true);
  }, []);
  react.useEffect(() => {
    updateIndicatorState();
    updateScrollButtonState();
  });
  react.useEffect(() => {
    // Don't animate on the first render.
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  react.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);

  var indicator = /*#__PURE__*/(0,jsx_runtime.jsx)(TabsIndicator, (0,esm_extends/* default */.Z)({}, TabIndicatorProps, {
    className: (0,clsx_m["default"])(classes.indicator, TabIndicatorProps.className),
    ownerState: ownerState,
    style: (0,esm_extends/* default */.Z)({}, indicatorStyle, TabIndicatorProps.style)
  }));

  var childIndex = 0;
  var children = react.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return null;
    }

    if (false) {}

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return /*#__PURE__*/react.cloneElement(child, (0,esm_extends/* default */.Z)({
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue
    }, childIndex === 1 && value === false && !child.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  });

  var handleKeyDown = event => {
    var list = tabListRef.current;
    var currentFocus = (0,ownerDocument/* default */.Z)(list).activeElement; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    var role = currentFocus.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

    if (orientation === 'horizontal' && isRtl) {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;

      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;

      case 'Home':
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;

      case 'End':
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;

      default:
        break;
    }
  };

  var conditionalElements = getConditionalElements();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TabsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    as: component
  }, other, {
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/(0,jsx_runtime.jsxs)(TabsScroller, {
      className: classes.scroller,
      ownerState: ownerState,
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? "margin".concat(isRtl ? 'Left' : 'Right') : 'marginBottom']: visibleScrollbar ? undefined : -scrollerStyle.scrollbarWidth
      },
      ref: tabsRef,
      onScroll: handleTabsScroll,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FlexContainer, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
        className: classes.flexContainer,
        ownerState: ownerState,
        onKeyDown: handleKeyDown,
        ref: tabListRef,
        role: "tablist",
        children: children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Tabs_Tabs = (Tabs);

/***/ }),

/***/ 3263:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TabPanel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49308);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);

var _excluded = ["children", "value", "index"];



function TabPanel(props) {
  var {
    children,
    value,
    index
  } = props,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);

  var did = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({
    role: "tabpanel",
    hidden: value !== index,
    id: did,
    "aria-labelledby": did
  }, other), value === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    p: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "span"
  }, children)));
}

/***/ })

}]);
//# sourceMappingURL=82f7f99fb41100430f9ee2f3ed5cb3a15b0ac18d-4e804fd869d2729844b8.js.map