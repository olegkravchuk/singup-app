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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux-form");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIRST_STEP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SECOND_STEP_REQUEST; });
var FIRST_STEP_REQUEST = 'FIRST_STEP_REQUEST';
var SECOND_STEP_REQUEST = 'SECOND_STEP_REQUEST';

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(5);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external__redux_devtools_extension_ = __webpack_require__(10);
var external__redux_devtools_extension__default = /*#__PURE__*/__webpack_require__.n(external__redux_devtools_extension_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(11);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// EXTERNAL MODULE: external "react-redux-form"
var external__react_redux_form_ = __webpack_require__(6);
var external__react_redux_form__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_form_);

// EXTERNAL MODULE: ./constants/auth.js
var auth = __webpack_require__(7);

// CONCATENATED MODULE: ./reducers/auth.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var auth_initialState = {
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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : auth_initialState;
  var action = arguments[1];

  switch (action.type) {
    case auth["a" /* FIRST_STEP_REQUEST */]:
      return _extends({}, state, action.payload);
    case auth["b" /* SECOND_STEP_REQUEST */]:
      var dateOfBirth = new Date(action.payload.birthdayYear, action.payload.birthdayMonth, action.payload.birthdayDate).getTime();
      return _extends({}, state, action.payload, { dateOfBirth: dateOfBirth, isRegister: true });
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./reducers/index.js
var reducers__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ var reducers = (Object(external__redux_["combineReducers"])(reducers__extends({
  auth: user
}, Object(external__react_redux_form_["createForms"])({
  firstStep: initialFirstStepState,
  secondStep: initialSecondStepState
}))));
// CONCATENATED MODULE: ./store/configureStore.js





function configureStore(initialState) {
  return Object(external__redux_["createStore"])(reducers, initialState, Object(external__redux_devtools_extension_["composeWithDevTools"])(Object(external__redux_["applyMiddleware"])(external__redux_thunk__default.a)));
}
// EXTERNAL MODULE: external "react-bootstrap"
var external__react_bootstrap_ = __webpack_require__(3);
var external__react_bootstrap__default = /*#__PURE__*/__webpack_require__.n(external__react_bootstrap_);

// CONCATENATED MODULE: ./components/CustomNavbar/CustomNavbar.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CustomNavbar_CustomNavbar = function (_React$Component) {
  _inherits(CustomNavbar, _React$Component);

  function CustomNavbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomNavbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomNavbar.__proto__ || Object.getPrototypeOf(CustomNavbar)).call.apply(_ref, [this].concat(args))), _this), _this.onRedirect = function (path) {
      router__default.a.replace(path);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomNavbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.auth.isRegister) {
        return external__react__default.a.createElement(
          external__react_bootstrap_["Navbar"],
          null,
          external__react__default.a.createElement(
            external__react_bootstrap_["Navbar"].Header,
            null,
            external__react__default.a.createElement(
              external__react_bootstrap_["Navbar"].Brand,
              null,
              external__react__default.a.createElement(
                'a',
                { onClick: function onClick() {
                    return _this2.onRedirect("/");
                  } },
                'SingUp module'
              )
            )
          ),
          external__react__default.a.createElement(
            external__react_bootstrap_["Nav"],
            null,
            external__react__default.a.createElement(
              external__react_bootstrap_["NavItem"],
              { eventKey: 1, onClick: function onClick() {
                  return _this2.onRedirect("/about");
                } },
              'About'
            ),
            external__react__default.a.createElement(
              external__react_bootstrap_["NavItem"],
              { eventKey: 2, onClick: function onClick() {
                  return _this2.onRedirect("/contact");
                } },
              'Contact'
            )
          )
        );
      }
      return null;
    }
  }]);

  return CustomNavbar;
}(external__react__default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ var components_CustomNavbar_CustomNavbar = (Object(external__react_redux_["connect"])(mapStateToProps)(CustomNavbar_CustomNavbar));
// CONCATENATED MODULE: ./components/CustomNavbar/index.js

// CONCATENATED MODULE: ./components/Layout/Layout.js
var Layout__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Layout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Layout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var store = configureStore();

var Layout_Layout = function (_React$Component) {
  Layout__inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    Layout__classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Layout__possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.onRedirect = function (path) {
      router__default.a.replace(path);
    }, _temp), Layout__possibleConstructorReturn(_this, _ret);
  }

  Layout__createClass(Layout, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        external__react_redux_["Provider"],
        { store: store },
        external__react__default.a.createElement(
          'div',
          null,
          external__react__default.a.createElement(
            head__default.a,
            null,
            external__react__default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
            external__react__default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
              integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
              crossOrigin: 'anonymous' }),
            external__react__default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
              integrity: 'sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp',
              crossOrigin: 'anonymous' })
          ),
          external__react__default.a.createElement(components_CustomNavbar_CustomNavbar, null),
          external__react__default.a.createElement(
            'div',
            { className: 'container' },
            this.props.children
          )
        )
      );
    }
  }]);

  return Layout;
}(external__react__default.a.Component);

