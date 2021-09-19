/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["id", "worker"];

async function handleMessage(event) {
  const message = event.data; // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    id,
    worker
  } = message,
        rest = _objectWithoutPropertiesLoose(message, _excluded);

  if (worker !== "vm") return; // do something

  const resp = _extends({
    id,
    worker
  }, rest);

  self.postMessage(resp);
}

self.addEventListener("message", handleMessage);
console.debug(`jacdac vm: worker registered`);
//# sourceMappingURL=vm-worker.js.map

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=812.render-page.js.map