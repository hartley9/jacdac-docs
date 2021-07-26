(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6471],{

/***/ 66471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fields_ScatterPlot; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@nivo/core/dist/nivo-core.es.js + 30 modules
var nivo_core_es = __webpack_require__(67587);
// EXTERNAL MODULE: ./node_modules/@nivo/axes/dist/nivo-axes.es.js + 14 modules
var nivo_axes_es = __webpack_require__(21100);
// EXTERNAL MODULE: ./node_modules/@nivo/legends/dist/nivo-legends.es.js
var nivo_legends_es = __webpack_require__(26729);
// EXTERNAL MODULE: ./node_modules/@nivo/colors/dist/nivo-colors.es.js + 2 modules
var nivo_colors_es = __webpack_require__(68204);
// EXTERNAL MODULE: ./node_modules/@nivo/scales/dist/nivo-scales.es.js + 24 modules
var nivo_scales_es = __webpack_require__(12685);
// EXTERNAL MODULE: ./node_modules/@nivo/annotations/dist/nivo-annotations.es.js
var nivo_annotations_es = __webpack_require__(80480);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(47037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(81763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(68630);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
// EXTERNAL MODULE: ./node_modules/d3-scale/src/linear.js + 4 modules
var linear = __webpack_require__(44076);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var nivo_tooltip_es = __webpack_require__(62529);
// EXTERNAL MODULE: ./node_modules/react-motion/lib/react-motion.js
var react_motion = __webpack_require__(44235);
// EXTERNAL MODULE: ./node_modules/@nivo/voronoi/dist/nivo-voronoi.es.js + 5 modules
var nivo_voronoi_es = __webpack_require__(8374);
;// CONCATENATED MODULE: ./node_modules/@nivo/scatterplot/dist/nivo-scatterplot.es.js


















function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var getNodeSizeGenerator = function getNodeSizeGenerator(size) {
  if (typeof size === 'function') return size;
  if (isNumber_default()(size)) return function () {
    return size;
  };

  if (isPlainObject_default()(size)) {
    if (!isString_default()(size.key)) {
      throw new Error('symbolSize is invalid, key should be a string pointing to the property to use to determine node size');
    }

    if (!Array.isArray(size.values) || size.values.length !== 2) {
      throw new Error('symbolSize is invalid, values spec should be an array containing two values, min and max');
    }

    if (!Array.isArray(size.sizes) || size.sizes.length !== 2) {
      throw new Error('symbolSize is invalid, sizes spec should be an array containing two values, min and max');
    }

    var sizeScale = (0,linear/* default */.Z)().domain([size.values[0], size.values[1]]).range([size.sizes[0], size.sizes[1]]);
    return function (d) {
      return sizeScale(get_default()(d, size.key));
    };
  }

  throw new Error('symbolSize is invalid, it should be either a function, a number or an object');
};

var computePoints = function computePoints(_ref) {
  var series = _ref.series,
      formatX = _ref.formatX,
      formatY = _ref.formatY,
      getNodeId = _ref.getNodeId;
  return series.reduce(function (agg, serie) {
    return [].concat(_toConsumableArray(agg), _toConsumableArray(serie.data.map(function (d, index) {
      var id = getNodeId(_objectSpread2({
        serieId: serie.id,
        index: index
      }, d.data));
      return {
        index: agg.length + index,
        id: id,
        x: d.position.x,
        y: d.position.y,
        data: _objectSpread2(_objectSpread2({}, d.data), {}, {
          id: id,
          serieId: serie.id,
          formattedX: formatX(d.data.x),
          formattedY: formatY(d.data.y)
        })
      };
    })));
  }, []);
};

var useNodeSize = function useNodeSize(size) {
  return (0,react.useMemo)(function () {
    return getNodeSizeGenerator(size);
  }, [size]);
};

var useScatterPlot = function useScatterPlot(_ref) {
  var data = _ref.data,
      xScaleSpec = _ref.xScaleSpec,
      xFormat = _ref.xFormat,
      yScaleSpec = _ref.yScaleSpec,
      yFormat = _ref.yFormat,
      width = _ref.width,
      height = _ref.height,
      nodeId = _ref.nodeId,
      nodeSize = _ref.nodeSize,
      colors = _ref.colors;

  var _useMemo = (0,react.useMemo)(function () {
    return (0,nivo_scales_es/* computeXYScalesForSeries */.Gi)(data, xScaleSpec, yScaleSpec, width, height);
  }, [data, xScaleSpec, yScaleSpec, width, height]),
      series = _useMemo.series,
      xScale = _useMemo.xScale,
      yScale = _useMemo.yScale;

  var formatX = (0,nivo_core_es/* useValueFormatter */.O_)(xFormat);
  var formatY = (0,nivo_core_es/* useValueFormatter */.O_)(yFormat);
  var getNodeId = (0,nivo_core_es/* usePropertyAccessor */.LR)(nodeId);
  var rawNodes = (0,react.useMemo)(function () {
    return computePoints({
      series: series,
      formatX: formatX,
      formatY: formatY,
      getNodeId: getNodeId
    });
  }, [series, formatX, formatY, getNodeId]);
  var getNodeSize = useNodeSize(nodeSize);
  var getColor = (0,nivo_colors_es/* useOrdinalColorScale */.U)(colors, 'serieId');
  var nodes = (0,react.useMemo)(function () {
    return rawNodes.map(function (rawNode) {
      return _objectSpread2(_objectSpread2({}, rawNode), {}, {
        size: getNodeSize(rawNode.data),
        style: {
          color: getColor(rawNode.data)
        }
      });
    });
  }, [rawNodes, getNodeSize, getColor]);
  var legendData = (0,react.useMemo)(function () {
    return series.map(function (serie) {
      return {
        id: serie.id,
        label: serie.id,
        color: getColor({
          serieId: serie.id
        })
      };
    });
  }, [series, getColor]);
  return {
    xScale: xScale,
    yScale: yScale,
    nodes: nodes,
    legendData: legendData
  };
};

var useScatterPlotAnnotations = function useScatterPlotAnnotations(items, annotations) {
  return (0,nivo_annotations_es/* useAnnotations */.O2)({
    data: items,
    annotations: annotations,
    getPosition: function getPosition(node) {
      return {
        x: node.x,
        y: node.y
      };
    },
    getDimensions: function getDimensions(node, offset) {
      var size = node.size + offset * 2;
      return {
        size: size,
        width: size,
        height: size
      };
    }
  });
};

var Node = function Node(_ref) {
  var x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      color = _ref.color,
      blendMode = _ref.blendMode,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick;
  return (0,jsx_runtime.jsx)("circle", {
    cx: x,
    cy: y,
    r: size / 2,
    fill: color,
    style: {
      mixBlendMode: blendMode
    },
    onMouseEnter: onMouseEnter,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave,
    onClick: onClick
  });
};

var Node$1 = (0,react.memo)(Node);

var Tooltip = function Tooltip(_ref) {
  var node = _ref.node;
  return (0,jsx_runtime.jsx)(nivo_tooltip_es/* BasicTooltip */._5, {
    id: node.data.serieId,
    value: "x: ".concat(node.data.formattedX, ", y: ").concat(node.data.formattedY),
    enableChip: true,
    color: node.style.color
  });
};

var Tooltip$1 = (0,react.memo)(Tooltip);
var commonPropTypes = {
  data: prop_types_default().arrayOf(prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    data: prop_types_default().arrayOf(prop_types_default().shape({
      x: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
      y: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired
    })).isRequired
  })).isRequired,
  xScale: (prop_types_default()).object.isRequired,
  xFormat: (prop_types_default()).any,
  yScale: (prop_types_default()).object.isRequired,
  yFormat: (prop_types_default()).any,
  layers: prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().oneOf(['grid', 'axes', 'nodes', 'markers', 'mesh', 'legends', 'annotations']), (prop_types_default()).func])).isRequired,
  enableGridX: (prop_types_default()).bool.isRequired,
  enableGridY: (prop_types_default()).bool.isRequired,
  axisTop: nivo_axes_es/* axisPropType */.VT,
  axisRight: nivo_axes_es/* axisPropType */.VT,
  axisBottom: nivo_axes_es/* axisPropType */.VT,
  axisLeft: nivo_axes_es/* axisPropType */.VT,
  annotations: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  nodeSize: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    key: (prop_types_default()).string.isRequired,
    values: prop_types_default().arrayOf((prop_types_default()).number).isRequired,
    sizes: prop_types_default().arrayOf((prop_types_default()).number).isRequired
  }), (prop_types_default()).func]).isRequired,
  renderNode: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  colors: nivo_colors_es/* ordinalColorsPropType.isRequired */.qi.isRequired,
  blendMode: nivo_core_es/* blendModePropType.isRequired */.wM.isRequired,
  isInteractive: (prop_types_default()).bool.isRequired,
  debugMesh: (prop_types_default()).bool.isRequired,
  onMouseEnter: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  onClick: (prop_types_default()).func,
  tooltip: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  markers: prop_types_default().arrayOf(prop_types_default().shape({
    axis: prop_types_default().oneOf(['x', 'y']).isRequired,
    value: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
    style: (prop_types_default()).object
  })),
  legends: prop_types_default().arrayOf(prop_types_default().shape(nivo_legends_es/* LegendPropShape */.iQ)).isRequired
};

