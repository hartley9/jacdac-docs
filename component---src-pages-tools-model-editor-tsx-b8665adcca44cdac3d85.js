"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[372],{

/***/ 54959:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 42594:
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

/***/ }),

/***/ 16084:
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
  d: "M6 6h12v12H6z"
}), 'Stop');

exports.Z = _default;

/***/ }),

/***/ 58423:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ InputAdornment_InputAdornment; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/core/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(90600);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49308);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(26759);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(8230);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js

function getInputAdornmentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiInputAdornment', slot);
}
var inputAdornmentClasses = (0,generateUtilityClasses/* default */.Z)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
/* harmony default export */ var InputAdornment_inputAdornmentClasses = (inputAdornmentClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js


var _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];













var overridesResolver = (props, styles) => {
  var {
    ownerState
  } = props;
  return [styles.root, styles["position".concat((0,capitalize/* default */.Z)(ownerState.position))], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};

var useUtilityClasses = ownerState => {
  var {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  var slots = {
    root: ['root', disablePointerEvents && 'disablePointerEvents', position && "position".concat((0,capitalize/* default */.Z)(position)), variant, hiddenLabel && 'hiddenLabel', size && "size".concat((0,capitalize/* default */.Z)(size))]
  };
  return (0,composeClasses/* default */.Z)(slots, getInputAdornmentUtilityClass, classes);
};

var InputAdornmentRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiInputAdornment',
  slot: 'Root',
  overridesResolver
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    height: '0.01em',
    // Fix IE11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    color: theme.palette.action.active
  }, ownerState.variant === 'filled' && {
    // Styles applied to the root element if `variant="filled"`.
    ["&.".concat(InputAdornment_inputAdornmentClasses.positionStart, "&:not(.").concat(InputAdornment_inputAdornmentClasses.hiddenLabel, ")")]: {
      marginTop: 16
    }
  }, ownerState.position === 'start' && {
    // Styles applied to the root element if `position="start"`.
    marginRight: 8
  }, ownerState.position === 'end' && {
    // Styles applied to the root element if `position="end"`.
    marginLeft: 8
  }, ownerState.disablePointerEvents === true && {
    // Styles applied to the root element if `disablePointerEvents={true}`.
    pointerEvents: 'none'
  });
});
var InputAdornment = /*#__PURE__*/react.forwardRef(function InputAdornment(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiInputAdornment'
  });

  var {
    children,
    className,
    component = 'div',
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var muiFormControl = (0,useFormControl/* default */.Z)() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default.Provider */.Z.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornmentRoot, (0,esm_extends/* default */.Z)({
      as: component,
      ownerState: ownerState,
      className: (0,clsx_m["default"])(classes.root, className),
      ref: ref
    }, other, {
      children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "text.secondary",
        children: children
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [position === 'start' ?
        /*#__PURE__*/

        /* notranslate needed while Google Translate will not fix zero-width space issue */

        /* eslint-disable-next-line react/no-danger */
        (0,jsx_runtime.jsx)("span", {
          className: "notranslate",
          dangerouslySetInnerHTML: {
            __html: '&#8203;'
          }
        }) : null, children]
      })
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var InputAdornment_InputAdornment = (InputAdornment);

/***/ }),

/***/ 17890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ClassDataSetGrid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75510);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36176);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54959);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25090);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function ClassDataSetGrid(props) {
  var {
    label,
    tables,
    handleDeleteTable
  } = props;

  var handleDelete = table => () => handleDeleteTable(table);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    subheader: label + (", " + tables.length + " sample(s)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, tables.map(table => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
    item: true,
    key: "result" + table.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    dataSet: table,
    height: 8,
    mini: true
  }), handleDeleteTable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    onClick: handleDelete(table),
    title: "Delete this sample",
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null))))))));
}

/***/ }),

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
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(5669), __webpack_require__.b // syntax not supported in typescript
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

