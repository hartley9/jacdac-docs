"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4610],{

/***/ 33584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDebounce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87709);



function valueEquality(left, right) {
  return left === right;
}

function adjustFunctionValueOfSetState(value) {
  return typeof value === 'function' ? function () {
    return value;
  } : value;
}

function useStateIgnoreCallback(initialState) {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(adjustFunctionValueOfSetState(initialState)),
      state = _a[0],
      setState = _a[1];

  var setStateIgnoreCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    return setState(adjustFunctionValueOfSetState(value));
  }, []);
  return [state, setStateIgnoreCallback];
}

function useDebounce(value, delay, options) {
  var eq = options && options.equalityFn || valueEquality;

  var _a = useStateIgnoreCallback(value),
      state = _a[0],
      dispatch = _a[1];

  var debounced = (0,_useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    return dispatch(value);
  }, [dispatch]), delay, options);
  var previousValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);

  if (!eq(previousValue.current, value)) {
    debounced(value);
    previousValue.current = value;
  }

  return [state, {
    cancel: debounced.cancel,
    isPending: debounced.isPending,
    flush: debounced.flush
  }];
}

/***/ }),

/***/ 87709:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDebouncedCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available, otherwise it will be setTimeout(...,0)).
 * @param {Object} [options={}] The options object.
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.leading=false]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {number} [options.maxWait]
 *  Specify invoking on the trailing edge of the timeout.
 * @param {boolean} [options.trailing=true]
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * const resizeHandler = useDebouncedCallback(calculateLayout, 150);
 * window.addEventListener('resize', resizeHandler)
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * const clickHandler = useDebouncedCallback(sendMail, 300, {
 *   leading: true,
 *   trailing: false,
 * })
 * <button onClick={clickHandler}>click me</button>
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = useDebouncedCallback(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * source.addEventListener('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * window.addEventListener('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */

function useDebouncedCallback(func, wait, options) {
  var _this = this;

  var lastCallTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastInvokeTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var timerId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var lastThis = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var funcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(func);
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  funcRef.current = func; // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.

  var useRAF = !wait && wait !== 0 && typeof window !== 'undefined';

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;
  options = options || {};
  var leading = !!options.leading;
  var trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default

  var maxing = ('maxWait' in options);
  var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []); // You may have a question, why we have so many code under the useMemo definition.
  //
  // This was made as we want to escape from useCallback hell and
  // not to initialize a number of functions each time useDebouncedCallback is called.
  //
  // It means that we have less garbage for our GC calls which improves performance.
  // Also, it makes this library smaller.
  //
  // And the last reason, that the code without lots of useCallback with deps is easier to read.
  // You have only one place for that.

  var debounced = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var invokeFunc = function invokeFunc(time) {
      var args = lastArgs.current;
      var thisArg = lastThis.current;
      lastArgs.current = lastThis.current = null;
      lastInvokeTime.current = time;
      return result.current = funcRef.current.apply(thisArg, args);
    };

    var startTimer = function startTimer(pendingFunc, wait) {
      if (useRAF) cancelAnimationFrame(timerId.current);
      timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
    };

    var shouldInvoke = function shouldInvoke(time) {
      if (!mounted.current) return false;
      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current; // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.

      return !lastCallTime.current || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    };

    var trailingEdge = function trailingEdge(time) {
      timerId.current = null; // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.

      if (trailing && lastArgs.current) {
        return invokeFunc(time);
      }

      lastArgs.current = lastThis.current = null;
      return result.current;
    };

    var timerExpired = function timerExpired() {
      var time = Date.now();

      if (shouldInvoke(time)) {
        return trailingEdge(time);
      } // https://github.com/xnimorz/use-debounce/issues/97


      if (!mounted.current) {
        return;
      } // Remaining wait calculation


      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current;
      var timeWaiting = wait - timeSinceLastCall;
      var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting; // Restart the timer

      startTimer(timerExpired, remainingWait);
    };

    var func = function func() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var time = Date.now();
      var isInvoking = shouldInvoke(time);
      lastArgs.current = args;
      lastThis.current = _this;
      lastCallTime.current = time;

      if (isInvoking) {
        if (!timerId.current && mounted.current) {
          // Reset any `maxWait` timer.
          lastInvokeTime.current = lastCallTime.current; // Start the timer for the trailing edge.

          startTimer(timerExpired, wait); // Invoke the leading edge.

          return leading ? invokeFunc(lastCallTime.current) : result.current;
        }

        if (maxing) {
          // Handle invocations in a tight loop.
          startTimer(timerExpired, wait);
          return invokeFunc(lastCallTime.current);
        }
      }

      if (!timerId.current) {
        startTimer(timerExpired, wait);
      }

      return result.current;
    };

    func.cancel = function () {
      if (timerId.current) {
        useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
      }

      lastInvokeTime.current = 0;
      lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
    };

    func.isPending = function () {
      return !!timerId.current;
    };

    func.flush = function () {
      return !timerId.current ? result.current : trailingEdge(Date.now());
    };

    return func;
  }, [leading, maxing, wait, maxWait, trailing, useRAF]);
  return debounced;
}

