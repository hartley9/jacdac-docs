"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6080],{

/***/ 49590:
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
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.Z = _default;

/***/ }),

/***/ 12714:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Accordion_Accordion; }
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
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(96037);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(98953);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(78298);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(42583);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Accordion/accordionClasses.js

function getAccordionUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAccordion', slot);
}
var accordionClasses = (0,generateUtilityClasses/* default */.Z)('MuiAccordion', ['root', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);
/* harmony default export */ var Accordion_accordionClasses = (accordionClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Accordion/Accordion.js


var _excluded = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"];















var useUtilityClasses = ownerState => {
  var {
    classes,
    square,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  var slots = {
    root: ['root', !square && 'rounded', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    region: ['region']
  };
  return (0,composeClasses/* default */.Z)(slots, getAccordionUtilityClass, classes);
};

var AccordionRoot = (0,styled/* default */.ZP)(Paper/* default */.Z, {
  name: 'MuiAccordion',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [{
      ["& .".concat(Accordion_accordionClasses.region)]: styles.region
    }, styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
  }
})(_ref => {
  var {
    theme
  } = _ref;
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    position: 'relative',
    transition: theme.transitions.create(['margin'], transition),
    overflowAnchor: 'none',
    // Keep the same scrolling position
    '&:before': {
      position: 'absolute',
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: theme.palette.divider,
      transition: theme.transitions.create(['opacity', 'background-color'], transition)
    },
    '&:first-of-type': {
      '&:before': {
        display: 'none'
      }
    },
    ["&.".concat(Accordion_accordionClasses.expanded)]: {
      '&:before': {
        opacity: 0
      },
      '&:first-of-type': {
        marginTop: 0
      },
      '&:last-of-type': {
        marginBottom: 0
      },
      '& + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    ["&.".concat(Accordion_accordionClasses.disabled)]: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
}, _ref2 => {
  var {
    theme,
    ownerState
  } = _ref2;
  return (0,esm_extends/* default */.Z)({}, !ownerState.square && {
    borderRadius: 0,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-of-type': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
      // Fix a rendering issue on Edge
      '@supports (-ms-ime-align: auto)': {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }
  }, !ownerState.disableGutters && {
    ["&.".concat(Accordion_accordionClasses.expanded)]: {
      margin: '16px 0'
    }
  });
});
var Accordion = /*#__PURE__*/react.forwardRef(function Accordion(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAccordion'
  });

  var {
    children: childrenProp,
    className,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded: expandedProp,
    onChange,
    square = false,
    TransitionComponent = Collapse/* default */.Z,
    TransitionProps
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var [expanded, setExpandedState] = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  });
  var handleChange = react.useCallback(event => {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  var [summary, ...children] = react.Children.toArray(childrenProp);
  var contextValue = react.useMemo(() => ({
    expanded,
    disabled,
    disableGutters,
    toggle: handleChange
  }), [expanded, disabled, disableGutters, handleChange]);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    square,
    disabled,
    disableGutters,
    expanded
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref,
    ownerState: ownerState,
    square: square
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* default.Provider */.Z.Provider, {
      value: contextValue,
      children: summary
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.Z)({
      in: expanded,
      timeout: "auto"
    }, TransitionProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        "aria-labelledby": summary.props.id,
        id: summary.props['aria-controls'],
        role: "region",
        className: classes.region,
        children: children
      })
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Accordion_Accordion = (Accordion);

/***/ }),

/***/ 78298:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (false) {}

/* harmony default export */ __webpack_exports__["Z"] = (AccordionContext);

/***/ }),

/***/ 25449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AccordionDetails_AccordionDetails; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
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
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js

function getAccordionDetailsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAccordionDetails', slot);
}
var accordionDetailsClasses = (0,generateUtilityClasses/* default */.Z)('MuiAccordionDetails', ['root']);
/* harmony default export */ var AccordionDetails_accordionDetailsClasses = ((/* unused pure expression or super */ null && (accordionDetailsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js


var _excluded = ["className"];








var useUtilityClasses = ownerState => {
  var {
    classes
  } = ownerState;
  var slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getAccordionDetailsUtilityClass, classes);
};

var AccordionDetailsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiAccordionDetails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(_ref => {
  var {
    theme
  } = _ref;
  return {
    padding: theme.spacing(1, 2, 2)
  };
});
var AccordionDetails = /*#__PURE__*/react.forwardRef(function AccordionDetails(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAccordionDetails'
  });

  var {
    className
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionDetailsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionDetails_AccordionDetails = (AccordionDetails);

/***/ }),

/***/ 14588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AccordionSummary_AccordionSummary; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(21919);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(78298);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js

function getAccordionSummaryUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAccordionSummary', slot);
}
var accordionSummaryClasses = (0,generateUtilityClasses/* default */.Z)('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);
/* harmony default export */ var AccordionSummary_accordionSummaryClasses = (accordionSummaryClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js


var _excluded = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];











var useUtilityClasses = ownerState => {
  var {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  var slots = {
    root: ['root', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    focusVisible: ['focusVisible'],
    content: ['content', expanded && 'expanded', !disableGutters && 'contentGutters'],
    expandIconWrapper: ['expandIconWrapper', expanded && 'expanded']
  };
  return (0,composeClasses/* default */.Z)(slots, getAccordionSummaryUtilityClass, classes);
};

var AccordionSummaryRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z, {
  name: 'MuiAccordionSummary',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(['min-height', 'background-color'], transition),
    ["&.".concat(AccordionSummary_accordionSummaryClasses.focusVisible)]: {
      backgroundColor: theme.palette.action.focus
    },
    ["&.".concat(AccordionSummary_accordionSummaryClasses.disabled)]: {
      opacity: theme.palette.action.disabledOpacity
    },
    ["&:hover:not(.".concat(AccordionSummary_accordionSummaryClasses.disabled, ")")]: {
      cursor: 'pointer'
    }
  }, !ownerState.disableGutters && {
    ["&.".concat(AccordionSummary_accordionSummaryClasses.expanded)]: {
      minHeight: 64
    }
  });
});
var AccordionSummaryContent = (0,styled/* default */.ZP)('div', {
  name: 'MuiAccordionSummary',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(_ref2 => {
  var {
    theme,
    ownerState
  } = _ref2;
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    flexGrow: 1,
    margin: '12px 0'
  }, !ownerState.disableGutters && {
    transition: theme.transitions.create(['margin'], {
      duration: theme.transitions.duration.shortest
    }),
    ["&.".concat(AccordionSummary_accordionSummaryClasses.expanded)]: {
      margin: '20px 0'
    }
  });
});
var AccordionSummaryExpandIconWrapper = (0,styled/* default */.ZP)('div', {
  name: 'MuiAccordionSummary',
  slot: 'ExpandIconWrapper',
  overridesResolver: (props, styles) => styles.expandIconWrapper
})(_ref3 => {
  var {
    theme
  } = _ref3;
  return {
    display: 'flex',
    color: theme.palette.action.active,
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    ["&.".concat(AccordionSummary_accordionSummaryClasses.expanded)]: {
      transform: 'rotate(180deg)'
    }
  };
});
var AccordionSummary = /*#__PURE__*/react.forwardRef(function AccordionSummary(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAccordionSummary'
  });

  var {
    children,
    className,
    expandIcon,
    focusVisibleClassName,
    onClick
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = react.useContext(AccordionContext/* default */.Z);

  var handleChange = event => {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    expanded,
    disabled,
    disableGutters
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionSummaryRoot, (0,esm_extends/* default */.Z)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx_m["default"])(classes.root, className),
    focusVisibleClassName: (0,clsx_m["default"])(classes.focusVisible, focusVisibleClassName),
    onClick: handleChange,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionSummaryContent, {
      className: classes.content,
      ownerState: ownerState,
      children: children
    }), expandIcon && /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionSummaryExpandIconWrapper, {
      className: classes.expandIconWrapper,
      ownerState: ownerState,
      children: expandIcon
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionSummary_AccordionSummary = (AccordionSummary);

/***/ }),

