(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideBar/SideBar.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/sideBar/SideBar.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".SideBar__mainContainer__vGb0J {\r\n\r\n}\r\n\r\n.SideBar__buttonsContainer__3QMwo {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.SideBar__buttonsContainer__3QMwo button {\r\n    padding: 10px 18px;\r\n    background: var(--mainBlue);\r\n    font-family: 'Montserrat';\r\n    border: none;\r\n    color: var(--mainWhite);\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\n.SideBar__filterResults__5yeEH button {\r\n    border-top-left-radius: 14px;\r\n}\r\n\r\n.SideBar__newSearch__3hbbX button {\r\n    border-top-right-radius: 14px;\r\n}\r\n\r\n.SideBar__active__1FLKW button {\r\n    background: var(--mainWhite);\r\n    color: var(--mainBlue);\r\n}\r\n\r\n.SideBar__content__1Cg3n {\r\n    background: var(--mainWhite);\r\n}", ""]);
// Exports
exports.locals = {
	"mainContainer": "SideBar__mainContainer__vGb0J",
	"buttonsContainer": "SideBar__buttonsContainer__3QMwo",
	"filterResults": "SideBar__filterResults__5yeEH",
	"newSearch": "SideBar__newSearch__3hbbX",
	"active": "SideBar__active__1FLKW",
	"content": "SideBar__content__1Cg3n"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideBar/filterComponent/FilterComponent.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/sideBar/filterComponent/FilterComponent.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".FilterComponent__mainContainer__2wdck {\r\n    color: var(--mainBlack);\r\n}\r\n\r\n.FilterComponent__resultsNumber__P63Ju {\r\n    padding: 12px 0;\r\n    text-align: center;\r\n    margin: 0;\r\n    border-bottom: 1px solid #d1d1d1;\r\n    font-weight: bold;\r\n}\r\n\r\n.FilterComponent__location__3jnH7, .FilterComponent__condition__LlKCb, .FilterComponent__year__3upAt, .FilterComponent__make__1SIQc, .FilterComponent__price__CnCez, .FilterComponent__mileage__3rMGr, .FilterComponent__model__3jJin {\r\n    padding-bottom: 20px;\r\n    border-bottom: 1px solid #d1d1d1;\r\n}\r\n\r\n.FilterComponent__location__3jnH7 p, .FilterComponent__condition__LlKCb p, .FilterComponent__year__3upAt p, .FilterComponent__make__1SIQc p, .FilterComponent__price__CnCez p,\r\n.FilterComponent__mileage__3rMGr p, .FilterComponent__model__3jJin p {\r\n    margin: 0;\r\n    padding: 14px 0 20px 20px;\r\n    font-weight: bold;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.FilterComponent__selectLocation__13ILr {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: start;\r\n    padding-left: 20px;\r\n}\r\n\r\n.FilterComponent__radius__1actv {\r\n    width: 135px;\r\n}\r\n\r\n.FilterComponent__searchRadius__3Dewt {\r\n    font-weight: bold;\r\n    font-size: 0.9em;\r\n}\r\n\r\n.FilterComponent__errorMessage__32A_v {\r\n    font-weight: bold;\r\n    font-size: 0.9em;\r\n    margin-left: 10px;\r\n    color: var(--mainRed);\r\n    opacity: 0;\r\n}\r\n\r\n.FilterComponent__errorMessageDisplay__lhmF2 {\r\n    opacity: 1;\r\n}\r\n\r\n.FilterComponent__selectLocation__13ILr input {\r\n    width: 90px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.FilterComponent__selectLocation__13ILr select {\r\n    width: 115px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.FilterComponent__selectLocation__13ILr input, .FilterComponent__selectLocation__13ILr select,\r\n.FilterComponent__yearSelect__2Xwx2 select, .FilterComponent__selectPrice__33kyf select {\r\n    font-size: 1.1em;\r\n    padding: 10px 0 10px 10px;\r\n    border: 1px solid #d1d1d1;\r\n    border-radius: 3px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.FilterComponent__yearSelect__2Xwx2 {\r\n    padding-left: 10px;\r\n}\r\n\r\n.FilterComponent__invalid__1u00k input {\r\n    border: 1px solid var(--mainRed);\r\n}\r\n\r\n.FilterComponent__conditionButtons__1bxUx {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.FilterComponent__conditionButtons__1bxUx input {\r\n    width: 1.4em;\r\n    height: 1.4em;\r\n}\r\n\r\n.FilterComponent__conditionButtons__1bxUx .FilterComponent__allElements__15K9C,\r\n.FilterComponent__conditionButtons__1bxUx .FilterComponent__new__3eDcW,\r\n.FilterComponent__conditionButtons__1bxUx .FilterComponent__used__32zB4 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-left: 25px;\r\n}\r\n\r\n.FilterComponent__yearSelect__2Xwx2, .FilterComponent__selectPrice__33kyf, .FilterComponent__mileageItem__2mhKq {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.FilterComponent__yearSelect__2Xwx2 label, .FilterComponent__selectPrice__33kyf label {\r\n    display: block;\r\n    font-weight: bold;\r\n}\r\n\r\n.FilterComponent__selectPrice__33kyf {\r\n    padding-left: 10px;\r\n}\r\n\r\n.FilterComponent__yearSelectElement__1Lnol, .FilterComponent__selectPriceElement__1wMti {\r\n    padding-left: 10px;\r\n}\r\n\r\n.FilterComponent__makes__ffLru {\r\n    height: 240px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.FilterComponent__models__1egS_ {\r\n    height: 200px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.FilterComponent__makeItem__3X4Zq, .FilterComponent__modelItem__1XjWy {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 10px 0 0 20px;\r\n}\r\n\r\n.FilterComponent__makeItem__3X4Zq input, .FilterComponent__modelItem__1XjWy input {\r\n    width: 1.2em;\r\n    height: 1.2em;\r\n}\r\n\r\n.FilterComponent__mileageItems__2Wt7p {\r\n    padding-left: 20px;\r\n}\r\n\r\n.FilterComponent__mileageItem__2mhKq {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.FilterComponent__mileageItem__2mhKq input {\r\n    width: 1.2em;\r\n    height: 1.2em;\r\n}", ""]);
