"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[259],{

/***/ 45944:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69223);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16582);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89801);
/* harmony import */ var _fields_FileSaveField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4383);
/* harmony import */ var _workers_csv_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53480);
/* harmony import */ var _fields_FileOpenField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39311);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74602);
/* harmony import */ var _fs_fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31396);


/* eslint-disable @typescript-eslint/ban-types */









var DATA_DATASET_BUILTIN_BLOCK = "data_dataset_builtin";
var DATA_ADD_DATASET_CALLBACK = "data_add_dataset_variable";
var DATA_LOAD_FILE_BLOCK = "data_load_file";
var DATA_SAVE_FILE_BLOCK = "data_save_file";
var [datasetColour] = (0,_palette__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
var dataSetDsl = {
  id: "dataSets",
  createBlocks: () => [{
    kind: "block",
    type: DATA_DATASET_BUILTIN_BLOCK,
    message0: "dataset %1",
    tooltip: "Loads a builtin dataset",
    args0: [{
      type: _fields_BuiltinDataSetField__WEBPACK_IMPORTED_MODULE_1__/* ["default"].KEY */ .Z.KEY,
      name: "dataset"
    }],
    inputsInline: false,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: datasetColour,
    template: "meta",
    dataPreviewField: true,
    transformData: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .identityTransformData */ .FW
  }, {
    kind: "block",
    type: DATA_LOAD_FILE_BLOCK,
    message0: "load dataset from file %1",
    args0: [{
      type: _fields_FileOpenField__WEBPACK_IMPORTED_MODULE_6__/* ["default"].KEY */ .Z.KEY,
      name: "file"
    }],
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: datasetColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: true,
    transformData: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .identityTransformData */ .FW
  }, {
    kind: "block",
    type: DATA_SAVE_FILE_BLOCK,
    message0: "save dataset to file %1",
    args0: [{
      type: _fields_FileSaveField__WEBPACK_IMPORTED_MODULE_4__/* ["default"].KEY */ .Z.KEY,
      name: "file"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_2__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: datasetColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: "after",
    transformData: function () {
      var _transformData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function* (block, data) {
        var file = block.getField("file");
        if (file !== null && file !== void 0 && file.fileHandle && data) yield (0,_workers_csv_proxy__WEBPACK_IMPORTED_MODULE_5__/* .saveCSV */ .Eg)(file.fileHandle, data);
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
        var services = (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__/* .resolveWorkspaceServices */ .O7)(workspace);
        var directory = services === null || services === void 0 ? void 0 : services.workingDirectory;
        if (!directory) (0,blockly__WEBPACK_IMPORTED_MODULE_0__.alert)("You need to open a directory to import a dataset.");else {
          (0,_fs_fs__WEBPACK_IMPORTED_MODULE_7__/* .importCSVFilesIntoWorkspace */ .U5)(directory.handle).then(() => directory.sync()).then(() => (0,blockly__WEBPACK_IMPORTED_MODULE_0__.alert)("Datasets imported!"));
        }
      }
    }]
  }]
};
/* harmony default export */ __webpack_exports__["Z"] = (dataSetDsl);

/***/ }),

/***/ 33757:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export resolveUsedDataVariables */
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16582);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89801);
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
      variableTypes: [_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_TABLE_TYPE */ .zC],
      defaultType: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_TABLE_TYPE */ .zC
    }],
    inputsInline: false,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: dataVariablesColour,
    template: "meta",
    dataPreviewField: "after",
    transformData: b => {
      var services = (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_2__/* .resolveBlockServices */ .Ys)(b);
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
      variableTypes: [_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_TABLE_TYPE */ .zC],
      defaultType: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_TABLE_TYPE */ .zC
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
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
      callback: workspace => blockly__WEBPACK_IMPORTED_MODULE_0__.Variables.createVariableButtonHandler(workspace, null, _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_TABLE_TYPE */ .zC)
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
    var isBlockChange = type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.BLOCK_CHANGE || type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.BLOCK_MOVE;

    if (isBlockChange || type === blockly__WEBPACK_IMPORTED_MODULE_0__.Events.FINISHED_LOADING) {
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
/* harmony default export */ __webpack_exports__["Z"] = (dataVarDsl);
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

/***/ }),

/***/ 31421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SensorsBlockDomainSpecificLanguage */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94578);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16582);
/* harmony import */ var _fields_TwinField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35361);
/* harmony import */ var _servicesbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21910);
/* harmony import */ var _workers_data_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21190);
/* harmony import */ var _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44393);
/* harmony import */ var _fields_tidy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47554);








