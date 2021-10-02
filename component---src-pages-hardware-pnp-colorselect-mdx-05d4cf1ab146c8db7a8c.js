"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2731],{

/***/ 15178:
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
    "id": "color-selector-module",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#color-selector-module",
    "aria-label": "color selector module permalink",
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
  }))), "Color Selector Module"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The following pictures show the power of the plug-and-play paradigm\nfor microcontrollers.  Our scenario is to allow the\nend-user to create a RGB color."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "For this scenario, we will use three ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmslider49v11"
  }, "JM Slider v1.1"), "\nmodules, which implement the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/services/potentiometer/"
  }, "potentiometer service"), ", to adjust\nthe R, G, and B values and\none ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmsinglergbled42v01"
  }, "JM Single RGB LED v0.1"), " module\nto display the resulting color."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Because Jacdac is a true bus, there are multiple ways to wire this composite module from\nthe atomic components. Our first version of the module uses a passive Jacdac hub as shown\nbelow:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "p",
    "className": "gatsby-resp-image-wrapper",
    "style": {
      "position": "relative",
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "800px"
    }
  }, "\n      ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "span",
    "className": "gatsby-resp-image-background-image",
    "style": {
      "paddingBottom": "84.5%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdNualrEahQP/8QAGhABAAIDAQAAAAAAAAAAAAAAAQACEBESIf/aAAgBAQABBQJ1VKzmeVRetMrn/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgICAwAAAAAAAAAAAAAAATEAEQIhEBIg/9oACAEBAAY/AtiLXDbEHXGhHXj/xAAeEAACAgICAwAAAAAAAAAAAAAAARExIUEQUWGRwf/aAAgBAQABPyG0HPoW8yXkRWizDsbHkRmW3TF8hFjfH//aAAwDAQACAAMAAAAQgwAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAIRABAAIBBAEFAAAAAAAAAAAAAQARMSFBUWEQcYGRobH/2gAIAQEAAT8QQBvBCh73UcoxscdjxAtQ4PNX2xw/sLEpHo6SjvWJtRZ3UPmYvSGXj//Z')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "wiring color selector with hub",
    "title": "wiring color selector with hub",
    "src": "/jacdac-docs/static/0503fdaf35a712386982828541870d3c/4b190/hub.jpg",
    "srcSet": ["/jacdac-docs/static/0503fdaf35a712386982828541870d3c/e07e9/hub.jpg 200w", "/jacdac-docs/static/0503fdaf35a712386982828541870d3c/066f9/hub.jpg 400w", "/jacdac-docs/static/0503fdaf35a712386982828541870d3c/4b190/hub.jpg 800w", "/jacdac-docs/static/0503fdaf35a712386982828541870d3c/e5166/hub.jpg 1200w", "/jacdac-docs/static/0503fdaf35a712386982828541870d3c/b17f8/hub.jpg 1600w", "/jacdac-docs/static/0503fdaf35a712386982828541870d3c/0234b/hub.jpg 3063w"],
    "sizes": "(max-width: 800px) 100vw, 800px",
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
  }), "\n    ")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "In the above network, the cable with the white end points provides the interface to the\nrest of the system (including the brain module, with the logic to compute the RGB color\nfrom the positions of the sliders, and set the RGB LED appropriately whenever the slider\npositions change).  So we have a total of five cables for this module. "), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "To make the above network into a module, we use some cardboard and masking tape,\nwith the hub taped on the backside:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "p",
    "className": "gatsby-resp-image-wrapper",
    "style": {
      "position": "relative",
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "800px"
    }
  }, "\n      ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "span",
    "className": "gatsby-resp-image-background-image",
    "style": {
      "paddingBottom": "140.5%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHalFGb1xCzM8PDoELP/8QAHhAAAgEEAwEAAAAAAAAAAAAAAQIAAwQRExASIjP/2gAIAQEAAQUCqsANspt3W4b0pEt/jjJ1RPKmJnj/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwEp/8QAGREBAAIDAAAAAAAAAAAAAAAAAQADEBEh/9oACAECAQE/AXeGsYcJ/8QAHRAAAgICAwEAAAAAAAAAAAAAABEBEAIhMkFRkf/aAAgBAQAGPwKH6ay+jMYqGdaOMUxua//EAB0QAAMAAgMBAQAAAAAAAAAAAAABESFBMVFxYaH/2gAIAQEAAT8hU7YfaCZLkEeZRD5mf0w37L2I+0i4xtKaas8koUnwTEONFI/lop//2gAMAwEAAgADAAAAEBzfcf/EABgRAQEAAwAAAAAAAAAAAAAAAAEAEBEh/9oACAEDAQE/EDWBk9v/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAgEBPxAt0cjzs0rDAv/EAB8QAQEAAQMFAQAAAAAAAAAAAAERACExQVFhgaHwkf/aAAgBAQABPxBhRMyjB5O8yQKdiFfJHzgDs8HXILQIE+dM52WIW/DGmICe8OlL5I6j79YVYg4Ab9s1Fa1rjEEwW5ydHBUek1h+Jirvn//Z')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "color selector on cardboard",
    "title": "color selector on cardboard",
    "src": "/jacdac-docs/static/b86ee29bdb077e22fae83bbd58ff1186/4b190/cardboard.jpg",
    "srcSet": ["/jacdac-docs/static/b86ee29bdb077e22fae83bbd58ff1186/e07e9/cardboard.jpg 200w", "/jacdac-docs/static/b86ee29bdb077e22fae83bbd58ff1186/066f9/cardboard.jpg 400w", "/jacdac-docs/static/b86ee29bdb077e22fae83bbd58ff1186/4b190/cardboard.jpg 800w", "/jacdac-docs/static/b86ee29bdb077e22fae83bbd58ff1186/e5166/cardboard.jpg 1200w", "/jacdac-docs/static/b86ee29bdb077e22fae83bbd58ff1186/b17f8/cardboard.jpg 1600w", "/jacdac-docs/static/b86ee29bdb077e22fae83bbd58ff1186/9e3cd/cardboard.jpg 2039w"],
    "sizes": "(max-width: 800px) 100vw, 800px",
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
  }), "\n    ")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Other wirings are possible, as shown in the linear arrangement below, which only\nrequires four cables:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "p",
    "className": "gatsby-resp-image-wrapper",
    "style": {
      "position": "relative",
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "800px"
    }
  }, "\n      ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
    parentName: "span",
    "className": "gatsby-resp-image-background-image",
    "style": {
      "paddingBottom": "143.49999999999997%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAdABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGrc7SoMAwvSQ8wT//EABsQAAICAwEAAAAAAAAAAAAAAAABAiEQESIx/9oACAEBAAEFAr3birSl1vFI0RfJZ4f/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAeEAABBAIDAQAAAAAAAAAAAAABAAIQEVFyITFBYf/aAAgBAQAGPwIAerBCtM2TtuYaMdI/Zq4//8QAHBABAAIDAQEBAAAAAAAAAAAAAQARITFBUWFx/9oACAEBAAE/IdGz14QtF2qx6Sgepa2QxPoErfi0XBRMKu2mAov7iovfYZ3MKG3ekMKJ/9oADAMBAAIAAwAAABDn6c7/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAgEAEAAgICAQUAAAAAAAAAAAABABEhQVGxcTFhgZHx/9oACAEBAAE/EDIS2aWEZXoljWBPI6cfc1NQa4joqnQ1YHcL0aVz2T8mGDUcO1TYvfNMXvK/MromocryMPUoaAnDDKqehZDzuEAKCf/Z')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "color selector on cardboard",
    "title": "color selector on cardboard",
    "src": "/jacdac-docs/static/7c130fb897d52f00bfa89b0f44f1bcc0/4b190/alternate.jpg",
    "srcSet": ["/jacdac-docs/static/7c130fb897d52f00bfa89b0f44f1bcc0/e07e9/alternate.jpg 200w", "/jacdac-docs/static/7c130fb897d52f00bfa89b0f44f1bcc0/066f9/alternate.jpg 400w", "/jacdac-docs/static/7c130fb897d52f00bfa89b0f44f1bcc0/4b190/alternate.jpg 800w", "/jacdac-docs/static/7c130fb897d52f00bfa89b0f44f1bcc0/e5166/alternate.jpg 1200w", "/jacdac-docs/static/7c130fb897d52f00bfa89b0f44f1bcc0/b17f8/alternate.jpg 1600w", "/jacdac-docs/static/7c130fb897d52f00bfa89b0f44f1bcc0/cee9d/alternate.jpg 2522w"],
    "sizes": "(max-width: 800px) 100vw, 800px",
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
  }), "\n    ")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "It's important to note that no code changes are needed between the different\nways to wire up the color selector."));
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
//# sourceMappingURL=component---src-pages-hardware-pnp-colorselect-mdx-05d4cf1ab146c8db7a8c.js.map