module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = firstStep;
/* harmony export (immutable) */ __webpack_exports__["b"] = secondStep;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_auth__ = __webpack_require__("./constants/auth.js");


function firstStep(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_auth__["a" /* FIRST_STEP_REQUEST */],
    payload: data
  };
}
function secondStep(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_auth__["b" /* SECOND_STEP_REQUEST */],
    payload: data
  };
}

/***/ }),

/***/ "./components/CustomModal/CustomModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\CustomModal\\CustomModal.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CustomModal = function (_React$Component) {
  _inherits(CustomModal, _React$Component);

  function CustomModal() {
    _classCallCheck(this, CustomModal);

    return _possibleConstructorReturn(this, (CustomModal.__proto__ || Object.getPrototypeOf(CustomModal)).apply(this, arguments));
  }

  _createClass(CustomModal, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Modal"],
        { show: this.props.show, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        this.props.children
      );
    }
  }]);

  return CustomModal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

CustomModal.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  show: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

CustomModal.defaultProps = {
  show: true
};

/* harmony default export */ __webpack_exports__["a"] = (CustomModal);

/***/ }),

/***/ "./components/CustomModal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CustomModal__ = __webpack_require__("./components/CustomModal/CustomModal.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CustomModal__["a"]; });


/***/ }),

/***/ "./components/CustomNavbar/CustomNavbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\CustomNavbar\\CustomNavbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CustomNavbar = function (_React$Component) {
  _inherits(CustomNavbar, _React$Component);

  function CustomNavbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomNavbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomNavbar.__proto__ || Object.getPrototypeOf(CustomNavbar)).call.apply(_ref, [this].concat(args))), _this), _this.onRedirect = function (path) {
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.replace(path);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomNavbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.auth.isRegister) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"].Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Navbar"].Brand,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { onClick: function onClick() {
                    return _this2.onRedirect("/");
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  }
                },
                'SingUp module'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Nav"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"],
              { eventKey: 1, onClick: function onClick() {
                  return _this2.onRedirect("/about");
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              'About'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["NavItem"],
              { eventKey: 2, onClick: function onClick() {
                  return _this2.onRedirect("/contact");
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              'Contact'
            )
          )
        );
      }
      return null;
    }
  }]);

  return CustomNavbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(CustomNavbar));

/***/ }),

/***/ "./components/CustomNavbar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CustomNavbar__ = __webpack_require__("./components/CustomNavbar/CustomNavbar.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CustomNavbar__["a"]; });


/***/ }),

/***/ "./components/FirstStep/FirstStep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_form__ = __webpack_require__("react-redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux_form__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\FirstStep\\FirstStep.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var emailField = function emailField(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"], _extends({ type: 'text' }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};
var passwordField = function passwordField(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"], _extends({ type: 'password' }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

var FirstStep = function (_React$Component) {
  _inherits(FirstStep, _React$Component);

  function FirstStep() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FirstStep);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FirstStep.__proto__ || Object.getPrototypeOf(FirstStep)).call.apply(_ref, [this].concat(args))), _this), _this.isError = function (field) {
      if (field.valid && field.touched) {
        return "success";
      } else if (!field.valid && field.touched && !field.focus) {
        return "error";
      }
      return null;
    }, _this.handleSubmit = function (data) {
      _this.props.onNext(data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FirstStep, [{
    key: 'render',
    value: function render() {
      var formsFirstStep = this.props.formsFirstStep;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_redux_form__["Form"],
        {
          model: 'firstStep',
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"],
          { validationState: this.isError(formsFirstStep.email), __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ControlLabel"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            'Email'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux_form__["Control"], {
            model: '.email',
            validators: {
              isRequired: function isRequired(val) {
                return !!val.length;
              },
              isEmail: function isEmail(val) {
                return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
                );
              }
            },
            validateOn: 'blur',
            component: emailField,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"].Feedback, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux_form__["Errors"], { wrapper: function wrapper(props) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["HelpBlock"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                props.children
              );
            },
            show: { touched: true, focus: false },
            model: '.email',
            messages: {
              isRequired: "Please provide an email.",
              isEmail: function isEmail(val) {
                return "Email is not a valid.";
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"],
          { validationState: this.isError(formsFirstStep.password), __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ControlLabel"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            'Password'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux_form__["Control"], {
            model: '.password',
            validators: {
              isRequired: function isRequired(val) {
                return !!val.length;
              },
              minLength: function minLength(val) {
                return val.length > 5;
              }
            },
            validateOn: 'blur',
            component: passwordField,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"].Feedback, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux_form__["Errors"], { wrapper: function wrapper(props) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["HelpBlock"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                props.children
              );
            },
            show: { touched: true, focus: false },
            model: '.password',
            messages: {
              isRequired: "Please provide a password.",
              minLength: "Password should be minimum 6 characters long",
              passwordsMatch: "Password doesn`t equal password confirm."
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"],
          { validationState: this.isError(formsFirstStep.passwordConfirm), __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ControlLabel"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            'Confirm password'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux_form__["Control"], {
            model: '.passwordConfirm',
            id: '.passwordConfirm',
            validators: {
              isRequired: function isRequired(val) {
                return !!val.length;
              },
              minLength: function minLength(val) {
                return val.length > 5;
              },
              passwordsMatch: function passwordsMatch(val) {
                return val === formsFirstStep.password.value;
              }
            },
            validateOn: 'blur',
            component: passwordField,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"].Feedback, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux_form__["Errors"], { wrapper: function wrapper(props) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["HelpBlock"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  }
                },
                props.children
              );
            },
            show: { touched: true, focus: false },
            model: '.passwordConfirm',
            messages: {
              isRequired: 'Please provide a password confirm.',
              minLength: "Password should be minimum 6 characters long.",
              passwordsMatch: 'Password confirm doesn`t equal password.'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { type: 'submit', className: 'btn btn-link next-btn', __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          },
          'Next'
        )
      );
    }
  }]);

  return FirstStep;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

