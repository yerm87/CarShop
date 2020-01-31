(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/create_listing/CreateListing.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/containers/create_listing/CreateListing.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".CreateListing__wrapperListing__2BA2C {\r\n    background-color: var(--mainWhite);\r\n    padding: 100px 0 40px 70px;\r\n    font-family: 'Montserrat';\r\n    width: 40%;\r\n}\r\n\r\n.CreateListing__wrapperListing__2BA2C p {\r\n    color: var(--mainRed);\r\n}\r\n\r\n.CreateListing__wrapperListing__2BA2C h1 {\r\n    margin: 0;\r\n    color: var(--mainBlue);\r\n}\r\n\r\n.CreateListing__drop__1uTlS {\r\n    padding: 90px;\r\n    border: 3px dashed rgb(175, 155, 155);\r\n    width: 60%;\r\n    margin: 20px 0;\r\n    text-align: center;\r\n}\r\n\r\n.CreateListing__image__PXnjY {\r\n    border-radius: 8px;\r\n    border: 1px solid gray;\r\n    padding: 6px;\r\n    text-align: center;\r\n}\r\n\r\n.CreateListing__image__PXnjY img {\r\n    max-width: 110px;\r\n    max-height: 70px;\r\n}\r\n\r\n.CreateListing__images__2lYnj {\r\n    display: grid;\r\n    width: 60%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-column-gap: 14px;\r\n    grid-row-gap: 14px;\r\n}\r\n\r\n.CreateListing__inputs__2u_G8 {\r\n    font-family: 'Rubik';\r\n    padding-top: 20px;\r\n}\r\n\r\n.CreateListing__inputs__2u_G8 label, .CreateListing__inputs__2u_G8 input {\r\n    display: block;\r\n}\r\n\r\n.CreateListing__inputs__2u_G8 label {\r\n    padding: 8px 0 5px 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.CreateListing__inputs__2u_G8 input {\r\n    width: 100%;\r\n    border-radius: 8px;\r\n    \r\n    font-size: 1.1em;\r\n    padding-left: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.CreateListing__inputs__2u_G8 p {\r\n    color: var(--mainRed);\r\n}\r\n\r\n.CreateListing__vehicleInfo__9FJ1V {\r\n    padding-bottom: 40px;\r\n    border-bottom: 1px solid gray;\r\n}\r\n\r\n.CreateListing__contactData__3qzfc h2 {\r\n    color: var(--mainBlue);\r\n}\r\n\r\n.CreateListing__image__PXnjY img {\r\n    max-width: 110px;\r\n    max-height: 70px;\r\n}\r\n\r\n.CreateListing__imageWrapper__3vYJQ {\r\n    position: relative;\r\n}\r\n\r\n.CreateListing__deleteButton__33l3c {\r\n    display: none;\r\n    position: absolute;\r\n    width: 19px;\r\n    height: 19px;\r\n    top: 5px;\r\n    right: 5px;\r\n    background-color: var(--mainRed);\r\n    color: var(--mainWhite);\r\n    font-weight: bold;\r\n    border-radius: 14px;\r\n    cursor: pointer;\r\n}\r\n\r\n.CreateListing__image__PXnjY:hover .CreateListing__deleteButton__33l3c {\r\n    display: block;\r\n}\r\n", ""]);
// Exports
exports.locals = {
	"wrapperListing": "CreateListing__wrapperListing__2BA2C",
	"drop": "CreateListing__drop__1uTlS",
	"image": "CreateListing__image__PXnjY",
	"images": "CreateListing__images__2lYnj",
	"inputs": "CreateListing__inputs__2u_G8",
	"vehicleInfo": "CreateListing__vehicleInfo__9FJ1V",
	"contactData": "CreateListing__contactData__3qzfc",
	"imageWrapper": "CreateListing__imageWrapper__3vYJQ",
	"deleteButton": "CreateListing__deleteButton__33l3c"
};
module.exports = exports;


/***/ }),

/***/ "./src/containers/create_listing/CreateListing.css":
/*!*********************************************************!*\
  !*** ./src/containers/create_listing/CreateListing.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./CreateListing.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/create_listing/CreateListing.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??postcss!./CreateListing.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/containers/create_listing/CreateListing.js":
/*!********************************************************!*\
  !*** ./src/containers/create_listing/CreateListing.js ***!
  \********************************************************/
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

var _CreateListing = __webpack_require__(/*! ./CreateListing.css */ "./src/containers/create_listing/CreateListing.css");

