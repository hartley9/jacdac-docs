"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6602],{

/***/ 14728:
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
  d: "M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"
}), 'DeleteSweep');

exports.Z = _default;

/***/ }),

/***/ 7564:
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
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

exports.Z = _default;

/***/ }),

/***/ 57999:
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
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.Z = _default;

/***/ }),

/***/ 95437:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ LinearProgress_LinearProgress; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(30168);
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
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(7611);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(67663);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(66449);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(62717);
// EXTERNAL MODULE: ./node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(35495);
;// CONCATENATED MODULE: ./node_modules/@mui/material/LinearProgress/linearProgressClasses.js

function getLinearProgressUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLinearProgress', slot);
}
var linearProgressClasses = (0,generateUtilityClasses/* default */.Z)('MuiLinearProgress', ['root', 'colorPrimary', 'colorSecondary', 'determinate', 'indeterminate', 'buffer', 'query', 'dashed', 'dashedColorPrimary', 'dashedColorSecondary', 'bar', 'barColorPrimary', 'barColorSecondary', 'bar1Indeterminate', 'bar1Determinate', 'bar1Buffer', 'bar2Indeterminate', 'bar2Buffer']);
/* harmony default export */ var LinearProgress_linearProgressClasses = ((/* unused pure expression or super */ null && (linearProgressClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/LinearProgress/LinearProgress.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;



var _excluded = ["className", "color", "value", "valueBuffer", "variant"];

var _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;












var TRANSITION_DURATION = 4; // seconds

var indeterminate1Keyframe = (0,emotion_react_browser_esm.keyframes)(_t || (_t = _(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))));
var indeterminate2Keyframe = (0,emotion_react_browser_esm.keyframes)(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))));
var bufferKeyframe = (0,emotion_react_browser_esm.keyframes)(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = (0,taggedTemplateLiteral/* default */.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))));

var useUtilityClasses = ownerState => {
  var {
    classes,
    variant,
    color
  } = ownerState;
  var slots = {
    root: ['root', "color".concat((0,capitalize/* default */.Z)(color)), variant],
    dashed: ['dashed', "dashedColor".concat((0,capitalize/* default */.Z)(color))],
    bar1: ['bar', "barColor".concat((0,capitalize/* default */.Z)(color)), (variant === 'indeterminate' || variant === 'query') && 'bar1Indeterminate', variant === 'determinate' && 'bar1Determinate', variant === 'buffer' && 'bar1Buffer'],
    bar2: ['bar', variant !== 'buffer' && "barColor".concat((0,capitalize/* default */.Z)(color)), variant === 'buffer' && "color".concat((0,capitalize/* default */.Z)(color)), (variant === 'indeterminate' || variant === 'query') && 'bar2Indeterminate', variant === 'buffer' && 'bar2Buffer']
  };
  return (0,composeClasses/* default */.Z)(slots, getLinearProgressUtilityClass, classes);
};

var getColorShade = (theme, color) => {
  if (color === 'inherit') {
    return 'currentColor';
  }

  return theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.$n)(theme.palette[color].main, 0.62) : (0,colorManipulator/* darken */._j)(theme.palette[color].main, 0.5);
};

var LinearProgressRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, styles["color".concat((0,capitalize/* default */.Z)(ownerState.color))], styles[ownerState.variant]];
  }
})(_ref => {
  var {
    ownerState,
    theme
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    height: 4,
    zIndex: 0,
    // Fix Safari's bug during composition of different paint.
    '@media print': {
      colorAdjust: 'exact'
    },
    backgroundColor: getColorShade(theme, ownerState.color)
  }, ownerState.color === 'inherit' && ownerState.variant !== 'buffer' && {
    backgroundColor: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'currentColor',
      opacity: 0.3
    }
  }, ownerState.variant === 'buffer' && {
    backgroundColor: 'transparent'
  }, ownerState.variant === 'query' && {
    transform: 'rotate(180deg)'
  });
});
var LinearProgressDashed = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Dashed',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.dashed, styles["dashedColor".concat((0,capitalize/* default */.Z)(ownerState.color))]];
  }
})(_ref2 => {
  var {
    ownerState,
    theme
  } = _ref2;
  var backgroundColor = getColorShade(theme, ownerState.color);
  return (0,esm_extends/* default */.Z)({
    position: 'absolute',
    marginTop: 0,
    height: '100%',
    width: '100%'
  }, ownerState.color === 'inherit' && {
    opacity: 0.3
  }, {
    backgroundImage: "radial-gradient(".concat(backgroundColor, " 0%, ").concat(backgroundColor, " 16%, transparent 42%)"),
    backgroundSize: '10px 10px',
    backgroundPosition: '0 -23px'
  });
}, (0,emotion_react_browser_esm.css)(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = (0,taggedTemplateLiteral/* default */.Z)(["\n    animation: ", " 3s infinite linear;\n  "])), 0)), bufferKeyframe));
var LinearProgressBar1 = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar1',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.bar, styles["barColor".concat((0,capitalize/* default */.Z)(ownerState.color))], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate, ownerState.variant === 'determinate' && styles.bar1Determinate, ownerState.variant === 'buffer' && styles.bar1Buffer];
  }
})(_ref3 => {
  var {
    ownerState,
    theme
  } = _ref3;
  return (0,esm_extends/* default */.Z)({
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    transition: 'transform 0.2s linear',
    transformOrigin: 'left',
    backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main
  }, ownerState.variant === 'determinate' && {
    transition: "transform .".concat(TRANSITION_DURATION, "s linear")
  }, ownerState.variant === 'buffer' && {
    zIndex: 1,
    transition: "transform .".concat(TRANSITION_DURATION, "s linear")
  });
}, _ref4 => {
  var {
    ownerState
  } = _ref4;
  return (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm.css)(_t5 || (_t5 = _(_templateObject5 || (_templateObject5 = (0,taggedTemplateLiteral/* default */.Z)(["\n      width: auto;\n      animation: ", " 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "])), 0)), indeterminate1Keyframe);
});
var LinearProgressBar2 = (0,styled/* default */.ZP)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar2',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.bar, styles["barColor".concat((0,capitalize/* default */.Z)(ownerState.color))], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate, ownerState.variant === 'buffer' && styles.bar2Buffer];
  }
})(_ref5 => {
  var {
    ownerState,
    theme
  } = _ref5;
  return (0,esm_extends/* default */.Z)({
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    transition: 'transform 0.2s linear',
    transformOrigin: 'left'
  }, ownerState.variant !== 'buffer' && {
    backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main
  }, ownerState.color === 'inherit' && {
    opacity: 0.3
  }, ownerState.variant === 'buffer' && {
    backgroundColor: getColorShade(theme, ownerState.color),
    transition: "transform .".concat(TRANSITION_DURATION, "s linear")
  });
}, _ref6 => {
  var {
    ownerState
  } = _ref6;
  return (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm.css)(_t6 || (_t6 = _(_templateObject6 || (_templateObject6 = (0,taggedTemplateLiteral/* default */.Z)(["\n      width: auto;\n      animation: ", " 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "])), 0)), indeterminate2Keyframe);
});
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var LinearProgress = /*#__PURE__*/react.forwardRef(function LinearProgress(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLinearProgress'
  });

  var {
    className,
    color = 'primary',
    value,
    valueBuffer,
    variant = 'indeterminate'
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color,
    variant
  });

  var classes = useUtilityClasses(ownerState);
  var theme = (0,useTheme/* default */.Z)();
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      var transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = "translateX(".concat(transform, "%)");
    } else if (false) {}
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      var _transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        _transform = -_transform;
      }

      inlineStyles.bar2.transform = "translateX(".concat(_transform, "%)");
    } else if (false) {}
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LinearProgressRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ownerState: ownerState,
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other, {
    children: [variant === 'buffer' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressDashed, {
      className: classes.dashed,
      ownerState: ownerState
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar1, {
      className: classes.bar1,
      ownerState: ownerState,
      style: inlineStyles.bar1
    }), variant === 'determinate' ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar2, {
      className: classes.bar2,
      ownerState: ownerState,
      style: inlineStyles.bar2
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var LinearProgress_LinearProgress = (LinearProgress);

/***/ }),

/***/ 73102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q6": function() { return /* binding */ DEFAULT_MODEL; },
/* harmony export */   "HG": function() { return /* binding */ MCU_SPEED; },
/* harmony export */   "Xl": function() { return /* binding */ MCU_FLOAT_SIZE; },
/* harmony export */   "Ru": function() { return /* binding */ validModelJSON; },
/* harmony export */   "ZP": function() { return /* binding */ MBModel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43144);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94578);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45484);



