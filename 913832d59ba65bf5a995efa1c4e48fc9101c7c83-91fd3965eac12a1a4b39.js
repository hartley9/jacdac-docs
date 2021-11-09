"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5092,7746],{

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

/***/ 63037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GithubRepositoryCardHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5234);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78136);
/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90695);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36176);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2285);
 // tslint:disable-next-line: no-submodule-imports







function MakeCodeFolderLink(props) {
  var {
    slug,
    folder,
    repo
  } = props;
  var {
    response: pxtJson
  } = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useFetchJSON */ .J$)(slug, repo.default_branch, "pxt.json", "application/json");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: repo.html_url + "/tree/" + repo.default_branch + "/" + folder,
    target: "blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "span",
    variant: "h5"
  }, repo.name + "/ " + ((pxtJson === null || pxtJson === void 0 ? void 0 : pxtJson.name) || folder)));
}

function GithubRepositoryCardHeader(props) {
  var _repo$organization;

  var {
    slug,
    showRelease
  } = props;
  var {
    response: repo,
    loading: repoLoading,
    status
  } = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useRepository */ .Ux)(slug);
  var {
    response: release
  } = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useLatestFirmwareRelease */ .B5)(showRelease && slug);
  var {
    folder
  } = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSlug */ .E1)(slug);
  var title = repo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "span",
    variant: "h6"
  }, (_repo$organization = repo.organization) === null || _repo$organization === void 0 ? void 0 : _repo$organization.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    component: "span",
    ml: 0.5,
    mr: 0.5
  }, "/"), folder ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeFolderLink, {
    slug: slug,
    folder: folder,
    repo: repo
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: repo.html_url,
    target: "_blank",
    underline: "hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "span",
    variant: "h5"
  }, repo.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "https://github.com/" + slug,
    target: "_blank",
    underline: "hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "span",
    variant: "h6"
  }, slug)), repoLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null), status !== 403 && !repoLoading && !repo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    component: "p",
    variant: "caption"
  }, "Unable to find repository."));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    title: title,
    subheader: release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
      color: "textSecondary",
      target: "_blank",
      to: release.html_url
    }, release.version),
    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null)
  });
}

/***/ }),

/***/ 54272:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FirmwareCard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12714);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14588);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25449);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(92077);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20171);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87122);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79675);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11521);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78136);
/* harmony import */ var _useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29394);
/* harmony import */ var _GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63037);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95453);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36176);
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15789);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49590);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2285);











function FirmwareCard(props) {
  var {
    slug
  } = props;
  var {
    response: releases
  } = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useLatestFirmwareReleases */ .ET)(slug);
  var {
    0: downloading,
    1: setDownloading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: release,
    1: setRelease
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  var {
    0: firmwaresExpanded,
    1: setFirmwaresExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var {
    setFirmwareFile,
    firmwareBlobs
  } = (0,_useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_2__/* .useFirmwareBlob */ .x)(slug);
  var tag = (release === null || release === void 0 ? void 0 : release.version) || "";
  var disabled = downloading;
  var version = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs[0].version; // version starts with v

  var updateAvailable = !!tag && !!version && tag !== version.replace(/^v/, "").substr(0, tag.length);
  var downloadColor = updateAvailable ? "primary" : "inherit";
  var downloadVariant = updateAvailable ? "contained" : "text"; // initialize with latest release

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (releases !== null && releases !== void 0 && releases.length && !release) setRelease(releases[0]);
  }, [releases]);

  var handleReleaseChange = ev => {
    var v = ev.target.value;
    var rel = releases === null || releases === void 0 ? void 0 : releases.find(r => r.version === v);
    setRelease(rel);
  };

  var handleGitHubReleaseDownload = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      try {
        setError("");
        setDownloading(true);
        var firmware = yield (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .fetchFirmwareReleaseBinary */ .e0)(slug, tag);
        if (firmware) setFirmwareFile(tag, firmware);
      } finally {
        setDownloading(false);
      }
    });

    return function handleGitHubReleaseDownload() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      try {
        setError("");
        setDownloading(true);
        setFirmwareFile(tag, undefined);
      } finally {
        setDownloading(false);
      }
    });

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    slug: slug
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    severity: "error"
  }, error), !(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    severity: "info"
  }, "No firmware binary found in repository."), !!(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    expanded: firmwaresExpanded,
    onChange: () => setFirmwaresExpanded(!firmwaresExpanded)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " ", "(", firmwareBlobs.length, " firmwares)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
    dense: true
  }, firmwareBlobs.map(blob => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
    key: blob.productIdentifier
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    primary: blob.name,
    secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Link, {
      to: "/firmwares/0x" + blob.productIdentifier.toString(16)
    }, "0x" + blob.productIdentifier.toString(16))
  }))))))), (releases === null || releases === void 0 ? void 0 : releases.length) === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    severity: "warning"
  }, "No releases found."), !!(releases !== null && releases !== void 0 && releases.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    fullWidth: true,
    helperText: "choose a version",
    value: tag,
    onChange: handleReleaseChange
  }, releases === null || releases === void 0 ? void 0 : releases.map(rel => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
    key: rel.version,
    value: rel.version
  }, rel.version)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null, !downloading && release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
    disabled: downloading,
    color: downloadColor,
    variant: downloadVariant,
    "aria-label": "Download last release from " + slug,
    onClick: handleGitHubReleaseDownload
  }, "Download"), !downloading && (firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
    disabled: disabled,
    variant: "text",
    "arial-label": "Clear",
    onClick: handleClear
  }, "Clear"), downloading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null)));
}

