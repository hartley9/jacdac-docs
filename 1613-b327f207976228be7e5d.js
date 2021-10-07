(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1613],{

/***/ 98468:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Accordion_Accordion; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(83878);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(59199);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(40181);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(25267);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return (0,arrayWithHoles/* default */.Z)(arr) || (0,iterableToArray/* default */.Z)(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || (0,nonIterableRest/* default */.Z)();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(39055);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(9866);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(12933);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js













var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
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
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion = /*#__PURE__*/react.forwardRef(function Accordion(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse/* default */.Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = react.useCallback(function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = react.Children.toArray(childrenProp),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react.useMemo(function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/react.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/react.createElement(AccordionContext/* default.Provider */.Z.Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/react.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? 0 : void 0;
/* harmony default export */ var Accordion_Accordion = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiAccordion'
})(Accordion));

/***/ }),

/***/ 9866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (false) {}

/* harmony default export */ __webpack_exports__["Z"] = (AccordionContext);

/***/ }),

/***/ 37171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails));

/***/ }),

/***/ 95371:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67055);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23729);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34621);
/* harmony import */ var _Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9866);


/* eslint-disable jsx-a11y/aria-role */








var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: theme.spacing(0, 2),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused, &$focusVisible': {
        backgroundColor: theme.palette.action.focus
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focused: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var AccordionSummary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$IconButtonProp = props.IconButtonProps,
      IconButtonProps = _props$IconButtonProp === void 0 ? {} : _props$IconButtonProp,
      onClick = props.onClick,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, ["children", "classes", "className", "expandIcon", "focusVisibleClassName", "IconButtonProps", "onClick"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, disabled && classes.disabled, expanded && classes.expanded),
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.focusVisible, classes.focused, focusVisibleClassName),
    onClick: handleChange,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.content, expanded && classes.expanded)
  }, children), expandIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(styles, {
  name: 'MuiAccordionSummary'
})(AccordionSummary));

/***/ }),

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80453);




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ 41212:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');

exports.Z = _default;

/***/ }),

/***/ 47739:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.Z = _default;

/***/ }),

/***/ 91547:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var register = __webpack_require__(91383);

var addHook = __webpack_require__(82667);

var removeHook = __webpack_require__(96210); // bind with array of arguments: https://stackoverflow.com/a/21792913


var bind = Function.bind;
var bindable = bind.bind(bind);

function bindApi(hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state]);
  hook.api = {
    remove: removeHookRef
  };
  hook.remove = removeHookRef;
  ['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind];
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
  });
}

function HookSingular() {
  var singularHookName = 'h';
  var singularHookState = {
    registry: {}
  };
  var singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}

function HookCollection() {
  var state = {
    registry: {}
  };
  var hook = register.bind(null, state);
  bindApi(hook, state);
  return hook;
}

var collectionHookDeprecationMessageDisplayed = false;

function Hook() {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
    collectionHookDeprecationMessageDisplayed = true;
  }

  return HookCollection();
}

Hook.Singular = HookSingular.bind();
Hook.Collection = HookCollection.bind();
module.exports = Hook; // expose constructors as a named property for TypeScript

module.exports.Hook = Hook;
module.exports.Singular = Hook.Singular;
module.exports.Collection = Hook.Collection;

/***/ }),

/***/ 82667:
/***/ (function(module) {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;

  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function hook(method, options) {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function hook(method, options) {
      var result;
      return Promise.resolve().then(method.bind(null, options)).then(function (result_) {
        result = result_;
        return orig(result, options);
      }).then(function () {
        return result;
      });
    };
  }

  if (kind === "error") {
    hook = function hook(method, options) {
      return Promise.resolve().then(method.bind(null, options)).catch(function (error) {
        return orig(error, options);
      });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig
  });
}

/***/ }),

/***/ 91383:
/***/ (function(module) {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}

/***/ }),

/***/ 96210:
/***/ (function(module) {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name].map(function (registered) {
    return registered.orig;
  }).indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}

