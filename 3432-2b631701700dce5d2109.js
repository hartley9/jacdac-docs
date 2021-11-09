"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3432],{

/***/ 73432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FirmwareLoader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29394);


function FirmwareLoader() {
  (0,_useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
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
      } = yield (0,github/* fetchLatestFirmwareRelease */.wA)(slug, {
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
      var firmware = yield (0,github/* fetchFirmwareReleaseBinary */.e0)(slug, release.version);

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
  "e0": function() { return /* binding */ fetchFirmwareReleaseBinary; },
  "wA": function() { return /* binding */ fetchLatestFirmwareRelease; },
  "E1": function() { return /* binding */ normalizeSlug; },
  "Jo": function() { return /* binding */ parseRepoUrl; },
  "J$": function() { return /* binding */ useFetchJSON; },
  "B5": function() { return /* binding */ useLatestFirmwareRelease; },
  "ET": function() { return /* binding */ useLatestFirmwareReleases; },
  "Vv": function() { return /* binding */ useLatestReleaseAsset; },
  "Ux": function() { return /* binding */ useRepository; }
});

// UNUSED EXPORTS: GITHUB_API_KEY, fetchText, useLatestRelease

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
function fetchLatestFirmwareRelease(_x, _x2) {
  return _fetchLatestFirmwareRelease.apply(this, arguments);
}

function _fetchLatestFirmwareRelease() {
  _fetchLatestFirmwareRelease = (0,asyncToGenerator/* default */.Z)(function* (slug, options) {
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
  return _fetchLatestFirmwareRelease.apply(this, arguments);
}

function fetchFirmwareReleaseBinary(_x3, _x4) {
  return _fetchFirmwareReleaseBinary.apply(this, arguments);
}

function _fetchFirmwareReleaseBinary() {
  _fetchFirmwareReleaseBinary = (0,asyncToGenerator/* default */.Z)(function* (slug, version) {
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
  return _fetchFirmwareReleaseBinary.apply(this, arguments);
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
function useLatestRelease(slug) {
  var {
    repoPath
  } = normalizeSlug(slug);
  var path = "repos/" + repoPath + "/releases/latest";
  var res = useFetchApi(path);
  return res;
}
function useLatestReleaseAsset(url) {
  var [, slug, filename] = /^https:\/\/github.com\/(.+)\/releases\/download\/.+\/(.+)$/i.exec(url) || [];
  var {
    status,
    response
  } = useLatestRelease(slug); //console.log({ url, slug, filename, status, response })

  if (status === 200 && response) {
    var {
      tag_name,
      name
    } = response;
    return {
      name,
      version: tag_name,
      assertUrl: "https://github.com/" + slug + "/releases/download/" + tag_name + "/" + filename
    };
  } else return {};
}
function useLatestFirmwareRelease(slug, options) {
  var _resp$response;

  var resp = useLatestFirmwareReleases(slug, options);
  return _objectSpread(_objectSpread({}, resp), {}, {
    response: (_resp$response = resp.response) === null || _resp$response === void 0 ? void 0 : _resp$response[0]
  });
}
function useLatestFirmwareReleases(slug, options) {
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

/***/ })

}]);
//# sourceMappingURL=3432-2b631701700dce5d2109.js.map