/* harmony default export */ var components_Layout_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./components/Layout/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return components_Layout_Layout; });


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout/index.js + 6 modules
var Layout = __webpack_require__(8);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(13);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-addons-transition-group"
var external__react_addons_transition_group_ = __webpack_require__(22);
var external__react_addons_transition_group__default = /*#__PURE__*/__webpack_require__.n(external__react_addons_transition_group_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-bootstrap"
var external__react_bootstrap_ = __webpack_require__(3);
var external__react_bootstrap__default = /*#__PURE__*/__webpack_require__.n(external__react_bootstrap_);

// CONCATENATED MODULE: ./components/StepsProgress/StepsProgress.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var StepsProgress_StepsProgress = function (_React$Component) {
  _inherits(StepsProgress, _React$Component);

  function StepsProgress(props, context) {
    _classCallCheck(this, StepsProgress);

    return _possibleConstructorReturn(this, (StepsProgress.__proto__ || Object.getPrototypeOf(StepsProgress)).call(this, props, context));
  }

  _createClass(StepsProgress, [{
    key: 'render',
    value: function render() {
      var widthSteps = 100 / this.props.steps * this.props.currentStep;
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2690830229'
        },
        external__react__default.a.createElement(external__react_bootstrap_["ProgressBar"], { now: widthSteps, srOnly: true }),
        external__react__default.a.createElement(style__default.a, {
          styleId: '2690830229',
          css: ['.progress{height:10px;border-radius:0;}', '.progress-bar{background-image:none;background-color:#66a9e2;}']
        })
      );
    }
  }]);

  return StepsProgress;
}(external__react__default.a.Component);

StepsProgress_StepsProgress.defaultProps = {
  steps: 3,
  currentStep: 1
};

/* harmony default export */ var components_StepsProgress_StepsProgress = (StepsProgress_StepsProgress);
// CONCATENATED MODULE: ./components/StepsProgress/index.js

// CONCATENATED MODULE: ./components/CustomModal/CustomModal.js
var CustomModal__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function CustomModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CustomModal__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function CustomModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CustomModal_CustomModal = function (_React$Component) {
  CustomModal__inherits(CustomModal, _React$Component);

  function CustomModal() {
    CustomModal__classCallCheck(this, CustomModal);

    return CustomModal__possibleConstructorReturn(this, (CustomModal.__proto__ || Object.getPrototypeOf(CustomModal)).apply(this, arguments));
  }

  CustomModal__createClass(CustomModal, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        external__react_bootstrap_["Modal"],
        { show: this.props.show },
        this.props.children
      );
    }
  }]);

  return CustomModal;
}(external__react__default.a.Component);

CustomModal_CustomModal.defaultProps = {
  show: true
};

/* harmony default export */ var components_CustomModal_CustomModal = (CustomModal_CustomModal);
// CONCATENATED MODULE: ./components/CustomModal/index.js

// EXTERNAL MODULE: external "react-redux-form"
var external__react_redux_form_ = __webpack_require__(6);
var external__react_redux_form__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_form_);

