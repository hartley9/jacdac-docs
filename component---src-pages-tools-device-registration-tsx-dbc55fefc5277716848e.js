"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9231],{

/***/ 63015:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 67197:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

exports.Z = _default;

/***/ }),

/***/ 27498:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AddServiceIconButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42333);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87122);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49308);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26799);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63015);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71973);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19640);


 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports



function AddServiceIconButton(props) {
  var {
    error,
    onAdd,
    children,
    serviceFilter
  } = props;
  var [servicesAnchorEl, setServicesAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  var servicesMenuId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__/* .useId */ .Me)();
  var services = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(srv => !(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isInfrastructure */ .lz)(srv)).filter(srv => !serviceFilter || serviceFilter(srv)), [serviceFilter]);

  var handleServiceAddClick = event => {
    setServicesAnchorEl(event.currentTarget);
  };

  var handleServiceAddClose = id => () => {
    setServicesAnchorEl(null);

    if (id !== undefined) {
      var srv = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(id);
      onAdd(srv);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    title: "Add a service",
    "aria-controls": servicesMenuId,
    "aria-haspopup": "true",
    onClick: handleServiceAddClick
  }, children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    id: servicesMenuId,
    anchorEl: servicesAnchorEl,
    keepMounted: true,
    open: Boolean(servicesAnchorEl),
    onClose: handleServiceAddClose(undefined)
  }, services.map(srv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    key: srv.classIdentifier,
    value: srv.classIdentifier.toString(16),
    onClick: handleServiceAddClose(srv.classIdentifier)
  }, srv.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    variant: "caption",
    color: error ? "error" : "inherit",
    component: "div"
  }, error || "Select one or more services."));
}

/***/ }),

/***/ 72833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueServiceId": function() { return /* binding */ uniqueServiceId; },
/* harmony export */   "uniqueDeviceId": function() { return /* binding */ uniqueDeviceId; },
/* harmony export */   "uniqueFirmwareId": function() { return /* binding */ uniqueFirmwareId; },
/* harmony export */   "default": function() { return /* binding */ RandomGenerator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26799);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79675);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67197);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95453);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36176);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90947);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80303);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24739);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports









function looksRandom(n) {
  var s = n.toString(16);
  var h = "0123456789abcdef";

  for (var i = 0; i < h.length; ++i) {
    var hh = h[i];
    if (s.indexOf(hh + hh + hh) >= 0) return false;
  }

  if (/f00d|dead|deaf|beef/.test(s)) return false;
  return true;
}

function genServId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__/* .cryptoRandomUint32 */ .dG)(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x10000000;
}

function genFirmwareId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__/* .cryptoRandomUint32 */ .dG)(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x30000000;
}

function uniqueServiceId() {
  var id = genServId();

  while (id !== undefined && (!looksRandom(id) || (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(id))) {
    id = genServId();
  }

  return id !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .toFullHex */ .$3)([id]);
}
function uniqueDeviceId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__/* .cryptoRandomUint32 */ .dG)(2);
  return n !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .toFullHex */ .$3)([n[0], n[1]]);
}
function uniqueFirmwareId() {
  var id = genFirmwareId();

  while (id !== undefined && (!looksRandom(id) || _jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_7__/* .deviceCatalog.specificationFromProductIdentifier */ .U.specificationFromProductIdentifier(id))) {
    id = genFirmwareId();
  }

  return id !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .toFullHex */ .$3)([id]);
}
function RandomGenerator(props) {
  var {
    device,
    firmware
  } = props;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Me)();
  var fieldId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Me)();
  var {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(device ? uniqueDeviceId() : uniqueServiceId());
  var {
    0: copySuccess,
    1: setCopySuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  var handleRegenerate = () => {
    var v = device ? uniqueDeviceId() : firmware ? uniqueFirmwareId() : uniqueServiceId();
    setValue(v);
    setCopySuccess(false);
  };

  var handleCopy = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      try {
        yield navigator.clipboard.writeText(value);
        setCopySuccess(true);
      } catch (err) {
        setCopySuccess(false);
      }
    });

    return function handleCopy() {
      return _ref.apply(this, arguments);
    };
  }();

  var title = device ? "Random Device Identifier" : firmware ? "Random Product Identifier" : "Random Service Identifier";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    title: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null, value !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    variant: "h5",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    id: fieldId,
    value: value,
    readOnly: true,
    inputProps: {
      "aria-labelledby": labelId
    }
  }), copySuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null)), value === undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    severity: "error"
  }, "Oops, unable to generate a strong random number.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    "aria-label": "copy random number to clipboard",
    size: "small",
    variant: "contained",
    onClick: handleCopy
  }, "Copy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    "aria-label": "regenerate random number",
    size: "small",
    variant: "contained",
    color: "primary",
    onClick: handleRegenerate
  }, "Regenerate"))));
}

/***/ }),