FirstStep.propTypes = {
  onNext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    formsFirstStep: state.forms.firstStep
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(FirstStep));

/***/ }),

/***/ "./components/FirstStep/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FirstStep__ = __webpack_require__("./components/FirstStep/FirstStep.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__FirstStep__["a"]; });


/***/ }),

/***/ "./components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_configureStore__ = __webpack_require__("./store/configureStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CustomNavbar__ = __webpack_require__("./components/CustomNavbar/index.js");
var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\Layout\\Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var store = Object(__WEBPACK_IMPORTED_MODULE_5__store_configureStore__["a" /* default */])();

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.onRedirect = function (path) {
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.replace(path);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
              integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
              crossOrigin: 'anonymous', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
              integrity: 'sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp',
              crossOrigin: 'anonymous', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__CustomNavbar__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            this.props.children
          )
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layout__ = __webpack_require__("./components/Layout/Layout.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Layout__["a"]; });


/***/ }),

/***/ "./components/SecondStep/SecondStep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_form__ = __webpack_require__("react-redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\SecondStep\\SecondStep.js';


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var birthdayField = function birthdayField(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"], _extends({ type: 'text' }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }));
};
var selectAboutField = function selectAboutField(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"],
    _extends({ componentClass: 'select' }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'option',
      { value: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      ''
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'option',
      { value: 'In social networks', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      'In social networks'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'option',
      { value: 'From friends', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      },
      'From friends'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'option',
      { value: 'Other', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      'Other'
    )
  );
};

var SecondStep = function (_React$Component) {
  _inherits(SecondStep, _React$Component);

  function SecondStep(props, context) {
    _classCallCheck(this, SecondStep);

    var _this = _possibleConstructorReturn(this, (SecondStep.__proto__ || Object.getPrototypeOf(SecondStep)).call(this, props, context));

    _this.isError = function (field) {
      if (field.valid && field.touched) {
        return "success";
      } else if (!field.valid && field.touched && !field.focus) {
        return "error";
      }
      return null;
    };

    _this.isNumber = function (val) {
      return !isNaN(Number(val));
    };

    _this.checkAge = function (age) {
      var formsSecondStep = _this.props.formsSecondStep;


      if (formsSecondStep.birthdayMonth.valid && formsSecondStep.birthdayDate.valid && formsSecondStep.birthdayYear.valid && formsSecondStep.birthdayMonth.value && formsSecondStep.birthdayDate.value && formsSecondStep.birthdayYear.value) {
        var dobMonth = formsSecondStep.birthdayMonth.value,
            dobDay = formsSecondStep.birthdayDate.value,
            dobYear = formsSecondStep.birthdayYear.value;
        var now = new Date();
        var nowDay = now.getDate(),
            nowMonth = now.getMonth() + 1,
            //jan=0 so month+1
        nowYear = now.getFullYear();

        var ageYear = nowYear - dobYear;
        var ageMonth = nowMonth - dobMonth;
        var ageDay = nowDay - dobDay;
        if (ageMonth < 0) {
          ageYear--;
          ageMonth = 12 + ageMonth;
        }
        if (nowDay < dobDay) {
          ageMonth--;
          ageDay = 30 + ageDay;
        }
        return age <= ageYear;
      }
      return true;
    };

    _this.handleGenderChange = function (e) {
      _this.setState({ genderValue: e });
      _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["actions"].change("secondStep.gender", e));
    };

    _this.handleSubmit = function (data) {
      if (!__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this.ageError)) {
        _this.props.onNext(data);
      }
    };

    _this.state = {
      genderValue: "male" // female unspecified
    };
    return _this;
  }

  _createClass(SecondStep, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["actions"].change("secondStep.gender", this.state.genderValue));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formsSecondStep = this.props.formsSecondStep;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-87500101',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-87500101' + ' ' + 'form-title',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          },
          'DATE OF BIRTH'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Form"],
          {
            model: 'secondStep',
            onSubmit: this.handleSubmit,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-87500101' + ' ' + 'birthday-fields',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'birthday-fields__item',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormGroup"],
                { validationState: this.isError(formsSecondStep.birthdayDate), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Control"], {
                  model: '.birthdayDate',
                  placeholder: 'DD',
                  validators: {
                    isRequired: function isRequired(val) {
                      return !!val.length;
                    },
                    isNumber: function isNumber(val) {
                      return _this2.isNumber(val);
                    },
                    isRange: function isRange(val) {
                      return _this2.isNumber(val) && 31 >= val >= 1;
                    }
                  },
                  validateOn: 'blur',
                  component: birthdayField,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"].Feedback, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Errors"], { wrapper: function wrapper(props) {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["HelpBlock"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 120
                        }
                      },
                      props.children
                    );
                  },
                  show: { touched: true, focus: false },
                  model: '.birthdayDate',
                  messages: {
                    isRequired: "Please provide a date.",
                    isNumber: "Date should be a number.",
                    isRange: "Date should be between 1 and 31."
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'birthday-fields__item',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormGroup"],
                { validationState: this.isError(formsSecondStep.birthdayMonth), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Control"], {
                  model: '.birthdayMonth',
                  placeholder: 'MM',
                  validators: {
                    isRequired: function isRequired(val) {
                      return !!val.length;
                    },
                    isNumber: function isNumber(val) {
                      return _this2.isNumber(val);
                    },
                    isRange: function isRange(val) {
                      return _this2.isNumber(val) && 12 >= val >= 1;
                    }
                  },
                  validateOn: 'blur',
                  component: birthdayField,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"].Feedback, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Errors"], { wrapper: function wrapper(props) {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["HelpBlock"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 145
                        }
                      },
                      props.children
                    );
                  },
                  show: { touched: true, focus: false },
                  model: '.birthdayMonth',
                  messages: {
                    isRequired: "Please provide a month.",
                    isNumber: "Month should be a number.",
                    isRange: "Month should be between 1 and 12."
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'birthday-fields__item',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormGroup"],
                { validationState: this.isError(formsSecondStep.birthdayYear), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Control"], {
                  model: '.birthdayYear',
                  placeholder: 'YYYY',
                  validators: {
                    isRequired: function isRequired(val) {
                      return !!val.length;
                    },
                    isNumber: function isNumber(val) {
                      return _this2.isNumber(val);
                    }
                  },
                  validateOn: 'blur',
                  component: birthdayField,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"].Feedback, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Errors"], { wrapper: function wrapper(props) {
                    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["HelpBlock"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 169
                        }
                      },
                      props.children
                    );
                  },
                  show: { touched: true, focus: false },
                  model: '.birthdayYear',
                  messages: {
                    isRequired: "Please provide a year.",
                    isNumber: "Year should be a number."
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                  }
                })
              )
            ),
            !this.checkAge(18) && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { ref: function ref(node) {
                  _this2.ageError = node;
                }, className: 'jsx-87500101' + ' ' + 'error-age',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 179
                }
              },
              'You must be aged 18 years or older'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-87500101' + ' ' + 'form-gender',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 182
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'form-title',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 183
                }
              },
              'GENDER'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["ToggleButtonGroup"],
              {
                justified: true,
                name: 'gender',
                type: 'radio',
                value: this.state.genderValue,
                onChange: this.handleGenderChange,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 184
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["ToggleButton"],
                { value: 'male', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                  }
                },
                'MALE'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["ToggleButton"],
                { value: 'female', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                  }
                },
                'FEMALE'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["ToggleButton"],
                { value: 'unspecified', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                  }
                },
                'UNSPECIFIED'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-87500101' + ' ' + 'form-about',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'form-title',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 198
                }
              },
              'WHERE DID YOU HEAR ABOUT IS?'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormGroup"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 199
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Control"], {
                model: '.howHearAboutUs',
                component: selectAboutField,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 200
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["FormControl"].Feedback, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 204
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_redux_form__["Errors"], { wrapper: function wrapper(props) {
                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["HelpBlock"],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 205
                      }
                    },
                    props.children
                  );
                },
                show: { touched: true, focus: false },
                model: '.howHearAboutUs',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 205
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { type: 'submit', className: 'jsx-87500101' + ' ' + 'btn btn-link next-btn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 211
              }
            },
            'Next'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'button',
          { onClick: this.props.onBack, className: 'jsx-87500101' + ' ' + 'btn btn-link back-btn',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            }
          },
          'Back'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '87500101',
          css: '.form-title{text-align:center;margin-bottom:20px;}.birthday-fields{width:100%;}.birthday-fields .birthday-fields__item{width:33.333%;display:inline-block;vertical-align:top;}.form-gender .btn-default{background:#fff;}.form-gender .btn-default.active{background:#66a9e2;color:#fff;}.form-about{margin-top:20px;}.error-age{color:#a94442;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlY29uZFN0ZXBcXFNlY29uZFN0ZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc04yQixBQUcrQixBQUlQLEFBR0csQUFLRSxBQUdHLEFBSUgsQUFHRixXQWpCaEIsR0FHdUIsQUFlRixFQVZyQixBQU9BLEVBbkJxQixDQWVSLFdBQ2IsR0FPQSxFQWZxQixFQVByQixpQkFRQSIsImZpbGUiOiJjb21wb25lbnRzXFxTZWNvbmRTdGVwXFxTZWNvbmRTdGVwLmpzIiwic291cmNlUm9vdCI6IkU6L3Byb2plY3RzL3JlYWN0L3Npbmd1cC1tb2R1bGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICBGb3JtR3JvdXAsXHJcbiAgQ29udHJvbExhYmVsLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEhlbHBCbG9jayxcclxuICBUb2dnbGVCdXR0b25Hcm91cCxcclxuICBUb2dnbGVCdXR0b25cclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBDb250cm9sLCBGb3JtLCBFcnJvcnMsIGFjdGlvbnMgfSBmcm9tICdyZWFjdC1yZWR1eC1mb3JtJztcclxuXHJcblxyXG5jb25zdCBiaXJ0aGRheUZpZWxkID0gKHByb3BzKSA9PiA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiB7Li4ucHJvcHN9IC8+O1xyXG5jb25zdCBzZWxlY3RBYm91dEZpZWxkID0gKHByb3BzKSA9PiA8Rm9ybUNvbnRyb2wgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57Jyd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkluIHNvY2lhbCBuZXR3b3Jrc1wiPkluIHNvY2lhbCBuZXR3b3Jrczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGcm9tIGZyaWVuZHNcIj5Gcm9tIGZyaWVuZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJcIj5PdGhlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPjtcclxuXHJcblxyXG5jbGFzcyBTZWNvbmRTdGVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGdlbmRlclZhbHVlOiBcIm1hbGVcIiwgLy8gZmVtYWxlIHVuc3BlY2lmaWVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG9uTmV4dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5jaGFuZ2UoXCJzZWNvbmRTdGVwLmdlbmRlclwiLCB0aGlzLnN0YXRlLmdlbmRlclZhbHVlKSlcclxuICB9XHJcblxyXG4gIGlzRXJyb3IgPSAoZmllbGQpID0+IHtcclxuICAgIGlmIChmaWVsZC52YWxpZCAmJiBmaWVsZC50b3VjaGVkKSB7XHJcbiAgICAgIHJldHVybiBcInN1Y2Nlc3NcIlxyXG4gICAgfSBlbHNlIGlmICghZmllbGQudmFsaWQgJiYgZmllbGQudG91Y2hlZCAmJiAhZmllbGQuZm9jdXMpIHtcclxuICAgICAgcmV0dXJuIFwiZXJyb3JcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9O1xyXG5cclxuICBpc051bWJlciA9ICh2YWwpID0+IHtcclxuICAgIHJldHVybiAhaXNOYU4oTnVtYmVyKHZhbCkpO1xyXG4gIH07XHJcblxyXG4gIGNoZWNrQWdlID0gKGFnZSkgPT4ge1xyXG4gICAgY29uc3QgeyBmb3Jtc1NlY29uZFN0ZXAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKGZvcm1zU2Vjb25kU3RlcC5iaXJ0aGRheU1vbnRoLnZhbGlkICYmIGZvcm1zU2Vjb25kU3RlcC5iaXJ0aGRheURhdGUudmFsaWQgJiYgZm9ybXNTZWNvbmRTdGVwLmJpcnRoZGF5WWVhci52YWxpZCAmJlxyXG4gICAgICBmb3Jtc1NlY29uZFN0ZXAuYmlydGhkYXlNb250aC52YWx1ZSAmJiBmb3Jtc1NlY29uZFN0ZXAuYmlydGhkYXlEYXRlLnZhbHVlICYmIGZvcm1zU2Vjb25kU3RlcC5iaXJ0aGRheVllYXIudmFsdWUpIHtcclxuICAgICAgbGV0IGRvYk1vbnRoID0gZm9ybXNTZWNvbmRTdGVwLmJpcnRoZGF5TW9udGgudmFsdWUsXHJcbiAgICAgICAgZG9iRGF5ID0gZm9ybXNTZWNvbmRTdGVwLmJpcnRoZGF5RGF0ZS52YWx1ZSxcclxuICAgICAgICBkb2JZZWFyID0gZm9ybXNTZWNvbmRTdGVwLmJpcnRoZGF5WWVhci52YWx1ZTtcclxuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGxldCBub3dEYXkgPSBub3cuZ2V0RGF0ZSgpLFxyXG4gICAgICAgIG5vd01vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxLCAgLy9qYW49MCBzbyBtb250aCsxXHJcbiAgICAgICAgbm93WWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgbGV0IGFnZVllYXIgPSBub3dZZWFyIC0gZG9iWWVhcjtcclxuICAgICAgbGV0IGFnZU1vbnRoID0gbm93TW9udGggLSBkb2JNb250aDtcclxuICAgICAgbGV0IGFnZURheSA9IG5vd0RheSAtIGRvYkRheTtcclxuICAgICAgaWYgKGFnZU1vbnRoIDwgMCkge1xyXG4gICAgICAgIGFnZVllYXItLTtcclxuICAgICAgICBhZ2VNb250aCA9ICgxMiArIGFnZU1vbnRoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobm93RGF5IDwgZG9iRGF5KSB7XHJcbiAgICAgICAgYWdlTW9udGgtLTtcclxuICAgICAgICBhZ2VEYXkgPSAzMCArIGFnZURheTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYWdlIDw9IGFnZVllYXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUdlbmRlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyVmFsdWU6IGUgfSk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuY2hhbmdlKFwic2Vjb25kU3RlcC5nZW5kZXJcIiwgZSkpXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGlmICghUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5hZ2VFcnJvcikpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbk5leHQoZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmb3Jtc1NlY29uZFN0ZXAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPkRBVEUgT0YgQklSVEg8L2Rpdj5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgbW9kZWw9XCJzZWNvbmRTdGVwXCJcclxuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoZGF5LWZpZWxkc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoZGF5LWZpZWxkc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgdmFsaWRhdGlvblN0YXRlPXt0aGlzLmlzRXJyb3IoZm9ybXNTZWNvbmRTdGVwLmJpcnRoZGF5RGF0ZSl9PlxyXG4gICAgICAgICAgICAgICAgPENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgbW9kZWw9XCIuYmlydGhkYXlEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJERFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkOiAodmFsKSA9PiAhIXZhbC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNOdW1iZXI6ICh2YWwpID0+IHRoaXMuaXNOdW1iZXIodmFsKSxcclxuICAgICAgICAgICAgICAgICAgICBpc1JhbmdlOiAodmFsKSA9PiAgdGhpcy5pc051bWJlcih2YWwpICYmICgzMSA+PSB2YWwgPj0gMSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVPbj1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2JpcnRoZGF5RmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sLkZlZWRiYWNrIC8+XHJcbiAgICAgICAgICAgICAgICA8RXJyb3JzIHdyYXBwZXI9eyhwcm9wcykgPT4gPEhlbHBCbG9jaz57cHJvcHMuY2hpbGRyZW59PC9IZWxwQmxvY2s+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt7IHRvdWNoZWQ6IHRydWUsIGZvY3VzOiBmYWxzZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbD1cIi5iaXJ0aGRheURhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6IFwiUGxlYXNlIHByb3ZpZGUgYSBkYXRlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTnVtYmVyOiBcIkRhdGUgc2hvdWxkIGJlIGEgbnVtYmVyLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmFuZ2U6IFwiRGF0ZSBzaG91bGQgYmUgYmV0d2VlbiAxIGFuZCAzMS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoZGF5LWZpZWxkc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgdmFsaWRhdGlvblN0YXRlPXt0aGlzLmlzRXJyb3IoZm9ybXNTZWNvbmRTdGVwLmJpcnRoZGF5TW9udGgpfT5cclxuICAgICAgICAgICAgICAgIDxDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgIG1vZGVsPVwiLmJpcnRoZGF5TW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1NXCJcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6ICh2YWwpID0+ICEhdmFsLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBpc051bWJlcjogKHZhbCkgPT4gdGhpcy5pc051bWJlcih2YWwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmFuZ2U6ICh2YWwpID0+ICB0aGlzLmlzTnVtYmVyKHZhbCkgJiYgKDEyID49IHZhbCA+PSAxKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZU9uPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17YmlydGhkYXlGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wuRmVlZGJhY2sgLz5cclxuICAgICAgICAgICAgICAgIDxFcnJvcnMgd3JhcHBlcj17KHByb3BzKSA9PiA8SGVscEJsb2NrPntwcm9wcy5jaGlsZHJlbn08L0hlbHBCbG9jaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3sgdG91Y2hlZDogdHJ1ZSwgZm9jdXM6IGZhbHNlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsPVwiLmJpcnRoZGF5TW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6IFwiUGxlYXNlIHByb3ZpZGUgYSBtb250aC5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc051bWJlcjogXCJNb250aCBzaG91bGQgYmUgYSBudW1iZXIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSYW5nZTogXCJNb250aCBzaG91bGQgYmUgYmV0d2VlbiAxIGFuZCAxMi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcnRoZGF5LWZpZWxkc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgdmFsaWRhdGlvblN0YXRlPXt0aGlzLmlzRXJyb3IoZm9ybXNTZWNvbmRTdGVwLmJpcnRoZGF5WWVhcil9PlxyXG4gICAgICAgICAgICAgICAgPENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgbW9kZWw9XCIuYmlydGhkYXlZZWFyXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6ICh2YWwpID0+ICEhdmFsLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBpc051bWJlcjogKHZhbCkgPT4gdGhpcy5pc051bWJlcih2YWwpLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZU9uPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17YmlydGhkYXlGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wuRmVlZGJhY2sgLz5cclxuICAgICAgICAgICAgICAgIDxFcnJvcnMgd3JhcHBlcj17KHByb3BzKSA9PiA8SGVscEJsb2NrPntwcm9wcy5jaGlsZHJlbn08L0hlbHBCbG9jaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3sgdG91Y2hlZDogdHJ1ZSwgZm9jdXM6IGZhbHNlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsPVwiLmJpcnRoZGF5WWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZDogXCJQbGVhc2UgcHJvdmlkZSBhIHllYXIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOdW1iZXI6IFwiWWVhciBzaG91bGQgYmUgYSBudW1iZXIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyF0aGlzLmNoZWNrQWdlKDE4KSAmJiA8ZGl2IHJlZj17KG5vZGUpID0+IHt0aGlzLmFnZUVycm9yID0gbm9kZX19IGNsYXNzTmFtZT1cImVycm9yLWFnZVwiPllvdSBtdXN0IGJlIGFnZWQgMTggeWVhcnMgb3Igb2xkZXI8L2Rpdj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ2VuZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPkdFTkRFUjwvZGl2PlxyXG4gICAgICAgICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICBqdXN0aWZpZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdlbmRlclZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlckNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUb2dnbGVCdXR0b24gdmFsdWU9XCJtYWxlXCI+TUFMRTwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUb2dnbGVCdXR0b24gdmFsdWU9XCJmZW1hbGVcIj5GRU1BTEU8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIHZhbHVlPVwidW5zcGVjaWZpZWRcIj5VTlNQRUNJRklFRDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFib3V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aXRsZVwiPldIRVJFIERJRCBZT1UgSEVBUiBBQk9VVCBJUz88L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgbW9kZWw9XCIuaG93SGVhckFib3V0VXNcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtzZWxlY3RBYm91dEZpZWxkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sLkZlZWRiYWNrIC8+XHJcbiAgICAgICAgICAgICAgPEVycm9ycyB3cmFwcGVyPXsocHJvcHMpID0+IDxIZWxwQmxvY2s+e3Byb3BzLmNoaWxkcmVufTwvSGVscEJsb2NrPn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3sgdG91Y2hlZDogdHJ1ZSwgZm9jdXM6IGZhbHNlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbD1cIi5ob3dIZWFyQWJvdXRVc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBuZXh0LWJ0blwiID5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJhY2stYnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkJhY2t9PkJhY2s8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgIC5mb3JtLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJpcnRoZGF5LWZpZWxkcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJpcnRoZGF5LWZpZWxkcyAuYmlydGhkYXktZmllbGRzX19pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWdlbmRlciAuYnRuLWRlZmF1bHQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tZ2VuZGVyIC5idG4tZGVmYXVsdC5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjZhOWUyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWFib3V0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lcnJvci1hZ2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogI2E5NDQ0MjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgZm9ybXNTZWNvbmRTdGVwOiBzdGF0ZS5mb3Jtcy5zZWNvbmRTdGVwLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWNvbmRTdGVwKTtcclxuIl19 */\n/*@ sourceURL=components\\SecondStep\\SecondStep.js */'
        })
      );
    }
  }]);

  return SecondStep;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