/***/ 70943:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TableCell_TableCell; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/TableContext.js
var TableContext = __webpack_require__(90694);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Tablelvl2Context.js
var Tablelvl2Context = __webpack_require__(70473);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableCell/tableCellClasses.js

function getTableCellUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTableCell', slot);
}
var tableCellClasses = (0,generateUtilityClasses/* default */.Z)('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
/* harmony default export */ var TableCell_tableCellClasses = (tableCellClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableCell/TableCell.js


var _excluded = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];












var useUtilityClasses = ownerState => {
  var {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  var slots = {
    root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && "align".concat((0,capitalize/* default */.Z)(align)), padding !== 'normal' && "padding".concat((0,capitalize/* default */.Z)(padding)), "size".concat((0,capitalize/* default */.Z)(size))]
  };
  return (0,composeClasses/* default */.Z)(slots, getTableCellUtilityClass, classes);
};

var TableCellRoot = (0,styled/* default */.ZP)('td', {
  name: 'MuiTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles["size".concat((0,capitalize/* default */.Z)(ownerState.size))], ownerState.padding !== 'normal' && styles["padding".concat((0,capitalize/* default */.Z)(ownerState.padding))], ownerState.align !== 'inherit' && styles["align".concat((0,capitalize/* default */.Z)(ownerState.align))], ownerState.stickyHeader && styles.stickyHeader];
  }
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({}, theme.typography.body2, {
    display: 'table-cell',
    verticalAlign: 'inherit',
    // Workaround for a rendering bug with spanned columns in Chrome 62.0.
    // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
    borderBottom: "1px solid\n    ".concat(theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.$n)((0,colorManipulator/* alpha */.Fq)(theme.palette.divider, 1), 0.88) : (0,colorManipulator/* darken */._j)((0,colorManipulator/* alpha */.Fq)(theme.palette.divider, 1), 0.68)),
    textAlign: 'left',
    padding: 16
  }, ownerState.variant === 'head' && {
    color: theme.palette.text.primary,
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium
  }, ownerState.variant === 'body' && {
    color: theme.palette.text.primary
  }, ownerState.variant === 'footer' && {
    color: theme.palette.text.secondary,
    lineHeight: theme.typography.pxToRem(21),
    fontSize: theme.typography.pxToRem(12)
  }, ownerState.size === 'small' && {
    padding: '6px 16px',
    ["&.".concat(TableCell_tableCellClasses.paddingCheckbox)]: {
      width: 24,
      // prevent the checkbox column from growing
      padding: '0 12px 0 16px',
      '& > *': {
        padding: 0
      }
    }
  }, ownerState.padding === 'checkbox' && {
    width: 48,
    // prevent the checkbox column from growing
    padding: '0 0 0 4px'
  }, ownerState.padding === 'none' && {
    padding: 0
  }, ownerState.align === 'left' && {
    textAlign: 'left'
  }, ownerState.align === 'center' && {
    textAlign: 'center'
  }, ownerState.align === 'right' && {
    textAlign: 'right',
    flexDirection: 'row-reverse'
  }, ownerState.align === 'justify' && {
    textAlign: 'justify'
  }, ownerState.stickyHeader && {
    position: 'sticky',
    top: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  });
});
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react.forwardRef(function TableCell(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTableCell'
  });

  var {
    align = 'inherit',
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var table = react.useContext(TableContext/* default */.Z);
  var tablelvl2 = react.useContext(Tablelvl2Context/* default */.Z);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var component;

  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var variant = variantProp || tablelvl2 && tablelvl2.variant;

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
    size: sizeProp || (table && table.size ? table.size : 'medium'),
    sortDirection,
    stickyHeader: variant === 'head' && table && table.stickyHeader,
    variant
  });

  var classes = useUtilityClasses(ownerState);
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(TableCellRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ref: ref,
    className: (0,clsx_m["default"])(classes.root, className),
    "aria-sort": ariaSort,
    scope: scope,
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var TableCell_TableCell = (TableCell);

/***/ }),