/***/ 29394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFirmwareBlobs; },
  "x": function() { return /* binding */ useFirmwareBlob; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flashing.ts
var flashing = __webpack_require__(91758);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(94904);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__(78136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(15785);
;// CONCATENATED MODULE: ./src/components/hooks/useIdleCallback.ts


function useIdleCallback(cb, timeout, deps) {
  (0,react.useEffect)(() => {
    if (typeof window === "undefined" || !cb) return;

    if ("requestIdleCallback" in window) {
      var id = window.requestIdleCallback(cb, {
        timeout
      });
      return () => window.cancelIdleCallback(id);
    } else {
      var _id = setTimeout(cb, timeout);

      return () => clearTimeout(_id);
    }
  }, [cb, timeout].concat((0,toConsumableArray/* default */.Z)(deps || [])));
}
// EXTERNAL MODULE: ./src/components/hooks/useMounted.ts
var useMounted = __webpack_require__(72179);
// EXTERNAL MODULE: ./src/components/hooks/useAnalytics.ts + 88 modules
var useAnalytics = __webpack_require__(72513);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(74450);
;// CONCATENATED MODULE: ./src/components/firmware/useFirmwareBlobs.ts













function useFirmwareBlobs() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    db
  } = (0,react.useContext)(DbContext/* default */.ZP);
  var {
    trackEvent
  } = (0,useAnalytics/* default */.ZP)();
  var {
    0: throttled,
    1: setThrottled
  } = (0,react.useState)(false);
  var mounted = (0,useMounted/* default */.Z)();
  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;
  var specifications = (0,useDeviceSpecifications/* default */.Z)();
  var loadFirmwares = (0,react.useCallback)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    var names = yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.list();
    if (!names) return;
    var slugs = (0,utils/* unique */.Tw)(specifications.filter(spec => {
      var _spec$productIdentifi;

      return !!(spec !== null && spec !== void 0 && (_spec$productIdentifi = spec.productIdentifiers) !== null && _spec$productIdentifi !== void 0 && _spec$productIdentifi.length);
    }) // needs some product identifiers
    .map(spec => spec.repo).filter(repo => /^https:\/\/github.com\//.test(repo)).map(repo => repo.substr("https://github.com/".length)));
    console.debug("firmware: found " + slugs.join(", "));

    for (var slug of slugs) {
      var fw = yield firmwares.get(slug);

      if (fw) {
        var {
          time
        } = fw;
        var age = Date.now() - time;
        console.debug("firmware: " + slug + " age " + (0,pretty/* prettyDuration */.Xh)(age));

        if (age < 3600000) {
          console.debug("firmware: skipping fresh firmware " + slug);
          continue;
        }
      }

      console.debug("firmware: fetch latest release of " + slug);
      var {
        status,
        release
      } = yield (0,github/* fetchLatestRelease */.pY)(slug, {
        ignoreThrottled: true
      });
      trackEvent("github.fetch", {
        status,
        slug
      });

      if (status === 403) {
        trackEvent("github.fetch.throttled", {
          repo: slug
        });
        if (mounted()) setThrottled(true);
      }

      if (!(release !== null && release !== void 0 && release.version)) {
        trackEvent("github.fetch.notfound", {
          repo: slug
        });
        console.warn("firmware: release not found");
        return;
      }

      setThrottled(false);
      console.log("firmware: fetch binary release " + slug + " " + release.version);
      var firmware = yield (0,github/* fetchReleaseBinary */.dW)(slug, release.version);

      if (firmware) {
        console.debug("firmware: binary release " + slug + " " + release.version + " downloaded");
        firmwares.set(slug, {
          time: Date.now(),
          firmware
        });
      } // throttle github queries


      yield bus.delay(5000);
    }
  }), [db, firmwares, throttled]); // reload firmwares

  useIdleCallback(loadFirmwares, 5000, [db, firmwares]); // update bus with info on changes

  (0,useChange/* useChangeAsync */.R)(firmwares, /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (fw) {
      var names = yield fw === null || fw === void 0 ? void 0 : fw.list();
      var uf2s = [];

      if (names !== null && names !== void 0 && names.length) {
        for (var name of names) {
          var {
            firmware
          } = (yield fw.get(name)) || {};

          if (firmware) {
            var uf2Blobs = yield (0,flashing/* parseFirmwareFile */.Ub)(firmware, name);
            uf2Blobs === null || uf2Blobs === void 0 ? void 0 : uf2Blobs.forEach(uf2Blob => {
              uf2s.push(uf2Blob);
            });
          }
        }
      }

      bus.firmwareBlobs = uf2s;
    });

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  return {
    throttled
  };
}
function useFirmwareBlob(repoSlug) {
  var _repoSlug;

  repoSlug = (_repoSlug = repoSlug) === null || _repoSlug === void 0 ? void 0 : _repoSlug.replace(/^https:\/\/github\.com\//i, "");
  var {
    db
  } = (0,react.useContext)(DbContext/* default */.ZP);
  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;
  var blobs = (0,useChange/* useChangeAsync */.R)(firmwares, /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    if (!repoSlug) return undefined;
    var {
      firmware
    } = (yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.get(repoSlug)) || {};

    if (!firmware) {
      return undefined;
    } else {
      var uf2Blobs = yield (0,flashing/* parseFirmwareFile */.Ub)(firmware, repoSlug);
      return uf2Blobs;
    }
  }), [repoSlug]);

  var setFirmwareFile = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* (tag, f) {
      if (!f) yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.set(repoSlug, undefined);else yield firmwares === null || firmwares === void 0 ? void 0 : firmwares.set(repoSlug, {
        time: Date.now(),
        firmware: f
      });
    });

    return function setFirmwareFile(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return {
    firmwareBlobs: blobs,
    setFirmwareFile
  };
}

/***/ }),

