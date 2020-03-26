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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Clock.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Clock.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_clock {\n  font-size: 2.5rem;\n  padding: 1rem 1.5rem;\n  font-weight: 300;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceCodec.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceCodec.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_button {\n  margin-top: 1rem;\n  box-shadow: none !important;\n}\n\n.stadiaplus_button-small {\n  padding: 0.5rem 1rem;\n  background-color: #3C3E43;\n  color: #ffffff;\n  margin: 0 0.5rem;\n  border-radius: 0.25rem;\n}\n\n.stadiaplus_row {\n  display: inline-flex;\n  align-items: flex-end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceResolution.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceResolution.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_button {\n  margin-top: 1rem;\n  box-shadow: none !important;\n}\n\n.stadiaplus_button-small {\n  padding: 0.5rem 1rem;\n  background-color: #3C3E43;\n  color: #ffffff;\n  margin: 0 0.5rem;\n  border-radius: 0.25rem;\n}\n\n.stadiaplus_row {\n  display: inline-flex;\n  align-items: flex-end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LibraryFilter.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LibraryFilter.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pretty * {\n  box-sizing: border-box;\n}\n\n.pretty input:not([type=checkbox]):not([type=radio]) {\n  display: none;\n}\n\n.pretty {\n  position: relative;\n  display: inline-block;\n  margin-right: 1em;\n  white-space: nowrap;\n  line-height: 1;\n}\n.pretty input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-width: 1em;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.pretty .state label {\n  position: initial;\n  display: inline-block;\n  font-weight: normal;\n  margin: 0;\n  text-indent: 1.5em;\n  min-width: calc(1em + 2px);\n}\n.pretty .state label:before, .pretty .state label:after {\n  content: \"\";\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  display: block;\n  box-sizing: border-box;\n  border-radius: 0;\n  border: 1px solid transparent;\n  z-index: 0;\n  position: absolute;\n  left: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  background-color: transparent;\n}\n.pretty .state label:before {\n  border-color: #bdc3c7;\n}\n.pretty .state.p-is-hover, .pretty .state.p-is-indeterminate {\n  display: none;\n}\n\n@keyframes zoom {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n@keyframes tada {\n  0% {\n    animation-timing-function: ease-in;\n    opacity: 0;\n    transform: scale(7);\n  }\n  38% {\n    animation-timing-function: ease-out;\n    opacity: 1;\n    transform: scale(1);\n  }\n  55% {\n    animation-timing-function: ease-in;\n    transform: scale(1.5);\n  }\n  72% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n  81% {\n    animation-timing-function: ease-in;\n    transform: scale(1.24);\n  }\n  89% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n  95% {\n    animation-timing-function: ease-in;\n    transform: scale(1.04);\n  }\n  100% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n}\n@keyframes jelly {\n  0% {\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  40% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  50% {\n    transform: scale3d(0.85, 1.15, 1);\n  }\n  65% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  75% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rotate {\n  0% {\n    opacity: 0;\n    transform: translateZ(-200px) rotate(-45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateZ(0) rotate(0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0px 0px 0px 0px #bdc3c7;\n  }\n  100% {\n    box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0);\n  }\n}\n.pretty.p-default.p-fill .state label:after {\n  transform: scale(1);\n}\n\n.pretty.p-default .state label:after {\n  transform: scale(0.6);\n}\n.pretty.p-default input:checked ~ .state label:after {\n  background-color: #bdc3c7 !important;\n}\n\n.pretty.p-default.p-thick .state label:before, .pretty.p-default.p-thick .state label:after {\n  border-width: calc(1em / 7);\n}\n.pretty.p-default.p-thick .state label:after {\n  transform: scale(0.4) !important;\n}\n\n.pretty.p-icon .state .icon {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0;\n}\n.pretty.p-icon .state .icon:before {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n}\n.pretty.p-icon input:checked ~ .state .icon {\n  opacity: 1;\n}\n.pretty.p-icon input:checked ~ .state label:before {\n  border-color: #5a656b;\n}\n\n.pretty.p-svg .state .svg {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0;\n}\n.pretty.p-svg .state svg {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n}\n.pretty.p-svg input:checked ~ .state .svg {\n  opacity: 1;\n}\n\n.pretty.p-image .state img {\n  opacity: 0;\n  position: absolute;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  left: 0;\n  z-index: 0;\n  text-align: center;\n  line-height: normal;\n  transform: scale(0.8);\n}\n.pretty.p-image input:checked ~ .state img {\n  opacity: 1;\n}\n\n.pretty.p-switch input {\n  min-width: 2em;\n}\n.pretty.p-switch .state {\n  position: relative;\n}\n.pretty.p-switch .state:before {\n  content: \"\";\n  border: 1px solid #bdc3c7;\n  border-radius: 60px;\n  width: 2em;\n  box-sizing: unset;\n  height: calc(1em + 2px);\n  position: absolute;\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 16%);\n  z-index: 0;\n  transition: all 0.5s ease;\n}\n.pretty.p-switch .state label {\n  text-indent: 2.5em;\n}\n.pretty.p-switch .state label:before, .pretty.p-switch .state label:after {\n  transition: all 0.5s ease;\n  border-radius: 100%;\n  left: 0;\n  border-color: transparent;\n  transform: scale(0.8);\n}\n.pretty.p-switch .state label:after {\n  background-color: #bdc3c7 !important;\n}\n.pretty.p-switch input:checked ~ .state:before {\n  border-color: #5a656b;\n}\n.pretty.p-switch input:checked ~ .state label:before {\n  opacity: 0;\n}\n.pretty.p-switch input:checked ~ .state label:after {\n  background-color: #5a656b !important;\n  left: 1em;\n}\n\n.pretty.p-switch.p-fill input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important;\n}\n.pretty.p-switch.p-fill input:checked ~ .state label:before {\n  opacity: 0;\n}\n.pretty.p-switch.p-fill input:checked ~ .state label:after {\n  background-color: #fff !important;\n  left: 1em;\n}\n\n.pretty.p-switch.p-slim .state:before {\n  height: 0.1em;\n  background: #bdc3c7 !important;\n  top: calc(50% - 0.1em);\n}\n.pretty.p-switch.p-slim input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important;\n}\n\n.pretty.p-has-hover input:hover ~ .state:not(.p-is-hover) {\n  display: none;\n}\n.pretty.p-has-hover input:hover ~ .state.p-is-hover {\n  display: block;\n}\n.pretty.p-has-hover input:hover ~ .state.p-is-hover .icon {\n  display: block;\n}\n\n.pretty.p-has-focus input:focus ~ .state label:before {\n  box-shadow: 0px 0px 3px 0px #bdc3c7;\n}\n\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state:not(.p-is-indeterminate) {\n  display: none;\n}\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state.p-is-indeterminate {\n  display: block;\n}\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state.p-is-indeterminate .icon {\n  display: block;\n  opacity: 1;\n}\n\n.pretty.p-toggle .state.p-on {\n  opacity: 0;\n  display: none;\n}\n.pretty.p-toggle .state.p-off,\n.pretty.p-toggle .state .icon,\n.pretty.p-toggle .state .svg,\n.pretty.p-toggle .state img {\n  opacity: 1;\n  display: inherit;\n}\n.pretty.p-toggle .state.p-off .icon {\n  color: #bdc3c7;\n}\n.pretty.p-toggle input:checked ~ .state.p-on {\n  opacity: 1;\n  display: inherit;\n}\n.pretty.p-toggle input:checked ~ .state.p-off {\n  opacity: 0;\n  display: none;\n}\n\n.pretty.p-plain input:checked ~ .state label:before, .pretty.p-plain.p-toggle .state label:before {\n  content: none;\n}\n.pretty.p-plain.p-plain .icon {\n  transform: scale(1.1);\n}\n\n.pretty.p-round .state label:before, .pretty.p-round .state label:after {\n  border-radius: 100%;\n}\n.pretty.p-round.p-icon .state .icon {\n  border-radius: 100%;\n  overflow: hidden;\n}\n.pretty.p-round.p-icon .state .icon:before {\n  transform: scale(0.8);\n}\n\n.pretty.p-curve .state label:before, .pretty.p-curve .state label:after {\n  border-radius: 20%;\n}\n\n.pretty.p-smooth label:before,\n.pretty.p-smooth label:after,\n.pretty.p-smooth .icon,\n.pretty.p-smooth .svg {\n  transition: all 0.5s ease;\n}\n.pretty.p-smooth input:checked + .state label:after {\n  transition: all 0.3s ease;\n}\n.pretty.p-smooth input:checked + .state .icon,\n.pretty.p-smooth input:checked + .state .svg,\n.pretty.p-smooth input:checked + .state img {\n  animation: zoom 0.2s ease;\n}\n.pretty.p-smooth.p-default input:checked + .state label:after {\n  animation: zoom 0.2s ease;\n}\n.pretty.p-smooth.p-plain input:checked + .state label:before {\n  content: \"\";\n  transform: scale(0);\n  transition: all 0.5s ease;\n}\n\n.pretty.p-tada:not(.p-default) input:checked + .state .icon,\n.pretty.p-tada:not(.p-default) input:checked + .state .svg,\n.pretty.p-tada:not(.p-default) input:checked + .state img,\n.pretty.p-tada:not(.p-default) input:checked + .state label:before,\n.pretty.p-tada:not(.p-default) input:checked + .state label:after {\n  animation: tada 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 alternate;\n  opacity: 1;\n}\n\n.pretty.p-jelly:not(.p-default) input:checked + .state .icon,\n.pretty.p-jelly:not(.p-default) input:checked + .state .svg,\n.pretty.p-jelly:not(.p-default) input:checked + .state img,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:after {\n  animation: jelly 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1;\n}\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before {\n  border-color: transparent;\n}\n\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .icon,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .svg,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state img,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:after {\n  animation: rotate 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1;\n}\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before {\n  border-color: transparent;\n}\n\n.pretty.p-pulse:not(.p-switch) input:checked ~ .state label:before {\n  animation: pulse 1s;\n}\n\n.pretty input[disabled] {\n  cursor: not-allowed;\n  display: none;\n}\n.pretty input[disabled] ~ * {\n  opacity: 0.5;\n}\n\n.pretty.p-locked input {\n  display: none;\n  cursor: not-allowed;\n}\n\n.pretty input:checked ~ .state.p-primary label:after, .pretty.p-toggle .state.p-primary label:after {\n  background-color: #428bca !important;\n}\n.pretty input:checked ~ .state.p-primary .icon,\n.pretty input:checked ~ .state.p-primary .svg, .pretty.p-toggle .state.p-primary .icon,\n.pretty.p-toggle .state.p-primary .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-primary-o label:before, .pretty.p-toggle .state.p-primary-o label:before {\n  border-color: #428bca;\n}\n.pretty input:checked ~ .state.p-primary-o label:after, .pretty.p-toggle .state.p-primary-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-primary-o .icon,\n.pretty input:checked ~ .state.p-primary-o .svg,\n.pretty input:checked ~ .state.p-primary-o svg, .pretty.p-toggle .state.p-primary-o .icon,\n.pretty.p-toggle .state.p-primary-o .svg,\n.pretty.p-toggle .state.p-primary-o svg {\n  color: #428bca;\n  stroke: #428bca;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-primary-o label:after {\n  background-color: #428bca !important;\n}\n.pretty.p-switch input:checked ~ .state.p-primary:before {\n  border-color: #428bca;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-primary:before {\n  background-color: #428bca !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-primary:before {\n  border-color: #245682;\n  background-color: #245682 !important;\n}\n.pretty input:checked ~ .state.p-info label:after, .pretty.p-toggle .state.p-info label:after {\n  background-color: #5bc0de !important;\n}\n.pretty input:checked ~ .state.p-info .icon,\n.pretty input:checked ~ .state.p-info .svg, .pretty.p-toggle .state.p-info .icon,\n.pretty.p-toggle .state.p-info .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-info-o label:before, .pretty.p-toggle .state.p-info-o label:before {\n  border-color: #5bc0de;\n}\n.pretty input:checked ~ .state.p-info-o label:after, .pretty.p-toggle .state.p-info-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-info-o .icon,\n.pretty input:checked ~ .state.p-info-o .svg,\n.pretty input:checked ~ .state.p-info-o svg, .pretty.p-toggle .state.p-info-o .icon,\n.pretty.p-toggle .state.p-info-o .svg,\n.pretty.p-toggle .state.p-info-o svg {\n  color: #5bc0de;\n  stroke: #5bc0de;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-info-o label:after {\n  background-color: #5bc0de !important;\n}\n.pretty.p-switch input:checked ~ .state.p-info:before {\n  border-color: #5bc0de;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-info:before {\n  background-color: #5bc0de !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-info:before {\n  border-color: #2390b0;\n  background-color: #2390b0 !important;\n}\n.pretty input:checked ~ .state.p-success label:after, .pretty.p-toggle .state.p-success label:after {\n  background-color: #5cb85c !important;\n}\n.pretty input:checked ~ .state.p-success .icon,\n.pretty input:checked ~ .state.p-success .svg, .pretty.p-toggle .state.p-success .icon,\n.pretty.p-toggle .state.p-success .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-success-o label:before, .pretty.p-toggle .state.p-success-o label:before {\n  border-color: #5cb85c;\n}\n.pretty input:checked ~ .state.p-success-o label:after, .pretty.p-toggle .state.p-success-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-success-o .icon,\n.pretty input:checked ~ .state.p-success-o .svg,\n.pretty input:checked ~ .state.p-success-o svg, .pretty.p-toggle .state.p-success-o .icon,\n.pretty.p-toggle .state.p-success-o .svg,\n.pretty.p-toggle .state.p-success-o svg {\n  color: #5cb85c;\n  stroke: #5cb85c;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-success-o label:after {\n  background-color: #5cb85c !important;\n}\n.pretty.p-switch input:checked ~ .state.p-success:before {\n  border-color: #5cb85c;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-success:before {\n  background-color: #5cb85c !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-success:before {\n  border-color: #357935;\n  background-color: #357935 !important;\n}\n.pretty input:checked ~ .state.p-warning label:after, .pretty.p-toggle .state.p-warning label:after {\n  background-color: #f0ad4e !important;\n}\n.pretty input:checked ~ .state.p-warning .icon,\n.pretty input:checked ~ .state.p-warning .svg, .pretty.p-toggle .state.p-warning .icon,\n.pretty.p-toggle .state.p-warning .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-warning-o label:before, .pretty.p-toggle .state.p-warning-o label:before {\n  border-color: #f0ad4e;\n}\n.pretty input:checked ~ .state.p-warning-o label:after, .pretty.p-toggle .state.p-warning-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-warning-o .icon,\n.pretty input:checked ~ .state.p-warning-o .svg,\n.pretty input:checked ~ .state.p-warning-o svg, .pretty.p-toggle .state.p-warning-o .icon,\n.pretty.p-toggle .state.p-warning-o .svg,\n.pretty.p-toggle .state.p-warning-o svg {\n  color: #f0ad4e;\n  stroke: #f0ad4e;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-warning-o label:after {\n  background-color: #f0ad4e !important;\n}\n.pretty.p-switch input:checked ~ .state.p-warning:before {\n  border-color: #f0ad4e;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-warning:before {\n  background-color: #f0ad4e !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-warning:before {\n  border-color: #c77c11;\n  background-color: #c77c11 !important;\n}\n.pretty input:checked ~ .state.p-danger label:after, .pretty.p-toggle .state.p-danger label:after {\n  background-color: #d9534f !important;\n}\n.pretty input:checked ~ .state.p-danger .icon,\n.pretty input:checked ~ .state.p-danger .svg, .pretty.p-toggle .state.p-danger .icon,\n.pretty.p-toggle .state.p-danger .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-danger-o label:before, .pretty.p-toggle .state.p-danger-o label:before {\n  border-color: #d9534f;\n}\n.pretty input:checked ~ .state.p-danger-o label:after, .pretty.p-toggle .state.p-danger-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-danger-o .icon,\n.pretty input:checked ~ .state.p-danger-o .svg,\n.pretty input:checked ~ .state.p-danger-o svg, .pretty.p-toggle .state.p-danger-o .icon,\n.pretty.p-toggle .state.p-danger-o .svg,\n.pretty.p-toggle .state.p-danger-o svg {\n  color: #d9534f;\n  stroke: #d9534f;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-danger-o label:after {\n  background-color: #d9534f !important;\n}\n.pretty.p-switch input:checked ~ .state.p-danger:before {\n  border-color: #d9534f;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-danger:before {\n  background-color: #d9534f !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-danger:before {\n  border-color: #a02622;\n  background-color: #a02622 !important;\n}\n\n.pretty.p-bigger label:before,\n.pretty.p-bigger label:after,\n.pretty.p-bigger .icon,\n.pretty.p-bigger .svg,\n.pretty.p-bigger .img {\n  font-size: 1.2em !important;\n  top: calc((0% - (100% - 1em)) - 35%) !important;\n}\n.pretty.p-bigger label {\n  text-indent: 1.7em;\n}\n\n@media print {\n  .pretty .state:before,\n.pretty .state label:before,\n.pretty .state label:after,\n.pretty .state .icon {\n    color-adjust: exact;\n    /* stylelint-disable */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n.stadiaplus_libraryfilter-icon {\n  position: absolute;\n  font-family: \"Material Icons Extended\";\n  font-size: 32px;\n  z-index: 4;\n  padding: 16px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 32px;\n  background-color: #393a3c;\n  cursor: pointer;\n}\n\n.stadiaplus_libraryfilter-wrapper {\n  opacity: 1;\n  transform: scale(1);\n  transition: transform 0.5s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.5s cubic-bezier(0.75, 0, 0.25, 1);\n}\n.stadiaplus_libraryfilter-wrapper.closing {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper.closed {\n  display: none;\n  opacity: 0;\n}\n\n.stadiaplus_libraryfilter-bar {\n  background-color: #303236;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_dropdown {\n  display: block;\n  padding: 0.5rem;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-checkbox {\n  margin-left: auto;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction {\n  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);\n  border-radius: 50%;\n  padding: 2px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction::after {\n  content: \"arrow_drop_down\";\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.ascending {\n  transform: rotate(0deg);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.descending {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/UITab.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/UITab.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_muted {\n  opacity: 0.5;\n}\n\n.stadiaplus_ui-component {\n  /* \n   *   Must remove 2 x padding or it doesnt work \n   */\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateX(100%);\n  padding: 1rem;\n  background-color: #2d2e30;\n  transition: transform 0.15s ease-in-out;\n}\n.stadiaplus_ui-component.open {\n  transform: translateX(0);\n}\n.stadiaplus_ui-component header {\n  display: flex;\n  align-items: center;\n}\n.stadiaplus_ui-component header .CwCxFd {\n  font-size: 22px;\n}\n\n.stadiaplus_ui-btn-container {\n  margin-top: -16px;\n}\n.stadiaplus_ui-btn-container.E0Zk9b {\n  justify-content: initial;\n}\n\n.stadiaplus_ui-button {\n  width: 116.156px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Global.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Global.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".GqLi4d {\n  filter: brightness(0.9) contrast(1.1);\n}\n\nhtml body .dSGvzf {\n  margin: 0 1rem;\n}\n\nhtml body .CVVXfc {\n  flex-direction: column;\n  align-items: initial;\n}\n\nhr {\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n::-webkit-scrollbar {\n  background-color: #46484d;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #505257 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Select.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Select.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_dropdown.ss-main .ss-multi-selected,\n.stadiaplus_dropdown.ss-main .ss-single-selected {\n  background: transparent;\n  border: none;\n  border-bottom: #93959F 1px solid;\n  border-radius: 0;\n  width: 180px;\n}\n\n.stadiaplus_dropdown.ss-main .ss-multi-selected .ss-plus span,\n.stadiaplus_dropdown.ss-main .ss-single-selected .ss-arrow span {\n  border-color: #93959F;\n}\n\n.stadiaplus_dropdown.ss-main {\n  border-color: #3C3E43;\n  width: auto;\n}\n\n.stadiaplus_dropdown.ss-main .ss-content {\n  border-color: #3C3E43;\n}\n\n.stadiaplus_dropdown.ss-main .ss-multi-selected .placeholder,\n.stadiaplus_dropdown.ss-main .ss-single-selected .placeholder {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.stadiaplus_dropdown.ss-main .ss-content .ss-list .ss-option {\n  background-color: #3C3E43;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.stadiaplus_dropdown.ss-main .ss-content .ss-list .ss-option.ss-disabled {\n  background-color: #3C3E43;\n  color: rgba(255, 255, 255, 0.4);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Snackbar.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Snackbar.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_snackbar {\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n  border-radius: 4px;\n  z-index: 999;\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  position: fixed;\n  bottom: 8px;\n  left: calc(50% - 200px);\n  transform: scale(0.5) translateY(16px);\n  opacity: 0;\n  transition: transform 0.15s cubic-bezier(0, 0, 0.2, 1), opacity 0.15s cubic-bezier(0, 0, 0.2, 1);\n}\n.stadiaplus_snackbar.active {\n  transform: scale(1) translateY(0px);\n  opacity: 1;\n}\n\n.stadiaplus_snackbar-label {\n  font-size: 16px;\n  padding: 16px;\n}\n\n.stadiaplus_snackbar-close {\n  padding: 8px;\n  margin: 8px;\n  border-radius: 50%;\n  color: white;\n  font-size: 20px;\n}\n.stadiaplus_snackbar-close:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.min.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.min.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ss-main{position:relative;display:inline-block;user-select:none;color:#666;width:100%}.ss-main .ss-single-selected{display:flex;cursor:pointer;width:100%;height:30px;padding:6px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .2s}.ss-main .ss-single-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-single-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-single-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-single-selected .placeholder{flex:1 1 100%;text-align:left;width:calc(100% - 30px);line-height:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ss-main .ss-single-selected .placeholder,.ss-main .ss-single-selected .placeholder *{display:flex;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ss-main .ss-single-selected .placeholder *{width:auto}.ss-main .ss-single-selected .placeholder .ss-disabled{color:#dedede}.ss-main .ss-single-selected .ss-deselect{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px;font-weight:700}.ss-main .ss-single-selected .ss-deselect.ss-hide{display:none}.ss-main .ss-single-selected .ss-arrow{display:flex;align-items:center;justify-content:flex-end;flex:0 1 auto;margin:0 6px}.ss-main .ss-single-selected .ss-arrow span{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:3px;transition:transform .2s,margin .2s}.ss-main .ss-single-selected .ss-arrow span.arrow-up{transform:rotate(-135deg);margin:3px 0 0}.ss-main .ss-single-selected .ss-arrow span.arrow-down{transform:rotate(45deg);margin:-3px 0 0}.ss-main .ss-multi-selected{display:flex;flex-direction:row;cursor:pointer;min-height:30px;width:100%;padding:0 0 0 3px;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;box-sizing:border-box;transition:background-color .2s}.ss-main .ss-multi-selected.ss-disabled{background-color:#dcdee2;cursor:not-allowed}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled{color:#666}.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete{cursor:not-allowed}.ss-main .ss-multi-selected.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main .ss-multi-selected.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-multi-selected .ss-values{display:flex;flex-wrap:wrap;justify-content:flex-start;flex:1 1 100%;width:calc(100% - 30px)}.ss-main .ss-multi-selected .ss-values .ss-disabled{display:flex;padding:4px 5px;margin:2px 0;line-height:1em;align-items:center;width:100%;color:#dedede;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes scaleIn{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes scaleOut{0%{transform:scale(1);opacity:1}to{transform:scale(0);opacity:0}}.ss-main .ss-multi-selected .ss-values .ss-value{display:flex;user-select:none;align-items:center;font-size:12px;padding:3px 5px;margin:3px 5px 3px 0;color:#fff;background-color:#5897fb;border-radius:4px;animation-name:scaleIn;animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:both}.ss-main .ss-multi-selected .ss-values .ss-value.ss-out{animation-name:scaleOut;animation-duration:.2s;animation-timing-function:ease-out}.ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete{margin:0 0 0 5px;cursor:pointer}.ss-main .ss-multi-selected .ss-add{display:flex;flex:0 1 3px;margin:9px 12px 0 5px}.ss-main .ss-multi-selected .ss-add .ss-plus{display:flex;justify-content:center;align-items:center;background:#666;position:relative;height:10px;width:2px;transition:transform .2s}.ss-main .ss-multi-selected .ss-add .ss-plus:after{background:#666;content:\"\";position:absolute;height:2px;width:10px;left:-4px;top:4px}.ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross{transform:rotate(45deg)}.ss-content{position:absolute;width:100%;margin:-1px 0 0;box-sizing:border-box;border:1px solid #dcdee2;z-index:1010;background-color:#fff;transform-origin:center top;transition:transform .2s,opacity .2s;opacity:0;transform:scaleY(0)}.ss-content.ss-open{display:block;opacity:1;transform:scaleY(1)}.ss-content .ss-search{display:flex;flex-direction:row;padding:8px 8px 6px}.ss-content .ss-search.ss-hide,.ss-content .ss-search.ss-hide input{height:0;opacity:0;padding:0;margin:0}.ss-content .ss-search input{display:inline-flex;font-size:inherit;line-height:inherit;flex:1 1 auto;width:100%;min-width:0;height:30px;padding:6px 8px;margin:0;border:1px solid #dcdee2;border-radius:4px;background-color:#fff;outline:0;text-align:left;box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-appearance:textfield}.ss-content .ss-search input::placeholder{color:#8a8a8a;vertical-align:middle}.ss-content .ss-search input:focus{box-shadow:0 0 5px #5897fb}.ss-content .ss-search .ss-addable{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;font-size:22px;font-weight:700;flex:0 0 30px;height:30px;margin:0 0 0 8px;border:1px solid #dcdee2;border-radius:4px;box-sizing:border-box}.ss-content .ss-addable{padding-top:0}.ss-content .ss-list{max-height:200px;overflow-x:hidden;overflow-y:auto;text-align:left}.ss-content .ss-list .ss-optgroup .ss-optgroup-label{padding:6px 10px;font-weight:700}.ss-content .ss-list .ss-optgroup .ss-option{padding:6px 6px 6px 25px}.ss-content .ss-list .ss-optgroup-label-selectable{cursor:pointer}.ss-content .ss-list .ss-optgroup-label-selectable:hover{color:#fff;background-color:#5897fb}.ss-content .ss-list .ss-option{padding:6px 10px;cursor:pointer;user-select:none}.ss-content .ss-list .ss-option *{display:inline-block}.ss-content .ss-list .ss-option.ss-highlighted,.ss-content .ss-list .ss-option:hover{color:#fff;background-color:#5897fb}.ss-content .ss-list .ss-option.ss-disabled{cursor:not-allowed;color:#dedede;background-color:#fff}.ss-content .ss-list .ss-option:not(.ss-disabled).ss-option-selected{color:#666;background-color:rgba(88,151,251,.1)}.ss-content .ss-list .ss-option.ss-hide{display:none}.ss-content .ss-list .ss-option .ss-search-highlight{background-color:#fffb8c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.min.css":
/*!**********************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.min.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./slimselect.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return(s={},n.m=i=[function(e,t,i){"use strict";function s(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}var n;t.__esModule=!0,t.hasClassInTree=function(e,t){function s(e,t){return t&&e&&e.classList&&e.classList.contains(t)?e:null}return s(e,t)||function e(t,i){return t&&t!==document?s(t,i)?t:e(t.parentNode,i):null}(e,t)},t.ensureElementInView=function(e,t){var i=e.scrollTop+e.offsetTop,s=i+e.clientHeight,n=t.offsetTop,a=n+t.clientHeight;n<i?e.scrollTop-=i-n:s<a&&(e.scrollTop+=a-s)},t.putContent=function(e,t,i){var s=e.offsetHeight,n=e.getBoundingClientRect(),a=i?n.top:n.top-s,o=i?n.bottom:n.bottom+s;return a<=0?"below":o>=window.innerHeight?"above":i?t:"below"},t.debounce=function(n,a,o){var l;return void 0===a&&(a=100),void 0===o&&(o=!1),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=self,s=o&&!l;clearTimeout(l),l=setTimeout(function(){l=null,o||n.apply(i,e)},a),s&&n.apply(i,e)}},t.isValueInArrayOfObjects=function(e,t,i){if(!Array.isArray(e))return e[t]===i;for(var s=0,n=e;s<n.length;s++){var a=n[s];if(a&&a[t]&&a[t]===i)return!0}return!1},t.highlight=function(e,t,i){var s=e,n=new RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(n))return e;var a=e.match(n).index,o=a+e.match(n)[0].toString().length,l=e.substring(a,o);return s=s.replace(n,'<mark class="'+i+'">'+l+"</mark>")},"function"!=typeof(n=window).CustomEvent&&(s.prototype=n.Event.prototype,n.CustomEvent=s)},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.newOption=function(e){return{id:e.id?e.id:String(Math.floor(1e8*Math.random())),value:e.value?e.value:"",text:e.text?e.text:"",innerHTML:e.innerHTML?e.innerHTML:"",selected:!!e.selected&&e.selected,display:void 0===e.display||e.display,disabled:!!e.disabled&&e.disabled,placeholder:!!e.placeholder&&e.placeholder,class:e.class?e.class:void 0,data:e.data?e.data:{}}},n.prototype.add=function(e){this.data.push({id:String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:"",selected:!1,display:!0,disabled:!1,placeholder:!1,class:void 0,data:{}})},n.prototype.parseSelectData=function(){this.data=[];for(var e=0,t=this.main.select.element.childNodes;e<t.length;e++){var i=t[e];if("OPTGROUP"===i.nodeName){for(var s={label:i.label,options:[]},n=0,a=i.childNodes;n<a.length;n++){var o=a[n];if("OPTION"===o.nodeName){var l=this.pullOptionData(o);s.options.push(l),l.placeholder&&""!==l.text.trim()&&(this.main.config.placeholderText=l.text)}}this.data.push(s)}else"OPTION"===i.nodeName&&(l=this.pullOptionData(i),this.data.push(l),l.placeholder&&""!==l.text.trim()&&(this.main.config.placeholderText=l.text))}},n.prototype.pullOptionData=function(e){return{id:!!e.dataset&&e.dataset.id||String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:e.innerHTML,selected:e.selected,disabled:e.disabled,placeholder:"true"===e.dataset.placeholder,class:e.className,style:e.style.cssText,data:e.dataset}},n.prototype.setSelectedFromSelect=function(){if(this.main.config.isMultiple){for(var e=[],t=0,i=this.main.select.element.options;t<i.length;t++){var s=i[t];if(s.selected){var n=this.getObjectFromData(s.value,"value");n&&n.id&&e.push(n.id)}}this.setSelected(e,"id")}else{var a=this.main.select.element;if(-1!==a.selectedIndex){var o=a.options[a.selectedIndex].value;this.setSelected(o,"value")}}},n.prototype.setSelected=function(e,t){void 0===t&&(t="id");for(var i=0,s=this.data;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.placeholder||(r.selected=this.shouldBeSelected(r,e,t))}}}else n.selected=this.shouldBeSelected(n,e,t)}},n.prototype.shouldBeSelected=function(e,t,i){if(void 0===i&&(i="id"),Array.isArray(t))for(var s=0,n=t;s<n.length;s++){var a=n[s];if(i in e&&String(e[i])===String(a))return!0}else if(i in e&&String(e[i])===String(t))return!0;return!1},n.prototype.getSelected=function(){for(var e={text:"",placeholder:this.main.config.placeholderText},t=[],i=0,s=this.data;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.selected&&(this.main.config.isMultiple?t.push(r):e=r)}}}else n.selected&&(this.main.config.isMultiple?t.push(n):e=n)}return this.main.config.isMultiple?t:e},n.prototype.addToSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){var i=[],s=this.getSelected();if(Array.isArray(s))for(var n=0,a=s;n<a.length;n++){var o=a[n];i.push(o[t])}i.push(e),this.setSelected(i,t)}},n.prototype.removeFromSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){for(var i=[],s=0,n=this.getSelected();s<n.length;s++){var a=n[s];String(a[t])!==String(e)&&i.push(a[t])}this.setSelected(i,t)}},n.prototype.onDataChange=function(){this.main.onChange&&this.isOnChangeEnabled&&this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())))},n.prototype.getObjectFromData=function(e,t){void 0===t&&(t="id");for(var i=0,s=this.data;i<s.length;i++){var n=s[i];if(t in n&&String(n[t])===String(e))return n;if(n.hasOwnProperty("options")){var a=n;if(a.options)for(var o=0,l=a.options;o<l.length;o++){var r=l[o];if(String(r[t])===String(e))return r}}}return null},n.prototype.search=function(n){if(""!==(this.searchValue=n).trim()){var a=this.main.config.searchFilter,e=this.data.slice(0);n=n.trim();var t=e.map(function(e){if(e.hasOwnProperty("options")){var t=e,i=[];if(t.options&&(i=t.options.filter(function(e){return a(e,n)})),0!==i.length){var s=Object.assign({},t);return s.options=i,s}}return e.hasOwnProperty("text")&&a(e,n)?e:null});this.filtered=t.filter(function(e){return e})}else this.filtered=null},n);function n(e){this.contentOpen=!1,this.contentPosition="below",this.isOnChangeEnabled=!0,this.main=e.main,this.searchValue="",this.data=[],this.filtered=null,this.parseSelectData(),this.setSelectedFromSelect()}function r(e){return void 0!==e.text||(console.error("Data object option must have at least have a text value. Check object: "+JSON.stringify(e)),!1)}t.Data=s,t.validateData=function(e){if(!e)return console.error("Data must be an array of objects"),!1;for(var t=0,i=0,s=e;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){r(l[o])||t++}}}else r(n)||t++}return 0===t},t.validateOption=r},function(e,t,i){"use strict";t.__esModule=!0;var s=i(3),n=i(4),a=i(5),o=i(1),l=i(0),r=(c.prototype.validate=function(e){var t="string"==typeof e.select?document.querySelector(e.select):e.select;if(!t)throw new Error("Could not find select element");if("SELECT"!==t.tagName)throw new Error("Element isnt of type select");return t},c.prototype.selected=function(){if(this.config.isMultiple){for(var e=[],t=0,i=n=this.data.getSelected();t<i.length;t++){var s=i[t];e.push(s.value)}return e}var n;return(n=this.data.getSelected())?n.value:""},c.prototype.set=function(e,t,i,s){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===s&&(s=!0),this.config.isMultiple&&!Array.isArray(e)?this.data.addToSelected(e,t):this.data.setSelected(e,t),this.select.setValue(),this.data.onDataChange(),this.render(),i&&this.close()},c.prototype.setSelected=function(e,t,i,s){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===s&&(s=!0),this.set(e,t,i,s)},c.prototype.setData=function(e){if(o.validateData(e)){var t=JSON.parse(JSON.stringify(e)),i=this.data.getSelected();if(this.config.isAjax&&i)if(this.config.isMultiple)for(var s=0,n=i.reverse();s<n.length;s++){var a=n[s];t.unshift(a)}else t.unshift(this.data.getSelected()),t.unshift({text:"",placeholder:!0});this.select.create(t),this.data.parseSelectData(),this.data.setSelectedFromSelect()}else console.error("Validation problem on: #"+this.select.element.id)},c.prototype.addData=function(e){o.validateData([e])?(this.data.add(this.data.newOption(e)),this.select.create(this.data.data),this.data.parseSelectData(),this.data.setSelectedFromSelect(),this.render()):console.error("Validation problem on: #"+this.select.element.id)},c.prototype.open=function(){var e=this;if(this.config.isEnabled&&!this.data.contentOpen){if(this.beforeOpen&&this.beforeOpen(),this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.plus.classList.add("ss-cross"):this.slim.singleSelected&&(this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add("above"===this.data.contentPosition?this.config.openAbove:this.config.openBelow),this.config.addToBody){var t=this.slim.container.getBoundingClientRect();this.slim.content.style.top=t.top+t.height+window.scrollY+"px",this.slim.content.style.left=t.left+window.scrollX+"px",this.slim.content.style.width=t.width+"px"}if(this.slim.content.classList.add(this.config.open),"up"===this.config.showContent.toLowerCase()?this.moveContentAbove():"down"===this.config.showContent.toLowerCase()?this.moveContentBelow():"above"===l.putContent(this.slim.content,this.data.contentPosition,this.data.contentOpen)?this.moveContentAbove():this.moveContentBelow(),!this.config.isMultiple){var i=this.data.getSelected();if(i){var s=i.id,n=this.slim.list.querySelector('[data-id="'+s+'"]');n&&l.ensureElementInView(this.slim.list,n)}}setTimeout(function(){e.data.contentOpen=!0,e.config.searchFocus&&e.slim.search.input.focus(),e.afterOpen&&e.afterOpen()},this.config.timeoutDelay)}},c.prototype.close=function(){var e=this;this.data.contentOpen&&(this.beforeClose&&this.beforeClose(),this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.plus.classList.remove("ss-cross")):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")),this.slim.content.classList.remove(this.config.open),this.data.contentOpen=!1,this.search(""),setTimeout(function(){e.slim.content.removeAttribute("style"),e.data.contentPosition="below",e.config.isMultiple&&e.slim.multiSelected?(e.slim.multiSelected.container.classList.remove(e.config.openAbove),e.slim.multiSelected.container.classList.remove(e.config.openBelow)):e.slim.singleSelected&&(e.slim.singleSelected.container.classList.remove(e.config.openAbove),e.slim.singleSelected.container.classList.remove(e.config.openBelow)),e.slim.search.input.blur(),e.afterClose&&e.afterClose()},this.config.timeoutDelay))},c.prototype.moveContentAbove=function(){var e=0;this.config.isMultiple&&this.slim.multiSelected?e=this.slim.multiSelected.container.offsetHeight:this.slim.singleSelected&&(e=this.slim.singleSelected.container.offsetHeight);var t=e+this.slim.content.offsetHeight-1;this.slim.content.style.margin="-"+t+"px 0 0 0",this.slim.content.style.height=t-e+1+"px",this.slim.content.style.transformOrigin="center bottom",this.data.contentPosition="above",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.container.classList.add(this.config.openAbove)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.container.classList.add(this.config.openAbove))},c.prototype.moveContentBelow=function(){this.data.contentPosition="below",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.add(this.config.openBelow)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.add(this.config.openBelow))},c.prototype.enable=function(){this.config.isEnabled=!0,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.remove(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.remove(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!1,this.slim.search.input.disabled=!1,this.select.triggerMutationObserver=!0},c.prototype.disable=function(){this.config.isEnabled=!1,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.add(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.add(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!0,this.slim.search.input.disabled=!0,this.select.triggerMutationObserver=!0},c.prototype.search=function(t){if(this.data.searchValue!==t)if(this.slim.search.input.value=t,this.config.isAjax){var i=this;this.config.isSearching=!0,this.render(),this.ajax&&this.ajax(t,function(e){i.config.isSearching=!1,Array.isArray(e)?(e.unshift({text:"",placeholder:!0}),i.setData(e),i.data.search(t),i.render()):"string"==typeof e?i.slim.options(e):i.render()})}else this.data.search(t),this.render()},c.prototype.setSearchText=function(e){this.config.searchText=e},c.prototype.render=function(){this.config.isMultiple?this.slim.values():(this.slim.placeholder(),this.slim.deselect()),this.slim.options()},c.prototype.destroy=function(e){void 0===e&&(e=null);var t=e?document.querySelector("."+e+".ss-main"):this.slim.container,i=e?document.querySelector("[data-ssid="+e+"]"):this.select.element;if(t&&i&&(i.style.display="",delete i.dataset.ssid,i.slim=null,t.parentElement&&t.parentElement.removeChild(t),this.config.addToBody)){var s=e?document.querySelector("."+e+".ss-content"):this.slim.content;if(!s)return;document.body.removeChild(s)}},c);function c(e){var t=this;this.ajax=null,this.addable=null,this.beforeOnChange=null,this.onChange=null,this.beforeOpen=null,this.afterOpen=null,this.beforeClose=null,this.afterClose=null;var i=this.validate(e);i.dataset.ssid&&this.destroy(i.dataset.ssid),e.ajax&&(this.ajax=e.ajax),e.addable&&(this.addable=e.addable),this.config=new s.Config({select:i,isAjax:!!e.ajax,showSearch:e.showSearch,searchPlaceholder:e.searchPlaceholder,searchText:e.searchText,searchingText:e.searchingText,searchFocus:e.searchFocus,searchHighlight:e.searchHighlight,searchFilter:e.searchFilter,closeOnSelect:e.closeOnSelect,showContent:e.showContent,placeholderText:e.placeholder,allowDeselect:e.allowDeselect,allowDeselectOption:e.allowDeselectOption,hideSelectedOption:e.hideSelectedOption,deselectLabel:e.deselectLabel,isEnabled:e.isEnabled,valuesUseText:e.valuesUseText,showOptionTooltips:e.showOptionTooltips,selectByGroup:e.selectByGroup,limit:e.limit,timeoutDelay:e.timeoutDelay,addToBody:e.addToBody}),this.select=new n.Select({select:i,main:this}),this.data=new o.Data({main:this}),this.slim=new a.Slim({main:this}),this.select.element.parentNode&&this.select.element.parentNode.insertBefore(this.slim.container,this.select.element.nextSibling),e.data?this.setData(e.data):this.render(),document.addEventListener("click",function(e){e.target&&!l.hasClassInTree(e.target,t.config.id)&&t.close()}),"auto"===this.config.showContent&&window.addEventListener("scroll",l.debounce(function(e){t.data.contentOpen&&("above"===l.putContent(t.slim.content,t.data.contentPosition,t.data.contentOpen)?t.moveContentAbove():t.moveContentBelow())}),!1),e.beforeOnChange&&(this.beforeOnChange=e.beforeOnChange),e.onChange&&(this.onChange=e.onChange),e.beforeOpen&&(this.beforeOpen=e.beforeOpen),e.afterOpen&&(this.afterOpen=e.afterOpen),e.beforeClose&&(this.beforeClose=e.beforeClose),e.afterClose&&(this.afterClose=e.afterClose),this.config.isEnabled||this.disable()}t.default=r},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.searchFilter=function(e,t){return-1!==e.text.toLowerCase().indexOf(t.toLowerCase())},n);function n(e){this.id="",this.isMultiple=!1,this.isAjax=!1,this.isSearching=!1,this.showSearch=!0,this.searchFocus=!0,this.searchHighlight=!1,this.closeOnSelect=!0,this.showContent="auto",this.searchPlaceholder="Search",this.searchText="No Results",this.searchingText="Searching...",this.placeholderText="Select Value",this.allowDeselect=!1,this.allowDeselectOption=!1,this.hideSelectedOption=!1,this.deselectLabel="x",this.isEnabled=!0,this.valuesUseText=!1,this.showOptionTooltips=!1,this.selectByGroup=!1,this.limit=0,this.timeoutDelay=200,this.addToBody=!1,this.main="ss-main",this.singleSelected="ss-single-selected",this.arrow="ss-arrow",this.multiSelected="ss-multi-selected",this.add="ss-add",this.plus="ss-plus",this.values="ss-values",this.value="ss-value",this.valueText="ss-value-text",this.valueDelete="ss-value-delete",this.content="ss-content",this.open="ss-open",this.openAbove="ss-open-above",this.openBelow="ss-open-below",this.search="ss-search",this.searchHighlighter="ss-search-highlight",this.addable="ss-addable",this.list="ss-list",this.optgroup="ss-optgroup",this.optgroupLabel="ss-optgroup-label",this.optgroupLabelSelectable="ss-optgroup-label-selectable",this.option="ss-option",this.optionSelected="ss-option-selected",this.highlighted="ss-highlighted",this.disabled="ss-disabled",this.hide="ss-hide",this.id="ss-"+Math.floor(1e5*Math.random()),this.style=e.select.style.cssText,this.class=e.select.className.split(" "),this.isMultiple=e.select.multiple,this.isAjax=e.isAjax,this.showSearch=!1!==e.showSearch,this.searchFocus=!1!==e.searchFocus,this.searchHighlight=!0===e.searchHighlight,this.closeOnSelect=!1!==e.closeOnSelect,e.showContent&&(this.showContent=e.showContent),this.isEnabled=!1!==e.isEnabled,e.searchPlaceholder&&(this.searchPlaceholder=e.searchPlaceholder),e.searchText&&(this.searchText=e.searchText),e.searchingText&&(this.searchingText=e.searchingText),e.placeholderText&&(this.placeholderText=e.placeholderText),this.allowDeselect=!0===e.allowDeselect,this.allowDeselectOption=!0===e.allowDeselectOption,this.hideSelectedOption=!0===e.hideSelectedOption,e.deselectLabel&&(this.deselectLabel=e.deselectLabel),e.valuesUseText&&(this.valuesUseText=e.valuesUseText),e.showOptionTooltips&&(this.showOptionTooltips=e.showOptionTooltips),e.selectByGroup&&(this.selectByGroup=e.selectByGroup),e.limit&&(this.limit=e.limit),e.searchFilter&&(this.searchFilter=e.searchFilter),null!=e.timeoutDelay&&(this.timeoutDelay=e.timeoutDelay),this.addToBody=!0===e.addToBody}t.Config=s},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.setValue=function(){if(this.main.data.getSelected()){if(this.main.config.isMultiple)for(var e=this.main.data.getSelected(),t=0,i=this.element.options;t<i.length;t++){var s=i[t];s.selected=!1;for(var n=0,a=e;n<a.length;n++)a[n].value===s.value&&(s.selected=!0)}else e=this.main.data.getSelected(),this.element.value=e?e.value:"";this.main.data.isOnChangeEnabled=!1,this.element.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.main.data.isOnChangeEnabled=!0}},n.prototype.addAttributes=function(){this.element.tabIndex=-1,this.element.style.display="none",this.element.dataset.ssid=this.main.config.id},n.prototype.addEventListeners=function(){var t=this;this.element.addEventListener("change",function(e){t.main.data.setSelectedFromSelect(),t.main.render()})},n.prototype.addMutationObserver=function(){var t=this;this.main.config.isAjax||(this.mutationObserver=new MutationObserver(function(e){t.triggerMutationObserver&&(t.main.data.parseSelectData(),t.main.data.setSelectedFromSelect(),t.main.render(),e.forEach(function(e){"class"===e.attributeName&&t.main.slim.updateContainerDivClass(t.main.slim.container)}))}),this.observeMutationObserver())},n.prototype.observeMutationObserver=function(){this.mutationObserver&&this.mutationObserver.observe(this.element,{attributes:!0,childList:!0,characterData:!0})},n.prototype.disconnectMutationObserver=function(){this.mutationObserver&&this.mutationObserver.disconnect()},n.prototype.create=function(e){this.element.innerHTML="";for(var t=0,i=e;t<i.length;t++){var s=i[t];if(s.hasOwnProperty("options")){var n=s,a=document.createElement("optgroup");if(a.label=n.label,n.options)for(var o=0,l=n.options;o<l.length;o++){var r=l[o];a.appendChild(this.createOption(r))}this.element.appendChild(a)}else this.element.appendChild(this.createOption(s))}},n.prototype.createOption=function(t){var i=document.createElement("option");return i.value=t.value||t.text,i.innerHTML=t.innerHTML||t.text,t.selected&&(i.selected=t.selected),t.disabled&&(i.disabled=!0),t.placeholder&&i.setAttribute("data-placeholder","true"),t.class&&t.class.split(" ").forEach(function(e){i.classList.add(e)}),t.data&&"object"==typeof t.data&&Object.keys(t.data).forEach(function(e){i.setAttribute("data-"+e,t.data[e])}),i},n);function n(e){this.triggerMutationObserver=!0,this.element=e.select,this.main=e.main,this.element.disabled&&(this.main.config.isEnabled=!1),this.addAttributes(),this.addEventListeners(),this.mutationObserver=null,this.addMutationObserver(),this.element.slim=e.main}t.Select=s},function(e,t,i){"use strict";t.__esModule=!0;var a=i(0),o=i(1),s=(n.prototype.containerDiv=function(){var e=document.createElement("div");return e.style.cssText=this.main.config.style,this.updateContainerDivClass(e),e},n.prototype.updateContainerDivClass=function(e){this.main.config.class=this.main.select.element.className.split(" "),e.className="",e.classList.add(this.main.config.id),e.classList.add(this.main.config.main);for(var t=0,i=this.main.config.class;t<i.length;t++){var s=i[t];""!==s.trim()&&e.classList.add(s)}},n.prototype.singleSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.singleSelected);var i=document.createElement("span");i.classList.add("placeholder"),e.appendChild(i);var s=document.createElement("span");s.innerHTML=this.main.config.deselectLabel,s.classList.add("ss-deselect"),s.onclick=function(e){e.stopPropagation(),t.main.config.isEnabled&&t.main.set("")},e.appendChild(s);var n=document.createElement("span");n.classList.add(this.main.config.arrow);var a=document.createElement("span");return a.classList.add("arrow-down"),n.appendChild(a),e.appendChild(n),e.onclick=function(){t.main.config.isEnabled&&(t.main.data.contentOpen?t.main.close():t.main.open())},{container:e,placeholder:i,deselect:s,arrowIcon:{container:n,arrow:a}}},n.prototype.placeholder=function(){var e=this.main.data.getSelected();if(null===e||e&&e.placeholder){var t=document.createElement("span");t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.placeholderText,this.singleSelected&&(this.singleSelected.placeholder.innerHTML=t.outerHTML)}else{var i="";e&&(i=e.innerHTML&&!0!==this.main.config.valuesUseText?e.innerHTML:e.text),this.singleSelected&&(this.singleSelected.placeholder.innerHTML=e?i:"")}},n.prototype.deselect=function(){if(this.singleSelected){if(!this.main.config.allowDeselect)return void this.singleSelected.deselect.classList.add("ss-hide");""===this.main.selected()?this.singleSelected.deselect.classList.add("ss-hide"):this.singleSelected.deselect.classList.remove("ss-hide")}},n.prototype.multiSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.multiSelected);var i=document.createElement("div");i.classList.add(this.main.config.values),e.appendChild(i);var s=document.createElement("div");s.classList.add(this.main.config.add);var n=document.createElement("span");return n.classList.add(this.main.config.plus),n.onclick=function(e){t.main.data.contentOpen&&(t.main.close(),e.stopPropagation())},s.appendChild(n),e.appendChild(s),e.onclick=function(e){t.main.config.isEnabled&&(e.target.classList.contains(t.main.config.valueDelete)||(t.main.data.contentOpen?t.main.close():t.main.open()))},{container:e,values:i,add:s,plus:n}},n.prototype.values=function(){if(this.multiSelected){for(var e,t=this.multiSelected.values.childNodes,i=this.main.data.getSelected(),s=[],n=0,a=t;n<a.length;n++){var o=a[n];e=!0;for(var l=0,r=i;l<r.length;l++){var c=r[l];String(c.id)===String(o.dataset.id)&&(e=!1)}e&&s.push(o)}for(var d=0,h=s;d<h.length;d++){var u=h[d];u.classList.add("ss-out"),this.multiSelected.values.removeChild(u)}for(t=this.multiSelected.values.childNodes,c=0;c<i.length;c++){e=!1;for(var p=0,m=t;p<m.length;p++)o=m[p],String(i[c].id)===String(o.dataset.id)&&(e=!0);e||(0!==t.length&&HTMLElement.prototype.insertAdjacentElement?0===c?this.multiSelected.values.insertBefore(this.valueDiv(i[c]),t[c]):t[c-1].insertAdjacentElement("afterend",this.valueDiv(i[c])):this.multiSelected.values.appendChild(this.valueDiv(i[c])))}if(0===i.length){var f=document.createElement("span");f.classList.add(this.main.config.disabled),f.innerHTML=this.main.config.placeholderText,this.multiSelected.values.innerHTML=f.outerHTML}}},n.prototype.valueDiv=function(a){var o=this,e=document.createElement("div");e.classList.add(this.main.config.value),e.dataset.id=a.id;var t=document.createElement("span");t.classList.add(this.main.config.valueText),t.innerHTML=a.innerHTML&&!0!==this.main.config.valuesUseText?a.innerHTML:a.text,e.appendChild(t);var i=document.createElement("span");return i.classList.add(this.main.config.valueDelete),i.innerHTML=this.main.config.deselectLabel,i.onclick=function(e){e.preventDefault(),e.stopPropagation();var t=!1;if(o.main.config.isEnabled){if(o.main.beforeOnChange||(t=!0),o.main.beforeOnChange){for(var i=o.main.data.getSelected(),s=JSON.parse(JSON.stringify(i)),n=0;n<s.length;n++)s[n].id===a.id&&s.splice(n,1);!1!==o.main.beforeOnChange(s)&&(t=!0)}t&&(o.main.data.removeFromSelected(a.id,"id"),o.main.render(),o.main.select.setValue(),o.main.data.onDataChange())}},e.appendChild(i),e},n.prototype.contentDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.content),e},n.prototype.searchDiv=function(){var n=this,e=document.createElement("div"),s=document.createElement("input"),a=document.createElement("div");e.classList.add(this.main.config.search);var t={container:e,input:s};return this.main.config.showSearch||(e.classList.add(this.main.config.hide),s.readOnly=!0),s.type="search",s.placeholder=this.main.config.searchPlaceholder,s.tabIndex=0,s.setAttribute("aria-label",this.main.config.searchPlaceholder),s.setAttribute("autocapitalize","off"),s.setAttribute("autocomplete","off"),s.setAttribute("autocorrect","off"),s.onclick=function(e){setTimeout(function(){""===e.target.value&&n.main.search("")},10)},s.onkeydown=function(e){"ArrowUp"===e.key?(n.main.open(),n.highlightUp(),e.preventDefault()):"ArrowDown"===e.key?(n.main.open(),n.highlightDown(),e.preventDefault()):"Tab"===e.key?n.main.data.contentOpen?n.main.close():setTimeout(function(){n.main.close()},n.main.config.timeoutDelay):"Enter"===e.key&&e.preventDefault()},s.onkeyup=function(e){var t=e.target;if("Enter"===e.key){if(n.main.addable&&e.ctrlKey)return a.click(),e.preventDefault(),void e.stopPropagation();var i=n.list.querySelector("."+n.main.config.highlighted);i&&i.click()}else"ArrowUp"===e.key||"ArrowDown"===e.key||("Escape"===e.key?n.main.close():n.main.config.showSearch&&n.main.data.contentOpen?n.main.search(t.value):s.value="");e.preventDefault(),e.stopPropagation()},s.onfocus=function(){n.main.open()},e.appendChild(s),this.main.addable&&(a.classList.add(this.main.config.addable),a.innerHTML="+",a.onclick=function(e){if(n.main.addable){e.preventDefault(),e.stopPropagation();var t=n.search.input.value;if(""===t.trim())return void n.search.input.focus();var i=n.main.addable(t),s="";if(!i)return;"object"==typeof i?o.validateOption(i)&&(n.main.addData(i),s=i.value?i.value:i.text):(n.main.addData(n.main.data.newOption({text:i,value:i})),s=i),n.main.search(""),setTimeout(function(){n.main.set(s,"value",!1,!1)},100),n.main.config.closeOnSelect&&setTimeout(function(){n.main.close()},100)}},e.appendChild(a),t.addable=a),t},n.prototype.highlightUp=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.previousSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.previousSibling;else{var i=this.list.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");t=i[i.length-1]}if(t&&t.classList.contains(this.main.config.optgroupLabel)&&(t=null),null===t){var s=e.parentNode;if(s.classList.contains(this.main.config.optgroup)&&s.previousSibling){var n=s.previousSibling.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");n.length&&(t=n[n.length-1])}}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),a.ensureElementInView(this.list,t))},n.prototype.highlightDown=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.nextSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.nextSibling;else t=this.list.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")");if(null===t&&null!==e){var i=e.parentNode;i.classList.contains(this.main.config.optgroup)&&i.nextSibling&&(t=i.nextSibling.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")"))}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),a.ensureElementInView(this.list,t))},n.prototype.listDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.list),e},n.prototype.options=function(e){void 0===e&&(e="");var t,i=this.main.data.filtered||this.main.data.data;if((this.list.innerHTML="")!==e)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.innerHTML=e,void this.list.appendChild(t);if(this.main.config.isAjax&&this.main.config.isSearching)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.searchingText,void this.list.appendChild(t);if(0===i.length){var s=document.createElement("div");return s.classList.add(this.main.config.option),s.classList.add(this.main.config.disabled),s.innerHTML=this.main.config.searchText,void this.list.appendChild(s)}for(var n=function(e){if(e.hasOwnProperty("label")){var t=e,n=document.createElement("div");n.classList.add(c.main.config.optgroup);var i=document.createElement("div");i.classList.add(c.main.config.optgroupLabel),c.main.config.selectByGroup&&c.main.config.isMultiple&&i.classList.add(c.main.config.optgroupLabelSelectable),i.innerHTML=t.label,n.appendChild(i);var s=t.options;if(s){for(var a=0,o=s;a<o.length;a++){var l=o[a];n.appendChild(c.option(l))}if(c.main.config.selectByGroup&&c.main.config.isMultiple){var r=c;i.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();for(var t=0,i=n.children;t<i.length;t++){var s=i[t];-1!==s.className.indexOf(r.main.config.option)&&s.click()}})}}c.list.appendChild(n)}else c.list.appendChild(c.option(e))},c=this,a=0,o=i;a<o.length;a++)n(o[a])},n.prototype.option=function(r){if(r.placeholder){var e=document.createElement("div");return e.classList.add(this.main.config.option),e.classList.add(this.main.config.hide),e}var t=document.createElement("div");t.classList.add(this.main.config.option),r.class&&r.class.split(" ").forEach(function(e){t.classList.add(e)}),r.style&&(t.style.cssText=r.style);var c=this.main.data.getSelected();t.dataset.id=r.id,this.main.config.searchHighlight&&this.main.slim&&r.innerHTML&&""!==this.main.slim.search.input.value.trim()?t.innerHTML=a.highlight(r.innerHTML,this.main.slim.search.input.value,this.main.config.searchHighlighter):r.innerHTML&&(t.innerHTML=r.innerHTML),this.main.config.showOptionTooltips&&t.textContent&&t.setAttribute("title",t.textContent);var d=this;t.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var t=this.dataset.id;if(!0===r.selected&&d.main.config.allowDeselectOption){var i=!1;if(d.main.beforeOnChange&&d.main.config.isMultiple||(i=!0),d.main.beforeOnChange&&d.main.config.isMultiple){for(var s=d.main.data.getSelected(),n=JSON.parse(JSON.stringify(s)),a=0;a<n.length;a++)n[a].id===t&&n.splice(a,1);!1!==d.main.beforeOnChange(n)&&(i=!0)}i&&(d.main.config.isMultiple?(d.main.data.removeFromSelected(t,"id"),d.main.render(),d.main.select.setValue(),d.main.data.onDataChange()):d.main.set(""))}else{if(r.disabled||r.selected)return;if(d.main.config.limit&&Array.isArray(c)&&d.main.config.limit<=c.length)return;if(d.main.beforeOnChange){var o=void 0,l=JSON.parse(JSON.stringify(d.main.data.getObjectFromData(t)));l.selected=!0,d.main.config.isMultiple?(o=JSON.parse(JSON.stringify(c))).push(l):o=JSON.parse(JSON.stringify(l)),!1!==d.main.beforeOnChange(o)&&d.main.set(t,"id",d.main.config.closeOnSelect)}else d.main.set(t,"id",d.main.config.closeOnSelect)}});var i=c&&a.isValueInArrayOfObjects(c,"id",r.id);return(r.disabled||i)&&(t.onclick=null,d.main.config.allowDeselectOption||t.classList.add(this.main.config.disabled),d.main.config.hideSelectedOption&&t.classList.add(this.main.config.hide)),i?t.classList.add(this.main.config.optionSelected):t.classList.remove(this.main.config.optionSelected),t},n);function n(e){this.main=e.main,this.container=this.containerDiv(),this.content=this.contentDiv(),this.search=this.searchDiv(),this.list=this.listDiv(),this.options(),this.singleSelected=null,this.multiSelected=null,this.main.config.isMultiple?(this.multiSelected=this.multiSelectedDiv(),this.multiSelected&&this.container.appendChild(this.multiSelected.container)):(this.singleSelected=this.singleSelectedDiv(),this.container.appendChild(this.singleSelected.container)),this.main.config.addToBody?(this.content.classList.add(this.main.config.id),document.body.appendChild(this.content)):this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list)}t.Slim=s}],n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)).default;function n(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var i,s});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/**
 * A generic component of Stadia+
 *
 * @export the Component type.
 * @class Component
 */
var Component = /** @class */ (function () {
    function Component() {
        /**
         * The Component's name.
         */
        this.name = 'My Component';
    }
    /**
     * This method is called whenever the component should start loading.
     */
    Component.prototype.load = function () {
        this.id =
            this.name.toLowerCase().replace(/\s/g, '') + '-' + Math.floor(Math.random() * 999999);
        this.onStart();
    };
    /**
     * Returns whether this Component has an element in the DOM
     *
     * @returns {boolean}
     */
    Component.prototype.exists = function () {
        return document.querySelector('#' + this.id) !== null;
    };
    /**
     * This method is called whenever the component is unloading.
     */
    Component.prototype.unload = function () {
        this.onStop();
    };
    /**
     * This method is called when the Component should start.
     */
    Component.prototype.onStart = function () { };
    /**
     * This method is called when the Component should stop.
     */
    Component.prototype.onStop = function () { };
    /**
     * This method is called once every second.
     */
    Component.prototype.onUpdate = function () { };
    return Component;
}());



/***/ }),

