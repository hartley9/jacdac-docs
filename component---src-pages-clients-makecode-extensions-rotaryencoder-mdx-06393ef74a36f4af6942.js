"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[396,797],{

/***/ 41426:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_frontmatter": function() { return /* binding */ _frontmatter; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64983);
/* harmony import */ var _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64425);

var _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */


var _frontmatter = {};
var layoutProps = {
  _frontmatter
};
var MDXLayout = _home_runner_work_jacdac_docs_jacdac_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
function MDXContent(_ref) {
  var {
    components
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1", {
    "id": "rotary-encoder",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#rotary-encoder",
    "aria-label": "rotary encoder permalink",
    "className": "anchor before"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "Rotary Encoder"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The rotary encoder extension reports the position of an incremental\nrotary encoder in number of clicks from the initial position (0),\nwhere clockwise motion increases the position and counter-clockwise\nmotion decreases the position.\nThe ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "position"), " method returns the current position."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The program below outputs the current position whenever it changes by one click:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"modules.rotaryEncoder1.onPositionChangedBy(1, () => {\\n    led.stopAnimation()\\n    basic.showNumber(modules.rotaryEncoder1.position())\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.rotaryEncoder1.onPositionChangedBy(1, () => {\\n    led.stopAnimation()\\n    basic.showNumber(modules.rotaryEncoder1.position())\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac-rotary-encoder=github:microsoft/pxt-jacdac/rotary-encoder#v0.7.36\"},\"type\":\"renderblocks\",\"id\":\"deef8aa762ddd500e9fcbd8fcee74991\"},\"url\":\"/images/makecode/deef8aa762ddd500e9fcbd8fcee74991.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1", {
    "id": "jm-rotary-control--button-v10",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#jm-rotary-control--button-v10",
    "aria-label": "jm rotary control  button v10 permalink",
    "className": "anchor before"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "JM Rotary Control + Button v1.0"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmrotarycontrolbuttonv10"
  }, "JM Rotary Control + Button v1.0"), " module\nis shown in the picture below (annotated with clockwise and counter-clockwise directions). Note that\nthe initial position is set 0 when the device starts or is reset, regardless of the physical position\nof the shaft of the rotary encoder:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "p",
    "className": "gatsby-resp-image-wrapper",
    "style": {
      "position": "relative",
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "345px"
    }
  }, "\n      ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "span",
    "className": "gatsby-resp-image-background-image",
    "style": {
      "paddingBottom": "112.5%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAABJ0AAASdAHeZh94AAAFc0lEQVQ4yxXU2U/aBwDA8d/j3va0x23dQ5NlydZ2y7rssGnSGFtbtVQBlRvEC1BAQfFA8ay3wrRYkPvmh7YVFOSyxVbXxtlRRJFxyCH14tCuzY6WxT/g8/J9+AK7hvqwtjIMUkJgfWy2LmIguVW4oKYsDiJDMmhUSzg01rxeajyysU6XWSk782ix4XSlPWWnRTQoIKKnRPTVIT0lqCPvqKqVItSkEJbXWdJxn80VdLCmmvM64f0CtE5bHTDRMw7G4SL91NWWstOiOgywq68NayoDmqqgEm+dQvB511YHv7k5WvFVHxvC50Jn+Od7aoz8fJv4llJRcWKp31+gnLraMo7GuIEAhLVEvwznV1b8Kcc+HLxVO0Eg81A5XehrvXUV91ug3M6cLlLNKLSBj+HzsMfG2oSJcvqkJeOgneGQCr8jQftkOO8M0jIEvdCEAYiFT/4wL78w2m0iueb+q+DGxX7mR1VQJQ978KgqYaw7cbEzTlpMjwWCGuyOFOWT4z2C8ke9hfldFI1J+9Rq9Az1GFgsLavlJYO2KJcMqcVqLiZhqt6bJ79xtZ846TEQB4TUOL8U6RXjNoXlyo5cYjc5FPM5SwqXKvBmi8nherw2MurL+fmxa1k2RdwfLToeKH4rxqefMuJ6PBBSoHckyE0JelOAELVcJQ1SDk2G1UuXnns9/77/L5v9kMhmg7chW2i0QFi335l3xIG8nURmnjH3QAIQVmN94nKvCL0xVSIfhcwZJ16KBXNNDNfaajabfff3P++y2Q3D/MroiFDK3NRgYrPklLU57aDG9BVAWIn2ieFeMWJlJM8MkiO7z50zAhUKMWvQZD+8f5/NfshmXYaFDe493ZJgXQSPG0nHzua0jRrTVQAhRZlXCHULy9d5+bwBiAK8G19ecJ77jDvKcVhnA551p2fDVXgzej2XJ2e6peUHXETSRE3aaFEtHgjKS73CYvf9Uje/eIp1pYZNSJ1E3DVoZe7V9o6GgX62lMOK/XTZZTJNjGEjU3eOaq+mlZVHdlpUjQH80tJtEcwrQrj5JYK2X0iD9N3N32xm5Xob/Vk/28i964DdfjLWNedcmh4sDWmQcTEuOU89ttRFNWggoED4pagtCcY9DVNycj6nwBC9NDs4JlYPVHRR+3pI1tmxbkHvtWby9HBZRIXYfVB37GxKLpLiOvxZbb8UtS3DvpwuBjlXLjSWAJgr9b0wWuedL6DXqe3QBxL4143wT8hI3RgyokFHQFLKxkgtUmJ6AhDS4nZkSJ8C5xHAtL23RseLNCOXf+iGnKcVM+8yIW3VX7Lgknsw5Qxa9ysipsdF58gpBzNpJsdBDBBQYX0SxLYC75kptY8XySZuPOTmXOiB/9iG2XCJyrsaPmWUy4Wwh2LokhC5N1u5Z6SmnU1JMymmQwEBFcErQmzJca/EZeuTtx+N3Rnm3DhHLfi2GUVkES42Ez6mlrB7i+eF+G0VJmEkJ4zUzHJz0kyK65FAQI3fkqJ9SoJHUvpKCN2cKV3r+wXadKOom9463IIcZH/fCnkxWXBgoh8sUg7N1MMFysljVspcm9AjgKAa55Nhd1SEbSnaJ0VsS5G/T+b10L/jScetay6FEWxtKfCqCEdWVnKJlrbSk+a6s5NYyGc4pMH7FTi/kuiToXbkmICa6J7MJbfljs8b9qJRy/pzXAc0qEanl1uTNlrG1pCyUN+stGes9fsgEojoiWFtZUBF9CswfjkmrKn03svrHioq6KseFnI6RD31g/DXBkJ6mZV2NmYcjLSl/q/VjlM79TVYDsRma3f1lWFtVVBJCCoxMbBqW1TiExY+4+Uvjdx0cQt31fBjCym9zDpxMjNORsZKe7vGObXXJ0DE/1e/PnRabC6JAAAAAElFTkSuQmCC')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "rotary encoder",
    "title": "rotary encoder",
    "src": "/jacdac-docs/static/9a7b76ba6c7dd98c583581376adaddac/e4d6b/rotaryencoder.png",
    "srcSet": ["/jacdac-docs/static/9a7b76ba6c7dd98c583581376adaddac/772e8/rotaryencoder.png 200w", "/jacdac-docs/static/9a7b76ba6c7dd98c583581376adaddac/e4d6b/rotaryencoder.png 345w"],
    "sizes": "(max-width: 345px) 100vw, 345px",
    "style": {
      "width": "100%",
      "height": "100%",
      "margin": "0",
      "verticalAlign": "middle",
      "position": "absolute",
      "top": "0",
      "left": "0"
    },
    "loading": "lazy",
    "decoding": "async"
  }), "\n    ")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "see-also",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#see-also",
    "aria-label": "see also permalink",
    "className": "anchor before"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("svg", {
    parentName: "a",
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("path", {
    parentName: "svg",
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), "See Also"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "li",
    "href": "/jacdac-docs/services/rotaryencoder/"
  }, "service specification"))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ 64425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
 // eslint-disable-next-line react/prop-types

var Page = _ref => {
  var {
    props,
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, props, children);
};

/* harmony default export */ __webpack_exports__["Z"] = (Page);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-rotaryencoder-mdx-06393ef74a36f4af6942.js.map