// Exports
exports.locals = {
	"mainContainer": "FilterComponent__mainContainer__2wdck",
	"resultsNumber": "FilterComponent__resultsNumber__P63Ju",
	"location": "FilterComponent__location__3jnH7",
	"condition": "FilterComponent__condition__LlKCb",
	"year": "FilterComponent__year__3upAt",
	"make": "FilterComponent__make__1SIQc",
	"price": "FilterComponent__price__CnCez",
	"mileage": "FilterComponent__mileage__3rMGr",
	"model": "FilterComponent__model__3jJin",
	"selectLocation": "FilterComponent__selectLocation__13ILr",
	"radius": "FilterComponent__radius__1actv",
	"searchRadius": "FilterComponent__searchRadius__3Dewt",
	"errorMessage": "FilterComponent__errorMessage__32A_v",
	"errorMessageDisplay": "FilterComponent__errorMessageDisplay__lhmF2",
	"yearSelect": "FilterComponent__yearSelect__2Xwx2",
	"selectPrice": "FilterComponent__selectPrice__33kyf",
	"invalid": "FilterComponent__invalid__1u00k",
	"conditionButtons": "FilterComponent__conditionButtons__1bxUx",
	"allElements": "FilterComponent__allElements__15K9C",
	"new": "FilterComponent__new__3eDcW",
	"used": "FilterComponent__used__32zB4",
	"mileageItem": "FilterComponent__mileageItem__2mhKq",
	"yearSelectElement": "FilterComponent__yearSelectElement__1Lnol",
	"selectPriceElement": "FilterComponent__selectPriceElement__1wMti",
	"makes": "FilterComponent__makes__ffLru",
	"models": "FilterComponent__models__1egS_",
	"makeItem": "FilterComponent__makeItem__3X4Zq",
	"modelItem": "FilterComponent__modelItem__1XjWy",
	"mileageItems": "FilterComponent__mileageItems__2Wt7p"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideBar/newSearch/NewSearch.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/sideBar/newSearch/NewSearch.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".NewSearch__container__3zru8 {\r\n    padding: 25px 20px;\r\n}\r\n\r\n.NewSearch__container__3zru8 select {\r\n    width: 200px;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n    border-bottom: none;\r\n    font-family: 'Montserrat';\r\n    font-size: 1.1em\r\n}\r\n\r\n.NewSearch__container__3zru8 div {\r\n    text-align: center;\r\n}\r\n\r\n.NewSearch__container__3zru8 button {\r\n    background: transparent;\r\n    color: var(--mainBlue);\r\n    font-weight: bold;\r\n    border: none;\r\n    font-size: 1.3em;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.NewSearch__container__3zru8 button:hover {\r\n    cursor: pointer;\r\n}", ""]);
// Exports
exports.locals = {
	"container": "NewSearch__container__3zru8"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/searchResults/SearchResults.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/containers/searchResults/SearchResults.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".SearchResults__mainContainer__2UXg4 {\r\n    font-family: 'Montserrat';\r\n    background: #f2f2f2;\r\n    min-height: 600px;\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.SearchResults__title__2hEMs h1 {\r\n    color: var(--mainBlue);\r\n    margin: 0;\r\n    padding: 20px 0 20px 80px;\r\n}\r\n\r\n.SearchResults__contentContainer__3BOcP {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.SearchResults__items__3H7EF {\r\n    padding-left: 50px;\r\n}\r\n\r\n.SearchResults__pages__1s5Wc {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n    margin-top: 25px;\r\n}\r\n\r\n.SearchResults__page__2irsP {\r\n    padding: 8px 0;\r\n    width: 25px;\r\n    text-align: center;\r\n    border: 1px solid var(--mainBlue);\r\n    color: var(--mainBlue);\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.SearchResults__activeElement__3rSxl {\r\n    color: var(--mainWhite);\r\n    background: var(--mainBlue);\r\n}\r\n\r\n.SearchResults__page__2irsP:hover {\r\n    color: var(--mainWhite);\r\n    background: var(--mainBlue);\r\n}", ""]);
// Exports
exports.locals = {
	"mainContainer": "SearchResults__mainContainer__2UXg4",
	"title": "SearchResults__title__2hEMs",
	"contentContainer": "SearchResults__contentContainer__3BOcP",
	"items": "SearchResults__items__3H7EF",
	"pages": "SearchResults__pages__1s5Wc",
	"page": "SearchResults__page__2irsP",
	"activeElement": "SearchResults__activeElement__3rSxl"
};
module.exports = exports;