SecondStep.propTypes = {
  onNext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
  onBack: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    formsSecondStep: state.forms.secondStep
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps)(SecondStep));

/***/ }),

/***/ "./components/SecondStep/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SecondStep__ = __webpack_require__("./components/SecondStep/SecondStep.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__SecondStep__["a"]; });


/***/ }),

/***/ "./components/SingUpFormWizard/SingUpFormWizard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_transition_group__ = __webpack_require__("react-addons-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_addons_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StepsProgress__ = __webpack_require__("./components/StepsProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CustomModal__ = __webpack_require__("./components/CustomModal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FirstStep__ = __webpack_require__("./components/FirstStep/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SecondStep__ = __webpack_require__("./components/SecondStep/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ThirdStep__ = __webpack_require__("./components/ThirdStep/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_auth__ = __webpack_require__("./actions/auth.js");
var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\SingUpFormWizard\\SingUpFormWizard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SingUpFormWizard = function (_React$Component) {
  _inherits(SingUpFormWizard, _React$Component);

  function SingUpFormWizard(props, context) {
    _classCallCheck(this, SingUpFormWizard);

    var _this = _possibleConstructorReturn(this, (SingUpFormWizard.__proto__ || Object.getPrototypeOf(SingUpFormWizard)).call(this, props, context));

    _this.nextStep = function () {
      _this.setState({ step: _this.state.step + 1 });
    };

    _this.previousStep = function () {
      _this.setState({ step: _this.state.step - 1 });
    };

    _this.onFirstStep = function (data) {
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_10__actions_auth__["a" /* firstStep */])(data));
      _this.nextStep();
    };

    _this.onSecondStep = function (data) {
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_10__actions_auth__["b" /* secondStep */])(data));
      _this.nextStep();
    };

    _this.onDashboardBtnClick = function () {
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.replace('/');
    };

    _this.state = {
      step: 1
    };
    return _this;
  }

  _createClass(SingUpFormWizard, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-142636939',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__CustomModal__["a" /* default */],
          { className: 'modal', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'modal__title',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            this.state.step <= 2 ? "Singup" : "Thank you!"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-142636939',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__StepsProgress__["a" /* default */], { currentStep: this.state.step, steps: 3, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            })
          ),
          this.state.step === 1 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'form',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__FirstStep__["a" /* default */], { onNext: this.onFirstStep, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            })
          ),
          this.state.step === 2 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'form',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__SecondStep__["a" /* default */], { onBack: this.previousStep, onNext: this.onSecondStep, __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            })
          ),
          this.state.step === 3 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'form without-border',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ThirdStep__["a" /* default */], { onDashboardBtnClick: this.onDashboardBtnClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '142636939',
          css: '.modal-dialog{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) !important;-ms-transform:translate(-50%,-50%) !important;transform:translate(-50%,-50%) !important;}.modal .modal__title{display:block;color:#66a9e2;text-align:center;margin-top:20px;margin-bottom:20px;font-size:18px;}.form{margin:60px 10px;padding-bottom:60px;border-bottom:1px solid #808080;}.without-border{border:none;}.next-btn{position:absolute;right:10px;bottom:10px;text-decoration:none;font-size:15px;display:inline-block;vertical-align:middle;color:#66a9e2;}.next-btn:after{content:\'\u2192\';display:inline-block;vertical-align:middle;padding-bottom:5px;margin-left:5px;}.back-btn{position:absolute;left:10px;bottom:10px;text-decoration:none;font-size:15px;display:inline-block;vertical-align:middle;color:#808080;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNpbmdVcEZvcm1XaXphcmRcXFNpbmdVcEZvcm1XaXphcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEQyQixBQUcrQixBQU1KLEFBUUcsQUFLTCxBQUdNLEFBVU4sQUFPTSxZQW5CcEIsQUFhdUIsRUExQlAsR0FRTSxDQWRaLEFBc0JHLEFBaUJELFFBdENELEVBTVMsQUFpQ04sQ0FqQkEsSUFVVSxFQS9CcUIsRUFhWCxHQTBCWCxDQWpCQSxLQWhCTCxTQTBCRyxNQVFKLENBakNJLEFBZ0JKLE9BVGpCLEtBbUJrQixFQVFLLENBakJBLElBaEJOLFNBMEJqQixNQXpCQSxDQWlDd0IsQ0FqQkEscUJBa0JSLENBakJBLGFBa0JoQixDQWpCQSx1Q0ExQkEiLCJmaWxlIjoiY29tcG9uZW50c1xcU2luZ1VwRm9ybVdpemFyZFxcU2luZ1VwRm9ybVdpemFyZC5qcyIsInNvdXJjZVJvb3QiOiJFOi9wcm9qZWN0cy9yZWFjdC9zaW5ndXAtbW9kdWxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0VHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy10cmFuc2l0aW9uLWdyb3VwJ1xyXG5pbXBvcnQgU3RlcHNQcm9ncmVzcyBmcm9tICcuLi9TdGVwc1Byb2dyZXNzJztcclxuaW1wb3J0IEN1c3RvbU1vZGFsIGZyb20gJy4uL0N1c3RvbU1vZGFsJztcclxuaW1wb3J0IEZpcnN0U3RlcCBmcm9tICcuLi9GaXJzdFN0ZXAnO1xyXG5pbXBvcnQgU2Vjb25kU3RlcCBmcm9tICcuLi9TZWNvbmRTdGVwJztcclxuaW1wb3J0IFRoaXJkU3RlcCBmcm9tICcuLi9UaGlyZFN0ZXAnO1xyXG5pbXBvcnQgeyBmaXJzdFN0ZXAsIHNlY29uZFN0ZXAgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnXHJcblxyXG5cclxuY2xhc3MgU2luZ1VwRm9ybVdpemFyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcclxuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGVwOiAxXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmV4dFN0ZXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RlcDogdGhpcy5zdGF0ZS5zdGVwICsgMSB9KTtcclxuICB9O1xyXG5cclxuICBwcmV2aW91c1N0ZXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RlcDogdGhpcy5zdGF0ZS5zdGVwIC0gMSB9KTtcclxuICB9O1xyXG5cclxuICBvbkZpcnN0U3RlcCA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGZpcnN0U3RlcChkYXRhKSk7XHJcbiAgICB0aGlzLm5leHRTdGVwKCk7XHJcbiAgfTtcclxuXHJcbiAgb25TZWNvbmRTdGVwID0gKGRhdGEpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2Vjb25kU3RlcChkYXRhKSk7XHJcbiAgICB0aGlzLm5leHRTdGVwKCk7XHJcbiAgfTtcclxuXHJcbiAgb25EYXNoYm9hcmRCdG5DbGljayA9ICgpID0+IHtcclxuICAgIFJvdXRlci5yZXBsYWNlKCcvJylcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDdXN0b21Nb2RhbCBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+e3RoaXMuc3RhdGUuc3RlcCA8PSAyID8gXCJTaW5ndXBcIiA6IFwiVGhhbmsgeW91IVwifTwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTdGVwc1Byb2dyZXNzIGN1cnJlbnRTdGVwPXt0aGlzLnN0YXRlLnN0ZXB9IHN0ZXBzPXszfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zdGVwID09PSAxICYmIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPjxGaXJzdFN0ZXAgb25OZXh0PXt0aGlzLm9uRmlyc3RTdGVwfS8+PC9kaXY+fVxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc3RlcCA9PT0gMiAmJiA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj48U2Vjb25kU3RlcCBvbkJhY2s9e3RoaXMucHJldmlvdXNTdGVwfSBvbk5leHQ9e3RoaXMub25TZWNvbmRTdGVwfS8+PC9kaXY+fVxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc3RlcCA9PT0gMyAmJiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gd2l0aG91dC1ib3JkZXJcIj48VGhpcmRTdGVwIG9uRGFzaGJvYXJkQnRuQ2xpY2s9e3RoaXMub25EYXNoYm9hcmRCdG5DbGlja30vPjwvZGl2Pn1cclxuXHJcbiAgICAgICAgPC9DdXN0b21Nb2RhbD5cclxuXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9kYWwgLm1vZGFsX190aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2YTllMjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAud2l0aG91dC1ib3JkZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmV4dC1idG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjZhOWUyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5leHQtYnRuOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJ1xcdTIxOTInO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFjay1idG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgYXV0aDogc3RhdGUuYXV0aCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2luZ1VwRm9ybVdpemFyZCk7XHJcbiJdfQ== */\n/*@ sourceURL=components\\SingUpFormWizard\\SingUpFormWizard.js */'
        })
      );
    }
  }]);

  return SingUpFormWizard;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(SingUpFormWizard));

