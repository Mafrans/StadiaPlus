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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/pretty-checkbox/src/pretty-checkbox.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/pretty-checkbox/src/pretty-checkbox.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pretty * {\n  box-sizing: border-box;\n}\n\n.pretty input:not([type=checkbox]):not([type=radio]) {\n  display: none;\n}\n\n.pretty {\n  position: relative;\n  display: inline-block;\n  margin-right: 1em;\n  white-space: nowrap;\n  line-height: 1;\n}\n.pretty input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-width: 1em;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.pretty .state label {\n  position: initial;\n  display: inline-block;\n  font-weight: normal;\n  margin: 0;\n  text-indent: 1.5em;\n  min-width: calc(1em + 2px);\n}\n.pretty .state label:before, .pretty .state label:after {\n  content: \"\";\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  display: block;\n  box-sizing: border-box;\n  border-radius: 0;\n  border: 1px solid transparent;\n  z-index: 0;\n  position: absolute;\n  left: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  background-color: transparent;\n}\n.pretty .state label:before {\n  border-color: #bdc3c7;\n}\n.pretty .state.p-is-hover, .pretty .state.p-is-indeterminate {\n  display: none;\n}\n\n@keyframes zoom {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n@keyframes tada {\n  0% {\n    animation-timing-function: ease-in;\n    opacity: 0;\n    transform: scale(7);\n  }\n  38% {\n    animation-timing-function: ease-out;\n    opacity: 1;\n    transform: scale(1);\n  }\n  55% {\n    animation-timing-function: ease-in;\n    transform: scale(1.5);\n  }\n  72% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n  81% {\n    animation-timing-function: ease-in;\n    transform: scale(1.24);\n  }\n  89% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n  95% {\n    animation-timing-function: ease-in;\n    transform: scale(1.04);\n  }\n  100% {\n    animation-timing-function: ease-out;\n    transform: scale(1);\n  }\n}\n@keyframes jelly {\n  0% {\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  40% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  50% {\n    transform: scale3d(0.85, 1.15, 1);\n  }\n  65% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  75% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rotate {\n  0% {\n    opacity: 0;\n    transform: translateZ(-200px) rotate(-45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateZ(0) rotate(0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0px 0px 0px 0px #bdc3c7;\n  }\n  100% {\n    box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0);\n  }\n}\n.pretty.p-default.p-fill .state label:after {\n  transform: scale(1);\n}\n\n.pretty.p-default .state label:after {\n  transform: scale(0.6);\n}\n.pretty.p-default input:checked ~ .state label:after {\n  background-color: #bdc3c7 !important;\n}\n\n.pretty.p-default.p-thick .state label:before, .pretty.p-default.p-thick .state label:after {\n  border-width: calc(1em / 7);\n}\n.pretty.p-default.p-thick .state label:after {\n  transform: scale(0.4) !important;\n}\n\n.pretty.p-icon .state .icon {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0;\n}\n.pretty.p-icon .state .icon:before {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n}\n.pretty.p-icon input:checked ~ .state .icon {\n  opacity: 1;\n}\n.pretty.p-icon input:checked ~ .state label:before {\n  border-color: #5a656b;\n}\n\n.pretty.p-svg .state .svg {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0;\n}\n.pretty.p-svg .state svg {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n}\n.pretty.p-svg input:checked ~ .state .svg {\n  opacity: 1;\n}\n\n.pretty.p-image .state img {\n  opacity: 0;\n  position: absolute;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  left: 0;\n  z-index: 0;\n  text-align: center;\n  line-height: normal;\n  transform: scale(0.8);\n}\n.pretty.p-image input:checked ~ .state img {\n  opacity: 1;\n}\n\n.pretty.p-switch input {\n  min-width: 2em;\n}\n.pretty.p-switch .state {\n  position: relative;\n}\n.pretty.p-switch .state:before {\n  content: \"\";\n  border: 1px solid #bdc3c7;\n  border-radius: 60px;\n  width: 2em;\n  box-sizing: unset;\n  height: calc(1em + 2px);\n  position: absolute;\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 16%);\n  z-index: 0;\n  transition: all 0.5s ease;\n}\n.pretty.p-switch .state label {\n  text-indent: 2.5em;\n}\n.pretty.p-switch .state label:before, .pretty.p-switch .state label:after {\n  transition: all 0.5s ease;\n  border-radius: 100%;\n  left: 0;\n  border-color: transparent;\n  transform: scale(0.8);\n}\n.pretty.p-switch .state label:after {\n  background-color: #bdc3c7 !important;\n}\n.pretty.p-switch input:checked ~ .state:before {\n  border-color: #5a656b;\n}\n.pretty.p-switch input:checked ~ .state label:before {\n  opacity: 0;\n}\n.pretty.p-switch input:checked ~ .state label:after {\n  background-color: #5a656b !important;\n  left: 1em;\n}\n\n.pretty.p-switch.p-fill input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important;\n}\n.pretty.p-switch.p-fill input:checked ~ .state label:before {\n  opacity: 0;\n}\n.pretty.p-switch.p-fill input:checked ~ .state label:after {\n  background-color: #fff !important;\n  left: 1em;\n}\n\n.pretty.p-switch.p-slim .state:before {\n  height: 0.1em;\n  background: #bdc3c7 !important;\n  top: calc(50% - 0.1em);\n}\n.pretty.p-switch.p-slim input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important;\n}\n\n.pretty.p-has-hover input:hover ~ .state:not(.p-is-hover) {\n  display: none;\n}\n.pretty.p-has-hover input:hover ~ .state.p-is-hover {\n  display: block;\n}\n.pretty.p-has-hover input:hover ~ .state.p-is-hover .icon {\n  display: block;\n}\n\n.pretty.p-has-focus input:focus ~ .state label:before {\n  box-shadow: 0px 0px 3px 0px #bdc3c7;\n}\n\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state:not(.p-is-indeterminate) {\n  display: none;\n}\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state.p-is-indeterminate {\n  display: block;\n}\n.pretty.p-has-indeterminate input[type=checkbox]:indeterminate ~ .state.p-is-indeterminate .icon {\n  display: block;\n  opacity: 1;\n}\n\n.pretty.p-toggle .state.p-on {\n  opacity: 0;\n  display: none;\n}\n.pretty.p-toggle .state.p-off,\n.pretty.p-toggle .state .icon,\n.pretty.p-toggle .state .svg,\n.pretty.p-toggle .state img {\n  opacity: 1;\n  display: inherit;\n}\n.pretty.p-toggle .state.p-off .icon {\n  color: #bdc3c7;\n}\n.pretty.p-toggle input:checked ~ .state.p-on {\n  opacity: 1;\n  display: inherit;\n}\n.pretty.p-toggle input:checked ~ .state.p-off {\n  opacity: 0;\n  display: none;\n}\n\n.pretty.p-plain input:checked ~ .state label:before, .pretty.p-plain.p-toggle .state label:before {\n  content: none;\n}\n.pretty.p-plain.p-plain .icon {\n  transform: scale(1.1);\n}\n\n.pretty.p-round .state label:before, .pretty.p-round .state label:after {\n  border-radius: 100%;\n}\n.pretty.p-round.p-icon .state .icon {\n  border-radius: 100%;\n  overflow: hidden;\n}\n.pretty.p-round.p-icon .state .icon:before {\n  transform: scale(0.8);\n}\n\n.pretty.p-curve .state label:before, .pretty.p-curve .state label:after {\n  border-radius: 20%;\n}\n\n.pretty.p-smooth label:before,\n.pretty.p-smooth label:after,\n.pretty.p-smooth .icon,\n.pretty.p-smooth .svg {\n  transition: all 0.5s ease;\n}\n.pretty.p-smooth input:checked + .state label:after {\n  transition: all 0.3s ease;\n}\n.pretty.p-smooth input:checked + .state .icon,\n.pretty.p-smooth input:checked + .state .svg,\n.pretty.p-smooth input:checked + .state img {\n  animation: zoom 0.2s ease;\n}\n.pretty.p-smooth.p-default input:checked + .state label:after {\n  animation: zoom 0.2s ease;\n}\n.pretty.p-smooth.p-plain input:checked + .state label:before {\n  content: \"\";\n  transform: scale(0);\n  transition: all 0.5s ease;\n}\n\n.pretty.p-tada:not(.p-default) input:checked + .state .icon,\n.pretty.p-tada:not(.p-default) input:checked + .state .svg,\n.pretty.p-tada:not(.p-default) input:checked + .state img,\n.pretty.p-tada:not(.p-default) input:checked + .state label:before,\n.pretty.p-tada:not(.p-default) input:checked + .state label:after {\n  animation: tada 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 alternate;\n  opacity: 1;\n}\n\n.pretty.p-jelly:not(.p-default) input:checked + .state .icon,\n.pretty.p-jelly:not(.p-default) input:checked + .state .svg,\n.pretty.p-jelly:not(.p-default) input:checked + .state img,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:after {\n  animation: jelly 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1;\n}\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before {\n  border-color: transparent;\n}\n\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .icon,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .svg,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state img,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:after {\n  animation: rotate 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1;\n}\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before {\n  border-color: transparent;\n}\n\n.pretty.p-pulse:not(.p-switch) input:checked ~ .state label:before {\n  animation: pulse 1s;\n}\n\n.pretty input[disabled] {\n  cursor: not-allowed;\n  display: none;\n}\n.pretty input[disabled] ~ * {\n  opacity: 0.5;\n}\n\n.pretty.p-locked input {\n  display: none;\n  cursor: not-allowed;\n}\n\n.pretty input:checked ~ .state.p-primary label:after, .pretty.p-toggle .state.p-primary label:after {\n  background-color: #428bca !important;\n}\n.pretty input:checked ~ .state.p-primary .icon,\n.pretty input:checked ~ .state.p-primary .svg, .pretty.p-toggle .state.p-primary .icon,\n.pretty.p-toggle .state.p-primary .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-primary-o label:before, .pretty.p-toggle .state.p-primary-o label:before {\n  border-color: #428bca;\n}\n.pretty input:checked ~ .state.p-primary-o label:after, .pretty.p-toggle .state.p-primary-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-primary-o .icon,\n.pretty input:checked ~ .state.p-primary-o .svg,\n.pretty input:checked ~ .state.p-primary-o svg, .pretty.p-toggle .state.p-primary-o .icon,\n.pretty.p-toggle .state.p-primary-o .svg,\n.pretty.p-toggle .state.p-primary-o svg {\n  color: #428bca;\n  stroke: #428bca;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-primary-o label:after {\n  background-color: #428bca !important;\n}\n.pretty.p-switch input:checked ~ .state.p-primary:before {\n  border-color: #428bca;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-primary:before {\n  background-color: #428bca !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-primary:before {\n  border-color: #245682;\n  background-color: #245682 !important;\n}\n.pretty input:checked ~ .state.p-info label:after, .pretty.p-toggle .state.p-info label:after {\n  background-color: #5bc0de !important;\n}\n.pretty input:checked ~ .state.p-info .icon,\n.pretty input:checked ~ .state.p-info .svg, .pretty.p-toggle .state.p-info .icon,\n.pretty.p-toggle .state.p-info .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-info-o label:before, .pretty.p-toggle .state.p-info-o label:before {\n  border-color: #5bc0de;\n}\n.pretty input:checked ~ .state.p-info-o label:after, .pretty.p-toggle .state.p-info-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-info-o .icon,\n.pretty input:checked ~ .state.p-info-o .svg,\n.pretty input:checked ~ .state.p-info-o svg, .pretty.p-toggle .state.p-info-o .icon,\n.pretty.p-toggle .state.p-info-o .svg,\n.pretty.p-toggle .state.p-info-o svg {\n  color: #5bc0de;\n  stroke: #5bc0de;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-info-o label:after {\n  background-color: #5bc0de !important;\n}\n.pretty.p-switch input:checked ~ .state.p-info:before {\n  border-color: #5bc0de;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-info:before {\n  background-color: #5bc0de !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-info:before {\n  border-color: #2390b0;\n  background-color: #2390b0 !important;\n}\n.pretty input:checked ~ .state.p-success label:after, .pretty.p-toggle .state.p-success label:after {\n  background-color: #5cb85c !important;\n}\n.pretty input:checked ~ .state.p-success .icon,\n.pretty input:checked ~ .state.p-success .svg, .pretty.p-toggle .state.p-success .icon,\n.pretty.p-toggle .state.p-success .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-success-o label:before, .pretty.p-toggle .state.p-success-o label:before {\n  border-color: #5cb85c;\n}\n.pretty input:checked ~ .state.p-success-o label:after, .pretty.p-toggle .state.p-success-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-success-o .icon,\n.pretty input:checked ~ .state.p-success-o .svg,\n.pretty input:checked ~ .state.p-success-o svg, .pretty.p-toggle .state.p-success-o .icon,\n.pretty.p-toggle .state.p-success-o .svg,\n.pretty.p-toggle .state.p-success-o svg {\n  color: #5cb85c;\n  stroke: #5cb85c;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-success-o label:after {\n  background-color: #5cb85c !important;\n}\n.pretty.p-switch input:checked ~ .state.p-success:before {\n  border-color: #5cb85c;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-success:before {\n  background-color: #5cb85c !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-success:before {\n  border-color: #357935;\n  background-color: #357935 !important;\n}\n.pretty input:checked ~ .state.p-warning label:after, .pretty.p-toggle .state.p-warning label:after {\n  background-color: #f0ad4e !important;\n}\n.pretty input:checked ~ .state.p-warning .icon,\n.pretty input:checked ~ .state.p-warning .svg, .pretty.p-toggle .state.p-warning .icon,\n.pretty.p-toggle .state.p-warning .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-warning-o label:before, .pretty.p-toggle .state.p-warning-o label:before {\n  border-color: #f0ad4e;\n}\n.pretty input:checked ~ .state.p-warning-o label:after, .pretty.p-toggle .state.p-warning-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-warning-o .icon,\n.pretty input:checked ~ .state.p-warning-o .svg,\n.pretty input:checked ~ .state.p-warning-o svg, .pretty.p-toggle .state.p-warning-o .icon,\n.pretty.p-toggle .state.p-warning-o .svg,\n.pretty.p-toggle .state.p-warning-o svg {\n  color: #f0ad4e;\n  stroke: #f0ad4e;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-warning-o label:after {\n  background-color: #f0ad4e !important;\n}\n.pretty.p-switch input:checked ~ .state.p-warning:before {\n  border-color: #f0ad4e;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-warning:before {\n  background-color: #f0ad4e !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-warning:before {\n  border-color: #c77c11;\n  background-color: #c77c11 !important;\n}\n.pretty input:checked ~ .state.p-danger label:after, .pretty.p-toggle .state.p-danger label:after {\n  background-color: #d9534f !important;\n}\n.pretty input:checked ~ .state.p-danger .icon,\n.pretty input:checked ~ .state.p-danger .svg, .pretty.p-toggle .state.p-danger .icon,\n.pretty.p-toggle .state.p-danger .svg {\n  color: #fff;\n  stroke: #fff;\n}\n.pretty input:checked ~ .state.p-danger-o label:before, .pretty.p-toggle .state.p-danger-o label:before {\n  border-color: #d9534f;\n}\n.pretty input:checked ~ .state.p-danger-o label:after, .pretty.p-toggle .state.p-danger-o label:after {\n  background-color: transparent;\n}\n.pretty input:checked ~ .state.p-danger-o .icon,\n.pretty input:checked ~ .state.p-danger-o .svg,\n.pretty input:checked ~ .state.p-danger-o svg, .pretty.p-toggle .state.p-danger-o .icon,\n.pretty.p-toggle .state.p-danger-o .svg,\n.pretty.p-toggle .state.p-danger-o svg {\n  color: #d9534f;\n  stroke: #d9534f;\n}\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-danger-o label:after {\n  background-color: #d9534f !important;\n}\n.pretty.p-switch input:checked ~ .state.p-danger:before {\n  border-color: #d9534f;\n}\n.pretty.p-switch.p-fill input:checked ~ .state.p-danger:before {\n  background-color: #d9534f !important;\n}\n.pretty.p-switch.p-slim input:checked ~ .state.p-danger:before {\n  border-color: #a02622;\n  background-color: #a02622 !important;\n}\n\n.pretty.p-bigger label:before,\n.pretty.p-bigger label:after,\n.pretty.p-bigger .icon,\n.pretty.p-bigger .svg,\n.pretty.p-bigger .img {\n  font-size: 1.2em !important;\n  top: calc((0% - (100% - 1em)) - 35%) !important;\n}\n.pretty.p-bigger label {\n  text-indent: 1.7em;\n}\n\n@media print {\n  .pretty .state:before,\n.pretty .state label:before,\n.pretty .state label:after,\n.pretty .state .icon {\n    color-adjust: exact;\n    /* stylelint-disable */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

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
exports.push([module.i, ".stadiaplus_libraryfilter-wrapper {\n  opacity: 1;\n  transform: scale(1);\n  transition: transform 0.5s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.5s cubic-bezier(0.75, 0, 0.25, 1);\n}\n.stadiaplus_libraryfilter-wrapper.closing {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper.closed {\n  display: none;\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper .stadiaplus_libraryfilter-icon {\n  position: absolute;\n  font-family: \"Material Icons Extended\";\n  font-size: 32px;\n  z-index: 4;\n  padding: 16px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 32px;\n  background-color: #393a3c;\n  cursor: pointer;\n  transition: transform 0.23s cubic-bezier(0.35, 0, 0.15, 1);\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon {\n  transform: scale(1.015);\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon:hover {\n  transform: scale(1);\n}\n\n.stadiaplus_libraryfilter-bar {\n  background-color: #303236;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_dropdown {\n  display: block;\n  padding: 0.5rem;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-checkbox {\n  margin-left: auto;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction {\n  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);\n  border-radius: 50%;\n  padding: 2px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction::after {\n  content: \"arrow_drop_down\";\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.ascending {\n  transform: rotate(0deg);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.descending {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/NetworkMonitor.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/NetworkMonitor.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_networkmonitor {\n  position: absolute;\n  width: 250px;\n  top: 0;\n  left: 0;\n  z-index: 150;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.stadiaplus_networkmonitor * {\n  user-select: none;\n}\n.stadiaplus_networkmonitor ul {\n  list-style-type: none;\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n.stadiaplus_networkmonitor.editable {\n  z-index: 300;\n  cursor: move;\n}\n\n.stadiaplus_networkmonitor-tab ul {\n  list-style-type: none;\n  padding-inline-start: 1rem;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\n.stadiaplus_networkmonitor-checkbox {\n  margin: 0.4rem 0;\n}\n\n.stadiaplus_networkmonitor-toggle-button::before {\n  margin-right: 4px;\n  content: \"Show\";\n}\n.stadiaplus_networkmonitor-toggle-button.shown::before {\n  content: \"Hide\";\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Ratings.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Ratings.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_rating {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  position: relative;\n}\n.stadiaplus_rating:hover .stadiaplus_rating-tooltip {\n  opacity: 1;\n  transform: translateX(-50%) scale(1);\n}\n.stadiaplus_rating .stadiaplus_rating-tooltip {\n  font-family: \"Google Sans\", sans-serif;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) scale(0.9);\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 0.5rem;\n  color: #ffffff;\n  font-size: 20px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out 0.3s;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StoreFilter.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StoreFilter.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_storefilter {\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_storefilter .bar {\n  border-radius: 0.5rem 0.5rem 0 0;\n  background-color: rgba(255, 255, 255, 0.12);\n  padding: 1rem;\n  align-items: center;\n  display: flex;\n  align-content: center;\n}\n.stadiaplus_storefilter .bar::before {\n  content: \"search\";\n  font-size: 32px;\n  margin-right: 0.5rem;\n  font-family: \"Material Icons Extended\";\n}\n.stadiaplus_storefilter .bar input {\n  width: calc(100% - 1rem);\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.12);\n  font-family: \"Google Sans\", sans-serif;\n  font-size: 1.25rem;\n  outline: #ff773d 3px;\n  color: #ffffff;\n  font-weight: 500;\n  border: none;\n  border-radius: 0.25rem;\n}\n.stadiaplus_storefilter .games {\n  margin-bottom: 1.5rem;\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.06);\n  border-radius: 0 0 0.5rem 0.5rem;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game {\n  display: none;\n  height: 90px;\n  align-content: center;\n  border-radius: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.06);\n  margin: 0.5rem;\n  box-shadow: 0 0 0 0.1875rem transparent;\n  color: #ffffff;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game.shown {\n  display: flex;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game img {\n  object-fit: cover;\n  width: 140px;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.stadiaplus_storefilter .games .stadiaplus_storefilter-game .detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 1.5rem;\n}", ""]);
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
exports.push([module.i, ".stadiaplus_muted {\n  opacity: 0.5;\n}\n\n.stadiaplus_ui-component {\n  /* \n   *   Must remove 2 x padding or it doesnt work \n   */\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateX(100%);\n  padding: 1rem;\n  background-color: #2d2e30;\n  transition: transform 0.15s ease-in-out;\n  z-index: 999;\n}\n.stadiaplus_ui-component.open {\n  transform: translateX(0);\n}\n.stadiaplus_ui-component header {\n  display: flex;\n  align-items: center;\n}\n.stadiaplus_ui-component header .CwCxFd {\n  font-size: 22px;\n}\n\n.stadiaplus_ui-btn-container {\n  margin-top: -16px;\n}\n.stadiaplus_ui-btn-container.E0Zk9b {\n  justify-content: initial;\n}\n\n.stadiaplus_ui-button {\n  width: 116.156px;\n}", ""]);
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
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
exports.push([module.i, ".GqLi4d {\n  filter: brightness(0.9) contrast(1.1);\n}\n\nhtml body .dSGvzf {\n  margin: 0 1rem;\n}\n\nhtml body .CVVXfc {\n  flex-direction: column;\n  align-items: initial;\n}\n\nhr {\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n::-webkit-scrollbar {\n  background-color: #46484d;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #505257 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Grid.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Grid.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_row {\n  display: inline-flex;\n  align-items: flex-end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Typography.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Typography.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_muted {\n  opacity: 0.5;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Button.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Button.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_button {\n  margin-top: 1rem;\n  box-shadow: none !important;\n}\n\n.stadiaplus_button-small {\n  padding: 0.5rem 1rem;\n  background-color: #3C3E43;\n  color: #ffffff;\n  margin: 0 0.5rem;\n  border-radius: 0.25rem;\n}", ""]);
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
exports.push([module.i, ".stadiaplus_dropdown.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: default;\n}\n.stadiaplus_dropdown.style-dark.ss-main {\n  border-color: #3C3E43;\n  width: auto;\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-content {\n  border-color: #3C3E43;\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-content .ss-list .ss-option {\n  background-color: #3C3E43;\n  color: rgba(255, 255, 255, 0.8);\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-content .ss-list .ss-option.ss-disabled {\n  background-color: #3C3E43;\n  color: rgba(255, 255, 255, 0.4);\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected {\n  background: transparent;\n  border: none;\n  border-bottom: #93959F 1px solid;\n  border-radius: 0;\n  width: 180px;\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected .placeholder,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected .placeholder {\n  color: rgba(255, 255, 255, 0.8);\n}\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected .ss-plus span,\n.stadiaplus_dropdown.style-dark.ss-main .ss-multi-selected .ss-arrow span,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected .ss-plus span,\n.stadiaplus_dropdown.style-dark.ss-main .ss-single-selected .ss-arrow span {\n  border-color: #93959F;\n}\n.stadiaplus_dropdown.style-light.ss-main {\n  width: auto;\n}\n.stadiaplus_dropdown.style-light.ss-main .ss-multi-selected,\n.stadiaplus_dropdown.style-light.ss-main .ss-single-selected {\n  background: transparent;\n  border: none;\n  border-bottom: #cccccc 1px solid;\n  border-radius: 0;\n  width: 180px;\n}\n.stadiaplus_dropdown.style-light.ss-main .ss-multi-selected .ss-plus span,\n.stadiaplus_dropdown.style-light.ss-main .ss-multi-selected .ss-arrow span,\n.stadiaplus_dropdown.style-light.ss-main .ss-single-selected .ss-plus span,\n.stadiaplus_dropdown.style-light.ss-main .ss-single-selected .ss-arrow span {\n  border-color: #cccccc;\n}\n.stadiaplus_dropdown.style-slimselect-large.ss-main {\n  width: 200px;\n  height: 40px;\n}\n.stadiaplus_dropdown.style-slimselect-large.ss-main .ss-multi-selected,\n.stadiaplus_dropdown.style-slimselect-large.ss-main .ss-single-selected {\n  height: 100%;\n}", ""]);
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

/***/ "./node_modules/pretty-checkbox/src/pretty-checkbox.scss":
/*!***************************************************************!*\
  !*** ./node_modules/pretty-checkbox/src/pretty-checkbox.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./pretty-checkbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/pretty-checkbox/src/pretty-checkbox.scss");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("const MonitorRunnable = function () {\n    this.enabled = false;\n    this.peerConnections = [];\n    this.originalRTC;\n    this.startTime;\n    this.element;\n    this.editable = false;\n    this.x = 0;\n    this.y = 0;\n\n    const self = this;\n    this.originalRTC = RTCPeerConnection;\n    (function (OriginalRTCConnection) {\n        self.originalRTC = OriginalRTCConnection;\n\n        RTCPeerConnection = function (args) {\n            const connection = new OriginalRTCConnection(args);\n            self.peerConnections.push(connection);\n            return connection;\n        };\n        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;\n    })(RTCPeerConnection);\n\n    this.start = function () {\n        this.enabled = true;\n        this.element = document.createElement('div');\n        this.element.classList.add('stadiaplus_networkmonitor');\n        this.element.id =\n            'networkmonitor-' + Math.floor(Math.random() * 999999);\n        document.body.appendChild(this.element);\n\n        this.startTime = Date.now();\n\n        this.setEditable(true);\n        this.updatePosition();\n        this.update();\n    };\n\n    this.setPosition = function (x, y) {\n        this.x = x;\n        this.y = y;\n        this.updatePosition();\n    };\n\n    this.updatePosition = function () {\n        this.element.style.left = this.x + 'px';\n        this.element.style.top = this.y + 'px';\n\n        const corners = {\n            tl: 10,\n            tr: 10,\n            bl: 10,\n            br: 10,\n        };\n\n        if (this.x < 10) {\n            corners.tl = 0;\n            corners.bl = 0;\n        }\n\n        if (this.y < 10) {\n            corners.tl = 0;\n            corners.tr = 0;\n        }\n\n        if (this.x > window.innerWidth - this.element.clientWidth - 10) {\n            corners.tr = 0;\n            corners.br = 0;\n        }\n\n        if (this.y > window.innerHeight - this.element.clientHeight - 10) {\n            corners.bl = 0;\n            corners.br = 0;\n        }\n\n        this.element.style[\n            'border-radius'\n        ] = `${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px`;\n    };\n\n    this.mouseEvents = [];\n    this.moving = false;\n    this.offset = { x: 0, y: 0 };\n    this.setEditable = function (editable) {\n        this.editable = editable;\n        this.element.classList.toggle('editable', editable);\n\n        if (editable) {\n            this.mouseEvents.push(\n                {\n                    target: document,\n                    type: 'mousemove',\n                    fn: (event) => {\n                        if (this.moving) {\n                            this.x = Math.max(\n                                0, // Minimum x value\n                                Math.min(\n                                    window.innerWidth -\n                                        this.element.clientWidth, // Maximum x value\n                                    event.clientX - this.offset.x,\n                                ),\n                            );\n                            this.y = Math.max(\n                                0, // Minimum y value\n                                Math.min(\n                                    window.innerHeight -\n                                        this.element.clientHeight, // Maximum y value\n                                    event.clientY - this.offset.y,\n                                ),\n                            );\n\n                            this.updatePosition();\n                        }\n                    },\n                },\n                {\n                    target: this.element,\n                    type: 'mousedown',\n                    fn: (event) => {\n                        this.moving = true;\n                        this.offset.x = event.clientX - this.x;\n                        this.offset.y = event.clientY - this.y;\n                    },\n                },\n                {\n                    target: document,\n                    type: 'mouseup',\n                    fn: (event) => {\n                        this.moving = false;\n                    },\n                },\n            );\n            this.mouseEvents.forEach((event) =>\n                event.target.addEventListener(event.type, event.fn),\n            );\n        } else {\n            this.mouseEvents.forEach((event) =>\n                event.target.removeEventListener(event.type, event.fn),\n            );\n        }\n    };\n\n    this.setVisible = function (visible) {\n        this.visible = visible;\n    };\n\n    this.stop = function () {\n        this.enabled = false;\n        this.setEditable(false);\n        this.element.remove();\n\n        RTCPeerConnection = this.originalRTC;\n        peerConnections = [];\n    };\n\n    this.visible = {\n        time: true,\n        resolution: true,\n        FPS: true,\n        latency: true,\n        codec: true,\n        traffic: true,\n        'current-traffic': true,\n        'average-traffic': true,\n        'packets-lost': true,\n        'average-packet-loss': true,\n        'jitter-buffer': true,\n    };\n\n    this.stats = [];\n    this.update = function () {\n        if (this.peerConnections.length > 1) {\n            const index = this.peerConnections.length - 1;\n\n            this.peerConnections[index].getStats().then((_stats) => {\n                this.stats = Array.from(_stats);\n\n                const RTCInboundRTPVideoStream = this.getStat((stat) =>\n                    stat[0].startsWith('RTCInboundRTPVideoStream'),\n                );\n                const RTCIceCandidatePair = this.getStat((stat) =>\n                    stat[0].startsWith('RTCIceCandidatePair'),\n                );\n                const RTCMediaStreamTrack_receiver = this.getStat(\n                    (stat) =>\n                        stat[0].startsWith('RTCMediaStreamTrack_receiver') &&\n                        stat[1].kind === 'video',\n                );\n\n                const resolution = this.getResolution(\n                    RTCMediaStreamTrack_receiver,\n                );\n                const fps = this.getFPS(RTCInboundRTPVideoStream);\n                const latency = this.getLatency(RTCIceCandidatePair) + ' ms';\n                const codec = this.getCodec(RTCInboundRTPVideoStream);\n                const totalTraffic = this.translateBitUnits(\n                    this.getTotalDownload(RTCIceCandidatePair),\n                );\n                const currentTraffic =\n                    this.translateBitUnits(\n                        this.getDownloadSpeed(RTCIceCandidatePair),\n                    ) + '/s';\n                const averageTraffic =\n                    this.translateBitUnits(\n                        this.getAverageDownloadSpeed(RTCIceCandidatePair),\n                    ) + '/s';\n                const packetsLost = this.getPacketsLost(\n                    RTCInboundRTPVideoStream,\n                );\n                const averagePacketLoss =\n                    this.getAveragePacketLoss(RTCInboundRTPVideoStream) + '%';\n                const jitterBuffer =\n                    this.getJitterBuffer(RTCMediaStreamTrack_receiver) + ' ms';\n\n                let html = '';\n                if (this.visible['time']) {\n                    let time = new Date();\n                    let timeString = time.toLocaleString();\n                    html += `<h5>${timeString}</h5>`;\n                }\n\n                html += '<ul>';\n                if (this.visible['resolution']) {\n                    html += `<li>Resolution: ${resolution.width}x${resolution.height}</li>`;\n                }\n\n                if (this.visible['FPS']) {\n                    html += `<li>FPS: ${fps}</li>`;\n                }\n\n                if (this.visible['latency']) {\n                    html += `<li>Latency: ${latency}</li>`;\n                }\n\n                if (this.visible['codec']) {\n                    html += `<li>Codec: ${codec}</li>`;\n                }\n\n                if (this.visible['traffic']) {\n                    html += `<li>Total Traffic: ${totalTraffic}</li>`;\n                }\n\n                if (this.visible['current-traffic']) {\n                    html += `<li>Current Traffic: ${currentTraffic}</li>`;\n                }\n\n                if (this.visible['average-traffic']) {\n                    html += `<li>Average Traffic: ${averageTraffic}</li>`;\n                }\n\n                if (this.visible['packets-lost']) {\n                    html += `<li>Packets Lost: ${packetsLost}</li>`;\n                }\n\n                if (this.visible['average-packet-loss']) {\n                    html += `<li>Average Packet Loss: ${averagePacketLoss}</li>`;\n                }\n\n                if (this.visible['jitter-buffer']) {\n                    html += `<li>Jitter Buffer: ${jitterBuffer}</li>`;\n                }\n\n                html += '</ul>';\n\n                this.element.innerHTML = html;\n            });\n        } else {\n            this.startTime = Date.now();\n            this.element.innerHTML = `\n                <h5>Error</h5>\n                <p>\n                    Uh oh, something went terribly wrong. \n                    This feature is still very unstable and \n                    the developer knows there are problems, \n                    please understand that this issue is \n                    actively being worked on.\n                </p>\n                <p class='stadiaplus_muted'>Error Code: 001 - Stats unavailable</p>\n            `;\n        }\n\n        if (this.enabled) {\n            setTimeout(() => {\n                this.update();\n            }, 1000);\n        }\n    };\n\n    this.getStat = function (filter) {\n        return this.stats.find(filter)[1];\n    };\n\n    this.translateBitUnits = function (value) {\n        const units = ['B', 'kB', 'MB', 'GB'];\n\n        let i = 0;\n        while (value / 1000 >= 1) {\n            i++;\n            value /= 1000;\n        }\n\n        return (\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\n        );\n    };\n\n    this.getLatency = function (RTCIceCandidatePair) {\n        return RTCIceCandidatePair.currentRoundTripTime * 1000;\n    };\n\n    this.getJitterBuffer = function (RTCMediaStreamTrack_receiver) {\n        return (\n            (RTCMediaStreamTrack_receiver.jitterBufferDelay * 1000) /\n            RTCMediaStreamTrack_receiver.jitterBufferEmittedCount\n        ).toPrecision(4);\n    };\n\n    this.getPacketsLost = function (RTCInboundRTPVideoStream) {\n        return RTCInboundRTPVideoStream.packetsLost;\n    };\n\n    this.getAveragePacketLoss = function (RTCInboundRTPVideoStream) {\n        return (\n            (RTCInboundRTPVideoStream.packetsLost /\n                (RTCInboundRTPVideoStream.packetsReceived +\n                    RTCInboundRTPVideoStream.packetsLost)) *\n            100\n        ).toPrecision(2);\n    };\n\n    this.lastDownload = 0;\n    this.getDownloadSpeed = function (RTCIceCandidatePair) {\n        const download = this.getTotalDownload(RTCIceCandidatePair);\n        const speed = download - this.lastDownload;\n        this.lastDownload = download;\n        return speed;\n    };\n\n    this.getAverageDownloadSpeed = function (RTCIceCandidatePair) {\n        return (\n            this.getTotalDownload(RTCIceCandidatePair) /\n            (this.timeSinceStart() / 1000)\n        );\n    };\n\n    this.getTotalDownload = function (RTCIceCandidatePair) {\n        return RTCIceCandidatePair.bytesReceived;\n    };\n\n    this.getResolution = function (RTCMediaStreamTrack_receiver) {\n        return {\n            width: RTCMediaStreamTrack_receiver.frameWidth,\n            height: RTCMediaStreamTrack_receiver.frameHeight,\n        };\n    };\n\n    this.getCodec = function (RTCInboundRTPVideoStream) {\n        const codecStat = this.getStat(\n            (stat) => stat[0] === RTCInboundRTPVideoStream.codecId,\n        );\n        return codecStat.mimeType.substring('video/'.length);\n    };\n\n    this.lastFrames = 0;\n    this.getFPS = function (RTCInboundRTPVideoStream) {\n        const fps = RTCInboundRTPVideoStream.framesDecoded - this.lastFrames;\n        this.lastFrames = RTCInboundRTPVideoStream.framesDecoded;\n        return fps;\n    };\n\n    this.timeSinceStart = function () {\n        return Date.now() - this.startTime;\n    };\n};\n\nStadiaPlusMonitor = new MonitorRunnable();\n");

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
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language */ "./src/Language.ts");

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
        this.tag = "component";
    }
    /**
     * This method is called whenever the component should start loading.
     */
    Component.prototype.load = function () {
        this.name = _Language__WEBPACK_IMPORTED_MODULE_0__["Language"].get(this.tag + '.name');
        this.id = 'stadiaplus_' + Math.floor(Math.random() * 999999);
        this.updateRenderer();
        this.onStart();
    };
    Component.prototype.updateRenderer = function () {
        var renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        this.renderer = Array.from(renderers).find(function (renderer) { return renderer.style.opacity !== '0'; });
    };
    /**
     * Returns whether this Component has an element in the DOM
     *
     * @returns {boolean}
     */
    Component.prototype.exists = function () {
        if (this.renderer.style.opacity === '0')
            return false;
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
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/Storage.ts");

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
        var _this = this;
        _Storage__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].COMPONENTS.get(function (result) {
            var storage = result.components;
            if (storage === undefined) {
                storage = {};
            }
            for (var _i = 0, _a = _this.components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (storage[component.tag] === undefined) {
                    storage[component.tag] = {};
                }
                if (storage[component.tag].enabled === undefined) {
                    storage[component.tag].enabled = true;
                }
                component.enabled = storage[component.tag].enabled;
                if (component.enabled && !component.active)
                    component.load();
            }
            ;
            _Storage__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].COMPONENTS.set(storage);
            _this.startTimer();
        });
    };
    /**
     * Stops the component loader.
     */
    ComponentLoader.prototype.stop = function () {
        this.components.forEach(function (component) {
            if (component.active)
                component.unload();
        });
        this.stopTimer();
    };
    ComponentLoader.prototype.startTimer = function () {
        var self = this;
        this.timer = setInterval(function () {
            self.components.forEach(function (component) {
                if (component.active)
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

/***/ "./src/Language.ts":
/*!*************************!*\
  !*** ./src/Language.ts ***!
  \*************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/Storage.ts");
/* harmony import */ var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/en-US.json */ "./src/lang/en-US.json");
var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/en-US.json */ "./src/lang/en-US.json", 1);
/* harmony import */ var _lang_sv_SE_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang/sv-SE.json */ "./src/lang/sv-SE.json");
var _lang_sv_SE_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/sv-SE.json */ "./src/lang/sv-SE.json", 1);
/* harmony import */ var _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang/fr-FR.json */ "./src/lang/fr-FR.json");
var _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/fr-FR.json */ "./src/lang/fr-FR.json", 1);
/* harmony import */ var _lang_it_IT_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang/it-IT.json */ "./src/lang/it-IT.json");
var _lang_it_IT_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/it-IT.json */ "./src/lang/it-IT.json", 1);
/* harmony import */ var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lang/es-ES.json */ "./src/lang/es-ES.json");
var _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/es-ES.json */ "./src/lang/es-ES.json", 1);
/* harmony import */ var _lang_de_DE_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lang/de-DE.json */ "./src/lang/de-DE.json");
var _lang_de_DE_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/de-DE.json */ "./src/lang/de-DE.json", 1);
/* harmony import */ var _lang_uk_UA_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lang/uk-UA.json */ "./src/lang/uk-UA.json");
var _lang_uk_UA_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/uk-UA.json */ "./src/lang/uk-UA.json", 1);
/* harmony import */ var _lang_eu_ES_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lang/eu-ES.json */ "./src/lang/eu-ES.json");
var _lang_eu_ES_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/eu-ES.json */ "./src/lang/eu-ES.json", 1);
/* harmony import */ var _lang_gl_ES_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lang/gl-ES.json */ "./src/lang/gl-ES.json");
var _lang_gl_ES_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/gl-ES.json */ "./src/lang/gl-ES.json", 1);
/* harmony import */ var _lang_ru_RU_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lang/ru-RU.json */ "./src/lang/ru-RU.json");
var _lang_ru_RU_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/ru-RU.json */ "./src/lang/ru-RU.json", 1);
/* harmony import */ var _lang_nl_BE_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lang/nl-BE.json */ "./src/lang/nl-BE.json");
var _lang_nl_BE_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/nl-BE.json */ "./src/lang/nl-BE.json", 1);