/***/ }),

/***/ 20918:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wrappy = __webpack_require__(39262);

module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function value() {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function value() {
      return onceStrict(this);
    },
    configurable: true
  });
});

function once(fn) {
  var f = function f() {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  f.called = false;
  return f;
}

function onceStrict(fn) {
  var f = function f() {
    if (f.called) throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  var name = fn.name || 'Function wrapped with `once`';
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}

/***/ }),

/***/ 39262:
/***/ (function(module) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;

function wrappy(fn, cb) {
  if (fn && cb) return wrappy(fn)(cb);
  if (typeof fn !== 'function') throw new TypeError('need wrapper function');
  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });
  return wrapper;

  function wrapper() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    var ret = fn.apply(this, args);
    var cb = args[args.length - 1];

    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }

    return ret;
  }
}

/***/ }),

/***/ 31613:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ GithubPullRequestButton; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
;// CONCATENATED MODULE: ./node_modules/universal-user-agent/dist-web/index.js
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if (typeof process === "object" && "version" in process) {
    return "Node.js/".concat(process.version.substr(1), " (").concat(process.platform, "; ").concat(process.arch, ")");
  }

  return "<environment undetectable>";
}


// EXTERNAL MODULE: ./node_modules/before-after-hook/index.js
var before_after_hook = __webpack_require__(91547);
;// CONCATENATED MODULE: ./node_modules/@octokit/endpoint/node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  prot = ctor.prototype;
  if (isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}


;// CONCATENATED MODULE: ./node_modules/@octokit/endpoint/dist-web/index.js



function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  var result = Object.assign({}, defaults);
  Object.keys(options).forEach(key => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, {
        [key]: options[key]
      });else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, {
        [key]: options[key]
      });
    }
  });
  return result;
}