/***/ }),

/***/ "./src/components/sideBar/SideBar.css":
/*!********************************************!*\
  !*** ./src/components/sideBar/SideBar.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./SideBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideBar/SideBar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??postcss!./SideBar.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/sideBar/SideBar.js":
/*!*******************************************!*\
  !*** ./src/components/sideBar/SideBar.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _SideBar = __webpack_require__(/*! ./SideBar.css */ "./src/components/sideBar/SideBar.css");

var _SideBar2 = _interopRequireDefault(_SideBar);

var _FilterComponent = __webpack_require__(/*! ./filterComponent/FilterComponent */ "./src/components/sideBar/filterComponent/FilterComponent.js");

var _FilterComponent2 = _interopRequireDefault(_FilterComponent);

var _NewSearch = __webpack_require__(/*! ./newSearch/NewSearch */ "./src/components/sideBar/newSearch/NewSearch.js");

var _NewSearch2 = _interopRequireDefault(_NewSearch);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Actions = __webpack_require__(/*! ../../reduxStore/searching/Actions */ "./src/reduxStore/searching/Actions.js");

var actions = _interopRequireWildcard(_Actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_Component) {
    _inherits(SideBar, _Component);

    function SideBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SideBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call.apply(_ref, [this].concat(args))), _this), _this.filterResultsFieldActive = function () {
            _this.props.filterComponentActive();
        }, _this.newSearchActive = function () {
            _this.props.filterComponentNotActive();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SideBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var arrayOfFilterResults = [_SideBar2.default.filterResults];
            var arrayOfNewSearch = [_SideBar2.default.newSearch];

            if (this.props.filterComponent) {
                arrayOfFilterResults.push(_SideBar2.default.active);
            } else if (!this.props.filterComponent) {
                arrayOfNewSearch.push(_SideBar2.default.active);
            }

            return _react2.default.createElement(
                'div',
                { className: _SideBar2.default.mainContainer },
                _react2.default.createElement(
                    'div',
                    { className: _SideBar2.default.buttonsContainer },
                    _react2.default.createElement(
                        'div',
                        { className: arrayOfFilterResults.join(' ') },
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick() {
                                    return _this2.filterResultsFieldActive();
                                } },
                            'Filter Results'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: arrayOfNewSearch.join(' ') },
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick() {
                                    return _this2.newSearchActive();
                                } },
                            'New Search'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _SideBar2.default.content },
                    this.props.filterComponent ? _react2.default.createElement(_FilterComponent2.default, { resultsNumber: this.props.resultsNumber,
                        changeHandler: this.props.changeHandler,
                        makesItems: this.props.makesItems,
                        modelsItems: this.props.modelsItems,
                        onChangeInputNumber: this.props.onChangeInputNumber,
                        zipValid: this.props.zipValid }) : _react2.default.createElement(_NewSearch2.default, { searchItems: this.props.searchItems })
                )
            );
        }
    }]);

    return SideBar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        filterComponent: state.searchReducer.filterComponent
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        filterComponentActive: function filterComponentActive() {
            return dispatch(actions.filterComponentActive());
        },
        filterComponentNotActive: function filterComponentNotActive() {
            return dispatch(actions.filterComponentNotActive());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideBar);

/***/ }),

/***/ "./src/components/sideBar/filterComponent/FilterComponent.css":
/*!********************************************************************!*\
  !*** ./src/components/sideBar/filterComponent/FilterComponent.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src??postcss!./FilterComponent.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideBar/filterComponent/FilterComponent.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src/index.js??postcss!./FilterComponent.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/sideBar/filterComponent/FilterComponent.js":
/*!*******************************************************************!*\
  !*** ./src/components/sideBar/filterComponent/FilterComponent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _FilterComponent = __webpack_require__(/*! ./FilterComponent.css */ "./src/components/sideBar/filterComponent/FilterComponent.css");