/***/ 82258:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(39211);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(98970);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(25935);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/useChartPalette.ts
var useChartPalette = __webpack_require__(74039);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(15785);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(65970);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(58423);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 1 modules
var Button = __webpack_require__(39135);
// EXTERNAL MODULE: ./node_modules/@mui/material/Autocomplete/Autocomplete.js + 4 modules
var Autocomplete = __webpack_require__(56994);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PlayArrow.js
var PlayArrow = __webpack_require__(57999);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Stop.js
var Stop = __webpack_require__(16084);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/GetApp.js
var GetApp = __webpack_require__(42594);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DeleteSweep.js
var DeleteSweep = __webpack_require__(14728);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/NavigateNext.js
var NavigateNext = __webpack_require__(7564);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(63015);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(71973);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(26799);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/Trend.tsx
var Trend = __webpack_require__(25090);
// EXTERNAL MODULE: ./src/components/ClassDataSetGrid.tsx
var ClassDataSetGrid = __webpack_require__(17890);
// EXTERNAL MODULE: ./src/components/ReadingFieldGrid.tsx
var ReadingFieldGrid = __webpack_require__(29065);
// EXTERNAL MODULE: ./src/components/FieldDataSet.ts
var FieldDataSet = __webpack_require__(64616);
// EXTERNAL MODULE: ./src/components/model-editor/MBDataSet.ts
var MBDataSet = __webpack_require__(99941);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(6890);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/model-editor/CollectData.tsx





 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


















var DataSetPlot = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 9866).then(__webpack_require__.bind(__webpack_require__, 49866)));
var LIVE_HORIZON = 24;

function createDataSet(bus, registers, name, live, palette) {
  var fields = (0,utils/* arrayConcatMany */.ue)(registers.map(reg => reg.fields));
  var colors = fields.map((f, i) => palette[i % palette.length]);
  var set = new FieldDataSet/* default */.ZP(bus, name, fields, colors);
  if (live) set.maxRows = LIVE_HORIZON + 4;
  return set;
}

