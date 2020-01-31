(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/advicesAllItems/advicesItem/AdvicesItem.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/advicesAllItems/advicesItem/AdvicesItem.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".AdvicesItem__wrapper__XKbxy {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-top: 20px;\r\n}\r\n\r\n.AdvicesItem__nameAndDate__mzXFy p {\r\n    color: #292525;\r\n    padding: 10px 0 22px 0;\r\n}\r\n\r\n.AdvicesItem__content__-DsWu {\r\n    padding-left: 25px;\r\n}\r\n\r\n.AdvicesItem__content__-DsWu h4 {\r\n    margin: 0;\r\n}\r\n\r\n.AdvicesItem__wrapper__XKbxy:hover{\r\n    cursor:pointer;\r\n}", ""]);
// Exports
exports.locals = {
	"wrapper": "AdvicesItem__wrapper__XKbxy",
	"nameAndDate": "AdvicesItem__nameAndDate__mzXFy",
	"content": "AdvicesItem__content__-DsWu"
};
module.exports = exports;


/***/ }),

/***/ "./src/components/advicesAllItems/AdvicesAllItems.js":
/*!***********************************************************!*\
  !*** ./src/components/advicesAllItems/AdvicesAllItems.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _AdvicesItem = __webpack_require__(/*! ./advicesItem/AdvicesItem */ "./src/components/advicesAllItems/advicesItem/AdvicesItem.js");

var _AdvicesItem2 = _interopRequireDefault(_AdvicesItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdvicesAllItems = function AdvicesAllItems(props) {
    var items = props.elements.map(function (element) {
        return _react2.default.createElement(_AdvicesItem2.default, { element: element,
            reviews: props.reviews });
    });

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        items
    );
};

exports.default = AdvicesAllItems;

/***/ }),

/***/ "./src/components/advicesAllItems/advicesItem/AdvicesItem.css":
/*!********************************************************************!*\
  !*** ./src/components/advicesAllItems/advicesItem/AdvicesItem.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src??postcss!./AdvicesItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/advicesAllItems/advicesItem/AdvicesItem.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src/index.js??postcss!./AdvicesItem.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/advicesAllItems/advicesItem/AdvicesItem.js":
/*!*******************************************************************!*\
  !*** ./src/components/advicesAllItems/advicesItem/AdvicesItem.js ***!
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

var _AdvicesItem = __webpack_require__(/*! ./AdvicesItem.css */ "./src/components/advicesAllItems/advicesItem/AdvicesItem.css");

var _AdvicesItem2 = _interopRequireDefault(_AdvicesItem);

var _HeroImage = __webpack_require__(/*! ../../../components/heroImage/HeroImage */ "./src/components/heroImage/HeroImage.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdvicesItem = function (_Component) {
    _inherits(AdvicesItem, _Component);

    function AdvicesItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AdvicesItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AdvicesItem.__proto__ || Object.getPrototypeOf(AdvicesItem)).call.apply(_ref, [this].concat(args))), _this), _this.elementClickHandler = function (id) {
            _this.props.history.push('/buying_advices/' + id);
        }, _this.getReviewItem = function (id) {
            _this.props.history.push('/reviews/' + id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AdvicesItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$element = this.props.element,
                _id = _props$element._id,
                title = _props$element.title,
                content = _props$element.content,
                image = _props$element.image,
                created_at = _props$element.created_at,
                author = _props$element.author;


            return _react2.default.createElement(
                'div',
                { className: _AdvicesItem2.default.wrapper,
                    onClick: this.props.reviews ? function () {
                        return _this2.getReviewItem(_id);
                    } : function () {
                        return _this2.elementClickHandler(_id);
                    } },
                image !== 'no image' ? _react2.default.createElement(_HeroImage.BuyingAdviceImage, { img: image }) : _react2.default.createElement(_HeroImage.BuyingAdviceItemNoImage, { img: '../../../assets/no_photo.jpg' }),
                _react2.default.createElement(
                    'div',
                    { className: _AdvicesItem2.default.content },
                    _react2.default.createElement(
                        'h4',
                        null,
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _AdvicesItem2.default.nameAndDate },
                        _react2.default.createElement(
                            'p',
                            null,
                            'By ' + author + ' on ' + created_at.substring(0, 10)
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        content.length > 350 ? content.substring(0, 350) + '...' : content
                    )
                )
            );
        }
    }]);

    return AdvicesItem;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(AdvicesItem);