/***/ }),

/***/ 29394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFirmwareBlobs; },
  "x": function() { return /* binding */ useFirmwareBlob; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flashing.ts
var flashing = __webpack_require__(91758);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(94904);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__(78136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(15785);
;// CONCATENATED MODULE: ./src/components/hooks/useIdleCallback.ts


function useIdleCallback(cb, timeout, deps) {
  (0,react.useEffect)(() => {
    if (typeof window === "undefined" || !cb) return;

    if ("requestIdleCallback" in window) {
      var id = window.requestIdleCallback(cb, {
        timeout
      });
      return () => window.cancelIdleCallback(id);
    } else {
      var _id = setTimeout(cb, timeout);

      return () => clearTimeout(_id);
    }
  }, [cb, timeout].concat((0,toConsumableArray/* default */.Z)(deps || [])));
}
// EXTERNAL MODULE: ./src/components/hooks/useMounted.ts
var useMounted = __webpack_require__(72179);
// EXTERNAL MODULE: ./src/components/hooks/useAnalytics.ts + 88 modules
var useAnalytics = __webpack_require__(72513);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(74450);
;// CONCATENATED MODULE: ./src/components/firmware/useFirmwareBlobs.ts













function useFirmwareBlobs() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    db
  } = (0,react.useContext)(DbContext/* default */.ZP);
  var {
    trackEvent
  } = (0,useAnalytics/* default */.ZP)();
  var {
    0: throttled,
    1: setThrottled
  } = (0,react.useState)(false);
  var mounted = (0,useMounted/* default */.Z)();
  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;
  var specifications = (0,useDeviceSpecifications/* default */.Z)();
  var loadFirmwares = (0,react.useCallback)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    var names = yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.list();
    if (!names) return;
    var slugs = (0,utils/* unique */.Tw)(specifications.filter(spec => {
      var _spec$productIdentifi;

      return !!(spec !== null && spec !== void 0 && (_spec$productIdentifi = spec.productIdentifiers) !== null && _spec$productIdentifi !== void 0 && _spec$productIdentifi.length);
    }) // needs some product identifiers
    .map(spec => spec.repo).filter(repo => /^https:\/\/github.com\//.test(repo)).map(repo => repo.substr("https://github.com/".length)));
    console.debug("firmware: found " + slugs.join(", "));

    for (var slug of slugs) {
      var fw = yield firmwares.get(slug);

      if (fw) {
        var {
          time
        } = fw;
        var age = Date.now() - time;
        console.debug("firmware: " + slug + " age " + (0,pretty/* prettyDuration */.Xh)(age));

        if (age < 3600000) {
          console.debug("firmware: skipping fresh firmware " + slug);
          continue;
        }
      }

      console.debug("firmware: fetch latest release of " + slug);
      var {
        status,
        release
      } = yield (0,github/* fetchLatestFirmwareRelease */.wA)(slug, {
        ignoreThrottled: true
      });
      trackEvent("github.fetch", {
        status,
        slug
      });

      if (status === 403) {
        trackEvent("github.fetch.throttled", {
          repo: slug
        });
        if (mounted()) setThrottled(true);
      }

      if (!(release !== null && release !== void 0 && release.version)) {
        trackEvent("github.fetch.notfound", {
          repo: slug
        });
        console.warn("firmware: release not found");
        return;
      }

      setThrottled(false);
      console.log("firmware: fetch binary release " + slug + " " + release.version);
      var firmware = yield (0,github/* fetchFirmwareReleaseBinary */.e0)(slug, release.version);

      if (firmware) {
        console.debug("firmware: binary release " + slug + " " + release.version + " downloaded");
        firmwares.set(slug, {
          time: Date.now(),
          firmware
        });
      } // throttle github queries


      yield bus.delay(5000);
    }
  }), [db, firmwares, throttled]); // reload firmwares

  useIdleCallback(loadFirmwares, 5000, [db, firmwares]); // update bus with info on changes

  (0,useChange/* useChangeAsync */.R)(firmwares, /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (fw) {
      var names = yield fw === null || fw === void 0 ? void 0 : fw.list();
      var uf2s = [];

      if (names !== null && names !== void 0 && names.length) {
        for (var name of names) {
          var {
            firmware
          } = (yield fw.get(name)) || {};

          if (firmware) {
            var uf2Blobs = yield (0,flashing/* parseFirmwareFile */.Ub)(firmware, name);
            uf2Blobs === null || uf2Blobs === void 0 ? void 0 : uf2Blobs.forEach(uf2Blob => {
              uf2s.push(uf2Blob);
            });
          }
        }
      }

      bus.firmwareBlobs = uf2s;
    });

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  return {
    throttled
  };
}
function useFirmwareBlob(repoSlug) {
  var _repoSlug;

  repoSlug = (_repoSlug = repoSlug) === null || _repoSlug === void 0 ? void 0 : _repoSlug.replace(/^https:\/\/github\.com\//i, "");
  var {
    db
  } = (0,react.useContext)(DbContext/* default */.ZP);
  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;
  var blobs = (0,useChange/* useChangeAsync */.R)(firmwares, /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    if (!repoSlug) return undefined;
    var {
      firmware
    } = (yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.get(repoSlug)) || {};

    if (!firmware) {
      return undefined;
    } else {
      var uf2Blobs = yield (0,flashing/* parseFirmwareFile */.Ub)(firmware, repoSlug);
      return uf2Blobs;
    }
  }), [repoSlug]);

  var setFirmwareFile = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* (tag, f) {
      if (!f) yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.set(repoSlug, undefined);else yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.set(repoSlug, {
        time: Date.now(),
        firmware: f
      });
    });

    return function setFirmwareFile(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return {
    firmwareBlobs: blobs,
    setFirmwareFile
  };
}