/***/ }),

/***/ "./components/SingUpFormWizard/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingUpFormWizard__ = __webpack_require__("./components/SingUpFormWizard/SingUpFormWizard.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__SingUpFormWizard__["a"]; });


/***/ }),

/***/ "./components/StepsProgress/StepsProgress.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\StepsProgress\\StepsProgress.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var StepsProgress = function (_React$Component) {
  _inherits(StepsProgress, _React$Component);

  function StepsProgress(props, context) {
    _classCallCheck(this, StepsProgress);

    return _possibleConstructorReturn(this, (StepsProgress.__proto__ || Object.getPrototypeOf(StepsProgress)).call(this, props, context));
  }

  _createClass(StepsProgress, [{
    key: 'render',
    value: function render() {
      var widthSteps = 100 / this.props.steps * this.props.currentStep;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2690830229',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ProgressBar"], { now: widthSteps, srOnly: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2690830229',
          css: '.progress{height:10px;border-radius:0;}.progress-bar{background-image:none;background-color:#66a9e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0ZXBzUHJvZ3Jlc3NcXFN0ZXBzUHJvZ3Jlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZTJCLEFBR3VCLEFBSVUsWUFITixVQUlTLE1BSDNCLG1CQUlBIiwiZmlsZSI6ImNvbXBvbmVudHNcXFN0ZXBzUHJvZ3Jlc3NcXFN0ZXBzUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiRTovcHJvamVjdHMvcmVhY3Qvc2luZ3VwLW1vZHVsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcblxyXG5jbGFzcyBTdGVwc1Byb2dyZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgd2lkdGhTdGVwcyA9IDEwMCAvIHRoaXMucHJvcHMuc3RlcHMgKiB0aGlzLnByb3BzLmN1cnJlbnRTdGVwO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8UHJvZ3Jlc3NCYXIgbm93PXt3aWR0aFN0ZXBzfSBzck9ubHkgLz5cclxuXHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YTllMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5TdGVwc1Byb2dyZXNzLnByb3BUeXBlcyA9IHtcclxuICBzdGVwczogUHJvcFR5cGVzLm51bWJlcixcclxuICBjdXJyZW50U3RlcDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuU3RlcHNQcm9ncmVzcy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RlcHM6IDMsXHJcbiAgY3VycmVudFN0ZXA6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwc1Byb2dyZXNzO1xyXG4iXX0= */\n/*@ sourceURL=components\\StepsProgress\\StepsProgress.js */'
        })
      );
    }
  }]);

  return StepsProgress;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