/***/ 96080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ModelSummaryDropdown; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(12714);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(14588);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(25449);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(49590);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(92664);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(17708);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(33182);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(70943);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(57783);
// EXTERNAL MODULE: ./src/components/model-editor/MBModel.ts
var MBModel = __webpack_require__(73102);
;// CONCATENATED MODULE: ./src/components/model-editor/components/ModelSummary.tsx



function ModelSummary(props) {
  var {
    model,
    dataset
  } = props;
  return /*#__PURE__*/react.createElement(react.Fragment, null, !!dataset && /*#__PURE__*/react.createElement(react.Fragment, null, " ", dataset.summary.map((line, lineIdx) => {
    return /*#__PURE__*/react.createElement("span", {
      key: "dataset-summary-" + lineIdx
    }, " ", line, " ", /*#__PURE__*/react.createElement("br", null));
  }), " "), model.summary.map((line, lineIdx) => {
    return /*#__PURE__*/react.createElement("span", {
      style: {
        whiteSpace: "pre-wrap"
      },
      key: "model-summary-" + lineIdx
    }, line, /*#__PURE__*/react.createElement("br", null));
  }), !!model.modelStats && /*#__PURE__*/react.createElement(Table/* default */.Z, null, /*#__PURE__*/react.createElement(TableHead/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "Layer"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "Shape"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "# of Params"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "# of Bytes (%)"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "# of Cycles (%)"))), /*#__PURE__*/react.createElement(TableBody/* default */.Z, null, /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
    key: "input"
  }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    component: "th",
    scope: "row"
  }, "INPUT"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "[", model.inputShape.join(", "), "]"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  })), model.modelStats.layers.map(layer => /*#__PURE__*/react.createElement(TableRow/* default */.Z, {
    key: layer.name
  }, /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    component: "th",
    scope: "row"
  }, layer.name), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, "[", layer.outputShape.join(", "), "]"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, layer.weightBytes / 2), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, layer.weightBytes + layer.codeBytes, " (", ((layer.weightBytes + layer.codeBytes) * 100 / (model.modelStats.total.weightBytes + model.modelStats.total.codeBytes)).toPrecision(3), "%)"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, layer.optimizedCycles, " (", (layer.optimizedCycles * 100 / model.modelStats.total.optimizedCycles).toPrecision(3), "%)"))), /*#__PURE__*/react.createElement(TableRow/* default */.Z, null, /*#__PURE__*/react.createElement(TableCell/* default */.Z, null, "TOTAL"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, model.modelStats.layers.map(layer => {
    return layer.weightBytes;
  }).reduce((total, current) => {
    return total + current;
  }) / MBModel/* MCU_FLOAT_SIZE */.Xl), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, model.modelStats.total.weightBytes + model.modelStats.total.codeBytes, /*#__PURE__*/react.createElement("br", null), "(", ((model.modelStats.total.weightBytes + model.modelStats.total.codeBytes - model.modelStats.layers.map(layer => {
    return layer.weightBytes + layer.codeBytes;
  }).reduce((total, current) => {
    return total + current;
  })) / 1000).toPrecision(2), " ", "KB overhead)"), /*#__PURE__*/react.createElement(TableCell/* default */.Z, {
    align: "right"
  }, model.modelStats.total.optimizedCycles, " ", /*#__PURE__*/react.createElement("br", null), "(", (model.modelStats.total.optimizedCycles / MBModel/* MCU_SPEED */.HG).toPrecision(2), "ms @ 64MHz)")))));
}
;// CONCATENATED MODULE: ./src/components/model-editor/components/ModelSummaryDropdown.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function ModelSummaryDropdown(props) {
  var {
    dataset,
    model
  } = props;
  var classes = props.reactStyle;
  var [expanded, setExpanded] = react.useState(false);

  var handleExpandedSummaryChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded === "modelSummary",
    onChange: handleExpandedSummaryChange("modelSummary")
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement("div", null, expanded == "modelSummary" ? /*#__PURE__*/react.createElement("h2", null, " Summary ") : /*#__PURE__*/react.createElement("span", null, "Classes: ", model.labels.join(", "), " ", /*#__PURE__*/react.createElement("br", null), "Training Status: ", model.status, " ", /*#__PURE__*/react.createElement("br", null)))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, null, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ModelSummary, {
    reactStyle: classes,
    dataset: dataset,
    model: model
  })))));
}

/***/ })

}]);
//# sourceMappingURL=6080-4834d634dc18b117724a.js.map