var DEFAULT_MODEL = "default";
var MCU_SPEED = 64000; // for microbit in 1/ms

var MCU_FLOAT_SIZE = 2;
function validModelJSON(blockJSON) {
  var _firstLayer$children;

  var warnings = {}; // don't check empty block JSON

  if (!blockJSON) return undefined; // don't check default models

  if (blockJSON == DEFAULT_MODEL) return warnings; // 1. make sure all of the training parameters are present

  var blockParams = blockJSON.inputs[1].fields.expand_button.value;

  if (!blockParams.lossFn || !blockParams.optimizer || !blockParams.metrics || !blockParams.numEpochs) {
    warnings[blockJSON.id] = "Missing training parameters. Expand the block to enter parameters";
  } // 2. make sure there is at least one layer


  var firstLayer = blockJSON.inputs.filter(input => input.name == "LAYER_INPUTS")[0].child;

  if (!firstLayer) {
    warnings[blockJSON.id] = "Cannot train empty model";
    return warnings;
  } // 3. make sure layer arch starts with a conv, pool, or flatten


  var convolutionType;

  if (firstLayer.type == "model_block_conv1d_layer" || firstLayer.type == "model_block_maxpool1d_layer" //layerBlock.type == "model_block_avgpool1d_layer"
  ) {
    convolutionType = "1d";
  } else if (firstLayer.type == "model_block_conv2d_layer" || firstLayer.type == "model_block_maxpool2d_layer" //layerBlock.type == "model_block_avgpool2d_layer"
  ) {
    convolutionType = "2d";
  } else if (firstLayer.type != "model_block_flatten_layer") {
    warnings[firstLayer.id] = "Models must start with a convolutional layer, pooling layer, or flatten layer.";
  } // 4. make sure a flatten layer is present


  var foundFlatten = firstLayer.type == "model_block_flatten_layer"; // 5. the smallest possible model is a flatten layer plus a dense layer

  var minimumModel = false;
  (_firstLayer$children = firstLayer.children) === null || _firstLayer$children === void 0 ? void 0 : _firstLayer$children.forEach((childBlock, idx) => {
    if (!minimumModel) minimumModel = true; // 6. make sure that only dense layers come after flatten

    if (foundFlatten) {
      if (childBlock.type != "model_block_dense_layer" && childBlock.type != "model_block_dropout_layer") warnings[childBlock.id] = "Only dense and dropout layers can go after the flatten layer";
    }

    if (!foundFlatten) foundFlatten = childBlock.type == "model_block_flatten_layer"; // 7. make sure 1d/2d model types are consistent

    if (convolutionType == "1d" && childBlock.type.indexOf("2d") > -1) warnings[childBlock.id] = "All layers in this model must be 1d";else if (convolutionType == "2d" && childBlock.type.indexOf("1d") > -1) warnings[childBlock.id] = "All layers in this model must be 2d"; // 8. check that the last layer is a dense layer

    if (idx == firstLayer.children.length - 1) {
      if (childBlock.type != "model_block_dense_layer") {
        warnings[childBlock.id] = "Last layer in model must be a dense layer";
      } else {
        // dense layer must have units equal to output shape & a softmax activation
        var params = childBlock.inputs[0].fields.expand_button.value; // 9. final dense layer must have a softmax activation

        if (params.activation != "softmax") warnings[childBlock.id] = "The final dense layer must use \"softmax\" as activation function"; // 10. final dense layer must have num units equal to the number of labels

        /*if (params.numUnits != outputShape)
            warnings[
                childBlock.id
            ] = `The final dense layer must have a number of units equal to the output shape`*/
      }
    }
  });

  if (!minimumModel) {
    warnings[blockJSON.id] = "Models must contain one flatten layer that is followed by at least one dense layer";
  }

  if (!foundFlatten) {
    warnings[blockJSON.id] = "Models must contain at least one flatten layer";
  }

  return warnings;
}