var ScatterPlotPropTypes = _objectSpread2(_objectSpread2({}, commonPropTypes), {}, {
  role: (prop_types_default()).string.isRequired,
  useMesh: (prop_types_default()).bool.isRequired
}, nivo_core_es/* motionPropTypes */.w$);

var ScatterPlotCanvasPropTypes = _objectSpread2(_objectSpread2({}, commonPropTypes), {}, {
  pixelRatio: (prop_types_default()).number.isRequired
});

var commonDefaultProps = {
  xScale: {
    type: 'linear',
    min: 0,
    max: 'auto'
  },
  yScale: {
    type: 'linear',
    min: 0,
    max: 'auto'
  },
  enableGridX: true,
  enableGridY: true,
  axisBottom: {},
  axisLeft: {},
  nodeId: function nodeId(_ref) {
    var serieId = _ref.serieId,
        index = _ref.index;
    return "".concat(serieId, ".").concat(index);
  },
  nodeSize: 9,
  renderNode: Node$1,
  colors: {
    scheme: 'nivo'
  },
  blendMode: 'normal',
  isInteractive: true,
  debugMesh: false,
  tooltip: Tooltip$1,
  markers: [],
  legends: [],
  annotations: []
};

var ScatterPlotDefaultProps = _objectSpread2(_objectSpread2({}, commonDefaultProps), {}, {
  layers: ['grid', 'axes', 'nodes', 'markers', 'mesh', 'legends', 'annotations'],
  role: 'img',
  useMesh: true,
  animate: true,
  motionStiffness: 90,
  motionDamping: 15
});