var _FilterComponent2 = _interopRequireDefault(_FilterComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterComponent = function (_Component) {
    _inherits(FilterComponent, _Component);

    function FilterComponent() {
        _classCallCheck(this, FilterComponent);

        return _possibleConstructorReturn(this, (FilterComponent.__proto__ || Object.getPrototypeOf(FilterComponent)).apply(this, arguments));
    }

    _createClass(FilterComponent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var makesItemsForRender = this.props.makesItems.map(function (item) {
                return _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.makeItem },
                    _react2.default.createElement('input', { type: 'checkbox',
                        id: item,
                        name: 'makes',
                        value: item,
                        onChange: _this2.props.changeHandler }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: item },
                        item
                    )
                );
            });

            var modelsItemsForRender = this.props.modelsItems.map(function (item) {
                return _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.modelItem },
                    _react2.default.createElement('input', { type: 'checkbox',
                        id: item,
                        name: 'models',
                        value: item,
                        onChange: _this2.props.changeHandler }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: item },
                        item
                    )
                );
            });

            var inputClasses = [_FilterComponent2.default.selectLocation];
            if (!this.props.zipValid) {
                inputClasses.push(_FilterComponent2.default.invalid);
            }

            var errorMessageClasses = [_FilterComponent2.default.errorMessage];
            if (!this.props.zipValid) {
                errorMessageClasses.push(_FilterComponent2.default.errorMessageDisplay);
            }

            return _react2.default.createElement(
                'div',
                { className: _FilterComponent2.default.mainContainer },
                _react2.default.createElement(
                    'p',
                    { className: _FilterComponent2.default.resultsNumber },
                    this.props.resultsNumber
                ),
                _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.location },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Location'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: inputClasses.join(' ') },
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.radius },
                            _react2.default.createElement(
                                'div',
                                { className: _FilterComponent2.default.searchRadius },
                                'Search radius'
                            ),
                            _react2.default.createElement(
                                'select',
                                { name: 'radius',
                                    onChange: this.props.changeHandler },
                                _react2.default.createElement(
                                    'option',
                                    { value: '10' },
                                    '10 miles'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '20' },
                                    '20 miles'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '30' },
                                    '30 miles'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '40' },
                                    '40 miles'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '50' },
                                    '50 miles'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '75' },
                                    '75 miles'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '100' },
                                    '100 miles'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: errorMessageClasses.join(' ') },
                                'zip is not valid'
                            ),
                            _react2.default.createElement('input', { type: 'number',
                                name: 'zip',
                                placeholder: 'zip code',
                                onChange: this.props.onChangeInputNumber,
                                onBlur: this.props.changeHandler })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.condition },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Condition'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _FilterComponent2.default.conditionButtons },
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.allElements },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'all' },
                                'All'
                            ),
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'condition',
                                value: 'select',
                                onChange: this.props.changeHandler })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.new },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'condition' },
                                'New'
                            ),
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'condition',
                                value: 'New Car',
                                onChange: this.props.changeHandler })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.used },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'condition' },
                                'Used'
                            ),
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'condition',
                                value: 'Used Car',
                                onChange: this.props.changeHandler })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.year },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Year'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _FilterComponent2.default.yearSelect },
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.yearSelectElement },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'minYear' },
                                'Min'
                            ),
                            _react2.default.createElement(
                                'select',
                                { name: 'minYear',
                                    onChange: this.props.changeHandler },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'select' },
                                    'select'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2020' },
                                    '2020'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2019' },
                                    '2019'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2018' },
                                    '2018'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2017' },
                                    '2017'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2016' },
                                    '2016'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2015' },
                                    '2015'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2014' },
                                    '2014'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2013' },
                                    '2013'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2012' },
                                    '2012'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2011' },
                                    '2011'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2010' },
                                    '2010'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2009' },
                                    '2009'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2008' },
                                    '2008'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2007' },
                                    '2007'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2006' },
                                    '2006'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2005' },
                                    '2005'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2004' },
                                    '2004'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2003' },
                                    '2003'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2002' },
                                    '2002'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2001' },
                                    '2001'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2000' },
                                    '2000'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { fontWeight: 'bold',
                                    padding: '36px 20px 0 30px' } },
                            'to'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.yearSelectElement },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'maxYear' },
                                'Max'
                            ),
                            _react2.default.createElement(
                                'select',
                                { name: 'maxYear',
                                    onChange: this.props.changeHandler },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'select' },
                                    'select'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2020' },
                                    '2020'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2019' },
                                    '2019'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2018' },
                                    '2018'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2017' },
                                    '2017'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2016' },
                                    '2016'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2015' },
                                    '2015'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2014' },
                                    '2014'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2013' },
                                    '2013'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2012' },
                                    '2012'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2011' },
                                    '2011'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2010' },
                                    '2010'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2009' },
                                    '2009'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2008' },
                                    '2008'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2007' },
                                    '2007'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2006' },
                                    '2006'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2005' },
                                    '2005'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2004' },
                                    '2004'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2003' },
                                    '2003'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2002' },
                                    '2002'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2001' },
                                    '2001'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2000' },
                                    '2000'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.make },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Make'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _FilterComponent2.default.makes },
                        makesItemsForRender
                    )
                ),
                this.props.modelsItems.length > 0 ? _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.model },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Model'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _FilterComponent2.default.models },
                        modelsItemsForRender
                    )
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.price },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Price'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _FilterComponent2.default.selectPrice },
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.selectPriceElement },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'minPrice' },
                                'Min'
                            ),
                            _react2.default.createElement(
                                'select',
                                { name: 'minPrice',
                                    onChange: this.props.changeHandler },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'select' },
                                    'Min Price'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2000' },
                                    '$2,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '4000' },
                                    '$4,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '6000' },
                                    '$6,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '8000' },
                                    '$8,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '10000' },
                                    '$10,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '15000' },
                                    '$15,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '20000' },
                                    '$20,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '25000' },
                                    '$25,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '30000' },
                                    '$30,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '35000' },
                                    '$35,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '40000' },
                                    '$40,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '45000' },
                                    '$45,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '50000' },
                                    '$50,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '60000' },
                                    '$60,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '70000' },
                                    '$70,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '80000' },
                                    '$80,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '90000' },
                                    '$90,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '100000' },
                                    '$100,000'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { fontWeight: 'bold',
                                    padding: '36px 0 0 10px' } },
                            'to'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.selectPriceElement },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'maxPrice' },
                                'Max'
                            ),
                            _react2.default.createElement(
                                'select',
                                { name: 'maxPrice',
                                    onChange: this.props.changeHandler },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'select' },
                                    'Max Price'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '2000' },
                                    '$2,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '4000' },
                                    '$4,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '6000' },
                                    '$6,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '8000' },
                                    '$8,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '10000' },
                                    '$10,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '15000' },
                                    '$15,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '20000' },
                                    '$20,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '25000' },
                                    '$25,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '30000' },
                                    '$30,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '35000' },
                                    '$35,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '40000' },
                                    '$40,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '45000' },
                                    '$45,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '50000' },
                                    '$50,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '60000' },
                                    '$60,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '70000' },
                                    '$70,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '80000' },
                                    '$80,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '90000' },
                                    '$90,000'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: '100000' },
                                    '$100,000'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _FilterComponent2.default.mileage },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Mileage'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _FilterComponent2.default.mileageItems },
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '10000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '10,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '20000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '20,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '30000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '30,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '40000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '40,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '50000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '50,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '60000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '60,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '70000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '70,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '80000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '80,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '90000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '90,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '100000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '100,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '110000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '110,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '120000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '120,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '130000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '130,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '140000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '140,000 or less'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _FilterComponent2.default.mileageItem },
                            _react2.default.createElement('input', { type: 'radio',
                                name: 'mileage',
                                value: '150000',
                                onChange: this.props.changeHandler }),
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'mileageItem' },
                                '150,000 or less'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FilterComponent;
}(_react.Component);