/***/ }),

/***/ 78136:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e0": function() { return /* binding */ fetchFirmwareReleaseBinary; },
  "wA": function() { return /* binding */ fetchLatestFirmwareRelease; },
  "E1": function() { return /* binding */ normalizeSlug; },
  "Jo": function() { return /* binding */ parseRepoUrl; },
  "J$": function() { return /* binding */ useFetchJSON; },
  "B5": function() { return /* binding */ useLatestFirmwareRelease; },
  "ET": function() { return /* binding */ useLatestFirmwareReleases; },
  "Vv": function() { return /* binding */ useLatestReleaseAsset; },
  "Ux": function() { return /* binding */ useRepository; }
});

// UNUSED EXPORTS: GITHUB_API_KEY, fetchText, useLatestRelease

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./src/components/semver.ts
var semver = __webpack_require__(14914);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useFetch.ts



function useFetch(url, options) {
  var {
    0: response,
    1: setResponse
  } = (0,react.useState)(undefined); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var {
    0: error,
    1: setError
  } = (0,react.useState)(undefined);
  var {
    0: status,
    1: setStatus
  } = (0,react.useState)(undefined);
  var {
    0: loading,
    1: setLoading
  } = (0,react.useState)(true); // start in loading mode

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      setLoading(true);

      try {
        if (!url) {
          setStatus(404);
          setResponse(undefined);
        } else {
          var res = yield fetch(url, options);
          if (!mounted()) return;
          var _status = res.status;
          setStatus(_status);

          if (_status >= 200 && _status <= 204) {
            var json = yield res.json();
            if (!mounted()) return;
            setResponse(json);
          }
        }
      } catch (error) {
        if (!mounted()) return;
        setError(error);
      } finally {
        if (mounted()) setLoading(false);
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [url]);
  return {
    response,
    error,
    status,
    loading
  };
}
;// CONCATENATED MODULE: ./src/components/github.ts



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ROOT = "https://api.github.com/";
var GITHUB_API_KEY = "githubtoken";

function contentToFirmwareRelease(content) {
  var _$exec;

  // filter out non-file, non-uf2
  var version = (content === null || content === void 0 ? void 0 : content.type) === "file" && ((_$exec = /^fw-(\d+\.\d+.\d+)\.uf2$/.exec(content.name)) === null || _$exec === void 0 ? void 0 : _$exec[1]);
  if (!version) return undefined;
  return {
    version,
    sha: content.sha,
    size: content.size,
    html_url: content.html_url,
    download_url: content.download_url
  };
}

