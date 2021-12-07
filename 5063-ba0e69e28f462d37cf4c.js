"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5063],{

/***/ 75063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConfusionMatrixHeatMap; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4320);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6890);



var VegaLite = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5666)]).then(__webpack_require__.bind(__webpack_require__, 43670)));
function ConfusionMatrixHeatMap(props) {
  var {
    yActual,
    yPredicted,
    labels,
    timestamp
  } = props;
  var chartProps = props.chartProps;

  var compileConfusionMatrixData = (actualLabel, predictedLabel, labels) => {
    if (!yActual || !yPredicted) return [];
    if (yActual.length !== yPredicted.length) return [];
    var data = []; // create list of all actual -> predicted label combos

    labels.forEach((actualVal, actualIdx) => {
      labels.forEach((predVal, predIdx) => {
        var dataPoint = {};
        dataPoint["Actual label"] = actualVal;
        dataPoint["Predicted label"] = predVal;
        dataPoint["Actual index"] = actualIdx;
        dataPoint["Predicted index"] = predIdx;
        dataPoint["Count"] = 0;
        data.push(dataPoint);
      });
    }); // convert label names to indices

    var actual = actualLabel.map(label => labels.indexOf(label));
    var predicted = predictedLabel.map(label => labels.indexOf(label)); // iterate through all of the combinations of actual and predicted labels

    actual.forEach((actualVal, idx) => {
      var predIdx = predicted[idx];
      var actualIdx = actual[idx];
      var dataIdx = actualIdx * labels.length + predIdx;
      data[dataIdx]["Count"] += 1;
    });
    return data;
  };

  var confusionMatrix = compileConfusionMatrixData(yActual, yPredicted, labels);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VegaLite, {
    actions: false,
    spec: {
      title: {
        timestamp
      },
      width: chartProps.CHART_WIDTH,
      height: chartProps.CHART_HEIGHT,
      mark: "rect",
      data: {
        values: confusionMatrix
      },
      encoding: {
        x: {
          field: "Predicted label",
          type: "nominal"
        },
        y: {
          field: "Actual label",
          type: "nominal"
        }
      },
      layer: [{
        mark: "rect",
        encoding: {
          color: {
            field: "Count",
            type: "quantitative",
            scale: {
              range: ["#eee", chartProps.PALETTE[2]]
            }
          }
        }
      }, {
        mark: "text",
        encoding: {
          text: {
            field: "Count",
            type: "quantitative"
          },
          color: {
            condition: {
              test: "datum['Count'] < 1",
              value: "#eee"
            },
            value: "white"
          }
        }
      }]
    }
  }))));
}

/***/ })

}]);
//# sourceMappingURL=5063-ba0e69e28f462d37cf4c.js.map