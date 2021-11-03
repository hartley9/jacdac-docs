"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2470],{

/***/ 58423:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ InputAdornment_InputAdornment; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(26759);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(8230);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js

function getInputAdornmentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiInputAdornment', slot);
}
var inputAdornmentClasses = (0,generateUtilityClasses/* default */.Z)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
/* harmony default export */ var InputAdornment_inputAdornmentClasses = (inputAdornmentClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js


var _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];













var overridesResolver = (props, styles) => {
  var {
    ownerState
  } = props;
  return [styles.root, styles["position".concat((0,capitalize/* default */.Z)(ownerState.position))], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};

var useUtilityClasses = ownerState => {
  var {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  var slots = {
    root: ['root', disablePointerEvents && 'disablePointerEvents', position && "position".concat((0,capitalize/* default */.Z)(position)), variant, hiddenLabel && 'hiddenLabel', size && "size".concat((0,capitalize/* default */.Z)(size))]
  };
  return (0,composeClasses/* default */.Z)(slots, getInputAdornmentUtilityClass, classes);
};

var InputAdornmentRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiInputAdornment',
  slot: 'Root',
  overridesResolver
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    height: '0.01em',
    // Fix IE11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    color: theme.palette.action.active
  }, ownerState.variant === 'filled' && {
    // Styles applied to the root element if `variant="filled"`.
    ["&.".concat(InputAdornment_inputAdornmentClasses.positionStart, "&:not(.").concat(InputAdornment_inputAdornmentClasses.hiddenLabel, ")")]: {
      marginTop: 16
    }
  }, ownerState.position === 'start' && {
    // Styles applied to the root element if `position="start"`.
    marginRight: 8
  }, ownerState.position === 'end' && {
    // Styles applied to the root element if `position="end"`.
    marginLeft: 8
  }, ownerState.disablePointerEvents === true && {
    // Styles applied to the root element if `disablePointerEvents={true}`.
    pointerEvents: 'none'
  });
});
var InputAdornment = /*#__PURE__*/react.forwardRef(function InputAdornment(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiInputAdornment'
  });

  var {
    children,
    className,
    component = 'div',
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var muiFormControl = (0,useFormControl/* default */.Z)() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default.Provider */.Z.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornmentRoot, (0,esm_extends/* default */.Z)({
      as: component,
      ownerState: ownerState,
      className: (0,clsx_m["default"])(classes.root, className),
      ref: ref
    }, other, {
      children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "text.secondary",
        children: children
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [position === 'start' ?
        /*#__PURE__*/

        /* notranslate needed while Google Translate will not fix zero-width space issue */

        /* eslint-disable-next-line react/no-danger */
        (0,jsx_runtime.jsx)("span", {
          className: "notranslate",
          dangerouslySetInnerHTML: {
            __html: '&#8203;'
          }
        }) : null, children]
      })
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var InputAdornment_InputAdornment = (InputAdornment);

/***/ }),

/***/ 32470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DrawerSearchInput; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65970);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58423);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35853);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71973);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81794);

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports







function DrawerSearchInput() {
  var {
    searchQuery,
    setSearchQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);
  var {
    0: focused,
    1: setFocused
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var textId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();

  var handleChange = event => {
    setSearchQuery(event.target.value);
  };

  var handleClear = () => setSearchQuery("");

  var handleFocus = () => setFocused(true);

  var handleBlur = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__/* .delay */ .gw)(200);
      setFocused(false);
    });

    return function handleBlur() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    id: textId,
    label: "Search",
    margin: "normal",
    variant: "outlined",
    type: "search",
    size: "small",
    "aria-label": "Search documentation",
    value: searchQuery,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    InputProps: focused ? {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        trackName: "search.clear",
        title: "clear",
        size: "small",
        onClick: handleClear
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null)))
    } : undefined
  });
}

/***/ })

}]);
//# sourceMappingURL=2470-7e4aa3ea5649d30e516c.js.map