StepsProgress.propTypes = {
  steps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  currentStep: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
};
StepsProgress.defaultProps = {
  steps: 3,
  currentStep: 1
};

/* harmony default export */ __webpack_exports__["a"] = (StepsProgress);

/***/ }),

/***/ "./components/StepsProgress/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StepsProgress__ = __webpack_require__("./components/StepsProgress/StepsProgress.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__StepsProgress__["a"]; });


/***/ }),

/***/ "./components/ThirdStep/ThirdStep.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__);
var _jsxFileName = 'E:\\projects\\react\\singup-module\\components\\ThirdStep\\ThirdStep.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ThirdStep = function (_React$Component) {
  _inherits(ThirdStep, _React$Component);

  function ThirdStep(props, context) {
    _classCallCheck(this, ThirdStep);

    return _possibleConstructorReturn(this, (ThirdStep.__proto__ || Object.getPrototypeOf(ThirdStep)).call(this, props, context));
  }

  _createClass(ThirdStep, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1426029570',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1426029570' + ' ' + 'icon-block',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Glyphicon"], { glyph: 'ok', className: 'icon-block__ok', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1426029570' + ' ' + 'btn-block',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { onClick: this.props.onDashboardBtnClick, className: 'jsx-1426029570' + ' ' + 'btn btn-link go-to-dashboard-btn',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            'Go to Dashboard'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1426029570',
          css: '.icon-block.jsx-1426029570{display:block;text-align:center;font-size:34px;background:#95d66e;width:150px;height:150px;padding:58px;border-radius:50%;margin:0 auto;color:#fff;}.btn-block.jsx-1426029570{text-align:center;margin-top:45px;}.go-to-dashboard-btn.jsx-1426029570{font-size:17px;display:inline-block;vertical-align:middle;color:#66a9e2;border:1px solid #66a9e2;text-decoration:none;}.go-to-dashboard-btn.jsx-1426029570:after{content:\'\u2192\';display:inline-block;vertical-align:middle;padding-bottom:5px;margin-left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRoaXJkU3RlcFxcVGhpcmRTdGVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCb0IsQUFHMkIsQUFlSSxBQUlILEFBUUgsWUFDUyxFQTNCSCxDQW1CRyxHQUpMLGNBZEQsQ0EyQk8sQ0FaeEIsRUFJd0IsV0FsQkgsUUEyQkEsR0FSTCxRQWxCRixNQW1CYSxFQVFULElBMUJILFlBMkJmLENBMUJlLE1Ba0JRLE9BakJILGNBa0JwQixJQWpCZ0IsY0FDSCxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHNcXFRoaXJkU3RlcFxcVGhpcmRTdGVwLmpzIiwic291cmNlUm9vdCI6IkU6L3Byb2plY3RzL3JlYWN0L3Npbmd1cC1tb2R1bGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBHbHlwaGljb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuXHJcbmNsYXNzIFRoaXJkU3RlcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcclxuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBvbkRhc2hib2FyZEJ0bkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJsb2NrXCI+XHJcbiAgICAgICAgICA8R2x5cGhpY29uIGdseXBoPVwib2tcIiBjbGFzc05hbWU9XCJpY29uLWJsb2NrX19va1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZ28tdG8tZGFzaGJvYXJkLWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EYXNoYm9hcmRCdG5DbGlja30+R28gdG8gRGFzaGJvYXJkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmljb24tYmxvY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5NWQ2NmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNThweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1ibG9jayAuaWNvbi1ibG9ja19fb2sge1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmxvY2sge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ28tdG8tZGFzaGJvYXJkLWJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2YTllMjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2YTllMjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvLXRvLWRhc2hib2FyZC1idG46YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnXFx1MjE5Mic7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShUaGlyZFN0ZXApO1xyXG4iXX0= */\n/*@ sourceURL=components\\ThirdStep\\ThirdStep.js */'
        })
      );
    }
  }]);

  return ThirdStep;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

