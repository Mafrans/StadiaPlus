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
/* harmony default export */ __webpack_exports__["default"] = ("const MonitorRunnable = function () {\r\n    this.enabled = false;\r\n    this.peerConnections = [];\r\n    this.originalRTC;\r\n    this.startTime;\r\n    this.element;\r\n    this.editable = false;\r\n    this.x = 0;\r\n    this.y = 0;\r\n\r\n    const self = this;\r\n    this.originalRTC = RTCPeerConnection;\r\n    (function (OriginalRTCConnection) {\r\n        self.originalRTC = OriginalRTCConnection;\r\n\r\n        RTCPeerConnection = function (args) {\r\n            const connection = new OriginalRTCConnection(args);\r\n            self.peerConnections.push(connection);\r\n            return connection;\r\n        };\r\n        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;\r\n    })(RTCPeerConnection);\r\n\r\n    this.start = function () {\r\n        this.enabled = true;\r\n        this.element = document.createElement('div');\r\n        this.element.classList.add('stadiaplus_networkmonitor');\r\n        this.element.id =\r\n            'networkmonitor-' + Math.floor(Math.random() * 999999);\r\n        document.body.appendChild(this.element);\r\n\r\n        this.startTime = Date.now();\r\n\r\n        this.setEditable(true);\r\n        this.updatePosition();\r\n        this.update();\r\n    };\r\n\r\n    this.setPosition = function (x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.updatePosition();\r\n    };\r\n\r\n    this.updatePosition = function () {\r\n        this.element.style.left = this.x + 'px';\r\n        this.element.style.top = this.y + 'px';\r\n\r\n        const corners = {\r\n            tl: 10,\r\n            tr: 10,\r\n            bl: 10,\r\n            br: 10,\r\n        };\r\n\r\n        if (this.x < 10) {\r\n            corners.tl = 0;\r\n            corners.bl = 0;\r\n        }\r\n\r\n        if (this.y < 10) {\r\n            corners.tl = 0;\r\n            corners.tr = 0;\r\n        }\r\n\r\n        if (this.x > window.innerWidth - this.element.clientWidth - 10) {\r\n            corners.tr = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        if (this.y > window.innerHeight - this.element.clientHeight - 10) {\r\n            corners.bl = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        this.element.style[\r\n            'border-radius'\r\n        ] = `${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px`;\r\n    };\r\n\r\n    this.mouseEvents = [];\r\n    this.moving = false;\r\n    this.offset = { x: 0, y: 0 };\r\n    this.setEditable = function (editable) {\r\n        this.editable = editable;\r\n        this.element.classList.toggle('editable', editable);\r\n\r\n        if (editable) {\r\n            this.mouseEvents.push(\r\n                {\r\n                    target: document,\r\n                    type: 'mousemove',\r\n                    fn: (event) => {\r\n                        if (this.moving) {\r\n                            this.x = Math.max(\r\n                                0, // Minimum x value\r\n                                Math.min(\r\n                                    window.innerWidth -\r\n                                        this.element.clientWidth, // Maximum x value\r\n                                    event.clientX - this.offset.x,\r\n                                ),\r\n                            );\r\n                            this.y = Math.max(\r\n                                0, // Minimum y value\r\n                                Math.min(\r\n                                    window.innerHeight -\r\n                                        this.element.clientHeight, // Maximum y value\r\n                                    event.clientY - this.offset.y,\r\n                                ),\r\n                            );\r\n\r\n                            this.updatePosition();\r\n                        }\r\n                    },\r\n                },\r\n                {\r\n                    target: this.element,\r\n                    type: 'mousedown',\r\n                    fn: (event) => {\r\n                        this.moving = true;\r\n                        this.offset.x = event.clientX - this.x;\r\n                        this.offset.y = event.clientY - this.y;\r\n                    },\r\n                },\r\n                {\r\n                    target: document,\r\n                    type: 'mouseup',\r\n                    fn: (event) => {\r\n                        this.moving = false;\r\n                    },\r\n                },\r\n            );\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.addEventListener(event.type, event.fn),\r\n            );\r\n        } else {\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.removeEventListener(event.type, event.fn),\r\n            );\r\n        }\r\n    };\r\n\r\n    this.setVisible = function (visible) {\r\n        this.visible = visible;\r\n    };\r\n\r\n    this.stop = function () {\r\n        this.enabled = false;\r\n        this.setEditable(false);\r\n        this.element.remove();\r\n\r\n        RTCPeerConnection = this.originalRTC;\r\n        peerConnections = [];\r\n    };\r\n\r\n    this.visible = {\r\n        time: true,\r\n        resolution: true,\r\n        FPS: true,\r\n        latency: true,\r\n        codec: true,\r\n        traffic: true,\r\n        'current-traffic': true,\r\n        'average-traffic': true,\r\n        'packets-lost': true,\r\n        'average-packet-loss': true,\r\n        'jitter-buffer': true,\r\n    };\r\n\r\n    this.stats = [];\r\n    this.update = function () {\r\n        if (this.peerConnections.length > 1) {\r\n            const index = this.peerConnections.length - 1;\r\n\r\n            this.peerConnections[index].getStats().then((_stats) => {\r\n                this.stats = Array.from(_stats);\r\n\r\n                const RTCInboundRTPVideoStream = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCInboundRTPVideoStream'),\r\n                );\r\n                const RTCIceCandidatePair = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCIceCandidatePair'),\r\n                );\r\n                const RTCMediaStreamTrack_receiver = this.getStat(\r\n                    (stat) =>\r\n                        stat[0].startsWith('RTCMediaStreamTrack_receiver') &&\r\n                        stat[1].kind === 'video',\r\n                );\r\n\r\n                const resolution = this.getResolution(\r\n                    RTCMediaStreamTrack_receiver,\r\n                );\r\n                const fps = this.getFPS(RTCInboundRTPVideoStream);\r\n                const latency = this.getLatency(RTCIceCandidatePair) + ' ms';\r\n                const codec = this.getCodec(RTCInboundRTPVideoStream);\r\n                const totalTraffic = this.translateBitUnits(\r\n                    this.getTotalDownload(RTCIceCandidatePair),\r\n                );\r\n                const currentTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const averageTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getAverageDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const packetsLost = this.getPacketsLost(\r\n                    RTCInboundRTPVideoStream,\r\n                );\r\n                const averagePacketLoss =\r\n                    this.getAveragePacketLoss(RTCInboundRTPVideoStream) + '%';\r\n                const jitterBuffer =\r\n                    this.getJitterBuffer(RTCMediaStreamTrack_receiver) + ' ms';\r\n\r\n                let html = '';\r\n                if (this.visible['time']) {\r\n                    let time = new Date();\r\n                    let timeString = time.toLocaleString();\r\n                    html += `<h5>${timeString}</h5>`;\r\n                }\r\n\r\n                html += '<ul>';\r\n                if (this.visible['resolution']) {\r\n                    html += `<li>Resolution: ${resolution.width}x${resolution.height}</li>`;\r\n                }\r\n\r\n                if (this.visible['FPS']) {\r\n                    html += `<li>FPS: ${fps}</li>`;\r\n                }\r\n\r\n                if (this.visible['latency']) {\r\n                    html += `<li>Latency: ${latency}</li>`;\r\n                }\r\n\r\n                if (this.visible['codec']) {\r\n                    html += `<li>Codec: ${codec}</li>`;\r\n                }\r\n\r\n                if (this.visible['traffic']) {\r\n                    html += `<li>Total Traffic: ${totalTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['current-traffic']) {\r\n                    html += `<li>Current Traffic: ${currentTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-traffic']) {\r\n                    html += `<li>Average Traffic: ${averageTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['packets-lost']) {\r\n                    html += `<li>Packets Lost: ${packetsLost}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-packet-loss']) {\r\n                    html += `<li>Average Packet Loss: ${averagePacketLoss}</li>`;\r\n                }\r\n\r\n                if (this.visible['jitter-buffer']) {\r\n                    html += `<li>Jitter Buffer: ${jitterBuffer}</li>`;\r\n                }\r\n\r\n                html += '</ul>';\r\n\r\n                this.element.innerHTML = html;\r\n            });\r\n        } else {\r\n            this.startTime = Date.now();\r\n            this.element.innerHTML = `\r\n                <h5>Error</h5>\r\n                <p>\r\n                    Uh oh, something went terribly wrong. \r\n                    This feature is still very unstable and \r\n                    the developer knows there are problems, \r\n                    please understand that this issue is \r\n                    actively being worked on.\r\n                </p>\r\n                <p class='stadiaplus_muted'>Error Code: 001 - Stats unavailable</p>\r\n            `;\r\n        }\r\n\r\n        if (this.enabled) {\r\n            setTimeout(() => {\r\n                this.update();\r\n            }, 1000);\r\n        }\r\n    };\r\n\r\n    this.getStat = function (filter) {\r\n        return this.stats.find(filter)[1];\r\n    };\r\n\r\n    this.translateBitUnits = function (value) {\r\n        const units = ['B', 'kB', 'MB', 'GB'];\r\n\r\n        let i = 0;\r\n        while (value / 1000 >= 1) {\r\n            i++;\r\n            value /= 1000;\r\n        }\r\n\r\n        return (\r\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\r\n        );\r\n    };\r\n\r\n    this.getLatency = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.currentRoundTripTime * 1000;\r\n    };\r\n\r\n    this.getJitterBuffer = function (RTCMediaStreamTrack_receiver) {\r\n        return (\r\n            (RTCMediaStreamTrack_receiver.jitterBufferDelay * 1000) /\r\n            RTCMediaStreamTrack_receiver.jitterBufferEmittedCount\r\n        ).toPrecision(4);\r\n    };\r\n\r\n    this.getPacketsLost = function (RTCInboundRTPVideoStream) {\r\n        return RTCInboundRTPVideoStream.packetsLost;\r\n    };\r\n\r\n    this.getAveragePacketLoss = function (RTCInboundRTPVideoStream) {\r\n        return (\r\n            (RTCInboundRTPVideoStream.packetsLost /\r\n                (RTCInboundRTPVideoStream.packetsReceived +\r\n                    RTCInboundRTPVideoStream.packetsLost)) *\r\n            100\r\n        ).toPrecision(2);\r\n    };\r\n\r\n    this.lastDownload = 0;\r\n    this.getDownloadSpeed = function (RTCIceCandidatePair) {\r\n        const download = this.getTotalDownload(RTCIceCandidatePair);\r\n        const speed = download - this.lastDownload;\r\n        this.lastDownload = download;\r\n        return speed;\r\n    };\r\n\r\n    this.getAverageDownloadSpeed = function (RTCIceCandidatePair) {\r\n        return (\r\n            this.getTotalDownload(RTCIceCandidatePair) /\r\n            (this.timeSinceStart() / 1000)\r\n        );\r\n    };\r\n\r\n    this.getTotalDownload = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.bytesReceived;\r\n    };\r\n\r\n    this.getResolution = function (RTCMediaStreamTrack_receiver) {\r\n        return {\r\n            width: RTCMediaStreamTrack_receiver.frameWidth,\r\n            height: RTCMediaStreamTrack_receiver.frameHeight,\r\n        };\r\n    };\r\n\r\n    this.getCodec = function (RTCInboundRTPVideoStream) {\r\n        const codecStat = this.getStat(\r\n            (stat) => stat[0] === RTCInboundRTPVideoStream.codecId,\r\n        );\r\n        return codecStat.mimeType.substring('video/'.length);\r\n    };\r\n\r\n    this.lastFrames = 0;\r\n    this.getFPS = function (RTCInboundRTPVideoStream) {\r\n        const fps = RTCInboundRTPVideoStream.framesDecoded - this.lastFrames;\r\n        this.lastFrames = RTCInboundRTPVideoStream.framesDecoded;\r\n        return fps;\r\n    };\r\n\r\n    this.timeSinceStart = function () {\r\n        return Date.now() - this.startTime;\r\n    };\r\n};\r\n\r\nStadiaPlusMonitor = new MonitorRunnable();\r\n");

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
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Komponente {{name}} wurde aktiviert.\",\"disabled\":\"Komponente {{name}} wurde deaktiviert.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Uhr\"},\"force-codec\":{\"name\":\"Codec erzwingen\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Auflösung erzwingen\",\"note\":\"Anmerkung: Die gewählte Auflösung ist die Maximale, die Stadia verweden wird. Falls Ihr Computer diese Auflösung nicht darstellen kann oder nicht genug Bandbreite zu Verfügung steht, wird eine kleinere Auflösung verwendet.\"},\"library-filter\":{\"name\":\"Sammlungsfilter\",\"recent\":\"Neuste\",\"alphabetical\":\"Alphabetisch\",\"random\":\"Zufällig\",\"show-hidden\":\"Zeige Versteckte\"},\"network-monitor\":{\"name\":\"Netwerkmonitor\",\"heading-visible\":\"Sichtbare Statistiken\",\"button-label\":\"Monitor\"},\"ratings\":{\"name\":\"Bewertungen\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Seite neu laden um die Änderung anzuzeigen.\",\"hide-game\":\"Ein Spiel wurde versteckt.\",\"show-game\":\"Ein Spiel ist nicht mehr versteckt.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Anwenden\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/en-US.json":
/*!*****************************!*\
  !*** ./src/lang/en-US.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Component {{name}} has been enabled.\",\"disabled\":\"Component {{name}} has been disabled.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Clock\"},\"force-codec\":{\"name\":\"Force Codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Force Resolution\",\"note\":\"Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.\"},\"library-filter\":{\"name\":\"Library Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alphabetical\",\"random\":\"Random\",\"show-hidden\":\"Show Hidden\"},\"network-monitor\":{\"name\":\"Network Monitor\",\"heading-visible\":\"Visible Stats\",\"button-label\":\"Monitor\"},\"ratings\":{\"name\":\"Ratings\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Reload the page to see your changes.\",\"hide-game\":\"A game has been hidden.\",\"show-game\":\"A game is no longer hidden.\"},\"automatic\":\"Automatic\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/es-ES.json":
/*!*****************************!*\
  !*** ./src/lang/es-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"help-button\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"El componente {{name}}  ha sido habilitado.\",\"disabled\":\"El componente {{name}} ha sido deshabilitado.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Reloj\"},\"force-codec\":{\"name\":\"Fuerza Códec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Fuerza Resolución\",\"note\":\"Nota: el valor establecido es la resolución máxima que Stadia intentará lograr. Si su computadora no es capaz de procesar la resolución o no está disponible con la opción de uso de datos actual, no se mostrará.\"},\"library-filter\":{\"name\":\"Filtro Biblioteca\",\"recent\":\"Reciente\",\"alphabetical\":\"Alfabético\",\"random\":\"Aleatorio\",\"show-hidden\":\"Mostrar oculto\"},\"network-monitor\":{\"name\":\"Monitor de red\",\"heading-visible\":\"Estadísticas visibles\",\"button-label\":\"Monitor\"},\"ratings\":{\"name\":\"Calificaciones\",\"source-name\":\"Metacrítico\"},\"store-filter\":{\"name\":\"Filtro de tienda\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Vuelva a cargar la página para ver sus cambios.\",\"hide-game\":\"Un juego ha sido escondido.\",\"show-game\":\"Un juego ya no está oculto.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/eu-ES.json":
/*!*****************************!*\
  !*** ./src/lang/eu-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Egilea: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Luzapena prest dago. Ireki Stadia eta hasi jolasten! Egurra! 🎮\",\"launch-button\":\"Ireki Stadia\",\"help-button\":\"Laguntza & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Ezarpenak\",\"language\":\"Hizkuntza\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Aurreratuak\",\"clear-cache-button\":\"Cache ezabatu\",\"storage\":\"Biltegia\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"{{name}} gaitu egin da.\",\"disabled\":\"{{name}} desgaitu egin da.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Erlojua\"},\"force-codec\":{\"name\":\"Behartu codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Behartu bereizmena\",\"note\":\"Oharra: jarritako balioa izango da Stadia ezartzen saiatuko den handiena. Zure ordenagailuak ezin badu bereizmen hori exekutatu  edota ez badator bat Stadiaren zure data-ezarpenekin ezin izango da gauzatu..\"},\"library-filter\":{\"name\":\"Bildumaren iragazkia\",\"recent\":\"Arestikoak\",\"alphabetical\":\"Alfabetikoa\",\"random\":\"Aliritzira\",\"show-hidden\":\"Erakutsi izkutatutakoak\"},\"network-monitor\":{\"name\":\"Sare-monitorea\",\"heading-visible\":\"Ikusteko estatistikak\",\"button-label\":\"Monitorea\"},\"ratings\":{\"name\":\"Balorazioak\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Denda-iragazkia\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Orria birkargatu ezarritako aldaketak abiarazteko.\",\"hide-game\":\"Joku bat izkutatu egin da.\",\"show-game\":\"Joku bat jada ikusgai dago.\"},\"automatic\":\"Automatikoa\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Ezarri\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/fr-FR.json":
/*!*****************************!*\
  !*** ./src/lang/fr-FR.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Développé par {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'extension est prête. Lancez Stadia et commencez à jouer! 🎮\",\"launch-button\":\"Lancer Stadia\",\"help-button\":\"Aide & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Paramètres\",\"language\":\"Langue\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Développeur\",\"clear-cache-button\":\"Vider le cache\",\"storage\":\"Stockage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Le composant {{name}} a été activé.\",\"disabled\":\"Le composant {{name}} a été désactivé.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Horloge\"},\"force-codec\":{\"name\":\"Forcer le codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Forcer la résolution\",\"note\":\"Remarque: la valeur définie est la résolution maximale que Stadia tentera d'atteindre. Si votre ordinateur ne peut pas afficher cette résolution ou que l'option de consommation des données ne le permet pas, elle ne sera pas utilisée.\"},\"library-filter\":{\"name\":\"Filtre de la bibliothèque\",\"recent\":\"Récent\",\"alphabetical\":\"Alphabétique\",\"random\":\"Aléatoire\",\"show-hidden\":\"Montrer caché(s)\"},\"network-monitor\":{\"name\":\"Moniteur réseau\",\"heading-visible\":\"Statistiques visibles\",\"button-label\":\"Moniteur\"},\"ratings\":{\"name\":\"Évaluations\",\"source-name\":\"Métacritique\"},\"store-filter\":{\"name\":\"Filtre du magasin\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Rechargez la page pour voir vos modifications.\",\"hide-game\":\"Un jeu a été caché.\",\"show-game\":\"Un jeu n'est plus caché.\"},\"automatic\":\"Automatique\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Appliquer\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/gl-ES.json":
/*!*****************************!*\
  !*** ./src/lang/gl-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Creado por {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"A extensión está lista. Inicia Stadia e lume! 🎮\",\"launch-button\":\"Inicia Stadia\",\"help-button\":\"Axuda & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Configuración\",\"language\":\"Idioma\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Avanzadas\",\"clear-cache-button\":\"Limpar a caché\",\"storage\":\"Almacenamento\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Activouse {{name}}.\",\"disabled\":\"Desactivouse {{name}}.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Reloxo\"},\"force-codec\":{\"name\":\"Forzar códec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Forzar resolución\",\"note\":\"Aviso: o valor indicado será o máximo que Stadia intentará acadar. Se o teu computador non é compatíbel coa resolución ou esta supera o uso de datos que teñas configurado na conta, non se activará.\"},\"library-filter\":{\"name\":\"Filtrar\",\"recent\":\"Recentes\",\"alphabetical\":\"Alfabeticamente\",\"random\":\"Aleatoriamente\",\"show-hidden\":\"Mostrar agochados\"},\"network-monitor\":{\"name\":\"Monitor de rede\",\"heading-visible\":\"Estatísticas\",\"button-label\":\"Monitor\"},\"ratings\":{\"name\":\"Valoracións\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtrar\"},\"ui-tab\":{\"name\":\"Pestaña UI de Stadia+\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Recarga a páxina para activar os cambios.\",\"hide-game\":\"Agochóuse un xogo.\",\"show-game\":\"Un xogo deixou de estar agochado.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/it-IT.json":
/*!*****************************!*\
  !*** ./src/lang/it-IT.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Sviluppato da {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'estensione è pronta per l'uso. Avvia Stadia e inizia a giocare! 🎮\",\"launch-button\":\"Avvia Stadia\",\"help-button\":\"Aiuto & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Impostazioni\",\"language\":\"Lingua\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Sviluppatore\",\"clear-cache-button\":\"Pulisci Cache\",\"storage\":\"Archiviazione\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Il componente {{name}} è stato attivato.\",\"disabled\":\"Il componente {{name}} è stato disattivato.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Orologio\"},\"force-codec\":{\"name\":\"Forza Codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Forza Risoluzione\",\"note\":\"Nota: il valore impostato è la massima risoluzione che Stadia tenterà di raggiungere. Se il tuo computer non è in grado di renderizzare la risoluzione, o non è disponibile con l'opzione di utilizzo dei dati corrente, questa non verrà visualizzata.\"},\"library-filter\":{\"name\":\"Filtro Libreria\",\"recent\":\"Recente\",\"alphabetical\":\"Alfabetico\",\"random\":\"Casuale\",\"show-hidden\":\"Mostra Nascosti\"},\"network-monitor\":{\"name\":\"Monitor di Rete\",\"heading-visible\":\"Statistiche Visibili\",\"button-label\":\"Monitor\"},\"ratings\":{\"name\":\"Valutazioni\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtro Negozio\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Ricarica la pagina per vedere i cambiamenti.\",\"hide-game\":\"Un gioco è stato nascosto.\",\"show-game\":\"Un gioco non è più nascosto.\"},\"automatic\":\"Automatico\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Applica\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/ru-RU.json":
/*!*****************************!*\
  !*** ./src/lang/ru-RU.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Разработчик: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Расширение готово к работе. Запускай Stadia и начинай играть! 🎮\",\"launch-button\":\"Запустить Stadia\",\"help-button\":\"Справка и FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Настройки\",\"language\":\"Язык\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Элемент {{name}} включён.\",\"disabled\":\"Элемент {{name}} отключен.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Часы\"},\"force-codec\":{\"name\":\"Принудительный запуск кодека\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Принудительная смена разрешения\",\"note\":\"Примечание: установливаемое значение - это максимальное разрешение, которое Stadia может достичь. Если ваш компьютер не может отобразить разрешение или оно не доступно с текущей скоростью передачи данных, оно не будет отображаться.\"},\"library-filter\":{\"name\":\"Фильтр\",\"recent\":\"Последние\",\"alphabetical\":\"Алфавитный\",\"random\":\"Случайные\",\"show-hidden\":\"Показать скрытые\"},\"network-monitor\":{\"name\":\"Мониторинг сети\",\"heading-visible\":\"Видимая статистика\",\"button-label\":\"Монитор\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Сохранить фильтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Перезагрузите страницу, чтобы увидеть изменения.\",\"hide-game\":\"Игра скрыта.\",\"show-game\":\"Игра теперь отображается.\"},\"automatic\":\"Автоматически\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/sv-SE.json":
/*!*****************************!*\
  !*** ./src/lang/sv-SE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Utvecklat av {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Tillägget är redo att köra. Bara starta Stadia och börja spela! 🎮\",\"launch-button\":\"Starta Stadia\",\"help-button\":\"Hjälp & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Inställningar\",\"language\":\"Språk\",\"components\":\"Komponenter\",\"edit-components\":\"Redigera Komponenter\"},\"developer-page\":{\"title\":\"Utvecklare\",\"clear-cache-button\":\"Rensa Cache\",\"storage\":\"Lagring\"},\"component-page\":{\"title\":\"Komponenter\"}},\"component\":{\"enabled\":\"Komponenten {{name}} är nu aktiverad.\",\"disabled\":\"Komponenten {{name}} är inte längre aktiverad.\"},\"allow-windowed-mode\":{\"name\":\"Tillåt Fönsterläge\",\"button-label\":{\"windowed\":\"Fönster\",\"fullscreen\":\"Fullskärm\"}},\"clock\":{\"name\":\"Klocka\"},\"force-codec\":{\"name\":\"Påtvigad Codec\",\"4k-tooltip\":\"Påtvingad Codec är inte tillgängligt när du spelar i 4K\"},\"force-resolution\":{\"name\":\"Påtvingad Upplösning\",\"note\":\"Observera: det satta värdet är den maximala upplösningen Stadia kommer försöka uppnå. Om din dator inte klarar av att rendera upplösningen eller den inte är tillgänglig med dina nuvarande datainställningar kommer inte den påtvingade upplösningen visas.\"},\"library-filter\":{\"name\":\"Biblioteksfilter\",\"recent\":\"Senaste\",\"alphabetical\":\"Alfabetiskt\",\"random\":\"Slumpmässigt\",\"show-hidden\":\"Visa Gömda\"},\"network-monitor\":{\"name\":\"Nätverksövervakning\",\"heading-visible\":\"Synlig Statistik\",\"button-label\":\"Övervakning\"},\"ratings\":{\"name\":\"Recensioner\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Butiksfiltrering\"},\"ui-tab\":{\"name\":\"Stadia+ Gränssnittstabb\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Uppdatera sidan för att se dina ändringar.\",\"hide-game\":\"Ett spel har gömts.\",\"show-game\":\"Ett spel är inte längre gömt.\"},\"automatic\":\"Automatisk\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Tillämpa\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

/***/ }),

