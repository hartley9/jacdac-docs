(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[188],{

/***/ 10188:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ JDomTreeView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85505);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66869);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14632);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33629);
/* harmony import */ var _hooks_useDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53074);
/* harmony import */ var _JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49783);


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name



var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    root: {
      flexGrow: 1
    },
    margins: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5)
    }
  });
});
function JDomTreeView(props) {
  var defaultExpanded = props.defaultExpanded,
      defaultSelected = props.defaultSelected,
      other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(props, ["defaultExpanded", "defaultSelected"]);

  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultExpanded || []),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSelected || []),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var devices = (0,_hooks_useDevices__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    ignoreSelf: true
  });

  var handleToggle = function handleToggle(event, nodeIds) {
    setExpanded(nodeIds);
  };

  var handleSelect = function handleSelect(event, nodeIds) {
    setSelected(nodeIds);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(classes.root, classes.margins),
    defaultCollapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null),
    defaultExpandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null),
    defaultEndIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        width: 12
      }
    }),
    expanded: expanded,
    selected: selected,
    onNodeToggle: handleToggle,
    onNodeSelect: handleSelect
  }, devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_2__/* .DeviceTreeItem */ .yw, Object.assign({
      key: device.id,
      device: device,
      expanded: expanded,
      selected: selected
    }, other));
  }));
}

/***/ })

}]);
//# sourceMappingURL=188-e6d5842187813d3dbf05.js.map