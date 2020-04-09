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
/* harmony default export */ __webpack_exports__["default"] = ("const MonitorRunnable = function () {\r\n    this.enabled = false;\r\n    this.peerConnections = [];\r\n    this.originalRTC;\r\n    this.startTime;\r\n    this.element;\r\n    this.editable = false;\r\n    this.x = 0;\r\n    this.y = 0;\r\n\r\n    const self = this;\r\n    this.originalRTC = RTCPeerConnection;\r\n    (function (OriginalRTCConnection) {\r\n        self.originalRTC = OriginalRTCConnection;\r\n\r\n        RTCPeerConnection = function (args) {\r\n            const connection = new OriginalRTCConnection(args);\r\n            self.peerConnections.push(connection);\r\n            return connection;\r\n        };\r\n        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;\r\n    })(RTCPeerConnection);\r\n\r\n    this.start = function () {\r\n        this.enabled = true;\r\n        this.element = document.createElement('div');\r\n        this.element.classList.add('stadiaplus_networkmonitor');\r\n        this.element.id =\r\n            'networkmonitor-' + Math.floor(Math.random() * 999999);\r\n        document.body.appendChild(this.element);\r\n\r\n        this.setEditable(true);\r\n        this.update();\r\n    };\r\n\r\n    this.setPosition = function (x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.updatePosition();\r\n    };\r\n\r\n    this.updatePosition = function () {\r\n        this.element.style.left = this.x + 'px';\r\n        this.element.style.top = this.y + 'px';\r\n\r\n        const corners = {\r\n            tl: 10,\r\n            tr: 10,\r\n            bl: 10,\r\n            br: 10,\r\n        };\r\n\r\n        if (this.x < 10) {\r\n            corners.tl = 0;\r\n            corners.bl = 0;\r\n        }\r\n\r\n        if (this.y < 10) {\r\n            corners.tl = 0;\r\n            corners.tr = 0;\r\n        }\r\n\r\n        if (this.x > window.innerWidth - this.element.clientWidth - 10) {\r\n            corners.tr = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        if (this.y > window.innerHeight - this.element.clientHeight - 10) {\r\n            corners.bl = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        this.element.style[\r\n            'border-radius'\r\n        ] = `${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px`;\r\n    };\r\n\r\n    this.mouseEvents = [];\r\n    this.moving = false;\r\n    this.offset = { x: 0, y: 0 };\r\n    this.setEditable = function (editable) {\r\n        this.editable = editable;\r\n        this.element.classList.toggle('editable', editable);\r\n\r\n        if (editable) {\r\n            this.mouseEvents.push(\r\n                {\r\n                    target: document,\r\n                    type: 'mousemove',\r\n                    fn: (event) => {\r\n                        if (this.moving) {\r\n                            this.x = Math.max(\r\n                                0, // Minimum x value\r\n                                Math.min(\r\n                                    window.innerWidth -\r\n                                        this.element.clientWidth, // Maximum x value\r\n                                    event.clientX - this.offset.x,\r\n                                ),\r\n                            );\r\n                            this.y = Math.max(\r\n                                0, // Minimum y value\r\n                                Math.min(\r\n                                    window.innerHeight -\r\n                                        this.element.clientHeight, // Maximum y value\r\n                                    event.clientY - this.offset.y,\r\n                                ),\r\n                            );\r\n\r\n                            this.updatePosition();\r\n                        }\r\n                    },\r\n                },\r\n                {\r\n                    target: this.element,\r\n                    type: 'mousedown',\r\n                    fn: (event) => {\r\n                        this.moving = true;\r\n                        this.offset.x = event.clientX - this.x;\r\n                        this.offset.y = event.clientY - this.y;\r\n                    },\r\n                },\r\n                {\r\n                    target: document,\r\n                    type: 'mouseup',\r\n                    fn: (event) => {\r\n                        this.moving = false;\r\n                    },\r\n                },\r\n            );\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.addEventListener(event.type, event.fn),\r\n            );\r\n        } else {\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.removeEventListener(event.type, event.fn),\r\n            );\r\n        }\r\n    };\r\n\r\n    this.setVisible = function (visible) {\r\n        this.visible = visible;\r\n    };\r\n\r\n    this.stop = function () {\r\n        this.enabled = false;\r\n        this.setEditable(false);\r\n        this.element.remove();\r\n\r\n        RTCPeerConnection = this.originalRTC;\r\n        peerConnections = [];\r\n    };\r\n\r\n    this.visible = {\r\n        time: true,\r\n        resolution: true,\r\n        FPS: true,\r\n        latency: true,\r\n        codec: true,\r\n        traffic: true,\r\n        'current-traffic': true,\r\n        'average-traffic': true,\r\n        'packets-lost': true,\r\n        'average-packet-loss': true,\r\n        'jitter-buffer': true,\r\n    };\r\n\r\n    this.stats = [];\r\n    this.update = function () {\r\n        if (this.peerConnections.length === 3) {\r\n            this.peerConnections[2].getStats().then((_stats) => {\r\n                this.stats = Array.from(_stats);\r\n\r\n                const RTCInboundRTPVideoStream = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCInboundRTPVideoStream'),\r\n                );\r\n                const RTCIceCandidatePair = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCIceCandidatePair'),\r\n                );\r\n                const RTCMediaStreamTrack_receiver = this.getStat(\r\n                    (stat) =>\r\n                        stat[0].startsWith('RTCMediaStreamTrack_receiver') &&\r\n                        stat[1].kind === 'video',\r\n                );\r\n\r\n                const resolution = this.getResolution(\r\n                    RTCMediaStreamTrack_receiver,\r\n                );\r\n                const fps = this.getFPS(RTCInboundRTPVideoStream);\r\n                const latency = this.getLatency(RTCIceCandidatePair) + ' ms';\r\n                const codec = this.getCodec(RTCInboundRTPVideoStream);\r\n                const totalTraffic = this.translateBitUnits(\r\n                    this.getTotalDownload(RTCIceCandidatePair),\r\n                );\r\n                const currentTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const averageTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getAverageDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const packetsLost = this.getPacketsLost(\r\n                    RTCInboundRTPVideoStream,\r\n                );\r\n                const averagePacketLoss =\r\n                    this.getAveragePacketLoss(RTCInboundRTPVideoStream) + '%';\r\n                const jitterBuffer =\r\n                    this.getJitterBuffer(RTCMediaStreamTrack_receiver) + ' ms';\r\n\r\n                let html = '';\r\n                if (this.visible['time']) {\r\n                    let time = new Date();\r\n                    let timeString = time.toLocaleString();\r\n                    html += `<h5>${timeString}</h5>`;\r\n                }\r\n\r\n                html += '<ul>';\r\n                if (this.visible['resolution']) {\r\n                    html += `<li>Resolution: ${resolution.width}x${resolution.height}</li>`;\r\n                }\r\n\r\n                if (this.visible['FPS']) {\r\n                    html += `<li>FPS: ${fps}</li>`;\r\n                }\r\n\r\n                if (this.visible['latency']) {\r\n                    html += `<li>Latency: ${latency}</li>`;\r\n                }\r\n\r\n                if (this.visible['codec']) {\r\n                    html += `<li>Codec: ${codec}</li>`;\r\n                }\r\n\r\n                if (this.visible['traffic']) {\r\n                    html += `<li>Total Traffic: ${totalTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['current-traffic']) {\r\n                    html += `<li>Current Traffic: ${currentTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-traffic']) {\r\n                    html += `<li>Average Traffic: ${averageTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['packets-lost']) {\r\n                    html += `<li>Packets Lost: ${packetsLost}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-packet-loss']) {\r\n                    html += `<li>Average Packet Loss: ${averagePacketLoss}</li>`;\r\n                }\r\n\r\n                if (this.visible['jitter-buffer']) {\r\n                    html += `<li>Jitter Buffer: ${jitterBuffer}</li>`;\r\n                }\r\n\r\n                html += '</ul>';\r\n\r\n                this.element.innerHTML = html;\r\n            });\r\n        } else {\r\n            this.startTime = Date.now();\r\n            this.element.innerHTML = `\r\n                <h5>Error</h5>\r\n                <p>\r\n                    Uh oh, something went terribly wrong. \r\n                    This feature is still very unstable and \r\n                    the developer knows there are problems, \r\n                    please understand that this issue is \r\n                    actively being worked on.\r\n                </p>\r\n                <p class='stadiaplus_muted'>Error Code: 001 - Stats unavailable</p>\r\n            `;\r\n        }\r\n\r\n        if (this.enabled) {\r\n            setTimeout(() => {\r\n                this.update();\r\n            }, 1000);\r\n        }\r\n    };\r\n\r\n    this.getStat = function (filter) {\r\n        return this.stats.find(filter)[1];\r\n    };\r\n\r\n    this.translateBitUnits = function (value) {\r\n        const units = ['b', 'kb', 'Mb', 'Gb'];\r\n\r\n        let i = 0;\r\n        while (value / 1000 >= 1) {\r\n            i++;\r\n            value /= 1000;\r\n        }\r\n\r\n        return (\r\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\r\n        );\r\n    };\r\n\r\n    this.getLatency = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.currentRoundTripTime * 1000;\r\n    };\r\n\r\n    this.getJitterBuffer = function (RTCMediaStreamTrack_receiver) {\r\n        return (\r\n            (RTCMediaStreamTrack_receiver.jitterBufferDelay * 1000) /\r\n            RTCMediaStreamTrack_receiver.jitterBufferEmittedCount\r\n        ).toPrecision(4);\r\n    };\r\n\r\n    this.getPacketsLost = function (RTCInboundRTPVideoStream) {\r\n        return RTCInboundRTPVideoStream.packetsLost;\r\n    };\r\n\r\n    this.getAveragePacketLoss = function (RTCInboundRTPVideoStream) {\r\n        return (\r\n            (RTCInboundRTPVideoStream.packetsLost /\r\n                (RTCInboundRTPVideoStream.packetsReceived +\r\n                    RTCInboundRTPVideoStream.packetsLost)) *\r\n            100\r\n        ).toPrecision(2);\r\n    };\r\n\r\n    this.lastDownload = 0;\r\n    this.getDownloadSpeed = function (RTCIceCandidatePair) {\r\n        const download = this.getTotalDownload(RTCIceCandidatePair);\r\n        const speed = download - this.lastDownload;\r\n        this.lastDownload = download;\r\n        return speed;\r\n    };\r\n\r\n    this.getAverageDownloadSpeed = function (RTCIceCandidatePair) {\r\n        return (\r\n            this.getTotalDownload(RTCIceCandidatePair) /\r\n            (this.timeSinceStart() / 1000)\r\n        );\r\n    };\r\n\r\n    this.getTotalDownload = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.bytesReceived * 8;\r\n    };\r\n\r\n    this.getResolution = function (RTCMediaStreamTrack_receiver) {\r\n        return {\r\n            width: RTCMediaStreamTrack_receiver.frameWidth,\r\n            height: RTCMediaStreamTrack_receiver.frameHeight,\r\n        };\r\n    };\r\n\r\n    this.getCodec = function (RTCInboundRTPVideoStream) {\r\n        const codecStat = this.getStat(\r\n            (stat) => stat[0] === RTCInboundRTPVideoStream.codecId,\r\n        );\r\n        return codecStat.mimeType.substring('video/'.length);\r\n    };\r\n\r\n    this.lastFrames = 0;\r\n    this.getFPS = function (RTCInboundRTPVideoStream) {\r\n        const fps = RTCInboundRTPVideoStream.framesDecoded - this.lastFrames;\r\n        this.lastFrames = RTCInboundRTPVideoStream.framesDecoded;\r\n        return fps;\r\n    };\r\n\r\n    this.timeSinceStart = function () {\r\n        return Date.now() - this.startTime;\r\n    };\r\n};\r\n\r\nStadiaPlusMonitor = new MonitorRunnable();\r\n");

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
        this.updateRenderer();
        this.onStart();
    };
    Component.prototype.updateRenderer = function () {
        var renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        for (var i = 0; i < renderers.length; i++) {
            var renderer = renderers[i];
            if (renderer.style.opacity !== '0') {
                this.renderer = renderer;
            }
        }
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
        return window.location.pathname.indexOf('store') !== -1 && !this.isInStoreDetail();
    };
    Util.prototype.isInStoreDetail = function () {
        return window.location.pathname.indexOf('store/details') !== -1;
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
                });
            },
            onReload: function (row) {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), Resolution.AUTOMATIC);
                self.select.set(self.resolution);
            },
        }));
        self.getStorage(function () {
            ForceResolution.setResolution(self.resolution);
        });
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
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/LibraryFilter.scss */ "./src/components/styles/LibraryFilter.scss");
/* harmony import */ var _styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LibraryFilter_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Select */ "./src/ui/Select.ts");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Checkbox */ "./src/ui/Checkbox.ts");
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
        icon.style.transformOrigin = "calc(100% - " + element.clientWidth / 2 + "px) " + element.clientHeight / 2 + "px";
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
        this.enabled = true;
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
        // When the show all checkbox is clicked, toggle the showAll variable and update the games
        this.checkbox.addEventListener('click', function () {
            _this.showAll = _this.checkbox.checked;
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
    LibraryFilter.prototype.onUpdate = function () {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInHome()) {
            if (!this.exists()) {
                this.updateRenderer();
                var container = this.renderer.querySelector('.CVVXfc.YYy3Zb');
                if (!container)
                    return;
                this.filterBar.id = this.id;
                this.filterBar.innerHTML = "\n                    <span class=\"material-icons-extended\">\n                        sort\n                    </span>\n                    <select name=\"order\">\n                        <option value=\"" + FilterOrder.RECENT + "\">Recently Played</option>\n                        <option value=\"" + FilterOrder.ALPHABETICAL + "\">Alphabetical</option>\n                        <option value=\"" + FilterOrder.RANDOM + "\">Random</option>\n                    </select>\n                    <span id='" + (this.filterBar.id + '-direction') + "' class=\"material-icons-extended ascending stadiaplus_filterbar-direction\"></span>\n                ";
                var _a = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"]('Show hidden').setBigger(true).setShape(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["CheckboxShape"].CURVED).build(), pretty = _a.pretty, checkbox = _a.checkbox;
                pretty.classList.add('stadiaplus_filterbar-checkbox');
                this.filterBar.appendChild(pretty);
                this.checkbox = checkbox;
                this.gameTiles = this.renderer.querySelectorAll('.GqLi4d');
                container.appendChild(this.filterBar);
                this.createAllWrappers();
                // Style the custom select box in the filter bar
                this.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](this.filterBar.querySelector('select'), FilterOrder.RECENT);
                this.select.set(this.order);
                this.addFilterBarEvents();
            }
        }
    };
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
/* harmony import */ var _styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/NetworkMonitor.scss */ "./src/components/styles/NetworkMonitor.scss");
/* harmony import */ var _styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_NetworkMonitor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _raw_loader_MonitorRunnable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raw-loader!../MonitorRunnable */ "./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js");
/* harmony import */ var _ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/Checkbox */ "./src/ui/Checkbox.ts");
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
        _this.peerConnections = [];
        _this.active = false;
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
        return _this;
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     */
    NetworkMonitor.prototype.createUI = function () {
        var _this = this;
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"]('Network Monitor', "\n            <div class='CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button stadiaplus_networkmonitor-toggle-button' id='" + this.id + "-togglebutton'>Network Monitor</div>\n            <hr>\n            <h6>Visible Stats</h6>\n            <ul id='" + this.id + "-visiblelist'></ul>\n            ", this.id);
        this.component.element.classList.add('stadiaplus_networkmonitor-tab');
        var icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, 'Monitor', this.id + '-button');
        this.getStorage(function () { _this.updateVisible(); });
    };
    NetworkMonitor.prototype.startRunnable = function () {
        this.desandbox(_raw_loader_MonitorRunnable__WEBPACK_IMPORTED_MODULE_6__["default"]);
    };
    NetworkMonitor.prototype.openMonitor = function () {
        this.active = true;
        this.desandbox('StadiaPlusMonitor.start()');
    };
    NetworkMonitor.prototype.closeMonitor = function () {
        this.active = false;
        this.desandbox('StadiaPlusMonitor.stop()');
    };
    NetworkMonitor.prototype.getStorage = function (callback) {
        var _this = this;
        chrome.storage.local.get(['monitorStatsVisible'], function (result) {
            if (result.monitorStatsVisible)
                _this.visible = result.monitorStatsVisible;
            if (callback)
                callback();
        });
    };
    NetworkMonitor.prototype.setStorage = function (callback) {
        var self = this;
        chrome.storage.local.set({ monitorStatsVisible: self.visible }, callback);
    };
    /**
     * Called on startup, initializes important variables.
     */
    NetworkMonitor.prototype.onStart = function () {
        this.enabled = true;
        this.startRunnable();
        this.createUI();
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
        this.closeMonitor();
        this.desandbox('StadiaPlusMonitor = null');
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    NetworkMonitor.prototype.updateVisible = function () {
        this.desandbox("StadiaPlusMonitor.setVisible(" + JSON.stringify(this.visible) + ")");
    };
    /**
     * Called every second, makes sure to create components if they don't already exist.
     */
    NetworkMonitor.prototype.onUpdate = function () {
        var _this = this;
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                var self_1 = this;
                this.component.create();
                this.component.onOpen(function () {
                    _this.desandbox('StadiaPlusMonitor.setEditable(true)');
                });
                this.component.onClose(function () {
                    _this.desandbox('StadiaPlusMonitor.setEditable(false)');
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
                toggleButton_1.classList.toggle('shown', this.active);
                toggleButton_1.addEventListener('click', function () {
                    if (!_this.active) {
                        _this.openMonitor();
                    }
                    else {
                        _this.closeMonitor();
                    }
                    toggleButton_1.classList.toggle('shown', _this.active);
                });
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
        if (!_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame() && document.querySelector('body>.stadiaplus_networkmonitor')) {
            this.closeMonitor();
        }
    };
    NetworkMonitor.prototype.desandbox = function (javascript) {
        var script = document.createElement('script');
        script.innerHTML = javascript;
        document.body.appendChild(script);
        script.remove();
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




var Ratings = /** @class */ (function (_super) {
    __extends(Ratings, _super);
    function Ratings(database, uuidMap) {
        var _this = _super.call(this) || this;
        _this.name = "Ratings";
        _this.graceAmount = 10;
        _this.maxStars = 5;
        _this.database = database;
        _this.uuidMap = uuidMap;
        return _this;
    }
    Ratings.prototype.createElement = function () {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_rating', 'material-icons-extended');
    };
    Ratings.prototype.getUUID = function () {
        return location.href.substring('https://stadia.google.com/store/details/'.length, 'https://stadia.google.com/store/details/'.length + 36);
    };
    Ratings.prototype.updateRating = function () {
        var uuid = this.getUUID();
        var connection = this.database.getConnection()['data'];
        var map = this.uuidMap.getConnection()['uuidMap'];
        var entry = connection[map[uuid]];
        this.element.setAttribute('data-rating', entry[6]);
    };
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
    Ratings.prototype.onStart = function () {
        this.enabled = true;
        this.createElement();
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    Ratings.prototype.onStop = function () {
        this.enabled = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
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
                    this.element.innerHTML = "\n                        " + stars.join(' ') + "\n        \n                        <div class=\"stadiaplus_rating-tooltip\">\n                            " + rating + " / 100 (Metacritic)\n                        </div>\n                    ";
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
var StoreFilter = /** @class */ (function (_super) {
    __extends(StoreFilter, _super);
    function StoreFilter(database, uuidMap) {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = "Store Filter";
        _this.games = [];
        _this.database = database;
        _this.uuidMap = uuidMap;
        return _this;
    }
    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
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
            var element = document.createElement('div');
            element.classList.add('stadiaplus_storefilter-game');
            element.innerHTML = "\n                <img src='https://loremflickr.com/640/360'>\n                <div class='detail'>\n                    <h5 class='name'>Lorem Ipsum</h5>\n                    <span class='stadiaplus_muted tags'></span>\n                </div>\n            ";
            element.setAttribute('data-uuid', key);
            element.setAttribute('data-name', entry[1]);
            element.setAttribute('data-tags', entry[2]);
            element.setAttribute('href', entry[0].match(/(https:\/\/stadia.google.com\/store\/details\/[0-9a-z/]+)/g));
            element.setAttribute('data-img', 'https://stadiagamedb.com/' + entry[0].match(/(images\/posters\/[a-z0-9_.-]+.png)/g));
            _this.games.push(element);
        });
    };
    StoreFilter.prototype.addEvents = function () {
        var _this = this;
        this.searchField.addEventListener('input', function () {
            _this.search(_this.searchField.value);
        });
    };
    StoreFilter.prototype.search = function (query) {
        this.games.forEach(function (game) {
            var name = game.getAttribute('data-name').toLowerCase();
            game.classList.toggle('shown', query.length > 0 && name.indexOf(query.toLowerCase()) !== -1);
        });
    };
    /**
     * Called on startup, initializes important variables.
     */
    StoreFilter.prototype.onStart = function () {
        this.enabled = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been enabled');
    };
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    StoreFilter.prototype.onStop = function () {
        this.enabled = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    /**
     * Called every second, updates the element to match the clock.
     */
    StoreFilter.prototype.onUpdate = function () {
        // Only update the clock when it's visible
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
            'So did the person that made the stadia+ extension give up on stadia?',
            'It\'s like GFN, but without any pulled games.',
            'Long live Geforce Now+',
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
/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Database */ "./src/Database.ts");
/* harmony import */ var _components_StoreFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/StoreFilter */ "./src/components/StoreFilter.ts");
/* harmony import */ var _components_Ratings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Ratings */ "./src/components/Ratings.ts");
















const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoader"]();
const snackbar = new _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__["Snackbar"]();
const tab = new _components_UITab__WEBPACK_IMPORTED_MODULE_5__["UITab"]();

const database = new _Database__WEBPACK_IMPORTED_MODULE_11__["Database"]('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new _Database__WEBPACK_IMPORTED_MODULE_11__["Database"]('https://stadiagamedb.com/data/uuidmap.json');
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
            icon.classList.add('material-icons-extended');
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
        if (this.slimselect !== undefined) {
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
            self.close();
        });
    };
    UIComponent.prototype.open = function () {
        this.element.classList.add('open');
        this.openListeners.forEach(function (c) { return c(); });
    };
    UIComponent.prototype.close = function () {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Closing', this.id);
        this.element.classList.remove('open');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3M/ZWIwYiIsIndlYnBhY2s6Ly8vLi9zcmMvTW9uaXRvclJ1bm5hYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcz8wMzUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9yY2VDb2RlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYXRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0b3JlRmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJVGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9DbG9jay5zY3NzPzM2MzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2Nzcz81ZmVjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZVJlc29sdXRpb24uc2Nzcz8zOTQ4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9MaWJyYXJ5RmlsdGVyLnNjc3M/Mzc4NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2Nzcz80Mzc1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9SYXRpbmdzLnNjc3M/ZGViNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3RvcmVGaWx0ZXIuc2Nzcz85NWM5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzPzRhNGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3M/NWFhZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvU25hY2tiYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUJ1dHRvbkNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJUm93LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU2VsZWN0LnNjc3M/ZmRjMyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3M/NWQwNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJldHR5ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnByZXR0eSBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKTpub3QoW3R5cGU9cmFkaW9dKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldHR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ucHJldHR5IGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBtaW4td2lkdGg6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJldHR5IC5zdGF0ZSBsYWJlbCB7XFxuICBwb3NpdGlvbjogaW5pdGlhbDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWluZGVudDogMS41ZW07XFxuICBtaW4td2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2JkYzNjNztcXG59XFxuLnByZXR0eSAuc3RhdGUucC1pcy1ob3ZlciwgLnByZXR0eSAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgdGFkYSB7XFxuICAwJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoNyk7XFxuICB9XFxuICAzOCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDU1JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gIDcyJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgODElIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI0KTtcXG4gIH1cXG4gIDg5JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgOTUlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBqZWxseSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG4gIDMwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjg1LCAxLjE1LCAxKTtcXG4gIH1cXG4gIDY1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCkgcm90YXRlKC00NWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjYmRjM2M3O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEuNWVtIHJnYmEoMTg5LCAxOTUsIDE5OSwgMCk7XFxuICB9XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0LnAtZmlsbCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnByZXR0eS5wLWRlZmF1bHQgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXdpZHRoOiBjYWxjKDFlbSAvIDcpO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWljb24gLnN0YXRlIC5pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgd2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5pY29uIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV0dHkucC1pY29uIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG59XFxuXFxuLnByZXR0eS5wLXN2ZyAuc3RhdGUgLnN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtc3ZnIC5zdGF0ZSBzdmcge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ucHJldHR5LnAtc3ZnIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLnN2ZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJldHR5LnAtaW1hZ2UgLnN0YXRlIGltZyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgdG9wOiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcbi5wcmV0dHkucC1pbWFnZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGltZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0IHtcXG4gIG1pbi13aWR0aDogMmVtO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGMzYzc7XFxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgd2lkdGg6IDJlbTtcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDE2JSk7XFxuICB6LWluZGV4OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWwge1xcbiAgdGV4dC1pbmRlbnQ6IDIuNWVtO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzcgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG4gIGxlZnQ6IDFlbTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjU2YiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGxlZnQ6IDFlbTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gLnN0YXRlOmJlZm9yZSB7XFxuICBoZWlnaHQ6IDAuMWVtO1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNyAhaW1wb3J0YW50O1xcbiAgdG9wOiBjYWxjKDUwJSAtIDAuMWVtKTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjU2YiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWhvdmVyIGlucHV0OmhvdmVyIH4gLnN0YXRlOm5vdCgucC1pcy1ob3Zlcikge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZS5wLWlzLWhvdmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ucHJldHR5LnAtaGFzLWhvdmVyIGlucHV0OmhvdmVyIH4gLnN0YXRlLnAtaXMtaG92ZXIgLmljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcmV0dHkucC1oYXMtZm9jdXMgaW5wdXQ6Zm9jdXMgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCAjYmRjM2M3O1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZSB+IC5zdGF0ZTpub3QoLnAtaXMtaW5kZXRlcm1pbmF0ZSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZSB+IC5zdGF0ZS5wLWlzLWluZGV0ZXJtaW5hdGUgLmljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9uIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9mZixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlIGltZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmYgLmljb24ge1xcbiAgY29sb3I6ICNiZGMzYzc7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLW9uIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1vZmYge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmV0dHkucC1wbGFpbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXBsYWluLnAtdG9nZ2xlIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuLnByZXR0eS5wLXBsYWluLnAtcGxhaW4gLmljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucHJldHR5LnAtcm91bmQgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG4ucHJldHR5LnAtcm91bmQucC1pY29uIC5zdGF0ZSAuaWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG59XFxuXFxuLnByZXR0eS5wLWN1cnZlIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xcbn1cXG5cXG4ucHJldHR5LnAtc21vb3RoIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtc21vb3RoIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkucC1zbW9vdGggLmljb24sXFxuLnByZXR0eS5wLXNtb290aCAuc3ZnIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5zdmcsXFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGltZyB7XFxuICBhbmltYXRpb246IHpvb20gMC4ycyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoLnAtZGVmYXVsdCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogem9vbSAwLjJzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zbW9vdGgucC1wbGFpbiBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGltZyxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiB0YWRhIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIDEgYWx0ZXJuYXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBqZWxseSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5zdmcsXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHJvdGF0ZSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcmV0dHkucC1wdWxzZTpub3QoLnAtc3dpdGNoKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBhbmltYXRpb246IHB1bHNlIDFzO1xcbn1cXG5cXG4ucHJldHR5IGlucHV0W2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eSBpbnB1dFtkaXNhYmxlZF0gfiAqIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnByZXR0eS5wLWxvY2tlZCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2EgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5IC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzQyOGJjYTtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeS1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gc3ZnIHtcXG4gIGNvbG9yOiAjNDI4YmNhO1xcbiAgc3Ryb2tlOiAjNDI4YmNhO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnk6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzQyOGJjYTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnk6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2EgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnk6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzI0NTY4MjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDU2ODIgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzViYzBkZTtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mby1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gc3ZnIHtcXG4gIGNvbG9yOiAjNWJjMGRlO1xcbiAgc3Ryb2tlOiAjNWJjMGRlO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm86YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzViYzBkZTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm86YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm86YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzIzOTBiMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzkwYjAgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWMgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVjYjg1YztcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2Vzcy1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gc3ZnIHtcXG4gIGNvbG9yOiAjNWNiODVjO1xcbiAgc3Ryb2tlOiAjNWNiODVjO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVjYjg1YztcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWMgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3M6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzM1NzkzNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTc5MzUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZy1vIC5pY29uLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gc3ZnIHtcXG4gIGNvbG9yOiAjZjBhZDRlO1xcbiAgc3Ryb2tlOiAjZjBhZDRlO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2M3N2MxMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzdjMTEgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlciBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgLnN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgLnN2ZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHN0cm9rZTogI2ZmZjtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLFxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIHN2ZywgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIC5zdmcsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBzdmcge1xcbiAgY29sb3I6ICNkOTUzNGY7XFxuICBzdHJva2U6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0ZjtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNhMDI2MjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAyNjIyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1iaWdnZXIgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1iaWdnZXIgbGFiZWw6YWZ0ZXIsXFxuLnByZXR0eS5wLWJpZ2dlciAuaWNvbixcXG4ucHJldHR5LnAtYmlnZ2VyIC5zdmcsXFxuLnByZXR0eS5wLWJpZ2dlciAuaW1nIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gMzUlKSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsIHtcXG4gIHRleHQtaW5kZW50OiAxLjdlbTtcXG59XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5wcmV0dHkgLnN0YXRlOmJlZm9yZSxcXG4ucHJldHR5IC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIsXFxuLnByZXR0eSAuc3RhdGUgLmljb24ge1xcbiAgICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfY2xvY2sge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMjUsIDEpLCBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuMjUsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIuY2xvc2luZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIuY2xvc2VkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIgLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnMgRXh0ZW5kZWRcXFwiO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgei1pbmRleDogNDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNhM2M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yM3MgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMTUsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXI6aG92ZXIgLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMTUpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXI6aG92ZXIgLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMyMzY7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zMiksIDAgMC4wNjI1cmVtIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2Ryb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItY2hlY2tib3gge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiYXJyb3dfZHJvcF9kb3duXFxcIjtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24uYXNjZW5kaW5nIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uLmRlc2NlbmRpbmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTUwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3IgKiB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3IgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci5lZGl0YWJsZSB7XFxuICB6LWluZGV4OiAzMDA7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRhYiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMXJlbTtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLWNoZWNrYm94IHtcXG4gIG1hcmdpbjogMC40cmVtIDA7XFxufVxcblxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRvZ2dsZS1idXR0b246OmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIGNvbnRlbnQ6IFxcXCJTaG93XFxcIjtcXG59XFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdG9nZ2xlLWJ1dHRvbi5zaG93bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJIaWRlXFxcIjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19yYXRpbmcge1xcbiAgbWFyZ2luLXRvcDogLTFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc3RhZGlhcGx1c19yYXRpbmc6aG92ZXIgLnN0YWRpYXBsdXNfcmF0aW5nLXRvb2x0aXAge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxKTtcXG59XFxuLnN0YWRpYXBsdXNfcmF0aW5nIC5zdGFkaWFwbHVzX3JhdGluZy10b29sdGlwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29vZ2xlIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQgMC4zcztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19zdG9yZWZpbHRlciB7XFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjMyKSwgMCAwLjA2MjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmJhciB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwic2VhcmNoXFxcIjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29ucyBFeHRlbmRlZFxcXCI7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXIgaW5wdXQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29vZ2xlIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgb3V0bGluZTogI2ZmNzczZCAzcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lLnNob3duIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lIGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUgLmRldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19tdXRlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCB7XFxuICAvKiBcXG4gICAqICAgTXVzdCByZW1vdmUgMiB4IHBhZGRpbmcgb3IgaXQgZG9lc250IHdvcmsgXFxuICAgKi9cXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJlMzA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudC5vcGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciAuQ3dDeEZkIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAtMTZweDtcXG59XFxuLnN0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lci5FMFprOWIge1xcbiAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1idXR0b24ge1xcbiAgd2lkdGg6IDExNi4xNTZweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuR3FMaTRkIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpIGNvbnRyYXN0KDEuMSk7XFxufVxcblxcbmh0bWwgYm9keSAuZFNHdnpmIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG5odG1sIGJvZHkgLkNWVlhmYyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGluaXRpYWw7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ4NGQ7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTI1NyAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICM5Mzk1OUYgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTM5NTlGO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1jb250ZW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnBsYWNlaG9sZGVyLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfc25hY2tiYXIge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgei1pbmRleDogOTk5O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA4cHg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKDE2cHgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSwgb3BhY2l0eSAwLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfc25hY2tiYXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfc25hY2tiYXItbGFiZWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfc25hY2tiYXItY2xvc2Uge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5zdGFkaWFwbHVzX3NuYWNrYmFyLWNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3MtbWFpbntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt1c2VyLXNlbGVjdDpub25lO2NvbG9yOiM2NjY7d2lkdGg6MTAwJX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjt3aWR0aDoxMDAlO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3MtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZGNkZWUyO2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYWJvdmV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVye2ZsZXg6MSAxIDEwMCU7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpO2xpbmUtaGVpZ2h0OjFlbTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIsLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgKntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe3dpZHRoOmF1dG99LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgLnNzLWRpc2FibGVke2NvbG9yOiNkZWRlZGV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3R7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHg7Zm9udC13ZWlnaHQ6NzAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWRlc2VsZWN0LnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2ZsZXg6MCAxIGF1dG87bWFyZ2luOjAgNnB4fS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW57Ym9yZGVyOnNvbGlkICM2NjY7Ym9yZGVyLXdpZHRoOjAgMnB4IDJweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6M3B4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxtYXJnaW4gLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctdXB7dHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKTttYXJnaW46M3B4IDAgMH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuLmFycm93LWRvd257dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bWFyZ2luOi0zcHggMCAwfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2N1cnNvcjpwb2ludGVyO21pbi1oZWlnaHQ6MzBweDt3aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDAgM3B4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtjb2xvcjojNjY2fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZSAuc3MtdmFsdWUtZGVsZXRle2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1iZWxvd3tib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlc3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7ZmxleDoxIDEgMTAwJTt3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtZGlzYWJsZWR7ZGlzcGxheTpmbGV4O3BhZGRpbmc6NHB4IDVweDttYXJnaW46MnB4IDA7bGluZS1oZWlnaHQ6MWVtO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOiNkZWRlZGU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfUBrZXlmcmFtZXMgc2NhbGVJbnswJXt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2NhbGVPdXR7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWV7ZGlzcGxheTpmbGV4O3VzZXItc2VsZWN0Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6M3B4IDVweDttYXJnaW46M3B4IDVweCAzcHggMDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYjtib3JkZXItcmFkaXVzOjRweDthbmltYXRpb24tbmFtZTpzY2FsZUluO2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlLnNzLW91dHthbmltYXRpb24tbmFtZTpzY2FsZU91dDthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7bWFyZ2luOjAgMCAwIDVweDtjdXJzb3I6cG9pbnRlcn0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZHtkaXNwbGF5OmZsZXg7ZmxleDowIDEgM3B4O21hcmdpbjo5cHggMTJweCAwIDVweH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1c3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDojNjY2O3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4O3dpZHRoOjJweDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXM6YWZ0ZXJ7YmFja2dyb3VuZDojNjY2O2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDoxMHB4O2xlZnQ6LTRweDt0b3A6NHB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVzLnNzLWNyb3Nze3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zcy1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7bWFyZ2luOi0xcHggMCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7ei1pbmRleDoxMDEwO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG9wYWNpdHkgLjJzO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGVZKDApfS5zcy1jb250ZW50LnNzLW9wZW57ZGlzcGxheTpibG9jaztvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlWSgxKX0uc3MtY29udGVudCAuc3Mtc2VhcmNoe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7cGFkZGluZzo4cHggOHB4IDZweH0uc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUsLnNzLWNvbnRlbnQgLnNzLXNlYXJjaC5zcy1oaWRlIGlucHV0e2hlaWdodDowO29wYWNpdHk6MDtwYWRkaW5nOjA7bWFyZ2luOjB9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dHtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXQ7ZmxleDoxIDEgYXV0bzt3aWR0aDoxMDAlO21pbi13aWR0aDowO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4IDhweDttYXJnaW46MDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO291dGxpbmU6MDt0ZXh0LWFsaWduOmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGR9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6IzhhOGE4YTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDpmb2N1c3tib3gtc2hhZG93OjAgMCA1cHggIzU4OTdmYn0uc3MtY29udGVudCAuc3Mtc2VhcmNoIC5zcy1hZGRhYmxle2Rpc3BsYXk6aW5saW5lLWZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjIycHg7Zm9udC13ZWlnaHQ6NzAwO2ZsZXg6MCAwIDMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjAgMCAwIDhweDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNpemluZzpib3JkZXItYm94fS5zcy1jb250ZW50IC5zcy1hZGRhYmxle3BhZGRpbmctdG9wOjB9LnNzLWNvbnRlbnQgLnNzLWxpc3R7bWF4LWhlaWdodDoyMDBweDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87dGV4dC1hbGlnbjpsZWZ0fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cCAuc3Mtb3B0Z3JvdXAtbGFiZWx7cGFkZGluZzo2cHggMTBweDtmb250LXdlaWdodDo3MDB9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRpb257cGFkZGluZzo2cHggNnB4IDZweCAyNXB4fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxle2N1cnNvcjpwb2ludGVyfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZifS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb257cGFkZGluZzo2cHggMTBweDtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gKntkaXNwbGF5OmlubGluZS1ibG9ja30uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZ2hsaWdodGVkLC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb246aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1kaXNhYmxlZHtjdXJzb3I6bm90LWFsbG93ZWQ7Y29sb3I6I2RlZGVkZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpub3QoLnNzLWRpc2FibGVkKS5zcy1vcHRpb24tc2VsZWN0ZWR7Y29sb3I6IzY2NjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODgsMTUxLDI1MSwuMSl9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1oaWRle2Rpc3BsYXk6bm9uZX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIC5zcy1zZWFyY2gtaGlnaGxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2ZmZmI4Y31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcmV0dHktY2hlY2tib3guc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgXCJjb25zdCBNb25pdG9yUnVubmFibGUgPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xcclxcbiAgICB0aGlzLnBlZXJDb25uZWN0aW9ucyA9IFtdO1xcclxcbiAgICB0aGlzLm9yaWdpbmFsUlRDO1xcclxcbiAgICB0aGlzLnN0YXJ0VGltZTtcXHJcXG4gICAgdGhpcy5lbGVtZW50O1xcclxcbiAgICB0aGlzLmVkaXRhYmxlID0gZmFsc2U7XFxyXFxuICAgIHRoaXMueCA9IDA7XFxyXFxuICAgIHRoaXMueSA9IDA7XFxyXFxuXFxyXFxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xcclxcbiAgICB0aGlzLm9yaWdpbmFsUlRDID0gUlRDUGVlckNvbm5lY3Rpb247XFxyXFxuICAgIChmdW5jdGlvbiAoT3JpZ2luYWxSVENDb25uZWN0aW9uKSB7XFxyXFxuICAgICAgICBzZWxmLm9yaWdpbmFsUlRDID0gT3JpZ2luYWxSVENDb25uZWN0aW9uO1xcclxcblxcclxcbiAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoYXJncykge1xcclxcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgT3JpZ2luYWxSVENDb25uZWN0aW9uKGFyZ3MpO1xcclxcbiAgICAgICAgICAgIHNlbGYucGVlckNvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbik7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XFxyXFxuICAgICAgICB9O1xcclxcbiAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID0gT3JpZ2luYWxSVENDb25uZWN0aW9uLnByb3RvdHlwZTtcXHJcXG4gICAgfSkoUlRDUGVlckNvbm5lY3Rpb24pO1xcclxcblxcclxcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbmV0d29ya21vbml0b3InKTtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9XFxyXFxuICAgICAgICAgICAgJ25ldHdvcmttb25pdG9yLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpO1xcclxcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xcclxcblxcclxcbiAgICAgICAgdGhpcy5zZXRFZGl0YWJsZSh0cnVlKTtcXHJcXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xcclxcbiAgICAgICAgdGhpcy54ID0geDtcXHJcXG4gICAgICAgIHRoaXMueSA9IHk7XFxyXFxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcXHJcXG5cXHJcXG4gICAgICAgIGNvbnN0IGNvcm5lcnMgPSB7XFxyXFxuICAgICAgICAgICAgdGw6IDEwLFxcclxcbiAgICAgICAgICAgIHRyOiAxMCxcXHJcXG4gICAgICAgICAgICBibDogMTAsXFxyXFxuICAgICAgICAgICAgYnI6IDEwLFxcclxcbiAgICAgICAgfTtcXHJcXG5cXHJcXG4gICAgICAgIGlmICh0aGlzLnggPCAxMCkge1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMudGwgPSAwO1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMuYmwgPSAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaWYgKHRoaXMueSA8IDEwKSB7XFxyXFxuICAgICAgICAgICAgY29ybmVycy50bCA9IDA7XFxyXFxuICAgICAgICAgICAgY29ybmVycy50ciA9IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGggLSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLSAxMCkge1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMudHIgPSAwO1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMuYnIgPSAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaWYgKHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgLSAxMCkge1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMuYmwgPSAwO1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMuYnIgPSAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW1xcclxcbiAgICAgICAgICAgICdib3JkZXItcmFkaXVzJ1xcclxcbiAgICAgICAgXSA9IGAke2Nvcm5lcnMudGx9cHggJHtjb3JuZXJzLnRyfXB4ICR7Y29ybmVycy5icn1weCAke2Nvcm5lcnMuYmx9cHhgO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gW107XFxyXFxuICAgIHRoaXMubW92aW5nID0gZmFsc2U7XFxyXFxuICAgIHRoaXMub2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XFxyXFxuICAgIHRoaXMuc2V0RWRpdGFibGUgPSBmdW5jdGlvbiAoZWRpdGFibGUpIHtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGFibGUgPSBlZGl0YWJsZTtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0YWJsZScsIGVkaXRhYmxlKTtcXHJcXG5cXHJcXG4gICAgICAgIGlmIChlZGl0YWJsZSkge1xcclxcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMucHVzaChcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb3VzZW1vdmUnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZm46IChldmVudCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1heChcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIC8vIE1pbmltdW0geCB2YWx1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgsIC8vIE1heGltdW0geCB2YWx1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggLSB0aGlzLm9mZnNldC54LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5tYXgoXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAvLyBNaW5pbXVtIHkgdmFsdWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAtXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQsIC8vIE1heGltdW0geSB2YWx1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSB0aGlzLm9mZnNldC55LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5lbGVtZW50LFxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlZG93bicsXFxyXFxuICAgICAgICAgICAgICAgICAgICBmbjogKGV2ZW50KSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnggPSBldmVudC5jbGllbnRYIC0gdGhpcy54O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0LnkgPSBldmVudC5jbGllbnRZIC0gdGhpcy55O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb3VzZXVwJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZXZlbnQpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICApO1xcclxcbiAgICAgICAgICAgIHRoaXMubW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+XFxyXFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGV2ZW50LmZuKSxcXHJcXG4gICAgICAgICAgICApO1xcclxcbiAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICB0aGlzLm1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PlxcclxcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC50eXBlLCBldmVudC5mbiksXFxyXFxuICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5zZXRWaXNpYmxlID0gZnVuY3Rpb24gKHZpc2libGUpIHtcXHJcXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xcclxcbiAgICAgICAgdGhpcy5zZXRFZGl0YWJsZShmYWxzZSk7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XFxyXFxuXFxyXFxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiA9IHRoaXMub3JpZ2luYWxSVEM7XFxyXFxuICAgICAgICBwZWVyQ29ubmVjdGlvbnMgPSBbXTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy52aXNpYmxlID0ge1xcclxcbiAgICAgICAgdGltZTogdHJ1ZSxcXHJcXG4gICAgICAgIHJlc29sdXRpb246IHRydWUsXFxyXFxuICAgICAgICBGUFM6IHRydWUsXFxyXFxuICAgICAgICBsYXRlbmN5OiB0cnVlLFxcclxcbiAgICAgICAgY29kZWM6IHRydWUsXFxyXFxuICAgICAgICB0cmFmZmljOiB0cnVlLFxcclxcbiAgICAgICAgJ2N1cnJlbnQtdHJhZmZpYyc6IHRydWUsXFxyXFxuICAgICAgICAnYXZlcmFnZS10cmFmZmljJzogdHJ1ZSxcXHJcXG4gICAgICAgICdwYWNrZXRzLWxvc3QnOiB0cnVlLFxcclxcbiAgICAgICAgJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnOiB0cnVlLFxcclxcbiAgICAgICAgJ2ppdHRlci1idWZmZXInOiB0cnVlLFxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnN0YXRzID0gW107XFxyXFxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgaWYgKHRoaXMucGVlckNvbm5lY3Rpb25zLmxlbmd0aCA9PT0gMykge1xcclxcbiAgICAgICAgICAgIHRoaXMucGVlckNvbm5lY3Rpb25zWzJdLmdldFN0YXRzKCkudGhlbigoX3N0YXRzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHMgPSBBcnJheS5mcm9tKF9zdGF0cyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSA9IHRoaXMuZ2V0U3RhdCgoc3RhdCkgPT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtJyksXFxyXFxuICAgICAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IFJUQ0ljZUNhbmRpZGF0ZVBhaXIgPSB0aGlzLmdldFN0YXQoKHN0YXQpID0+XFxyXFxuICAgICAgICAgICAgICAgICAgICBzdGF0WzBdLnN0YXJ0c1dpdGgoJ1JUQ0ljZUNhbmRpZGF0ZVBhaXInKSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlciA9IHRoaXMuZ2V0U3RhdChcXHJcXG4gICAgICAgICAgICAgICAgICAgIChzdGF0KSA9PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcicpICYmXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdFsxXS5raW5kID09PSAndmlkZW8nLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHV0aW9uID0gdGhpcy5nZXRSZXNvbHV0aW9uKFxcclxcbiAgICAgICAgICAgICAgICAgICAgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcixcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgZnBzID0gdGhpcy5nZXRGUFMoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZW5jeSA9IHRoaXMuZ2V0TGF0ZW5jeShSVENJY2VDYW5kaWRhdGVQYWlyKSArICcgbXMnO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlYyA9IHRoaXMuZ2V0Q29kZWMoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxUcmFmZmljID0gdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZChSVENJY2VDYW5kaWRhdGVQYWlyKSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRyYWZmaWMgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERvd25sb2FkU3BlZWQoUlRDSWNlQ2FuZGlkYXRlUGFpciksXFxyXFxuICAgICAgICAgICAgICAgICAgICApICsgJy9zJztcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgYXZlcmFnZVRyYWZmaWMgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVCaXRVbml0cyhcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEF2ZXJhZ2VEb3dubG9hZFNwZWVkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKSArICcvcyc7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhY2tldHNMb3N0ID0gdGhpcy5nZXRQYWNrZXRzTG9zdChcXHJcXG4gICAgICAgICAgICAgICAgICAgIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgYXZlcmFnZVBhY2tldExvc3MgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBdmVyYWdlUGFja2V0TG9zcyhSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pICsgJyUnO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBqaXR0ZXJCdWZmZXIgPVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRKaXR0ZXJCdWZmZXIoUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcikgKyAnIG1zJztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsndGltZSddKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZVN0cmluZyA9IHRpbWUudG9Mb2NhbGVTdHJpbmcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxoNT4ke3RpbWVTdHJpbmd9PC9oNT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx1bD4nO1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydyZXNvbHV0aW9uJ10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5SZXNvbHV0aW9uOiAke3Jlc29sdXRpb24ud2lkdGh9eCR7cmVzb2x1dGlvbi5oZWlnaHR9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ0ZQUyddKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+RlBTOiAke2Zwc308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnbGF0ZW5jeSddKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+TGF0ZW5jeTogJHtsYXRlbmN5fTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydjb2RlYyddKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+Q29kZWM6ICR7Y29kZWN9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3RyYWZmaWMnXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPlRvdGFsIFRyYWZmaWM6ICR7dG90YWxUcmFmZmljfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydjdXJyZW50LXRyYWZmaWMnXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPkN1cnJlbnQgVHJhZmZpYzogJHtjdXJyZW50VHJhZmZpY308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnYXZlcmFnZS10cmFmZmljJ10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5BdmVyYWdlIFRyYWZmaWM6ICR7YXZlcmFnZVRyYWZmaWN9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3BhY2tldHMtbG9zdCddKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+UGFja2V0cyBMb3N0OiAke3BhY2tldHNMb3N0fTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydhdmVyYWdlLXBhY2tldC1sb3NzJ10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5BdmVyYWdlIFBhY2tldCBMb3NzOiAke2F2ZXJhZ2VQYWNrZXRMb3NzfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydqaXR0ZXItYnVmZmVyJ10pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT5KaXR0ZXIgQnVmZmVyOiAke2ppdHRlckJ1ZmZlcn08L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC91bD4nO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcXHJcXG4gICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xcclxcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXFxyXFxuICAgICAgICAgICAgICAgIDxoNT5FcnJvcjwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDxwPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVWggb2gsIHNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgZmVhdHVyZSBpcyBzdGlsbCB2ZXJ5IHVuc3RhYmxlIGFuZCBcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoZSBkZXZlbG9wZXIga25vd3MgdGhlcmUgYXJlIHByb2JsZW1zLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBsZWFzZSB1bmRlcnN0YW5kIHRoYXQgdGhpcyBpc3N1ZSBpcyBcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZWx5IGJlaW5nIHdvcmtlZCBvbi5cXHJcXG4gICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCc+RXJyb3IgQ29kZTogMDAxIC0gU3RhdHMgdW5hdmFpbGFibGU8L3A+XFxyXFxuICAgICAgICAgICAgYDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcXHJcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcXHJcXG4gICAgICAgICAgICB9LCAxMDAwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRTdGF0ID0gZnVuY3Rpb24gKGZpbHRlcikge1xcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHMuZmluZChmaWx0ZXIpWzFdO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnRyYW5zbGF0ZUJpdFVuaXRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XFxyXFxuICAgICAgICBjb25zdCB1bml0cyA9IFsnYicsICdrYicsICdNYicsICdHYiddO1xcclxcblxcclxcbiAgICAgICAgbGV0IGkgPSAwO1xcclxcbiAgICAgICAgd2hpbGUgKHZhbHVlIC8gMTAwMCA+PSAxKSB7XFxyXFxuICAgICAgICAgICAgaSsrO1xcclxcbiAgICAgICAgICAgIHZhbHVlIC89IDEwMDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIHZhbHVlLnRvUHJlY2lzaW9uKDQpICsgJyAnICsgdW5pdHNbTWF0aC5taW4odW5pdHMubGVuZ3RoIC0gMSwgaSldXFxyXFxuICAgICAgICApO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldExhdGVuY3kgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcclxcbiAgICAgICAgcmV0dXJuIFJUQ0ljZUNhbmRpZGF0ZVBhaXIuY3VycmVudFJvdW5kVHJpcFRpbWUgKiAxMDAwO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldEppdHRlckJ1ZmZlciA9IGZ1bmN0aW9uIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSB7XFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmppdHRlckJ1ZmZlckRlbGF5ICogMTAwMCkgL1xcclxcbiAgICAgICAgICAgIFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuaml0dGVyQnVmZmVyRW1pdHRlZENvdW50XFxyXFxuICAgICAgICApLnRvUHJlY2lzaW9uKDQpO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldFBhY2tldHNMb3N0ID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcclxcbiAgICAgICAgcmV0dXJuIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdDtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRBdmVyYWdlUGFja2V0TG9zcyA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdCAvXFxyXFxuICAgICAgICAgICAgICAgIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0ucGFja2V0c1JlY2VpdmVkICtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzTG9zdCkpICpcXHJcXG4gICAgICAgICAgICAxMDBcXHJcXG4gICAgICAgICkudG9QcmVjaXNpb24oMik7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMubGFzdERvd25sb2FkID0gMDtcXHJcXG4gICAgdGhpcy5nZXREb3dubG9hZFNwZWVkID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXHJcXG4gICAgICAgIGNvbnN0IGRvd25sb2FkID0gdGhpcy5nZXRUb3RhbERvd25sb2FkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpO1xcclxcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBkb3dubG9hZCAtIHRoaXMubGFzdERvd25sb2FkO1xcclxcbiAgICAgICAgdGhpcy5sYXN0RG93bmxvYWQgPSBkb3dubG9hZDtcXHJcXG4gICAgICAgIHJldHVybiBzcGVlZDtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRBdmVyYWdlRG93bmxvYWRTcGVlZCA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZChSVENJY2VDYW5kaWRhdGVQYWlyKSAvXFxyXFxuICAgICAgICAgICAgKHRoaXMudGltZVNpbmNlU3RhcnQoKSAvIDEwMDApXFxyXFxuICAgICAgICApO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldFRvdGFsRG93bmxvYWQgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcclxcbiAgICAgICAgcmV0dXJuIFJUQ0ljZUNhbmRpZGF0ZVBhaXIuYnl0ZXNSZWNlaXZlZCAqIDg7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmZyYW1lV2lkdGgsXFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmZyYW1lSGVpZ2h0LFxcclxcbiAgICAgICAgfTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRDb2RlYyA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXHJcXG4gICAgICAgIGNvbnN0IGNvZGVjU3RhdCA9IHRoaXMuZ2V0U3RhdChcXHJcXG4gICAgICAgICAgICAoc3RhdCkgPT4gc3RhdFswXSA9PT0gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLmNvZGVjSWQsXFxyXFxuICAgICAgICApO1xcclxcbiAgICAgICAgcmV0dXJuIGNvZGVjU3RhdC5taW1lVHlwZS5zdWJzdHJpbmcoJ3ZpZGVvLycubGVuZ3RoKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5sYXN0RnJhbWVzID0gMDtcXHJcXG4gICAgdGhpcy5nZXRGUFMgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxyXFxuICAgICAgICBjb25zdCBmcHMgPSBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0uZnJhbWVzRGVjb2RlZCAtIHRoaXMubGFzdEZyYW1lcztcXHJcXG4gICAgICAgIHRoaXMubGFzdEZyYW1lcyA9IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5mcmFtZXNEZWNvZGVkO1xcclxcbiAgICAgICAgcmV0dXJuIGZwcztcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy50aW1lU2luY2VTdGFydCA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XFxyXFxuICAgIH07XFxyXFxufTtcXHJcXG5cXHJcXG5TdGFkaWFQbHVzTW9uaXRvciA9IG5ldyBNb25pdG9yUnVubmFibGUoKTtcXHJcXG5cIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaW1zZWxlY3QubWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TbGltU2VsZWN0PXQoKTplLlNsaW1TZWxlY3Q9dCgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4ocz17fSxuLm09aT1bZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHMoZSx0KXt0PXR8fHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH07dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtyZXR1cm4gaS5pbml0Q3VzdG9tRXZlbnQoZSx0LmJ1YmJsZXMsdC5jYW5jZWxhYmxlLHQuZGV0YWlsKSxpfXZhciBuO3QuX19lc01vZHVsZT0hMCx0Lmhhc0NsYXNzSW5UcmVlPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcyhlLHQpe3JldHVybiB0JiZlJiZlLmNsYXNzTGlzdCYmZS5jbGFzc0xpc3QuY29udGFpbnModCk/ZTpudWxsfXJldHVybiBzKGUsdCl8fGZ1bmN0aW9uIGUodCxpKXtyZXR1cm4gdCYmdCE9PWRvY3VtZW50P3ModCxpKT90OmUodC5wYXJlbnROb2RlLGkpOm51bGx9KGUsdCl9LHQuZW5zdXJlRWxlbWVudEluVmlldz1mdW5jdGlvbihlLHQpe3ZhciBpPWUuc2Nyb2xsVG9wK2Uub2Zmc2V0VG9wLHM9aStlLmNsaWVudEhlaWdodCxuPXQub2Zmc2V0VG9wLGE9bit0LmNsaWVudEhlaWdodDtuPGk/ZS5zY3JvbGxUb3AtPWktbjpzPGEmJihlLnNjcm9sbFRvcCs9YS1zKX0sdC5wdXRDb250ZW50PWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz1lLm9mZnNldEhlaWdodCxuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYT1pP24udG9wOm4udG9wLXMsbz1pP24uYm90dG9tOm4uYm90dG9tK3M7cmV0dXJuIGE8PTA/XCJiZWxvd1wiOm8+PXdpbmRvdy5pbm5lckhlaWdodD9cImFib3ZlXCI6aT90OlwiYmVsb3dcIn0sdC5kZWJvdW5jZT1mdW5jdGlvbihuLGEsbyl7dmFyIGw7cmV0dXJuIHZvaWQgMD09PWEmJihhPTEwMCksdm9pZCAwPT09byYmKG89ITEpLGZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKWVbdF09YXJndW1lbnRzW3RdO3ZhciBpPXNlbGYscz1vJiYhbDtjbGVhclRpbWVvdXQobCksbD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bD1udWxsLG98fG4uYXBwbHkoaSxlKX0sYSkscyYmbi5hcHBseShpLGUpfX0sdC5pc1ZhbHVlSW5BcnJheU9mT2JqZWN0cz1mdW5jdGlvbihlLHQsaSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGVbdF09PT1pO2Zvcih2YXIgcz0wLG49ZTtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtpZihhJiZhW3RdJiZhW3RdPT09aSlyZXR1cm4hMH1yZXR1cm4hMX0sdC5oaWdobGlnaHQ9ZnVuY3Rpb24oZSx0LGkpe3ZhciBzPWUsbj1uZXcgUmVnRXhwKFwiKFwiK3QudHJpbSgpK1wiKSg/IVtePF0qPltePD5dKjwvKVwiLFwiaVwiKTtpZighZS5tYXRjaChuKSlyZXR1cm4gZTt2YXIgYT1lLm1hdGNoKG4pLmluZGV4LG89YStlLm1hdGNoKG4pWzBdLnRvU3RyaW5nKCkubGVuZ3RoLGw9ZS5zdWJzdHJpbmcoYSxvKTtyZXR1cm4gcz1zLnJlcGxhY2UobiwnPG1hcmsgY2xhc3M9XCInK2krJ1wiPicrbCtcIjwvbWFyaz5cIil9LFwiZnVuY3Rpb25cIiE9dHlwZW9mKG49d2luZG93KS5DdXN0b21FdmVudCYmKHMucHJvdG90eXBlPW4uRXZlbnQucHJvdG90eXBlLG4uQ3VzdG9tRXZlbnQ9cyl9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLm5ld09wdGlvbj1mdW5jdGlvbihlKXtyZXR1cm57aWQ6ZS5pZD9lLmlkOlN0cmluZyhNYXRoLmZsb29yKDFlOCpNYXRoLnJhbmRvbSgpKSksdmFsdWU6ZS52YWx1ZT9lLnZhbHVlOlwiXCIsdGV4dDplLnRleHQ/ZS50ZXh0OlwiXCIsaW5uZXJIVE1MOmUuaW5uZXJIVE1MP2UuaW5uZXJIVE1MOlwiXCIsc2VsZWN0ZWQ6ISFlLnNlbGVjdGVkJiZlLnNlbGVjdGVkLGRpc3BsYXk6dm9pZCAwPT09ZS5kaXNwbGF5fHxlLmRpc3BsYXksZGlzYWJsZWQ6ISFlLmRpc2FibGVkJiZlLmRpc2FibGVkLHBsYWNlaG9sZGVyOiEhZS5wbGFjZWhvbGRlciYmZS5wbGFjZWhvbGRlcixjbGFzczplLmNsYXNzP2UuY2xhc3M6dm9pZCAwLGRhdGE6ZS5kYXRhP2UuZGF0YTp7fX19LG4ucHJvdG90eXBlLmFkZD1mdW5jdGlvbihlKXt0aGlzLmRhdGEucHVzaCh7aWQ6U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlLHRleHQ6ZS50ZXh0LGlubmVySFRNTDpcIlwiLHNlbGVjdGVkOiExLGRpc3BsYXk6ITAsZGlzYWJsZWQ6ITEscGxhY2Vob2xkZXI6ITEsY2xhc3M6dm9pZCAwLGRhdGE6e319KX0sbi5wcm90b3R5cGUucGFyc2VTZWxlY3REYXRhPWZ1bmN0aW9uKCl7dGhpcy5kYXRhPVtdO2Zvcih2YXIgZT0wLHQ9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50LmNoaWxkTm9kZXM7ZTx0Lmxlbmd0aDtlKyspe3ZhciBpPXRbZV07aWYoXCJPUFRHUk9VUFwiPT09aS5ub2RlTmFtZSl7Zm9yKHZhciBzPXtsYWJlbDppLmxhYmVsLG9wdGlvbnM6W119LG49MCxhPWkuY2hpbGROb2RlcztuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtpZihcIk9QVElPTlwiPT09by5ub2RlTmFtZSl7dmFyIGw9dGhpcy5wdWxsT3B0aW9uRGF0YShvKTtzLm9wdGlvbnMucHVzaChsKSxsLnBsYWNlaG9sZGVyJiZcIlwiIT09bC50ZXh0LnRyaW0oKSYmKHRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0PWwudGV4dCl9fXRoaXMuZGF0YS5wdXNoKHMpfWVsc2VcIk9QVElPTlwiPT09aS5ub2RlTmFtZSYmKGw9dGhpcy5wdWxsT3B0aW9uRGF0YShpKSx0aGlzLmRhdGEucHVzaChsKSxsLnBsYWNlaG9sZGVyJiZcIlwiIT09bC50ZXh0LnRyaW0oKSYmKHRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0PWwudGV4dCkpfX0sbi5wcm90b3R5cGUucHVsbE9wdGlvbkRhdGE9ZnVuY3Rpb24oZSl7cmV0dXJue2lkOiEhZS5kYXRhc2V0JiZlLmRhdGFzZXQuaWR8fFN0cmluZyhNYXRoLmZsb29yKDFlOCpNYXRoLnJhbmRvbSgpKSksdmFsdWU6ZS52YWx1ZSx0ZXh0OmUudGV4dCxpbm5lckhUTUw6ZS5pbm5lckhUTUwsc2VsZWN0ZWQ6ZS5zZWxlY3RlZCxkaXNhYmxlZDplLmRpc2FibGVkLHBsYWNlaG9sZGVyOlwidHJ1ZVwiPT09ZS5kYXRhc2V0LnBsYWNlaG9sZGVyLGNsYXNzOmUuY2xhc3NOYW1lLHN0eWxlOmUuc3R5bGUuY3NzVGV4dCxkYXRhOmUuZGF0YXNldH19LG4ucHJvdG90eXBlLnNldFNlbGVjdGVkRnJvbVNlbGVjdD1mdW5jdGlvbigpe2lmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBlPVtdLHQ9MCxpPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudC5vcHRpb25zO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO2lmKHMuc2VsZWN0ZWQpe3ZhciBuPXRoaXMuZ2V0T2JqZWN0RnJvbURhdGEocy52YWx1ZSxcInZhbHVlXCIpO24mJm4uaWQmJmUucHVzaChuLmlkKX19dGhpcy5zZXRTZWxlY3RlZChlLFwiaWRcIil9ZWxzZXt2YXIgYT10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQ7aWYoLTEhPT1hLnNlbGVjdGVkSW5kZXgpe3ZhciBvPWEub3B0aW9uc1thLnNlbGVjdGVkSW5kZXhdLnZhbHVlO3RoaXMuc2V0U2VsZWN0ZWQobyxcInZhbHVlXCIpfX19LG4ucHJvdG90eXBlLnNldFNlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9XCJpZFwiKTtmb3IodmFyIGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107ci5wbGFjZWhvbGRlcnx8KHIuc2VsZWN0ZWQ9dGhpcy5zaG91bGRCZVNlbGVjdGVkKHIsZSx0KSl9fX1lbHNlIG4uc2VsZWN0ZWQ9dGhpcy5zaG91bGRCZVNlbGVjdGVkKG4sZSx0KX19LG4ucHJvdG90eXBlLnNob3VsZEJlU2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0LGkpe2lmKHZvaWQgMD09PWkmJihpPVwiaWRcIiksQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHM9MCxuPXQ7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107aWYoaSBpbiBlJiZTdHJpbmcoZVtpXSk9PT1TdHJpbmcoYSkpcmV0dXJuITB9ZWxzZSBpZihpIGluIGUmJlN0cmluZyhlW2ldKT09PVN0cmluZyh0KSlyZXR1cm4hMDtyZXR1cm4hMX0sbi5wcm90b3R5cGUuZ2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9e3RleHQ6XCJcIixwbGFjZWhvbGRlcjp0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dH0sdD1bXSxpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO3Iuc2VsZWN0ZWQmJih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/dC5wdXNoKHIpOmU9cil9fX1lbHNlIG4uc2VsZWN0ZWQmJih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/dC5wdXNoKG4pOmU9bil9cmV0dXJuIHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90OmV9LG4ucHJvdG90eXBlLmFkZFRvU2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT10JiYodD1cImlkXCIpLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7dmFyIGk9W10scz10aGlzLmdldFNlbGVjdGVkKCk7aWYoQXJyYXkuaXNBcnJheShzKSlmb3IodmFyIG49MCxhPXM7bjxhLmxlbmd0aDtuKyspe3ZhciBvPWFbbl07aS5wdXNoKG9bdF0pfWkucHVzaChlKSx0aGlzLnNldFNlbGVjdGVkKGksdCl9fSxuLnByb3RvdHlwZS5yZW1vdmVGcm9tU2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT10JiYodD1cImlkXCIpLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBpPVtdLHM9MCxuPXRoaXMuZ2V0U2VsZWN0ZWQoKTtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtTdHJpbmcoYVt0XSkhPT1TdHJpbmcoZSkmJmkucHVzaChhW3RdKX10aGlzLnNldFNlbGVjdGVkKGksdCl9fSxuLnByb3RvdHlwZS5vbkRhdGFDaGFuZ2U9ZnVuY3Rpb24oKXt0aGlzLm1haW4ub25DaGFuZ2UmJnRoaXMuaXNPbkNoYW5nZUVuYWJsZWQmJnRoaXMubWFpbi5vbkNoYW5nZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0U2VsZWN0ZWQoKSkpKX0sbi5wcm90b3R5cGUuZ2V0T2JqZWN0RnJvbURhdGE9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cImlkXCIpO2Zvcih2YXIgaT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKHQgaW4gbiYmU3RyaW5nKG5bdF0pPT09U3RyaW5nKGUpKXJldHVybiBuO2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uO2lmKGEub3B0aW9ucylmb3IodmFyIG89MCxsPWEub3B0aW9ucztvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtpZihTdHJpbmcoclt0XSk9PT1TdHJpbmcoZSkpcmV0dXJuIHJ9fX1yZXR1cm4gbnVsbH0sbi5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKG4pe2lmKFwiXCIhPT0odGhpcy5zZWFyY2hWYWx1ZT1uKS50cmltKCkpe3ZhciBhPXRoaXMubWFpbi5jb25maWcuc2VhcmNoRmlsdGVyLGU9dGhpcy5kYXRhLnNsaWNlKDApO249bi50cmltKCk7dmFyIHQ9ZS5tYXAoZnVuY3Rpb24oZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciB0PWUsaT1bXTtpZih0Lm9wdGlvbnMmJihpPXQub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSxuKX0pKSwwIT09aS5sZW5ndGgpe3ZhciBzPU9iamVjdC5hc3NpZ24oe30sdCk7cmV0dXJuIHMub3B0aW9ucz1pLHN9fXJldHVybiBlLmhhc093blByb3BlcnR5KFwidGV4dFwiKSYmYShlLG4pP2U6bnVsbH0pO3RoaXMuZmlsdGVyZWQ9dC5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX1lbHNlIHRoaXMuZmlsdGVyZWQ9bnVsbH0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLmNvbnRlbnRPcGVuPSExLHRoaXMuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIix0aGlzLmlzT25DaGFuZ2VFbmFibGVkPSEwLHRoaXMubWFpbj1lLm1haW4sdGhpcy5zZWFyY2hWYWx1ZT1cIlwiLHRoaXMuZGF0YT1bXSx0aGlzLmZpbHRlcmVkPW51bGwsdGhpcy5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIHZvaWQgMCE9PWUudGV4dHx8KGNvbnNvbGUuZXJyb3IoXCJEYXRhIG9iamVjdCBvcHRpb24gbXVzdCBoYXZlIGF0IGxlYXN0IGhhdmUgYSB0ZXh0IHZhbHVlLiBDaGVjayBvYmplY3Q6IFwiK0pTT04uc3RyaW5naWZ5KGUpKSwhMSl9dC5EYXRhPXMsdC52YWxpZGF0ZURhdGE9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJEYXRhIG11c3QgYmUgYW4gYXJyYXkgb2Ygb2JqZWN0c1wiKSwhMTtmb3IodmFyIHQ9MCxpPTAscz1lO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7cihsW29dKXx8dCsrfX19ZWxzZSByKG4pfHx0Kyt9cmV0dXJuIDA9PT10fSx0LnZhbGlkYXRlT3B0aW9uPXJ9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9aSgzKSxuPWkoNCksYT1pKDUpLG89aSgxKSxsPWkoMCkscj0oYy5wcm90b3R5cGUudmFsaWRhdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJzdHJpbmdcIj09dHlwZW9mIGUuc2VsZWN0P2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5zZWxlY3QpOmUuc2VsZWN0O2lmKCF0KXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHNlbGVjdCBlbGVtZW50XCIpO2lmKFwiU0VMRUNUXCIhPT10LnRhZ05hbWUpdGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudCBpc250IG9mIHR5cGUgc2VsZWN0XCIpO3JldHVybiB0fSxjLnByb3RvdHlwZS5zZWxlY3RlZD1mdW5jdGlvbigpe2lmKHRoaXMuY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgZT1bXSx0PTAsaT1uPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO2UucHVzaChzLnZhbHVlKX1yZXR1cm4gZX12YXIgbjtyZXR1cm4obj10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKSk/bi52YWx1ZTpcIlwifSxjLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZSx0LGkscyl7dm9pZCAwPT09dCYmKHQ9XCJ2YWx1ZVwiKSx2b2lkIDA9PT1pJiYoaT0hMCksdm9pZCAwPT09cyYmKHM9ITApLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJiFBcnJheS5pc0FycmF5KGUpP3RoaXMuZGF0YS5hZGRUb1NlbGVjdGVkKGUsdCk6dGhpcy5kYXRhLnNldFNlbGVjdGVkKGUsdCksdGhpcy5zZWxlY3Quc2V0VmFsdWUoKSx0aGlzLmRhdGEub25EYXRhQ2hhbmdlKCksdGhpcy5yZW5kZXIoKSxpJiZ0aGlzLmNsb3NlKCl9LGMucHJvdG90eXBlLnNldFNlbGVjdGVkPWZ1bmN0aW9uKGUsdCxpLHMpe3ZvaWQgMD09PXQmJih0PVwidmFsdWVcIiksdm9pZCAwPT09aSYmKGk9ITApLHZvaWQgMD09PXMmJihzPSEwKSx0aGlzLnNldChlLHQsaSxzKX0sYy5wcm90b3R5cGUuc2V0RGF0YT1mdW5jdGlvbihlKXtpZihvLnZhbGlkYXRlRGF0YShlKSl7dmFyIHQ9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSksaT10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZih0aGlzLmNvbmZpZy5pc0FqYXgmJmkpaWYodGhpcy5jb25maWcuaXNNdWx0aXBsZSlmb3IodmFyIHM9MCxuPWkucmV2ZXJzZSgpO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO3QudW5zaGlmdChhKX1lbHNlIHQudW5zaGlmdCh0aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKSksdC51bnNoaWZ0KHt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6ITB9KTt0aGlzLnNlbGVjdC5jcmVhdGUodCksdGhpcy5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKX1lbHNlIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIHByb2JsZW0gb246ICNcIit0aGlzLnNlbGVjdC5lbGVtZW50LmlkKX0sYy5wcm90b3R5cGUuYWRkRGF0YT1mdW5jdGlvbihlKXtvLnZhbGlkYXRlRGF0YShbZV0pPyh0aGlzLmRhdGEuYWRkKHRoaXMuZGF0YS5uZXdPcHRpb24oZSkpLHRoaXMuc2VsZWN0LmNyZWF0ZSh0aGlzLmRhdGEuZGF0YSksdGhpcy5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0aGlzLnJlbmRlcigpKTpjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbiBwcm9ibGVtIG9uOiAjXCIrdGhpcy5zZWxlY3QuZWxlbWVudC5pZCl9LGMucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKHRoaXMuY29uZmlnLmlzRW5hYmxlZCYmIXRoaXMuZGF0YS5jb250ZW50T3Blbil7aWYodGhpcy5iZWZvcmVPcGVuJiZ0aGlzLmJlZm9yZU9wZW4oKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5wbHVzLmNsYXNzTGlzdC5hZGQoXCJzcy1jcm9zc1wiKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJhcnJvdy1kb3duXCIpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93LXVwXCIpKSx0aGlzLnNsaW1bdGhpcy5jb25maWcuaXNNdWx0aXBsZT9cIm11bHRpU2VsZWN0ZWRcIjpcInNpbmdsZVNlbGVjdGVkXCJdLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdmVcIj09PXRoaXMuZGF0YS5jb250ZW50UG9zaXRpb24/dGhpcy5jb25maWcub3BlbkFib3ZlOnRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5jb25maWcuYWRkVG9Cb2R5KXt2YXIgdD10aGlzLnNsaW0uY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3RoaXMuc2xpbS5jb250ZW50LnN0eWxlLnRvcD10LnRvcCt0LmhlaWdodCt3aW5kb3cuc2Nyb2xsWStcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUubGVmdD10LmxlZnQrd2luZG93LnNjcm9sbFgrXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLndpZHRoPXQud2lkdGgrXCJweFwifWlmKHRoaXMuc2xpbS5jb250ZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbiksXCJ1cFwiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQudG9Mb3dlckNhc2UoKT90aGlzLm1vdmVDb250ZW50QWJvdmUoKTpcImRvd25cIj09PXRoaXMuY29uZmlnLnNob3dDb250ZW50LnRvTG93ZXJDYXNlKCk/dGhpcy5tb3ZlQ29udGVudEJlbG93KCk6XCJhYm92ZVwiPT09bC5wdXRDb250ZW50KHRoaXMuc2xpbS5jb250ZW50LHRoaXMuZGF0YS5jb250ZW50UG9zaXRpb24sdGhpcy5kYXRhLmNvbnRlbnRPcGVuKT90aGlzLm1vdmVDb250ZW50QWJvdmUoKTp0aGlzLm1vdmVDb250ZW50QmVsb3coKSwhdGhpcy5jb25maWcuaXNNdWx0aXBsZSl7dmFyIGk9dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7aWYoaSl7dmFyIHM9aS5pZCxuPXRoaXMuc2xpbS5saXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiJytzKydcIl0nKTtuJiZsLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5zbGltLmxpc3Qsbil9fXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmRhdGEuY29udGVudE9wZW49ITAsZS5jb25maWcuc2VhcmNoRm9jdXMmJmUuc2xpbS5zZWFyY2guaW5wdXQuZm9jdXMoKSxlLmFmdGVyT3BlbiYmZS5hZnRlck9wZW4oKX0sdGhpcy5jb25maWcudGltZW91dERlbGF5KX19LGMucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmRhdGEuY29udGVudE9wZW4mJih0aGlzLmJlZm9yZUNsb3NlJiZ0aGlzLmJlZm9yZUNsb3NlKCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5wbHVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzcy1jcm9zc1wiKSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctZG93blwiKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJhcnJvdy11cFwiKSksdGhpcy5zbGltLmNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuKSx0aGlzLmRhdGEuY29udGVudE9wZW49ITEsdGhpcy5zZWFyY2goXCJcIiksc2V0VGltZW91dChmdW5jdGlvbigpe2Uuc2xpbS5jb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLGUuZGF0YS5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLGUuY29uZmlnLmlzTXVsdGlwbGUmJmUuc2xpbS5tdWx0aVNlbGVjdGVkPyhlLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQWJvdmUpLGUuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5CZWxvdykpOmUuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKGUuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQWJvdmUpLGUuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQmVsb3cpKSxlLnNsaW0uc2VhcmNoLmlucHV0LmJsdXIoKSxlLmFmdGVyQ2xvc2UmJmUuYWZ0ZXJDbG9zZSgpfSx0aGlzLmNvbmZpZy50aW1lb3V0RGVsYXkpKX0sYy5wcm90b3R5cGUubW92ZUNvbnRlbnRBYm92ZT1mdW5jdGlvbigpe3ZhciBlPTA7dGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/ZT10aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIub2Zmc2V0SGVpZ2h0OnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKGU9dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQpO3ZhciB0PWUrdGhpcy5zbGltLmNvbnRlbnQub2Zmc2V0SGVpZ2h0LTE7dGhpcy5zbGltLmNvbnRlbnQuc3R5bGUubWFyZ2luPVwiLVwiK3QrXCJweCAwIDAgMFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLmhlaWdodD10LWUrMStcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luPVwiY2VudGVyIGJvdHRvbVwiLHRoaXMuZGF0YS5jb250ZW50UG9zaXRpb249XCJhYm92ZVwiLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkPyh0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5BYm92ZSkpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpKX0sYy5wcm90b3R5cGUubW92ZUNvbnRlbnRCZWxvdz1mdW5jdGlvbigpe3RoaXMuZGF0YS5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkPyh0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5CZWxvdykpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpKX0sYy5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNFbmFibGVkPSEwLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmRpc2FibGVkKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5kaXNhYmxlZCksdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITEsdGhpcy5zZWxlY3QuZWxlbWVudC5kaXNhYmxlZD0hMSx0aGlzLnNsaW0uc2VhcmNoLmlucHV0LmRpc2FibGVkPSExLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSEwfSxjLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNFbmFibGVkPSExLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmRpc2FibGVkKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5kaXNhYmxlZCksdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITEsdGhpcy5zZWxlY3QuZWxlbWVudC5kaXNhYmxlZD0hMCx0aGlzLnNsaW0uc2VhcmNoLmlucHV0LmRpc2FibGVkPSEwLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSEwfSxjLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24odCl7aWYodGhpcy5kYXRhLnNlYXJjaFZhbHVlIT09dClpZih0aGlzLnNsaW0uc2VhcmNoLmlucHV0LnZhbHVlPXQsdGhpcy5jb25maWcuaXNBamF4KXt2YXIgaT10aGlzO3RoaXMuY29uZmlnLmlzU2VhcmNoaW5nPSEwLHRoaXMucmVuZGVyKCksdGhpcy5hamF4JiZ0aGlzLmFqYXgodCxmdW5jdGlvbihlKXtpLmNvbmZpZy5pc1NlYXJjaGluZz0hMSxBcnJheS5pc0FycmF5KGUpPyhlLnVuc2hpZnQoe3RleHQ6XCJcIixwbGFjZWhvbGRlcjohMH0pLGkuc2V0RGF0YShlKSxpLmRhdGEuc2VhcmNoKHQpLGkucmVuZGVyKCkpOlwic3RyaW5nXCI9PXR5cGVvZiBlP2kuc2xpbS5vcHRpb25zKGUpOmkucmVuZGVyKCl9KX1lbHNlIHRoaXMuZGF0YS5zZWFyY2godCksdGhpcy5yZW5kZXIoKX0sYy5wcm90b3R5cGUuc2V0U2VhcmNoVGV4dD1mdW5jdGlvbihlKXt0aGlzLmNvbmZpZy5zZWFyY2hUZXh0PWV9LGMucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzTXVsdGlwbGU/dGhpcy5zbGltLnZhbHVlcygpOih0aGlzLnNsaW0ucGxhY2Vob2xkZXIoKSx0aGlzLnNsaW0uZGVzZWxlY3QoKSksdGhpcy5zbGltLm9wdGlvbnMoKX0sYy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT1udWxsKTt2YXIgdD1lP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrZStcIi5zcy1tYWluXCIpOnRoaXMuc2xpbS5jb250YWluZXIsaT1lP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zc2lkPVwiK2UrXCJdXCIpOnRoaXMuc2VsZWN0LmVsZW1lbnQ7aWYodCYmaSYmKGkuc3R5bGUuZGlzcGxheT1cIlwiLGRlbGV0ZSBpLmRhdGFzZXQuc3NpZCxpLnNsaW09bnVsbCx0LnBhcmVudEVsZW1lbnQmJnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0KSx0aGlzLmNvbmZpZy5hZGRUb0JvZHkpKXt2YXIgcz1lP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrZStcIi5zcy1jb250ZW50XCIpOnRoaXMuc2xpbS5jb250ZW50O2lmKCFzKXJldHVybjtkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHMpfX0sYyk7ZnVuY3Rpb24gYyhlKXt2YXIgdD10aGlzO3RoaXMuYWpheD1udWxsLHRoaXMuYWRkYWJsZT1udWxsLHRoaXMuYmVmb3JlT25DaGFuZ2U9bnVsbCx0aGlzLm9uQ2hhbmdlPW51bGwsdGhpcy5iZWZvcmVPcGVuPW51bGwsdGhpcy5hZnRlck9wZW49bnVsbCx0aGlzLmJlZm9yZUNsb3NlPW51bGwsdGhpcy5hZnRlckNsb3NlPW51bGw7dmFyIGk9dGhpcy52YWxpZGF0ZShlKTtpLmRhdGFzZXQuc3NpZCYmdGhpcy5kZXN0cm95KGkuZGF0YXNldC5zc2lkKSxlLmFqYXgmJih0aGlzLmFqYXg9ZS5hamF4KSxlLmFkZGFibGUmJih0aGlzLmFkZGFibGU9ZS5hZGRhYmxlKSx0aGlzLmNvbmZpZz1uZXcgcy5Db25maWcoe3NlbGVjdDppLGlzQWpheDohIWUuYWpheCxzaG93U2VhcmNoOmUuc2hvd1NlYXJjaCxzZWFyY2hQbGFjZWhvbGRlcjplLnNlYXJjaFBsYWNlaG9sZGVyLHNlYXJjaFRleHQ6ZS5zZWFyY2hUZXh0LHNlYXJjaGluZ1RleHQ6ZS5zZWFyY2hpbmdUZXh0LHNlYXJjaEZvY3VzOmUuc2VhcmNoRm9jdXMsc2VhcmNoSGlnaGxpZ2h0OmUuc2VhcmNoSGlnaGxpZ2h0LHNlYXJjaEZpbHRlcjplLnNlYXJjaEZpbHRlcixjbG9zZU9uU2VsZWN0OmUuY2xvc2VPblNlbGVjdCxzaG93Q29udGVudDplLnNob3dDb250ZW50LHBsYWNlaG9sZGVyVGV4dDplLnBsYWNlaG9sZGVyLGFsbG93RGVzZWxlY3Q6ZS5hbGxvd0Rlc2VsZWN0LGFsbG93RGVzZWxlY3RPcHRpb246ZS5hbGxvd0Rlc2VsZWN0T3B0aW9uLGhpZGVTZWxlY3RlZE9wdGlvbjplLmhpZGVTZWxlY3RlZE9wdGlvbixkZXNlbGVjdExhYmVsOmUuZGVzZWxlY3RMYWJlbCxpc0VuYWJsZWQ6ZS5pc0VuYWJsZWQsdmFsdWVzVXNlVGV4dDplLnZhbHVlc1VzZVRleHQsc2hvd09wdGlvblRvb2x0aXBzOmUuc2hvd09wdGlvblRvb2x0aXBzLHNlbGVjdEJ5R3JvdXA6ZS5zZWxlY3RCeUdyb3VwLGxpbWl0OmUubGltaXQsdGltZW91dERlbGF5OmUudGltZW91dERlbGF5LGFkZFRvQm9keTplLmFkZFRvQm9keX0pLHRoaXMuc2VsZWN0PW5ldyBuLlNlbGVjdCh7c2VsZWN0OmksbWFpbjp0aGlzfSksdGhpcy5kYXRhPW5ldyBvLkRhdGEoe21haW46dGhpc30pLHRoaXMuc2xpbT1uZXcgYS5TbGltKHttYWluOnRoaXN9KSx0aGlzLnNlbGVjdC5lbGVtZW50LnBhcmVudE5vZGUmJnRoaXMuc2VsZWN0LmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5zbGltLmNvbnRhaW5lcix0aGlzLnNlbGVjdC5lbGVtZW50Lm5leHRTaWJsaW5nKSxlLmRhdGE/dGhpcy5zZXREYXRhKGUuZGF0YSk6dGhpcy5yZW5kZXIoKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnRhcmdldCYmIWwuaGFzQ2xhc3NJblRyZWUoZS50YXJnZXQsdC5jb25maWcuaWQpJiZ0LmNsb3NlKCl9KSxcImF1dG9cIj09PXRoaXMuY29uZmlnLnNob3dDb250ZW50JiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGwuZGVib3VuY2UoZnVuY3Rpb24oZSl7dC5kYXRhLmNvbnRlbnRPcGVuJiYoXCJhYm92ZVwiPT09bC5wdXRDb250ZW50KHQuc2xpbS5jb250ZW50LHQuZGF0YS5jb250ZW50UG9zaXRpb24sdC5kYXRhLmNvbnRlbnRPcGVuKT90Lm1vdmVDb250ZW50QWJvdmUoKTp0Lm1vdmVDb250ZW50QmVsb3coKSl9KSwhMSksZS5iZWZvcmVPbkNoYW5nZSYmKHRoaXMuYmVmb3JlT25DaGFuZ2U9ZS5iZWZvcmVPbkNoYW5nZSksZS5vbkNoYW5nZSYmKHRoaXMub25DaGFuZ2U9ZS5vbkNoYW5nZSksZS5iZWZvcmVPcGVuJiYodGhpcy5iZWZvcmVPcGVuPWUuYmVmb3JlT3BlbiksZS5hZnRlck9wZW4mJih0aGlzLmFmdGVyT3Blbj1lLmFmdGVyT3BlbiksZS5iZWZvcmVDbG9zZSYmKHRoaXMuYmVmb3JlQ2xvc2U9ZS5iZWZvcmVDbG9zZSksZS5hZnRlckNsb3NlJiYodGhpcy5hZnRlckNsb3NlPWUuYWZ0ZXJDbG9zZSksdGhpcy5jb25maWcuaXNFbmFibGVkfHx0aGlzLmRpc2FibGUoKX10LmRlZmF1bHQ9cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUuc2VhcmNoRmlsdGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuLTEhPT1lLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHQudG9Mb3dlckNhc2UoKSl9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5pZD1cIlwiLHRoaXMuaXNNdWx0aXBsZT0hMSx0aGlzLmlzQWpheD0hMSx0aGlzLmlzU2VhcmNoaW5nPSExLHRoaXMuc2hvd1NlYXJjaD0hMCx0aGlzLnNlYXJjaEZvY3VzPSEwLHRoaXMuc2VhcmNoSGlnaGxpZ2h0PSExLHRoaXMuY2xvc2VPblNlbGVjdD0hMCx0aGlzLnNob3dDb250ZW50PVwiYXV0b1wiLHRoaXMuc2VhcmNoUGxhY2Vob2xkZXI9XCJTZWFyY2hcIix0aGlzLnNlYXJjaFRleHQ9XCJObyBSZXN1bHRzXCIsdGhpcy5zZWFyY2hpbmdUZXh0PVwiU2VhcmNoaW5nLi4uXCIsdGhpcy5wbGFjZWhvbGRlclRleHQ9XCJTZWxlY3QgVmFsdWVcIix0aGlzLmFsbG93RGVzZWxlY3Q9ITEsdGhpcy5hbGxvd0Rlc2VsZWN0T3B0aW9uPSExLHRoaXMuaGlkZVNlbGVjdGVkT3B0aW9uPSExLHRoaXMuZGVzZWxlY3RMYWJlbD1cInhcIix0aGlzLmlzRW5hYmxlZD0hMCx0aGlzLnZhbHVlc1VzZVRleHQ9ITEsdGhpcy5zaG93T3B0aW9uVG9vbHRpcHM9ITEsdGhpcy5zZWxlY3RCeUdyb3VwPSExLHRoaXMubGltaXQ9MCx0aGlzLnRpbWVvdXREZWxheT0yMDAsdGhpcy5hZGRUb0JvZHk9ITEsdGhpcy5tYWluPVwic3MtbWFpblwiLHRoaXMuc2luZ2xlU2VsZWN0ZWQ9XCJzcy1zaW5nbGUtc2VsZWN0ZWRcIix0aGlzLmFycm93PVwic3MtYXJyb3dcIix0aGlzLm11bHRpU2VsZWN0ZWQ9XCJzcy1tdWx0aS1zZWxlY3RlZFwiLHRoaXMuYWRkPVwic3MtYWRkXCIsdGhpcy5wbHVzPVwic3MtcGx1c1wiLHRoaXMudmFsdWVzPVwic3MtdmFsdWVzXCIsdGhpcy52YWx1ZT1cInNzLXZhbHVlXCIsdGhpcy52YWx1ZVRleHQ9XCJzcy12YWx1ZS10ZXh0XCIsdGhpcy52YWx1ZURlbGV0ZT1cInNzLXZhbHVlLWRlbGV0ZVwiLHRoaXMuY29udGVudD1cInNzLWNvbnRlbnRcIix0aGlzLm9wZW49XCJzcy1vcGVuXCIsdGhpcy5vcGVuQWJvdmU9XCJzcy1vcGVuLWFib3ZlXCIsdGhpcy5vcGVuQmVsb3c9XCJzcy1vcGVuLWJlbG93XCIsdGhpcy5zZWFyY2g9XCJzcy1zZWFyY2hcIix0aGlzLnNlYXJjaEhpZ2hsaWdodGVyPVwic3Mtc2VhcmNoLWhpZ2hsaWdodFwiLHRoaXMuYWRkYWJsZT1cInNzLWFkZGFibGVcIix0aGlzLmxpc3Q9XCJzcy1saXN0XCIsdGhpcy5vcHRncm91cD1cInNzLW9wdGdyb3VwXCIsdGhpcy5vcHRncm91cExhYmVsPVwic3Mtb3B0Z3JvdXAtbGFiZWxcIix0aGlzLm9wdGdyb3VwTGFiZWxTZWxlY3RhYmxlPVwic3Mtb3B0Z3JvdXAtbGFiZWwtc2VsZWN0YWJsZVwiLHRoaXMub3B0aW9uPVwic3Mtb3B0aW9uXCIsdGhpcy5vcHRpb25TZWxlY3RlZD1cInNzLW9wdGlvbi1zZWxlY3RlZFwiLHRoaXMuaGlnaGxpZ2h0ZWQ9XCJzcy1oaWdobGlnaHRlZFwiLHRoaXMuZGlzYWJsZWQ9XCJzcy1kaXNhYmxlZFwiLHRoaXMuaGlkZT1cInNzLWhpZGVcIix0aGlzLmlkPVwic3MtXCIrTWF0aC5mbG9vcigxZTUqTWF0aC5yYW5kb20oKSksdGhpcy5zdHlsZT1lLnNlbGVjdC5zdHlsZS5jc3NUZXh0LHRoaXMuY2xhc3M9ZS5zZWxlY3QuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSx0aGlzLmlzTXVsdGlwbGU9ZS5zZWxlY3QubXVsdGlwbGUsdGhpcy5pc0FqYXg9ZS5pc0FqYXgsdGhpcy5zaG93U2VhcmNoPSExIT09ZS5zaG93U2VhcmNoLHRoaXMuc2VhcmNoRm9jdXM9ITEhPT1lLnNlYXJjaEZvY3VzLHRoaXMuc2VhcmNoSGlnaGxpZ2h0PSEwPT09ZS5zZWFyY2hIaWdobGlnaHQsdGhpcy5jbG9zZU9uU2VsZWN0PSExIT09ZS5jbG9zZU9uU2VsZWN0LGUuc2hvd0NvbnRlbnQmJih0aGlzLnNob3dDb250ZW50PWUuc2hvd0NvbnRlbnQpLHRoaXMuaXNFbmFibGVkPSExIT09ZS5pc0VuYWJsZWQsZS5zZWFyY2hQbGFjZWhvbGRlciYmKHRoaXMuc2VhcmNoUGxhY2Vob2xkZXI9ZS5zZWFyY2hQbGFjZWhvbGRlciksZS5zZWFyY2hUZXh0JiYodGhpcy5zZWFyY2hUZXh0PWUuc2VhcmNoVGV4dCksZS5zZWFyY2hpbmdUZXh0JiYodGhpcy5zZWFyY2hpbmdUZXh0PWUuc2VhcmNoaW5nVGV4dCksZS5wbGFjZWhvbGRlclRleHQmJih0aGlzLnBsYWNlaG9sZGVyVGV4dD1lLnBsYWNlaG9sZGVyVGV4dCksdGhpcy5hbGxvd0Rlc2VsZWN0PSEwPT09ZS5hbGxvd0Rlc2VsZWN0LHRoaXMuYWxsb3dEZXNlbGVjdE9wdGlvbj0hMD09PWUuYWxsb3dEZXNlbGVjdE9wdGlvbix0aGlzLmhpZGVTZWxlY3RlZE9wdGlvbj0hMD09PWUuaGlkZVNlbGVjdGVkT3B0aW9uLGUuZGVzZWxlY3RMYWJlbCYmKHRoaXMuZGVzZWxlY3RMYWJlbD1lLmRlc2VsZWN0TGFiZWwpLGUudmFsdWVzVXNlVGV4dCYmKHRoaXMudmFsdWVzVXNlVGV4dD1lLnZhbHVlc1VzZVRleHQpLGUuc2hvd09wdGlvblRvb2x0aXBzJiYodGhpcy5zaG93T3B0aW9uVG9vbHRpcHM9ZS5zaG93T3B0aW9uVG9vbHRpcHMpLGUuc2VsZWN0QnlHcm91cCYmKHRoaXMuc2VsZWN0QnlHcm91cD1lLnNlbGVjdEJ5R3JvdXApLGUubGltaXQmJih0aGlzLmxpbWl0PWUubGltaXQpLGUuc2VhcmNoRmlsdGVyJiYodGhpcy5zZWFyY2hGaWx0ZXI9ZS5zZWFyY2hGaWx0ZXIpLG51bGwhPWUudGltZW91dERlbGF5JiYodGhpcy50aW1lb3V0RGVsYXk9ZS50aW1lb3V0RGVsYXkpLHRoaXMuYWRkVG9Cb2R5PSEwPT09ZS5hZGRUb0JvZHl9dC5Db25maWc9c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUuc2V0VmFsdWU9ZnVuY3Rpb24oKXtpZih0aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpKXtpZih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpZm9yKHZhciBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksdD0wLGk9dGhpcy5lbGVtZW50Lm9wdGlvbnM7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07cy5zZWxlY3RlZD0hMTtmb3IodmFyIG49MCxhPWU7bjxhLmxlbmd0aDtuKyspYVtuXS52YWx1ZT09PXMudmFsdWUmJihzLnNlbGVjdGVkPSEwKX1lbHNlIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSx0aGlzLmVsZW1lbnQudmFsdWU9ZT9lLnZhbHVlOlwiXCI7dGhpcy5tYWluLmRhdGEuaXNPbkNoYW5nZUVuYWJsZWQ9ITEsdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksdGhpcy5tYWluLmRhdGEuaXNPbkNoYW5nZUVuYWJsZWQ9ITB9fSxuLnByb3RvdHlwZS5hZGRBdHRyaWJ1dGVzPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnRhYkluZGV4PS0xLHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMuZWxlbWVudC5kYXRhc2V0LnNzaWQ9dGhpcy5tYWluLmNvbmZpZy5pZH0sbi5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oZSl7dC5tYWluLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdC5tYWluLnJlbmRlcigpfSl9LG4ucHJvdG90eXBlLmFkZE11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMubWFpbi5jb25maWcuaXNBamF4fHwodGhpcy5tdXRhdGlvbk9ic2VydmVyPW5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGUpe3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXImJih0Lm1haW4uZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0Lm1haW4uZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0Lm1haW4ucmVuZGVyKCksZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1wiY2xhc3NcIj09PWUuYXR0cmlidXRlTmFtZSYmdC5tYWluLnNsaW0udXBkYXRlQ29udGFpbmVyRGl2Q2xhc3ModC5tYWluLnNsaW0uY29udGFpbmVyKX0pKX0pLHRoaXMub2JzZXJ2ZU11dGF0aW9uT2JzZXJ2ZXIoKSl9LG4ucHJvdG90eXBlLm9ic2VydmVNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dGhpcy5tdXRhdGlvbk9ic2VydmVyJiZ0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQse2F0dHJpYnV0ZXM6ITAsY2hpbGRMaXN0OiEwLGNoYXJhY3RlckRhdGE6ITB9KX0sbi5wcm90b3R5cGUuZGlzY29ubmVjdE11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt0aGlzLm11dGF0aW9uT2JzZXJ2ZXImJnRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCl9LG4ucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQuaW5uZXJIVE1MPVwiXCI7Zm9yKHZhciB0PTAsaT1lO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO2lmKHMuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgbj1zLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO2lmKGEubGFiZWw9bi5sYWJlbCxuLm9wdGlvbnMpZm9yKHZhciBvPTAsbD1uLm9wdGlvbnM7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107YS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU9wdGlvbihyKSl9dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGEpfWVsc2UgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlT3B0aW9uKHMpKX19LG4ucHJvdG90eXBlLmNyZWF0ZU9wdGlvbj1mdW5jdGlvbih0KXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO3JldHVybiBpLnZhbHVlPXQudmFsdWV8fHQudGV4dCxpLmlubmVySFRNTD10LmlubmVySFRNTHx8dC50ZXh0LHQuc2VsZWN0ZWQmJihpLnNlbGVjdGVkPXQuc2VsZWN0ZWQpLHQuZGlzYWJsZWQmJihpLmRpc2FibGVkPSEwKSx0LnBsYWNlaG9sZGVyJiZpLnNldEF0dHJpYnV0ZShcImRhdGEtcGxhY2Vob2xkZXJcIixcInRydWVcIiksdC5jbGFzcyYmdC5jbGFzcy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXtpLmNsYXNzTGlzdC5hZGQoZSl9KSx0LmRhdGEmJlwib2JqZWN0XCI9PXR5cGVvZiB0LmRhdGEmJk9iamVjdC5rZXlzKHQuZGF0YSkuZm9yRWFjaChmdW5jdGlvbihlKXtpLnNldEF0dHJpYnV0ZShcImRhdGEtXCIrZSx0LmRhdGFbZV0pfSksaX0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSEwLHRoaXMuZWxlbWVudD1lLnNlbGVjdCx0aGlzLm1haW49ZS5tYWluLHRoaXMuZWxlbWVudC5kaXNhYmxlZCYmKHRoaXMubWFpbi5jb25maWcuaXNFbmFibGVkPSExKSx0aGlzLmFkZEF0dHJpYnV0ZXMoKSx0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5tdXRhdGlvbk9ic2VydmVyPW51bGwsdGhpcy5hZGRNdXRhdGlvbk9ic2VydmVyKCksdGhpcy5lbGVtZW50LnNsaW09ZS5tYWlufXQuU2VsZWN0PXN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIGE9aSgwKSxvPWkoMSkscz0obi5wcm90b3R5cGUuY29udGFpbmVyRGl2PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5zdHlsZS5jc3NUZXh0PXRoaXMubWFpbi5jb25maWcuc3R5bGUsdGhpcy51cGRhdGVDb250YWluZXJEaXZDbGFzcyhlKSxlfSxuLnByb3RvdHlwZS51cGRhdGVDb250YWluZXJEaXZDbGFzcz1mdW5jdGlvbihlKXt0aGlzLm1haW4uY29uZmlnLmNsYXNzPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLGUuY2xhc3NOYW1lPVwiXCIsZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaWQpLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm1haW4pO2Zvcih2YXIgdD0wLGk9dGhpcy5tYWluLmNvbmZpZy5jbGFzczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtcIlwiIT09cy50cmltKCkmJmUuY2xhc3NMaXN0LmFkZChzKX19LG4ucHJvdG90eXBlLnNpbmdsZVNlbGVjdGVkRGl2PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuc2luZ2xlU2VsZWN0ZWQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2kuY2xhc3NMaXN0LmFkZChcInBsYWNlaG9sZGVyXCIpLGUuYXBwZW5kQ2hpbGQoaSk7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cy5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5kZXNlbGVjdExhYmVsLHMuY2xhc3NMaXN0LmFkZChcInNzLWRlc2VsZWN0XCIpLHMub25jbGljaz1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHQubWFpbi5jb25maWcuaXNFbmFibGVkJiZ0Lm1haW4uc2V0KFwiXCIpfSxlLmFwcGVuZENoaWxkKHMpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO24uY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFycm93KTt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gYS5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctZG93blwiKSxuLmFwcGVuZENoaWxkKGEpLGUuYXBwZW5kQ2hpbGQobiksZS5vbmNsaWNrPWZ1bmN0aW9uKCl7dC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJih0Lm1haW4uZGF0YS5jb250ZW50T3Blbj90Lm1haW4uY2xvc2UoKTp0Lm1haW4ub3BlbigpKX0se2NvbnRhaW5lcjplLHBsYWNlaG9sZGVyOmksZGVzZWxlY3Q6cyxhcnJvd0ljb246e2NvbnRhaW5lcjpuLGFycm93OmF9fX0sbi5wcm90b3R5cGUucGxhY2Vob2xkZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpO2lmKG51bGw9PT1lfHxlJiZlLnBsYWNlaG9sZGVyKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksdC5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQsdGhpcy5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2luZ2xlU2VsZWN0ZWQucGxhY2Vob2xkZXIuaW5uZXJIVE1MPXQub3V0ZXJIVE1MKX1lbHNle3ZhciBpPVwiXCI7ZSYmKGk9ZS5pbm5lckhUTUwmJiEwIT09dGhpcy5tYWluLmNvbmZpZy52YWx1ZXNVc2VUZXh0P2UuaW5uZXJIVE1MOmUudGV4dCksdGhpcy5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2luZ2xlU2VsZWN0ZWQucGxhY2Vob2xkZXIuaW5uZXJIVE1MPWU/aTpcIlwiKX19LG4ucHJvdG90eXBlLmRlc2VsZWN0PWZ1bmN0aW9uKCl7aWYodGhpcy5zaW5nbGVTZWxlY3RlZCl7aWYoIXRoaXMubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdClyZXR1cm4gdm9pZCB0aGlzLnNpbmdsZVNlbGVjdGVkLmRlc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzcy1oaWRlXCIpO1wiXCI9PT10aGlzLm1haW4uc2VsZWN0ZWQoKT90aGlzLnNpbmdsZVNlbGVjdGVkLmRlc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzcy1oaWRlXCIpOnRoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcInNzLWhpZGVcIil9fSxuLnByb3RvdHlwZS5tdWx0aVNlbGVjdGVkRGl2PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubXVsdGlTZWxlY3RlZCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZXMpLGUuYXBwZW5kQ2hpbGQoaSk7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5hZGQpO3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBuLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5wbHVzKSxuLm9uY2xpY2s9ZnVuY3Rpb24oZSl7dC5tYWluLmRhdGEuY29udGVudE9wZW4mJih0Lm1haW4uY2xvc2UoKSxlLnN0b3BQcm9wYWdhdGlvbigpKX0scy5hcHBlbmRDaGlsZChuKSxlLmFwcGVuZENoaWxkKHMpLGUub25jbGljaz1mdW5jdGlvbihlKXt0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyh0Lm1haW4uY29uZmlnLnZhbHVlRGVsZXRlKXx8KHQubWFpbi5kYXRhLmNvbnRlbnRPcGVuP3QubWFpbi5jbG9zZSgpOnQubWFpbi5vcGVuKCkpKX0se2NvbnRhaW5lcjplLHZhbHVlczppLGFkZDpzLHBsdXM6bn19LG4ucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe2lmKHRoaXMubXVsdGlTZWxlY3RlZCl7Zm9yKHZhciBlLHQ9dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5jaGlsZE5vZGVzLGk9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSxzPVtdLG49MCxhPXQ7bjxhLmxlbmd0aDtuKyspe3ZhciBvPWFbbl07ZT0hMDtmb3IodmFyIGw9MCxyPWk7bDxyLmxlbmd0aDtsKyspe3ZhciBjPXJbbF07U3RyaW5nKGMuaWQpPT09U3RyaW5nKG8uZGF0YXNldC5pZCkmJihlPSExKX1lJiZzLnB1c2gobyl9Zm9yKHZhciBkPTAsaD1zO2Q8aC5sZW5ndGg7ZCsrKXt2YXIgdT1oW2RdO3UuY2xhc3NMaXN0LmFkZChcInNzLW91dFwiKSx0aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLnJlbW92ZUNoaWxkKHUpfWZvcih0PXRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuY2hpbGROb2RlcyxjPTA7YzxpLmxlbmd0aDtjKyspe2U9ITE7Zm9yKHZhciBwPTAsbT10O3A8bS5sZW5ndGg7cCsrKW89bVtwXSxTdHJpbmcoaVtjXS5pZCk9PT1TdHJpbmcoby5kYXRhc2V0LmlkKSYmKGU9ITApO2V8fCgwIT09dC5sZW5ndGgmJkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQ/MD09PWM/dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5pbnNlcnRCZWZvcmUodGhpcy52YWx1ZURpdihpW2NdKSx0W2NdKTp0W2MtMV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIix0aGlzLnZhbHVlRGl2KGlbY10pKTp0aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmFwcGVuZENoaWxkKHRoaXMudmFsdWVEaXYoaVtjXSkpKX1pZigwPT09aS5sZW5ndGgpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2YuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxmLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dCx0aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmlubmVySFRNTD1mLm91dGVySFRNTH19fSxuLnByb3RvdHlwZS52YWx1ZURpdj1mdW5jdGlvbihhKXt2YXIgbz10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZSksZS5kYXRhc2V0LmlkPWEuaWQ7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVUZXh0KSx0LmlubmVySFRNTD1hLmlubmVySFRNTCYmITAhPT10aGlzLm1haW4uY29uZmlnLnZhbHVlc1VzZVRleHQ/YS5pbm5lckhUTUw6YS50ZXh0LGUuYXBwZW5kQ2hpbGQodCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIGkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlRGVsZXRlKSxpLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLmRlc2VsZWN0TGFiZWwsaS5vbmNsaWNrPWZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PSExO2lmKG8ubWFpbi5jb25maWcuaXNFbmFibGVkKXtpZihvLm1haW4uYmVmb3JlT25DaGFuZ2V8fCh0PSEwKSxvLm1haW4uYmVmb3JlT25DaGFuZ2Upe2Zvcih2YXIgaT1vLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHM9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpKSksbj0wO248cy5sZW5ndGg7bisrKXNbbl0uaWQ9PT1hLmlkJiZzLnNwbGljZShuLDEpOyExIT09by5tYWluLmJlZm9yZU9uQ2hhbmdlKHMpJiYodD0hMCl9dCYmKG8ubWFpbi5kYXRhLnJlbW92ZUZyb21TZWxlY3RlZChhLmlkLFwiaWRcIiksby5tYWluLnJlbmRlcigpLG8ubWFpbi5zZWxlY3Quc2V0VmFsdWUoKSxvLm1haW4uZGF0YS5vbkRhdGFDaGFuZ2UoKSl9fSxlLmFwcGVuZENoaWxkKGkpLGV9LG4ucHJvdG90eXBlLmNvbnRlbnREaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5jb250ZW50KSxlfSxuLnByb3RvdHlwZS5zZWFyY2hEaXY9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuc2VhcmNoKTt2YXIgdD17Y29udGFpbmVyOmUsaW5wdXQ6c307cmV0dXJuIHRoaXMubWFpbi5jb25maWcuc2hvd1NlYXJjaHx8KGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpLHMucmVhZE9ubHk9ITApLHMudHlwZT1cInNlYXJjaFwiLHMucGxhY2Vob2xkZXI9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hQbGFjZWhvbGRlcixzLnRhYkluZGV4PTAscy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsdGhpcy5tYWluLmNvbmZpZy5zZWFyY2hQbGFjZWhvbGRlcikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLFwib2ZmXCIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLFwib2ZmXCIpLHMub25jbGljaz1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJcIj09PWUudGFyZ2V0LnZhbHVlJiZuLm1haW4uc2VhcmNoKFwiXCIpfSwxMCl9LHMub25rZXlkb3duPWZ1bmN0aW9uKGUpe1wiQXJyb3dVcFwiPT09ZS5rZXk/KG4ubWFpbi5vcGVuKCksbi5oaWdobGlnaHRVcCgpLGUucHJldmVudERlZmF1bHQoKSk6XCJBcnJvd0Rvd25cIj09PWUua2V5PyhuLm1haW4ub3BlbigpLG4uaGlnaGxpZ2h0RG93bigpLGUucHJldmVudERlZmF1bHQoKSk6XCJUYWJcIj09PWUua2V5P24ubWFpbi5kYXRhLmNvbnRlbnRPcGVuP24ubWFpbi5jbG9zZSgpOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm1haW4uY2xvc2UoKX0sbi5tYWluLmNvbmZpZy50aW1lb3V0RGVsYXkpOlwiRW50ZXJcIj09PWUua2V5JiZlLnByZXZlbnREZWZhdWx0KCl9LHMub25rZXl1cD1mdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtpZihcIkVudGVyXCI9PT1lLmtleSl7aWYobi5tYWluLmFkZGFibGUmJmUuY3RybEtleSlyZXR1cm4gYS5jbGljaygpLGUucHJldmVudERlZmF1bHQoKSx2b2lkIGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGk9bi5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrbi5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCk7aSYmaS5jbGljaygpfWVsc2VcIkFycm93VXBcIj09PWUua2V5fHxcIkFycm93RG93blwiPT09ZS5rZXl8fChcIkVzY2FwZVwiPT09ZS5rZXk/bi5tYWluLmNsb3NlKCk6bi5tYWluLmNvbmZpZy5zaG93U2VhcmNoJiZuLm1haW4uZGF0YS5jb250ZW50T3Blbj9uLm1haW4uc2VhcmNoKHQudmFsdWUpOnMudmFsdWU9XCJcIik7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCl9LHMub25mb2N1cz1mdW5jdGlvbigpe24ubWFpbi5vcGVuKCl9LGUuYXBwZW5kQ2hpbGQocyksdGhpcy5tYWluLmFkZGFibGUmJihhLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5hZGRhYmxlKSxhLmlubmVySFRNTD1cIitcIixhLm9uY2xpY2s9ZnVuY3Rpb24oZSl7aWYobi5tYWluLmFkZGFibGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PW4uc2VhcmNoLmlucHV0LnZhbHVlO2lmKFwiXCI9PT10LnRyaW0oKSlyZXR1cm4gdm9pZCBuLnNlYXJjaC5pbnB1dC5mb2N1cygpO3ZhciBpPW4ubWFpbi5hZGRhYmxlKHQpLHM9XCJcIjtpZighaSlyZXR1cm47XCJvYmplY3RcIj09dHlwZW9mIGk/by52YWxpZGF0ZU9wdGlvbihpKSYmKG4ubWFpbi5hZGREYXRhKGkpLHM9aS52YWx1ZT9pLnZhbHVlOmkudGV4dCk6KG4ubWFpbi5hZGREYXRhKG4ubWFpbi5kYXRhLm5ld09wdGlvbih7dGV4dDppLHZhbHVlOml9KSkscz1pKSxuLm1haW4uc2VhcmNoKFwiXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm1haW4uc2V0KHMsXCJ2YWx1ZVwiLCExLCExKX0sMTAwKSxuLm1haW4uY29uZmlnLmNsb3NlT25TZWxlY3QmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm1haW4uY2xvc2UoKX0sMTAwKX19LGUuYXBwZW5kQ2hpbGQoYSksdC5hZGRhYmxlPWEpLHR9LG4ucHJvdG90eXBlLmhpZ2hsaWdodFVwPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdD1udWxsO2lmKGUpZm9yKHQ9ZS5wcmV2aW91c1NpYmxpbmc7bnVsbCE9PXQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpOyl0PXQucHJldmlvdXNTaWJsaW5nO2Vsc2V7dmFyIGk9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKTt0PWlbaS5sZW5ndGgtMV19aWYodCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cExhYmVsKSYmKHQ9bnVsbCksbnVsbD09PXQpe3ZhciBzPWUucGFyZW50Tm9kZTtpZihzLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwKSYmcy5wcmV2aW91c1NpYmxpbmcpe3ZhciBuPXMucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKTtuLmxlbmd0aCYmKHQ9bltuLmxlbmd0aC0xXSl9fXQmJihlJiZlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLGEuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLmxpc3QsdCkpfSxuLnByb3RvdHlwZS5oaWdobGlnaHREb3duPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdD1udWxsO2lmKGUpZm9yKHQ9ZS5uZXh0U2libGluZztudWxsIT09dCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCk7KXQ9dC5uZXh0U2libGluZztlbHNlIHQ9dGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKTtpZihudWxsPT09dCYmbnVsbCE9PWUpe3ZhciBpPWUucGFyZW50Tm9kZTtpLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwKSYmaS5uZXh0U2libGluZyYmKHQ9aS5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIikpfXQmJihlJiZlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLGEuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLmxpc3QsdCkpfSxuLnByb3RvdHlwZS5saXN0RGl2PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubGlzdCksZX0sbi5wcm90b3R5cGUub3B0aW9ucz1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT1cIlwiKTt2YXIgdCxpPXRoaXMubWFpbi5kYXRhLmZpbHRlcmVkfHx0aGlzLm1haW4uZGF0YS5kYXRhO2lmKCh0aGlzLmxpc3QuaW5uZXJIVE1MPVwiXCIpIT09ZSlyZXR1cm4odD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksdC5pbm5lckhUTUw9ZSx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZCh0KTtpZih0aGlzLm1haW4uY29uZmlnLmlzQWpheCYmdGhpcy5tYWluLmNvbmZpZy5pc1NlYXJjaGluZylyZXR1cm4odD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksdC5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hpbmdUZXh0LHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHQpO2lmKDA9PT1pLmxlbmd0aCl7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gcy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSxzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCkscy5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hUZXh0LHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHMpfWZvcih2YXIgbj1mdW5jdGlvbihlKXtpZihlLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe3ZhciB0PWUsbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO24uY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWwpLGMubWFpbi5jb25maWcuc2VsZWN0QnlHcm91cCYmYy5tYWluLmNvbmZpZy5pc011bHRpcGxlJiZpLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cExhYmVsU2VsZWN0YWJsZSksaS5pbm5lckhUTUw9dC5sYWJlbCxuLmFwcGVuZENoaWxkKGkpO3ZhciBzPXQub3B0aW9ucztpZihzKXtmb3IodmFyIGE9MCxvPXM7YTxvLmxlbmd0aDthKyspe3ZhciBsPW9bYV07bi5hcHBlbmRDaGlsZChjLm9wdGlvbihsKSl9aWYoYy5tYWluLmNvbmZpZy5zZWxlY3RCeUdyb3VwJiZjLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe3ZhciByPWM7aS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTtmb3IodmFyIHQ9MCxpPW4uY2hpbGRyZW47dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07LTEhPT1zLmNsYXNzTmFtZS5pbmRleE9mKHIubWFpbi5jb25maWcub3B0aW9uKSYmcy5jbGljaygpfX0pfX1jLmxpc3QuYXBwZW5kQ2hpbGQobil9ZWxzZSBjLmxpc3QuYXBwZW5kQ2hpbGQoYy5vcHRpb24oZSkpfSxjPXRoaXMsYT0wLG89aTthPG8ubGVuZ3RoO2ErKyluKG9bYV0pfSxuLnByb3RvdHlwZS5vcHRpb249ZnVuY3Rpb24ocil7aWYoci5wbGFjZWhvbGRlcil7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSxlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSxlfXZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uKSxyLmNsYXNzJiZyLmNsYXNzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QuY2xhc3NMaXN0LmFkZChlKX0pLHIuc3R5bGUmJih0LnN0eWxlLmNzc1RleHQ9ci5zdHlsZSk7dmFyIGM9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKTt0LmRhdGFzZXQuaWQ9ci5pZCx0aGlzLm1haW4uY29uZmlnLnNlYXJjaEhpZ2hsaWdodCYmdGhpcy5tYWluLnNsaW0mJnIuaW5uZXJIVE1MJiZcIlwiIT09dGhpcy5tYWluLnNsaW0uc2VhcmNoLmlucHV0LnZhbHVlLnRyaW0oKT90LmlubmVySFRNTD1hLmhpZ2hsaWdodChyLmlubmVySFRNTCx0aGlzLm1haW4uc2xpbS5zZWFyY2guaW5wdXQudmFsdWUsdGhpcy5tYWluLmNvbmZpZy5zZWFyY2hIaWdobGlnaHRlcik6ci5pbm5lckhUTUwmJih0LmlubmVySFRNTD1yLmlubmVySFRNTCksdGhpcy5tYWluLmNvbmZpZy5zaG93T3B0aW9uVG9vbHRpcHMmJnQudGV4dENvbnRlbnQmJnQuc2V0QXR0cmlidXRlKFwidGl0bGVcIix0LnRleHRDb250ZW50KTt2YXIgZD10aGlzO3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9dGhpcy5kYXRhc2V0LmlkO2lmKCEwPT09ci5zZWxlY3RlZCYmZC5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0T3B0aW9uKXt2YXIgaT0hMTtpZihkLm1haW4uYmVmb3JlT25DaGFuZ2UmJmQubWFpbi5jb25maWcuaXNNdWx0aXBsZXx8KGk9ITApLGQubWFpbi5iZWZvcmVPbkNoYW5nZSYmZC5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIHM9ZC5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSxuPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocykpLGE9MDthPG4ubGVuZ3RoO2ErKyluW2FdLmlkPT09dCYmbi5zcGxpY2UoYSwxKTshMSE9PWQubWFpbi5iZWZvcmVPbkNoYW5nZShuKSYmKGk9ITApfWkmJihkLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/KGQubWFpbi5kYXRhLnJlbW92ZUZyb21TZWxlY3RlZCh0LFwiaWRcIiksZC5tYWluLnJlbmRlcigpLGQubWFpbi5zZWxlY3Quc2V0VmFsdWUoKSxkLm1haW4uZGF0YS5vbkRhdGFDaGFuZ2UoKSk6ZC5tYWluLnNldChcIlwiKSl9ZWxzZXtpZihyLmRpc2FibGVkfHxyLnNlbGVjdGVkKXJldHVybjtpZihkLm1haW4uY29uZmlnLmxpbWl0JiZBcnJheS5pc0FycmF5KGMpJiZkLm1haW4uY29uZmlnLmxpbWl0PD1jLmxlbmd0aClyZXR1cm47aWYoZC5tYWluLmJlZm9yZU9uQ2hhbmdlKXt2YXIgbz12b2lkIDAsbD1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGQubWFpbi5kYXRhLmdldE9iamVjdEZyb21EYXRhKHQpKSk7bC5zZWxlY3RlZD0hMCxkLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/KG89SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjKSkpLnB1c2gobCk6bz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGwpKSwhMSE9PWQubWFpbi5iZWZvcmVPbkNoYW5nZShvKSYmZC5tYWluLnNldCh0LFwiaWRcIixkLm1haW4uY29uZmlnLmNsb3NlT25TZWxlY3QpfWVsc2UgZC5tYWluLnNldCh0LFwiaWRcIixkLm1haW4uY29uZmlnLmNsb3NlT25TZWxlY3QpfX0pO3ZhciBpPWMmJmEuaXNWYWx1ZUluQXJyYXlPZk9iamVjdHMoYyxcImlkXCIsci5pZCk7cmV0dXJuKHIuZGlzYWJsZWR8fGkpJiYodC5vbmNsaWNrPW51bGwsZC5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0T3B0aW9ufHx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksZC5tYWluLmNvbmZpZy5oaWRlU2VsZWN0ZWRPcHRpb24mJnQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpKSxpP3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvblNlbGVjdGVkKTp0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5tYWluLmNvbmZpZy5vcHRpb25TZWxlY3RlZCksdH0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLm1haW49ZS5tYWluLHRoaXMuY29udGFpbmVyPXRoaXMuY29udGFpbmVyRGl2KCksdGhpcy5jb250ZW50PXRoaXMuY29udGVudERpdigpLHRoaXMuc2VhcmNoPXRoaXMuc2VhcmNoRGl2KCksdGhpcy5saXN0PXRoaXMubGlzdERpdigpLHRoaXMub3B0aW9ucygpLHRoaXMuc2luZ2xlU2VsZWN0ZWQ9bnVsbCx0aGlzLm11bHRpU2VsZWN0ZWQ9bnVsbCx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/KHRoaXMubXVsdGlTZWxlY3RlZD10aGlzLm11bHRpU2VsZWN0ZWREaXYoKSx0aGlzLm11bHRpU2VsZWN0ZWQmJnRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlTZWxlY3RlZC5jb250YWluZXIpKToodGhpcy5zaW5nbGVTZWxlY3RlZD10aGlzLnNpbmdsZVNlbGVjdGVkRGl2KCksdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIpKSx0aGlzLm1haW4uY29uZmlnLmFkZFRvQm9keT8odGhpcy5jb250ZW50LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5pZCksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpKTp0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpLHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnNlYXJjaC5jb250YWluZXIpLHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmxpc3QpfXQuU2xpbT1zfV0sbi5jPXMsbi5kPWZ1bmN0aW9uKGUsdCxpKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6aX0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBpPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKGkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgcyBpbiB0KW4uZChpLHMsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxzKSk7cmV0dXJuIGl9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0yKSkuZGVmYXVsdDtmdW5jdGlvbiBuKGUpe2lmKHNbZV0pcmV0dXJuIHNbZV0uZXhwb3J0czt2YXIgdD1zW2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gaVtlXS5jYWxsKHQuZXhwb3J0cyx0LHQuZXhwb3J0cyxuKSx0Lmw9ITAsdC5leHBvcnRzfXZhciBpLHN9KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xyXG5cclxuLyoqXHJcbiAqIEEgZ2VuZXJpYyBjb21wb25lbnQgb2YgU3RhZGlhK1xyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBDb21wb25lbnQgdHlwZS5cclxuICogQGNsYXNzIENvbXBvbmVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBDb21wb25lbnQncyBuYW1lLlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnTXkgQ29tcG9uZW50JztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBDb21wb25lbnQncyB1bmlxdWUgSUQsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIG9uIGxvYWQuXHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGJvb2xlYW4ga2VlcGluZyB0cmFjayBvZiB3aGV0aGVyIHRoZSBDb21wb25lbnQgc2hvdWxkIHJlY2VpdmUgZXZlbnRzIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICByZW5kZXJlcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgc3RhcnQgbG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID1cclxuICAgICAgICAgICAgdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKSArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG4gICAgICAgIHRoaXMub25TdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlbmRlcmVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saHNFNGU+Yy13aXonKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVuZGVyZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gcmVuZGVyZXJzW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZihyZW5kZXJlci5zdHlsZS5vcGFjaXR5ICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgQ29tcG9uZW50IGhhcyBhbiBlbGVtZW50IGluIHRoZSBET01cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMucmVuZGVyZXIuc3R5bGUub3BhY2l0eSA9PT0gJzAnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyB1bmxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIHVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIENvbXBvbmVudCBzaG91bGQgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIENvbXBvbmVudCBzaG91bGQgc3RvcC5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZC5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgY2xhc3MgcmVzcG9uc2libGUgZm9yIGxvYWRpbmcgW1tDb21wb25lbnR8Q29tcG9uZW50c11dIGFuZCBkZWxpdmVyaW5nIGV2ZW50cy5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50TG9hZGVyIHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRMb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50czogQ29tcG9uZW50W107XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlcnMgYSBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGUgPT4geyByZXR1cm4gZS5pZCAhPT0gY29tcG9uZW50LmlkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5lbmFibGVkKSBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIGNvbXBvbmVudCBsb2FkZXIuXHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkKSBjb21wb25lbnQudW5sb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb21wb25lbnQuZW5hYmxlZCkgY29tcG9uZW50Lm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcFRpbWVyKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xyXG4gICAgY29ubmVjdGlvbjogYW55O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3QoY2FsbGJhY2s/OiAoY29ubmVjdGlvbjphbnkpID0+IHt9KSB7XHJcbiAgICAgICAgaWYodGhpcy5jb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvcjogQWxyZWFkeSBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB0aGlzLnVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3Rpb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLmNvbm5lY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZXJyb3IoJ0Vycm9yIHdoZW4gY29ubmVjdGluZyB0byBkYXRhYmFzZTonLCB4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvciB3aGVuIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2U6JywgeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7IFxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbm5lY3Rpb24oKTogYW55IHtcclxuICAgICAgICBpZighdGhpcy5jb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvcjogTm90IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb25uZWN0KGNhbGxiYWNrPzogKGNvbm5lY3Rpb246b2JqZWN0KSA9PiB7fSkge1xyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdChjYWxsYmFjayk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBwcmVmaXg6c3RyaW5nID0gJ1tTdGFkaWErXSc7XHJcblxyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgaW5mbyA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+TgyAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBibGFjaycpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3YXJuaW5nID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ifICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IG9yYW5nZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlcnJvciA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj4p2MICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IDcwMCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnQgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/Cfp6kgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogZGFya2dyZWVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEdWJpb3VzbHkgY3JlYXRlZCBieSBBZHJpYW4gQ29vbmV5XHJcbiAgICAgKiBAYXV0aG9yIGh0dHA6Ly9hZHJpYW5jb29uZXkuZ2l0aHViLmlvXHJcbiAgICAgKi9cclxuICAgIGltYWdlID0gZnVuY3Rpb24odXJsOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0Qm94ID0gZnVuY3Rpb24od2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmc6IFwiK1wiLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxcHg7IHBhZGRpbmc6IFwiICsgTWF0aC5mbG9vcihoZWlnaHQvMikgKyBcInB4IFwiICsgTWF0aC5mbG9vcih3aWR0aC8yKSArIFwicHg7IGxpbmUtaGVpZ2h0OiAwO1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkaW0gPSBnZXRCb3god2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZGltLnN0cmluZywgZGltLnN0eWxlICsgXCJiYWNrZ3JvdW5kOiB1cmwoXCIgKyB1cmwgKyBcIik7IGJhY2tncm91bmQtc2l6ZTogXCIgKyAod2lkdGgpICsgXCJweCBcIiArIChoZWlnaHQpICsgXCJweDsgY29sb3I6IHRyYW5zcGFyZW50O1wiKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2dnZXIoKTsiLCJjbGFzcyBVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RhZGlhJ3MgbWVudSBiYXIgZWxlbWVudCwgdXNlZCB0byBrbm93IHdoZW4gdGhlIHBsYXllciBoYXMgb3BlbmVkIHRoZSBtZW51LlxyXG4gICAgICovXHJcbiAgICBtZW51RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlgxYXN2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNZW51T3BlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW51RWxlbWVudC5zdHlsZS5vcGFjaXR5ICE9PSAnMCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdwbGF5ZXInKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkhvbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdob21lJykgIT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5TdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlJykgIT09IC0xICYmICF0aGlzLmlzSW5TdG9yZURldGFpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5TdG9yZURldGFpbCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlL2RldGFpbHMnKSAhPT0gLTE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFV0aWwoKTsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0Nsb2NrLnNjc3MnO1xyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIGNsb2NrIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENsb2NrIHR5cGUuXHJcbiAqIEBjbGFzcyBDbG9ja1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiQ2xvY2tcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjbG9jayBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgPHNwYW4+LCBhZGRzIHRoZSByaWdodCBjbGFzc2VzLCBhbmQgc3RvcmVzIGl0IGluIFtAbGluayAjZWxlbWVudF1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfY2xvY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGNsb2NrIHdoZW4gaXQncyB2aXNpYmxlXHJcbiAgICAgICAgaWYoVXRpbC5pc01lbnVPcGVuKCkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeGhBeWYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3MnO1xyXG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vVUlUYWInO1xyXG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcclxuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuLi91aS9TbmFja2Jhcic7XHJcblxyXG5jb25zdCBjaHJvbWUgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xyXG5cclxuLyoqXHJcbiAqIEEgZHJvcGRvd24gYWxsb3dpbmcgY2hhbmdpbmcgb2YgdGhlIGNvZGVjLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBGb3JjZUNvZGVjIHR5cGUuXHJcbiAqIEBjbGFzcyBGb3JjZUNvZGVjXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9yY2VDb2RlYyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9ICdGb3JjZSBDb2RlYyc7XHJcbiAgICBjb2RlYzogbnVtYmVyID0gQ29kZWMuQVVUT01BVElDO1xyXG4gICAgc2VsZWN0OiBTZWxlY3Q7XHJcbiAgICB0YWI6IFVJVGFiO1xyXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhYjogVUlUYWIsIHNuYWNrYmFyOiBTbmFja2Jhcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjb2RlYyddLCAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2RlYyA9IHJlc3VsdC5jb2RlYztcclxuXHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY29kZWM6IHNlbGYuY29kZWMgfSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50YWIuYWRkUm93KFxyXG4gICAgICAgICAgICBuZXcgVUlSb3coXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19yb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb2RlY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLkFVVE9NQVRJQ31cIj5BdXRvbWF0aWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5WUDl9XCI+VlA5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuSDI2NH1cIj5IMjY0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3RhZGlhcGx1c19idXR0b24tc21hbGxcIj5BcHBseTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgQ29kZWMuQVVUT01BVElDKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSByb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZGlhcGx1c19idXR0b24tc21hbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb2RlYyA9IHBhcnNlSW50KHNlbGYuc2VsZWN0LmdldCgpWzBdKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNuYWNrYmFyLmFjdGl2YXRlKCdSZWxvYWQgdGhlIHBhZ2UgdG8gc2VlIHlvdXIgY2hhbmdlcy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Quc2V0KHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yY2VDb2RlYy5zZXRDb2RlYyhzZWxmLmNvZGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIENvZGVjLkFVVE9NQVRJQyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLmNvZGVjKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb2RlYyhjb2RlYzogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc3dpdGNoIChjb2RlYykge1xyXG4gICAgICAgIGNhc2UgQ29kZWMuVlA5OlxyXG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIiwgJ3tcInZwOVwiOlwiRXh0ZXJuYWxEZWNvZGVyXCJ9Jyk7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIENvZGVjLkgyNjQ6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiLCAne1wiaDI2NFwiOlwiRXh0ZXJuYWxEZWNvZGVyXCIsIFwidnA5XCI6XCJsaWJ2cHhcIn0nKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgQ29kZWMuQVVUT01BVElDOlxyXG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIik7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIik7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29kZWMge1xyXG4gICAgc3RhdGljIEFVVE9NQVRJQyA9IDA7XHJcbiAgICBzdGF0aWMgVlA5ID0gMTtcclxuICAgIHN0YXRpYyBIMjY0ID0gMjtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0ZvcmNlUmVzb2x1dGlvbi5zY3NzJztcclxuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL1VJVGFiJztcclxuaW1wb3J0IHsgVUlSb3csIFVJUm93T3B0aW9ucyB9IGZyb20gJy4uL3VpL1VJUm93JztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcclxuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICcuLi91aS9TbmFja2Jhcic7XHJcblxyXG5jb25zdCBjaHJvbWUgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xyXG5cclxuLyoqXHJcbiAqIEEgZHJvcGRvd24gYWxsb3dpbmcgY2hhbmdpbmcgb2YgdGhlIGNvZGVjLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBGb3JjZUNvZGVjIHR5cGUuXHJcbiAqIEBjbGFzcyBGb3JjZUNvZGVjXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9yY2VSZXNvbHV0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ0ZvcmNlIFJlc29sdXRpb24nO1xyXG4gICAgcmVzb2x1dGlvbjogbnVtYmVyID0gUmVzb2x1dGlvbi5BVVRPTUFUSUM7XHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuICAgIHRhYjogVUlUYWI7XHJcbiAgICBzbmFja2JhcjogU25hY2tiYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiOiBVSVRhYiwgc25hY2tiYXI6IFNuYWNrYmFyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWIgPSB0YWI7XHJcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3Jlc29sdXRpb24nXSwgKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IHJlc3VsdC5yZXNvbHV0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyByZXNvbHV0aW9uOiBzZWxmLnJlc29sdXRpb24gfSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50YWIuYWRkUm93KFxyXG4gICAgICAgICAgICBuZXcgVUlSb3coXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19yb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyZXNvbHV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5BVVRPTUFUSUN9XCI+QXV0b21hdGljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5VSERfNEt9XCI+NEs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdGFkaWFwbHVzX2J1dHRvbi1zbWFsbFwiPkFwcGx5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIj5Ob3RlOiB0aGUgc2V0IHZhbHVlIGlzIHRoZSBtYXhpbXVtIHJlc29sdXRpb24gU3RhZGlhIHdpbGwgYXR0ZW1wdCB0byBhY2hpZXZlLiBJZiB5b3VyIGNvbXB1dGVyIGlzIG5vdCBjYXBhYmxlIG9mIHJlbmRlcmluZyB0aGUgcmVzb2x1dGlvbiBvciBpdCBpcyBub3QgYXZhaWxhYmxlIHdpdGggdGhlIGN1cnJlbnQgZGF0YSB1c2FnZSBvcHRpb24sIGl0IHdpbGwgbm90IGJlIGRpc3BsYXllZC48L3A+XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCArICctcm93JyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZTogKHJvdzpVSVJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIFJlc29sdXRpb24uQVVUT01BVElDKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc29sdXRpb24gPSBwYXJzZUludChzZWxmLnNlbGVjdC5nZXQoKVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNuYWNrYmFyLmFjdGl2YXRlKCdSZWxvYWQgdGhlIHBhZ2UgdG8gc2VlIHlvdXIgY2hhbmdlcy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQoc2VsZi5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIFJlc29sdXRpb24uQVVUT01BVElDKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYucmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIEZvcmNlUmVzb2x1dGlvbi5zZXRSZXNvbHV0aW9uKHNlbGYucmVzb2x1dGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRSZXNvbHV0aW9uKGNvZGVjOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGg7XHJcbiAgICAgICAgc3dpdGNoIChjb2RlYykge1xyXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uVUhEXzRLOlxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSAzODQwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjE2MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUmVzb2x1dGlvbi5BVVRPTUFUSUM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdhdmFpbFdpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnYXZhaWxIZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnd2lkdGgnLCB7IHZhbHVlOiAke3dpZHRofSB9KTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdoZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc29sdXRpb24ge1xyXG4gICAgc3RhdGljIEFVVE9NQVRJQyA9IDA7XHJcbiAgICBzdGF0aWMgVUhEXzRLID0gMTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2Nzcyc7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4uL0RhdGFiYXNlJztcclxuaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94U2hhcGUgfSBmcm9tICcuLi91aS9DaGVja2JveCc7XHJcblxyXG5jb25zdCB7IGNocm9tZSwgQXJyYXkgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpYnJhcnlGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgY29tcG9uZW50XHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9ICdMaWJyYXJ5IEZpbHRlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IG9mIGdhbWVzIGFuZCBnYW1lIGRhdGEgaW1wb3J0ZWQgZnJvbSB0aGUgRE9NXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUgeyp9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBnYW1lczogYW55ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbmFja2JhciB1c2VkIHRvIGRpc3BsYXkgbWVzc2FnZXMgd2hlbiBoaWRpbmcgYW5kIHNob3dpbmcgZ2FtZXNcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7U25hY2tiYXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzbmFja2JhcjogU25hY2tiYXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXIgYmFyIGFsbG93aW5nIGZvciBjb250cm9scyBvZiB0aGUgbGlicmFyeSBmaWx0ZXJcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBmaWx0ZXJCYXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGJveCB1c2VkIHRvIG9yZGVyIHRoZSBnYW1lc1xyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtTZWxlY3R9XHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbnQgZmlsdGVyaW5nIG9yZGVyXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge0ZpbHRlck9yZGVyfVxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb3JkZXI6IEZpbHRlck9yZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIGFsbCBnYW1lcyBiZSBzaG93biByZWdhcmRsZXNzIGlmIHRoZXlyZSBoaWRkZW4gb3Igbm90P1xyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgc2hvd0FsbDogYm9vbGVhbjtcclxuICAgIGNoZWNrYm94OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBkaXJlY3Rpb246IE9yZGVyRGlyZWN0aW9uO1xyXG5cclxuICAgIGdhbWVUaWxlczogTm9kZUxpc3Q7XHJcbiAgICBkYXRhYmFzZTogRGF0YWJhc2U7XHJcbiAgICB1dWlkTWFwOiBEYXRhYmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzbmFja2JhcjogU25hY2tiYXIsIGRhdGFiYXNlOiBEYXRhYmFzZSwgdXVpZE1hcDogRGF0YWJhc2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBJbXBvcnQgZGF0YWJhc2UgJiB1dWlkTWFwIGZyb20gaW5kZXguanNcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbXBvcnQgc25hY2tiYXIgZnJvbSBpbmRleC5qc1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBmaWx0ZXIgYmFyIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmZpbHRlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQmFyLmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGFyb3VuZCBldmVyeSBnYW1lIGFuZCBpbml0aWFsaXplcyB0aGUgZWxlbWVudHMgbmVjZXNzYXJ5IHRvIHNob3cgb3IgaGlkZSBpdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVBbGxXcmFwcGVycygpIHtcclxuICAgICAgICB0aGlzLmdldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aWxlIGFzIEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdyYXBwZXIoZWxlbWVudCwgdGhpcy5nZXRVVUlEKGVsZW1lbnQpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gdGhpcy5nYW1lVGlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGdhbWUgVVVJRCBmcm9tIGl0J3MganNsb2cgYXR0cmlidXRlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGlsZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGdldFVVSUQodGlsZTogRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB0aWxlXHJcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2pzbG9nJylcclxuICAgICAgICAgICAgLnNwbGl0KCc7ICcpWzFdXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHdyYXBwZXJFeGlzdHModXVpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy0nICsgdXVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIHRpbGUgZWxlbWVudCwgY3JlYXRlIGEgd3JhcHBlciBhcm91bmQgaXQgYW5kIGFuIGljb24gYWxsb3dpbmcgaXQgdG8gYmUgc2hvd24gb3IgaGlkZGVuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZ2FtZSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCB0aGUgZ2FtZSB1dWlkXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVXcmFwcGVyKGVsZW1lbnQ6IEVsZW1lbnQsIHV1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMud3JhcHBlckV4aXN0cyh1dWlkKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gdGhpcy5kYXRhYmFzZS5nZXRDb25uZWN0aW9uKClbJ2RhdGEnXTtcclxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnV1aWRNYXAuZ2V0Q29ubmVjdGlvbigpWyd1dWlkTWFwJ107XHJcbiAgICAgICAgY29uc3QgZW50cnkgPSBjb25uZWN0aW9uW21hcFt1dWlkXV07XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgd3JhcHBlclxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZ2FtZS11dWlkJywgdXVpZCk7XHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScsIGVudHJ5WzFdKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyJyk7XHJcbiAgICAgICAgd3JhcHBlci5pZCA9IHRoaXMuaWQgKyAnLScgKyB1dWlkO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGljb25cclxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicpO1xyXG4gICAgICAgIGljb24uaW5uZXJIVE1MID0gJ3Zpc2liaWxpdHknO1xyXG5cclxuICAgICAgICAvLyBXcmFwIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgZWxlbWVudCBhbmQgYWRkIHRoZSBpY29uIGJlZm9yZSBpdFxyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudCk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayB0aGUgc3RvcmFnZSBmb3IgdmlzaWJpbGl0eSwgaGlkZSB0aGUgZ2FtZSBpZiBib3RoICd2aXNpYmxlJyBhbmQgJ3Nob3dBbGwnIGlzIGZhbHNlXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVzLmhhc093blByb3BlcnR5KHV1aWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXNbdXVpZF0gPSB7IHZpc2libGU6IHRydWUgfTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUgJiYgIXRoaXMuc2hvd0FsbCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIGljb24gaW4gdGhlIHRvcCByaWdodCBjb3JuZXIgcmF0aGVyIHRoYW4gdGhlIHRvcCBsZWZ0IHVzaW5nIFxyXG4gICAgICAgIC8vIGEgbWFyZ2luICh1c2luZyB0aGUgJ2xlZnQnIGNzcyBhdHRyaWJ1dGUgaXMgbm90IHBvc3NpYmxlKVxyXG4gICAgICAgIGljb24uc3R5bGUubWFyZ2luTGVmdCA9IGVsZW1lbnQuY2xpZW50V2lkdGggLSBpY29uLmNsaWVudFdpZHRoICsgJ3B4JztcclxuICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGBjYWxjKDEwMCUgLSAke2VsZW1lbnQuY2xpZW50V2lkdGgvMn1weCkgJHtlbGVtZW50LmNsaWVudEhlaWdodC8yfXB4YDtcclxuXHJcbiAgICAgICAgLy8gV2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkIG9uXHJcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBnYW1lIGlzIHZpc2libGUsIHNldCBpdCB0byBoaWRkZW5cclxuICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIuYWN0aXZhdGUoJ0EgZ2FtZSBoYXMgYmVlbiBoaWRkZW4uJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7IC8vIE90aGVyd2lzZSBzZXQgaXQgdG8gc2hvd25cclxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIuYWN0aXZhdGUoJ0EgZ2FtZSBpcyBubyBsb25nZXIgaGlkZGVuLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBnYW1lJ3MgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhbWUod3JhcHBlciwgZWxlbWVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBhIGdhbWUncyB2aXNpYmlsaXR5LCBtYWtpbmcgc3VyZSBpdCdzIG9ubHkgc2hvd24gd2hlbiBpdCdzIHN1cHBvc2VkIHRvXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB3cmFwcGVyIFRoZSBnYW1lJ3Mgd3JhcHBlciwgY3JlYXRlZCBieSBbW2NyZWF0ZVdyYXBwZXJdXVxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0aWxlIFRoZSBnYW1lIHRpbGVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYW5pbWF0ZSBTaG91bGQgdGhlIGdhbWUgaGF2ZSBhbiBhbmltYXRlZCBjbG9zaW5nIGVmZmVjdD9cclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUdhbWUod3JhcHBlcjogRWxlbWVudCwgdGlsZTogRWxlbWVudCwgYW5pbWF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIEdldCB0aGUgZ2FtZSBVVUlEXHJcbiAgICAgICAgY29uc3QgdXVpZCA9IHRoaXMuZ2V0VVVJRCh0aWxlKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBnYW1lIGljb25cclxuICAgICAgICBjb25zdCBpY29uID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJyxcclxuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpc24ndCB2aXNpYmxlLi4uXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUpIHtcclxuICAgICAgICAgICAgLy8gLi4uYnV0IGFsbCBnYW1lcyBzaG91bGQgc3RpbGwgYmUgc2hvd25cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0FsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBpY29uIHRvIGRpc3BsYXkgdGhhdCBpdCdzIG5vdCB2aXNpYmxlIGJ1dCBzaG93biBhbnl3YXlzXHJcbiAgICAgICAgICAgICAgICBpY29uLmlubmVySFRNTCA9ICd2aXNpYmlsaXR5X29mZic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzbid0IGhpZGRlblxyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJywgJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIHsgLy8gT3RoZXJ3aXNlLi4uXHJcbiAgICAgICAgICAgICAgICAvLyAuLi5pZiB0aGUgaGlkaW5nIHNob3VsZCBiZSBhbmltYXRlZFxyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGYWRlIHRoZSBnYW1lIHRpbGUgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIDEgc2Vjb25kLCBoaWRlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIE90aGVyd2lzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgbm9ybWFsbHlcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gSWYgdGhlIGdhbWUgaXMgdmlzaWJsZVxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGljb24gc3RheXMgaW4gcGxhY2UgYW5kIGRvZXNuJ3QgZ2V0IHJlc2V0IGJhY2sgdG8gdGhlIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgICBpY29uLnN0eWxlLm1hcmdpbkxlZnQgPSB0aWxlLmNsaWVudFdpZHRoIC0gaWNvbi5jbGllbnRXaWR0aCArICdweCc7XHJcblxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGljb24gc2hvd3MgdGhhdCBpdCBpcyB2aXNpYmxlXHJcbiAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gJ3Zpc2liaWxpdHknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBhbGwgZ2FtZXMsIHNob3J0aGFuZCBmb3IgbG9vcGluZyB0aHJvdWdoIHRpbGVzIGFuZCB1cGRhdGluZyB0aGVtIGluZGl2aWR1YWxseVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUFsbEdhbWVzKCkge1xyXG4gICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHYW1lKHRpbGUucGFyZW50RWxlbWVudCwgdGlsZSBhcyBFbGVtZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIHRoZSBzdG9yZWQgZGF0YSBmcm9tIHRoZSBzeW5jaHJvbml6ZWQgY2hyb21lIHN0b3JhZ2UgKHN0b3JlZCBpbiB5b3VyIHVzZXIgZGF0YSlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC8vIENhbGxiYWNrIHRoYXQgaXMgcnVuIGFmdGVyIHRoZSBkYXRhIGhhcyBiZWVuIHJlYWRcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lcyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbJ2dhbWVzJywgJ3NvcnQtb3JkZXInLCAnc29ydC1kaXJlY3Rpb24nXSwgKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMgPSByZXN1bHQuZ2FtZXMgIT09IHVuZGVmaW5lZCA/IHJlc3VsdC5nYW1lcyA6IHt9O1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyID0gcmVzdWx0Wydzb3J0LW9yZGVyJ10gIT09IHVuZGVmaW5lZCA/IHJlc3VsdFsnc29ydC1vcmRlciddIDogRmlsdGVyT3JkZXIuUkVDRU5UO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHJlc3VsdFsnc29ydC1kaXJlY3Rpb24nXSAhPT0gdW5kZWZpbmVkID8gcmVzdWx0Wydzb3J0LWRpcmVjdGlvbiddIDogT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgdG8gdGhlIHN5bmNocm9uaXplZCBjaHJvbWUgc3RvcmFnZSAoc3RvcmVkIGluIHlvdXIgdXNlciBkYXRhKVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLy8gQ2FsbGJhY2sgdGhhdCBpcyBydW4gYWZ0ZXIgdGhlIGRhdGEgaGFzIGJlZW4gd3JpdHRlblxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIHNldFN0b3JhZ2UoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGdhbWVzOiB0aGlzLmdhbWVzLCAnc29ydC1vcmRlcic6IHRoaXMub3JkZXIsICdzb3J0LWRpcmVjdGlvbic6IHRoaXMuZGlyZWN0aW9uIH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWRcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXZlbnRzRXhpc3Q6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSB2YXJpZXR5IG9mIGV2ZW50cyB0byB0aGUgZmlsdGVyIGJhclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGFkZEZpbHRlckJhckV2ZW50cygpIHtcclxuICAgICAgICAvLyBXaGVuIHRoZSBvcmRlciBpcyBjaGFuZ2VkLCBzZXQgaXQgaW4gdGhlIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLnNlbGVjdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcmRlciA9IHBhcnNlSW50KHRoaXMuc2VsZWN0LmdldCgpWzBdKSBhcyBGaWx0ZXJPcmRlcjtcclxuICAgICAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFdoZW4gdGhlIHNob3cgYWxsIGNoZWNrYm94IGlzIGNsaWNrZWQsIHRvZ2dsZSB0aGUgc2hvd0FsbCB2YXJpYWJsZSBhbmQgdXBkYXRlIHRoZSBnYW1lc1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbCA9ICh0aGlzLmNoZWNrYm94IGFzIGFueSkuY2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGxHYW1lcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJyk7XHJcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBzb3J0IGRpcmVjdGlvblxyXG4gICAgICAgIGRpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50c0V4aXN0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3J0RGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJyk7XHJcbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORykge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkRFU0NFTkRJTkc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVzY2VuZGluZycpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGVzY2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgc3RvcHBlZCwgZGVzdHJveXMgbmVjZXNzYXJ5IHBhcnRzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0R2FtZXMoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IChBcnJheS5mcm9tKHRoaXMuZ2FtZVRpbGVzKSBhcyBFbGVtZW50W10pLm1hcChlID0+IGUucGFyZW50RWxlbWVudCk7IC8vIEdldCBhbGwgd3JhcHBlcnMgYXMgYW4gYXJyYXlcclxuICAgICAgICBhcnIgPSBhcnIuc29ydChGaWx0ZXJPcmRlci5nZXRTb3J0ZXIodGhpcy5vcmRlcikpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HKSB7XHJcbiAgICAgICAgICAgIGFyciA9IGFyci5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucHJlcGVuZChlbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICBpZihVdGlsLmlzSW5Ib21lKCkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcuQ1ZWWGZjLllZeTNaYicpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlkID0gdGhpcy5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmFyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLWV4dGVuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7RmlsdGVyT3JkZXIuUkVDRU5UfVwiPlJlY2VudGx5IFBsYXllZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtGaWx0ZXJPcmRlci5BTFBIQUJFVElDQUx9XCI+QWxwaGFiZXRpY2FsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJBTkRPTX1cIj5SYW5kb208L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0nJHt0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJ30nIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtZXh0ZW5kZWQgYXNjZW5kaW5nIHN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qge3ByZXR0eSwgY2hlY2tib3h9ID0gbmV3IENoZWNrYm94KCdTaG93IGhpZGRlbicpLnNldEJpZ2dlcih0cnVlKS5zZXRTaGFwZShDaGVja2JveFNoYXBlLkNVUlZFRCkuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIuYXBwZW5kQ2hpbGQocHJldHR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3ggPSBjaGVja2JveDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yQWxsKCcuR3FMaTRkJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJCYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWxsV3JhcHBlcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdHlsZSB0aGUgY3VzdG9tIHNlbGVjdCBib3ggaW4gdGhlIGZpbHRlciBiYXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgICAgICAgICBGaWx0ZXJPcmRlci5SRUNFTlQsXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnNldCh0aGlzLm9yZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZpbHRlckJhckV2ZW50cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJPcmRlciB7XHJcbiAgICBzdGF0aWMgUkVDRU5UID0gMDtcclxuICAgIHN0YXRpYyBBTFBIQUJFVElDQUwgPSAxO1xyXG4gICAgc3RhdGljIEFMUEhBQkVUSUNBTF9SRVZFUlNFID0gMjtcclxuICAgIHN0YXRpYyBSQU5ET00gPSAzO1xyXG5cclxuICAgIHN0YXRpYyBnZXRTb3J0ZXIob3JkZXI6IEZpbHRlck9yZGVyKSB7XHJcbiAgICAgICAgc3dpdGNoKG9yZGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRUNFTlQ6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydFJlY2VudDtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTFBIQUJFVElDQUw6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEFscGhhYmV0aWNhbDtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SQU5ET006IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydFJhbmRvbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJlY2VudChhOmFueSwgYjphbnkpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzb3J0QWxwaGFiZXRpY2FsKGE6YW55LCBiOmFueSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG5cclxuICAgICAgICBpZihuYW1lQSA9PT0gdW5kZWZpbmVkIHx8IG5hbWVCID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lQik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJhbmRvbShhOmFueSwgYjphbnkpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMikgLSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlckRpcmVjdGlvbiB7XHJcbiAgICBBU0NFTkRJTkcsXHJcbiAgICBERVNDRU5ESU5HXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgeyBVSUJ1dHRvbiB9IGZyb20gJy4uL3VpL1VJQnV0dG9uJztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS9VSUNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvTmV0d29ya01vbml0b3Iuc2Nzcyc7XHJcblxyXG4vLyBJbXBvcnQgdGhlIE1vbml0b3IgcnVubmFibGUgYXMgYSByYXcgc3RyaW5nXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHJ1bm5hYmxlIGZyb20gJyFyYXctbG9hZGVyIS4uL01vbml0b3JSdW5uYWJsZSc7XHJcbmltcG9ydCB7IENoZWNrYm94LCBDaGVja2JveFNoYXBlLCBDaGVja2JveEFuaW1hdGlvbiB9IGZyb20gJy4uL3VpL0NoZWNrYm94JztcclxuXHJcbmNvbnN0IHsgY2hyb21lLCBSVENQZWVyQ29ubmVjdGlvbiB9ID0gKHdpbmRvdyBhcyBhbnkpO1xyXG5cclxuLyoqXHJcbiAqIEEgdGFiIGFuZCBidXR0b24gZGlzcGxheWVkIGluIHRoZSBTdGFkaWEgTWVudS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgVUlUYWIgdHlwZS5cclxuICogQGNsYXNzIFVJVGFiXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmV0d29ya01vbml0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnTmV0d29yayBNb25pdG9yJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YWIgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgdGFiRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbW9uaXRvciBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQ29tcG9uZW50XV0gdXNlZCB0byBkaXNwbGF5IHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudDogVUlDb21wb25lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gb3BlbiB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBidXR0b246IFVJQnV0dG9uO1xyXG5cclxuICAgIHBlZXJDb25uZWN0aW9uczogYW55W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrLW1vbml0b3InKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHZpc2libGU6IGFueSA9IHtcclxuICAgICAgICAndGltZSc6IHRydWUsXHJcbiAgICAgICAgJ3Jlc29sdXRpb24nOiB0cnVlLFxyXG4gICAgICAgICdGUFMnOiB0cnVlLFxyXG4gICAgICAgICdsYXRlbmN5JzogdHJ1ZSxcclxuICAgICAgICAnY29kZWMnOiB0cnVlLFxyXG4gICAgICAgICd0cmFmZmljJzogdHJ1ZSxcclxuICAgICAgICAnY3VycmVudC10cmFmZmljJzogdHJ1ZSxcclxuICAgICAgICAnYXZlcmFnZS10cmFmZmljJzogdHJ1ZSxcclxuICAgICAgICAncGFja2V0cy1sb3N0JzogdHJ1ZSxcclxuICAgICAgICAnYXZlcmFnZS1wYWNrZXQtbG9zcyc6IHRydWUsXHJcbiAgICAgICAgJ2ppdHRlci1idWZmZXInOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIG9yZGVyTWFwOiBhbnkgPSBbXHJcbiAgICAgICAgJ3RpbWUnLFxyXG4gICAgICAgICdyZXNvbHV0aW9uJyxcclxuICAgICAgICAnRlBTJyxcclxuICAgICAgICAnbGF0ZW5jeScsXHJcbiAgICAgICAgJ2NvZGVjJyxcclxuICAgICAgICAndHJhZmZpYycsXHJcbiAgICAgICAgJ2N1cnJlbnQtdHJhZmZpYycsXHJcbiAgICAgICAgJ2F2ZXJhZ2UtdHJhZmZpYycsXHJcbiAgICAgICAgJ3BhY2tldHMtbG9zdCcsXHJcbiAgICAgICAgJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnLFxyXG4gICAgICAgICdqaXR0ZXItYnVmZmVyJ1xyXG4gICAgXVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgVUlDb21wb25lbnQoXHJcbiAgICAgICAgICAgICdOZXR3b3JrIE1vbml0b3InLFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J0NUdkRYZCBRQUF5V2QgRmp5MDVkIGl2V1VoYyBRU0RIeWMgcnBnWnpjIFJreUgxZSBzdGFkaWFwbHVzX2J1dHRvbiBzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRvZ2dsZS1idXR0b24nIGlkPScke3RoaXMuaWR9LXRvZ2dsZWJ1dHRvbic+TmV0d29yayBNb25pdG9yPC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGg2PlZpc2libGUgU3RhdHM8L2g2PlxyXG4gICAgICAgICAgICA8dWwgaWQ9JyR7dGhpcy5pZH0tdmlzaWJsZWxpc3QnPjwvdWw+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdGFiJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy9uZXR3b3JrLW1vbml0b3Iuc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgJ01vbml0b3InLCB0aGlzLmlkICsgJy1idXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCgpID0+IHsgdGhpcy51cGRhdGVWaXNpYmxlKCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRSdW5uYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmRlc2FuZGJveChydW5uYWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vbml0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVzYW5kYm94KCdTdGFkaWFQbHVzTW9uaXRvci5zdGFydCgpJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnN0b3AoKScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydtb25pdG9yU3RhdHNWaXNpYmxlJ10sIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQubW9uaXRvclN0YXRzVmlzaWJsZSlcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHJlc3VsdC5tb25pdG9yU3RhdHNWaXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBtb25pdG9yU3RhdHNWaXNpYmxlOiBzZWxmLnZpc2libGUgfSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0UnVubmFibGUoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVVJKCk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGVuYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yID0gbnVsbCcpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpc2libGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZXNhbmRib3goYFN0YWRpYVBsdXNNb25pdG9yLnNldFZpc2libGUoJHtKU09OLnN0cmluZ2lmeSh0aGlzLnZpc2libGUpfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIG1ha2VzIHN1cmUgdG8gY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZSBtZW51IGlzIG9wZW4gYWxyZWFkeS5cclxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkgJiYgVXRpbC5pc0luR2FtZSgpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbk9wZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzYW5kYm94KCdTdGFkaWFQbHVzTW9uaXRvci5zZXRFZGl0YWJsZSh0cnVlKScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQub25DbG9zZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnNldEVkaXRhYmxlKGZhbHNlKScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy12aXNpYmxlbGlzdCcpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBvZiB0aGlzLm9yZGVyTWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0ga2V5LnJlcGxhY2UoLy0vZywgJyAnKS5zcGxpdCgnICcpLm1hcCgobmFtZTpzdHJpbmcpID0+IG5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKSkuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBib29sZWFuID0gdGhpcy52aXNpYmxlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwcmV0dHksIGNoZWNrYm94fSA9IG5ldyBDaGVja2JveChuYW1lKS5zZXRCaWdnZXIodHJ1ZSkuc2V0QW5pbWF0aW9uKENoZWNrYm94QW5pbWF0aW9uLlNNT09USCkuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV0dHkuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci1jaGVja2JveCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHByZXR0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZVtrZXldID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXRvZ2dsZWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgdGhpcy5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vbml0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicsIHRoaXMuYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFVdGlsLmlzSW5HYW1lKCkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keT4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb25pdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2FuZGJveChqYXZhc2NyaXB0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gamF2YXNjcmlwdDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuLi9EYXRhYmFzZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvUmF0aW5ncy5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlJhdGluZ3NcIjtcclxuXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHJhdGluZzogbnVtYmVyO1xyXG4gICAgZGF0YWJhc2U6IERhdGFiYXNlO1xyXG4gICAgdXVpZE1hcDogRGF0YWJhc2U7XHJcbiAgICBncmFjZUFtb3VudDogbnVtYmVyID0gMTA7XHJcbiAgICBtYXhTdGFycyA9IDU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YWJhc2U6IERhdGFiYXNlLCB1dWlkTWFwOiBEYXRhYmFzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcclxuICAgICAgICB0aGlzLnV1aWRNYXAgPSB1dWlkTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfcmF0aW5nJywgJ21hdGVyaWFsLWljb25zLWV4dGVuZGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VVVJRCgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24uaHJlZi5zdWJzdHJpbmcoJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vc3RvcmUvZGV0YWlscy8nLmxlbmd0aCwgJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vc3RvcmUvZGV0YWlscy8nLmxlbmd0aCArIDM2KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSYXRpbmcoKSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IHRoaXMuZ2V0VVVJRCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW3V1aWRdXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1yYXRpbmcnLCBlbnRyeVs2XSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhcnMocmF0aW5nOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBvdXRwdXRTdGFycyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDbGFtcHMgdGhlIHJhdGluZyB0byB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAxLFxyXG4gICAgICAgIC8vIHdoZXJlICgwICsgZ3JhY2VBbW91bnQpIGlzIDAgYW5kICgxMDAgLSBncmFjZUFtb3VudCkgaXMgMVxyXG4gICAgICAgIGNvbnN0IGNsYW1wZWRSID0gKHJhdGluZyAvIDEwMCkgKiAoMSArICh0aGlzLmdyYWNlQW1vdW50IC8gMTAwKSAqIDIpIC0gKHRoaXMuZ3JhY2VBbW91bnQgLyAxMDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgciA9IGNsYW1wZWRSOyBpIDwgdGhpcy5tYXhTdGFyczsgaSArPSAxLCByIC09IDEgLyB0aGlzLm1heFN0YXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChyID49IDEgLyB0aGlzLm1heFN0YXJzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRTdGFycy5wdXNoKCdzdGFyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAociA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRTdGFycy5wdXNoKCdzdGFyX2hhbGYnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXJfb3V0bGluZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0U3RhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGVuYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgaWYoVXRpbC5pc0luU3RvcmVEZXRhaWwoKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSYXRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhdGluZyA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmF0aW5nJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnMgPSB0aGlzLmdldFN0YXJzKHJhdGluZyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyYXRpbmcgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5aekJKU2IgPiAuQk1VbmZkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5leHRTaWJsaW5nID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCwgbmV4dFNpYmxpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3N0YXJzLmpvaW4oJyAnKX1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YWRpYXBsdXNfcmF0aW5nLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmF0aW5nfSAvIDEwMCAoTWV0YWNyaXRpYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL1N0b3JlRmlsdGVyLnNjc3MnO1xyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4uL0RhdGFiYXNlJztcclxuXHJcbi8qKlxyXG4gKiBBIHNpbXBsZSBjbG9jayBkaXNwbGF5ZWQgaW4gdGhlIFN0YWRpYSBNZW51LlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBDbG9jayB0eXBlLlxyXG4gKiBAY2xhc3MgQ2xvY2tcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlN0b3JlIEZpbHRlclwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNsb2NrIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZ2FtZVRlbXBsYXRlOiBIVE1MRWxlbWVudDtcclxuICAgIGRhdGFiYXNlOiBEYXRhYmFzZTtcclxuICAgIHV1aWRNYXA6IERhdGFiYXNlO1xyXG4gICAgZ2FtZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIHNlYXJjaEZpZWxkOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRGF0YWJhc2UsIHV1aWRNYXA6IERhdGFiYXNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgPHNwYW4+LCBhZGRzIHRoZSByaWdodCBjbGFzc2VzLCBhbmQgc3RvcmVzIGl0IGluIFtAbGluayAjZWxlbWVudF1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gdGhpcy5kYXRhYmFzZS5nZXRDb25uZWN0aW9uKClbJ2RhdGEnXTtcclxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnV1aWRNYXAuZ2V0Q29ubmVjdGlvbigpWyd1dWlkTWFwJ107XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3N0b3JlZmlsdGVyJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdiYXInPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwiJHtjb25uZWN0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbm5lY3Rpb24ubGVuZ3RoKV1bMV19Li4uXCIgaWQ9JyR7dGhpcy5pZH0tc2VhcmNoJz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dhbWVzJyBpZD0nJHt0aGlzLmlkfS1nYW1lcyc+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gY29ubmVjdGlvblttYXBba2V5XV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZScpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2xvcmVtZmxpY2tyLmNvbS82NDAvMzYwJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RldGFpbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPSduYW1lJz5Mb3JlbSBJcHN1bTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3N0YWRpYXBsdXNfbXV0ZWQgdGFncyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCBrZXkpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgZW50cnlbMV0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10YWdzJywgZW50cnlbMl0pO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIGVudHJ5WzBdLm1hdGNoKC8oaHR0cHM6XFwvXFwvc3RhZGlhLmdvb2dsZS5jb21cXC9zdG9yZVxcL2RldGFpbHNcXC9bMC05YS16L10rKS9nKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWltZycsICdodHRwczovL3N0YWRpYWdhbWVkYi5jb20vJyArIGVudHJ5WzBdLm1hdGNoKC8oaW1hZ2VzXFwvcG9zdGVyc1xcL1thLXowLTlfLi1dKy5wbmcpL2cpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2goKHRoaXMuc2VhcmNoRmllbGQgYXMgYW55KS52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmdhbWVzLmZvckVhY2goKGdhbWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBnYW1lLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgcXVlcnkubGVuZ3RoID4gMCAmJiBuYW1lLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGNsb2NrIHdoZW4gaXQncyB2aXNpYmxlXHJcbiAgICAgICAgaWYoVXRpbC5pc0luU3RvcmUoKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcubldtdExkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY29udGFpbmVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctZ2FtZXMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWcnKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsPi5uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IGdhbWUucXVlcnlTZWxlY3RvcignLmRldGFpbD4udGFncycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3MuaW5uZXJIVE1MID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFncycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy1zZWFyY2gnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS9VSUNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvVUlUYWIuc2Nzcyc7XHJcblxyXG5jb25zdCBjaHJvbWU6IGFueSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSB0YWIgYW5kIGJ1dHRvbiBkaXNwbGF5ZWQgaW4gdGhlIFN0YWRpYSBNZW51LlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBVSVRhYiB0eXBlLlxyXG4gKiBAY2xhc3MgVUlUYWJcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVSVRhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9ICdVSSBUYWInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhYiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQ29tcG9uZW50XV0gdXNlZCB0byBkaXNwbGF5IHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudDogVUlDb21wb25lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gb3BlbiB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBidXR0b246IFVJQnV0dG9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYW1vdW50IG9mIHJvd3MsIGVhY2ggY29udGFpbmluZyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICByb3dzOiBVSVJvd1tdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgZnVuIE1PVEQgbWVzc2FnZXMgYWRkZWQgdG8gdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgbW90ZExpc3Q6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICc8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2Vtb2ppcy82MzYyMjc4NjQwNzY3NDY3NzIucG5nP3Y9MVwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7IHdpZHRoOiAyNHB4XCI+JyxcclxuICAgICAgICBcIkRvbid0IGxvb2sgaGVyZSwgbG9vayBiZWxvdyFcIixcclxuICAgICAgICAnUmVhbGl0eSBjYW4gYmUgd2hhdGV2ZXIgSSB3YW50LicsXHJcbiAgICAgICAgJ0lmIHlvdSBhc2sgbmljZWx5LCBTdGFkaWEgbWlnaHQgZXZlbiBkbyB5b3VyIGxhdW5kcnkgZm9yIHlvdSEnLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBhc2tpbmcgY3VzdG9tZXIgc3VwcG9ydD8nLFxyXG4gICAgICAgICdGb2xsb3cgdS9tYWZyYW5zIG9uIFJlZGRpdCEnLFxyXG4gICAgICAgICdTdGFkaWErLCBsaWtlIEdvb2dsZSsgYnV0IHN0aWxsIGFsaXZlLicsXHJcbiAgICAgICAgJ1N0YWRpYSBpcyBET0EsIGJlbGlldmUgbWUuJyxcclxuICAgICAgICAnR2V0IGEgbG9hZCBvZiB0aGlzIGd1eSwgdXNpbmcgY2hyb21lIGV4dGVuc2lvbnMgdG8gaW1wcm92ZSBoaXMgU3RhZGlhIGV4cGVyaWVuY2UuJyxcclxuICAgICAgICBcIkknbSB0ZWxsaW5nIHlvdSwgZG9uJ3QgdHJ1c3QgdGhhdCBndXkuIFlvdSBrbm93LCB0aGUgZ3V5LlwiLFxyXG4gICAgICAgICdTaG91dG91dCB0byBDaHJpcyBhbmQgR3JhY2UhJyxcclxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgU3BsaXRsaW5ncyB5ZXQ/JyxcclxuICAgICAgICAnQWx3YXlzIGNoZWNrIHRoZSByYXRpbmdzIGJlZm9yZSB5b3UgYnV5IGEgbmV3IGdhbWUuJyxcclxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgR2VGb3JjZSBOb3c/JyxcclxuICAgICAgICAnQSBob3QgZG9nIGlzIGRlZmluaXRlbHkgbm90IGEgc2FuZHdpY2guJyxcclxuICAgICAgICAnSWRrIGFib3V0IHlvdSwgYnV0IEkgcmVhbGx5IHdhbnQgb25lIG9mIHRob3NlIGZhbmN5IHNtYXJ0IHRvaWxldHMuJyxcclxuICAgICAgICAnQ2hyaXMgaXMgdHlwaW5nIGd1eXMhIScsXHJcbiAgICAgICAgJ0RvZXMgYW55b25lIGhhdmUgYSBidWRkeSBwYXNzIEkgY291bGQgYm9ycm93PycsXHJcbiAgICAgICAgJ0kgcGFpZCAkMTM5IGZvciB0aGlzPycsXHJcbiAgICAgICAgJ0lzIEZvcnRuaXRlIG9uIFN0YWRpYSB5ZXQ/JyxcclxuICAgICAgICAndS9iYWNvbnJ1bGVzIHdhcyB0aGUgZmlyc3QgdG8gc2VlIDRrIScsXHJcbiAgICAgICAgJ1NvIGRpZCB0aGUgcGVyc29uIHRoYXQgbWFkZSB0aGUgc3RhZGlhKyBleHRlbnNpb24gZ2l2ZSB1cCBvbiBzdGFkaWE/JyxcclxuICAgICAgICAnSXRcXCdzIGxpa2UgR0ZOLCBidXQgd2l0aG91dCBhbnkgcHVsbGVkIGdhbWVzLicsXHJcbiAgICAgICAgJ0xvbmcgbGl2ZSBHZWZvcmNlIE5vdysnLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFtbVUlDb21wb25lbnRdXSBhbmQgYSBbW1VJQnV0dG9uXV1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBVSUNvbXBvbmVudChcclxuICAgICAgICAgICAgJ1N0YWRpYSsnLFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICA8aSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW07IG1hcmdpbi1ib3R0b206IDVyZW07IGRpc3BsYXk6IGJsb2NrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdGRMaXN0W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tb3RkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3N0YWRpYXBsdXMuc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgJ1N0YWRpYSsnLCB0aGlzLmlkICsgJy1idXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGVuZCBhbGwgcm93cyB0aGF0IGRvbid0IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVJvd3MocmVsb2FkPzogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICBpZighcm93LmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKHRoaXMuY29tcG9uZW50LCBpID4gMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihyZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJvdy5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbG9hZCBhbGwgcm93c1xyXG4gICAgICovXHJcbiAgICByZWxvYWRSb3dzKCkge1xyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiByb3cucmVsb2FkKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgcm93IHRvIHRoZSBsaXN0LlxyXG4gICAgICovXHJcbiAgICBhZGRSb3cocm93OiBVSVJvdykge1xyXG4gICAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBhbmQgdW5sb2FkIGFsbCByb3dzLlxyXG4gICAgICovXHJcbiAgICBjbGVhclJvd3MoKSB7XHJcbiAgICAgICAgZm9yKGNvbnN0IHJvdyBvZiB0aGlzLnJvd3MpIHtcclxuICAgICAgICAgICAgcm93LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGVuYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgbWFrZXMgc3VyZSB0byBjcmVhdGUgY29tcG9uZW50cyBpZiB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Nsb2NrLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRm9yY2VDb2RlYy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlUmVzb2x1dGlvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xpYnJhcnlGaWx0ZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9OZXR3b3JrTW9uaXRvci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JhdGluZ3Muc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdG9yZUZpbHRlci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1VJVGFiLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0dsb2JhbC5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi9Db21wb25lbnRMb2FkZXInO1xyXG5pbXBvcnQgeyBDbG9jayB9IGZyb20gJy4vY29tcG9uZW50cy9DbG9jaydcclxuaW1wb3J0IHsgVUlUYWIgfSBmcm9tICcuL2NvbXBvbmVudHMvVUlUYWInXHJcbmltcG9ydCB7IEZvcmNlQ29kZWMgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9yY2VDb2RlYydcclxuaW1wb3J0IHsgRm9yY2VSZXNvbHV0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcmNlUmVzb2x1dGlvbidcclxuaW1wb3J0IHsgTmV0d29ya01vbml0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvTmV0d29ya01vbml0b3InO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4vdWkvU25hY2tiYXInO1xyXG5pbXBvcnQgeyBMaWJyYXJ5RmlsdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0xpYnJhcnlGaWx0ZXInO1xyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4vRGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBTdG9yZUZpbHRlciB9IGZyb20gJy4vY29tcG9uZW50cy9TdG9yZUZpbHRlcic7XHJcbmltcG9ydCB7IFJhdGluZ3MgfSBmcm9tICcuL2NvbXBvbmVudHMvUmF0aW5ncyc7XHJcblxyXG5jb25zdCBsb2FkZXIgPSBuZXcgQ29tcG9uZW50TG9hZGVyKCk7XHJcbmNvbnN0IHNuYWNrYmFyID0gbmV3IFNuYWNrYmFyKCk7XHJcbmNvbnN0IHRhYiA9IG5ldyBVSVRhYigpO1xyXG5cclxuY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL2dhbWVkYi5qc29uJyk7XHJcbmNvbnN0IHV1aWRNYXAgPSBuZXcgRGF0YWJhc2UoJ2h0dHBzOi8vc3RhZGlhZ2FtZWRiLmNvbS9kYXRhL3V1aWRtYXAuanNvbicpO1xyXG5kYXRhYmFzZS5jb25uZWN0KCk7XHJcbnV1aWRNYXAuY29ubmVjdCgpO1xyXG5cclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBDbG9jaygpKTtcclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBMaWJyYXJ5RmlsdGVyKHNuYWNrYmFyLCBkYXRhYmFzZSwgdXVpZE1hcCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlQ29kZWModGFiLCBzbmFja2JhcikpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlUmVzb2x1dGlvbih0YWIsIHNuYWNrYmFyKSk7XHJcbmxvYWRlci5yZWdpc3Rlcih0YWIpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IE5ldHdvcmtNb25pdG9yKCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IFN0b3JlRmlsdGVyKGRhdGFiYXNlLCB1dWlkTWFwKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgUmF0aW5ncyhkYXRhYmFzZSwgdXVpZE1hcCkpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBVdGlsLmxvYWQoKTtcclxuICAgIHNuYWNrYmFyLmNyZWF0ZSgpO1xyXG4gICAgbG9hZGVyLnN0YXJ0KCk7XHJcbn0pIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HbG9iYWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvcHJldHR5LWNoZWNrYm94L3NyYy9wcmV0dHktY2hlY2tib3guc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3gge1xyXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzaGFwZTogc3RyaW5nID0gQ2hlY2tib3hTaGFwZS5ERUZBVUxUO1xyXG4gICAgcHJpdmF0ZSBzdHlsZTogc3RyaW5nID0gQ2hlY2tib3hTdHlsZS5ERUZBVUxUO1xyXG4gICAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaWNvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgYmlnZ2VyOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2hhcGUoc2hhcGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0U3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEJvcmRlcihib3JkZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmJvcmRlciA9IGJvcmRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0SWNvbihpY29uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJpZ2dlcihiaWdnZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmJpZ2dlciA9IGJpZ2dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZCgpIHtcclxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIG1haW4gY2xhc3Nlc1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJldHR5JywgJ3AtZGVmYXVsdCcpO1xyXG5cclxuICAgICAgICAvLyBJZiBzdHlsZSBpcyBub3QgZGVmYXVsdCwgYWRkIHN0eWxlXHJcbiAgICAgICAgaWYodGhpcy5zaGFwZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zaGFwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBzdHlsZSBpcyBub3QgZGVmYXVsdCwgYWRkIHN0eWxlXHJcbiAgICAgICAgaWYodGhpcy5zdHlsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhbmltYXRlZCwgYWRkIGFuaW1hdGlvblxyXG4gICAgICAgIGlmKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgYmlnZ2VyXHJcbiAgICAgICAgaWYodGhpcy5iaWdnZXIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwLWJpZ2dlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IGJvcmRlclxyXG4gICAgICAgIGlmKCF0aGlzLmJvcmRlcikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3AtcGxhaW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBjaGVja2JveCBpbnB1dFxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBzdGF0ZSBkaXZcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN0YXRlLmNsYXNzTGlzdC5hZGQoJ3N0YXRlJyk7XHJcblxyXG4gICAgICAgIC8vIElmIGNvbG9yZWQsIGFkZCBjb2xvclxyXG4gICAgICAgIGlmKHRoaXMuY29sb3IpIHtcclxuICAgICAgICAgICAgc3RhdGUuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGhhcyBpY29uLCBhZGQgaWNvblxyXG4gICAgICAgIGlmKHRoaXMuaWNvbikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3AtaWNvbicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1leHRlbmRlZCcpO1xyXG4gICAgICAgICAgICBpY29uLmlubmVySFRNTCA9IHRoaXMuaWNvbjtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGxhYmVsXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IHRoaXMubGFiZWw7XHJcbiAgICAgICAgc3RhdGUuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN0YXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtwcmV0dHk6IGVsZW1lbnQsIGNoZWNrYm94fTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94U2hhcGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBDVVJWRUQ6IHN0cmluZyA9ICdwLWN1cnZlJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUk9VTkQ6IHN0cmluZyA9ICdwLXJvdW5kJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94U3R5bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBGSUxMOiBzdHJpbmcgPSAncC1maWxsJztcclxuICAgIHB1YmxpYyBzdGF0aWMgVEhJQ0s6IHN0cmluZyA9ICdwLXRoaWNrJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29sb3Ige1xyXG4gICAgcHVibGljIHN0YXRpYyBCTFVFOiBzdHJpbmcgPSAncC1wcmltYXJ5JztcclxuICAgIHB1YmxpYyBzdGF0aWMgR1JFRU46IHN0cmluZyA9ICdwLXN1Y2Nlc3MnO1xyXG4gICAgcHVibGljIHN0YXRpYyBZRUxMT1c6IHN0cmluZyA9ICdwLXdhcm5pbmcnO1xyXG4gICAgcHVibGljIHN0YXRpYyBDWUFOOiBzdHJpbmcgPSAncC1pbmZvJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUkVEOiBzdHJpbmcgPSAncC1kYW5nZXInO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hBbmltYXRpb24ge1xyXG4gICAgcHVibGljIHN0YXRpYyBTTU9PVEg6IHN0cmluZyA9ICdwLXNtb290aCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEpFTExZOiBzdHJpbmcgPSAncC1qZWxseSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRBREE6IHN0cmluZyA9ICdwLXRhZGEnO1xyXG4gICAgcHVibGljIHN0YXRpYyBST1RBVEU6IHN0cmluZyA9ICdwLXJvdGF0ZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBVTFNFOiBzdHJpbmcgPSAncC1wdWxzZSc7XHJcbn0iLCJpbXBvcnQgU2xpbVNlbGVjdCBmcm9tICdzbGltLXNlbGVjdCc7XHJcbmltcG9ydCAnc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3VpL3N0eWxlcy9TZWxlY3Quc2NzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Qge1xyXG4gICAgc2xpbXNlbGVjdDogU2xpbVNlbGVjdDtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgcGxhY2Vob2xkZXI/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19kcm9wZG93bicpO1xyXG5cclxuICAgICAgICAvKiogXHJcbiAgICAgICAgICogU2xpbXNlbGVjdCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIGVsZW1lbnRzL2NvbnRhaW5lcnMgXHJcbiAgICAgICAgICogaGF2ZSBiZWVuIGRlbGV0ZWQgd2l0aG91dCBwcm9wZXJseSBiZWluZyBkZXN0cm95ZWQuIEFzIFN0YWRpYVxyXG4gICAgICAgICAqIHJ1bnMgaW4gYSB2aXJ0dWFsIERPTSwgd2UgaGF2ZSBubyBjb250cm9sIG9mIHdoZW4gdGhlIERPTSBjaGFuZ2VzXHJcbiAgICAgICAgICogdGhlcmVmb3JlIHdlIGNhbid0IHNvbHZlIGl0IGluIGEgcHJvcGVyIHdheS5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBMZXQncyBqdXN0IGhvcGUgZ2FyYmFnZSBjb2xsZWN0aW9uIHRha2VzIGNhcmUgb2YgaXQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0ID0gbmV3IFNsaW1TZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3IpIHt9IFxyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbGltc2VsZWN0LnNlbGVjdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KC4uLml0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIGlmKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IGluIGNhc2Ugc2xpbXNlbGVjdC5zZXQgaXMgZmFzdGVyXHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXQoaXRlbXNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldERhdGEoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VhcmNoKHF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2xpbXNlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFkaWFwbHVzX2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9zdHlsZXMvU25hY2tiYXIuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU25hY2tiYXIge1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGxhYmVsOiBFbGVtZW50O1xyXG4gICAgY2xvc2VCdXR0b246IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyJyk7XHJcblxyXG4gICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3NuYWNrYmFyLWxhYmVsJyk7XHJcblxyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtZXh0ZW5kZWQnLCAnc3RhZGlhcGx1c19zbmFja2Jhci1jbG9zZScpO1xyXG5cclxuICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICBzZWxmLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsKTtcclxuICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNsb3NlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5pbm5lckhUTUwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9LCA1MDAwKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVUlCdXR0b25Db250YWluZXIgfSBmcm9tIFwiLi9VSUJ1dHRvbkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGNvbnRhaW5lcjogVUlCdXR0b25Db250YWluZXI7XHJcbiAgICBidXR0b246IEVsZW1lbnQ7XHJcblxyXG4gICAgc3RhdGljIGJ1dHRvbkNvbnRhaW5lcnM6IFVJQnV0dG9uQ29udGFpbmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHlmbGJiXCIganNuYW1lPVwiclpIRVNkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiS0VhSG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlg1cGVvZVwiIGpzbmFtZT1cInBZRmhVXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ4ZHVveWZcIiBzcmM9XCIke2ljb259XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FTSlZcIj4ke3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUHlmMWJiJywgJ3N0YWRpYXBsdXNfdWktYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ0NUdkRYZCcsICdRQUF5V2QnLCAnUGpwYWMnLCAnemNNWWQnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGZvcihjb25zdCBjb250YWluZXIgb2YgVUlCdXR0b24uYnV0dG9uQ29udGFpbmVycykge1xyXG4gICAgICAgICAgICBpZihjb250YWluZXIuYnV0dG9ucy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jb250YWluZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBVSUJ1dHRvbkNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBVSUJ1dHRvbi5idXR0b25Db250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRCdXR0b24odGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSAhPT0gbnVsbDtcclxuICAgIH0gXHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQnV0dG9uKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSBcIi4vVUlCdXR0b25cIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlCdXR0b25Db250YWluZXIge1xyXG4gICAgYnV0dG9uczogVUlCdXR0b25bXSA9IFtdO1xyXG4gICAgY29udGFpbmVyOiBFbGVtZW50O1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB3cmFwcGVyOiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSAnYnV0dG9uLWNvbnRhaW5lci0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVFowQk4nKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdaZ1VNbycsICdzdGFkaWFwbHVzX3VpLWJ0bi13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdFMFprOWInLCAnc3RhZGlhcGx1c191aS1idG4tY29udGFpbmVyJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4aXN0cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpOyAvLyBSZXF1ZXJ5IGluIGNhc2UgdGhlIGNvbnRhaW5lciB3YXMgZGVsZXRlZFxyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFidXR0b24uZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24uZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uKGJ1dHRvbjogVUlCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmVCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuYnV0dG9ucy5maWx0ZXIoYiA9PiBiLmlkICE9PSBidXR0b24uaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBodG1sOiBzdHJpbmc7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgb3Blbkxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcclxuICAgIGNsb3NlTGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmh0bWwgPSBgXHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmt2VDdjXCIganNhY3Rpb249XCJjbGljazphNGZVd2RcIiBqc25hbWU9XCJHZUdIS2JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkRQdndZYyB0UnFjM2NcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5hcnJvd19iYWNrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlEzd3l5YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJDd0N4RmRcIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAke2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfdWktY29tcG9uZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeGhBeWYuZmk4SnhkJyk7XHJcbiAgICAgICAgaWYoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBSZVF1ZXJ5IGVsZW1lbnQgc2luY2Ugb3V0ZXJIVE1MIGJyZWFrcyBpdC5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGAjJHt0aGlzLmlkfSA+IGhlYWRlciA+IC5ya3ZUN2NgLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLmZvckVhY2goYyA9PiBjKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIExvZ2dlci5pbmZvKCdDbG9zaW5nJywgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZUxpc3RlbmVycy5mb3JFYWNoKGMgPT4gYygpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oY2FsbGJhY2s/OigpID0+IHZvaWQpIHtcclxuICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZShjYWxsYmFjaz86KCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gXCIuL1VJQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlSb3cge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBvcHRpb25zOiBVSVJvd09wdGlvbnM7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IFVJUm93T3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxwPiR7dGhpcy50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAke3RoaXMuY29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c191aS1yb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBleGlzdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vblJlbG9hZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmQoY29tcG9uZW50OiBVSUNvbXBvbmVudCwgdXNlSHI6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmKHVzZUhyKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5lbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJUm93T3B0aW9ucyB7XHJcbiAgICBvbkNyZWF0ZT86IEZ1bmN0aW9uO1xyXG4gICAgb25EZXN0cm95PzogRnVuY3Rpb247XHJcbiAgICBvblJlbG9hZD86IEZ1bmN0aW9uO1xyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TbmFja2Jhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9