(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5548],{

/***/ 86802:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _asyncToGenerator = __webpack_require__(48926);

__webpack_require__(25438);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
/**
 * Flatten the given list of arguments into a single flat array.
 * The arguments can be composed of multiple depths of objects and arrays.
 * @param {Array} arr - list of arguments
 * @returns {Array} a flat list of arguments
 * @alias module:modeling/utils.flatten
 */


var flatten$2 = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten$2(val)) : acc.concat(val), []);

var flatten_1$1 = flatten$2;
/**
 * Assign the given color to the given objects.
 * @param {Array} color - RGBA color values, where each value is between 0 and 1.0
 * @param {Object|Array} objects - the objects of which to apply the given color
 * @return {Object|Array} given object, or list of given objects with an additional attribute 'color'
 * @alias module:modeling/colors.colorize
 *
 * @example
 * let redSphere = colorize([1,0,0], sphere()) // red
 * let greenCircle = colorize([0,1,0,0.8], circle()) // green transparent
 * let blueArc = colorize([0,0,1], arc()) // blue
 * let wildcylinder = colorize(colorNameToRgb('fuchsia'), cylinder()) // CSS color
 */

var colorize = function colorize(color) {
  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }

  if (!Array.isArray(color)) throw new Error('color must be an array');
  if (color.length < 3) throw new Error('color must contain R, G and B values');
  if (color.length === 3) color = [color[0], color[1], color[2], 1.0]; // add alpha

  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  var results = objects.map(object => {
    object.color = color;
    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var colorize_1 = colorize;
/**
 * @alias module:modeling/colors.cssColors
 * @see CSS color table from http://www.w3.org/TR/css3-color/
 * @enum {Array}
 * @example
 * let newshape = colorize(cssColors.red, oldshape)
 */

var cssColors = {
  // basic color keywords
  black: [0 / 255, 0 / 255, 0 / 255],
  silver: [192 / 255, 192 / 255, 192 / 255],
  gray: [128 / 255, 128 / 255, 128 / 255],
  white: [255 / 255, 255 / 255, 255 / 255],
  maroon: [128 / 255, 0 / 255, 0 / 255],
  red: [255 / 255, 0 / 255, 0 / 255],
  purple: [128 / 255, 0 / 255, 128 / 255],
  fuchsia: [255 / 255, 0 / 255, 255 / 255],
  green: [0 / 255, 128 / 255, 0 / 255],
  lime: [0 / 255, 255 / 255, 0 / 255],
  olive: [128 / 255, 128 / 255, 0 / 255],
  yellow: [255 / 255, 255 / 255, 0 / 255],
  navy: [0 / 255, 0 / 255, 128 / 255],
  blue: [0 / 255, 0 / 255, 255 / 255],
  teal: [0 / 255, 128 / 255, 128 / 255],
  aqua: [0 / 255, 255 / 255, 255 / 255],
  // extended color keywords
  aliceblue: [240 / 255, 248 / 255, 255 / 255],
  antiquewhite: [250 / 255, 235 / 255, 215 / 255],
  // 'aqua': [ 0 / 255, 255 / 255, 255 / 255 ],
  aquamarine: [127 / 255, 255 / 255, 212 / 255],
  azure: [240 / 255, 255 / 255, 255 / 255],
  beige: [245 / 255, 245 / 255, 220 / 255],
  bisque: [255 / 255, 228 / 255, 196 / 255],
  // 'black': [ 0 / 255, 0 / 255, 0 / 255 ],
  blanchedalmond: [255 / 255, 235 / 255, 205 / 255],
  // 'blue': [ 0 / 255, 0 / 255, 255 / 255 ],
  blueviolet: [138 / 255, 43 / 255, 226 / 255],
  brown: [165 / 255, 42 / 255, 42 / 255],
  burlywood: [222 / 255, 184 / 255, 135 / 255],
  cadetblue: [95 / 255, 158 / 255, 160 / 255],
  chartreuse: [127 / 255, 255 / 255, 0 / 255],
  chocolate: [210 / 255, 105 / 255, 30 / 255],
  coral: [255 / 255, 127 / 255, 80 / 255],
  cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
  cornsilk: [255 / 255, 248 / 255, 220 / 255],
  crimson: [220 / 255, 20 / 255, 60 / 255],
  cyan: [0 / 255, 255 / 255, 255 / 255],
  darkblue: [0 / 255, 0 / 255, 139 / 255],
  darkcyan: [0 / 255, 139 / 255, 139 / 255],
  darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
  darkgray: [169 / 255, 169 / 255, 169 / 255],
  darkgreen: [0 / 255, 100 / 255, 0 / 255],
  darkgrey: [169 / 255, 169 / 255, 169 / 255],
  darkkhaki: [189 / 255, 183 / 255, 107 / 255],
  darkmagenta: [139 / 255, 0 / 255, 139 / 255],
  darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
  darkorange: [255 / 255, 140 / 255, 0 / 255],
  darkorchid: [153 / 255, 50 / 255, 204 / 255],
  darkred: [139 / 255, 0 / 255, 0 / 255],
  darksalmon: [233 / 255, 150 / 255, 122 / 255],
  darkseagreen: [143 / 255, 188 / 255, 143 / 255],
  darkslateblue: [72 / 255, 61 / 255, 139 / 255],
  darkslategray: [47 / 255, 79 / 255, 79 / 255],
  darkslategrey: [47 / 255, 79 / 255, 79 / 255],
  darkturquoise: [0 / 255, 206 / 255, 209 / 255],
  darkviolet: [148 / 255, 0 / 255, 211 / 255],
  deeppink: [255 / 255, 20 / 255, 147 / 255],
  deepskyblue: [0 / 255, 191 / 255, 255 / 255],
  dimgray: [105 / 255, 105 / 255, 105 / 255],
  dimgrey: [105 / 255, 105 / 255, 105 / 255],
  dodgerblue: [30 / 255, 144 / 255, 255 / 255],
  firebrick: [178 / 255, 34 / 255, 34 / 255],
  floralwhite: [255 / 255, 250 / 255, 240 / 255],
  forestgreen: [34 / 255, 139 / 255, 34 / 255],
  // 'fuchsia': [ 255 / 255, 0 / 255, 255 / 255 ],
  gainsboro: [220 / 255, 220 / 255, 220 / 255],
  ghostwhite: [248 / 255, 248 / 255, 255 / 255],
  gold: [255 / 255, 215 / 255, 0 / 255],
  goldenrod: [218 / 255, 165 / 255, 32 / 255],
  // 'gray': [ 128 / 255, 128 / 255, 128 / 255 ],
  // 'green': [ 0 / 255, 128 / 255, 0 / 255 ],
  greenyellow: [173 / 255, 255 / 255, 47 / 255],
  grey: [128 / 255, 128 / 255, 128 / 255],
  honeydew: [240 / 255, 255 / 255, 240 / 255],
  hotpink: [255 / 255, 105 / 255, 180 / 255],
  indianred: [205 / 255, 92 / 255, 92 / 255],
  indigo: [75 / 255, 0 / 255, 130 / 255],
  ivory: [255 / 255, 255 / 255, 240 / 255],
  khaki: [240 / 255, 230 / 255, 140 / 255],
  lavender: [230 / 255, 230 / 255, 250 / 255],
  lavenderblush: [255 / 255, 240 / 255, 245 / 255],
  lawngreen: [124 / 255, 252 / 255, 0 / 255],
  lemonchiffon: [255 / 255, 250 / 255, 205 / 255],
  lightblue: [173 / 255, 216 / 255, 230 / 255],
  lightcoral: [240 / 255, 128 / 255, 128 / 255],
  lightcyan: [224 / 255, 255 / 255, 255 / 255],
  lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
  lightgray: [211 / 255, 211 / 255, 211 / 255],
  lightgreen: [144 / 255, 238 / 255, 144 / 255],
  lightgrey: [211 / 255, 211 / 255, 211 / 255],
  lightpink: [255 / 255, 182 / 255, 193 / 255],
  lightsalmon: [255 / 255, 160 / 255, 122 / 255],
  lightseagreen: [32 / 255, 178 / 255, 170 / 255],
  lightskyblue: [135 / 255, 206 / 255, 250 / 255],
  lightslategray: [119 / 255, 136 / 255, 153 / 255],
  lightslategrey: [119 / 255, 136 / 255, 153 / 255],
  lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
  lightyellow: [255 / 255, 255 / 255, 224 / 255],
  // 'lime': [ 0 / 255, 255 / 255, 0 / 255 ],
  limegreen: [50 / 255, 205 / 255, 50 / 255],
  linen: [250 / 255, 240 / 255, 230 / 255],
  magenta: [255 / 255, 0 / 255, 255 / 255],
  // 'maroon': [ 128 / 255, 0 / 255, 0 / 255 ],
  mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
  mediumblue: [0 / 255, 0 / 255, 205 / 255],
  mediumorchid: [186 / 255, 85 / 255, 211 / 255],
  mediumpurple: [147 / 255, 112 / 255, 219 / 255],
  mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
  mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
  mediumspringgreen: [0 / 255, 250 / 255, 154 / 255],
  mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
  mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
  midnightblue: [25 / 255, 25 / 255, 112 / 255],
  mintcream: [245 / 255, 255 / 255, 250 / 255],
  mistyrose: [255 / 255, 228 / 255, 225 / 255],
  moccasin: [255 / 255, 228 / 255, 181 / 255],
  navajowhite: [255 / 255, 222 / 255, 173 / 255],
  // 'navy': [ 0 / 255, 0 / 255, 128 / 255 ],
  oldlace: [253 / 255, 245 / 255, 230 / 255],
  // 'olive': [ 128 / 255, 128 / 255, 0 / 255 ],
  olivedrab: [107 / 255, 142 / 255, 35 / 255],
  orange: [255 / 255, 165 / 255, 0 / 255],
  orangered: [255 / 255, 69 / 255, 0 / 255],
  orchid: [218 / 255, 112 / 255, 214 / 255],
  palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
  palegreen: [152 / 255, 251 / 255, 152 / 255],
  paleturquoise: [175 / 255, 238 / 255, 238 / 255],
  palevioletred: [219 / 255, 112 / 255, 147 / 255],
  papayawhip: [255 / 255, 239 / 255, 213 / 255],
  peachpuff: [255 / 255, 218 / 255, 185 / 255],
  peru: [205 / 255, 133 / 255, 63 / 255],
  pink: [255 / 255, 192 / 255, 203 / 255],
  plum: [221 / 255, 160 / 255, 221 / 255],
  powderblue: [176 / 255, 224 / 255, 230 / 255],
  // 'purple': [ 128 / 255, 0 / 255, 128 / 255 ],
  // 'red': [ 255 / 255, 0 / 255, 0 / 255 ],
  rosybrown: [188 / 255, 143 / 255, 143 / 255],
  royalblue: [65 / 255, 105 / 255, 225 / 255],
  saddlebrown: [139 / 255, 69 / 255, 19 / 255],
  salmon: [250 / 255, 128 / 255, 114 / 255],
  sandybrown: [244 / 255, 164 / 255, 96 / 255],
  seagreen: [46 / 255, 139 / 255, 87 / 255],
  seashell: [255 / 255, 245 / 255, 238 / 255],
  sienna: [160 / 255, 82 / 255, 45 / 255],
  // 'silver': [ 192 / 255, 192 / 255, 192 / 255 ],
  skyblue: [135 / 255, 206 / 255, 235 / 255],
  slateblue: [106 / 255, 90 / 255, 205 / 255],
  slategray: [112 / 255, 128 / 255, 144 / 255],
  slategrey: [112 / 255, 128 / 255, 144 / 255],
  snow: [255 / 255, 250 / 255, 250 / 255],
  springgreen: [0 / 255, 255 / 255, 127 / 255],
  steelblue: [70 / 255, 130 / 255, 180 / 255],
  tan: [210 / 255, 180 / 255, 140 / 255],
  // 'teal': [ 0 / 255, 128 / 255, 128 / 255 ],
  thistle: [216 / 255, 191 / 255, 216 / 255],
  tomato: [255 / 255, 99 / 255, 71 / 255],
  turquoise: [64 / 255, 224 / 255, 208 / 255],
  violet: [238 / 255, 130 / 255, 238 / 255],
  wheat: [245 / 255, 222 / 255, 179 / 255],
  // 'white': [ 255 / 255, 255 / 255, 255 / 255 ],
  whitesmoke: [245 / 255, 245 / 255, 245 / 255],
  // 'yellow': [ 255 / 255, 255 / 255, 0 / 255 ],
  yellowgreen: [154 / 255, 205 / 255, 50 / 255]
};
var cssColors_1 = cssColors;
/**
 * Converts a CSS color name to RGB color.
 *
 * @param {String} s - the CSS color name
 * @return {Array} the RGB color, or undefined if not found
 * @alias module:modeling/colors.colorNameToRgb
 * @example
 * let mysphere = colorize(colorNameToRgb('lightblue'), sphere())
 */

var colorNameToRgb = s => cssColors_1[s.toLowerCase()];

var colorNameToRgb_1 = colorNameToRgb;
/**
 * Converts CSS color notations (string of hex values) to RGB values.
 *
 * @see https://www.w3.org/TR/css-color-3/
 * @param {String} notation - color notation
 * @return {Array} RGB color values
 * @alias module:modeling/colors.hexToRgb
 *
 * @example
 * let mysphere = colorize(hexToRgb('#000080'), sphere()) // navy blue
 */

var hexToRgb = notation => {
  notation = notation.replace('#', '');
  if (notation.length < 6) throw new Error('the given notation must contain 3 or more hex values');
  var r = parseInt(notation.substring(0, 2), 16) / 255;
  var g = parseInt(notation.substring(2, 4), 16) / 255;
  var b = parseInt(notation.substring(4, 6), 16) / 255;

  if (notation.length >= 8) {
    var a = parseInt(notation.substring(6, 8), 16) / 255;
    return [r, g, b, a];
  }

  return [r, g, b];
};

var hexToRgb_1 = hexToRgb;
/**
 * Convert hue values to a color component (ie one of r, g, b)
 * @param  {Number} p
 * @param  {Number} q
 * @param  {Number} t
 * @alias module:modeling/colors.hueToColorComponent
 */

var hueToColorComponent = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

var hueToColorComponent_1 = hueToColorComponent;
/**
 * Converts HSL color values to RGB color values.
 *
 * @see http://en.wikipedia.org/wiki/HSL_color_space.
 * @param {...Number|Array} values - HSL or HSLA color values
 * @return {Array} RGB or RGBA color values
 * @alias module:modeling/colors.hslToRgb
 *
 * @example
 * let mysphere = colorize(hslToRgb([0.9166666666666666, 1, 0.5]), sphere())
 */

var hslToRgb = function hslToRgb() {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  values = flatten_1$1(values);
  if (values.length < 3) throw new Error('values must contain H, S and L values');
  var h = values[0];
  var s = values[1];
  var l = values[2];
  var r = l; // default is achromatic

  var g = l;
  var b = l;

  if (s !== 0) {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hueToColorComponent_1(p, q, h + 1 / 3);
    g = hueToColorComponent_1(p, q, h);
    b = hueToColorComponent_1(p, q, h - 1 / 3);
  }

  if (values.length > 3) {
    // add alpha value if provided
    var a = values[3];
    return [r, g, b, a];
  }

  return [r, g, b];
};

var hslToRgb_1 = hslToRgb;
/**
 * Converts HSV color values to RGB color values.
 *
 * @see http://en.wikipedia.org/wiki/HSV_color_space.
 * @param {...Number|Array} values - HSV or HSVA color values
 * @return {Array} RGB or RGBA color values
 * @alias module:modeling/colors.hsvToRgb
 *
 * @example
 * let mysphere = colorize(hsvToRgb([0.9166666666666666, 1, 1]), sphere())
 */

var hsvToRgb = function hsvToRgb() {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  values = flatten_1$1(values);
  if (values.length < 3) throw new Error('values must contain H, S and V values');
  var h = values[0];
  var s = values[1];
  var v = values[2];
  var r = 0;
  var g = 0;
  var b = 0;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;

    case 1:
      r = q;
      g = v;
      b = p;
      break;

    case 2:
      r = p;
      g = v;
      b = t;
      break;

    case 3:
      r = p;
      g = q;
      b = v;
      break;

    case 4:
      r = t;
      g = p;
      b = v;
      break;

    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  if (values.length > 3) {
    // add alpha value if provided
    var a = values[3];
    return [r, g, b, a];
  }

  return [r, g, b];
};

var hsvToRgb_1 = hsvToRgb;
/**
 * Convert the given RGB color values to CSS color notation (string)
 * @see https://www.w3.org/TR/css-color-3/
 * @param {...Number|Array} values - RGB or RGBA color values
 * @return {String} CSS color notation
 * @alias module:modeling/colors.rgbToHex
 */

var rgbToHex = function rgbToHex() {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  values = flatten_1$1(values);
  if (values.length < 3) throw new Error('values must contain R, G and B values');
  var r = values[0] * 255;
  var g = values[1] * 255;
  var b = values[2] * 255;
  var s = "#".concat(Number(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).substring(1, 7));

  if (values.length > 3) {
    // convert alpha to opacity
    s = s + Number(values[3] * 255).toString(16);
  }

  return s;
};

var rgbToHex_1 = rgbToHex;
/**
 * Converts an RGB color value to HSL.
 *
 * @see http://en.wikipedia.org/wiki/HSL_color_space.
 * @see http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 * @param {...Number|Array} values - RGB or RGBA color values
 * @return {Array} HSL or HSLA color values
 * @alias module:modeling/colors.rgbToHsl
 */

var rgbToHsl = function rgbToHsl() {
  for (var _len5 = arguments.length, values = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    values[_key5] = arguments[_key5];
  }

  values = flatten_1$1(values);
  if (values.length < 3) throw new Error('values must contain R, G and B values');
  var r = values[0];
  var g = values[1];
  var b = values[2];
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h;
  var s;
  var l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  if (values.length > 3) {
    // add alpha value if provided
    var a = values[3];
    return [h, s, l, a];
  }

  return [h, s, l];
};

var rgbToHsl_1 = rgbToHsl;
/**
 * Converts an RGB color value to HSV.
 *
 * @see http://en.wikipedia.org/wiki/HSV_color_space.
 * @param {...Number|Array} values - RGB or RGBA color values
 * @return {Array} HSV or HSVA color values
 * @alias module:modeling/colors.rgbToHsv
 */

var rgbToHsv = function rgbToHsv() {
  for (var _len6 = arguments.length, values = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    values[_key6] = arguments[_key6];
  }

  values = flatten_1$1(values);
  if (values.length < 3) throw new Error('values must contain R, G and B values');
  var r = values[0];
  var g = values[1];
  var b = values[2];
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  if (values.length > 3) {
    // add alpha if provided
    var a = values[3];
    return [h, s, v, a];
  }

  return [h, s, v];
};

var rgbToHsv_1 = rgbToHsv;
/**
 * All shapes (primitives or the results of operations) can be assigned a color (RGBA).
 * In all cases, the function returns the results, and never changes the original shapes.
 * @module modeling/colors
 * @example
 * const { colorize, hexToRgb } = require('@jscad/modeling').colors
 */

var colors = {
  colorize: colorize_1,
  colorNameToRgb: colorNameToRgb_1,
  cssColors: cssColors_1,
  hexToRgb: hexToRgb_1,
  hslToRgb: hslToRgb_1,
  hsvToRgb: hsvToRgb_1,
  hueToColorComponent: hueToColorComponent_1,
  rgbToHex: rgbToHex_1,
  rgbToHsl: rgbToHsl_1,
  rgbToHsv: rgbToHsv_1
};
/**
 * Represents a bezier easing function.
 * @typedef {Object} bezier
 * @property {Array} points - The control points for the bezier curve. The first and last point will also be the start and end of the curve
 * @property {string} pointType - A reference to the type and dimensionality of the points that the curve was created from
 * @property {number} dimensions - The dimensionality of the bezier
 * @property {Array} permutations - A pre-calculation of the bezier algorithm's co-efficients
 * @property {Array} tangentPermutations - A pre-calculation of the bezier algorithm's tangent co-efficients
 *
 * @example
 * const b = bezier.create([0,10]) // a linear progression from 0 to 10
 * const b = bezier.create([0, 0, 10, 10]) // a symmetrical cubic easing curve that starts slowly and ends slowly from 0 to 10
 * const b = bezier.create([0,0,0], [0,5,10], [10,0,-5], [10,10,10]]) // a cubic 3 dimensional easing curve that can generate position arrays for modelling
 * Usage:
 * let position = bezier.valueAt(t,b) // where 0 < t < 1
 * let tangent = bezier.tangentAt(t,b) // where 0 < t < 1
 *
 */

/**
 * Creates an object representing a bezier easing curve.
 * Curves can have both an arbitrary number of control points, and an arbitrary number of dimensions.
 *
 * @example
 * const b = bezier.create([0,10]) // a linear progression from 0 to 10
 * const b = bezier.create([0, 0, 10, 10]) // a symmetrical cubic easing curve that starts slowly and ends slowly from 0 to 10
 * const b = bezier.create([0,0,0], [0,5,10], [10,0,-5], [10,10,10]]) // a cubic 3 dimensional easing curve that can generate position arrays for modelling
 *
 * @param {Array} points An array with at least 2 elements of either all numbers, or all arrays of numbers that are the same size.
 * @returns {bezier} a new bezier data object
 * @alias module:modeling/curves/bezier.create
 */

var create$c = points => {
  if (!Array.isArray(points)) throw new Error('Bezier points must be a valid array/');
  if (points.length < 2) throw new Error('Bezier points must contain at least 2 values.');
  var pointType = getPointType(points);
  return {
    points: points,
    pointType: pointType,
    dimensions: pointType === 'float_single' ? 0 : points[0].length,
    permutations: getPermutations(points.length - 1),
    tangentPermutations: getPermutations(points.length - 2)
  };
};

var getPointType = function getPointType(points) {
  var firstPointType = null;
  points.forEach(point => {
    var pType = '';

    if (Number.isFinite(point)) {
      pType = 'float_single';
    } else if (Array.isArray(point)) {
      point.forEach(val => {
        if (!Number.isFinite(val)) throw new Error('Bezier point values must all be numbers.');
      });
      pType = 'float_' + point.length;
    } else throw new Error('Bezier points must all be numbers or arrays of number.');

    if (firstPointType == null) {
      firstPointType = pType;
    } else {
      if (firstPointType !== pType) {
        throw new Error('Bezier points must be either all numbers or all arrays of numbers of the same size.');
      }
    }
  });
  return firstPointType;
};

var getPermutations = function getPermutations(c) {
  var permutations = [];

  for (var i = 0; i <= c; i++) {
    permutations.push(factorial(c) / (factorial(i) * factorial(c - i)));
  }

  return permutations;
};

var factorial = function factorial(b) {
  var out = 1;

  for (var i = 2; i <= b; i++) {
    out *= i;
  }

  return out;
};

var create_1$c = create$c;
/**
 * Calculates the value at a specific position along a bezier easing curve.
 * For multidimensional curves, the tangent is the slope of each dimension at that point.
 * See the example called extrudeAlongPath.js to see this in use.
 * Math and explanation comes from {@link https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/}
 *
 * @example
 * const b = bezier.create([0,0,0], [0,5,10], [10,0,-5], [10,10,10]]) // a cubic 3 dimensional easing curve that can generate position arrays for modelling
 * let position = bezier.valueAt(t,b) // where 0 < t < 1
 *
 * @param {number} t : the position of which to calculate the value; 0 < t < 1
 * @param {Object} bezier : a bezier curve created with bezier.create().
 * @returns {array | number} the value at the requested position.
 * @alias module:modeling/curves/bezier.valueAt
 */

var valueAt = (t, bezier) => {
  if (t < 0 || t > 1) {
    throw new Error('Bezier valueAt() input must be between 0 and 1');
  }

  if (bezier.pointType === 'float_single') {
    return bezierFunction(bezier, bezier.points, t);
  } else {
    var result = [];

    for (var i = 0; i < bezier.dimensions; i++) {
      var singleDimensionPoints = [];

      for (var j = 0; j < bezier.points.length; j++) {
        singleDimensionPoints.push(bezier.points[j][i]);
      }

      result.push(bezierFunction(bezier, singleDimensionPoints, t));
    }

    return result;
  }
};

var bezierFunction = function bezierFunction(bezier, p, t) {
  var n = p.length - 1;
  var result = 0;

  for (var i = 0; i <= n; i++) {
    result += bezier.permutations[i] * Math.pow(1 - t, n - i) * Math.pow(t, i) * p[i];
  }

  return result;
};

var valueAt_1 = valueAt;
/**
 * Calculates the tangent at a specific position along a bezier easing curve.
 * For multidimensional curves, the tangent is the slope of each dimension at that point.
 * See the example called extrudeAlongPath.js
 *
 * @example
 * const b = bezier.create([0,0,0], [0,5,10], [10,0,-5], [10,10,10]]) // a cubic 3 dimensional easing curve that can generate position arrays for modelling
 * let tangent = bezier.tangentAt(t, b)
 *
 * @param {number} t : the position of which to calculate the bezier's tangent value; 0 < t < 1
 * @param {Object} bezier : an array with at least 2 elements of either all numbers, or all arrays of numbers that are the same size.
 * @returns {array | number} the tangent at the requested position.
 * @alias module:modeling/curves/bezier.tangentAt
 */

var tangentAt = (t, bezier) => {
  if (t < 0 || t > 1) {
    throw new Error('Bezier tangentAt() input must be between 0 and 1');
  }

  if (bezier.pointType === 'float_single') {
    return bezierTangent(bezier, bezier.points, t);
  } else {
    var result = [];

    for (var i = 0; i < bezier.dimensions; i++) {
      var singleDimensionPoints = [];

      for (var j = 0; j < bezier.points.length; j++) {
        singleDimensionPoints.push(bezier.points[j][i]);
      }

      result.push(bezierTangent(bezier, singleDimensionPoints, t));
    }

    return result;
  }
};

var bezierTangent = function bezierTangent(bezier, p, t) {
  // from https://pages.mtu.edu/~shene/COURSES/cs3621/NOTES/spline/Bezier/bezier-der.html
  var n = p.length - 1;
  var result = 0;

  for (var i = 0; i < n; i++) {
    var q = n * (p[i + 1] - p[i]);
    result += bezier.tangentPermutations[i] * Math.pow(1 - t, n - 1 - i) * Math.pow(t, i) * q;
  }

  return result;
};

var tangentAt_1 = tangentAt;
/**
 * Represents a bezier easing function.
 * @see {@link bezier} for data structure information.
 * @module modeling/curves/bezier
 */

var bezier = {
  create: create_1$c,
  valueAt: valueAt_1,
  tangentAt: tangentAt_1
};
/**
 * Curves are n-dimensional mathematical constructs that define a path from point 0 to point 1
 * @module modeling/curves
 * @example
 * const { bezier } = require('@jscad/modeling').curves

 */

var curves = {
  bezier: bezier
};
/**
 * Adds the two matrices (A+B).
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} a - first operand
 * @param {mat4} b - second operand
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.add
 */

var add$2 = (out, a, b) => {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
};

var add_1$2 = add$2;
/**
 * Represents a 4x4 matrix which is column-major (when typed out it looks row-major).
 * See fromValues().
 * @typedef {Array} mat4
 */

/**
 * Creates a new identity matrix.
 *
 * @returns {mat4} a new matrix
 * @alias module:modeling/maths/mat4.create
 */

var create$b = () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

var create_1$b = create$b;
/**
 * Creates a clone of the given matrix.
 *
 * @param {mat4} matrix - matrix to clone
 * @returns {mat4} a new matrix
 * @alias module:modeling/maths/mat4.clone
 */

var clone$a = matrix => {
  var out = create_1$b();
  out[0] = matrix[0];
  out[1] = matrix[1];
  out[2] = matrix[2];
  out[3] = matrix[3];
  out[4] = matrix[4];
  out[5] = matrix[5];
  out[6] = matrix[6];
  out[7] = matrix[7];
  out[8] = matrix[8];
  out[9] = matrix[9];
  out[10] = matrix[10];
  out[11] = matrix[11];
  out[12] = matrix[12];
  out[13] = matrix[13];
  out[14] = matrix[14];
  out[15] = matrix[15];
  return out;
};

var clone_1$a = clone$a;
/**
 * Creates a copy of the given matrix.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} matrix - matrix to copy
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.copy
 */

var copy$5 = (out, matrix) => {
  out[0] = matrix[0];
  out[1] = matrix[1];
  out[2] = matrix[2];
  out[3] = matrix[3];
  out[4] = matrix[4];
  out[5] = matrix[5];
  out[6] = matrix[6];
  out[7] = matrix[7];
  out[8] = matrix[8];
  out[9] = matrix[9];
  out[10] = matrix[10];
  out[11] = matrix[11];
  out[12] = matrix[12];
  out[13] = matrix[13];
  out[14] = matrix[14];
  out[15] = matrix[15];
  return out;
};

var copy_1$5 = copy$5;
/**
 * Creates a invert copy of the given matrix.
 * @author Julian Lloyd
 * code from https://github.com/jlmakes/rematrix/blob/master/src/index.js
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} m - matrix to invert
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.invert
 */

var invert$2 = (out, a) => {
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  var a30 = a[12];
  var a31 = a[13];
  var a32 = a[14];
  var a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
};

var invert_1$2 = invert$2;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position.
 *
 * @param {mat4} a - first matrix
 * @param {mat4} b - second matrix
 * @returns {Boolean} true if the matrices are equal
 * @alias module:modeling/maths/mat4.equals
 */

var equals$8 = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];

var equals_1$7 = equals$8;
/**
 * Set a matrix to the identity transform.
 *
 * @param {mat4} out - receiving matrix
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.identity
 */

var identity = out => {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var identity_1 = identity;
var EPSILON$1 = 0.000001;
var constants$1 = {
  EPSILON: EPSILON$1
};
var {
  EPSILON
} = constants$1;
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest)
 *     mat4.rotate(dest, dest, rad, axis)
 *
 * @param {mat4} out - receiving matrix
 * @param {Number} rad - angle to rotate the matrix by
 * @param {vec3} axis - axis of which to rotate around
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.fromRotation
 * @example
 * let matrix = fromRotation(create(), Math.PI / 2, [0, 0, 3])
 */

var fromRotation = (out, rad, axis) => {
  var [x, y, z] = axis;
  var len = Math.sqrt(x * x + y * y + z * z);

  if (Math.abs(len) < EPSILON) {
    // axis is 0,0,0 or almost
    return identity_1(out);
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var fromRotation_1 = fromRotation;
/**
 * Creates a matrix from a vector scaling.
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest)
 *     mat4.scale(dest, dest, vec)
 *
 * @param {mat4} out - receiving matrix
 * @param {vec3} vector - X, Y, Z factors by which to scale
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.fromScaling
 * @example
 * let matrix = fromScaling([1, 2, 0.5])
 */

var fromScaling = (out, vector) => {
  out[0] = vector[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = vector[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = vector[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var fromScaling_1 = fromScaling;
/**
 * Creates a matrix from the given Tait–Bryan angles.
 *
 * Tait-Bryan Euler angle convention using active, intrinsic rotations around the axes in the order z-y-x.
 * @see https://en.wikipedia.org/wiki/Euler_angles
 *
 * @param {mat4} out - receiving matrix
 * @param {Number} yaw - Z rotation in radians
 * @param {Number} pitch - Y rotation in radians
 * @param {Number} roll - X rotation in radians
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.fromTaitBryanRotation
 * @example
 * let matrix = fromTaitBryanRotation(create(), Math.PI / 2, 0, Math.PI)
 */

var fromTaitBryanRotation = (out, yaw, pitch, roll) => {
  // precompute sines and cosines of Euler angles
  var sy = Math.sin(yaw);
  var cy = Math.cos(yaw);
  var sp = Math.sin(pitch);
  var cp = Math.cos(pitch);
  var sr = Math.sin(roll);
  var cr = Math.cos(roll); // create and populate rotation matrix
  // left-hand-rule rotation
  // const els = [
  //  cp*cy, sr*sp*cy - cr*sy, sr*sy + cr*sp*cy, 0,
  //  cp*sy, cr*cy + sr*sp*sy, cr*sp*sy - sr*cy, 0,
  //  -sp, sr*cp, cr*cp, 0,
  //  0, 0, 0, 1
  // ]
  // right-hand-rule rotation

  out[0] = cp * cy;
  out[1] = cp * sy;
  out[2] = -sp;
  out[3] = 0;
  out[4] = sr * sp * cy - cr * sy;
  out[5] = cr * cy + sr * sp * sy;
  out[6] = sr * cp;
  out[7] = 0;
  out[8] = sr * sy + cr * sp * cy;
  out[9] = cr * sp * sy - sr * cy;
  out[10] = cr * cp;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var fromTaitBryanRotation_1 = fromTaitBryanRotation;
/**
 * Creates a matrix from a vector translation.
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest)
 *     mat4.translate(dest, dest, vec)
 *
 * @param {mat4} out - receiving matrix
 * @param {vec3} vector - offset (vector) of translation
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.fromTranslation
 * @example
 * let matrix = fromTranslation(create(), [1, 2, 3])
 */

var fromTranslation = (out, vector) => {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = vector[0];
  out[13] = vector[1];
  out[14] = vector[2];
  out[15] = 1;
  return out;
};

var fromTranslation_1 = fromTranslation;
/**
 * Create a matrix with the given values.
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} a new matrix
 * @alias module:modeling/maths/mat4.fromValues
 * @example
 * let matrix = fromValues(
 *   1, 0, 0, 1,
 *   0, 1, 0, 0,
 *   0, 0, 1, 0,
 *   0, 0, 0, 1
 * )
 */

var fromValues$4 = (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) => {
  var out = create_1$b();
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
};

var fromValues_1$4 = fromValues$4;
/**
 * Calculates the absolute coordinates of the give vector.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector of reference
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.abs
 */

var abs$1 = (out, vector) => {
  out[0] = Math.abs(vector[0]);
  out[1] = Math.abs(vector[1]);
  out[2] = Math.abs(vector[2]);
  return out;
};

var abs_1$1 = abs$1;
/**
 * Adds the coordinates of two vectors (A+B).
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.add
 */

var add$1 = (out, a, b) => {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
};

var add_1$1 = add$1;
/**
 * Calculates the dot product of two vectors.
 *
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {Number} dot product
 * @alias module:modeling/maths/vec3.dot
 */

var dot$2 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

var dot_1$2 = dot$2;
/**
 * Calculate the angle between two vectors.
 *
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {Number} angle (radians)
 * @alias module:modeling/maths/vec3.angle
 */

var angle$1 = (a, b) => {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var bx = b[0];
  var by = b[1];
  var bz = b[2];
  var mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
  var mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
  var mag = mag1 * mag2;
  var cosine = mag && dot_1$2(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
};

var angle_1 = angle$1;
/**
 * Represents a three dimensional vector.
 * See fromValues().
 * @typedef {Array} vec3
 */

/**
 * Creates a new vector initialized to [0,0,0].
 *
 * @returns {vec3} a new vector
 * @alias module:modeling/maths/vec3.create
 */

var create$a = () => [0, 0, 0];

var create_1$a = create$a;
/**
 * Create a clone of the given vector.
 *
 * @param {vec3} vector - vector to clone
 * @returns {vec3} a new vector
 * @alias module:modeling/maths/vec3.clone
 */

var clone$9 = vector => {
  var out = create_1$a();
  out[0] = vector[0];
  out[1] = vector[1];
  out[2] = vector[2];
  return out;
};

var clone_1$9 = clone$9;
/**
 * Create a copy of the given vector.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to copy
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.copy
 */

var copy$4 = (out, vector) => {
  out[0] = vector[0];
  out[1] = vector[1];
  out[2] = vector[2];
  return out;
};

var copy_1$4 = copy$4;
/**
 * Computes the cross product of the given vectors (AxB).
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.cross
 */

var cross$1 = (out, a, b) => {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var bx = b[0];
  var by = b[1];
  var bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
};

var cross_1$1 = cross$1;
/**
 * Calculates the Euclidian distance between the given vectors.
 *
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {Number} distance
 * @alias module:modeling/maths/vec3.distance
 */

var distance$1 = (a, b) => {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
};

var distance_1$1 = distance$1;
/**
 * Divides the coordinates of two vectors (A/B).
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - dividend vector
 * @param {vec3} b - divisor vector
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.divide
 */

var divide$1 = (out, a, b) => {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
};

var divide_1$1 = divide$1;
/**
 * Compare the given vectors for equality.
 *
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {Boolean} true if a and b are equal
 * @alias module:modeling/maths/vec3.equals
 */

var equals$7 = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];

var equals_1$6 = equals$7;
/**
 * Creates a vector from a single scalar value.
 * All components of the resulting vector have the given value.
 *
 * @param {vec3} out - receiving vector
 * @param {Number} scalar
 * @returns {Vec3} out
 * @alias module:modeling/maths/vec3.fromScalar
 */

var fromScalar$2 = (out, scalar) => {
  out[0] = scalar;
  out[1] = scalar;
  out[2] = scalar;
  return out;
};

var fromScalar_1$2 = fromScalar$2;
/**
 * Creates a new vector initialized with the given values.
 *
 * @param {Number} x - X component
 * @param {Number} y - Y component
 * @param {Number} z - Z component
 * @returns {vec3} a new vector
 * @alias module:modeling/maths/vec3.fromValues
 */

var fromValues$3 = (x, y, z) => {
  var out = create_1$a();
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
};

var fromValues_1$3 = fromValues$3;
/**
 * Create a new vector by extending a 2D vector with a Z value.
 *
 * @param {vec3} out - receiving vector
 * @param {Array} vector - 2D vector of values
 * @param {Number} [z=0] - Z value
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.fromVec2
 */

var fromVector2 = function fromVector2(out, vec2) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  out[0] = vec2[0];
  out[1] = vec2[1];
  out[2] = z;
  return out;
};

var fromVec2 = fromVector2;
/**
 * Calculates the length of a vector.
 *
 * @param {vec3} vector - vector to calculate length of
 * @returns {Number} length
 * @alias module:modeling/maths/vec3.length
 */

var length$1 = a => {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
};

var length_1$1 = length$1;
/**
 * Performs a linear interpolation between two vectors.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @param {Number} t - interpolant (0.0 to 1.0) applied between the two inputs
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.lerp
 */

var lerp$1 = (out, a, b, t) => {
  out[0] = a[0] + t * (b[0] - a[0]);
  out[1] = a[1] + t * (b[1] - a[1]);
  out[2] = a[2] + t * (b[2] - a[2]);
  return out;
};

var lerp_1$1 = lerp$1;
/**
 * Returns the maximum coordinates of the given vectors.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.max
 */

var max$1 = (out, a, b) => {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
};

var max_1$1 = max$1;
/**
 * Returns the minimum coordinates of the given vectors.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.min
 */

var min$1 = (out, a, b) => {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
};

var min_1$1 = min$1;
/**
 * Multiply the coordinates of the given vectors (A*B).
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.multiply
 */

var multiply$2 = (out, a, b) => {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
};

var multiply_1$2 = multiply$2;
/**
 * Negates the coordinates of the given vector.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to negate
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.negate
 */

var negate$1 = (out, vector) => {
  out[0] = -vector[0];
  out[1] = -vector[1];
  out[2] = -vector[2];
  return out;
};

var negate_1$1 = negate$1;
/**
 * Normalize the given vector.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to normalize
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.normalize
 */

var normalize$1 = (out, vector) => {
  var x = vector[0];
  var y = vector[1];
  var z = vector[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  return out;
};

var normalize_1$1 = normalize$1;
/**
 * Create a new vector that is orthogonal to the given vector.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector of reference
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.orthogonal
 */

var orthogonal = (out, vector) => {
  var bV = abs_1$1(create_1$a(), vector);
  var b0 = 0 + (bV[0] < bV[1] && bV[0] < bV[2]);
  var b1 = 0 + (bV[1] <= bV[0] && bV[1] < bV[2]);
  var b2 = 0 + (bV[2] <= bV[0] && bV[2] <= bV[1]);
  return cross_1$1(out, vector, [b0, b1, b2]);
};

var orthogonal_1 = orthogonal;
/**
 * Rotate the given vector around the given origin, X axis only.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to rotate
 * @param {vec3} origin - origin of the rotation
 * @param {Number} radians - angle of rotation
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.rotateX
 */

var rotateX$2 = (out, vector, origin, radians) => {
  var p = [];
  var r = []; // translate point to the origin

  p[0] = vector[0] - origin[0];
  p[1] = vector[1] - origin[1];
  p[2] = vector[2] - origin[2]; // perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(radians) - p[2] * Math.sin(radians);
  r[2] = p[1] * Math.sin(radians) + p[2] * Math.cos(radians); // translate to correct position

  out[0] = r[0] + origin[0];
  out[1] = r[1] + origin[1];
  out[2] = r[2] + origin[2];
  return out;
};

var rotateX_1$1 = rotateX$2;
/**
 * Rotate the given vector around the given origin, Y axis only.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to rotate
 * @param {vec3} origin - origin of the rotation
 * @param {Number} radians - angle of rotation
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.rotateY
 */

var rotateY$2 = (out, vector, origin, radians) => {
  var p = [];
  var r = []; // translate point to the origin

  p[0] = vector[0] - origin[0];
  p[1] = vector[1] - origin[1];
  p[2] = vector[2] - origin[2]; // perform rotation

  r[0] = p[2] * Math.sin(radians) + p[0] * Math.cos(radians);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(radians) - p[0] * Math.sin(radians); // translate to correct position

  out[0] = r[0] + origin[0];
  out[1] = r[1] + origin[1];
  out[2] = r[2] + origin[2];
  return out;
};

var rotateY_1$1 = rotateY$2;
/**
 * Rotate the given vector around the given origin, Z axis only.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to rotate
 * @param {vec3} origin - origin of the rotation
 * @param {Number} radians - angle of rotation in radians
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.rotateZ
 */

var rotateZ$3 = (out, vector, origin, radians) => {
  var p = [];
  var r = []; // Translate point to the origin

  p[0] = vector[0] - origin[0];
  p[1] = vector[1] - origin[1]; // perform rotation

  r[0] = p[0] * Math.cos(radians) - p[1] * Math.sin(radians);
  r[1] = p[0] * Math.sin(radians) + p[1] * Math.cos(radians); // translate to correct position

  out[0] = r[0] + origin[0];
  out[1] = r[1] + origin[1];
  out[2] = vector[2];
  return out;
};

var rotateZ_1$1 = rotateZ$3;
/**
 * Scales the coordinates of the given vector by a scalar number.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to scale
 * @param {Number} amount - amount to scale the vector by
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.scale
 */

var scale$3 = (out, vector, amount) => {
  out[0] = vector[0] * amount;
  out[1] = vector[1] * amount;
  out[2] = vector[2] * amount;
  return out;
};

var scale_1$3 = scale$3;
/**
 * Snaps the coordinates of the given vector to the given epsilon.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to snap
 * @param {Number} epsilon - epsilon of precision, less than 0
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.snap
 */

var snap$2 = (out, vector, epsilon) => {
  out[0] = Math.round(vector[0] / epsilon) * epsilon + 0;
  out[1] = Math.round(vector[1] / epsilon) * epsilon + 0;
  out[2] = Math.round(vector[2] / epsilon) * epsilon + 0;
  return out;
};

var snap_1$2 = snap$2;
/**
 * Calculates the squared distance between two vectors.
 *
 * @param {vec3} a - first operand
 * @param {vec3} b - second operand
 * @returns {Number} squared distance
 * @alias module:modeling/maths/vec3.squaredDistance
 */

var squaredDistance$1 = (a, b) => {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
};

var squaredDistance_1$1 = squaredDistance$1;
/**
 * Calculates the squared length of the given vector.
 *
 * @param {vec3} vector - vector to calculate squared length of
 * @returns {Number} squared length
 * @alias module:modeling/maths/vec3.squaredLength
 */

var squaredLength$1 = a => {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
};

var squaredLength_1$1 = squaredLength$1;
/**
 * Subtracts the coordinates of two vectors (A-B).
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} a - minuend vector
 * @param {vec3} b - subtrahend vector
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.subtract
 */

var subtract$6 = (out, a, b) => {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
};

var subtract_1$3 = subtract$6;
/**
 * Convert the given vector to a representative string.
 * @param {vec3} vector - vector of reference
 * @returns {String} string representation
 * @alias module:modeling/maths/vec3.toString
 */

var toString$a = vec => "[".concat(vec[0].toFixed(7), ", ").concat(vec[1].toFixed(7), ", ").concat(vec[2].toFixed(7), "]");

var toString_1$a = toString$a;
/**
 * Transforms the given vector using the given matrix.
 *
 * @param {vec3} out - receiving vector
 * @param {vec3} vector - vector to transform
 * @param {mat4} matrix - transform matrix
 * @returns {vec3} out
 * @alias module:modeling/maths/vec3.transform
 */

var transform$b = (out, vector, matrix) => {
  var x = vector[0];
  var y = vector[1];
  var z = vector[2];
  var w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
  w = w || 1.0;
  out[0] = (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w;
  out[1] = (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w;
  out[2] = (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w;
  return out;
};

var transform_1$b = transform$b;
/**
 * Represents a three dimensional vector.
 * @see {@link vec3} for data structure information.
 * @module modeling/maths/vec3
 */

var vec3$1 = {
  abs: abs_1$1,
  add: add_1$1,
  angle: angle_1,
  clone: clone_1$9,
  copy: copy_1$4,
  create: create_1$a,
  cross: cross_1$1,
  distance: distance_1$1,
  divide: divide_1$1,
  dot: dot_1$2,
  equals: equals_1$6,
  fromScalar: fromScalar_1$2,
  fromValues: fromValues_1$3,
  fromVec2: fromVec2,
  length: length_1$1,
  lerp: lerp_1$1,
  max: max_1$1,
  min: min_1$1,
  multiply: multiply_1$2,
  negate: negate_1$1,
  normalize: normalize_1$1,
  orthogonal: orthogonal_1,
  rotateX: rotateX_1$1,
  rotateY: rotateY_1$1,
  rotateZ: rotateZ_1$1,
  scale: scale_1$3,
  snap: snap_1$2,
  squaredDistance: squaredDistance_1$1,
  squaredLength: squaredLength_1$1,
  subtract: subtract_1$3,
  toString: toString_1$a,
  transform: transform_1$b
};
/**
 * Create a matrix that rotates the given source to the given target vector.
 *
 * Each vector must be a directional vector with a length greater then zero.
 * @see https://gist.github.com/kevinmoran/b45980723e53edeb8a5a43c49f134724
 * @param {mat4} out - receiving matrix
 * @param {vec3} source - source vector
 * @param {vec3} target - target vector
 * @returns {mat4} a new matrix
 * @alias module:modeling/maths/mat4.fromVectorRotation
 * @example
 * let matrix = fromVectorRotation(mat4.create(), [1, 2, 2], [-3, 3, 12])
 */

var fromVectorRotation = (out, source, target) => {
  var sourceNormal = vec3$1.normalize(vec3$1.create(), source);
  var targetNormal = vec3$1.normalize(vec3$1.create(), target);
  var axis = vec3$1.cross(vec3$1.create(), targetNormal, sourceNormal);
  var cosA = vec3$1.dot(targetNormal, sourceNormal);
  if (cosA === -1.0) return fromRotation_1(out, Math.PI, vec3$1.orthogonal(axis, sourceNormal));
  var k = 1 / (1 + cosA);
  out[0] = axis[0] * axis[0] * k + cosA;
  out[1] = axis[1] * axis[0] * k - axis[2];
  out[2] = axis[2] * axis[0] * k + axis[1];
  out[3] = 0;
  out[4] = axis[0] * axis[1] * k + axis[2];
  out[5] = axis[1] * axis[1] * k + cosA;
  out[6] = axis[2] * axis[1] * k - axis[0];
  out[7] = 0;
  out[8] = axis[0] * axis[2] * k - axis[1];
  out[9] = axis[1] * axis[2] * k + axis[0];
  out[10] = axis[2] * axis[2] * k + cosA;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var fromVectorRotation_1 = fromVectorRotation;
/**
 * Creates a matrix from the given angle around the X axis.
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest)
 *     mat4.rotateX(dest, dest, radians)
 *
 * @param {mat4} out - receiving matrix
 * @param {Number} radians - angle to rotate the matrix by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.fromXRotation
 * @example
 * let matrix = fromXRotation(create(), Math.PI / 2)
 */

var fromXRotation = (out, radians) => {
  var s = Math.sin(radians);
  var c = Math.cos(radians); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var fromXRotation_1 = fromXRotation;
/**
 * Creates a matrix from the given angle around the Y axis.
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest)
 *     mat4.rotateY(dest, dest, radians)
 *
 * @param {mat4} out - receiving matrix
 * @param {Number} radians - angle to rotate the matrix by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.fromYRotation
 * @example
 * let matrix = fromYRotation(create(), Math.PI / 2)
 */

var fromYRotation = (out, radians) => {
  var s = Math.sin(radians);
  var c = Math.cos(radians); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var fromYRotation_1 = fromYRotation;
/**
 * Creates a matrix from the given angle around the Z axis.
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest)
 *     mat4.rotateZ(dest, dest, radians)
 *
 * @param {mat4} out - receiving matrix
 * @param {Number} radians - angle to rotate the matrix by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.fromZRotation
 * @example
 * let matrix = fromZRotation(create(), Math.PI / 2)
 */

var fromZRotation = (out, radians) => {
  var s = Math.sin(radians);
  var c = Math.cos(radians); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
};

var fromZRotation_1 = fromZRotation;
/**
 * Determine whether the given matris is the identity transform.
 * This is equivalent to (but much faster than):
 *
 *     mat4.equals(mat4.create(), matrix)
 *
 * @param {mat4} matrix - the matrix
 * @returns {Boolean} true if matrix is the identity transform
 * @alias module:modeling/maths/mat4.isIdentity
 * @example
 * if (mat4.isIdentity(mymatrix)) ...
 */

var isIdentity = matrix => matrix[0] === 1 && matrix[1] === 0 && matrix[2] === 0 && matrix[3] === 0 && matrix[4] === 0 && matrix[5] === 1 && matrix[6] === 0 && matrix[7] === 0 && matrix[8] === 0 && matrix[9] === 0 && matrix[10] === 1 && matrix[11] === 0 && matrix[12] === 0 && matrix[13] === 0 && matrix[14] === 0 && matrix[15] === 1;

var isIdentity_1 = isIdentity;
/**
 * Determine whether the given matrix is translate+scale.
 * this code returns true for 180 rotation as it can be interpreted as scale (-1,-1)
 *
 * this method is primarily useful for measureBoundingBox
 *
 */

var isOnlyTransformScale = matrix => // TODO check if it is worth the effort to add recognition of 90 deg rotations
isZero(matrix[1]) && isZero(matrix[2]) && isZero(matrix[3]) && isZero(matrix[4]) && isZero(matrix[6]) && isZero(matrix[7]) && isZero(matrix[8]) && isZero(matrix[9]) && isZero(matrix[11]) && matrix[15] === 1;

var isZero = num => Math.abs(num) < Number.EPSILON;

var isOnlyTransformScale_1 = isOnlyTransformScale;
/**
 * Determine whether the given matrix is a mirroring transformation.
 *
 * @param {mat4} matrix - matrix of reference
 * @returns {Boolean} true if matrix is a mirroring transformation
 * @alias module:modeling/maths/mat4.isMirroring
 */

var isMirroring = mat => {
  var u = fromValues_1$3(mat[0], mat[4], mat[8]);
  var v = fromValues_1$3(mat[1], mat[5], mat[9]);
  var w = fromValues_1$3(mat[2], mat[6], mat[10]); // for a true orthogonal, non-mirrored base, u.cross(v) == w
  // If they have an opposite direction then we are mirroring

  var mirrorvalue = dot_1$2(cross_1$1(u, u, v), w);
  var ismirror = mirrorvalue < 0;
  return ismirror;
};

var isMirroring_1 = isMirroring;
/**
 * Create a matrix for mirroring about the given plane.
 *
 * @param {mat4} out - receiving matrix
 * @param {vec4} plane - plane of which to mirror the matrix
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.mirrorByPlane
 */

var mirrorByPlane = (out, plane) => {
  var [nx, ny, nz, w] = plane;
  out[0] = 1.0 - 2.0 * nx * nx;
  out[1] = -2.0 * ny * nx;
  out[2] = -2.0 * nz * nx;
  out[3] = 0;
  out[4] = -2.0 * nx * ny;
  out[5] = 1.0 - 2.0 * ny * ny;
  out[6] = -2.0 * nz * ny;
  out[7] = 0;
  out[8] = -2.0 * nx * nz;
  out[9] = -2.0 * ny * nz;
  out[10] = 1.0 - 2.0 * nz * nz;
  out[11] = 0;
  out[12] = 2.0 * nx * w;
  out[13] = 2.0 * ny * w;
  out[14] = 2.0 * nz * w;
  out[15] = 1;
  return out;
};

var mirrorByPlane_1 = mirrorByPlane;
/**
 * Multiplies the two matrices.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} a - first operand
 * @param {mat4} b - second operand
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.multiply
 */

var multiply$1 = (out, a, b) => {
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  var a30 = a[12];
  var a31 = a[13];
  var a32 = a[14];
  var a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0];
  var b1 = b[1];
  var b2 = b[2];
  var b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
};

var multiply_1$1 = multiply$1;
/**
 * Rotates a matrix by the given angle about the given axis.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} matrix - matrix to rotate
 * @param {Number} radians - angle to rotate the matrix by
 * @param {vec3} axis - axis to rotate around
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.rotate
 */

var rotate$3 = (out, matrix, radians, axis) => {
  var [x, y, z] = axis;
  var len = Math.sqrt(x * x + y * y + z * z);

  if (Math.abs(len) < 0.000001) {
    // axis is 0,0,0 or almost
    return copy_1$5(out, matrix);
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  var t = 1 - c;
  var a00 = matrix[0];
  var a01 = matrix[1];
  var a02 = matrix[2];
  var a03 = matrix[3];
  var a10 = matrix[4];
  var a11 = matrix[5];
  var a12 = matrix[6];
  var a13 = matrix[7];
  var a20 = matrix[8];
  var a21 = matrix[9];
  var a22 = matrix[10];
  var a23 = matrix[11]; // Construct the elements of the rotation matrix

  var b00 = x * x * t + c;
  var b01 = y * x * t + z * s;
  var b02 = z * x * t - y * s;
  var b10 = x * y * t - z * s;
  var b11 = y * y * t + c;
  var b12 = z * y * t + x * s;
  var b20 = x * z * t + y * s;
  var b21 = y * z * t - x * s;
  var b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (matrix !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = matrix[12];
    out[13] = matrix[13];
    out[14] = matrix[14];
    out[15] = matrix[15];
  }

  return out;
};

var rotate_1$2 = rotate$3;
/**
 * Rotates a matrix by the given angle around the X axis.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} matrix - matrix to rotate
 * @param {Number} radians - angle to rotate the matrix by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.rotateX
 */

var rotateX$1 = (out, matrix, radians) => {
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  var a10 = matrix[4];
  var a11 = matrix[5];
  var a12 = matrix[6];
  var a13 = matrix[7];
  var a20 = matrix[8];
  var a21 = matrix[9];
  var a22 = matrix[10];
  var a23 = matrix[11];

  if (matrix !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = matrix[0];
    out[1] = matrix[1];
    out[2] = matrix[2];
    out[3] = matrix[3];
    out[12] = matrix[12];
    out[13] = matrix[13];
    out[14] = matrix[14];
    out[15] = matrix[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
};

var rotateX_1 = rotateX$1;
/**
 * Rotates a matrix by the given angle around the Y axis.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} matrix - matrix to rotate
 * @param {Number} radians - angle to rotate the matrix by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.rotateY
 */

var rotateY$1 = (out, matrix, radians) => {
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  var a00 = matrix[0];
  var a01 = matrix[1];
  var a02 = matrix[2];
  var a03 = matrix[3];
  var a20 = matrix[8];
  var a21 = matrix[9];
  var a22 = matrix[10];
  var a23 = matrix[11];

  if (matrix !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = matrix[4];
    out[5] = matrix[5];
    out[6] = matrix[6];
    out[7] = matrix[7];
    out[12] = matrix[12];
    out[13] = matrix[13];
    out[14] = matrix[14];
    out[15] = matrix[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
};

var rotateY_1 = rotateY$1;
/**
 * Rotates a matrix by the given angle around the Z axis.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} matrix - matrix to rotate
 * @param {Number} radians - angle to rotate the matrix by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.rotateZ
 */

var rotateZ$2 = (out, matrix, radians) => {
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  var a00 = matrix[0];
  var a01 = matrix[1];
  var a02 = matrix[2];
  var a03 = matrix[3];
  var a10 = matrix[4];
  var a11 = matrix[5];
  var a12 = matrix[6];
  var a13 = matrix[7];

  if (matrix !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = matrix[8];
    out[9] = matrix[9];
    out[10] = matrix[10];
    out[11] = matrix[11];
    out[12] = matrix[12];
    out[13] = matrix[13];
    out[14] = matrix[14];
    out[15] = matrix[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
};

var rotateZ_1 = rotateZ$2;
/**
 * Scales the matrix by the given dimensions.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} matrix - matrix to scale
 * @param {vec3} dimensions - dimensions to scale the matrix by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.scale
 */

var scale$2 = (out, matrix, dimensions) => {
  var x = dimensions[0];
  var y = dimensions[1];
  var z = dimensions[2];
  out[0] = matrix[0] * x;
  out[1] = matrix[1] * x;
  out[2] = matrix[2] * x;
  out[3] = matrix[3] * x;
  out[4] = matrix[4] * y;
  out[5] = matrix[5] * y;
  out[6] = matrix[6] * y;
  out[7] = matrix[7] * y;
  out[8] = matrix[8] * z;
  out[9] = matrix[9] * z;
  out[10] = matrix[10] * z;
  out[11] = matrix[11] * z;
  out[12] = matrix[12];
  out[13] = matrix[13];
  out[14] = matrix[14];
  out[15] = matrix[15];
  return out;
};

var scale_1$2 = scale$2;
/**
 * Subtracts matrix b from matrix a. (A-B)
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} a - first operand
 * @param {mat4} b - second operand
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.subtract
 */

var subtract$5 = (out, a, b) => {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
};

var subtract_1$2 = subtract$5;
/**
 * Return a string representing the given matrix.
 *
 * @param {mat4} matrix - matrix of reference
 * @returns {String} string representation
 * @alias module:modeling/maths/mat4.toString
 */

var toString$9 = mat => "[".concat(mat[0].toFixed(7), ", ").concat(mat[1].toFixed(7), ", ").concat(mat[2].toFixed(7), ", ").concat(mat[3].toFixed(7), ", ").concat(mat[4].toFixed(7), ", ").concat(mat[5].toFixed(7), ", ").concat(mat[6].toFixed(7), ", ").concat(mat[7].toFixed(7), ", ").concat(mat[8].toFixed(7), ", ").concat(mat[9].toFixed(7), ", ").concat(mat[10].toFixed(7), ", ").concat(mat[11].toFixed(7), ", ").concat(mat[12].toFixed(7), ", ").concat(mat[13].toFixed(7), ", ").concat(mat[14].toFixed(7), ", ").concat(mat[15].toFixed(7), "]");

var toString_1$9 = toString$9;
/**
 * Translate the matrix by the given offset vector.
 *
 * @param {mat4} out - receiving matrix
 * @param {mat4} matrix - matrix to translate
 * @param {vec3} offsets - offset vector to translate by
 * @returns {mat4} out
 * @alias module:modeling/maths/mat4.translate
 */

var translate$5 = (out, matrix, offsets) => {
  var x = offsets[0];
  var y = offsets[1];
  var z = offsets[2];
  var a00;
  var a01;
  var a02;
  var a03;
  var a10;
  var a11;
  var a12;
  var a13;
  var a20;
  var a21;
  var a22;
  var a23;

  if (matrix === out) {
    // 0-11 assignments are unnecessary
    out[12] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12];
    out[13] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13];
    out[14] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14];
    out[15] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15];
  } else {
    a00 = matrix[0];
    a01 = matrix[1];
    a02 = matrix[2];
    a03 = matrix[3];
    a10 = matrix[4];
    a11 = matrix[5];
    a12 = matrix[6];
    a13 = matrix[7];
    a20 = matrix[8];
    a21 = matrix[9];
    a22 = matrix[10];
    a23 = matrix[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + matrix[12];
    out[13] = a01 * x + a11 * y + a21 * z + matrix[13];
    out[14] = a02 * x + a12 * y + a22 * z + matrix[14];
    out[15] = a03 * x + a13 * y + a23 * z + matrix[15];
  }

  return out;
};

var translate_1$1 = translate$5;
/**
 * Represents a 4x4 matrix which is column-major (when typed out it looks row-major).
 * @see {@link mat4} for data structure information.
 * @module modeling/maths/mat4
 */

var mat4 = {
  add: add_1$2,
  clone: clone_1$a,
  copy: copy_1$5,
  create: create_1$b,
  invert: invert_1$2,
  equals: equals_1$7,
  fromRotation: fromRotation_1,
  fromScaling: fromScaling_1,
  fromTaitBryanRotation: fromTaitBryanRotation_1,
  fromTranslation: fromTranslation_1,
  fromValues: fromValues_1$4,
  fromVectorRotation: fromVectorRotation_1,
  fromXRotation: fromXRotation_1,
  fromYRotation: fromYRotation_1,
  fromZRotation: fromZRotation_1,
  identity: identity_1,
  isIdentity: isIdentity_1,
  isOnlyTransformScale: isOnlyTransformScale_1,
  isMirroring: isMirroring_1,
  mirrorByPlane: mirrorByPlane_1,
  multiply: multiply_1$1,
  rotate: rotate_1$2,
  rotateX: rotateX_1,
  rotateY: rotateY_1,
  rotateZ: rotateZ_1,
  scale: scale_1$2,
  subtract: subtract_1$2,
  toString: toString_1$9,
  translate: translate_1$1
};
/**
 * Calculates the absolute coordinates of the given vector.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - vector of reference
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.abs
 */

var abs = (out, vector) => {
  out[0] = Math.abs(vector[0]);
  out[1] = Math.abs(vector[1]);
  return out;
};

var abs_1 = abs;
/**
 * Adds the coordinates of two vectors (A+B).
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.add
 */

var add = (out, a, b) => {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
};

var add_1 = add;
/**
 * Calculate the angle of the given vector.
 *
 * @param {vec2} vector - vector of reference
 * @returns {Number} angle in radians
 * @alias module:modeling/maths/vec2.angleRadians
 */

var angleRadians = vector => Math.atan2(vector[1], vector[0]); // y=sin, x=cos


var angleRadians_1 = angleRadians;
var angle = angleRadians_1;
/**
 * Calculate the angle of the given vector.
 *
 * @param {vec2} vector - vector of reference
 * @returns {Number} angle in degrees
 * @alias module:modeling/maths/vec2.angleDegrees
 */

var angleDegrees = vector => angleRadians_1(vector) * 57.29577951308232;

var angleDegrees_1 = angleDegrees;
/**
 * Represents a two dimensional vector.
 * See fromValues().
 * @typedef {Array} vec2
 */

/**
 * Creates a new vector, intialized to [0,0].
 *
 * @returns {vec2} a new vector
 * @alias module:modeling/maths/vec2.create
 */

var create$9 = () => [0, 0];

var create_1$9 = create$9;
/**
 * Create a clone of the given vector.
 *
 * @param {vec2} vector - vector to clone
 * @returns {vec2} a new vector
 * @alias module:modeling/maths/vec2.clone
 */

var clone$8 = vector => {
  var out = create_1$9();
  out[0] = vector[0];
  out[1] = vector[1];
  return out;
};

var clone_1$8 = clone$8;
/**
 * Create a copy of the given vector.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - source vector
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.copy
 */

var copy$3 = (out, vector) => {
  out[0] = vector[0];
  out[1] = vector[1];
  return out;
};

var copy_1$3 = copy$3;
/**
 * Computes the cross product (3D) of two vectors.
 *
 * @param {vec3} out - receiving vector (3D)
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {vec3} out
 * @alias module:modeling/maths/vec2.cross
 */

var cross = (out, a, b) => {
  out[0] = 0;
  out[1] = 0;
  out[2] = a[0] * b[1] - a[1] * b[0];
  return out;
};

var cross_1 = cross;
/**
 * Calculates the distance between two vectors.
 *
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {Number} distance
 * @alias module:modeling/maths/vec2.distance
 */

var distance = (a, b) => {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  return Math.hypot(x, y);
};

var distance_1 = distance;
/**
 * Divides the coordinates of two vectors (A/B).
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.divide
 */

var divide = (out, a, b) => {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

var divide_1 = divide;
/**
 * Calculates the dot product of two vectors.
 *
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {Number} dot product
 * @alias module:modeling/maths/vec2.dot
 */

var dot$1 = (a, b) => a[0] * b[0] + a[1] * b[1];

var dot_1$1 = dot$1;
/**
 * Compare the given vectors for equality.
 *
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {Boolean} true if a and b are equal
 * @alias module:modeling/maths/vec2.equals
 */

var equals$6 = (a, b) => a[0] === b[0] && a[1] === b[1];

var equals_1$5 = equals$6;
/**
 * Create a new vector in the direction of the given angle.
 *
 * @param {vec2} out - receiving vector
 * @param {Number} radians - angle in radians
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.fromAngleRadians
 */

var fromAngleRadians = (out, radians) => {
  out[0] = Math.cos(radians);
  out[1] = Math.sin(radians);
  return out;
};

var fromAngleRadians_1 = fromAngleRadians;
/**
 * Create a new vector in the direction of the given angle.
 *
 * @param {vec2} out - receiving vector
 * @param {Number} angle - angle in degrees
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.fromAngleDegrees
 */

var fromAngleDegrees = (out, degrees) => fromAngleRadians_1(out, Math.PI * degrees / 180);

var fromAngleDegrees_1 = fromAngleDegrees;
/**
 * Create a vector from a single scalar value.
 *
 * @param {vec2} out - receiving vector
 * @param {Number} scalar - the scalar value
 * @returns {Vec2} out
 * @alias module:modeling/maths/vec2.fromScalar
 */

var fromScalar$1 = (out, scalar) => {
  out[0] = scalar;
  out[1] = scalar;
  return out;
};

var fromScalar_1$1 = fromScalar$1;
/**
 * Creates a new vector initialized with the given values.
 *
 * @param {Number} x - X coordinate
 * @param {Number} y - Y coordinate
 * @returns {vec2} a new vector
 * @alias module:modeling/maths/vec2.fromValues
 */

var fromValues$2 = (x, y) => {
  var out = create_1$9();
  out[0] = x;
  out[1] = y;
  return out;
};

var fromValues_1$2 = fromValues$2;
/**
 * Calculates the length of the given vector.
 *
 * @param {vec2} vector - vector of reference
 * @returns {Number} length
 * @alias module:modeling/maths/vec2.length
 */

var length = a => Math.hypot(a[0], a[1]);

var length_1 = length;
/**
 * Performs a linear interpolation between two vectors.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @param {Number} t - interpolation amount between the two vectors
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.lerp
 */

var lerp = (out, a, b, t) => {
  var ax = a[0];
  var ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

var lerp_1 = lerp;
/**
 * Returns the maximum coordinates of two vectors.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.max
 */

var max = (out, a, b) => {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

var max_1 = max;
/**
 * Returns the minimum coordinates of two vectors.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.min
 */

var min = (out, a, b) => {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

var min_1 = min;
/**
 * Multiplies the coordinates of two vectors (A*B).
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.multiply
 */

var multiply = (out, a, b) => {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

var multiply_1 = multiply;
/**
 * Negates the coordinates of the given vector.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - vector to negate
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.negate
 */

var negate = (out, vector) => {
  out[0] = -vector[0];
  out[1] = -vector[1];
  return out;
};

var negate_1 = negate;
/**
 * Rotates the given vector by the given angle.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - vector to rotate
 * @param {vec2} origin - origin of the rotation
 * @param {Number} radians - angle of rotation (radians)
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.rotate
 */

var rotate$2 = (out, vector, origin, radians) => {
  var x = vector[0] - origin[0];
  var y = vector[1] - origin[1];
  var c = Math.cos(radians);
  var s = Math.sin(radians);
  out[0] = x * c - y * s + origin[0];
  out[1] = x * s + y * c + origin[1];
  return out;
};

var rotate_1$1 = rotate$2;
/**
 * Calculates the normal of the given vector.
 * The normal value is the given vector rotated 90 degress.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - given value
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.normal
 */

var normal = (out, vector) => rotate_1$1(out, vector, create_1$9(), Math.PI / 2);

var normal_1 = normal;
/**
 * Normalize the given vector.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - vector to normalize
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.normalize
 */

var normalize = (out, vector) => {
  var x = vector[0];
  var y = vector[1];
  var len = x * x + y * y;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  return out;
}; // old this.dividedBy(this.length())


var normalize_1 = normalize;
/**
 * Scales the coordinates of the given vector.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - vector to scale
 * @param {Number} amount - amount to scale
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.scale
 */

var scale$1 = (out, vector, amount) => {
  out[0] = vector[0] * amount;
  out[1] = vector[1] * amount;
  return out;
};

var scale_1$1 = scale$1;
/**
 * Snaps the coordinates of the given vector to the given epsilon.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - vector to snap
 * @param {Number} epsilon - epsilon of precision, less than 0
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.snap
 */

var snap$1 = (out, vector, epsilon) => {
  out[0] = Math.round(vector[0] / epsilon) * epsilon + 0;
  out[1] = Math.round(vector[1] / epsilon) * epsilon + 0;
  return out;
};

var snap_1$1 = snap$1;
/**
 * Calculates the squared distance between the given vectors.
 *
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {Number} squared distance
 * @alias module:modeling/maths/vec2.squaredDistance
 */

var squaredDistance = (a, b) => {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  return x * x + y * y;
};

var squaredDistance_1 = squaredDistance;
/**
 * Calculates the squared length of the given vector.
 *
 * @param {vec2} vector - vector of reference
 * @returns {Number} squared length
 * @alias module:modeling/maths/vec2.squaredLength
 */

var squaredLength = a => {
  var x = a[0];
  var y = a[1];
  return x * x + y * y;
};

var squaredLength_1 = squaredLength;
/**
 * Subtracts the coordinates of two vectors (A-B).
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} a - first operand
 * @param {vec2} b - second operand
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.subtract
 */

var subtract$4 = (out, a, b) => {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
};

var subtract_1$1 = subtract$4;
/**
 * Convert the given vector to a representative string.
 *
 * @param {vec2} vector - vector of reference
 * @returns {String} string representation
 * @alias module:modeling/maths/vec2.toString
 */

var toString$8 = vec => "[".concat(vec[0].toFixed(7), ", ").concat(vec[1].toFixed(7), "]");

var toString_1$8 = toString$8;
/**
 * Transforms the given vector using the given matrix.
 *
 * @param {vec2} out - receiving vector
 * @param {vec2} vector - vector to transform
 * @param {mat4} matrix - matrix to transform with
 * @returns {vec2} out
 * @alias module:modeling/maths/vec2.transform
 */

var transform$a = (out, vector, matrix) => {
  var x = vector[0];
  var y = vector[1];
  out[0] = matrix[0] * x + matrix[4] * y + matrix[12];
  out[1] = matrix[1] * x + matrix[5] * y + matrix[13];
  return out;
};

var transform_1$a = transform$a;
/**
 * Represents a two dimensional vector.
 * @module modeling/maths/vec2
 */

var vec2 = {
  abs: abs_1,
  add: add_1,
  angle: angle,
  angleDegrees: angleDegrees_1,
  angleRadians: angleRadians_1,
  clone: clone_1$8,
  copy: copy_1$3,
  create: create_1$9,
  cross: cross_1,
  distance: distance_1,
  divide: divide_1,
  dot: dot_1$1,
  equals: equals_1$5,
  fromAngleDegrees: fromAngleDegrees_1,
  fromAngleRadians: fromAngleRadians_1,
  fromScalar: fromScalar_1$1,
  fromValues: fromValues_1$2,
  length: length_1,
  lerp: lerp_1,
  max: max_1,
  min: min_1,
  multiply: multiply_1,
  negate: negate_1,
  normal: normal_1,
  normalize: normalize_1,
  rotate: rotate_1$1,
  scale: scale_1$1,
  snap: snap_1$1,
  squaredDistance: squaredDistance_1,
  squaredLength: squaredLength_1,
  subtract: subtract_1$1,
  toString: toString_1$8,
  transform: transform_1$a
};
/**
 * Represents a 2D geometry consisting of a list of sides.
 * @typedef {Object} geom2
 * @property {Array} sides - list of sides, each side containing two points
 * @property {mat4} transforms - transforms to apply to the sides, see transform()
 */

/**
 * Create a new 2D geometry composed of unordered sides (two connected points).
 * @param {Array} [sides] - list of sides where each side is an array of two points
 * @returns {geom2} a new geometry
 * @alias module:modeling/geometries/geom2.create
 */

var create$8 = sides => {
  if (sides === undefined) {
    sides = []; // empty contents
  }

  return {
    sides: sides,
    transforms: mat4.create()
  };
};

var create_1$8 = create$8;
/**
 * Performs a deep clone of the given geometry.
 * @param {geom2} geometry - the geometry to clone
 * @returns {geom2} new geometry
 * @alias module:modeling/geometries/geom2.clone
 */

var clone$7 = geometry => {
  var out = create_1$8();
  out.sides = geometry.sides.map(side => [vec2.clone(side[0]), vec2.clone(side[1])]);
  out.transforms = mat4.clone(geometry.transforms);
  return out;
};

var clone_1$7 = clone$7;
/**
 * Create a new 2D geometry from the given points.
 * The direction (rotation) of the points is not relevant,
 * as the points can define a convex or a concave polygon.
 * The geometry must not self intersect, i.e. the sides cannot cross.
 * @param {Array} points - list of points in 2D space
 * @returns {geom2} a new geometry
 * @alias module:modeling/geometries/geom2.fromPoints
 */

var fromPoints$7 = points => {
  if (!Array.isArray(points)) {
    throw new Error('the given points must be an array');
  }

  var length = points.length;

  if (length < 3) {
    throw new Error('the given points must define a closed geometry with three or more points');
  } // adjust length if the given points are closed by the same point


  if (vec2.equals(points[0], points[length - 1])) --length;
  var sides = [];
  var prevpoint = points[length - 1];

  for (var i = 0; i < length; i++) {
    var point = points[i];
    sides.push([vec2.clone(prevpoint), vec2.clone(point)]);
    prevpoint = point;
  }

  return create_1$8(sides);
};

var fromPoints_1$7 = fromPoints$7;
/**
 * Create a new 2D geometry from the given compact binary data.
 * @param {Array} data - compact binary data
 * @returns {geom2} a new geometry
 * @alias module:modeling/geometries/geom2.fromCompactBinary
 */

var fromCompactBinary$2 = data => {
  if (data[0] !== 0) throw new Error('invalid compact binary data');
  var created = create_1$8();
  created.transforms = mat4.clone(data.slice(1, 17));

  for (var i = 21; i < data.length; i += 4) {
    var point0 = vec2.fromValues(data[i + 0], data[i + 1]);
    var point1 = vec2.fromValues(data[i + 2], data[i + 3]);
    created.sides.push([point0, point1]);
  } // transfer known properties, i.e. color


  if (data[17] >= 0) {
    created.color = [data[17], data[18], data[19], data[20]];
  } // TODO: how about custom properties or fields ?


  return created;
};

var fromCompactBinary_1$2 = fromCompactBinary$2;
/**
 * Determin if the given object is a 2D geometry.
 * @param {Object} object - the object to interogate
 * @returns {Boolean} true, if the object matches a geom2 based object
 * @alias module:modeling/geometries/geom2.isA
 */

var isA$4 = object => {
  if (object && typeof object === 'object') {
    if ('sides' in object && 'transforms' in object) {
      if (Array.isArray(object.sides) && 'length' in object.transforms) {
        return true;
      }
    }
  }

  return false;
};

var isA_1$4 = isA$4;
/*
 * Apply the transforms of the given geometry.
 * NOTE: This function must be called BEFORE exposing any data. See toSides().
 * @param {geom2} geometry - the geometry to transform
 * @returns {geom2} the given geometry
 *
 * @example
 * geometry = applyTransforms(geometry)
 */

var applyTransforms$2 = geometry => {
  if (mat4.isIdentity(geometry.transforms)) return geometry; // apply transforms to each side

  geometry.sides = geometry.sides.map(side => {
    var p0 = vec2.transform(vec2.create(), side[0], geometry.transforms);
    var p1 = vec2.transform(vec2.create(), side[1], geometry.transforms);
    return [p0, p1];
  });
  geometry.transforms = mat4.create();
  return geometry;
};

var applyTransforms_1$2 = applyTransforms$2;
/**
 * Produces an array of sides from the given geometry.
 * The returned array should not be modified as the data is shared with the geometry.
 * NOTE: The sides returned do NOT define an order. Use toOutlines() for ordered points.
 * @param {geom2} geometry - the geometry
 * @returns {Array} an array of sides
 * @alias module:modeling/geometries/geom2.toSides
 *
 * @example
 * let sharedsides = toSides(geometry)
 */

var toSides = geometry => applyTransforms_1$2(geometry).sides;

var toSides_1 = toSides;
/**
 * Reverses the given geometry so that the sides are flipped in the opposite order.
 * This swaps the left (interior) and right (exterior) edges.
 * @param {geom2} geometry - the geometry to reverse
 * @returns {geom2} the new reversed geometry
 * @alias module:modeling/geometries/geom2.reverse
 *
 * @example
 * let newgeometry = reverse(geometry)
 */

var reverse$4 = geometry => {
  var oldsides = toSides_1(geometry);
  var newsides = oldsides.map(side => [side[1], side[0]]);
  newsides.reverse(); // is this required?

  return create_1$8(newsides);
};

var reverse_1$4 = reverse$4;
/*
 * Create a list of edges which SHARE vertices.
 * This allows the edges to be traversed in order.
 */

var toEdges$1 = sides => {
  var uniquevertices = [];

  var getUniqueVertex = vertex => {
    var i = uniquevertices.findIndex(v => vec2.equals(v, vertex));

    if (i < 0) {
      uniquevertices.push(vertex);
      return vertex;
    }

    return uniquevertices[i];
  };

  var edges = [];
  sides.forEach(side => {
    edges.push([getUniqueVertex(side[0]), getUniqueVertex(side[1])]);
  });
  return edges;
};
/**
 * Create the outline(s) of the given geometry.
 * @param  {geom2} geometry
 * @returns {Array} an array of outlines, where each outline is an array of ordered points
 * @alias module:modeling/geometries/geom2.toOutlines
 *
 * @example
 * let geometry = subtract(rectangle({size: [5, 5]}), rectangle({size: [3, 3]}))
 * let outlines = toOutlines(geometry) // returns two outlines
 */


var toOutlines = geometry => {
  var vertexMap = new Map();
  var edges = toEdges$1(toSides_1(geometry));
  edges.forEach(edge => {
    if (!vertexMap.has(edge[0])) {
      vertexMap.set(edge[0], []);
    }

    var sideslist = vertexMap.get(edge[0]);
    sideslist.push(edge);
  });
  var outlines = [];

  while (true) {
    var startside = void 0;

    for (var [vertex, _edges] of vertexMap) {
      startside = _edges.shift();

      if (!startside) {
        vertexMap.delete(vertex);
        continue;
      }

      break;
    }

    if (startside === undefined) break; // all starting sides have been visited

    var connectedVertexPoints = [];
    var startvertex = startside[0];
    var v0 = vec2.create();

    while (true) {
      connectedVertexPoints.push(startside[0]);
      var nextvertex = startside[1];
      if (nextvertex === startvertex) break; // the outline has been closed

      var nextpossiblesides = vertexMap.get(nextvertex);

      if (!nextpossiblesides) {
        throw new Error('the given geometry is not closed. verify proper construction');
      }

      var nextsideindex = -1;

      if (nextpossiblesides.length === 1) {
        nextsideindex = 0;
      } else {
        // more than one side starting at the same vertex
        var bestangle = void 0;
        var startangle = vec2.angleDegrees(vec2.subtract(v0, startside[1], startside[0]));

        for (var sideindex = 0; sideindex < nextpossiblesides.length; sideindex++) {
          var nextpossibleside = nextpossiblesides[sideindex];
          var nextangle = vec2.angleDegrees(vec2.subtract(v0, nextpossibleside[1], nextpossibleside[0]));
          var angledif = nextangle - startangle;
          if (angledif < -180) angledif += 360;
          if (angledif >= 180) angledif -= 360;

          if (nextsideindex < 0 || angledif > bestangle) {
            nextsideindex = sideindex;
            bestangle = angledif;
          }
        }
      }

      var nextside = nextpossiblesides[nextsideindex];
      nextpossiblesides.splice(nextsideindex, 1); // remove side from list

      if (nextpossiblesides.length === 0) {
        vertexMap.delete(nextvertex);
      }

      startside = nextside;
    } // inner loop
    // due to the logic of fromPoints()
    // move the first point to the last


    if (connectedVertexPoints.length > 0) {
      connectedVertexPoints.push(connectedVertexPoints.shift());
    }

    outlines.push(connectedVertexPoints);
  } // outer loop


  vertexMap.clear();
  return outlines;
};

var toOutlines_1 = toOutlines;
/**
 * Produces an array of points from the given geometry.
 * The returned array should not be modified as the points are shared with the geometry.
 * NOTE: The points returned do NOT define an order. Use toOutlines() for ordered points.
 * @param {geom2} geometry - the geometry
 * @returns {Array} an array of points
 * @alias module:modeling/geometries/geom2.toPoints
 *
 * @example
 * let sharedpoints = toPoints(geometry)
 */

var toPoints$3 = geometry => {
  var sides = toSides_1(geometry);
  var points = sides.map(side => side[0]); // due to the logic of fromPoints()
  // move the first point to the last

  if (points.length > 0) {
    points.push(points.shift());
  }

  return points;
};

var toPoints_1$3 = toPoints$3;
/**
 * Create a string representing the contents of the given geometry.
 * @param {geom2} geometry - the geometry
 * @returns {String} a representive string
 * @alias module:modeling/geometries/geom2.toString
 *
 * @example
 * console.out(toString(geometry))
 */

var toString$7 = geometry => {
  var sides = toSides_1(geometry);
  var result = 'geom2 (' + sides.length + ' sides):\n[\n';
  sides.forEach(side => {
    result += '  [' + vec2.toString(side[0]) + ', ' + vec2.toString(side[1]) + ']\n';
  });
  result += ']\n';
  return result;
};

var toString_1$7 = toString$7;
/**
 * Produces a compact binary representation from the given geometry.
 * @param {geom2} geometry - the geometry
 * @returns {TypedArray} compact binary representation
 * @alias module:modeling/geometries/geom2.toCompactBinary
 */

var toCompactBinary$2 = geom => {
  var sides = geom.sides;
  var transforms = geom.transforms;
  var color = [-1, -1, -1, -1];
  if (geom.color) color = geom.color; // FIXME why Float32Array?

  var compacted = new Float32Array(1 + 16 + 4 + sides.length * 4); // type + transforms + color + sides data

  compacted[0] = 0; // type code: 0 => geom2, 1 => geom3 , 2 => path2

  compacted[1] = transforms[0];
  compacted[2] = transforms[1];
  compacted[3] = transforms[2];
  compacted[4] = transforms[3];
  compacted[5] = transforms[4];
  compacted[6] = transforms[5];
  compacted[7] = transforms[6];
  compacted[8] = transforms[7];
  compacted[9] = transforms[8];
  compacted[10] = transforms[9];
  compacted[11] = transforms[10];
  compacted[12] = transforms[11];
  compacted[13] = transforms[12];
  compacted[14] = transforms[13];
  compacted[15] = transforms[14];
  compacted[16] = transforms[15];
  compacted[17] = color[0];
  compacted[18] = color[1];
  compacted[19] = color[2];
  compacted[20] = color[3];

  for (var i = 0; i < sides.length; i++) {
    var ci = i * 4 + 21;
    var point0 = sides[i][0];
    var point1 = sides[i][1];
    compacted[ci + 0] = point0[0];
    compacted[ci + 1] = point0[1];
    compacted[ci + 2] = point1[0];
    compacted[ci + 3] = point1[1];
  } // TODO: how about custom properties or fields ?


  return compacted;
};

var toCompactBinary_1$2 = toCompactBinary$2;
/**
 * Transform the given geometry using the given matrix.
 * This is a lazy transform of the sides, as this function only adjusts the transforms.
 * The transforms are applied when accessing the sides via toSides().
 * @param {mat4} matrix - the matrix to transform with
 * @param {geom2} geometry - the geometry to transform
 * @returns {geom2} a new geometry
 * @alias module:modeling/geometries/geom2.transform
 *
 * @example
 * let newgeometry = transform(fromZRotation(degToRad(90)), geometry)
 */

var transform$9 = (matrix, geometry) => {
  var transforms = mat4.multiply(mat4.create(), matrix, geometry.transforms);
  return Object.assign({}, geometry, {
    transforms
  });
};

var transform_1$9 = transform$9;
/**
 * Represents a 2D geometry consisting of a list of sides.
 * @see {@link geom2} for data structure information.
 * @module modeling/geometries/geom2
 */

var geom2$2 = {
  clone: clone_1$7,
  create: create_1$8,
  fromPoints: fromPoints_1$7,
  fromCompactBinary: fromCompactBinary_1$2,
  isA: isA_1$4,
  reverse: reverse_1$4,
  toOutlines: toOutlines_1,
  toPoints: toPoints_1$3,
  toSides: toSides_1,
  toString: toString_1$7,
  toCompactBinary: toCompactBinary_1$2,
  transform: transform_1$9
};
/**
 * Represents a convex 3D polygon. The vertices used to initialize a polygon must
 * be coplanar and form a convex shape. The vertices do not have to be `vec3`
 * instances but they must behave similarly.
 * @typedef {Object} poly3
 * @property {Array} vertices - list of ordered vertices (3D)
 */

/**
 * Creates a new 3D polygon with initial values.
 *
 * @param {Array} [vertices] - a list of vertices (3D)
 * @returns {poly3} a new polygon
 * @alias module:modeling/geometries/poly3.create
 */

var create$7 = vertices => {
  if (vertices === undefined || vertices.length < 3) {
    vertices = []; // empty contents
  }

  return {
    vertices: vertices
  };
};

var create_1$7 = create$7;
/**
 * Create a deep clone of the given polygon
 *
 * @param {poly3} [out] - receiving polygon
 * @param {poly3} polygon - polygon to clone
 * @returns {poly3} a new polygon
 * @alias module:modeling/geometries/poly3.clone
 */

var clone$6 = function clone$6() {
  var out;
  var poly3;

  if (arguments.length === 1) {
    out = create_1$7();
    poly3 = arguments.length <= 0 ? undefined : arguments[0];
  } else {
    out = arguments.length <= 0 ? undefined : arguments[0];
    poly3 = arguments.length <= 1 ? undefined : arguments[1];
  } // deep clone of vertices


  out.vertices = poly3.vertices.map(vec => vec3$1.clone(vec));
  return out;
};

var clone_1$6 = clone$6;
/**
 * Create a polygon from the given points.
 *
 * @param {Array} points - list of points (3D)
 * @returns {poly3} a new polygon
 * @alias module:modeling/geometries/poly3.fromPoints
 *
 * @example
 * const points = [
 *   [0,  0, 0],
 *   [0, 10, 0],
 *   [0, 10, 10]
 * ]
 * const polygon = fromPoints(points)
 */

var fromPoints$6 = points => {
  var vertices = points.map(point => vec3$1.clone(point));
  return create_1$7(vertices);
};

var fromPoints_1$6 = fromPoints$6;
/**
 * Create a polygon from the given vertices and plane.
 * NOTE: No checks are performed on the parameters.
 * @param {Array} vertices - list of vertices (3D)
 * @param {plane} plane - plane of the polygon
 * @returns {poly3} a new polygon
 * @alias module:modeling/geometries/poly3.fromPointsAndPlane
 */

var fromPointsAndPlane = (vertices, plane) => {
  var poly = create_1$7(vertices);
  poly.plane = plane; // retain the plane for later use

  return poly;
};

var fromPointsAndPlane_1 = fromPointsAndPlane;
/**
 * Invert the give polygon to face the opposite direction.
 *
 * @param {poly3} polygon - the polygon to invert
 * @returns {poly3} a new poly3
 * @alias module:modeling/geometries/poly3.invert
 */

var invert$1 = polygon => {
  var vertices = polygon.vertices.slice().reverse();
  return create_1$7(vertices);
};

var invert_1$1 = invert$1;
/**
 * Determin if the given object is a polygon.
 * @param {Object} object - the object to interogate
 * @returns {Boolean} true if the object matches a poly3
 * @alias module:modeling/geometries/poly3.isA
 */

var isA$3 = object => {
  if (object && typeof object === 'object') {
    if ('vertices' in object) {
      if (Array.isArray(object.vertices)) {
        return true;
      }
    }
  }

  return false;
};

var isA_1$3 = isA$3;
/**
 * Represents a four dimensional vector.
 * See fromValues().
 * @typedef {Array} vec4
 */

/**
 * Creates a new vector initialized to [0,0,0,0].
 *
 * @returns {vec4} a new vector
 * @alias module:modeling/maths/vec4.create
 */

var create$6 = () => [0, 0, 0, 0];

var create_1$6 = create$6;
/**
 * Create a clone of the given vector.
 *
 * @param {vec4} vector - source vector
 * @returns {vec4} a new vector
 * @alias module:modeling/maths/vec4.clone
 */

var clone$5 = vector => {
  var out = create_1$6();
  out[0] = vector[0];
  out[1] = vector[1];
  out[2] = vector[2];
  out[3] = vector[3];
  return out;
};

var clone_1$5 = clone$5;
/**
 * Create a copy of the given vector.
 *
 * @param {vec4} out - receiving vector
 * @param {vec4} vector - source vector
 * @returns {vec4} out
 * @alias module:modeling/maths/vec4.copy
 */

var copy$2 = (out, vector) => {
  out[0] = vector[0];
  out[1] = vector[1];
  out[2] = vector[2];
  out[3] = vector[3];
  return out;
};

var copy_1$2 = copy$2;
/**
 * Compare the given vectors for equality.
 *
 * @param {vec4} a - first vector
 * @param {vec4} b - second vector
 * @return {Boolean} true if vectors are equal
 * @alias module:modeling/maths/vec4.equals
 */

var equals$5 = (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];

var equals_1$4 = equals$5;
/**
 * Flip the given plane.
 *
 * @param {plane} out - receiving plane
 * @param {plane} plane - plane to flip
 * @return {plane} out
 * @alias module:modeling/maths/plane.flip
 */

var flip$1 = (out, plane) => {
  out[0] = -plane[0];
  out[1] = -plane[1];
  out[2] = -plane[2];
  out[3] = -plane[3];
  return out;
};

var flip_1$1 = flip$1;
/**
 * Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane)
 * and distance from 0,0,0.
 *
 * The contents of the array are a normal [0,1,2] and a distance [3].
 * @see https://en.wikipedia.org/wiki/Hesse_normal_form
 * @typedef {Array} plane
 */

/**
 * Create a new plane from the given normal and point values.
 *
 * @param {plane} out - receiving plane
 * @param {vec3} normal - directional vector
 * @param {vec3} point - origin of plane
 * @returns {plane} out
 * @alias module:modeling/maths/plane.fromNormalAndPoint
 */

var fromNormalAndPoint = (out, normal, point) => {
  var u = vec3$1.normalize(vec3$1.create(), normal);
  var w = vec3$1.dot(point, u);
  out[0] = u[0];
  out[1] = u[1];
  out[2] = u[2];
  out[3] = w;
  return out;
};

var fromNormalAndPoint_1 = fromNormalAndPoint;
/**
 * Creates a new vector with the given values.
 *
 * @param {Number} x - X component
 * @param {Number} y - Y component
 * @param {Number} z - Z component
 * @param {Number} w - W component
 * @returns {vec4} a new vector
 * @alias module:modeling/maths/vec4.fromValues
 */

var fromValues$1 = (x, y, z, w) => {
  var out = create_1$6();
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
};

var fromValues_1$1 = fromValues$1;
/**
 * Create a plane from the given points.
 *
 * @param {plane} out - receiving plane
 * @param {vec3} a - 3D point
 * @param {vec3} b - 3D point
 * @param {vec3} c - 3D point
 * @returns {plane} out
 * @alias module:modeling/maths/plane.fromPoints
 */

var fromPoints$5 = (out, a, b, c) => {
  var ba = vec3$1.subtract(vec3$1.create(), b, a);
  var ca = vec3$1.subtract(vec3$1.create(), c, a);
  vec3$1.cross(ba, ba, ca);
  vec3$1.normalize(ba, ba); // normal part

  var w = vec3$1.dot(ba, a);
  out[0] = ba[0];
  out[1] = ba[1];
  out[2] = ba[2];
  out[3] = w;
  return out;
};

var fromPoints_1$5 = fromPoints$5;
/**
 * The resolution of space, currently one hundred nanometers.
 * This should be 1 / EPS.
 * @alias module:modeling/maths.spatialResolution
 * @default
 */

var spatialResolution = 1e5;
/**
 * Epsilon used during determination of near zero distances.
 * This should be 1 / spacialResolution.
 * @default
 * @alias module:modeling/maths.EPS
 */

var EPS$i = 1e-5;
var constants = {
  EPS: EPS$i,
  spatialResolution
};
var {
  EPS: EPS$h
} = constants;
/**
 * Create a new plane from the given points like fromPoints,
 * but allow the vectors to be on one point or one line.
 * In such a case, a random plane through the given points is constructed.
 *
 * @param {plane} out - receiving plane
 * @param {vec3} a - 3D point
 * @param {vec3} b - 3D point
 * @param {vec3} c - 3D point
 * @returns {plane} out
 * @alias module:modeling/maths/plane.fromPointsRandom
 */

var fromPointsRandom = (out, a, b, c) => {
  var ba = vec3$1.subtract(vec3$1.create(), b, a);
  var ca = vec3$1.subtract(vec3$1.create(), c, a);

  if (vec3$1.length(ba) < EPS$h) {
    ba = vec3$1.orthogonal(ba, ca);
  }

  if (vec3$1.length(ca) < EPS$h) {
    ca = vec3$1.orthogonal(ca, ba);
  }

  var normal = vec3$1.cross(vec3$1.create(), ba, ca);

  if (vec3$1.length(normal) < EPS$h) {
    // this would mean that ba == ca.negated()
    ca = vec3$1.orthogonal(ca, ba);
    normal = vec3$1.cross(normal, ba, ca);
  }

  normal = vec3$1.normalize(normal, normal);
  var w = vec3$1.dot(normal, a);
  out[0] = normal[0];
  out[1] = normal[1];
  out[2] = normal[2];
  out[3] = w;
  return out;
};

var fromPointsRandom_1 = fromPointsRandom;
/**
 * Project the given point on to the given plane.
 *
 * @param {plane} plane - plane of reference
 * @param {vec3} point - point of reference
 * @return {vec3} projected point on plane
 * @alias module:modeling/maths/plane.projectionOfPoint
 */

var projectionOfPoint = (plane, point) => {
  var a = point[0] * plane[0] + point[1] * plane[1] + point[2] * plane[2] - plane[3];
  var x = point[0] - a * plane[0];
  var y = point[1] - a * plane[1];
  var z = point[2] - a * plane[2];
  return vec3$1.fromValues(x, y, z);
};

var projectionOfPoint_1 = projectionOfPoint;
/**
 * Calculate the distance to the given point.
 *
 * @param {plane} plane - plane of reference
 * @param {vec3} point - point of reference
 * @return {Number} signed distance to point
 * @alias module:modeling/maths/plane.signedDistanceToPoint
 */

var signedDistanceToPoint = (plane, vector) => vec3$1.dot(plane, vector) - plane[3];

var signedDistanceToPoint_1 = signedDistanceToPoint;
/**
 * Convert the given vector to a representative string.
 *
 * @param {vec4} vector - vector to convert
 * @returns {String} representative string
 * @alias module:modeling/maths/vec4.toString
 */

var toString$6 = vec => "(".concat(vec[0].toFixed(9), ", ").concat(vec[1].toFixed(9), ", ").concat(vec[2].toFixed(9), ", ").concat(vec[3].toFixed(9), ")");

var toString_1$6 = toString$6;
/**
 * Transform the given plane using the given matrix
 *
 * @param {plane} out - receiving plane
 * @param {plane} plane - plane to transform
 * @param {mat4} matrix - matrix to transform with
 * @return {plane} out
 * @alias module:modeling/maths/plane.transform
 */

var transform$8 = (out, plane, matrix) => {
  var ismirror = mat4.isMirroring(matrix); // get two vectors in the plane:

  var r = vec3$1.orthogonal(vec3$1.create(), plane);
  var u = vec3$1.cross(r, plane, r);
  var v = vec3$1.cross(vec3$1.create(), plane, u); // get 3 points in the plane:

  var point1 = vec3$1.fromScalar(vec3$1.create(), plane[3]);
  vec3$1.multiply(point1, point1, plane);
  var point2 = vec3$1.add(vec3$1.create(), point1, u);
  var point3 = vec3$1.add(vec3$1.create(), point1, v); // transform the points:

  point1 = vec3$1.transform(point1, point1, matrix);
  point2 = vec3$1.transform(point2, point2, matrix);
  point3 = vec3$1.transform(point3, point3, matrix); // and create a new plane from the transformed points:

  fromPoints_1$5(out, point1, point2, point3);

  if (ismirror) {
    // the transform is mirroring so flip the plane
    flip_1$1(out, out);
  }

  return out;
};

var transform_1$8 = transform$8;
/**
 * Represents a plane in 3D coordinate space as determined by a normal (perpendicular to the plane)
 * and distance from 0,0,0.
 * @see {@link plane} for data structure information.
 * @module modeling/maths/plane
 */

var plane$1 = {
  /**
   * @see [vec4.clone()]{@link module:modeling/maths/vec4.clone}
   * @function clone
   */
  clone: clone_1$5,

  /**
   * @see [vec4.copy()]{@link module:modeling/maths/vec4.copy}
   * @function copy
   */
  copy: copy_1$2,

  /**
   * @see [vec4.create()]{@link module:modeling/maths/vec4.create}
   * @function create
   */
  create: create_1$6,

  /**
   * @see [vec4.equals()]{@link module:modeling/maths/vec4.equals}
   * @function equals
   */
  equals: equals_1$4,
  flip: flip_1$1,
  fromNormalAndPoint: fromNormalAndPoint_1,

  /**
   * @see [vec4.fromValues()]{@link module:modeling/maths/vec4.fromValues}
   * @function fromValues
   */
  fromValues: fromValues_1$1,
  fromPoints: fromPoints_1$5,
  fromPointsRandom: fromPointsRandom_1,
  projectionOfPoint: projectionOfPoint_1,
  signedDistanceToPoint: signedDistanceToPoint_1,

  /**
   * @see [vec4.toString()]{@link module:modeling/maths/vec4.toString}
   * @function toString
   */
  toString: toString_1$6,
  transform: transform_1$8
};
/**
 * Check whether the given polygon is convex.
 * @param {poly3} polygon - the polygon to interogate
 * @returns {Boolean} true if convex
 * @alias module:modeling/geometries/poly3.isConvex
 */

var isConvex = poly3 => areVerticesConvex(poly3.vertices);

var areVerticesConvex = vertices => {
  var numvertices = vertices.length;

  if (numvertices > 2) {
    // note: plane ~= normal point
    var _normal = plane$1.fromPoints(plane$1.create(), vertices[0], vertices[1], vertices[2]);

    var prevprevpos = vertices[numvertices - 2];
    var prevpos = vertices[numvertices - 1];

    for (var i = 0; i < numvertices; i++) {
      var pos = vertices[i];

      if (!isConvexPoint(prevprevpos, prevpos, pos, _normal)) {
        return false;
      }

      prevprevpos = prevpos;
      prevpos = pos;
    }
  }

  return true;
}; // calculate whether three points form a convex corner
//  prevpoint, point, nextpoint: the 3 coordinates (Vector3D instances)
//  normal: the normal vector of the plane


var isConvexPoint = (prevpoint, point, nextpoint, normal) => {
  var crossproduct = vec3$1.cross(vec3$1.create(), vec3$1.subtract(vec3$1.create(), point, prevpoint), vec3$1.subtract(vec3$1.create(), nextpoint, point));
  var crossdotnormal = vec3$1.dot(crossproduct, normal);
  return crossdotnormal >= 0;
};

var isConvex_1 = isConvex;
/**
 * Measure the area of the given polygon.
 * @see 2000 softSurfer http://geomalgorithms.com
 * @param {poly3} polygon - the polygon to measure
 * @return {Number} area of the polygon
 * @alias module:modeling/geometries/poly3.measureArea
 */

var measureArea$2 = poly3 => {
  var n = poly3.vertices.length;

  if (n < 3) {
    return 0; // degenerate polygon
  }

  var vertices = poly3.vertices; // calculate a real normal

  var a = vertices[0];
  var b = vertices[1];
  var c = vertices[2];
  var ba = vec3$1.subtract(vec3$1.create(), b, a);
  var ca = vec3$1.subtract(vec3$1.create(), c, a);
  var normal = vec3$1.cross(ba, ba, ca); // determin direction of projection

  var ax = Math.abs(normal[0]);
  var ay = Math.abs(normal[1]);
  var az = Math.abs(normal[2]);
  var an = Math.sqrt(ax * ax + ay * ay + az * az); // length of normal

  var coord = 3; // ignore Z coordinates

  if (ax > ay && ax > az) {
    coord = 1; // ignore X coordinates
  } else if (ay > az) {
    coord = 2; // ignore Y coordinates
  }

  var area = 0;
  var h = 0;
  var i = 1;
  var j = 2;

  switch (coord) {
    case 1:
      // ignore X coordinates
      // compute area of 2D projection
      for (i = 1; i < n; i++) {
        h = i - 1;
        j = (i + 1) % n;
        area += vertices[i][1] * (vertices[j][2] - vertices[h][2]);
      }

      area += vertices[0][1] * (vertices[1][2] - vertices[n - 1][2]); // scale to get area

      area *= an / (2 * normal[0]);
      break;

    case 2:
      // ignore Y coordinates
      // compute area of 2D projection
      for (i = 1; i < n; i++) {
        h = i - 1;
        j = (i + 1) % n;
        area += vertices[i][2] * (vertices[j][0] - vertices[h][0]);
      }

      area += vertices[0][2] * (vertices[1][0] - vertices[n - 1][0]); // scale to get area

      area *= an / (2 * normal[1]);
      break;

    case 3: // ignore Z coordinates

    default:
      // compute area of 2D projection
      for (i = 1; i < n; i++) {
        h = i - 1;
        j = (i + 1) % n;
        area += vertices[i][0] * (vertices[j][1] - vertices[h][1]);
      }

      area += vertices[0][0] * (vertices[1][1] - vertices[n - 1][1]); // scale to get area

      area *= an / (2 * normal[2]);
      break;
  }

  return area;
};

var measureArea_1$2 = measureArea$2;
/**
 * @param {poly3} polygon - the polygon to measure
 * @returns {Array} an array of two vectors (3D);  minimum and maximum coordinates
 * @alias module:modeling/geometries/poly3.measureBoundingBox
 */

var measureBoundingBox$1 = poly3 => {
  var vertices = poly3.vertices;
  var numvertices = vertices.length;
  var min = numvertices === 0 ? vec3$1.create() : vec3$1.clone(vertices[0]);
  var max = vec3$1.clone(min);

  for (var i = 1; i < numvertices; i++) {
    vec3$1.min(min, min, vertices[i]);
    vec3$1.max(max, max, vertices[i]);
  }

  return [min, max];
};

var measureBoundingBox_1$1 = measureBoundingBox$1;
/**
 * Measure the bounding sphere of the given polygon.
 * @param {poly3} polygon - the polygon to measure
 * @returns {Array} the computed bounding sphere; center point (3D) and radius
 * @alias module:modeling/geometries/poly3.measureBoundingSphere
 */

var measureBoundingSphere$1 = poly3 => {
  var box = measureBoundingBox_1$1(poly3);
  var center = box[0];
  vec3$1.add(center, box[0], box[1]);
  vec3$1.scale(center, center, 0.5);
  var radius = vec3$1.distance(center, box[1]);
  return [center, radius];
};

var measureBoundingSphere_1$1 = measureBoundingSphere$1;
/**
 * Measure the signed volume of the given polygon, which must be convex.
 * The volume is that formed by the tetrahedon connected to the axis [0,0,0],
 * and will be positive or negative based on the rotation of the vertices.
 * @see http://chenlab.ece.cornell.edu/Publication/Cha/icip01_Cha.pdf
 * @param {poly3} polygon - the polygon to measure
 * @return {Number} volume of the polygon
 * @alias module:modeling/geometries/poly3.measureSignedVolume
 */

var measureSignedVolume = poly3 => {
  var signedVolume = 0;
  var vertices = poly3.vertices; // calculate based on triangluar polygons

  var cross = vec3$1.create();

  for (var i = 0; i < vertices.length - 2; i++) {
    vec3$1.cross(cross, vertices[i + 1], vertices[i + 2]);
    signedVolume += vec3$1.dot(vertices[0], cross);
  }

  signedVolume /= 6;
  return signedVolume;
};

var measureSignedVolume_1 = measureSignedVolume;

var plane = polygon => {
  if (!polygon.plane) {
    var vertices = polygon.vertices;
    polygon.plane = plane$1.fromPoints(plane$1.create(), vertices[0], vertices[1], vertices[2]);
  }

  return polygon.plane;
};

var plane_1 = plane;
/**
 * Return the given geometry as a list of points.
 * NOTE: The returned array should not be modified as the points are shared with the geometry.
 * @param {poly3} polygon - the polygon
 * @return {Array} list of points (3D)
 * @alias module:modeling/geometries/poly3.toPoints
 */

var toPoints$2 = geometry => geometry.vertices;

var toPoints_1$2 = toPoints$2;
/**
 * @param {poly3} polygon - the polygon to measure
 * @return {String} the string representation
 * @alias module:modeling/geometries/poly3.toString
 */

var toString$5 = poly3 => {
  var result = 'poly3: vertices: [';
  poly3.vertices.forEach(vertex => {
    result += "".concat(vec3$1.toString(vertex), ", ");
  });
  result += ']';
  return result;
};

var toString_1$5 = toString$5;
/**
 * Transform the given polygon using the given matrix.
 * @param {mat4} matrix - the matrix to transform with
 * @param {poly3} polygon - the polygon to transform
 * @returns {poly3} a new polygon
 * @alias module:modeling/geometries/poly3.transform
 */

var transform$7 = (matrix, poly3) => {
  var vertices = poly3.vertices.map(vertex => vec3$1.transform(vec3$1.create(), vertex, matrix));

  if (mat4.isMirroring(matrix)) {
    // reverse the order to preserve the orientation
    vertices.reverse();
  }

  return create_1$7(vertices);
};

var transform_1$7 = transform$7;
/**
 * Represents a convex 3D polygon consisting of a list of vertices.
 * @see {@link poly3} for data structure information.
 * @module modeling/geometries/poly3
 */

var poly3 = {
  clone: clone_1$6,
  create: create_1$7,
  fromPoints: fromPoints_1$6,
  fromPointsAndPlane: fromPointsAndPlane_1,
  invert: invert_1$1,
  isA: isA_1$3,
  isConvex: isConvex_1,
  measureArea: measureArea_1$2,
  measureBoundingBox: measureBoundingBox_1$1,
  measureBoundingSphere: measureBoundingSphere_1$1,
  measureSignedVolume: measureSignedVolume_1,
  plane: plane_1,
  toPoints: toPoints_1$2,
  toString: toString_1$5,
  transform: transform_1$7
};
/**
 * Represents a 3D geometry consisting of a list of polygons.
 * @typedef {Object} geom3
 * @property {Array} polygons - list of polygons, each polygon containing three or more points
 * @property {Boolean} isRetesselated - true if retesselation has been performed
 * @property {mat4} transforms - transforms to apply to the sides, see transform()
 */

/**
 * Create a new 3D geometry composed of the given polygons.
 * @param {Array} [polygons] - list of polygons, or undefined
 * @returns {geom3} a new geometry
 * @alias module:modeling/geometries/geom3.create
 */

var create$5 = polygons => {
  if (polygons === undefined) {
    polygons = []; // empty contents
  }

  return {
    polygons: polygons,
    isRetesselated: false,
    transforms: mat4.create()
  };
};

var create_1$5 = create$5;
/**
 * Performs a deep clone of the given geometry.
 * @param {geom3} geometry - the geometry to clone
 * @returns {geom3} a new geometry
 * @alias module:modeling/geometries/geom3.clone
 */

var clone$4 = geometry => {
  var out = create_1$5();
  out.polygons = geometry.polygons.map(polygon => poly3.clone(polygon));
  out.isRetesselated = geometry.isRetesselated;
  out.transforms = mat4.clone(geometry.transforms);
  return out;
};

var clone_1$4 = clone$4;
/**
 * Construct a new 3D geometry from a list of points.
 * The list of points should contain sub-arrays, each defining a single polygon of points.
 * In addition, the points should follow the right-hand rule for rotation in order to
 * define an external facing polygon.
 * @param {Array} listofpoints - list of lists, where each list is a set of points to construct a polygon
 * @returns {geom3} a new geometry
 * @alias module:modeling/geometries/geom3.fromPoints
 */

var fromPoints$4 = listofpoints => {
  if (!Array.isArray(listofpoints)) {
    throw new Error('the given points must be an array');
  }

  var polygons = listofpoints.map((points, index) => {
    // TODO catch the error, and rethrow with index
    var polygon = poly3.fromPoints(points);
    return polygon;
  });
  var result = create_1$5(polygons);
  return result;
};

var fromPoints_1$4 = fromPoints$4;
/**
 * Construct a new 3D geometry from the given compact binary data.
 * @param {TypedArray} data - compact binary data
 * @returns {geom3} a new geometry
 * @alias module:modeling/geometries/geom3.fromCompactBinary
 */

var fromCompactBinary$1 = data => {
  if (data[0] !== 1) throw new Error('invalid compact binary data');
  var created = create_1$5();
  created.transforms = mat4.clone(data.slice(1, 17));
  created.isRetesselated = !!data[17];
  var numberOfVertices = data[22];
  var ci = 23;
  var vi = data.length - numberOfVertices * 3;

  while (vi < data.length) {
    var verticesPerPolygon = data[ci];
    ci++;
    var vertices = [];

    for (var i = 0; i < verticesPerPolygon; i++) {
      vertices.push(vec3$1.fromValues(data[vi], data[vi + 1], data[vi + 2]));
      vi += 3;
    }

    created.polygons.push(poly3.create(vertices));
  } // transfer known properities, i.e. color


  if (data[18] >= 0) {
    created.color = [data[18], data[19], data[20], data[21]];
  } // TODO: how about custom properties or fields ?


  return created;
};

var fromCompactBinary_1$1 = fromCompactBinary$1;
/*
 * Apply the transforms of the given geometry.
 * NOTE: This function must be called BEFORE exposing any data. See toPolygons.
 * @param {geom3} geometry - the geometry to transform
 * @returns {geom3} the given geometry
 * @example
 * geometry = applyTransforms(geometry)
 */

var applyTransforms$1 = geometry => {
  if (mat4.isIdentity(geometry.transforms)) return geometry; // apply transforms to each polygon
  // const isMirror = mat4.isMirroring(geometry.transforms)
  // TBD if (isMirror) newvertices.reverse()

  geometry.polygons = geometry.polygons.map(polygon => poly3.transform(geometry.transforms, polygon));
  geometry.transforms = mat4.create();
  return geometry;
};

var applyTransforms_1$1 = applyTransforms$1;
/**
 * Produces an array of polygons from the given geometry, after applying transforms.
 * The returned array should not be modified as the polygons are shared with the geometry.
 * @param {geom3} geometry - the geometry
 * @returns {Array} an array of polygons
 * @alias module:modeling/geometries/geom3.toPolygons
 *
 * @example
 * let sharedpolygons = toPolygons(geometry)
 */

var toPolygons$1 = geometry => applyTransforms_1$1(geometry).polygons;

var toPolygons_1$1 = toPolygons$1;
/**
 * Invert the given geometry, transposing solid and empty space.
 * @params {geom3} geometry - the geometry to invert
 * @returns {geom3} a new geometry
 * @alias module:modeling/geometries/geom3.invert
 */

var invert = geometry => {
  var polygons = toPolygons_1$1(geometry);
  var newpolygons = polygons.map(polygon => poly3.invert(polygon));
  return create_1$5(newpolygons);
};

var invert_1 = invert;
/**
 * Determin if the given object is a 3D geometry.
 * @param {object} object - the object to interogate
 * @returns {Boolean} true if the object matches a geom3
 * @alias module:modeling/geometries/geom3.isA
 */

var isA$2 = object => {
  if (object && typeof object === 'object') {
    if ('polygons' in object && 'transforms' in object) {
      if (Array.isArray(object.polygons) && 'length' in object.transforms) {
        return true;
      }
    }
  }

  return false;
};

var isA_1$2 = isA$2;
/**
 * Return the given geometry as a list of points, after applying transforms.
 * The returned array should not be modified as the points are shared with the geometry.
 * @return {Array} list of points, where each sub-array represents a polygon
 * @alias module:modeling/geometries/geom3.toPoints
 */

var toPoints$1 = geometry => {
  var polygons = toPolygons_1$1(geometry);
  var listofpoints = polygons.map(polygon => poly3.toPoints(polygon));
  return listofpoints;
};

var toPoints_1$1 = toPoints$1;
/**
 * Create a string representing the contents of the given geometry.
 * @param {geom3} geometry - the geometry
 * @returns {String} a representive string
 * @alias module:modeling/geometries/geom3.toString
 *
 * @example
 * console.out(toString(geometry))
 */

var toString$4 = geometry => {
  var polygons = toPolygons_1$1(geometry);
  var result = 'geom3 (' + polygons.length + ' polygons):\n';
  polygons.forEach(polygon => {
    result += '  ' + poly3.toString(polygon) + '\n';
  });
  return result;
};

var toString_1$4 = toString$4;
/**
 * Return the given geometry in compact binary representation.
 * @param {geom3} geometry - the geometry
 * @return {TypedArray} compact binary representation
 * @alias module:modeling/geometries/geom3.toCompactBinary
 */

var toCompactBinary$1 = geom => {
  var polygons = geom.polygons;
  var transforms = geom.transforms;
  var numberOfPolygons = polygons.length;
  var numberOfVertices = polygons.reduce((count, polygon) => count + polygon.vertices.length, 0);
  var color = [-1, -1, -1, -1];
  if (geom.color) color = geom.color; // FIXME why Float32Array?

  var compacted = new Float32Array(1 + 16 + 1 + 4 + 1 + numberOfPolygons + numberOfVertices * 3); // type + transforms + isRetesselated + color + numberOfPolygons + numberOfVerticesPerPolygon[] + vertices data[]

  compacted[0] = 1; // type code: 0 => geom2, 1 => geom3 , 2 => path2

  compacted[1] = transforms[0];
  compacted[2] = transforms[1];
  compacted[3] = transforms[2];
  compacted[4] = transforms[3];
  compacted[5] = transforms[4];
  compacted[6] = transforms[5];
  compacted[7] = transforms[6];
  compacted[8] = transforms[7];
  compacted[9] = transforms[8];
  compacted[10] = transforms[9];
  compacted[11] = transforms[10];
  compacted[12] = transforms[11];
  compacted[13] = transforms[12];
  compacted[14] = transforms[13];
  compacted[15] = transforms[14];
  compacted[16] = transforms[15];
  compacted[17] = geom.isRetesselated ? 1 : 0;
  compacted[18] = color[0];
  compacted[19] = color[1];
  compacted[20] = color[2];
  compacted[21] = color[3];
  compacted[22] = numberOfVertices;
  var ci = 23;
  var vi = ci + numberOfPolygons;
  polygons.forEach(polygon => {
    var points = poly3.toPoints(polygon); // record the number of vertices per polygon

    compacted[ci] = points.length;
    ci++; // convert the vertices

    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      compacted[vi + 0] = point[0];
      compacted[vi + 1] = point[1];
      compacted[vi + 2] = point[2];
      vi += 3;
    }
  }); // TODO: how about custom properties or fields ?

  return compacted;
};

var toCompactBinary_1$1 = toCompactBinary$1;
/**
 * Transform the given geometry using the given matrix.
 * This is a lazy transform of the polygons, as this function only adjusts the transforms.
 * See applyTransforms() for the actual application of the transforms to the polygons.
 * @param {mat4} matrix - the matrix to transform with
 * @param {geom3} geometry - the geometry to transform
 * @returns {geom3} a new geometry
 * @alias module:modeling/geometries/geom3.transform
 *
 * @example
 * let newgeometry = transform(fromXRotation(degToRad(90)), geometry)
 */

var transform$6 = (matrix, geometry) => {
  var transforms = mat4.multiply(mat4.create(), matrix, geometry.transforms);
  return Object.assign({}, geometry, {
    transforms
  });
};

var transform_1$6 = transform$6;
/**
 * Represents a 3D geometry consisting of a list of polygons.
 * @see {@link geom3} for data structure information.
 * @module modeling/geometries/geom3
 */

var geom3$2 = {
  clone: clone_1$4,
  create: create_1$5,
  fromPoints: fromPoints_1$4,
  fromCompactBinary: fromCompactBinary_1$1,
  invert: invert_1,
  isA: isA_1$2,
  toPoints: toPoints_1$1,
  toPolygons: toPolygons_1$1,
  toString: toString_1$4,
  toCompactBinary: toCompactBinary_1$1,
  transform: transform_1$6
};
/**
 * Represents a 2D geometry consisting of a list of ordered points.
 * @typedef {Object} path2
 * @property {Array} points - list of ordered points
 * @property {Boolean} isClosed - true if the path is closed where start and end points are the same
 * @property {mat4} transforms - transforms to apply to the points, see transform()
 */

/**
 * Create an empty, open path.
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.create
 *
 * @example
 * let newpath = create()
 */

var create$4 = points => {
  if (points === undefined) {
    points = [];
  }

  return {
    points: points,
    isClosed: false,
    transforms: mat4.create()
  };
};

var create_1$4 = create$4;
/**
 * Performs a deep clone of the give geometry.
 * @param {path2} geometry - the geometry to clone
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.clone
 */

var clone$3 = geometry => {
  var out = create_1$4();
  out.points = geometry.points.map(point => vec2.clone(point));
  out.isClosed = geometry.isClosed;
  out.transforms = mat4.clone(geometry.transforms);
  return out;
};

var clone_1$3 = clone$3;
var {
  EPS: EPS$g
} = constants;
/**
 * Close the given geometry.
 * @param {path2} geometry - the path to close
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.close
 */

var close = geometry => {
  if (geometry.isClosed) return geometry;
  var cloned = clone_1$3(geometry);
  cloned.isClosed = true;

  if (cloned.points.length > 1) {
    // make sure the paths are formed properly
    var points = cloned.points;
    var p0 = points[0];
    var pn = points[points.length - 1];

    while (vec2.distance(p0, pn) < EPS$g * EPS$g) {
      points.pop();
      if (points.length === 1) break;
      pn = points[points.length - 1];
    }
  }

  return cloned;
};

var close_1 = close;
var {
  EPS: EPS$f
} = constants;
/**
 * Create a new path from the given points.
 * The points must be provided an array of points,
 * where each point is an array of two numbers.
 * @param {Object} options - options for construction
 * @param {Boolean} [options.closed=false] - if the path should be open or closed
 * @param {Array} points - array of points (2D) from which to create the path
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.fromPoints
 *
 * @example:
 * my newpath = fromPoints({closed: true}, [[10, 10], [-10, 10]])
 */

var fromPoints$3 = (options, points) => {
  var defaults = {
    closed: false
  };
  var {
    closed
  } = Object.assign({}, defaults, options);
  var created = create_1$4();
  created.points = points.map(point => vec2.clone(point)); // check if first and last points are equal

  if (created.points.length > 1) {
    var p0 = created.points[0];
    var pn = created.points[created.points.length - 1];

    if (vec2.distance(p0, pn) < EPS$f * EPS$f) {
      // and close automatically
      closed = true;
    }
  }

  if (closed === true) created = close_1(created);
  return created;
};

var fromPoints_1$3 = fromPoints$3;
/*
 * Apply the transforms of the given geometry.
 * NOTE: This function must be called BEFORE exposing any data. See toPoints.
 * @param {path} geometry - the geometry to transform
 * @returns {path} the given geometry
 * @example
 * geometry = applyTransforms(geometry)
 */

var applyTransforms = geometry => {
  if (mat4.isIdentity(geometry.transforms)) return geometry;
  geometry.points = geometry.points.map(point => vec2.transform(vec2.create(), point, geometry.transforms));
  geometry.transforms = mat4.create();
  return geometry;
};

var applyTransforms_1 = applyTransforms;
/**
 * Produces an array of points from the given geometry.
 * The returned array should not be modified as the data is shared with the geometry.
 * @param {path2} geometry - the geometry
 * @returns {Array} an array of points
 * @alias module:modeling/geometries/path2.toPoints
 *
 * @example
 * let sharedpoints = toPoints(geometry)
 */

var toPoints = geometry => applyTransforms_1(geometry).points;

var toPoints_1 = toPoints;
/**
 * Append a series of points to the given geometry that represent an arc.
 * This implementation follows the SVG specifications.
 * @see http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
 * @param {Object} options - options for construction
 * @param {vec2} options.endpoint - end point of arc (REQUIRED)
 * @param {vec2} [options.radius=[0,0]] - radius of arc (X and Y)
 * @param {Number} [options.xaxisrotation=0] - rotation (RADIANS) of the X axis of the arc with respect to the X axis of the coordinate system
 * @param {Boolean} [options.clockwise=false] - draw an arc clockwise with respect to the center point
 * @param {Boolean} [options.large=false] - draw an arc longer than PI radians
 * @param {Number} [options.segments=16] - number of segments per full rotation
 * @param {path2} geometry - the path of which to append the arc
 * @returns {path2} a new path with the appended points
 * @alias module:modeling/geometries/path2.appendArc
 *
 * @example
 * let p1 = path2.fromPoints({}, [[27.5,-22.96875]]);
 * p1 = path2.appendPoints([[27.5,-3.28125]], p1);
 * p1 = path2.appendArc({endpoint: [12.5, -22.96875], radius: [15, -19.6875]}, p1);
 */

var appendArc = (options, geometry) => {
  var defaults = {
    radius: [0, 0],
    // X and Y radius
    xaxisrotation: 0,
    clockwise: false,
    large: false,
    segments: 16
  };
  var {
    endpoint,
    radius,
    xaxisrotation,
    clockwise,
    large,
    segments
  } = Object.assign({}, defaults, options); // validate the given options

  if (!Array.isArray(endpoint)) throw new Error('endpoint must be an array of X and Y values');
  if (endpoint.length < 2) throw new Error('endpoint must contain X and Y values');
  endpoint = vec2.clone(endpoint);
  if (!Array.isArray(radius)) throw new Error('radius must be an array of X and Y values');
  if (radius.length < 2) throw new Error('radius must contain X and Y values');
  if (segments < 4) throw new Error('segments must be four or more');
  var decimals = 100000; // validate the given geometry

  if (geometry.isClosed) {
    throw new Error('the given path cannot be closed');
  }

  var points = toPoints_1(geometry);

  if (points.length < 1) {
    throw new Error('the given path must contain one or more points (as the starting point for the arc)');
  }

  var xradius = radius[0];
  var yradius = radius[1];
  var startpoint = points[points.length - 1]; // round to precision in order to have determinate calculations

  xradius = Math.round(xradius * decimals) / decimals;
  yradius = Math.round(yradius * decimals) / decimals;
  endpoint = vec2.fromValues(Math.round(endpoint[0] * decimals) / decimals, Math.round(endpoint[1] * decimals) / decimals);
  var sweepFlag = !clockwise;
  var newpoints = [];

  if (xradius === 0 || yradius === 0) {
    // http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes:
    // If rx = 0 or ry = 0, then treat this as a straight line from (x1, y1) to (x2, y2) and stop
    newpoints.push(endpoint);
  } else {
    xradius = Math.abs(xradius);
    yradius = Math.abs(yradius); // see http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes :

    var phi = xaxisrotation;
    var cosphi = Math.cos(phi);
    var sinphi = Math.sin(phi);
    var minushalfdistance = vec2.subtract(vec2.create(), startpoint, endpoint);
    vec2.scale(minushalfdistance, minushalfdistance, 0.5); // F.6.5.1:
    // round to precision in order to have determinate calculations

    var x = Math.round((cosphi * minushalfdistance[0] + sinphi * minushalfdistance[1]) * decimals) / decimals;
    var y = Math.round((-sinphi * minushalfdistance[0] + cosphi * minushalfdistance[1]) * decimals) / decimals;
    var startTranslated = vec2.fromValues(x, y); // F.6.6.2:

    var biglambda = startTranslated[0] * startTranslated[0] / (xradius * xradius) + startTranslated[1] * startTranslated[1] / (yradius * yradius);

    if (biglambda > 1.0) {
      // F.6.6.3:
      var sqrtbiglambda = Math.sqrt(biglambda);
      xradius *= sqrtbiglambda;
      yradius *= sqrtbiglambda; // round to precision in order to have determinate calculations

      xradius = Math.round(xradius * decimals) / decimals;
      yradius = Math.round(yradius * decimals) / decimals;
    } // F.6.5.2:


    var multiplier1 = Math.sqrt((xradius * xradius * yradius * yradius - xradius * xradius * startTranslated[1] * startTranslated[1] - yradius * yradius * startTranslated[0] * startTranslated[0]) / (xradius * xradius * startTranslated[1] * startTranslated[1] + yradius * yradius * startTranslated[0] * startTranslated[0]));
    if (sweepFlag === large) multiplier1 = -multiplier1;
    var centerTranslated = vec2.fromValues(xradius * startTranslated[1] / yradius, -yradius * startTranslated[0] / xradius);
    vec2.scale(centerTranslated, centerTranslated, multiplier1); // F.6.5.3:

    var _center = vec2.fromValues(cosphi * centerTranslated[0] - sinphi * centerTranslated[1], sinphi * centerTranslated[0] + cosphi * centerTranslated[1]);

    _center = vec2.add(_center, _center, vec2.scale(vec2.create(), vec2.add(vec2.create(), startpoint, endpoint), 0.5)); // F.6.5.5:

    var vector1 = vec2.fromValues((startTranslated[0] - centerTranslated[0]) / xradius, (startTranslated[1] - centerTranslated[1]) / yradius);
    var vector2 = vec2.fromValues((-startTranslated[0] - centerTranslated[0]) / xradius, (-startTranslated[1] - centerTranslated[1]) / yradius);
    var theta1 = vec2.angleRadians(vector1);
    var theta2 = vec2.angleRadians(vector2);
    var deltatheta = theta2 - theta1;
    deltatheta = deltatheta % (2 * Math.PI);

    if (!sweepFlag && deltatheta > 0) {
      deltatheta -= 2 * Math.PI;
    } else if (sweepFlag && deltatheta < 0) {
      deltatheta += 2 * Math.PI;
    } // Ok, we have the center point and angle range (from theta1, deltatheta radians) so we can create the ellipse


    var numsteps = Math.ceil(Math.abs(deltatheta) / (2 * Math.PI) * segments) + 1;
    if (numsteps < 1) numsteps = 1;

    for (var step = 1; step < numsteps; step++) {
      var theta = theta1 + step / numsteps * deltatheta;
      var costheta = Math.cos(theta);
      var sintheta = Math.sin(theta); // F.6.3.1:

      var point = vec2.fromValues(cosphi * xradius * costheta - sinphi * yradius * sintheta, sinphi * xradius * costheta + cosphi * yradius * sintheta);
      vec2.add(point, point, _center);
      newpoints.push(point);
    } // ensure end point is precisely what user gave as parameter


    if (numsteps) newpoints.push(options.endpoint);
  }

  newpoints = points.concat(newpoints);
  var result = fromPoints_1$3({}, newpoints);
  return result;
};

var appendArc_1 = appendArc;
/**
 * Append the given list of points to the end of the given geometry.
 * @param {Array} points - the points (2D) to append to the given path
 * @param {path2} geometry - the given path
 * @returns {path2} a new path with the appended points
 * @alias module:modeling/geometries/path2.appendPoints
 * @example
 * let newpath = appendPoints([[3, 4], [4, 5]], oldpath)
 */

var appendPoints = (points, geometry) => {
  if (geometry.isClosed) {
    throw new Error('cannot append points to a closed path');
  }

  var newpoints = toPoints_1(geometry);
  newpoints = newpoints.concat(points);
  return fromPoints_1$3({}, newpoints);
};

var appendPoints_1 = appendPoints;
var vec3 = vec2;
/**
 * Append a series of points to the given geometry that represent a Bezier curve.
 * The Bézier curve starts at the last point in the given geometry, and ends at the last control point.
 * The other control points are intermediate control points to transition the curve from start to end points.
 * The first control point may be null to ensure a smooth transition occurs. In this case,
 * the second to last point of the given geometry is mirrored into the control points of the Bezier curve.
 * In other words, the trailing gradient of the geometry matches the new gradient of the curve.
 * @param {Object} options - options for construction
 * @param {Array} options.controlPoints - list of control points (2D) for the bezier curve
 * @param {Number} [options.segment=16] - number of segments per 360 rotation
 * @param {path2} geometry - the path of which to appended points
 * @returns {path2} a new path with the appended points
 * @alias module:modeling/geometries/path2.appendBezier
 *
 * @example
 * let p5 = path2.create({}, [[10,-20]])
 * p5 = path2.appendBezier({controlPoints: [[10,-10],[25,-10],[25,-20]]}, p5);
 * p5 = path2.appendBezier({controlPoints: [null, [25,-30],[40,-30],[40,-20]]}, p5)
 */

var appendBezier = (options, geometry) => {
  var defaults = {
    segments: 16
  };
  var {
    controlPoints,
    segments
  } = Object.assign({}, defaults, options); // validate the given options

  if (!Array.isArray(controlPoints)) throw new Error('controlPoints must be an array of one or more points');
  if (controlPoints.length < 1) throw new Error('controlPoints must be an array of one or more points');
  if (segments < 4) throw new Error('segments must be four or more'); // validate the given geometry

  if (geometry.isClosed) {
    throw new Error('the given geometry cannot be closed');
  }

  var points = toPoints_1(geometry);

  if (points.length < 1) {
    throw new Error('the given path must contain one or more points (as the starting point for the bezier curve)');
  } // make a copy of the control points


  controlPoints = controlPoints.slice(); // special handling of null control point (only first is allowed)

  var firstControlPoint = controlPoints[0];

  if (firstControlPoint === null) {
    if (controlPoints.length < 2) {
      throw new Error('a null control point must be passed with one more control points');
    } // special handling of a previous bezier curve


    var lastBezierControlPoint = points[points.length - 2];

    if ('lastBezierControlPoint' in geometry) {
      lastBezierControlPoint = geometry.lastBezierControlPoint;
    }

    if (!Array.isArray(lastBezierControlPoint)) {
      throw new Error('the given path must contain TWO or more points if given a null control point');
    } // replace the first control point with the mirror of the last bezier control point


    var controlpoint = vec2.scale(vec2.create(), points[points.length - 1], 2);
    vec2.subtract(controlpoint, controlpoint, lastBezierControlPoint);
    controlPoints[0] = controlpoint;
  } // add a control point for the previous end point


  controlPoints.unshift(points[points.length - 1]);
  var bezierOrder = controlPoints.length - 1;
  var factorials = [];
  var fact = 1;

  for (var i = 0; i <= bezierOrder; ++i) {
    if (i > 0) fact *= i;
    factorials.push(fact);
  }

  var binomials = [];

  for (var _i = 0; _i <= bezierOrder; ++_i) {
    var binomial = factorials[bezierOrder] / (factorials[_i] * factorials[bezierOrder - _i]);
    binomials.push(binomial);
  }

  var v0 = vec2.create();
  var v1 = vec2.create();
  var v3 = vec3.create();

  var getPointForT = t => {
    var tk = 1; // = pow(t,k)

    var oneMinusTNMinusK = Math.pow(1 - t, bezierOrder); // = pow( 1-t, bezierOrder - k)

    var invOneMinusT = t !== 1 ? 1 / (1 - t) : 1;
    var point = vec2.create(); // 0, 0, 0

    for (var k = 0; k <= bezierOrder; ++k) {
      if (k === bezierOrder) oneMinusTNMinusK = 1;
      var bernsteinCoefficient = binomials[k] * tk * oneMinusTNMinusK;
      var derivativePoint = vec2.scale(v0, controlPoints[k], bernsteinCoefficient);
      vec2.add(point, point, derivativePoint);
      tk *= t;
      oneMinusTNMinusK *= invOneMinusT;
    }

    return point;
  };

  var newpoints = [];
  var newpointsT = [];
  var numsteps = bezierOrder + 1;

  for (var _i2 = 0; _i2 < numsteps; ++_i2) {
    var t = _i2 / (numsteps - 1);
    var point = getPointForT(t);
    newpoints.push(point);
    newpointsT.push(t);
  } // subdivide each segment until the angle at each vertex becomes small enough:


  var subdivideBase = 1;
  var maxangle = Math.PI * 2 / segments;
  var maxsinangle = Math.sin(maxangle);

  while (subdivideBase < newpoints.length - 1) {
    var dir1 = vec2.subtract(v0, newpoints[subdivideBase], newpoints[subdivideBase - 1]);
    vec2.normalize(dir1, dir1);
    var dir2 = vec2.subtract(v1, newpoints[subdivideBase + 1], newpoints[subdivideBase]);
    vec2.normalize(dir2, dir2);
    var sinangle = vec2.cross(v3, dir1, dir2); // the sine of the angle

    if (Math.abs(sinangle[2]) > maxsinangle) {
      // angle is too big, we need to subdivide
      var t0 = newpointsT[subdivideBase - 1];
      var t1 = newpointsT[subdivideBase + 1];
      var newt0 = t0 + (t1 - t0) * 1 / 3;
      var newt1 = t0 + (t1 - t0) * 2 / 3;
      var point0 = getPointForT(newt0);
      var point1 = getPointForT(newt1); // remove the point at subdivideBase and replace with 2 new points:

      newpoints.splice(subdivideBase, 1, point0, point1);
      newpointsT.splice(subdivideBase, 1, newt0, newt1); // re - evaluate the angles, starting at the previous junction since it has changed:

      subdivideBase--;
      if (subdivideBase < 1) subdivideBase = 1;
    } else {
      ++subdivideBase;
    }
  } // append to the new points to the given path
  // but skip the first new point because it is identical to the last point in the given path


  newpoints.shift();
  var result = appendPoints_1(newpoints, geometry);
  result.lastBezierControlPoint = controlPoints[controlPoints.length - 2];
  return result;
};

var appendBezier_1 = appendBezier;
var {
  equals: equals$4
} = vec2;
/**
 * Concatenate the given paths.
 * If both contain the same point at the junction, merge it into one.
 * A concatenation of zero paths is an empty, open path.
 * A concatenation of one closed path to a series of open paths produces a closed path.
 * A concatenation of a path to a closed path is an error.
 * @param {...path2} paths - the paths to concatenate
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.concat
 *
 * @example
 * let newpath = concat(fromPoints({}, [[1, 2]]), fromPoints({}, [[3, 4]]))
 */

var concat = function concat() {
  // Only the last path can be closed, producing a closed path.
  var isClosed = false;

  for (var _len7 = arguments.length, paths = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    paths[_key7] = arguments[_key7];
  }

  for (var path of paths) {
    if (isClosed) {
      throw new Error('Cannot concatenate to a closed path');
    }

    isClosed = path.isClosed;
  }

  var newpoints = [];
  paths.forEach(path => {
    var tmp = toPoints_1(path);
    if (newpoints.length > 0 && tmp.length > 0 && equals$4(tmp[0], newpoints[newpoints.length - 1])) tmp.shift();
    newpoints = newpoints.concat(tmp);
  });
  return fromPoints_1$3({
    closed: isClosed
  }, newpoints);
};

var concat_1 = concat;
/**
 * Calls a function for each point in the geometry.
 * @param {Object} options - options
 * @param {Function} thunk - the function to call
 * @param {path2} geometry - the geometry to traverse
 * @alias module:modeling/geometries/path2.eachPoint
 *
 * @example
 * eachPoint({}, accumulate, geometry)
 */

var eachPoint = (options, thunk, path) => {
  toPoints_1(path).forEach(thunk);
};

var eachPoint_1 = eachPoint;
/**
  * Determine if the given paths are equal.
  * For closed paths, this includes equality under point order rotation.
  * @param {path2} a - the first path to compare
  * @param {path2} b - the second path to compare
  * @returns {Boolean}
  * @alias module:modeling/geometries/path2.equals
  */

var equals$3 = (a, b) => {
  if (a.isClosed !== b.isClosed) {
    return false;
  }

  if (a.points.length !== b.points.length) {
    return false;
  }

  var apoints = toPoints_1(a);
  var bpoints = toPoints_1(b); // closed paths might be equal under graph rotation
  // so try comparison by rotating across all points

  var length = apoints.length;
  var offset = 0;

  do {
    var unequal = false;

    for (var i = 0; i < length; i++) {
      if (!vec2.equals(apoints[i], bpoints[(i + offset) % length])) {
        unequal = true;
        break;
      }
    }

    if (unequal === false) {
      return true;
    } // unequal open paths should only be compared once, never rotated


    if (!a.isClosed) {
      return false;
    }
  } while (++offset < length);

  return false;
};

var equals_1$3 = equals$3;
/**
 * Create a new path from the given compact binary data.
 * @param {TypedArray} data - compact binary data
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.fromCompactBinary
 */

var fromCompactBinary = data => {
  if (data[0] !== 2) throw new Error('invalid compact binary data');
  var created = create_1$4();
  created.transforms = mat4.clone(data.slice(1, 17));
  created.isClosed = !!data[17];

  for (var i = 22; i < data.length; i += 2) {
    var point = vec2.fromValues(data[i], data[i + 1]);
    created.points.push(point);
  } // transfer known properties, i.e. color


  if (data[18] >= 0) {
    created.color = [data[18], data[19], data[20], data[21]];
  } // TODO: how about custom properties or fields ?


  return created;
};

var fromCompactBinary_1 = fromCompactBinary;
/**
 * Determin if the given object is a path2 geometry.
 * @param {Object} object - the object to interogate
 * @returns {Boolean} true if the object matches a path2
 * @alias module:modeling/geometries/path2.isA
 */

var isA$1 = object => {
  if (object && typeof object === 'object') {
    // see create for the required attributes and types
    if ('points' in object && 'transforms' in object && 'isClosed' in object) {
      // NOTE: transforms should be a TypedArray, which has a read-only length
      if (Array.isArray(object.points) && 'length' in object.transforms) {
        return true;
      }
    }
  }

  return false;
};

var isA_1$1 = isA$1;
/**
 * Reverses the path so that the points are in the opposite order.
 * This swaps the left (interior) and right (exterior) edges.
 * @param {path2} geometry - the geometry to reverse
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.reverse
 *
 * @example
 * let newpath = reverse(mypath)
 */

var reverse$3 = path => {
  // NOTE: this only updates the order of the points
  var cloned = clone_1$3(path);
  cloned.points = path.points.slice().reverse();
  return cloned;
};

var reverse_1$3 = reverse$3;
/**
 * Create a string representing the contents of the given path.
 * @param {path2} geometry - the path
 * @returns {String} a representive string
 * @alias module:modeling/geometries/path2.toString
 *
 * @example
 * console.out(toString(path))
 */

var toString$3 = geometry => {
  var points = toPoints_1(geometry);
  var result = 'path (' + points.length + ' points, ' + geometry.isClosed + '):\n[\n';
  points.forEach(point => {
    result += '  ' + vec2.toString(point) + ',\n';
  });
  result += ']\n';
  return result;
};

var toString_1$3 = toString$3;
/**
 * Produce a compact binary representation from the given path.
 * @param {path2} geometry - the path
 * @returns {TypedArray} compact binary representation
 * @alias module:modeling/geometries/path2.toCompactBinary
 */

var toCompactBinary = geom => {
  var points = geom.points;
  var transforms = geom.transforms;
  var color = [-1, -1, -1, -1];
  if (geom.color) color = geom.color; // FIXME why Float32Array?

  var compacted = new Float32Array(1 + 16 + 1 + 4 + points.length * 2); // type + transforms + isClosed + color + points data

  compacted[0] = 2; // type code: 0 => geom2, 1 => geom3 , 2 => path2

  compacted[1] = transforms[0];
  compacted[2] = transforms[1];
  compacted[3] = transforms[2];
  compacted[4] = transforms[3];
  compacted[5] = transforms[4];
  compacted[6] = transforms[5];
  compacted[7] = transforms[6];
  compacted[8] = transforms[7];
  compacted[9] = transforms[8];
  compacted[10] = transforms[9];
  compacted[11] = transforms[10];
  compacted[12] = transforms[11];
  compacted[13] = transforms[12];
  compacted[14] = transforms[13];
  compacted[15] = transforms[14];
  compacted[16] = transforms[15];
  compacted[17] = geom.isClosed ? 1 : 0;
  compacted[18] = color[0];
  compacted[19] = color[1];
  compacted[20] = color[2];
  compacted[21] = color[3];

  for (var j = 0; j < points.length; j++) {
    var ci = j * 2 + 22;
    var point = points[j];
    compacted[ci] = point[0];
    compacted[ci + 1] = point[1];
  } // TODO: how about custom properties or fields ?


  return compacted;
};

var toCompactBinary_1 = toCompactBinary;
/**
 * Transform the given geometry using the given matrix.
 * This is a lazy transform of the points, as this function only adjusts the transforms.
 * The transforms are applied when accessing the points via toPoints().
 * @param {mat4} matrix - the matrix to transform with
 * @param {path2} geometry - the geometry to transform
 * @returns {path2} a new path
 * @alias module:modeling/geometries/path2.transform
 *
 * @example
 * let newpath = transform(fromZRotation(Math.PI / 4), path)
 */

var transform$5 = (matrix, geometry) => {
  var transforms = mat4.multiply(mat4.create(), matrix, geometry.transforms);
  return Object.assign({}, geometry, {
    transforms
  });
};

var transform_1$5 = transform$5;
/**
 * Represents a 2D geometry consisting of a list of ordered points.
 * @see {@link path2} for data structure information.
 * @module modeling/geometries/path2
 */

var path2$2 = {
  appendArc: appendArc_1,
  appendBezier: appendBezier_1,
  appendPoints: appendPoints_1,
  clone: clone_1$3,
  close: close_1,
  concat: concat_1,
  create: create_1$4,
  eachPoint: eachPoint_1,
  equals: equals_1$3,
  fromPoints: fromPoints_1$3,
  fromCompactBinary: fromCompactBinary_1,
  isA: isA_1$1,
  reverse: reverse_1$3,
  toPoints: toPoints_1,
  toString: toString_1$3,
  toCompactBinary: toCompactBinary_1,
  transform: transform_1$5
};
/**
 * Calculate the area under the given points.
 * @param {Array} points - list of 2D points
 * @return {Number} area under the given points
 * @alias module:modeling/maths/utils.area
 */

var area$1 = points => {
  var area = 0;

  for (var i = 0; i < points.length; i++) {
    var j = (i + 1) % points.length;
    area += points[i][0] * points[j][1];
    area -= points[j][0] * points[i][1];
  }

  return area / 2.0;
};

var area_1 = area$1;
/**
 * Measure the area under the given polygon.
 *
 * @param {poly2} polygon - the polygon to measure
 * @return {Number} the area of the polygon
 * @alias module:modeling/geometries/poly2.measureArea
 */

var measureArea$1 = polygon => area_1(polygon.vertices);

var measureArea_1$1 = measureArea$1;
/**
 * Represents a convex 2D polygon consisting of a list of ordered vertices.
 * @typedef {Object} poly2
 * @property {Array} vertices - list of ordered vertices (2D)
 */

/**
 * Creates a new polygon with initial values.
 *
 * @param {Array} [vertices] - list of vertices (2D)
 * @returns {poly2} a new polygon
 * @alias module:modeling/geometries/poly2.create
 *
 * @example
 * let polygon = create()
 */

var create$3 = vertices => {
  if (vertices === undefined || vertices.length < 3) {
    vertices = []; // empty contents
  }

  return {
    vertices: vertices
  };
};

var create_1$3 = create$3;
/**
 * Flip the give polygon, rotating the opposite direction.
 *
 * @param {poly2} polygon - the polygon to flip
 * @returns {poly2} a new polygon
 * @alias module:modeling/geometries/poly2.flip
 */

var flip = polygon => {
  var vertices = polygon.vertices.slice().reverse();
  return create_1$3(vertices);
};

var flip_1 = flip;
/**
 * Determine if the given points are inside the given polygon.
 *
 * @param {Array} points - a list of points, where each point is an array with X and Y values
 * @param {poly2} polygon - a 2D polygon
 * @return {Integer} 1 if all points are inside, 0 if some or none are inside
 * @alias module:modeling/geometries/poly2.arePointsInside
 */

var arePointsInside = (points, polygon) => {
  if (points.length === 0) return 0; // nothing to check

  var vertices = polygon.vertices;
  if (vertices.length < 3) return 0; // nothing can be inside an empty polygon

  if (measureArea_1$1(polygon) < 0) {
    polygon = flip_1(polygon); // CCW is required
  }

  var sum = points.reduce((acc, point) => acc + isPointInside(point, vertices), 0);
  return sum === points.length ? 1 : 0;
};
/*
 * Determine if the given point is inside the polygon.
 *
 * @see http://erich.realtimerendering.com/ptinpoly/ (Crossings Test)
 * @param {Array} point - an array with X and Y values
 * @param {Array} polygon - a list of points, where each point is an array with X and Y values
 * @return {Integer} 1 if the point is inside, 0 if outside
 */


var isPointInside = (point, polygon) => {
  var numverts = polygon.length;
  var tx = point[0];
  var ty = point[1];
  var vtx0 = polygon[numverts - 1];
  var vtx1 = polygon[0];
  var yflag0 = vtx0[1] > ty;
  var insideFlag = 0;
  var i = 0;

  for (var j = numverts + 1; --j;) {
    /*
     * check if Y endpoints straddle (are on opposite sides) of point's Y
     * if so, +X ray could intersect this edge.
     */
    var yflag1 = vtx1[1] > ty;

    if (yflag0 !== yflag1) {
      /*
       * check if X endpoints are on same side of the point's X
       * if so, it's easy to test if edge hits or misses.
       */
      var xflag0 = vtx0[0] > tx;
      var xflag1 = vtx1[0] > tx;

      if (xflag0 && xflag1) {
        /* if edge's X values are both right of the point, then the point must be inside */
        insideFlag = !insideFlag;
      } else {
        /*
         * if X endpoints straddle the point, then
         * the compute intersection of polygon edge with +X ray
         * if intersection >= point's X then the +X ray hits it.
         */
        if (vtx1[0] - (vtx1[1] - ty) * (vtx0[0] - vtx1[0]) / (vtx0[1] - vtx1[1]) >= tx) {
          insideFlag = !insideFlag;
        }
      }
    }
    /* move to next pair of vertices, retaining info as possible */


    yflag0 = yflag1;
    vtx0 = vtx1;
    vtx1 = polygon[++i];
  }

  return insideFlag;
};

var arePointsInside_1 = arePointsInside;
/**
 * Represents a 2D polygon consisting of a list of ordered vertices.
 * @see {@link poly2} for data structure information.
 * @module modeling/geometries/poly2
 */

var poly2 = {
  arePointsInside: arePointsInside_1,
  create: create_1$3,
  flip: flip_1,
  measureArea: measureArea_1$1
};
/**
 * Geometries are objects that represent the contents of primitives or the results of operations.
 * Note: Geometries are consider immutable, so never change the contents directly.
 * @module modeling/geometries
 * @example
 * const { geom2, geom3, path2, poly2, poly3 } = require('@jscad/modeling').geometries
 */

var geometries$3 = {
  geom2: geom2$2,
  geom3: geom3$2,
  path2: path2$2,
  poly2: poly2,
  poly3: poly3
};
/**
 * Represents a unbounded line in 2D space, positioned at a point of origin.
 * A line is parametrized by a normal vector (perpendicular to the line, rotated 90 degrees counter clockwise) and
 * distance from the origin.
 *
 * Equation: A Point (P) is on Line (L) if dot(L.normal, P) == L.distance
 *
 * The contents of the array are a normal [0,1] and a distance [2].
 * @typedef {Array} line2
 */

/**
 * Create a line, positioned at 0,0, and running along the X axis.
 *
 * @returns {line2} a new unbounded line
 * @alias module:modeling/maths/line2.create
 */

var create$2 = () => [0, 1, 0]; // normal and distance


var create_1$2 = create$2;
/**
 * Create a clone of the given line.
 *
 * @param {line2} line - line to clone
 * @returns {line2} a new unbounded line
 * @alias module:modeling/maths/line2.clone
 */

var clone$2 = line => {
  var out = create_1$2();
  out[0] = line[0];
  out[1] = line[1];
  out[2] = line[2];
  return out;
};

var clone_1$2 = clone$2;
/**
 * Return the direction of the given line.
 *
 * @param {line2} line - line of reference
 * @return {vec2} a vector in the direction of the line
 * @alias module:modeling/maths/line2.direction
 */

var direction$1 = line => {
  var vector = vec2.normal(vec2.create(), line);
  vec2.negate(vector, vector);
  return vector;
};

var direction_1$1 = direction$1;
/**
 * Return the origin of the given line.
 *
 * @param {line2} line - line of reference
 * @return {vec2} the origin of the line
 * @alias module:modeling/maths/line2.origin
 */

var origin$1 = line => vec2.scale(vec2.create(), line, line[2]);

var origin_1$1 = origin$1;
/**
 * Determine the closest point on the given line to the given point.
 *
 * @param {line2} line - line of reference
 * @param {vec2} point - point of reference
 * @returns {vec2} closest point
 * @alias module:modeling/maths/line2.closestPoint
 */

var closestPoint$1 = (line, point) => {
  // linear function of AB
  var a = origin_1$1(line);
  var b = direction_1$1(line);
  var m1 = (b[1] - a[1]) / (b[0] - a[0]);
  var t1 = a[1] - m1 * a[0]; // linear function of PC

  var m2 = -1 / m1; // perpendicular

  var t2 = point[1] - m2 * point[0]; // c.x * m1 + t1 === c.x * m2 + t2

  var x = (t2 - t1) / (m1 - m2);
  var y = m1 * x + t1;
  var closest = vec2.fromValues(x, y);
  return closest;
};

var closestPoint_1$1 = closestPoint$1;
/**
 * Copy the given line to the receiving line.
 *
 * @param {line2} out - receiving line
 * @param {line2} line - line to copy
 * @returns {line2} out
 * @alias module:modeling/maths/line2.copy
 */

var copy$1 = (out, line) => {
  out[0] = line[0];
  out[1] = line[1];
  out[2] = line[2];
  return out;
};

var copy_1$1 = copy$1;
/**
 * Calculate the distance (positive) between the given point and line.
 *
 * @param {line2} line - line of reference
 * @param {vec2} point - point of reference
 * @return {Number} distance between line and point
 * @alias module:modeling/maths/line2.distanceToPoint
 */

var distanceToPoint$1 = (line, point) => {
  var distance = vec2.dot(point, line);
  distance = Math.abs(distance - line[2]);
  return distance;
};

var distanceToPoint_1$1 = distanceToPoint$1;
/**
 * Compare the given lines for equality.
 *
 * @param {line2} a - first line to compare
 * @param {line2} b - second line to compare
 * @return {Boolean} true if lines are equal
 * @alias module:modeling/maths/line2.equals
 */

var equals$2 = (line1, line2) => line1[0] === line2[0] && line1[1] === line2[1] && line1[2] === line2[2];

var equals_1$2 = equals$2;
/**
 * Create a new line that passes through the given points.
 *
 * @param {line2} out - receiving line
 * @param {vec2} point1 - start point of the line
 * @param {vec2} point2 - end point of the line
 * @returns {line2} a new unbounded line
 * @alias module:modeling/maths/line2.fromPoints
 */

var fromPoints$2 = (out, point1, point2) => {
  var vector = vec2.subtract(vec2.create(), point2, point1); // directional vector

  vec2.normal(vector, vector);
  vec2.normalize(vector, vector); // normalized

  var distance = vec2.dot(point1, vector);
  out[0] = vector[0];
  out[1] = vector[1];
  out[2] = distance;
  return out;
};

var fromPoints_1$2 = fromPoints$2;
/**
 * Creates a new line initialized with the given values.
 *
 * @param {Number} x - X coordinate of the unit normal
 * @param {Number} y - Y coordinate of the unit normal
 * @param {Number} d - distance of the line from [0,0]
 * @returns {line2} a new unbounded line
 * @alias module:modeling/maths/line2.fromValues
 */

var fromValues = (x, y, w) => {
  var out = create_1$2();
  out[0] = x;
  out[1] = y;
  out[2] = w;
  return out;
};

var fromValues_1 = fromValues; // Normals are directional vectors with component values from 0 to 1.0, requiring specialized comparision
// This EPS is derived from a serieas of tests to determine the optimal precision for comparing coplanar polygons,
// as provided by the sphere primitive at high segmentation
// This EPS is for 64 bit Number values

var NEPS$2 = 1e-13;
/**
 * Compare two normals (unit vectors) for near equality.
 * @param {vec3} a - normal a
 * @param {vec3} b - normal b
 * @returns {Boolean} true if a and b are nearly equal
 * @alias module:modeling/maths/utils.aboutEqualNormals
 */

var aboutEqualNormals$2 = (a, b) => Math.abs(a[0] - b[0]) <= NEPS$2 && Math.abs(a[1] - b[1]) <= NEPS$2 && Math.abs(a[2] - b[2]) <= NEPS$2;

var aboutEqualNormals_1 = aboutEqualNormals$2;
/**
 * Get the X coordinate of a point with a certain Y coordinate, interpolated between two points.
 * Interpolation is robust even if the points have the same Y coordinate
 * @param {vec2} point1
 * @param {vec2} point2
 * @param {Number} y
 * @return {Array} X and Y of interpolated point
 * @alias module:modeling/maths/utils.interpolateBetween2DPointsForY
 */

var interpolateBetween2DPointsForY = (point1, point2, y) => {
  var f1 = y - point1[1];
  var f2 = point2[1] - point1[1];

  if (f2 < 0) {
    f1 = -f1;
    f2 = -f2;
  }

  var t;

  if (f1 <= 0) {
    t = 0.0;
  } else if (f1 >= f2) {
    t = 1.0;
  } else if (f2 < 1e-10) {
    // FIXME Should this be EPS?
    t = 0.5;
  } else {
    t = f1 / f2;
  }

  var result = point1[0] + t * (point2[0] - point1[0]);
  return result;
};

var interpolateBetween2DPointsForY_1 = interpolateBetween2DPointsForY;
/**
 * Calculate the intersect point of the two line segments (p1-p2 and p3-p4), end points included.
 * Note: If the line segments do NOT intersect then undefined is returned.
 * @see http://paulbourke.net/geometry/pointlineplane/
 * @param {vec2} p1 - first point of first line segment
 * @param {vec2} p2 - second point of first line segment
 * @param {vec2} p3 - first point of second line segment
 * @param {vec2} p4 - second point of second line segment
 * @returns {vec2} intersection point of the two line segments, or undefined
 * @alias module:modeling/maths/utils.intersect
 */

var intersect$3 = (p1, p2, p3, p4) => {
  // Check if none of the lines are of length 0
  if (p1[0] === p2[0] && p1[1] === p2[1] || p3[0] === p4[0] && p3[1] === p4[1]) {
    return undefined;
  }

  var denominator = (p4[1] - p3[1]) * (p2[0] - p1[0]) - (p4[0] - p3[0]) * (p2[1] - p1[1]); // Lines are parallel

  if (Math.abs(denominator) < Number.MIN_VALUE) {
    return undefined;
  }

  var ua = ((p4[0] - p3[0]) * (p1[1] - p3[1]) - (p4[1] - p3[1]) * (p1[0] - p3[0])) / denominator;
  var ub = ((p2[0] - p1[0]) * (p1[1] - p3[1]) - (p2[1] - p1[1]) * (p1[0] - p3[0])) / denominator; // is the intersection along the segments

  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return undefined;
  } // Return the x and y coordinates of the intersection


  var x = p1[0] + ua * (p2[0] - p1[0]);
  var y = p1[1] + ua * (p2[1] - p1[1]);
  return [x, y];
};

var intersect_1$1 = intersect$3;

var solve2Linear$2 = (a, b, c, d, u, v) => {
  var det = a * d - b * c;
  var invdet = 1.0 / det;
  var x = u * d - b * v;
  var y = -u * c + a * v;
  x *= invdet;
  y *= invdet;
  return [x, y];
};

var solve2Linear_1 = solve2Linear$2;
/**
 * Utility functions for maths.
 * @module modeling/maths/utils
 * @example
 * const { area, solve2Linear } = require('@jscad/maths').utils
 */

var utils$1 = {
  aboutEqualNormals: aboutEqualNormals_1,
  area: area_1,
  interpolateBetween2DPointsForY: interpolateBetween2DPointsForY_1,
  intersect: intersect_1$1,
  solve2Linear: solve2Linear_1
};
var {
  solve2Linear: solve2Linear$1
} = utils$1;
/**
 * Return the point of intersection between the given lines.
 *
 * NOTES:
 * The point will have Infinity values if the lines are paralell.
 * The point will have NaN values if the lines are the same.
 *
 * @param {line2} line1 - line of reference
 * @param {line2} line2 - line of reference
 * @return {vec2} the point of intersection
 * @alias module:modeling/maths/line2.intersectPointOfLines
 */

var intersectToLine = (line1, line2) => {
  var point = solve2Linear$1(line1[0], line1[1], line2[0], line2[1], line1[2], line2[2]);
  return vec2.clone(point);
};

var intersectPointOfLines = intersectToLine;
/**
 * Create a new line in the opposite direction as the given.
 *
 * @param {line2} out - receiving line
 * @param {line2} line - line to reverse
 * @returns {line2} out
 * @alias module:modeling/maths/line2.reverse
 */

var reverse$2 = (out, line) => {
  var normal = vec2.negate(vec2.create(), line);
  var distance = -line[2];
  return copy_1$1(out, fromValues_1(normal[0], normal[1], distance));
};

var reverse_1$2 = reverse$2;
/**
 * Return a string representing the given line.
 *
 * @param {line2} line - line of reference
 * @returns {String} string representation
 * @alias module:modeling/maths/line2.toString
 */

var toString$2 = line => "line2: (".concat(line[0].toFixed(7), ", ").concat(line[1].toFixed(7), ", ").concat(line[2].toFixed(7), ")");

var toString_1$2 = toString$2;
/**
 * Transforms the given line using the given matrix.
 *
 * @param {line2} out - receiving line
 * @param {line2} line - line to transform
 * @param {mat4} matrix - matrix to transform with
 * @returns {line2} out
 * @alias module:modeling/maths/line2.transform
 */

var transform$4 = (out, line, matrix) => {
  var org = origin_1$1(line);
  var dir = direction_1$1(line);
  vec2.transform(org, org, matrix);
  vec2.transform(dir, dir, matrix);
  return fromPoints_1$2(out, org, dir);
};

var transform_1$4 = transform$4;
/**
 * Determine the X coordinate of the given line at the Y coordinate.
 *
 * The X coordinate will be Infinity if the line is parallel to the X axis.
 *
 * @param {line2} line - line of reference
 * @param {Number} y - Y coordinate on the line
 * @return {Number} the X coordinate on the line
 * @alias module:modeling/maths/line2.xAtY
 */

var xAtY = (line, y) => {
  var x = (line[2] - line[1] * y) / line[0];

  if (Number.isNaN(x)) {
    var org = origin_1$1(line);
    x = org[0];
  }

  return x;
};

var xAtY_1 = xAtY;
/**
 * Represents a unbounded line in 2D space, positioned at a point of origin.
 * @see {@link line2} for data structure information.
 * @module modeling/maths/line2
 */

var line2 = {
  clone: clone_1$2,
  closestPoint: closestPoint_1$1,
  copy: copy_1$1,
  create: create_1$2,
  direction: direction_1$1,
  distanceToPoint: distanceToPoint_1$1,
  equals: equals_1$2,
  fromPoints: fromPoints_1$2,
  fromValues: fromValues_1,
  intersectPointOfLines: intersectPointOfLines,
  origin: origin_1$1,
  reverse: reverse_1$2,
  toString: toString_1$2,
  transform: transform_1$4,
  xAtY: xAtY_1
};
/**
 * Represents a unbounded line in 3D space, positioned at a point of origin.
 * A line is parametrized by a point of origin and a directional vector.
 * The array contents are two 3D vectors; origin and directional vector.
 * @see https://en.wikipedia.org/wiki/Hesse_normal_form
 * @typedef {Array} line3
 */

/**
 * Create a line, positioned at 0,0,0 and lying on the X axis.
 *
 * @returns {line3} a new unbounded line
 * @alias module:modeling/maths/line3.create
 */

var create$1 = () => [vec3$1.fromValues(0, 0, 0), // origin
vec3$1.fromValues(0, 0, 1) // direction
];

var create_1$1 = create$1;
/**
 * Create a clone of the given line.
 *
 * @param {line3} line - line to clone
 * @returns {line3} a new unbounded line
 * @alias module:modeling/maths/line3.clone
 */

var clone$1 = line => {
  var out = create_1$1();
  vec3$1.copy(out[0], line[0]);
  vec3$1.copy(out[1], line[1]);
  return out;
};

var clone_1$1 = clone$1;
/**
 * Determine the closest point on the given line to the given point.
 *
 * @param {line3} line - line of reference
 * @param {vec3} point - point of reference
 * @returns {vec3} a point
 * @alias module:modeling/maths/line3.closestPoint
 */

var closestPoint = (line, point) => {
  var lpoint = line[0];
  var ldirection = line[1];
  var a = vec3$1.dot(vec3$1.subtract(vec3$1.create(), point, lpoint), ldirection);
  var b = vec3$1.dot(ldirection, ldirection);
  var t = a / b;
  var closestpoint = vec3$1.scale(vec3$1.create(), ldirection, t);
  vec3$1.add(closestpoint, closestpoint, lpoint);
  return closestpoint;
};

var closestPoint_1 = closestPoint;
/**
 * Copy the given line into the receiving line.
 *
 * @param {line3} out - receiving line
 * @param {line3} line - line to copy
 * @returns {line3} out
 * @alias module:modeling/maths/line3.copy
 */

var copy = (out, line) => {
  vec3$1.copy(out[0], line[0]);
  vec3$1.copy(out[1], line[1]);
  return out;
};

var copy_1 = copy;
/**
 * Return the direction of the given line.
 *
 * @param {line3} line - line for reference
 * @return {vec3} the relative vector in the direction of the line
 * @alias module:modeling/maths/line3.direction
 */

var direction = line => line[1];

var direction_1 = direction;
/**
 * Calculate the distance (positive) between the given point and line.
 *
 * @param {line3} line - line of reference
 * @param {vec3} point - point of reference
 * @return {Number} distance between line and point
 * @alias module:modeling/maths/line3.distanceToPoint
 */

var distanceToPoint = (line, point) => {
  var closest = closestPoint_1(line, point);
  var distancevector = vec3$1.subtract(vec3$1.create(), point, closest);
  return vec3$1.length(distancevector);
};

var distanceToPoint_1 = distanceToPoint;
/**
 * Compare the given lines for equality.
 *
 * @param {line3} a - first line to compare
 * @param {line3} b - second line to compare
 * @return {Boolean} true if lines are equal
 * @alias module:modeling/maths/line3.equals
 */

var equals$1 = (line1, line2) => {
  // compare directions (unit vectors)
  if (!vec3$1.equals(line1[1], line2[1])) return false; // compare points

  if (!vec3$1.equals(line1[0], line2[0])) return false; // why would lines with the same slope (direction) and different points be equal?
  // let distance = distanceToPoint(line1, line2[0])
  // if (distance > EPS) return false

  return true;
};

var equals_1$1 = equals$1;
/**
 * Create a line from the given point (origin) and direction.
 *
 * The point can be any random point on the line.
 * The direction must be a vector with positive or negative distance from the point.
 *
 * See the logic of fromPoints() for appropriate values.
 *
 * @param {line3} out - receiving line
 * @param {vec3} point - start point of the line segment
 * @param {vec3} direction - direction of the line segment
 * @returns {line3} out
 * @alias module:modeling/maths/line3.fromPointAndDirection
 */

var fromPointAndDirection = (out, point, direction) => {
  var unit = vec3$1.normalize(vec3$1.create(), direction);
  vec3$1.copy(out[0], point);
  vec3$1.copy(out[1], unit);
  return out;
};

var fromPointAndDirection_1 = fromPointAndDirection;
var {
  solve2Linear
} = utils$1;
var {
  EPS: EPS$e
} = constants;
/**
 * Create a line the intersection of the given planes.
 *
 * @param {line3} out - receiving line
 * @param {plane} plane1 - first plane of reference
 * @param {plane} plane2 - second plane of reference
 * @returns {line3} out
 * @alias module:modeling/maths/line3.fromPlanes
 */

var fromPlanes = (out, plane1, plane2) => {
  var direction = vec3$1.cross(vec3$1.create(), plane1, plane2);
  var length = vec3$1.length(direction);

  if (length < EPS$e) {
    throw new Error('parallel planes do not intersect');
  }

  length = 1.0 / length;
  direction = vec3$1.scale(direction, direction, length);
  var absx = Math.abs(direction[0]);
  var absy = Math.abs(direction[1]);
  var absz = Math.abs(direction[2]);
  var origin;
  var r;

  if (absx >= absy && absx >= absz) {
    // find a point p for which x is zero
    r = solve2Linear(plane1[1], plane1[2], plane2[1], plane2[2], plane1[3], plane2[3]);
    origin = vec3$1.fromValues(0, r[0], r[1]);
  } else if (absy >= absx && absy >= absz) {
    // find a point p for which y is zero
    r = solve2Linear(plane1[0], plane1[2], plane2[0], plane2[2], plane1[3], plane2[3]);
    origin = vec3$1.fromValues(r[0], 0, r[1]);
  } else {
    // find a point p for which z is zero
    r = solve2Linear(plane1[0], plane1[1], plane2[0], plane2[1], plane1[3], plane2[3]);
    origin = vec3$1.fromValues(r[0], r[1], 0);
  }

  return fromPointAndDirection_1(out, origin, direction);
};

var fromPlanes_1 = fromPlanes;
/**
 * Create a line that passes through the given points.
 *
 * @param {line3} out - receiving line
 * @param {vec3} point1 - start point of the line segment
 * @param {vec3} point2 - end point of the line segment
 * @returns {line3} out
 * @alias module:modeling/maths/line3.fromPoints
 */

var fromPoints$1 = (out, point1, point2) => {
  var direction = vec3$1.subtract(vec3$1.create(), point2, point1);
  return fromPointAndDirection_1(out, point1, direction);
};

var fromPoints_1$1 = fromPoints$1;
/**
 * Determine the closest point on the given plane to the given line.
 *
 * NOTES:
 * The point of intersection will be invalid if the line is parallel to the plane, e.g. NaN.
 *
 * @param {line3} line - line of reference
 * @param {plane} plane - plane of reference
 * @returns {vec3} a point on the line
 * @alias module:modeling/maths/line3.intersectPointOfLineAndPlane
 */

var intersectToPlane = (line, plane) => {
  // plane: plane.normal * p = plane.w
  var pnormal = plane;
  var pw = plane[3];
  var lpoint = line[0];
  var ldirection = line[1]; // point: p = line.point + labda * line.direction

  var labda = (pw - vec3$1.dot(pnormal, lpoint)) / vec3$1.dot(pnormal, ldirection);
  var point = vec3$1.add(vec3$1.create(), lpoint, vec3$1.scale(vec3$1.create(), ldirection, labda));
  return point;
};

var intersectPointOfLineAndPlane = intersectToPlane;
/**
 * Return the origin of the given line.
 *
 * @param {line3} line - line of reference
 * @return {vec3} the origin of the line
 * @alias module:modeling/maths/line3.origin
 */

var origin = line => line[0];

var origin_1 = origin;
/**
 * Create a line in the opposite direction as the given.
 *
 * @param {line3} out - receiving line
 * @param {line3} line - line to reverse
 * @returns {line3} out
 * @alias module:modeling/maths/line3.reverse
 */

var reverse$1 = (out, line) => {
  var point = vec3$1.clone(line[0]);
  var direction = vec3$1.negate(vec3$1.create(), line[1]);
  return fromPointAndDirection_1(out, point, direction);
};

var reverse_1$1 = reverse$1;
/**
 * Return a string representing the given line.
 *
 * @param {line3} line - line of reference
 * @returns {String} string representation
 * @alias module:modeling/maths/line3.toString
 */

var toString$1 = line => {
  var point = line[0];
  var direction = line[1];
  return "line3: point: (".concat(point[0].toFixed(7), ", ").concat(point[1].toFixed(7), ", ").concat(point[2].toFixed(7), ") direction: (").concat(direction[0].toFixed(7), ", ").concat(direction[1].toFixed(7), ", ").concat(direction[2].toFixed(7), ")");
};

var toString_1$1 = toString$1;
/**
 * Transforms the given line using the given matrix.
 *
 * @param {line3} out - line to update
 * @param {line3} line - line to transform
 * @param {mat4} matrix - matrix to transform with
 * @returns {line3} a new unbounded line
 * @alias module:modeling/maths/line3.transform
 */

var transform$3 = (out, line, matrix) => {
  var point = line[0];
  var direction = line[1];
  var pointPlusDirection = vec3$1.add(vec3$1.create(), point, direction);
  var newpoint = vec3$1.transform(vec3$1.create(), point, matrix);
  var newPointPlusDirection = vec3$1.transform(pointPlusDirection, pointPlusDirection, matrix);
  var newdirection = vec3$1.subtract(newPointPlusDirection, newPointPlusDirection, newpoint);
  return fromPointAndDirection_1(out, newpoint, newdirection);
};

var transform_1$3 = transform$3;
/**
 * Represents a unbounded line in 3D space, positioned at a point of origin.
 * @see {@link line3} for data structure information.
 * @module modeling/maths/line3
 */

var line3 = {
  clone: clone_1$1,
  closestPoint: closestPoint_1,
  copy: copy_1,
  create: create_1$1,
  direction: direction_1,
  distanceToPoint: distanceToPoint_1,
  equals: equals_1$1,
  fromPlanes: fromPlanes_1,
  fromPointAndDirection: fromPointAndDirection_1,
  fromPoints: fromPoints_1$1,
  intersectPointOfLineAndPlane: intersectPointOfLineAndPlane,
  origin: origin_1,
  reverse: reverse_1$1,
  toString: toString_1$1,
  transform: transform_1$3
};
/**
 * Calculates the dot product of the given vectors.
 *
 * @param {vec4} a - first vector
 * @param {vec4} b - second vector
 * @returns {Number} dot product
 * @alias module:modeling/maths/vec4.dot
 */

var dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];

var dot_1 = dot;
/**
 * Create a new vector from the given scalar value.
 *
 * @param {vec4} out - receiving vector
 * @param  {Number} scalar
 * @returns {vec4} out
 * @alias module:modeling/maths/vec4.fromScalar
 */

var fromScalar = (out, scalar) => {
  out[0] = scalar;
  out[1] = scalar;
  out[2] = scalar;
  out[3] = scalar;
  return out;
};

var fromScalar_1 = fromScalar;
/**
 * Transform the given vector using the given matrix.
 *
 * @param {vec4} out - receiving vector
 * @param {vec4} vector - vector to transform
 * @param {mat4} matrix - matrix to transform with
 * @returns {vec4} out
 * @alias module:modeling/maths/vec4.transform
 */

var transform$2 = (out, vector, matrix) => {
  var [x, y, z, w] = vector;
  out[0] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w;
  out[1] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w;
  out[2] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w;
  out[3] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w;
  return out;
};

var transform_1$2 = transform$2;
/**
 * Represents a four dimensional vector.
 * @see {@link vec4} for data structure information.
 * @module modeling/maths/vec4
 */

var vec4 = {
  clone: clone_1$5,
  copy: copy_1$2,
  create: create_1$6,
  dot: dot_1,
  equals: equals_1$4,
  fromScalar: fromScalar_1,
  fromValues: fromValues_1$1,
  toString: toString_1$6,
  transform: transform_1$2
};
/**
 * Maths are computational units for fundamental Euclidean geometry. All maths operate upon array data structures.
 * Note: Maths data structues are consider immutable, so never change the contents directly.
 * @see Most computations are based upon the glMatrix library (glmatrix.net)
 * @module modeling/maths
 * @example
 * const { constants, line2, mat4, vec2, vec3 } = require('@jscad/modeling').maths

 */

var maths = {
  constants: constants,
  line2: line2,
  line3: line3,
  mat4: mat4,
  plane: plane$1,
  utils: utils$1,
  vec2: vec2,
  vec3: vec3$1,
  vec4: vec4
};
var cache$2 = new WeakMap();
/*
 * Measure the area of the given geometry.
 * NOTE: paths are infinitely narrow and do not have an area
 *
 * @param {path2} geometry - geometry to measure
 * @returns {Number} area of the geometry
 */

var measureAreaOfPath2 = () => 0;
/*
 * Measure the area of the given geometry.
 * For a counter clockwise rotating geometry (about Z) the area is positive, otherwise negative.
 *
 * @see http://paulbourke.net/geometry/polygonmesh/
 * @param {geom2} geometry - 2D geometry to measure
 * @returns {Number} area of the geometry
 */


var measureAreaOfGeom2 = geometry => {
  var area = cache$2.get(geometry);
  if (area) return area;
  var sides = geom2$2.toSides(geometry);
  area = sides.reduce((area, side) => area + (side[0][0] * side[1][1] - side[0][1] * side[1][0]), 0);
  area *= 0.5;
  cache$2.set(geometry, area);
  return area;
};
/*
 * Measure the area of the given geometry.
 *
 * @param {geom3} geometry - 3D geometry to measure
 * @returns {Number} area of the geometry
 */


var measureAreaOfGeom3 = geometry => {
  var area = cache$2.get(geometry);
  if (area) return area;
  var polygons = geom3$2.toPolygons(geometry);
  area = polygons.reduce((area, polygon) => area + poly3.measureArea(polygon), 0);
  cache$2.set(geometry, area);
  return area;
};
/**
 * Measure the area of the given geometries.
 * @param {...Objects} geometries - the geometries to measure
 * @return {Number|Array} the area, or a list of areas for each geometry
 * @alias module:modeling/measurements.measureArea
 *
 * @example
 * let area = measureArea(sphere())
 */


var measureArea = function measureArea() {
  for (var _len8 = arguments.length, geometries = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    geometries[_key8] = arguments[_key8];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  var results = geometries.map(geometry => {
    if (path2$2.isA(geometry)) return measureAreaOfPath2();
    if (geom2$2.isA(geometry)) return measureAreaOfGeom2(geometry);
    if (geom3$2.isA(geometry)) return measureAreaOfGeom3(geometry);
    return 0;
  });
  return results.length === 1 ? results[0] : results;
};

var measureArea_1 = measureArea;
/**
 * Measure the total (aggregate) area for the given geometries.
 * Note: This measurement will not account for overlapping geometry
 * @param {...Object} geometries - the geometries to measure.
 * @return {Number} the total surface area for the group of geometry.
 * @alias module:modeling/measurements.measureAggregateArea
 *
 * @example
 * let totalArea = measureAggregateArea(sphere(),cube())
 */

var measureAggregateArea = function measureAggregateArea() {
  for (var _len9 = arguments.length, geometries = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    geometries[_key9] = arguments[_key9];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('measureAggregateArea: no geometries supplied');
  var areas = measureArea_1(geometries);

  if (geometries.length === 1) {
    return areas;
  }

  var result = 0;
  return areas.reduce((result, area) => result + area, result);
};

var measureAggregateArea_1 = measureAggregateArea;
var cache$1 = new WeakMap();
/*
 * Measure the min and max bounds of the given (path2) geometry.points.
 * @return {Array[]} the min and max bounds for the geometry.points
 */

var measureBoundingBoxOfPath2Points = points => {
  var boundingBox = cache$1.get(points);
  if (boundingBox) return boundingBox;
  var minpoint;

  if (points.length === 0) {
    minpoint = vec2.create();
  } else {
    minpoint = vec2.clone(points[0]);
  }

  var maxpoint = vec2.clone(minpoint);
  points.forEach(point => {
    vec2.min(minpoint, minpoint, point);
    vec2.max(maxpoint, maxpoint, point);
  });
  boundingBox = [[minpoint[0], minpoint[1], 0], [maxpoint[0], maxpoint[1], 0]];
  cache$1.set(points, boundingBox);
  return boundingBox;
};
/*
 * Measure the min and max bounds of the given (path2) geometry.
 * @return {Array[]} the min and max bounds for the geometry
 */


var measureBoundingBoxOfPath2 = geometry => {
  var boundingBox = cache$1.get(geometry);
  if (boundingBox) return boundingBox;

  if (mat4.isOnlyTransformScale(geometry.transforms)) {
    // get boundingBox of original points and transform it
    boundingBox = transformBoundingBox(measureBoundingBoxOfPath2Points(geometry.points), geometry.transforms);
  } else {
    // transform the points and then caclulate the boundingBox
    boundingBox = measureBoundingBoxOfPath2Points(path2$2.toPoints(geometry));
  }

  cache$1.set(geometry, boundingBox);
  return boundingBox;
};
/*
 * Measure the min and max bounds of the given (geom2) geometry.points/sides.
 * @return {Array[]} the min and max bounds for the geometr.points/sidesy
 */


var measureBoundingBoxOfGeom2Points = _ref => {
  var {
    points,
    sides
  } = _ref;
  var cacheKey = points || sides;
  var boundingBox = cache$1.get(cacheKey);
  if (boundingBox) return boundingBox;
  var minpoint, maxpoint;

  if (points) {
    if (points.length === 0) {
      minpoint = vec2.create();
    } else {
      minpoint = vec2.clone(points[0]);
    }

    maxpoint = vec2.clone(minpoint);
    points.forEach(point => {
      vec2.min(minpoint, minpoint, point);
      vec2.max(maxpoint, maxpoint, point);
    });
  } else {
    // sides
    // to avoid calling costly toPoints, we take advantage of the knowlege how the toPoints works
    if (sides.length === 0) {
      minpoint = vec2.create();
    } else {
      minpoint = vec2.clone(sides[0][0]);
    }

    maxpoint = vec2.clone(minpoint);
    sides.forEach(side => {
      vec2.min(minpoint, minpoint, side[0]);
      vec2.max(maxpoint, maxpoint, side[0]);
    });
  }

  boundingBox = [[minpoint[0], minpoint[1], 0], [maxpoint[0], maxpoint[1], 0]];
  cache$1.set(cacheKey, boundingBox);
  return boundingBox;
};
/*
 * Measure the min and max bounds of the given (geom2) geometry.
 * @return {Array[]} the min and max bounds for the geometry
 */


var measureBoundingBoxOfGeom2 = geometry => {
  var boundingBox = cache$1.get(geometry);
  if (boundingBox) return boundingBox;

  if (mat4.isOnlyTransformScale(geometry.transforms)) {
    // get boundingBox of original points and transform it
    boundingBox = transformBoundingBox(measureBoundingBoxOfGeom2Points(geometry), geometry.transforms);
  } else {
    // transform the points and then caclulate the boundingBox
    boundingBox = measureBoundingBoxOfGeom2Points({
      points: geom2$2.toPoints(geometry)
    });
  }

  cache$1.set(geometry, boundingBox);
  return boundingBox;
};
/*
 * Measure the min and max bounds of the given (geom3) geometry.polygons.
 * @return {Array[]} the min and max bounds for the geometry.polygons
 */


var measureBoundingBoxOfGeom3Polygons = polygons => {
  var boundingBox = cache$1.get(polygons);
  if (boundingBox) return boundingBox;
  var minpoint = vec3$1.create();

  if (polygons.length > 0) {
    var points = poly3.toPoints(polygons[0]);
    vec3$1.copy(minpoint, points[0]);
  }

  var maxpoint = vec3$1.clone(minpoint);
  polygons.forEach(polygon => {
    poly3.toPoints(polygon).forEach(point => {
      vec3$1.min(minpoint, minpoint, point);
      vec3$1.max(maxpoint, maxpoint, point);
    });
  });
  boundingBox = [[minpoint[0], minpoint[1], minpoint[2]], [maxpoint[0], maxpoint[1], maxpoint[2]]];
  cache$1.set(polygons, boundingBox);
  return boundingBox;
};
/*
 * Measure the min and max bounds of the given (geom3) geometry.
 * @return {Array[]} the min and max bounds for the geometry
 */


var measureBoundingBoxOfGeom3 = geometry => {
  var boundingBox = cache$1.get(geometry);
  if (boundingBox) return boundingBox;

  if (mat4.isOnlyTransformScale(geometry.transforms)) {
    // get boundingBox of original points and transform it
    boundingBox = transformBoundingBox(measureBoundingBoxOfGeom3Polygons(geometry.polygons), geometry.transforms);
  } else {
    // transform the points and then caclulate the boundingBox
    boundingBox = measureBoundingBoxOfGeom3Polygons(geom3$2.toPolygons(geometry));
  }

  cache$1.set(geometry, boundingBox);
  return boundingBox;
};

var transformBoundingBox = (boundingBox, transforms) => {
  if (transforms && !mat4.isIdentity(transforms)) {
    return [vec3$1.transform(vec3$1.create(), boundingBox[0], transforms), vec3$1.transform(vec3$1.create(), boundingBox[1], transforms)];
  }

  return boundingBox;
};
/**
 * Measure the min and max bounds of the given geometries.
 * @param {...Object} geometries - the geometries to measure
 * @return {Array} the min and max bounds, or a list of bounds for each geometry
 * @alias module:modeling/measurements.measureBoundingBox
 *
 * @example
 * let bounds = measureBoundingBox(sphere())
 */


var measureBoundingBox = function measureBoundingBox() {
  for (var _len10 = arguments.length, geometries = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    geometries[_key10] = arguments[_key10];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  var results = geometries.map(geometry => {
    if (path2$2.isA(geometry)) return measureBoundingBoxOfPath2(geometry);
    if (geom2$2.isA(geometry)) return measureBoundingBoxOfGeom2(geometry);
    if (geom3$2.isA(geometry)) return measureBoundingBoxOfGeom3(geometry);
    return [[0, 0, 0], [0, 0, 0]];
  });
  return results.length === 1 ? results[0] : results;
};
/**
 * Shortcut for geometries that are complex but have a fast way to calculate bounding box.
 * Ellipsoid, or cylinder can provide boundingBox that pre-calculated based on parameters without traversing points.
 *
 * Another option is to calculate boundingBox durint toPoints (so the boundingBox could be calculated during transform)
 *
 * NOTE: It seems that measureBoundingBox is used all over the place, and it would be wise to allow
 * shortcuts for calculating it, as default implementation goes through all points in geometry which is bound to be slow.
*/


measureBoundingBox.setCache = (geometry, boundingBox) => cache$1.set(geometry, boundingBox);

var measureBoundingBox_1 = measureBoundingBox;
/**
 * Measure the aggregated minimum and maximum bounds for the given geometries.
 * @param {...Object} geometries - the geometries to measure
 * @return {Array} the min and max bounds for the group of geometry, i.e. [[x,y,z],[X,Y,Z]]
 * @alias module:modeling/measurements.measureAggregateBoundingBox
 *
 * @example
 * let bounds = measureAggregateBoundingBox(sphere(),cube())
 */

var measureAggregateBoundingBox = function measureAggregateBoundingBox() {
  for (var _len11 = arguments.length, geometries = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    geometries[_key11] = arguments[_key11];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('measureAggregateBoundingBox: no geometries supplied');
  var bounds = measureBoundingBox_1(geometries);

  if (geometries.length === 1) {
    return bounds;
  }

  var result = [[Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]];
  return bounds.reduce((result, item) => {
    result = [min_1$1(result[0], result[0], item[0]), max_1$1(result[1], result[1], item[1])];
    return result;
  }, result);
};

var measureAggregateBoundingBox_1 = measureAggregateBoundingBox;
var {
  EPS: EPS$d
} = constants;

var calculateEpsilonFromBounds = (bounds, dimensions) => {
  var total = 0;

  for (var i = 0; i < dimensions; i++) {
    total += bounds[1][i] - bounds[0][i];
  }

  return EPS$d * total / dimensions;
};

var calculateEpsilonFromBounds_1 = calculateEpsilonFromBounds;
var {
  geom2: geom2$1,
  geom3: geom3$1,
  path2: path2$1
} = geometries$3;
/**
 * Measure the aggregated Epsilon for the given geometries.
 * @param {...Object} geometries - the geometries to measure
 * @return {Number} the aggregated Epsilon for the whole group of geometries
 * @alias module:modeling/measurements.measureAggregateEpsilon
 *
 * @example
 * let groupEpsilon = measureAggregateEpsilon(sphere(),cube())
 */

var measureAggregateEpsilon = function measureAggregateEpsilon() {
  for (var _len12 = arguments.length, geometries = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    geometries[_key12] = arguments[_key12];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('measureAggregateEpsilon: no geometries supplied');
  var bounds = measureAggregateBoundingBox_1(geometries);
  var dimensions = 0;
  dimensions = geometries.reduce((dimensions, geometry) => {
    if (path2$1.isA(geometry) || geom2$1.isA(geometry)) return Math.max(dimensions, 2);
    if (geom3$1.isA(geometry)) return Math.max(dimensions, 3);
    return 0;
  }, dimensions);
  return calculateEpsilonFromBounds_1(bounds, dimensions);
};

var measureAggregateEpsilon_1 = measureAggregateEpsilon;
var cache = new WeakMap();
/*
 * Measure the volume of the given geometry.
 * NOTE: paths are infinitely narrow and do not have an volume
 *
 * @param {Path2} geometry - geometry to measure
 * @returns {Number} volume of the geometry
 */

var measureVolumeOfPath2 = () => 0;
/*
 * Measure the volume of the given geometry.
 * NOTE: 2D geometry are infinitely thin and do not have an volume
 *
 * @param {Geom2} geometry - 2D geometry to measure
 * @returns {Number} volume of the geometry
 */


var measureVolumeOfGeom2 = () => 0;
/*
 * Measure the volume of the given geometry.
 *
 * @param {Geom3} geometry - 3D geometry to measure
 * @returns {Number} volume of the geometry
 */


var measureVolumeOfGeom3 = geometry => {
  var volume = cache.get(geometry);
  if (volume) return volume;
  var polygons = geom3$2.toPolygons(geometry);
  volume = polygons.reduce((volume, polygon) => volume + poly3.measureSignedVolume(polygon), 0);
  cache.set(geometry, volume);
  return volume;
};
/**
 * Measure the volume of the given geometries.
 * @param {...Object} geometries - the geometries to measure
 * @return {Number|Array} the volume, or a list of volumes for each geometry
 * @alias module:modeling/measurements.measureVolume
 *
 * @example
 * let volume = measureVolume(sphere())
 */


var measureVolume = function measureVolume() {
  for (var _len13 = arguments.length, geometries = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    geometries[_key13] = arguments[_key13];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  var results = geometries.map(geometry => {
    if (path2$2.isA(geometry)) return measureVolumeOfPath2();
    if (geom2$2.isA(geometry)) return measureVolumeOfGeom2();
    if (geom3$2.isA(geometry)) return measureVolumeOfGeom3(geometry);
    return 0;
  });
  return results.length === 1 ? results[0] : results;
};

var measureVolume_1 = measureVolume;
/**
 * Measure the total (aggregate) volume for the given geometries.
 * Note: This measurement will not account for overlapping geometry
 * @param {...Object} geometries - the geometries to measure.
 * @return {Number} the volume for the group of geometry.
 * @alias module:modeling/measurements.measureAggregateVolume
 *
 * @example
 * let totalVolume = measureAggregateVolume(sphere(),cube())
 */

var measureAggregateVolume = function measureAggregateVolume() {
  for (var _len14 = arguments.length, geometries = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    geometries[_key14] = arguments[_key14];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('measureAggregateVolume: no geometries supplied');
  var volumes = measureVolume_1(geometries);

  if (geometries.length === 1) {
    return volumes;
  }

  var result = 0;
  return volumes.reduce((result, volume) => result + volume, result);
};

var measureAggregateVolume_1 = measureAggregateVolume;
var cacheOfBoundingSpheres = new WeakMap();
/*
 * Measure the bounding sphere of the given (path2) geometry.
 * @return {[[x, y, z], radius]} the bounding sphere for the geometry
 */

var measureBoundingSphereOfPath2 = geometry => {
  var boundingSphere = cacheOfBoundingSpheres.get(geometry);
  if (boundingSphere !== undefined) return boundingSphere;
  var centroid = vec3$1.create();
  var radius = 0;
  var points = path2$2.toPoints(geometry);

  if (points.length > 0) {
    // calculate the centriod of the geometry
    var numPoints = 0;
    var temp = vec3$1.create();
    points.forEach(point => {
      vec3$1.add(centroid, centroid, vec3$1.fromVec2(temp, point, 0));
      numPoints++;
    });
    vec3$1.scale(centroid, centroid, 1 / numPoints); // find the farthest point from the centroid

    points.forEach(point => {
      radius = Math.max(radius, vec2.squaredDistance(centroid, point));
    });
    radius = Math.sqrt(radius);
  }

  boundingSphere = [centroid, radius];
  cacheOfBoundingSpheres.set(geometry, boundingSphere);
  return boundingSphere;
};
/*
 * Measure the bounding sphere of the given (geom2) geometry.
 * @return {[[x, y, z], radius]} the bounding sphere for the geometry
 */


var measureBoundingSphereOfGeom2 = geometry => {
  var boundingSphere = cacheOfBoundingSpheres.get(geometry);
  if (boundingSphere !== undefined) return boundingSphere;
  var centroid = vec3$1.create();
  var radius = 0;
  var sides = geom2$2.toSides(geometry);

  if (sides.length > 0) {
    // calculate the centriod of the geometry
    var numPoints = 0;
    var temp = vec3$1.create();
    sides.forEach(side => {
      vec3$1.add(centroid, centroid, vec3$1.fromVec2(temp, side[0], 0));
      numPoints++;
    });
    vec3$1.scale(centroid, centroid, 1 / numPoints); // find the farthest point from the centroid

    sides.forEach(side => {
      radius = Math.max(radius, vec2.squaredDistance(centroid, side[0]));
    });
    radius = Math.sqrt(radius);
  }

  boundingSphere = [centroid, radius];
  cacheOfBoundingSpheres.set(geometry, boundingSphere);
  return boundingSphere;
};
/*
 * Measure the bounding sphere of the given (geom3) geometry.
 * @return {[[x, y, z], radius]} the bounding sphere for the geometry
 */


var measureBoundingSphereOfGeom3 = geometry => {
  var boundingSphere = cacheOfBoundingSpheres.get(geometry);
  if (boundingSphere !== undefined) return boundingSphere;
  var centroid = vec3$1.create();
  var radius = 0;
  var polygons = geom3$2.toPolygons(geometry);

  if (polygons.length > 0) {
    // calculate the centriod of the geometry
    var numPoints = 0;
    polygons.forEach(polygon => {
      poly3.toPoints(polygon).forEach(point => {
        vec3$1.add(centroid, centroid, point);
        numPoints++;
      });
    });
    vec3$1.scale(centroid, centroid, 1 / numPoints); // find the farthest point from the centroid

    polygons.forEach(polygon => {
      poly3.toPoints(polygon).forEach(point => {
        radius = Math.max(radius, vec3$1.squaredDistance(centroid, point));
      });
    });
    radius = Math.sqrt(radius);
  }

  boundingSphere = [centroid, radius];
  cacheOfBoundingSpheres.set(geometry, boundingSphere);
  return boundingSphere;
};
/**
 * Measure the (aproximate) bounding sphere of the given geometries.
 * @see https://en.wikipedia.org/wiki/Bounding_sphere
 * @param {...Object} geometries - the geometries to measure
 * @return {Array} the bounding sphere for each geometry, i.e. [centroid, radius]
 * @alias module:modeling/measurements.measureBoundingSphere
 *
 * @example
 * let bounds = measureBoundingSphere(cube())
 */


var measureBoundingSphere = function measureBoundingSphere() {
  for (var _len15 = arguments.length, geometries = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    geometries[_key15] = arguments[_key15];
  }

  geometries = flatten_1$1(geometries);
  var results = geometries.map(geometry => {
    if (path2$2.isA(geometry)) return measureBoundingSphereOfPath2(geometry);
    if (geom2$2.isA(geometry)) return measureBoundingSphereOfGeom2(geometry);
    if (geom3$2.isA(geometry)) return measureBoundingSphereOfGeom3(geometry);
    return [[0, 0, 0], 0];
  });
  return results.length === 1 ? results[0] : results;
};

var measureBoundingSphere_1 = measureBoundingSphere;
/**
 * Measure the center of the given geometries.
 * @param {...Object} geometries - the geometries to measure
 * @return {Array} the center point for each geometry, i.e. [X, Y, Z]
 * @alias module:modeling/measurements.measureCenter
 *
 * @example
 * let center = measureCenter(sphere())
 */

var measureCenter = function measureCenter() {
  for (var _len16 = arguments.length, geometries = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    geometries[_key16] = arguments[_key16];
  }

  geometries = flatten_1$1(geometries);
  var results = geometries.map(geometry => {
    var bounds = measureBoundingBox_1(geometry);
    return [bounds[0][0] + (bounds[1][0] - bounds[0][0]) / 2, bounds[0][1] + (bounds[1][1] - bounds[0][1]) / 2, bounds[0][2] + (bounds[1][2] - bounds[0][2]) / 2];
  });
  return results.length === 1 ? results[0] : results;
};

var measureCenter_1 = measureCenter;
var cacheOfCenterOfMass = new WeakMap();
/*
 * Measure the center of mass for the given geometry.
 *
 * @see http://paulbourke.net/geometry/polygonmesh/
 * @return {Array} the center of mass for the geometry
 */

var measureCenterOfMassGeom2 = geometry => {
  var centerOfMass = cacheOfCenterOfMass.get(geometry);
  if (centerOfMass !== undefined) return centerOfMass;
  var sides = geom2$2.toSides(geometry);
  var area = 0;
  var x = 0;
  var y = 0;

  if (sides.length > 0) {
    for (var i = 0; i < sides.length; i++) {
      var p1 = sides[i][0];
      var p2 = sides[i][1];
      var a = p1[0] * p2[1] - p1[1] * p2[0];
      area += a;
      x += (p1[0] + p2[0]) * a;
      y += (p1[1] + p2[1]) * a;
    }

    area /= 2;
    var f = 1 / (area * 6);
    x *= f;
    y *= f;
  }

  centerOfMass = vec3$1.fromValues(x, y, 0);
  cacheOfCenterOfMass.set(geometry, centerOfMass);
  return centerOfMass;
};
/*
 * Measure the center of mass for the given geometry.
 * @return {Array} the center of mass for the geometry
 */


var measureCenterOfMassGeom3 = geometry => {
  var centerOfMass = cacheOfCenterOfMass.get(geometry);
  if (centerOfMass !== undefined) return centerOfMass;
  centerOfMass = vec3$1.create(); // 0, 0, 0

  var polygons = geom3$2.toPolygons(geometry);
  if (polygons.length === 0) return centerOfMass;
  var totalVolume = 0;
  var vector = vec3$1.create(); // for speed

  polygons.forEach(polygon => {
    // calculate volume and center of each tetrahedon
    var vertices = polygon.vertices;

    for (var i = 0; i < vertices.length - 2; i++) {
      vec3$1.cross(vector, vertices[i + 1], vertices[i + 2]);
      var volume = vec3$1.dot(vertices[0], vector) / 6;
      totalVolume += volume;
      vec3$1.add(vector, vertices[0], vertices[i + 1]);
      vec3$1.add(vector, vector, vertices[i + 2]);
      var weightedCenter = vec3$1.scale(vector, vector, 1 / 4 * volume);
      vec3$1.add(centerOfMass, centerOfMass, weightedCenter);
    }
  });
  vec3$1.scale(centerOfMass, centerOfMass, 1 / totalVolume);
  cacheOfCenterOfMass.set(geometry, centerOfMass);
  return centerOfMass;
};
/**
 * Measure the center of mass for the given geometries.
 * @param {...Object} geometries - the geometries to measure
 * @return {Array} the center of mass for each geometry, i.e. [X, Y, Z]
 * @alias module:modeling/measurements.measureCenterOfMass
 *
 * @example
 * let center = measureCenterOfMass(sphere())
 */


var measureCenterOfMass = function measureCenterOfMass() {
  for (var _len17 = arguments.length, geometries = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    geometries[_key17] = arguments[_key17];
  }

  geometries = flatten_1$1(geometries);
  var results = geometries.map(geometry => {
    // NOTE: center of mass for geometry path2 is not possible
    if (geom2$2.isA(geometry)) return measureCenterOfMassGeom2(geometry);
    if (geom3$2.isA(geometry)) return measureCenterOfMassGeom3(geometry);
    return [0, 0, 0];
  });
  return results.length === 1 ? results[0] : results;
};

var measureCenterOfMass_1 = measureCenterOfMass;
/**
 * Measure the dimensions of the given geometries.
 * @param {...Object} geometries - the geometries to measure
 * @return {Array} the dimensions for each geometry, i.e. [width, depth, height]
 * @alias module:modeling/measurements.measureDimensions
 *
 * @example
 * let dimensions = measureDimensions(sphere())
 */

var measureDimensions = function measureDimensions() {
  for (var _len18 = arguments.length, geometries = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    geometries[_key18] = arguments[_key18];
  }

  geometries = flatten_1$1(geometries);
  var results = geometries.map(geometry => {
    var boundingBox = measureBoundingBox_1(geometry);
    return [boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1], boundingBox[1][2] - boundingBox[0][2]];
  });
  return results.length === 1 ? results[0] : results;
};

var measureDimensions_1 = measureDimensions;
var {
  geom2,
  geom3,
  path2
} = geometries$3;
/*
 * Measure the epsilon of the given (path2) geometry.
 * @return {Number} the epsilon (precision) of the geometry
 */

var measureEpsilonOfPath2 = geometry => {
  return calculateEpsilonFromBounds_1(measureBoundingBox_1(geometry), 2);
};
/*
 * Measure the epsilon of the given (geom2) geometry.
 * @return {Number} the epsilon (precision) of the geometry
 */


var measureEpsilonOfGeom2 = geometry => {
  return calculateEpsilonFromBounds_1(measureBoundingBox_1(geometry), 2);
};
/*
 * Measure the epsilon of the given (geom3) geometry.
 * @return {Float} the epsilon (precision) of the geometry
 */


var measureEpsilonOfGeom3 = geometry => {
  return calculateEpsilonFromBounds_1(measureBoundingBox_1(geometry), 3);
};
/**
 * Measure the epsilon of the given geometries.
 * Epsilon values are used in various functions to determine minimum distances between points, planes, etc.
 * @param {...Object} geometries - the geometries to measure
 * @return {Number|Array} the epsilon, or a list of epsilons for each geometry
 * @alias module:modeling/measurements.measureEpsilon
 *
 * @example
 * let epsilon = measureEpsilon(sphere())
 */


var measureEpsilon = function measureEpsilon() {
  for (var _len19 = arguments.length, geometries = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    geometries[_key19] = arguments[_key19];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  var results = geometries.map(geometry => {
    if (path2.isA(geometry)) return measureEpsilonOfPath2(geometry);
    if (geom2.isA(geometry)) return measureEpsilonOfGeom2(geometry);
    if (geom3.isA(geometry)) return measureEpsilonOfGeom3(geometry);
    return 0;
  });
  return results.length === 1 ? results[0] : results;
};

var measureEpsilon_1 = measureEpsilon;
/**
 * All shapes (primitives or the results of operations) can be measured, e.g. calculate volume, etc.
 * @module modeling/measurements
 * @example
 * const { measureArea, measureBoundingBox, measureVolume } = require('@jscad/modeling').measurements
 */

var measurements = {
  measureAggregateArea: measureAggregateArea_1,
  measureAggregateBoundingBox: measureAggregateBoundingBox_1,
  measureAggregateEpsilon: measureAggregateEpsilon_1,
  measureAggregateVolume: measureAggregateVolume_1,
  measureArea: measureArea_1,
  measureBoundingBox: measureBoundingBox_1,
  measureBoundingSphere: measureBoundingSphere_1,
  measureCenter: measureCenter_1,
  measureCenterOfMass: measureCenterOfMass_1,
  measureDimensions: measureDimensions_1,
  measureEpsilon: measureEpsilon_1,
  measureVolume: measureVolume_1
}; // verify that the array has the given dimension, and contains Number values

var isNumberArray$b = (array, dimension) => {
  if (Array.isArray(array) && array.length >= dimension) {
    return array.every(n => Number.isFinite(n));
  }

  return false;
}; // verify that the value is a Number greater than the constant


var isGT$d = (value, constant) => Number.isFinite(value) && value > constant; // verify that the value is a Number greater than or equal to the constant


var isGTE$a = (value, constant) => Number.isFinite(value) && value >= constant;

var commonChecks = {
  isNumberArray: isNumberArray$b,
  isGT: isGT$d,
  isGTE: isGTE$a
};
var {
  EPS: EPS$c
} = constants;
var {
  isGT: isGT$c,
  isGTE: isGTE$9,
  isNumberArray: isNumberArray$a
} = commonChecks;
/**
 * Construct an arc in two dimensional space where all points are at the same distance from the center.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of arc
 * @param {Number} [options.radius=1] - radius of arc
 * @param {Number} [options.startAngle=0] - starting angle of the arc, in radians
 * @param {Number} [options.endAngle=Math.PI*2] - ending angle of the arc, in radians
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @param {Boolean} [options.makeTangent=false] - adds line segments at both ends of the arc to ensure that the gradients at the edges are tangent
 * @returns {path2} new 2D path
 * @alias module:modeling/primitives.arc
 */

var arc = options => {
  var defaults = {
    center: [0, 0],
    radius: 1,
    startAngle: 0,
    endAngle: Math.PI * 2,
    makeTangent: false,
    segments: 32
  };
  var {
    center,
    radius,
    startAngle,
    endAngle,
    makeTangent,
    segments
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$a(center, 2)) throw new Error('center must be an array of X and Y values');
  if (!isGT$c(radius, 0)) throw new Error('radius must be greater than zero');
  if (!isGTE$9(startAngle, 0)) throw new Error('startAngle must be positive');
  if (!isGTE$9(endAngle, 0)) throw new Error('endAngle must be positive');
  if (!isGTE$9(segments, 4)) throw new Error('segments must be four or more');
  startAngle = startAngle % (Math.PI * 2);
  endAngle = endAngle % (Math.PI * 2);
  var rotation = Math.PI * 2;

  if (startAngle < endAngle) {
    rotation = endAngle - startAngle;
  }

  if (startAngle > endAngle) {
    rotation = endAngle + (Math.PI * 2 - startAngle);
  }

  var minangle = Math.acos((radius * radius + radius * radius - EPS$c * EPS$c) / (2 * radius * radius));
  var centerv = vec2.clone(center);
  var point;
  var pointArray = [];

  if (rotation < minangle) {
    // there is no rotation, just a single point
    point = vec2.fromAngleRadians(vec2.create(), startAngle);
    vec2.scale(point, point, radius);
    vec2.add(point, point, centerv);
    pointArray.push(point);
  } else {
    // note: add one additional step to acheive full rotation
    var numsteps = Math.max(1, Math.floor(segments * (rotation / (Math.PI * 2)))) + 1;
    var edgestepsize = numsteps * 0.5 / rotation; // step size for half a degree

    if (edgestepsize > 0.25) edgestepsize = 0.25;
    var totalsteps = makeTangent ? numsteps + 2 : numsteps;

    for (var i = 0; i <= totalsteps; i++) {
      var step = i;

      if (makeTangent) {
        step = (i - 1) * (numsteps - 2 * edgestepsize) / numsteps + edgestepsize;
        if (step < 0) step = 0;
        if (step > numsteps) step = numsteps;
      }

      var _angle = startAngle + step * (rotation / numsteps);

      point = vec2.fromAngleRadians(vec2.create(), _angle);
      vec2.scale(point, point, radius);
      vec2.add(point, point, centerv);
      pointArray.push(point);
    }
  }

  return path2$2.fromPoints({
    close: false
  }, pointArray);
};

var arc_1 = arc;
var {
  EPS: EPS$b
} = constants;
var {
  isGTE: isGTE$8,
  isNumberArray: isNumberArray$9
} = commonChecks;
/**
 * Construct an axis-aligned ellispe in two dimensional space.
 * @see https://en.wikipedia.org/wiki/Ellipse
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of ellipse
 * @param {Array} [options.radius=[1,1]] - radius of ellipse, along X and Y
 * @param {Number} [options.startAngle=0] - start angle of ellipse, in radians
 * @param {Number} [options.endAngle=(Math.PI * 2)] - end angle of ellipse, in radians
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @returns {geom2} new 2D geometry
 * @alias module:modeling/primitives.ellipse
 * @example
 * let myshape = ellipse({radius: [5,10]})
 */

var ellipse = options => {
  var defaults = {
    center: [0, 0],
    radius: [1, 1],
    startAngle: 0,
    endAngle: Math.PI * 2,
    segments: 32
  };
  var {
    center,
    radius,
    startAngle,
    endAngle,
    segments
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$9(center, 2)) throw new Error('center must be an array of X and Y values');
  if (!isNumberArray$9(radius, 2)) throw new Error('radius must be an array of X and Y values');
  if (!radius.every(n => n > 0)) throw new Error('radius values must be greater than zero');
  if (!isGTE$8(startAngle, 0)) throw new Error('startAngle must be positive');
  if (!isGTE$8(endAngle, 0)) throw new Error('endAngle must be positive');
  if (!isGTE$8(segments, 3)) throw new Error('segments must be three or more');
  startAngle = startAngle % (Math.PI * 2);
  endAngle = endAngle % (Math.PI * 2);
  var rotation = Math.PI * 2;

  if (startAngle < endAngle) {
    rotation = endAngle - startAngle;
  }

  if (startAngle > endAngle) {
    rotation = endAngle + (Math.PI * 2 - startAngle);
  }

  var minradius = Math.min(radius[0], radius[1]);
  var minangle = Math.acos((minradius * minradius + minradius * minradius - EPS$b * EPS$b) / (2 * minradius * minradius));
  if (rotation < minangle) throw new Error('startAngle and endAngle do not define a significant rotation');
  segments = Math.floor(segments * (rotation / (Math.PI * 2)));
  var centerv = vec2.clone(center);
  var step = rotation / segments; // radians per segment

  var points = [];
  segments = rotation < Math.PI * 2 ? segments + 1 : segments;

  for (var i = 0; i < segments; i++) {
    var _angle2 = step * i + startAngle;

    var point = vec2.fromValues(radius[0] * Math.cos(_angle2), radius[1] * Math.sin(_angle2));
    vec2.add(point, centerv, point);
    points.push(point);
  }

  if (rotation < Math.PI * 2) points.push(centerv);
  return geom2$2.fromPoints(points);
};

var ellipse_1 = ellipse;
var {
  isGT: isGT$b
} = commonChecks;
/**
 * Construct a circle in two dimensional space where all points are at the same distance from the center.
 * @see [ellipse]{@link module:modeling/primitives.ellipse} for more options
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of circle
 * @param {Number} [options.radius=1] - radius of circle
 * @param {Number} [options.startAngle=0] - start angle of circle, in radians
 * @param {Number} [options.endAngle=(Math.PI * 2)] - end angle of circle, in radians
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @returns {geom2} new 2D geometry
 * @alias module:modeling/primitives.circle
 * @example
 * let myshape = circle({radius: 10})
 */

var circle = options => {
  var defaults = {
    center: [0, 0],
    radius: 1,
    startAngle: 0,
    endAngle: Math.PI * 2,
    segments: 32
  };
  var {
    center,
    radius,
    startAngle,
    endAngle,
    segments
  } = Object.assign({}, defaults, options);
  if (!isGT$b(radius, 0)) throw new Error('radius must be greater than zero');
  radius = [radius, radius];
  return ellipse_1({
    center,
    radius,
    startAngle,
    endAngle,
    segments
  });
};

var circle_1 = circle;
var {
  isNumberArray: isNumberArray$8
} = commonChecks;
/**
 * Construct an axis-aligned solid cuboid in three dimensional space.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of cuboid
 * @param {Array} [options.size=[2,2,2]] - dimensions of cuboid; width, depth, height
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.cuboid
 *
 * @example
 * let myshape = cuboid(size: [5, 10, 5]})
 */

var cuboid$1 = options => {
  var defaults = {
    center: [0, 0, 0],
    size: [2, 2, 2]
  };
  var {
    center,
    size
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$8(center, 3)) throw new Error('center must be an array of X, Y and Z values');
  if (!isNumberArray$8(size, 3)) throw new Error('size must be an array of width, depth and height values');
  if (!size.every(n => n > 0)) throw new Error('size values must be greater than zero');
  var result = geom3$2.create( // adjust a basic shape to size
  [[[0, 4, 6, 2], [-1, 0, 0]], [[1, 3, 7, 5], [+1, 0, 0]], [[0, 1, 5, 4], [0, -1, 0]], [[2, 6, 7, 3], [0, +1, 0]], [[0, 2, 3, 1], [0, 0, -1]], [[4, 5, 7, 6], [0, 0, +1]]].map(info => {
    var points = info[0].map(i => {
      var pos = [center[0] + size[0] / 2 * (2 * !!(i & 1) - 1), center[1] + size[1] / 2 * (2 * !!(i & 2) - 1), center[2] + size[2] / 2 * (2 * !!(i & 4) - 1)];
      return pos;
    });
    return poly3.fromPoints(points);
  }));
  return result;
};

var cuboid_1 = cuboid$1;
var {
  isGT: isGT$a
} = commonChecks;
/**
 * Construct an axis-aligned solid cube in three dimensional space with six square faces.
 * @see [cuboid]{@link module:modeling/primitives.cuboid} for more options
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of cube
 * @param {Number} [options.size=2] - dimension of cube
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.cube
 * @example
 * let myshape = cube({size: 10})
 */

var cube = options => {
  var defaults = {
    center: [0, 0, 0],
    size: 2
  };
  var {
    center,
    size
  } = Object.assign({}, defaults, options);
  if (!isGT$a(size, 0)) throw new Error('size must be greater than zero');
  size = [size, size, size];
  return cuboid_1({
    center,
    size
  });
};

var cube_1 = cube;
var {
  EPS: EPS$a
} = constants;
var {
  isGT: isGT$9,
  isGTE: isGTE$7,
  isNumberArray: isNumberArray$7
} = commonChecks;
/**
 * Construct a Z axis-aligned elliptic cylinder in three dimensional space.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of cylinder
 * @param {Number} [options.height=2] - height of cylinder
 * @param {Array} [options.startRadius=[1,1]] - radius of rounded start, must be two dimensional array
 * @param {Number} [options.startAngle=0] - start angle of cylinder, in radians
 * @param {Array} [options.endRadius=[1,1]] - radius of rounded end, must be two dimensional array
 * @param {Number} [options.endAngle=(Math.PI * 2)] - end angle of cylinder, in radians
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @returns {geom3} new geometry
 * @alias module:modeling/primitives.cylinderElliptic
 *
 * @example
 * let myshape = cylinderElliptic({height: 2, startRadius: [10,5], endRadius: [8,3]})
 */

var cylinderElliptic = options => {
  var defaults = {
    center: [0, 0, 0],
    height: 2,
    startRadius: [1, 1],
    startAngle: 0,
    endRadius: [1, 1],
    endAngle: Math.PI * 2,
    segments: 32
  };
  var {
    center,
    height,
    startRadius,
    startAngle,
    endRadius,
    endAngle,
    segments
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$7(center, 3)) throw new Error('center must be an array of X, Y and Z values');
  if (!isGT$9(height, 0)) throw new Error('height must be greater then zero');
  if (!isNumberArray$7(startRadius, 2)) throw new Error('startRadius must be an array of X and Y values');
  if (!startRadius.every(n => n > 0)) throw new Error('startRadius values must be greater than zero');
  if (!isNumberArray$7(endRadius, 2)) throw new Error('endRadius must be an array of X and Y values');
  if (!endRadius.every(n => n > 0)) throw new Error('endRadius values must be greater than zero');
  if (!isGTE$7(startAngle, 0)) throw new Error('startAngle must be positive');
  if (!isGTE$7(endAngle, 0)) throw new Error('endAngle must be positive');
  if (!isGTE$7(segments, 4)) throw new Error('segments must be four or more');
  startAngle = startAngle % (Math.PI * 2);
  endAngle = endAngle % (Math.PI * 2);
  var rotation = Math.PI * 2;

  if (startAngle < endAngle) {
    rotation = endAngle - startAngle;
  }

  if (startAngle > endAngle) {
    rotation = endAngle + (Math.PI * 2 - startAngle);
  }

  var minradius = Math.min(startRadius[0], startRadius[1], endRadius[0], endRadius[1]);
  var minangle = Math.acos((minradius * minradius + minradius * minradius - EPS$a * EPS$a) / (2 * minradius * minradius));
  if (rotation < minangle) throw new Error('startAngle and endAngle do not define a significant rotation');
  var slices = Math.floor(segments * (rotation / (Math.PI * 2)));
  var start = vec3$1.fromValues(0, 0, -(height / 2));
  var end = vec3$1.fromValues(0, 0, height / 2);
  var ray = vec3$1.subtract(vec3$1.create(), end, start);
  var axisX = vec3$1.fromValues(1, 0, 0);
  var axisY = vec3$1.fromValues(0, 1, 0);
  var v1 = vec3$1.create();
  var v2 = vec3$1.create();
  var v3 = vec3$1.create();

  var point = (stack, slice, radius) => {
    var angle = slice * rotation + startAngle;
    vec3$1.scale(v1, axisX, radius[0] * Math.cos(angle));
    vec3$1.scale(v2, axisY, radius[1] * Math.sin(angle));
    vec3$1.add(v1, v1, v2);
    vec3$1.scale(v3, ray, stack);
    vec3$1.add(v3, v3, start);
    return vec3$1.add(vec3$1.create(), v1, v3);
  }; // adjust the points to center


  var fromPoints = function fromPoints() {
    for (var _len20 = arguments.length, points = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
      points[_key20] = arguments[_key20];
    }

    var newpoints = points.map(point => vec3$1.add(vec3$1.create(), point, center));
    return poly3.fromPoints(newpoints);
  };

  var polygons = [];

  for (var i = 0; i < slices; i++) {
    var t0 = i / slices;
    var t1 = (i + 1) / slices;

    if (endRadius[0] === startRadius[0] && endRadius[1] === startRadius[1]) {
      polygons.push(fromPoints(start, point(0, t1, endRadius), point(0, t0, endRadius)));
      polygons.push(fromPoints(point(0, t1, endRadius), point(1, t1, endRadius), point(1, t0, endRadius), point(0, t0, endRadius)));
      polygons.push(fromPoints(end, point(1, t0, endRadius), point(1, t1, endRadius)));
    } else {
      if (startRadius[0] > 0) {
        polygons.push(fromPoints(start, point(0, t1, startRadius), point(0, t0, startRadius)));
        polygons.push(fromPoints(point(0, t0, startRadius), point(0, t1, startRadius), point(1, t0, endRadius)));
      }

      if (endRadius[0] > 0) {
        polygons.push(fromPoints(end, point(1, t0, endRadius), point(1, t1, endRadius)));
        polygons.push(fromPoints(point(1, t0, endRadius), point(0, t1, startRadius), point(1, t1, endRadius)));
      }
    }
  }

  if (rotation < Math.PI * 2) {
    polygons.push(fromPoints(start, point(0, 0, startRadius), end));
    polygons.push(fromPoints(point(0, 0, startRadius), point(1, 0, endRadius), end));
    polygons.push(fromPoints(start, end, point(0, 1, startRadius)));
    polygons.push(fromPoints(point(0, 1, startRadius), end, point(1, 1, endRadius)));
  }

  var result = geom3$2.create(polygons);
  return result;
};

var cylinderElliptic_1 = cylinderElliptic;
var {
  isGT: isGT$8
} = commonChecks;
/**
 * Construct a Z axis-aligned cylinder in three dimensional space.
 * @see [cylinderElliptic]{@link module:modeling/primitives.cylinderElliptic} for more options
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of cylinder
 * @param {Number} [options.height=2] - height of cylinder
 * @param {Number} [options.radius=1] - radius of cylinder (at both start and end)
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @returns {geom3} new geometry
 * @alias module:modeling/primitives.cylinder
 *
 * @example
 * let myshape = cylinder({height: 2, radius: 10})
 */

var cylinder$1 = options => {
  var defaults = {
    center: [0, 0, 0],
    height: 2,
    radius: 1,
    segments: 32
  };
  var {
    center,
    height,
    radius,
    segments
  } = Object.assign({}, defaults, options);
  if (!isGT$8(radius, 0)) throw new Error('radius must be greater than zero');
  var newoptions = {
    center,
    height,
    startRadius: [radius, radius],
    endRadius: [radius, radius],
    segments
  };
  return cylinderElliptic_1(newoptions);
};

var cylinder_1 = cylinder$1;
var {
  isGTE: isGTE$6,
  isNumberArray: isNumberArray$6
} = commonChecks;
/**
 * Construct an axis-aligned ellipsoid in three dimensional space.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of ellipsoid
 * @param {Array} [options.radius=[1,1,1]] - radius of ellipsoid, along X, Y and Z
 * @param {Number} [options.segments=32] - number of segements to create per full rotation
 * @param {Array} [options.axes] -  an array with three vectors for the x, y and z base vectors
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.ellipsoid
 *
 * @example
 * let myshape = ellipsoid({radius: [5, 10, 20]})
*/

var ellipsoid = options => {
  var defaults = {
    center: [0, 0, 0],
    radius: [1, 1, 1],
    segments: 32,
    axes: [[1, 0, 0], [0, -1, 0], [0, 0, 1]]
  };
  var {
    center,
    radius,
    segments,
    axes
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$6(center, 3)) throw new Error('center must be an array of X, Y and Z values');
  if (!isNumberArray$6(radius, 3)) throw new Error('radius must be an array of X, Y and Z values');
  if (!radius.every(n => n > 0)) throw new Error('radius values must be greater than zero');
  if (!isGTE$6(segments, 4)) throw new Error('segments must be four or more');
  var xvector = vec3$1.scale(vec3$1.create(), vec3$1.normalize(vec3$1.create(), axes[0]), radius[0]);
  var yvector = vec3$1.scale(vec3$1.create(), vec3$1.normalize(vec3$1.create(), axes[1]), radius[1]);
  var zvector = vec3$1.scale(vec3$1.create(), vec3$1.normalize(vec3$1.create(), axes[2]), radius[2]);
  var qsegments = Math.round(segments / 4);
  var prevcylinderpoint;
  var polygons = [];
  var p1 = vec3$1.create();
  var p2 = vec3$1.create();

  for (var slice1 = 0; slice1 <= segments; slice1++) {
    var _angle3 = Math.PI * 2.0 * slice1 / segments;

    var cylinderpoint = vec3$1.add(vec3$1.create(), vec3$1.scale(p1, xvector, Math.cos(_angle3)), vec3$1.scale(p2, yvector, Math.sin(_angle3)));

    if (slice1 > 0) {
      var prevcospitch = void 0,
          prevsinpitch = void 0;

      for (var slice2 = 0; slice2 <= qsegments; slice2++) {
        var pitch = 0.5 * Math.PI * slice2 / qsegments;
        var cospitch = Math.cos(pitch);
        var sinpitch = Math.sin(pitch);

        if (slice2 > 0) {
          var points = [];
          var point = void 0;
          point = vec3$1.subtract(vec3$1.create(), vec3$1.scale(p1, prevcylinderpoint, prevcospitch), vec3$1.scale(p2, zvector, prevsinpitch));
          points.push(vec3$1.add(point, point, center));
          point = vec3$1.subtract(vec3$1.create(), vec3$1.scale(p1, cylinderpoint, prevcospitch), vec3$1.scale(p2, zvector, prevsinpitch));
          points.push(vec3$1.add(point, point, center));

          if (slice2 < qsegments) {
            point = vec3$1.subtract(vec3$1.create(), vec3$1.scale(p1, cylinderpoint, cospitch), vec3$1.scale(p2, zvector, sinpitch));
            points.push(vec3$1.add(point, point, center));
          }

          point = vec3$1.subtract(vec3$1.create(), vec3$1.scale(p1, prevcylinderpoint, cospitch), vec3$1.scale(p2, zvector, sinpitch));
          points.push(vec3$1.add(point, point, center));
          polygons.push(poly3.fromPoints(points));
          points = [];
          point = vec3$1.add(vec3$1.create(), vec3$1.scale(p1, prevcylinderpoint, prevcospitch), vec3$1.scale(p2, zvector, prevsinpitch));
          points.push(vec3$1.add(vec3$1.create(), center, point));
          point = vec3$1.add(point, vec3$1.scale(p1, cylinderpoint, prevcospitch), vec3$1.scale(p2, zvector, prevsinpitch));
          points.push(vec3$1.add(vec3$1.create(), center, point));

          if (slice2 < qsegments) {
            point = vec3$1.add(point, vec3$1.scale(p1, cylinderpoint, cospitch), vec3$1.scale(p2, zvector, sinpitch));
            points.push(vec3$1.add(vec3$1.create(), center, point));
          }

          point = vec3$1.add(point, vec3$1.scale(p1, prevcylinderpoint, cospitch), vec3$1.scale(p2, zvector, sinpitch));
          points.push(vec3$1.add(vec3$1.create(), center, point));
          points.reverse();
          polygons.push(poly3.fromPoints(points));
        }

        prevcospitch = cospitch;
        prevsinpitch = sinpitch;
      }
    }

    prevcylinderpoint = cylinderpoint;
  }

  return geom3$2.create(polygons);
};

var ellipsoid_1 = ellipsoid;
var {
  isNumberArray: isNumberArray$5
} = commonChecks;
/**
 * Construct a polyhedron in three dimensional space from the given set of 3D points and faces.
 * The faces can define outward or inward facing polygons (orientation).
 * However, each face must define a counter clockwise rotation of points which follows the right hand rule.
 * @param {Object} options - options for construction
 * @param {Array} options.points - list of points in 3D space
 * @param {Array} options.faces - list of faces, where each face is a set of indexes into the points
 * @param {Array} [options.colors=undefined] - list of RGBA colors to apply to each face
 * @param {Array} [options.orientation='outward'] - orientation of faces
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.polyhedron
 *
 * @example
 * let mypoints = [ [10, 10, 0], [10, -10, 0], [-10, -10, 0], [-10, 10, 0], [0, 0, 10] ]
 * let myfaces = [ [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4], [1, 0, 3], [2, 1, 3] ]
 * let myshape = polyhedron({points: mypoint, faces: myfaces, orientation: 'inward'})
 */

var polyhedron = options => {
  var defaults = {
    points: [],
    faces: [],
    colors: undefined,
    orientation: 'outward'
  };
  var {
    points,
    faces,
    colors,
    orientation
  } = Object.assign({}, defaults, options);

  if (!(Array.isArray(points) && Array.isArray(faces))) {
    throw new Error('points and faces must be arrays');
  }

  if (points.length < 3) {
    throw new Error('three or more points are required');
  }

  if (faces.length < 1) {
    throw new Error('one or more faces are required');
  }

  if (colors) {
    if (!Array.isArray(colors)) {
      throw new Error('colors must be an array');
    }

    if (colors.length !== faces.length) {
      throw new Error('faces and colors must have the same length');
    }
  }

  points.forEach((point, i) => {
    if (!isNumberArray$5(point, 3)) throw new Error("point ".concat(i, " must be an array of X, Y, Z values"));
  });
  faces.forEach((face, i) => {
    if (face.length < 3) throw new Error("face ".concat(i, " must contain 3 or more indexes"));
    if (!isNumberArray$5(face, face.length)) throw new Error("face ".concat(i, " must be an array of numbers"));
  }); // invert the faces if orientation is inwards, as all internals expect outwarding facing polygons

  if (orientation !== 'outward') {
    faces.forEach(face => face.reverse());
  }

  var polygons = faces.map((face, findex) => {
    var polygon = poly3.fromPoints(face.map(pindex => points[pindex]));
    if (colors && colors[findex]) polygon.color = colors[findex];
    return polygon;
  });
  return geom3$2.create(polygons);
};

var polyhedron_1 = polyhedron;
var {
  isGT: isGT$7,
  isGTE: isGTE$5
} = commonChecks;
/**
 * Construct a geodesic sphere based on icosahedron symmetry.
 * @param {Object} [options] - options for construction
 * @param {Number} [options.radius=1] - target radius of sphere
 * @param {Number} [options.frequency=6] - subdivision frequency per face, multiples of 6
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.geodesicSphere
 *
 * @example
 * let myshape = geodesicSphere({radius: 15, frequency: 18})
 */

var geodesicSphere = options => {
  var defaults = {
    radius: 1,
    frequency: 6
  };
  var {
    radius,
    frequency
  } = Object.assign({}, defaults, options);
  if (!isGT$7(radius, 0)) throw new Error('radius must be greater than zero');
  if (!isGTE$5(frequency, 6)) throw new Error('frequency must be six or more'); // adjust the frequency to base 6

  frequency = Math.floor(frequency / 6);
  var ci = [// hard-coded data of icosahedron (20 faces, all triangles)
  [0.850651, 0.000000, -0.525731], [0.850651, -0.000000, 0.525731], [-0.850651, -0.000000, 0.525731], [-0.850651, 0.000000, -0.525731], [0.000000, -0.525731, 0.850651], [0.000000, 0.525731, 0.850651], [0.000000, 0.525731, -0.850651], [0.000000, -0.525731, -0.850651], [-0.525731, -0.850651, -0.000000], [0.525731, -0.850651, -0.000000], [0.525731, 0.850651, 0.000000], [-0.525731, 0.850651, 0.000000]];
  var ti = [[0, 9, 1], [1, 10, 0], [6, 7, 0], [10, 6, 0], [7, 9, 0], [5, 1, 4], [4, 1, 9], [5, 10, 1], [2, 8, 3], [3, 11, 2], [2, 5, 4], [4, 8, 2], [2, 11, 5], [3, 7, 6], [6, 11, 3], [8, 7, 3], [9, 8, 4], [11, 10, 5], [10, 11, 6], [8, 9, 7]];

  var geodesicSubDivide = (p, frequency, offset) => {
    var p1 = p[0];
    var p2 = p[1];
    var p3 = p[2];
    var n = offset;
    var c = [];
    var f = []; //           p3
    //           /\
    //          /__\     frequency = 3
    //      i  /\  /\
    //        /__\/__\       total triangles = 9 (frequency*frequency)
    //       /\  /\  /\
    //     0/__\/__\/__\
    //    p1 0   j      p2

    for (var i = 0; i < frequency; i++) {
      for (var j = 0; j < frequency - i; j++) {
        var t0 = i / frequency;
        var t1 = (i + 1) / frequency;
        var s0 = j / (frequency - i);
        var s1 = (j + 1) / (frequency - i);
        var s2 = frequency - i - 1 ? j / (frequency - i - 1) : 1;
        var q = [];
        q[0] = mix3(mix3(p1, p2, s0), p3, t0);
        q[1] = mix3(mix3(p1, p2, s1), p3, t0);
        q[2] = mix3(mix3(p1, p2, s2), p3, t1); // -- normalize

        for (var k = 0; k < 3; k++) {
          var r = Math.sqrt(q[k][0] * q[k][0] + q[k][1] * q[k][1] + q[k][2] * q[k][2]);

          for (var l = 0; l < 3; l++) {
            q[k][l] /= r;
          }
        }

        c.push(q[0], q[1], q[2]);
        f.push([n, n + 1, n + 2]);
        n += 3;

        if (j < frequency - i - 1) {
          var s3 = frequency - i - 1 ? (j + 1) / (frequency - i - 1) : 1;
          q[0] = mix3(mix3(p1, p2, s1), p3, t0);
          q[1] = mix3(mix3(p1, p2, s3), p3, t1);
          q[2] = mix3(mix3(p1, p2, s2), p3, t1); // -- normalize

          for (var _k = 0; _k < 3; _k++) {
            var _r = Math.sqrt(q[_k][0] * q[_k][0] + q[_k][1] * q[_k][1] + q[_k][2] * q[_k][2]);

            for (var _l = 0; _l < 3; _l++) {
              q[_k][_l] /= _r;
            }
          }

          c.push(q[0], q[1], q[2]);
          f.push([n, n + 1, n + 2]);
          n += 3;
        }
      }
    }

    return {
      points: c,
      triangles: f,
      offset: n
    };
  };

  var mix3 = (a, b, f) => {
    var _f = 1 - f;

    var c = [];

    for (var i = 0; i < 3; i++) {
      c[i] = a[i] * _f + b[i] * f;
    }

    return c;
  };

  var points = [];
  var faces = [];
  var offset = 0;

  for (var i = 0; i < ti.length; i++) {
    var g = geodesicSubDivide([ci[ti[i][0]], ci[ti[i][1]], ci[ti[i][2]]], frequency, offset);
    points = points.concat(g.points);
    faces = faces.concat(g.triangles);
    offset = g.offset;
  }

  var geometry = polyhedron_1({
    points: points,
    faces: faces,
    orientation: 'inward'
  });
  if (radius !== 1) geometry = geom3$2.transform(mat4.fromScaling(mat4.create(), [radius, radius, radius]), geometry);
  return geometry;
};

var geodesicSphere_1 = geodesicSphere;
/**
 * Construct a new line in two dimensional space from the given points.
 * The points must be provided as an array, where each element is a 2D point.
 * @param {Array} points - array of points from which to create the path
 * @returns {path2} new 2D path
 * @alias module:modeling/primitives.line
 *
 * @example
 * let myshape = line([[10, 10], [-10, 10]])
 */

var line = points => {
  if (!Array.isArray(points)) throw new Error('points must be an array');
  return path2$2.fromPoints({}, points);
};

var line_1 = line;
/**
 * Construct a polygon in two dimensional space from a list of points, or a list of points and paths.
 * NOTE: The ordering of points is VERY IMPORTANT.
 * @param {Object} options - options for construction
 * @param {Array} options.points - points of the polygon : either flat or nested array of 2D points
 * @param {Array} [options.paths] - paths of the polygon : either flat or nested array of point indexes
 * @returns {geom2} new 2D geometry
 * @alias module:modeling/primitives.polygon
 *
 * @example
 * let roof = [[10,11], [0,11], [5,20]]
 * let wall = [[0,0], [10,0], [10,10], [0,10]]
 *
 * let poly = polygon({ points: roof })
 * or
 * let poly = polygon({ points: [roof, wall] })
 * or
 * let poly = polygon({ points: roof, paths: [0, 1, 2] })
 * or
 * let poly = polygon({ points: [roof, wall], paths: [[0, 1, 2], [3, 4, 5, 6]] })
 */

var polygon = options => {
  var defaults = {
    points: [],
    paths: []
  };
  var {
    points,
    paths
  } = Object.assign({}, defaults, options);
  if (!(Array.isArray(points) && Array.isArray(paths))) throw new Error('points and paths must be arrays');
  var listofpolys = points;

  if (Array.isArray(points[0])) {
    if (!Array.isArray(points[0][0])) {
      // points is an array of something... convert to list
      listofpolys = [points];
    }
  }

  listofpolys.forEach((list, i) => {
    if (!Array.isArray(list)) throw new Error('list of points ' + i + ' must be an array');
    if (list.length < 3) throw new Error('list of points ' + i + ' must contain three or more points');
    list.forEach((point, j) => {
      if (!Array.isArray(point)) throw new Error('list of points ' + i + ', point ' + j + ' must be an array');
      if (point.length < 2) throw new Error('list of points ' + i + ', point ' + j + ' must contain by X and Y values');
    });
  });
  var listofpaths = paths;

  if (paths.length === 0) {
    // create a list of paths based on the points
    var count = 0;
    listofpaths = listofpolys.map(list => list.map(point => count++));
  } // flatten the listofpoints for indexed access


  var allpoints = [];
  listofpolys.forEach(list => list.forEach(point => allpoints.push(point)));
  var sides = [];
  listofpaths.forEach(path => {
    var setofpoints = path.map(index => allpoints[index]);
    var geometry = geom2$2.fromPoints(setofpoints);
    sides = sides.concat(geom2$2.toSides(geometry));
  });
  return geom2$2.create(sides);
};

var polygon_1 = polygon;
var {
  isNumberArray: isNumberArray$4
} = commonChecks;
/**
 * Construct an axis-aligned rectangle in two dimensional space with four sides at right angles.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of rectangle
 * @param {Array} [options.size=[2,2]] - dimension of rectangle, width and length
 * @returns {geom2} new 2D geometry
 * @alias module:modeling/primitives.rectangle
 *
 * @example
 * let myshape = rectangle({size: [10, 20]})
 */

var rectangle = options => {
  var defaults = {
    center: [0, 0],
    size: [2, 2]
  };
  var {
    center,
    size
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$4(center, 2)) throw new Error('center must be an array of X and Y values');
  if (!isNumberArray$4(size, 2)) throw new Error('size must be an array of X and Y values');
  if (!size.every(n => n > 0)) throw new Error('size values must be greater than zero');
  var point = [size[0] / 2, size[1] / 2];
  var pswap = [point[0], -point[1]];
  var points = [vec2.subtract(vec2.create(), center, point), vec2.add(vec2.create(), center, pswap), vec2.add(vec2.create(), center, point), vec2.subtract(vec2.create(), center, pswap)];
  return geom2$2.fromPoints(points);
};

var rectangle_1 = rectangle;
var {
  EPS: EPS$9
} = constants;
var {
  isGT: isGT$6,
  isGTE: isGTE$4,
  isNumberArray: isNumberArray$3
} = commonChecks;

var createCorners = (center, size, radius, segments, slice, positive) => {
  var pitch = Math.PI / 2 * slice / segments;
  var cospitch = Math.cos(pitch);
  var sinpitch = Math.sin(pitch);
  var layersegments = segments - slice;
  var layerradius = radius * cospitch;
  var layeroffset = size[2] - (radius - radius * sinpitch);
  if (!positive) layeroffset = radius - radius * sinpitch - size[2];
  layerradius = layerradius > EPS$9 ? layerradius : 0;
  var corner0 = vec3$1.add(vec3$1.create(), center, [size[0] - radius, size[1] - radius, layeroffset]);
  var corner1 = vec3$1.add(vec3$1.create(), center, [radius - size[0], size[1] - radius, layeroffset]);
  var corner2 = vec3$1.add(vec3$1.create(), center, [radius - size[0], radius - size[1], layeroffset]);
  var corner3 = vec3$1.add(vec3$1.create(), center, [size[0] - radius, radius - size[1], layeroffset]);
  var corner0Points = [];
  var corner1Points = [];
  var corner2Points = [];
  var corner3Points = [];

  for (var i = 0; i <= layersegments; i++) {
    var radians = layersegments > 0 ? Math.PI / 2 * i / layersegments : 0;
    var point2d = vec2.fromAngleRadians(vec2.create(), radians);
    vec2.scale(point2d, point2d, layerradius);
    var point3d = vec3$1.fromVec2(vec3$1.create(), point2d);
    corner0Points.push(vec3$1.add(vec3$1.create(), corner0, point3d));
    vec3$1.rotateZ(point3d, point3d, [0, 0, 0], Math.PI / 2);
    corner1Points.push(vec3$1.add(vec3$1.create(), corner1, point3d));
    vec3$1.rotateZ(point3d, point3d, [0, 0, 0], Math.PI / 2);
    corner2Points.push(vec3$1.add(vec3$1.create(), corner2, point3d));
    vec3$1.rotateZ(point3d, point3d, [0, 0, 0], Math.PI / 2);
    corner3Points.push(vec3$1.add(vec3$1.create(), corner3, point3d));
  }

  if (!positive) {
    corner0Points.reverse();
    corner1Points.reverse();
    corner2Points.reverse();
    corner3Points.reverse();
    return [corner3Points, corner2Points, corner1Points, corner0Points];
  }

  return [corner0Points, corner1Points, corner2Points, corner3Points];
};

var stitchCorners = (previousCorners, currentCorners) => {
  var polygons = [];

  for (var i = 0; i < previousCorners.length; i++) {
    var previous = previousCorners[i];
    var current = currentCorners[i];

    for (var j = 0; j < previous.length - 1; j++) {
      polygons.push(poly3.fromPoints([previous[j], previous[j + 1], current[j]]));

      if (j < current.length - 1) {
        polygons.push(poly3.fromPoints([current[j], previous[j + 1], current[j + 1]]));
      }
    }
  }

  return polygons;
};

var stitchWalls = (previousCorners, currentCorners) => {
  var polygons = [];

  for (var i = 0; i < previousCorners.length; i++) {
    var previous = previousCorners[i];
    var current = currentCorners[i];
    var p0 = previous[previous.length - 1];
    var c0 = current[current.length - 1];
    var j = (i + 1) % previousCorners.length;
    previous = previousCorners[j];
    current = currentCorners[j];
    var p1 = previous[0];
    var c1 = current[0];
    polygons.push(poly3.fromPoints([p0, p1, c1, c0]));
  }

  return polygons;
};

var stitchSides = (bottomCorners, topCorners) => {
  // make a copy and reverse the bottom corners
  bottomCorners = [bottomCorners[3], bottomCorners[2], bottomCorners[1], bottomCorners[0]];
  bottomCorners = bottomCorners.map(corner => corner.slice().reverse());
  var bottomPoints = [];
  bottomCorners.forEach(corner => {
    corner.forEach(point => bottomPoints.push(point));
  });
  var topPoints = [];
  topCorners.forEach(corner => {
    corner.forEach(point => topPoints.push(point));
  });
  var polygons = [];

  for (var i = 0; i < topPoints.length; i++) {
    var j = (i + 1) % topPoints.length;
    polygons.push(poly3.fromPoints([bottomPoints[i], bottomPoints[j], topPoints[j], topPoints[i]]));
  }

  return polygons;
};
/**
 * Construct an axis-aligned solid cuboid in three dimensional space with rounded corners.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of rounded cube
 * @param {Array} [options.size=[2,2,2]] - dimension of rounded cube; width, depth, height
 * @param {Number} [options.roundRadius=0.2] - radius of rounded edges
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.roundedCuboid
 *
 * @example
 * let mycube = roundedCuboid({size: [10, 20, 10], roundRadius: 2, segments: 16})
 */


var roundedCuboid$1 = options => {
  var defaults = {
    center: [0, 0, 0],
    size: [2, 2, 2],
    roundRadius: 0.2,
    segments: 32
  };
  var {
    center,
    size,
    roundRadius,
    segments
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$3(center, 3)) throw new Error('center must be an array of X, Y and Z values');
  if (!isNumberArray$3(size, 3)) throw new Error('size must be an array of X, Y and Z values');
  if (!size.every(n => n > 0)) throw new Error('size values must be greater than zero');
  if (!isGT$6(roundRadius, 0)) throw new Error('roundRadius must be greater than zero');
  if (!isGTE$4(segments, 4)) throw new Error('segments must be four or more');
  size = size.map(v => v / 2); // convert to radius

  if (roundRadius > size[0] - EPS$9 || roundRadius > size[1] - EPS$9 || roundRadius > size[2] - EPS$9) throw new Error('roundRadius must be smaller then the radius of all dimensions');
  segments = Math.floor(segments / 4);
  var prevCornersPos = null;
  var prevCornersNeg = null;
  var polygons = [];

  for (var _slice = 0; _slice <= segments; _slice++) {
    var cornersPos = createCorners(center, size, roundRadius, segments, _slice, true);
    var cornersNeg = createCorners(center, size, roundRadius, segments, _slice, false);

    if (_slice === 0) {
      polygons = polygons.concat(stitchSides(cornersNeg, cornersPos));
    }

    if (prevCornersPos) {
      polygons = polygons.concat(stitchCorners(prevCornersPos, cornersPos), stitchWalls(prevCornersPos, cornersPos));
    }

    if (prevCornersNeg) {
      polygons = polygons.concat(stitchCorners(prevCornersNeg, cornersNeg), stitchWalls(prevCornersNeg, cornersNeg));
    }

    if (_slice === segments) {
      // add the top
      var points = cornersPos.map(corner => corner[0]);
      polygons.push(poly3.fromPoints(points)); // add the bottom

      points = cornersNeg.map(corner => corner[0]);
      polygons.push(poly3.fromPoints(points));
    }

    prevCornersPos = cornersPos;
    prevCornersNeg = cornersNeg;
  }

  return geom3$2.create(polygons);
};

var roundedCuboid_1 = roundedCuboid$1;
var {
  EPS: EPS$8
} = constants;
var {
  isGT: isGT$5,
  isGTE: isGTE$3,
  isNumberArray: isNumberArray$2
} = commonChecks;
/**
 * Construct a Z axis-aligned solid cylinder in three dimensional space with rounded ends.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of cylinder
 * @param {Array} [options.height=2] - height of cylinder
 * @param {Number} [options.radius=1] - radius of cylinder
 * @param {Number} [options.roundRadius=0.2] - radius of rounded edges
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.roundedCylinder
 *
 * @example
 * let myshape = roundedCylinder({ height: 10, radius: 2, roundRadius: 0.5 })
 */

var roundedCylinder = options => {
  var defaults = {
    center: [0, 0, 0],
    height: 2,
    radius: 1,
    roundRadius: 0.2,
    segments: 32
  };
  var {
    center,
    height,
    radius,
    roundRadius,
    segments
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$2(center, 3)) throw new Error('center must be an array of X, Y and Z values');
  if (!isGT$5(height, 0)) throw new Error('height must be greater then zero');
  if (!isGT$5(radius, 0)) throw new Error('radius must be greater then zero');
  if (!isGT$5(roundRadius, 0)) throw new Error('roundRadius must be greater then zero');
  if (roundRadius > radius - EPS$8) throw new Error('roundRadius must be smaller then the radius');
  if (!isGTE$3(segments, 4)) throw new Error('segments must be four or more');
  var start = [0, 0, -(height / 2)];
  var end = [0, 0, height / 2];
  var direction = vec3$1.subtract(vec3$1.create(), end, start);
  var length = vec3$1.length(direction);
  if (2 * roundRadius > length - EPS$8) throw new Error('height must be larger than twice roundRadius');
  var defaultnormal;

  if (Math.abs(direction[0]) > Math.abs(direction[1])) {
    defaultnormal = vec3$1.fromValues(0, 1, 0);
  } else {
    defaultnormal = vec3$1.fromValues(1, 0, 0);
  }

  var zvector = vec3$1.scale(vec3$1.create(), vec3$1.normalize(vec3$1.create(), direction), roundRadius);
  var xvector = vec3$1.scale(vec3$1.create(), vec3$1.normalize(vec3$1.create(), vec3$1.cross(vec3$1.create(), zvector, defaultnormal)), radius);
  var yvector = vec3$1.scale(vec3$1.create(), vec3$1.normalize(vec3$1.create(), vec3$1.cross(vec3$1.create(), xvector, zvector)), radius);
  vec3$1.add(start, start, zvector);
  vec3$1.subtract(end, end, zvector);
  var qsegments = Math.floor(0.25 * segments);

  var fromPoints = points => {
    // adjust the points to center
    var newpoints = points.map(point => vec3$1.add(point, point, center));
    return poly3.fromPoints(newpoints);
  };

  var polygons = [];
  var v1 = vec3$1.create();
  var v2 = vec3$1.create();
  var prevcylinderpoint;

  for (var slice1 = 0; slice1 <= segments; slice1++) {
    var _angle4 = Math.PI * 2.0 * slice1 / segments;

    var cylinderpoint = vec3$1.add(vec3$1.create(), vec3$1.scale(v1, xvector, Math.cos(_angle4)), vec3$1.scale(v2, yvector, Math.sin(_angle4)));

    if (slice1 > 0) {
      // cylinder wall
      var points = [];
      points.push(vec3$1.add(vec3$1.create(), start, cylinderpoint));
      points.push(vec3$1.add(vec3$1.create(), start, prevcylinderpoint));
      points.push(vec3$1.add(vec3$1.create(), end, prevcylinderpoint));
      points.push(vec3$1.add(vec3$1.create(), end, cylinderpoint));
      polygons.push(fromPoints(points));
      var prevcospitch = void 0,
          prevsinpitch = void 0;

      for (var slice2 = 0; slice2 <= qsegments; slice2++) {
        var pitch = 0.5 * Math.PI * slice2 / qsegments;
        var cospitch = Math.cos(pitch);
        var sinpitch = Math.sin(pitch);

        if (slice2 > 0) {
          // cylinder rounding, start
          points = [];
          var point = void 0;
          point = vec3$1.add(vec3$1.create(), start, vec3$1.subtract(v1, vec3$1.scale(v1, prevcylinderpoint, prevcospitch), vec3$1.scale(v2, zvector, prevsinpitch)));
          points.push(point);
          point = vec3$1.add(vec3$1.create(), start, vec3$1.subtract(v1, vec3$1.scale(v1, cylinderpoint, prevcospitch), vec3$1.scale(v2, zvector, prevsinpitch)));
          points.push(point);

          if (slice2 < qsegments) {
            point = vec3$1.add(vec3$1.create(), start, vec3$1.subtract(v1, vec3$1.scale(v1, cylinderpoint, cospitch), vec3$1.scale(v2, zvector, sinpitch)));
            points.push(point);
          }

          point = vec3$1.add(vec3$1.create(), start, vec3$1.subtract(v1, vec3$1.scale(v1, prevcylinderpoint, cospitch), vec3$1.scale(v2, zvector, sinpitch)));
          points.push(point);
          polygons.push(fromPoints(points)); // cylinder rounding, end

          points = [];
          point = vec3$1.add(vec3$1.create(), vec3$1.scale(v1, prevcylinderpoint, prevcospitch), vec3$1.scale(v2, zvector, prevsinpitch));
          vec3$1.add(point, point, end);
          points.push(point);
          point = vec3$1.add(vec3$1.create(), vec3$1.scale(v1, cylinderpoint, prevcospitch), vec3$1.scale(v2, zvector, prevsinpitch));
          vec3$1.add(point, point, end);
          points.push(point);

          if (slice2 < qsegments) {
            point = vec3$1.add(vec3$1.create(), vec3$1.scale(v1, cylinderpoint, cospitch), vec3$1.scale(v2, zvector, sinpitch));
            vec3$1.add(point, point, end);
            points.push(point);
          }

          point = vec3$1.add(vec3$1.create(), vec3$1.scale(v1, prevcylinderpoint, cospitch), vec3$1.scale(v2, zvector, sinpitch));
          vec3$1.add(point, point, end);
          points.push(point);
          points.reverse();
          polygons.push(fromPoints(points));
        }

        prevcospitch = cospitch;
        prevsinpitch = sinpitch;
      }
    }

    prevcylinderpoint = cylinderpoint;
  }

  var result = geom3$2.create(polygons);
  return result;
};

var roundedCylinder_1 = roundedCylinder;
var {
  EPS: EPS$7
} = constants;
var {
  isGT: isGT$4,
  isGTE: isGTE$2,
  isNumberArray: isNumberArray$1
} = commonChecks;
/**
 * Construct an axis-aligned rectangle in two dimensional space with rounded corners.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of rounded rectangle
 * @param {Array} [options.size=[2,2]] - dimension of rounded rectangle; width and length
 * @param {Number} [options.roundRadius=0.2] - round radius of corners
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @returns {geom2} new 2D geometry
 * @alias module:modeling/primitives.roundedRectangle
 *
 * @example
 * let myshape = roundedRectangle({size: [10, 20], roundRadius: 2})
 */

var roundedRectangle = options => {
  var defaults = {
    center: [0, 0],
    size: [2, 2],
    roundRadius: 0.2,
    segments: 32
  };
  var {
    center,
    size,
    roundRadius,
    segments
  } = Object.assign({}, defaults, options);
  if (!isNumberArray$1(center, 2)) throw new Error('center must be an array of X and Y values');
  if (!isNumberArray$1(size, 2)) throw new Error('size must be an array of X and Y values');
  if (!size.every(n => n > 0)) throw new Error('size values must be greater than zero');
  if (!isGT$4(roundRadius, 0)) throw new Error('roundRadius must be greater than zero');
  if (!isGTE$2(segments, 4)) throw new Error('segments must be four or more');
  size = size.map(v => v / 2); // convert to radius

  if (roundRadius > size[0] - EPS$7 || roundRadius > size[1] - EPS$7) throw new Error('roundRadius must be smaller then the radius of all dimensions');
  var cornersegments = Math.floor(segments / 4); // create sets of points that define the corners

  var corner0 = vec2.add(vec2.create(), center, [size[0] - roundRadius, size[1] - roundRadius]);
  var corner1 = vec2.add(vec2.create(), center, [roundRadius - size[0], size[1] - roundRadius]);
  var corner2 = vec2.add(vec2.create(), center, [roundRadius - size[0], roundRadius - size[1]]);
  var corner3 = vec2.add(vec2.create(), center, [size[0] - roundRadius, roundRadius - size[1]]);
  var corner0Points = [];
  var corner1Points = [];
  var corner2Points = [];
  var corner3Points = [];

  for (var i = 0; i <= cornersegments; i++) {
    var radians = Math.PI / 2 * i / cornersegments;
    var point = vec2.fromAngleRadians(vec2.create(), radians);
    vec2.scale(point, point, roundRadius);
    corner0Points.push(vec2.add(vec2.create(), corner0, point));
    vec2.rotate(point, point, vec2.create(), Math.PI / 2);
    corner1Points.push(vec2.add(vec2.create(), corner1, point));
    vec2.rotate(point, point, vec2.create(), Math.PI / 2);
    corner2Points.push(vec2.add(vec2.create(), corner2, point));
    vec2.rotate(point, point, vec2.create(), Math.PI / 2);
    corner3Points.push(vec2.add(vec2.create(), corner3, point));
  }

  return geom2$2.fromPoints(corner0Points.concat(corner1Points, corner2Points, corner3Points));
};

var roundedRectangle_1 = roundedRectangle;
var {
  isGT: isGT$3
} = commonChecks;
/**
 * Construct a sphere in three dimensional space where all points are at the same distance from the center.
 * @see [ellipsoid]{@link module:modeling/primitives.ellipsoid} for more options
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0,0]] - center of sphere
 * @param {Number} [options.radius=1] - radius of sphere
 * @param {Number} [options.segments=32] - number of segments to create per full rotation
 * @param {Array} [options.axes] -  an array with three vectors for the x, y and z base vectors
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.sphere
 *
 * @example
 * let myshape = sphere({radius: 5})
 */

var sphere = options => {
  var defaults = {
    center: [0, 0, 0],
    radius: 1,
    segments: 32,
    axes: [[1, 0, 0], [0, -1, 0], [0, 0, 1]]
  };
  var {
    center,
    radius,
    segments,
    axes
  } = Object.assign({}, defaults, options);
  if (!isGT$3(radius, 0)) throw new Error('radius must be greater than zero');
  radius = [radius, radius, radius];
  return ellipsoid_1({
    center,
    radius,
    segments,
    axes
  });
};

var sphere_1 = sphere;
var {
  isGT: isGT$2
} = commonChecks;
/**
 * Construct an axis-aligned square in two dimensional space with four equal sides at right angles.
 * @see [rectangle]{@link module:modeling/primitives.rectangle} for more options
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of square
 * @param {Number} [options.size=2] - dimension of square
 * @returns {geom2} new 2D geometry
 * @alias module:modeling/primitives.square
 *
 * @example
 * let myshape = square({size: 10})
 */

var square = options => {
  var defaults = {
    center: [0, 0],
    size: 2
  };
  var {
    center,
    size
  } = Object.assign({}, defaults, options);
  if (!isGT$2(size, 0)) throw new Error('size must be greater than zero');
  size = [size, size];
  return rectangle_1({
    center,
    size
  });
};

var square_1 = square;
var {
  isGT: isGT$1,
  isGTE: isGTE$1,
  isNumberArray
} = commonChecks; // @see http://www.jdawiseman.com/papers/easymath/surds_star_inner_radius.html

var getRadiusRatio = (vertices, density) => {
  if (vertices > 0 && density > 1 && density < vertices / 2) {
    return Math.cos(Math.PI * density / vertices) / Math.cos(Math.PI * (density - 1) / vertices);
  }

  return 0;
};

var getPoints = (vertices, radius, startAngle, center) => {
  var a = Math.PI * 2 / vertices;
  var points = [];

  for (var i = 0; i < vertices; i++) {
    var point = vec2.fromAngleRadians(vec2.create(), a * i + startAngle);
    vec2.scale(point, point, radius);
    vec2.add(point, center, point);
    points.push(point);
  }

  return points;
};
/**
 * Construct a star in two dimensional space.
 * @see https://en.wikipedia.org/wiki/Star_polygon
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of star
 * @param {Number} [options.vertices=5] - number of vertices (P) on the star
 * @param {Number} [options.density=2] - density (Q) of star
 * @param {Number} [options.outerRadius=1] - outer radius of vertices
 * @param {Number} [options.innerRadius=0] - inner radius of vertices, or zero to calculate
 * @param {Number} [options.startAngle=0] - starting angle for first vertice, in radians
 * @returns {geom2} new 2D geometry
 * @alias module:modeling/primitives.star
 *
 * @example
 * let star1 = star({vertices: 8, outerRadius: 10}) // star with 8/2 density
 * let star2 = star({vertices: 12, outerRadius: 40, innerRadius: 20}) // star with given radius
 */


var star = options => {
  var defaults = {
    center: [0, 0],
    vertices: 5,
    outerRadius: 1,
    innerRadius: 0,
    density: 2,
    startAngle: 0
  };
  var {
    center,
    vertices,
    outerRadius,
    innerRadius,
    density,
    startAngle
  } = Object.assign({}, defaults, options);
  if (!isNumberArray(center, 2)) throw new Error('center must be an array of X and Y values');
  if (!isGTE$1(vertices, 2)) throw new Error('vertices must be two or more');
  if (!isGT$1(outerRadius, 0)) throw new Error('outerRadius must be greater than zero');
  if (!isGTE$1(innerRadius, 0)) throw new Error('innerRadius must be greater than zero');
  if (!isGTE$1(startAngle, 0)) throw new Error('startAngle must be greater than zero'); // force integers

  vertices = Math.floor(vertices);
  density = Math.floor(density);
  startAngle = startAngle % (Math.PI * 2);

  if (innerRadius === 0) {
    if (!isGTE$1(density, 2)) throw new Error('density must be two or more');
    innerRadius = outerRadius * getRadiusRatio(vertices, density);
  }

  var centerv = vec2.clone(center);
  var outerPoints = getPoints(vertices, outerRadius, startAngle, centerv);
  var innerPoints = getPoints(vertices, innerRadius, startAngle + Math.PI / vertices, centerv);
  var allPoints = [];

  for (var i = 0; i < vertices; i++) {
    allPoints.push(outerPoints[i]);
    allPoints.push(innerPoints[i]);
  }

  return geom2$2.fromPoints(allPoints);
};

var star_1 = star;
/**
 * Mirror the given geometries using the given options.
 * @param {Object} options - options for mirror
 * @param {Array} [options.origin=[0,0,0]] - the origin of the plane
 * @param {Array} [options.normal=[0,0,1]] - the normal vector of the plane
 * @param {...Object} geometries - the geometries to mirror
 * @return {Object|Array} the mirrored geometry, or a list of mirrored geometry
 * @alias module:modeling/transforms.mirror
 *
 * @example
 * let myshape = mirror({normal: [0,0,10]}, cube({center: [0,0,15], radius: [20, 25, 5]}))
 */

var mirror = function mirror(options) {
  for (var _len21 = arguments.length, objects = new Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
    objects[_key21 - 1] = arguments[_key21];
  }

  var defaults = {
    origin: [0, 0, 0],
    normal: [0, 0, 1] // Z axis

  };
  var {
    origin,
    normal
  } = Object.assign({}, defaults, options);
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  var planeOfMirror = plane$1.fromNormalAndPoint(plane$1.create(), normal, origin); // verify the plane, i.e. check that the given normal was valid

  if (Number.isNaN(planeOfMirror[0])) {
    throw new Error('the given origin and normal do not define a proper plane');
  }

  var matrix = mat4.mirrorByPlane(mat4.create(), planeOfMirror);
  var results = objects.map(object => {
    if (path2$2.isA(object)) return path2$2.transform(matrix, object);
    if (geom2$2.isA(object)) return geom2$2.transform(matrix, object);
    if (geom3$2.isA(object)) return geom3$2.transform(matrix, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};
/**
 * Mirror the given geometries about the X axis.
 * @param {...Object} geometries - the geometries to mirror
 * @return {Object|Array} the mirrored geometry, or a list of mirrored geometry
 * @alias module:modeling/transforms.mirrorX
 */


var mirrorX$1 = function mirrorX$1() {
  for (var _len22 = arguments.length, objects = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    objects[_key22] = arguments[_key22];
  }

  return mirror({
    normal: [1, 0, 0]
  }, objects);
};
/**
 * Mirror the given geometries about the Y axis.
 * @param {...Object} geometries - the geometries to mirror
 * @return {Object|Array} the mirrored geometry, or a list of mirrored geometry
 * @alias module:modeling/transforms.mirrorY
 */


var mirrorY = function mirrorY() {
  for (var _len23 = arguments.length, objects = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    objects[_key23] = arguments[_key23];
  }

  return mirror({
    normal: [0, 1, 0]
  }, objects);
};
/**
 * Mirror the given object(s) about the Z axis.
 * @param {...Object} objects - the geometries to mirror
 * @return {Object|Array} the mirrored geometry, or a list of mirrored geometry
 * @alias module:modeling/transforms.mirrorZ
 */


var mirrorZ = function mirrorZ() {
  for (var _len24 = arguments.length, objects = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    objects[_key24] = arguments[_key24];
  }

  return mirror({
    normal: [0, 0, 1]
  }, objects);
};

var mirror_1 = {
  mirror,
  mirrorX: mirrorX$1,
  mirrorY,
  mirrorZ
};
/**
 * Calculate the plane of the given slice.
 * NOTE: The slice (and all points) are assumed to be planar from the beginning.
 * @param {slice} slice - the slice
 * @returns {plane} the plane of the slice
 * @alias module:modeling/extrusions/slice.calculatePlane
 *
 * @example
 * let myplane = calculatePlane(slice)
 */

var calculatePlane = slice => {
  var edges = slice.edges;
  if (edges.length < 3) throw new Error('slices must have 3 or more edges to calculate a plane'); // find the midpoint of the slice, which will lie on the plane by definition

  var midpoint = edges.reduce((point, edge) => vec3$1.add(vec3$1.create(), point, edge[0]), vec3$1.create());
  vec3$1.scale(midpoint, midpoint, 1 / edges.length); // find the farthest edge from the midpoint, which will be on an outside edge

  var farthestEdge;
  var distance = 0;
  edges.forEach(edge => {
    var d = vec3$1.squaredDistance(midpoint, edge[0]);

    if (d > distance) {
      farthestEdge = edge;
      distance = d;
    }
  }); // find the before edge

  var beforeEdge = edges.find(edge => vec3$1.equals(edge[1], farthestEdge[0]));
  return plane$1.fromPoints(plane$1.create(), beforeEdge[0], farthestEdge[0], farthestEdge[1]);
};

var calculatePlane_1 = calculatePlane;
/**
 * Represents a 3D geometry consisting of a list of edges.
 * @typedef {Object} slice
 * @property {Array} edges - list of edges, each edge containing two points (3D)
 */

/**
 * Creates a new empty slice.
 *
 * @returns {slice} a new slice
 * @alias module:modeling/extrusions/slice.create
 */

var create = edges => {
  if (!edges) {
    edges = [];
  }

  return {
    edges
  };
};

var create_1 = create;
/**
 * Create a deep clone of the given slice.
 *
 * @param {slice} [out] - receiving slice
 * @param {slice} slice - slice to clone
 * @returns {slice} a new slice
 * @alias module:modeling/extrusions/slice.clone
 */

var clone = function clone() {
  var out;
  var slice;

  if (arguments.length === 1) {
    out = create_1();
    slice = arguments.length <= 0 ? undefined : arguments[0];
  } else {
    out = arguments.length <= 0 ? undefined : arguments[0];
    slice = arguments.length <= 1 ? undefined : arguments[1];
  } // deep clone of edges


  out.edges = slice.edges.map(edge => [vec3$1.clone(edge[0]), vec3$1.clone(edge[1])]);
  return out;
};

var clone_1 = clone;
/**
 * Determine if the given slices have the same edges.
 * @param {slice} a - the first slice to compare
 * @param {slice} b - the second slice to compare
 * @returns {Boolean} true if the slices are equal
 * @alias module:modeling/extrusions/slice.equals
 */

var equals = (a, b) => {
  var aedges = a.edges;
  var bedges = b.edges;

  if (aedges.length !== bedges.length) {
    return false;
  }

  var isEqual = aedges.reduce((acc, aedge, i) => {
    var bedge = bedges[i];
    var d = vec3$1.squaredDistance(aedge[0], bedge[0]);
    return acc && d < Number.EPSILON;
  }, true);
  return isEqual;
};

var equals_1 = equals;
/**
 * Create a slice from the given points.
 *
 * @param {Array} points - list of points, where each point is either 2D or 3D
 * @returns {slice} a new slice
 * @alias module:modeling/extrusions/slice.fromPoints
 *
 * @example
 * const points = [
 *   [0,  0],
 *   [0, 10],
 *   [0, 10]
 * ]
 * const slice = fromPoints(points)
 */

var fromPoints = points => {
  if (!Array.isArray(points)) throw new Error('the given points must be an array');
  if (points.length < 3) throw new Error('the given points must contain THREE or more points'); // create a list of edges from the points

  var edges = [];
  var prevpoint = points[points.length - 1];
  points.forEach(point => {
    if (point.length === 2) edges.push([vec3$1.fromVec2(vec3$1.create(), prevpoint), vec3$1.fromVec2(vec3$1.create(), point)]);
    if (point.length === 3) edges.push([prevpoint, point]);
    prevpoint = point;
  });
  return create_1(edges);
};

var fromPoints_1 = fromPoints;
/**
 * Create a slice from the given sides (see geom2).
 *
 * @param {Array} sides - list of sides from geom2
 * @returns {slice} a new slice
 * @alias module:modeling/extrusions/slice.fromSides
 *
 * @example
 * const myshape = circle({radius: 10})
 * const slice = fromSides(geom2.toSides(myshape))
 */

var fromSides = sides => {
  if (!Array.isArray(sides)) throw new Error('the given sides must be an array'); // create a list of edges from the sides

  var edges = [];
  sides.forEach(side => {
    edges.push([vec3$1.fromVec2(vec3$1.create(), side[0]), vec3$1.fromVec2(vec3$1.create(), side[1])]);
  });
  return create_1(edges);
};

var fromSides_1 = fromSides;
/**
 * Determin if the given object is a slice.
 * @param {slice} object - the object to interogate
 * @returns {Boolean} true if the object matches a slice
 * @alias module:modeling/extrusions/slice.isA
 */

var isA = object => {
  if (object && typeof object === 'object') {
    if ('edges' in object) {
      if (Array.isArray(object.edges)) {
        return true;
      }
    }
  }

  return false;
};

var isA_1 = isA;
/**
 * Reverse the edges of the given slice.
 *
 * @param {slice} [out] - receiving slice
 * @param {slice} slice - slice to reverse
 * @returns {slice} reverse of the slice
 * @alias module:modeling/extrusions/slice.reverse
 */

var reverse = function reverse() {
  var out;
  var slice;

  if (arguments.length === 1) {
    out = create_1();
    slice = arguments.length <= 0 ? undefined : arguments[0];
  } else {
    out = arguments.length <= 0 ? undefined : arguments[0];
    slice = arguments.length <= 1 ? undefined : arguments[1];
  } // reverse the edges


  out.edges = slice.edges.map(edge => [edge[1], edge[0]]);
  return out;
};

var reverse_1 = reverse;
/**
 * Produces an array of edges from the given slice.
 * The returned array should not be modified as the data is shared with the slice.
 * @param {slice} slice - the slice
 * @returns {Array} an array of edges, each edge contains an array of two points (3D)
 * @alias module:modeling/extrusions/slice.toEdges
 *
 * @example
 * let sharededges = toEdges(slice)
 */

var toEdges = slice => slice.edges;

var toEdges_1 = toEdges;
var {
  EPS: EPS$6
} = constants;
/*
 * Determine if the given geometries overlap by comparing min and max bounds.
 * NOTE: This is used in union for performace gains.
 * @param {geom3} geometry1 - geometry for comparision
 * @param {geom3} geometry2 - geometry for comparision
 * @returns {boolean} true if the geometries overlap
 */

var mayOverlap = (geometry1, geometry2) => {
  // FIXME accessing the data structure of the geometry should not be allowed
  if (geometry1.polygons.length === 0 || geometry2.polygons.length === 0) {
    return false;
  }

  var bounds1 = measureBoundingBox_1(geometry1);
  var min1 = bounds1[0];
  var max1 = bounds1[1];
  var bounds2 = measureBoundingBox_1(geometry2);
  var min2 = bounds2[0];
  var max2 = bounds2[1];
  if (min2[0] - max1[0] > EPS$6) return false;
  if (min1[0] - max2[0] > EPS$6) return false;
  if (min2[1] - max1[1] > EPS$6) return false;
  if (min1[1] - max2[1] > EPS$6) return false;
  if (min2[2] - max1[2] > EPS$6) return false;
  if (min1[2] - max2[2] > EPS$6) return false;
  return true;
};

var mayOverlap_1 = mayOverlap; // Holds a node in a BSP tree.
// A BSP tree is built from a collection of polygons by picking a polygon to split along.
// Polygons are not stored directly in the tree, but in PolygonTreeNodes, stored in this.polygontreenodes.
// Those PolygonTreeNodes are children of the owning Tree.polygonTree.
// This is not a leafy BSP tree since there is no distinction between internal and leaf nodes.

class Node {
  constructor(parent) {
    this.plane = null;
    this.front = null;
    this.back = null;
    this.polygontreenodes = [];
    this.parent = parent;
  } // Convert solid space to empty space and empty space to solid space.


  invert() {
    var queue = [this];
    var node;

    for (var i = 0; i < queue.length; i++) {
      node = queue[i];
      if (node.plane) node.plane = plane$1.flip(plane$1.create(), node.plane);
      if (node.front) queue.push(node.front);
      if (node.back) queue.push(node.back);
      var temp = node.front;
      node.front = node.back;
      node.back = temp;
    }
  } // clip polygontreenodes to our plane
  // calls remove() for all clipped PolygonTreeNodes


  clipPolygons(polygontreenodes, alsoRemovecoplanarFront) {
    var current = {
      node: this,
      polygontreenodes: polygontreenodes
    };
    var node;
    var stack = [];

    do {
      node = current.node;
      polygontreenodes = current.polygontreenodes; // begin "function"

      if (node.plane) {
        var backnodes = [];
        var frontnodes = [];
        var coplanarfrontnodes = alsoRemovecoplanarFront ? backnodes : frontnodes;
        var _plane = node.plane;
        var numpolygontreenodes = polygontreenodes.length;

        for (var i = 0; i < numpolygontreenodes; i++) {
          var node1 = polygontreenodes[i];

          if (!node1.isRemoved()) {
            node1.splitByPlane(_plane, coplanarfrontnodes, backnodes, frontnodes, backnodes);
          }
        }

        if (node.front && frontnodes.length > 0) {
          stack.push({
            node: node.front,
            polygontreenodes: frontnodes
          });
        }

        var numbacknodes = backnodes.length;

        if (node.back && numbacknodes > 0) {
          stack.push({
            node: node.back,
            polygontreenodes: backnodes
          });
        } else {
          // there's nothing behind this plane. Delete the nodes behind this plane:
          for (var _i3 = 0; _i3 < numbacknodes; _i3++) {
            backnodes[_i3].remove();
          }
        }
      }

      current = stack.pop();
    } while (current !== undefined);
  } // Remove all polygons in this BSP tree that are inside the other BSP tree
  // `tree`.


  clipTo(tree, alsoRemovecoplanarFront) {
    var node = this;
    var stack = [];

    do {
      if (node.polygontreenodes.length > 0) {
        tree.rootnode.clipPolygons(node.polygontreenodes, alsoRemovecoplanarFront);
      }

      if (node.front) stack.push(node.front);
      if (node.back) stack.push(node.back);
      node = stack.pop();
    } while (node !== undefined);
  }

  addPolygonTreeNodes(newpolygontreenodes) {
    var current = {
      node: this,
      polygontreenodes: newpolygontreenodes
    };
    var stack = [];

    do {
      var node = current.node;
      var polygontreenodes = current.polygontreenodes;

      if (polygontreenodes.length === 0) {
        current = stack.pop();
        continue;
      }

      if (!node.plane) {
        var index = 0; // default

        index = Math.floor(polygontreenodes.length / 2); // index = polygontreenodes.length >> 1
        // index = Math.floor(Math.random()*polygontreenodes.length)

        var bestpoly = polygontreenodes[index].getPolygon();
        node.plane = poly3.plane(bestpoly);
      }

      var frontnodes = [];
      var backnodes = [];
      var n = polygontreenodes.length;

      for (var i = 0; i < n; ++i) {
        polygontreenodes[i].splitByPlane(node.plane, node.polygontreenodes, backnodes, frontnodes, backnodes);
      }

      if (frontnodes.length > 0) {
        if (!node.front) node.front = new Node(node); // unable to split by any of the current nodes

        var stopCondition = n === frontnodes.length && backnodes.length === 0;
        if (stopCondition) node.front.polygontreenodes = frontnodes;else stack.push({
          node: node.front,
          polygontreenodes: frontnodes
        });
      }

      if (backnodes.length > 0) {
        if (!node.back) node.back = new Node(node); // unable to split by any of the current nodes

        var _stopCondition = n === backnodes.length && frontnodes.length === 0;

        if (_stopCondition) node.back.polygontreenodes = backnodes;else stack.push({
          node: node.back,
          polygontreenodes: backnodes
        });
      }

      current = stack.pop();
    } while (current !== undefined);
  } // TODO is this still used?


  getParentPlaneNormals(normals, maxdepth) {
    if (maxdepth > 0) {
      if (this.parent) {
        normals.push(this.parent.plane.normal);
        this.parent.getParentPlaneNormals(normals, maxdepth - 1);
      }
    }
  }

}

var Node_1 = Node;

var splitLineSegmentByPlane = (plane, p1, p2) => {
  var direction = vec3$1.subtract(vec3$1.create(), p2, p1);
  var lambda = (plane[3] - vec3$1.dot(plane, p1)) / vec3$1.dot(plane, direction);
  if (Number.isNaN(lambda)) lambda = 0;
  if (lambda > 1) lambda = 1;
  if (lambda < 0) lambda = 0;
  vec3$1.scale(direction, direction, lambda);
  vec3$1.add(direction, p1, direction);
  return direction;
};

var splitLineSegmentByPlane_1 = splitLineSegmentByPlane;
var {
  EPS: EPS$5
} = constants; // Returns object:
// .type:
//   0: coplanar-front
//   1: coplanar-back
//   2: front
//   3: back
//   4: spanning
// In case the polygon is spanning, returns:
// .front: a Polygon3 of the front part
// .back: a Polygon3 of the back part

var splitPolygonByPlane = (splane, polygon) => {
  var result = {
    type: null,
    front: null,
    back: null
  }; // cache in local lets (speedup):

  var vertices = polygon.vertices;
  var numvertices = vertices.length;
  var pplane = poly3.plane(polygon);

  if (plane$1.equals(pplane, splane)) {
    result.type = 0;
  } else {
    var hasfront = false;
    var hasback = false;
    var vertexIsBack = [];
    var MINEPS = -EPS$5;

    for (var i = 0; i < numvertices; i++) {
      var t = vec3$1.dot(splane, vertices[i]) - splane[3];
      var isback = t < 0;
      vertexIsBack.push(isback);
      if (t > EPS$5) hasfront = true;
      if (t < MINEPS) hasback = true;
    }

    if (!hasfront && !hasback) {
      // all points coplanar
      var _t = vec3$1.dot(splane, pplane);

      result.type = _t >= 0 ? 0 : 1;
    } else if (!hasback) {
      result.type = 2;
    } else if (!hasfront) {
      result.type = 3;
    } else {
      // spanning
      result.type = 4;
      var frontvertices = [];
      var backvertices = [];
      var _isback = vertexIsBack[0];

      for (var vertexindex = 0; vertexindex < numvertices; vertexindex++) {
        var vertex = vertices[vertexindex];
        var nextvertexindex = vertexindex + 1;
        if (nextvertexindex >= numvertices) nextvertexindex = 0;
        var nextisback = vertexIsBack[nextvertexindex];

        if (_isback === nextisback) {
          // line segment is on one side of the plane:
          if (_isback) {
            backvertices.push(vertex);
          } else {
            frontvertices.push(vertex);
          }
        } else {
          // line segment intersects plane:
          var point = vertex;
          var nextpoint = vertices[nextvertexindex];
          var intersectionpoint = splitLineSegmentByPlane_1(splane, point, nextpoint);

          if (_isback) {
            backvertices.push(vertex);
            backvertices.push(intersectionpoint);
            frontvertices.push(intersectionpoint);
          } else {
            frontvertices.push(vertex);
            frontvertices.push(intersectionpoint);
            backvertices.push(intersectionpoint);
          }
        }

        _isback = nextisback;
      } // for vertexindex
      // remove duplicate vertices:


      var EPS_SQUARED = EPS$5 * EPS$5;

      if (backvertices.length >= 3) {
        var prevvertex = backvertices[backvertices.length - 1];

        for (var _vertexindex = 0; _vertexindex < backvertices.length; _vertexindex++) {
          var _vertex = backvertices[_vertexindex];

          if (vec3$1.squaredDistance(_vertex, prevvertex) < EPS_SQUARED) {
            backvertices.splice(_vertexindex, 1);
            _vertexindex--;
          }

          prevvertex = _vertex;
        }
      }

      if (frontvertices.length >= 3) {
        var _prevvertex = frontvertices[frontvertices.length - 1];

        for (var _vertexindex2 = 0; _vertexindex2 < frontvertices.length; _vertexindex2++) {
          var _vertex2 = frontvertices[_vertexindex2];

          if (vec3$1.squaredDistance(_vertex2, _prevvertex) < EPS_SQUARED) {
            frontvertices.splice(_vertexindex2, 1);
            _vertexindex2--;
          }

          _prevvertex = _vertex2;
        }
      }

      if (frontvertices.length >= 3) {
        result.front = poly3.fromPointsAndPlane(frontvertices, pplane);
      }

      if (backvertices.length >= 3) {
        result.back = poly3.fromPointsAndPlane(backvertices, pplane);
      }
    }
  }

  return result;
};

var splitPolygonByPlane_1 = splitPolygonByPlane;
var {
  EPS: EPS$4
} = constants; // # class PolygonTreeNode
// This class manages hierarchical splits of polygons.
// At the top is a root node which does not hold a polygon, only child PolygonTreeNodes.
// Below that are zero or more 'top' nodes; each holds a polygon.
// The polygons can be in different planes.
// splitByPlane() splits a node by a plane. If the plane intersects the polygon, two new child nodes
// are created holding the splitted polygon.
// getPolygons() retrieves the polygons from the tree. If for PolygonTreeNode the polygon is split but
// the two split parts (child nodes) are still intact, then the unsplit polygon is returned.
// This ensures that we can safely split a polygon into many fragments. If the fragments are untouched,
// getPolygons() will return the original unsplit polygon instead of the fragments.
// remove() removes a polygon from the tree. Once a polygon is removed, the parent polygons are invalidated
// since they are no longer intact.

class PolygonTreeNode {
  // constructor creates the root node
  constructor() {
    this.parent = null;
    this.children = [];
    this.polygon = null;
    this.removed = false;
  } // fill the tree with polygons. Should be called on the root node only; child nodes must
  // always be a derivate (split) of the parent node.


  addPolygons(polygons) {
    // new polygons can only be added to root node; children can only be splitted polygons
    if (!this.isRootNode()) {
      throw new Error('Assertion failed');
    }

    var _this = this;

    polygons.forEach(polygon => {
      _this.addChild(polygon);
    });
  } // remove a node
  // - the siblings become toplevel nodes
  // - the parent is removed recursively


  remove() {
    if (!this.removed) {
      this.removed = true; // remove ourselves from the parent's children list:

      var parentschildren = this.parent.children;
      var i = parentschildren.indexOf(this);
      if (i < 0) throw new Error('Assertion failed');
      parentschildren.splice(i, 1); // invalidate the parent's polygon, and of all parents above it:

      this.parent.recursivelyInvalidatePolygon();
    }
  }

  isRemoved() {
    return this.removed;
  }

  isRootNode() {
    return !this.parent;
  } // invert all polygons in the tree. Call on the root node


  invert() {
    if (!this.isRootNode()) throw new Error('Assertion failed'); // can only call this on the root node

    this.invertSub();
  }

  getPolygon() {
    if (!this.polygon) throw new Error('Assertion failed'); // doesn't have a polygon, which means that it has been broken down

    return this.polygon;
  }

  getPolygons(result) {
    var children = [this];
    var queue = [children];
    var i, j, l, node;

    for (i = 0; i < queue.length; ++i) {
      // queue size can change in loop, don't cache length
      children = queue[i];

      for (j = 0, l = children.length; j < l; j++) {
        // ok to cache length
        node = children[j];

        if (node.polygon) {
          // the polygon hasn't been broken yet. We can ignore the children and return our polygon:
          result.push(node.polygon);
        } else {
          // our polygon has been split up and broken, so gather all subpolygons from the children
          if (node.children.length > 0) queue.push(node.children);
        }
      }
    }
  } // split the node by a plane; add the resulting nodes to the frontnodes and backnodes array
  // If the plane doesn't intersect the polygon, the 'this' object is added to one of the arrays
  // If the plane does intersect the polygon, two new child nodes are created for the front and back fragments,
  //  and added to both arrays.


  splitByPlane(plane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes) {
    if (this.children.length) {
      var queue = [this.children];
      var i;
      var j;
      var l;
      var node;
      var nodes;

      for (i = 0; i < queue.length; i++) {
        // queue.length can increase, do not cache
        nodes = queue[i];

        for (j = 0, l = nodes.length; j < l; j++) {
          // ok to cache length
          node = nodes[j];

          if (node.children.length > 0) {
            queue.push(node.children);
          } else {
            // no children. Split the polygon:
            node._splitByPlane(plane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes);
          }
        }
      }
    } else {
      this._splitByPlane(plane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes);
    }
  } // only to be called for nodes with no children


  _splitByPlane(splane, coplanarfrontnodes, coplanarbacknodes, frontnodes, backnodes) {
    var polygon = this.polygon;

    if (polygon) {
      var bound = poly3.measureBoundingSphere(polygon);
      var sphereradius = bound[1] + EPS$4; // ensure radius is LARGER then polygon

      var spherecenter = bound[0];
      var d = vec3$1.dot(splane, spherecenter) - splane[3];

      if (d > sphereradius) {
        frontnodes.push(this);
      } else if (d < -sphereradius) {
        backnodes.push(this);
      } else {
        var splitresult = splitPolygonByPlane_1(splane, polygon);

        switch (splitresult.type) {
          case 0:
            // coplanar front:
            coplanarfrontnodes.push(this);
            break;

          case 1:
            // coplanar back:
            coplanarbacknodes.push(this);
            break;

          case 2:
            // front:
            frontnodes.push(this);
            break;

          case 3:
            // back:
            backnodes.push(this);
            break;

          case 4:
            // spanning:
            if (splitresult.front) {
              var frontnode = this.addChild(splitresult.front);
              frontnodes.push(frontnode);
            }

            if (splitresult.back) {
              var backnode = this.addChild(splitresult.back);
              backnodes.push(backnode);
            }

            break;
        }
      }
    }
  } // PRIVATE methods from here:
  // add child to a node
  // this should be called whenever the polygon is split
  // a child should be created for every fragment of the split polygon
  // returns the newly created child


  addChild(polygon) {
    var newchild = new PolygonTreeNode();
    newchild.parent = this;
    newchild.polygon = polygon;
    this.children.push(newchild);
    return newchild;
  }

  invertSub() {
    var children = [this];
    var queue = [children];
    var i, j, l, node;

    for (i = 0; i < queue.length; i++) {
      children = queue[i];

      for (j = 0, l = children.length; j < l; j++) {
        node = children[j];

        if (node.polygon) {
          node.polygon = poly3.invert(node.polygon);
        }

        if (node.children.length > 0) queue.push(node.children);
      }
    }
  }

  recursivelyInvalidatePolygon() {
    var node = this;

    while (node.polygon) {
      node.polygon = null;

      if (node.parent) {
        node = node.parent;
      }
    }
  }

  clear() {
    var children = [this];
    var queue = [children];

    for (var i = 0; i < queue.length; ++i) {
      // queue size can change in loop, don't cache length
      children = queue[i];
      var l = children.length;

      for (var j = 0; j < l; j++) {
        var node = children[j];

        if (node.polygon) {
          node.polygon = null;
        }

        if (node.parent) {
          node.parent = null;
        }

        if (node.children.length > 0) queue.push(node.children);
        node.children = [];
      }
    }
  }

  toString() {
    var result = '';
    var children = [this];
    var queue = [children];
    var i, j, l, node;

    for (i = 0; i < queue.length; ++i) {
      // queue size can change in loop, don't cache length
      children = queue[i];
      var prefix = ' '.repeat(i);

      for (j = 0, l = children.length; j < l; j++) {
        // ok to cache length
        node = children[j];
        result += "".concat(prefix, "PolygonTreeNode (").concat(node.isRootNode(), "): ").concat(node.children.length);

        if (node.polygon) {
          result += "\n ".concat(prefix, "poly3\n");
        } else {
          result += '\n';
        }

        if (node.children.length > 0) queue.push(node.children);
      }
    }

    return result;
  }

}

var PolygonTreeNode_1 = PolygonTreeNode; // This is the root of a BSP tree.
// This separate class for the root of the tree in order to hold the PolygonTreeNode root.
// The actual tree is kept in this.rootnode

class Tree$3 {
  constructor(polygons) {
    this.polygonTree = new PolygonTreeNode_1();
    this.rootnode = new Node_1(null);
    if (polygons) this.addPolygons(polygons);
  }

  invert() {
    this.polygonTree.invert();
    this.rootnode.invert();
  } // Remove all polygons in this BSP tree that are inside the other BSP tree
  // `tree`.


  clipTo(tree, alsoRemovecoplanarFront) {
    alsoRemovecoplanarFront = !!alsoRemovecoplanarFront;
    this.rootnode.clipTo(tree, alsoRemovecoplanarFront);
  }

  allPolygons() {
    var result = [];
    this.polygonTree.getPolygons(result);
    return result;
  }

  addPolygons(polygons) {
    var polygontreenodes = new Array(polygons.length);

    for (var i = 0; i < polygons.length; i++) {
      polygontreenodes[i] = this.polygonTree.addChild(polygons[i]);
    }

    this.rootnode.addPolygonTreeNodes(polygontreenodes);
  }

  clear() {
    this.polygonTree.clear();
  }

  toString() {
    var result = 'Tree: ' + this.polygonTree.toString('');
    return result;
  }

}

var Tree_1 = Tree$3;
var trees = {
  Tree: Tree_1
};
var {
  Tree: Tree$2
} = trees;
/*
 * Return a new 3D geometry representing the space in both the first geometry and
 * the second geometry. None of the given geometries are modified.
 * @param {geom3} geometry1 - a geometry
 * @param {geom3} geometry2 - a geometry
 * @returns {geom3} new 3D geometry
 */

var intersectGeom3Sub = (geometry1, geometry2) => {
  if (!mayOverlap_1(geometry1, geometry2)) {
    return geom3$2.create(); // empty geometry
  }

  var a = new Tree$2(geom3$2.toPolygons(geometry1));
  var b = new Tree$2(geom3$2.toPolygons(geometry2));
  a.invert();
  b.clipTo(a);
  b.invert();
  a.clipTo(b);
  b.clipTo(a);
  a.addPolygons(b.allPolygons());
  a.invert();
  var newpolygons = a.allPolygons();
  return geom3$2.create(newpolygons);
};

var intersectGeom3Sub_1 = intersectGeom3Sub;

var toPolygon3D = (vector, edge) => {
  var points = [vec3$1.subtract(vec3$1.create(), edge[0], vector), vec3$1.subtract(vec3$1.create(), edge[1], vector), vec3$1.add(vec3$1.create(), edge[1], vector), vec3$1.add(vec3$1.create(), edge[0], vector)];
  return poly3.fromPoints(points);
};
/**
 * Return a list of polygons which are enclosed by the slice.
 * @param {slice} slice - the slice
 * @return {Array} a list of polygons (3D)
 * @alias module:modeling/extrusions/slice.toPolygons
 */


var toPolygons = slice => {
  var splane = calculatePlane_1(slice); // find the midpoint of the slice, which will lie on the plane by definition

  var edges = slice.edges;
  var midpoint = edges.reduce((point, edge) => vec3$1.add(vec3$1.create(), point, edge[0]), vec3$1.create());
  vec3$1.scale(midpoint, midpoint, 1 / edges.length); // find the farthest edge from the midpoint, which will be on an outside edge

  var farthestEdge = [[NaN, NaN, NaN], [NaN, NaN, NaN]];
  var distance = 0;
  edges.forEach(edge => {
    var d = vec3$1.squaredDistance(midpoint, edge[0]);

    if (d > distance) {
      farthestEdge = edge;
      distance = d;
    }
  }); // create one LARGE polygon to encompass the side, i.e. base

  var direction = vec3$1.subtract(vec3$1.create(), farthestEdge[0], midpoint);
  var perpendicular = vec3$1.cross(vec3$1.create(), splane, direction);
  var p1 = vec3$1.add(vec3$1.create(), midpoint, direction);
  vec3$1.add(p1, p1, direction);
  var p2 = vec3$1.add(vec3$1.create(), midpoint, perpendicular);
  vec3$1.add(p2, p2, perpendicular);
  var p3 = vec3$1.subtract(vec3$1.create(), midpoint, direction);
  vec3$1.subtract(p3, p3, direction);
  var p4 = vec3$1.subtract(vec3$1.create(), midpoint, perpendicular);
  vec3$1.subtract(p4, p4, perpendicular);
  var poly1 = poly3.fromPoints([p1, p2, p3, p4]);
  var base = geom3$2.create([poly1]);
  var wallPolygons = edges.map(edge => toPolygon3D(splane, edge));
  var walls = geom3$2.create(wallPolygons); // make an insection of the base and the walls, creating... a set of polygons!

  var geometry3 = intersectGeom3Sub_1(base, walls); // return only those polygons from the base

  var polygons = geom3$2.toPolygons(geometry3);
  polygons = polygons.filter(polygon => {
    var a = vec3$1.angle(splane, poly3.plane(polygon)); // walls should be PI / 2 radians rotated from the base

    return Math.abs(a) < Math.PI / 90;
  });
  return polygons;
};

var toPolygons_1 = toPolygons;

var edgesToString = edges => edges.reduce((result, edge) => result += "[".concat(vec3$1.toString(edge[0]), ", ").concat(vec3$1.toString(edge[1]), "], "), '');
/**
 * @param {slice} slice - the slice
 * @return {String} the string representation
 * @alias module:modeling/extrusions/slice.toString
 */


var toString = slice => "[".concat(edgesToString(slice.edges), "]");

var toString_1 = toString;
/**
 * Transform the given slice using the given matrix.
 * @param {mat4} matrix - transform matrix
 * @param {slice} slice - slice to transform
 * @returns {slice} the transformed slice
 * @alias module:modeling/extrusions/slice.transform
 *
 * @example
 * let matrix = mat4.fromTranslation([1, 2, 3])
 * let newslice = transform(matrix, oldslice)
 */

var transform$1 = (matrix, slice) => {
  var edges = slice.edges.map(edge => [vec3$1.transform(vec3$1.create(), edge[0], matrix), vec3$1.transform(vec3$1.create(), edge[1], matrix)]);
  return create_1(edges);
};

var transform_1$1 = transform$1;
/**
 * @module modeling/extrusions/slice
 */

var slice = {
  calculatePlane: calculatePlane_1,
  clone: clone_1,
  create: create_1,
  equals: equals_1,
  fromPoints: fromPoints_1,
  fromSides: fromSides_1,
  isA: isA_1,
  reverse: reverse_1,
  toEdges: toEdges_1,
  toPolygons: toPolygons_1,
  toString: toString_1,
  transform: transform_1$1
};
var {
  EPS: EPS$3
} = constants; // https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid's_algorithm

var gcd = (a, b) => {
  if (a === b) {
    return a;
  }

  if (a < b) {
    return gcd(b, a);
  }

  if (b === 1) {
    return 1;
  }

  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

var lcm = (a, b) => a * b / gcd(a, b); // Return a set of edges that encloses the same area by splitting
// the given edges to have newlength total edges.


var repartitionEdges = (newlength, edges) => {
  // NOTE: This implementation splits each edge evenly.
  var multiple = newlength / edges.length;

  if (multiple === 1) {
    return edges;
  }

  var divisor = vec3$1.fromValues(multiple, multiple, multiple);
  var newEdges = [];
  edges.forEach(edge => {
    var increment = vec3$1.subtract(vec3$1.create(), edge[1], edge[0]);
    vec3$1.divide(increment, increment, divisor); // repartition the edge

    var prev = edge[0];

    for (var i = 1; i <= multiple; ++i) {
      var next = vec3$1.add(vec3$1.create(), prev, increment);
      newEdges.push([prev, next]);
      prev = next;
    }
  });
  return newEdges;
};

var EPSAREA = EPS$3 * EPS$3 / 2 * Math.sin(Math.PI / 3);
/*
 * Extrude (build) walls between the given slices.
 * Each wall consists of two triangles, which may be invalid if slices are overlapping.
 */

var extrudeWalls = (slice0, slice1) => {
  var edges0 = slice.toEdges(slice0);
  var edges1 = slice.toEdges(slice1);

  if (edges0.length !== edges1.length) {
    // different shapes, so adjust one or both to the same number of edges
    var newlength = lcm(edges0.length, edges1.length);
    if (newlength !== edges0.length) edges0 = repartitionEdges(newlength, edges0);
    if (newlength !== edges1.length) edges1 = repartitionEdges(newlength, edges1);
  }

  var walls = [];
  edges0.forEach((edge0, i) => {
    var edge1 = edges1[i];
    var poly0 = poly3.fromPoints([edge0[0], edge0[1], edge1[1]]);
    var poly0area = poly3.measureArea(poly0);
    if (Number.isFinite(poly0area) && poly0area > EPSAREA) walls.push(poly0);
    var poly1 = poly3.fromPoints([edge0[0], edge1[1], edge1[0]]);
    var poly1area = poly3.measureArea(poly1);
    if (Number.isFinite(poly1area) && poly1area > EPSAREA) walls.push(poly1);
  });
  return walls;
};

var extrudeWalls_1 = extrudeWalls;

var defaultCallback = (progress, index, base) => {
  var baseSlice = null;
  if (geom2$2.isA(base)) baseSlice = slice.fromSides(geom2$2.toSides(base));
  if (poly3.isA(base)) baseSlice = slice.fromPoints(poly3.toPoints(base));
  return progress === 0 || progress === 1 ? slice.transform(mat4.fromTranslation(mat4.create(), [0, 0, progress]), baseSlice) : null;
};
/**
 * Extrude a solid from the slices as returned by the callback function.
 * @see slice
 *
 * @param {Object} options - options for extrude
 * @param {Integer} [options.numberOfSlices=2] the number of slices to be generated by the callback
 * @param {Boolean} [options.capStart=true] the solid should have a cap at the start
 * @param {Boolean} [options.capEnd=true] the solid should have a cap at the end
 * @param {Boolean} [options.close=false] the solid should have a closing section between start and end
 * @param {Function} [options.callback] the callback function that generates each slice
 * @param {Object} base - the base object which is used to create slices (see the example for callback information)
 * @return {geom3} the extruded shape
 * @alias module:modeling/extrusions.extrudeFromSlices
 *
 * @example
 * // Parameters:
 * //   progress : the percent complete [0..1]
 * //   index : the index of the current slice [0..numberOfSlices - 1]
 * //   base : the base object as given
 * // Return Value:
 * //   slice or null (to skip)
 * const callback = (progress, index, base) => {
 *   ...
 *   return slice
 * }
 */


var extrudeFromSlices = (options, base) => {
  var defaults = {
    numberOfSlices: 2,
    capStart: true,
    capEnd: true,
    close: false,
    callback: defaultCallback
  };
  var {
    numberOfSlices,
    capStart,
    capEnd,
    close,
    callback: generate
  } = Object.assign({}, defaults, options);
  if (numberOfSlices < 2) throw new Error('numberOfSlices must be 2 or more');
  var sMax = numberOfSlices - 1;
  var startSlice = null;
  var endSlice = null;
  var prevSlice = null;
  var polygons = [];

  for (var s = 0; s < numberOfSlices; s++) {
    // invoke the callback function to get the next slice
    // NOTE: callback can return null to skip the slice
    var currentSlice = generate(s / sMax, s, base);

    if (currentSlice) {
      if (!slice.isA(currentSlice)) throw new Error('the callback function must return slice objects');

      var _edges2 = slice.toEdges(currentSlice);

      if (_edges2.length === 0) throw new Error('the callback function must return slices with one or more edges');

      if (prevSlice) {
        polygons = polygons.concat(extrudeWalls_1(prevSlice, currentSlice));
      } // save start and end slices for caps if necessary


      if (s === 0) startSlice = currentSlice;
      if (s === numberOfSlices - 1) endSlice = currentSlice;
      prevSlice = currentSlice;
    }
  }

  if (capEnd) {
    // create a cap at the end
    var endPolygons = slice.toPolygons(endSlice);
    polygons = polygons.concat(endPolygons);
  }

  if (capStart) {
    // create a cap at the start
    slice.reverse(startSlice, startSlice);
    var startPolygons = slice.toPolygons(startSlice);
    polygons = polygons.concat(startPolygons);
  }

  if (!capStart && !capEnd) {
    // create walls between end and start slices
    if (close && !slice.equals(endSlice, startSlice)) {
      polygons = polygons.concat(extrudeWalls_1(endSlice, startSlice));
    }
  }

  return geom3$2.create(polygons);
};

var extrudeFromSlices_1 = extrudeFromSlices;
var {
  mirrorX
} = mirror_1;
/**
 * Rotate extrude the given geometry using the given options.
 *
 * @param {Object} options - options for extrusion
 * @param {Number} [options.angle=PI*2] - angle of the extrusion (RADIANS)
 * @param {Number} [options.startAngle=0] - start angle of the extrusion (RADIANS)
 * @param {String} [options.overflow='cap'] - what to do with points outside of bounds (+ / - x) :
 * defaults to capping those points to 0 (only supported behaviour for now)
 * @param {Number} [options.segments=12] - number of segments of the extrusion
 * @param {geom2} geometry - the geometry to extrude
 * @returns {geom3} the extruded geometry
 * @alias module:modeling/extrusions.extrudeRotate
 *
 * @example
 * const myshape = extrudeRotate({segments: 8, angle: Math.PI}, circle({size: 3, center: [4, 0]}))
 */

var extrudeRotate = (options, geometry) => {
  var defaults = {
    segments: 12,
    startAngle: 0,
    angle: Math.PI * 2,
    overflow: 'cap'
  };
  var {
    segments,
    startAngle,
    angle,
    overflow
  } = Object.assign({}, defaults, options);
  if (segments < 3) throw new Error('segments must be greater then 3');
  startAngle = Math.abs(startAngle) > Math.PI * 2 ? startAngle % (Math.PI * 2) : startAngle;
  angle = Math.abs(angle) > Math.PI * 2 ? angle % (Math.PI * 2) : angle;
  var endAngle = startAngle + angle;
  endAngle = Math.abs(endAngle) > Math.PI * 2 ? endAngle % (Math.PI * 2) : endAngle;

  if (endAngle < startAngle) {
    var x = startAngle;
    startAngle = endAngle;
    endAngle = x;
  }

  var totalRotation = endAngle - startAngle;
  if (totalRotation <= 0.0) totalRotation = Math.PI * 2;

  if (Math.abs(totalRotation) < Math.PI * 2) {
    // adjust the segments to achieve the total rotation requested
    var anglePerSegment = Math.PI * 2 / segments;
    segments = Math.floor(Math.abs(totalRotation) / anglePerSegment);
    if (Math.abs(totalRotation) > segments * anglePerSegment) segments++;
  } // console.log('startAngle: '+startAngle)
  // console.log('endAngle: '+endAngle)
  // console.log(totalRotation)
  // console.log(segments)
  // convert geometry to an array of sides, easier to deal with


  var shapeSides = geom2$2.toSides(geometry);
  if (shapeSides.length === 0) throw new Error('the given geometry cannot be empty'); // determine if the rotate extrude can be computed in the first place
  // ie all the points have to be either x > 0 or x < 0
  // generic solution to always have a valid solid, even if points go beyond x/ -x
  // 1. split points up between all those on the 'left' side of the axis (x<0) & those on the 'righ' (x>0)
  // 2. for each set of points do the extrusion operation IN OPOSITE DIRECTIONS
  // 3. union the two resulting solids
  // 1. alt : OR : just cap of points at the axis ?

  var pointsWithNegativeX = shapeSides.filter(s => s[0][0] < 0);
  var pointsWithPositiveX = shapeSides.filter(s => s[0][0] >= 0);
  var arePointsWithNegAndPosX = pointsWithNegativeX.length > 0 && pointsWithPositiveX.length > 0; // FIXME actually there are cases where setting X=0 will change the basic shape
  // - Alternative #1 : don't allow shapes with both negative and positive X values
  // - Alternative #2 : remove one half of the shape (costly)

  if (arePointsWithNegAndPosX && overflow === 'cap') {
    if (pointsWithNegativeX.length > pointsWithPositiveX.length) {
      shapeSides = shapeSides.map(side => {
        var point0 = side[0];
        var point1 = side[1];
        point0 = [Math.min(point0[0], 0), point0[1]];
        point1 = [Math.min(point1[0], 0), point1[1]];
        return [point0, point1];
      }); // recreate the geometry from the (-) capped points

      geometry = geom2$2.reverse(geom2$2.create(shapeSides));
      geometry = mirrorX(geometry);
    } else if (pointsWithPositiveX.length >= pointsWithNegativeX.length) {
      shapeSides = shapeSides.map(side => {
        var point0 = side[0];
        var point1 = side[1];
        point0 = [Math.max(point0[0], 0), point0[1]];
        point1 = [Math.max(point1[0], 0), point1[1]];
        return [point0, point1];
      }); // recreate the geometry from the (+) capped points

      geometry = geom2$2.create(shapeSides);
    }
  }

  var rotationPerSlice = totalRotation / segments;
  var isCapped = Math.abs(totalRotation) < Math.PI * 2;
  var baseSlice = slice.fromSides(geom2$2.toSides(geometry));
  slice.reverse(baseSlice, baseSlice);
  var matrix = mat4.create();

  var createSlice = (progress, index, base) => {
    var Zrotation = rotationPerSlice * index + startAngle;
    mat4.multiply(matrix, mat4.fromZRotation(matrix, Zrotation), mat4.fromXRotation(mat4.create(), Math.PI / 2));
    return slice.transform(matrix, base);
  };

  options = {
    numberOfSlices: segments + 1,
    capStart: isCapped,
    capEnd: isCapped,
    close: !isCapped,
    callback: createSlice
  };
  return extrudeFromSlices_1(options, baseSlice);
};

var extrudeRotate_1 = extrudeRotate;
/**
 * Rotate the given geometries using the given options.
 * @param {Array} angles - angle (RADIANS) of rotations about X, Y, and Z axis
 * @param {...Object} geometries - the geometries to rotate
 * @return {Object|Array} the rotated geometry, or a list of rotated geometries
 * @alias module:modeling/transforms.rotate
 *
 * @example
 * const newsphere = rotate([Math.PI / 4, 0, 0], sphere())
 */

var rotate$1 = function rotate$1(angles) {
  for (var _len25 = arguments.length, objects = new Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
    objects[_key25 - 1] = arguments[_key25];
  }

  if (!Array.isArray(angles)) throw new Error('angles must be an array');
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments'); // adjust the angles if necessary

  angles = angles.slice(); // don't modify the original

  while (angles.length < 3) {
    angles.push(0);
  }

  var yaw = angles[2];
  var pitch = angles[1];
  var roll = angles[0];
  var matrix = mat4.fromTaitBryanRotation(mat4.create(), yaw, pitch, roll);
  var results = objects.map(object => {
    if (path2$2.isA(object)) return path2$2.transform(matrix, object);
    if (geom2$2.isA(object)) return geom2$2.transform(matrix, object);
    if (geom3$2.isA(object)) return geom3$2.transform(matrix, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};
/**
 * Rotate the given object(s) about the X axis, using the given options.
 * @param {Number} angle - angle (RADIANS) of rotations about X
 * @param {...Object} geometries - the geometries to rotate
 * @return {Object|Array} the rotated geometry, or a list of rotated geometries
 * @alias module:modeling/transforms.rotateX
 */


var rotateX = function rotateX(angle) {
  for (var _len26 = arguments.length, objects = new Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
    objects[_key26 - 1] = arguments[_key26];
  }

  return rotate$1([angle, 0, 0], objects);
};
/**
 * Rotate the given object(s) about the Y axis, using the given options.
 * @param {Number} angle - angle (RADIANS) of rotations about Y
 * @param {...Object} geometries - the geometries to rotate
 * @return {Object|Array} the rotated geometry, or a list of rotated geometries
 * @alias module:modeling/transforms.rotateY
 */


var rotateY = function rotateY(angle) {
  for (var _len27 = arguments.length, objects = new Array(_len27 > 1 ? _len27 - 1 : 0), _key27 = 1; _key27 < _len27; _key27++) {
    objects[_key27 - 1] = arguments[_key27];
  }

  return rotate$1([0, angle, 0], objects);
};
/**
 * Rotate the given object(s) about the Z axis, using the given options.
 * @param {Number} angle - angle (RADIANS) of rotations about Z
 * @param {...Object} geometries - the geometries to rotate
 * @return {Object|Array} the rotated geometry, or a list of rotated geometries
 * @alias module:modeling/transforms.rotateZ
 */


var rotateZ$1 = function rotateZ$1(angle) {
  for (var _len28 = arguments.length, objects = new Array(_len28 > 1 ? _len28 - 1 : 0), _key28 = 1; _key28 < _len28; _key28++) {
    objects[_key28 - 1] = arguments[_key28];
  }

  return rotate$1([0, 0, angle], objects);
};

var rotate_1 = {
  rotate: rotate$1,
  rotateX,
  rotateY,
  rotateZ: rotateZ$1
};
/**
 * Translate the given geometries using the given options.
 * @param {Array} offset - offset (vector) of which to translate the geometries
 * @param {...Object} geometries - the geometries to translate
 * @return {Object|Array} the translated geometry, or a list of translated geometries
 * @alias module:modeling/transforms.translate
 *
 * @example
 * const newsphere = translate([5, 0, 10], sphere())
 */

var translate$4 = function translate$4(offset) {
  for (var _len29 = arguments.length, objects = new Array(_len29 > 1 ? _len29 - 1 : 0), _key29 = 1; _key29 < _len29; _key29++) {
    objects[_key29 - 1] = arguments[_key29];
  }

  if (!Array.isArray(offset)) throw new Error('offset must be an array');
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments'); // adjust the offset if necessary

  offset = offset.slice(); // don't modify the original

  while (offset.length < 3) {
    offset.push(0);
  }

  var matrix = mat4.fromTranslation(mat4.create(), offset);
  var results = objects.map(object => {
    if (path2$2.isA(object)) return path2$2.transform(matrix, object);
    if (geom2$2.isA(object)) return geom2$2.transform(matrix, object);
    if (geom3$2.isA(object)) return geom3$2.transform(matrix, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};
/**
 * Translate the given geometries along the X axis using the given options.
 * @param {Number} offset - X offset of which to translate the geometries
 * @param {...Object} geometries - the geometries to translate
 * @return {Object|Array} the translated geometry, or a list of translated geometries
 * @alias module:modeling/transforms.translateX
 */


var translateX = function translateX(offset) {
  for (var _len30 = arguments.length, objects = new Array(_len30 > 1 ? _len30 - 1 : 0), _key30 = 1; _key30 < _len30; _key30++) {
    objects[_key30 - 1] = arguments[_key30];
  }

  return translate$4([offset, 0, 0], objects);
};
/**
 * Translate the given geometries along the Y axis using the given options.
 * @param {Number} offset - Y offset of which to translate the geometries
 * @param {...Object} geometries - the geometries to translate
 * @return {Object|Array} the translated geometry, or a list of translated geometries
 * @alias module:modeling/transforms.translateY
 */


var translateY = function translateY(offset) {
  for (var _len31 = arguments.length, objects = new Array(_len31 > 1 ? _len31 - 1 : 0), _key31 = 1; _key31 < _len31; _key31++) {
    objects[_key31 - 1] = arguments[_key31];
  }

  return translate$4([0, offset, 0], objects);
};
/**
 * Translate the given geometries along the Z axis using the given options.
 * @param {Number} offset - Z offset of which to translate the geometries
 * @param {...Object} geometries - the geometries to translate
 * @return {Object|Array} the translated geometry, or a list of translated geometries
 * @alias module:modeling/transforms.translateZ
 */


var translateZ = function translateZ(offset) {
  for (var _len32 = arguments.length, objects = new Array(_len32 > 1 ? _len32 - 1 : 0), _key32 = 1; _key32 < _len32; _key32++) {
    objects[_key32 - 1] = arguments[_key32];
  }

  return translate$4([0, 0, offset], objects);
};

var translate_1 = {
  translate: translate$4,
  translateX,
  translateY,
  translateZ
};
var {
  rotate
} = rotate_1;
var {
  translate: translate$3
} = translate_1;
var {
  isGT,
  isGTE
} = commonChecks;
/**
 * Construct a torus by revolving a small circle (inner) about the circumference of a large (outer) circle.
 * @param {Object} [options] - options for construction
 * @param {Number} [options.innerRadius=1] - radius of small (inner) circle
 * @param {Number} [options.outerRadius=4] - radius of large (outer) circle
 * @param {Integer} [options.innerSegments=32] - number of segments to create per rotation
 * @param {Integer} [options.outerSegments=32] - number of segments to create per rotation
 * @param {Integer} [options.innerRotation=0] - rotation of small (inner) circle in radians
 * @param {Number} [options.outerRotation=(PI * 2)] - rotation (outer) of the torus (RADIANS)
 * @param {Number} [options.startAngle=0] - start angle of the torus (RADIANS)
 * @returns {geom3} new 3D geometry
 * @alias module:modeling/primitives.torus
 *
 * @example
 * let myshape = torus({ innerRadius: 10, outerRadius: 100 })
 */

var torus = options => {
  var defaults = {
    innerRadius: 1,
    innerSegments: 32,
    outerRadius: 4,
    outerSegments: 32,
    innerRotation: 0,
    startAngle: 0,
    outerRotation: Math.PI * 2
  };
  var {
    innerRadius,
    innerSegments,
    outerRadius,
    outerSegments,
    innerRotation,
    startAngle,
    outerRotation
  } = Object.assign({}, defaults, options);
  if (!isGT(innerRadius, 0)) throw new Error('innerRadius must be greater than zero');
  if (!isGTE(innerSegments, 3)) throw new Error('innerSegments must be three or more');
  if (!isGT(outerRadius, 0)) throw new Error('outerRadius must be greater than zero');
  if (!isGTE(outerSegments, 3)) throw new Error('outerSegments must be three or more');
  if (!isGTE(startAngle, 0)) throw new Error('startAngle must be positive');
  if (!isGT(outerRotation, 0)) throw new Error('outerRotation must be greater than zero');
  if (innerRadius >= outerRadius) throw new Error('inner circle is two large to rotate about the outer circle');
  var innerCircle = circle_1({
    radius: innerRadius,
    segments: innerSegments
  });

  if (innerRotation !== 0) {
    innerCircle = rotate([0, 0, innerRotation], innerCircle);
  }

  innerCircle = translate$3([outerRadius, 0], innerCircle);
  var extrudeOptions = {
    startAngle: startAngle,
    angle: outerRotation,
    segments: outerSegments
  };
  return extrudeRotate_1(extrudeOptions, innerCircle);
};

var torus_1 = torus;
/**
 * Primitives provide the building blocks for complex parts.
 * Each primitive is a geometrical object that can be described mathematically, and therefore precise.
 * Primitives can be logically combined, transformed, extruded, etc.
 * @module modeling/primitives
 * @example
 * const { cube, ellipse, star } = require('@jscad/modeling').primitives
 */

var primitives = {
  arc: arc_1,
  circle: circle_1,
  cube: cube_1,
  cuboid: cuboid_1,
  cylinder: cylinder_1,
  cylinderElliptic: cylinderElliptic_1,
  ellipse: ellipse_1,
  ellipsoid: ellipsoid_1,
  geodesicSphere: geodesicSphere_1,
  line: line_1,
  polygon: polygon_1,
  polyhedron: polyhedron_1,
  rectangle: rectangle_1,
  roundedCuboid: roundedCuboid_1,
  roundedCylinder: roundedCylinder_1,
  roundedRectangle: roundedRectangle_1,
  sphere: sphere_1,
  square: square_1,
  star: star_1,
  torus: torus_1
}; // -- data source from from http://paulbourke.net/dataformats/hershey/
// -- reduced to save some bytes...
// { [ascii code]: [width, x, y, ...] } - undefined value as path separator

var simplex = {
  height: 14,
  32: [16],
  33: [10, 5, 21, 5, 7, undefined, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
  34: [16, 4, 21, 4, 14, undefined, 12, 21, 12, 14],
  35: [21, 11, 25, 4, -7, undefined, 17, 25, 10, -7, undefined, 4, 12, 18, 12, undefined, 3, 6, 17, 6],
  36: [20, 8, 25, 8, -4, undefined, 12, 25, 12, -4, undefined, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3],
  37: [24, 21, 21, 3, 0, undefined, 8, 21, 10, 19, 10, 17, 9, 15, 7, 14, 5, 14, 3, 16, 3, 18, 4, 20, 6, 21, 8, 21, 10, 20, 13, 19, 16, 19, 19, 20, 21, 21, undefined, 17, 7, 15, 6, 14, 4, 14, 2, 16, 0, 18, 0, 20, 1, 21, 3, 21, 5, 19, 7, 17, 7],
  38: [26, 23, 12, 23, 13, 22, 14, 21, 14, 20, 13, 19, 11, 17, 6, 15, 3, 13, 1, 11, 0, 7, 0, 5, 1, 4, 2, 3, 4, 3, 6, 4, 8, 5, 9, 12, 13, 13, 14, 14, 16, 14, 18, 13, 20, 11, 21, 9, 20, 8, 18, 8, 16, 9, 13, 11, 10, 16, 3, 18, 1, 20, 0, 22, 0, 23, 1, 23, 2],
  39: [10, 5, 19, 4, 20, 5, 21, 6, 20, 6, 18, 5, 16, 4, 15],
  40: [14, 11, 25, 9, 23, 7, 20, 5, 16, 4, 11, 4, 7, 5, 2, 7, -2, 9, -5, 11, -7],
  41: [14, 3, 25, 5, 23, 7, 20, 9, 16, 10, 11, 10, 7, 9, 2, 7, -2, 5, -5, 3, -7],
  42: [16, 8, 21, 8, 9, undefined, 3, 18, 13, 12, undefined, 13, 18, 3, 12],
  43: [26, 13, 18, 13, 0, undefined, 4, 9, 22, 9],
  44: [10, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4],
  45: [26, 4, 9, 22, 9],
  46: [10, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
  47: [22, 20, 25, 2, -7],
  48: [20, 9, 21, 6, 20, 4, 17, 3, 12, 3, 9, 4, 4, 6, 1, 9, 0, 11, 0, 14, 1, 16, 4, 17, 9, 17, 12, 16, 17, 14, 20, 11, 21, 9, 21],
  49: [20, 6, 17, 8, 18, 11, 21, 11, 0],
  50: [20, 4, 16, 4, 17, 5, 19, 6, 20, 8, 21, 12, 21, 14, 20, 15, 19, 16, 17, 16, 15, 15, 13, 13, 10, 3, 0, 17, 0],
  51: [20, 5, 21, 16, 21, 10, 13, 13, 13, 15, 12, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4],
  52: [20, 13, 21, 3, 7, 18, 7, undefined, 13, 21, 13, 0],
  53: [20, 15, 21, 5, 21, 4, 12, 5, 13, 8, 14, 11, 14, 14, 13, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4],
  54: [20, 16, 18, 15, 20, 12, 21, 10, 21, 7, 20, 5, 17, 4, 12, 4, 7, 5, 3, 7, 1, 10, 0, 11, 0, 14, 1, 16, 3, 17, 6, 17, 7, 16, 10, 14, 12, 11, 13, 10, 13, 7, 12, 5, 10, 4, 7],
  55: [20, 17, 21, 7, 0, undefined, 3, 21, 17, 21],
  56: [20, 8, 21, 5, 20, 4, 18, 4, 16, 5, 14, 7, 13, 11, 12, 14, 11, 16, 9, 17, 7, 17, 4, 16, 2, 15, 1, 12, 0, 8, 0, 5, 1, 4, 2, 3, 4, 3, 7, 4, 9, 6, 11, 9, 12, 13, 13, 15, 14, 16, 16, 16, 18, 15, 20, 12, 21, 8, 21],
  57: [20, 16, 14, 15, 11, 13, 9, 10, 8, 9, 8, 6, 9, 4, 11, 3, 14, 3, 15, 4, 18, 6, 20, 9, 21, 10, 21, 13, 20, 15, 18, 16, 14, 16, 9, 15, 4, 13, 1, 10, 0, 8, 0, 5, 1, 4, 3],
  58: [10, 5, 14, 4, 13, 5, 12, 6, 13, 5, 14, undefined, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
  59: [10, 5, 14, 4, 13, 5, 12, 6, 13, 5, 14, undefined, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4],
  60: [24, 20, 18, 4, 9, 20, 0],
  61: [26, 4, 12, 22, 12, undefined, 4, 6, 22, 6],
  62: [24, 4, 18, 20, 9, 4, 0],
  63: [18, 3, 16, 3, 17, 4, 19, 5, 20, 7, 21, 11, 21, 13, 20, 14, 19, 15, 17, 15, 15, 14, 13, 13, 12, 9, 10, 9, 7, undefined, 9, 2, 8, 1, 9, 0, 10, 1, 9, 2],
  64: [27, 18, 13, 17, 15, 15, 16, 12, 16, 10, 15, 9, 14, 8, 11, 8, 8, 9, 6, 11, 5, 14, 5, 16, 6, 17, 8, undefined, 12, 16, 10, 14, 9, 11, 9, 8, 10, 6, 11, 5, undefined, 18, 16, 17, 8, 17, 6, 19, 5, 21, 5, 23, 7, 24, 10, 24, 12, 23, 15, 22, 17, 20, 19, 18, 20, 15, 21, 12, 21, 9, 20, 7, 19, 5, 17, 4, 15, 3, 12, 3, 9, 4, 6, 5, 4, 7, 2, 9, 1, 12, 0, 15, 0, 18, 1, 20, 2, 21, 3, undefined, 19, 16, 18, 8, 18, 6, 19, 5],
  65: [18, 9, 21, 1, 0, undefined, 9, 21, 17, 0, undefined, 4, 7, 14, 7],
  66: [21, 4, 21, 4, 0, undefined, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, undefined, 4, 11, 13, 11, 16, 10, 17, 9, 18, 7, 18, 4, 17, 2, 16, 1, 13, 0, 4, 0],
  67: [21, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5],
  68: [21, 4, 21, 4, 0, undefined, 4, 21, 11, 21, 14, 20, 16, 18, 17, 16, 18, 13, 18, 8, 17, 5, 16, 3, 14, 1, 11, 0, 4, 0],
  69: [19, 4, 21, 4, 0, undefined, 4, 21, 17, 21, undefined, 4, 11, 12, 11, undefined, 4, 0, 17, 0],
  70: [18, 4, 21, 4, 0, undefined, 4, 21, 17, 21, undefined, 4, 11, 12, 11],
  71: [21, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 18, 8, undefined, 13, 8, 18, 8],
  72: [22, 4, 21, 4, 0, undefined, 18, 21, 18, 0, undefined, 4, 11, 18, 11],
  73: [8, 4, 21, 4, 0],
  74: [16, 12, 21, 12, 5, 11, 2, 10, 1, 8, 0, 6, 0, 4, 1, 3, 2, 2, 5, 2, 7],
  75: [21, 4, 21, 4, 0, undefined, 18, 21, 4, 7, undefined, 9, 12, 18, 0],
  76: [17, 4, 21, 4, 0, undefined, 4, 0, 16, 0],
  77: [24, 4, 21, 4, 0, undefined, 4, 21, 12, 0, undefined, 20, 21, 12, 0, undefined, 20, 21, 20, 0],
  78: [22, 4, 21, 4, 0, undefined, 4, 21, 18, 0, undefined, 18, 21, 18, 0],
  79: [22, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21],
  80: [21, 4, 21, 4, 0, undefined, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 14, 17, 12, 16, 11, 13, 10, 4, 10],
  81: [22, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, undefined, 12, 4, 18, -2],
  82: [21, 4, 21, 4, 0, undefined, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, 4, 11, undefined, 11, 11, 18, 0],
  83: [20, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3],
  84: [16, 8, 21, 8, 0, undefined, 1, 21, 15, 21],
  85: [22, 4, 21, 4, 6, 5, 3, 7, 1, 10, 0, 12, 0, 15, 1, 17, 3, 18, 6, 18, 21],
  86: [18, 1, 21, 9, 0, undefined, 17, 21, 9, 0],
  87: [24, 2, 21, 7, 0, undefined, 12, 21, 7, 0, undefined, 12, 21, 17, 0, undefined, 22, 21, 17, 0],
  88: [20, 3, 21, 17, 0, undefined, 17, 21, 3, 0],
  89: [18, 1, 21, 9, 11, 9, 0, undefined, 17, 21, 9, 11],
  90: [20, 17, 21, 3, 0, undefined, 3, 21, 17, 21, undefined, 3, 0, 17, 0],
  91: [14, 4, 25, 4, -7, undefined, 5, 25, 5, -7, undefined, 4, 25, 11, 25, undefined, 4, -7, 11, -7],
  92: [14, 0, 21, 14, -3],
  93: [14, 9, 25, 9, -7, undefined, 10, 25, 10, -7, undefined, 3, 25, 10, 25, undefined, 3, -7, 10, -7],
  94: [16, 6, 15, 8, 18, 10, 15, undefined, 3, 12, 8, 17, 13, 12, undefined, 8, 17, 8, 0],
  95: [16, 0, -2, 16, -2],
  96: [10, 6, 21, 5, 20, 4, 18, 4, 16, 5, 15, 6, 16, 5, 17],
  97: [19, 15, 14, 15, 0, undefined, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
  98: [19, 4, 21, 4, 0, undefined, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3],
  99: [18, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
  100: [19, 15, 21, 15, 0, undefined, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
  101: [18, 3, 8, 15, 8, 15, 10, 14, 12, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
  102: [12, 10, 21, 8, 21, 6, 20, 5, 17, 5, 0, undefined, 2, 14, 9, 14],
  103: [19, 15, 14, 15, -2, 14, -5, 13, -6, 11, -7, 8, -7, 6, -6, undefined, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
  104: [19, 4, 21, 4, 0, undefined, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0],
  105: [8, 3, 21, 4, 20, 5, 21, 4, 22, 3, 21, undefined, 4, 14, 4, 0],
  106: [10, 5, 21, 6, 20, 7, 21, 6, 22, 5, 21, undefined, 6, 14, 6, -3, 5, -6, 3, -7, 1, -7],
  107: [17, 4, 21, 4, 0, undefined, 14, 14, 4, 4, undefined, 8, 8, 15, 0],
  108: [8, 4, 21, 4, 0],
  109: [30, 4, 14, 4, 0, undefined, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0, undefined, 15, 10, 18, 13, 20, 14, 23, 14, 25, 13, 26, 10, 26, 0],
  110: [19, 4, 14, 4, 0, undefined, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0],
  111: [19, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3, 16, 6, 16, 8, 15, 11, 13, 13, 11, 14, 8, 14],
  112: [19, 4, 14, 4, -7, undefined, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3],
  113: [19, 15, 14, 15, -7, undefined, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3],
  114: [13, 4, 14, 4, 0, undefined, 4, 8, 5, 11, 7, 13, 9, 14, 12, 14],
  115: [17, 14, 11, 13, 13, 10, 14, 7, 14, 4, 13, 3, 11, 4, 9, 6, 8, 11, 7, 13, 6, 14, 4, 14, 3, 13, 1, 10, 0, 7, 0, 4, 1, 3, 3],
  116: [12, 5, 21, 5, 4, 6, 1, 8, 0, 10, 0, undefined, 2, 14, 9, 14],
  117: [19, 4, 14, 4, 4, 5, 1, 7, 0, 10, 0, 12, 1, 15, 4, undefined, 15, 14, 15, 0],
  118: [16, 2, 14, 8, 0, undefined, 14, 14, 8, 0],
  119: [22, 3, 14, 7, 0, undefined, 11, 14, 7, 0, undefined, 11, 14, 15, 0, undefined, 19, 14, 15, 0],
  120: [17, 3, 14, 14, 0, undefined, 14, 14, 3, 0],
  121: [16, 2, 14, 8, 0, undefined, 14, 14, 8, 0, 6, -4, 4, -6, 2, -7, 1, -7],
  122: [17, 14, 14, 3, 0, undefined, 3, 14, 14, 14, undefined, 3, 0, 14, 0],
  123: [14, 9, 25, 7, 24, 6, 23, 5, 21, 5, 19, 6, 17, 7, 16, 8, 14, 8, 12, 6, 10, undefined, 7, 24, 6, 22, 6, 20, 7, 18, 8, 17, 9, 15, 9, 13, 8, 11, 4, 9, 8, 7, 9, 5, 9, 3, 8, 1, 7, 0, 6, -2, 6, -4, 7, -6, undefined, 6, 8, 8, 6, 8, 4, 7, 2, 6, 1, 5, -1, 5, -3, 6, -5, 7, -6, 9, -7],
  124: [8, 4, 25, 4, -7],
  125: [14, 5, 25, 7, 24, 8, 23, 9, 21, 9, 19, 8, 17, 7, 16, 6, 14, 6, 12, 8, 10, undefined, 7, 24, 8, 22, 8, 20, 7, 18, 6, 17, 5, 15, 5, 13, 6, 11, 10, 9, 6, 7, 5, 5, 5, 3, 6, 1, 7, 0, 8, -2, 8, -4, 7, -6, undefined, 8, 8, 6, 6, 6, 4, 7, 2, 8, 1, 9, -1, 9, -3, 8, -5, 7, -6, 5, -7],
  126: [24, 3, 6, 3, 8, 4, 11, 6, 12, 8, 12, 10, 11, 14, 8, 16, 7, 18, 7, 20, 8, 21, 10, undefined, 3, 8, 4, 10, 6, 11, 8, 11, 10, 10, 14, 7, 16, 6, 18, 6, 20, 7, 21, 10, 21, 12]
};
var defaultsVectorParams = {
  xOffset: 0,
  yOffset: 0,
  input: '?',
  align: 'left',
  font: simplex,
  height: 14,
  // == old vector_xxx simplex font height
  lineSpacing: 2.142857142857143,
  // == 30/14 == old vector_xxx ratio
  letterSpacing: 1,
  extrudeOffset: 0
}; // vectorsXXX parameters handler

var vectorParams = (options, input) => {
  if (!input && typeof options === 'string') {
    options = {
      input: options
    };
  }

  options = options || {};
  var params = Object.assign({}, defaultsVectorParams, options);
  params.input = input || params.input;
  return params;
};

var vectorParams_1 = vectorParams;
/**
 * Represents a character as a list of segments
 * @typedef {Object} VectorCharObject
 * @property {Float} width - character width
 * @property {Float} height - character height (uppercase)
 * @property {Array} segments - character segments [[[x, y], ...], ...]
 */

/** Construct a {@link VectorCharObject} from a ascii character whose code is between 31 and 127,
* if the character is not supported it is replaced by a question mark.
* @param {Object|String} [options] - options for construction or ascii character
* @param {Float} [options.xOffset=0] - x offset
* @param {Float} [options.yOffset=0] - y offset
* @param {Float} [options.height=21] - font size (uppercase height)
* @param {Float} [options.extrudeOffset=0] - width of the extrusion that will be applied (manually) after the creation of the character
* @param {String} [options.input='?'] - ascii character (ignored/overwrited if provided as seconds parameter)
* @param {String} [char='?'] - ascii character
* @returns {VectorCharObject}
* @alias module:modeling/text.vectorChar
*
* @example
* let vectorCharObject = vectorChar()
* or
* let vectorCharObject = vectorChar('A')
* or
* let vectorCharObject = vectorChar({ xOffset: 57 }, 'C')
* or
* let vectorCharObject = vectorChar({ xOffset: 78, input: '!' })
*/

var vectorChar = (options, char) => {
  var {
    xOffset,
    yOffset,
    input,
    font,
    height,
    extrudeOffset
  } = vectorParams_1(options, char);
  var code = input.charCodeAt(0);

  if (!code || !font[code]) {
    code = 63; // 63 => ?
  }

  var glyph = [].concat(font[code]);
  var ratio = (height - extrudeOffset) / font.height;
  var extrudeYOffset = extrudeOffset / 2;
  var width = glyph.shift() * ratio;
  var segments = [];
  var polyline = [];

  for (var i = 0, il = glyph.length; i < il; i += 2) {
    var gx = ratio * glyph[i] + xOffset;
    var gy = ratio * glyph[i + 1] + yOffset + extrudeYOffset;

    if (glyph[i] !== undefined) {
      polyline.push([gx, gy]);
      continue;
    }

    segments.push(polyline);
    polyline = [];
    i--;
  }

  if (polyline.length) {
    segments.push(polyline);
  }

  return {
    width,
    height,
    segments
  };
};

var vectorChar_1 = vectorChar;

var translateLine = (options, line) => {
  var {
    x,
    y
  } = Object.assign({
    x: 0,
    y: 0
  }, options || {});
  var segments = line.segments;
  var segment = null;
  var point = null;

  for (var i = 0, il = segments.length; i < il; i++) {
    segment = segments[i];

    for (var j = 0, jl = segment.length; j < jl; j++) {
      point = segment[j];
      segment[j] = [point[0] + x, point[1] + y];
    }
  }

  return line;
};
/**
 * Construct an array of character segments from a ascii string whose characters code is between 31 and 127,
 * if one character is not supported it is replaced by a question mark.
 * @param {Object|String} [options] - options for construction or ascii string
 * @param {Float} [options.xOffset=0] - x offset
 * @param {Float} [options.yOffset=0] - y offset
 * @param {Float} [options.height=21] - font size (uppercase height)
 * @param {Float} [options.lineSpacing=1.4] - line spacing expressed as a percentage of font size
 * @param {Float} [options.letterSpacing=1] - extra letter spacing expressed as a percentage of font size
 * @param {String} [options.align='left'] - multi-line text alignement: left, center or right
 * @param {Float} [options.extrudeOffset=0] - width of the extrusion that will be applied (manually) after the creation of the character
 * @param {String} [options.input='?'] - ascii string (ignored/overwrited if provided as seconds parameter)
 * @param {String} [text='?'] - ascii string
 * @returns {Array} characters segments [[[x, y], ...], ...]
 * @alias module:modeling/text.vectorText
 *
 * @example
 * let textSegments = vectorText()
 * or
 * let textSegments = vectorText('OpenJSCAD')
 * or
 * let textSegments = vectorText({ yOffset: -50 }, 'OpenJSCAD')
 * or
 * let textSegments = vectorText({ yOffset: -80, input: 'OpenJSCAD' })
 */


var vectorText = (options, text) => {
  var {
    xOffset,
    yOffset,
    input,
    font,
    height,
    align,
    extrudeOffset,
    lineSpacing,
    letterSpacing
  } = vectorParams_1(options, text);
  var [x, y] = [xOffset, yOffset];
  var [i, il, char, vect, width, diff] = [];
  var line = {
    width: 0,
    segments: []
  };
  var lines = [];
  var output = [];
  var maxWidth = 0;
  var lineStart = x;

  var pushLine = () => {
    lines.push(line);
    maxWidth = Math.max(maxWidth, line.width);
    line = {
      width: 0,
      segments: []
    };
  };

  for (i = 0, il = input.length; i < il; i++) {
    char = input[i];
    vect = vectorChar_1({
      xOffset: x,
      yOffset: y,
      font,
      height,
      extrudeOffset
    }, char);

    if (char === '\n') {
      x = lineStart;
      y -= vect.height * lineSpacing;
      pushLine();
      continue;
    }

    width = vect.width * letterSpacing;
    line.width += width;
    x += width;

    if (char !== ' ') {
      line.segments = line.segments.concat(vect.segments);
    }
  }

  if (line.segments.length) {
    pushLine();
  }

  for (i = 0, il = lines.length; i < il; i++) {
    line = lines[i];

    if (maxWidth > line.width) {
      diff = maxWidth - line.width;

      if (align === 'right') {
        line = translateLine({
          x: diff
        }, line);
      } else if (align === 'center') {
        line = translateLine({
          x: diff / 2
        }, line);
      }
    }

    output = output.concat(line.segments);
  }

  return output;
};

var vectorText_1 = vectorText;
/**
 * Texts provide sets of segments for each character or text strings.
 * The segments can be used to create outlines for both 2D and 3D geometry.
 * Note: Only ASCII characters are supported.
 * @module modeling/text
 * @example
 * const { vectorChar, vectorText } = require('@jscad/modeling').text
 */

var text = {
  vectorChar: vectorChar_1,
  vectorText: vectorText_1
};
/**
 * @param {Array} shapes - list of shapes to compare
 * @returns {Boolean} true if the given shapes are of the same type
 * @alias module:modeling/utils.areAllShapesTheSameType
 */

var areAllShapesTheSameType = shapes => {
  var previousType;
  shapes.forEach(shape => {
    var currentType = 0;
    if (geom2$2.isA(shape)) currentType = 1;
    if (geom3$2.isA(shape)) currentType = 2;
    if (path2$2.isA(shape)) currentType = 3;
    if (previousType && currentType !== previousType) return false;
    previousType = currentType;
  });
  return true;
};

var areAllShapesTheSameType_1 = areAllShapesTheSameType;
/**
 * Convert the given angle (degrees) to radians.
 * @param {Number} degrees - angle in degrees
 * @returns {Number} angle in radians
 * @alias module:modeling/utils.degToRad
 */

var degToRad = degrees => degrees * 0.017453292519943295;

var degToRad_1 = degToRad;
/**
 * @alias module:modeling/utils.fnNumberSort
 */

var fnNumberSort$2 = (a, b) => a - b;

var fnNumberSort_1$1 = fnNumberSort$2;
/**
 * @alias module:modeling/utils.insertSorted
 */

var insertSorted$2 = (array, element, comparefunc) => {
  var leftbound = 0;
  var rightbound = array.length;

  while (rightbound > leftbound) {
    var testindex = Math.floor((leftbound + rightbound) / 2);
    var testelement = array[testindex];
    var compareresult = comparefunc(element, testelement);

    if (compareresult > 0) {
      // element > testelement
      leftbound = testindex + 1;
    } else {
      rightbound = testindex;
    }
  }

  array.splice(leftbound, 0, element);
};

var insertSorted_1$1 = insertSorted$2;
/**
 * Calculate the number of segments from the given radius based on minimum length or angle.
 * @param {Number} radius - radius of the requested shape
 * @param {Number} minimumLength - minimum length of segments; 0 > length
 * @param {Number} minimumAngle - minimum angle (radians) between segments; 0 > angle < Math.PI * 2
 * @returns {Number} number of segments to complete the radius
 * @alias module:modeling/utils.radiusToSegments
 */

var radiusToSegments = (radius, minimumLength, minimumAngle) => {
  var ss = minimumLength > 0 ? radius * 2 * Math.PI / minimumLength : 0;
  var as = minimumAngle > 0 ? Math.PI * 2 / minimumAngle : 0; // minimum segments is four(4) for round primitives

  return Math.ceil(Math.max(ss, as, 4));
};

var radiusToSegments_1 = radiusToSegments;
/**
 * Convert the given angle (radians) to degrees.
 * @param {Number} radians - angle in radians
 * @returns {Number} angle in degrees
 * @alias module:modeling/utils.radToDeg
 */

var radToDeg = radians => radians * 57.29577951308232;

var radToDeg_1 = radToDeg;
/**
 * Utility functions of various sorts.
 * @module modeling/utils
 * @example
 * const { flatten, insertSorted } = require('@jscad/modeling').utils
 */

var utils = {
  areAllShapesTheSameType: areAllShapesTheSameType_1,
  degToRad: degToRad_1,
  flatten: flatten_1$1,
  fnNumberSort: fnNumberSort_1$1,
  insertSorted: insertSorted_1$1,
  radiusToSegments: radiusToSegments_1,
  radToDeg: radToDeg_1
};

var fromFakePolygon = (epsilon, polygon) => {
  // this can happen based on union, seems to be residuals -
  // return null and handle in caller
  if (polygon.vertices.length < 4) {
    return null;
  }

  var vert1Indices = [];
  var points3D = polygon.vertices.filter((vertex, i) => {
    if (vertex[2] > 0) {
      vert1Indices.push(i);
      return true;
    }

    return false;
  });

  if (points3D.length !== 2) {
    throw new Error('Assertion failed: fromFakePolygon: not enough points found'); // TBD remove later
  }

  var points2D = points3D.map(v3 => {
    var x = Math.round(v3[0] / epsilon) * epsilon + 0; // no more -0

    var y = Math.round(v3[1] / epsilon) * epsilon + 0; // no more -0

    return vec2.fromValues(x, y);
  });
  if (vec2.equals(points2D[0], points2D[1])) return null;
  var d = vert1Indices[1] - vert1Indices[0];

  if (d === 1 || d === 3) {
    if (d === 1) {
      points2D.reverse();
    }
  } else {
    throw new Error('Assertion failed: fromFakePolygon: unknown index ordering');
  }

  return points2D;
};
/*
 * Convert the given polygons to a list of sides.
 * The polygons must have only z coordinates +1 and -1, as constructed by to3DWalls().
 */


var fromFakePolygons = (epsilon, polygons) => {
  var sides = polygons.map(polygon => fromFakePolygon(epsilon, polygon)).filter(polygon => polygon !== null);
  return geom2$2.create(sides);
};

var fromFakePolygons_1 = fromFakePolygons;
/*
 * Create a polygon (wall) from the given Z values and side.
 */

var to3DWall = (z0, z1, side) => {
  var points = [vec3$1.fromVec2(vec3$1.create(), side[0], z0), vec3$1.fromVec2(vec3$1.create(), side[1], z0), vec3$1.fromVec2(vec3$1.create(), side[1], z1), vec3$1.fromVec2(vec3$1.create(), side[0], z1)];
  return poly3.fromPoints(points);
};
/*
 * Create a 3D geometry with walls, as constructed from the given options and geometry.
 *
 * @param {Object} options - options with Z offsets
 * @param {geom2} geometry - geometry used as base of walls
 * @return {geom3} the new geometry
 */


var to3DWalls = (options, geometry) => {
  var sides = geom2$2.toSides(geometry);
  var polygons = sides.map(side => to3DWall(options.z0, options.z1, side));
  var result = geom3$2.create(polygons);
  return result;
};

var to3DWalls_1 = to3DWalls;
/*
 * Class OrthoNormalBasis
 * Reprojects points on a 3D plane onto a 2D plane
 * or from a 2D plane back onto the 3D plane
 * @param  {plane} plane
 * @param  {vec3} rightvector
 */

var OrthoNormalBasis = function OrthoNormalBasis(plane, rightvector) {
  if (arguments.length < 2) {
    // choose an arbitrary right hand vector, making sure it is somewhat orthogonal to the plane normal:
    rightvector = vec3$1.orthogonal(vec3$1.create(), plane);
  }

  this.v = vec3$1.normalize(vec3$1.create(), vec3$1.cross(vec3$1.create(), plane, rightvector));
  this.u = vec3$1.cross(vec3$1.create(), this.v, plane);
  this.plane = plane;
  this.planeorigin = vec3$1.scale(vec3$1.create(), plane, plane[3]);
}; // Get an orthonormal basis for the standard XYZ planes.
// Parameters: the names of two 3D axes. The 2d x axis will map to the first given 3D axis, the 2d y
// axis will map to the second.
// Prepend the axis with a "-" to invert the direction of this axis.
// For example: OrthoNormalBasis.GetCartesian("-Y","Z")
//   will return an orthonormal basis where the 2d X axis maps to the 3D inverted Y axis, and
//   the 2d Y axis maps to the 3D Z axis.


OrthoNormalBasis.GetCartesian = function (xaxisid, yaxisid) {
  var axisid = xaxisid + '/' + yaxisid;
  var planenormal, rightvector;

  if (axisid === 'X/Y') {
    planenormal = [0, 0, 1];
    rightvector = [1, 0, 0];
  } else if (axisid === 'Y/-X') {
    planenormal = [0, 0, 1];
    rightvector = [0, 1, 0];
  } else if (axisid === '-X/-Y') {
    planenormal = [0, 0, 1];
    rightvector = [-1, 0, 0];
  } else if (axisid === '-Y/X') {
    planenormal = [0, 0, 1];
    rightvector = [0, -1, 0];
  } else if (axisid === '-X/Y') {
    planenormal = [0, 0, -1];
    rightvector = [-1, 0, 0];
  } else if (axisid === '-Y/-X') {
    planenormal = [0, 0, -1];
    rightvector = [0, -1, 0];
  } else if (axisid === 'X/-Y') {
    planenormal = [0, 0, -1];
    rightvector = [1, 0, 0];
  } else if (axisid === 'Y/X') {
    planenormal = [0, 0, -1];
    rightvector = [0, 1, 0];
  } else if (axisid === 'X/Z') {
    planenormal = [0, -1, 0];
    rightvector = [1, 0, 0];
  } else if (axisid === 'Z/-X') {
    planenormal = [0, -1, 0];
    rightvector = [0, 0, 1];
  } else if (axisid === '-X/-Z') {
    planenormal = [0, -1, 0];
    rightvector = [-1, 0, 0];
  } else if (axisid === '-Z/X') {
    planenormal = [0, -1, 0];
    rightvector = [0, 0, -1];
  } else if (axisid === '-X/Z') {
    planenormal = [0, 1, 0];
    rightvector = [-1, 0, 0];
  } else if (axisid === '-Z/-X') {
    planenormal = [0, 1, 0];
    rightvector = [0, 0, -1];
  } else if (axisid === 'X/-Z') {
    planenormal = [0, 1, 0];
    rightvector = [1, 0, 0];
  } else if (axisid === 'Z/X') {
    planenormal = [0, 1, 0];
    rightvector = [0, 0, 1];
  } else if (axisid === 'Y/Z') {
    planenormal = [1, 0, 0];
    rightvector = [0, 1, 0];
  } else if (axisid === 'Z/-Y') {
    planenormal = [1, 0, 0];
    rightvector = [0, 0, 1];
  } else if (axisid === '-Y/-Z') {
    planenormal = [1, 0, 0];
    rightvector = [0, -1, 0];
  } else if (axisid === '-Z/Y') {
    planenormal = [1, 0, 0];
    rightvector = [0, 0, -1];
  } else if (axisid === '-Y/Z') {
    planenormal = [-1, 0, 0];
    rightvector = [0, -1, 0];
  } else if (axisid === '-Z/-Y') {
    planenormal = [-1, 0, 0];
    rightvector = [0, 0, -1];
  } else if (axisid === 'Y/-Z') {
    planenormal = [-1, 0, 0];
    rightvector = [0, 1, 0];
  } else if (axisid === 'Z/Y') {
    planenormal = [-1, 0, 0];
    rightvector = [0, 0, 1];
  } else {
    throw new Error('OrthoNormalBasis.GetCartesian: invalid combination of axis identifiers. Should pass two string arguments from [X,Y,Z,-X,-Y,-Z], being two different axes.');
  }

  return new OrthoNormalBasis(new Plane(new Vector3D(planenormal), 0), new Vector3D(rightvector));
};
/*
// test code for OrthoNormalBasis.GetCartesian()
OrthoNormalBasis.GetCartesian_Test=function() {
  let axisnames=["X","Y","Z","-X","-Y","-Z"];
  let axisvectors=[[1,0,0], [0,1,0], [0,0,1], [-1,0,0], [0,-1,0], [0,0,-1]];
  for(let axis1=0; axis1 < 3; axis1++) {
    for(let axis1inverted=0; axis1inverted < 2; axis1inverted++) {
      let axis1name=axisnames[axis1+3*axis1inverted];
      let axis1vector=axisvectors[axis1+3*axis1inverted];
      for(let axis2=0; axis2 < 3; axis2++) {
        if(axis2 != axis1) {
          for(let axis2inverted=0; axis2inverted < 2; axis2inverted++) {
            let axis2name=axisnames[axis2+3*axis2inverted];
            let axis2vector=axisvectors[axis2+3*axis2inverted];
            let orthobasis=OrthoNormalBasis.GetCartesian(axis1name, axis2name);
            let test1=orthobasis.to3D(new Vector2D([1,0]));
            let test2=orthobasis.to3D(new Vector2D([0,1]));
            let expected1=new Vector3D(axis1vector);
            let expected2=new Vector3D(axis2vector);
            let d1=test1.distanceTo(expected1);
            let d2=test2.distanceTo(expected2);
            if( (d1 > 0.01) || (d2 > 0.01) ) {
              throw new Error("Wrong!");
  }}}}}}
  throw new Error("OK");
};
*/
// The z=0 plane, with the 3D x and y vectors mapped to the 2D x and y vector


OrthoNormalBasis.Z0Plane = function () {
  var plane = new Plane(new Vector3D([0, 0, 1]), 0);
  return new OrthoNormalBasis(plane, new Vector3D([1, 0, 0]));
};

OrthoNormalBasis.prototype = {
  getProjectionMatrix: function getProjectionMatrix() {
    return mat4.fromValues(this.u[0], this.v[0], this.plane[0], 0, this.u[1], this.v[1], this.plane[1], 0, this.u[2], this.v[2], this.plane[2], 0, 0, 0, -this.plane[3], 1);
  },
  getInverseProjectionMatrix: function getInverseProjectionMatrix() {
    var p = vec3$1.scale(vec3$1.create(), this.plane, this.plane[3]);
    return mat4.fromValues(this.u[0], this.u[1], this.u[2], 0, this.v[0], this.v[1], this.v[2], 0, this.plane[0], this.plane[1], this.plane[2], 0, p[0], p[1], p[2], 1);
  },
  to2D: function to2D(point) {
    return vec2.fromValues(vec3$1.dot(point, this.u), vec3$1.dot(point, this.v));
  },
  to3D: function to3D(point) {
    var v1 = vec3$1.scale(vec3$1.create(), this.u, point[0]);
    var v2 = vec3$1.scale(vec3$1.create(), this.v, point[1]);
    var v3 = vec3$1.add(v1, v1, this.planeorigin);
    var v4 = vec3$1.add(v2, v2, v3);
    return v4;
  },
  line3Dto2D: function line3Dto2D(line3d) {
    var a = line3d.point;
    var b = line3d.direction.plus(a);
    var a2d = this.to2D(a);
    var b2d = this.to2D(b);
    return Line2D.fromPoints(a2d, b2d);
  },
  line2Dto3D: function line2Dto3D(line2d) {
    var a = line2d.origin();
    var b = line2d.direction().plus(a);
    var a3d = this.to3D(a);
    var b3d = this.to3D(b);
    return Line3D.fromPoints(a3d, b3d);
  },
  transform: function transform(matrix4x4) {
    // todo: this may not work properly in case of mirroring
    var newplane = this.plane.transform(matrix4x4);
    var rightpointTransformed = this.u.transform(matrix4x4);
    var originTransformed = new Vector3D(0, 0, 0).transform(matrix4x4);
    var newrighthandvector = rightpointTransformed.minus(originTransformed);
    var newbasis = new OrthoNormalBasis(newplane, newrighthandvector);
    return newbasis;
  }
};
var OrthoNormalBasis_1 = OrthoNormalBasis;
var {
  EPS: EPS$2
} = constants;
var {
  insertSorted: insertSorted$1,
  fnNumberSort: fnNumberSort$1
} = utils;
/*
 * Retesselation for a set of COPLANAR polygons.
 * @param {poly3[]} sourcepolygons - list of polygons
 * @returns {poly3[]} new set of polygons
 */

var reTesselateCoplanarPolygons = sourcepolygons => {
  if (sourcepolygons.length < 2) return sourcepolygons;
  var destpolygons = [];
  var numpolygons = sourcepolygons.length;
  var plane = poly3.plane(sourcepolygons[0]);
  var orthobasis = new OrthoNormalBasis_1(plane);
  var polygonvertices2d = []; // array of array of Vector2D

  var polygontopvertexindexes = []; // array of indexes of topmost vertex per polygon

  var topy2polygonindexes = {};
  var ycoordinatetopolygonindexes = {};
  var ycoordinatebins = {}; // convert all polygon vertices to 2D
  // Make a list of all encountered y coordinates
  // And build a map of all polygons that have a vertex at a certain y coordinate:

  var ycoordinateBinningFactor = 1.0 / EPS$2 * 10;

  for (var polygonindex = 0; polygonindex < numpolygons; polygonindex++) {
    var poly3d = sourcepolygons[polygonindex];
    var vertices2d = [];
    var numvertices = poly3d.vertices.length;
    var minindex = -1;

    if (numvertices > 0) {
      var miny = void 0;
      var maxy = void 0;

      for (var i = 0; i < numvertices; i++) {
        var pos2d = orthobasis.to2D(poly3d.vertices[i]); // perform binning of y coordinates: If we have multiple vertices very
        // close to each other, give them the same y coordinate:

        var ycoordinatebin = Math.floor(pos2d[1] * ycoordinateBinningFactor);
        var newy = void 0;

        if (ycoordinatebin in ycoordinatebins) {
          newy = ycoordinatebins[ycoordinatebin];
        } else if (ycoordinatebin + 1 in ycoordinatebins) {
          newy = ycoordinatebins[ycoordinatebin + 1];
        } else if (ycoordinatebin - 1 in ycoordinatebins) {
          newy = ycoordinatebins[ycoordinatebin - 1];
        } else {
          newy = pos2d[1];
          ycoordinatebins[ycoordinatebin] = pos2d[1];
        }

        pos2d = vec2.fromValues(pos2d[0], newy);
        vertices2d.push(pos2d);
        var y = pos2d[1];

        if (i === 0 || y < miny) {
          miny = y;
          minindex = i;
        }

        if (i === 0 || y > maxy) {
          maxy = y;
        }

        if (!(y in ycoordinatetopolygonindexes)) {
          ycoordinatetopolygonindexes[y] = {};
        }

        ycoordinatetopolygonindexes[y][polygonindex] = true;
      }

      if (miny >= maxy) {
        // degenerate polygon, all vertices have same y coordinate. Just ignore it from now:
        vertices2d = [];
        numvertices = 0;
        minindex = -1;
      } else {
        if (!(miny in topy2polygonindexes)) {
          topy2polygonindexes[miny] = [];
        }

        topy2polygonindexes[miny].push(polygonindex);
      }
    } // if(numvertices > 0)
    // reverse the vertex order:


    vertices2d.reverse();
    minindex = numvertices - minindex - 1;
    polygonvertices2d.push(vertices2d);
    polygontopvertexindexes.push(minindex);
  }

  var ycoordinates = [];

  for (var ycoordinate in ycoordinatetopolygonindexes) {
    ycoordinates.push(ycoordinate);
  }

  ycoordinates.sort(fnNumberSort$1); // Now we will iterate over all y coordinates, from lowest to highest y coordinate
  // activepolygons: source polygons that are 'active', i.e. intersect with our y coordinate
  //   Is sorted so the polygons are in left to right order
  // Each element in activepolygons has these properties:
  //        polygonindex: the index of the source polygon (i.e. an index into the sourcepolygons
  //                      and polygonvertices2d arrays)
  //        leftvertexindex: the index of the vertex at the left side of the polygon (lowest x)
  //                         that is at or just above the current y coordinate
  //        rightvertexindex: dito at right hand side of polygon
  //        topleft, bottomleft: coordinates of the left side of the polygon crossing the current y coordinate
  //        topright, bottomright: coordinates of the right hand side of the polygon crossing the current y coordinate

  var activepolygons = [];
  var prevoutpolygonrow = [];

  for (var yindex = 0; yindex < ycoordinates.length; yindex++) {
    var newoutpolygonrow = [];
    var ycoordinateasstring = ycoordinates[yindex];

    var _ycoordinate = Number(ycoordinateasstring); // update activepolygons for this y coordinate:
    // - Remove any polygons that end at this y coordinate
    // - update leftvertexindex and rightvertexindex (which point to the current vertex index
    //   at the the left and right side of the polygon
    // Iterate over all polygons that have a corner at this y coordinate:


    var polygonindexeswithcorner = ycoordinatetopolygonindexes[ycoordinateasstring];

    for (var activepolygonindex = 0; activepolygonindex < activepolygons.length; ++activepolygonindex) {
      var activepolygon = activepolygons[activepolygonindex];
      var _polygonindex = activepolygon.polygonindex;

      if (polygonindexeswithcorner[_polygonindex]) {
        // this active polygon has a corner at this y coordinate:
        var _vertices2d = polygonvertices2d[_polygonindex];
        var _numvertices = _vertices2d.length;
        var newleftvertexindex = activepolygon.leftvertexindex;
        var newrightvertexindex = activepolygon.rightvertexindex; // See if we need to increase leftvertexindex or decrease rightvertexindex:

        while (true) {
          var nextleftvertexindex = newleftvertexindex + 1;
          if (nextleftvertexindex >= _numvertices) nextleftvertexindex = 0;
          if (_vertices2d[nextleftvertexindex][1] !== _ycoordinate) break;
          newleftvertexindex = nextleftvertexindex;
        }

        var nextrightvertexindex = newrightvertexindex - 1;
        if (nextrightvertexindex < 0) nextrightvertexindex = _numvertices - 1;

        if (_vertices2d[nextrightvertexindex][1] === _ycoordinate) {
          newrightvertexindex = nextrightvertexindex;
        }

        if (newleftvertexindex !== activepolygon.leftvertexindex && newleftvertexindex === newrightvertexindex) {
          // We have increased leftvertexindex or decreased rightvertexindex, and now they point to the same vertex
          // This means that this is the bottom point of the polygon. We'll remove it:
          activepolygons.splice(activepolygonindex, 1);
          --activepolygonindex;
        } else {
          activepolygon.leftvertexindex = newleftvertexindex;
          activepolygon.rightvertexindex = newrightvertexindex;
          activepolygon.topleft = _vertices2d[newleftvertexindex];
          activepolygon.topright = _vertices2d[newrightvertexindex];

          var _nextleftvertexindex = newleftvertexindex + 1;

          if (_nextleftvertexindex >= _numvertices) _nextleftvertexindex = 0;
          activepolygon.bottomleft = _vertices2d[_nextleftvertexindex];

          var _nextrightvertexindex = newrightvertexindex - 1;

          if (_nextrightvertexindex < 0) _nextrightvertexindex = _numvertices - 1;
          activepolygon.bottomright = _vertices2d[_nextrightvertexindex];
        }
      } // if polygon has corner here

    } // for activepolygonindex


    var nextycoordinate = void 0;

    if (yindex >= ycoordinates.length - 1) {
      // last row, all polygons must be finished here:
      activepolygons = [];
      nextycoordinate = null;
    } else {
      (function () {
        // yindex < ycoordinates.length-1
        nextycoordinate = Number(ycoordinates[yindex + 1]);
        var middleycoordinate = 0.5 * (_ycoordinate + nextycoordinate); // update activepolygons by adding any polygons that start here:

        var startingpolygonindexes = topy2polygonindexes[ycoordinateasstring];

        for (var polygonindexKey in startingpolygonindexes) {
          var _polygonindex2 = startingpolygonindexes[polygonindexKey];
          var _vertices2d2 = polygonvertices2d[_polygonindex2];
          var _numvertices2 = _vertices2d2.length;
          var topvertexindex = polygontopvertexindexes[_polygonindex2]; // the top of the polygon may be a horizontal line. In that case topvertexindex can point to any point on this line.
          // Find the left and right topmost vertices which have the current y coordinate:

          var topleftvertexindex = topvertexindex;

          while (true) {
            var _i4 = topleftvertexindex + 1;

            if (_i4 >= _numvertices2) _i4 = 0;
            if (_vertices2d2[_i4][1] !== _ycoordinate) break;
            if (_i4 === topvertexindex) break; // should not happen, but just to prevent endless loops

            topleftvertexindex = _i4;
          }

          var toprightvertexindex = topvertexindex;

          while (true) {
            var _i5 = toprightvertexindex - 1;

            if (_i5 < 0) _i5 = _numvertices2 - 1;
            if (_vertices2d2[_i5][1] !== _ycoordinate) break;
            if (_i5 === topleftvertexindex) break; // should not happen, but just to prevent endless loops

            toprightvertexindex = _i5;
          }

          var _nextleftvertexindex2 = topleftvertexindex + 1;

          if (_nextleftvertexindex2 >= _numvertices2) _nextleftvertexindex2 = 0;

          var _nextrightvertexindex2 = toprightvertexindex - 1;

          if (_nextrightvertexindex2 < 0) _nextrightvertexindex2 = _numvertices2 - 1;
          var newactivepolygon = {
            polygonindex: _polygonindex2,
            leftvertexindex: topleftvertexindex,
            rightvertexindex: toprightvertexindex,
            topleft: _vertices2d2[topleftvertexindex],
            topright: _vertices2d2[toprightvertexindex],
            bottomleft: _vertices2d2[_nextleftvertexindex2],
            bottomright: _vertices2d2[_nextrightvertexindex2]
          };
          insertSorted$1(activepolygons, newactivepolygon, (el1, el2) => {
            var x1 = interpolateBetween2DPointsForY_1(el1.topleft, el1.bottomleft, middleycoordinate);
            var x2 = interpolateBetween2DPointsForY_1(el2.topleft, el2.bottomleft, middleycoordinate);
            if (x1 > x2) return 1;
            if (x1 < x2) return -1;
            return 0;
          });
        } // for(let polygonindex in startingpolygonindexes)

      })();
    } //  yindex < ycoordinates.length-1
    // if( (yindex === ycoordinates.length-1) || (nextycoordinate - ycoordinate > EPS) )
    // FIXME : what ???
    // Now activepolygons is up to date
    // Build the output polygons for the next row in newoutpolygonrow:


    for (var activepolygonKey in activepolygons) {
      var _activepolygon = activepolygons[activepolygonKey];
      var x = interpolateBetween2DPointsForY_1(_activepolygon.topleft, _activepolygon.bottomleft, _ycoordinate);
      var topleft = vec2.fromValues(x, _ycoordinate);
      x = interpolateBetween2DPointsForY_1(_activepolygon.topright, _activepolygon.bottomright, _ycoordinate);
      var topright = vec2.fromValues(x, _ycoordinate);
      x = interpolateBetween2DPointsForY_1(_activepolygon.topleft, _activepolygon.bottomleft, nextycoordinate);
      var bottomleft = vec2.fromValues(x, nextycoordinate);
      x = interpolateBetween2DPointsForY_1(_activepolygon.topright, _activepolygon.bottomright, nextycoordinate);
      var bottomright = vec2.fromValues(x, nextycoordinate);
      var outpolygon = {
        topleft: topleft,
        topright: topright,
        bottomleft: bottomleft,
        bottomright: bottomright,
        leftline: line2.fromPoints(line2.create(), topleft, bottomleft),
        rightline: line2.fromPoints(line2.create(), bottomright, topright)
      };

      if (newoutpolygonrow.length > 0) {
        var prevoutpolygon = newoutpolygonrow[newoutpolygonrow.length - 1];
        var d1 = vec2.distance(outpolygon.topleft, prevoutpolygon.topright);
        var d2 = vec2.distance(outpolygon.bottomleft, prevoutpolygon.bottomright);

        if (d1 < EPS$2 && d2 < EPS$2) {
          // we can join this polygon with the one to the left:
          outpolygon.topleft = prevoutpolygon.topleft;
          outpolygon.leftline = prevoutpolygon.leftline;
          outpolygon.bottomleft = prevoutpolygon.bottomleft;
          newoutpolygonrow.splice(newoutpolygonrow.length - 1, 1);
        }
      }

      newoutpolygonrow.push(outpolygon);
    } // for(activepolygon in activepolygons)


    if (yindex > 0) {
      // try to match the new polygons against the previous row:
      var prevcontinuedindexes = {};
      var matchedindexes = {};

      for (var _i6 = 0; _i6 < newoutpolygonrow.length; _i6++) {
        var thispolygon = newoutpolygonrow[_i6];

        for (var ii = 0; ii < prevoutpolygonrow.length; ii++) {
          if (!matchedindexes[ii]) {
            // not already processed?
            // We have a match if the sidelines are equal or if the top coordinates
            // are on the sidelines of the previous polygon
            var prevpolygon = prevoutpolygonrow[ii];

            if (vec2.distance(prevpolygon.bottomleft, thispolygon.topleft) < EPS$2) {
              if (vec2.distance(prevpolygon.bottomright, thispolygon.topright) < EPS$2) {
                // Yes, the top of this polygon matches the bottom of the previous:
                matchedindexes[ii] = true; // Now check if the joined polygon would remain convex:

                var v1 = line2.direction(thispolygon.leftline);
                var v2 = line2.direction(prevpolygon.leftline);

                var _d = v1[0] - v2[0];

                var v3 = line2.direction(thispolygon.rightline);
                var v4 = line2.direction(prevpolygon.rightline);

                var _d2 = v3[0] - v4[0];

                var leftlinecontinues = Math.abs(_d) < EPS$2;
                var rightlinecontinues = Math.abs(_d2) < EPS$2;
                var leftlineisconvex = leftlinecontinues || _d >= 0;
                var rightlineisconvex = rightlinecontinues || _d2 >= 0;

                if (leftlineisconvex && rightlineisconvex) {
                  // yes, both sides have convex corners:
                  // This polygon will continue the previous polygon
                  thispolygon.outpolygon = prevpolygon.outpolygon;
                  thispolygon.leftlinecontinues = leftlinecontinues;
                  thispolygon.rightlinecontinues = rightlinecontinues;
                  prevcontinuedindexes[ii] = true;
                }

                break;
              }
            }
          } // if(!prevcontinuedindexes[ii])

        } // for ii

      } // for i


      for (var _ii = 0; _ii < prevoutpolygonrow.length; _ii++) {
        if (!prevcontinuedindexes[_ii]) {
          // polygon ends here
          // Finish the polygon with the last point(s):
          var _prevpolygon = prevoutpolygonrow[_ii];

          _prevpolygon.outpolygon.rightpoints.push(_prevpolygon.bottomright);

          if (vec2.distance(_prevpolygon.bottomright, _prevpolygon.bottomleft) > EPS$2) {
            // polygon ends with a horizontal line:
            _prevpolygon.outpolygon.leftpoints.push(_prevpolygon.bottomleft);
          } // reverse the left half so we get a counterclockwise circle:


          _prevpolygon.outpolygon.leftpoints.reverse();

          var points2d = _prevpolygon.outpolygon.rightpoints.concat(_prevpolygon.outpolygon.leftpoints);

          var vertices3d = points2d.map(point2d => orthobasis.to3D(point2d));

          var _polygon = poly3.fromPointsAndPlane(vertices3d, plane); // TODO support shared
          // if we let empty polygon out, next retesselate will crash


          if (_polygon.vertices.length) destpolygons.push(_polygon);
        }
      }
    } // if(yindex > 0)


    for (var _i7 = 0; _i7 < newoutpolygonrow.length; _i7++) {
      var _thispolygon = newoutpolygonrow[_i7];

      if (!_thispolygon.outpolygon) {
        // polygon starts here:
        _thispolygon.outpolygon = {
          leftpoints: [],
          rightpoints: []
        };

        _thispolygon.outpolygon.leftpoints.push(_thispolygon.topleft);

        if (vec2.distance(_thispolygon.topleft, _thispolygon.topright) > EPS$2) {
          // we have a horizontal line at the top:
          _thispolygon.outpolygon.rightpoints.push(_thispolygon.topright);
        }
      } else {
        // continuation of a previous row
        if (!_thispolygon.leftlinecontinues) {
          _thispolygon.outpolygon.leftpoints.push(_thispolygon.topleft);
        }

        if (!_thispolygon.rightlinecontinues) {
          _thispolygon.outpolygon.rightpoints.push(_thispolygon.topright);
        }
      }
    }

    prevoutpolygonrow = newoutpolygonrow;
  } // for yindex


  return destpolygons;
};

var reTesselateCoplanarPolygons_1 = reTesselateCoplanarPolygons; // This EPS is derived from a serieas of tests to determine the optimal precision for comparing coplanar polygons,
// as provided by the sphere primitive at high segmentation
// This EPS is for 64 bit Number values

var NEPS$1 = 1e-13; // Compare two normals (unit vectors) for equality.

var aboutEqualNormals$1 = (a, b) => {
  return Math.abs(a[0] - b[0]) <= NEPS$1 && Math.abs(a[1] - b[1]) <= NEPS$1 && Math.abs(a[2] - b[2]) <= NEPS$1;
};

var coplanar$1 = (plane1, plane2) => {
  // expect the same distance from the origin, within tolerance
  if (Math.abs(plane1[3] - plane2[3]) < 0.00000015) {
    return aboutEqualNormals$1(plane1, plane2);
  }

  return false;
};
/*
  After boolean operations all coplanar polygon fragments are joined by a retesselating
  operation. geom3.reTesselate(geom).
  Retesselation is done through a linear sweep over the polygon surface.
  The sweep line passes over the y coordinates of all vertices in the polygon.
  Polygons are split at each sweep line, and the fragments are joined horizontally and vertically into larger polygons
  (making sure that we will end up with convex polygons).
*/


var retessellate = geometry => {
  if (geometry.isRetesselated) {
    return geometry;
  }

  var polygons = geom3$2.toPolygons(geometry);
  var polygonsPerPlane = []; // elements: [plane, [poly3...]]

  polygons.forEach(polygon => {
    var mapping = polygonsPerPlane.find(element => coplanar$1(element[0], poly3.plane(polygon)));

    if (mapping) {
      var _polygons2 = mapping[1];

      _polygons2.push(polygon);
    } else {
      polygonsPerPlane.push([poly3.plane(polygon), [polygon]]);
    }
  });
  var destpolygons = [];
  polygonsPerPlane.forEach(mapping => {
    var sourcepolygons = mapping[1];
    var retesselayedpolygons = reTesselateCoplanarPolygons_1(sourcepolygons);
    destpolygons = destpolygons.concat(retesselayedpolygons);
  });
  var result = geom3$2.create(destpolygons);
  result.isRetesselated = true;
  return result;
};

var retessellate_1 = retessellate;
/*
 * Return a new 3D geometry representing space in both the first geometry and
 * in the subsequent geometries. None of the given geometries are modified.
 * @param {...geom3} geometries - list of 3D geometries
 * @returns {geom3} new 3D geometry
 */

var intersect$2 = function intersect$2() {
  for (var _len33 = arguments.length, geometries = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
    geometries[_key33] = arguments[_key33];
  }

  geometries = flatten_1$1(geometries);
  var newgeometry = geometries.shift();
  geometries.forEach(geometry => {
    newgeometry = intersectGeom3Sub_1(newgeometry, geometry);
  });
  newgeometry = retessellate_1(newgeometry);
  return newgeometry;
};

var intersectGeom3 = intersect$2;
/*
 * Return a new 2D geometry representing space in both the first geometry and
 * in the subsequent geometries. None of the given geometries are modified.
 * @param {...geom2} geometries - list of 2D geometries
 * @returns {geom2} new 2D geometry
 */

var intersect$1 = function intersect$1() {
  for (var _len34 = arguments.length, geometries = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
    geometries[_key34] = arguments[_key34];
  }

  geometries = flatten_1$1(geometries);
  var newgeometries = geometries.map(geometry => to3DWalls_1({
    z0: -1,
    z1: 1
  }, geometry));
  var newgeom3 = intersectGeom3(newgeometries);
  var epsilon = measureEpsilon_1(newgeom3);
  return fromFakePolygons_1(epsilon, geom3$2.toPolygons(newgeom3));
};

var intersectGeom2 = intersect$1;
/**
 * Return a new geometry representing space in both the first geometry and
 * all subsequent geometries.
 * The given geometries should be of the same type, either geom2 or geom3.
 *
 * @param {...Object} geometries - list of geometries
 * @returns {geom2|geom3} a new geometry
 * @alias module:modeling/booleans.intersect
 *
 * @example
 * let myshape = intersect(cube({size: [5,5,5]}), cube({size: [5,5,5], center: [5,5,5]}))
 *
 * @example
 * +-------+
 * |       |
 * |   A   |
 * |    +--+----+   =   +--+
 * +----+--+    |       +--+
 *      |   B   |
 *      |       |
 *      +-------+
 */

var intersect = function intersect() {
  for (var _len35 = arguments.length, geometries = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
    geometries[_key35] = arguments[_key35];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  if (!areAllShapesTheSameType_1(geometries)) ;
  var geometry = geometries[0]; // if (path.isA(geometry)) return pathintersect(matrix, geometries)

  if (geom2$2.isA(geometry)) return intersectGeom2(geometries);
  if (geom3$2.isA(geometry)) return intersectGeom3(geometries);
  return geometry;
};

var intersect_1 = intersect;

var sortNb = array => array.sort((a, b) => a - b).filter((item, pos, ary) => !pos || item !== ary[pos - 1]);

var insertMapping = (map, point, index) => {
  var key = "".concat(point);
  var mapping = map.get(key);

  if (mapping === undefined) {
    map.set(key, [index]);
  } else {
    mapping.push(index);
  }
};

var findMapping = (map, point) => {
  var key = "".concat(point);
  return map.get(key);
};

var scissionGeom3 = geometry => {
  // construit table de correspondance entre polygones
  // build polygons lookup table
  var eps = measureEpsilon_1(geometry);
  var polygons = geom3$2.toPolygons(geometry);
  var pl = polygons.length;
  var indexesPerPoint = new Map();
  var temp = vec3$1.create();
  polygons.forEach((polygon, index) => {
    polygon.vertices.forEach(point => {
      insertMapping(indexesPerPoint, vec3$1.snap(temp, point, eps), index);
    });
  });
  var indexesPerPolygon = polygons.map(polygon => {
    var indexes = [];
    polygon.vertices.forEach(point => {
      indexes = indexes.concat(findMapping(indexesPerPoint, vec3$1.snap(temp, point, eps)));
    });
    return {
      e: 1,
      d: sortNb(indexes)
    }; // for each polygon, push the list of indexes
  });
  indexesPerPoint.clear(); // regroupe les correspondances des polygones se touchant
  // boucle ne s'arrêtant que quand deux passages retournent le même nb de polygones
  // merge lookup data from linked polygons as long as possible

  var merges = 0;
  var ippl = indexesPerPolygon.length;

  for (var i = 0; i < ippl; i++) {
    var mapi = indexesPerPolygon[i]; // merge mappings if necessary

    if (mapi.e > 0) {
      (function () {
        var indexes = new Array(pl);
        indexes[i] = true; // include ourself

        do {
          merges = 0; // loop through the known indexes

          indexes.forEach((e, j) => {
            var mapj = indexesPerPolygon[j]; // merge this mapping if necessary

            if (mapj.e > 0) {
              mapj.e = -1; // merged

              for (var d = 0; d < mapj.d.length; d++) {
                indexes[mapj.d[d]] = true;
              }

              merges++;
            }
          });
        } while (merges > 0);

        mapi.indexes = indexes;
      })();
    }
  } // construit le tableau des geometry à retourner
  // build array of geometry to return


  var newgeometries = [];

  for (var _i8 = 0; _i8 < ippl; _i8++) {
    if (indexesPerPolygon[_i8].indexes) {
      (function () {
        var newpolygons = [];

        indexesPerPolygon[_i8].indexes.forEach((e, p) => newpolygons.push(polygons[p]));

        newgeometries.push(geom3$2.create(newpolygons));
      })();
    }
  }

  return newgeometries;
};

var scissionGeom3_1 = scissionGeom3; // const scissionGeom2 = require('./scissionGeom2')

/**
 * Scission (divide) the given geometry into the component pieces.
 *
 * @param {...Object} geometries - list of geometries
 * @returns {Array} list of pieces from each geometry
 * @alias module:modeling/booleans.scission
 *
 * @example
 * let figure = require('./my.stl')
 * let pieces = scission(figure)
 *
 * @example
 * +-------+            +-------+
 * |       |            |       |
 * |   +---+            | A +---+
 * |   |    +---+   =   |   |    +---+
 * +---+    |   |       +---+    |   |
 *      +---+   |            +---+   |
 *      |       |            |    B  |
 *      +-------+            +-------+
 */

var scission = function scission() {
  for (var _len36 = arguments.length, objects = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
    objects[_key36] = arguments[_key36];
  }

  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  var results = objects.map(object => {
    // if (path2.isA(object)) return path2.transform(matrix, object)
    // if (geom2.isA(object)) return geom2.transform(matrix, object)
    if (geom3$2.isA(object)) return scissionGeom3_1(object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var scission_1 = scission;
var {
  Tree: Tree$1
} = trees;
/*
 * Return a new 3D geometry representing the space in the first geometry but not
 * in the second geometry. None of the given geometries are modified.
 * @param {geom3} geometry1 - a geometry
 * @param {geom3} geometry2 - a geometry
 * @returns {geom3} new 3D geometry
 */

var subtractGeom3Sub = (geometry1, geometry2) => {
  if (!mayOverlap_1(geometry1, geometry2)) {
    return geom3$2.clone(geometry1);
  }

  var a = new Tree$1(geom3$2.toPolygons(geometry1));
  var b = new Tree$1(geom3$2.toPolygons(geometry2));
  a.invert();
  a.clipTo(b);
  b.clipTo(a, true);
  a.addPolygons(b.allPolygons());
  a.invert();
  var newpolygons = a.allPolygons();
  return geom3$2.create(newpolygons);
};

var subtractGeom3Sub_1 = subtractGeom3Sub;
/*
 * Return a new 3D geometry representing space in this geometry but not in the given geometries.
 * Neither this geometry nor the given geometries are modified.
 * @param {...geom3} geometries - list of geometries
 * @returns {geom3} new 3D geometry
 */

var subtract$3 = function subtract$3() {
  for (var _len37 = arguments.length, geometries = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
    geometries[_key37] = arguments[_key37];
  }

  geometries = flatten_1$1(geometries);
  var newgeometry = geometries.shift();
  geometries.forEach(geometry => {
    newgeometry = subtractGeom3Sub_1(newgeometry, geometry);
  });
  newgeometry = retessellate_1(newgeometry);
  return newgeometry;
};

var subtractGeom3 = subtract$3;
/*
 * Return a new 2D geometry representing space in the first geometry but
 * not in the subsequent geometries. None of the given geometries are modified.
 * @param {...geom2} geometries - list of geometries
 * @returns {geom2} new 2D geometry
 */

var subtract$2 = function subtract$2() {
  for (var _len38 = arguments.length, geometries = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
    geometries[_key38] = arguments[_key38];
  }

  geometries = flatten_1$1(geometries);
  var newgeometries = geometries.map(geometry => to3DWalls_1({
    z0: -1,
    z1: 1
  }, geometry));
  var newgeom3 = subtractGeom3(newgeometries);
  var epsilon = measureEpsilon_1(newgeom3);
  return fromFakePolygons_1(epsilon, geom3$2.toPolygons(newgeom3));
};

var subtractGeom2 = subtract$2;
/**
 * Return a new geometry representing space in the first geometry but
 * not in all subsequent geometries.
 * The given geometries should be of the same type, either geom2 or geom3.
 *
 * @param {...Object} geometries - list of geometries
 * @returns {geom2|geom3} a new geometry
 * @alias module:modeling/booleans.subtract
 *
 * @example
 * let myshape = subtract(cubiod({size: [5,5,5]}), cubiod({size: [5,5,5], center: [5,5,5]}))
 *
 * @example
 * +-------+            +-------+
 * |       |            |       |
 * |   A   |            |       |
 * |    +--+----+   =   |    +--+
 * +----+--+    |       +----+
 *      |   B   |
 *      |       |
 *      +-------+
 */

var subtract$1 = function subtract$1() {
  for (var _len39 = arguments.length, geometries = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
    geometries[_key39] = arguments[_key39];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  if (!areAllShapesTheSameType_1(geometries)) ;
  var geometry = geometries[0]; // if (path.isA(geometry)) return pathsubtract(matrix, geometries)

  if (geom2$2.isA(geometry)) return subtractGeom2(geometries);
  if (geom3$2.isA(geometry)) return subtractGeom3(geometries);
  return geometry;
};

var subtract_1 = subtract$1;
var {
  Tree
} = trees;
/*
 * Return a new 3D geometry representing the space in the given geometries.
 * @param {geom3} geometry1 - geometry to union
 * @param {geom3} geometry2 - geometry to union
 * @returns {goem3} new 3D geometry
 */

var unionSub = (geometry1, geometry2) => {
  if (!mayOverlap_1(geometry1, geometry2)) {
    return unionForNonIntersecting(geometry1, geometry2);
  }

  var a = new Tree(geom3$2.toPolygons(geometry1));
  var b = new Tree(geom3$2.toPolygons(geometry2));
  a.clipTo(b, false); // b.clipTo(a, true); // ERROR: doesn't work

  b.clipTo(a);
  b.invert();
  b.clipTo(a);
  b.invert();
  var newpolygons = a.allPolygons().concat(b.allPolygons());
  var result = geom3$2.create(newpolygons);
  return result;
}; // Like union, but when we know that the two solids are not intersecting
// Do not use if you are not completely sure that the solids do not intersect!


var unionForNonIntersecting = (geometry1, geometry2) => {
  var newpolygons = geom3$2.toPolygons(geometry1);
  newpolygons = newpolygons.concat(geom3$2.toPolygons(geometry2));
  return geom3$2.create(newpolygons);
};

var unionGeom3Sub = unionSub;
/*
 * Return a new 3D geometry representing the space in the given 3D geometries.
 * @param {...objects} geometries - list of geometries to union
 * @returns {geom3} new 3D geometry
 */

var union$3 = function union$3() {
  for (var _len40 = arguments.length, geometries = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
    geometries[_key40] = arguments[_key40];
  }

  geometries = flatten_1$1(geometries); // combine geometries in a way that forms a balanced binary tree pattern

  var i;

  for (i = 1; i < geometries.length; i += 2) {
    geometries.push(unionGeom3Sub(geometries[i - 1], geometries[i]));
  }

  var newgeometry = geometries[i - 1];
  newgeometry = retessellate_1(newgeometry);
  return newgeometry;
};

var unionGeom3 = union$3;
/*
 * Return a new 2D geometry representing the total space in the given 2D geometries.
 * @param {...geom2} geometries - list of 2D geometries to union
 * @returns {geom2} new 2D geometry
 */

var union$2 = function union$2() {
  for (var _len41 = arguments.length, geometries = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
    geometries[_key41] = arguments[_key41];
  }

  geometries = flatten_1$1(geometries);
  var newgeometries = geometries.map(geometry => to3DWalls_1({
    z0: -1,
    z1: 1
  }, geometry));
  var newgeom3 = unionGeom3(newgeometries);
  var epsilon = measureEpsilon_1(newgeom3);
  return fromFakePolygons_1(epsilon, geom3$2.toPolygons(newgeom3));
};

var unionGeom2 = union$2;
/**
 * Return a new geometry representing the total space in the given geometries.
 * The given geometries should be of the same type, either geom2 or geom3.
 *
 * @param {...Object} geometries - list of geometries
 * @returns {geom2|geom3} a new geometry
 * @alias module:modeling/booleans.union
 *
 * @example
 * let myshape = union(cube({size: [5,5,5]}), cube({size: [5,5,5], center: [5,5,5]}))
 *
 * @example
 * +-------+            +-------+
 * |       |            |       |
 * |   A   |            |       |
 * |    +--+----+   =   |       +----+
 * +----+--+    |       +----+       |
 *      |   B   |            |       |
 *      |       |            |       |
 *      +-------+            +-------+
 */

var union$1 = function union$1() {
  for (var _len42 = arguments.length, geometries = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
    geometries[_key42] = arguments[_key42];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  if (!areAllShapesTheSameType_1(geometries)) ;
  var geometry = geometries[0]; // if (path.isA(geometry)) return pathunion(matrix, geometries)

  if (geom2$2.isA(geometry)) return unionGeom2(geometries);
  if (geom3$2.isA(geometry)) return unionGeom3(geometries);
  return geometry;
};

var union_1 = union$1;
/**
 * All shapes (primitives or the results of operations) can be passed to boolean functions
 * to perform logical operations, e.g. remove a hole from a board.
 * In all cases, the function returns the results, and never changes the original shapes.
 * @module modeling/booleans
 * @example
 * const { intersect, subtract, union } = require('@jscad/modeling').booleans
 */

var booleans = {
  intersect: intersect_1,
  scission: scission_1,
  subtract: subtract_1,
  union: union_1
};
var {
  EPS: EPS$1
} = constants;
/*
 * Create a set of offset points from the given points using the given options (if any).
 * @param {Object} options - options for offset
 * @param {Float} [options.delta=1] - delta of offset (+ to exterior, - from interior)
 * @param {String} [options.corners='edge'] - type corner to create during of expansion; edge, chamfer, round
 * @param {Integer} [options.segments=16] - number of segments when creating round corners
 * @param {Integer} [options.closed=false] - is the last point connected back to the first point?
 * @param {Array} points - array of 2D points
 * @returns {Array} new set of offset points, plus points for each rounded corner
 */

var offsetFromPoints = (options, points) => {
  var defaults = {
    delta: 1,
    corners: 'edge',
    closed: false,
    segments: 16
  };
  var {
    delta,
    corners,
    closed,
    segments
  } = Object.assign({}, defaults, options);
  if (Math.abs(delta) < EPS$1) return points;
  var rotation = options.closed ? area_1(points) : 1.0; // + counter clockwise, - clockwise

  if (rotation === 0) rotation = 1.0; // use right hand normal?

  var orientation = rotation > 0 && delta >= 0 || rotation < 0 && delta < 0;
  delta = Math.abs(delta); // sign is no longer required

  var previousSegment = null;
  var newPoints = [];
  var newCorners = [];
  var of = vec2.create();
  var n = points.length;

  for (var i = 0; i < n; i++) {
    var j = (i + 1) % n;
    var p0 = points[i];
    var p1 = points[j]; // calculate the unit normal

    orientation ? vec2.subtract(of, p0, p1) : vec2.subtract(of, p1, p0);
    vec2.normal(of, of);
    vec2.normalize(of, of); // calculate the offset vector

    vec2.scale(of, of, delta); // calculate the new points (edge)

    var n0 = vec2.add(vec2.create(), p0, of);
    var n1 = vec2.add(vec2.create(), p1, of);
    var currentSegment = [n0, n1];

    if (previousSegment != null) {
      if (closed || !closed && j !== 0) {
        // check for intersection of new line segments
        var ip = intersect_1$1(previousSegment[0], previousSegment[1], currentSegment[0], currentSegment[1]);

        if (ip) {
          // adjust the previous points
          newPoints.pop(); // adjust current points

          currentSegment[0] = ip;
        } else {
          newCorners.push({
            c: p0,
            s0: previousSegment,
            s1: currentSegment
          });
        }
      }
    }

    previousSegment = [n0, n1];
    if (j === 0 && !closed) continue;
    newPoints.push(currentSegment[0]);
    newPoints.push(currentSegment[1]);
  } // complete the closure if required


  if (closed && previousSegment != null) {
    // check for intersection of closing line segments
    var _n = newPoints[0];
    var _n2 = newPoints[1];

    var _ip = intersect_1$1(previousSegment[0], previousSegment[1], _n, _n2);

    if (_ip) {
      // adjust the previous points
      newPoints[0] = _ip;
      newPoints.pop();
    } else {
      var _p = points[0];
      var cursegment = [_n, _n2];
      newCorners.push({
        c: _p,
        s0: previousSegment,
        s1: cursegment
      });
    }
  } // generate corners if necessary


  if (corners === 'edge') {
    // create edge corners
    var line0 = line2.create();
    var line1 = line2.create();
    newCorners.forEach(corner => {
      line2.fromPoints(line0, corner.s0[0], corner.s0[1]);
      line2.fromPoints(line1, corner.s1[0], corner.s1[1]);
      var ip = line2.intersectPointOfLines(line0, line1);

      if (Number.isFinite(ip[0]) && Number.isFinite(ip[1])) {
        var _p2 = corner.s0[1];

        var _i9 = newPoints.findIndex(point => vec2.equals(_p2, point));

        _i9 = (_i9 + 1) % newPoints.length;
        newPoints.splice(_i9, 0, ip);
      } else {
        // paralell segments, drop one
        var _p3 = corner.s1[0];

        var _i10 = newPoints.findIndex(point => vec2.equals(_p3, point));

        newPoints.splice(_i10, 1);
      }
    });
  }

  if (corners === 'round') {
    // create rounded corners
    var cornersegments = Math.floor(segments / 4);
    var v0 = vec2.create();
    newCorners.forEach(corner => {
      // calculate angle of rotation
      var rotation = vec2.angle(vec2.subtract(v0, corner.s1[0], corner.c));
      rotation -= vec2.angle(vec2.subtract(v0, corner.s0[1], corner.c));

      if (orientation && rotation < 0) {
        rotation = rotation + Math.PI;
        if (rotation < 0) rotation = rotation + Math.PI;
      }

      if (!orientation && rotation > 0) {
        rotation = rotation - Math.PI;
        if (rotation > 0) rotation = rotation - Math.PI;
      }

      if (rotation !== 0.0) {
        // generate the segments
        cornersegments = Math.floor(segments * (Math.abs(rotation) / (2 * Math.PI)));
        var step = rotation / cornersegments;
        var start = vec2.angle(vec2.subtract(v0, corner.s0[1], corner.c));
        var cornerpoints = [];

        for (var _i11 = 1; _i11 < cornersegments; _i11++) {
          var radians = start + step * _i11;
          var point = vec2.fromAngleRadians(vec2.create(), radians);
          vec2.scale(point, point, delta);
          vec2.add(point, point, corner.c);
          cornerpoints.push(point);
        }

        if (cornerpoints.length > 0) {
          var _p4 = corner.s0[1];

          var _i12 = newPoints.findIndex(point => vec2.equals(_p4, point));

          _i12 = (_i12 + 1) % newPoints.length;
          newPoints.splice(_i12, 0, ...cornerpoints);
        }
      } else {
        // paralell segments, drop one
        var _p5 = corner.s1[0];

        var _i13 = newPoints.findIndex(point => vec2.equals(_p5, point));

        newPoints.splice(_i13, 1);
      }
    });
  }

  return newPoints;
};

var offsetFromPoints_1 = offsetFromPoints;
/*
 * Expand the given geometry (geom2) using the given options (if any).
 * @param {Object} options - options for expand
 * @param {Number} [options.delta=1] - delta (+/-) of expansion
 * @param {String} [options.corners='edge'] - type corner to create during of expansion; edge, chamfer, round
 * @param {Integer} [options.segments=16] - number of segments when creating round corners
 * @param {geom2} geometry - the geometry to expand
 * @returns {geom2} expanded geometry
 */

var expandGeom2 = (options, geometry) => {
  var defaults = {
    delta: 1,
    corners: 'edge',
    segments: 16
  };
  var {
    delta,
    corners,
    segments
  } = Object.assign({}, defaults, options);

  if (!(corners === 'edge' || corners === 'chamfer' || corners === 'round')) {
    throw new Error('corners must be "edge", "chamfer", or "round"');
  } // convert the geometry to outlines, and generate offsets from each


  var outlines = geom2$2.toOutlines(geometry);
  var newoutlines = outlines.map(outline => {
    options = {
      delta,
      corners,
      closed: true,
      segments
    };
    return offsetFromPoints_1(options, outline);
  }); // create a composite geometry from the new outlines

  var allsides = newoutlines.reduce((sides, newoutline) => sides.concat(geom2$2.toSides(geom2$2.fromPoints(newoutline))), []);
  return geom2$2.create(allsides);
};

var expandGeom2_1 = expandGeom2; // Returns (geom3) a new geometry

var extrudePolygon = (offsetvector, polygon1) => {
  var direction = vec3$1.dot(poly3.plane(polygon1), offsetvector);

  if (direction > 0) {
    polygon1 = poly3.invert(polygon1);
  }

  var newpolygons = [polygon1];
  var polygon2 = poly3.transform(mat4.fromTranslation(mat4.create(), offsetvector), polygon1);
  var numvertices = polygon1.vertices.length;

  for (var i = 0; i < numvertices; i++) {
    var sidefacepoints = [];
    var nexti = i < numvertices - 1 ? i + 1 : 0;
    sidefacepoints.push(polygon1.vertices[i]);
    sidefacepoints.push(polygon2.vertices[i]);
    sidefacepoints.push(polygon2.vertices[nexti]);
    sidefacepoints.push(polygon1.vertices[nexti]);
    var sidefacepolygon = poly3.fromPoints(sidefacepoints);
    newpolygons.push(sidefacepolygon);
  }

  newpolygons.push(poly3.invert(polygon2));
  return geom3$2.create(newpolygons);
};

var extrudePolygon_1 = extrudePolygon;
var {
  EPS
} = constants;

var mapPlaneToVertex = (map, vertex, plane) => {
  var i = map.findIndex(item => vec3$1.equals(item[0], vertex));

  if (i < 0) {
    var entry = [vertex, [plane]];
    map.push(entry);
    return map.length;
  }

  var planes = map[i][1];
  planes.push(plane);
  return i;
};

var mapPlaneToEdge = (map, edge, plane) => {
  var i = map.findIndex(item => vec3$1.equals(item[0], edge[0]) && vec3$1.equals(item[1], edge[1]) || vec3$1.equals(item[0], edge[1]) && vec3$1.equals(item[1], edge[0]));

  if (i < 0) {
    var entry = [edge, [plane]];
    map.push(entry);
    return map.length;
  }

  var planes = map[i][1];
  planes.push(plane);
  return i;
};

var addUniqueAngle = (map, angle) => {
  var i = map.findIndex(item => item === angle);

  if (i < 0) {
    map.push(angle);
    return map.length;
  }

  return i;
};
/*
 * Create the expanded shell of the solid:
 * All faces are extruded to 2 times delta
 * Cylinders are constructed around every side
 * Spheres are placed on every vertex
 * the result is a true expansion of the solid
 * @param  {Number} delta
 * @param  {Integer} segments
 */


var expandShell = (options, geometry) => {
  var defaults = {
    delta: 1,
    segments: 12
  };
  var {
    delta,
    segments
  } = Object.assign({}, defaults, options);
  var result = geom3$2.create();
  var vertices2planes = []; // contents: [vertex, [plane, ...]]

  var edges2planes = []; // contents: [[vertex, vertex], [plane, ...]]

  var v1 = vec3$1.create();
  var v2 = vec3$1.create(); // loop through the polygons
  // - extruded the polygon, and add to the composite result
  // - add the plane to the unique vertice map
  // - add the plane to the unique edge map

  var polygons = geom3$2.toPolygons(geometry);
  polygons.forEach((polygon, index) => {
    var extrudevector = vec3$1.scale(vec3$1.create(), poly3.plane(polygon), 2 * delta);
    var translatedpolygon = poly3.transform(mat4.fromTranslation(mat4.create(), vec3$1.scale(vec3$1.create(), extrudevector, -0.5)), polygon);
    var extrudedface = extrudePolygon_1(extrudevector, translatedpolygon);
    result = unionGeom3Sub(result, extrudedface);
    var vertices = polygon.vertices;

    for (var i = 0; i < vertices.length; i++) {
      mapPlaneToVertex(vertices2planes, vertices[i], poly3.plane(polygon));
      var j = (i + 1) % vertices.length;
      var edge = [vertices[i], vertices[j]];
      mapPlaneToEdge(edges2planes, edge, poly3.plane(polygon));
    }
  }); // now construct a cylinder on every side
  // The cylinder is always an approximation of a true cylinder, having polygons
  // around the sides. We will make sure though that the cylinder will have an edge at every
  // face that touches this side. This ensures that we will get a smooth fill even
  // if two edges are at, say, 10 degrees and the segments is low.

  edges2planes.forEach(item => {
    var edge = item[0];
    var planes = item[1];
    var startpoint = edge[0];
    var endpoint = edge[1]; // our x,y and z vectors:

    var zbase = vec3$1.subtract(vec3$1.create(), endpoint, startpoint);
    vec3$1.normalize(zbase, zbase);
    var xbase = planes[0];
    var ybase = vec3$1.cross(vec3$1.create(), xbase, zbase); // make a list of angles that the cylinder should traverse:

    var angles = []; // first of all equally spaced around the cylinder:

    for (var i = 0; i < segments; i++) {
      addUniqueAngle(angles, i * Math.PI * 2 / segments);
    } // and also at every normal of all touching planes:


    for (var _i14 = 0, iMax = planes.length; _i14 < iMax; _i14++) {
      var planenormal = planes[_i14];
      var si = vec3$1.dot(ybase, planenormal);
      var co = vec3$1.dot(xbase, planenormal);

      var _angle5 = Math.atan2(si, co);

      if (_angle5 < 0) _angle5 += Math.PI * 2;
      addUniqueAngle(angles, _angle5);
      _angle5 = Math.atan2(-si, -co);
      if (_angle5 < 0) _angle5 += Math.PI * 2;
      addUniqueAngle(angles, _angle5);
    } // this will result in some duplicate angles but we will get rid of those later.


    angles = angles.sort(fnNumberSort_1$1); // Now construct the cylinder by traversing all angles:

    var numangles = angles.length;
    var prevp1;
    var prevp2;
    var startfacevertices = [];
    var endfacevertices = [];
    var polygons = [];

    for (var _i15 = -1; _i15 < numangles; _i15++) {
      var _angle6 = angles[_i15 < 0 ? _i15 + numangles : _i15];

      var _si = Math.sin(_angle6);

      var _co = Math.cos(_angle6);

      vec3$1.scale(v1, xbase, _co * delta);
      vec3$1.scale(v2, ybase, _si * delta);
      vec3$1.add(v1, v1, v2);
      var p1 = vec3$1.add(vec3$1.create(), startpoint, v1);
      var p2 = vec3$1.add(vec3$1.create(), endpoint, v1);
      var skip = false;

      if (_i15 >= 0) {
        if (vec3$1.distance(p1, prevp1) < EPS) {
          skip = true;
        }
      }

      if (!skip) {
        if (_i15 >= 0) {
          startfacevertices.push(p1);
          endfacevertices.push(p2);
          var points = [prevp2, p2, p1, prevp1];

          var _polygon2 = poly3.fromPoints(points);

          polygons.push(_polygon2);
        }

        prevp1 = p1;
        prevp2 = p2;
      }
    }

    endfacevertices.reverse();
    polygons.push(poly3.fromPoints(startfacevertices));
    polygons.push(poly3.fromPoints(endfacevertices));
    var cylinder = geom3$2.create(polygons);
    result = unionGeom3Sub(result, cylinder);
  }); // build spheres at each unique vertex
  // We will try to set the x and z axis to the normals of 2 planes
  // This will ensure that our sphere tesselation somewhat matches 2 planes

  vertices2planes.forEach(item => {
    var vertex = item[0];
    var planes = item[1]; // use the first normal to be the x axis of our sphere:

    var xaxis = planes[0]; // and find a suitable z axis. We will use the normal which is most perpendicular to the x axis:

    var bestzaxis = null;
    var bestzaxisorthogonality = 0;

    for (var i = 1; i < planes.length; i++) {
      var _normal2 = planes[i];

      var _cross = vec3$1.cross(v1, xaxis, _normal2);

      var crosslength = vec3$1.length(_cross);

      if (crosslength > 0.05) {
        // FIXME why 0.05?
        if (crosslength > bestzaxisorthogonality) {
          bestzaxisorthogonality = crosslength;
          bestzaxis = _normal2;
        }
      }
    }

    if (!bestzaxis) {
      bestzaxis = vec3$1.orthogonal(v1, xaxis);
    }

    var yaxis = vec3$1.cross(v1, xaxis, bestzaxis);
    vec3$1.normalize(yaxis, yaxis);
    var zaxis = vec3$1.cross(v2, yaxis, xaxis);
    var corner = sphere_1({
      center: [vertex[0], vertex[1], vertex[2]],
      radius: delta,
      segments: segments,
      axes: [xaxis, yaxis, zaxis]
    });
    result = unionGeom3Sub(result, corner);
  });
  return retessellate_1(result);
};

var expandShell_1 = expandShell;
/*
 * Expand the given geometry (geom3) using the given options (if any).
 * @param {Object} options - options for expand
 * @param {Number} [options.delta=1] - delta (+/-) of expansion
 * @param {String} [options.corners='round'] - type corner to create during of expansion; round
 * @param {Integer} [options.segments=12] - number of segments when creating round corners
 * @param {geom3} geometry - the geometry to expand
 * @returns {geom3} expanded geometry
 */

var expandGeom3 = (options, geometry) => {
  var defaults = {
    delta: 1,
    corners: 'round',
    segments: 12
  };
  var {
    delta,
    corners,
    segments
  } = Object.assign({}, defaults, options);

  if (!(corners === 'round')) {
    throw new Error('corners must be "round" for 3D geometries');
  }

  var polygons = geom3$2.toPolygons(geometry);
  if (polygons.length === 0) throw new Error('the given geometry cannot be empty');
  options = {
    delta,
    corners,
    segments
  };
  var expanded = expandShell_1(options, geometry);
  return union_1(geometry, expanded);
};

var expandGeom3_1 = expandGeom3;

var createGeometryFromClosedOffsets = paths => {
  var {
    external,
    internal
  } = paths;

  if (area_1(external) < 0) {
    external = external.reverse();
  } else {
    internal = internal.reverse();
  } // NOTE: creating path2 from the points ensures proper closure


  var externalPath = path2$2.fromPoints({
    closed: true
  }, external);
  var internalPath = path2$2.fromPoints({
    closed: true
  }, internal);
  var externalSides = geom2$2.toSides(geom2$2.fromPoints(path2$2.toPoints(externalPath)));
  var internalSides = geom2$2.toSides(geom2$2.fromPoints(path2$2.toPoints(internalPath)));
  externalSides.push(...internalSides);
  return geom2$2.create(externalSides);
};

var createGeometryFromExpandedOpenPath = (paths, segments, corners, delta) => {
  var {
    points,
    external,
    internal
  } = paths;
  var capSegments = Math.floor(segments / 2); // rotation is 180 degrees

  var e2iCap = [];
  var i2eCap = [];

  if (corners === 'round' && capSegments > 0) {
    // added round caps to the geometry
    var step = Math.PI / capSegments;
    var eCorner = points[points.length - 1];
    var e2iStart = vec2.angle(vec2.subtract(vec2.create(), external[external.length - 1], eCorner));
    var iCorner = points[0];
    var i2eStart = vec2.angle(vec2.subtract(vec2.create(), internal[0], iCorner));

    for (var i = 1; i < capSegments; i++) {
      var radians = e2iStart + step * i;
      var point = vec2.fromAngleRadians(vec2.create(), radians);
      vec2.scale(point, point, delta);
      vec2.add(point, point, eCorner);
      e2iCap.push(point);
      radians = i2eStart + step * i;
      point = vec2.fromAngleRadians(vec2.create(), radians);
      vec2.scale(point, point, delta);
      vec2.add(point, point, iCorner);
      i2eCap.push(point);
    }
  }

  var allPoints = [];
  allPoints.push(...external, ...e2iCap, ...internal.reverse(), ...i2eCap);
  return geom2$2.fromPoints(allPoints);
};
/*
 * Expand the given geometry (path2) using the given options (if any).
 * @param {Object} options - options for expand
 * @param {Number} [options.delta=1] - delta (+) of expansion
 * @param {String} [options.corners='edge'] - type corner to create during of expansion; edge, chamfer, round
 * @param {Integer} [options.segments=16] - number of segments when creating round corners
 * @param {path2} geometry - the geometry to expand
 * @returns {geom2} expanded geometry
 */


var expandPath2 = (options, geometry) => {
  var defaults = {
    delta: 1,
    corners: 'edge',
    segments: 16
  };
  options = Object.assign({}, defaults, options);
  var {
    delta,
    corners,
    segments
  } = options;
  if (delta <= 0) throw new Error('the given delta must be positive for paths');

  if (!(corners === 'edge' || corners === 'chamfer' || corners === 'round')) {
    throw new Error('corners must be "edge", "chamfer", or "round"');
  }

  var closed = geometry.isClosed;
  var points = path2$2.toPoints(geometry);
  if (points.length === 0) throw new Error('the given geometry cannot be empty');
  var paths = {
    points: points,
    external: offsetFromPoints_1({
      delta,
      corners,
      segments,
      closed
    }, points),
    internal: offsetFromPoints_1({
      delta: -delta,
      corners,
      segments,
      closed
    }, points)
  };

  if (geometry.isClosed) {
    return createGeometryFromClosedOffsets(paths);
  } else {
    return createGeometryFromExpandedOpenPath(paths, segments, corners, delta);
  }
};

var expandPath2_1 = expandPath2;
/**
 * Expand the given geometry using the given options.
 * Note: Contract is expand using a negative delta.
 * @param {Object} options - options for expand
 * @param {Number} [options.delta=1] - delta (+/-) of expansion
 * @param {String} [options.corners='edge'] - type of corner to create after expanding; edge, chamfer, round
 * @param {Integer} [options.segments=16] - number of segments when creating round corners
 * @param {...Objects} geometry - the list of geometry to expand
 * @return {Object|Array} new geometry, or list of new geometries
 * @alias module:modeling/expansions.expand
 *
 * @example
 * let newarc = expand({delta: 5, corners: 'edge'}, arc({}))
 * let newsquare = expand({delta: 5, corners: 'chamfer'}, square({size: 30}))
 * let newsphere = expand({delta: 2, corners: 'round'}, cuboid({size: [20, 25, 5]}))
 */

var expand = function expand(options) {
  for (var _len43 = arguments.length, objects = new Array(_len43 > 1 ? _len43 - 1 : 0), _key43 = 1; _key43 < _len43; _key43++) {
    objects[_key43 - 1] = arguments[_key43];
  }

  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  var results = objects.map(object => {
    if (path2$2.isA(object)) return expandPath2_1(options, object);
    if (geom2$2.isA(object)) return expandGeom2_1(options, object);
    if (geom3$2.isA(object)) return expandGeom3_1(options, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var expand_1 = expand;
/*
 * Create a offset geometry from the given geom2 using the given options (if any).
 * @param {Object} options - options for offset
 * @param {Float} [options.delta=1] - delta of offset (+ to exterior, - from interior)
 * @param {String} [options.corners='edge'] - type corner to create during of expansion; edge, chamfer, round
 * @param {Integer} [options.segments=16] - number of segments when creating round corners
 * @param {geom2} geometry - geometry from which to create the offset
 * @returns {geom2} offset geometry, plus rounded corners
 */

var offsetGeom2 = (options, geometry) => {
  var defaults = {
    delta: 1,
    corners: 'edge',
    segments: 0
  };
  var {
    delta,
    corners,
    segments
  } = Object.assign({}, defaults, options);

  if (!(corners === 'edge' || corners === 'chamfer' || corners === 'round')) {
    throw new Error('corners must be "edge", "chamfer", or "round"');
  } // convert the geometry to outlines, and generate offsets from each


  var outlines = geom2$2.toOutlines(geometry);
  var newoutlines = outlines.map(outline => {
    var level = outlines.reduce((acc, polygon) => acc + poly2.arePointsInside(outline, poly2.create(polygon)), 0);
    var outside = level % 2 === 0;
    options = {
      delta: outside ? delta : -delta,
      corners,
      closed: true,
      segments
    };
    return offsetFromPoints_1(options, outline);
  }); // create a composite geometry from the new outlines

  var allsides = newoutlines.reduce((sides, newoutline) => sides.concat(geom2$2.toSides(geom2$2.fromPoints(newoutline))), []);
  return geom2$2.create(allsides);
};

var offsetGeom2_1 = offsetGeom2;
/*
 * Create a offset geometry from the given path using the given options (if any).
 * @param {Object} options - options for offset
 * @param {Float} [options.delta=1] - delta of offset (+ to exterior, - from interior)
 * @param {String} [options.corners='edge'] - type corner to create during of expansion; edge, chamfer, round
 * @param {Integer} [options.segments=16] - number of segments when creating round corners
 * @param {path2} geometry - geometry from which to create the offset
 * @returns {path2} offset geometry, plus rounded corners
 */

var offsetPath2 = (options, geometry) => {
  var defaults = {
    delta: 1,
    corners: 'edge',
    closed: geometry.isClosed,
    segments: 16
  };
  var {
    delta,
    corners,
    closed,
    segments
  } = Object.assign({}, defaults, options);

  if (!(corners === 'edge' || corners === 'chamfer' || corners === 'round')) {
    throw new Error('corners must be "edge", "chamfer", or "round"');
  }

  options = {
    delta,
    corners,
    closed,
    segments
  };
  var newpoints = offsetFromPoints_1(options, path2$2.toPoints(geometry));
  return path2$2.fromPoints({
    closed: closed
  }, newpoints);
};

var offsetPath2_1 = offsetPath2;
/**
 * Create offset geometry from the given geometry using the given options.
 * @param {Object} options - options for offset
 * @param {Float} [options.delta=1] - delta of offset (+ to exterior, - from interior)
 * @param {String} [options.corners='edge'] - type of corner to create after offseting; edge, chamfer, round
 * @param {Integer} [options.segments=16] - number of segments when creating round corners
 * @param {...Object} geometry - the list of geometry to offset
 * @return {Object|Array} new geometry, or list of new geometries
 * @alias module:modeling/expansions.offset
 *
 * @example
 * let small = offset({ delta: -4, corners: 'chamfer' }, square({size: 40})) // contract
 */

var offset = function offset(options) {
  for (var _len44 = arguments.length, objects = new Array(_len44 > 1 ? _len44 - 1 : 0), _key44 = 1; _key44 < _len44; _key44++) {
    objects[_key44 - 1] = arguments[_key44];
  }

  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  var results = objects.map(object => {
    if (path2$2.isA(object)) return offsetPath2_1(options, object);
    if (geom2$2.isA(object)) return offsetGeom2_1(options, object); // if (geom3.isA(object)) return geom3.transform(matrix, object)

    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var offset_1 = offset;
/**
 * All shapes (primitives or the results of operations) can be expanded (or contracted.)
 * In all cases, the function returns the results, and never changes the original shapes.
 * @module modeling/expansions
 * @example
 * const { expand, offset } = require('@jscad/modeling').expansions
 */

var expansions = {
  expand: expand_1,
  offset: offset_1
};
/*
 * Extrude the given geometry using the given options.
 *
 * @param {Object} [options] - options for extrude
 * @param {Array} [options.offset] - the direction of the extrusion as a 3D vector
 * @param {Number} [options.twistAngle] - the final rotation (RADIANS) about the origin
 * @param {Integer} [options.twistSteps] - the number of steps created to produce the twist (if any)
 * @param {geom2} geometry - the geometry to extrude
 * @returns {geom3} the extruded 3D geometry
*/

var extrudeGeom2 = (options, geometry) => {
  var defaults = {
    offset: [0, 0, 1],
    twistAngle: 0,
    twistSteps: 12
  };
  var {
    offset,
    twistAngle,
    twistSteps
  } = Object.assign({}, defaults, options);
  if (twistSteps < 1) throw new Error('twistSteps must be 1 or more');

  if (twistAngle === 0) {
    twistSteps = 1;
  } // convert to vector in order to perform transforms


  var offsetv = vec3$1.clone(offset);
  var baseSides = geom2$2.toSides(geometry);
  if (baseSides.length === 0) throw new Error('the given geometry cannot be empty');
  var baseSlice = slice.fromSides(baseSides);
  if (offsetv[2] < 0) slice.reverse(baseSlice, baseSlice);
  var matrix = mat4.create();

  var createTwist = (progress, index, base) => {
    var Zrotation = index / twistSteps * twistAngle;
    var Zoffset = vec3$1.scale(vec3$1.create(), offsetv, index / twistSteps);
    mat4.multiply(matrix, mat4.fromZRotation(matrix, Zrotation), mat4.fromTranslation(mat4.create(), Zoffset));
    return slice.transform(matrix, base);
  };

  options = {
    numberOfSlices: twistSteps + 1,
    capStart: true,
    capEnd: true,
    callback: createTwist
  };
  return extrudeFromSlices_1(options, baseSlice);
};

var extrudeLinearGeom2 = extrudeGeom2;
/**
 * Extrude the given geometry in an upward linear direction using the given options.
 * @param {Object} options - options for extrude
 * @param {Array} [options.height=1] the height of the extrusion
 * @param {Number} [options.twistAngle=0] the final rotation (RADIANS) about the origin of the shape (if any)
 * @param {Integer} [options.twistSteps=1] the resolution of the twist about the axis (if any)
 * @param {...Object} geometry - the list of geometry to extrude
 * @return {Object|Array} the extruded geometry, or a list of extruded geometry
 * @alias module:modeling/extrusions.extrudeLinear
 *
 * @example
 * let myshape = extrudeLinear({height: 10}, rectangle({size: [20, 25]}))
 */

var extrudeLinear = function extrudeLinear(options) {
  for (var _len45 = arguments.length, objects = new Array(_len45 > 1 ? _len45 - 1 : 0), _key45 = 1; _key45 < _len45; _key45++) {
    objects[_key45 - 1] = arguments[_key45];
  }

  var defaults = {
    height: 1,
    twistAngle: 0,
    twistSteps: 1
  };
  var {
    height,
    twistAngle,
    twistSteps
  } = Object.assign({}, defaults, options);
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  options = {
    offset: [0, 0, height],
    twistAngle: twistAngle,
    twistSteps: twistSteps
  };
  var results = objects.map(object => {
    // if (path.isA(object)) return pathextrude(options, object)
    if (geom2$2.isA(object)) return extrudeLinearGeom2(options, object); // if (geom3.isA(object)) return geom3.extrude(options, object)

    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var extrudeLinear_1 = extrudeLinear;
/*
 * Expand and extrude the given geometry (path2).
 * @See expand for addition options
 * @param {Object} options - options for extrusion, if any
 * @param {Number} [options.size=1] - size of the rectangle
 * @param {Number} [options.height=1] - height of the extrusion
 * @param {path2} geometry - the geometry to extrude
 * @return {geom3} the extruded geometry
 */

var extrudeRectangularPath2 = (options, geometry) => {
  var defaults = {
    size: 1,
    height: 1
  };
  var {
    size,
    height
  } = Object.assign({}, defaults, options);
  options.delta = size;
  options.offset = [0, 0, height];
  var points = path2$2.toPoints(geometry);
  if (points.length === 0) throw new Error('the given geometry cannot be empty');
  var newgeometry = expand_1(options, geometry);
  return extrudeLinearGeom2(options, newgeometry);
};

var extrudeRectangularPath2_1 = extrudeRectangularPath2;
var {
  area
} = utils$1;
/*
 * Expand and extrude the given geometry (geom2).
 * @see expand for additional options
 * @param {Object} options - options for extrusion, if any
 * @param {Number} [options.size=1] - size of the rectangle
 * @param {Number} [options.height=1] - height of the extrusion
 * @param {geom2} geometry - the geometry to extrude
 * @return {geom3} the extruded geometry
 */

var extrudeRectangularGeom2 = (options, geometry) => {
  var defaults = {
    size: 1,
    height: 1
  };
  var {
    size,
    height
  } = Object.assign({}, defaults, options);
  options.delta = size;
  options.offset = [0, 0, height]; // convert the geometry to outlines

  var outlines = geom2$2.toOutlines(geometry);
  if (outlines.length === 0) throw new Error('the given geometry cannot be empty'); // expand the outlines

  var newparts = outlines.map(outline => {
    if (area(outline) < 0) outline.reverse(); // all outlines must wind counter clockwise

    return expand_1(options, path2$2.fromPoints({
      closed: true
    }, outline));
  }); // create a composite geometry

  var allsides = newparts.reduce((sides, part) => sides.concat(geom2$2.toSides(part)), []);
  var newgeometry = geom2$2.create(allsides);
  return extrudeLinearGeom2(options, newgeometry);
};

var extrudeRectangularGeom2_1 = extrudeRectangularGeom2;
/**
 * Extrude the given geometry by following the outline(s) with a rectangle.
 * @See expand for addition options
 * @param {Object} options - options for extrusion, if any
 * @param {Number} [options.size=1] - size of the rectangle
 * @param {Number} [options.height=1] - height of the extrusion
 * @param {...Object} geometry - the list of geometry to extrude
 * @return {Object|Array} the extruded object, or a list of extruded objects
 * @alias module:modeling/extrusions.extrudeRectangular
 *
 * @example
 * let mywalls = extrudeRectangular({offset: [0,0,10]}, square())
 */

var extrudeRectangular = function extrudeRectangular(options) {
  for (var _len46 = arguments.length, objects = new Array(_len46 > 1 ? _len46 - 1 : 0), _key46 = 1; _key46 < _len46; _key46++) {
    objects[_key46 - 1] = arguments[_key46];
  }

  var defaults = {
    size: 1,
    height: 1
  };
  var {
    size,
    height
  } = Object.assign({}, defaults, options);
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  if (size <= 0) throw new Error('size must be positive');
  if (height <= 0) throw new Error('height must be positive');
  var results = objects.map(object => {
    if (path2$2.isA(object)) return extrudeRectangularPath2_1(options, object);
    if (geom2$2.isA(object)) return extrudeRectangularGeom2_1(options, object); // if (geom3.isA(object)) return geom3.transform(matrix, object)

    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var extrudeRectangular_1 = extrudeRectangular;

var projectGeom3 = (options, geometry) => {
  // create a plane from the options, and verify
  var projplane = plane$1.fromNormalAndPoint(plane$1.create(), options.axis, options.origin);

  if (Number.isNaN(projplane[0]) || Number.isNaN(projplane[1]) || Number.isNaN(projplane[2]) || Number.isNaN(projplane[3])) {
    throw new Error('project: invalid axis or origin');
  }

  var epsilon = measureEpsilon_1(geometry);
  var epsilonArea = epsilon * epsilon * Math.sqrt(3) / 4;
  if (epsilon === 0) return geom2$2.create(); // project the polygons to the plane

  var polygons = geom3$2.toPolygons(geometry);
  var projpolys = [];

  for (var i = 0; i < polygons.length; i++) {
    var newpoints = polygons[i].vertices.map(v => plane$1.projectionOfPoint(projplane, v));
    var newpoly = poly3.create(newpoints); // only keep projections that have a measurable area

    if (poly3.measureArea(newpoly) < epsilonArea) continue; // only keep projections that face the same direction as the plane

    var newplane = poly3.plane(newpoly);
    if (!aboutEqualNormals_1(projplane, newplane)) continue;
    projpolys.push(newpoly);
  } // union the projected polygons to eliminate overlaying polygons


  var projection = geom3$2.create(projpolys);
  projection = unionGeom3(projection, projection); // rotate the projection to lay on X/Y axes if necessary

  if (!aboutEqualNormals_1(projplane, [0, 0, 1])) {
    var rotation = mat4.fromVectorRotation(mat4.create(), projplane, [0, 0, 1]);
    projection = geom3$2.transform(rotation, projection);
  } // convert the projection (polygons) into a series of 2D geometry


  var projections2D = geom3$2.toPolygons(projection).map(p => geom2$2.fromPoints(poly3.toPoints(p))); // union the 2D geometries to obtain the outline of the projection

  projection = unionGeom2(projections2D);
  return projection;
};
/**
 * Project the given 3D geometry on to the given plane.
 * @param {Object} options - options for project
 * @param {Array} [options.axis=[0,0,1]] the axis of the plane (default is Z axis)
 * @param {Array} [options.origin=[0,0,0]] the origin of the plane
 * @param {...Object} geometry - the list of 3D geometry to project
 * @return {geom2|Array} the projected 2D geometry, or a list of 2D projected geometry
 * @alias module:modeling/extrusions.project
 *
 * @example
 * let myshape = project({}, sphere({radius: 20, segments: 5}))
 */


var project = function project(options) {
  for (var _len47 = arguments.length, objects = new Array(_len47 > 1 ? _len47 - 1 : 0), _key47 = 1; _key47 < _len47; _key47++) {
    objects[_key47 - 1] = arguments[_key47];
  }

  var defaults = {
    axis: [0, 0, 1],
    // Z axis
    origin: [0, 0, 0]
  };
  var {
    axis,
    origin
  } = Object.assign({}, defaults, options);
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  options = {
    axis,
    origin
  };
  var results = objects.map(object => {
    // if (path.isA(object)) return project(options, object)
    // if (geom2.isA(object)) return project(options, object)
    if (geom3$2.isA(object)) return projectGeom3(options, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var project_1 = project;
/**
 * All 2D shapes (primitives or the results of operations) can be extruded in various ways.
 * In all cases, the function returns the results, and never changes the original shapes.
 * @module modeling/extrusions
 * @example
 * const { extrudeLinear, extrudeRectangular, extrudeRotate } = require('@jscad/modeling').extrusions
 */

var extrusions = {
  extrudeFromSlices: extrudeFromSlices_1,
  extrudeLinear: extrudeLinear_1,
  extrudeRectangular: extrudeRectangular_1,
  extrudeRotate: extrudeRotate_1,
  project: project_1,
  slice: slice
};

var angleBetweenPoints = (p0, p1) => Math.atan2(p1[1] - p0[1], p1[0] - p0[0]);

var compareIndex = (index1, index2) => {
  if (index1.angle < index2.angle) {
    return -1;
  } else if (index1.angle > index2.angle) {
    return 1;
  } else {
    if (index1.distance < index2.distance) {
      return -1;
    } else if (index1.distance > index2.distance) {
      return 1;
    }
  }

  return 0;
}; // Ported from https://github.com/bkiers/GrahamScan


var compute = points => {
  if (points.length < 3) {
    return points;
  } // Find the lowest point


  var min = 0;
  points.forEach((point, i) => {
    var minpoint = points[min];

    if (point[1] === minpoint[1]) {
      if (point[0] < minpoint[0]) {
        min = i;
      }
    } else if (point[1] < minpoint[1]) {
      min = i;
    }
  }); // Calculate angles and distances from the lowest point

  var al = [];
  var angle = 0.0;
  var dist = 0.0;

  for (var i = 0; i < points.length; i++) {
    if (i === min) {
      continue;
    }

    angle = angleBetweenPoints(points[min], points[i]);

    if (angle < 0) {
      angle += Math.PI;
    }

    dist = vec2.squaredDistance(points[min], points[i]);
    al.push({
      index: i,
      angle: angle,
      distance: dist
    });
  }

  al.sort((a, b) => compareIndex(a, b)); // Wind around the points CCW, removing interior points

  var stack = new Array(points.length + 1);
  var j = 2;

  for (var _i16 = 0; _i16 < points.length; _i16++) {
    if (_i16 === min) {
      continue;
    }

    stack[j] = al[j - 2].index;
    j++;
  }

  stack[0] = stack[points.length];
  stack[1] = min; // clockwise < 0, colinear = 0, counter clockwise > 0

  var ccw = (i1, i2, i3) => (points[i2][0] - points[i1][0]) * (points[i3][1] - points[i1][1]) - (points[i2][1] - points[i1][1]) * (points[i3][0] - points[i1][0]);

  var tmp;
  var M = 2;

  for (var _i17 = 3; _i17 <= points.length; _i17++) {
    while (ccw(stack[M - 1], stack[M], stack[_i17]) < Number.EPSILON) {
      M--;
    }

    M++;
    tmp = stack[_i17];
    stack[_i17] = stack[M];
    stack[M] = tmp;
  } // Return the indices to the points


  var indices = new Array(M);

  for (var _i18 = 0; _i18 < M; _i18++) {
    indices[_i18] = stack[_i18 + 1];
  }

  return indices;
};
/*
 * Create a convex hull of the given set of points,  where each point is an array of [x,y].
 * @param {Array} uniquepoints - list of UNIQUE points from which to create a hull
 * @returns {Array} a list of points that form the hull
 */


var hullPoints2 = uniquepoints => {
  var indices = compute(uniquepoints);
  var hullpoints = [];

  if (Array.isArray(indices)) {
    hullpoints = indices.map(index => uniquepoints[index]);
  }

  return hullpoints;
};

var hullPoints2_1 = hullPoints2;
/*
 * Create a convex hull of the given geometries (path2).
 * @param {...geometries} geometries - list of path2 geometries
 * @returns {path2} new geometry
 */

var hullPath2 = function hullPath2() {
  for (var _len48 = arguments.length, geometries = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
    geometries[_key48] = arguments[_key48];
  }

  geometries = flatten_1$1(geometries); // extract the unique points from the geometries

  var uniquepoints = [];
  geometries.forEach(geometry => {
    var points = path2$2.toPoints(geometry);
    points.forEach(point => {
      var index = uniquepoints.findIndex(unique => vec2.equals(unique, point));
      if (index < 0) uniquepoints.push(point);
    });
  });
  var hullpoints = hullPoints2_1(uniquepoints); // assemble a new geometry from the list of points

  return path2$2.fromPoints({
    closed: true
  }, hullpoints);
};

var hullPath2_1 = hullPath2;
/*
 * Create a convex hull of the given geom2 geometries.
 * @param {...geometries} geometries - list of geom2 geometries
 * @returns {geom2} new geometry
 */

var hullGeom2 = function hullGeom2() {
  for (var _len49 = arguments.length, geometries = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
    geometries[_key49] = arguments[_key49];
  }

  geometries = flatten_1$1(geometries); // extract the unique points from the geometries

  var uniquepoints = [];
  var found = new Map();

  for (var g = 0; g < geometries.length; g++) {
    var sides = geom2$2.toSides(geometries[g]);

    for (var s = 0; s < sides.length; s++) {
      var side = sides[s];
      var point = side[0];
      var id = "".concat(point[0], ",").concat(point[1]);
      if (found.has(id)) continue;
      uniquepoints.push(point);
      found.set(id, true);
    }
  }

  found.clear();
  var hullpoints = hullPoints2_1(uniquepoints); // NOTE: more then three points are required to create a new geometry

  if (hullpoints.length < 3) return geom2$2.create(); // assemble a new geometry from the list of points

  return geom2$2.fromPoints(hullpoints);
};

var hullGeom2_1 = hullGeom2;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */

var distanceSquared = (p, a, b) => {
  // == parallelogram solution
  //
  //            s
  //      __a________b__
  //       /   |    /
  //      /   h|   /
  //     /_____|__/
  //    p
  //
  //  s = b - a
  //  area = s * h
  //  |ap x s| = s * h
  //  h = |ap x s| / s
  //
  var ab = [];
  var ap = [];
  var cr = [];
  subtract_1$3(ab, b, a);
  subtract_1$3(ap, p, a);
  var area = squaredLength_1$1(cross_1$1(cr, ap, ab));
  var s = squaredLength_1$1(ab);

  if (s === 0) {
    throw Error('a and b are the same point');
  }

  return area / s;
};

var pointLineDistance = (point, a, b) => Math.sqrt(distanceSquared(point, a, b));

var pointLineDistance_1 = pointLineDistance;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */

var planeNormal = (out, point1, point2, point3) => {
  var tmp = [0, 0, 0];
  subtract_1$3(out, point1, point2);
  subtract_1$3(tmp, point2, point3);
  cross_1$1(out, out, tmp);
  return normalize_1$1(out, out);
};

var getPlaneNormal = planeNormal;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */

class VertexList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  clear() {
    this.head = this.tail = null;
  }
  /**
   * Inserts a `node` before `target`, it's assumed that
   * `target` belongs to this doubly linked list
   *
   * @param {*} target
   * @param {*} node
   */


  insertBefore(target, node) {
    node.prev = target.prev;
    node.next = target;

    if (!node.prev) {
      this.head = node;
    } else {
      node.prev.next = node;
    }

    target.prev = node;
  }
  /**
   * Inserts a `node` after `target`, it's assumed that
   * `target` belongs to this doubly linked list
   *
   * @param {Vertex} target
   * @param {Vertex} node
   */


  insertAfter(target, node) {
    node.prev = target;
    node.next = target.next;

    if (!node.next) {
      this.tail = node;
    } else {
      node.next.prev = node;
    }

    target.next = node;
  }
  /**
   * Appends a `node` to the end of this doubly linked list
   * Note: `node.next` will be unlinked from `node`
   * Note: if `node` is part of another linked list call `addAll` instead
   *
   * @param {*} node
   */


  add(node) {
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    node.prev = this.tail; // since node is the new end it doesn't have a next node

    node.next = null;
    this.tail = node;
  }
  /**
   * Appends a chain of nodes where `node` is the head,
   * the difference with `add` is that it correctly sets the position
   * of the node list `tail` property
   *
   * @param {*} node
   */


  addAll(node) {
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    node.prev = this.tail; // find the end of the list

    while (node.next) {
      node = node.next;
    }

    this.tail = node;
  }
  /**
   * Deletes a `node` from this linked list, it's assumed that `node` is a
   * member of this linked list
   *
   * @param {*} node
   */


  remove(node) {
    if (!node.prev) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (!node.next) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
  }
  /**
   * Removes a chain of nodes whose head is `a` and whose tail is `b`,
   * it's assumed that `a` and `b` belong to this list and also that `a`
   * comes before `b` in the linked list
   *
   * @param {*} a
   * @param {*} b
   */


  removeChain(a, b) {
    if (!a.prev) {
      this.head = b.next;
    } else {
      a.prev.next = b.next;
    }

    if (!b.next) {
      this.tail = a.prev;
    } else {
      b.next.prev = a.prev;
    }
  }

  first() {
    return this.head;
  }

  isEmpty() {
    return !this.head;
  }

}

var VertexList_1 = VertexList;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */

class Vertex {
  constructor(point, index) {
    this.point = point; // index in the input array

    this.index = index; // vertex is a double linked list node

    this.next = null;
    this.prev = null; // the face that is able to see this point

    this.face = null;
  }

}

var Vertex_1 = Vertex;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */

class HalfEdge {
  constructor(vertex, face) {
    this.vertex = vertex;
    this.face = face;
    this.next = null;
    this.prev = null;
    this.opposite = null;
  }

  head() {
    return this.vertex;
  }

  tail() {
    return this.prev ? this.prev.vertex : null;
  }

  length() {
    if (this.tail()) {
      return distance_1$1(this.tail().point, this.head().point);
    }

    return -1;
  }

  lengthSquared() {
    if (this.tail()) {
      return squaredDistance_1$1(this.tail().point, this.head().point);
    }

    return -1;
  }

  setOpposite(edge) {
    this.opposite = edge;
    edge.opposite = this;
  }

}

var HalfEdge_1 = HalfEdge;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */

var VISIBLE$1 = 0;
var NON_CONVEX$1 = 1;
var DELETED$1 = 2;

class Face$1 {
  constructor() {
    this.normal = [];
    this.centroid = []; // signed distance from face to the origin

    this.offset = 0; // pointer to the a vertex in a double linked list this face can see

    this.outside = null;
    this.mark = VISIBLE$1;
    this.edge = null;
    this.nVertices = 0;
  }

  getEdge(i) {
    if (typeof i !== 'number') {
      throw Error('requires a number');
    }

    var it = this.edge;

    while (i > 0) {
      it = it.next;
      i -= 1;
    }

    while (i < 0) {
      it = it.prev;
      i += 1;
    }

    return it;
  }

  computeNormal() {
    var e0 = this.edge;
    var e1 = e0.next;
    var e2 = e1.next;
    var v2 = subtract_1$3([], e1.head().point, e0.head().point);
    var t = [];
    var v1 = [];
    this.nVertices = 2;
    this.normal = [0, 0, 0];

    while (e2 !== e0) {
      copy_1$4(v1, v2);
      subtract_1$3(v2, e2.head().point, e0.head().point);
      add_1$1(this.normal, this.normal, cross_1$1(t, v1, v2));
      e2 = e2.next;
      this.nVertices += 1;
    }

    this.area = length_1$1(this.normal); // normalize the vector, since we've already calculated the area
    // it's cheaper to scale the vector using this quantity instead of
    // doing the same operation again

    this.normal = scale_1$3(this.normal, this.normal, 1 / this.area);
  }

  computeNormalMinArea(minArea) {
    this.computeNormal();

    if (this.area < minArea) {
      // compute the normal without the longest edge
      var maxEdge;
      var maxSquaredLength = 0;
      var edge = this.edge; // find the longest edge (in length) in the chain of edges

      do {
        var lengthSquared = edge.lengthSquared();

        if (lengthSquared > maxSquaredLength) {
          maxEdge = edge;
          maxSquaredLength = lengthSquared;
        }

        edge = edge.next;
      } while (edge !== this.edge);

      var p1 = maxEdge.tail().point;
      var p2 = maxEdge.head().point;
      var maxVector = subtract_1$3([], p2, p1);
      var maxLength = Math.sqrt(maxSquaredLength); // maxVector is normalized after this operation

      scale_1$3(maxVector, maxVector, 1 / maxLength); // compute the projection of maxVector over this face normal

      var maxProjection = dot_1$2(this.normal, maxVector); // subtract the quantity maxEdge adds on the normal

      scale_1$3(maxVector, maxVector, -maxProjection);
      add_1$1(this.normal, this.normal, maxVector); // renormalize `this.normal`

      normalize_1$1(this.normal, this.normal);
    }
  }

  computeCentroid() {
    this.centroid = [0, 0, 0];
    var edge = this.edge;

    do {
      add_1$1(this.centroid, this.centroid, edge.head().point);
      edge = edge.next;
    } while (edge !== this.edge);

    scale_1$3(this.centroid, this.centroid, 1 / this.nVertices);
  }

  computeNormalAndCentroid(minArea) {
    if (typeof minArea !== 'undefined') {
      this.computeNormalMinArea(minArea);
    } else {
      this.computeNormal();
    }

    this.computeCentroid();
    this.offset = dot_1$2(this.normal, this.centroid);
  }

  distanceToPlane(point) {
    return dot_1$2(this.normal, point) - this.offset;
  }
  /**
   * @private
   *
   * Connects two edges assuming that prev.head().point === next.tail().point
   *
   * @param {HalfEdge} prev
   * @param {HalfEdge} next
   */


  connectHalfEdges(prev, next) {
    var discardedFace;

    if (prev.opposite.face === next.opposite.face) {
      // `prev` is remove a redundant edge
      var oppositeFace = next.opposite.face;
      var oppositeEdge;

      if (prev === this.edge) {
        this.edge = next;
      }

      if (oppositeFace.nVertices === 3) {
        // case:
        // remove the face on the right
        //
        //       /|\
        //      / | \ the face on the right
        //     /  |  \ --> opposite edge
        //    / a |   \
        //   *----*----*
        //  /     b  |  \
        //           ▾
        //      redundant edge
        //
        // Note: the opposite edge is actually in the face to the right
        // of the face to be destroyed
        oppositeEdge = next.opposite.prev.opposite;
        oppositeFace.mark = DELETED$1;
        discardedFace = oppositeFace;
      } else {
        // case:
        //          t
        //        *----
        //       /| <- right face's redundant edge
        //      / | opposite edge
        //     /  |  ▴   /
        //    / a |  |  /
        //   *----*----*
        //  /     b  |  \
        //           ▾
        //      redundant edge
        oppositeEdge = next.opposite.next; // make sure that the link `oppositeFace.edge` points correctly even
        // after the right face redundant edge is removed

        if (oppositeFace.edge === oppositeEdge.prev) {
          oppositeFace.edge = oppositeEdge;
        } //       /|   /
        //      / | t/opposite edge
        //     /  | / ▴  /
        //    / a |/  | /
        //   *----*----*
        //  /     b     \


        oppositeEdge.prev = oppositeEdge.prev.prev;
        oppositeEdge.prev.next = oppositeEdge;
      } //       /|
      //      / |
      //     /  |
      //    / a |
      //   *----*----*
      //  /     b  ▴  \
      //           |
      //     redundant edge


      next.prev = prev.prev;
      next.prev.next = next; //       / \  \
      //      /   \->\
      //     /     \<-\ opposite edge
      //    / a     \  \
      //   *----*----*
      //  /     b  ^  \

      next.setOpposite(oppositeEdge);
      oppositeFace.computeNormalAndCentroid();
    } else {
      // trivial case
      //        *
      //       /|\
      //      / | \
      //     /  |--> next
      //    / a |   \
      //   *----*----*
      //    \ b |   /
      //     \  |--> prev
      //      \ | /
      //       \|/
      //        *
      prev.next = next;
      next.prev = prev;
    }

    return discardedFace;
  }

  mergeAdjacentFaces(adjacentEdge, discardedFaces) {
    var oppositeEdge = adjacentEdge.opposite;
    var oppositeFace = oppositeEdge.face;
    discardedFaces.push(oppositeFace);
    oppositeFace.mark = DELETED$1; // find the chain of edges whose opposite face is `oppositeFace`
    //
    //                ===>
    //      \         face         /
    //       * ---- * ---- * ---- *
    //      /     opposite face    \
    //                <===
    //

    var adjacentEdgePrev = adjacentEdge.prev;
    var adjacentEdgeNext = adjacentEdge.next;
    var oppositeEdgePrev = oppositeEdge.prev;
    var oppositeEdgeNext = oppositeEdge.next; // left edge

    while (adjacentEdgePrev.opposite.face === oppositeFace) {
      adjacentEdgePrev = adjacentEdgePrev.prev;
      oppositeEdgeNext = oppositeEdgeNext.next;
    } // right edge


    while (adjacentEdgeNext.opposite.face === oppositeFace) {
      adjacentEdgeNext = adjacentEdgeNext.next;
      oppositeEdgePrev = oppositeEdgePrev.prev;
    } // adjacentEdgePrev  \         face         / adjacentEdgeNext
    //                    * ---- * ---- * ---- *
    // oppositeEdgeNext  /     opposite face    \ oppositeEdgePrev
    // fix the face reference of all the opposite edges that are not part of
    // the edges whose opposite face is not `face` i.e. all the edges that
    // `face` and `oppositeFace` do not have in common


    var edge;

    for (edge = oppositeEdgeNext; edge !== oppositeEdgePrev.next; edge = edge.next) {
      edge.face = this;
    } // make sure that `face.edge` is not one of the edges to be destroyed
    // Note: it's important for it to be a `next` edge since `prev` edges
    // might be destroyed on `connectHalfEdges`


    this.edge = adjacentEdgeNext; // connect the extremes
    // Note: it might be possible that after connecting the edges a triangular
    // face might be redundant

    var discardedFace;
    discardedFace = this.connectHalfEdges(oppositeEdgePrev, adjacentEdgeNext);

    if (discardedFace) {
      discardedFaces.push(discardedFace);
    }

    discardedFace = this.connectHalfEdges(adjacentEdgePrev, oppositeEdgeNext);

    if (discardedFace) {
      discardedFaces.push(discardedFace);
    }

    this.computeNormalAndCentroid(); // TODO: additional consistency checks

    return discardedFaces;
  }

  collectIndices() {
    var indices = [];
    var edge = this.edge;

    do {
      indices.push(edge.head().index);
      edge = edge.next;
    } while (edge !== this.edge);

    return indices;
  }

  static createTriangle(v0, v1, v2) {
    var minArea = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var face = new Face$1();
    var e0 = new HalfEdge_1(v0, face);
    var e1 = new HalfEdge_1(v1, face);
    var e2 = new HalfEdge_1(v2, face); // join edges

    e0.next = e2.prev = e1;
    e1.next = e0.prev = e2;
    e2.next = e1.prev = e0; // main half edge reference

    face.edge = e0;
    face.computeNormalAndCentroid(minArea);
    return face;
  }

}

var Face_1 = {
  VISIBLE: VISIBLE$1,
  NON_CONVEX: NON_CONVEX$1,
  DELETED: DELETED$1,
  Face: Face$1
};
var {
  Face,
  VISIBLE,
  NON_CONVEX,
  DELETED
} = Face_1;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */
// merge types
// non convex with respect to the large face

var MERGE_NON_CONVEX_WRT_LARGER_FACE = 1;
var MERGE_NON_CONVEX = 2;

class QuickHull {
  constructor(points) {
    if (!Array.isArray(points)) {
      throw TypeError('input is not a valid array');
    }

    if (points.length < 4) {
      throw Error('cannot build a simplex out of <4 points');
    }

    this.tolerance = -1; // buffers

    this.nFaces = 0;
    this.nPoints = points.length;
    this.faces = [];
    this.newFaces = []; // helpers
    //
    // let `a`, `b` be `Face` instances
    // let `v` be points wrapped as instance of `Vertex`
    //
    //     [v, v, ..., v, v, v, ...]
    //      ^             ^
    //      |             |
    //  a.outside     b.outside
    //

    this.claimed = new VertexList_1();
    this.unclaimed = new VertexList_1(); // vertices of the hull(internal representation of points)

    this.vertices = [];

    for (var i = 0; i < points.length; i += 1) {
      this.vertices.push(new Vertex_1(points[i], i));
    }

    this.discardedFaces = [];
    this.vertexPointIndices = [];
  }

  addVertexToFace(vertex, face) {
    vertex.face = face;

    if (!face.outside) {
      this.claimed.add(vertex);
    } else {
      this.claimed.insertBefore(face.outside, vertex);
    }

    face.outside = vertex;
  }
  /**
   * Removes `vertex` for the `claimed` list of vertices, it also makes sure
   * that the link from `face` to the first vertex it sees in `claimed` is
   * linked correctly after the removal
   *
   * @param {Vertex} vertex
   * @param {Face} face
   */


  removeVertexFromFace(vertex, face) {
    if (vertex === face.outside) {
      // fix face.outside link
      if (vertex.next && vertex.next.face === face) {
        // face has at least 2 outside vertices, move the `outside` reference
        face.outside = vertex.next;
      } else {
        // vertex was the only outside vertex that face had
        face.outside = null;
      }
    }

    this.claimed.remove(vertex);
  }
  /**
   * Removes all the visible vertices that `face` is able to see which are
   * stored in the `claimed` vertext list
   *
   * @param {Face} face
   * @return {Vertex|undefined} If face had visible vertices returns
   * `face.outside`, otherwise undefined
   */


  removeAllVerticesFromFace(face) {
    if (face.outside) {
      // pointer to the last vertex of this face
      // [..., outside, ..., end, outside, ...]
      //          |           |      |
      //          a           a      b
      var end = face.outside;

      while (end.next && end.next.face === face) {
        end = end.next;
      }

      this.claimed.removeChain(face.outside, end); //                            b
      //                       [ outside, ...]
      //                            |  removes this link
      //     [ outside, ..., end ] -┘
      //          |           |
      //          a           a

      end.next = null;
      return face.outside;
    }
  }
  /**
   * Removes all the visible vertices that `face` is able to see, additionally
   * checking the following:
   *
   * If `absorbingFace` doesn't exist then all the removed vertices will be
   * added to the `unclaimed` vertex list
   *
   * If `absorbingFace` exists then this method will assign all the vertices of
   * `face` that can see `absorbingFace`, if a vertex cannot see `absorbingFace`
   * it's added to the `unclaimed` vertex list
   *
   * @param {Face} face
   * @param {Face} [absorbingFace]
   */


  deleteFaceVertices(face, absorbingFace) {
    var faceVertices = this.removeAllVerticesFromFace(face);

    if (faceVertices) {
      if (!absorbingFace) {
        // mark the vertices to be reassigned to some other face
        this.unclaimed.addAll(faceVertices);
      } else {
        // if there's an absorbing face try to assign as many vertices
        // as possible to it
        // the reference `vertex.next` might be destroyed on
        // `this.addVertexToFace` (see VertexList#add), nextVertex is a
        // reference to it
        var nextVertex;

        for (var vertex = faceVertices; vertex; vertex = nextVertex) {
          nextVertex = vertex.next;

          var _distance = absorbingFace.distanceToPlane(vertex.point); // check if `vertex` is able to see `absorbingFace`


          if (_distance > this.tolerance) {
            this.addVertexToFace(vertex, absorbingFace);
          } else {
            this.unclaimed.add(vertex);
          }
        }
      }
    }
  }
  /**
   * Reassigns as many vertices as possible from the unclaimed list to the new
   * faces
   *
   * @param {Faces[]} newFaces
   */


  resolveUnclaimedPoints(newFaces) {
    // cache next vertex so that if `vertex.next` is destroyed it's still
    // recoverable
    var vertexNext = this.unclaimed.first();

    for (var vertex = vertexNext; vertex; vertex = vertexNext) {
      vertexNext = vertex.next;
      var maxDistance = this.tolerance;
      var maxFace = void 0;

      for (var i = 0; i < newFaces.length; i += 1) {
        var face = newFaces[i];

        if (face.mark === VISIBLE) {
          var dist = face.distanceToPlane(vertex.point);

          if (dist > maxDistance) {
            maxDistance = dist;
            maxFace = face;
          }

          if (maxDistance > 1000 * this.tolerance) {
            break;
          }
        }
      }

      if (maxFace) {
        this.addVertexToFace(vertex, maxFace);
      }
    }
  }
  /**
   * Computes the extremes of a tetrahedron which will be the initial hull
   *
   * @return {number[]} The min/max vertices in the x,y,z directions
   */


  computeExtremes() {
    var min = [];
    var max = []; // min vertex on the x,y,z directions

    var minVertices = []; // max vertex on the x,y,z directions

    var maxVertices = [];
    var i, j; // initially assume that the first vertex is the min/max

    for (i = 0; i < 3; i += 1) {
      minVertices[i] = maxVertices[i] = this.vertices[0];
    } // copy the coordinates of the first vertex to min/max


    for (i = 0; i < 3; i += 1) {
      min[i] = max[i] = this.vertices[0].point[i];
    } // compute the min/max vertex on all 6 directions


    for (i = 1; i < this.vertices.length; i += 1) {
      var vertex = this.vertices[i];
      var point = vertex.point; // update the min coordinates

      for (j = 0; j < 3; j += 1) {
        if (point[j] < min[j]) {
          min[j] = point[j];
          minVertices[j] = vertex;
        }
      } // update the max coordinates


      for (j = 0; j < 3; j += 1) {
        if (point[j] > max[j]) {
          max[j] = point[j];
          maxVertices[j] = vertex;
        }
      }
    } // compute epsilon


    this.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(min[0]), Math.abs(max[0])) + Math.max(Math.abs(min[1]), Math.abs(max[1])) + Math.max(Math.abs(min[2]), Math.abs(max[2])));
    return [minVertices, maxVertices];
  }
  /**
   * Compues the initial tetrahedron assigning to its faces all the points that
   * are candidates to form part of the hull
   */


  createInitialSimplex() {
    var vertices = this.vertices;
    var [min, max] = this.computeExtremes();
    var v2, v3;
    var i, j; // Find the two vertices with the greatest 1d separation
    // (max.x - min.x)
    // (max.y - min.y)
    // (max.z - min.z)

    var maxDistance = 0;
    var indexMax = 0;

    for (i = 0; i < 3; i += 1) {
      var _distance2 = max[i].point[i] - min[i].point[i];

      if (_distance2 > maxDistance) {
        maxDistance = _distance2;
        indexMax = i;
      }
    }

    var v0 = min[indexMax];
    var v1 = max[indexMax]; // the next vertex is the one farthest to the line formed by `v0` and `v1`

    maxDistance = 0;

    for (i = 0; i < this.vertices.length; i += 1) {
      var vertex = this.vertices[i];

      if (vertex !== v0 && vertex !== v1) {
        var _distance3 = pointLineDistance_1(vertex.point, v0.point, v1.point);

        if (_distance3 > maxDistance) {
          maxDistance = _distance3;
          v2 = vertex;
        }
      }
    } // the next vertes is the one farthest to the plane `v0`, `v1`, `v2`
    // normalize((v2 - v1) x (v0 - v1))


    var normal = getPlaneNormal([], v0.point, v1.point, v2.point); // distance from the origin to the plane

    var distPO = dot_1$2(v0.point, normal);
    maxDistance = -1;

    for (i = 0; i < this.vertices.length; i += 1) {
      var _vertex3 = this.vertices[i];

      if (_vertex3 !== v0 && _vertex3 !== v1 && _vertex3 !== v2) {
        var _distance4 = Math.abs(dot_1$2(normal, _vertex3.point) - distPO);

        if (_distance4 > maxDistance) {
          maxDistance = _distance4;
          v3 = _vertex3;
        }
      }
    } // initial simplex
    // Taken from http://everything2.com/title/How+to+paint+a+tetrahedron
    //
    //                              v2
    //                             ,|,
    //                           ,7``\'VA,
    //                         ,7`   |, `'VA,
    //                       ,7`     `\    `'VA,
    //                     ,7`        |,      `'VA,
    //                   ,7`          `\         `'VA,
    //                 ,7`             |,           `'VA,
    //               ,7`               `\       ,..ooOOTK` v3
    //             ,7`                  |,.ooOOT''`    AV
    //           ,7`            ,..ooOOT`\`           /7
    //         ,7`      ,..ooOOT''`      |,          AV
    //        ,T,..ooOOT''`              `\         /7
    //     v0 `'TTs.,                     |,       AV
    //            `'TTs.,                 `\      /7
    //                 `'TTs.,             |,    AV
    //                      `'TTs.,        `\   /7
    //                           `'TTs.,    |, AV
    //                                `'TTs.,\/7
    //                                     `'T`
    //                                       v1
    //


    var faces = [];

    if (dot_1$2(v3.point, normal) - distPO < 0) {
      // the face is not able to see the point so `planeNormal`
      // is pointing outside the tetrahedron
      faces.push(Face.createTriangle(v0, v1, v2), Face.createTriangle(v3, v1, v0), Face.createTriangle(v3, v2, v1), Face.createTriangle(v3, v0, v2)); // set the opposite edge

      for (i = 0; i < 3; i += 1) {
        var _j = (i + 1) % 3; // join face[i] i > 0, with the first face


        faces[i + 1].getEdge(2).setOpposite(faces[0].getEdge(_j)); // join face[i] with face[i + 1], 1 <= i <= 3

        faces[i + 1].getEdge(1).setOpposite(faces[_j + 1].getEdge(0));
      }
    } else {
      // the face is able to see the point so `planeNormal`
      // is pointing inside the tetrahedron
      faces.push(Face.createTriangle(v0, v2, v1), Face.createTriangle(v3, v0, v1), Face.createTriangle(v3, v1, v2), Face.createTriangle(v3, v2, v0)); // set the opposite edge

      for (i = 0; i < 3; i += 1) {
        var _j2 = (i + 1) % 3; // join face[i] i > 0, with the first face


        faces[i + 1].getEdge(2).setOpposite(faces[0].getEdge((3 - i) % 3)); // join face[i] with face[i + 1]

        faces[i + 1].getEdge(0).setOpposite(faces[_j2 + 1].getEdge(1));
      }
    } // the initial hull is the tetrahedron


    for (i = 0; i < 4; i += 1) {
      this.faces.push(faces[i]);
    } // initial assignment of vertices to the faces of the tetrahedron


    for (i = 0; i < vertices.length; i += 1) {
      var _vertex4 = vertices[i];

      if (_vertex4 !== v0 && _vertex4 !== v1 && _vertex4 !== v2 && _vertex4 !== v3) {
        maxDistance = this.tolerance;
        var maxFace = void 0;

        for (j = 0; j < 4; j += 1) {
          var _distance5 = faces[j].distanceToPlane(_vertex4.point);

          if (_distance5 > maxDistance) {
            maxDistance = _distance5;
            maxFace = faces[j];
          }
        }

        if (maxFace) {
          this.addVertexToFace(_vertex4, maxFace);
        }
      }
    }
  }

  reindexFaceAndVertices() {
    // remove inactive faces
    var activeFaces = [];

    for (var i = 0; i < this.faces.length; i += 1) {
      var face = this.faces[i];

      if (face.mark === VISIBLE) {
        activeFaces.push(face);
      }
    }

    this.faces = activeFaces;
  }

  collectFaces(skipTriangulation) {
    var faceIndices = [];

    for (var i = 0; i < this.faces.length; i += 1) {
      if (this.faces[i].mark !== VISIBLE) {
        throw Error('attempt to include a destroyed face in the hull');
      }

      var indices = this.faces[i].collectIndices();

      if (skipTriangulation) {
        faceIndices.push(indices);
      } else {
        for (var j = 0; j < indices.length - 2; j += 1) {
          faceIndices.push([indices[0], indices[j + 1], indices[j + 2]]);
        }
      }
    }

    return faceIndices;
  }
  /**
   * Finds the next vertex to make faces with the current hull
   *
   * - let `face` be the first face existing in the `claimed` vertex list
   *  - if `face` doesn't exist then return since there're no vertices left
   *  - otherwise for each `vertex` that face sees find the one furthest away
   *  from `face`
   *
   * @return {Vertex|undefined} Returns undefined when there're no more
   * visible vertices
   */


  nextVertexToAdd() {
    if (!this.claimed.isEmpty()) {
      var eyeVertex, vertex;
      var maxDistance = 0;
      var eyeFace = this.claimed.first().face;

      for (vertex = eyeFace.outside; vertex && vertex.face === eyeFace; vertex = vertex.next) {
        var _distance6 = eyeFace.distanceToPlane(vertex.point);

        if (_distance6 > maxDistance) {
          maxDistance = _distance6;
          eyeVertex = vertex;
        }
      }

      return eyeVertex;
    }
  }
  /**
   * Computes a chain of half edges in ccw order called the `horizon`, for an
   * edge to be part of the horizon it must join a face that can see
   * `eyePoint` and a face that cannot see `eyePoint`
   *
   * @param {number[]} eyePoint - The coordinates of a point
   * @param {HalfEdge} crossEdge - The edge used to jump to the current `face`
   * @param {Face} face - The current face being tested
   * @param {HalfEdge[]} horizon - The edges that form part of the horizon in
   * ccw order
   */


  computeHorizon(eyePoint, crossEdge, face, horizon) {
    // moves face's vertices to the `unclaimed` vertex list
    this.deleteFaceVertices(face);
    face.mark = DELETED;
    var edge;

    if (!crossEdge) {
      edge = crossEdge = face.getEdge(0);
    } else {
      // start from the next edge since `crossEdge` was already analyzed
      // (actually `crossEdge.opposite` was the face who called this method
      // recursively)
      edge = crossEdge.next;
    } // All the faces that are able to see `eyeVertex` are defined as follows
    //
    //       v    /
    //           / <== visible face
    //          /
    //         |
    //         | <== not visible face
    //
    //  dot(v, visible face normal) - visible face offset > this.tolerance
    //


    do {
      var oppositeEdge = edge.opposite;
      var oppositeFace = oppositeEdge.face;

      if (oppositeFace.mark === VISIBLE) {
        if (oppositeFace.distanceToPlane(eyePoint) > this.tolerance) {
          this.computeHorizon(eyePoint, oppositeEdge, oppositeFace, horizon);
        } else {
          horizon.push(edge);
        }
      }

      edge = edge.next;
    } while (edge !== crossEdge);
  }
  /**
   * Creates a face with the points `eyeVertex.point`, `horizonEdge.tail` and
   * `horizonEdge.tail` in ccw order
   *
   * @param {Vertex} eyeVertex
   * @param {HalfEdge} horizonEdge
   * @return {HalfEdge} The half edge whose vertex is the eyeVertex
   */


  addAdjoiningFace(eyeVertex, horizonEdge) {
    // all the half edges are created in ccw order thus the face is always
    // pointing outside the hull
    // edges:
    //
    //                  eyeVertex.point
    //                       / \
    //                      /   \
    //                  1  /     \  0
    //                    /       \
    //                   /         \
    //                  /           \
    //          horizon.tail --- horizon.head
    //                        2
    //
    var face = Face.createTriangle(eyeVertex, horizonEdge.tail(), horizonEdge.head());
    this.faces.push(face); // join face.getEdge(-1) with the horizon's opposite edge
    // face.getEdge(-1) = face.getEdge(2)

    face.getEdge(-1).setOpposite(horizonEdge.opposite);
    return face.getEdge(0);
  }
  /**
   * Adds horizon.length faces to the hull, each face will be 'linked' with the
   * horizon opposite face and the face on the left/right
   *
   * @param {Vertex} eyeVertex
   * @param {HalfEdge[]} horizon - A chain of half edges in ccw order
   */


  addNewFaces(eyeVertex, horizon) {
    this.newFaces = [];
    var firstSideEdge, previousSideEdge;

    for (var i = 0; i < horizon.length; i += 1) {
      var horizonEdge = horizon[i]; // returns the right side edge

      var sideEdge = this.addAdjoiningFace(eyeVertex, horizonEdge);

      if (!firstSideEdge) {
        firstSideEdge = sideEdge;
      } else {
        // joins face.getEdge(1) with previousFace.getEdge(0)
        sideEdge.next.setOpposite(previousSideEdge);
      }

      this.newFaces.push(sideEdge.face);
      previousSideEdge = sideEdge;
    }

    firstSideEdge.next.setOpposite(previousSideEdge);
  }
  /**
   * Computes the distance from `edge` opposite face's centroid to
   * `edge.face`
   *
   * @param {HalfEdge} edge
   * @return {number}
   * - A positive number when the centroid of the opposite face is above the
   *   face i.e. when the faces are concave
   * - A negative number when the centroid of the opposite face is below the
   *   face i.e. when the faces are convex
   */


  oppositeFaceDistance(edge) {
    return edge.face.distanceToPlane(edge.opposite.face.centroid);
  }
  /**
   * Merges a face with none/any/all its neighbors according to the strategy
   * used
   *
   * if `mergeType` is MERGE_NON_CONVEX_WRT_LARGER_FACE then the merge will be
   * decided based on the face with the larger area, the centroid of the face
   * with the smaller area will be checked against the one with the larger area
   * to see if it's in the merge range [tolerance, -tolerance] i.e.
   *
   *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
   *
   * Note that the first check (with +tolerance) was done on `computeHorizon`
   *
   * If the above is not true then the check is done with respect to the smaller
   * face i.e.
   *
   *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
   *
   * If true then it means that two faces are non convex (concave), even if the
   * dot(...) - offset value is > 0 (that's the point of doing the merge in the
   * first place)
   *
   * If two faces are concave then the check must also be done on the other face
   * but this is done in another merge pass, for this to happen the face is
   * marked in a temporal NON_CONVEX state
   *
   * if `mergeType` is MERGE_NON_CONVEX then two faces will be merged only if
   * they pass the following conditions
   *
   *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
   *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
   *
   * @param {Face} face
   * @param {number} mergeType - Either MERGE_NON_CONVEX_WRT_LARGER_FACE or
   * MERGE_NON_CONVEX
   */


  doAdjacentMerge(face, mergeType) {
    var edge = face.edge;
    var convex = true;
    var it = 0;

    do {
      if (it >= face.nVertices) {
        throw Error('merge recursion limit exceeded');
      }

      var oppositeFace = edge.opposite.face;
      var merge = false; // Important notes about the algorithm to merge faces
      //
      // - Given a vertex `eyeVertex` that will be added to the hull
      //   all the faces that cannot see `eyeVertex` are defined as follows
      //
      //      dot(v, not visible face normal) - not visible offset < tolerance
      //
      // - Two faces can be merged when the centroid of one of these faces
      // projected to the normal of the other face minus the other face offset
      // is in the range [tolerance, -tolerance]
      // - Since `face` (given in the input for this method) has passed the
      // check above we only have to check the lower bound e.g.
      //
      //      dot(v, not visible face normal) - not visible offset > -tolerance
      //

      if (mergeType === MERGE_NON_CONVEX) {
        if (this.oppositeFaceDistance(edge) > -this.tolerance || this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
          merge = true;
        }
      } else {
        if (face.area > oppositeFace.area) {
          if (this.oppositeFaceDistance(edge) > -this.tolerance) {
            merge = true;
          } else if (this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
            convex = false;
          }
        } else {
          if (this.oppositeFaceDistance(edge.opposite) > -this.tolerance) {
            merge = true;
          } else if (this.oppositeFaceDistance(edge) > -this.tolerance) {
            convex = false;
          }
        }
      }

      if (merge) {
        // when two faces are merged it might be possible that redundant faces
        // are destroyed, in that case move all the visible vertices from the
        // destroyed faces to the `unclaimed` vertex list
        var discardedFaces = face.mergeAdjacentFaces(edge, []);

        for (var i = 0; i < discardedFaces.length; i += 1) {
          this.deleteFaceVertices(discardedFaces[i], face);
        }

        return true;
      }

      edge = edge.next;
      it += 1;
    } while (edge !== face.edge);

    if (!convex) {
      face.mark = NON_CONVEX;
    }

    return false;
  }
  /**
   * Adds a vertex to the hull with the following algorithm
   *
   * - Compute the `horizon` which is a chain of half edges, for an edge to
   *   belong to this group it must be the edge connecting a face that can
   *   see `eyeVertex` and a face which cannot see `eyeVertex`
   * - All the faces that can see `eyeVertex` have its visible vertices removed
   *   from the claimed VertexList
   * - A new set of faces is created with each edge of the `horizon` and
   *   `eyeVertex`, each face is connected with the opposite horizon face and
   *   the face on the left/right
   * - The new faces are merged if possible with the opposite horizon face first
   *   and then the faces on the right/left
   * - The vertices removed from all the visible faces are assigned to the new
   *   faces if possible
   *
   * @param {Vertex} eyeVertex
   */


  addVertexToHull(eyeVertex) {
    var horizon = [];
    this.unclaimed.clear(); // remove `eyeVertex` from `eyeVertex.face` so that it can't be added to the
    // `unclaimed` vertex list

    this.removeVertexFromFace(eyeVertex, eyeVertex.face);
    this.computeHorizon(eyeVertex.point, null, eyeVertex.face, horizon);
    this.addNewFaces(eyeVertex, horizon); // first merge pass
    // Do the merge with respect to the larger face

    for (var i = 0; i < this.newFaces.length; i += 1) {
      var face = this.newFaces[i];

      if (face.mark === VISIBLE) {
        while (this.doAdjacentMerge(face, MERGE_NON_CONVEX_WRT_LARGER_FACE)) {}
      }
    } // second merge pass
    // Do the merge on non convex faces (a face is marked as non convex in the
    // first pass)


    for (var _i19 = 0; _i19 < this.newFaces.length; _i19 += 1) {
      var _face = this.newFaces[_i19];

      if (_face.mark === NON_CONVEX) {
        _face.mark = VISIBLE;

        while (this.doAdjacentMerge(_face, MERGE_NON_CONVEX)) {}
      }
    } // reassign `unclaimed` vertices to the new faces


    this.resolveUnclaimedPoints(this.newFaces);
  }

  build() {
    var eyeVertex;
    this.createInitialSimplex();

    while (eyeVertex = this.nextVertexToAdd()) {
      this.addVertexToHull(eyeVertex);
    }

    this.reindexFaceAndVertices();
  }

}

var QuickHull_1 = QuickHull;
/*
 * Original source from quickhull3d (https://github.com/mauriciopoppe/quickhull3d)
 * Copyright (c) 2015 Mauricio Poppe
 *
 * Adapted to JSCAD by Jeff Gay
 */

var runner = function runner(points) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instance = new QuickHull_1(points);
  instance.build();
  return instance.collectFaces(options.skipTriangulation);
};

var quickhull = runner;
/*
 * Create a convex hull of the given geometries (geom3).
 * @param {...geometries} geometries - list of geom3 geometries
 * @returns {geom3} new geometry
 */

var hullGeom3 = function hullGeom3() {
  for (var _len50 = arguments.length, geometries = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
    geometries[_key50] = arguments[_key50];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 1) return geometries[0]; // extract the unique vertices from the geometries

  var uniquevertices = [];
  var found = new Map();

  for (var g = 0; g < geometries.length; ++g) {
    var _polygons = geom3$2.toPolygons(geometries[g]);

    for (var p = 0; p < _polygons.length; ++p) {
      var vertices = _polygons[p].vertices;

      for (var v = 0; v < vertices.length; ++v) {
        var id = "".concat(vertices[v]);
        if (found.has(id)) continue;
        uniquevertices.push(vertices[v]);
        found.set(id, true);
      }
    }
  }

  found.clear();
  var faces = quickhull(uniquevertices, {
    skipTriangulation: true
  });
  var polygons = faces.map(face => {
    var vertices = face.map(index => uniquevertices[index]);
    return poly3.create(vertices);
  });
  return geom3$2.create(polygons);
};

var hullGeom3_1 = hullGeom3;
/**
 * Create a convex hull of the given geometries.
 * The given geometries should be of the same type, either geom2 or geom3 or path2.
 * @param {...Objects} geometries - list of geometries from which to create a hull
 * @returns {geom2|geom3} new geometry
 * @alias module:modeling/hulls.hull
 *
 * @example
 * let myshape = hull(rectangle({center: [-5,-5]}), ellipse({center: [5,5]}))
 *
 * @example
 * +-------+           +-------+
 * |       |           |        \
 * |   A   |           |         \
 * |       |           |          \
 * +-------+           +           \
 *                  =   \           \
 *       +-------+       \           +
 *       |       |        \          |
 *       |   B   |         \         |
 *       |       |          \        |
 *       +-------+           +-------+
 */

var hull = function hull() {
  for (var _len51 = arguments.length, geometries = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
    geometries[_key51] = arguments[_key51];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  if (!areAllShapesTheSameType_1(geometries)) ;
  var geometry = geometries[0];
  if (path2$2.isA(geometry)) return hullPath2_1(geometries);
  if (geom2$2.isA(geometry)) return hullGeom2_1(geometries);
  if (geom3$2.isA(geometry)) return hullGeom3_1(geometries); // FIXME should this throw an error for unknown geometries?

  return geometry;
};

var hull_1 = hull;
/**
 * Create a chain of hulled geometries from the given gemetries.
 * Essentially hull A+B, B+C, C+D, etc., then union the results.
 * The given geometries should be of the same type, either geom2 or geom3 or path2.
 *
 * @param {...Objects} geometries - list of geometries from which to create a hull
 * @returns {geom2|geom3} new geometry
 * @alias module:modeling/hulls.hullChain
 *
 * @example
 * let newshape = hullChain(rectangle({center: [-5,-5]}), circle({center: [0,0]}), rectangle({center: [5,5]}))
 *
 * @example
 * +-------+   +-------+     +-------+   +------+
 * |       |   |       |     |        \ /       |
 * |   A   |   |   C   |     |         |        |
 * |       |   |       |     |                  |
 * +-------+   +-------+     +                  +
 *                       =   \                 /
 *       +-------+            \               /
 *       |       |             \             /
 *       |   B   |              \           /
 *       |       |               \         /
 *       +-------+                +-------+
 */

var hullChain = function hullChain() {
  for (var _len52 = arguments.length, geometries = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
    geometries[_key52] = arguments[_key52];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length < 2) throw new Error('wrong number of arguments');
  var hulls = [];

  for (var i = 1; i < geometries.length; i++) {
    hulls.push(hull_1(geometries[i - 1], geometries[i]));
  }

  return union_1(hulls);
};

var hullChain_1 = hullChain;
/**
 * All shapes (primitives or the results of operations) can be passed to hull functions
 * to determine the convex hull of all points.
 * In all cases, the function returns the results, and never changes the original shapes.
 * @module modeling/hulls
 * @example
 * const { hull, hullChain } = require('@jscad/modeling').hulls
 */

var hulls = {
  hull: hull_1,
  hullChain: hullChain_1
};

var isValidPoly3 = (epsilon, polygon) => {
  var area = poly3.measureArea(polygon);
  return Number.isFinite(area) && area > epsilon;
};
/*
 * Snap the given list of polygons to the epsilon.
 */


var snapPolygons = (epsilon, polygons) => {
  var newpolygons = polygons.map(polygon => {
    var snapvertices = polygon.vertices.map(vertice => vec3$1.snap(vec3$1.create(), vertice, epsilon)); // only retain unique vertices

    var newvertices = [];

    for (var i = 0; i < snapvertices.length; i++) {
      var j = (i + 1) % snapvertices.length;
      if (!vec3$1.equals(snapvertices[i], snapvertices[j])) newvertices.push(snapvertices[i]);
    }

    var newpolygon = poly3.create(newvertices);
    if (polygon.color) newpolygon.color = polygon.color;
    return newpolygon;
  }); // snap can produce polygons with zero (0) area, remove those

  var epsilonArea = epsilon * epsilon * Math.sqrt(3) / 4;
  newpolygons = newpolygons.filter(polygon => isValidPoly3(epsilonArea, polygon));
  return newpolygons;
};

var snapPolygons_1 = snapPolygons;

var createEdges = polygon => {
  var points = poly3.toPoints(polygon);
  var edges = [];

  for (var i = 0; i < points.length; i++) {
    var j = (i + 1) % points.length;
    var edge = {
      v1: points[i],
      v2: points[j]
    };
    edges.push(edge);
  } // link the edges together


  for (var _i20 = 0; _i20 < edges.length; _i20++) {
    var _j3 = (_i20 + 1) % points.length;

    edges[_i20].next = edges[_j3];
    edges[_j3].prev = edges[_i20];
  }

  return edges;
};

var insertEdge = (edges, edge) => {
  var key = "".concat(edge.v1, ":").concat(edge.v2);
  edges.set(key, edge);
};

var deleteEdge = (edges, edge) => {
  var key = "".concat(edge.v1, ":").concat(edge.v2);
  edges.delete(key);
};

var findOppositeEdge = (edges, edge) => {
  var key = "".concat(edge.v2, ":").concat(edge.v1); // NOTE: OPPOSITE OF INSERT KEY

  return edges.get(key);
}; // calculate the two adjoining angles between the opposing edges


var calculateAnglesBetween = (current, opposite, normal) => {
  var v0 = current.prev.v1;
  var v1 = current.prev.v2;
  var v2 = opposite.next.v2;
  var angle1 = calculateAngle(v0, v1, v2, normal);
  v0 = opposite.prev.v1;
  v1 = opposite.prev.v2;
  v2 = current.next.v2;
  var angle2 = calculateAngle(v0, v1, v2, normal);
  return [angle1, angle2];
};

var calculateAngle = (prevpoint, point, nextpoint, normal) => {
  var d0 = vec3$1.subtract(vec3$1.create(), point, prevpoint);
  var d1 = vec3$1.subtract(vec3$1.create(), nextpoint, point);
  vec3$1.cross(d0, d0, d1);
  return vec3$1.dot(d0, normal);
}; // create a polygon starting from the given edge (if possible)


var createPolygonAnd = edge => {
  var polygon;
  var points = [];

  while (edge.next) {
    var next = edge.next;
    points.push(edge.v1);
    edge.v1 = null;
    edge.v2 = null;
    edge.next = null;
    edge.prev = null;
    edge = next;
  }

  if (points.length > 0) polygon = poly3.fromPoints(points);
  return polygon;
};
/*
 * Merge COPLANAR polygons that share common edges.
 * @param {poly3[]} sourcepolygons - list of polygons
 * @returns {poly3[]} new set of polygons
 */


var mergeCoplanarPolygons = (epsilon, sourcepolygons) => {
  if (sourcepolygons.length < 2) return sourcepolygons;
  var normal = sourcepolygons[0].plane;
  var polygons = sourcepolygons.slice();
  var edgeList = new Map();

  while (polygons.length > 0) {
    // NOTE: the length of polygons WILL change
    var _polygon3 = polygons.shift();

    var _edges3 = createEdges(_polygon3);

    for (var i = 0; i < _edges3.length; i++) {
      var current = _edges3[i];
      var opposite = findOppositeEdge(edgeList, current);

      if (opposite) {
        var angles = calculateAnglesBetween(current, opposite, normal);

        if (angles[0] >= 0 && angles[1] >= 0) {
          var edge1 = opposite.next;
          var edge2 = current.next; // adjust the edges, linking together opposing polygons

          current.prev.next = opposite.next;
          current.next.prev = opposite.prev;
          opposite.prev.next = current.next;
          opposite.next.prev = current.prev; // remove the opposing edges

          current.v1 = null;
          current.v2 = null;
          current.next = null;
          current.prev = null;
          deleteEdge(edgeList, opposite);
          opposite.v1 = null;
          opposite.v2 = null;
          opposite.next = null;
          opposite.prev = null;

          var mergeEdges = (list, e1, e2) => {
            var newedge = {
              v1: e2.v1,
              v2: e1.v2,
              next: e1.next,
              prev: e2.prev
            }; // link in newedge

            e2.prev.next = newedge;
            e1.next.prev = newedge; // remove old edges

            deleteEdge(list, e1);
            e1.v1 = null;
            e1.v2 = null;
            e1.next = null;
            e1.prev = null;
            deleteEdge(list, e2);
            e2.v1 = null;
            e2.v2 = null;
            e2.next = null;
            e2.prev = null;
          };

          if (angles[0] === 0.0) {
            mergeEdges(edgeList, edge1, edge1.prev);
          }

          if (angles[1] === 0.0) {
            mergeEdges(edgeList, edge2, edge2.prev);
          }
        }
      } else {
        if (current.next) insertEdge(edgeList, current);
      }
    }
  } // build a set of polygons from the remaining edges


  var destpolygons = [];
  edgeList.forEach(edge => {
    var polygon = createPolygonAnd(edge);
    if (polygon) destpolygons.push(polygon);
  });
  return destpolygons;
}; // Normals are directional vectors with component values from 0 to 1.0, requiring specialized comparision
// This EPS is derived from a serieas of tests to determine the optimal precision for comparing coplanar polygons,
// as provided by the sphere primitive at high segmentation
// This EPS is for 64 bit Number values


var NEPS = 1e-13; // Compare two normals (unit vectors) for equality.

var aboutEqualNormals = (a, b) => Math.abs(a[0] - b[0]) <= NEPS && Math.abs(a[1] - b[1]) <= NEPS && Math.abs(a[2] - b[2]) <= NEPS;

var coplanar = (plane1, plane2) => {
  // expect the same distance from the origin, within tolerance
  if (Math.abs(plane1[3] - plane2[3]) < 0.00000015) {
    return aboutEqualNormals(plane1, plane2);
  }

  return false;
};

var mergePolygons = (epsilon, polygons) => {
  var polygonsPerPlane = []; // elements: [plane, [poly3...]]

  polygons.forEach(polygon => {
    var mapping = polygonsPerPlane.find(element => coplanar(element[0], poly3.plane(polygon)));

    if (mapping) {
      var _polygons3 = mapping[1];

      _polygons3.push(polygon);
    } else {
      polygonsPerPlane.push([poly3.plane(polygon), [polygon]]);
    }
  });
  var destpolygons = [];
  polygonsPerPlane.forEach(mapping => {
    var sourcepolygons = mapping[1];
    var retesselayedpolygons = mergeCoplanarPolygons(epsilon, sourcepolygons);
    destpolygons = destpolygons.concat(retesselayedpolygons);
  });
  return destpolygons;
};

var mergePolygons_1 = mergePolygons;

var getTag = vertex => "".concat(vertex);

var addSide = (sidemap, vertextag2sidestart, vertextag2sideend, vertex0, vertex1, polygonindex) => {
  var starttag = getTag(vertex0);
  var endtag = getTag(vertex1);
  var newsidetag = "".concat(starttag, "/").concat(endtag);
  var reversesidetag = "".concat(endtag, "/").concat(starttag);

  if (sidemap.has(reversesidetag)) {
    // remove the opposing side from mappings
    deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, vertex1, vertex0, null);
    return null;
  } // add the side to the mappings


  var newsideobj = {
    vertex0: vertex0,
    vertex1: vertex1,
    polygonindex: polygonindex
  };

  if (!sidemap.has(newsidetag)) {
    sidemap.set(newsidetag, [newsideobj]);
  } else {
    sidemap.get(newsidetag).push(newsideobj);
  }

  if (starttag in vertextag2sidestart) {
    vertextag2sidestart[starttag].push(newsidetag);
  } else {
    vertextag2sidestart[starttag] = [newsidetag];
  }

  if (endtag in vertextag2sideend) {
    vertextag2sideend[endtag].push(newsidetag);
  } else {
    vertextag2sideend[endtag] = [newsidetag];
  }

  return newsidetag;
};

var deleteSide = (sidemap, vertextag2sidestart, vertextag2sideend, vertex0, vertex1, polygonindex) => {
  var starttag = getTag(vertex0);
  var endtag = getTag(vertex1);
  var sidetag = "".concat(starttag, "/").concat(endtag);
  var idx = -1;
  var sideobjs = sidemap.get(sidetag);

  for (var i = 0; i < sideobjs.length; i++) {
    var sideobj = sideobjs[i];

    var _sidetag = getTag(sideobj.vertex0);

    if (_sidetag !== starttag) continue;
    _sidetag = getTag(sideobj.vertex1);
    if (_sidetag !== endtag) continue;

    if (polygonindex !== null) {
      if (sideobj.polygonindex !== polygonindex) continue;
    }

    idx = i;
    break;
  }

  sideobjs.splice(idx, 1);

  if (sideobjs.length === 0) {
    sidemap.delete(sidetag);
  } // adjust start and end lists


  idx = vertextag2sidestart[starttag].indexOf(sidetag);
  vertextag2sidestart[starttag].splice(idx, 1);

  if (vertextag2sidestart[starttag].length === 0) {
    delete vertextag2sidestart[starttag];
  }

  idx = vertextag2sideend[endtag].indexOf(sidetag);
  vertextag2sideend[endtag].splice(idx, 1);

  if (vertextag2sideend[endtag].length === 0) {
    delete vertextag2sideend[endtag];
  }
};
/*
  Suppose we have two polygons ACDB and EDGF:

   A-----B
   |     |
   |     E--F
   |     |  |
   C-----D--G

  Note that vertex E forms a T-junction on the side BD. In this case some STL slicers will complain
  that the solid is not watertight. This is because the watertightness check is done by checking if
  each side DE is matched by another side ED.

  This function will return a new solid with ACDB replaced by ACDEB

  Note that this can create polygons that are slightly non-convex (due to rounding errors). Therefore the result should
  not be used for further CSG operations!

  Note this function is meant to be used to preprocess geometries when triangulation is required, i.e. AMF, STL, etc.
  Do not use the results in other operations.
*/

/*
 * Insert missing vertices for T junctions, which creates polygons that can be triangulated.
 * @param {Array} polygons - the original polygons which may or may not have T junctions
 * @return original polygons (if no T junctions found) or new polygons with updated vertices
 */


var insertTjunctions = polygons => {
  // STEP 1 : build a map of 'unmatched' sides from the polygons
  // i.e. side AB in one polygon does not have a matching side BA in another polygon
  var sidemap = new Map();

  for (var polygonindex = 0; polygonindex < polygons.length; polygonindex++) {
    var _polygon4 = polygons[polygonindex];
    var numvertices = _polygon4.vertices.length;

    if (numvertices >= 3) {
      var vertex = _polygon4.vertices[0];
      var vertextag = getTag(vertex);

      for (var vertexindex = 0; vertexindex < numvertices; vertexindex++) {
        var nextvertexindex = vertexindex + 1;
        if (nextvertexindex === numvertices) nextvertexindex = 0;
        var nextvertex = _polygon4.vertices[nextvertexindex];
        var nextvertextag = getTag(nextvertex);
        var sidetag = "".concat(vertextag, "/").concat(nextvertextag);
        var reversesidetag = "".concat(nextvertextag, "/").concat(vertextag);

        if (sidemap.has(reversesidetag)) {
          // this side matches the same side in another polygon. Remove from sidemap
          // FIXME is this check necessary? there should only be ONE(1) opposing side
          // FIXME assert ?
          var ar = sidemap.get(reversesidetag);
          ar.splice(-1, 1);

          if (ar.length === 0) {
            sidemap.delete(reversesidetag);
          }
        } else {
          var sideobj = {
            vertex0: vertex,
            vertex1: nextvertex,
            polygonindex: polygonindex
          };

          if (!sidemap.has(sidetag)) {
            sidemap.set(sidetag, [sideobj]);
          } else {
            sidemap.get(sidetag).push(sideobj);
          }
        }

        vertex = nextvertex;
        vertextag = nextvertextag;
      }
    } else {
      console.warn('warning: invalid polygon found during insertTjunctions');
    }
  }

  if (sidemap.size > 0) {
    (function () {
      // console.log('insertTjunctions',sidemap.size)
      // STEP 2 : create a list of starting sides and ending sides
      var vertextag2sidestart = {};
      var vertextag2sideend = {};
      var sidestocheck = {};

      var _loop = function _loop(sideobjs, _sidetag2) {
        sidestocheck[_sidetag2] = true;
        sideobjs.forEach(sideobj => {
          var starttag = getTag(sideobj.vertex0);
          var endtag = getTag(sideobj.vertex1);

          if (starttag in vertextag2sidestart) {
            vertextag2sidestart[starttag].push(_sidetag2);
          } else {
            vertextag2sidestart[starttag] = [_sidetag2];
          }

          if (endtag in vertextag2sideend) {
            vertextag2sideend[endtag].push(_sidetag2);
          } else {
            vertextag2sideend[endtag] = [_sidetag2];
          }
        });
      };

      for (var [_sidetag2, sideobjs] of sidemap) {
        _loop(sideobjs, _sidetag2);
      } // STEP 3 : if sidemap is not empty


      var newpolygons = polygons.slice(0); // make a copy in order to replace polygons inline

      while (true) {
        if (sidemap.size === 0) break;

        for (var _sidetag3 of sidemap.keys()) {
          sidestocheck[_sidetag3] = true;
        }

        var donesomething = false;

        while (true) {
          var sidetags = Object.keys(sidestocheck);
          if (sidetags.length === 0) break; // sidestocheck is empty, we're done!

          var sidetagtocheck = sidetags[0];
          var donewithside = true;

          if (sidemap.has(sidetagtocheck)) {
            var _sideobjs = sidemap.get(sidetagtocheck);

            var _sideobj = _sideobjs[0];

            for (var directionindex = 0; directionindex < 2; directionindex++) {
              var startvertex = directionindex === 0 ? _sideobj.vertex0 : _sideobj.vertex1;
              var endvertex = directionindex === 0 ? _sideobj.vertex1 : _sideobj.vertex0;
              var startvertextag = getTag(startvertex);
              var endvertextag = getTag(endvertex);
              var matchingsides = [];

              if (directionindex === 0) {
                if (startvertextag in vertextag2sideend) {
                  matchingsides = vertextag2sideend[startvertextag];
                }
              } else {
                if (startvertextag in vertextag2sidestart) {
                  matchingsides = vertextag2sidestart[startvertextag];
                }
              }

              for (var matchingsideindex = 0; matchingsideindex < matchingsides.length; matchingsideindex++) {
                var matchingsidetag = matchingsides[matchingsideindex];
                var matchingside = sidemap.get(matchingsidetag)[0];
                var matchingsidestartvertex = directionindex === 0 ? matchingside.vertex0 : matchingside.vertex1;
                var matchingsidestartvertextag = getTag(matchingsidestartvertex);

                if (matchingsidestartvertextag === endvertextag) {
                  // matchingside cancels sidetagtocheck
                  deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, startvertex, endvertex, null);
                  deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, endvertex, startvertex, null);
                  donewithside = false;
                  directionindex = 2; // skip reverse direction check

                  donesomething = true;
                  break;
                } else {
                  var startpos = startvertex;
                  var endpos = endvertex;
                  var checkpos = matchingsidestartvertex;

                  var _direction = vec3$1.subtract(vec3$1.create(), checkpos, startpos); // Now we need to check if endpos is on the line startpos-checkpos:


                  var t = vec3$1.dot(vec3$1.subtract(vec3$1.create(), endpos, startpos), _direction) / vec3$1.dot(_direction, _direction);

                  if (t > 0 && t < 1) {
                    var closestpoint = vec3$1.scale(vec3$1.create(), _direction, t);
                    vec3$1.add(closestpoint, closestpoint, startpos);
                    var distancesquared = vec3$1.squaredDistance(closestpoint, endpos);

                    if (distancesquared < constants.EPS * constants.EPS) {
                      // Yes it's a t-junction! We need to split matchingside in two:
                      var _polygonindex3 = matchingside.polygonindex;
                      var _polygon5 = newpolygons[_polygonindex3]; // find the index of startvertextag in polygon:

                      var insertionvertextag = getTag(matchingside.vertex1);
                      var insertionvertextagindex = -1;

                      for (var i = 0; i < _polygon5.vertices.length; i++) {
                        if (getTag(_polygon5.vertices[i]) === insertionvertextag) {
                          insertionvertextagindex = i;
                          break;
                        }
                      }

                      var newvertices = _polygon5.vertices.slice(0);

                      newvertices.splice(insertionvertextagindex, 0, endvertex);
                      var newpolygon = poly3.fromPoints(newvertices);
                      newpolygons[_polygonindex3] = newpolygon; // remove the original sides from our maps

                      deleteSide(sidemap, vertextag2sidestart, vertextag2sideend, matchingside.vertex0, matchingside.vertex1, _polygonindex3);
                      var newsidetag1 = addSide(sidemap, vertextag2sidestart, vertextag2sideend, matchingside.vertex0, endvertex, _polygonindex3);
                      var newsidetag2 = addSide(sidemap, vertextag2sidestart, vertextag2sideend, endvertex, matchingside.vertex1, _polygonindex3);
                      if (newsidetag1 !== null) sidestocheck[newsidetag1] = true;
                      if (newsidetag2 !== null) sidestocheck[newsidetag2] = true;
                      donewithside = false;
                      directionindex = 2; // skip reverse direction check

                      donesomething = true;
                      break;
                    } // if(distancesquared < 1e-10)

                  } // if( (t > 0) && (t < 1) )

                } // if(endingstidestartvertextag === endvertextag)

              } // for matchingsideindex

            } // for directionindex

          } // if(sidetagtocheck in sidemap)


          if (donewithside) {
            delete sidestocheck[sidetagtocheck];
          }
        }

        if (!donesomething) break;
      }

      polygons = newpolygons;
    })();
  }

  sidemap.clear();
  return polygons;
};

var insertTjunctions_1 = insertTjunctions;

var triangulatePolygon = (epsilon, polygon, triangles) => {
  var nv = polygon.vertices.length;

  if (nv > 3) {
    if (nv > 4) {
      // split the polygon using a midpoint
      var midpoint = [0, 0, 0];
      polygon.vertices.forEach(vertice => vec3$1.add(midpoint, midpoint, vertice));
      vec3$1.snap(midpoint, vec3$1.divide(midpoint, midpoint, [nv, nv, nv]), epsilon);

      for (var i = 0; i < nv; i++) {
        var poly = poly3.fromPoints([midpoint, polygon.vertices[i], polygon.vertices[(i + 1) % nv]]);
        if (polygon.color) poly.color = polygon.color;
        triangles.push(poly);
      }

      return;
    } // exactly 4 vertices, use simple triangulation


    var poly0 = poly3.fromPoints([polygon.vertices[0], polygon.vertices[1], polygon.vertices[2]]);
    var poly1 = poly3.fromPoints([polygon.vertices[0], polygon.vertices[2], polygon.vertices[3]]);

    if (polygon.color) {
      poly0.color = polygon.color;
      poly1.color = polygon.color;
    }

    triangles.push(poly0, poly1);
    return;
  } // exactly 3 vertices, so return the original


  triangles.push(polygon);
};
/*
 * Convert the given polygons into a list of triangles (polygons with 3 vertices).
 * NOTE: this is possible because poly3 is CONVEX by definition
 */


var triangulatePolygons = (epsilon, polygons) => {
  var triangles = [];
  polygons.forEach(polygon => {
    triangulatePolygon(epsilon, polygon, triangles);
  });
  return triangles;
};

var triangulatePolygons_1 = triangulatePolygons;
/*
 * Add a unique edge to the given list of edges.
 * Each edge has a list of associated polygons.
 * Edges with two polygons are complete, while edges with one polygon are open, i.e hole or t-junction..
 */

var addEdge = (edges, edge, polygon) => {
  var ei = edges.findIndex(element => {
    if (element) {
      if (vec3$1.equals(element[0], edge[0]) && vec3$1.equals(element[1], edge[1])) return true;
      if (vec3$1.equals(element[0], edge[1]) && vec3$1.equals(element[1], edge[0])) return true;
    }

    return false;
  });

  if (ei >= 0) {
    edge = edges[ei];
    edge.polygons.push(polygon);
  } else {
    edge.polygons = [polygon];
    edges.push(edge);
  }
};
/*
 * Remove the edge from the given list of edges.
 */


var removeEdge = (edges, edge) => {
  var ei = edges.findIndex(element => {
    if (element) {
      if (vec3$1.equals(element[0], edge[0]) && vec3$1.equals(element[1], edge[1])) return true;
      if (vec3$1.equals(element[0], edge[1]) && vec3$1.equals(element[1], edge[0])) return true;
    }

    return false;
  });

  if (ei >= 0) {
    edges[ei].polygons = [];
    edges[ei] = null;
  }
};
/*
 * Add all edges of the polygon to the given list of edges.
 */


var addPolygon$1 = (edges, polygon) => {
  var vertices = polygon.vertices;
  var nv = vertices.length;
  var edge = [vertices[nv - 1], vertices[0]];
  addEdge(edges, edge, polygon);

  for (var i = 0; i < nv - 1; i++) {
    edge = [vertices[i], vertices[i + 1]];
    addEdge(edges, edge, polygon);
  }
};
/*
 * Remove all polygons associated with the old edge from the given list of edges.
 */


var removePolygons$1 = (edges, oldedge) => {
  // console.log('removePolygons',oldedge)
  var polygons = oldedge.polygons;
  polygons.forEach(polygon => {
    var vertices = polygon.vertices;
    var nv = vertices.length;
    var edge = [vertices[nv - 1], vertices[0]];
    removeEdge(edges, edge);

    for (var i = 0; i < nv - 1; i++) {
      edge = [vertices[i], vertices[i + 1]];
      removeEdge(edges, edge);
    }
  });
};
/*
 * Split the polygon, ensuring one polygon includes the open edge.
 */


var splitPolygon = (openedge, polygon, eps) => {
  // console.log('splitPolygon',openedge,polygon)
  var vertices = polygon.vertices;
  var i = vertices.findIndex(point => almostEquals(eps, point, openedge[0]));
  var polygon1 = poly3.fromPoints([vertices[(i + 0) % 3], vertices[(i + 1) % 3], openedge[1]]);
  var polygon2 = poly3.fromPoints([openedge[1], vertices[(i + 1) % 3], vertices[(i + 2) % 3]]);

  if (polygon.color) {
    polygon1.color = polygon.color;
    polygon2.color = polygon.color;
  } // console.log('polygon1',polygon1)
  // console.log('polygon2',polygon2)


  return [polygon1, polygon2];
};
/*
 * TBD This should be part of vec3.
 */


var almostEquals = (eps, v1, v2) => {
  return Math.abs(v1[0] - v2[0]) <= eps && Math.abs(v1[1] - v2[1]) <= eps && Math.abs(v1[2] - v2[2]) <= eps;
};

var enclosedEdge = (openedge, edge, eps) => {
  if (openedge.distance < edge.distance) {
    // only look for opposing edges
    if (vec3$1.equals(openedge[0], edge[1])) {
      // only opposing open edges enclosed by the edge
      var distanceE0O0 = vec3$1.squaredDistance(openedge[0], edge[0]);
      var distanceE0O1 = vec3$1.squaredDistance(openedge[1], edge[0]);
      var distanceE1O0 = vec3$1.squaredDistance(openedge[0], edge[1]);
      var distanceE1O1 = vec3$1.squaredDistance(openedge[1], edge[1]);

      if (distanceE0O0 <= edge.distance && distanceE0O1 < edge.distance && distanceE1O0 < edge.distance && distanceE1O1 < edge.distance) {
        // only look for paralell open edges
        var line3d = line3.fromPoints(edge[0], edge[1]);
        var closest0 = vec3$1.snap(vec3$1.create(), eps, line3.closestPoint(openedge[0], line3d));
        var closest1 = vec3$1.snap(vec3$1.create(), eps, line3.closestPoint(openedge[1], line3d));

        if (almostEquals(eps, closest0, openedge[0]) && almostEquals(eps, closest1, openedge[1])) {
          return true;
        }
      }
    }
  }

  return false;
};
/*
 * Split the edge if posssible from the list of open edges.
 * Return a list of new polygons, or null if not possible
 */


var splitEdge$1 = (openedges, edge, eps) => {
  // console.log('splitEdge',edge)
  for (var i = 0; i < openedges.length; i++) {
    var openedge = openedges[i];

    if (openedge) {
      if (enclosedEdge(openedge, edge, eps)) {
        // spit the polygon associated with the edge
        var _polygon6 = edge.polygons[0];
        var newpolygons = splitPolygon(openedge, _polygon6, eps);
        return newpolygons;
      }
    }
  }

  return null;
};
/*
 * Cull a list of open edges (see above) from the list of edges.
 */


var cullOpenEdges$1 = edges => {
  var openedges = [];
  edges.forEach((edge, i) => {
    var polygons = edge.polygons;

    if (polygons.length === 1) {
      // console.log('open edge: ',edge[0],'<-->',edge[1])
      edge.distance = vec3$1.squaredDistance(edge[0], edge[1]);
      openedges.push(edge);
    }
  }); // console.log('open edges:',openedges.length)
  // console.log('**********OPEN*********')
  // console.log(openedges)
  // console.log('**********OPEN*********')

  return openedges;
};
/*
 * Convert the list of edges into a list of polygons.
 */


var edgesToPolygons$1 = edges => {
  var polygons = [];
  edges.forEach(edge => {
    if (edge && edge.polygons) {
      edge.polygons.forEach(polygon => {
        if (polygon.visited) return;
        polygon.visited = true;
        polygons.push(polygon);
      });
    }
  });
  return polygons;
};
/*
 * Convert the given list of polygons to a list of edges.
 */


var polygonsToEdges$1 = polygons => {
  var edges = [];
  polygons.forEach(polygon => {
    addPolygon$1(edges, polygon);
  });
  return edges;
};

var edges = {
  polygonsToEdges: polygonsToEdges$1,
  edgesToPolygons: edgesToPolygons$1,
  cullOpenEdges: cullOpenEdges$1,
  splitEdge: splitEdge$1,
  removePolygons: removePolygons$1,
  addPolygon: addPolygon$1
};
var {
  polygonsToEdges,
  edgesToPolygons,
  cullOpenEdges,
  splitEdge,
  removePolygons,
  addPolygon
} = edges;
/*
 */

var repairTjunctions = (epsilon, polygons) => {
  var edges = polygonsToEdges(polygons);
  var openedges = cullOpenEdges(edges);
  if (openedges.length === 0) return polygons; // split open edges until no longer possible

  var splitting = true;

  while (splitting) {
    var splitcount = 0;

    for (var i = 0; i < openedges.length; i++) {
      var edge = openedges[i];

      if (edge && edge.polygons && edge.polygons.length === 1) {
        var newpolygons = splitEdge(openedges, edge, epsilon);

        if (newpolygons) {
          openedges[i] = null;
          addPolygon(openedges, newpolygons[0]);
          addPolygon(openedges, newpolygons[1]); // adjust the master list as well

          removePolygons(edges, edge); // add edges for each new polygon

          addPolygon(edges, newpolygons[0]);
          addPolygon(edges, newpolygons[1]);
          splitcount++;
          break; // start again
        }
      }
    }

    splitting = splitcount > 0;
  }

  openedges = openedges.filter(edge => edge && edge.polygons && edge.polygons.length === 1);
  if (openedges.length > 0) console.warn('Repair of all T-junctions failed:', openedges.length); // rebuild the list of polygons from the edges

  polygons = edgesToPolygons(edges);
  return polygons;
};

var repairTjunctions_1 = repairTjunctions;
/*
 */

var generalizePath2 = (options, geometry) => {
  return geometry;
};
/*
 */


var generalizeGeom2 = (options, geometry) => {
  return geometry;
};
/*
 */


var generalizeGeom3 = (options, geometry) => {
  var defaults = {
    snap: false,
    simplify: false,
    triangulate: false,
    repair: false
  };
  var {
    snap,
    simplify,
    triangulate,
    repair
  } = Object.assign({}, defaults, options);
  var epsilon = measureEpsilon_1(geometry);
  var polygons = geom3$2.toPolygons(geometry); // snap the given geometry if requested

  if (snap) {
    polygons = snapPolygons_1(epsilon, polygons);
  } // simplify the polygons if requested


  if (simplify) {
    // TODO implement some mesh decimations
    polygons = mergePolygons_1(epsilon, polygons);
  } // triangulate the polygons if requested


  if (triangulate) {
    polygons = insertTjunctions_1(polygons);
    polygons = triangulatePolygons_1(epsilon, polygons);
  } // repair the polygons (possibly triangles) if requested


  if (repair) {
    // fix T junctions
    polygons = repairTjunctions_1(epsilon, polygons); // TODO fill holes
  } // FIXME replace with geom3.cloneShallow() when available


  var clone = Object.assign({}, geometry);
  clone.polygons = polygons;
  return clone;
};
/**
 * Apply various modifications in proper order to produce a generalized geometry.
 * @param {Object} options - options for modifications
 * @param {Boolean} [options.snap=false] the geometries should be snapped to epsilons
 * @param {Boolean} [options.simplify=false] the geometries should be simplified
 * @param {Boolean} [options.triangulate=false] the geometries should be triangulated
 * @param {Boolean} [options.repair=false] the geometries should be repaired
 * @return {Object|Array} the modified geometry, or a list of modified geometries
 * @alias module:modeling/modifiers.generalize
 */


var generalize = function generalize(options) {
  for (var _len53 = arguments.length, geometries = new Array(_len53 > 1 ? _len53 - 1 : 0), _key53 = 1; _key53 < _len53; _key53++) {
    geometries[_key53 - 1] = arguments[_key53];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  var results = geometries.map((geometry, i) => {
    if (path2$2.isA(geometry)) return generalizePath2(options, geometry);
    if (geom2$2.isA(geometry)) return generalizeGeom2(options, geometry);
    if (geom3$2.isA(geometry)) return generalizeGeom3(options, geometry);
    throw new Error('invalid geometry');
  });
  return results.length === 1 ? results[0] : results;
};

var generalize_1 = generalize;

var snapPath2 = geometry => {
  var epsilon = measureEpsilon_1(geometry);
  var points = path2$2.toPoints(geometry);
  var newpoints = points.map(point => vec2.snap(vec2.create(), point, epsilon)); // snap can produce duplicate points, remove those

  return path2$2.create(newpoints);
};

var snapGeom2 = geometry => {
  var epsilon = measureEpsilon_1(geometry);
  var sides = geom2$2.toSides(geometry);
  var newsides = sides.map(side => [vec2.snap(vec2.create(), side[0], epsilon), vec2.snap(vec2.create(), side[1], epsilon)]); // snap can produce sides with zero (0) length, remove those

  newsides = newsides.filter(side => !vec2.equals(side[0], side[1]));
  return geom2$2.create(newsides);
};

var snapGeom3 = geometry => {
  var epsilon = measureEpsilon_1(geometry);
  var polygons = geom3$2.toPolygons(geometry);
  var newpolygons = snapPolygons_1(epsilon, polygons);
  return geom3$2.create(newpolygons);
};
/**
 * Snap the given geometries to the overall precision (epsilon) of the geometry.
 * @see measurements.measureEpsilon()
 * @param {...Object} geometries - the geometries to snap
 * @return {Object|Array} the snapped geometry, or a list of snapped geometries
 * @alias module:modeling/modifiers.snap
 */


var snap = function snap() {
  for (var _len54 = arguments.length, geometries = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
    geometries[_key54] = arguments[_key54];
  }

  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  var results = geometries.map(geometry => {
    if (path2$2.isA(geometry)) return snapPath2(geometry);
    if (geom2$2.isA(geometry)) return snapGeom2(geometry);
    if (geom3$2.isA(geometry)) return snapGeom3(geometry);
    return geometry;
  });
  return results.length === 1 ? results[0] : results;
};

var snap_1 = snap;
/**
 * All shapes (primitives or the results of operations) can be modified to correct issues, etc.
 * In all cases, these functions returns the results, and never changes the original geometry.
 * @module modeling/modifiers
 * @example
 * const { snap } = require('@jscad/modeling').modifiers
 */

var modifiers$1 = {
  generalize: generalize_1,
  snap: snap_1
};
/**
 * Build an array of at minimum a specified length from an existing array and a padding value. IF the array is already larger than the target length, it will not be shortened.
 * @param {Array} anArray - the source array to copy into the result.
 * @param {*} padding - the value to add to the new array to reach the desired length.
 * @param {Number} targetLength - The desired length of the return array.
 * @returns {Array} an array of at least 'targetLength" length
 * @alias module:modeling/utils.padArrayToLength
 */

var padArrayToLength = (anArray, padding, targetLength) => {
  anArray = anArray.slice();

  while (anArray.length < targetLength) {
    anArray.push(padding);
  }

  return anArray;
};

var padArrayToLength_1 = padArrayToLength;
var {
  translate: translate$2
} = translate_1;

var validateOptions = options => {
  if (!Array.isArray(options.modes) || options.modes.length > 3) throw new Error('align(): modes must be an array of length <= 3');
  options.modes = padArrayToLength_1(options.modes, 'none', 3);
  if (options.modes.filter(mode => ['center', 'max', 'min', 'none'].includes(mode)).length !== 3) throw new Error('align(): all modes must be one of "center", "max" or "min"');
  if (!Array.isArray(options.relativeTo) || options.relativeTo.length > 3) throw new Error('align(): relativeTo must be an array of length <= 3');
  options.relativeTo = padArrayToLength_1(options.relativeTo, 0, 3);
  if (options.relativeTo.filter(alignVal => Number.isFinite(alignVal) || alignVal == null).length !== 3) throw new Error('align(): all relativeTo values must be a number, or null.');
  if (typeof options.grouped !== 'boolean') throw new Error('align(): grouped must be a boolean value.');
  return options;
};

var populateRelativeToFromBounds = (relativeTo, modes, bounds) => {
  for (var i = 0; i < 3; i++) {
    if (relativeTo[i] == null) {
      if (modes[i] === 'center') {
        relativeTo[i] = (bounds[0][i] + bounds[1][i]) / 2;
      } else if (modes[i] === 'max') {
        relativeTo[i] = bounds[1][i];
      } else if (modes[i] === 'min') {
        relativeTo[i] = bounds[0][i];
      }
    }
  }

  return relativeTo;
};

var alignGeometries = (geometry, modes, relativeTo) => {
  var bounds = measureAggregateBoundingBox_1(geometry);
  var translation = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    if (modes[i] === 'center') {
      translation[i] = relativeTo[i] - (bounds[0][i] + bounds[1][i]) / 2;
    } else if (modes[i] === 'max') {
      translation[i] = relativeTo[i] - bounds[1][i];
    } else if (modes[i] === 'min') {
      translation[i] = relativeTo[i] - bounds[0][i];
    }
  }

  return translate$2(translation, geometry);
};
/**
 * Align the boundaries of the given geometries using the given options.
 * @param {Object} options - options for aligning
 * @param {Array} [options.modes = ['center', 'center', 'min']] - the point on the geometries to align to for each axis. Valid options are "center", "max", "min", and "none".
 * @param {Array} [options.relativeTo = [0,0,0]] - The point one each axis on which to align the geometries upon.  If the value is null, then the corresponding value from the group's bounding box is used.
 * @param {Boolean} [options.grouped = false] - if true, transform all geometries by the same amount, maintaining the relative positions to each other.
 * @param {...Object} geometries - the geometries to align
 * @return {Object|Array} the aligned geometry, or a list of aligned geometries
 * @alias module:modeling/transforms.align
 *
 * @example
 * let alignedGeometries = align({modes: ['min', 'center', 'none'], relativeTo: [10, null, 10], grouped: true }, geometries)
 */


var align = function align(options) {
  for (var _len55 = arguments.length, geometries = new Array(_len55 > 1 ? _len55 - 1 : 0), _key55 = 1; _key55 < _len55; _key55++) {
    geometries[_key55 - 1] = arguments[_key55];
  }

  var defaults = {
    modes: ['center', 'center', 'min'],
    relativeTo: [0, 0, 0],
    grouped: false
  };
  options = Object.assign({}, defaults, options);
  options = validateOptions(options);
  var {
    modes,
    relativeTo,
    grouped
  } = options;
  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('align(): No geometries were provided to act upon');

  if (relativeTo.filter(val => val == null).length) {
    var bounds = measureAggregateBoundingBox_1(geometries);
    relativeTo = populateRelativeToFromBounds(relativeTo, modes, bounds);
  }

  if (grouped) {
    geometries = alignGeometries(geometries, modes, relativeTo);
  } else {
    geometries = geometries.map(geometry => alignGeometries(geometry, modes, relativeTo));
  }

  return geometries.length === 1 ? geometries[0] : geometries;
};

var align_1 = align;
var {
  translate: translate$1
} = translate_1;

var centerGeometry = (options, object) => {
  var defaults = {
    axes: [true, true, true],
    relativeTo: [0, 0, 0]
  };
  var {
    axes,
    relativeTo
  } = Object.assign({}, defaults, options);
  var bounds = measureBoundingBox_1(object);
  var offset = [0, 0, 0];
  if (axes[0]) offset[0] = relativeTo[0] - (bounds[0][0] + (bounds[1][0] - bounds[0][0]) / 2);
  if (axes[1]) offset[1] = relativeTo[1] - (bounds[0][1] + (bounds[1][1] - bounds[0][1]) / 2);
  if (axes[2]) offset[2] = relativeTo[2] - (bounds[0][2] + (bounds[1][2] - bounds[0][2]) / 2);
  return translate$1(offset, object);
};
/**
 * Center the given geometries using the given options.
 * @param {Object} options - options for centering
 * @param {Array} [options.axes=[true,true,true]] - axis of which to center, true or false
 * @param {Array} [options.relativeTo=[0,0,0]] - relative point of which to center the geometries
 * @param {...Object} geometries - the geometries to center
 * @return {Object|Array} the centered geometry, or a list of centered geometries
 * @alias module:modeling/transforms.center
 *
 * @example
 * let myshape = center({axes: [true,false,false]}, sphere()) // center about the X axis
 */


var center = function center(options) {
  for (var _len56 = arguments.length, geometries = new Array(_len56 > 1 ? _len56 - 1 : 0), _key56 = 1; _key56 < _len56; _key56++) {
    geometries[_key56 - 1] = arguments[_key56];
  }

  var defaults = {
    axes: [true, true, true],
    relativeTo: [0, 0, 0] // TODO : Add addition 'methods' of centering; midpoint, centeriod

  };
  var {
    axes,
    relativeTo
  } = Object.assign({}, defaults, options);
  geometries = flatten_1$1(geometries);
  if (geometries.length === 0) throw new Error('wrong number of arguments');
  if (relativeTo.length !== 3) throw new Error('relativeTo must be an array of length 3');
  options = {
    axes,
    relativeTo
  };
  var results = geometries.map(object => {
    if (path2$2.isA(object)) return centerGeometry(options, object);
    if (geom2$2.isA(object)) return centerGeometry(options, object);
    if (geom3$2.isA(object)) return centerGeometry(options, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};
/**
 * Center the given geometries about the X axis.
 * @param {...Object} geometries - the geometries to center
 * @return {Object|Array} the centered geometry, or a list of centered geometry
 * @alias module:modeling/transforms.centerX
 */


var centerX = function centerX() {
  for (var _len57 = arguments.length, objects = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
    objects[_key57] = arguments[_key57];
  }

  return center({
    axes: [true, false, false]
  }, objects);
};
/**
 * Center the given geometries about the Y axis.
 * @param {...Object} geometries - the geometries to center
 * @return {Object|Array} the centered geometry, or a list of centered geometry
 * @alias module:modeling/transforms.centerY
 */


var centerY = function centerY() {
  for (var _len58 = arguments.length, objects = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
    objects[_key58] = arguments[_key58];
  }

  return center({
    axes: [false, true, false]
  }, objects);
};
/**
 * Center the given geometries about the Z axis.
 * @param {...Object} geometries - the geometries to center
 * @return {Object|Array} the centered geometry, or a list of centered geometry
 * @alias module:modeling/transforms.centerZ
 */


var centerZ = function centerZ() {
  for (var _len59 = arguments.length, objects = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
    objects[_key59] = arguments[_key59];
  }

  return center({
    axes: [false, false, true]
  }, objects);
};

var center_1 = {
  center,
  centerX,
  centerY,
  centerZ
};
/**
 * Scale the given geometries using the given options.
 * @param {Array} factors - X, Y, Z factors by which to scale the geometries
 * @param {...Object} geometries - the geometries to scale
 * @return {Object|Array} the scaled geometry, or a list of scaled geometries
 * @alias module:modeling/transforms.scale
 *
 * @example
 * let myshape = scale([5, 0, 10], sphere())
 */

var scale = function scale(factors) {
  for (var _len60 = arguments.length, objects = new Array(_len60 > 1 ? _len60 - 1 : 0), _key60 = 1; _key60 < _len60; _key60++) {
    objects[_key60 - 1] = arguments[_key60];
  }

  if (!Array.isArray(factors)) throw new Error('factors must be an array');
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments'); // adjust the factors if necessary

  factors = factors.slice(); // don't modify the original

  while (factors.length < 3) {
    factors.push(1);
  }

  if (factors[0] <= 0 || factors[1] <= 0 || factors[2] <= 0) throw new Error('factors must be positive');
  var matrix = mat4.fromScaling(mat4.create(), factors);
  var results = objects.map(object => {
    if (path2$2.isA(object)) return path2$2.transform(matrix, object);
    if (geom2$2.isA(object)) return geom2$2.transform(matrix, object);
    if (geom3$2.isA(object)) return geom3$2.transform(matrix, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};
/**
 * Scale the given geometries about the X axis using the given options.
 * @param {Number} factor - X factor by which to scale the geometries
 * @param {...Object} geometries - the geometries to scale
 * @return {Object|Array} the scaled geometry, or a list of scaled geometries
 * @alias module:modeling/transforms.scaleX
 */


var scaleX = function scaleX(offset) {
  for (var _len61 = arguments.length, objects = new Array(_len61 > 1 ? _len61 - 1 : 0), _key61 = 1; _key61 < _len61; _key61++) {
    objects[_key61 - 1] = arguments[_key61];
  }

  return scale([offset, 1, 1], objects);
};
/**
 * Scale the given geometries about the Y axis using the given options.
 * @param {Number} factor - Y factor by which to scale the geometries
 * @param {...Object} geometries - the geometries to scale
 * @return {Object|Array} the scaled geometry, or a list of scaled geometries
 * @alias module:modeling/transforms.scaleY
 */


var scaleY = function scaleY(offset) {
  for (var _len62 = arguments.length, objects = new Array(_len62 > 1 ? _len62 - 1 : 0), _key62 = 1; _key62 < _len62; _key62++) {
    objects[_key62 - 1] = arguments[_key62];
  }

  return scale([1, offset, 1], objects);
};
/**
 * Scale the given geometries about the Z axis using the given options.
 * @param {Number} factor - Z factor by which to scale the geometries
 * @param {...Object} geometries - the geometries to scale
 * @return {Object|Array} the scaled geometry, or a list of scaled geometries
 * @alias module:modeling/transforms.scaleZ
 */


var scaleZ = function scaleZ(offset) {
  for (var _len63 = arguments.length, objects = new Array(_len63 > 1 ? _len63 - 1 : 0), _key63 = 1; _key63 < _len63; _key63++) {
    objects[_key63 - 1] = arguments[_key63];
  }

  return scale([1, 1, offset], objects);
};

var scale_1 = {
  scale,
  scaleX,
  scaleY,
  scaleZ
};
/**
 * Transform the given geometries using the given matrix.
 * @param {mat4} matrix - a transformation matrix
 * @param {...Object} geometries - the geometries to transform
 * @return {Object|Array} the transformed geometry, or a list of transformed geometries
 * @alias module:modeling/transforms.transform
 *
 * @example
 * const newsphere = transform(mat4.rotateX(Math.PI/4), sphere())
 */

var transform = function transform(matrix) {
  for (var _len64 = arguments.length, objects = new Array(_len64 > 1 ? _len64 - 1 : 0), _key64 = 1; _key64 < _len64; _key64++) {
    objects[_key64 - 1] = arguments[_key64];
  }

  // TODO how to check that the matrix is REAL?
  objects = flatten_1$1(objects);
  if (objects.length === 0) throw new Error('wrong number of arguments');
  var results = objects.map(object => {
    if (path2$2.isA(object)) return path2$2.transform(matrix, object);
    if (geom2$2.isA(object)) return geom2$2.transform(matrix, object);
    if (geom3$2.isA(object)) return geom3$2.transform(matrix, object);
    return object;
  });
  return results.length === 1 ? results[0] : results;
};

var transform_1 = transform;
/**
 * All shapes (primitives or the results of operations) can be transformed, such as scaled or rotated.
 * In all cases, the function returns the results, and never changes the original shapes.
 * @module modeling/transforms
 * @example
 * const { center, rotateX, translate } = require('@jscad/modeling').transforms
 */

var transforms = {
  align: align_1,
  center: center_1.center,
  centerX: center_1.centerX,
  centerY: center_1.centerY,
  centerZ: center_1.centerZ,
  mirror: mirror_1.mirror,
  mirrorX: mirror_1.mirrorX,
  mirrorY: mirror_1.mirrorY,
  mirrorZ: mirror_1.mirrorZ,
  rotate: rotate_1.rotate,
  rotateX: rotate_1.rotateX,
  rotateY: rotate_1.rotateY,
  rotateZ: rotate_1.rotateZ,
  scale: scale_1.scale,
  scaleX: scale_1.scaleX,
  scaleY: scale_1.scaleY,
  scaleZ: scale_1.scaleZ,
  transform: transform_1,
  translate: translate_1.translate,
  translateX: translate_1.translateX,
  translateY: translate_1.translateY,
  translateZ: translate_1.translateZ
};
var src$1 = {
  colors: colors,
  curves: curves,
  geometries: geometries$3,
  maths: maths,
  measurements: measurements,
  primitives: primitives,
  text: text,
  utils: utils,
  booleans: booleans,
  expansions: expansions,
  extrusions: extrusions,
  hulls: hulls,
  modifiers: modifiers$1,
  transforms: transforms
};
/**
 * Flatten the given array into a single array of elements.
 * The given array can be composed of multiple depths of objects and or arrays.
 * @param {Array} array - array to flatten
 * @returns {Array} a flat array with a single list of elements
 * @alias module:array-utils.flatten
 * @example
 * const flat = flatten([[1], [2, 3, [4, 5]], 6]) // returns [1, 2, 3, 4, 5, 6]
 */

var flatten$1 = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten$1(val)) : acc.concat(val), []);

var flatten_1 = flatten$1;
/**
 * Compare function for sorting arrays of numbers.
 * @param {Number} a - first number
 * @param {Number} b - second number
 * @return {Number} result of a - b
 * @alias module:array-utils.fnNumberSort
 * @example
 * const numbers = [2, 1, 4, 3, 6, 5, 8, 7, 9, 0]
 * const sorted = numbers.sort(fnNumberSort)
 */

var fnNumberSort = (a, b) => a - b;

var fnNumberSort_1 = fnNumberSort;
/**
 * Return the first element of the given array.
 * @param {*} array - anything
 * @returns {*} first element of the array, or undefined
 * @alias module:array-utils.head
 * @example
 * let element = head([1, 2])
 */

var head = array => {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  return array[0];
};

var head_1 = head;
/**
 * Insert the given element into the give array using the compareFunction.
 * @param {Array} array - array in which to insert
 * @param {*} element - element to insert into the array
 * @param {Function} compareFunction - a function that defines the sort order of elements
 * @alias module:modeling/utils.insertSorted
 * @example
 * const numbers = [1, 5]
 * const result = insertSorted(numbers, 3, fnNumberSort)
 */

var insertSorted = (array, element, compareFunction) => {
  var leftbound = 0;
  var rightbound = array.length;

  while (rightbound > leftbound) {
    var testindex = Math.floor((leftbound + rightbound) / 2);
    var testelement = array[testindex];
    var compareresult = compareFunction(element, testelement);

    if (compareresult > 0) {
      // element > testelement
      leftbound = testindex + 1;
    } else {
      rightbound = testindex;
    }
  }

  array.splice(leftbound, 0, element);
  return array;
};

var insertSorted_1 = insertSorted;
/**
 * Return the Nth element of the given array.
 * @param {*} array - anything
 * @param {Number} index - index of the element to return
 * @returns {*} Nth element of the array, or undefined
 * @alias module:array-utils.nth
 * @example
 * let value = nth([1], 2) // undefined
 * let value = nth([1, 2, 3, 4, 5], 3) // 4
 */

var nth = (array, index) => {
  if (!Array.isArray(array) || array.length < index) {
    return undefined;
  }

  return array[index];
};

var nth_1 = nth;
/**
 * Build an array of the given target length from an existing array and a padding value.
 * If the array is already larger than the target length, it will not be shortened.
 * @param {Array} anArray - the source array to copy into the result.
 * @param {*} padding - the value to add to the new array to reach the desired length.
 * @param {Number} targetLength - The desired length of the returned array.
 * @returns {Array} an array with at least 'target length" elements
 * @alias module:array-utils.padToLength
 * @example
 * const srcArray = [2, 3, 4]
 * const paddedArray = padToLength(srcArray, 0, 5)
 */

var padToLength = (anArray, padding, targetLength) => {
  anArray = anArray.slice();

  while (anArray.length < targetLength) {
    anArray.push(padding);
  }

  return anArray;
};

var padToLength_1 = padToLength;
/**
 * Convert the given array to an array if not already an array.
 * @param {*} array - anything
 * @returns {Array} an array
 * @alias module:array-utils.toArray
 * @example
 * const array = toArray(1) // [1]
 */

var toArray$1 = array => {
  if (Array.isArray(array)) return array;
  if (array === undefined || array === null) return [];
  return [array];
};

var toArray_1 = toArray$1;
/**
 * Utility functions for arrays.
 * @module array-utils
 * @example
 * const { flatten, head } = require('@jscad/array-utils')
 */

var src = {
  flatten: flatten_1,
  fnNumberSort: fnNumberSort_1,
  head: head_1,
  insertSorted: insertSorted_1,
  nth: nth_1,
  padToLength: padToLength_1,
  toArray: toArray_1
};
var {
  geometries: geometries$2
} = src$1; // see http://en.wikipedia.org/wiki/STL_%28file_format%29#Binary_STL
// objects must be an array of 3D geometries

var serializeBinary$1 = (objects, options) => {
  options.statusCallback && options.statusCallback({
    progress: 0
  }); // first check if the host is little-endian:

  var buffer = new ArrayBuffer(4);
  var int32buffer = new Int32Array(buffer, 0, 1);
  var int8buffer = new Int8Array(buffer, 0, 4);
  int32buffer[0] = 0x11223344;

  if (int8buffer[0] !== 0x44) {
    throw new Error('Binary STL output is currently only supported on little-endian (Intel) processors');
  }

  var numtriangles = 0;
  var numpolygons = 0;
  objects.forEach((object, i) => {
    var polygons = geometries$2.geom3.toPolygons(object);
    polygons.forEach(polygon => {
      var numvertices = polygon.vertices.length;
      var thisnumtriangles = numvertices >= 3 ? numvertices - 2 : 0;
      numtriangles += thisnumtriangles;
      numpolygons += 1;
    });
  });
  var headerarray = new Uint8Array(80);

  for (var i = 0; i < 80; i++) {
    headerarray[i] = 65;
  }

  var ar1 = new Uint32Array(1);
  ar1[0] = numtriangles; // write the triangles to allTrianglesBuffer:

  var allTrianglesBuffer = new ArrayBuffer(50 * numtriangles);
  var allTrianglesBufferAsInt8 = new Int8Array(allTrianglesBuffer); // a tricky problem is that a Float32Array must be aligned at 4-byte boundaries (at least in certain browsers)
  // while each triangle takes 50 bytes. Therefore we write each triangle to a temporary buffer, and copy that
  // into allTrianglesBuffer:

  var triangleBuffer = new ArrayBuffer(50);
  var triangleBufferAsInt8 = new Int8Array(triangleBuffer); // each triangle consists of 12 floats:

  var triangleFloat32array = new Float32Array(triangleBuffer, 0, 12); // and one uint16:

  var triangleUint16array = new Uint16Array(triangleBuffer, 48, 1);
  var byteoffset = 0;
  objects.forEach(object => {
    var polygons = geometries$2.geom3.toPolygons(object);
    polygons.forEach((polygon, index) => {
      var vertices = polygon.vertices;
      var numvertices = vertices.length;
      var plane = geometries$2.poly3.plane(polygon);

      for (var _i21 = 0; _i21 < numvertices - 2; _i21++) {
        triangleFloat32array[0] = plane[0];
        triangleFloat32array[1] = plane[1];
        triangleFloat32array[2] = plane[2];
        var arindex = 3;

        for (var v = 0; v < 3; v++) {
          var vv = v + (v > 0 ? _i21 : 0);
          var vertex = vertices[vv];
          triangleFloat32array[arindex++] = vertex[0];
          triangleFloat32array[arindex++] = vertex[1];
          triangleFloat32array[arindex++] = vertex[2];
        }

        triangleUint16array[0] = 0; // copy the triangle into allTrianglesBuffer:

        allTrianglesBufferAsInt8.set(triangleBufferAsInt8, byteoffset);
        byteoffset += 50;
      }

      options.statusCallback && options.statusCallback({
        progress: 100 * index / numpolygons
      });
    });
  });
  options.statusCallback && options.statusCallback({
    progress: 100
  });
  return [headerarray.buffer, ar1.buffer, allTrianglesBuffer]; // 'blobable array'
};

var CSGToStlb = {
  serializeBinary: serializeBinary$1
};
var {
  geometries: geometries$1
} = src$1; // objects must be an array of 3D geomertries (with polygons)

var serializeText$1 = (objects, options) => {
  options.statusCallback && options.statusCallback({
    progress: 0
  });
  var result = "solid JSCAD\n".concat(convertToStl(objects, options), "\nendsolid JSCAD\n");
  options.statusCallback && options.statusCallback({
    progress: 100
  });
  return [result];
};

var convertToStl = (objects, options) => {
  var result = [];
  objects.forEach((object, i) => {
    result.push(convertToFacets(object));
    options.statusCallback && options.statusCallback({
      progress: 100 * i / objects.length
    });
  });
  return result.join('\n');
};

var convertToFacets = (object, options) => {
  var result = [];
  var polygons = geometries$1.geom3.toPolygons(object);
  polygons.forEach((polygon, i) => {
    result.push(convertToFacet(polygon));
  });
  return result.join('\n');
};

var vector3DtoStlString = v => "".concat(v[0], " ").concat(v[1], " ").concat(v[2]);

var vertextoStlString = vertex => "vertex ".concat(vector3DtoStlString(vertex));

var convertToFacet = polygon => {
  var result = [];

  if (polygon.vertices.length >= 3) {
    // STL requires triangular polygons. If our polygon has more vertices, create multiple triangles:
    var firstVertexStl = vertextoStlString(polygon.vertices[0]);

    for (var i = 0; i < polygon.vertices.length - 2; i++) {
      var facet = "facet normal ".concat(vector3DtoStlString(geometries$1.poly3.plane(polygon)), "\nouter loop\n").concat(firstVertexStl, "\n").concat(vertextoStlString(polygon.vertices[i + 1]), "\n").concat(vertextoStlString(polygon.vertices[i + 2]), "\nendloop\nendfacet");
      result.push(facet);
    }
  }

  return result.join('\n');
};

var CSGToStla = {
  serializeText: serializeText$1
};
/*
JSCAD Geometry to STL Format Serialization

## License

Copyright (c) 2018-2019 JSCAD Organization https://github.com/jscad

All code released under MIT license

Notes:
1) geom2 conversion to:
     none
2) geom3 conversion to:
     STL mesh
3) path2 conversion to:
     none
*/

/**
 * Serializer of JSCAD geometries to STL mesh.
 * @module io/stl-serializer
 * @example
 * const { serializer, mimeType } = require('@jscad/stl-serializer')
 */

var {
  geometries,
  modifiers
} = src$1;
var {
  flatten,
  toArray
} = src;
var {
  serializeBinary
} = CSGToStlb;
var {
  serializeText
} = CSGToStla;
var mimeType = 'application/sla';
/**
 * Serialize the give objects to STL mesh.
 * @param {Object} options - options for serialization
 * @param {String} [options.binary='true'] - target format for data
 * @param {Function} [options.statusCallback] - call back function for progress ({ progress: 0-100 })
 * @param {...Object} objects - objects to serialize as STL
 * @returns {Array} serialized contents with one STL mesh (either string or binary data)
 * @alias module:io/stl-serializer.serialize
 * @example
 * const geometry = primitives.cube()
 * const stlData = serializer({binary: false}, geometry)
 */

var serialize = function serialize(options) {
  for (var _len65 = arguments.length, objects = new Array(_len65 > 1 ? _len65 - 1 : 0), _key65 = 1; _key65 < _len65; _key65++) {
    objects[_key65 - 1] = arguments[_key65];
  }

  var defaults = {
    binary: true,
    statusCallback: null
  };
  options = Object.assign({}, defaults, options);
  objects = flatten(objects); // convert only 3D geometries

  var objects3d = objects.filter(object => geometries.geom3.isA(object));
  if (objects3d.length === 0) throw new Error('only 3D geometries can be serialized to STL');
  if (objects.length !== objects3d.length) console.warn('some objects could not be serialized to STL'); // covert to triangles

  objects3d = toArray(modifiers.generalize({
    snap: true,
    triangulate: true
  }, objects3d));
  return options.binary ? serializeBinary(objects3d, options) : serializeText(objects3d, options);
};

var stlSerializer = {
  mimeType,
  serialize
};
var {
  cuboid,
  cylinder,
  roundedCuboid
} = src$1.primitives;
var {
  translate,
  rotateZ
} = src$1.transforms;
var {
  union,
  subtract
} = src$1.booleans;
var connectorSpecs = {
  jacdac: {
    width: 9.5,
    height: 4.65
  },
  usbc: {
    width: 9.5,
    height: 2.5
  }
};
var dirAngles = {
  top: 0,
  bottom: 180.000001,
  left: -90,
  right: 90
};
var ringGap = 2.5;
var ringRadius = 2.15 / 2;
var pcbWidth = 1.6;
var snapHeight = 2.5;
var wall = pcbWidth;
var wallRadius = wall / 2;
var segments = 16;
var snapRadius = wall;
var mountRadius = 4;
var mountRoundRadius = 0.5;
var mountCenterRadius = 1;
var mountHeight = 5;

var convert = function convert(m) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _cover$mounts2;

  var {
    box,
    rings,
    connectors
  } = m;
  var {
    width,
    height,
    depth
  } = box;
  var {
    cover,
    legs
  } = options;
  var coverModel; // box

  var model = union(roundedCuboid({
    size: [width + wall * 2, height + wall * 2, depth + wall * 2],
    center: [0, 0, depth / 2 + wall],
    roundRadius: wallRadius * 2,
    segments
  }), cuboid({
    size: [width + wall * 2, height + wall * 2, wall],
    center: [0, 0, wall / 2]
  })); // add screw mounts

  if ((legs == null ? void 0 : legs.type) === "well") {
    var post = (x, y, sign) => translate([x, y, mountHeight / 2], subtract(subtract(union(cylinder({
      radius: mountRadius,
      height: mountHeight,
      segments
    }), cuboid({
      size: [mountRadius * 2, mountRadius + wall, mountHeight - mountRoundRadius * 2],
      center: [0, -sign * (mountRadius + wall) / 2, -mountRoundRadius]
    })), cylinder({
      radius: mountRadius - wall,
      height: mountHeight + wall,
      center: [0, 0, wall],
      segments
    })), cylinder({
      radius: mountCenterRadius,
      height: mountHeight,
      center: [0, 0, -wall],
      segments
    })));

    model = union(model, post(-width / 2 + mountRadius - wall, -height / 2 - mountRadius - wall / 2, -1));
    model = union(model, post(width / 2 - mountRadius + wall, height / 2 + mountRadius + wall / 2, 1));
    model = union(model, post(-width / 2 + mountRadius - wall, height / 2 + mountRadius + wall / 2, 1));
    model = union(model, post(width / 2 - mountRadius + wall, -height / 2 - mountRadius - wall / 2, -1));
  } // empty box


  var innerbox = roundedCuboid({
    size: [width, height, depth + 3 * wall],
    center: [0, 0, depth / 2 + 2 * wall],
    segments
  });
  model = subtract(model, innerbox); // substract top

  model = subtract(model, cuboid({
    size: [width + wall, height + wall, wall],
    center: [0, 0, depth + wall + wall / 2]
  }));
  var coverSnaps = [{
    x: -width / 2 + ringGap,
    y: -height / 2 + ringGap
  }, {
    x: width / 2 - ringGap,
    y: -height / 2 + ringGap
  }, {
    x: width / 2 - ringGap,
    y: height / 2 - ringGap
  }, {
    x: -width / 2 + ringGap,
    y: height / 2 - ringGap
  }];

  var coverSnap = (x, y) => translate([x, y, 0], cylinder({
    radius: ringRadius + 0.1,
    height: 2 * wall,
    center: [0, 0, wall / 2],
    segments
  }));

  if (cover) {
    var _cover$mounts;

    coverModel = roundedCuboid({
      size: [width + wall, height + wall, wall],
      roundRadius: 0.25
    });

    if ((cover == null ? void 0 : (_cover$mounts = cover.mounts) == null ? void 0 : _cover$mounts.type) === "ring") {
      coverModel = coverSnaps.reduce((m, ring) => subtract(m, coverSnap(ring.x, ring.y)), coverModel);
    }
  } // remove jacdac connectors


  var connector = (x, y, dir, type) => {
    var conn = connectorSpecs[type];
    var dirAngle = dirAngles[dir] / 180 * Math.PI;
    var d = 24;
    return translate([x, y, snapHeight + pcbWidth / 2], rotateZ(dirAngle, roundedCuboid({
      size: [conn.width, d, conn.height],
      roundRadius: conn.height / 2 - 0.5,
      segments: 32,
      center: [0, d / 2, conn.height / 2]
    })));
  };

  model = connectors.reduce((m, c) => subtract(m, connector(c.x, c.y, c.dir, c.type)), model); // add snap fit ring mounts

  var snap = (x, y, h, hc) => translate([x, y, wall], union(cylinder({
    radius: snapRadius,
    height: h,
    center: [0, 0, h / 2],
    segments
  }), cylinder({
    radius: ringRadius,
    height: hc,
    center: [0, 0, h + hc / 2],
    segments
  })));

  var mounts = [...rings.map(p => _extends({}, p, {
    h: snapHeight,
    hc: pcbWidth
  })), ...((cover == null ? void 0 : (_cover$mounts2 = cover.mounts) == null ? void 0 : _cover$mounts2.type) === "ring" ? coverSnaps.map(p => _extends({}, p, {
    h: depth,
    hc: wall
  })) : [])];
  model = mounts.reduce((m, ring) => union(m, snap(ring.x, ring.y, ring.h, ring.hc)), model);
  return [model, coverModel].filter(m => !!m);
};

function convertToSTL(model, options) {
  var geometries = convert(model, options);
  return geometries.map(geometry => new Blob(stlSerializer.serialize({
    binary: false
  }, geometry)));
}

var handlers = {
  convert: function () {
    var _convert = _asyncToGenerator(function* (msg) {
      var {
        model,
        options
      } = msg;
      var stls = convertToSTL(model, options);
      return {
        stls: [{
          name: "box",
          blob: stls[0]
        }, stls[1] ? {
          name: "cover",
          blob: stls[1]
        } : undefined].filter(f => !!f)
      };
    });

    function convert(_x) {
      return _convert.apply(this, arguments);
    }

    return convert;
  }()
};

function handleMessage(_x2) {
  return _handleMessage.apply(this, arguments);
}

function _handleMessage() {
  _handleMessage = _asyncToGenerator(function* (event) {
    var message = event.data;
    var {
      id,
      worker,
      type
    } = message;
    if (worker !== "cad") return;

    try {
      var handler = handlers[type];
      var resp = yield handler(message);
      self.postMessage(_extends({
        id,
        worker
      }, resp));
    } catch (e) {
      self.postMessage({
        id,
        worker,
        error: e + ""
      });
    }
  });
  return _handleMessage.apply(this, arguments);
}

self.addEventListener("message", handleMessage);
console.debug("jacdac cad: worker registered");

/***/ })

}]);
//# sourceMappingURL=b79766cf-5703c4a87751fee41bb5.js.map