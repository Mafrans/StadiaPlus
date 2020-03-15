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
exports.push([module.i, ".stadiaplus_clock {\n  font-size: 2.5rem;\n  padding: 1rem 1.5rem;\n  font-weight: 300; }\n", ""]);
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
exports.push([module.i, ".stadiaplus_ui-component {\n  /* \r\n     *   Must remove 2 x padding or it doesnt work \r\n     */\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateX(100%);\n  padding: 1rem;\n  background-color: #2d2e30;\n  transition: transform 0.15s ease-in-out; }\n  .stadiaplus_ui-component.open {\n    transform: translateX(0); }\n  .stadiaplus_ui-component header {\n    display: flex;\n    align-items: center; }\n    .stadiaplus_ui-component header .CwCxFd {\n      font-size: 22px; }\n\n.stadiaplus_ui-btn-container {\n  margin-top: -16px; }\n\n.stadiaplus_ui-button {\n  width: 116.156px; }\n", ""]);
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
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/UITab.scss */ "./src/components/styles/UITab.scss");
/* harmony import */ var _styles_UITab_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_UITab_scss__WEBPACK_IMPORTED_MODULE_3__);
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
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
var UITab = /** @class */ (function (_super) {
    __extends(UITab, _super);
    function UITab() {
        var _this = _super.call(this) || this;
        /**
         * The name of the Component.
         */
        _this.name = "UI Tab";
        _this.motdList = [
            '<img src="https://cdn.discordapp.com/emojis/636227864076746772.png?v=1" style="display: inline-flex; width: 24px">',
            'Don\'t look here, look below!',
            'Reality can be whatever I want.',
            'If you ask nicely, Stadia might even do your laundry for you!',
            'Have you tried asking customer support?',
            'Follow u/mafrans on Reddit!',
            'Stadia+, like Google+ but still alive.',
            'Stadia is DOA, believe me.',
            'Get a load of this guy, using chrome extensions to improve his Stadia experience.',
            'I\'m telling you, don\'t trust that guy. You know, the guy.',
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
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    UITab.prototype.createElement = function () {
        this.component = new UIComponent('Stadia+', "\n                <i \n                    class=\"stadiaplus_muted\" \n                    style=\"margin-top: 1rem; margin-bottom: 5rem; display: block\"\n                >\n                    " + this.motdList[Math.floor(Math.random() * this.motdList.length)] + "\n                </i>\n                \n                <p>Network Overlay</p>\n                <div class=\"overlay-toggle-container\"></div>\n                <hr />\n                \n                <p>Force Codec</p>\n                <div class=\"codec-container\"></div>\n                <hr />\n                \n                <p>Force Resolution</p>\n                <div class=\"force-resolution-container\"></div>\n            ", this.id);
        var icon = chrome.runtime.getURL('images/icons/stadiaplus.svg');
        this.button = new UIButton(icon, 'Stadia+', this.id + '-button');
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
        this.button.button.remove();
        this.button.container.remove();
        this.component.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component('Component', this.name, 'has been disabled');
    };
    /**
     * Called every second, updates the element to match the clock.
     */
    UITab.prototype.onUpdate = function () {
        // Only update the clock when it's visible
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
    return UITab;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var UIComponent = /** @class */ (function () {
    function UIComponent(title, content, id) {
        this.id = id;
        this.html = "\n            <header>\n                <div class=\"rkvT7c\" jsaction=\"click:a4fUwd\" jsname=\"GeGHKb\">\n                    <span class=\"DPvwYc tRqc3c\" aria-hidden=\"true\">arrow_back</span>\n                </div>\n                <span class=\"Q3wyyb\">\n                    <div class=\"CwCxFd\">" + title + "</div>\n                </span>\n            </header>\n\n            <div class=\"content\">\n                " + content + "\n            </div>\n        ";
        console.log('construct component');
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.classList.add('stadiaplus_ui-component');
    }
    UIComponent.prototype.create = function () {
        console.log('create component');
        this.element.innerHTML = this.html;
        var container = document.querySelector('.hxhAyf.fi8Jxd');
        container.appendChild(this.element);
        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);
        var backBtn = document.querySelector('.stadiaplus_ui-component > header > .rkvT7c');
        var self = this;
        backBtn.addEventListener('click', function () { self.close(); });
    };
    ;
    UIComponent.prototype.open = function () {
        console.log('open component');
        this.element.classList.add('open');
    };
    ;
    UIComponent.prototype.close = function () {
        console.log('close component');
        this.element.classList.remove('open');
    };
    ;
    return UIComponent;
}());
var UIButton = /** @class */ (function () {
    function UIButton(icon, title, id) {
        console.log('construct button');
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
    }
    UIButton.prototype.create = function (callback) {
        console.log('create button');
        this.container = UIButton.createButtonContainer(this.id + '-button-container');
        this.element.appendChild(this.button);
        this.container.appendChild(this.element);
        if (callback)
            callback();
    };
    ;
    UIButton.createButtonContainer = function (id) {
        console.log('create button container');
        var existing = document.getElementById(id);
        if (existing) {
            return existing;
        }
        var wrapper = document.querySelector('.TZ0BN');
        var container = document.createElement('div');
        container.classList.add('ZgUMo', 'stadiaplus_ui-btn-container');
        wrapper.appendChild(container);
        container.innerHTML = "\n            <div class=\"E0Zk9b\"></div>\n        ";
        return container.querySelector('.E0Zk9b');
    };
    return UIButton;
}());


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
/* harmony import */ var _ComponentLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentLoader */ "./src/ComponentLoader.ts");
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Clock */ "./src/components/Clock.ts");
/* harmony import */ var _components_UITab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UITab */ "./src/components/UITab.ts");






const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoader"]();

loader.register(new _components_Clock__WEBPACK_IMPORTED_MODULE_3__["Clock"]());
loader.register(new _components_UITab__WEBPACK_IMPORTED_MODULE_4__["UITab"]());

window.addEventListener('load', () => {
    _Util__WEBPACK_IMPORTED_MODULE_1__["default"].load();
    loader.start();
})

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1VJVGFiLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50TG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUlUYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3M/YTAxMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvVUlUYWIuc2Nzcz81MTMxIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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VSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxpT0FBMkc7O0FBRTdJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDSjtBQUMwQjtBQUNWO0FBQ0E7O0FBRTFDLG1CQUFtQixnRUFBZTs7QUFFbEMsb0JBQW9CLHVEQUFLO0FBQ3pCLG9CQUFvQix1REFBSzs7QUFFekI7QUFDQSxJQUFJLDZDQUFJO0FBQ1I7QUFDQSxDQUFDLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfY2xvY2sge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCB7XFxuICAvKiBcXHJcXG4gICAgICogICBNdXN0IHJlbW92ZSAyIHggcGFkZGluZyBvciBpdCBkb2VzbnQgd29yayBcXHJcXG4gICAgICovXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZTMwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0OyB9XFxuICAuc3RhZGlhcGx1c191aS1jb21wb25lbnQub3BlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnN0YWRpYXBsdXNfdWktY29tcG9uZW50IGhlYWRlciAuQ3dDeEZkIHtcXG4gICAgICBmb250LXNpemU6IDIycHg7IH1cXG5cXG4uc3RhZGlhcGx1c191aS1idG4tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IC0xNnB4OyB9XFxuXFxuLnN0YWRpYXBsdXNfdWktYnV0dG9uIHtcXG4gIHdpZHRoOiAxMTYuMTU2cHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGdlbmVyaWMgY29tcG9uZW50IG9mIFN0YWRpYStcclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50IHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgbmFtZS5cclxuICAgICAqL1xyXG4gICAgbmFtZTogc3RyaW5nID0gJ015IENvbXBvbmVudCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQ29tcG9uZW50J3MgdW5pcXVlIElELCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBvbiBsb2FkLlxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBib29sZWFuIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciB0aGUgQ29tcG9uZW50IHNob3VsZCByZWNlaXZlIGV2ZW50cyBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgc3RhcnQgbG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID1cclxuICAgICAgICAgICAgdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKSArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7XHJcblxyXG4gICAgICAgIHRoaXMub25TdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBDb21wb25lbnQgaGFzIGFuIGVsZW1lbnQgaW4gdGhlIERPTVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBleGlzdHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCkgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyB1bmxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIHVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIENvbXBvbmVudCBzaG91bGQgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIENvbXBvbmVudCBzaG91bGQgc3RvcC5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZC5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgY2xhc3MgcmVzcG9uc2libGUgZm9yIGxvYWRpbmcgW1tDb21wb25lbnR8Q29tcG9uZW50c11dIGFuZCBkZWxpdmVyaW5nIGV2ZW50cy5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50TG9hZGVyIHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRMb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50czogQ29tcG9uZW50W107XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlcnMgYSBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGUgPT4geyByZXR1cm4gZS5pZCAhPT0gY29tcG9uZW50LmlkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5lbmFibGVkKSBjb21wb25lbnQubG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIGNvbXBvbmVudCBsb2FkZXIuXHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5lbmFibGVkKSBjb21wb25lbnQudW5sb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjb21wb25lbnQuZW5hYmxlZCkgY29tcG9uZW50Lm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcFRpbWVyKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBwcmVmaXg6c3RyaW5nID0gJ1tTdGFkaWErXSc7XHJcblxyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgaW5mbyA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+TgyAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBibGFjaycpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3YXJuaW5nID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ifICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IG9yYW5nZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlcnJvciA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj4p2MICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IDcwMCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnQgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/Cfp6kgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogZGFya2dyZWVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEdWJpb3VzbHkgY3JlYXRlZCBieSBBZHJpYW4gQ29vbmV5XHJcbiAgICAgKiBAYXV0aG9yIGh0dHA6Ly9hZHJpYW5jb29uZXkuZ2l0aHViLmlvXHJcbiAgICAgKi9cclxuICAgIGltYWdlID0gZnVuY3Rpb24odXJsOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0Qm94ID0gZnVuY3Rpb24od2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmc6IFwiK1wiLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxcHg7IHBhZGRpbmc6IFwiICsgTWF0aC5mbG9vcihoZWlnaHQvMikgKyBcInB4IFwiICsgTWF0aC5mbG9vcih3aWR0aC8yKSArIFwicHg7IGxpbmUtaGVpZ2h0OiAwO1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkaW0gPSBnZXRCb3god2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZGltLnN0cmluZywgZGltLnN0eWxlICsgXCJiYWNrZ3JvdW5kOiB1cmwoXCIgKyB1cmwgKyBcIik7IGJhY2tncm91bmQtc2l6ZTogXCIgKyAod2lkdGgpICsgXCJweCBcIiArIChoZWlnaHQpICsgXCJweDsgY29sb3I6IHRyYW5zcGFyZW50O1wiKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2dnZXIoKTsiLCJjbGFzcyBVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RhZGlhJ3MgbWVudSBiYXIgZWxlbWVudCwgdXNlZCB0byBrbm93IHdoZW4gdGhlIHBsYXllciBoYXMgb3BlbmVkIHRoZSBtZW51LlxyXG4gICAgICovXHJcbiAgICBtZW51RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlgxYXN2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNZW51T3BlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW51RWxlbWVudC5zdHlsZS5vcGFjaXR5ICE9PSAnMCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFV0aWwoKTsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0Nsb2NrLnNjc3MnO1xyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIGNsb2NrIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENsb2NrIHR5cGUuXHJcbiAqIEBjbGFzcyBDbG9ja1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiQ2xvY2tcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjbG9jayBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgPHNwYW4+LCBhZGRzIHRoZSByaWdodCBjbGFzc2VzLCBhbmQgc3RvcmVzIGl0IGluIFtAbGluayAjZWxlbWVudF1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfY2xvY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudCgnQ29tcG9uZW50JywgdGhpcy5uYW1lLCAnaGFzIGJlZW4gZW5hYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGRpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCB1cGRhdGVzIHRoZSBlbGVtZW50IHRvIG1hdGNoIHRoZSBjbG9jay5cclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGNsb2NrIHdoZW4gaXQncyB2aXNpYmxlXHJcbiAgICAgICAgaWYoVXRpbC5pc01lbnVPcGVuKCkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeGhBeWYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9VSVRhYi5zY3NzJztcclxuXHJcbmNvbnN0IGNocm9tZTphbnkgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIGNsb2NrIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENsb2NrIHR5cGUuXHJcbiAqIEBjbGFzcyBDbG9ja1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVJVGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiVUkgVGFiXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2xvY2sgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb21wb25lbnQ6IFVJQ29tcG9uZW50O1xyXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcclxuXHJcbiAgICBtb3RkTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1vamlzLzYzNjIyNzg2NDA3Njc0Njc3Mi5wbmc/dj0xXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDsgd2lkdGg6IDI0cHhcIj4nLFxyXG4gICAgICAgICdEb25cXCd0IGxvb2sgaGVyZSwgbG9vayBiZWxvdyEnLFxyXG4gICAgICAgICdSZWFsaXR5IGNhbiBiZSB3aGF0ZXZlciBJIHdhbnQuJyxcclxuICAgICAgICAnSWYgeW91IGFzayBuaWNlbHksIFN0YWRpYSBtaWdodCBldmVuIGRvIHlvdXIgbGF1bmRyeSBmb3IgeW91IScsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIGFza2luZyBjdXN0b21lciBzdXBwb3J0PycsXHJcbiAgICAgICAgJ0ZvbGxvdyB1L21hZnJhbnMgb24gUmVkZGl0IScsXHJcbiAgICAgICAgJ1N0YWRpYSssIGxpa2UgR29vZ2xlKyBidXQgc3RpbGwgYWxpdmUuJyxcclxuICAgICAgICAnU3RhZGlhIGlzIERPQSwgYmVsaWV2ZSBtZS4nLFxyXG4gICAgICAgICdHZXQgYSBsb2FkIG9mIHRoaXMgZ3V5LCB1c2luZyBjaHJvbWUgZXh0ZW5zaW9ucyB0byBpbXByb3ZlIGhpcyBTdGFkaWEgZXhwZXJpZW5jZS4nLFxyXG4gICAgICAgICdJXFwnbSB0ZWxsaW5nIHlvdSwgZG9uXFwndCB0cnVzdCB0aGF0IGd1eS4gWW91IGtub3csIHRoZSBndXkuJyxcclxuICAgICAgICAnU2hvdXRvdXQgdG8gQ2hyaXMgYW5kIEdyYWNlIScsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIFNwbGl0bGluZ3MgeWV0PycsXHJcbiAgICAgICAgJ0Fsd2F5cyBjaGVjayB0aGUgcmF0aW5ncyBiZWZvcmUgeW91IGJ1eSBhIG5ldyBnYW1lLicsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIEdlRm9yY2UgTm93PycsXHJcbiAgICAgICAgJ0EgaG90IGRvZyBpcyBkZWZpbml0ZWx5IG5vdCBhIHNhbmR3aWNoLicsXHJcbiAgICAgICAgJ0lkayBhYm91dCB5b3UsIGJ1dCBJIHJlYWxseSB3YW50IG9uZSBvZiB0aG9zZSBmYW5jeSBzbWFydCB0b2lsZXRzLicsXHJcbiAgICAgICAgJ0NocmlzIGlzIHR5cGluZyBndXlzISEnLFxyXG4gICAgICAgICdEb2VzIGFueW9uZSBoYXZlIGEgYnVkZHkgcGFzcyBJIGNvdWxkIGJvcnJvdz8nLFxyXG4gICAgICAgICdJIHBhaWQgJDEzOSBmb3IgdGhpcz8nLFxyXG4gICAgICAgICdJcyBGb3J0bml0ZSBvbiBTdGFkaWEgeWV0PycsXHJcbiAgICAgICAgJ3UvYmFjb25ydWxlcyB3YXMgdGhlIGZpcnN0IHRvIHNlZSA0ayEnLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHNpbXBsZSA8c3Bhbj4sIGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMsIGFuZCBzdG9yZXMgaXQgaW4gW0BsaW5rICNlbGVtZW50XVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAnU3RhZGlhKycsXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogNXJlbTsgZGlzcGxheTogYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5tb3RkTGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vdGRMaXN0Lmxlbmd0aCldfVxyXG4gICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cD5OZXR3b3JrIE92ZXJsYXk8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS10b2dnbGUtY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yY2UgQ29kZWM8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29kZWMtY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yY2UgUmVzb2x1dGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JjZS1yZXNvbHV0aW9uLWNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICB0aGlzLmlkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3N0YWRpYXBsdXMuc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgJ1N0YWRpYSsnLCB0aGlzLmlkICsgJy1idXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoJ0NvbXBvbmVudCcsIHRoaXMubmFtZSwgJ2hhcyBiZWVuIGVuYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uYnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KCdDb21wb25lbnQnLCB0aGlzLm5hbWUsICdoYXMgYmVlbiBkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBjbG9jayB3aGVuIGl0J3MgdmlzaWJsZVxyXG4gICAgICAgIGlmKFV0aWwuaXNNZW51T3BlbigpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVUlDb21wb25lbnQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGh0bWw6IHN0cmluZztcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6c3RyaW5nLCBjb250ZW50OnN0cmluZywgaWQ6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGBcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJya3ZUN2NcIiBqc2FjdGlvbj1cImNsaWNrOmE0ZlV3ZFwiIGpzbmFtZT1cIkdlR0hLYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiRFB2d1ljIHRScWMzY1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPmFycm93X2JhY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiUTN3eXliXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkN3Q3hGZFwiPiR7dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICR7Y29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdCBjb21wb25lbnQnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3VpLWNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIGNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeGhBeWYuZmk4SnhkJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIFJlUXVlcnkgZWxlbWVudCBzaW5jZSBvdXRlckhUTUwgYnJlYWtzIGl0LlxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG5cclxuICAgICAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWRpYXBsdXNfdWktY29tcG9uZW50ID4gaGVhZGVyID4gLnJrdlQ3YycpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNlbGYuY2xvc2UoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29wZW4gY29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIGNvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5jbGFzcyBVSUJ1dHRvbiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaHRtbDogc3RyaW5nO1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGNvbnRhaW5lcjogRWxlbWVudDtcclxuICAgIGJ1dHRvbjogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpY29uOnN0cmluZywgdGl0bGU6c3RyaW5nLCBpZDpzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0IGJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmh0bWwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQeWZsYmJcIiBqc25hbWU9XCJyWkhFU2RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJLRWFIb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiWDVwZW9lXCIganNuYW1lPVwicFlGaFVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInhkdW95ZlwiIHNyYz1cIiR7aWNvbn1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYVNKVlwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdQeWYxYmInLCAnc3RhZGlhcGx1c191aS1idXR0b24nKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdDVHZEWGQnLCAnUUFBeVdkJywgJ1BqcGFjJywgJ3pjTVlkJylcclxuICAgICAgICB0aGlzLmJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNhbGxiYWNrPzpGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBVSUJ1dHRvbi5jcmVhdGVCdXR0b25Db250YWluZXIodGhpcy5pZCArICctYnV0dG9uLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQnV0dG9uQ29udGFpbmVyKGlkOnN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGUgYnV0dG9uIGNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdaZ1VNbycsICdzdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXInKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkUwWms5YlwiPjwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5FMFprOWInKTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Nsb2NrLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVUlUYWIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vQ29tcG9uZW50TG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICcuL2NvbXBvbmVudHMvQ2xvY2snXHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9jb21wb25lbnRzL1VJVGFiJ1xyXG5cclxuY29uc3QgbG9hZGVyID0gbmV3IENvbXBvbmVudExvYWRlcigpO1xyXG5cclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBDbG9jaygpKTtcclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBVSVRhYigpKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgVXRpbC5sb2FkKCk7XHJcbiAgICBsb2FkZXIuc3RhcnQoKTtcclxufSkiXSwic291cmNlUm9vdCI6IiJ9