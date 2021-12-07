(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9370],{

/***/ 84571:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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

/***/ 60490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(35005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 97497:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 70030:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(19670);
var defineProperties = __webpack_require__(36048);
var enumBugKeys = __webpack_require__(80748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(60490);
var documentCreateElement = __webpack_require__(80317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 36048:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(19781);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(19670);
var toIndexedObject = __webpack_require__(45656);
var objectKeys = __webpack_require__(81956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 81956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(16324);
var enumBugKeys = __webpack_require__(80748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 25969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ })

}]);
//# sourceMappingURL=9370-9639a7beaba677e5c84a.js.map