function contentsToFirmwareReleases(contents) {
  return contents === null || contents === void 0 ? void 0 : contents.map(contentToFirmwareRelease).filter(r => !!r).sort((l, r) => -(0,semver/* semverCmp */.k)(l.version, r.version));
}

function normalizeSlug(slug) {
  if (!slug) return {};
  var cleaned = slug.replace(/^https:\/\/github.com\//, "");
  var parts = cleaned.split("/");
  return {
    repoPath: parts[0] + "/" + parts[1],
    folder: parts.slice(2).join("/")
  };
}
function parseRepoUrl(url) {
  var m = /^https:\/\/github\.com\/([^/ \t]+)\/([^/ \t]+)\/?$/.exec(url || "");
  if (m) return {
    owner: m[1],
    name: m[2]
  };
  return undefined;
}
function fetchLatestFirmwareRelease(_x, _x2) {
  return _fetchLatestFirmwareRelease.apply(this, arguments);
}

function _fetchLatestFirmwareRelease() {
  _fetchLatestFirmwareRelease = (0,asyncToGenerator/* default */.Z)(function* (slug, options) {
    // https://api.github.com/repos/microsoft/jacdac-msr-modules/contents/dist
    var {
      repoPath
    } = normalizeSlug(slug);
    var uri = ROOT + "repos/" + repoPath + "/contents/dist";
    var resp = yield fetch(uri); //    console.log(resp)

    var {
      status
    } = resp;

    switch (status) {
      case 200:
      case 204:
        {
          var contents = yield resp.json();
          var releases = contentsToFirmwareReleases(contents);
          return {
            release: releases[0],
            status
          };
        }

      case 404:
        // unknow repo or no access
        return {
          status
        };

      case 403:
        // throttled
        if (options !== null && options !== void 0 && options.ignoreThrottled) return {
          status
        };
        throw new Error("Too many calls to GitHub, try again later");
    }

    throw new Error("unknown status code " + resp.status);
  });
  return _fetchLatestFirmwareRelease.apply(this, arguments);
}

function fetchFirmwareReleaseBinary(_x3, _x4) {
  return _fetchFirmwareReleaseBinary.apply(this, arguments);
}

function _fetchFirmwareReleaseBinary() {
  _fetchFirmwareReleaseBinary = (0,asyncToGenerator/* default */.Z)(function* (slug, version) {
    // we are not using the release api because of CORS.
    var {
      repoPath
    } = normalizeSlug(slug);
    var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/main/dist/fw-" + version + ".uf2";
    var req = yield fetch(downloadUrl, {
      headers: {
        Accept: "application/octet-stream"
      }
    });

    if (req.status == 200) {
      var firmware = yield req.blob();
      return firmware;
    }

    return undefined;
  });
  return _fetchFirmwareReleaseBinary.apply(this, arguments);
}

function fetchText(_x5, _x6, _x7, _x8) {
  return _fetchText.apply(this, arguments);
}

function _fetchText() {
  _fetchText = _asyncToGenerator(function* (slug, tag, path, mimeType) {
    var {
      repoPath,
      folder
    } = normalizeSlug(slug);
    var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
    var req = yield fetch(downloadUrl, {
      headers: {
        Accept: mimeType
      }
    });

    if (req.status == 200) {
      var src = yield req.text();
      return src;
    }

    return undefined;
  });
  return _fetchText.apply(this, arguments);
}

function useFetchApi(path, options) {
  var res = useFetch(path ? "" + ROOT + path : undefined);
  if (res.status !== undefined) switch (res.status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
      break;

    case 404:
      // unknow repo or no access
      res.response = undefined;
      break;

    case 403:
      // throttled
      if (options !== null && options !== void 0 && options.ignoreThrottled) {
        res.response = undefined;
        return res;
      } else throw new Error("Too many calls to GitHub, try again later");

    default:
      console.log("unknown status", res);
      throw new Error("Unknown response from GitHub " + res.status);
  }
  return res;
}

function useFetchJSON(slug, tag, path, mimeType) {
  var {
    repoPath,
    folder
  } = normalizeSlug(slug);
  var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
  return useFetch(downloadUrl, {
    headers: {
      Accept: mimeType
    }
  });
}
function useRepository(slug) {
  var {
    repoPath
  } = normalizeSlug(slug);
  var path = repoPath ? "repos/" + repoPath : undefined;
  var res = useFetchApi(path, {
    ignoreThrottled: true
  });
  return res;
}
function useLatestRelease(slug) {
  var {
    repoPath
  } = normalizeSlug(slug);
  var path = "repos/" + repoPath + "/releases/latest";
  var res = useFetchApi(path);
  return res;
}
function useLatestReleaseAsset(url) {
  var [, slug, filename] = /^https:\/\/github.com\/(.+)\/releases\/latest\/download\/(.+)$/i.exec(url) || []; //console.log(`asset slug`, { url, slug })

  if (!slug) return {
    status: 404
  };
  var {
    status,
    response
  } = useLatestRelease(slug);

  if (status === 200 && response) {
    var {
      tag_name,
      name
    } = response;
    return {
      name,
      version: tag_name,
      assertUrl: "https://github.com/" + slug + "/releases/download/" + tag_name + "/" + filename
    };
  } else return {};
}
function useLatestFirmwareRelease(slug, options) {
  var _resp$response;

  var resp = useLatestFirmwareReleases(slug, options);
  return _objectSpread(_objectSpread({}, resp), {}, {
    response: (_resp$response = resp.response) === null || _resp$response === void 0 ? void 0 : _resp$response[0]
  });
}
function useLatestFirmwareReleases(slug, options) {
  if (!slug) return {
    response: undefined,
    loading: false,
    error: undefined,
    status: undefined
  };
  var {
    repoPath
  } = normalizeSlug(slug);
  var uri = "repos/" + repoPath + "/contents/dist";
  var res = useFetchApi(uri, _objectSpread(_objectSpread({}, options || {}), {}, {
    ignoreThrottled: true
  }));
  return _objectSpread(_objectSpread({}, res), {}, {
    response: contentsToFirmwareReleases(res.response)
  });
}

/***/ }),

