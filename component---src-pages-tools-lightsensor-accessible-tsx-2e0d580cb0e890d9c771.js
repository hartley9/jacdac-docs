"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3801],{

/***/ 87198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Radio_Radio; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/internal/SwitchBase.js
var SwitchBase = __webpack_require__(49044);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/RadioButtonUnchecked.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var RadioButtonUnchecked = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked'));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/RadioButtonChecked.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var RadioButtonChecked = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), 'RadioButtonChecked'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Radio/RadioButtonIcon.js





var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      '&$checked $layer': {
        transform: 'scale(1)',
        transition: theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.shortest
        })
      }
    },
    layer: {
      left: 0,
      position: 'absolute',
      transform: 'scale(0)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {}
  };
};
/**
 * @ignore - internal component.
 */

function RadioButtonIcon(props) {
  var checked = props.checked,
      classes = props.classes,
      fontSize = props.fontSize;
  return /*#__PURE__*/react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.root, checked && classes.checked)
  }, /*#__PURE__*/react.createElement(RadioButtonUnchecked, {
    fontSize: fontSize
  }), /*#__PURE__*/react.createElement(RadioButtonChecked, {
    fontSize: fontSize,
    className: classes.layer
  }));
}

 false ? 0 : void 0;
/* harmony default export */ var Radio_RadioButtonIcon = ((0,withStyles/* default */.Z)(styles, {
  name: 'PrivateRadioButtonIcon'
})(RadioButtonIcon));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(88231);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroupContext.js
var RadioGroupContext = __webpack_require__(98358);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/useRadioGroup.js


function useRadioGroup() {
  return react.useContext(RadioGroupContext/* default */.Z);
}
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Radio/Radio.js












var Radio_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = /*#__PURE__*/react.createElement(Radio_RadioButtonIcon, {
  checked: true
});
var defaultIcon = /*#__PURE__*/react.createElement(Radio_RadioButtonIcon, null);
var Radio = /*#__PURE__*/react.forwardRef(function Radio(props, ref) {
  var checkedProp = props.checked,
      classes = props.classes,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      nameProp = props.name,
      onChangeProp = props.onChange,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["checked", "classes", "color", "name", "onChange", "size"]);

  var radioGroup = useRadioGroup();
  var checked = checkedProp;
  var onChange = (0,createChainedFunction/* default */.Z)(onChangeProp, radioGroup && radioGroup.onChange);
  var name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }

    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  return /*#__PURE__*/react.createElement(SwitchBase/* default */.Z, (0,esm_extends/* default */.Z)({
    color: color,
    type: "radio",
    icon: /*#__PURE__*/react.cloneElement(defaultIcon, {
      fontSize: size === 'small' ? 'small' : 'medium'
    }),
    checkedIcon: /*#__PURE__*/react.cloneElement(defaultCheckedIcon, {
      fontSize: size === 'small' ? 'small' : 'medium'
    }),
    classes: {
      root: (0,clsx_m/* default */.Z)(classes.root, classes["color".concat((0,capitalize/* default */.Z)(color))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    name: name,
    checked: checked,
    onChange: onChange,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var Radio_Radio = ((0,withStyles/* default */.Z)(Radio_styles, {
  name: 'MuiRadio'
})(Radio));

/***/ }),

/***/ 92206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ RadioGroup_RadioGroup; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: 'row'
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

var FormGroup = /*#__PURE__*/react.forwardRef(function FormGroup(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$row = props.row,
      row = _props$row === void 0 ? false : _props$row,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "row"]);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, row && classes.row),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var FormGroup_FormGroup = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiFormGroup'
})(FormGroup));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(12933);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroupContext.js
var RadioGroupContext = __webpack_require__(98358);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/unstable_useId.js
var unstable_useId = __webpack_require__(15126);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js