/***/ "./src/lang/uk-UA.json":
/*!*****************************!*\
  !*** ./src/lang/uk-UA.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, snackbar, automatic, vp9, h264, apply, 4k, 1080p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Розробник: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Розширення готове до роботи. Просто запустіть Stadia і почніть грати! 🎮\",\"launch-button\":\"Запустити Stadia\",\"help-button\":\"Довідка та поширені запитання\",\"discord\":\"Discord\",\"reddit\":\"Reddit\"},\"settings-page\":{\"title\":\"Налаштування\",\"language\":\"Мова\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Компонент {{name}} увімкнено.\",\"disabled\":\"Компонент {{name}} вимкнено.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Годинник\"},\"force-codec\":{\"name\":\"Примусити кодек\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Примусити розширення\",\"note\":\"Примітка: встановлене значення - це максимальна роздільна здатність, яку Stadia намагатиметься досягти. Якщо ваш комп'ютер не здатний рендерувати роздільну здатність або він недоступний із поточною опцією використання даних, він не відображатиметься.\"},\"library-filter\":{\"name\":\"Фільтрувати\",\"recent\":\"Останні\",\"alphabetical\":\"Алфавітний\",\"random\":\"Випадкові\",\"show-hidden\":\"Показати приховані\"},\"network-monitor\":{\"name\":\"Моніторинг мережі\",\"heading-visible\":\"Видима статистика\",\"button-label\":\"Монітор\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Зберегти фільтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"snackbar\":{\"reload-to-update\":\"Перезавантажте сторінку, щоб побачити зміни.\",\"hide-game\":\"Гра прихована.\",\"show-game\":\"Гра більше не є прихованою.\"},\"automatic\":\"Автоматично\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"4k\":\"4K\",\"1080p\":\"1080p\"}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU25hY2tiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJldHR5LWNoZWNrYm94L3NyYy9wcmV0dHktY2hlY2tib3guc2Nzcz8wZjVkIiwid2VicGFjazovLy8uL3NyYy9Nb25pdG9yUnVubmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzP2JlNGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViRGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsb3dXaW5kb3dlZE1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9yY2VDb2RlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYXRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0b3JlRmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJVGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9DbG9jay5zY3NzPzhhMjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2Nzcz8zODcyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZVJlc29sdXRpb24uc2Nzcz81YjQ1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9MaWJyYXJ5RmlsdGVyLnNjc3M/NjllOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2Nzcz82N2M0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9SYXRpbmdzLnNjc3M/OTJkMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3RvcmVGaWx0ZXIuc2Nzcz82YzI3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzPzhiNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3M/MDliNiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0dyaWQuc2Nzcz8yZmQwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvVHlwb2dyYXBoeS5zY3NzPzlhZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0NoZWNrYm94LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9TZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NuYWNrYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b25Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSVJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL0J1dHRvbi5zY3NzPzk5MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2Nzcz83ZTdhIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU25hY2tiYXIuc2Nzcz85YjczIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJGQUFzQztBQUNoRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGNBQWMsMkJBQTJCLEdBQUcsMERBQTBELGtCQUFrQixHQUFHLGFBQWEsdUJBQXVCLDBCQUEwQixzQkFBc0Isd0JBQXdCLG1CQUFtQixHQUFHLGlCQUFpQix1QkFBdUIsWUFBWSxXQUFXLG1CQUFtQixnQkFBZ0IsaUJBQWlCLGVBQWUsZUFBZSxjQUFjLGVBQWUsb0JBQW9CLEdB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c0I7UUFBdEIscUNBQXNCO1FBQ2pELElBQUcsS0FBSyxFQUFFO1lBQ04sU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JERCxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDJOQUE0Rzs7QUFFOUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQywyTkFBNEc7O0FBRTlJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsK05BQThHOztBQUVoSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByZXR0eSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXR0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eSBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWluLXdpZHRoOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWwge1xcbiAgcG9zaXRpb246IGluaXRpYWw7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xcbiAgbWluLXdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNiZGMzYzc7XFxufVxcbi5wcmV0dHkgLnN0YXRlLnAtaXMtaG92ZXIsIC5wcmV0dHkgLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHRhZGEge1xcbiAgMCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDcpO1xcbiAgfVxcbiAgMzglIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1NSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuICA3MiUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDgxJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNCk7XFxuICB9XFxuICA4OSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDk1JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamVsbHkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44NSwgMS4xNSwgMSk7XFxuICB9XFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2JkYzNjNztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxLjVlbSByZ2JhKDE4OSwgMTk1LCAxOTksIDApO1xcbiAgfVxcbn1cXG4ucHJldHR5LnAtZGVmYXVsdC5wLWZpbGwgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wcmV0dHkucC1kZWZhdWx0IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogY2FsYygxZW0gLyA3KTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuaWNvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxufVxcblxcbi5wcmV0dHkucC1zdmcgLnN0YXRlIC5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN2ZyAuc3RhdGUgc3ZnIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLXN2ZyBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5zdmcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLWltYWdlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIHRvcDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtaW1hZ2UgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dCB7XFxuICBtaW4td2lkdGg6IDJlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIHdpZHRoOiAyZW07XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAxNiUpO1xcbiAgei1pbmRleDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsIHtcXG4gIHRleHQtaW5kZW50OiAyLjVlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NTZiICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIC5zdGF0ZTpiZWZvcmUge1xcbiAgaGVpZ2h0OiAwLjFlbTtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzcgIWltcG9ydGFudDtcXG4gIHRvcDogY2FsYyg1MCUgLSAwLjFlbSk7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZTpub3QoLnAtaXMtaG92ZXIpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXIgfiAuc3RhdGUucC1pcy1ob3ZlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZS5wLWlzLWhvdmVyIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWZvY3VzIGlucHV0OmZvY3VzIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2JkYzNjNztcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGU6bm90KC5wLWlzLWluZGV0ZXJtaW5hdGUpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIH4gLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmYsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb2ZmIC5pY29uIHtcXG4gIGNvbG9yOiAjYmRjM2M3O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtb2ZmIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldHR5LnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1wbGFpbi5wLXRvZ2dsZSAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1wbGFpbi5wLXBsYWluIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuLnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcblxcbi5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtY3VydmUgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDphZnRlcixcXG4ucHJldHR5LnAtc21vb3RoIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggLnN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcge1xcbiAgYW5pbWF0aW9uOiB6b29tIDAuMnMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aC5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHpvb20gMC4ycyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoLnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogdGFkYSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAxIGFsdGVybmF0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogamVsbHkgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJldHR5LnAtcHVsc2U6bm90KC5wLXN3aXRjaCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcztcXG59XFxuXFxuLnByZXR0eSBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkgaW5wdXRbZGlzYWJsZWRdIH4gKiB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5wcmV0dHkucC1sb2NrZWQgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIHN2ZyB7XFxuICBjb2xvcjogIzQyOGJjYTtcXG4gIHN0cm9rZTogIzQyOGJjYTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyNDU2ODI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1NjgyICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIHN2ZyB7XFxuICBjb2xvcjogIzViYzBkZTtcXG4gIHN0cm9rZTogIzViYzBkZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyMzkwYjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5MGIwICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIHN2ZyB7XFxuICBjb2xvcjogIzVjYjg1YztcXG4gIHN0cm9rZTogIzVjYjg1YztcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMzNTc5MzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3OTM1ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIHN2ZyB7XFxuICBjb2xvcjogI2YwYWQ0ZTtcXG4gIHN0cm9rZTogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNjNzdjMTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc3YzExICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gc3ZnIHtcXG4gIGNvbG9yOiAjZDk1MzRmO1xcbiAgc3Ryb2tlOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTAyNjIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwMjYyMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkucC1iaWdnZXIgLmljb24sXFxuLnByZXR0eS5wLWJpZ2dlciAuc3ZnLFxcbi5wcmV0dHkucC1iaWdnZXIgLmltZyB7XFxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDM1JSkgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLWJpZ2dlciBsYWJlbCB7XFxuICB0ZXh0LWluZGVudDogMS43ZW07XFxufVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAucHJldHR5IC5zdGF0ZTpiZWZvcmUsXFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkgLnN0YXRlIC5pY29uIHtcXG4gICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Nsb2NrIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKSwgb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3Npbmcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3NlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zIEV4dGVuZGVkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIHotaW5kZXg6IDQ7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYTNjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjNzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjE1LCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyOmhvdmVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyOmhvdmVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMjM2O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMzIpLCAwIDAuMDYyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTgpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19kcm9wZG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWNoZWNrYm94IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcImFycm93X2Ryb3BfZG93blxcXCI7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uLmFzY2VuZGluZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbi5kZXNjZW5kaW5nIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE1MDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yICoge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3IuZWRpdGFibGUge1xcbiAgei1pbmRleDogMzAwO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10YWIgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFyZW07XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci1jaGVja2JveCB7XFxuICBtYXJnaW46IDAuNHJlbSAwO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10b2dnbGUtYnV0dG9uOjpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICBjb250ZW50OiBcXFwiU2hvd1xcXCI7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRvZ2dsZS1idXR0b24uc2hvd246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiSGlkZVxcXCI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfcmF0aW5nIHtcXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnN0YWRpYXBsdXNfcmF0aW5nOmhvdmVyIC5zdGFkaWFwbHVzX3JhdGluZy10b29sdGlwIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSk7XFxufVxcbi5zdGFkaWFwbHVzX3JhdGluZyAuc3RhZGlhcGx1c19yYXRpbmctdG9vbHRpcCB7XFxuICBmb250LWZhbWlseTogXFxcIkdvb2dsZSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLjkpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0IDAuM3MsIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0IDAuM3M7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zMiksIDAgMC4wNjI1cmVtIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXIge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuYmFyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcInNlYXJjaFxcXCI7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnMgRXh0ZW5kZWRcXFwiO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuYmFyIGlucHV0IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBmb250LWZhbWlseTogXFxcIkdvb2dsZSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG91dGxpbmU6ICNmZjc3M2QgM3B4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMC41cmVtIDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogOTBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZS5zaG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZSBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTQwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lIC5kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbXV0ZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQge1xcbiAgLyogXFxuICAgKiAgIE11c3QgcmVtb3ZlIDIgeCBwYWRkaW5nIG9yIGl0IGRvZXNudCB3b3JrIFxcbiAgICovXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZTMwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQub3BlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIgLkN3Q3hGZCB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIuRTBaazliIHtcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnV0dG9uIHtcXG4gIHdpZHRoOiAxMTYuMTU2cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5HcUxpNGQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSkgY29udHJhc3QoMS4xKTtcXG59XFxuXFxuaHRtbCBib2R5IC5kU0d2emYge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmh0bWwgYm9keSAuQ1ZWWGZjIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogaW5pdGlhbDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDg0ZDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MjU3ICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX211dGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfZHJvcGRvd24uZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogIzkzOTU5RiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDE4MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5wbGFjZWhvbGRlcixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtcGx1cyBzcGFuLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbiB7XFxuICBib3JkZXItY29sb3I6ICM5Mzk1OUY7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4ge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICNjY2NjY2MgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYXJyb3cgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLXNsaW1zZWxlY3QtbGFyZ2Uuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19zbmFja2JhciB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB6LWluZGV4OiA5OTk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDhweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoMTZweCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLCBvcGFjaXR5IDAuMTVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19zbmFja2Jhci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1sYWJlbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19zbmFja2Jhci1jbG9zZSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnN0YWRpYXBsdXNfc25hY2tiYXItY2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcy1tYWlue3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3VzZXItc2VsZWN0Om5vbmU7Y29sb3I6IzY2Njt3aWR0aDoxMDAlfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWR7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYmVsb3d7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXJ7ZmxleDoxIDEgMTAwJTt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6Y2FsYygxMDAlIC0gMzBweCk7bGluZS1oZWlnaHQ6MWVtOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciwuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyICp7d2lkdGg6YXV0b30uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAuc3MtZGlzYWJsZWR7Y29sb3I6I2RlZGVkZX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1kZXNlbGVjdHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtmbGV4OjAgMSBhdXRvO21hcmdpbjowIDZweDtmb250LXdlaWdodDo3MDB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3Quc3MtaGlkZXtkaXNwbGF5Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3d7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHh9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbntib3JkZXI6c29saWQgIzY2Njtib3JkZXItd2lkdGg6MCAycHggMnB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzozcHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG1hcmdpbiAuMnN9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtYXJyb3cgc3Bhbi5hcnJvdy11cHt0cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpO21hcmdpbjozcHggMCAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctZG93bnt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTttYXJnaW46LTNweCAwIDB9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7Y3Vyc29yOnBvaW50ZXI7bWluLWhlaWdodDozMHB4O3dpZHRoOjEwMCU7cGFkZGluZzowIDAgMCAzcHg7Ym9yZGVyOjFweCBzb2xpZCAjZGNkZWUyO2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtvdXRsaW5lOjA7Ym94LXNpemluZzpib3JkZXItYm94O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2RjZGVlMjtjdXJzb3I6bm90LWFsbG93ZWR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLWRpc2FibGVke2NvbG9yOiM2NjZ9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLnNzLWRpc2FibGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWFib3Zle2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVze2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4OjEgMSAxMDAlO3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtkaXNwbGF5OmZsZXg7cGFkZGluZzo0cHggNXB4O21hcmdpbjoycHggMDtsaW5lLWhlaWdodDoxZW07YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7Y29sb3I6I2RlZGVkZTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9QGtleWZyYW1lcyBzY2FsZUluezAle3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9dG97dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzY2FsZU91dHswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfXRve3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjB9fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZXtkaXNwbGF5OmZsZXg7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEycHg7cGFkZGluZzozcHggNXB4O21hcmdpbjozcHggNXB4IDNweCAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZiO2JvcmRlci1yYWRpdXM6NHB4O2FuaW1hdGlvbi1uYW1lOnNjYWxlSW47YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUuc3Mtb3V0e2FuaW1hdGlvbi1uYW1lOnNjYWxlT3V0O2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWUgLnNzLXZhbHVlLWRlbGV0ZXttYXJnaW46MCAwIDAgNXB4O2N1cnNvcjpwb2ludGVyfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRke2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSAzcHg7bWFyZ2luOjlweCAxMnB4IDAgNXB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOiM2NjY7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHg7d2lkdGg6MnB4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yc30uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1czphZnRlcntiYWNrZ3JvdW5kOiM2NjY7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O3dpZHRoOjEwcHg7bGVmdDotNHB4O3RvcDo0cHh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXMuc3MtY3Jvc3N7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnNzLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTttYXJnaW46LTFweCAwIDA7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjt6LWluZGV4OjEwMTA7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsb3BhY2l0eSAuMnM7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZVkoMCl9LnNzLWNvbnRlbnQuc3Mtb3BlbntkaXNwbGF5OmJsb2NrO29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGVZKDEpfS5zcy1jb250ZW50IC5zcy1zZWFyY2h7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztwYWRkaW5nOjhweCA4cHggNnB4fS5zcy1jb250ZW50IC5zcy1zZWFyY2guc3MtaGlkZSwuc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUgaW5wdXR7aGVpZ2h0OjA7b3BhY2l0eTowO3BhZGRpbmc6MDttYXJnaW46MH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0e2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDtmbGV4OjEgMSBhdXRvO3dpZHRoOjEwMCU7bWluLXdpZHRoOjA7aGVpZ2h0OjMwcHg7cGFkZGluZzo2cHggOHB4O21hcmdpbjowO2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO3RleHQtYWxpZ246bGVmdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZH0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojOGE4YThhO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3MtY29udGVudCAuc3Mtc2VhcmNoIGlucHV0OmZvY3Vze2JveC1zaGFkb3c6MCAwIDVweCAjNTg5N2ZifS5zcy1jb250ZW50IC5zcy1zZWFyY2ggLnNzLWFkZGFibGV7ZGlzcGxheTppbmxpbmUtZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MjJweDtmb250LXdlaWdodDo3MDA7ZmxleDowIDAgMzBweDtoZWlnaHQ6MzBweDttYXJnaW46MCAwIDAgOHB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNzLWNvbnRlbnQgLnNzLWFkZGFibGV7cGFkZGluZy10b3A6MH0uc3MtY29udGVudCAuc3MtbGlzdHttYXgtaGVpZ2h0OjIwMHB4O292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bzt0ZXh0LWFsaWduOmxlZnR9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRncm91cC1sYWJlbHtwYWRkaW5nOjZweCAxMHB4O2ZvbnQtd2VpZ2h0OjcwMH0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0Z3JvdXAgLnNzLW9wdGlvbntwYWRkaW5nOjZweCA2cHggNnB4IDI1cHh9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGV7Y3Vyc29yOnBvaW50ZXJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGU6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbntwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmV9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbiAqe2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtaGlnaGxpZ2h0ZWQsLnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWRpc2FibGVke2N1cnNvcjpub3QtYWxsb3dlZDtjb2xvcjojZGVkZWRlO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uOm5vdCguc3MtZGlzYWJsZWQpLnNzLW9wdGlvbi1zZWxlY3RlZHtjb2xvcjojNjY2O2JhY2tncm91bmQtY29sb3I6cmdiYSg4OCwxNTEsMjUxLC4xKX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gLnNzLXNlYXJjaC1oaWdobGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZmZmYjhjfVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXR0eS1jaGVja2JveC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBcImNvbnN0IE1vbml0b3JSdW5uYWJsZSA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XFxyXFxuICAgIHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XFxyXFxuICAgIHRoaXMub3JpZ2luYWxSVEM7XFxyXFxuICAgIHRoaXMuc3RhcnRUaW1lO1xcclxcbiAgICB0aGlzLmVsZW1lbnQ7XFxyXFxuICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcXHJcXG4gICAgdGhpcy54ID0gMDtcXHJcXG4gICAgdGhpcy55ID0gMDtcXHJcXG5cXHJcXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XFxyXFxuICAgIHRoaXMub3JpZ2luYWxSVEMgPSBSVENQZWVyQ29ubmVjdGlvbjtcXHJcXG4gICAgKGZ1bmN0aW9uIChPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24pIHtcXHJcXG4gICAgICAgIHNlbGYub3JpZ2luYWxSVEMgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb247XFxyXFxuXFxyXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChhcmdzKSB7XFxyXFxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24oYXJncyk7XFxyXFxuICAgICAgICAgICAgc2VsZi5wZWVyQ29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcXHJcXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcXHJcXG4gICAgICAgIH07XFxyXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnaW5hbFJUQ0Nvbm5lY3Rpb24ucHJvdG90eXBlO1xcclxcbiAgICB9KShSVENQZWVyQ29ubmVjdGlvbik7XFxyXFxuXFxyXFxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID1cXHJcXG4gICAgICAgICAgICAnbmV0d29ya21vbml0b3ItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XFxyXFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XFxyXFxuXFxyXFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XFxyXFxuXFxyXFxuICAgICAgICB0aGlzLnNldEVkaXRhYmxlKHRydWUpO1xcclxcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xcclxcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XFxyXFxuICAgICAgICB0aGlzLnggPSB4O1xcclxcbiAgICAgICAgdGhpcy55ID0geTtcXHJcXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xcclxcblxcclxcbiAgICAgICAgY29uc3QgY29ybmVycyA9IHtcXHJcXG4gICAgICAgICAgICB0bDogMTAsXFxyXFxuICAgICAgICAgICAgdHI6IDEwLFxcclxcbiAgICAgICAgICAgIGJsOiAxMCxcXHJcXG4gICAgICAgICAgICBicjogMTAsXFxyXFxuICAgICAgICB9O1xcclxcblxcclxcbiAgICAgICAgaWYgKHRoaXMueCA8IDEwKSB7XFxyXFxuICAgICAgICAgICAgY29ybmVycy50bCA9IDA7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy55IDwgMTApIHtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLnRsID0gMDtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLnRyID0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCAtIDEwKSB7XFxyXFxuICAgICAgICAgICAgY29ybmVycy50ciA9IDA7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAtIDEwKSB7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5ibCA9IDA7XFxyXFxuICAgICAgICAgICAgY29ybmVycy5iciA9IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbXFxyXFxuICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnXFxyXFxuICAgICAgICBdID0gYCR7Y29ybmVycy50bH1weCAke2Nvcm5lcnMudHJ9cHggJHtjb3JuZXJzLmJyfXB4ICR7Y29ybmVycy5ibH1weGA7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMubW91c2VFdmVudHMgPSBbXTtcXHJcXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcXHJcXG4gICAgdGhpcy5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcXHJcXG4gICAgdGhpcy5zZXRFZGl0YWJsZSA9IGZ1bmN0aW9uIChlZGl0YWJsZSkge1xcclxcbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGVkaXRhYmxlO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRhYmxlJywgZWRpdGFibGUpO1xcclxcblxcclxcbiAgICAgICAgaWYgKGVkaXRhYmxlKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5wdXNoKFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlbW92ZScsXFxyXFxuICAgICAgICAgICAgICAgICAgICBmbjogKGV2ZW50KSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWF4KFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgLy8gTWluaW11bSB4IHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aCwgLy8gTWF4aW11bSB4IHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCAtIHRoaXMub2Zmc2V0LngsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1heChcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC8vIE1pbmltdW0geSB2YWx1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCwgLy8gTWF4aW11bSB5IHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSAtIHRoaXMub2Zmc2V0LnksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2Vkb3duJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZXZlbnQpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLng7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLnk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNldXAnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZm46IChldmVudCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT5cXHJcXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgZXZlbnQuZm4pLFxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+XFxyXFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGV2ZW50LmZuKSxcXHJcXG4gICAgICAgICAgICApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnNldFZpc2libGUgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xcclxcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLnNldEVkaXRhYmxlKGZhbHNlKTtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcXHJcXG5cXHJcXG4gICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uID0gdGhpcy5vcmlnaW5hbFJUQztcXHJcXG4gICAgICAgIHBlZXJDb25uZWN0aW9ucyA9IFtdO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnZpc2libGUgPSB7XFxyXFxuICAgICAgICB0aW1lOiB0cnVlLFxcclxcbiAgICAgICAgcmVzb2x1dGlvbjogdHJ1ZSxcXHJcXG4gICAgICAgIEZQUzogdHJ1ZSxcXHJcXG4gICAgICAgIGxhdGVuY3k6IHRydWUsXFxyXFxuICAgICAgICBjb2RlYzogdHJ1ZSxcXHJcXG4gICAgICAgIHRyYWZmaWM6IHRydWUsXFxyXFxuICAgICAgICAnY3VycmVudC10cmFmZmljJzogdHJ1ZSxcXHJcXG4gICAgICAgICdhdmVyYWdlLXRyYWZmaWMnOiB0cnVlLFxcclxcbiAgICAgICAgJ3BhY2tldHMtbG9zdCc6IHRydWUsXFxyXFxuICAgICAgICAnYXZlcmFnZS1wYWNrZXQtbG9zcyc6IHRydWUsXFxyXFxuICAgICAgICAnaml0dGVyLWJ1ZmZlcic6IHRydWUsXFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuc3RhdHMgPSBbXTtcXHJcXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICBpZiAodGhpcy5wZWVyQ29ubmVjdGlvbnMubGVuZ3RoID4gMSkge1xcclxcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wZWVyQ29ubmVjdGlvbnMubGVuZ3RoIC0gMTtcXHJcXG5cXHJcXG4gICAgICAgICAgICB0aGlzLnBlZXJDb25uZWN0aW9uc1tpbmRleF0uZ2V0U3RhdHMoKS50aGVuKChfc3RhdHMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0cyA9IEFycmF5LmZyb20oX3N0YXRzKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtID0gdGhpcy5nZXRTdGF0KChzdGF0KSA9PlxcclxcbiAgICAgICAgICAgICAgICAgICAgc3RhdFswXS5zdGFydHNXaXRoKCdSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0nKSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDSWNlQ2FuZGlkYXRlUGFpciA9IHRoaXMuZ2V0U3RhdCgoc3RhdCkgPT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDSWNlQ2FuZGlkYXRlUGFpcicpLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyID0gdGhpcy5nZXRTdGF0KFxcclxcbiAgICAgICAgICAgICAgICAgICAgKHN0YXQpID0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdFswXS5zdGFydHNXaXRoKCdSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyJykgJiZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0WzFdLmtpbmQgPT09ICd2aWRlbycsXFxyXFxuICAgICAgICAgICAgICAgICk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdXRpb24gPSB0aGlzLmdldFJlc29sdXRpb24oXFxyXFxuICAgICAgICAgICAgICAgICAgICBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBmcHMgPSB0aGlzLmdldEZQUyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBsYXRlbmN5ID0gdGhpcy5nZXRMYXRlbmN5KFJUQ0ljZUNhbmRpZGF0ZVBhaXIpICsgJyBtcyc7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGVjID0gdGhpcy5nZXRDb2RlYyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRyYWZmaWMgPSB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VHJhZmZpYyA9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RG93bmxvYWRTcGVlZChSVENJY2VDYW5kaWRhdGVQYWlyKSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICkgKyAnL3MnO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBhdmVyYWdlVHJhZmZpYyA9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzKFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXZlcmFnZURvd25sb2FkU3BlZWQoUlRDSWNlQ2FuZGlkYXRlUGFpciksXFxyXFxuICAgICAgICAgICAgICAgICAgICApICsgJy9zJztcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgcGFja2V0c0xvc3QgPSB0aGlzLmdldFBhY2tldHNMb3N0KFxcclxcbiAgICAgICAgICAgICAgICAgICAgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBhdmVyYWdlUGFja2V0TG9zcyA9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEF2ZXJhZ2VQYWNrZXRMb3NzKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkgKyAnJSc7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IGppdHRlckJ1ZmZlciA9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEppdHRlckJ1ZmZlcihSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSArICcgbXMnO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9ICcnO1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWyd0aW1lJ10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lU3RyaW5nID0gdGltZS50b0xvY2FsZVN0cmluZygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGg1PiR7dGltZVN0cmluZ308L2g1PmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHVsPic7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3Jlc29sdXRpb24nXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPlJlc29sdXRpb246ICR7cmVzb2x1dGlvbi53aWR0aH14JHtyZXNvbHV0aW9uLmhlaWdodH08L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnRlBTJ10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5GUFM6ICR7ZnBzfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydsYXRlbmN5J10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5MYXRlbmN5OiAke2xhdGVuY3l9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2NvZGVjJ10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5Db2RlYzogJHtjb2RlY308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsndHJhZmZpYyddKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+VG90YWwgVHJhZmZpYzogJHt0b3RhbFRyYWZmaWN9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2N1cnJlbnQtdHJhZmZpYyddKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+Q3VycmVudCBUcmFmZmljOiAke2N1cnJlbnRUcmFmZmljfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydhdmVyYWdlLXRyYWZmaWMnXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkF2ZXJhZ2UgVHJhZmZpYzogJHthdmVyYWdlVHJhZmZpY308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsncGFja2V0cy1sb3N0J10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5QYWNrZXRzIExvc3Q6ICR7cGFja2V0c0xvc3R9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkF2ZXJhZ2UgUGFja2V0IExvc3M6ICR7YXZlcmFnZVBhY2tldExvc3N9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2ppdHRlci1idWZmZXInXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkppdHRlciBCdWZmZXI6ICR7aml0dGVyQnVmZmVyfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8L3VsPic7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xcclxcbiAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcXHJcXG4gICAgICAgICAgICAgICAgPGg1PkVycm9yPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICBVaCBvaCwgc29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcuIFxcclxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmZWF0dXJlIGlzIHN0aWxsIHZlcnkgdW5zdGFibGUgYW5kIFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhlIGRldmVsb3BlciBrbm93cyB0aGVyZSBhcmUgcHJvYmxlbXMsIFxcclxcbiAgICAgICAgICAgICAgICAgICAgcGxlYXNlIHVuZGVyc3RhbmQgdGhhdCB0aGlzIGlzc3VlIGlzIFxcclxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlbHkgYmVpbmcgd29ya2VkIG9uLlxcclxcbiAgICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkJz5FcnJvciBDb2RlOiAwMDEgLSBTdGF0cyB1bmF2YWlsYWJsZTwvcD5cXHJcXG4gICAgICAgICAgICBgO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xcclxcbiAgICAgICAgICAgIH0sIDEwMDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldFN0YXQgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0cy5maW5kKGZpbHRlcilbMV07XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMudHJhbnNsYXRlQml0VW5pdHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcXHJcXG4gICAgICAgIGNvbnN0IHVuaXRzID0gWydCJywgJ2tCJywgJ01CJywgJ0dCJ107XFxyXFxuXFxyXFxuICAgICAgICBsZXQgaSA9IDA7XFxyXFxuICAgICAgICB3aGlsZSAodmFsdWUgLyAxMDAwID49IDEpIHtcXHJcXG4gICAgICAgICAgICBpKys7XFxyXFxuICAgICAgICAgICAgdmFsdWUgLz0gMTAwMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgdmFsdWUudG9QcmVjaXNpb24oNCkgKyAnICcgKyB1bml0c1tNYXRoLm1pbih1bml0cy5sZW5ndGggLSAxLCBpKV1cXHJcXG4gICAgICAgICk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0TGF0ZW5jeSA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxyXFxuICAgICAgICByZXR1cm4gUlRDSWNlQ2FuZGlkYXRlUGFpci5jdXJyZW50Um91bmRUcmlwVGltZSAqIDEwMDA7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0Sml0dGVyQnVmZmVyID0gZnVuY3Rpb24gKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIpIHtcXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuaml0dGVyQnVmZmVyRGVsYXkgKiAxMDAwKSAvXFxyXFxuICAgICAgICAgICAgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5qaXR0ZXJCdWZmZXJFbWl0dGVkQ291bnRcXHJcXG4gICAgICAgICkudG9QcmVjaXNpb24oNCk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0UGFja2V0c0xvc3QgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxyXFxuICAgICAgICByZXR1cm4gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0O1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldEF2ZXJhZ2VQYWNrZXRMb3NzID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcclxcbiAgICAgICAgcmV0dXJuIChcXHJcXG4gICAgICAgICAgICAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0IC9cXHJcXG4gICAgICAgICAgICAgICAgKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzUmVjZWl2ZWQgK1xcclxcbiAgICAgICAgICAgICAgICAgICAgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0KSkgKlxcclxcbiAgICAgICAgICAgIDEwMFxcclxcbiAgICAgICAgKS50b1ByZWNpc2lvbigyKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5sYXN0RG93bmxvYWQgPSAwO1xcclxcbiAgICB0aGlzLmdldERvd25sb2FkU3BlZWQgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcclxcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSB0aGlzLmdldFRvdGFsRG93bmxvYWQoUlRDSWNlQ2FuZGlkYXRlUGFpcik7XFxyXFxuICAgICAgICBjb25zdCBzcGVlZCA9IGRvd25sb2FkIC0gdGhpcy5sYXN0RG93bmxvYWQ7XFxyXFxuICAgICAgICB0aGlzLmxhc3REb3dubG9hZCA9IGRvd25sb2FkO1xcclxcbiAgICAgICAgcmV0dXJuIHNwZWVkO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldEF2ZXJhZ2VEb3dubG9hZFNwZWVkID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIC9cXHJcXG4gICAgICAgICAgICAodGhpcy50aW1lU2luY2VTdGFydCgpIC8gMTAwMClcXHJcXG4gICAgICAgICk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZCA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxyXFxuICAgICAgICByZXR1cm4gUlRDSWNlQ2FuZGlkYXRlUGFpci5ieXRlc1JlY2VpdmVkO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldFJlc29sdXRpb24gPSBmdW5jdGlvbiAoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcikge1xcclxcbiAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5mcmFtZVdpZHRoLFxcclxcbiAgICAgICAgICAgIGhlaWdodDogUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5mcmFtZUhlaWdodCxcXHJcXG4gICAgICAgIH07XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0Q29kZWMgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxyXFxuICAgICAgICBjb25zdCBjb2RlY1N0YXQgPSB0aGlzLmdldFN0YXQoXFxyXFxuICAgICAgICAgICAgKHN0YXQpID0+IHN0YXRbMF0gPT09IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5jb2RlY0lkLFxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgICAgIHJldHVybiBjb2RlY1N0YXQubWltZVR5cGUuc3Vic3RyaW5nKCd2aWRlby8nLmxlbmd0aCk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMubGFzdEZyYW1lcyA9IDA7XFxyXFxuICAgIHRoaXMuZ2V0RlBTID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcclxcbiAgICAgICAgY29uc3QgZnBzID0gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLmZyYW1lc0RlY29kZWQgLSB0aGlzLmxhc3RGcmFtZXM7XFxyXFxuICAgICAgICB0aGlzLmxhc3RGcmFtZXMgPSBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0uZnJhbWVzRGVjb2RlZDtcXHJcXG4gICAgICAgIHJldHVybiBmcHM7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMudGltZVNpbmNlU3RhcnQgPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xcclxcbiAgICB9O1xcclxcbn07XFxyXFxuXFxyXFxuU3RhZGlhUGx1c01vbml0b3IgPSBuZXcgTW9uaXRvclJ1bm5hYmxlKCk7XFxyXFxuXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGltc2VsZWN0Lm1pbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2xpbVNlbGVjdD10KCk6ZS5TbGltU2VsZWN0PXQoKX0od2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuKHM9e30sbi5tPWk9W2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7dD10fHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBpPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIGkuaW5pdEN1c3RvbUV2ZW50KGUsdC5idWJibGVzLHQuY2FuY2VsYWJsZSx0LmRldGFpbCksaX12YXIgbjt0Ll9fZXNNb2R1bGU9ITAsdC5oYXNDbGFzc0luVHJlZT1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHMoZSx0KXtyZXR1cm4gdCYmZSYmZS5jbGFzc0xpc3QmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKHQpP2U6bnVsbH1yZXR1cm4gcyhlLHQpfHxmdW5jdGlvbiBlKHQsaSl7cmV0dXJuIHQmJnQhPT1kb2N1bWVudD9zKHQsaSk/dDplKHQucGFyZW50Tm9kZSxpKTpudWxsfShlLHQpfSx0LmVuc3VyZUVsZW1lbnRJblZpZXc9ZnVuY3Rpb24oZSx0KXt2YXIgaT1lLnNjcm9sbFRvcCtlLm9mZnNldFRvcCxzPWkrZS5jbGllbnRIZWlnaHQsbj10Lm9mZnNldFRvcCxhPW4rdC5jbGllbnRIZWlnaHQ7bjxpP2Uuc2Nyb2xsVG9wLT1pLW46czxhJiYoZS5zY3JvbGxUb3ArPWEtcyl9LHQucHV0Q29udGVudD1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ZS5vZmZzZXRIZWlnaHQsbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGE9aT9uLnRvcDpuLnRvcC1zLG89aT9uLmJvdHRvbTpuLmJvdHRvbStzO3JldHVybiBhPD0wP1wiYmVsb3dcIjpvPj13aW5kb3cuaW5uZXJIZWlnaHQ/XCJhYm92ZVwiOmk/dDpcImJlbG93XCJ9LHQuZGVib3VuY2U9ZnVuY3Rpb24obixhLG8pe3ZhciBsO3JldHVybiB2b2lkIDA9PT1hJiYoYT0xMDApLHZvaWQgMD09PW8mJihvPSExKSxmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyllW3RdPWFyZ3VtZW50c1t0XTt2YXIgaT1zZWxmLHM9byYmIWw7Y2xlYXJUaW1lb3V0KGwpLGw9c2V0VGltZW91dChmdW5jdGlvbigpe2w9bnVsbCxvfHxuLmFwcGx5KGksZSl9LGEpLHMmJm4uYXBwbHkoaSxlKX19LHQuaXNWYWx1ZUluQXJyYXlPZk9iamVjdHM9ZnVuY3Rpb24oZSx0LGkpe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVybiBlW3RdPT09aTtmb3IodmFyIHM9MCxuPWU7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107aWYoYSYmYVt0XSYmYVt0XT09PWkpcmV0dXJuITB9cmV0dXJuITF9LHQuaGlnaGxpZ2h0PWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz1lLG49bmV3IFJlZ0V4cChcIihcIit0LnRyaW0oKStcIikoPyFbXjxdKj5bXjw+XSo8LylcIixcImlcIik7aWYoIWUubWF0Y2gobikpcmV0dXJuIGU7dmFyIGE9ZS5tYXRjaChuKS5pbmRleCxvPWErZS5tYXRjaChuKVswXS50b1N0cmluZygpLmxlbmd0aCxsPWUuc3Vic3RyaW5nKGEsbyk7cmV0dXJuIHM9cy5yZXBsYWNlKG4sJzxtYXJrIGNsYXNzPVwiJytpKydcIj4nK2wrXCI8L21hcms+XCIpfSxcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXdpbmRvdykuQ3VzdG9tRXZlbnQmJihzLnByb3RvdHlwZT1uLkV2ZW50LnByb3RvdHlwZSxuLkN1c3RvbUV2ZW50PXMpfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5uZXdPcHRpb249ZnVuY3Rpb24oZSl7cmV0dXJue2lkOmUuaWQ/ZS5pZDpTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWU/ZS52YWx1ZTpcIlwiLHRleHQ6ZS50ZXh0P2UudGV4dDpcIlwiLGlubmVySFRNTDplLmlubmVySFRNTD9lLmlubmVySFRNTDpcIlwiLHNlbGVjdGVkOiEhZS5zZWxlY3RlZCYmZS5zZWxlY3RlZCxkaXNwbGF5OnZvaWQgMD09PWUuZGlzcGxheXx8ZS5kaXNwbGF5LGRpc2FibGVkOiEhZS5kaXNhYmxlZCYmZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjohIWUucGxhY2Vob2xkZXImJmUucGxhY2Vob2xkZXIsY2xhc3M6ZS5jbGFzcz9lLmNsYXNzOnZvaWQgMCxkYXRhOmUuZGF0YT9lLmRhdGE6e319fSxuLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oZSl7dGhpcy5kYXRhLnB1c2goe2lkOlN0cmluZyhNYXRoLmZsb29yKDFlOCpNYXRoLnJhbmRvbSgpKSksdmFsdWU6ZS52YWx1ZSx0ZXh0OmUudGV4dCxpbm5lckhUTUw6XCJcIixzZWxlY3RlZDohMSxkaXNwbGF5OiEwLGRpc2FibGVkOiExLHBsYWNlaG9sZGVyOiExLGNsYXNzOnZvaWQgMCxkYXRhOnt9fSl9LG4ucHJvdG90eXBlLnBhcnNlU2VsZWN0RGF0YT1mdW5jdGlvbigpe3RoaXMuZGF0YT1bXTtmb3IodmFyIGU9MCx0PXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudC5jaGlsZE5vZGVzO2U8dC5sZW5ndGg7ZSsrKXt2YXIgaT10W2VdO2lmKFwiT1BUR1JPVVBcIj09PWkubm9kZU5hbWUpe2Zvcih2YXIgcz17bGFiZWw6aS5sYWJlbCxvcHRpb25zOltdfSxuPTAsYT1pLmNoaWxkTm9kZXM7bjxhLmxlbmd0aDtuKyspe3ZhciBvPWFbbl07aWYoXCJPUFRJT05cIj09PW8ubm9kZU5hbWUpe3ZhciBsPXRoaXMucHVsbE9wdGlvbkRhdGEobyk7cy5vcHRpb25zLnB1c2gobCksbC5wbGFjZWhvbGRlciYmXCJcIiE9PWwudGV4dC50cmltKCkmJih0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dD1sLnRleHQpfX10aGlzLmRhdGEucHVzaChzKX1lbHNlXCJPUFRJT05cIj09PWkubm9kZU5hbWUmJihsPXRoaXMucHVsbE9wdGlvbkRhdGEoaSksdGhpcy5kYXRhLnB1c2gobCksbC5wbGFjZWhvbGRlciYmXCJcIiE9PWwudGV4dC50cmltKCkmJih0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dD1sLnRleHQpKX19LG4ucHJvdG90eXBlLnB1bGxPcHRpb25EYXRhPWZ1bmN0aW9uKGUpe3JldHVybntpZDohIWUuZGF0YXNldCYmZS5kYXRhc2V0LmlkfHxTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWUsdGV4dDplLnRleHQsaW5uZXJIVE1MOmUuaW5uZXJIVE1MLHNlbGVjdGVkOmUuc2VsZWN0ZWQsZGlzYWJsZWQ6ZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjpcInRydWVcIj09PWUuZGF0YXNldC5wbGFjZWhvbGRlcixjbGFzczplLmNsYXNzTmFtZSxzdHlsZTplLnN0eWxlLmNzc1RleHQsZGF0YTplLmRhdGFzZXR9fSxuLnByb3RvdHlwZS5zZXRTZWxlY3RlZEZyb21TZWxlY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgZT1bXSx0PTAsaT10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQub3B0aW9uczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtpZihzLnNlbGVjdGVkKXt2YXIgbj10aGlzLmdldE9iamVjdEZyb21EYXRhKHMudmFsdWUsXCJ2YWx1ZVwiKTtuJiZuLmlkJiZlLnB1c2gobi5pZCl9fXRoaXMuc2V0U2VsZWN0ZWQoZSxcImlkXCIpfWVsc2V7dmFyIGE9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50O2lmKC0xIT09YS5zZWxlY3RlZEluZGV4KXt2YXIgbz1hLm9wdGlvbnNbYS5zZWxlY3RlZEluZGV4XS52YWx1ZTt0aGlzLnNldFNlbGVjdGVkKG8sXCJ2YWx1ZVwiKX19fSxuLnByb3RvdHlwZS5zZXRTZWxlY3RlZD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PVwiaWRcIik7Zm9yKHZhciBpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO3IucGxhY2Vob2xkZXJ8fChyLnNlbGVjdGVkPXRoaXMuc2hvdWxkQmVTZWxlY3RlZChyLGUsdCkpfX19ZWxzZSBuLnNlbGVjdGVkPXRoaXMuc2hvdWxkQmVTZWxlY3RlZChuLGUsdCl9fSxuLnByb3RvdHlwZS5zaG91bGRCZVNlbGVjdGVkPWZ1bmN0aW9uKGUsdCxpKXtpZih2b2lkIDA9PT1pJiYoaT1cImlkXCIpLEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciBzPTAsbj10O3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO2lmKGkgaW4gZSYmU3RyaW5nKGVbaV0pPT09U3RyaW5nKGEpKXJldHVybiEwfWVsc2UgaWYoaSBpbiBlJiZTdHJpbmcoZVtpXSk9PT1TdHJpbmcodCkpcmV0dXJuITA7cmV0dXJuITF9LG4ucHJvdG90eXBlLmdldFNlbGVjdGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHR9LHQ9W10saT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtyLnNlbGVjdGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3QucHVzaChyKTplPXIpfX19ZWxzZSBuLnNlbGVjdGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3QucHVzaChuKTplPW4pfXJldHVybiB0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/dDplfSxuLnByb3RvdHlwZS5hZGRUb1NlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9XCJpZFwiKSx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe3ZhciBpPVtdLHM9dGhpcy5nZXRTZWxlY3RlZCgpO2lmKEFycmF5LmlzQXJyYXkocykpZm9yKHZhciBuPTAsYT1zO248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2kucHVzaChvW3RdKX1pLnB1c2goZSksdGhpcy5zZXRTZWxlY3RlZChpLHQpfX0sbi5wcm90b3R5cGUucmVtb3ZlRnJvbVNlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9XCJpZFwiKSx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgaT1bXSxzPTAsbj10aGlzLmdldFNlbGVjdGVkKCk7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107U3RyaW5nKGFbdF0pIT09U3RyaW5nKGUpJiZpLnB1c2goYVt0XSl9dGhpcy5zZXRTZWxlY3RlZChpLHQpfX0sbi5wcm90b3R5cGUub25EYXRhQ2hhbmdlPWZ1bmN0aW9uKCl7dGhpcy5tYWluLm9uQ2hhbmdlJiZ0aGlzLmlzT25DaGFuZ2VFbmFibGVkJiZ0aGlzLm1haW4ub25DaGFuZ2UoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdldFNlbGVjdGVkKCkpKSl9LG4ucHJvdG90eXBlLmdldE9iamVjdEZyb21EYXRhPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9XCJpZFwiKTtmb3IodmFyIGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZih0IGluIG4mJlN0cmluZyhuW3RdKT09PVN0cmluZyhlKSlyZXR1cm4gbjtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bjtpZihhLm9wdGlvbnMpZm9yKHZhciBvPTAsbD1hLm9wdGlvbnM7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107aWYoU3RyaW5nKHJbdF0pPT09U3RyaW5nKGUpKXJldHVybiByfX19cmV0dXJuIG51bGx9LG4ucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbihuKXtpZihcIlwiIT09KHRoaXMuc2VhcmNoVmFsdWU9bikudHJpbSgpKXt2YXIgYT10aGlzLm1haW4uY29uZmlnLnNlYXJjaEZpbHRlcixlPXRoaXMuZGF0YS5zbGljZSgwKTtuPW4udHJpbSgpO3ZhciB0PWUubWFwKGZ1bmN0aW9uKGUpe2lmKGUuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgdD1lLGk9W107aWYodC5vcHRpb25zJiYoaT10Lm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBhKGUsbil9KSksMCE9PWkubGVuZ3RoKXt2YXIgcz1PYmplY3QuYXNzaWduKHt9LHQpO3JldHVybiBzLm9wdGlvbnM9aSxzfX1yZXR1cm4gZS5oYXNPd25Qcm9wZXJ0eShcInRleHRcIikmJmEoZSxuKT9lOm51bGx9KTt0aGlzLmZpbHRlcmVkPXQuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9ZWxzZSB0aGlzLmZpbHRlcmVkPW51bGx9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5jb250ZW50T3Blbj0hMSx0aGlzLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsdGhpcy5pc09uQ2hhbmdlRW5hYmxlZD0hMCx0aGlzLm1haW49ZS5tYWluLHRoaXMuc2VhcmNoVmFsdWU9XCJcIix0aGlzLmRhdGE9W10sdGhpcy5maWx0ZXJlZD1udWxsLHRoaXMucGFyc2VTZWxlY3REYXRhKCksdGhpcy5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKX1mdW5jdGlvbiByKGUpe3JldHVybiB2b2lkIDAhPT1lLnRleHR8fChjb25zb2xlLmVycm9yKFwiRGF0YSBvYmplY3Qgb3B0aW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBoYXZlIGEgdGV4dCB2YWx1ZS4gQ2hlY2sgb2JqZWN0OiBcIitKU09OLnN0cmluZ2lmeShlKSksITEpfXQuRGF0YT1zLHQudmFsaWRhdGVEYXRhPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiBjb25zb2xlLmVycm9yKFwiRGF0YSBtdXN0IGJlIGFuIGFycmF5IG9mIG9iamVjdHNcIiksITE7Zm9yKHZhciB0PTAsaT0wLHM9ZTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3IobFtvXSl8fHQrK319fWVsc2UgcihuKXx8dCsrfXJldHVybiAwPT09dH0sdC52YWxpZGF0ZU9wdGlvbj1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPWkoMyksbj1pKDQpLGE9aSg1KSxvPWkoMSksbD1pKDApLHI9KGMucHJvdG90eXBlLnZhbGlkYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PVwic3RyaW5nXCI9PXR5cGVvZiBlLnNlbGVjdD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuc2VsZWN0KTplLnNlbGVjdDtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBzZWxlY3QgZWxlbWVudFwiKTtpZihcIlNFTEVDVFwiIT09dC50YWdOYW1lKXRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXNudCBvZiB0eXBlIHNlbGVjdFwiKTtyZXR1cm4gdH0sYy5wcm90b3R5cGUuc2VsZWN0ZWQ9ZnVuY3Rpb24oKXtpZih0aGlzLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGU9W10sdD0wLGk9bj10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtlLnB1c2gocy52YWx1ZSl9cmV0dXJuIGV9dmFyIG47cmV0dXJuKG49dGhpcy5kYXRhLmdldFNlbGVjdGVkKCkpP24udmFsdWU6XCJcIn0sYy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCxpLHMpe3ZvaWQgMD09PXQmJih0PVwidmFsdWVcIiksdm9pZCAwPT09aSYmKGk9ITApLHZvaWQgMD09PXMmJihzPSEwKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiYhQXJyYXkuaXNBcnJheShlKT90aGlzLmRhdGEuYWRkVG9TZWxlY3RlZChlLHQpOnRoaXMuZGF0YS5zZXRTZWxlY3RlZChlLHQpLHRoaXMuc2VsZWN0LnNldFZhbHVlKCksdGhpcy5kYXRhLm9uRGF0YUNoYW5nZSgpLHRoaXMucmVuZGVyKCksaSYmdGhpcy5jbG9zZSgpfSxjLnByb3RvdHlwZS5zZXRTZWxlY3RlZD1mdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT10JiYodD1cInZhbHVlXCIpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCksdGhpcy5zZXQoZSx0LGkscyl9LGMucHJvdG90eXBlLnNldERhdGE9ZnVuY3Rpb24oZSl7aWYoby52YWxpZGF0ZURhdGEoZSkpe3ZhciB0PUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpLGk9dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7aWYodGhpcy5jb25maWcuaXNBamF4JiZpKWlmKHRoaXMuY29uZmlnLmlzTXVsdGlwbGUpZm9yKHZhciBzPTAsbj1pLnJldmVyc2UoKTtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTt0LnVuc2hpZnQoYSl9ZWxzZSB0LnVuc2hpZnQodGhpcy5kYXRhLmdldFNlbGVjdGVkKCkpLHQudW5zaGlmdCh7dGV4dDpcIlwiLHBsYWNlaG9sZGVyOiEwfSk7dGhpcy5zZWxlY3QuY3JlYXRlKHQpLHRoaXMuZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCl9ZWxzZSBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbiBwcm9ibGVtIG9uOiAjXCIrdGhpcy5zZWxlY3QuZWxlbWVudC5pZCl9LGMucHJvdG90eXBlLmFkZERhdGE9ZnVuY3Rpb24oZSl7by52YWxpZGF0ZURhdGEoW2VdKT8odGhpcy5kYXRhLmFkZCh0aGlzLmRhdGEubmV3T3B0aW9uKGUpKSx0aGlzLnNlbGVjdC5jcmVhdGUodGhpcy5kYXRhLmRhdGEpLHRoaXMuZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdGhpcy5yZW5kZXIoKSk6Y29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gcHJvYmxlbSBvbjogI1wiK3RoaXMuc2VsZWN0LmVsZW1lbnQuaWQpfSxjLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0aGlzLmNvbmZpZy5pc0VuYWJsZWQmJiF0aGlzLmRhdGEuY29udGVudE9wZW4pe2lmKHRoaXMuYmVmb3JlT3BlbiYmdGhpcy5iZWZvcmVPcGVuKCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQucGx1cy5jbGFzc0xpc3QuYWRkKFwic3MtY3Jvc3NcIik6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3ctZG93blwiKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy11cFwiKSksdGhpcy5zbGltW3RoaXMuY29uZmlnLmlzTXVsdGlwbGU/XCJtdWx0aVNlbGVjdGVkXCI6XCJzaW5nbGVTZWxlY3RlZFwiXS5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3ZlXCI9PT10aGlzLmRhdGEuY29udGVudFBvc2l0aW9uP3RoaXMuY29uZmlnLm9wZW5BYm92ZTp0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuY29uZmlnLmFkZFRvQm9keSl7dmFyIHQ9dGhpcy5zbGltLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt0aGlzLnNsaW0uY29udGVudC5zdHlsZS50b3A9dC50b3ArdC5oZWlnaHQrd2luZG93LnNjcm9sbFkrXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLmxlZnQ9dC5sZWZ0K3dpbmRvdy5zY3JvbGxYK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS53aWR0aD10LndpZHRoK1wicHhcIn1pZih0aGlzLnNsaW0uY29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW4pLFwidXBcIj09PXRoaXMuY29uZmlnLnNob3dDb250ZW50LnRvTG93ZXJDYXNlKCk/dGhpcy5tb3ZlQ29udGVudEFib3ZlKCk6XCJkb3duXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudC50b0xvd2VyQ2FzZSgpP3RoaXMubW92ZUNvbnRlbnRCZWxvdygpOlwiYWJvdmVcIj09PWwucHV0Q29udGVudCh0aGlzLnNsaW0uY29udGVudCx0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uLHRoaXMuZGF0YS5jb250ZW50T3Blbik/dGhpcy5tb3ZlQ29udGVudEFib3ZlKCk6dGhpcy5tb3ZlQ29udGVudEJlbG93KCksIXRoaXMuY29uZmlnLmlzTXVsdGlwbGUpe3ZhciBpPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO2lmKGkpe3ZhciBzPWkuaWQsbj10aGlzLnNsaW0ubGlzdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pZD1cIicrcysnXCJdJyk7biYmbC5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMuc2xpbS5saXN0LG4pfX1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5kYXRhLmNvbnRlbnRPcGVuPSEwLGUuY29uZmlnLnNlYXJjaEZvY3VzJiZlLnNsaW0uc2VhcmNoLmlucHV0LmZvY3VzKCksZS5hZnRlck9wZW4mJmUuYWZ0ZXJPcGVuKCl9LHRoaXMuY29uZmlnLnRpbWVvdXREZWxheSl9fSxjLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5kYXRhLmNvbnRlbnRPcGVuJiYodGhpcy5iZWZvcmVDbG9zZSYmdGhpcy5iZWZvcmVDbG9zZSgpLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkPyh0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQucGx1cy5jbGFzc0xpc3QucmVtb3ZlKFwic3MtY3Jvc3NcIikpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93LWRvd25cIiksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3ctdXBcIikpLHRoaXMuc2xpbS5jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbiksdGhpcy5kYXRhLmNvbnRlbnRPcGVuPSExLHRoaXMuc2VhcmNoKFwiXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnNsaW0uY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKSxlLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIixlLmNvbmZpZy5pc011bHRpcGxlJiZlLnNsaW0ubXVsdGlTZWxlY3RlZD8oZS5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkFib3ZlKSxlLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQmVsb3cpKTplLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJihlLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkFib3ZlKSxlLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkJlbG93KSksZS5zbGltLnNlYXJjaC5pbnB1dC5ibHVyKCksZS5hZnRlckNsb3NlJiZlLmFmdGVyQ2xvc2UoKX0sdGhpcy5jb25maWcudGltZW91dERlbGF5KSl9LGMucHJvdG90eXBlLm1vdmVDb250ZW50QWJvdmU9ZnVuY3Rpb24oKXt2YXIgZT0wO3RoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP2U9dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLm9mZnNldEhlaWdodDp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJihlPXRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIub2Zmc2V0SGVpZ2h0KTt2YXIgdD1lK3RoaXMuc2xpbS5jb250ZW50Lm9mZnNldEhlaWdodC0xO3RoaXMuc2xpbS5jb250ZW50LnN0eWxlLm1hcmdpbj1cIi1cIit0K1wicHggMCAwIDBcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS5oZWlnaHQ9dC1lKzErXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbj1cImNlbnRlciBib3R0b21cIix0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYWJvdmVcIix0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkFib3ZlKSl9LGMucHJvdG90eXBlLm1vdmVDb250ZW50QmVsb3c9ZnVuY3Rpb24oKXt0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIix0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkJlbG93KSl9LGMucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzRW5hYmxlZD0hMCx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5kaXNhYmxlZCk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiZ0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuZGlzYWJsZWQpLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSExLHRoaXMuc2VsZWN0LmVsZW1lbnQuZGlzYWJsZWQ9ITEsdGhpcy5zbGltLnNlYXJjaC5pbnB1dC5kaXNhYmxlZD0hMSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMH0sYy5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzRW5hYmxlZD0hMSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5kaXNhYmxlZCk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiZ0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuZGlzYWJsZWQpLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSExLHRoaXMuc2VsZWN0LmVsZW1lbnQuZGlzYWJsZWQ9ITAsdGhpcy5zbGltLnNlYXJjaC5pbnB1dC5kaXNhYmxlZD0hMCx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMH0sYy5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKHQpe2lmKHRoaXMuZGF0YS5zZWFyY2hWYWx1ZSE9PXQpaWYodGhpcy5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZT10LHRoaXMuY29uZmlnLmlzQWpheCl7dmFyIGk9dGhpczt0aGlzLmNvbmZpZy5pc1NlYXJjaGluZz0hMCx0aGlzLnJlbmRlcigpLHRoaXMuYWpheCYmdGhpcy5hamF4KHQsZnVuY3Rpb24oZSl7aS5jb25maWcuaXNTZWFyY2hpbmc9ITEsQXJyYXkuaXNBcnJheShlKT8oZS51bnNoaWZ0KHt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6ITB9KSxpLnNldERhdGEoZSksaS5kYXRhLnNlYXJjaCh0KSxpLnJlbmRlcigpKTpcInN0cmluZ1wiPT10eXBlb2YgZT9pLnNsaW0ub3B0aW9ucyhlKTppLnJlbmRlcigpfSl9ZWxzZSB0aGlzLmRhdGEuc2VhcmNoKHQpLHRoaXMucmVuZGVyKCl9LGMucHJvdG90eXBlLnNldFNlYXJjaFRleHQ9ZnVuY3Rpb24oZSl7dGhpcy5jb25maWcuc2VhcmNoVGV4dD1lfSxjLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc011bHRpcGxlP3RoaXMuc2xpbS52YWx1ZXMoKToodGhpcy5zbGltLnBsYWNlaG9sZGVyKCksdGhpcy5zbGltLmRlc2VsZWN0KCkpLHRoaXMuc2xpbS5vcHRpb25zKCl9LGMucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9bnVsbCk7dmFyIHQ9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK2UrXCIuc3MtbWFpblwiKTp0aGlzLnNsaW0uY29udGFpbmVyLGk9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3NpZD1cIitlK1wiXVwiKTp0aGlzLnNlbGVjdC5lbGVtZW50O2lmKHQmJmkmJihpLnN0eWxlLmRpc3BsYXk9XCJcIixkZWxldGUgaS5kYXRhc2V0LnNzaWQsaS5zbGltPW51bGwsdC5wYXJlbnRFbGVtZW50JiZ0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodCksdGhpcy5jb25maWcuYWRkVG9Cb2R5KSl7dmFyIHM9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK2UrXCIuc3MtY29udGVudFwiKTp0aGlzLnNsaW0uY29udGVudDtpZighcylyZXR1cm47ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzKX19LGMpO2Z1bmN0aW9uIGMoZSl7dmFyIHQ9dGhpczt0aGlzLmFqYXg9bnVsbCx0aGlzLmFkZGFibGU9bnVsbCx0aGlzLmJlZm9yZU9uQ2hhbmdlPW51bGwsdGhpcy5vbkNoYW5nZT1udWxsLHRoaXMuYmVmb3JlT3Blbj1udWxsLHRoaXMuYWZ0ZXJPcGVuPW51bGwsdGhpcy5iZWZvcmVDbG9zZT1udWxsLHRoaXMuYWZ0ZXJDbG9zZT1udWxsO3ZhciBpPXRoaXMudmFsaWRhdGUoZSk7aS5kYXRhc2V0LnNzaWQmJnRoaXMuZGVzdHJveShpLmRhdGFzZXQuc3NpZCksZS5hamF4JiYodGhpcy5hamF4PWUuYWpheCksZS5hZGRhYmxlJiYodGhpcy5hZGRhYmxlPWUuYWRkYWJsZSksdGhpcy5jb25maWc9bmV3IHMuQ29uZmlnKHtzZWxlY3Q6aSxpc0FqYXg6ISFlLmFqYXgsc2hvd1NlYXJjaDplLnNob3dTZWFyY2gsc2VhcmNoUGxhY2Vob2xkZXI6ZS5zZWFyY2hQbGFjZWhvbGRlcixzZWFyY2hUZXh0OmUuc2VhcmNoVGV4dCxzZWFyY2hpbmdUZXh0OmUuc2VhcmNoaW5nVGV4dCxzZWFyY2hGb2N1czplLnNlYXJjaEZvY3VzLHNlYXJjaEhpZ2hsaWdodDplLnNlYXJjaEhpZ2hsaWdodCxzZWFyY2hGaWx0ZXI6ZS5zZWFyY2hGaWx0ZXIsY2xvc2VPblNlbGVjdDplLmNsb3NlT25TZWxlY3Qsc2hvd0NvbnRlbnQ6ZS5zaG93Q29udGVudCxwbGFjZWhvbGRlclRleHQ6ZS5wbGFjZWhvbGRlcixhbGxvd0Rlc2VsZWN0OmUuYWxsb3dEZXNlbGVjdCxhbGxvd0Rlc2VsZWN0T3B0aW9uOmUuYWxsb3dEZXNlbGVjdE9wdGlvbixoaWRlU2VsZWN0ZWRPcHRpb246ZS5oaWRlU2VsZWN0ZWRPcHRpb24sZGVzZWxlY3RMYWJlbDplLmRlc2VsZWN0TGFiZWwsaXNFbmFibGVkOmUuaXNFbmFibGVkLHZhbHVlc1VzZVRleHQ6ZS52YWx1ZXNVc2VUZXh0LHNob3dPcHRpb25Ub29sdGlwczplLnNob3dPcHRpb25Ub29sdGlwcyxzZWxlY3RCeUdyb3VwOmUuc2VsZWN0QnlHcm91cCxsaW1pdDplLmxpbWl0LHRpbWVvdXREZWxheTplLnRpbWVvdXREZWxheSxhZGRUb0JvZHk6ZS5hZGRUb0JvZHl9KSx0aGlzLnNlbGVjdD1uZXcgbi5TZWxlY3Qoe3NlbGVjdDppLG1haW46dGhpc30pLHRoaXMuZGF0YT1uZXcgby5EYXRhKHttYWluOnRoaXN9KSx0aGlzLnNsaW09bmV3IGEuU2xpbSh7bWFpbjp0aGlzfSksdGhpcy5zZWxlY3QuZWxlbWVudC5wYXJlbnROb2RlJiZ0aGlzLnNlbGVjdC5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuc2xpbS5jb250YWluZXIsdGhpcy5zZWxlY3QuZWxlbWVudC5uZXh0U2libGluZyksZS5kYXRhP3RoaXMuc2V0RGF0YShlLmRhdGEpOnRoaXMucmVuZGVyKCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS50YXJnZXQmJiFsLmhhc0NsYXNzSW5UcmVlKGUudGFyZ2V0LHQuY29uZmlnLmlkKSYmdC5jbG9zZSgpfSksXCJhdXRvXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudCYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixsLmRlYm91bmNlKGZ1bmN0aW9uKGUpe3QuZGF0YS5jb250ZW50T3BlbiYmKFwiYWJvdmVcIj09PWwucHV0Q29udGVudCh0LnNsaW0uY29udGVudCx0LmRhdGEuY29udGVudFBvc2l0aW9uLHQuZGF0YS5jb250ZW50T3Blbik/dC5tb3ZlQ29udGVudEFib3ZlKCk6dC5tb3ZlQ29udGVudEJlbG93KCkpfSksITEpLGUuYmVmb3JlT25DaGFuZ2UmJih0aGlzLmJlZm9yZU9uQ2hhbmdlPWUuYmVmb3JlT25DaGFuZ2UpLGUub25DaGFuZ2UmJih0aGlzLm9uQ2hhbmdlPWUub25DaGFuZ2UpLGUuYmVmb3JlT3BlbiYmKHRoaXMuYmVmb3JlT3Blbj1lLmJlZm9yZU9wZW4pLGUuYWZ0ZXJPcGVuJiYodGhpcy5hZnRlck9wZW49ZS5hZnRlck9wZW4pLGUuYmVmb3JlQ2xvc2UmJih0aGlzLmJlZm9yZUNsb3NlPWUuYmVmb3JlQ2xvc2UpLGUuYWZ0ZXJDbG9zZSYmKHRoaXMuYWZ0ZXJDbG9zZT1lLmFmdGVyQ2xvc2UpLHRoaXMuY29uZmlnLmlzRW5hYmxlZHx8dGhpcy5kaXNhYmxlKCl9dC5kZWZhdWx0PXJ9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLnNlYXJjaEZpbHRlcj1mdW5jdGlvbihlLHQpe3JldHVybi0xIT09ZS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0LnRvTG93ZXJDYXNlKCkpfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMuaWQ9XCJcIix0aGlzLmlzTXVsdGlwbGU9ITEsdGhpcy5pc0FqYXg9ITEsdGhpcy5pc1NlYXJjaGluZz0hMSx0aGlzLnNob3dTZWFyY2g9ITAsdGhpcy5zZWFyY2hGb2N1cz0hMCx0aGlzLnNlYXJjaEhpZ2hsaWdodD0hMSx0aGlzLmNsb3NlT25TZWxlY3Q9ITAsdGhpcy5zaG93Q29udGVudD1cImF1dG9cIix0aGlzLnNlYXJjaFBsYWNlaG9sZGVyPVwiU2VhcmNoXCIsdGhpcy5zZWFyY2hUZXh0PVwiTm8gUmVzdWx0c1wiLHRoaXMuc2VhcmNoaW5nVGV4dD1cIlNlYXJjaGluZy4uLlwiLHRoaXMucGxhY2Vob2xkZXJUZXh0PVwiU2VsZWN0IFZhbHVlXCIsdGhpcy5hbGxvd0Rlc2VsZWN0PSExLHRoaXMuYWxsb3dEZXNlbGVjdE9wdGlvbj0hMSx0aGlzLmhpZGVTZWxlY3RlZE9wdGlvbj0hMSx0aGlzLmRlc2VsZWN0TGFiZWw9XCJ4XCIsdGhpcy5pc0VuYWJsZWQ9ITAsdGhpcy52YWx1ZXNVc2VUZXh0PSExLHRoaXMuc2hvd09wdGlvblRvb2x0aXBzPSExLHRoaXMuc2VsZWN0QnlHcm91cD0hMSx0aGlzLmxpbWl0PTAsdGhpcy50aW1lb3V0RGVsYXk9MjAwLHRoaXMuYWRkVG9Cb2R5PSExLHRoaXMubWFpbj1cInNzLW1haW5cIix0aGlzLnNpbmdsZVNlbGVjdGVkPVwic3Mtc2luZ2xlLXNlbGVjdGVkXCIsdGhpcy5hcnJvdz1cInNzLWFycm93XCIsdGhpcy5tdWx0aVNlbGVjdGVkPVwic3MtbXVsdGktc2VsZWN0ZWRcIix0aGlzLmFkZD1cInNzLWFkZFwiLHRoaXMucGx1cz1cInNzLXBsdXNcIix0aGlzLnZhbHVlcz1cInNzLXZhbHVlc1wiLHRoaXMudmFsdWU9XCJzcy12YWx1ZVwiLHRoaXMudmFsdWVUZXh0PVwic3MtdmFsdWUtdGV4dFwiLHRoaXMudmFsdWVEZWxldGU9XCJzcy12YWx1ZS1kZWxldGVcIix0aGlzLmNvbnRlbnQ9XCJzcy1jb250ZW50XCIsdGhpcy5vcGVuPVwic3Mtb3BlblwiLHRoaXMub3BlbkFib3ZlPVwic3Mtb3Blbi1hYm92ZVwiLHRoaXMub3BlbkJlbG93PVwic3Mtb3Blbi1iZWxvd1wiLHRoaXMuc2VhcmNoPVwic3Mtc2VhcmNoXCIsdGhpcy5zZWFyY2hIaWdobGlnaHRlcj1cInNzLXNlYXJjaC1oaWdobGlnaHRcIix0aGlzLmFkZGFibGU9XCJzcy1hZGRhYmxlXCIsdGhpcy5saXN0PVwic3MtbGlzdFwiLHRoaXMub3B0Z3JvdXA9XCJzcy1vcHRncm91cFwiLHRoaXMub3B0Z3JvdXBMYWJlbD1cInNzLW9wdGdyb3VwLWxhYmVsXCIsdGhpcy5vcHRncm91cExhYmVsU2VsZWN0YWJsZT1cInNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGVcIix0aGlzLm9wdGlvbj1cInNzLW9wdGlvblwiLHRoaXMub3B0aW9uU2VsZWN0ZWQ9XCJzcy1vcHRpb24tc2VsZWN0ZWRcIix0aGlzLmhpZ2hsaWdodGVkPVwic3MtaGlnaGxpZ2h0ZWRcIix0aGlzLmRpc2FibGVkPVwic3MtZGlzYWJsZWRcIix0aGlzLmhpZGU9XCJzcy1oaWRlXCIsdGhpcy5pZD1cInNzLVwiK01hdGguZmxvb3IoMWU1Kk1hdGgucmFuZG9tKCkpLHRoaXMuc3R5bGU9ZS5zZWxlY3Quc3R5bGUuY3NzVGV4dCx0aGlzLmNsYXNzPWUuc2VsZWN0LmNsYXNzTmFtZS5zcGxpdChcIiBcIiksdGhpcy5pc011bHRpcGxlPWUuc2VsZWN0Lm11bHRpcGxlLHRoaXMuaXNBamF4PWUuaXNBamF4LHRoaXMuc2hvd1NlYXJjaD0hMSE9PWUuc2hvd1NlYXJjaCx0aGlzLnNlYXJjaEZvY3VzPSExIT09ZS5zZWFyY2hGb2N1cyx0aGlzLnNlYXJjaEhpZ2hsaWdodD0hMD09PWUuc2VhcmNoSGlnaGxpZ2h0LHRoaXMuY2xvc2VPblNlbGVjdD0hMSE9PWUuY2xvc2VPblNlbGVjdCxlLnNob3dDb250ZW50JiYodGhpcy5zaG93Q29udGVudD1lLnNob3dDb250ZW50KSx0aGlzLmlzRW5hYmxlZD0hMSE9PWUuaXNFbmFibGVkLGUuc2VhcmNoUGxhY2Vob2xkZXImJih0aGlzLnNlYXJjaFBsYWNlaG9sZGVyPWUuc2VhcmNoUGxhY2Vob2xkZXIpLGUuc2VhcmNoVGV4dCYmKHRoaXMuc2VhcmNoVGV4dD1lLnNlYXJjaFRleHQpLGUuc2VhcmNoaW5nVGV4dCYmKHRoaXMuc2VhcmNoaW5nVGV4dD1lLnNlYXJjaGluZ1RleHQpLGUucGxhY2Vob2xkZXJUZXh0JiYodGhpcy5wbGFjZWhvbGRlclRleHQ9ZS5wbGFjZWhvbGRlclRleHQpLHRoaXMuYWxsb3dEZXNlbGVjdD0hMD09PWUuYWxsb3dEZXNlbGVjdCx0aGlzLmFsbG93RGVzZWxlY3RPcHRpb249ITA9PT1lLmFsbG93RGVzZWxlY3RPcHRpb24sdGhpcy5oaWRlU2VsZWN0ZWRPcHRpb249ITA9PT1lLmhpZGVTZWxlY3RlZE9wdGlvbixlLmRlc2VsZWN0TGFiZWwmJih0aGlzLmRlc2VsZWN0TGFiZWw9ZS5kZXNlbGVjdExhYmVsKSxlLnZhbHVlc1VzZVRleHQmJih0aGlzLnZhbHVlc1VzZVRleHQ9ZS52YWx1ZXNVc2VUZXh0KSxlLnNob3dPcHRpb25Ub29sdGlwcyYmKHRoaXMuc2hvd09wdGlvblRvb2x0aXBzPWUuc2hvd09wdGlvblRvb2x0aXBzKSxlLnNlbGVjdEJ5R3JvdXAmJih0aGlzLnNlbGVjdEJ5R3JvdXA9ZS5zZWxlY3RCeUdyb3VwKSxlLmxpbWl0JiYodGhpcy5saW1pdD1lLmxpbWl0KSxlLnNlYXJjaEZpbHRlciYmKHRoaXMuc2VhcmNoRmlsdGVyPWUuc2VhcmNoRmlsdGVyKSxudWxsIT1lLnRpbWVvdXREZWxheSYmKHRoaXMudGltZW91dERlbGF5PWUudGltZW91dERlbGF5KSx0aGlzLmFkZFRvQm9keT0hMD09PWUuYWRkVG9Cb2R5fXQuQ29uZmlnPXN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLnNldFZhbHVlPWZ1bmN0aW9uKCl7aWYodGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSl7aWYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKWZvcih2YXIgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHQ9MCxpPXRoaXMuZWxlbWVudC5vcHRpb25zO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO3Muc2VsZWN0ZWQ9ITE7Zm9yKHZhciBuPTAsYT1lO248YS5sZW5ndGg7bisrKWFbbl0udmFsdWU9PT1zLnZhbHVlJiYocy5zZWxlY3RlZD0hMCl9ZWxzZSBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksdGhpcy5lbGVtZW50LnZhbHVlPWU/ZS52YWx1ZTpcIlwiO3RoaXMubWFpbi5kYXRhLmlzT25DaGFuZ2VFbmFibGVkPSExLHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLHRoaXMubWFpbi5kYXRhLmlzT25DaGFuZ2VFbmFibGVkPSEwfX0sbi5wcm90b3R5cGUuYWRkQXR0cmlidXRlcz1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC50YWJJbmRleD0tMSx0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLmVsZW1lbnQuZGF0YXNldC5zc2lkPXRoaXMubWFpbi5jb25maWcuaWR9LG4ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKGUpe3QubWFpbi5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHQubWFpbi5yZW5kZXIoKX0pfSxuLnByb3RvdHlwZS5hZGRNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLm1haW4uY29uZmlnLmlzQWpheHx8KHRoaXMubXV0YXRpb25PYnNlcnZlcj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihlKXt0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyJiYodC5tYWluLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdC5tYWluLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdC5tYWluLnJlbmRlcigpLGUuZm9yRWFjaChmdW5jdGlvbihlKXtcImNsYXNzXCI9PT1lLmF0dHJpYnV0ZU5hbWUmJnQubWFpbi5zbGltLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzKHQubWFpbi5zbGltLmNvbnRhaW5lcil9KSl9KSx0aGlzLm9ic2VydmVNdXRhdGlvbk9ic2VydmVyKCkpfSxuLnByb3RvdHlwZS5vYnNlcnZlTXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3RoaXMubXV0YXRpb25PYnNlcnZlciYmdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LHthdHRyaWJ1dGVzOiEwLGNoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwfSl9LG4ucHJvdG90eXBlLmRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dGhpcy5tdXRhdGlvbk9ic2VydmVyJiZ0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpfSxuLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LmlubmVySFRNTD1cIlwiO2Zvcih2YXIgdD0wLGk9ZTt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtpZihzLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIG49cyxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtpZihhLmxhYmVsPW4ubGFiZWwsbi5vcHRpb25zKWZvcih2YXIgbz0wLGw9bi5vcHRpb25zO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO2EuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPcHRpb24ocikpfXRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChhKX1lbHNlIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU9wdGlvbihzKSl9fSxuLnByb3RvdHlwZS5jcmVhdGVPcHRpb249ZnVuY3Rpb24odCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtyZXR1cm4gaS52YWx1ZT10LnZhbHVlfHx0LnRleHQsaS5pbm5lckhUTUw9dC5pbm5lckhUTUx8fHQudGV4dCx0LnNlbGVjdGVkJiYoaS5zZWxlY3RlZD10LnNlbGVjdGVkKSx0LmRpc2FibGVkJiYoaS5kaXNhYmxlZD0hMCksdC5wbGFjZWhvbGRlciYmaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlaG9sZGVyXCIsXCJ0cnVlXCIpLHQuY2xhc3MmJnQuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7aS5jbGFzc0xpc3QuYWRkKGUpfSksdC5kYXRhJiZcIm9iamVjdFwiPT10eXBlb2YgdC5kYXRhJiZPYmplY3Qua2V5cyh0LmRhdGEpLmZvckVhY2goZnVuY3Rpb24oZSl7aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2UsdC5kYXRhW2VdKX0pLGl9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMCx0aGlzLmVsZW1lbnQ9ZS5zZWxlY3QsdGhpcy5tYWluPWUubWFpbix0aGlzLmVsZW1lbnQuZGlzYWJsZWQmJih0aGlzLm1haW4uY29uZmlnLmlzRW5hYmxlZD0hMSksdGhpcy5hZGRBdHRyaWJ1dGVzKCksdGhpcy5hZGRFdmVudExpc3RlbmVycygpLHRoaXMubXV0YXRpb25PYnNlcnZlcj1udWxsLHRoaXMuYWRkTXV0YXRpb25PYnNlcnZlcigpLHRoaXMuZWxlbWVudC5zbGltPWUubWFpbn10LlNlbGVjdD1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBhPWkoMCksbz1pKDEpLHM9KG4ucHJvdG90eXBlLmNvbnRhaW5lckRpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuc3R5bGUuY3NzVGV4dD10aGlzLm1haW4uY29uZmlnLnN0eWxlLHRoaXMudXBkYXRlQ29udGFpbmVyRGl2Q2xhc3MoZSksZX0sbi5wcm90b3R5cGUudXBkYXRlQ29udGFpbmVyRGl2Q2xhc3M9ZnVuY3Rpb24oZSl7dGhpcy5tYWluLmNvbmZpZy5jbGFzcz10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSxlLmNsYXNzTmFtZT1cIlwiLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmlkKSxlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5tYWluKTtmb3IodmFyIHQ9MCxpPXRoaXMubWFpbi5jb25maWcuY2xhc3M7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07XCJcIiE9PXMudHJpbSgpJiZlLmNsYXNzTGlzdC5hZGQocyl9fSxuLnByb3RvdHlwZS5zaW5nbGVTZWxlY3RlZERpdj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnNpbmdsZVNlbGVjdGVkKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtpLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWhvbGRlclwiKSxlLmFwcGVuZENoaWxkKGkpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3MuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuZGVzZWxlY3RMYWJlbCxzLmNsYXNzTGlzdC5hZGQoXCJzcy1kZXNlbGVjdFwiKSxzLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmdC5tYWluLnNldChcIlwiKX0sZS5hcHBlbmRDaGlsZChzKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtuLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5hcnJvdyk7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIGEuY2xhc3NMaXN0LmFkZChcImFycm93LWRvd25cIiksbi5hcHBlbmRDaGlsZChhKSxlLmFwcGVuZENoaWxkKG4pLGUub25jbGljaz1mdW5jdGlvbigpe3QubWFpbi5jb25maWcuaXNFbmFibGVkJiYodC5tYWluLmRhdGEuY29udGVudE9wZW4/dC5tYWluLmNsb3NlKCk6dC5tYWluLm9wZW4oKSl9LHtjb250YWluZXI6ZSxwbGFjZWhvbGRlcjppLGRlc2VsZWN0OnMsYXJyb3dJY29uOntjb250YWluZXI6bixhcnJvdzphfX19LG4ucHJvdG90eXBlLnBsYWNlaG9sZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZihudWxsPT09ZXx8ZSYmZS5wbGFjZWhvbGRlcil7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0LHRoaXMuc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNpbmdsZVNlbGVjdGVkLnBsYWNlaG9sZGVyLmlubmVySFRNTD10Lm91dGVySFRNTCl9ZWxzZXt2YXIgaT1cIlwiO2UmJihpPWUuaW5uZXJIVE1MJiYhMCE9PXRoaXMubWFpbi5jb25maWcudmFsdWVzVXNlVGV4dD9lLmlubmVySFRNTDplLnRleHQpLHRoaXMuc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNpbmdsZVNlbGVjdGVkLnBsYWNlaG9sZGVyLmlubmVySFRNTD1lP2k6XCJcIil9fSxuLnByb3RvdHlwZS5kZXNlbGVjdD1mdW5jdGlvbigpe2lmKHRoaXMuc2luZ2xlU2VsZWN0ZWQpe2lmKCF0aGlzLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3QpcmV0dXJuIHZvaWQgdGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic3MtaGlkZVwiKTtcIlwiPT09dGhpcy5tYWluLnNlbGVjdGVkKCk/dGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic3MtaGlkZVwiKTp0aGlzLnNpbmdsZVNlbGVjdGVkLmRlc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzcy1oaWRlXCIpfX0sbi5wcm90b3R5cGUubXVsdGlTZWxlY3RlZERpdj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm11bHRpU2VsZWN0ZWQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVzKSxlLmFwcGVuZENoaWxkKGkpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYWRkKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gbi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcucGx1cyksbi5vbmNsaWNrPWZ1bmN0aW9uKGUpe3QubWFpbi5kYXRhLmNvbnRlbnRPcGVuJiYodC5tYWluLmNsb3NlKCksZS5zdG9wUHJvcGFnYXRpb24oKSl9LHMuYXBwZW5kQ2hpbGQobiksZS5hcHBlbmRDaGlsZChzKSxlLm9uY2xpY2s9ZnVuY3Rpb24oZSl7dC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModC5tYWluLmNvbmZpZy52YWx1ZURlbGV0ZSl8fCh0Lm1haW4uZGF0YS5jb250ZW50T3Blbj90Lm1haW4uY2xvc2UoKTp0Lm1haW4ub3BlbigpKSl9LHtjb250YWluZXI6ZSx2YWx1ZXM6aSxhZGQ6cyxwbHVzOm59fSxuLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtpZih0aGlzLm11bHRpU2VsZWN0ZWQpe2Zvcih2YXIgZSx0PXRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuY2hpbGROb2RlcyxpPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkscz1bXSxuPTAsYT10O248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2U9ITA7Zm9yKHZhciBsPTAscj1pO2w8ci5sZW5ndGg7bCsrKXt2YXIgYz1yW2xdO1N0cmluZyhjLmlkKT09PVN0cmluZyhvLmRhdGFzZXQuaWQpJiYoZT0hMSl9ZSYmcy5wdXNoKG8pfWZvcih2YXIgZD0wLGg9cztkPGgubGVuZ3RoO2QrKyl7dmFyIHU9aFtkXTt1LmNsYXNzTGlzdC5hZGQoXCJzcy1vdXRcIiksdGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5yZW1vdmVDaGlsZCh1KX1mb3IodD10aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmNoaWxkTm9kZXMsYz0wO2M8aS5sZW5ndGg7YysrKXtlPSExO2Zvcih2YXIgcD0wLG09dDtwPG0ubGVuZ3RoO3ArKylvPW1bcF0sU3RyaW5nKGlbY10uaWQpPT09U3RyaW5nKG8uZGF0YXNldC5pZCkmJihlPSEwKTtlfHwoMCE9PXQubGVuZ3RoJiZIVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50PzA9PT1jP3RoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuaW5zZXJ0QmVmb3JlKHRoaXMudmFsdWVEaXYoaVtjXSksdFtjXSk6dFtjLTFdLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsdGhpcy52YWx1ZURpdihpW2NdKSk6dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5hcHBlbmRDaGlsZCh0aGlzLnZhbHVlRGl2KGlbY10pKSl9aWYoMD09PWkubGVuZ3RoKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtmLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksZi5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQsdGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5pbm5lckhUTUw9Zi5vdXRlckhUTUx9fX0sbi5wcm90b3R5cGUudmFsdWVEaXY9ZnVuY3Rpb24oYSl7dmFyIG89dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWUpLGUuZGF0YXNldC5pZD1hLmlkO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlVGV4dCksdC5pbm5lckhUTUw9YS5pbm5lckhUTUwmJiEwIT09dGhpcy5tYWluLmNvbmZpZy52YWx1ZXNVc2VUZXh0P2EuaW5uZXJIVE1MOmEudGV4dCxlLmFwcGVuZENoaWxkKHQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZURlbGV0ZSksaS5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5kZXNlbGVjdExhYmVsLGkub25jbGljaz1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD0hMTtpZihvLm1haW4uY29uZmlnLmlzRW5hYmxlZCl7aWYoby5tYWluLmJlZm9yZU9uQ2hhbmdlfHwodD0hMCksby5tYWluLmJlZm9yZU9uQ2hhbmdlKXtmb3IodmFyIGk9by5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSxzPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaSkpLG49MDtuPHMubGVuZ3RoO24rKylzW25dLmlkPT09YS5pZCYmcy5zcGxpY2UobiwxKTshMSE9PW8ubWFpbi5iZWZvcmVPbkNoYW5nZShzKSYmKHQ9ITApfXQmJihvLm1haW4uZGF0YS5yZW1vdmVGcm9tU2VsZWN0ZWQoYS5pZCxcImlkXCIpLG8ubWFpbi5yZW5kZXIoKSxvLm1haW4uc2VsZWN0LnNldFZhbHVlKCksby5tYWluLmRhdGEub25EYXRhQ2hhbmdlKCkpfX0sZS5hcHBlbmRDaGlsZChpKSxlfSxuLnByb3RvdHlwZS5jb250ZW50RGl2PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuY29udGVudCksZX0sbi5wcm90b3R5cGUuc2VhcmNoRGl2PWZ1bmN0aW9uKCl7dmFyIG49dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnNlYXJjaCk7dmFyIHQ9e2NvbnRhaW5lcjplLGlucHV0OnN9O3JldHVybiB0aGlzLm1haW4uY29uZmlnLnNob3dTZWFyY2h8fChlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSxzLnJlYWRPbmx5PSEwKSxzLnR5cGU9XCJzZWFyY2hcIixzLnBsYWNlaG9sZGVyPXRoaXMubWFpbi5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXIscy50YWJJbmRleD0wLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHRoaXMubWFpbi5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIixcIm9mZlwiKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLFwib2ZmXCIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSxzLm9uY2xpY2s9ZnVuY3Rpb24oZSl7c2V0VGltZW91dChmdW5jdGlvbigpe1wiXCI9PT1lLnRhcmdldC52YWx1ZSYmbi5tYWluLnNlYXJjaChcIlwiKX0sMTApfSxzLm9ua2V5ZG93bj1mdW5jdGlvbihlKXtcIkFycm93VXBcIj09PWUua2V5PyhuLm1haW4ub3BlbigpLG4uaGlnaGxpZ2h0VXAoKSxlLnByZXZlbnREZWZhdWx0KCkpOlwiQXJyb3dEb3duXCI9PT1lLmtleT8obi5tYWluLm9wZW4oKSxuLmhpZ2hsaWdodERvd24oKSxlLnByZXZlbnREZWZhdWx0KCkpOlwiVGFiXCI9PT1lLmtleT9uLm1haW4uZGF0YS5jb250ZW50T3Blbj9uLm1haW4uY2xvc2UoKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLmNsb3NlKCl9LG4ubWFpbi5jb25maWcudGltZW91dERlbGF5KTpcIkVudGVyXCI9PT1lLmtleSYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzLm9ua2V5dXA9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7aWYoXCJFbnRlclwiPT09ZS5rZXkpe2lmKG4ubWFpbi5hZGRhYmxlJiZlLmN0cmxLZXkpcmV0dXJuIGEuY2xpY2soKSxlLnByZXZlbnREZWZhdWx0KCksdm9pZCBlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBpPW4ubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK24ubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpO2kmJmkuY2xpY2soKX1lbHNlXCJBcnJvd1VwXCI9PT1lLmtleXx8XCJBcnJvd0Rvd25cIj09PWUua2V5fHwoXCJFc2NhcGVcIj09PWUua2V5P24ubWFpbi5jbG9zZSgpOm4ubWFpbi5jb25maWcuc2hvd1NlYXJjaCYmbi5tYWluLmRhdGEuY29udGVudE9wZW4/bi5tYWluLnNlYXJjaCh0LnZhbHVlKTpzLnZhbHVlPVwiXCIpO2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpfSxzLm9uZm9jdXM9ZnVuY3Rpb24oKXtuLm1haW4ub3BlbigpfSxlLmFwcGVuZENoaWxkKHMpLHRoaXMubWFpbi5hZGRhYmxlJiYoYS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYWRkYWJsZSksYS5pbm5lckhUTUw9XCIrXCIsYS5vbmNsaWNrPWZ1bmN0aW9uKGUpe2lmKG4ubWFpbi5hZGRhYmxlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD1uLnNlYXJjaC5pbnB1dC52YWx1ZTtpZihcIlwiPT09dC50cmltKCkpcmV0dXJuIHZvaWQgbi5zZWFyY2guaW5wdXQuZm9jdXMoKTt2YXIgaT1uLm1haW4uYWRkYWJsZSh0KSxzPVwiXCI7aWYoIWkpcmV0dXJuO1wib2JqZWN0XCI9PXR5cGVvZiBpP28udmFsaWRhdGVPcHRpb24oaSkmJihuLm1haW4uYWRkRGF0YShpKSxzPWkudmFsdWU/aS52YWx1ZTppLnRleHQpOihuLm1haW4uYWRkRGF0YShuLm1haW4uZGF0YS5uZXdPcHRpb24oe3RleHQ6aSx2YWx1ZTppfSkpLHM9aSksbi5tYWluLnNlYXJjaChcIlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLnNldChzLFwidmFsdWVcIiwhMSwhMSl9LDEwMCksbi5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0JiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLmNsb3NlKCl9LDEwMCl9fSxlLmFwcGVuZENoaWxkKGEpLHQuYWRkYWJsZT1hKSx0fSxuLnByb3RvdHlwZS5oaWdobGlnaHRVcD1mdW5jdGlvbigpe3ZhciBlPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQ9bnVsbDtpZihlKWZvcih0PWUucHJldmlvdXNTaWJsaW5nO251bGwhPT10JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKTspdD10LnByZXZpb3VzU2libGluZztlbHNle3ZhciBpPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7dD1pW2kubGVuZ3RoLTFdfWlmKHQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbCkmJih0PW51bGwpLG51bGw9PT10KXt2YXIgcz1lLnBhcmVudE5vZGU7aWYocy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cCkmJnMucHJldmlvdXNTaWJsaW5nKXt2YXIgbj1zLnByZXZpb3VzU2libGluZy5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7bi5sZW5ndGgmJih0PW5bbi5sZW5ndGgtMV0pfX10JiYoZSYmZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSxhLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5saXN0LHQpKX0sbi5wcm90b3R5cGUuaGlnaGxpZ2h0RG93bj1mdW5jdGlvbigpe3ZhciBlPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQ9bnVsbDtpZihlKWZvcih0PWUubmV4dFNpYmxpbmc7bnVsbCE9PXQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpOyl0PXQubmV4dFNpYmxpbmc7ZWxzZSB0PXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7aWYobnVsbD09PXQmJm51bGwhPT1lKXt2YXIgaT1lLnBhcmVudE5vZGU7aS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cCkmJmkubmV4dFNpYmxpbmcmJih0PWkubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpKX10JiYoZSYmZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSxhLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5saXN0LHQpKX0sbi5wcm90b3R5cGUubGlzdERpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmxpc3QpLGV9LG4ucHJvdG90eXBlLm9wdGlvbnM9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9XCJcIik7dmFyIHQsaT10aGlzLm1haW4uZGF0YS5maWx0ZXJlZHx8dGhpcy5tYWluLmRhdGEuZGF0YTtpZigodGhpcy5saXN0LmlubmVySFRNTD1cIlwiKSE9PWUpcmV0dXJuKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPWUsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQodCk7aWYodGhpcy5tYWluLmNvbmZpZy5pc0FqYXgmJnRoaXMubWFpbi5jb25maWcuaXNTZWFyY2hpbmcpcmV0dXJuKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuc2VhcmNoaW5nVGV4dCx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZCh0KTtpZigwPT09aS5sZW5ndGgpe3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHMuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbikscy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHMuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuc2VhcmNoVGV4dCx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZChzKX1mb3IodmFyIG49ZnVuY3Rpb24oZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXt2YXIgdD1lLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cExhYmVsKSxjLm1haW4uY29uZmlnLnNlbGVjdEJ5R3JvdXAmJmMubWFpbi5jb25maWcuaXNNdWx0aXBsZSYmaS5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbFNlbGVjdGFibGUpLGkuaW5uZXJIVE1MPXQubGFiZWwsbi5hcHBlbmRDaGlsZChpKTt2YXIgcz10Lm9wdGlvbnM7aWYocyl7Zm9yKHZhciBhPTAsbz1zO2E8by5sZW5ndGg7YSsrKXt2YXIgbD1vW2FdO24uYXBwZW5kQ2hpbGQoYy5vcHRpb24obCkpfWlmKGMubWFpbi5jb25maWcuc2VsZWN0QnlHcm91cCYmYy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgcj1jO2kuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7Zm9yKHZhciB0PTAsaT1uLmNoaWxkcmVuO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdOy0xIT09cy5jbGFzc05hbWUuaW5kZXhPZihyLm1haW4uY29uZmlnLm9wdGlvbikmJnMuY2xpY2soKX19KX19Yy5saXN0LmFwcGVuZENoaWxkKG4pfWVsc2UgYy5saXN0LmFwcGVuZENoaWxkKGMub3B0aW9uKGUpKX0sYz10aGlzLGE9MCxvPWk7YTxvLmxlbmd0aDthKyspbihvW2FdKX0sbi5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKHIpe2lmKHIucGxhY2Vob2xkZXIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSksZX12YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksci5jbGFzcyYmci5jbGFzcy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXt0LmNsYXNzTGlzdC5hZGQoZSl9KSxyLnN0eWxlJiYodC5zdHlsZS5jc3NUZXh0PXIuc3R5bGUpO3ZhciBjPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCk7dC5kYXRhc2V0LmlkPXIuaWQsdGhpcy5tYWluLmNvbmZpZy5zZWFyY2hIaWdobGlnaHQmJnRoaXMubWFpbi5zbGltJiZyLmlubmVySFRNTCYmXCJcIiE9PXRoaXMubWFpbi5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZS50cmltKCk/dC5pbm5lckhUTUw9YS5oaWdobGlnaHQoci5pbm5lckhUTUwsdGhpcy5tYWluLnNsaW0uc2VhcmNoLmlucHV0LnZhbHVlLHRoaXMubWFpbi5jb25maWcuc2VhcmNoSGlnaGxpZ2h0ZXIpOnIuaW5uZXJIVE1MJiYodC5pbm5lckhUTUw9ci5pbm5lckhUTUwpLHRoaXMubWFpbi5jb25maWcuc2hvd09wdGlvblRvb2x0aXBzJiZ0LnRleHRDb250ZW50JiZ0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdC50ZXh0Q29udGVudCk7dmFyIGQ9dGhpczt0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PXRoaXMuZGF0YXNldC5pZDtpZighMD09PXIuc2VsZWN0ZWQmJmQubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdE9wdGlvbil7dmFyIGk9ITE7aWYoZC5tYWluLmJlZm9yZU9uQ2hhbmdlJiZkLm1haW4uY29uZmlnLmlzTXVsdGlwbGV8fChpPSEwKSxkLm1haW4uYmVmb3JlT25DaGFuZ2UmJmQubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBzPWQubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksbj1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHMpKSxhPTA7YTxuLmxlbmd0aDthKyspblthXS5pZD09PXQmJm4uc3BsaWNlKGEsMSk7ITEhPT1kLm1haW4uYmVmb3JlT25DaGFuZ2UobikmJihpPSEwKX1pJiYoZC5tYWluLmNvbmZpZy5pc011bHRpcGxlPyhkLm1haW4uZGF0YS5yZW1vdmVGcm9tU2VsZWN0ZWQodCxcImlkXCIpLGQubWFpbi5yZW5kZXIoKSxkLm1haW4uc2VsZWN0LnNldFZhbHVlKCksZC5tYWluLmRhdGEub25EYXRhQ2hhbmdlKCkpOmQubWFpbi5zZXQoXCJcIikpfWVsc2V7aWYoci5kaXNhYmxlZHx8ci5zZWxlY3RlZClyZXR1cm47aWYoZC5tYWluLmNvbmZpZy5saW1pdCYmQXJyYXkuaXNBcnJheShjKSYmZC5tYWluLmNvbmZpZy5saW1pdDw9Yy5sZW5ndGgpcmV0dXJuO2lmKGQubWFpbi5iZWZvcmVPbkNoYW5nZSl7dmFyIG89dm9pZCAwLGw9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkLm1haW4uZGF0YS5nZXRPYmplY3RGcm9tRGF0YSh0KSkpO2wuc2VsZWN0ZWQ9ITAsZC5tYWluLmNvbmZpZy5pc011bHRpcGxlPyhvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpKS5wdXNoKGwpOm89SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShsKSksITEhPT1kLm1haW4uYmVmb3JlT25DaGFuZ2UobykmJmQubWFpbi5zZXQodCxcImlkXCIsZC5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0KX1lbHNlIGQubWFpbi5zZXQodCxcImlkXCIsZC5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0KX19KTt2YXIgaT1jJiZhLmlzVmFsdWVJbkFycmF5T2ZPYmplY3RzKGMsXCJpZFwiLHIuaWQpO3JldHVybihyLmRpc2FibGVkfHxpKSYmKHQub25jbGljaz1udWxsLGQubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdE9wdGlvbnx8dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLGQubWFpbi5jb25maWcuaGlkZVNlbGVjdGVkT3B0aW9uJiZ0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSksaT90LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb25TZWxlY3RlZCk6dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcub3B0aW9uU2VsZWN0ZWQpLHR9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5tYWluPWUubWFpbix0aGlzLmNvbnRhaW5lcj10aGlzLmNvbnRhaW5lckRpdigpLHRoaXMuY29udGVudD10aGlzLmNvbnRlbnREaXYoKSx0aGlzLnNlYXJjaD10aGlzLnNlYXJjaERpdigpLHRoaXMubGlzdD10aGlzLmxpc3REaXYoKSx0aGlzLm9wdGlvbnMoKSx0aGlzLnNpbmdsZVNlbGVjdGVkPW51bGwsdGhpcy5tdWx0aVNlbGVjdGVkPW51bGwsdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlPyh0aGlzLm11bHRpU2VsZWN0ZWQ9dGhpcy5tdWx0aVNlbGVjdGVkRGl2KCksdGhpcy5tdWx0aVNlbGVjdGVkJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyKSk6KHRoaXMuc2luZ2xlU2VsZWN0ZWQ9dGhpcy5zaW5nbGVTZWxlY3RlZERpdigpLHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyKSksdGhpcy5tYWluLmNvbmZpZy5hZGRUb0JvZHk/KHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaWQpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KSk6dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KSx0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2guY29udGFpbmVyKSx0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5saXN0KX10LlNsaW09c31dLG4uYz1zLG4uZD1mdW5jdGlvbihlLHQsaSl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Oml9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihpKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIHMgaW4gdCluLmQoaSxzLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwscykpO3JldHVybiBpfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MikpLmRlZmF1bHQ7ZnVuY3Rpb24gbihlKXtpZihzW2VdKXJldHVybiBzW2VdLmV4cG9ydHM7dmFyIHQ9c1tlXT17aTplLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGlbZV0uY2FsbCh0LmV4cG9ydHMsdCx0LmV4cG9ydHMsbiksdC5sPSEwLHQuZXhwb3J0c312YXIgaSxzfSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgU3luY1N0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSBcIi4vTGFuZ3VhZ2VcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGdlbmVyaWMgY29tcG9uZW50IG9mIFN0YWRpYStcclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50IHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgbmFtZS5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ015IENvbXBvbmVudCc7XHJcbiAgICB0YWc6IHN0cmluZyA9IFwiY29tcG9uZW50XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgdW5pcXVlIElELCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBvbiBsb2FkLlxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBib29sZWFuIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCByZWNlaXZlIGV2ZW50cyBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGFjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHJlbmRlcmVyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuZXZlciB0aGUgY29tcG9uZW50IHNob3VsZCBzdGFydCBsb2FkaW5nLlxyXG4gICAgICovXHJcbiAgICBsb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IExhbmd1YWdlLmdldCh0aGlzLnRhZyArICcubmFtZScpO1xyXG4gICAgICAgIHRoaXMuaWQgPSAnc3RhZGlhcGx1c18nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVuZGVyZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxoc0U0ZT5jLXdpeicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSAoQXJyYXkgYXMgYW55KS5mcm9tKHJlbmRlcmVycykuZmluZCgocmVuZGVyZXI6IEhUTUxFbGVtZW50KSA9PiByZW5kZXJlci5zdHlsZS5vcGFjaXR5ICE9PSAnMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBDb21wb25lbnQgaGFzIGFuIGVsZW1lbnQgaW4gdGhlIERPTVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5yZW5kZXJlci5zdHlsZS5vcGFjaXR5ID09PSAnMCcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuZXZlciB0aGUgY29tcG9uZW50IGlzIHVubG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgdW5sb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25TdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgQ29tcG9uZW50IHNob3VsZCBzdGFydC5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgQ29tcG9uZW50IHNob3VsZCBzdG9wLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIG9uY2UgZXZlcnkgc2Vjb25kLlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi9MYW5ndWFnZSc7XHJcblxyXG4vKipcclxuICogQSB1dGlsaXR5IGNsYXNzIHJlc3BvbnNpYmxlIGZvciBsb2FkaW5nIFtbQ29tcG9uZW50fENvbXBvbmVudHNdXSBhbmQgZGVsaXZlcmluZyBldmVudHMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENvbXBvbmVudExvYWRlciB0eXBlLlxyXG4gKiBAY2xhc3MgQ29tcG9uZW50TG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBsaXN0IG9mIGFsbCByZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudHM6IENvbXBvbmVudFtdO1xyXG4gICAgdGltZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIHJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICByZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXJzIGEgY29tcG9uZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3Rlcihjb21wb25lbnQ6Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbHRlcihlID0+IHsgcmV0dXJuIGUuaWQgIT09IGNvbXBvbmVudC5pZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgY29tcG9uZW50IGxvYWRlci5cclxuICAgICAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgU3luY1N0b3JhZ2UuQ09NUE9ORU5UUy5nZXQoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IHJlc3VsdC5jb21wb25lbnRzO1xyXG4gICAgICAgICAgICBpZihzdG9yYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHN0b3JhZ2VbY29tcG9uZW50LnRhZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbY29tcG9uZW50LnRhZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdG9yYWdlW2NvbXBvbmVudC50YWddLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmVuYWJsZWQgPSBzdG9yYWdlW2NvbXBvbmVudC50YWddLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmVuYWJsZWQgJiYgIWNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC5sb2FkKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTeW5jU3RvcmFnZS5DT01QT05FTlRTLnNldChzdG9yYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxyXG4gICAgICovXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQudW5sb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb21wb25lbnQuYWN0aXZlKSBjb21wb25lbnQub25VcGRhdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wVGltZXIoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xyXG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCBsYW5nX2VuVVNfZGF0YSBmcm9tICcuL2xhbmcvZW4tVVMuanNvbic7XHJcbmltcG9ydCBsYW5nX3N2U0VfZGF0YSBmcm9tICcuL2xhbmcvc3YtU0UuanNvbic7XHJcbmltcG9ydCBsYW5nX2ZyRlJfZGF0YSBmcm9tICcuL2xhbmcvZnItRlIuanNvbic7XHJcbmltcG9ydCBsYW5nX2l0SVRfZGF0YSBmcm9tICcuL2xhbmcvaXQtSVQuanNvbic7XHJcbmltcG9ydCBsYW5nX2VzRVNfZGF0YSBmcm9tICcuL2xhbmcvZXMtRVMuanNvbic7XHJcbmltcG9ydCBsYW5nX2RlREVfZGF0YSBmcm9tICcuL2xhbmcvZGUtREUuanNvbic7XHJcbmltcG9ydCBsYW5nX3VrVUFfZGF0YSBmcm9tICcuL2xhbmcvdWstVUEuanNvbic7XHJcbmltcG9ydCBsYW5nX2VuU1RFRUZfZGF0YSBmcm9tICcuL2xhbmcvZW4tU1RFRUYuanNvbic7XHJcbmltcG9ydCBsYW5nX2V1RVNfZGF0YSBmcm9tICcuL2xhbmcvZXUtRVMuanNvbic7XHJcbmltcG9ydCBsYW5nX2dsRVNfZGF0YSBmcm9tICcuL2xhbmcvZ2wtRVMuanNvbic7XHJcbmltcG9ydCBsYW5nX3J1UlVfZGF0YSBmcm9tICcuL2xhbmcvcnUtUlUuanNvbic7XHJcblxyXG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93IGFzIGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRhZzogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgTGFuZ3VhZ2UubGFuZ3VhZ2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWU6IHN0cmluZywgdmFycz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBrZXlzID0gbmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICB2YWwgPSB2YWxba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBfdmFyIGluIHZhcnMpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5zcGxpdCgne3snICsgX3ZhciArICd9fScpLmpvaW4odmFyc1tfdmFyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWwgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmF1bHQoKSB7XHJcbiAgICAgICAgTGFuZ3VhZ2UuZGVmYXVsdCA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxhbmd1YWdlczogTGFuZ3VhZ2VbXSA9IFtdO1xyXG4gICAgc3RhdGljIGRlZmF1bHQ6IExhbmd1YWdlO1xyXG4gICAgc3RhdGljIGN1cnJlbnQ6IExhbmd1YWdlO1xyXG4gICAgc3RhdGljIGxvYWQoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSk6IHZvaWQge1xyXG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgZmlyc3QgbGFuZ3VhZ2UgdGhhdCBpc24ndCBlcXVhbCB0byB0aGUgZGVmYXVsdFxyXG4gICAgICAgIFN5bmNTdG9yYWdlLkxBTkdVQUdFLmdldCgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gcmVzdWx0W1N5bmNTdG9yYWdlLkxBTkdVQUdFLnRhZ107XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxhbmd1YWdlID09PSAnYXV0b21hdGljJykge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmF1dG9tYXRpYygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2dnZXIuaW5mbygnVXNpbmcgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbiAnICsgbGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5nLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmcudGFnID09PSBsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPT09IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0KGxhbmd1YWdlOiBMYW5ndWFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGxhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhdXRvbWF0aWMoKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyBhcyBhbnkpLmZpbmQoXHJcbiAgICAgICAgICAgIChsOiBzdHJpbmcpID0+XHJcbiAgICAgICAgICAgICAgICBsLmxlbmd0aCA+PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy5kZWZhdWx0ID09PSB1bmRlZmluZWQgfHwgbCAhPT0gdGhpcy5kZWZhdWx0LnRhZylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGxhbmdfZGVERSA9IG5ldyBMYW5ndWFnZSgnRGV1dHNjaGUgKERFKScsICdkZS1ERScsIGxhbmdfZGVERV9kYXRhKTtcclxuICAgICAgICBsYW5nX2RlREUucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19lc0VTID0gbmV3IExhbmd1YWdlKCdFc3Bhw7FvbCAoRVMpJywgJ2VzLUVTJywgbGFuZ19lc0VTX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfZXNFUy5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX2VuVVMgPSBuZXcgTGFuZ3VhZ2UoJ0VuZ2xpc2ggKFVTKScsICdlbi1VUycsIGxhbmdfZW5VU19kYXRhKTtcclxuICAgICAgICBsYW5nX2VuVVMucmVnaXN0ZXIoKTtcclxuICAgICAgICBsYW5nX2VuVVMuc2V0RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBsYW5nX2VuU1RFRUYgPSBuZXcgTGFuZ3VhZ2UoJ0VuZ2xpc2ggKFN0ZWVmKScsICdlbi1TVEVFRicsIGxhbmdfZW5TVEVFRl9kYXRhKTtcclxuICAgICAgICAvLyBsYW5nX2VuU1RFRUYucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19mckZSID0gbmV3IExhbmd1YWdlKCdGcmFuw6dhaXMgKEZSKScsICdmci1GUicsIGxhbmdfZnJGUl9kYXRhKTtcclxuICAgICAgICBsYW5nX2ZyRlIucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19pdElUID0gbmV3IExhbmd1YWdlKCdJdGFsaWFubyAoSVQpJywgJ2l0LUlUJywgbGFuZ19pdElUX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfaXRJVC5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX3N2U0UgPSBuZXcgTGFuZ3VhZ2UoJ1N2ZW5za2EgKFNFKScsICdzdi1TRScsIGxhbmdfc3ZTRV9kYXRhKTtcclxuICAgICAgICBsYW5nX3N2U0UucmVnaXN0ZXIoKTtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgbGFuZ191a1VBID0gbmV3IExhbmd1YWdlKCfQo9C60YDQsNGX0L3RgdGM0LrQsCAoVUEpJywgJ3VrLVVBJywgbGFuZ191a1VBX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfdWtVQS5yZWdpc3RlcigpO1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBsYW5nX2V1RVMgPSBuZXcgTGFuZ3VhZ2UoJ0V1c2thcmEgKEVVKScsICdldS1FUycsIGxhbmdfZXVFU19kYXRhKTtcclxuICAgICAgICBsYW5nX2V1RVMucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19nbEVTID0gbmV3IExhbmd1YWdlKCdHYWxlZ28gKEdMKScsICdnbC1FUycsIGxhbmdfZ2xFU19kYXRhKTtcclxuICAgICAgICBsYW5nX2dsRVMucmVnaXN0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFuZ19ydVJVID0gbmV3IExhbmd1YWdlKCfRgNGD0YHRgdC60LjQuSAoUlUpJywgJ3J1LVJVJywgbGFuZ19ydVJVX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfcnVSVS5yZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nLCB2YXJzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuY3VycmVudC5nZXQobmFtZSwgdmFycyk7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgcHJlZml4OnN0cmluZyA9ICdbU3RhZGlhK10nO1xyXG5cclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIGluZm8gPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/Cfk4MgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogYmxhY2snKTtcclxuICAgIH07XHJcblxyXG4gICAgd2FybmluZyA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+YnyAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBvcmFuZ2UnKTtcclxuICAgIH07XHJcblxyXG4gICAgZXJyb3IgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY+KdjCAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiA3MDAnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50ID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn6epICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IGRhcmtncmVlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHViaW91c2x5IGNyZWF0ZWQgYnkgQWRyaWFuIENvb25leVxyXG4gICAgICogQGF1dGhvciBodHRwOi8vYWRyaWFuY29vbmV5LmdpdGh1Yi5pb1xyXG4gICAgICovXHJcbiAgICBpbWFnZSA9IGZ1bmN0aW9uKHVybDogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGdldEJveCA9IGZ1bmN0aW9uKHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nOiBcIitcIixcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMXB4OyBwYWRkaW5nOiBcIiArIE1hdGguZmxvb3IoaGVpZ2h0LzIpICsgXCJweCBcIiArIE1hdGguZmxvb3Iod2lkdGgvMikgKyBcInB4OyBsaW5lLWhlaWdodDogMDtcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGltID0gZ2V0Qm94KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGRpbS5zdHJpbmcsIGRpbS5zdHlsZSArIFwiYmFja2dyb3VuZDogdXJsKFwiICsgdXJsICsgXCIpOyBiYWNrZ3JvdW5kLXNpemU6IFwiICsgKHdpZHRoKSArIFwicHggXCIgKyAoaGVpZ2h0KSArIFwicHg7IGNvbG9yOiB0cmFuc3BhcmVudDtcIik7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7IiwiY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBDT0RFQyA9IG5ldyBMb2NhbFN0b3JhZ2UoJ0NvZGVjJywgJ2NvZGVjJyk7XHJcbiAgICBzdGF0aWMgUkVTT0xVVElPTiA9IG5ldyBMb2NhbFN0b3JhZ2UoJ1Jlc29sdXRpb24nLCAncmVzb2x1dGlvbicpO1xyXG4gICAgc3RhdGljIE1PTklUT1JfU1RBVFMgPSBuZXcgTG9jYWxTdG9yYWdlKCdNb25pdG9yIFN0YXRzJywgJ21vbml0b3Itc3RhdHMnKTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0YWc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbIHRoaXMudGFnIF0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWU6IGFueSwgY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFt0aGlzLnRhZ106IHZhbHVlIH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KHN0b3JhZ2VzOiBMb2NhbFN0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHN0b3JhZ2VzLm1hcChlID0+IGUudGFnKSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQoc3RvcmFnZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHN0b3JhZ2VzLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyKCkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeW5jU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgTElCUkFSWV9HQU1FUyA9IG5ldyBTeW5jU3RvcmFnZSgnTGlicmFyeSBHYW1lcycsICdnYW1lcycpO1xyXG4gICAgc3RhdGljIExJQlJBUllfU09SVF9PUkRFUiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBPcmRlcicsICdzb3J0LW9yZGVyJyk7XHJcbiAgICBzdGF0aWMgTElCUkFSWV9TT1JUX0RJUkVDVElPTiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBEaXJlY3Rpb24nLCAnc29ydC1kaXJlY3Rpb24nKTtcclxuICAgIHN0YXRpYyBMQU5HVUFHRSA9IG5ldyBTeW5jU3RvcmFnZSgnTGFuZ3VhZ2UnLCAnbGFuZ3VhZ2UnKTtcclxuICAgIHN0YXRpYyBDT01QT05FTlRTID0gbmV3IFN5bmNTdG9yYWdlKCdDb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0YWc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsgdGhpcy50YWcgXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogYW55LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbdGhpcy50YWddOiB2YWx1ZSB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChzdG9yYWdlczogU3luY1N0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoc3RvcmFnZXMubWFwKGUgPT4gZS50YWcpLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldChzdG9yYWdlczoge1trZXk6IHN0cmluZ106IGFueX0sIGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChzdG9yYWdlcywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY2xlYXIoKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcigpO1xyXG4gICAgfVxyXG59IiwiY2xhc3MgVXRpbCB7XHJcbiAgICAvKipcclxuICAgICAqIFN0YWRpYSdzIG1lbnUgYmFyIGVsZW1lbnQsIHVzZWQgdG8ga25vdyB3aGVuIHRoZSBwbGF5ZXIgaGFzIG9wZW5lZCB0aGUgbWVudS5cclxuICAgICAqL1xyXG4gICAgbWVudUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5YMWFzdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWVudU9wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudUVsZW1lbnQuc3R5bGUub3BhY2l0eSAhPT0gJzAnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5HYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZigncGxheWVyJykgIT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5Ib21lKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignaG9tZScpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpc0luU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdzdG9yZScpICE9PSAtMSAmJiAhdGhpcy5pc0luU3RvcmVEZXRhaWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0luU3RvcmVEZXRhaWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdzdG9yZS9kZXRhaWxzJykgIT09IC0xO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZXNhbmRib3goamF2YXNjcmlwdDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGphdmFzY3JpcHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXRpbCgpOyIsImltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2ViRGF0YWJhc2Uge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBjb25uZWN0aW9uOiBhbnk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdChjYWxsYmFjaz86IChjb25uZWN0aW9uOmFueSkgPT4ge30pIHtcclxuICAgICAgICBpZih0aGlzLmNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yOiBBbHJlYWR5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHRoaXMudXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGlvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYuY29ubmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3Igd2hlbiBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOicsIHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yIHdoZW4gY29ubmVjdGluZyB0byBkYXRhYmFzZTonLCB4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZChudWxsKTsgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29ubmVjdGlvbigpOiBhbnkge1xyXG4gICAgICAgIGlmKCF0aGlzLmNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yOiBOb3QgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZWNvbm5lY3QoY2FsbGJhY2s/OiAoY29ubmVjdGlvbjpvYmplY3QpID0+IHt9KSB7XHJcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0KGNhbGxiYWNrKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuXHJcbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3cgYXMgYW55O1xyXG5cclxuLyoqXHJcbiAqIEEgYnV0dG9uIGFsbG93aW5nIHVzZXJzIHRvIHBsYXkgU3RhZGlhIGluIHdpbmRvd2VkIG1vZGUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIEFsbG93V2luZG93ZWRNb2RlIHR5cGUuXHJcbiAqIEBjbGFzcyBBbGxvd1dpbmRvd2VkTW9kZVxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFsbG93V2luZG93ZWRNb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ2FsbG93LXdpbmRvd2VkLW1vZGUnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlCdXR0b25dXSB1c2VkIHRvIHRvZ2dsZSB3aW5kb3dlZCBtb2RlLlxyXG4gICAgICovXHJcbiAgICBidXR0b246IFVJQnV0dG9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB3aW5kb3dlZCBtb2RlIGlzIGVuYWJsZWQgb3Igbm90XHJcbiAgICAgKi9cclxuICAgIHdpbmRvd2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIE1haW4gZXZlbnQsIHN0b3BzIGJ1aWx0LWluIGZ1bGxzY3JlZW4gZXZlbnRzIGZyb20gcmVhY2hpbmcgU3RhZGlhIHdoZW5ldmVyIHdpbmRvd2VkIG1vZGUgaXMgZW5hYmxlZC5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxyXG4gICAgICAgICAgICBmdW5jdGlvbihldmVudDogRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLndpbmRvd2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW50ZXJzIHdpbmRvd2VkIG1vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXHJcbiAgICAgKi9cclxuICAgIGVudGVyV2luZG93ZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53aW5kb3dlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4aXRzIHdpbmRvd2VkIG1vZGVcclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXHJcbiAgICAgKi9cclxuICAgIGV4aXRXaW5kb3dlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndpbmRvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChcclxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy93aW5kb3dlZC5zdmcnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihcclxuICAgICAgICAgICAgaWNvbixcclxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdhbGxvdy13aW5kb3dlZC1tb2RlLmJ1dHRvbi1sYWJlbC53aW5kb3dlZCcpLFxyXG4gICAgICAgICAgICB0aGlzLmlkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV4aXRXaW5kb3dlZCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgYnV0dG9uIGxhYmVscyBhbmQgaWNvbnMgdG8gZml0IGN1cnJlbnQgbW9kZS5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUJ1dHRvbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvd2luZG93ZWQuc3ZnJyk7XHJcbiAgICAgICAgY29uc3QgaWNvbl9leGl0ID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFxyXG4gICAgICAgICAgICAnaW1hZ2VzL2ljb25zL3dpbmRvd2VkX2V4aXQuc3ZnJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLndpbmRvd2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnNldEljb24oaWNvbl9leGl0KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0VGl0bGUoXHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLmZ1bGxzY3JlZW4nKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnNldEljb24oaWNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnNldFRpdGxlKFxyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdhbGxvdy13aW5kb3dlZC1tb2RlLmJ1dHRvbi1sYWJlbC53aW5kb3dlZCcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZXRoZXIgZXZlbnRzIGhhdmUgYmVlbiBhZGRlZCBhbHJlYWR5IG9yIG5vdC5cclxuICAgIGV2ZW50c0FkZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb25jZSBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgY29tcG9uZW50IGVsZW1lbnRzIGFuZCB2YXJpYWJsZXNcclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIEFsbG93V2luZG93ZWRNb2RlXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElmIG1lbnUgaXMgb3BlbiBhbmQgYSBnYW1lIGlzIHBsYXlpbmcuXHJcbiAgICAgICAgaWYgKFV0aWwuaXNNZW51T3BlbigpICYmIFV0aWwuaXNJbkdhbWUoKSkge1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGJ1dHRvbiBkb2Vzbid0IGFscmVhZHkgZXhpc3QgaW4gdGhlIGN1cnJlbnQgcmVuZGVyZXJcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbmV3IHJlbmRlcmVyc1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBidXR0b24gaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZXZlbnRzIGFyZSBhbHJlYWR5IGFkZGVkLCBkb24ndCBhZGQgdGhlbSBhZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ldmVudHNBZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi53aW5kb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhpdFdpbmRvd2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZW50ZXJXaW5kb3dlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvQ2xvY2suc2Nzcyc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIGNsb2NrIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENsb2NrIHR5cGUuXHJcbiAqIEBjbGFzcyBDbG9ja1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ2Nsb2NrJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjbG9jayBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgPHNwYW4+LCBhZGRzIHRoZSByaWdodCBjbGFzc2VzLCBhbmQgc3RvcmVzIGl0IGluIFtAbGluayAjZWxlbWVudF1cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2Nsb2NrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsnbmFtZSc6IHRoaXMubmFtZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyduYW1lJzogdGhpcy5uYW1lfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY2xvY2sgd2hlbiBpdCdzIHZpc2libGVcclxuICAgICAgICBpZihVdGlsLmlzTWVudU9wZW4oKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5ZicpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRpbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0ZvcmNlQ29kZWMuc2Nzcyc7XHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9VSVRhYic7XHJcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBSZXNvbHV0aW9uIH0gZnJvbSAnLi9Gb3JjZVJlc29sdXRpb24nO1xyXG5cclxuY29uc3QgY2hyb21lID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbi8qKlxyXG4gKiBBIGRyb3Bkb3duIGFsbG93aW5nIGNoYW5naW5nIG9mIHRoZSBjb2RlYy5cclxuICpcclxuICogQGV4cG9ydCB0aGUgRm9yY2VDb2RlYyB0eXBlLlxyXG4gKiBAY2xhc3MgRm9yY2VDb2RlY1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcmNlQ29kZWMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnZm9yY2UtY29kZWMnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgY29kZWMuXHJcbiAgICAgKi9cclxuICAgIGNvZGVjOiBudW1iZXIgPSBDb2RlYy5BVVRPTUFUSUM7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogVGhlIGNvZGVjIFNlbGVjdCBib3guXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdDogU2VsZWN0O1xyXG5cclxuICAgIC8qKiBcclxuICAgICAqIFRoZSBTdGFkaWErIFVJIFRhYi5cclxuICAgICAqL1xyXG4gICAgdGFiOiBVSVRhYjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBnbG9iYWwgc25hY2tiYXIuXHJcbiAgICAgKi9cclxuICAgIHNuYWNrYmFyOiBTbmFja2JhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YWI6IFVJVGFiLCBzbmFja2JhcjogU25hY2tiYXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYiA9IHRhYjtcclxuICAgICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcyB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNocm9tZSBzdG9yYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuQ09ERUMuZ2V0KChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVjID0gcmVzdWx0LmNvZGVjO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY2hyb21lIHN0b3JhZ2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxyXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcclxuICAgICAqL1xyXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLkNPREVDLnNldCh0aGlzLmNvZGVjLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGFiLmFkZFJvdyhcclxuICAgICAgICAgICAgbmV3IFVJUm93KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfcm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19zZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY29kZWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5BVVRPTUFUSUN9XCI+JHtMYW5ndWFnZS5nZXQoJ2F1dG9tYXRpYycpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLlZQOX1cIj4ke0xhbmd1YWdlLmdldCgndnA5Jyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuSDI2NH1cIj4ke0xhbmd1YWdlLmdldCgnaDI2NCcpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsXCI+JHtMYW5ndWFnZS5nZXQoJ2FwcGx5Jyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkJyBpZD0nJHt0aGlzLmlkfS00ay10b29sdGlwJyBzdHlsZT0nZGlzcGxheTogbm9uZSc+JHtMYW5ndWFnZS5nZXQoJ2ZvcmNlLWNvZGVjLjRrLXRvb2x0aXAnKX08L3A+XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCArICctcm93JyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZTogKHJvdzpVSVJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IENvZGVjLkFVVE9NQVRJQyB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSByb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZGlhcGx1c19idXR0b24tc21hbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb2RlYyA9IHBhcnNlSW50KHNlbGYuc2VsZWN0LmdldCgpWzBdKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIucmVsb2FkLXRvLXVwZGF0ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLlJFU09MVVRJT04uZ2V0KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LnJlc29sdXRpb24gPT09IFJlc29sdXRpb24uVUhEXzRLKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29kZWMgPSBDb2RlYy5WUDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LmRpc2FibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy00ay10b29sdGlwJykgYXMgSFRNTEVsZW1lbnQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmNlQ29kZWMuc2V0Q29kZWMoc2VsZi5jb2RlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvblJlbG9hZDogKHJvdzpVSVJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogQ29kZWMuQVVUT01BVElDIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5zZXQoc2VsZi5jb2RlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KFwiY29tcG9uZW50LmVuYWJsZWRcIiwgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdXNlZCBDb2RlY1xyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlY1xyXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldENvZGVjKGNvZGVjOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XHJcbiAgICAgICAgY2FzZSBDb2RlYy5WUDk6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiLCAne1widnA5XCI6XCJFeHRlcm5hbERlY29kZXJcIn0nKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ29kZWMuSDI2NDpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIsICd7XCJoMjY0XCI6XCJFeHRlcm5hbERlY29kZXJcIiwgXCJ2cDlcIjpcImxpYnZweFwifScpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBDb2RlYy5BVVRPTUFUSUM6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIEZvcmNlQ29kZWNcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkaWZmZXJlbnQga2luZHMgb2YgY29kZWNzLCByZXByZXNlbnRlZCBhcyBudW1iZXJzLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBDb2RlYyB0eXBlXHJcbiAqIEBjbGFzcyBDb2RlY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvZGVjIHtcclxuICAgIC8qKlxyXG4gICAgICogQXV0b21hdGljIGNvZGVjLCBsZXQgU3RhZGlhIGRlY2lkZSBvbiBpdCdzIG93bi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIEFVVE9NQVRJQyA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWUDkgY29kZWMsIHVzdWFsbHkgd29ya3MgYmV0dGVyIHRoYW4gSDI2NCBidXQgYXQgdGhlIGNvc3Qgb2YgbG93ZXIgcXVhbGl0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFZQOSA9IDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIMjY0IGNvZGVjLCBoaWdoIHF1YWxpdHkgYW5kIE1hYy1PUyBjb21wYXRpYmxlIGNvZGVjIGJ1dCB3aXRoIGxhdGVuY3kgaXNzdWVzLiBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEgyNjQgPSAyO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MnO1xyXG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vVUlUYWInO1xyXG5pbXBvcnQgeyBVSVJvdywgVUlSb3dPcHRpb25zIH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xyXG5cclxuY29uc3QgY2hyb21lID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbi8qKlxyXG4gKiBBIGRyb3Bkb3duIGFsbG93aW5nIGNoYW5naW5nIG9mIHRoZSByZXNvbHV0aW9uLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBGb3JjZVJlc29sdXRpb24gdHlwZS5cclxuICogQGNsYXNzIEZvcmNlUmVzb2x1dGlvblxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcmNlUmVzb2x1dGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICdmb3JjZS1yZXNvbHV0aW9uJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjdXJyZW50IHJlc29sdXRpb24uXHJcbiAgICAgKi9cclxuICAgIHJlc29sdXRpb246IG51bWJlciA9IFJlc29sdXRpb24uQVVUT01BVElDO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlc29sdXRpb24gU2VsZWN0IGJveC5cclxuICAgICAqL1xyXG4gICAgc2VsZWN0OiBTZWxlY3Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgU3RhZGlhKyBVSSBUYWJcclxuICAgICAqL1xyXG4gICAgdGFiOiBVSVRhYjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBnbG9iYWwgU25hY2tiYXJcclxuICAgICAqL1xyXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhYjogVUlUYWIsIHNuYWNrYmFyOiBTbmFja2Jhcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdldFN0b3JhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZVJlc29sdXRpb25cclxuICAgICAqL1xyXG4gICAgZ2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLlJFU09MVVRJT04uZ2V0KChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSByZXN1bHQucmVzb2x1dGlvbjtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY2hyb21lIHN0b3JhZ2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxyXG4gICAgICogQG1lbWJlcm9mIEZvcmNlUmVzb2x1dGlvblxyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuUkVTT0xVVElPTi5zZXQodGhpcy5yZXNvbHV0aW9uLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIEZvcmNlUmVzb2x1dGlvbi5zZXRSZXNvbHV0aW9uKHRoaXMucmVzb2x1dGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50YWIuYWRkUm93KFxyXG4gICAgICAgICAgICBuZXcgVUlSb3coXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19yb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyZXNvbHV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5BVVRPTUFUSUN9XCI+JHtMYW5ndWFnZS5nZXQoJ2F1dG9tYXRpYycpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uVUhEXzRLfVwiPiR7TGFuZ3VhZ2UuZ2V0KCc0aycpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uRkhEfVwiPiR7TGFuZ3VhZ2UuZ2V0KCcxMDgwcCcpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsXCI+JHtMYW5ndWFnZS5nZXQoJ2FwcGx5Jyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIj4ke0xhbmd1YWdlLmdldCgnZm9yY2UtcmVzb2x1dGlvbi5ub3RlJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgKyAnLXJvdycsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QgPSBuZXcgU2VsZWN0KHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLCB7IHBsYWNlaG9sZGVyOiBSZXNvbHV0aW9uLkFVVE9NQVRJQyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc29sdXRpb24gPSBwYXJzZUludChzZWxmLnNlbGVjdC5nZXQoKVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIucmVsb2FkLXRvLXVwZGF0ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQoc2VsZi5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IFJlc29sdXRpb24uQVVUT01BVElDIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5zZXQoc2VsZi5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdXNlciBbW1Jlc29sdXRpb25dXVxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIHRoZSB1c2VyIFJlc29sdXRpb25cclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZVJlc29sdXRpb25cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldFJlc29sdXRpb24ocmVzb2x1dGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoO1xyXG4gICAgICAgIHN3aXRjaCAocmVzb2x1dGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uVUhEXzRLOlxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSAzODQwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjE2MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBSZXNvbHV0aW9uLkZIRDpcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uQVVUT01BVElDOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnYXZhaWxXaWR0aCcsIHsgdmFsdWU6ICR7d2lkdGh9IH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ2F2YWlsSGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ3dpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnaGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkaWZmZXJlbnQga2luZHMgb2YgcmVzb2x1dGlvbnMsIHJlcHJlc2VudGVkIGFzIG51bWJlcnMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFJlc29sdXRpb24gdHlwZVxyXG4gKiBAY2xhc3MgUmVzb2x1dGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlc29sdXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvbWF0aWMsIGxldCBTdGFkaWEgaGFuZGxlIHJlc29sdXRpb25zLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIDRLLCBvciAzODQweDIxNjBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFVIRF80SyA9IDE7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogRnVsbCBIRCwgb3IgMTkyMHgxMDgwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBGSEQgPSAyO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzJztcclxuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuLi91aS9TbmFja2Jhcic7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL3VpL1NlbGVjdCc7XHJcbmltcG9ydCB7IFdlYkRhdGFiYXNlIH0gZnJvbSAnLi4vV2ViRGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBDaGVja2JveCwgQ2hlY2tib3hTaGFwZSB9IGZyb20gJy4uL3VpL0NoZWNrYm94JztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XHJcblxyXG5jb25zdCB7IGNocm9tZSwgQXJyYXkgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG4vKipcclxuICogQSBmaWx0ZXJpbmcgc3lzdGVtIGFsbG93aW5nIGhpZGluZyBhbmQgc2hvd2luZyBzcGVjaWZpYyBnYW1lcyBpbiB5b3VyIGxpYnJhcnkgYXMgd2VsbCBhcyBvcmRlcmluZyB0aGVtIGJ5IG5hbWUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIExpYnJhcnlGaWx0ZXIgdHlwZVxyXG4gKiBAY2xhc3MgTGlicmFyeUZpbHRlclxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExpYnJhcnlGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnbGlicmFyeS1maWx0ZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBvZiBnYW1lcyBhbmQgZ2FtZSBkYXRhIGltcG9ydGVkIGZyb20gdGhlIERPTVxyXG4gICAgICovXHJcbiAgICBnYW1lczogYW55ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbmFja2JhciB1c2VkIHRvIGRpc3BsYXkgbWVzc2FnZXMgd2hlbiBoaWRpbmcgYW5kIHNob3dpbmcgZ2FtZXNcclxuICAgICAqL1xyXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlsdGVyIGJhciBhbGxvd2luZyBmb3IgY29udHJvbHMgb2YgdGhlIGxpYnJhcnkgZmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGZpbHRlckJhcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYm94IHVzZWQgdG8gb3JkZXIgdGhlIGdhbWVzXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdDogU2VsZWN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VycmVudCBmaWx0ZXJpbmcgb3JkZXJcclxuICAgICAqL1xyXG4gICAgb3JkZXI6IEZpbHRlck9yZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIGFsbCBnYW1lcyBiZSBzaG93biByZWdhcmRsZXNzIGlmIHRoZXlyZSBoaWRkZW4gb3Igbm90P1xyXG4gICAgICovXHJcbiAgICBzaG93QWxsOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tib3ggc2hvd2luZyBoaWRkZW4gZ2FtZXMuXHJcbiAgICAgKi9cclxuICAgIGNoZWNrYm94OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpcmVjdGlvbiBvZiB3aGljaCBnYW1lcyB3aWxsIGJlIG9yZGVyZWQuXHJcbiAgICAgKi9cclxuICAgIGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIGdhbWVzIGluIHlvdXIgbGlicmFyeS5cclxuICAgICAqL1xyXG4gICAgZ2FtZVRpbGVzOiBOb2RlTGlzdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YWRpYUdhbWVEQiBEYXRhYmFzZS5cclxuICAgICAqL1xyXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhZGlhR2FtZURCIFVVSUQgTWFwLlxyXG4gICAgICovXHJcbiAgICB1dWlkTWFwOiBXZWJEYXRhYmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzbmFja2JhcjogU25hY2tiYXIsIGRhdGFiYXNlOiBXZWJEYXRhYmFzZSwgdXVpZE1hcDogV2ViRGF0YWJhc2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBJbXBvcnQgZGF0YWJhc2UgJiB1dWlkTWFwIGZyb20gaW5kZXguanNcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcclxuXHJcbiAgICAgICAgLy8gSW1wb3J0IHNuYWNrYmFyIGZyb20gaW5kZXguanNcclxuICAgICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZmlsdGVyIGJhciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5maWx0ZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmZpbHRlckJhci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBhcm91bmQgZXZlcnkgZ2FtZSBhbmQgaW5pdGlhbGl6ZXMgdGhlIGVsZW1lbnRzIG5lY2Vzc2FyeSB0byBzaG93IG9yIGhpZGUgaXQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlQWxsV3JhcHBlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGlsZSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKGVsZW1lbnQsIHRoaXMuZ2V0VVVJRChlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuZ2FtZVRpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydERpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBnYW1lIFVVSUQgZnJvbSBpdCdzIGpzbG9nIGF0dHJpYnV0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRpbGVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBnZXRVVUlEKHRpbGU6IEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGlsZVxyXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdqc2xvZycpXHJcbiAgICAgICAgICAgIC5zcGxpdCgnOyAnKVsxXVxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyYXBwZXJFeGlzdHModXVpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy0nICsgdXVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIHRpbGUgZWxlbWVudCwgY3JlYXRlIGEgd3JhcHBlciBhcm91bmQgaXQgYW5kIGFuIGljb24gYWxsb3dpbmcgaXQgdG8gYmUgc2hvd24gb3IgaGlkZGVuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZ2FtZSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCB0aGUgZ2FtZSB1dWlkXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVXcmFwcGVyKGVsZW1lbnQ6IEVsZW1lbnQsIHV1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLndyYXBwZXJFeGlzdHModXVpZCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q29ubmVjdGlvbigpWydkYXRhJ107XHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gY29ubmVjdGlvblttYXBbdXVpZF1dO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHdyYXBwZXJcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2dhbWUtdXVpZCcsIHV1aWQpO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdnYW1lLW5hbWUnLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcicpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQgPSB0aGlzLmlkICsgJy0nICsgdXVpZDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpY29uXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nKTtcclxuICAgICAgICBpY29uLmlubmVySFRNTCA9ICd2aXNpYmlsaXR5JztcclxuXHJcbiAgICAgICAgLy8gV3JhcCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGVsZW1lbnQgYW5kIGFkZCB0aGUgaWNvbiBiZWZvcmUgaXRcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHN0b3JhZ2UgZm9yIHZpc2liaWxpdHksIGhpZGUgdGhlIGdhbWUgaWYgYm90aCAndmlzaWJsZScgYW5kICdzaG93QWxsJyBpcyBmYWxzZVxyXG4gICAgICAgIGlmICghdGhpcy5nYW1lcy5oYXNPd25Qcm9wZXJ0eSh1dWlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzW3V1aWRdID0geyB2aXNpYmxlOiB0cnVlIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlICYmICF0aGlzLnNob3dBbGwpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBpY29uIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIHJhdGhlciB0aGFuIHRoZSB0b3AgbGVmdCB1c2luZ1xyXG4gICAgICAgIC8vIGEgbWFyZ2luICh1c2luZyB0aGUgJ2xlZnQnIGNzcyBhdHRyaWJ1dGUgaXMgbm90IHBvc3NpYmxlKVxyXG4gICAgICAgIGljb24uc3R5bGUubWFyZ2luTGVmdCA9IGVsZW1lbnQuY2xpZW50V2lkdGggLSBpY29uLmNsaWVudFdpZHRoICsgJ3B4JztcclxuICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGBjYWxjKDEwMCUgLSAke2VsZW1lbnQuY2xpZW50V2lkdGggL1xyXG4gICAgICAgICAgICAyfXB4KSAke2VsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMn1weGA7XHJcblxyXG4gICAgICAgIC8vIFdoZW4gdGhlIGljb24gaXMgY2xpY2tlZCBvblxyXG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmdhbWVzW3V1aWRdLnZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlLCBzZXQgaXQgdG8gaGlkZGVuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIuaGlkZS1nYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2Ugc2V0IGl0IHRvIHNob3duXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIuc2hvdy1nYW1lJykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBnYW1lJ3MgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhbWUod3JhcHBlciwgZWxlbWVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBhIGdhbWUncyB2aXNpYmlsaXR5LCBtYWtpbmcgc3VyZSBpdCdzIG9ubHkgc2hvd24gd2hlbiBpdCdzIHN1cHBvc2VkIHRvXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB3cmFwcGVyIFRoZSBnYW1lJ3Mgd3JhcHBlciwgY3JlYXRlZCBieSBbW2NyZWF0ZVdyYXBwZXJdXVxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0aWxlIFRoZSBnYW1lIHRpbGVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYW5pbWF0ZSBTaG91bGQgdGhlIGdhbWUgaGF2ZSBhbiBhbmltYXRlZCBjbG9zaW5nIGVmZmVjdD9cclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUdhbWUod3JhcHBlcjogRWxlbWVudCwgdGlsZTogRWxlbWVudCwgYW5pbWF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIEdldCB0aGUgZ2FtZSBVVUlEXHJcbiAgICAgICAgY29uc3QgdXVpZCA9IHRoaXMuZ2V0VVVJRCh0aWxlKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBnYW1lIGljb25cclxuICAgICAgICBjb25zdCBpY29uID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJ1xyXG4gICAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBnYW1lIGlzbid0IHZpc2libGUuLi5cclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSkge1xyXG4gICAgICAgICAgICAvLyAuLi5idXQgYWxsIGdhbWVzIHNob3VsZCBzdGlsbCBiZSBzaG93blxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGljb24gdG8gZGlzcGxheSB0aGF0IGl0J3Mgbm90IHZpc2libGUgYnV0IHNob3duIGFueXdheXNcclxuICAgICAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gJ3Zpc2liaWxpdHlfb2ZmJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXNuJ3QgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnLCAnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UuLi5cclxuICAgICAgICAgICAgICAgIC8vIC4uLmlmIHRoZSBoaWRpbmcgc2hvdWxkIGJlIGFuaW1hdGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZhZGUgdGhlIGdhbWUgdGlsZSBvdXRcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZ0ZXIgMSBzZWNvbmQsIGhpZGUgaXRcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCBub3JtYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaWNvbiBzdGF5cyBpbiBwbGFjZSBhbmQgZG9lc24ndCBnZXQgcmVzZXQgYmFjayB0byB0aGUgdG9wIGxlZnQgY29ybmVyXHJcbiAgICAgICAgICAgIGljb24uc3R5bGUubWFyZ2luTGVmdCA9IHRpbGUuY2xpZW50V2lkdGggLSBpY29uLmNsaWVudFdpZHRoICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaWNvbiBzaG93cyB0aGF0IGl0IGlzIHZpc2libGVcclxuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSAndmlzaWJpbGl0eSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGFsbCBnYW1lcywgc2hvcnRoYW5kIGZvciBsb29waW5nIHRocm91Z2ggdGlsZXMgYW5kIHVwZGF0aW5nIHRoZW0gaW5kaXZpZHVhbGx5XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQWxsR2FtZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhbWUodGlsZS5wYXJlbnRFbGVtZW50LCB0aWxlIGFzIEVsZW1lbnQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgdGhlIHN0b3JlZCBkYXRhIGZyb20gdGhlIHN5bmNocm9uaXplZCBjaHJvbWUgc3RvcmFnZSAoc3RvcmVkIGluIHlvdXIgdXNlciBkYXRhKVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLy8gQ2FsbGJhY2sgdGhhdCBpcyBydW4gYWZ0ZXIgdGhlIGRhdGEgaGFzIGJlZW4gcmVhZFxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgZ2V0U3RvcmFnZShjYWxsYmFjazogKCkgPT4gYW55ID0gKCkgPT4ge30pIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMgPSB7fTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFN5bmNTdG9yYWdlLmdldChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgU3luY1N0b3JhZ2UuTElCUkFSWV9HQU1FUyxcclxuICAgICAgICAgICAgICAgIFN5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9PUkRFUixcclxuICAgICAgICAgICAgICAgIFN5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9ESVJFQ1RJT04sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lcyA9IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ10gIT09IHVuZGVmaW5lZCA/IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ10gOiB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXIgPVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ10gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfT1JERVIudGFnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEZpbHRlck9yZGVyLlJFQ0VOVDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTi50YWddICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZXN1bHRbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTi50YWddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgdG8gdGhlIHN5bmNocm9uaXplZCBjaHJvbWUgc3RvcmFnZSAoc3RvcmVkIGluIHlvdXIgdXNlciBkYXRhKVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLy8gQ2FsbGJhY2sgdGhhdCBpcyBydW4gYWZ0ZXIgdGhlIGRhdGEgaGFzIGJlZW4gd3JpdHRlblxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIHNldFN0b3JhZ2UoY2FsbGJhY2s6ICgpID0+IGFueSA9ICgpID0+IHt9KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTeW5jU3RvcmFnZS5zZXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFtTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLnRhZ106IHRoaXMuZ2FtZXMsXHJcbiAgICAgICAgICAgICAgICBbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX09SREVSLnRhZ106IHRoaXMub3JkZXIsXHJcbiAgICAgICAgICAgICAgICBbU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTi50YWddOiB0aGlzLmRpcmVjdGlvbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoXHJcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgdmFyaWV0eSBvZiBldmVudHMgdG8gdGhlIGZpbHRlciBiYXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBhZGRGaWx0ZXJCYXJFdmVudHMoKSB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgb3JkZXIgaXMgY2hhbmdlZCwgc2V0IGl0IGluIHRoZSBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5zZWxlY3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXIgPSBwYXJzZUludCh0aGlzLnNlbGVjdC5nZXQoKVswXSkgYXMgRmlsdGVyT3JkZXI7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBXaGVuIHRoZSBzaG93IGFsbCBjaGVja2JveCBpcyBjbGlja2VkLCB0b2dnbGUgdGhlIHNob3dBbGwgdmFyaWFibGUgYW5kIHVwZGF0ZSB0aGUgZ2FtZXNcclxuICAgICAgICB0aGlzLmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dBbGwgPSAodGhpcy5jaGVja2JveCBhcyBhbnkpLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsR2FtZXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnIycgKyB0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzb3J0IGRpcmVjdGlvblxyXG4gICAgICAgIGRpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnREaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudDogRWxlbWVudCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJyMnICsgdGhpcy5maWx0ZXJCYXIuaWQgKyAnLWRpcmVjdGlvbidcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5ERVNDRU5ESU5HO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZGluZycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkc7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FzY2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW5zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBzdG9wcGVkLCBkZXN0cm95cyBuZWNlc3NhcnkgcGFydHNcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJylcclxuICAgICAgICAgICAgLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoXHJcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU29ydHMgdGhlIGdhbWUgbGlzdCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc29ydCBvcmRlci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzb3J0R2FtZXMoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IChBcnJheS5mcm9tKHRoaXMuZ2FtZVRpbGVzKSBhcyBFbGVtZW50W10pLm1hcChcclxuICAgICAgICAgICAgKGUpID0+IGUucGFyZW50RWxlbWVudFxyXG4gICAgICAgICk7IC8vIEdldCBhbGwgd3JhcHBlcnMgYXMgYW4gYXJyYXlcclxuICAgICAgICBhcnIgPSBhcnIuc29ydChGaWx0ZXJPcmRlci5nZXRTb3J0ZXIodGhpcy5vcmRlcikgYXMgYW55KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkcpIHtcclxuICAgICAgICAgICAgYXJyID0gYXJyLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyci5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnByZXBlbmQoZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyBldmVyeSBzZWNvbmQsIGNyZWF0ZXMgYW5kIHVwZGF0ZXMgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNJbkhvbWUoKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5DVlZYZmMuWVl5M1piJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlkID0gdGhpcy5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7RmlsdGVyT3JkZXIuUkVDRU5UfVwiPiR7TGFuZ3VhZ2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5LWZpbHRlci5yZWNlbnQnXHJcbiAgICAgICAgICAgICAgICApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlck9yZGVyLkFMUEhBQkVUSUNBTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCI+JHtMYW5ndWFnZS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnktZmlsdGVyLmFscGhhYmV0aWNhbCdcclxuICAgICAgICAgICAgICAgICl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJBTkRPTX1cIj4ke0xhbmd1YWdlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAnbGlicmFyeS1maWx0ZXIucmFuZG9tJ1xyXG4gICAgICAgICAgICAgICAgKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0nJHt0aGlzLmZpbHRlckJhci5pZCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctZGlyZWN0aW9uJ30nIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgYXNjZW5kaW5nIHN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwcmV0dHksIGNoZWNrYm94IH0gPSBuZXcgQ2hlY2tib3goXHJcbiAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdsaWJyYXJ5LWZpbHRlci5zaG93LWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEJpZ2dlcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTaGFwZShDaGVja2JveFNoYXBlLkNVUlZFRClcclxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIuYXBwZW5kQ2hpbGQocHJldHR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3ggPSBjaGVja2JveDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yQWxsKCcuR3FMaTRkJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJCYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWxsV3JhcHBlcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdHlsZSB0aGUgY3VzdG9tIHNlbGVjdCBib3ggaW4gdGhlIGZpbHRlciBiYXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBsYWNlaG9sZGVyOiBGaWx0ZXJPcmRlci5SRUNFTlQgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQodGhpcy5vcmRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWx0ZXJCYXJFdmVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERpZmZlcmVudCB0eXBlcyBvZiBmaWx0ZXJpbmcsIHJlcHJlc2VudGVkIGFzIG51bWJlcnNcclxuICpcclxuICogQGV4cG9ydCB0aGUgRmlsdGVyT3JkZXIgdHlwZVxyXG4gKiBAY2xhc3MgRmlsdGVyT3JkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJPcmRlciB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgU3RhZGlhIHNvcnRpbmcsIHJlY2VudC9uZXcgZ2FtZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSRUNFTlQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxwaGFiZXRpY2FsIG9yZGVyLlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQUxQSEFCRVRJQ0FMID0gMTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSYW5kb20gb3JkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSQU5ET00gPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzb3J0aW5nIG1ldGhvZCBvZiB0aGUgaW5wdXRlZCBvcmRlci5cclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHNvcnRpbmcgZ2FtZXMgYnkgdGhlIGlucHV0ZWQgb3JkZXIuXHJcbiAgICAgKiBAcGFyYW0ge0ZpbHRlck9yZGVyfSBvcmRlclxyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRTb3J0ZXIob3JkZXI6IEZpbHRlck9yZGVyKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHN3aXRjaCAob3JkZXIpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLlJFQ0VOVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRSZWNlbnQ7XHJcblxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUxQSEFCRVRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEFscGhhYmV0aWNhbDtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SQU5ET006XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0UmFuZG9tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvcnQgYnkgcmVjZW50IGdhbWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0geyp9IGFcclxuICAgICAqIEBwYXJhbSB7Kn0gYlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB3aGljaCBwYXJhbWV0ZXIgaXMgd2hlcmUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJlY2VudChhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTb3J0IGFscGhhYmV0aWNhbGx5LlxyXG4gICAgICogXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHsqfSBhXHJcbiAgICAgKiBAcGFyYW0geyp9IGJcclxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgd2hpY2ggcGFyYW1ldGVyIGlzIHdoZXJlLlxyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHNvcnRBbHBoYWJldGljYWwoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG5cclxuICAgICAgICBpZiAobmFtZUEgPT09IHVuZGVmaW5lZCB8fCBuYW1lQiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWVBLmxvY2FsZUNvbXBhcmUobmFtZUIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNvcnRSYW5kb20oYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMikgLSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRW51bSBjb250YWluaW5nIGRpZmZlcmVudCBvcmRlciBkaXJlY3Rpb25zXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIE9yZGVyRGlyZWN0aW9uIHR5cGUuXHJcbiAqIEBlbnVtIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvbiB7XHJcbiAgICBBU0NFTkRJTkcsXHJcbiAgICBERVNDRU5ESU5HLFxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL1VJQ29tcG9uZW50JztcclxuaW1wb3J0ICcuL3N0eWxlcy9OZXR3b3JrTW9uaXRvci5zY3NzJztcclxuXHJcbi8vIEltcG9ydCB0aGUgTW9uaXRvciBydW5uYWJsZSBhcyBhIHJhdyBzdHJpbmdcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgcnVubmFibGUgZnJvbSAnIXJhdy1sb2FkZXIhLi4vTW9uaXRvclJ1bm5hYmxlJztcclxuaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94QW5pbWF0aW9uIH0gZnJvbSAnLi4vdWkvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XHJcblxyXG5jb25zdCB7IGNocm9tZSwgUlRDUGVlckNvbm5lY3Rpb24gfSA9ICh3aW5kb3cgYXMgYW55KTtcclxuXHJcbi8qKlxyXG4gKiBBIG5ldHdvcmsgbW9uaXRvciBhbGxvd2luZyB1c2VycyB0byBzZWUgdGhlaXIgbmV0d29yayBzdGF0aXN0aWNzIHdoaWxlIHBsYXlpbmcgYSBnYW1lLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBOZXR3b3JrTW9uaXRvciB0eXBlLlxyXG4gKiBAY2xhc3MgTmV0d29ya01vbml0b3JcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOZXR3b3JrTW9uaXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICduZXR3b3JrLW1vbml0b3InO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhYiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICB0YWJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtb25pdG9yIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgbW9uaXRvciBpcyBvcGVuIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgbW9uaXRvck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrLW1vbml0b3InKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJ1bm5hYmxlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZpc2libGUgbmV0d29yayBzdGF0aXN0aWNzLlxyXG4gICAgICovXHJcbiAgICB2aXNpYmxlOiBhbnkgPSB7XHJcbiAgICAgICAgJ3RpbWUnOiB0cnVlLFxyXG4gICAgICAgICdyZXNvbHV0aW9uJzogdHJ1ZSxcclxuICAgICAgICAnRlBTJzogdHJ1ZSxcclxuICAgICAgICAnbGF0ZW5jeSc6IHRydWUsXHJcbiAgICAgICAgJ2NvZGVjJzogdHJ1ZSxcclxuICAgICAgICAndHJhZmZpYyc6IHRydWUsXHJcbiAgICAgICAgJ2N1cnJlbnQtdHJhZmZpYyc6IHRydWUsXHJcbiAgICAgICAgJ2F2ZXJhZ2UtdHJhZmZpYyc6IHRydWUsXHJcbiAgICAgICAgJ3BhY2tldHMtbG9zdCc6IHRydWUsXHJcbiAgICAgICAgJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnOiB0cnVlLFxyXG4gICAgICAgICdqaXR0ZXItYnVmZmVyJzogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGljaCBvcmRlciB0aGUgbmV0d29yayBzdGF0aXN0aWNzIHNob3cgdXAgaW4uXHJcbiAgICAgKi9cclxuICAgIG9yZGVyTWFwOiBhbnkgPSBbXHJcbiAgICAgICAgJ3RpbWUnLFxyXG4gICAgICAgICdyZXNvbHV0aW9uJyxcclxuICAgICAgICAnRlBTJyxcclxuICAgICAgICAnbGF0ZW5jeScsXHJcbiAgICAgICAgJ2NvZGVjJyxcclxuICAgICAgICAndHJhZmZpYycsXHJcbiAgICAgICAgJ2N1cnJlbnQtdHJhZmZpYycsXHJcbiAgICAgICAgJ2F2ZXJhZ2UtdHJhZmZpYycsXHJcbiAgICAgICAgJ3BhY2tldHMtbG9zdCcsXHJcbiAgICAgICAgJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnLFxyXG4gICAgICAgICdqaXR0ZXItYnVmZmVyJ1xyXG4gICAgXVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV0uXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVVSSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBVSUNvbXBvbmVudChcclxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IubmFtZScpLFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J0NUdkRYZCBRQUF5V2QgRmp5MDVkIGl2V1VoYyBRU0RIeWMgcnBnWnpjIFJreUgxZSBzdGFkaWFwbHVzX2J1dHRvbiBzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRvZ2dsZS1idXR0b24nIGlkPScke3RoaXMuaWR9LXRvZ2dsZWJ1dHRvbic+TmV0d29yayBNb25pdG9yPC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGg2PiR7TGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IuaGVhZGluZy12aXNpYmxlJyl9PC9oNj5cclxuICAgICAgICAgICAgPHVsIGlkPScke3RoaXMuaWR9LXZpc2libGVsaXN0Jz48L3VsPlxyXG4gICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkJz5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+V2h5IGlzIG15IG5ldHdvcmsgc3BlZWQgc28gbXVjaCBsb3dlciB0aGFuIG5vcm1hbD88L3N0cm9uZz48L2JyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICBUaGUgc3RhdGlzdGljcyBzaG93biBpbiB0aGUgbmV0d29yayBtb25pdG9yIGhhdmUgY2hhbmdlZCB1bml0cyBmcm9tIGJpdHMgKGIpIHRvIGJ5dGVzIChCKS4gVGhpcyBtZWFucyB0aGUgc3RhdGlzdGljcyBpbiAyLjIgYW5kIGxhdGVyIHdpbGwgYmUgYXJvdW5kIDEvOCBvZiB3aGF0IHRoZXkgd2VyZSBpbiAyLjEuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10YWInKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL25ldHdvcmstbW9uaXRvci5zdmcnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihpY29uLCBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5idXR0b24tbGFiZWwnKSwgdGhpcy5pZCArICctYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgoKSA9PiB7IHRoaXMudXBkYXRlVmlzaWJsZSgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgdGhlIG5ldHdvcmsgbW9uaXRvciBydW5uYWJsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcclxuICAgICAqL1xyXG4gICAgc3RhcnRSdW5uYWJsZSgpIHtcclxuICAgICAgICBVdGlsLmRlc2FuZGJveChydW5uYWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIHRoZSBtb25pdG9yLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBvcGVuTW9uaXRvcigpIHtcclxuICAgICAgICB0aGlzLm1vbml0b3JPcGVuID0gdHJ1ZTtcclxuICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc3RhcnQoKScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgdGhlIG1vbml0b3IuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIGNsb3NlTW9uaXRvcigpIHtcclxuICAgICAgICB0aGlzLm1vbml0b3JPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnN0b3AoKScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy5nZXQoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdFtMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy50YWddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSByZXN1bHRbTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMudGFnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcclxuICAgICAqL1xyXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLk1PTklUT1JfU1RBVFMuc2V0KHRoaXMudmlzaWJsZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0UnVubmFibGUoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVVJKCk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yID0gbnVsbCcpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB3aGljaCBzdGF0aXN0aWNzIHNob3VsZCBiZSB2aXNpYmxlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICB1cGRhdGVWaXNpYmxlKCkge1xyXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KGBTdGFkaWFQbHVzTW9uaXRvci5zZXRWaXNpYmxlKCR7SlNPTi5zdHJpbmdpZnkodGhpcy52aXNpYmxlKX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uT3BlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnNldEVkaXRhYmxlKHRydWUpJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkNsb3NlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc2V0RWRpdGFibGUoZmFsc2UpJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXZpc2libGVsaXN0Jyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMub3JkZXJNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBrZXkucmVwbGFjZSgvLS9nLCAnICcpLnNwbGl0KCcgJykubWFwKChuYW1lOnN0cmluZykgPT4gbmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpKS5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWU6IGJvb2xlYW4gPSB0aGlzLnZpc2libGVba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge3ByZXR0eSwgY2hlY2tib3h9ID0gbmV3IENoZWNrYm94KG5hbWUpLnNldEJpZ2dlcih0cnVlKS5zZXRBbmltYXRpb24oQ2hlY2tib3hBbmltYXRpb24uU01PT1RIKS5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLWNoZWNrYm94Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocHJldHR5KTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlW2tleV0gPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctdG9nZ2xlYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nLCB0aGlzLm1vbml0b3JPcGVuKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLm1vbml0b3JPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vbml0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicsIHRoaXMubW9uaXRvck9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY3JlYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW5UYWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbXBvbmVudC5vcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsb3NlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFVdGlsLmlzSW5HYW1lKCkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keT4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb25pdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvUmF0aW5ncy5zY3NzJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcblxyXG4vKipcclxuICogQSBjb21wb25lbnQgYWRkaW5nIE1ldGFjcml0aWMgcmF0aW5ncyB0byBldmVyeSBTdGFkaWEgZ2FtZS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgUmF0aW5ncyB0eXBlXHJcbiAqIEBjbGFzcyBSYXRpbmdzXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmF0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICdyYXRpbmdzJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByYXRpbmcgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgU3RhZGlhR2FtZURCIGRhdGFiYXNlLlxyXG4gICAgICovXHJcbiAgICBkYXRhYmFzZTogV2ViRGF0YWJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgU3RhZGlhR2FtZURCIFVVSUQgTWFwLlxyXG4gICAgICovXHJcbiAgICB1dWlkTWFwOiBXZWJEYXRhYmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2YWx1ZSBmcm9tIGVhY2ggYm91bmQgaW4gd2hpY2ggYSBnYW1lIHdpbGwgZ2V0IDAgb3IgNSBzdGFycy5cclxuICAgICAqL1xyXG4gICAgZ3JhY2VBbW91bnQ6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHN0YXJzIHRvIGF3YXJkLlxyXG4gICAgICovXHJcbiAgICBtYXhTdGFycyA9IDU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2U6IFdlYkRhdGFiYXNlLCB1dWlkTWFwOiBXZWJEYXRhYmFzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcclxuICAgICAgICB0aGlzLnV1aWRNYXAgPSB1dWlkTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgcmF0aW5nIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3NcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19yYXRpbmcnLCAnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjdXJyZW50IGdhbWUgVVVJRC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZ2FtZSBVVUlEIGFzIGEgc3RyaW5nLlxyXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3NcclxuICAgICAqL1xyXG4gICAgZ2V0VVVJRCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5ocmVmLnN1YnN0cmluZygnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoLCAnaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbS9zdG9yZS9kZXRhaWxzLycubGVuZ3RoICsgMzYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCByYXRpbmcsIGZldGNoaW5nIGl0IGZyb20gdGhlIGRhdGFiYXNlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVJhdGluZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gdGhpcy5nZXRVVUlEKCk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q29ubmVjdGlvbigpWydkYXRhJ107XHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gY29ubmVjdGlvblttYXBbdXVpZF1dO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJhdGluZycsIGVudHJ5WzZdKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGhvdyBtYW55IHN0YXJzIGEgZ2FtZSBzaG91bGQgaGF2ZSBiYXNlZCBvbiBpdCdzIHJhdGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW5nIHRoZSBnYW1lJ3MgcmF0aW5nLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBhbiBhcnJheSBvZiBpY29uIHN0cmluZ3MsIGJlaW5nIGVpdGhlciBcInN0YXJcIiwgXCJzdGFyX2hhbGZcIiBvciBcInN0YXJfb3V0bGluZVwiLlxyXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3MgXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXJzKHJhdGluZzogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dFN0YXJzID0gW107XHJcblxyXG4gICAgICAgIC8vIENsYW1wcyB0aGUgcmF0aW5nIHRvIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDEsXHJcbiAgICAgICAgLy8gd2hlcmUgKDAgKyBncmFjZUFtb3VudCkgaXMgMCBhbmQgKDEwMCAtIGdyYWNlQW1vdW50KSBpcyAxXHJcbiAgICAgICAgY29uc3QgY2xhbXBlZFIgPSAocmF0aW5nIC8gMTAwKSAqICgxICsgKHRoaXMuZ3JhY2VBbW91bnQgLyAxMDApICogMikgLSAodGhpcy5ncmFjZUFtb3VudCAvIDEwMCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCByID0gY2xhbXBlZFI7IGkgPCB0aGlzLm1heFN0YXJzOyBpICs9IDEsIHIgLT0gMSAvIHRoaXMubWF4U3RhcnMpIHtcclxuICAgICAgICAgICAgaWYgKHIgPj0gMSAvIHRoaXMubWF4U3RhcnMpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXInKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyID49IDApIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXJfaGFsZicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0U3RhcnMucHVzaCgnc3Rhcl9vdXRsaW5lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXRTdGFycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIHJhdGluZyBlbGVtZW50IHRvIG1ha2Ugc3VyZSBpdCBhbHdheXMgZGlzcGxheXMgdGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICBpZihVdGlsLmlzSW5TdG9yZURldGFpbCgpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmF0aW5nID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yYXRpbmcnKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFycyA9IHRoaXMuZ2V0U3RhcnMocmF0aW5nKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJhdGluZyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignLlp6QkpTYiA+IC5CTVVuZmQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmV4dFNpYmxpbmcgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LCBuZXh0U2libGluZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c3RhcnMuam9pbignICcpfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhZGlhcGx1c19yYXRpbmctdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtyYXRpbmd9IC8gMTAwICgke0xhbmd1YWdlLmdldCgncmF0aW5ncy5zb3VyY2UtbmFtZScpfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL1N0b3JlRmlsdGVyLnNjc3MnO1xyXG5pbXBvcnQgeyBXZWJEYXRhYmFzZSB9IGZyb20gJy4uL1dlYkRhdGFiYXNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcblxyXG4vKipcclxuICogQSBzZWFyY2ggYmFyIGRpc3BsYXllZCBvbiB0aGUgc3RvcmUgcGFnZSBvZiBTdGFkaWEuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFN0b3JlRmlsdGVyIHR5cGUuXHJcbiAqIEBjbGFzcyBTdG9yZUZpbHRlclxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JlRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ3N0b3JlLWZpbHRlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VhcmNoIGJhciBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgdGVtcGxhdGUgZWxlbWVudCBmb3IgaW5kaXZpZHVhbCBnYW1lcyBpbiB0aGUgc2VhcmNoIGJveC5cclxuICAgICAqL1xyXG4gICAgZ2FtZVRlbXBsYXRlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgZGF0YWJhc2UuXHJcbiAgICAgKi9cclxuICAgIGRhdGFiYXNlOiBXZWJEYXRhYmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBTdGFkaWFHYW1lREIgVVVJRCBNYXAuXHJcbiAgICAgKi9cclxuICAgIHV1aWRNYXA6IFdlYkRhdGFiYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgYWxsIGdhbWUgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIGdhbWVzOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VhcmNoIGlucHV0LlxyXG4gICAgICovXHJcbiAgICBzZWFyY2hGaWVsZDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2U6IFdlYkRhdGFiYXNlLCB1dWlkTWFwOiBXZWJEYXRhYmFzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xyXG4gICAgICAgIHRoaXMudXVpZE1hcCA9IHV1aWRNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBzZWFyY2ggYmFyIGFuZCBuZWNlc3NhcnkgZWxlbWVudHMvdmFyaWFibGVzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBTdG9yZUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXInKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jhcic+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCIke2Nvbm5lY3Rpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29ubmVjdGlvbi5sZW5ndGgpXVsxXX0uLi5cIiBpZD0nJHt0aGlzLmlkfS1zZWFyY2gnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ2FtZXMnIGlkPScke3RoaXMuaWR9LWdhbWVzJz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBjb25uZWN0aW9uW21hcFtrZXldXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZScpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2xvcmVtZmxpY2tyLmNvbS82NDAvMzYwJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RldGFpbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPSduYW1lJz5Mb3JlbSBJcHN1bTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3N0YWRpYXBsdXNfbXV0ZWQgdGFncyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCBrZXkpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10YWdzJywgZW50cnlbMl0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9zdGFkaWEuZ29vZ2xlLmNvbVwiIGFzIGFueTtcclxuICAgICAgICAgICAgY29uc3QgbG9jQXJyID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICBpZihsb2NBcnIubGVuZ3RoID4gNSkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gbG9jQXJyLnNsaWNlKDAsIDUpLmpvaW4oJy8nKSArICcvJztcclxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCArICh1cmwuZW5kc1dpdGgoJy8nKSA/IC0xIDogMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlSWQgPSBlbnRyeVswXS5tYXRjaCgvaHR0cHM6XFwvXFwvc3RhZGlhLmdvb2dsZS5jb21cXC9zdG9yZVxcL2RldGFpbHNcXC8oWzAtOWEtei9dKykvKVsxXTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwgKyAnL3N0b3JlL2RldGFpbHMvJyArIHN0b3JlSWQpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbWcnLCAnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tLycgKyBlbnRyeVswXS5tYXRjaCgvKGltYWdlc1xcL3Bvc3RlcnNcXC9bYS16MC05Xy4tXSsucG5nKS9nKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWVzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBpbnB1dCBldmVudHMgdG8gdGhlIHNlYXJjaCBiYXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFN0b3JlRmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgodGhpcy5zZWFyY2hGaWVsZCBhcyBhbnkpLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaGVzIHRoZSBnYW1lIGxpc3QgZm9yIGEgc3BlY2lmaWMgc3RyaW5nIGFuZCBzaG93cyB3aGljaGV2ZXIgZ2FtZXMgZml0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RvcmVGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdhbWVzLmZvckVhY2goKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBnYW1lLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgcXVlcnkubGVuZ3RoID4gMCAmJiBuYW1lLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRoZSBzZWFyY2ggYmFyIG9ubHkgZXhpc3RzIHdoZW4gaXQncyBzdXBwb3NlZCB0byBhbmQgd29ya3MgcHJvcGVybHkgZXZlbiBpZiBhY2NpZGVudGFsbHkgZGVzdHJveWVkLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2xvY2tcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgaWYoVXRpbC5pc0luU3RvcmUoKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcubldtdExkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29udGFpbmVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctZ2FtZXMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcnKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsPi5uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IGdhbWUucXVlcnlTZWxlY3RvcignLmRldGFpbD4udGFncycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MuaW5uZXJIVE1MID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFncycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy1zZWFyY2gnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS9VSUNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvVUlUYWIuc2Nzcyc7XHJcbmltcG9ydCAnLi4vdWkvc3R5bGVzL0J1dHRvbi5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvR3JpZC5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvVHlwb2dyYXBoeS5zY3NzJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcblxyXG5jb25zdCBjaHJvbWU6IGFueSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSB0YWIgYW5kIGJ1dHRvbiBkaXNwbGF5ZWQgaW4gdGhlIFN0YWRpYSBNZW51LlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBVSVRhYiB0eXBlLlxyXG4gKiBAY2xhc3MgVUlUYWJcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVSVRhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ3VpLXRhYic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFiIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhbW91bnQgb2Ygcm93cywgZWFjaCBjb250YWluaW5nIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIHJvd3M6IFVJUm93W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgbGlzdCBvZiBmdW4gTU9URCBtZXNzYWdlcyBhZGRlZCB0byB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBtb3RkTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1vamlzLzYzNjIyNzg2NDA3Njc0Njc3Mi5wbmc/dj0xXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDsgd2lkdGg6IDI0cHhcIj4nLFxyXG4gICAgICAgIFwiRG9uJ3QgbG9vayBoZXJlLCBsb29rIGJlbG93IVwiLFxyXG4gICAgICAgICdSZWFsaXR5IGNhbiBiZSB3aGF0ZXZlciBJIHdhbnQuJyxcclxuICAgICAgICAnSWYgeW91IGFzayBuaWNlbHksIFN0YWRpYSBtaWdodCBldmVuIGRvIHlvdXIgbGF1bmRyeSBmb3IgeW91IScsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIGFza2luZyBjdXN0b21lciBzdXBwb3J0PycsXHJcbiAgICAgICAgJ0ZvbGxvdyB1L21hZnJhbnMgb24gUmVkZGl0IScsXHJcbiAgICAgICAgJ1N0YWRpYSssIGxpa2UgR29vZ2xlKyBidXQgc3RpbGwgYWxpdmUuJyxcclxuICAgICAgICAnU3RhZGlhIGlzIERPQSwgYmVsaWV2ZSBtZS4nLFxyXG4gICAgICAgICdHZXQgYSBsb2FkIG9mIHRoaXMgZ3V5LCB1c2luZyBjaHJvbWUgZXh0ZW5zaW9ucyB0byBpbXByb3ZlIGhpcyBTdGFkaWEgZXhwZXJpZW5jZS4nLFxyXG4gICAgICAgIFwiSSdtIHRlbGxpbmcgeW91LCBkb24ndCB0cnVzdCB0aGF0IGd1eS4gWW91IGtub3csIHRoZSBndXkuXCIsXHJcbiAgICAgICAgJ1Nob3V0b3V0IHRvIENocmlzIGFuZCBHcmFjZSEnLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBTcGxpdGxpbmdzIHlldD8nLFxyXG4gICAgICAgICdBbHdheXMgY2hlY2sgdGhlIHJhdGluZ3MgYmVmb3JlIHlvdSBidXkgYSBuZXcgZ2FtZS4nLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBHZUZvcmNlIE5vdz8nLFxyXG4gICAgICAgICdBIGhvdCBkb2cgaXMgZGVmaW5pdGVseSBub3QgYSBzYW5kd2ljaC4nLFxyXG4gICAgICAgICdJZGsgYWJvdXQgeW91LCBidXQgSSByZWFsbHkgd2FudCBvbmUgb2YgdGhvc2UgZmFuY3kgc21hcnQgdG9pbGV0cy4nLFxyXG4gICAgICAgICdDaHJpcyBpcyB0eXBpbmcgZ3V5cyEhJyxcclxuICAgICAgICAnRG9lcyBhbnlvbmUgaGF2ZSBhIGJ1ZGR5IHBhc3MgSSBjb3VsZCBib3Jyb3c/JyxcclxuICAgICAgICAnSSBwYWlkICQxMzkgZm9yIHRoaXM/JyxcclxuICAgICAgICAnSXMgRm9ydG5pdGUgb24gU3RhZGlhIHlldD8nLFxyXG4gICAgICAgICd1L2JhY29ucnVsZXMgd2FzIHRoZSBmaXJzdCB0byBzZWUgNGshJyxcclxuICAgICAgICAnU28gZGlkIHRoZSBwZXJzb24gdGhhdCBtYWRlIHRoZSBzdGFkaWErIGV4dGVuc2lvbiBnaXZlIHVwIG9uIHN0YWRpYT8nLFxyXG4gICAgICAgICdJdFxcJ3MgbGlrZSBHRk4sIGJ1dCB3aXRob3V0IGFueSBwdWxsZWQgZ2FtZXMuJyxcclxuICAgICAgICAnTG9uZyBsaXZlIEdlZm9yY2UgTm93KycsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgW1tVSUNvbXBvbmVudF1dIGFuZCBhIFtbVUlCdXR0b25dXVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAnU3RhZGlhKycsXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogNXJlbTsgZGlzcGxheTogYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW90ZExpc3RbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vdGRMaXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvc3RhZGlhcGx1cy5zdmcnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihpY29uLCBMYW5ndWFnZS5nZXQoJ3VpLXRhYi5idXR0b24tbGFiZWwnKSwgdGhpcy5pZCArICctYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmQgYWxsIHJvd3MgdGhhdCBkb24ndCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbG9hZF1cclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVSb3dzKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgaWYoIXJvdy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZCh0aGlzLmNvbXBvbmVudCwgaSA+IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByb3cucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgYWxsIHJvd3NcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgcmVsb2FkUm93cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4gcm93LnJlbG9hZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHJvdyB0byB0aGUgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgYWRkUm93KHJvdzogVUlSb3cpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYW5kIHVubG9hZCBhbGwgcm93cy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXHJcbiAgICAgKi9cclxuICAgIGNsZWFyUm93cygpOiB2b2lkIHtcclxuICAgICAgICBmb3IoY29uc3Qgcm93IG9mIHRoaXMucm93cykge1xyXG4gICAgICAgICAgICByb3cuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgcm93LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUm93cyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW5UYWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbXBvbmVudC5vcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsb3NlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DbG9jay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlQ29kZWMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb3JjZVJlc29sdXRpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaWJyYXJ5RmlsdGVyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTmV0d29ya01vbml0b3Iuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SYXRpbmdzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3RvcmVGaWx0ZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9VSVRhYi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9HbG9iYWwuc2NzcydcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vQ29tcG9uZW50TG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICcuL2NvbXBvbmVudHMvQ2xvY2snXHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9jb21wb25lbnRzL1VJVGFiJ1xyXG5pbXBvcnQgeyBGb3JjZUNvZGVjIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcmNlQ29kZWMnXHJcbmltcG9ydCB7IEZvcmNlUmVzb2x1dGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24nXHJcbmltcG9ydCB7IE5ldHdvcmtNb25pdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL05ldHdvcmtNb25pdG9yJztcclxuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgTGlicmFyeUZpbHRlciB9IGZyb20gJy4vY29tcG9uZW50cy9MaWJyYXJ5RmlsdGVyJztcclxuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuL1dlYkRhdGFiYXNlJztcclxuaW1wb3J0IHsgU3RvcmVGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RvcmVGaWx0ZXInO1xyXG5pbXBvcnQgeyBSYXRpbmdzIH0gZnJvbSAnLi9jb21wb25lbnRzL1JhdGluZ3MnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4vTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBBbGxvd1dpbmRvd2VkTW9kZSB9IGZyb20gJy4vY29tcG9uZW50cy9BbGxvd1dpbmRvd2VkTW9kZSc7XHJcblxyXG4vLyBBbHdheXMgbG9hZCBsYW5ndWFnZXMgZmlyc3RcclxuTGFuZ3VhZ2UuaW5pdCgpO1xyXG5MYW5ndWFnZS5sb2FkKCk7XHJcblxyXG5jb25zdCBsb2FkZXIgPSBuZXcgQ29tcG9uZW50TG9hZGVyKCk7XHJcbmNvbnN0IHNuYWNrYmFyID0gbmV3IFNuYWNrYmFyKCk7XHJcbmNvbnN0IHRhYiA9IG5ldyBVSVRhYigpO1xyXG5cclxuY29uc3QgZGF0YWJhc2UgPSBuZXcgV2ViRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL2dhbWVkYi5qc29uJyk7XHJcbmNvbnN0IHV1aWRNYXAgPSBuZXcgV2ViRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL3V1aWRtYXAuanNvbicpO1xyXG5kYXRhYmFzZS5jb25uZWN0KCk7XHJcbnV1aWRNYXAuY29ubmVjdCgpO1xyXG5cclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBDbG9jaygpKTtcclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBMaWJyYXJ5RmlsdGVyKHNuYWNrYmFyLCBkYXRhYmFzZSwgdXVpZE1hcCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlQ29kZWModGFiLCBzbmFja2JhcikpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlUmVzb2x1dGlvbih0YWIsIHNuYWNrYmFyKSk7XHJcbmxvYWRlci5yZWdpc3Rlcih0YWIpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IE5ldHdvcmtNb25pdG9yKCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IFN0b3JlRmlsdGVyKGRhdGFiYXNlLCB1dWlkTWFwKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgUmF0aW5ncyhkYXRhYmFzZSwgdXVpZE1hcCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEFsbG93V2luZG93ZWRNb2RlKCkpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBVdGlsLmxvYWQoKTtcclxuICAgIHNuYWNrYmFyLmNyZWF0ZSgpO1xyXG4gICAgbG9hZGVyLnN0YXJ0KCk7XHJcbn0pIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HbG9iYWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVHlwb2dyYXBoeS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9wcmV0dHktY2hlY2tib3gvc3JjL3ByZXR0eS1jaGVja2JveC5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveCB7XHJcbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHNoYXBlOiBzdHJpbmcgPSBDaGVja2JveFNoYXBlLkRFRkFVTFQ7XHJcbiAgICBwcml2YXRlIHN0eWxlOiBzdHJpbmcgPSBDaGVja2JveFN0eWxlLkRFRkFVTFQ7XHJcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBib3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBpY29uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBiaWdnZXI6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTaGFwZShzaGFwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRBbmltYXRpb24oYW5pbWF0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0Qm9yZGVyKGJvcmRlcjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRJY29uKGljb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmlnZ2VyKGJpZ2dlcjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYmlnZ2VyID0gYmlnZ2VyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAvLyBBZGQgbWFpbiBjbGFzc2VzXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcmV0dHknLCAncC1kZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgIC8vIElmIHN0eWxlIGlzIG5vdCBkZWZhdWx0LCBhZGQgc3R5bGVcclxuICAgICAgICBpZih0aGlzLnNoYXBlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNoYXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHN0eWxlIGlzIG5vdCBkZWZhdWx0LCBhZGQgc3R5bGVcclxuICAgICAgICBpZih0aGlzLnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnN0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFuaW1hdGVkLCBhZGQgYW5pbWF0aW9uXHJcbiAgICAgICAgaWYodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBiaWdnZXJcclxuICAgICAgICBpZih0aGlzLmJpZ2dlcikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3AtYmlnZ2VyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgYm9yZGVyXHJcbiAgICAgICAgaWYoIXRoaXMuYm9yZGVyKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1wbGFpbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGNoZWNrYm94IGlucHV0XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHN0YXRlIGRpdlxyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCgnc3RhdGUnKTtcclxuXHJcbiAgICAgICAgLy8gSWYgY29sb3JlZCwgYWRkIGNvbG9yXHJcbiAgICAgICAgaWYodGhpcy5jb2xvcikge1xyXG4gICAgICAgICAgICBzdGF0ZS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgaGFzIGljb24sIGFkZCBpY29uXHJcbiAgICAgICAgaWYodGhpcy5pY29uKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1pY29uJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gdGhpcy5pY29uO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgbGFiZWxcclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gdGhpcy5sYWJlbDtcclxuICAgICAgICBzdGF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4ge3ByZXR0eTogZWxlbWVudCwgY2hlY2tib3h9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hTaGFwZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIENVUlZFRDogc3RyaW5nID0gJ3AtY3VydmUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBST1VORDogc3RyaW5nID0gJ3Atcm91bmQnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hTdHlsZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIEZJTEw6IHN0cmluZyA9ICdwLWZpbGwnO1xyXG4gICAgcHVibGljIHN0YXRpYyBUSElDSzogc3RyaW5nID0gJ3AtdGhpY2snO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb2xvciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEJMVUU6IHN0cmluZyA9ICdwLXByaW1hcnknO1xyXG4gICAgcHVibGljIHN0YXRpYyBHUkVFTjogc3RyaW5nID0gJ3Atc3VjY2Vzcyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFlFTExPVzogc3RyaW5nID0gJ3Atd2FybmluZyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIENZQU46IHN0cmluZyA9ICdwLWluZm8nO1xyXG4gICAgcHVibGljIHN0YXRpYyBSRUQ6IHN0cmluZyA9ICdwLWRhbmdlcic7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEFuaW1hdGlvbiB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNNT09USDogc3RyaW5nID0gJ3Atc21vb3RoJztcclxuICAgIHB1YmxpYyBzdGF0aWMgSkVMTFk6IHN0cmluZyA9ICdwLWplbGx5JztcclxuICAgIHB1YmxpYyBzdGF0aWMgVEFEQTogc3RyaW5nID0gJ3AtdGFkYSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPVEFURTogc3RyaW5nID0gJ3Atcm90YXRlJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUFVMU0U6IHN0cmluZyA9ICdwLXB1bHNlJztcclxufSIsImltcG9ydCBTbGltU2VsZWN0IGZyb20gJ3NsaW0tc2VsZWN0JztcclxuaW1wb3J0ICdzbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vdWkvc3R5bGVzL1NlbGVjdC5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Qge1xyXG4gICAgc2xpbXNlbGVjdDogU2xpbVNlbGVjdDtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgb3B0aW9uczogU2VsZWN0T3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIG9wdGlvbnMuc3R5bGUgPSBvcHRpb25zLnN0eWxlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnN0eWxlIDogU2VsZWN0U3R5bGUuREFSSztcclxuICAgICAgICBvcHRpb25zLm9uQ2hhbmdlID0gb3B0aW9ucy5vbkNoYW5nZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5vbkNoYW5nZSA6ICgpID0+IHt9O1xyXG4gICAgICAgIG9wdGlvbnMuYmVmb3JlQ2hhbmdlID0gb3B0aW9ucy5iZWZvcmVDaGFuZ2UgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYmVmb3JlQ2hhbmdlIDogKCkgPT4ge307XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAnc3RhZGlhcGx1c19kcm9wZG93bicsXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc3R5bGVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTbGltc2VsZWN0IHRocm93cyBhIFR5cGVFcnJvciBpZiB0aGUgZWxlbWVudHMvY29udGFpbmVyc1xyXG4gICAgICAgICAqIGhhdmUgYmVlbiBkZWxldGVkIHdpdGhvdXQgcHJvcGVybHkgYmVpbmcgZGVzdHJveWVkLiBBcyBTdGFkaWFcclxuICAgICAgICAgKiBydW5zIGluIGEgdmlydHVhbCBET00sIHdlIGhhdmUgbm8gY29udHJvbCBvZiB3aGVuIHRoZSBET00gY2hhbmdlc1xyXG4gICAgICAgICAqIHRoZXJlZm9yZSB3ZSBjYW4ndCBzb2x2ZSBpdCBpbiBhIHByb3BlciB3YXkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBMZXQncyBqdXN0IGhvcGUgZ2FyYmFnZSBjb2xsZWN0aW9uIHRha2VzIGNhcmUgb2YgaXQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0ID0gbmV3IFNsaW1TZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRpb25zLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IG9wdGlvbnMub25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVPbkNoYW5nZTogb3B0aW9ucy5iZWZvcmVDaGFuZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpbXNlbGVjdC5zZWxlY3RlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCguLi5pdGVtczogYW55W10pIHtcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIEp1c3QgaW4gY2FzZSBzbGltc2VsZWN0LnNldCBpcyBmYXN0ZXJcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldChpdGVtc1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldERhdGEoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VhcmNoKHF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNsaW1zZWxlY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaW1zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3RhZGlhcGx1c19kcm9wZG93bicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RTdHlsZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNMSU1TRUxFQ1Q6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNMSU1TRUxFQ1RfTEFSR0U6IHN0cmluZyA9ICdzdHlsZS1zbGltc2VsZWN0LWxhcmdlJztcclxuICAgIHB1YmxpYyBzdGF0aWMgTElHSFQ6IHN0cmluZyA9ICdzdHlsZS1saWdodCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIERBUks6IHN0cmluZyA9ICdzdHlsZS1kYXJrJztcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbGVjdE9wdGlvbnMge1xyXG4gICAgcGxhY2Vob2xkZXI/OiBhbnk7XHJcbiAgICBzdHlsZT86IHN0cmluZztcclxuICAgIG9uQ2hhbmdlPzogKGluZm86IGFueSkgPT4gYW55O1xyXG4gICAgYmVmb3JlQ2hhbmdlPzogKGluZm86IGFueSkgPT4gYW55O1xyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZXMvU25hY2tiYXIuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU25hY2tiYXIge1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGxhYmVsOiBFbGVtZW50O1xyXG4gICAgY2xvc2VCdXR0b246IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyJyk7XHJcblxyXG4gICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyLWxhYmVsJyk7XHJcblxyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnLCAnc3RhZGlhcGx1c19zbmFja2Jhci1jbG9zZScpO1xyXG5cclxuICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICBzZWxmLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKTtcclxuICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5pbm5lckhUTUwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9LCA1MDAwKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVUlCdXR0b25Db250YWluZXIgfSBmcm9tIFwiLi9VSUJ1dHRvbkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGNvbnRhaW5lcjogVUlCdXR0b25Db250YWluZXI7XHJcbiAgICBidXR0b246IEVsZW1lbnQ7XHJcblxyXG4gICAgc3RhdGljIGJ1dHRvbkNvbnRhaW5lcnM6IFVJQnV0dG9uQ29udGFpbmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHlmbGJiXCIganNuYW1lPVwiclpIRVNkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiS0VhSG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlg1cGVvZVwiIGpzbmFtZT1cInBZRmhVXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ4ZHVveWYgdWlidXR0b24taWNvblwiIHNyYz1cIiR7aWNvbn1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYVNKViB1aWJ1dHRvbi10aXRsZVwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdQeWYxYmInLCAnc3RhZGlhcGx1c191aS1idXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnQ1R2RFhkJywgJ1FBQXlXZCcsICdQanBhYycsICd6Y01ZZCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShjYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNvbnRhaW5lciBvZiBVSUJ1dHRvbi5idXR0b25Db250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lci5idXR0b25zLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmNvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFVJQnV0dG9uQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIFVJQnV0dG9uLmJ1dHRvbkNvbnRhaW5lcnMucHVzaCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEJ1dHRvbih0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGUoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEljb24oaWNvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aWJ1dHRvbi1pY29uJykuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aWJ1dHRvbi10aXRsZScpLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpICE9PSBudWxsO1xyXG4gICAgfSBcclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVCdXR0b24odGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tIFwiLi9VSUJ1dHRvblwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgICBidXR0b25zOiBVSUJ1dHRvbltdID0gW107XHJcbiAgICBjb250YWluZXI6IEVsZW1lbnQ7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHdyYXBwZXI6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9ICdidXR0b24tY29udGFpbmVyLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ1pnVU1vJywgJ3N0YWRpYXBsdXNfdWktYnRuLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0UwWms5YicsICdzdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXInKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRaMEJOJyk7IC8vIFJlcXVlcnkgaW4gY2FzZSB0aGUgY29udGFpbmVyIHdhcyBkZWxldGVkXHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgaWYoIWJ1dHRvbi5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbi5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuYnV0dG9ucy5pbmRleE9mKGJ1dHRvbikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmVCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuYnV0dG9ucy5maWx0ZXIoYiA9PiBiLmlkICE9PSBidXR0b24uaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBodG1sOiBzdHJpbmc7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuICAgIG9wZW5MaXN0ZW5lcnM6ICgoKSA9PiB2b2lkKVtdID0gW107XHJcbiAgICBjbG9zZUxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJrdlQ3Y1wiIGpzYWN0aW9uPVwiY2xpY2s6YTRmVXdkXCIganNuYW1lPVwiR2VHSEtiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJEUHZ3WWMgdFJxYzNjXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+YXJyb3dfYmFjazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJRM3d5eWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ3dDeEZkXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgJHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3VpLWNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHhoQXlmLmZpOEp4ZCcpO1xyXG4gICAgICAgIGlmKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gUmVRdWVyeSBlbGVtZW50IHNpbmNlIG91dGVySFRNTCBicmVha3MgaXQuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgIyR7dGhpcy5pZH0gPiBoZWFkZXIgPiAucmt2VDdjYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY2xvc2VUYWIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuVGFiKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLmZvckVhY2goYyA9PiBjKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVGFiKCk6IHZvaWQge1xyXG4gICAgICAgIExvZ2dlci5pbmZvKCdDbG9zaW5nJywgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVycy5mb3JFYWNoKGMgPT4gYygpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oY2FsbGJhY2s/OigpID0+IHZvaWQpIHtcclxuICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZShjYWxsYmFjaz86KCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gXCIuL1VJQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlSb3cge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBvcHRpb25zOiBVSVJvd09wdGlvbnM7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IFVJUm93T3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxwPiR7dGhpcy50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAke3RoaXMuY29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c191aS1yb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBleGlzdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vblJlbG9hZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmQoY29tcG9uZW50OiBVSUNvbXBvbmVudCwgdXNlSHI6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmKHVzZUhyKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5lbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJUm93T3B0aW9ucyB7XHJcbiAgICBvbkNyZWF0ZT86IEZ1bmN0aW9uO1xyXG4gICAgb25EZXN0cm95PzogRnVuY3Rpb247XHJcbiAgICBvblJlbG9hZD86IEZ1bmN0aW9uO1xyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9CdXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TbmFja2Jhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9