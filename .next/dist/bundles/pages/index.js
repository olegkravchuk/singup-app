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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/SingUpRequired/SingUpRequired.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SingUpRequired_SingUpRequired = function (_React$Component) {
  _inherits(SingUpRequired, _React$Component);

  function SingUpRequired() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingUpRequired);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingUpRequired.__proto__ || Object.getPrototypeOf(SingUpRequired)).call.apply(_ref, [this].concat(args))), _this), _this.onRedirect = function (path) {
      router__default.a.replace(path);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingUpRequired, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.auth.isRegister) {
        router__default.a.replace('/singup');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return SingUpRequired;
}(external__react__default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ var components_SingUpRequired_SingUpRequired = (Object(external__react_redux_["connect"])(mapStateToProps)(SingUpRequired_SingUpRequired));
// CONCATENATED MODULE: ./components/SingUpRequired/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return components_SingUpRequired_SingUpRequired; });


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout/index.js + 6 modules
var Layout = __webpack_require__(8);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "react-bootstrap"
var external__react_bootstrap_ = __webpack_require__(3);
var external__react_bootstrap__default = /*#__PURE__*/__webpack_require__.n(external__react_bootstrap_);

// CONCATENATED MODULE: ./components/Dashboard/Dashboard.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Dashboard_Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props, context) {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props, context));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      var auth = this.props.auth;

      return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
          'div',
          null,
          'User information'
        ),
        external__react__default.a.createElement(
          external__react_bootstrap_["Table"],
          { striped: true, bordered: true, condensed: true, hover: true },
          external__react__default.a.createElement(
            'thead',
            null,
            external__react__default.a.createElement(
              'tr',
              null,
              external__react__default.a.createElement(
                'th',
                null,
                'Email'
              ),
              external__react__default.a.createElement(
                'th',
                null,
                'Password'
              ),
              external__react__default.a.createElement(
                'th',
                null,
                'Date of birth'
              ),
              external__react__default.a.createElement(
                'th',
                null,
                'Gender'
              ),
              external__react__default.a.createElement(
                'th',
                null,
                'How hear about us'
              )
            )
          ),
          external__react__default.a.createElement(
            'tbody',
            null,
            external__react__default.a.createElement(
              'tr',
              null,
              external__react__default.a.createElement(
                'td',
                null,
                auth.email
              ),
              external__react__default.a.createElement(
                'td',
                null,
                auth.password
              ),
              external__react__default.a.createElement(
                'td',
                null,
                auth.dateOfBirth
              ),
              external__react__default.a.createElement(
                'td',
                null,
                auth.gender
              ),
              external__react__default.a.createElement(
                'td',
                null,
                auth.howHearAboutUs
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(external__react__default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ var components_Dashboard_Dashboard = (Object(external__react_redux_["connect"])(mapStateToProps)(Dashboard_Dashboard));
// CONCATENATED MODULE: ./components/Dashboard/index.js

// EXTERNAL MODULE: ./components/SingUpRequired/index.js + 1 modules
var SingUpRequired = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/index.js
var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var pages_Index = function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index(props, context) {
    pages__classCallCheck(this, Index);

    return pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props, context));
  }

  pages__createClass(Index, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        Layout["a" /* default */],
        null,
        external__react__default.a.createElement(SingUpRequired["a" /* default */], null),
        external__react__default.a.createElement(components_Dashboard_Dashboard, null)
      );
    }
  }]);

  return Index;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);