var RadioGroup = /*#__PURE__*/react.forwardRef(function RadioGroup(props, ref) {
  var actions = props.actions,
      children = props.children,
      nameProp = props.name,
      valueProp = props.value,
      onChange = props.onChange,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["actions", "children", "name", "value", "onChange"]);

  var rootRef = react.useRef(null);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: valueProp,
    default: props.defaultValue,
    name: 'RadioGroup'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  react.useImperativeHandle(actions, function () {
    return {
      focus: function focus() {
        var input = rootRef.current.querySelector('input:not(:disabled):checked');

        if (!input) {
          input = rootRef.current.querySelector('input:not(:disabled)');
        }

        if (input) {
          input.focus();
        }
      }
    };
  }, []);
  var handleRef = (0,useForkRef/* default */.Z)(ref, rootRef);

  var handleChange = function handleChange(event) {
    setValue(event.target.value);

    if (onChange) {
      onChange(event, event.target.value);
    }
  };

  var name = (0,unstable_useId/* default */.Z)(nameProp);
  return /*#__PURE__*/react.createElement(RadioGroupContext/* default.Provider */.Z.Provider, {
    value: {
      name: name,
      onChange: handleChange,
      value: value
    }
  }, /*#__PURE__*/react.createElement(FormGroup_FormGroup, (0,esm_extends/* default */.Z)({
    role: "radiogroup",
    ref: handleRef
  }, other), children));
});
 false ? 0 : void 0;
/* harmony default export */ var RadioGroup_RadioGroup = (RadioGroup);

/***/ }),

/***/ 98358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 */

var RadioGroupContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (false) {}

/* harmony default export */ __webpack_exports__["Z"] = (RadioGroupContext);

/***/ }),

/***/ 65611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useBuzzerPlayTone; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54509);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57683);
/* harmony import */ var _useServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2928);
/* harmony import */ var _jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69589);
/* harmony import */ var _ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94564);









function useBuzzerPlayTone() {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  var buzzers = (0,_useServices__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_BUZZER */ .J1$
  });
  var {
    0: buzzerServer,
    1: setBuzzerServer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var {
    playTone,
    onClickActivateAudioContext,
    activated
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP); // useEffect invokes a function call whenever the variables
  // (passed as an array) change.
  // if clean up is required, return a clean up callback
  //
  // listen for playTone commands from the buzzer via subscribe
  // subscribe returns a clean up function that is invoked when the user
  // browses away from the page.
  // playtone uses the audio context set in handleBrowserAudioEnable

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => buzzerServer === null || buzzerServer === void 0 ? void 0 : buzzerServer.subscribe(_jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_6__/* ["default"].PLAY_TONE */ .Z.PLAY_TONE, _ref => {
    var {
      frequency,
      duration,
      volume
    } = _ref;
    return playTone(frequency, duration, volume);
  }), [buzzerServer]); // clean out buzzer server on page close.
  // defines an empty function that returns a function.
  // invoked each time buzzerServer changes

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => (buzzerServer === null || buzzerServer === void 0 ? void 0 : buzzerServer.device) && bus.removeServiceProvider(buzzerServer.device), [buzzerServer]); // when start browser audio button is clicked:
  // get a browser audio context
  // spin up a virtual buzzer that we latermap to the browser audio engine

  var toggleBrowserAudio = () => {
    // browser security dictates that the audio context be used within a click event
    // must be done once to allow background sounds
    onClickActivateAudioContext();

    if (!buzzerServer) {
      var dev = (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_2__/* .startServiceProviderFromServiceClass */ .V6)(bus, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_BUZZER */ .J1$);
      var srv = dev.services().find(s => s.serviceClass === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_BUZZER */ .J1$);
      setBuzzerServer(srv);
    } else {
      setBuzzerServer(undefined);
    }
  };

  var buzzerPlayTone = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (frequency, duration, volume) {
      yield Promise.all( // for each buzzer, map x acceleration to buzzer output
      buzzers === null || buzzers === void 0 ? void 0 : buzzers.map( /*#__PURE__*/function () {
        var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (buzzer) {
          var pkt = _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_4__/* ["default"].from */ .Z.from(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .BuzzerCmd.PlayTone */ .Rv2.PlayTone, (0,_jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_6__/* .tonePayload */ .x)(frequency, duration, volume));
          yield buzzer.sendPacketAsync(pkt);
        });

        return function (_x4) {
          return _ref3.apply(this, arguments);
        };
      }()));
    });

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(), [buzzers]);
  var browserAudio = activated && !!buzzerServer;
  return {
    playTone: buzzerPlayTone,
    toggleBrowserAudio,
    browserAudio
  };
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(bus, _ => (_ === null || _ === void 0 ? void 0 : _.services(options)) || [], [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 55389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LightsensorAccessible; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81794);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2928);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95393);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69817);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92206);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87198);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94431);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31477);
/* harmony import */ var _components_hooks_useBuzzerPlayTone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65611);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7576);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19640);













