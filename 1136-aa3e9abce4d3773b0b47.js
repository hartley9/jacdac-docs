"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1136],{

/***/ 91136:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ModelViewer; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js + 4 modules
var react_three_fiber_esm = __webpack_require__(32632);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(93456);
;// CONCATENATED MODULE: ./node_modules/three-stdlib/loaders/RGBELoader.js
 // http://en.wikipedia.org/wiki/RGBE_image_format

class RGBELoader extends three_module.DataTextureLoader {
  constructor(manager) {
    super(manager);
    this.type = three_module.UnsignedByteType;
  } // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html


  parse(buffer) {
    var
    /* return codes for rgbe routines */
    //RGBE_RETURN_SUCCESS = 0,
    RGBE_RETURN_FAILURE = -1,

    /* default error routine.  change this to change error handling */
    rgbe_read_error = 1,
        rgbe_write_error = 2,
        rgbe_format_error = 3,
        rgbe_memory_error = 4,
        rgbe_error = function rgbe_error(rgbe_error_code, msg) {
      switch (rgbe_error_code) {
        case rgbe_read_error:
          console.error('THREE.RGBELoader Read Error: ' + (msg || ''));
          break;

        case rgbe_write_error:
          console.error('THREE.RGBELoader Write Error: ' + (msg || ''));
          break;

        case rgbe_format_error:
          console.error('THREE.RGBELoader Bad File Format: ' + (msg || ''));
          break;

        default:
        case rgbe_memory_error:
          console.error('THREE.RGBELoader: Error: ' + (msg || ''));
      }

      return RGBE_RETURN_FAILURE;
    },

    /* offsets to red, green, and blue components in a data (float) pixel */
    //RGBE_DATA_RED = 0,
    //RGBE_DATA_GREEN = 1,
    //RGBE_DATA_BLUE = 2,

    /* number of floats per pixel, use 4 since stored in rgba image format */
    //RGBE_DATA_SIZE = 4,

    /* flags indicating which fields in an rgbe_header_info are valid */
    RGBE_VALID_PROGRAMTYPE = 1,
        RGBE_VALID_FORMAT = 2,
        RGBE_VALID_DIMENSIONS = 4,
        NEWLINE = '\n',
        fgets = function fgets(buffer, lineLimit, consume) {
      var chunkSize = 128;
      lineLimit = !lineLimit ? 1024 : lineLimit;
      var p = buffer.pos,
          i = -1,
          len = 0,
          s = '',
          chunk = String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));

