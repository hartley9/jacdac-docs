"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9750],{

/***/ 83532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/blockly/fields/tidy.ts
var tidy = __webpack_require__(47554);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/workspacejson.ts

function getField(block, name) {
  var inputs = block.inputs;

  for (var i = 0; i < inputs.length; ++i) {
    var field = inputs[i].fields[name];
    if (field) return field;
  }

  return undefined;
}
function getFieldValue(block, name) {
  var field = getField(block, name);
  return field === null || field === void 0 ? void 0 : field.value;
}
function resolveFieldColumn(data, b, fieldName, options) {
  var name = getFieldValue(b, fieldName);
  var {
    type,
    required
  } = options || {};
  var column = resolveHeader(data, name, type);
  var warning;

  if (!column) {
    if (required && !name) warning = "missing column";else if (name) warning = name + " not found in dataset";
  }

  return {
    column,
    warning
  };
}
function resolveHeader(data, name, type) {
  if (!data || !name) return undefined;
  var {
    headers
  } = (0,tidy/* tidyHeaders */.P2)(data, type);
  return headers.indexOf(name) > -1 ? name : undefined;
}
// EXTERNAL MODULE: ./src/components/blockly/fields/DataColumnChooserField.ts
var DataColumnChooserField = __webpack_require__(44393);
// EXTERNAL MODULE: ./src/components/blockly/toolbox.ts
var toolbox = __webpack_require__(16582);
// EXTERNAL MODULE: ./src/components/hooks/useWindowEvent.ts
var useWindowEvent = __webpack_require__(72144);
// EXTERNAL MODULE: ./node_modules/@tidyjs/tidy/dist/es/index.js + 23 modules
var es = __webpack_require__(86388);
// EXTERNAL MODULE: ./node_modules/gatsby-material-ui-components/lib/index.js
var lib = __webpack_require__(71481);
;// CONCATENATED MODULE: ./src/pages/editors/data-embed.tsx



var _excluded = ["blockId", "workspace", "dataset"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Page() {
  var frame = (0,react.useRef)();
  var dslidRef = (0,react.useRef)(undefined);
  var colour = "#f01010";
  var blocks = [{
    kind: "block",
    type: "iframe_random",
    message0: "iframe random",
    colour,
    args0: [],
    nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    dataPreviewField: true,
    template: "meta"
  }, {
    kind: "block",
    type: "iframe_sort",
    message0: "iframe arrange %1 %2",
    colour,
    args0: [{
      type: DataColumnChooserField/* default.KEY */.Z.KEY,
      name: "column"
    }, {
      type: "field_dropdown",
      name: "order",
      options: [["ascending", "ascending"], ["descending", "descending"]]
    }],
    previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    dataPreviewField: true,
    template: "meta"
  }];
  var category = [{
    kind: "category",
    name: "Custom",
    colour,
    contents: blocks.map(block => ({
      kind: "block",
      type: block.type
    }))
  }];
  var transforms = {
    iframe_random: function () {
      var _iframe_random = (0,asyncToGenerator/* default */.Z)(function* () {
        console.debug("hostdsl: random");
        var dataset = Array(10).fill(0).map((_, i) => ({
          x: i,
          y: Math.random()
        }));
        return {
          dataset
        };
      });

      function iframe_random() {
        return _iframe_random.apply(this, arguments);
      }

      return iframe_random;
    }(),
    iframe_sort: function () {
      var _iframe_sort = (0,asyncToGenerator/* default */.Z)(function* (b, dataset) {
        console.debug("hostdsl: sort");
        var {
          column,
          warning
        } = resolveFieldColumn(dataset, b, "column");
        var order = getFieldValue(b, "order");
        var descending = order === "descending";
        console.debug("hostdsl: sort", {
          b,
          dataset,
          column,
          order,
          descending,
          warning
        });
        if (!column) return Promise.resolve({
          dataset,
          warning
        });
        var res = (0,es/* tidy */.lu)(dataset, (0,es/* arrange */.Di)(descending ? (0,es/* desc */.C8)(column) : column));
        return {
          dataset: res,
          warning
        };
      });

      function iframe_sort(_x, _x2) {
        return _iframe_sort.apply(this, arguments);
      }

      return iframe_sort;
    }()
  }; // eslint-disable-next-line @typescript-eslint/ban-types

  var post = payload => {
    frame.current.contentWindow.postMessage(payload, "*");
  };

  var handleBlocks = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (data) {
      var msg = _objectSpread(_objectSpread({}, data), {}, {
        blocks,
        category
      });

      post(msg);
    });

    return function handleBlocks(_x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleTransform = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (data) {
      console.log("hostdsl: transform");

      var {
        blockId,
        workspace,
        dataset
      } = data,
          rest = (0,objectWithoutProperties/* default */.Z)(data, _excluded);

      var block = workspace.blocks.find(b => b.id === blockId);
      var transformer = transforms[block.type];
      var res = yield transformer === null || transformer === void 0 ? void 0 : transformer(block, dataset);
      post(_objectSpread(_objectSpread({}, rest), res || {}));
    });

    return function handleTransform(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,useWindowEvent/* default */.Z)("message", msg => {
    var {
      data
    } = msg;
    if (data.type !== "dsl") return;
    var {
      action,
      dslid
    } = data;

    switch (action) {
      case "mount":
        dslidRef.current = dslid;
        break;

      case "unmount":
        dslidRef.current = dslid;
        break;

      case "blocks":
        {
          handleBlocks(data);
          break;
        }

      case "transform":
        {
          handleTransform(data);
          break;
        }
    }
  }, false, []);

  var handleRefresh = () => {
    post({
      type: "dsl",
      action: "change",
      dslid: dslidRef.current
    });
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Data Editor + hosted blocks"), /*#__PURE__*/react.createElement("p", null, "The data editor below is an example of hosted editor with additional blocks injected by host (Custom category)."), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(lib.Button, {
    title: "Click this button to trigger a refresh",
    onClick: handleRefresh
  }, "Refresh")), /*#__PURE__*/react.createElement("iframe", {
    ref: frame,
    title: "data editor",
    src: "./data?embed=1",
    style: {
      border: "none",
      left: 0,
      top: 0,
      width: "100vh",
      height: "80vh"
    }
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-editors-data-embed-tsx-b7bcfdfed708068bd015.js.map