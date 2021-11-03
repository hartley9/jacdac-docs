"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5969,2860],{

/***/ 84571:
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
  d: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"
}), 'Keyboard');

exports.Z = _default;

/***/ }),

/***/ 25969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDKeyboard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4320);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91635);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50092);
/* harmony import */ var _ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82860);
/* harmony import */ var _mui_icons_material_Keyboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84571);








function DashboardHIDKeyboard(props) {
  var {
    service
  } = props;
  var {
    0: selector,
    1: setSelector
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: modifiers,
    1: setModifiers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None);

  var handleKeyChange = (newSelector, newModifiers) => {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
    var unpacked = [[[selector, modifiers, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardAction.Press */ .gBd.Press]]];
    var data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("r: u16 u8 u8", unpacked);
    yield service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardCmd.Key */ .Fnq.Key, data);
  }), [selector, modifiers, service]);
  var disabled = !selector && !modifiers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    variant: "outlined",
    title: "send keys",
    disabled: disabled,
    onClick: handleClick,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Keyboard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null)
  }, "Send keys")));
}

/***/ }),

/***/ 82860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KeyboardKeyInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98348);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81751);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91350);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41577);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20509);









var PREFIX = "KeyboardKeyInput";
var classes = {
  capture: PREFIX + "-capture",
  darkKeyboard: PREFIX + "-darkKeyboard",
  keyboard: PREFIX + "-keyboard"
};
var Root = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("div")(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["& ." + classes.capture]: {
      cursor: "pointer",
      "&:hover": {
        borderColor: theme.palette.primary.main
      },
      "&:focus": {
        borderColor: theme.palette.action.active
      }
    },
    ["& ." + classes.darkKeyboard]: {
      backgroundColor: "#333 !important",
      borderColor: "#777 !important",
      color: "white !important",
      "& .hg-button": {
        background: "rgba(0, 0, 0, 0.5) !important",
        color: "white"
      },
      "& .hg-button.buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    },
    ["& ." + classes.keyboard]: {
      "& .buttonSelected": {
        background: theme.palette.primary.dark + " !important",
        color: "white !important"
      }
    }
  };
});
function KeyboardKeyInput(props) {
  var {
    initialSelector,
    initialModifiers,
    selector,
    modifiers,
    onChange
  } = props;
  var uncontrolled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => selector === undefined || modifiers === undefined, []);
  var {
    0: selector_,
    1: setSelector_
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelector || 0);
  var {
    0: modifiers_,
    1: setModifiters_
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialModifiers || _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None);
  var {
    darkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var _keyboardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var theme = "hg-theme-default hg-layout-default " + (darkMode === "dark" ? classes.darkKeyboard : classes.keyboard);
  var {
    mobile
  } = (0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  var layoutName = mobile ? "mobile" : "default";
  var keyboardId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Me)();
  var layout = {
    default: ["{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}", "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} q w e r t y u i o p [ ] \\", "{capslock} a s d f g h j k l ; ' {enter}", "{shiftleft} z x c v b n m , . / {shiftright}", "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"],
    mobile: ["{escape} {f1} {f2} {f3} {f4} {f5}", "{f6} {f7} {f8} {f9} {f10} {f11} {f12}", "` 1 2 3 4 5 6", "7 8 9 0 - = {backspace}", "{tab} q w e r t", "y u i o p [ ] \\", "{capslock} a s d f g", "h j k l ; ' {enter}", "{shiftleft} z x c v b", "n m , . / {shiftright}", "{controlleft} {altleft} {metaleft} {space}", "{metaright} {altright}"]
  };
  var display = {
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "backspace ⌫",
    "{enter}": "enter ↵",
    "{capslock}": "caps lock ⇪",
    "{shiftleft}": "shift ⇧",
    "{shiftright}": "shift ⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘",
    "{space}": "⎵"
  };

  var handleKeyboardKeyPress = code => {
    code = code.toLowerCase().replace(/[{}]/g, "");
    var newSelector = selector_;
    var newModifiers = modifiers_;
    var msel = _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__/* .selectors */ .wl[code];
    var mcode = _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__/* .modifierCodes */ .db[code];

    if (msel) {
      if (msel === selector) newSelector = undefined;else newSelector = msel;
    } else {
      if (mcode) {
        if (newModifiers & mcode) newModifiers &= ~mcode;else newModifiers |= mcode;
      }
    }

    setSelector_(newSelector);
    setModifiters_(newModifiers);
    onChange(newSelector, newModifiers);
  }; // update external values


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selector !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled selector");
      setSelector_(selector);
    }
  }, [selector]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (modifiers !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled modifier");
      setModifiters_(modifiers);
    }
  }, [modifiers]);
  var value = (0,_jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__/* .renderKeyboardKey */ .OJ)(selector_, modifiers_, false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _keyboardRef$current;

    (_keyboardRef$current = _keyboardRef.current) === null || _keyboardRef$current === void 0 ? void 0 : _keyboardRef$current.addButtonTheme(value, "buttonSelected");
    return () => {
      var _keyboardRef$current2;

      return (_keyboardRef$current2 = _keyboardRef.current) === null || _keyboardRef$current2 === void 0 ? void 0 : _keyboardRef$current2.removeButtonTheme(value, "buttonSelected");
    };
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default()), {
    baseClass: keyboardId,
    keyboardRef: r => _keyboardRef.current = r,
    onKeyPress: handleKeyboardKeyPress,
    layout: layout,
    layoutName: layoutName,
    theme: theme,
    display: display,
    mergeDisplay: true
  }));
}

/***/ })

}]);
//# sourceMappingURL=5969-521d2122be11aa1cff79.js.map