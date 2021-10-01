"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8058],{

/***/ 98058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceImage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45656);
/* harmony import */ var _useDeviceImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81546);



function DeviceImage(props) {
  var {
    id,
    size
  } = props;
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .deviceSpecificationFromIdentifier */ .Io)(id);
  var url = (0,_useDeviceImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(spec, size);
  if (!url) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: url,
    alt: spec.name,
    loading: "lazy"
  });
}

/***/ })

}]);
//# sourceMappingURL=8058-2cd496319abf2ea8af5e.js.map