ThirdStep.propTypes = {
  onDashboardBtnClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])()(ThirdStep));

/***/ }),

/***/ "./components/ThirdStep/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ThirdStep__ = __webpack_require__("./components/ThirdStep/ThirdStep.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ThirdStep__["a"]; });


/***/ }),

/***/ "./constants/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIRST_STEP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SECOND_STEP_REQUEST; });
var FIRST_STEP_REQUEST = 'FIRST_STEP_REQUEST';
var SECOND_STEP_REQUEST = 'SECOND_STEP_REQUEST';

/***/ }),

/***/ "./pages/singup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SingUpFormWizard__ = __webpack_require__("./components/SingUpFormWizard/index.js");
var _jsxFileName = 'E:\\projects\\react\\singup-module\\pages\\singup.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SingUp = function (_React$Component) {
  _inherits(SingUp, _React$Component);

  function SingUp(props, context) {
    _classCallCheck(this, SingUp);

    return _possibleConstructorReturn(this, (SingUp.__proto__ || Object.getPrototypeOf(SingUp)).call(this, props, context));
  }

  _createClass(SingUp, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_SingUpFormWizard__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        })
      );
    }
  }]);

  return SingUp;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SingUp);

/***/ }),

/***/ "./reducers/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialFirstStepState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initialSecondStepState; });
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_auth__ = __webpack_require__("./constants/auth.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var initialState = {
  email: '',
  password: '',
  dateOfBirth: '',
  gender: '',
  howHearAboutUs: '',
  isRegister: false
};

