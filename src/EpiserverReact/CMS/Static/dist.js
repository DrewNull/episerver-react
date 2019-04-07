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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./cms/static/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Static/js/features/content/BannerBlock.js":
/*!***************************************************!*\
  !*** ./Static/js/features/content/BannerBlock.js ***!
  \***************************************************/
/*! exports provided: default, BannerBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BannerBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BannerBlockModel\", function() { return BannerBlockModel; });\n/* harmony import */ var _foundation_ContentModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../foundation/ContentModel */ \"./Static/js/foundation/ContentModel.js\");\n/* harmony import */ var _foundation_media_ImageMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../foundation/media/ImageMedia */ \"./Static/js/foundation/media/ImageMedia.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar BannerBlock =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(BannerBlock, _React$Component);\n\n  function BannerBlock() {\n    _classCallCheck(this, BannerBlock);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BannerBlock).apply(this, arguments));\n  }\n\n  _createClass(BannerBlock, [{\n    key: \"render\",\n    value: function render() {\n      /** @type {BannerBlockModel} */\n      var model = this.props.data;\n      return React.createElement(\"div\", null, React.createElement(\"h2\", null, \"Banner Block: \", model.name), React.createElement(_foundation_media_ImageMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        data: model.background.expandedValue\n      }));\n    }\n  }]);\n\n  return BannerBlock;\n}(React.Component);\n\n\nvar BannerBlockModel =\n/*#__PURE__*/\nfunction (_ContentModel) {\n  _inherits(BannerBlockModel, _ContentModel);\n\n  function BannerBlockModel() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, BannerBlockModel);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BannerBlockModel)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"background\", void 0);\n\n    return _this;\n  }\n\n  return BannerBlockModel;\n}(_foundation_ContentModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./Static/js/features/content/BannerBlock.js?");

/***/ }),

/***/ "./Static/js/features/content/GridBlock.js":
/*!*************************************************!*\
  !*** ./Static/js/features/content/GridBlock.js ***!
  \*************************************************/
/*! exports provided: default, GridBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GridBlockModel\", function() { return GridBlockModel; });\n/* harmony import */ var _foundation_ContentModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../foundation/ContentModel */ \"./Static/js/foundation/ContentModel.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar GridBlock =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(GridBlock, _React$Component);\n\n  function GridBlock() {\n    _classCallCheck(this, GridBlock);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(GridBlock).apply(this, arguments));\n  }\n\n  _createClass(GridBlock, [{\n    key: \"render\",\n    value: function render() {\n      /** @type {GridBlockModel} */\n      var model = this.props.data;\n      return React.createElement(\"div\", null, React.createElement(\"h2\", null, \"Grid Block: \", model.name));\n    }\n  }]);\n\n  return GridBlock;\n}(React.Component);\n\n\nvar GridBlockModel =\n/*#__PURE__*/\nfunction (_ContentModel) {\n  _inherits(GridBlockModel, _ContentModel);\n\n  function GridBlockModel() {\n    _classCallCheck(this, GridBlockModel);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(GridBlockModel).apply(this, arguments));\n  }\n\n  return GridBlockModel;\n}(_foundation_ContentModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./Static/js/features/content/GridBlock.js?");

/***/ }),

/***/ "./Static/js/features/content/RichTextBlock.js":
/*!*****************************************************!*\
  !*** ./Static/js/features/content/RichTextBlock.js ***!
  \*****************************************************/
/*! exports provided: default, RichTextBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RichTextBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RichTextBlockModel\", function() { return RichTextBlockModel; });\n/* harmony import */ var _foundation_ContentModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../foundation/ContentModel */ \"./Static/js/foundation/ContentModel.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar RichTextBlock =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(RichTextBlock, _React$Component);\n\n  function RichTextBlock() {\n    _classCallCheck(this, RichTextBlock);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(RichTextBlock).apply(this, arguments));\n  }\n\n  _createClass(RichTextBlock, [{\n    key: \"render\",\n    value: function render() {\n      /** @type {RichTextBlockModel} */\n      var model = this.props.data;\n      return React.createElement(\"div\", null, React.createElement(\"h2\", null, \"Rich Text Block: \", model.name));\n    }\n  }]);\n\n  return RichTextBlock;\n}(React.Component);\n\n\nvar RichTextBlockModel =\n/*#__PURE__*/\nfunction (_ContentModel) {\n  _inherits(RichTextBlockModel, _ContentModel);\n\n  function RichTextBlockModel() {\n    _classCallCheck(this, RichTextBlockModel);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(RichTextBlockModel).apply(this, arguments));\n  }\n\n  return RichTextBlockModel;\n}(_foundation_ContentModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./Static/js/features/content/RichTextBlock.js?");

/***/ }),

/***/ "./Static/js/features/home/HomePage.js":
/*!*********************************************!*\
  !*** ./Static/js/features/home/HomePage.js ***!
  \*********************************************/
