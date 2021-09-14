"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2670],{

/***/ 82670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ P5JSCodeButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18574);


function P5JSCodeButton(props) {
  var {
    sketch
  } = props;
  var files = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ({
    "index.html": {
      content: "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js\"></script>\n        <script src=\"https://unpkg.com/jacdac-ts/dist/p5.jacdac.js\"></script>\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n        <meta charset=\"utf-8\" />\n    </head>\n    <body>\n    <script src=\"sketch.js\"></script>\n    </body>\n</html>\n"
    },
    "sketch.js": {
      content: "/* eslint-disable no-undef, no-unused-vars */\n\n" + sketch + "\n"
    },
    "style.css": {
      content: "html, body {\n    width:100%;\n    height:100%;\n    margin: 0;\n    padding: 0;\n}"
    }
  }), [sketch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    files: files
  });
}

/***/ })

}]);
//# sourceMappingURL=2670-93785459e276af9de770.js.map