var ScatterPlotCanvasDefaultProps = _objectSpread2(_objectSpread2({}, commonDefaultProps), {}, {
  layers: ['grid', 'axes', 'nodes', 'mesh', 'legends', 'annotations'],
  pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
});

var NodePropType = prop_types_default().shape({
  id: (prop_types_default()).string.isRequired,
  x: (prop_types_default()).number.isRequired,
  y: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired,
  data: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    serieId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    x: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
    formattedX: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
    y: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string, prop_types_default().instanceOf(Date)]).isRequired,
    formattedY: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
  }).isRequired,
  style: prop_types_default().shape({
    color: (prop_types_default()).string.isRequired
  }).isRequired
});

var NodeWrapper = function NodeWrapper(_ref) {
  var node = _ref.node,
      NodeComponent = _ref.renderNode,
      x = _ref.x,
      y = _ref.y,
      size = _ref.size,
      color = _ref.color,
      isInteractive = _ref.isInteractive,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      blendMode = _ref.blendMode;

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseEnter = (0,react.useCallback)(function (event) {
    showTooltipFromEvent((0,react.createElement)(tooltip, {
      node: node
    }), event);
    onMouseEnter && onMouseEnter(node, event);
  }, [node, tooltip, showTooltipFromEvent, onMouseEnter]);
  var handleMouseMove = (0,react.useCallback)(function (event) {
    showTooltipFromEvent((0,react.createElement)(tooltip, {
      node: node
    }), event);
    onMouseMove && onMouseMove(node, event);
  }, [node, tooltip, showTooltipFromEvent, onMouseMove]);
  var handleMouseLeave = (0,react.useCallback)(function (event) {
    hideTooltip();
    onMouseLeave && onMouseLeave(node, event);
  }, [node, hideTooltip, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (event) {
    onClick && onClick(node, event);
  }, [node, onClick]);
  return (0,react.createElement)(NodeComponent, {
    node: node,
    x: x,
    y: y,
    size: size,
    color: color,
    blendMode: blendMode,
    onMouseEnter: isInteractive ? handleMouseEnter : undefined,
    onMouseMove: isInteractive ? handleMouseMove : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive && onClick ? handleClick : undefined
  });
};

NodeWrapper.propTypes = {
  node: NodePropType.isRequired,
  renderNode: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  x: (prop_types_default()).number.isRequired,
  y: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired,
  color: (prop_types_default()).string.isRequired,
  isInteractive: (prop_types_default()).bool.isRequired,
  onMouseEnter: (prop_types_default()).func,
  onMouseMove: (prop_types_default()).func,
  onMouseLeave: (prop_types_default()).func,
  onClick: (prop_types_default()).func,
  tooltip: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]).isRequired,
  blendMode: nivo_core_es/* blendModePropType.isRequired */.wM.isRequired
};
var NodeWrapper$1 = (0,react.memo)(NodeWrapper);

