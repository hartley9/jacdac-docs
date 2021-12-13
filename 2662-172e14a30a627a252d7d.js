"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2662],{

/***/ 72662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PassiveAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95453);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89132);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84377);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36176);





function PassiveAlert() {
  var {
    passive,
    setPassive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);

  var handleActive = () => setPassive(false);

  if (!passive) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    severity: "warning",
    closeable: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null, "Passive mode"), "The web browser is not sending any packet to devices.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
    sx: {
      ml: 1
    },
    color: "inherit",
    variant: "outlined",
    onClick: handleActive
  }, "Switch to Active Mode"));
}

/***/ })

}]);
//# sourceMappingURL=2662-172e14a30a627a252d7d.js.map