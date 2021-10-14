"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[171],{

/***/ 30171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCODALMessageBus; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32525);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50092);







function DashboardCODALMessageBus(props) {
  var {
    service
  } = props;
  var sourceId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var valueId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var {
    0: source,
    1: setSource
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var nsource = parseInt(source);
  var nvalue = parseInt(value);
  var disabled = isNaN(nsource) || isNaN(nvalue);

  var handleSourceChange = ev => setSource(ev.target.value.trim());

  var handleValueChange = ev => setValue(ev.target.value.trim());

  var handleSend = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function* () {
      return yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .CodalMessageBusCmd.Send */ .QxS.Send, [nsource, nvalue], true);
    });

    return function handleSend() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    item: true,
    xs: 12,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    type: "number",
    id: sourceId,
    label: "Source",
    value: source,
    onChange: handleSourceChange,
    error: !!source && isNaN(nsource),
    helperText: isNaN(nsource) ? "source must be an unsigned number" : "source of the message"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    item: true,
    xs: 12,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    type: "number",
    id: valueId,
    label: "Value",
    value: value,
    onChange: handleValueChange,
    error: value && isNaN(nvalue),
    helperText: isNaN(nvalue) ? "value must be an unsigned number" : "value of the message"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    title: "send message",
    disabled: disabled,
    onClick: handleSend
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null))));
}

/***/ })

}]);
//# sourceMappingURL=171-942523a6f7cb9f370fd7.js.map