function removeUndefinedProperties(obj) {
  for (var key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    var [method, url] = route.split(" ");
    options = Object.assign(url ? {
      method,
      url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging

  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  var mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(preview => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(preview => preview.replace(/-preview/, ""));
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  var separator = /\?/.test(url) ? "&" : "?";
  var names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(name => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return "".concat(name, "=").concat(encodeURIComponent(parameters[name]));
  }).join("&");
}

var urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  var matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(option => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
} // Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */


function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        var tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      var operator = "";
      var values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  var method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  var url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  var headers = Object.assign({}, options.headers);
  var body;
  var parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  var urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  var omittedParameters = Object.keys(options).filter(option => urlVariableNames.includes(option)).concat("baseUrl");
  var remainingParameters = omit(parameters, omittedParameters);
  var isBinaryRequest = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(preview => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, "application/vnd$1$2.".concat(options.mediaType.format))).join(",");
    }

    if (options.mediaType.previews.length) {
      var previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(preview => {
        var format = options.mediaType.format ? ".".concat(options.mediaType.format) : "+json";
        return "application/vnd.github.".concat(preview, "-preview").concat(format);
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method,
    url,
    headers
  }, typeof body !== "undefined" ? {
    body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  var DEFAULTS = merge(oldDefaults, newDefaults);
  var endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse
  });
}

var VERSION = "6.0.12";
var userAgent = "octokit-endpoint.js/".concat(VERSION, " ").concat(getUserAgent()); // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};
var endpoint = withDefaults(null, DEFAULTS);

;// CONCATENATED MODULE: ./node_modules/@octokit/request/node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function is_plain_object_isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function is_plain_object_isPlainObject(o) {
  var ctor, prot;
  if (is_plain_object_isObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  prot = ctor.prototype;
  if (is_plain_object_isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}


// EXTERNAL MODULE: ./node_modules/node-fetch/browser.js
var browser = __webpack_require__(76474);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./node_modules/deprecation/dist-web/index.js
class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}


// EXTERNAL MODULE: ./node_modules/once/once.js
var once = __webpack_require__(20918);
var once_default = /*#__PURE__*/__webpack_require__.n(once);
;// CONCATENATED MODULE: ./node_modules/@octokit/request-error/dist-web/index.js


var logOnceCode = once_default()(deprecation => console.warn(deprecation));
var logOnceHeaders = once_default()(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    var headers;

    if ("headers" in options && typeof options.headers !== "undefined") {
      headers = options.headers;
    }

    if ("response" in options) {
      this.response = options.response;
      headers = options.response.headers;
    } // redact request credentials without mutating original request options


    var requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy; // deprecations

    Object.defineProperty(this, "code", {
      get() {
        logOnceCode(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    Object.defineProperty(this, "headers", {
      get() {
        logOnceHeaders(new Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
        return headers || {};
      }

    });
  }

}


;// CONCATENATED MODULE: ./node_modules/@octokit/request/dist-web/index.js






var dist_web_VERSION = "5.6.1";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  var log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;

  if (is_plain_object_isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  var headers = {};
  var status;
  var url;
  var fetch = requestOptions.request && requestOptions.request.fetch || (browser_default());
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, // `requestOptions.request.agent` type is incompatible
  // see https://github.com/octokit/types.ts/pull/264
  requestOptions.request)).then( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (response) {
      url = response.url;
      status = response.status;

      for (var keyAndValue of response.headers) {
        headers[keyAndValue[0]] = keyAndValue[1];
      }

      if ("deprecation" in headers) {
        var matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
        var deprecationLink = matches && matches.pop();
        log.warn("[@octokit/request] \"".concat(requestOptions.method, " ").concat(requestOptions.url, "\" is deprecated. It is scheduled to be removed on ").concat(headers.sunset).concat(deprecationLink ? ". See ".concat(deprecationLink) : ""));
      }

      if (status === 204 || status === 205) {
        return;
      } // GitHub API returns 200 for HEAD requests


      if (requestOptions.method === "HEAD") {
        if (status < 400) {
          return;
        }

        throw new RequestError(response.statusText, status, {
          response: {
            url,
            status,
            headers,
            data: undefined
          },
          request: requestOptions
        });
      }

      if (status === 304) {
        throw new RequestError("Not modified", status, {
          response: {
            url,
            status,
            headers,
            data: yield getResponseData(response)
          },
          request: requestOptions
        });
      }

      if (status >= 400) {
        var data = yield getResponseData(response);
        var error = new RequestError(toErrorMessage(data), status, {
          response: {
            url,
            status,
            headers,
            data
          },
          request: requestOptions
        });
        throw error;
      }

      return getResponseData(response);
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()).then(data => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch(error => {
    if (error instanceof RequestError) throw error;
    throw new RequestError(error.message, 500, {
      request: requestOptions
    });
  });
}

function getResponseData(_x2) {
  return _getResponseData.apply(this, arguments);
}

function _getResponseData() {
  _getResponseData = (0,asyncToGenerator/* default */.Z)(function* (response) {
    var contentType = response.headers.get("content-type");

    if (/application\/json/.test(contentType)) {
      return response.json();
    }

    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
      return response.text();
    }

    return getBufferResponse(response);
  });
  return _getResponseData.apply(this, arguments);
}

function toErrorMessage(data) {
  if (typeof data === "string") return data; // istanbul ignore else - just in case

  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return "".concat(data.message, ": ").concat(data.errors.map(JSON.stringify).join(", "));
    }

    return data.message;
  } // istanbul ignore next - just in case


  return "Unknown error: ".concat(JSON.stringify(data));
}

function dist_web_withDefaults(oldEndpoint, newDefaults) {
  var endpoint = oldEndpoint.defaults(newDefaults);

  var newApi = function newApi(route, parameters) {
    var endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    var request = (route, parameters) => {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint,
      defaults: dist_web_withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint,
    defaults: dist_web_withDefaults.bind(null, endpoint)
  });
}

var request = dist_web_withDefaults(endpoint, {
  headers: {
    "user-agent": "octokit-request.js/".concat(dist_web_VERSION, " ").concat(getUserAgent())
  }
});

;// CONCATENATED MODULE: ./node_modules/@octokit/graphql/dist-web/index.js


var graphql_dist_web_VERSION = "4.8.0";

function _buildMessageForResponseErrors(data) {
  return "Request failed due to following response errors:\n" + data.errors.map(e => " - ".concat(e.message)).join("\n");
}

class GraphqlResponseError extends Error {
  constructor(request, headers, response) {
    super(_buildMessageForResponseErrors(response));
    this.request = request;
    this.headers = headers;
    this.response = response;
    this.name = "GraphqlResponseError"; // Expose the errors and response data in their shorthand properties.

    this.errors = response.errors;
    this.data = response.data; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

var NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
var FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;

function graphql(request, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error("[@octokit/graphql] \"query\" cannot be used as variable name"));
    }

    for (var key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
      return Promise.reject(new Error("[@octokit/graphql] \"".concat(key, "\" cannot be used as variable name")));
    }
  }

  var parsedOptions = typeof query === "string" ? Object.assign({
    query
  }, options) : query;
  var requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = parsedOptions[key];
    return result;
  }, {}); // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
  // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

  var baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;

  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }

  return request(requestOptions).then(response => {
    if (response.data.errors) {
      var headers = {};

      for (var _key of Object.keys(response.headers)) {
        headers[_key] = response.headers[_key];
      }

      throw new GraphqlResponseError(requestOptions, headers, response.data);
    }

    return response.data.data;
  });
}