// CONCATENATED MODULE: ./components/FirstStep/FirstStep.js
var FirstStep__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function FirstStep__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FirstStep__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function FirstStep__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FirstStep_emailField = function emailField(props) {
  return external__react__default.a.createElement(external__react_bootstrap_["FormControl"], _extends({ type: 'text' }, props));
};
var FirstStep_passwordField = function passwordField(props) {
  return external__react__default.a.createElement(external__react_bootstrap_["FormControl"], _extends({ type: 'password' }, props));
};

var FirstStep_FirstStep = function (_React$Component) {
  FirstStep__inherits(FirstStep, _React$Component);

  function FirstStep() {
    var _ref;

    var _temp, _this, _ret;

    FirstStep__classCallCheck(this, FirstStep);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = FirstStep__possibleConstructorReturn(this, (_ref = FirstStep.__proto__ || Object.getPrototypeOf(FirstStep)).call.apply(_ref, [this].concat(args))), _this), _this.isError = function (field) {
      if (field.valid && field.touched) {
        return "success";
      } else if (!field.valid && field.touched && !field.focus) {
        return "error";
      }
      return null;
    }, _this.handleSubmit = function (data) {
      _this.props.onNext(data);
    }, _temp), FirstStep__possibleConstructorReturn(_this, _ret);
  }

  FirstStep__createClass(FirstStep, [{
    key: 'render',
    value: function render() {
      var formsFirstStep = this.props.formsFirstStep;

      return external__react__default.a.createElement(
        external__react_redux_form_["Form"],
        {
          model: 'firstStep',
          onSubmit: this.handleSubmit
        },
        external__react__default.a.createElement(
          external__react_bootstrap_["FormGroup"],
          { validationState: this.isError(formsFirstStep.email) },
          external__react__default.a.createElement(
            external__react_bootstrap_["ControlLabel"],
            null,
            'Email'
          ),
          external__react__default.a.createElement(external__react_redux_form_["Control"], {
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
            component: FirstStep_emailField
          }),
          external__react__default.a.createElement(external__react_bootstrap_["FormControl"].Feedback, null),
          external__react__default.a.createElement(external__react_redux_form_["Errors"], { wrapper: function wrapper(props) {
              return external__react__default.a.createElement(
                external__react_bootstrap_["HelpBlock"],
                null,
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
            }
          })
        ),
        external__react__default.a.createElement(
          external__react_bootstrap_["FormGroup"],
          { validationState: this.isError(formsFirstStep.password) },
          external__react__default.a.createElement(
            external__react_bootstrap_["ControlLabel"],
            null,
            'Password'
          ),
          external__react__default.a.createElement(external__react_redux_form_["Control"], {
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
            component: FirstStep_passwordField
          }),
          external__react__default.a.createElement(external__react_bootstrap_["FormControl"].Feedback, null),
          external__react__default.a.createElement(external__react_redux_form_["Errors"], { wrapper: function wrapper(props) {
              return external__react__default.a.createElement(
                external__react_bootstrap_["HelpBlock"],
                null,
                props.children
              );
            },
            show: { touched: true, focus: false },
            model: '.password',
            messages: {
              isRequired: "Please provide a password.",
              minLength: "Password should be minimum 6 characters long",
              passwordsMatch: "Password doesn`t equal password confirm."
            }
          })
        ),
        external__react__default.a.createElement(
          external__react_bootstrap_["FormGroup"],
          { validationState: this.isError(formsFirstStep.passwordConfirm) },
          external__react__default.a.createElement(
            external__react_bootstrap_["ControlLabel"],
            null,
            'Confirm password'
          ),
          external__react__default.a.createElement(external__react_redux_form_["Control"], {
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
            component: FirstStep_passwordField
          }),
          external__react__default.a.createElement(external__react_bootstrap_["FormControl"].Feedback, null),
          external__react__default.a.createElement(external__react_redux_form_["Errors"], { wrapper: function wrapper(props) {
              return external__react__default.a.createElement(
                external__react_bootstrap_["HelpBlock"],
                null,
                props.children
              );
            },
            show: { touched: true, focus: false },
            model: '.passwordConfirm',
            messages: {
              isRequired: 'Please provide a password confirm.',
              minLength: "Password should be minimum 6 characters long.",
              passwordsMatch: 'Password confirm doesn`t equal password.'
            }
          })
        ),
        external__react__default.a.createElement(
          'button',
          { type: 'submit', className: 'btn btn-link next-btn' },
          'Next'
        )
      );
    }
  }]);

  return FirstStep;
}(external__react__default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    formsFirstStep: state.forms.firstStep
  };
};

