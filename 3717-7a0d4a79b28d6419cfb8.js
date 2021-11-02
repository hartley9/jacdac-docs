"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3717],{

/***/ 43717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardBrailleDisplay; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1059);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82677);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50092);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58590);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16002);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79885);
/* harmony import */ var _widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72060);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19640);
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5894);













 // https://en.wikipedia.org/wiki/Braille_ASCII

var BRAILE_CHARACTERS = {
  " ": "⠀",
  // space bar to dot-0
  "-": "⠤",
  ",": "⠠",
  ";": "⠰",
  ":": "⠱",
  "!": "⠮",
  "?": "⠹",
  ".": "⠨",
  "(": "⠷",
  "[": "⠪",
  "@": "⠈",
  "*": "⠡",
  "/": "⠌",
  "'": "⠄",
  '"': "⠐",
  "\\": "⠳",
  "&": "⠯",
  "%": "⠩",
  "^": "⠘",
  "+": "⠬",
  "<": "⠣",
  ">": "⠜",
  $: "⠫",
  "0": "⠴",
  "1": "⠂",
  "2": "⠆",
  "3": "⠒",
  "4": "⠲",
  "5": "⠢",
  "6": "⠖",
  "7": "⠶",
  "8": "⠦",
  "9": "⠔",
  A: "⠁",
  B: "⠃",
  C: "⠉",
  D: "⠙",
  E: "⠑",
  F: "⠋",
  G: "⠛",
  H: "⠓",
  I: "⠊",
  J: "⠚",
  K: "⠅",
  L: "⠇",
  M: "⠍",
  N: "⠝",
  O: "⠕",
  P: "⠏",
  Q: "⠟",
  R: "⠗",
  S: "⠎",
  T: "⠞",
  U: "⠥",
  V: "⠧",
  W: "⠺",
  X: "⠭",
  Z: "⠵",
  "]": "⠻",
  "#": "⠼",
  Y: "⠽",
  ")": "⠾",
  "=": "⠿",
  _: "⠸"
};

function brailify(s) {
  if (!s) return s;
  var r = "";
  var su = s.toLocaleUpperCase();

  for (var i = 0; i < su.length; ++i) {
    var c = su.charCodeAt(i);
    if (c >= 0x2800 && c <= 0x28ff) r += String.fromCharCode(c);else r += BRAILE_CHARACTERS[su.charAt(i)] || "";
  }

  return r;
}

function DashboardBrailleDisplay(props) {
  var {
    service
  } = props;
  var textId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_8__/* .useId */ .Me)();
  var patternsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BrailleDisplayReg.Patterns */ .Dvj.Patterns);
  var lengthRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BrailleDisplayReg.Length */ .Dvj.Length);
  var enabledRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BrailleDisplayReg.Enabled */ .Dvj.Enabled);
  var [patterns] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(patternsRegister, props);
  var enabled = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(enabledRegister, props);
  var [length] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(lengthRegister, props);
  var {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var {
    0: fieldMessage,
    1: setFieldMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(patterns);

  var handleFieldMessageChange = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* (ev) {
      var text = ev.target.value;
      var brailled = brailify(text);
      console.log({
        text,
        brailled
      });
      setFieldMessage(brailled);
      yield patternsRegister.sendSetStringAsync(brailled, true);
    });

    return function handleFieldMessageChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleEdit = () => setEdit(e => !e);

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      setFieldMessage("");
      yield patternsRegister.sendSetStringAsync("", true);
    });

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleEnabled = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* () {
      return enabledRegister.sendSetBoolAsync(!enabled, true);
    });

    return function handleEnabled() {
      return _ref3.apply(this, arguments);
    };
  }(); // set first value of message


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!fieldMessage && patterns) setFieldMessage(patterns);
  }, [patterns]);
  if (length === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null); // size unknown

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    container: true,
    spacing: 1
  }, edit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    id: textId,
    label: "text",
    helperText: "Unicode Braille patterns or Braille ASCII",
    "aria-label": "text field to enter Braille unicode pattersn or Braille ASCII",
    value: fieldMessage,
    onChange: handleFieldMessageChange,
    multiline: false,
    fullWidth: true,
    disabled: !enabled
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    title: "clear the entire display",
    onClick: handleClear,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    rows: 1,
    columns: length,
    message: patterns,
    disabled: !enabled
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    title: enabled ? "disable display" : "enable display",
    onClick: handleEnabled,
    color: enabled ? "primary" : undefined,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    title: !edit ? "show editor" : "hide editor",
    onClick: handleEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null))));
}

/***/ })

}]);
//# sourceMappingURL=3717-7a0d4a79b28d6419cfb8.js.map