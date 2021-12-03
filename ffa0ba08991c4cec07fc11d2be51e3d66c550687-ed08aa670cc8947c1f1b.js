"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[85],{

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
var dataDsl = {
  id: "dataScience",
  createBlocks: () => [{
    kind: "block",
    type: DATA_ARRANGE_BLOCK,
    message0: "sort %1 %2",
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
      options: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .calcOptions */ .B8
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
      options: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .calcOptions */ .B8
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
    message0: "take %1 rows from %2",
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
    contents: [
    /*<BlockReference>{
        kind: "block",
        type: DATA_COMMENT_BLOCK,
    },*/
    {
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

/***/ 98474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": function() { return /* binding */ createIFrameDSL; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9809);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80303);
/* harmony import */ var _jsongenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97428);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16582);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89801);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var IFrameDomainSpecificLanguage = /*#__PURE__*/function () {
  function IFrameDomainSpecificLanguage(id, targetOrigin) {
    this.dslid = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_2__/* .randomDeviceId */ .b_)();
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

              return ((_resolveBlockDefiniti = (0,_toolbox__WEBPACK_IMPORTED_MODULE_4__/* .resolveBlockDefinition */ .Pq)(b.type)) === null || _resolveBlockDefiniti === void 0 ? void 0 : _resolveBlockDefiniti.dsl) === this.id;
            }).forEach(b => {
              //console.log(`change ${b.id}`)
              var {
                jacdacServices
              } = b;
              jacdacServices.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver);
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
      // TODO fix event ordering
      var workspace = (0,_jsongenerator__WEBPACK_IMPORTED_MODULE_3__/* .workspaceToJSON */ .v)(blockWithServices.workspace, [], // TODO pass dsls
      [blockWithServices]);
      var {
        id
      } = this.post("transform", {
        blockId: blockWithServices.id,
        workspace,
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
        if (warning) (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_5__/* .setBlockDataWarning */ .Vm)(blockWithServices, warning);
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

  _proto.onWorkspaceJSONChange = function onWorkspaceJSONChange(json) {
    this.post("workspace", {
      workspace: json
    });
  };

  _proto.onSave = function onSave(file) {
    this.post("save", file);
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

  return (0,_jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_6__/* .inIFrame */ .H)() && new IFrameDomainSpecificLanguage(id, targetOrigin);
}

/***/ })

}]);
//# sourceMappingURL=ffa0ba08991c4cec07fc11d2be51e3d66c550687-ed08aa670cc8947c1f1b.js.map