"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3133],{

/***/ 24301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DashboardDeviceItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45987);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4320);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DashboardDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32465);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);
/* harmony import */ var _DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34941);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84377);

var _excluded = ["device", "variant"];






function DashboardDeviceItem(props) {
  var {
    device,
    variant
  } = props,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(props, _excluded);

  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP);
  var {
    0: charts,
    1: setCharts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var breakpoints = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device, () => {
    var breakpointWeight = device.services().map(srv => {
      return (0,_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__/* .dashboardServiceWeight */ .o2)(srv) || (srv.readingRegister || srv.valueRegister || srv.intensityRegister ? 1 : 0);
    }).reduce((c, v) => c + v, 0);
    if (breakpointWeight > 3 || drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_4__/* .DrawerType.None */ .jw.None) return {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6
    };else if (breakpointWeight == 3) return {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4
    };else if (breakpointWeight == 2) return {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 4
    };else return {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2,
      xl: "auto"
    };
  }, [drawerType, charts]); // based on size, expanded or reduce widget size

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, Object.assign({
    item: true
  }, breakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, Object.assign({
    device: device,
    variant: variant,
    charts: charts,
    setCharts: setCharts
  }, other)));
}

/***/ }),

/***/ 93909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66449);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4320);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26799);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36176);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81794);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81546);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13996);
/* harmony import */ var _devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74450);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7746);
/* harmony import */ var _ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(141);


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
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
  var height = theme.spacing(31);
  var imageUrl = (0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(specification, size);
  var serviceNames = services === null || services === void 0 ? void 0 : (_services$map = services.map(sc => {
    var _serviceSpecification;

    return (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .humanify */ .lW)((_serviceSpecification = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc)) === null || _serviceSpecification === void 0 ? void 0 : _serviceSpecification.shortName);
  })) === null || _services$map === void 0 ? void 0 : _services$map.join(", ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .CardActionArea */ .MU, {
    to: "/devices/" + (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .identifierToUrlPath */ .uM)(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_CardMediaWithSkeleton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    height: height,
    src: imageUrl,
    title: "photograph of " + specification.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "div"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    component: "div",
    variant: "subtitle2"
  }, serviceNames || ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
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
  if (!specs.length) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    variant: "body1"
  }, "No device registered yet.");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
    container: true,
    spacing: 2
  }, specs.map(specification => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, Object.assign({
    key: specification.id,
    item: true
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeviceSpecificationCard, {
    specification: specification,
    size: size
  }))));
}

/***/ }),

/***/ 27794:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceSpecification; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./src/components/specification/PacketSpecification.tsx + 12 modules
var PacketSpecification = __webpack_require__(86627);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
;// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx



function EnumSpecification(props) {
  var {
    serviceClass
  } = props;
  var spec = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);
  var enums = Object.values((spec === null || spec === void 0 ? void 0 : spec.enums) || {}).filter(en => !en.derived);
  if (!enums.length) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, "Enums"), enums.map(e => /*#__PURE__*/react.createElement(react.Fragment, {
    key: e.name
  }, /*#__PURE__*/react.createElement("h3", null, e.name, " ", e.isFlags && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "flags",
    size: "small"
  })), /*#__PURE__*/react.createElement("ul", null, Object.keys(e.members).map(en => /*#__PURE__*/react.createElement("li", {
    key: en
  }, en, ":", " ", /*#__PURE__*/react.createElement("code", null, "0x", e.members[en].toString(16))))))));
}
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(39211);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49856);
// EXTERNAL MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
var useServiceProviderFromServiceClass = __webpack_require__(36134);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
;// CONCATENATED MODULE: ./src/components/specification/ServiceSpecification.tsx














function DashboardServiceDevices(props) {
  var {
    serviceClass
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var devices = (0,useChange/* default */.Z)(bus, b => b.devices({
    serviceClass
  }));
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, devices.map(device => /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
    key: device.id,
    device: device,
    showAvatar: true,
    showHeader: true
  })));
}

