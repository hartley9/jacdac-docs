"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8737],{

/***/ 98737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DataStreamer; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./jacdac-ts/src/jdom/sensors.ts



var _sensorSpecs;
/**
 * Gets the list of sensor specifications available
 * @returns
 */


function sensorSpecifications() {
  if (!_sensorSpecs) {
    _sensorSpecs = (0,spec/* serviceSpecifications */.Le)().filter(srv => !srv.shortName.startsWith("_") && (0,spec/* isSensor */.rq)(srv));
  }

  return _sensorSpecs;
}
/**
 * Collects and flattens all sensor data into a serializable object
 * @param bus
 * @returns
 */

function snapshotSensors(bus, sparse) {
  var r = (0,utils/* toMap */.qL)(sensorSpecifications(), srv => srv.camelName, srv => {
    var r = bus.services({
      serviceClass: srv.classIdentifier,
      ignoreInfrastructure: true,
      announced: true
    }).map(srv => {
      var _reg$unpackedValue;

      var reg = srv.readingRegister;
      var spec = reg.specification;
      return spec.fields.length === 1 ? ((_reg$unpackedValue = reg.unpackedValue) === null || _reg$unpackedValue === void 0 ? void 0 : _reg$unpackedValue[0]) || 0 : reg.objectValue || {};
    });
    return sparse && !r.length ? undefined : r;
  }, sparse);
  return r;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/iframeclient.ts
var iframeclient = __webpack_require__(9809);
;// CONCATENATED MODULE: ./src/components/tools/DataStreamer.tsx





function DataStreamer() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  (0,react.useEffect)(() => {
    if (!(0,iframeclient/* inIFrame */.H)()) return;
    console.debug("datastreamer: start uploader");

    var upload = () => {
      var sensors = snapshotSensors(bus, true);
      var headers = (0,utils/* arrayConcatMany */.ue)(Object.entries(sensors).map(_ref => {
        var [key, values] = _ref;
        return new Array(values.length).fill(0).map((_, i) => "" + key + (i + 1));
      }));
      var values = (0,utils/* arrayConcatMany */.ue)(Object.values(sensors).map(v => v));
      var msg = {
        source: "jacdac",
        type: "datarow",
        sensors,
        headers,
        values
      }; //console.log({ sensors, headers, values })

      window.parent.postMessage(msg, "*");
    };

    var id = setInterval(upload, 100);
    return () => {
      clearInterval(id);
      console.debug("datastreamer: stop uploader");
    };
  });
  return /*#__PURE__*/react.createElement("span", null);
}

/***/ })

}]);
//# sourceMappingURL=8737-39cd206e9b462f341e0b.js.map