/***/ 78136:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pY": function() { return /* binding */ fetchLatestRelease; },
  "dW": function() { return /* binding */ fetchReleaseBinary; },
  "E1": function() { return /* binding */ normalizeSlug; },
  "Jo": function() { return /* binding */ parseRepoUrl; },
  "J$": function() { return /* binding */ useFetchJSON; },
  "G$": function() { return /* binding */ useLatestRelease; },
  "Fm": function() { return /* binding */ useLatestReleases; },
  "Ux": function() { return /* binding */ useRepository; }
});

// UNUSED EXPORTS: GITHUB_API_KEY, fetchText

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./src/components/semver.ts
var semver = __webpack_require__(14914);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useFetch.ts



function useFetch(url, options) {
  var {
    0: response,
    1: setResponse
  } = (0,react.useState)(undefined); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var {
    0: error,
    1: setError
  } = (0,react.useState)(undefined);
  var {
    0: status,
    1: setStatus
  } = (0,react.useState)(undefined);
  var {
    0: loading,
    1: setLoading
  } = (0,react.useState)(true); // start in loading mode

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      setLoading(true);

      try {
        if (!url) {
          setStatus(404);
          setResponse(undefined);
        } else {
          var res = yield fetch(url, options);
          if (!mounted()) return;
          var _status = res.status;
          setStatus(_status);

          if (_status >= 200 && _status <= 204) {
            var json = yield res.json();
            if (!mounted()) return;
            setResponse(json);
          }
        }
      } catch (error) {
        if (!mounted()) return;
        setError(error);
      } finally {
        if (mounted()) setLoading(false);
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [url]);
  return {
    response,
    error,
    status,
    loading
  };
}
;// CONCATENATED MODULE: ./src/components/github.ts



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ROOT = "https://api.github.com/";
var GITHUB_API_KEY = "githubtoken";

function contentToFirmwareRelease(content) {
  var _$exec;

  // filter out non-file, non-uf2
  var version = (content === null || content === void 0 ? void 0 : content.type) === "file" && ((_$exec = /^fw-(\d+\.\d+.\d+)\.uf2$/.exec(content.name)) === null || _$exec === void 0 ? void 0 : _$exec[1]);
  if (!version) return undefined;
  return {
    version,
    sha: content.sha,
    size: content.size,
    html_url: content.html_url,
    download_url: content.download_url
  };
}

function contentsToFirmwareReleases(contents) {
  return contents === null || contents === void 0 ? void 0 : contents.map(contentToFirmwareRelease).filter(r => !!r).sort((l, r) => -(0,semver/* semverCmp */.k)(l.version, r.version));
}

function normalizeSlug(slug) {
  if (!slug) return {};
  var cleaned = slug.replace(/^https:\/\/github.com\//, "");
  var parts = cleaned.split("/");
  return {
    repoPath: parts[0] + "/" + parts[1],
    folder: parts.slice(2).join("/")
  };
}
function parseRepoUrl(url) {
  var m = /^https:\/\/github\.com\/([^/ \t]+)\/([^/ \t]+)\/?$/.exec(url || "");
  if (m) return {
    owner: m[1],
    name: m[2]
  };
  return undefined;
}
function fetchLatestRelease(_x, _x2) {
  return _fetchLatestRelease.apply(this, arguments);
}

function _fetchLatestRelease() {
  _fetchLatestRelease = (0,asyncToGenerator/* default */.Z)(function* (slug, options) {
    // https://api.github.com/repos/microsoft/jacdac-msr-modules/contents/dist
    var {
      repoPath
    } = normalizeSlug(slug);
    var uri = ROOT + "repos/" + repoPath + "/contents/dist";
    var resp = yield fetch(uri); //    console.log(resp)

    var {
      status
    } = resp;

    switch (status) {
      case 200:
      case 204:
        {
          var contents = yield resp.json();
          var releases = contentsToFirmwareReleases(contents);
          return {
            release: releases[0],
            status
          };
        }

      case 404:
        // unknow repo or no access
        return {
          status
        };

      case 403:
        // throttled
        if (options !== null && options !== void 0 && options.ignoreThrottled) return {
          status
        };
        throw new Error("Too many calls to GitHub, try again later");
    }

    throw new Error("unknown status code " + resp.status);
  });
  return _fetchLatestRelease.apply(this, arguments);
}

function fetchReleaseBinary(_x3, _x4) {
  return _fetchReleaseBinary.apply(this, arguments);
}

function _fetchReleaseBinary() {
  _fetchReleaseBinary = (0,asyncToGenerator/* default */.Z)(function* (slug, version) {
    // we are not using the release api because of CORS.
    var {
      repoPath
    } = normalizeSlug(slug);
    var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/main/dist/fw-" + version + ".uf2";
    var req = yield fetch(downloadUrl, {
      headers: {
        Accept: "application/octet-stream"
      }
    });

    if (req.status == 200) {
      var firmware = yield req.blob();
      return firmware;
    }

    return undefined;
  });
  return _fetchReleaseBinary.apply(this, arguments);
}

function fetchText(_x5, _x6, _x7, _x8) {
  return _fetchText.apply(this, arguments);
}

function _fetchText() {
  _fetchText = _asyncToGenerator(function* (slug, tag, path, mimeType) {
    var {
      repoPath,
      folder
    } = normalizeSlug(slug);
    var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
    var req = yield fetch(downloadUrl, {
      headers: {
        Accept: mimeType
      }
    });

    if (req.status == 200) {
      var src = yield req.text();
      return src;
    }

    return undefined;
  });
  return _fetchText.apply(this, arguments);
}

function useFetchApi(path, options) {
  var res = useFetch(path ? "" + ROOT + path : undefined);
  if (res.status !== undefined) switch (res.status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
      break;

    case 404:
      // unknow repo or no access
      res.response = undefined;
      break;

    case 403:
      // throttled
      if (options !== null && options !== void 0 && options.ignoreThrottled) {
        res.response = undefined;
        return res;
      } else throw new Error("Too many calls to GitHub, try again later");

    default:
      console.log("unknown status", res);
      throw new Error("Unknown response from GitHub " + res.status);
  }
  return res;
}

function useFetchJSON(slug, tag, path, mimeType) {
  var {
    repoPath,
    folder
  } = normalizeSlug(slug);
  var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
  return useFetch(downloadUrl, {
    headers: {
      Accept: mimeType
    }
  });
}
function useRepository(slug) {
  var {
    repoPath
  } = normalizeSlug(slug);
  var path = repoPath ? "repos/" + repoPath : undefined;
  var res = useFetchApi(path, {
    ignoreThrottled: true
  });
  return res;
}
function useLatestRelease(slug, options) {
  var _resp$response;

  var resp = useLatestReleases(slug, options);
  return _objectSpread(_objectSpread({}, resp), {}, {
    response: (_resp$response = resp.response) === null || _resp$response === void 0 ? void 0 : _resp$response[0]
  });
}
function useLatestReleases(slug, options) {
  if (!slug) return {
    response: undefined,
    loading: false,
    error: undefined,
    status: undefined
  };
  var {
    repoPath
  } = normalizeSlug(slug);
  var uri = "repos/" + repoPath + "/contents/dist";
  var res = useFetchApi(uri, _objectSpread(_objectSpread({}, options || {}), {}, {
    ignoreThrottled: true
  }));
  return _objectSpread(_objectSpread({}, res), {}, {
    response: contentsToFirmwareReleases(res.response)
  });
}

/***/ }),