var initialFirstStepState = {
  email: '',
  password: '',
  passwordConfirm: ''
};

var initialSecondStepState = {
  birthdayDate: '',
  birthdayMonth: '',
  birthdayYear: '',
  gender: '',
  howHearAboutUs: ''
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants_auth__["a" /* FIRST_STEP_REQUEST */]:
      return _extends({}, state, action.payload);
    case __WEBPACK_IMPORTED_MODULE_0__constants_auth__["b" /* SECOND_STEP_REQUEST */]:
      var dateOfBirth = new Date(action.payload.birthdayYear, action.payload.birthdayMonth, action.payload.birthdayDate).getTime();
      return _extends({}, state, action.payload, { dateOfBirth: dateOfBirth, isRegister: true });
    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_form__ = __webpack_require__("react-redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__("./reducers/auth.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({
  auth: __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* default */]
}, Object(__WEBPACK_IMPORTED_MODULE_1_react_redux_form__["createForms"])({
  firstStep: __WEBPACK_IMPORTED_MODULE_2__auth__["b" /* initialFirstStepState */],
  secondStep: __WEBPACK_IMPORTED_MODULE_2__auth__["c" /* initialSecondStepState */]
}))));

/***/ }),

/***/ "./store/configureStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./reducers/index.js");





function configureStore(initialState) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/singup.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-transition-group":
/***/ (function(module, exports) {

module.exports = require("react-addons-transition-group");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-redux-form":
/***/ (function(module, exports) {

module.exports = require("react-redux-form");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=singup.js.map