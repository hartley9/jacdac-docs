"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1621],{

/***/ 72083:
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/iframeclient.ts
var iframeclient = __webpack_require__(9809);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
// EXTERNAL MODULE: ./src/components/blockly/jsongenerator.ts
var jsongenerator = __webpack_require__(97428);
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


      if (action === "change") {
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
      }
    }
  };

  _proto.createTransformData = function createTransformData() {
    return (blockWithServices, dataset) => new Promise(resolve => {
      var workspace = (0,jsongenerator/* workspaceToJSON */.v)(blockWithServices.workspace, [], // TODO pass dsls
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

  _proto.visitWorkspaceJSON = function visitWorkspaceJSON(workspace, workspaceJSON) {
    this.post("workspace", {
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
  var dsls = (0,react.useMemo)(() => {
    return [datadsl/* default */.Z, chartdsl/* default */.Z, fieldsdsl/* default */.Z, createIFrameDSL("host", "*")].filter(dsl => !!dsl);
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
//# sourceMappingURL=component---src-pages-editors-data-tsx-dda5b5ac53ac035bdec9.js.map