/***/ 14914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ semverCmp; }
/* harmony export */ });
function cmp(a, b) {
  if (!a) {
    if (!b) return 0;else return 1;
  } else if (!b) return -1;else {
    var d = a.major - b.major || a.minor - b.minor || a.patch - b.patch;
    if (d) return d;
    if (a.pre.length == 0 && b.pre.length > 0) return 1;
    if (a.pre.length > 0 && b.pre.length == 0) return -1;

    for (var i = 0; i < a.pre.length + 1; ++i) {
      var aa = a.pre[i];
      var bb = b.pre[i];
      if (!aa) {
        if (!bb) return 0;else return -1;
      } else if (!bb) return 1;else if (/^\d+$/.test(aa)) {
        if (/^\d+$/.test(bb)) {
          d = parseInt(aa) - parseInt(bb);
          if (d) return d;
        } else return -1;
      } else if (/^\d+$/.test(bb)) return 1;else {
        d = strcmp(aa, bb);
        if (d) return d;
      }
    }

    return 0;
  }
}

function tryParse(v) {
  if (!v) return null;

  if ("*" === v) {
    return {
      major: Number.MAX_SAFE_INTEGER,
      minor: Number.MAX_SAFE_INTEGER,
      patch: Number.MAX_SAFE_INTEGER,
      pre: [],
      build: []
    };
  }

  if (/^v\d/i.test(v)) v = v.slice(1);
  var m = /^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);
  if (m) return {
    major: parseInt(m[1]),
    minor: parseInt(m[2]),
    patch: parseInt(m[3]),
    pre: m[5] ? m[5].split(".") : [],
    build: m[7] ? m[7].split(".") : []
  };
  return null;
}

function strcmp(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;else return 1;
}

function semverCmp(a, b) {
  var aa = tryParse(a);
  var bb = tryParse(b);
  if (!aa && !bb) return strcmp(a, b);else return cmp(aa, bb);
}

/***/ }),

/***/ 79739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45987);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66449);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["children", "padding", "elevation", "bgcolor"];