var _CreateListing2 = _interopRequireDefault(_CreateListing);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _Inputs = __webpack_require__(/*! ../../components/UIElements/inputs/Inputs */ "./src/components/UIElements/inputs/Inputs.js");

var _Inputs2 = _interopRequireDefault(_Inputs);

var _reactDropzone = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _Spinner = __webpack_require__(/*! ../../components/UIElements/spinner/Spinner */ "./src/components/UIElements/spinner/Spinner.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _urlsAPI = __webpack_require__(/*! ../../urlsAPI/urlsAPI */ "./src/urlsAPI/urlsAPI.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateListing = function (_Component) {
    _inherits(CreateListing, _Component);

    function CreateListing() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CreateListing);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateListing.__proto__ || Object.getPrototypeOf(CreateListing)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            elements: {
                year: {
                    type: 'year',
                    value: [],
                    active: true,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                make: {
                    type: 'make',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                model: {
                    type: 'model',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                bodyStyle: {
                    type: 'bodyStyle',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                transmission: {
                    type: 'transmission',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                exteriorColor: {
                    type: 'exteriorColor',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                interiorColor: {
                    type: 'interiorColor',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                numberOfDoors: {
                    type: 'numberOfDoors',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                fuelType: {
                    type: 'fuelType',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                condition: {
                    type: 'condition',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                cityMPG: {
                    type: 'cityMPG',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                highwayMPG: {
                    type: 'highwayMPG',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                },
                engine: {
                    type: 'engine',
                    value: [],
                    active: false,
                    valid: false,
                    clicked: false,
                    data: ''
                }
            },
            inputs: {
                price: {
                    type: 'price',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                },
                mileage: {
                    type: 'mileage',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                },
                description: {
                    type: 'description',
                    value: '',
                    valid: true,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: false
                    }
                },
                firstName: {
                    type: 'firstName',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                },
                lastName: {
                    type: 'lastName',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                },
                email: {
                    type: 'email',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                },
                phoneNumber: {
                    type: 'phoneNumber',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                },
                city: {
                    type: 'city',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                },
                zip: {
                    type: 'zip',
                    value: '',
                    valid: false,
                    touched: false,
                    errorMessage: '',
                    rules: {
                        required: true
                    }
                }
            },
            images: [],
            formIsValid: true,
            loading: false,
            formSubmitted: false,
            options: []
        }, _this.onChangeHandler = function (event, current) {
            var value = event.target.value;

            var copyElements = _extends({}, _this.state.elements);

            copyElements[current.type].data = event.target.value;

            if (value === 'select') {
                copyElements[current.type].valid = false;
            } else {
                copyElements[current.type].valid = true;
            }

            var arrayOfValues = [];
            for (var prop in _this.state.elements) {
                arrayOfValues.push(prop);
            }

            var index = arrayOfValues.findIndex(function (element) {
                return element === current.type;
            });
            var nextElement = arrayOfValues[index + 1];

            var element = arrayOfValues[index];
            if (element === arrayOfValues[arrayOfValues.length - 1]) {
                return;
            } else {

                _axios2.default.post('/get_' + nextElement, {
                    type: nextElement,
                    params: value
                }).then(function (response) {
                    if (response.data !== '') {
                        copyElements[nextElement].value = response.data;
                        copyElements[nextElement].active = true;
                    } else if (response.data === '') {
                        var shortArray = arrayOfValues.slice(index + 1);

                        shortArray.forEach(function (element) {
                            copyElements[element].active = false;
                            copyElements[element].valid = false;
                            copyElements[element].value = [];
                            copyElements[element].data = '';
                        });
                    }

                    _this.setState({
                        elements: copyElements
                    });
                });
            }
        }, _this.getOptionsForRender = function (element) {

            var options = element.value.map(function (current) {
                return _react2.default.createElement(
                    'option',
                    { value: current },
                    current
                );
            });

            return options;
        }, _this.onDrop = function (acceptedFiles) {
            var files = _this.state.images;

            for (var i = 0; i < acceptedFiles.length; i++) {
                files.push(acceptedFiles[i]);
            }

            _this.setState({
                images: files
            }, function () {
                console.log(_this.state.images);
            });
        }, _this.onSubmitHandler = function (event) {
            event.preventDefault();

            var valid = _this.validateForm();

            var arrayOfElements = [];

            var copyElements = _extends({}, _this.state.elements);

            for (var prop in copyElements) {
                arrayOfElements.push(copyElements[prop]);
            }

            arrayOfElements.forEach(function (element) {
                copyElements[element.type].clicked = true;
            });

            var copyInputs = _extends({}, _this.state.inputs);

            var arrayOfInputs = [];

            for (var input in copyInputs) {
                arrayOfInputs.push(copyInputs[input]);
            }

            arrayOfInputs.forEach(function (element) {
                copyInputs[element.type].touched = true;
                _this.validateData(element);
            });

            _this.setState({
                elements: copyElements,
                inputs: copyInputs
            }, function () {
                var inputs = _extends({}, _this.state.inputs);
                var arrayInputs = [];

                for (var _prop in inputs) {
                    arrayInputs.push(inputs[_prop]);
                }

                arrayInputs.forEach(function (element) {
                    if (element.type !== 'city') {
                        var index = element.value.indexOf(',');
                        inputs[element.type].value = element.value.replace(element.value.charAt(index), '');
                    }
                });

                _this.setState({
                    inputs: inputs
                }, function () {
                    if (valid) {
                        var fd = new FormData();

                        var elementsArray = [];
                        for (var _prop2 in _this.state.elements) {
                            elementsArray.push(_this.state.elements[_prop2]);
                        }

                        elementsArray.forEach(function (element) {
                            fd.append(element.type, element.data);
                        });

                        var inputsArray = [];
                        for (var _prop3 in _this.state.inputs) {
                            inputsArray.push(_this.state.inputs[_prop3]);
                        }

                        inputsArray.forEach(function (element) {
                            fd.append(element.type, element.value);
                        });

                        for (var i = 0; i < _this.state.images.length; i++) {
                            fd.append('images[]', _this.state.images[i]);
                        }

                        _this.setState({
                            loading: true
                        });

                        _axios2.default.post('/create_listing', fd).then(function (response) {
                            if (response.data === 'submitted') {
                                _this.setState({
                                    loading: false,
                                    formSubmitted: true
                                });
                            }
                        });
                    }
                });
            });
        }, _this.validateData = function (element) {
            var copyInputs = _extends({}, _this.state.inputs);

            copyInputs[element.type].touched = true;

            var valid = false;

            if (element.value.trim() !== '' && element.rules.required) {
                valid = true;
            }

            if (valid) {
                copyInputs[element.type].valid = true;
                copyInputs[element.type].errorMessage = '';
            } else if (!element.rules.required && !valid) {
                copyInputs[element.type].valid = true;
            } else {
                copyInputs[element.type].valid = false;
                copyInputs[element.type].errorMessage = 'Field cannot be empty';
            }

            if (element.type === 'phoneNumber' && !/\(\d{3}\)-\d{3}-\d{4}/.test(element.value) && valid) {
                copyInputs[element.type].valid = false;
                copyInputs[element.type].errorMessage = 'does not match valid format: (000)-000-0000';
            }

            if (element.type === 'zip' && valid && element.value.length !== 5) {
                copyInputs[element.type].valid = false;
                copyInputs[element.type].errorMessage = 'Field should have 5 digits';
            } else if (element.type === 'zip' && valid && element.value.length === 5) {
                copyInputs[element.type].valid = true;
                copyInputs[element.type].errorMessage = '';
            }

            if (element.type === 'zip' && valid && copyInputs['city'].value !== '' && element.value.length === 5) {
                _axios2.default.get(_urlsAPI.proxy + 'https://www.zipcodeapi.com/rest/' + _urlsAPI.zipAPIKey + '/info.json/' + element.value + '/radians').then(function (response) {
                    var city = copyInputs['city'].value;
                    var index = city.indexOf(',');
                    city = city.slice(0, index);

                    if (response.data.city !== city) {
                        copyInputs[element.type].valid = false;
                        copyInputs[element.type].errorMessage = 'invalid zip code for this location';

                        _this.setState({
                            inputs: copyInputs
                        });
                    }
                });
            }

            if (element.type === 'city' && valid && !/^[a-zA-Z\s]+,\s[a-zA-Z\s]+$/.test(element.value)) {
                copyInputs[element.type].valid = false;
                copyInputs[element.type].errorMessage = 'does not match valid format: "Denver, Colorado"';
            }

            _this.setState({
                inputs: copyInputs
            });
        }, _this.onBlurHandler = function (element) {
            _this.validateData(element);
        }, _this.onChangeInput = function (event, currentElement) {

            var copyInputs = _extends({}, _this.state.inputs);
            copyInputs[currentElement.type].touched = true;

            if (currentElement.type === 'phoneNumber') {
                if (/^[\(]*[0-9]*[\)]*[-]*\d*[-]*\d*$/.test(event.target.value)) {
                    copyInputs[currentElement.type].value = event.target.value;

                    if (event.target.value.length === 3) {
                        copyInputs[currentElement.type].value = '(' + event.target.value + ')-';
                    } else if (event.target.value.length === 9) {
                        copyInputs[currentElement.type].value = event.target.value + '-';
                    } else if (event.target.value.length === 15) {
                        copyInputs[currentElement.type].value = copyInputs[currentElement.type].value.slice(0, copyInputs[currentElement.type].value.length - 1);
                        return;
                    } else if (event.target.value.length === 10 || event.target.value.length === 5) {
                        copyInputs[currentElement.type].value = '';
                    }
                } else {
                    copyInputs[currentElement.type].value = '';
                }
            } else if (currentElement.type === 'price' || currentElement.type === 'mileage') {
                if (/^\d*[,]*\d*$/.test(event.target.value)) {
                    copyInputs[currentElement.type].value = event.target.value;

                    var firstVal = void 0;
                    var secondVal = void 0;
                    var fullNumber = void 0;

                    if (event.target.value.length === 4) {
                        firstVal = event.target.value.slice(0, 1);
                        secondVal = event.target.value.slice(1);
                        copyInputs[currentElement.type].value = firstVal + ',' + secondVal;
                    } else if (event.target.value.length === 6) {
                        firstVal = event.target.value.slice(0, 1);
                        secondVal = event.target.value.slice(2, 6);
                        fullNumber = '' + firstVal + secondVal;
                        copyInputs[currentElement.type].value = fullNumber.slice(0, 2) + ',' + fullNumber.slice(2);
                    } else if (event.target.value.length === 7) {
                        firstVal = event.target.value.slice(0, 2);
                        secondVal = event.target.value.slice(3, 7);
                        fullNumber = '' + firstVal + secondVal;
                        copyInputs[currentElement.type].value = fullNumber.slice(0, 3) + ',' + fullNumber.slice(3);
                    } else if (event.target.value.length === 8) {
                        copyInputs[currentElement.type].value = event.target.value.slice(0, event.target.length - 2);
                    }
                } else {
                    copyInputs[currentElement.type].value = '';
                }
            } else if (currentElement.type === 'zip') {
                copyInputs[currentElement.type].value = event.target.value;
                if (event.target.value.length === 6) {
                    copyInputs[currentElement.type].value = copyInputs[currentElement.type].value.slice(0, copyInputs[currentElement.type].value.length - 1);
                    return;
                }
            } else if (currentElement.type === 'firstName' || currentElement.type === 'lastName') {
                if (/^[a-zA-Z]*$/.test(event.target.value)) {
                    copyInputs[currentElement.type].value = event.target.value;
                }
            } else if (currentElement.type === 'city') {
                copyInputs[currentElement.type].value = event.target.value;

                copyInputs['zip'].value = '';
                copyInputs['zip'].touched = false;
                copyInputs['zip'].valid = false;
                copyInputs['zip'].errorMessage = '';
            } else {
                copyInputs[currentElement.type].value = event.target.value;
            }

            _this.setState({
                inputs: copyInputs
            });
        }, _this.onKeyDownHandler = function (event, currentElement) {
            var copyElements = _extends({}, _this.state.inputs);
            if (event.keyCode === 8) {
                copyElements[currentElement.type].value = '';
            }

            _this.setState({
                inputs: copyElements
            });
        }, _this.validateForm = function () {
            var elements = [];

            for (var prop in _this.state.elements) {
                elements.push(_this.state.elements[prop]);
            }

            for (var input in _this.state.inputs) {
                elements.push(_this.state.inputs[input]);
            }

            var valids = elements.map(function (current) {
                return current.valid;
            });

            if (valids.includes(false)) {
                _this.setState({
                    formIsValid: false
                });

                return false;
            } else {
                _this.setState({
                    formIsValid: true
                });

                return true;
            }
        }, _this.deleteImage = function (items, item) {
            var index = items.findIndex(function (current) {
                return current === item;
            });
            var copyImages = _this.state.images;

            copyImages.splice(index, 1);

            _this.setState({
                images: copyImages
            });
        }, _this.onKeyUpHandler = function (param) {
            _axios2.default.post('/get_certain_cities', {
                value: param
            }).then(function (response) {
                var options = response.data.slice(0, 5);

                _this.setState({
                    options: options
                });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CreateListing, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var copyElements = _extends({}, this.state.elements);

            _axios2.default.post('/get_param', {
                type: this.state.elements.year.type
            }).then(function (response) {
                copyElements['year'].value = response.data;

                _this2.setState({
                    elements: copyElements
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var arrayOfElements = [];

            for (var element in this.state.elements) {
                arrayOfElements.push(this.state.elements[element]);
            }

            var selects = arrayOfElements.map(function (element) {
                return _react2.default.createElement(
                    _Inputs2.default,
                    { element: element.type,
                        invalid: !element.active,
                        selectValid: element.valid,
                        clicked: element.clicked,
                        onChangeHandler: function onChangeHandler(event) {
                            return _this3.onChangeHandler(event, element);
                        } },
                    _this3.getOptionsForRender(element)
                );
            });

            var urls = this.state.images.map(function (current) {
                return URL.createObjectURL(current);
            });

            var images = urls.map(function (current) {
                return _react2.default.createElement(
                    'div',
                    { className: _CreateListing2.default.image },
                    _react2.default.createElement(
                        'div',
                        { className: _CreateListing2.default.imageWrapper,
                            onClick: function onClick() {
                                return _this3.deleteImage(urls, current);
                            } },
                        _react2.default.createElement('img', { src: current }),
                        _react2.default.createElement(
                            'div',
                            { className: _CreateListing2.default.deleteButton },
                            'X'
                        )
                    )
                );
            });

            var arrayOfInputs = [];

            for (var param in this.state.inputs) {
                arrayOfInputs.push(this.state.inputs[param]);
            }

            var options = this.state.options.map(function (option) {
                return _react2.default.createElement('option', { value: option.city + ', ' + option.state });
            });

            var inputs = arrayOfInputs.map(function (current) {
                return _react2.default.createElement(_Inputs2.default, { element: current.type,
                    value: current.value,
                    valid: current.valid,
                    touched: current.touched,
                    error: current.errorMessage,
                    onChangeHandler: function onChangeHandler(event) {
                        return _this3.onChangeInput(event, current);
                    },
                    onBlurHandler: function onBlurHandler() {
                        return _this3.onBlurHandler(current);
                    },
                    onKeyDownHandler: function onKeyDownHandler(event) {
                        return _this3.onKeyDownHandler(event, current);
                    },
                    onKeyUpHandler: function onKeyUpHandler() {
                        return _this3.onKeyUpHandler(current.value);
                    },
                    options: options });
            });

            var contactData = inputs.slice(3);

            var component = _react2.default.createElement(
                'form',
                { method: 'post', encType: 'multipart/form-data',
                    onSubmit: function onSubmit(event) {
                        return _this3.onSubmitHandler(event);
                    } },
                _react2.default.createElement(
                    'div',
                    { className: _CreateListing2.default.wrapperListing },
                    _react2.default.createElement(
                        'div',
                        { className: _CreateListing2.default.vehicleInfo },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Vehicle Information'
                        ),
                        selects,
                        _react2.default.createElement(
                            'div',
                            { className: _CreateListing2.default.inputs },
                            inputs[0],
                            inputs[1]
                        ),
                        _react2.default.createElement(
                            _reactDropzone2.default,
                            { onDrop: this.onDrop },
                            function (_ref2) {
                                var getRootProps = _ref2.getRootProps,
                                    getInputProps = _ref2.getInputProps;
                                return _react2.default.createElement(
                                    'div',
                                    _extends({ className: _CreateListing2.default.drop }, getRootProps()),
                                    _react2.default.createElement('input', getInputProps()),
                                    'Drop photos here'
                                );
                            }
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _CreateListing2.default.images },
                            images
                        ),
                        inputs[2]
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _CreateListing2.default.contactData },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Contact Information'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _CreateListing2.default.inputs },
                            contactData
                        )
                    ),
                    _react2.default.createElement(_Inputs2.default, { element: 'createListing' }),
                    !this.state.formIsValid ? _react2.default.createElement(
                        'p',
                        null,
                        'Selected fields must be filled'
                    ) : null
                )
            );

            if (this.state.formSubmitted) {
                component = _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sell_car' });
            }

            if (this.state.loading) {
                component = _react2.default.createElement(
                    'div',
                    { style: { paddingTop: '80px',
                            minHeight: '450px' } },
                    _react2.default.createElement(_Spinner2.default, null)
                );
            }

            return component;
        }
    }]);

    return CreateListing;
}(_react.Component);

exports.default = CreateListing;

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
//# sourceMappingURL=14.js.map