var TONE_DURATION = 50;
var TONE_THROTTLE = 100; // this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the light level services,
// so it will render again and update the light array whenever the bus connects/disconnects
// a light sensor

function LightsensorAccessible() {
  var {
    playTone,
    toggleBrowserAudio,
    browserAudio
  } = (0,_components_hooks_useBuzzerPlayTone__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(); // identifiers for accessibility

  var sectionId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Me)(); // useServices accepts a number of filters and returns any services that match
  // get all led light sensor services
  // under the hood, it uses the bus and events.

  var lightSensors = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_LIGHT_LEVEL */ .pPH
  });
  console.log("light sensors: " + lightSensors); // create a state variable to hold the service selected as our light sensor
  // when using setLightService, React will render again this component

  var {
    0: lightService,
    1: setLightService
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); //used to hold user selection of the property of the sound to vary. Default is the frequency.

  var {
    0: sonificationProperty,
    1: setSonificationProperty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("frequency");

  var handleSelectLightService = light => () => {
    console.log(light);
    lightService == light ? setLightService(undefined) : setLightService(light);
  }; //handler for property selection to sonify.


  var handlePropertySelectionChange = event => {
    setSonificationProperty(event.target.value);
  }; // filter to only show light sensors in dashboard


  var dashboardDeviceFilter = d => d.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_LIGHT_LEVEL */ .pPH); // register for light sensor data events


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ?. checks that the callee is defined
    var unsubs = lightService === null || lightService === void 0 ? void 0 : lightService.readingRegister.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ, // don't trigger more than every 100ms
    (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .throttle */ .P2)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      // get amount of light
      //console.log(lightService.readingRegister.unpackedValue)
      var [lightLevel] = lightService.readingRegister.unpackedValue;
      var volume = 1;
      var toneFrequencyOffset = 0;

      if (sonificationProperty == "frequency") {
        toneFrequencyOffset = lightLevel;
      } else {
        volume = lightLevel % 0.99;
      }

      yield playTone(1000 + toneFrequencyOffset * 1000, TONE_DURATION, volume);
    }), TONE_THROTTLE)); // cleanup callback

    return () => unsubs === null || unsubs === void 0 ? void 0 : unsubs();
  }, [lightService, playTone]); // re-register if light sensor changes

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: "Audio controls"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: toggleBrowserAudio
  }, browserAudio ? "Stop browser audio" : "Start browser audio"), !lightSensors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: "Connect a device"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_LIGHT_LEVEL */ .pPH
  }))), lightSensors.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: "Available Lightsensors"
  }), lightSensors.map(lightSensor => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    item: true,
    xs: 12,
    sm: 6,
    lg: 4,
    xl: 3,
    key: lightSensor.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    device: lightSensor.device,
    showAvatar: true,
    showMedia: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    variant: "h5"
  }, (lightSensor === lightService ? "Streaming from " : "") + (lightSensor.device.isPhysical ? "Physical" : "Virtual") + ("LightSensor " + lightSensor.friendlyName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
    component: "fieldset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
    component: "legend"
  }, "Select property of sound to change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    "aria-label": "sonification property",
    name: "soundProperty",
    value: sonificationProperty,
    onChange: handlePropertySelectionChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
    value: "frequency",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null),
    label: "buzzer frequency"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
    value: "volume",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, null),
    label: "buzzer volume"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: handleSelectLightService(lightSensor)
  }, lightSensor === lightService ? "Stop streaming" : "Start streaming")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    deviceFilter: dashboardDeviceFilter
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-lightsensor-accessible-tsx-2e0d580cb0e890d9c771.js.map