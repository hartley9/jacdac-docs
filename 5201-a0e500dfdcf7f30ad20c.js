"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5201],{

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

/***/ 87061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(32174));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

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
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(49408);
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
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(48416);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(62194);
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
  }), handleDeleteTable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, {
    onClick: handleDelete(table),
    title: "Delete this sample",
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null))))))));
}

/***/ }),

/***/ 29065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ReadingFieldGrid; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30664);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5234);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7746);
/* harmony import */ var _mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87061);
/* harmony import */ var _devices_useDeviceName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5738);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64973);


 // tslint:disable-next-line: no-submodule-imports match-default-export-name





function ReadingFieldGridItem(props) {
  var {
    register,
    handleRegisterCheck,
    recording,
    registerChecked,
    liveDataSet
  } = props;
  var {
    service
  } = register;
  var {
    device
  } = service;
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  var deviceName = (0,_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(device);

  var handleCheck = () => handleRegisterCheck(register);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, Object.assign({
    item: true
  }, gridBreakpoints, {
    key: "source" + register.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    subheader: register.service.name,
    title: deviceName + "/" + register.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, register.fields.map(field => {
    var _liveDataSet$colorOf;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: field.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_FiberManualRecord__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      fontSize: "large",
      style: {
        verticalAlign: "middle",
        color: registerChecked && (liveDataSet === null || liveDataSet === void 0 ? void 0 : (_liveDataSet$colorOf = liveDataSet.colorOf(field)) === null || _liveDataSet$colorOf === void 0 ? void 0 : _liveDataSet$colorOf[0]) || "#ccc"
      }
    }), field.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    disabled: recording,
    onChange: handleCheck,
    checked: registerChecked,
    label: "record " + deviceName + "/" + register.name
  }))));
}

function ReadingFieldGrid(props) {
  var {
    readingRegisters,
    registerIdsChecked,
    recording,
    handleRegisterCheck,
    liveDataSet
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
    container: true,
    spacing: 2
  }, readingRegisters.map(register => {
    var registerChecked = registerIdsChecked.indexOf(register.id) > -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReadingFieldGridItem, {
      key: register.id,
      register: register,
      registerChecked: registerChecked,
      recording: recording,
      handleRegisterCheck: handleRegisterCheck,
      liveDataSet: liveDataSet
    });
  }));
}

/***/ }),

/***/ 85201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlocklyDataRecordingDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61359);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86763);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(65970);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(58423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18599);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(76968);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71973);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(57999);
/* harmony import */ var _mui_icons_material_Stop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(16084);
/* harmony import */ var _mui_icons_material_GetApp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(42594);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7564);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51606);
/* harmony import */ var _ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29065);
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64616);
/* harmony import */ var _ClassDataSetGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17890);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25090);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26799);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71815);
/* harmony import */ var _model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95149);
/* harmony import */ var _ServiceManagerContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99808);




 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name















var LIVE_HORIZON = 24;

function createDataSet(bus, registers, name, live, palette) {
  var fields = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .arrayConcatMany */ .ue)(registers.map(reg => reg.fields));
  var colors = fields.map((f, i) => palette[i % palette.length]);
  var set = new _FieldDataSet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP(bus, name, fields, colors);
  if (live) set.maxRows = LIVE_HORIZON + 4;
  return set;
}