/*! exports provided: default, HomePageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageModel\", function() { return HomePageModel; });\n/* harmony import */ var _foundation_ComponentFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../foundation/ComponentFactory */ \"./Static/js/foundation/ComponentFactory.js\");\n/* harmony import */ var _foundation_ContentPageModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../foundation/ContentPageModel */ \"./Static/js/foundation/ContentPageModel.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  function HomePage() {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));\n  }\n\n  _createClass(HomePage, [{\n    key: \"render\",\n    value: function render() {\n      /** @type {HomePageModel} */\n      var model = this.props.data;\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"Home Page: \", model.name), React.createElement(\"div\", null, \"Main Content:\", _foundation_ComponentFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createFromContentArea(model.mainContent)), React.createElement(\"div\", null, \"Side Content:\", _foundation_ComponentFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createFromContentArea(model.sideContent)));\n    }\n  }]);\n\n  return HomePage;\n}(React.Component);\n\n\nvar HomePageModel =\n/*#__PURE__*/\nfunction (_ContentPageModel) {\n  _inherits(HomePageModel, _ContentPageModel);\n\n  function HomePageModel() {\n    _classCallCheck(this, HomePageModel);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HomePageModel).apply(this, arguments));\n  }\n\n  return HomePageModel;\n}(_foundation_ContentPageModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./Static/js/features/home/HomePage.js?");

/***/ }),

/***/ "./Static/js/foundation/ComponentDefinitions.js":
/*!******************************************************!*\
  !*** ./Static/js/foundation/ComponentDefinitions.js ***!
  \******************************************************/
/*! exports provided: ComponentDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ComponentDefinitions\", function() { return ComponentDefinitions; });\n/* harmony import */ var _features_content_BannerBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/content/BannerBlock */ \"./Static/js/features/content/BannerBlock.js\");\n/* harmony import */ var _features_content_GridBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/content/GridBlock */ \"./Static/js/features/content/GridBlock.js\");\n/* harmony import */ var _features_home_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/home/HomePage */ \"./Static/js/features/home/HomePage.js\");\n/* harmony import */ var _media_ImageMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/ImageMedia */ \"./Static/js/foundation/media/ImageMedia.js\");\n/* harmony import */ var _features_content_RichTextBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/content/RichTextBlock */ \"./Static/js/features/content/RichTextBlock.js\");\n\n\n\n\n\n/** Needed to dynamically render components */\n\nvar ComponentDefinitions = {\n  'BannerBlock': _features_content_BannerBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'GridBlock': _features_content_GridBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'HomePage': _features_home_HomePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'ImageMedia': _media_ImageMedia__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'RichTextBlock': _features_content_RichTextBlock__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\n\n//# sourceURL=webpack:///./Static/js/foundation/ComponentDefinitions.js?");

/***/ }),

/***/ "./Static/js/foundation/ComponentFactory.js":
/*!**************************************************!*\
  !*** ./Static/js/foundation/ComponentFactory.js ***!
  \**************************************************/
/*! exports provided: default, EpiContentArea, EpiContentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EpiContentArea\", function() { return EpiContentArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EpiContentData\", function() { return EpiContentData; });\n/* harmony import */ var _ComponentDefinitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentDefinitions */ \"./Static/js/foundation/ComponentDefinitions.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/** Creates React components from Episerver content */\n\nvar ComponentFactory =\n/*#__PURE__*/\nfunction () {\n  function ComponentFactory() {\n    _classCallCheck(this, ComponentFactory);\n  }\n\n  _createClass(ComponentFactory, null, [{\n    key: \"createFromContentData\",\n\n    /**\r\n     * Creates a React component from an Episerver content item\r\n     * @param {EpiContentData} epiContentData \r\n     * @param {*=} key \r\n     */\n    value: function createFromContentData(epiContentData, key) {\n      var contentType = EpiContentData.getContentType(epiContentData);\n      var ComponentDefinition = _ComponentDefinitions__WEBPACK_IMPORTED_MODULE_0__[\"ComponentDefinitions\"][contentType];\n      return React.createElement(ComponentDefinition, {\n        data: epiContentData,\n        key: key\n      });\n    }\n    /** \r\n     * Creates a list of React components from an Episerver content area\r\n     * @param {EpiContentArea} epiContentArea\r\n     */\n\n  }, {\n    key: \"createFromContentArea\",\n    value: function createFromContentArea(epiContentArea) {\n      var components = [];\n      var items = epiContentArea.expandedValue || [];\n\n      if (items && items.length > 0) {\n        for (var key = 0; key < items.length; key++) {\n          var item = items[key];\n          var component = ComponentFactory.createFromContentData(item, key);\n          components.push(component);\n        }\n      }\n\n      return components;\n    }\n  }]);\n\n  return ComponentFactory;\n}();\n/** Represents an Episerver ContentArea */\n\n\n\nvar EpiContentArea = function EpiContentArea() {\n  _classCallCheck(this, EpiContentArea);\n\n  _defineProperty(this, \"expandedValue\", void 0);\n};\n/** Represents an Episerver ContentData instance */\n\nvar EpiContentData =\n/*#__PURE__*/\nfunction () {\n  function EpiContentData() {\n    _classCallCheck(this, EpiContentData);\n\n    _defineProperty(this, \"contentType\", void 0);\n  }\n\n  _createClass(EpiContentData, null, [{\n    key: \"getContentType\",\n    value: function getContentType(contentData) {\n      return contentData && contentData.contentType && contentData.contentType[contentData.contentType.length - 1] || '';\n    }\n  }]);\n\n  return EpiContentData;\n}();\n\n//# sourceURL=webpack:///./Static/js/foundation/ComponentFactory.js?");