function graphql_dist_web_withDefaults(request$1, newDefaults) {
  var newRequest = request$1.defaults(newDefaults);

  var newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: graphql_dist_web_withDefaults.bind(null, newRequest),
    endpoint: request.endpoint
  });
}

var graphql$1 = graphql_dist_web_withDefaults(request, {
  headers: {
    "user-agent": "octokit-graphql.js/".concat(graphql_dist_web_VERSION, " ").concat(getUserAgent())
  },
  method: "POST",
  url: "/graphql"
});

function withCustomRequest(customRequest) {
  return graphql_dist_web_withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}


;// CONCATENATED MODULE: ./node_modules/@octokit/auth-token/dist-web/index.js


function auth(_x) {
  return _auth.apply(this, arguments);
}
/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */


function _auth() {
  _auth = (0,asyncToGenerator/* default */.Z)(function* (token) {
    var tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
    return {
      type: "token",
      token: token,
      tokenType
    };
  });
  return _auth.apply(this, arguments);
}

function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return "bearer ".concat(token);
  }

  return "token ".concat(token);
}

function hook(_x2, _x3, _x4, _x5) {
  return _hook.apply(this, arguments);
}

function _hook() {
  _hook = (0,asyncToGenerator/* default */.Z)(function* (token, request, route, parameters) {
    var endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = withAuthorizationPrefix(token);
    return request(endpoint);
  });
  return _hook.apply(this, arguments);
}

var createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};


;// CONCATENATED MODULE: ./node_modules/@octokit/core/dist-web/index.js


var _excluded = ["authStrategy"];





var core_dist_web_VERSION = "3.5.1";