var RECORD_WINDOW_BLOCK = "jacdac_record_window";
var ROLLING_SUMMARY_BLOCK = "jacdac_rolling_summary";
var SensorsBlockDomainSpecificLanguage = /*#__PURE__*/function (_ServicesBaseDSL) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(SensorsBlockDomainSpecificLanguage, _ServicesBaseDSL);

  function SensorsBlockDomainSpecificLanguage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ServicesBaseDSL.call.apply(_ServicesBaseDSL, [this].concat(args)) || this;
    _this.id = "jacdacSensors";
    return _this;
  }

  var _proto = SensorsBlockDomainSpecificLanguage.prototype;

  _proto.createBlocks = function createBlocks(options) {
    var colour = _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .sensorsColour */ .cG;
    return [{
      kind: "block",
      type: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .SENSOR_BLOCK */ .pB,
      message0: "sensor %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "service",
        variable: "none",
        variableTypes: ["sensor"],
        defaultType: "sensor"
      }, {
        type: "input_dummy"
      }, {
        type: _fields_TwinField__WEBPACK_IMPORTED_MODULE_1__/* ["default"].KEY */ .Z.KEY,
        name: "twin"
      }],
      colour,
      inputsInline: false,
      tooltip: "Twin of the selected servioce",
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      helpUrl: "",
      template: "meta",
      transformData: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .identityTransformData */ .FW
    }, {
      kind: "block",
      type: RECORD_WINDOW_BLOCK,
      message0: "record last %1 s",
      args0: [{
        type: "field_number",
        name: "horizon",
        value: 10
      }],
      inputsInline: false,
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      colour,
      template: "meta",
      dataPreviewField: true,
      transformData: function () {
        var _transformData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function* (block, data, previousData) {
          var horizon = block.getFieldValue("horizon") || 10;
          return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            type: "record_window",
            data,
            previousData,
            horizon
          });
        });

        function transformData(_x, _x2, _x3) {
          return _transformData.apply(this, arguments);
        }

        return transformData;
      }()
    }, {
      kind: "block",
      type: ROLLING_SUMMARY_BLOCK,
      message0: "compute column %1 as rolling %2 of %3 with horizon %4",
      colour,
      args0: [{
        type: "field_input",
        name: "newcolumn",
        spellcheck: false
      }, {
        type: "field_dropdown",
        name: "calc",
        options: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .calcOptions */ .B8
      }, {
        type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_4__/* ["default"].KEY */ .Z.KEY,
        name: "column",
        dataType: "number"
      }, {
        type: "field_number",
        name: "horizon",
        min: 2,
        precision: 1
      }],
      previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
      dataPreviewField: true,
      transformData: (b, data) => {
        var newcolumn = b.getFieldValue("newcolumn");
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_5__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column", {
          type: "number"
        });
        var horizon = Math.max(2, b.getFieldValue("horizon"));
        var calc = b.getFieldValue("calc") || "mean";
        if (!newcolumn || !column) return Promise.resolve(data);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
          type: "rolling_summary",
          data,
          newcolumn,
          column,
          horizon,
          calc
        });
      },
      template: "meta"
    }];
  };

  _proto.createCategory = function createCategory(options) {
    return [{
      kind: "category",
      name: "Sensors",
      colour: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .sensorsColour */ .cG,
      contents: [{
        kind: "block",
        type: _toolbox__WEBPACK_IMPORTED_MODULE_0__/* .SENSOR_BLOCK */ .pB
      }, {
        kind: "sep"
      }, {
        kind: "block",
        type: RECORD_WINDOW_BLOCK
      }, {
        kind: "block",
        type: ROLLING_SUMMARY_BLOCK
      }]
    }];
  };

  return SensorsBlockDomainSpecificLanguage;
}(_servicesbase__WEBPACK_IMPORTED_MODULE_2__/* .ServicesBaseDSL */ .Hy);
var sensorsDsl = new SensorsBlockDomainSpecificLanguage();
/* harmony default export */ __webpack_exports__["Z"] = (sensorsDsl);

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

/***/ 88460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ChipList; }
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98348);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


var PREFIX = "ChipList";
var classes = {
  root: PREFIX + "-root"
};
var Root = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)("span")(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["&." + classes.root]: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    }
  };
});
function ChipList(props) {
  var {
    children
  } = props;
  if (!children) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, {
    className: classes.root
  }, children);
}

/***/ }),

/***/ 8968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/base/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(5061);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 16 modules
var BlockContext = __webpack_require__(26212);
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
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 1 modules
var FileSystemContext = __webpack_require__(37258);
// EXTERNAL MODULE: ./src/components/blockly/dsl/iframedsl.ts
var iframedsl = __webpack_require__(98474);
// EXTERNAL MODULE: ./src/components/hooks/useLocationSearchParam.ts
var useLocationSearchParam = __webpack_require__(45244);
// EXTERNAL MODULE: ./src/components/blockly/dsl/datavardsl.ts
var datavardsl = __webpack_require__(33757);
// EXTERNAL MODULE: ./src/components/blockly/dsl/sensorsdsl.ts
var sensorsdsl = __webpack_require__(31421);
// EXTERNAL MODULE: ./src/components/blockly/dsl/datasetdsl.ts
var datasetdsl = __webpack_require__(45944);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 5 modules
var DeviceAvatar = __webpack_require__(64178);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./src/components/blockly/dsl/servicesbase.ts
var servicesbase = __webpack_require__(21910);
;// CONCATENATED MODULE: ./src/components/blockly/ServiceChip.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars





