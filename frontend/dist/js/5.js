(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loginComponent/LoginComponent.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/loginComponent/LoginComponent.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".LoginComponent__form__3BkZc {\r\n    width: 25%;\r\n    margin: 0 auto;\r\n    font-family: 'Rubik';\r\n    padding-top: 20px;\r\n}\r\n\r\n.LoginComponent__form__3BkZc label, .LoginComponent__form__3BkZc input {\r\n    display: block;\r\n}\r\n\r\n.LoginComponent__form__3BkZc label {\r\n    padding: 15px 0 5px 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.LoginComponent__form__3BkZc input {\r\n    width: 100%;\r\n    border-radius: 8px;\r\n    font-size: 1.1em;\r\n    padding-left: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.LoginComponent__form__3BkZc p {\r\n    color: var(--mainRed);\r\n}", ""]);
// Exports
exports.locals = {
	"form": "LoginComponent__form__3BkZc"
};
module.exports = exports;


/***/ }),

/***/ "./src/components/loginComponent/LoginComponent.css":
/*!**********************************************************!*\
  !*** ./src/components/loginComponent/LoginComponent.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./LoginComponent.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loginComponent/LoginComponent.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??postcss!./LoginComponent.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/loginComponent/LoginComponent.js":
/*!*********************************************************!*\
  !*** ./src/components/loginComponent/LoginComponent.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LoginComponent = __webpack_require__(/*! ./LoginComponent.css */ "./src/components/loginComponent/LoginComponent.css");

var _LoginComponent2 = _interopRequireDefault(_LoginComponent);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Actions = __webpack_require__(/*! ../../reduxStore/authentication/Actions */ "./src/reduxStore/authentication/Actions.js");

var actions = _interopRequireWildcard(_Actions);

var _Inputs = __webpack_require__(/*! ../UIElements/inputs/Inputs */ "./src/components/UIElements/inputs/Inputs.js");

var _Inputs2 = _interopRequireDefault(_Inputs);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _Spinner = __webpack_require__(/*! ../UIElements/spinner/Spinner */ "./src/components/UIElements/spinner/Spinner.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginComponent = function (_Component) {
    _inherits(LoginComponent, _Component);

    function LoginComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LoginComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            elements: {
                email: {
                    type: 'email',
                    value: '',
                    valid: true,
                    touched: false,
                    errorMessage: ''
                },
                password: {
                    type: 'password',
                    value: '',
                    valid: true,
                    touched: false,
                    errorMessage: ''
                }
            },
            formIsValid: true
        }, _this.onChangeHandler = function (event, current) {

            var copyElements = _extends({}, _this.state.elements);

            copyElements[current.type].touched = true;
            copyElements[current.type].value = event.target.value;

            _this.setState({
                elements: copyElements
            });
        }, _this.validationData = function (element) {
            var copyElements = _extends({}, _this.state.elements);
            if (copyElements[element.type].value === '') {
                copyElements[element.type].valid = false;
                copyElements[element.type].errorMessage = 'Field cannot be empty';
            } else {
                copyElements[element.type].valid = true;
                copyElements[element.type].errorMessage = '';
            }

            _this.setState({
                elements: copyElements
            });
        }, _this.login = function (event) {
            event.preventDefault();

            if (_this.state.elements.email.value !== '' && _this.state.elements.password.value !== '') {
                _this.props.init();
                _axios2.default.post('/auth_user', {
                    email: _this.state.elements.email.value,
                    password: _this.state.elements.password.value
                }).then(function (response) {
                    console.log(response.data);
                    var copyElements = _extends({}, _this.state.elements);

                    if (response.data === 0) {
                        _this.props.removeSpinner();
                        copyElements['email'].valid = false;
                        copyElements['password'].valid = false;

                        _this.setState({
                            elements: copyElements,
                            formIsValid: false
                        });
                    } else if (response.data !== 0) {
                        _this.props.userWasLoggedIn();

                        copyElements['email'].valid = true;
                        copyElements['password'].valid = true;
                        copyElements['email'].errorMessage = '';
                        copyElements['password'].errorMessage = '';

                        _this.setState({
                            elements: copyElements,
                            formIsValid: true
                        });
                    }
                    _this.props.getEmail();
                });
            } else {
                var copyElements = _extends({}, _this.state.elements);
                copyElements['email'].valid = false;
                copyElements['password'].valid = false;
                copyElements['email'].touched = true;
                copyElements['password'].touched = true;
                copyElements['email'].errorMessage = 'Field cannot be empty';
                copyElements['password'].errorMessage = 'Field cannot be empty';

                _this.setState({
                    elements: copyElements
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoginComponent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var arrayOfInputs = [];

            for (var prop in this.state.elements) {
                arrayOfInputs.push(this.state.elements[prop]);
            }

            var inputElements = arrayOfInputs.map(function (current) {
                return _react2.default.createElement(_Inputs2.default, { element: current.type,
                    value: current.value,
                    valid: current.valid,
                    touched: current.touched,
                    error: current.errorMessage,
                    onChangeHandler: function onChangeHandler(event) {
                        return _this2.onChangeHandler(event, current);
                    },
                    onBlurHandler: function onBlurHandler() {
                        return _this2.validationData(current);
                    } });
            });

            var component = _react2.default.createElement(
                'form',
                { className: _LoginComponent2.default.form,
                    onSubmit: function onSubmit(event) {
                        return _this2.login(event);
                    } },
                !this.state.formIsValid ? _react2.default.createElement(
                    'p',
                    null,
                    'Login or password are not correct'
                ) : null,
                inputElements,
                _react2.default.createElement(_Inputs2.default, { element: 'login' })
            );

            if (this.props.loading) {
                component = _react2.default.createElement(_Spinner2.default, null);
            }

            if (this.props.userIsLoggedIn) {
                component = _react2.default.createElement(_reactRouterDom.Redirect, { to: 'sell_car' });
            }

            return component;
        }
    }]);

    return LoginComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        userIsLoggedIn: state.authReducer.userIsLoggedIn,
        loading: state.authReducer.loading
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        userWasLoggedIn: function userWasLoggedIn() {
            return dispatch(actions.userWasLoggedIn());
        },
        init: function init() {
            return dispatch(actions.init());
        },
        removeSpinner: function removeSpinner() {
            return dispatch(actions.removeSpinner());
        },
        getEmail: function getEmail() {
            return dispatch(actions.getEmail());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginComponent);

/***/ })

}]);
//# sourceMappingURL=5.js.map