class Octokit {
  constructor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var hook = new before_after_hook.Collection();
    var requestDefaults = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    }; // prepend default user agent with `options.userAgent` if set

    requestDefaults.headers["user-agent"] = [options.userAgent, "octokit-core.js/".concat(core_dist_web_VERSION, " ").concat(getUserAgent())].filter(Boolean).join(" ");

    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }

    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }

    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }

    this.request = request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {},
      info: () => {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
    // (2) If only `options.auth` is set, use the default token authentication strategy.
    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
    // TODO: type `options.auth` based on `options.authStrategy`.

    if (!options.authStrategy) {
      if (!options.auth) {
        // (1)
        this.auth = /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
          return {
            type: "unauthenticated"
          };
        });
      } else {
        // (2)
        var auth = createTokenAuth(options.auth); // @ts-ignore  ¯\_(ツ)_/¯

        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      var {
        authStrategy
      } = options,
          otherOptions = (0,objectWithoutProperties/* default */.Z)(options, _excluded);

      var _auth = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        // we pass the current octokit instance as well as its constructor options
        // to allow for authentication strategies that return a new octokit instance
        // that shares the same internal state as the current one. The original
        // requirement for this was the "event-octokit" authentication strategy
        // of https://github.com/probot/octokit-auth-probot.
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯


      hook.wrap("request", _auth.hook);
      this.auth = _auth;
    } // apply plugins
    // https://stackoverflow.com/a/16345172


    var classConstructor = this.constructor;
    classConstructor.plugins.forEach(plugin => {
      Object.assign(this, plugin(this, options));
    });
  }

  static defaults(defaults) {
    var OctokitWithDefaults = class extends this {
      constructor() {
        var options = (arguments.length <= 0 ? undefined : arguments[0]) || {};

        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }

        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: "".concat(options.userAgent, " ").concat(defaults.userAgent)
        } : null));
      }

    };
    return OctokitWithDefaults;
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */


  static plugin() {
    var _a;

    var currentPlugins = this.plugins;

    for (var _len = arguments.length, newPlugins = new Array(_len), _key = 0; _key < _len; _key++) {
      newPlugins[_key] = arguments[_key];
    }

    var NewOctokit = (_a = class extends this {}, _a.plugins = currentPlugins.concat(newPlugins.filter(plugin => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }

}

Octokit.VERSION = core_dist_web_VERSION;
Octokit.plugins = [];

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./node_modules/octokit-plugin-create-pull-request/dist-web/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function valueToTreeObject(_x, _x2, _x3, _x4, _x5) {
  return _valueToTreeObject.apply(this, arguments);
}

function _valueToTreeObject() {
  _valueToTreeObject = (0,asyncToGenerator/* default */.Z)(function* (octokit, owner, repo, path, value) {
    // Text files can be changed through the .content key
    if (typeof value === "string") {
      return {
        path,
        mode: "100644",
        content: value
      };
    } // Binary files need to be created first using the git blob API,
    // then changed by referencing in the .sha key


    var {
      data
    } = yield octokit.request("POST /repos/{owner}/{repo}/git/blobs", _objectSpread({
      owner,
      repo
    }, value));
    var blobSha = data.sha;
    return {
      path,
      mode: "100644",
      sha: blobSha
    };
  });
  return _valueToTreeObject.apply(this, arguments);
}

function createTree(_x6, _x7) {
  return _createTree.apply(this, arguments);
}

function _createTree() {
  _createTree = (0,asyncToGenerator/* default */.Z)(function* (state, changes) {
    var {
      octokit,
      owner,
      repo,
      fork,
      latestCommitSha,
      latestCommitTreeSha
    } = state;
    var tree = (yield Promise.all(Object.keys(changes.files).map( /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (path) {
        var value = changes.files[path];

        if (value === null) {
          // Deleting a non-existent file from a tree leads to an "GitRPC::BadObjectState" error,
          // so we only attempt to delete the file if it exists.
          try {
            // https://developer.github.com/v3/repos/contents/#get-contents
            yield octokit.request("HEAD /repos/{owner}/{repo}/contents/:path", {
              owner: fork,
              repo,
              ref: latestCommitSha,
              path
            });
            return {
              path,
              mode: "100644",
              sha: null
            };
          } catch (error) {
            return;
          }
        } // When passed a function, retrieve the content of the file, pass it
        // to the function, then return the result


        if (typeof value === "function") {
          var result;

          try {
            var {
              data: file
            } = yield octokit.request("GET /repos/{owner}/{repo}/contents/:path", {
              owner: fork,
              repo,
              ref: latestCommitSha,
              path
            });
            result = yield value(Object.assign(file, {
              exists: true
            }));
          } catch (error) {
            // istanbul ignore if
            if (error.status !== 404) throw error; // @ts-ignore

            result = yield value({
              exists: false
            });
          }

          if (result === null || typeof result === "undefined") return;
          return valueToTreeObject(octokit, owner, repo, path, result);
        }

        return valueToTreeObject(octokit, owner, repo, path, value);
      });

      return function (_x13) {
        return _ref2.apply(this, arguments);
      };
    }()))).filter(Boolean);

    if (tree.length === 0) {
      return null;
    } // https://developer.github.com/v3/git/trees/#create-a-tree


    var {
      data: {
        sha: newTreeSha
      }
    } = yield octokit.request("POST /repos/{owner}/{repo}/git/trees", {
      owner: fork,
      repo,
      base_tree: latestCommitTreeSha,
      tree
    });
    return newTreeSha;
  });
  return _createTree.apply(this, arguments);
}