/* harmony default export */ var components_FirstStep_FirstStep = (Object(external__react_redux_["connect"])(mapStateToProps)(FirstStep_FirstStep));
// CONCATENATED MODULE: ./components/FirstStep/index.js

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(23);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// CONCATENATED MODULE: ./components/SecondStep/SecondStep.js
var SecondStep__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var SecondStep__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function SecondStep__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SecondStep__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SecondStep__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SecondStep_birthdayField = function birthdayField(props) {
  return external__react__default.a.createElement(external__react_bootstrap_["FormControl"], SecondStep__extends({ type: 'text' }, props));
};
var SecondStep_selectAboutField = function selectAboutField(props) {
  return external__react__default.a.createElement(
    external__react_bootstrap_["FormControl"],
    SecondStep__extends({ componentClass: 'select' }, props),
    external__react__default.a.createElement(
      'option',
      { value: '' },
      ''
    ),
    external__react__default.a.createElement(
      'option',
      { value: 'In social networks' },
      'In social networks'
    ),
    external__react__default.a.createElement(
      'option',
      { value: 'From friends' },
      'From friends'
    ),
    external__react__default.a.createElement(
      'option',
      { value: 'Other' },
      'Other'
    )
  );
};

var SecondStep_SecondStep = function (_React$Component) {
  SecondStep__inherits(SecondStep, _React$Component);

  function SecondStep(props, context) {
    SecondStep__classCallCheck(this, SecondStep);

    var _this = SecondStep__possibleConstructorReturn(this, (SecondStep.__proto__ || Object.getPrototypeOf(SecondStep)).call(this, props, context));

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
      _this.props.dispatch(external__react_redux_form_["actions"].change("secondStep.gender", e));
    };

    _this.handleSubmit = function (data) {
      if (!external__react_dom__default.a.findDOMNode(_this.ageError)) {
        _this.props.onNext(data);
      }
    };

    _this.state = {
      genderValue: "male" // female unspecified
    };
    return _this;
  }

  SecondStep__createClass(SecondStep, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch(external__react_redux_form_["actions"].change("secondStep.gender", this.state.genderValue));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formsSecondStep = this.props.formsSecondStep;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-87500101'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-87500101' + ' ' + 'form-title'
          },
          'DATE OF BIRTH'
        ),
        external__react__default.a.createElement(
          external__react_redux_form_["Form"],
          {
            model: 'secondStep',
            onSubmit: this.handleSubmit
          },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-87500101' + ' ' + 'birthday-fields'
            },
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'birthday-fields__item'
              },
              external__react__default.a.createElement(
                external__react_bootstrap_["FormGroup"],
                { validationState: this.isError(formsSecondStep.birthdayDate) },
                external__react__default.a.createElement(external__react_redux_form_["Control"], {
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
                  component: SecondStep_birthdayField
                }),
                external__react__default.a.createElement(external__react_bootstrap_["FormControl"].Feedback, null),
                external__react__default.a.createElement(external__react_redux_form_["Errors"], { wrapper: function wrapper(props) {
                    return external__react__default.a.createElement(
                      external__react_bootstrap_["HelpBlock"],
                      null,
                      props.children
                    );
                  },
                  show: { touched: true, focus: false },
                  model: '.birthdayDate',
                  messages: {
                    isRequired: "Please provide a date.",
                    isNumber: "Date should be a number.",
                    isRange: "Date should be between 1 and 31."
                  }
                })
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'birthday-fields__item'
              },
              external__react__default.a.createElement(
                external__react_bootstrap_["FormGroup"],
                { validationState: this.isError(formsSecondStep.birthdayMonth) },
                external__react__default.a.createElement(external__react_redux_form_["Control"], {
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
                  component: SecondStep_birthdayField
                }),
                external__react__default.a.createElement(external__react_bootstrap_["FormControl"].Feedback, null),
                external__react__default.a.createElement(external__react_redux_form_["Errors"], { wrapper: function wrapper(props) {
                    return external__react__default.a.createElement(
                      external__react_bootstrap_["HelpBlock"],
                      null,
                      props.children
                    );
                  },
                  show: { touched: true, focus: false },
                  model: '.birthdayMonth',
                  messages: {
                    isRequired: "Please provide a month.",
                    isNumber: "Month should be a number.",
                    isRange: "Month should be between 1 and 12."
                  }
                })
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'birthday-fields__item'
              },
              external__react__default.a.createElement(
                external__react_bootstrap_["FormGroup"],
                { validationState: this.isError(formsSecondStep.birthdayYear) },
                external__react__default.a.createElement(external__react_redux_form_["Control"], {
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
                  component: SecondStep_birthdayField
                }),
                external__react__default.a.createElement(external__react_bootstrap_["FormControl"].Feedback, null),
                external__react__default.a.createElement(external__react_redux_form_["Errors"], { wrapper: function wrapper(props) {
                    return external__react__default.a.createElement(
                      external__react_bootstrap_["HelpBlock"],
                      null,
                      props.children
                    );
                  },
                  show: { touched: true, focus: false },
                  model: '.birthdayYear',
                  messages: {
                    isRequired: "Please provide a year.",
                    isNumber: "Year should be a number."
                  }
                })
              )
            ),
            !this.checkAge(18) && external__react__default.a.createElement(
              'div',
              { ref: function ref(node) {
                  _this2.ageError = node;
                }, className: 'jsx-87500101' + ' ' + 'error-age'
              },
              'You must be aged 18 years or older'
            )
          ),
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-87500101' + ' ' + 'form-gender'
            },
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'form-title'
              },
              'GENDER'
            ),
            external__react__default.a.createElement(
              external__react_bootstrap_["ToggleButtonGroup"],
              {
                justified: true,
                name: 'gender',
                type: 'radio',
                value: this.state.genderValue,
                onChange: this.handleGenderChange
              },
              external__react__default.a.createElement(
                external__react_bootstrap_["ToggleButton"],
                { value: 'male' },
                'MALE'
              ),
              external__react__default.a.createElement(
                external__react_bootstrap_["ToggleButton"],
                { value: 'female' },
                'FEMALE'
              ),
              external__react__default.a.createElement(
                external__react_bootstrap_["ToggleButton"],
                { value: 'unspecified' },
                'UNSPECIFIED'
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-87500101' + ' ' + 'form-about'
            },
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-87500101' + ' ' + 'form-title'
              },
              'WHERE DID YOU HEAR ABOUT IS?'
            ),
            external__react__default.a.createElement(
              external__react_bootstrap_["FormGroup"],
              null,
              external__react__default.a.createElement(external__react_redux_form_["Control"], {
                model: '.howHearAboutUs',
                component: SecondStep_selectAboutField
              }),
              external__react__default.a.createElement(external__react_bootstrap_["FormControl"].Feedback, null),
              external__react__default.a.createElement(external__react_redux_form_["Errors"], { wrapper: function wrapper(props) {
                  return external__react__default.a.createElement(
                    external__react_bootstrap_["HelpBlock"],
                    null,
                    props.children
                  );
                },
                show: { touched: true, focus: false },
                model: '.howHearAboutUs'
              })
            )
          ),
          external__react__default.a.createElement(
            'button',
            { type: 'submit', className: 'jsx-87500101' + ' ' + 'btn btn-link next-btn'
            },
            'Next'
          )
        ),
        external__react__default.a.createElement(
          'button',
          { onClick: this.props.onBack, className: 'jsx-87500101' + ' ' + 'btn btn-link back-btn'
          },
          'Back'
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '87500101',
          css: ['.form-title{text-align:center;margin-bottom:20px;}', '.birthday-fields{width:100%;}', '.birthday-fields .birthday-fields__item{width:33.333%;display:inline-block;vertical-align:top;}', '.form-gender .btn-default{background:#fff;}', '.form-gender .btn-default.active{background:#66a9e2;color:#fff;}', '.form-about{margin-top:20px;}', '.error-age{color:#a94442;margin-bottom:15px;}']
        })
      );
    }
  }]);

  return SecondStep;
}(external__react__default.a.Component);