/***/ }),

/***/ "./src/components/heroImage/HeroImage.js":
/*!***********************************************!*\
  !*** ./src/components/heroImage/HeroImage.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageRecommendedItem = exports.ReviewItemImage = exports.ListingInfoScrollImageItem = exports.ListingMainImage = exports.ItemNoImage = exports.BuyingAdviceItemNoImage = exports.BuyingAdviceItemImage = exports.BuyingAdviceImage = exports.ImageListing = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: ', '\n    margin: 0; \n'], ['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: ', '\n    margin: 0; \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background: url(data:image/png;base64,', ') no-repeat center center;\n    background-size: cover;\n    min-height: 240px;\n    min-width: 300px;\n    margin: 0; \n'], ['\n    background: url(data:image/png;base64,', ') no-repeat center center;\n    background-size: cover;\n    min-height: 240px;\n    min-width: 300px;\n    margin: 0; \n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background: url(data:image/png;base64,', ') no-repeat center center;\n    background-size: cover;\n    height: 250px;\n    width: 330px;\n    min-width: 330px;\n    margin: 0; \n'], ['\n    background: url(data:image/png;base64,', ') no-repeat center center;\n    background-size: cover;\n    height: 250px;\n    width: 330px;\n    min-width: 330px;\n    margin: 0; \n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background: url(data:image/png;base64,', ') no-repeat center center;\n    background-size: cover;\n    height: 350px;\n    width: 100%; \n'], ['\n    background: url(data:image/png;base64,', ') no-repeat center center;\n    background-size: cover;\n    height: 350px;\n    width: 100%; \n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 250px;\n    width: 330px;\n    min-width: 330px; \n'], ['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 250px;\n    width: 330px;\n    min-width: 330px; \n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 350px;\n    width: 100%; \n'], ['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 350px;\n    width: 100%; \n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 350px;\n    width: 730px;\n'], ['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 350px;\n    width: 730px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 40px;\n    width: 93px;\n    border: ', '\n'], ['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 40px;\n    width: 93px;\n    border: ', '\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 150px;\n    width: 280px;\n'], ['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 150px;\n    width: 280px;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 150px;\n    width: 270px;\n    margin: 0; \n'], ['\n    background: url(', ') no-repeat center center;\n    background-size: cover;\n    height: 150px;\n    width: 270px;\n    margin: 0; \n']);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroImage = _styledComponents2.default.div(_templateObject, function (props) {
    return props.img;
}, function (props) {
    return props.sellPage ? '480px' : props.loggedIn ? '450px' : props.listings ? '240px' : '700px';
});

var ImageListing = exports.ImageListing = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.img;
});

var BuyingAdviceImage = exports.BuyingAdviceImage = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.img;
});

var BuyingAdviceItemImage = exports.BuyingAdviceItemImage = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.img;
});

var BuyingAdviceItemNoImage = exports.BuyingAdviceItemNoImage = _styledComponents2.default.div(_templateObject5, function (props) {
    return props.img;
});

var ItemNoImage = exports.ItemNoImage = _styledComponents2.default.div(_templateObject6, function (props) {
    return props.img;
});

var ListingMainImage = exports.ListingMainImage = _styledComponents2.default.div(_templateObject7, function (props) {
    return props.img;
});

var ListingInfoScrollImageItem = exports.ListingInfoScrollImageItem = _styledComponents2.default.div(_templateObject8, function (props) {
    return props.img;
}, function (props) {
    return props.active ? '2px solid var(--mainRed);' : '2px solid var(--mainWhite)';
});

var ReviewItemImage = exports.ReviewItemImage = _styledComponents2.default.div(_templateObject9, function (props) {
    return props.img;
});

var ImageRecommendedItem = exports.ImageRecommendedItem = _styledComponents2.default.div(_templateObject10, function (props) {
    return props.img;
});

exports.default = HeroImage;

/***/ })

}]);
//# sourceMappingURL=4.js.map