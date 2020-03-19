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
exports.push([module.i, "html body .GqLi4d.QAAyWd {\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18), inset 0 0 5rem rgba(0, 0, 0, 0.5);\n}\n\nhtml body .dSGvzf {\n  margin: 0 1rem;\n}\n\nhtml body .CVVXfc {\n  flex-direction: column;\n  align-items: initial;\n}\n\nhr {\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n::-webkit-scrollbar {\n  background-color: #46484d;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #505257 !important;\n}", ""]);
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
    function ForceCodec(tab) {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = 'Force Codec';
        _this.codec = Codec.AUTOMATIC;
        _this.tab = tab;
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
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"codec\">\n                                <option value=\"" + Codec.AUTOMATIC + "\">Automatic</option>\n                                <option value=\"" + Codec.VP9 + "\">VP9</option>\n                                <option value=\"" + Codec.H264 + "\">H264</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">Apply</a>\n                    </div>\n\n                    <p class=\"stadiaplus_muted\">Note: changing the codec will reload the page.</p>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), Codec.AUTOMATIC);
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.codec = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        location.reload();
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
    function ForceResolution(tab) {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = 'Force Resolution';
        _this.resolution = Resolution.AUTOMATIC;
        _this.tab = tab;
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
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, "\n                    <div class='stadiaplus_row'>\n                        <div class='stadiaplus_select'>\n                            <select name=\"resolution\">\n                                <option value=\"" + Resolution.AUTOMATIC + "\">Automatic</option>\n                                <option value=\"" + Resolution.UHD_4K + "\">4K</option>\n                            </select>\n                        </div>\n                        <a class=\"stadiaplus_button-small\">Apply</a>\n                    </div>\n\n                    <p class=\"stadiaplus_muted\">Note: changing the resolution will reload the page.</p>\n                    <p class=\"stadiaplus_muted\">Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.</p>\n                ", this.id + '-row', {
            onCreate: function (row) {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), Resolution.AUTOMATIC);
                var button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', function () {
                    self.resolution = parseInt(self.select.get()[0]);
                    self.setStorage(function () {
                        location.reload();
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
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
            if (!this.exists()) {
                this.component.create();
                var self_1 = this;
                this.button.create(function () {
                    self_1.button.button.addEventListener('click', function () {
                        self_1.component.open();
                    });
                });
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
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].info('Rows:', this.rows);
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
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
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











const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoader"]();

const tab = new _components_UITab__WEBPACK_IMPORTED_MODULE_5__["UITab"]();

loader.register(new _components_Clock__WEBPACK_IMPORTED_MODULE_4__["Clock"]());
loader.register(new _components_ForceCodec__WEBPACK_IMPORTED_MODULE_6__["ForceCodec"](tab));
loader.register(new _components_ForceResolution__WEBPACK_IMPORTED_MODULE_7__["ForceResolution"](tab));
loader.register(tab);
loader.register(new _components_NetworkMonitor__WEBPACK_IMPORTED_MODULE_8__["NetworkMonitor"]());

window.addEventListener('load', () => {
    _Util__WEBPACK_IMPORTED_MODULE_1__["default"].load();
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
        this.slimselect = new slim_select__WEBPACK_IMPORTED_MODULE_0___default.a({
            select: this.element,
            showSearch: false,
            placeholder: placeholder
        });
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
            this.wrapper.appendChild(this.element);
            this.container.appendChild(this.wrapper);
        }
        this.buttons.forEach(function (button) {
            _this.element.appendChild(button.element);
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
        this.element.innerHTML = this.html;
        var container = document.querySelector('.hxhAyf.fi8Jxd');
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1VJVGFiLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcz8wMzUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZUNvZGVjLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZvcmNlUmVzb2x1dGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvQ2xvY2suc2Nzcz8zNjMwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3M/NWZlYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3M/Mzk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvVUlUYWIuc2Nzcz80YTRiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0dsb2JhbC5zY3NzPzVhYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQnV0dG9uQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlSb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2Nzcz9mZGMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlE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QUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyREQsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQywyTkFBNEc7O0FBRTlJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfY2xvY2sge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19yb3cge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbXV0ZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQge1xcbiAgLyogXFxuICAgKiAgIE11c3QgcmVtb3ZlIDIgeCBwYWRkaW5nIG9yIGl0IGRvZXNudCB3b3JrIFxcbiAgICovXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZTMwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQub3BlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIgLkN3Q3hGZCB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIuRTBaazliIHtcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnV0dG9uIHtcXG4gIHdpZHRoOiAxMTYuMTU2cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCBib2R5IC5HcUxpNGQuUUFBeVdkIHtcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMzIpLCAwIDAuMDYyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTgpLCBpbnNldCAwIDAgNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbmh0bWwgYm9keSAuZFNHdnpmIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG5odG1sIGJvZHkgLkNWVlhmYyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGluaXRpYWw7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ4NGQ7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTI1NyAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICM5Mzk1OUYgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTM5NTlGO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1jb250ZW50IHtcXG4gIGJvcmRlci1jb2xvcjogIzNDM0U0MztcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnBsYWNlaG9sZGVyLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zcy1tYWluIC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24uc3MtZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3MtbWFpbntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt1c2VyLXNlbGVjdDpub25lO2NvbG9yOiM2NjY7d2lkdGg6MTAwJX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjt3aWR0aDoxMDAlO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3MtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZGNkZWUyO2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYWJvdmV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVye2ZsZXg6MSAxIDEwMCU7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpO2xpbmUtaGVpZ2h0OjFlbTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIsLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgKntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe3dpZHRoOmF1dG99LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgLnNzLWRpc2FibGVke2NvbG9yOiNkZWRlZGV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3R7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHg7Zm9udC13ZWlnaHQ6NzAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWRlc2VsZWN0LnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2ZsZXg6MCAxIGF1dG87bWFyZ2luOjAgNnB4fS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW57Ym9yZGVyOnNvbGlkICM2NjY7Ym9yZGVyLXdpZHRoOjAgMnB4IDJweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6M3B4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxtYXJnaW4gLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctdXB7dHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKTttYXJnaW46M3B4IDAgMH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuLmFycm93LWRvd257dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bWFyZ2luOi0zcHggMCAwfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2N1cnNvcjpwb2ludGVyO21pbi1oZWlnaHQ6MzBweDt3aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDAgM3B4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtjb2xvcjojNjY2fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZSAuc3MtdmFsdWUtZGVsZXRle2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1iZWxvd3tib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlc3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7ZmxleDoxIDEgMTAwJTt3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtZGlzYWJsZWR7ZGlzcGxheTpmbGV4O3BhZGRpbmc6NHB4IDVweDttYXJnaW46MnB4IDA7bGluZS1oZWlnaHQ6MWVtO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOiNkZWRlZGU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfUBrZXlmcmFtZXMgc2NhbGVJbnswJXt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2NhbGVPdXR7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWV7ZGlzcGxheTpmbGV4O3VzZXItc2VsZWN0Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6M3B4IDVweDttYXJnaW46M3B4IDVweCAzcHggMDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYjtib3JkZXItcmFkaXVzOjRweDthbmltYXRpb24tbmFtZTpzY2FsZUluO2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlLnNzLW91dHthbmltYXRpb24tbmFtZTpzY2FsZU91dDthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7bWFyZ2luOjAgMCAwIDVweDtjdXJzb3I6cG9pbnRlcn0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZHtkaXNwbGF5OmZsZXg7ZmxleDowIDEgM3B4O21hcmdpbjo5cHggMTJweCAwIDVweH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1c3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDojNjY2O3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4O3dpZHRoOjJweDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXM6YWZ0ZXJ7YmFja2dyb3VuZDojNjY2O2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDoxMHB4O2xlZnQ6LTRweDt0b3A6NHB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVzLnNzLWNyb3Nze3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zcy1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7bWFyZ2luOi0xcHggMCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7ei1pbmRleDoxMDEwO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG9wYWNpdHkgLjJzO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGVZKDApfS5zcy1jb250ZW50LnNzLW9wZW57ZGlzcGxheTpibG9jaztvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlWSgxKX0uc3MtY29udGVudCAuc3Mtc2VhcmNoe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7cGFkZGluZzo4cHggOHB4IDZweH0uc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUsLnNzLWNvbnRlbnQgLnNzLXNlYXJjaC5zcy1oaWRlIGlucHV0e2hlaWdodDowO29wYWNpdHk6MDtwYWRkaW5nOjA7bWFyZ2luOjB9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dHtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXQ7ZmxleDoxIDEgYXV0bzt3aWR0aDoxMDAlO21pbi13aWR0aDowO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4IDhweDttYXJnaW46MDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO291dGxpbmU6MDt0ZXh0LWFsaWduOmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGR9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6IzhhOGE4YTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDpmb2N1c3tib3gtc2hhZG93OjAgMCA1cHggIzU4OTdmYn0uc3MtY29udGVudCAuc3Mtc2VhcmNoIC5zcy1hZGRhYmxle2Rpc3BsYXk6aW5saW5lLWZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjIycHg7Zm9udC13ZWlnaHQ6NzAwO2ZsZXg6MCAwIDMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjAgMCAwIDhweDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNpemluZzpib3JkZXItYm94fS5zcy1jb250ZW50IC5zcy1hZGRhYmxle3BhZGRpbmctdG9wOjB9LnNzLWNvbnRlbnQgLnNzLWxpc3R7bWF4LWhlaWdodDoyMDBweDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87dGV4dC1hbGlnbjpsZWZ0fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cCAuc3Mtb3B0Z3JvdXAtbGFiZWx7cGFkZGluZzo2cHggMTBweDtmb250LXdlaWdodDo3MDB9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRpb257cGFkZGluZzo2cHggNnB4IDZweCAyNXB4fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxle2N1cnNvcjpwb2ludGVyfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZifS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb257cGFkZGluZzo2cHggMTBweDtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gKntkaXNwbGF5OmlubGluZS1ibG9ja30uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZ2hsaWdodGVkLC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb246aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1kaXNhYmxlZHtjdXJzb3I6bm90LWFsbG93ZWQ7Y29sb3I6I2RlZGVkZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpub3QoLnNzLWRpc2FibGVkKS5zcy1vcHRpb24tc2VsZWN0ZWR7Y29sb3I6IzY2NjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODgsMTUxLDI1MSwuMSl9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1oaWRle2Rpc3BsYXk6bm9uZX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIC5zcy1zZWFyY2gtaGlnaGxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2ZmZmI4Y31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGltc2VsZWN0Lm1pbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2xpbVNlbGVjdD10KCk6ZS5TbGltU2VsZWN0PXQoKX0od2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuKHM9e30sbi5tPWk9W2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7dD10fHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9O3ZhciBpPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIGkuaW5pdEN1c3RvbUV2ZW50KGUsdC5idWJibGVzLHQuY2FuY2VsYWJsZSx0LmRldGFpbCksaX12YXIgbjt0Ll9fZXNNb2R1bGU9ITAsdC5oYXNDbGFzc0luVHJlZT1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHMoZSx0KXtyZXR1cm4gdCYmZSYmZS5jbGFzc0xpc3QmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKHQpP2U6bnVsbH1yZXR1cm4gcyhlLHQpfHxmdW5jdGlvbiBlKHQsaSl7cmV0dXJuIHQmJnQhPT1kb2N1bWVudD9zKHQsaSk/dDplKHQucGFyZW50Tm9kZSxpKTpudWxsfShlLHQpfSx0LmVuc3VyZUVsZW1lbnRJblZpZXc9ZnVuY3Rpb24oZSx0KXt2YXIgaT1lLnNjcm9sbFRvcCtlLm9mZnNldFRvcCxzPWkrZS5jbGllbnRIZWlnaHQsbj10Lm9mZnNldFRvcCxhPW4rdC5jbGllbnRIZWlnaHQ7bjxpP2Uuc2Nyb2xsVG9wLT1pLW46czxhJiYoZS5zY3JvbGxUb3ArPWEtcyl9LHQucHV0Q29udGVudD1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ZS5vZmZzZXRIZWlnaHQsbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGE9aT9uLnRvcDpuLnRvcC1zLG89aT9uLmJvdHRvbTpuLmJvdHRvbStzO3JldHVybiBhPD0wP1wiYmVsb3dcIjpvPj13aW5kb3cuaW5uZXJIZWlnaHQ/XCJhYm92ZVwiOmk/dDpcImJlbG93XCJ9LHQuZGVib3VuY2U9ZnVuY3Rpb24obixhLG8pe3ZhciBsO3JldHVybiB2b2lkIDA9PT1hJiYoYT0xMDApLHZvaWQgMD09PW8mJihvPSExKSxmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyllW3RdPWFyZ3VtZW50c1t0XTt2YXIgaT1zZWxmLHM9byYmIWw7Y2xlYXJUaW1lb3V0KGwpLGw9c2V0VGltZW91dChmdW5jdGlvbigpe2w9bnVsbCxvfHxuLmFwcGx5KGksZSl9LGEpLHMmJm4uYXBwbHkoaSxlKX19LHQuaXNWYWx1ZUluQXJyYXlPZk9iamVjdHM9ZnVuY3Rpb24oZSx0LGkpe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVybiBlW3RdPT09aTtmb3IodmFyIHM9MCxuPWU7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107aWYoYSYmYVt0XSYmYVt0XT09PWkpcmV0dXJuITB9cmV0dXJuITF9LHQuaGlnaGxpZ2h0PWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz1lLG49bmV3IFJlZ0V4cChcIihcIit0LnRyaW0oKStcIikoPyFbXjxdKj5bXjw+XSo8LylcIixcImlcIik7aWYoIWUubWF0Y2gobikpcmV0dXJuIGU7dmFyIGE9ZS5tYXRjaChuKS5pbmRleCxvPWErZS5tYXRjaChuKVswXS50b1N0cmluZygpLmxlbmd0aCxsPWUuc3Vic3RyaW5nKGEsbyk7cmV0dXJuIHM9cy5yZXBsYWNlKG4sJzxtYXJrIGNsYXNzPVwiJytpKydcIj4nK2wrXCI8L21hcms+XCIpfSxcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXdpbmRvdykuQ3VzdG9tRXZlbnQmJihzLnByb3RvdHlwZT1uLkV2ZW50LnByb3RvdHlwZSxuLkN1c3RvbUV2ZW50PXMpfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5uZXdPcHRpb249ZnVuY3Rpb24oZSl7cmV0dXJue2lkOmUuaWQ/ZS5pZDpTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWU/ZS52YWx1ZTpcIlwiLHRleHQ6ZS50ZXh0P2UudGV4dDpcIlwiLGlubmVySFRNTDplLmlubmVySFRNTD9lLmlubmVySFRNTDpcIlwiLHNlbGVjdGVkOiEhZS5zZWxlY3RlZCYmZS5zZWxlY3RlZCxkaXNwbGF5OnZvaWQgMD09PWUuZGlzcGxheXx8ZS5kaXNwbGF5LGRpc2FibGVkOiEhZS5kaXNhYmxlZCYmZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjohIWUucGxhY2Vob2xkZXImJmUucGxhY2Vob2xkZXIsY2xhc3M6ZS5jbGFzcz9lLmNsYXNzOnZvaWQgMCxkYXRhOmUuZGF0YT9lLmRhdGE6e319fSxuLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oZSl7dGhpcy5kYXRhLnB1c2goe2lkOlN0cmluZyhNYXRoLmZsb29yKDFlOCpNYXRoLnJhbmRvbSgpKSksdmFsdWU6ZS52YWx1ZSx0ZXh0OmUudGV4dCxpbm5lckhUTUw6XCJcIixzZWxlY3RlZDohMSxkaXNwbGF5OiEwLGRpc2FibGVkOiExLHBsYWNlaG9sZGVyOiExLGNsYXNzOnZvaWQgMCxkYXRhOnt9fSl9LG4ucHJvdG90eXBlLnBhcnNlU2VsZWN0RGF0YT1mdW5jdGlvbigpe3RoaXMuZGF0YT1bXTtmb3IodmFyIGU9MCx0PXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudC5jaGlsZE5vZGVzO2U8dC5sZW5ndGg7ZSsrKXt2YXIgaT10W2VdO2lmKFwiT1BUR1JPVVBcIj09PWkubm9kZU5hbWUpe2Zvcih2YXIgcz17bGFiZWw6aS5sYWJlbCxvcHRpb25zOltdfSxuPTAsYT1pLmNoaWxkTm9kZXM7bjxhLmxlbmd0aDtuKyspe3ZhciBvPWFbbl07aWYoXCJPUFRJT05cIj09PW8ubm9kZU5hbWUpe3ZhciBsPXRoaXMucHVsbE9wdGlvbkRhdGEobyk7cy5vcHRpb25zLnB1c2gobCksbC5wbGFjZWhvbGRlciYmXCJcIiE9PWwudGV4dC50cmltKCkmJih0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dD1sLnRleHQpfX10aGlzLmRhdGEucHVzaChzKX1lbHNlXCJPUFRJT05cIj09PWkubm9kZU5hbWUmJihsPXRoaXMucHVsbE9wdGlvbkRhdGEoaSksdGhpcy5kYXRhLnB1c2gobCksbC5wbGFjZWhvbGRlciYmXCJcIiE9PWwudGV4dC50cmltKCkmJih0aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dD1sLnRleHQpKX19LG4ucHJvdG90eXBlLnB1bGxPcHRpb25EYXRhPWZ1bmN0aW9uKGUpe3JldHVybntpZDohIWUuZGF0YXNldCYmZS5kYXRhc2V0LmlkfHxTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWUsdGV4dDplLnRleHQsaW5uZXJIVE1MOmUuaW5uZXJIVE1MLHNlbGVjdGVkOmUuc2VsZWN0ZWQsZGlzYWJsZWQ6ZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjpcInRydWVcIj09PWUuZGF0YXNldC5wbGFjZWhvbGRlcixjbGFzczplLmNsYXNzTmFtZSxzdHlsZTplLnN0eWxlLmNzc1RleHQsZGF0YTplLmRhdGFzZXR9fSxuLnByb3RvdHlwZS5zZXRTZWxlY3RlZEZyb21TZWxlY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgZT1bXSx0PTAsaT10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQub3B0aW9uczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtpZihzLnNlbGVjdGVkKXt2YXIgbj10aGlzLmdldE9iamVjdEZyb21EYXRhKHMudmFsdWUsXCJ2YWx1ZVwiKTtuJiZuLmlkJiZlLnB1c2gobi5pZCl9fXRoaXMuc2V0U2VsZWN0ZWQoZSxcImlkXCIpfWVsc2V7dmFyIGE9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50O2lmKC0xIT09YS5zZWxlY3RlZEluZGV4KXt2YXIgbz1hLm9wdGlvbnNbYS5zZWxlY3RlZEluZGV4XS52YWx1ZTt0aGlzLnNldFNlbGVjdGVkKG8sXCJ2YWx1ZVwiKX19fSxuLnByb3RvdHlwZS5zZXRTZWxlY3RlZD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PVwiaWRcIik7Zm9yKHZhciBpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO3IucGxhY2Vob2xkZXJ8fChyLnNlbGVjdGVkPXRoaXMuc2hvdWxkQmVTZWxlY3RlZChyLGUsdCkpfX19ZWxzZSBuLnNlbGVjdGVkPXRoaXMuc2hvdWxkQmVTZWxlY3RlZChuLGUsdCl9fSxuLnByb3RvdHlwZS5zaG91bGRCZVNlbGVjdGVkPWZ1bmN0aW9uKGUsdCxpKXtpZih2b2lkIDA9PT1pJiYoaT1cImlkXCIpLEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciBzPTAsbj10O3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO2lmKGkgaW4gZSYmU3RyaW5nKGVbaV0pPT09U3RyaW5nKGEpKXJldHVybiEwfWVsc2UgaWYoaSBpbiBlJiZTdHJpbmcoZVtpXSk9PT1TdHJpbmcodCkpcmV0dXJuITA7cmV0dXJuITF9LG4ucHJvdG90eXBlLmdldFNlbGVjdGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHR9LHQ9W10saT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtyLnNlbGVjdGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3QucHVzaChyKTplPXIpfX19ZWxzZSBuLnNlbGVjdGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3QucHVzaChuKTplPW4pfXJldHVybiB0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGU/dDplfSxuLnByb3RvdHlwZS5hZGRUb1NlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9XCJpZFwiKSx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe3ZhciBpPVtdLHM9dGhpcy5nZXRTZWxlY3RlZCgpO2lmKEFycmF5LmlzQXJyYXkocykpZm9yKHZhciBuPTAsYT1zO248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2kucHVzaChvW3RdKX1pLnB1c2goZSksdGhpcy5zZXRTZWxlY3RlZChpLHQpfX0sbi5wcm90b3R5cGUucmVtb3ZlRnJvbVNlbGVjdGVkPWZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9XCJpZFwiKSx0aGlzLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgaT1bXSxzPTAsbj10aGlzLmdldFNlbGVjdGVkKCk7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107U3RyaW5nKGFbdF0pIT09U3RyaW5nKGUpJiZpLnB1c2goYVt0XSl9dGhpcy5zZXRTZWxlY3RlZChpLHQpfX0sbi5wcm90b3R5cGUub25EYXRhQ2hhbmdlPWZ1bmN0aW9uKCl7dGhpcy5tYWluLm9uQ2hhbmdlJiZ0aGlzLmlzT25DaGFuZ2VFbmFibGVkJiZ0aGlzLm1haW4ub25DaGFuZ2UoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdldFNlbGVjdGVkKCkpKSl9LG4ucHJvdG90eXBlLmdldE9iamVjdEZyb21EYXRhPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9XCJpZFwiKTtmb3IodmFyIGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZih0IGluIG4mJlN0cmluZyhuW3RdKT09PVN0cmluZyhlKSlyZXR1cm4gbjtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bjtpZihhLm9wdGlvbnMpZm9yKHZhciBvPTAsbD1hLm9wdGlvbnM7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107aWYoU3RyaW5nKHJbdF0pPT09U3RyaW5nKGUpKXJldHVybiByfX19cmV0dXJuIG51bGx9LG4ucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbihuKXtpZihcIlwiIT09KHRoaXMuc2VhcmNoVmFsdWU9bikudHJpbSgpKXt2YXIgYT10aGlzLm1haW4uY29uZmlnLnNlYXJjaEZpbHRlcixlPXRoaXMuZGF0YS5zbGljZSgwKTtuPW4udHJpbSgpO3ZhciB0PWUubWFwKGZ1bmN0aW9uKGUpe2lmKGUuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgdD1lLGk9W107aWYodC5vcHRpb25zJiYoaT10Lm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBhKGUsbil9KSksMCE9PWkubGVuZ3RoKXt2YXIgcz1PYmplY3QuYXNzaWduKHt9LHQpO3JldHVybiBzLm9wdGlvbnM9aSxzfX1yZXR1cm4gZS5oYXNPd25Qcm9wZXJ0eShcInRleHRcIikmJmEoZSxuKT9lOm51bGx9KTt0aGlzLmZpbHRlcmVkPXQuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9ZWxzZSB0aGlzLmZpbHRlcmVkPW51bGx9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5jb250ZW50T3Blbj0hMSx0aGlzLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsdGhpcy5pc09uQ2hhbmdlRW5hYmxlZD0hMCx0aGlzLm1haW49ZS5tYWluLHRoaXMuc2VhcmNoVmFsdWU9XCJcIix0aGlzLmRhdGE9W10sdGhpcy5maWx0ZXJlZD1udWxsLHRoaXMucGFyc2VTZWxlY3REYXRhKCksdGhpcy5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKX1mdW5jdGlvbiByKGUpe3JldHVybiB2b2lkIDAhPT1lLnRleHR8fChjb25zb2xlLmVycm9yKFwiRGF0YSBvYmplY3Qgb3B0aW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBoYXZlIGEgdGV4dCB2YWx1ZS4gQ2hlY2sgb2JqZWN0OiBcIitKU09OLnN0cmluZ2lmeShlKSksITEpfXQuRGF0YT1zLHQudmFsaWRhdGVEYXRhPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiBjb25zb2xlLmVycm9yKFwiRGF0YSBtdXN0IGJlIGFuIGFycmF5IG9mIG9iamVjdHNcIiksITE7Zm9yKHZhciB0PTAsaT0wLHM9ZTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3IobFtvXSl8fHQrK319fWVsc2UgcihuKXx8dCsrfXJldHVybiAwPT09dH0sdC52YWxpZGF0ZU9wdGlvbj1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPWkoMyksbj1pKDQpLGE9aSg1KSxvPWkoMSksbD1pKDApLHI9KGMucHJvdG90eXBlLnZhbGlkYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PVwic3RyaW5nXCI9PXR5cGVvZiBlLnNlbGVjdD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUuc2VsZWN0KTplLnNlbGVjdDtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBzZWxlY3QgZWxlbWVudFwiKTtpZihcIlNFTEVDVFwiIT09dC50YWdOYW1lKXRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXNudCBvZiB0eXBlIHNlbGVjdFwiKTtyZXR1cm4gdH0sYy5wcm90b3R5cGUuc2VsZWN0ZWQ9ZnVuY3Rpb24oKXtpZih0aGlzLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGU9W10sdD0wLGk9bj10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtlLnB1c2gocy52YWx1ZSl9cmV0dXJuIGV9dmFyIG47cmV0dXJuKG49dGhpcy5kYXRhLmdldFNlbGVjdGVkKCkpP24udmFsdWU6XCJcIn0sYy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCxpLHMpe3ZvaWQgMD09PXQmJih0PVwidmFsdWVcIiksdm9pZCAwPT09aSYmKGk9ITApLHZvaWQgMD09PXMmJihzPSEwKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiYhQXJyYXkuaXNBcnJheShlKT90aGlzLmRhdGEuYWRkVG9TZWxlY3RlZChlLHQpOnRoaXMuZGF0YS5zZXRTZWxlY3RlZChlLHQpLHRoaXMuc2VsZWN0LnNldFZhbHVlKCksdGhpcy5kYXRhLm9uRGF0YUNoYW5nZSgpLHRoaXMucmVuZGVyKCksaSYmdGhpcy5jbG9zZSgpfSxjLnByb3RvdHlwZS5zZXRTZWxlY3RlZD1mdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT10JiYodD1cInZhbHVlXCIpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCksdGhpcy5zZXQoZSx0LGkscyl9LGMucHJvdG90eXBlLnNldERhdGE9ZnVuY3Rpb24oZSl7aWYoby52YWxpZGF0ZURhdGEoZSkpe3ZhciB0PUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpLGk9dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7aWYodGhpcy5jb25maWcuaXNBamF4JiZpKWlmKHRoaXMuY29uZmlnLmlzTXVsdGlwbGUpZm9yKHZhciBzPTAsbj1pLnJldmVyc2UoKTtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTt0LnVuc2hpZnQoYSl9ZWxzZSB0LnVuc2hpZnQodGhpcy5kYXRhLmdldFNlbGVjdGVkKCkpLHQudW5zaGlmdCh7dGV4dDpcIlwiLHBsYWNlaG9sZGVyOiEwfSk7dGhpcy5zZWxlY3QuY3JlYXRlKHQpLHRoaXMuZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCl9ZWxzZSBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbiBwcm9ibGVtIG9uOiAjXCIrdGhpcy5zZWxlY3QuZWxlbWVudC5pZCl9LGMucHJvdG90eXBlLmFkZERhdGE9ZnVuY3Rpb24oZSl7by52YWxpZGF0ZURhdGEoW2VdKT8odGhpcy5kYXRhLmFkZCh0aGlzLmRhdGEubmV3T3B0aW9uKGUpKSx0aGlzLnNlbGVjdC5jcmVhdGUodGhpcy5kYXRhLmRhdGEpLHRoaXMuZGF0YS5wYXJzZVNlbGVjdERhdGEoKSx0aGlzLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdGhpcy5yZW5kZXIoKSk6Y29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gcHJvYmxlbSBvbjogI1wiK3RoaXMuc2VsZWN0LmVsZW1lbnQuaWQpfSxjLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0aGlzLmNvbmZpZy5pc0VuYWJsZWQmJiF0aGlzLmRhdGEuY29udGVudE9wZW4pe2lmKHRoaXMuYmVmb3JlT3BlbiYmdGhpcy5iZWZvcmVPcGVuKCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQucGx1cy5jbGFzc0xpc3QuYWRkKFwic3MtY3Jvc3NcIik6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3ctZG93blwiKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy11cFwiKSksdGhpcy5zbGltW3RoaXMuY29uZmlnLmlzTXVsdGlwbGU/XCJtdWx0aVNlbGVjdGVkXCI6XCJzaW5nbGVTZWxlY3RlZFwiXS5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3ZlXCI9PT10aGlzLmRhdGEuY29udGVudFBvc2l0aW9uP3RoaXMuY29uZmlnLm9wZW5BYm92ZTp0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuY29uZmlnLmFkZFRvQm9keSl7dmFyIHQ9dGhpcy5zbGltLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt0aGlzLnNsaW0uY29udGVudC5zdHlsZS50b3A9dC50b3ArdC5oZWlnaHQrd2luZG93LnNjcm9sbFkrXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLmxlZnQ9dC5sZWZ0K3dpbmRvdy5zY3JvbGxYK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS53aWR0aD10LndpZHRoK1wicHhcIn1pZih0aGlzLnNsaW0uY29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW4pLFwidXBcIj09PXRoaXMuY29uZmlnLnNob3dDb250ZW50LnRvTG93ZXJDYXNlKCk/dGhpcy5tb3ZlQ29udGVudEFib3ZlKCk6XCJkb3duXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudC50b0xvd2VyQ2FzZSgpP3RoaXMubW92ZUNvbnRlbnRCZWxvdygpOlwiYWJvdmVcIj09PWwucHV0Q29udGVudCh0aGlzLnNsaW0uY29udGVudCx0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uLHRoaXMuZGF0YS5jb250ZW50T3Blbik/dGhpcy5tb3ZlQ29udGVudEFib3ZlKCk6dGhpcy5tb3ZlQ29udGVudEJlbG93KCksIXRoaXMuY29uZmlnLmlzTXVsdGlwbGUpe3ZhciBpPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO2lmKGkpe3ZhciBzPWkuaWQsbj10aGlzLnNsaW0ubGlzdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pZD1cIicrcysnXCJdJyk7biYmbC5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMuc2xpbS5saXN0LG4pfX1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5kYXRhLmNvbnRlbnRPcGVuPSEwLGUuY29uZmlnLnNlYXJjaEZvY3VzJiZlLnNsaW0uc2VhcmNoLmlucHV0LmZvY3VzKCksZS5hZnRlck9wZW4mJmUuYWZ0ZXJPcGVuKCl9LHRoaXMuY29uZmlnLnRpbWVvdXREZWxheSl9fSxjLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5kYXRhLmNvbnRlbnRPcGVuJiYodGhpcy5iZWZvcmVDbG9zZSYmdGhpcy5iZWZvcmVDbG9zZSgpLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkPyh0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQucGx1cy5jbGFzc0xpc3QucmVtb3ZlKFwic3MtY3Jvc3NcIikpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93LWRvd25cIiksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiYXJyb3ctdXBcIikpLHRoaXMuc2xpbS5jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbiksdGhpcy5kYXRhLmNvbnRlbnRPcGVuPSExLHRoaXMuc2VhcmNoKFwiXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnNsaW0uY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKSxlLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIixlLmNvbmZpZy5pc011bHRpcGxlJiZlLnNsaW0ubXVsdGlTZWxlY3RlZD8oZS5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkFib3ZlKSxlLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlLmNvbmZpZy5vcGVuQmVsb3cpKTplLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJihlLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkFib3ZlKSxlLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkJlbG93KSksZS5zbGltLnNlYXJjaC5pbnB1dC5ibHVyKCksZS5hZnRlckNsb3NlJiZlLmFmdGVyQ2xvc2UoKX0sdGhpcy5jb25maWcudGltZW91dERlbGF5KSl9LGMucHJvdG90eXBlLm1vdmVDb250ZW50QWJvdmU9ZnVuY3Rpb24oKXt2YXIgZT0wO3RoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP2U9dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLm9mZnNldEhlaWdodDp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJihlPXRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5jb250YWluZXIub2Zmc2V0SGVpZ2h0KTt2YXIgdD1lK3RoaXMuc2xpbS5jb250ZW50Lm9mZnNldEhlaWdodC0xO3RoaXMuc2xpbS5jb250ZW50LnN0eWxlLm1hcmdpbj1cIi1cIit0K1wicHggMCAwIDBcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS5oZWlnaHQ9dC1lKzErXCJweFwiLHRoaXMuc2xpbS5jb250ZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbj1cImNlbnRlciBib3R0b21cIix0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYWJvdmVcIix0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQWJvdmUpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkFib3ZlKSl9LGMucHJvdG90eXBlLm1vdmVDb250ZW50QmVsb3c9ZnVuY3Rpb24oKXt0aGlzLmRhdGEuY29udGVudFBvc2l0aW9uPVwiYmVsb3dcIix0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkJlbG93KSl9LGMucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzRW5hYmxlZD0hMCx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5kaXNhYmxlZCk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiZ0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuZGlzYWJsZWQpLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSExLHRoaXMuc2VsZWN0LmVsZW1lbnQuZGlzYWJsZWQ9ITEsdGhpcy5zbGltLnNlYXJjaC5pbnB1dC5kaXNhYmxlZD0hMSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMH0sYy5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuY29uZmlnLmlzRW5hYmxlZD0hMSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD90aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5kaXNhYmxlZCk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiZ0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuZGlzYWJsZWQpLHRoaXMuc2VsZWN0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyPSExLHRoaXMuc2VsZWN0LmVsZW1lbnQuZGlzYWJsZWQ9ITAsdGhpcy5zbGltLnNlYXJjaC5pbnB1dC5kaXNhYmxlZD0hMCx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMH0sYy5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKHQpe2lmKHRoaXMuZGF0YS5zZWFyY2hWYWx1ZSE9PXQpaWYodGhpcy5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZT10LHRoaXMuY29uZmlnLmlzQWpheCl7dmFyIGk9dGhpczt0aGlzLmNvbmZpZy5pc1NlYXJjaGluZz0hMCx0aGlzLnJlbmRlcigpLHRoaXMuYWpheCYmdGhpcy5hamF4KHQsZnVuY3Rpb24oZSl7aS5jb25maWcuaXNTZWFyY2hpbmc9ITEsQXJyYXkuaXNBcnJheShlKT8oZS51bnNoaWZ0KHt0ZXh0OlwiXCIscGxhY2Vob2xkZXI6ITB9KSxpLnNldERhdGEoZSksaS5kYXRhLnNlYXJjaCh0KSxpLnJlbmRlcigpKTpcInN0cmluZ1wiPT10eXBlb2YgZT9pLnNsaW0ub3B0aW9ucyhlKTppLnJlbmRlcigpfSl9ZWxzZSB0aGlzLmRhdGEuc2VhcmNoKHQpLHRoaXMucmVuZGVyKCl9LGMucHJvdG90eXBlLnNldFNlYXJjaFRleHQ9ZnVuY3Rpb24oZSl7dGhpcy5jb25maWcuc2VhcmNoVGV4dD1lfSxjLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc011bHRpcGxlP3RoaXMuc2xpbS52YWx1ZXMoKToodGhpcy5zbGltLnBsYWNlaG9sZGVyKCksdGhpcy5zbGltLmRlc2VsZWN0KCkpLHRoaXMuc2xpbS5vcHRpb25zKCl9LGMucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9bnVsbCk7dmFyIHQ9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK2UrXCIuc3MtbWFpblwiKTp0aGlzLnNsaW0uY29udGFpbmVyLGk9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3NpZD1cIitlK1wiXVwiKTp0aGlzLnNlbGVjdC5lbGVtZW50O2lmKHQmJmkmJihpLnN0eWxlLmRpc3BsYXk9XCJcIixkZWxldGUgaS5kYXRhc2V0LnNzaWQsaS5zbGltPW51bGwsdC5wYXJlbnRFbGVtZW50JiZ0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodCksdGhpcy5jb25maWcuYWRkVG9Cb2R5KSl7dmFyIHM9ZT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK2UrXCIuc3MtY29udGVudFwiKTp0aGlzLnNsaW0uY29udGVudDtpZighcylyZXR1cm47ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzKX19LGMpO2Z1bmN0aW9uIGMoZSl7dmFyIHQ9dGhpczt0aGlzLmFqYXg9bnVsbCx0aGlzLmFkZGFibGU9bnVsbCx0aGlzLmJlZm9yZU9uQ2hhbmdlPW51bGwsdGhpcy5vbkNoYW5nZT1udWxsLHRoaXMuYmVmb3JlT3Blbj1udWxsLHRoaXMuYWZ0ZXJPcGVuPW51bGwsdGhpcy5iZWZvcmVDbG9zZT1udWxsLHRoaXMuYWZ0ZXJDbG9zZT1udWxsO3ZhciBpPXRoaXMudmFsaWRhdGUoZSk7aS5kYXRhc2V0LnNzaWQmJnRoaXMuZGVzdHJveShpLmRhdGFzZXQuc3NpZCksZS5hamF4JiYodGhpcy5hamF4PWUuYWpheCksZS5hZGRhYmxlJiYodGhpcy5hZGRhYmxlPWUuYWRkYWJsZSksdGhpcy5jb25maWc9bmV3IHMuQ29uZmlnKHtzZWxlY3Q6aSxpc0FqYXg6ISFlLmFqYXgsc2hvd1NlYXJjaDplLnNob3dTZWFyY2gsc2VhcmNoUGxhY2Vob2xkZXI6ZS5zZWFyY2hQbGFjZWhvbGRlcixzZWFyY2hUZXh0OmUuc2VhcmNoVGV4dCxzZWFyY2hpbmdUZXh0OmUuc2VhcmNoaW5nVGV4dCxzZWFyY2hGb2N1czplLnNlYXJjaEZvY3VzLHNlYXJjaEhpZ2hsaWdodDplLnNlYXJjaEhpZ2hsaWdodCxzZWFyY2hGaWx0ZXI6ZS5zZWFyY2hGaWx0ZXIsY2xvc2VPblNlbGVjdDplLmNsb3NlT25TZWxlY3Qsc2hvd0NvbnRlbnQ6ZS5zaG93Q29udGVudCxwbGFjZWhvbGRlclRleHQ6ZS5wbGFjZWhvbGRlcixhbGxvd0Rlc2VsZWN0OmUuYWxsb3dEZXNlbGVjdCxhbGxvd0Rlc2VsZWN0T3B0aW9uOmUuYWxsb3dEZXNlbGVjdE9wdGlvbixoaWRlU2VsZWN0ZWRPcHRpb246ZS5oaWRlU2VsZWN0ZWRPcHRpb24sZGVzZWxlY3RMYWJlbDplLmRlc2VsZWN0TGFiZWwsaXNFbmFibGVkOmUuaXNFbmFibGVkLHZhbHVlc1VzZVRleHQ6ZS52YWx1ZXNVc2VUZXh0LHNob3dPcHRpb25Ub29sdGlwczplLnNob3dPcHRpb25Ub29sdGlwcyxzZWxlY3RCeUdyb3VwOmUuc2VsZWN0QnlHcm91cCxsaW1pdDplLmxpbWl0LHRpbWVvdXREZWxheTplLnRpbWVvdXREZWxheSxhZGRUb0JvZHk6ZS5hZGRUb0JvZHl9KSx0aGlzLnNlbGVjdD1uZXcgbi5TZWxlY3Qoe3NlbGVjdDppLG1haW46dGhpc30pLHRoaXMuZGF0YT1uZXcgby5EYXRhKHttYWluOnRoaXN9KSx0aGlzLnNsaW09bmV3IGEuU2xpbSh7bWFpbjp0aGlzfSksdGhpcy5zZWxlY3QuZWxlbWVudC5wYXJlbnROb2RlJiZ0aGlzLnNlbGVjdC5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuc2xpbS5jb250YWluZXIsdGhpcy5zZWxlY3QuZWxlbWVudC5uZXh0U2libGluZyksZS5kYXRhP3RoaXMuc2V0RGF0YShlLmRhdGEpOnRoaXMucmVuZGVyKCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS50YXJnZXQmJiFsLmhhc0NsYXNzSW5UcmVlKGUudGFyZ2V0LHQuY29uZmlnLmlkKSYmdC5jbG9zZSgpfSksXCJhdXRvXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudCYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixsLmRlYm91bmNlKGZ1bmN0aW9uKGUpe3QuZGF0YS5jb250ZW50T3BlbiYmKFwiYWJvdmVcIj09PWwucHV0Q29udGVudCh0LnNsaW0uY29udGVudCx0LmRhdGEuY29udGVudFBvc2l0aW9uLHQuZGF0YS5jb250ZW50T3Blbik/dC5tb3ZlQ29udGVudEFib3ZlKCk6dC5tb3ZlQ29udGVudEJlbG93KCkpfSksITEpLGUuYmVmb3JlT25DaGFuZ2UmJih0aGlzLmJlZm9yZU9uQ2hhbmdlPWUuYmVmb3JlT25DaGFuZ2UpLGUub25DaGFuZ2UmJih0aGlzLm9uQ2hhbmdlPWUub25DaGFuZ2UpLGUuYmVmb3JlT3BlbiYmKHRoaXMuYmVmb3JlT3Blbj1lLmJlZm9yZU9wZW4pLGUuYWZ0ZXJPcGVuJiYodGhpcy5hZnRlck9wZW49ZS5hZnRlck9wZW4pLGUuYmVmb3JlQ2xvc2UmJih0aGlzLmJlZm9yZUNsb3NlPWUuYmVmb3JlQ2xvc2UpLGUuYWZ0ZXJDbG9zZSYmKHRoaXMuYWZ0ZXJDbG9zZT1lLmFmdGVyQ2xvc2UpLHRoaXMuY29uZmlnLmlzRW5hYmxlZHx8dGhpcy5kaXNhYmxlKCl9dC5kZWZhdWx0PXJ9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLnNlYXJjaEZpbHRlcj1mdW5jdGlvbihlLHQpe3JldHVybi0xIT09ZS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0LnRvTG93ZXJDYXNlKCkpfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMuaWQ9XCJcIix0aGlzLmlzTXVsdGlwbGU9ITEsdGhpcy5pc0FqYXg9ITEsdGhpcy5pc1NlYXJjaGluZz0hMSx0aGlzLnNob3dTZWFyY2g9ITAsdGhpcy5zZWFyY2hGb2N1cz0hMCx0aGlzLnNlYXJjaEhpZ2hsaWdodD0hMSx0aGlzLmNsb3NlT25TZWxlY3Q9ITAsdGhpcy5zaG93Q29udGVudD1cImF1dG9cIix0aGlzLnNlYXJjaFBsYWNlaG9sZGVyPVwiU2VhcmNoXCIsdGhpcy5zZWFyY2hUZXh0PVwiTm8gUmVzdWx0c1wiLHRoaXMuc2VhcmNoaW5nVGV4dD1cIlNlYXJjaGluZy4uLlwiLHRoaXMucGxhY2Vob2xkZXJUZXh0PVwiU2VsZWN0IFZhbHVlXCIsdGhpcy5hbGxvd0Rlc2VsZWN0PSExLHRoaXMuYWxsb3dEZXNlbGVjdE9wdGlvbj0hMSx0aGlzLmhpZGVTZWxlY3RlZE9wdGlvbj0hMSx0aGlzLmRlc2VsZWN0TGFiZWw9XCJ4XCIsdGhpcy5pc0VuYWJsZWQ9ITAsdGhpcy52YWx1ZXNVc2VUZXh0PSExLHRoaXMuc2hvd09wdGlvblRvb2x0aXBzPSExLHRoaXMuc2VsZWN0QnlHcm91cD0hMSx0aGlzLmxpbWl0PTAsdGhpcy50aW1lb3V0RGVsYXk9MjAwLHRoaXMuYWRkVG9Cb2R5PSExLHRoaXMubWFpbj1cInNzLW1haW5cIix0aGlzLnNpbmdsZVNlbGVjdGVkPVwic3Mtc2luZ2xlLXNlbGVjdGVkXCIsdGhpcy5hcnJvdz1cInNzLWFycm93XCIsdGhpcy5tdWx0aVNlbGVjdGVkPVwic3MtbXVsdGktc2VsZWN0ZWRcIix0aGlzLmFkZD1cInNzLWFkZFwiLHRoaXMucGx1cz1cInNzLXBsdXNcIix0aGlzLnZhbHVlcz1cInNzLXZhbHVlc1wiLHRoaXMudmFsdWU9XCJzcy12YWx1ZVwiLHRoaXMudmFsdWVUZXh0PVwic3MtdmFsdWUtdGV4dFwiLHRoaXMudmFsdWVEZWxldGU9XCJzcy12YWx1ZS1kZWxldGVcIix0aGlzLmNvbnRlbnQ9XCJzcy1jb250ZW50XCIsdGhpcy5vcGVuPVwic3Mtb3BlblwiLHRoaXMub3BlbkFib3ZlPVwic3Mtb3Blbi1hYm92ZVwiLHRoaXMub3BlbkJlbG93PVwic3Mtb3Blbi1iZWxvd1wiLHRoaXMuc2VhcmNoPVwic3Mtc2VhcmNoXCIsdGhpcy5zZWFyY2hIaWdobGlnaHRlcj1cInNzLXNlYXJjaC1oaWdobGlnaHRcIix0aGlzLmFkZGFibGU9XCJzcy1hZGRhYmxlXCIsdGhpcy5saXN0PVwic3MtbGlzdFwiLHRoaXMub3B0Z3JvdXA9XCJzcy1vcHRncm91cFwiLHRoaXMub3B0Z3JvdXBMYWJlbD1cInNzLW9wdGdyb3VwLWxhYmVsXCIsdGhpcy5vcHRncm91cExhYmVsU2VsZWN0YWJsZT1cInNzLW9wdGdyb3VwLWxhYmVsLXNlbGVjdGFibGVcIix0aGlzLm9wdGlvbj1cInNzLW9wdGlvblwiLHRoaXMub3B0aW9uU2VsZWN0ZWQ9XCJzcy1vcHRpb24tc2VsZWN0ZWRcIix0aGlzLmhpZ2hsaWdodGVkPVwic3MtaGlnaGxpZ2h0ZWRcIix0aGlzLmRpc2FibGVkPVwic3MtZGlzYWJsZWRcIix0aGlzLmhpZGU9XCJzcy1oaWRlXCIsdGhpcy5pZD1cInNzLVwiK01hdGguZmxvb3IoMWU1Kk1hdGgucmFuZG9tKCkpLHRoaXMuc3R5bGU9ZS5zZWxlY3Quc3R5bGUuY3NzVGV4dCx0aGlzLmNsYXNzPWUuc2VsZWN0LmNsYXNzTmFtZS5zcGxpdChcIiBcIiksdGhpcy5pc011bHRpcGxlPWUuc2VsZWN0Lm11bHRpcGxlLHRoaXMuaXNBamF4PWUuaXNBamF4LHRoaXMuc2hvd1NlYXJjaD0hMSE9PWUuc2hvd1NlYXJjaCx0aGlzLnNlYXJjaEZvY3VzPSExIT09ZS5zZWFyY2hGb2N1cyx0aGlzLnNlYXJjaEhpZ2hsaWdodD0hMD09PWUuc2VhcmNoSGlnaGxpZ2h0LHRoaXMuY2xvc2VPblNlbGVjdD0hMSE9PWUuY2xvc2VPblNlbGVjdCxlLnNob3dDb250ZW50JiYodGhpcy5zaG93Q29udGVudD1lLnNob3dDb250ZW50KSx0aGlzLmlzRW5hYmxlZD0hMSE9PWUuaXNFbmFibGVkLGUuc2VhcmNoUGxhY2Vob2xkZXImJih0aGlzLnNlYXJjaFBsYWNlaG9sZGVyPWUuc2VhcmNoUGxhY2Vob2xkZXIpLGUuc2VhcmNoVGV4dCYmKHRoaXMuc2VhcmNoVGV4dD1lLnNlYXJjaFRleHQpLGUuc2VhcmNoaW5nVGV4dCYmKHRoaXMuc2VhcmNoaW5nVGV4dD1lLnNlYXJjaGluZ1RleHQpLGUucGxhY2Vob2xkZXJUZXh0JiYodGhpcy5wbGFjZWhvbGRlclRleHQ9ZS5wbGFjZWhvbGRlclRleHQpLHRoaXMuYWxsb3dEZXNlbGVjdD0hMD09PWUuYWxsb3dEZXNlbGVjdCx0aGlzLmFsbG93RGVzZWxlY3RPcHRpb249ITA9PT1lLmFsbG93RGVzZWxlY3RPcHRpb24sdGhpcy5oaWRlU2VsZWN0ZWRPcHRpb249ITA9PT1lLmhpZGVTZWxlY3RlZE9wdGlvbixlLmRlc2VsZWN0TGFiZWwmJih0aGlzLmRlc2VsZWN0TGFiZWw9ZS5kZXNlbGVjdExhYmVsKSxlLnZhbHVlc1VzZVRleHQmJih0aGlzLnZhbHVlc1VzZVRleHQ9ZS52YWx1ZXNVc2VUZXh0KSxlLnNob3dPcHRpb25Ub29sdGlwcyYmKHRoaXMuc2hvd09wdGlvblRvb2x0aXBzPWUuc2hvd09wdGlvblRvb2x0aXBzKSxlLnNlbGVjdEJ5R3JvdXAmJih0aGlzLnNlbGVjdEJ5R3JvdXA9ZS5zZWxlY3RCeUdyb3VwKSxlLmxpbWl0JiYodGhpcy5saW1pdD1lLmxpbWl0KSxlLnNlYXJjaEZpbHRlciYmKHRoaXMuc2VhcmNoRmlsdGVyPWUuc2VhcmNoRmlsdGVyKSxudWxsIT1lLnRpbWVvdXREZWxheSYmKHRoaXMudGltZW91dERlbGF5PWUudGltZW91dERlbGF5KSx0aGlzLmFkZFRvQm9keT0hMD09PWUuYWRkVG9Cb2R5fXQuQ29uZmlnPXN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITA7dmFyIHM9KG4ucHJvdG90eXBlLnNldFZhbHVlPWZ1bmN0aW9uKCl7aWYodGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSl7aWYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKWZvcih2YXIgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHQ9MCxpPXRoaXMuZWxlbWVudC5vcHRpb25zO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO3Muc2VsZWN0ZWQ9ITE7Zm9yKHZhciBuPTAsYT1lO248YS5sZW5ndGg7bisrKWFbbl0udmFsdWU9PT1zLnZhbHVlJiYocy5zZWxlY3RlZD0hMCl9ZWxzZSBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksdGhpcy5lbGVtZW50LnZhbHVlPWU/ZS52YWx1ZTpcIlwiO3RoaXMubWFpbi5kYXRhLmlzT25DaGFuZ2VFbmFibGVkPSExLHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLHRoaXMubWFpbi5kYXRhLmlzT25DaGFuZ2VFbmFibGVkPSEwfX0sbi5wcm90b3R5cGUuYWRkQXR0cmlidXRlcz1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC50YWJJbmRleD0tMSx0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLmVsZW1lbnQuZGF0YXNldC5zc2lkPXRoaXMubWFpbi5jb25maWcuaWR9LG4ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKGUpe3QubWFpbi5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHQubWFpbi5yZW5kZXIoKX0pfSxuLnByb3RvdHlwZS5hZGRNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLm1haW4uY29uZmlnLmlzQWpheHx8KHRoaXMubXV0YXRpb25PYnNlcnZlcj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihlKXt0LnRyaWdnZXJNdXRhdGlvbk9ic2VydmVyJiYodC5tYWluLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdC5tYWluLmRhdGEuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCksdC5tYWluLnJlbmRlcigpLGUuZm9yRWFjaChmdW5jdGlvbihlKXtcImNsYXNzXCI9PT1lLmF0dHJpYnV0ZU5hbWUmJnQubWFpbi5zbGltLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzKHQubWFpbi5zbGltLmNvbnRhaW5lcil9KSl9KSx0aGlzLm9ic2VydmVNdXRhdGlvbk9ic2VydmVyKCkpfSxuLnByb3RvdHlwZS5vYnNlcnZlTXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3RoaXMubXV0YXRpb25PYnNlcnZlciYmdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LHthdHRyaWJ1dGVzOiEwLGNoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwfSl9LG4ucHJvdG90eXBlLmRpc2Nvbm5lY3RNdXRhdGlvbk9ic2VydmVyPWZ1bmN0aW9uKCl7dGhpcy5tdXRhdGlvbk9ic2VydmVyJiZ0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpfSxuLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LmlubmVySFRNTD1cIlwiO2Zvcih2YXIgdD0wLGk9ZTt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtpZihzLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIG49cyxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtpZihhLmxhYmVsPW4ubGFiZWwsbi5vcHRpb25zKWZvcih2YXIgbz0wLGw9bi5vcHRpb25zO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO2EuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPcHRpb24ocikpfXRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChhKX1lbHNlIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU9wdGlvbihzKSl9fSxuLnByb3RvdHlwZS5jcmVhdGVPcHRpb249ZnVuY3Rpb24odCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtyZXR1cm4gaS52YWx1ZT10LnZhbHVlfHx0LnRleHQsaS5pbm5lckhUTUw9dC5pbm5lckhUTUx8fHQudGV4dCx0LnNlbGVjdGVkJiYoaS5zZWxlY3RlZD10LnNlbGVjdGVkKSx0LmRpc2FibGVkJiYoaS5kaXNhYmxlZD0hMCksdC5wbGFjZWhvbGRlciYmaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYWNlaG9sZGVyXCIsXCJ0cnVlXCIpLHQuY2xhc3MmJnQuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7aS5jbGFzc0xpc3QuYWRkKGUpfSksdC5kYXRhJiZcIm9iamVjdFwiPT10eXBlb2YgdC5kYXRhJiZPYmplY3Qua2V5cyh0LmRhdGEpLmZvckVhY2goZnVuY3Rpb24oZSl7aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2UsdC5kYXRhW2VdKX0pLGl9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMCx0aGlzLmVsZW1lbnQ9ZS5zZWxlY3QsdGhpcy5tYWluPWUubWFpbix0aGlzLmVsZW1lbnQuZGlzYWJsZWQmJih0aGlzLm1haW4uY29uZmlnLmlzRW5hYmxlZD0hMSksdGhpcy5hZGRBdHRyaWJ1dGVzKCksdGhpcy5hZGRFdmVudExpc3RlbmVycygpLHRoaXMubXV0YXRpb25PYnNlcnZlcj1udWxsLHRoaXMuYWRkTXV0YXRpb25PYnNlcnZlcigpLHRoaXMuZWxlbWVudC5zbGltPWUubWFpbn10LlNlbGVjdD1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBhPWkoMCksbz1pKDEpLHM9KG4ucHJvdG90eXBlLmNvbnRhaW5lckRpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuc3R5bGUuY3NzVGV4dD10aGlzLm1haW4uY29uZmlnLnN0eWxlLHRoaXMudXBkYXRlQ29udGFpbmVyRGl2Q2xhc3MoZSksZX0sbi5wcm90b3R5cGUudXBkYXRlQ29udGFpbmVyRGl2Q2xhc3M9ZnVuY3Rpb24oZSl7dGhpcy5tYWluLmNvbmZpZy5jbGFzcz10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSxlLmNsYXNzTmFtZT1cIlwiLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmlkKSxlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5tYWluKTtmb3IodmFyIHQ9MCxpPXRoaXMubWFpbi5jb25maWcuY2xhc3M7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07XCJcIiE9PXMudHJpbSgpJiZlLmNsYXNzTGlzdC5hZGQocyl9fSxuLnByb3RvdHlwZS5zaW5nbGVTZWxlY3RlZERpdj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnNpbmdsZVNlbGVjdGVkKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtpLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWhvbGRlclwiKSxlLmFwcGVuZENoaWxkKGkpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3MuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuZGVzZWxlY3RMYWJlbCxzLmNsYXNzTGlzdC5hZGQoXCJzcy1kZXNlbGVjdFwiKSxzLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmdC5tYWluLnNldChcIlwiKX0sZS5hcHBlbmRDaGlsZChzKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtuLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5hcnJvdyk7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIGEuY2xhc3NMaXN0LmFkZChcImFycm93LWRvd25cIiksbi5hcHBlbmRDaGlsZChhKSxlLmFwcGVuZENoaWxkKG4pLGUub25jbGljaz1mdW5jdGlvbigpe3QubWFpbi5jb25maWcuaXNFbmFibGVkJiYodC5tYWluLmRhdGEuY29udGVudE9wZW4/dC5tYWluLmNsb3NlKCk6dC5tYWluLm9wZW4oKSl9LHtjb250YWluZXI6ZSxwbGFjZWhvbGRlcjppLGRlc2VsZWN0OnMsYXJyb3dJY29uOntjb250YWluZXI6bixhcnJvdzphfX19LG4ucHJvdG90eXBlLnBsYWNlaG9sZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZihudWxsPT09ZXx8ZSYmZS5wbGFjZWhvbGRlcil7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0LHRoaXMuc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNpbmdsZVNlbGVjdGVkLnBsYWNlaG9sZGVyLmlubmVySFRNTD10Lm91dGVySFRNTCl9ZWxzZXt2YXIgaT1cIlwiO2UmJihpPWUuaW5uZXJIVE1MJiYhMCE9PXRoaXMubWFpbi5jb25maWcudmFsdWVzVXNlVGV4dD9lLmlubmVySFRNTDplLnRleHQpLHRoaXMuc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNpbmdsZVNlbGVjdGVkLnBsYWNlaG9sZGVyLmlubmVySFRNTD1lP2k6XCJcIil9fSxuLnByb3RvdHlwZS5kZXNlbGVjdD1mdW5jdGlvbigpe2lmKHRoaXMuc2luZ2xlU2VsZWN0ZWQpe2lmKCF0aGlzLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3QpcmV0dXJuIHZvaWQgdGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic3MtaGlkZVwiKTtcIlwiPT09dGhpcy5tYWluLnNlbGVjdGVkKCk/dGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic3MtaGlkZVwiKTp0aGlzLnNpbmdsZVNlbGVjdGVkLmRlc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzcy1oaWRlXCIpfX0sbi5wcm90b3R5cGUubXVsdGlTZWxlY3RlZERpdj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm11bHRpU2VsZWN0ZWQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVzKSxlLmFwcGVuZENoaWxkKGkpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYWRkKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gbi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcucGx1cyksbi5vbmNsaWNrPWZ1bmN0aW9uKGUpe3QubWFpbi5kYXRhLmNvbnRlbnRPcGVuJiYodC5tYWluLmNsb3NlKCksZS5zdG9wUHJvcGFnYXRpb24oKSl9LHMuYXBwZW5kQ2hpbGQobiksZS5hcHBlbmRDaGlsZChzKSxlLm9uY2xpY2s9ZnVuY3Rpb24oZSl7dC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModC5tYWluLmNvbmZpZy52YWx1ZURlbGV0ZSl8fCh0Lm1haW4uZGF0YS5jb250ZW50T3Blbj90Lm1haW4uY2xvc2UoKTp0Lm1haW4ub3BlbigpKSl9LHtjb250YWluZXI6ZSx2YWx1ZXM6aSxhZGQ6cyxwbHVzOm59fSxuLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXtpZih0aGlzLm11bHRpU2VsZWN0ZWQpe2Zvcih2YXIgZSx0PXRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuY2hpbGROb2RlcyxpPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkscz1bXSxuPTAsYT10O248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2U9ITA7Zm9yKHZhciBsPTAscj1pO2w8ci5sZW5ndGg7bCsrKXt2YXIgYz1yW2xdO1N0cmluZyhjLmlkKT09PVN0cmluZyhvLmRhdGFzZXQuaWQpJiYoZT0hMSl9ZSYmcy5wdXNoKG8pfWZvcih2YXIgZD0wLGg9cztkPGgubGVuZ3RoO2QrKyl7dmFyIHU9aFtkXTt1LmNsYXNzTGlzdC5hZGQoXCJzcy1vdXRcIiksdGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5yZW1vdmVDaGlsZCh1KX1mb3IodD10aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmNoaWxkTm9kZXMsYz0wO2M8aS5sZW5ndGg7YysrKXtlPSExO2Zvcih2YXIgcD0wLG09dDtwPG0ubGVuZ3RoO3ArKylvPW1bcF0sU3RyaW5nKGlbY10uaWQpPT09U3RyaW5nKG8uZGF0YXNldC5pZCkmJihlPSEwKTtlfHwoMCE9PXQubGVuZ3RoJiZIVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50PzA9PT1jP3RoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuaW5zZXJ0QmVmb3JlKHRoaXMudmFsdWVEaXYoaVtjXSksdFtjXSk6dFtjLTFdLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsdGhpcy52YWx1ZURpdihpW2NdKSk6dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5hcHBlbmRDaGlsZCh0aGlzLnZhbHVlRGl2KGlbY10pKSl9aWYoMD09PWkubGVuZ3RoKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtmLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCksZi5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQsdGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5pbm5lckhUTUw9Zi5vdXRlckhUTUx9fX0sbi5wcm90b3R5cGUudmFsdWVEaXY9ZnVuY3Rpb24oYSl7dmFyIG89dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWUpLGUuZGF0YXNldC5pZD1hLmlkO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlVGV4dCksdC5pbm5lckhUTUw9YS5pbm5lckhUTUwmJiEwIT09dGhpcy5tYWluLmNvbmZpZy52YWx1ZXNVc2VUZXh0P2EuaW5uZXJIVE1MOmEudGV4dCxlLmFwcGVuZENoaWxkKHQpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZURlbGV0ZSksaS5pbm5lckhUTUw9dGhpcy5tYWluLmNvbmZpZy5kZXNlbGVjdExhYmVsLGkub25jbGljaz1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD0hMTtpZihvLm1haW4uY29uZmlnLmlzRW5hYmxlZCl7aWYoby5tYWluLmJlZm9yZU9uQ2hhbmdlfHwodD0hMCksby5tYWluLmJlZm9yZU9uQ2hhbmdlKXtmb3IodmFyIGk9by5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSxzPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaSkpLG49MDtuPHMubGVuZ3RoO24rKylzW25dLmlkPT09YS5pZCYmcy5zcGxpY2UobiwxKTshMSE9PW8ubWFpbi5iZWZvcmVPbkNoYW5nZShzKSYmKHQ9ITApfXQmJihvLm1haW4uZGF0YS5yZW1vdmVGcm9tU2VsZWN0ZWQoYS5pZCxcImlkXCIpLG8ubWFpbi5yZW5kZXIoKSxvLm1haW4uc2VsZWN0LnNldFZhbHVlKCksby5tYWluLmRhdGEub25EYXRhQ2hhbmdlKCkpfX0sZS5hcHBlbmRDaGlsZChpKSxlfSxuLnByb3RvdHlwZS5jb250ZW50RGl2PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuY29udGVudCksZX0sbi5wcm90b3R5cGUuc2VhcmNoRGl2PWZ1bmN0aW9uKCl7dmFyIG49dGhpcyxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnNlYXJjaCk7dmFyIHQ9e2NvbnRhaW5lcjplLGlucHV0OnN9O3JldHVybiB0aGlzLm1haW4uY29uZmlnLnNob3dTZWFyY2h8fChlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSxzLnJlYWRPbmx5PSEwKSxzLnR5cGU9XCJzZWFyY2hcIixzLnBsYWNlaG9sZGVyPXRoaXMubWFpbi5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXIscy50YWJJbmRleD0wLHMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHRoaXMubWFpbi5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIixcIm9mZlwiKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLFwib2ZmXCIpLHMuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIixcIm9mZlwiKSxzLm9uY2xpY2s9ZnVuY3Rpb24oZSl7c2V0VGltZW91dChmdW5jdGlvbigpe1wiXCI9PT1lLnRhcmdldC52YWx1ZSYmbi5tYWluLnNlYXJjaChcIlwiKX0sMTApfSxzLm9ua2V5ZG93bj1mdW5jdGlvbihlKXtcIkFycm93VXBcIj09PWUua2V5PyhuLm1haW4ub3BlbigpLG4uaGlnaGxpZ2h0VXAoKSxlLnByZXZlbnREZWZhdWx0KCkpOlwiQXJyb3dEb3duXCI9PT1lLmtleT8obi5tYWluLm9wZW4oKSxuLmhpZ2hsaWdodERvd24oKSxlLnByZXZlbnREZWZhdWx0KCkpOlwiVGFiXCI9PT1lLmtleT9uLm1haW4uZGF0YS5jb250ZW50T3Blbj9uLm1haW4uY2xvc2UoKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLmNsb3NlKCl9LG4ubWFpbi5jb25maWcudGltZW91dERlbGF5KTpcIkVudGVyXCI9PT1lLmtleSYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzLm9ua2V5dXA9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7aWYoXCJFbnRlclwiPT09ZS5rZXkpe2lmKG4ubWFpbi5hZGRhYmxlJiZlLmN0cmxLZXkpcmV0dXJuIGEuY2xpY2soKSxlLnByZXZlbnREZWZhdWx0KCksdm9pZCBlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBpPW4ubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK24ubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpO2kmJmkuY2xpY2soKX1lbHNlXCJBcnJvd1VwXCI9PT1lLmtleXx8XCJBcnJvd0Rvd25cIj09PWUua2V5fHwoXCJFc2NhcGVcIj09PWUua2V5P24ubWFpbi5jbG9zZSgpOm4ubWFpbi5jb25maWcuc2hvd1NlYXJjaCYmbi5tYWluLmRhdGEuY29udGVudE9wZW4/bi5tYWluLnNlYXJjaCh0LnZhbHVlKTpzLnZhbHVlPVwiXCIpO2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpfSxzLm9uZm9jdXM9ZnVuY3Rpb24oKXtuLm1haW4ub3BlbigpfSxlLmFwcGVuZENoaWxkKHMpLHRoaXMubWFpbi5hZGRhYmxlJiYoYS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYWRkYWJsZSksYS5pbm5lckhUTUw9XCIrXCIsYS5vbmNsaWNrPWZ1bmN0aW9uKGUpe2lmKG4ubWFpbi5hZGRhYmxlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD1uLnNlYXJjaC5pbnB1dC52YWx1ZTtpZihcIlwiPT09dC50cmltKCkpcmV0dXJuIHZvaWQgbi5zZWFyY2guaW5wdXQuZm9jdXMoKTt2YXIgaT1uLm1haW4uYWRkYWJsZSh0KSxzPVwiXCI7aWYoIWkpcmV0dXJuO1wib2JqZWN0XCI9PXR5cGVvZiBpP28udmFsaWRhdGVPcHRpb24oaSkmJihuLm1haW4uYWRkRGF0YShpKSxzPWkudmFsdWU/aS52YWx1ZTppLnRleHQpOihuLm1haW4uYWRkRGF0YShuLm1haW4uZGF0YS5uZXdPcHRpb24oe3RleHQ6aSx2YWx1ZTppfSkpLHM9aSksbi5tYWluLnNlYXJjaChcIlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLnNldChzLFwidmFsdWVcIiwhMSwhMSl9LDEwMCksbi5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0JiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5tYWluLmNsb3NlKCl9LDEwMCl9fSxlLmFwcGVuZENoaWxkKGEpLHQuYWRkYWJsZT1hKSx0fSxuLnByb3RvdHlwZS5oaWdobGlnaHRVcD1mdW5jdGlvbigpe3ZhciBlPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQ9bnVsbDtpZihlKWZvcih0PWUucHJldmlvdXNTaWJsaW5nO251bGwhPT10JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKTspdD10LnByZXZpb3VzU2libGluZztlbHNle3ZhciBpPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7dD1pW2kubGVuZ3RoLTFdfWlmKHQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbCkmJih0PW51bGwpLG51bGw9PT10KXt2YXIgcz1lLnBhcmVudE5vZGU7aWYocy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cCkmJnMucHJldmlvdXNTaWJsaW5nKXt2YXIgbj1zLnByZXZpb3VzU2libGluZy5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7bi5sZW5ndGgmJih0PW5bbi5sZW5ndGgtMV0pfX10JiYoZSYmZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSxhLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5saXN0LHQpKX0sbi5wcm90b3R5cGUuaGlnaGxpZ2h0RG93bj1mdW5jdGlvbigpe3ZhciBlPXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQ9bnVsbDtpZihlKWZvcih0PWUubmV4dFNpYmxpbmc7bnVsbCE9PXQmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpOyl0PXQubmV4dFNpYmxpbmc7ZWxzZSB0PXRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKFwiLlwiK3RoaXMubWFpbi5jb25maWcub3B0aW9uK1wiOm5vdCguXCIrdGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCtcIilcIik7aWYobnVsbD09PXQmJm51bGwhPT1lKXt2YXIgaT1lLnBhcmVudE5vZGU7aS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5vcHRncm91cCkmJmkubmV4dFNpYmxpbmcmJih0PWkubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpKX10JiYoZSYmZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcuaGlnaGxpZ2h0ZWQpLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSxhLmVuc3VyZUVsZW1lbnRJblZpZXcodGhpcy5saXN0LHQpKX0sbi5wcm90b3R5cGUubGlzdERpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmxpc3QpLGV9LG4ucHJvdG90eXBlLm9wdGlvbnM9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9XCJcIik7dmFyIHQsaT10aGlzLm1haW4uZGF0YS5maWx0ZXJlZHx8dGhpcy5tYWluLmRhdGEuZGF0YTtpZigodGhpcy5saXN0LmlubmVySFRNTD1cIlwiKSE9PWUpcmV0dXJuKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPWUsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQodCk7aWYodGhpcy5tYWluLmNvbmZpZy5pc0FqYXgmJnRoaXMubWFpbi5jb25maWcuaXNTZWFyY2hpbmcpcmV0dXJuKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHQuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuc2VhcmNoaW5nVGV4dCx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZCh0KTtpZigwPT09aS5sZW5ndGgpe3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHMuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbikscy5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLHMuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuc2VhcmNoVGV4dCx2b2lkIHRoaXMubGlzdC5hcHBlbmRDaGlsZChzKX1mb3IodmFyIG49ZnVuY3Rpb24oZSl7aWYoZS5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXt2YXIgdD1lLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmNsYXNzTGlzdC5hZGQoYy5tYWluLmNvbmZpZy5vcHRncm91cExhYmVsKSxjLm1haW4uY29uZmlnLnNlbGVjdEJ5R3JvdXAmJmMubWFpbi5jb25maWcuaXNNdWx0aXBsZSYmaS5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbFNlbGVjdGFibGUpLGkuaW5uZXJIVE1MPXQubGFiZWwsbi5hcHBlbmRDaGlsZChpKTt2YXIgcz10Lm9wdGlvbnM7aWYocyl7Zm9yKHZhciBhPTAsbz1zO2E8by5sZW5ndGg7YSsrKXt2YXIgbD1vW2FdO24uYXBwZW5kQ2hpbGQoYy5vcHRpb24obCkpfWlmKGMubWFpbi5jb25maWcuc2VsZWN0QnlHcm91cCYmYy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgcj1jO2kuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7Zm9yKHZhciB0PTAsaT1uLmNoaWxkcmVuO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdOy0xIT09cy5jbGFzc05hbWUuaW5kZXhPZihyLm1haW4uY29uZmlnLm9wdGlvbikmJnMuY2xpY2soKX19KX19Yy5saXN0LmFwcGVuZENoaWxkKG4pfWVsc2UgYy5saXN0LmFwcGVuZENoaWxkKGMub3B0aW9uKGUpKX0sYz10aGlzLGE9MCxvPWk7YTxvLmxlbmd0aDthKyspbihvW2FdKX0sbi5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKHIpe2lmKHIucGxhY2Vob2xkZXIpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSksZX12YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLm9wdGlvbiksci5jbGFzcyYmci5jbGFzcy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihlKXt0LmNsYXNzTGlzdC5hZGQoZSl9KSxyLnN0eWxlJiYodC5zdHlsZS5jc3NUZXh0PXIuc3R5bGUpO3ZhciBjPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCk7dC5kYXRhc2V0LmlkPXIuaWQsdGhpcy5tYWluLmNvbmZpZy5zZWFyY2hIaWdobGlnaHQmJnRoaXMubWFpbi5zbGltJiZyLmlubmVySFRNTCYmXCJcIiE9PXRoaXMubWFpbi5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZS50cmltKCk/dC5pbm5lckhUTUw9YS5oaWdobGlnaHQoci5pbm5lckhUTUwsdGhpcy5tYWluLnNsaW0uc2VhcmNoLmlucHV0LnZhbHVlLHRoaXMubWFpbi5jb25maWcuc2VhcmNoSGlnaGxpZ2h0ZXIpOnIuaW5uZXJIVE1MJiYodC5pbm5lckhUTUw9ci5pbm5lckhUTUwpLHRoaXMubWFpbi5jb25maWcuc2hvd09wdGlvblRvb2x0aXBzJiZ0LnRleHRDb250ZW50JiZ0LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsdC50ZXh0Q29udGVudCk7dmFyIGQ9dGhpczt0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PXRoaXMuZGF0YXNldC5pZDtpZighMD09PXIuc2VsZWN0ZWQmJmQubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdE9wdGlvbil7dmFyIGk9ITE7aWYoZC5tYWluLmJlZm9yZU9uQ2hhbmdlJiZkLm1haW4uY29uZmlnLmlzTXVsdGlwbGV8fChpPSEwKSxkLm1haW4uYmVmb3JlT25DaGFuZ2UmJmQubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBzPWQubWFpbi5kYXRhLmdldFNlbGVjdGVkKCksbj1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHMpKSxhPTA7YTxuLmxlbmd0aDthKyspblthXS5pZD09PXQmJm4uc3BsaWNlKGEsMSk7ITEhPT1kLm1haW4uYmVmb3JlT25DaGFuZ2UobikmJihpPSEwKX1pJiYoZC5tYWluLmNvbmZpZy5pc011bHRpcGxlPyhkLm1haW4uZGF0YS5yZW1vdmVGcm9tU2VsZWN0ZWQodCxcImlkXCIpLGQubWFpbi5yZW5kZXIoKSxkLm1haW4uc2VsZWN0LnNldFZhbHVlKCksZC5tYWluLmRhdGEub25EYXRhQ2hhbmdlKCkpOmQubWFpbi5zZXQoXCJcIikpfWVsc2V7aWYoci5kaXNhYmxlZHx8ci5zZWxlY3RlZClyZXR1cm47aWYoZC5tYWluLmNvbmZpZy5saW1pdCYmQXJyYXkuaXNBcnJheShjKSYmZC5tYWluLmNvbmZpZy5saW1pdDw9Yy5sZW5ndGgpcmV0dXJuO2lmKGQubWFpbi5iZWZvcmVPbkNoYW5nZSl7dmFyIG89dm9pZCAwLGw9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkLm1haW4uZGF0YS5nZXRPYmplY3RGcm9tRGF0YSh0KSkpO2wuc2VsZWN0ZWQ9ITAsZC5tYWluLmNvbmZpZy5pc011bHRpcGxlPyhvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpKS5wdXNoKGwpOm89SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShsKSksITEhPT1kLm1haW4uYmVmb3JlT25DaGFuZ2UobykmJmQubWFpbi5zZXQodCxcImlkXCIsZC5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0KX1lbHNlIGQubWFpbi5zZXQodCxcImlkXCIsZC5tYWluLmNvbmZpZy5jbG9zZU9uU2VsZWN0KX19KTt2YXIgaT1jJiZhLmlzVmFsdWVJbkFycmF5T2ZPYmplY3RzKGMsXCJpZFwiLHIuaWQpO3JldHVybihyLmRpc2FibGVkfHxpKSYmKHQub25jbGljaz1udWxsLGQubWFpbi5jb25maWcuYWxsb3dEZXNlbGVjdE9wdGlvbnx8dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLGQubWFpbi5jb25maWcuaGlkZVNlbGVjdGVkT3B0aW9uJiZ0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWRlKSksaT90LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb25TZWxlY3RlZCk6dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMubWFpbi5jb25maWcub3B0aW9uU2VsZWN0ZWQpLHR9LG4pO2Z1bmN0aW9uIG4oZSl7dGhpcy5tYWluPWUubWFpbix0aGlzLmNvbnRhaW5lcj10aGlzLmNvbnRhaW5lckRpdigpLHRoaXMuY29udGVudD10aGlzLmNvbnRlbnREaXYoKSx0aGlzLnNlYXJjaD10aGlzLnNlYXJjaERpdigpLHRoaXMubGlzdD10aGlzLmxpc3REaXYoKSx0aGlzLm9wdGlvbnMoKSx0aGlzLnNpbmdsZVNlbGVjdGVkPW51bGwsdGhpcy5tdWx0aVNlbGVjdGVkPW51bGwsdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlPyh0aGlzLm11bHRpU2VsZWN0ZWQ9dGhpcy5tdWx0aVNlbGVjdGVkRGl2KCksdGhpcy5tdWx0aVNlbGVjdGVkJiZ0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyKSk6KHRoaXMuc2luZ2xlU2VsZWN0ZWQ9dGhpcy5zaW5nbGVTZWxlY3RlZERpdigpLHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyKSksdGhpcy5tYWluLmNvbmZpZy5hZGRUb0JvZHk/KHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaWQpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KSk6dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KSx0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2guY29udGFpbmVyKSx0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5saXN0KX10LlNsaW09c31dLG4uYz1zLG4uZD1mdW5jdGlvbihlLHQsaSl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Oml9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihpKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIHMgaW4gdCluLmQoaSxzLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwscykpO3JldHVybiBpfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MikpLmRlZmF1bHQ7ZnVuY3Rpb24gbihlKXtpZihzW2VdKXJldHVybiBzW2VdLmV4cG9ydHM7dmFyIHQ9c1tlXT17aTplLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGlbZV0uY2FsbCh0LmV4cG9ydHMsdCx0LmV4cG9ydHMsbiksdC5sPSEwLHQuZXhwb3J0c312YXIgaSxzfSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGdlbmVyaWMgY29tcG9uZW50IG9mIFN0YWRpYStcclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50IHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgbmFtZS5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ015IENvbXBvbmVudCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgdW5pcXVlIElELCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBvbiBsb2FkLlxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBib29sZWFuIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCByZWNlaXZlIGV2ZW50cyBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgc3RhcnQgbG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID1cclxuICAgICAgICAgICAgdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKSArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XHJcblxyXG4gICAgICAgIHRoaXMub25TdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBDb21wb25lbnQgaGFzIGFuIGVsZW1lbnQgaW4gdGhlIERPTVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyB1bmxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIHVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIENvbXBvbmVudCBzaG91bGQgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIENvbXBvbmVudCBzaG91bGQgc3RvcC5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZC5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgY2xhc3MgcmVzcG9uc2libGUgZm9yIGxvYWRpbmcgW1tDb21wb25lbnR8Q29tcG9uZW50c11dIGFuZCBkZWxpdmVyaW5nIGV2ZW50cy5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50TG9hZGVyIHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRMb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50czogQ29tcG9uZW50W107XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlcnMgYSBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGUgPT4geyByZXR1cm4gZS5pZCAhPT0gY29tcG9uZW50LmlkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5lbmFibGVkKSBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIGNvbXBvbmVudCBsb2FkZXIuXHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkKSBjb21wb25lbnQudW5sb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb21wb25lbnQuZW5hYmxlZCkgY29tcG9uZW50Lm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcFRpbWVyKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBwcmVmaXg6c3RyaW5nID0gJ1tTdGFkaWErXSc7XHJcblxyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgaW5mbyA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+TgyAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBibGFjaycpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3YXJuaW5nID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ifICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IG9yYW5nZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlcnJvciA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj4p2MICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IDcwMCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnQgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/Cfp6kgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogZGFya2dyZWVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEdWJpb3VzbHkgY3JlYXRlZCBieSBBZHJpYW4gQ29vbmV5XHJcbiAgICAgKiBAYXV0aG9yIGh0dHA6Ly9hZHJpYW5jb29uZXkuZ2l0aHViLmlvXHJcbiAgICAgKi9cclxuICAgIGltYWdlID0gZnVuY3Rpb24odXJsOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0Qm94ID0gZnVuY3Rpb24od2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmc6IFwiK1wiLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxcHg7IHBhZGRpbmc6IFwiICsgTWF0aC5mbG9vcihoZWlnaHQvMikgKyBcInB4IFwiICsgTWF0aC5mbG9vcih3aWR0aC8yKSArIFwicHg7IGxpbmUtaGVpZ2h0OiAwO1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkaW0gPSBnZXRCb3god2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZGltLnN0cmluZywgZGltLnN0eWxlICsgXCJiYWNrZ3JvdW5kOiB1cmwoXCIgKyB1cmwgKyBcIik7IGJhY2tncm91bmQtc2l6ZTogXCIgKyAod2lkdGgpICsgXCJweCBcIiArIChoZWlnaHQpICsgXCJweDsgY29sb3I6IHRyYW5zcGFyZW50O1wiKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2dnZXIoKTsiLCJjbGFzcyBVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RhZGlhJ3MgbWVudSBiYXIgZWxlbWVudCwgdXNlZCB0byBrbm93IHdoZW4gdGhlIHBsYXllciBoYXMgb3BlbmVkIHRoZSBtZW51LlxyXG4gICAgICovXHJcbiAgICBtZW51RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlgxYXN2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNZW51T3BlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW51RWxlbWVudC5zdHlsZS5vcGFjaXR5ICE9PSAnMCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFV0aWwoKTsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0Nsb2NrLnNjc3MnO1xyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIGNsb2NrIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENsb2NrIHR5cGUuXHJcbiAqIEBjbGFzcyBDbG9ja1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiQ2xvY2tcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjbG9jayBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgPHNwYW4+LCBhZGRzIHRoZSByaWdodCBjbGFzc2VzLCBhbmQgc3RvcmVzIGl0IGluIFtAbGluayAjZWxlbWVudF1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfY2xvY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGNsb2NrIHdoZW4gaXQncyB2aXNpYmxlXHJcbiAgICAgICAgaWYoVXRpbC5pc01lbnVPcGVuKCkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeGhBeWYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3MnO1xyXG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vVUlUYWInO1xyXG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcclxuXHJcbmNvbnN0IGNocm9tZSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSBkcm9wZG93biBhbGxvd2luZyBjaGFuZ2luZyBvZiB0aGUgY29kZWMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIEZvcmNlQ29kZWMgdHlwZS5cclxuICogQGNsYXNzIEZvcmNlQ29kZWNcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JjZUNvZGVjIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ0ZvcmNlIENvZGVjJztcclxuICAgIGNvZGVjOiBudW1iZXIgPSBDb2RlYy5BVVRPTUFUSUM7XHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuICAgIHRhYjogVUlUYWI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiOiBVSVRhYikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2NvZGVjJ10sIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVjID0gcmVzdWx0LmNvZGVjO1xyXG5cclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spIFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjb2RlYzogc2VsZi5jb2RlYyB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnRhYi5hZGRSb3coXHJcbiAgICAgICAgICAgIG5ldyBVSVJvdyhcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfc2VsZWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNvZGVjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuQVVUT01BVElDfVwiPkF1dG9tYXRpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLlZQOX1cIj5WUDk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5IMjY0fVwiPkgyNjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdGFkaWFwbHVzX2J1dHRvbi1zbWFsbFwiPkFwcGx5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YWRpYXBsdXNfbXV0ZWRcIj5Ob3RlOiBjaGFuZ2luZyB0aGUgY29kZWMgd2lsbCByZWxvYWQgdGhlIHBhZ2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgKyAnLXJvdycsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QgPSBuZXcgU2VsZWN0KHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLCBDb2RlYy5BVVRPTUFUSUMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QuZ2V0KClbMF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQoc2VsZi5jb2RlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3JjZUNvZGVjLnNldENvZGVjKHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvblJlbG9hZDogKHJvdzpVSVJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgQ29kZWMuQVVUT01BVElDKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBlbmFibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldENvZGVjKGNvZGVjOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XHJcbiAgICAgICAgY2FzZSBDb2RlYy5WUDk6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiLCAne1widnA5XCI6XCJFeHRlcm5hbERlY29kZXJcIn0nKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ29kZWMuSDI2NDpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIsICd7XCJoMjY0XCI6XCJFeHRlcm5hbERlY29kZXJcIiwgXCJ2cDlcIjpcImxpYnZweFwifScpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBDb2RlYy5BVVRPTUFUSUM6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiKTtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2RlYyB7XHJcbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcclxuICAgIHN0YXRpYyBWUDkgPSAxO1xyXG4gICAgc3RhdGljIEgyNjQgPSAyO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MnO1xyXG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vVUlUYWInO1xyXG5pbXBvcnQgeyBVSVJvdywgVUlSb3dPcHRpb25zIH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xyXG5cclxuY29uc3QgY2hyb21lID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbi8qKlxyXG4gKiBBIGRyb3Bkb3duIGFsbG93aW5nIGNoYW5naW5nIG9mIHRoZSBjb2RlYy5cclxuICpcclxuICogQGV4cG9ydCB0aGUgRm9yY2VDb2RlYyB0eXBlLlxyXG4gKiBAY2xhc3MgRm9yY2VDb2RlY1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcmNlUmVzb2x1dGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9ICdGb3JjZSBSZXNvbHV0aW9uJztcclxuICAgIHJlc29sdXRpb246IG51bWJlciA9IFJlc29sdXRpb24uQVVUT01BVElDO1xyXG4gICAgc2VsZWN0OiBTZWxlY3Q7XHJcbiAgICB0YWI6IFVJVGFiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhYjogVUlUYWIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYiA9IHRhYjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydyZXNvbHV0aW9uJ10sIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSByZXN1bHQucmVzb2x1dGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmVzb2x1dGlvbjogc2VsZi5yZXNvbHV0aW9uIH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGFiLmFkZFJvdyhcclxuICAgICAgICAgICAgbmV3IFVJUm93KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfcm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19zZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVzb2x1dGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uQVVUT01BVElDfVwiPkF1dG9tYXRpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uVUhEXzRLfVwiPjRLPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3RhZGlhcGx1c19idXR0b24tc21hbGxcIj5BcHBseTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGFkaWFwbHVzX211dGVkXCI+Tm90ZTogY2hhbmdpbmcgdGhlIHJlc29sdXRpb24gd2lsbCByZWxvYWQgdGhlIHBhZ2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiPk5vdGU6IHRoZSBzZXQgdmFsdWUgaXMgdGhlIG1heGltdW0gcmVzb2x1dGlvbiBTdGFkaWEgd2lsbCBhdHRlbXB0IHRvIGFjaGlldmUuIElmIHlvdXIgY29tcHV0ZXIgaXMgbm90IGNhcGFibGUgb2YgcmVuZGVyaW5nIHRoZSByZXNvbHV0aW9uIG9yIGl0IGlzIG5vdCBhdmFpbGFibGUgd2l0aCB0aGUgY3VycmVudCBkYXRhIHVzYWdlIG9wdGlvbiwgaXQgd2lsbCBub3QgYmUgZGlzcGxheWVkLjwvcD5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgUmVzb2x1dGlvbi5BVVRPTUFUSUMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gcm93LmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x1dGlvbiA9IHBhcnNlSW50KHNlbGYuc2VsZWN0LmdldCgpWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnNldChzZWxmLnJlc29sdXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yY2VSZXNvbHV0aW9uLnNldFJlc29sdXRpb24oc2VsZi5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIFJlc29sdXRpb24uQVVUT01BVElDKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYucmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGVuYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0UmVzb2x1dGlvbihjb2RlYzogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoO1xyXG4gICAgICAgIHN3aXRjaCAoY29kZWMpIHtcclxuICAgICAgICBjYXNlIFJlc29sdXRpb24uVUhEXzRLOlxyXG4gICAgICAgICAgICB3aWR0aCA9IDM4NDA7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IDIxNjA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIFJlc29sdXRpb24uQVVUT01BVElDOlxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnYXZhaWxXaWR0aCcsIHsgdmFsdWU6ICR7d2lkdGh9IH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ2F2YWlsSGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnNjcmVlbiwgJ3dpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnaGVpZ2h0JywgeyB2YWx1ZTogJHtoZWlnaHR9IH0pO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNvbHV0aW9uIHtcclxuICAgIHN0YXRpYyBBVVRPTUFUSUMgPSAwO1xyXG4gICAgc3RhdGljIFVIRF80SyA9IDE7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XHJcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL1VJQ29tcG9uZW50JztcclxuaW1wb3J0ICcuL3N0eWxlcy9VSVRhYi5zY3NzJztcclxuXHJcbmNvbnN0IGNocm9tZTogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbi8qKlxyXG4gKiBBIHRhYiBhbmQgYnV0dG9uIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFVJVGFiIHR5cGUuXHJcbiAqIEBjbGFzcyBVSVRhYlxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5ldHdvcmtNb25pdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ05ldHdvcmsgTW9uaXRvcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFiIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBbW1VJQ29tcG9uZW50XV0gYW5kIGEgW1tVSUJ1dHRvbl1dXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgVUlDb21wb25lbnQoXHJcbiAgICAgICAgICAgICdOZXR3b3JrIE1vbml0b3InLFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICBUaGlzIGZlYXR1cmUgaXMgc3RpbGwgYmVpbmcgd29ya2VkIG9uLCBwbGVhc2Ugd2FpdCBmb3IgZnV0dXJlIHVwZGF0ZXMuXHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIHRoaXMuaWQsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL25ldHdvcmstbW9uaXRvci5zdmcnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihpY29uLCAnTW9uaXRvcicsIHRoaXMuaWQgKyAnLWJ1dHRvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIG1ha2VzIHN1cmUgdG8gY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZSBtZW51IGlzIG9wZW4gYWxyZWFkeS5cclxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgeyBVSVJvdyB9IGZyb20gJy4uL3VpL1VJUm93JztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS9VSUNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvVUlUYWIuc2Nzcyc7XHJcblxyXG5jb25zdCBjaHJvbWU6IGFueSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSB0YWIgYW5kIGJ1dHRvbiBkaXNwbGF5ZWQgaW4gdGhlIFN0YWRpYSBNZW51LlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBVSVRhYiB0eXBlLlxyXG4gKiBAY2xhc3MgVUlUYWJcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVSVRhYiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9ICdVSSBUYWInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhYiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQ29tcG9uZW50XV0gdXNlZCB0byBkaXNwbGF5IHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudDogVUlDb21wb25lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gb3BlbiB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBidXR0b246IFVJQnV0dG9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYW1vdW50IG9mIHJvd3MsIGVhY2ggY29udGFpbmluZyBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICByb3dzOiBVSVJvd1tdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgZnVuIE1PVEQgbWVzc2FnZXMgYWRkZWQgdG8gdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgbW90ZExpc3Q6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICc8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2Vtb2ppcy82MzYyMjc4NjQwNzY3NDY3NzIucG5nP3Y9MVwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7IHdpZHRoOiAyNHB4XCI+JyxcclxuICAgICAgICBcIkRvbid0IGxvb2sgaGVyZSwgbG9vayBiZWxvdyFcIixcclxuICAgICAgICAnUmVhbGl0eSBjYW4gYmUgd2hhdGV2ZXIgSSB3YW50LicsXHJcbiAgICAgICAgJ0lmIHlvdSBhc2sgbmljZWx5LCBTdGFkaWEgbWlnaHQgZXZlbiBkbyB5b3VyIGxhdW5kcnkgZm9yIHlvdSEnLFxyXG4gICAgICAgICdIYXZlIHlvdSB0cmllZCBhc2tpbmcgY3VzdG9tZXIgc3VwcG9ydD8nLFxyXG4gICAgICAgICdGb2xsb3cgdS9tYWZyYW5zIG9uIFJlZGRpdCEnLFxyXG4gICAgICAgICdTdGFkaWErLCBsaWtlIEdvb2dsZSsgYnV0IHN0aWxsIGFsaXZlLicsXHJcbiAgICAgICAgJ1N0YWRpYSBpcyBET0EsIGJlbGlldmUgbWUuJyxcclxuICAgICAgICAnR2V0IGEgbG9hZCBvZiB0aGlzIGd1eSwgdXNpbmcgY2hyb21lIGV4dGVuc2lvbnMgdG8gaW1wcm92ZSBoaXMgU3RhZGlhIGV4cGVyaWVuY2UuJyxcclxuICAgICAgICBcIkknbSB0ZWxsaW5nIHlvdSwgZG9uJ3QgdHJ1c3QgdGhhdCBndXkuIFlvdSBrbm93LCB0aGUgZ3V5LlwiLFxyXG4gICAgICAgICdTaG91dG91dCB0byBDaHJpcyBhbmQgR3JhY2UhJyxcclxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgU3BsaXRsaW5ncyB5ZXQ/JyxcclxuICAgICAgICAnQWx3YXlzIGNoZWNrIHRoZSByYXRpbmdzIGJlZm9yZSB5b3UgYnV5IGEgbmV3IGdhbWUuJyxcclxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgR2VGb3JjZSBOb3c/JyxcclxuICAgICAgICAnQSBob3QgZG9nIGlzIGRlZmluaXRlbHkgbm90IGEgc2FuZHdpY2guJyxcclxuICAgICAgICAnSWRrIGFib3V0IHlvdSwgYnV0IEkgcmVhbGx5IHdhbnQgb25lIG9mIHRob3NlIGZhbmN5IHNtYXJ0IHRvaWxldHMuJyxcclxuICAgICAgICAnQ2hyaXMgaXMgdHlwaW5nIGd1eXMhIScsXHJcbiAgICAgICAgJ0RvZXMgYW55b25lIGhhdmUgYSBidWRkeSBwYXNzIEkgY291bGQgYm9ycm93PycsXHJcbiAgICAgICAgJ0kgcGFpZCAkMTM5IGZvciB0aGlzPycsXHJcbiAgICAgICAgJ0lzIEZvcnRuaXRlIG9uIFN0YWRpYSB5ZXQ/JyxcclxuICAgICAgICAndS9iYWNvbnJ1bGVzIHdhcyB0aGUgZmlyc3QgdG8gc2VlIDRrIScsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgW1tVSUNvbXBvbmVudF1dIGFuZCBhIFtbVUlCdXR0b25dXVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAnU3RhZGlhKycsXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogNXJlbTsgZGlzcGxheTogYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW90ZExpc3RbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vdGRMaXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvc3RhZGlhcGx1cy5zdmcnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihpY29uLCAnU3RhZGlhKycsIHRoaXMuaWQgKyAnLWJ1dHRvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kIGFsbCByb3dzIHRoYXQgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlUm93cyhyZWxvYWQ/OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIExvZ2dlci5pbmZvKCdSb3dzOicsIHRoaXMucm93cylcclxuXHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgaWYoIXJvdy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZCh0aGlzLmNvbXBvbmVudCwgaSA+IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByb3cucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgYWxsIHJvd3NcclxuICAgICAqL1xyXG4gICAgcmVsb2FkUm93cygpIHtcclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4gcm93LnJlbG9hZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHJvdyB0byB0aGUgbGlzdC5cclxuICAgICAqL1xyXG4gICAgYWRkUm93KHJvdzogVUlSb3cpIHtcclxuICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYW5kIHVubG9hZCBhbGwgcm93cy5cclxuICAgICAqL1xyXG4gICAgY2xlYXJSb3dzKCkge1xyXG4gICAgICAgIGZvcihjb25zdCByb3cgb2YgdGhpcy5yb3dzKSB7XHJcbiAgICAgICAgICAgIHJvdy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBlbmFibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICByb3cuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIG1ha2VzIHN1cmUgdG8gY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZSBtZW51IGlzIG9wZW4gYWxyZWFkeS5cclxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DbG9jay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlQ29kZWMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb3JjZVJlc29sdXRpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9VSVRhYi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9HbG9iYWwuc2NzcydcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vQ29tcG9uZW50TG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICcuL2NvbXBvbmVudHMvQ2xvY2snXHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9jb21wb25lbnRzL1VJVGFiJ1xyXG5pbXBvcnQgeyBGb3JjZUNvZGVjIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZvcmNlQ29kZWMnXHJcbmltcG9ydCB7IEZvcmNlUmVzb2x1dGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24nXHJcbmltcG9ydCB7IE5ldHdvcmtNb25pdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL05ldHdvcmtNb25pdG9yJztcclxuXHJcbmNvbnN0IGxvYWRlciA9IG5ldyBDb21wb25lbnRMb2FkZXIoKTtcclxuXHJcbmNvbnN0IHRhYiA9IG5ldyBVSVRhYigpO1xyXG5cclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBDbG9jaygpKTtcclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBGb3JjZUNvZGVjKHRhYikpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlUmVzb2x1dGlvbih0YWIpKTtcclxubG9hZGVyLnJlZ2lzdGVyKHRhYik7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgTmV0d29ya01vbml0b3IoKSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIFV0aWwubG9hZCgpO1xyXG4gICAgbG9hZGVyLnN0YXJ0KCk7XHJcbn0pIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HbG9iYWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFNsaW1TZWxlY3QgZnJvbSAnc2xpbS1zZWxlY3QnO1xyXG5pbXBvcnQgJ3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi91aS9zdHlsZXMvU2VsZWN0LnNjc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0IHtcclxuICAgIHNsaW1zZWxlY3Q6IFNsaW1TZWxlY3Q7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIHBsYWNlaG9sZGVyPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfZHJvcGRvd24nKTtcclxuICAgICAgICB0aGlzLnNsaW1zZWxlY3QgPSBuZXcgU2xpbVNlbGVjdCh7XHJcbiAgICAgICAgICAgIHNlbGVjdDogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICBzaG93U2VhcmNoOiBmYWxzZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VsZWN0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoLi4uaXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYoaXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIEp1c3QgaW4gY2FzZSBzbGltc2VsZWN0LnNldCBpcyBmYXN0ZXJcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LnNldChpdGVtc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNsaW1zZWxlY3Quc2V0RGF0YShpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpbXNlbGVjdC5zZWFyY2gocXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYodGhpcy5zbGltc2VsZWN0LmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFkaWFwbHVzX2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVJQnV0dG9uQ29udGFpbmVyIH0gZnJvbSBcIi4vVUlCdXR0b25Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGNvbnRhaW5lcjogVUlCdXR0b25Db250YWluZXI7XHJcbiAgICBidXR0b246IEVsZW1lbnQ7XHJcblxyXG4gICAgc3RhdGljIGJ1dHRvbkNvbnRhaW5lcnM6IFVJQnV0dG9uQ29udGFpbmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHlmbGJiXCIganNuYW1lPVwiclpIRVNkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiS0VhSG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlg1cGVvZVwiIGpzbmFtZT1cInBZRmhVXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ4ZHVveWZcIiBzcmM9XCIke2ljb259XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FTSlZcIj4ke3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnUHlmMWJiJywgJ3N0YWRpYXBsdXNfdWktYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ0NUdkRYZCcsICdRQUF5V2QnLCAnUGpwYWMnLCAnemNNWWQnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGZvcihjb25zdCBjb250YWluZXIgb2YgVUlCdXR0b24uYnV0dG9uQ29udGFpbmVycykge1xyXG4gICAgICAgICAgICBpZihjb250YWluZXIuYnV0dG9ucy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jb250YWluZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBVSUJ1dHRvbkNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBVSUJ1dHRvbi5idXR0b25Db250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRCdXR0b24odGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVCdXR0b24odGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tIFwiLi9VSUJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQnV0dG9uQ29udGFpbmVyIHtcclxuICAgIGJ1dHRvbnM6IFVJQnV0dG9uW10gPSBbXTtcclxuICAgIGNvbnRhaW5lcjogRWxlbWVudDtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgd3JhcHBlcjogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkID0gJ2J1dHRvbi1jb250YWluZXItJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTkpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRaMEJOJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnWmdVTW8nLCAnc3RhZGlhcGx1c191aS1idG4td3JhcHBlcicpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnRTBaazliJywgJ3N0YWRpYXBsdXNfdWktYnRuLWNvbnRhaW5lcicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uLmVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZUJ1dHRvbihidXR0b246IFVJQnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25zID0gdGhpcy5idXR0b25zLmZpbHRlcihiID0+IGIuaWQgIT09IGJ1dHRvbi5pZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlDb21wb25lbnQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGh0bWw6IHN0cmluZztcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGBcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJya3ZUN2NcIiBqc2FjdGlvbj1cImNsaWNrOmE0ZlV3ZFwiIGpzbmFtZT1cIkdlR0hLYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiRFB2d1ljIHRScWMzY1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmFycm93X2JhY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiUTN3eXliXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkN3Q3hGZFwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICR7Y29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c191aS1jb21wb25lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5Zi5maThKeGQnKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gUmVRdWVyeSBlbGVtZW50IHNpbmNlIG91dGVySFRNTCBicmVha3MgaXQuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgIyR7dGhpcy5pZH0gPiBoZWFkZXIgPiAucmt2VDdjYCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgTG9nZ2VyLmluZm8oJ0Nsb3NpbmcnLCB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tIFwiLi9VSUNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJUm93IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgb3B0aW9uczogVUlSb3dPcHRpb25zO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBVSVJvd09wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8cD4ke3RoaXMudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfdWktcm93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhpc3RzKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMub25SZWxvYWQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kKGNvbXBvbmVudDogVUlDb21wb25lbnQsIHVzZUhyOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZih1c2VIcikge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVSVJvd09wdGlvbnMge1xyXG4gICAgb25DcmVhdGU/OiBGdW5jdGlvbjtcclxuICAgIG9uRGVzdHJveT86IEZ1bmN0aW9uO1xyXG4gICAgb25SZWxvYWQ/OiBGdW5jdGlvbjtcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=