var MBModel = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(MBModel, _JDEventSource);

  // maintain info about the dataset this model was created for
  // maintain training info about the model
  // maintain the blockJSON that goes with this model
  MBModel.createFromFile = function createFromFile(modelObj) {
    var mbModel = new MBModel(modelObj.name, modelObj.labels, modelObj.modelJSON, modelObj.status);
    mbModel.inputShape = modelObj.inputShape;
    mbModel.inputTypes = modelObj.inputTypes;
    mbModel.inputInterval = modelObj.inputInterval || 100;
    mbModel.outputShape = modelObj.outputShape;
    mbModel.convolutionType = modelObj.convolutionType;
    mbModel.trainingAcc = modelObj.trainingAcc || 0;
    mbModel.weightData = new Uint32Array(modelObj.weights).buffer || new ArrayBuffer(0);
    mbModel.modelStats = modelObj.modelStats || undefined;
    return mbModel;
  };

  function MBModel(name, labels, modelJSON, status) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.name = name;
    _this.labels = labels;
    _this.modelJSON = modelJSON;
    _this.status = status;
    _this.labels = _this.labels || [];
    _this.modelJSON = _this.modelJSON || "";
    _this.status = _this.status || "empty";
    _this.weightData = new ArrayBuffer(0);
    return _this;
  }

  var _proto = MBModel.prototype;

  _proto.toJSON = function toJSON() {
    return {
      name: this.name,
      inputShape: this.inputShape,
      inputTypes: this.inputTypes,
      inputInterval: this.inputInterval,
      convolutionType: this.convolutionType,
      labels: this.labels,
      modelJSON: this.modelJSON,
      modelStats: this.modelStats,
      outputShape: this.outputShape,
      status: this.status || "empty",
      trainingAcc: this.trainingAcc || 0,
      weights: Array.from(new Uint32Array(this.weightData))
    };
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(MBModel, [{
    key: "summary",
    get: function get() {
      var modelInfo = ["Training Status: " + this.status, "Input Types: " + this.inputTypes];
      if (this.modelStats) modelInfo.push("Model Stats: " + this.modelStatSummary);
      return modelInfo;
    }
  }, {
    key: "modelStatSummary",
    get: function get() {
      if (!this.modelStats || !this.modelStats.layers.length) return "";
      var totalBytes = this.modelStats.total.weightBytes + this.modelStats.total.codeBytes;
      var totalCycles = this.modelStats.total.optimizedCycles;
      var executionTimeMs = totalCycles / MCU_SPEED;
      return this.modelStats.layers.length + " layers, " + (totalBytes / 1000).toPrecision(2) + " KB, " + executionTimeMs.toPrecision(2) + "ms";
    }
  }, {
    key: "parseBlockJSON",
    set: function set(blockJSON) {
      this.blockJSON = blockJSON;
      var layers = []; // get the first layer and add it to the list

      var layerBlock = blockJSON.inputs.filter(input => input.name == "LAYER_INPUTS")[0].child;

      if (layerBlock) {
        var _layerBlock$children;

        layers.push(layerBlock); // determine what dimensionality of CNN is used (1d, 2d, or none)

        this.convolutionType = "";
        if (layerBlock.type.indexOf("1d") > -1) this.convolutionType = "1d";
        if (layerBlock.type.indexOf("2d") > -1) this.convolutionType = "2d"; // add the remaining layers to the list

        (_layerBlock$children = layerBlock.children) === null || _layerBlock$children === void 0 ? void 0 : _layerBlock$children.forEach(childBlock => layers.push(childBlock));
      } // store layers with model


      this.layerJSON = layers;
    }
  }]);

  return MBModel;
}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_0__/* .JDEventSource */ .aE);



/***/ }),

/***/ 23368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vn": function() { return /* binding */ prepareDataSet; },
/* harmony export */   "g2": function() { return /* binding */ prepareModel; },
/* harmony export */   "ZP": function() { return /* binding */ TrainModel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4320);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39135);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95437);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57999);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7564);
/* harmony import */ var _mui_icons_material_GetApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42594);
/* harmony import */ var _mui_icons_material_DeleteSweep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14728);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71973);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6890);
/* harmony import */ var _ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99808);
/* harmony import */ var _blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83808);
/* harmony import */ var _blockly_dsl_workers_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60669);
/* harmony import */ var _MBDataSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99941);
/* harmony import */ var _MBModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73102);

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name