function createCommit(_x8, _x9, _x10) {
  return _createCommit.apply(this, arguments);
}

function _createCommit() {
  _createCommit = (0,asyncToGenerator/* default */.Z)(function* (state, treeCreated, changes) {
    var {
      octokit,
      repo,
      fork,
      latestCommitSha
    } = state;
    var message = treeCreated ? changes.commit : typeof changes.emptyCommit === "string" ? changes.emptyCommit : changes.commit; // https://developer.github.com/v3/git/commits/#create-a-commit

    var {
      data: latestCommit
    } = yield octokit.request("POST /repos/{owner}/{repo}/git/commits", {
      owner: fork,
      repo,
      message,
      tree: state.latestCommitTreeSha,
      parents: [latestCommitSha]
    });
    return latestCommit.sha;
  });
  return _createCommit.apply(this, arguments);
}

function composeCreatePullRequest(_x11, _x12) {
  return _composeCreatePullRequest.apply(this, arguments);
}

function _composeCreatePullRequest() {
  _composeCreatePullRequest = (0,asyncToGenerator/* default */.Z)(function* (octokit, _ref) {
    var {
      owner,
      repo,
      title,
      body,
      base,
      head,
      createWhenEmpty,
      changes: changesOption,
      draft = false
    } = _ref;
    var changes = Array.isArray(changesOption) ? changesOption : [changesOption];
    if (changes.length === 0) throw new Error('[octokit-plugin-create-pull-request] "changes" cannot be an empty array');
    var state = {
      octokit,
      owner,
      repo
    }; // https://developer.github.com/v3/repos/#get-a-repository

    var {
      data: repository,
      headers
    } = yield octokit.request("GET /repos/{owner}/{repo}", {
      owner,
      repo
    });
    var isUser = !!headers["x-oauth-scopes"];

    if (!repository.permissions) {
      throw new Error("[octokit-plugin-create-pull-request] Missing authentication");
    }

    if (!base) {
      base = repository.default_branch;
    }

    state.fork = owner;

    if (isUser && !repository.permissions.push) {
      // https://developer.github.com/v3/users/#get-the-authenticated-user
      var user = yield octokit.request("GET /user"); // https://developer.github.com/v3/repos/forks/#list-forks

      var forks = yield octokit.request("GET /repos/{owner}/{repo}/forks", {
        owner,
        repo
      });
      var hasFork = forks.data.find(
      /* istanbul ignore next - fork owner can be null, but we don't test that */
      fork => fork.owner && fork.owner.login === user.data.login);

      if (!hasFork) {
        // https://developer.github.com/v3/repos/forks/#create-a-fork
        yield octokit.request("POST /repos/{owner}/{repo}/forks", {
          owner,
          repo
        });
      }

      state.fork = user.data.login;
    } // https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository


    var {
      data: [latestCommit]
    } = yield octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner,
      repo,
      sha: base,
      per_page: 1
    });
    state.latestCommitSha = latestCommit.sha;
    state.latestCommitTreeSha = latestCommit.commit.tree.sha;
    var baseCommitTreeSha = latestCommit.commit.tree.sha;

    for (var change of changes) {
      var treeCreated = false;

      if (change.files && Object.keys(change.files).length) {
        var latestCommitTreeSha = yield createTree(state, change);

        if (latestCommitTreeSha) {
          state.latestCommitTreeSha = latestCommitTreeSha;
          treeCreated = true;
        }
      }

      if (treeCreated || change.emptyCommit !== false) {
        state.latestCommitSha = yield createCommit(state, treeCreated, change);
      }
    }

    var hasNoChanges = baseCommitTreeSha === state.latestCommitTreeSha;

    if (hasNoChanges && createWhenEmpty === false) {
      return null;
    } // https://developer.github.com/v3/git/refs/#create-a-reference


    yield octokit.request("POST /repos/{owner}/{repo}/git/refs", {
      owner: state.fork,
      repo,
      sha: state.latestCommitSha,
      ref: "refs/heads/".concat(head)
    }); // https://developer.github.com/v3/pulls/#create-a-pull-request

    return yield octokit.request("POST /repos/{owner}/{repo}/pulls", {
      owner,
      repo,
      head: "".concat(state.fork, ":").concat(head),
      base,
      title,
      body,
      draft
    });
  });
  return _composeCreatePullRequest.apply(this, arguments);
}