/***/ "./src/ComponentLoader.ts":
/*!********************************!*\
  !*** ./src/ComponentLoader.ts ***!
  \********************************/
/*! exports provided: ComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/**
 * A utility class responsible for loading [[Component|Components]] and delivering events.
 *
 * @export the ComponentLoader type.
 * @class ComponentLoader
 */
var ComponentLoader = /** @class */ (function () {
    function ComponentLoader() {
        this.components = [];
    }
    /**
     * Registers a new component.
     *
     * @param {Component} component the component to register.
     */
    ComponentLoader.prototype.register = function (component) {
        this.components.push(component);
    };
    /**
     * Unregisters a component.
     *
     * @param {Component} component
     */
    ComponentLoader.prototype.unregister = function (component) {
        this.components.filter(function (e) { return e.id !== component.id; });
    };
    /**
     * Starts the component loader.
     */
    ComponentLoader.prototype.start = function () {
        this.components.forEach(function (component) {
            if (!component.enabled)
                component.load();
        });
        this.startTimer();
    };
    /**
     * Stops the component loader.
     */
    ComponentLoader.prototype.stop = function () {
        this.components.forEach(function (component) {
            if (component.enabled)
                component.unload();
        });
        this.stopTimer();
    };
    ComponentLoader.prototype.startTimer = function () {
        var self = this;
        this.timer = setInterval(function () {
            self.components.forEach(function (component) {
                if (component.enabled)
                    component.onUpdate();
            });
        }, 1000);
    };
    ComponentLoader.prototype.stopTimer = function () {
        clearInterval(this.timer);
    };
    return ComponentLoader;
}());



