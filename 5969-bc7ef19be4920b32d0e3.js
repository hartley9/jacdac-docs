"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5969,2860],{

/***/ 86481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80838);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91635);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50092);
/* harmony import */ var _ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82860);
/* harmony import */ var _material_ui_icons_Keyboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86481);
/* harmony import */ var _select_SelectEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16354);
/* harmony import */ var _hooks_useEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50010);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20392);













function DashboardHIDKeyboard(props) {
  var {
    service
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
  var {
    0: selector,
    1: setSelector
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: modifiers,
    1: setModifiers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None);
  var {
    0: triggerEventId,
    1: setTriggerEventId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var events = (0,_hooks_useEvents__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
    ignoreChange: true
  });

  var handleKeyChange = (newSelector, newModifiers) => {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function* () {
    var unpacked = [[[selector, modifiers, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardAction.Press */ .gBd.Press]]];
    var data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("r: u16 u8 u8", unpacked);
    yield service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardCmd.Key */ .Fnq.Key, data);
  }), [selector, modifiers, service]);
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(bus, () => {
    var triggerEvent = bus.node(triggerEventId);
    console.log({
      triggerEventId,
      triggerEvent,
      selector,
      modifiers
    });
    var un = triggerEvent === null || triggerEvent === void 0 ? void 0 : triggerEvent.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_8__/* .EVENT */ .Ks0, handleClick);
    return () => un === null || un === void 0 ? void 0 : un();
  }, [triggerEventId, handleClick]);
  var disabled = !selector && !modifiers;

  var handleTriggerChange = eventId => setTriggerEventId(eventId);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    variant: "outlined",
    title: "send keys",
    disabled: disabled,
    onClick: handleClick,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Keyboard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null)
  }, "Send keys")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_select_SelectEvent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    events: events,
    eventId: triggerEventId,
    onChange: handleTriggerChange,
    label: "Choose Send Key event",
    friendlyName: true
  })))));
}

/***/ }),

/***/ 50010:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEvents; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81794);
/* harmony import */ var _useServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2928);



function useEvents(options) {
  var {
    ignoreChange
  } = options || {};
  var services = (0,_useServices__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(options);
  var events = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayConcatMany */ .ue)(services.map(srv => srv.events));
  if (ignoreChange) events = events.filter(ev => ev.code !== _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SystemEvent.StatusCodeChanged */ .nSK.StatusCodeChanged && ev.code !== _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SystemEvent.Change */ .nSK.Change);
  return events;
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(bus, _ => (_ === null || _ === void 0 ? void 0 : _.services(options)) || [], [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 16354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65541);
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15789);



function SelectEvent(props) {
  var {
    events,
    eventId,
    onChange,
    friendlyName,
    label
  } = props;

  var handleChange = ev => {
    onChange(ev.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    helperText: label || "choose an event",
    value: eventId,
    onChange: handleChange,
    disabled: !(events !== null && events !== void 0 && events.length),
    none: "None"
  }, events === null || events === void 0 ? void 0 : events.map(ev => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    key: ev.id,
    value: ev.id
  }, friendlyName ? ev.friendlyName : ev.name)));
}

/***/ }),

/***/ 82860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KeyboardKeyInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70274);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81751);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91350);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41577);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20509);









var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
  capture: {
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.palette.primary.main
    },
    "&:focus": {
      borderColor: theme.palette.action.active
    }
  },
  darkKeyboard: {
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
  keyboard: {
    "& .buttonSelected": {
      background: theme.palette.primary.dark + " !important",
      color: "white !important"
    }
  }
}));
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

  var classes = useStyles();
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
    "{metaright}": "cmd ⌘"
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default()), {
    baseClass: keyboardId,
    keyboardRef: r => _keyboardRef.current = r,
    onKeyPress: handleKeyboardKeyPress,
    layout: layout,
    layoutName: layoutName,
    theme: theme,
    display: display,
    mergeDisplay: true
  });
}

/***/ }),

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89711);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78942);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
  }, none !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    key: "none",
    value: ""
  }, none), children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    id: descrId
  }, error || helperText));
}

/***/ })

}]);
//# sourceMappingURL=5969-bc7ef19be4920b32d0e3.js.map