var octokit_plugin_create_pull_request_dist_web_VERSION = "3.9.3";
/**
 * @param octokit Octokit instance
 */

function createPullRequest(octokit) {
  return {
    createPullRequest: composeCreatePullRequest.bind(null, octokit)
  };
}

createPullRequest.VERSION = octokit_plugin_create_pull_request_dist_web_VERSION;

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(32253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GitHub.js
var GitHub = __webpack_require__(14429);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(98468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(95371);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 12 modules
var Box = __webpack_require__(91448);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(37171);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionActions/AccordionActions.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var AccordionActions = /*#__PURE__*/react.forwardRef(function AccordionActions(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "disableSpacing"]);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionActions_AccordionActions = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiAccordionActions'
})(AccordionActions));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(47739);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__(41212);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/ApiKeyAccordion.tsx





 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports




function ApiKeyAccordion(props) {
  var {
    validateKey,
    title,
    children,
    defaultExpanded,
    apiKey,
    setApiKey
  } = props;
  var apiKeyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var {
    0: key,
    1: setKey
  } = (0,react.useState)("");
  var {
    0: expanded,
    1: setExpanded
  } = (0,react.useState)(!apiKey || defaultExpanded);
  var {
    0: validated,
    1: setValidated
  } = (0,react.useState)(false);
  var {
    enqueueSnackbar
  } = (0,react.useContext)(AppContext/* default */.ZP);
  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      if (!apiKey) {
        setValidated(false);
      } else {
        var {
          status
        } = validateKey ? yield validateKey(apiKey) : {
          status: 200
        };
        if (!mounted()) return;

        if (status === 200) {
          setValidated(true);
          setExpanded(false);
        } else {
          setValidated(false);
          if (status === 403) setApiKey(undefined);
        }
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [apiKey]);

  var handleApiChange = event => {
    setKey(event.target.value);
  };

  var handleSave = () => {
    setApiKey(key);
    setKey("");
    enqueueSnackbar("key saved...");
  };

  var handleReset = () => {
    setApiKey("");
    enqueueSnackbar("key cleared...");
  };

  var handleExpanded = () => {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded,
    onChange: handleExpanded
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, (title || "API key") + " Configuration"), validated && /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    color: "success.main"
  }, /*#__PURE__*/react.createElement(CheckCircleOutline/* default */.Z, null))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, {
    style: {
      display: "block"
    }
  }, validated && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "API key ready!"), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "caption"
  }, children), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: apiKeyId,
    label: "API key",
    fullWidth: true,
    value: key,
    type: "password",
    onChange: handleApiChange
  })), /*#__PURE__*/react.createElement(AccordionActions_AccordionActions, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "save api key",
    disabled: !key,
    variant: "contained",
    color: "primary",
    onClick: handleSave
  }, "Save"), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "clear api key",
    disabled: !apiKey,
    variant: "contained",
    onClick: handleReset
  }, "Clear")));
}
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
;// CONCATENATED MODULE: ./src/components/buttons/GithubPullRequestButton.tsx