function BlocklyDataRecordingDialog(props) {
  var {
    classes,
    chartPalette,
    open,
    onDone,
    recordingCount,
    workspace
  } = props;
  var {
    0: dialogType,
    1: setDialogType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("chooseSensors");
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP);
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
  var readingRegisters = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(bus, bus => (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .arrayConcatMany */ .ue)(bus.devices().map(device => device.services().filter(srv => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .isSensor */ .rq)(srv.specification)).map(srv => srv.readingRegister))));

  var getWorkspaceClasses = () => {
    // get updated list of class variables
    var classes = workspace.getVariablesOfType(_model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__/* .MB_CLASS_VAR_TYPE */ .nc).map(function (classVar) {
      return classVar.name;
    });
    if (classes.length == 0) return ["class1"];
    return classes;
  };
  /* For choosing sensors */


  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var {
    0: totalSamples,
    1: setTotalSamples
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: recordingName,
    1: setRecordingName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("recording" + recordingCount);
  var {
    0: className,
    1: setClassName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("class1");
  var {
    1: setRecordingLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(registerIdsChecked));
  };

  var handleRecordingNameChange = event => {
    setRecordingName(event.target.value.trim());
  };

  var handleClassNameChange = newClassName => {
    setClassName(newClassName);
  };
  /* For recording data*/


  var recordingRegisters = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);
  var {
    0: isRecording,
    1: setIsRecording
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var {
    0: liveRecording,
    1: setLiveRecording
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  var {
    1: setLiveDataTimestamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: currentRecording
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    recording: [],
    blockId: ""
  });
  var {
    0: samplingIntervalDelay,
    1: setSamplingIntervalDelay
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("50");
  var {
    0: samplingDuration,
    1: setSamplingDuration
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("1");
  var samplingIntervalDelayi = parseInt(samplingIntervalDelay);
  var samplingCount = Math.ceil(parseFloat(samplingDuration) * 1000 / samplingIntervalDelayi);
  var errorSamplingIntervalDelay = isNaN(samplingIntervalDelayi) || !/\d+/.test(samplingIntervalDelay);
  var errorSamplingDuration = isNaN(samplingCount);
  var error = errorSamplingDuration || errorSamplingIntervalDelay;
  var startEnabled = !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length);

  var handleSamplingIntervalChange = event => {
    setSamplingIntervalDelay(event.target.value.trim());
  };

  var handleSamplingDurationChange = event => {
    setSamplingDuration(event.target.value.trim());
  };

  var newRecording = (registerIds, live) => registerIds.length ? createDataSet(bus, readingRegisters.filter(reg => registerIds.indexOf(reg.id) > -1), recordingName + "." + totalSamples, live, chartPalette) : undefined;

  var stopRecording = () => {
    if (isRecording) {
      // add new samples to recording
      currentRecording.recording.push(liveRecording);
      setTotalSamples(totalSamples + 1); // refresh live recording

      setLiveRecording(newRecording(registerIdsChecked, true)); // stop recording

      setIsRecording(false);
    }
  };

  var startRecording = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function* () {
      if (!isRecording && recordingRegisters.length) {
        setLiveRecording(newRecording(registerIdsChecked, false));
        setIsRecording(true);
      }
    });

    return function startRecording() {
      return _ref.apply(this, arguments);
    };
  }();

  var startStreamingRegisters = () => {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(reg => reg.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .REPORT_UPDATE */ .rGZ, () => {}));
    return () => {
      console.log("stop streaming");
      streamers.map(streamer => streamer());
    };
  };

  var toggleRecording = () => {
    if (isRecording) stopRecording();else startRecording();
  };

  var handleDeleteSample = sample => {
    var i = currentRecording.recording.indexOf(sample);
    if (i > -1) currentRecording.recording.splice(i, 1);
  };

  var updateLiveData = () => {
    setLiveRecording(liveRecording);
    setRecordingLength(liveRecording.rows.length);
    setLiveDataTimestamp(bus.timestamp);
  };

  var throttleUpdate = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .throttle */ .P2)(() => updateLiveData(), 30); // data collection
  // interval add data entry

  var addRow = values => {
    if (!liveRecording) return; //console.log(values)

    liveRecording.addRow(values);

    if (isRecording && liveRecording.length >= samplingCount) {
      // stop recording
      updateLiveData();
      stopRecording();
    } else {
      throttleUpdate();
    }
  }; // setting interval


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error) return;
    console.log("set interval to " + samplingIntervalDelayi);
    recordingRegisters.forEach(reg => reg.sendSetPackedAsync([samplingIntervalDelayi]));
  }, [samplingIntervalDelayi, registerIdsChecked, errorSamplingIntervalDelay]); // collecting

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error) return undefined;
    var interval = setInterval(() => addRow(), samplingIntervalDelayi);
    var stopStreaming = startStreamingRegisters();
    return () => {
      clearInterval(interval);
      stopStreaming();
    };
  }, [isRecording, dialogType, samplingIntervalDelayi, samplingCount]);
  /* For placing a block on the workspace */

  var addNewRecording = () => {
    // Create new block for this recording
    if (className != null && className != undefined) {
      // Get or create new class typed variable
      // (createVariable will return an existing variable if one with a particular name already exists)
      var classVar = workspace.createVariable(className, _model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__/* .MB_CLASS_VAR_TYPE */ .nc); // Create new recording block on the workspace

      var newRecordingBlock = workspace.newBlock(_model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__/* .MODEL_BLOCKS */ .GJ + "recording");
      currentRecording.blockId = newRecordingBlock.id; // Automatically insert the recording name into the new block

      var recordingNameField = newRecordingBlock.getField("RECORDING_NAME");
      recordingNameField.setValue(recordingName); // Automatically insert the class name into the new block

      var classNameField = newRecordingBlock.getField("CLASS_NAME");
      classNameField.setValue(classVar.getId()); // Save recording data to block

      var recordingBlockField = newRecordingBlock.getField("EXPAND_BUTTON");
      var recordingBlockParams = {
        parametersVisible: null,
        numSamples: currentRecording.recording.length,
        timestamp: currentRecording.recording[0].startTimestamp,
        inputTypes: currentRecording.recording[0].headers
      };
      recordingBlockField.updateFieldValue(recordingBlockParams);
      newRecordingBlock.initSvg();
      newRecordingBlock.render(false);
      workspace.centerOnBlock(newRecordingBlock.id);
    }
  };
  /* For interface controls */


  var resetInputs = () => {
    setClassName("class1");
    setRecordingName("recording" + recordingCount);
  };

  var handleDownloadDataSet = () => {
    var recordingCountHeader = "Number of recordings," + currentRecording.recording.length;
    var recordingData = [];
    currentRecording.recording.forEach(sample => {
      recordingData.push("Recording metadata," + sample.name + "," + sample.rows.length + "," + className);
      recordingData.push(sample.toCSV());
    });
    var recordData = recordingData.join("\n");
    var csv = [recordingCountHeader, recordData];
    fileStorage.saveText(recordingName + ".csv", csv.join("\n"));
  };

  var handleCancel = () => {
    // reset the user inputs
    resetInputs(); // close the modal

    onDone(null, null);
  };

  var handleNext = () => {
    // begin recording live data
    setLiveRecording(newRecording(registerIdsChecked, true)); // go to the next page

    setDialogType("recordData");
  };

  var handleDone = () => {
    // create new recording block
    addNewRecording(); // reset the user inputs

    resetInputs(); // call the done function and close modal

    var {
      recording,
      blockId
    } = currentRecording;
    onDone(recording, blockId);
  };

  if (dialogType == "chooseSensors") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    open: open,
    onClose: handleCancel,
    fullWidth: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Collect new recording"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "sensors"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
    className: classes.field,
    label: "Recording name",
    value: recordingName,
    variant: "outlined",
    onChange: handleRecordingNameChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    className: classes.field,
    disabled: isRecording,
    options: getWorkspaceClasses(),
    style: {
      width: 250,
      display: "inline-flex"
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, Object.assign({}, params, {
      label: "Class label",
      variant: "outlined"
    })),
    value: className,
    onInputChange: (event, newValue) => handleClassNameChange(newValue)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
    className: classes.field,
    error: errorSamplingDuration,
    disabled: isRecording,
    label: "Sampling duration",
    value: samplingDuration,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        position: "start"
      }, "s")
    },
    onChange: handleSamplingDurationChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
    className: classes.field,
    error: errorSamplingIntervalDelay,
    disabled: isRecording,
    label: "Sampling interval",
    value: samplingIntervalDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        position: "start"
      }, "ms")
    },
    onChange: handleSamplingIntervalChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Collect data from"), !readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Waiting for sensors..."), !!readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: isRecording,
    liveDataSet: liveRecording,
    handleRegisterCheck: handleRegisterCheck
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
    variant: "contained",
    color: "primary",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, null),
    disabled: !registerIdsChecked.length,
    onClick: handleNext
  }, "Next")));else return (
    /*#__PURE__*/
    // recordData
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      open: open,
      onClose: handleCancel,
      fullWidth: true,
      maxWidth: "md"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
      container: true,
      direction: "column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit recording: ", recordingName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "recordedData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "recordings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Recorded samples", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      onClick: handleDownloadDataSet,
      title: "Download all recording data",
      disabled: currentRecording.recording.length == 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_GetApp__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, null))), currentRecording.recording.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ClassDataSetGrid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      key: "samples-" + recordingName,
      label: className,
      tables: currentRecording.recording,
      handleDeleteTable: handleDeleteSample
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "None")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "record"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classes.row
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Add more samples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      size: "large",
      variant: "contained",
      color: isRecording ? "secondary" : "primary",
      "aria-label": "start/stop recording",
      title: "start/stop recording",
      onClick: toggleRecording,
      startIcon: isRecording ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Stop__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, null),
      disabled: !startEnabled
    }, isRecording ? "Stop" : "Start"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "liveData"
    }, liveRecording && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      key: "trends",
      height: 12,
      dataSet: liveRecording,
      horizon: LIVE_HORIZON,
      dot: true,
      gradient: true
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      variant: "contained",
      onClick: handleCancel
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      variant: "contained",
      color: "primary",
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, null),
      disabled: !currentRecording.recording.length,
      onClick: handleDone
    }, "Done")))
  );
}

/***/ })

}]);
//# sourceMappingURL=5201-a0e500dfdcf7f30ad20c.js.map