exports.default = FilterComponent;

/***/ }),

/***/ "./src/components/sideBar/newSearch/NewSearch.css":
/*!********************************************************!*\
  !*** ./src/components/sideBar/newSearch/NewSearch.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src??postcss!./NewSearch.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sideBar/newSearch/NewSearch.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src/index.js??postcss!./NewSearch.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/sideBar/newSearch/NewSearch.js":
/*!*******************************************************!*\
  !*** ./src/components/sideBar/newSearch/NewSearch.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _NewSearch = __webpack_require__(/*! ./NewSearch.css */ "./src/components/sideBar/newSearch/NewSearch.css");

var _NewSearch2 = _interopRequireDefault(_NewSearch);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Actions = __webpack_require__(/*! ../../../reduxStore/searching/Actions */ "./src/reduxStore/searching/Actions.js");

var actions = _interopRequireWildcard(_Actions);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewSearch = function (_Component) {
    _inherits(NewSearch, _Component);

    function NewSearch() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NewSearch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewSearch.__proto__ || Object.getPrototypeOf(NewSearch)).call.apply(_ref, [this].concat(args))), _this), _this.changeValue = function (event) {

            _this.props.onChangeHandler(event.target.value, event.target.name);

            if (event.target === document.querySelector('#makesNewSearch')) {
                setTimeout(function () {
                    _axios2.default.post('/get_model', {
                        type: 'model',
                        params: _this.props.searchParams.make
                    }).then(function (response) {
                        if (response.data !== '') {
                            _this.props.setModels(response.data);
                        } else {
                            _this.props.resetModels();
                        }
                    });
                }, 500);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NewSearch, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var makes = this.props.allMakes.map(function (element) {
                return _react2.default.createElement(
                    'option',
                    { value: element },
                    element
                );
            });

            var selectedModelsRender = this.props.selectedModels.map(function (element) {
                return _react2.default.createElement(
                    'option',
                    { value: element },
                    element
                );
            });

            return _react2.default.createElement(
                'div',
                { className: _NewSearch2.default.container },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'select',
                        { name: 'condition',
                            onChange: function onChange(event) {
                                return _this2.changeValue(event);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: 'select' },
                            'New & Used Cars'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'New Car' },
                            'New'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: 'Used Car' },
                            'Used'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'select',
                        { id: 'makesNewSearch',
                            name: 'make',
                            onChange: function onChange(event) {
                                return _this2.changeValue(event);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: 'select' },
                            'All Makes'
                        ),
                        makes
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'select',
                        { name: 'model',
                            onChange: function onChange(event) {
                                return _this2.changeValue(event);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: 'select' },
                            'All Models'
                        ),
                        selectedModelsRender
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'select',
                        { name: 'maxPrice',
                            style: { borderBottom: '1px solid rgb(169, 169, 169)' },
                            onChange: function onChange(event) {
                                return _this2.changeValue(event);
                            } },
                        _react2.default.createElement(
                            'option',
                            { value: 'select' },
                            'Max Price'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '2000' },
                            '$2,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '4000' },
                            '$4,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '6000' },
                            '$6,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '8000' },
                            '$8,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '10000' },
                            '$10,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '15000' },
                            '$15,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '20000' },
                            '$20,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '25000' },
                            '$25,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '30000' },
                            '$30,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '35000' },
                            '$35,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '40000' },
                            '$40,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '45000' },
                            '$45,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '50000' },
                            '$50,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '60000' },
                            '$60,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '70000' },
                            '$70,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '80000' },
                            '$80,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '90000' },
                            '$90,000'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '100000' },
                            '$100,000'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: this.props.searchItems },
                        'Search'
                    )
                )
            );
        }
    }]);

    return NewSearch;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        allMakes: state.searchReducer.allMakes,
        selectedModels: state.searchReducer.selectedModels,
        searchParams: state.searchReducer.searchParams
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onChangeHandler: function onChangeHandler(value, name) {
            return dispatch(actions.onChangeHandler(value, name));
        },
        setModels: function setModels(data) {
            return dispatch(actions.setModels(data));
        },
        resetModels: function resetModels() {
            return dispatch(actions.resetModels());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewSearch);