var chrome = window.chrome;
var Language = /** @class */ (function () {
    function Language(name, tag, data) {
        this.data = {};
        this.tag = tag;
        this.name = name;
        this.data = data;
    }
    Language.prototype.register = function () {
        Language.languages.push(this);
    };
    Language.prototype.get = function (name, vars) {
        var keys = name.split('.');
        var val = this.data;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            val = val[key];
        }
        if (vars !== undefined) {
            for (var _var in vars) {
                val = val.split('{{' + _var + '}}').join(vars[_var]);
            }
        }
        return val;
    };
    Language.prototype.setDefault = function () {
        Language.default = this;
    };
    Language.load = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        // Check for the first language that isn't equal to the default
        _Storage__WEBPACK_IMPORTED_MODULE_1__["SyncStorage"].LANGUAGE.get(function (result) {
            var language = result[_Storage__WEBPACK_IMPORTED_MODULE_1__["SyncStorage"].LANGUAGE.tag];
            if (language === undefined || language === 'automatic') {
                language = _this.automatic();
            }
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Using language configuration ' + language);
            _this.languages.forEach(function (lang, index) {
                if (lang.tag === language) {
                    _this.current = lang;
                }
                if (index === _this.languages.length - 1) {
                    callback();
                }
            });
        });
    };
    Language.set = function (language) {
        this.current = language;
    };
    Language.automatic = function () {
        var _this = this;
        return window.navigator.languages.find(function (l) {
            return l.length >= 5 &&
                (_this.default === undefined || l !== _this.default.tag);
        });
    };
    Language.init = function () {
        var lang_deDE = new Language('Deutsche (DE)', 'de-DE', _lang_de_DE_json__WEBPACK_IMPORTED_MODULE_7__);
        lang_deDE.register();
        var lang_esES = new Language('Español (ES)', 'es-ES', _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_6__);
        lang_esES.register();
        var lang_enUS = new Language('English (US)', 'en-US', _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2__);
        lang_enUS.register();
        lang_enUS.setDefault();
        // const lang_enSTEEF = new Language('English (Steef)', 'en-STEEF', lang_enSTEEF_data);
        // lang_enSTEEF.register();
        var lang_frFR = new Language('Français (FR)', 'fr-FR', _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_4__);
        lang_frFR.register();
        var lang_itIT = new Language('Italiano (IT)', 'it-IT', _lang_it_IT_json__WEBPACK_IMPORTED_MODULE_5__);
        lang_itIT.register();
        var lang_svSE = new Language('Svenska (SE)', 'sv-SE', _lang_sv_SE_json__WEBPACK_IMPORTED_MODULE_3__);
        lang_svSE.register();
        var lang_ukUA = new Language('Українська (UA)', 'uk-UA', _lang_uk_UA_json__WEBPACK_IMPORTED_MODULE_8__);
        lang_ukUA.register();
        var lang_euES = new Language('Euskara (EU)', 'eu-ES', _lang_eu_ES_json__WEBPACK_IMPORTED_MODULE_9__);
        lang_euES.register();
        var lang_glES = new Language('Galego (GL)', 'gl-ES', _lang_gl_ES_json__WEBPACK_IMPORTED_MODULE_10__);
        lang_glES.register();
        var lang_ruRU = new Language('русский (RU)', 'ru-RU', _lang_ru_RU_json__WEBPACK_IMPORTED_MODULE_11__);
        lang_ruRU.register();
        var lang_nlBE = new Language('Nederlands (BE)', 'nl-BE', _lang_nl_BE_json__WEBPACK_IMPORTED_MODULE_12__);
        lang_nlBE.register();
    };
    Language.get = function (name, vars) {
        if (this.current === undefined) {
            this.current = this.default;
        }
        var val = this.current.get(name, vars);
        return val;
    };
    Language.languages = [];
    return Language;
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

/***/ "./src/Storage.ts":
/*!************************!*\
  !*** ./src/Storage.ts ***!
  \************************/
/*! exports provided: LocalStorage, SyncStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncStorage", function() { return SyncStorage; });
var chrome = window.chrome;
var LocalStorage = /** @class */ (function () {
    function LocalStorage(name, tag) {
        this.name = name;
        this.tag = tag;
    }
    LocalStorage.prototype.get = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.get([this.tag], callback);
    };
    LocalStorage.prototype.set = function (value, callback) {
        var _a;
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.set((_a = {}, _a[this.tag] = value, _a), callback);
    };
    LocalStorage.get = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.get(storages.map(function (e) { return e.tag; }), callback);
    };
    LocalStorage.set = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.local.get(storages, callback);
    };
    LocalStorage.clear = function () {
        chrome.storage.local.clear();
    };
    LocalStorage.CODEC = new LocalStorage('Codec', 'codec');
    LocalStorage.RESOLUTION = new LocalStorage('Resolution', 'resolution');
    LocalStorage.MONITOR_STATS = new LocalStorage('Monitor Stats', 'monitor-stats');
    return LocalStorage;
}());

var SyncStorage = /** @class */ (function () {
    function SyncStorage(name, tag) {
        this.name = name;
        this.tag = tag;
    }
    SyncStorage.prototype.get = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.get([this.tag], callback);
    };
    SyncStorage.prototype.set = function (value, callback) {
        var _a;
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.set((_a = {}, _a[this.tag] = value, _a), callback);
    };
    SyncStorage.get = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.get(storages.map(function (e) { return e.tag; }), callback);
    };
    SyncStorage.set = function (storages, callback) {
        if (callback === void 0) { callback = (function () { }); }
        chrome.storage.sync.set(storages, callback);
    };
    SyncStorage.clear = function () {
        chrome.storage.sync.clear();
    };
    SyncStorage.LIBRARY_GAMES = new SyncStorage('Library Games', 'games');
    SyncStorage.LIBRARY_SORT_ORDER = new SyncStorage('Sort Order', 'sort-order');
    SyncStorage.LIBRARY_SORT_DIRECTION = new SyncStorage('Sort Direction', 'sort-direction');
    SyncStorage.LANGUAGE = new SyncStorage('Language', 'language');
    SyncStorage.COMPONENTS = new SyncStorage('Components', 'components');
    return SyncStorage;
}());



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
        return window.location.pathname.indexOf('store') !== -1 && !this.isInStoreDetail();
    };
    Util.prototype.isInStoreDetail = function () {
        return window.location.pathname.indexOf('store/details') !== -1;
    };
    Util.prototype.desandbox = function (javascript) {
        var script = document.createElement('script');
        script.innerHTML = javascript;
        document.body.appendChild(script);
        script.remove();
    };
    return Util;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Util());


/***/ }),

/***/ "./src/WebDatabase.ts":
/*!****************************!*\
  !*** ./src/WebDatabase.ts ***!
  \****************************/
/*! exports provided: WebDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDatabase", function() { return WebDatabase; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");

var WebDatabase = /** @class */ (function () {
    function WebDatabase(url) {
        this.url = url;
    }
    WebDatabase.prototype.connect = function (callback) {
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
    WebDatabase.prototype.getConnection = function () {
        if (!this.connected) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error: Not connected to the database');
            return null;
        }
        return this.connection;
    };
    WebDatabase.prototype.disconnect = function () {
        this.connection = null;
        this.connected = false;
    };
    WebDatabase.prototype.reconnect = function (callback) {
        this.disconnect();
        this.connect(callback);
    };
    return WebDatabase;
}());



/***/ }),

/***/ "./src/components/AllowWindowedMode.ts":
/*!*********************************************!*\
  !*** ./src/components/AllowWindowedMode.ts ***!
  \*********************************************/
/*! exports provided: AllowWindowedMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowWindowedMode", function() { return AllowWindowedMode; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
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
 * A button allowing users to play Stadia in windowed mode.
 *
 * @export the AllowWindowedMode type.
 * @class AllowWindowedMode
 * @extends {Component}
 */
var AllowWindowedMode = /** @class */ (function (_super) {
    __extends(AllowWindowedMode, _super);
    function AllowWindowedMode() {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'allow-windowed-mode';
        /**
         * Whether windowed mode is enabled or not
         */
        _this.windowed = false;
        // Whether events have been added already or not.
        _this.eventsAdded = false;
        var self = _this;
        // Main event, stops built-in fullscreen events from reaching Stadia whenever windowed mode is enabled.
        window.addEventListener('fullscreenchange', function (event) {
            if (self.windowed) {
                event.stopPropagation();
            }
        }, true);
        return _this;
    }
    /**
     * Enters windowed mode.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.enterWindowed = function () {
        this.windowed = true;
        document.exitFullscreen();
    };
    /**
     * Exits windowed mode
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.exitWindowed = function () {
        this.windowed = false;
        document.documentElement.requestFullscreen();
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.onStart = function () {
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('component.enabled', { name: this.name }));
        this.active = true;
        var icon = chrome.runtime.getURL('images/icons/windowed.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.windowed'), this.id);
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.onStop = function () {
        this.exitWindowed();
        this.active = false;
    };
    /**
     * Update button labels and icons to fit current mode.
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.updateButton = function () {
        var icon = chrome.runtime.getURL('images/icons/windowed.svg');
        var icon_exit = chrome.runtime.getURL('images/icons/windowed_exit.svg');
        if (this.windowed) {
            this.button.setIcon(icon_exit);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.fullscreen'));
        }
        else {
            this.button.setIcon(icon);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.windowed'));
        }
    };
    /**
     * Called once every second, updates component elements and variables
     *
     * @memberof AllowWindowedMode
     */
    AllowWindowedMode.prototype.onUpdate = function () {
        var _this = this;
        // If menu is open and a game is playing.
        if (_Util__WEBPACK_IMPORTED_MODULE_4__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_4__["default"].isInGame()) {
            // If the button doesn't already exist in the current renderer
            if (!this.exists()) {
                // Check for new renderers
                this.updateRenderer();
                var self_1 = this;
                // Create the button instance
                this.button.create(function () {
                    // If events are already added, don't add them again
                    if (!_this.eventsAdded) {
                        self_1.button.button.addEventListener('click', function () {
                            if (self_1.windowed) {
                                self_1.exitWindowed();
                            }
                            else {
                                self_1.enterWindowed();
                            }
                            self_1.updateButton();
                        });
                        _this.eventsAdded = true;
                    }
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
    };
    return AllowWindowedMode;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



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
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
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
         * The component tag, used in language files.
         */
        _this.tag = 'clock';
        _this.createElement();
        return _this;
    }
    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     *
     * @memberof Clock
     */
    Clock.prototype.createElement = function () {
        this.element = document.createElement('span');
        this.element.classList.add('stadiaplus_clock');
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Clock
     */
    Clock.prototype.onStart = function () {
        this.active = true;
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { 'name': this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    Clock.prototype.onStop = function () {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { 'name': this.name }));
    };
    /**
     * Called every second, updates the element to match the clock.
     *
     * @memberof Clock
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
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
/* harmony import */ var _ForceResolution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ForceResolution */ "./src/components/ForceResolution.ts");
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
         * The component tag, used in language files.
         */
        _this.tag = 'force-codec';
        /**
         * The current codec.
         */
        _this.codec = Codec.AUTOMATIC;
        _this.tab = tab;
        _this.snackbar = snackbar;
        return _this;
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    ForceCodec.prototype.getStorage = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].CODEC.get(function (result) {
            _this.codec = result.codec;
            callback();
        });
    };
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    ForceCodec.prototype.setStorage = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].CODEC.set(this.codec, callback);
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof ForceCodec
     */
    ForceCodec.prototype.onStart = function () {
        var _this = this;
        this.active = true;
        var self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"codec\">\n                                <option value=\"" + Codec.AUTOMATIC + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('automatic') + "</option>\n                                <option value=\"" + Codec.VP9 + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('vp9') + "</option>\n                                <option value=\"" + Codec.H264 + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('h264') + "</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('apply') + "</a>\n                    </div>\n                    <p class='stadiaplus_muted' id='" + this.id + "-4k-tooltip' style='display: none'>" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('force-codec.4k-tooltip') + "</p>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.codec = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        self.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('snackbar.reload-to-update'));
                    });
                });
                self.getStorage(function () {
                    _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.get(function (result) {
                        self.select.enable();
                        if (result.resolution === _ForceResolution__WEBPACK_IMPORTED_MODULE_7__["Resolution"].UHD_4K) {
                            self.codec = Codec.VP9;
                            self.select.disable();
                            var tooltip = document.getElementById(_this.id + '-4k-tooltip');
                            tooltip.style.display = 'block';
                        }
                        self.select.set(self.codec);
                        ForceCodec.setCodec(self.codec);
                    });
                });
            },
            onReload: function (row) {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
                self.select.set(self.codec);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get("component.enabled", { name: this.name }));
    };
    /**
     * Sets the used Codec
     *
     * @static
     * @param {number} codec
     * @memberof ForceCodec
     */
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
     *
     * @memberof ForceCodec
     */
    ForceCodec.prototype.onStop = function () {
        this.active = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, updates the element to match the clock.
     *
     * @memberof ForceCodec
     */
    ForceCodec.prototype.onUpdate = function () {
    };
    return ForceCodec;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * The different kinds of codecs, represented as numbers.
 *
 * @export the Codec type
 * @class Codec
 */
var Codec = /** @class */ (function () {
    function Codec() {
    }
    /**
     * Automatic codec, let Stadia decide on it's own.
     */
    Codec.AUTOMATIC = 0;
    /**
     * VP9 codec, usually works better than H264 but at the cost of lower quality.
     */
    Codec.VP9 = 1;
    /**
     * H264 codec, high quality and Mac-OS compatible codec but with latency issues.
     */
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
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
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
 * A dropdown allowing changing of the resolution.
 *
 * @export the ForceResolution type.
 * @class ForceResolution
 * @extends {Component}
 */
var ForceResolution = /** @class */ (function (_super) {
    __extends(ForceResolution, _super);
    function ForceResolution(tab, snackbar) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'force-resolution';
        /**
         * The current resolution.
         */
        _this.resolution = Resolution.AUTOMATIC;
        _this.tab = tab;
        _this.snackbar = snackbar;
        _this.getStorage();
        return _this;
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    ForceResolution.prototype.getStorage = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.get(function (result) {
            _this.resolution = result.resolution;
            callback();
        });
    };
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    ForceResolution.prototype.setStorage = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.set(this.resolution, callback);
    };
    /**
     * Called on startup, initializes important variables.
     */
    ForceResolution.prototype.onStart = function () {
        var _this = this;
        this.active = true;
        ForceResolution.setResolution(this.resolution);
        var self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"resolution\">\n                                <option value=\"" + Resolution.AUTOMATIC + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('automatic') + "</option>\n                                <option value=\"" + Resolution.UHD_4K + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('4k') + "</option>\n                                <option value=\"" + Resolution.FHD + "\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('1080p') + "</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('apply') + "</a>\n                    </div>\n\n                    <p class=\"stadiaplus_muted\">" + _Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('force-resolution.note') + "</p>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.resolution = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        self.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('snackbar.reload-to-update'));
                    });
                });
                self.getStorage(function () {
                    _this.select.set(self.resolution);
                });
            },
            onReload: function (row) {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });
                self.select.set(self.resolution);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Sets the user [[Resolution]]
     *
     * @static
     * @param {number} resolution the user Resolution
     * @memberof ForceResolution
     */
    ForceResolution.setResolution = function (resolution) {
        var script = document.createElement('script');
        var height;
        var width;
        switch (resolution) {
            case Resolution.UHD_4K:
                width = 3840;
                height = 2160;
                break;
            case Resolution.FHD:
                width = 1920;
                height = 1080;
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
        this.active = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, updates the element to match the clock.
     */
    ForceResolution.prototype.onUpdate = function () {
    };
    return ForceResolution;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * The different kinds of resolutions, represented as numbers.
 *
 * @export the Resolution type
 * @class Resolution
 */
var Resolution = /** @class */ (function () {
    function Resolution() {
    }
    /**
     * Automatic, let Stadia handle resolutions.
     */
    Resolution.AUTOMATIC = 0;
    /**
     * 4K, or 3840x2160
     */
    Resolution.UHD_4K = 1;
    /**
     * Full HD, or 1920x1080
     */
    Resolution.FHD = 2;
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
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/LibraryFilter.scss */ "./src/components/styles/LibraryFilter.scss");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Checkbox */ "./src/ui/Checkbox.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
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
/**
 * A filtering system allowing hiding and showing specific games in your library as well as ordering them by name.
 *
 * @export the LibraryFilter type
 * @class LibraryFilter
 * @extends {Component}
 */
var LibraryFilter = /** @class */ (function (_super) {
    __extends(LibraryFilter, _super);
    function LibraryFilter(snackbar, database, uuidMap) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'library-filter';
        /**
         * List of games and game data imported from the DOM
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
    LibraryFilter.prototype.wrapperExists = function (uuid) {
        return this.renderer.querySelector('#' + this.id + '-' + uuid);
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
        if (this.wrapperExists(uuid))
            return;
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
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
        icon.style.transformOrigin = "calc(100% - " + element.clientWidth /
            2 + "px) " + element.clientHeight / 2 + "px";
        // When the icon is clicked on
        icon.addEventListener('click', function () {
            var visible = _this.games[uuid].visible;
            // If the game is visible, set it to hidden
            if (visible) {
                _this.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('snackbar.hide-game'));
                _this.games[uuid].visible = false;
            }
            else {
                // Otherwise set it to shown
                _this.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('snackbar.show-game'));
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
            else {
                // Otherwise...
                // ...if the hiding should be animated
                if (animate) {
                    // Fade the game tile out
                    wrapper.classList.add('closing');
                    // After 1 second, hide it
                    setTimeout(function () {
                        wrapper.classList.add('closed');
                    }, 1000);
                }
                else {
                    // Otherwise
                    // Hide the element normally
                    wrapper.classList.add('closed');
                }
            }
        }
        else {
            // If the game is visible
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
        if (callback === void 0) { callback = function () { }; }
        if (!this.active) {
            this.games = {};
            callback();
        }
        _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].get([
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES,
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER,
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION,
        ], function (result) {
            _this.games = result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] !== undefined ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] : {};
            _this.order =
                result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] !== undefined
                    ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER.tag]
                    : FilterOrder.RECENT;
            _this.direction =
                result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag] !== undefined
                    ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag]
                    : OrderDirection.ASCENDING;
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
        var _a;
        if (callback === void 0) { callback = function () { }; }
        if (!this.active) {
            callback();
            return;
        }
        _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].set((_a = {},
            _a[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] = this.games,
            _a[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER.tag] = this.order,
            _a[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag] = this.direction,
            _a), callback);
    };
    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.onStart = function () {
        this.active = true;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.enabled', { name: this.name }));
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
        // When the show all checkbox is clicked, toggle the showAll variable and update the games
        this.checkbox.addEventListener('click', function () {
            _this.showAll = _this.checkbox.checked;
            _this.updateAllGames();
        });
        var dir = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        // Toggle the sort direction
        dir.addEventListener('click', function () {
            _this.updateSortDirection();
            event.stopPropagation();
        });
    };
    LibraryFilter.prototype.updateSortDirection = function () {
        var element = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        if (element) {
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
        this.active = false;
        document
            .querySelectorAll('.stadiaplus_libraryfilter-icon')
            .forEach(function (e) { return e.remove(); });
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Sorts the game list according to the current sort order.
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.sortGames = function () {
        var arr = Array.from(this.gameTiles).map(function (e) { return e.parentElement; }); // Get all wrappers as an array
        arr = arr.sort(FilterOrder.getSorter(this.order));
        if (this.direction === OrderDirection.ASCENDING) {
            arr = arr.reverse();
        }
        arr.forEach(function (el) {
            el.parentElement.prepend(el);
        });
    };
    /**
     * Runs every second, creates and updates elements.
     *
     * @memberof LibraryFilter
     */
    LibraryFilter.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInHome()) {
            if (!this.exists()) {
                this.updateRenderer();
                var container = this.renderer.querySelector('.CVVXfc.YYy3Zb');
                if (!container)
                    return;
                this.filterBar.id = this.id;
                this.filterBar.innerHTML = "\n                    <span class=\"material-icons\">\n                        sort\n                    </span>\n                    <select name=\"order\">\n                        <option value=\"" + FilterOrder.RECENT + "\">" + _Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.recent') + "</option>\n                        <option value=\"" + FilterOrder.ALPHABETICAL + "\">" + _Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.alphabetical') + "</option>\n                        <option value=\"" + FilterOrder.RANDOM + "\">" + _Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.random') + "</option>\n                    </select>\n                    <span id='" + (this.filterBar.id +
                    '-direction') + "' class=\"material-icons ascending stadiaplus_filterbar-direction\"></span>\n                ";
                var _a = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"](_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.show-hidden'))
                    .setBigger(true)
                    .setShape(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["CheckboxShape"].CURVED)
                    .build(), pretty = _a.pretty, checkbox = _a.checkbox;
                pretty.classList.add('stadiaplus_filterbar-checkbox');
                this.filterBar.appendChild(pretty);
                this.checkbox = checkbox;
                this.gameTiles = this.renderer.querySelectorAll('.GqLi4d');
                container.appendChild(this.filterBar);
                this.createAllWrappers();
                // Style the custom select box in the filter bar
                this.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](this.filterBar.querySelector('select'), { placeholder: FilterOrder.RECENT });
                this.select.set(this.order);
                this.addFilterBarEvents();
            }
        }
    };
    return LibraryFilter;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * Different types of filtering, represented as numbers
 *
 * @export the FilterOrder type
 * @class FilterOrder
 */
var FilterOrder = /** @class */ (function () {
    function FilterOrder() {
    }
    /**
     * Get the sorting method of the inputed order.
     *
     * @static
     * @returns a function sorting games by the inputed order.
     * @param {FilterOrder} order
     * @memberof FilterOrder
     */
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
    /**
     * Sort by recent games.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
    FilterOrder.sortRecent = function (a, b) {
        return 1;
    };
    /**
     * Sort alphabetically.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
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
    /**
     * Default Stadia sorting, recent/new games.
     *
     * @static
     * @memberof FilterOrder
     */
    FilterOrder.RECENT = 0;
    /**
     * Alphabetical order.
     *
     * @static
     * @memberof FilterOrder
     */
    FilterOrder.ALPHABETICAL = 1;
    /**
     * Random order.
     *
     * @static
     * @memberof FilterOrder
     */
    FilterOrder.RANDOM = 2;
    return FilterOrder;
}());

/**
 * Enum containing different order directions
 *
 * @export the OrderDirection type.
 * @enum {number}
 */
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
/* harmony import */ var _styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/NetworkMonitor.scss */ "./src/components/styles/NetworkMonitor.scss");
/* harmony import */ var _styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _raw_loader_MonitorRunnable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raw-loader!../MonitorRunnable */ "./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/Checkbox */ "./src/ui/Checkbox.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Storage */ "./src/Storage.ts");
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






// Import the Monitor runnable as a raw string
// @ts-ignore




var _a = window, chrome = _a.chrome, RTCPeerConnection = _a.RTCPeerConnection;
/**
 * A network monitor allowing users to see their network statistics while playing a game.
 *
 * @export the NetworkMonitor type.
 * @class NetworkMonitor
 * @extends {Component}
 */
var NetworkMonitor = /** @class */ (function (_super) {
    __extends(NetworkMonitor, _super);
    function NetworkMonitor() {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'network-monitor';
        /**
         * Whether the component is active or not.
         */
        _this.active = false;
        /**
         * Whether the monitor is open or not.
         */
        _this.monitorOpen = false;
        /**
         * Visible network statistics.
         */
        _this.visible = {
            'time': true,
            'resolution': true,
            'FPS': true,
            'latency': true,
            'codec': true,
            'traffic': true,
            'current-traffic': true,
            'average-traffic': true,
            'packets-lost': true,
            'average-packet-loss': true,
            'jitter-buffer': true,
        };
        /**
         * Which order the network statistics show up in.
         */
        _this.orderMap = [
            'time',
            'resolution',
            'FPS',
            'latency',
            'codec',
            'traffic',
            'current-traffic',
            'average-traffic',
            'packets-lost',
            'average-packet-loss',
            'jitter-buffer'
        ];
        _this.element = document.createElement('div');
        _this.element.classList.add('stadiaplus_network-monitor');
        document.addEventListener('DOMContentLoaded', function () {
            _this.startRunnable();
        });
        return _this;
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]].
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.createUI = function () {
        var _this = this;
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"](_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.name'), "\n            <div class='CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button stadiaplus_networkmonitor-toggle-button' id='" + this.id + "-togglebutton'>Network Monitor</div>\n            <hr>\n            <h6>" + _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.heading-visible') + "</h6>\n            <ul id='" + this.id + "-visiblelist'></ul>\n            <hr>\n            <p class='stadiaplus_muted'>\n                <strong>Why is my network speed so much lower than normal?</strong></br></br>\n                The statistics shown in the network monitor have changed units from bits (b) to bytes (B). This means the statistics in 2.2 and later will be around 1/8 of what they were in 2.1.\n            </p>\n            ", this.id);
        this.component.element.classList.add('stadiaplus_networkmonitor-tab');
        var icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.button-label'), this.id + '-button');
        this.getStorage(function () { _this.updateVisible(); });
    };
    /**
     * Start the network monitor runnable.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.startRunnable = function () {
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox(_raw_loader_MonitorRunnable__WEBPACK_IMPORTED_MODULE_6__["default"]);
    };
    /**
     * Open the monitor.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.openMonitor = function () {
        this.monitorOpen = true;
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.start()');
    };
    /**
     * Close the monitor.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.closeMonitor = function () {
        this.monitorOpen = false;
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.stop()');
    };
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.getStorage = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.get(function (result) {
            if (result[_Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.tag]) {
                _this.visible = result[_Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.tag];
            }
            callback();
        });
    };
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.setStorage = function (callback) {
        if (callback === void 0) { callback = (function () { }); }
        _Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.set(this.visible, callback);
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.onStart = function () {
        this.active = true;
        this.startRunnable();
        this.createUI();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.onStop = function () {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        this.closeMonitor();
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor = null');
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Updates which statistics should be visible.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.updateVisible = function () {
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox("StadiaPlusMonitor.setVisible(" + JSON.stringify(this.visible) + ")");
    };
    /**
     * Called every second, makes sure to create components if they don't already exist.
     *
     * @memberof NetworkMonitor
     */
    NetworkMonitor.prototype.onUpdate = function () {
        var _this = this;
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                var self_1 = this;
                this.updateRenderer();
                this.component.create();
                this.component.onOpen(function () {
                    _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.setEditable(true)');
                });
                this.component.onClose(function () {
                    _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.setEditable(false)');
                });
                var list = document.getElementById(this.id + '-visiblelist');
                var _loop_1 = function (key) {
                    var name_1 = key.replace(/-/g, ' ').split(' ').map(function (name) { return name.substring(0, 1).toUpperCase() + name.substring(1); }).join(' ');
                    var value = this_1.visible[key];
                    var item = document.createElement('li');
                    var _a = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"](name_1).setBigger(true).setAnimation(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxAnimation"].SMOOTH).build(), pretty = _a.pretty, checkbox = _a.checkbox;
                    pretty.classList.add('stadiaplus_networkmonitor-checkbox');
                    item.appendChild(pretty);
                    list.appendChild(item);
                    checkbox.checked = value;
                    checkbox.addEventListener('click', function () {
                        _this.visible[key] = checkbox.checked;
                        _this.updateVisible();
                        _this.setStorage();
                    });
                };
                var this_1 = this;
                for (var _i = 0, _a = this.orderMap; _i < _a.length; _i++) {
                    var key = _a[_i];
                    _loop_1(key);
                }
                var toggleButton_1 = document.getElementById(this.id + '-togglebutton');
                toggleButton_1.classList.toggle('shown', this.monitorOpen);
                toggleButton_1.addEventListener('click', function () {
                    if (!_this.monitorOpen) {
                        _this.openMonitor();
                    }
                    else {
                        _this.closeMonitor();
                    }
                    toggleButton_1.classList.toggle('shown', _this.monitorOpen);
                });
                this.button.create(function () {
                    self_1.button.button.addEventListener('click', function () {
                        self_1.component.openTab();
                    });
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if (this.component.open) {
            this.component.closeTab();
        }
        if (!_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame() && document.querySelector('body>.stadiaplus_networkmonitor')) {
            this.closeMonitor();
        }
    };
    return NetworkMonitor;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/PasteFromClipboard.ts":
/*!**********************************************!*\
  !*** ./src/components/PasteFromClipboard.ts ***!
  \**********************************************/
/*! exports provided: Platform, PasteFromClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasteFromClipboard", function() { return PasteFromClipboard; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
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


var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.WINDOWS = "Win32";
    Platform.MACOS = "MacIntel";
    return Platform;
}());

var PasteFromClipboard = /** @class */ (function (_super) {
    __extends(PasteFromClipboard, _super);
    function PasteFromClipboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tag = 'paste-from-clipboard';
        return _this;
    }
    /**
     * Called on startup, initializes important variables.
     */
    PasteFromClipboard.prototype.onStart = function () {
        this.active = true;
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    PasteFromClipboard.prototype.onStop = function () {
        this.active = false;
    };
    /**
     * Called once every second.
     */
    PasteFromClipboard.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        if (_Util__WEBPACK_IMPORTED_MODULE_1__["default"].isInGame()) {
            this.updateRenderer();
            var input = this.renderer.getElementsByTagName('input')[0];
            if (input != this.target) {
                if (undefined != this.target) {
                    this.target.removeEventListener('keydown', this.eventListener.bind(this));
                }
                this.target = input;
                this.target.addEventListener('keydown', this.eventListener.bind(this));
            }
        }
    };
    /**
     *  @param event
     */
    PasteFromClipboard.prototype.eventListener = function (event) {
        var ctrlKey;
        switch (navigator.platform) {
            case Platform.WINDOWS:
                ctrlKey = event.ctrlKey;
                break;
            case Platform.MACOS:
                ctrlKey = event.metaKey;
                break;
            default:
                ctrlKey = event.ctrlKey;
                break;
        }
        if (ctrlKey && 'KeyV' == event.code) {
            navigator.clipboard.readText().then(function (data) {
                event.target.dispatchEvent(new InputEvent('input', {
                    // InputEventInit
                    data: data,
                    inputType: "insertText",
                    isComposing: false,
                    // UIEventInit
                    view: null,
                    // EventInit
                    bubbles: true,
                    cancelable: false,
                    composed: true,
                }));
            }.bind(this));
        }
    };
    return PasteFromClipboard;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Ratings.ts":
/*!***********************************!*\
  !*** ./src/components/Ratings.ts ***!
  \***********************************/
/*! exports provided: Ratings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ratings", function() { return Ratings; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_Ratings_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Ratings.scss */ "./src/components/styles/Ratings.scss");
/* harmony import */ var _styles_Ratings_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Ratings_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
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
 * A component adding Metacritic ratings to every Stadia game.
 *
 * @export the Ratings type
 * @class Ratings
 * @extends {Component}
 */
var Ratings = /** @class */ (function (_super) {
    __extends(Ratings, _super);
    function Ratings(database, uuidMap) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'ratings';
        /**
         * The value from each bound in which a game will get 0 or 5 stars.
         */
        _this.graceAmount = 10;
        /**
         * The maximum number of stars to award.
         */
        _this.maxStars = 5;
        _this.database = database;
        _this.uuidMap = uuidMap;
        return _this;
    }
    /**
     * Creates the rating element.
     *
     * @memberof Ratings
     */
    Ratings.prototype.createElement = function () {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_rating', 'material-icons');
    };
    /**
     * The current game UUID.
     *
     * @returns the game UUID as a string.
     * @memberof Ratings
     */
    Ratings.prototype.getUUID = function () {
        return location.href.substring('https://stadia.google.com/store/details/'.length, 'https://stadia.google.com/store/details/'.length + 36);
    };
    /**
     * Updates the current rating, fetching it from the database.
     *
     * @memberof Ratings
     */
    Ratings.prototype.updateRating = function () {
        var uuid = this.getUUID();
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
        var entry = connection[map[uuid]];
        this.element.setAttribute('data-rating', entry[6]);
    };
    /**
     * Calculates how many stars a game should have based on it's rating.
     *
     * @param {number} rating the game's rating.
     * @returns {string[]} an array of icon strings, being either "star", "star_half" or "star_outline".
     * @memberof Ratings
     */
    Ratings.prototype.getStars = function (rating) {
        var outputStars = [];
        // Clamps the rating to values between 0 and 1,
        // where (0 + graceAmount) is 0 and (100 - graceAmount) is 1
        var clampedR = (rating / 100) * (1 + (this.graceAmount / 100) * 2) - (this.graceAmount / 100);
        for (var i = 0, r = clampedR; i < this.maxStars; i += 1, r -= 1 / this.maxStars) {
            if (r >= 1 / this.maxStars) {
                outputStars.push('star');
            }
            else if (r >= 0) {
                outputStars.push('star_half');
            }
            else {
                outputStars.push('star_outline');
            }
        }
        return outputStars;
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof ForceCodec
     */
    Ratings.prototype.onStart = function () {
        this.active = true;
        this.createElement();
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    Ratings.prototype.onStop = function () {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, updates the rating element to make sure it always displays the correct value.
     *
     * @memberof Clock
     */
    Ratings.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInStoreDetail()) {
            if (!this.exists()) {
                this.updateRating();
                this.updateRenderer();
                var rating = parseInt(this.element.getAttribute('data-rating'));
                var stars = this.getStars(rating);
                if (rating > 0) {
                    var nextSibling = this.renderer.querySelector('.ZzBJSb > .BMUnfd');
                    if (nextSibling === null)
                        return;
                    nextSibling.parentNode.insertBefore(this.element, nextSibling);
                    this.element.innerHTML = "\n                        " + stars.join(' ') + "\n        \n                        <div class=\"stadiaplus_rating-tooltip\">\n                            " + rating + " / 100 (" + _Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('ratings.source-name') + ")\n                        </div>\n                    ";
                }
            }
        }
    };
    return Ratings;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/StoreFilter.ts":
/*!***************************************!*\
  !*** ./src/components/StoreFilter.ts ***!
  \***************************************/
/*! exports provided: StoreFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFilter", function() { return StoreFilter; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_StoreFilter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/StoreFilter.scss */ "./src/components/styles/StoreFilter.scss");
/* harmony import */ var _styles_StoreFilter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_StoreFilter_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
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
 * A search bar displayed on the store page of Stadia.
 *
 * @export the StoreFilter type.
 * @class StoreFilter
 * @extends {Component}
 */
var StoreFilter = /** @class */ (function (_super) {
    __extends(StoreFilter, _super);
    function StoreFilter(database, uuidMap) {
        var _this = _super.call(this) || this;
        /**
         * The component tag, used in language files.
         */
        _this.tag = 'store-filter';
        /**
         * An array of all game elements.
         */
        _this.games = [];
        _this.database = database;
        _this.uuidMap = uuidMap;
        return _this;
    }
    /**
     * Creates the search bar and necessary elements/variables.
     *
     * @memberof StoreFilter
     */
    StoreFilter.prototype.createElement = function () {
        var _this = this;
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_storefilter');
        this.element.id = this.id;
        this.element.innerHTML = "\n            <div class='bar'>\n                <input type='text' placeholder=\"" + connection[Math.floor(Math.random() * connection.length)][1] + "...\" id='" + this.id + "-search'>\n            </div>\n            <div class='games' id='" + this.id + "-games'>\n\n            </div>\n        ";
        Object.keys(map).forEach(function (key) {
            var entry = connection[map[key]];
            var element = document.createElement('a');
            element.classList.add('stadiaplus_storefilter-game');
            element.innerHTML = "\n                <img src='https://loremflickr.com/640/360'>\n                <div class='detail'>\n                    <h5 class='name'>Lorem Ipsum</h5>\n                    <span class='stadiaplus_muted tags'></span>\n                </div>\n            ";
            element.setAttribute('data-uuid', key);
            element.setAttribute('data-name', entry[1]);
            element.setAttribute('data-tags', entry[2]);
            var url = "https://stadia.google.com";
            var locArr = location.href.split('/');
            if (locArr.length > 5) {
                url = locArr.slice(0, 5).join('/') + '/';
                url = url.substring(0, url.length + (url.endsWith('/') ? -1 : 0));
            }
            var storeId = entry[0].match(/https:\/\/stadia.google.com\/store\/details\/([0-9a-z/]+)/)[1];
            element.setAttribute('href', url + '/store/details/' + storeId);
            element.setAttribute('data-img', 'https://stadiagamedb.com/' + entry[0].match(/(images\/posters\/[a-z0-9_.-]+.png)/g));
            _this.games.push(element);
        });
    };
    /**
     * Adds the input events to the search bar.
     *
     * @memberof StoreFilter
     */
    StoreFilter.prototype.addEvents = function () {
        var _this = this;
        this.searchField.addEventListener('input', function () {
            _this.search(_this.searchField.value);
        });
    };
    /**
     * Searches the game list for a specific string and shows whichever games fit.
     *
     * @param {string} query the string to search for.
     * @memberof StoreFilter
     */
    StoreFilter.prototype.search = function (query) {
        this.games.forEach(function (game) {
            var name = game.getAttribute('data-name').toLowerCase();
            game.classList.toggle('shown', query.length > 0 && name.indexOf(query.toLowerCase()) !== -1);
        });
    };
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Clock
     */
    StoreFilter.prototype.onStart = function () {
        this.active = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    StoreFilter.prototype.onStop = function () {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, makes sure the search bar only exists when it's supposed to and works properly even if accidentally destroyed.
     *
     * @memberof Clock
     */
    StoreFilter.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInStore()) {
            if (!this.exists()) {
                this.updateRenderer();
                var container = this.renderer.querySelector('.nWmtLd');
                if (container === null)
                    return;
                container.prepend(this.element);
                var gameContainer_1 = document.getElementById(this.id + '-games');
                this.games.forEach(function (game) {
                    gameContainer_1.appendChild(game);
                    var image = game.querySelector('img');
                    image.src = game.getAttribute('data-img');
                    var name = game.querySelector('.detail>.name');
                    name.innerHTML = game.getAttribute('data-name');
                    var tags = game.querySelector('.detail>.tags');
                    tags.innerHTML = game.getAttribute('data-tags');
                });
                this.searchField = this.renderer.querySelector('#' + this.id + '-search');
                this.addEvents();
            }
        }
    };
    return StoreFilter;
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
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/styles/Button.scss */ "./src/ui/styles/Button.scss");
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Grid_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Grid.scss */ "./src/styles/Grid.scss");
/* harmony import */ var _styles_Grid_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Grid_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Typography_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Typography.scss */ "./src/styles/Typography.scss");
/* harmony import */ var _styles_Typography_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Typography_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
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
        _this.tag = 'ui-tab';
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
            'So did the person that made the stadia+ extension give up on stadia?',
            'It\'s like GFN, but without any pulled games.',
            'Long live Geforce Now+',
            'Spend your money before it runs out.',
        ];
        return _this;
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     *
     * @memberof UITab
     */
    UITab.prototype.createElement = function () {
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"]('Stadia+', "\n                <i \n                    class=\"stadiaplus_muted\" \n                    style=\"margin-top: 1rem; margin-bottom: 5rem; display: block\"\n                >\n                    " + this.motdList[Math.floor(Math.random() * this.motdList.length)] + "\n                </i>\n            ", this.id);
        var icon = chrome.runtime.getURL('images/icons/stadiaplus.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('ui-tab.button-label'), this.id + '-button');
    };
    /**
     * Append all rows that don't already exist.
     *
     * @param {boolean} [reload]
     * @memberof UITab
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
     *
     * @memberof UITab
     */
    UITab.prototype.reloadRows = function () {
        this.rows.forEach(function (row) { return row.reload(); });
    };
    /**
     * Add a row to the list.
     *
     * @memberof UITab
     */
    UITab.prototype.addRow = function (row) {
        this.rows.push(row);
    };
    /**
     * Clear and unload all rows.
     *
     * @memberof UITab
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
     *
     * @memberof UITab
     */
    UITab.prototype.onStart = function () {
        this.active = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('component.enabled', { name: this.name }));
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof UITab
     */
    UITab.prototype.onStop = function () {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        this.rows.forEach(function (row) {
            row.element.remove();
        });
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('component.disabled', { name: this.name }));
    };
    /**
     * Called every second, makes sure to create components if they don't already exist.
     *
     * @memberof UITab
     */
    UITab.prototype.onUpdate = function () {
        var _this = this;
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                this.updateRenderer();
                this.component.create();
                this.createRows(true);
                var self_1 = this;
                this.button.create(function () {
                    self_1.button.button.addEventListener('click', function () {
                        _this.createRows(true);
                        self_1.component.openTab();
                    });
                });
            }
            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if (this.component.open) {
            this.component.closeTab();
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

/***/ "./src/components/styles/NetworkMonitor.scss":
/*!***************************************************!*\
  !*** ./src/components/styles/NetworkMonitor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./NetworkMonitor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/NetworkMonitor.scss");

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

/***/ "./src/components/styles/Ratings.scss":
/*!********************************************!*\
  !*** ./src/components/styles/Ratings.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Ratings.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/Ratings.scss");

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

/***/ "./src/components/styles/StoreFilter.scss":
/*!************************************************!*\
  !*** ./src/components/styles/StoreFilter.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./StoreFilter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StoreFilter.scss");

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
/* harmony import */ var _WebDatabase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WebDatabase */ "./src/WebDatabase.ts");
/* harmony import */ var _components_StoreFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/StoreFilter */ "./src/components/StoreFilter.ts");
/* harmony import */ var _components_Ratings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Ratings */ "./src/components/Ratings.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Language */ "./src/Language.ts");
/* harmony import */ var _components_AllowWindowedMode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/AllowWindowedMode */ "./src/components/AllowWindowedMode.ts");
/* harmony import */ var _components_PasteFromClipboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/PasteFromClipboard */ "./src/components/PasteFromClipboard.ts");



















