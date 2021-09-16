"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1198],{

/***/ 61198:
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
    "id": "user-guide",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#user-guide",
    "aria-label": "user guide permalink",
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
  }))), "User guide"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "mixing-simulator-and-physical-modules",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#mixing-simulator-and-physical-modules",
    "aria-label": "mixing simulator and physical modules permalink",
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
  }))), "Mixing simulator and physical modules"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "You can use a mix of simulators or physical services to work on your code."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "In this example, we remove the button simulator and connect a physical keyboard cap module which implements the button service.\nAutomatically, the Micro:bit simulator connects to the physical button and uses it in the code."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "p",
    "src": "/jacdac-docs/static/hardwareheartbeat-2f9ac6f9dffeaeb328bfc197cdef4eee.gif",
    "alt": "Hardware button show large and small heart when pressed"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "only-one-brain",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#only-one-brain",
    "aria-label": "only one brain permalink",
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
  }))), "\"Only one brain\""), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "To avoid having the micro:bit simulator ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong", {
    parentName: "p"
  }, "and"), " the physical micro:bit running code ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong", {
    parentName: "p"
  }, "at the same time"), ",\nJacdac automatically puts one of the two micro:bit in a ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong", {
    parentName: "p"
  }, "proxy mode"), " when restarting the simulator or downloading code into the physical device.\nIn proxy mode, the Jacdac messages are transmitted by the MakeCode code is not executed"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "in proxy mode, the micro:bit renders a proxy icon.")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "p",
    "className": "gatsby-resp-image-wrapper",
    "style": {
      "position": "relative",
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "268px"
    }
  }, "\n      ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "span",
    "className": "gatsby-resp-image-background-image",
    "style": {
      "paddingBottom": "82%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEN0lEQVQ4y2WS/28TZRzHj8lWete758vd9dZit7bXa7exsXZdYU03WbaZJWZkQDe2wXAQCI0wQTYQdAmTwQ9qaFCnDNBABFziFyAgJGr8QvySuASiif5s419h5Np7m+v8xfjD+4cnzyev5/X5PB+hkhstOV07gO5xzEU34mwsicfJZ5E11qNdr0eNh6DOQ1FbR+EVKSglIOT/oZQiGAyeEZxsvoTuMZyLpWxBFst9gcZyVPOXa4iv7FVoeXhALh+eFKvpSillycfKnLEy+2/+Zoy50AsCusdKC7Ek1ii+isqYI1EChVIwwhAwKK4seDA5LOHkQS/mp9eh1sMQqGdgjFetKKMOZ8zmLpCx88LhcEvJQxRwxiruK+6Fyhg0lUNROHJpgslhGRNDPjRbDIQw6LoLqxqBMeaIlNjeVUZR8BClpHIOlfMq0I1rKBECmRLUeilqPG4Y6iQKwihUVavWMcogM+p0GEE7Vx/COqIUBUZpSZIkiKJYIYoCkSjoCjTgaCKNbaEE9sZasd9qw7aGOGabO5ExQvAxWu3EzVpJdAbVoJ1kOupcYL1hlAb7+5EfHq40WZZbgJ5AGK9aGYw93YRCeCMORdoxuj6BuXgGWX8DJNeSc/hkGV2dnc5IPm93ZjJQZLko5HK50vO7dmFk+/ZKf28vhLpa9IVMnG3LYU+kFUfiHZhp6sTuxhYU25/BlkAYEqfQuApRkjA+MuJs27rV3j+1F2bMLAqqqpb6+/swns9X4qaJOp+ELqMBL4aTGA5YmAy1YCq0AVsDMQyFLDRr9VDcdv813JxOOxM7d9qZVModW1EQiVIaNRrRSnhlnSy7g8VgKIa3U70omO14pWUz5lu7ULCSEHwiGGfQtdVPcWfoFUWHEGK7DyiKUhQ0xktZPYQg1yqUMRBK4VdUNKsBRLgflmogSg00Mr1qpXJ3XThkha5uhCI71298ZBeLFyAIQlFgjJUaoyr8xuraqCpDIqaD+1VQlYFwjmhUR3C9Ck1Tq5DGkB9meNVS8vmc03Mv2cePFSCseaooRBq0P1ItBlIbjMqatTKsqO7EwppjRTSnZq0Cv87RlvA78YjueLwKJB+BFdGdjc2Go2msahqPKE/MBtmtPS+8MdP054l9Jt6cbbL35yP2wnSifOpADGemE+V9O8L2XCFunzsSx+kXLKcwFrWnd5v2/KG4c+qAibmCZc9Mxeyje0z72JSJ1w7H3xIefZz9/eflTVhZzuD+e+346koHfruT/eubDzpwb7EdD6924JdPNz95eC1dPT+4mMS3V9O4u5i0f7yexheXkrg832LffL0NP93Mzgl3lwY2/HpvfNP3N57bc3ux+9TnF/sPrtyaaL2/1Fe4tdhz/MHl3pmVT0Y3fX1tKP/ZOz0n7rzb8/J3Hw5tf3x7Ivvl+72z9y9tOfnD8ujAo9uj3UsLg/wfcAnmh1xc+2MAAAAASUVORK5CYII=')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "Proxy icon on micro:bit screen",
    "title": "Proxy icon on micro:bit screen",
    "src": "/jacdac-docs/static/83e8b18ca65ed2b6f272244fd34f769a/484ae/proxyscreen.png",
    "srcSet": ["/jacdac-docs/static/83e8b18ca65ed2b6f272244fd34f769a/772e8/proxyscreen.png 200w", "/jacdac-docs/static/83e8b18ca65ed2b6f272244fd34f769a/484ae/proxyscreen.png 268w"],
    "sizes": "(max-width: 268px) 100vw, 268px",
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
  }), "\n    ")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "when a physical micro:bit restarts, the simulator micro:bit enters proxy mode."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "when the simulator micro:bit restarts, the physical micro:bit enters proxy mode."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul"
  }, "in proxy mode, the physical micro:bit still transmits the Jacdac packets, so you can see physical services, but does not execute MakeCode code.")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "p",
    "src": "/jacdac-docs/static/onebrain-5bc7a4139a15944dfaf30476370864e9.gif",
    "alt": "Switching proxy mode between simulator and hardware micro:bit"
  })));
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
//# sourceMappingURL=component---src-pages-clients-makecode-user-guide-mdx-6e00c6c31adae7750a75.js.map