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
exports.push([module.i, ".stadiaplus_libraryfilter-wrapper {\n  opacity: 1;\n  transform: scale(1);\n  transition: transform 0.5s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.5s cubic-bezier(0.75, 0, 0.25, 1);\n}\n.stadiaplus_libraryfilter-wrapper.closing {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper.closed {\n  display: none;\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper .stadiaplus_libraryfilter-icon-wrapper {\n  position: absolute;\n  display: inline-block;\n  z-index: 4;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 32px;\n  background-color: #393a3c;\n  transition: transform 0.23s cubic-bezier(0.35, 0, 0.15, 1);\n}\n.stadiaplus_libraryfilter-wrapper .stadiaplus_libraryfilter-icon {\n  font-family: \"Material Icons Extended\";\n  font-size: 32px;\n  z-index: 4;\n  padding: 16px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon-wrapper {\n  transform: scale(1.015);\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon-wrapper:hover {\n  transform: scale(1);\n}\n\n.stadiaplus_libraryfilter-bar {\n  background-color: #303236;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_dropdown {\n  display: block;\n  padding: 0.5rem;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-checkbox {\n  margin-left: auto;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction {\n  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);\n  border-radius: 50%;\n  padding: 2px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction::after {\n  content: \"arrow_drop_down\";\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.ascending {\n  transform: rotate(0deg);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.descending {\n  transform: rotate(180deg);\n}", ""]);
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
exports.push([module.i, ".stadiaplus_networkmonitor {\n  position: absolute;\n  width: 300px;\n  top: 0;\n  left: 0;\n  z-index: 150;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.stadiaplus_networkmonitor * {\n  user-select: none;\n}\n.stadiaplus_networkmonitor ul {\n  list-style-type: none;\n  padding-inline-start: 0;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n.stadiaplus_networkmonitor.editable {\n  z-index: 300;\n  cursor: move;\n}\n\n.stadiaplus_networkmonitor-tab ul {\n  list-style-type: none;\n  padding-inline-start: 1rem;\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\n.stadiaplus_networkmonitor-checkbox {\n  margin: 0.4rem 0;\n}", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Modal.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Modal.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_modal {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n  opacity: 0;\n}\n.stadiaplus_modal .stadiaplus_modal-wrapper {\n  position: fixed;\n  max-width: 33.333%;\n  min-width: 20%;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background: #303236;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n  transition: transform 0.2s ease;\n}\n.stadiaplus_modal .stadiaplus_modal-close {\n  float: right;\n  padding: 8px;\n  border-radius: 50%;\n  color: white;\n  font-size: 24px;\n}\n.stadiaplus_modal .stadiaplus_modal-close:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n}\n.stadiaplus_modal.active {\n  opacity: 1;\n  pointer-events: initial;\n}\n.stadiaplus_modal.active .stadiaplus_modal-wrapper {\n  transform: translate(-50%, -50%) scale(1);\n}", ""]);
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
/* harmony default export */ __webpack_exports__["default"] = ("const MonitorRunnable = function () {\r\n    this.enabled = false;\r\n    this.peerConnections = [];\r\n    this.originalRTC;\r\n    this.startTime;\r\n    this.element;\r\n    this.editable = false;\r\n    this.x = 0;\r\n    this.y = 0;\r\n\r\n    const self = this;\r\n    this.originalRTC = RTCPeerConnection;\r\n    (function (OriginalRTCConnection) {\r\n        self.originalRTC = OriginalRTCConnection;\r\n\r\n        RTCPeerConnection = function (args) {\r\n            const connection = new OriginalRTCConnection(args);\r\n            self.peerConnections.push(connection);\r\n            return connection;\r\n        };\r\n        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;\r\n    })(RTCPeerConnection);\r\n\r\n    this.start = function () {\r\n        this.enabled = true;\r\n        this.element = document.createElement('div');\r\n        this.element.classList.add('stadiaplus_networkmonitor');\r\n        this.element.id =\r\n            'networkmonitor-' + Math.floor(Math.random() * 999999);\r\n        document.body.appendChild(this.element);\r\n\r\n        this.startTime = Date.now();\r\n\r\n        this.setEditable(true);\r\n        this.updatePosition();\r\n        this.update();\r\n    };\r\n\r\n    this.setPosition = function (x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.updatePosition();\r\n    };\r\n\r\n    this.updatePosition = function () {\r\n        this.element.style.left = this.x + 'px';\r\n        this.element.style.top = this.y + 'px';\r\n\r\n        const corners = {\r\n            tl: 10,\r\n            tr: 10,\r\n            bl: 10,\r\n            br: 10,\r\n        };\r\n\r\n        if (this.x < 10) {\r\n            corners.tl = 0;\r\n            corners.bl = 0;\r\n        }\r\n\r\n        if (this.y < 10) {\r\n            corners.tl = 0;\r\n            corners.tr = 0;\r\n        }\r\n\r\n        if (this.x > window.innerWidth - this.element.clientWidth - 10) {\r\n            corners.tr = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        if (this.y > window.innerHeight - this.element.clientHeight - 10) {\r\n            corners.bl = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        this.element.style[\r\n            'border-radius'\r\n        ] = `${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px`;\r\n    };\r\n\r\n    this.mouseEvents = [];\r\n    this.moving = false;\r\n    this.offset = { x: 0, y: 0 };\r\n    this.setEditable = function (editable) {\r\n        this.editable = editable;\r\n        this.element.classList.toggle('editable', editable);\r\n\r\n        if (editable) {\r\n            this.mouseEvents.push(\r\n                {\r\n                    target: document,\r\n                    type: 'mousemove',\r\n                    fn: (event) => {\r\n                        if (this.moving) {\r\n                            this.x = Math.max(\r\n                                0, // Minimum x value\r\n                                Math.min(\r\n                                    window.innerWidth -\r\n                                        this.element.clientWidth, // Maximum x value\r\n                                    event.clientX - this.offset.x,\r\n                                ),\r\n                            );\r\n                            this.y = Math.max(\r\n                                0, // Minimum y value\r\n                                Math.min(\r\n                                    window.innerHeight -\r\n                                        this.element.clientHeight, // Maximum y value\r\n                                    event.clientY - this.offset.y,\r\n                                ),\r\n                            );\r\n\r\n                            this.updatePosition();\r\n                        }\r\n                    },\r\n                },\r\n                {\r\n                    target: this.element,\r\n                    type: 'mousedown',\r\n                    fn: (event) => {\r\n                        this.moving = true;\r\n                        this.offset.x = event.clientX - this.x;\r\n                        this.offset.y = event.clientY - this.y;\r\n                    },\r\n                },\r\n                {\r\n                    target: document,\r\n                    type: 'mouseup',\r\n                    fn: (event) => {\r\n                        this.moving = false;\r\n                    },\r\n                },\r\n            );\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.addEventListener(event.type, event.fn),\r\n            );\r\n        } else {\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.removeEventListener(event.type, event.fn),\r\n            );\r\n        }\r\n    };\r\n\r\n    this.setVisible = function (visible) {\r\n        visible.forEach(e => this.visible[e.id] = e);\r\n    };\r\n\r\n    this.stop = function () {\r\n        this.enabled = false;\r\n        this.setEditable(false);\r\n        this.element.remove();\r\n\r\n        RTCPeerConnection = this.originalRTC;\r\n        peerConnections = [];\r\n    };\r\n\r\n    this.visible = {};\r\n\r\n    this.stats = [];\r\n    this.update = function () {\r\n        if (this.peerConnections.length > 1) {\r\n            const index = this.peerConnections.length - 1;\r\n\r\n            this.peerConnections[index].getStats().then((_stats) => {\r\n                this.stats = Array.from(_stats);\r\n\r\n                const RTCInboundRTPVideoStream = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCInboundRTPVideoStream'),\r\n                );\r\n                const RTCIceCandidatePair = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCIceCandidatePair'),\r\n                );\r\n                const RTCMediaStreamTrack_receiver = this.getStat(\r\n                    (stat) =>\r\n                        stat[0].startsWith('RTCMediaStreamTrack_receiver') &&\r\n                        stat[1].kind === 'video',\r\n                );\r\n\r\n                const resolution = this.getResolution(\r\n                    RTCMediaStreamTrack_receiver,\r\n                );\r\n                const fps = this.getFPS(RTCInboundRTPVideoStream);\r\n                const latency = this.getLatency(RTCIceCandidatePair) + ' ms';\r\n                const codec = this.getCodec(RTCInboundRTPVideoStream);\r\n                const totalTraffic = this.translateByteUnits(\r\n                    this.getTotalDownload(RTCIceCandidatePair),\r\n                );\r\n                const currentTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const averageTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getAverageDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const packetsLost = this.getPacketsLost(\r\n                    RTCInboundRTPVideoStream,\r\n                );\r\n                const averagePacketLoss =\r\n                    this.getAveragePacketLoss(RTCInboundRTPVideoStream) + '%';\r\n                const jitterBuffer =\r\n                    this.getJitterBuffer(RTCMediaStreamTrack_receiver) + ' ms';\r\n\r\n                let html = '';\r\n                if (this.visible['time'].enabled) {\r\n                    let time = new Date();\r\n                    let timeString = time.toLocaleString();\r\n                    html += `<h5>${timeString}</h5>`;\r\n                }\r\n\r\n                html += '<ul>';\r\n                if (this.visible['resolution'].enabled) {\r\n                    html += `<li>${this.visible['resolution'].name}: ${resolution.width}x${resolution.height}</li>`;\r\n                }\r\n\r\n                if (this.visible['fps'].enabled) {\r\n                    html += `<li>${this.visible['fps'].name}: ${fps}</li>`;\r\n                }\r\n\r\n                if (this.visible['latency'].enabled) {\r\n                    html += `<li>${this.visible['latency'].name}: ${latency}</li>`;\r\n                }\r\n\r\n                if (this.visible['codec'].enabled) {\r\n                    html += `<li>${this.visible['codec'].name}: ${codec}</li>`;\r\n                }\r\n\r\n                if (this.visible['traffic'].enabled) {\r\n                    html += `<li>${this.visible['traffic'].name}: ${totalTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['current-traffic'].enabled) {\r\n                    html += `<li>${this.visible['current-traffic'].name}: ${currentTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-traffic'].enabled) {\r\n                    html += `<li>${this.visible['average-traffic'].name}: ${averageTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['packets-lost'].enabled) {\r\n                    html += `<li>${this.visible['packets-lost'].name}: ${packetsLost}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-packet-loss'].enabled) {\r\n                    html += `<li>${this.visible['average-packet-loss'].name}: ${averagePacketLoss}</li>`;\r\n                }\r\n\r\n                if (this.visible['jitter-buffer'].enabled) {\r\n                    html += `<li>${this.visible['jitter-buffer'].name}: ${jitterBuffer}</li>`;\r\n                }\r\n\r\n                html += '</ul>';\r\n\r\n                this.element.innerHTML = html;\r\n            });\r\n        } else {\r\n            this.startTime = Date.now();\r\n            this.element.innerHTML = `\r\n                <h5>Error</h5>\r\n                <p>\r\n                    Uh oh, something went terribly wrong. \r\n                    This feature is still very unstable and \r\n                    the developer knows there are problems, \r\n                    please understand that this issue is \r\n                    actively being worked on.\r\n                </p>\r\n                <p class='stadiaplus_muted'>Error Code: 001 - Stats unavailable</p>\r\n            `;\r\n        }\r\n\r\n        if (this.enabled) {\r\n            setTimeout(() => {\r\n                this.update();\r\n            }, 1000);\r\n        }\r\n    };\r\n\r\n    this.getStat = function (filter) {\r\n        return this.stats.find(filter)[1];\r\n    };\r\n\r\n    this.translateBitUnits = function (value) {\r\n        const units = ['bit', 'kbit', 'Mbit', 'Gbit'];\r\n\r\n        let i = 0;\r\n        while (value / 1000 >= 1) {\r\n            i++;\r\n            value /= 1000;\r\n        }\r\n\r\n        return (\r\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\r\n        );\r\n    };\r\n\r\n    this.translateByteUnits = function (value) {\r\n        const units = ['B', 'kB', 'MB', 'GB'];\r\n\r\n        let i = 0;\r\n        while (value / 1000 >= 1) {\r\n            i++;\r\n            value /= 1000;\r\n        }\r\n\r\n        return (\r\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\r\n        );\r\n    };\r\n\r\n    this.getLatency = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.currentRoundTripTime * 1000;\r\n    };\r\n\r\n    this.getJitterBuffer = function (RTCMediaStreamTrack_receiver) {\r\n        return (\r\n            (RTCMediaStreamTrack_receiver.jitterBufferDelay * 1000) /\r\n            RTCMediaStreamTrack_receiver.jitterBufferEmittedCount\r\n        ).toPrecision(4);\r\n    };\r\n\r\n    this.getPacketsLost = function (RTCInboundRTPVideoStream) {\r\n        return RTCInboundRTPVideoStream.packetsLost;\r\n    };\r\n\r\n    this.getAveragePacketLoss = function (RTCInboundRTPVideoStream) {\r\n        return (\r\n            (RTCInboundRTPVideoStream.packetsLost /\r\n                (RTCInboundRTPVideoStream.packetsReceived +\r\n                    RTCInboundRTPVideoStream.packetsLost)) *\r\n            100\r\n        ).toPrecision(2);\r\n    };\r\n\r\n    this.lastDownload = 0;\r\n    this.getDownloadSpeed = function (RTCIceCandidatePair) {\r\n        const download = this.getTotalDownload(RTCIceCandidatePair);\r\n        const speed = download - this.lastDownload;\r\n        this.lastDownload = download;\r\n        return speed * 8;\r\n    };\r\n\r\n    this.getAverageDownloadSpeed = function (RTCIceCandidatePair) {\r\n        return (\r\n            this.getTotalDownload(RTCIceCandidatePair) * 8 /\r\n            (this.timeSinceStart() / 1000)\r\n        );\r\n    };\r\n\r\n    this.getTotalDownload = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.bytesReceived;\r\n    };\r\n\r\n    this.getResolution = function (RTCMediaStreamTrack_receiver) {\r\n        return {\r\n            width: RTCMediaStreamTrack_receiver.frameWidth,\r\n            height: RTCMediaStreamTrack_receiver.frameHeight,\r\n        };\r\n    };\r\n\r\n    this.getCodec = function (RTCInboundRTPVideoStream) {\r\n        const codecStat = this.getStat(\r\n            (stat) => stat[0] === RTCInboundRTPVideoStream.codecId,\r\n        );\r\n        return codecStat.mimeType.substring('video/'.length);\r\n    };\r\n\r\n    this.lastFrames = 0;\r\n    this.getFPS = function (RTCInboundRTPVideoStream) {\r\n        const fps = RTCInboundRTPVideoStream.framesDecoded - this.lastFrames;\r\n        this.lastFrames = RTCInboundRTPVideoStream.framesDecoded;\r\n        return fps;\r\n    };\r\n\r\n    this.timeSinceStart = function () {\r\n        return Date.now() - this.startTime;\r\n    };\r\n};\r\n\r\nStadiaPlusMonitor = new MonitorRunnable();\r\n");

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

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
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
        var keys = name.split(/\./g);
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

/***/ "./src/Shortcut.ts":
/*!*************************!*\
  !*** ./src/Shortcut.ts ***!
  \*************************/
/*! exports provided: Shortcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shortcut", function() { return Shortcut; });
/* harmony import */ var _util_downloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/downloader */ "./src/util/downloader.js");

var Shortcut = /** @class */ (function () {
    function Shortcut(url, name) {
        this.url = url;
        this.name = name;
    }
    Shortcut.prototype.save = function () {
        _util_downloader__WEBPACK_IMPORTED_MODULE_0__["default"].download("<html><body><script>window.location=\"" + this.url + "\"</script></body></html>", this.name + ".htm", "text/html");
    };
    return Shortcut;
}());



/***/ }),

/***/ "./src/Storage.ts":
/*!************************!*\
  !*** ./src/Storage.ts ***!
  \************************/
/*! exports provided: LocalStorage, SyncStorage, StorageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncStorage", function() { return SyncStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageManager", function() { return StorageManager; });
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
        chrome.storage.local.set(storages, callback);
    };
    LocalStorage.clear = function () {
        chrome.storage.local.clear();
    };
    LocalStorage.CODEC = new LocalStorage('Codec', 'codec');
    LocalStorage.RESOLUTION = new LocalStorage('Resolution', 'resolution');
    LocalStorage.MONITOR_STATS = new LocalStorage('Monitor Stats', 'monitor-stats');
    LocalStorage.CACHE_VERSION = new LocalStorage('Cache Version', 'cache-version');
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

var StorageManager = /** @class */ (function () {
    function StorageManager(appdata) {
        this.appdata = appdata;
    }
    StorageManager.prototype.checkCacheVersion = function (callback) {
        var _this = this;
        LocalStorage.CACHE_VERSION.get(function (result) {
            var cacheVersion = result[LocalStorage.CACHE_VERSION.tag];
            if (cacheVersion === undefined || _this.appdata['cache-version'] > cacheVersion) {
                _this.appdata['clear-keys'].local.forEach(function (key) {
                    var _a;
                    LocalStorage.set((_a = {}, _a[key] = null, _a));
                });
                _this.appdata['clear-keys'].sync.forEach(function (key) {
                    var _a;
                    SyncStorage.set((_a = {}, _a[key] = null, _a));
                });
            }
            LocalStorage.CACHE_VERSION.set(_this.appdata['cache-version']);
        });
    };
    return StorageManager;
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

/***/ "./src/appdata.json":
/*!**************************!*\
  !*** ./src/appdata.json ***!
  \**************************/
/*! exports provided: cache-version, clear-keys, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cache-version\":0.1,\"clear-keys\":{\"local\":[\"monitor-stats\"],\"sync\":[]}}");

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
        else if (this.exists()) {
            this.button.destroy();
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
                script.innerHTML = "\n                localStorage.setItem(\"video_codec_implementation_by_codec_key\", '{\"vp9\":\"libvpx\"}');\n            ";
                break;
            case Codec.H264:
                script.innerHTML = "\n                localStorage.setItem(\"video_codec_implementation_by_codec_key\", '{\"vp9\":\"libvpx\",\"h264\":\"FFmpeg\"}');\n            ";
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
/* harmony import */ var _Shortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Shortcut */ "./src/Shortcut.ts");
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/styles/Button.scss */ "./src/ui/styles/Button.scss");
/* harmony import */ var _ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Button_scss__WEBPACK_IMPORTED_MODULE_9__);
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
    function LibraryFilter(snackbar, database, uuidMap, modal) {
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
        _this.modal = modal;
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
        var iconWrapper = document.createElement('div');
        iconWrapper.classList.add('stadiaplus_libraryfilter-icon-wrapper');
        // Create the visibility icon
        var visibility = document.createElement('div');
        visibility.classList.add('stadiaplus_libraryfilter-icon');
        visibility.innerHTML = 'visibility';
        // Create the visibility icon
        var shortcut = document.createElement('div');
        shortcut.classList.add('stadiaplus_libraryfilter-icon');
        shortcut.innerHTML = 'add_to_queue';
        // Wrap the wrapper around the element and add the icon before it
        element.parentNode.insertBefore(wrapper, element);
        iconWrapper.appendChild(visibility);
        iconWrapper.appendChild(shortcut);
        wrapper.appendChild(iconWrapper);
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
        iconWrapper.style.marginLeft = element.clientWidth - visibility.clientWidth + 'px';
        iconWrapper.style.transformOrigin = "calc(100% - " + element.clientWidth /
            2 + "px) " + element.clientHeight / 2 + "px";
        // When the icon is clicked on
        visibility.addEventListener('click', function () {
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
        shortcut.addEventListener('click', function () {
            var short = new _Shortcut__WEBPACK_IMPORTED_MODULE_8__["Shortcut"]('https://stadia.google.com/player/' + uuid, entry[1]);
            _this.modal.activate("\n                <h4>Create a Desktop Shortcut</h4>\n                <p>Press the button below to create a desktop shortcut for " + entry[1] + ".</p>\n                <div class=\"CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button\" id=\"shortcut-button\">Save Shortcut</div>\n            ");
            _this.modal.element.querySelector('#shortcut-button').addEventListener('click', function () {
                short.save();
            });
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
            _this.reveseSortDirection();
            event.stopPropagation();
        });
    };
    LibraryFilter.prototype.reveseSortDirection = function () {
        var element = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        if (element) {
            if (this.direction === OrderDirection.ASCENDING) {
                this.direction = OrderDirection.DESCENDING;
            }
            else {
                this.direction = OrderDirection.ASCENDING;
            }
        }
        this.updateSortDirection();
    };
    LibraryFilter.prototype.updateSortDirection = function () {
        var element = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        if (element) {
            element.classList.toggle('descending', this.direction === OrderDirection.DESCENDING);
            element.classList.toggle('ascending', this.direction === OrderDirection.ASCENDING);
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
        _this.visible = [];
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
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"](_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.name'), "\n            <div class='CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button stadiaplus_networkmonitor-toggle-button' id='" + this.id + "-togglebutton'>" + _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.show') + "</div>\n            <hr>\n            <h6>" + _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.heading-visible') + "</h6>\n            <ul id='" + this.id + "-visiblelist'></ul>\n            ", this.id);
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
        this.visible = [
            {
                id: 'time',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.time'),
            },
            {
                id: 'resolution',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.resolution'),
            },
            {
                id: 'fps',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.fps'),
            },
            {
                id: 'latency',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.latency'),
            },
            {
                id: 'codec',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.codec'),
            },
            {
                id: 'traffic',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.traffic'),
            },
            {
                id: 'current-traffic',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.current-traffic'),
            },
            {
                id: 'average-traffic',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.average-traffic'),
            },
            {
                id: 'packets-lost',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.packets-lost'),
            },
            {
                id: 'average-packet-loss',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.average-packet-loss'),
            },
            {
                id: 'jitter-buffer',
                enabled: true,
                name: _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.stats.jitter-buffer'),
            },
        ];
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
                var _loop_1 = function (i) {
                    var stat = this_1.visible[i];
                    var item = document.createElement('li');
                    var _a = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"](stat.name).setBigger(true).setAnimation(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxAnimation"].SMOOTH).build(), pretty = _a.pretty, checkbox = _a.checkbox;
                    pretty.classList.add('stadiaplus_networkmonitor-checkbox');
                    item.appendChild(pretty);
                    list.appendChild(item);
                    checkbox.checked = stat.enabled;
                    checkbox.addEventListener('click', (function () {
                        _this.visible[i].enabled = checkbox.checked;
                        _this.updateVisible();
                        _this.setStorage();
                    }).bind(this_1));
                };
                var this_1 = this;
                for (var i = 0; i < this.visible.length; i++) {
                    _loop_1(i);
                }
                var toggleButton_1 = document.getElementById(this.id + '-togglebutton');
                toggleButton_1.classList.toggle('shown', this.monitorOpen);
                toggleButton_1.addEventListener('click', function () {
                    if (!_this.monitorOpen) {
                        _this.openMonitor();
                        toggleButton_1.innerHTML = _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.hide');
                    }
                    else {
                        _this.closeMonitor();
                        toggleButton_1.innerHTML = _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.hide');
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
        else if (this.exists()) {
            this.button.destroy();
            this.component.element.remove();
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
                    this.target.removeEventListener('keydown', this.keydownEventListener);
                }
                this.target = input;
                this.target.addEventListener('keydown', this.keydownEventListener);
            }
        }
    };
    /**
     *  @param event
     */
    PasteFromClipboard.prototype.keydownEventListener = function (event) {
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
            });
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
            'When does Stadia 2 come out?',
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
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
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
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Storage */ "./src/Storage.ts");
/* harmony import */ var _appdata_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./appdata.json */ "./src/appdata.json");
var _appdata_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./appdata.json */ "./src/appdata.json", 1);
/* harmony import */ var _ui_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/Modal */ "./src/ui/Modal.ts");
/* harmony import */ var _Shortcut__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Shortcut */ "./src/Shortcut.ts");























// Always load languages first
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].init();
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].load();

const storageManager = new _Storage__WEBPACK_IMPORTED_MODULE_17__["StorageManager"](_appdata_json__WEBPACK_IMPORTED_MODULE_18__);
storageManager.checkCacheVersion();

const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoader"]();
const snackbar = new _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__["Snackbar"]();
const modal = new _ui_Modal__WEBPACK_IMPORTED_MODULE_19__["Modal"]();
const tab = new _components_UITab__WEBPACK_IMPORTED_MODULE_5__["UITab"]();

const database = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect();

loader.register(new _components_Clock__WEBPACK_IMPORTED_MODULE_4__["Clock"]());
loader.register(new _components_LibraryFilter__WEBPACK_IMPORTED_MODULE_10__["LibraryFilter"](snackbar, database, uuidMap, modal));
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
    modal.create();
    loader.start();
})

/***/ }),

/***/ "./src/lang/de-DE.json":
/*!*****************************!*\
  !*** ./src/lang/de-DE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Komponente {{name}} wurde aktiviert.\",\"disabled\":\"Komponente {{name}} wurde deaktiviert.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Uhr\"},\"force-codec\":{\"name\":\"Codec erzwingen\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Auflösung erzwingen\",\"note\":\"Anmerkung: Die gewählte Auflösung ist die Maximale, die Stadia verweden wird. Falls Ihr Computer diese Auflösung nicht darstellen kann oder nicht genug Bandbreite zu Verfügung steht, wird eine kleinere Auflösung verwendet.\"},\"library-filter\":{\"name\":\"Sammlungsfilter\",\"recent\":\"Neuste\",\"alphabetical\":\"Alphabetisch\",\"random\":\"Zufällig\",\"show-hidden\":\"Zeige Versteckte\"},\"network-monitor\":{\"name\":\"Netwerkmonitor\",\"heading-visible\":\"Sichtbare Statistiken\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Einfügen aus der Zwischenablage\"},\"ratings\":{\"name\":\"Bewertungen\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Seite neu laden um die Änderung anzuzeigen.\",\"hide-game\":\"Ein Spiel wurde versteckt.\",\"show-game\":\"Ein Spiel ist nicht mehr versteckt.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Anwenden\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/en-US.json":
/*!*****************************!*\
  !*** ./src/lang/en-US.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Component {{name}} has been enabled.\",\"disabled\":\"Component {{name}} has been disabled.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Clock\"},\"force-codec\":{\"name\":\"Force Codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Force Resolution\",\"note\":\"Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.\"},\"library-filter\":{\"name\":\"Library Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alphabetical\",\"random\":\"Random\",\"show-hidden\":\"Show Hidden\"},\"network-monitor\":{\"name\":\"Network Monitor\",\"heading-visible\":\"Visible Stats\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Paste from Clipboard\"},\"ratings\":{\"name\":\"Ratings\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Reload the page to see your changes.\",\"hide-game\":\"A game has been hidden.\",\"show-game\":\"A game is no longer hidden.\"},\"automatic\":\"Automatic\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/es-ES.json":
/*!*****************************!*\
  !*** ./src/lang/es-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"El componente {{name}}  ha sido habilitado.\",\"disabled\":\"El componente {{name}} ha sido deshabilitado.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Reloj\"},\"force-codec\":{\"name\":\"Fuerza Códec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Fuerza Resolución\",\"note\":\"Nota: el valor establecido es la resolución máxima que Stadia intentará lograr. Si su computadora no es capaz de procesar la resolución o no está disponible con la opción de uso de datos actual, no se mostrará.\"},\"library-filter\":{\"name\":\"Filtro Biblioteca\",\"recent\":\"Reciente\",\"alphabetical\":\"Alfabético\",\"random\":\"Aleatorio\",\"show-hidden\":\"Mostrar oculto\"},\"network-monitor\":{\"name\":\"Monitor de red\",\"heading-visible\":\"Estadísticas visibles\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Pegar desde el portapapeles\"},\"ratings\":{\"name\":\"Calificaciones\",\"source-name\":\"Metacrítico\"},\"store-filter\":{\"name\":\"Filtro de tienda\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Vuelva a cargar la página para ver sus cambios.\",\"hide-game\":\"Un juego ha sido escondido.\",\"show-game\":\"Un juego ya no está oculto.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/eu-ES.json":
/*!*****************************!*\
  !*** ./src/lang/eu-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Egilea: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Luzapena prest dago. Ireki Stadia eta hasi jolasten! Egurra! 🎮\",\"launch-button\":\"Ireki Stadia\",\"help-button\":\"Laguntza & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Ezarpenak\",\"language\":\"Hizkuntza\",\"components\":\"Osagarriak\",\"edit-components\":\"Editatu osagarriak\"},\"developer-page\":{\"title\":\"Aurreratuak\",\"clear-cache-button\":\"Cachea ezabatu\",\"storage\":\"Biltegia\"},\"component-page\":{\"title\":\"Osagarriak\"}},\"component\":{\"enabled\":\"{{name}} gaitu egin da.\",\"disabled\":\"{{name}} desgaitu egin da.\"},\"allow-windowed-mode\":{\"name\":\"Onartu lehio-modua\",\"button-label\":{\"windowed\":\"Lehioan\",\"fullscreen\":\"Pantaila osoa\"}},\"clock\":{\"name\":\"Erlojua\"},\"force-codec\":{\"name\":\"Behartu codec\",\"4k-tooltip\":\"Codec hori ezin da gaitu 4K aukerarekin\"},\"force-resolution\":{\"name\":\"Behartu bereizmena\",\"note\":\"Oharra: jarritako balioa izango da Stadia ezartzen saiatuko den handiena. Zure ordenagailuak ezin badu bereizmen hori exekutatu  edota ez badator bat Stadiaren zure data-ezarpenekin ezin izango da gauzatu..\"},\"library-filter\":{\"name\":\"Bildumaren iragazkia\",\"recent\":\"Arestikoak\",\"alphabetical\":\"Alfabetikoa\",\"random\":\"Aliritzira\",\"show-hidden\":\"Erakutsi izkutatutakoak\"},\"network-monitor\":{\"name\":\"Sare-monitorea\",\"heading-visible\":\"Ikusteko estatistikak\",\"button-label\":\"Monitorea\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Itsatsi arbelean\"},\"ratings\":{\"name\":\"Balorazioak\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Denda-iragazkia\"},\"ui-tab\":{\"name\":\"Stadia+ UI Fitxa\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Orria birkargatu ezarritako aldaketak abiarazteko.\",\"hide-game\":\"Joku bat izkutatu egin da.\",\"show-game\":\"Joku bat jada ikusgai dago.\"},\"automatic\":\"Automatikoa\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Ezarri\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/fr-FR.json":
/*!*****************************!*\
  !*** ./src/lang/fr-FR.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Développé par {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'extension est prête. Lancez Stadia et commencez à jouer! 🎮\",\"launch-button\":\"Lancer Stadia\",\"help-button\":\"Aide & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Paramètres\",\"language\":\"Langue\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Développeur\",\"clear-cache-button\":\"Vider le cache\",\"storage\":\"Stockage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Le composant {{name}} a été activé.\",\"disabled\":\"Le composant {{name}} a été désactivé.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Horloge\"},\"force-codec\":{\"name\":\"Forcer le codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Forcer la résolution\",\"note\":\"Remarque: la valeur définie est la résolution maximale que Stadia tentera d'atteindre. Si votre ordinateur ne peut pas afficher cette résolution ou que l'option de consommation des données ne le permet pas, elle ne sera pas utilisée.\"},\"library-filter\":{\"name\":\"Filtre de la bibliothèque\",\"recent\":\"Récent\",\"alphabetical\":\"Alphabétique\",\"random\":\"Aléatoire\",\"show-hidden\":\"Montrer caché(s)\"},\"network-monitor\":{\"name\":\"Moniteur réseau\",\"heading-visible\":\"Statistiques visibles\",\"button-label\":\"Moniteur\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Coller depuis le presse-papiers\"},\"ratings\":{\"name\":\"Évaluations\",\"source-name\":\"Métacritique\"},\"store-filter\":{\"name\":\"Filtre du magasin\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Rechargez la page pour voir vos modifications.\",\"hide-game\":\"Un jeu a été caché.\",\"show-game\":\"Un jeu n'est plus caché.\"},\"automatic\":\"Automatique\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Appliquer\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/gl-ES.json":
/*!*****************************!*\
  !*** ./src/lang/gl-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Creado por {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"A extensión está lista. Inicia Stadia e lume! 🎮\",\"launch-button\":\"Inicia Stadia\",\"help-button\":\"Axuda & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Configuración\",\"language\":\"Idioma\",\"components\":\"Compoñentes\",\"edit-components\":\"Edita os compoñentes\"},\"developer-page\":{\"title\":\"Avanzadas\",\"clear-cache-button\":\"Limpa a caché\",\"storage\":\"Almacenamento\"},\"component-page\":{\"title\":\"Compoñentes\"}},\"component\":{\"enabled\":\"Activouse {{name}}.\",\"disabled\":\"Desactivouse {{name}}.\"},\"allow-windowed-mode\":{\"name\":\"Permite o modo fiestra\",\"button-label\":{\"windowed\":\"En fiestra\",\"fullscreen\":\"Pantalla completa\"}},\"clock\":{\"name\":\"Reloxo\"},\"force-codec\":{\"name\":\"Forza códec\",\"4k-tooltip\":\"O códec seleccionado non está disponíbel ao seleccionar 4K\"},\"force-resolution\":{\"name\":\"Forza resolución\",\"note\":\"Aviso: o valor indicado será o máximo que Stadia intentará acadar. Se o teu computador non é compatíbel coa resolución ou esta supera o uso de datos que teñas configurado na conta, non se activará.\"},\"library-filter\":{\"name\":\"Filtrar\",\"recent\":\"Recentes\",\"alphabetical\":\"Alfabeticamente\",\"random\":\"Aleatoriamente\",\"show-hidden\":\"Mostrar agochados\"},\"network-monitor\":{\"name\":\"Monitor de rede\",\"heading-visible\":\"Estatísticas\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Pegar do portapapeis\"},\"ratings\":{\"name\":\"Valoracións\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtrar\"},\"ui-tab\":{\"name\":\"Pestaña UI de Stadia+\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Recarga a páxina para activar os cambios.\",\"hide-game\":\"Agochóuse un xogo.\",\"show-game\":\"Un xogo deixou de estar agochado.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/it-IT.json":
/*!*****************************!*\
  !*** ./src/lang/it-IT.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Sviluppato da {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'estensione è pronta per l'uso. Avvia Stadia e inizia a giocare! 🎮\",\"launch-button\":\"Avvia Stadia\",\"help-button\":\"Aiuto & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Impostazioni\",\"language\":\"Lingua\",\"components\":\"Componenti\",\"edit-components\":\"Modifica Componenti\"},\"developer-page\":{\"title\":\"Sviluppatore\",\"clear-cache-button\":\"Pulisci Cache\",\"storage\":\"Archiviazione\"},\"component-page\":{\"title\":\"Componenti\"}},\"component\":{\"enabled\":\"Il componente {{name}} è stato attivato.\",\"disabled\":\"Il componente {{name}} è stato disattivato.\"},\"allow-windowed-mode\":{\"name\":\"Consentire la Modalità Finestra\",\"button-label\":{\"windowed\":\"Finestra\",\"fullscreen\":\"Schermo Intero\"}},\"clock\":{\"name\":\"Orologio\"},\"force-codec\":{\"name\":\"Forza Codec\",\"4k-tooltip\":\"Non è possibile forzare il codec quando si è in 4K\"},\"force-resolution\":{\"name\":\"Forza Risoluzione\",\"note\":\"Nota: il valore impostato è la massima risoluzione che Stadia tenterà di raggiungere. Se il tuo computer non è in grado di renderizzare la risoluzione, o non è disponibile con l'opzione di utilizzo dei dati corrente, questa non verrà visualizzata.\"},\"library-filter\":{\"name\":\"Filtro Libreria\",\"recent\":\"Recente\",\"alphabetical\":\"Alfabetico\",\"random\":\"Casuale\",\"show-hidden\":\"Mostra Nascosti\"},\"network-monitor\":{\"name\":\"Monitor di Rete\",\"heading-visible\":\"Statistiche Visibili\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Incolla dagli Appunti\"},\"ratings\":{\"name\":\"Valutazioni\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtro Negozio\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Ricarica la pagina per vedere i cambiamenti.\",\"hide-game\":\"Un gioco è stato nascosto.\",\"show-game\":\"Un gioco non è più nascosto.\"},\"automatic\":\"Automatico\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Applica\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/nl-BE.json":
/*!*****************************!*\
  !*** ./src/lang/nl-BE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Ontwikkeld door {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"De extentie is klaar. Je kan nu Stadia openen en beginnen spelen! 🎮\",\"launch-button\":\"Stadia starten\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Instellingen\",\"language\":\"Taal\",\"components\":\"Componenten\",\"edit-components\":\"Componenten aanpassen\"},\"developer-page\":{\"title\":\"Ontwikkelaar\",\"clear-cache-button\":\"Cache wissen\",\"storage\":\"Opslag\"},\"component-page\":{\"title\":\"Componenten\"}},\"component\":{\"enabled\":\"Component {{name}} werd ingeschakeld.\",\"disabled\":\"Component {{name}} werd uitgeschakeld.\"},\"allow-windowed-mode\":{\"name\":\"Spelen in venster toestaan\",\"button-label\":{\"windowed\":\"In venster\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Klok\"},\"force-codec\":{\"name\":\"Codec forceren\",\"4k-tooltip\":\"Codec kan niet geforceerd worden wanneer je in 4K speelt\"},\"force-resolution\":{\"name\":\"Resolutie forceren\",\"note\":\"Merk op: Deze waarde is de maximale resolutie dat Stadia zal proberen te halen. Dit zal niet werken als je computer deze resolutie niet kan afspelen of als de resolutie niet beschikbaar is voor de dataverbruik selectie.\"},\"library-filter\":{\"name\":\"Bibliotheek Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alfabetisch\",\"random\":\"Willekeurig\",\"show-hidden\":\"Verborgen weergeven\"},\"network-monitor\":{\"name\":\"Netwerk Monitor\",\"heading-visible\":\"Zichtbare Stats\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"ratings\":{\"name\":\"Scores\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filter bewaren\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Herlaad de pagina om je aanpassingen te zien.\",\"hide-game\":\"Een spel werd verborgen.\",\"show-game\":\"Een spel is niet langer verborgen.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Toepassen\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/ru-RU.json":
/*!*****************************!*\
  !*** ./src/lang/ru-RU.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Разработчик: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Расширение готово к работе. Запускай Stadia и начинай играть! 🎮\",\"launch-button\":\"Запустить Stadia\",\"help-button\":\"Справка и FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Настройки\",\"language\":\"Язык\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Элемент {{name}} включён.\",\"disabled\":\"Элемент {{name}} отключен.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Часы\"},\"force-codec\":{\"name\":\"Принудительный запуск кодека\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Принудительная смена разрешения\",\"note\":\"Примечание: установливаемое значение - это максимальное разрешение, которое Stadia может достичь. Если ваш компьютер не может отобразить разрешение или оно не доступно с текущей скоростью передачи данных, оно не будет отображаться.\"},\"library-filter\":{\"name\":\"Фильтр\",\"recent\":\"Последние\",\"alphabetical\":\"Алфавитный\",\"random\":\"Случайные\",\"show-hidden\":\"Показать скрытые\"},\"network-monitor\":{\"name\":\"Мониторинг сети\",\"heading-visible\":\"Видимая статистика\",\"button-label\":\"Монитор\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Вставить из буфера обмена\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Сохранить фильтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Перезагрузите страницу, чтобы увидеть изменения.\",\"hide-game\":\"Игра скрыта.\",\"show-game\":\"Игра теперь отображается.\"},\"automatic\":\"Автоматически\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/sv-SE.json":
/*!*****************************!*\
  !*** ./src/lang/sv-SE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Utvecklat av {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Tillägget är redo att köra. Bara starta Stadia och börja spela! 🎮\",\"launch-button\":\"Starta Stadia\",\"help-button\":\"Hjälp & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Inställningar\",\"language\":\"Språk\",\"components\":\"Komponenter\",\"edit-components\":\"Redigera Komponenter\"},\"developer-page\":{\"title\":\"Utvecklare\",\"clear-cache-button\":\"Rensa Cache\",\"storage\":\"Lagring\"},\"component-page\":{\"title\":\"Komponenter\"}},\"component\":{\"enabled\":\"Komponenten {{name}} är nu aktiverad.\",\"disabled\":\"Komponenten {{name}} är inte längre aktiverad.\"},\"allow-windowed-mode\":{\"name\":\"Tillåt Fönsterläge\",\"button-label\":{\"windowed\":\"Fönster\",\"fullscreen\":\"Fullskärm\"}},\"clock\":{\"name\":\"Klocka\"},\"force-codec\":{\"name\":\"Påtvigad Codec\",\"4k-tooltip\":\"Påtvingad Codec är inte tillgängligt när du spelar i 4K\"},\"force-resolution\":{\"name\":\"Påtvingad Upplösning\",\"note\":\"Observera: det satta värdet är den maximala upplösningen Stadia kommer försöka uppnå. Om din dator inte klarar av att rendera upplösningen eller den inte är tillgänglig med dina nuvarande datainställningar kommer inte den påtvingade upplösningen visas.\"},\"library-filter\":{\"name\":\"Biblioteksfilter\",\"recent\":\"Senaste\",\"alphabetical\":\"Alfabetiskt\",\"random\":\"Slumpmässigt\",\"show-hidden\":\"Visa Gömda\"},\"network-monitor\":{\"name\":\"Nätverksövervakning\",\"heading-visible\":\"Synlig Statistik\",\"button-label\":\"Övervakning\",\"toggle-button\":{\"show\":\"Visa Nätverksövervakning\",\"hide\":\"Göm Nätverksövervakning\"},\"stats\":{\"time\":\"Tid\",\"resolution\":\"Upplösning\",\"fps\":\"FPS\",\"latency\":\"Latens\",\"codec\":\"Codec\",\"traffic\":\"Nätverkstrafik\",\"current-traffic\":\"Nuvarande Trafik\",\"average-traffic\":\"Genomsnittlig Trafik\",\"packets-lost\":\"Paket Tappade\",\"average-packet-loss\":\"Pakettappning\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Klistra in från Urklipp\"},\"ratings\":{\"name\":\"Recensioner\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Butiksfiltrering\"},\"ui-tab\":{\"name\":\"Stadia+ Gränssnittstabb\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Uppdatera sidan för att se dina ändringar.\",\"hide-game\":\"Ett spel har gömts.\",\"show-game\":\"Ett spel är inte längre gömt.\"},\"automatic\":\"Automatisk\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Tillämpa\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/uk-UA.json":
/*!*****************************!*\
  !*** ./src/lang/uk-UA.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Розробник: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Розширення готове до роботи. Просто запустіть Stadia і почніть грати! 🎮\",\"launch-button\":\"Запустити Stadia\",\"help-button\":\"Довідка та поширені запитання\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Налаштування\",\"language\":\"Мова\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Компонент {{name}} увімкнено.\",\"disabled\":\"Компонент {{name}} вимкнено.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Годинник\"},\"force-codec\":{\"name\":\"Примусити кодек\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Примусити розширення\",\"note\":\"Примітка: встановлене значення - це максимальна роздільна здатність, яку Stadia намагатиметься досягти. Якщо ваш комп'ютер не здатний рендерувати роздільну здатність або він недоступний із поточною опцією використання даних, він не відображатиметься.\"},\"library-filter\":{\"name\":\"Фільтрувати\",\"recent\":\"Останні\",\"alphabetical\":\"Алфавітний\",\"random\":\"Випадкові\",\"show-hidden\":\"Показати приховані\"},\"network-monitor\":{\"name\":\"Моніторинг мережі\",\"heading-visible\":\"Видима статистика\",\"button-label\":\"Монітор\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Вставити з буфера обміну\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Зберегти фільтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Перезавантажте сторінку, щоб побачити зміни.\",\"hide-game\":\"Гра прихована.\",\"show-game\":\"Гра більше не є прихованою.\"},\"automatic\":\"Автоматично\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

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

/***/ "./src/ui/Modal.ts":
/*!*************************!*\
  !*** ./src/ui/Modal.ts ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _styles_Modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/Modal.scss */ "./src/ui/styles/Modal.scss");
/* harmony import */ var _styles_Modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_scss__WEBPACK_IMPORTED_MODULE_0__);

var Modal = /** @class */ (function () {
    function Modal() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_modal');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('stadiaplus_modal-wrapper');
        this.content = document.createElement('div');
        this.content.classList.add('stadiaplus_modal-content');
        this.closeButton = document.createElement('i');
        this.closeButton.innerHTML = 'close';
        this.closeButton.classList.add('material-icons', 'stadiaplus_modal-close');
        var self = this;
        this.closeButton.addEventListener('click', function () {
            self.element.classList.remove('active');
        });
    }
    Modal.prototype.create = function () {
        var _this = this;
        document.body.appendChild(this.element);
        this.element.appendChild(this.wrapper);
        this.wrapper.appendChild(this.closeButton);
        this.wrapper.appendChild(this.content);
        this.element.addEventListener('click', function () { return _this.close(); });
        this.wrapper.addEventListener('click', function (event) { return event.stopPropagation(); });
    };
    Modal.prototype.activate = function (content) {
        this.content.innerHTML = content;
        this.element.classList.add('active');
    };
    Modal.prototype.close = function () {
        this.element.classList.remove('active');
    };
    return Modal;
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
        var container = document.querySelector('.hxhAyf');
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

/***/ "./src/ui/styles/Modal.scss":
/*!**********************************!*\
  !*** ./src/ui/styles/Modal.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/styles/Modal.scss");

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

/***/ }),

/***/ "./src/util/downloader.js":
/*!********************************!*\
  !*** ./src/util/downloader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {//download.js v4.2, by dandavis; 2008-2016. [CCBY2] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

let downloader = { download(content, name, mime) {} };

(function (root, factory) {
    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        downloader = { download: factory() };
    }
}(undefined, function () {

    return function download(data, strFileName, strMimeType) {

        var self = window, // this script is only for browsers anyway...
            defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
            mimeType = strMimeType || defaultMime,
            payload = data,
            url = !strFileName && !strMimeType && payload,
            anchor = document.createElement("a"),
            toString = function (a) { return String(a); },
            myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
            fileName = strFileName || "download",
            blob,
            reader;
        myBlob = myBlob.call ? myBlob.bind(self) : Blob;

        if (String(this) === "true") { //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
            payload = [payload, mimeType];
            mimeType = payload[0];
            payload = payload[1];
        }


        if (url && url.length < 2048) { // if no filename and no mime, assume a url was passed as the only argument
            fileName = url.split("/").pop().split("?")[0];
            anchor.href = url; // assign href prop to temp anchor
            if (anchor.href.indexOf(url) !== -1) { // if the browser determines that it's a potentially valid url path:
                var ajax = new XMLHttpRequest();
                ajax.open("GET", url, true);
                ajax.responseType = 'blob';
                ajax.onload = function (e) {
                    download(e.target.response, fileName, defaultMime);
                };
                setTimeout(function () { ajax.send(); }, 0); // allows setting custom ajax headers using the return:
                return ajax;
            } // end if valid url?
        } // end if url?


        //go ahead and download dataURLs right away
        if (/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)) {

            if (payload.length > (1024 * 1024 * 1.999) && myBlob !== toString) {
                payload = dataUrlToBlob(payload);
                mimeType = payload.type || defaultMime;
            } else {
                return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
                    navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
                    saver(payload); // everyone else can save dataURLs un-processed
            }

        }//end if dataURL passed?

        blob = payload instanceof myBlob ?
            payload :
            new myBlob([payload], { type: mimeType });


        function dataUrlToBlob(strUrl) {
            var parts = strUrl.split(/[:;,]/),
                type = parts[1],
                decoder = parts[2] == "base64" ? atob : decodeURIComponent,
                binData = decoder(parts.pop()),
                mx = binData.length,
                i = 0,
                uiArr = new Uint8Array(mx);

            for (i; i < mx; ++i) uiArr[i] = binData.charCodeAt(i);

            return new myBlob([uiArr], { type: type });
        }

        function saver(url, winMode) {

            if ('download' in anchor) { //html5 A[download]
                anchor.href = url;
                anchor.setAttribute("download", fileName);
                anchor.className = "download-js-link";
                anchor.innerHTML = "downloading...";
                anchor.style.display = "none";
                document.body.appendChild(anchor);
                setTimeout(function () {
                    anchor.click();
                    document.body.removeChild(anchor);
                    if (winMode === true) { setTimeout(function () { self.URL.revokeObjectURL(anchor.href); }, 250); }
                }, 66);
                return true;
            }

            // handle non-a[download] safari as best we can:
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
                url = url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
                if (!window.open(url)) { // popup blocked, offer direct download:
                    if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) { location.href = url; }
                }
                return true;
            }

            //do iframe dataURL download (old ch+FF):
            var f = document.createElement("iframe");
            document.body.appendChild(f);

            if (!winMode) { // force a mime that will download:
                url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
            }
            f.src = url;
            setTimeout(function () { document.body.removeChild(f); }, 333);

        }//end saver




        if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
            return navigator.msSaveBlob(blob, fileName);
        }

        if (self.URL) { // simple fast and modern way using Blob and URL:
            saver(self.URL.createObjectURL(blob), true);
        } else {
            // handle non-Blob()+non-URL browsers:
            if (typeof blob === "string" || blob.constructor === toString) {
                try {
                    return saver("data:" + mimeType + ";base64," + self.btoa(blob));
                } catch (y) {
                    return saver("data:" + mimeType + "," + encodeURIComponent(blob));
                }
            }

            // Blob but not URL support:
            reader = new FileReader();
            reader.onload = function (e) {
                saver(this.result);
            };
            reader.readAsDataURL(blob);
        }
        return true;
    }; /* end download() */
}));

/* harmony default export */ __webpack_exports__["default"] = (downloader);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL01vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3M/MGY1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvTW9uaXRvclJ1bm5hYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcz9iZTRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hvcnRjdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYkRhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FsbG93V2luZG93ZWRNb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZvcmNlQ29kZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9yY2VSZXNvbHV0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpYnJhcnlGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmV0d29ya01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFzdGVGcm9tQ2xpcGJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhdGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RvcmVGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUlUYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3M/OGEyMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VDb2RlYy5zY3NzPzM4NzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlUmVzb2x1dGlvbi5zY3NzPzViNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2Nzcz82OWU4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9OZXR3b3JrTW9uaXRvci5zY3NzPzY3YzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1JhdGluZ3Muc2Nzcz85MmQwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzPzZjMjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1VJVGFiLnNjc3M/OGI0OSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HbG9iYWwuc2Nzcz8wOWI2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR3JpZC5zY3NzPzJmZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3M/OWFmOSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL01vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9TZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NuYWNrYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b25Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSVJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL0J1dHRvbi5zY3NzPzk5MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9Nb2RhbC5zY3NzP2Q5MzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2Nzcz83ZTdhIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU25hY2tiYXIuc2Nzcz85YjczIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Rvd25sb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkZBQXNDO0FBQ2hGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsY0FBYywyQkFBMkIsR0FBRywwREFBMEQsa0JBQWtCLEdBQUcsYUFBYSx1QkFBdUIsMEJBQTBCLHNCQUFzQix3QkFBd0IsbUJBQW1CLEdBQUcsaUJBQWlCLHVCQUF1QixZQUFZLFdBQVcsbUJBQW1CLGdCQUFnQixpQkFBaUIsZUFBZSxlQUFlLGNBQWMsZUFBZSxvQkFBb0IsR0FBRyx3QkFBd0Isc0JBQXNCLDBCQUEwQix3QkFBd0IsY0FBYyx1QkFBdUIsK0JBQStCLEdBQUcsMkRBQTJELGtCQUFrQiwyQkFBMkIsNEJBQTRCLG1CQUFtQiwyQkFBMkIscUJBQXFCLGtDQUFrQyxlQUFlLHVCQUF1QixZQUFZLHdDQUF3QyxrQ0FBa0MsR0FBRywrQkFBK0IsMEJBQTBCLEdBQUcsZ0VBQWdFLGtCQUFrQixHQUFHLHFCQUFxQixRQUFRLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLG1CQUFtQixRQUFRLHlDQUF5QyxpQkFBaUIsMEJBQTBCLEtBQUssU0FBUywwQ0FBMEMsaUJBQWlCLDBCQUEwQixLQUFLLFNBQVMseUNBQXlDLDRCQUE0QixLQUFLLFNBQVMsMENBQTBDLDBCQUEwQixLQUFLLFNBQVMseUNBQXlDLDZCQUE2QixLQUFLLFNBQVMsMENBQTBDLDBCQUEwQixLQUFLLFNBQVMseUNBQXlDLDZCQUE2QixLQUFLLFVBQVUsMENBQTBDLDBCQUEwQixLQUFLLEdBQUcsb0JBQW9CLFFBQVEsa0NBQWtDLEtBQUssU0FBUyx3Q0FBd0MsS0FBSyxTQUFTLHdDQUF3QyxLQUFLLFNBQVMsd0NBQXdDLEtBQUssU0FBUyx3Q0FBd0MsS0FBSyxTQUFTLHdDQUF3QyxLQUFLLFVBQVUsa0NBQWtDLEtBQUssR0FBRyxxQkFBcUIsUUFBUSxpQkFBaUIsbURBQW1ELEtBQUssVUFBVSxpQkFBaUIseUNBQXlDLEtBQUssR0FBRyxvQkFBb0IsUUFBUSwwQ0FBMEMsS0FBSyxVQUFVLDJEQUEyRCxLQUFLLEdBQUcsK0NBQStDLHdCQUF3QixHQUFHLDBDQUEwQywwQkFBMEIsR0FBRyx3REFBd0QseUNBQXlDLEdBQUcsaUdBQWlHLGdDQUFnQyxHQUFHLGdEQUFnRCxxQ0FBcUMsR0FBRyxpQ0FBaUMsdUJBQXVCLG1CQUFtQiwyQkFBMkIsNEJBQTRCLFlBQVksZUFBZSx1QkFBdUIsd0JBQXdCLHdDQUF3QyxrQ0FBa0MsZUFBZSxHQUFHLHNDQUFzQyxjQUFjLGdCQUFnQixpQkFBaUIsdUJBQXVCLGtCQUFrQixZQUFZLDRCQUE0Qix3QkFBd0IsbUJBQW1CLEdBQUcsK0NBQStDLGVBQWUsR0FBRyxzREFBc0QsMEJBQTBCLEdBQUcsK0JBQStCLHVCQUF1QixtQkFBbUIsMkJBQTJCLDRCQUE0QixZQUFZLGVBQWUsdUJBQXVCLHdCQUF3Qix3Q0FBd0Msa0NBQWtDLGVBQWUsR0FBRyw0QkFBNEIsY0FBYyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixrQkFBa0IsWUFBWSw0QkFBNEIsd0JBQXdCLG1CQUFtQixHQUFHLDZDQUE2QyxlQUFlLEdBQUcsZ0NBQWdDLGVBQWUsdUJBQXVCLDJCQUEyQiw0QkFBNEIsV0FBVyx3Q0FBd0MsWUFBWSxlQUFlLHVCQUF1Qix3QkFBd0IsMEJBQTBCLEdBQUcsOENBQThDLGVBQWUsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsMkJBQTJCLHVCQUF1QixHQUFHLGtDQUFrQyxrQkFBa0IsOEJBQThCLHdCQUF3QixlQUFlLHNCQUFzQiw0QkFBNEIsdUJBQXVCLFdBQVcseUNBQXlDLGVBQWUsOEJBQThCLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLDZFQUE2RSw4QkFBOEIsd0JBQXdCLFlBQVksOEJBQThCLDBCQUEwQixHQUFHLHVDQUF1Qyx5Q0FBeUMsR0FBRyxrREFBa0QsMEJBQTBCLEdBQUcsd0RBQXdELGVBQWUsR0FBRyx1REFBdUQseUNBQXlDLGNBQWMsR0FBRywyREFBMkQsMEJBQTBCLHlDQUF5QyxHQUFHLCtEQUErRCxlQUFlLEdBQUcsOERBQThELHNDQUFzQyxjQUFjLEdBQUcsMkNBQTJDLGtCQUFrQixtQ0FBbUMsMkJBQTJCLEdBQUcseURBQXlELDBCQUEwQix5Q0FBeUMsR0FBRywrREFBK0Qsa0JBQWtCLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLDZEQUE2RCxtQkFBbUIsR0FBRywyREFBMkQsd0NBQXdDLEdBQUcsc0dBQXNHLGtCQUFrQixHQUFHLDhGQUE4RixtQkFBbUIsR0FBRyxvR0FBb0csbUJBQW1CLGVBQWUsR0FBRyxrQ0FBa0MsZUFBZSxrQkFBa0IsR0FBRyw4SEFBOEgsZUFBZSxxQkFBcUIsR0FBRyx1Q0FBdUMsbUJBQW1CLEdBQUcsZ0RBQWdELGVBQWUscUJBQXFCLEdBQUcsaURBQWlELGVBQWUsa0JBQWtCLEdBQUcsdUdBQXVHLGtCQUFrQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyw2RUFBNkUsd0JBQXdCLEdBQUcsdUNBQXVDLHdCQUF3QixxQkFBcUIsR0FBRyw4Q0FBOEMsMEJBQTBCLEdBQUcsNkVBQTZFLHVCQUF1QixHQUFHLG1IQUFtSCw4QkFBOEIsR0FBRyx1REFBdUQsOEJBQThCLEdBQUcsOElBQThJLDhCQUE4QixHQUFHLGlFQUFpRSw4QkFBOEIsR0FBRyxnRUFBZ0Usa0JBQWtCLHdCQUF3Qiw4QkFBOEIsR0FBRyxtVUFBbVUsMEVBQTBFLGVBQWUsR0FBRyx3VUFBd1UsK0RBQStELGVBQWUsR0FBRyx1RUFBdUUsOEJBQThCLEdBQUcsNlVBQTZVLGdFQUFnRSxlQUFlLEdBQUcsd0VBQXdFLDhCQUE4QixHQUFHLHdFQUF3RSx3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLGtCQUFrQixHQUFHLCtCQUErQixpQkFBaUIsR0FBRyw0QkFBNEIsa0JBQWtCLHdCQUF3QixHQUFHLHlHQUF5Ryx5Q0FBeUMsR0FBRyxvTEFBb0wsZ0JBQWdCLGlCQUFpQixHQUFHLDZHQUE2RywwQkFBMEIsR0FBRywyR0FBMkcsa0NBQWtDLEdBQUcsdVJBQXVSLG1CQUFtQixvQkFBb0IsR0FBRyxpRkFBaUYseUNBQXlDLEdBQUcsNERBQTRELDBCQUEwQixHQUFHLG1FQUFtRSx5Q0FBeUMsR0FBRyxtRUFBbUUsMEJBQTBCLHlDQUF5QyxHQUFHLGlHQUFpRyx5Q0FBeUMsR0FBRyx3S0FBd0ssZ0JBQWdCLGlCQUFpQixHQUFHLHVHQUF1RywwQkFBMEIsR0FBRyxxR0FBcUcsa0NBQWtDLEdBQUcscVFBQXFRLG1CQUFtQixvQkFBb0IsR0FBRyw4RUFBOEUseUNBQXlDLEdBQUcseURBQXlELDBCQUEwQixHQUFHLGdFQUFnRSx5Q0FBeUMsR0FBRyxnRUFBZ0UsMEJBQTBCLHlDQUF5QyxHQUFHLHVHQUF1Ryx5Q0FBeUMsR0FBRyxvTEFBb0wsZ0JBQWdCLGlCQUFpQixHQUFHLDZHQUE2RywwQkFBMEIsR0FBRywyR0FBMkcsa0NBQWtDLEdBQUcsdVJBQXVSLG1CQUFtQixvQkFBb0IsR0FBRyxpRkFBaUYseUNBQXlDLEdBQUcsNERBQTRELDBCQUEwQixHQUFHLG1FQUFtRSx5Q0FBeUMsR0FBRyxtRUFBbUUsMEJBQTBCLHlDQUF5QyxHQUFHLHVHQUF1Ryx5Q0FBeUMsR0FBRyxvTEFBb0wsZ0JBQWdCLGlCQUFpQixHQUFHLDZHQUE2RywwQkFBMEIsR0FBRywyR0FBMkcsa0NBQWtDLEdBQUcsdVJBQXVSLG1CQUFtQixvQkFBb0IsR0FBRyxpRkFBaUYseUNBQXlDLEdBQUcsNERBQTRELDBCQUEwQixHQUFHLG1FQUFtRSx5Q0FBeUMsR0FBRyxtRUFBbUUsMEJBQTBCLHlDQUF5QyxHQUFHLHFHQUFxRyx5Q0FBeUMsR0FBRyxnTEFBZ0wsZ0JBQWdCLGlCQUFpQixHQUFHLDJHQUEyRywwQkFBMEIsR0FBRyx5R0FBeUcsa0NBQWtDLEdBQUcsaVJBQWlSLG1CQUFtQixvQkFBb0IsR0FBRyxnRkFBZ0YseUNBQXlDLEdBQUcsMkRBQTJELDBCQUEwQixHQUFHLGtFQUFrRSx5Q0FBeUMsR0FBRyxrRUFBa0UsMEJBQTBCLHlDQUF5QyxHQUFHLDJJQUEySSxnQ0FBZ0Msb0RBQW9ELEdBQUcsMEJBQTBCLHVCQUF1QixHQUFHLGtCQUFrQiw2R0FBNkcsMEJBQTBCLHFFQUFxRSxnQ0FBZ0MsS0FBSyxHQUFHO0FBQzFsakI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0Isc0JBQXNCLHlCQUF5QixxQkFBcUIsR0FBRztBQUNwSDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1QixxQkFBcUIsZ0NBQWdDLEdBQUcsOEJBQThCLHlCQUF5Qiw4QkFBOEIsbUJBQW1CLHFCQUFxQiwyQkFBMkIsR0FBRyxxQkFBcUIseUJBQXlCLDBCQUEwQixHQUFHO0FBQzVVO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsdUJBQXVCLHFCQUFxQixnQ0FBZ0MsR0FBRyw4QkFBOEIseUJBQXlCLDhCQUE4QixtQkFBbUIscUJBQXFCLDJCQUEyQixHQUFHLHFCQUFxQix5QkFBeUIsMEJBQTBCLEdBQUc7QUFDNVU7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQ0FBc0MsZUFBZSx3QkFBd0IsMkdBQTJHLEdBQUcsNkNBQTZDLDBCQUEwQixlQUFlLEdBQUcsNENBQTRDLGtCQUFrQixlQUFlLEdBQUcsNEVBQTRFLHVCQUF1QiwwQkFBMEIsZUFBZSxpQ0FBaUMsb0NBQW9DLDhCQUE4QiwrREFBK0QsR0FBRyxvRUFBb0UsNkNBQTZDLG9CQUFvQixlQUFlLGtCQUFrQixvQkFBb0IsR0FBRyxrRkFBa0YsNEJBQTRCLEdBQUcsd0ZBQXdGLHdCQUF3QixHQUFHLG1DQUFtQyw4QkFBOEIsc0JBQXNCLHVCQUF1QixrQkFBa0Isd0JBQXdCLG9CQUFvQixpR0FBaUcsR0FBRyxzREFBc0QsbUJBQW1CLG9CQUFvQixHQUFHLGdFQUFnRSxzQkFBc0IsR0FBRyxpRUFBaUUsaUVBQWlFLHVCQUF1QixpQkFBaUIsb0JBQW9CLEdBQUcsd0VBQXdFLGlDQUFpQyxHQUFHLHVFQUF1RSxnREFBZ0QsR0FBRyx3RUFBd0UsK0NBQStDLEdBQUcsMkVBQTJFLDRCQUE0QixHQUFHLDRFQUE0RSw4QkFBOEIsR0FBRztBQUM5d0U7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUywrQkFBK0IsdUJBQXVCLGlCQUFpQixXQUFXLFlBQVksaUJBQWlCLGtCQUFrQix5Q0FBeUMsR0FBRyxnQ0FBZ0Msc0JBQXNCLEdBQUcsaUNBQWlDLDBCQUEwQiw0QkFBNEIsMEJBQTBCLHdCQUF3QixHQUFHLHVDQUF1QyxpQkFBaUIsaUJBQWlCLEdBQUcsdUNBQXVDLDBCQUEwQiwrQkFBK0IsMEJBQTBCLHdCQUF3QixHQUFHLHlDQUF5QyxxQkFBcUIsR0FBRztBQUMzcUI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIsc0JBQXNCLHdCQUF3Qix1QkFBdUIsR0FBRyx1REFBdUQsZUFBZSx5Q0FBeUMsR0FBRyxpREFBaUQsNkNBQTZDLHVCQUF1QixjQUFjLGNBQWMsMkNBQTJDLG9CQUFvQixtQ0FBbUMsMEJBQTBCLG1CQUFtQixvQkFBb0IsZUFBZSwrRUFBK0UsR0FBRztBQUM3bkI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyw0QkFBNEIsaUdBQWlHLEdBQUcsZ0NBQWdDLHFDQUFxQyxnREFBZ0Qsa0JBQWtCLHdCQUF3QixrQkFBa0IsMEJBQTBCLEdBQUcsd0NBQXdDLHdCQUF3QixvQkFBb0IseUJBQXlCLDZDQUE2QyxHQUFHLHNDQUFzQyw2QkFBNkIsb0JBQW9CLGdEQUFnRCw2Q0FBNkMsdUJBQXVCLHlCQUF5QixtQkFBbUIscUJBQXFCLGlCQUFpQiwyQkFBMkIsR0FBRyxrQ0FBa0MsMEJBQTBCLG9CQUFvQixnREFBZ0QscUNBQXFDLEdBQUcsK0RBQStELGtCQUFrQixpQkFBaUIsMEJBQTBCLDBCQUEwQixnREFBZ0QsbUJBQW1CLDRDQUE0QyxtQkFBbUIsR0FBRyxxRUFBcUUsa0JBQWtCLEdBQUcsbUVBQW1FLHNCQUFzQixpQkFBaUIsbUNBQW1DLHNDQUFzQyxHQUFHLHVFQUF1RSxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRztBQUMzckQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IsaUJBQWlCLEdBQUcsOEJBQThCLDhGQUE4Riw4QkFBOEIsdUJBQXVCLFdBQVcsWUFBWSxnQ0FBZ0Msa0JBQWtCLDhCQUE4Qiw0Q0FBNEMsaUJBQWlCLEdBQUcsaUNBQWlDLDZCQUE2QixHQUFHLG1DQUFtQyxrQkFBa0Isd0JBQXdCLEdBQUcsMkNBQTJDLG9CQUFvQixHQUFHLGtDQUFrQyxzQkFBc0IsR0FBRyx1Q0FBdUMsNkJBQTZCLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHO0FBQ2p5QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBLGNBQWMsUUFBUyx3RUFBd0U7QUFDL0Y7QUFDQSxjQUFjLFFBQVMsWUFBWSwwQ0FBMEMsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsdUJBQXVCLDJCQUEyQix5QkFBeUIsR0FBRyxRQUFRLGlCQUFpQix1REFBdUQsR0FBRyx5QkFBeUIsOEJBQThCLEdBQUcsK0JBQStCLHlDQUF5QyxHQUFHO0FBQ25hO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsb0JBQW9CLHlCQUF5QiwwQkFBMEIsR0FBRztBQUNqRztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixpQkFBaUIsR0FBRztBQUNqRTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1QixxQkFBcUIsZ0NBQWdDLEdBQUcsOEJBQThCLHlCQUF5Qiw4QkFBOEIsbUJBQW1CLHFCQUFxQiwyQkFBMkIsR0FBRztBQUNqUTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixvQkFBb0IsbUNBQW1DLGlCQUFpQixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixrQkFBa0IseUJBQXlCLGtDQUFrQyxlQUFlLEdBQUcsK0NBQStDLG9CQUFvQix1QkFBdUIsbUJBQW1CLGtCQUFrQiwwQkFBMEIsd0JBQXdCLGNBQWMsYUFBYSxnREFBZ0Qsb0NBQW9DLEdBQUcsNkNBQTZDLGlCQUFpQixpQkFBaUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRyxtREFBbUQsZ0RBQWdELG9CQUFvQixHQUFHLDRCQUE0QixlQUFlLDRCQUE0QixHQUFHLHNEQUFzRCw4Q0FBOEMsR0FBRztBQUN4K0I7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQ0FBa0MsaUJBQWlCLHlCQUF5QixvQkFBb0IsR0FBRywyQ0FBMkMsMEJBQTBCLGdCQUFnQixHQUFHLHVEQUF1RCwwQkFBMEIsR0FBRywyRUFBMkUsOEJBQThCLG9DQUFvQyxHQUFHLHVGQUF1Riw4QkFBOEIsb0NBQW9DLEdBQUcsNEhBQTRILDRCQUE0QixpQkFBaUIscUNBQXFDLHFCQUFxQixpQkFBaUIsR0FBRyxzSkFBc0osb0NBQW9DLEdBQUcsaVRBQWlULDBCQUEwQixHQUFHLDRDQUE0QyxnQkFBZ0IsR0FBRyw4SEFBOEgsNEJBQTRCLGlCQUFpQixxQ0FBcUMscUJBQXFCLGlCQUFpQixHQUFHLHFUQUFxVCwwQkFBMEIsR0FBRyx1REFBdUQsaUJBQWlCLGlCQUFpQixHQUFHLG9KQUFvSixpQkFBaUIsR0FBRztBQUNsdUU7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx5QkFBeUIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLDJCQUEyQix1QkFBdUIsaUJBQWlCLDhIQUE4SCxzSEFBc0gsb0JBQW9CLGdCQUFnQiw0QkFBNEIsMkNBQTJDLGVBQWUscUdBQXFHLEdBQUcsK0JBQStCLHdDQUF3QyxlQUFlLEdBQUcsZ0NBQWdDLG9CQUFvQixrQkFBa0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLGdCQUFnQix1QkFBdUIsaUJBQWlCLG9CQUFvQixHQUFHLG9DQUFvQyxnREFBZ0Qsb0JBQW9CLEdBQUc7QUFDcGpDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkZBQXNDO0FBQ2hGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsWUFBWSxrQkFBa0IscUJBQXFCLGlCQUFpQixXQUFXLFdBQVcsNkJBQTZCLGFBQWEsZUFBZSxXQUFXLFlBQVksWUFBWSx5QkFBeUIsa0JBQWtCLHNCQUFzQixVQUFVLHNCQUFzQixnQ0FBZ0MseUNBQXlDLHlCQUF5QixtQkFBbUIsMkNBQTJDLHlCQUF5QiwwQkFBMEIsMkNBQTJDLDRCQUE0Qiw2QkFBNkIsMENBQTBDLGNBQWMsZ0JBQWdCLHdCQUF3QixnQkFBZ0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHNGQUFzRixhQUFhLG1CQUFtQixnQkFBZ0IsdUJBQXVCLG1CQUFtQiw0Q0FBNEMsV0FBVyx1REFBdUQsY0FBYywwQ0FBMEMsYUFBYSxtQkFBbUIseUJBQXlCLGNBQWMsYUFBYSxnQkFBZ0Isa0RBQWtELGFBQWEsdUNBQXVDLGFBQWEsbUJBQW1CLHlCQUF5QixjQUFjLGFBQWEsNENBQTRDLGtCQUFrQix5QkFBeUIscUJBQXFCLFlBQVksb0NBQW9DLHFEQUFxRCwwQkFBMEIsZUFBZSx1REFBdUQsd0JBQXdCLGdCQUFnQiw0QkFBNEIsYUFBYSxtQkFBbUIsZUFBZSxnQkFBZ0IsV0FBVyxrQkFBa0IseUJBQXlCLGtCQUFrQixzQkFBc0IsVUFBVSxzQkFBc0IsZ0NBQWdDLHdDQUF3Qyx5QkFBeUIsbUJBQW1CLGdFQUFnRSxXQUFXLDhFQUE4RSxtQkFBbUIsMENBQTBDLHlCQUF5QiwwQkFBMEIsMENBQTBDLDRCQUE0Qiw2QkFBNkIsdUNBQXVDLGFBQWEsZUFBZSwyQkFBMkIsY0FBYyx3QkFBd0Isb0RBQW9ELGFBQWEsZ0JBQWdCLGFBQWEsZ0JBQWdCLG1CQUFtQixXQUFXLGNBQWMsZ0JBQWdCLHVCQUF1QixtQkFBbUIsbUJBQW1CLEdBQUcsbUJBQW1CLFVBQVUsR0FBRyxtQkFBbUIsV0FBVyxvQkFBb0IsR0FBRyxtQkFBbUIsVUFBVSxHQUFHLG1CQUFtQixXQUFXLGlEQUFpRCxhQUFhLGlCQUFpQixtQkFBbUIsZUFBZSxnQkFBZ0IscUJBQXFCLFdBQVcseUJBQXlCLGtCQUFrQix1QkFBdUIsdUJBQXVCLG1DQUFtQyx5QkFBeUIsd0RBQXdELHdCQUF3Qix1QkFBdUIsbUNBQW1DLGtFQUFrRSxpQkFBaUIsZUFBZSxvQ0FBb0MsYUFBYSxhQUFhLHNCQUFzQiw2Q0FBNkMsYUFBYSx1QkFBdUIsbUJBQW1CLGdCQUFnQixrQkFBa0IsWUFBWSxVQUFVLHlCQUF5QixtREFBbUQsZ0JBQWdCLGFBQWEsa0JBQWtCLFdBQVcsV0FBVyxVQUFVLFFBQVEsc0RBQXNELHdCQUF3QixZQUFZLGtCQUFrQixXQUFXLGdCQUFnQixzQkFBc0IseUJBQXlCLGFBQWEsc0JBQXNCLDRCQUE0QixxQ0FBcUMsVUFBVSxvQkFBb0Isb0JBQW9CLGNBQWMsVUFBVSxvQkFBb0IsdUJBQXVCLGFBQWEsbUJBQW1CLG9CQUFvQixvRUFBb0UsU0FBUyxVQUFVLFVBQVUsU0FBUyw2QkFBNkIsb0JBQW9CLGtCQUFrQixvQkFBb0IsY0FBYyxXQUFXLFlBQVksWUFBWSxnQkFBZ0IsU0FBUyx5QkFBeUIsa0JBQWtCLHNCQUFzQixVQUFVLGdCQUFnQixzQkFBc0IsOEJBQThCLDZCQUE2QiwwQ0FBMEMsY0FBYyxzQkFBc0IsbUNBQW1DLDJCQUEyQixtQ0FBbUMsb0JBQW9CLHVCQUF1QixtQkFBbUIsZUFBZSxlQUFlLGdCQUFnQixjQUFjLFlBQVksaUJBQWlCLHlCQUF5QixrQkFBa0Isc0JBQXNCLHdCQUF3QixjQUFjLHFCQUFxQixpQkFBaUIsa0JBQWtCLGdCQUFnQixnQkFBZ0IscURBQXFELGlCQUFpQixnQkFBZ0IsNkNBQTZDLHlCQUF5QixtREFBbUQsZUFBZSx5REFBeUQsV0FBVyx5QkFBeUIsZ0NBQWdDLGlCQUFpQixlQUFlLGlCQUFpQixrQ0FBa0MscUJBQXFCLHFGQUFxRixXQUFXLHlCQUF5Qiw0Q0FBNEMsbUJBQW1CLGNBQWMsc0JBQXNCLHFFQUFxRSxXQUFXLHFDQUFxQyx3Q0FBd0MsYUFBYSxxREFBcUQseUJBQXlCO0FBQzVuTTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUM3RkEsVUFBVSxtQkFBTyxDQUFDLHlJQUE4RDtBQUNoRiwwQkFBMEIsbUJBQU8sQ0FBQyxnT0FBcUY7O0FBRXZIOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFlLHFHQUFzQyw2QkFBNkIsa0NBQWtDLHlCQUF5Qix1QkFBdUIscUJBQXFCLDhCQUE4QixtQkFBbUIsbUJBQW1CLDhCQUE4Qiw2Q0FBNkMsMkNBQTJDLHFEQUFxRCxxREFBcUQsbUVBQW1FLHNEQUFzRCxrQ0FBa0MsY0FBYywwRUFBMEUsU0FBUyxxQkFBcUIsc0NBQXNDLGdDQUFnQyx5REFBeUQsb0VBQW9FLG9HQUFvRyxvREFBb0QsNENBQTRDLHVDQUF1QyxrQ0FBa0MsMEJBQTBCLFVBQVUsZ0RBQWdELHVCQUF1Qix1QkFBdUIsa0NBQWtDLFVBQVUsK0NBQStDLG9EQUFvRCxtREFBbUQsaUNBQWlDLDBHQUEwRyxrQ0FBa0MsK0JBQStCLCtCQUErQixhQUFhLGtDQUFrQywrQkFBK0IsK0JBQStCLGFBQWEsaUZBQWlGLCtCQUErQiwrQkFBK0IsYUFBYSxtRkFBbUYsK0JBQStCLCtCQUErQixhQUFhLHFGQUFxRixXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLElBQUksVUFBVSxrQ0FBa0MsNEJBQTRCLHVCQUF1QixjQUFjLGdEQUFnRCxxQ0FBcUMsZ0VBQWdFLCtCQUErQiwyREFBMkQsMkhBQTJILDhDQUE4Qyx5YkFBeWIsMmJBQTJiLDBEQUEwRCw2QkFBNkIseUJBQXlCLHNCQUFzQixzQkFBc0IsK0hBQStILCtDQUErQyxtRUFBbUUsbUVBQW1FLHlCQUF5QixzQkFBc0Isc0JBQXNCLHlIQUF5SCxnREFBZ0QseUJBQXlCLHNCQUFzQixtQkFBbUIsNklBQTZJLGFBQWEsT0FBTyxnSkFBZ0osYUFBYSxVQUFVLGtEQUFrRCx5REFBeUQsVUFBVSxxQ0FBcUMsaUNBQWlDLG9DQUFvQyxrQ0FBa0MscURBQXFELGlDQUFpQyxVQUFVLDhCQUE4Qiw0QkFBNEIsbUNBQW1DLGtEQUFrRCw4REFBOEQsNkVBQTZFLG9EQUFvRCw0S0FBNEssOEpBQThKLG1RQUFtUSx5SUFBeUksc0VBQXNFLGlGQUFpRiwwRUFBMEUsMEpBQTBKLGlNQUFpTSx3TUFBd00sbUlBQW1JLCtIQUErSCwySEFBMkgsc0NBQXNDLHVEQUF1RCw4Q0FBOEMsK0RBQStELHVDQUF1QyxXQUFXLE9BQU8scUJBQXFCLHVDQUF1Qyw2REFBNkQsdUNBQXVDLGdDQUFnQyxJQUFJLGlCQUFpQixHQUFHLGtCQUFrQixPQUFPLHFCQUFxQiwwREFBMEQsdUNBQXVDLHlCQUF5QixJQUFJLElBQUksT0FBTyxxQkFBcUIsOERBQThELHVDQUF1Qyw2QkFBNkIsSUFBSSxRQUFRLE9BQU8scUJBQXFCLDREQUE0RCx1Q0FBdUMsMkJBQTJCLElBQUksTUFBTSxPQUFPLHFCQUFxQiw4REFBOEQsdUNBQXVDLDZCQUE2QixJQUFJLGFBQWEsT0FBTyxxQkFBcUIsc0VBQXNFLHVDQUF1QyxxQ0FBcUMsSUFBSSxlQUFlLE9BQU8scUJBQXFCLHNFQUFzRSx1Q0FBdUMscUNBQXFDLElBQUksZUFBZSxPQUFPLHFCQUFxQixtRUFBbUUsdUNBQXVDLGtDQUFrQyxJQUFJLFlBQVksT0FBTyxxQkFBcUIsMEVBQTBFLHVDQUF1Qyx5Q0FBeUMsSUFBSSxrQkFBa0IsT0FBTyxxQkFBcUIsb0VBQW9FLHVDQUF1QyxtQ0FBbUMsSUFBSSxhQUFhLE9BQU8scUJBQXFCLHdDQUF3QyxzREFBc0QsaUJBQWlCLEVBQUUsYUFBYSxPQUFPLDRDQUE0QyxnaEJBQWdoQixhQUFhLG1DQUFtQyxrQ0FBa0Msa0NBQWtDLGlCQUFpQixRQUFRLGFBQWEsVUFBVSw4Q0FBOEMsOENBQThDLFVBQVUsdURBQXVELDBEQUEwRCwwQkFBMEIsdUNBQXVDLG9CQUFvQiw4QkFBOEIsYUFBYSx1SEFBdUgsVUFBVSx3REFBd0Qsa0RBQWtELDBCQUEwQix1Q0FBdUMsb0JBQW9CLDhCQUE4QixhQUFhLHVIQUF1SCxVQUFVLDhEQUE4RCxtRUFBbUUsVUFBVSw0RUFBNEUsK0xBQStMLFVBQVUsdUVBQXVFLHdEQUF3RCxVQUFVLDZFQUE2RSwwUEFBMFAsVUFBVSxrQ0FBa0MsZ0VBQWdFLHdFQUF3RSx1REFBdUQseUNBQXlDLDZCQUE2QixVQUFVLDJFQUEyRSxnSkFBZ0osVUFBVSxvRUFBb0UscURBQXFELFVBQVUsMEVBQTBFLG9CQUFvQiw4SUFBOEksVUFBVSxpRUFBaUUsZ0lBQWdJLGlFQUFpRSxVQUFVLGdDQUFnQywyREFBMkQsaUZBQWlGLHFFQUFxRSx1QkFBdUIsVUFBVSwrQ0FBK0MsK0NBQStDLFVBQVUsTUFBTSxrREFBa0QsS0FBSyxFOzs7Ozs7Ozs7OztBQ0FyOWEsVUFBVSxtQkFBTyxDQUFDLHlJQUE4RDtBQUNoRiwwQkFBMEIsbUJBQU8sQ0FBQyxvSkFBcUQ7O0FBRXZGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQW1ILENBQUMsbUJBQW1CLFdBQVcsd0JBQXdCLGFBQWEsZ0JBQWdCLE1BQU0sd0NBQXdDLDBDQUEwQyw4REFBOEQsTUFBTSwrQ0FBK0MsZ0JBQWdCLHlEQUF5RCwrQkFBK0IsdURBQXVELE1BQU0scUNBQXFDLGtGQUFrRiw2Q0FBNkMsOEJBQThCLDJGQUEyRiw4REFBOEQsNEJBQTRCLE1BQU0seURBQXlELGlCQUFpQixtQkFBbUIsc0JBQXNCLG1CQUFtQix3Q0FBd0MsdUJBQXVCLHFCQUFxQiwyQ0FBMkMscUNBQXFDLGdCQUFnQixXQUFXLEtBQUssV0FBVyw4QkFBOEIsU0FBUyw2QkFBNkIsNkRBQTZELHdCQUF3Qiw4RUFBOEUseURBQXlELDJGQUEyRixpQkFBaUIsYUFBYSxnQkFBZ0IseUNBQXlDLE9BQU8sZ1ZBQWdWLDZCQUE2QixnQkFBZ0IsdUpBQXVKLEVBQUUsd0NBQXdDLGFBQWEsa0RBQWtELFdBQVcsS0FBSyxXQUFXLDRCQUE0QixXQUFXLHlCQUF5QixvQkFBb0IsV0FBVyxLQUFLLFdBQVcsMEJBQTBCLDZCQUE2QixnR0FBZ0csa0JBQWtCLHNKQUFzSix3Q0FBd0MsT0FBTywrUEFBK1AsOENBQThDLGdDQUFnQyxvREFBb0QsV0FBVyxLQUFLLFdBQVcsZUFBZSw4Q0FBOEMsdUJBQXVCLHlCQUF5QixLQUFLLCtCQUErQix5QkFBeUIsdUNBQXVDLDhCQUE4Qix1Q0FBdUMscUJBQXFCLHdCQUF3QixXQUFXLEtBQUssV0FBVyw4QkFBOEIsZ0NBQWdDLGdCQUFnQixxQkFBcUIsV0FBVyxLQUFLLFdBQVcsMkRBQTJELDhDQUE4Qyw4Q0FBOEMseURBQXlELFdBQVcsS0FBSyxXQUFXLDZDQUE2QyxrREFBa0QsU0FBUyxvQ0FBb0MsV0FBVyxxREFBcUQsc0JBQXNCLFdBQVcsS0FBSyxXQUFXLDhCQUE4QixnQ0FBZ0MsZ0JBQWdCLHFCQUFxQixXQUFXLEtBQUssV0FBVywwREFBMEQsNkRBQTZELHVDQUF1Qyx5Q0FBeUMscURBQXFELDhCQUE4QixvQ0FBb0MsV0FBVyxLQUFLLFdBQVcsYUFBYSxpQ0FBaUMsOENBQThDLHFEQUFxRCxzQ0FBc0MsV0FBVyxLQUFLLFdBQVcsdUNBQXVDLHVCQUF1QixxQ0FBcUMsK0dBQStHLDZDQUE2QyxxQkFBcUIsd0JBQXdCLFdBQVcsS0FBSyxXQUFXLDZDQUE2QyxnQ0FBZ0MsUUFBUSxxQ0FBcUMsV0FBVyxLQUFLLFdBQVcsdUNBQXVDLFlBQVksZ0NBQWdDLHFDQUFxQyx5REFBeUQsV0FBVyx3QkFBd0IsZ0NBQWdDLGFBQWEsOENBQThDLGNBQWMsaUJBQWlCLHNCQUFzQixJQUFJLHNCQUFzQiwrQ0FBK0MsRUFBRSxtQ0FBbUMsU0FBUyxFQUFFLHdCQUF3QixJQUFJLGNBQWMsb01BQW9NLGNBQWMsd0lBQXdJLG9DQUFvQyxrRUFBa0Usb0JBQW9CLFdBQVcsS0FBSyxXQUFXLDhCQUE4QixnQ0FBZ0MsZ0JBQWdCLHFCQUFxQixXQUFXLEtBQUssZUFBZSxlQUFlLGFBQWEsb0JBQW9CLGlCQUFpQixhQUFhLGdCQUFnQiwyRUFBMkUsMEVBQTBFLHVEQUF1RCx1RUFBdUUsU0FBUyxpQ0FBaUMsMkJBQTJCLDZDQUE2QyxXQUFXLEtBQUssV0FBVyxnQkFBZ0IsU0FBUyxNQUFNLDZDQUE2QyxtQ0FBbUMsOE9BQThPLDJDQUEyQyxnRkFBZ0YsaUNBQWlDLHNCQUFzQiw4REFBOEQsNkVBQTZFLFdBQVcsS0FBSyxXQUFXLGFBQWEsbURBQW1ELHVCQUF1QixFQUFFLG9GQUFvRixzRUFBc0UsaUNBQWlDLDRPQUE0Tyw2QkFBNkIsV0FBVyxrREFBa0QsdWZBQXVmLGtEQUFrRCxrS0FBa0ssb1dBQW9XLDhCQUE4QixNQUFNLCtEQUErRCw0Q0FBNEMsc0JBQXNCLG1HQUFtRyw0QkFBNEIsOEJBQThCLFdBQVcsOHVCQUE4dUIsc2RBQXNkLDRCQUE0Qix5Q0FBeUMsUUFBUSwrS0FBK0sseUNBQXlDLHNpQkFBc2lCLHlDQUF5QyxvWkFBb1osK0JBQStCLHVZQUF1WSxnQ0FBZ0MsaVlBQWlZLGdDQUFnQyxtRkFBbUYsV0FBVyw0RUFBNEUscURBQXFELHVCQUF1Qiw0RkFBNEYsRUFBRSx1Q0FBdUMsdUNBQXVDLHlCQUF5QiwrQkFBK0IsNkdBQTZHLGlDQUFpQyxxQkFBcUIseUlBQXlJLHVJQUF1SSxzRUFBc0UsYUFBYSw4QkFBOEIsSUFBSSxjQUFjLFdBQVcsaUtBQWlLLHVCQUF1QixzSUFBc0ksbW9CQUFtb0IsNEJBQTRCLG1CQUFtQix3QkFBd0IsVUFBVSx3QkFBd0IsVUFBVSwyTkFBMk4sNkRBQTZELDRGQUE0RixpSkFBaUosZ1VBQWdVLFlBQVksaUJBQWlCLGFBQWEsZ0JBQWdCLDhDQUE4Qyx5REFBeUQsSUFBSSxjQUFjLDQ3RUFBNDdFLFdBQVcsaUJBQWlCLGFBQWEsZ0JBQWdCLHVDQUF1QyxpQ0FBaUMsaUdBQWlHLFdBQVcsS0FBSyxXQUFXLGNBQWMsZ0JBQWdCLFdBQVcsMENBQTBDLG9FQUFvRSx5RkFBeUYsV0FBVyx3Q0FBd0Msc0NBQXNDLHlHQUF5RywwQ0FBMEMsV0FBVyxtREFBbUQsb0RBQW9ELEVBQUUsNENBQTRDLFdBQVcsaUZBQWlGLG9JQUFvSSxzRkFBc0YsR0FBRyxrQ0FBa0MsZ0RBQWdELG1FQUFtRSw0Q0FBNEMsRUFBRSxtREFBbUQsMERBQTBELGdDQUFnQywwQkFBMEIsZ0JBQWdCLFdBQVcsS0FBSyxXQUFXLGdDQUFnQyw2Q0FBNkMscURBQXFELFdBQVcsS0FBSyxXQUFXLG9DQUFvQyw0QkFBNEIscURBQXFELHNDQUFzQyx1Q0FBdUMsd09BQXdPLG1CQUFtQiwyRUFBMkUsb0NBQW9DLElBQUksSUFBSSxjQUFjLDJQQUEyUCxXQUFXLGlCQUFpQixhQUFhLGdCQUFnQix5REFBeUQsb0NBQW9DLGdGQUFnRixpREFBaUQsZ0tBQWdLLHFDQUFxQyxXQUFXLEtBQUssV0FBVyxtQ0FBbUMsMENBQTBDLDJDQUEyQyxpREFBaUQscUNBQXFDLGdEQUFnRCxxQ0FBcUMsZ0dBQWdHLDREQUE0RCxrQkFBa0IscUNBQXFDLHdDQUF3QyxxQ0FBcUMsNEZBQTRGLGdGQUFnRixFQUFFLGdEQUFnRCxzQkFBc0Isb0NBQW9DLG1DQUFtQywrQkFBK0IscUNBQXFDLHFLQUFxSyxLQUFLLFNBQVMsb0pBQW9KLGlDQUFpQyx3QkFBd0IscUdBQXFHLDBJQUEwSSx5Q0FBeUMsMkNBQTJDLGdEQUFnRCxvQ0FBb0MsMERBQTBELG9DQUFvQyxzQ0FBc0MscUNBQXFDLG9FQUFvRSw4REFBOEQseURBQXlELDBJQUEwSSxFQUFFLG1DQUFtQywrQkFBK0IsdUJBQXVCLDZGQUE2RixXQUFXLEtBQUssV0FBVyxLQUFLLGdCQUFnQixXQUFXLEtBQUssV0FBVyw0Q0FBNEMsYUFBYSxnQkFBZ0IsV0FBVyxLQUFLLFdBQVcsbUVBQW1FLCtDQUErQyxXQUFXLEtBQUssS0FBSyxnQkFBZ0IsV0FBVywwREFBMEQsOFBBQThQLGlCQUFpQixxQ0FBcUMsMElBQTBJLGtDQUFrQywyQ0FBMkMsMERBQTBELHFDQUFxQyw2SUFBNkkscUNBQXFDLHNIQUFzSCx1Q0FBdUMsU0FBUyw0QkFBNEIsd0RBQXdELHdFQUF3RSxXQUFXLGtDQUFrQyxzQ0FBc0Msb0hBQW9ILG9CQUFvQixtQ0FBbUMsb0NBQW9DLG1EQUFtRCxrQ0FBa0MsNkdBQTZHLHlDQUF5QyxPQUFPLHFCQUFxQiwrV0FBK1csc0JBQXNCLHVDQUF1QyxLQUFLLHlCQUF5Qix5TkFBeU4sZUFBZSxpRUFBaUUsdUJBQXVCLGVBQWUsb0JBQW9CLDBGQUEwRiwwREFBMEQsYUFBYSxrS0FBa0ssdUNBQXVDLHNCQUFzQixjQUFjLHNIQUFzSCxtQkFBbUIsdUNBQXVDLDJCQUEyQixvREFBb0QsNkJBQTZCLGFBQWEsNEhBQTRILGVBQWUsZ0RBQWdELDRCQUE0Qix5REFBeUQsZUFBZSxPQUFPLGlDQUFpQyxvQ0FBb0MsdUVBQXVFLDZCQUE2QiwwREFBMEQscUJBQXFCLEtBQUsscUdBQXFHLGdCQUFnQiwrRUFBK0UsbUJBQW1CLHVFQUF1RSw2R0FBNkcsNkJBQTZCLDBJQUEwSSxzQ0FBc0MsdUVBQXVFLHlCQUF5QiwwREFBMEQsaUJBQWlCLG1HQUFtRyx1QkFBdUIsbUJBQW1CLG9LQUFvSywwSUFBMEksZ0NBQWdDLG9DQUFvQyxnREFBZ0QsaUNBQWlDLG1CQUFtQixxREFBcUQsc01BQXNNLDRQQUE0UCxpQkFBaUIsb0NBQW9DLGlLQUFpSyxzQkFBc0IsOEJBQThCLHdDQUF3Qyx3Q0FBd0Msb0NBQW9DLGdNQUFnTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsV0FBVyxLQUFLLFdBQVcsMkJBQTJCLDBEQUEwRCxRQUFRLHVDQUF1Qyx1Q0FBdUMseUJBQXlCLFdBQVcsS0FBSyxXQUFXLDJEQUEyRCxHQUFHLHNCQUFzQixxQ0FBcUMsZ0JBQWdCLFdBQVcsWUFBWSxnQ0FBZ0Msa0JBQWtCLG9DQUFvQyx5RkFBeUYsb0NBQW9DLHlGQUF5RixtQkFBbUIscUNBQXFDLG1DQUFtQywwV0FBMFcsV0FBVyx1Q0FBdUMsdUNBQXVDLHNCQUFzQix1REFBdUQsU0FBUyw0R0FBNEcsd0VBQXdFLFdBQVcsK0JBQStCLHNDQUFzQywwSkFBMEosS0FBSyxpQ0FBaUMsK0VBQStFLDBCQUEwQiw0RUFBNEUsK0xBQStMLHFEQUFxRCxFQUFFLGdEQUFnRCx3U0FBd1MsSUFBSSxjQUFjLDByQkFBMHJCLFNBQVMsNEJBQTRCLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELDBCQUEwQixjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsUUFBUSxFOzs7Ozs7Ozs7Ozs7QUNBdDRrQzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQXNDO0FBRXRDOzs7OztHQUtHO0FBQ0g7SUFBQTtRQUNJOztXQUVHO1FBQ0gsU0FBSSxHQUFXLGNBQWMsQ0FBQztRQUM5QixRQUFHLEdBQVcsV0FBVyxDQUFDO0lBK0Q5QixDQUFDO0lBL0NHOztPQUVHO0lBQ0gsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsa0RBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsRUFBRSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQ0ksSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUksS0FBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFxQixJQUFLLGVBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFHRDs7OztPQUlHO0lBQ0gsMEJBQU0sR0FBTjtRQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEdBQUc7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyRCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBTyxHQUFQLGNBQWlCLENBQUM7SUFFbEI7O09BRUc7SUFDSCwwQkFBTSxHQUFOLGNBQWdCLENBQUM7SUFFakI7O09BRUc7SUFDSCw0QkFBUSxHQUFSLGNBQWtCLENBQUM7SUFDdkIsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzdFRDtBQUFBO0FBQUE7QUFBd0M7QUFHeEM7Ozs7O0dBS0c7QUFDSDtJQU9JO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxrQ0FBUSxHQUFSLFVBQVMsU0FBbUI7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBVSxHQUFWLFVBQVcsU0FBbUI7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFNLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFLLEdBQUw7UUFBQSxpQkF1QkM7UUF0Qkcsb0RBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTTtZQUM5QixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2hDLElBQUcsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDdEIsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUNoQjtZQUVELEtBQXVCLFVBQWUsRUFBZixVQUFJLENBQUMsVUFBVSxFQUFmLGNBQWUsRUFBZixJQUFlLEVBQUU7Z0JBQXBDLElBQU0sU0FBUztnQkFDZixJQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDL0I7Z0JBRUQsSUFBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7b0JBQzdDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDekM7Z0JBRUQsU0FBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDbkQsSUFBSSxTQUFTLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07b0JBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2hFO1lBQUEsQ0FBQztZQUVGLG9EQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLG1CQUFTO1lBQzdCLElBQUksU0FBUyxDQUFDLE1BQU07Z0JBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxvQ0FBVSxHQUFsQjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxtQkFBUztnQkFDN0IsSUFBRyxTQUFTLENBQUMsTUFBTTtvQkFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU8sbUNBQVMsR0FBakI7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDMUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDVTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFdkMsMEJBQU0sQ0FBbUI7QUFFakM7SUFLSSxrQkFBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLElBQVM7UUFGaEQsU0FBSSxHQUEyQixFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLElBQTZCO1FBQzNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQixLQUFrQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO1lBQW5CLElBQU0sR0FBRztZQUNWLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsS0FBSyxJQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7UUFFRCxPQUFPLEdBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFLTSxhQUFJLEdBQVgsVUFBWSxRQUFrQztRQUE5QyxpQkFtQkM7UUFuQlcsdUNBQXlCLGNBQU8sQ0FBQyxDQUFDO1FBQzFDLCtEQUErRDtRQUMvRCxvREFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFXO1lBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxvREFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDcEQsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUMvQjtZQUVELCtDQUFNLENBQUMsSUFBSSxDQUFDLCtCQUErQixHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBQy9CLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjtnQkFFRCxJQUFHLEtBQUssS0FBSyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3BDLFFBQVEsRUFBRSxDQUFDO2lCQUNkO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxZQUFHLEdBQVYsVUFBVyxRQUFrQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRU0sa0JBQVMsR0FBaEI7UUFBQSxpQkFNQztRQUxHLE9BQVEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFpQixDQUFDLElBQUksQ0FDM0MsVUFBQyxDQUFTO1lBQ04sUUFBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUNiLENBQUMsS0FBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxLQUFLLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRHRELENBQ3NELENBQzdELENBQUM7SUFDTixDQUFDO0lBRU0sYUFBSSxHQUFYO1FBQ0ksSUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSw2Q0FBYyxDQUFDLENBQUM7UUFDekUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLElBQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsNkNBQWMsQ0FBQyxDQUFDO1FBQ3hFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVyQixJQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLDZDQUFjLENBQUMsQ0FBQztRQUN4RSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckIsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXZCLHVGQUF1RjtRQUN2RiwyQkFBMkI7UUFFM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSw2Q0FBYyxDQUFDLENBQUM7UUFDekUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLElBQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsNkNBQWMsQ0FBQyxDQUFDO1FBQ3pFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVyQixJQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLDZDQUFjLENBQUMsQ0FBQztRQUN4RSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckIsSUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLDZDQUFjLENBQUMsQ0FBQztRQUMzRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckIsSUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSw2Q0FBYyxDQUFDLENBQUM7UUFDeEUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLElBQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsOENBQWMsQ0FBQyxDQUFDO1FBQ3ZFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVyQixJQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLDhDQUFjLENBQUMsQ0FBQztRQUN4RSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckIsSUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLDhDQUFjLENBQUMsQ0FBQztRQUMzRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLFlBQUcsR0FBVixVQUFXLElBQVksRUFBRSxJQUE2QjtRQUNsRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMvQjtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFsRk0sa0JBQVMsR0FBZSxFQUFFLENBQUM7SUFtRnRDLGVBQUM7Q0FBQTtBQXRIb0I7Ozs7Ozs7Ozs7Ozs7QUNqQnJCO0FBQUEsSUFBTSxNQUFNLEdBQVUsV0FBVyxDQUFDO0FBRWxDO0lBQUE7UUFDSSxTQUFJLEdBQUc7WUFBUyxhQUFhO2lCQUFiLFVBQWEsRUFBYixxQkFBYSxFQUFiLElBQWE7Z0JBQWIsd0JBQWE7O1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUksTUFBTSx3QkFBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQztRQUVGLFlBQU8sR0FBRztZQUFTLGFBQWE7aUJBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtnQkFBYix3QkFBYTs7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBSSxNQUFNLHdCQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO1FBRUYsVUFBSyxHQUFHO1lBQVMsYUFBYTtpQkFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO2dCQUFiLHdCQUFhOztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFJLE1BQU0sa0JBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUcsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRztZQUFTLGFBQWE7aUJBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtnQkFBYix3QkFBYTs7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBSSxNQUFNLHdCQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsVUFBSyxHQUFHLFVBQVMsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUFjO1lBQ3ZELElBQU0sTUFBTSxHQUFHLFVBQVMsS0FBWSxFQUFFLE1BQWE7Z0JBQy9DLE9BQU87b0JBQ0gsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLDJCQUEyQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBcUI7aUJBQ2xIO1lBQ0wsQ0FBQztZQUVELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxzQkFBc0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLHlCQUF5QixDQUFDLENBQUM7UUFDM0osQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDO0FBRWMsbUVBQUksTUFBTSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQzVCO0FBQUE7QUFBQTtBQUEyQztBQUUzQztJQUdJLGtCQUFZLEdBQVcsRUFBRSxJQUFZO1FBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSx3REFBVSxDQUFDLFFBQVEsQ0FBQywyQ0FBd0MsSUFBSSxDQUFDLEdBQUcsOEJBQTBCLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckksQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2JPO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQU0sQ0FBbUI7QUFFakM7SUFTSSxzQkFBWSxJQUFZLEVBQUUsR0FBVztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsMEJBQUcsR0FBSCxVQUFJLFFBQTZDO1FBQTdDLHVDQUFvQyxjQUFPLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxLQUFVLEVBQUUsUUFBa0M7O1FBQWxDLHVDQUF5QixjQUFPLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxJQUFHLEtBQUssT0FBSSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sZ0JBQUcsR0FBVixVQUFXLFFBQXdCLEVBQUUsUUFBNkM7UUFBN0MsdUNBQW9DLGNBQU8sQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsR0FBRyxFQUFMLENBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxnQkFBRyxHQUFWLFVBQVcsUUFBOEIsRUFBRSxRQUFrQztRQUFsQyx1Q0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sa0JBQUssR0FBWjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUEvQk0sa0JBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsdUJBQVUsR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUQsMEJBQWEsR0FBRyxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbkUsMEJBQWEsR0FBRyxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7SUE2QjlFLG1CQUFDO0NBQUE7QUFqQ3dCO0FBbUN6QjtJQVVJLHFCQUFZLElBQVksRUFBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksUUFBNkM7UUFBN0MsdUNBQW9DLGNBQU8sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQseUJBQUcsR0FBSCxVQUFJLEtBQVUsRUFBRSxRQUFrQzs7UUFBbEMsdUNBQXlCLGNBQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLElBQUcsS0FBSyxPQUFJLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSxlQUFHLEdBQVYsVUFBVyxRQUF1QixFQUFFLFFBQTZDO1FBQTdDLHVDQUFvQyxjQUFPLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sZUFBRyxHQUFWLFVBQVcsUUFBOEIsRUFBRSxRQUFrQztRQUFsQyx1Q0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0saUJBQUssR0FBWjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFoQ00seUJBQWEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUQsOEJBQWtCLEdBQUcsSUFBSSxXQUFXLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pFLGtDQUFzQixHQUFHLElBQUksV0FBVyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDN0Usb0JBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkQsc0JBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUE2QnBFLGtCQUFDO0NBQUE7QUFsQ3VCO0FBb0N4QjtJQUVJLHdCQUFZLE9BQVk7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixRQUFtQjtRQUFyQyxpQkFnQkM7UUFmRyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBTTtZQUNqQyxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1RCxJQUFHLFlBQVksS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxZQUFZLEVBQUU7Z0JBQzNFLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7O29CQUNqRCxZQUFZLENBQUMsR0FBRyxXQUFFLEdBQUMsR0FBRyxJQUFHLElBQUksTUFBRSxDQUFDO2dCQUNwQyxDQUFDLENBQUM7Z0JBRUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVzs7b0JBQ2hELFdBQVcsQ0FBQyxHQUFHLFdBQUUsR0FBQyxHQUFHLElBQUcsSUFBSSxNQUFFLENBQUM7Z0JBQ25DLENBQUMsQ0FBQzthQUNMO1lBRUQsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEdEO0FBQUE7SUFNSTtJQUNBLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDO0lBQ2xELENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBQ0ksT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsd0JBQVMsR0FBVDtRQUNJLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZGLENBQUM7SUFFRCw4QkFBZSxHQUFmO1FBQ0ksT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHdCQUFTLEdBQVQsVUFBVSxVQUFrQjtRQUN4QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7QUFDYyxtRUFBSSxJQUFJLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hDMUI7QUFBQTtBQUFBO0FBQThCO0FBRTlCO0lBS0kscUJBQVksR0FBVztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLFFBQWlDO1FBQ3JDLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNmLCtDQUFNLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7WUFDMUQsT0FBTztTQUNWO1FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztZQUNwQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO29CQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDL0MsSUFBRyxRQUFRO3dCQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2pDO3FCQUNJO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QiwrQ0FBTSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3RFO2FBQ0o7UUFDTCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QiwrQ0FBTSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLCtDQUFNLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsUUFBb0M7UUFDMUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUR3QztBQUNWO0FBQ1E7QUFDRztBQUNmO0FBRW5CLDBCQUFNLENBQW1CO0FBRWpDOzs7Ozs7R0FNRztBQUNIO0lBQXVDLHFDQUFTO0lBZ0I1QztRQUFBLFlBQ0ksaUJBQU8sU0FjVjtRQTlCRDs7V0FFRztRQUNILFNBQUcsR0FBVyxxQkFBcUIsQ0FBQztRQU9wQzs7V0FFRztRQUNILGNBQVEsR0FBWSxLQUFLLENBQUM7UUE0RjFCLGlEQUFpRDtRQUNqRCxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQXhGekIsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDO1FBRWxCLHVHQUF1RztRQUN2RyxNQUFNLENBQUMsZ0JBQWdCLENBQ25CLGtCQUFrQixFQUNsQixVQUFTLEtBQVk7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMzQjtRQUNMLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQzs7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQU8sR0FBUDtRQUNJLCtDQUFNLENBQUMsU0FBUyxDQUNaLGtEQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUN6RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscURBQVEsQ0FDdEIsSUFBSSxFQUNKLGtEQUFRLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLEVBQ3pELElBQUksQ0FBQyxFQUFFLENBQ1YsQ0FBQztJQUNOLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdDQUFZLEdBQVo7UUFDSSxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ2hFLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNuQyxnQ0FBZ0MsQ0FDbkMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNoQixrREFBUSxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUM5RCxDQUFDO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNoQixrREFBUSxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUM1RCxDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBS0Q7Ozs7T0FJRztJQUNILG9DQUFRLEdBQVI7UUFBQSxpQkFrQ0M7UUFqQ0cseUNBQXlDO1FBQ3pDLElBQUksNkNBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSw2Q0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBRXRDLDhEQUE4RDtZQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNoQiwwQkFBMEI7Z0JBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFFdEIsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNsQiw2QkFBNkI7Z0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO29CQUNmLG9EQUFvRDtvQkFDcEQsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ25CLE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs0QkFDekMsSUFBSSxNQUFJLENBQUMsUUFBUSxFQUFFO2dDQUNmLE1BQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs2QkFDdkI7aUNBQU07Z0NBQ0gsTUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOzZCQUN4Qjs0QkFDRCxNQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3FCQUMzQjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNsQztTQUNKO2FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQ0FySnNDLG9EQUFTLEdBcUovQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS3dDO0FBQ1Y7QUFDSjtBQUNFO0FBQ1U7QUFFdkM7Ozs7OztHQU1HO0FBQ0g7SUFBMkIseUJBQVM7SUFXaEM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFkRDs7V0FFRztRQUNILFNBQUcsR0FBVyxPQUFPLENBQUM7UUFVbEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDZCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx1QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUUxQiwrQ0FBTSxDQUFDLFNBQVMsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsK0NBQU0sQ0FBQyxTQUFTLENBQUMsa0RBQVEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdCQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLDBDQUEwQztRQUMxQyxJQUFHLDZDQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDZixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztZQUVELElBQU0sTUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM3QyxNQUFNLENBQUMscUJBQXFCLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQUksQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBckUwQixvREFBUyxHQXFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGd0M7QUFDVjtBQUVHO0FBRUU7QUFDRTtBQUVDO0FBQ0c7QUFDSztBQUUvQyxJQUFNLE1BQU0sR0FBSSxNQUFjLENBQUMsTUFBTSxDQUFDO0FBRXRDOzs7Ozs7R0FNRztBQUNIO0lBQWdDLDhCQUFTO0lBMEJyQyxvQkFBWSxHQUFVLEVBQUUsUUFBa0I7UUFBMUMsWUFDSSxpQkFBTyxTQUlWO1FBOUJEOztXQUVHO1FBQ0gsU0FBRyxHQUFXLGFBQWEsQ0FBQztRQUU1Qjs7V0FFRztRQUNILFdBQUssR0FBVyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBb0I1QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwrQkFBVSxHQUFWLFVBQVcsUUFBa0M7UUFBN0MsaUJBS0M7UUFMVSx1Q0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDekMscURBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBVztZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILCtCQUFVLEdBQVYsVUFBVyxRQUFrQztRQUFsQyx1Q0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDekMscURBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw0QkFBTyxHQUFQO1FBQUEsaUJBOERDO1FBN0RHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FDWCxJQUFJLCtDQUFLLENBQ0wsSUFBSSxDQUFDLElBQUksRUFDVCx1TkFJaUMsS0FBSyxDQUFDLFNBQVMsV0FBSyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUVBQzdDLEtBQUssQ0FBQyxHQUFHLFdBQUssa0RBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1FQUNqQyxLQUFLLENBQUMsSUFBSSxXQUFLLGtEQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx1SkFHdkIsa0RBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLDhGQUU1QixJQUFJLENBQUMsRUFBRSwyQ0FBc0Msa0RBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsMkJBQ3hILEVBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQ2hCO1lBQ0ksUUFBUSxFQUFFLFVBQUMsR0FBUztnQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBRWhHLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ1oscURBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGdCQUFNO3dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUVyQixJQUFHLE1BQU0sQ0FBQyxVQUFVLEtBQUssMkRBQVUsQ0FBQyxNQUFNLEVBQUU7NEJBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFFdEIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBZ0IsQ0FBQzs0QkFDaEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3lCQUNuQzt3QkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVCLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsUUFBUSxFQUFFLFVBQUMsR0FBUztnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDO1NBQ0osQ0FDSixDQUNKLENBQUM7UUFFRiwrQ0FBTSxDQUFDLFNBQVMsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxtQkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRCxRQUFRLEtBQUssRUFBRTtZQUNmLEtBQUssS0FBSyxDQUFDLEdBQUc7Z0JBQ1YsTUFBTSxDQUFDLFNBQVMsR0FBRyw0SEFFbEIsQ0FBQztnQkFDRixNQUFNO1lBRVYsS0FBSyxLQUFLLENBQUMsSUFBSTtnQkFDWCxNQUFNLENBQUMsU0FBUyxHQUFHLGdKQUVsQixDQUFDO2dCQUNGLE1BQU07WUFFVixLQUFLLEtBQUssQ0FBQyxTQUFTO2dCQUNoQixNQUFNLENBQUMsU0FBUyxHQUFHLHVHQUVsQixDQUFDO2dCQUNGLE1BQU07WUFFVjtnQkFDSSxNQUFNLENBQUMsU0FBUyxHQUFHLHVHQUVsQixDQUFDO2dCQUNGLE1BQU07U0FDVDtRQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLCtDQUFNLENBQUMsU0FBUyxDQUFDLGtEQUFRLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxDQXBMK0Isb0RBQVMsR0FvTHhDOztBQUVEOzs7OztHQUtHO0FBQ0g7SUFBQTtJQWVBLENBQUM7SUFkRzs7T0FFRztJQUNJLGVBQVMsR0FBRyxDQUFDLENBQUM7SUFFckI7O09BRUc7SUFDSSxTQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRWY7O09BRUc7SUFDSSxVQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLFlBQUM7Q0FBQTtBQWZpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pOdUI7QUFDVjtBQUVRO0FBRVc7QUFDWjtBQUVDO0FBQ0c7QUFFMUMsSUFBTSxNQUFNLEdBQUksTUFBYyxDQUFDLE1BQU0sQ0FBQztBQUV0Qzs7Ozs7O0dBTUc7QUFDSDtJQUFxQyxtQ0FBUztJQTBCMUMseUJBQVksR0FBVSxFQUFFLFFBQWtCO1FBQTFDLFlBQ0ksaUJBQU8sU0FNVjtRQWhDRDs7V0FFRztRQUNILFNBQUcsR0FBVyxrQkFBa0IsQ0FBQztRQUVqQzs7V0FFRztRQUNILGdCQUFVLEdBQVcsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQW9CdEMsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9DQUFVLEdBQVYsVUFBVyxRQUFrQztRQUE3QyxpQkFLQztRQUxVLHVDQUF5QixjQUFPLENBQUMsQ0FBQztRQUN6QyxxREFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFXO1lBQ3BDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9DQUFVLEdBQVYsVUFBVyxRQUFrQztRQUFsQyx1Q0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDekMscURBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQU8sR0FBUDtRQUFBLGlCQW9EQztRQW5ERyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQ1gsSUFBSSwrQ0FBSyxDQUNMLElBQUksQ0FBQyxJQUFJLEVBQ1QsNE5BSWlDLFVBQVUsQ0FBQyxTQUFTLFdBQUssa0RBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLG1FQUNsRCxVQUFVLENBQUMsTUFBTSxXQUFLLGtEQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtRUFDeEMsVUFBVSxDQUFDLEdBQUcsV0FBSyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsdUpBRzVCLGtEQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyw4RkFHaEMsa0RBQVEsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsMkJBQ3RFLEVBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQ2hCO1lBQ0ksUUFBUSxFQUFFLFVBQUMsR0FBUztnQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBRXJHLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFakQsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ1osS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7WUFFRCxRQUFRLEVBQUUsVUFBQyxHQUFTO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaURBQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDckcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7U0FDSixDQUNKLENBQ0osQ0FBQztRQUVGLCtDQUFNLENBQUMsU0FBUyxDQUFDLGtEQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLDZCQUFhLEdBQXBCLFVBQXFCLFVBQWtCO1FBQ25DLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLEtBQUssQ0FBQztRQUNWLFFBQVEsVUFBVSxFQUFFO1lBQ2hCLEtBQUssVUFBVSxDQUFDLE1BQU07Z0JBQ2xCLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDZCxNQUFNO1lBRVYsS0FBSyxVQUFVLENBQUMsR0FBRztnQkFDZixLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNiLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsTUFBTTtZQUVWLEtBQUssVUFBVSxDQUFDLFNBQVM7Z0JBQ3JCLE9BQU87WUFFWDtnQkFDSSxPQUFPO1NBQ2Q7UUFFRCxNQUFNLENBQUMsU0FBUyxHQUFHLCtFQUMrQyxLQUFLLHVGQUNKLE1BQU0saUZBQ1osS0FBSyxrRkFDSixNQUFNLG1CQUNuRSxDQUFDO1FBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLCtDQUFNLENBQUMsU0FBUyxDQUFDLGtEQUFRLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQ0F4S29DLG9EQUFTLEdBd0s3Qzs7QUFFRDs7Ozs7R0FLRztBQUNIO0lBQUE7SUFlQSxDQUFDO0lBZEc7O09BRUc7SUFDSSxvQkFBUyxHQUFHLENBQUMsQ0FBQztJQUVyQjs7T0FFRztJQUNJLGlCQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWxCOztPQUVHO0lBQ0ksY0FBRyxHQUFHLENBQUMsQ0FBQztJQUNuQixpQkFBQztDQUFBO0FBZnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTWtCO0FBQ1Y7QUFDSjtBQUNVO0FBRUM7QUFFbUI7QUFDbEI7QUFDRTtBQUNGO0FBRUw7QUFFNUIsZUFBaUMsRUFBL0Isa0JBQU0sRUFBRSxnQkFBdUIsQ0FBQztBQUV4Qzs7Ozs7O0dBTUc7QUFDSDtJQUFtQyxpQ0FBUztJQWtFeEMsdUJBQVksUUFBa0IsRUFBRSxRQUFxQixFQUFFLE9BQW9CLEVBQUUsS0FBWTtRQUF6RixZQUNJLGlCQUFPLFNBY1Y7UUFoRkQ7O1dBRUc7UUFDSCxTQUFHLEdBQVcsZ0JBQWdCLENBQUM7UUFFL0I7O1dBRUc7UUFDSCxXQUFLLEdBQVEsRUFBRSxDQUFDO1FBNERaLDBDQUEwQztRQUMxQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixnQ0FBZ0M7UUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsZ0NBQWdDO1FBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx5Q0FBaUIsR0FBakI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ3hCLENBQUMsRUFBRSxDQUFDO2dCQUNKLElBQU0sT0FBTyxHQUFHLElBQWUsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUVuRCxJQUFJLENBQUMsS0FBSyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDN0IsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDcEI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILCtCQUFPLEdBQVAsVUFBUSxJQUFhO1FBQ2pCLE9BQU8sSUFBSTthQUNOLFlBQVksQ0FBQyxPQUFPLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNkLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHFDQUFhLEdBQWIsVUFBYyxPQUFnQixFQUFFLElBQVk7UUFBNUMsaUJBK0VDO1FBOUVHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRXJDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFcEMscUJBQXFCO1FBQ3JCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUVsQyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFbkUsNkJBQTZCO1FBQzdCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUMxRCxVQUFVLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUVwQyw2QkFBNkI7UUFDN0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBRXBDLGlFQUFpRTtRQUNqRSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QiwyRkFBMkY7UUFDM0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDeEM7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsMkVBQTJFO1FBQzNFLDREQUE0RDtRQUM1RCxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25GLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGlCQUFlLE9BQU8sQ0FBQyxXQUFXO1lBQ2xFLENBQUMsWUFBTyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsT0FBSSxDQUFDO1FBRXpDLDhCQUE4QjtRQUM5QixVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBRXpDLDJDQUEyQztZQUMzQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNwQztpQkFBTTtnQkFDSCw0QkFBNEI7Z0JBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtEQUFRLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ25DO1lBRUQsK0JBQStCO1lBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksa0RBQVEsQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakYsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsc0lBRTZDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0tBRXhFLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDM0UsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxrQ0FBVSxHQUFWLFVBQVcsT0FBZ0IsRUFBRSxJQUFhLEVBQUUsT0FBZ0I7UUFDeEQsb0JBQW9CO1FBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsb0JBQW9CO1FBQ3BCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQzlCLGdDQUFnQyxDQUNwQixDQUFDO1FBRWpCLCtCQUErQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDM0IseUNBQXlDO1lBQ3pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxrRUFBa0U7Z0JBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7Z0JBRWxDLHFDQUFxQztnQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNILGVBQWU7Z0JBQ2Ysc0NBQXNDO2dCQUN0QyxJQUFJLE9BQU8sRUFBRTtvQkFDVCx5QkFBeUI7b0JBQ3pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUVqQywwQkFBMEI7b0JBQzFCLFVBQVUsQ0FBQzt3QkFDUCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNaO3FCQUFNO29CQUNILFlBQVk7b0JBQ1osNEJBQTRCO29CQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbkM7YUFDSjtTQUNKO2FBQU07WUFDSCx5QkFBeUI7WUFDekIsc0ZBQXNGO1lBQ3RGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFbkUsOENBQThDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBYyxHQUFkO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxrQ0FBVSxHQUFWLFVBQVcsUUFBOEI7UUFBekMsaUJBMEJDO1FBMUJVLG9EQUE2QixDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsUUFBUSxFQUFFLENBQUM7U0FDZDtRQUVELG9EQUFXLENBQUMsR0FBRyxDQUNYO1lBQ0ksb0RBQVcsQ0FBQyxhQUFhO1lBQ3pCLG9EQUFXLENBQUMsa0JBQWtCO1lBQzlCLG9EQUFXLENBQUMsc0JBQXNCO1NBQ3JDLEVBQ0QsVUFBQyxNQUFXO1lBQ1IsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsb0RBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsb0RBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM5RyxLQUFJLENBQUMsS0FBSztnQkFDTixNQUFNLENBQUMsb0RBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUztvQkFDL0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvREFBVyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsS0FBSSxDQUFDLFNBQVM7Z0JBQ1YsTUFBTSxDQUFDLG9EQUFXLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUztvQkFDeEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvREFBVyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQztvQkFDaEQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFFbkMsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrQ0FBVSxHQUFWLFVBQVcsUUFBOEI7O1FBQTlCLG9EQUE2QixDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxPQUFPO1NBQ1Y7UUFFRCxvREFBVyxDQUFDLEdBQUc7WUFFUCxHQUFDLG9EQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBRyxJQUFJLENBQUMsS0FBSztZQUMzQyxHQUFDLG9EQUFXLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2hELEdBQUMsb0RBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLElBQUcsSUFBSSxDQUFDLFNBQVM7aUJBRTVELFFBQVEsQ0FDWCxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsK0NBQU0sQ0FBQyxTQUFTLENBQ1osa0RBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQ3pELENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDBDQUFrQixHQUFsQjtRQUFBLGlCQXNCQztRQXJCRyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7WUFDM0QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUVILDBGQUEwRjtRQUMxRixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNwQyxLQUFJLENBQUMsT0FBTyxHQUFJLEtBQUksQ0FBQyxRQUFnQixDQUFDLE9BQU8sQ0FBQztZQUM5QyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDbkMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FDekMsQ0FBQztRQUNGLDRCQUE0QjtRQUM1QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkI7UUFDSSxJQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FDekMsQ0FBQztRQUVGLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxTQUFTLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUM7YUFDN0M7U0FDSjtRQUVELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFHRCwyQ0FBbUIsR0FBbkI7UUFDSSxJQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FDekMsQ0FBQztRQUVGLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0RjtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsUUFBUTthQUNILGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsTUFBTSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDaEMsK0NBQU0sQ0FBQyxTQUFTLENBQ1osa0RBQVEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQzFELENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlDQUFTLEdBQVQ7UUFDSSxJQUFJLEdBQUcsR0FBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQWUsQ0FBQyxHQUFHLENBQ25ELFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxhQUFhLEVBQWYsQ0FBZSxDQUN6QixDQUFDLENBQUMsK0JBQStCO1FBQ2xDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBUSxDQUFDLENBQUM7UUFFekQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxTQUFTLEVBQUU7WUFDN0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtRQUVELEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQ1gsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdDQUFRLEdBQVI7UUFDSSxJQUFJLDZDQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV0QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsU0FBUztvQkFBRSxPQUFPO2dCQUV2QixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyw0TUFLRixXQUFXLENBQUMsTUFBTSxXQUFLLGtEQUFRLENBQUMsR0FBRyxDQUN4RCx1QkFBdUIsQ0FDMUIsMkRBRVcsV0FBVyxDQUFDLFlBQVksV0FDdkIsa0RBQVEsQ0FBQyxHQUFHLENBQ3JCLDZCQUE2QixDQUNoQywyREFDd0IsV0FBVyxDQUFDLE1BQU0sV0FBSyxrREFBUSxDQUFDLEdBQUcsQ0FDeEQsdUJBQXVCLENBQzFCLGlGQUVlLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDekIsWUFBWSxtR0FDbkIsQ0FBQztnQkFFSTs7OzRCQUtNLEVBTEosa0JBQU0sRUFBRSxzQkFLSixDQUFDO2dCQUNiLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFdEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBRXpCLGdEQUFnRDtnQkFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFNLENBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUN0QyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQ3RDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUM3QjtTQUNKO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQXJma0Msb0RBQVMsR0FxZjNDOztBQUVEOzs7OztHQUtHO0FBQ0g7SUFBQTtJQW9GQSxDQUFDO0lBM0RHOzs7Ozs7O09BT0c7SUFDSSxxQkFBUyxHQUFoQixVQUFpQixLQUFrQjtRQUMvQixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssSUFBSSxDQUFDLE1BQU07Z0JBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRTNCLEtBQUssSUFBSSxDQUFDLFlBQVk7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRWpDLEtBQUssSUFBSSxDQUFDLE1BQU07Z0JBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNZLHNCQUFVLEdBQXpCLFVBQTBCLENBQU0sRUFBRSxDQUFNO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNZLDRCQUFnQixHQUEvQixVQUFnQyxDQUFNLEVBQUUsQ0FBTTtRQUMxQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUMsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRWMsc0JBQVUsR0FBekIsVUFBMEIsQ0FBTSxFQUFFLENBQU07UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWxGRDs7Ozs7T0FLRztJQUNJLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWxCOzs7OztPQUtHO0lBQ0ksd0JBQVksR0FBRyxDQUFDLENBQUM7SUFFeEI7Ozs7O09BS0c7SUFDSSxrQkFBTSxHQUFHLENBQUMsQ0FBQztJQTZEdEIsa0JBQUM7Q0FBQTtBQXBGdUI7QUFzRnhCOzs7OztHQUtHO0FBQ0gsSUFBWSxjQUdYO0FBSEQsV0FBWSxjQUFjO0lBQ3RCLDZEQUFTO0lBQ1QsK0RBQVU7QUFDZCxDQUFDLEVBSFcsY0FBYyxLQUFkLGNBQWMsUUFHekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25uQndDO0FBQ1Y7QUFDSjtBQUNlO0FBQ007QUFDVjtBQUV0Qyw4Q0FBOEM7QUFDOUMsYUFBYTtBQUN5QztBQUNPO0FBQ3RCO0FBQ0c7QUFFcEMsZUFBK0MsRUFBN0Msa0JBQU0sRUFBRSx3Q0FBcUMsQ0FBQztBQUV0RDs7Ozs7O0dBTUc7QUFDSDtJQUFvQyxrQ0FBUztJQW9DekM7UUFBQSxZQUNJLGlCQUFPLFNBUVY7UUE1Q0Q7O1dBRUc7UUFDSCxTQUFHLEdBQVcsaUJBQWlCLENBQUM7UUFzQmhDOztXQUVHO1FBQ0gsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4Qjs7V0FFRztRQUNILGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBYTdCOztXQUVHO1FBQ0gsYUFBTyxHQUFRLEVBQUUsQ0FBQztRQVhkLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUV6RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7WUFDMUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzs7SUFDTixDQUFDO0lBT0Q7Ozs7T0FJRztJQUNILGlDQUFRLEdBQVI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJEQUFXLENBQzVCLGtEQUFRLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEVBQ3BDLCtJQUM4SCxJQUFJLENBQUMsRUFBRSx1QkFBa0Isa0RBQVEsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsa0RBRW5NLGtEQUFRLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLG1DQUMzQyxJQUFJLENBQUMsRUFBRSxzQ0FDaEIsRUFDRCxJQUFJLENBQUMsRUFBRSxDQUNWLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFdEUsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscURBQVEsQ0FBQyxJQUFJLEVBQUUsa0RBQVEsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRXBHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBYSxHQUFiO1FBQ0ksNkNBQUksQ0FBQyxTQUFTLENBQUMsbUVBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLDZDQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxxQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsNkNBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxtQ0FBVSxHQUFWLFVBQVcsUUFBa0M7UUFBN0MsaUJBT0M7UUFQVSx1Q0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDekMscURBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBVztZQUN2QyxJQUFHLE1BQU0sQ0FBQyxxREFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscURBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7WUFDRCxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG1DQUFVLEdBQVYsVUFBVyxRQUFrQztRQUFsQyx1Q0FBeUIsY0FBTyxDQUFDLENBQUM7UUFDekMscURBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1g7Z0JBQ0ksRUFBRSxFQUFFLE1BQU07Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLGtEQUFRLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDO2FBQ25EO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxrREFBUSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQzthQUN6RDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxLQUFLO2dCQUNULE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxrREFBUSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQzthQUNsRDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxTQUFTO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxrREFBUSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQzthQUN0RDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxPQUFPO2dCQUNYLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxrREFBUSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQzthQUNwRDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxTQUFTO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxrREFBUSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQzthQUN0RDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxrREFBUSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQzthQUM5RDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxrREFBUSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQzthQUM5RDtZQUNEO2dCQUNJLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsa0RBQVEsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUM7YUFDM0Q7WUFDRDtnQkFDSSxFQUFFLEVBQUUscUJBQXFCO2dCQUN6QixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsa0RBQVEsQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUM7YUFDbEU7WUFDRDtnQkFDSSxFQUFFLEVBQUUsZUFBZTtnQkFDbkIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLGtEQUFRLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDO2FBQzVEO1NBQ0osQ0FBQztRQUVGLCtDQUFNLENBQUMsU0FBUyxDQUFDLGtEQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsNkNBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUzQywrQ0FBTSxDQUFDLFNBQVMsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQWEsR0FBYjtRQUNJLDZDQUFJLENBQUMsU0FBUyxDQUFDLGtDQUFnQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBRyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQ0FBUSxHQUFSO1FBQUEsaUJBeUVDO1FBeEVHLHNEQUFzRDtRQUN0RCxJQUFJLDZDQUFJLENBQUMsVUFBVSxFQUFFLElBQUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNoQixJQUFNLE1BQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLDZDQUFJLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO29CQUNuQiw2Q0FBSSxDQUFDLFNBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUM7d0NBQ3ZELENBQUM7b0JBQ0wsSUFBTSxJQUFJLEdBQUcsT0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTdCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXBDLHlMQUEyRyxFQUExRyxrQkFBTSxFQUFFLHNCQUFrRyxDQUFDO29CQUNsSCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO29CQUUzRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV2QixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ2hDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUNyQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBTSxDQUFDLENBQUM7OztnQkFoQm5CLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQW5DLENBQUM7aUJBaUJSO2dCQUVELElBQU0sY0FBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQztnQkFDeEUsY0FBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFekQsY0FBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDbkMsSUFBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsY0FBWSxDQUFDLFNBQVMsR0FBRyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO3FCQUMvRTt5QkFDSTt3QkFDRCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLGNBQVksQ0FBQyxTQUFTLEdBQUcsa0RBQVEsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztxQkFDL0U7b0JBQ0QsY0FBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2YsTUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUN6QyxNQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQzthQUNOO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNsQztTQUNKO2FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO2FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNuQztRQUVELElBQUcsQ0FBQyw2Q0FBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUNBQWlDLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBblRtQyxvREFBUyxHQW1UNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVVzQztBQUNaO0FBRTNCO0lBQUE7SUFHQSxDQUFDO0lBRlUsZ0JBQU8sR0FBVyxPQUFPLENBQUM7SUFDMUIsY0FBSyxHQUFXLFVBQVUsQ0FBQztJQUN0QyxlQUFDO0NBQUE7QUFIb0I7QUFLckI7SUFBd0Msc0NBQVM7SUFBakQ7UUFBQSxxRUE4RUM7UUE1RUcsU0FBRyxHQUFZLHNCQUFzQixDQUFDOztJQTRFMUMsQ0FBQztJQXhFRzs7T0FFRztJQUNILG9DQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUNBQVEsR0FBUjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBRWpCLElBQUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBTSxLQUFLLEdBQXFCLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0UsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7aUJBQ3pFO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN0RTtTQUNKO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaURBQW9CLEdBQXBCLFVBQXFCLEtBQW9CO1FBQ3JDLElBQUksT0FBZ0IsQ0FBQztRQUNyQixRQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDakIsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLE1BQU07WUFFVixLQUFLLFFBQVEsQ0FBQyxLQUFLO2dCQUNmLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN4QixNQUFNO1lBRVY7Z0JBQ0ksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLE1BQU07U0FDYjtRQUVELElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2pDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBWTtnQkFDckQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUMvQyxpQkFBaUI7b0JBQ2pCLElBQUk7b0JBQ0osU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLFdBQVcsRUFBRSxLQUFLO29CQUVsQixjQUFjO29CQUNkLElBQUksRUFBRSxJQUFJO29CQUVWLFlBQVk7b0JBQ1osT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLFFBQVEsRUFBRSxJQUFJO2lCQUNqQixDQUFDLENBQUMsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLENBOUV1QyxvREFBUyxHQThFaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZ3QztBQUNWO0FBQ0o7QUFFSTtBQUNRO0FBRXZDOzs7Ozs7R0FNRztBQUNIO0lBQTZCLDJCQUFTO0lBK0JsQyxpQkFBWSxRQUFxQixFQUFFLE9BQW9CO1FBQXZELFlBQ0ksaUJBQU8sU0FJVjtRQW5DRDs7V0FFRztRQUNILFNBQUcsR0FBVyxTQUFTLENBQUM7UUFpQnhCOztXQUVHO1FBQ0gsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekI7O1dBRUc7UUFDSCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBS1QsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsK0JBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx5QkFBTyxHQUFQO1FBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxNQUFNLEVBQUUsMENBQTBDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlJLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsOEJBQVksR0FBWjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR0Q7Ozs7OztPQU1HO0lBQ0gsMEJBQVEsR0FBUixVQUFTLE1BQWM7UUFDbkIsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXZCLCtDQUErQztRQUMvQyw0REFBNEQ7UUFDNUQsSUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVoRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN4QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDcEM7U0FDSjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gseUJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRTFCLCtDQUFNLENBQUMsU0FBUyxDQUFDLGtEQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QiwrQ0FBTSxDQUFDLFNBQVMsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMEJBQVEsR0FBUjtRQUNJLElBQUcsNkNBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNmLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNaLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBRXJFLElBQUcsV0FBVyxLQUFLLElBQUk7d0JBQUUsT0FBTztvQkFFaEMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFFL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsK0JBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1IQUdYLE1BQU0sZ0JBQVcsa0RBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsNERBRTdELENBQUM7aUJBQ0w7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLENBNUo0QixvREFBUyxHQTRKckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUt3QztBQUNWO0FBQ0o7QUFDUTtBQUVJO0FBRXZDOzs7Ozs7R0FNRztBQUNIO0lBQWlDLCtCQUFTO0lBb0N0QyxxQkFBWSxRQUFxQixFQUFFLE9BQW9CO1FBQXZELFlBQ0ksaUJBQU8sU0FHVjtRQXZDRDs7V0FFRztRQUNILFNBQUcsR0FBVyxjQUFjLENBQUM7UUFzQjdCOztXQUVHO1FBQ0gsV0FBSyxHQUFrQixFQUFFLENBQUM7UUFTdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQWEsR0FBYjtRQUFBLGlCQTZDQztRQTVDRyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsdUZBRWlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQVksSUFBSSxDQUFDLEVBQUUsMEVBRTVGLElBQUksQ0FBQyxFQUFFLDZDQUduQyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO1lBQ2pDLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVuQyxJQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxTQUFTLEdBQUcsbVFBTW5CO1lBRUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUMsSUFBSSxHQUFHLEdBQUcsMkJBQWtDLENBQUM7WUFDN0MsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3pDLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckU7WUFDRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1lBRXZILEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBUyxHQUFUO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFFLEtBQUksQ0FBQyxXQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsNEJBQU0sR0FBTixVQUFPLEtBQWE7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDZCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsK0NBQU0sQ0FBQyxTQUFTLENBQUMsa0RBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLCtDQUFNLENBQUMsU0FBUyxDQUFDLGtEQUFRLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSO1FBQ0ksSUFBRyw2Q0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2pCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFekQsSUFBRyxTQUFTLEtBQUssSUFBSTtvQkFBRSxPQUFPO2dCQUU5QixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFaEMsSUFBTSxlQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQ3BCLGVBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRWhDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUVoRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBRTFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQWhMZ0Msb0RBQVMsR0FnTHpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUx3QztBQUNWO0FBQ0o7QUFDZTtBQUVNO0FBQ25CO0FBQ0s7QUFDTDtBQUNNO0FBQ0k7QUFFdkMsSUFBTSxNQUFNLEdBQVMsTUFBYyxDQUFDLE1BQU0sQ0FBQztBQUUzQzs7Ozs7O0dBTUc7QUFDSDtJQUEyQix5QkFBUztJQTBEaEM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUEzREQ7O1dBRUc7UUFDSCxTQUFHLEdBQVcsUUFBUSxDQUFDO1FBaUJ2Qjs7V0FFRztRQUNILFVBQUksR0FBWSxFQUFFLENBQUM7UUFFbkI7O1dBRUc7UUFDSCxjQUFRLEdBQWE7WUFDakIsb0hBQW9IO1lBQ3BILDhCQUE4QjtZQUM5QixpQ0FBaUM7WUFDakMsK0RBQStEO1lBQy9ELHlDQUF5QztZQUN6Qyw2QkFBNkI7WUFDN0Isd0NBQXdDO1lBQ3hDLDRCQUE0QjtZQUM1QixtRkFBbUY7WUFDbkYsMkRBQTJEO1lBQzNELDhCQUE4QjtZQUM5QixnQ0FBZ0M7WUFDaEMscURBQXFEO1lBQ3JELDZCQUE2QjtZQUM3Qix5Q0FBeUM7WUFDekMsb0VBQW9FO1lBQ3BFLHdCQUF3QjtZQUN4QiwrQ0FBK0M7WUFDL0MsdUJBQXVCO1lBQ3ZCLDRCQUE0QjtZQUM1Qix1Q0FBdUM7WUFDdkMsc0VBQXNFO1lBQ3RFLCtDQUErQztZQUMvQyx3QkFBd0I7WUFDeEIsc0NBQXNDO1lBQ3RDLDhCQUE4QjtTQUNqQyxDQUFDOztJQUlGLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSwyREFBVyxDQUM1QixTQUFTLEVBQ1QseU1BTVksSUFBSSxDQUFDLFFBQVEsQ0FDVCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUNuRCx5Q0FHWixFQUNELElBQUksQ0FBQyxFQUFFLENBQ1YsQ0FBQztRQUVGLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHFEQUFRLENBQUMsSUFBSSxFQUFFLGtEQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwwQkFBVSxHQUFWLFVBQVcsTUFBZ0I7UUFBM0IsaUJBV0M7UUFWRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFHO1lBQ2pCLElBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyQztpQkFDSSxJQUFHLE1BQU0sRUFBRTtnQkFDWixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDaEI7WUFDRCxDQUFDLEVBQUU7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMEJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQUcsSUFBSSxVQUFHLENBQUMsTUFBTSxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQkFBTSxHQUFOLFVBQU8sR0FBVTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gseUJBQVMsR0FBVDtRQUNJLEtBQWlCLFVBQVMsRUFBVCxTQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTLEVBQUU7WUFBeEIsSUFBTSxHQUFHO1lBQ1QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsdUJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQiwrQ0FBTSxDQUFDLFNBQVMsQ0FBQyxrREFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBRztZQUNqQixHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsK0NBQU0sQ0FBQyxTQUFTLENBQUMsa0RBQVEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdCQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2Qkcsc0RBQXNEO1FBQ3RELElBQUksNkNBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRCLElBQU0sTUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2YsTUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUN6QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0QixNQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQzthQUNOO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNsQztTQUNKO2FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBdk0wQixvREFBUyxHQXVNbkM7Ozs7Ozs7Ozs7Ozs7QUM1TkQsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxpT0FBMkc7O0FBRTdJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsMk9BQWdIOztBQUVsSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7OztBQ3BCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLHFQQUFxSDs7QUFFdko7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxpUEFBbUg7O0FBRXJKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsbVBBQW9IOztBQUV0Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7OztBQ3BCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLHFPQUE2Rzs7QUFFL0k7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyw2T0FBaUg7O0FBRW5KOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsaU9BQTJHOztBQUU3STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0o7QUFDRzs7QUFFdUI7QUFDVjtBQUNBO0FBQ1U7QUFDVTtBQUNEO0FBQ3BCO0FBQ2tCO0FBQ2Y7QUFDVztBQUNSO0FBQ1Q7QUFDNkI7QUFDRTtBQUMxQjtBQUNOO0FBQ0Y7QUFDRzs7QUFFdEM7QUFDQSxtREFBUTtBQUNSLG1EQUFROztBQUVSLDJCQUEyQix3REFBYyxDQUFDLDJDQUFPO0FBQ2pEOztBQUVBLG1CQUFtQixnRUFBZTtBQUNsQyxxQkFBcUIscURBQVE7QUFDN0Isa0JBQWtCLGdEQUFLO0FBQ3ZCLGdCQUFnQix1REFBSzs7QUFFckIscUJBQXFCLHlEQUFXO0FBQ2hDLG9CQUFvQix5REFBVztBQUMvQjtBQUNBOztBQUVBLG9CQUFvQix1REFBSztBQUN6QixvQkFBb0Isd0VBQWE7QUFDakMsb0JBQW9CLGlFQUFVO0FBQzlCLG9CQUFvQiwyRUFBZTtBQUNuQztBQUNBLG9CQUFvQix5RUFBYztBQUNsQyxvQkFBb0Isb0VBQVc7QUFDL0Isb0JBQW9CLDREQUFPO0FBQzNCLG9CQUFvQixnRkFBaUI7QUFDckMsb0JBQW9CLGtGQUFrQjs7QUFFdEM7QUFDQSxJQUFJLDZDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REQsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxrTkFBc0c7O0FBRXhJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE1BQW9HOztBQUV0STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7OztBQ3BCQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDBOQUEwRzs7QUFFNUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUU7QUFFckU7SUFXSSxrQkFBWSxLQUFhO1FBVGpCLFVBQUssR0FBVyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFVBQUssR0FBVyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBR3RDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFNM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxTQUFpQjtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQVMsR0FBVCxVQUFVLE1BQWU7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksUUFBaUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxNQUFlO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksaUJBQWlCO1FBQ2pCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsbUJBQW1CO1FBQ25CLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU3QyxxQ0FBcUM7UUFDckMsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBRUQscUNBQXFDO1FBQ3JDLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQztRQUVELDZCQUE2QjtRQUM3QixJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekM7UUFFRCxhQUFhO1FBQ2IsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckM7UUFFRCxhQUFhO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQztRQUVELHFCQUFxQjtRQUNyQixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlCLGdCQUFnQjtRQUNoQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdCLHdCQUF3QjtRQUN4QixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFFRCx3QkFBd0I7UUFDeEIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUUzQixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBRUQsWUFBWTtRQUNaLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixPQUFPLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLFlBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIaUIscUJBQU8sR0FBVyxJQUFJLENBQUM7SUFDdkIsb0JBQU0sR0FBVyxTQUFTLENBQUM7SUFDM0IsbUJBQUssR0FBVyxTQUFTLENBQUM7SUFDNUMsb0JBQUM7Q0FBQTtBQUp5QjtBQU0xQjtJQUFBO0lBSUEsQ0FBQztJQUhpQixxQkFBTyxHQUFXLElBQUksQ0FBQztJQUN2QixrQkFBSSxHQUFXLFFBQVEsQ0FBQztJQUN4QixtQkFBSyxHQUFXLFNBQVMsQ0FBQztJQUM1QyxvQkFBQztDQUFBO0FBSnlCO0FBTTFCO0lBQUE7SUFNQSxDQUFDO0lBTGlCLGtCQUFJLEdBQVcsV0FBVyxDQUFDO0lBQzNCLG1CQUFLLEdBQVcsV0FBVyxDQUFDO0lBQzVCLG9CQUFNLEdBQVcsV0FBVyxDQUFDO0lBQzdCLGtCQUFJLEdBQVcsUUFBUSxDQUFDO0lBQ3hCLGlCQUFHLEdBQVcsVUFBVSxDQUFDO0lBQzNDLG9CQUFDO0NBQUE7QUFOeUI7QUFRMUI7SUFBQTtJQU1BLENBQUM7SUFMaUIsd0JBQU0sR0FBVyxVQUFVLENBQUM7SUFDNUIsdUJBQUssR0FBVyxTQUFTLENBQUM7SUFDMUIsc0JBQUksR0FBVyxRQUFRLENBQUM7SUFDeEIsd0JBQU0sR0FBVyxVQUFVLENBQUM7SUFDNUIsdUJBQUssR0FBVyxTQUFTLENBQUM7SUFDNUMsd0JBQUM7Q0FBQTtBQU42Qjs7Ozs7Ozs7Ozs7OztBQ2xKOUI7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFFN0I7SUFNSTtRQUNHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFFM0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQU0sWUFBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGVBQUssSUFBSSxZQUFLLENBQUMsZUFBZSxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0JBQVEsR0FBUixVQUFTLE9BQWU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDOUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNRO0FBQ1g7QUFFbEM7SUFJSSxnQkFBWSxPQUFnQixFQUFFLE9BQXNCO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDL0UsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBTyxDQUFDLENBQUM7UUFDaEYsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBTyxDQUFDLENBQUM7UUFFNUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUN0QixxQkFBcUIsRUFDckIsT0FBTyxDQUFDLEtBQUssQ0FDaEIsQ0FBQztRQUVGOzs7Ozs7O1dBT0c7UUFDSCxJQUFJO1lBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtEQUFVLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDcEIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUMxQixjQUFjLEVBQUUsT0FBTyxDQUFDLFlBQVk7YUFDdkMsQ0FBQyxDQUFDO1NBQ047UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO0lBQ3RCLENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxvQkFBRyxHQUFIO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQkFBRyxHQUFIO1FBQUksZUFBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiwwQkFBZTs7UUFDZixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLHdDQUF3QztZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEtBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUppQixzQkFBVSxHQUFXLElBQUksQ0FBQztJQUMxQiw0QkFBZ0IsR0FBVyx3QkFBd0IsQ0FBQztJQUNwRCxpQkFBSyxHQUFXLGFBQWEsQ0FBQztJQUM5QixnQkFBSSxHQUFXLFlBQVksQ0FBQztJQUM5QyxrQkFBQztDQUFBO0FBTHVCOzs7Ozs7Ozs7Ozs7O0FDekV4QjtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUVoQztJQUtJO1FBQ0csSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBRTlFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUFBO0FBQUE7QUFBd0Q7QUFHeEQ7SUFTSSxrQkFBWSxJQUFZLEVBQUUsS0FBYSxFQUFFLEVBQVU7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLG9PQUk2QyxJQUFJLG1HQUVaLEtBQUssa0VBR3JELENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxRQUFtQjtRQUN0QixLQUF1QixVQUF5QixFQUF6QixhQUFRLENBQUMsZ0JBQWdCLEVBQXpCLGNBQXlCLEVBQXpCLElBQXlCLEVBQUU7WUFBOUMsSUFBTSxTQUFTO1lBQ2YsSUFBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2FBQzlCO1NBQ0o7UUFFRCxJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxvRUFBaUIsRUFBRSxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3BFLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUEvRE0seUJBQWdCLEdBQXdCLEVBQUUsQ0FBQztJQWdFdEQsZUFBQztDQUFBO0FBdkVvQjs7Ozs7Ozs7Ozs7OztBQ0FyQjtBQUFBO0FBQUE7SUFPSTtRQU5BLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFPckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLFFBQW1CO1FBQTFCLGlCQWVDO1FBZEcsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDRDQUE0QztZQUMvRixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQU07WUFDdkIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFHLFFBQVE7WUFDUCxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLE1BQWdCO1FBQ3RCLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLE1BQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDcEREO0FBQUE7QUFBQTtBQUErQjtBQUUvQjtJQVFJLHFCQUFZLEtBQWEsRUFBRSxPQUFlLEVBQUUsRUFBVTtRQUh0RCxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBR2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxzVEFNc0IsS0FBSyx1SEFLN0IsT0FBTyxtQ0FFaEIsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxJQUFHLENBQUMsU0FBUztZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwQyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVoRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUNsQyxNQUFJLElBQUksQ0FBQyxFQUFFLHdCQUFxQixDQUNuQyxDQUFDO1FBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsRUFBRSxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksK0NBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFFbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsRUFBRSxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sUUFBb0I7UUFDdkIsSUFBRyxRQUFRO1lBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsUUFBb0I7UUFDeEIsSUFBRyxRQUFRO1lBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDekVEO0FBQUE7QUFBQTtBQUFBO0lBT0ksZUFBWSxLQUFhLEVBQUUsT0FBZSxFQUFFLEVBQVUsRUFBRSxPQUFzQjtRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUNoQixJQUFJLENBQUMsS0FBSyxpREFFVCxJQUFJLENBQUMsT0FBTyxtQ0FFckIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0ksT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLFNBQXNCLEVBQUUsS0FBc0I7UUFBdEIscUNBQXNCO1FBQ2pELElBQUcsS0FBSyxFQUFFO1lBQ04sU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JERCxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDJOQUE0Rzs7QUFFOUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx5TkFBMkc7O0FBRTdJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsMk5BQTRHOztBQUU5STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7OztBQ3BCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLCtOQUE4Rzs7QUFFaEo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUEsOEVBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQ0FBaUM7O0FBRW5EO0FBQ0Esd0NBQXdDLGdHQUFVO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxDQUFDLENBQUMsU0FBSTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHVDQUF1QztBQUN2QztBQUNBLDhCQUE4QjtBQUM5QixrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGFBQWEsRUFBRSxLQUFLO0FBQzVEO0FBQ0EsYUFBYTtBQUNiLFNBQVM7OztBQUdUO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCOzs7QUFHcEQ7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixRQUFROztBQUUzQix3Q0FBd0MsYUFBYTtBQUNyRDs7QUFFQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5Qix1Q0FBdUMsRUFBRSxPQUFPO0FBQ3BILGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxvSUFBb0kscUJBQXFCO0FBQ3pKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4QkFBOEIsRUFBRTs7QUFFcEUsU0FBUzs7Ozs7QUFLVCxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixDQUFDOztBQUVjLHlFQUFVLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJldHR5ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnByZXR0eSBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKTpub3QoW3R5cGU9cmFkaW9dKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldHR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ucHJldHR5IGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtaW4td2lkdGg6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJldHR5IC5zdGF0ZSBsYWJlbCB7XFxuICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWluZGVudDogMS41ZW07XFxuICBtaW4td2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2JkYzNjNztcXG59XFxuLnByZXR0eSAuc3RhdGUucC1pcy1ob3ZlciwgLnByZXR0eSAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgdGFkYSB7XFxuICAwJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoNyk7XFxuICB9XFxuICAzOCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDU1JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gIDcyJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgODElIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI0KTtcXG4gIH1cXG4gIDg5JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgOTUlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBqZWxseSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjg1LCAxLjE1LCAxKTtcXG4gIH1cXG4gIDY1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCkgcm90YXRlKC00NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjYmRjM2M3O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEuNWVtIHJnYmEoMTg5LCAxOTUsIDE5OSwgMCk7XFxuICB9XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0LnAtZmlsbCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnByZXR0eS5wLWRlZmF1bHQgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXdpZHRoOiBjYWxjKDFlbSAvIDcpO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWljb24gLnN0YXRlIC5pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgd2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5pY29uIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV0dHkucC1pY29uIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG59XFxuXFxuLnByZXR0eS5wLXN2ZyAuc3RhdGUgLnN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtc3ZnIC5zdGF0ZSBzdmcge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ucHJldHR5LnAtc3ZnIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLnN2ZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJldHR5LnAtaW1hZ2UgLnN0YXRlIGltZyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgdG9wOiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcbi5wcmV0dHkucC1pbWFnZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGltZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0IHtcXG4gIG1pbi13aWR0aDogMmVtO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGMzYzc7XFxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgd2lkdGg6IDJlbTtcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDE2JSk7XFxuICB6LWluZGV4OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWwge1xcbiAgdGV4dC1pbmRlbnQ6IDIuNWVtO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzcgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG4gIGxlZnQ6IDFlbTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjU2YiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGxlZnQ6IDFlbTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gLnN0YXRlOmJlZm9yZSB7XFxuICBoZWlnaHQ6IDAuMWVtO1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNyAhaW1wb3J0YW50O1xcbiAgdG9wOiBjYWxjKDUwJSAtIDAuMWVtKTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjU2YiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWhvdmVyIGlucHV0OmhvdmVyIH4gLnN0YXRlOm5vdCgucC1pcy1ob3Zlcikge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZS5wLWlzLWhvdmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ucHJldHR5LnAtaGFzLWhvdmVyIGlucHV0OmhvdmVyIH4gLnN0YXRlLnAtaXMtaG92ZXIgLmljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcmV0dHkucC1oYXMtZm9jdXMgaW5wdXQ6Zm9jdXMgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCAjYmRjM2M3O1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZSB+IC5zdGF0ZTpub3QoLnAtaXMtaW5kZXRlcm1pbmF0ZSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZSB+IC5zdGF0ZS5wLWlzLWluZGV0ZXJtaW5hdGUgLmljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9uIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9mZixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlIGltZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmYgLmljb24ge1xcbiAgY29sb3I6ICNiZGMzYzc7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLW9uIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1vZmYge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmV0dHkucC1wbGFpbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXBsYWluLnAtdG9nZ2xlIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuLnByZXR0eS5wLXBsYWluLnAtcGxhaW4gLmljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucHJldHR5LnAtcm91bmQgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG4ucHJldHR5LnAtcm91bmQucC1pY29uIC5zdGF0ZSAuaWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG59XFxuXFxuLnByZXR0eS5wLWN1cnZlIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xcbn1cXG5cXG4ucHJldHR5LnAtc21vb3RoIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtc21vb3RoIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkucC1zbW9vdGggLmljb24sXFxuLnByZXR0eS5wLXNtb290aCAuc3ZnIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5zdmcsXFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGltZyB7XFxuICBhbmltYXRpb246IHpvb20gMC4ycyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoLnAtZGVmYXVsdCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogem9vbSAwLjJzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zbW9vdGgucC1wbGFpbiBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGltZyxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiB0YWRhIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIDEgYWx0ZXJuYXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBqZWxseSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5zdmcsXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHJvdGF0ZSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcmV0dHkucC1wdWxzZTpub3QoLnAtc3dpdGNoKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBhbmltYXRpb246IHB1bHNlIDFzO1xcbn1cXG5cXG4ucHJldHR5IGlucHV0W2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eSBpbnB1dFtkaXNhYmxlZF0gfiAqIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnByZXR0eS5wLWxvY2tlZCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2EgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5IC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzQyOGJjYTtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gc3ZnIHtcXG4gIGNvbG9yOiAjNDI4YmNhO1xcbiAgc3Ryb2tlOiAjNDI4YmNhO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnk6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzQyOGJjYTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnk6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2EgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnk6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzI0NTY4MjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDU2ODIgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzViYzBkZTtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gc3ZnIHtcXG4gIGNvbG9yOiAjNWJjMGRlO1xcbiAgc3Ryb2tlOiAjNWJjMGRlO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm86YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzViYzBkZTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm86YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm86YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzIzOTBiMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzkwYjAgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWMgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVjYjg1YztcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gc3ZnIHtcXG4gIGNvbG9yOiAjNWNiODVjO1xcbiAgc3Ryb2tlOiAjNWNiODVjO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVjYjg1YztcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWMgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzM1NzkzNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTc5MzUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gc3ZnIHtcXG4gIGNvbG9yOiAjZjBhZDRlO1xcbiAgc3Ryb2tlOiAjZjBhZDRlO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2M3N2MxMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzdjMTEgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlciBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgLnN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIHN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBzdmcge1xcbiAgY29sb3I6ICNkOTUzNGY7XFxuICBzdHJva2U6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0ZjtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNhMDI2MjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAyNjIyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1iaWdnZXIgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1iaWdnZXIgbGFiZWw6YWZ0ZXIsXFxuLnByZXR0eS5wLWJpZ2dlciAuaWNvbixcXG4ucHJldHR5LnAtYmlnZ2VyIC5zdmcsXFxuLnByZXR0eS5wLWJpZ2dlciAuaW1nIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gMzUlKSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsIHtcXG4gIHRleHQtaW5kZW50OiAxLjdlbTtcXG59XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5wcmV0dHkgLnN0YXRlOmJlZm9yZSxcXG4ucHJldHR5IC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIsXFxuLnByZXR0eSAuc3RhdGUgLmljb24ge1xcbiAgICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfY2xvY2sge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMjUsIDEpLCBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMjUsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIuY2xvc2luZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIuY2xvc2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIgLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogNDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2EzYztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjIzcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4xNSwgMSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlciAuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29ucyBFeHRlbmRlZFxcXCI7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB6LWluZGV4OiA0O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyOmhvdmVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbi13cmFwcGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMTUpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXI6aG92ZXIgLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uLXdyYXBwZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzIzNjtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjMyKSwgMCAwLjA2MjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZHJvcGRvd24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJhcnJvd19kcm9wX2Rvd25cXFwiO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbi5hc2NlbmRpbmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24uZGVzY2VuZGluZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxNTA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciAqIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLmVkaXRhYmxlIHtcXG4gIHotaW5kZXg6IDMwMDtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdGFiIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxcmVtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19yYXRpbmcge1xcbiAgbWFyZ2luLXRvcDogLTFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc3RhZGlhcGx1c19yYXRpbmc6aG92ZXIgLnN0YWRpYXBsdXNfcmF0aW5nLXRvb2x0aXAge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxKTtcXG59XFxuLnN0YWRpYXBsdXNfcmF0aW5nIC5zdGFkaWFwbHVzX3JhdGluZy10b29sdGlwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29vZ2xlIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQgMC4zcztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19zdG9yZWZpbHRlciB7XFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjMyKSwgMCAwLjA2MjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmJhciB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwic2VhcmNoXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29ucyBFeHRlbmRlZFxcXCI7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXIgaW5wdXQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29vZ2xlIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgb3V0bGluZTogI2ZmNzczZCAzcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lLnNob3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lIGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUgLmRldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19tdXRlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCB7XFxuICAvKiBcXG4gICAqICAgTXVzdCByZW1vdmUgMiB4IHBhZGRpbmcgb3IgaXQgZG9lc250IHdvcmsgXFxuICAgKi9cXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJlMzA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudC5vcGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciAuQ3dDeEZkIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAtMTZweDtcXG59XFxuLnN0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lci5FMFprOWIge1xcbiAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1idXR0b24ge1xcbiAgd2lkdGg6IDExNi4xNTZweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkdxTGk0ZCB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KSBjb250cmFzdCgxLjEpO1xcbn1cXG5cXG5odG1sIGJvZHkgLmRTR3Z6ZiB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG59XFxuXFxuaHRtbCBib2R5IC5DVlZYZmMge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBpbml0aWFsO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0ODRkO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUyNTcgIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbXV0ZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFkaWFwbHVzX21vZGFsIC5zdGFkaWFwbHVzX21vZGFsLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWF4LXdpZHRoOiAzMy4zMzMlO1xcbiAgbWluLXdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogIzMwMzIzNjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcbi5zdGFkaWFwbHVzX21vZGFsIC5zdGFkaWFwbHVzX21vZGFsLWNsb3NlIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLnN0YWRpYXBsdXNfbW9kYWwgLnN0YWRpYXBsdXNfbW9kYWwtY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfbW9kYWwuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogaW5pdGlhbDtcXG59XFxuLnN0YWRpYXBsdXNfbW9kYWwuYWN0aXZlIC5zdGFkaWFwbHVzX21vZGFsLXdyYXBwZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfZHJvcGRvd24uZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogIzkzOTU5RiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDE4MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5wbGFjZWhvbGRlcixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtcGx1cyBzcGFuLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbiB7XFxuICBib3JkZXItY29sb3I6ICM5Mzk1OUY7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4ge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICNjY2NjY2MgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLXNsaW1zZWxlY3QtbGFyZ2Uuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19zbmFja2JhciB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB6LWluZGV4OiA5OTk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDhweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoMTZweCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLCBvcGFjaXR5IDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19zbmFja2Jhci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1sYWJlbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1jbG9zZSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnN0YWRpYXBsdXNfc25hY2tiYXItY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcy1tYWlue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3VzZXItc2VsZWN0Om5vbmU7Y29sb3I6IzY2Njt3aWR0aDoxMDAlfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWR7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYmVsb3d7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXJ7ZmxleDoxIDEgMTAwJTt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6Y2FsYygxMDAlIC0gMzBweCk7bGluZS1oZWlnaHQ6MWVtOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciwuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyICp7d2lkdGg6YXV0b30uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAuc3MtZGlzYWJsZWR7Y29sb3I6I2RlZGVkZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1kZXNlbGVjdHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtmbGV4OjAgMSBhdXRvO21hcmdpbjowIDZweDtmb250LXdlaWdodDo3MDB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3Quc3MtaGlkZXtkaXNwbGF5Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHh9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbntib3JkZXI6c29saWQgIzY2Njtib3JkZXItd2lkdGg6MCAycHggMnB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzozcHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG1hcmdpbiAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbi5hcnJvdy11cHt0cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpO21hcmdpbjozcHggMCAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctZG93bnt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTttYXJnaW46LTNweCAwIDB9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Y3Vyc29yOnBvaW50ZXI7bWluLWhlaWdodDozMHB4O3dpZHRoOjEwMCU7cGFkZGluZzowIDAgMCAzcHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2RjZGVlMjtjdXJzb3I6bm90LWFsbG93ZWR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLWRpc2FibGVke2NvbG9yOiM2NjZ9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWFib3Zle2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4OjEgMSAxMDAlO3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtkaXNwbGF5OmZsZXg7cGFkZGluZzo0cHggNXB4O21hcmdpbjoycHggMDtsaW5lLWhlaWdodDoxZW07YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7Y29sb3I6I2RlZGVkZTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9QGtleWZyYW1lcyBzY2FsZUluezAle3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9dG97dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzY2FsZU91dHswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfXRve3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZXtkaXNwbGF5OmZsZXg7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEycHg7cGFkZGluZzozcHggNXB4O21hcmdpbjozcHggNXB4IDNweCAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZiO2JvcmRlci1yYWRpdXM6NHB4O2FuaW1hdGlvbi1uYW1lOnNjYWxlSW47YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUuc3Mtb3V0e2FuaW1hdGlvbi1uYW1lOnNjYWxlT3V0O2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUgLnNzLXZhbHVlLWRlbGV0ZXttYXJnaW46MCAwIDAgNXB4O2N1cnNvcjpwb2ludGVyfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRke2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSAzcHg7bWFyZ2luOjlweCAxMnB4IDAgNXB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiM2NjY7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHg7d2lkdGg6MnB4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yc30uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1czphZnRlcntiYWNrZ3JvdW5kOiM2NjY7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O3dpZHRoOjEwcHg7bGVmdDotNHB4O3RvcDo0cHh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXMuc3MtY3Jvc3N7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnNzLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTttYXJnaW46LTFweCAwIDA7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjt6LWluZGV4OjEwMTA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsb3BhY2l0eSAuMnM7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZVkoMCl9LnNzLWNvbnRlbnQuc3Mtb3BlbntkaXNwbGF5OmJsb2NrO29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGVZKDEpfS5zcy1jb250ZW50IC5zcy1zZWFyY2h7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztwYWRkaW5nOjhweCA4cHggNnB4fS5zcy1jb250ZW50IC5zcy1zZWFyY2guc3MtaGlkZSwuc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUgaW5wdXR7aGVpZ2h0OjA7b3BhY2l0eTowO3BhZGRpbmc6MDttYXJnaW46MH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtmbGV4OjEgMSBhdXRvO3dpZHRoOjEwMCU7bWluLXdpZHRoOjA7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHggOHB4O21hcmdpbjowO2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO3RleHQtYWxpZ246bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojOGE4YThhO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OmZvY3Vze2JveC1zaGFkb3c6MCAwIDVweCAjNTg5N2ZifS5zcy1jb250ZW50IC5zcy1zZWFyY2ggLnNzLWFkZGFibGV7ZGlzcGxheTppbmxpbmUtZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MjJweDtmb250LXdlaWdodDo3MDA7ZmxleDowIDAgMzBweDtoZWlnaHQ6MzBweDttYXJnaW46MCAwIDAgOHB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNzLWNvbnRlbnQgLnNzLWFkZGFibGV7cGFkZGluZy10b3A6MH0uc3MtY29udGVudCAuc3MtbGlzdHttYXgtaGVpZ2h0OjIwMHB4O292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bzt0ZXh0LWFsaWduOmxlZnR9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRncm91cC1sYWJlbHtwYWRkaW5nOjZweCAxMHB4O2ZvbnQtd2VpZ2h0OjcwMH0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0Z3JvdXAgLnNzLW9wdGlvbntwYWRkaW5nOjZweCA2cHggNnB4IDI1cHh9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGV7Y3Vyc29yOnBvaW50ZXJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGU6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbntwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmV9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbiAqe2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtaGlnaGxpZ2h0ZWQsLnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVke2N1cnNvcjpub3QtYWxsb3dlZDtjb2xvcjojZGVkZWRlO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uOm5vdCguc3MtZGlzYWJsZWQpLnNzLW9wdGlvbi1zZWxlY3RlZHtjb2xvcjojNjY2O2JhY2tncm91bmQtY29sb3I6cmdiYSg4OCwxNTEsMjUxLC4xKX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gLnNzLXNlYXJjaC1oaWdobGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZmZmYjhjfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXR0eS1jaGVja2JveC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBcImNvbnN0IE1vbml0b3JSdW5uYWJsZSA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XFxyXFxuICAgIHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XFxyXFxuICAgIHRoaXMub3JpZ2luYWxSVEM7XFxyXFxuICAgIHRoaXMuc3RhcnRUaW1lO1xcclxcbiAgICB0aGlzLmVsZW1lbnQ7XFxyXFxuICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcXHJcXG4gICAgdGhpcy54ID0gMDtcXHJcXG4gICAgdGhpcy55ID0gMDtcXHJcXG5cXHJcXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XFxyXFxuICAgIHRoaXMub3JpZ2luYWxSVEMgPSBSVENQZWVyQ29ubmVjdGlvbjtcXHJcXG4gICAgKGZ1bmN0aW9uIChPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24pIHtcXHJcXG4gICAgICAgIHNlbGYub3JpZ2luYWxSVEMgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb247XFxyXFxuXFxyXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhcmdzKSB7XFxyXFxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24oYXJncyk7XFxyXFxuICAgICAgICAgICAgc2VsZi5wZWVyQ29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcXHJcXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcXHJcXG4gICAgICAgIH07XFxyXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24ucHJvdG90eXBlO1xcclxcbiAgICB9KShSVENQZWVyQ29ubmVjdGlvbik7XFxyXFxuXFxyXFxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID1cXHJcXG4gICAgICAgICAgICAnbmV0d29ya21vbml0b3ItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XFxyXFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XFxyXFxuXFxyXFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XFxyXFxuXFxyXFxuICAgICAgICB0aGlzLnNldEVkaXRhYmxlKHRydWUpO1xcclxcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xcclxcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XFxyXFxuICAgICAgICB0aGlzLnggPSB4O1xcclxcbiAgICAgICAgdGhpcy55ID0geTtcXHJcXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xcclxcblxcclxcbiAgICAgICAgY29uc3QgY29ybmVycyA9IHtcXHJcXG4gICAgICAgICAgICB0bDogMTAsXFxyXFxuICAgICAgICAgICAgdHI6IDEwLFxcclxcbiAgICAgICAgICAgIGJsOiAxMCxcXHJcXG4gICAgICAgICAgICBicjogMTAsXFxyXFxuICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgaWYgKHRoaXMueCA8IDEwKSB7XFxyXFxuICAgICAgICAgICAgY29ybmVycy50bCA9IDA7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy55IDwgMTApIHtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLnRsID0gMDtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLnRyID0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCAtIDEwKSB7XFxyXFxuICAgICAgICAgICAgY29ybmVycy50ciA9IDA7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAtIDEwKSB7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbXFxyXFxuICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnXFxyXFxuICAgICAgICBdID0gYCR7Y29ybmVycy50bH1weCAke2Nvcm5lcnMudHJ9cHggJHtjb3JuZXJzLmJyfXB4ICR7Y29ybmVycy5ibH1weGA7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMubW91c2VFdmVudHMgPSBbXTtcXHJcXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcXHJcXG4gICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcXHJcXG4gICAgdGhpcy5zZXRFZGl0YWJsZSA9IGZ1bmN0aW9uIChlZGl0YWJsZSkge1xcclxcbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGVkaXRhYmxlO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRhYmxlJywgZWRpdGFibGUpO1xcclxcblxcclxcbiAgICAgICAgaWYgKGVkaXRhYmxlKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5wdXNoKFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlbW92ZScsXFxyXFxuICAgICAgICAgICAgICAgICAgICBmbjogKGV2ZW50KSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWF4KFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgLy8gTWluaW11bSB4IHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCwgLy8gTWF4aW11bSB4IHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIHRoaXMub2Zmc2V0LngsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1heChcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC8vIE1pbmltdW0geSB2YWx1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCwgLy8gTWF4aW11bSB5IHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIHRoaXMub2Zmc2V0LnksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2Vkb3duJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZXZlbnQpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLng7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLnk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNldXAnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZm46IChldmVudCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT5cXHJcXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgZXZlbnQuZm4pLFxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+XFxyXFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGV2ZW50LmZuKSxcXHJcXG4gICAgICAgICAgICApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnNldFZpc2libGUgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xcclxcbiAgICAgICAgdmlzaWJsZS5mb3JFYWNoKGUgPT4gdGhpcy52aXNpYmxlW2UuaWRdID0gZSk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xcclxcbiAgICAgICAgdGhpcy5zZXRFZGl0YWJsZShmYWxzZSk7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XFxyXFxuXFxyXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IHRoaXMub3JpZ2luYWxSVEM7XFxyXFxuICAgICAgICBwZWVyQ29ubmVjdGlvbnMgPSBbXTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy52aXNpYmxlID0ge307XFxyXFxuXFxyXFxuICAgIHRoaXMuc3RhdHMgPSBbXTtcXHJcXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICBpZiAodGhpcy5wZWVyQ29ubmVjdGlvbnMubGVuZ3RoID4gMSkge1xcclxcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wZWVyQ29ubmVjdGlvbnMubGVuZ3RoIC0gMTtcXHJcXG5cXHJcXG4gICAgICAgICAgICB0aGlzLnBlZXJDb25uZWN0aW9uc1tpbmRleF0uZ2V0U3RhdHMoKS50aGVuKChfc3RhdHMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0cyA9IEFycmF5LmZyb20oX3N0YXRzKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtID0gdGhpcy5nZXRTdGF0KChzdGF0KSA9PlxcclxcbiAgICAgICAgICAgICAgICAgICAgc3RhdFswXS5zdGFydHNXaXRoKCdSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0nKSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDSWNlQ2FuZGlkYXRlUGFpciA9IHRoaXMuZ2V0U3RhdCgoc3RhdCkgPT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDSWNlQ2FuZGlkYXRlUGFpcicpLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyID0gdGhpcy5nZXRTdGF0KFxcclxcbiAgICAgICAgICAgICAgICAgICAgKHN0YXQpID0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdFswXS5zdGFydHNXaXRoKCdSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyJykgJiZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0WzFdLmtpbmQgPT09ICd2aWRlbycsXFxyXFxuICAgICAgICAgICAgICAgICk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdXRpb24gPSB0aGlzLmdldFJlc29sdXRpb24oXFxyXFxuICAgICAgICAgICAgICAgICAgICBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBmcHMgPSB0aGlzLmdldEZQUyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBsYXRlbmN5ID0gdGhpcy5nZXRMYXRlbmN5KFJUQ0ljZUNhbmRpZGF0ZVBhaXIpICsgJyBtcyc7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGVjID0gdGhpcy5nZXRDb2RlYyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRyYWZmaWMgPSB0aGlzLnRyYW5zbGF0ZUJ5dGVVbml0cyhcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZChSVENJY2VDYW5kaWRhdGVQYWlyKSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRyYWZmaWMgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERvd25sb2FkU3BlZWQoUlRDSWNlQ2FuZGlkYXRlUGFpciksXFxyXFxuICAgICAgICAgICAgICAgICAgICApICsgJy9zJztcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgYXZlcmFnZVRyYWZmaWMgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEF2ZXJhZ2VEb3dubG9hZFNwZWVkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKSArICcvcyc7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhY2tldHNMb3N0ID0gdGhpcy5nZXRQYWNrZXRzTG9zdChcXHJcXG4gICAgICAgICAgICAgICAgICAgIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgYXZlcmFnZVBhY2tldExvc3MgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBdmVyYWdlUGFja2V0TG9zcyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pICsgJyUnO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBqaXR0ZXJCdWZmZXIgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRKaXR0ZXJCdWZmZXIoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcikgKyAnIG1zJztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsndGltZSddLmVuYWJsZWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lU3RyaW5nID0gdGltZS50b0xvY2FsZVN0cmluZygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGg1PiR7dGltZVN0cmluZ308L2g1PmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHVsPic7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3Jlc29sdXRpb24nXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ3Jlc29sdXRpb24nXS5uYW1lfTogJHtyZXNvbHV0aW9uLndpZHRofXgke3Jlc29sdXRpb24uaGVpZ2h0fTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydmcHMnXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ2ZwcyddLm5hbWV9OiAke2Zwc308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnbGF0ZW5jeSddLmVuYWJsZWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsnbGF0ZW5jeSddLm5hbWV9OiAke2xhdGVuY3l9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2NvZGVjJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydjb2RlYyddLm5hbWV9OiAke2NvZGVjfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWyd0cmFmZmljJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWyd0cmFmZmljJ10ubmFtZX06ICR7dG90YWxUcmFmZmljfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydjdXJyZW50LXRyYWZmaWMnXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ2N1cnJlbnQtdHJhZmZpYyddLm5hbWV9OiAke2N1cnJlbnRUcmFmZmljfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydhdmVyYWdlLXRyYWZmaWMnXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ2F2ZXJhZ2UtdHJhZmZpYyddLm5hbWV9OiAke2F2ZXJhZ2VUcmFmZmljfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydwYWNrZXRzLWxvc3QnXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ3BhY2tldHMtbG9zdCddLm5hbWV9OiAke3BhY2tldHNMb3N0fTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydhdmVyYWdlLXBhY2tldC1sb3NzJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydhdmVyYWdlLXBhY2tldC1sb3NzJ10ubmFtZX06ICR7YXZlcmFnZVBhY2tldExvc3N9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2ppdHRlci1idWZmZXInXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ2ppdHRlci1idWZmZXInXS5uYW1lfTogJHtqaXR0ZXJCdWZmZXJ9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzwvdWw+JztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XFxyXFxuICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcXHJcXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxcclxcbiAgICAgICAgICAgICAgICA8aDU+RXJyb3I8L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFVoIG9oLCBzb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZy4gXFxyXFxuICAgICAgICAgICAgICAgICAgICBUaGlzIGZlYXR1cmUgaXMgc3RpbGwgdmVyeSB1bnN0YWJsZSBhbmQgXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGUgZGV2ZWxvcGVyIGtub3dzIHRoZXJlIGFyZSBwcm9ibGVtcywgXFxyXFxuICAgICAgICAgICAgICAgICAgICBwbGVhc2UgdW5kZXJzdGFuZCB0aGF0IHRoaXMgaXNzdWUgaXMgXFxyXFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVseSBiZWluZyB3b3JrZWQgb24uXFxyXFxuICAgICAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9J3N0YWRpYXBsdXNfbXV0ZWQnPkVycm9yIENvZGU6IDAwMSAtIFN0YXRzIHVuYXZhaWxhYmxlPC9wPlxcclxcbiAgICAgICAgICAgIGA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XFxyXFxuICAgICAgICAgICAgfSwgMTAwMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0U3RhdCA9IGZ1bmN0aW9uIChmaWx0ZXIpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRzLmZpbmQoZmlsdGVyKVsxXTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy50cmFuc2xhdGVCaXRVbml0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xcclxcbiAgICAgICAgY29uc3QgdW5pdHMgPSBbJ2JpdCcsICdrYml0JywgJ01iaXQnLCAnR2JpdCddO1xcclxcblxcclxcbiAgICAgICAgbGV0IGkgPSAwO1xcclxcbiAgICAgICAgd2hpbGUgKHZhbHVlIC8gMTAwMCA+PSAxKSB7XFxyXFxuICAgICAgICAgICAgaSsrO1xcclxcbiAgICAgICAgICAgIHZhbHVlIC89IDEwMDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIHZhbHVlLnRvUHJlY2lzaW9uKDQpICsgJyAnICsgdW5pdHNbTWF0aC5taW4odW5pdHMubGVuZ3RoIC0gMSwgaSldXFxyXFxuICAgICAgICApO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnRyYW5zbGF0ZUJ5dGVVbml0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xcclxcbiAgICAgICAgY29uc3QgdW5pdHMgPSBbJ0InLCAna0InLCAnTUInLCAnR0InXTtcXHJcXG5cXHJcXG4gICAgICAgIGxldCBpID0gMDtcXHJcXG4gICAgICAgIHdoaWxlICh2YWx1ZSAvIDEwMDAgPj0gMSkge1xcclxcbiAgICAgICAgICAgIGkrKztcXHJcXG4gICAgICAgICAgICB2YWx1ZSAvPSAxMDAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcmV0dXJuIChcXHJcXG4gICAgICAgICAgICB2YWx1ZS50b1ByZWNpc2lvbig0KSArICcgJyArIHVuaXRzW01hdGgubWluKHVuaXRzLmxlbmd0aCAtIDEsIGkpXVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRMYXRlbmN5ID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXHJcXG4gICAgICAgIHJldHVybiBSVENJY2VDYW5kaWRhdGVQYWlyLmN1cnJlbnRSb3VuZFRyaXBUaW1lICogMTAwMDtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRKaXR0ZXJCdWZmZXIgPSBmdW5jdGlvbiAoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcikge1xcclxcbiAgICAgICAgcmV0dXJuIChcXHJcXG4gICAgICAgICAgICAoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5qaXR0ZXJCdWZmZXJEZWxheSAqIDEwMDApIC9cXHJcXG4gICAgICAgICAgICBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmppdHRlckJ1ZmZlckVtaXR0ZWRDb3VudFxcclxcbiAgICAgICAgKS50b1ByZWNpc2lvbig0KTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRQYWNrZXRzTG9zdCA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXHJcXG4gICAgICAgIHJldHVybiBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0ucGFja2V0c0xvc3Q7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0QXZlcmFnZVBhY2tldExvc3MgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0ucGFja2V0c0xvc3QgL1xcclxcbiAgICAgICAgICAgICAgICAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNSZWNlaXZlZCArXFxyXFxuICAgICAgICAgICAgICAgICAgICBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0ucGFja2V0c0xvc3QpKSAqXFxyXFxuICAgICAgICAgICAgMTAwXFxyXFxuICAgICAgICApLnRvUHJlY2lzaW9uKDIpO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmxhc3REb3dubG9hZCA9IDA7XFxyXFxuICAgIHRoaXMuZ2V0RG93bmxvYWRTcGVlZCA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxyXFxuICAgICAgICBjb25zdCBkb3dubG9hZCA9IHRoaXMuZ2V0VG90YWxEb3dubG9hZChSVENJY2VDYW5kaWRhdGVQYWlyKTtcXHJcXG4gICAgICAgIGNvbnN0IHNwZWVkID0gZG93bmxvYWQgLSB0aGlzLmxhc3REb3dubG9hZDtcXHJcXG4gICAgICAgIHRoaXMubGFzdERvd25sb2FkID0gZG93bmxvYWQ7XFxyXFxuICAgICAgICByZXR1cm4gc3BlZWQgKiA4O1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldEF2ZXJhZ2VEb3dubG9hZFNwZWVkID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpICogOCAvXFxyXFxuICAgICAgICAgICAgKHRoaXMudGltZVNpbmNlU3RhcnQoKSAvIDEwMDApXFxyXFxuICAgICAgICApO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldFRvdGFsRG93bmxvYWQgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcclxcbiAgICAgICAgcmV0dXJuIFJUQ0ljZUNhbmRpZGF0ZVBhaXIuYnl0ZXNSZWNlaXZlZDtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24gKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIpIHtcXHJcXG4gICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuZnJhbWVXaWR0aCxcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuZnJhbWVIZWlnaHQsXFxyXFxuICAgICAgICB9O1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldENvZGVjID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcclxcbiAgICAgICAgY29uc3QgY29kZWNTdGF0ID0gdGhpcy5nZXRTdGF0KFxcclxcbiAgICAgICAgICAgIChzdGF0KSA9PiBzdGF0WzBdID09PSBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0uY29kZWNJZCxcXHJcXG4gICAgICAgICk7XFxyXFxuICAgICAgICByZXR1cm4gY29kZWNTdGF0Lm1pbWVUeXBlLnN1YnN0cmluZygndmlkZW8vJy5sZW5ndGgpO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmxhc3RGcmFtZXMgPSAwO1xcclxcbiAgICB0aGlzLmdldEZQUyA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXHJcXG4gICAgICAgIGNvbnN0IGZwcyA9IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5mcmFtZXNEZWNvZGVkIC0gdGhpcy5sYXN0RnJhbWVzO1xcclxcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVzID0gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLmZyYW1lc0RlY29kZWQ7XFxyXFxuICAgICAgICByZXR1cm4gZnBzO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnRpbWVTaW5jZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcXHJcXG4gICAgfTtcXHJcXG59O1xcclxcblxcclxcblN0YWRpYVBsdXNNb25pdG9yID0gbmV3IE1vbml0b3JSdW5uYWJsZSgpO1xcclxcblwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpbXNlbGVjdC5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNsaW1TZWxlY3Q9dCgpOmUuU2xpbVNlbGVjdD10KCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybihzPXt9LG4ubT1pPVtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBpLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLGl9dmFyIG47dC5fX2VzTW9kdWxlPSEwLHQuaGFzQ2xhc3NJblRyZWU9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBzKGUsdCl7cmV0dXJuIHQmJmUmJmUuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5jb250YWlucyh0KT9lOm51bGx9cmV0dXJuIHMoZSx0KXx8ZnVuY3Rpb24gZSh0LGkpe3JldHVybiB0JiZ0IT09ZG9jdW1lbnQ/cyh0LGkpP3Q6ZSh0LnBhcmVudE5vZGUsaSk6bnVsbH0oZSx0KX0sdC5lbnN1cmVFbGVtZW50SW5WaWV3PWZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5zY3JvbGxUb3ArZS5vZmZzZXRUb3Ascz1pK2UuY2xpZW50SGVpZ2h0LG49dC5vZmZzZXRUb3AsYT1uK3QuY2xpZW50SGVpZ2h0O248aT9lLnNjcm9sbFRvcC09aS1uOnM8YSYmKGUuc2Nyb2xsVG9wKz1hLXMpfSx0LnB1dENvbnRlbnQ9ZnVuY3Rpb24oZSx0LGkpe3ZhciBzPWUub2Zmc2V0SGVpZ2h0LG49ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWk/bi50b3A6bi50b3AtcyxvPWk/bi5ib3R0b206bi5ib3R0b20rcztyZXR1cm4gYTw9MD9cImJlbG93XCI6bz49d2luZG93LmlubmVySGVpZ2h0P1wiYWJvdmVcIjppP3Q6XCJiZWxvd1wifSx0LmRlYm91bmNlPWZ1bmN0aW9uKG4sYSxvKXt2YXIgbDtyZXR1cm4gdm9pZCAwPT09YSYmKGE9MTAwKSx2b2lkIDA9PT1vJiYobz0hMSksZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspZVt0XT1hcmd1bWVudHNbdF07dmFyIGk9c2VsZixzPW8mJiFsO2NsZWFyVGltZW91dChsKSxsPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPW51bGwsb3x8bi5hcHBseShpLGUpfSxhKSxzJiZuLmFwcGx5KGksZSl9fSx0LmlzVmFsdWVJbkFycmF5T2ZPYmplY3RzPWZ1bmN0aW9uKGUsdCxpKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZVt0XT09PWk7Zm9yKHZhciBzPTAsbj1lO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO2lmKGEmJmFbdF0mJmFbdF09PT1pKXJldHVybiEwfXJldHVybiExfSx0LmhpZ2hsaWdodD1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ZSxuPW5ldyBSZWdFeHAoXCIoXCIrdC50cmltKCkrXCIpKD8hW148XSo+W148Pl0qPC8pXCIsXCJpXCIpO2lmKCFlLm1hdGNoKG4pKXJldHVybiBlO3ZhciBhPWUubWF0Y2gobikuaW5kZXgsbz1hK2UubWF0Y2gobilbMF0udG9TdHJpbmcoKS5sZW5ndGgsbD1lLnN1YnN0cmluZyhhLG8pO3JldHVybiBzPXMucmVwbGFjZShuLCc8bWFyayBjbGFzcz1cIicraSsnXCI+JytsK1wiPC9tYXJrPlwiKX0sXCJmdW5jdGlvblwiIT10eXBlb2Yobj13aW5kb3cpLkN1c3RvbUV2ZW50JiYocy5wcm90b3R5cGU9bi5FdmVudC5wcm90b3R5cGUsbi5DdXN0b21FdmVudD1zKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUubmV3T3B0aW9uPWZ1bmN0aW9uKGUpe3JldHVybntpZDplLmlkP2UuaWQ6U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlP2UudmFsdWU6XCJcIix0ZXh0OmUudGV4dD9lLnRleHQ6XCJcIixpbm5lckhUTUw6ZS5pbm5lckhUTUw/ZS5pbm5lckhUTUw6XCJcIixzZWxlY3RlZDohIWUuc2VsZWN0ZWQmJmUuc2VsZWN0ZWQsZGlzcGxheTp2b2lkIDA9PT1lLmRpc3BsYXl8fGUuZGlzcGxheSxkaXNhYmxlZDohIWUuZGlzYWJsZWQmJmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6ISFlLnBsYWNlaG9sZGVyJiZlLnBsYWNlaG9sZGVyLGNsYXNzOmUuY2xhc3M/ZS5jbGFzczp2b2lkIDAsZGF0YTplLmRhdGE/ZS5kYXRhOnt9fX0sbi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGUpe3RoaXMuZGF0YS5wdXNoKHtpZDpTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWUsdGV4dDplLnRleHQsaW5uZXJIVE1MOlwiXCIsc2VsZWN0ZWQ6ITEsZGlzcGxheTohMCxkaXNhYmxlZDohMSxwbGFjZWhvbGRlcjohMSxjbGFzczp2b2lkIDAsZGF0YTp7fX0pfSxuLnByb3RvdHlwZS5wYXJzZVNlbGVjdERhdGE9ZnVuY3Rpb24oKXt0aGlzLmRhdGE9W107Zm9yKHZhciBlPTAsdD10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQuY2hpbGROb2RlcztlPHQubGVuZ3RoO2UrKyl7dmFyIGk9dFtlXTtpZihcIk9QVEdST1VQXCI9PT1pLm5vZGVOYW1lKXtmb3IodmFyIHM9e2xhYmVsOmkubGFiZWwsb3B0aW9uczpbXX0sbj0wLGE9aS5jaGlsZE5vZGVzO248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2lmKFwiT1BUSU9OXCI9PT1vLm5vZGVOYW1lKXt2YXIgbD10aGlzLnB1bGxPcHRpb25EYXRhKG8pO3Mub3B0aW9ucy5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KX19dGhpcy5kYXRhLnB1c2gocyl9ZWxzZVwiT1BUSU9OXCI9PT1pLm5vZGVOYW1lJiYobD10aGlzLnB1bGxPcHRpb25EYXRhKGkpLHRoaXMuZGF0YS5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KSl9fSxuLnByb3RvdHlwZS5wdWxsT3B0aW9uRGF0YT1mdW5jdGlvbihlKXtyZXR1cm57aWQ6ISFlLmRhdGFzZXQmJmUuZGF0YXNldC5pZHx8U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlLHRleHQ6ZS50ZXh0LGlubmVySFRNTDplLmlubmVySFRNTCxzZWxlY3RlZDplLnNlbGVjdGVkLGRpc2FibGVkOmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6XCJ0cnVlXCI9PT1lLmRhdGFzZXQucGxhY2Vob2xkZXIsY2xhc3M6ZS5jbGFzc05hbWUsc3R5bGU6ZS5zdHlsZS5jc3NUZXh0LGRhdGE6ZS5kYXRhc2V0fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0PWZ1bmN0aW9uKCl7aWYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGU9W10sdD0wLGk9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50Lm9wdGlvbnM7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5zZWxlY3RlZCl7dmFyIG49dGhpcy5nZXRPYmplY3RGcm9tRGF0YShzLnZhbHVlLFwidmFsdWVcIik7biYmbi5pZCYmZS5wdXNoKG4uaWQpfX10aGlzLnNldFNlbGVjdGVkKGUsXCJpZFwiKX1lbHNle3ZhciBhPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudDtpZigtMSE9PWEuc2VsZWN0ZWRJbmRleCl7dmFyIG89YS5vcHRpb25zW2Euc2VsZWN0ZWRJbmRleF0udmFsdWU7dGhpcy5zZXRTZWxlY3RlZChvLFwidmFsdWVcIil9fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cImlkXCIpO2Zvcih2YXIgaT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtyLnBsYWNlaG9sZGVyfHwoci5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQocixlLHQpKX19fWVsc2Ugbi5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQobixlLHQpfX0sbi5wcm90b3R5cGUuc2hvdWxkQmVTZWxlY3RlZD1mdW5jdGlvbihlLHQsaSl7aWYodm9pZCAwPT09aSYmKGk9XCJpZFwiKSxBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcz0wLG49dDtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtpZihpIGluIGUmJlN0cmluZyhlW2ldKT09PVN0cmluZyhhKSlyZXR1cm4hMH1lbHNlIGlmKGkgaW4gZSYmU3RyaW5nKGVbaV0pPT09U3RyaW5nKHQpKXJldHVybiEwO3JldHVybiExfSxuLnByb3RvdHlwZS5nZXRTZWxlY3RlZD1mdW5jdGlvbigpe2Zvcih2YXIgZT17dGV4dDpcIlwiLHBsYWNlaG9sZGVyOnRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0fSx0PVtdLGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107ci5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gocik6ZT1yKX19fWVsc2Ugbi5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gobik6ZT1uKX1yZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3Q6ZX0sbi5wcm90b3R5cGUuYWRkVG9TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT1bXSxzPXRoaXMuZ2V0U2VsZWN0ZWQoKTtpZihBcnJheS5pc0FycmF5KHMpKWZvcih2YXIgbj0wLGE9cztuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtpLnB1c2gob1t0XSl9aS5wdXNoKGUpLHRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLnJlbW92ZUZyb21TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGk9W10scz0wLG49dGhpcy5nZXRTZWxlY3RlZCgpO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO1N0cmluZyhhW3RdKSE9PVN0cmluZyhlKSYmaS5wdXNoKGFbdF0pfXRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLm9uRGF0YUNoYW5nZT1mdW5jdGlvbigpe3RoaXMubWFpbi5vbkNoYW5nZSYmdGhpcy5pc09uQ2hhbmdlRW5hYmxlZCYmdGhpcy5tYWluLm9uQ2hhbmdlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRTZWxlY3RlZCgpKSkpfSxuLnByb3RvdHlwZS5nZXRPYmplY3RGcm9tRGF0YT1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PVwiaWRcIik7Zm9yKHZhciBpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYodCBpbiBuJiZTdHJpbmcoblt0XSk9PT1TdHJpbmcoZSkpcmV0dXJuIG47aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW47aWYoYS5vcHRpb25zKWZvcih2YXIgbz0wLGw9YS5vcHRpb25zO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO2lmKFN0cmluZyhyW3RdKT09PVN0cmluZyhlKSlyZXR1cm4gcn19fXJldHVybiBudWxsfSxuLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24obil7aWYoXCJcIiE9PSh0aGlzLnNlYXJjaFZhbHVlPW4pLnRyaW0oKSl7dmFyIGE9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hGaWx0ZXIsZT10aGlzLmRhdGEuc2xpY2UoMCk7bj1uLnRyaW0oKTt2YXIgdD1lLm1hcChmdW5jdGlvbihlKXtpZihlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIHQ9ZSxpPVtdO2lmKHQub3B0aW9ucyYmKGk9dC5vcHRpb25zLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gYShlLG4pfSkpLDAhPT1pLmxlbmd0aCl7dmFyIHM9T2JqZWN0LmFzc2lnbih7fSx0KTtyZXR1cm4gcy5vcHRpb25zPWksc319cmV0dXJuIGUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0XCIpJiZhKGUsbik/ZTpudWxsfSk7dGhpcy5maWx0ZXJlZD10LmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pfWVsc2UgdGhpcy5maWx0ZXJlZD1udWxsfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMuY29udGVudE9wZW49ITEsdGhpcy5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLHRoaXMuaXNPbkNoYW5nZUVuYWJsZWQ9ITAsdGhpcy5tYWluPWUubWFpbix0aGlzLnNlYXJjaFZhbHVlPVwiXCIsdGhpcy5kYXRhPVtdLHRoaXMuZmlsdGVyZWQ9bnVsbCx0aGlzLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gdm9pZCAwIT09ZS50ZXh0fHwoY29uc29sZS5lcnJvcihcIkRhdGEgb2JqZWN0IG9wdGlvbiBtdXN0IGhhdmUgYXQgbGVhc3QgaGF2ZSBhIHRleHQgdmFsdWUuIENoZWNrIG9iamVjdDogXCIrSlNPTi5zdHJpbmdpZnkoZSkpLCExKX10LkRhdGE9cyx0LnZhbGlkYXRlRGF0YT1mdW5jdGlvbihlKXtpZighZSlyZXR1cm4gY29uc29sZS5lcnJvcihcIkRhdGEgbXVzdCBiZSBhbiBhcnJheSBvZiBvYmplY3RzXCIpLCExO2Zvcih2YXIgdD0wLGk9MCxzPWU7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXtyKGxbb10pfHx0Kyt9fX1lbHNlIHIobil8fHQrK31yZXR1cm4gMD09PXR9LHQudmFsaWRhdGVPcHRpb249cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz1pKDMpLG49aSg0KSxhPWkoNSksbz1pKDEpLGw9aSgwKSxyPShjLnByb3RvdHlwZS52YWxpZGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1cInN0cmluZ1wiPT10eXBlb2YgZS5zZWxlY3Q/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnNlbGVjdCk6ZS5zZWxlY3Q7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc2VsZWN0IGVsZW1lbnRcIik7aWYoXCJTRUxFQ1RcIiE9PXQudGFnTmFtZSl0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IGlzbnQgb2YgdHlwZSBzZWxlY3RcIik7cmV0dXJuIHR9LGMucHJvdG90eXBlLnNlbGVjdGVkPWZ1bmN0aW9uKCl7aWYodGhpcy5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBlPVtdLHQ9MCxpPW49dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07ZS5wdXNoKHMudmFsdWUpfXJldHVybiBlfXZhciBuO3JldHVybihuPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKT9uLnZhbHVlOlwiXCJ9LGMucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT10JiYodD1cInZhbHVlXCIpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmIUFycmF5LmlzQXJyYXkoZSk/dGhpcy5kYXRhLmFkZFRvU2VsZWN0ZWQoZSx0KTp0aGlzLmRhdGEuc2V0U2VsZWN0ZWQoZSx0KSx0aGlzLnNlbGVjdC5zZXRWYWx1ZSgpLHRoaXMuZGF0YS5vbkRhdGFDaGFuZ2UoKSx0aGlzLnJlbmRlcigpLGkmJnRoaXMuY2xvc2UoKX0sYy5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0LGkscyl7dm9pZCAwPT09dCYmKHQ9XCJ2YWx1ZVwiKSx2b2lkIDA9PT1pJiYoaT0hMCksdm9pZCAwPT09cyYmKHM9ITApLHRoaXMuc2V0KGUsdCxpLHMpfSxjLnByb3RvdHlwZS5zZXREYXRhPWZ1bmN0aW9uKGUpe2lmKG8udmFsaWRhdGVEYXRhKGUpKXt2YXIgdD1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKSxpPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO2lmKHRoaXMuY29uZmlnLmlzQWpheCYmaSlpZih0aGlzLmNvbmZpZy5pc011bHRpcGxlKWZvcih2YXIgcz0wLG49aS5yZXZlcnNlKCk7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107dC51bnNoaWZ0KGEpfWVsc2UgdC51bnNoaWZ0KHRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKSx0LnVuc2hpZnQoe3RleHQ6XCJcIixwbGFjZWhvbGRlcjohMH0pO3RoaXMuc2VsZWN0LmNyZWF0ZSh0KSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpfWVsc2UgY29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gcHJvYmxlbSBvbjogI1wiK3RoaXMuc2VsZWN0LmVsZW1lbnQuaWQpfSxjLnByb3RvdHlwZS5hZGREYXRhPWZ1bmN0aW9uKGUpe28udmFsaWRhdGVEYXRhKFtlXSk/KHRoaXMuZGF0YS5hZGQodGhpcy5kYXRhLm5ld09wdGlvbihlKSksdGhpcy5zZWxlY3QuY3JlYXRlKHRoaXMuZGF0YS5kYXRhKSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHRoaXMucmVuZGVyKCkpOmNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIHByb2JsZW0gb246ICNcIit0aGlzLnNlbGVjdC5lbGVtZW50LmlkKX0sYy5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5jb25maWcuaXNFbmFibGVkJiYhdGhpcy5kYXRhLmNvbnRlbnRPcGVuKXtpZih0aGlzLmJlZm9yZU9wZW4mJnRoaXMuYmVmb3JlT3BlbigpLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LmFkZChcInNzLWNyb3NzXCIpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LWRvd25cIiksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctdXBcIikpLHRoaXMuc2xpbVt0aGlzLmNvbmZpZy5pc011bHRpcGxlP1wibXVsdGlTZWxlY3RlZFwiOlwic2luZ2xlU2VsZWN0ZWRcIl0uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm92ZVwiPT09dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj90aGlzLmNvbmZpZy5vcGVuQWJvdmU6dGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLmNvbmZpZy5hZGRUb0JvZHkpe3ZhciB0PXRoaXMuc2xpbS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dGhpcy5zbGltLmNvbnRlbnQuc3R5bGUudG9wPXQudG9wK3QuaGVpZ2h0K3dpbmRvdy5zY3JvbGxZK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS5sZWZ0PXQubGVmdCt3aW5kb3cuc2Nyb2xsWCtcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUud2lkdGg9dC53aWR0aCtcInB4XCJ9aWYodGhpcy5zbGltLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuKSxcInVwXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudC50b0xvd2VyQ2FzZSgpP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOlwiZG93blwiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQudG9Mb3dlckNhc2UoKT90aGlzLm1vdmVDb250ZW50QmVsb3coKTpcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodGhpcy5zbGltLmNvbnRlbnQsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbix0aGlzLmRhdGEuY29udGVudE9wZW4pP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOnRoaXMubW92ZUNvbnRlbnRCZWxvdygpLCF0aGlzLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZihpKXt2YXIgcz1pLmlkLG49dGhpcy5zbGltLmxpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCInK3MrJ1wiXScpO24mJmwuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLnNsaW0ubGlzdCxuKX19c2V0VGltZW91dChmdW5jdGlvbigpe2UuZGF0YS5jb250ZW50T3Blbj0hMCxlLmNvbmZpZy5zZWFyY2hGb2N1cyYmZS5zbGltLnNlYXJjaC5pbnB1dC5mb2N1cygpLGUuYWZ0ZXJPcGVuJiZlLmFmdGVyT3BlbigpfSx0aGlzLmNvbmZpZy50aW1lb3V0RGVsYXkpfX0sYy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuZGF0YS5jb250ZW50T3BlbiYmKHRoaXMuYmVmb3JlQ2xvc2UmJnRoaXMuYmVmb3JlQ2xvc2UoKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LnJlbW92ZShcInNzLWNyb3NzXCIpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LXVwXCIpKSx0aGlzLnNsaW0uY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW4pLHRoaXMuZGF0YS5jb250ZW50T3Blbj0hMSx0aGlzLnNlYXJjaChcIlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5zbGltLmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksZS5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsZS5jb25maWcuaXNNdWx0aXBsZSYmZS5zbGltLm11bHRpU2VsZWN0ZWQ/KGUuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkJlbG93KSk6ZS5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5CZWxvdykpLGUuc2xpbS5zZWFyY2guaW5wdXQuYmx1cigpLGUuYWZ0ZXJDbG9zZSYmZS5hZnRlckNsb3NlKCl9LHRoaXMuY29uZmlnLnRpbWVvdXREZWxheSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEFib3ZlPWZ1bmN0aW9uKCl7dmFyIGU9MDt0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD9lPXRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZT10aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLm9mZnNldEhlaWdodCk7dmFyIHQ9ZSt0aGlzLnNsaW0uY29udGVudC5vZmZzZXRIZWlnaHQtMTt0aGlzLnNsaW0uY29udGVudC5zdHlsZS5tYXJnaW49XCItXCIrdCtcInB4IDAgMCAwXCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUuaGVpZ2h0PXQtZSsxK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49XCJjZW50ZXIgYm90dG9tXCIsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImFib3ZlXCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkFib3ZlKSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5BYm92ZSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEJlbG93PWZ1bmN0aW9uKCl7dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkJlbG93KSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5CZWxvdykpfSxjLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITAsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSExLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITEsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITEsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSEwLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITAsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbih0KXtpZih0aGlzLmRhdGEuc2VhcmNoVmFsdWUhPT10KWlmKHRoaXMuc2xpbS5zZWFyY2guaW5wdXQudmFsdWU9dCx0aGlzLmNvbmZpZy5pc0FqYXgpe3ZhciBpPXRoaXM7dGhpcy5jb25maWcuaXNTZWFyY2hpbmc9ITAsdGhpcy5yZW5kZXIoKSx0aGlzLmFqYXgmJnRoaXMuYWpheCh0LGZ1bmN0aW9uKGUpe2kuY29uZmlnLmlzU2VhcmNoaW5nPSExLEFycmF5LmlzQXJyYXkoZSk/KGUudW5zaGlmdCh7dGV4dDpcIlwiLHBsYWNlaG9sZGVyOiEwfSksaS5zZXREYXRhKGUpLGkuZGF0YS5zZWFyY2godCksaS5yZW5kZXIoKSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5zbGltLm9wdGlvbnMoZSk6aS5yZW5kZXIoKX0pfWVsc2UgdGhpcy5kYXRhLnNlYXJjaCh0KSx0aGlzLnJlbmRlcigpfSxjLnByb3RvdHlwZS5zZXRTZWFyY2hUZXh0PWZ1bmN0aW9uKGUpe3RoaXMuY29uZmlnLnNlYXJjaFRleHQ9ZX0sYy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNNdWx0aXBsZT90aGlzLnNsaW0udmFsdWVzKCk6KHRoaXMuc2xpbS5wbGFjZWhvbGRlcigpLHRoaXMuc2xpbS5kZXNlbGVjdCgpKSx0aGlzLnNsaW0ub3B0aW9ucygpfSxjLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPW51bGwpO3ZhciB0PWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLW1haW5cIik6dGhpcy5zbGltLmNvbnRhaW5lcixpPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNzaWQ9XCIrZStcIl1cIik6dGhpcy5zZWxlY3QuZWxlbWVudDtpZih0JiZpJiYoaS5zdHlsZS5kaXNwbGF5PVwiXCIsZGVsZXRlIGkuZGF0YXNldC5zc2lkLGkuc2xpbT1udWxsLHQucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpLHRoaXMuY29uZmlnLmFkZFRvQm9keSkpe3ZhciBzPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLWNvbnRlbnRcIik6dGhpcy5zbGltLmNvbnRlbnQ7aWYoIXMpcmV0dXJuO2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocyl9fSxjKTtmdW5jdGlvbiBjKGUpe3ZhciB0PXRoaXM7dGhpcy5hamF4PW51bGwsdGhpcy5hZGRhYmxlPW51bGwsdGhpcy5iZWZvcmVPbkNoYW5nZT1udWxsLHRoaXMub25DaGFuZ2U9bnVsbCx0aGlzLmJlZm9yZU9wZW49bnVsbCx0aGlzLmFmdGVyT3Blbj1udWxsLHRoaXMuYmVmb3JlQ2xvc2U9bnVsbCx0aGlzLmFmdGVyQ2xvc2U9bnVsbDt2YXIgaT10aGlzLnZhbGlkYXRlKGUpO2kuZGF0YXNldC5zc2lkJiZ0aGlzLmRlc3Ryb3koaS5kYXRhc2V0LnNzaWQpLGUuYWpheCYmKHRoaXMuYWpheD1lLmFqYXgpLGUuYWRkYWJsZSYmKHRoaXMuYWRkYWJsZT1lLmFkZGFibGUpLHRoaXMuY29uZmlnPW5ldyBzLkNvbmZpZyh7c2VsZWN0OmksaXNBamF4OiEhZS5hamF4LHNob3dTZWFyY2g6ZS5zaG93U2VhcmNoLHNlYXJjaFBsYWNlaG9sZGVyOmUuc2VhcmNoUGxhY2Vob2xkZXIsc2VhcmNoVGV4dDplLnNlYXJjaFRleHQsc2VhcmNoaW5nVGV4dDplLnNlYXJjaGluZ1RleHQsc2VhcmNoRm9jdXM6ZS5zZWFyY2hGb2N1cyxzZWFyY2hIaWdobGlnaHQ6ZS5zZWFyY2hIaWdobGlnaHQsc2VhcmNoRmlsdGVyOmUuc2VhcmNoRmlsdGVyLGNsb3NlT25TZWxlY3Q6ZS5jbG9zZU9uU2VsZWN0LHNob3dDb250ZW50OmUuc2hvd0NvbnRlbnQscGxhY2Vob2xkZXJUZXh0OmUucGxhY2Vob2xkZXIsYWxsb3dEZXNlbGVjdDplLmFsbG93RGVzZWxlY3QsYWxsb3dEZXNlbGVjdE9wdGlvbjplLmFsbG93RGVzZWxlY3RPcHRpb24saGlkZVNlbGVjdGVkT3B0aW9uOmUuaGlkZVNlbGVjdGVkT3B0aW9uLGRlc2VsZWN0TGFiZWw6ZS5kZXNlbGVjdExhYmVsLGlzRW5hYmxlZDplLmlzRW5hYmxlZCx2YWx1ZXNVc2VUZXh0OmUudmFsdWVzVXNlVGV4dCxzaG93T3B0aW9uVG9vbHRpcHM6ZS5zaG93T3B0aW9uVG9vbHRpcHMsc2VsZWN0QnlHcm91cDplLnNlbGVjdEJ5R3JvdXAsbGltaXQ6ZS5saW1pdCx0aW1lb3V0RGVsYXk6ZS50aW1lb3V0RGVsYXksYWRkVG9Cb2R5OmUuYWRkVG9Cb2R5fSksdGhpcy5zZWxlY3Q9bmV3IG4uU2VsZWN0KHtzZWxlY3Q6aSxtYWluOnRoaXN9KSx0aGlzLmRhdGE9bmV3IG8uRGF0YSh7bWFpbjp0aGlzfSksdGhpcy5zbGltPW5ldyBhLlNsaW0oe21haW46dGhpc30pLHRoaXMuc2VsZWN0LmVsZW1lbnQucGFyZW50Tm9kZSYmdGhpcy5zZWxlY3QuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnNsaW0uY29udGFpbmVyLHRoaXMuc2VsZWN0LmVsZW1lbnQubmV4dFNpYmxpbmcpLGUuZGF0YT90aGlzLnNldERhdGEoZS5kYXRhKTp0aGlzLnJlbmRlcigpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UudGFyZ2V0JiYhbC5oYXNDbGFzc0luVHJlZShlLnRhcmdldCx0LmNvbmZpZy5pZCkmJnQuY2xvc2UoKX0pLFwiYXV0b1wiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbC5kZWJvdW5jZShmdW5jdGlvbihlKXt0LmRhdGEuY29udGVudE9wZW4mJihcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodC5zbGltLmNvbnRlbnQsdC5kYXRhLmNvbnRlbnRQb3NpdGlvbix0LmRhdGEuY29udGVudE9wZW4pP3QubW92ZUNvbnRlbnRBYm92ZSgpOnQubW92ZUNvbnRlbnRCZWxvdygpKX0pLCExKSxlLmJlZm9yZU9uQ2hhbmdlJiYodGhpcy5iZWZvcmVPbkNoYW5nZT1lLmJlZm9yZU9uQ2hhbmdlKSxlLm9uQ2hhbmdlJiYodGhpcy5vbkNoYW5nZT1lLm9uQ2hhbmdlKSxlLmJlZm9yZU9wZW4mJih0aGlzLmJlZm9yZU9wZW49ZS5iZWZvcmVPcGVuKSxlLmFmdGVyT3BlbiYmKHRoaXMuYWZ0ZXJPcGVuPWUuYWZ0ZXJPcGVuKSxlLmJlZm9yZUNsb3NlJiYodGhpcy5iZWZvcmVDbG9zZT1lLmJlZm9yZUNsb3NlKSxlLmFmdGVyQ2xvc2UmJih0aGlzLmFmdGVyQ2xvc2U9ZS5hZnRlckNsb3NlKSx0aGlzLmNvbmZpZy5pc0VuYWJsZWR8fHRoaXMuZGlzYWJsZSgpfXQuZGVmYXVsdD1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZWFyY2hGaWx0ZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4tMSE9PWUudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodC50b0xvd2VyQ2FzZSgpKX0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLmlkPVwiXCIsdGhpcy5pc011bHRpcGxlPSExLHRoaXMuaXNBamF4PSExLHRoaXMuaXNTZWFyY2hpbmc9ITEsdGhpcy5zaG93U2VhcmNoPSEwLHRoaXMuc2VhcmNoRm9jdXM9ITAsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITEsdGhpcy5jbG9zZU9uU2VsZWN0PSEwLHRoaXMuc2hvd0NvbnRlbnQ9XCJhdXRvXCIsdGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1cIlNlYXJjaFwiLHRoaXMuc2VhcmNoVGV4dD1cIk5vIFJlc3VsdHNcIix0aGlzLnNlYXJjaGluZ1RleHQ9XCJTZWFyY2hpbmcuLi5cIix0aGlzLnBsYWNlaG9sZGVyVGV4dD1cIlNlbGVjdCBWYWx1ZVwiLHRoaXMuYWxsb3dEZXNlbGVjdD0hMSx0aGlzLmFsbG93RGVzZWxlY3RPcHRpb249ITEsdGhpcy5oaWRlU2VsZWN0ZWRPcHRpb249ITEsdGhpcy5kZXNlbGVjdExhYmVsPVwieFwiLHRoaXMuaXNFbmFibGVkPSEwLHRoaXMudmFsdWVzVXNlVGV4dD0hMSx0aGlzLnNob3dPcHRpb25Ub29sdGlwcz0hMSx0aGlzLnNlbGVjdEJ5R3JvdXA9ITEsdGhpcy5saW1pdD0wLHRoaXMudGltZW91dERlbGF5PTIwMCx0aGlzLmFkZFRvQm9keT0hMSx0aGlzLm1haW49XCJzcy1tYWluXCIsdGhpcy5zaW5nbGVTZWxlY3RlZD1cInNzLXNpbmdsZS1zZWxlY3RlZFwiLHRoaXMuYXJyb3c9XCJzcy1hcnJvd1wiLHRoaXMubXVsdGlTZWxlY3RlZD1cInNzLW11bHRpLXNlbGVjdGVkXCIsdGhpcy5hZGQ9XCJzcy1hZGRcIix0aGlzLnBsdXM9XCJzcy1wbHVzXCIsdGhpcy52YWx1ZXM9XCJzcy12YWx1ZXNcIix0aGlzLnZhbHVlPVwic3MtdmFsdWVcIix0aGlzLnZhbHVlVGV4dD1cInNzLXZhbHVlLXRleHRcIix0aGlzLnZhbHVlRGVsZXRlPVwic3MtdmFsdWUtZGVsZXRlXCIsdGhpcy5jb250ZW50PVwic3MtY29udGVudFwiLHRoaXMub3Blbj1cInNzLW9wZW5cIix0aGlzLm9wZW5BYm92ZT1cInNzLW9wZW4tYWJvdmVcIix0aGlzLm9wZW5CZWxvdz1cInNzLW9wZW4tYmVsb3dcIix0aGlzLnNlYXJjaD1cInNzLXNlYXJjaFwiLHRoaXMuc2VhcmNoSGlnaGxpZ2h0ZXI9XCJzcy1zZWFyY2gtaGlnaGxpZ2h0XCIsdGhpcy5hZGRhYmxlPVwic3MtYWRkYWJsZVwiLHRoaXMubGlzdD1cInNzLWxpc3RcIix0aGlzLm9wdGdyb3VwPVwic3Mtb3B0Z3JvdXBcIix0aGlzLm9wdGdyb3VwTGFiZWw9XCJzcy1vcHRncm91cC1sYWJlbFwiLHRoaXMub3B0Z3JvdXBMYWJlbFNlbGVjdGFibGU9XCJzcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlXCIsdGhpcy5vcHRpb249XCJzcy1vcHRpb25cIix0aGlzLm9wdGlvblNlbGVjdGVkPVwic3Mtb3B0aW9uLXNlbGVjdGVkXCIsdGhpcy5oaWdobGlnaHRlZD1cInNzLWhpZ2hsaWdodGVkXCIsdGhpcy5kaXNhYmxlZD1cInNzLWRpc2FibGVkXCIsdGhpcy5oaWRlPVwic3MtaGlkZVwiLHRoaXMuaWQ9XCJzcy1cIitNYXRoLmZsb29yKDFlNSpNYXRoLnJhbmRvbSgpKSx0aGlzLnN0eWxlPWUuc2VsZWN0LnN0eWxlLmNzc1RleHQsdGhpcy5jbGFzcz1lLnNlbGVjdC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLHRoaXMuaXNNdWx0aXBsZT1lLnNlbGVjdC5tdWx0aXBsZSx0aGlzLmlzQWpheD1lLmlzQWpheCx0aGlzLnNob3dTZWFyY2g9ITEhPT1lLnNob3dTZWFyY2gsdGhpcy5zZWFyY2hGb2N1cz0hMSE9PWUuc2VhcmNoRm9jdXMsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITA9PT1lLnNlYXJjaEhpZ2hsaWdodCx0aGlzLmNsb3NlT25TZWxlY3Q9ITEhPT1lLmNsb3NlT25TZWxlY3QsZS5zaG93Q29udGVudCYmKHRoaXMuc2hvd0NvbnRlbnQ9ZS5zaG93Q29udGVudCksdGhpcy5pc0VuYWJsZWQ9ITEhPT1lLmlzRW5hYmxlZCxlLnNlYXJjaFBsYWNlaG9sZGVyJiYodGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1lLnNlYXJjaFBsYWNlaG9sZGVyKSxlLnNlYXJjaFRleHQmJih0aGlzLnNlYXJjaFRleHQ9ZS5zZWFyY2hUZXh0KSxlLnNlYXJjaGluZ1RleHQmJih0aGlzLnNlYXJjaGluZ1RleHQ9ZS5zZWFyY2hpbmdUZXh0KSxlLnBsYWNlaG9sZGVyVGV4dCYmKHRoaXMucGxhY2Vob2xkZXJUZXh0PWUucGxhY2Vob2xkZXJUZXh0KSx0aGlzLmFsbG93RGVzZWxlY3Q9ITA9PT1lLmFsbG93RGVzZWxlY3QsdGhpcy5hbGxvd0Rlc2VsZWN0T3B0aW9uPSEwPT09ZS5hbGxvd0Rlc2VsZWN0T3B0aW9uLHRoaXMuaGlkZVNlbGVjdGVkT3B0aW9uPSEwPT09ZS5oaWRlU2VsZWN0ZWRPcHRpb24sZS5kZXNlbGVjdExhYmVsJiYodGhpcy5kZXNlbGVjdExhYmVsPWUuZGVzZWxlY3RMYWJlbCksZS52YWx1ZXNVc2VUZXh0JiYodGhpcy52YWx1ZXNVc2VUZXh0PWUudmFsdWVzVXNlVGV4dCksZS5zaG93T3B0aW9uVG9vbHRpcHMmJih0aGlzLnNob3dPcHRpb25Ub29sdGlwcz1lLnNob3dPcHRpb25Ub29sdGlwcyksZS5zZWxlY3RCeUdyb3VwJiYodGhpcy5zZWxlY3RCeUdyb3VwPWUuc2VsZWN0QnlHcm91cCksZS5saW1pdCYmKHRoaXMubGltaXQ9ZS5saW1pdCksZS5zZWFyY2hGaWx0ZXImJih0aGlzLnNlYXJjaEZpbHRlcj1lLnNlYXJjaEZpbHRlciksbnVsbCE9ZS50aW1lb3V0RGVsYXkmJih0aGlzLnRpbWVvdXREZWxheT1lLnRpbWVvdXREZWxheSksdGhpcy5hZGRUb0JvZHk9ITA9PT1lLmFkZFRvQm9keX10LkNvbmZpZz1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbigpe2lmKHRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkpe2lmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSlmb3IodmFyIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSx0PTAsaT10aGlzLmVsZW1lbnQub3B0aW9uczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtzLnNlbGVjdGVkPSExO2Zvcih2YXIgbj0wLGE9ZTtuPGEubGVuZ3RoO24rKylhW25dLnZhbHVlPT09cy52YWx1ZSYmKHMuc2VsZWN0ZWQ9ITApfWVsc2UgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHRoaXMuZWxlbWVudC52YWx1ZT1lP2UudmFsdWU6XCJcIjt0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMSx0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSx0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMH19LG4ucHJvdG90eXBlLmFkZEF0dHJpYnV0ZXM9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQudGFiSW5kZXg9LTEsdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5lbGVtZW50LmRhdGFzZXQuc3NpZD10aGlzLm1haW4uY29uZmlnLmlkfSxuLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0Lm1haW4ucmVuZGVyKCl9KX0sbi5wcm90b3R5cGUuYWRkTXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5tYWluLmNvbmZpZy5pc0FqYXh8fCh0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7dC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlciYmKHQubWFpbi5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHQubWFpbi5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHQubWFpbi5yZW5kZXIoKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7XCJjbGFzc1wiPT09ZS5hdHRyaWJ1dGVOYW1lJiZ0Lm1haW4uc2xpbS51cGRhdGVDb250YWluZXJEaXZDbGFzcyh0Lm1haW4uc2xpbS5jb250YWluZXIpfSkpfSksdGhpcy5vYnNlcnZlTXV0YXRpb25PYnNlcnZlcigpKX0sbi5wcm90b3R5cGUub2JzZXJ2ZU11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt0aGlzLm11dGF0aW9uT2JzZXJ2ZXImJnRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCx7YXR0cmlidXRlczohMCxjaGlsZExpc3Q6ITAsY2hhcmFjdGVyRGF0YTohMH0pfSxuLnByb3RvdHlwZS5kaXNjb25uZWN0TXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3RoaXMubXV0YXRpb25PYnNlcnZlciYmdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKX0sbi5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5pbm5lckhUTUw9XCJcIjtmb3IodmFyIHQ9MCxpPWU7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBuPXMsYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7aWYoYS5sYWJlbD1uLmxhYmVsLG4ub3B0aW9ucylmb3IodmFyIG89MCxsPW4ub3B0aW9ucztvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTthLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlT3B0aW9uKHIpKX10aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYSl9ZWxzZSB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPcHRpb24ocykpfX0sbi5wcm90b3R5cGUuY3JlYXRlT3B0aW9uPWZ1bmN0aW9uKHQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7cmV0dXJuIGkudmFsdWU9dC52YWx1ZXx8dC50ZXh0LGkuaW5uZXJIVE1MPXQuaW5uZXJIVE1MfHx0LnRleHQsdC5zZWxlY3RlZCYmKGkuc2VsZWN0ZWQ9dC5zZWxlY3RlZCksdC5kaXNhYmxlZCYmKGkuZGlzYWJsZWQ9ITApLHQucGxhY2Vob2xkZXImJmkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiLFwidHJ1ZVwiKSx0LmNsYXNzJiZ0LmNsYXNzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuY2xhc3NMaXN0LmFkZChlKX0pLHQuZGF0YSYmXCJvYmplY3RcIj09dHlwZW9mIHQuZGF0YSYmT2JqZWN0LmtleXModC5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuc2V0QXR0cmlidXRlKFwiZGF0YS1cIitlLHQuZGF0YVtlXSl9KSxpfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITAsdGhpcy5lbGVtZW50PWUuc2VsZWN0LHRoaXMubWFpbj1lLm1haW4sdGhpcy5lbGVtZW50LmRpc2FibGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc0VuYWJsZWQ9ITEpLHRoaXMuYWRkQXR0cmlidXRlcygpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bnVsbCx0aGlzLmFkZE11dGF0aW9uT2JzZXJ2ZXIoKSx0aGlzLmVsZW1lbnQuc2xpbT1lLm1haW59dC5TZWxlY3Q9c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgYT1pKDApLG89aSgxKSxzPShuLnByb3RvdHlwZS5jb250YWluZXJEaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLnN0eWxlLmNzc1RleHQ9dGhpcy5tYWluLmNvbmZpZy5zdHlsZSx0aGlzLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzKGUpLGV9LG4ucHJvdG90eXBlLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzPWZ1bmN0aW9uKGUpe3RoaXMubWFpbi5jb25maWcuY2xhc3M9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIiksZS5jbGFzc05hbWU9XCJcIixlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5pZCksZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubWFpbik7Zm9yKHZhciB0PTAsaT10aGlzLm1haW4uY29uZmlnLmNsYXNzO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO1wiXCIhPT1zLnRyaW0oKSYmZS5jbGFzc0xpc3QuYWRkKHMpfX0sbi5wcm90b3R5cGUuc2luZ2xlU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zaW5nbGVTZWxlY3RlZCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7aS5jbGFzc0xpc3QuYWRkKFwicGxhY2Vob2xkZXJcIiksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLmRlc2VsZWN0TGFiZWwscy5jbGFzc0xpc3QuYWRkKFwic3MtZGVzZWxlY3RcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJnQubWFpbi5zZXQoXCJcIil9LGUuYXBwZW5kQ2hpbGQocyk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYXJyb3cpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBhLmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLG4uYXBwZW5kQ2hpbGQoYSksZS5hcHBlbmRDaGlsZChuKSxlLm9uY2xpY2s9ZnVuY3Rpb24oKXt0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmKHQubWFpbi5kYXRhLmNvbnRlbnRPcGVuP3QubWFpbi5jbG9zZSgpOnQubWFpbi5vcGVuKCkpfSx7Y29udGFpbmVyOmUscGxhY2Vob2xkZXI6aSxkZXNlbGVjdDpzLGFycm93SWNvbjp7Y29udGFpbmVyOm4sYXJyb3c6YX19fSxuLnByb3RvdHlwZS5wbGFjZWhvbGRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCk7aWYobnVsbD09PWV8fGUmJmUucGxhY2Vob2xkZXIpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dCx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9dC5vdXRlckhUTUwpfWVsc2V7dmFyIGk9XCJcIjtlJiYoaT1lLmlubmVySFRNTCYmITAhPT10aGlzLm1haW4uY29uZmlnLnZhbHVlc1VzZVRleHQ/ZS5pbm5lckhUTUw6ZS50ZXh0KSx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9ZT9pOlwiXCIpfX0sbi5wcm90b3R5cGUuZGVzZWxlY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLnNpbmdsZVNlbGVjdGVkKXtpZighdGhpcy5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0KXJldHVybiB2b2lkIHRoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik7XCJcIj09PXRoaXMubWFpbi5zZWxlY3RlZCgpP3RoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik6dGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic3MtaGlkZVwiKX19LG4ucHJvdG90eXBlLm11bHRpU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5tdWx0aVNlbGVjdGVkKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlcyksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZCk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIG4uY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnBsdXMpLG4ub25jbGljaz1mdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5jb250ZW50T3BlbiYmKHQubWFpbi5jbG9zZSgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpfSxzLmFwcGVuZENoaWxkKG4pLGUuYXBwZW5kQ2hpbGQocyksZS5vbmNsaWNrPWZ1bmN0aW9uKGUpe3QubWFpbi5jb25maWcuaXNFbmFibGVkJiYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHQubWFpbi5jb25maWcudmFsdWVEZWxldGUpfHwodC5tYWluLmRhdGEuY29udGVudE9wZW4/dC5tYWluLmNsb3NlKCk6dC5tYWluLm9wZW4oKSkpfSx7Y29udGFpbmVyOmUsdmFsdWVzOmksYWRkOnMscGx1czpufX0sbi5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7aWYodGhpcy5tdWx0aVNlbGVjdGVkKXtmb3IodmFyIGUsdD10aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmNoaWxkTm9kZXMsaT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHM9W10sbj0wLGE9dDtuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtlPSEwO2Zvcih2YXIgbD0wLHI9aTtsPHIubGVuZ3RoO2wrKyl7dmFyIGM9cltsXTtTdHJpbmcoYy5pZCk9PT1TdHJpbmcoby5kYXRhc2V0LmlkKSYmKGU9ITEpfWUmJnMucHVzaChvKX1mb3IodmFyIGQ9MCxoPXM7ZDxoLmxlbmd0aDtkKyspe3ZhciB1PWhbZF07dS5jbGFzc0xpc3QuYWRkKFwic3Mtb3V0XCIpLHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMucmVtb3ZlQ2hpbGQodSl9Zm9yKHQ9dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5jaGlsZE5vZGVzLGM9MDtjPGkubGVuZ3RoO2MrKyl7ZT0hMTtmb3IodmFyIHA9MCxtPXQ7cDxtLmxlbmd0aDtwKyspbz1tW3BdLFN0cmluZyhpW2NdLmlkKT09PVN0cmluZyhvLmRhdGFzZXQuaWQpJiYoZT0hMCk7ZXx8KDAhPT10Lmxlbmd0aCYmSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudD8wPT09Yz90aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmluc2VydEJlZm9yZSh0aGlzLnZhbHVlRGl2KGlbY10pLHRbY10pOnRbYy0xXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLHRoaXMudmFsdWVEaXYoaVtjXSkpOnRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuYXBwZW5kQ2hpbGQodGhpcy52YWx1ZURpdihpW2NdKSkpfWlmKDA9PT1pLmxlbmd0aCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Zi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLGYuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0LHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuaW5uZXJIVE1MPWYub3V0ZXJIVE1MfX19LG4ucHJvdG90eXBlLnZhbHVlRGl2PWZ1bmN0aW9uKGEpe3ZhciBvPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlKSxlLmRhdGFzZXQuaWQ9YS5pZDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZVRleHQpLHQuaW5uZXJIVE1MPWEuaW5uZXJIVE1MJiYhMCE9PXRoaXMubWFpbi5jb25maWcudmFsdWVzVXNlVGV4dD9hLmlubmVySFRNTDphLnRleHQsZS5hcHBlbmRDaGlsZCh0KTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gaS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVEZWxldGUpLGkuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuZGVzZWxlY3RMYWJlbCxpLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ITE7aWYoby5tYWluLmNvbmZpZy5pc0VuYWJsZWQpe2lmKG8ubWFpbi5iZWZvcmVPbkNoYW5nZXx8KHQ9ITApLG8ubWFpbi5iZWZvcmVPbkNoYW5nZSl7Zm9yKHZhciBpPW8ubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkscz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkpKSxuPTA7bjxzLmxlbmd0aDtuKyspc1tuXS5pZD09PWEuaWQmJnMuc3BsaWNlKG4sMSk7ITEhPT1vLm1haW4uYmVmb3JlT25DaGFuZ2UocykmJih0PSEwKX10JiYoby5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKGEuaWQsXCJpZFwiKSxvLm1haW4ucmVuZGVyKCksby5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLG8ubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKX19LGUuYXBwZW5kQ2hpbGQoaSksZX0sbi5wcm90b3R5cGUuY29udGVudERpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmNvbnRlbnQpLGV9LG4ucHJvdG90eXBlLnNlYXJjaERpdj1mdW5jdGlvbigpe3ZhciBuPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zZWFyY2gpO3ZhciB0PXtjb250YWluZXI6ZSxpbnB1dDpzfTtyZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5zaG93U2VhcmNofHwoZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkscy5yZWFkT25seT0hMCkscy50eXBlPVwic2VhcmNoXCIscy5wbGFjZWhvbGRlcj10aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyLHMudGFiSW5kZXg9MCxzLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jYXBpdGFsaXplXCIsXCJvZmZcIikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsXCJvZmZcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcIlwiPT09ZS50YXJnZXQudmFsdWUmJm4ubWFpbi5zZWFyY2goXCJcIil9LDEwKX0scy5vbmtleWRvd249ZnVuY3Rpb24oZSl7XCJBcnJvd1VwXCI9PT1lLmtleT8obi5tYWluLm9wZW4oKSxuLmhpZ2hsaWdodFVwKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIkFycm93RG93blwiPT09ZS5rZXk/KG4ubWFpbi5vcGVuKCksbi5oaWdobGlnaHREb3duKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIlRhYlwiPT09ZS5rZXk/bi5tYWluLmRhdGEuY29udGVudE9wZW4/bi5tYWluLmNsb3NlKCk6c2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSxuLm1haW4uY29uZmlnLnRpbWVvdXREZWxheSk6XCJFbnRlclwiPT09ZS5rZXkmJmUucHJldmVudERlZmF1bHQoKX0scy5vbmtleXVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O2lmKFwiRW50ZXJcIj09PWUua2V5KXtpZihuLm1haW4uYWRkYWJsZSYmZS5jdHJsS2V5KXJldHVybiBhLmNsaWNrKCksZS5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgaT1uLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIituLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKTtpJiZpLmNsaWNrKCl9ZWxzZVwiQXJyb3dVcFwiPT09ZS5rZXl8fFwiQXJyb3dEb3duXCI9PT1lLmtleXx8KFwiRXNjYXBlXCI9PT1lLmtleT9uLm1haW4uY2xvc2UoKTpuLm1haW4uY29uZmlnLnNob3dTZWFyY2gmJm4ubWFpbi5kYXRhLmNvbnRlbnRPcGVuP24ubWFpbi5zZWFyY2godC52YWx1ZSk6cy52YWx1ZT1cIlwiKTtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKX0scy5vbmZvY3VzPWZ1bmN0aW9uKCl7bi5tYWluLm9wZW4oKX0sZS5hcHBlbmRDaGlsZChzKSx0aGlzLm1haW4uYWRkYWJsZSYmKGEuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZGFibGUpLGEuaW5uZXJIVE1MPVwiK1wiLGEub25jbGljaz1mdW5jdGlvbihlKXtpZihuLm1haW4uYWRkYWJsZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9bi5zZWFyY2guaW5wdXQudmFsdWU7aWYoXCJcIj09PXQudHJpbSgpKXJldHVybiB2b2lkIG4uc2VhcmNoLmlucHV0LmZvY3VzKCk7dmFyIGk9bi5tYWluLmFkZGFibGUodCkscz1cIlwiO2lmKCFpKXJldHVybjtcIm9iamVjdFwiPT10eXBlb2YgaT9vLnZhbGlkYXRlT3B0aW9uKGkpJiYobi5tYWluLmFkZERhdGEoaSkscz1pLnZhbHVlP2kudmFsdWU6aS50ZXh0KToobi5tYWluLmFkZERhdGEobi5tYWluLmRhdGEubmV3T3B0aW9uKHt0ZXh0OmksdmFsdWU6aX0pKSxzPWkpLG4ubWFpbi5zZWFyY2goXCJcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5zZXQocyxcInZhbHVlXCIsITEsITEpfSwxMDApLG4ubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCYmc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSwxMDApfX0sZS5hcHBlbmRDaGlsZChhKSx0LmFkZGFibGU9YSksdH0sbi5wcm90b3R5cGUuaGlnaGxpZ2h0VXA9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLnByZXZpb3VzU2libGluZztudWxsIT09dCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCk7KXQ9dC5wcmV2aW91c1NpYmxpbmc7ZWxzZXt2YXIgaT10aGlzLmxpc3QucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO3Q9aVtpLmxlbmd0aC0xXX1pZih0JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWwpJiYodD1udWxsKSxudWxsPT09dCl7dmFyIHM9ZS5wYXJlbnROb2RlO2lmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZzLnByZXZpb3VzU2libGluZyl7dmFyIG49cy5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO24ubGVuZ3RoJiYodD1uW24ubGVuZ3RoLTFdKX19dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmhpZ2hsaWdodERvd249ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLm5leHRTaWJsaW5nO251bGwhPT10JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKTspdD10Lm5leHRTaWJsaW5nO2Vsc2UgdD10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO2lmKG51bGw9PT10JiZudWxsIT09ZSl7dmFyIGk9ZS5wYXJlbnROb2RlO2kuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZpLm5leHRTaWJsaW5nJiYodD1pLm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKSl9dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmxpc3REaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5saXN0KSxlfSxuLnByb3RvdHlwZS5vcHRpb25zPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPVwiXCIpO3ZhciB0LGk9dGhpcy5tYWluLmRhdGEuZmlsdGVyZWR8fHRoaXMubWFpbi5kYXRhLmRhdGE7aWYoKHRoaXMubGlzdC5pbm5lckhUTUw9XCJcIikhPT1lKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD1lLHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHQpO2lmKHRoaXMubWFpbi5jb25maWcuaXNBamF4JiZ0aGlzLm1haW4uY29uZmlnLmlzU2VhcmNoaW5nKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaGluZ1RleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQodCk7aWYoMD09PWkubGVuZ3RoKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHMuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaFRleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQocyl9Zm9yKHZhciBuPWZ1bmN0aW9uKGUpe2lmKGUuaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7dmFyIHQ9ZSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXApO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbCksYy5tYWluLmNvbmZpZy5zZWxlY3RCeUdyb3VwJiZjLm1haW4uY29uZmlnLmlzTXVsdGlwbGUmJmkuY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWxTZWxlY3RhYmxlKSxpLmlubmVySFRNTD10LmxhYmVsLG4uYXBwZW5kQ2hpbGQoaSk7dmFyIHM9dC5vcHRpb25zO2lmKHMpe2Zvcih2YXIgYT0wLG89czthPG8ubGVuZ3RoO2ErKyl7dmFyIGw9b1thXTtuLmFwcGVuZENoaWxkKGMub3B0aW9uKGwpKX1pZihjLm1haW4uY29uZmlnLnNlbGVjdEJ5R3JvdXAmJmMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7dmFyIHI9YztpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO2Zvcih2YXIgdD0wLGk9bi5jaGlsZHJlbjt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTstMSE9PXMuY2xhc3NOYW1lLmluZGV4T2Yoci5tYWluLmNvbmZpZy5vcHRpb24pJiZzLmNsaWNrKCl9fSl9fWMubGlzdC5hcHBlbmRDaGlsZChuKX1lbHNlIGMubGlzdC5hcHBlbmRDaGlsZChjLm9wdGlvbihlKSl9LGM9dGhpcyxhPTAsbz1pO2E8by5sZW5ndGg7YSsrKW4ob1thXSl9LG4ucHJvdG90eXBlLm9wdGlvbj1mdW5jdGlvbihyKXtpZihyLnBsYWNlaG9sZGVyKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpLGV9dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHIuY2xhc3MmJnIuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5jbGFzc0xpc3QuYWRkKGUpfSksci5zdHlsZSYmKHQuc3R5bGUuY3NzVGV4dD1yLnN0eWxlKTt2YXIgYz10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpO3QuZGF0YXNldC5pZD1yLmlkLHRoaXMubWFpbi5jb25maWcuc2VhcmNoSGlnaGxpZ2h0JiZ0aGlzLm1haW4uc2xpbSYmci5pbm5lckhUTUwmJlwiXCIhPT10aGlzLm1haW4uc2xpbS5zZWFyY2guaW5wdXQudmFsdWUudHJpbSgpP3QuaW5uZXJIVE1MPWEuaGlnaGxpZ2h0KHIuaW5uZXJIVE1MLHRoaXMubWFpbi5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZSx0aGlzLm1haW4uY29uZmlnLnNlYXJjaEhpZ2hsaWdodGVyKTpyLmlubmVySFRNTCYmKHQuaW5uZXJIVE1MPXIuaW5uZXJIVE1MKSx0aGlzLm1haW4uY29uZmlnLnNob3dPcHRpb25Ub29sdGlwcyYmdC50ZXh0Q29udGVudCYmdC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHQudGV4dENvbnRlbnQpO3ZhciBkPXRoaXM7dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD10aGlzLmRhdGFzZXQuaWQ7aWYoITA9PT1yLnNlbGVjdGVkJiZkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb24pe3ZhciBpPSExO2lmKGQubWFpbi5iZWZvcmVPbkNoYW5nZSYmZC5tYWluLmNvbmZpZy5pc011bHRpcGxlfHwoaT0hMCksZC5tYWluLmJlZm9yZU9uQ2hhbmdlJiZkLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgcz1kLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLG49SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzKSksYT0wO2E8bi5sZW5ndGg7YSsrKW5bYV0uaWQ9PT10JiZuLnNwbGljZShhLDEpOyExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG4pJiYoaT0hMCl9aSYmKGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8oZC5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKHQsXCJpZFwiKSxkLm1haW4ucmVuZGVyKCksZC5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLGQubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKTpkLm1haW4uc2V0KFwiXCIpKX1lbHNle2lmKHIuZGlzYWJsZWR8fHIuc2VsZWN0ZWQpcmV0dXJuO2lmKGQubWFpbi5jb25maWcubGltaXQmJkFycmF5LmlzQXJyYXkoYykmJmQubWFpbi5jb25maWcubGltaXQ8PWMubGVuZ3RoKXJldHVybjtpZihkLm1haW4uYmVmb3JlT25DaGFuZ2Upe3ZhciBvPXZvaWQgMCxsPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZC5tYWluLmRhdGEuZ2V0T2JqZWN0RnJvbURhdGEodCkpKTtsLnNlbGVjdGVkPSEwLGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8obz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGMpKSkucHVzaChsKTpvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobCkpLCExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG8pJiZkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9ZWxzZSBkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9fSk7dmFyIGk9YyYmYS5pc1ZhbHVlSW5BcnJheU9mT2JqZWN0cyhjLFwiaWRcIixyLmlkKTtyZXR1cm4oci5kaXNhYmxlZHx8aSkmJih0Lm9uY2xpY2s9bnVsbCxkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb258fHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxkLm1haW4uY29uZmlnLmhpZGVTZWxlY3RlZE9wdGlvbiYmdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkpLGk/dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uU2VsZWN0ZWQpOnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLm9wdGlvblNlbGVjdGVkKSx0fSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMubWFpbj1lLm1haW4sdGhpcy5jb250YWluZXI9dGhpcy5jb250YWluZXJEaXYoKSx0aGlzLmNvbnRlbnQ9dGhpcy5jb250ZW50RGl2KCksdGhpcy5zZWFyY2g9dGhpcy5zZWFyY2hEaXYoKSx0aGlzLmxpc3Q9dGhpcy5saXN0RGl2KCksdGhpcy5vcHRpb25zKCksdGhpcy5zaW5nbGVTZWxlY3RlZD1udWxsLHRoaXMubXVsdGlTZWxlY3RlZD1udWxsLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT8odGhpcy5tdWx0aVNlbGVjdGVkPXRoaXMubXVsdGlTZWxlY3RlZERpdigpLHRoaXMubXVsdGlTZWxlY3RlZCYmdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lcikpOih0aGlzLnNpbmdsZVNlbGVjdGVkPXRoaXMuc2luZ2xlU2VsZWN0ZWREaXYoKSx0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lcikpLHRoaXMubWFpbi5jb25maWcuYWRkVG9Cb2R5Pyh0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmlkKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCkpOnRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuc2VhcmNoLmNvbnRhaW5lciksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMubGlzdCl9dC5TbGltPXN9XSxuLmM9cyxuLmQ9ZnVuY3Rpb24oZSx0LGkpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDppfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIoaSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBzIGluIHQpbi5kKGkscyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHMpKTtyZXR1cm4gaX0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTIpKS5kZWZhdWx0O2Z1bmN0aW9uIG4oZSl7aWYoc1tlXSlyZXR1cm4gc1tlXS5leHBvcnRzO3ZhciB0PXNbZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiBpW2VdLmNhbGwodC5leHBvcnRzLHQsdC5leHBvcnRzLG4pLHQubD0hMCx0LmV4cG9ydHN9dmFyIGksc30pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgU3luY1N0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSBcIi4vTGFuZ3VhZ2VcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGdlbmVyaWMgY29tcG9uZW50IG9mIFN0YWRpYStcclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50IHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgbmFtZS5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ015IENvbXBvbmVudCc7XHJcbiAgICB0YWc6IHN0cmluZyA9IFwiY29tcG9uZW50XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgdW5pcXVlIElELCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBvbiBsb2FkLlxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBib29sZWFuIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCByZWNlaXZlIGV2ZW50cyBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGFjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHJlbmRlcmVyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuZXZlciB0aGUgY29tcG9uZW50IHNob3VsZCBzdGFydCBsb2FkaW5nLlxyXG4gICAgICovXHJcbiAgICBsb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IExhbmd1YWdlLmdldCh0aGlzLnRhZyArICcubmFtZScpO1xyXG4gICAgICAgIHRoaXMuaWQgPSAnc3RhZGlhcGx1c18nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVuZGVyZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxoc0U0ZT5jLXdpeicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSAoQXJyYXkgYXMgYW55KS5mcm9tKHJlbmRlcmVycykuZmluZCgocmVuZGVyZXI6IEhUTUxFbGVtZW50KSA9PiByZW5kZXJlci5zdHlsZS5vcGFjaXR5ICE9PSAnMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBDb21wb25lbnQgaGFzIGFuIGVsZW1lbnQgaW4gdGhlIERPTVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5yZW5kZXJlci5zdHlsZS5vcGFjaXR5ID09PSAnMCcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuZXZlciB0aGUgY29tcG9uZW50IGlzIHVubG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgdW5sb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25TdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgQ29tcG9uZW50IHNob3VsZCBzdGFydC5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgQ29tcG9uZW50IHNob3VsZCBzdG9wLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uY2UgZXZlcnkgc2Vjb25kLlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi9MYW5ndWFnZSc7XHJcblxyXG4vKipcclxuICogQSB1dGlsaXR5IGNsYXNzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nIFtbQ29tcG9uZW50fENvbXBvbmVudHNdXSBhbmQgZGVsaXZlcmluZyBldmVudHMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENvbXBvbmVudExvYWRlciB0eXBlLlxyXG4gKiBAY2xhc3MgQ29tcG9uZW50TG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBsaXN0IG9mIGFsbCByZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudHM6IENvbXBvbmVudFtdO1xyXG4gICAgdGltZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIHJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICByZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXJzIGEgY29tcG9uZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbHRlcihlID0+IHsgcmV0dXJuIGUuaWQgIT09IGNvbXBvbmVudC5pZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgY29tcG9uZW50IGxvYWRlci5cclxuICAgICAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgU3luY1N0b3JhZ2UuQ09NUE9ORU5UUy5nZXQoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IHJlc3VsdC5jb21wb25lbnRzO1xyXG4gICAgICAgICAgICBpZihzdG9yYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHN0b3JhZ2VbY29tcG9uZW50LnRhZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbY29tcG9uZW50LnRhZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdG9yYWdlW2NvbXBvbmVudC50YWddLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmVuYWJsZWQgPSBzdG9yYWdlW2NvbXBvbmVudC50YWddLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmVuYWJsZWQgJiYgIWNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC5sb2FkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTeW5jU3RvcmFnZS5DT01QT05FTlRTLnNldChzdG9yYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxyXG4gICAgICovXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQudW5sb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQub25VcGRhdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wVGltZXIoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xyXG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCBsYW5nX2VuVVNfZGF0YSBmcm9tICcuL2xhbmcvZW4tVVMuanNvbic7XHJcbmltcG9ydCBsYW5nX3N2U0VfZGF0YSBmcm9tICcuL2xhbmcvc3YtU0UuanNvbic7XHJcbmltcG9ydCBsYW5nX2ZyRlJfZGF0YSBmcm9tICcuL2xhbmcvZnItRlIuanNvbic7XHJcbmltcG9ydCBsYW5nX2l0SVRfZGF0YSBmcm9tICcuL2xhbmcvaXQtSVQuanNvbic7XHJcbmltcG9ydCBsYW5nX2VzRVNfZGF0YSBmcm9tICcuL2xhbmcvZXMtRVMuanNvbic7XHJcbmltcG9ydCBsYW5nX2RlREVfZGF0YSBmcm9tICcuL2xhbmcvZGUtREUuanNvbic7XHJcbmltcG9ydCBsYW5nX3VrVUFfZGF0YSBmcm9tICcuL2xhbmcvdWstVUEuanNvbic7XHJcbmltcG9ydCBsYW5nX2VuU1RFRUZfZGF0YSBmcm9tICcuL2xhbmcvZW4tU1RFRUYuanNvbic7XHJcbmltcG9ydCBsYW5nX2V1RVNfZGF0YSBmcm9tICcuL2xhbmcvZXUtRVMuanNvbic7XHJcbmltcG9ydCBsYW5nX2dsRVNfZGF0YSBmcm9tICcuL2xhbmcvZ2wtRVMuanNvbic7XHJcbmltcG9ydCBsYW5nX3J1UlVfZGF0YSBmcm9tICcuL2xhbmcvcnUtUlUuanNvbic7XHJcbmltcG9ydCBsYW5nX25sQkVfZGF0YSBmcm9tICcuL2xhbmcvbmwtQkUuanNvbic7XHJcblxyXG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRhZzogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgTGFuZ3VhZ2UubGFuZ3VhZ2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWU6IHN0cmluZywgdmFycz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBrZXlzID0gbmFtZS5zcGxpdCgvXFwuL2cpO1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICB2YWwgPSB2YWxba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBfdmFyIGluIHZhcnMpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5zcGxpdCgne3snICsgX3ZhciArICd9fScpLmpvaW4odmFyc1tfdmFyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWwgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmF1bHQoKSB7XHJcbiAgICAgICAgTGFuZ3VhZ2UuZGVmYXVsdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxhbmd1YWdlczogTGFuZ3VhZ2VbXSA9IFtdO1xyXG4gICAgc3RhdGljIGRlZmF1bHQ6IExhbmd1YWdlO1xyXG4gICAgc3RhdGljIGN1cnJlbnQ6IExhbmd1YWdlO1xyXG4gICAgc3RhdGljIGxvYWQoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSk6IHZvaWQge1xyXG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgZmlyc3QgbGFuZ3VhZ2UgdGhhdCBpc24ndCBlcXVhbCB0byB0aGUgZGVmYXVsdFxyXG4gICAgICAgIFN5bmNTdG9yYWdlLkxBTkdVQUdFLmdldCgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gcmVzdWx0W1N5bmNTdG9yYWdlLkxBTkdVQUdFLnRhZ107XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxhbmd1YWdlID09PSAnYXV0b21hdGljJykge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmF1dG9tYXRpYygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2dnZXIuaW5mbygnVXNpbmcgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbiAnICsgbGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5nLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmcudGFnID09PSBsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT09IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0KGxhbmd1YWdlOiBMYW5ndWFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGxhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhdXRvbWF0aWMoKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyBhcyBhbnkpLmZpbmQoXHJcbiAgICAgICAgICAgIChsOiBzdHJpbmcpID0+XHJcbiAgICAgICAgICAgICAgICBsLmxlbmd0aCA+PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy5kZWZhdWx0ID09PSB1bmRlZmluZWQgfHwgbCAhPT0gdGhpcy5kZWZhdWx0LnRhZylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGxhbmdfZGVERSA9IG5ldyBMYW5ndWFnZSgnRGV1dHNjaGUgKERFKScsICdkZS1ERScsIGxhbmdfZGVERV9kYXRhKTtcclxuICAgICAgICBsYW5nX2RlREUucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19lc0VTID0gbmV3IExhbmd1YWdlKCdFc3Bhw7FvbCAoRVMpJywgJ2VzLUVTJywgbGFuZ19lc0VTX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfZXNFUy5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX2VuVVMgPSBuZXcgTGFuZ3VhZ2UoJ0VuZ2xpc2ggKFVTKScsICdlbi1VUycsIGxhbmdfZW5VU19kYXRhKTtcclxuICAgICAgICBsYW5nX2VuVVMucmVnaXN0ZXIoKTtcclxuICAgICAgICBsYW5nX2VuVVMuc2V0RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBsYW5nX2VuU1RFRUYgPSBuZXcgTGFuZ3VhZ2UoJ0VuZ2xpc2ggKFN0ZWVmKScsICdlbi1TVEVFRicsIGxhbmdfZW5TVEVFRl9kYXRhKTtcclxuICAgICAgICAvLyBsYW5nX2VuU1RFRUYucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19mckZSID0gbmV3IExhbmd1YWdlKCdGcmFuw6dhaXMgKEZSKScsICdmci1GUicsIGxhbmdfZnJGUl9kYXRhKTtcclxuICAgICAgICBsYW5nX2ZyRlIucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19pdElUID0gbmV3IExhbmd1YWdlKCdJdGFsaWFubyAoSVQpJywgJ2l0LUlUJywgbGFuZ19pdElUX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfaXRJVC5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX3N2U0UgPSBuZXcgTGFuZ3VhZ2UoJ1N2ZW5za2EgKFNFKScsICdzdi1TRScsIGxhbmdfc3ZTRV9kYXRhKTtcclxuICAgICAgICBsYW5nX3N2U0UucmVnaXN0ZXIoKTtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbGFuZ191a1VBID0gbmV3IExhbmd1YWdlKCfQo9C60YDQsNGX0L3RgdGM0LrQsCAoVUEpJywgJ3VrLVVBJywgbGFuZ191a1VBX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfdWtVQS5yZWdpc3RlcigpO1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBsYW5nX2V1RVMgPSBuZXcgTGFuZ3VhZ2UoJ0V1c2thcmEgKEVVKScsICdldS1FUycsIGxhbmdfZXVFU19kYXRhKTtcclxuICAgICAgICBsYW5nX2V1RVMucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19nbEVTID0gbmV3IExhbmd1YWdlKCdHYWxlZ28gKEdMKScsICdnbC1FUycsIGxhbmdfZ2xFU19kYXRhKTtcclxuICAgICAgICBsYW5nX2dsRVMucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19ydVJVID0gbmV3IExhbmd1YWdlKCfRgNGD0YHRgdC60LjQuSAoUlUpJywgJ3J1LVJVJywgbGFuZ19ydVJVX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfcnVSVS5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX25sQkUgPSBuZXcgTGFuZ3VhZ2UoJ05lZGVybGFuZHMgKEJFKScsICdubC1CRScsIGxhbmdfbmxCRV9kYXRhKTtcclxuICAgICAgICBsYW5nX25sQkUucmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZywgdmFycz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmN1cnJlbnQuZ2V0KG5hbWUsIHZhcnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHByZWZpeDpzdHJpbmcgPSAnW1N0YWRpYStdJztcclxuXHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICBpbmZvID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ODICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IGJsYWNrJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/CfmJ8gJHtvYmouam9pbignICcpfWAsICdjb2xvcjogb3JhbmdlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVycm9yID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPinYwgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogNzAwJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudCA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+nqSAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBkYXJrZ3JlZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIER1YmlvdXNseSBjcmVhdGVkIGJ5IEFkcmlhbiBDb29uZXlcclxuICAgICAqIEBhdXRob3IgaHR0cDovL2FkcmlhbmNvb25leS5naXRodWIuaW9cclxuICAgICAqL1xyXG4gICAgaW1hZ2UgPSBmdW5jdGlvbih1cmw6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBnZXRCb3ggPSBmdW5jdGlvbih3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZzogXCIrXCIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJmb250LXNpemU6IDFweDsgcGFkZGluZzogXCIgKyBNYXRoLmZsb29yKGhlaWdodC8yKSArIFwicHggXCIgKyBNYXRoLmZsb29yKHdpZHRoLzIpICsgXCJweDsgbGluZS1oZWlnaHQ6IDA7XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRpbSA9IGdldEJveCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBkaW0uc3RyaW5nLCBkaW0uc3R5bGUgKyBcImJhY2tncm91bmQ6IHVybChcIiArIHVybCArIFwiKTsgYmFja2dyb3VuZC1zaXplOiBcIiArICh3aWR0aCkgKyBcInB4IFwiICsgKGhlaWdodCkgKyBcInB4OyBjb2xvcjogdHJhbnNwYXJlbnQ7XCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2dlcigpOyIsImltcG9ydCBkb3dubG9hZGVyIGZyb20gJy4vdXRpbC9kb3dubG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9ydGN1dCB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgZG93bmxvYWRlci5kb3dubG9hZChgPGh0bWw+PGJvZHk+PHNjcmlwdD53aW5kb3cubG9jYXRpb249XCIke3RoaXMudXJsfVwiPC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD5gLCB0aGlzLm5hbWUgKyBcIi5odG1cIiwgXCJ0ZXh0L2h0bWxcIik7XHJcbiAgICB9XHJcbn0iLCJjb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG4gICAgc3RhdGljIENPREVDID0gbmV3IExvY2FsU3RvcmFnZSgnQ29kZWMnLCAnY29kZWMnKTtcclxuICAgIHN0YXRpYyBSRVNPTFVUSU9OID0gbmV3IExvY2FsU3RvcmFnZSgnUmVzb2x1dGlvbicsICdyZXNvbHV0aW9uJyk7XHJcbiAgICBzdGF0aWMgTU9OSVRPUl9TVEFUUyA9IG5ldyBMb2NhbFN0b3JhZ2UoJ01vbml0b3IgU3RhdHMnLCAnbW9uaXRvci1zdGF0cycpO1xyXG4gICAgc3RhdGljIENBQ0hFX1ZFUlNJT04gPSBuZXcgTG9jYWxTdG9yYWdlKCdDYWNoZSBWZXJzaW9uJywgJ2NhY2hlLXZlcnNpb24nKTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0YWc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbIHRoaXMudGFnIF0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWU6IGFueSwgY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFt0aGlzLnRhZ106IHZhbHVlIH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KHN0b3JhZ2VzOiBMb2NhbFN0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHN0b3JhZ2VzLm1hcChlID0+IGUudGFnKSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQoc3RvcmFnZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHN0b3JhZ2VzLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyKCkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeW5jU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgTElCUkFSWV9HQU1FUyA9IG5ldyBTeW5jU3RvcmFnZSgnTGlicmFyeSBHYW1lcycsICdnYW1lcycpO1xyXG4gICAgc3RhdGljIExJQlJBUllfU09SVF9PUkRFUiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBPcmRlcicsICdzb3J0LW9yZGVyJyk7XHJcbiAgICBzdGF0aWMgTElCUkFSWV9TT1JUX0RJUkVDVElPTiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBEaXJlY3Rpb24nLCAnc29ydC1kaXJlY3Rpb24nKTtcclxuICAgIHN0YXRpYyBMQU5HVUFHRSA9IG5ldyBTeW5jU3RvcmFnZSgnTGFuZ3VhZ2UnLCAnbGFuZ3VhZ2UnKTtcclxuICAgIHN0YXRpYyBDT01QT05FTlRTID0gbmV3IFN5bmNTdG9yYWdlKCdDb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0YWc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsgdGhpcy50YWcgXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogYW55LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbdGhpcy50YWddOiB2YWx1ZSB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChzdG9yYWdlczogU3luY1N0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoc3RvcmFnZXMubWFwKGUgPT4gZS50YWcpLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldChzdG9yYWdlczoge1trZXk6IHN0cmluZ106IGFueX0sIGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChzdG9yYWdlcywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY2xlYXIoKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hbmFnZXIge1xyXG4gICAgYXBwZGF0YTogYW55O1xyXG4gICAgY29uc3RydWN0b3IoYXBwZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hcHBkYXRhID0gYXBwZGF0YTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tDYWNoZVZlcnNpb24oY2FsbGJhY2s6ICgpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5DQUNIRV9WRVJTSU9OLmdldChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYWNoZVZlcnNpb24gPSByZXN1bHRbTG9jYWxTdG9yYWdlLkNBQ0hFX1ZFUlNJT04udGFnXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNhY2hlVmVyc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuYXBwZGF0YVsnY2FjaGUtdmVyc2lvbiddID4gY2FjaGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGRhdGFbJ2NsZWFyLWtleXMnXS5sb2NhbC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZS5zZXQoe1trZXldOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZGF0YVsnY2xlYXIta2V5cyddLnN5bmMuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5zZXQoe1trZXldOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2NhbFN0b3JhZ2UuQ0FDSEVfVkVSU0lPTi5zZXQodGhpcy5hcHBkYXRhWydjYWNoZS12ZXJzaW9uJ10pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJjbGFzcyBVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RhZGlhJ3MgbWVudSBiYXIgZWxlbWVudCwgdXNlZCB0byBrbm93IHdoZW4gdGhlIHBsYXllciBoYXMgb3BlbmVkIHRoZSBtZW51LlxyXG4gICAgICovXHJcbiAgICBtZW51RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlgxYXN2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNZW51T3BlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW51RWxlbWVudC5zdHlsZS5vcGFjaXR5ICE9PSAnMCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdwbGF5ZXInKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkhvbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdob21lJykgIT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5TdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlJykgIT09IC0xICYmICF0aGlzLmlzSW5TdG9yZURldGFpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5TdG9yZURldGFpbCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlL2RldGFpbHMnKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlc2FuZGJveChqYXZhc2NyaXB0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gamF2YXNjcmlwdDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlsKCk7IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJEYXRhYmFzZSB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbm5lY3RlZDogYm9vbGVhbjtcclxuICAgIGNvbm5lY3Rpb246IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KGNhbGxiYWNrPzogKGNvbm5lY3Rpb246YW55KSA9PiB7fSkge1xyXG4gICAgICAgIGlmKHRoaXMuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3I6IEFscmVhZHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdGhpcy51cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0aW9uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5jb25uZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvciB3aGVuIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2U6JywgeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3Igd2hlbiBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOicsIHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKG51bGwpOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25uZWN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgaWYoIXRoaXMuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3I6IE5vdCBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY29ubmVjdChjYWxsYmFjaz86IChjb25uZWN0aW9uOm9iamVjdCkgPT4ge30pIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoY2FsbGJhY2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5cclxuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG4vKipcclxuICogQSBidXR0b24gYWxsb3dpbmcgdXNlcnMgdG8gcGxheSBTdGFkaWEgaW4gd2luZG93ZWQgbW9kZS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQWxsb3dXaW5kb3dlZE1vZGUgdHlwZS5cclxuICogQGNsYXNzIEFsbG93V2luZG93ZWRNb2RlXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWxsb3dXaW5kb3dlZE1vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnYWxsb3ctd2luZG93ZWQtbW9kZSc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gdG9nZ2xlIHdpbmRvd2VkIG1vZGUuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHdpbmRvd2VkIG1vZGUgaXMgZW5hYmxlZCBvciBub3RcclxuICAgICAqL1xyXG4gICAgd2luZG93ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gTWFpbiBldmVudCwgc3RvcHMgYnVpbHQtaW4gZnVsbHNjcmVlbiBldmVudHMgZnJvbSByZWFjaGluZyBTdGFkaWEgd2hlbmV2ZXIgd2luZG93ZWQgbW9kZSBpcyBlbmFibGVkLlxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZnVsbHNjcmVlbmNoYW5nZScsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYud2luZG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnRlcnMgd2luZG93ZWQgbW9kZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgZW50ZXJXaW5kb3dlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndpbmRvd2VkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhpdHMgd2luZG93ZWQgbW9kZVxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgZXhpdFdpbmRvd2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2luZG93ZWQgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KFxyXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3dpbmRvd2VkLnN2ZycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKFxyXG4gICAgICAgICAgICBpY29uLFxyXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLndpbmRvd2VkJyksXHJcbiAgICAgICAgICAgIHRoaXMuaWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhpdFdpbmRvd2VkKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBidXR0b24gbGFiZWxzIGFuZCBpY29ucyB0byBmaXQgY3VycmVudCBtb2RlLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQnV0dG9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy93aW5kb3dlZC5zdmcnKTtcclxuICAgICAgICBjb25zdCBpY29uX2V4aXQgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoXHJcbiAgICAgICAgICAgICdpbWFnZXMvaWNvbnMvd2luZG93ZWRfZXhpdC5zdmcnXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0SWNvbihpY29uX2V4aXQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRUaXRsZShcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlLmdldCgnYWxsb3ctd2luZG93ZWQtbW9kZS5idXR0b24tbGFiZWwuZnVsbHNjcmVlbicpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0SWNvbihpY29uKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0VGl0bGUoXHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLndpbmRvd2VkJylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hldGhlciBldmVudHMgaGF2ZSBiZWVuIGFkZGVkIGFscmVhZHkgb3Igbm90LlxyXG4gICAgZXZlbnRzQWRkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyBjb21wb25lbnQgZWxlbWVudHMgYW5kIHZhcmlhYmxlc1xyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWYgbWVudSBpcyBvcGVuIGFuZCBhIGdhbWUgaXMgcGxheWluZy5cclxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkgJiYgVXRpbC5pc0luR2FtZSgpKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBpbiB0aGUgY3VycmVudCByZW5kZXJlclxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBuZXcgcmVuZGVyZXJzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY3JlYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBldmVudHMgYXJlIGFscmVhZHkgYWRkZWQsIGRvbid0IGFkZCB0aGVtIGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50c0FkZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLndpbmRvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leGl0V2luZG93ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5lbnRlcldpbmRvd2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHNBZGRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9DbG9jay5zY3NzJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcblxyXG4vKipcclxuICogQSBzaW1wbGUgY2xvY2sgZGlzcGxheWVkIGluIHRoZSBTdGFkaWEgTWVudS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQ2xvY2sgdHlwZS5cclxuICogQGNsYXNzIENsb2NrXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xvY2sgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnY2xvY2snO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNsb2NrIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHNpbXBsZSA8c3Bhbj4sIGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMsIGFuZCBzdG9yZXMgaXQgaW4gW0BsaW5rICNlbGVtZW50XVxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfY2xvY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyduYW1lJzogdGhpcy5uYW1lfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7J25hbWUnOiB0aGlzLm5hbWV9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBjbG9jayB3aGVuIGl0J3MgdmlzaWJsZVxyXG4gICAgICAgIGlmKFV0aWwuaXNNZW51T3BlbigpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHhoQXlmJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHJlcGVuZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGltZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvRm9yY2VDb2RlYy5zY3NzJztcclxuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL1VJVGFiJztcclxuaW1wb3J0IHsgVUlSb3cgfSBmcm9tICcuLi91aS9VSVJvdyc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL3VpL1NlbGVjdCc7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XHJcbmltcG9ydCB7IFJlc29sdXRpb24gfSBmcm9tICcuL0ZvcmNlUmVzb2x1dGlvbic7XHJcblxyXG5jb25zdCBjaHJvbWUgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xyXG5cclxuLyoqXHJcbiAqIEEgZHJvcGRvd24gYWxsb3dpbmcgY2hhbmdpbmcgb2YgdGhlIGNvZGVjLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBGb3JjZUNvZGVjIHR5cGUuXHJcbiAqIEBjbGFzcyBGb3JjZUNvZGVjXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9yY2VDb2RlYyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICdmb3JjZS1jb2RlYyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBjb2RlYy5cclxuICAgICAqL1xyXG4gICAgY29kZWM6IG51bWJlciA9IENvZGVjLkFVVE9NQVRJQztcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBUaGUgY29kZWMgU2VsZWN0IGJveC5cclxuICAgICAqL1xyXG4gICAgc2VsZWN0OiBTZWxlY3Q7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogVGhlIFN0YWRpYSsgVUkgVGFiLlxyXG4gICAgICovXHJcbiAgICB0YWI6IFVJVGFiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdsb2JhbCBzbmFja2Jhci5cclxuICAgICAqL1xyXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhYjogVUlUYWIsIHNuYWNrYmFyOiBTbmFja2Jhcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5DT0RFQy5nZXQoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZWMgPSByZXN1bHQuY29kZWM7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuQ09ERUMuc2V0KHRoaXMuY29kZWMsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50YWIuYWRkUm93KFxyXG4gICAgICAgICAgICBuZXcgVUlSb3coXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19yb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb2RlY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLkFVVE9NQVRJQ31cIj4ke0xhbmd1YWdlLmdldCgnYXV0b21hdGljJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuVlA5fVwiPiR7TGFuZ3VhZ2UuZ2V0KCd2cDknKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5IMjY0fVwiPiR7TGFuZ3VhZ2UuZ2V0KCdoMjY0Jyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3RhZGlhcGx1c19idXR0b24tc21hbGxcIj4ke0xhbmd1YWdlLmdldCgnYXBwbHknKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9J3N0YWRpYXBsdXNfbXV0ZWQnIGlkPScke3RoaXMuaWR9LTRrLXRvb2x0aXAnIHN0eWxlPSdkaXNwbGF5OiBub25lJz4ke0xhbmd1YWdlLmdldCgnZm9yY2UtY29kZWMuNGstdG9vbHRpcCcpfTwvcD5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogQ29kZWMuQVVUT01BVElDIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QuZ2V0KClbMF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc25hY2tiYXIuYWN0aXZhdGUoTGFuZ3VhZ2UuZ2V0KCdzbmFja2Jhci5yZWxvYWQtdG8tdXBkYXRlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2UuUkVTT0xVVElPTi5nZXQocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQucmVzb2x1dGlvbiA9PT0gUmVzb2x1dGlvbi5VSERfNEspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb2RlYyA9IENvZGVjLlZQOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGlzYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLTRrLXRvb2x0aXAnKSBhcyBIVE1MRWxlbWVudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5zZXQoc2VsZi5jb2RlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yY2VDb2RlYy5zZXRDb2RlYyhzZWxmLmNvZGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVsb2FkOiAocm93OlVJUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QgPSBuZXcgU2VsZWN0KHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLCB7IHBsYWNlaG9sZGVyOiBDb2RlYy5BVVRPTUFUSUMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLmNvZGVjKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoXCJjb21wb25lbnQuZW5hYmxlZFwiLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB1c2VkIENvZGVjXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvZGVjXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0Q29kZWMoY29kZWM6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XHJcbiAgICAgICAgY2FzZSBDb2RlYy5WUDk6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiLCAne1widnA5XCI6XCJsaWJ2cHhcIn0nKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ29kZWMuSDI2NDpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIsICd7XCJ2cDlcIjpcImxpYnZweFwiLFwiaDI2NFwiOlwiRkZtcGVnXCJ9Jyk7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIENvZGVjLkFVVE9NQVRJQzpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBraW5kcyBvZiBjb2RlY3MsIHJlcHJlc2VudGVkIGFzIG51bWJlcnMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENvZGVjIHR5cGVcclxuICogQGNsYXNzIENvZGVjXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29kZWMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvbWF0aWMgY29kZWMsIGxldCBTdGFkaWEgZGVjaWRlIG9uIGl0J3Mgb3duLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZQOSBjb2RlYywgdXN1YWxseSB3b3JrcyBiZXR0ZXIgdGhhbiBIMjY0IGJ1dCBhdCB0aGUgY29zdCBvZiBsb3dlciBxdWFsaXR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVlA5ID0gMTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEgyNjQgY29kZWMsIGhpZ2ggcXVhbGl0eSBhbmQgTWFjLU9TIGNvbXBhdGlibGUgY29kZWMgYnV0IHdpdGggbGF0ZW5jeSBpc3N1ZXMuIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgSDI2NCA9IDI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9Gb3JjZVJlc29sdXRpb24uc2Nzcyc7XHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9VSVRhYic7XHJcbmltcG9ydCB7IFVJUm93LCBVSVJvd09wdGlvbnMgfSBmcm9tICcuLi91aS9VSVJvdyc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL3VpL1NlbGVjdCc7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XHJcblxyXG5jb25zdCBjaHJvbWUgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xyXG5cclxuLyoqXHJcbiAqIEEgZHJvcGRvd24gYWxsb3dpbmcgY2hhbmdpbmcgb2YgdGhlIHJlc29sdXRpb24uXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIEZvcmNlUmVzb2x1dGlvbiB0eXBlLlxyXG4gKiBAY2xhc3MgRm9yY2VSZXNvbHV0aW9uXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9yY2VSZXNvbHV0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ2ZvcmNlLXJlc29sdXRpb24nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgcmVzb2x1dGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVzb2x1dGlvbjogbnVtYmVyID0gUmVzb2x1dGlvbi5BVVRPTUFUSUM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVzb2x1dGlvbiBTZWxlY3QgYm94LlxyXG4gICAgICovXHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBTdGFkaWErIFVJIFRhYlxyXG4gICAgICovXHJcbiAgICB0YWI6IFVJVGFiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdsb2JhbCBTbmFja2JhclxyXG4gICAgICovXHJcbiAgICBzbmFja2JhcjogU25hY2tiYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiOiBVSVRhYiwgc25hY2tiYXI6IFNuYWNrYmFyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWIgPSB0YWI7XHJcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMgd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjaHJvbWUgc3RvcmFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxyXG4gICAgICogQG1lbWJlcm9mIEZvcmNlUmVzb2x1dGlvblxyXG4gICAgICovXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuUkVTT0xVVElPTi5nZXQoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc3VsdC5yZXNvbHV0aW9uO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VSZXNvbHV0aW9uXHJcbiAgICAgKi9cclxuICAgIHNldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5SRVNPTFVUSU9OLnNldCh0aGlzLnJlc29sdXRpb24sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgRm9yY2VSZXNvbHV0aW9uLnNldFJlc29sdXRpb24odGhpcy5yZXNvbHV0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnRhYi5hZGRSb3coXHJcbiAgICAgICAgICAgIG5ldyBVSVJvdyhcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlc29sdXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLkFVVE9NQVRJQ31cIj4ke0xhbmd1YWdlLmdldCgnYXV0b21hdGljJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5VSERfNEt9XCI+JHtMYW5ndWFnZS5nZXQoJzRrJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5GSER9XCI+JHtMYW5ndWFnZS5nZXQoJzEwODBwJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3RhZGlhcGx1c19idXR0b24tc21hbGxcIj4ke0xhbmd1YWdlLmdldCgnYXBwbHknKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiPiR7TGFuZ3VhZ2UuZ2V0KCdmb3JjZS1yZXNvbHV0aW9uLm5vdGUnKX08L3A+XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCArICctcm93JyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZTogKHJvdzpVSVJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IFJlc29sdXRpb24uQVVUT01BVElDIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gcm93LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x1dGlvbiA9IHBhcnNlSW50KHNlbGYuc2VsZWN0LmdldCgpWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc25hY2tiYXIuYWN0aXZhdGUoTGFuZ3VhZ2UuZ2V0KCdzbmFja2Jhci5yZWxvYWQtdG8tdXBkYXRlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnNldChzZWxmLnJlc29sdXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvblJlbG9hZDogKHJvdzpVSVJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogUmVzb2x1dGlvbi5BVVRPTUFUSUMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLnJlc29sdXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB1c2VyIFtbUmVzb2x1dGlvbl1dXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gdGhlIHVzZXIgUmVzb2x1dGlvblxyXG4gICAgICogQG1lbWJlcm9mIEZvcmNlUmVzb2x1dGlvblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGg7XHJcbiAgICAgICAgc3dpdGNoIChyZXNvbHV0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUmVzb2x1dGlvbi5VSERfNEs6XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IDM4NDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAyMTYwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uRkhEOlxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUmVzb2x1dGlvbi5BVVRPTUFUSUM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdhdmFpbFdpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnYXZhaWxIZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnd2lkdGgnLCB7IHZhbHVlOiAke3dpZHRofSB9KTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdoZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBraW5kcyBvZiByZXNvbHV0aW9ucywgcmVwcmVzZW50ZWQgYXMgbnVtYmVycy5cclxuICpcclxuICogQGV4cG9ydCB0aGUgUmVzb2x1dGlvbiB0eXBlXHJcbiAqIEBjbGFzcyBSZXNvbHV0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVzb2x1dGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIEF1dG9tYXRpYywgbGV0IFN0YWRpYSBoYW5kbGUgcmVzb2x1dGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBBVVRPTUFUSUMgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogNEssIG9yIDM4NDB4MjE2MFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVUhEXzRLID0gMTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBGdWxsIEhELCBvciAxOTIweDEwODBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEZIRCA9IDI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9MaWJyYXJ5RmlsdGVyLnNjc3MnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcclxuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XHJcbmltcG9ydCB7IENoZWNrYm94LCBDaGVja2JveFNoYXBlIH0gZnJvbSAnLi4vdWkvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgU3luY1N0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlJztcclxuaW1wb3J0IHsgU2hvcnRjdXQgfSBmcm9tICcuLi9TaG9ydGN1dCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vdWkvTW9kYWwnO1xyXG5pbXBvcnQgJy4uL3VpL3N0eWxlcy9CdXR0b24uc2Nzcyc7XHJcblxyXG5jb25zdCB7IGNocm9tZSwgQXJyYXkgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG4vKipcclxuICogQSBmaWx0ZXJpbmcgc3lzdGVtIGFsbG93aW5nIGhpZGluZyBhbmQgc2hvd2luZyBzcGVjaWZpYyBnYW1lcyBpbiB5b3VyIGxpYnJhcnkgYXMgd2VsbCBhcyBvcmRlcmluZyB0aGVtIGJ5IG5hbWUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIExpYnJhcnlGaWx0ZXIgdHlwZVxyXG4gKiBAY2xhc3MgTGlicmFyeUZpbHRlclxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExpYnJhcnlGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnbGlicmFyeS1maWx0ZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBvZiBnYW1lcyBhbmQgZ2FtZSBkYXRhIGltcG9ydGVkIGZyb20gdGhlIERPTVxyXG4gICAgICovXHJcbiAgICBnYW1lczogYW55ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbmFja2JhciB1c2VkIHRvIGRpc3BsYXkgbWVzc2FnZXMgd2hlbiBoaWRpbmcgYW5kIHNob3dpbmcgZ2FtZXNcclxuICAgICAqL1xyXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlsdGVyIGJhciBhbGxvd2luZyBmb3IgY29udHJvbHMgb2YgdGhlIGxpYnJhcnkgZmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGZpbHRlckJhcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYm94IHVzZWQgdG8gb3JkZXIgdGhlIGdhbWVzXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdDogU2VsZWN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VycmVudCBmaWx0ZXJpbmcgb3JkZXJcclxuICAgICAqL1xyXG4gICAgb3JkZXI6IEZpbHRlck9yZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIGFsbCBnYW1lcyBiZSBzaG93biByZWdhcmRsZXNzIGlmIHRoZXlyZSBoaWRkZW4gb3Igbm90P1xyXG4gICAgICovXHJcbiAgICBzaG93QWxsOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tib3ggc2hvd2luZyBoaWRkZW4gZ2FtZXMuXHJcbiAgICAgKi9cclxuICAgIGNoZWNrYm94OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpcmVjdGlvbiBvZiB3aGljaCBnYW1lcyB3aWxsIGJlIG9yZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIGdhbWVzIGluIHlvdXIgbGlicmFyeS5cclxuICAgICAqL1xyXG4gICAgZ2FtZVRpbGVzOiBOb2RlTGlzdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YWRpYUdhbWVEQiBEYXRhYmFzZS5cclxuICAgICAqL1xyXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhZGlhR2FtZURCIFVVSUQgTWFwLlxyXG4gICAgICovXHJcbiAgICB1dWlkTWFwOiBXZWJEYXRhYmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVJIE1vZGFsXHJcbiAgICAgKi9cclxuICAgIG1vZGFsOiBNb2RhbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzbmFja2JhcjogU25hY2tiYXIsIGRhdGFiYXNlOiBXZWJEYXRhYmFzZSwgdXVpZE1hcDogV2ViRGF0YWJhc2UsIG1vZGFsOiBNb2RhbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vIEltcG9ydCBkYXRhYmFzZSAmIHV1aWRNYXAgZnJvbSBpbmRleC5qc1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcclxuICAgICAgICB0aGlzLnV1aWRNYXAgPSB1dWlkTWFwO1xyXG5cclxuICAgICAgICAvLyBJbXBvcnQgc25hY2tiYXIgZnJvbSBpbmRleC5qc1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IG1vZGFsO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgbmV3IGZpbHRlciBiYXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuZmlsdGVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJCYXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgYXJvdW5kIGV2ZXJ5IGdhbWUgYW5kIGluaXRpYWxpemVzIHRoZSBlbGVtZW50cyBuZWNlc3NhcnkgdG8gc2hvdyBvciBoaWRlIGl0LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUFsbFdyYXBwZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgdGhpcy5nYW1lVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRpbGUgYXMgRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlV3JhcHBlcihlbGVtZW50LCB0aGlzLmdldFVVSUQoZWxlbWVudCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmdhbWVUaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnREaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZ2FtZSBVVUlEIGZyb20gaXQncyBqc2xvZyBhdHRyaWJ1dGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0aWxlXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgZ2V0VVVJRCh0aWxlOiBFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbGVcclxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnanNsb2cnKVxyXG4gICAgICAgICAgICAuc3BsaXQoJzsgJylbMV1cclxuICAgICAgICAgICAgLnN1YnN0cmluZygzKTtcclxuICAgIH1cclxuXHJcbiAgICB3cmFwcGVyRXhpc3RzKHV1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCArICctJyArIHV1aWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSB0aWxlIGVsZW1lbnQsIGNyZWF0ZSBhIHdyYXBwZXIgYXJvdW5kIGl0IGFuZCBhbiBpY29uIGFsbG93aW5nIGl0IHRvIGJlIHNob3duIG9yIGhpZGRlbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdGhlIGdhbWUgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgdGhlIGdhbWUgdXVpZFxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlV3JhcHBlcihlbGVtZW50OiBFbGVtZW50LCB1dWlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy53cmFwcGVyRXhpc3RzKHV1aWQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcclxuICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW3V1aWRdXTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB3cmFwcGVyXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdnYW1lLXV1aWQnLCB1dWlkKTtcclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZ2FtZS1uYW1lJywgZW50cnlbMV0pO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXInKTtcclxuICAgICAgICB3cmFwcGVyLmlkID0gdGhpcy5pZCArICctJyArIHV1aWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWNvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24td3JhcHBlcicpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHZpc2liaWxpdHkgaWNvblxyXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aXNpYmlsaXR5LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJyk7XHJcbiAgICAgICAgdmlzaWJpbGl0eS5pbm5lckhUTUwgPSAndmlzaWJpbGl0eSc7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdmlzaWJpbGl0eSBpY29uXHJcbiAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaG9ydGN1dC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicpO1xyXG4gICAgICAgIHNob3J0Y3V0LmlubmVySFRNTCA9ICdhZGRfdG9fcXVldWUnO1xyXG5cclxuICAgICAgICAvLyBXcmFwIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgZWxlbWVudCBhbmQgYWRkIHRoZSBpY29uIGJlZm9yZSBpdFxyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudCk7XHJcbiAgICAgICAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQodmlzaWJpbGl0eSk7XHJcbiAgICAgICAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQoc2hvcnRjdXQpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbldyYXBwZXIpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHRoZSBzdG9yYWdlIGZvciB2aXNpYmlsaXR5LCBoaWRlIHRoZSBnYW1lIGlmIGJvdGggJ3Zpc2libGUnIGFuZCAnc2hvd0FsbCcgaXMgZmFsc2VcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZXMuaGFzT3duUHJvcGVydHkodXVpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXSA9IHsgdmlzaWJsZTogdHJ1ZSB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSAmJiAhdGhpcy5zaG93QWxsKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgaWNvbiBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciByYXRoZXIgdGhhbiB0aGUgdG9wIGxlZnQgdXNpbmdcclxuICAgICAgICAvLyBhIG1hcmdpbiAodXNpbmcgdGhlICdsZWZ0JyBjc3MgYXR0cmlidXRlIGlzIG5vdCBwb3NzaWJsZSlcclxuICAgICAgICBpY29uV3JhcHBlci5zdHlsZS5tYXJnaW5MZWZ0ID0gZWxlbWVudC5jbGllbnRXaWR0aCAtIHZpc2liaWxpdHkuY2xpZW50V2lkdGggKyAncHgnO1xyXG4gICAgICAgIGljb25XcmFwcGVyLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGBjYWxjKDEwMCUgLSAke2VsZW1lbnQuY2xpZW50V2lkdGggL1xyXG4gICAgICAgICAgICAyfXB4KSAke2VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMn1weGA7XHJcblxyXG4gICAgICAgIC8vIFdoZW4gdGhlIGljb24gaXMgY2xpY2tlZCBvblxyXG4gICAgICAgIHZpc2liaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmdhbWVzW3V1aWRdLnZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlLCBzZXQgaXQgdG8gaGlkZGVuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIuaGlkZS1nYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2Ugc2V0IGl0IHRvIHNob3duXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIuc2hvdy1nYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBnYW1lJ3MgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhbWUod3JhcHBlciwgZWxlbWVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNob3J0Y3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaG9ydCA9IG5ldyBTaG9ydGN1dCgnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9wbGF5ZXIvJyArIHV1aWQsIGVudHJ5WzFdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwuYWN0aXZhdGUoYFxyXG4gICAgICAgICAgICAgICAgPGg0PkNyZWF0ZSBhIERlc2t0b3AgU2hvcnRjdXQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+UHJlc3MgdGhlIGJ1dHRvbiBiZWxvdyB0byBjcmVhdGUgYSBkZXNrdG9wIHNob3J0Y3V0IGZvciAke2VudHJ5WzFdfS48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ1R2RFhkIFFBQXlXZCBGankwNWQgaXZXVWhjIFFTREh5YyBycGdaemMgUmt5SDFlIHN0YWRpYXBsdXNfYnV0dG9uXCIgaWQ9XCJzaG9ydGN1dC1idXR0b25cIj5TYXZlIFNob3J0Y3V0PC9kaXY+XHJcbiAgICAgICAgICAgIGApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG9ydGN1dC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNob3J0LnNhdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgYSBnYW1lJ3MgdmlzaWJpbGl0eSwgbWFraW5nIHN1cmUgaXQncyBvbmx5IHNob3duIHdoZW4gaXQncyBzdXBwb3NlZCB0b1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gd3JhcHBlciBUaGUgZ2FtZSdzIHdyYXBwZXIsIGNyZWF0ZWQgYnkgW1tjcmVhdGVXcmFwcGVyXV1cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGlsZSBUaGUgZ2FtZSB0aWxlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFuaW1hdGUgU2hvdWxkIHRoZSBnYW1lIGhhdmUgYW4gYW5pbWF0ZWQgY2xvc2luZyBlZmZlY3Q/XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICB1cGRhdGVHYW1lKHdyYXBwZXI6IEVsZW1lbnQsIHRpbGU6IEVsZW1lbnQsIGFuaW1hdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGdhbWUgVVVJRFxyXG4gICAgICAgIGNvbnN0IHV1aWQgPSB0aGlzLmdldFVVSUQodGlsZSk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgZ2FtZSBpY29uXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJy5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbidcclxuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpc24ndCB2aXNpYmxlLi4uXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUpIHtcclxuICAgICAgICAgICAgLy8gLi4uYnV0IGFsbCBnYW1lcyBzaG91bGQgc3RpbGwgYmUgc2hvd25cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0FsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBpY29uIHRvIGRpc3BsYXkgdGhhdCBpdCdzIG5vdCB2aXNpYmxlIGJ1dCBzaG93biBhbnl3YXlzXHJcbiAgICAgICAgICAgICAgICBpY29uLmlubmVySFRNTCA9ICd2aXNpYmlsaXR5X29mZic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzbid0IGhpZGRlblxyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJywgJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLi4uXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5pZiB0aGUgaGlkaW5nIHNob3VsZCBiZSBhbmltYXRlZFxyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGYWRlIHRoZSBnYW1lIHRpbGUgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIDEgc2Vjb25kLCBoaWRlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgbm9ybWFsbHlcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGdhbWUgaXMgdmlzaWJsZVxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGljb24gc3RheXMgaW4gcGxhY2UgYW5kIGRvZXNuJ3QgZ2V0IHJlc2V0IGJhY2sgdG8gdGhlIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgICBpY29uLnN0eWxlLm1hcmdpbkxlZnQgPSB0aWxlLmNsaWVudFdpZHRoIC0gaWNvbi5jbGllbnRXaWR0aCArICdweCc7XHJcblxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGljb24gc2hvd3MgdGhhdCBpdCBpcyB2aXNpYmxlXHJcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gJ3Zpc2liaWxpdHknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBhbGwgZ2FtZXMsIHNob3J0aGFuZCBmb3IgbG9vcGluZyB0aHJvdWdoIHRpbGVzIGFuZCB1cGRhdGluZyB0aGVtIGluZGl2aWR1YWxseVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUFsbEdhbWVzKCkge1xyXG4gICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHYW1lKHRpbGUucGFyZW50RWxlbWVudCwgdGlsZSBhcyBFbGVtZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIHRoZSBzdG9yZWQgZGF0YSBmcm9tIHRoZSBzeW5jaHJvbml6ZWQgY2hyb21lIHN0b3JhZ2UgKHN0b3JlZCBpbiB5b3VyIHVzZXIgZGF0YSlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC8vIENhbGxiYWNrIHRoYXQgaXMgcnVuIGFmdGVyIHRoZSBkYXRhIGhhcyBiZWVuIHJlYWRcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgpID0+IGFueSA9ICgpID0+IHt9KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzID0ge307XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTeW5jU3RvcmFnZS5nZXQoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFN5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMsXHJcbiAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfT1JERVIsXHJcbiAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXMgPSByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddICE9PSB1bmRlZmluZWQgPyByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddIDoge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyID1cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX09SREVSLnRhZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBGaWx0ZXJPcmRlci5SRUNFTlQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04udGFnXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04udGFnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORztcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIHRvIHRoZSBzeW5jaHJvbml6ZWQgY2hyb21lIHN0b3JhZ2UgKHN0b3JlZCBpbiB5b3VyIHVzZXIgZGF0YSlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC8vIENhbGxiYWNrIHRoYXQgaXMgcnVuIGFmdGVyIHRoZSBkYXRhIGhhcyBiZWVuIHdyaXR0ZW5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKSA9PiBhbnkgPSAoKSA9PiB7fSkge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU3luY1N0b3JhZ2Uuc2V0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBbU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUy50YWddOiB0aGlzLmdhbWVzLFxyXG4gICAgICAgICAgICAgICAgW1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9PUkRFUi50YWddOiB0aGlzLm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgW1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04udGFnXTogdGhpcy5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWRcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KFxyXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHZhcmlldHkgb2YgZXZlbnRzIHRvIHRoZSBmaWx0ZXIgYmFyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgYWRkRmlsdGVyQmFyRXZlbnRzKCkge1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIG9yZGVyIGlzIGNoYW5nZWQsIHNldCBpdCBpbiB0aGUgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMuc2VsZWN0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyID0gcGFyc2VJbnQodGhpcy5zZWxlY3QuZ2V0KClbMF0pIGFzIEZpbHRlck9yZGVyO1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiB0aGUgc2hvdyBhbGwgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlIHRoZSBzaG93QWxsIHZhcmlhYmxlIGFuZCB1cGRhdGUgdGhlIGdhbWVzXHJcbiAgICAgICAgdGhpcy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QWxsID0gKHRoaXMuY2hlY2tib3ggYXMgYW55KS5jaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbEdhbWVzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJyMnICsgdGhpcy5maWx0ZXJCYXIuaWQgKyAnLWRpcmVjdGlvbidcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgc29ydCBkaXJlY3Rpb25cclxuICAgICAgICBkaXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZXNlU29ydERpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXZlc2VTb3J0RGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICcjJyArIHRoaXMuZmlsdGVyQmFyLmlkICsgJy1kaXJlY3Rpb24nXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uREVTQ0VORElORztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVNvcnREaXJlY3Rpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlU29ydERpcmVjdGlvbigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnIycgKyB0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGVzY2VuZGluZycsIHRoaXMuZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5ERVNDRU5ESU5HKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhc2NlbmRpbmcnLCB0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW5zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBzdG9wcGVkLCBkZXN0cm95cyBuZWNlc3NhcnkgcGFydHNcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJylcclxuICAgICAgICAgICAgLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoXHJcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU29ydHMgdGhlIGdhbWUgbGlzdCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc29ydCBvcmRlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzb3J0R2FtZXMoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IChBcnJheS5mcm9tKHRoaXMuZ2FtZVRpbGVzKSBhcyBFbGVtZW50W10pLm1hcChcclxuICAgICAgICAgICAgKGUpID0+IGUucGFyZW50RWxlbWVudFxyXG4gICAgICAgICk7IC8vIEdldCBhbGwgd3JhcHBlcnMgYXMgYW4gYXJyYXlcclxuICAgICAgICBhcnIgPSBhcnIuc29ydChGaWx0ZXJPcmRlci5nZXRTb3J0ZXIodGhpcy5vcmRlcikgYXMgYW55KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkcpIHtcclxuICAgICAgICAgICAgYXJyID0gYXJyLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyci5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnByZXBlbmQoZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyBldmVyeSBzZWNvbmQsIGNyZWF0ZXMgYW5kIHVwZGF0ZXMgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNJbkhvbWUoKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5DVlZYZmMuWVl5M1piJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlkID0gdGhpcy5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7RmlsdGVyT3JkZXIuUkVDRU5UfVwiPiR7TGFuZ3VhZ2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5LWZpbHRlci5yZWNlbnQnXHJcbiAgICAgICAgICAgICAgICApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlck9yZGVyLkFMUEhBQkVUSUNBTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCI+JHtMYW5ndWFnZS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnktZmlsdGVyLmFscGhhYmV0aWNhbCdcclxuICAgICAgICAgICAgICAgICl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJBTkRPTX1cIj4ke0xhbmd1YWdlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAnbGlicmFyeS1maWx0ZXIucmFuZG9tJ1xyXG4gICAgICAgICAgICAgICAgKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0nJHt0aGlzLmZpbHRlckJhci5pZCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctZGlyZWN0aW9uJ30nIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgYXNjZW5kaW5nIHN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwcmV0dHksIGNoZWNrYm94IH0gPSBuZXcgQ2hlY2tib3goXHJcbiAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdsaWJyYXJ5LWZpbHRlci5zaG93LWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEJpZ2dlcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTaGFwZShDaGVja2JveFNoYXBlLkNVUlZFRClcclxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIuYXBwZW5kQ2hpbGQocHJldHR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3ggPSBjaGVja2JveDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yQWxsKCcuR3FMaTRkJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJCYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWxsV3JhcHBlcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdHlsZSB0aGUgY3VzdG9tIHNlbGVjdCBib3ggaW4gdGhlIGZpbHRlciBiYXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBsYWNlaG9sZGVyOiBGaWx0ZXJPcmRlci5SRUNFTlQgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQodGhpcy5vcmRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWx0ZXJCYXJFdmVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERpZmZlcmVudCB0eXBlcyBvZiBmaWx0ZXJpbmcsIHJlcHJlc2VudGVkIGFzIG51bWJlcnNcclxuICpcclxuICogQGV4cG9ydCB0aGUgRmlsdGVyT3JkZXIgdHlwZVxyXG4gKiBAY2xhc3MgRmlsdGVyT3JkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJPcmRlciB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgU3RhZGlhIHNvcnRpbmcsIHJlY2VudC9uZXcgZ2FtZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSRUNFTlQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxwaGFiZXRpY2FsIG9yZGVyLlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQUxQSEFCRVRJQ0FMID0gMTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSYW5kb20gb3JkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSQU5ET00gPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzb3J0aW5nIG1ldGhvZCBvZiB0aGUgaW5wdXRlZCBvcmRlci5cclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHNvcnRpbmcgZ2FtZXMgYnkgdGhlIGlucHV0ZWQgb3JkZXIuXHJcbiAgICAgKiBAcGFyYW0ge0ZpbHRlck9yZGVyfSBvcmRlclxyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRTb3J0ZXIob3JkZXI6IEZpbHRlck9yZGVyKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHN3aXRjaCAob3JkZXIpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLlJFQ0VOVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRSZWNlbnQ7XHJcblxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUxQSEFCRVRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEFscGhhYmV0aWNhbDtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SQU5ET006XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0UmFuZG9tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvcnQgYnkgcmVjZW50IGdhbWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0geyp9IGFcclxuICAgICAqIEBwYXJhbSB7Kn0gYlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB3aGljaCBwYXJhbWV0ZXIgaXMgd2hlcmUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJlY2VudChhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTb3J0IGFscGhhYmV0aWNhbGx5LlxyXG4gICAgICogXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHsqfSBhXHJcbiAgICAgKiBAcGFyYW0geyp9IGJcclxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgd2hpY2ggcGFyYW1ldGVyIGlzIHdoZXJlLlxyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHNvcnRBbHBoYWJldGljYWwoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG5cclxuICAgICAgICBpZiAobmFtZUEgPT09IHVuZGVmaW5lZCB8fCBuYW1lQiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWVBLmxvY2FsZUNvbXBhcmUobmFtZUIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNvcnRSYW5kb20oYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMikgLSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRW51bSBjb250YWluaW5nIGRpZmZlcmVudCBvcmRlciBkaXJlY3Rpb25zXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIE9yZGVyRGlyZWN0aW9uIHR5cGUuXHJcbiAqIEBlbnVtIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvbiB7XHJcbiAgICBBU0NFTkRJTkcsXHJcbiAgICBERVNDRU5ESU5HLFxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL1VJQ29tcG9uZW50JztcclxuaW1wb3J0ICcuL3N0eWxlcy9OZXR3b3JrTW9uaXRvci5zY3NzJztcclxuXHJcbi8vIEltcG9ydCB0aGUgTW9uaXRvciBydW5uYWJsZSBhcyBhIHJhdyBzdHJpbmdcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgcnVubmFibGUgZnJvbSAnIXJhdy1sb2FkZXIhLi4vTW9uaXRvclJ1bm5hYmxlJztcclxuaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94QW5pbWF0aW9uIH0gZnJvbSAnLi4vdWkvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XHJcblxyXG5jb25zdCB7IGNocm9tZSwgUlRDUGVlckNvbm5lY3Rpb24gfSA9ICh3aW5kb3cgYXMgYW55KTtcclxuXHJcbi8qKlxyXG4gKiBBIG5ldHdvcmsgbW9uaXRvciBhbGxvd2luZyB1c2VycyB0byBzZWUgdGhlaXIgbmV0d29yayBzdGF0aXN0aWNzIHdoaWxlIHBsYXlpbmcgYSBnYW1lLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBOZXR3b3JrTW9uaXRvciB0eXBlLlxyXG4gKiBAY2xhc3MgTmV0d29ya01vbml0b3JcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOZXR3b3JrTW9uaXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICduZXR3b3JrLW1vbml0b3InO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhYiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICB0YWJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtb25pdG9yIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgbW9uaXRvciBpcyBvcGVuIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgbW9uaXRvck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrLW1vbml0b3InKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJ1bm5hYmxlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZpc2libGUgbmV0d29yayBzdGF0aXN0aWNzLlxyXG4gICAgICovXHJcbiAgICB2aXNpYmxlOiBhbnkgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBbW1VJQ29tcG9uZW50XV0gYW5kIGEgW1tVSUJ1dHRvbl1dLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcclxuICAgICAqL1xyXG4gICAgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgVUlDb21wb25lbnQoXHJcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLm5hbWUnKSxcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdDVHZEWGQgUUFBeVdkIEZqeTA1ZCBpdldVaGMgUVNESHljIHJwZ1p6YyBSa3lIMWUgc3RhZGlhcGx1c19idXR0b24gc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10b2dnbGUtYnV0dG9uJyBpZD0nJHt0aGlzLmlkfS10b2dnbGVidXR0b24nPiR7TGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IudG9nZ2xlLWJ1dHRvbi5zaG93Jyl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGg2PiR7TGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IuaGVhZGluZy12aXNpYmxlJyl9PC9oNj5cclxuICAgICAgICAgICAgPHVsIGlkPScke3RoaXMuaWR9LXZpc2libGVsaXN0Jz48L3VsPlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICB0aGlzLmlkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRhYicpO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvbmV0d29yay1tb25pdG9yLnN2ZycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKGljb24sIExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLmJ1dHRvbi1sYWJlbCcpLCB0aGlzLmlkICsgJy1idXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCgpID0+IHsgdGhpcy51cGRhdGVWaXNpYmxlKCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgbmV0d29yayBtb25pdG9yIHJ1bm5hYmxlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBzdGFydFJ1bm5hYmxlKCkge1xyXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KHJ1bm5hYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gdGhlIG1vbml0b3IuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9wZW5Nb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9uaXRvck9wZW4gPSB0cnVlO1xyXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KCdTdGFkaWFQbHVzTW9uaXRvci5zdGFydCgpJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSB0aGUgbW9uaXRvci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcclxuICAgICAqL1xyXG4gICAgY2xvc2VNb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9uaXRvck9wZW4gPSBmYWxzZTtcclxuICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc3RvcCgpJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMgd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjaHJvbWUgc3RvcmFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLmdldCgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0W0xvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLnRhZ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHJlc3VsdFtMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy50YWddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGNocm9tZSBzdG9yYWdlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy5zZXQodGhpcy52aXNpYmxlLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRSdW5uYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3RpbWUnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLnRpbWUnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdyZXNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5yZXNvbHV0aW9uJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZnBzJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5mcHMnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdsYXRlbmN5JyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5sYXRlbmN5JyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29kZWMnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLmNvZGVjJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAndHJhZmZpYycsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3Iuc3RhdHMudHJhZmZpYycpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2N1cnJlbnQtdHJhZmZpYycsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3Iuc3RhdHMuY3VycmVudC10cmFmZmljJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnYXZlcmFnZS10cmFmZmljJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5hdmVyYWdlLXRyYWZmaWMnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdwYWNrZXRzLWxvc3QnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLnBhY2tldHMtbG9zdCcpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLmF2ZXJhZ2UtcGFja2V0LWxvc3MnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdqaXR0ZXItYnVmZmVyJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5qaXR0ZXItYnVmZmVyJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yID0gbnVsbCcpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB3aGljaCBzdGF0aXN0aWNzIHNob3VsZCBiZSB2aXNpYmxlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICB1cGRhdGVWaXNpYmxlKCkge1xyXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KGBTdGFkaWFQbHVzTW9uaXRvci5zZXRWaXNpYmxlKCR7SlNPTi5zdHJpbmdpZnkodGhpcy52aXNpYmxlKX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uT3BlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnNldEVkaXRhYmxlKHRydWUpJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkNsb3NlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc2V0RWRpdGFibGUoZmFsc2UpJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXZpc2libGVsaXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52aXNpYmxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdCA9IHRoaXMudmlzaWJsZVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwcmV0dHksIGNoZWNrYm94fSA9IG5ldyBDaGVja2JveChzdGF0Lm5hbWUpLnNldEJpZ2dlcih0cnVlKS5zZXRBbmltYXRpb24oQ2hlY2tib3hBbmltYXRpb24uU01PT1RIKS5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChwcmV0dHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHN0YXQuZW5hYmxlZDtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZVtpXS5lbmFibGVkID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXRvZ2dsZWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgdGhpcy5tb25pdG9yT3Blbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5tb25pdG9yT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci50b2dnbGUtYnV0dG9uLmhpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci50b2dnbGUtYnV0dG9uLmhpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgdGhpcy5tb25pdG9yT3Blbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jcmVhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnQub3BlblRhYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmJ1dHRvbi5jb250YWluZXIuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNvbnRhaW5lci5jcmVhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuY29tcG9uZW50Lm9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY2xvc2VUYWIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIVV0aWwuaXNJbkdhbWUoKSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Pi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yJykpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgICBzdGF0aWMgV0lORE9XUzogc3RyaW5nID0gXCJXaW4zMlwiO1xyXG4gICAgc3RhdGljIE1BQ09TOiBzdHJpbmcgPSBcIk1hY0ludGVsXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXN0ZUZyb21DbGlwYm9hcmQgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgdGFnOiBzdHJpbmcgID0gJ3Bhc3RlLWZyb20tY2xpcGJvYXJkJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZC5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25VcGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKFV0aWwuaXNJbkdhbWUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCAhPSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25FdmVudExpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duRXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGtleWRvd25FdmVudExpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN0cmxLZXk6IGJvb2xlYW47XHJcbiAgICAgICAgc3dpdGNoKG5hdmlnYXRvci5wbGF0Zm9ybSkge1xyXG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLldJTkRPV1M6XHJcbiAgICAgICAgICAgICAgICBjdHJsS2V5ID0gZXZlbnQuY3RybEtleTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS5NQUNPUzpcclxuICAgICAgICAgICAgICAgIGN0cmxLZXkgPSBldmVudC5tZXRhS2V5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY3RybEtleSA9IGV2ZW50LmN0cmxLZXk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdHJsS2V5ICYmICdLZXlWJyA9PSBldmVudC5jb2RlKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKGZ1bmN0aW9uKGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IElucHV0RXZlbnQoJ2lucHV0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElucHV0RXZlbnRJbml0XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiaW5zZXJ0VGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcG9zaW5nOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVUlFdmVudEluaXRcclxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBudWxsLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudEluaXRcclxuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvUmF0aW5ncy5zY3NzJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcblxyXG4vKipcclxuICogQSBjb21wb25lbnQgYWRkaW5nIE1ldGFjcml0aWMgcmF0aW5ncyB0byBldmVyeSBTdGFkaWEgZ2FtZS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgUmF0aW5ncyB0eXBlXHJcbiAqIEBjbGFzcyBSYXRpbmdzXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmF0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICdyYXRpbmdzJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByYXRpbmcgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgU3RhZGlhR2FtZURCIGRhdGFiYXNlLlxyXG4gICAgICovXHJcbiAgICBkYXRhYmFzZTogV2ViRGF0YWJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgU3RhZGlhR2FtZURCIFVVSUQgTWFwLlxyXG4gICAgICovXHJcbiAgICB1dWlkTWFwOiBXZWJEYXRhYmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2YWx1ZSBmcm9tIGVhY2ggYm91bmQgaW4gd2hpY2ggYSBnYW1lIHdpbGwgZ2V0IDAgb3IgNSBzdGFycy5cclxuICAgICAqL1xyXG4gICAgZ3JhY2VBbW91bnQ6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHN0YXJzIHRvIGF3YXJkLlxyXG4gICAgICovXHJcbiAgICBtYXhTdGFycyA9IDU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2U6IFdlYkRhdGFiYXNlLCB1dWlkTWFwOiBXZWJEYXRhYmFzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcclxuICAgICAgICB0aGlzLnV1aWRNYXAgPSB1dWlkTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgcmF0aW5nIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3NcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19yYXRpbmcnLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjdXJyZW50IGdhbWUgVVVJRC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZ2FtZSBVVUlEIGFzIGEgc3RyaW5nLlxyXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3NcclxuICAgICAqL1xyXG4gICAgZ2V0VVVJRCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5ocmVmLnN1YnN0cmluZygnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoLCAnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoICsgMzYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCByYXRpbmcsIGZldGNoaW5nIGl0IGZyb20gdGhlIGRhdGFiYXNlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVJhdGluZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gdGhpcy5nZXRVVUlEKCk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q29ubmVjdGlvbigpWydkYXRhJ107XHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gY29ubmVjdGlvblttYXBbdXVpZF1dO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJhdGluZycsIGVudHJ5WzZdKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGhvdyBtYW55IHN0YXJzIGEgZ2FtZSBzaG91bGQgaGF2ZSBiYXNlZCBvbiBpdCdzIHJhdGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW5nIHRoZSBnYW1lJ3MgcmF0aW5nLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBhbiBhcnJheSBvZiBpY29uIHN0cmluZ3MsIGJlaW5nIGVpdGhlciBcInN0YXJcIiwgXCJzdGFyX2hhbGZcIiBvciBcInN0YXJfb3V0bGluZVwiLlxyXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3MgXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXJzKHJhdGluZzogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dFN0YXJzID0gW107XHJcblxyXG4gICAgICAgIC8vIENsYW1wcyB0aGUgcmF0aW5nIHRvIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDEsXHJcbiAgICAgICAgLy8gd2hlcmUgKDAgKyBncmFjZUFtb3VudCkgaXMgMCBhbmQgKDEwMCAtIGdyYWNlQW1vdW50KSBpcyAxXHJcbiAgICAgICAgY29uc3QgY2xhbXBlZFIgPSAocmF0aW5nIC8gMTAwKSAqICgxICsgKHRoaXMuZ3JhY2VBbW91bnQgLyAxMDApICogMikgLSAodGhpcy5ncmFjZUFtb3VudCAvIDEwMCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCByID0gY2xhbXBlZFI7IGkgPCB0aGlzLm1heFN0YXJzOyBpICs9IDEsIHIgLT0gMSAvIHRoaXMubWF4U3RhcnMpIHtcclxuICAgICAgICAgICAgaWYgKHIgPj0gMSAvIHRoaXMubWF4U3RhcnMpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXInKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyID49IDApIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXJfaGFsZicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0U3RhcnMucHVzaCgnc3Rhcl9vdXRsaW5lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXRTdGFycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIHJhdGluZyBlbGVtZW50IHRvIG1ha2Ugc3VyZSBpdCBhbHdheXMgZGlzcGxheXMgdGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICBpZihVdGlsLmlzSW5TdG9yZURldGFpbCgpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmF0aW5nID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yYXRpbmcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFycyA9IHRoaXMuZ2V0U3RhcnMocmF0aW5nKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJhdGluZyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignLlp6QkpTYiA+IC5CTVVuZmQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmV4dFNpYmxpbmcgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LCBuZXh0U2libGluZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3RhcnMuam9pbignICcpfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhZGlhcGx1c19yYXRpbmctdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtyYXRpbmd9IC8gMTAwICgke0xhbmd1YWdlLmdldCgncmF0aW5ncy5zb3VyY2UtbmFtZScpfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL1N0b3JlRmlsdGVyLnNjc3MnO1xyXG5pbXBvcnQgeyBXZWJEYXRhYmFzZSB9IGZyb20gJy4uL1dlYkRhdGFiYXNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcblxyXG4vKipcclxuICogQSBzZWFyY2ggYmFyIGRpc3BsYXllZCBvbiB0aGUgc3RvcmUgcGFnZSBvZiBTdGFkaWEuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFN0b3JlRmlsdGVyIHR5cGUuXHJcbiAqIEBjbGFzcyBTdG9yZUZpbHRlclxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JlRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ3N0b3JlLWZpbHRlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VhcmNoIGJhciBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgdGVtcGxhdGUgZWxlbWVudCBmb3IgaW5kaXZpZHVhbCBnYW1lcyBpbiB0aGUgc2VhcmNoIGJveC5cclxuICAgICAqL1xyXG4gICAgZ2FtZVRlbXBsYXRlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgZGF0YWJhc2UuXHJcbiAgICAgKi9cclxuICAgIGRhdGFiYXNlOiBXZWJEYXRhYmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgVVVJRCBNYXAuXHJcbiAgICAgKi9cclxuICAgIHV1aWRNYXA6IFdlYkRhdGFiYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgYWxsIGdhbWUgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIGdhbWVzOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VhcmNoIGlucHV0LlxyXG4gICAgICovXHJcbiAgICBzZWFyY2hGaWVsZDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2U6IFdlYkRhdGFiYXNlLCB1dWlkTWFwOiBXZWJEYXRhYmFzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xyXG4gICAgICAgIHRoaXMudXVpZE1hcCA9IHV1aWRNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBzZWFyY2ggYmFyIGFuZCBuZWNlc3NhcnkgZWxlbWVudHMvdmFyaWFibGVzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBTdG9yZUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXInKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jhcic+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCIke2Nvbm5lY3Rpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29ubmVjdGlvbi5sZW5ndGgpXVsxXX0uLi5cIiBpZD0nJHt0aGlzLmlkfS1zZWFyY2gnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZXMnIGlkPScke3RoaXMuaWR9LWdhbWVzJz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBjb25uZWN0aW9uW21hcFtrZXldXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZScpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2xvcmVtZmxpY2tyLmNvbS82NDAvMzYwJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RldGFpbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPSduYW1lJz5Mb3JlbSBJcHN1bTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3N0YWRpYXBsdXNfbXV0ZWQgdGFncyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCBrZXkpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10YWdzJywgZW50cnlbMl0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbVwiIGFzIGFueTtcclxuICAgICAgICAgICAgY29uc3QgbG9jQXJyID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICBpZihsb2NBcnIubGVuZ3RoID4gNSkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gbG9jQXJyLnNsaWNlKDAsIDUpLmpvaW4oJy8nKSArICcvJztcclxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCArICh1cmwuZW5kc1dpdGgoJy8nKSA/IC0xIDogMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlSWQgPSBlbnRyeVswXS5tYXRjaCgvaHR0cHM6XFwvXFwvc3RhZGlhLmdvb2dsZS5jb21cXC9zdG9yZVxcL2RldGFpbHNcXC8oWzAtOWEtei9dKykvKVsxXTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwgKyAnL3N0b3JlL2RldGFpbHMvJyArIHN0b3JlSWQpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbWcnLCAnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tLycgKyBlbnRyeVswXS5tYXRjaCgvKGltYWdlc1xcL3Bvc3RlcnNcXC9bYS16MC05Xy4tXSsucG5nKS9nKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWVzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBpbnB1dCBldmVudHMgdG8gdGhlIHNlYXJjaCBiYXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFN0b3JlRmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgodGhpcy5zZWFyY2hGaWVsZCBhcyBhbnkpLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaGVzIHRoZSBnYW1lIGxpc3QgZm9yIGEgc3BlY2lmaWMgc3RyaW5nIGFuZCBzaG93cyB3aGljaGV2ZXIgZ2FtZXMgZml0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RvcmVGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdhbWVzLmZvckVhY2goKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBnYW1lLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgcXVlcnkubGVuZ3RoID4gMCAmJiBuYW1lLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRoZSBzZWFyY2ggYmFyIG9ubHkgZXhpc3RzIHdoZW4gaXQncyBzdXBwb3NlZCB0byBhbmQgd29ya3MgcHJvcGVybHkgZXZlbiBpZiBhY2NpZGVudGFsbHkgZGVzdHJveWVkLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgaWYoVXRpbC5pc0luU3RvcmUoKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcubldtdExkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29udGFpbmVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctZ2FtZXMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcnKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsPi5uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IGdhbWUucXVlcnlTZWxlY3RvcignLmRldGFpbD4udGFncycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MuaW5uZXJIVE1MID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFncycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy1zZWFyY2gnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS9VSUNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvVUlUYWIuc2Nzcyc7XHJcbmltcG9ydCAnLi4vdWkvc3R5bGVzL0J1dHRvbi5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvR3JpZC5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvVHlwb2dyYXBoeS5zY3NzJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcblxyXG5jb25zdCBjaHJvbWU6IGFueSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSB0YWIgYW5kIGJ1dHRvbiBkaXNwbGF5ZWQgaW4gdGhlIFN0YWRpYSBNZW51LlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBVSVRhYiB0eXBlLlxyXG4gKiBAY2xhc3MgVUlUYWJcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVSVRhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ3VpLXRhYic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFiIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhbW91bnQgb2Ygcm93cywgZWFjaCBjb250YWluaW5nIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIHJvd3M6IFVJUm93W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGlzdCBvZiBmdW4gTU9URCBtZXNzYWdlcyBhZGRlZCB0byB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBtb3RkTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1vamlzLzYzNjIyNzg2NDA3Njc0Njc3Mi5wbmc/dj0xXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDsgd2lkdGg6IDI0cHhcIj4nLFxyXG4gICAgICAgIFwiRG9uJ3QgbG9vayBoZXJlLCBsb29rIGJlbG93IVwiLFxyXG4gICAgICAgICdSZWFsaXR5IGNhbiBiZSB3aGF0ZXZlciBJIHdhbnQuJyxcclxuICAgICAgICAnSWYgeW91IGFzayBuaWNlbHksIFN0YWRpYSBtaWdodCBldmVuIGRvIHlvdXIgbGF1bmRyeSBmb3IgeW91IScsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIGFza2luZyBjdXN0b21lciBzdXBwb3J0PycsXHJcbiAgICAgICAgJ0ZvbGxvdyB1L21hZnJhbnMgb24gUmVkZGl0IScsXHJcbiAgICAgICAgJ1N0YWRpYSssIGxpa2UgR29vZ2xlKyBidXQgc3RpbGwgYWxpdmUuJyxcclxuICAgICAgICAnU3RhZGlhIGlzIERPQSwgYmVsaWV2ZSBtZS4nLFxyXG4gICAgICAgICdHZXQgYSBsb2FkIG9mIHRoaXMgZ3V5LCB1c2luZyBjaHJvbWUgZXh0ZW5zaW9ucyB0byBpbXByb3ZlIGhpcyBTdGFkaWEgZXhwZXJpZW5jZS4nLFxyXG4gICAgICAgIFwiSSdtIHRlbGxpbmcgeW91LCBkb24ndCB0cnVzdCB0aGF0IGd1eS4gWW91IGtub3csIHRoZSBndXkuXCIsXHJcbiAgICAgICAgJ1Nob3V0b3V0IHRvIENocmlzIGFuZCBHcmFjZSEnLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBTcGxpdGxpbmdzIHlldD8nLFxyXG4gICAgICAgICdBbHdheXMgY2hlY2sgdGhlIHJhdGluZ3MgYmVmb3JlIHlvdSBidXkgYSBuZXcgZ2FtZS4nLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBHZUZvcmNlIE5vdz8nLFxyXG4gICAgICAgICdBIGhvdCBkb2cgaXMgZGVmaW5pdGVseSBub3QgYSBzYW5kd2ljaC4nLFxyXG4gICAgICAgICdJZGsgYWJvdXQgeW91LCBidXQgSSByZWFsbHkgd2FudCBvbmUgb2YgdGhvc2UgZmFuY3kgc21hcnQgdG9pbGV0cy4nLFxyXG4gICAgICAgICdDaHJpcyBpcyB0eXBpbmcgZ3V5cyEhJyxcclxuICAgICAgICAnRG9lcyBhbnlvbmUgaGF2ZSBhIGJ1ZGR5IHBhc3MgSSBjb3VsZCBib3Jyb3c/JyxcclxuICAgICAgICAnSSBwYWlkICQxMzkgZm9yIHRoaXM/JyxcclxuICAgICAgICAnSXMgRm9ydG5pdGUgb24gU3RhZGlhIHlldD8nLFxyXG4gICAgICAgICd1L2JhY29ucnVsZXMgd2FzIHRoZSBmaXJzdCB0byBzZWUgNGshJyxcclxuICAgICAgICAnU28gZGlkIHRoZSBwZXJzb24gdGhhdCBtYWRlIHRoZSBzdGFkaWErIGV4dGVuc2lvbiBnaXZlIHVwIG9uIHN0YWRpYT8nLFxyXG4gICAgICAgICdJdFxcJ3MgbGlrZSBHRk4sIGJ1dCB3aXRob3V0IGFueSBwdWxsZWQgZ2FtZXMuJyxcclxuICAgICAgICAnTG9uZyBsaXZlIEdlZm9yY2UgTm93KycsXHJcbiAgICAgICAgJ1NwZW5kIHlvdXIgbW9uZXkgYmVmb3JlIGl0IHJ1bnMgb3V0LicsXHJcbiAgICAgICAgJ1doZW4gZG9lcyBTdGFkaWEgMiBjb21lIG91dD8nLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV1cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBVSUNvbXBvbmVudChcclxuICAgICAgICAgICAgJ1N0YWRpYSsnLFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICA8aSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW07IG1hcmdpbi1ib3R0b206IDVyZW07IGRpc3BsYXk6IGJsb2NrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdGRMaXN0W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tb3RkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3N0YWRpYXBsdXMuc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgTGFuZ3VhZ2UuZ2V0KCd1aS10YWIuYnV0dG9uLWxhYmVsJyksIHRoaXMuaWQgKyAnLWJ1dHRvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kIGFsbCByb3dzIHRoYXQgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZWxvYWRdXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUm93cyhyZWxvYWQ/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFyb3cuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQodGhpcy5jb21wb25lbnQsIGkgPiAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHJlbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcm93LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrK1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsb2FkIGFsbCByb3dzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXHJcbiAgICAgKi9cclxuICAgIHJlbG9hZFJvd3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHJvdy5yZWxvYWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSByb3cgdG8gdGhlIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXHJcbiAgICAgKi9cclxuICAgIGFkZFJvdyhyb3c6IFVJUm93KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIGFuZCB1bmxvYWQgYWxsIHJvd3MuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBjbGVhclJvd3MoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yKGNvbnN0IHJvdyBvZiB0aGlzLnJvd3MpIHtcclxuICAgICAgICAgICAgcm93LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgbWFrZXMgc3VyZSB0byBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZSBtZW51IGlzIG9wZW4gYWxyZWFkeS5cclxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUm93cyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW5UYWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbXBvbmVudC5vcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsb3NlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DbG9jay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlQ29kZWMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb3JjZVJlc29sdXRpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaWJyYXJ5RmlsdGVyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTmV0d29ya01vbml0b3Iuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SYXRpbmdzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3RvcmVGaWx0ZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9VSVRhYi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9HbG9iYWwuc2NzcydcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vQ29tcG9uZW50TG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICcuL2NvbXBvbmVudHMvQ2xvY2snXHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9jb21wb25lbnRzL1VJVGFiJ1xyXG5pbXBvcnQgeyBGb3JjZUNvZGVjIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcmNlQ29kZWMnXHJcbmltcG9ydCB7IEZvcmNlUmVzb2x1dGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24nXHJcbmltcG9ydCB7IE5ldHdvcmtNb25pdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL05ldHdvcmtNb25pdG9yJztcclxuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgTGlicmFyeUZpbHRlciB9IGZyb20gJy4vY29tcG9uZW50cy9MaWJyYXJ5RmlsdGVyJztcclxuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuL1dlYkRhdGFiYXNlJztcclxuaW1wb3J0IHsgU3RvcmVGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RvcmVGaWx0ZXInO1xyXG5pbXBvcnQgeyBSYXRpbmdzIH0gZnJvbSAnLi9jb21wb25lbnRzL1JhdGluZ3MnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4vTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBBbGxvd1dpbmRvd2VkTW9kZSB9IGZyb20gJy4vY29tcG9uZW50cy9BbGxvd1dpbmRvd2VkTW9kZSc7XHJcbmltcG9ydCB7IFBhc3RlRnJvbUNsaXBib2FyZCB9IGZyb20gJy4vY29tcG9uZW50cy9QYXN0ZUZyb21DbGlwYm9hcmQnO1xyXG5pbXBvcnQgeyBTdG9yYWdlTWFuYWdlciB9IGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCBhcHBkYXRhIGZyb20gJy4vYXBwZGF0YS5qc29uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL3VpL01vZGFsJztcclxuaW1wb3J0IHsgU2hvcnRjdXQgfSBmcm9tICcuL1Nob3J0Y3V0JztcclxuXHJcbi8vIEFsd2F5cyBsb2FkIGxhbmd1YWdlcyBmaXJzdFxyXG5MYW5ndWFnZS5pbml0KCk7XHJcbkxhbmd1YWdlLmxvYWQoKTtcclxuXHJcbmNvbnN0IHN0b3JhZ2VNYW5hZ2VyID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKGFwcGRhdGEpO1xyXG5zdG9yYWdlTWFuYWdlci5jaGVja0NhY2hlVmVyc2lvbigpO1xyXG5cclxuY29uc3QgbG9hZGVyID0gbmV3IENvbXBvbmVudExvYWRlcigpO1xyXG5jb25zdCBzbmFja2JhciA9IG5ldyBTbmFja2JhcigpO1xyXG5jb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG5jb25zdCB0YWIgPSBuZXcgVUlUYWIoKTtcclxuXHJcbmNvbnN0IGRhdGFiYXNlID0gbmV3IFdlYkRhdGFiYXNlKCdodHRwczovL3N0YWRpYWdhbWVkYi5jb20vZGF0YS9nYW1lZGIuanNvbicpO1xyXG5jb25zdCB1dWlkTWFwID0gbmV3IFdlYkRhdGFiYXNlKCdodHRwczovL3N0YWRpYWdhbWVkYi5jb20vZGF0YS91dWlkbWFwLmpzb24nKTtcclxuZGF0YWJhc2UuY29ubmVjdCgpO1xyXG51dWlkTWFwLmNvbm5lY3QoKTtcclxuXHJcbmxvYWRlci5yZWdpc3RlcihuZXcgQ2xvY2soKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgTGlicmFyeUZpbHRlcihzbmFja2JhciwgZGF0YWJhc2UsIHV1aWRNYXAsIG1vZGFsKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgRm9yY2VDb2RlYyh0YWIsIHNuYWNrYmFyKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgRm9yY2VSZXNvbHV0aW9uKHRhYiwgc25hY2tiYXIpKTtcclxubG9hZGVyLnJlZ2lzdGVyKHRhYik7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgTmV0d29ya01vbml0b3IoKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgU3RvcmVGaWx0ZXIoZGF0YWJhc2UsIHV1aWRNYXApKTtcclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBSYXRpbmdzKGRhdGFiYXNlLCB1dWlkTWFwKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgQWxsb3dXaW5kb3dlZE1vZGUoKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgUGFzdGVGcm9tQ2xpcGJvYXJkKCkpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBVdGlsLmxvYWQoKTtcclxuICAgIHNuYWNrYmFyLmNyZWF0ZSgpO1xyXG4gICAgbW9kYWwuY3JlYXRlKCk7XHJcbiAgICBsb2FkZXIuc3RhcnQoKTtcclxufSkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dsb2JhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UeXBvZ3JhcGh5LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94IHtcclxuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2hhcGU6IHN0cmluZyA9IENoZWNrYm94U2hhcGUuREVGQVVMVDtcclxuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZyA9IENoZWNrYm94U3R5bGUuREVGQVVMVDtcclxuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGJvcmRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGljb246IHN0cmluZztcclxuICAgIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGJpZ2dlcjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNoYXBlKHNoYXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEFuaW1hdGlvbihhbmltYXRpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRCb3JkZXIoYm9yZGVyOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ib3JkZXIgPSBib3JkZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEljb24oaWNvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCaWdnZXIoYmlnZ2VyOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5iaWdnZXIgPSBiaWdnZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBtYWluIGNsYXNzZXNcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByZXR0eScsICdwLWRlZmF1bHQnKTtcclxuXHJcbiAgICAgICAgLy8gSWYgc3R5bGUgaXMgbm90IGRlZmF1bHQsIGFkZCBzdHlsZVxyXG4gICAgICAgIGlmKHRoaXMuc2hhcGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2hhcGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgc3R5bGUgaXMgbm90IGRlZmF1bHQsIGFkZCBzdHlsZVxyXG4gICAgICAgIGlmKHRoaXMuc3R5bGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc3R5bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYW5pbWF0ZWQsIGFkZCBhbmltYXRpb25cclxuICAgICAgICBpZih0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IGJpZ2dlclxyXG4gICAgICAgIGlmKHRoaXMuYmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1iaWdnZXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBib3JkZXJcclxuICAgICAgICBpZighdGhpcy5ib3JkZXIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwLXBsYWluJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgY2hlY2tib3ggaW5wdXRcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICAgICAgICAvLyBBZGQgc3RhdGUgZGl2XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdGF0ZS5jbGFzc0xpc3QuYWRkKCdzdGF0ZScpO1xyXG5cclxuICAgICAgICAvLyBJZiBjb2xvcmVkLCBhZGQgY29sb3JcclxuICAgICAgICBpZih0aGlzLmNvbG9yKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBoYXMgaWNvbiwgYWRkIGljb25cclxuICAgICAgICBpZih0aGlzLmljb24pIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwLWljb24nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSB0aGlzLmljb247XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBsYWJlbFxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0aGlzLmxhYmVsO1xyXG4gICAgICAgIHN0YXRlLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdGF0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7cHJldHR5OiBlbGVtZW50LCBjaGVja2JveH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNoYXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ1VSVkVEOiBzdHJpbmcgPSAncC1jdXJ2ZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EOiBzdHJpbmcgPSAncC1yb3VuZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFN0eWxlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgRklMTDogc3RyaW5nID0gJ3AtZmlsbCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRISUNLOiBzdHJpbmcgPSAncC10aGljayc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbG9yIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQkxVRTogc3RyaW5nID0gJ3AtcHJpbWFyeSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdSRUVOOiBzdHJpbmcgPSAncC1zdWNjZXNzJztcclxuICAgIHB1YmxpYyBzdGF0aWMgWUVMTE9XOiBzdHJpbmcgPSAncC13YXJuaW5nJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQ1lBTjogc3RyaW5nID0gJ3AtaW5mbyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJFRDogc3RyaW5nID0gJ3AtZGFuZ2VyJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94QW5pbWF0aW9uIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU01PT1RIOiBzdHJpbmcgPSAncC1zbW9vdGgnO1xyXG4gICAgcHVibGljIHN0YXRpYyBKRUxMWTogc3RyaW5nID0gJ3AtamVsbHknO1xyXG4gICAgcHVibGljIHN0YXRpYyBUQURBOiBzdHJpbmcgPSAncC10YWRhJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUk9UQVRFOiBzdHJpbmcgPSAncC1yb3RhdGUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBQVUxTRTogc3RyaW5nID0gJ3AtcHVsc2UnO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlcy9Nb2RhbC5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgd3JhcHBlcjogRWxlbWVudDtcclxuICAgIGNvbnRlbnQ6IEVsZW1lbnQ7XHJcbiAgICBjbG9zZUJ1dHRvbjogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbW9kYWwnKTtcclxuXHJcbiAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX21vZGFsLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX21vZGFsLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnY2xvc2UnO1xyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycsICdzdGFkaWFwbHVzX21vZGFsLWNsb3NlJyk7XHJcblxyXG4gICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XHJcbiAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUJ1dHRvbik7XHJcbiAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcclxuXHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gICAgICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2xpbVNlbGVjdCBmcm9tICdzbGltLXNlbGVjdCc7XHJcbmltcG9ydCAnc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3VpL3N0eWxlcy9TZWxlY3Quc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0IHtcclxuICAgIHNsaW1zZWxlY3Q6IFNsaW1TZWxlY3Q7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG9wdGlvbnM6IFNlbGVjdE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICBvcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zdHlsZSA6IFNlbGVjdFN0eWxlLkRBUks7XHJcbiAgICAgICAgb3B0aW9ucy5vbkNoYW5nZSA9IG9wdGlvbnMub25DaGFuZ2UgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub25DaGFuZ2UgOiAoKSA9PiB7fTtcclxuICAgICAgICBvcHRpb25zLmJlZm9yZUNoYW5nZSA9IG9wdGlvbnMuYmVmb3JlQ2hhbmdlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmJlZm9yZUNoYW5nZSA6ICgpID0+IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgJ3N0YWRpYXBsdXNfZHJvcGRvd24nLFxyXG4gICAgICAgICAgICBvcHRpb25zLnN0eWxlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2xpbXNlbGVjdCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIGVsZW1lbnRzL2NvbnRhaW5lcnNcclxuICAgICAgICAgKiBoYXZlIGJlZW4gZGVsZXRlZCB3aXRob3V0IHByb3Blcmx5IGJlaW5nIGRlc3Ryb3llZC4gQXMgU3RhZGlhXHJcbiAgICAgICAgICogcnVucyBpbiBhIHZpcnR1YWwgRE9NLCB3ZSBoYXZlIG5vIGNvbnRyb2wgb2Ygd2hlbiB0aGUgRE9NIGNoYW5nZXNcclxuICAgICAgICAgKiB0aGVyZWZvcmUgd2UgY2FuJ3Qgc29sdmUgaXQgaW4gYSBwcm9wZXIgd2F5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogTGV0J3MganVzdCBob3BlIGdhcmJhZ2UgY29sbGVjdGlvbiB0YWtlcyBjYXJlIG9mIGl0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdCA9IG5ldyBTbGltU2VsZWN0KHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgc2hvd1NlYXJjaDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogb3B0aW9ucy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvcHRpb25zLm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlT25DaGFuZ2U6IG9wdGlvbnMuYmVmb3JlQ2hhbmdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VsZWN0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoLi4uaXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IGluIGNhc2Ugc2xpbXNlbGVjdC5zZXQgaXMgZmFzdGVyXHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXQoaXRlbXNbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXREYXRhKGl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbGltc2VsZWN0LnNlYXJjaChxdWVyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zbGltc2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3N0YWRpYXBsdXNfZHJvcGRvd24nKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0U3R5bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBTTElNU0VMRUNUOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBTTElNU0VMRUNUX0xBUkdFOiBzdHJpbmcgPSAnc3R5bGUtc2xpbXNlbGVjdC1sYXJnZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIExJR0hUOiBzdHJpbmcgPSAnc3R5bGUtbGlnaHQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBEQVJLOiBzdHJpbmcgPSAnc3R5bGUtZGFyayc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZWxlY3RPcHRpb25zIHtcclxuICAgIHBsYWNlaG9sZGVyPzogYW55O1xyXG4gICAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86IChpbmZvOiBhbnkpID0+IGFueTtcclxuICAgIGJlZm9yZUNoYW5nZT86IChpbmZvOiBhbnkpID0+IGFueTtcclxufVxyXG4iLCJpbXBvcnQgJy4vc3R5bGVzL1NuYWNrYmFyLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyIHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBsYWJlbDogRWxlbWVudDtcclxuICAgIGNsb3NlQnV0dG9uOiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zbmFja2JhcicpO1xyXG5cclxuICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMubGFiZWwuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zbmFja2Jhci1sYWJlbCcpO1xyXG5cclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICdjbG9zZSc7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywgJ3N0YWRpYXBsdXNfc25hY2tiYXItY2xvc2UnKTtcclxuXHJcbiAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgc2VsZi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUobGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBzZWxmLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNTAwMClcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVJQnV0dG9uQ29udGFpbmVyIH0gZnJvbSBcIi4vVUlCdXR0b25Db250YWluZXJcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlCdXR0b24ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGh0bWw6IHN0cmluZztcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBjb250YWluZXI6IFVJQnV0dG9uQ29udGFpbmVyO1xyXG4gICAgYnV0dG9uOiBFbGVtZW50O1xyXG5cclxuICAgIHN0YXRpYyBidXR0b25Db250YWluZXJzOiBVSUJ1dHRvbkNvbnRhaW5lcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlB5ZmxiYlwiIGpzbmFtZT1cInJaSEVTZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIktFYUhvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJYNXBlb2VcIiBqc25hbWU9XCJwWUZoVVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwieGR1b3lmIHVpYnV0dG9uLWljb25cIiBzcmM9XCIke2ljb259XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FTSlYgdWlidXR0b24tdGl0bGVcIj4ke3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUHlmMWJiJywgJ3N0YWRpYXBsdXNfdWktYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ0NUdkRYZCcsICdRQUF5V2QnLCAnUGpwYWMnLCAnemNNWWQnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGZvcihjb25zdCBjb250YWluZXIgb2YgVUlCdXR0b24uYnV0dG9uQ29udGFpbmVycykge1xyXG4gICAgICAgICAgICBpZihjb250YWluZXIuYnV0dG9ucy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jb250YWluZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBVSUJ1dHRvbkNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBVSUJ1dHRvbi5idXR0b25Db250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRCdXR0b24odGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJY29uKGljb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWlidXR0b24taWNvbicpLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWlidXR0b24tdGl0bGUnKS5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSAhPT0gbnVsbDtcclxuICAgIH0gXHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQnV0dG9uKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSBcIi4vVUlCdXR0b25cIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlCdXR0b25Db250YWluZXIge1xyXG4gICAgYnV0dG9uczogVUlCdXR0b25bXSA9IFtdO1xyXG4gICAgY29udGFpbmVyOiBFbGVtZW50O1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB3cmFwcGVyOiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSAnYnV0dG9uLWNvbnRhaW5lci0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVFowQk4nKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdaZ1VNbycsICdzdGFkaWFwbHVzX3VpLWJ0bi13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdFMFprOWInLCAnc3RhZGlhcGx1c191aS1idG4tY29udGFpbmVyJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4aXN0cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpOyAvLyBSZXF1ZXJ5IGluIGNhc2UgdGhlIGNvbnRhaW5lciB3YXMgZGVsZXRlZFxyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFidXR0b24uZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24uZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmJ1dHRvbnMuaW5kZXhPZihidXR0b24pID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtb3ZlQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMuZmlsdGVyKGIgPT4gYi5pZCAhPT0gYnV0dG9uLmlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUNvbXBvbmVudCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbiAgICBvcGVuTGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xyXG4gICAgY2xvc2VMaXN0ZW5lcnM6ICgoKSA9PiB2b2lkKVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGBcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJya3ZUN2NcIiBqc2FjdGlvbj1cImNsaWNrOmE0ZlV3ZFwiIGpzbmFtZT1cIkdlR0hLYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiRFB2d1ljIHRScWMzY1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmFycm93X2JhY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiUTN3eXliXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkN3Q3hGZFwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICR7Y29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c191aS1jb21wb25lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5ZicpO1xyXG4gICAgICAgIGlmKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gUmVRdWVyeSBlbGVtZW50IHNpbmNlIG91dGVySFRNTCBicmVha3MgaXQuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgIyR7dGhpcy5pZH0gPiBoZWFkZXIgPiAucmt2VDdjYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY2xvc2VUYWIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuVGFiKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLmZvckVhY2goYyA9PiBjKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVGFiKCk6IHZvaWQge1xyXG4gICAgICAgIExvZ2dlci5pbmZvKCdDbG9zaW5nJywgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVycy5mb3JFYWNoKGMgPT4gYygpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oY2FsbGJhY2s/OigpID0+IHZvaWQpIHtcclxuICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZShjYWxsYmFjaz86KCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gXCIuL1VJQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlSb3cge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBvcHRpb25zOiBVSVJvd09wdGlvbnM7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IFVJUm93T3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxwPiR7dGhpcy50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAke3RoaXMuY29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c191aS1yb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBleGlzdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vblJlbG9hZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmQoY29tcG9uZW50OiBVSUNvbXBvbmVudCwgdXNlSHI6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmKHVzZUhyKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5lbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJUm93T3B0aW9ucyB7XHJcbiAgICBvbkNyZWF0ZT86IEZ1bmN0aW9uO1xyXG4gICAgb25EZXN0cm95PzogRnVuY3Rpb247XHJcbiAgICBvblJlbG9hZD86IEZ1bmN0aW9uO1xyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9CdXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Nb2RhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NlbGVjdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NuYWNrYmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vZG93bmxvYWQuanMgdjQuMiwgYnkgZGFuZGF2aXM7IDIwMDgtMjAxNi4gW0NDQlkyXSBzZWUgaHR0cDovL2Rhbm1sLmNvbS9kb3dubG9hZC5odG1sIGZvciB0ZXN0cy91c2FnZVxyXG4vLyB2MSBsYW5kZWQgYSBGRitDaHJvbWUgY29tcGF0IHdheSBvZiBkb3dubG9hZGluZyBzdHJpbmdzIHRvIGxvY2FsIHVuLW5hbWVkIGZpbGVzLCB1cGdyYWRlZCB0byB1c2UgYSBoaWRkZW4gZnJhbWUgYW5kIG9wdGlvbmFsIG1pbWVcclxuLy8gdjIgYWRkZWQgbmFtZWQgZmlsZXMgdmlhIGFbZG93bmxvYWRdLCBtc1NhdmVCbG9iLCBJRSAoMTArKSBzdXBwb3J0LCBhbmQgd2luZG93LlVSTCBzdXBwb3J0IGZvciBsYXJnZXIrZmFzdGVyIHNhdmVzIHRoYW4gZGF0YVVSTHNcclxuLy8gdjMgYWRkZWQgZGF0YVVSTCBhbmQgQmxvYiBJbnB1dCwgYmluZC10b2dnbGUgYXJpdHksIGFuZCBsZWdhY3kgZGF0YVVSTCBmYWxsYmFjayB3YXMgaW1wcm92ZWQgd2l0aCBmb3JjZS1kb3dubG9hZCBtaW1lIGFuZCBiYXNlNjQgc3VwcG9ydC4gMy4xIGltcHJvdmVkIHNhZmFyaSBoYW5kbGluZy5cclxuLy8gdjQgYWRkcyBBTUQvVU1ELCBjb21tb25KUywgYW5kIHBsYWluIGJyb3dzZXIgc3VwcG9ydFxyXG4vLyB2NC4xIGFkZHMgdXJsIGRvd25sb2FkIGNhcGFiaWxpdHkgdmlhIHNvbG8gVVJMIGFyZ3VtZW50IChzYW1lIGRvbWFpbi9DT1JTIG9ubHkpXHJcbi8vIHY0LjIgYWRkcyBzZW1hbnRpYyB2YXJpYWJsZSBuYW1lcywgbG9uZyAob3ZlciAyTUIpIGRhdGFVUkwgc3VwcG9ydCwgYW5kIGhpZGRlbiBieSBkZWZhdWx0IHRlbXAgYW5jaG9yc1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcm5kbWUvZG93bmxvYWRcclxuXHJcbmxldCBkb3dubG9hZGVyID0geyBkb3dubG9hZChjb250ZW50LCBuYW1lLCBtaW1lKSB7fSB9O1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxyXG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxyXG4gICAgICAgIC8vIGxpa2UgTm9kZS5cclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcclxuICAgICAgICBkb3dubG9hZGVyID0geyBkb3dubG9hZDogZmFjdG9yeSgpIH07XHJcbiAgICB9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBkb3dubG9hZChkYXRhLCBzdHJGaWxlTmFtZSwgc3RyTWltZVR5cGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB3aW5kb3csIC8vIHRoaXMgc2NyaXB0IGlzIG9ubHkgZm9yIGJyb3dzZXJzIGFueXdheS4uLlxyXG4gICAgICAgICAgICBkZWZhdWx0TWltZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsIC8vIHRoaXMgZGVmYXVsdCBtaW1lIGFsc28gdHJpZ2dlcnMgaWZyYW1lIGRvd25sb2Fkc1xyXG4gICAgICAgICAgICBtaW1lVHlwZSA9IHN0ck1pbWVUeXBlIHx8IGRlZmF1bHRNaW1lLFxyXG4gICAgICAgICAgICBwYXlsb2FkID0gZGF0YSxcclxuICAgICAgICAgICAgdXJsID0gIXN0ckZpbGVOYW1lICYmICFzdHJNaW1lVHlwZSAmJiBwYXlsb2FkLFxyXG4gICAgICAgICAgICBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcclxuICAgICAgICAgICAgdG9TdHJpbmcgPSBmdW5jdGlvbiAoYSkgeyByZXR1cm4gU3RyaW5nKGEpOyB9LFxyXG4gICAgICAgICAgICBteUJsb2IgPSAoc2VsZi5CbG9iIHx8IHNlbGYuTW96QmxvYiB8fCBzZWxmLldlYktpdEJsb2IgfHwgdG9TdHJpbmcpLFxyXG4gICAgICAgICAgICBmaWxlTmFtZSA9IHN0ckZpbGVOYW1lIHx8IFwiZG93bmxvYWRcIixcclxuICAgICAgICAgICAgYmxvYixcclxuICAgICAgICAgICAgcmVhZGVyO1xyXG4gICAgICAgIG15QmxvYiA9IG15QmxvYi5jYWxsID8gbXlCbG9iLmJpbmQoc2VsZikgOiBCbG9iO1xyXG5cclxuICAgICAgICBpZiAoU3RyaW5nKHRoaXMpID09PSBcInRydWVcIikgeyAvL3JldmVyc2UgYXJndW1lbnRzLCBhbGxvd2luZyBkb3dubG9hZC5iaW5kKHRydWUsIFwidGV4dC94bWxcIiwgXCJleHBvcnQueG1sXCIpIHRvIGFjdCBhcyBhIGNhbGxiYWNrXHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBbcGF5bG9hZCwgbWltZVR5cGVdO1xyXG4gICAgICAgICAgICBtaW1lVHlwZSA9IHBheWxvYWRbMF07XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBwYXlsb2FkWzFdO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh1cmwgJiYgdXJsLmxlbmd0aCA8IDIwNDgpIHsgLy8gaWYgbm8gZmlsZW5hbWUgYW5kIG5vIG1pbWUsIGFzc3VtZSBhIHVybCB3YXMgcGFzc2VkIGFzIHRoZSBvbmx5IGFyZ3VtZW50XHJcbiAgICAgICAgICAgIGZpbGVOYW1lID0gdXJsLnNwbGl0KFwiL1wiKS5wb3AoKS5zcGxpdChcIj9cIilbMF07XHJcbiAgICAgICAgICAgIGFuY2hvci5ocmVmID0gdXJsOyAvLyBhc3NpZ24gaHJlZiBwcm9wIHRvIHRlbXAgYW5jaG9yXHJcbiAgICAgICAgICAgIGlmIChhbmNob3IuaHJlZi5pbmRleE9mKHVybCkgIT09IC0xKSB7IC8vIGlmIHRoZSBicm93c2VyIGRldGVybWluZXMgdGhhdCBpdCdzIGEgcG90ZW50aWFsbHkgdmFsaWQgdXJsIHBhdGg6XHJcbiAgICAgICAgICAgICAgICB2YXIgYWpheCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgYWpheC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhamF4LnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgICAgICAgICAgICAgIGFqYXgub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZChlLnRhcmdldC5yZXNwb25zZSwgZmlsZU5hbWUsIGRlZmF1bHRNaW1lKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgYWpheC5zZW5kKCk7IH0sIDApOyAvLyBhbGxvd3Mgc2V0dGluZyBjdXN0b20gYWpheCBoZWFkZXJzIHVzaW5nIHRoZSByZXR1cm46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWpheDtcclxuICAgICAgICAgICAgfSAvLyBlbmQgaWYgdmFsaWQgdXJsP1xyXG4gICAgICAgIH0gLy8gZW5kIGlmIHVybD9cclxuXHJcblxyXG4gICAgICAgIC8vZ28gYWhlYWQgYW5kIGRvd25sb2FkIGRhdGFVUkxzIHJpZ2h0IGF3YXlcclxuICAgICAgICBpZiAoL15kYXRhXFw6W1xcdytcXC1dK1xcL1tcXHcrXFwtXStbLDtdLy50ZXN0KHBheWxvYWQpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5sZW5ndGggPiAoMTAyNCAqIDEwMjQgKiAxLjk5OSkgJiYgbXlCbG9iICE9PSB0b1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IGRhdGFVcmxUb0Jsb2IocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZSA9IHBheWxvYWQudHlwZSB8fCBkZWZhdWx0TWltZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYiA/ICAvLyBJRTEwIGNhbid0IGRvIGFbZG93bmxvYWRdLCBvbmx5IEJsb2JzOlxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKGRhdGFVcmxUb0Jsb2IocGF5bG9hZCksIGZpbGVOYW1lKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZXIocGF5bG9hZCk7IC8vIGV2ZXJ5b25lIGVsc2UgY2FuIHNhdmUgZGF0YVVSTHMgdW4tcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfS8vZW5kIGlmIGRhdGFVUkwgcGFzc2VkP1xyXG5cclxuICAgICAgICBibG9iID0gcGF5bG9hZCBpbnN0YW5jZW9mIG15QmxvYiA/XHJcbiAgICAgICAgICAgIHBheWxvYWQgOlxyXG4gICAgICAgICAgICBuZXcgbXlCbG9iKFtwYXlsb2FkXSwgeyB0eXBlOiBtaW1lVHlwZSB9KTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRhdGFVcmxUb0Jsb2Ioc3RyVXJsKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHN0clVybC5zcGxpdCgvWzo7LF0vKSxcclxuICAgICAgICAgICAgICAgIHR5cGUgPSBwYXJ0c1sxXSxcclxuICAgICAgICAgICAgICAgIGRlY29kZXIgPSBwYXJ0c1syXSA9PSBcImJhc2U2NFwiID8gYXRvYiA6IGRlY29kZVVSSUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGJpbkRhdGEgPSBkZWNvZGVyKHBhcnRzLnBvcCgpKSxcclxuICAgICAgICAgICAgICAgIG14ID0gYmluRGF0YS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgICAgICAgIHVpQXJyID0gbmV3IFVpbnQ4QXJyYXkobXgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpOyBpIDwgbXg7ICsraSkgdWlBcnJbaV0gPSBiaW5EYXRhLmNoYXJDb2RlQXQoaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IG15QmxvYihbdWlBcnJdLCB7IHR5cGU6IHR5cGUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzYXZlcih1cmwsIHdpbk1vZGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgnZG93bmxvYWQnIGluIGFuY2hvcikgeyAvL2h0bWw1IEFbZG93bmxvYWRdXHJcbiAgICAgICAgICAgICAgICBhbmNob3IuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBhbmNob3IuY2xhc3NOYW1lID0gXCJkb3dubG9hZC1qcy1saW5rXCI7XHJcbiAgICAgICAgICAgICAgICBhbmNob3IuaW5uZXJIVE1MID0gXCJkb3dubG9hZGluZy4uLlwiO1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvci5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYW5jaG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luTW9kZSA9PT0gdHJ1ZSkgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2VsZi5VUkwucmV2b2tlT2JqZWN0VVJMKGFuY2hvci5ocmVmKTsgfSwgMjUwKTsgfVxyXG4gICAgICAgICAgICAgICAgfSwgNjYpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBub24tYVtkb3dubG9hZF0gc2FmYXJpIGFzIGJlc3Qgd2UgY2FuOlxyXG4gICAgICAgICAgICBpZiAoLyhWZXJzaW9uKVxcLyhcXGQrKVxcLihcXGQrKSg/OlxcLihcXGQrKSk/LipTYWZhcmlcXC8vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9eZGF0YTooW1xcd1xcL1xcLVxcK10rKS8sIGRlZmF1bHRNaW1lKTtcclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93Lm9wZW4odXJsKSkgeyAvLyBwb3B1cCBibG9ja2VkLCBvZmZlciBkaXJlY3QgZG93bmxvYWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJEaXNwbGF5aW5nIE5ldyBEb2N1bWVudFxcblxcblVzZSBTYXZlIEFzLi4uIHRvIGRvd25sb2FkLCB0aGVuIGNsaWNrIGJhY2sgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZS5cIikpIHsgbG9jYXRpb24uaHJlZiA9IHVybDsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZG8gaWZyYW1lIGRhdGFVUkwgZG93bmxvYWQgKG9sZCBjaCtGRik6XHJcbiAgICAgICAgICAgIHZhciBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghd2luTW9kZSkgeyAvLyBmb3JjZSBhIG1pbWUgdGhhdCB3aWxsIGRvd25sb2FkOlxyXG4gICAgICAgICAgICAgICAgdXJsID0gXCJkYXRhOlwiICsgdXJsLnJlcGxhY2UoL15kYXRhOihbXFx3XFwvXFwtXFwrXSspLywgZGVmYXVsdE1pbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGYuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmKTsgfSwgMzMzKTtcclxuXHJcbiAgICAgICAgfS8vZW5kIHNhdmVyXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRTEwKyA6IChoYXMgQmxvYiwgYnV0IG5vdCBhW2Rvd25sb2FkXSBvciBVUkwpXHJcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5VUkwpIHsgLy8gc2ltcGxlIGZhc3QgYW5kIG1vZGVybiB3YXkgdXNpbmcgQmxvYiBhbmQgVVJMOlxyXG4gICAgICAgICAgICBzYXZlcihzZWxmLlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBub24tQmxvYigpK25vbi1VUkwgYnJvd3NlcnM6XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvYiA9PT0gXCJzdHJpbmdcIiB8fCBibG9iLmNvbnN0cnVjdG9yID09PSB0b1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2F2ZXIoXCJkYXRhOlwiICsgbWltZVR5cGUgKyBcIjtiYXNlNjQsXCIgKyBzZWxmLmJ0b2EoYmxvYikpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzYXZlcihcImRhdGE6XCIgKyBtaW1lVHlwZSArIFwiLFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGJsb2IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQmxvYiBidXQgbm90IFVSTCBzdXBwb3J0OlxyXG4gICAgICAgICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHNhdmVyKHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTsgLyogZW5kIGRvd25sb2FkKCkgKi9cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG93bmxvYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9