// Always load languages first
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].init();
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].load();

const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoader"]();
const snackbar = new _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__["Snackbar"]();
const tab = new _components_UITab__WEBPACK_IMPORTED_MODULE_5__["UITab"]();

const database = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect();

loader.register(new _components_Clock__WEBPACK_IMPORTED_MODULE_4__["Clock"]());
loader.register(new _components_LibraryFilter__WEBPACK_IMPORTED_MODULE_10__["LibraryFilter"](snackbar, database, uuidMap));
loader.register(new _components_ForceCodec__WEBPACK_IMPORTED_MODULE_6__["ForceCodec"](tab, snackbar));
loader.register(new _components_ForceResolution__WEBPACK_IMPORTED_MODULE_7__["ForceResolution"](tab, snackbar));
loader.register(tab);
loader.register(new _components_NetworkMonitor__WEBPACK_IMPORTED_MODULE_8__["NetworkMonitor"]());
loader.register(new _components_StoreFilter__WEBPACK_IMPORTED_MODULE_12__["StoreFilter"](database, uuidMap));
loader.register(new _components_Ratings__WEBPACK_IMPORTED_MODULE_13__["Ratings"](database, uuidMap));
loader.register(new _components_AllowWindowedMode__WEBPACK_IMPORTED_MODULE_15__["AllowWindowedMode"]());
loader.register(new _components_PasteFromClipboard__WEBPACK_IMPORTED_MODULE_16__["PasteFromClipboard"]());

window.addEventListener('load', () => {
    _Util__WEBPACK_IMPORTED_MODULE_1__["default"].load();
    snackbar.create();
    loader.start();
})

/***/ }),

/***/ "./src/lang/de-DE.json":
/*!*****************************!*\
  !*** ./src/lang/de-DE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Komponente {{name}} wurde aktiviert.\",\"disabled\":\"Komponente {{name}} wurde deaktiviert.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Uhr\"},\"force-codec\":{\"name\":\"Codec erzwingen\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Auflösung erzwingen\",\"note\":\"Anmerkung: Die gewählte Auflösung ist die Maximale, die Stadia verweden wird. Falls Ihr Computer diese Auflösung nicht darstellen kann oder nicht genug Bandbreite zu Verfügung steht, wird eine kleinere Auflösung verwendet.\"},\"library-filter\":{\"name\":\"Sammlungsfilter\",\"recent\":\"Neuste\",\"alphabetical\":\"Alphabetisch\",\"random\":\"Zufällig\",\"show-hidden\":\"Zeige Versteckte\"},\"network-monitor\":{\"name\":\"Netwerkmonitor\",\"heading-visible\":\"Sichtbare Statistiken\",\"button-label\":\"Monitor\"},\"paste-from-clipboard\":{\"name\":\"Einfügen aus der Zwischenablage\"},\"ratings\":{\"name\":\"Bewertungen\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Seite neu laden um die Änderung anzuzeigen.\",\"hide-game\":\"Ein Spiel wurde versteckt.\",\"show-game\":\"Ein Spiel ist nicht mehr versteckt.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Anwenden\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/en-US.json":
/*!*****************************!*\
  !*** ./src/lang/en-US.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Component {{name}} has been enabled.\",\"disabled\":\"Component {{name}} has been disabled.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Clock\"},\"force-codec\":{\"name\":\"Force Codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Force Resolution\",\"note\":\"Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.\"},\"library-filter\":{\"name\":\"Library Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alphabetical\",\"random\":\"Random\",\"show-hidden\":\"Show Hidden\"},\"network-monitor\":{\"name\":\"Network Monitor\",\"heading-visible\":\"Visible Stats\",\"button-label\":\"Monitor\"},\"paste-from-clipboard\":{\"name\":\"Paste from Clipboard\"},\"ratings\":{\"name\":\"Ratings\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Reload the page to see your changes.\",\"hide-game\":\"A game has been hidden.\",\"show-game\":\"A game is no longer hidden.\"},\"automatic\":\"Automatic\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/es-ES.json":
/*!*****************************!*\
  !*** ./src/lang/es-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"El componente {{name}}  ha sido habilitado.\",\"disabled\":\"El componente {{name}} ha sido deshabilitado.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Reloj\"},\"force-codec\":{\"name\":\"Fuerza Códec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Fuerza Resolución\",\"note\":\"Nota: el valor establecido es la resolución máxima que Stadia intentará lograr. Si su computadora no es capaz de procesar la resolución o no está disponible con la opción de uso de datos actual, no se mostrará.\"},\"library-filter\":{\"name\":\"Filtro Biblioteca\",\"recent\":\"Reciente\",\"alphabetical\":\"Alfabético\",\"random\":\"Aleatorio\",\"show-hidden\":\"Mostrar oculto\"},\"network-monitor\":{\"name\":\"Monitor de red\",\"heading-visible\":\"Estadísticas visibles\",\"button-label\":\"Monitor\"},\"paste-from-clipboard\":{\"name\":\"Pegar desde el portapapeles\"},\"ratings\":{\"name\":\"Calificaciones\",\"source-name\":\"Metacrítico\"},\"store-filter\":{\"name\":\"Filtro de tienda\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Vuelva a cargar la página para ver sus cambios.\",\"hide-game\":\"Un juego ha sido escondido.\",\"show-game\":\"Un juego ya no está oculto.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/eu-ES.json":
/*!*****************************!*\
  !*** ./src/lang/eu-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Egilea: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Luzapena prest dago. Ireki Stadia eta hasi jolasten! Egurra! 🎮\",\"launch-button\":\"Ireki Stadia\",\"help-button\":\"Laguntza & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Ezarpenak\",\"language\":\"Hizkuntza\",\"components\":\"Osagarriak\",\"edit-components\":\"Editatu osagarriak\"},\"developer-page\":{\"title\":\"Aurreratuak\",\"clear-cache-button\":\"Cachea ezabatu\",\"storage\":\"Biltegia\"},\"component-page\":{\"title\":\"Osagarriak\"}},\"component\":{\"enabled\":\"{{name}} gaitu egin da.\",\"disabled\":\"{{name}} desgaitu egin da.\"},\"allow-windowed-mode\":{\"name\":\"Onartu lehio-modua\",\"button-label\":{\"windowed\":\"Lehioan\",\"fullscreen\":\"Pantaila osoa\"}},\"clock\":{\"name\":\"Erlojua\"},\"force-codec\":{\"name\":\"Behartu codec\",\"4k-tooltip\":\"Codec hori ezin da gaitu 4K aukerarekin\"},\"force-resolution\":{\"name\":\"Behartu bereizmena\",\"note\":\"Oharra: jarritako balioa izango da Stadia ezartzen saiatuko den handiena. Zure ordenagailuak ezin badu bereizmen hori exekutatu  edota ez badator bat Stadiaren zure data-ezarpenekin ezin izango da gauzatu..\"},\"library-filter\":{\"name\":\"Bildumaren iragazkia\",\"recent\":\"Arestikoak\",\"alphabetical\":\"Alfabetikoa\",\"random\":\"Aliritzira\",\"show-hidden\":\"Erakutsi izkutatutakoak\"},\"network-monitor\":{\"name\":\"Sare-monitorea\",\"heading-visible\":\"Ikusteko estatistikak\",\"button-label\":\"Monitorea\"},\"paste-from-clipboard\":{\"name\":\"Itsatsi arbelean\"},\"ratings\":{\"name\":\"Balorazioak\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Denda-iragazkia\"},\"ui-tab\":{\"name\":\"Stadia+ UI Fitxa\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Orria birkargatu ezarritako aldaketak abiarazteko.\",\"hide-game\":\"Joku bat izkutatu egin da.\",\"show-game\":\"Joku bat jada ikusgai dago.\"},\"automatic\":\"Automatikoa\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Ezarri\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/fr-FR.json":
/*!*****************************!*\
  !*** ./src/lang/fr-FR.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Développé par {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'extension est prête. Lancez Stadia et commencez à jouer! 🎮\",\"launch-button\":\"Lancer Stadia\",\"help-button\":\"Aide & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Paramètres\",\"language\":\"Langue\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Développeur\",\"clear-cache-button\":\"Vider le cache\",\"storage\":\"Stockage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Le composant {{name}} a été activé.\",\"disabled\":\"Le composant {{name}} a été désactivé.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Horloge\"},\"force-codec\":{\"name\":\"Forcer le codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Forcer la résolution\",\"note\":\"Remarque: la valeur définie est la résolution maximale que Stadia tentera d'atteindre. Si votre ordinateur ne peut pas afficher cette résolution ou que l'option de consommation des données ne le permet pas, elle ne sera pas utilisée.\"},\"library-filter\":{\"name\":\"Filtre de la bibliothèque\",\"recent\":\"Récent\",\"alphabetical\":\"Alphabétique\",\"random\":\"Aléatoire\",\"show-hidden\":\"Montrer caché(s)\"},\"network-monitor\":{\"name\":\"Moniteur réseau\",\"heading-visible\":\"Statistiques visibles\",\"button-label\":\"Moniteur\"},\"paste-from-clipboard\":{\"name\":\"Coller depuis le presse-papiers\"},\"ratings\":{\"name\":\"Évaluations\",\"source-name\":\"Métacritique\"},\"store-filter\":{\"name\":\"Filtre du magasin\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Rechargez la page pour voir vos modifications.\",\"hide-game\":\"Un jeu a été caché.\",\"show-game\":\"Un jeu n'est plus caché.\"},\"automatic\":\"Automatique\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Appliquer\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/gl-ES.json":
/*!*****************************!*\
  !*** ./src/lang/gl-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Creado por {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"A extensión está lista. Inicia Stadia e lume! 🎮\",\"launch-button\":\"Inicia Stadia\",\"help-button\":\"Axuda & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Configuración\",\"language\":\"Idioma\",\"components\":\"Compoñentes\",\"edit-components\":\"Edita os compoñentes\"},\"developer-page\":{\"title\":\"Avanzadas\",\"clear-cache-button\":\"Limpa a caché\",\"storage\":\"Almacenamento\"},\"component-page\":{\"title\":\"Compoñentes\"}},\"component\":{\"enabled\":\"Activouse {{name}}.\",\"disabled\":\"Desactivouse {{name}}.\"},\"allow-windowed-mode\":{\"name\":\"Permite o modo fiestra\",\"button-label\":{\"windowed\":\"En fiestra\",\"fullscreen\":\"Pantalla completa\"}},\"clock\":{\"name\":\"Reloxo\"},\"force-codec\":{\"name\":\"Forza códec\",\"4k-tooltip\":\"O códec seleccionado non está disponíbel ao seleccionar 4K\"},\"force-resolution\":{\"name\":\"Forza resolución\",\"note\":\"Aviso: o valor indicado será o máximo que Stadia intentará acadar. Se o teu computador non é compatíbel coa resolución ou esta supera o uso de datos que teñas configurado na conta, non se activará.\"},\"library-filter\":{\"name\":\"Filtrar\",\"recent\":\"Recentes\",\"alphabetical\":\"Alfabeticamente\",\"random\":\"Aleatoriamente\",\"show-hidden\":\"Mostrar agochados\"},\"network-monitor\":{\"name\":\"Monitor de rede\",\"heading-visible\":\"Estatísticas\",\"button-label\":\"Monitor\"},\"paste-from-clipboard\":{\"name\":\"Pegar do portapapeis\"},\"ratings\":{\"name\":\"Valoracións\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtrar\"},\"ui-tab\":{\"name\":\"Pestaña UI de Stadia+\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Recarga a páxina para activar os cambios.\",\"hide-game\":\"Agochóuse un xogo.\",\"show-game\":\"Un xogo deixou de estar agochado.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/it-IT.json":
/*!*****************************!*\
  !*** ./src/lang/it-IT.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Sviluppato da {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'estensione è pronta per l'uso. Avvia Stadia e inizia a giocare! 🎮\",\"launch-button\":\"Avvia Stadia\",\"help-button\":\"Aiuto & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Impostazioni\",\"language\":\"Lingua\",\"components\":\"Componenti\",\"edit-components\":\"Modifica Componenti\"},\"developer-page\":{\"title\":\"Sviluppatore\",\"clear-cache-button\":\"Pulisci Cache\",\"storage\":\"Archiviazione\"},\"component-page\":{\"title\":\"Componenti\"}},\"component\":{\"enabled\":\"Il componente {{name}} è stato attivato.\",\"disabled\":\"Il componente {{name}} è stato disattivato.\"},\"allow-windowed-mode\":{\"name\":\"Consentire la Modalità Finestra\",\"button-label\":{\"windowed\":\"Finestra\",\"fullscreen\":\"Schermo Intero\"}},\"clock\":{\"name\":\"Orologio\"},\"force-codec\":{\"name\":\"Forza Codec\",\"4k-tooltip\":\"Non è possibile forzare il codec quando si è in 4K\"},\"force-resolution\":{\"name\":\"Forza Risoluzione\",\"note\":\"Nota: il valore impostato è la massima risoluzione che Stadia tenterà di raggiungere. Se il tuo computer non è in grado di renderizzare la risoluzione, o non è disponibile con l'opzione di utilizzo dei dati corrente, questa non verrà visualizzata.\"},\"library-filter\":{\"name\":\"Filtro Libreria\",\"recent\":\"Recente\",\"alphabetical\":\"Alfabetico\",\"random\":\"Casuale\",\"show-hidden\":\"Mostra Nascosti\"},\"network-monitor\":{\"name\":\"Monitor di Rete\",\"heading-visible\":\"Statistiche Visibili\",\"button-label\":\"Monitor\"},\"paste-from-clipboard\":{\"name\":\"Incolla dagli Appunti\"},\"ratings\":{\"name\":\"Valutazioni\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtro Negozio\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Ricarica la pagina per vedere i cambiamenti.\",\"hide-game\":\"Un gioco è stato nascosto.\",\"show-game\":\"Un gioco non è più nascosto.\"},\"automatic\":\"Automatico\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Applica\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/nl-BE.json":
/*!*****************************!*\
  !*** ./src/lang/nl-BE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Ontwikkeld door {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"De extentie is klaar. Je kan nu Stadia openen en beginnen spelen! 🎮\",\"launch-button\":\"Stadia starten\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Instellingen\",\"language\":\"Taal\",\"components\":\"Componenten\",\"edit-components\":\"Componenten aanpassen\"},\"developer-page\":{\"title\":\"Ontwikkelaar\",\"clear-cache-button\":\"Cache wissen\",\"storage\":\"Opslag\"},\"component-page\":{\"title\":\"Componenten\"}},\"component\":{\"enabled\":\"Component {{name}} werd ingeschakeld.\",\"disabled\":\"Component {{name}} werd uitgeschakeld.\"},\"allow-windowed-mode\":{\"name\":\"Spelen in venster toestaan\",\"button-label\":{\"windowed\":\"In venster\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Klok\"},\"force-codec\":{\"name\":\"Codec forceren\",\"4k-tooltip\":\"Codec kan niet geforceerd worden wanneer je in 4K speelt\"},\"force-resolution\":{\"name\":\"Resolutie forceren\",\"note\":\"Merk op: Deze waarde is de maximale resolutie dat Stadia zal proberen te halen. Dit zal niet werken als je computer deze resolutie niet kan afspelen of als de resolutie niet beschikbaar is voor de dataverbruik selectie.\"},\"library-filter\":{\"name\":\"Bibliotheek Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alfabetisch\",\"random\":\"Willekeurig\",\"show-hidden\":\"Verborgen weergeven\"},\"network-monitor\":{\"name\":\"Netwerk Monitor\",\"heading-visible\":\"Zichtbare Stats\",\"button-label\":\"Monitor\"},\"ratings\":{\"name\":\"Scores\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filter bewaren\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Herlaad de pagina om je aanpassingen te zien.\",\"hide-game\":\"Een spel werd verborgen.\",\"show-game\":\"Een spel is niet langer verborgen.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Toepassen\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/ru-RU.json":
/*!*****************************!*\
  !*** ./src/lang/ru-RU.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Разработчик: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Расширение готово к работе. Запускай Stadia и начинай играть! 🎮\",\"launch-button\":\"Запустить Stadia\",\"help-button\":\"Справка и FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Настройки\",\"language\":\"Язык\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Элемент {{name}} включён.\",\"disabled\":\"Элемент {{name}} отключен.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Часы\"},\"force-codec\":{\"name\":\"Принудительный запуск кодека\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Принудительная смена разрешения\",\"note\":\"Примечание: установливаемое значение - это максимальное разрешение, которое Stadia может достичь. Если ваш компьютер не может отобразить разрешение или оно не доступно с текущей скоростью передачи данных, оно не будет отображаться.\"},\"library-filter\":{\"name\":\"Фильтр\",\"recent\":\"Последние\",\"alphabetical\":\"Алфавитный\",\"random\":\"Случайные\",\"show-hidden\":\"Показать скрытые\"},\"network-monitor\":{\"name\":\"Мониторинг сети\",\"heading-visible\":\"Видимая статистика\",\"button-label\":\"Монитор\"},\"paste-from-clipboard\":{\"name\":\"Вставить из буфера обмена\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Сохранить фильтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Перезагрузите страницу, чтобы увидеть изменения.\",\"hide-game\":\"Игра скрыта.\",\"show-game\":\"Игра теперь отображается.\"},\"automatic\":\"Автоматически\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/sv-SE.json":
/*!*****************************!*\
  !*** ./src/lang/sv-SE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Utvecklat av {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Tillägget är redo att köra. Bara starta Stadia och börja spela! 🎮\",\"launch-button\":\"Starta Stadia\",\"help-button\":\"Hjälp & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Inställningar\",\"language\":\"Språk\",\"components\":\"Komponenter\",\"edit-components\":\"Redigera Komponenter\"},\"developer-page\":{\"title\":\"Utvecklare\",\"clear-cache-button\":\"Rensa Cache\",\"storage\":\"Lagring\"},\"component-page\":{\"title\":\"Komponenter\"}},\"component\":{\"enabled\":\"Komponenten {{name}} är nu aktiverad.\",\"disabled\":\"Komponenten {{name}} är inte längre aktiverad.\"},\"allow-windowed-mode\":{\"name\":\"Tillåt Fönsterläge\",\"button-label\":{\"windowed\":\"Fönster\",\"fullscreen\":\"Fullskärm\"}},\"clock\":{\"name\":\"Klocka\"},\"force-codec\":{\"name\":\"Påtvigad Codec\",\"4k-tooltip\":\"Påtvingad Codec är inte tillgängligt när du spelar i 4K\"},\"force-resolution\":{\"name\":\"Påtvingad Upplösning\",\"note\":\"Observera: det satta värdet är den maximala upplösningen Stadia kommer försöka uppnå. Om din dator inte klarar av att rendera upplösningen eller den inte är tillgänglig med dina nuvarande datainställningar kommer inte den påtvingade upplösningen visas.\"},\"library-filter\":{\"name\":\"Biblioteksfilter\",\"recent\":\"Senaste\",\"alphabetical\":\"Alfabetiskt\",\"random\":\"Slumpmässigt\",\"show-hidden\":\"Visa Gömda\"},\"network-monitor\":{\"name\":\"Nätverksövervakning\",\"heading-visible\":\"Synlig Statistik\",\"button-label\":\"Övervakning\"},\"paste-from-clipboard\":{\"name\":\"Klistra in från Urklipp\"},\"ratings\":{\"name\":\"Recensioner\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Butiksfiltrering\"},\"ui-tab\":{\"name\":\"Stadia+ Gränssnittstabb\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Uppdatera sidan för att se dina ändringar.\",\"hide-game\":\"Ett spel har gömts.\",\"show-game\":\"Ett spel är inte längre gömt.\"},\"automatic\":\"Automatisk\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Tillämpa\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/uk-UA.json":
/*!*****************************!*\
  !*** ./src/lang/uk-UA.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Розробник: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Розширення готове до роботи. Просто запустіть Stadia і почніть грати! 🎮\",\"launch-button\":\"Запустити Stadia\",\"help-button\":\"Довідка та поширені запитання\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Налаштування\",\"language\":\"Мова\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Компонент {{name}} увімкнено.\",\"disabled\":\"Компонент {{name}} вимкнено.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Годинник\"},\"force-codec\":{\"name\":\"Примусити кодек\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Примусити розширення\",\"note\":\"Примітка: встановлене значення - це максимальна роздільна здатність, яку Stadia намагатиметься досягти. Якщо ваш комп'ютер не здатний рендерувати роздільну здатність або він недоступний із поточною опцією використання даних, він не відображатиметься.\"},\"library-filter\":{\"name\":\"Фільтрувати\",\"recent\":\"Останні\",\"alphabetical\":\"Алфавітний\",\"random\":\"Випадкові\",\"show-hidden\":\"Показати приховані\"},\"network-monitor\":{\"name\":\"Моніторинг мережі\",\"heading-visible\":\"Видима статистика\",\"button-label\":\"Монітор\"},\"paste-from-clipboard\":{\"name\":\"Вставити з буфера обміну\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Зберегти фільтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Перезавантажте сторінку, щоб побачити зміни.\",\"hide-game\":\"Гра прихована.\",\"show-game\":\"Гра більше не є прихованою.\"},\"automatic\":\"Автоматично\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

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

/***/ "./src/styles/Grid.scss":
/*!******************************!*\
  !*** ./src/styles/Grid.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Grid.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Grid.scss");

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

/***/ "./src/styles/Typography.scss":
/*!************************************!*\
  !*** ./src/styles/Typography.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./Typography.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Typography.scss");

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

/***/ "./src/ui/Checkbox.ts":
/*!****************************!*\
  !*** ./src/ui/Checkbox.ts ***!
  \****************************/
/*! exports provided: Checkbox, CheckboxShape, CheckboxStyle, CheckboxColor, CheckboxAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxShape", function() { return CheckboxShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxStyle", function() { return CheckboxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxColor", function() { return CheckboxColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxAnimation", function() { return CheckboxAnimation; });
/* harmony import */ var _node_modules_pretty_checkbox_src_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/pretty-checkbox/src/pretty-checkbox.scss */ "./node_modules/pretty-checkbox/src/pretty-checkbox.scss");
/* harmony import */ var _node_modules_pretty_checkbox_src_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pretty_checkbox_src_pretty_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);

var Checkbox = /** @class */ (function () {
    function Checkbox(label) {
        this.shape = CheckboxShape.DEFAULT;
        this.style = CheckboxStyle.DEFAULT;
        this.border = true;
        this.label = label;
    }
    Checkbox.prototype.setShape = function (shape) {
        this.shape = shape;
        return this;
    };
    Checkbox.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    Checkbox.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    Checkbox.prototype.setAnimation = function (animation) {
        this.animation = animation;
        return this;
    };
    Checkbox.prototype.setBorder = function (border) {
        this.border = border;
        return this;
    };
    Checkbox.prototype.setIcon = function (icon) {
        this.icon = icon;
        return this;
    };
    Checkbox.prototype.setDisabled = function (disabled) {
        this.disabled = disabled;
        return this;
    };
    Checkbox.prototype.setBigger = function (bigger) {
        this.bigger = bigger;
        return this;
    };
    Checkbox.prototype.build = function () {
        // Create element
        var element = document.createElement('div');
        // Add main classes
        element.classList.add('pretty', 'p-default');
        // If style is not default, add style
        if (this.shape) {
            element.classList.add(this.shape);
        }
        // If style is not default, add style
        if (this.style) {
            element.classList.add(this.style);
        }
        // If animated, add animation
        if (this.animation) {
            element.classList.add(this.animation);
        }
        // Set bigger
        if (this.bigger) {
            element.classList.add('p-bigger');
        }
        // Set border
        if (!this.border) {
            element.classList.add('p-plain');
        }
        // Add checkbox input
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.disabled = this.disabled;
        element.appendChild(checkbox);
        // Add state div
        var state = document.createElement('div');
        state.classList.add('state');
        // If colored, add color
        if (this.color) {
            state.classList.add(this.color);
        }
        // If has icon, add icon
        if (this.icon) {
            element.classList.add('p-icon');
            var icon = document.createElement('span');
            icon.classList.add('material-icons');
            icon.innerHTML = this.icon;
            state.appendChild(icon);
        }
        // Add label
        var label = document.createElement('label');
        label.innerHTML = this.label;
        state.appendChild(label);
        element.appendChild(state);
        return { pretty: element, checkbox: checkbox };
    };
    return Checkbox;
}());

var CheckboxShape = /** @class */ (function () {
    function CheckboxShape() {
    }
    CheckboxShape.DEFAULT = null;
    CheckboxShape.CURVED = 'p-curve';
    CheckboxShape.ROUND = 'p-round';
    return CheckboxShape;
}());

var CheckboxStyle = /** @class */ (function () {
    function CheckboxStyle() {
    }
    CheckboxStyle.DEFAULT = null;
    CheckboxStyle.FILL = 'p-fill';
    CheckboxStyle.THICK = 'p-thick';
    return CheckboxStyle;
}());

var CheckboxColor = /** @class */ (function () {
    function CheckboxColor() {
    }
    CheckboxColor.BLUE = 'p-primary';
    CheckboxColor.GREEN = 'p-success';
    CheckboxColor.YELLOW = 'p-warning';
    CheckboxColor.CYAN = 'p-info';
    CheckboxColor.RED = 'p-danger';
    return CheckboxColor;
}());

var CheckboxAnimation = /** @class */ (function () {
    function CheckboxAnimation() {
    }
    CheckboxAnimation.SMOOTH = 'p-smooth';
    CheckboxAnimation.JELLY = 'p-jelly';
    CheckboxAnimation.TADA = 'p-tada';
    CheckboxAnimation.ROTATE = 'p-rotate';
    CheckboxAnimation.PULSE = 'p-pulse';
    return CheckboxAnimation;
}());



/***/ }),

/***/ "./src/ui/Select.ts":
/*!**************************!*\
  !*** ./src/ui/Select.ts ***!
  \**************************/
/*! exports provided: Select, SelectStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStyle", function() { return SelectStyle; });
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.min.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slim-select/dist/slimselect.min.css */ "./node_modules/slim-select/dist/slimselect.min.css");
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/styles/Select.scss */ "./src/ui/styles/Select.scss");
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_2__);



var Select = /** @class */ (function () {
    function Select(element, options) {
        this.element = element;
        options.style = options.style !== undefined ? options.style : SelectStyle.DARK;
        options.onChange = options.onChange !== undefined ? options.onChange : function () { };
        options.beforeChange = options.beforeChange !== undefined ? options.beforeChange : function () { };
        this.element.classList.add('stadiaplus_dropdown', options.style);
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
                placeholder: options.placeholder,
                onChange: options.onChange,
                beforeOnChange: options.beforeChange,
            });
        }
        catch (error) { }
    }
    Select.prototype.disable = function () {
        this.element.classList.add('disabled');
    };
    Select.prototype.enable = function () {
        this.element.classList.remove('disabled');
    };
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
        if (this.slimselect !== undefined) {
            this.slimselect.destroy();
        }
        this.element.classList.remove('stadiaplus_dropdown');
        this.element = null;
    };
    return Select;
}());