/***/ }),

/***/ "./src/Database.ts":
/*!*************************!*\
  !*** ./src/Database.ts ***!
  \*************************/
/*! exports provided: Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");

var Database = /** @class */ (function () {
    function Database(url) {
        this.url = url;
    }
    Database.prototype.connect = function (callback) {
        if (this.connected) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error: Already connected to the database.');
            return;
        }
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.url, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    self.connected = true;
                    self.connection = JSON.parse(xhr.responseText);
                    if (callback)
                        callback(self.connection);
                }
                else {
                    self.connected = false;
                    _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error when connecting to database:', xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            self.connected = false;
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error when connecting to database:', xhr.statusText);
        };
        xhr.send(null);
    };
    Database.prototype.getConnection = function () {
        if (!this.connected) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error: Not connected to the database');
            return null;
        }
        return this.connection;
    };
    Database.prototype.disconnect = function () {
        this.connection = null;
        this.connected = false;
    };
    Database.prototype.reconnect = function (callback) {
        this.disconnect();
        this.connect(callback);
    };
    return Database;
}());



/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix = '[Stadia+]';
var Logger = /** @class */ (function () {
    function Logger() {
        this.info = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\uD83D\uDCC3 " + obj.join(' '), 'color: black');
        };
        this.warning = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\uD83D\uDE1F " + obj.join(' '), 'color: orange');
        };
        this.error = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\u274C " + obj.join(' '), 'color: red; font-weight: 700');
        };
        this.component = function () {
            var obj = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                obj[_i] = arguments[_i];
            }
            console.log(prefix + " %c\uD83E\uDDE9 " + obj.join(' '), 'color: darkgreen');
        };
        /**
         * Dubiously created by Adrian Cooney
         * @author http://adriancooney.github.io
         */
        this.image = function (url, width, height) {
            var getBox = function (width, height) {
                return {
                    string: "+",
                    style: "font-size: 1px; padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: 0;"
                };
            };
            var dim = getBox(width, height);
            console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (width) + "px " + (height) + "px; color: transparent;");
        };
    }
    return Logger;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Logger());


/***/ }),

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.load = function () {
        this.menuElement = document.querySelector('.X1asv');
    };
    Util.prototype.isMenuOpen = function () {
        return this.menuElement.style.opacity !== '0';
    };
    Util.prototype.isInGame = function () {
        return window.location.pathname.indexOf('player') !== -1;
    };
    Util.prototype.isInHome = function () {
        return window.location.pathname.indexOf('home') !== -1;
    };
    Util.prototype.isInStore = function () {
        return window.location.pathname.indexOf('store') !== -1;
    };
    return Util;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Util());


/***/ }),

/***/ "./src/components/Clock.ts":
/*!*********************************!*\
  !*** ./src/components/Clock.ts ***!
  \*********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_Clock_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Clock.scss */ "./src/components/styles/Clock.scss");
/* harmony import */ var _styles_Clock_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_scss__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = "Clock";
        _this.createElement();
        return _this;
    }
    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    Clock.prototype.createElement = function () {
        this.element = document.createElement('span');
        this.element.classList.add('stadiaplus_clock');
    };
    /**
     * Called on startup, initializes important variables.
     */
    Clock.prototype.onStart = function () {
        this.enabled = true;
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    Clock.prototype.onStop = function () {
        this.enabled = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    /**
     * Called every second, updates the element to match the clock.
     */
    Clock.prototype.onUpdate = function () {
        var _this = this;
        // Only update the clock when it's visible
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
            if (!this.exists()) {
                var container = document.querySelector('.hxhAyf');
                container.prepend(this.element);
            }
            var time_1 = new Date().toLocaleTimeString();
            window.requestAnimationFrame(function () {
                _this.element.innerHTML = time_1;
            });
        }
    };
    return Clock;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/ForceCodec.ts":
/*!**************************************!*\
  !*** ./src/components/ForceCodec.ts ***!
  \**************************************/
/*! exports provided: ForceCodec, Codec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceCodec", function() { return ForceCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codec", function() { return Codec; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _styles_ForceCodec_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ForceCodec.scss */ "./src/components/styles/ForceCodec.scss");
/* harmony import */ var _styles_ForceCodec_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ForceCodec_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIRow */ "./src/ui/UIRow.ts");
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var chrome = window.chrome;
/**
 * A dropdown allowing changing of the codec.
 *
 * @export the ForceCodec type.
 * @class ForceCodec
 * @extends {Component}
 */
var ForceCodec = /** @class */ (function (_super) {
    __extends(ForceCodec, _super);
    function ForceCodec(tab, snackbar) {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = 'Force Codec';
        _this.codec = Codec.AUTOMATIC;
        _this.tab = tab;
        _this.snackbar = snackbar;
        return _this;
    }
    ForceCodec.prototype.getStorage = function (callback) {
        var _this = this;
        chrome.storage.local.get(['codec'], function (result) {
            _this.codec = result.codec;
            if (callback)
                callback();
        });
    };
    ForceCodec.prototype.setStorage = function (callback) {
        var self = this;
        chrome.storage.local.set({ codec: self.codec }, callback);
    };
    /**
     * Called on startup, initializes important variables.
     */
    ForceCodec.prototype.onStart = function () {
        var _this = this;
        this.enabled = true;
        var self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"codec\">\n                                <option value=\"" + Codec.AUTOMATIC + "\">Automatic</option>\n                                <option value=\"" + Codec.VP9 + "\">VP9</option>\n                                <option value=\"" + Codec.H264 + "\">H264</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">Apply</a>\n                    </div>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), Codec.AUTOMATIC);
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.codec = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        self.snackbar.activate('Reload the page to see your changes.');
                    });
                });
                self.getStorage(function () {
                    _this.select.set(self.codec);
                    ForceCodec.setCodec(self.codec);
                });
            },
            onReload: function (row) {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), Codec.AUTOMATIC);
                self.select.set(self.codec);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    ForceCodec.setCodec = function (codec) {
        var script = document.createElement('script');
        switch (codec) {
            case Codec.VP9:
                script.innerHTML = "\n                localStorage.setItem(\"video_codec_implementation_by_codec_key\", '{\"vp9\":\"ExternalDecoder\"}');\n            ";
                break;
            case Codec.H264:
                script.innerHTML = "\n                localStorage.setItem(\"video_codec_implementation_by_codec_key\", '{\"h264\":\"ExternalDecoder\", \"vp9\":\"libvpx\"}');\n            ";
                break;
            case Codec.AUTOMATIC:
                script.innerHTML = "\n                localStorage.removeItem(\"video_codec_implementation_by_codec_key\");\n            ";
                break;
            default:
                script.innerHTML = "\n                localStorage.removeItem(\"video_codec_implementation_by_codec_key\");\n            ";
                break;
        }
        document.body.appendChild(script);
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    ForceCodec.prototype.onStop = function () {
        this.enabled = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    /**
     * Called every second, updates the element to match the clock.
     */
    ForceCodec.prototype.onUpdate = function () {
    };
    return ForceCodec;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var Codec = /** @class */ (function () {
    function Codec() {
    }
    Codec.AUTOMATIC = 0;
    Codec.VP9 = 1;
    Codec.H264 = 2;
    return Codec;
}());



/***/ }),

/***/ "./src/components/ForceResolution.ts":
/*!*******************************************!*\
  !*** ./src/components/ForceResolution.ts ***!
  \*******************************************/
/*! exports provided: ForceResolution, Resolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceResolution", function() { return ForceResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolution", function() { return Resolution; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _styles_ForceResolution_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ForceResolution.scss */ "./src/components/styles/ForceResolution.scss");
/* harmony import */ var _styles_ForceResolution_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ForceResolution_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIRow */ "./src/ui/UIRow.ts");
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var chrome = window.chrome;
/**
 * A dropdown allowing changing of the codec.
 *
 * @export the ForceCodec type.
 * @class ForceCodec
 * @extends {Component}
 */
var ForceResolution = /** @class */ (function (_super) {
    __extends(ForceResolution, _super);
    function ForceResolution(tab, snackbar) {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = 'Force Resolution';
        _this.resolution = Resolution.AUTOMATIC;
        _this.tab = tab;
        _this.snackbar = snackbar;
        return _this;
    }
    ForceResolution.prototype.getStorage = function (callback) {
        var _this = this;
        chrome.storage.local.get(['resolution'], function (result) {
            _this.resolution = result.resolution;
            if (callback)
                callback();
        });
    };
    ForceResolution.prototype.setStorage = function (callback) {
        var self = this;
        chrome.storage.local.set({ resolution: self.resolution }, callback);
    };
    /**
     * Called on startup, initializes important variables.
     */
    ForceResolution.prototype.onStart = function () {
        var _this = this;
        this.enabled = true;
        var self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"resolution\">\n                                <option value=\"" + Resolution.AUTOMATIC + "\">Automatic</option>\n                                <option value=\"" + Resolution.UHD_4K + "\">4K</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">Apply</a>\n                    </div>\n\n                    <p class=\"stadiaplus_muted\">Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.</p>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), Resolution.AUTOMATIC);
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.resolution = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        self.snackbar.activate('Reload the page to see your changes.');
                    });
                });
                self.getStorage(function () {
                    _this.select.set(self.resolution);
                    ForceResolution.setResolution(self.resolution);
                });
            },
            onReload: function (row) {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), Resolution.AUTOMATIC);
                self.select.set(self.resolution);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    ForceResolution.setResolution = function (codec) {
        var script = document.createElement('script');
        var height;
        var width;
        switch (codec) {
            case Resolution.UHD_4K:
                width = 3840;
                height = 2160;
                break;
            case Resolution.AUTOMATIC:
                return;
            default:
                return;
        }
        script.innerHTML = "\n            Object.defineProperty(window.screen, 'availWidth', { value: " + width + " });\n            Object.defineProperty(window.screen, 'availHeight', { value: " + height + " });\n            Object.defineProperty(window.screen, 'width', { value: " + width + " });\n            Object.defineProperty(window.screen, 'height', { value: " + height + " });\n        ";
        document.body.appendChild(script);
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    ForceResolution.prototype.onStop = function () {
        this.enabled = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    /**
     * Called every second, updates the element to match the clock.
     */
    ForceResolution.prototype.onUpdate = function () {
    };
    return ForceResolution;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var Resolution = /** @class */ (function () {
    function Resolution() {
    }
    Resolution.AUTOMATIC = 0;
    Resolution.UHD_4K = 1;
    return Resolution;
}());



/***/ }),

/***/ "./src/components/LibraryFilter.ts":
/*!*****************************************!*\
  !*** ./src/components/LibraryFilter.ts ***!
  \*****************************************/
/*! exports provided: LibraryFilter, FilterOrder, OrderDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryFilter", function() { return LibraryFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOrder", function() { return FilterOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDirection", function() { return OrderDirection; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LibraryFilter.scss */ "./src/components/styles/LibraryFilter.scss");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var _a = window, chrome = _a.chrome, Array = _a.Array;
var LibraryFilter = /** @class */ (function (_super) {
    __extends(LibraryFilter, _super);
    function LibraryFilter(snackbar, database, uuidMap) {
        var _this = _super.call(this) || this;
        /**
         * Name of the component
         *
         * @type {string}
         * @memberof LibraryFilter
         */
        _this.name = 'Library Filter';
        /**
         * List of games and game data imported from the DOM
         *
         * @type {*}
         * @memberof LibraryFilter
         */
        _this.games = {};
        // Import database & uuidMap from index.js
        _this.database = database;
        _this.uuidMap = uuidMap;
        // Import snackbar from index.js
        _this.snackbar = snackbar;
        // Create new filter bar element
        _this.filterBar = document.createElement('div');
        _this.filterBar.classList.add('stadiaplus_libraryfilter-bar');
        return _this;
    }
    /**
     * Creates a wrapper around every game and initializes the elements necessary to show or hide it.
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.createAllWrappers = function () {
        var _this = this;
        this.getStorage(function () {
            var i = 0;
            _this.gameTiles.forEach(function (tile) {
                i++;
                var element = tile;
                _this.createWrapper(element, _this.getUUID(element));
                if (i === _this.gameTiles.length) {
                    _this.updateSortDirection();
                    _this.sortGames();
                }
            });
        });
    };
    /**
     * Get the game UUID from it's jslog attribute.
     *
     * @param {Element} tile
     * @returns
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.getUUID = function (tile) {
        return tile
            .getAttribute('jslog')
            .split('; ')[1]
            .substring(3);
    };
    /**
     * Given a tile element, create a wrapper around it and an icon allowing it to be shown or hidden.
     *
     * @param {Element} element the game element
     * @param {string} uuid the game uuid
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.createWrapper = function (element, uuid) {
        var _this = this;
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
        console.log(map);
        var entry = connection[map[uuid]];
        // Create the wrapper
        var wrapper = document.createElement('div');
        wrapper.setAttribute('game-uuid', uuid);
        wrapper.setAttribute('game-name', entry[1]);
        wrapper.classList.add('stadiaplus_libraryfilter-wrapper');
        wrapper.id = this.id + '-' + uuid;
        // Create the icon
        var icon = document.createElement('div');
        icon.classList.add('stadiaplus_libraryfilter-icon');
        icon.innerHTML = 'visibility';
        // Wrap the wrapper around the element and add the icon before it
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(icon);
        wrapper.appendChild(element);
        // Check the storage for visibility, hide the game if both 'visible' and 'showAll' is false
        if (!this.games.hasOwnProperty(uuid)) {
            this.games[uuid] = { visible: true };
        }
        else if (!this.games[uuid].visible && !this.showAll) {
            wrapper.classList.add('closed');
        }
        // Position the icon in the top right corner rather than the top left using 
        // a margin (using the 'left' css attribute is not possible)
        icon.style.marginLeft = element.clientWidth - icon.clientWidth + 'px';
        // When the icon is clicked on
        icon.addEventListener('click', function () {
            var visible = _this.games[uuid].visible;
            // If the game is visible, set it to hidden
            if (visible) {
                _this.snackbar.activate('A game has been hidden.');
                _this.games[uuid].visible = false;
            }
            else { // Otherwise set it to shown
                _this.snackbar.activate('A game is no longer hidden.');
                _this.games[uuid].visible = true;
            }
            // Update the game's visibility
            _this.updateGame(wrapper, element, true);
            _this.setStorage();
        });
    };
    /**
     * Updates a game's visibility, making sure it's only shown when it's supposed to
     *
     * @param {Element} wrapper The game's wrapper, created by [[createWrapper]]
     * @param {Element} tile The game tile
     * @param {boolean} animate Should the game have an animated closing effect?
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.updateGame = function (wrapper, tile, animate) {
        // Get the game UUID
        var uuid = this.getUUID(tile);
        // Get the game icon
        var icon = wrapper.querySelector('.stadiaplus_libraryfilter-icon');
        // If the game isn't visible...
        if (!this.games[uuid].visible) {
            // ...but all games should still be shown
            if (this.showAll) {
                // Set the icon to display that it's not visible but shown anyways
                icon.innerHTML = 'visibility_off';
                // Make sure the element isn't hidden
                wrapper.classList.remove('closing', 'closed');
            }
            else { // Otherwise...
                // ...if the hiding should be animated
                if (animate) {
                    // Fade the game tile out
                    wrapper.classList.add('closing');
                    // After 1 second, hide it
                    setTimeout(function () {
                        wrapper.classList.add('closed');
                    }, 1000);
                }
                else { // Otherwise
                    // Hide the element normally
                    wrapper.classList.add('closed');
                }
            }
        }
        else { // If the game is visible
            // Make sure the icon stays in place and doesn't get reset back to the top left corner
            icon.style.marginLeft = tile.clientWidth - icon.clientWidth + 'px';
            // Make sure the icon shows that it is visible
            icon.innerHTML = 'visibility';
        }
    };
    /**
     * Update all games, shorthand for looping through tiles and updating them individually
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.updateAllGames = function () {
        var _this = this;
        this.sortGames();
        this.gameTiles.forEach(function (tile) {
            _this.updateGame(tile.parentElement, tile, false);
        });
    };
    /**
     * Read the stored data from the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been read
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.getStorage = function (callback) {
        var _this = this;
        if (!this.enabled) {
            this.games = {};
            if (callback)
                callback();
        }
        chrome.storage.sync.get(['games', 'sort-order', 'sort-direction'], function (result) {
            _this.games = result.games !== undefined ? result.games : {};
            _this.order = result['sort-order'] !== undefined ? result['sort-order'] : FilterOrder.RECENT;
            _this.direction = result['sort-direction'] !== undefined ? result['sort-direction'] : OrderDirection.ASCENDING;
            if (callback)
                callback();
        });
    };
    /**
     * Write to the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been written
     * @returns
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.setStorage = function (callback) {
        if (!this.enabled) {
            if (callback)
                callback();
            return;
        }
        chrome.storage.sync.set({ games: this.games, 'sort-order': this.order, 'sort-direction': this.direction }, callback);
    };
    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.onStart = function () {
        var _this = this;
        this.enabled = true;
        this.filterBar.id = this.id + '-filterbar';
        this.filterBar.innerHTML = "\n            <span class=\"material-icons-extended\">\n                filter_list\n            </span>\n            <select name=\"order\">\n                <option value=\"" + FilterOrder.RECENT + "\">Recently Played</option>\n                <option value=\"" + FilterOrder.ALPHABETICAL + "\">Alphabetical</option>\n                <option value=\"" + FilterOrder.RANDOM + "\">Random</option>\n            </select>\n            <span id='" + (this.filterBar.id + '-direction') + "' class=\"material-icons-extended ascending stadiaplus_filterbar-direction\"></span>\n            <div id='" + (this.filterBar.id + '-checkbox') + "' class=\"pretty p-bigger p-default p-curve stadiaplus_filterbar-checkbox\">\n                <input type=\"checkbox\" />\n                <div class=\"state\">\n                    <label>Show hidden</label>\n                </div>\n            </div>\n        ";
        // Style the custom select box in the filter bar
        this.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_3__["Select"](this.filterBar.querySelector('select'), FilterOrder.RECENT);
        // Create an observer observing the filterbar container, making sure to reload the bar whenever it gets destroyed.
        var config = { attributes: true, childList: true, subtree: true };
        var observer = new MutationObserver(function (event) {
            var childChanges = event.filter(function (e) { return e.type === 'childList'; });
            // Identify the correct changes in the DOM
            if (childChanges.length === 4) {
                // If the filter bar doesn't already exist...
                if (!_this.filterBarExists()) {
                    // Create it
                    var container = document.querySelector('.CVVXfc.YYy3Zb');
                    _this.gameTiles = document.querySelectorAll('.GqLi4d');
                    container.appendChild(_this.filterBar);
                    _this.createAllWrappers();
                    _this.select.set(_this.order);
                    if (!_this.eventsExist) {
                        _this.addFilterBarEvents();
                    }
                    container.parentNode.prepend(container); // Always append container at the top 
                }
            }
        });
        observer.observe(document.querySelector('.iadg4b'), config);
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    /**
     * Adds a variety of events to the filter bar
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.addFilterBarEvents = function () {
        var _this = this;
        // When the order is changed, set it in the storage
        this.select.element.addEventListener('change', function () {
            _this.order = parseInt(_this.select.get()[0]);
            _this.sortGames();
            _this.setStorage();
        });
        var checkbox = document.getElementById(this.filterBar.id + '-checkbox').querySelector('input');
        // When the show all checkbox is clicked, toggle the showAll variable and update the games
        checkbox.addEventListener('click', function () {
            _this.showAll = checkbox.checked;
            console.log(_this.showAll);
            console.log(checkbox);
            _this.updateAllGames();
        });
        var dir = document.getElementById(this.filterBar.id + '-direction');
        // Toggle the sort direction
        dir.addEventListener('click', function () {
            _this.updateSortDirection();
            event.stopPropagation();
        });
        this.eventsExist = true;
    };
    LibraryFilter.prototype.updateSortDirection = function () {
        var element = document.getElementById(this.filterBar.id + '-direction');
        if (this.direction === OrderDirection.ASCENDING) {
            this.direction = OrderDirection.DESCENDING;
            element.classList.add('descending');
            element.classList.remove('ascending');
        }
        else {
            this.direction = OrderDirection.ASCENDING;
            element.classList.add('ascending');
            element.classList.remove('descending');
        }
        this.sortGames();
        this.setStorage();
    };
    /**
     * Runs when the component is stopped, destroys necessary parts
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.onStop = function () {
        this.enabled = false;
        document
            .querySelectorAll('.stadiaplus_libraryfilter-icon')
            .forEach(function (e) { return e.remove(); });
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    LibraryFilter.prototype.filterBarExists = function () {
        return document.getElementById(this.id + '-filterbar') !== null;
    };
    LibraryFilter.prototype.sortGames = function () {
        console.log(this.gameTiles);
        var arr = Array.from(this.gameTiles).map(function (e) { return e.parentElement; }); // Get all wrappers as an array
        arr = arr.sort(FilterOrder.getSorter(this.order));
        if (this.direction === OrderDirection.ASCENDING) {
            arr = arr.reverse();
        }
        arr.forEach(function (el) {
            el.parentElement.prepend(el);
        });
    };
    LibraryFilter.prototype.onUpdate = function () { };
    return LibraryFilter;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var FilterOrder = /** @class */ (function () {
    function FilterOrder() {
    }
    FilterOrder.getSorter = function (order) {
        switch (order) {
            case this.RECENT:
                return this.sortRecent;
            case this.ALPHABETICAL:
                return this.sortAlphabetical;
            case this.RANDOM:
                return this.sortRandom;
        }
    };
    FilterOrder.sortRecent = function (a, b) {
        return 1;
    };
    FilterOrder.sortAlphabetical = function (a, b) {
        var nameA = a.getAttribute('game-name');
        var nameB = b.getAttribute('game-name');
        if (nameA === undefined || nameB === undefined) {
            return 1;
        }
        return nameA.localeCompare(nameB);
    };
    FilterOrder.sortRandom = function (a, b) {
        return Math.round(Math.random() * 2) - 1;
    };
    FilterOrder.RECENT = 0;
    FilterOrder.ALPHABETICAL = 1;
    FilterOrder.ALPHABETICAL_REVERSE = 2;
    FilterOrder.RANDOM = 3;
    return FilterOrder;
}());

var OrderDirection;
(function (OrderDirection) {
    OrderDirection[OrderDirection["ASCENDING"] = 0] = "ASCENDING";
    OrderDirection[OrderDirection["DESCENDING"] = 1] = "DESCENDING";
})(OrderDirection || (OrderDirection = {}));


/***/ }),