function PaperBox(props) {
  var {
    children,
    padding,
    elevation,
    bgcolor
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ 221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DeviceRegistration; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/Link.js
var Link = __webpack_require__(26601);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(34093);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(65970);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(30664);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(79675);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(11521);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(39211);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./node_modules/@mui/material/Menu/Menu.js + 5 modules
var Menu = __webpack_require__(42333);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(87122);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./src/components/RandomGenerator.tsx
var RandomGenerator = __webpack_require__(72833);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(63015);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Create.js
var Create = __webpack_require__(64478);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(71973);
// EXTERNAL MODULE: ./src/components/github.ts + 1 modules
var github = __webpack_require__(78136);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(7611);
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/cssUtils.js
var cssUtils = __webpack_require__(38549);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(67663);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/skeletonClasses.js

function getSkeletonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSkeleton', slot);
}
var skeletonClasses = (0,generateUtilityClasses/* default */.Z)('MuiSkeleton', ['root', 'text', 'rectangular', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
/* harmony default export */ var Skeleton_skeletonClasses = ((/* unused pure expression or super */ null && (skeletonClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Skeleton/Skeleton.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4;



var _excluded = ["animation", "className", "component", "height", "style", "variant", "width"];

var _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;











var useUtilityClasses = ownerState => {
  var {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  var slots = {
    root: ['root', variant, animation, hasChildren && 'withChildren', hasChildren && !width && 'fitContent', hasChildren && !height && 'heightAuto']
  };
  return (0,composeClasses/* default */.Z)(slots, getSkeletonUtilityClass, classes);
};

var pulseKeyframe = (0,emotion_react_browser_esm.keyframes)(_t || (_t = _(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))));
var waveKeyframe = (0,emotion_react_browser_esm.keyframes)(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))));
var SkeletonRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiSkeleton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.animation !== false && styles[ownerState.animation], ownerState.hasChildren && styles.withChildren, ownerState.hasChildren && !ownerState.width && styles.fitContent, ownerState.hasChildren && !ownerState.height && styles.heightAuto];
  }
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  var radiusUnit = (0,cssUtils/* getUnit */.Wy)(theme.shape.borderRadius) || 'px';
  var radiusValue = (0,cssUtils/* toUnitless */.YL)(theme.shape.borderRadius);
  return (0,esm_extends/* default */.Z)({
    display: 'block',
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.mode === 'light' ? 0.11 : 0.13),
    height: '1.2em'
  }, ownerState.variant === 'text' && {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    transformOrigin: '0 55%',
    transform: 'scale(1, 0.60)',
    borderRadius: "".concat(radiusValue).concat(radiusUnit, "/").concat(Math.round(radiusValue / 0.6 * 10) / 10).concat(radiusUnit),
    '&:empty:before': {
      content: '"\\00a0"'
    }
  }, ownerState.variant === 'circular' && {
    borderRadius: '50%'
  }, ownerState.hasChildren && {
    '& > *': {
      visibility: 'hidden'
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: 'fit-content'
  }, ownerState.hasChildren && !ownerState.height && {
    height: 'auto'
  });
}, _ref2 => {
  var {
    ownerState
  } = _ref2;
  return ownerState.animation === 'pulse' && (0,emotion_react_browser_esm.css)(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = (0,taggedTemplateLiteral/* default */.Z)(["\n      animation: ", " 1.5s ease-in-out 0.5s infinite;\n    "])), 0)), pulseKeyframe);
}, _ref3 => {
  var {
    ownerState,
    theme
  } = _ref3;
  return ownerState.animation === 'wave' && (0,emotion_react_browser_esm.css)(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = (0,taggedTemplateLiteral/* default */.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: ", " 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ", ", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "])), 0, 0)), waveKeyframe, theme.palette.action.hover);
});
var Skeleton = /*#__PURE__*/react.forwardRef(function Skeleton(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSkeleton'
  });

  var {
    animation = 'pulse',
    className,
    component = 'span',
    height,
    style,
    variant = 'text',
    width
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SkeletonRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ref: ref,
    className: (0,clsx_m["default"])(classes.root, className),
    ownerState: ownerState
  }, other, {
    style: (0,esm_extends/* default */.Z)({
      width,
      height
    }, style)
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Skeleton_Skeleton = (Skeleton);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useBlobCanvas.ts




function readBlobToCanvas(blob, width, height) {
  return new Promise((resolve, reject) => {
    var url = URL.createObjectURL(blob);
    var img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(url);
      var cvs = document.createElement("canvas");
      cvs.width = width;
      cvs.height = height;
      var ctx = cvs.getContext("2d"); // compute center of image to be copied into canvas

      var cw = cvs.width;
      var ch = cvs.height;
      var car = cw / ch;
      var iw = img.width;
      var ih = img.height;
      var iar = iw / ih;
      var sx = 0,
          sy = 0,
          sw = iw,
          sh = ih;

      if (iar < car) {
        // image is wider, clip sides
        var dw = iw - cw;
        sx = dw >> 1;
        sw = iw - dw;
      } else {
        // klip top
        var dh = ih - ch;
        sy = dh >> 1;
        sh = ih - dh;
      }

      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch); // done

      resolve(cvs);
    };

    img.onerror = () => {
      // error
      URL.revokeObjectURL(url);
      reject(undefined);
    };

    img.src = url;
  });
}

function useBlobCanvas(blob, width, height) {
  var {
    0: canvas,
    1: setCanvas
  } = (0,react.useState)(undefined);
  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    if (!blob) setCanvas(undefined);else {
      try {
        var cvs = yield readBlobToCanvas(blob, width, height);
        setCanvas(cvs);
      } catch (e) {
        setCanvas(undefined);
      }
    }
  }), [blob, width, height]);
  return canvas;
}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 1 modules
var Suspense = __webpack_require__(18581);
;// CONCATENATED MODULE: ./src/components/ui/ImageImportCanvas.tsx