      while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer.byteLength) {
        s += chunk;
        len += chunk.length;
        p += chunkSize;
        chunk += String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
      }

      if (-1 < i) {
        /*for (i=l-1; i>=0; i--) {
        byteCode = m.charCodeAt(i);
        if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
        else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
        if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
        }*/
        if (false !== consume) buffer.pos += len + i + 1;
        return s + chunk.slice(0, i);
      }

      return false;
    },

    /* minimal header reading.  modify if you want to parse more information */
    RGBE_ReadHeader = function RGBE_ReadHeader(buffer) {
      // regexes to parse header info fields
      var magic_token_re = /^#\?(\S+)/,
          gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
          exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
          format_re = /^\s*FORMAT=(\S+)\s*$/,
          dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
          // RGBE format header struct
      header = {
        valid: 0
        /* indicate which fields are valid */
        ,
        string: ''
        /* the actual header string */
        ,
        comments: ''
        /* comments found in header */
        ,
        programtype: 'RGBE'
        /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */
        ,
        format: ''
        /* RGBE format, default 32-bit_rle_rgbe */
        ,
        gamma: 1.0
        /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */
        ,
        exposure: 1.0
        /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */
        ,
        width: 0,
        height: 0
        /* image dimensions, width/height */

      };
      var line, match;

      if (buffer.pos >= buffer.byteLength || !(line = fgets(buffer))) {
        return rgbe_error(rgbe_read_error, 'no header found');
      }
      /* if you want to require the magic token then uncomment the next line */


      if (!(match = line.match(magic_token_re))) {
        return rgbe_error(rgbe_format_error, 'bad initial token');
      }

      header.valid |= RGBE_VALID_PROGRAMTYPE;
      header.programtype = match[1];
      header.string += line + '\n';

      while (true) {
        line = fgets(buffer);
        if (false === line) break;
        header.string += line + '\n';

        if ('#' === line.charAt(0)) {
          header.comments += line + '\n';
          continue; // comment line
        }

        if (match = line.match(gamma_re)) {
          header.gamma = parseFloat(match[1], 10);
        }

        if (match = line.match(exposure_re)) {
          header.exposure = parseFloat(match[1], 10);
        }

        if (match = line.match(format_re)) {
          header.valid |= RGBE_VALID_FORMAT;
          header.format = match[1]; //'32-bit_rle_rgbe';
        }

        if (match = line.match(dimensions_re)) {
          header.valid |= RGBE_VALID_DIMENSIONS;
          header.height = parseInt(match[1], 10);
          header.width = parseInt(match[2], 10);
        }

        if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
      }

      if (!(header.valid & RGBE_VALID_FORMAT)) {
        return rgbe_error(rgbe_format_error, 'missing format specifier');
      }

      if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
        return rgbe_error(rgbe_format_error, 'missing image size specifier');
      }

      return header;
    },
        RGBE_ReadPixels_RLE = function RGBE_ReadPixels_RLE(buffer, w, h) {
      var scanline_width = w;

      if ( // run length encoding is not allowed so read flat
      scanline_width < 8 || scanline_width > 0x7fff || // this file is not run length encoded
      2 !== buffer[0] || 2 !== buffer[1] || buffer[2] & 0x80) {
        // return the flat buffer
        return new Uint8Array(buffer);
      }

      if (scanline_width !== (buffer[2] << 8 | buffer[3])) {
        return rgbe_error(rgbe_format_error, 'wrong scanline width');
      }

      var data_rgba = new Uint8Array(4 * w * h);

      if (!data_rgba.length) {
        return rgbe_error(rgbe_memory_error, 'unable to allocate buffer space');
      }

      var offset = 0,
          pos = 0;
      var ptr_end = 4 * scanline_width;
      var rgbeStart = new Uint8Array(4);
      var scanline_buffer = new Uint8Array(ptr_end);
      var num_scanlines = h; // read in each successive scanline

      while (num_scanlines > 0 && pos < buffer.byteLength) {
        if (pos + 4 > buffer.byteLength) {
          return rgbe_error(rgbe_read_error);
        }

        rgbeStart[0] = buffer[pos++];
        rgbeStart[1] = buffer[pos++];
        rgbeStart[2] = buffer[pos++];
        rgbeStart[3] = buffer[pos++];

        if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {
          return rgbe_error(rgbe_format_error, 'bad rgbe scanline format');
        } // read each of the four channels for the scanline into the buffer
        // first red, then green, then blue, then exponent


        var ptr = 0,
            count = void 0;

        while (ptr < ptr_end && pos < buffer.byteLength) {
          count = buffer[pos++];
          var isEncodedRun = count > 128;
          if (isEncodedRun) count -= 128;

          if (0 === count || ptr + count > ptr_end) {
            return rgbe_error(rgbe_format_error, 'bad scanline data');
          }

          if (isEncodedRun) {
            // a (encoded) run of the same value
            var byteValue = buffer[pos++];

            for (var i = 0; i < count; i++) {
              scanline_buffer[ptr++] = byteValue;
            } //ptr += count;

          } else {
            // a literal-run
            scanline_buffer.set(buffer.subarray(pos, pos + count), ptr);
            ptr += count;
            pos += count;
          }
        } // now convert data from buffer into rgba
        // first red, then green, then blue, then exponent (alpha)


        var l = scanline_width; //scanline_buffer.byteLength;

        for (var _i = 0; _i < l; _i++) {
          var off = 0;
          data_rgba[offset] = scanline_buffer[_i + off];
          off += scanline_width; //1;

          data_rgba[offset + 1] = scanline_buffer[_i + off];
          off += scanline_width; //1;

          data_rgba[offset + 2] = scanline_buffer[_i + off];
          off += scanline_width; //1;

          data_rgba[offset + 3] = scanline_buffer[_i + off];
          offset += 4;
        }

        num_scanlines--;
      }

      return data_rgba;
    };

    var RGBEByteToRGBFloat = function RGBEByteToRGBFloat(sourceArray, sourceOffset, destArray, destOffset) {
      var e = sourceArray[sourceOffset + 3];
      var scale = Math.pow(2.0, e - 128.0) / 255.0;
      destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
      destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
      destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
    };

    var RGBEByteToRGBHalf = function RGBEByteToRGBHalf(sourceArray, sourceOffset, destArray, destOffset) {
      var e = sourceArray[sourceOffset + 3];
      var scale = Math.pow(2.0, e - 128.0) / 255.0;
      destArray[destOffset + 0] = three_module.DataUtils.toHalfFloat(sourceArray[sourceOffset + 0] * scale);
      destArray[destOffset + 1] = three_module.DataUtils.toHalfFloat(sourceArray[sourceOffset + 1] * scale);
      destArray[destOffset + 2] = three_module.DataUtils.toHalfFloat(sourceArray[sourceOffset + 2] * scale);
    };

    var byteArray = new Uint8Array(buffer);
    byteArray.pos = 0;
    var rgbe_header_info = RGBE_ReadHeader(byteArray);

    if (RGBE_RETURN_FAILURE !== rgbe_header_info) {
      var w = rgbe_header_info.width,
          h = rgbe_header_info.height,
          image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);

      if (RGBE_RETURN_FAILURE !== image_rgba_data) {
        var data, format, type;
        var numElements;

        switch (this.type) {
          case three_module.UnsignedByteType:
            data = image_rgba_data;
            format = three_module.RGBEFormat; // handled as THREE.RGBAFormat in shaders

            type = three_module.UnsignedByteType;
            break;

          case three_module.FloatType:
            numElements = image_rgba_data.length / 4 * 3;
            var floatArray = new Float32Array(numElements);

            for (var j = 0; j < numElements; j++) {
              RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 3);
            }

            data = floatArray;
            format = three_module.RGBFormat;
            type = three_module.FloatType;
            break;

          case three_module.HalfFloatType:
            numElements = image_rgba_data.length / 4 * 3;
            var halfArray = new Uint16Array(numElements);

            for (var _j = 0; _j < numElements; _j++) {
              RGBEByteToRGBHalf(image_rgba_data, _j * 4, halfArray, _j * 3);
            }

            data = halfArray;
            format = three_module.RGBFormat;
            type = three_module.HalfFloatType;
            break;

          default:
            console.error('THREE.RGBELoader: unsupported type: ', this.type);
            break;
        }

        return {
          width: w,
          height: h,
          data: data,
          header: rgbe_header_info.string,
          gamma: rgbe_header_info.gamma,
          exposure: rgbe_header_info.exposure,
          format: format,
          type: type
        };
      }
    }

    return null;
  }

  setDataType(value) {
    this.type = value;
    return this;
  }

  load(url, onLoad, onProgress, onError) {
    function onLoadCallback(texture, texData) {
      switch (texture.type) {
        case three_module.UnsignedByteType:
          texture.encoding = three_module.RGBEEncoding;
          texture.minFilter = three_module.NearestFilter;
          texture.magFilter = three_module.NearestFilter;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;

        case three_module.FloatType:
          texture.encoding = three_module.LinearEncoding;
          texture.minFilter = three_module.LinearFilter;
          texture.magFilter = three_module.LinearFilter;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;

        case three_module.HalfFloatType:
          texture.encoding = three_module.LinearEncoding;
          texture.minFilter = three_module.LinearFilter;
          texture.magFilter = three_module.LinearFilter;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;
      }

      if (onLoad) onLoad(texture, texData);
    }

    return super.load(url, onLoadCallback, onProgress, onError);
  }

}


