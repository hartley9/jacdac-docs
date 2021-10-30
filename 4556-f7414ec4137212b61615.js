"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4556],{

/***/ 60669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ workerProxy; }
});

// UNUSED EXPORTS: WorkerProxy

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./src/workers/csv/workerloader.js
function createCsvWorker() {
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(8213), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/data/workerloader.js
function createDataWorker() {
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(2066), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/tf/workerloader.js
function createTFWorker() {
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(9390), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/vm/workerloader.js
function createVMWorker() {
  return typeof Window !== "undefined" && new Worker(new URL( // gatsby fast-refresh ignores files with node_modules in path
  /* worker import */ __webpack_require__.p + __webpack_require__.u(9798), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/cad/workerloader.js
function createCadWorker() {
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(4586), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/components/blockly/dsl/workers/proxy.ts



/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/ban-types */








var WorkerProxy = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(WorkerProxy, _JDEventSource);

  function WorkerProxy(worker, workerid) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.pendings = {};
    _this.worker = worker;
    _this.workerid = workerid;

    _this.worker.addEventListener("message", _this.handleMessage.bind((0,assertThisInitialized/* default */.Z)(_this)));

    return _this;
  }

  var _proto = WorkerProxy.prototype;

  _proto.handleMessage = function handleMessage(event) {
    var {
      data: message
    } = event;
    var {
      id,
      worker
    } = message;
    var pending = this.pendings[id];

    if (pending) {
      (0,utils/* assert */.hu)(worker === message.worker);
      pending.resolve(message);
    } else {
      this.emit(constants/* MESSAGE */.$Bi, event.data);
    }
  };

  _proto.postMessage = function postMessage(message) {
    message.id = message.id || Math.random() + "";
    message.worker = this.workerid;
    return new Promise((resolve, reject) => {
      this.pendings[message.id] = {
        resolve,
        reject
      };
      this.worker.postMessage(message);
    });
  };

  return WorkerProxy;
}(eventsource/* default */.ZP);
var _workers = {};
var loaders = {
  data: createDataWorker,
  csv: createCsvWorker,
  tf: createTFWorker,
  vm: createVMWorker,
  cad: createCadWorker
};
function workerProxy(workerid) {
  var worker = _workers[workerid] || (_workers[workerid] = new WorkerProxy(loaders[workerid](), workerid));
  return worker;
}

/***/ }),

/***/ 54556:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EnclosureGenerator; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 1 modules
var Suspense = __webpack_require__(18581);
// EXTERNAL MODULE: ./src/components/blockly/dsl/workers/proxy.ts + 5 modules
var proxy = __webpack_require__(60669);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/workers/cad.proxy.ts


/* eslint-disable @typescript-eslint/ban-types */

function convertToSTL(_x, _x2) {
  return _convertToSTL.apply(this, arguments);
}

function _convertToSTL() {
  _convertToSTL = (0,asyncToGenerator/* default */.Z)(function* (model, options) {
    var worker = (0,proxy/* default */.Z)("cad");
    var res = yield worker.postMessage({
      worker: "cad",
      type: "convert",
      model,
      options
    });
    return res === null || res === void 0 ? void 0 : res.stl;
  });
  return _convertToSTL.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/components/tools/EnclosureGenerator.tsx





var ModelViewer = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(3737), __webpack_require__.e(1136)]).then(__webpack_require__.bind(__webpack_require__, 91136)));
var STLModel = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(3737), __webpack_require__.e(6218)]).then(__webpack_require__.bind(__webpack_require__, 96218)));
function EnclosureGenerator(props) {
  var {
    color,
    module,
    options
  } = props;
  var {
    0: working,
    1: setWorking
  } = (0,react.useState)(false);
  var {
    0: url,
    1: setUrl
  } = (0,react.useState)("");

  var updateUrl = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setWorking(true);
        var blob = yield convertToSTL(module, options);
        var newUrl = blob ? URL.createObjectURL(blob) : undefined;
        setUrl(newUrl);
      } finally {
        setWorking(false);
      }
    });

    return function updateUrl() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(() => () => URL.revokeObjectURL(url), [url]);

  var handleClick = () => updateUrl();

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    onClick: handleClick,
    variant: "contained",
    color: "primary",
    disabled: working
  }, "Refresh STL")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    href: url,
    variant: "outlined",
    color: "primary",
    download: "enclosure.stl",
    disabled: !url
  }, "Download STL")))), url && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ModelViewer, {
    responsive: true
  }, /*#__PURE__*/react.createElement(STLModel, {
    url: url,
    color: color
  })))));
}

/***/ })

}]);
//# sourceMappingURL=4556-f7414ec4137212b61615.js.map