var SecondStep_mapStateToProps = function mapStateToProps(state) {
  return {
    formsSecondStep: state.forms.secondStep
  };
};

/* harmony default export */ var components_SecondStep_SecondStep = (Object(external__react_redux_["connect"])(SecondStep_mapStateToProps)(SecondStep_SecondStep));
// CONCATENATED MODULE: ./components/SecondStep/index.js

// CONCATENATED MODULE: ./components/ThirdStep/ThirdStep.js
var ThirdStep__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function ThirdStep__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ThirdStep__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ThirdStep__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ThirdStep_ThirdStep = function (_React$Component) {
  ThirdStep__inherits(ThirdStep, _React$Component);

  function ThirdStep(props, context) {
    ThirdStep__classCallCheck(this, ThirdStep);

    return ThirdStep__possibleConstructorReturn(this, (ThirdStep.__proto__ || Object.getPrototypeOf(ThirdStep)).call(this, props, context));
  }

  ThirdStep__createClass(ThirdStep, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-1426029570'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-1426029570' + ' ' + 'icon-block'
          },
          external__react__default.a.createElement(external__react_bootstrap_["Glyphicon"], { glyph: 'ok', className: 'icon-block__ok' })
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-1426029570' + ' ' + 'btn-block'
          },
          external__react__default.a.createElement(
            'button',
            { onClick: this.props.onDashboardBtnClick, className: 'jsx-1426029570' + ' ' + 'btn btn-link go-to-dashboard-btn'
            },
            'Go to Dashboard'
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '1426029570',
          css: ['.icon-block.jsx-1426029570{display:block;text-align:center;font-size:34px;background:#95d66e;width:150px;height:150px;padding:58px;border-radius:50%;margin:0 auto;color:#fff;}', '.btn-block.jsx-1426029570{text-align:center;margin-top:45px;}', '.go-to-dashboard-btn.jsx-1426029570{font-size:17px;display:inline-block;vertical-align:middle;color:#66a9e2;border:1px solid #66a9e2;text-decoration:none;}', '.go-to-dashboard-btn.jsx-1426029570:after{content:\'\u2192\';display:inline-block;vertical-align:middle;padding-bottom:5px;margin-left:5px;}']
        })
      );
    }
  }]);

  return ThirdStep;
}(external__react__default.a.Component);