/***/ }),

/***/ 44610:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StartSimulatorDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15861);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80791);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(83332);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46526);
/* harmony import */ var _jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21258);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20392);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20509);
/* harmony import */ var _HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43830);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72513);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33584);













function StartSimulatorDialog(props) {
  var {
    open,
    onClose
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
  var {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  var {
    enqueueSnackbar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP);
  var {
    addHostedSimulator
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP);
  var {
    trackEvent
  } = (0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)();
  var searchId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var deviceHostDialogId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var deviceHostLabelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var [dquery] = (0,use_debounce__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(query.toLowerCase(), 500);
  var providerDefinitions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)().filter(server => !dquery || server.name.toLowerCase().indexOf(dquery) > -1), [dquery]);
  var simulatorDefinitions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_8__/* .hostedSimulatorDefinitions */ .JF)().filter(sim => !dquery || sim.name.toLowerCase().indexOf(dquery) > -1), [dquery]);
  var {
    mobile
  } = (0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();

  var handleProviderDefinition = provider => () => {
    trackEvent("dashboard.server.start", {
      server: provider.name
    });
    (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__/* .addServiceProvider */ .Q6)(bus, provider);
    onClose();
  };

  var handleHostedSimulator = simulator => () => {
    trackEvent("dashboard.sim.start", {
      simulator: simulator.name
    });
    addHostedSimulator(simulator);
    onClose();
  };

  var handleQuery = ev => setQuery(ev.target.value);

  var handleCancel = () => {
    onClose();
  };

  var handleAddAll = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function* () {
      var allProviderDefinitions = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .uniqueMap */ .EM)(providerDefinitions.filter(hd => hd.serviceClasses.length === 1), hd => hd.serviceClasses[0].toString(), h => h);
      enqueueSnackbar("starting " + allProviderDefinitions.length + " simulators...", "info");
      onClose();

      for (var provider of allProviderDefinitions) {
        yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .delay */ .gw)(100);
        (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__/* .addServiceProvider */ .Q6)(bus, provider);
      }
    });

    return function handleAddAll() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    id: deviceHostDialogId,
    "aria-labelledby": deviceHostLabelId,
    open: open,
    onClose: onClose,
    fullWidth: true,
    fullScreen: mobile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    id: deviceHostLabelId
  }, "Start a simulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    id: searchId,
    label: "Filter",
    type: "search",
    fullWidth: true,
    value: query,
    onChange: handleQuery
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, null, providerDefinitions.map(host => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
    button: true,
    key: host.name,
    onClick: handleProviderDefinition(host)
  }, host.name)), simulatorDefinitions.map(host => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
    button: true,
    key: host.name,
    onClick: handleHostedSimulator(host)
  }, host.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, null, _jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_4__/* ["default"].diagnostics */ .Z.diagnostics && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    variant: "outlined",
    onClick: handleAddAll
  }, "start all simulators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    "aria-label": "cancel",
    variant: "outlined",
    title: "Cancel",
    onClick: handleCancel
  }, "cancel")));
}

/***/ })

}]);
//# sourceMappingURL=4610-f0ba5eca3d1cac92118f.js.map