var AnimatedNodes = function AnimatedNodes(_ref) {
  var nodes = _ref.nodes,
      renderNode = _ref.renderNode,
      isInteractive = _ref.isInteractive,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      blendMode = _ref.blendMode;

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      springConfig = _useMotionConfig.springConfig;

  return (0,jsx_runtime.jsx)(react_motion/* TransitionMotion */.bg, {
    styles: nodes.map(function (node) {
      return {
        key: node.id,
        data: node,
        style: {
          x: (0,react_motion/* spring */.ST)(node.x, springConfig),
          y: (0,react_motion/* spring */.ST)(node.y, springConfig),
          size: (0,react_motion/* spring */.ST)(node.size, springConfig)
        }
      };
    }),
    children: function children(interpolatedStyles) {
      return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: interpolatedStyles.map(function (_ref2) {
          var key = _ref2.key,
              style = _ref2.style,
              node = _ref2.data;
          return (0,jsx_runtime.jsx)(NodeWrapper$1, {
            node: node,
            renderNode: renderNode,
            x: style.x,
            y: style.y,
            size: style.size,
            color: node.style.color,
            isInteractive: isInteractive,
            onMouseEnter: onMouseEnter,
            onMouseMove: onMouseMove,
            onMouseLeave: onMouseLeave,
            onClick: onClick,
            tooltip: tooltip,
            blendMode: blendMode
          }, key);
        })
      });
    }
  });
};

var AnimatedNodes$1 = (0,react.memo)(AnimatedNodes);

var ScatterPlotAnnotations = function ScatterPlotAnnotations(_ref) {
  var nodes = _ref.nodes,
      annotations = _ref.annotations;
  var boundAnnotations = useScatterPlotAnnotations(nodes, annotations);
  return boundAnnotations.map(function (annotation, i) {
    return (0,jsx_runtime.jsx)(nivo_annotations_es/* Annotation */.q6, _objectSpread2({}, annotation), i);
  });
};