// EXTERNAL MODULE: ./node_modules/use-asset/dist/index.js
var dist = __webpack_require__(664);
;// CONCATENATED MODULE: ./node_modules/@react-three/drei/helpers/environment-assets.js
var presetsObj = {
  sunset: 'venice_sunset_1k.hdr',
  dawn: 'kiara_1_dawn_1k.hdr',
  night: 'dikhololo_night_1k.hdr',
  warehouse: 'empty_warehouse_01_1k.hdr',
  forest: 'forest_slope_1k.hdr',
  apartment: 'lebombo_1k.hdr',
  studio: 'studio_small_03_1k.hdr',
  city: 'potsdamer_platz_1k.hdr',
  park: 'rooitou_park_1k.hdr',
  lobby: 'st_fagans_interior_1k.hdr'
};

;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Environment.js







function getTexture(texture, gen, isCubeMap) {
  if (isCubeMap) {
    gen.compileEquirectangularShader();
    return gen.fromCubemap(texture).texture;
  }

  return gen.fromEquirectangular(texture).texture;
}

var CUBEMAP_ROOT = 'https://rawcdn.githack.com/pmndrs/drei-assets/aa3600359ba664d546d05821bcbca42013587df2';

function Environment(_ref) {
  var {
    background = false,
    files = ['/px.png', '/nx.png', '/py.png', '/ny.png', '/pz.png', '/nz.png'],
    path = '',
    preset = undefined,
    scene,
    extensions
  } = _ref;

  if (preset) {
    if (!(preset in presetsObj)) {
      throw new Error('Preset must be one of: ' + Object.keys(presetsObj).join(', '));
    }

    files = presetsObj[preset];
    path = CUBEMAP_ROOT + '/hdri/';
  }

  var defaultScene = (0,react_three_fiber_esm/* useThree */.Ky)(_ref2 => {
    var {
      scene
    } = _ref2;
    return scene;
  });
  var gl = (0,react_three_fiber_esm/* useThree */.Ky)(_ref3 => {
    var {
      gl
    } = _ref3;
    return gl;
  });
  var isCubeMap = Array.isArray(files);
  var loader = isCubeMap ? three_module.CubeTextureLoader : RGBELoader; // @ts-expect-error

  var loaderResult = (0,react_three_fiber_esm/* useLoader */.U2)(loader, isCubeMap ? [files] : files, loader => {
    loader.setPath(path);
    if (extensions) extensions(loader);
  });
  var map = isCubeMap ? loaderResult[0] : loaderResult; // PMREMGenerator takes its sweet time to generate the env-map,
  // Let's make this part of suspense, or else it just yields a frame-skip

  var texture = (0,dist/* useAsset */.G)(() => new Promise(res => {
    var gen = new three_module.PMREMGenerator(gl);
    var texture = getTexture(map, gen, isCubeMap);
    gen.dispose();
    res(texture);
  }), map);
  react.useLayoutEffect(() => {
    var oldbg = scene ? scene.background : defaultScene.background;
    var oldenv = scene ? scene.environment : defaultScene.environment;

    if (scene) {
      scene.environment = texture;
      if (background) scene.background = texture;
    } else {
      defaultScene.environment = texture;
      if (background) defaultScene.background = texture;
    }

    return () => {
      if (scene) {
        scene.environment = oldenv;
        scene.background = oldbg;
      } else {
        defaultScene.environment = oldenv;
        defaultScene.background = oldbg;
      } // Environment textures are volatile, better dispose and uncache them


      dist/* useAsset.clear */.G.clear(map);
      texture.dispose();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texture, background, scene]);
  return null;
}


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/three-stdlib/shaders/HorizontalBlurShader.js
/**
 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
 *
 * - 9 samples per pass
 * - standard deviation 2.7
 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
 */
var HorizontalBlurShader = {
  uniforms: {
    tDiffuse: {
      value: null
    },
    h: {
      value: 1.0 / 512.0
    }
  },
  vertexShader:
  /* glsl */
  "\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",
  fragmentShader:
  /* glsl */
  "\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "
};

;// CONCATENATED MODULE: ./node_modules/three-stdlib/shaders/VerticalBlurShader.js
/**
 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
 *
 * - 9 samples per pass
 * - standard deviation 2.7
 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
 */
var VerticalBlurShader = {
  uniforms: {
    tDiffuse: {
      value: null
    },
    v: {
      value: 1.0 / 512.0
    }
  },
  vertexShader:
  /* glsl */
  "\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",
  fragmentShader:
  /* glsl */
  "\n  \n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "
};

;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/ContactShadows.js

var _excluded = ["frames", "opacity", "width", "height", "blur", "far", "resolution"];





var ContactShadows = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  var {
    frames = Infinity,
    opacity = 1,
    width = 1,
    height = 1,
    blur = 1,
    far = 10,
    resolution = 256
  } = _ref,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var scene = (0,react_three_fiber_esm/* useThree */.Ky)(_ref2 => {
    var {
      scene
    } = _ref2;
    return scene;
  });
  var gl = (0,react_three_fiber_esm/* useThree */.Ky)(_ref3 => {
    var {
      gl
    } = _ref3;
    return gl;
  });
  var shadowCamera = react.useRef();
  var [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = react.useMemo(() => {
    var renderTarget = new three_module.WebGLRenderTarget(resolution, resolution);
    var renderTargetBlur = new three_module.WebGLRenderTarget(resolution, resolution);
    renderTargetBlur.texture.generateMipmaps = renderTarget.texture.generateMipmaps = false;
    var planeGeometry = new three_module.PlaneBufferGeometry(width, height).rotateX(Math.PI / 2);
    var blurPlane = new three_module.Mesh(planeGeometry);
    var depthMaterial = new three_module.MeshDepthMaterial();
    depthMaterial.depthTest = depthMaterial.depthWrite = false;

    depthMaterial.onBeforeCompile = shader => shader.fragmentShader = shader.fragmentShader.replace('1.0 - fragCoordZ ), opacity );', '0.0 ), ( 1.0 - fragCoordZ ) * 1.0 );');

    var horizontalBlurMaterial = new three_module.ShaderMaterial(HorizontalBlurShader);
    var verticalBlurMaterial = new three_module.ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial.depthTest = horizontalBlurMaterial.depthTest = false;
    return [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur];
  }, [resolution, width, height]);
  var count = 0;
  (0,react_three_fiber_esm/* useFrame */.xQ)(() => {
    if (shadowCamera.current && (frames === Infinity || count < frames)) {
      var initialBackground = scene.background;
      scene.background = null;
      scene.overrideMaterial = depthMaterial;
      gl.setRenderTarget(renderTarget);
      gl.render(scene, shadowCamera.current);
      scene.overrideMaterial = null;
      blurPlane.material = horizontalBlurMaterial;
      blurPlane.material.uniforms.tDiffuse.value = renderTarget.texture;
      horizontalBlurMaterial.uniforms.h.value = blur / 256;
      gl.setRenderTarget(renderTargetBlur);
      gl.render(blurPlane, shadowCamera.current);
      blurPlane.material = verticalBlurMaterial;
      blurPlane.material.uniforms.tDiffuse.value = renderTargetBlur.texture;
      verticalBlurMaterial.uniforms.v.value = blur / 256;
      gl.setRenderTarget(renderTarget);
      gl.render(blurPlane, shadowCamera.current);
      gl.setRenderTarget(null);
      scene.background = initialBackground;
      count++;
    }
  });
  return /*#__PURE__*/react.createElement("group", (0,esm_extends/* default */.Z)({}, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("mesh", {
    geometry: planeGeometry,
    scale: [1, -1, 1],
    rotation: [-Math.PI / 2, 0, 0]
  }, /*#__PURE__*/react.createElement("meshBasicMaterial", {
    map: renderTarget.texture,
    transparent: true,
    opacity: opacity
  })), /*#__PURE__*/react.createElement("orthographicCamera", {
    ref: shadowCamera,
    args: [-width / 2, width / 2, height / 2, -height / 2, 0, far]
  }));
});

;// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Stage.js

var Stage_excluded = ["children", "controls", "shadows", "adjustCamera", "environment", "contactShadow", "intensity", "preset", "shadowBias", "contactShadowBlur", "contactShadowOpacity"];





var presets = {
  rembrandt: {
    main: [1, 2, 1],
    fill: [-2, -0.5, -2]
  },
  portrait: {
    main: [-1, 2, 0.5],
    fill: [-1, 0.5, -1.5]
  },
  upfront: {
    main: [0, 2, 1],
    fill: [-1, 0.5, -1.5]
  },
  soft: {
    main: [-2, 4, 4],
    fill: [-1, 0.5, -1.5]
  }
};

function Stage(_ref) {
  var {
    children,
    controls,
    shadows = true,
    adjustCamera = true,
    environment = 'city',
    contactShadow = true,
    intensity = 1,
    preset = 'rembrandt',
    shadowBias = 0,
    contactShadowBlur = 2,
    contactShadowOpacity = 0.5
  } = _ref,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, Stage_excluded);

  var config = presets[preset];
  var camera = (0,react_three_fiber_esm/* useThree */.Ky)(state => state.camera); // @ts-expect-error new in @react-three/fiber@7.0.5

  var defaultControls = (0,react_three_fiber_esm/* useThree */.Ky)(state => state.controls);
  var outer = react.useRef(null);
  var inner = react.useRef(null);
  var [{
    radius,
    width,
    height
  }, set] = react.useState({
    radius: 0,
    width: 0,
    height: 0
  });
  react.useLayoutEffect(() => {
    outer.current.position.set(0, 0, 0);
    outer.current.updateWorldMatrix(true, true);
    var box3 = new three_module.Box3().setFromObject(inner.current);
    var center = new three_module.Vector3();
    var sphere = new three_module.Sphere();
    var height = box3.max.y - box3.min.y;
    var width = box3.max.x - box3.min.x;
    box3.getCenter(center);
    box3.getBoundingSphere(sphere);
    set({
      radius: sphere.radius,
      width,
      height
    });
    outer.current.position.set(-center.x, -center.y + height / 2, -center.z);
  }, [children]);
  react.useLayoutEffect(() => {
    if (adjustCamera) {
      var y = radius / (height > width ? 1.5 : 2.5);
      camera.position.set(0, radius * 0.5, radius * 2.5);
      camera.near = 0.1;
      camera.far = Math.max(5000, radius * 4);
      camera.lookAt(0, y, 0);
      var ctrl = defaultControls || (controls == null ? void 0 : controls.current);

      if (ctrl) {
        ctrl.target.set(0, y, 0);
        ctrl.update();
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [defaultControls, radius, height, width, adjustCamera]);
  return /*#__PURE__*/react.createElement("group", props, /*#__PURE__*/react.createElement("group", {
    ref: outer
  }, /*#__PURE__*/react.createElement("group", {
    ref: inner
  }, children)), contactShadow && /*#__PURE__*/react.createElement(ContactShadows, {
    "rotation-x": Math.PI / 2,
    opacity: contactShadowOpacity,
    width: radius * 2,
    height: radius * 2,
    blur: contactShadowBlur,
    far: radius / 2
  }), environment && /*#__PURE__*/react.createElement(Environment, {
    preset: environment
  }), /*#__PURE__*/react.createElement("ambientLight", {
    intensity: intensity / 3
  }), /*#__PURE__*/react.createElement("spotLight", {
    penumbra: 1,
    position: [config.main[0] * radius, config.main[1] * radius, config.main[2] * radius],
    intensity: intensity * 2,
    castShadow: shadows,
    "shadow-bias": shadowBias
  }), /*#__PURE__*/react.createElement("pointLight", {
    position: [config.fill[0] * radius, config.fill[1] * radius, config.fill[2] * radius],
    intensity: intensity
  }));
}


// EXTERNAL MODULE: ./node_modules/@react-three/drei/core/OrbitControls.js + 1 modules
var OrbitControls = __webpack_require__(97667);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Fullscreen.js
var Fullscreen = __webpack_require__(97359);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(71973);
;// CONCATENATED MODULE: ./src/components/home/models/ModelViewer.js





function ModelViewer(props) {
  // eslint-disable-next-line react/prop-types
  var {
    children,
    responsive,
    style,
    autoRotate
  } = props;
  var ref = (0,react.useRef)();
  var canvasRef = (0,react.useRef)();
  var supportsFullScreen = typeof document !== "undefined" && !!document.fullscreenEnabled;

  var handleFullScreen = () => {
    var _canvasRef$current;

    return (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.requestFullscreen();
  };

  return /*#__PURE__*/react.createElement("div", {
    ref: canvasRef,
    style: style ? style : responsive ? {
      position: "relative",
      width: "35vw",
      height: "35vw"
    } : {
      position: "relative",
      width: "clamp(50vw, 640px, 96vw)",
      height: "clamp(480px, 60vh, 96vh)"
    }
  }, /*#__PURE__*/react.createElement(react_three_fiber_esm/* Canvas */.Xz, {
    shadows: true,
    dpr: [1, 2],
    camera: {
      fov: 50
    }
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: null
  }, /*#__PURE__*/react.createElement(Stage, {
    controls: ref,
    intensity: 0.5,
    contactShadow: true,
    shadows: true,
    adjustCamera: true
  }, children)), /*#__PURE__*/react.createElement(OrbitControls/* OrbitControls */.z, {
    ref: ref,
    autoRotate: !!autoRotate
  })), supportsFullScreen && /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    style: {
      position: "absolute",
      right: "0.5rem",
      bottom: "0.5rem"
    },
    size: "small",
    onClick: handleFullScreen,
    title: "full screen"
  }, /*#__PURE__*/react.createElement(Fullscreen/* default */.Z, null)));
}

/***/ })

}]);
//# sourceMappingURL=1136-aa3e9abce4d3773b0b47.js.map