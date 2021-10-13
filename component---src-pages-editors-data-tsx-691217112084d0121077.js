"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1621],{

/***/ 73595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44393);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16582);
/* harmony import */ var _workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21190);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74602);
/* harmony import */ var _fields_tidy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var _fields_DataTableField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54741);
/* harmony import */ var _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16229);
/* harmony import */ var _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88533);


/* eslint-disable @typescript-eslint/ban-types */








var DATA_ARRANGE_BLOCK = "data_arrange";
var DATA_SELECT_BLOCK = "data_select";
var DATA_DROP_BLOCK = "data_drop";
var DATA_FILTER_COLUMNS_BLOCK = "data_filter_columns";
var DATA_FILTER_STRING_BLOCK = "data_filter_string";
var DATA_MUTATE_COLUMNS_BLOCK = "data_mutate_columns";
var DATA_MUTATE_NUMBER_BLOCK = "data_mutate_number";
var DATA_SLICE_BLOCK = "data_slice";
var DATA_SUMMARIZE_BLOCK = "data_summarize";
var DATA_SUMMARIZE_BY_GROUP_BLOCK = "data_summarize_by_group";
var DATA_COUNT_BLOCK = "data_count";
var DATA_BIN_BLOCK = "data_bin";
var DATA_CORRELATION_BLOCK = "data_correlation";
var DATA_LINEAR_REGRESSION_BLOCK = "data_linear_regression";
var DATA_COMMENT_BLOCK = "data_comment_block";
var [, operatorsColour, computeColour, statisticsColour] = (0,_palette__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
var calcOptions = ["mean", "median", "min", "max", "sum", "deviation", "variance"].map(n => [n, n]);
var dataDsl = {
  id: "dataScience",
  createBlocks: () => [{
    kind: "block",
    type: DATA_ARRANGE_BLOCK,
    message0: "arrange %1 %2",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }, {
      type: "field_dropdown",
      name: "order",
      options: [["ascending", "ascending"], ["descending", "descending"]]
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var order = b.getFieldValue("order");
      var descending = order === "descending";
      if (!column) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "arrange",
        column,
        descending,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_DROP_BLOCK,
    message0: "drop %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column2"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column3"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2, 3].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "drop",
        columns,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SELECT_BLOCK,
    message0: "select %1 %2 %3 %4",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column2"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column3"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column4"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2, 3, 4].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "select",
        columns,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_FILTER_COLUMNS_BLOCK,
    message0: "filter %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [[">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column2"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      var logic = b.getFieldValue("logic");
      if (columns.length !== 2) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "filter_columns",
        columns,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_FILTER_STRING_BLOCK,
    message0: "filter %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [[">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: "field_input",
      name: "rhs",
      spellcheck: false,
      text: "0"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var logic = b.getFieldValue("logic");
      var rhs = b.getFieldValue("rhs");
      if (!column) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "filter_string",
        column,
        logic,
        rhs,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_MUTATE_COLUMNS_BLOCK,
    message0: "compute column %1 as %2 %3 %4",
    colour: computeColour,
    args0: [{
      type: "field_input",
      name: "newcolumn",
      spellcheck: false
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "lhs",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [["+", "plus"], ["-", "minus"], ["*", "mult"], ["/", "div"], [">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "rhs",
      dataType: "number"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var newcolumn = b.getFieldValue("newcolumn");
      var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
        type: "number"
      });
      var rhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "rhs", {
        type: "number"
      });
      var logic = b.getFieldValue("logic");
      if (!newcolumn || !lhs || !rhs) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "mutate_columns",
        newcolumn,
        lhs,
        rhs,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_MUTATE_NUMBER_BLOCK,
    message0: "compute column %1 as %2 %3 %4",
    colour: computeColour,
    args0: [{
      type: "field_input",
      name: "newcolumn",
      spellcheck: false
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "lhs",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [["+", "plus"], ["-", "minus"], ["*", "mult"], ["/", "div"], [">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: "field_number",
      name: "rhs"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var newcolumn = b.getFieldValue("newcolumn");
      var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
        type: "number"
      });
      var rhs = b.getFieldValue("rhs");
      var logic = b.getFieldValue("logic");
      if (!newcolumn || !lhs) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "mutate_number",
        newcolumn,
        lhs,
        rhs,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SUMMARIZE_BLOCK,
    message0: "summarize %1 calculate %2",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "calc",
      options: calcOptions
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var columns = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumns */ .QZ)(data, b, "column", "number");
      var calc = b.getFieldValue("calc");
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "summarize",
        columns,
        calc,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SUMMARIZE_BY_GROUP_BLOCK,
    message0: "group %1 by %2 calculate %3",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "by"
    }, {
      type: "field_dropdown",
      name: "calc",
      options: calcOptions
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var by = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "by");
      var calc = b.getFieldValue("calc");
      if (!by) return Promise.resolve([]);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "summarize_by_group",
        column,
        by,
        calc,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SLICE_BLOCK,
    message0: "slice %1 rows from %2",
    colour: operatorsColour,
    args0: [{
      type: "field_number",
      name: "count",
      min: 1,
      precision: 1,
      value: 100
    }, {
      type: "field_dropdown",
      name: "operator",
      options: [["head", "head"], ["tail", "tail"], ["sample", "sample"]]
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var count = b.getFieldValue("count");
      var operator = b.getFieldValue("operator");
      return (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidySlice */ .HA)(data, {
        sliceHead: operator === "head" ? count : undefined,
        sliceTail: operator === "tail" ? count : undefined,
        sliceSample: operator === "sample" ? count : undefined
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_COUNT_BLOCK,
    message0: "count distinct %1",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      if (!column) return Promise.resolve([]);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "count",
        column,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_BIN_BLOCK,
    message0: "bin by %1",
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column",
      dataType: "number"
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: computeColour,
    template: "meta",
    dataPreviewField: true,
    transformData: function () {
      var _transformData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (b, data) {
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column", {
          type: "number"
        });
        if (!column) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
          type: "bin",
          column,
          data
        });
      });

      function transformData(_x, _x2) {
        return _transformData.apply(this, arguments);
      }

      return transformData;
    }()
  }, {
    kind: "block",
    type: DATA_CORRELATION_BLOCK,
    message0: "correlation of %1 %2 %3 %4 %5",
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "x",
      dataType: "number"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "y",
      dataType: "number"
    }, {
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__/* ["default"].KEY */ .Z.KEY,
      name: "preview",
      compare: true
    }, {
      type: "input_dummy"
    }, {
      type: _fields_DataTableField__WEBPACK_IMPORTED_MODULE_4__/* ["default"].KEY */ .Z.KEY,
      name: "table",
      transformed: true,
      small: true
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: statisticsColour,
    template: "meta",
    dataPreviewField: false,
    passthroughData: true,
    transformData: function () {
      var _transformData2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (b, data) {
        var column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
          type: "number"
        });
        var column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
          type: "number"
        });
        if (!column1 || !column2) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
          type: "correlation",
          column1,
          column2,
          data
        });
      });

      function transformData(_x3, _x4) {
        return _transformData2.apply(this, arguments);
      }

      return transformData;
    }()
  }, {
    kind: "block",
    type: DATA_LINEAR_REGRESSION_BLOCK,
    message0: "linear regression of x %1 y %2 %3 %4 %5",
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "x",
      dataType: "number"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "y",
      dataType: "number"
    }, {
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__/* ["default"].KEY */ .Z.KEY,
      name: "preview",
      compare: true
    }, {
      type: "input_dummy"
    }, {
      type: _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_6__/* ["default"].KEY */ .Z.KEY,
      name: "plot",
      linearRegression: true
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: statisticsColour,
    template: "meta",
    dataPreviewField: false,
    passthroughData: true,
    transformData: function () {
      var _transformData3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (b, data) {
        var column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
          type: "number"
        });
        var column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
          type: "number"
        });
        if (!column1 || !column2) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
          type: "linear_regression",
          column1,
          column2,
          data
        });
      });

      function transformData(_x5, _x6) {
        return _transformData3.apply(this, arguments);
      }

      return transformData;
    }()
  }, {
    kind: "block",
    type: DATA_COMMENT_BLOCK,
    message0: "comment %1 %2 %3",
    args0: [{
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__/* ["default"].KEY */ .Z.KEY,
      name: "preview"
    }, {
      type: "input_dummy"
    }, {
      type: "field_multilinetext",
      name: "text",
      text: "And then...",
      spellcheck: true
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: operatorsColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: false,
    transformData: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .identityTransformData */ .FW
  }],
  createCategory: () => [{
    kind: "category",
    name: "Organize",
    colour: operatorsColour,
    contents: [{
      kind: "block",
      type: DATA_COMMENT_BLOCK
    }, {
      kind: "block",
      type: DATA_ARRANGE_BLOCK
    }, {
      kind: "block",
      type: DATA_SELECT_BLOCK
    }, {
      kind: "block",
      type: DATA_DROP_BLOCK
    }, {
      kind: "block",
      type: DATA_FILTER_COLUMNS_BLOCK
    }, {
      kind: "block",
      type: DATA_FILTER_STRING_BLOCK
    }, {
      kind: "block",
      type: DATA_SLICE_BLOCK
    }]
  }, {
    kind: "category",
    name: "Compute",
    colour: computeColour,
    contents: [{
      kind: "block",
      type: DATA_MUTATE_COLUMNS_BLOCK
    }, {
      kind: "block",
      type: DATA_MUTATE_NUMBER_BLOCK
    }, {
      kind: "block",
      type: DATA_SUMMARIZE_BLOCK
    }, {
      kind: "block",
      type: DATA_SUMMARIZE_BY_GROUP_BLOCK
    }, {
      kind: "block",
      type: DATA_COUNT_BLOCK
    }, {
      kind: "block",
      type: DATA_BIN_BLOCK
    }]
  }, {
    kind: "category",
    name: "Statistics",
    colour: statisticsColour,
    contents: [{
      kind: "block",
      type: DATA_CORRELATION_BLOCK
    }, {
      kind: "block",
      type: DATA_LINEAR_REGRESSION_BLOCK
    }]
  }]
};
/* harmony default export */ __webpack_exports__["Z"] = (dataDsl);