var PREFIX = "ImageImportCanvas";
var classes = {
  root: PREFIX + "-root",
  img: PREFIX + "-img",
  btn: PREFIX + "-btn"
};
var Root = (0,styled/* default */.ZP)("div")(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["&." + classes.root]: {
      position: "relative"
    },
    ["& ." + classes.img]: {
      margin: "auto",
      display: "block",
      width: "100%"
    },
    ["& ." + classes.btn]: {
      position: "absolute",
      borderRadius: "6rem",
      left: "calc(50% - 2rem)",
      top: "calc(50% - 2rem)",
      background: theme.palette.background.paper
    }
  };
});
var ImportButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 20119)));
function ImportImageCanvas(props) {
  var {
    width,
    height,
    onImageImported
  } = props;
  var {
    0: imageBlob,
    1: setImageBlob
  } = (0,react.useState)(undefined);
  var canvas = useBlobCanvas(imageBlob, width, height);
  var canvasUrl = (0,react.useMemo)(() => canvas === null || canvas === void 0 ? void 0 : canvas.toDataURL("image/png"), [canvas]);

  var handleFilesUploaded = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (files) {
      var file = files[0];
      setImageBlob(file);
    });

    return function handleFilesUploaded(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // notify of new canvas


  (0,react.useEffect)(() => canvas && onImageImported(canvas), [canvas]);
  return /*#__PURE__*/react.createElement(Root, {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.img
  }, !canvasUrl && /*#__PURE__*/react.createElement(Skeleton_Skeleton, {
    variant: "rectangular",
    width: "100%",
    height: "18rem"
  }), canvasUrl && /*#__PURE__*/react.createElement("img", {
    alt: "preview",
    src: canvasUrl,
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    className: classes.btn
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    icon: true,
    text: "Import 4:3 image",
    onFilesUploaded: handleFilesUploaded,
    acceptedFiles: ["image/jpeg", "image/png"]
  }))));
}
// EXTERNAL MODULE: ./node_modules/@mui/material/Autocomplete/Autocomplete.js + 4 modules
var Autocomplete = __webpack_require__(56994);
;// CONCATENATED MODULE: ./node_modules/@mui/lab/Autocomplete/Autocomplete.js




var warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ var Autocomplete_Autocomplete = (/*#__PURE__*/react.forwardRef(function DeprecatedAutocomplete(props, ref) {
  if (!warnedOnce) {
    console.warn(['MUI: The Autocomplete component was moved from the lab to the core.', '', "You should use `import { Autocomplete } from '@mui/material'`", "or `import Autocomplete from '@mui/material/Autocomplete'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete/* default */.Z, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props));
}));
// EXTERNAL MODULE: ./src/components/firmware/useFirmwareBlobs.ts + 1 modules
var useFirmwareBlobs = __webpack_require__(29394);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/AddServiceIconButton.tsx
var AddServiceIconButton = __webpack_require__(27498);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./src/components/devices/DeviceCardHeader.tsx + 1 modules
var DeviceCardHeader = __webpack_require__(33292);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(74450);
;// CONCATENATED MODULE: ./src/pages/tools/device-registration.tsx


/* eslint-disable jsx-a11y/img-redundant-alt */







 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





 // tslint:disable-next-line: no-submodule-imports












var GithubPullRequestButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 8831).then(__webpack_require__.bind(__webpack_require__, 78831)));

function CompanySelect(props) {
  var {
    onValueChange,
    value,
    error
  } = props;
  var {
    0: company,
    1: setCompany
  } = (0,react.useState)(value);
  var specifications = (0,useDeviceSpecifications/* default */.Z)();
  var companies = (0,react.useMemo)(() => (0,utils/* unique */.Tw)(specifications.map(dev => dev.company)), [specifications]);
  var companyId = (0,react_use_id_hook_esm/* useId */.Me)();
  var helperText = "Name of the company manufacturing this device. The company name will be used to generate the module identifier.";

  var handleChange = (ev, newValue) => {
    setCompany(newValue);
    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
  };

  var renderInputs = params => /*#__PURE__*/react.createElement(TextField/* default */.Z, Object.assign({}, params, {
    error: !!error,
    label: "Company",
    helperText: error || helperText,
    variant: "outlined"
  }));

  return /*#__PURE__*/react.createElement(Autocomplete_Autocomplete, {
    id: companyId,
    freeSolo: true,
    fullWidth: true,
    includeInputInList: true,
    autoComplete: true,
    options: companies,
    renderInput: renderInputs,
    inputValue: company,
    "aria-label": helperText,
    onInputChange: handleChange
  });
}

function DeviceRegistration() {
  var _device$name, _device$id, _device$productIdenti, _device$services;

  var [device, setDevice] = (0,useLocalStorage/* default */.Z)("jacdac:devicedesigner;2", {
    id: "my-device",
    name: "My device",
    services: [],
    productIdentifiers: [],
    repo: ""
  });
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    physical: true,
    ignoreInfrastructure: true,
    productIdentifier: true
  });

  var updateDevice = () => {
    var dev = (0,utils/* clone */.d9)(device);
    dev.id = (0,jdspec/* generateDeviceSpecificationId */.vc)(dev);
    setDevice(dev);
  };

  var [firmwaresAnchorEl, setFirmwaresAnchorEl] = react.useState(null);
  var {
    0: imageDataURI,
    1: setImageDataURI
  } = (0,react.useState)(undefined);
  var nameId = (0,react_use_id_hook_esm/* useId */.Me)();
  var firmwareMenuId = (0,react_use_id_hook_esm/* useId */.Me)();
  var repoId = (0,react_use_id_hook_esm/* useId */.Me)();
  var identifierId = (0,react_use_id_hook_esm/* useId */.Me)();
  var descriptionId = (0,react_use_id_hook_esm/* useId */.Me)();
  var homepageId = (0,react_use_id_hook_esm/* useId */.Me)();
  var hardwareVersionId = (0,react_use_id_hook_esm/* useId */.Me)();
  var hardwareDesignId = (0,react_use_id_hook_esm/* useId */.Me)();
  var specifications = (0,useDeviceSpecifications/* default */.Z)();

  var handleServiceAdd = srv => {
    console.log("add", srv.classIdentifier);
    device.services.push(srv.classIdentifier);
    updateDevice();
  };

  var companyRepos = (0,react.useMemo)(() => (0,utils/* unique */.Tw)(specifications.filter(d => d.company === device.company).map(d => d.repo).filter(repo => !!repo)), [device === null || device === void 0 ? void 0 : device.company, specifications]);
  var {
    firmwareBlobs
  } = (0,useFirmwareBlobs/* useFirmwareBlob */.x)(device.repo);
  var variant = "outlined";
  var companyError = !device.company ? "select a company" : "";
  var nameError = ((_device$name = device.name) === null || _device$name === void 0 ? void 0 : _device$name.length) > 32 ? "name too long" : undefined;
  var parsedRepo = (0,github/* parseRepoUrl */.Jo)(device.repo);
  var githubError = device.repo && !parsedRepo ? "invalid GitHub repository" : "";
  var linkError = !device.link || /^https:\/\//.test(device.link) ? "" : "Must be https://...";
  var idError = !device.id ? "missing identifier" : (0,spec.deviceSpecifications)({
    includeDeprecated: true,
    includeExperimental: true
  }).find(dev => dev.id == device.id) ? "identifer already used" : "";
  var imageError = !imageDataURI ? "missing image" : "";
  var versionError = device !== null && device !== void 0 && device.version && !/^(v\d+\.\d+(\.\d+(\.\d+)?)?\w?)?$/.test(device === null || device === void 0 ? void 0 : device.version) ? "Preferred format is vN.N" : "";
  var ok = !nameError && !linkError && !idError && !imageError && !companyError;
  var route = (_device$id = device.id) === null || _device$id === void 0 ? void 0 : _device$id.split("-").join("/");
  var modulePath = ok && "devices/" + route + ".json";
  var imagePath = ok && "devices/" + route + ".jpg";

  var handleNameChange = ev => {
    device.name = ev.target.value;
    updateDevice();
  };

  var handleRepoChange = (ev, newValue) => {
    console.log("new repo", {
      newValue
    });
    device.repo = newValue;
    updateDevice();
  };

  var handleLinkChange = ev => {
    device.link = ev.target.value;
    updateDevice();
  };

  var handleDescriptionChange = ev => {
    device.description = ev.target.value;
    updateDevice();
  };

  var handleDeleteService = i => () => {
    device.services.splice(i, 1);
    updateDevice();
  };

  var handleDeleteFirmware = i => () => {
    device.productIdentifiers.splice(i, 1);
    updateDevice();
  };

  var handleHardwareDesign = ev => {
    var _ev$target$value;

    device.designIdentifier = (_ev$target$value = ev.target.value) === null || _ev$target$value === void 0 ? void 0 : _ev$target$value.trim();
    updateDevice();
  };

  var handleVersion = ev => {
    var _ev$target$value2;

    device.version = (_ev$target$value2 = ev.target.value) === null || _ev$target$value2 === void 0 ? void 0 : _ev$target$value2.trim();
    updateDevice();
  };

  var handleFirmwareAddClick = event => {
    setFirmwaresAnchorEl(event.currentTarget); // device.firmwares.push(parseInt(uniqueFirmwareId(), 16))

    updateDevice();
  };

  var handleProductIdentifierAddRandomClick = () => {
    device.productIdentifiers.push(parseInt((0,RandomGenerator.uniqueFirmwareId)(), 16));
    updateDevice();
  };

  var handleFirmwareAddClose = blob => () => {
    setFirmwaresAnchorEl(null);
    var id = blob === null || blob === void 0 ? void 0 : blob.productIdentifier;

    if (id !== undefined) {
      device.productIdentifiers.push(id);
      device.name = blob.name;
      updateDevice();
    }
  };

  var handleImageImported = cvs => {
    var url = cvs.toDataURL("image/jpeg", 100);
    setImageDataURI(url);
  };

  var handleCompanyChanged = value => {
    device.company = value;
    updateDevice();
  };

  var renderRepoInput = params => /*#__PURE__*/react.createElement(TextField/* default */.Z, Object.assign({}, params, {
    error: !!githubError,
    type: "url",
    label: "Firmware repository",
    helperText: githubError || "GitHub Repository hosting the firmware binaries.",
    variant: "outlined"
  }));

  var handleImportDevice = dev => /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    var controlService = dev.service(0);
    var descrReg = controlService.register(specconstants/* ControlReg.DeviceDescription */.toU.DeviceDescription);
    yield descrReg.refresh(true);
    var fw = yield dev.resolveProductIdentifier();
    if (fw) device.productIdentifiers = [fw];
    device.services = dev.services().filter(srv => !(0,spec/* isInfrastructure */.lz)(srv.specification)).map(srv => srv.serviceClass);
    device.description = descrReg.stringValue;
    updateDevice();
  }); // eslint-disable-next-line @typescript-eslint/ban-types


  var files = (0,react.useMemo)(() => modulePath && {
    [modulePath]: JSON.stringify((0,jdspec/* normalizeDeviceSpecification */.dj)(device), null, 2),
    [imagePath]: {
      content: imageDataURI === null || imageDataURI === void 0 ? void 0 : imageDataURI.slice(imageDataURI === null || imageDataURI === void 0 ? void 0 : imageDataURI.indexOf(",")),
      encoding: "base64"
    }
  }, [modulePath, imagePath, imageDataURI, JSON.stringify(device)]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Device Registration"), /*#__PURE__*/react.createElement("p", null, "Compose a device from various services, prepare the metadata and register it to the", " ", /*#__PURE__*/react.createElement(Link/* default */.Z, {
    href: "/devices/",
    underline: "hover"
  }, "Devices catalog"), "."), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    direction: "row",
    spacing: 2
  }, devices.map(dev => /*#__PURE__*/react.createElement(Grid/* default */.ZP, Object.assign({
    item: true,
    key: dev.id
  }, gridBreakpoints), /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
    device: dev
  }), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleImportDevice(dev)
  }, "Import"))))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: nameId,
    required: true,
    error: !!nameError,
    helperText: nameError,
    fullWidth: true,
    label: "Name",
    placeholder: "My module",
    value: device.name || "",
    onChange: handleNameChange,
    variant: variant
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Autocomplete_Autocomplete, {
    id: repoId,
    freeSolo: true,
    autoComplete: true,
    placeholder: "https://github.com/...",
    inputValue: device.repo || "",
    onInputChange: handleRepoChange,
    options: companyRepos,
    renderInput: renderRepoInput
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(CompanySelect, {
    value: device === null || device === void 0 ? void 0 : device.company,
    error: companyError,
    onValueChange: handleCompanyChanged
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: hardwareDesignId,
    fullWidth: true,
    helperText: "A unique identifier for this hardware design.",
    label: "Hardware design",
    value: device === null || device === void 0 ? void 0 : device.designIdentifier,
    onChange: handleHardwareDesign,
    variant: variant
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: hardwareVersionId,
    fullWidth: true,
    error: !!versionError,
    helperText: versionError || "Revision identifier for this hardware design using semver format (v1.0, v1.1, ...)",
    label: "Version",
    value: device === null || device === void 0 ? void 0 : device.version,
    onChange: handleVersion,
    variant: variant
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    elevation: 1
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, null, "Product Identifiers"), (_device$productIdenti = device.productIdentifiers) === null || _device$productIdenti === void 0 ? void 0 : _device$productIdenti.map((id, i) => {
    var blob = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.find(b => b.productIdentifier == id);
    return /*#__PURE__*/react.createElement(Box/* default */.Z, {
      component: "span",
      ml: 0.5,
      mb: 0.5,
      key: id
    }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      label: blob ? blob.name + " (0x" + id.toString(16) + ")" : "0x" + id.toString(16),
      onDelete: handleDeleteFirmware(i)
    }));
  }), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Add random product identifier",
    onClick: handleProductIdentifierAddRandomClick
  }, /*#__PURE__*/react.createElement(Create/* default */.Z, null)), firmwareBlobs && /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Add product identifier from repository",
    "aria-controls": firmwareMenuId,
    "aria-haspopup": "true",
    onClick: handleFirmwareAddClick
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null)), /*#__PURE__*/react.createElement(Menu/* default */.Z, {
    id: firmwareMenuId,
    anchorEl: firmwaresAnchorEl,
    keepMounted: true,
    open: Boolean(firmwaresAnchorEl),
    onClose: handleFirmwareAddClose(undefined)
  }, firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.map(blob => /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    key: blob.productIdentifier,
    value: blob.productIdentifier.toString(16),
    onClick: handleFirmwareAddClose(blob)
  }, blob.name, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption",
    component: "span"
  }, blob.version)))), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption",
    component: "div"
  }, "Product identifiers uniquely identify your hardware on the Jacdac bus. Each revision of your hardware may have a different identifier."))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, {
    elevation: 1
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    color: "inherit"
  }, "Services"), (_device$services = device.services) === null || _device$services === void 0 ? void 0 : _device$services.map((id, i) => {
    var _serviceSpecification;

    return /*#__PURE__*/react.createElement(Box/* default */.Z, {
      component: "span",
      m: 0.5,
      key: id
    }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      label: ((_serviceSpecification = (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(id)) === null || _serviceSpecification === void 0 ? void 0 : _serviceSpecification.name) || id,
      onDelete: handleDeleteService(i)
    }));
  }), /*#__PURE__*/react.createElement(AddServiceIconButton/* default */.Z, {
    onAdd: handleServiceAdd
  }))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: identifierId,
    disabled: true,
    error: !!idError,
    fullWidth: true,
    label: "Identifier",
    helperText: "This generated identifer is a URL friendly string created from your company and product name.",
    variant: variant,
    value: device.id || ""
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: descriptionId,
    fullWidth: true,
    required: true,
    label: "Description",
    multiline: true,
    rows: 4,
    value: device.description || "",
    onChange: handleDescriptionChange,
    variant: variant
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: homepageId,
    label: "Home page url",
    error: !!linkError,
    helperText: linkError,
    fullWidth: true,
    placeholder: "https://...",
    value: device.link || "",
    onChange: handleLinkChange,
    variant: variant,
    type: "url"
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, null, "Catalog image"), /*#__PURE__*/react.createElement(ImportImageCanvas, {
    width: jdspec/* DEVICE_IMAGE_WIDTH */.AE,
    height: jdspec/* DEVICE_IMAGE_HEIGHT */.CO,
    onImageImported: handleImageImported
  }), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption",
    component: "div"
  }, "Import a " + jdspec/* DEVICE_IMAGE_WIDTH */.AE + "x" + jdspec/* DEVICE_IMAGE_HEIGHT */.CO + " image of the device."), imageError && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, imageError))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(GithubPullRequestButton, {
    label: "register device",
    title: "Device: " + device.name,
    head: "devices/" + device.id,
    description: "This pull request registers a new device for Jacdac.",
    files: files
  })))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-device-registration-tsx-dbc55fefc5277716848e.js.map