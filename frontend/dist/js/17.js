(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/login_page/LoginPage.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/containers/login_page/LoginPage.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".LoginPage__wrapper__4VyXr {\r\n    padding-top: 100px;\r\n    min-height: 430px;\r\n}\r\n\r\n.LoginPage__wrapper__4VyXr p {\r\n    text-align: center;\r\n    font-family: 'Montserrat';\r\n    padding-top: 10px;\r\n}\r\n\r\n.LoginPage__wrapper__4VyXr span {\r\n    color: var(--mainBlue);\r\n    cursor: pointer;\r\n}", ""]);
// Exports
exports.locals = {
	"wrapper": "LoginPage__wrapper__4VyXr"
};
module.exports = exports;


/***/ }),

/***/ "./src/containers/login_page/LoginPage.css":
/*!*************************************************!*\
  !*** ./src/containers/login_page/LoginPage.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./LoginPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/login_page/LoginPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??postcss!./LoginPage.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/containers/login_page/LoginPage.js":
/*!************************************************!*\
  !*** ./src/containers/login_page/LoginPage.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LoginComponent = __webpack_require__(/*! ../../components/loginComponent/LoginComponent */ "./src/components/loginComponent/LoginComponent.js");

var _LoginComponent2 = _interopRequireDefault(_LoginComponent);

var _LoginPage = __webpack_require__(/*! ./LoginPage.css */ "./src/containers/login_page/LoginPage.css");

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPage = function LoginPage() {
    return _react2.default.createElement(
        'div',
        { className: _LoginPage2.default.wrapper },
        _react2.default.createElement(_LoginComponent2.default, null),
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/signup' },
                _react2.default.createElement(
                    'span',
                    null,
                    'Sign Up'
                )
            ),
            ' if you are not registered yet'
        )
    );
};

exports.default = LoginPage;

/***/ })

}]);
//# sourceMappingURL=17.js.map