function CollectData(props) {
  var {
    chartPalette,
    onChange,
    onNext
  } = props;
  var {
    0: dataset,
    1: setDataSet
  } = (0,react.useState)(props.dataset);
  var {
    0: dataTimestamp,
    1: setDataTimestamp
  } = (0,react.useState)(0);
  var classes = props.reactStyle;
  var chartProps = props.chartProps;
  var {
    fileStorage
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    toggleShowDeviceHostsDialog
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var readingRegisters = (0,useChange/* default */.Z)(bus, bus => (0,utils/* arrayConcatMany */.ue)(bus.devices().map(device => device.services().filter(srv => (0,spec/* isSensor */.rq)(srv.specification)).map(srv => srv.readingRegister))));
  /* For choosing sensors */

  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react.useState)([]);
  var {
    0: totalRecordings,
    1: setTotalRecordings
  } = (0,react.useState)(0);
  var {
    0: recordingName,
    1: setRecordingName
  } = (0,react.useState)("recording" + totalRecordings);
  var {
    0: isRecording,
    1: setIsRecording
  } = (0,react.useState)(false);
  var {
    0: liveRecording,
    1: setLiveRecording
  } = (0,react.useState)(undefined);
  var {
    1: setLiveDataTimestamp
  } = (0,react.useState)(0);

  var newRecording = (registerIds, live) => registerIds.length ? createDataSet(bus, readingRegisters.filter(reg => registerIds.indexOf(reg.id) > -1), currentClassLabel + "$" + dataset.totalRecordings, live, chartPalette) : undefined;

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,toConsumableArray/* default */.Z)(registerIdsChecked));
    setLiveRecording(newRecording(registerIdsChecked, true));
  };

  var handleRecordingNameChange = event => {
    setRecordingName(event.target.value.trim());
  };
  /* For recording data*/


  var {
    0: currentClassLabel,
    1: setCurrentClassLabel
  } = (0,react.useState)("class1");
  var {
    0: samplingIntervalDelay,
    1: setSamplingIntervalDelay
  } = (0,react.useState)("50");
  var {
    0: samplingDuration,
    1: setSamplingDuration
  } = (0,react.useState)("2");
  var {
    0: datasetMatch,
    1: setDataSetMatch
  } = (0,react.useState)(false);
  var recordingRegisters = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);
  var samplingIntervalDelayi = parseInt(samplingIntervalDelay);
  var samplingCount = Math.ceil(parseFloat(samplingDuration) * 1000 / samplingIntervalDelayi);
  var errorSamplingIntervalDelay = isNaN(samplingIntervalDelayi) || !/\d+/.test(samplingIntervalDelay);
  var errorSamplingDuration = isNaN(samplingCount);
  var error = errorSamplingDuration || errorSamplingIntervalDelay;
  var startEnabled = !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length) && datasetMatch;

  var handleSamplingIntervalChange = event => {
    setSamplingIntervalDelay(event.target.value.trim());
  };

  var handleSamplingDurationChange = event => {
    setSamplingDuration(event.target.value.trim());
  };

  var handleLabelChange = newLabel => {
    setCurrentClassLabel(newLabel);
  };

  var handleDownloadDataSet = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      fileStorage.saveText(dataset.name + ".csv", dataset.toCSV());
    });

    return function handleDownloadDataSet() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDeleteDataSet = () => {
    if (confirm("Are you sure you want to delete all recorded samples?")) {
      var newDataSet = new MBDataSet/* default */.ZP(DATASET_NAME);
      handleDataSetUpdate(newDataSet);
      setDataSet(newDataSet);
      resetDataCollection();
    }
  };

  var resetDataCollection = () => {
    setCurrentClassLabel("class1");
    setTotalRecordings(0);
    setSamplingIntervalDelay("50");
    setSamplingDuration("2");
  };

  var stopRecording = () => {
    if (isRecording) {
      // add new data to the dataset
      liveRecording.interval = samplingIntervalDelayi;
      dataset.addRecording(liveRecording, currentClassLabel, registerIdsChecked);
      setTotalRecordings(totalRecordings + 1);
      setDataSet(dataset);
      handleDataSetUpdate(dataset);
      setDataTimestamp(Date.now()); // create new live recording

      setLiveRecording(newRecording(registerIdsChecked, true)); // stop recording

      setIsRecording(false);
    }
  };

  var startRecording = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!isRecording && recordingRegisters.length) {
        setLiveRecording(newRecording(registerIdsChecked, false));
        setIsRecording(true);
      }
    });

    return function startRecording() {
      return _ref2.apply(this, arguments);
    };
  }();

  var startStreamingRegisters = () => {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(reg => reg.subscribe(constants/* REPORT_UPDATE */.rGZ, () => {}));
    return () => {
      console.log("stop streaming");
      streamers.map(streamer => streamer());
    };
  };

  var toggleRecording = () => {
    if (isRecording) stopRecording();else startRecording();
  };

  var handleDeleteRecording = recording => {
    dataset.removeRecording(recording);
    setDataTimestamp(Date.now());
    setDataSet(dataset);
    handleDataSetUpdate(dataset);
  };

  var updateLiveData = () => {
    setLiveRecording(liveRecording);
    setLiveDataTimestamp(bus.timestamp);
  };

  var throttleUpdate = (0,utils/* throttle */.P2)(() => updateLiveData(), 30); // data collection
  // interval add data entry

  var addRow = values => {
    if (!liveRecording) return;
    liveRecording.addRow(values);

    if (isRecording && liveRecording.length >= samplingCount) {
      // stop recording
      updateLiveData();
      stopRecording();
    } else {
      throttleUpdate();
    }
  }; // setting interval


  (0,react.useEffect)(() => {
    if (error) return;
    console.log("set interval to " + samplingIntervalDelayi);
    recordingRegisters.forEach(reg => reg.sendSetPackedAsync([samplingIntervalDelayi]));
  }, [samplingIntervalDelayi, registerIdsChecked, errorSamplingIntervalDelay]); // collecting

  (0,react.useEffect)(() => {
    if (error) return undefined;
    var interval = setInterval(() => addRow(), samplingIntervalDelayi);
    var stopStreaming = startStreamingRegisters();
    return () => {
      clearInterval(interval);
      stopStreaming();
    };
  }, [isRecording, samplingIntervalDelayi, samplingCount, registerIdsChecked]);
  (0,react.useEffect)(() => {
    setRecordingName("recording" + totalRecordings);
  }, [totalRecordings]);
  (0,react.useEffect)(() => {
    var matchingInputs = true;

    if (dataset && liveRecording) {
      if (dataset.inputTypes && dataset.inputTypes.length) {
        if (!(0,MBDataSet/* arraysEqual */.cO)(dataset.inputTypes, liveRecording.headers)) matchingInputs = false;
      }
    }

    setDataSetMatch(matchingInputs);
  }, [registerIdsChecked, liveRecording]);

  var handleDataSetUpdate = dataset => {
    onChange(dataset);
  };

  var handleNext = () => {
    onNext(dataset);
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement("h2", null, "Current Dataset", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleDownloadDataSet,
    title: "Download all recording data",
    disabled: dataset.totalRecordings == 0
  }, /*#__PURE__*/react.createElement(GetApp/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleDeleteDataSet,
    title: "Delete all recording data",
    disabled: dataset.totalRecordings == 0
  }, /*#__PURE__*/react.createElement(DeleteSweep/* default */.Z, null))), /*#__PURE__*/react.createElement("div", {
    key: "recordedData"
  }, dataset.totalRecordings ? /*#__PURE__*/react.createElement("div", {
    key: "recordings"
  }, /*#__PURE__*/react.createElement("p", null, "Input type(s): ", dataset.inputTypes.join(","), " "), dataset.labels.map(classLabel => /*#__PURE__*/react.createElement(ClassDataSetGrid/* default */.Z, {
    key: "dataset-" + classLabel,
    label: classLabel,
    tables: dataset.getRecordingsWithLabel(classLabel),
    handleDeleteTable: handleDeleteRecording
  })), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(DataSetPlot, {
    chartProps: chartProps,
    reactStyle: classes,
    dataset: dataset,
    predictedLabels: undefined,
    timestamp: dataTimestamp
  }))) : /*#__PURE__*/react.createElement("p", null, "Empty"))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement("h2", null, "Collect More Data"), /*#__PURE__*/react.createElement("div", {
    key: "sensors"
  }, /*#__PURE__*/react.createElement("h3", null, "Select input sensors\xA0", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "start simulator",
    onClick: toggleShowDeviceHostsDialog
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null))), !readingRegisters.length && /*#__PURE__*/react.createElement("span", null, "Waiting for sensors..."), !!readingRegisters.length && /*#__PURE__*/react.createElement(ReadingFieldGrid/* default */.Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: isRecording,
    liveDataSet: liveRecording,
    handleRegisterCheck: handleRegisterCheck
  }))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true
  }, /*#__PURE__*/react.createElement("div", {
    key: "record"
  }, /*#__PURE__*/react.createElement("h3", null, "Record data"), /*#__PURE__*/react.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    label: "Recording name",
    value: recordingName,
    variant: "outlined",
    onChange: handleRecordingNameChange
  }), /*#__PURE__*/react.createElement(Autocomplete/* default */.Z, {
    disabled: isRecording,
    className: classes.field,
    options: dataset.labelOptions,
    renderInput: params => /*#__PURE__*/react.createElement(TextField/* default */.Z, Object.assign({}, params, {
      label: "Class label",
      variant: "outlined"
    })),
    value: currentClassLabel,
    onInputChange: (event, newValue) => handleLabelChange(newValue),
    isOptionEqualToValue: () => true
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    error: errorSamplingDuration,
    disabled: isRecording,
    label: "Sampling duration",
    value: samplingDuration,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "s")
    },
    onChange: handleSamplingDurationChange
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    error: errorSamplingIntervalDelay,
    disabled: isRecording,
    label: "Sampling interval",
    value: samplingIntervalDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "ms")
    },
    onChange: handleSamplingIntervalChange
  })), /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "large",
    variant: "contained",
    color: isRecording ? "secondary" : "primary",
    "aria-label": "start/stop recording",
    title: "start/stop recording",
    onClick: toggleRecording,
    startIcon: isRecording ? /*#__PURE__*/react.createElement(Stop/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null),
    disabled: !startEnabled
  }, isRecording ? "Stop" : "Start"))), /*#__PURE__*/react.createElement("div", {
    key: "liveData"
  }, liveRecording && /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    key: "trends",
    height: 12,
    dataSet: liveRecording,
    horizon: LIVE_HORIZON,
    dot: true,
    gradient: true
  }))), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    color: "secondary",
    endIcon: /*#__PURE__*/react.createElement(NavigateNext/* default */.Z, null),
    disabled: dataset.labels.length < 2,
    onClick: handleNext
  }, "Next"))));
}
// EXTERNAL MODULE: ./src/components/model-editor/TrainModel.tsx
var TrainModel = __webpack_require__(23368);
// EXTERNAL MODULE: ./src/components/model-editor/ModelOutput.tsx
var ModelOutput = __webpack_require__(64797);
// EXTERNAL MODULE: ./src/components/model-editor/MBModel.ts
var MBModel = __webpack_require__(73102);
;// CONCATENATED MODULE: ./src/components/model-editor/ModelEditor.tsx











