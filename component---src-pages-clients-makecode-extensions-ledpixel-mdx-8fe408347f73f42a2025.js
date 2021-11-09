"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1914,797],{

/***/ 27122:
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
    "id": "led-pixel-strip",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#led-pixel-strip",
    "aria-label": "led pixel strip permalink",
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
  }))), "LED Pixel Strip"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The LED pixel extension provides methods for working with\nan strip of RGB LEDs, as well as a built-in set of animations."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1", {
    "id": "direct-control-of-pixels",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h1",
    "href": "#direct-control-of-pixels",
    "aria-label": "direct control of pixels permalink",
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
  }))), "Direct control of pixels"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "All the pixels on a strip can be set to a color using the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "setAll"), " method:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setAll(0x00ff00)\\n})\\ninput.onButtonPressed(Button.B, () => {\\n    modules.ledPixel1.setAll(0xff0000)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setAll(0x00ff00)\\n})\\ninput.onButtonPressed(Button.B, () => {\\n    modules.ledPixel1.setAll(0xff0000)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.30,jacdac-led=github:microsoft/pxt-jacdac/led#v0.7.30,jacdac-led-pixel=github:microsoft/pxt-jacdac/led-pixel#v0.7.30\"},\"type\":\"renderblocks\",\"id\":\"18c69501aef9b184e1331a1d4d5cb903\"},\"url\":\"/images/makecode/18c69501aef9b184e1331a1d4d5cb903.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The brightness of the strip can be set and retrieved as follows:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setBrightness(85)\\n    let brightness = modules.ledPixel1.brightness()\\n    basic.showNumber(brightness)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setBrightness(85)\\n    let brightness = modules.ledPixel1.brightness()\\n    basic.showNumber(brightness)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.30,jacdac-led=github:microsoft/pxt-jacdac/led#v0.7.30,jacdac-led-pixel=github:microsoft/pxt-jacdac/led-pixel#v0.7.30\"},\"type\":\"renderblocks\",\"id\":\"057ba43f7b1255339d8ad90a6eaafbb7\"},\"url\":\"/images/makecode/057ba43f7b1255339d8ad90a6eaafbb7.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "Pixels can be individually set using the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "setPixel"), " method as shown in the\nexample below, which also uses the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "numPixels"), " method to get the number\nof pixels supported by the underlying hardware."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setAll(0)\\n    let n = modules.ledPixel1.numPixels()\\n    for(let i = 0; i <= n - 1; i++) {\\n        modules.ledPixel1.setPixel(i, 0x00ff00)\\n        basic.pause(200)\\n    }\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.setAll(0)\\n    let n = modules.ledPixel1.numPixels()\\n    for(let i = 0; i <= n - 1; i++) {\\n        modules.ledPixel1.setPixel(i, 0x00ff00)\\n        basic.pause(200)\\n    }\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.30,jacdac-led=github:microsoft/pxt-jacdac/led#v0.7.30,jacdac-led-pixel=github:microsoft/pxt-jacdac/led-pixel#v0.7.30\"},\"type\":\"renderblocks\",\"id\":\"eb3598cff5be0ccaf46603b4d0f27b87\"},\"url\":\"/images/makecode/eb3598cff5be0ccaf46603b4d0f27b87.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "built-in-animations",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#built-in-animations",
    "aria-label": "built in animations permalink",
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
  }))), "Built-in Animations"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The MakeCode extension provides support for a set of animations\nthat can be triggered via the ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p"
  }, "showAnimation"), " method:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre",
    "className": "language-blocks"
  }, "{\"source\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.showAnimation(modules.ledPixelAnimations.sparkle, 2000)\\n})\\ninput.onButtonPressed(Button.B, () => {\\n    modules.ledPixel1.showAnimation(modules.ledPixelAnimations.firefly, 2000)\\n})\",\"rendered\":{\"req\":{\"code\":\"input.onButtonPressed(Button.A, () => {\\n    modules.ledPixel1.showAnimation(modules.ledPixelAnimations.sparkle, 2000)\\n})\\ninput.onButtonPressed(Button.B, () => {\\n    modules.ledPixel1.showAnimation(modules.ledPixelAnimations.firefly, 2000)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac=github:microsoft/pxt-jacdac#v0.7.30,jacdac-led=github:microsoft/pxt-jacdac/led#v0.7.30,jacdac-led-pixel=github:microsoft/pxt-jacdac/led-pixel#v0.7.30\"},\"type\":\"renderblocks\",\"id\":\"a93f64b90b52349364827124d5186a8c\"},\"url\":\"/images/makecode/a93f64b90b52349364827124d5186a8c.png\"}}\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "commands",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#commands",
    "aria-label": "commands permalink",
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
  }))), "Commands"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/services/ledpixel"
  }, "LED pixel service"), " has\na small command language that can be used to create your own animations\nand effects."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", {
    parentName: "pre"
  }, "function runEncoded(prog: string, args?: number[]) {\n    let encoded = jacdac.lightEncode(prog, args)\n    modules.ledPixel1.runProgram(encoded)\n}\n\ninput.onButtonPressed(Button.A, () => {\n     runEncoded(\"rotfwd 1\")\n     modules.ledPixel1.setPixel(0, 0x00ff00)\n})\n")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "jm-rgb-led-bar-v01",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#jm-rgb-led-bar-v01",
    "aria-label": "jm rgb led bar v01 permalink",
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
  }))), "JM RGB LED Bar v0.1"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmrgbledbar58v01"
  }, "JM RGB LED Bar v0.1"), " module\nhas one end labelled with a \"+\" sign. The LED RGB at this end is at index\n0 (left end of bar in picture below).", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("br", {
    parentName: "p"
  }), "\n", "The LED RGB at the other end of the bar (labelled with \"-\") is at index 9\n(right end of bar in picture below)."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
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
      "paddingBottom": "55.49999999999999%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABJ0AAASdAHeZh94AAAC7UlEQVQozy2SS1NaBwCF7//JdNVVF120i7YzbZw0CSpvEaPII0RNtdFpySSTh5kyCKIkykN5XBAuhCSA06QK8lTvvUCAtGnS6V/5OrZdnDln9c2ZOUcYlW4zqqwwKi4xyrgYZl30Mw7kAxtyZgYlY0FJm1FEI6pooJs20k3r6cfGGcY0jBKTDJOT9EUNg5QGoVe4Re/lbf4IWfnbc40Pj8cZBQzIeTtqdo6uZEfN2VCys6i5OVTJhpqe4f3DK3y88w3vH44xCE3QO7DwNm1BOBXttMV5ekEzcnKe04ydjjhLO2Glk7rQDO3kNO34FK24mWZUTzOqoxnT0tzTIUd0DDavo6RMyFENgiLdQnm+RHfDRDdzkRdRJDdy1okiOVElB2eZWTpJK534FKdxE6f7Bs4TBs5FI2/jZoa/XEFOGejGriP0pXmqB24CE5/yxq+hkZymFtFzvDPJ0bMJqjuTHD+9yvH2ZWqh76huf8vJ0zHqz8aoh68ihy7jM15CXP+aj3kTQlFc5YcnbnZC91h/cINQcIHtgJtNn5PdrUX8Xjt+r43dgIOtDRs7wZvshhbY3HCwH75DaMNFILjGF8ZL3F/+DOF1yYf3wMfeYYzkcz+l3yIUDrdJ5b28qARJ5p+QfeGjWA4iFryUD7coVwIkpUe8qgSI5x+zlffzpeUTHng+R+jmnTRL91m/Z+FN2Eor46IWn6Mam+EoMkUtauQkqqca1VO78IiOeljLya6GevganbiW9btfIfm/56+XNxDelVcZldcYVn6iX/qZbnEVOb/MWXaRdtpFK2GjuW+htW/6f+lpWnELrZiednQcJWFATRkZ5KwMpTmEQWkNtbCCnP8RWVpGzi0g51zIkouznJuW6KSxZ6Ue0dOI6anHDDT3jDQvgDEtctJAN2VCTWjpJXUIH448/Hl0l99fe3j3q4f+qxW6xSWUghs5f5OzrINOxkYjMU3j34ZGOgkj5ykzcsr036GzFgZZM6OsiX8AOKJi/6+AMHkAAAAASUVORK5CYII=')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "led bar",
    "title": "led bar",
    "src": "/jacdac-docs/static/0d50377008946f4ba1de37e40998d15f/5a190/ledbar.png",
    "srcSet": ["/jacdac-docs/static/0d50377008946f4ba1de37e40998d15f/772e8/ledbar.png 200w", "/jacdac-docs/static/0d50377008946f4ba1de37e40998d15f/e17e5/ledbar.png 400w", "/jacdac-docs/static/0d50377008946f4ba1de37e40998d15f/5a190/ledbar.png 800w"],
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
  }), "\n    ")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    "id": "jm-rgb-led-ring-v21",
    "style": {
      "position": "relative"
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "h2",
    "href": "#jm-rgb-led-ring-v21",
    "aria-label": "jm rgb led ring v21 permalink",
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
  }))), "JM RGB LED Ring v2.1"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, "The ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", {
    parentName: "p",
    "href": "/jacdac-docs/devices/microsoft/research/jmrgbledring37v21"
  }, "JM RGB LED Ring v2.1"), " module\nhas eight LEDs. The LED opposite from the edge connector is at index 0 and\nindices increase counter-clockwise, as shown below:"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span", {
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
      "paddingBottom": "75%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABJ0AAASdAHeZh94AAAD9klEQVQ4yz2U20+TBwDFv79j2atZlpnMV5e5S0WRQu8tvdACVqoDlTln5jYNalAqrqCttB8tvdsi0mpRmM7AmNPaIVh6g9YWRComi6/L3n8LPOzh93Zycs7DOULOq6Xg11IK6igGdBSDWhYDbaTdGjJuJbMeHfOilnJQx9u4mfWJDqpxC69iJqoxE7WYmeotI9WogWrUhFD0a1gJ6ViNGqhEDSwHdcSGLXTbDdjc37Hy2x1CsWEO9jXxy+B+FlwNVMNqymEVtWgrazEDr+MmXo9v04awljjCevIotWQ31QkrqdhpLsSuI5yVcygyBOkXPHx0H+FiKx/0txOIXybt1VNPdLGZtPEmYaOePEY9cZTNSRtCdbyT6sQRNsY78PkOk8nMwtIi1vAA6jOfM+XrwenQseenRibnpyHzjAf3bpAalpMNtO6kenPHQj3RST1hRVib/IaNRA+L8WN8dlGFO+Ej/3yG1KCcgniIckBGOSAlc7ORJ3evUc8t0nLrMqeHzDz2tPP2no166ihbKdsOwnbdv+/acLmNyM7p2PWzBvWp3aw691KNK1iLKVkf17I5oSXvaUTu6EA4p2Z3136mr0jIh7RsTFrYSh3mXaoToRZvoxJUE7vdR2YmiTV+lcbeXWyMfkEl0kRtBym1WzLehA4QGDES+jXBJfcAvT82Y/d08cDTzPuknq2EDmEtqiEvNnBvyg5P01yfCdPcu5sN8WvKYSmvwi1UIzLWY2oq/v28mr4If72glH5Mv/8C0VmR0cEm3t/RsDmhQVgJK1kLNHPZZabD28+uKzakJz+m5pZQ9DexGpBSDimoRFXU/I04XBaOz/hpG7tA16l9dJ+T8MB1gK1xBetxJcJysI1a2IzHpUM4I+ET5/f02U2k7fuoRC2sRoysRo2UQnoWRD0qVy/CgJpPHXpSfXtZuPEVJZ+Mkl9Oya9AWBJNLHtNpG8oaBv5llIpx78LTxm91sH9Kw38MSxnfqiFKaee2pME/8zNYU04OWtXkroqY3lESk5U/I/w0mvkpc9EVmzlodNENj1NYe4Rexw9nBg7z7v5JGMROx86jnA3+4R3ixnc3hMkL33JM6eSvKig4FNT9KoojCoRCqHDFENWCmErSx45UyMWjounEa6baZ+dhGyRmd8fIgx38tHNbiLeHv50NFAOGSj4DRS8GopeDQVRRd4tRSgEjKyE2lkJm9ne9aJbRWxAzQ9XVZx3dxG53c+10VOcHJCRdDSRdR2iOKbfSVXyqVjx66iEjFTCBlaDeoSS30ApYKIUNO68Tcmv4/lNBUtDEvLDEuYGJTwfOkhVVFEJtFLc1vm3DfXkRvXkRC3ZERl5j5zcSAv/AUhtKfFY9M37AAAAAElFTkSuQmCC')",
      "backgroundSize": "cover",
      "display": "block"
    }
  }), "\n  ", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", {
    parentName: "span",
    "className": "gatsby-resp-image-image",
    "alt": "led ring",
    "title": "led ring",
    "src": "/jacdac-docs/static/e41df6dff299bd3937cea1a52cc5c7c0/5a190/ledring.png",
    "srcSet": ["/jacdac-docs/static/e41df6dff299bd3937cea1a52cc5c7c0/772e8/ledring.png 200w", "/jacdac-docs/static/e41df6dff299bd3937cea1a52cc5c7c0/e17e5/ledring.png 400w", "/jacdac-docs/static/e41df6dff299bd3937cea1a52cc5c7c0/5a190/ledring.png 800w"],
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
    "href": "/jacdac-docs/services/ledpixel/"
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-ledpixel-mdx-8fe408347f73f42a2025.js.map