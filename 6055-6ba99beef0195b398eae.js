"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6055],{

/***/ 86055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VanillaCodeButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18574);


function VanillaCodeButton(props) {
  var {
    title,
    source
  } = props;
  var {
    js = "",
    html = ""
  } = source;
  var files = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // find imports
    var i = js.indexOf("\n\n");
    var imports = js.slice(0, i);
    var code = js.slice(i + 2).trim();
    var indexJs = "\nimport \"milligram\";\nimport { createUSBBus, CONNECTION_STATE } from \"jacdac-ts\";\n" + imports + "\nconst connectEl = document.getElementById(\"connectbtn\");\nconst logEl = document.getElementById(\"log\")\nconst log = (msg) => {\n    console.log(msg)\n    logEl.innerText += msg + \"\\n\"\n}\n// create WebUSB bus\nconst bus = createUSBBus();\n// track connection state and update button\nbus.on(CONNECTION_STATE, () => { connectEl.innerText = bus.connected ? \"connected \uD83C\uDF89\" : \"connect\" })\n// connect must be triggered by a user interaction\nconnectEl.onclick = async () =>\n  bus.connected ? bus.disconnect() : bus.connect();\n\n" + code + "\n";
    var indexHtml = "\n<html>\n    <body>\n        <h1>Jacdac " + (title || "demo") + "</h1>\n        <div>\n        <button id=\"connectbtn\">connect</button>\n        </div>    \n\n" + html + "\n        <pre id=\"log\"></pre>\n\n    <footer>\n        <small>\n        Need to learn more about Jacdac?\n        <a target=\"_blank\" href=\"https://aka.ms/jacdac\">Read the docs</a>\n        or\n        <a\n            target=\"_blank\"\n            href=\"https://github.com/microsoft/jacdac/discussions\"\n            >start a discussion</a\n        >.\n        </small>\n    </footer>\n    <script src=\"./index.js\" />\n    </body>\n</html>    \n        ";
    return {
      "package.json": {
        content: {
          dependencies: {
            "jacdac-ts": "latest",
            milligram: "latest"
          }
        }
      },
      "index.js": {
        content: indexJs
      },
      "index.html": {
        content: indexHtml
      }
    };
  }, [title, source, js, html]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    files: files
  });
}

/***/ })

}]);
//# sourceMappingURL=6055-6ba99beef0195b398eae.js.map