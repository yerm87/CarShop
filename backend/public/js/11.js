(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/aboutUsPage/AboutUsPage.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/containers/aboutUsPage/AboutUsPage.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/aboutUsPage_image.jpg */ "./src/assets/aboutUsPage_image.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".AboutUsPage__wrapper__3SHoj {\r\n    background: #f2f2f2;\r\n    color: var(--mainBlack);\r\n    font-family: 'Montserrat';\r\n    min-height: 530px;\r\n}\r\n\r\n.AboutUsPage__container__3fOtE {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    padding: 16px 0;\r\n}\r\n\r\n.AboutUsPage__container__3fOtE p {\r\n    margin: 0;\r\n}\r\n\r\n.AboutUsPage__paragraph__3ZPGN {\r\n    padding: 16px 0;\r\n}\r\n\r\n.AboutUsPage__image__3sYwU {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 400px;\r\n    margin-bottom: 16px;\r\n}", ""]);
// Exports
exports.locals = {
	"wrapper": "AboutUsPage__wrapper__3SHoj",
	"container": "AboutUsPage__container__3fOtE",
	"paragraph": "AboutUsPage__paragraph__3ZPGN",
	"image": "AboutUsPage__image__3sYwU"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/assets/aboutUsPage_image.jpg":
/*!******************************************!*\
  !*** ./src/assets/aboutUsPage_image.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aboutUsPage_image.jpg");

/***/ }),

/***/ "./src/containers/aboutUsPage/AboutUsPage.css":
/*!****************************************************!*\
  !*** ./src/containers/aboutUsPage/AboutUsPage.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./AboutUsPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/aboutUsPage/AboutUsPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??postcss!./AboutUsPage.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/containers/aboutUsPage/AboutUsPage.js":
/*!***************************************************!*\
  !*** ./src/containers/aboutUsPage/AboutUsPage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _AboutUsPage = __webpack_require__(/*! ./AboutUsPage.css */ "./src/containers/aboutUsPage/AboutUsPage.css");

var _AboutUsPage2 = _interopRequireDefault(_AboutUsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutUsPage = function AboutUsPage() {
    return _react2.default.createElement(
        'div',
        { className: _AboutUsPage2.default.wrapper },
        _react2.default.createElement(
            'div',
            { className: _AboutUsPage2.default.container },
            _react2.default.createElement('div', { className: _AboutUsPage2.default.image }),
            _react2.default.createElement(
                'p',
                null,
                'Our mission is to be your ultimate online solution for buying and selling new and used cars. Our site is designed to give you more control of the buying process and make finding a vehicle easier than ever before.'
            ),
            _react2.default.createElement(
                'p',
                { className: _AboutUsPage2.default.paragraph },
                'Our goal is to eliminate all the hassles of your car selling experience. Sell it now and save time and money.'
            )
        )
    );
};

exports.default = AboutUsPage;

/***/ })

}]);
//# sourceMappingURL=11.js.map