/***/ }),

/***/ 45244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ useLocationSearchParamString; },
/* harmony export */   "w": function() { return /* binding */ useLocationSearchParamBoolean; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useLocationSearchParamString(key) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof window !== "undefined") {
      var url = new URL(window.location.href);
      return url.searchParams.get(key);
    }

    return undefined;
  }, [key]);
}
function useLocationSearchParamBoolean(key, defaultValue) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof window !== "undefined") {
      var url = new URL(window.location.href);
      var v = url.searchParams.get(key);
      console.log({
        key,
        url,
        v
      });

      if (v) {
        if (v === "1" || v === "true" || v === "yes") return true;else if (v === "0" || v === "false" || v === "no") return false;else return defaultValue;
      } // empty value means true


      if (url.searchParams.has(key)) return true;
      return defaultValue;
    }

    return undefined;
  }, [key, defaultValue]);
}

/***/ }),

/***/ 9679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 17 modules
var BlockContext = __webpack_require__(84935);
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 5 modules
var BlockEditor = __webpack_require__(39067);
// EXTERNAL MODULE: ./src/components/fs/FileTabs.tsx + 3 modules
var FileTabs = __webpack_require__(45430);
// EXTERNAL MODULE: ./src/components/blockly/dsl/datadsl.ts
var datadsl = __webpack_require__(73595);
// EXTERNAL MODULE: ./src/components/blockly/dsl/chartdsl.ts
var chartdsl = __webpack_require__(57611);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
// EXTERNAL MODULE: ./src/components/blockly/toolbox.ts
var toolbox = __webpack_require__(16582);
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(48202);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/iframeclient.ts
var iframeclient = __webpack_require__(9809);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
// EXTERNAL MODULE: ./src/components/blockly/WorkspaceContext.tsx
var WorkspaceContext = __webpack_require__(89801);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/iframedsl.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var IFrameDomainSpecificLanguage = /*#__PURE__*/function () {
  function IFrameDomainSpecificLanguage(id, targetOrigin) {
    this.dslid = (0,random/* randomDeviceId */.b_)();
    this.blocks = [];
    this.category = [];
    this.pendings = {};
    this.id = id;
    this.targetOrigin = targetOrigin;
    this.handleMessage = this.handleMessage.bind(this);
  } // eslint-disable-next-line @typescript-eslint/ban-types


  var _proto = IFrameDomainSpecificLanguage.prototype;

  _proto.post = function post(action, extras) {
    var payload = _objectSpread({
      id: Math.random() + "",
      type: "dsl",
      dslid: this.dslid,
      action
    }, extras || {});

    window.parent.postMessage(payload, this.targetOrigin);
    return payload;
  };

  _proto.mount = function mount(workspace) {
    this._workspace = workspace;
    window.addEventListener("message", this.handleMessage, false);
    this.post("mount");
    return () => {
      this.post("unmount");
      this._workspace = undefined;
      window.removeEventListener("message", this.handleMessage);
    };
  };

  _proto.handleMessage = function handleMessage(msg) {
    var {
      data
    } = msg;

    if (data.type === "dsl" && data.dslid === this.dslid) {
      var {
        id: _id,
        action
      } = data; // check for pending request

      var pending = _id !== undefined && this.pendings[_id];

      if (pending) {
        delete this.pendings[_id];
        pending(data);
      } // trigger recomputation


      switch (action) {
        case "change":
          {
            //console.log(`iframedsl: change requested`)
            this._workspace.getTopBlocks(false).filter(b => {
              var _resolveBlockDefiniti;

              return ((_resolveBlockDefiniti = (0,toolbox/* resolveBlockDefinition */.Pq)(b.type)) === null || _resolveBlockDefiniti === void 0 ? void 0 : _resolveBlockDefiniti.dsl) === this.id;
            }).forEach(b => {
              //console.log(`change ${b.id}`)
              var {
                jacdacServices
              } = b;
              jacdacServices.emit(constants/* CHANGE */.Ver);
            });

            break;
          }

        case "workspace":
          {
            break;
          }
      }
    }
  };

  _proto.createTransformData = function createTransformData() {
    return (blockWithServices, dataset) => new Promise(resolve => {
      var {
        id
      } = this.post("transform", {
        blockId: blockWithServices.id,
        dataset
      });
      setTimeout(() => {
        if (this.pendings[id]) {
          delete this.pendings[id];
          console.warn("iframedsl: transform timeouted");
          resolve(undefined);
        }
      }, 10000);

      this.pendings[id] = data => {
        var {
          dataset,
          warning
        } = data;
        if (warning) (0,WorkspaceContext/* setBlockDataWarning */.Vm)(blockWithServices, warning);
        resolve(dataset);
      };
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ;

  _proto.createBlocks = function createBlocks(options) {
    return new Promise(resolve => {
      var {
        id
      } = this.post("blocks");
      setTimeout(() => {
        if (this.pendings[id]) {
          delete this.pendings[id];
          console.warn("iframedsl " + this.id + ": no blocks returned, giving up");
          resolve(this.blocks);
        }
      }, 3000);

      this.pendings[id] = data => {
        var _this$blocks, _this$category;

        var bdata = data;
        this.blocks = bdata.blocks;
        this.category = bdata.category;
        console.debug("iframedsl " + this.id + ": loaded " + ((_this$blocks = this.blocks) === null || _this$blocks === void 0 ? void 0 : _this$blocks.length) + " blocks, " + ((_this$category = this.category) === null || _this$category === void 0 ? void 0 : _this$category.length) + " categories");
        var transformData = this.createTransformData();
        this.blocks.forEach(block => block.transformData = transformData);
        resolve(this.blocks);
      };
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ;

  _proto.createCategory = function createCategory(options) {
    return this.category;
  };

  _proto.visitWorkspaceJSON = function visitWorkspaceJSON(workspace, workspaceXml, workspaceJSON) {
    // TODO store editor id
    this.post("workspace", {
      source: workspaceXml,
      workspace: workspaceJSON
    });
  };

  return IFrameDomainSpecificLanguage;
}();
/**
 * Creates an iframe DSL if applicable
 * @param targetOrigin
 * @returns
 */


function createIFrameDSL(id, targetOrigin) {
  if (targetOrigin === void 0) {
    targetOrigin = "*";
  }

  return (0,iframeclient/* inIFrame */.H)() && new IFrameDomainSpecificLanguage(id, targetOrigin);
}
// EXTERNAL MODULE: ./src/components/hooks/useLocationSearchParam.ts
var useLocationSearchParam = __webpack_require__(45244);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
// EXTERNAL MODULE: ./src/components/blockly/fields/BuiltinDataSetField.tsx
var BuiltinDataSetField = __webpack_require__(69223);
// EXTERNAL MODULE: ./src/components/blockly/fields/FileSaveField.ts
var FileSaveField = __webpack_require__(4383);
// EXTERNAL MODULE: ./src/components/blockly/dsl/workers/csv.proxy.ts
var csv_proxy = __webpack_require__(53480);
// EXTERNAL MODULE: ./src/components/blockly/fields/FileOpenField.ts
var FileOpenField = __webpack_require__(39311);
// EXTERNAL MODULE: ./src/components/blockly/dsl/palette.ts
var palette = __webpack_require__(74602);
// EXTERNAL MODULE: ./src/components/fs/fs.ts
var fs = __webpack_require__(31396);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/datasetdsl.ts


/* eslint-disable @typescript-eslint/ban-types */









var DATA_DATASET_BUILTIN_BLOCK = "data_dataset_builtin";
var DATA_ADD_DATASET_CALLBACK = "data_add_dataset_variable";
var DATA_LOAD_FILE_BLOCK = "data_load_file";
var DATA_SAVE_FILE_BLOCK = "data_save_file";
var [datasetColour] = (0,palette/* default */.Z)();
var dataSetDsl = {
  id: "dataSets",
  createBlocks: () => [{
    kind: "block",
    type: DATA_DATASET_BUILTIN_BLOCK,
    message0: "dataset %1",
    tooltip: "Loads a builtin dataset",
    args0: [{
      type: BuiltinDataSetField/* default.KEY */.Z.KEY,
      name: "dataset"
    }],
    inputsInline: false,
    nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    colour: datasetColour,
    template: "meta",
    dataPreviewField: true,
    transformData: toolbox/* identityTransformData */.FW
  }, {
    kind: "block",
    type: DATA_LOAD_FILE_BLOCK,
    message0: "load dataset from file %1",
    args0: [{
      type: FileOpenField/* default.KEY */.Z.KEY,
      name: "file"
    }],
    nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    colour: datasetColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: true,
    transformData: toolbox/* identityTransformData */.FW
  }, {
    kind: "block",
    type: DATA_SAVE_FILE_BLOCK,
    message0: "save dataset to file %1",
    args0: [{
      type: FileSaveField/* default.KEY */.Z.KEY,
      name: "file"
    }],
    previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    colour: datasetColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: "after",
    transformData: function () {
      var _transformData = (0,asyncToGenerator/* default */.Z)(function* (block, data) {
        var file = block.getField("file");
        if (file !== null && file !== void 0 && file.fileHandle && data) yield (0,csv_proxy/* saveCSV */.Eg)(file.fileHandle, data);
        return data;
      });

      function transformData(_x, _x2) {
        return _transformData.apply(this, arguments);
      }

      return transformData;
    }()
  }],
  createCategory: () => [{
    kind: "category",
    name: "Data sets",
    colour: datasetColour,
    contents: [{
      kind: "block",
      type: DATA_DATASET_BUILTIN_BLOCK
    }, {
      kind: "block",
      type: DATA_LOAD_FILE_BLOCK
    }, {
      kind: "block",
      type: DATA_SAVE_FILE_BLOCK
    }, {
      kind: "button",
      text: "Import dataset",
      callbackKey: DATA_ADD_DATASET_CALLBACK,
      callback: workspace => {
        var services = (0,WorkspaceContext/* resolveWorkspaceServices */.O7)(workspace);
        var directory = services === null || services === void 0 ? void 0 : services.workingDirectory;
        if (!directory) (0,blockly.alert)("You need to open a directory to import a dataset.");else {
          (0,fs/* importCSVFilesIntoWorkspace */.U5)(directory.handle).then(() => directory.sync()).then(() => (0,blockly.alert)("Datasets imported!"));
        }
      }
    }]
  }]
};
/* harmony default export */ var datasetdsl = (dataSetDsl);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/datavardsl.ts
/* eslint-disable @typescript-eslint/ban-types */



var DATA_ADD_VARIABLE_CALLBACK = "data_add_variable";
var DATA_DATAVARIABLE_READ_BLOCK = "data_dataset_read";
var DATA_DATAVARIABLE_WRITE_BLOCK = "data_dataset_write";
var dataVariablesColour = "%{BKY_VARIABLES_HUE}";
var dataVarDsl = {
  id: "dataVariables",
  createBlocks: () => [{
    kind: "block",
    type: DATA_DATAVARIABLE_READ_BLOCK,
    message0: "dataset variable %1",
    args0: [{
      type: "field_variable",
      name: "data",
      variable: "data",
      variableTypes: [toolbox/* DATA_TABLE_TYPE */.zC],
      defaultType: toolbox/* DATA_TABLE_TYPE */.zC
    }],
    inputsInline: false,
    nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    colour: dataVariablesColour,
    template: "meta",
    dataPreviewField: "after",
    transformData: b => {
      var services = (0,WorkspaceContext/* resolveBlockServices */.Ys)(b);
      var data = services === null || services === void 0 ? void 0 : services.data;
      return Promise.resolve(data);
    }
  }, {
    kind: "block",
    type: DATA_DATAVARIABLE_WRITE_BLOCK,
    message0: "store in dataset variable %1",
    args0: [{
      type: "field_variable",
      name: "data",
      variable: "data",
      variableTypes: [toolbox/* DATA_TABLE_TYPE */.zC],
      defaultType: toolbox/* DATA_TABLE_TYPE */.zC
    }],
    inputsInline: false,
    previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
    colour: dataVariablesColour,
    template: "meta",
    dataPreviewField: "after",
    transformData: (b, data) => {
      // grab the variable from the block
      var variable = b.getFieldValue("data");
      if (!variable) return Promise.resolve(undefined);
      var readBlocks = b.workspace.getBlocksByType(DATA_DATAVARIABLE_READ_BLOCK, false);
      var readServices = readBlocks.filter(b => b.isEnabled()).filter(b => b.getFieldValue("data") === variable).map(b => b.jacdacServices).filter(services => !!services);
      readServices.forEach(services => services.data = data);
      return Promise.resolve(data);
    }
  }],
  createCategory: () => [{
    kind: "category",
    name: "Data variables",
    colour: dataVariablesColour,
    contents: [{
      kind: "button",
      text: "Add dataset variable",
      callbackKey: DATA_ADD_VARIABLE_CALLBACK,
      callback: workspace => blockly.Variables.createVariableButtonHandler(workspace, null, toolbox/* DATA_TABLE_TYPE */.zC)
    }, {
      kind: "block",
      type: DATA_DATAVARIABLE_READ_BLOCK
    }, {
      kind: "block",
      type: DATA_DATAVARIABLE_WRITE_BLOCK
    }]
  }],
  createWorkspaceChangeListener: () => event => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var {
      type,
      blockId
    } = event;
    var isBlockChange = type === blockly.Events.BLOCK_CHANGE || type === blockly.Events.BLOCK_MOVE;

    if (isBlockChange || type === blockly.Events.FINISHED_LOADING) {
      var workspace = event.getEventWorkspace_();

      if (isBlockChange) {
        var block = workspace.getBlockById(blockId);
        if ((block === null || block === void 0 ? void 0 : block.type) !== DATA_DATAVARIABLE_WRITE_BLOCK) return; // nothing so see here
      } // collect set variables blocks,
      // and make sure only 1 of them is enabled


      var setvars = workspace.getBlocksByType(DATA_DATAVARIABLE_WRITE_BLOCK, true).filter(b => b.isEnabled()); // mark and sweep variables, leaving one 1 enabled per kind

      var marked = {};

      while (setvars.length) {
        var _block = setvars.shift();

        var variable = _block.getField("data").getVariable();

        if (variable) {
          var name = variable.name;

          if (marked[name]) {
            if (_block.isEnabled()) {
              _block.setEnabled(false);

              _block.unplug(true);
            }
          } else marked[name] = true;
        }
      }
    }
  }
};
/* harmony default export */ var datavardsl = (dataVarDsl);
function resolveUsedDataVariables(block) {
  var {
    type
  } = block;

  if (type === DATA_DATAVARIABLE_READ_BLOCK) {
    var field = block.getField("data");
    var variable = field.getVariable();
    if (variable) return {
      reads: [variable.name]
    };
  } else if (type === DATA_DATAVARIABLE_WRITE_BLOCK) {
    var _field = block.getField("data");

    var _variable = _field.getVariable();

    if (_variable) return {
      write: _variable.name
    };
  }

  return {};
}
;// CONCATENATED MODULE: ./src/components/data-science/DSBlockEditor.tsx
















var DS_EDITOR_ID = "ds";
var DS_SOURCE_STORAGE_KEY = "tools:dseditor";
var DS_NEW_FILE_CONTENT = JSON.stringify({
  editor: DS_EDITOR_ID,
  xml: ""
});

function DSEditorWithContext() {
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, !!fileSystem && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FileTabs/* default */.Z, {
    newFileName: toolbox/* WORKSPACE_FILENAME */.cR,
    newFileContent: DS_NEW_FILE_CONTENT,
    hideFiles: true
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, {
    editorId: DS_EDITOR_ID
  })), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null));
}

function DSBlockEditor() {
  var dataSet = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("dataset", true);
  var dataVar = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("datavar", true);
  var dsls = (0,react.useMemo)(() => {
    return [dataSet && datasetdsl, datadsl/* default */.Z, dataVar && datavardsl, chartdsl/* default */.Z, fieldsdsl/* default */.Z, createIFrameDSL("host", "*")].filter(dsl => !!dsl);
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: DS_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(DSEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/editors/data.tsx


function Page() {
  return /*#__PURE__*/react.createElement(DSBlockEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-editors-data-tsx-691217112084d0121077.js.map