var ConfusionMatrixHeatMap = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 5063).then(__webpack_require__.bind(__webpack_require__, 75063)));
var DataSetPlot = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 9866).then(__webpack_require__.bind(__webpack_require__, 49866)));
var LossAccChart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 3139).then(__webpack_require__.bind(__webpack_require__, 33139)));
var ModelSummaryDropdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/* import() */ 6080).then(__webpack_require__.bind(__webpack_require__, 96080)));
function prepareDataSet(set) {
  // Assumptions: the sampling rate, sampling duration, and sensors used are constant
  var sampleLength = -1;
  var sampleChannels = -1;
  var xData = [];
  var yData = [];

  var _loop = function _loop(label) {
    set.getRecordingsWithLabel(label).forEach(table => {
      sampleChannels = table.width;

      if (table.width != sampleChannels) {
        alert("All input data must have the same shape: " + table.name + "\n Has " + table.width + " inputs instead of " + sampleChannels);
      }
      /* else if (table.length != sampleLength) {
        // TODO decide what to do about data with different weight
      } */
      // For x data, just add each sample as a new row into x_data


      xData.push(table.data());
      yData.push(set.labels.indexOf(label));
    });
  };

  for (var label of set.labels) {
    _loop(label);
  } // save tensors with dataset object


  set.xs = xData;
  set.ys = yData;
  set.length = xData[0].length;
  set.width = xData[0][0].length;
}
function prepareModel(mod, set, callback) {
  // get model set up with dataset features
  mod.labels = set.labels;
  mod.inputShape = [set.length, set.width];
  mod.inputTypes = set.inputTypes;
  mod.inputInterval = set.interval;
  mod.outputShape = set.labels.length;
  /* compile model */

  var compileMsg = {
    worker: "tf",
    type: "compile",
    data: {
      modelBlockJSON: mod.blockJSON || _MBModel__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_MODEL */ .Q6,
      model: mod.toJSON()
    }
  }; // TODO throw an error if this never returns, page needs refresh

  (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__/* .compileRequest */ .yA)(compileMsg).then(result => {
    if (result) {
      mod.modelJSON = result.data.modelJSON || "";
      var modelStats = result.data.modelStats;
      if (modelStats.length > 2) mod.modelStats = {
        total: modelStats.pop(),
        layers: modelStats
      };
      mod.trainingParams = result.data.trainingParams;
      mod.status = "untrained";
    }

    if (callback) callback(mod);
  });
}
function TrainModel(props) {
  var classes = props.reactStyle;
  var chartProps = props.chartProps;
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP);
  var {
    dataset,
    model,
    onChange,
    onNext
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    prepareDataSet(dataset);

    if (!(0,_MBDataSet__WEBPACK_IMPORTED_MODULE_6__/* .arraysEqual */ .cO)(model.labels, dataset.labels) || !(0,_MBDataSet__WEBPACK_IMPORTED_MODULE_6__/* .arraysEqual */ .cO)(model.inputTypes, dataset.inputTypes)) {
      // If there is already a model, make sure it matches the current dataset
      //   if it does not, reset the model
      var newModel = new _MBModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP(model.name);
      prepareModel(newModel, dataset, undefined);
      handleModelUpdate(newModel);
    } else {
      prepareModel(model, dataset, undefined);
      handleModelUpdate(model);
    } // ready to train


    setTrainEnabled(model.modelJSON != "empty");
  }, []);
  /* For training model */

  var {
    0: trainEnabled,
    1: setTrainEnabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var {
    0: trainingProgress,
    1: setTrainingProgress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  var {
    0: trainingLossLog,
    1: setTrainingLossLog
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: trainingAccLog,
    1: setTrainingAccLog
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: trainingPredictionResult,
    1: setTrainingPredictionResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  var {
    0: trainTimestamp,
    1: setTrainTimestamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  var trainTFModel = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* () {
      model.status = "training";
      model.inputTypes = dataset.inputTypes;
      handleModelUpdate(model); // reset logs and progress

      trainingLossLog.splice(0, trainingLossLog.length);
      trainingAccLog.splice(0, trainingAccLog.length);
      setTrainingProgress(0);
      setTrainEnabled(false); // setup worker
      // subscriber gets messages about training while training is happening

      var stopWorkerSubscribe = (0,_blockly_dsl_workers_proxy__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("tf").subscribe("message", msg => {
        var epoch = trainingLossLog.length / 2 + 1;
        trainingLossLog.push({
          epoch: epoch,
          loss: msg.data.loss,
          dataset: "training"
        });
        trainingLossLog.push({
          epoch: epoch,
          loss: msg.data.val_loss,
          dataset: "validation"
        });
        trainingAccLog.push({
          epoch: epoch,
          acc: msg.data.acc,
          dataset: "training"
        });
        trainingAccLog.push({
          epoch: epoch,
          acc: msg.data.val_acc,
          dataset: "validation"
        });
        setTrainingProgress(epoch * 100 / model.trainingParams.epochs);
      });
      var trainMsg = {
        worker: "tf",
        type: "train",
        data: {
          trainingParams: model.trainingParams,
          model: model.toJSON(),
          xData: dataset.xs,
          yData: dataset.ys
        }
      };
      var trainResult = yield (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__/* .trainRequest */ ._S)(trainMsg); // stop subscriber after training

      stopWorkerSubscribe();

      if (trainResult && trainResult.data) {
        // handle result from training
        var trainingHistory = trainResult.data.trainingLogs;
        model.weightData = trainResult.data.modelWeights;
        model.armModel = trainResult.data.armModel; // evaluate on training dataset

        var predictMsg = {
          worker: "tf",
          type: "predict",
          data: {
            zData: dataset.xs,
            model: model.toJSON()
          }
        };
        var predResult = yield (0,_blockly_dsl_workers_tf_proxy__WEBPACK_IMPORTED_MODULE_4__/* .predictRequest */ .iE)(predictMsg);

        if (predResult) {
          // convert prediction result to string
          var predictions = predResult.data.predictTop.map(prediction => {
            return model.labels[prediction];
          });
          setTrainingPredictionResult(predictions);
          setTrainTimestamp(Date.now());
        } // Update model status


        model.status = "trained";
        model.trainingAcc = trainingHistory[trainingHistory.length - 1];
        handleModelUpdate(model);
        setTrainEnabled(true);
      } else {
        model.status = "untrained";
        handleModelUpdate(model);
        setTrainEnabled(true);
      }
    });

    return function trainTFModel() {
      return _ref.apply(this, arguments);
    };
  }();
  /* For page management */


  var handleNext = () => {
    onNext(model);
  };

  var handleModelUpdate = model => {
    onChange(model);
  };

  var handleDownloadModel = () => {
    // TODO also download arm model (as a zip file?)
    fileStorage.saveText(model.name + ".json", JSON.stringify(model));
  };

  var deleteTFModel = () => {
    if (confirm("Are you sure you want to delete current model?")) {
      var newModel = new _MBModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP(model.name);
      prepareModel(newModel, dataset, undefined);
      handleModelUpdate(newModel);
      setTrainingLossLog([]);
      setTrainingAccLog([]);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Current Model", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    onClick: handleDownloadModel,
    title: "Download the trained model",
    disabled: model.status != "trained"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_GetApp__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    onClick: deleteTFModel,
    title: "Delete current model information"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_DeleteSweep__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ModelSummaryDropdown, {
    reactStyle: classes,
    dataset: dataset,
    model: model
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    size: "large",
    variant: "contained",
    color: "primary",
    "aria-label": "start training model",
    title: trainEnabled ? "Press to start training machine learning model" : "You must have at least two classes to train a model. Go back to first tab.",
    onClick: trainTFModel,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null),
    disabled: !trainEnabled,
    style: {
      marginTop: 16
    }
  }, "Train Model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Training Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    variant: "determinate",
    value: trainingProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    style: {
      float: "right"
    }
  }, trainingProgress, " / 100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), !!trainingLossLog.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "vega-loss-acc-charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LossAccChart, {
    chartProps: chartProps,
    lossData: trainingLossLog,
    accData: trainingAccLog,
    timestamp: trainingProgress
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Final training accuracy:", " ", model.status == "trained" ? (model.trainingAcc || 0).toPrecision(2) : "Model has not been trained")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Training Results"), !!trainingPredictionResult.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "vega-training-set-charts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ConfusionMatrixHeatMap, {
    chartProps: chartProps,
    yActual: dataset.ys.map(val => dataset.labels[val]),
    yPredicted: trainingPredictionResult,
    labels: model.labels,
    timestamp: trainTimestamp
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataSetPlot, {
    chartProps: chartProps,
    reactStyle: classes,
    dataset: dataset,
    predictedLabels: trainingPredictionResult,
    timestamp: trainTimestamp
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    item: true,
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    variant: "contained",
    color: "secondary",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, null),
    disabled: model.status !== "trained",
    onClick: handleNext
  }, "Next"))));
}

/***/ })

}]);
//# sourceMappingURL=86ab0ffe4ebd6a8173cf195d01dfee36185fdf2b-c713071fff7a841d651f.js.map