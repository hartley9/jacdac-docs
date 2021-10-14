"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1621],{

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

/***/ 90055:
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
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(48202);
// EXTERNAL MODULE: ./src/components/blockly/dsl/iframedsl.ts
var iframedsl = __webpack_require__(98474);
// EXTERNAL MODULE: ./src/components/hooks/useLocationSearchParam.ts
var useLocationSearchParam = __webpack_require__(45244);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/blockly/index.js
var blockly = __webpack_require__(74640);
// EXTERNAL MODULE: ./src/components/blockly/fields/BuiltinDataSetField.tsx
var BuiltinDataSetField = __webpack_require__(69223);
// EXTERNAL MODULE: ./src/components/blockly/WorkspaceContext.tsx
var WorkspaceContext = __webpack_require__(89801);
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
    return [dataSet && datasetdsl, datadsl/* default */.Z, dataVar && datavardsl, chartdsl/* default */.Z, fieldsdsl/* default */.Z, (0,iframedsl/* createIFrameDSL */.g)("host", "*")].filter(dsl => !!dsl);
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
//# sourceMappingURL=component---src-pages-editors-data-tsx-f763af53f7f0182b688b.js.map