var PREFIX = "DATASET_NAME";
var classes = {
  root: PREFIX + "-root",
  grow: PREFIX + "-grow",
  field: PREFIX + "-field",
  segment: PREFIX + "-segment",
  row: PREFIX + "-row",
  buttons: PREFIX + "-buttons",
  trend: PREFIX + "-trend",
  vmiddle: PREFIX + "-vmiddle"
};
var StyledBox = (0,styled/* default */.ZP)(Box/* default */.Z)(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["& ." + classes.root]: {
      marginBottom: theme.spacing(1)
    },
    ["& ." + classes.grow]: {
      flexGrow: 1
    },
    ["& ." + classes.field]: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1.5),
      display: "inline-flex",
      width: theme.spacing(35)
    },
    ["& ." + classes.segment]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    ["& ." + classes.row]: {
      marginBottom: theme.spacing(0.5)
    },
    ["& ." + classes.buttons]: {
      display: "inline-flex",
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    ["& ." + classes.trend]: {
      width: theme.spacing(10)
    },
    ["& ." + classes.vmiddle]: {
      verticalAlign: "middle"
    }
  };
});
var MODEL_EDITOR = "model_editor"; // create prefix for model editor page

var MODEL_NAME = MODEL_EDITOR + "-model";
var DATASET_NAME = MODEL_EDITOR + "-dataset";
var MODEL_EDITOR_STORAGE_KEY = "model-editor-data-json";

