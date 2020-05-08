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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU25hY2tiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJldHR5LWNoZWNrYm94L3NyYy9wcmV0dHktY2hlY2tib3guc2Nzcz8wZjVkIiwid2VicGFjazovLy8uL3NyYy9Nb25pdG9yUnVubmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzP2JlNGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViRGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsb3dXaW5kb3dlZE1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9yY2VDb2RlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXN0ZUZyb21DbGlwYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmF0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdG9yZUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvQ2xvY2suc2Nzcz84YTIzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3M/Mzg3MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3M/NWI0NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzPzY5ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL05ldHdvcmtNb25pdG9yLnNjc3M/NjdjNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzPzkyZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1N0b3JlRmlsdGVyLnNjc3M/NmMyNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvVUlUYWIuc2Nzcz84YjQ5Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0dsb2JhbC5zY3NzPzA5YjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3M/MmZkMCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1R5cG9ncmFwaHkuc2Nzcz85YWY5Iiwid2VicGFjazovLy8uL3NyYy91aS9DaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvU2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9TbmFja2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQnV0dG9uQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlSb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2Nzcz85OTBjIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU2VsZWN0LnNjc3M/N2U3YSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3M/OWI3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyRkFBc0M7QUFDaEY7QUFDQTtBQUNBLGNBQWMsUUFBUyxjQUFjLDJCQUEyQixHQUFHLDBEQUEwRCxrQkFBa0IsR0FBRyxhQUFhLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixtQkFBbUIsR0FBRyxpQkFBaUIsdUJBQXVCLFlBQVksV0FB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QUVELHNCQUFNLEdBQU4sVUFBTyxTQUFzQixFQUFFLEtBQXNCO1FBQXRCLHFDQUFzQjtRQUNqRCxJQUFHLEtBQUssRUFBRTtZQUNOLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRDtRQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyREQsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQywyTkFBNEc7O0FBRTlJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsMk5BQTRHOztBQUU5STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7OztBQ3BCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLCtOQUE4Rzs7QUFFaEo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcmV0dHkgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucHJldHR5IGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pOm5vdChbdHlwZT1yYWRpb10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmV0dHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5wcmV0dHkgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIG1pbi13aWR0aDogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgb3BhY2l0eTogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsIHtcXG4gIHBvc2l0aW9uOiBpbml0aWFsO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtaW5kZW50OiAxLjVlbTtcXG4gIG1pbi13aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbn1cXG4ucHJldHR5IC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldHR5IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmRjM2M3O1xcbn1cXG4ucHJldHR5IC5zdGF0ZS5wLWlzLWhvdmVyLCAucHJldHR5IC5zdGF0ZS5wLWlzLWluZGV0ZXJtaW5hdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0YWRhIHtcXG4gIDAlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg3KTtcXG4gIH1cXG4gIDM4JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgNTUlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcbiAgNzIlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA4MSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjQpO1xcbiAgfVxcbiAgODklIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA5NSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGplbGx5IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuODUsIDEuMTUsIDEpO1xcbiAgfVxcbiAgNjUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNiZGMzYzc7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMS41ZW0gcmdiYSgxODksIDE5NSwgMTk5LCAwKTtcXG4gIH1cXG59XFxuLnByZXR0eS5wLWRlZmF1bHQucC1maWxsIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ucHJldHR5LnAtZGVmYXVsdCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzcgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IGNhbGMoMWVtIC8gNyk7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC40KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtaWNvbiAuc3RhdGUgLmljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5wcmV0dHkucC1pY29uIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLmljb24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbn1cXG5cXG4ucHJldHR5LnAtc3ZnIC5zdGF0ZSAuc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgd2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1zdmcgLnN0YXRlIHN2ZyB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5wcmV0dHkucC1zdmcgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuc3ZnIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC1pbWFnZSAuc3RhdGUgaW1nIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICB0b3A6IDA7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG59XFxuLnByZXR0eS5wLWltYWdlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgaW1nIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQge1xcbiAgbWluLXdpZHRoOiAyZW07XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYzNjNztcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxuICB3aWR0aDogMmVtO1xcbiAgYm94LXNpemluZzogdW5zZXQ7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gMTYlKTtcXG4gIHotaW5kZXg6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbCB7XFxuICB0ZXh0LWluZGVudDogMi41ZW07XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjU2YiAhaW1wb3J0YW50O1xcbiAgbGVmdDogMWVtO1xcbn1cXG5cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NTZiICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgbGVmdDogMWVtO1xcbn1cXG5cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSAuc3RhdGU6YmVmb3JlIHtcXG4gIGhlaWdodDogMC4xZW07XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxuICB0b3A6IGNhbGMoNTAlIC0gMC4xZW0pO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NTZiICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXIgfiAuc3RhdGU6bm90KC5wLWlzLWhvdmVyKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJldHR5LnAtaGFzLWhvdmVyIGlucHV0OmhvdmVyIH4gLnN0YXRlLnAtaXMtaG92ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXIgfiAuc3RhdGUucC1pcy1ob3ZlciAuaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1mb2N1cyBpbnB1dDpmb2N1cyB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4ICNiZGMzYzc7XFxufVxcblxcbi5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIH4gLnN0YXRlOm5vdCgucC1pcy1pbmRldGVybWluYXRlKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZSB+IC5zdGF0ZS5wLWlzLWluZGV0ZXJtaW5hdGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIH4gLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSAuaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb2ZmLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgaW1nIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9mZiAuaWNvbiB7XFxuICBjb2xvcjogI2JkYzNjNztcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtb24ge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLW9mZiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXR0eS5wLXBsYWluIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtcGxhaW4ucC10b2dnbGUgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG4ucHJldHR5LnAtcGxhaW4ucC1wbGFpbiAuaWNvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtcm91bmQgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcbi5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJldHR5LnAtcm91bmQucC1pY29uIC5zdGF0ZSAuaWNvbjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG5cXG4ucHJldHR5LnAtY3VydmUgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLWN1cnZlIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBib3JkZXItcmFkaXVzOiAyMCU7XFxufVxcblxcbi5wcmV0dHkucC1zbW9vdGggbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1zbW9vdGggbGFiZWw6YWZ0ZXIsXFxuLnByZXR0eS5wLXNtb290aCAuaWNvbixcXG4ucHJldHR5LnAtc21vb3RoIC5zdmcge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgaW1nIHtcXG4gIGFuaW1hdGlvbjogem9vbSAwLjJzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zbW9vdGgucC1kZWZhdWx0IGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiB6b29tIDAuMnMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aC5wLXBsYWluIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5zdmcsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHRhZGEgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgMSBhbHRlcm5hdGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5zdmcsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGltZyxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IGplbGx5IDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGltZyxcXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByZXR0eS5wLXB1bHNlOm5vdCgucC1zd2l0Y2gpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXM7XFxufVxcblxcbi5wcmV0dHkgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJldHR5IGlucHV0W2Rpc2FibGVkXSB+ICoge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ucHJldHR5LnAtbG9ja2VkIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5IGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5IC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgLnN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSAuc3ZnIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgc3Ryb2tlOiAjZmZmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDI4YmNhO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIC5zdmcsXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIHN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyBzdmcge1xcbiAgY29sb3I6ICM0MjhiY2E7XFxuICBzdHJva2U6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2EgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDI4YmNhO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeTpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjQ1NjgyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NTY4MiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gLnN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyAuc3ZnIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgc3Ryb2tlOiAjZmZmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWJjMGRlO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIC5zdmcsXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIHN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyBzdmcge1xcbiAgY29sb3I6ICM1YmMwZGU7XFxuICBzdHJva2U6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbzpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWJjMGRlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbzpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbzpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjM5MGIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTBiMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgLnN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyAuc3ZnIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgc3Ryb2tlOiAjZmZmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWNiODVjO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIC5zdmcsXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIHN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyBzdmcge1xcbiAgY29sb3I6ICM1Y2I4NWM7XFxuICBzdHJva2U6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWMgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzczpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWNiODVjO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzczpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzczpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMzU3OTM1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NzkzNSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgLnN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyAuc3ZnIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgc3Ryb2tlOiAjZmZmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIC5zdmcsXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIHN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyBzdmcge1xcbiAgY29sb3I6ICNmMGFkNGU7XFxuICBzdHJva2U6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZzpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZzpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZzpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYzc3YzExO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3N2MxMSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlciAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlciAuc3ZnIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgc3Ryb2tlOiAjZmZmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0ZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIC5zdmcsXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIHN2ZyB7XFxuICBjb2xvcjogI2Q5NTM0ZjtcXG4gIHN0cm9rZTogI2Q5NTM0ZjtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2EwMjYyMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMDI2MjIgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWJpZ2dlciBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLWJpZ2dlciBsYWJlbDphZnRlcixcXG4ucHJldHR5LnAtYmlnZ2VyIC5pY29uLFxcbi5wcmV0dHkucC1iaWdnZXIgLnN2ZyxcXG4ucHJldHR5LnAtYmlnZ2VyIC5pbWcge1xcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAzNSUpICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1iaWdnZXIgbGFiZWwge1xcbiAgdGV4dC1pbmRlbnQ6IDEuN2VtO1xcbn1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLnByZXR0eSAuc3RhdGU6YmVmb3JlLFxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5IC5zdGF0ZSBsYWJlbDphZnRlcixcXG4ucHJldHR5IC5zdGF0ZSAuaWNvbiB7XFxuICAgIGNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19jbG9jayB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5zdGFkaWFwbHVzX3JvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5zdGFkaWFwbHVzX3JvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC4yNSwgMSksIG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC4yNSwgMSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlci5jbG9zaW5nIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlci5jbG9zZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlciAuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29ucyBFeHRlbmRlZFxcXCI7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB6LWluZGV4OiA0O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2EzYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjIzcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4xNSwgMSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcjpob3ZlciAuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxNSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcjpob3ZlciAuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzIzNjtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjMyKSwgMCAwLjA2MjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZHJvcGRvd24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJhcnJvd19kcm9wX2Rvd25cXFwiO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbi5hc2NlbmRpbmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24uZGVzY2VuZGluZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxNTA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciAqIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLmVkaXRhYmxlIHtcXG4gIHotaW5kZXg6IDMwMDtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdGFiIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxcmVtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdG9nZ2xlLWJ1dHRvbjo6YmVmb3JlIHtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgY29udGVudDogXFxcIlNob3dcXFwiO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10b2dnbGUtYnV0dG9uLnNob3duOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkhpZGVcXFwiO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX3JhdGluZyB7XFxuICBtYXJnaW4tdG9wOiAtMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zdGFkaWFwbHVzX3JhdGluZzpob3ZlciAuc3RhZGlhcGx1c19yYXRpbmctdG9vbHRpcCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDEpO1xcbn1cXG4uc3RhZGlhcGx1c19yYXRpbmcgLnN0YWRpYXBsdXNfcmF0aW5nLXRvb2x0aXAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb29nbGUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMC45KTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCAwLjNzLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCAwLjNzO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMzIpLCAwIDAuMDYyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTgpO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuYmFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW0gMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmJhcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJzZWFyY2hcXFwiO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zIEV4dGVuZGVkXFxcIjtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmJhciBpbnB1dCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb29nbGUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBvdXRsaW5lOiAjZmY3NzNkIDNweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAuNXJlbSAwLjVyZW07XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUuc2hvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZSAuZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX211dGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IHtcXG4gIC8qIFxcbiAgICogICBNdXN0IHJlbW92ZSAyIHggcGFkZGluZyBvciBpdCBkb2VzbnQgd29yayBcXG4gICAqL1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmUzMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50Lm9wZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQgaGVhZGVyIC5Dd0N4RmQge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1idG4tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IC0xNnB4O1xcbn1cXG4uc3RhZGlhcGx1c191aS1idG4tY29udGFpbmVyLkUwWms5YiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWJ1dHRvbiB7XFxuICB3aWR0aDogMTE2LjE1NnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuR3FMaTRkIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpIGNvbnRyYXN0KDEuMSk7XFxufVxcblxcbmh0bWwgYm9keSAuZFNHdnpmIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG5odG1sIGJvZHkgLkNWVlhmYyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGluaXRpYWw7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ4NGQ7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTI1NyAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX3JvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19tdXRlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Ryb3Bkb3duLmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjM0MzRTQzO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCxcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICM5Mzk1OUYgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAucGxhY2Vob2xkZXIsXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1wbHVzIHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTM5NTlGO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCxcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAjY2NjY2NjIDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB3aWR0aDogMTgwcHg7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1wbHVzIHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1wbHVzIHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjY2NjYztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtc2xpbXNlbGVjdC1sYXJnZS5zcy1tYWluIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtc2xpbXNlbGVjdC1sYXJnZS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCxcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfc25hY2tiYXIge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgei1pbmRleDogOTk5O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA4cHg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKDE2cHgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSwgb3BhY2l0eSAwLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfc25hY2tiYXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfc25hY2tiYXItbGFiZWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfc25hY2tiYXItY2xvc2Uge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5zdGFkaWFwbHVzX3NuYWNrYmFyLWNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3MtbWFpbntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt1c2VyLXNlbGVjdDpub25lO2NvbG9yOiM2NjY7d2lkdGg6MTAwJX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjt3aWR0aDoxMDAlO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3MtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZGNkZWUyO2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYWJvdmV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVye2ZsZXg6MSAxIDEwMCU7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpO2xpbmUtaGVpZ2h0OjFlbTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIsLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgKntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe3dpZHRoOmF1dG99LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgLnNzLWRpc2FibGVke2NvbG9yOiNkZWRlZGV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3R7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHg7Zm9udC13ZWlnaHQ6NzAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWRlc2VsZWN0LnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2ZsZXg6MCAxIGF1dG87bWFyZ2luOjAgNnB4fS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW57Ym9yZGVyOnNvbGlkICM2NjY7Ym9yZGVyLXdpZHRoOjAgMnB4IDJweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6M3B4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxtYXJnaW4gLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctdXB7dHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKTttYXJnaW46M3B4IDAgMH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuLmFycm93LWRvd257dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bWFyZ2luOi0zcHggMCAwfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2N1cnNvcjpwb2ludGVyO21pbi1oZWlnaHQ6MzBweDt3aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDAgM3B4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtjb2xvcjojNjY2fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZSAuc3MtdmFsdWUtZGVsZXRle2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1iZWxvd3tib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlc3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7ZmxleDoxIDEgMTAwJTt3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtZGlzYWJsZWR7ZGlzcGxheTpmbGV4O3BhZGRpbmc6NHB4IDVweDttYXJnaW46MnB4IDA7bGluZS1oZWlnaHQ6MWVtO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOiNkZWRlZGU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfUBrZXlmcmFtZXMgc2NhbGVJbnswJXt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2NhbGVPdXR7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWV7ZGlzcGxheTpmbGV4O3VzZXItc2VsZWN0Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6M3B4IDVweDttYXJnaW46M3B4IDVweCAzcHggMDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYjtib3JkZXItcmFkaXVzOjRweDthbmltYXRpb24tbmFtZTpzY2FsZUluO2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlLnNzLW91dHthbmltYXRpb24tbmFtZTpzY2FsZU91dDthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7bWFyZ2luOjAgMCAwIDVweDtjdXJzb3I6cG9pbnRlcn0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZHtkaXNwbGF5OmZsZXg7ZmxleDowIDEgM3B4O21hcmdpbjo5cHggMTJweCAwIDVweH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1c3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDojNjY2O3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4O3dpZHRoOjJweDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXM6YWZ0ZXJ7YmFja2dyb3VuZDojNjY2O2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDoxMHB4O2xlZnQ6LTRweDt0b3A6NHB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVzLnNzLWNyb3Nze3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zcy1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7bWFyZ2luOi0xcHggMCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7ei1pbmRleDoxMDEwO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG9wYWNpdHkgLjJzO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGVZKDApfS5zcy1jb250ZW50LnNzLW9wZW57ZGlzcGxheTpibG9jaztvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlWSgxKX0uc3MtY29udGVudCAuc3Mtc2VhcmNoe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7cGFkZGluZzo4cHggOHB4IDZweH0uc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUsLnNzLWNvbnRlbnQgLnNzLXNlYXJjaC5zcy1oaWRlIGlucHV0e2hlaWdodDowO29wYWNpdHk6MDtwYWRkaW5nOjA7bWFyZ2luOjB9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dHtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXQ7ZmxleDoxIDEgYXV0bzt3aWR0aDoxMDAlO21pbi13aWR0aDowO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4IDhweDttYXJnaW46MDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO291dGxpbmU6MDt0ZXh0LWFsaWduOmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGR9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6IzhhOGE4YTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDpmb2N1c3tib3gtc2hhZG93OjAgMCA1cHggIzU4OTdmYn0uc3MtY29udGVudCAuc3Mtc2VhcmNoIC5zcy1hZGRhYmxle2Rpc3BsYXk6aW5saW5lLWZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjIycHg7Zm9udC13ZWlnaHQ6NzAwO2ZsZXg6MCAwIDMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjAgMCAwIDhweDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNpemluZzpib3JkZXItYm94fS5zcy1jb250ZW50IC5zcy1hZGRhYmxle3BhZGRpbmctdG9wOjB9LnNzLWNvbnRlbnQgLnNzLWxpc3R7bWF4LWhlaWdodDoyMDBweDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87dGV4dC1hbGlnbjpsZWZ0fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cCAuc3Mtb3B0Z3JvdXAtbGFiZWx7cGFkZGluZzo2cHggMTBweDtmb250LXdlaWdodDo3MDB9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRpb257cGFkZGluZzo2cHggNnB4IDZweCAyNXB4fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxle2N1cnNvcjpwb2ludGVyfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZifS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb257cGFkZGluZzo2cHggMTBweDtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gKntkaXNwbGF5OmlubGluZS1ibG9ja30uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZ2hsaWdodGVkLC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb246aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1kaXNhYmxlZHtjdXJzb3I6bm90LWFsbG93ZWQ7Y29sb3I6I2RlZGVkZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpub3QoLnNzLWRpc2FibGVkKS5zcy1vcHRpb24tc2VsZWN0ZWR7Y29sb3I6IzY2NjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODgsMTUxLDI1MSwuMSl9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1oaWRle2Rpc3BsYXk6bm9uZX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIC5zcy1zZWFyY2gtaGlnaGxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2ZmZmI4Y31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcmV0dHktY2hlY2tib3guc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgXCJjb25zdCBNb25pdG9yUnVubmFibGUgPSBmdW5jdGlvbiAoKSB7XFxuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xcbiAgICB0aGlzLnBlZXJDb25uZWN0aW9ucyA9IFtdO1xcbiAgICB0aGlzLm9yaWdpbmFsUlRDO1xcbiAgICB0aGlzLnN0YXJ0VGltZTtcXG4gICAgdGhpcy5lbGVtZW50O1xcbiAgICB0aGlzLmVkaXRhYmxlID0gZmFsc2U7XFxuICAgIHRoaXMueCA9IDA7XFxuICAgIHRoaXMueSA9IDA7XFxuXFxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xcbiAgICB0aGlzLm9yaWdpbmFsUlRDID0gUlRDUGVlckNvbm5lY3Rpb247XFxuICAgIChmdW5jdGlvbiAoT3JpZ2luYWxSVENDb25uZWN0aW9uKSB7XFxuICAgICAgICBzZWxmLm9yaWdpbmFsUlRDID0gT3JpZ2luYWxSVENDb25uZWN0aW9uO1xcblxcbiAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoYXJncykge1xcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgT3JpZ2luYWxSVENDb25uZWN0aW9uKGFyZ3MpO1xcbiAgICAgICAgICAgIHNlbGYucGVlckNvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbik7XFxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XFxuICAgICAgICB9O1xcbiAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID0gT3JpZ2luYWxSVENDb25uZWN0aW9uLnByb3RvdHlwZTtcXG4gICAgfSkoUlRDUGVlckNvbm5lY3Rpb24pO1xcblxcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbmV0d29ya21vbml0b3InKTtcXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9XFxuICAgICAgICAgICAgJ25ldHdvcmttb25pdG9yLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpO1xcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xcblxcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xcblxcbiAgICAgICAgdGhpcy5zZXRFZGl0YWJsZSh0cnVlKTtcXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xcbiAgICAgICAgdGhpcy54ID0geDtcXG4gICAgICAgIHRoaXMueSA9IHk7XFxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XFxuICAgIH07XFxuXFxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcXG5cXG4gICAgICAgIGNvbnN0IGNvcm5lcnMgPSB7XFxuICAgICAgICAgICAgdGw6IDEwLFxcbiAgICAgICAgICAgIHRyOiAxMCxcXG4gICAgICAgICAgICBibDogMTAsXFxuICAgICAgICAgICAgYnI6IDEwLFxcbiAgICAgICAgfTtcXG5cXG4gICAgICAgIGlmICh0aGlzLnggPCAxMCkge1xcbiAgICAgICAgICAgIGNvcm5lcnMudGwgPSAwO1xcbiAgICAgICAgICAgIGNvcm5lcnMuYmwgPSAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHRoaXMueSA8IDEwKSB7XFxuICAgICAgICAgICAgY29ybmVycy50bCA9IDA7XFxuICAgICAgICAgICAgY29ybmVycy50ciA9IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGggLSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLSAxMCkge1xcbiAgICAgICAgICAgIGNvcm5lcnMudHIgPSAwO1xcbiAgICAgICAgICAgIGNvcm5lcnMuYnIgPSAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgLSAxMCkge1xcbiAgICAgICAgICAgIGNvcm5lcnMuYmwgPSAwO1xcbiAgICAgICAgICAgIGNvcm5lcnMuYnIgPSAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW1xcbiAgICAgICAgICAgICdib3JkZXItcmFkaXVzJ1xcbiAgICAgICAgXSA9IGAke2Nvcm5lcnMudGx9cHggJHtjb3JuZXJzLnRyfXB4ICR7Y29ybmVycy5icn1weCAke2Nvcm5lcnMuYmx9cHhgO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gW107XFxuICAgIHRoaXMubW92aW5nID0gZmFsc2U7XFxuICAgIHRoaXMub2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XFxuICAgIHRoaXMuc2V0RWRpdGFibGUgPSBmdW5jdGlvbiAoZWRpdGFibGUpIHtcXG4gICAgICAgIHRoaXMuZWRpdGFibGUgPSBlZGl0YWJsZTtcXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0YWJsZScsIGVkaXRhYmxlKTtcXG5cXG4gICAgICAgIGlmIChlZGl0YWJsZSkge1xcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMucHVzaChcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudCxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb3VzZW1vdmUnLFxcbiAgICAgICAgICAgICAgICAgICAgZm46IChldmVudCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1heChcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC8vIE1pbmltdW0geCB2YWx1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgsIC8vIE1heGltdW0geCB2YWx1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSB0aGlzLm9mZnNldC54LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAvLyBNaW5pbXVtIHkgdmFsdWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQsIC8vIE1heGltdW0geSB2YWx1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSB0aGlzLm9mZnNldC55LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5lbGVtZW50LFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlZG93bicsXFxuICAgICAgICAgICAgICAgICAgICBmbjogKGV2ZW50KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnggPSBldmVudC5jbGllbnRYIC0gdGhpcy54O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnkgPSBldmVudC5jbGllbnRZIC0gdGhpcy55O1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudCxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb3VzZXVwJyxcXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZXZlbnQpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICApO1xcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+XFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGV2ZW50LmZuKSxcXG4gICAgICAgICAgICApO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICB0aGlzLm1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PlxcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC50eXBlLCBldmVudC5mbiksXFxuICAgICAgICAgICAgKTtcXG4gICAgICAgIH1cXG4gICAgfTtcXG5cXG4gICAgdGhpcy5zZXRWaXNpYmxlID0gZnVuY3Rpb24gKHZpc2libGUpIHtcXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XFxuICAgIH07XFxuXFxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xcbiAgICAgICAgdGhpcy5zZXRFZGl0YWJsZShmYWxzZSk7XFxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XFxuXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IHRoaXMub3JpZ2luYWxSVEM7XFxuICAgICAgICBwZWVyQ29ubmVjdGlvbnMgPSBbXTtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy52aXNpYmxlID0ge1xcbiAgICAgICAgdGltZTogdHJ1ZSxcXG4gICAgICAgIHJlc29sdXRpb246IHRydWUsXFxuICAgICAgICBGUFM6IHRydWUsXFxuICAgICAgICBsYXRlbmN5OiB0cnVlLFxcbiAgICAgICAgY29kZWM6IHRydWUsXFxuICAgICAgICB0cmFmZmljOiB0cnVlLFxcbiAgICAgICAgJ2N1cnJlbnQtdHJhZmZpYyc6IHRydWUsXFxuICAgICAgICAnYXZlcmFnZS10cmFmZmljJzogdHJ1ZSxcXG4gICAgICAgICdwYWNrZXRzLWxvc3QnOiB0cnVlLFxcbiAgICAgICAgJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnOiB0cnVlLFxcbiAgICAgICAgJ2ppdHRlci1idWZmZXInOiB0cnVlLFxcbiAgICB9O1xcblxcbiAgICB0aGlzLnN0YXRzID0gW107XFxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgaWYgKHRoaXMucGVlckNvbm5lY3Rpb25zLmxlbmd0aCA+IDEpIHtcXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGVlckNvbm5lY3Rpb25zLmxlbmd0aCAtIDE7XFxuXFxuICAgICAgICAgICAgdGhpcy5wZWVyQ29ubmVjdGlvbnNbaW5kZXhdLmdldFN0YXRzKCkudGhlbigoX3N0YXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHMgPSBBcnJheS5mcm9tKF9zdGF0cyk7XFxuXFxuICAgICAgICAgICAgICAgIGNvbnN0IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSA9IHRoaXMuZ2V0U3RhdCgoc3RhdCkgPT5cXG4gICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtJyksXFxuICAgICAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFJUQ0ljZUNhbmRpZGF0ZVBhaXIgPSB0aGlzLmdldFN0YXQoKHN0YXQpID0+XFxuICAgICAgICAgICAgICAgICAgICBzdGF0WzBdLnN0YXJ0c1dpdGgoJ1JUQ0ljZUNhbmRpZGF0ZVBhaXInKSxcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlciA9IHRoaXMuZ2V0U3RhdChcXG4gICAgICAgICAgICAgICAgICAgIChzdGF0KSA9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcicpICYmXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdFsxXS5raW5kID09PSAndmlkZW8nLFxcbiAgICAgICAgICAgICAgICApO1xcblxcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHV0aW9uID0gdGhpcy5nZXRSZXNvbHV0aW9uKFxcbiAgICAgICAgICAgICAgICAgICAgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcixcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgZnBzID0gdGhpcy5nZXRGUFMoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZW5jeSA9IHRoaXMuZ2V0TGF0ZW5jeShSVENJY2VDYW5kaWRhdGVQYWlyKSArICcgbXMnO1xcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlYyA9IHRoaXMuZ2V0Q29kZWMoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxUcmFmZmljID0gdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZChSVENJY2VDYW5kaWRhdGVQYWlyKSxcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRyYWZmaWMgPVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERvd25sb2FkU3BlZWQoUlRDSWNlQ2FuZGlkYXRlUGFpciksXFxuICAgICAgICAgICAgICAgICAgICApICsgJy9zJztcXG4gICAgICAgICAgICAgICAgY29uc3QgYXZlcmFnZVRyYWZmaWMgPVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEF2ZXJhZ2VEb3dubG9hZFNwZWVkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpLFxcbiAgICAgICAgICAgICAgICAgICAgKSArICcvcyc7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhY2tldHNMb3N0ID0gdGhpcy5nZXRQYWNrZXRzTG9zdChcXG4gICAgICAgICAgICAgICAgICAgIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSxcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICAgICAgY29uc3QgYXZlcmFnZVBhY2tldExvc3MgPVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBdmVyYWdlUGFja2V0TG9zcyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pICsgJyUnO1xcbiAgICAgICAgICAgICAgICBjb25zdCBqaXR0ZXJCdWZmZXIgPVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRKaXR0ZXJCdWZmZXIoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcikgKyAnIG1zJztcXG5cXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsndGltZSddKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZVN0cmluZyA9IHRpbWUudG9Mb2NhbGVTdHJpbmcoKTtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxoNT4ke3RpbWVTdHJpbmd9PC9oNT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx1bD4nO1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydyZXNvbHV0aW9uJ10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5SZXNvbHV0aW9uOiAke3Jlc29sdXRpb24ud2lkdGh9eCR7cmVzb2x1dGlvbi5oZWlnaHR9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ0ZQUyddKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+RlBTOiAke2Zwc308L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnbGF0ZW5jeSddKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+TGF0ZW5jeTogJHtsYXRlbmN5fTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydjb2RlYyddKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+Q29kZWM6ICR7Y29kZWN9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3RyYWZmaWMnXSkge1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPlRvdGFsIFRyYWZmaWM6ICR7dG90YWxUcmFmZmljfTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydjdXJyZW50LXRyYWZmaWMnXSkge1xcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkN1cnJlbnQgVHJhZmZpYzogJHtjdXJyZW50VHJhZmZpY308L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnYXZlcmFnZS10cmFmZmljJ10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5BdmVyYWdlIFRyYWZmaWM6ICR7YXZlcmFnZVRyYWZmaWN9PC9saT5gO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3BhY2tldHMtbG9zdCddKSB7XFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+UGFja2V0cyBMb3N0OiAke3BhY2tldHNMb3N0fTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydhdmVyYWdlLXBhY2tldC1sb3NzJ10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5BdmVyYWdlIFBhY2tldCBMb3NzOiAke2F2ZXJhZ2VQYWNrZXRMb3NzfTwvbGk+YDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydqaXR0ZXItYnVmZmVyJ10pIHtcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5KaXR0ZXIgQnVmZmVyOiAke2ppdHRlckJ1ZmZlcn08L2xpPmA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC91bD4nO1xcblxcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXFxuICAgICAgICAgICAgICAgIDxoNT5FcnJvcjwvaDU+XFxuICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgVWggb2gsIHNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLiBcXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgZmVhdHVyZSBpcyBzdGlsbCB2ZXJ5IHVuc3RhYmxlIGFuZCBcXG4gICAgICAgICAgICAgICAgICAgIHRoZSBkZXZlbG9wZXIga25vd3MgdGhlcmUgYXJlIHByb2JsZW1zLCBcXG4gICAgICAgICAgICAgICAgICAgIHBsZWFzZSB1bmRlcnN0YW5kIHRoYXQgdGhpcyBpc3N1ZSBpcyBcXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZWx5IGJlaW5nIHdvcmtlZCBvbi5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCc+RXJyb3IgQ29kZTogMDAxIC0gU3RhdHMgdW5hdmFpbGFibGU8L3A+XFxuICAgICAgICAgICAgYDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcXG4gICAgICAgICAgICB9LCAxMDAwKTtcXG4gICAgICAgIH1cXG4gICAgfTtcXG5cXG4gICAgdGhpcy5nZXRTdGF0ID0gZnVuY3Rpb24gKGZpbHRlcikge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHMuZmluZChmaWx0ZXIpWzFdO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XFxuICAgICAgICBjb25zdCB1bml0cyA9IFsnQicsICdrQicsICdNQicsICdHQiddO1xcblxcbiAgICAgICAgbGV0IGkgPSAwO1xcbiAgICAgICAgd2hpbGUgKHZhbHVlIC8gMTAwMCA+PSAxKSB7XFxuICAgICAgICAgICAgaSsrO1xcbiAgICAgICAgICAgIHZhbHVlIC89IDEwMDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gKFxcbiAgICAgICAgICAgIHZhbHVlLnRvUHJlY2lzaW9uKDQpICsgJyAnICsgdW5pdHNbTWF0aC5taW4odW5pdHMubGVuZ3RoIC0gMSwgaSldXFxuICAgICAgICApO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldExhdGVuY3kgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcbiAgICAgICAgcmV0dXJuIFJUQ0ljZUNhbmRpZGF0ZVBhaXIuY3VycmVudFJvdW5kVHJpcFRpbWUgKiAxMDAwO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldEppdHRlckJ1ZmZlciA9IGZ1bmN0aW9uIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSB7XFxuICAgICAgICByZXR1cm4gKFxcbiAgICAgICAgICAgIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmppdHRlckJ1ZmZlckRlbGF5ICogMTAwMCkgL1xcbiAgICAgICAgICAgIFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuaml0dGVyQnVmZmVyRW1pdHRlZENvdW50XFxuICAgICAgICApLnRvUHJlY2lzaW9uKDQpO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldFBhY2tldHNMb3N0ID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcbiAgICAgICAgcmV0dXJuIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdDtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5nZXRBdmVyYWdlUGFja2V0TG9zcyA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXG4gICAgICAgIHJldHVybiAoXFxuICAgICAgICAgICAgKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdCAvXFxuICAgICAgICAgICAgICAgIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0ucGFja2V0c1JlY2VpdmVkICtcXG4gICAgICAgICAgICAgICAgICAgIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdCkpICpcXG4gICAgICAgICAgICAxMDBcXG4gICAgICAgICkudG9QcmVjaXNpb24oMik7XFxuICAgIH07XFxuXFxuICAgIHRoaXMubGFzdERvd25sb2FkID0gMDtcXG4gICAgdGhpcy5nZXREb3dubG9hZFNwZWVkID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXG4gICAgICAgIGNvbnN0IGRvd25sb2FkID0gdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpO1xcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBkb3dubG9hZCAtIHRoaXMubGFzdERvd25sb2FkO1xcbiAgICAgICAgdGhpcy5sYXN0RG93bmxvYWQgPSBkb3dubG9hZDtcXG4gICAgICAgIHJldHVybiBzcGVlZDtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5nZXRBdmVyYWdlRG93bmxvYWRTcGVlZCA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxuICAgICAgICByZXR1cm4gKFxcbiAgICAgICAgICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZChSVENJY2VDYW5kaWRhdGVQYWlyKSAvXFxuICAgICAgICAgICAgKHRoaXMudGltZVNpbmNlU3RhcnQoKSAvIDEwMDApXFxuICAgICAgICApO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldFRvdGFsRG93bmxvYWQgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcbiAgICAgICAgcmV0dXJuIFJUQ0ljZUNhbmRpZGF0ZVBhaXIuYnl0ZXNSZWNlaXZlZDtcXG4gICAgfTtcXG5cXG4gICAgdGhpcy5nZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24gKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgd2lkdGg6IFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuZnJhbWVXaWR0aCxcXG4gICAgICAgICAgICBoZWlnaHQ6IFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuZnJhbWVIZWlnaHQsXFxuICAgICAgICB9O1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmdldENvZGVjID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcbiAgICAgICAgY29uc3QgY29kZWNTdGF0ID0gdGhpcy5nZXRTdGF0KFxcbiAgICAgICAgICAgIChzdGF0KSA9PiBzdGF0WzBdID09PSBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0uY29kZWNJZCxcXG4gICAgICAgICk7XFxuICAgICAgICByZXR1cm4gY29kZWNTdGF0Lm1pbWVUeXBlLnN1YnN0cmluZygndmlkZW8vJy5sZW5ndGgpO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLmxhc3RGcmFtZXMgPSAwO1xcbiAgICB0aGlzLmdldEZQUyA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXG4gICAgICAgIGNvbnN0IGZwcyA9IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5mcmFtZXNEZWNvZGVkIC0gdGhpcy5sYXN0RnJhbWVzO1xcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVzID0gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLmZyYW1lc0RlY29kZWQ7XFxuICAgICAgICByZXR1cm4gZnBzO1xcbiAgICB9O1xcblxcbiAgICB0aGlzLnRpbWVTaW5jZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcXG4gICAgfTtcXG59O1xcblxcblN0YWRpYVBsdXNNb25pdG9yID0gbmV3IE1vbml0b3JSdW5uYWJsZSgpO1xcblwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpbXNlbGVjdC5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNsaW1TZWxlY3Q9dCgpOmUuU2xpbVNlbGVjdD10KCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybihzPXt9LG4ubT1pPVtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBpLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLGl9dmFyIG47dC5fX2VzTW9kdWxlPSEwLHQuaGFzQ2xhc3NJblRyZWU9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBzKGUsdCl7cmV0dXJuIHQmJmUmJmUuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5jb250YWlucyh0KT9lOm51bGx9cmV0dXJuIHMoZSx0KXx8ZnVuY3Rpb24gZSh0LGkpe3JldHVybiB0JiZ0IT09ZG9jdW1lbnQ/cyh0LGkpP3Q6ZSh0LnBhcmVudE5vZGUsaSk6bnVsbH0oZSx0KX0sdC5lbnN1cmVFbGVtZW50SW5WaWV3PWZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5zY3JvbGxUb3ArZS5vZmZzZXRUb3Ascz1pK2UuY2xpZW50SGVpZ2h0LG49dC5vZmZzZXRUb3AsYT1uK3QuY2xpZW50SGVpZ2h0O248aT9lLnNjcm9sbFRvcC09aS1uOnM8YSYmKGUuc2Nyb2xsVG9wKz1hLXMpfSx0LnB1dENvbnRlbnQ9ZnVuY3Rpb24oZSx0LGkpe3ZhciBzPWUub2Zmc2V0SGVpZ2h0LG49ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWk/bi50b3A6bi50b3AtcyxvPWk/bi5ib3R0b206bi5ib3R0b20rcztyZXR1cm4gYTw9MD9cImJlbG93XCI6bz49d2luZG93LmlubmVySGVpZ2h0P1wiYWJvdmVcIjppP3Q6XCJiZWxvd1wifSx0LmRlYm91bmNlPWZ1bmN0aW9uKG4sYSxvKXt2YXIgbDtyZXR1cm4gdm9pZCAwPT09YSYmKGE9MTAwKSx2b2lkIDA9PT1vJiYobz0hMSksZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspZVt0XT1hcmd1bWVudHNbdF07dmFyIGk9c2VsZixzPW8mJiFsO2NsZWFyVGltZW91dChsKSxsPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPW51bGwsb3x8bi5hcHBseShpLGUpfSxhKSxzJiZuLmFwcGx5KGksZSl9fSx0LmlzVmFsdWVJbkFycmF5T2ZPYmplY3RzPWZ1bmN0aW9uKGUsdCxpKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZVt0XT09PWk7Zm9yKHZhciBzPTAsbj1lO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO2lmKGEmJmFbdF0mJmFbdF09PT1pKXJldHVybiEwfXJldHVybiExfSx0LmhpZ2hsaWdodD1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ZSxuPW5ldyBSZWdFeHAoXCIoXCIrdC50cmltKCkrXCIpKD8hW148XSo+W148Pl0qPC8pXCIsXCJpXCIpO2lmKCFlLm1hdGNoKG4pKXJldHVybiBlO3ZhciBhPWUubWF0Y2gobikuaW5kZXgsbz1hK2UubWF0Y2gobilbMF0udG9TdHJpbmcoKS5sZW5ndGgsbD1lLnN1YnN0cmluZyhhLG8pO3JldHVybiBzPXMucmVwbGFjZShuLCc8bWFyayBjbGFzcz1cIicraSsnXCI+JytsK1wiPC9tYXJrPlwiKX0sXCJmdW5jdGlvblwiIT10eXBlb2Yobj13aW5kb3cpLkN1c3RvbUV2ZW50JiYocy5wcm90b3R5cGU9bi5FdmVudC5wcm90b3R5cGUsbi5DdXN0b21FdmVudD1zKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUubmV3T3B0aW9uPWZ1bmN0aW9uKGUpe3JldHVybntpZDplLmlkP2UuaWQ6U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlP2UudmFsdWU6XCJcIix0ZXh0OmUudGV4dD9lLnRleHQ6XCJcIixpbm5lckhUTUw6ZS5pbm5lckhUTUw/ZS5pbm5lckhUTUw6XCJcIixzZWxlY3RlZDohIWUuc2VsZWN0ZWQmJmUuc2VsZWN0ZWQsZGlzcGxheTp2b2lkIDA9PT1lLmRpc3BsYXl8fGUuZGlzcGxheSxkaXNhYmxlZDohIWUuZGlzYWJsZWQmJmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6ISFlLnBsYWNlaG9sZGVyJiZlLnBsYWNlaG9sZGVyLGNsYXNzOmUuY2xhc3M/ZS5jbGFzczp2b2lkIDAsZGF0YTplLmRhdGE/ZS5kYXRhOnt9fX0sbi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGUpe3RoaXMuZGF0YS5wdXNoKHtpZDpTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWUsdGV4dDplLnRleHQsaW5uZXJIVE1MOlwiXCIsc2VsZWN0ZWQ6ITEsZGlzcGxheTohMCxkaXNhYmxlZDohMSxwbGFjZWhvbGRlcjohMSxjbGFzczp2b2lkIDAsZGF0YTp7fX0pfSxuLnByb3RvdHlwZS5wYXJzZVNlbGVjdERhdGE9ZnVuY3Rpb24oKXt0aGlzLmRhdGE9W107Zm9yKHZhciBlPTAsdD10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQuY2hpbGROb2RlcztlPHQubGVuZ3RoO2UrKyl7dmFyIGk9dFtlXTtpZihcIk9QVEdST1VQXCI9PT1pLm5vZGVOYW1lKXtmb3IodmFyIHM9e2xhYmVsOmkubGFiZWwsb3B0aW9uczpbXX0sbj0wLGE9aS5jaGlsZE5vZGVzO248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2lmKFwiT1BUSU9OXCI9PT1vLm5vZGVOYW1lKXt2YXIgbD10aGlzLnB1bGxPcHRpb25EYXRhKG8pO3Mub3B0aW9ucy5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KX19dGhpcy5kYXRhLnB1c2gocyl9ZWxzZVwiT1BUSU9OXCI9PT1pLm5vZGVOYW1lJiYobD10aGlzLnB1bGxPcHRpb25EYXRhKGkpLHRoaXMuZGF0YS5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KSl9fSxuLnByb3RvdHlwZS5wdWxsT3B0aW9uRGF0YT1mdW5jdGlvbihlKXtyZXR1cm57aWQ6ISFlLmRhdGFzZXQmJmUuZGF0YXNldC5pZHx8U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlLHRleHQ6ZS50ZXh0LGlubmVySFRNTDplLmlubmVySFRNTCxzZWxlY3RlZDplLnNlbGVjdGVkLGRpc2FibGVkOmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6XCJ0cnVlXCI9PT1lLmRhdGFzZXQucGxhY2Vob2xkZXIsY2xhc3M6ZS5jbGFzc05hbWUsc3R5bGU6ZS5zdHlsZS5jc3NUZXh0LGRhdGE6ZS5kYXRhc2V0fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0PWZ1bmN0aW9uKCl7aWYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGU9W10sdD0wLGk9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50Lm9wdGlvbnM7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5zZWxlY3RlZCl7dmFyIG49dGhpcy5nZXRPYmplY3RGcm9tRGF0YShzLnZhbHVlLFwidmFsdWVcIik7biYmbi5pZCYmZS5wdXNoKG4uaWQpfX10aGlzLnNldFNlbGVjdGVkKGUsXCJpZFwiKX1lbHNle3ZhciBhPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudDtpZigtMSE9PWEuc2VsZWN0ZWRJbmRleCl7dmFyIG89YS5vcHRpb25zW2Euc2VsZWN0ZWRJbmRleF0udmFsdWU7dGhpcy5zZXRTZWxlY3RlZChvLFwidmFsdWVcIil9fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cImlkXCIpO2Zvcih2YXIgaT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtyLnBsYWNlaG9sZGVyfHwoci5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQocixlLHQpKX19fWVsc2Ugbi5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQobixlLHQpfX0sbi5wcm90b3R5cGUuc2hvdWxkQmVTZWxlY3RlZD1mdW5jdGlvbihlLHQsaSl7aWYodm9pZCAwPT09aSYmKGk9XCJpZFwiKSxBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcz0wLG49dDtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtpZihpIGluIGUmJlN0cmluZyhlW2ldKT09PVN0cmluZyhhKSlyZXR1cm4hMH1lbHNlIGlmKGkgaW4gZSYmU3RyaW5nKGVbaV0pPT09U3RyaW5nKHQpKXJldHVybiEwO3JldHVybiExfSxuLnByb3RvdHlwZS5nZXRTZWxlY3RlZD1mdW5jdGlvbigpe2Zvcih2YXIgZT17dGV4dDpcIlwiLHBsYWNlaG9sZGVyOnRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0fSx0PVtdLGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107ci5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gocik6ZT1yKX19fWVsc2Ugbi5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gobik6ZT1uKX1yZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3Q6ZX0sbi5wcm90b3R5cGUuYWRkVG9TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT1bXSxzPXRoaXMuZ2V0U2VsZWN0ZWQoKTtpZihBcnJheS5pc0FycmF5KHMpKWZvcih2YXIgbj0wLGE9cztuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtpLnB1c2gob1t0XSl9aS5wdXNoKGUpLHRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLnJlbW92ZUZyb21TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGk9W10scz0wLG49dGhpcy5nZXRTZWxlY3RlZCgpO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO1N0cmluZyhhW3RdKSE9PVN0cmluZyhlKSYmaS5wdXNoKGFbdF0pfXRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLm9uRGF0YUNoYW5nZT1mdW5jdGlvbigpe3RoaXMubWFpbi5vbkNoYW5nZSYmdGhpcy5pc09uQ2hhbmdlRW5hYmxlZCYmdGhpcy5tYWluLm9uQ2hhbmdlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRTZWxlY3RlZCgpKSkpfSxuLnByb3RvdHlwZS5nZXRPYmplY3RGcm9tRGF0YT1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PVwiaWRcIik7Zm9yKHZhciBpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYodCBpbiBuJiZTdHJpbmcoblt0XSk9PT1TdHJpbmcoZSkpcmV0dXJuIG47aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW47aWYoYS5vcHRpb25zKWZvcih2YXIgbz0wLGw9YS5vcHRpb25zO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO2lmKFN0cmluZyhyW3RdKT09PVN0cmluZyhlKSlyZXR1cm4gcn19fXJldHVybiBudWxsfSxuLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24obil7aWYoXCJcIiE9PSh0aGlzLnNlYXJjaFZhbHVlPW4pLnRyaW0oKSl7dmFyIGE9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hGaWx0ZXIsZT10aGlzLmRhdGEuc2xpY2UoMCk7bj1uLnRyaW0oKTt2YXIgdD1lLm1hcChmdW5jdGlvbihlKXtpZihlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIHQ9ZSxpPVtdO2lmKHQub3B0aW9ucyYmKGk9dC5vcHRpb25zLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gYShlLG4pfSkpLDAhPT1pLmxlbmd0aCl7dmFyIHM9T2JqZWN0LmFzc2lnbih7fSx0KTtyZXR1cm4gcy5vcHRpb25zPWksc319cmV0dXJuIGUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0XCIpJiZhKGUsbik/ZTpudWxsfSk7dGhpcy5maWx0ZXJlZD10LmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pfWVsc2UgdGhpcy5maWx0ZXJlZD1udWxsfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMuY29udGVudE9wZW49ITEsdGhpcy5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLHRoaXMuaXNPbkNoYW5nZUVuYWJsZWQ9ITAsdGhpcy5tYWluPWUubWFpbix0aGlzLnNlYXJjaFZhbHVlPVwiXCIsdGhpcy5kYXRhPVtdLHRoaXMuZmlsdGVyZWQ9bnVsbCx0aGlzLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gdm9pZCAwIT09ZS50ZXh0fHwoY29uc29sZS5lcnJvcihcIkRhdGEgb2JqZWN0IG9wdGlvbiBtdXN0IGhhdmUgYXQgbGVhc3QgaGF2ZSBhIHRleHQgdmFsdWUuIENoZWNrIG9iamVjdDogXCIrSlNPTi5zdHJpbmdpZnkoZSkpLCExKX10LkRhdGE9cyx0LnZhbGlkYXRlRGF0YT1mdW5jdGlvbihlKXtpZighZSlyZXR1cm4gY29uc29sZS5lcnJvcihcIkRhdGEgbXVzdCBiZSBhbiBhcnJheSBvZiBvYmplY3RzXCIpLCExO2Zvcih2YXIgdD0wLGk9MCxzPWU7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXtyKGxbb10pfHx0Kyt9fX1lbHNlIHIobil8fHQrK31yZXR1cm4gMD09PXR9LHQudmFsaWRhdGVPcHRpb249cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz1pKDMpLG49aSg0KSxhPWkoNSksbz1pKDEpLGw9aSgwKSxyPShjLnByb3RvdHlwZS52YWxpZGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1cInN0cmluZ1wiPT10eXBlb2YgZS5zZWxlY3Q/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnNlbGVjdCk6ZS5zZWxlY3Q7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc2VsZWN0IGVsZW1lbnRcIik7aWYoXCJTRUxFQ1RcIiE9PXQudGFnTmFtZSl0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IGlzbnQgb2YgdHlwZSBzZWxlY3RcIik7cmV0dXJuIHR9LGMucHJvdG90eXBlLnNlbGVjdGVkPWZ1bmN0aW9uKCl7aWYodGhpcy5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBlPVtdLHQ9MCxpPW49dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07ZS5wdXNoKHMudmFsdWUpfXJldHVybiBlfXZhciBuO3JldHVybihuPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKT9uLnZhbHVlOlwiXCJ9LGMucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT10JiYodD1cInZhbHVlXCIpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmIUFycmF5LmlzQXJyYXkoZSk/dGhpcy5kYXRhLmFkZFRvU2VsZWN0ZWQoZSx0KTp0aGlzLmRhdGEuc2V0U2VsZWN0ZWQoZSx0KSx0aGlzLnNlbGVjdC5zZXRWYWx1ZSgpLHRoaXMuZGF0YS5vbkRhdGFDaGFuZ2UoKSx0aGlzLnJlbmRlcigpLGkmJnRoaXMuY2xvc2UoKX0sYy5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0LGkscyl7dm9pZCAwPT09dCYmKHQ9XCJ2YWx1ZVwiKSx2b2lkIDA9PT1pJiYoaT0hMCksdm9pZCAwPT09cyYmKHM9ITApLHRoaXMuc2V0KGUsdCxpLHMpfSxjLnByb3RvdHlwZS5zZXREYXRhPWZ1bmN0aW9uKGUpe2lmKG8udmFsaWRhdGVEYXRhKGUpKXt2YXIgdD1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKSxpPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO2lmKHRoaXMuY29uZmlnLmlzQWpheCYmaSlpZih0aGlzLmNvbmZpZy5pc011bHRpcGxlKWZvcih2YXIgcz0wLG49aS5yZXZlcnNlKCk7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107dC51bnNoaWZ0KGEpfWVsc2UgdC51bnNoaWZ0KHRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKSx0LnVuc2hpZnQoe3RleHQ6XCJcIixwbGFjZWhvbGRlcjohMH0pO3RoaXMuc2VsZWN0LmNyZWF0ZSh0KSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpfWVsc2UgY29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gcHJvYmxlbSBvbjogI1wiK3RoaXMuc2VsZWN0LmVsZW1lbnQuaWQpfSxjLnByb3RvdHlwZS5hZGREYXRhPWZ1bmN0aW9uKGUpe28udmFsaWRhdGVEYXRhKFtlXSk/KHRoaXMuZGF0YS5hZGQodGhpcy5kYXRhLm5ld09wdGlvbihlKSksdGhpcy5zZWxlY3QuY3JlYXRlKHRoaXMuZGF0YS5kYXRhKSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHRoaXMucmVuZGVyKCkpOmNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIHByb2JsZW0gb246ICNcIit0aGlzLnNlbGVjdC5lbGVtZW50LmlkKX0sYy5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5jb25maWcuaXNFbmFibGVkJiYhdGhpcy5kYXRhLmNvbnRlbnRPcGVuKXtpZih0aGlzLmJlZm9yZU9wZW4mJnRoaXMuYmVmb3JlT3BlbigpLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LmFkZChcInNzLWNyb3NzXCIpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LWRvd25cIiksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctdXBcIikpLHRoaXMuc2xpbVt0aGlzLmNvbmZpZy5pc011bHRpcGxlP1wibXVsdGlTZWxlY3RlZFwiOlwic2luZ2xlU2VsZWN0ZWRcIl0uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm92ZVwiPT09dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj90aGlzLmNvbmZpZy5vcGVuQWJvdmU6dGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLmNvbmZpZy5hZGRUb0JvZHkpe3ZhciB0PXRoaXMuc2xpbS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dGhpcy5zbGltLmNvbnRlbnQuc3R5bGUudG9wPXQudG9wK3QuaGVpZ2h0K3dpbmRvdy5zY3JvbGxZK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS5sZWZ0PXQubGVmdCt3aW5kb3cuc2Nyb2xsWCtcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUud2lkdGg9dC53aWR0aCtcInB4XCJ9aWYodGhpcy5zbGltLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuKSxcInVwXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudC50b0xvd2VyQ2FzZSgpP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOlwiZG93blwiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQudG9Mb3dlckNhc2UoKT90aGlzLm1vdmVDb250ZW50QmVsb3coKTpcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodGhpcy5zbGltLmNvbnRlbnQsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbix0aGlzLmRhdGEuY29udGVudE9wZW4pP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOnRoaXMubW92ZUNvbnRlbnRCZWxvdygpLCF0aGlzLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZihpKXt2YXIgcz1pLmlkLG49dGhpcy5zbGltLmxpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCInK3MrJ1wiXScpO24mJmwuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLnNsaW0ubGlzdCxuKX19c2V0VGltZW91dChmdW5jdGlvbigpe2UuZGF0YS5jb250ZW50T3Blbj0hMCxlLmNvbmZpZy5zZWFyY2hGb2N1cyYmZS5zbGltLnNlYXJjaC5pbnB1dC5mb2N1cygpLGUuYWZ0ZXJPcGVuJiZlLmFmdGVyT3BlbigpfSx0aGlzLmNvbmZpZy50aW1lb3V0RGVsYXkpfX0sYy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuZGF0YS5jb250ZW50T3BlbiYmKHRoaXMuYmVmb3JlQ2xvc2UmJnRoaXMuYmVmb3JlQ2xvc2UoKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LnJlbW92ZShcInNzLWNyb3NzXCIpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LXVwXCIpKSx0aGlzLnNsaW0uY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW4pLHRoaXMuZGF0YS5jb250ZW50T3Blbj0hMSx0aGlzLnNlYXJjaChcIlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5zbGltLmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksZS5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsZS5jb25maWcuaXNNdWx0aXBsZSYmZS5zbGltLm11bHRpU2VsZWN0ZWQ/KGUuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkJlbG93KSk6ZS5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5CZWxvdykpLGUuc2xpbS5zZWFyY2guaW5wdXQuYmx1cigpLGUuYWZ0ZXJDbG9zZSYmZS5hZnRlckNsb3NlKCl9LHRoaXMuY29uZmlnLnRpbWVvdXREZWxheSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEFib3ZlPWZ1bmN0aW9uKCl7dmFyIGU9MDt0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD9lPXRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZT10aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLm9mZnNldEhlaWdodCk7dmFyIHQ9ZSt0aGlzLnNsaW0uY29udGVudC5vZmZzZXRIZWlnaHQtMTt0aGlzLnNsaW0uY29udGVudC5zdHlsZS5tYXJnaW49XCItXCIrdCtcInB4IDAgMCAwXCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUuaGVpZ2h0PXQtZSsxK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49XCJjZW50ZXIgYm90dG9tXCIsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImFib3ZlXCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkFib3ZlKSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5BYm92ZSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEJlbG93PWZ1bmN0aW9uKCl7dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkJlbG93KSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5CZWxvdykpfSxjLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITAsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSExLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITEsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITEsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSEwLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITAsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbih0KXtpZih0aGlzLmRhdGEuc2VhcmNoVmFsdWUhPT10KWlmKHRoaXMuc2xpbS5zZWFyY2guaW5wdXQudmFsdWU9dCx0aGlzLmNvbmZpZy5pc0FqYXgpe3ZhciBpPXRoaXM7dGhpcy5jb25maWcuaXNTZWFyY2hpbmc9ITAsdGhpcy5yZW5kZXIoKSx0aGlzLmFqYXgmJnRoaXMuYWpheCh0LGZ1bmN0aW9uKGUpe2kuY29uZmlnLmlzU2VhcmNoaW5nPSExLEFycmF5LmlzQXJyYXkoZSk/KGUudW5zaGlmdCh7dGV4dDpcIlwiLHBsYWNlaG9sZGVyOiEwfSksaS5zZXREYXRhKGUpLGkuZGF0YS5zZWFyY2godCksaS5yZW5kZXIoKSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5zbGltLm9wdGlvbnMoZSk6aS5yZW5kZXIoKX0pfWVsc2UgdGhpcy5kYXRhLnNlYXJjaCh0KSx0aGlzLnJlbmRlcigpfSxjLnByb3RvdHlwZS5zZXRTZWFyY2hUZXh0PWZ1bmN0aW9uKGUpe3RoaXMuY29uZmlnLnNlYXJjaFRleHQ9ZX0sYy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNNdWx0aXBsZT90aGlzLnNsaW0udmFsdWVzKCk6KHRoaXMuc2xpbS5wbGFjZWhvbGRlcigpLHRoaXMuc2xpbS5kZXNlbGVjdCgpKSx0aGlzLnNsaW0ub3B0aW9ucygpfSxjLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPW51bGwpO3ZhciB0PWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLW1haW5cIik6dGhpcy5zbGltLmNvbnRhaW5lcixpPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNzaWQ9XCIrZStcIl1cIik6dGhpcy5zZWxlY3QuZWxlbWVudDtpZih0JiZpJiYoaS5zdHlsZS5kaXNwbGF5PVwiXCIsZGVsZXRlIGkuZGF0YXNldC5zc2lkLGkuc2xpbT1udWxsLHQucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpLHRoaXMuY29uZmlnLmFkZFRvQm9keSkpe3ZhciBzPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLWNvbnRlbnRcIik6dGhpcy5zbGltLmNvbnRlbnQ7aWYoIXMpcmV0dXJuO2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocyl9fSxjKTtmdW5jdGlvbiBjKGUpe3ZhciB0PXRoaXM7dGhpcy5hamF4PW51bGwsdGhpcy5hZGRhYmxlPW51bGwsdGhpcy5iZWZvcmVPbkNoYW5nZT1udWxsLHRoaXMub25DaGFuZ2U9bnVsbCx0aGlzLmJlZm9yZU9wZW49bnVsbCx0aGlzLmFmdGVyT3Blbj1udWxsLHRoaXMuYmVmb3JlQ2xvc2U9bnVsbCx0aGlzLmFmdGVyQ2xvc2U9bnVsbDt2YXIgaT10aGlzLnZhbGlkYXRlKGUpO2kuZGF0YXNldC5zc2lkJiZ0aGlzLmRlc3Ryb3koaS5kYXRhc2V0LnNzaWQpLGUuYWpheCYmKHRoaXMuYWpheD1lLmFqYXgpLGUuYWRkYWJsZSYmKHRoaXMuYWRkYWJsZT1lLmFkZGFibGUpLHRoaXMuY29uZmlnPW5ldyBzLkNvbmZpZyh7c2VsZWN0OmksaXNBamF4OiEhZS5hamF4LHNob3dTZWFyY2g6ZS5zaG93U2VhcmNoLHNlYXJjaFBsYWNlaG9sZGVyOmUuc2VhcmNoUGxhY2Vob2xkZXIsc2VhcmNoVGV4dDplLnNlYXJjaFRleHQsc2VhcmNoaW5nVGV4dDplLnNlYXJjaGluZ1RleHQsc2VhcmNoRm9jdXM6ZS5zZWFyY2hGb2N1cyxzZWFyY2hIaWdobGlnaHQ6ZS5zZWFyY2hIaWdobGlnaHQsc2VhcmNoRmlsdGVyOmUuc2VhcmNoRmlsdGVyLGNsb3NlT25TZWxlY3Q6ZS5jbG9zZU9uU2VsZWN0LHNob3dDb250ZW50OmUuc2hvd0NvbnRlbnQscGxhY2Vob2xkZXJUZXh0OmUucGxhY2Vob2xkZXIsYWxsb3dEZXNlbGVjdDplLmFsbG93RGVzZWxlY3QsYWxsb3dEZXNlbGVjdE9wdGlvbjplLmFsbG93RGVzZWxlY3RPcHRpb24saGlkZVNlbGVjdGVkT3B0aW9uOmUuaGlkZVNlbGVjdGVkT3B0aW9uLGRlc2VsZWN0TGFiZWw6ZS5kZXNlbGVjdExhYmVsLGlzRW5hYmxlZDplLmlzRW5hYmxlZCx2YWx1ZXNVc2VUZXh0OmUudmFsdWVzVXNlVGV4dCxzaG93T3B0aW9uVG9vbHRpcHM6ZS5zaG93T3B0aW9uVG9vbHRpcHMsc2VsZWN0QnlHcm91cDplLnNlbGVjdEJ5R3JvdXAsbGltaXQ6ZS5saW1pdCx0aW1lb3V0RGVsYXk6ZS50aW1lb3V0RGVsYXksYWRkVG9Cb2R5OmUuYWRkVG9Cb2R5fSksdGhpcy5zZWxlY3Q9bmV3IG4uU2VsZWN0KHtzZWxlY3Q6aSxtYWluOnRoaXN9KSx0aGlzLmRhdGE9bmV3IG8uRGF0YSh7bWFpbjp0aGlzfSksdGhpcy5zbGltPW5ldyBhLlNsaW0oe21haW46dGhpc30pLHRoaXMuc2VsZWN0LmVsZW1lbnQucGFyZW50Tm9kZSYmdGhpcy5zZWxlY3QuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnNsaW0uY29udGFpbmVyLHRoaXMuc2VsZWN0LmVsZW1lbnQubmV4dFNpYmxpbmcpLGUuZGF0YT90aGlzLnNldERhdGEoZS5kYXRhKTp0aGlzLnJlbmRlcigpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UudGFyZ2V0JiYhbC5oYXNDbGFzc0luVHJlZShlLnRhcmdldCx0LmNvbmZpZy5pZCkmJnQuY2xvc2UoKX0pLFwiYXV0b1wiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbC5kZWJvdW5jZShmdW5jdGlvbihlKXt0LmRhdGEuY29udGVudE9wZW4mJihcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodC5zbGltLmNvbnRlbnQsdC5kYXRhLmNvbnRlbnRQb3NpdGlvbix0LmRhdGEuY29udGVudE9wZW4pP3QubW92ZUNvbnRlbnRBYm92ZSgpOnQubW92ZUNvbnRlbnRCZWxvdygpKX0pLCExKSxlLmJlZm9yZU9uQ2hhbmdlJiYodGhpcy5iZWZvcmVPbkNoYW5nZT1lLmJlZm9yZU9uQ2hhbmdlKSxlLm9uQ2hhbmdlJiYodGhpcy5vbkNoYW5nZT1lLm9uQ2hhbmdlKSxlLmJlZm9yZU9wZW4mJih0aGlzLmJlZm9yZU9wZW49ZS5iZWZvcmVPcGVuKSxlLmFmdGVyT3BlbiYmKHRoaXMuYWZ0ZXJPcGVuPWUuYWZ0ZXJPcGVuKSxlLmJlZm9yZUNsb3NlJiYodGhpcy5iZWZvcmVDbG9zZT1lLmJlZm9yZUNsb3NlKSxlLmFmdGVyQ2xvc2UmJih0aGlzLmFmdGVyQ2xvc2U9ZS5hZnRlckNsb3NlKSx0aGlzLmNvbmZpZy5pc0VuYWJsZWR8fHRoaXMuZGlzYWJsZSgpfXQuZGVmYXVsdD1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZWFyY2hGaWx0ZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4tMSE9PWUudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodC50b0xvd2VyQ2FzZSgpKX0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLmlkPVwiXCIsdGhpcy5pc011bHRpcGxlPSExLHRoaXMuaXNBamF4PSExLHRoaXMuaXNTZWFyY2hpbmc9ITEsdGhpcy5zaG93U2VhcmNoPSEwLHRoaXMuc2VhcmNoRm9jdXM9ITAsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITEsdGhpcy5jbG9zZU9uU2VsZWN0PSEwLHRoaXMuc2hvd0NvbnRlbnQ9XCJhdXRvXCIsdGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1cIlNlYXJjaFwiLHRoaXMuc2VhcmNoVGV4dD1cIk5vIFJlc3VsdHNcIix0aGlzLnNlYXJjaGluZ1RleHQ9XCJTZWFyY2hpbmcuLi5cIix0aGlzLnBsYWNlaG9sZGVyVGV4dD1cIlNlbGVjdCBWYWx1ZVwiLHRoaXMuYWxsb3dEZXNlbGVjdD0hMSx0aGlzLmFsbG93RGVzZWxlY3RPcHRpb249ITEsdGhpcy5oaWRlU2VsZWN0ZWRPcHRpb249ITEsdGhpcy5kZXNlbGVjdExhYmVsPVwieFwiLHRoaXMuaXNFbmFibGVkPSEwLHRoaXMudmFsdWVzVXNlVGV4dD0hMSx0aGlzLnNob3dPcHRpb25Ub29sdGlwcz0hMSx0aGlzLnNlbGVjdEJ5R3JvdXA9ITEsdGhpcy5saW1pdD0wLHRoaXMudGltZW91dERlbGF5PTIwMCx0aGlzLmFkZFRvQm9keT0hMSx0aGlzLm1haW49XCJzcy1tYWluXCIsdGhpcy5zaW5nbGVTZWxlY3RlZD1cInNzLXNpbmdsZS1zZWxlY3RlZFwiLHRoaXMuYXJyb3c9XCJzcy1hcnJvd1wiLHRoaXMubXVsdGlTZWxlY3RlZD1cInNzLW11bHRpLXNlbGVjdGVkXCIsdGhpcy5hZGQ9XCJzcy1hZGRcIix0aGlzLnBsdXM9XCJzcy1wbHVzXCIsdGhpcy52YWx1ZXM9XCJzcy12YWx1ZXNcIix0aGlzLnZhbHVlPVwic3MtdmFsdWVcIix0aGlzLnZhbHVlVGV4dD1cInNzLXZhbHVlLXRleHRcIix0aGlzLnZhbHVlRGVsZXRlPVwic3MtdmFsdWUtZGVsZXRlXCIsdGhpcy5jb250ZW50PVwic3MtY29udGVudFwiLHRoaXMub3Blbj1cInNzLW9wZW5cIix0aGlzLm9wZW5BYm92ZT1cInNzLW9wZW4tYWJvdmVcIix0aGlzLm9wZW5CZWxvdz1cInNzLW9wZW4tYmVsb3dcIix0aGlzLnNlYXJjaD1cInNzLXNlYXJjaFwiLHRoaXMuc2VhcmNoSGlnaGxpZ2h0ZXI9XCJzcy1zZWFyY2gtaGlnaGxpZ2h0XCIsdGhpcy5hZGRhYmxlPVwic3MtYWRkYWJsZVwiLHRoaXMubGlzdD1cInNzLWxpc3RcIix0aGlzLm9wdGdyb3VwPVwic3Mtb3B0Z3JvdXBcIix0aGlzLm9wdGdyb3VwTGFiZWw9XCJzcy1vcHRncm91cC1sYWJlbFwiLHRoaXMub3B0Z3JvdXBMYWJlbFNlbGVjdGFibGU9XCJzcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlXCIsdGhpcy5vcHRpb249XCJzcy1vcHRpb25cIix0aGlzLm9wdGlvblNlbGVjdGVkPVwic3Mtb3B0aW9uLXNlbGVjdGVkXCIsdGhpcy5oaWdobGlnaHRlZD1cInNzLWhpZ2hsaWdodGVkXCIsdGhpcy5kaXNhYmxlZD1cInNzLWRpc2FibGVkXCIsdGhpcy5oaWRlPVwic3MtaGlkZVwiLHRoaXMuaWQ9XCJzcy1cIitNYXRoLmZsb29yKDFlNSpNYXRoLnJhbmRvbSgpKSx0aGlzLnN0eWxlPWUuc2VsZWN0LnN0eWxlLmNzc1RleHQsdGhpcy5jbGFzcz1lLnNlbGVjdC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLHRoaXMuaXNNdWx0aXBsZT1lLnNlbGVjdC5tdWx0aXBsZSx0aGlzLmlzQWpheD1lLmlzQWpheCx0aGlzLnNob3dTZWFyY2g9ITEhPT1lLnNob3dTZWFyY2gsdGhpcy5zZWFyY2hGb2N1cz0hMSE9PWUuc2VhcmNoRm9jdXMsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITA9PT1lLnNlYXJjaEhpZ2hsaWdodCx0aGlzLmNsb3NlT25TZWxlY3Q9ITEhPT1lLmNsb3NlT25TZWxlY3QsZS5zaG93Q29udGVudCYmKHRoaXMuc2hvd0NvbnRlbnQ9ZS5zaG93Q29udGVudCksdGhpcy5pc0VuYWJsZWQ9ITEhPT1lLmlzRW5hYmxlZCxlLnNlYXJjaFBsYWNlaG9sZGVyJiYodGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1lLnNlYXJjaFBsYWNlaG9sZGVyKSxlLnNlYXJjaFRleHQmJih0aGlzLnNlYXJjaFRleHQ9ZS5zZWFyY2hUZXh0KSxlLnNlYXJjaGluZ1RleHQmJih0aGlzLnNlYXJjaGluZ1RleHQ9ZS5zZWFyY2hpbmdUZXh0KSxlLnBsYWNlaG9sZGVyVGV4dCYmKHRoaXMucGxhY2Vob2xkZXJUZXh0PWUucGxhY2Vob2xkZXJUZXh0KSx0aGlzLmFsbG93RGVzZWxlY3Q9ITA9PT1lLmFsbG93RGVzZWxlY3QsdGhpcy5hbGxvd0Rlc2VsZWN0T3B0aW9uPSEwPT09ZS5hbGxvd0Rlc2VsZWN0T3B0aW9uLHRoaXMuaGlkZVNlbGVjdGVkT3B0aW9uPSEwPT09ZS5oaWRlU2VsZWN0ZWRPcHRpb24sZS5kZXNlbGVjdExhYmVsJiYodGhpcy5kZXNlbGVjdExhYmVsPWUuZGVzZWxlY3RMYWJlbCksZS52YWx1ZXNVc2VUZXh0JiYodGhpcy52YWx1ZXNVc2VUZXh0PWUudmFsdWVzVXNlVGV4dCksZS5zaG93T3B0aW9uVG9vbHRpcHMmJih0aGlzLnNob3dPcHRpb25Ub29sdGlwcz1lLnNob3dPcHRpb25Ub29sdGlwcyksZS5zZWxlY3RCeUdyb3VwJiYodGhpcy5zZWxlY3RCeUdyb3VwPWUuc2VsZWN0QnlHcm91cCksZS5saW1pdCYmKHRoaXMubGltaXQ9ZS5saW1pdCksZS5zZWFyY2hGaWx0ZXImJih0aGlzLnNlYXJjaEZpbHRlcj1lLnNlYXJjaEZpbHRlciksbnVsbCE9ZS50aW1lb3V0RGVsYXkmJih0aGlzLnRpbWVvdXREZWxheT1lLnRpbWVvdXREZWxheSksdGhpcy5hZGRUb0JvZHk9ITA9PT1lLmFkZFRvQm9keX10LkNvbmZpZz1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbigpe2lmKHRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkpe2lmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSlmb3IodmFyIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSx0PTAsaT10aGlzLmVsZW1lbnQub3B0aW9uczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtzLnNlbGVjdGVkPSExO2Zvcih2YXIgbj0wLGE9ZTtuPGEubGVuZ3RoO24rKylhW25dLnZhbHVlPT09cy52YWx1ZSYmKHMuc2VsZWN0ZWQ9ITApfWVsc2UgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHRoaXMuZWxlbWVudC52YWx1ZT1lP2UudmFsdWU6XCJcIjt0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMSx0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSx0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMH19LG4ucHJvdG90eXBlLmFkZEF0dHJpYnV0ZXM9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQudGFiSW5kZXg9LTEsdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5lbGVtZW50LmRhdGFzZXQuc3NpZD10aGlzLm1haW4uY29uZmlnLmlkfSxuLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0Lm1haW4ucmVuZGVyKCl9KX0sbi5wcm90b3R5cGUuYWRkTXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5tYWluLmNvbmZpZy5pc0FqYXh8fCh0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7dC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlciYmKHQubWFpbi5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHQubWFpbi5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHQubWFpbi5yZW5kZXIoKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7XCJjbGFzc1wiPT09ZS5hdHRyaWJ1dGVOYW1lJiZ0Lm1haW4uc2xpbS51cGRhdGVDb250YWluZXJEaXZDbGFzcyh0Lm1haW4uc2xpbS5jb250YWluZXIpfSkpfSksdGhpcy5vYnNlcnZlTXV0YXRpb25PYnNlcnZlcigpKX0sbi5wcm90b3R5cGUub2JzZXJ2ZU11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt0aGlzLm11dGF0aW9uT2JzZXJ2ZXImJnRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCx7YXR0cmlidXRlczohMCxjaGlsZExpc3Q6ITAsY2hhcmFjdGVyRGF0YTohMH0pfSxuLnByb3RvdHlwZS5kaXNjb25uZWN0TXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3RoaXMubXV0YXRpb25PYnNlcnZlciYmdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKX0sbi5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5pbm5lckhUTUw9XCJcIjtmb3IodmFyIHQ9MCxpPWU7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBuPXMsYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7aWYoYS5sYWJlbD1uLmxhYmVsLG4ub3B0aW9ucylmb3IodmFyIG89MCxsPW4ub3B0aW9ucztvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTthLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlT3B0aW9uKHIpKX10aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYSl9ZWxzZSB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPcHRpb24ocykpfX0sbi5wcm90b3R5cGUuY3JlYXRlT3B0aW9uPWZ1bmN0aW9uKHQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7cmV0dXJuIGkudmFsdWU9dC52YWx1ZXx8dC50ZXh0LGkuaW5uZXJIVE1MPXQuaW5uZXJIVE1MfHx0LnRleHQsdC5zZWxlY3RlZCYmKGkuc2VsZWN0ZWQ9dC5zZWxlY3RlZCksdC5kaXNhYmxlZCYmKGkuZGlzYWJsZWQ9ITApLHQucGxhY2Vob2xkZXImJmkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiLFwidHJ1ZVwiKSx0LmNsYXNzJiZ0LmNsYXNzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuY2xhc3NMaXN0LmFkZChlKX0pLHQuZGF0YSYmXCJvYmplY3RcIj09dHlwZW9mIHQuZGF0YSYmT2JqZWN0LmtleXModC5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuc2V0QXR0cmlidXRlKFwiZGF0YS1cIitlLHQuZGF0YVtlXSl9KSxpfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITAsdGhpcy5lbGVtZW50PWUuc2VsZWN0LHRoaXMubWFpbj1lLm1haW4sdGhpcy5lbGVtZW50LmRpc2FibGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc0VuYWJsZWQ9ITEpLHRoaXMuYWRkQXR0cmlidXRlcygpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bnVsbCx0aGlzLmFkZE11dGF0aW9uT2JzZXJ2ZXIoKSx0aGlzLmVsZW1lbnQuc2xpbT1lLm1haW59dC5TZWxlY3Q9c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgYT1pKDApLG89aSgxKSxzPShuLnByb3RvdHlwZS5jb250YWluZXJEaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLnN0eWxlLmNzc1RleHQ9dGhpcy5tYWluLmNvbmZpZy5zdHlsZSx0aGlzLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzKGUpLGV9LG4ucHJvdG90eXBlLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzPWZ1bmN0aW9uKGUpe3RoaXMubWFpbi5jb25maWcuY2xhc3M9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIiksZS5jbGFzc05hbWU9XCJcIixlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5pZCksZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubWFpbik7Zm9yKHZhciB0PTAsaT10aGlzLm1haW4uY29uZmlnLmNsYXNzO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO1wiXCIhPT1zLnRyaW0oKSYmZS5jbGFzc0xpc3QuYWRkKHMpfX0sbi5wcm90b3R5cGUuc2luZ2xlU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zaW5nbGVTZWxlY3RlZCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7aS5jbGFzc0xpc3QuYWRkKFwicGxhY2Vob2xkZXJcIiksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLmRlc2VsZWN0TGFiZWwscy5jbGFzc0xpc3QuYWRkKFwic3MtZGVzZWxlY3RcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJnQubWFpbi5zZXQoXCJcIil9LGUuYXBwZW5kQ2hpbGQocyk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYXJyb3cpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBhLmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLG4uYXBwZW5kQ2hpbGQoYSksZS5hcHBlbmRDaGlsZChuKSxlLm9uY2xpY2s9ZnVuY3Rpb24oKXt0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmKHQubWFpbi5kYXRhLmNvbnRlbnRPcGVuP3QubWFpbi5jbG9zZSgpOnQubWFpbi5vcGVuKCkpfSx7Y29udGFpbmVyOmUscGxhY2Vob2xkZXI6aSxkZXNlbGVjdDpzLGFycm93SWNvbjp7Y29udGFpbmVyOm4sYXJyb3c6YX19fSxuLnByb3RvdHlwZS5wbGFjZWhvbGRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCk7aWYobnVsbD09PWV8fGUmJmUucGxhY2Vob2xkZXIpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dCx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9dC5vdXRlckhUTUwpfWVsc2V7dmFyIGk9XCJcIjtlJiYoaT1lLmlubmVySFRNTCYmITAhPT10aGlzLm1haW4uY29uZmlnLnZhbHVlc1VzZVRleHQ/ZS5pbm5lckhUTUw6ZS50ZXh0KSx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9ZT9pOlwiXCIpfX0sbi5wcm90b3R5cGUuZGVzZWxlY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLnNpbmdsZVNlbGVjdGVkKXtpZighdGhpcy5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0KXJldHVybiB2b2lkIHRoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik7XCJcIj09PXRoaXMubWFpbi5zZWxlY3RlZCgpP3RoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik6dGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic3MtaGlkZVwiKX19LG4ucHJvdG90eXBlLm11bHRpU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5tdWx0aVNlbGVjdGVkKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlcyksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZCk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIG4uY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnBsdXMpLG4ub25jbGljaz1mdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5jb250ZW50T3BlbiYmKHQubWFpbi5jbG9zZSgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpfSxzLmFwcGVuZENoaWxkKG4pLGUuYXBwZW5kQ2hpbGQocyksZS5vbmNsaWNrPWZ1bmN0aW9uKGUpe3QubWFpbi5jb25maWcuaXNFbmFibGVkJiYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHQubWFpbi5jb25maWcudmFsdWVEZWxldGUpfHwodC5tYWluLmRhdGEuY29udGVudE9wZW4/dC5tYWluLmNsb3NlKCk6dC5tYWluLm9wZW4oKSkpfSx7Y29udGFpbmVyOmUsdmFsdWVzOmksYWRkOnMscGx1czpufX0sbi5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7aWYodGhpcy5tdWx0aVNlbGVjdGVkKXtmb3IodmFyIGUsdD10aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmNoaWxkTm9kZXMsaT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHM9W10sbj0wLGE9dDtuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtlPSEwO2Zvcih2YXIgbD0wLHI9aTtsPHIubGVuZ3RoO2wrKyl7dmFyIGM9cltsXTtTdHJpbmcoYy5pZCk9PT1TdHJpbmcoby5kYXRhc2V0LmlkKSYmKGU9ITEpfWUmJnMucHVzaChvKX1mb3IodmFyIGQ9MCxoPXM7ZDxoLmxlbmd0aDtkKyspe3ZhciB1PWhbZF07dS5jbGFzc0xpc3QuYWRkKFwic3Mtb3V0XCIpLHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMucmVtb3ZlQ2hpbGQodSl9Zm9yKHQ9dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5jaGlsZE5vZGVzLGM9MDtjPGkubGVuZ3RoO2MrKyl7ZT0hMTtmb3IodmFyIHA9MCxtPXQ7cDxtLmxlbmd0aDtwKyspbz1tW3BdLFN0cmluZyhpW2NdLmlkKT09PVN0cmluZyhvLmRhdGFzZXQuaWQpJiYoZT0hMCk7ZXx8KDAhPT10Lmxlbmd0aCYmSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudD8wPT09Yz90aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmluc2VydEJlZm9yZSh0aGlzLnZhbHVlRGl2KGlbY10pLHRbY10pOnRbYy0xXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLHRoaXMudmFsdWVEaXYoaVtjXSkpOnRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuYXBwZW5kQ2hpbGQodGhpcy52YWx1ZURpdihpW2NdKSkpfWlmKDA9PT1pLmxlbmd0aCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Zi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLGYuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0LHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuaW5uZXJIVE1MPWYub3V0ZXJIVE1MfX19LG4ucHJvdG90eXBlLnZhbHVlRGl2PWZ1bmN0aW9uKGEpe3ZhciBvPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlKSxlLmRhdGFzZXQuaWQ9YS5pZDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZVRleHQpLHQuaW5uZXJIVE1MPWEuaW5uZXJIVE1MJiYhMCE9PXRoaXMubWFpbi5jb25maWcudmFsdWVzVXNlVGV4dD9hLmlubmVySFRNTDphLnRleHQsZS5hcHBlbmRDaGlsZCh0KTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gaS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVEZWxldGUpLGkuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuZGVzZWxlY3RMYWJlbCxpLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ITE7aWYoby5tYWluLmNvbmZpZy5pc0VuYWJsZWQpe2lmKG8ubWFpbi5iZWZvcmVPbkNoYW5nZXx8KHQ9ITApLG8ubWFpbi5iZWZvcmVPbkNoYW5nZSl7Zm9yKHZhciBpPW8ubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkscz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkpKSxuPTA7bjxzLmxlbmd0aDtuKyspc1tuXS5pZD09PWEuaWQmJnMuc3BsaWNlKG4sMSk7ITEhPT1vLm1haW4uYmVmb3JlT25DaGFuZ2UocykmJih0PSEwKX10JiYoby5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKGEuaWQsXCJpZFwiKSxvLm1haW4ucmVuZGVyKCksby5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLG8ubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKX19LGUuYXBwZW5kQ2hpbGQoaSksZX0sbi5wcm90b3R5cGUuY29udGVudERpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmNvbnRlbnQpLGV9LG4ucHJvdG90eXBlLnNlYXJjaERpdj1mdW5jdGlvbigpe3ZhciBuPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zZWFyY2gpO3ZhciB0PXtjb250YWluZXI6ZSxpbnB1dDpzfTtyZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5zaG93U2VhcmNofHwoZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkscy5yZWFkT25seT0hMCkscy50eXBlPVwic2VhcmNoXCIscy5wbGFjZWhvbGRlcj10aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyLHMudGFiSW5kZXg9MCxzLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jYXBpdGFsaXplXCIsXCJvZmZcIikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsXCJvZmZcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcIlwiPT09ZS50YXJnZXQudmFsdWUmJm4ubWFpbi5zZWFyY2goXCJcIil9LDEwKX0scy5vbmtleWRvd249ZnVuY3Rpb24oZSl7XCJBcnJvd1VwXCI9PT1lLmtleT8obi5tYWluLm9wZW4oKSxuLmhpZ2hsaWdodFVwKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIkFycm93RG93blwiPT09ZS5rZXk/KG4ubWFpbi5vcGVuKCksbi5oaWdobGlnaHREb3duKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIlRhYlwiPT09ZS5rZXk/bi5tYWluLmRhdGEuY29udGVudE9wZW4/bi5tYWluLmNsb3NlKCk6c2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSxuLm1haW4uY29uZmlnLnRpbWVvdXREZWxheSk6XCJFbnRlclwiPT09ZS5rZXkmJmUucHJldmVudERlZmF1bHQoKX0scy5vbmtleXVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O2lmKFwiRW50ZXJcIj09PWUua2V5KXtpZihuLm1haW4uYWRkYWJsZSYmZS5jdHJsS2V5KXJldHVybiBhLmNsaWNrKCksZS5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgaT1uLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIituLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKTtpJiZpLmNsaWNrKCl9ZWxzZVwiQXJyb3dVcFwiPT09ZS5rZXl8fFwiQXJyb3dEb3duXCI9PT1lLmtleXx8KFwiRXNjYXBlXCI9PT1lLmtleT9uLm1haW4uY2xvc2UoKTpuLm1haW4uY29uZmlnLnNob3dTZWFyY2gmJm4ubWFpbi5kYXRhLmNvbnRlbnRPcGVuP24ubWFpbi5zZWFyY2godC52YWx1ZSk6cy52YWx1ZT1cIlwiKTtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKX0scy5vbmZvY3VzPWZ1bmN0aW9uKCl7bi5tYWluLm9wZW4oKX0sZS5hcHBlbmRDaGlsZChzKSx0aGlzLm1haW4uYWRkYWJsZSYmKGEuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZGFibGUpLGEuaW5uZXJIVE1MPVwiK1wiLGEub25jbGljaz1mdW5jdGlvbihlKXtpZihuLm1haW4uYWRkYWJsZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9bi5zZWFyY2guaW5wdXQudmFsdWU7aWYoXCJcIj09PXQudHJpbSgpKXJldHVybiB2b2lkIG4uc2VhcmNoLmlucHV0LmZvY3VzKCk7dmFyIGk9bi5tYWluLmFkZGFibGUodCkscz1cIlwiO2lmKCFpKXJldHVybjtcIm9iamVjdFwiPT10eXBlb2YgaT9vLnZhbGlkYXRlT3B0aW9uKGkpJiYobi5tYWluLmFkZERhdGEoaSkscz1pLnZhbHVlP2kudmFsdWU6aS50ZXh0KToobi5tYWluLmFkZERhdGEobi5tYWluLmRhdGEubmV3T3B0aW9uKHt0ZXh0OmksdmFsdWU6aX0pKSxzPWkpLG4ubWFpbi5zZWFyY2goXCJcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5zZXQocyxcInZhbHVlXCIsITEsITEpfSwxMDApLG4ubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCYmc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSwxMDApfX0sZS5hcHBlbmRDaGlsZChhKSx0LmFkZGFibGU9YSksdH0sbi5wcm90b3R5cGUuaGlnaGxpZ2h0VXA9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLnByZXZpb3VzU2libGluZztudWxsIT09dCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCk7KXQ9dC5wcmV2aW91c1NpYmxpbmc7ZWxzZXt2YXIgaT10aGlzLmxpc3QucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO3Q9aVtpLmxlbmd0aC0xXX1pZih0JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWwpJiYodD1udWxsKSxudWxsPT09dCl7dmFyIHM9ZS5wYXJlbnROb2RlO2lmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZzLnByZXZpb3VzU2libGluZyl7dmFyIG49cy5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO24ubGVuZ3RoJiYodD1uW24ubGVuZ3RoLTFdKX19dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmhpZ2hsaWdodERvd249ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLm5leHRTaWJsaW5nO251bGwhPT10JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKTspdD10Lm5leHRTaWJsaW5nO2Vsc2UgdD10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO2lmKG51bGw9PT10JiZudWxsIT09ZSl7dmFyIGk9ZS5wYXJlbnROb2RlO2kuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZpLm5leHRTaWJsaW5nJiYodD1pLm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKSl9dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmxpc3REaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5saXN0KSxlfSxuLnByb3RvdHlwZS5vcHRpb25zPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPVwiXCIpO3ZhciB0LGk9dGhpcy5tYWluLmRhdGEuZmlsdGVyZWR8fHRoaXMubWFpbi5kYXRhLmRhdGE7aWYoKHRoaXMubGlzdC5pbm5lckhUTUw9XCJcIikhPT1lKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD1lLHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHQpO2lmKHRoaXMubWFpbi5jb25maWcuaXNBamF4JiZ0aGlzLm1haW4uY29uZmlnLmlzU2VhcmNoaW5nKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaGluZ1RleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQodCk7aWYoMD09PWkubGVuZ3RoKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHMuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaFRleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQocyl9Zm9yKHZhciBuPWZ1bmN0aW9uKGUpe2lmKGUuaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7dmFyIHQ9ZSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXApO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbCksYy5tYWluLmNvbmZpZy5zZWxlY3RCeUdyb3VwJiZjLm1haW4uY29uZmlnLmlzTXVsdGlwbGUmJmkuY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWxTZWxlY3RhYmxlKSxpLmlubmVySFRNTD10LmxhYmVsLG4uYXBwZW5kQ2hpbGQoaSk7dmFyIHM9dC5vcHRpb25zO2lmKHMpe2Zvcih2YXIgYT0wLG89czthPG8ubGVuZ3RoO2ErKyl7dmFyIGw9b1thXTtuLmFwcGVuZENoaWxkKGMub3B0aW9uKGwpKX1pZihjLm1haW4uY29uZmlnLnNlbGVjdEJ5R3JvdXAmJmMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7dmFyIHI9YztpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO2Zvcih2YXIgdD0wLGk9bi5jaGlsZHJlbjt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTstMSE9PXMuY2xhc3NOYW1lLmluZGV4T2Yoci5tYWluLmNvbmZpZy5vcHRpb24pJiZzLmNsaWNrKCl9fSl9fWMubGlzdC5hcHBlbmRDaGlsZChuKX1lbHNlIGMubGlzdC5hcHBlbmRDaGlsZChjLm9wdGlvbihlKSl9LGM9dGhpcyxhPTAsbz1pO2E8by5sZW5ndGg7YSsrKW4ob1thXSl9LG4ucHJvdG90eXBlLm9wdGlvbj1mdW5jdGlvbihyKXtpZihyLnBsYWNlaG9sZGVyKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpLGV9dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHIuY2xhc3MmJnIuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5jbGFzc0xpc3QuYWRkKGUpfSksci5zdHlsZSYmKHQuc3R5bGUuY3NzVGV4dD1yLnN0eWxlKTt2YXIgYz10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpO3QuZGF0YXNldC5pZD1yLmlkLHRoaXMubWFpbi5jb25maWcuc2VhcmNoSGlnaGxpZ2h0JiZ0aGlzLm1haW4uc2xpbSYmci5pbm5lckhUTUwmJlwiXCIhPT10aGlzLm1haW4uc2xpbS5zZWFyY2guaW5wdXQudmFsdWUudHJpbSgpP3QuaW5uZXJIVE1MPWEuaGlnaGxpZ2h0KHIuaW5uZXJIVE1MLHRoaXMubWFpbi5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZSx0aGlzLm1haW4uY29uZmlnLnNlYXJjaEhpZ2hsaWdodGVyKTpyLmlubmVySFRNTCYmKHQuaW5uZXJIVE1MPXIuaW5uZXJIVE1MKSx0aGlzLm1haW4uY29uZmlnLnNob3dPcHRpb25Ub29sdGlwcyYmdC50ZXh0Q29udGVudCYmdC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHQudGV4dENvbnRlbnQpO3ZhciBkPXRoaXM7dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD10aGlzLmRhdGFzZXQuaWQ7aWYoITA9PT1yLnNlbGVjdGVkJiZkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb24pe3ZhciBpPSExO2lmKGQubWFpbi5iZWZvcmVPbkNoYW5nZSYmZC5tYWluLmNvbmZpZy5pc011bHRpcGxlfHwoaT0hMCksZC5tYWluLmJlZm9yZU9uQ2hhbmdlJiZkLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgcz1kLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLG49SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzKSksYT0wO2E8bi5sZW5ndGg7YSsrKW5bYV0uaWQ9PT10JiZuLnNwbGljZShhLDEpOyExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG4pJiYoaT0hMCl9aSYmKGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8oZC5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKHQsXCJpZFwiKSxkLm1haW4ucmVuZGVyKCksZC5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLGQubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKTpkLm1haW4uc2V0KFwiXCIpKX1lbHNle2lmKHIuZGlzYWJsZWR8fHIuc2VsZWN0ZWQpcmV0dXJuO2lmKGQubWFpbi5jb25maWcubGltaXQmJkFycmF5LmlzQXJyYXkoYykmJmQubWFpbi5jb25maWcubGltaXQ8PWMubGVuZ3RoKXJldHVybjtpZihkLm1haW4uYmVmb3JlT25DaGFuZ2Upe3ZhciBvPXZvaWQgMCxsPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZC5tYWluLmRhdGEuZ2V0T2JqZWN0RnJvbURhdGEodCkpKTtsLnNlbGVjdGVkPSEwLGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8obz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGMpKSkucHVzaChsKTpvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobCkpLCExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG8pJiZkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9ZWxzZSBkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9fSk7dmFyIGk9YyYmYS5pc1ZhbHVlSW5BcnJheU9mT2JqZWN0cyhjLFwiaWRcIixyLmlkKTtyZXR1cm4oci5kaXNhYmxlZHx8aSkmJih0Lm9uY2xpY2s9bnVsbCxkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb258fHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxkLm1haW4uY29uZmlnLmhpZGVTZWxlY3RlZE9wdGlvbiYmdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkpLGk/dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uU2VsZWN0ZWQpOnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLm9wdGlvblNlbGVjdGVkKSx0fSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMubWFpbj1lLm1haW4sdGhpcy5jb250YWluZXI9dGhpcy5jb250YWluZXJEaXYoKSx0aGlzLmNvbnRlbnQ9dGhpcy5jb250ZW50RGl2KCksdGhpcy5zZWFyY2g9dGhpcy5zZWFyY2hEaXYoKSx0aGlzLmxpc3Q9dGhpcy5saXN0RGl2KCksdGhpcy5vcHRpb25zKCksdGhpcy5zaW5nbGVTZWxlY3RlZD1udWxsLHRoaXMubXVsdGlTZWxlY3RlZD1udWxsLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT8odGhpcy5tdWx0aVNlbGVjdGVkPXRoaXMubXVsdGlTZWxlY3RlZERpdigpLHRoaXMubXVsdGlTZWxlY3RlZCYmdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lcikpOih0aGlzLnNpbmdsZVNlbGVjdGVkPXRoaXMuc2luZ2xlU2VsZWN0ZWREaXYoKSx0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lcikpLHRoaXMubWFpbi5jb25maWcuYWRkVG9Cb2R5Pyh0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmlkKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCkpOnRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuc2VhcmNoLmNvbnRhaW5lciksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMubGlzdCl9dC5TbGltPXN9XSxuLmM9cyxuLmQ9ZnVuY3Rpb24oZSx0LGkpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDppfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIoaSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBzIGluIHQpbi5kKGkscyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHMpKTtyZXR1cm4gaX0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTIpKS5kZWZhdWx0O2Z1bmN0aW9uIG4oZSl7aWYoc1tlXSlyZXR1cm4gc1tlXS5leHBvcnRzO3ZhciB0PXNbZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiBpW2VdLmNhbGwodC5leHBvcnRzLHQsdC5leHBvcnRzLG4pLHQubD0hMCx0LmV4cG9ydHN9dmFyIGksc30pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2VcIjtcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSBcIi4vTGFuZ3VhZ2VcIjtcblxuLyoqXG4gKiBBIGdlbmVyaWMgY29tcG9uZW50IG9mIFN0YWRpYStcbiAqXG4gKiBAZXhwb3J0IHRoZSBDb21wb25lbnQgdHlwZS5cbiAqIEBjbGFzcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIENvbXBvbmVudCdzIG5hbWUuXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nID0gJ015IENvbXBvbmVudCc7XG4gICAgdGFnOiBzdHJpbmcgPSBcImNvbXBvbmVudFwiO1xuXG4gICAgLyoqXG4gICAgICogVGhlIENvbXBvbmVudCdzIHVuaXF1ZSBJRCwgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgb24gbG9hZC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBib29sZWFuIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCByZWNlaXZlIGV2ZW50cyBvciBub3QuXG4gICAgICovXG4gICAgYWN0aXZlOiBib29sZWFuO1xuXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcblxuICAgIHJlbmRlcmVyOiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuZXZlciB0aGUgY29tcG9uZW50IHNob3VsZCBzdGFydCBsb2FkaW5nLlxuICAgICAqL1xuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubmFtZSA9IExhbmd1YWdlLmdldCh0aGlzLnRhZyArICcubmFtZScpO1xuICAgICAgICB0aGlzLmlkID0gJ3N0YWRpYXBsdXNfJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUmVuZGVyZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saHNFNGU+Yy13aXonKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IChBcnJheSBhcyBhbnkpLmZyb20ocmVuZGVyZXJzKS5maW5kKChyZW5kZXJlcjogSFRNTEVsZW1lbnQpID0+IHJlbmRlcmVyLnN0eWxlLm9wYWNpdHkgIT09ICcwJyk7XG4gICAgfVxuXG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgQ29tcG9uZW50IGhhcyBhbiBlbGVtZW50IGluIHRoZSBET01cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5yZW5kZXJlci5zdHlsZS5vcGFjaXR5ID09PSAnMCcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgdW5sb2FkaW5nLlxuICAgICAqL1xuICAgIHVubG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgQ29tcG9uZW50IHNob3VsZCBzdGFydC5cbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBDb21wb25lbnQgc2hvdWxkIHN0b3AuXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZC5cbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4vTGFuZ3VhZ2UnO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBjbGFzcyByZXNwb25zaWJsZSBmb3IgbG9hZGluZyBbW0NvbXBvbmVudHxDb21wb25lbnRzXV0gYW5kIGRlbGl2ZXJpbmcgZXZlbnRzLlxuICpcbiAqIEBleHBvcnQgdGhlIENvbXBvbmVudExvYWRlciB0eXBlLlxuICogQGNsYXNzIENvbXBvbmVudExvYWRlclxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBjb21wb25lbnRzOiBDb21wb25lbnRbXTtcbiAgICB0aW1lcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50OkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIGEgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoY29tcG9uZW50OkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGUgPT4geyByZXR1cm4gZS5pZCAhPT0gY29tcG9uZW50LmlkIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgY29tcG9uZW50IGxvYWRlci5cbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgU3luY1N0b3JhZ2UuQ09NUE9ORU5UUy5nZXQoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSByZXN1bHQuY29tcG9uZW50cztcbiAgICAgICAgICAgIGlmKHN0b3JhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBpZihzdG9yYWdlW2NvbXBvbmVudC50YWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVtjb21wb25lbnQudGFnXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmVuYWJsZWQgPSBzdG9yYWdlW2NvbXBvbmVudC50YWddLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkICYmICFjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQubG9hZCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU3luY1N0b3JhZ2UuQ09NUE9ORU5UUy5zZXQoc3RvcmFnZSk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgY29tcG9uZW50IGxvYWRlci5cbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC51bmxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFRpbWVyKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQub25VcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BUaW1lcigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB9XG59IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgbGFuZ19lblVTX2RhdGEgZnJvbSAnLi9sYW5nL2VuLVVTLmpzb24nO1xuaW1wb3J0IGxhbmdfc3ZTRV9kYXRhIGZyb20gJy4vbGFuZy9zdi1TRS5qc29uJztcbmltcG9ydCBsYW5nX2ZyRlJfZGF0YSBmcm9tICcuL2xhbmcvZnItRlIuanNvbic7XG5pbXBvcnQgbGFuZ19pdElUX2RhdGEgZnJvbSAnLi9sYW5nL2l0LUlULmpzb24nO1xuaW1wb3J0IGxhbmdfZXNFU19kYXRhIGZyb20gJy4vbGFuZy9lcy1FUy5qc29uJztcbmltcG9ydCBsYW5nX2RlREVfZGF0YSBmcm9tICcuL2xhbmcvZGUtREUuanNvbic7XG5pbXBvcnQgbGFuZ191a1VBX2RhdGEgZnJvbSAnLi9sYW5nL3VrLVVBLmpzb24nO1xuaW1wb3J0IGxhbmdfZW5TVEVFRl9kYXRhIGZyb20gJy4vbGFuZy9lbi1TVEVFRi5qc29uJztcbmltcG9ydCBsYW5nX2V1RVNfZGF0YSBmcm9tICcuL2xhbmcvZXUtRVMuanNvbic7XG5pbXBvcnQgbGFuZ19nbEVTX2RhdGEgZnJvbSAnLi9sYW5nL2dsLUVTLmpzb24nO1xuaW1wb3J0IGxhbmdfcnVSVV9kYXRhIGZyb20gJy4vbGFuZy9ydS1SVS5qc29uJztcbmltcG9ydCBsYW5nX25sQkVfZGF0YSBmcm9tICcuL2xhbmcvbmwtQkUuanNvbic7XG5cbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3cgYXMgYW55O1xuXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xuICAgIHRhZzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRhZzogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIExhbmd1YWdlLmxhbmd1YWdlcy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIGdldChuYW1lOiBzdHJpbmcsIHZhcnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGtleXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmRhdGE7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBfdmFyIGluIHZhcnMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWwuc3BsaXQoJ3t7JyArIF92YXIgKyAnfX0nKS5qb2luKHZhcnNbX3Zhcl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbCBhcyBhbnk7XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdCgpIHtcbiAgICAgICAgTGFuZ3VhZ2UuZGVmYXVsdCA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGxhbmd1YWdlczogTGFuZ3VhZ2VbXSA9IFtdO1xuICAgIHN0YXRpYyBkZWZhdWx0OiBMYW5ndWFnZTtcbiAgICBzdGF0aWMgY3VycmVudDogTGFuZ3VhZ2U7XG4gICAgc3RhdGljIGxvYWQoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSk6IHZvaWQge1xuICAgICAgICAvLyBDaGVjayBmb3IgdGhlIGZpcnN0IGxhbmd1YWdlIHRoYXQgaXNuJ3QgZXF1YWwgdG8gdGhlIGRlZmF1bHRcbiAgICAgICAgU3luY1N0b3JhZ2UuTEFOR1VBR0UuZ2V0KChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gcmVzdWx0W1N5bmNTdG9yYWdlLkxBTkdVQUdFLnRhZ107XG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UgPT09IHVuZGVmaW5lZCB8fCBsYW5ndWFnZSA9PT0gJ2F1dG9tYXRpYycpIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMuYXV0b21hdGljKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZ2dlci5pbmZvKCdVc2luZyBsYW5ndWFnZSBjb25maWd1cmF0aW9uICcgKyBsYW5ndWFnZSk7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsYW5nLnRhZyA9PT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGFuZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5sYW5ndWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0KGxhbmd1YWdlOiBMYW5ndWFnZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBsYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXV0b21hdGljKCkge1xuICAgICAgICByZXR1cm4gKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzIGFzIGFueSkuZmluZChcbiAgICAgICAgICAgIChsOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgbC5sZW5ndGggPj0gNSAmJlxuICAgICAgICAgICAgICAgICh0aGlzLmRlZmF1bHQgPT09IHVuZGVmaW5lZCB8fCBsICE9PSB0aGlzLmRlZmF1bHQudGFnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsYW5nX2RlREUgPSBuZXcgTGFuZ3VhZ2UoJ0RldXRzY2hlIChERSknLCAnZGUtREUnLCBsYW5nX2RlREVfZGF0YSk7XG4gICAgICAgIGxhbmdfZGVERS5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfZXNFUyA9IG5ldyBMYW5ndWFnZSgnRXNwYcOxb2wgKEVTKScsICdlcy1FUycsIGxhbmdfZXNFU19kYXRhKTtcbiAgICAgICAgbGFuZ19lc0VTLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgY29uc3QgbGFuZ19lblVTID0gbmV3IExhbmd1YWdlKCdFbmdsaXNoIChVUyknLCAnZW4tVVMnLCBsYW5nX2VuVVNfZGF0YSk7XG4gICAgICAgIGxhbmdfZW5VUy5yZWdpc3RlcigpO1xuICAgICAgICBsYW5nX2VuVVMuc2V0RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGNvbnN0IGxhbmdfZW5TVEVFRiA9IG5ldyBMYW5ndWFnZSgnRW5nbGlzaCAoU3RlZWYpJywgJ2VuLVNURUVGJywgbGFuZ19lblNURUVGX2RhdGEpO1xuICAgICAgICAvLyBsYW5nX2VuU1RFRUYucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX2ZyRlIgPSBuZXcgTGFuZ3VhZ2UoJ0ZyYW7Dp2FpcyAoRlIpJywgJ2ZyLUZSJywgbGFuZ19mckZSX2RhdGEpO1xuICAgICAgICBsYW5nX2ZyRlIucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX2l0SVQgPSBuZXcgTGFuZ3VhZ2UoJ0l0YWxpYW5vIChJVCknLCAnaXQtSVQnLCBsYW5nX2l0SVRfZGF0YSk7XG4gICAgICAgIGxhbmdfaXRJVC5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfc3ZTRSA9IG5ldyBMYW5ndWFnZSgnU3ZlbnNrYSAoU0UpJywgJ3N2LVNFJywgbGFuZ19zdlNFX2RhdGEpO1xuICAgICAgICBsYW5nX3N2U0UucmVnaXN0ZXIoKTtcbiAgICAgIFxuICAgICAgICBjb25zdCBsYW5nX3VrVUEgPSBuZXcgTGFuZ3VhZ2UoJ9Cj0LrRgNCw0ZfQvdGB0YzQutCwIChVQSknLCAndWstVUEnLCBsYW5nX3VrVUFfZGF0YSk7XG4gICAgICAgIGxhbmdfdWtVQS5yZWdpc3RlcigpO1xuICAgICAgXG4gICAgICAgIGNvbnN0IGxhbmdfZXVFUyA9IG5ldyBMYW5ndWFnZSgnRXVza2FyYSAoRVUpJywgJ2V1LUVTJywgbGFuZ19ldUVTX2RhdGEpO1xuICAgICAgICBsYW5nX2V1RVMucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX2dsRVMgPSBuZXcgTGFuZ3VhZ2UoJ0dhbGVnbyAoR0wpJywgJ2dsLUVTJywgbGFuZ19nbEVTX2RhdGEpO1xuICAgICAgICBsYW5nX2dsRVMucmVnaXN0ZXIoKTtcblxuICAgICAgICBjb25zdCBsYW5nX3J1UlUgPSBuZXcgTGFuZ3VhZ2UoJ9GA0YPRgdGB0LrQuNC5IChSVSknLCAncnUtUlUnLCBsYW5nX3J1UlVfZGF0YSk7XG4gICAgICAgIGxhbmdfcnVSVS5yZWdpc3RlcigpO1xuXG4gICAgICAgIGNvbnN0IGxhbmdfbmxCRSA9IG5ldyBMYW5ndWFnZSgnTmVkZXJsYW5kcyAoQkUpJywgJ25sLUJFJywgbGFuZ19ubEJFX2RhdGEpO1xuICAgICAgICBsYW5nX25sQkUucmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZywgdmFycz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmFsID0gdGhpcy5jdXJyZW50LmdldChuYW1lLCB2YXJzKTtcblxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cbiIsImNvbnN0IHByZWZpeDpzdHJpbmcgPSAnW1N0YWRpYStdJztcblxuY2xhc3MgTG9nZ2VyIHtcbiAgICBpbmZvID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+TgyAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBibGFjaycpO1xuICAgIH07XG5cbiAgICB3YXJuaW5nID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+YnyAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBvcmFuZ2UnKTtcbiAgICB9O1xuXG4gICAgZXJyb3IgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPinYwgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogNzAwJyk7XG4gICAgfTtcblxuICAgIGNvbXBvbmVudCA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/Cfp6kgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogZGFya2dyZWVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHViaW91c2x5IGNyZWF0ZWQgYnkgQWRyaWFuIENvb25leVxuICAgICAqIEBhdXRob3IgaHR0cDovL2FkcmlhbmNvb25leS5naXRodWIuaW9cbiAgICAgKi9cbiAgICBpbWFnZSA9IGZ1bmN0aW9uKHVybDogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBnZXRCb3ggPSBmdW5jdGlvbih3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RyaW5nOiBcIitcIixcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJmb250LXNpemU6IDFweDsgcGFkZGluZzogXCIgKyBNYXRoLmZsb29yKGhlaWdodC8yKSArIFwicHggXCIgKyBNYXRoLmZsb29yKHdpZHRoLzIpICsgXCJweDsgbGluZS1oZWlnaHQ6IDA7XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaW0gPSBnZXRCb3god2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGRpbS5zdHJpbmcsIGRpbS5zdHlsZSArIFwiYmFja2dyb3VuZDogdXJsKFwiICsgdXJsICsgXCIpOyBiYWNrZ3JvdW5kLXNpemU6IFwiICsgKHdpZHRoKSArIFwicHggXCIgKyAoaGVpZ2h0KSArIFwicHg7IGNvbG9yOiB0cmFuc3BhcmVudDtcIik7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2dlcigpOyIsImNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3cgYXMgYW55O1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgICBzdGF0aWMgQ09ERUMgPSBuZXcgTG9jYWxTdG9yYWdlKCdDb2RlYycsICdjb2RlYycpO1xuICAgIHN0YXRpYyBSRVNPTFVUSU9OID0gbmV3IExvY2FsU3RvcmFnZSgnUmVzb2x1dGlvbicsICdyZXNvbHV0aW9uJyk7XG4gICAgc3RhdGljIE1PTklUT1JfU1RBVFMgPSBuZXcgTG9jYWxTdG9yYWdlKCdNb25pdG9yIFN0YXRzJywgJ21vbml0b3Itc3RhdHMnKTtcblxuICAgIG5hbWU6IHN0cmluZztcbiAgICB0YWc6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRhZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgIH1cblxuICAgIGdldChjYWxsYmFjazogKChyZXN1bHQ6IGFueSkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsgdGhpcy50YWcgXSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZTogYW55LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFt0aGlzLnRhZ106IHZhbHVlIH0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KHN0b3JhZ2VzOiBMb2NhbFN0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChzdG9yYWdlcy5tYXAoZSA9PiBlLnRhZyksIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0KHN0b3JhZ2VzOiB7W2tleTogc3RyaW5nXTogYW55fSwgY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoc3RvcmFnZXMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXIoKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3luY1N0b3JhZ2Uge1xuICAgIHN0YXRpYyBMSUJSQVJZX0dBTUVTID0gbmV3IFN5bmNTdG9yYWdlKCdMaWJyYXJ5IEdhbWVzJywgJ2dhbWVzJyk7XG4gICAgc3RhdGljIExJQlJBUllfU09SVF9PUkRFUiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBPcmRlcicsICdzb3J0LW9yZGVyJyk7XG4gICAgc3RhdGljIExJQlJBUllfU09SVF9ESVJFQ1RJT04gPSBuZXcgU3luY1N0b3JhZ2UoJ1NvcnQgRGlyZWN0aW9uJywgJ3NvcnQtZGlyZWN0aW9uJyk7XG4gICAgc3RhdGljIExBTkdVQUdFID0gbmV3IFN5bmNTdG9yYWdlKCdMYW5ndWFnZScsICdsYW5ndWFnZScpO1xuICAgIHN0YXRpYyBDT01QT05FTlRTID0gbmV3IFN5bmNTdG9yYWdlKCdDb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcblxuICAgIG5hbWU6IHN0cmluZztcbiAgICB0YWc6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRhZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgIH1cblxuICAgIGdldChjYWxsYmFjazogKChyZXN1bHQ6IGFueSkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWyB0aGlzLnRhZyBdLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlOiBhbnksIGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbdGhpcy50YWddOiB2YWx1ZSB9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChzdG9yYWdlczogU3luY1N0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHN0b3JhZ2VzLm1hcChlID0+IGUudGFnKSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQoc3RvcmFnZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHN0b3JhZ2VzLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBjbGVhcigpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcigpO1xuICAgIH1cbn0iLCJjbGFzcyBVdGlsIHtcbiAgICAvKipcbiAgICAgKiBTdGFkaWEncyBtZW51IGJhciBlbGVtZW50LCB1c2VkIHRvIGtub3cgd2hlbiB0aGUgcGxheWVyIGhhcyBvcGVuZWQgdGhlIG1lbnUuXG4gICAgICovXG4gICAgbWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5tZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5YMWFzdicpO1xuICAgIH1cblxuICAgIGlzTWVudU9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbnVFbGVtZW50LnN0eWxlLm9wYWNpdHkgIT09ICcwJztcbiAgICB9XG5cbiAgICBpc0luR2FtZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdwbGF5ZXInKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaXNJbkhvbWUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignaG9tZScpICE9PSAtMTtcbiAgICB9XG5cbiAgICBpc0luU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignc3RvcmUnKSAhPT0gLTEgJiYgIXRoaXMuaXNJblN0b3JlRGV0YWlsKCk7XG4gICAgfVxuXG4gICAgaXNJblN0b3JlRGV0YWlsKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlL2RldGFpbHMnKSAhPT0gLTE7XG4gICAgfVxuICAgIFxuICAgIGRlc2FuZGJveChqYXZhc2NyaXB0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBqYXZhc2NyaXB0O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVXRpbCgpOyIsImltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBXZWJEYXRhYmFzZSB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xuICAgIGNvbm5lY3Rpb246IGFueTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG5cbiAgICBjb25uZWN0KGNhbGxiYWNrPzogKGNvbm5lY3Rpb246YW55KSA9PiB7fSkge1xuICAgICAgICBpZih0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvcjogQWxyZWFkeSBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGlvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5jb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3Igd2hlbiBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOicsIHhoci5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yIHdoZW4gY29ubmVjdGluZyB0byBkYXRhYmFzZTonLCB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKG51bGwpOyBcbiAgICB9XG5cbiAgICBnZXRDb25uZWN0aW9uKCk6IGFueSB7XG4gICAgICAgIGlmKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvcjogTm90IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UnKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb247XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZWNvbm5lY3QoY2FsbGJhY2s/OiAoY29ubmVjdGlvbjpvYmplY3QpID0+IHt9KSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmNvbm5lY3QoY2FsbGJhY2spO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gJy4uL3VpL1VJQnV0dG9uJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuXG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcblxuLyoqXG4gKiBBIGJ1dHRvbiBhbGxvd2luZyB1c2VycyB0byBwbGF5IFN0YWRpYSBpbiB3aW5kb3dlZCBtb2RlLlxuICpcbiAqIEBleHBvcnQgdGhlIEFsbG93V2luZG93ZWRNb2RlIHR5cGUuXG4gKiBAY2xhc3MgQWxsb3dXaW5kb3dlZE1vZGVcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbGxvd1dpbmRvd2VkTW9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXG4gICAgICovXG4gICAgdGFnOiBzdHJpbmcgPSAnYWxsb3ctd2luZG93ZWQtbW9kZSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gdG9nZ2xlIHdpbmRvd2VkIG1vZGUuXG4gICAgICovXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgd2luZG93ZWQgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxuICAgICAqL1xuICAgIHdpbmRvd2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBNYWluIGV2ZW50LCBzdG9wcyBidWlsdC1pbiBmdWxsc2NyZWVuIGV2ZW50cyBmcm9tIHJlYWNoaW5nIFN0YWRpYSB3aGVuZXZlciB3aW5kb3dlZCBtb2RlIGlzIGVuYWJsZWQuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgZnVuY3Rpb24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYud2luZG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbnRlcnMgd2luZG93ZWQgbW9kZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBBbGxvd1dpbmRvd2VkTW9kZVxuICAgICAqL1xuICAgIGVudGVyV2luZG93ZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2luZG93ZWQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4aXRzIHdpbmRvd2VkIG1vZGVcbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcbiAgICAgKi9cbiAgICBleGl0V2luZG93ZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2luZG93ZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3dpbmRvd2VkLnN2ZycpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLndpbmRvd2VkJyksXG4gICAgICAgICAgICB0aGlzLmlkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBBbGxvd1dpbmRvd2VkTW9kZVxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leGl0V2luZG93ZWQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYnV0dG9uIGxhYmVscyBhbmQgaWNvbnMgdG8gZml0IGN1cnJlbnQgbW9kZS5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcbiAgICAgKi9cbiAgICB1cGRhdGVCdXR0b24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy93aW5kb3dlZC5zdmcnKTtcbiAgICAgICAgY29uc3QgaWNvbl9leGl0ID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFxuICAgICAgICAgICAgJ2ltYWdlcy9pY29ucy93aW5kb3dlZF9leGl0LnN2ZydcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy53aW5kb3dlZCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0SWNvbihpY29uX2V4aXQpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0VGl0bGUoXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdhbGxvdy13aW5kb3dlZC1tb2RlLmJ1dHRvbi1sYWJlbC5mdWxsc2NyZWVuJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRJY29uKGljb24pO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0VGl0bGUoXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdhbGxvdy13aW5kb3dlZC1tb2RlLmJ1dHRvbi1sYWJlbC53aW5kb3dlZCcpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hldGhlciBldmVudHMgaGF2ZSBiZWVuIGFkZGVkIGFscmVhZHkgb3Igbm90LlxuICAgIGV2ZW50c0FkZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb25jZSBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgY29tcG9uZW50IGVsZW1lbnRzIGFuZCB2YXJpYWJsZXNcbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gSWYgbWVudSBpcyBvcGVuIGFuZCBhIGdhbWUgaXMgcGxheWluZy5cbiAgICAgICAgaWYgKFV0aWwuaXNNZW51T3BlbigpICYmIFV0aWwuaXNJbkdhbWUoKSkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBpbiB0aGUgY3VycmVudCByZW5kZXJlclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG5ldyByZW5kZXJlcnNcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGV2ZW50cyBhcmUgYWxyZWFkeSBhZGRlZCwgZG9uJ3QgYWRkIHRoZW0gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50c0FkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYud2luZG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5leGl0V2luZG93ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmVudGVyV2luZG93ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVCdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHNBZGRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1dHRvbi5jb250YWluZXIuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgJy4vc3R5bGVzL0Nsb2NrLnNjc3MnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5cbi8qKlxuICogQSBzaW1wbGUgY2xvY2sgZGlzcGxheWVkIGluIHRoZSBTdGFkaWEgTWVudS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBDbG9jayB0eXBlLlxuICogQGNsYXNzIENsb2NrXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgQ2xvY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ2Nsb2NrJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbG9jayBlbGVtZW50LlxuICAgICAqL1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNpbXBsZSA8c3Bhbj4sIGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMsIGFuZCBzdG9yZXMgaXQgaW4gW0BsaW5rICNlbGVtZW50XVxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfY2xvY2snKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyduYW1lJzogdGhpcy5uYW1lfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsnbmFtZSc6IHRoaXMubmFtZX0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGNsb2NrIHdoZW4gaXQncyB2aXNpYmxlXG4gICAgICAgIGlmKFV0aWwuaXNNZW51T3BlbigpKSB7XG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeGhBeWYnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHJlcGVuZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgJy4vc3R5bGVzL0ZvcmNlQ29kZWMuc2Nzcyc7XG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vVUlUYWInO1xuaW1wb3J0IHsgVUlSb3cgfSBmcm9tICcuLi91aS9VSVJvdyc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuLi91aS9TbmFja2Jhcic7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xuaW1wb3J0IHsgUmVzb2x1dGlvbiB9IGZyb20gJy4vRm9yY2VSZXNvbHV0aW9uJztcblxuY29uc3QgY2hyb21lID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcblxuLyoqXG4gKiBBIGRyb3Bkb3duIGFsbG93aW5nIGNoYW5naW5nIG9mIHRoZSBjb2RlYy5cbiAqXG4gKiBAZXhwb3J0IHRoZSBGb3JjZUNvZGVjIHR5cGUuXG4gKiBAY2xhc3MgRm9yY2VDb2RlY1xuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIEZvcmNlQ29kZWMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ2ZvcmNlLWNvZGVjJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGNvZGVjLlxuICAgICAqL1xuICAgIGNvZGVjOiBudW1iZXIgPSBDb2RlYy5BVVRPTUFUSUM7XG5cbiAgICAvKiogXG4gICAgICogVGhlIGNvZGVjIFNlbGVjdCBib3guXG4gICAgICovXG4gICAgc2VsZWN0OiBTZWxlY3Q7XG5cbiAgICAvKiogXG4gICAgICogVGhlIFN0YWRpYSsgVUkgVGFiLlxuICAgICAqL1xuICAgIHRhYjogVUlUYWI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ2xvYmFsIHNuYWNrYmFyLlxuICAgICAqL1xuICAgIHNuYWNrYmFyOiBTbmFja2JhcjtcblxuICAgIGNvbnN0cnVjdG9yKHRhYjogVUlUYWIsIHNuYWNrYmFyOiBTbmFja2Jhcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xuICAgICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMgd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjaHJvbWUgc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLkNPREVDLmdldCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29kZWMgPSByZXN1bHQuY29kZWM7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xuICAgICAqL1xuICAgIHNldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2UuQ09ERUMuc2V0KHRoaXMuY29kZWMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy50YWIuYWRkUm93KFxuICAgICAgICAgICAgbmV3IFVJUm93KFxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfc2VsZWN0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb2RlY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5BVVRPTUFUSUN9XCI+JHtMYW5ndWFnZS5nZXQoJ2F1dG9tYXRpYycpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5WUDl9XCI+JHtMYW5ndWFnZS5nZXQoJ3ZwOScpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5IMjY0fVwiPiR7TGFuZ3VhZ2UuZ2V0KCdoMjY0Jyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3RhZGlhcGx1c19idXR0b24tc21hbGxcIj4ke0xhbmd1YWdlLmdldCgnYXBwbHknKX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCcgaWQ9JyR7dGhpcy5pZH0tNGstdG9vbHRpcCcgc3R5bGU9J2Rpc3BsYXk6IG5vbmUnPiR7TGFuZ3VhZ2UuZ2V0KCdmb3JjZS1jb2RlYy40ay10b29sdGlwJyl9PC9wPlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdGhpcy5pZCArICctcm93JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IENvZGVjLkFVVE9NQVRJQyB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29kZWMgPSBwYXJzZUludChzZWxmLnNlbGVjdC5nZXQoKVswXSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdG9yYWdlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zbmFja2Jhci5hY3RpdmF0ZShMYW5ndWFnZS5nZXQoJ3NuYWNrYmFyLnJlbG9hZC10by11cGRhdGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLlJFU09MVVRJT04uZ2V0KHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LnJlc29sdXRpb24gPT09IFJlc29sdXRpb24uVUhEXzRLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gQ29kZWMuVlA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGlzYWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctNGstdG9vbHRpcCcpIGFzIEhUTUxFbGVtZW50OyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5zZXQoc2VsZi5jb2RlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmNlQ29kZWMuc2V0Q29kZWMoc2VsZi5jb2RlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIG9uUmVsb2FkOiAocm93OlVJUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IENvZGVjLkFVVE9NQVRJQyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLmNvZGVjKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoXCJjb21wb25lbnQuZW5hYmxlZFwiLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdXNlZCBDb2RlY1xuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlY1xuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXG4gICAgICovXG4gICAgc3RhdGljIHNldENvZGVjKGNvZGVjOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHN3aXRjaCAoY29kZWMpIHtcbiAgICAgICAgY2FzZSBDb2RlYy5WUDk6XG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIsICd7XCJ2cDlcIjpcIkV4dGVybmFsRGVjb2RlclwifScpO1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQ29kZWMuSDI2NDpcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIiwgJ3tcImgyNjRcIjpcIkV4dGVybmFsRGVjb2RlclwiLCBcInZwOVwiOlwibGlidnB4XCJ9Jyk7XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSBDb2RlYy5BVVRPTUFUSUM6XG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIpO1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIpO1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpIHtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGRpZmZlcmVudCBraW5kcyBvZiBjb2RlY3MsIHJlcHJlc2VudGVkIGFzIG51bWJlcnMuXG4gKlxuICogQGV4cG9ydCB0aGUgQ29kZWMgdHlwZVxuICogQGNsYXNzIENvZGVjXG4gKi9cbmV4cG9ydCBjbGFzcyBDb2RlYyB7XG4gICAgLyoqXG4gICAgICogQXV0b21hdGljIGNvZGVjLCBsZXQgU3RhZGlhIGRlY2lkZSBvbiBpdCdzIG93bi5cbiAgICAgKi9cbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcblxuICAgIC8qKlxuICAgICAqIFZQOSBjb2RlYywgdXN1YWxseSB3b3JrcyBiZXR0ZXIgdGhhbiBIMjY0IGJ1dCBhdCB0aGUgY29zdCBvZiBsb3dlciBxdWFsaXR5LlxuICAgICAqL1xuICAgIHN0YXRpYyBWUDkgPSAxO1xuXG4gICAgLyoqXG4gICAgICogSDI2NCBjb2RlYywgaGlnaCBxdWFsaXR5IGFuZCBNYWMtT1MgY29tcGF0aWJsZSBjb2RlYyBidXQgd2l0aCBsYXRlbmN5IGlzc3Vlcy4gXG4gICAgICovXG4gICAgc3RhdGljIEgyNjQgPSAyO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0ICcuL3N0eWxlcy9Gb3JjZVJlc29sdXRpb24uc2Nzcyc7XG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vVUlUYWInO1xuaW1wb3J0IHsgVUlSb3csIFVJUm93T3B0aW9ucyB9IGZyb20gJy4uL3VpL1VJUm93JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL3VpL1NlbGVjdCc7XG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XG5cbmNvbnN0IGNocm9tZSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XG5cbi8qKlxuICogQSBkcm9wZG93biBhbGxvd2luZyBjaGFuZ2luZyBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqXG4gKiBAZXhwb3J0IHRoZSBGb3JjZVJlc29sdXRpb24gdHlwZS5cbiAqIEBjbGFzcyBGb3JjZVJlc29sdXRpb25cbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JjZVJlc29sdXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ2ZvcmNlLXJlc29sdXRpb24nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcmVzb2x1dGlvbi5cbiAgICAgKi9cbiAgICByZXNvbHV0aW9uOiBudW1iZXIgPSBSZXNvbHV0aW9uLkFVVE9NQVRJQztcblxuICAgIC8qKlxuICAgICAqIFRoZSByZXNvbHV0aW9uIFNlbGVjdCBib3guXG4gICAgICovXG4gICAgc2VsZWN0OiBTZWxlY3Q7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3RhZGlhKyBVSSBUYWJcbiAgICAgKi9cbiAgICB0YWI6IFVJVGFiO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdsb2JhbCBTbmFja2JhclxuICAgICAqL1xuICAgIHNuYWNrYmFyOiBTbmFja2JhcjtcblxuICAgIGNvbnN0cnVjdG9yKHRhYjogVUlUYWIsIHNuYWNrYmFyOiBTbmFja2Jhcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xuICAgICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcyB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNocm9tZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VSZXNvbHV0aW9uXG4gICAgICovXG4gICAgZ2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5SRVNPTFVUSU9OLmdldCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc3VsdC5yZXNvbHV0aW9uO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VSZXNvbHV0aW9uXG4gICAgICovXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5SRVNPTFVUSU9OLnNldCh0aGlzLnJlc29sdXRpb24sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgRm9yY2VSZXNvbHV0aW9uLnNldFJlc29sdXRpb24odGhpcy5yZXNvbHV0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnRhYi5hZGRSb3coXG4gICAgICAgICAgICBuZXcgVUlSb3coXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19zZWxlY3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlc29sdXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5BVVRPTUFUSUN9XCI+JHtMYW5ndWFnZS5nZXQoJ2F1dG9tYXRpYycpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLlVIRF80S31cIj4ke0xhbmd1YWdlLmdldCgnNGsnKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5GSER9XCI+JHtMYW5ndWFnZS5nZXQoJzEwODBwJyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3RhZGlhcGx1c19idXR0b24tc21hbGxcIj4ke0xhbmd1YWdlLmdldCgnYXBwbHknKX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiPiR7TGFuZ3VhZ2UuZ2V0KCdmb3JjZS1yZXNvbHV0aW9uLm5vdGUnKX08L3A+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU6IChyb3c6VUlSb3cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogUmVzb2x1dGlvbi5BVVRPTUFUSUMgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x1dGlvbiA9IHBhcnNlSW50KHNlbGYuc2VsZWN0LmdldCgpWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RvcmFnZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc25hY2tiYXIuYWN0aXZhdGUoTGFuZ3VhZ2UuZ2V0KCdzbmFja2Jhci5yZWxvYWQtdG8tdXBkYXRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Quc2V0KHNlbGYucmVzb2x1dGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBvblJlbG9hZDogKHJvdzpVSVJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QgPSBuZXcgU2VsZWN0KHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLCB7IHBsYWNlaG9sZGVyOiBSZXNvbHV0aW9uLkFVVE9NQVRJQyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLnJlc29sdXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdXNlciBbW1Jlc29sdXRpb25dXVxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIHRoZSB1c2VyIFJlc29sdXRpb25cbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VSZXNvbHV0aW9uXG4gICAgICovXG4gICAgc3RhdGljIHNldFJlc29sdXRpb24ocmVzb2x1dGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgIGxldCBoZWlnaHQ7XG4gICAgICAgIGxldCB3aWR0aDtcbiAgICAgICAgc3dpdGNoIChyZXNvbHV0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uVUhEXzRLOlxuICAgICAgICAgICAgICAgIHdpZHRoID0gMzg0MDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAyMTYwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uRkhEOlxuICAgICAgICAgICAgICAgIHdpZHRoID0gMTkyMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAxMDgwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBSZXNvbHV0aW9uLkFVVE9NQVRJQzpcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnYXZhaWxXaWR0aCcsIHsgdmFsdWU6ICR7d2lkdGh9IH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdhdmFpbEhlaWdodCcsIHsgdmFsdWU6ICR7aGVpZ2h0fSB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnd2lkdGgnLCB7IHZhbHVlOiAke3dpZHRofSB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnaGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xuICAgICAgICBgO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxuICAgICAqL1xuICAgIG9uVXBkYXRlKCkge1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IGtpbmRzIG9mIHJlc29sdXRpb25zLCByZXByZXNlbnRlZCBhcyBudW1iZXJzLlxuICpcbiAqIEBleHBvcnQgdGhlIFJlc29sdXRpb24gdHlwZVxuICogQGNsYXNzIFJlc29sdXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc29sdXRpb24ge1xuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpYywgbGV0IFN0YWRpYSBoYW5kbGUgcmVzb2x1dGlvbnMuXG4gICAgICovXG4gICAgc3RhdGljIEFVVE9NQVRJQyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiA0Sywgb3IgMzg0MHgyMTYwXG4gICAgICovXG4gICAgc3RhdGljIFVIRF80SyA9IDE7XG4gICAgXG4gICAgLyoqXG4gICAgICogRnVsbCBIRCwgb3IgMTkyMHgxMDgwXG4gICAgICovXG4gICAgc3RhdGljIEZIRCA9IDI7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgJy4vc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2Nzcyc7XG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL3VpL1NlbGVjdCc7XG5pbXBvcnQgeyBXZWJEYXRhYmFzZSB9IGZyb20gJy4uL1dlYkRhdGFiYXNlJztcbmltcG9ydCB7IENoZWNrYm94LCBDaGVja2JveFNoYXBlIH0gZnJvbSAnLi4vdWkvQ2hlY2tib3gnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xuXG5jb25zdCB7IGNocm9tZSwgQXJyYXkgfSA9IHdpbmRvdyBhcyBhbnk7XG5cbi8qKlxuICogQSBmaWx0ZXJpbmcgc3lzdGVtIGFsbG93aW5nIGhpZGluZyBhbmQgc2hvd2luZyBzcGVjaWZpYyBnYW1lcyBpbiB5b3VyIGxpYnJhcnkgYXMgd2VsbCBhcyBvcmRlcmluZyB0aGVtIGJ5IG5hbWUuXG4gKlxuICogQGV4cG9ydCB0aGUgTGlicmFyeUZpbHRlciB0eXBlXG4gKiBAY2xhc3MgTGlicmFyeUZpbHRlclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIExpYnJhcnlGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ2xpYnJhcnktZmlsdGVyJztcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgZ2FtZXMgYW5kIGdhbWUgZGF0YSBpbXBvcnRlZCBmcm9tIHRoZSBET01cbiAgICAgKi9cbiAgICBnYW1lczogYW55ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBTbmFja2JhciB1c2VkIHRvIGRpc3BsYXkgbWVzc2FnZXMgd2hlbiBoaWRpbmcgYW5kIHNob3dpbmcgZ2FtZXNcbiAgICAgKi9cbiAgICBzbmFja2JhcjogU25hY2tiYXI7XG5cbiAgICAvKipcbiAgICAgKiBGaWx0ZXIgYmFyIGFsbG93aW5nIGZvciBjb250cm9scyBvZiB0aGUgbGlicmFyeSBmaWx0ZXJcbiAgICAgKi9cbiAgICBmaWx0ZXJCYXI6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGJveCB1c2VkIHRvIG9yZGVyIHRoZSBnYW1lc1xuICAgICAqL1xuICAgIHNlbGVjdDogU2VsZWN0O1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBmaWx0ZXJpbmcgb3JkZXJcbiAgICAgKi9cbiAgICBvcmRlcjogRmlsdGVyT3JkZXI7XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYWxsIGdhbWVzIGJlIHNob3duIHJlZ2FyZGxlc3MgaWYgdGhleXJlIGhpZGRlbiBvciBub3Q/XG4gICAgICovXG4gICAgc2hvd0FsbDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENoZWNrYm94IHNob3dpbmcgaGlkZGVuIGdhbWVzLlxuICAgICAqL1xuICAgIGNoZWNrYm94OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIERpcmVjdGlvbiBvZiB3aGljaCBnYW1lcyB3aWxsIGJlIG9yZGVyZWQuXG4gICAgICovXG4gICAgZGlyZWN0aW9uOiBPcmRlckRpcmVjdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBhbGwgZ2FtZXMgaW4geW91ciBsaWJyYXJ5LlxuICAgICAqL1xuICAgIGdhbWVUaWxlczogTm9kZUxpc3Q7XG5cbiAgICAvKipcbiAgICAgKiBTdGFkaWFHYW1lREIgRGF0YWJhc2UuXG4gICAgICovXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xuXG4gICAgLyoqXG4gICAgICogU3RhZGlhR2FtZURCIFVVSUQgTWFwLlxuICAgICAqL1xuICAgIHV1aWRNYXA6IFdlYkRhdGFiYXNlO1xuXG4gICAgY29uc3RydWN0b3Ioc25hY2tiYXI6IFNuYWNrYmFyLCBkYXRhYmFzZTogV2ViRGF0YWJhc2UsIHV1aWRNYXA6IFdlYkRhdGFiYXNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW1wb3J0IGRhdGFiYXNlICYgdXVpZE1hcCBmcm9tIGluZGV4LmpzXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcblxuICAgICAgICAvLyBJbXBvcnQgc25hY2tiYXIgZnJvbSBpbmRleC5qc1xuICAgICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBmaWx0ZXIgYmFyIGVsZW1lbnRcbiAgICAgICAgdGhpcy5maWx0ZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5maWx0ZXJCYXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGFyb3VuZCBldmVyeSBnYW1lIGFuZCBpbml0aWFsaXplcyB0aGUgZWxlbWVudHMgbmVjZXNzYXJ5IHRvIHNob3cgb3IgaGlkZSBpdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgY3JlYXRlQWxsV3JhcHBlcnMoKSB7XG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB0aGlzLmdhbWVUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aWxlIGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKGVsZW1lbnQsIHRoaXMuZ2V0VVVJRChlbGVtZW50KSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5nYW1lVGlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydERpcmVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGdhbWUgVVVJRCBmcm9tIGl0J3MganNsb2cgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0aWxlXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIGdldFVVSUQodGlsZTogRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGlsZVxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnanNsb2cnKVxuICAgICAgICAgICAgLnNwbGl0KCc7ICcpWzFdXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDMpO1xuICAgIH1cblxuICAgIHdyYXBwZXJFeGlzdHModXVpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCArICctJyArIHV1aWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgdGlsZSBlbGVtZW50LCBjcmVhdGUgYSB3cmFwcGVyIGFyb3VuZCBpdCBhbmQgYW4gaWNvbiBhbGxvd2luZyBpdCB0byBiZSBzaG93biBvciBoaWRkZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdGhlIGdhbWUgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIHRoZSBnYW1lIHV1aWRcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxuICAgICAqL1xuICAgIGNyZWF0ZVdyYXBwZXIoZWxlbWVudDogRWxlbWVudCwgdXVpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLndyYXBwZXJFeGlzdHModXVpZCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gdGhpcy5kYXRhYmFzZS5nZXRDb25uZWN0aW9uKClbJ2RhdGEnXTtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xuICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW3V1aWRdXTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHdyYXBwZXJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZ2FtZS11dWlkJywgdXVpZCk7XG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdnYW1lLW5hbWUnLCBlbnRyeVsxXSk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXInKTtcbiAgICAgICAgd3JhcHBlci5pZCA9IHRoaXMuaWQgKyAnLScgKyB1dWlkO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaWNvblxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nKTtcbiAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAndmlzaWJpbGl0eSc7XG5cbiAgICAgICAgLy8gV3JhcCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGVsZW1lbnQgYW5kIGFkZCB0aGUgaWNvbiBiZWZvcmUgaXRcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAvLyBDaGVjayB0aGUgc3RvcmFnZSBmb3IgdmlzaWJpbGl0eSwgaGlkZSB0aGUgZ2FtZSBpZiBib3RoICd2aXNpYmxlJyBhbmQgJ3Nob3dBbGwnIGlzIGZhbHNlXG4gICAgICAgIGlmICghdGhpcy5nYW1lcy5oYXNPd25Qcm9wZXJ0eSh1dWlkKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXSA9IHsgdmlzaWJsZTogdHJ1ZSB9O1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUgJiYgIXRoaXMuc2hvd0FsbCkge1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBpY29uIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIHJhdGhlciB0aGFuIHRoZSB0b3AgbGVmdCB1c2luZ1xuICAgICAgICAvLyBhIG1hcmdpbiAodXNpbmcgdGhlICdsZWZ0JyBjc3MgYXR0cmlidXRlIGlzIG5vdCBwb3NzaWJsZSlcbiAgICAgICAgaWNvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gZWxlbWVudC5jbGllbnRXaWR0aCAtIGljb24uY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGBjYWxjKDEwMCUgLSAke2VsZW1lbnQuY2xpZW50V2lkdGggL1xuICAgICAgICAgICAgMn1weCkgJHtlbGVtZW50LmNsaWVudEhlaWdodCAvIDJ9cHhgO1xuXG4gICAgICAgIC8vIFdoZW4gdGhlIGljb24gaXMgY2xpY2tlZCBvblxuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGdhbWUgaXMgdmlzaWJsZSwgc2V0IGl0IHRvIGhpZGRlblxuICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIuaGlkZS1nYW1lJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2Ugc2V0IGl0IHRvIHNob3duXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja2Jhci5hY3RpdmF0ZShMYW5ndWFnZS5nZXQoJ3NuYWNrYmFyLnNob3ctZ2FtZScpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGdhbWUncyB2aXNpYmlsaXR5XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhbWUod3JhcHBlciwgZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIGdhbWUncyB2aXNpYmlsaXR5LCBtYWtpbmcgc3VyZSBpdCdzIG9ubHkgc2hvd24gd2hlbiBpdCdzIHN1cHBvc2VkIHRvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHdyYXBwZXIgVGhlIGdhbWUncyB3cmFwcGVyLCBjcmVhdGVkIGJ5IFtbY3JlYXRlV3JhcHBlcl1dXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0aWxlIFRoZSBnYW1lIHRpbGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFuaW1hdGUgU2hvdWxkIHRoZSBnYW1lIGhhdmUgYW4gYW5pbWF0ZWQgY2xvc2luZyBlZmZlY3Q/XG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICB1cGRhdGVHYW1lKHdyYXBwZXI6IEVsZW1lbnQsIHRpbGU6IEVsZW1lbnQsIGFuaW1hdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgLy8gR2V0IHRoZSBnYW1lIFVVSURcbiAgICAgICAgY29uc3QgdXVpZCA9IHRoaXMuZ2V0VVVJRCh0aWxlKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGdhbWUgaWNvblxuICAgICAgICBjb25zdCBpY29uID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbidcbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpc24ndCB2aXNpYmxlLi4uXG4gICAgICAgIGlmICghdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyAuLi5idXQgYWxsIGdhbWVzIHNob3VsZCBzdGlsbCBiZSBzaG93blxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0FsbCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgaWNvbiB0byBkaXNwbGF5IHRoYXQgaXQncyBub3QgdmlzaWJsZSBidXQgc2hvd24gYW55d2F5c1xuICAgICAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gJ3Zpc2liaWxpdHlfb2ZmJztcblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpc24ndCBoaWRkZW5cbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnLCAnY2xvc2VkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZS4uLlxuICAgICAgICAgICAgICAgIC8vIC4uLmlmIHRoZSBoaWRpbmcgc2hvdWxkIGJlIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFkZSB0aGUgZ2FtZSB0aWxlIG91dFxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBZnRlciAxIHNlY29uZCwgaGlkZSBpdFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZVxuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IG5vcm1hbGx5XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGdhbWUgaXMgdmlzaWJsZVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpY29uIHN0YXlzIGluIHBsYWNlIGFuZCBkb2Vzbid0IGdldCByZXNldCBiYWNrIHRvIHRoZSB0b3AgbGVmdCBjb3JuZXJcbiAgICAgICAgICAgIGljb24uc3R5bGUubWFyZ2luTGVmdCA9IHRpbGUuY2xpZW50V2lkdGggLSBpY29uLmNsaWVudFdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpY29uIHNob3dzIHRoYXQgaXQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAndmlzaWJpbGl0eSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYWxsIGdhbWVzLCBzaG9ydGhhbmQgZm9yIGxvb3BpbmcgdGhyb3VnaCB0aWxlcyBhbmQgdXBkYXRpbmcgdGhlbSBpbmRpdmlkdWFsbHlcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgdXBkYXRlQWxsR2FtZXMoKSB7XG4gICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XG5cbiAgICAgICAgdGhpcy5nYW1lVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVHYW1lKHRpbGUucGFyZW50RWxlbWVudCwgdGlsZSBhcyBFbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgdGhlIHN0b3JlZCBkYXRhIGZyb20gdGhlIHN5bmNocm9uaXplZCBjaHJvbWUgc3RvcmFnZSAoc3RvcmVkIGluIHlvdXIgdXNlciBkYXRhKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAvLyBDYWxsYmFjayB0aGF0IGlzIHJ1biBhZnRlciB0aGUgZGF0YSBoYXMgYmVlbiByZWFkXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKSA9PiBhbnkgPSAoKSA9PiB7fSkge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVzID0ge307XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgU3luY1N0b3JhZ2UuZ2V0KFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFN5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMsXG4gICAgICAgICAgICAgICAgU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX09SREVSLFxuICAgICAgICAgICAgICAgIFN5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lcyA9IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ10gIT09IHVuZGVmaW5lZCA/IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ10gOiB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyID1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfT1JERVIudGFnXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBGaWx0ZXJPcmRlci5SRUNFTlQ7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTi50YWddICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04udGFnXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkc7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlIHRvIHRoZSBzeW5jaHJvbml6ZWQgY2hyb21lIHN0b3JhZ2UgKHN0b3JlZCBpbiB5b3VyIHVzZXIgZGF0YSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLy8gQ2FsbGJhY2sgdGhhdCBpcyBydW4gYWZ0ZXIgdGhlIGRhdGEgaGFzIGJlZW4gd3JpdHRlblxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKSA9PiBhbnkgPSAoKSA9PiB7fSkge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgU3luY1N0b3JhZ2Uuc2V0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ106IHRoaXMuZ2FtZXMsXG4gICAgICAgICAgICAgICAgW1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9PUkRFUi50YWddOiB0aGlzLm9yZGVyLFxuICAgICAgICAgICAgICAgIFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLnRhZ106IHRoaXMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdmFyaWV0eSBvZiBldmVudHMgdG8gdGhlIGZpbHRlciBiYXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXG4gICAgICovXG4gICAgYWRkRmlsdGVyQmFyRXZlbnRzKCkge1xuICAgICAgICAvLyBXaGVuIHRoZSBvcmRlciBpcyBjaGFuZ2VkLCBzZXQgaXQgaW4gdGhlIHN0b3JhZ2VcbiAgICAgICAgdGhpcy5zZWxlY3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyID0gcGFyc2VJbnQodGhpcy5zZWxlY3QuZ2V0KClbMF0pIGFzIEZpbHRlck9yZGVyO1xuICAgICAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXaGVuIHRoZSBzaG93IGFsbCBjaGVja2JveCBpcyBjbGlja2VkLCB0b2dnbGUgdGhlIHNob3dBbGwgdmFyaWFibGUgYW5kIHVwZGF0ZSB0aGUgZ2FtZXNcbiAgICAgICAgdGhpcy5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbCA9ICh0aGlzLmNoZWNrYm94IGFzIGFueSkuY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsR2FtZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyMnICsgdGhpcy5maWx0ZXJCYXIuaWQgKyAnLWRpcmVjdGlvbidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzb3J0IGRpcmVjdGlvblxuICAgICAgICBkaXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnREaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVTb3J0RGlyZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyMnICsgdGhpcy5maWx0ZXJCYXIuaWQgKyAnLWRpcmVjdGlvbidcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkRFU0NFTkRJTkc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZXNjZW5kaW5nJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhc2NlbmRpbmcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkc7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhc2NlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NlbmRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIHN0b3BwZWQsIGRlc3Ryb3lzIG5lY2Vzc2FyeSBwYXJ0c1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgZ2FtZSBsaXN0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzb3J0IG9yZGVyLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBzb3J0R2FtZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSAoQXJyYXkuZnJvbSh0aGlzLmdhbWVUaWxlcykgYXMgRWxlbWVudFtdKS5tYXAoXG4gICAgICAgICAgICAoZSkgPT4gZS5wYXJlbnRFbGVtZW50XG4gICAgICAgICk7IC8vIEdldCBhbGwgd3JhcHBlcnMgYXMgYW4gYXJyYXlcbiAgICAgICAgYXJyID0gYXJyLnNvcnQoRmlsdGVyT3JkZXIuZ2V0U29ydGVyKHRoaXMub3JkZXIpIGFzIGFueSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkcpIHtcbiAgICAgICAgICAgIGFyciA9IGFyci5yZXZlcnNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhcnIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucHJlcGVuZChlbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgZXZlcnkgc2Vjb25kLCBjcmVhdGVzIGFuZCB1cGRhdGVzIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWwuaXNJbkhvbWUoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcuQ1ZWWGZjLllZeTNaYicpO1xuICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5pZCA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwib3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJFQ0VOVH1cIj4ke0xhbmd1YWdlLmdldChcbiAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnktZmlsdGVyLnJlY2VudCdcbiAgICAgICAgICAgICAgICApfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyT3JkZXIuQUxQSEFCRVRJQ0FMXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCI+JHtMYW5ndWFnZS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5LWZpbHRlci5hbHBoYWJldGljYWwnXG4gICAgICAgICAgICAgICAgKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJBTkRPTX1cIj4ke0xhbmd1YWdlLmdldChcbiAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnktZmlsdGVyLnJhbmRvbSdcbiAgICAgICAgICAgICAgICApfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9JyR7dGhpcy5maWx0ZXJCYXIuaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJy1kaXJlY3Rpb24nfScgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBhc2NlbmRpbmcgc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHByZXR0eSwgY2hlY2tib3ggfSA9IG5ldyBDaGVja2JveChcbiAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdsaWJyYXJ5LWZpbHRlci5zaG93LWhpZGRlbicpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuc2V0QmlnZ2VyKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTaGFwZShDaGVja2JveFNoYXBlLkNVUlZFRClcbiAgICAgICAgICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgICAgICAgICAgcHJldHR5LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfZmlsdGVyYmFyLWNoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIuYXBwZW5kQ2hpbGQocHJldHR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94ID0gY2hlY2tib3g7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lVGlsZXMgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5HcUxpNGQnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJCYXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBbGxXcmFwcGVycygpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3R5bGUgdGhlIGN1c3RvbSBzZWxlY3QgYm94IGluIHRoZSBmaWx0ZXIgYmFyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcbiAgICAgICAgICAgICAgICAgICAgeyBwbGFjZWhvbGRlcjogRmlsdGVyT3JkZXIuUkVDRU5UIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Quc2V0KHRoaXMub3JkZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWx0ZXJCYXJFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEaWZmZXJlbnQgdHlwZXMgb2YgZmlsdGVyaW5nLCByZXByZXNlbnRlZCBhcyBudW1iZXJzXG4gKlxuICogQGV4cG9ydCB0aGUgRmlsdGVyT3JkZXIgdHlwZVxuICogQGNsYXNzIEZpbHRlck9yZGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWx0ZXJPcmRlciB7XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBTdGFkaWEgc29ydGluZywgcmVjZW50L25ldyBnYW1lcy5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgUkVDRU5UID0gMDtcblxuICAgIC8qKlxuICAgICAqIEFscGhhYmV0aWNhbCBvcmRlci5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgQUxQSEFCRVRJQ0FMID0gMTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSYW5kb20gb3JkZXIuXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXG4gICAgICovXG4gICAgc3RhdGljIFJBTkRPTSA9IDI7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNvcnRpbmcgbWV0aG9kIG9mIHRoZSBpbnB1dGVkIG9yZGVyLlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm5zIGEgZnVuY3Rpb24gc29ydGluZyBnYW1lcyBieSB0aGUgaW5wdXRlZCBvcmRlci5cbiAgICAgKiBAcGFyYW0ge0ZpbHRlck9yZGVyfSBvcmRlclxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTb3J0ZXIob3JkZXI6IEZpbHRlck9yZGVyKTogRnVuY3Rpb24ge1xuICAgICAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuUkVDRU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRSZWNlbnQ7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTFBIQUJFVElDQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEFscGhhYmV0aWNhbDtcblxuICAgICAgICAgICAgY2FzZSB0aGlzLlJBTkRPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0UmFuZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCBieSByZWNlbnQgZ2FtZXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgKiBAcGFyYW0geyp9IGJcbiAgICAgKiBAcmV0dXJucyBudW1iZXIgcmVwcmVzZW50aW5nIHdoaWNoIHBhcmFtZXRlciBpcyB3aGVyZS5cbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBzb3J0UmVjZW50KGE6IGFueSwgYjogYW55KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCBhbHBoYWJldGljYWxseS5cbiAgICAgKiBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IGFcbiAgICAgKiBAcGFyYW0geyp9IGJcbiAgICAgKiBAcmV0dXJucyBudW1iZXIgcmVwcmVzZW50aW5nIHdoaWNoIHBhcmFtZXRlciBpcyB3aGVyZS5cbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBzb3J0QWxwaGFiZXRpY2FsKGE6IGFueSwgYjogYW55KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbmFtZUEgPSBhLmdldEF0dHJpYnV0ZSgnZ2FtZS1uYW1lJyk7XG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xuXG4gICAgICAgIGlmIChuYW1lQSA9PT0gdW5kZWZpbmVkIHx8IG5hbWVCID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hbWVBLmxvY2FsZUNvbXBhcmUobmFtZUIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHNvcnRSYW5kb20oYTogYW55LCBiOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIpIC0gMTtcbiAgICB9XG59XG5cbi8qKlxuICogRW51bSBjb250YWluaW5nIGRpZmZlcmVudCBvcmRlciBkaXJlY3Rpb25zXG4gKlxuICogQGV4cG9ydCB0aGUgT3JkZXJEaXJlY3Rpb24gdHlwZS5cbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBlbnVtIE9yZGVyRGlyZWN0aW9uIHtcbiAgICBBU0NFTkRJTkcsXG4gICAgREVTQ0VORElORyxcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS9VSUNvbXBvbmVudCc7XG5pbXBvcnQgJy4vc3R5bGVzL05ldHdvcmtNb25pdG9yLnNjc3MnO1xuXG4vLyBJbXBvcnQgdGhlIE1vbml0b3IgcnVubmFibGUgYXMgYSByYXcgc3RyaW5nXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcnVubmFibGUgZnJvbSAnIXJhdy1sb2FkZXIhLi4vTW9uaXRvclJ1bm5hYmxlJztcbmltcG9ydCB7IENoZWNrYm94LCBDaGVja2JveEFuaW1hdGlvbiB9IGZyb20gJy4uL3VpL0NoZWNrYm94JztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XG5cbmNvbnN0IHsgY2hyb21lLCBSVENQZWVyQ29ubmVjdGlvbiB9ID0gKHdpbmRvdyBhcyBhbnkpO1xuXG4vKipcbiAqIEEgbmV0d29yayBtb25pdG9yIGFsbG93aW5nIHVzZXJzIHRvIHNlZSB0aGVpciBuZXR3b3JrIHN0YXRpc3RpY3Mgd2hpbGUgcGxheWluZyBhIGdhbWUuXG4gKlxuICogQGV4cG9ydCB0aGUgTmV0d29ya01vbml0b3IgdHlwZS5cbiAqIEBjbGFzcyBOZXR3b3JrTW9uaXRvclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIE5ldHdvcmtNb25pdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICduZXR3b3JrLW1vbml0b3InO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRhYiBlbGVtZW50LlxuICAgICAqL1xuICAgIHRhYkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1vbml0b3IgZWxlbWVudC5cbiAgICAgKi9cbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBbW1VJQ29tcG9uZW50XV0gdXNlZCB0byBkaXNwbGF5IHRoZSB0YWIuXG4gICAgICovXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXG4gICAgICovXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcbiAgICBcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBjb21wb25lbnQgaXMgYWN0aXZlIG9yIG5vdC5cbiAgICAgKi9cbiAgICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIG1vbml0b3IgaXMgb3BlbiBvciBub3QuXG4gICAgICovXG4gICAgbW9uaXRvck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrLW1vbml0b3InKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydFJ1bm5hYmxlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmlzaWJsZSBuZXR3b3JrIHN0YXRpc3RpY3MuXG4gICAgICovXG4gICAgdmlzaWJsZTogYW55ID0ge1xuICAgICAgICAndGltZSc6IHRydWUsXG4gICAgICAgICdyZXNvbHV0aW9uJzogdHJ1ZSxcbiAgICAgICAgJ0ZQUyc6IHRydWUsXG4gICAgICAgICdsYXRlbmN5JzogdHJ1ZSxcbiAgICAgICAgJ2NvZGVjJzogdHJ1ZSxcbiAgICAgICAgJ3RyYWZmaWMnOiB0cnVlLFxuICAgICAgICAnY3VycmVudC10cmFmZmljJzogdHJ1ZSxcbiAgICAgICAgJ2F2ZXJhZ2UtdHJhZmZpYyc6IHRydWUsXG4gICAgICAgICdwYWNrZXRzLWxvc3QnOiB0cnVlLFxuICAgICAgICAnYXZlcmFnZS1wYWNrZXQtbG9zcyc6IHRydWUsXG4gICAgICAgICdqaXR0ZXItYnVmZmVyJzogdHJ1ZSxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV2hpY2ggb3JkZXIgdGhlIG5ldHdvcmsgc3RhdGlzdGljcyBzaG93IHVwIGluLlxuICAgICAqL1xuICAgIG9yZGVyTWFwOiBhbnkgPSBbXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ3Jlc29sdXRpb24nLFxuICAgICAgICAnRlBTJyxcbiAgICAgICAgJ2xhdGVuY3knLFxuICAgICAgICAnY29kZWMnLFxuICAgICAgICAndHJhZmZpYycsXG4gICAgICAgICdjdXJyZW50LXRyYWZmaWMnLFxuICAgICAgICAnYXZlcmFnZS10cmFmZmljJyxcbiAgICAgICAgJ3BhY2tldHMtbG9zdCcsXG4gICAgICAgICdhdmVyYWdlLXBhY2tldC1sb3NzJyxcbiAgICAgICAgJ2ppdHRlci1idWZmZXInXG4gICAgXVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV0uXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXG4gICAgICovXG4gICAgY3JlYXRlVUkoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IubmFtZScpLFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nQ1R2RFhkIFFBQXlXZCBGankwNWQgaXZXVWhjIFFTREh5YyBycGdaemMgUmt5SDFlIHN0YWRpYXBsdXNfYnV0dG9uIHN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdG9nZ2xlLWJ1dHRvbicgaWQ9JyR7dGhpcy5pZH0tdG9nZ2xlYnV0dG9uJz5OZXR3b3JrIE1vbml0b3I8L2Rpdj5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxoNj4ke0xhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLmhlYWRpbmctdmlzaWJsZScpfTwvaDY+XG4gICAgICAgICAgICA8dWwgaWQ9JyR7dGhpcy5pZH0tdmlzaWJsZWxpc3QnPjwvdWw+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8cCBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCc+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5XaHkgaXMgbXkgbmV0d29yayBzcGVlZCBzbyBtdWNoIGxvd2VyIHRoYW4gbm9ybWFsPzwvc3Ryb25nPjwvYnI+PC9icj5cbiAgICAgICAgICAgICAgICBUaGUgc3RhdGlzdGljcyBzaG93biBpbiB0aGUgbmV0d29yayBtb25pdG9yIGhhdmUgY2hhbmdlZCB1bml0cyBmcm9tIGJpdHMgKGIpIHRvIGJ5dGVzIChCKS4gVGhpcyBtZWFucyB0aGUgc3RhdGlzdGljcyBpbiAyLjIgYW5kIGxhdGVyIHdpbGwgYmUgYXJvdW5kIDEvOCBvZiB3aGF0IHRoZXkgd2VyZSBpbiAyLjEuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRhYicpO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy9uZXR3b3JrLW1vbml0b3Iuc3ZnJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKGljb24sIExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLmJ1dHRvbi1sYWJlbCcpLCB0aGlzLmlkICsgJy1idXR0b24nKTtcblxuICAgICAgICB0aGlzLmdldFN0b3JhZ2UoKCkgPT4geyB0aGlzLnVwZGF0ZVZpc2libGUoKSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgbmV0d29yayBtb25pdG9yIHJ1bm5hYmxlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXG4gICAgICovXG4gICAgc3RhcnRSdW5uYWJsZSgpIHtcbiAgICAgICAgVXRpbC5kZXNhbmRib3gocnVubmFibGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIG1vbml0b3IuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBvcGVuTW9uaXRvcigpIHtcbiAgICAgICAgdGhpcy5tb25pdG9yT3BlbiA9IHRydWU7XG4gICAgICAgIFV0aWwuZGVzYW5kYm94KCdTdGFkaWFQbHVzTW9uaXRvci5zdGFydCgpJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIG1vbml0b3IuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBjbG9zZU1vbml0b3IoKSB7XG4gICAgICAgIHRoaXMubW9uaXRvck9wZW4gPSBmYWxzZTtcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnN0b3AoKScpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcyB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNocm9tZSBzdG9yYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMuZ2V0KChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYocmVzdWx0W0xvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLnRhZ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSByZXN1bHRbTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMudGFnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY2hyb21lIHN0b3JhZ2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXG4gICAgICovXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLnNldCh0aGlzLnZpc2libGUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhcnRSdW5uYWJsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVVJKCk7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcblxuICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3IgPSBudWxsJyk7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHdoaWNoIHN0YXRpc3RpY3Mgc2hvdWxkIGJlIHZpc2libGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcbiAgICAgKi9cbiAgICB1cGRhdGVWaXNpYmxlKCkge1xuICAgICAgICBVdGlsLmRlc2FuZGJveChgU3RhZGlhUGx1c01vbml0b3Iuc2V0VmlzaWJsZSgke0pTT04uc3RyaW5naWZ5KHRoaXMudmlzaWJsZSl9KWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIG1ha2VzIHN1cmUgdG8gY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxuICAgICAqL1xuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZSBtZW51IGlzIG9wZW4gYWxyZWFkeS5cbiAgICAgICAgaWYgKFV0aWwuaXNNZW51T3BlbigpICYmIFV0aWwuaXNJbkdhbWUoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNyZWF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQub25PcGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnNldEVkaXRhYmxlKHRydWUpJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnNldEVkaXRhYmxlKGZhbHNlKScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy12aXNpYmxlbGlzdCcpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBrZXkgb2YgdGhpcy5vcmRlck1hcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBrZXkucmVwbGFjZSgvLS9nLCAnICcpLnNwbGl0KCcgJykubWFwKChuYW1lOnN0cmluZykgPT4gbmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpKS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBib29sZWFuID0gdGhpcy52aXNpYmxlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwcmV0dHksIGNoZWNrYm94fSA9IG5ldyBDaGVja2JveChuYW1lKS5zZXRCaWdnZXIodHJ1ZSkuc2V0QW5pbWF0aW9uKENoZWNrYm94QW5pbWF0aW9uLlNNT09USCkuYnVpbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldHR5LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHByZXR0eSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlW2tleV0gPSBjaGVja2JveC5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctdG9nZ2xlYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgdGhpcy5tb25pdG9yT3Blbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5tb25pdG9yT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9uaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nLCB0aGlzLm1vbml0b3JPcGVuKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW5UYWIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmJ1dHRvbi5jb250YWluZXIuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbXBvbmVudC5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jbG9zZVRhYigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighVXRpbC5pc0luR2FtZSgpICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHk+LnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3InKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XG4gICAgc3RhdGljIFdJTkRPV1M6IHN0cmluZyA9IFwiV2luMzJcIjtcbiAgICBzdGF0aWMgTUFDT1M6IHN0cmluZyA9IFwiTWFjSW50ZWxcIjtcbn1cblxuZXhwb3J0IGNsYXNzIFBhc3RlRnJvbUNsaXBib2FyZCBleHRlbmRzIENvbXBvbmVudFxue1xuICAgIHRhZzogc3RyaW5nICA9ICdwYXN0ZS1mcm9tLWNsaXBib2FyZCc7XG5cbiAgICBwcm90ZWN0ZWQgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uY2UgZXZlcnkgc2Vjb25kLlxuICAgICAqL1xuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vblVwZGF0ZSgpO1xuXG4gICAgICAgIGlmIChVdGlsLmlzSW5HYW1lKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcblxuICAgICAgICAgICAgaWYgKGlucHV0ICE9IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSB0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIGtleWRvd25FdmVudExpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGxldCBjdHJsS2V5OiBib29sZWFuO1xuICAgICAgICBzd2l0Y2gobmF2aWdhdG9yLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLldJTkRPV1M6XG4gICAgICAgICAgICAgICAgY3RybEtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0uTUFDT1M6XG4gICAgICAgICAgICAgICAgY3RybEtleSA9IGV2ZW50Lm1ldGFLZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY3RybEtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3RybEtleSAmJiAnS2V5VicgPT0gZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4oZnVuY3Rpb24oZGF0YTogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IElucHV0RXZlbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dEV2ZW50SW5pdFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiaW5zZXJ0VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBvc2luZzogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVUlFdmVudEluaXRcbiAgICAgICAgICAgICAgICAgICAgdmlldzogbnVsbCxcblxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudEluaXRcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XG5pbXBvcnQgJy4vc3R5bGVzL1JhdGluZ3Muc2Nzcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcblxuLyoqXG4gKiBBIGNvbXBvbmVudCBhZGRpbmcgTWV0YWNyaXRpYyByYXRpbmdzIHRvIGV2ZXJ5IFN0YWRpYSBnYW1lLlxuICpcbiAqIEBleHBvcnQgdGhlIFJhdGluZ3MgdHlwZVxuICogQGNsYXNzIFJhdGluZ3NcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBjbGFzcyBSYXRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cbiAgICAgKi9cbiAgICB0YWc6IHN0cmluZyA9ICdyYXRpbmdzJztcblxuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbmcgZWxlbWVudC5cbiAgICAgKi9cbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgZGF0YWJhc2UuXG4gICAgICovXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIFN0YWRpYUdhbWVEQiBVVUlEIE1hcC5cbiAgICAgKi9cbiAgICB1dWlkTWFwOiBXZWJEYXRhYmFzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBmcm9tIGVhY2ggYm91bmQgaW4gd2hpY2ggYSBnYW1lIHdpbGwgZ2V0IDAgb3IgNSBzdGFycy5cbiAgICAgKi9cbiAgICBncmFjZUFtb3VudDogbnVtYmVyID0gMTA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3RhcnMgdG8gYXdhcmQuXG4gICAgICovXG4gICAgbWF4U3RhcnMgPSA1O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2U6IFdlYkRhdGFiYXNlLCB1dWlkTWFwOiBXZWJEYXRhYmFzZSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSByYXRpbmcgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXG4gICAgICovXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3JhdGluZycsICdtYXRlcmlhbC1pY29ucycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGdhbWUgVVVJRC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRoZSBnYW1lIFVVSUQgYXMgYSBzdHJpbmcuXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3NcbiAgICAgKi9cbiAgICBnZXRVVUlEKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5ocmVmLnN1YnN0cmluZygnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoLCAnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoICsgMzYpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgcmF0aW5nLCBmZXRjaGluZyBpdCBmcm9tIHRoZSBkYXRhYmFzZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXG4gICAgICovXG4gICAgdXBkYXRlUmF0aW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1dWlkID0gdGhpcy5nZXRVVUlEKCk7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnV1aWRNYXAuZ2V0Q29ubmVjdGlvbigpWyd1dWlkTWFwJ107XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW3V1aWRdXTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJhdGluZycsIGVudHJ5WzZdKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgaG93IG1hbnkgc3RhcnMgYSBnYW1lIHNob3VsZCBoYXZlIGJhc2VkIG9uIGl0J3MgcmF0aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGluZyB0aGUgZ2FtZSdzIHJhdGluZy5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IGFuIGFycmF5IG9mIGljb24gc3RyaW5ncywgYmVpbmcgZWl0aGVyIFwic3RhclwiLCBcInN0YXJfaGFsZlwiIG9yIFwic3Rhcl9vdXRsaW5lXCIuXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3MgXG4gICAgICovXG4gICAgZ2V0U3RhcnMocmF0aW5nOiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IG91dHB1dFN0YXJzID0gW107XG5cbiAgICAgICAgLy8gQ2xhbXBzIHRoZSByYXRpbmcgdG8gdmFsdWVzIGJldHdlZW4gMCBhbmQgMSxcbiAgICAgICAgLy8gd2hlcmUgKDAgKyBncmFjZUFtb3VudCkgaXMgMCBhbmQgKDEwMCAtIGdyYWNlQW1vdW50KSBpcyAxXG4gICAgICAgIGNvbnN0IGNsYW1wZWRSID0gKHJhdGluZyAvIDEwMCkgKiAoMSArICh0aGlzLmdyYWNlQW1vdW50IC8gMTAwKSAqIDIpIC0gKHRoaXMuZ3JhY2VBbW91bnQgLyAxMDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCByID0gY2xhbXBlZFI7IGkgPCB0aGlzLm1heFN0YXJzOyBpICs9IDEsIHIgLT0gMSAvIHRoaXMubWF4U3RhcnMpIHtcbiAgICAgICAgICAgIGlmIChyID49IDEgLyB0aGlzLm1heFN0YXJzKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0U3RhcnMucHVzaCgnc3RhcicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyID49IDApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRTdGFycy5wdXNoKCdzdGFyX2hhbGYnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0U3RhcnMucHVzaCgnc3Rhcl9vdXRsaW5lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0U3RhcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcbiAgICAgKi9cbiAgICBvblN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIENsb2NrXG4gICAgICovXG4gICAgb25TdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgcmF0aW5nIGVsZW1lbnQgdG8gbWFrZSBzdXJlIGl0IGFsd2F5cyBkaXNwbGF5cyB0aGUgY29ycmVjdCB2YWx1ZS5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgaWYoVXRpbC5pc0luU3RvcmVEZXRhaWwoKSkge1xuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbmcgPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJhdGluZycpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFycyA9IHRoaXMuZ2V0U3RhcnMocmF0aW5nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocmF0aW5nID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignLlp6QkpTYiA+IC5CTVVuZmQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihuZXh0U2libGluZyA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCwgbmV4dFNpYmxpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0YXJzLmpvaW4oJyAnKX1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhZGlhcGx1c19yYXRpbmctdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmF0aW5nfSAvIDEwMCAoJHtMYW5ndWFnZS5nZXQoJ3JhdGluZ3Muc291cmNlLW5hbWUnKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQgJy4vc3R5bGVzL1N0b3JlRmlsdGVyLnNjc3MnO1xuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcblxuLyoqXG4gKiBBIHNlYXJjaCBiYXIgZGlzcGxheWVkIG9uIHRoZSBzdG9yZSBwYWdlIG9mIFN0YWRpYS5cbiAqXG4gKiBAZXhwb3J0IHRoZSBTdG9yZUZpbHRlciB0eXBlLlxuICogQGNsYXNzIFN0b3JlRmlsdGVyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgY2xhc3MgU3RvcmVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ3N0b3JlLWZpbHRlcic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIGJhciBlbGVtZW50LlxuICAgICAqL1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQSB0ZW1wbGF0ZSBlbGVtZW50IGZvciBpbmRpdmlkdWFsIGdhbWVzIGluIHRoZSBzZWFyY2ggYm94LlxuICAgICAqL1xuICAgIGdhbWVUZW1wbGF0ZTogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgU3RhZGlhR2FtZURCIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIGRhdGFiYXNlOiBXZWJEYXRhYmFzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgVVVJRCBNYXAuXG4gICAgICovXG4gICAgdXVpZE1hcDogV2ViRGF0YWJhc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBhbGwgZ2FtZSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBnYW1lczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCBpbnB1dC5cbiAgICAgKi9cbiAgICBzZWFyY2hGaWVsZDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogV2ViRGF0YWJhc2UsIHV1aWRNYXA6IFdlYkRhdGFiYXNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBzZWFyY2ggYmFyIGFuZCBuZWNlc3NhcnkgZWxlbWVudHMvdmFyaWFibGVzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFN0b3JlRmlsdGVyXG4gICAgICovXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q29ubmVjdGlvbigpWydkYXRhJ107XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXInKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jhcic+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwiJHtjb25uZWN0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbm5lY3Rpb24ubGVuZ3RoKV1bMV19Li4uXCIgaWQ9JyR7dGhpcy5pZH0tc2VhcmNoJz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZXMnIGlkPScke3RoaXMuaWR9LWdhbWVzJz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBjb25uZWN0aW9uW21hcFtrZXldXTtcblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZScpO1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8zNjAnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RldGFpbCc+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz0nbmFtZSc+TG9yZW0gSXBzdW08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCB0YWdzJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCBrZXkpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIGVudHJ5WzFdKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRhZ3MnLCBlbnRyeVsyXSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb21cIiBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NBcnIgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICBpZihsb2NBcnIubGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgICAgIHVybCA9IGxvY0Fyci5zbGljZSgwLCA1KS5qb2luKCcvJykgKyAnLyc7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoICsgKHVybC5lbmRzV2l0aCgnLycpID8gLTEgOiAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdG9yZUlkID0gZW50cnlbMF0ubWF0Y2goL2h0dHBzOlxcL1xcL3N0YWRpYS5nb29nbGUuY29tXFwvc3RvcmVcXC9kZXRhaWxzXFwvKFswLTlhLXovXSspLylbMV07XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCArICcvc3RvcmUvZGV0YWlscy8nICsgc3RvcmVJZCk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbWcnLCAnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tLycgKyBlbnRyeVswXS5tYXRjaCgvKGltYWdlc1xcL3Bvc3RlcnNcXC9bYS16MC05Xy4tXSsucG5nKS9nKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgaW5wdXQgZXZlbnRzIHRvIHRoZSBzZWFyY2ggYmFyLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFN0b3JlRmlsdGVyXG4gICAgICovXG4gICAgYWRkRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2goKHRoaXMuc2VhcmNoRmllbGQgYXMgYW55KS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBnYW1lIGxpc3QgZm9yIGEgc3BlY2lmaWMgc3RyaW5nIGFuZCBzaG93cyB3aGljaGV2ZXIgZ2FtZXMgZml0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAbWVtYmVyb2YgU3RvcmVGaWx0ZXJcbiAgICAgKi9cbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVzLmZvckVhY2goKGdhbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGdhbWUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nLCBxdWVyeS5sZW5ndGggPiAwICYmIG5hbWUuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcbiAgICAgKi9cbiAgICBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRoZSBzZWFyY2ggYmFyIG9ubHkgZXhpc3RzIHdoZW4gaXQncyBzdXBwb3NlZCB0byBhbmQgd29ya3MgcHJvcGVybHkgZXZlbiBpZiBhY2NpZGVudGFsbHkgZGVzdHJveWVkLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xuICAgICAqL1xuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICBpZihVdGlsLmlzSW5TdG9yZSgpKSB7XG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5uV210TGQnKTtcblxuICAgICAgICAgICAgICAgIGlmKGNvbnRhaW5lciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy1nYW1lcycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsPi5uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IGdhbWUucXVlcnlTZWxlY3RvcignLmRldGFpbD4udGFncycpO1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmlubmVySFRNTCA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZ3MnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRmllbGQgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCArICctc2VhcmNoJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWkvVUlDb21wb25lbnQnO1xuaW1wb3J0ICcuL3N0eWxlcy9VSVRhYi5zY3NzJztcbmltcG9ydCAnLi4vdWkvc3R5bGVzL0J1dHRvbi5zY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL0dyaWQuc2Nzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XG5cbmNvbnN0IGNocm9tZTogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcblxuLyoqXG4gKiBBIHRhYiBhbmQgYnV0dG9uIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXG4gKlxuICogQGV4cG9ydCB0aGUgVUlUYWIgdHlwZS5cbiAqIEBjbGFzcyBVSVRhYlxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGNsYXNzIFVJVGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29tcG9uZW50LlxuICAgICAqL1xuICAgIHRhZzogc3RyaW5nID0gJ3VpLXRhYic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFiIGVsZW1lbnQuXG4gICAgICovXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUNvbXBvbmVudF1dIHVzZWQgdG8gZGlzcGxheSB0aGUgdGFiLlxuICAgICAqL1xuICAgIGNvbXBvbmVudDogVUlDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gb3BlbiB0aGUgdGFiLlxuICAgICAqL1xuICAgIGJ1dHRvbjogVUlCdXR0b247XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbW91bnQgb2Ygcm93cywgZWFjaCBjb250YWluaW5nIGNvbnRlbnQuXG4gICAgICovXG4gICAgcm93czogVUlSb3dbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIGZ1biBNT1REIG1lc3NhZ2VzIGFkZGVkIHRvIHRoZSB0YWIuXG4gICAgICovXG4gICAgbW90ZExpc3Q6IHN0cmluZ1tdID0gW1xuICAgICAgICAnPGltZyBzcmM9XCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbW9qaXMvNjM2MjI3ODY0MDc2NzQ2NzcyLnBuZz92PTFcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4OyB3aWR0aDogMjRweFwiPicsXG4gICAgICAgIFwiRG9uJ3QgbG9vayBoZXJlLCBsb29rIGJlbG93IVwiLFxuICAgICAgICAnUmVhbGl0eSBjYW4gYmUgd2hhdGV2ZXIgSSB3YW50LicsXG4gICAgICAgICdJZiB5b3UgYXNrIG5pY2VseSwgU3RhZGlhIG1pZ2h0IGV2ZW4gZG8geW91ciBsYXVuZHJ5IGZvciB5b3UhJyxcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIGFza2luZyBjdXN0b21lciBzdXBwb3J0PycsXG4gICAgICAgICdGb2xsb3cgdS9tYWZyYW5zIG9uIFJlZGRpdCEnLFxuICAgICAgICAnU3RhZGlhKywgbGlrZSBHb29nbGUrIGJ1dCBzdGlsbCBhbGl2ZS4nLFxuICAgICAgICAnU3RhZGlhIGlzIERPQSwgYmVsaWV2ZSBtZS4nLFxuICAgICAgICAnR2V0IGEgbG9hZCBvZiB0aGlzIGd1eSwgdXNpbmcgY2hyb21lIGV4dGVuc2lvbnMgdG8gaW1wcm92ZSBoaXMgU3RhZGlhIGV4cGVyaWVuY2UuJyxcbiAgICAgICAgXCJJJ20gdGVsbGluZyB5b3UsIGRvbid0IHRydXN0IHRoYXQgZ3V5LiBZb3Uga25vdywgdGhlIGd1eS5cIixcbiAgICAgICAgJ1Nob3V0b3V0IHRvIENocmlzIGFuZCBHcmFjZSEnLFxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgU3BsaXRsaW5ncyB5ZXQ/JyxcbiAgICAgICAgJ0Fsd2F5cyBjaGVjayB0aGUgcmF0aW5ncyBiZWZvcmUgeW91IGJ1eSBhIG5ldyBnYW1lLicsXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBHZUZvcmNlIE5vdz8nLFxuICAgICAgICAnQSBob3QgZG9nIGlzIGRlZmluaXRlbHkgbm90IGEgc2FuZHdpY2guJyxcbiAgICAgICAgJ0lkayBhYm91dCB5b3UsIGJ1dCBJIHJlYWxseSB3YW50IG9uZSBvZiB0aG9zZSBmYW5jeSBzbWFydCB0b2lsZXRzLicsXG4gICAgICAgICdDaHJpcyBpcyB0eXBpbmcgZ3V5cyEhJyxcbiAgICAgICAgJ0RvZXMgYW55b25lIGhhdmUgYSBidWRkeSBwYXNzIEkgY291bGQgYm9ycm93PycsXG4gICAgICAgICdJIHBhaWQgJDEzOSBmb3IgdGhpcz8nLFxuICAgICAgICAnSXMgRm9ydG5pdGUgb24gU3RhZGlhIHlldD8nLFxuICAgICAgICAndS9iYWNvbnJ1bGVzIHdhcyB0aGUgZmlyc3QgdG8gc2VlIDRrIScsXG4gICAgICAgICdTbyBkaWQgdGhlIHBlcnNvbiB0aGF0IG1hZGUgdGhlIHN0YWRpYSsgZXh0ZW5zaW9uIGdpdmUgdXAgb24gc3RhZGlhPycsXG4gICAgICAgICdJdFxcJ3MgbGlrZSBHRk4sIGJ1dCB3aXRob3V0IGFueSBwdWxsZWQgZ2FtZXMuJyxcbiAgICAgICAgJ0xvbmcgbGl2ZSBHZWZvcmNlIE5vdysnLFxuICAgICAgICAnU3BlbmQgeW91ciBtb25leSBiZWZvcmUgaXQgcnVucyBvdXQuJyxcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV1cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxuICAgICAgICAgICAgJ1N0YWRpYSsnLFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDxpIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtOyBtYXJnaW4tYm90dG9tOiA1cmVtOyBkaXNwbGF5OiBibG9ja1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3RkTGlzdFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vdGRMaXN0Lmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB0aGlzLmlkLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy9zdGFkaWFwbHVzLnN2ZycpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihpY29uLCBMYW5ndWFnZS5nZXQoJ3VpLXRhYi5idXR0b24tbGFiZWwnKSwgdGhpcy5pZCArICctYnV0dG9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGFsbCByb3dzIHRoYXQgZG9uJ3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbG9hZF1cbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcbiAgICAgKi9cbiAgICBjcmVhdGVSb3dzKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgaWYoIXJvdy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQodGhpcy5jb21wb25lbnQsIGkgPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgcm93LnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbG9hZCBhbGwgcm93c1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgcmVsb2FkUm93cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHJvdy5yZWxvYWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcm93IHRvIHRoZSBsaXN0LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgYWRkUm93KHJvdzogVUlSb3cpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbmQgdW5sb2FkIGFsbCByb3dzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIGNsZWFyUm93cygpOiB2b2lkIHtcbiAgICAgICAgZm9yKGNvbnN0IHJvdyBvZiB0aGlzLnJvd3MpIHtcbiAgICAgICAgICAgIHJvdy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXG4gICAgICovXG4gICAgb25TdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxuICAgICAqIFxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxuICAgICAqL1xuICAgIG9uU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICByb3cuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcbiAgICAgKi9cbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gT25seSBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGUgbWVudSBpcyBvcGVuIGFscmVhZHkuXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5leGlzdHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jcmVhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuVGFiKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5jb21wb25lbnQub3Blbikge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuY2xvc2VUYWIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Nsb2NrLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRm9yY2VDb2RlYy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlUmVzb2x1dGlvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xpYnJhcnlGaWx0ZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9OZXR3b3JrTW9uaXRvci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JhdGluZ3Muc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdG9yZUZpbHRlci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1VJVGFiLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsJztcbmltcG9ydCAnLi9zdHlsZXMvR2xvYmFsLnNjc3MnXG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vQ29tcG9uZW50TG9hZGVyJztcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9jb21wb25lbnRzL0Nsb2NrJ1xuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL2NvbXBvbmVudHMvVUlUYWInXG5pbXBvcnQgeyBGb3JjZUNvZGVjIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcmNlQ29kZWMnXG5pbXBvcnQgeyBGb3JjZVJlc29sdXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvRm9yY2VSZXNvbHV0aW9uJ1xuaW1wb3J0IHsgTmV0d29ya01vbml0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvTmV0d29ya01vbml0b3InO1xuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuL3VpL1NuYWNrYmFyJztcbmltcG9ydCB7IExpYnJhcnlGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlcic7XG5pbXBvcnQgeyBXZWJEYXRhYmFzZSB9IGZyb20gJy4vV2ViRGF0YWJhc2UnO1xuaW1wb3J0IHsgU3RvcmVGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RvcmVGaWx0ZXInO1xuaW1wb3J0IHsgUmF0aW5ncyB9IGZyb20gJy4vY29tcG9uZW50cy9SYXRpbmdzJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBBbGxvd1dpbmRvd2VkTW9kZSB9IGZyb20gJy4vY29tcG9uZW50cy9BbGxvd1dpbmRvd2VkTW9kZSc7XG5pbXBvcnQgeyBQYXN0ZUZyb21DbGlwYm9hcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvUGFzdGVGcm9tQ2xpcGJvYXJkJ1xuXG4vLyBBbHdheXMgbG9hZCBsYW5ndWFnZXMgZmlyc3Rcbkxhbmd1YWdlLmluaXQoKTtcbkxhbmd1YWdlLmxvYWQoKTtcblxuY29uc3QgbG9hZGVyID0gbmV3IENvbXBvbmVudExvYWRlcigpO1xuY29uc3Qgc25hY2tiYXIgPSBuZXcgU25hY2tiYXIoKTtcbmNvbnN0IHRhYiA9IG5ldyBVSVRhYigpO1xuXG5jb25zdCBkYXRhYmFzZSA9IG5ldyBXZWJEYXRhYmFzZSgnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tL2RhdGEvZ2FtZWRiLmpzb24nKTtcbmNvbnN0IHV1aWRNYXAgPSBuZXcgV2ViRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL3V1aWRtYXAuanNvbicpO1xuZGF0YWJhc2UuY29ubmVjdCgpO1xudXVpZE1hcC5jb25uZWN0KCk7XG5cbmxvYWRlci5yZWdpc3RlcihuZXcgQ2xvY2soKSk7XG5sb2FkZXIucmVnaXN0ZXIobmV3IExpYnJhcnlGaWx0ZXIoc25hY2tiYXIsIGRhdGFiYXNlLCB1dWlkTWFwKSk7XG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlQ29kZWModGFiLCBzbmFja2JhcikpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBGb3JjZVJlc29sdXRpb24odGFiLCBzbmFja2JhcikpO1xubG9hZGVyLnJlZ2lzdGVyKHRhYik7XG5sb2FkZXIucmVnaXN0ZXIobmV3IE5ldHdvcmtNb25pdG9yKCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBTdG9yZUZpbHRlcihkYXRhYmFzZSwgdXVpZE1hcCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBSYXRpbmdzKGRhdGFiYXNlLCB1dWlkTWFwKSk7XG5sb2FkZXIucmVnaXN0ZXIobmV3IEFsbG93V2luZG93ZWRNb2RlKCkpO1xubG9hZGVyLnJlZ2lzdGVyKG5ldyBQYXN0ZUZyb21DbGlwYm9hcmQoKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIFV0aWwubG9hZCgpO1xuICAgIHNuYWNrYmFyLmNyZWF0ZSgpO1xuICAgIGxvYWRlci5zdGFydCgpO1xufSkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dsb2JhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UeXBvZ3JhcGh5LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3gge1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIHNoYXBlOiBzdHJpbmcgPSBDaGVja2JveFNoYXBlLkRFRkFVTFQ7XG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nID0gQ2hlY2tib3hTdHlsZS5ERUZBVUxUO1xuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZztcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIGljb246IHN0cmluZztcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgYmlnZ2VyOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0U2hhcGUoc2hhcGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBzZXRTdHlsZShzdHlsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc2V0Qm9yZGVyKGJvcmRlcjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJvcmRlciA9IGJvcmRlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNldEljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0QmlnZ2VyKGJpZ2dlcjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJpZ2dlciA9IGJpZ2dlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvLyBBZGQgbWFpbiBjbGFzc2VzXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJldHR5JywgJ3AtZGVmYXVsdCcpO1xuXG4gICAgICAgIC8vIElmIHN0eWxlIGlzIG5vdCBkZWZhdWx0LCBhZGQgc3R5bGVcbiAgICAgICAgaWYodGhpcy5zaGFwZSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2hhcGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgc3R5bGUgaXMgbm90IGRlZmF1bHQsIGFkZCBzdHlsZVxuICAgICAgICBpZih0aGlzLnN0eWxlKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbmltYXRlZCwgYWRkIGFuaW1hdGlvblxuICAgICAgICBpZih0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBiaWdnZXJcbiAgICAgICAgaWYodGhpcy5iaWdnZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1iaWdnZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBib3JkZXJcbiAgICAgICAgaWYoIXRoaXMuYm9yZGVyKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3AtcGxhaW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBjaGVja2JveCBpbnB1dFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIC8vIEFkZCBzdGF0ZSBkaXZcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCgnc3RhdGUnKTtcblxuICAgICAgICAvLyBJZiBjb2xvcmVkLCBhZGQgY29sb3JcbiAgICAgICAgaWYodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGhhcyBpY29uLCBhZGQgaWNvblxuICAgICAgICBpZih0aGlzLmljb24pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1pY29uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9IHRoaXMuaWNvbjtcblxuICAgICAgICAgICAgc3RhdGUuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgbGFiZWxcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0aGlzLmxhYmVsO1xuICAgICAgICBzdGF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtwcmV0dHk6IGVsZW1lbnQsIGNoZWNrYm94fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFNoYXBlIHtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBDVVJWRUQ6IHN0cmluZyA9ICdwLWN1cnZlJztcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EOiBzdHJpbmcgPSAncC1yb3VuZCc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveFN0eWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBGSUxMOiBzdHJpbmcgPSAncC1maWxsJztcbiAgICBwdWJsaWMgc3RhdGljIFRISUNLOiBzdHJpbmcgPSAncC10aGljayc7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIEJMVUU6IHN0cmluZyA9ICdwLXByaW1hcnknO1xuICAgIHB1YmxpYyBzdGF0aWMgR1JFRU46IHN0cmluZyA9ICdwLXN1Y2Nlc3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgWUVMTE9XOiBzdHJpbmcgPSAncC13YXJuaW5nJztcbiAgICBwdWJsaWMgc3RhdGljIENZQU46IHN0cmluZyA9ICdwLWluZm8nO1xuICAgIHB1YmxpYyBzdGF0aWMgUkVEOiBzdHJpbmcgPSAncC1kYW5nZXInO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hBbmltYXRpb24ge1xuICAgIHB1YmxpYyBzdGF0aWMgU01PT1RIOiBzdHJpbmcgPSAncC1zbW9vdGgnO1xuICAgIHB1YmxpYyBzdGF0aWMgSkVMTFk6IHN0cmluZyA9ICdwLWplbGx5JztcbiAgICBwdWJsaWMgc3RhdGljIFRBREE6IHN0cmluZyA9ICdwLXRhZGEnO1xuICAgIHB1YmxpYyBzdGF0aWMgUk9UQVRFOiBzdHJpbmcgPSAncC1yb3RhdGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgUFVMU0U6IHN0cmluZyA9ICdwLXB1bHNlJztcbn0iLCJpbXBvcnQgU2xpbVNlbGVjdCBmcm9tICdzbGltLXNlbGVjdCc7XG5pbXBvcnQgJ3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzJztcbmltcG9ydCAnLi4vdWkvc3R5bGVzL1NlbGVjdC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdCB7XG4gICAgc2xpbXNlbGVjdDogU2xpbVNlbGVjdDtcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgb3B0aW9uczogU2VsZWN0T3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIG9wdGlvbnMuc3R5bGUgPSBvcHRpb25zLnN0eWxlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnN0eWxlIDogU2VsZWN0U3R5bGUuREFSSztcbiAgICAgICAgb3B0aW9ucy5vbkNoYW5nZSA9IG9wdGlvbnMub25DaGFuZ2UgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub25DaGFuZ2UgOiAoKSA9PiB7fTtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVDaGFuZ2UgPSBvcHRpb25zLmJlZm9yZUNoYW5nZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5iZWZvcmVDaGFuZ2UgOiAoKSA9PiB7fTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICdzdGFkaWFwbHVzX2Ryb3Bkb3duJyxcbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGVcbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2xpbXNlbGVjdCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIGVsZW1lbnRzL2NvbnRhaW5lcnNcbiAgICAgICAgICogaGF2ZSBiZWVuIGRlbGV0ZWQgd2l0aG91dCBwcm9wZXJseSBiZWluZyBkZXN0cm95ZWQuIEFzIFN0YWRpYVxuICAgICAgICAgKiBydW5zIGluIGEgdmlydHVhbCBET00sIHdlIGhhdmUgbm8gY29udHJvbCBvZiB3aGVuIHRoZSBET00gY2hhbmdlc1xuICAgICAgICAgKiB0aGVyZWZvcmUgd2UgY2FuJ3Qgc29sdmUgaXQgaW4gYSBwcm9wZXIgd2F5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBMZXQncyBqdXN0IGhvcGUgZ2FyYmFnZSBjb2xsZWN0aW9uIHRha2VzIGNhcmUgb2YgaXQuXG4gICAgICAgICAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0ID0gbmV3IFNsaW1TZWxlY3Qoe1xuICAgICAgICAgICAgICAgIHNlbGVjdDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRpb25zLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvcHRpb25zLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIGJlZm9yZU9uQ2hhbmdlOiBvcHRpb25zLmJlZm9yZUNoYW5nZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VsZWN0ZWQoKTtcbiAgICB9XG5cbiAgICBzZXQoLi4uaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIEp1c3QgaW4gY2FzZSBzbGltc2VsZWN0LnNldCBpcyBmYXN0ZXJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXQoaXRlbXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldERhdGEoaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpbXNlbGVjdC5zZWFyY2gocXVlcnkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaW1zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3RhZGlhcGx1c19kcm9wZG93bicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbGVjdFN0eWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIFNMSU1TRUxFQ1Q6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBTTElNU0VMRUNUX0xBUkdFOiBzdHJpbmcgPSAnc3R5bGUtc2xpbXNlbGVjdC1sYXJnZSc7XG4gICAgcHVibGljIHN0YXRpYyBMSUdIVDogc3RyaW5nID0gJ3N0eWxlLWxpZ2h0JztcbiAgICBwdWJsaWMgc3RhdGljIERBUks6IHN0cmluZyA9ICdzdHlsZS1kYXJrJztcbn1cblxuaW50ZXJmYWNlIFNlbGVjdE9wdGlvbnMge1xuICAgIHBsYWNlaG9sZGVyPzogYW55O1xuICAgIHN0eWxlPzogc3RyaW5nO1xuICAgIG9uQ2hhbmdlPzogKGluZm86IGFueSkgPT4gYW55O1xuICAgIGJlZm9yZUNoYW5nZT86IChpbmZvOiBhbnkpID0+IGFueTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMvU25hY2tiYXIuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBTbmFja2JhciB7XG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBsYWJlbDogRWxlbWVudDtcbiAgICBjbG9zZUJ1dHRvbjogRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyJyk7XG5cbiAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyLWxhYmVsJyk7XG5cbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywgJ3N0YWRpYXBsdXNfc25hY2tiYXItY2xvc2UnKTtcblxuICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xuICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZShsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgNTAwMClcbiAgICB9XG59IiwiaW1wb3J0IHsgVUlCdXR0b25Db250YWluZXIgfSBmcm9tIFwiLi9VSUJ1dHRvbkNvbnRhaW5lclwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBodG1sOiBzdHJpbmc7XG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBjb250YWluZXI6IFVJQnV0dG9uQ29udGFpbmVyO1xuICAgIGJ1dHRvbjogRWxlbWVudDtcblxuICAgIHN0YXRpYyBidXR0b25Db250YWluZXJzOiBVSUJ1dHRvbkNvbnRhaW5lcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmh0bWwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHlmbGJiXCIganNuYW1lPVwiclpIRVNkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIktFYUhvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiWDVwZW9lXCIganNuYW1lPVwicFlGaFVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ4ZHVveWYgdWlidXR0b24taWNvblwiIHNyYz1cIiR7aWNvbn1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhU0pWIHVpYnV0dG9uLXRpdGxlXCI+JHt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdQeWYxYmInLCAnc3RhZGlhcGx1c191aS1idXR0b24nKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdDVHZEWGQnLCAnUUFBeVdkJywgJ1BqcGFjJywgJ3pjTVlkJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBmb3IoY29uc3QgY29udGFpbmVyIG9mIFVJQnV0dG9uLmJ1dHRvbkNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lci5idXR0b25zLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFVJQnV0dG9uQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBVSUJ1dHRvbi5idXR0b25Db250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEJ1dHRvbih0aGlzKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBzZXRJY29uKGljb246IHN0cmluZykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpYnV0dG9uLWljb24nKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb24pO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aWJ1dHRvbi10aXRsZScpLmlubmVySFRNTCA9IHRpdGxlO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSAhPT0gbnVsbDtcbiAgICB9IFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVCdXR0b24odGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tIFwiLi9VSUJ1dHRvblwiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbkNvbnRhaW5lciB7XG4gICAgYnV0dG9uczogVUlCdXR0b25bXSA9IFtdO1xuICAgIGNvbnRhaW5lcjogRWxlbWVudDtcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGlkOiBzdHJpbmc7XG4gICAgd3JhcHBlcjogRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gJ2J1dHRvbi1jb250YWluZXItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTkpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMud3JhcHBlci5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdaZ1VNbycsICdzdGFkaWFwbHVzX3VpLWJ0bi13cmFwcGVyJyk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdFMFprOWInLCAnc3RhZGlhcGx1c191aS1idG4tY29udGFpbmVyJyk7XG4gICAgfVxuICAgIFxuICAgIGV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpICE9PSBudWxsO1xuICAgIH1cblxuICAgIGNyZWF0ZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpOyAvLyBSZXF1ZXJ5IGluIGNhc2UgdGhlIGNvbnRhaW5lciB3YXMgZGVsZXRlZFxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmKCFidXR0b24uZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZihjYWxsYmFjaylcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgYWRkQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5idXR0b25zLmluZGV4T2YoYnV0dG9uKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pIHtcbiAgICAgICAgdGhpcy5idXR0b25zID0gdGhpcy5idXR0b25zLmZpbHRlcihiID0+IGIuaWQgIT09IGJ1dHRvbi5pZCk7XG4gICAgfVxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGh0bWw6IHN0cmluZztcbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIG9wZW46IGJvb2xlYW47XG4gICAgb3Blbkxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcbiAgICBjbG9zZUxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuaHRtbCA9IGBcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJrdlQ3Y1wiIGpzYWN0aW9uPVwiY2xpY2s6YTRmVXdkXCIganNuYW1lPVwiR2VHSEtiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiRFB2d1ljIHRScWMzY1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmFycm93X2JhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJRM3d5eWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkN3Q3hGZFwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgJHtjb250ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3VpLWNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5Zi5maThKeGQnKTtcbiAgICAgICAgaWYoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFJlUXVlcnkgZWxlbWVudCBzaW5jZSBvdXRlckhUTUwgYnJlYWtzIGl0LlxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcblxuICAgICAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAjJHt0aGlzLmlkfSA+IGhlYWRlciA+IC5ya3ZUN2NgLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VUYWIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlblRhYigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcnMuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuXG4gICAgY2xvc2VUYWIoKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5pbmZvKCdDbG9zaW5nJywgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lcnMuZm9yRWFjaChjID0+IGMoKSk7XG4gICAgfVxuXG4gICAgb25PcGVuKGNhbGxiYWNrPzooKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXG4gICAgfVxuXG4gICAgb25DbG9zZShjYWxsYmFjaz86KCkgPT4gdm9pZCkge1xuICAgICAgICBpZihjYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lcnMucHVzaChjYWxsYmFjaylcbiAgICB9XG59IiwiaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tIFwiLi9VSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgVUlSb3cge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgb3B0aW9uczogVUlSb3dPcHRpb25zO1xuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBVSVJvd09wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8cD4ke3RoaXMudGl0bGV9PC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuY29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c191aS1yb3cnKTtcbiAgICB9XG5cbiAgICBleGlzdHMoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25SZWxvYWQodGhpcyk7XG4gICAgfVxuXG4gICAgYXBwZW5kKGNvbXBvbmVudDogVUlDb21wb25lbnQsIHVzZUhyOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYodXNlSHIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5lbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVUlSb3dPcHRpb25zIHtcbiAgICBvbkNyZWF0ZT86IEZ1bmN0aW9uO1xuICAgIG9uRGVzdHJveT86IEZ1bmN0aW9uO1xuICAgIG9uUmVsb2FkPzogRnVuY3Rpb247XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9CdXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TbmFja2Jhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9