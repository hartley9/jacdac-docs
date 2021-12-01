"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4602],{

/***/ 93081:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceQRCodeGenerator; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65970);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94548);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92077);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20171);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);
/* harmony import */ var _components_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6890);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36176);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79764);
/* harmony import */ var _components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97685);





var SilkQRCode = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(8982), __webpack_require__.e(7293)]).then(__webpack_require__.bind(__webpack_require__, 37293)));



var query = "48099865";
function DeviceQRCodeGenerator(props) {
  var {
    data
  } = props;
  var {
    nodes
  } = data.allQrUrlDeviceMapCsv;
  var deviceCatalog = (0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  var knowns = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .toMap */ .qL)(nodes, n => n.vanityname.toUpperCase(), n => n);
  var {
    0: vanity,
    1: setVanity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("AAAAAB");
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
    setVanity(vanity);
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
  var url = vanity ? "HTTP://AKA.MS/" + vanity : undefined;
  var known = knowns[vanity];
  var {
    modulename,
    designid,
    revision
  } = known || {};

  var handleVanity = vanityname => () => setVanity(vanityname.toUpperCase());

  var handleNextVanity = () => {
    var next = Object.values(nodes).find(_ref => {
      var {
        designid
      } = _ref;
      return !designid;
    });
    if (next) setVanity(next.vanityname.toUpperCase());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Silk QR Code generator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Enter a short URL HTTP://AKA.MS/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "vanity name"), " to be encoded as a silk compatible QR code. If you use a link, make sure to update", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/microsoft/jacdac/blob/main/devices/microsoft/research/qr-url-device-map.csv"
  }, "GitHub"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    fullWidth: true,
    label: "vanity name",
    value: vanity,
    placeholder: "AAAAA",
    onChange: handleUrlChange,
    helperText: "HTTP://AKA.MS/..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    label: "block size (mm)",
    type: "number",
    value: size,
    onChange: handleSizeChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    checked: mirror,
    onChange: handleMirror
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    id: mirrorid,
    htmlFor: switchid
  }, "mirror")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    onClick: handleNextVanity
  }, "Pick Unassigned"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: url
  }, url)), known && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Reserved device entry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, designid ? designid + ": " + modulename + " v" + revision : "unassigned")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "QR codes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SilkQRCode, {
    url: url,
    mirror: mirror,
    size: size
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Preview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "If you see bing.com for aka.ms links, it\"s likely to be free."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
    title: "Link preview",
    style: {
      width: "100%",
      height: "14rem",
      border: "none"
    },
    src: url === null || url === void 0 ? void 0 : url.replace(/^http:/i, "HTTPS:"),
    sandbox: "allow-scripts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Known devices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, nodes.filter(_ref2 => {
    var {
      designid
    } = _ref2;
    return !!designid;
  }).map(_ref3 => {
    var {
      vanityname,
      modulename,
      designid,
      revision,
      productid
    } = _ref3;
    var spec = deviceCatalog.specificationFromProductIdentifier(parseInt(productid, 16));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
      button: true,
      key: vanityname,
      onClick: handleVanity(vanityname)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      primary: designid + ": " + modulename + " v" + revision + " " + (productid || ""),
      secondary: "aka.ms/" + vanityname
    }), !productid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      severity: "warning"
    }, "product id missing") : !spec ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      severity: "error"
    }, "Missing in device catalog") : null);
  })));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-qr-silk-tsx-c13643f2f805ae888052.js.map