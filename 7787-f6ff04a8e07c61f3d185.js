"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7787],{

/***/ 7787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCharacterScreen; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65970);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82677);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50092);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35853);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74467);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71973);
/* harmony import */ var _widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72060);











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
    r += BRAILE_CHARACTERS[su.charAt(i)] || "?";
  }

  return r;
}

function DashboardCharacterScreen(props) {
  var {
    service
  } = props;
  var messageRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Message */ .OEJ.Message);
  var rowsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Rows */ .OEJ.Rows);
  var columnsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Columns */ .OEJ.Columns);
  var textDirectionRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.TextDirection */ .OEJ.TextDirection);
  var variantRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Variant */ .OEJ.Variant);
  var brightnessRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Brightness */ .OEJ.Brightness);
  var {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [message] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(messageRegister, props);
  var [rows] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(rowsRegister, props);
  var [columns] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(columnsRegister, props);
  var [textDirection] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(textDirectionRegister, props);
  var [variant] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(variantRegister, props);
  var [brightness] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(brightnessRegister);
  var {
    0: fieldMessage,
    1: setFieldMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(message);

  var handleClear = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      setFieldMessage("");
      yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenCmd.Clear */ .nWR.Clear, undefined, true);
    });

    return function handleClear() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleFieldMessageChange = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (ev) {
      setFieldMessage(ev.target.value);
      yield messageRegister.sendSetStringAsync(ev.target.value, true);
    });

    return function handleFieldMessageChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleEdit = () => setEdit(e => !e); // set first value of message


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!fieldMessage && message) setFieldMessage(message);
  }, [message]);
  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null); // size unknown

  var converter = variant === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenVariant.Braille */ .GLh.Braille ? brailify : s => s;
  var cmessage = message.split("").map(converter).join("");
  var rtl = textDirection === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenTextDirection.RightToLeft */ .mbk.RightToLeft;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, edit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    label: "text",
    value: fieldMessage,
    onChange: handleFieldMessageChange,
    multiline: true,
    rows: rows || 2,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    title: "clear the entire display",
    onClick: handleClear,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    rows: rows,
    columns: columns,
    rtl: rtl,
    message: cmessage,
    disabled: brightness === 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    title: !edit ? "show editor" : "hide editor",
    onClick: handleEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null))));
}

/***/ })

}]);
//# sourceMappingURL=7787-f6ff04a8e07c61f3d185.js.map