function GithubPullRequestButton(props) {
  var {
    files,
    label = "Create Pull Request",
    title,
    description,
    head
  } = props;
  var {
    1: setResponse
  } = (0,react.useState)(undefined);
  var {
    0: busy,
    1: setBusy
  } = (0,react.useState)(false);
  var {
    0: githubToken,
    1: setGithubToken
  } = (0,react.useState)("");
  var {
    setError: setAppError,
    enqueueSnackbar
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    0: confirmDialog,
    1: setConfirmDialog
  } = (0,react.useState)(false);
  var bodyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var {
    0: body,
    1: setBody
  } = (0,react.useState)(description);
  var headSuffix = (0,react.useMemo)(() => (0,utils/* toHex */.NC)((0,random/* anyRandomUint32 */.RO)(2)), []);
  var disabled = busy || !body || !title || !head || !files || !Object.keys(files).length;

  var handleOpenConfirm = () => setConfirmDialog(true);

  var handleCloseConfirm = () => setConfirmDialog(false);

  var handleBodyChange = ev => setBody(ev.target.value);

  var handleCreatePullRequest = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      enqueueSnackbar("creating pull request...");
      setBusy(true);
      setConfirmDialog(false);

      try {
        var MyOctokit = Octokit.plugin(createPullRequest);
        var octokit = new MyOctokit({
          auth: githubToken
        }); // Returns a normal Octokit PR response
        // See https://octokit.github.io/rest.js/#octokit-routes-pulls-create

        var result = yield octokit.createPullRequest({
          owner: "microsoft",
          repo: "jacdac",
          title,
          body,
          head: head + "/" + headSuffix,
          changes: [{
            files,
            commit: "added files"
          }]
        });

        if (result.status === 201) {
          setResponse(result.data);
          var url = result.data.html_url;
          var id = result.data.number;
          enqueueSnackbar( /*#__PURE__*/react.createElement(Typography/* default */.Z, {
            component: "span"
          }, "Pull Request", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
            target: "_blank",
            rel: "no-referrer no-follower",
            href: url
          }, "#", id), " ", "created..."), "success");
        } else {
          setResponse(undefined);
        }
      } catch (e) {
        setAppError(e);
      } finally {
        setBusy(false);
      }
    });

    return function handleCreatePullRequest() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, !description && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: bodyId,
    label: "message",
    "aria-label": "Description of the changes",
    placeholder: "Describe your changes",
    fullWidth: true,
    value: body,
    onChange: handleBodyChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    disabled: disabled,
    color: "primary",
    variant: "contained",
    onClick: handleOpenConfirm,
    startIcon: busy ? /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null) : /*#__PURE__*/react.createElement(GitHub/* default */.Z, null)
  }, label))), /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: confirmDialog,
    onClose: handleCloseConfirm
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, "We will open a new Pull Request in", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "https://github.com/microsoft/jacdac",
    rel: "noreferrer nofollower"
  }, "microsoft/jacdac"), " ", "with your files. If needed, we will fork", " ", /*#__PURE__*/react.createElement("code", null, "microsoft/jacdac"), " under your account and create a Pull Request in that repository."), /*#__PURE__*/react.createElement(ApiKeyAccordion, {
    title: "GitHub Developer Token",
    apiKey: githubToken,
    setApiKey: setGithubToken
  }, "Open", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    target: "_blank",
    href: "https://github.com/settings/tokens/new",
    rel: "noreferrer nofollower"
  }, "https://github.com/settings/tokens/new"), " ", "and generate a new personal access token with **repo** scope.")), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleCreatePullRequest,
    disabled: disabled || !githubToken,
    "aria-label": "create pull request"
  }, "create pull request"))));
}

/***/ })

}]);
//# sourceMappingURL=1613-b327f207976228be7e5d.js.map