/***/ 14914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ semverCmp; }
/* harmony export */ });
function cmp(a, b) {
  if (!a) {
    if (!b) return 0;else return 1;
  } else if (!b) return -1;else {
    var d = a.major - b.major || a.minor - b.minor || a.patch - b.patch;
    if (d) return d;
    if (a.pre.length == 0 && b.pre.length > 0) return 1;
    if (a.pre.length > 0 && b.pre.length == 0) return -1;

    for (var i = 0; i < a.pre.length + 1; ++i) {
      var aa = a.pre[i];
      var bb = b.pre[i];
      if (!aa) {
        if (!bb) return 0;else return -1;
      } else if (!bb) return 1;else if (/^\d+$/.test(aa)) {
        if (/^\d+$/.test(bb)) {
          d = parseInt(aa) - parseInt(bb);
          if (d) return d;
        } else return -1;
      } else if (/^\d+$/.test(bb)) return 1;else {
        d = strcmp(aa, bb);
        if (d) return d;
      }
    }

    return 0;
  }
}

function tryParse(v) {
  if (!v) return null;

  if ("*" === v) {
    return {
      major: Number.MAX_SAFE_INTEGER,
      minor: Number.MAX_SAFE_INTEGER,
      patch: Number.MAX_SAFE_INTEGER,
      pre: [],
      build: []
    };
  }

  if (/^v\d/i.test(v)) v = v.slice(1);
  var m = /^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);
  if (m) return {
    major: parseInt(m[1]),
    minor: parseInt(m[2]),
    patch: parseInt(m[3]),
    pre: m[5] ? m[5].split(".") : [],
    build: m[7] ? m[7].split(".") : []
  };
  return null;
}

function strcmp(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;else return 1;
}

function semverCmp(a, b) {
  var aa = tryParse(a);
  var bb = tryParse(b);
  if (!aa && !bb) return strcmp(a, b);else return cmp(aa, bb);
}

/***/ }),

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13827);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24157);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67486);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87122);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32990);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);



function SelectWithLabel(props) {
  var {
    label,
    fullWidth,
    required,
    disabled,
    value,
    error,
    placeholder,
    onChange,
    onClose,
    children,
    helperText,
    type,
    none
  } = props;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var descrId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var id = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var hasDescr = !!helperText || !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    id: id,
    disabled: disabled,
    label: label,
    value: value,
    error: !!error,
    fullWidth: true,
    placeholder: placeholder,
    type: type,
    labelId: labelId,
    "aria-describedby": hasDescr ? descrId : undefined,
    onChange: onChange,
    onClose: onClose
  }, none !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    key: "none",
    value: ""
  }, none), children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    id: descrId
  }, error || helperText));
}

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ })

}]);
//# sourceMappingURL=913832d59ba65bf5a995efa1c4e48fc9101c7c83-91fd3965eac12a1a4b39.js.map