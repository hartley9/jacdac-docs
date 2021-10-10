(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2439,5666],{

/***/ 51223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(70030);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 77475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(70111);
var isArray = __webpack_require__(43157);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 65417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(77475);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(43157);
var toLength = __webpack_require__(17466);
var bind = __webpack_require__(49974);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 49974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(13099);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 60490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(35005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 43157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(84326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


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
var objectKeys = __webpack_require__(81956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
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

/***/ 86535:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(82109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(47908);
var toLength = __webpack_require__(17466);
var aFunction = __webpack_require__(13099);
var arraySpeciesCreate = __webpack_require__(65417);

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 99244:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(51223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ 62439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardVibrationMotor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15861);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86535);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99244);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1059);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49013);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82677);
/* harmony import */ var _ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94564);
/* harmony import */ var _jacdac_ts_src_servers_vibrationmotorserver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91697);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64973);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50092);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23461);















var patterns = {
  ".": {
    name: "dit",
    duration: 1,
    speed: 0.6
  },
  "-": {
    name: "dat",
    duration: 3,
    speed: 0.6
  },
  " ": {
    name: "space",
    duration: 1,
    speed: 0
  },
  _: {
    name: "low dat",
    duration: 3,
    speed: 0.2
  },
  "=": {
    name: "hight dat",
    duration: 3,
    speed: 1
  },
  "'": {
    name: "high dit",
    duration: 1,
    speed: 1
  },
  ",": {
    name: "low dit",
    duration: 1,
    speed: 0.2
  }
};

function PatternInput(props) {
  var {
    speedScale,
    disabled,
    service
  } = props;
  var {
    onClickActivateAudioContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP);
  var {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("...---...");
  var helperText = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => "Pattern of vibrations: " + Object.entries(patterns).map(_ref => {
    var [key, value] = _ref;
    return "\"" + key + "\" " + value.name;
  }).join(", "), []);

  var handleSend = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* () {
      onClickActivateAudioContext(); // enable audio context within click handler

      var seq = text.split("").map(c => patterns[c]).filter(p => !!p);
      if (navigator.vibrate) navigator.vibrate(seq.flatMap(p => [p.duration, tdit >> 3]));
      var tdit = 120;
      var pattern = seq.flatMap(p => [[p.duration * tdit >> 3, p.speed * speedScale], [tdit >> 3, 0]]);
      var data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)("r: u8 u0.8", [pattern]);
      yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .VibrationMotorCmd.Vibrate */ .EmZ.Vibrate, data);
    });

    return function handleSend() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = ev => {
    var newValue = ev.target.value;
    setText(newValue.split("").filter(s => !!patterns[s]).join(""));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    title: "vibration pattern",
    helperText: helperText,
    value: text,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    variant: "outlined",
    title: "send vibration pattern",
    disabled: disabled,
    onClick: handleSend
  }, "vibrate")));
}

function DashboardVibrationMotor(props) {
  var {
    service
  } = props;
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service);
  var enabledRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .VibrationMotorReg.Enabled */ .tDt.Enabled);
  var enabled = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterBoolValue */ .I8)(enabledRegister, props);
  var {
    playTone
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP);
  var {
    0: speed,
    1: setSpeed
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(20); // listen for playTone commands from the buzzer

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => enabled && (server === null || server === void 0 ? void 0 : server.subscribe(_jacdac_ts_src_servers_vibrationmotorserver__WEBPACK_IMPORTED_MODULE_9__/* ["default"].VIBRATE_PATTERN */ .Z.VIBRATE_PATTERN, _ref3 => {
    var {
      duration,
      speed
    } = _ref3;
    var ms = duration << 3;
    playTone(440, ms, speed);
  })), [server, enabled]);

  var handleEnabled = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function* (ev, checked) {
      yield enabledRegister.sendSetBoolAsync(checked, true);
    });

    return function handleEnabled(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }(); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleSpeed = (event, value) => setSpeed(value);

  var percentValueFormat = newValue => (newValue | 0) + "%";

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, enabled !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    checked: enabled,
    label: enabled ? "vibration on" : "vibration off",
    onChange: handleEnabled
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PatternInput, {
    disabled: !enabled,
    service: service,
    speedScale: speed / 100
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    label: "speed",
    min: 0,
    max: 100,
    value: speed,
    onChange: handleSpeed,
    valueLabelDisplay: "auto",
    valueLabelFormat: percentValueFormat
  })));
}

/***/ }),

/***/ 23461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SliderWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45987);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14685);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50514);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);

var _excluded = ["label"];



var useStyle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(theme => ({
  arrow: {
    color: theme.palette.primary.main
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main
  }
}));

function ValueLabelComponent(props) {
  var {
    children,
    open,
    value
  } = props;
  var classes = useStyle();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
    classes: classes,
    open: open,
    arrow: true,
    color: "primary",
    enterTouchDelay: 0,
    placement: "top",
    title: value
  }, children);
}

function SliderWithLabel(props) {
  var {
    label
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, _excluded);

  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var sliderId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    id: labelId,
    variant: "caption",
    gutterBottom: true
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, Object.assign({
    id: sliderId,
    "aria-labelledby": labelId,
    "aria-label": label,
    ValueLabelComponent: ValueLabelComponent
  }, others)));
}

/***/ }),

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label"];


function SwitchWithLabel(props) {
  var {
    label
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, rest),
    label: label
  });
}

/***/ })

}]);
//# sourceMappingURL=2439-b742653dad3707067c5f.js.map