function getDataSetFromLocalStorage() {
  // check local storage for recording
  var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);

  if (storedDataJSON) {
    var modelEditorData = JSON.parse(storedDataJSON);
    if (modelEditorData["dataset"]) return MBDataSet/* default.createFromFile */.ZP.createFromFile(DATASET_NAME, modelEditorData["dataset"]);
  }

  return new MBDataSet/* default */.ZP(DATASET_NAME);
}

function getModelFromLocalStorage() {
  // check local storage for saved model
  var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);

  if (storedDataJSON) {
    var modelEditorData = JSON.parse(storedDataJSON);
    if (modelEditorData["model"]) return MBModel/* default.createFromFile */.ZP.createFromFile(modelEditorData["model"]);
  }

  var newModel = new MBModel/* default */.ZP(MODEL_NAME);
  return newModel;
}

function getTabFromLocalStorage() {
  // check local storage for saved model
  var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);

  if (storedDataJSON) {
    var modelEditorData = JSON.parse(storedDataJSON);
    if (modelEditorData["tab"]) return modelEditorData["tab"];
  }

  return 0;
}

function ModelPlayground() {
  var chartPalette = (0,useChartPalette/* default */.Z)();
  var chartProps = {
    CHART_WIDTH: 300,
    CHART_HEIGHT: 300,
    MARK_SIZE: 75,
    TOOLTIP_NUM_FORMAT: "0.2f",
    PALETTE: chartPalette
  };
  var {
    0: dataset,
    1: setDataSet
  } = (0,react.useState)(getDataSetFromLocalStorage);
  var {
    0: tfModel,
    1: setTFModel
  } = (0,react.useState)(getModelFromLocalStorage);
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(getTabFromLocalStorage);
  /* Data and interface management */

  var handleTabChange = (event, newTab) => {
    var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);
    var modelEditorData;

    if (storedDataJSON) {
      // keep previous dataset and model data
      modelEditorData = JSON.parse(storedDataJSON);
      modelEditorData["tab"] = newTab;
    } else {
      modelEditorData = {
        dataset: undefined,
        model: undefined,
        tab: newTab
      };
    } // save JSON string in local storage


    localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify(modelEditorData));
    setTab(newTab);
  };

  var handleDataChange = newDataSet => {
    var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);
    var modelEditorData;

    if (storedDataJSON) {
      // keep previous model and tab data
      modelEditorData = JSON.parse(storedDataJSON);
      modelEditorData["dataset"] = newDataSet; // if dataset is changed, model should be reset too

      modelEditorData["model"] = new MBModel/* default */.ZP(MODEL_NAME);
      setTFModel(new MBModel/* default */.ZP(MODEL_NAME));
    } else {
      modelEditorData = {
        dataset: newDataSet,
        model: undefined,
        tab: 0
      };
    } // save JSON string in local storage


    localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify(modelEditorData));
    setDataSet(newDataSet);
  };

  var handleModelChange = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (newModel) {
      var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);
      var modelEditorData;

      if (storedDataJSON) {
        // keep previous dataset and tab data
        modelEditorData = JSON.parse(storedDataJSON);
        modelEditorData["model"] = newModel;
      } else {
        modelEditorData = {
          dataset: undefined,
          model: newModel,
          tab: 0
        };
      } // save JSON string in local storage


      localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify(modelEditorData));
      setTFModel(newModel);
    });

    return function handleModelChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var nextTab = () => {
    if (tab == 0 && dataset.labels.length >= 2) {
      setTab(1);
    } else if (tab == 1 && tfModel.status == "trained") {
      setTab(2);
    }
  };

  return /*#__PURE__*/react.createElement(StyledBox, {
    mb: 2
  }, /*#__PURE__*/react.createElement("h1", null, "ML Model Editor"), /*#__PURE__*/react.createElement("p", null, "This page allows you to collect data from Jacdac sensors and use them to train a neural network model that does classification."), /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "1 - Collect Data"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "2 - Train Model",
    disabled: dataset.labels.length < 2
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "3 - Test Model",
    disabled: dataset.labels.length < 2 || tfModel.status !== "trained"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement(CollectData, {
    chartProps: chartProps,
    reactStyle: classes,
    chartPalette: chartPalette,
    dataset: dataset,
    onChange: handleDataChange,
    onNext: nextTab
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(TrainModel/* default */.ZP, {
    chartProps: chartProps,
    reactStyle: classes,
    dataset: dataset,
    model: tfModel,
    onChange: handleModelChange,
    onNext: nextTab
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 2
  }, /*#__PURE__*/react.createElement(ModelOutput["default"], {
    chartProps: chartProps,
    reactStyle: classes,
    chartPalette: chartPalette,
    model: tfModel
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/model-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(ModelPlayground, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-model-editor-tsx-b8665adcca44cdac3d85.js.map