/***/ "./src/components/NetworkMonitor.ts":
/*!******************************************!*\
  !*** ./src/components/NetworkMonitor.ts ***!
  \******************************************/
/*! exports provided: NetworkMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkMonitor", function() { return NetworkMonitor; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/UIComponent */ "./src/ui/UIComponent.ts");
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/UITab.scss */ "./src/components/styles/UITab.scss");
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var chrome = window.chrome;
/**
 * A tab and button displayed in the Stadia Menu.
 *
 * @export the UITab type.
 * @class UITab
 * @extends {Component}
 */
var NetworkMonitor = /** @class */ (function (_super) {
    __extends(NetworkMonitor, _super);
    function NetworkMonitor() {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = 'Network Monitor';
        return _this;
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     */
    NetworkMonitor.prototype.createElement = function () {
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"]('Network Monitor', "\n                This feature is still being worked on, please wait for future updates.\n            ", this.id);
        var icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, 'Monitor', this.id + '-button');
    };
    /**
     * Called on startup, initializes important variables.
     */
    NetworkMonitor.prototype.onStart = function () {
        this.enabled = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    NetworkMonitor.prototype.onStop = function () {
        this.enabled = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    /**
     * Called every second, makes sure to create components if they don't already exist.
     */
    NetworkMonitor.prototype.onUpdate = function () {
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                this.component.create();
                var self_1 = this;
                this.button.create(function () {
                    self_1.button.button.addEventListener('click', function () {
                        self_1.component.open();
                    });
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
    };
    return NetworkMonitor;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/UITab.ts":
/*!*********************************!*\
  !*** ./src/components/UITab.ts ***!
  \*********************************/
/*! exports provided: UITab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UITab", function() { return UITab; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/UIComponent */ "./src/ui/UIComponent.ts");
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/UITab.scss */ "./src/components/styles/UITab.scss");
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UITab_scss__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var chrome = window.chrome;
/**
 * A tab and button displayed in the Stadia Menu.
 *
 * @export the UITab type.
 * @class UITab
 * @extends {Component}
 */
var UITab = /** @class */ (function (_super) {
    __extends(UITab, _super);
    function UITab() {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = 'UI Tab';
        /**
         * An amount of rows, each containing content.
         */
        _this.rows = [];
        /**
         * A list of fun MOTD messages added to the tab.
         */
        _this.motdList = [
            '<img src="https://cdn.discordapp.com/emojis/636227864076746772.png?v=1" style="display: inline-flex; width: 24px">',
            "Don't look here, look below!",
            'Reality can be whatever I want.',
            'If you ask nicely, Stadia might even do your laundry for you!',
            'Have you tried asking customer support?',
            'Follow u/mafrans on Reddit!',
            'Stadia+, like Google+ but still alive.',
            'Stadia is DOA, believe me.',
            'Get a load of this guy, using chrome extensions to improve his Stadia experience.',
            "I'm telling you, don't trust that guy. You know, the guy.",
            'Shoutout to Chris and Grace!',
            'Have you tried Splitlings yet?',
            'Always check the ratings before you buy a new game.',
            'Have you tried GeForce Now?',
            'A hot dog is definitely not a sandwich.',
            'Idk about you, but I really want one of those fancy smart toilets.',
            'Chris is typing guys!!',
            'Does anyone have a buddy pass I could borrow?',
            'I paid $139 for this?',
            'Is Fortnite on Stadia yet?',
            'u/baconrules was the first to see 4k!',
        ];
        return _this;
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     */
    UITab.prototype.createElement = function () {
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"]('Stadia+', "\n                <i \n                    class=\"stadiaplus_muted\" \n                    style=\"margin-top: 1rem; margin-bottom: 5rem; display: block\"\n                >\n                    " + this.motdList[Math.floor(Math.random() * this.motdList.length)] + "\n                </i>\n            ", this.id);
        var icon = chrome.runtime.getURL('images/icons/stadiaplus.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, 'Stadia+', this.id + '-button');
    };
    /**
     * Append all rows that don't already exist.
     */
    UITab.prototype.createRows = function (reload) {
        var _this = this;
        var i = 0;
        this.rows.forEach(function (row) {
            if (!row.exists()) {
                row.append(_this.component, i > 0);
            }
            else if (reload) {
                row.reload();
            }
            i++;
        });
    };
    /**
     * Reload all rows
     */
    UITab.prototype.reloadRows = function () {
        this.rows.forEach(function (row) { return row.reload(); });
    };
    /**
     * Add a row to the list.
     */
    UITab.prototype.addRow = function (row) {
        this.rows.push(row);
    };
    /**
     * Clear and unload all rows.
     */
    UITab.prototype.clearRows = function () {
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            row.element.remove();
        }
        this.rows = [];
    };
    /**
     * Called on startup, initializes important variables.
     */
    UITab.prototype.onStart = function () {
        this.enabled = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    UITab.prototype.onStop = function () {
        this.enabled = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        this.rows.forEach(function (row) {
            row.element.remove();
        });
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    /**
     * Called every second, makes sure to create components if they don't already exist.
     */
    UITab.prototype.onUpdate = function () {
        var _this = this;
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                this.component.create();
                var self_1 = this;
                this.button.create(function () {
                    self_1.button.button.addEventListener('click', function () {
                        _this.createRows(true);
                        self_1.component.open();
                    });
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
    };
    return UITab;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/styles/Clock.scss":
/*!******************************************!*\
  !*** ./src/components/styles/Clock.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Clock.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Clock.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/ForceCodec.scss":
/*!***********************************************!*\
  !*** ./src/components/styles/ForceCodec.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ForceCodec.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceCodec.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/ForceResolution.scss":
/*!****************************************************!*\
  !*** ./src/components/styles/ForceResolution.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ForceResolution.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/ForceResolution.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/LibraryFilter.scss":
/*!**************************************************!*\
  !*** ./src/components/styles/LibraryFilter.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LibraryFilter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LibraryFilter.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/styles/UITab.scss":
/*!******************************************!*\
  !*** ./src/components/styles/UITab.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./UITab.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/UITab.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./src/Util.ts");
/* harmony import */ var _styles_Global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Global.scss */ "./src/styles/Global.scss");
/* harmony import */ var _styles_Global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentLoader */ "./src/ComponentLoader.ts");
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Clock */ "./src/components/Clock.ts");
/* harmony import */ var _components_UITab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UITab */ "./src/components/UITab.ts");
/* harmony import */ var _components_ForceCodec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ForceCodec */ "./src/components/ForceCodec.ts");
/* harmony import */ var _components_ForceResolution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ForceResolution */ "./src/components/ForceResolution.ts");
/* harmony import */ var _components_NetworkMonitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NetworkMonitor */ "./src/components/NetworkMonitor.ts");
/* harmony import */ var _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/Snackbar */ "./src/ui/Snackbar.ts");
/* harmony import */ var _components_LibraryFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/LibraryFilter */ "./src/components/LibraryFilter.ts");
/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Database */ "./src/Database.ts");














const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoader"]();
const snackbar = new _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__["Snackbar"]();
const tab = new _components_UITab__WEBPACK_IMPORTED_MODULE_5__["UITab"]();

const database = new _Database__WEBPACK_IMPORTED_MODULE_11__["Database"]('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new _Database__WEBPACK_IMPORTED_MODULE_11__["Database"]('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect(console.log);

loader.register(new _components_Clock__WEBPACK_IMPORTED_MODULE_4__["Clock"]());
loader.register(new _components_LibraryFilter__WEBPACK_IMPORTED_MODULE_10__["LibraryFilter"](snackbar, database, uuidMap));
loader.register(new _components_ForceCodec__WEBPACK_IMPORTED_MODULE_6__["ForceCodec"](tab, snackbar));
loader.register(new _components_ForceResolution__WEBPACK_IMPORTED_MODULE_7__["ForceResolution"](tab, snackbar));
loader.register(tab);
loader.register(new _components_NetworkMonitor__WEBPACK_IMPORTED_MODULE_8__["NetworkMonitor"]());

window.addEventListener('load', () => {
    _Util__WEBPACK_IMPORTED_MODULE_1__["default"].load();
    snackbar.create();
    loader.start();
})

/***/ }),

/***/ "./src/styles/Global.scss":
/*!********************************!*\
  !*** ./src/styles/Global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Global.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui/Select.ts":
/*!**************************!*\
  !*** ./src/ui/Select.ts ***!
  \**************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.min.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slim-select/dist/slimselect.min.css */ "./node_modules/slim-select/dist/slimselect.min.css");
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/styles/Select.scss */ "./src/ui/styles/Select.scss");
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2__);



var Select = /** @class */ (function () {
    function Select(element, placeholder) {
        this.element = element;
        this.element.classList.add('stadiaplus_dropdown');
        /**
         * Slimselect throws a TypeError if the elements/containers
         * have been deleted without properly being destroyed. As Stadia
         * runs in a virtual DOM, we have no control of when the DOM changes
         * therefore we can't solve it in a proper way.
         *
         * Let's just hope garbage collection takes care of it.
         */
        try {
            this.slimselect = new slim_select__WEBPACK_IMPORTED_MODULE_0___default.a({
                select: this.element,
                showSearch: false,
                placeholder: placeholder
            });
        }
        catch (error) { }
    }
    Select.prototype.get = function () {
        return this.slimselect.selected();
    };
    Select.prototype.set = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        if (items.length === 1) {
            // Just in case slimselect.set is faster
            this.slimselect.set(items[0]);
        }
        else {
            this.slimselect.setData(items);
        }
    };
    Select.prototype.search = function (query) {
        return this.slimselect.search(query);
    };
    Select.prototype.destroy = function () {
        if (this.slimselect.config !== undefined) {
            this.slimselect.destroy();
        }
        this.element.classList.remove('stadiaplus_dropdown');
        this.element = null;
    };
    return Select;
}());



/***/ }),

/***/ "./src/ui/Snackbar.ts":
/*!****************************!*\
  !*** ./src/ui/Snackbar.ts ***!
  \****************************/
/*! exports provided: Snackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return Snackbar; });
/* harmony import */ var _styles_Snackbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/Snackbar.scss */ "./src/ui/styles/Snackbar.scss");
/* harmony import */ var _styles_Snackbar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_Snackbar_scss__WEBPACK_IMPORTED_MODULE_0__);

var Snackbar = /** @class */ (function () {
    function Snackbar() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_snackbar');
        this.label = document.createElement('div');
        this.label.classList.add('stadiaplus_snackbar-label');
        this.closeButton = document.createElement('i');
        this.closeButton.innerHTML = 'close';
        this.closeButton.classList.add('material-icons-extended', 'stadiaplus_snackbar-close');
        var self = this;
        this.closeButton.addEventListener('click', function () {
            self.element.classList.remove('active');
        });
    }
    Snackbar.prototype.create = function () {
        document.body.appendChild(this.element);
        this.element.appendChild(this.label);
        this.element.appendChild(this.closeButton);
    };
    Snackbar.prototype.activate = function (label) {
        this.label.innerHTML = label;
        this.element.classList.add('active');
        var self = this;
        window.setTimeout(function () {
            self.element.classList.remove('active');
        }, 5000);
    };
    return Snackbar;
}());



/***/ }),

/***/ "./src/ui/UIButton.ts":
/*!****************************!*\
  !*** ./src/ui/UIButton.ts ***!
  \****************************/
/*! exports provided: UIButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIButton", function() { return UIButton; });
/* harmony import */ var _UIButtonContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIButtonContainer */ "./src/ui/UIButtonContainer.ts");

var UIButton = /** @class */ (function () {
    function UIButton(icon, title, id) {
        this.id = id;
        this.html = "\n            <div class=\"Pyflbb\" jsname=\"rZHESd\">\n                <div class=\"KEaHo\">\n                    <span class=\"X5peoe\" jsname=\"pYFhU\">\n                        <img class=\"xduoyf\" src=\"" + icon + "\">\n                    </span>\n                    <span class=\"caSJV\">" + title + "</span>\n                </div>\n            </div>\n        ";
        this.element = document.createElement('div');
        this.element.id = id;
        this.element.classList.add('Pyf1bb', 'stadiaplus_ui-button');
        this.button = document.createElement('div');
        this.button.setAttribute('role', 'button');
        this.button.setAttribute('tabindex', '0');
        this.button.classList.add('CTvDXd', 'QAAyWd', 'Pjpac', 'zcMYd');
        this.button.innerHTML = this.html;
        this.element.appendChild(this.button);
    }
    UIButton.prototype.create = function (callback) {
        for (var _i = 0, _a = UIButton.buttonContainers; _i < _a.length; _i++) {
            var container = _a[_i];
            if (container.buttons.length < 3) {
                this.container = container;
            }
        }
        if (this.container === undefined) {
            this.container = new _UIButtonContainer__WEBPACK_IMPORTED_MODULE_0__["UIButtonContainer"]();
            UIButton.buttonContainers.push(this.container);
        }
        this.container.addButton(this);
        this.container.create(callback);
    };
    UIButton.prototype.update = function () {
        if (!this.exists()) {
            this.create();
        }
    };
    UIButton.prototype.exists = function () {
        return document.getElementById(this.id) !== null;
    };
    UIButton.prototype.destroy = function () {
        this.element.remove();
        this.container.removeButton(this);
    };
    UIButton.buttonContainers = [];
    return UIButton;
}());



/***/ }),

/***/ "./src/ui/UIButtonContainer.ts":
/*!*************************************!*\
  !*** ./src/ui/UIButtonContainer.ts ***!
  \*************************************/
/*! exports provided: UIButtonContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIButtonContainer", function() { return UIButtonContainer; });
var UIButtonContainer = /** @class */ (function () {
    function UIButtonContainer() {
        this.buttons = [];
        this.id = 'button-container-' + Math.floor(Math.random() * 9999);
        this.container = document.querySelector('.TZ0BN');
        this.wrapper = document.createElement('div');
        this.wrapper.id = this.id;
        this.wrapper.classList.add('ZgUMo', 'stadiaplus_ui-btn-wrapper');
        this.element = document.createElement('div');
        this.element.classList.add('E0Zk9b', 'stadiaplus_ui-btn-container');
    }
    UIButtonContainer.prototype.exists = function () {
        return document.getElementById(this.id) !== null;
    };
    UIButtonContainer.prototype.create = function (callback) {
        var _this = this;
        if (!this.exists()) {
            this.container = document.querySelector('.TZ0BN'); // Requery in case the container was deleted
            this.wrapper.appendChild(this.element);
            this.container.appendChild(this.wrapper);
        }
        this.buttons.forEach(function (button) {
            if (!button.exists()) {
                _this.element.appendChild(button.element);
            }
        });
        if (callback)
            callback();
    };
    UIButtonContainer.prototype.addButton = function (button) {
        this.buttons.push(button);
    };
    UIButtonContainer.prototype.removeButton = function (button) {
        this.buttons = this.buttons.filter(function (b) { return b.id !== button.id; });
    };
    return UIButtonContainer;
}());



/***/ }),

/***/ "./src/ui/UIComponent.ts":
/*!*******************************!*\
  !*** ./src/ui/UIComponent.ts ***!
  \*******************************/
/*! exports provided: UIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIComponent", function() { return UIComponent; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");

var UIComponent = /** @class */ (function () {
    function UIComponent(title, content, id) {
        this.id = id;
        this.html = "\n            <header>\n                <div class=\"rkvT7c\" jsaction=\"click:a4fUwd\" jsname=\"GeGHKb\">\n                    <span class=\"DPvwYc tRqc3c\" aria-hidden=\"true\">arrow_back</span>\n                </div>\n                <span class=\"Q3wyyb\">\n                    <div class=\"CwCxFd\">" + title + "</div>\n                </span>\n            </header>\n\n            <div class=\"content\">\n                " + content + "\n            </div>\n        ";
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.classList.add('stadiaplus_ui-component');
    }
    UIComponent.prototype.create = function () {
        var container = document.querySelector('.hxhAyf.fi8Jxd');
        if (!container)
            return;
        this.element.innerHTML = this.html;
        container.appendChild(this.element);
        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);
        var backBtn = document.querySelector("#" + this.id + " > header > .rkvT7c");
        var self = this;
        backBtn.addEventListener('click', function () {
            self.close();
        });
    };
    UIComponent.prototype.open = function () {
        this.element.classList.add('open');
    };
    UIComponent.prototype.close = function () {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Closing', this.id);
        this.element.classList.remove('open');
    };
    return UIComponent;
}());



/***/ }),

/***/ "./src/ui/UIRow.ts":
/*!*************************!*\
  !*** ./src/ui/UIRow.ts ***!
  \*************************/
/*! exports provided: UIRow, UIRowOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRow", function() { return UIRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRowOptions", function() { return UIRowOptions; });
var UIRow = /** @class */ (function () {
    function UIRow(title, content, id, options) {
        this.title = title;
        this.content = content;
        this.options = options;
        this.id = id;
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.innerHTML = "\n            <p>" + this.title + "</p>\n            <div>\n                " + this.content + "\n            </div>\n        ";
        this.element.classList.add('stadiaplus_ui-row');
    }
    UIRow.prototype.exists = function () {
        return document.getElementById(this.id);
    };
    UIRow.prototype.destroy = function () {
        this.options.onDestroy(this);
        this.element.remove();
    };
    UIRow.prototype.reload = function () {
        this.options.onReload(this);
    };
    UIRow.prototype.append = function (component, useHr) {
        if (useHr === void 0) { useHr = false; }
        if (useHr) {
            component.element.appendChild(document.createElement('hr'));
        }
        component.element.appendChild(this.element);
        this.options.onCreate(this);
    };
    return UIRow;
}());

var UIRowOptions = /** @class */ (function () {
    function UIRowOptions() {
    }
    return UIRowOptions;
}());



/***/ }),