/***/ }),

/***/ "./src/containers/searchResults/SearchResults.css":
/*!********************************************************!*\
  !*** ./src/containers/searchResults/SearchResults.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./SearchResults.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/searchResults/SearchResults.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??postcss!./SearchResults.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/containers/searchResults/SearchResults.js":
/*!*******************************************************!*\
  !*** ./src/containers/searchResults/SearchResults.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _urlsAPI = __webpack_require__(/*! ../../urlsAPI/urlsAPI */ "./src/urlsAPI/urlsAPI.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Actions = __webpack_require__(/*! ../../reduxStore/searching/Actions */ "./src/reduxStore/searching/Actions.js");

var actions = _interopRequireWildcard(_Actions);

var _SearchResults = __webpack_require__(/*! ./SearchResults.css */ "./src/containers/searchResults/SearchResults.css");

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _ListingItem = __webpack_require__(/*! ../../components/listingItem/ListingItem */ "./src/components/listingItem/ListingItem.js");

var _ListingItem2 = _interopRequireDefault(_ListingItem);

var _SideBar = __webpack_require__(/*! ../../components/sideBar/SideBar */ "./src/components/sideBar/SideBar.js");

var _SideBar2 = _interopRequireDefault(_SideBar);

var _Spinner = __webpack_require__(/*! ../../components/UIElements/spinner/Spinner */ "./src/components/UIElements/spinner/Spinner.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResults = function (_Component) {
    _inherits(SearchResults, _Component);

    function SearchResults() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchResults);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            zipCodes: []
        }, _this.pagination = function () {
            var shortArray = _this.props.searchResults.slice(0, _this.props.resultsPerPage);
            var pagesArray = [];

            for (var i = 1; i <= _this.props.pages; i++) {
                pagesArray.push(i);
            }

            var activePages = [];

            activePages[0] = true;

            for (var _i = 1; _i < pagesArray.length; _i++) {
                activePages.push(false);
            }

            return {
                shortArray: shortArray,
                pagesArray: pagesArray,
                activePages: activePages
            };
        }, _this.setValues = function () {
            var elements = document.querySelectorAll('.FilterComponent__conditionButtons__1bxUx input');

            if (_this.props.params.condition === 'select') {
                elements[0].checked = true;
            } else if (_this.props.params.condition === 'New Car') {
                elements[1].checked = true;
            } else if (_this.props.params.condition === 'Used Car') {
                elements[2].checked = true;
            }

            var makesRender = document.querySelectorAll('.FilterComponent__makes__ffLru input');
            makesRender.forEach(function (make) {
                if (_this.props.params.makes.includes(make.value)) {
                    make.checked = true;
                }
            });

            var modelsRender = document.querySelectorAll('.FilterComponent__models__1egS_ input');
            modelsRender.forEach(function (model) {
                if (_this.props.params.models.includes(model.value)) {
                    model.checked = true;
                }
            });
        }, _this.init = function () {
            _this.props.loadingActive();

            if (_this.props.searchResults.length === 0) {
                if (_this.props.params.zip !== '') {
                    _axios2.default.get(_urlsAPI.proxy + 'https://www.zipcodeapi.com/rest/' + _urlsAPI.zipAPIKey + '/radius.json/' + _this.props.params.zip + '/' + _this.props.params.radius + '/mile').then(function (response) {
                        var zipCodes = response.data.zip_codes.map(function (current) {
                            return current.zip_code;
                        });

                        _this.setState({
                            zipCodes: zipCodes
                        }, function () {
                            var fd = new FormData();

                            for (var param in _this.props.params) {
                                if (_this.props.params[param] !== 'select' && param !== 'radius' && param !== 'zip') {
                                    fd.append(param, _this.props.params[param]);
                                }
                            }
                            _this.state.zipCodes.forEach(function (zip) {
                                fd.append('zipCodes[]', zip);
                            });
                            _axios2.default.post('/get_items_by_zipCode', fd).then(function (response) {

                                if (_this.props.params['make'] !== 'select') {
                                    _this.props.addMake(_this.props.params['make']);
                                }

                                if (_this.props.params['model'] !== 'select') {
                                    _this.props.addModel(_this.props.params['model']);
                                }

                                _this.props.setSearchResults(response.data);

                                _this.props.loadingNotActive();

                                var data = _this.pagination();

                                _this.props.setActiveItems(data.shortArray);
                                _this.props.setPagesArray(data.pagesArray);
                                _this.props.setActivePages(data.activePages);

                                _this.setValues();

                                var radius = document.querySelector('.FilterComponent__radius__1actv select option[value="' + _this.props.params.radius + '"]');
                                radius.selected = true;

                                var zip = document.querySelector('.FilterComponent__selectLocation__13ILr input');
                                zip.value = _this.props.params.zip;
                            });
                        });
                    });
                } else {
                    var fd = new FormData();

                    for (var param in _this.props.params) {
                        if (_this.props.params[param] !== 'select' && _this.props.params[param] !== []) {
                            fd.append(param, _this.props.params[param]);
                        }
                    }
                    _axios2.default.post('/get_all_items', fd).then(function (response) {

                        if (_this.props.params['make'] !== 'select') {
                            _this.props.addMake(_this.props.params['make']);
                        }

                        if (_this.props.params['model'] !== 'select') {
                            _this.props.addModel(_this.props.params['model']);
                        }

                        _this.props.setSearchResults(response.data);

                        _this.props.loadingNotActive();

                        var data = _this.pagination();

                        _this.props.setActiveItems(data.shortArray);
                        _this.props.setPagesArray(data.pagesArray);
                        _this.props.setActivePages(data.activePages);

                        _this.setValues();
                    });
                }
            } else {
                _this.props.loadingNotActive();
                _this.setValues();

                if (_this.props.params.zip !== '') {
                    var radius = document.querySelector('.FilterComponent__radius__1actv select option[value="' + _this.props.params.radius + '"]');
                    radius.selected = true;

                    var zip = document.querySelector('.FilterComponent__selectLocation__13ILr input');
                    zip.value = _this.props.params.zip;
                }
            }
        }, _this.changeHandler = function (event) {

            if (event.target.type === 'checkbox') {
                if (event.target.checked && event.target.name === 'makes') {

                    _this.props.addMake(event.target.value);

                    _axios2.default.post('/get_model', {
                        type: 'model',
                        params: event.target.value
                    }).then(function (response) {
                        _this.props.addItemsToModels(response.data);
                    });
                } else if (!event.target.checked && event.target.name === 'makes') {

                    _this.props.removeMake(event.target.value);

                    _axios2.default.post('/get_model', {
                        type: 'model',
                        params: event.target.value
                    }).then(function (response) {
                        var elementsDOM = document.querySelectorAll('.FilterComponent__models__1egS_ input');
                        elementsDOM.forEach(function (param) {
                            param.checked = false;
                        });

                        response.data.forEach(function (element) {
                            if (_this.props.params.models.includes(element)) {
                                _this.props.removeModel(element);
                            }
                        });

                        _this.props.removeItemsFromModels(response.data);

                        var models = document.querySelectorAll('.FilterComponent__models__1egS_ input');
                        models.forEach(function (model) {
                            if (_this.props.params.models.includes(model.value)) {
                                model.checked = true;
                            }
                        });
                    });
                } else if (event.target.checked && event.target.name === 'models') {
                    _this.props.addModel(event.target.value);
                } else if (!event.target.checked && event.target.name === 'models') {
                    _this.props.removeModel(event.target.value);
                }
            } else if (event.target.type === 'number') {
                if (event.target.value.length !== 5 && event.target.value.length !== 0) {
                    _this.props.zipIsNotValid();
                } else if (event.target.value.length === 5 || event.target.value.length === 0) {
                    _this.props.zipIsValid();
                }

                _this.props.onChangeHandler(event.target.value, event.target.name);
            } else {
                _this.props.onChangeHandler(event.target.value, event.target.name);
            }

            setTimeout(function () {
                var fd = new FormData();

                for (var filter in _this.props.params) {
                    if (filter === 'makes') {
                        _this.props.params.makes.forEach(function (current) {
                            fd.append('makes[]', current);
                        });
                    } else if (filter === 'models') {
                        _this.props.params.models.forEach(function (current) {
                            fd.append('models[]', current);
                        });
                    } else {
                        if (_this.props.params[filter] !== 'select') {
                            fd.append(filter, _this.props.params[filter]);
                        }
                    }
                }

                if (_this.props.params.zip === '') {
                    _this.props.loadingActive();
                    _axios2.default.post('/filter_items', fd).then(function (response) {
                        var data = response.data;
                        data.forEach(function (current) {
                            current.year = current.year.toString();
                            current.price = current.price.toString();
                            current.mileage = current.mileage.toString();
                        });

                        _this.props.setSearchResults(data);

                        _this.props.loadingNotActive();

                        var dataPagination = _this.pagination();

                        _this.props.setActiveItems(dataPagination.shortArray);
                        _this.props.setPagesArray(dataPagination.pagesArray);
                        _this.props.setActivePages(dataPagination.activePages);
                    });
                } else if (_this.props.params.zip !== '' && _this.props.zipValid) {
                    _this.props.loadingActive();
                    _axios2.default.get(_urlsAPI.proxy + 'https://www.zipcodeapi.com/rest/' + _urlsAPI.zipAPIKey + '/radius.json/' + _this.props.params.zip + '/' + _this.props.params.radius + '/mile').then(function (response) {
                        var zipCodes = response.data.zip_codes.map(function (current) {
                            return current.zip_code;
                        });

                        zipCodes.forEach(function (element) {
                            fd.append('zipCodes[]', element);
                        });
                        _axios2.default.post('/filter_items_withZipCodes', fd).then(function (response) {
                            var data = response.data;
                            data.forEach(function (current) {
                                current.year = current.year.toString();
                                current.price = current.price.toString();
                                current.mileage = current.mileage.toString();
                            });

                            _this.props.setSearchResults(data);

                            _this.props.loadingNotActive();

                            var dataPagination = _this.pagination();

                            _this.props.setActiveItems(dataPagination.shortArray);
                            _this.props.setPagesArray(dataPagination.pagesArray);
                            _this.props.setActivePages(dataPagination.activePages);
                        });
                    });
                }
            }, 1000);
        }, _this.onChangeInputNumber = function (event) {
            if (event.target.value.length === 6) {
                event.target.value = event.target.value.slice(0, event.target.value.length - 1);
            }
        }, _this.searchItems = function () {
            _this.props.filterComponentActive();
            _this.init();
        }, _this.switchPageHandler = function (page) {
            _this.props.switchPage(page);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchResults, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.init();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var activePages = this.props.activePages;
            var pages = this.props.pagesArray.map(function (page, index) {
                var classList = [_SearchResults2.default.page];
                if (activePages[index]) {
                    classList.push(_SearchResults2.default.activeElement);
                }
                return _react2.default.createElement(
                    'p',
                    { className: classList.join(' '),
                        onClick: function onClick() {
                            return _this2.switchPageHandler(page);
                        } },
                    page
                );
            });
            var items = this.props.activeItems.map(function (element) {
                return _react2.default.createElement(_ListingItem2.default, { item: element,
                    searchItem: true });
            });

            var component = void 0;

            if (this.props.activeItems.length > 0) {
                component = _react2.default.createElement(
                    'div',
                    { className: _SearchResults2.default.items },
                    items,
                    _react2.default.createElement(
                        'div',
                        { className: _SearchResults2.default.pages },
                        this.props.pages > 1 ? pages : null
                    )
                );
            } else {
                component = _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center',
                            fontWeight: 'bold' } },
                    'There are no results with this parameters'
                );
            }
            return _react2.default.createElement(
                'div',
                { className: _SearchResults2.default.mainContainer },
                _react2.default.createElement(
                    'div',
                    { className: _SearchResults2.default.title },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Search Results'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _SearchResults2.default.contentContainer },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_SideBar2.default, { resultsNumber: this.props.searchResults.length + ' results',
                                changeHandler: function changeHandler(event) {
                                    return _this2.changeHandler(event);
                                },
                                makesItems: this.props.allMakes,
                                modelsItems: this.props.selectedModels,
                                onChangeInputNumber: function onChangeInputNumber(event) {
                                    return _this2.onChangeInputNumber(event);
                                },
                                zipValid: this.props.zipValid,
                                searchItems: function searchItems() {
                                    return _this2.searchItems();
                                } })
                        ),
                        this.props.loading ? _react2.default.createElement(_Spinner2.default, null) : component
                    )
                )
            );
        }
    }]);

    return SearchResults;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        params: state.searchReducer.searchParams,
        allMakes: state.searchReducer.allMakes,
        selectedModels: state.searchReducer.selectedModels,
        zipValid: state.searchReducer.zipIsValid,
        loading: state.searchReducer.loading,
        searchResults: state.searchReducer.searchResults,
        resultsPerPage: state.searchReducer.resultsPerPage,
        pages: state.searchReducer.pages,
        activePages: state.searchReducer.activePages,
        pagesArray: state.searchReducer.pagesArray,
        activeItems: state.searchReducer.activeItems
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addItemsToModels: function addItemsToModels(data) {
            return dispatch(actions.addItemsToModels(data));
        },
        removeItemsFromModels: function removeItemsFromModels(data) {
            return dispatch(actions.removeItemsFromModels(data));
        },
        zipIsValid: function zipIsValid() {
            return dispatch(actions.zipIsValid());
        },
        zipIsNotValid: function zipIsNotValid() {
            return dispatch(actions.zipIsNotValid());
        },
        loadingActive: function loadingActive() {
            return dispatch(actions.loadingActive());
        },
        loadingNotActive: function loadingNotActive() {
            return dispatch(actions.loadingNotActive());
        },
        filterComponentActive: function filterComponentActive() {
            return dispatch(actions.filterComponentActive());
        },
        setSearchResults: function setSearchResults(results) {
            return dispatch(actions.setSearchResults(results));
        },
        addMake: function addMake(make) {
            return dispatch(actions.addMake(make));
        },
        addModel: function addModel(model) {
            return dispatch(actions.addModel(model));
        },
        setActiveItems: function setActiveItems(activeItems) {
            return dispatch(actions.setActiveItems(activeItems));
        },
        setPagesArray: function setPagesArray(pagesArray) {
            return dispatch(actions.setPagesArray(pagesArray));
        },
        setActivePages: function setActivePages(activePages) {
            return dispatch(actions.setActivePages(activePages));
        },
        removeMake: function removeMake(make) {
            return dispatch(actions.removeMake(make));
        },
        removeModel: function removeModel(model) {
            return dispatch(actions.removeModel(model));
        },
        onChangeHandler: function onChangeHandler(value, name) {
            return dispatch(actions.onChangeHandler(value, name));
        },
        switchPage: function switchPage(page) {
            return dispatch(actions.switchPage(page));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchResults);

/***/ }),

/***/ "./src/urlsAPI/urlsAPI.js":
/*!********************************!*\
  !*** ./src/urlsAPI/urlsAPI.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//export const checkAuthentication = 'http://localhost/shopping/backend/public/checkAuth';

var proxy = exports.proxy = 'https://cors-anywhere.herokuapp.com/';

var zipAPIKey = exports.zipAPIKey = 'M6tAgLr5jvPCTiPx9WHDUfQCwrWICFpybdfCuKU8JdrQIahwQWkFYELI81uw01k7';

/***/ })

}]);
//# sourceMappingURL=9.js.map