function ServiceSpecification(props) {
  var _node$extends;

  var {
    service: node,
    showDerived
  } = props;
  var {
    shortId,
    name,
    classIdentifier
  } = node;
  var packets = node.packets.filter(pkt => showDerived || !pkt.derived);
  var registers = packets.filter(jdom_spec/* isRegister */.x5);
  var events = packets.filter(jdom_spec/* isEvent */.cO);
  var commands = packets.filter(jdom_spec/* isCommand */.ao);
  var reports = packets.filter(r => r.secondary);
  var pipeReports = packets.filter(jdom_spec/* isPipeReport */._5);
  var others = packets.filter(r => registers.indexOf(r) < 0 && events.indexOf(r) < 0 && commands.indexOf(r) < 0 && reports.indexOf(r) < 0 && pipeReports.indexOf(r) < 0); // spin up provider on demand

  (0,useServiceProviderFromServiceClass/* default */.Z)(node.classIdentifier);

  var reportOf = pkt => reports.find(rep => (0,jdom_spec/* isReportOf */.Dm)(pkt, rep));

  var pipeReportOf = pkt => pipeReports.find(rep => (0,jdom_spec/* isPipeReportOf */.yr)(pkt, rep));

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", {
    key: "title"
  }, name, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    component: "span"
  }, /*#__PURE__*/react.createElement(IDChip/* default */.Z, {
    id: node.classIdentifier,
    filter: "srv:" + shortId
  }))), /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: node
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "notesshort",
    source: node.notes.short
  }), !!((_node$extends = node.extends) !== null && _node$extends !== void 0 && _node$extends.length) && /*#__PURE__*/react.createElement("p", {
    key: "extends"
  }, /*#__PURE__*/react.createElement("span", null, "Extends "), node.extends.map((extend, i) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: "extend" + extend
  }, i > 0 && /*#__PURE__*/react.createElement("span", null, ", "), /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
    key: "extend" + extend,
    to: "/services/" + extend + "/"
  }, (0,jdom_spec/* serviceSpecificationFromName */.kB)(extend).name))), "."), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "noteslong",
    source: node.notes.long || ""
  }), /*#__PURE__*/react.createElement(DashboardServiceDevices, {
    serviceClass: classIdentifier
  }), /*#__PURE__*/react.createElement(EnumSpecification, {
    key: "enums",
    serviceClass: classIdentifier
  }), [{
    name: "Registers",
    packets: registers,
    note: node.notes["registers"]
  }, {
    name: "Events",
    packets: events,
    note: node.notes["events"]
  }, {
    name: "Commands",
    packets: commands,
    note: node.notes["commands"]
  }, {
    name: "Others",
    packets: others,
    note: node.notes["others"]
  }].filter(group => group.packets.length).map(group => /*#__PURE__*/react.createElement(react.Fragment, {
    key: "group" + group.name
  }, /*#__PURE__*/react.createElement("h2", null, group.name), group.note && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "node" + group.name,
    source: group.note
  }), group.packets.sort((l, r) => (l.derived ? 1 : -1) - (r.derived ? 1 : -1)).map(pkt => /*#__PURE__*/react.createElement(PacketSpecification/* default */.Z, {
    key: "pkt" + pkt.identifier,
    serviceClass: node.classIdentifier,
    packetInfo: pkt,
    reportInfo: reportOf(pkt),
    pipeReportInfo: pipeReportOf(pkt),
    showDevices: true
  })))));
}

/***/ }),