function ServiceChip(props) {
  var {
    workspace
  } = (0,react.useContext)(BlockContext/* default */.C);
  var {
    service
  } = props;
  var name = (0,servicesbase/* toServiceName */.ZS)(service);

  var handleClick = () => {
    // add twin block
    if (!workspace) return;
    var id = service.id; // try to find existing twin block

    var twinBlock = workspace.getTopBlocks(false).find(b => {
      var _b$inputList$0$fieldR, _b$inputList$0$fieldR2;

      return b.type === toolbox/* SENSOR_BLOCK */.pB && ((_b$inputList$0$fieldR = b.inputList[0].fieldRow.find(f => f.name === "service")) === null || _b$inputList$0$fieldR === void 0 ? void 0 : (_b$inputList$0$fieldR2 = _b$inputList$0$fieldR.getVariable()) === null || _b$inputList$0$fieldR2 === void 0 ? void 0 : _b$inputList$0$fieldR2.getId()) === id;
    });

    if (!twinBlock) {
      twinBlock = workspace.newBlock(toolbox/* SENSOR_BLOCK */.pB);
      var type = (0,servicesbase/* toServiceType */.Fd)(service);
      var variable = workspace.getVariable(name, type);
      if (!variable) variable = workspace.getVariable(name, type);
      console.debug("new twin", {
        twinBlock,
        variable
      });
      var field = twinBlock.inputList[0].fieldRow.find(f => f.name === "service");
      field.setValue(variable.getId());
      var m = workspace.getMetrics();
      twinBlock.moveBy(m.viewWidth / 2, m.viewHeight / 3);
      twinBlock.initSvg();
      twinBlock.render(false);
    }

    workspace.centerOnBlock(twinBlock.id);
  };

  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: name,
    variant: "outlined",
    avatar: /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: service.device,
      size: "small"
    }),
    onClick: handleClick
  });
}
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(88460);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(63015);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/blockly/ServiceChips.tsx







function ServiceChips() {
  var services = (0,useServices/* default */.Z)({
    sensor: true
  });
  var {
    toggleShowDeviceHostsDialog
  } = (0,react.useContext)(AppContext/* default */.ZP);

  var handleClick = () => toggleShowDeviceHostsDialog({
    sensor: true
  });

  return /*#__PURE__*/react.createElement(ChipList/* default */.Z, null, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "start simulator",
    onClick: handleClick,
    icon: /*#__PURE__*/react.createElement(Add/* default */.Z, null)
  }), services.map(services => /*#__PURE__*/react.createElement(ServiceChip, {
    key: services.id,
    service: services
  })));
}
;// CONCATENATED MODULE: ./src/components/blockly/SensorsBlockEditor.tsx


















var SENSORS_EDITOR_ID = "sensors";
var SENSORS_SOURCE_STORAGE_KEY = "tools:sensoreditor";
var SENSORS_NEW_FILE_CONTENT = JSON.stringify({
  editor: SENSORS_EDITOR_ID,
  xml: ""
});

function SensorsEditorWithContext() {
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  return /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ServiceChips, null)), !!fileSystem && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FileTabs/* default */.Z, {
    newFileName: toolbox/* WORKSPACE_FILENAME */.cR,
    newFileContent: SENSORS_NEW_FILE_CONTENT,
    hideFiles: true
  })), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, {
    editorId: SENSORS_EDITOR_ID
  })), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null));
}

function DSBlockEditor() {
  var sensors = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("sensors", true);
  var dataSet = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("dataset", true);
  var dataVar = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("datavar", true);
  var chart = (0,useLocationSearchParam/* useLocationSearchParamBoolean */.w)("chart", true);
  var dsls = (0,react.useMemo)(() => {
    return [dataSet && datasetdsl/* default */.Z, sensors && sensorsdsl/* default */.Z, datadsl/* default */.Z, dataVar && datavardsl/* default */.Z, chart && chartdsl/* default */.Z, fieldsdsl/* default */.Z, (0,iframedsl/* createIFrameDSL */.g)("host", "*")].filter(dsl => !!dsl);
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: SENSORS_SOURCE_STORAGE_KEY,
    dsls: dsls
  }, /*#__PURE__*/react.createElement(SensorsEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/editors/sensors.tsx


function Page() {
  return /*#__PURE__*/react.createElement(DSBlockEditor, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-editors-sensors-tsx-bee9aac9b7dc0b95e579.js.map