/***/ "./src/ui/styles/Select.scss":
/*!***********************************!*\
  !*** ./src/ui/styles/Select.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Select.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Select.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui/styles/Snackbar.scss":
/*!*************************************!*\
  !*** ./src/ui/styles/Snackbar.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Snackbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Snackbar.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"insert":"html"};

options.insert = "html";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvVUlUYWIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU2VsZWN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TbmFja2Jhci5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcz8wMzUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9yY2VDb2RlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvQ2xvY2suc2Nzcz8zNjMwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3M/NWZlYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3M/Mzk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzPzM3ODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1VJVGFiLnNjc3M/NGE0YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HbG9iYWwuc2Nzcz81YWFlIiwid2VicGFjazovLy8uL3NyYy91aS9TZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NuYWNrYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b25Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSVJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NlbGVjdC5zY3NzP2ZkYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TbmFja2Jhci5zY3NzPzVkMDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsc0JBQXNCLHNCQUFzQix5QkFBeUIscUJBQXFCLEdBQUc7QUFDcEg7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIscUJBQXFCLGdDQUFnQyxHQUFHLDhCQUE4Qix5QkFBeUIsOEJBQThCLG1CQUFtQixxQkFBcUIsMkJBQTJCLEdBQUcscUJBQXFCLHlCQUF5QiwwQkFBMEIsR0FBRztBQUM1VTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxD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O0FBRWhKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfY2xvY2sge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByZXR0eSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXR0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eSBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWluLXdpZHRoOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWwge1xcbiAgcG9zaXRpb246IGluaXRpYWw7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xcbiAgbWluLXdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNiZGMzYzc7XFxufVxcbi5wcmV0dHkgLnN0YXRlLnAtaXMtaG92ZXIsIC5wcmV0dHkgLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHRhZGEge1xcbiAgMCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDcpO1xcbiAgfVxcbiAgMzglIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1NSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuICA3MiUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDgxJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNCk7XFxuICB9XFxuICA4OSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDk1JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamVsbHkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44NSwgMS4xNSwgMSk7XFxuICB9XFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2JkYzNjNztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxLjVlbSByZ2JhKDE4OSwgMTk1LCAxOTksIDApO1xcbiAgfVxcbn1cXG4ucHJldHR5LnAtZGVmYXVsdC5wLWZpbGwgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wcmV0dHkucC1kZWZhdWx0IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogY2FsYygxZW0gLyA3KTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuaWNvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxufVxcblxcbi5wcmV0dHkucC1zdmcgLnN0YXRlIC5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN2ZyAuc3RhdGUgc3ZnIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLXN2ZyBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5zdmcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLWltYWdlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIHRvcDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtaW1hZ2UgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dCB7XFxuICBtaW4td2lkdGg6IDJlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIHdpZHRoOiAyZW07XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAxNiUpO1xcbiAgei1pbmRleDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsIHtcXG4gIHRleHQtaW5kZW50OiAyLjVlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NTZiICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIC5zdGF0ZTpiZWZvcmUge1xcbiAgaGVpZ2h0OiAwLjFlbTtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzcgIWltcG9ydGFudDtcXG4gIHRvcDogY2FsYyg1MCUgLSAwLjFlbSk7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZTpub3QoLnAtaXMtaG92ZXIpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXIgfiAuc3RhdGUucC1pcy1ob3ZlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZS5wLWlzLWhvdmVyIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWZvY3VzIGlucHV0OmZvY3VzIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2JkYzNjNztcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGU6bm90KC5wLWlzLWluZGV0ZXJtaW5hdGUpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIH4gLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmYsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb2ZmIC5pY29uIHtcXG4gIGNvbG9yOiAjYmRjM2M3O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtb2ZmIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldHR5LnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1wbGFpbi5wLXRvZ2dsZSAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1wbGFpbi5wLXBsYWluIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuLnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcblxcbi5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtY3VydmUgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDphZnRlcixcXG4ucHJldHR5LnAtc21vb3RoIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggLnN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcge1xcbiAgYW5pbWF0aW9uOiB6b29tIDAuMnMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aC5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHpvb20gMC4ycyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoLnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogdGFkYSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAxIGFsdGVybmF0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogamVsbHkgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJldHR5LnAtcHVsc2U6bm90KC5wLXN3aXRjaCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcztcXG59XFxuXFxuLnByZXR0eSBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkgaW5wdXRbZGlzYWJsZWRdIH4gKiB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5wcmV0dHkucC1sb2NrZWQgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIHN2ZyB7XFxuICBjb2xvcjogIzQyOGJjYTtcXG4gIHN0cm9rZTogIzQyOGJjYTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyNDU2ODI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1NjgyICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIHN2ZyB7XFxuICBjb2xvcjogIzViYzBkZTtcXG4gIHN0cm9rZTogIzViYzBkZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyMzkwYjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5MGIwICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIHN2ZyB7XFxuICBjb2xvcjogIzVjYjg1YztcXG4gIHN0cm9rZTogIzVjYjg1YztcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMzNTc5MzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3OTM1ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIHN2ZyB7XFxuICBjb2xvcjogI2YwYWQ0ZTtcXG4gIHN0cm9rZTogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNjNzdjMTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc3YzExICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gc3ZnIHtcXG4gIGNvbG9yOiAjZDk1MzRmO1xcbiAgc3Ryb2tlOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTAyNjIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwMjYyMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkucC1iaWdnZXIgLmljb24sXFxuLnByZXR0eS5wLWJpZ2dlciAuc3ZnLFxcbi5wcmV0dHkucC1iaWdnZXIgLmltZyB7XFxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDM1JSkgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLWJpZ2dlciBsYWJlbCB7XFxuICB0ZXh0LWluZGVudDogMS43ZW07XFxufVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAucHJldHR5IC5zdGF0ZTpiZWZvcmUsXFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkgLnN0YXRlIC5pY29uIHtcXG4gICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgfVxcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29ucyBFeHRlbmRlZFxcXCI7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB6LWluZGV4OiA0O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2EzYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMjUsIDEpLCBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMjUsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIuY2xvc2luZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIuY2xvc2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMjM2O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMzIpLCAwIDAuMDYyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTgpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19kcm9wZG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWNoZWNrYm94IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcImFycm93X2Ryb3BfZG93blxcXCI7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uLmFzY2VuZGluZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbi5kZXNjZW5kaW5nIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbXV0ZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQge1xcbiAgLyogXFxuICAgKiAgIE11c3QgcmVtb3ZlIDIgeCBwYWRkaW5nIG9yIGl0IGRvZXNudCB3b3JrIFxcbiAgICovXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZTMwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQub3BlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIgLkN3Q3hGZCB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIuRTBaazliIHtcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnV0dG9uIHtcXG4gIHdpZHRoOiAxMTYuMTU2cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkdxTGk0ZCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KSBjb250cmFzdCgxLjEpO1xcbn1cXG5cXG5odG1sIGJvZHkgLmRTR3Z6ZiB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuaHRtbCBib2R5IC5DVlZYZmMge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBpbml0aWFsO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0ODRkO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUyNTcgIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCxcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAjOTM5NTlGIDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB3aWR0aDogMTgwcHg7XFxufVxcblxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1wbHVzIHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuIHtcXG4gIGJvcmRlci1jb2xvcjogIzkzOTU5RjtcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtY29udGVudCB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxufVxcblxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5wbGFjZWhvbGRlcixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX3NuYWNrYmFyIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogOHB4O1xcbiAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgxNnB4KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSksIG9wYWNpdHkgMC4xNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxufVxcbi5zdGFkaWFwbHVzX3NuYWNrYmFyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMHB4KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zdGFkaWFwbHVzX3NuYWNrYmFyLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5zdGFkaWFwbHVzX3NuYWNrYmFyLWNsb3NlIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1jbG9zZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNzLW1haW57cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dXNlci1zZWxlY3Q6bm9uZTtjb2xvcjojNjY2O3dpZHRoOjEwMCV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZHtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MzBweDtwYWRkaW5nOjZweDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO291dGxpbmU6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yc30uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2RjZGVlMjtjdXJzb3I6bm90LWFsbG93ZWR9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1vcGVuLWFib3Zle2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3Mtb3Blbi1iZWxvd3tib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlcntmbGV4OjEgMSAxMDAlO3RleHQtYWxpZ246bGVmdDt3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KTtsaW5lLWhlaWdodDoxZW07LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyLC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyICp7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgKnt3aWR0aDphdXRvfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyIC5zcy1kaXNhYmxlZHtjb2xvcjojZGVkZWRlfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWRlc2VsZWN0e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2ZsZXg6MCAxIGF1dG87bWFyZ2luOjAgNnB4O2ZvbnQtd2VpZ2h0OjcwMH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1kZXNlbGVjdC5zcy1oaWRle2Rpc3BsYXk6bm9uZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvd3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtmbGV4OjAgMSBhdXRvO21hcmdpbjowIDZweH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFue2JvcmRlcjpzb2xpZCAjNjY2O2JvcmRlci13aWR0aDowIDJweCAycHggMDtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjNweDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsbWFyZ2luIC4yc30uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuLmFycm93LXVwe3RyYW5zZm9ybTpyb3RhdGUoLTEzNWRlZyk7bWFyZ2luOjNweCAwIDB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbi5hcnJvdy1kb3due3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO21hcmdpbjotM3B4IDAgMH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztjdXJzb3I6cG9pbnRlcjttaW4taGVpZ2h0OjMwcHg7d2lkdGg6MTAwJTtwYWRkaW5nOjAgMCAwIDNweDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO291dGxpbmU6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yc30uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3MtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZGNkZWUyO2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3MtZGlzYWJsZWQgLnNzLXZhbHVlcyAuc3MtZGlzYWJsZWR7Y29sb3I6IzY2Nn0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3MtZGlzYWJsZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUgLnNzLXZhbHVlLWRlbGV0ZXtjdXJzb3I6bm90LWFsbG93ZWR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLW9wZW4tYWJvdmV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLW9wZW4tYmVsb3d7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXN7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2ZsZXg6MSAxIDEwMCU7d2lkdGg6Y2FsYygxMDAlIC0gMzBweCl9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLWRpc2FibGVke2Rpc3BsYXk6ZmxleDtwYWRkaW5nOjRweCA1cHg7bWFyZ2luOjJweCAwO2xpbmUtaGVpZ2h0OjFlbTthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtjb2xvcjojZGVkZWRlO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH1Aa2V5ZnJhbWVzIHNjYWxlSW57MCV7dHJhbnNmb3JtOnNjYWxlKDApO29wYWNpdHk6MH10b3t0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNjYWxlT3V0ezAle3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnNjYWxlKDApO29wYWNpdHk6MH19LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVle2Rpc3BsYXk6ZmxleDt1c2VyLXNlbGVjdDpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MTJweDtwYWRkaW5nOjNweCA1cHg7bWFyZ2luOjNweCA1cHggM3B4IDA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmI7Ym9yZGVyLXJhZGl1czo0cHg7YW5pbWF0aW9uLW5hbWU6c2NhbGVJbjthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RofS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZS5zcy1vdXR7YW5pbWF0aW9uLW5hbWU6c2NhbGVPdXQ7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZSAuc3MtdmFsdWUtZGVsZXRle21hcmdpbjowIDAgMCA1cHg7Y3Vyc29yOnBvaW50ZXJ9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGR7ZGlzcGxheTpmbGV4O2ZsZXg6MCAxIDNweDttYXJnaW46OXB4IDEycHggMCA1cHh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXN7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6IzY2Njtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTBweDt3aWR0aDoycHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVzOmFmdGVye2JhY2tncm91bmQ6IzY2Njtjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoycHg7d2lkdGg6MTBweDtsZWZ0Oi00cHg7dG9wOjRweH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1cy5zcy1jcm9zc3t0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3MtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO21hcmdpbjotMXB4IDAgMDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO3otaW5kZXg6MTAxMDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxvcGFjaXR5IC4ycztvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlWSgwKX0uc3MtY29udGVudC5zcy1vcGVue2Rpc3BsYXk6YmxvY2s7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZVkoMSl9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O3BhZGRpbmc6OHB4IDhweCA2cHh9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaC5zcy1oaWRlLC5zcy1jb250ZW50IC5zcy1zZWFyY2guc3MtaGlkZSBpbnB1dHtoZWlnaHQ6MDtvcGFjaXR5OjA7cGFkZGluZzowO21hcmdpbjowfS5zcy1jb250ZW50IC5zcy1zZWFyY2ggaW5wdXR7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0O2ZsZXg6MSAxIGF1dG87d2lkdGg6MTAwJTttaW4td2lkdGg6MDtoZWlnaHQ6MzBweDtwYWRkaW5nOjZweCA4cHg7bWFyZ2luOjA7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7dGV4dC1hbGlnbjpsZWZ0O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkfS5zcy1jb250ZW50IC5zcy1zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVye2NvbG9yOiM4YThhOGE7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zcy1jb250ZW50IC5zcy1zZWFyY2ggaW5wdXQ6Zm9jdXN7Ym94LXNoYWRvdzowIDAgNXB4ICM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCAuc3MtYWRkYWJsZXtkaXNwbGF5OmlubGluZS1mbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToyMnB4O2ZvbnQtd2VpZ2h0OjcwMDtmbGV4OjAgMCAzMHB4O2hlaWdodDozMHB4O21hcmdpbjowIDAgMCA4cHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3MtY29udGVudCAuc3MtYWRkYWJsZXtwYWRkaW5nLXRvcDowfS5zcy1jb250ZW50IC5zcy1saXN0e21heC1oZWlnaHQ6MjAwcHg7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3RleHQtYWxpZ246bGVmdH0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0Z3JvdXAgLnNzLW9wdGdyb3VwLWxhYmVse3BhZGRpbmc6NnB4IDEwcHg7Zm9udC13ZWlnaHQ6NzAwfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cCAuc3Mtb3B0aW9ue3BhZGRpbmc6NnB4IDZweCA2cHggMjVweH0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0Z3JvdXAtbGFiZWwtc2VsZWN0YWJsZXtjdXJzb3I6cG9pbnRlcn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0Z3JvdXAtbGFiZWwtc2VsZWN0YWJsZTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9ue3BhZGRpbmc6NnB4IDEwcHg7Y3Vyc29yOnBvaW50ZXI7dXNlci1zZWxlY3Q6bm9uZX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uICp7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1oaWdobGlnaHRlZCwuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZifS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtZGlzYWJsZWR7Y3Vyc29yOm5vdC1hbGxvd2VkO2NvbG9yOiNkZWRlZGU7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb246bm90KC5zcy1kaXNhYmxlZCkuc3Mtb3B0aW9uLXNlbGVjdGVke2NvbG9yOiM2NjY7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDg4LDE1MSwyNTEsLjEpfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtaGlkZXtkaXNwbGF5Om5vbmV9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbiAuc3Mtc2VhcmNoLWhpZ2hsaWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZiOGN9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpbXNlbGVjdC5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNsaW1TZWxlY3Q9dCgpOmUuU2xpbVNlbGVjdD10KCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybihzPXt9LG4ubT1pPVtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBpLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLGl9dmFyIG47dC5fX2VzTW9kdWxlPSEwLHQuaGFzQ2xhc3NJblRyZWU9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBzKGUsdCl7cmV0dXJuIHQmJmUmJmUuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5jb250YWlucyh0KT9lOm51bGx9cmV0dXJuIHMoZSx0KXx8ZnVuY3Rpb24gZSh0LGkpe3JldHVybiB0JiZ0IT09ZG9jdW1lbnQ/cyh0LGkpP3Q6ZSh0LnBhcmVudE5vZGUsaSk6bnVsbH0oZSx0KX0sdC5lbnN1cmVFbGVtZW50SW5WaWV3PWZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5zY3JvbGxUb3ArZS5vZmZzZXRUb3Ascz1pK2UuY2xpZW50SGVpZ2h0LG49dC5vZmZzZXRUb3AsYT1uK3QuY2xpZW50SGVpZ2h0O248aT9lLnNjcm9sbFRvcC09aS1uOnM8YSYmKGUuc2Nyb2xsVG9wKz1hLXMpfSx0LnB1dENvbnRlbnQ9ZnVuY3Rpb24oZSx0LGkpe3ZhciBzPWUub2Zmc2V0SGVpZ2h0LG49ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWk/bi50b3A6bi50b3AtcyxvPWk/bi5ib3R0b206bi5ib3R0b20rcztyZXR1cm4gYTw9MD9cImJlbG93XCI6bz49d2luZG93LmlubmVySGVpZ2h0P1wiYWJvdmVcIjppP3Q6XCJiZWxvd1wifSx0LmRlYm91bmNlPWZ1bmN0aW9uKG4sYSxvKXt2YXIgbDtyZXR1cm4gdm9pZCAwPT09YSYmKGE9MTAwKSx2b2lkIDA9PT1vJiYobz0hMSksZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspZVt0XT1hcmd1bWVudHNbdF07dmFyIGk9c2VsZixzPW8mJiFsO2NsZWFyVGltZW91dChsKSxsPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPW51bGwsb3x8bi5hcHBseShpLGUpfSxhKSxzJiZuLmFwcGx5KGksZSl9fSx0LmlzVmFsdWVJbkFycmF5T2ZPYmplY3RzPWZ1bmN0aW9uKGUsdCxpKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZVt0XT09PWk7Zm9yKHZhciBzPTAsbj1lO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO2lmKGEmJmFbdF0mJmFbdF09PT1pKXJldHVybiEwfXJldHVybiExfSx0LmhpZ2hsaWdodD1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ZSxuPW5ldyBSZWdFeHAoXCIoXCIrdC50cmltKCkrXCIpKD8hW148XSo+W148Pl0qPC8pXCIsXCJpXCIpO2lmKCFlLm1hdGNoKG4pKXJldHVybiBlO3ZhciBhPWUubWF0Y2gobikuaW5kZXgsbz1hK2UubWF0Y2gobilbMF0udG9TdHJpbmcoKS5sZW5ndGgsbD1lLnN1YnN0cmluZyhhLG8pO3JldHVybiBzPXMucmVwbGFjZShuLCc8bWFyayBjbGFzcz1cIicraSsnXCI+JytsK1wiPC9tYXJrPlwiKX0sXCJmdW5jdGlvblwiIT10eXBlb2Yobj13aW5kb3cpLkN1c3RvbUV2ZW50JiYocy5wcm90b3R5cGU9bi5FdmVudC5wcm90b3R5cGUsbi5DdXN0b21FdmVudD1zKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUubmV3T3B0aW9uPWZ1bmN0aW9uKGUpe3JldHVybntpZDplLmlkP2UuaWQ6U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlP2UudmFsdWU6XCJcIix0ZXh0OmUudGV4dD9lLnRleHQ6XCJcIixpbm5lckhUTUw6ZS5pbm5lckhUTUw/ZS5pbm5lckhUTUw6XCJcIixzZWxlY3RlZDohIWUuc2VsZWN0ZWQmJmUuc2VsZWN0ZWQsZGlzcGxheTp2b2lkIDA9PT1lLmRpc3BsYXl8fGUuZGlzcGxheSxkaXNhYmxlZDohIWUuZGlzYWJsZWQmJmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6ISFlLnBsYWNlaG9sZGVyJiZlLnBsYWNlaG9sZGVyLGNsYXNzOmUuY2xhc3M/ZS5jbGFzczp2b2lkIDAsZGF0YTplLmRhdGE/ZS5kYXRhOnt9fX0sbi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGUpe3RoaXMuZGF0YS5wdXNoKHtpZDpTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWUsdGV4dDplLnRleHQsaW5uZXJIVE1MOlwiXCIsc2VsZWN0ZWQ6ITEsZGlzcGxheTohMCxkaXNhYmxlZDohMSxwbGFjZWhvbGRlcjohMSxjbGFzczp2b2lkIDAsZGF0YTp7fX0pfSxuLnByb3RvdHlwZS5wYXJzZVNlbGVjdERhdGE9ZnVuY3Rpb24oKXt0aGlzLmRhdGE9W107Zm9yKHZhciBlPTAsdD10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQuY2hpbGROb2RlcztlPHQubGVuZ3RoO2UrKyl7dmFyIGk9dFtlXTtpZihcIk9QVEdST1VQXCI9PT1pLm5vZGVOYW1lKXtmb3IodmFyIHM9e2xhYmVsOmkubGFiZWwsb3B0aW9uczpbXX0sbj0wLGE9aS5jaGlsZE5vZGVzO248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2lmKFwiT1BUSU9OXCI9PT1vLm5vZGVOYW1lKXt2YXIgbD10aGlzLnB1bGxPcHRpb25EYXRhKG8pO3Mub3B0aW9ucy5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KX19dGhpcy5kYXRhLnB1c2gocyl9ZWxzZVwiT1BUSU9OXCI9PT1pLm5vZGVOYW1lJiYobD10aGlzLnB1bGxPcHRpb25EYXRhKGkpLHRoaXMuZGF0YS5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KSl9fSxuLnByb3RvdHlwZS5wdWxsT3B0aW9uRGF0YT1mdW5jdGlvbihlKXtyZXR1cm57aWQ6ISFlLmRhdGFzZXQmJmUuZGF0YXNldC5pZHx8U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlLHRleHQ6ZS50ZXh0LGlubmVySFRNTDplLmlubmVySFRNTCxzZWxlY3RlZDplLnNlbGVjdGVkLGRpc2FibGVkOmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6XCJ0cnVlXCI9PT1lLmRhdGFzZXQucGxhY2Vob2xkZXIsY2xhc3M6ZS5jbGFzc05hbWUsc3R5bGU6ZS5zdHlsZS5jc3NUZXh0LGRhdGE6ZS5kYXRhc2V0fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0PWZ1bmN0aW9uKCl7aWYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGU9W10sdD0wLGk9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50Lm9wdGlvbnM7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5zZWxlY3RlZCl7dmFyIG49dGhpcy5nZXRPYmplY3RGcm9tRGF0YShzLnZhbHVlLFwidmFsdWVcIik7biYmbi5pZCYmZS5wdXNoKG4uaWQpfX10aGlzLnNldFNlbGVjdGVkKGUsXCJpZFwiKX1lbHNle3ZhciBhPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudDtpZigtMSE9PWEuc2VsZWN0ZWRJbmRleCl7dmFyIG89YS5vcHRpb25zW2Euc2VsZWN0ZWRJbmRleF0udmFsdWU7dGhpcy5zZXRTZWxlY3RlZChvLFwidmFsdWVcIil9fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cImlkXCIpO2Zvcih2YXIgaT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtyLnBsYWNlaG9sZGVyfHwoci5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQocixlLHQpKX19fWVsc2Ugbi5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQobixlLHQpfX0sbi5wcm90b3R5cGUuc2hvdWxkQmVTZWxlY3RlZD1mdW5jdGlvbihlLHQsaSl7aWYodm9pZCAwPT09aSYmKGk9XCJpZFwiKSxBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcz0wLG49dDtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtpZihpIGluIGUmJlN0cmluZyhlW2ldKT09PVN0cmluZyhhKSlyZXR1cm4hMH1lbHNlIGlmKGkgaW4gZSYmU3RyaW5nKGVbaV0pPT09U3RyaW5nKHQpKXJldHVybiEwO3JldHVybiExfSxuLnByb3RvdHlwZS5nZXRTZWxlY3RlZD1mdW5jdGlvbigpe2Zvcih2YXIgZT17dGV4dDpcIlwiLHBsYWNlaG9sZGVyOnRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0fSx0PVtdLGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107ci5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gocik6ZT1yKX19fWVsc2Ugbi5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gobik6ZT1uKX1yZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3Q6ZX0sbi5wcm90b3R5cGUuYWRkVG9TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT1bXSxzPXRoaXMuZ2V0U2VsZWN0ZWQoKTtpZihBcnJheS5pc0FycmF5KHMpKWZvcih2YXIgbj0wLGE9cztuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtpLnB1c2gob1t0XSl9aS5wdXNoKGUpLHRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLnJlbW92ZUZyb21TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGk9W10scz0wLG49dGhpcy5nZXRTZWxlY3RlZCgpO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO1N0cmluZyhhW3RdKSE9PVN0cmluZyhlKSYmaS5wdXNoKGFbdF0pfXRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLm9uRGF0YUNoYW5nZT1mdW5jdGlvbigpe3RoaXMubWFpbi5vbkNoYW5nZSYmdGhpcy5pc09uQ2hhbmdlRW5hYmxlZCYmdGhpcy5tYWluLm9uQ2hhbmdlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRTZWxlY3RlZCgpKSkpfSxuLnByb3RvdHlwZS5nZXRPYmplY3RGcm9tRGF0YT1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PVwiaWRcIik7Zm9yKHZhciBpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYodCBpbiBuJiZTdHJpbmcoblt0XSk9PT1TdHJpbmcoZSkpcmV0dXJuIG47aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW47aWYoYS5vcHRpb25zKWZvcih2YXIgbz0wLGw9YS5vcHRpb25zO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO2lmKFN0cmluZyhyW3RdKT09PVN0cmluZyhlKSlyZXR1cm4gcn19fXJldHVybiBudWxsfSxuLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24obil7aWYoXCJcIiE9PSh0aGlzLnNlYXJjaFZhbHVlPW4pLnRyaW0oKSl7dmFyIGE9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hGaWx0ZXIsZT10aGlzLmRhdGEuc2xpY2UoMCk7bj1uLnRyaW0oKTt2YXIgdD1lLm1hcChmdW5jdGlvbihlKXtpZihlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIHQ9ZSxpPVtdO2lmKHQub3B0aW9ucyYmKGk9dC5vcHRpb25zLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gYShlLG4pfSkpLDAhPT1pLmxlbmd0aCl7dmFyIHM9T2JqZWN0LmFzc2lnbih7fSx0KTtyZXR1cm4gcy5vcHRpb25zPWksc319cmV0dXJuIGUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0XCIpJiZhKGUsbik/ZTpudWxsfSk7dGhpcy5maWx0ZXJlZD10LmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pfWVsc2UgdGhpcy5maWx0ZXJlZD1udWxsfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMuY29udGVudE9wZW49ITEsdGhpcy5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLHRoaXMuaXNPbkNoYW5nZUVuYWJsZWQ9ITAsdGhpcy5tYWluPWUubWFpbix0aGlzLnNlYXJjaFZhbHVlPVwiXCIsdGhpcy5kYXRhPVtdLHRoaXMuZmlsdGVyZWQ9bnVsbCx0aGlzLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gdm9pZCAwIT09ZS50ZXh0fHwoY29uc29sZS5lcnJvcihcIkRhdGEgb2JqZWN0IG9wdGlvbiBtdXN0IGhhdmUgYXQgbGVhc3QgaGF2ZSBhIHRleHQgdmFsdWUuIENoZWNrIG9iamVjdDogXCIrSlNPTi5zdHJpbmdpZnkoZSkpLCExKX10LkRhdGE9cyx0LnZhbGlkYXRlRGF0YT1mdW5jdGlvbihlKXtpZighZSlyZXR1cm4gY29uc29sZS5lcnJvcihcIkRhdGEgbXVzdCBiZSBhbiBhcnJheSBvZiBvYmplY3RzXCIpLCExO2Zvcih2YXIgdD0wLGk9MCxzPWU7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXtyKGxbb10pfHx0Kyt9fX1lbHNlIHIobil8fHQrK31yZXR1cm4gMD09PXR9LHQudmFsaWRhdGVPcHRpb249cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz1pKDMpLG49aSg0KSxhPWkoNSksbz1pKDEpLGw9aSgwKSxyPShjLnByb3RvdHlwZS52YWxpZGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1cInN0cmluZ1wiPT10eXBlb2YgZS5zZWxlY3Q/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnNlbGVjdCk6ZS5zZWxlY3Q7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc2VsZWN0IGVsZW1lbnRcIik7aWYoXCJTRUxFQ1RcIiE9PXQudGFnTmFtZSl0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IGlzbnQgb2YgdHlwZSBzZWxlY3RcIik7cmV0dXJuIHR9LGMucHJvdG90eXBlLnNlbGVjdGVkPWZ1bmN0aW9uKCl7aWYodGhpcy5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBlPVtdLHQ9MCxpPW49dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07ZS5wdXNoKHMudmFsdWUpfXJldHVybiBlfXZhciBuO3JldHVybihuPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKT9uLnZhbHVlOlwiXCJ9LGMucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT10JiYodD1cInZhbHVlXCIpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmIUFycmF5LmlzQXJyYXkoZSk/dGhpcy5kYXRhLmFkZFRvU2VsZWN0ZWQoZSx0KTp0aGlzLmRhdGEuc2V0U2VsZWN0ZWQoZSx0KSx0aGlzLnNlbGVjdC5zZXRWYWx1ZSgpLHRoaXMuZGF0YS5vbkRhdGFDaGFuZ2UoKSx0aGlzLnJlbmRlcigpLGkmJnRoaXMuY2xvc2UoKX0sYy5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0LGkscyl7dm9pZCAwPT09dCYmKHQ9XCJ2YWx1ZVwiKSx2b2lkIDA9PT1pJiYoaT0hMCksdm9pZCAwPT09cyYmKHM9ITApLHRoaXMuc2V0KGUsdCxpLHMpfSxjLnByb3RvdHlwZS5zZXREYXRhPWZ1bmN0aW9uKGUpe2lmKG8udmFsaWRhdGVEYXRhKGUpKXt2YXIgdD1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKSxpPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO2lmKHRoaXMuY29uZmlnLmlzQWpheCYmaSlpZih0aGlzLmNvbmZpZy5pc011bHRpcGxlKWZvcih2YXIgcz0wLG49aS5yZXZlcnNlKCk7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107dC51bnNoaWZ0KGEpfWVsc2UgdC51bnNoaWZ0KHRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKSx0LnVuc2hpZnQoe3RleHQ6XCJcIixwbGFjZWhvbGRlcjohMH0pO3RoaXMuc2VsZWN0LmNyZWF0ZSh0KSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpfWVsc2UgY29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gcHJvYmxlbSBvbjogI1wiK3RoaXMuc2VsZWN0LmVsZW1lbnQuaWQpfSxjLnByb3RvdHlwZS5hZGREYXRhPWZ1bmN0aW9uKGUpe28udmFsaWRhdGVEYXRhKFtlXSk/KHRoaXMuZGF0YS5hZGQodGhpcy5kYXRhLm5ld09wdGlvbihlKSksdGhpcy5zZWxlY3QuY3JlYXRlKHRoaXMuZGF0YS5kYXRhKSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHRoaXMucmVuZGVyKCkpOmNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIHByb2JsZW0gb246ICNcIit0aGlzLnNlbGVjdC5lbGVtZW50LmlkKX0sYy5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5jb25maWcuaXNFbmFibGVkJiYhdGhpcy5kYXRhLmNvbnRlbnRPcGVuKXtpZih0aGlzLmJlZm9yZU9wZW4mJnRoaXMuYmVmb3JlT3BlbigpLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LmFkZChcInNzLWNyb3NzXCIpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LWRvd25cIiksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctdXBcIikpLHRoaXMuc2xpbVt0aGlzLmNvbmZpZy5pc011bHRpcGxlP1wibXVsdGlTZWxlY3RlZFwiOlwic2luZ2xlU2VsZWN0ZWRcIl0uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm92ZVwiPT09dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj90aGlzLmNvbmZpZy5vcGVuQWJvdmU6dGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLmNvbmZpZy5hZGRUb0JvZHkpe3ZhciB0PXRoaXMuc2xpbS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dGhpcy5zbGltLmNvbnRlbnQuc3R5bGUudG9wPXQudG9wK3QuaGVpZ2h0K3dpbmRvdy5zY3JvbGxZK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS5sZWZ0PXQubGVmdCt3aW5kb3cuc2Nyb2xsWCtcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUud2lkdGg9dC53aWR0aCtcInB4XCJ9aWYodGhpcy5zbGltLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuKSxcInVwXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudC50b0xvd2VyQ2FzZSgpP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOlwiZG93blwiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQudG9Mb3dlckNhc2UoKT90aGlzLm1vdmVDb250ZW50QmVsb3coKTpcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodGhpcy5zbGltLmNvbnRlbnQsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbix0aGlzLmRhdGEuY29udGVudE9wZW4pP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOnRoaXMubW92ZUNvbnRlbnRCZWxvdygpLCF0aGlzLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZihpKXt2YXIgcz1pLmlkLG49dGhpcy5zbGltLmxpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCInK3MrJ1wiXScpO24mJmwuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLnNsaW0ubGlzdCxuKX19c2V0VGltZW91dChmdW5jdGlvbigpe2UuZGF0YS5jb250ZW50T3Blbj0hMCxlLmNvbmZpZy5zZWFyY2hGb2N1cyYmZS5zbGltLnNlYXJjaC5pbnB1dC5mb2N1cygpLGUuYWZ0ZXJPcGVuJiZlLmFmdGVyT3BlbigpfSx0aGlzLmNvbmZpZy50aW1lb3V0RGVsYXkpfX0sYy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuZGF0YS5jb250ZW50T3BlbiYmKHRoaXMuYmVmb3JlQ2xvc2UmJnRoaXMuYmVmb3JlQ2xvc2UoKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LnJlbW92ZShcInNzLWNyb3NzXCIpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LXVwXCIpKSx0aGlzLnNsaW0uY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW4pLHRoaXMuZGF0YS5jb250ZW50T3Blbj0hMSx0aGlzLnNlYXJjaChcIlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5zbGltLmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksZS5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsZS5jb25maWcuaXNNdWx0aXBsZSYmZS5zbGltLm11bHRpU2VsZWN0ZWQ/KGUuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkJlbG93KSk6ZS5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5CZWxvdykpLGUuc2xpbS5zZWFyY2guaW5wdXQuYmx1cigpLGUuYWZ0ZXJDbG9zZSYmZS5hZnRlckNsb3NlKCl9LHRoaXMuY29uZmlnLnRpbWVvdXREZWxheSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEFib3ZlPWZ1bmN0aW9uKCl7dmFyIGU9MDt0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD9lPXRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZT10aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLm9mZnNldEhlaWdodCk7dmFyIHQ9ZSt0aGlzLnNsaW0uY29udGVudC5vZmZzZXRIZWlnaHQtMTt0aGlzLnNsaW0uY29udGVudC5zdHlsZS5tYXJnaW49XCItXCIrdCtcInB4IDAgMCAwXCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUuaGVpZ2h0PXQtZSsxK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49XCJjZW50ZXIgYm90dG9tXCIsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImFib3ZlXCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkFib3ZlKSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5BYm92ZSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEJlbG93PWZ1bmN0aW9uKCl7dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkJlbG93KSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5CZWxvdykpfSxjLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITAsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSExLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITEsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITEsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSEwLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITAsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbih0KXtpZih0aGlzLmRhdGEuc2VhcmNoVmFsdWUhPT10KWlmKHRoaXMuc2xpbS5zZWFyY2guaW5wdXQudmFsdWU9dCx0aGlzLmNvbmZpZy5pc0FqYXgpe3ZhciBpPXRoaXM7dGhpcy5jb25maWcuaXNTZWFyY2hpbmc9ITAsdGhpcy5yZW5kZXIoKSx0aGlzLmFqYXgmJnRoaXMuYWpheCh0LGZ1bmN0aW9uKGUpe2kuY29uZmlnLmlzU2VhcmNoaW5nPSExLEFycmF5LmlzQXJyYXkoZSk/KGUudW5zaGlmdCh7dGV4dDpcIlwiLHBsYWNlaG9sZGVyOiEwfSksaS5zZXREYXRhKGUpLGkuZGF0YS5zZWFyY2godCksaS5yZW5kZXIoKSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5zbGltLm9wdGlvbnMoZSk6aS5yZW5kZXIoKX0pfWVsc2UgdGhpcy5kYXRhLnNlYXJjaCh0KSx0aGlzLnJlbmRlcigpfSxjLnByb3RvdHlwZS5zZXRTZWFyY2hUZXh0PWZ1bmN0aW9uKGUpe3RoaXMuY29uZmlnLnNlYXJjaFRleHQ9ZX0sYy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNNdWx0aXBsZT90aGlzLnNsaW0udmFsdWVzKCk6KHRoaXMuc2xpbS5wbGFjZWhvbGRlcigpLHRoaXMuc2xpbS5kZXNlbGVjdCgpKSx0aGlzLnNsaW0ub3B0aW9ucygpfSxjLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPW51bGwpO3ZhciB0PWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLW1haW5cIik6dGhpcy5zbGltLmNvbnRhaW5lcixpPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNzaWQ9XCIrZStcIl1cIik6dGhpcy5zZWxlY3QuZWxlbWVudDtpZih0JiZpJiYoaS5zdHlsZS5kaXNwbGF5PVwiXCIsZGVsZXRlIGkuZGF0YXNldC5zc2lkLGkuc2xpbT1udWxsLHQucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpLHRoaXMuY29uZmlnLmFkZFRvQm9keSkpe3ZhciBzPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLWNvbnRlbnRcIik6dGhpcy5zbGltLmNvbnRlbnQ7aWYoIXMpcmV0dXJuO2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocyl9fSxjKTtmdW5jdGlvbiBjKGUpe3ZhciB0PXRoaXM7dGhpcy5hamF4PW51bGwsdGhpcy5hZGRhYmxlPW51bGwsdGhpcy5iZWZvcmVPbkNoYW5nZT1udWxsLHRoaXMub25DaGFuZ2U9bnVsbCx0aGlzLmJlZm9yZU9wZW49bnVsbCx0aGlzLmFmdGVyT3Blbj1udWxsLHRoaXMuYmVmb3JlQ2xvc2U9bnVsbCx0aGlzLmFmdGVyQ2xvc2U9bnVsbDt2YXIgaT10aGlzLnZhbGlkYXRlKGUpO2kuZGF0YXNldC5zc2lkJiZ0aGlzLmRlc3Ryb3koaS5kYXRhc2V0LnNzaWQpLGUuYWpheCYmKHRoaXMuYWpheD1lLmFqYXgpLGUuYWRkYWJsZSYmKHRoaXMuYWRkYWJsZT1lLmFkZGFibGUpLHRoaXMuY29uZmlnPW5ldyBzLkNvbmZpZyh7c2VsZWN0OmksaXNBamF4OiEhZS5hamF4LHNob3dTZWFyY2g6ZS5zaG93U2VhcmNoLHNlYXJjaFBsYWNlaG9sZGVyOmUuc2VhcmNoUGxhY2Vob2xkZXIsc2VhcmNoVGV4dDplLnNlYXJjaFRleHQsc2VhcmNoaW5nVGV4dDplLnNlYXJjaGluZ1RleHQsc2VhcmNoRm9jdXM6ZS5zZWFyY2hGb2N1cyxzZWFyY2hIaWdobGlnaHQ6ZS5zZWFyY2hIaWdobGlnaHQsc2VhcmNoRmlsdGVyOmUuc2VhcmNoRmlsdGVyLGNsb3NlT25TZWxlY3Q6ZS5jbG9zZU9uU2VsZWN0LHNob3dDb250ZW50OmUuc2hvd0NvbnRlbnQscGxhY2Vob2xkZXJUZXh0OmUucGxhY2Vob2xkZXIsYWxsb3dEZXNlbGVjdDplLmFsbG93RGVzZWxlY3QsYWxsb3dEZXNlbGVjdE9wdGlvbjplLmFsbG93RGVzZWxlY3RPcHRpb24saGlkZVNlbGVjdGVkT3B0aW9uOmUuaGlkZVNlbGVjdGVkT3B0aW9uLGRlc2VsZWN0TGFiZWw6ZS5kZXNlbGVjdExhYmVsLGlzRW5hYmxlZDplLmlzRW5hYmxlZCx2YWx1ZXNVc2VUZXh0OmUudmFsdWVzVXNlVGV4dCxzaG93T3B0aW9uVG9vbHRpcHM6ZS5zaG93T3B0aW9uVG9vbHRpcHMsc2VsZWN0QnlHcm91cDplLnNlbGVjdEJ5R3JvdXAsbGltaXQ6ZS5saW1pdCx0aW1lb3V0RGVsYXk6ZS50aW1lb3V0RGVsYXksYWRkVG9Cb2R5OmUuYWRkVG9Cb2R5fSksdGhpcy5zZWxlY3Q9bmV3IG4uU2VsZWN0KHtzZWxlY3Q6aSxtYWluOnRoaXN9KSx0aGlzLmRhdGE9bmV3IG8uRGF0YSh7bWFpbjp0aGlzfSksdGhpcy5zbGltPW5ldyBhLlNsaW0oe21haW46dGhpc30pLHRoaXMuc2VsZWN0LmVsZW1lbnQucGFyZW50Tm9kZSYmdGhpcy5zZWxlY3QuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnNsaW0uY29udGFpbmVyLHRoaXMuc2VsZWN0LmVsZW1lbnQubmV4dFNpYmxpbmcpLGUuZGF0YT90aGlzLnNldERhdGEoZS5kYXRhKTp0aGlzLnJlbmRlcigpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UudGFyZ2V0JiYhbC5oYXNDbGFzc0luVHJlZShlLnRhcmdldCx0LmNvbmZpZy5pZCkmJnQuY2xvc2UoKX0pLFwiYXV0b1wiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbC5kZWJvdW5jZShmdW5jdGlvbihlKXt0LmRhdGEuY29udGVudE9wZW4mJihcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodC5zbGltLmNvbnRlbnQsdC5kYXRhLmNvbnRlbnRQb3NpdGlvbix0LmRhdGEuY29udGVudE9wZW4pP3QubW92ZUNvbnRlbnRBYm92ZSgpOnQubW92ZUNvbnRlbnRCZWxvdygpKX0pLCExKSxlLmJlZm9yZU9uQ2hhbmdlJiYodGhpcy5iZWZvcmVPbkNoYW5nZT1lLmJlZm9yZU9uQ2hhbmdlKSxlLm9uQ2hhbmdlJiYodGhpcy5vbkNoYW5nZT1lLm9uQ2hhbmdlKSxlLmJlZm9yZU9wZW4mJih0aGlzLmJlZm9yZU9wZW49ZS5iZWZvcmVPcGVuKSxlLmFmdGVyT3BlbiYmKHRoaXMuYWZ0ZXJPcGVuPWUuYWZ0ZXJPcGVuKSxlLmJlZm9yZUNsb3NlJiYodGhpcy5iZWZvcmVDbG9zZT1lLmJlZm9yZUNsb3NlKSxlLmFmdGVyQ2xvc2UmJih0aGlzLmFmdGVyQ2xvc2U9ZS5hZnRlckNsb3NlKSx0aGlzLmNvbmZpZy5pc0VuYWJsZWR8fHRoaXMuZGlzYWJsZSgpfXQuZGVmYXVsdD1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZWFyY2hGaWx0ZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4tMSE9PWUudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodC50b0xvd2VyQ2FzZSgpKX0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLmlkPVwiXCIsdGhpcy5pc011bHRpcGxlPSExLHRoaXMuaXNBamF4PSExLHRoaXMuaXNTZWFyY2hpbmc9ITEsdGhpcy5zaG93U2VhcmNoPSEwLHRoaXMuc2VhcmNoRm9jdXM9ITAsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITEsdGhpcy5jbG9zZU9uU2VsZWN0PSEwLHRoaXMuc2hvd0NvbnRlbnQ9XCJhdXRvXCIsdGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1cIlNlYXJjaFwiLHRoaXMuc2VhcmNoVGV4dD1cIk5vIFJlc3VsdHNcIix0aGlzLnNlYXJjaGluZ1RleHQ9XCJTZWFyY2hpbmcuLi5cIix0aGlzLnBsYWNlaG9sZGVyVGV4dD1cIlNlbGVjdCBWYWx1ZVwiLHRoaXMuYWxsb3dEZXNlbGVjdD0hMSx0aGlzLmFsbG93RGVzZWxlY3RPcHRpb249ITEsdGhpcy5oaWRlU2VsZWN0ZWRPcHRpb249ITEsdGhpcy5kZXNlbGVjdExhYmVsPVwieFwiLHRoaXMuaXNFbmFibGVkPSEwLHRoaXMudmFsdWVzVXNlVGV4dD0hMSx0aGlzLnNob3dPcHRpb25Ub29sdGlwcz0hMSx0aGlzLnNlbGVjdEJ5R3JvdXA9ITEsdGhpcy5saW1pdD0wLHRoaXMudGltZW91dERlbGF5PTIwMCx0aGlzLmFkZFRvQm9keT0hMSx0aGlzLm1haW49XCJzcy1tYWluXCIsdGhpcy5zaW5nbGVTZWxlY3RlZD1cInNzLXNpbmdsZS1zZWxlY3RlZFwiLHRoaXMuYXJyb3c9XCJzcy1hcnJvd1wiLHRoaXMubXVsdGlTZWxlY3RlZD1cInNzLW11bHRpLXNlbGVjdGVkXCIsdGhpcy5hZGQ9XCJzcy1hZGRcIix0aGlzLnBsdXM9XCJzcy1wbHVzXCIsdGhpcy52YWx1ZXM9XCJzcy12YWx1ZXNcIix0aGlzLnZhbHVlPVwic3MtdmFsdWVcIix0aGlzLnZhbHVlVGV4dD1cInNzLXZhbHVlLXRleHRcIix0aGlzLnZhbHVlRGVsZXRlPVwic3MtdmFsdWUtZGVsZXRlXCIsdGhpcy5jb250ZW50PVwic3MtY29udGVudFwiLHRoaXMub3Blbj1cInNzLW9wZW5cIix0aGlzLm9wZW5BYm92ZT1cInNzLW9wZW4tYWJvdmVcIix0aGlzLm9wZW5CZWxvdz1cInNzLW9wZW4tYmVsb3dcIix0aGlzLnNlYXJjaD1cInNzLXNlYXJjaFwiLHRoaXMuc2VhcmNoSGlnaGxpZ2h0ZXI9XCJzcy1zZWFyY2gtaGlnaGxpZ2h0XCIsdGhpcy5hZGRhYmxlPVwic3MtYWRkYWJsZVwiLHRoaXMubGlzdD1cInNzLWxpc3RcIix0aGlzLm9wdGdyb3VwPVwic3Mtb3B0Z3JvdXBcIix0aGlzLm9wdGdyb3VwTGFiZWw9XCJzcy1vcHRncm91cC1sYWJlbFwiLHRoaXMub3B0Z3JvdXBMYWJlbFNlbGVjdGFibGU9XCJzcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlXCIsdGhpcy5vcHRpb249XCJzcy1vcHRpb25cIix0aGlzLm9wdGlvblNlbGVjdGVkPVwic3Mtb3B0aW9uLXNlbGVjdGVkXCIsdGhpcy5oaWdobGlnaHRlZD1cInNzLWhpZ2hsaWdodGVkXCIsdGhpcy5kaXNhYmxlZD1cInNzLWRpc2FibGVkXCIsdGhpcy5oaWRlPVwic3MtaGlkZVwiLHRoaXMuaWQ9XCJzcy1cIitNYXRoLmZsb29yKDFlNSpNYXRoLnJhbmRvbSgpKSx0aGlzLnN0eWxlPWUuc2VsZWN0LnN0eWxlLmNzc1RleHQsdGhpcy5jbGFzcz1lLnNlbGVjdC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLHRoaXMuaXNNdWx0aXBsZT1lLnNlbGVjdC5tdWx0aXBsZSx0aGlzLmlzQWpheD1lLmlzQWpheCx0aGlzLnNob3dTZWFyY2g9ITEhPT1lLnNob3dTZWFyY2gsdGhpcy5zZWFyY2hGb2N1cz0hMSE9PWUuc2VhcmNoRm9jdXMsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITA9PT1lLnNlYXJjaEhpZ2hsaWdodCx0aGlzLmNsb3NlT25TZWxlY3Q9ITEhPT1lLmNsb3NlT25TZWxlY3QsZS5zaG93Q29udGVudCYmKHRoaXMuc2hvd0NvbnRlbnQ9ZS5zaG93Q29udGVudCksdGhpcy5pc0VuYWJsZWQ9ITEhPT1lLmlzRW5hYmxlZCxlLnNlYXJjaFBsYWNlaG9sZGVyJiYodGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1lLnNlYXJjaFBsYWNlaG9sZGVyKSxlLnNlYXJjaFRleHQmJih0aGlzLnNlYXJjaFRleHQ9ZS5zZWFyY2hUZXh0KSxlLnNlYXJjaGluZ1RleHQmJih0aGlzLnNlYXJjaGluZ1RleHQ9ZS5zZWFyY2hpbmdUZXh0KSxlLnBsYWNlaG9sZGVyVGV4dCYmKHRoaXMucGxhY2Vob2xkZXJUZXh0PWUucGxhY2Vob2xkZXJUZXh0KSx0aGlzLmFsbG93RGVzZWxlY3Q9ITA9PT1lLmFsbG93RGVzZWxlY3QsdGhpcy5hbGxvd0Rlc2VsZWN0T3B0aW9uPSEwPT09ZS5hbGxvd0Rlc2VsZWN0T3B0aW9uLHRoaXMuaGlkZVNlbGVjdGVkT3B0aW9uPSEwPT09ZS5oaWRlU2VsZWN0ZWRPcHRpb24sZS5kZXNlbGVjdExhYmVsJiYodGhpcy5kZXNlbGVjdExhYmVsPWUuZGVzZWxlY3RMYWJlbCksZS52YWx1ZXNVc2VUZXh0JiYodGhpcy52YWx1ZXNVc2VUZXh0PWUudmFsdWVzVXNlVGV4dCksZS5zaG93T3B0aW9uVG9vbHRpcHMmJih0aGlzLnNob3dPcHRpb25Ub29sdGlwcz1lLnNob3dPcHRpb25Ub29sdGlwcyksZS5zZWxlY3RCeUdyb3VwJiYodGhpcy5zZWxlY3RCeUdyb3VwPWUuc2VsZWN0QnlHcm91cCksZS5saW1pdCYmKHRoaXMubGltaXQ9ZS5saW1pdCksZS5zZWFyY2hGaWx0ZXImJih0aGlzLnNlYXJjaEZpbHRlcj1lLnNlYXJjaEZpbHRlciksbnVsbCE9ZS50aW1lb3V0RGVsYXkmJih0aGlzLnRpbWVvdXREZWxheT1lLnRpbWVvdXREZWxheSksdGhpcy5hZGRUb0JvZHk9ITA9PT1lLmFkZFRvQm9keX10LkNvbmZpZz1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbigpe2lmKHRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkpe2lmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSlmb3IodmFyIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSx0PTAsaT10aGlzLmVsZW1lbnQub3B0aW9uczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtzLnNlbGVjdGVkPSExO2Zvcih2YXIgbj0wLGE9ZTtuPGEubGVuZ3RoO24rKylhW25dLnZhbHVlPT09cy52YWx1ZSYmKHMuc2VsZWN0ZWQ9ITApfWVsc2UgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHRoaXMuZWxlbWVudC52YWx1ZT1lP2UudmFsdWU6XCJcIjt0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMSx0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSx0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMH19LG4ucHJvdG90eXBlLmFkZEF0dHJpYnV0ZXM9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQudGFiSW5kZXg9LTEsdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5lbGVtZW50LmRhdGFzZXQuc3NpZD10aGlzLm1haW4uY29uZmlnLmlkfSxuLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0Lm1haW4ucmVuZGVyKCl9KX0sbi5wcm90b3R5cGUuYWRkTXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5tYWluLmNvbmZpZy5pc0FqYXh8fCh0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7dC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlciYmKHQubWFpbi5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHQubWFpbi5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHQubWFpbi5yZW5kZXIoKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7XCJjbGFzc1wiPT09ZS5hdHRyaWJ1dGVOYW1lJiZ0Lm1haW4uc2xpbS51cGRhdGVDb250YWluZXJEaXZDbGFzcyh0Lm1haW4uc2xpbS5jb250YWluZXIpfSkpfSksdGhpcy5vYnNlcnZlTXV0YXRpb25PYnNlcnZlcigpKX0sbi5wcm90b3R5cGUub2JzZXJ2ZU11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt0aGlzLm11dGF0aW9uT2JzZXJ2ZXImJnRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCx7YXR0cmlidXRlczohMCxjaGlsZExpc3Q6ITAsY2hhcmFjdGVyRGF0YTohMH0pfSxuLnByb3RvdHlwZS5kaXNjb25uZWN0TXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3RoaXMubXV0YXRpb25PYnNlcnZlciYmdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKX0sbi5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5pbm5lckhUTUw9XCJcIjtmb3IodmFyIHQ9MCxpPWU7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBuPXMsYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7aWYoYS5sYWJlbD1uLmxhYmVsLG4ub3B0aW9ucylmb3IodmFyIG89MCxsPW4ub3B0aW9ucztvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTthLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlT3B0aW9uKHIpKX10aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYSl9ZWxzZSB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPcHRpb24ocykpfX0sbi5wcm90b3R5cGUuY3JlYXRlT3B0aW9uPWZ1bmN0aW9uKHQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7cmV0dXJuIGkudmFsdWU9dC52YWx1ZXx8dC50ZXh0LGkuaW5uZXJIVE1MPXQuaW5uZXJIVE1MfHx0LnRleHQsdC5zZWxlY3RlZCYmKGkuc2VsZWN0ZWQ9dC5zZWxlY3RlZCksdC5kaXNhYmxlZCYmKGkuZGlzYWJsZWQ9ITApLHQucGxhY2Vob2xkZXImJmkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiLFwidHJ1ZVwiKSx0LmNsYXNzJiZ0LmNsYXNzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuY2xhc3NMaXN0LmFkZChlKX0pLHQuZGF0YSYmXCJvYmplY3RcIj09dHlwZW9mIHQuZGF0YSYmT2JqZWN0LmtleXModC5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuc2V0QXR0cmlidXRlKFwiZGF0YS1cIitlLHQuZGF0YVtlXSl9KSxpfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITAsdGhpcy5lbGVtZW50PWUuc2VsZWN0LHRoaXMubWFpbj1lLm1haW4sdGhpcy5lbGVtZW50LmRpc2FibGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc0VuYWJsZWQ9ITEpLHRoaXMuYWRkQXR0cmlidXRlcygpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bnVsbCx0aGlzLmFkZE11dGF0aW9uT2JzZXJ2ZXIoKSx0aGlzLmVsZW1lbnQuc2xpbT1lLm1haW59dC5TZWxlY3Q9c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgYT1pKDApLG89aSgxKSxzPShuLnByb3RvdHlwZS5jb250YWluZXJEaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLnN0eWxlLmNzc1RleHQ9dGhpcy5tYWluLmNvbmZpZy5zdHlsZSx0aGlzLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzKGUpLGV9LG4ucHJvdG90eXBlLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzPWZ1bmN0aW9uKGUpe3RoaXMubWFpbi5jb25maWcuY2xhc3M9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIiksZS5jbGFzc05hbWU9XCJcIixlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5pZCksZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubWFpbik7Zm9yKHZhciB0PTAsaT10aGlzLm1haW4uY29uZmlnLmNsYXNzO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO1wiXCIhPT1zLnRyaW0oKSYmZS5jbGFzc0xpc3QuYWRkKHMpfX0sbi5wcm90b3R5cGUuc2luZ2xlU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zaW5nbGVTZWxlY3RlZCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7aS5jbGFzc0xpc3QuYWRkKFwicGxhY2Vob2xkZXJcIiksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLmRlc2VsZWN0TGFiZWwscy5jbGFzc0xpc3QuYWRkKFwic3MtZGVzZWxlY3RcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJnQubWFpbi5zZXQoXCJcIil9LGUuYXBwZW5kQ2hpbGQocyk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYXJyb3cpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBhLmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLG4uYXBwZW5kQ2hpbGQoYSksZS5hcHBlbmRDaGlsZChuKSxlLm9uY2xpY2s9ZnVuY3Rpb24oKXt0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmKHQubWFpbi5kYXRhLmNvbnRlbnRPcGVuP3QubWFpbi5jbG9zZSgpOnQubWFpbi5vcGVuKCkpfSx7Y29udGFpbmVyOmUscGxhY2Vob2xkZXI6aSxkZXNlbGVjdDpzLGFycm93SWNvbjp7Y29udGFpbmVyOm4sYXJyb3c6YX19fSxuLnByb3RvdHlwZS5wbGFjZWhvbGRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCk7aWYobnVsbD09PWV8fGUmJmUucGxhY2Vob2xkZXIpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dCx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9dC5vdXRlckhUTUwpfWVsc2V7dmFyIGk9XCJcIjtlJiYoaT1lLmlubmVySFRNTCYmITAhPT10aGlzLm1haW4uY29uZmlnLnZhbHVlc1VzZVRleHQ/ZS5pbm5lckhUTUw6ZS50ZXh0KSx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9ZT9pOlwiXCIpfX0sbi5wcm90b3R5cGUuZGVzZWxlY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLnNpbmdsZVNlbGVjdGVkKXtpZighdGhpcy5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0KXJldHVybiB2b2lkIHRoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik7XCJcIj09PXRoaXMubWFpbi5zZWxlY3RlZCgpP3RoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik6dGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic3MtaGlkZVwiKX19LG4ucHJvdG90eXBlLm11bHRpU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5tdWx0aVNlbGVjdGVkKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlcyksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZCk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIG4uY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnBsdXMpLG4ub25jbGljaz1mdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5jb250ZW50T3BlbiYmKHQubWFpbi5jbG9zZSgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpfSxzLmFwcGVuZENoaWxkKG4pLGUuYXBwZW5kQ2hpbGQocyksZS5vbmNsaWNrPWZ1bmN0aW9uKGUpe3QubWFpbi5jb25maWcuaXNFbmFibGVkJiYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHQubWFpbi5jb25maWcudmFsdWVEZWxldGUpfHwodC5tYWluLmRhdGEuY29udGVudE9wZW4/dC5tYWluLmNsb3NlKCk6dC5tYWluLm9wZW4oKSkpfSx7Y29udGFpbmVyOmUsdmFsdWVzOmksYWRkOnMscGx1czpufX0sbi5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7aWYodGhpcy5tdWx0aVNlbGVjdGVkKXtmb3IodmFyIGUsdD10aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmNoaWxkTm9kZXMsaT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHM9W10sbj0wLGE9dDtuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtlPSEwO2Zvcih2YXIgbD0wLHI9aTtsPHIubGVuZ3RoO2wrKyl7dmFyIGM9cltsXTtTdHJpbmcoYy5pZCk9PT1TdHJpbmcoby5kYXRhc2V0LmlkKSYmKGU9ITEpfWUmJnMucHVzaChvKX1mb3IodmFyIGQ9MCxoPXM7ZDxoLmxlbmd0aDtkKyspe3ZhciB1PWhbZF07dS5jbGFzc0xpc3QuYWRkKFwic3Mtb3V0XCIpLHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMucmVtb3ZlQ2hpbGQodSl9Zm9yKHQ9dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5jaGlsZE5vZGVzLGM9MDtjPGkubGVuZ3RoO2MrKyl7ZT0hMTtmb3IodmFyIHA9MCxtPXQ7cDxtLmxlbmd0aDtwKyspbz1tW3BdLFN0cmluZyhpW2NdLmlkKT09PVN0cmluZyhvLmRhdGFzZXQuaWQpJiYoZT0hMCk7ZXx8KDAhPT10Lmxlbmd0aCYmSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudD8wPT09Yz90aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmluc2VydEJlZm9yZSh0aGlzLnZhbHVlRGl2KGlbY10pLHRbY10pOnRbYy0xXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLHRoaXMudmFsdWVEaXYoaVtjXSkpOnRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuYXBwZW5kQ2hpbGQodGhpcy52YWx1ZURpdihpW2NdKSkpfWlmKDA9PT1pLmxlbmd0aCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Zi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLGYuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0LHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuaW5uZXJIVE1MPWYub3V0ZXJIVE1MfX19LG4ucHJvdG90eXBlLnZhbHVlRGl2PWZ1bmN0aW9uKGEpe3ZhciBvPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlKSxlLmRhdGFzZXQuaWQ9YS5pZDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZVRleHQpLHQuaW5uZXJIVE1MPWEuaW5uZXJIVE1MJiYhMCE9PXRoaXMubWFpbi5jb25maWcudmFsdWVzVXNlVGV4dD9hLmlubmVySFRNTDphLnRleHQsZS5hcHBlbmRDaGlsZCh0KTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gaS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVEZWxldGUpLGkuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuZGVzZWxlY3RMYWJlbCxpLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ITE7aWYoby5tYWluLmNvbmZpZy5pc0VuYWJsZWQpe2lmKG8ubWFpbi5iZWZvcmVPbkNoYW5nZXx8KHQ9ITApLG8ubWFpbi5iZWZvcmVPbkNoYW5nZSl7Zm9yKHZhciBpPW8ubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkscz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkpKSxuPTA7bjxzLmxlbmd0aDtuKyspc1tuXS5pZD09PWEuaWQmJnMuc3BsaWNlKG4sMSk7ITEhPT1vLm1haW4uYmVmb3JlT25DaGFuZ2UocykmJih0PSEwKX10JiYoby5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKGEuaWQsXCJpZFwiKSxvLm1haW4ucmVuZGVyKCksby5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLG8ubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKX19LGUuYXBwZW5kQ2hpbGQoaSksZX0sbi5wcm90b3R5cGUuY29udGVudERpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmNvbnRlbnQpLGV9LG4ucHJvdG90eXBlLnNlYXJjaERpdj1mdW5jdGlvbigpe3ZhciBuPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zZWFyY2gpO3ZhciB0PXtjb250YWluZXI6ZSxpbnB1dDpzfTtyZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5zaG93U2VhcmNofHwoZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkscy5yZWFkT25seT0hMCkscy50eXBlPVwic2VhcmNoXCIscy5wbGFjZWhvbGRlcj10aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyLHMudGFiSW5kZXg9MCxzLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jYXBpdGFsaXplXCIsXCJvZmZcIikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsXCJvZmZcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcIlwiPT09ZS50YXJnZXQudmFsdWUmJm4ubWFpbi5zZWFyY2goXCJcIil9LDEwKX0scy5vbmtleWRvd249ZnVuY3Rpb24oZSl7XCJBcnJvd1VwXCI9PT1lLmtleT8obi5tYWluLm9wZW4oKSxuLmhpZ2hsaWdodFVwKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIkFycm93RG93blwiPT09ZS5rZXk/KG4ubWFpbi5vcGVuKCksbi5oaWdobGlnaHREb3duKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIlRhYlwiPT09ZS5rZXk/bi5tYWluLmRhdGEuY29udGVudE9wZW4/bi5tYWluLmNsb3NlKCk6c2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSxuLm1haW4uY29uZmlnLnRpbWVvdXREZWxheSk6XCJFbnRlclwiPT09ZS5rZXkmJmUucHJldmVudERlZmF1bHQoKX0scy5vbmtleXVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O2lmKFwiRW50ZXJcIj09PWUua2V5KXtpZihuLm1haW4uYWRkYWJsZSYmZS5jdHJsS2V5KXJldHVybiBhLmNsaWNrKCksZS5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgaT1uLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIituLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKTtpJiZpLmNsaWNrKCl9ZWxzZVwiQXJyb3dVcFwiPT09ZS5rZXl8fFwiQXJyb3dEb3duXCI9PT1lLmtleXx8KFwiRXNjYXBlXCI9PT1lLmtleT9uLm1haW4uY2xvc2UoKTpuLm1haW4uY29uZmlnLnNob3dTZWFyY2gmJm4ubWFpbi5kYXRhLmNvbnRlbnRPcGVuP24ubWFpbi5zZWFyY2godC52YWx1ZSk6cy52YWx1ZT1cIlwiKTtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKX0scy5vbmZvY3VzPWZ1bmN0aW9uKCl7bi5tYWluLm9wZW4oKX0sZS5hcHBlbmRDaGlsZChzKSx0aGlzLm1haW4uYWRkYWJsZSYmKGEuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZGFibGUpLGEuaW5uZXJIVE1MPVwiK1wiLGEub25jbGljaz1mdW5jdGlvbihlKXtpZihuLm1haW4uYWRkYWJsZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9bi5zZWFyY2guaW5wdXQudmFsdWU7aWYoXCJcIj09PXQudHJpbSgpKXJldHVybiB2b2lkIG4uc2VhcmNoLmlucHV0LmZvY3VzKCk7dmFyIGk9bi5tYWluLmFkZGFibGUodCkscz1cIlwiO2lmKCFpKXJldHVybjtcIm9iamVjdFwiPT10eXBlb2YgaT9vLnZhbGlkYXRlT3B0aW9uKGkpJiYobi5tYWluLmFkZERhdGEoaSkscz1pLnZhbHVlP2kudmFsdWU6aS50ZXh0KToobi5tYWluLmFkZERhdGEobi5tYWluLmRhdGEubmV3T3B0aW9uKHt0ZXh0OmksdmFsdWU6aX0pKSxzPWkpLG4ubWFpbi5zZWFyY2goXCJcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5zZXQocyxcInZhbHVlXCIsITEsITEpfSwxMDApLG4ubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCYmc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSwxMDApfX0sZS5hcHBlbmRDaGlsZChhKSx0LmFkZGFibGU9YSksdH0sbi5wcm90b3R5cGUuaGlnaGxpZ2h0VXA9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLnByZXZpb3VzU2libGluZztudWxsIT09dCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCk7KXQ9dC5wcmV2aW91c1NpYmxpbmc7ZWxzZXt2YXIgaT10aGlzLmxpc3QucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO3Q9aVtpLmxlbmd0aC0xXX1pZih0JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWwpJiYodD1udWxsKSxudWxsPT09dCl7dmFyIHM9ZS5wYXJlbnROb2RlO2lmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZzLnByZXZpb3VzU2libGluZyl7dmFyIG49cy5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO24ubGVuZ3RoJiYodD1uW24ubGVuZ3RoLTFdKX19dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmhpZ2hsaWdodERvd249ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLm5leHRTaWJsaW5nO251bGwhPT10JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKTspdD10Lm5leHRTaWJsaW5nO2Vsc2UgdD10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO2lmKG51bGw9PT10JiZudWxsIT09ZSl7dmFyIGk9ZS5wYXJlbnROb2RlO2kuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZpLm5leHRTaWJsaW5nJiYodD1pLm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKSl9dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmxpc3REaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5saXN0KSxlfSxuLnByb3RvdHlwZS5vcHRpb25zPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPVwiXCIpO3ZhciB0LGk9dGhpcy5tYWluLmRhdGEuZmlsdGVyZWR8fHRoaXMubWFpbi5kYXRhLmRhdGE7aWYoKHRoaXMubGlzdC5pbm5lckhUTUw9XCJcIikhPT1lKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD1lLHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHQpO2lmKHRoaXMubWFpbi5jb25maWcuaXNBamF4JiZ0aGlzLm1haW4uY29uZmlnLmlzU2VhcmNoaW5nKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaGluZ1RleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQodCk7aWYoMD09PWkubGVuZ3RoKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHMuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaFRleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQocyl9Zm9yKHZhciBuPWZ1bmN0aW9uKGUpe2lmKGUuaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7dmFyIHQ9ZSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXApO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbCksYy5tYWluLmNvbmZpZy5zZWxlY3RCeUdyb3VwJiZjLm1haW4uY29uZmlnLmlzTXVsdGlwbGUmJmkuY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWxTZWxlY3RhYmxlKSxpLmlubmVySFRNTD10LmxhYmVsLG4uYXBwZW5kQ2hpbGQoaSk7dmFyIHM9dC5vcHRpb25zO2lmKHMpe2Zvcih2YXIgYT0wLG89czthPG8ubGVuZ3RoO2ErKyl7dmFyIGw9b1thXTtuLmFwcGVuZENoaWxkKGMub3B0aW9uKGwpKX1pZihjLm1haW4uY29uZmlnLnNlbGVjdEJ5R3JvdXAmJmMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7dmFyIHI9YztpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO2Zvcih2YXIgdD0wLGk9bi5jaGlsZHJlbjt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTstMSE9PXMuY2xhc3NOYW1lLmluZGV4T2Yoci5tYWluLmNvbmZpZy5vcHRpb24pJiZzLmNsaWNrKCl9fSl9fWMubGlzdC5hcHBlbmRDaGlsZChuKX1lbHNlIGMubGlzdC5hcHBlbmRDaGlsZChjLm9wdGlvbihlKSl9LGM9dGhpcyxhPTAsbz1pO2E8by5sZW5ndGg7YSsrKW4ob1thXSl9LG4ucHJvdG90eXBlLm9wdGlvbj1mdW5jdGlvbihyKXtpZihyLnBsYWNlaG9sZGVyKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpLGV9dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHIuY2xhc3MmJnIuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5jbGFzc0xpc3QuYWRkKGUpfSksci5zdHlsZSYmKHQuc3R5bGUuY3NzVGV4dD1yLnN0eWxlKTt2YXIgYz10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpO3QuZGF0YXNldC5pZD1yLmlkLHRoaXMubWFpbi5jb25maWcuc2VhcmNoSGlnaGxpZ2h0JiZ0aGlzLm1haW4uc2xpbSYmci5pbm5lckhUTUwmJlwiXCIhPT10aGlzLm1haW4uc2xpbS5zZWFyY2guaW5wdXQudmFsdWUudHJpbSgpP3QuaW5uZXJIVE1MPWEuaGlnaGxpZ2h0KHIuaW5uZXJIVE1MLHRoaXMubWFpbi5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZSx0aGlzLm1haW4uY29uZmlnLnNlYXJjaEhpZ2hsaWdodGVyKTpyLmlubmVySFRNTCYmKHQuaW5uZXJIVE1MPXIuaW5uZXJIVE1MKSx0aGlzLm1haW4uY29uZmlnLnNob3dPcHRpb25Ub29sdGlwcyYmdC50ZXh0Q29udGVudCYmdC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHQudGV4dENvbnRlbnQpO3ZhciBkPXRoaXM7dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD10aGlzLmRhdGFzZXQuaWQ7aWYoITA9PT1yLnNlbGVjdGVkJiZkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb24pe3ZhciBpPSExO2lmKGQubWFpbi5iZWZvcmVPbkNoYW5nZSYmZC5tYWluLmNvbmZpZy5pc011bHRpcGxlfHwoaT0hMCksZC5tYWluLmJlZm9yZU9uQ2hhbmdlJiZkLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgcz1kLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLG49SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzKSksYT0wO2E8bi5sZW5ndGg7YSsrKW5bYV0uaWQ9PT10JiZuLnNwbGljZShhLDEpOyExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG4pJiYoaT0hMCl9aSYmKGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8oZC5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKHQsXCJpZFwiKSxkLm1haW4ucmVuZGVyKCksZC5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLGQubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKTpkLm1haW4uc2V0KFwiXCIpKX1lbHNle2lmKHIuZGlzYWJsZWR8fHIuc2VsZWN0ZWQpcmV0dXJuO2lmKGQubWFpbi5jb25maWcubGltaXQmJkFycmF5LmlzQXJyYXkoYykmJmQubWFpbi5jb25maWcubGltaXQ8PWMubGVuZ3RoKXJldHVybjtpZihkLm1haW4uYmVmb3JlT25DaGFuZ2Upe3ZhciBvPXZvaWQgMCxsPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZC5tYWluLmRhdGEuZ2V0T2JqZWN0RnJvbURhdGEodCkpKTtsLnNlbGVjdGVkPSEwLGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8obz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGMpKSkucHVzaChsKTpvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobCkpLCExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG8pJiZkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9ZWxzZSBkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9fSk7dmFyIGk9YyYmYS5pc1ZhbHVlSW5BcnJheU9mT2JqZWN0cyhjLFwiaWRcIixyLmlkKTtyZXR1cm4oci5kaXNhYmxlZHx8aSkmJih0Lm9uY2xpY2s9bnVsbCxkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb258fHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxkLm1haW4uY29uZmlnLmhpZGVTZWxlY3RlZE9wdGlvbiYmdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkpLGk/dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uU2VsZWN0ZWQpOnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLm9wdGlvblNlbGVjdGVkKSx0fSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMubWFpbj1lLm1haW4sdGhpcy5jb250YWluZXI9dGhpcy5jb250YWluZXJEaXYoKSx0aGlzLmNvbnRlbnQ9dGhpcy5jb250ZW50RGl2KCksdGhpcy5zZWFyY2g9dGhpcy5zZWFyY2hEaXYoKSx0aGlzLmxpc3Q9dGhpcy5saXN0RGl2KCksdGhpcy5vcHRpb25zKCksdGhpcy5zaW5nbGVTZWxlY3RlZD1udWxsLHRoaXMubXVsdGlTZWxlY3RlZD1udWxsLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT8odGhpcy5tdWx0aVNlbGVjdGVkPXRoaXMubXVsdGlTZWxlY3RlZERpdigpLHRoaXMubXVsdGlTZWxlY3RlZCYmdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lcikpOih0aGlzLnNpbmdsZVNlbGVjdGVkPXRoaXMuc2luZ2xlU2VsZWN0ZWREaXYoKSx0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lcikpLHRoaXMubWFpbi5jb25maWcuYWRkVG9Cb2R5Pyh0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmlkKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCkpOnRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuc2VhcmNoLmNvbnRhaW5lciksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMubGlzdCl9dC5TbGltPXN9XSxuLmM9cyxuLmQ9ZnVuY3Rpb24oZSx0LGkpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDppfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIoaSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBzIGluIHQpbi5kKGkscyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHMpKTtyZXR1cm4gaX0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTIpKS5kZWZhdWx0O2Z1bmN0aW9uIG4oZSl7aWYoc1tlXSlyZXR1cm4gc1tlXS5leHBvcnRzO3ZhciB0PXNbZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiBpW2VdLmNhbGwodC5leHBvcnRzLHQsdC5leHBvcnRzLG4pLHQubD0hMCx0LmV4cG9ydHN9dmFyIGksc30pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XHJcblxyXG4vKipcclxuICogQSBnZW5lcmljIGNvbXBvbmVudCBvZiBTdGFkaWErXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENvbXBvbmVudCB0eXBlLlxyXG4gKiBAY2xhc3MgQ29tcG9uZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIENvbXBvbmVudCdzIG5hbWUuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9ICdNeSBDb21wb25lbnQnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIENvbXBvbmVudCdzIHVuaXF1ZSBJRCwgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgb24gbG9hZC5cclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgYm9vbGVhbiBrZWVwaW5nIHRyYWNrIG9mIHdoZXRoZXIgdGhlIENvbXBvbmVudCBzaG91bGQgcmVjZWl2ZSBldmVudHMgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgc2hvdWxkIHN0YXJ0IGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIGxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pZCA9XHJcbiAgICAgICAgICAgIHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJykgKyAnLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpO1xyXG5cclxuICAgICAgICB0aGlzLm9uU3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgQ29tcG9uZW50IGhhcyBhbiBlbGVtZW50IGluIHRoZSBET01cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQpICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgdW5sb2FkaW5nLlxyXG4gICAgICovXHJcbiAgICB1bmxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBDb21wb25lbnQgc2hvdWxkIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBDb21wb25lbnQgc2hvdWxkIHN0b3AuXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgb25jZSBldmVyeSBzZWNvbmQuXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogQSB1dGlsaXR5IGNsYXNzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nIFtbQ29tcG9uZW50fENvbXBvbmVudHNdXSBhbmQgZGVsaXZlcmluZyBldmVudHMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENvbXBvbmVudExvYWRlciB0eXBlLlxyXG4gKiBAY2xhc3MgQ29tcG9uZW50TG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBsaXN0IG9mIGFsbCByZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudHM6IENvbXBvbmVudFtdO1xyXG4gICAgdGltZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIHJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICByZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXJzIGEgY29tcG9uZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbHRlcihlID0+IHsgcmV0dXJuIGUuaWQgIT09IGNvbXBvbmVudC5pZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgY29tcG9uZW50IGxvYWRlci5cclxuICAgICAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnQuZW5hYmxlZCkgY29tcG9uZW50LmxvYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxyXG4gICAgICovXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZW5hYmxlZCkgY29tcG9uZW50LnVubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY29tcG9uZW50LmVuYWJsZWQpIGNvbXBvbmVudC5vblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BUaW1lcigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbm5lY3RlZDogYm9vbGVhbjtcclxuICAgIGNvbm5lY3Rpb246IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KGNhbGxiYWNrPzogKGNvbm5lY3Rpb246YW55KSA9PiB7fSkge1xyXG4gICAgICAgIGlmKHRoaXMuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3I6IEFscmVhZHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdGhpcy51cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0aW9uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5jb25uZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvciB3aGVuIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2U6JywgeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3Igd2hlbiBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOicsIHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKG51bGwpOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25uZWN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgaWYoIXRoaXMuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3I6IE5vdCBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY29ubmVjdChjYWxsYmFjaz86IChjb25uZWN0aW9uOm9iamVjdCkgPT4ge30pIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoY2FsbGJhY2spO1xyXG4gICAgfVxyXG59IiwiY29uc3QgcHJlZml4OnN0cmluZyA9ICdbU3RhZGlhK10nO1xyXG5cclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIGluZm8gPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/Cfk4MgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogYmxhY2snKTtcclxuICAgIH07XHJcblxyXG4gICAgd2FybmluZyA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+YnyAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBvcmFuZ2UnKTtcclxuICAgIH07XHJcblxyXG4gICAgZXJyb3IgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY+KdjCAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiA3MDAnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50ID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn6epICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IGRhcmtncmVlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHViaW91c2x5IGNyZWF0ZWQgYnkgQWRyaWFuIENvb25leVxyXG4gICAgICogQGF1dGhvciBodHRwOi8vYWRyaWFuY29vbmV5LmdpdGh1Yi5pb1xyXG4gICAgICovXHJcbiAgICBpbWFnZSA9IGZ1bmN0aW9uKHVybDogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGdldEJveCA9IGZ1bmN0aW9uKHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nOiBcIitcIixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMXB4OyBwYWRkaW5nOiBcIiArIE1hdGguZmxvb3IoaGVpZ2h0LzIpICsgXCJweCBcIiArIE1hdGguZmxvb3Iod2lkdGgvMikgKyBcInB4OyBsaW5lLWhlaWdodDogMDtcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGltID0gZ2V0Qm94KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGRpbS5zdHJpbmcsIGRpbS5zdHlsZSArIFwiYmFja2dyb3VuZDogdXJsKFwiICsgdXJsICsgXCIpOyBiYWNrZ3JvdW5kLXNpemU6IFwiICsgKHdpZHRoKSArIFwicHggXCIgKyAoaGVpZ2h0KSArIFwicHg7IGNvbG9yOiB0cmFuc3BhcmVudDtcIik7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7IiwiY2xhc3MgVXRpbCB7XHJcbiAgICAvKipcclxuICAgICAqIFN0YWRpYSdzIG1lbnUgYmFyIGVsZW1lbnQsIHVzZWQgdG8ga25vdyB3aGVuIHRoZSBwbGF5ZXIgaGFzIG9wZW5lZCB0aGUgbWVudS5cclxuICAgICAqL1xyXG4gICAgbWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5YMWFzdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWVudU9wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudUVsZW1lbnQuc3R5bGUub3BhY2l0eSAhPT0gJzAnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5HYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZigncGxheWVyJykgIT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5Ib21lKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignaG9tZScpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpc0luU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdzdG9yZScpICE9PSAtMTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXRpbCgpOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvQ2xvY2suc2Nzcyc7XHJcblxyXG4vKipcclxuICogQSBzaW1wbGUgY2xvY2sgZGlzcGxheWVkIGluIHRoZSBTdGFkaWEgTWVudS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQ2xvY2sgdHlwZS5cclxuICogQGNsYXNzIENsb2NrXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xvY2sgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJDbG9ja1wiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNsb2NrIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHNpbXBsZSA8c3Bhbj4sIGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMsIGFuZCBzdG9yZXMgaXQgaW4gW0BsaW5rICNlbGVtZW50XVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19jbG9jaycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBlbmFibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY2xvY2sgd2hlbiBpdCdzIHZpc2libGVcclxuICAgICAgICBpZihVdGlsLmlzTWVudU9wZW4oKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5ZicpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRpbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0ZvcmNlQ29kZWMuc2Nzcyc7XHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9VSVRhYic7XHJcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuXHJcbmNvbnN0IGNocm9tZSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSBkcm9wZG93biBhbGxvd2luZyBjaGFuZ2luZyBvZiB0aGUgY29kZWMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIEZvcmNlQ29kZWMgdHlwZS5cclxuICogQGNsYXNzIEZvcmNlQ29kZWNcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JjZUNvZGVjIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ0ZvcmNlIENvZGVjJztcclxuICAgIGNvZGVjOiBudW1iZXIgPSBDb2RlYy5BVVRPTUFUSUM7XHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuICAgIHRhYjogVUlUYWI7XHJcbiAgICBzbmFja2JhcjogU25hY2tiYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiOiBVSVRhYiwgc25hY2tiYXI6IFNuYWNrYmFyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWIgPSB0YWI7XHJcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2NvZGVjJ10sIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVjID0gcmVzdWx0LmNvZGVjO1xyXG5cclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjb2RlYzogc2VsZi5jb2RlYyB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnRhYi5hZGRSb3coXHJcbiAgICAgICAgICAgIG5ldyBVSVJvdyhcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNvZGVjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuQVVUT01BVElDfVwiPkF1dG9tYXRpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLlZQOX1cIj5WUDk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5IMjY0fVwiPkgyNjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdGFkaWFwbHVzX2J1dHRvbi1zbWFsbFwiPkFwcGx5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgKyAnLXJvdycsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QgPSBuZXcgU2VsZWN0KHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLCBDb2RlYy5BVVRPTUFUSUMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QuZ2V0KClbMF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc25hY2tiYXIuYWN0aXZhdGUoJ1JlbG9hZCB0aGUgcGFnZSB0byBzZWUgeW91ciBjaGFuZ2VzLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQoc2VsZi5jb2RlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3JjZUNvZGVjLnNldENvZGVjKHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvblJlbG9hZDogKHJvdzpVSVJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgQ29kZWMuQVVUT01BVElDKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBlbmFibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldENvZGVjKGNvZGVjOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XHJcbiAgICAgICAgY2FzZSBDb2RlYy5WUDk6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiLCAne1widnA5XCI6XCJFeHRlcm5hbERlY29kZXJcIn0nKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ29kZWMuSDI2NDpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIsICd7XCJoMjY0XCI6XCJFeHRlcm5hbERlY29kZXJcIiwgXCJ2cDlcIjpcImxpYnZweFwifScpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBDb2RlYy5BVVRPTUFUSUM6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2RlYyB7XHJcbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcclxuICAgIHN0YXRpYyBWUDkgPSAxO1xyXG4gICAgc3RhdGljIEgyNjQgPSAyO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MnO1xyXG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vVUlUYWInO1xyXG5pbXBvcnQgeyBVSVJvdywgVUlSb3dPcHRpb25zIH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuXHJcbmNvbnN0IGNocm9tZSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSBkcm9wZG93biBhbGxvd2luZyBjaGFuZ2luZyBvZiB0aGUgY29kZWMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIEZvcmNlQ29kZWMgdHlwZS5cclxuICogQGNsYXNzIEZvcmNlQ29kZWNcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JjZVJlc29sdXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnRm9yY2UgUmVzb2x1dGlvbic7XHJcbiAgICByZXNvbHV0aW9uOiBudW1iZXIgPSBSZXNvbHV0aW9uLkFVVE9NQVRJQztcclxuICAgIHNlbGVjdDogU2VsZWN0O1xyXG4gICAgdGFiOiBVSVRhYjtcclxuICAgIHNuYWNrYmFyOiBTbmFja2JhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YWI6IFVJVGFiLCBzbmFja2JhcjogU25hY2tiYXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYiA9IHRhYjtcclxuICAgICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RvcmFnZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncmVzb2x1dGlvbiddLCAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzdWx0LnJlc29sdXRpb247XHJcblxyXG4gICAgICAgICAgICBpZihjYWxsYmFjaykgXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0b3JhZ2UoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHJlc29sdXRpb246IHNlbGYucmVzb2x1dGlvbiB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnRhYi5hZGRSb3coXHJcbiAgICAgICAgICAgIG5ldyBVSVJvdyhcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlc29sdXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLkFVVE9NQVRJQ31cIj5BdXRvbWF0aWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLlVIRF80S31cIj40Szwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsXCI+QXBwbHk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiPk5vdGU6IHRoZSBzZXQgdmFsdWUgaXMgdGhlIG1heGltdW0gcmVzb2x1dGlvbiBTdGFkaWEgd2lsbCBhdHRlbXB0IHRvIGFjaGlldmUuIElmIHlvdXIgY29tcHV0ZXIgaXMgbm90IGNhcGFibGUgb2YgcmVuZGVyaW5nIHRoZSByZXNvbHV0aW9uIG9yIGl0IGlzIG5vdCBhdmFpbGFibGUgd2l0aCB0aGUgY3VycmVudCBkYXRhIHVzYWdlIG9wdGlvbiwgaXQgd2lsbCBub3QgYmUgZGlzcGxheWVkLjwvcD5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgUmVzb2x1dGlvbi5BVVRPTUFUSUMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gcm93LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x1dGlvbiA9IHBhcnNlSW50KHNlbGYuc2VsZWN0LmdldCgpWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc25hY2tiYXIuYWN0aXZhdGUoJ1JlbG9hZCB0aGUgcGFnZSB0byBzZWUgeW91ciBjaGFuZ2VzLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnNldChzZWxmLnJlc29sdXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yY2VSZXNvbHV0aW9uLnNldFJlc29sdXRpb24oc2VsZi5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIFJlc29sdXRpb24uQVVUT01BVElDKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYucmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGVuYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0UmVzb2x1dGlvbihjb2RlYzogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoO1xyXG4gICAgICAgIHN3aXRjaCAoY29kZWMpIHtcclxuICAgICAgICBjYXNlIFJlc29sdXRpb24uVUhEXzRLOlxyXG4gICAgICAgICAgICB3aWR0aCA9IDM4NDA7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IDIxNjA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIFJlc29sdXRpb24uQVVUT01BVElDOlxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnYXZhaWxXaWR0aCcsIHsgdmFsdWU6ICR7d2lkdGh9IH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ2F2YWlsSGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ3dpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnaGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNvbHV0aW9uIHtcclxuICAgIHN0YXRpYyBBVVRPTUFUSUMgPSAwO1xyXG4gICAgc3RhdGljIFVIRF80SyA9IDE7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9MaWJyYXJ5RmlsdGVyLnNjc3MnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuLi9EYXRhYmFzZSc7XHJcblxyXG5jb25zdCB7IGNocm9tZSwgQXJyYXkgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpYnJhcnlGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgY29tcG9uZW50XHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9ICdMaWJyYXJ5IEZpbHRlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IG9mIGdhbWVzIGFuZCBnYW1lIGRhdGEgaW1wb3J0ZWQgZnJvbSB0aGUgRE9NXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUgeyp9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBnYW1lczogYW55ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbmFja2JhciB1c2VkIHRvIGRpc3BsYXkgbWVzc2FnZXMgd2hlbiBoaWRpbmcgYW5kIHNob3dpbmcgZ2FtZXNcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7U25hY2tiYXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzbmFja2JhcjogU25hY2tiYXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXIgYmFyIGFsbG93aW5nIGZvciBjb250cm9scyBvZiB0aGUgbGlicmFyeSBmaWx0ZXJcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBmaWx0ZXJCYXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGJveCB1c2VkIHRvIG9yZGVyIHRoZSBnYW1lc1xyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtTZWxlY3R9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbnQgZmlsdGVyaW5nIG9yZGVyXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0ZpbHRlck9yZGVyfVxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb3JkZXI6IEZpbHRlck9yZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIGFsbCBnYW1lcyBiZSBzaG93biByZWdhcmRsZXNzIGlmIHRoZXlyZSBoaWRkZW4gb3Igbm90P1xyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgc2hvd0FsbDogYm9vbGVhbjtcclxuXHJcbiAgICBkaXJlY3Rpb246IE9yZGVyRGlyZWN0aW9uO1xyXG5cclxuICAgIGdhbWVUaWxlczogTm9kZUxpc3Q7XHJcbiAgICBkYXRhYmFzZTogRGF0YWJhc2U7XHJcbiAgICB1dWlkTWFwOiBEYXRhYmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzbmFja2JhcjogU25hY2tiYXIsIGRhdGFiYXNlOiBEYXRhYmFzZSwgdXVpZE1hcDogRGF0YWJhc2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBJbXBvcnQgZGF0YWJhc2UgJiB1dWlkTWFwIGZyb20gaW5kZXguanNcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbXBvcnQgc25hY2tiYXIgZnJvbSBpbmRleC5qc1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBmaWx0ZXIgYmFyIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmZpbHRlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQmFyLmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGFyb3VuZCBldmVyeSBnYW1lIGFuZCBpbml0aWFsaXplcyB0aGUgZWxlbWVudHMgbmVjZXNzYXJ5IHRvIHNob3cgb3IgaGlkZSBpdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVBbGxXcmFwcGVycygpIHtcclxuICAgICAgICB0aGlzLmdldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aWxlIGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoZWxlbWVudCwgdGhpcy5nZXRVVUlEKGVsZW1lbnQpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gdGhpcy5nYW1lVGlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGdhbWUgVVVJRCBmcm9tIGl0J3MganNsb2cgYXR0cmlidXRlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGlsZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGdldFVVSUQodGlsZTogRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB0aWxlXHJcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2pzbG9nJylcclxuICAgICAgICAgICAgLnNwbGl0KCc7ICcpWzFdXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIHRpbGUgZWxlbWVudCwgY3JlYXRlIGEgd3JhcHBlciBhcm91bmQgaXQgYW5kIGFuIGljb24gYWxsb3dpbmcgaXQgdG8gYmUgc2hvd24gb3IgaGlkZGVuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZ2FtZSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCB0aGUgZ2FtZSB1dWlkXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVXcmFwcGVyKGVsZW1lbnQ6IEVsZW1lbnQsIHV1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtYXApO1xyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gY29ubmVjdGlvblttYXBbdXVpZF1dO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHdyYXBwZXJcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2dhbWUtdXVpZCcsIHV1aWQpO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdnYW1lLW5hbWUnLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcicpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQgPSB0aGlzLmlkICsgJy0nICsgdXVpZDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpY29uXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nKTtcclxuICAgICAgICBpY29uLmlubmVySFRNTCA9ICd2aXNpYmlsaXR5JztcclxuXHJcbiAgICAgICAgLy8gV3JhcCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGVsZW1lbnQgYW5kIGFkZCB0aGUgaWNvbiBiZWZvcmUgaXRcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHN0b3JhZ2UgZm9yIHZpc2liaWxpdHksIGhpZGUgdGhlIGdhbWUgaWYgYm90aCAndmlzaWJsZScgYW5kICdzaG93QWxsJyBpcyBmYWxzZVxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lcy5oYXNPd25Qcm9wZXJ0eSh1dWlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzW3V1aWRdID0geyB2aXNpYmxlOiB0cnVlIH07XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlICYmICF0aGlzLnNob3dBbGwpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBpY29uIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIHJhdGhlciB0aGFuIHRoZSB0b3AgbGVmdCB1c2luZyBcclxuICAgICAgICAvLyBhIG1hcmdpbiAodXNpbmcgdGhlICdsZWZ0JyBjc3MgYXR0cmlidXRlIGlzIG5vdCBwb3NzaWJsZSlcclxuICAgICAgICBpY29uLnN0eWxlLm1hcmdpbkxlZnQgPSBlbGVtZW50LmNsaWVudFdpZHRoIC0gaWNvbi5jbGllbnRXaWR0aCArICdweCc7XHJcblxyXG4gICAgICAgIC8vIFdoZW4gdGhlIGljb24gaXMgY2xpY2tlZCBvblxyXG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmdhbWVzW3V1aWRdLnZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlLCBzZXQgaXQgdG8gaGlkZGVuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKCdBIGdhbWUgaGFzIGJlZW4gaGlkZGVuLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2UgeyAvLyBPdGhlcndpc2Ugc2V0IGl0IHRvIHNob3duXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKCdBIGdhbWUgaXMgbm8gbG9uZ2VyIGhpZGRlbi4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZ2FtZSdzIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHYW1lKHdyYXBwZXIsIGVsZW1lbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgYSBnYW1lJ3MgdmlzaWJpbGl0eSwgbWFraW5nIHN1cmUgaXQncyBvbmx5IHNob3duIHdoZW4gaXQncyBzdXBwb3NlZCB0b1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gd3JhcHBlciBUaGUgZ2FtZSdzIHdyYXBwZXIsIGNyZWF0ZWQgYnkgW1tjcmVhdGVXcmFwcGVyXV1cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGlsZSBUaGUgZ2FtZSB0aWxlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFuaW1hdGUgU2hvdWxkIHRoZSBnYW1lIGhhdmUgYW4gYW5pbWF0ZWQgY2xvc2luZyBlZmZlY3Q/XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICB1cGRhdGVHYW1lKHdyYXBwZXI6IEVsZW1lbnQsIHRpbGU6IEVsZW1lbnQsIGFuaW1hdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGdhbWUgVVVJRFxyXG4gICAgICAgIGNvbnN0IHV1aWQgPSB0aGlzLmdldFVVSUQodGlsZSk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgZ2FtZSBpY29uXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJy5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicsXHJcbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGdhbWUgaXNuJ3QgdmlzaWJsZS4uLlxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIC8vIC4uLmJ1dCBhbGwgZ2FtZXMgc2hvdWxkIHN0aWxsIGJlIHNob3duXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dBbGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgaWNvbiB0byBkaXNwbGF5IHRoYXQgaXQncyBub3QgdmlzaWJsZSBidXQgc2hvd24gYW55d2F5c1xyXG4gICAgICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAndmlzaWJpbGl0eV9vZmYnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpc24ndCBoaWRkZW5cclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycsICdjbG9zZWQnKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7IC8vIE90aGVyd2lzZS4uLlxyXG4gICAgICAgICAgICAgICAgLy8gLi4uaWYgdGhlIGhpZGluZyBzaG91bGQgYmUgYW5pbWF0ZWRcclxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFkZSB0aGUgZ2FtZSB0aWxlIG91dFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBZnRlciAxIHNlY29uZCwgaGlkZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBPdGhlcndpc2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IG5vcm1hbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIElmIHRoZSBnYW1lIGlzIHZpc2libGVcclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpY29uIHN0YXlzIGluIHBsYWNlIGFuZCBkb2Vzbid0IGdldCByZXNldCBiYWNrIHRvIHRoZSB0b3AgbGVmdCBjb3JuZXJcclxuICAgICAgICAgICAgaWNvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gdGlsZS5jbGllbnRXaWR0aCAtIGljb24uY2xpZW50V2lkdGggKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpY29uIHNob3dzIHRoYXQgaXQgaXMgdmlzaWJsZVxyXG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9ICd2aXNpYmlsaXR5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgYWxsIGdhbWVzLCBzaG9ydGhhbmQgZm9yIGxvb3BpbmcgdGhyb3VnaCB0aWxlcyBhbmQgdXBkYXRpbmcgdGhlbSBpbmRpdmlkdWFsbHlcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGxHYW1lcygpIHtcclxuICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2FtZSh0aWxlLnBhcmVudEVsZW1lbnQsIHRpbGUgYXMgRWxlbWVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCB0aGUgc3RvcmVkIGRhdGEgZnJvbSB0aGUgc3luY2hyb25pemVkIGNocm9tZSBzdG9yYWdlIChzdG9yZWQgaW4geW91ciB1c2VyIGRhdGEpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAvLyBDYWxsYmFjayB0aGF0IGlzIHJ1biBhZnRlciB0aGUgZGF0YSBoYXMgYmVlbiByZWFkXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZighdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydnYW1lcycsICdzb3J0LW9yZGVyJywgJ3NvcnQtZGlyZWN0aW9uJ10sIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzID0gcmVzdWx0LmdhbWVzICE9PSB1bmRlZmluZWQgPyByZXN1bHQuZ2FtZXMgOiB7fTtcclxuICAgICAgICAgICAgdGhpcy5vcmRlciA9IHJlc3VsdFsnc29ydC1vcmRlciddICE9PSB1bmRlZmluZWQgPyByZXN1bHRbJ3NvcnQtb3JkZXInXSA6IEZpbHRlck9yZGVyLlJFQ0VOVDtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSByZXN1bHRbJ3NvcnQtZGlyZWN0aW9uJ10gIT09IHVuZGVmaW5lZCA/IHJlc3VsdFsnc29ydC1kaXJlY3Rpb24nXSA6IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORztcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIHRvIHRoZSBzeW5jaHJvbml6ZWQgY2hyb21lIHN0b3JhZ2UgKHN0b3JlZCBpbiB5b3VyIHVzZXIgZGF0YSlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC8vIENhbGxiYWNrIHRoYXQgaXMgcnVuIGFmdGVyIHRoZSBkYXRhIGhhcyBiZWVuIHdyaXR0ZW5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZighdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBnYW1lczogdGhpcy5nYW1lcywgJ3NvcnQtb3JkZXInOiB0aGlzLm9yZGVyLCAnc29ydC1kaXJlY3Rpb24nOiB0aGlzLmRpcmVjdGlvbiB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW5zIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgbG9hZGVkXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQmFyLmlkID0gdGhpcy5pZCArICctZmlsdGVyYmFyJztcclxuICAgICAgICB0aGlzLmZpbHRlckJhci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtZXh0ZW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIGZpbHRlcl9saXN0XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJFQ0VOVH1cIj5SZWNlbnRseSBQbGF5ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLkFMUEhBQkVUSUNBTH1cIj5BbHBoYWJldGljYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJBTkRPTX1cIj5SYW5kb208L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPScke3RoaXMuZmlsdGVyQmFyLmlkICsgJy1kaXJlY3Rpb24nfScgY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1leHRlbmRlZCBhc2NlbmRpbmcgc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPScke3RoaXMuZmlsdGVyQmFyLmlkICsgJy1jaGVja2JveCd9JyBjbGFzcz1cInByZXR0eSBwLWJpZ2dlciBwLWRlZmF1bHQgcC1jdXJ2ZSBzdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2hvdyBoaWRkZW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3R5bGUgdGhlIGN1c3RvbSBzZWxlY3QgYm94IGluIHRoZSBmaWx0ZXIgYmFyXHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KFxyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJhci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgRmlsdGVyT3JkZXIuUkVDRU5ULFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYnNlcnZlciBvYnNlcnZpbmcgdGhlIGZpbHRlcmJhciBjb250YWluZXIsIG1ha2luZyBzdXJlIHRvIHJlbG9hZCB0aGUgYmFyIHdoZW5ldmVyIGl0IGdldHMgZGVzdHJveWVkLlxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRDaGFuZ2VzID0gZXZlbnQuZmlsdGVyKChlKSA9PiBlLnR5cGUgPT09ICdjaGlsZExpc3QnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElkZW50aWZ5IHRoZSBjb3JyZWN0IGNoYW5nZXMgaW4gdGhlIERPTVxyXG4gICAgICAgICAgICBpZiAoY2hpbGRDaGFuZ2VzLmxlbmd0aCA9PT0gNCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBmaWx0ZXIgYmFyIGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpbHRlckJhckV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNWVlhmYy5ZWXkzWmInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuR3FMaTRkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQmFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBbGxXcmFwcGVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnNldCh0aGlzLm9yZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuZXZlbnRzRXhpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRGaWx0ZXJCYXJFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucHJlcGVuZChjb250YWluZXIpOyAvLyBBbHdheXMgYXBwZW5kIGNvbnRhaW5lciBhdCB0aGUgdG9wIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWFkZzRiJyksIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGVuYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV2ZW50c0V4aXN0OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgdmFyaWV0eSBvZiBldmVudHMgdG8gdGhlIGZpbHRlciBiYXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBhZGRGaWx0ZXJCYXJFdmVudHMoKSB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgb3JkZXIgaXMgY2hhbmdlZCwgc2V0IGl0IGluIHRoZSBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5zZWxlY3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXIgPSBwYXJzZUludCh0aGlzLnNlbGVjdC5nZXQoKVswXSkgYXMgRmlsdGVyT3JkZXI7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZmlsdGVyQmFyLmlkICsgJy1jaGVja2JveCcpLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgc2hvdyBhbGwgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlIHRoZSBzaG93QWxsIHZhcmlhYmxlIGFuZCB1cGRhdGUgdGhlIGdhbWVzXHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbCA9IChjaGVja2JveCBhcyBhbnkpLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd0FsbCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKChjaGVja2JveCBhcyBhbnkpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGxHYW1lcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJyk7XHJcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzb3J0IGRpcmVjdGlvblxyXG4gICAgICAgIGRpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50c0V4aXN0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3J0RGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJyk7XHJcbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORykge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkRFU0NFTkRJTkc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVzY2VuZGluZycpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGVzY2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgc3RvcHBlZCwgZGVzdHJveXMgbmVjZXNzYXJ5IHBhcnRzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJCYXJFeGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLWZpbHRlcmJhcicpICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRHYW1lcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVUaWxlcyk7XHJcbiAgICAgICAgbGV0IGFyciA9IChBcnJheS5mcm9tKHRoaXMuZ2FtZVRpbGVzKSBhcyBFbGVtZW50W10pLm1hcChlID0+IGUucGFyZW50RWxlbWVudCk7IC8vIEdldCBhbGwgd3JhcHBlcnMgYXMgYW4gYXJyYXlcclxuICAgICAgICBhcnIgPSBhcnIuc29ydChGaWx0ZXJPcmRlci5nZXRTb3J0ZXIodGhpcy5vcmRlcikpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HKSB7XHJcbiAgICAgICAgICAgIGFyciA9IGFyci5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucHJlcGVuZChlbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJPcmRlciB7XHJcbiAgICBzdGF0aWMgUkVDRU5UID0gMDtcclxuICAgIHN0YXRpYyBBTFBIQUJFVElDQUwgPSAxO1xyXG4gICAgc3RhdGljIEFMUEhBQkVUSUNBTF9SRVZFUlNFID0gMjtcclxuICAgIHN0YXRpYyBSQU5ET00gPSAzO1xyXG5cclxuICAgIHN0YXRpYyBnZXRTb3J0ZXIob3JkZXI6IEZpbHRlck9yZGVyKSB7XHJcbiAgICAgICAgc3dpdGNoKG9yZGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRUNFTlQ6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydFJlY2VudDtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTFBIQUJFVElDQUw6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEFscGhhYmV0aWNhbDtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SQU5ET006IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydFJhbmRvbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJlY2VudChhOmFueSwgYjphbnkpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzb3J0QWxwaGFiZXRpY2FsKGE6YW55LCBiOmFueSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG5cclxuICAgICAgICBpZihuYW1lQSA9PT0gdW5kZWZpbmVkIHx8IG5hbWVCID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lQik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJhbmRvbShhOmFueSwgYjphbnkpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMikgLSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvbiB7XHJcbiAgICBBU0NFTkRJTkcsXHJcbiAgICBERVNDRU5ESU5HXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gJy4uL3VpL1VJQnV0dG9uJztcclxuaW1wb3J0IHsgVUlSb3cgfSBmcm9tICcuLi91aS9VSVJvdyc7XHJcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWkvVUlDb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL1VJVGFiLnNjc3MnO1xyXG5cclxuY29uc3QgY2hyb21lOiBhbnkgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xyXG5cclxuLyoqXHJcbiAqIEEgdGFiIGFuZCBidXR0b24gZGlzcGxheWVkIGluIHRoZSBTdGFkaWEgTWVudS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgVUlUYWIgdHlwZS5cclxuICogQGNsYXNzIFVJVGFiXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmV0d29ya01vbml0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnTmV0d29yayBNb25pdG9yJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YWIgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUNvbXBvbmVudF1dIHVzZWQgdG8gZGlzcGxheSB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBjb21wb25lbnQ6IFVJQ29tcG9uZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlCdXR0b25dXSB1c2VkIHRvIG9wZW4gdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBVSUNvbXBvbmVudChcclxuICAgICAgICAgICAgJ05ldHdvcmsgTW9uaXRvcicsXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIFRoaXMgZmVhdHVyZSBpcyBzdGlsbCBiZWluZyB3b3JrZWQgb24sIHBsZWFzZSB3YWl0IGZvciBmdXR1cmUgdXBkYXRlcy5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvbmV0d29yay1tb25pdG9yLnN2ZycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKGljb24sICdNb25pdG9yJywgdGhpcy5pZCArICctYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBlbmFibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgbWFrZXMgc3VyZSB0byBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XHJcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL1VJQ29tcG9uZW50JztcclxuaW1wb3J0ICcuL3N0eWxlcy9VSVRhYi5zY3NzJztcclxuXHJcbmNvbnN0IGNocm9tZTogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbi8qKlxyXG4gKiBBIHRhYiBhbmQgYnV0dG9uIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFVJVGFiIHR5cGUuXHJcbiAqIEBjbGFzcyBVSVRhYlxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVJVGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ1VJIFRhYic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFiIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhbW91bnQgb2Ygcm93cywgZWFjaCBjb250YWluaW5nIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIHJvd3M6IFVJUm93W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGlzdCBvZiBmdW4gTU9URCBtZXNzYWdlcyBhZGRlZCB0byB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBtb3RkTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1vamlzLzYzNjIyNzg2NDA3Njc0Njc3Mi5wbmc/dj0xXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDsgd2lkdGg6IDI0cHhcIj4nLFxyXG4gICAgICAgIFwiRG9uJ3QgbG9vayBoZXJlLCBsb29rIGJlbG93IVwiLFxyXG4gICAgICAgICdSZWFsaXR5IGNhbiBiZSB3aGF0ZXZlciBJIHdhbnQuJyxcclxuICAgICAgICAnSWYgeW91IGFzayBuaWNlbHksIFN0YWRpYSBtaWdodCBldmVuIGRvIHlvdXIgbGF1bmRyeSBmb3IgeW91IScsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIGFza2luZyBjdXN0b21lciBzdXBwb3J0PycsXHJcbiAgICAgICAgJ0ZvbGxvdyB1L21hZnJhbnMgb24gUmVkZGl0IScsXHJcbiAgICAgICAgJ1N0YWRpYSssIGxpa2UgR29vZ2xlKyBidXQgc3RpbGwgYWxpdmUuJyxcclxuICAgICAgICAnU3RhZGlhIGlzIERPQSwgYmVsaWV2ZSBtZS4nLFxyXG4gICAgICAgICdHZXQgYSBsb2FkIG9mIHRoaXMgZ3V5LCB1c2luZyBjaHJvbWUgZXh0ZW5zaW9ucyB0byBpbXByb3ZlIGhpcyBTdGFkaWEgZXhwZXJpZW5jZS4nLFxyXG4gICAgICAgIFwiSSdtIHRlbGxpbmcgeW91LCBkb24ndCB0cnVzdCB0aGF0IGd1eS4gWW91IGtub3csIHRoZSBndXkuXCIsXHJcbiAgICAgICAgJ1Nob3V0b3V0IHRvIENocmlzIGFuZCBHcmFjZSEnLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBTcGxpdGxpbmdzIHlldD8nLFxyXG4gICAgICAgICdBbHdheXMgY2hlY2sgdGhlIHJhdGluZ3MgYmVmb3JlIHlvdSBidXkgYSBuZXcgZ2FtZS4nLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBHZUZvcmNlIE5vdz8nLFxyXG4gICAgICAgICdBIGhvdCBkb2cgaXMgZGVmaW5pdGVseSBub3QgYSBzYW5kd2ljaC4nLFxyXG4gICAgICAgICdJZGsgYWJvdXQgeW91LCBidXQgSSByZWFsbHkgd2FudCBvbmUgb2YgdGhvc2UgZmFuY3kgc21hcnQgdG9pbGV0cy4nLFxyXG4gICAgICAgICdDaHJpcyBpcyB0eXBpbmcgZ3V5cyEhJyxcclxuICAgICAgICAnRG9lcyBhbnlvbmUgaGF2ZSBhIGJ1ZGR5IHBhc3MgSSBjb3VsZCBib3Jyb3c/JyxcclxuICAgICAgICAnSSBwYWlkICQxMzkgZm9yIHRoaXM/JyxcclxuICAgICAgICAnSXMgRm9ydG5pdGUgb24gU3RhZGlhIHlldD8nLFxyXG4gICAgICAgICd1L2JhY29ucnVsZXMgd2FzIHRoZSBmaXJzdCB0byBzZWUgNGshJyxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBbW1VJQ29tcG9uZW50XV0gYW5kIGEgW1tVSUJ1dHRvbl1dXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgVUlDb21wb25lbnQoXHJcbiAgICAgICAgICAgICdTdGFkaWErJyxcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGFkaWFwbHVzX211dGVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtOyBtYXJnaW4tYm90dG9tOiA1cmVtOyBkaXNwbGF5OiBibG9ja1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3RkTGlzdFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubW90ZExpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICB0aGlzLmlkLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy9zdGFkaWFwbHVzLnN2ZycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKGljb24sICdTdGFkaWErJywgdGhpcy5pZCArICctYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmQgYWxsIHJvd3MgdGhhdCBkb24ndCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVSb3dzKHJlbG9hZD86IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgaWYoIXJvdy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZCh0aGlzLmNvbXBvbmVudCwgaSA+IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByb3cucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgYWxsIHJvd3NcclxuICAgICAqL1xyXG4gICAgcmVsb2FkUm93cygpIHtcclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4gcm93LnJlbG9hZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHJvdyB0byB0aGUgbGlzdC5cclxuICAgICAqL1xyXG4gICAgYWRkUm93KHJvdzogVUlSb3cpIHtcclxuICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYW5kIHVubG9hZCBhbGwgcm93cy5cclxuICAgICAqL1xyXG4gICAgY2xlYXJSb3dzKCkge1xyXG4gICAgICAgIGZvcihjb25zdCByb3cgb2YgdGhpcy5yb3dzKSB7XHJcbiAgICAgICAgICAgIHJvdy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBlbmFibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICByb3cuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIG1ha2VzIHN1cmUgdG8gY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZSBtZW51IGlzIG9wZW4gYWxyZWFkeS5cclxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkgJiYgVXRpbC5pc0luR2FtZSgpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jcmVhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3dzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DbG9jay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlQ29kZWMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb3JjZVJlc29sdXRpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaWJyYXJ5RmlsdGVyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVUlUYWIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvR2xvYmFsLnNjc3MnXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuL0NvbXBvbmVudExvYWRlcic7XHJcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9jb21wb25lbnRzL0Nsb2NrJ1xyXG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vY29tcG9uZW50cy9VSVRhYidcclxuaW1wb3J0IHsgRm9yY2VDb2RlYyB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JjZUNvZGVjJ1xyXG5pbXBvcnQgeyBGb3JjZVJlc29sdXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvRm9yY2VSZXNvbHV0aW9uJ1xyXG5pbXBvcnQgeyBOZXR3b3JrTW9uaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvcic7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi91aS9TbmFja2Jhcic7XHJcbmltcG9ydCB7IExpYnJhcnlGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlcic7XHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi9EYXRhYmFzZSc7XHJcblxyXG5jb25zdCBsb2FkZXIgPSBuZXcgQ29tcG9uZW50TG9hZGVyKCk7XHJcbmNvbnN0IHNuYWNrYmFyID0gbmV3IFNuYWNrYmFyKCk7XHJcbmNvbnN0IHRhYiA9IG5ldyBVSVRhYigpO1xyXG5cclxuY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL2dhbWVkYi5qc29uJyk7XHJcbmNvbnN0IHV1aWRNYXAgPSBuZXcgRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL3V1aWRtYXAuanNvbicpO1xyXG5kYXRhYmFzZS5jb25uZWN0KCk7XHJcbnV1aWRNYXAuY29ubmVjdChjb25zb2xlLmxvZyk7XHJcblxyXG5sb2FkZXIucmVnaXN0ZXIobmV3IENsb2NrKCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IExpYnJhcnlGaWx0ZXIoc25hY2tiYXIsIGRhdGFiYXNlLCB1dWlkTWFwKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgRm9yY2VDb2RlYyh0YWIsIHNuYWNrYmFyKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgRm9yY2VSZXNvbHV0aW9uKHRhYiwgc25hY2tiYXIpKTtcclxubG9hZGVyLnJlZ2lzdGVyKHRhYik7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgTmV0d29ya01vbml0b3IoKSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIFV0aWwubG9hZCgpO1xyXG4gICAgc25hY2tiYXIuY3JlYXRlKCk7XHJcbiAgICBsb2FkZXIuc3RhcnQoKTtcclxufSkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dsb2JhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgU2xpbVNlbGVjdCBmcm9tICdzbGltLXNlbGVjdCc7XHJcbmltcG9ydCAnc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3VpL3N0eWxlcy9TZWxlY3Quc2NzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Qge1xyXG4gICAgc2xpbXNlbGVjdDogU2xpbVNlbGVjdDtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgcGxhY2Vob2xkZXI/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19kcm9wZG93bicpO1xyXG5cclxuICAgICAgICAvKiogXHJcbiAgICAgICAgICogU2xpbXNlbGVjdCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIGVsZW1lbnRzL2NvbnRhaW5lcnMgXHJcbiAgICAgICAgICogaGF2ZSBiZWVuIGRlbGV0ZWQgd2l0aG91dCBwcm9wZXJseSBiZWluZyBkZXN0cm95ZWQuIEFzIFN0YWRpYVxyXG4gICAgICAgICAqIHJ1bnMgaW4gYSB2aXJ0dWFsIERPTSwgd2UgaGF2ZSBubyBjb250cm9sIG9mIHdoZW4gdGhlIERPTSBjaGFuZ2VzXHJcbiAgICAgICAgICogdGhlcmVmb3JlIHdlIGNhbid0IHNvbHZlIGl0IGluIGEgcHJvcGVyIHdheS5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBMZXQncyBqdXN0IGhvcGUgZ2FyYmFnZSBjb2xsZWN0aW9uIHRha2VzIGNhcmUgb2YgaXQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0ID0gbmV3IFNsaW1TZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3IpIHt9IFxyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbGltc2VsZWN0LnNlbGVjdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KC4uLml0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIGlmKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IGluIGNhc2Ugc2xpbXNlbGVjdC5zZXQgaXMgZmFzdGVyXHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXQoaXRlbXNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldERhdGEoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VhcmNoKHF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2xpbXNlbGVjdC5jb25maWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaW1zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3RhZGlhcGx1c19kcm9wZG93bicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGVzL1NuYWNrYmFyLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyIHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBsYWJlbDogRWxlbWVudDtcclxuICAgIGNsb3NlQnV0dG9uOiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zbmFja2JhcicpO1xyXG5cclxuICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMubGFiZWwuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zbmFja2Jhci1sYWJlbCcpO1xyXG5cclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICdjbG9zZSc7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLWV4dGVuZGVkJywgJ3N0YWRpYXBsdXNfc25hY2tiYXItY2xvc2UnKTtcclxuXHJcbiAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgc2VsZi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUobGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBzZWxmLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNTAwMClcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVJQnV0dG9uQ29udGFpbmVyIH0gZnJvbSBcIi4vVUlCdXR0b25Db250YWluZXJcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlCdXR0b24ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGh0bWw6IHN0cmluZztcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBjb250YWluZXI6IFVJQnV0dG9uQ29udGFpbmVyO1xyXG4gICAgYnV0dG9uOiBFbGVtZW50O1xyXG5cclxuICAgIHN0YXRpYyBidXR0b25Db250YWluZXJzOiBVSUJ1dHRvbkNvbnRhaW5lcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlB5ZmxiYlwiIGpzbmFtZT1cInJaSEVTZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIktFYUhvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJYNXBlb2VcIiBqc25hbWU9XCJwWUZoVVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwieGR1b3lmXCIgc3JjPVwiJHtpY29ufVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhU0pWXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ1B5ZjFiYicsICdzdGFkaWFwbHVzX3VpLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdDVHZEWGQnLCAnUUFBeVdkJywgJ1BqcGFjJywgJ3pjTVlkJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBmb3IoY29uc3QgY29udGFpbmVyIG9mIFVJQnV0dG9uLmJ1dHRvbkNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgaWYoY29udGFpbmVyLmJ1dHRvbnMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgVUlCdXR0b25Db250YWluZXIoKTtcclxuICAgICAgICAgICAgVUlCdXR0b24uYnV0dG9uQ29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQnV0dG9uKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZShjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXN0cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgIT09IG51bGw7XHJcbiAgICB9IFxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUJ1dHRvbih0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gXCIuL1VJQnV0dG9uXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL0xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQnV0dG9uQ29udGFpbmVyIHtcclxuICAgIGJ1dHRvbnM6IFVJQnV0dG9uW10gPSBbXTtcclxuICAgIGNvbnRhaW5lcjogRWxlbWVudDtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgd3JhcHBlcjogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gJ2J1dHRvbi1jb250YWluZXItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTkpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRaMEJOJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnWmdVTW8nLCAnc3RhZGlhcGx1c191aS1idG4td3JhcHBlcicpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnRTBaazliJywgJ3N0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lcicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVFowQk4nKTsgLy8gUmVxdWVyeSBpbiBjYXNlIHRoZSBjb250YWluZXIgd2FzIGRlbGV0ZWRcclxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBpZighYnV0dG9uLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbihidXR0b246IFVJQnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLnB1c2goYnV0dG9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtb3ZlQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMuZmlsdGVyKGIgPT4gYi5pZCAhPT0gYnV0dG9uLmlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUNvbXBvbmVudCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJrdlQ3Y1wiIGpzYWN0aW9uPVwiY2xpY2s6YTRmVXdkXCIganNuYW1lPVwiR2VHSEtiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJEUHZ3WWMgdFJxYzNjXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+YXJyb3dfYmFjazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJRM3d5eWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ3dDeEZkXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgJHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3VpLWNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHhoQXlmLmZpOEp4ZCcpO1xyXG4gICAgICAgIGlmKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gUmVRdWVyeSBlbGVtZW50IHNpbmNlIG91dGVySFRNTCBicmVha3MgaXQuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgIyR7dGhpcy5pZH0gPiBoZWFkZXIgPiAucmt2VDdjYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgTG9nZ2VyLmluZm8oJ0Nsb3NpbmcnLCB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tIFwiLi9VSUNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJUm93IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgb3B0aW9uczogVUlSb3dPcHRpb25zO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBVSVJvd09wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8cD4ke3RoaXMudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfdWktcm93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhpc3RzKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMub25SZWxvYWQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kKGNvbXBvbmVudDogVUlDb21wb25lbnQsIHVzZUhyOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZih1c2VIcikge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVSVJvd09wdGlvbnMge1xyXG4gICAgb25DcmVhdGU/OiBGdW5jdGlvbjtcclxuICAgIG9uRGVzdHJveT86IEZ1bmN0aW9uO1xyXG4gICAgb25SZWxvYWQ/OiBGdW5jdGlvbjtcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU25hY2tiYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==