/***/ }),

/***/ "./Static/js/foundation/ContentModel.js":
/*!**********************************************!*\
  !*** ./Static/js/foundation/ContentModel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentModel; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ContentModel = function ContentModel() {\n  _classCallCheck(this, ContentModel);\n\n  _defineProperty(this, \"name\", void 0);\n};\n\n\n\n//# sourceURL=webpack:///./Static/js/foundation/ContentModel.js?");

/***/ }),

/***/ "./Static/js/foundation/ContentPageModel.js":
/*!**************************************************!*\
  !*** ./Static/js/foundation/ContentPageModel.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContentPageModel; });\n/* harmony import */ var _ContentModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentModel */ \"./Static/js/foundation/ContentModel.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar ContentPageModel =\n/*#__PURE__*/\nfunction (_ContentModel) {\n  _inherits(ContentPageModel, _ContentModel);\n\n  function ContentPageModel() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ContentPageModel);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentPageModel)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"mainContent\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"sideContent\", void 0);\n\n    return _this;\n  }\n\n  return ContentPageModel;\n}(_ContentModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./Static/js/foundation/ContentPageModel.js?");

/***/ }),

/***/ "./Static/js/foundation/media/ImageMedia.js":
/*!**************************************************!*\
  !*** ./Static/js/foundation/media/ImageMedia.js ***!
  \**************************************************/
/*! exports provided: default, ImageMediaModel, ImageMediaModelWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ImageMedia; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageMediaModel\", function() { return ImageMediaModel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageMediaModelWrapper\", function() { return ImageMediaModelWrapper; });\n/* harmony import */ var _properties_LongStringProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../properties/LongStringProperty */ \"./Static/js/foundation/properties/LongStringProperty.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar ImageMedia =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ImageMedia, _React$Component);\n\n  function ImageMedia() {\n    _classCallCheck(this, ImageMedia);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ImageMedia).apply(this, arguments));\n  }\n\n  _createClass(ImageMedia, [{\n    key: \"render\",\n    value: function render() {\n      /** @type {ImageMediaModel} */\n      var model = this.props.data;\n      return React.createElement(\"img\", {\n        src: model.url,\n        alt: model.alternateText.value\n      });\n    }\n  }]);\n\n  return ImageMedia;\n}(React.Component);\n\n\nvar ImageMediaModel = function ImageMediaModel() {\n  _classCallCheck(this, ImageMediaModel);\n\n  _defineProperty(this, \"alternateText\", void 0);\n\n  _defineProperty(this, \"url\", void 0);\n};\nvar ImageMediaModelWrapper = function ImageMediaModelWrapper() {\n  _classCallCheck(this, ImageMediaModelWrapper);\n\n  _defineProperty(this, \"expandedValue\", void 0);\n};\n\n//# sourceURL=webpack:///./Static/js/foundation/media/ImageMedia.js?");

/***/ }),

/***/ "./Static/js/foundation/properties/LongStringProperty.js":
/*!***************************************************************!*\
  !*** ./Static/js/foundation/properties/LongStringProperty.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LongStringProperty; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar LongStringProperty = function LongStringProperty() {\n  _classCallCheck(this, LongStringProperty);\n\n  _defineProperty(this, \"value\", void 0);\n};\n\n\n\n//# sourceURL=webpack:///./Static/js/foundation/properties/LongStringProperty.js?");

/***/ }),

/***/ "./cms/static/main.js":
/*!****************************!*\
  !*** ./cms/static/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Static_js_foundation_ComponentFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Static/js/foundation/ComponentFactory */ \"./Static/js/foundation/ComponentFactory.js\");\n\nvar main = document.querySelector('#main');\nvar episerverUrl = main.dataset.episerverUrl;\nvar pageRequest = {\n  headers: {\n    'accept': 'application/json'\n  },\n  method: 'get',\n  params: {\n    'expand': '*'\n  },\n  url: episerverUrl\n};\n\nvar renderPage = function renderPage(response) {\n  var data = response.data;\n  var component = _Static_js_foundation_ComponentFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createFromContentData(data);\n  ReactDOM.render(component, main);\n};\n\nvar handleError = function handleError(error) {\n  console.log('Error rendering page: ', error);\n};\n\naxios(pageRequest).then(renderPage)[\"catch\"](handleError);\n\n//# sourceURL=webpack:///./cms/static/main.js?");

/***/ })

/******/ });