var SelectStyle = /** @class */ (function () {
    function SelectStyle() {
    }
    SelectStyle.SLIMSELECT = null;
    SelectStyle.SLIMSELECT_LARGE = 'style-slimselect-large';
    SelectStyle.LIGHT = 'style-light';
    SelectStyle.DARK = 'style-dark';
    return SelectStyle;
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
        this.closeButton.classList.add('material-icons', 'stadiaplus_snackbar-close');
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
        this.html = "\n            <div class=\"Pyflbb\" jsname=\"rZHESd\">\n                <div class=\"KEaHo\">\n                    <span class=\"X5peoe\" jsname=\"pYFhU\">\n                        <img class=\"xduoyf uibutton-icon\" src=\"" + icon + "\">\n                    </span>\n                    <span class=\"caSJV uibutton-title\">" + title + "</span>\n                </div>\n            </div>\n        ";
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
    UIButton.prototype.setIcon = function (icon) {
        this.element.querySelector('.uibutton-icon').setAttribute('src', icon);
    };
    UIButton.prototype.setTitle = function (title) {
        this.element.querySelector('.uibutton-title').innerHTML = title;
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
        if (this.buttons.indexOf(button) === -1) {
            this.buttons.push(button);
        }
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
        this.openListeners = [];
        this.closeListeners = [];
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
            self.closeTab();
        });
    };
    UIComponent.prototype.openTab = function () {
        this.element.classList.add('open');
        this.open = true;
        this.openListeners.forEach(function (c) { return c(); });
    };
    UIComponent.prototype.closeTab = function () {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Closing', this.id);
        this.element.classList.remove('open');
        this.open = false;
        this.closeListeners.forEach(function (c) { return c(); });
    };
    UIComponent.prototype.onOpen = function (callback) {
        if (callback)
            this.openListeners.push(callback);
    };
    UIComponent.prototype.onClose = function (callback) {
        if (callback)
            this.closeListeners.push(callback);
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

/***/ "./src/ui/styles/Button.scss":
/*!***********************************!*\
  !*** ./src/ui/styles/Button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Button.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU25hY2tiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJldHR5LWNoZWNrYm94L3NyYy9wcmV0dHktY2hlY2tib3guc2Nzcz8wZjVkIiwid2VicGFjazovLy8uL3NyYy9Nb25pdG9yUnVubmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzP2JlNGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViRGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsb3dXaW5kb3dlZE1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9yY2VDb2RlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXN0ZUZyb21DbGlwYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmF0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdG9yZUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvQ2xvY2suc2Nzcz84YTIzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3M/Mzg3MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3M/NWI0NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzPzY5ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL05ldHdvcmtNb25pdG9yLnNjc3M/NjdjNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzPzkyZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1N0b3JlRmlsdGVyLnNjc3M/NmMyNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvVUlUYWIuc2Nzcz84YjQ5Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0dsb2JhbC5zY3NzPzA5YjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3M/MmZkMCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1R5cG9ncmFwaHkuc2Nzcz85YWY5Iiwid2VicGFjazovLy8uL3NyYy91aS9DaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvU2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9TbmFja2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQnV0dG9uQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlSb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2Nzcz85OTBjIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU2VsZWN0LnNjc3M/N2U3YSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3M/OWI3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyRkFBc0M7QUFDaEY7QUFDQTtBQUNBLGNBQWMsUUFBUyxjQUFjLDJCQUEyQixHQUFHLDBEQUEwRCxrQkFBa0IsR0FBRyxhQUFhLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixtQkFBbUIsR0FBRyxpQkFBaUIsdUJBQXVCLFlBQVksV0FB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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByZXR0eSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXR0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eSBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWluLXdpZHRoOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWwge1xcbiAgcG9zaXRpb246IGluaXRpYWw7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xcbiAgbWluLXdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNiZGMzYzc7XFxufVxcbi5wcmV0dHkgLnN0YXRlLnAtaXMtaG92ZXIsIC5wcmV0dHkgLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHRhZGEge1xcbiAgMCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDcpO1xcbiAgfVxcbiAgMzglIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1NSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuICA3MiUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDgxJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNCk7XFxuICB9XFxuICA4OSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDk1JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamVsbHkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44NSwgMS4xNSwgMSk7XFxuICB9XFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2JkYzNjNztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxLjVlbSByZ2JhKDE4OSwgMTk1LCAxOTksIDApO1xcbiAgfVxcbn1cXG4ucHJldHR5LnAtZGVmYXVsdC5wLWZpbGwgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wcmV0dHkucC1kZWZhdWx0IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogY2FsYygxZW0gLyA3KTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuaWNvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxufVxcblxcbi5wcmV0dHkucC1zdmcgLnN0YXRlIC5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN2ZyAuc3RhdGUgc3ZnIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLXN2ZyBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5zdmcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLWltYWdlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIHRvcDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtaW1hZ2UgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dCB7XFxuICBtaW4td2lkdGg6IDJlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIHdpZHRoOiAyZW07XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAxNiUpO1xcbiAgei1pbmRleDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsIHtcXG4gIHRleHQtaW5kZW50OiAyLjVlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NTZiICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIC5zdGF0ZTpiZWZvcmUge1xcbiAgaGVpZ2h0OiAwLjFlbTtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzcgIWltcG9ydGFudDtcXG4gIHRvcDogY2FsYyg1MCUgLSAwLjFlbSk7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZTpub3QoLnAtaXMtaG92ZXIpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXIgfiAuc3RhdGUucC1pcy1ob3ZlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZS5wLWlzLWhvdmVyIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWZvY3VzIGlucHV0OmZvY3VzIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2JkYzNjNztcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGU6bm90KC5wLWlzLWluZGV0ZXJtaW5hdGUpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIH4gLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmYsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb2ZmIC5pY29uIHtcXG4gIGNvbG9yOiAjYmRjM2M3O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtb2ZmIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldHR5LnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1wbGFpbi5wLXRvZ2dsZSAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1wbGFpbi5wLXBsYWluIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuLnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcblxcbi5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtY3VydmUgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDphZnRlcixcXG4ucHJldHR5LnAtc21vb3RoIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggLnN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcge1xcbiAgYW5pbWF0aW9uOiB6b29tIDAuMnMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aC5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHpvb20gMC4ycyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoLnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogdGFkYSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAxIGFsdGVybmF0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogamVsbHkgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJldHR5LnAtcHVsc2U6bm90KC5wLXN3aXRjaCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcztcXG59XFxuXFxuLnByZXR0eSBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkgaW5wdXRbZGlzYWJsZWRdIH4gKiB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5wcmV0dHkucC1sb2NrZWQgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIHN2ZyB7XFxuICBjb2xvcjogIzQyOGJjYTtcXG4gIHN0cm9rZTogIzQyOGJjYTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyNDU2ODI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1NjgyICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIHN2ZyB7XFxuICBjb2xvcjogIzViYzBkZTtcXG4gIHN0cm9rZTogIzViYzBkZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyMzkwYjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5MGIwICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIHN2ZyB7XFxuICBjb2xvcjogIzVjYjg1YztcXG4gIHN0cm9rZTogIzVjYjg1YztcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMzNTc5MzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3OTM1ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIHN2ZyB7XFxuICBjb2xvcjogI2YwYWQ0ZTtcXG4gIHN0cm9rZTogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNjNzdjMTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc3YzExICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gc3ZnIHtcXG4gIGNvbG9yOiAjZDk1MzRmO1xcbiAgc3Ryb2tlOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTAyNjIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwMjYyMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkucC1iaWdnZXIgLmljb24sXFxuLnByZXR0eS5wLWJpZ2dlciAuc3ZnLFxcbi5wcmV0dHkucC1iaWdnZXIgLmltZyB7XFxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDM1JSkgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLWJpZ2dlciBsYWJlbCB7XFxuICB0ZXh0LWluZGVudDogMS43ZW07XFxufVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAucHJldHR5IC5zdGF0ZTpiZWZvcmUsXFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkgLnN0YXRlIC5pY29uIHtcXG4gICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Nsb2NrIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKSwgb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3Npbmcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3NlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zIEV4dGVuZGVkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIHotaW5kZXg6IDQ7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYTNjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjNzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjE1LCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyOmhvdmVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyOmhvdmVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMjM2O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMzIpLCAwIDAuMDYyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTgpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19kcm9wZG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWNoZWNrYm94IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcImFycm93X2Ryb3BfZG93blxcXCI7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uLmFzY2VuZGluZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbi5kZXNjZW5kaW5nIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE1MDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yICoge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3IuZWRpdGFibGUge1xcbiAgei1pbmRleDogMzAwO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10YWIgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFyZW07XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci1jaGVja2JveCB7XFxuICBtYXJnaW46IDAuNHJlbSAwO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10b2dnbGUtYnV0dG9uOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICBjb250ZW50OiBcXFwiU2hvd1xcXCI7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRvZ2dsZS1idXR0b24uc2hvd246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiSGlkZVxcXCI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfcmF0aW5nIHtcXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnN0YWRpYXBsdXNfcmF0aW5nOmhvdmVyIC5zdGFkaWFwbHVzX3JhdGluZy10b29sdGlwIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSk7XFxufVxcbi5zdGFkaWFwbHVzX3JhdGluZyAuc3RhZGlhcGx1c19yYXRpbmctdG9vbHRpcCB7XFxuICBmb250LWZhbWlseTogXFxcIkdvb2dsZSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLjkpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0IDAuM3MsIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0IDAuM3M7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zMiksIDAgMC4wNjI1cmVtIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXIge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuYmFyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcInNlYXJjaFxcXCI7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnMgRXh0ZW5kZWRcXFwiO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuYmFyIGlucHV0IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBmb250LWZhbWlseTogXFxcIkdvb2dsZSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG91dGxpbmU6ICNmZjc3M2QgM3B4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMC41cmVtIDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogOTBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZS5zaG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZSBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTQwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lIC5kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbXV0ZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQge1xcbiAgLyogXFxuICAgKiAgIE11c3QgcmVtb3ZlIDIgeCBwYWRkaW5nIG9yIGl0IGRvZXNudCB3b3JrIFxcbiAgICovXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZTMwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQub3BlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIgLkN3Q3hGZCB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIuRTBaazliIHtcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnV0dG9uIHtcXG4gIHdpZHRoOiAxMTYuMTU2cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5HcUxpNGQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSkgY29udHJhc3QoMS4xKTtcXG59XFxuXFxuaHRtbCBib2R5IC5kU0d2emYge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmh0bWwgYm9keSAuQ1ZWWGZjIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogaW5pdGlhbDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDg0ZDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MjU3ICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX211dGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfZHJvcGRvd24uZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogIzkzOTU5RiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDE4MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5wbGFjZWhvbGRlcixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtcGx1cyBzcGFuLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbiB7XFxuICBib3JkZXItY29sb3I6ICM5Mzk1OUY7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4ge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICNjY2NjY2MgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLXNsaW1zZWxlY3QtbGFyZ2Uuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19zbmFja2JhciB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB6LWluZGV4OiA5OTk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDhweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoMTZweCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLCBvcGFjaXR5IDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19zbmFja2Jhci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1sYWJlbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1jbG9zZSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnN0YWRpYXBsdXNfc25hY2tiYXItY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcy1tYWlue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3VzZXItc2VsZWN0Om5vbmU7Y29sb3I6IzY2Njt3aWR0aDoxMDAlfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWR7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYmVsb3d7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXJ7ZmxleDoxIDEgMTAwJTt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6Y2FsYygxMDAlIC0gMzBweCk7bGluZS1oZWlnaHQ6MWVtOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciwuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyICp7d2lkdGg6YXV0b30uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAuc3MtZGlzYWJsZWR7Y29sb3I6I2RlZGVkZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1kZXNlbGVjdHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtmbGV4OjAgMSBhdXRvO21hcmdpbjowIDZweDtmb250LXdlaWdodDo3MDB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3Quc3MtaGlkZXtkaXNwbGF5Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHh9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbntib3JkZXI6c29saWQgIzY2Njtib3JkZXItd2lkdGg6MCAycHggMnB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzozcHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG1hcmdpbiAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbi5hcnJvdy11cHt0cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpO21hcmdpbjozcHggMCAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctZG93bnt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTttYXJnaW46LTNweCAwIDB9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Y3Vyc29yOnBvaW50ZXI7bWluLWhlaWdodDozMHB4O3dpZHRoOjEwMCU7cGFkZGluZzowIDAgMCAzcHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2RjZGVlMjtjdXJzb3I6bm90LWFsbG93ZWR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLWRpc2FibGVke2NvbG9yOiM2NjZ9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWFib3Zle2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4OjEgMSAxMDAlO3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtkaXNwbGF5OmZsZXg7cGFkZGluZzo0cHggNXB4O21hcmdpbjoycHggMDtsaW5lLWhlaWdodDoxZW07YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7Y29sb3I6I2RlZGVkZTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9QGtleWZyYW1lcyBzY2FsZUluezAle3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9dG97dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzY2FsZU91dHswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfXRve3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZXtkaXNwbGF5OmZsZXg7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEycHg7cGFkZGluZzozcHggNXB4O21hcmdpbjozcHggNXB4IDNweCAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZiO2JvcmRlci1yYWRpdXM6NHB4O2FuaW1hdGlvbi1uYW1lOnNjYWxlSW47YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUuc3Mtb3V0e2FuaW1hdGlvbi1uYW1lOnNjYWxlT3V0O2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUgLnNzLXZhbHVlLWRlbGV0ZXttYXJnaW46MCAwIDAgNXB4O2N1cnNvcjpwb2ludGVyfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRke2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSAzcHg7bWFyZ2luOjlweCAxMnB4IDAgNXB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiM2NjY7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHg7d2lkdGg6MnB4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yc30uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1czphZnRlcntiYWNrZ3JvdW5kOiM2NjY7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O3dpZHRoOjEwcHg7bGVmdDotNHB4O3RvcDo0cHh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXMuc3MtY3Jvc3N7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnNzLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTttYXJnaW46LTFweCAwIDA7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjt6LWluZGV4OjEwMTA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsb3BhY2l0eSAuMnM7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZVkoMCl9LnNzLWNvbnRlbnQuc3Mtb3BlbntkaXNwbGF5OmJsb2NrO29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGVZKDEpfS5zcy1jb250ZW50IC5zcy1zZWFyY2h7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztwYWRkaW5nOjhweCA4cHggNnB4fS5zcy1jb250ZW50IC5zcy1zZWFyY2guc3MtaGlkZSwuc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUgaW5wdXR7aGVpZ2h0OjA7b3BhY2l0eTowO3BhZGRpbmc6MDttYXJnaW46MH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtmbGV4OjEgMSBhdXRvO3dpZHRoOjEwMCU7bWluLXdpZHRoOjA7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHggOHB4O21hcmdpbjowO2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO3RleHQtYWxpZ246bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojOGE4YThhO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OmZvY3Vze2JveC1zaGFkb3c6MCAwIDVweCAjNTg5N2ZifS5zcy1jb250ZW50IC5zcy1zZWFyY2ggLnNzLWFkZGFibGV7ZGlzcGxheTppbmxpbmUtZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MjJweDtmb250LXdlaWdodDo3MDA7ZmxleDowIDAgMzBweDtoZWlnaHQ6MzBweDttYXJnaW46MCAwIDAgOHB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNzLWNvbnRlbnQgLnNzLWFkZGFibGV7cGFkZGluZy10b3A6MH0uc3MtY29udGVudCAuc3MtbGlzdHttYXgtaGVpZ2h0OjIwMHB4O292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bzt0ZXh0LWFsaWduOmxlZnR9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRncm91cC1sYWJlbHtwYWRkaW5nOjZweCAxMHB4O2ZvbnQtd2VpZ2h0OjcwMH0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0Z3JvdXAgLnNzLW9wdGlvbntwYWRkaW5nOjZweCA2cHggNnB4IDI1cHh9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGV7Y3Vyc29yOnBvaW50ZXJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGU6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbntwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmV9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbiAqe2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtaGlnaGxpZ2h0ZWQsLnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVke2N1cnNvcjpub3QtYWxsb3dlZDtjb2xvcjojZGVkZWRlO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uOm5vdCguc3MtZGlzYWJsZWQpLnNzLW9wdGlvbi1zZWxlY3RlZHtjb2xvcjojNjY2O2JhY2tncm91bmQtY29sb3I6cmdiYSg4OCwxNTEsMjUxLC4xKX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gLnNzLXNlYXJjaC1oaWdobGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZmZmYjhjfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXR0eS1jaGVja2JveC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBcImNvbnN0IE1vbml0b3JSdW5uYWJsZSA9IGZ1bmN0aW9uICgpIHtcXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XFxuICAgIHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XFxuICAgIHRoaXMub3JpZ2luYWxSVEM7XFxuICAgIHRoaXMuc3RhcnRUaW1lO1xcbiAgICB0aGlzLmVsZW1lbnQ7XFxuICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcXG4gICAgdGhpcy54ID0gMDtcXG4gICAgdGhpcy55ID0gMDtcXG5cXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XFxuICAgIHRoaXMub3JpZ2luYWxSVEMgPSBSVENQZWVyQ29ubmVjdGlvbjtcXG4gICAgKGZ1bmN0aW9uIChPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24pIHtcXG4gICAgICAgIHNlbGYub3JpZ2luYWxSVEMgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb247XFxuXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhcmdzKSB7XFxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24oYXJncyk7XFxuICAgICAgICAgICAgc2VsZi5wZWVyQ29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcXG4gICAgICAgIH07XFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24ucHJvdG90eXBlO1xcbiAgICB9KShSVENQZWVyQ29ubmVjdGlvbik7XFxuXFxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XFxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpO1xcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID1cXG4gICAgICAgICAgICAnbmV0d29ya21vbml0b3ItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XFxuXFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XFxuXFxuICAgICAgICB0aGlzLnNldEVkaXRhYmxlKHRydWUpO1xcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XFxuICAgICAgICB0aGlzLnggPSB4O1xcbiAgICAgICAgdGhpcy55ID0geTtcXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xcblxcbiAgICAgICAgY29uc3QgY29ybmVycyA9IHtcXG4gICAgICAgICAgICB0bDogMTAsXFxuICAgICAgICAgICAgdHI6IDEwLFxcbiAgICAgICAgICAgIGJsOiAxMCxcXG4gICAgICAgICAgICBicjogMTAsXFxuICAgICAgICB9O1xcblxcbiAgICAgICAgaWYgKHRoaXMueCA8IDEwKSB7XFxuICAgICAgICAgICAgY29ybmVycy50bCA9IDA7XFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAodGhpcy55IDwgMTApIHtcXG4gICAgICAgICAgICBjb3JuZXJzLnRsID0gMDtcXG4gICAgICAgICAgICBjb3JuZXJzLnRyID0gMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCAtIDEwKSB7XFxuICAgICAgICAgICAgY29ybmVycy50ciA9IDA7XFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAtIDEwKSB7XFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbXFxuICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnXFxuICAgICAgICBdID0gYCR7Y29ybmVycy50bH1weCAke2Nvcm5lcnMudHJ9cHggJHtjb3JuZXJzLmJyfXB4ICR7Y29ybmVycy5ibH1weGA7XFxuICAgIH07XFxuXFxuICAgIHRoaXMubW91c2VFdmVudHMgPSBbXTtcXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcXG4gICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcXG4gICAgdGhpcy5zZXRFZGl0YWJsZSA9IGZ1bmN0aW9uIChlZGl0YWJsZSkge1xcbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGVkaXRhYmxlO1xcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRhYmxlJywgZWRpdGFibGUpO1xcblxcbiAgICAgICAgaWYgKGVkaXRhYmxlKSB7XFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5wdXNoKFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlbW92ZScsXFxuICAgICAgICAgICAgICAgICAgICBmbjogKGV2ZW50KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWF4KFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgLy8gTWluaW11bSB4IHZhbHVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCwgLy8gTWF4aW11bSB4IHZhbHVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIHRoaXMub2Zmc2V0LngsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1heChcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC8vIE1pbmltdW0geSB2YWx1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCwgLy8gTWF4aW11bSB5IHZhbHVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIHRoaXMub2Zmc2V0LnksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2Vkb3duJyxcXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZXZlbnQpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLng7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLnk7XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNldXAnLFxcbiAgICAgICAgICAgICAgICAgICAgZm46IChldmVudCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT5cXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgZXZlbnQuZm4pLFxcbiAgICAgICAgICAgICk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+XFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGV2ZW50LmZuKSxcXG4gICAgICAgICAgICApO1xcbiAgICAgICAgfVxcbiAgICB9O1xcblxcbiAgICB0aGlzLnNldFZpc2libGUgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XFxuICAgICAgICB0aGlzLnNldEVkaXRhYmxlKGZhbHNlKTtcXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcXG5cXG4gICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uID0gdGhpcy5vcmlnaW5hbFJUQztcXG4gICAgICAgIHBlZXJDb25uZWN0aW9ucyA9IFtdO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLnZpc2libGUgPSB7XFxuICAgICAgICB0aW1lOiB0cnVlLFxcbiAgICAgICAgcmVzb2x1dGlvbjogdHJ1ZSxcXG4gICAgICAgIEZQUzogdHJ1ZSxcXG4gICAgICAgIGxhdGVuY3k6IHRydWUsXFxuICAgICAgICBjb2RlYzogdHJ1ZSxcXG4gICAgICAgIHRyYWZmaWM6IHRydWUsXFxuICAgICAgICAnY3VycmVudC10cmFmZmljJzogdHJ1ZSxcXG4gICAgICAgICdhdmVyYWdlLXRyYWZmaWMnOiB0cnVlLFxcbiAgICAgICAgJ3BhY2tldHMtbG9zdCc6IHRydWUsXFxuICAgICAgICAnYXZlcmFnZS1wYWNrZXQtbG9zcyc6IHRydWUsXFxuICAgICAgICAnaml0dGVyLWJ1ZmZlcic6IHRydWUsXFxuICAgIH07XFxuXFxuICAgIHRoaXMuc3RhdHMgPSBbXTtcXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICBpZiAodGhpcy5wZWVyQ29ubmVjdGlvbnMubGVuZ3RoID4gMSkge1xcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wZWVyQ29ubmVjdGlvbnMubGVuZ3RoIC0gMTtcXG5cXG4gICAgICAgICAgICB0aGlzLnBlZXJDb25uZWN0aW9uc1tpbmRleF0uZ2V0U3RhdHMoKS50aGVuKChfc3RhdHMpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0cyA9IEFycmF5LmZyb20oX3N0YXRzKTtcXG5cXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtID0gdGhpcy5nZXRTdGF0KChzdGF0KSA9PlxcbiAgICAgICAgICAgICAgICAgICAgc3RhdFswXS5zdGFydHNXaXRoKCdSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0nKSxcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDSWNlQ2FuZGlkYXRlUGFpciA9IHRoaXMuZ2V0U3RhdCgoc3RhdCkgPT5cXG4gICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDSWNlQ2FuZGlkYXRlUGFpcicpLFxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICBjb25zdCBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyID0gdGhpcy5nZXRTdGF0KFxcbiAgICAgICAgICAgICAgICAgICAgKHN0YXQpID0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdFswXS5zdGFydHNXaXRoKCdSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyJykgJiZcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0WzFdLmtpbmQgPT09ICd2aWRlbycsXFxuICAgICAgICAgICAgICAgICk7XFxuXFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdXRpb24gPSB0aGlzLmdldFJlc29sdXRpb24oXFxuICAgICAgICAgICAgICAgICAgICBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLFxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICBjb25zdCBmcHMgPSB0aGlzLmdldEZQUyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pO1xcbiAgICAgICAgICAgICAgICBjb25zdCBsYXRlbmN5ID0gdGhpcy5nZXRMYXRlbmN5KFJUQ0ljZUNhbmRpZGF0ZVBhaXIpICsgJyBtcyc7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGVjID0gdGhpcy5nZXRDb2RlYyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pO1xcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRyYWZmaWMgPSB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpLFxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VHJhZmZpYyA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RG93bmxvYWRTcGVlZChSVENJY2VDYW5kaWRhdGVQYWlyKSxcXG4gICAgICAgICAgICAgICAgICAgICkgKyAnL3MnO1xcbiAgICAgICAgICAgICAgICBjb25zdCBhdmVyYWdlVHJhZmZpYyA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXZlcmFnZURvd25sb2FkU3BlZWQoUlRDSWNlQ2FuZGlkYXRlUGFpciksXFxuICAgICAgICAgICAgICAgICAgICApICsgJy9zJztcXG4gICAgICAgICAgICAgICAgY29uc3QgcGFja2V0c0xvc3QgPSB0aGlzLmdldFBhY2tldHNMb3N0KFxcbiAgICAgICAgICAgICAgICAgICAgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLFxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICBjb25zdCBhdmVyYWdlUGFja2V0TG9zcyA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEF2ZXJhZ2VQYWNrZXRMb3NzKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkgKyAnJSc7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGppdHRlckJ1ZmZlciA9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEppdHRlckJ1ZmZlcihSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSArICcgbXMnO1xcblxcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9ICcnO1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWyd0aW1lJ10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKTtcXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lU3RyaW5nID0gdGltZS50b0xvY2FsZVN0cmluZygpO1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGg1PiR7dGltZVN0cmluZ308L2g1PmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHVsPic7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3Jlc29sdXRpb24nXSkge1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPlJlc29sdXRpb246ICR7cmVzb2x1dGlvbi53aWR0aH14JHtyZXNvbHV0aW9uLmhlaWdodH08L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnRlBTJ10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5GUFM6ICR7ZnBzfTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydsYXRlbmN5J10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5MYXRlbmN5OiAke2xhdGVuY3l9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2NvZGVjJ10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5Db2RlYzogJHtjb2RlY308L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsndHJhZmZpYyddKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+VG90YWwgVHJhZmZpYzogJHt0b3RhbFRyYWZmaWN9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2N1cnJlbnQtdHJhZmZpYyddKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+Q3VycmVudCBUcmFmZmljOiAke2N1cnJlbnRUcmFmZmljfTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydhdmVyYWdlLXRyYWZmaWMnXSkge1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkF2ZXJhZ2UgVHJhZmZpYzogJHthdmVyYWdlVHJhZmZpY308L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsncGFja2V0cy1sb3N0J10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5QYWNrZXRzIExvc3Q6ICR7cGFja2V0c0xvc3R9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnXSkge1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkF2ZXJhZ2UgUGFja2V0IExvc3M6ICR7YXZlcmFnZVBhY2tldExvc3N9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2ppdHRlci1idWZmZXInXSkge1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkppdHRlciBCdWZmZXI6ICR7aml0dGVyQnVmZmVyfTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8L3VsPic7XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcXG4gICAgICAgICAgICAgICAgPGg1PkVycm9yPC9oNT5cXG4gICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICBVaCBvaCwgc29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcuIFxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmZWF0dXJlIGlzIHN0aWxsIHZlcnkgdW5zdGFibGUgYW5kIFxcbiAgICAgICAgICAgICAgICAgICAgdGhlIGRldmVsb3BlciBrbm93cyB0aGVyZSBhcmUgcHJvYmxlbXMsIFxcbiAgICAgICAgICAgICAgICAgICAgcGxlYXNlIHVuZGVyc3RhbmQgdGhhdCB0aGlzIGlzc3VlIGlzIFxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlbHkgYmVpbmcgd29ya2VkIG9uLlxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkJz5FcnJvciBDb2RlOiAwMDEgLSBTdGF0cyB1bmF2YWlsYWJsZTwvcD5cXG4gICAgICAgICAgICBgO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xcbiAgICAgICAgICAgIH0sIDEwMDApO1xcbiAgICAgICAgfVxcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldFN0YXQgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XFxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0cy5maW5kKGZpbHRlcilbMV07XFxuICAgIH07XFxuXFxuICAgIHRoaXMudHJhbnNsYXRlQml0VW5pdHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcXG4gICAgICAgIGNvbnN0IHVuaXRzID0gWydCJywgJ2tCJywgJ01CJywgJ0dCJ107XFxuXFxuICAgICAgICBsZXQgaSA9IDA7XFxuICAgICAgICB3aGlsZSAodmFsdWUgLyAxMDAwID49IDEpIHtcXG4gICAgICAgICAgICBpKys7XFxuICAgICAgICAgICAgdmFsdWUgLz0gMTAwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHJldHVybiAoXFxuICAgICAgICAgICAgdmFsdWUudG9QcmVjaXNpb24oNCkgKyAnICcgKyB1bml0c1tNYXRoLm1pbih1bml0cy5sZW5ndGggLSAxLCBpKV1cXG4gICAgICAgICk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0TGF0ZW5jeSA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxuICAgICAgICByZXR1cm4gUlRDSWNlQ2FuZGlkYXRlUGFpci5jdXJyZW50Um91bmRUcmlwVGltZSAqIDEwMDA7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0Sml0dGVyQnVmZmVyID0gZnVuY3Rpb24gKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIpIHtcXG4gICAgICAgIHJldHVybiAoXFxuICAgICAgICAgICAgKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuaml0dGVyQnVmZmVyRGVsYXkgKiAxMDAwKSAvXFxuICAgICAgICAgICAgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5qaXR0ZXJCdWZmZXJFbWl0dGVkQ291bnRcXG4gICAgICAgICkudG9QcmVjaXNpb24oNCk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0UGFja2V0c0xvc3QgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxuICAgICAgICByZXR1cm4gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0O1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldEF2ZXJhZ2VQYWNrZXRMb3NzID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcbiAgICAgICAgcmV0dXJuIChcXG4gICAgICAgICAgICAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0IC9cXG4gICAgICAgICAgICAgICAgKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzUmVjZWl2ZWQgK1xcbiAgICAgICAgICAgICAgICAgICAgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0KSkgKlxcbiAgICAgICAgICAgIDEwMFxcbiAgICAgICAgKS50b1ByZWNpc2lvbigyKTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5sYXN0RG93bmxvYWQgPSAwO1xcbiAgICB0aGlzLmdldERvd25sb2FkU3BlZWQgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSB0aGlzLmdldFRvdGFsRG93bmxvYWQoUlRDSWNlQ2FuZGlkYXRlUGFpcik7XFxuICAgICAgICBjb25zdCBzcGVlZCA9IGRvd25sb2FkIC0gdGhpcy5sYXN0RG93bmxvYWQ7XFxuICAgICAgICB0aGlzLmxhc3REb3dubG9hZCA9IGRvd25sb2FkO1xcbiAgICAgICAgcmV0dXJuIHNwZWVkO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldEF2ZXJhZ2VEb3dubG9hZFNwZWVkID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXG4gICAgICAgIHJldHVybiAoXFxuICAgICAgICAgICAgdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIC9cXG4gICAgICAgICAgICAodGhpcy50aW1lU2luY2VTdGFydCgpIC8gMTAwMClcXG4gICAgICAgICk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZCA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxuICAgICAgICByZXR1cm4gUlRDSWNlQ2FuZGlkYXRlUGFpci5ieXRlc1JlY2VpdmVkO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldFJlc29sdXRpb24gPSBmdW5jdGlvbiAoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcikge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICB3aWR0aDogUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5mcmFtZVdpZHRoLFxcbiAgICAgICAgICAgIGhlaWdodDogUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5mcmFtZUhlaWdodCxcXG4gICAgICAgIH07XFxuICAgIH07XFxuXFxuICAgIHRoaXMuZ2V0Q29kZWMgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxuICAgICAgICBjb25zdCBjb2RlY1N0YXQgPSB0aGlzLmdldFN0YXQoXFxuICAgICAgICAgICAgKHN0YXQpID0+IHN0YXRbMF0gPT09IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5jb2RlY0lkLFxcbiAgICAgICAgKTtcXG4gICAgICAgIHJldHVybiBjb2RlY1N0YXQubWltZVR5cGUuc3Vic3RyaW5nKCd2aWRlby8nLmxlbmd0aCk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMubGFzdEZyYW1lcyA9IDA7XFxuICAgIHRoaXMuZ2V0RlBTID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcbiAgICAgICAgY29uc3QgZnBzID0gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLmZyYW1lc0RlY29kZWQgLSB0aGlzLmxhc3RGcmFtZXM7XFxuICAgICAgICB0aGlzLmxhc3RGcmFtZXMgPSBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0uZnJhbWVzRGVjb2RlZDtcXG4gICAgICAgIHJldHVybiBmcHM7XFxuICAgIH07XFxuXFxuICAgIHRoaXMudGltZVNpbmNlU3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xcbiAgICB9O1xcbn07XFxuXFxuU3RhZGlhUGx1c01vbml0b3IgPSBuZXcgTW9uaXRvclJ1bm5hYmxlKCk7XFxuXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGltc2VsZWN0Lm1pbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2xpbVNlbGVjdD10KCk6ZS5TbGltU2VsZWN0PXQoKX0od2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuKHM9e30sbi5tPWk9W2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7dD10fHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBpPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIGkuaW5pdEN1c3RvbUV2ZW50KGUsdC5idWJibGVzLHQuY2FuY2VsYWJsZSx0LmRldGFpbCksaX12YXIgbjt0Ll9fZXNNb2R1bGU9ITAsdC5oYXNDbGFzc0luVHJlZT1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHMoZSx0KXtyZXR1cm4gdCYmZSYmZS5jbGFzc0xpc3QmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKHQpP2U6bnVsbH1yZXR1cm4gcyhlLHQpfHxmdW5jdGlvbiBlKHQsaSl7cmV0dXJuIHQmJnQhPT1kb2N1bWVudD9zKHQsaSk/dDplKHQucGFyZW50Tm9kZSxpKTpudWxsfShlLHQpfSx0LmVuc3VyZUVsZW1lbnRJblZpZXc9ZnVuY3Rpb24oZSx0KXt2YXIgaT1lLnNjcm9sbFRvcCtlLm9mZnNldFRvcCxzPWkrZS5jbGllbnRIZWlnaHQsbj10Lm9mZnNldFRvcCxhPW4rdC5jbGllbnRIZWlnaHQ7bjxpP2Uuc2Nyb2xsVG9wLT1pLW46czxhJiYoZS5zY3JvbGxUb3ArPWEtcyl9LHQucHV0Q29udGVudD1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ZS5vZmZzZXRIZWlnaHQsbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGE9aT9uLnRvcDpuLnRvcC1zLG89aT9uLmJvdHRvbTpuLmJvdHRvbStzO3JldHVybiBhPD0wP1wiYmVsb3dcIjpvPj13aW5kb3cuaW5uZXJIZWlnaHQ/XCJhYm92ZVwiOmk/dDpcImJlbG93XCJ9LHQuZGVib3VuY2U9ZnVuY3Rpb24obixhLG8pe3ZhciBsO3JldHVybiB2b2lkIDA9PT1hJiYoYT0xMDApLHZvaWQgMD09PW8mJihvPSExKSxmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyllW3RdPWFyZ3VtZW50c1t0XTt2YXIgaT1zZWxmLHM9byYmIWw7Y2xlYXJUaW1lb3V0KGwpLGw9c2V0VGltZW91dChmdW5jdGlvbigpe2w9bnVsbCxvfHxuLmFwcGx5KGksZSl9LGEpLHMmJm4uYXBwbHkoaSxlKX19LHQuaXNWYWx1ZUluQXJyYXlPZk9iamVjdHM9ZnVuY3Rpb24oZSx0LGkpe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVybiBlW3RdPT09aTtmb3IodmFyIHM9MCxuPWU7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107aWYoYSYmYVt0XSYmYVt0XT09PWkpcmV0dXJuITB9cmV0dXJuITF9LHQuaGlnaGxpZ2h0PWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz1lLG49bmV3IFJlZ0V4cChcIihcIit0LnRyaW0oKStcIikoPyFbXjxdKj5bXjw+XSo8LylcIixcImlcIik7aWYoIWUubWF0Y2gobikpcmV0dXJuIGU7dmFyIGE9ZS5tYXRjaChuKS5pbmRleCxvPWErZS5tYXRjaChuKVswXS50b1N0cmluZygpLmxlbmd0aCxsPWUuc3Vic3RyaW5nKGEsbyk7cmV0dXJuIHM9cy5yZXBsYWNlKG4sJzxtYXJrIGNsYXNzPVwiJytpKydcIj4nK2wrXCI8L21hcms+XCIpfSxcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXdpbmRvdykuQ3VzdG9tRXZlbnQmJihzLnByb3RvdHlwZT1uLkV2ZW50LnByb3RvdHlwZSxuLkN1c3RvbUV2ZW50PXMpfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5uZXdPcHRpb249ZnVuY3Rpb24oZSl7cmV0dXJue2lkOmUuaWQ/ZS5pZDpTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWU/ZS52YWx1ZTpcIlwiLHRleHQ6ZS50ZXh0P2UudGV4dDpcIlwiLGlubmVySFRNTDplLmlubmVySFRNTD9lLmlubmVySFRNTDpcIlwiLHNlbGVjdGVkOiEhZS5zZWxlY3RlZCYmZS5zZWxlY3RlZCxkaXNwbGF5OnZvaWQgMD09PWUuZGlzcGxheXx8ZS5kaXNwbGF5LGRpc2FibGVkOiEhZS5kaXNhYmxlZCYmZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjohIWUucGxhY2Vob2xkZXImJmUucGxhY2Vob2xkZXIsY2xhc3M6ZS5jbGFzcz9lLmNsYXNzOnZvaWQgMCxkYXRhOmUuZGF0YT9lLmRhdGE6e319fSxuLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oZSl7dGhpcy5kYXRhLnB1c2goe2lkOlN0cmluZyhNYXRoLmZsb29yKDFlOCpNYXRoLnJhbmRvbSgpKSksdmFsdWU6ZS52YWx1ZSx0ZXh0OmUudGV4dCxpbm5lckhUTUw6XCJcIixzZWxlY3RlZDohMSxkaXNwbGF5OiEwLGRpc2FibGVkOiExLHBsYWNlaG9sZGVyOiExLGNsYXNzOnZvaWQgMCxkYXRhOnt9fSl9LG4ucHJvdG90eXBlLnBhcnNlU2VsZWN0RGF0YT1mdW5jdGlvbigpe3RoaXMuZGF0YT1bXTtmb3IodmFyIGU9MCx0PXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudC5jaGlsZE5vZGVzO2U8dC5sZW5ndGg7ZSsrKXt2YXIgaT10W2VdO2lmKFwiT1BUR1JPVVBcIj09PWkubm9kZU5hbWUpe2Zvcih2YXIgcz17bGFiZWw6aS5sYWJlbCxvcHRpb25zOltdfSxuPTAsYT1pLmNoaWxkTm9kZXM7bjxhLmxlbmd0aDtuKyspe3ZhciBvPWFbbl07aWYoXCJPUFRJT05cIj09PW8ubm9kZU5hbWUpe3ZhciBsPXRoaXMucHVsbE9wdGlvbkRhdGEobyk7cy5vcHRpb25zLnB1c2gobCksbC5wbGFjZWhvbGRlciYmXCJcIiE9PWwudGV4dC50cmltKCkmJih0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dD1sLnRleHQpfX10aGlzLmRhdGEucHVzaChzKX1lbHNlXCJPUFRJT05cIj09PWkubm9kZU5hbWUmJihsPXRoaXMucHVsbE9wdGlvbkRhdGEoaSksdGhpcy5kYXRhLnB1c2gobCksbC5wbGFjZWhvbGRlciYmXCJcIiE9PWwudGV4dC50cmltKCkmJih0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dD1sLnRleHQpKX19LG4ucHJvdG90eXBlLnB1bGxPcHRpb25EYXRhPWZ1bmN0aW9uKGUpe3JldHVybntpZDohIWUuZGF0YXNldCYmZS5kYXRhc2V0LmlkfHxTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWUsdGV4dDplLnRleHQsaW5uZXJIVE1MOmUuaW5uZXJIVE1MLHNlbGVjdGVkOmUuc2VsZWN0ZWQsZGlzYWJsZWQ6ZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjpcInRydWVcIj09PWUuZGF0YXNldC5wbGFjZWhvbGRlcixjbGFzczplLmNsYXNzTmFtZSxzdHlsZTplLnN0eWxlLmNzc1RleHQsZGF0YTplLmRhdGFzZXR9fSxuLnByb3RvdHlwZS5zZXRTZWxlY3RlZEZyb21TZWxlY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgZT1bXSx0PTAsaT10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQub3B0aW9uczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtpZihzLnNlbGVjdGVkKXt2YXIgbj10aGlzLmdldE9iamVjdEZyb21EYXRhKHMudmFsdWUsXCJ2YWx1ZVwiKTtuJiZuLmlkJiZlLnB1c2gobi5pZCl9fXRoaXMuc2V0U2VsZWN0ZWQoZSxcImlkXCIpfWVsc2V7dmFyIGE9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50O2lmKC0xIT09YS5zZWxlY3RlZEluZGV4KXt2YXIgbz1hLm9wdGlvbnNbYS5zZWxlY3RlZEluZGV4XS52YWx1ZTt0aGlzLnNldFNlbGVjdGVkKG8sXCJ2YWx1ZVwiKX19fSxuLnByb3RvdHlwZS5zZXRTZWxlY3RlZD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PVwiaWRcIik7Zm9yKHZhciBpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO3IucGxhY2Vob2xkZXJ8fChyLnNlbGVjdGVkPXRoaXMuc2hvdWxkQmVTZWxlY3RlZChyLGUsdCkpfX19ZWxzZSBuLnNlbGVjdGVkPXRoaXMuc2hvdWxkQmVTZWxlY3RlZChuLGUsdCl9fSxuLnByb3RvdHlwZS5zaG91bGRCZVNlbGVjdGVkPWZ1bmN0aW9uKGUsdCxpKXtpZih2b2lkIDA9PT1pJiYoaT1cImlkXCIpLEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciBzPTAsbj10O3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO2lmKGkgaW4gZSYmU3RyaW5nKGVbaV0pPT09U3RyaW5nKGEpKXJldHVybiEwfWVsc2UgaWYoaSBpbiBlJiZTdHJpbmcoZVtpXSk9PT1TdHJpbmcodCkpcmV0dXJuITA7cmV0dXJuITF9LG4ucHJvdG90eXBlLmdldFNlbGVjdGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHR9LHQ9W10saT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtyLnNlbGVjdGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3QucHVzaChyKTplPXIpfX19ZWxzZSBuLnNlbGVjdGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3QucHVzaChuKTplPW4pfXJldHVybiB0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/dDplfSxuLnByb3RvdHlwZS5hZGRUb1NlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9XCJpZFwiKSx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe3ZhciBpPVtdLHM9dGhpcy5nZXRTZWxlY3RlZCgpO2lmKEFycmF5LmlzQXJyYXkocykpZm9yKHZhciBuPTAsYT1zO248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2kucHVzaChvW3RdKX1pLnB1c2goZSksdGhpcy5zZXRTZWxlY3RlZChpLHQpfX0sbi5wcm90b3R5cGUucmVtb3ZlRnJvbVNlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9XCJpZFwiKSx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgaT1bXSxzPTAsbj10aGlzLmdldFNlbGVjdGVkKCk7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107U3RyaW5nKGFbdF0pIT09U3RyaW5nKGUpJiZpLnB1c2goYVt0XSl9dGhpcy5zZXRTZWxlY3RlZChpLHQpfX0sbi5wcm90b3R5cGUub25EYXRhQ2hhbmdlPWZ1bmN0aW9uKCl7dGhpcy5tYWluLm9uQ2hhbmdlJiZ0aGlzLmlzT25DaGFuZ2VFbmFibGVkJiZ0aGlzLm1haW4ub25DaGFuZ2UoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdldFNlbGVjdGVkKCkpKSl9LG4ucHJvdG90eXBlLmdldE9iamVjdEZyb21EYXRhPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9XCJpZFwiKTtmb3IodmFyIGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZih0IGluIG4mJlN0cmluZyhuW3RdKT09PVN0cmluZyhlKSlyZXR1cm4gbjtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bjtpZihhLm9wdGlvbnMpZm9yKHZhciBvPTAsbD1hLm9wdGlvbnM7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107aWYoU3RyaW5nKHJbdF0pPT09U3RyaW5nKGUpKXJldHVybiByfX19cmV0dXJuIG51bGx9LG4ucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbihuKXtpZihcIlwiIT09KHRoaXMuc2VhcmNoVmFsdWU9bikudHJpbSgpKXt2YXIgYT10aGlzLm1haW4uY29uZmlnLnNlYXJjaEZpbHRlcixlPXRoaXMuZGF0YS5zbGljZSgwKTtuPW4udHJpbSgpO3ZhciB0PWUubWFwKGZ1bmN0aW9uKGUpe2lmKGUuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgdD1lLGk9W107aWYodC5vcHRpb25zJiYoaT10Lm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBhKGUsbil9KSksMCE9PWkubGVuZ3RoKXt2YXIgcz1PYmplY3QuYXNzaWduKHt9LHQpO3JldHVybiBzLm9wdGlvbnM9aSxzfX1yZXR1cm4gZS5oYXNPd25Qcm9wZXJ0eShcInRleHRcIikmJmEoZSxuKT9lOm51bGx9KTt0aGlzLmZpbHRlcmVkPXQuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9ZWxzZSB0aGlzLmZpbHRlcmVkPW51bGx9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5jb250ZW50T3Blbj0hMSx0aGlzLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsdGhpcy5pc09uQ2hhbmdlRW5hYmxlZD0hMCx0aGlzLm1haW49ZS5tYWluLHRoaXMuc2VhcmNoVmFsdWU9XCJcIix0aGlzLmRhdGE9W10sdGhpcy5maWx0ZXJlZD1udWxsLHRoaXMucGFyc2VTZWxlY3REYXRhKCksdGhpcy5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKX1mdW5jdGlvbiByKGUpe3JldHVybiB2b2lkIDAhPT1lLnRleHR8fChjb25zb2xlLmVycm9yKFwiRGF0YSBvYmplY3Qgb3B0aW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBoYXZlIGEgdGV4dCB2YWx1ZS4gQ2hlY2sgb2JqZWN0OiBcIitKU09OLnN0cmluZ2lmeShlKSksITEpfXQuRGF0YT1zLHQudmFsaWRhdGVEYXRhPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiBjb25zb2xlLmVycm9yKFwiRGF0YSBtdXN0IGJlIGFuIGFycmF5IG9mIG9iamVjdHNcIiksITE7Zm9yKHZhciB0PTAsaT0wLHM9ZTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3IobFtvXSl8fHQrK319fWVsc2UgcihuKXx8dCsrfXJldHVybiAwPT09dH0sdC52YWxpZGF0ZU9wdGlvbj1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPWkoMyksbj1pKDQpLGE9aSg1KSxvPWkoMSksbD1pKDApLHI9KGMucHJvdG90eXBlLnZhbGlkYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PVwic3RyaW5nXCI9PXR5cGVvZiBlLnNlbGVjdD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuc2VsZWN0KTplLnNlbGVjdDtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBzZWxlY3QgZWxlbWVudFwiKTtpZihcIlNFTEVDVFwiIT09dC50YWdOYW1lKXRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXNudCBvZiB0eXBlIHNlbGVjdFwiKTtyZXR1cm4gdH0sYy5wcm90b3R5cGUuc2VsZWN0ZWQ9ZnVuY3Rpb24oKXtpZih0aGlzLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGU9W10sdD0wLGk9bj10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtlLnB1c2gocy52YWx1ZSl9cmV0dXJuIGV9dmFyIG47cmV0dXJuKG49dGhpcy5kYXRhLmdldFNlbGVjdGVkKCkpP24udmFsdWU6XCJcIn0sYy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCxpLHMpe3ZvaWQgMD09PXQmJih0PVwidmFsdWVcIiksdm9pZCAwPT09aSYmKGk9ITApLHZvaWQgMD09PXMmJihzPSEwKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiYhQXJyYXkuaXNBcnJheShlKT90aGlzLmRhdGEuYWRkVG9TZWxlY3RlZChlLHQpOnRoaXMuZGF0YS5zZXRTZWxlY3RlZChlLHQpLHRoaXMuc2VsZWN0LnNldFZhbHVlKCksdGhpcy5kYXRhLm9uRGF0YUNoYW5nZSgpLHRoaXMucmVuZGVyKCksaSYmdGhpcy5jbG9zZSgpfSxjLnByb3RvdHlwZS5zZXRTZWxlY3RlZD1mdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT10JiYodD1cInZhbHVlXCIpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCksdGhpcy5zZXQoZSx0LGkscyl9LGMucHJvdG90eXBlLnNldERhdGE9ZnVuY3Rpb24oZSl7aWYoby52YWxpZGF0ZURhdGEoZSkpe3ZhciB0PUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpLGk9dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7aWYodGhpcy5jb25maWcuaXNBamF4JiZpKWlmKHRoaXMuY29uZmlnLmlzTXVsdGlwbGUpZm9yKHZhciBzPTAsbj1pLnJldmVyc2UoKTtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTt0LnVuc2hpZnQoYSl9ZWxzZSB0LnVuc2hpZnQodGhpcy5kYXRhLmdldFNlbGVjdGVkKCkpLHQudW5zaGlmdCh7dGV4dDpcIlwiLHBsYWNlaG9sZGVyOiEwfSk7dGhpcy5zZWxlY3QuY3JlYXRlKHQpLHRoaXMuZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCl9ZWxzZSBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbiBwcm9ibGVtIG9uOiAjXCIrdGhpcy5zZWxlY3QuZWxlbWVudC5pZCl9LGMucHJvdG90eXBlLmFkZERhdGE9ZnVuY3Rpb24oZSl7by52YWxpZGF0ZURhdGEoW2VdKT8odGhpcy5kYXRhLmFkZCh0aGlzLmRhdGEubmV3T3B0aW9uKGUpKSx0aGlzLnNlbGVjdC5jcmVhdGUodGhpcy5kYXRhLmRhdGEpLHRoaXMuZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdGhpcy5yZW5kZXIoKSk6Y29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gcHJvYmxlbSBvbjogI1wiK3RoaXMuc2VsZWN0LmVsZW1lbnQuaWQpfSxjLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0aGlzLmNvbmZpZy5pc0VuYWJsZWQmJiF0aGlzLmRhdGEuY29udGVudE9wZW4pe2lmKHRoaXMuYmVmb3JlT3BlbiYmdGhpcy5iZWZvcmVPcGVuKCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQucGx1cy5jbGFzc0xpc3QuYWRkKFwic3MtY3Jvc3NcIik6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3ctZG93blwiKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy11cFwiKSksdGhpcy5zbGltW3RoaXMuY29uZmlnLmlzTXVsdGlwbGU/XCJtdWx0aVNlbGVjdGVkXCI6XCJzaW5nbGVTZWxlY3RlZFwiXS5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3ZlXCI9PT10aGlzLmRhdGEuY29udGVudFBvc2l0aW9uP3RoaXMuY29uZmlnLm9wZW5BYm92ZTp0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuY29uZmlnLmFkZFRvQm9keSl7dmFyIHQ9dGhpcy5zbGltLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt0aGlzLnNsaW0uY29udGVudC5zdHlsZS50b3A9dC50b3ArdC5oZWlnaHQrd2luZG93LnNjcm9sbFkrXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLmxlZnQ9dC5sZWZ0K3dpbmRvdy5zY3JvbGxYK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS53aWR0aD10LndpZHRoK1wicHhcIn1pZih0aGlzLnNsaW0uY29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW4pLFwidXBcIj09PXRoaXMuY29uZmlnLnNob3dDb250ZW50LnRvTG93ZXJDYXNlKCk/dGhpcy5tb3ZlQ29udGVudEFib3ZlKCk6XCJkb3duXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudC50b0xvd2VyQ2FzZSgpP3RoaXMubW92ZUNvbnRlbnRCZWxvdygpOlwiYWJvdmVcIj09PWwucHV0Q29udGVudCh0aGlzLnNsaW0uY29udGVudCx0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uLHRoaXMuZGF0YS5jb250ZW50T3Blbik/dGhpcy5tb3ZlQ29udGVudEFib3ZlKCk6dGhpcy5tb3ZlQ29udGVudEJlbG93KCksIXRoaXMuY29uZmlnLmlzTXVsdGlwbGUpe3ZhciBpPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO2lmKGkpe3ZhciBzPWkuaWQsbj10aGlzLnNsaW0ubGlzdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pZD1cIicrcysnXCJdJyk7biYmbC5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMuc2xpbS5saXN0LG4pfX1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5kYXRhLmNvbnRlbnRPcGVuPSEwLGUuY29uZmlnLnNlYXJjaEZvY3VzJiZlLnNsaW0uc2VhcmNoLmlucHV0LmZvY3VzKCksZS5hZnRlck9wZW4mJmUuYWZ0ZXJPcGVuKCl9LHRoaXMuY29uZmlnLnRpbWVvdXREZWxheSl9fSxjLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5kYXRhLmNvbnRlbnRPcGVuJiYodGhpcy5iZWZvcmVDbG9zZSYmdGhpcy5iZWZvcmVDbG9zZSgpLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkPyh0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQucGx1cy5jbGFzc0xpc3QucmVtb3ZlKFwic3MtY3Jvc3NcIikpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93LWRvd25cIiksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3ctdXBcIikpLHRoaXMuc2xpbS5jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbiksdGhpcy5kYXRhLmNvbnRlbnRPcGVuPSExLHRoaXMuc2VhcmNoKFwiXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnNsaW0uY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKSxlLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIixlLmNvbmZpZy5pc011bHRpcGxlJiZlLnNsaW0ubXVsdGlTZWxlY3RlZD8oZS5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkFib3ZlKSxlLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQmVsb3cpKTplLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJihlLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkFib3ZlKSxlLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkJlbG93KSksZS5zbGltLnNlYXJjaC5pbnB1dC5ibHVyKCksZS5hZnRlckNsb3NlJiZlLmFmdGVyQ2xvc2UoKX0sdGhpcy5jb25maWcudGltZW91dERlbGF5KSl9LGMucHJvdG90eXBlLm1vdmVDb250ZW50QWJvdmU9ZnVuY3Rpb24oKXt2YXIgZT0wO3RoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP2U9dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLm9mZnNldEhlaWdodDp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJihlPXRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIub2Zmc2V0SGVpZ2h0KTt2YXIgdD1lK3RoaXMuc2xpbS5jb250ZW50Lm9mZnNldEhlaWdodC0xO3RoaXMuc2xpbS5jb250ZW50LnN0eWxlLm1hcmdpbj1cIi1cIit0K1wicHggMCAwIDBcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS5oZWlnaHQ9dC1lKzErXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbj1cImNlbnRlciBib3R0b21cIix0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYWJvdmVcIix0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkFib3ZlKSl9LGMucHJvdG90eXBlLm1vdmVDb250ZW50QmVsb3c9ZnVuY3Rpb24oKXt0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIix0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkJlbG93KSl9LGMucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzRW5hYmxlZD0hMCx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5kaXNhYmxlZCk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiZ0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuZGlzYWJsZWQpLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSExLHRoaXMuc2VsZWN0LmVsZW1lbnQuZGlzYWJsZWQ9ITEsdGhpcy5zbGltLnNlYXJjaC5pbnB1dC5kaXNhYmxlZD0hMSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMH0sYy5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzRW5hYmxlZD0hMSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5kaXNhYmxlZCk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiZ0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuZGlzYWJsZWQpLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSExLHRoaXMuc2VsZWN0LmVsZW1lbnQuZGlzYWJsZWQ9ITAsdGhpcy5zbGltLnNlYXJjaC5pbnB1dC5kaXNhYmxlZD0hMCx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMH0sYy5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKHQpe2lmKHRoaXMuZGF0YS5zZWFyY2hWYWx1ZSE9PXQpaWYodGhpcy5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZT10LHRoaXMuY29uZmlnLmlzQWpheCl7dmFyIGk9dGhpczt0aGlzLmNvbmZpZy5pc1NlYXJjaGluZz0hMCx0aGlzLnJlbmRlcigpLHRoaXMuYWpheCYmdGhpcy5hamF4KHQsZnVuY3Rpb24oZSl7aS5jb25maWcuaXNTZWFyY2hpbmc9ITEsQXJyYXkuaXNBcnJheShlKT8oZS51bnNoaWZ0KHt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6ITB9KSxpLnNldERhdGEoZSksaS5kYXRhLnNlYXJjaCh0KSxpLnJlbmRlcigpKTpcInN0cmluZ1wiPT10eXBlb2YgZT9pLnNsaW0ub3B0aW9ucyhlKTppLnJlbmRlcigpfSl9ZWxzZSB0aGlzLmRhdGEuc2VhcmNoKHQpLHRoaXMucmVuZGVyKCl9LGMucHJvdG90eXBlLnNldFNlYXJjaFRleHQ9ZnVuY3Rpb24oZSl7dGhpcy5jb25maWcuc2VhcmNoVGV4dD1lfSxjLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc011bHRpcGxlP3RoaXMuc2xpbS52YWx1ZXMoKToodGhpcy5zbGltLnBsYWNlaG9sZGVyKCksdGhpcy5zbGltLmRlc2VsZWN0KCkpLHRoaXMuc2xpbS5vcHRpb25zKCl9LGMucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9bnVsbCk7dmFyIHQ9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK2UrXCIuc3MtbWFpblwiKTp0aGlzLnNsaW0uY29udGFpbmVyLGk9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3NpZD1cIitlK1wiXVwiKTp0aGlzLnNlbGVjdC5lbGVtZW50O2lmKHQmJmkmJihpLnN0eWxlLmRpc3BsYXk9XCJcIixkZWxldGUgaS5kYXRhc2V0LnNzaWQsaS5zbGltPW51bGwsdC5wYXJlbnRFbGVtZW50JiZ0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodCksdGhpcy5jb25maWcuYWRkVG9Cb2R5KSl7dmFyIHM9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK2UrXCIuc3MtY29udGVudFwiKTp0aGlzLnNsaW0uY29udGVudDtpZighcylyZXR1cm47ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzKX19LGMpO2Z1bmN0aW9uIGMoZSl7dmFyIHQ9dGhpczt0aGlzLmFqYXg9bnVsbCx0aGlzLmFkZGFibGU9bnVsbCx0aGlzLmJlZm9yZU9uQ2hhbmdlPW51bGwsdGhpcy5vbkNoYW5nZT1udWxsLHRoaXMuYmVmb3JlT3Blbj1udWxsLHRoaXMuYWZ0ZXJPcGVuPW51bGwsdGhpcy5iZWZvcmVDbG9zZT1udWxsLHRoaXMuYWZ0ZXJDbG9zZT1udWxsO3ZhciBpPXRoaXMudmFsaWRhdGUoZSk7aS5kYXRhc2V0LnNzaWQmJnRoaXMuZGVzdHJveShpLmRhdGFzZXQuc3NpZCksZS5hamF4JiYodGhpcy5hamF4PWUuYWpheCksZS5hZGRhYmxlJiYodGhpcy5hZGRhYmxlPWUuYWRkYWJsZSksdGhpcy5jb25maWc9bmV3IHMuQ29uZmlnKHtzZWxlY3Q6aSxpc0FqYXg6ISFlLmFqYXgsc2hvd1NlYXJjaDplLnNob3dTZWFyY2gsc2VhcmNoUGxhY2Vob2xkZXI6ZS5zZWFyY2hQbGFjZWhvbGRlcixzZWFyY2hUZXh0OmUuc2VhcmNoVGV4dCxzZWFyY2hpbmdUZXh0OmUuc2VhcmNoaW5nVGV4dCxzZWFyY2hGb2N1czplLnNlYXJjaEZvY3VzLHNlYXJjaEhpZ2hsaWdodDplLnNlYXJjaEhpZ2hsaWdodCxzZWFyY2hGaWx0ZXI6ZS5zZWFyY2hGaWx0ZXIsY2xvc2VPblNlbGVjdDplLmNsb3NlT25TZWxlY3Qsc2hvd0NvbnRlbnQ6ZS5zaG93Q29udGVudCxwbGFjZWhvbGRlclRleHQ6ZS5wbGFjZWhvbGRlcixhbGxvd0Rlc2VsZWN0OmUuYWxsb3dEZXNlbGVjdCxhbGxvd0Rlc2VsZWN0T3B0aW9uOmUuYWxsb3dEZXNlbGVjdE9wdGlvbixoaWRlU2VsZWN0ZWRPcHRpb246ZS5oaWRlU2VsZWN0ZWRPcHRpb24sZGVzZWxlY3RMYWJlbDplLmRlc2VsZWN0TGFiZWwsaXNFbmFibGVkOmUuaXNFbmFibGVkLHZhbHVlc1VzZVRleHQ6ZS52YWx1ZXNVc2VUZXh0LHNob3dPcHRpb25Ub29sdGlwczplLnNob3dPcHRpb25Ub29sdGlwcyxzZWxlY3RCeUdyb3VwOmUuc2VsZWN0QnlHcm91cCxsaW1pdDplLmxpbWl0LHRpbWVvdXREZWxheTplLnRpbWVvdXREZWxheSxhZGRUb0JvZHk6ZS5hZGRUb0JvZHl9KSx0aGlzLnNlbGVjdD1uZXcgbi5TZWxlY3Qoe3NlbGVjdDppLG1haW46dGhpc30pLHRoaXMuZGF0YT1uZXcgby5EYXRhKHttYWluOnRoaXN9KSx0aGlzLnNsaW09bmV3IGEuU2xpbSh7bWFpbjp0aGlzfSksdGhpcy5zZWxlY3QuZWxlbWVudC5wYXJlbnROb2RlJiZ0aGlzLnNlbGVjdC5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuc2xpbS5jb250YWluZXIsdGhpcy5zZWxlY3QuZWxlbWVudC5uZXh0U2libGluZyksZS5kYXRhP3RoaXMuc2V0RGF0YShlLmRhdGEpOnRoaXMucmVuZGVyKCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS50YXJnZXQmJiFsLmhhc0NsYXNzSW5UcmVlKGUudGFyZ2V0LHQuY29uZmlnLmlkKSYmdC5jbG9zZSgpfSksXCJhdXRvXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudCYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixsLmRlYm91bmNlKGZ1bmN0aW9uKGUpe3QuZGF0YS5jb250ZW50T3BlbiYmKFwiYWJvdmVcIj09PWwucHV0Q29udGVudCh0LnNsaW0uY29udGVudCx0LmRhdGEuY29udGVudFBvc2l0aW9uLHQuZGF0YS5jb250ZW50T3Blbik/dC5tb3ZlQ29udGVudEFib3ZlKCk6dC5tb3ZlQ29udGVudEJlbG93KCkpfSksITEpLGUuYmVmb3JlT25DaGFuZ2UmJih0aGlzLmJlZm9yZU9uQ2hhbmdlPWUuYmVmb3JlT25DaGFuZ2UpLGUub25DaGFuZ2UmJih0aGlzLm9uQ2hhbmdlPWUub25DaGFuZ2UpLGUuYmVmb3JlT3BlbiYmKHRoaXMuYmVmb3JlT3Blbj1lLmJlZm9yZU9wZW4pLGUuYWZ0ZXJPcGVuJiYodGhpcy5hZnRlck9wZW49ZS5hZnRlck9wZW4pLGUuYmVmb3JlQ2xvc2UmJih0aGlzLmJlZm9yZUNsb3NlPWUuYmVmb3JlQ2xvc2UpLGUuYWZ0ZXJDbG9zZSYmKHRoaXMuYWZ0ZXJDbG9zZT1lLmFmdGVyQ2xvc2UpLHRoaXMuY29uZmlnLmlzRW5hYmxlZHx8dGhpcy5kaXNhYmxlKCl9dC5kZWZhdWx0PXJ9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLnNlYXJjaEZpbHRlcj1mdW5jdGlvbihlLHQpe3JldHVybi0xIT09ZS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0LnRvTG93ZXJDYXNlKCkpfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMuaWQ9XCJcIix0aGlzLmlzTXVsdGlwbGU9ITEsdGhpcy5pc0FqYXg9ITEsdGhpcy5pc1NlYXJjaGluZz0hMSx0aGlzLnNob3dTZWFyY2g9ITAsdGhpcy5zZWFyY2hGb2N1cz0hMCx0aGlzLnNlYXJjaEhpZ2hsaWdodD0hMSx0aGlzLmNsb3NlT25TZWxlY3Q9ITAsdGhpcy5zaG93Q29udGVudD1cImF1dG9cIix0aGlzLnNlYXJjaFBsYWNlaG9sZGVyPVwiU2VhcmNoXCIsdGhpcy5zZWFyY2hUZXh0PVwiTm8gUmVzdWx0c1wiLHRoaXMuc2VhcmNoaW5nVGV4dD1cIlNlYXJjaGluZy4uLlwiLHRoaXMucGxhY2Vob2xkZXJUZXh0PVwiU2VsZWN0IFZhbHVlXCIsdGhpcy5hbGxvd0Rlc2VsZWN0PSExLHRoaXMuYWxsb3dEZXNlbGVjdE9wdGlvbj0hMSx0aGlzLmhpZGVTZWxlY3RlZE9wdGlvbj0hMSx0aGlzLmRlc2VsZWN0TGFiZWw9XCJ4XCIsdGhpcy5pc0VuYWJsZWQ9ITAsdGhpcy52YWx1ZXNVc2VUZXh0PSExLHRoaXMuc2hvd09wdGlvblRvb2x0aXBzPSExLHRoaXMuc2VsZWN0QnlHcm91cD0hMSx0aGlzLmxpbWl0PTAsdGhpcy50aW1lb3V0RGVsYXk9MjAwLHRoaXMuYWRkVG9Cb2R5PSExLHRoaXMubWFpbj1cInNzLW1haW5cIix0aGlzLnNpbmdsZVNlbGVjdGVkPVwic3Mtc2luZ2xlLXNlbGVjdGVkXCIsdGhpcy5hcnJvdz1cInNzLWFycm93XCIsdGhpcy5tdWx0aVNlbGVjdGVkPVwic3MtbXVsdGktc2VsZWN0ZWRcIix0aGlzLmFkZD1cInNzLWFkZFwiLHRoaXMucGx1cz1cInNzLXBsdXNcIix0aGlzLnZhbHVlcz1cInNzLXZhbHVlc1wiLHRoaXMudmFsdWU9XCJzcy12YWx1ZVwiLHRoaXMudmFsdWVUZXh0PVwic3MtdmFsdWUtdGV4dFwiLHRoaXMudmFsdWVEZWxldGU9XCJzcy12YWx1ZS1kZWxldGVcIix0aGlzLmNvbnRlbnQ9XCJzcy1jb250ZW50XCIsdGhpcy5vcGVuPVwic3Mtb3BlblwiLHRoaXMub3BlbkFib3ZlPVwic3Mtb3Blbi1hYm92ZVwiLHRoaXMub3BlbkJlbG93PVwic3Mtb3Blbi1iZWxvd1wiLHRoaXMuc2VhcmNoPVwic3Mtc2VhcmNoXCIsdGhpcy5zZWFyY2hIaWdobGlnaHRlcj1cInNzLXNlYXJjaC1oaWdobGlnaHRcIix0aGlzLmFkZGFibGU9XCJzcy1hZGRhYmxlXCIsdGhpcy5saXN0PVwic3MtbGlzdFwiLHRoaXMub3B0Z3JvdXA9XCJzcy1vcHRncm91cFwiLHRoaXMub3B0Z3JvdXBMYWJlbD1cInNzLW9wdGdyb3VwLWxhYmVsXCIsdGhpcy5vcHRncm91cExhYmVsU2VsZWN0YWJsZT1cInNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGVcIix0aGlzLm9wdGlvbj1cInNzLW9wdGlvblwiLHRoaXMub3B0aW9uU2VsZWN0ZWQ9XCJzcy1vcHRpb24tc2VsZWN0ZWRcIix0aGlzLmhpZ2hsaWdodGVkPVwic3MtaGlnaGxpZ2h0ZWRcIix0aGlzLmRpc2FibGVkPVwic3MtZGlzYWJsZWRcIix0aGlzLmhpZGU9XCJzcy1oaWRlXCIsdGhpcy5pZD1cInNzLVwiK01hdGguZmxvb3IoMWU1Kk1hdGgucmFuZG9tKCkpLHRoaXMuc3R5bGU9ZS5zZWxlY3Quc3R5bGUuY3NzVGV4dCx0aGlzLmNsYXNzPWUuc2VsZWN0LmNsYXNzTmFtZS5zcGxpdChcIiBcIiksdGhpcy5pc011bHRpcGxlPWUuc2VsZWN0Lm11bHRpcGxlLHRoaXMuaXNBamF4PWUuaXNBamF4LHRoaXMuc2hvd1NlYXJjaD0hMSE9PWUuc2hvd1NlYXJjaCx0aGlzLnNlYXJjaEZvY3VzPSExIT09ZS5zZWFyY2hGb2N1cyx0aGlzLnNlYXJjaEhpZ2hsaWdodD0hMD09PWUuc2VhcmNoSGlnaGxpZ2h0LHRoaXMuY2xvc2VPblNlbGVjdD0hMSE9PWUuY2xvc2VPblNlbGVjdCxlLnNob3dDb250ZW50JiYodGhpcy5zaG93Q29udGVudD1lLnNob3dDb250ZW50KSx0aGlzLmlzRW5hYmxlZD0hMSE9PWUuaXNFbmFibGVkLGUuc2VhcmNoUGxhY2Vob2xkZXImJih0aGlzLnNlYXJjaFBsYWNlaG9sZGVyPWUuc2VhcmNoUGxhY2Vob2xkZXIpLGUuc2VhcmNoVGV4dCYmKHRoaXMuc2VhcmNoVGV4dD1lLnNlYXJjaFRleHQpLGUuc2VhcmNoaW5nVGV4dCYmKHRoaXMuc2VhcmNoaW5nVGV4dD1lLnNlYXJjaGluZ1RleHQpLGUucGxhY2Vob2xkZXJUZXh0JiYodGhpcy5wbGFjZWhvbGRlclRleHQ9ZS5wbGFjZWhvbGRlclRleHQpLHRoaXMuYWxsb3dEZXNlbGVjdD0hMD09PWUuYWxsb3dEZXNlbGVjdCx0aGlzLmFsbG93RGVzZWxlY3RPcHRpb249ITA9PT1lLmFsbG93RGVzZWxlY3RPcHRpb24sdGhpcy5oaWRlU2VsZWN0ZWRPcHRpb249ITA9PT1lLmhpZGVTZWxlY3RlZE9wdGlvbixlLmRlc2VsZWN0TGFiZWwmJih0aGlzLmRlc2VsZWN0TGFiZWw9ZS5kZXNlbGVjdExhYmVsKSxlLnZhbHVlc1VzZVRleHQmJih0aGlzLnZhbHVlc1VzZVRleHQ9ZS52YWx1ZXNVc2VUZXh0KSxlLnNob3dPcHRpb25Ub29sdGlwcyYmKHRoaXMuc2hvd09wdGlvblRvb2x0aXBzPWUuc2hvd09wdGlvblRvb2x0aXBzKSxlLnNlbGVjdEJ5R3JvdXAmJih0aGlzLnNlbGVjdEJ5R3JvdXA9ZS5zZWxlY3RCeUdyb3VwKSxlLmxpbWl0JiYodGhpcy5saW1pdD1lLmxpbWl0KSxlLnNlYXJjaEZpbHRlciYmKHRoaXMuc2VhcmNoRmlsdGVyPWUuc2VhcmNoRmlsdGVyKSxudWxsIT1lLnRpbWVvdXREZWxheSYmKHRoaXMudGltZW91dERlbGF5PWUudGltZW91dERlbGF5KSx0aGlzLmFkZFRvQm9keT0hMD09PWUuYWRkVG9Cb2R5fXQuQ29uZmlnPXN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLnNldFZhbHVlPWZ1bmN0aW9uKCl7aWYodGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSl7aWYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKWZvcih2YXIgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHQ9MCxpPXRoaXMuZWxlbWVudC5vcHRpb25zO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO3Muc2VsZWN0ZWQ9ITE7Zm9yKHZhciBuPTAsYT1lO248YS5sZW5ndGg7bisrKWFbbl0udmFsdWU9PT1zLnZhbHVlJiYocy5zZWxlY3RlZD0hMCl9ZWxzZSBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksdGhpcy5lbGVtZW50LnZhbHVlPWU/ZS52YWx1ZTpcIlwiO3RoaXMubWFpbi5kYXRhLmlzT25DaGFuZ2VFbmFibGVkPSExLHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLHRoaXMubWFpbi5kYXRhLmlzT25DaGFuZ2VFbmFibGVkPSEwfX0sbi5wcm90b3R5cGUuYWRkQXR0cmlidXRlcz1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC50YWJJbmRleD0tMSx0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLmVsZW1lbnQuZGF0YXNldC5zc2lkPXRoaXMubWFpbi5jb25maWcuaWR9LG4ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKGUpe3QubWFpbi5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHQubWFpbi5yZW5kZXIoKX0pfSxuLnByb3RvdHlwZS5hZGRNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLm1haW4uY29uZmlnLmlzQWpheHx8KHRoaXMubXV0YXRpb25PYnNlcnZlcj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihlKXt0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyJiYodC5tYWluLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdC5tYWluLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdC5tYWluLnJlbmRlcigpLGUuZm9yRWFjaChmdW5jdGlvbihlKXtcImNsYXNzXCI9PT1lLmF0dHJpYnV0ZU5hbWUmJnQubWFpbi5zbGltLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzKHQubWFpbi5zbGltLmNvbnRhaW5lcil9KSl9KSx0aGlzLm9ic2VydmVNdXRhdGlvbk9ic2VydmVyKCkpfSxuLnByb3RvdHlwZS5vYnNlcnZlTXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3RoaXMubXV0YXRpb25PYnNlcnZlciYmdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LHthdHRyaWJ1dGVzOiEwLGNoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwfSl9LG4ucHJvdG90eXBlLmRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dGhpcy5tdXRhdGlvbk9ic2VydmVyJiZ0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpfSxuLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LmlubmVySFRNTD1cIlwiO2Zvcih2YXIgdD0wLGk9ZTt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtpZihzLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIG49cyxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtpZihhLmxhYmVsPW4ubGFiZWwsbi5vcHRpb25zKWZvcih2YXIgbz0wLGw9bi5vcHRpb25zO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO2EuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPcHRpb24ocikpfXRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChhKX1lbHNlIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU9wdGlvbihzKSl9fSxuLnByb3RvdHlwZS5jcmVhdGVPcHRpb249ZnVuY3Rpb24odCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtyZXR1cm4gaS52YWx1ZT10LnZhbHVlfHx0LnRleHQsaS5pbm5lckhUTUw9dC5pbm5lckhUTUx8fHQudGV4dCx0LnNlbGVjdGVkJiYoaS5zZWxlY3RlZD10LnNlbGVjdGVkKSx0LmRpc2FibGVkJiYoaS5kaXNhYmxlZD0hMCksdC5wbGFjZWhvbGRlciYmaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlaG9sZGVyXCIsXCJ0cnVlXCIpLHQuY2xhc3MmJnQuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7aS5jbGFzc0xpc3QuYWRkKGUpfSksdC5kYXRhJiZcIm9iamVjdFwiPT10eXBlb2YgdC5kYXRhJiZPYmplY3Qua2V5cyh0LmRhdGEpLmZvckVhY2goZnVuY3Rpb24oZSl7aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2UsdC5kYXRhW2VdKX0pLGl9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMCx0aGlzLmVsZW1lbnQ9ZS5zZWxlY3QsdGhpcy5tYWluPWUubWFpbix0aGlzLmVsZW1lbnQuZGlzYWJsZWQmJih0aGlzLm1haW4uY29uZmlnLmlzRW5hYmxlZD0hMSksdGhpcy5hZGRBdHRyaWJ1dGVzKCksdGhpcy5hZGRFdmVudExpc3RlbmVycygpLHRoaXMubXV0YXRpb25PYnNlcnZlcj1udWxsLHRoaXMuYWRkTXV0YXRpb25PYnNlcnZlcigpLHRoaXMuZWxlbWVudC5zbGltPWUubWFpbn10LlNlbGVjdD1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBhPWkoMCksbz1pKDEpLHM9KG4ucHJvdG90eXBlLmNvbnRhaW5lckRpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuc3R5bGUuY3NzVGV4dD10aGlzLm1haW4uY29uZmlnLnN0eWxlLHRoaXMudXBkYXRlQ29udGFpbmVyRGl2Q2xhc3MoZSksZX0sbi5wcm90b3R5cGUudXBkYXRlQ29udGFpbmVyRGl2Q2xhc3M9ZnVuY3Rpb24oZSl7dGhpcy5tYWluLmNvbmZpZy5jbGFzcz10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSxlLmNsYXNzTmFtZT1cIlwiLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmlkKSxlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5tYWluKTtmb3IodmFyIHQ9MCxpPXRoaXMubWFpbi5jb25maWcuY2xhc3M7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07XCJcIiE9PXMudHJpbSgpJiZlLmNsYXNzTGlzdC5hZGQocyl9fSxuLnByb3RvdHlwZS5zaW5nbGVTZWxlY3RlZERpdj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnNpbmdsZVNlbGVjdGVkKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtpLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWhvbGRlclwiKSxlLmFwcGVuZENoaWxkKGkpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3MuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuZGVzZWxlY3RMYWJlbCxzLmNsYXNzTGlzdC5hZGQoXCJzcy1kZXNlbGVjdFwiKSxzLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmdC5tYWluLnNldChcIlwiKX0sZS5hcHBlbmRDaGlsZChzKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtuLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5hcnJvdyk7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIGEuY2xhc3NMaXN0LmFkZChcImFycm93LWRvd25cIiksbi5hcHBlbmRDaGlsZChhKSxlLmFwcGVuZENoaWxkKG4pLGUub25jbGljaz1mdW5jdGlvbigpe3QubWFpbi5jb25maWcuaXNFbmFibGVkJiYodC5tYWluLmRhdGEuY29udGVudE9wZW4/dC5tYWluLmNsb3NlKCk6dC5tYWluLm9wZW4oKSl9LHtjb250YWluZXI6ZSxwbGFjZWhvbGRlcjppLGRlc2VsZWN0OnMsYXJyb3dJY29uOntjb250YWluZXI6bixhcnJvdzphfX19LG4ucHJvdG90eXBlLnBsYWNlaG9sZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZihudWxsPT09ZXx8ZSYmZS5wbGFjZWhvbGRlcil7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0LHRoaXMuc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNpbmdsZVNlbGVjdGVkLnBsYWNlaG9sZGVyLmlubmVySFRNTD10Lm91dGVySFRNTCl9ZWxzZXt2YXIgaT1cIlwiO2UmJihpPWUuaW5uZXJIVE1MJiYhMCE9PXRoaXMubWFpbi5jb25maWcudmFsdWVzVXNlVGV4dD9lLmlubmVySFRNTDplLnRleHQpLHRoaXMuc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNpbmdsZVNlbGVjdGVkLnBsYWNlaG9sZGVyLmlubmVySFRNTD1lP2k6XCJcIil9fSxuLnByb3RvdHlwZS5kZXNlbGVjdD1mdW5jdGlvbigpe2lmKHRoaXMuc2luZ2xlU2VsZWN0ZWQpe2lmKCF0aGlzLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3QpcmV0dXJuIHZvaWQgdGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic3MtaGlkZVwiKTtcIlwiPT09dGhpcy5tYWluLnNlbGVjdGVkKCk/dGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic3MtaGlkZVwiKTp0aGlzLnNpbmdsZVNlbGVjdGVkLmRlc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzcy1oaWRlXCIpfX0sbi5wcm90b3R5cGUubXVsdGlTZWxlY3RlZERpdj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm11bHRpU2VsZWN0ZWQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVzKSxlLmFwcGVuZENoaWxkKGkpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYWRkKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gbi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcucGx1cyksbi5vbmNsaWNrPWZ1bmN0aW9uKGUpe3QubWFpbi5kYXRhLmNvbnRlbnRPcGVuJiYodC5tYWluLmNsb3NlKCksZS5zdG9wUHJvcGFnYXRpb24oKSl9LHMuYXBwZW5kQ2hpbGQobiksZS5hcHBlbmRDaGlsZChzKSxlLm9uY2xpY2s9ZnVuY3Rpb24oZSl7dC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModC5tYWluLmNvbmZpZy52YWx1ZURlbGV0ZSl8fCh0Lm1haW4uZGF0YS5jb250ZW50T3Blbj90Lm1haW4uY2xvc2UoKTp0Lm1haW4ub3BlbigpKSl9LHtjb250YWluZXI6ZSx2YWx1ZXM6aSxhZGQ6cyxwbHVzOm59fSxuLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtpZih0aGlzLm11bHRpU2VsZWN0ZWQpe2Zvcih2YXIgZSx0PXRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuY2hpbGROb2RlcyxpPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkscz1bXSxuPTAsYT10O248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2U9ITA7Zm9yKHZhciBsPTAscj1pO2w8ci5sZW5ndGg7bCsrKXt2YXIgYz1yW2xdO1N0cmluZyhjLmlkKT09PVN0cmluZyhvLmRhdGFzZXQuaWQpJiYoZT0hMSl9ZSYmcy5wdXNoKG8pfWZvcih2YXIgZD0wLGg9cztkPGgubGVuZ3RoO2QrKyl7dmFyIHU9aFtkXTt1LmNsYXNzTGlzdC5hZGQoXCJzcy1vdXRcIiksdGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5yZW1vdmVDaGlsZCh1KX1mb3IodD10aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmNoaWxkTm9kZXMsYz0wO2M8aS5sZW5ndGg7YysrKXtlPSExO2Zvcih2YXIgcD0wLG09dDtwPG0ubGVuZ3RoO3ArKylvPW1bcF0sU3RyaW5nKGlbY10uaWQpPT09U3RyaW5nKG8uZGF0YXNldC5pZCkmJihlPSEwKTtlfHwoMCE9PXQubGVuZ3RoJiZIVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50PzA9PT1jP3RoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuaW5zZXJ0QmVmb3JlKHRoaXMudmFsdWVEaXYoaVtjXSksdFtjXSk6dFtjLTFdLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsdGhpcy52YWx1ZURpdihpW2NdKSk6dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5hcHBlbmRDaGlsZCh0aGlzLnZhbHVlRGl2KGlbY10pKSl9aWYoMD09PWkubGVuZ3RoKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtmLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksZi5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQsdGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5pbm5lckhUTUw9Zi5vdXRlckhUTUx9fX0sbi5wcm90b3R5cGUudmFsdWVEaXY9ZnVuY3Rpb24oYSl7dmFyIG89dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWUpLGUuZGF0YXNldC5pZD1hLmlkO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlVGV4dCksdC5pbm5lckhUTUw9YS5pbm5lckhUTUwmJiEwIT09dGhpcy5tYWluLmNvbmZpZy52YWx1ZXNVc2VUZXh0P2EuaW5uZXJIVE1MOmEudGV4dCxlLmFwcGVuZENoaWxkKHQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZURlbGV0ZSksaS5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5kZXNlbGVjdExhYmVsLGkub25jbGljaz1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD0hMTtpZihvLm1haW4uY29uZmlnLmlzRW5hYmxlZCl7aWYoby5tYWluLmJlZm9yZU9uQ2hhbmdlfHwodD0hMCksby5tYWluLmJlZm9yZU9uQ2hhbmdlKXtmb3IodmFyIGk9by5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSxzPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaSkpLG49MDtuPHMubGVuZ3RoO24rKylzW25dLmlkPT09YS5pZCYmcy5zcGxpY2UobiwxKTshMSE9PW8ubWFpbi5iZWZvcmVPbkNoYW5nZShzKSYmKHQ9ITApfXQmJihvLm1haW4uZGF0YS5yZW1vdmVGcm9tU2VsZWN0ZWQoYS5pZCxcImlkXCIpLG8ubWFpbi5yZW5kZXIoKSxvLm1haW4uc2VsZWN0LnNldFZhbHVlKCksby5tYWluLmRhdGEub25EYXRhQ2hhbmdlKCkpfX0sZS5hcHBlbmRDaGlsZChpKSxlfSxuLnByb3RvdHlwZS5jb250ZW50RGl2PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuY29udGVudCksZX0sbi5wcm90b3R5cGUuc2VhcmNoRGl2PWZ1bmN0aW9uKCl7dmFyIG49dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnNlYXJjaCk7dmFyIHQ9e2NvbnRhaW5lcjplLGlucHV0OnN9O3JldHVybiB0aGlzLm1haW4uY29uZmlnLnNob3dTZWFyY2h8fChlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSxzLnJlYWRPbmx5PSEwKSxzLnR5cGU9XCJzZWFyY2hcIixzLnBsYWNlaG9sZGVyPXRoaXMubWFpbi5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXIscy50YWJJbmRleD0wLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHRoaXMubWFpbi5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIixcIm9mZlwiKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLFwib2ZmXCIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSxzLm9uY2xpY2s9ZnVuY3Rpb24oZSl7c2V0VGltZW91dChmdW5jdGlvbigpe1wiXCI9PT1lLnRhcmdldC52YWx1ZSYmbi5tYWluLnNlYXJjaChcIlwiKX0sMTApfSxzLm9ua2V5ZG93bj1mdW5jdGlvbihlKXtcIkFycm93VXBcIj09PWUua2V5PyhuLm1haW4ub3BlbigpLG4uaGlnaGxpZ2h0VXAoKSxlLnByZXZlbnREZWZhdWx0KCkpOlwiQXJyb3dEb3duXCI9PT1lLmtleT8obi5tYWluLm9wZW4oKSxuLmhpZ2hsaWdodERvd24oKSxlLnByZXZlbnREZWZhdWx0KCkpOlwiVGFiXCI9PT1lLmtleT9uLm1haW4uZGF0YS5jb250ZW50T3Blbj9uLm1haW4uY2xvc2UoKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLmNsb3NlKCl9LG4ubWFpbi5jb25maWcudGltZW91dERlbGF5KTpcIkVudGVyXCI9PT1lLmtleSYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzLm9ua2V5dXA9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7aWYoXCJFbnRlclwiPT09ZS5rZXkpe2lmKG4ubWFpbi5hZGRhYmxlJiZlLmN0cmxLZXkpcmV0dXJuIGEuY2xpY2soKSxlLnByZXZlbnREZWZhdWx0KCksdm9pZCBlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBpPW4ubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK24ubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpO2kmJmkuY2xpY2soKX1lbHNlXCJBcnJvd1VwXCI9PT1lLmtleXx8XCJBcnJvd0Rvd25cIj09PWUua2V5fHwoXCJFc2NhcGVcIj09PWUua2V5P24ubWFpbi5jbG9zZSgpOm4ubWFpbi5jb25maWcuc2hvd1NlYXJjaCYmbi5tYWluLmRhdGEuY29udGVudE9wZW4/bi5tYWluLnNlYXJjaCh0LnZhbHVlKTpzLnZhbHVlPVwiXCIpO2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpfSxzLm9uZm9jdXM9ZnVuY3Rpb24oKXtuLm1haW4ub3BlbigpfSxlLmFwcGVuZENoaWxkKHMpLHRoaXMubWFpbi5hZGRhYmxlJiYoYS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYWRkYWJsZSksYS5pbm5lckhUTUw9XCIrXCIsYS5vbmNsaWNrPWZ1bmN0aW9uKGUpe2lmKG4ubWFpbi5hZGRhYmxlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD1uLnNlYXJjaC5pbnB1dC52YWx1ZTtpZihcIlwiPT09dC50cmltKCkpcmV0dXJuIHZvaWQgbi5zZWFyY2guaW5wdXQuZm9jdXMoKTt2YXIgaT1uLm1haW4uYWRkYWJsZSh0KSxzPVwiXCI7aWYoIWkpcmV0dXJuO1wib2JqZWN0XCI9PXR5cGVvZiBpP28udmFsaWRhdGVPcHRpb24oaSkmJihuLm1haW4uYWRkRGF0YShpKSxzPWkudmFsdWU/aS52YWx1ZTppLnRleHQpOihuLm1haW4uYWRkRGF0YShuLm1haW4uZGF0YS5uZXdPcHRpb24oe3RleHQ6aSx2YWx1ZTppfSkpLHM9aSksbi5tYWluLnNlYXJjaChcIlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLnNldChzLFwidmFsdWVcIiwhMSwhMSl9LDEwMCksbi5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0JiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLmNsb3NlKCl9LDEwMCl9fSxlLmFwcGVuZENoaWxkKGEpLHQuYWRkYWJsZT1hKSx0fSxuLnByb3RvdHlwZS5oaWdobGlnaHRVcD1mdW5jdGlvbigpe3ZhciBlPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQ9bnVsbDtpZihlKWZvcih0PWUucHJldmlvdXNTaWJsaW5nO251bGwhPT10JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKTspdD10LnByZXZpb3VzU2libGluZztlbHNle3ZhciBpPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7dD1pW2kubGVuZ3RoLTFdfWlmKHQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbCkmJih0PW51bGwpLG51bGw9PT10KXt2YXIgcz1lLnBhcmVudE5vZGU7aWYocy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cCkmJnMucHJldmlvdXNTaWJsaW5nKXt2YXIgbj1zLnByZXZpb3VzU2libGluZy5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7bi5sZW5ndGgmJih0PW5bbi5sZW5ndGgtMV0pfX10JiYoZSYmZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSxhLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5saXN0LHQpKX0sbi5wcm90b3R5cGUuaGlnaGxpZ2h0RG93bj1mdW5jdGlvbigpe3ZhciBlPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQ9bnVsbDtpZihlKWZvcih0PWUubmV4dFNpYmxpbmc7bnVsbCE9PXQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpOyl0PXQubmV4dFNpYmxpbmc7ZWxzZSB0PXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7aWYobnVsbD09PXQmJm51bGwhPT1lKXt2YXIgaT1lLnBhcmVudE5vZGU7aS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cCkmJmkubmV4dFNpYmxpbmcmJih0PWkubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpKX10JiYoZSYmZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSxhLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5saXN0LHQpKX0sbi5wcm90b3R5cGUubGlzdERpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmxpc3QpLGV9LG4ucHJvdG90eXBlLm9wdGlvbnM9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9XCJcIik7dmFyIHQsaT10aGlzLm1haW4uZGF0YS5maWx0ZXJlZHx8dGhpcy5tYWluLmRhdGEuZGF0YTtpZigodGhpcy5saXN0LmlubmVySFRNTD1cIlwiKSE9PWUpcmV0dXJuKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPWUsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQodCk7aWYodGhpcy5tYWluLmNvbmZpZy5pc0FqYXgmJnRoaXMubWFpbi5jb25maWcuaXNTZWFyY2hpbmcpcmV0dXJuKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuc2VhcmNoaW5nVGV4dCx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZCh0KTtpZigwPT09aS5sZW5ndGgpe3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHMuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbikscy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHMuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuc2VhcmNoVGV4dCx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZChzKX1mb3IodmFyIG49ZnVuY3Rpb24oZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXt2YXIgdD1lLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cExhYmVsKSxjLm1haW4uY29uZmlnLnNlbGVjdEJ5R3JvdXAmJmMubWFpbi5jb25maWcuaXNNdWx0aXBsZSYmaS5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbFNlbGVjdGFibGUpLGkuaW5uZXJIVE1MPXQubGFiZWwsbi5hcHBlbmRDaGlsZChpKTt2YXIgcz10Lm9wdGlvbnM7aWYocyl7Zm9yKHZhciBhPTAsbz1zO2E8by5sZW5ndGg7YSsrKXt2YXIgbD1vW2FdO24uYXBwZW5kQ2hpbGQoYy5vcHRpb24obCkpfWlmKGMubWFpbi5jb25maWcuc2VsZWN0QnlHcm91cCYmYy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgcj1jO2kuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7Zm9yKHZhciB0PTAsaT1uLmNoaWxkcmVuO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdOy0xIT09cy5jbGFzc05hbWUuaW5kZXhPZihyLm1haW4uY29uZmlnLm9wdGlvbikmJnMuY2xpY2soKX19KX19Yy5saXN0LmFwcGVuZENoaWxkKG4pfWVsc2UgYy5saXN0LmFwcGVuZENoaWxkKGMub3B0aW9uKGUpKX0sYz10aGlzLGE9MCxvPWk7YTxvLmxlbmd0aDthKyspbihvW2FdKX0sbi5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKHIpe2lmKHIucGxhY2Vob2xkZXIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSksZX12YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksci5jbGFzcyYmci5jbGFzcy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXt0LmNsYXNzTGlzdC5hZGQoZSl9KSxyLnN0eWxlJiYodC5zdHlsZS5jc3NUZXh0PXIuc3R5bGUpO3ZhciBjPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCk7dC5kYXRhc2V0LmlkPXIuaWQsdGhpcy5tYWluLmNvbmZpZy5zZWFyY2hIaWdobGlnaHQmJnRoaXMubWFpbi5zbGltJiZyLmlubmVySFRNTCYmXCJcIiE9PXRoaXMubWFpbi5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZS50cmltKCk/dC5pbm5lckhUTUw9YS5oaWdobGlnaHQoci5pbm5lckhUTUwsdGhpcy5tYWluLnNsaW0uc2VhcmNoLmlucHV0LnZhbHVlLHRoaXMubWFpbi5jb25maWcuc2VhcmNoSGlnaGxpZ2h0ZXIpOnIuaW5uZXJIVE1MJiYodC5pbm5lckhUTUw9ci5pbm5lckhUTUwpLHRoaXMubWFpbi5jb25maWcuc2hvd09wdGlvblRvb2x0aXBzJiZ0LnRleHRDb250ZW50JiZ0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdC50ZXh0Q29udGVudCk7dmFyIGQ9dGhpczt0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PXRoaXMuZGF0YXNldC5pZDtpZighMD09PXIuc2VsZWN0ZWQmJmQubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdE9wdGlvbil7dmFyIGk9ITE7aWYoZC5tYWluLmJlZm9yZU9uQ2hhbmdlJiZkLm1haW4uY29uZmlnLmlzTXVsdGlwbGV8fChpPSEwKSxkLm1haW4uYmVmb3JlT25DaGFuZ2UmJmQubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBzPWQubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksbj1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHMpKSxhPTA7YTxuLmxlbmd0aDthKyspblthXS5pZD09PXQmJm4uc3BsaWNlKGEsMSk7ITEhPT1kLm1haW4uYmVmb3JlT25DaGFuZ2UobikmJihpPSEwKX1pJiYoZC5tYWluLmNvbmZpZy5pc011bHRpcGxlPyhkLm1haW4uZGF0YS5yZW1vdmVGcm9tU2VsZWN0ZWQodCxcImlkXCIpLGQubWFpbi5yZW5kZXIoKSxkLm1haW4uc2VsZWN0LnNldFZhbHVlKCksZC5tYWluLmRhdGEub25EYXRhQ2hhbmdlKCkpOmQubWFpbi5zZXQoXCJcIikpfWVsc2V7aWYoci5kaXNhYmxlZHx8ci5zZWxlY3RlZClyZXR1cm47aWYoZC5tYWluLmNvbmZpZy5saW1pdCYmQXJyYXkuaXNBcnJheShjKSYmZC5tYWluLmNvbmZpZy5saW1pdDw9Yy5sZW5ndGgpcmV0dXJuO2lmKGQubWFpbi5iZWZvcmVPbkNoYW5nZSl7dmFyIG89dm9pZCAwLGw9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkLm1haW4uZGF0YS5nZXRPYmplY3RGcm9tRGF0YSh0KSkpO2wuc2VsZWN0ZWQ9ITAsZC5tYWluLmNvbmZpZy5pc011bHRpcGxlPyhvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpKS5wdXNoKGwpOm89SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShsKSksITEhPT1kLm1haW4uYmVmb3JlT25DaGFuZ2UobykmJmQubWFpbi5zZXQodCxcImlkXCIsZC5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0KX1lbHNlIGQubWFpbi5zZXQodCxcImlkXCIsZC5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0KX19KTt2YXIgaT1jJiZhLmlzVmFsdWVJbkFycmF5T2ZPYmplY3RzKGMsXCJpZFwiLHIuaWQpO3JldHVybihyLmRpc2FibGVkfHxpKSYmKHQub25jbGljaz1udWxsLGQubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdE9wdGlvbnx8dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLGQubWFpbi5jb25maWcuaGlkZVNlbGVjdGVkT3B0aW9uJiZ0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSksaT90LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb25TZWxlY3RlZCk6dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcub3B0aW9uU2VsZWN0ZWQpLHR9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5tYWluPWUubWFpbix0aGlzLmNvbnRhaW5lcj10aGlzLmNvbnRhaW5lckRpdigpLHRoaXMuY29udGVudD10aGlzLmNvbnRlbnREaXYoKSx0aGlzLnNlYXJjaD10aGlzLnNlYXJjaERpdigpLHRoaXMubGlzdD10aGlzLmxpc3REaXYoKSx0aGlzLm9wdGlvbnMoKSx0aGlzLnNpbmdsZVNlbGVjdGVkPW51bGwsdGhpcy5tdWx0aVNlbGVjdGVkPW51bGwsdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlPyh0aGlzLm11bHRpU2VsZWN0ZWQ9dGhpcy5tdWx0aVNlbGVjdGVkRGl2KCksdGhpcy5tdWx0aVNlbGVjdGVkJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyKSk6KHRoaXMuc2luZ2xlU2VsZWN0ZWQ9dGhpcy5zaW5nbGVTZWxlY3RlZERpdigpLHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyKSksdGhpcy5tYWluLmNvbmZpZy5hZGRUb0JvZHk/KHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaWQpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KSk6dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KSx0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2guY29udGFpbmVyKSx0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5saXN0KX10LlNsaW09c31dLG4uYz1zLG4uZD1mdW5jdGlvbihlLHQsaSl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Oml9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihpKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIHMgaW4gdCluLmQoaSxzLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwscykpO3JldHVybiBpfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MikpLmRlZmF1bHQ7ZnVuY3Rpb24gbihlKXtpZihzW2VdKXJldHVybiBzW2VdLmV4cG9ydHM7dmFyIHQ9c1tlXT17aTplLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGlbZV0uY2FsbCh0LmV4cG9ydHMsdCx0LmV4cG9ydHMsbiksdC5sPSEwLHQuZXhwb3J0c312YXIgaSxzfSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSBcIi4vU3RvcmFnZVwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tIFwiLi9MYW5ndWFnZVwiO1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBjb21wb25lbnQgb2YgU3RhZGlhK1xuICpcbiAqIEBleHBvcnQgdGhlIENvbXBvbmVudCB0eXBlLlxuICogQGNsYXNzIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgbmFtZS5cbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmcgPSAnTXkgQ29tcG9uZW50JztcbiAgICB0YWc6IHN0cmluZyA9IFwiY29tcG9uZW50XCI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgdW5pcXVlIElELCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBvbiBsb2FkLlxuICAgICAqL1xuICAgIGlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBIGJvb2xlYW4ga2VlcGluZyB0cmFjayBvZiB3aGV0aGVyIHRoZSBDb21wb25lbnQgc2hvdWxkIHJlY2VpdmUgZXZlbnRzIG9yIG5vdC5cbiAgICAgKi9cbiAgICBhY3RpdmU6IGJvb2xlYW47XG5cbiAgICBlbmFibGVkOiBib29sZWFuO1xuXG4gICAgcmVuZGVyZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgc2hvdWxkIHN0YXJ0IGxvYWRpbmcuXG4gICAgICovXG4gICAgbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uYW1lID0gTGFuZ3VhZ2UuZ2V0KHRoaXMudGFnICsgJy5uYW1lJyk7XG4gICAgICAgIHRoaXMuaWQgPSAnc3RhZGlhcGx1c18nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KTtcbiAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xuICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZW5kZXJlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxoc0U0ZT5jLXdpeicpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gKEFycmF5IGFzIGFueSkuZnJvbShyZW5kZXJlcnMpLmZpbmQoKHJlbmRlcmVyOiBIVE1MRWxlbWVudCkgPT4gcmVuZGVyZXIuc3R5bGUub3BhY2l0eSAhPT0gJzAnKTtcbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBDb21wb25lbnQgaGFzIGFuIGVsZW1lbnQgaW4gdGhlIERPTVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLnJlbmRlcmVyLnN0eWxlLm9wYWNpdHkgPT09ICcwJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkKSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyB1bmxvYWRpbmcuXG4gICAgICovXG4gICAgdW5sb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uU3RvcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBDb21wb25lbnQgc2hvdWxkIHN0YXJ0LlxuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7fVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIENvbXBvbmVudCBzaG91bGQgc3RvcC5cbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7fVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uY2UgZXZlcnkgc2Vjb25kLlxuICAgICAqL1xuICAgIG9uVXBkYXRlKCk6IHZvaWQge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi9TdG9yYWdlJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi9MYW5ndWFnZSc7XG5cbi8qKlxuICogQSB1dGlsaXR5IGNsYXNzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nIFtbQ29tcG9uZW50fENvbXBvbmVudHNdXSBhbmQgZGVsaXZlcmluZyBldmVudHMuXG4gKlxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50TG9hZGVyIHR5cGUuXG4gKiBAY2xhc3MgQ29tcG9uZW50TG9hZGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXIge1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBhbGwgcmVnaXN0ZXJlZCBjb21wb25lbnRzLlxuICAgICAqL1xuICAgIGNvbXBvbmVudHM6IENvbXBvbmVudFtdO1xuICAgIHRpbWVyOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byByZWdpc3Rlci5cbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgYSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gICAgICovXG4gICAgdW5yZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5maWx0ZXIoZSA9PiB7IHJldHVybiBlLmlkICE9PSBjb21wb25lbnQuaWQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBTeW5jU3RvcmFnZS5DT01QT05FTlRTLmdldCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IHJlc3VsdC5jb21wb25lbnRzO1xuICAgICAgICAgICAgaWYoc3RvcmFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGlmKHN0b3JhZ2VbY29tcG9uZW50LnRhZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlW2NvbXBvbmVudC50YWddID0ge307XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoc3RvcmFnZVtjb21wb25lbnQudGFnXS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVtjb21wb25lbnQudGFnXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZW5hYmxlZCA9IHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmVuYWJsZWQgJiYgIWNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC5sb2FkKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBTeW5jU3RvcmFnZS5DT01QT05FTlRTLnNldChzdG9yYWdlKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmFjdGl2ZSkgY29tcG9uZW50LnVubG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC5vblVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcFRpbWVyKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi9TdG9yYWdlJztcbmltcG9ydCBsYW5nX2VuVVNfZGF0YSBmcm9tICcuL2xhbmcvZW4tVVMuanNvbic7XG5pbXBvcnQgbGFuZ19zdlNFX2RhdGEgZnJvbSAnLi9sYW5nL3N2LVNFLmpzb24nO1xuaW1wb3J0IGxhbmdfZnJGUl9kYXRhIGZyb20gJy4vbGFuZy9mci1GUi5qc29uJztcbmltcG9ydCBsYW5nX2l0SVRfZGF0YSBmcm9tICcuL2xhbmcvaXQtSVQuanNvbic7XG5pbXBvcnQgbGFuZ19lc0VTX2RhdGEgZnJvbSAnLi9sYW5nL2VzLUVTLmpzb24nO1xuaW1wb3J0IGxhbmdfZGVERV9kYXRhIGZyb20gJy4vbGFuZy9kZS1ERS5qc29uJztcbmltcG9ydCBsYW5nX3VrVUFfZGF0YSBmcm9tICcuL2xhbmcvdWstVUEuanNvbic7XG5pbXBvcnQgbGFuZ19lblNURUVGX2RhdGEgZnJvbSAnLi9sYW5nL2VuLVNURUVGLmpzb24nO1xuaW1wb3J0IGxhbmdfZXVFU19kYXRhIGZyb20gJy4vbGFuZy9ldS1FUy5qc29uJztcbmltcG9ydCBsYW5nX2dsRVNfZGF0YSBmcm9tICcuL2xhbmcvZ2wtRVMuanNvbic7XG5pbXBvcnQgbGFuZ19ydVJVX2RhdGEgZnJvbSAnLi9sYW5nL3J1LVJVLmpzb24nO1xuaW1wb3J0IGxhbmdfbmxCRV9kYXRhIGZyb20gJy4vbGFuZy9ubC1CRS5qc29uJztcblxuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdyBhcyBhbnk7XG5cbmV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XG4gICAgdGFnOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdGFnOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgTGFuZ3VhZ2UubGFuZ3VhZ2VzLnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0KG5hbWU6IHN0cmluZywgdmFycz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xuICAgICAgICBsZXQga2V5cyA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuZGF0YTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgdmFsID0gdmFsW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IF92YXIgaW4gdmFycykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5zcGxpdCgne3snICsgX3ZhciArICd9fScpLmpvaW4odmFyc1tfdmFyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsIGFzIGFueTtcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0KCkge1xuICAgICAgICBMYW5ndWFnZS5kZWZhdWx0ID0gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdID0gW107XG4gICAgc3RhdGljIGRlZmF1bHQ6IExhbmd1YWdlO1xuICAgIHN0YXRpYyBjdXJyZW50OiBMYW5ndWFnZTtcbiAgICBzdGF0aWMgbG9hZChjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKTogdm9pZCB7XG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgZmlyc3QgbGFuZ3VhZ2UgdGhhdCBpc24ndCBlcXVhbCB0byB0aGUgZGVmYXVsdFxuICAgICAgICBTeW5jU3RvcmFnZS5MQU5HVUFHRS5nZXQoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFuZ3VhZ2UgPSByZXN1bHRbU3luY1N0b3JhZ2UuTEFOR1VBR0UudGFnXTtcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxhbmd1YWdlID09PSAnYXV0b21hdGljJykge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5hdXRvbWF0aWMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTG9nZ2VyLmluZm8oJ1VzaW5nIGxhbmd1YWdlIGNvbmZpZ3VyYXRpb24gJyArIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcudGFnID09PSBsYW5ndWFnZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBsYW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmxhbmd1YWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQobGFuZ3VhZ2U6IExhbmd1YWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGxhbmd1YWdlO1xuICAgIH1cblxuICAgIHN0YXRpYyBhdXRvbWF0aWMoKSB7XG4gICAgICAgIHJldHVybiAod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgYXMgYW55KS5maW5kKFxuICAgICAgICAgICAgKGw6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICBsLmxlbmd0aCA+PSA1ICYmXG4gICAgICAgICAgICAgICAgKHRoaXMuZGVmYXVsdCA9PT0gdW5kZWZpbmVkIHx8IGwgIT09IHRoaXMuZGVmYXVsdC50YWcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxhbmdfZGVERSA9IG5ldyBMYW5ndWFnZSgnRGV1dHNjaGUgKERFKScsICdkZS1ERScsIGxhbmdfZGVERV9kYXRhKTtcbiAgICAgICAgbGFuZ19kZURFLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19lc0VTID0gbmV3IExhbmd1YWdlKCdFc3Bhw7FvbCAoRVMpJywgJ2VzLUVTJywgbGFuZ19lc0VTX2RhdGEpO1xuICAgICAgICBsYW5nX2VzRVMucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX2VuVVMgPSBuZXcgTGFuZ3VhZ2UoJ0VuZ2xpc2ggKFVTKScsICdlbi1VUycsIGxhbmdfZW5VU19kYXRhKTtcbiAgICAgICAgbGFuZ19lblVTLnJlZ2lzdGVyKCk7XG4gICAgICAgIGxhbmdfZW5VUy5zZXREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gY29uc3QgbGFuZ19lblNURUVGID0gbmV3IExhbmd1YWdlKCdFbmdsaXNoIChTdGVlZiknLCAnZW4tU1RFRUYnLCBsYW5nX2VuU1RFRUZfZGF0YSk7XG4gICAgICAgIC8vIGxhbmdfZW5TVEVFRi5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfZnJGUiA9IG5ldyBMYW5ndWFnZSgnRnJhbsOnYWlzIChGUiknLCAnZnItRlInLCBsYW5nX2ZyRlJfZGF0YSk7XG4gICAgICAgIGxhbmdfZnJGUi5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfaXRJVCA9IG5ldyBMYW5ndWFnZSgnSXRhbGlhbm8gKElUKScsICdpdC1JVCcsIGxhbmdfaXRJVF9kYXRhKTtcbiAgICAgICAgbGFuZ19pdElULnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19zdlNFID0gbmV3IExhbmd1YWdlKCdTdmVuc2thIChTRSknLCAnc3YtU0UnLCBsYW5nX3N2U0VfZGF0YSk7XG4gICAgICAgIGxhbmdfc3ZTRS5yZWdpc3RlcigpO1xuICAgICAgXG4gICAgICAgIGNvbnN0IGxhbmdfdWtVQSA9IG5ldyBMYW5ndWFnZSgn0KPQutGA0LDRl9C90YHRjNC60LAgKFVBKScsICd1ay1VQScsIGxhbmdfdWtVQV9kYXRhKTtcbiAgICAgICAgbGFuZ191a1VBLnJlZ2lzdGVyKCk7XG4gICAgICBcbiAgICAgICAgY29uc3QgbGFuZ19ldUVTID0gbmV3IExhbmd1YWdlKCdFdXNrYXJhIChFVSknLCAnZXUtRVMnLCBsYW5nX2V1RVNfZGF0YSk7XG4gICAgICAgIGxhbmdfZXVFUy5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfZ2xFUyA9IG5ldyBMYW5ndWFnZSgnR2FsZWdvIChHTCknLCAnZ2wtRVMnLCBsYW5nX2dsRVNfZGF0YSk7XG4gICAgICAgIGxhbmdfZ2xFUy5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfcnVSVSA9IG5ldyBMYW5ndWFnZSgn0YDRg9GB0YHQutC40LkgKFJVKScsICdydS1SVScsIGxhbmdfcnVSVV9kYXRhKTtcbiAgICAgICAgbGFuZ19ydVJVLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19ubEJFID0gbmV3IExhbmd1YWdlKCdOZWRlcmxhbmRzIChCRSknLCAnbmwtQkUnLCBsYW5nX25sQkVfZGF0YSk7XG4gICAgICAgIGxhbmdfbmxCRS5yZWdpc3RlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nLCB2YXJzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmN1cnJlbnQuZ2V0KG5hbWUsIHZhcnMpO1xuXG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxufVxuIiwiY29uc3QgcHJlZml4OnN0cmluZyA9ICdbU3RhZGlhK10nO1xuXG5jbGFzcyBMb2dnZXIge1xuICAgIGluZm8gPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ODICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IGJsYWNrJyk7XG4gICAgfTtcblxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ifICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IG9yYW5nZScpO1xuICAgIH07XG5cbiAgICBlcnJvciA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY+KdjCAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiA3MDAnKTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50ID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+nqSAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBkYXJrZ3JlZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEdWJpb3VzbHkgY3JlYXRlZCBieSBBZHJpYW4gQ29vbmV5XG4gICAgICogQGF1dGhvciBodHRwOi8vYWRyaWFuY29vbmV5LmdpdGh1Yi5pb1xuICAgICAqL1xuICAgIGltYWdlID0gZnVuY3Rpb24odXJsOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdldEJveCA9IGZ1bmN0aW9uKHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdHJpbmc6IFwiK1wiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMXB4OyBwYWRkaW5nOiBcIiArIE1hdGguZmxvb3IoaGVpZ2h0LzIpICsgXCJweCBcIiArIE1hdGguZmxvb3Iod2lkdGgvMikgKyBcInB4OyBsaW5lLWhlaWdodDogMDtcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpbSA9IGdldEJveCh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZGltLnN0cmluZywgZGltLnN0eWxlICsgXCJiYWNrZ3JvdW5kOiB1cmwoXCIgKyB1cmwgKyBcIik7IGJhY2tncm91bmQtc2l6ZTogXCIgKyAod2lkdGgpICsgXCJweCBcIiArIChoZWlnaHQpICsgXCJweDsgY29sb3I6IHRyYW5zcGFyZW50O1wiKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7IiwiY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdyBhcyBhbnk7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBDT0RFQyA9IG5ldyBMb2NhbFN0b3JhZ2UoJ0NvZGVjJywgJ2NvZGVjJyk7XG4gICAgc3RhdGljIFJFU09MVVRJT04gPSBuZXcgTG9jYWxTdG9yYWdlKCdSZXNvbHV0aW9uJywgJ3Jlc29sdXRpb24nKTtcbiAgICBzdGF0aWMgTU9OSVRPUl9TVEFUUyA9IG5ldyBMb2NhbFN0b3JhZ2UoJ01vbml0b3IgU3RhdHMnLCAnbW9uaXRvci1zdGF0cycpO1xuXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRhZzogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdGFnOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgfVxuXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWyB0aGlzLnRhZyBdLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlOiBhbnksIGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW3RoaXMudGFnXTogdmFsdWUgfSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQoc3RvcmFnZXM6IExvY2FsU3RvcmFnZVtdLCBjYWxsYmFjazogKChyZXN1bHQ6IGFueSkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHN0b3JhZ2VzLm1hcChlID0+IGUudGFnKSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQoc3RvcmFnZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChzdG9yYWdlcywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhcigpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTeW5jU3RvcmFnZSB7XG4gICAgc3RhdGljIExJQlJBUllfR0FNRVMgPSBuZXcgU3luY1N0b3JhZ2UoJ0xpYnJhcnkgR2FtZXMnLCAnZ2FtZXMnKTtcbiAgICBzdGF0aWMgTElCUkFSWV9TT1JUX09SREVSID0gbmV3IFN5bmNTdG9yYWdlKCdTb3J0IE9yZGVyJywgJ3NvcnQtb3JkZXInKTtcbiAgICBzdGF0aWMgTElCUkFSWV9TT1JUX0RJUkVDVElPTiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBEaXJlY3Rpb24nLCAnc29ydC1kaXJlY3Rpb24nKTtcbiAgICBzdGF0aWMgTEFOR1VBR0UgPSBuZXcgU3luY1N0b3JhZ2UoJ0xhbmd1YWdlJywgJ2xhbmd1YWdlJyk7XG4gICAgc3RhdGljIENPTVBPTkVOVFMgPSBuZXcgU3luY1N0b3JhZ2UoJ0NvbXBvbmVudHMnLCAnY29tcG9uZW50cycpO1xuXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRhZzogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdGFnOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgfVxuXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbIHRoaXMudGFnIF0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzZXQodmFsdWU6IGFueSwgY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFt0aGlzLnRhZ106IHZhbHVlIH0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KHN0b3JhZ2VzOiBTeW5jU3RvcmFnZVtdLCBjYWxsYmFjazogKChyZXN1bHQ6IGFueSkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoc3RvcmFnZXMubWFwKGUgPT4gZS50YWcpLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldChzdG9yYWdlczoge1trZXk6IHN0cmluZ106IGFueX0sIGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoc3RvcmFnZXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGNsZWFyKCkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmNsZWFyKCk7XG4gICAgfVxufSIsImNsYXNzIFV0aWwge1xuICAgIC8qKlxuICAgICAqIFN0YWRpYSdzIG1lbnUgYmFyIGVsZW1lbnQsIHVzZWQgdG8ga25vdyB3aGVuIHRoZSBwbGF5ZXIgaGFzIG9wZW5lZCB0aGUgbWVudS5cbiAgICAgKi9cbiAgICBtZW51RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLm1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlgxYXN2Jyk7XG4gICAgfVxuXG4gICAgaXNNZW51T3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudUVsZW1lbnQuc3R5bGUub3BhY2l0eSAhPT0gJzAnO1xuICAgIH1cblxuICAgIGlzSW5HYW1lKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3BsYXllcicpICE9PSAtMTtcbiAgICB9XG5cbiAgICBpc0luSG9tZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdob21lJykgIT09IC0xO1xuICAgIH1cblxuICAgIGlzSW5TdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdzdG9yZScpICE9PSAtMSAmJiAhdGhpcy5pc0luU3RvcmVEZXRhaWwoKTtcbiAgICB9XG5cbiAgICBpc0luU3RvcmVEZXRhaWwoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignc3RvcmUvZGV0YWlscycpICE9PSAtMTtcbiAgICB9XG4gICAgXG4gICAgZGVzYW5kYm94KGphdmFzY3JpcHQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGphdmFzY3JpcHQ7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlsKCk7IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcblxuZXhwb3J0IGNsYXNzIFdlYkRhdGFiYXNlIHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgY29ubmVjdGlvbjogYW55O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIGNvbm5lY3QoY2FsbGJhY2s/OiAoY29ubmVjdGlvbjphbnkpID0+IHt9KSB7XG4gICAgICAgIGlmKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yOiBBbHJlYWR5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0aW9uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLmNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvciB3aGVuIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2U6JywgeGhyLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3Igd2hlbiBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOicsIHhoci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7IFxuICAgIH1cblxuICAgIGdldENvbm5lY3Rpb24oKTogYW55IHtcbiAgICAgICAgaWYoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yOiBOb3QgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZScpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlY29ubmVjdChjYWxsYmFjaz86IChjb25uZWN0aW9uOm9iamVjdCkgPT4ge30pIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuY29ubmVjdChjYWxsYmFjayk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5cbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3cgYXMgYW55O1xuXG4vKipcbiAqIEEgYnV0dG9uIGFsbG93aW5nIHVzZXJzIHRvIHBsYXkgU3RhZGlhIGluIHdpbmRvd2VkIG1vZGUuXG4gKlxuICogQGV4cG9ydCB0aGUgQWxsb3dXaW5kb3dlZE1vZGUgdHlwZS5cbiAqIEBjbGFzcyBBbGxvd1dpbmRvd2VkTW9kZVxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFsbG93V2luZG93ZWRNb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICdhbGxvdy13aW5kb3dlZC1tb2RlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byB0b2dnbGUgd2luZG93ZWQgbW9kZS5cbiAgICAgKi9cbiAgICBidXR0b246IFVJQnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB3aW5kb3dlZCBtb2RlIGlzIGVuYWJsZWQgb3Igbm90XG4gICAgICovXG4gICAgd2luZG93ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIE1haW4gZXZlbnQsIHN0b3BzIGJ1aWx0LWluIGZ1bGxzY3JlZW4gZXZlbnRzIGZyb20gcmVhY2hpbmcgU3RhZGlhIHdoZW5ldmVyIHdpbmRvd2VkIG1vZGUgaXMgZW5hYmxlZC5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICBmdW5jdGlvbihldmVudDogRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi53aW5kb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVudGVycyB3aW5kb3dlZCBtb2RlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXG4gICAgICovXG4gICAgZW50ZXJXaW5kb3dlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53aW5kb3dlZCA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhpdHMgd2luZG93ZWQgbW9kZVxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBBbGxvd1dpbmRvd2VkTW9kZVxuICAgICAqL1xuICAgIGV4aXRXaW5kb3dlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53aW5kb3dlZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KFxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvd2luZG93ZWQuc3ZnJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnYWxsb3ctd2luZG93ZWQtbW9kZS5idXR0b24tbGFiZWwud2luZG93ZWQnKSxcbiAgICAgICAgICAgIHRoaXMuaWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV4aXRXaW5kb3dlZCgpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBidXR0b24gbGFiZWxzIGFuZCBpY29ucyB0byBmaXQgY3VycmVudCBtb2RlLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBBbGxvd1dpbmRvd2VkTW9kZVxuICAgICAqL1xuICAgIHVwZGF0ZUJ1dHRvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3dpbmRvd2VkLnN2ZycpO1xuICAgICAgICBjb25zdCBpY29uX2V4aXQgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoXG4gICAgICAgICAgICAnaW1hZ2VzL2ljb25zL3dpbmRvd2VkX2V4aXQuc3ZnJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLndpbmRvd2VkKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRJY29uKGljb25fZXhpdCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRUaXRsZShcbiAgICAgICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLmZ1bGxzY3JlZW4nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnNldEljb24oaWNvbik7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRUaXRsZShcbiAgICAgICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLndpbmRvd2VkJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGV0aGVyIGV2ZW50cyBoYXZlIGJlZW4gYWRkZWQgYWxyZWFkeSBvciBub3QuXG4gICAgZXZlbnRzQWRkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyBjb21wb25lbnQgZWxlbWVudHMgYW5kIHZhcmlhYmxlc1xuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBBbGxvd1dpbmRvd2VkTW9kZVxuICAgICAqL1xuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyBJZiBtZW51IGlzIG9wZW4gYW5kIGEgZ2FtZSBpcyBwbGF5aW5nLlxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkgJiYgVXRpbC5pc0luR2FtZSgpKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBidXR0b24gZG9lc24ndCBhbHJlYWR5IGV4aXN0IGluIHRoZSBjdXJyZW50IHJlbmRlcmVyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbmV3IHJlbmRlcmVyc1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY3JlYXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZXZlbnRzIGFyZSBhbHJlYWR5IGFkZGVkLCBkb24ndCBhZGQgdGhlbSBhZ2FpblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZXZlbnRzQWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi53aW5kb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4aXRXaW5kb3dlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZW50ZXJXaW5kb3dlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNvbnRhaW5lci5jcmVhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvQ2xvY2suc2Nzcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcblxuLyoqXG4gKiBBIHNpbXBsZSBjbG9jayBkaXNwbGF5ZWQgaW4gdGhlIFN0YWRpYSBNZW51LlxuICpcbiAqIEBleHBvcnQgdGhlIENsb2NrIHR5cGUuXG4gKiBAY2xhc3MgQ2xvY2tcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBDbG9jayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnY2xvY2snO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNsb2NrIGVsZW1lbnQuXG4gICAgICovXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2ltcGxlIDxzcGFuPiwgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcywgYW5kIHN0b3JlcyBpdCBpbiBbQGxpbmsgI2VsZW1lbnRdXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19jbG9jaycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7J25hbWUnOiB0aGlzLm5hbWV9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyduYW1lJzogdGhpcy5uYW1lfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY2xvY2sgd2hlbiBpdCdzIHZpc2libGVcbiAgICAgICAgaWYoVXRpbC5pc01lbnVPcGVuKCkpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5ZicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRpbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvRm9yY2VDb2RlYy5zY3NzJztcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9VSVRhYic7XG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL3VpL1NlbGVjdCc7XG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XG5pbXBvcnQgeyBSZXNvbHV0aW9uIH0gZnJvbSAnLi9Gb3JjZVJlc29sdXRpb24nO1xuXG5jb25zdCBjaHJvbWUgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xuXG4vKipcbiAqIEEgZHJvcGRvd24gYWxsb3dpbmcgY2hhbmdpbmcgb2YgdGhlIGNvZGVjLlxuICpcbiAqIEBleHBvcnQgdGhlIEZvcmNlQ29kZWMgdHlwZS5cbiAqIEBjbGFzcyBGb3JjZUNvZGVjXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgRm9yY2VDb2RlYyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnZm9yY2UtY29kZWMnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgY29kZWMuXG4gICAgICovXG4gICAgY29kZWM6IG51bWJlciA9IENvZGVjLkFVVE9NQVRJQztcblxuICAgIC8qKiBcbiAgICAgKiBUaGUgY29kZWMgU2VsZWN0IGJveC5cbiAgICAgKi9cbiAgICBzZWxlY3Q6IFNlbGVjdDtcblxuICAgIC8qKiBcbiAgICAgKiBUaGUgU3RhZGlhKyBVSSBUYWIuXG4gICAgICovXG4gICAgdGFiOiBVSVRhYjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBnbG9iYWwgc25hY2tiYXIuXG4gICAgICovXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xuXG4gICAgY29uc3RydWN0b3IodGFiOiBVSVRhYiwgc25hY2tiYXI6IFNuYWNrYmFyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50YWIgPSB0YWI7XG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcyB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNocm9tZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xuICAgICAqL1xuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuQ09ERUMuZ2V0KChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2RlYyA9IHJlc3VsdC5jb2RlYztcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGNocm9tZSBzdG9yYWdlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5DT0RFQy5zZXQodGhpcy5jb2RlYywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnRhYi5hZGRSb3coXG4gICAgICAgICAgICBuZXcgVUlSb3coXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19zZWxlY3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNvZGVjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLkFVVE9NQVRJQ31cIj4ke0xhbmd1YWdlLmdldCgnYXV0b21hdGljJyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLlZQOX1cIj4ke0xhbmd1YWdlLmdldCgndnA5Jyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLkgyNjR9XCI+JHtMYW5ndWFnZS5nZXQoJ2gyNjQnKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdGFkaWFwbHVzX2J1dHRvbi1zbWFsbFwiPiR7TGFuZ3VhZ2UuZ2V0KCdhcHBseScpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkJyBpZD0nJHt0aGlzLmlkfS00ay10b29sdGlwJyBzdHlsZT0nZGlzcGxheTogbm9uZSc+JHtMYW5ndWFnZS5nZXQoJ2ZvcmNlLWNvZGVjLjRrLXRvb2x0aXAnKX08L3A+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU6IChyb3c6VUlSb3cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogQ29kZWMuQVVUT01BVElDIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gcm93LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb2RlYyA9IHBhcnNlSW50KHNlbGYuc2VsZWN0LmdldCgpWzBdKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIucmVsb2FkLXRvLXVwZGF0ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRTdG9yYWdlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2UuUkVTT0xVVElPTi5nZXQocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQucmVzb2x1dGlvbiA9PT0gUmVzb2x1dGlvbi5VSERfNEspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29kZWMgPSBDb2RlYy5WUDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kaXNhYmxlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy00ay10b29sdGlwJykgYXMgSFRNTEVsZW1lbnQ7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLmNvZGVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yY2VDb2RlYy5zZXRDb2RlYyhzZWxmLmNvZGVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogQ29kZWMuQVVUT01BVElDIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYuY29kZWMpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldChcImNvbXBvbmVudC5lbmFibGVkXCIsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1c2VkIENvZGVjXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvZGVjXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0Q29kZWMoY29kZWM6IG51bWJlcikge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc3dpdGNoIChjb2RlYykge1xuICAgICAgICBjYXNlIENvZGVjLlZQOTpcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIiwgJ3tcInZwOVwiOlwiRXh0ZXJuYWxEZWNvZGVyXCJ9Jyk7XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBDb2RlYy5IMjY0OlxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiLCAne1wiaDI2NFwiOlwiRXh0ZXJuYWxEZWNvZGVyXCIsIFwidnA5XCI6XCJsaWJ2cHhcIn0nKTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlIENvZGVjLkFVVE9NQVRJQzpcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIik7XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIik7XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xuICAgICAqL1xuICAgIG9uVXBkYXRlKCkge1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IGtpbmRzIG9mIGNvZGVjcywgcmVwcmVzZW50ZWQgYXMgbnVtYmVycy5cbiAqXG4gKiBAZXhwb3J0IHRoZSBDb2RlYyB0eXBlXG4gKiBAY2xhc3MgQ29kZWNcbiAqL1xuZXhwb3J0IGNsYXNzIENvZGVjIHtcbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWMgY29kZWMsIGxldCBTdGFkaWEgZGVjaWRlIG9uIGl0J3Mgb3duLlxuICAgICAqL1xuICAgIHN0YXRpYyBBVVRPTUFUSUMgPSAwO1xuXG4gICAgLyoqXG4gICAgICogVlA5IGNvZGVjLCB1c3VhbGx5IHdvcmtzIGJldHRlciB0aGFuIEgyNjQgYnV0IGF0IHRoZSBjb3N0IG9mIGxvd2VyIHF1YWxpdHkuXG4gICAgICovXG4gICAgc3RhdGljIFZQOSA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBIMjY0IGNvZGVjLCBoaWdoIHF1YWxpdHkgYW5kIE1hYy1PUyBjb21wYXRpYmxlIGNvZGVjIGJ1dCB3aXRoIGxhdGVuY3kgaXNzdWVzLiBcbiAgICAgKi9cbiAgICBzdGF0aWMgSDI2NCA9IDI7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgJy4vc3R5bGVzL0ZvcmNlUmVzb2x1dGlvbi5zY3NzJztcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9VSVRhYic7XG5pbXBvcnQgeyBVSVJvdywgVUlSb3dPcHRpb25zIH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlJztcblxuY29uc3QgY2hyb21lID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcblxuLyoqXG4gKiBBIGRyb3Bkb3duIGFsbG93aW5nIGNoYW5naW5nIG9mIHRoZSByZXNvbHV0aW9uLlxuICpcbiAqIEBleHBvcnQgdGhlIEZvcmNlUmVzb2x1dGlvbiB0eXBlLlxuICogQGNsYXNzIEZvcmNlUmVzb2x1dGlvblxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIEZvcmNlUmVzb2x1dGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnZm9yY2UtcmVzb2x1dGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCByZXNvbHV0aW9uLlxuICAgICAqL1xuICAgIHJlc29sdXRpb246IG51bWJlciA9IFJlc29sdXRpb24uQVVUT01BVElDO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlc29sdXRpb24gU2VsZWN0IGJveC5cbiAgICAgKi9cbiAgICBzZWxlY3Q6IFNlbGVjdDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdGFkaWErIFVJIFRhYlxuICAgICAqL1xuICAgIHRhYjogVUlUYWI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ2xvYmFsIFNuYWNrYmFyXG4gICAgICovXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xuXG4gICAgY29uc3RydWN0b3IodGFiOiBVSVRhYiwgc25hY2tiYXI6IFNuYWNrYmFyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50YWIgPSB0YWI7XG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxuICAgICAqIEBtZW1iZXJvZiBGb3JjZVJlc29sdXRpb25cbiAgICAgKi9cbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLlJFU09MVVRJT04uZ2V0KChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzdWx0LnJlc29sdXRpb247XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGNocm9tZSBzdG9yYWdlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxuICAgICAqIEBtZW1iZXJvZiBGb3JjZVJlc29sdXRpb25cbiAgICAgKi9cbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLlJFU09MVVRJT04uc2V0KHRoaXMucmVzb2x1dGlvbiwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBGb3JjZVJlc29sdXRpb24uc2V0UmVzb2x1dGlvbih0aGlzLnJlc29sdXRpb24pO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGFiLmFkZFJvdyhcbiAgICAgICAgICAgIG5ldyBVSVJvdyhcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVzb2x1dGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLkFVVE9NQVRJQ31cIj4ke0xhbmd1YWdlLmdldCgnYXV0b21hdGljJyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uVUhEXzRLfVwiPiR7TGFuZ3VhZ2UuZ2V0KCc0aycpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLkZIRH1cIj4ke0xhbmd1YWdlLmdldCgnMTA4MHAnKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdGFkaWFwbHVzX2J1dHRvbi1zbWFsbFwiPiR7TGFuZ3VhZ2UuZ2V0KCdhcHBseScpfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGFkaWFwbHVzX211dGVkXCI+JHtMYW5ndWFnZS5nZXQoJ2ZvcmNlLXJlc29sdXRpb24ubm90ZScpfTwvcD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHRoaXMuaWQgKyAnLXJvdycsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZTogKHJvdzpVSVJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QgPSBuZXcgU2VsZWN0KHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLCB7IHBsYWNlaG9sZGVyOiBSZXNvbHV0aW9uLkFVVE9NQVRJQyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gcm93LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNvbHV0aW9uID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QuZ2V0KClbMF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdG9yYWdlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zbmFja2Jhci5hY3RpdmF0ZShMYW5ndWFnZS5nZXQoJ3NuYWNrYmFyLnJlbG9hZC10by11cGRhdGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRTdG9yYWdlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQoc2VsZi5yZXNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIG9uUmVsb2FkOiAocm93OlVJUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IFJlc29sdXRpb24uQVVUT01BVElDIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYucmVzb2x1dGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1c2VyIFtbUmVzb2x1dGlvbl1dXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gdGhlIHVzZXIgUmVzb2x1dGlvblxuICAgICAqIEBtZW1iZXJvZiBGb3JjZVJlc29sdXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICAgbGV0IGhlaWdodDtcbiAgICAgICAgbGV0IHdpZHRoO1xuICAgICAgICBzd2l0Y2ggKHJlc29sdXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgUmVzb2x1dGlvbi5VSERfNEs6XG4gICAgICAgICAgICAgICAgd2lkdGggPSAzODQwO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IDIxNjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgUmVzb2x1dGlvbi5GSEQ6XG4gICAgICAgICAgICAgICAgd2lkdGggPSAxOTIwO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IDEwODA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uQVVUT01BVElDOlxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdhdmFpbFdpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ2F2YWlsSGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICd3aWR0aCcsIHsgdmFsdWU6ICR7d2lkdGh9IH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdoZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XG4gICAgICAgIGA7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXG4gICAgICovXG4gICAgb25VcGRhdGUoKSB7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkaWZmZXJlbnQga2luZHMgb2YgcmVzb2x1dGlvbnMsIHJlcHJlc2VudGVkIGFzIG51bWJlcnMuXG4gKlxuICogQGV4cG9ydCB0aGUgUmVzb2x1dGlvbiB0eXBlXG4gKiBAY2xhc3MgUmVzb2x1dGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x1dGlvbiB7XG4gICAgLyoqXG4gICAgICogQXV0b21hdGljLCBsZXQgU3RhZGlhIGhhbmRsZSByZXNvbHV0aW9ucy5cbiAgICAgKi9cbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcblxuICAgIC8qKlxuICAgICAqIDRLLCBvciAzODQweDIxNjBcbiAgICAgKi9cbiAgICBzdGF0aWMgVUhEXzRLID0gMTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBGdWxsIEhELCBvciAxOTIweDEwODBcbiAgICAgKi9cbiAgICBzdGF0aWMgRkhEID0gMjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzJztcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcbmltcG9ydCB7IFdlYkRhdGFiYXNlIH0gZnJvbSAnLi4vV2ViRGF0YWJhc2UnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94U2hhcGUgfSBmcm9tICcuLi91aS9DaGVja2JveCc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XG5cbmNvbnN0IHsgY2hyb21lLCBBcnJheSB9ID0gd2luZG93IGFzIGFueTtcblxuLyoqXG4gKiBBIGZpbHRlcmluZyBzeXN0ZW0gYWxsb3dpbmcgaGlkaW5nIGFuZCBzaG93aW5nIHNwZWNpZmljIGdhbWVzIGluIHlvdXIgbGlicmFyeSBhcyB3ZWxsIGFzIG9yZGVyaW5nIHRoZW0gYnkgbmFtZS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBMaWJyYXJ5RmlsdGVyIHR5cGVcbiAqIEBjbGFzcyBMaWJyYXJ5RmlsdGVyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgTGlicmFyeUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnbGlicmFyeS1maWx0ZXInO1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBnYW1lcyBhbmQgZ2FtZSBkYXRhIGltcG9ydGVkIGZyb20gdGhlIERPTVxuICAgICAqL1xuICAgIGdhbWVzOiBhbnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFNuYWNrYmFyIHVzZWQgdG8gZGlzcGxheSBtZXNzYWdlcyB3aGVuIGhpZGluZyBhbmQgc2hvd2luZyBnYW1lc1xuICAgICAqL1xuICAgIHNuYWNrYmFyOiBTbmFja2JhcjtcblxuICAgIC8qKlxuICAgICAqIEZpbHRlciBiYXIgYWxsb3dpbmcgZm9yIGNvbnRyb2xzIG9mIHRoZSBsaWJyYXJ5IGZpbHRlclxuICAgICAqL1xuICAgIGZpbHRlckJhcjogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYm94IHVzZWQgdG8gb3JkZXIgdGhlIGdhbWVzXG4gICAgICovXG4gICAgc2VsZWN0OiBTZWxlY3Q7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGZpbHRlcmluZyBvcmRlclxuICAgICAqL1xuICAgIG9yZGVyOiBGaWx0ZXJPcmRlcjtcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBhbGwgZ2FtZXMgYmUgc2hvd24gcmVnYXJkbGVzcyBpZiB0aGV5cmUgaGlkZGVuIG9yIG5vdD9cbiAgICAgKi9cbiAgICBzaG93QWxsOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tib3ggc2hvd2luZyBoaWRkZW4gZ2FtZXMuXG4gICAgICovXG4gICAgY2hlY2tib3g6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogRGlyZWN0aW9uIG9mIHdoaWNoIGdhbWVzIHdpbGwgYmUgb3JkZXJlZC5cbiAgICAgKi9cbiAgICBkaXJlY3Rpb246IE9yZGVyRGlyZWN0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIGFsbCBnYW1lcyBpbiB5b3VyIGxpYnJhcnkuXG4gICAgICovXG4gICAgZ2FtZVRpbGVzOiBOb2RlTGlzdDtcblxuICAgIC8qKlxuICAgICAqIFN0YWRpYUdhbWVEQiBEYXRhYmFzZS5cbiAgICAgKi9cbiAgICBkYXRhYmFzZTogV2ViRGF0YWJhc2U7XG5cbiAgICAvKipcbiAgICAgKiBTdGFkaWFHYW1lREIgVVVJRCBNYXAuXG4gICAgICovXG4gICAgdXVpZE1hcDogV2ViRGF0YWJhc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihzbmFja2JhcjogU25hY2tiYXIsIGRhdGFiYXNlOiBXZWJEYXRhYmFzZSwgdXVpZE1hcDogV2ViRGF0YWJhc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBJbXBvcnQgZGF0YWJhc2UgJiB1dWlkTWFwIGZyb20gaW5kZXguanNcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xuICAgICAgICB0aGlzLnV1aWRNYXAgPSB1dWlkTWFwO1xuXG4gICAgICAgIC8vIEltcG9ydCBzbmFja2JhciBmcm9tIGluZGV4LmpzXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcblxuICAgICAgICAvLyBDcmVhdGUgbmV3IGZpbHRlciBiYXIgZWxlbWVudFxuICAgICAgICB0aGlzLmZpbHRlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZpbHRlckJhci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgYXJvdW5kIGV2ZXJ5IGdhbWUgYW5kIGluaXRpYWxpemVzIHRoZSBlbGVtZW50cyBuZWNlc3NhcnkgdG8gc2hvdyBvciBoaWRlIGl0LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBjcmVhdGVBbGxXcmFwcGVycygpIHtcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRpbGUgYXMgRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoZWxlbWVudCwgdGhpcy5nZXRVVUlEKGVsZW1lbnQpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmdhbWVUaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZ2FtZSBVVUlEIGZyb20gaXQncyBqc2xvZyBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRpbGVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgZ2V0VVVJRCh0aWxlOiBFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aWxlXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdqc2xvZycpXG4gICAgICAgICAgICAuc3BsaXQoJzsgJylbMV1cbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMyk7XG4gICAgfVxuXG4gICAgd3JhcHBlckV4aXN0cyh1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy0nICsgdXVpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSB0aWxlIGVsZW1lbnQsIGNyZWF0ZSBhIHdyYXBwZXIgYXJvdW5kIGl0IGFuZCBhbiBpY29uIGFsbG93aW5nIGl0IHRvIGJlIHNob3duIG9yIGhpZGRlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZ2FtZSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgdGhlIGdhbWUgdXVpZFxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgY3JlYXRlV3JhcHBlcihlbGVtZW50OiBFbGVtZW50LCB1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlckV4aXN0cyh1dWlkKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnV1aWRNYXAuZ2V0Q29ubmVjdGlvbigpWyd1dWlkTWFwJ107XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gY29ubmVjdGlvblttYXBbdXVpZF1dO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgd3JhcHBlclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdnYW1lLXV1aWQnLCB1dWlkKTtcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScsIGVudHJ5WzFdKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcicpO1xuICAgICAgICB3cmFwcGVyLmlkID0gdGhpcy5pZCArICctJyArIHV1aWQ7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpY29uXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicpO1xuICAgICAgICBpY29uLmlubmVySFRNTCA9ICd2aXNpYmlsaXR5JztcblxuICAgICAgICAvLyBXcmFwIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgZWxlbWVudCBhbmQgYWRkIHRoZSBpY29uIGJlZm9yZSBpdFxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIENoZWNrIHRoZSBzdG9yYWdlIGZvciB2aXNpYmlsaXR5LCBoaWRlIHRoZSBnYW1lIGlmIGJvdGggJ3Zpc2libGUnIGFuZCAnc2hvd0FsbCcgaXMgZmFsc2VcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVzLmhhc093blByb3BlcnR5KHV1aWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVzW3V1aWRdID0geyB2aXNpYmxlOiB0cnVlIH07XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSAmJiAhdGhpcy5zaG93QWxsKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIGljb24gaW4gdGhlIHRvcCByaWdodCBjb3JuZXIgcmF0aGVyIHRoYW4gdGhlIHRvcCBsZWZ0IHVzaW5nXG4gICAgICAgIC8vIGEgbWFyZ2luICh1c2luZyB0aGUgJ2xlZnQnIGNzcyBhdHRyaWJ1dGUgaXMgbm90IHBvc3NpYmxlKVxuICAgICAgICBpY29uLnN0eWxlLm1hcmdpbkxlZnQgPSBlbGVtZW50LmNsaWVudFdpZHRoIC0gaWNvbi5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYGNhbGMoMTAwJSAtICR7ZWxlbWVudC5jbGllbnRXaWR0aCAvXG4gICAgICAgICAgICAyfXB4KSAke2VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMn1weGA7XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkIG9uXG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlLCBzZXQgaXQgdG8gaGlkZGVuXG4gICAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIuYWN0aXZhdGUoTGFuZ3VhZ2UuZ2V0KCdzbmFja2Jhci5oaWRlLWdhbWUnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBzZXQgaXQgdG8gc2hvd25cbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIuc2hvdy1nYW1lJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZ2FtZSdzIHZpc2liaWxpdHlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2FtZSh3cmFwcGVyLCBlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgZ2FtZSdzIHZpc2liaWxpdHksIG1ha2luZyBzdXJlIGl0J3Mgb25seSBzaG93biB3aGVuIGl0J3Mgc3VwcG9zZWQgdG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gd3JhcHBlciBUaGUgZ2FtZSdzIHdyYXBwZXIsIGNyZWF0ZWQgYnkgW1tjcmVhdGVXcmFwcGVyXV1cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRpbGUgVGhlIGdhbWUgdGlsZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYW5pbWF0ZSBTaG91bGQgdGhlIGdhbWUgaGF2ZSBhbiBhbmltYXRlZCBjbG9zaW5nIGVmZmVjdD9cbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIHVwZGF0ZUdhbWUod3JhcHBlcjogRWxlbWVudCwgdGlsZTogRWxlbWVudCwgYW5pbWF0ZTogYm9vbGVhbikge1xuICAgICAgICAvLyBHZXQgdGhlIGdhbWUgVVVJRFxuICAgICAgICBjb25zdCB1dWlkID0gdGhpcy5nZXRVVUlEKHRpbGUpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgZ2FtZSBpY29uXG4gICAgICAgIGNvbnN0IGljb24gPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJ1xuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIC8vIElmIHRoZSBnYW1lIGlzbid0IHZpc2libGUuLi5cbiAgICAgICAgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vIC4uLmJ1dCBhbGwgZ2FtZXMgc2hvdWxkIHN0aWxsIGJlIHNob3duXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93QWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBpY29uIHRvIGRpc3BsYXkgdGhhdCBpdCdzIG5vdCB2aXNpYmxlIGJ1dCBzaG93biBhbnl3YXlzXG4gICAgICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAndmlzaWJpbGl0eV9vZmYnO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzbid0IGhpZGRlblxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycsICdjbG9zZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLi4uXG4gICAgICAgICAgICAgICAgLy8gLi4uaWYgdGhlIGhpZGluZyBzaG91bGQgYmUgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWRlIHRoZSBnYW1lIHRpbGUgb3V0XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIDEgc2Vjb25kLCBoaWRlIGl0XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgbm9ybWFsbHlcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGljb24gc3RheXMgaW4gcGxhY2UgYW5kIGRvZXNuJ3QgZ2V0IHJlc2V0IGJhY2sgdG8gdGhlIHRvcCBsZWZ0IGNvcm5lclxuICAgICAgICAgICAgaWNvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gdGlsZS5jbGllbnRXaWR0aCAtIGljb24uY2xpZW50V2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGljb24gc2hvd3MgdGhhdCBpdCBpcyB2aXNpYmxlXG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9ICd2aXNpYmlsaXR5JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhbGwgZ2FtZXMsIHNob3J0aGFuZCBmb3IgbG9vcGluZyB0aHJvdWdoIHRpbGVzIGFuZCB1cGRhdGluZyB0aGVtIGluZGl2aWR1YWxseVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICB1cGRhdGVBbGxHYW1lcygpIHtcbiAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcblxuICAgICAgICB0aGlzLmdhbWVUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhbWUodGlsZS5wYXJlbnRFbGVtZW50LCB0aWxlIGFzIEVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZCB0aGUgc3RvcmVkIGRhdGEgZnJvbSB0aGUgc3luY2hyb25pemVkIGNocm9tZSBzdG9yYWdlIChzdG9yZWQgaW4geW91ciB1c2VyIGRhdGEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC8vIENhbGxiYWNrIHRoYXQgaXMgcnVuIGFmdGVyIHRoZSBkYXRhIGhhcyBiZWVuIHJlYWRcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgpID0+IGFueSA9ICgpID0+IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMgPSB7fTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBTeW5jU3RvcmFnZS5nZXQoXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUyxcbiAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfT1JERVIsXG4gICAgICAgICAgICAgICAgU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVzID0gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXSAhPT0gdW5kZWZpbmVkID8gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXSA6IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXIgPVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9PUkRFUi50YWddXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEZpbHRlck9yZGVyLlJFQ0VOVDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLnRhZ10gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTi50YWddXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORztcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdG8gdGhlIHN5bmNocm9uaXplZCBjaHJvbWUgc3RvcmFnZSAoc3RvcmVkIGluIHlvdXIgdXNlciBkYXRhKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAvLyBDYWxsYmFjayB0aGF0IGlzIHJ1biBhZnRlciB0aGUgZGF0YSBoYXMgYmVlbiB3cml0dGVuXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIHNldFN0b3JhZ2UoY2FsbGJhY2s6ICgpID0+IGFueSA9ICgpID0+IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBTeW5jU3RvcmFnZS5zZXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXTogdGhpcy5nYW1lcyxcbiAgICAgICAgICAgICAgICBbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX09SREVSLnRhZ106IHRoaXMub3JkZXIsXG4gICAgICAgICAgICAgICAgW1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04udGFnXTogdGhpcy5kaXJlY3Rpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgbG9hZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB2YXJpZXR5IG9mIGV2ZW50cyB0byB0aGUgZmlsdGVyIGJhclxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBhZGRGaWx0ZXJCYXJFdmVudHMoKSB7XG4gICAgICAgIC8vIFdoZW4gdGhlIG9yZGVyIGlzIGNoYW5nZWQsIHNldCBpdCBpbiB0aGUgc3RvcmFnZVxuICAgICAgICB0aGlzLnNlbGVjdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JkZXIgPSBwYXJzZUludCh0aGlzLnNlbGVjdC5nZXQoKVswXSkgYXMgRmlsdGVyT3JkZXI7XG4gICAgICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIHNob3cgYWxsIGNoZWNrYm94IGlzIGNsaWNrZWQsIHRvZ2dsZSB0aGUgc2hvd0FsbCB2YXJpYWJsZSBhbmQgdXBkYXRlIHRoZSBnYW1lc1xuICAgICAgICB0aGlzLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93QWxsID0gKHRoaXMuY2hlY2tib3ggYXMgYW55KS5jaGVja2VkO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGxHYW1lcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnIycgKyB0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJ1xuICAgICAgICApO1xuICAgICAgICAvLyBUb2dnbGUgdGhlIHNvcnQgZGlyZWN0aW9uXG4gICAgICAgIGRpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydERpcmVjdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVNvcnREaXJlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnIycgKyB0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uREVTQ0VORElORztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rlc2NlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZGluZycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORztcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FzY2VuZGluZycpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGVzY2VuZGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgc3RvcHBlZCwgZGVzdHJveXMgbmVjZXNzYXJ5IHBhcnRzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nKVxuICAgICAgICAgICAgLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KFxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBnYW1lIGxpc3QgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHNvcnQgb3JkZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIHNvcnRHYW1lcygpIHtcbiAgICAgICAgbGV0IGFyciA9IChBcnJheS5mcm9tKHRoaXMuZ2FtZVRpbGVzKSBhcyBFbGVtZW50W10pLm1hcChcbiAgICAgICAgICAgIChlKSA9PiBlLnBhcmVudEVsZW1lbnRcbiAgICAgICAgKTsgLy8gR2V0IGFsbCB3cmFwcGVycyBhcyBhbiBhcnJheVxuICAgICAgICBhcnIgPSBhcnIuc29ydChGaWx0ZXJPcmRlci5nZXRTb3J0ZXIodGhpcy5vcmRlcikgYXMgYW55KTtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORykge1xuICAgICAgICAgICAgYXJyID0gYXJyLnJldmVyc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wcmVwZW5kKGVsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyBldmVyeSBzZWNvbmQsIGNyZWF0ZXMgYW5kIHVwZGF0ZXMgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbC5pc0luSG9tZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5DVlZYZmMuWVl5M1piJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlkID0gdGhpcy5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7RmlsdGVyT3JkZXIuUkVDRU5UfVwiPiR7TGFuZ3VhZ2UuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAnbGlicmFyeS1maWx0ZXIucmVjZW50J1xuICAgICAgICAgICAgICAgICl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJPcmRlci5BTFBIQUJFVElDQUxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIj4ke0xhbmd1YWdlLmdldChcbiAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnktZmlsdGVyLmFscGhhYmV0aWNhbCdcbiAgICAgICAgICAgICAgICApfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7RmlsdGVyT3JkZXIuUkFORE9NfVwiPiR7TGFuZ3VhZ2UuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAnbGlicmFyeS1maWx0ZXIucmFuZG9tJ1xuICAgICAgICAgICAgICAgICl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0nJHt0aGlzLmZpbHRlckJhci5pZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAnLWRpcmVjdGlvbid9JyBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGFzY2VuZGluZyBzdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcHJldHR5LCBjaGVja2JveCB9ID0gbmV3IENoZWNrYm94KFxuICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2xpYnJhcnktZmlsdGVyLnNob3ctaGlkZGVuJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5zZXRCaWdnZXIodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnNldFNoYXBlKENoZWNrYm94U2hhcGUuQ1VSVkVEKVxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgICAgICAgICBwcmV0dHkuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19maWx0ZXJiYXItY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5hcHBlbmRDaGlsZChwcmV0dHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3ggPSBjaGVja2JveDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVUaWxlcyA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvckFsbCgnLkdxTGk0ZCcpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZpbHRlckJhcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFsbFdyYXBwZXJzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdHlsZSB0aGUgY3VzdG9tIHNlbGVjdCBib3ggaW4gdGhlIGZpbHRlciBiYXJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCA9IG5ldyBTZWxlY3QoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuICAgICAgICAgICAgICAgICAgICB7IHBsYWNlaG9sZGVyOiBGaWx0ZXJPcmRlci5SRUNFTlQgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQodGhpcy5vcmRlcik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZpbHRlckJhckV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERpZmZlcmVudCB0eXBlcyBvZiBmaWx0ZXJpbmcsIHJlcHJlc2VudGVkIGFzIG51bWJlcnNcbiAqXG4gKiBAZXhwb3J0IHRoZSBGaWx0ZXJPcmRlciB0eXBlXG4gKiBAY2xhc3MgRmlsdGVyT3JkZXJcbiAqL1xuZXhwb3J0IGNsYXNzIEZpbHRlck9yZGVyIHtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IFN0YWRpYSBzb3J0aW5nLCByZWNlbnQvbmV3IGdhbWVzLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxuICAgICAqL1xuICAgIHN0YXRpYyBSRUNFTlQgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQWxwaGFiZXRpY2FsIG9yZGVyLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxuICAgICAqL1xuICAgIHN0YXRpYyBBTFBIQUJFVElDQUwgPSAxO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJhbmRvbSBvcmRlci5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgUkFORE9NID0gMjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydGluZyBtZXRob2Qgb2YgdGhlIGlucHV0ZWQgb3JkZXIuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybnMgYSBmdW5jdGlvbiBzb3J0aW5nIGdhbWVzIGJ5IHRoZSBpbnB1dGVkIG9yZGVyLlxuICAgICAqIEBwYXJhbSB7RmlsdGVyT3JkZXJ9IG9yZGVyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXG4gICAgICovXG4gICAgc3RhdGljIGdldFNvcnRlcihvcmRlcjogRmlsdGVyT3JkZXIpOiBGdW5jdGlvbiB7XG4gICAgICAgIHN3aXRjaCAob3JkZXIpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRUNFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydFJlY2VudDtcblxuICAgICAgICAgICAgY2FzZSB0aGlzLkFMUEhBQkVUSUNBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0QWxwaGFiZXRpY2FsO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkFORE9NOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRSYW5kb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGJ5IHJlY2VudCBnYW1lcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEBwYXJhbSB7Kn0gYlxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgd2hpY2ggcGFyYW1ldGVyIGlzIHdoZXJlLlxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHNvcnRSZWNlbnQoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFscGhhYmV0aWNhbGx5LlxuICAgICAqIFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7Kn0gYVxuICAgICAqIEBwYXJhbSB7Kn0gYlxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgd2hpY2ggcGFyYW1ldGVyIGlzIHdoZXJlLlxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHNvcnRBbHBoYWJldGljYWwoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBuYW1lQSA9IGEuZ2V0QXR0cmlidXRlKCdnYW1lLW5hbWUnKTtcbiAgICAgICAgY29uc3QgbmFtZUIgPSBiLmdldEF0dHJpYnV0ZSgnZ2FtZS1uYW1lJyk7XG5cbiAgICAgICAgaWYgKG5hbWVBID09PSB1bmRlZmluZWQgfHwgbmFtZUIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lQik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJhbmRvbShhOiBhbnksIGI6IGFueSkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMikgLSAxO1xuICAgIH1cbn1cblxuLyoqXG4gKiBFbnVtIGNvbnRhaW5pbmcgZGlmZmVyZW50IG9yZGVyIGRpcmVjdGlvbnNcbiAqXG4gKiBAZXhwb3J0IHRoZSBPcmRlckRpcmVjdGlvbiB0eXBlLlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGVudW0gT3JkZXJEaXJlY3Rpb24ge1xuICAgIEFTQ0VORElORyxcbiAgICBERVNDRU5ESU5HLFxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL1VJQ29tcG9uZW50JztcbmltcG9ydCAnLi9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2Nzcyc7XG5cbi8vIEltcG9ydCB0aGUgTW9uaXRvciBydW5uYWJsZSBhcyBhIHJhdyBzdHJpbmdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBydW5uYWJsZSBmcm9tICchcmF3LWxvYWRlciEuLi9Nb25pdG9yUnVubmFibGUnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94QW5pbWF0aW9uIH0gZnJvbSAnLi4vdWkvQ2hlY2tib3gnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlJztcblxuY29uc3QgeyBjaHJvbWUsIFJUQ1BlZXJDb25uZWN0aW9uIH0gPSAod2luZG93IGFzIGFueSk7XG5cbi8qKlxuICogQSBuZXR3b3JrIG1vbml0b3IgYWxsb3dpbmcgdXNlcnMgdG8gc2VlIHRoZWlyIG5ldHdvcmsgc3RhdGlzdGljcyB3aGlsZSBwbGF5aW5nIGEgZ2FtZS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBOZXR3b3JrTW9uaXRvciB0eXBlLlxuICogQGNsYXNzIE5ldHdvcmtNb25pdG9yXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgTmV0d29ya01vbml0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ25ldHdvcmstbW9uaXRvcic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFiIGVsZW1lbnQuXG4gICAgICovXG4gICAgdGFiRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbW9uaXRvciBlbGVtZW50LlxuICAgICAqL1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cbiAgICAgKi9cbiAgICBjb21wb25lbnQ6IFVJQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIFtbVUlCdXR0b25dXSB1c2VkIHRvIG9wZW4gdGhlIHRhYi5cbiAgICAgKi9cbiAgICBidXR0b246IFVJQnV0dG9uO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBhY3RpdmUgb3Igbm90LlxuICAgICAqL1xuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgbW9uaXRvciBpcyBvcGVuIG9yIG5vdC5cbiAgICAgKi9cbiAgICBtb25pdG9yT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmstbW9uaXRvcicpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UnVubmFibGUoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWaXNpYmxlIG5ldHdvcmsgc3RhdGlzdGljcy5cbiAgICAgKi9cbiAgICB2aXNpYmxlOiBhbnkgPSB7XG4gICAgICAgICd0aW1lJzogdHJ1ZSxcbiAgICAgICAgJ3Jlc29sdXRpb24nOiB0cnVlLFxuICAgICAgICAnRlBTJzogdHJ1ZSxcbiAgICAgICAgJ2xhdGVuY3knOiB0cnVlLFxuICAgICAgICAnY29kZWMnOiB0cnVlLFxuICAgICAgICAndHJhZmZpYyc6IHRydWUsXG4gICAgICAgICdjdXJyZW50LXRyYWZmaWMnOiB0cnVlLFxuICAgICAgICAnYXZlcmFnZS10cmFmZmljJzogdHJ1ZSxcbiAgICAgICAgJ3BhY2tldHMtbG9zdCc6IHRydWUsXG4gICAgICAgICdhdmVyYWdlLXBhY2tldC1sb3NzJzogdHJ1ZSxcbiAgICAgICAgJ2ppdHRlci1idWZmZXInOiB0cnVlLFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXaGljaCBvcmRlciB0aGUgbmV0d29yayBzdGF0aXN0aWNzIHNob3cgdXAgaW4uXG4gICAgICovXG4gICAgb3JkZXJNYXA6IGFueSA9IFtcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAncmVzb2x1dGlvbicsXG4gICAgICAgICdGUFMnLFxuICAgICAgICAnbGF0ZW5jeScsXG4gICAgICAgICdjb2RlYycsXG4gICAgICAgICd0cmFmZmljJyxcbiAgICAgICAgJ2N1cnJlbnQtdHJhZmZpYycsXG4gICAgICAgICdhdmVyYWdlLXRyYWZmaWMnLFxuICAgICAgICAncGFja2V0cy1sb3N0JyxcbiAgICAgICAgJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnLFxuICAgICAgICAnaml0dGVyLWJ1ZmZlcidcbiAgICBdXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgW1tVSUNvbXBvbmVudF1dIGFuZCBhIFtbVUlCdXR0b25dXS5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBjcmVhdGVVSSgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgVUlDb21wb25lbnQoXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5uYW1lJyksXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdDVHZEWGQgUUFBeVdkIEZqeTA1ZCBpdldVaGMgUVNESHljIHJwZ1p6YyBSa3lIMWUgc3RhZGlhcGx1c19idXR0b24gc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10b2dnbGUtYnV0dG9uJyBpZD0nJHt0aGlzLmlkfS10b2dnbGVidXR0b24nPk5ldHdvcmsgTW9uaXRvcjwvZGl2PlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGg2PiR7TGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IuaGVhZGluZy12aXNpYmxlJyl9PC9oNj5cbiAgICAgICAgICAgIDx1bCBpZD0nJHt0aGlzLmlkfS12aXNpYmxlbGlzdCc+PC91bD5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxwIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkJz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPldoeSBpcyBteSBuZXR3b3JrIHNwZWVkIHNvIG11Y2ggbG93ZXIgdGhhbiBub3JtYWw/PC9zdHJvbmc+PC9icj48L2JyPlxuICAgICAgICAgICAgICAgIFRoZSBzdGF0aXN0aWNzIHNob3duIGluIHRoZSBuZXR3b3JrIG1vbml0b3IgaGF2ZSBjaGFuZ2VkIHVuaXRzIGZyb20gYml0cyAoYikgdG8gYnl0ZXMgKEIpLiBUaGlzIG1lYW5zIHRoZSBzdGF0aXN0aWNzIGluIDIuMiBhbmQgbGF0ZXIgd2lsbCBiZSBhcm91bmQgMS84IG9mIHdoYXQgdGhleSB3ZXJlIGluIDIuMS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB0aGlzLmlkLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdGFiJyk7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL25ldHdvcmstbW9uaXRvci5zdmcnKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IuYnV0dG9uLWxhYmVsJyksIHRoaXMuaWQgKyAnLWJ1dHRvbicpO1xuXG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgoKSA9PiB7IHRoaXMudXBkYXRlVmlzaWJsZSgpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSBuZXR3b3JrIG1vbml0b3IgcnVubmFibGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBzdGFydFJ1bm5hYmxlKCkge1xuICAgICAgICBVdGlsLmRlc2FuZGJveChydW5uYWJsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgbW9uaXRvci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9wZW5Nb25pdG9yKCkge1xuICAgICAgICB0aGlzLm1vbml0b3JPcGVuID0gdHJ1ZTtcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnN0YXJ0KCknKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgbW9uaXRvci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIGNsb3NlTW9uaXRvcigpIHtcbiAgICAgICAgdGhpcy5tb25pdG9yT3BlbiA9IGZhbHNlO1xuICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc3RvcCgpJyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy5nZXQoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZihyZXN1bHRbTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMudGFnXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHJlc3VsdFtMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy50YWddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMuc2V0KHRoaXMudmlzaWJsZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydFJ1bm5hYmxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsb3NlTW9uaXRvcigpO1xuXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KCdTdGFkaWFQbHVzTW9uaXRvciA9IG51bGwnKTtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgd2hpY2ggc3RhdGlzdGljcyBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIHVwZGF0ZVZpc2libGUoKSB7XG4gICAgICAgIFV0aWwuZGVzYW5kYm94KGBTdGFkaWFQbHVzTW9uaXRvci5zZXRWaXNpYmxlKCR7SlNPTi5zdHJpbmdpZnkodGhpcy52aXNpYmxlKX0pYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgbWFrZXMgc3VyZSB0byBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXG4gICAgICovXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkgJiYgVXRpbC5pc0luR2FtZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY3JlYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbk9wZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc2V0RWRpdGFibGUodHJ1ZSknKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc2V0RWRpdGFibGUoZmFsc2UpJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXZpc2libGVsaXN0Jyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBvZiB0aGlzLm9yZGVyTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IGtleS5yZXBsYWNlKC8tL2csICcgJykuc3BsaXQoJyAnKS5tYXAoKG5hbWU6c3RyaW5nKSA9PiBuYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSkpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWU6IGJvb2xlYW4gPSB0aGlzLnZpc2libGVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge3ByZXR0eSwgY2hlY2tib3h9ID0gbmV3IENoZWNrYm94KG5hbWUpLnNldEJpZ2dlcih0cnVlKS5zZXRBbmltYXRpb24oQ2hlY2tib3hBbmltYXRpb24uU01PT1RIKS5idWlsZCgpO1xuICAgICAgICAgICAgICAgICAgICBwcmV0dHkuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci1jaGVja2JveCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocHJldHR5KTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVba2V5XSA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy10b2dnbGVidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nLCB0aGlzLm1vbml0b3JPcGVuKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLm1vbml0b3JPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb25pdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9uaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicsIHRoaXMubW9uaXRvck9wZW4pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY3JlYXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnQub3BlblRhYigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNvbnRhaW5lci5jcmVhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuY29tcG9uZW50Lm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsb3NlVGFiKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFVdGlsLmlzSW5HYW1lKCkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keT4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9uaXRvcigpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcbiAgICBzdGF0aWMgV0lORE9XUzogc3RyaW5nID0gXCJXaW4zMlwiO1xuICAgIHN0YXRpYyBNQUNPUzogc3RyaW5nID0gXCJNYWNJbnRlbFwiO1xufVxuXG5leHBvcnQgY2xhc3MgUGFzdGVGcm9tQ2xpcGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gICAgdGFnOiBzdHJpbmcgID0gJ3Bhc3RlLWZyb20tY2xpcGJvYXJkJztcblxuICAgIHByb3RlY3RlZCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb25jZSBldmVyeSBzZWNvbmQuXG4gICAgICovXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uVXBkYXRlKCk7XG5cbiAgICAgICAgaWYgKFV0aWwuaXNJbkdhbWUoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xuXG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZXZlbnRMaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBsZXQgY3RybEtleTogYm9vbGVhbjtcbiAgICAgICAgc3dpdGNoKG5hdmlnYXRvci5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS5XSU5ET1dTOlxuICAgICAgICAgICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLk1BQ09TOlxuICAgICAgICAgICAgICAgIGN0cmxLZXkgPSBldmVudC5tZXRhS2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN0cmxLZXkgJiYgJ0tleVYnID09IGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKGZ1bmN0aW9uKGRhdGE6IHN0cmluZykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBJbnB1dEV2ZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRFdmVudEluaXRcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcImluc2VydFRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wb3Npbmc6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFVJRXZlbnRJbml0XG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IG51bGwsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnRJbml0XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XG5pbXBvcnQgJy4vc3R5bGVzL1JhdGluZ3Muc2Nzcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcblxuLyoqXG4gKiBBIGNvbXBvbmVudCBhZGRpbmcgTWV0YWNyaXRpYyByYXRpbmdzIHRvIGV2ZXJ5IFN0YWRpYSBnYW1lLlxuICpcbiAqIEBleHBvcnQgdGhlIFJhdGluZ3MgdHlwZVxuICogQGNsYXNzIFJhdGluZ3NcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBSYXRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICdyYXRpbmdzJztcblxuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbmcgZWxlbWVudC5cbiAgICAgKi9cbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgZGF0YWJhc2UuXG4gICAgICovXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFN0YWRpYUdhbWVEQiBVVUlEIE1hcC5cbiAgICAgKi9cbiAgICB1dWlkTWFwOiBXZWJEYXRhYmFzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBmcm9tIGVhY2ggYm91bmQgaW4gd2hpY2ggYSBnYW1lIHdpbGwgZ2V0IDAgb3IgNSBzdGFycy5cbiAgICAgKi9cbiAgICBncmFjZUFtb3VudDogbnVtYmVyID0gMTA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3RhcnMgdG8gYXdhcmQuXG4gICAgICovXG4gICAgbWF4U3RhcnMgPSA1O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2U6IFdlYkRhdGFiYXNlLCB1dWlkTWFwOiBXZWJEYXRhYmFzZSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSByYXRpbmcgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXG4gICAgICovXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3JhdGluZycsICdtYXRlcmlhbC1pY29ucycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGdhbWUgVVVJRC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRoZSBnYW1lIFVVSUQgYXMgYSBzdHJpbmcuXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3NcbiAgICAgKi9cbiAgICBnZXRVVUlEKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5ocmVmLnN1YnN0cmluZygnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoLCAnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoICsgMzYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgcmF0aW5nLCBmZXRjaGluZyBpdCBmcm9tIHRoZSBkYXRhYmFzZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXG4gICAgICovXG4gICAgdXBkYXRlUmF0aW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1dWlkID0gdGhpcy5nZXRVVUlEKCk7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnV1aWRNYXAuZ2V0Q29ubmVjdGlvbigpWyd1dWlkTWFwJ107XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW3V1aWRdXTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJhdGluZycsIGVudHJ5WzZdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgaG93IG1hbnkgc3RhcnMgYSBnYW1lIHNob3VsZCBoYXZlIGJhc2VkIG9uIGl0J3MgcmF0aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGluZyB0aGUgZ2FtZSdzIHJhdGluZy5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IGFuIGFycmF5IG9mIGljb24gc3RyaW5ncywgYmVpbmcgZWl0aGVyIFwic3RhclwiLCBcInN0YXJfaGFsZlwiIG9yIFwic3Rhcl9vdXRsaW5lXCIuXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3MgXG4gICAgICovXG4gICAgZ2V0U3RhcnMocmF0aW5nOiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IG91dHB1dFN0YXJzID0gW107XG5cbiAgICAgICAgLy8gQ2xhbXBzIHRoZSByYXRpbmcgdG8gdmFsdWVzIGJldHdlZW4gMCBhbmQgMSxcbiAgICAgICAgLy8gd2hlcmUgKDAgKyBncmFjZUFtb3VudCkgaXMgMCBhbmQgKDEwMCAtIGdyYWNlQW1vdW50KSBpcyAxXG4gICAgICAgIGNvbnN0IGNsYW1wZWRSID0gKHJhdGluZyAvIDEwMCkgKiAoMSArICh0aGlzLmdyYWNlQW1vdW50IC8gMTAwKSAqIDIpIC0gKHRoaXMuZ3JhY2VBbW91bnQgLyAxMDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCByID0gY2xhbXBlZFI7IGkgPCB0aGlzLm1heFN0YXJzOyBpICs9IDEsIHIgLT0gMSAvIHRoaXMubWF4U3RhcnMpIHtcbiAgICAgICAgICAgIGlmIChyID49IDEgLyB0aGlzLm1heFN0YXJzKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0U3RhcnMucHVzaCgnc3RhcicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyID49IDApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRTdGFycy5wdXNoKCdzdGFyX2hhbGYnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0U3RhcnMucHVzaCgnc3Rhcl9vdXRsaW5lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0U3RhcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgcmF0aW5nIGVsZW1lbnQgdG8gbWFrZSBzdXJlIGl0IGFsd2F5cyBkaXNwbGF5cyB0aGUgY29ycmVjdCB2YWx1ZS5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgaWYoVXRpbC5pc0luU3RvcmVEZXRhaWwoKSkge1xuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbmcgPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJhdGluZycpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFycyA9IHRoaXMuZ2V0U3RhcnMocmF0aW5nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocmF0aW5nID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignLlp6QkpTYiA+IC5CTVVuZmQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihuZXh0U2libGluZyA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCwgbmV4dFNpYmxpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0YXJzLmpvaW4oJyAnKX1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhZGlhcGx1c19yYXRpbmctdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmF0aW5nfSAvIDEwMCAoJHtMYW5ndWFnZS5nZXQoJ3JhdGluZ3Muc291cmNlLW5hbWUnKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgJy4vc3R5bGVzL1N0b3JlRmlsdGVyLnNjc3MnO1xuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcblxuLyoqXG4gKiBBIHNlYXJjaCBiYXIgZGlzcGxheWVkIG9uIHRoZSBzdG9yZSBwYWdlIG9mIFN0YWRpYS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBTdG9yZUZpbHRlciB0eXBlLlxuICogQGNsYXNzIFN0b3JlRmlsdGVyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgU3RvcmVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ3N0b3JlLWZpbHRlcic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIGJhciBlbGVtZW50LlxuICAgICAqL1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQSB0ZW1wbGF0ZSBlbGVtZW50IGZvciBpbmRpdmlkdWFsIGdhbWVzIGluIHRoZSBzZWFyY2ggYm94LlxuICAgICAqL1xuICAgIGdhbWVUZW1wbGF0ZTogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3RhZGlhR2FtZURCIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIGRhdGFiYXNlOiBXZWJEYXRhYmFzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgVVVJRCBNYXAuXG4gICAgICovXG4gICAgdXVpZE1hcDogV2ViRGF0YWJhc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBhbGwgZ2FtZSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBnYW1lczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCBpbnB1dC5cbiAgICAgKi9cbiAgICBzZWFyY2hGaWVsZDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogV2ViRGF0YWJhc2UsIHV1aWRNYXA6IFdlYkRhdGFiYXNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBzZWFyY2ggYmFyIGFuZCBuZWNlc3NhcnkgZWxlbWVudHMvdmFyaWFibGVzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFN0b3JlRmlsdGVyXG4gICAgICovXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q29ubmVjdGlvbigpWydkYXRhJ107XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXInKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jhcic+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwiJHtjb25uZWN0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbm5lY3Rpb24ubGVuZ3RoKV1bMV19Li4uXCIgaWQ9JyR7dGhpcy5pZH0tc2VhcmNoJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZXMnIGlkPScke3RoaXMuaWR9LWdhbWVzJz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBjb25uZWN0aW9uW21hcFtrZXldXTtcblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZScpO1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8zNjAnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RldGFpbCc+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz0nbmFtZSc+TG9yZW0gSXBzdW08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCB0YWdzJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCBrZXkpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIGVudHJ5WzFdKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRhZ3MnLCBlbnRyeVsyXSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb21cIiBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NBcnIgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICBpZihsb2NBcnIubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgIHVybCA9IGxvY0Fyci5zbGljZSgwLCA1KS5qb2luKCcvJykgKyAnLyc7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoICsgKHVybC5lbmRzV2l0aCgnLycpID8gLTEgOiAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdG9yZUlkID0gZW50cnlbMF0ubWF0Y2goL2h0dHBzOlxcL1xcL3N0YWRpYS5nb29nbGUuY29tXFwvc3RvcmVcXC9kZXRhaWxzXFwvKFswLTlhLXovXSspLylbMV07XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCArICcvc3RvcmUvZGV0YWlscy8nICsgc3RvcmVJZCk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbWcnLCAnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tLycgKyBlbnRyeVswXS5tYXRjaCgvKGltYWdlc1xcL3Bvc3RlcnNcXC9bYS16MC05Xy4tXSsucG5nKS9nKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgaW5wdXQgZXZlbnRzIHRvIHRoZSBzZWFyY2ggYmFyLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFN0b3JlRmlsdGVyXG4gICAgICovXG4gICAgYWRkRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2goKHRoaXMuc2VhcmNoRmllbGQgYXMgYW55KS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBnYW1lIGxpc3QgZm9yIGEgc3BlY2lmaWMgc3RyaW5nIGFuZCBzaG93cyB3aGljaGV2ZXIgZ2FtZXMgZml0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAbWVtYmVyb2YgU3RvcmVGaWx0ZXJcbiAgICAgKi9cbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVzLmZvckVhY2goKGdhbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGdhbWUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nLCBxdWVyeS5sZW5ndGggPiAwICYmIG5hbWUuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRoZSBzZWFyY2ggYmFyIG9ubHkgZXhpc3RzIHdoZW4gaXQncyBzdXBwb3NlZCB0byBhbmQgd29ya3MgcHJvcGVybHkgZXZlbiBpZiBhY2NpZGVudGFsbHkgZGVzdHJveWVkLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICBpZihVdGlsLmlzSW5TdG9yZSgpKSB7XG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5uV210TGQnKTtcblxuICAgICAgICAgICAgICAgIGlmKGNvbnRhaW5lciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy1nYW1lcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsPi5uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IGdhbWUucXVlcnlTZWxlY3RvcignLmRldGFpbD4udGFncycpO1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmlubmVySFRNTCA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZ3MnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRmllbGQgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCArICctc2VhcmNoJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWkvVUlDb21wb25lbnQnO1xuaW1wb3J0ICcuL3N0eWxlcy9VSVRhYi5zY3NzJztcbmltcG9ydCAnLi4vdWkvc3R5bGVzL0J1dHRvbi5zY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL0dyaWQuc2Nzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5cbmNvbnN0IGNocm9tZTogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcblxuLyoqXG4gKiBBIHRhYiBhbmQgYnV0dG9uIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXG4gKlxuICogQGV4cG9ydCB0aGUgVUlUYWIgdHlwZS5cbiAqIEBjbGFzcyBVSVRhYlxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIFVJVGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29tcG9uZW50LlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ3VpLXRhYic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFiIGVsZW1lbnQuXG4gICAgICovXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUNvbXBvbmVudF1dIHVzZWQgdG8gZGlzcGxheSB0aGUgdGFiLlxuICAgICAqL1xuICAgIGNvbXBvbmVudDogVUlDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gb3BlbiB0aGUgdGFiLlxuICAgICAqL1xuICAgIGJ1dHRvbjogVUlCdXR0b247XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbW91bnQgb2Ygcm93cywgZWFjaCBjb250YWluaW5nIGNvbnRlbnQuXG4gICAgICovXG4gICAgcm93czogVUlSb3dbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIGZ1biBNT1REIG1lc3NhZ2VzIGFkZGVkIHRvIHRoZSB0YWIuXG4gICAgICovXG4gICAgbW90ZExpc3Q6IHN0cmluZ1tdID0gW1xuICAgICAgICAnPGltZyBzcmM9XCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbW9qaXMvNjM2MjI3ODY0MDc2NzQ2NzcyLnBuZz92PTFcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4OyB3aWR0aDogMjRweFwiPicsXG4gICAgICAgIFwiRG9uJ3QgbG9vayBoZXJlLCBsb29rIGJlbG93IVwiLFxuICAgICAgICAnUmVhbGl0eSBjYW4gYmUgd2hhdGV2ZXIgSSB3YW50LicsXG4gICAgICAgICdJZiB5b3UgYXNrIG5pY2VseSwgU3RhZGlhIG1pZ2h0IGV2ZW4gZG8geW91ciBsYXVuZHJ5IGZvciB5b3UhJyxcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIGFza2luZyBjdXN0b21lciBzdXBwb3J0PycsXG4gICAgICAgICdGb2xsb3cgdS9tYWZyYW5zIG9uIFJlZGRpdCEnLFxuICAgICAgICAnU3RhZGlhKywgbGlrZSBHb29nbGUrIGJ1dCBzdGlsbCBhbGl2ZS4nLFxuICAgICAgICAnU3RhZGlhIGlzIERPQSwgYmVsaWV2ZSBtZS4nLFxuICAgICAgICAnR2V0IGEgbG9hZCBvZiB0aGlzIGd1eSwgdXNpbmcgY2hyb21lIGV4dGVuc2lvbnMgdG8gaW1wcm92ZSBoaXMgU3RhZGlhIGV4cGVyaWVuY2UuJyxcbiAgICAgICAgXCJJJ20gdGVsbGluZyB5b3UsIGRvbid0IHRydXN0IHRoYXQgZ3V5LiBZb3Uga25vdywgdGhlIGd1eS5cIixcbiAgICAgICAgJ1Nob3V0b3V0IHRvIENocmlzIGFuZCBHcmFjZSEnLFxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgU3BsaXRsaW5ncyB5ZXQ/JyxcbiAgICAgICAgJ0Fsd2F5cyBjaGVjayB0aGUgcmF0aW5ncyBiZWZvcmUgeW91IGJ1eSBhIG5ldyBnYW1lLicsXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBHZUZvcmNlIE5vdz8nLFxuICAgICAgICAnQSBob3QgZG9nIGlzIGRlZmluaXRlbHkgbm90IGEgc2FuZHdpY2guJyxcbiAgICAgICAgJ0lkayBhYm91dCB5b3UsIGJ1dCBJIHJlYWxseSB3YW50IG9uZSBvZiB0aG9zZSBmYW5jeSBzbWFydCB0b2lsZXRzLicsXG4gICAgICAgICdDaHJpcyBpcyB0eXBpbmcgZ3V5cyEhJyxcbiAgICAgICAgJ0RvZXMgYW55b25lIGhhdmUgYSBidWRkeSBwYXNzIEkgY291bGQgYm9ycm93PycsXG4gICAgICAgICdJIHBhaWQgJDEzOSBmb3IgdGhpcz8nLFxuICAgICAgICAnSXMgRm9ydG5pdGUgb24gU3RhZGlhIHlldD8nLFxuICAgICAgICAndS9iYWNvbnJ1bGVzIHdhcyB0aGUgZmlyc3QgdG8gc2VlIDRrIScsXG4gICAgICAgICdTbyBkaWQgdGhlIHBlcnNvbiB0aGF0IG1hZGUgdGhlIHN0YWRpYSsgZXh0ZW5zaW9uIGdpdmUgdXAgb24gc3RhZGlhPycsXG4gICAgICAgICdJdFxcJ3MgbGlrZSBHRk4sIGJ1dCB3aXRob3V0IGFueSBwdWxsZWQgZ2FtZXMuJyxcbiAgICAgICAgJ0xvbmcgbGl2ZSBHZWZvcmNlIE5vdysnLFxuICAgICAgICAnU3BlbmQgeW91ciBtb25leSBiZWZvcmUgaXQgcnVucyBvdXQuJyxcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV1cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxuICAgICAgICAgICAgJ1N0YWRpYSsnLFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDxpIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtOyBtYXJnaW4tYm90dG9tOiA1cmVtOyBkaXNwbGF5OiBibG9ja1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3RkTGlzdFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vdGRMaXN0Lmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB0aGlzLmlkLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy9zdGFkaWFwbHVzLnN2ZycpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihpY29uLCBMYW5ndWFnZS5nZXQoJ3VpLXRhYi5idXR0b24tbGFiZWwnKSwgdGhpcy5pZCArICctYnV0dG9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGFsbCByb3dzIHRoYXQgZG9uJ3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbG9hZF1cbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcbiAgICAgKi9cbiAgICBjcmVhdGVSb3dzKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgaWYoIXJvdy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQodGhpcy5jb21wb25lbnQsIGkgPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgcm93LnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbG9hZCBhbGwgcm93c1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgcmVsb2FkUm93cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHJvdy5yZWxvYWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcm93IHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgYWRkUm93KHJvdzogVUlSb3cpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbmQgdW5sb2FkIGFsbCByb3dzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIGNsZWFyUm93cygpOiB2b2lkIHtcbiAgICAgICAgZm9yKGNvbnN0IHJvdyBvZiB0aGlzLnJvd3MpIHtcbiAgICAgICAgICAgIHJvdy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICByb3cuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gT25seSBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGUgbWVudSBpcyBvcGVuIGFscmVhZHkuXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jcmVhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuVGFiKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5jb21wb25lbnQub3Blbikge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY2xvc2VUYWIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Nsb2NrLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRm9yY2VDb2RlYy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlUmVzb2x1dGlvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xpYnJhcnlGaWx0ZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9OZXR3b3JrTW9uaXRvci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JhdGluZ3Muc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdG9yZUZpbHRlci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1VJVGFiLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvR2xvYmFsLnNjc3MnXG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vQ29tcG9uZW50TG9hZGVyJztcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9jb21wb25lbnRzL0Nsb2NrJ1xuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL2NvbXBvbmVudHMvVUlUYWInXG5pbXBvcnQgeyBGb3JjZUNvZGVjIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcmNlQ29kZWMnXG5pbXBvcnQgeyBGb3JjZVJlc29sdXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvRm9yY2VSZXNvbHV0aW9uJ1xuaW1wb3J0IHsgTmV0d29ya01vbml0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvTmV0d29ya01vbml0b3InO1xuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuL3VpL1NuYWNrYmFyJztcbmltcG9ydCB7IExpYnJhcnlGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlcic7XG5pbXBvcnQgeyBXZWJEYXRhYmFzZSB9IGZyb20gJy4vV2ViRGF0YWJhc2UnO1xuaW1wb3J0IHsgU3RvcmVGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RvcmVGaWx0ZXInO1xuaW1wb3J0IHsgUmF0aW5ncyB9IGZyb20gJy4vY29tcG9uZW50cy9SYXRpbmdzJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBBbGxvd1dpbmRvd2VkTW9kZSB9IGZyb20gJy4vY29tcG9uZW50cy9BbGxvd1dpbmRvd2VkTW9kZSc7XG5pbXBvcnQgeyBQYXN0ZUZyb21DbGlwYm9hcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvUGFzdGVGcm9tQ2xpcGJvYXJkJ1xuXG4vLyBBbHdheXMgbG9hZCBsYW5ndWFnZXMgZmlyc3Rcbkxhbmd1YWdlLmluaXQoKTtcbkxhbmd1YWdlLmxvYWQoKTtcblxuY29uc3QgbG9hZGVyID0gbmV3IENvbXBvbmVudExvYWRlcigpO1xuY29uc3Qgc25hY2tiYXIgPSBuZXcgU25hY2tiYXIoKTtcbmNvbnN0IHRhYiA9IG5ldyBVSVRhYigpO1xuXG5jb25zdCBkYXRhYmFzZSA9IG5ldyBXZWJEYXRhYmFzZSgnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tL2RhdGEvZ2FtZWRiLmpzb24nKTtcbmNvbnN0IHV1aWRNYXAgPSBuZXcgV2ViRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL3V1aWRtYXAuanNvbicpO1xuZGF0YWJhc2UuY29ubmVjdCgpO1xudXVpZE1hcC5jb25uZWN0KCk7XG5cbmxvYWRlci5yZWdpc3RlcihuZXcgQ2xvY2soKSk7XG5sb2FkZXIucmVnaXN0ZXIobmV3IExpYnJhcnlGaWx0ZXIoc25hY2tiYXIsIGRhdGFiYXNlLCB1dWlkTWFwKSk7XG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlQ29kZWModGFiLCBzbmFja2JhcikpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBGb3JjZVJlc29sdXRpb24odGFiLCBzbmFja2JhcikpO1xubG9hZGVyLnJlZ2lzdGVyKHRhYik7XG5sb2FkZXIucmVnaXN0ZXIobmV3IE5ldHdvcmtNb25pdG9yKCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBTdG9yZUZpbHRlcihkYXRhYmFzZSwgdXVpZE1hcCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBSYXRpbmdzKGRhdGFiYXNlLCB1dWlkTWFwKSk7XG5sb2FkZXIucmVnaXN0ZXIobmV3IEFsbG93V2luZG93ZWRNb2RlKCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBQYXN0ZUZyb21DbGlwYm9hcmQoKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIFV0aWwubG9hZCgpO1xuICAgIHNuYWNrYmFyLmNyZWF0ZSgpO1xuICAgIGxvYWRlci5zdGFydCgpO1xufSkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dsb2JhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UeXBvZ3JhcGh5LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3gge1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIHNoYXBlOiBzdHJpbmcgPSBDaGVja2JveFNoYXBlLkRFRkFVTFQ7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nID0gQ2hlY2tib3hTdHlsZS5ERUZBVUxUO1xuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZztcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIGljb246IHN0cmluZztcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgYmlnZ2VyOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0U2hhcGUoc2hhcGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBzZXRTdHlsZShzdHlsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc2V0Qm9yZGVyKGJvcmRlcjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJvcmRlciA9IGJvcmRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNldEljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QmlnZ2VyKGJpZ2dlcjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJpZ2dlciA9IGJpZ2dlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvLyBBZGQgbWFpbiBjbGFzc2VzXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJldHR5JywgJ3AtZGVmYXVsdCcpO1xuXG4gICAgICAgIC8vIElmIHN0eWxlIGlzIG5vdCBkZWZhdWx0LCBhZGQgc3R5bGVcbiAgICAgICAgaWYodGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2hhcGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgc3R5bGUgaXMgbm90IGRlZmF1bHQsIGFkZCBzdHlsZVxuICAgICAgICBpZih0aGlzLnN0eWxlKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbmltYXRlZCwgYWRkIGFuaW1hdGlvblxuICAgICAgICBpZih0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBiaWdnZXJcbiAgICAgICAgaWYodGhpcy5iaWdnZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1iaWdnZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBib3JkZXJcbiAgICAgICAgaWYoIXRoaXMuYm9yZGVyKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3AtcGxhaW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBjaGVja2JveCBpbnB1dFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIC8vIEFkZCBzdGF0ZSBkaXZcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCgnc3RhdGUnKTtcblxuICAgICAgICAvLyBJZiBjb2xvcmVkLCBhZGQgY29sb3JcbiAgICAgICAgaWYodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGhhcyBpY29uLCBhZGQgaWNvblxuICAgICAgICBpZih0aGlzLmljb24pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1pY29uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9IHRoaXMuaWNvbjtcblxuICAgICAgICAgICAgc3RhdGUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgbGFiZWxcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0aGlzLmxhYmVsO1xuICAgICAgICBzdGF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtwcmV0dHk6IGVsZW1lbnQsIGNoZWNrYm94fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFNoYXBlIHtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBDVVJWRUQ6IHN0cmluZyA9ICdwLWN1cnZlJztcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EOiBzdHJpbmcgPSAncC1yb3VuZCc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFN0eWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBGSUxMOiBzdHJpbmcgPSAncC1maWxsJztcbiAgICBwdWJsaWMgc3RhdGljIFRISUNLOiBzdHJpbmcgPSAncC10aGljayc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIEJMVUU6IHN0cmluZyA9ICdwLXByaW1hcnknO1xuICAgIHB1YmxpYyBzdGF0aWMgR1JFRU46IHN0cmluZyA9ICdwLXN1Y2Nlc3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgWUVMTE9XOiBzdHJpbmcgPSAncC13YXJuaW5nJztcbiAgICBwdWJsaWMgc3RhdGljIENZQU46IHN0cmluZyA9ICdwLWluZm8nO1xuICAgIHB1YmxpYyBzdGF0aWMgUkVEOiBzdHJpbmcgPSAncC1kYW5nZXInO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hBbmltYXRpb24ge1xuICAgIHB1YmxpYyBzdGF0aWMgU01PT1RIOiBzdHJpbmcgPSAncC1zbW9vdGgnO1xuICAgIHB1YmxpYyBzdGF0aWMgSkVMTFk6IHN0cmluZyA9ICdwLWplbGx5JztcbiAgICBwdWJsaWMgc3RhdGljIFRBREE6IHN0cmluZyA9ICdwLXRhZGEnO1xuICAgIHB1YmxpYyBzdGF0aWMgUk9UQVRFOiBzdHJpbmcgPSAncC1yb3RhdGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgUFVMU0U6IHN0cmluZyA9ICdwLXB1bHNlJztcbn0iLCJpbXBvcnQgU2xpbVNlbGVjdCBmcm9tICdzbGltLXNlbGVjdCc7XG5pbXBvcnQgJ3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzJztcbmltcG9ydCAnLi4vdWkvc3R5bGVzL1NlbGVjdC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdCB7XG4gICAgc2xpbXNlbGVjdDogU2xpbVNlbGVjdDtcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgb3B0aW9uczogU2VsZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIG9wdGlvbnMuc3R5bGUgPSBvcHRpb25zLnN0eWxlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnN0eWxlIDogU2VsZWN0U3R5bGUuREFSSztcbiAgICAgICAgb3B0aW9ucy5vbkNoYW5nZSA9IG9wdGlvbnMub25DaGFuZ2UgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub25DaGFuZ2UgOiAoKSA9PiB7fTtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVDaGFuZ2UgPSBvcHRpb25zLmJlZm9yZUNoYW5nZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5iZWZvcmVDaGFuZ2UgOiAoKSA9PiB7fTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICdzdGFkaWFwbHVzX2Ryb3Bkb3duJyxcbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGVcbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2xpbXNlbGVjdCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIGVsZW1lbnRzL2NvbnRhaW5lcnNcbiAgICAgICAgICogaGF2ZSBiZWVuIGRlbGV0ZWQgd2l0aG91dCBwcm9wZXJseSBiZWluZyBkZXN0cm95ZWQuIEFzIFN0YWRpYVxuICAgICAgICAgKiBydW5zIGluIGEgdmlydHVhbCBET00sIHdlIGhhdmUgbm8gY29udHJvbCBvZiB3aGVuIHRoZSBET00gY2hhbmdlc1xuICAgICAgICAgKiB0aGVyZWZvcmUgd2UgY2FuJ3Qgc29sdmUgaXQgaW4gYSBwcm9wZXIgd2F5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBMZXQncyBqdXN0IGhvcGUgZ2FyYmFnZSBjb2xsZWN0aW9uIHRha2VzIGNhcmUgb2YgaXQuXG4gICAgICAgICAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0ID0gbmV3IFNsaW1TZWxlY3Qoe1xuICAgICAgICAgICAgICAgIHNlbGVjdDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRpb25zLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvcHRpb25zLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIGJlZm9yZU9uQ2hhbmdlOiBvcHRpb25zLmJlZm9yZUNoYW5nZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VsZWN0ZWQoKTtcbiAgICB9XG5cbiAgICBzZXQoLi4uaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIEp1c3QgaW4gY2FzZSBzbGltc2VsZWN0LnNldCBpcyBmYXN0ZXJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXQoaXRlbXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldERhdGEoaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpbXNlbGVjdC5zZWFyY2gocXVlcnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaW1zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3RhZGlhcGx1c19kcm9wZG93bicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdFN0eWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIFNMSU1TRUxFQ1Q6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBTTElNU0VMRUNUX0xBUkdFOiBzdHJpbmcgPSAnc3R5bGUtc2xpbXNlbGVjdC1sYXJnZSc7XG4gICAgcHVibGljIHN0YXRpYyBMSUdIVDogc3RyaW5nID0gJ3N0eWxlLWxpZ2h0JztcbiAgICBwdWJsaWMgc3RhdGljIERBUks6IHN0cmluZyA9ICdzdHlsZS1kYXJrJztcbn1cblxuaW50ZXJmYWNlIFNlbGVjdE9wdGlvbnMge1xuICAgIHBsYWNlaG9sZGVyPzogYW55O1xuICAgIHN0eWxlPzogc3RyaW5nO1xuICAgIG9uQ2hhbmdlPzogKGluZm86IGFueSkgPT4gYW55O1xuICAgIGJlZm9yZUNoYW5nZT86IChpbmZvOiBhbnkpID0+IGFueTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMvU25hY2tiYXIuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBTbmFja2JhciB7XG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBsYWJlbDogRWxlbWVudDtcbiAgICBjbG9zZUJ1dHRvbjogRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyJyk7XG5cbiAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyLWxhYmVsJyk7XG5cbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywgJ3N0YWRpYXBsdXNfc25hY2tiYXItY2xvc2UnKTtcblxuICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xuICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZShsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgNTAwMClcbiAgICB9XG59IiwiaW1wb3J0IHsgVUlCdXR0b25Db250YWluZXIgfSBmcm9tIFwiLi9VSUJ1dHRvbkNvbnRhaW5lclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBodG1sOiBzdHJpbmc7XG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBjb250YWluZXI6IFVJQnV0dG9uQ29udGFpbmVyO1xuICAgIGJ1dHRvbjogRWxlbWVudDtcblxuICAgIHN0YXRpYyBidXR0b25Db250YWluZXJzOiBVSUJ1dHRvbkNvbnRhaW5lcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmh0bWwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHlmbGJiXCIganNuYW1lPVwiclpIRVNkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIktFYUhvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiWDVwZW9lXCIganNuYW1lPVwicFlGaFVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ4ZHVveWYgdWlidXR0b24taWNvblwiIHNyYz1cIiR7aWNvbn1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhU0pWIHVpYnV0dG9uLXRpdGxlXCI+JHt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdQeWYxYmInLCAnc3RhZGlhcGx1c191aS1idXR0b24nKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdDVHZEWGQnLCAnUUFBeVdkJywgJ1BqcGFjJywgJ3pjTVlkJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBmb3IoY29uc3QgY29udGFpbmVyIG9mIFVJQnV0dG9uLmJ1dHRvbkNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lci5idXR0b25zLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFVJQnV0dG9uQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBVSUJ1dHRvbi5idXR0b25Db250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEJ1dHRvbih0aGlzKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzZXRJY29uKGljb246IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpYnV0dG9uLWljb24nKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb24pO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aWJ1dHRvbi10aXRsZScpLmlubmVySFRNTCA9IHRpdGxlO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSAhPT0gbnVsbDtcbiAgICB9IFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVCdXR0b24odGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tIFwiLi9VSUJ1dHRvblwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbkNvbnRhaW5lciB7XG4gICAgYnV0dG9uczogVUlCdXR0b25bXSA9IFtdO1xuICAgIGNvbnRhaW5lcjogRWxlbWVudDtcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGlkOiBzdHJpbmc7XG4gICAgd3JhcHBlcjogRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gJ2J1dHRvbi1jb250YWluZXItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTkpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMud3JhcHBlci5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdaZ1VNbycsICdzdGFkaWFwbHVzX3VpLWJ0bi13cmFwcGVyJyk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdFMFprOWInLCAnc3RhZGlhcGx1c191aS1idG4tY29udGFpbmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpICE9PSBudWxsO1xuICAgIH1cblxuICAgIGNyZWF0ZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpOyAvLyBSZXF1ZXJ5IGluIGNhc2UgdGhlIGNvbnRhaW5lciB3YXMgZGVsZXRlZFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmKCFidXR0b24uZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZihjYWxsYmFjaylcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5idXR0b25zLmluZGV4T2YoYnV0dG9uKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pIHtcbiAgICAgICAgdGhpcy5idXR0b25zID0gdGhpcy5idXR0b25zLmZpbHRlcihiID0+IGIuaWQgIT09IGJ1dHRvbi5pZCk7XG4gICAgfVxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGh0bWw6IHN0cmluZztcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIG9wZW46IGJvb2xlYW47XG4gICAgb3Blbkxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcbiAgICBjbG9zZUxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuaHRtbCA9IGBcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJrdlQ3Y1wiIGpzYWN0aW9uPVwiY2xpY2s6YTRmVXdkXCIganNuYW1lPVwiR2VHSEtiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiRFB2d1ljIHRScWMzY1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmFycm93X2JhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJRM3d5eWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkN3Q3hGZFwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgJHtjb250ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3VpLWNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5Zi5maThKeGQnKTtcbiAgICAgICAgaWYoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFJlUXVlcnkgZWxlbWVudCBzaW5jZSBvdXRlckhUTUwgYnJlYWtzIGl0LlxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcblxuICAgICAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAjJHt0aGlzLmlkfSA+IGhlYWRlciA+IC5ya3ZUN2NgLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VUYWIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlblRhYigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcnMuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuXG4gICAgY2xvc2VUYWIoKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5pbmZvKCdDbG9zaW5nJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lcnMuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuXG4gICAgb25PcGVuKGNhbGxiYWNrPzooKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXG4gICAgfVxuXG4gICAgb25DbG9zZShjYWxsYmFjaz86KCkgPT4gdm9pZCkge1xuICAgICAgICBpZihjYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lcnMucHVzaChjYWxsYmFjaylcbiAgICB9XG59IiwiaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tIFwiLi9VSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgVUlSb3cge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgb3B0aW9uczogVUlSb3dPcHRpb25zO1xuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBVSVJvd09wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8cD4ke3RoaXMudGl0bGV9PC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuY29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c191aS1yb3cnKTtcbiAgICB9XG5cbiAgICBleGlzdHMoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25SZWxvYWQodGhpcyk7XG4gICAgfVxuXG4gICAgYXBwZW5kKGNvbXBvbmVudDogVUlDb21wb25lbnQsIHVzZUhyOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYodXNlSHIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5lbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVUlSb3dPcHRpb25zIHtcbiAgICBvbkNyZWF0ZT86IEZ1bmN0aW9uO1xuICAgIG9uRGVzdHJveT86IEZ1bmN0aW9uO1xuICAgIG9uUmVsb2FkPzogRnVuY3Rpb247XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9CdXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TbmFja2Jhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9