(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/buyingAdvicesPage/BuyingAdvicesPage.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/containers/buyingAdvicesPage/BuyingAdvicesPage.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".BuyingAdvicesPage__wrapper__1NiSi {\r\n    font-family: 'Montserrat';\r\n    padding: 40px 80px;\r\n}\r\n\r\n.BuyingAdvicesPage__wrapper__1NiSi h1 {\r\n    color: var(--mainBlack);\r\n}\r\n\r\n.BuyingAdvicesPage__pages__13NLF {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n    margin-top: 25px;\r\n}\r\n\r\n.BuyingAdvicesPage__page__1-lfp {\r\n    padding: 8px 0;\r\n    width: 25px;\r\n    text-align: center;\r\n    border: 1px solid var(--mainBlue);\r\n    color: var(--mainBlue);\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.BuyingAdvicesPage__activeElement__2K8I9 {\r\n    color: var(--mainWhite);\r\n    background: var(--mainBlue);\r\n}\r\n\r\n.BuyingAdvicesPage__page__1-lfp:hover {\r\n    color: var(--mainWhite);\r\n    background: var(--mainBlue);\r\n}", ""]);
// Exports
exports.locals = {
	"wrapper": "BuyingAdvicesPage__wrapper__1NiSi",
	"pages": "BuyingAdvicesPage__pages__13NLF",
	"page": "BuyingAdvicesPage__page__1-lfp",
	"activeElement": "BuyingAdvicesPage__activeElement__2K8I9"
};
module.exports = exports;


/***/ }),

/***/ "./src/containers/buyingAdvicesPage/BuyingAdvicesPage.css":
/*!****************************************************************!*\
  !*** ./src/containers/buyingAdvicesPage/BuyingAdvicesPage.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./BuyingAdvicesPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/buyingAdvicesPage/BuyingAdvicesPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??postcss!./BuyingAdvicesPage.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/containers/buyingAdvicesPage/BuyingAdvicesPage.js":
/*!***************************************************************!*\
  !*** ./src/containers/buyingAdvicesPage/BuyingAdvicesPage.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _BuyingAdvicesPage = __webpack_require__(/*! ./BuyingAdvicesPage.css */ "./src/containers/buyingAdvicesPage/BuyingAdvicesPage.css");

var _BuyingAdvicesPage2 = _interopRequireDefault(_BuyingAdvicesPage);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _AdvicesAllItems = __webpack_require__(/*! ../../components/advicesAllItems/AdvicesAllItems */ "./src/components/advicesAllItems/AdvicesAllItems.js");

var _AdvicesAllItems2 = _interopRequireDefault(_AdvicesAllItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuyingAdvicesPage = function (_Component) {
    _inherits(BuyingAdvicesPage, _Component);

    function BuyingAdvicesPage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BuyingAdvicesPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BuyingAdvicesPage.__proto__ || Object.getPrototypeOf(BuyingAdvicesPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            allElements: [],
            buyingAdvices: [],
            pages: 1,
            page: 1,
            pagesArray: [],
            activePages: []
        }, _this.switchPageHandler = function (page) {
            var pages = _this.state.pagesArray;
            var activePages = _this.state.activePages;

            var index = pages.findIndex(function (element) {
                return element === page;
            });
            activePages.fill(false, 0, pages.length);
            activePages[index] = true;

            _this.setState({
                activePages: activePages,
                page: page
            }, function () {
                var endPoint = _this.state.page * 10;
                var startPoint = endPoint - 10;
                var buyingAdvices = _this.state.allElements.slice(startPoint, endPoint);

                _this.setState({
                    buyingAdvices: buyingAdvices
                });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BuyingAdvicesPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            _axios2.default.get('/get_buying_advices').then(function (response) {
                var modifiedArray = [];

                for (var i = response.data.length - 1; i >= 0; i--) {
                    modifiedArray.push(response.data[i]);
                }

                _this2.setState({
                    allElements: modifiedArray,
                    buyingAdvices: modifiedArray,
                    pages: Math.ceil(response.data.length / 10)
                }, function () {
                    var shortArray = _this2.state.allElements.slice(0, 10);
                    var pagesArray = [];

                    for (var _i = 1; _i <= _this2.state.pages; _i++) {
                        pagesArray.push(_i);
                    }

                    var activePages = [];

                    activePages[0] = true;
                    for (var _i2 = 1; _i2 < pagesArray.length; _i2++) {
                        activePages.push(false);
                    }

                    _this2.setState({
                        buyingAdvices: shortArray,
                        pagesArray: pagesArray,
                        activePages: activePages
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var activePages = this.state.activePages;
            var pages = this.state.pagesArray.map(function (page, index) {
                var classList = [_BuyingAdvicesPage2.default.page];
                if (activePages[index]) {
                    classList.push(_BuyingAdvicesPage2.default.activeElement);
                }
                return _react2.default.createElement(
                    'p',
                    { className: classList.join(' '),
                        onClick: function onClick() {
                            return _this3.switchPageHandler(page);
                        } },
                    page
                );
            });

            var elements = this.state.buyingAdvices;

            return _react2.default.createElement(
                'div',
                { className: _BuyingAdvicesPage2.default.wrapper },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Buying Advices'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_AdvicesAllItems2.default, { elements: elements })
                ),
                _react2.default.createElement(
                    'div',
                    { className: _BuyingAdvicesPage2.default.pages },
                    this.state.pages > 1 ? pages : null
                )
            );
        }
    }]);

    return BuyingAdvicesPage;
}(_react.Component);

exports.default = BuyingAdvicesPage;

/***/ })

}]);
//# sourceMappingURL=16.js.map