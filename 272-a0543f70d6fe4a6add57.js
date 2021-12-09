"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[272],{

/***/ 60272:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ JDomServiceTreeView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98348);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _mui_lab_TreeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50861);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31812);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29127);
/* harmony import */ var _JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88022);

var _excluded = ["service", "defaultExpanded", "defaultSelected"];


 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name


var PREFIX = "JDomServiceTreeView";
var classes = {
  root: PREFIX + "-root",
  margins: PREFIX + "-margins"
};
var StyledTreeView = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_mui_lab_TreeView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["&." + classes.root]: {
      flexGrow: 1
    },
    ["&." + classes.margins]: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5)
    }
  };
});
function JDomServiceTreeView(props) {
  var {
    service,
    defaultExpanded,
    defaultSelected
  } = props,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, _excluded);

  var {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultExpanded || []);
  var {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSelected || []);

  var handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  var handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledTreeView, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes.margins),
    defaultCollapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null),
    defaultExpandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null),
    defaultEndIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        width: 12
      }
    }),
    expanded: expanded,
    selected: selected,
    onNodeToggle: handleToggle,
    onNodeSelect: handleSelect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_1__/* .ServiceTreeItem */ .RL, Object.assign({
    key: service.nodeId,
    service: service,
    expanded: expanded,
    selected: selected
  }, other)));
}

/***/ })

}]);
//# sourceMappingURL=272-a0543f70d6fe4a6add57.js.map