/***/ 59377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49856);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/specification/DeviceSpecificationList.tsx
var DeviceSpecificationList = __webpack_require__(93909);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(98970);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(25935);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(98953);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__(34276);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecification.tsx + 1 modules
var ServiceSpecification = __webpack_require__(27794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
;// CONCATENATED MODULE: ./jacdac-ts/src/azure-iot/devicetwin.ts



var ServiceTwinRegisterFlag;

(function (ServiceTwinRegisterFlag) {
  ServiceTwinRegisterFlag[ServiceTwinRegisterFlag["Const"] = 1] = "Const";
  ServiceTwinRegisterFlag[ServiceTwinRegisterFlag["Volatile"] = 2] = "Volatile";
})(ServiceTwinRegisterFlag || (ServiceTwinRegisterFlag = {}));

function serviceSpecificationToServiceTwinSpecification(specification) {
  if (!specification) return undefined;
  var {
    classIdentifier: serviceClass,
    camelName: name,
    packets
  } = specification;
  var registers = packets.filter(jdom_spec/* isHighLevelRegister */.vr) // TODO formalize
  .map(reg => {
    var flags = 0;
    if (reg.kind == "const") flags |= ServiceTwinRegisterFlag.Const;
    if (reg.volatile) flags |= ServiceTwinRegisterFlag.Volatile;
    var r = {
      code: reg.identifier,
      name: reg.name,
      flags,
      packf: reg.packFormat,
      fields: reg.fields.length > 1 ? reg.fields.map(f => f.name) : undefined
    };
    return r;
  });
  var dspec = {
    serviceClass,
    name,
    registers
  };
  return dspec;
}
function serviceSpecificationsWithServiceTwinSpecification() {
  var specs = [serviceSpecificationFromClassIdentifier(SRV_CONTROL)].concat(_toConsumableArray(serviceSpecifications().filter(srv => !isInfrastructure(srv))));
  return specs;
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/specification/ServiceSpecificationSource.tsx










function ServiceSpecificationSource(props) {
  var {
    classIdentifier,
    serviceSpecification,
    showSpecification
  } = props;
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(0);
  var spec = serviceSpecification || (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(classIdentifier);
  var convs = (0,jdspec/* converters */.R1)();
  var showDeviceTwin = spec && (spec === null || spec === void 0 ? void 0 : spec.camelName) !== "sytem";

  var handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  var index = 0;
  return /*#__PURE__*/react.createElement(Paper/* default */.Z, {
    square: true
  }, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, [showSpecification && "Specification", "MakeCode", "TypeScript", "C", "JSON", showDeviceTwin && "Twin"].filter(n => !!n).map(n => /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    key: n,
    label: n
  }))), showSpecification && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "spec",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(ServiceSpecification/* default */.Z, {
    service: spec
  })), ["sts", "ts", "c", "json"].map(lang => /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "conv" + lang,
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    value: () => convs[lang](spec),
    mode: lang
  }))), showDeviceTwin && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "devicetwin",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    mode: "json",
    url: (0,gatsby_browser_entry.withPrefix)("/services/twin/x" + spec.classIdentifier.toString(16) + ".json"),
    value: JSON.stringify(serviceSpecificationToServiceTwinSpecification(spec), null, 2)
  })));
}
// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__(70654);
;// CONCATENATED MODULE: ./src/components/ServiceMarkdown.tsx










function ServiceButtons(props) {
  var {
    service,
    makecodeSlug
  } = props;
  var {
    shortId
  } = service;
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx, {
    variant: "contained",
    to: "/services/" + shortId + "/playground/"
  }, "Playground")), makecodeSlug && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx, {
    variant: "contained",
    to: makecodeSlug,
    startIcon: /*#__PURE__*/react.createElement(MakeCodeIcon/* default */.Z, null)
  }, "MakeCode")));
}

function ServiceMarkdown(props) {
  var {
    classIdentifier,
    source,
    makecodeSlug
  } = props;
  var service = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(classIdentifier);
  var {
    shortId
  } = service;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: service
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: source
  }), service && /*#__PURE__*/react.createElement(ServiceButtons, {
    service: service,
    makecodeSlug: makecodeSlug
  }), /*#__PURE__*/react.createElement("h2", null, "Registered Devices"), /*#__PURE__*/react.createElement(DeviceSpecificationList["default"], {
    requiredServiceClasses: [classIdentifier]
  }), /*#__PURE__*/react.createElement("h2", null, "Sources"), /*#__PURE__*/react.createElement(ServiceSpecificationSource, {
    serviceSpecification: service
  }), /*#__PURE__*/react.createElement("h2", null, " See Also"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/microsoft/jacdac/blob/main/services/" + shortId + ".md"
  }, "View source")), /*#__PURE__*/react.createElement("li", null, "Read", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
    to: "/reference/service-specification/",
    underline: "hover"
  }, "Service Specification Language"), " ", "reference")));
}
;// CONCATENATED MODULE: ./src/templates/service.tsx

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function Page(props) {
  return /*#__PURE__*/react.createElement(ServiceMarkdown, props.pageContext);
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-tsx-daac78e9d529d3f006ee.js.map