/* harmony default export */ var components_ThirdStep_ThirdStep = (Object(external__react_redux_["connect"])()(ThirdStep_ThirdStep));
// CONCATENATED MODULE: ./components/ThirdStep/index.js

// EXTERNAL MODULE: ./constants/auth.js
var auth = __webpack_require__(7);

// CONCATENATED MODULE: ./actions/auth.js


function firstStep(data) {
  return {
    type: auth["a" /* FIRST_STEP_REQUEST */],
    payload: data
  };
}
function secondStep(data) {
  return {
    type: auth["b" /* SECOND_STEP_REQUEST */],
    payload: data
  };
}
// CONCATENATED MODULE: ./components/SingUpFormWizard/SingUpFormWizard.js
var SingUpFormWizard__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function SingUpFormWizard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingUpFormWizard__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SingUpFormWizard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SingUpFormWizard_SingUpFormWizard = function (_React$Component) {
  SingUpFormWizard__inherits(SingUpFormWizard, _React$Component);

  function SingUpFormWizard(props, context) {
    SingUpFormWizard__classCallCheck(this, SingUpFormWizard);

    var _this = SingUpFormWizard__possibleConstructorReturn(this, (SingUpFormWizard.__proto__ || Object.getPrototypeOf(SingUpFormWizard)).call(this, props, context));

    _this.nextStep = function () {
      _this.setState({ step: _this.state.step + 1 });
    };

    _this.previousStep = function () {
      _this.setState({ step: _this.state.step - 1 });
    };

    _this.onFirstStep = function (data) {
      _this.props.dispatch(firstStep(data));
      _this.nextStep();
    };

    _this.onSecondStep = function (data) {
      _this.props.dispatch(secondStep(data));
      _this.nextStep();
    };

    _this.onDashboardBtnClick = function () {
      router__default.a.replace('/');
    };

    _this.state = {
      step: 1
    };
    return _this;
  }

  SingUpFormWizard__createClass(SingUpFormWizard, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-142636939'
        },
        external__react__default.a.createElement(
          components_CustomModal_CustomModal,
          { className: 'modal' },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'modal__title'
            },
            this.state.step <= 2 ? "Singup" : "Thank you!"
          ),
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-142636939'
            },
            external__react__default.a.createElement(components_StepsProgress_StepsProgress, { currentStep: this.state.step, steps: 3 })
          ),
          this.state.step === 1 && external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'form'
            },
            external__react__default.a.createElement(components_FirstStep_FirstStep, { onNext: this.onFirstStep })
          ),
          this.state.step === 2 && external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'form'
            },
            external__react__default.a.createElement(components_SecondStep_SecondStep, { onBack: this.previousStep, onNext: this.onSecondStep })
          ),
          this.state.step === 3 && external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-142636939' + ' ' + 'form without-border'
            },
            external__react__default.a.createElement(components_ThirdStep_ThirdStep, { onDashboardBtnClick: this.onDashboardBtnClick })
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '142636939',
          css: ['.modal-dialog{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) !important;-ms-transform:translate(-50%,-50%) !important;transform:translate(-50%,-50%) !important;}', '.modal .modal__title{display:block;color:#66a9e2;text-align:center;margin-top:20px;margin-bottom:20px;font-size:18px;}', '.form{margin:60px 10px;padding-bottom:60px;border-bottom:1px solid #808080;}', '.without-border{border:none;}', '.next-btn{position:absolute;right:10px;bottom:10px;text-decoration:none;font-size:15px;display:inline-block;vertical-align:middle;color:#66a9e2;}', '.next-btn:after{content:\'\u2192\';display:inline-block;vertical-align:middle;padding-bottom:5px;margin-left:5px;}', '.back-btn{position:absolute;left:10px;bottom:10px;text-decoration:none;font-size:15px;display:inline-block;vertical-align:middle;color:#808080;}']
        })
      );
    }
  }]);

  return SingUpFormWizard;
}(external__react__default.a.Component);

var SingUpFormWizard_mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ var components_SingUpFormWizard_SingUpFormWizard = (Object(external__react_redux_["connect"])(SingUpFormWizard_mapStateToProps)(SingUpFormWizard_SingUpFormWizard));
// CONCATENATED MODULE: ./components/SingUpFormWizard/index.js

// CONCATENATED MODULE: ./pages/singup.js
var singup__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function singup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function singup__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function singup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var singup_SingUp = function (_React$Component) {
  singup__inherits(SingUp, _React$Component);

  function SingUp(props, context) {
    singup__classCallCheck(this, SingUp);

    return singup__possibleConstructorReturn(this, (SingUp.__proto__ || Object.getPrototypeOf(SingUp)).call(this, props, context));
  }

  singup__createClass(SingUp, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        Layout["a" /* default */],
        null,
        external__react__default.a.createElement(components_SingUpFormWizard_SingUpFormWizard, null)
      );
    }
  }]);

  return SingUp;
}(external__react__default.a.Component);

/* harmony default export */ var singup = __webpack_exports__["default"] = (singup_SingUp);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-addons-transition-group");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })
/******/ ]);