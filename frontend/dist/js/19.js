(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/containers/logout_page/Logout.js":
/*!**********************************************!*\
  !*** ./src/containers/logout_page/Logout.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Actions = __webpack_require__(/*! ../../reduxStore/authentication/Actions */ "./src/reduxStore/authentication/Actions.js");

var actions = _interopRequireWildcard(_Actions);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_Component) {
    _inherits(Logout, _Component);

    function Logout() {
        _classCallCheck(this, Logout);

        return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
    }

    _createClass(Logout, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.logout();
        }
    }, {
        key: 'render',
        value: function render() {
            var component = null;

            if (this.props.userIsLoggedIn === false) {
                component = _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
            return component;
        }
    }]);

    return Logout;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        userIsLoggedIn: state.authReducer.userIsLoggedIn
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        logout: function logout() {
            return dispatch(actions.logout());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Logout);

/***/ })

}]);
//# sourceMappingURL=19.js.map