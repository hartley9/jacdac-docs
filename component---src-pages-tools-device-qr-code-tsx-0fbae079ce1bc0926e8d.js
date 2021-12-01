"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7260],{

/***/ 9874:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceQRCodeGenerator; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65970);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94548);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);
/* harmony import */ var _components_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6890);




var SilkQRCode = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(8982), __webpack_require__.e(7293)]).then(__webpack_require__.bind(__webpack_require__, 37293)));
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

  var handleUrlChange = ev => {
    var _ev$target$value;

    var vanity = (_ev$target$value = ev.target.value) === null || _ev$target$value === void 0 ? void 0 : _ev$target$value.toUpperCase();
    setURL(vanity);
  };

  var handleSizeChange = ev => {
    var s = Number(ev.target.value);
    if (!isNaN(s)) setSize(s);
  };

  var handleMirror = ev => {
    setMirror(!!ev.target.checked);
  };

  var mirrorid = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var switchid = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
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
    helperText: "Short URL, capital letters best"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    label: "block size (mm)",
    type: "number",
    value: size,
    onChange: handleSizeChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    checked: mirror,
    onChange: handleMirror
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    id: mirrorid,
    htmlFor: switchid
  }, "mirror"))), url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: url
  }, url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "QR codes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SilkQRCode, {
    url: url,
    mirror: mirror,
    size: size
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-device-qr-code-tsx-0fbae079ce1bc0926e8d.js.map