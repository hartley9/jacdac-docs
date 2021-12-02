"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7260],{

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91570);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94548);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label", "labelPlacement", "labelStyle"];


function SwitchWithLabel(props) {
  var {
    label,
    labelPlacement,
    labelStyle
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, rest),
    label: label,
    style: labelStyle,
    labelPlacement: labelPlacement
  });
}

/***/ }),

/***/ 9874:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceQRCodeGenerator; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65970);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_ui_Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6890);
/* harmony import */ var _components_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64973);




var SilkQRCode = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 7293).then(__webpack_require__.bind(__webpack_require__, 37293)));
function DeviceQRCodeGenerator() {
  var {
    0: url,
    1: setURL
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: mirror,
    1: setMirror
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var {
    0: size,
    1: setSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.3);
  var {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  var handleUrlChange = ev => {
    var vanity = (ev.target.value || "").trim();
    setURL(vanity);
    setError(!/^https?:\/\/./i.test(vanity) ? "Must start with http:// or https://" : undefined);
  };

  var handleSizeChange = ev => {
    var s = Number(ev.target.value);
    if (!isNaN(s)) setSize(s);
  };

  var handleMirror = ev => {
    setMirror(!!ev.target.checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Device Silk QR Code generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Enter a short URL to be encoded as a silk compatible QR code."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    severity: "info",
    sx: {
      mb: 1
    }
  }, "Keep the url as short as possible and use capital letters to get the smallest QR code."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    fullWidth: true,
    label: "url",
    value: url,
    placeholder: "",
    onChange: handleUrlChange,
    error: !!error,
    helperText: error || "Use _very_ short URL and CAPITAL letters for best results."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    label: "block size (mm)",
    type: "number",
    value: size,
    inputProps: {
      step: 0.1
    },
    onChange: handleSizeChange,
    helperText: "Image size equals block size times number of blocks needed to encode URL."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    checked: mirror,
    onChange: handleMirror,
    label: "mirror"
  }))), url && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "QR codes for", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SilkQRCode, {
    url: url,
    mirror: mirror,
    size: size
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-device-qr-code-tsx-5c08511b627b31b57f92.js.map