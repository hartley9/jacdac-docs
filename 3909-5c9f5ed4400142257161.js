"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3909],{

/***/ 93909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4320);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26799);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36176);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81546);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13996);
/* harmony import */ var _devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74450);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7746);


 // tslint:disable-next-line: match-default-export-name no-submodule-imports








function DeviceSpecificationCard(props) {
  var _services$map;

  var {
    specification,
    size
  } = props;
  var {
    id,
    name,
    company,
    services
  } = specification;
  var imageUrl = (0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(specification, size);
  var serviceNames = services === null || services === void 0 ? void 0 : (_services$map = services.map(sc => {
    var _serviceSpecification;

    return (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .humanify */ .lW)((_serviceSpecification = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc)) === null || _serviceSpecification === void 0 ? void 0 : _serviceSpecification.shortName);
  })) === null || _services$map === void 0 ? void 0 : _services$map.join(", ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .CardActionArea */ .MU, {
    to: "/devices/" + (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .identifierToUrlPath */ .uM)(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imageUrl,
    style: {
      aspectRatio: "3 / 2",
      width: "100%"
    },
    alt: "photograph of " + specification.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    component: "div",
    variant: "subtitle2"
  }, serviceNames || ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    variant: "caption",
    color: "text.secondary"
  }, company))));
}

function DeviceSpecificationList(props) {
  var {
    count,
    shuffle,
    requiredServiceClasses,
    company,
    devices
  } = props;
  var specifications = (0,_devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  var specs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var r = devices || specifications;

    if (company) {
      var lc = (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .escapeDeviceIdentifier */ .o9)(company);
      r = r.filter(spec => (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .escapeDeviceIdentifier */ .o9)(spec.company).startsWith(lc));
    }

    if (requiredServiceClasses) r = r.filter(spec => spec.services.length && requiredServiceClasses.every(srv => spec.services.indexOf(srv) > -1));
    if (shuffle) (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .arrayShuffle */ .r)(r);
    if (count !== undefined) r = r.slice(0, count);
    return r;
  }, [requiredServiceClasses, shuffle, count, company, JSON.stringify(devices === null || devices === void 0 ? void 0 : devices.map(d => d.id)), specifications]);
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(specs.length);
  var size = (specs === null || specs === void 0 ? void 0 : specs.length) < 6 ? "catalog" : "preview";
  if (!specs.length) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    variant: "body1"
  }, "No device registered yet.");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
    container: true,
    spacing: 2
  }, specs.map(specification => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, Object.assign({
    key: specification.id,
    item: true
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeviceSpecificationCard, {
    specification: specification,
    size: size
  }))));
}

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);
  var hasDrawer = drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None;

  if (!drawerType && itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (hasDrawer) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ })

}]);
//# sourceMappingURL=3909-5c9f5ed4400142257161.js.map