var StaticNodes = function StaticNodes(_ref) {
  var nodes = _ref.nodes,
      renderNode = _ref.renderNode,
      isInteractive = _ref.isInteractive,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      blendMode = _ref.blendMode;
  return nodes.map(function (node) {
    return (0,jsx_runtime.jsx)(NodeWrapper$1, {
      node: node,
      renderNode: renderNode,
      x: node.x,
      y: node.y,
      size: node.size,
      color: node.style.color,
      isInteractive: isInteractive,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      blendMode: blendMode
    }, node.id);
  });
};

var StaticNodes$1 = (0,react.memo)(StaticNodes);

var Mesh = function Mesh(_ref) {
  var nodes = _ref.nodes,
      width = _ref.width,
      height = _ref.height,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      debug = _ref.debug;

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var handleMouseEnter = (0,react.useCallback)(function (node, event) {
    showTooltipFromEvent((0,react.createElement)(tooltip, {
      node: node
    }), event);
    onMouseEnter && onMouseEnter(node, event);
  }, [showTooltipFromEvent, tooltip, onMouseEnter]);
  var handleMouseMove = (0,react.useCallback)(function (node, event) {
    showTooltipFromEvent((0,react.createElement)(tooltip, {
      node: node
    }), event);
    onMouseMove && onMouseMove(node, event);
  }, [showTooltipFromEvent, tooltip, onMouseMove]);
  var handleMouseLeave = (0,react.useCallback)(function (node, event) {
    hideTooltip();
    onMouseLeave && onMouseLeave(node, event);
  }, [hideTooltip, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (node, event) {
    onClick && onClick(node, event);
  }, [onClick]);
  return (0,jsx_runtime.jsx)(nivo_voronoi_es/* Mesh */.Kj, {
    nodes: nodes,
    width: width,
    height: height,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    debug: debug
  });
};

var Mesh$1 = (0,react.memo)(Mesh);

var ScatterPlot = function ScatterPlot(props) {
  var data = props.data,
      xScaleSpec = props.xScale,
      xFormat = props.xFormat,
      yScaleSpec = props.yScale,
      yFormat = props.yFormat,
      width = props.width,
      height = props.height,
      partialMargin = props.margin,
      layers = props.layers,
      colors = props.colors,
      blendMode = props.blendMode,
      nodeId = props.nodeId,
      nodeSize = props.nodeSize,
      renderNode = props.renderNode,
      enableGridX = props.enableGridX,
      enableGridY = props.enableGridY,
      gridXValues = props.gridXValues,
      gridYValues = props.gridYValues,
      axisTop = props.axisTop,
      axisRight = props.axisRight,
      axisBottom = props.axisBottom,
      axisLeft = props.axisLeft,
      annotations = props.annotations,
      isInteractive = props.isInteractive,
      useMesh = props.useMesh,
      debugMesh = props.debugMesh,
      onMouseEnter = props.onMouseEnter,
      onMouseMove = props.onMouseMove,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      tooltip = props.tooltip,
      markers = props.markers,
      legends = props.legends,
      role = props.role;

  var _useDimensions = (0,nivo_core_es/* useDimensions */.Bs)(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useMotionConfig = (0,nivo_core_es/* useMotionConfig */.tf)(),
      animate = _useMotionConfig.animate;

  var _useScatterPlot = useScatterPlot({
    data: data,
    xScaleSpec: xScaleSpec,
    xFormat: xFormat,
    yScaleSpec: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    nodeId: nodeId,
    nodeSize: nodeSize,
    colors: colors
  }),
      xScale = _useScatterPlot.xScale,
      yScale = _useScatterPlot.yScale,
      nodes = _useScatterPlot.nodes,
      legendData = _useScatterPlot.legendData;

  var customLayerProps = (0,react.useMemo)(function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      xScale: xScale,
      yScale: yScale,
      nodes: nodes,
      margin: margin,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      outerWidth: outerWidth,
      outerHeight: outerHeight
    });
  }, [xScale, yScale, nodes, margin, innerWidth, innerHeight, outerWidth, outerHeight]);
  var Nodes = animate ? AnimatedNodes$1 : StaticNodes$1;
  var layerById = {
    grid: (0,jsx_runtime.jsx)(nivo_axes_es/* Grid */.rj, {
      width: innerWidth,
      height: innerHeight,
      xScale: enableGridX ? xScale : null,
      yScale: enableGridY ? yScale : null,
      xValues: gridXValues,
      yValues: gridYValues
    }, "grid"),
    axes: (0,jsx_runtime.jsx)(nivo_axes_es/* Axes */.dk, {
      xScale: xScale,
      yScale: yScale,
      width: innerWidth,
      height: innerHeight,
      top: axisTop,
      right: axisRight,
      bottom: axisBottom,
      left: axisLeft
    }, "axes"),
    nodes: (0,react.createElement)(Nodes, {
      key: 'nodes',
      nodes: nodes,
      renderNode: renderNode,
      isInteractive: isInteractive,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      blendMode: blendMode
    }),
    markers: (0,jsx_runtime.jsx)(nivo_core_es/* CartesianMarkers */.TL, {
      markers: markers,
      width: innerWidth,
      height: innerHeight,
      xScale: xScale,
      yScale: yScale
    }, "markers"),
    mesh: null,
    annotations: (0,jsx_runtime.jsx)(ScatterPlotAnnotations, {
      nodes: nodes,
      annotations: annotations,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      animate: animate
    }, "annotations"),
    legends: legends.map(function (legend, i) {
      return (0,jsx_runtime.jsx)(nivo_legends_es/* BoxLegendSvg */.$6, _objectSpread2(_objectSpread2({}, legend), {}, {
        containerWidth: innerWidth,
        containerHeight: innerHeight,
        data: legendData,
        theme: theme
      }), i);
    })
  };

  if (isInteractive === true && useMesh === true) {
    layerById.mesh = (0,jsx_runtime.jsx)(Mesh$1, {
      nodes: nodes,
      width: innerWidth,
      height: innerHeight,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      debug: debugMesh
    }, "mesh");
  }

  return (0,jsx_runtime.jsx)(nivo_core_es/* SvgWrapper */.tM, {
    width: outerWidth,
    height: outerHeight,
    margin: margin,
    theme: theme,
    role: role,
    children: layers.map(function (layer, i) {
      if (layerById[layer] !== undefined) {
        return layerById[layer];
      }

      if (typeof layer === 'function') {
        return (0,jsx_runtime.jsx)(react.Fragment, {
          children: (0,react.createElement)(layer, customLayerProps)
        }, i);
      }

      throw new Error("Unknown layer (".concat(layer, ")"));
    })
  });
};

ScatterPlot.defaultProps = ScatterPlotDefaultProps;
var ScatterPlot$1 = (0,react.memo)((0,nivo_core_es/* withContainer */.li)(ScatterPlot));

var ResponsiveScatterPlot = function ResponsiveScatterPlot(props) {
  return jsx(ResponsiveWrapper, {
    children: function children(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return jsx(ScatterPlot$1, _objectSpread2({
        width: width,
        height: height
      }, props));
    }
  });
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var ScatterPlotCanvas = function ScatterPlotCanvas(props) {
  var data = props.data,
      xScaleSpec = props.xScale,
      xFormat = props.xFormat,
      yScaleSpec = props.yScale,
      yFormat = props.yFormat,
      width = props.width,
      height = props.height,
      partialMargin = props.margin,
      pixelRatio = props.pixelRatio,
      layers = props.layers,
      colors = props.colors,
      nodeSize = props.nodeSize,
      renderNode = props.renderNode,
      enableGridX = props.enableGridX,
      gridXValues = props.gridXValues,
      enableGridY = props.enableGridY,
      gridYValues = props.gridYValues,
      axisTop = props.axisTop,
      axisRight = props.axisRight,
      axisBottom = props.axisBottom,
      axisLeft = props.axisLeft,
      annotations = props.annotations,
      isInteractive = props.isInteractive,
      debugMesh = props.debugMesh,
      onMouseEnter = props.onMouseEnter,
      onMouseMove = props.onMouseMove,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      tooltip = props.tooltip,
      legends = props.legends;
  var canvasEl = (0,react.useRef)(null);
  var theme = (0,nivo_core_es/* useTheme */.Fg)();

  var _useState = (0,react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentNode = _useState2[0],
      setCurrentNode = _useState2[1];

  var _useDimensions = (0,nivo_core_es/* useDimensions */.Bs)(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;

  var _useScatterPlot = useScatterPlot({
    data: data,
    xScaleSpec: xScaleSpec,
    xFormat: xFormat,
    yScaleSpec: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    nodeSize: nodeSize,
    colors: colors
  }),
      xScale = _useScatterPlot.xScale,
      yScale = _useScatterPlot.yScale,
      nodes = _useScatterPlot.nodes,
      legendData = _useScatterPlot.legendData;

  var boundAnnotations = useScatterPlotAnnotations(nodes, annotations);

  var _useVoronoiMesh = (0,nivo_voronoi_es/* useVoronoiMesh */.ZR)({
    points: nodes,
    width: innerWidth,
    height: innerHeight,
    debug: debugMesh
  }),
      delaunay = _useVoronoiMesh.delaunay,
      voronoi = _useVoronoiMesh.voronoi;

  var customLayerProps = (0,react.useMemo)(function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      xScale: xScale,
      yScale: yScale,
      nodes: nodes,
      margin: margin,
      innerWidth: innerWidth,
      innerHeight: innerHeight,
      outerWidth: outerWidth,
      outerHeight: outerHeight
    });
  }, [xScale, yScale, nodes, margin, innerWidth, innerHeight, outerWidth, outerHeight]);
  (0,react.useEffect)(function () {
    canvasEl.current.width = outerWidth * pixelRatio;
    canvasEl.current.height = outerHeight * pixelRatio;
    var ctx = canvasEl.current.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.fillStyle = theme.background;
    ctx.fillRect(0, 0, outerWidth, outerHeight);
    ctx.translate(margin.left, margin.top);
    layers.forEach(function (layer) {
      if (layer === 'grid') {
        ctx.lineWidth = theme.grid.line.strokeWidth;
        ctx.strokeStyle = theme.grid.line.stroke;
        enableGridX && (0,nivo_axes_es/* renderGridLinesToCanvas */.FA)(ctx, {
          width: innerWidth,
          height: innerHeight,
          scale: xScale,
          axis: 'x',
          values: gridXValues
        });
        enableGridY && (0,nivo_axes_es/* renderGridLinesToCanvas */.FA)(ctx, {
          width: innerWidth,
          height: innerHeight,
          scale: yScale,
          axis: 'y',
          values: gridYValues
        });
      } else if (layer === 'annotations') {
        (0,nivo_annotations_es/* renderAnnotationsToCanvas */.dS)(ctx, {
          annotations: boundAnnotations,
          theme: theme
        });
      } else if (layer === 'axes') {
        (0,nivo_axes_es/* renderAxesToCanvas */.DZ)(ctx, {
          xScale: xScale,
          yScale: yScale,
          width: innerWidth,
          height: innerHeight,
          top: axisTop,
          right: axisRight,
          bottom: axisBottom,
          left: axisLeft,
          theme: theme
        });
      } else if (layer === 'nodes') {
        nodes.forEach(function (node) {
          renderNode(ctx, node);
        });
      } else if (layer === 'mesh') {
        if (debugMesh === true) {
          (0,nivo_voronoi_es/* renderVoronoiToCanvas */.qF)(ctx, voronoi);

          if (currentNode) {
            (0,nivo_voronoi_es/* renderVoronoiCellToCanvas */.r$)(ctx, voronoi, currentNode.index);
          }
        }
      } else if (layer === 'legends') {
        legends.forEach(function (legend) {
          (0,nivo_legends_es/* renderLegendToCanvas */.as)(ctx, _objectSpread2(_objectSpread2({}, legend), {}, {
            data: legendData,
            containerWidth: innerWidth,
            containerHeight: innerHeight,
            theme: theme
          }));
        });
      } else if (typeof layer === 'function') {
        layer(ctx, customLayerProps);
      } else {
        throw new Error("Invalid layer: ".concat(layer));
      }
    });
  }, [canvasEl, innerWidth, innerHeight, outerWidth, outerHeight, margin.top, margin.left, pixelRatio, renderNode, layers, customLayerProps, theme, xScale, yScale, nodes, enableGridX, enableGridY, axisTop, axisRight, axisBottom, axisLeft, legends, legendData, debugMesh, voronoi, currentNode]);

  var _useTooltip = (0,nivo_tooltip_es/* useTooltip */.lL)(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;

  var getNodeFromMouseEvent = (0,react.useCallback)(function (event) {
    var _getRelativeCursor = (0,nivo_core_es/* getRelativeCursor */.P6)(canvasEl.current, event),
        _getRelativeCursor2 = _slicedToArray(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];

    if (!(0,nivo_core_es/* isCursorInRect */.zn)(margin.left, margin.top, innerWidth, innerHeight, x, y)) return null;
    var nodeIndex = delaunay.find(x - margin.left, y - margin.top);
    return nodes[nodeIndex];
  }, [canvasEl, margin, innerWidth, innerHeight, delaunay]);
  var handleMouseHover = (0,react.useCallback)(function (event) {
    var node = getNodeFromMouseEvent(event);
    setCurrentNode(node);

    if (node) {
      showTooltipFromEvent((0,react.createElement)(tooltip, {
        node: node
      }), event);

      if (currentNode && currentNode.id !== node.id) {
        onMouseLeave && onMouseLeave(currentNode, event);
        onMouseEnter && onMouseEnter(node, event);
      }

      if (!currentNode) {
        onMouseEnter && onMouseEnter(node, event);
      }

      onMouseMove && onMouseMove(node, event);
    } else {
      hideTooltip();
      currentNode && onMouseLeave && onMouseLeave(currentNode, event);
    }
  }, [getNodeFromMouseEvent, currentNode, setCurrentNode, showTooltipFromEvent, hideTooltip, tooltip, onMouseEnter, onMouseMove, onMouseLeave]);
  var handleMouseLeave = (0,react.useCallback)(function (event) {
    hideTooltip();
    setCurrentNode(null);
    currentNode && onMouseLeave && onMouseLeave(currentNode, event);
  }, [hideTooltip, currentNode, setCurrentNode, onMouseLeave]);
  var handleClick = (0,react.useCallback)(function (event) {
    if (onClick) {
      var node = getNodeFromMouseEvent(event);
      node && onClick(node, event);
    }
  }, [getNodeFromMouseEvent, onClick]);
  return (0,jsx_runtime.jsx)("canvas", {
    ref: canvasEl,
    width: outerWidth * pixelRatio,
    height: outerHeight * pixelRatio,
    style: {
      width: outerWidth,
      height: outerHeight,
      cursor: isInteractive ? 'auto' : 'normal'
    },
    onMouseEnter: isInteractive ? handleMouseHover : undefined,
    onMouseMove: isInteractive ? handleMouseHover : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive ? handleClick : undefined
  });
};

ScatterPlotCanvas.defaultProps = _objectSpread2(_objectSpread2({}, ScatterPlotCanvasDefaultProps), {}, {
  renderNode: function renderNode(ctx, node) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size / 2, 0, 2 * Math.PI);
    ctx.fillStyle = node.style.color;
    ctx.fill();
  }
});
var ScatterPlotCanvas$1 = (0,react.memo)((0,nivo_core_es/* withContainer */.li)(ScatterPlotCanvas));

var ResponsiveScatterPlotCanvas = function ResponsiveScatterPlotCanvas(props) {
  return jsx(ResponsiveWrapper, {
    children: function children(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return jsx(ScatterPlotCanvas$1, _objectSpread2({
        width: width,
        height: height
      }, props));
    }
  });
};


;// CONCATENATED MODULE: ./src/components/blockly/fields/ScatterPlot.tsx

/* harmony default export */ var fields_ScatterPlot = (ScatterPlot$1);

/***/ })

}]);