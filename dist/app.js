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

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

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
exports.push([module.i, ".stadiaplus_libraryfilter-wrapper {\n  opacity: 1;\n  transform: scale(1);\n  transition: transform 0.5s cubic-bezier(0.75, 0, 0.25, 1), opacity 0.5s cubic-bezier(0.75, 0, 0.25, 1);\n}\n.stadiaplus_libraryfilter-wrapper.closing {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper.closed {\n  display: none;\n  opacity: 0;\n}\n.stadiaplus_libraryfilter-wrapper .stadiaplus_libraryfilter-icon-wrapper {\n  position: absolute;\n  display: inline-block;\n  z-index: 4;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 32px;\n  background-color: #393a3c;\n  margin-left: -64px;\n  transition: transform 0.23s cubic-bezier(0.35, 0, 0.15, 1);\n}\n.stadiaplus_libraryfilter-wrapper .stadiaplus_libraryfilter-icon {\n  font-family: \"Material Icons Extended\";\n  font-size: 32px;\n  z-index: 4;\n  padding: 16px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon-wrapper {\n  transform: scale(1.015);\n}\n.stadiaplus_libraryfilter-wrapper:hover .stadiaplus_libraryfilter-icon-wrapper:hover {\n  transform: scale(1);\n}\n\n.stadiaplus_libraryfilter-bar {\n  background-color: #303236;\n  padding: 8px 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_dropdown {\n  display: block;\n  padding: 0.5rem;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-checkbox {\n  margin-left: auto;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction {\n  transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);\n  border-radius: 50%;\n  padding: 2px;\n  cursor: pointer;\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction::after {\n  content: \"arrow_drop_down\";\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction:active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.ascending {\n  transform: rotate(0deg);\n}\n.stadiaplus_libraryfilter-bar .stadiaplus_filterbar-direction.descending {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LookingForGroup.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LookingForGroup.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_lookingforgroup-groups {\n  background-color: rgba(255, 255, 255, 0.06);\n  padding: 0.5rem;\n  margin-top: 1rem;\n  border-radius: 0.25rem;\n  display: none;\n}\n.stadiaplus_lookingforgroup-groups.visible {\n  display: block;\n}\n.stadiaplus_lookingforgroup-groups > h6 {\n  display: inline-block;\n}\n.stadiaplus_lookingforgroup-groups .refresh {\n  float: right;\n  font-size: 30px;\n  color: #ffffff;\n  margin: 6px;\n  cursor: pointer;\n}\n.stadiaplus_lookingforgroup-groups .group-list {\n  margin-top: 0.5rem;\n  display: block;\n}", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StadiaPlusDBHook.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StadiaPlusDBHook.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stadiaplus_web-scraper-popup {\n  width: 300px;\n  height: 90px;\n  position: absolute;\n  top: 0;\n  border-radius: 0.5rem;\n  align-items: center;\n  justify-content: middle;\n  left: 0;\n  margin: 1rem;\n  background-color: #202124;\n  z-index: 1;\n  display: flex;\n  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.32), 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.18);\n}\n.stadiaplus_web-scraper-popup .stadiaplus_web-scraper-icon {\n  font-family: \"Material Icons Extended\";\n  font-size: 48px;\n  padding: 1rem;\n}\n.stadiaplus_web-scraper-popup .stadiaplus_web-scraper-icon.loading {\n  animation: spinning 1s linear 0s infinite;\n}\n@keyframes spinning {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.stadiaplus_web-scraper-popup .stadiaplus_web-scraper-title {\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.stadiaplus_web-scraper-popup .stadiaplus_web-scraper-body {\n  font-size: 0.75rem;\n}", ""]);
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
exports.push([module.i, ".stadiaplus_muted {\n  opacity: 0.5;\n}\n\n.stadiaplus_ui-component {\n  /* \n   *   Must remove 2 x padding or it doesnt work \n   */\n  width: calc(100% - 2rem);\n  height: calc(100% - 2rem);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateX(100%);\n  padding: 1rem;\n  background-color: #2d2e30;\n  transition: transform 0.15s ease-in-out;\n  z-index: 999;\n}\n.stadiaplus_ui-component.open {\n  transform: translateX(0);\n}\n.stadiaplus_ui-component header {\n  display: flex;\n  align-items: center;\n}\n.stadiaplus_ui-component header .CwCxFd {\n  font-size: 22px;\n}\n\n.stadiaplus_ui-btn-container {\n  margin-top: -16px;\n}\n.stadiaplus_ui-btn-container.E0Zk9b {\n  justify-content: space-between;\n}\n\n.stadiaplus_ui-button {\n  width: 130.677px;\n}", ""]);
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/MonitorRunnable.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("const MonitorRunnable = function () {\r\n    this.enabled = false;\r\n    this.peerConnections = [];\r\n    this.originalRTC;\r\n    this.startTime;\r\n    this.element;\r\n    this.editable = false;\r\n    this.x = 0;\r\n    this.y = 0;\r\n\r\n    const self = this;\r\n    this.originalRTC = RTCPeerConnection;\r\n    (function (OriginalRTCConnection) {\r\n        self.originalRTC = OriginalRTCConnection;\r\n\r\n        RTCPeerConnection = function (args) {\r\n            const connection = new OriginalRTCConnection(args);\r\n            self.peerConnections.push(connection);\r\n            return connection;\r\n        };\r\n        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;\r\n    })(RTCPeerConnection);\r\n\r\n    this.start = function () {\r\n        this.enabled = true;\r\n        this.element = document.createElement('div');\r\n        this.element.classList.add('stadiaplus_networkmonitor');\r\n        this.element.id =\r\n            'networkmonitor-' + Math.floor(Math.random() * 999999);\r\n        document.body.appendChild(this.element);\r\n\r\n        this.startTime = Date.now();\r\n\r\n        this.setEditable(true);\r\n        this.updatePosition();\r\n        this.update();\r\n    };\r\n\r\n    this.setPosition = function (x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.updatePosition();\r\n    };\r\n\r\n    this.updatePosition = function () {\r\n        this.element.style.left = this.x + 'px';\r\n        this.element.style.top = this.y + 'px';\r\n\r\n        const corners = {\r\n            tl: 10,\r\n            tr: 10,\r\n            bl: 10,\r\n            br: 10,\r\n        };\r\n\r\n        if (this.x < 10) {\r\n            corners.tl = 0;\r\n            corners.bl = 0;\r\n        }\r\n\r\n        if (this.y < 10) {\r\n            corners.tl = 0;\r\n            corners.tr = 0;\r\n        }\r\n\r\n        if (this.x > window.innerWidth - this.element.clientWidth - 10) {\r\n            corners.tr = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        if (this.y > window.innerHeight - this.element.clientHeight - 10) {\r\n            corners.bl = 0;\r\n            corners.br = 0;\r\n        }\r\n\r\n        this.element.style[\r\n            'border-radius'\r\n        ] = `${corners.tl}px ${corners.tr}px ${corners.br}px ${corners.bl}px`;\r\n    };\r\n\r\n    this.mouseEvents = [];\r\n    this.moving = false;\r\n    this.offset = { x: 0, y: 0 };\r\n    this.setEditable = function (editable) {\r\n        this.editable = editable;\r\n        this.element.classList.toggle('editable', editable);\r\n\r\n        if (editable) {\r\n            this.mouseEvents.push(\r\n                {\r\n                    target: document,\r\n                    type: 'mousemove',\r\n                    fn: (event) => {\r\n                        if (this.moving) {\r\n                            this.x = Math.max(\r\n                                0, // Minimum x value\r\n                                Math.min(\r\n                                    window.innerWidth -\r\n                                        this.element.clientWidth, // Maximum x value\r\n                                    event.clientX - this.offset.x,\r\n                                ),\r\n                            );\r\n                            this.y = Math.max(\r\n                                0, // Minimum y value\r\n                                Math.min(\r\n                                    window.innerHeight -\r\n                                        this.element.clientHeight, // Maximum y value\r\n                                    event.clientY - this.offset.y,\r\n                                ),\r\n                            );\r\n\r\n                            this.updatePosition();\r\n                        }\r\n                    },\r\n                },\r\n                {\r\n                    target: this.element,\r\n                    type: 'mousedown',\r\n                    fn: (event) => {\r\n                        this.moving = true;\r\n                        this.offset.x = event.clientX - this.x;\r\n                        this.offset.y = event.clientY - this.y;\r\n                    },\r\n                },\r\n                {\r\n                    target: document,\r\n                    type: 'mouseup',\r\n                    fn: (event) => {\r\n                        this.moving = false;\r\n                    },\r\n                },\r\n            );\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.addEventListener(event.type, event.fn),\r\n            );\r\n        } else {\r\n            this.mouseEvents.forEach((event) =>\r\n                event.target.removeEventListener(event.type, event.fn),\r\n            );\r\n        }\r\n    };\r\n\r\n    this.setVisible = function (visible) {\r\n        visible.forEach(e => this.visible[e.id] = e);\r\n    };\r\n\r\n    this.stop = function () {\r\n        this.enabled = false;\r\n        this.setEditable(false);\r\n        this.element.remove();\r\n\r\n        RTCPeerConnection = this.originalRTC;\r\n        peerConnections = [];\r\n    };\r\n\r\n    this.visible = {};\r\n\r\n    this.stats = [];\r\n    this.update = function () {\r\n        if (this.peerConnections.length > 1) {\r\n          const openConnections = this.peerConnections.filter(x => x.connectionState == \"connected\");\r\n\r\n          openConnections[1].getStats().then((_stats) => {\r\n                this.stats = Array.from(_stats);\r\n\r\n                const RTCInboundRTPVideoStream = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCInboundRTPVideoStream'),\r\n                );\r\n                const RTCIceCandidatePair = this.getStat((stat) =>\r\n                    stat[0].startsWith('RTCIceCandidatePair'),\r\n                );\r\n                const RTCMediaStreamTrack_receiver = this.getStat(\r\n                    (stat) =>\r\n                        stat[0].startsWith('RTCMediaStreamTrack_receiver') &&\r\n                        stat[1].kind === 'video',\r\n                );\r\n\r\n                const resolution = this.getResolution(\r\n                    RTCMediaStreamTrack_receiver,\r\n                );\r\n                const fps = this.getFPS(RTCInboundRTPVideoStream);\r\n                const latency = this.getLatency(RTCIceCandidatePair) + ' ms';\r\n                const codec = this.getCodec(RTCInboundRTPVideoStream);\r\n                const totalTraffic = this.translateByteUnits(\r\n                    this.getTotalDownload(RTCIceCandidatePair),\r\n                );\r\n                const currentTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const averageTraffic =\r\n                    this.translateBitUnits(\r\n                        this.getAverageDownloadSpeed(RTCIceCandidatePair),\r\n                    ) + '/s';\r\n                const packetsLost = this.getPacketsLost(\r\n                    RTCInboundRTPVideoStream,\r\n                );\r\n                const averagePacketLoss =\r\n                    this.getAveragePacketLoss(RTCInboundRTPVideoStream) + '%';\r\n                const jitterBuffer =\r\n                    this.getJitterBuffer(RTCMediaStreamTrack_receiver) + ' ms';\r\n\r\n                let html = '';\r\n                if (this.visible['time'].enabled) {\r\n                    let time = new Date();\r\n                    let timeString = time.toLocaleString();\r\n                    html += `<h5>${timeString}</h5>`;\r\n                }\r\n\r\n                html += '<ul>';\r\n                if (this.visible['resolution'].enabled) {\r\n                    html += `<li>${this.visible['resolution'].name}: ${resolution.width}x${resolution.height}</li>`;\r\n                }\r\n\r\n                if (this.visible['fps'].enabled) {\r\n                    html += `<li>${this.visible['fps'].name}: ${fps}</li>`;\r\n                }\r\n\r\n                if (this.visible['latency'].enabled) {\r\n                    html += `<li>${this.visible['latency'].name}: ${latency}</li>`;\r\n                }\r\n\r\n                if (this.visible['codec'].enabled) {\r\n                    html += `<li>${this.visible['codec'].name}: ${codec}</li>`;\r\n                }\r\n\r\n                if (this.visible['traffic'].enabled) {\r\n                    html += `<li>${this.visible['traffic'].name}: ${totalTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['current-traffic'].enabled) {\r\n                    html += `<li>${this.visible['current-traffic'].name}: ${currentTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-traffic'].enabled) {\r\n                    html += `<li>${this.visible['average-traffic'].name}: ${averageTraffic}</li>`;\r\n                }\r\n\r\n                if (this.visible['packets-lost'].enabled) {\r\n                    html += `<li>${this.visible['packets-lost'].name}: ${packetsLost}</li>`;\r\n                }\r\n\r\n                if (this.visible['average-packet-loss'].enabled) {\r\n                    html += `<li>${this.visible['average-packet-loss'].name}: ${averagePacketLoss}</li>`;\r\n                }\r\n\r\n                if (this.visible['jitter-buffer'].enabled) {\r\n                    html += `<li>${this.visible['jitter-buffer'].name}: ${jitterBuffer}</li>`;\r\n                }\r\n\r\n                html += '</ul>';\r\n\r\n                this.element.innerHTML = html;\r\n            });\r\n        } else {\r\n            this.startTime = Date.now();\r\n            this.element.innerHTML = `\r\n                <h5>Error</h5>\r\n                <p>\r\n                    Uh oh, something went terribly wrong. \r\n                    This feature is still very unstable and \r\n                    the developer knows there are problems, \r\n                    please understand that this issue is \r\n                    actively being worked on.\r\n                </p>\r\n                <p class='stadiaplus_muted'>Error Code: 001 - Stats unavailable</p>\r\n            `;\r\n        }\r\n\r\n        if (this.enabled) {\r\n            setTimeout(() => {\r\n                this.update();\r\n            }, 1000);\r\n        }\r\n    };\r\n\r\n    this.getStat = function (filter) {\r\n        return this.stats.find(filter)[1];\r\n    };\r\n\r\n    this.translateBitUnits = function (value) {\r\n        const units = ['bit', 'kbit', 'Mbit', 'Gbit'];\r\n\r\n        let i = 0;\r\n        while (value / 1000 >= 1) {\r\n            i++;\r\n            value /= 1000;\r\n        }\r\n\r\n        return (\r\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\r\n        );\r\n    };\r\n\r\n    this.translateByteUnits = function (value) {\r\n        const units = ['B', 'kB', 'MB', 'GB'];\r\n\r\n        let i = 0;\r\n        while (value / 1000 >= 1) {\r\n            i++;\r\n            value /= 1000;\r\n        }\r\n\r\n        return (\r\n            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]\r\n        );\r\n    };\r\n\r\n    this.getLatency = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.currentRoundTripTime * 1000;\r\n    };\r\n\r\n    this.getJitterBuffer = function (RTCMediaStreamTrack_receiver) {\r\n        return (\r\n            (RTCMediaStreamTrack_receiver.jitterBufferDelay * 1000) /\r\n            RTCMediaStreamTrack_receiver.jitterBufferEmittedCount\r\n        ).toPrecision(4);\r\n    };\r\n\r\n    this.getPacketsLost = function (RTCInboundRTPVideoStream) {\r\n        return RTCInboundRTPVideoStream.packetsLost;\r\n    };\r\n\r\n    this.getAveragePacketLoss = function (RTCInboundRTPVideoStream) {\r\n        return (\r\n            (RTCInboundRTPVideoStream.packetsLost /\r\n                (RTCInboundRTPVideoStream.packetsReceived +\r\n                    RTCInboundRTPVideoStream.packetsLost)) *\r\n            100\r\n        ).toPrecision(2);\r\n    };\r\n\r\n    this.lastDownload = 0;\r\n    this.getDownloadSpeed = function (RTCIceCandidatePair) {\r\n        const download = this.getTotalDownload(RTCIceCandidatePair);\r\n        const speed = download - this.lastDownload;\r\n        this.lastDownload = download;\r\n        return speed * 8;\r\n    };\r\n\r\n    this.getAverageDownloadSpeed = function (RTCIceCandidatePair) {\r\n        return (\r\n            this.getTotalDownload(RTCIceCandidatePair) * 8 /\r\n            (this.timeSinceStart() / 1000)\r\n        );\r\n    };\r\n\r\n    this.getTotalDownload = function (RTCIceCandidatePair) {\r\n        return RTCIceCandidatePair.bytesReceived;\r\n    };\r\n\r\n    this.getResolution = function (RTCMediaStreamTrack_receiver) {\r\n        return {\r\n            width: RTCMediaStreamTrack_receiver.frameWidth,\r\n            height: RTCMediaStreamTrack_receiver.frameHeight,\r\n        };\r\n    };\r\n\r\n    this.getCodec = function (RTCInboundRTPVideoStream) {\r\n        const codecStat = this.getStat(\r\n            (stat) => stat[0] === RTCInboundRTPVideoStream.codecId,\r\n        );\r\n        return codecStat.mimeType.substring('video/'.length);\r\n    };\r\n\r\n    this.lastFrames = 0;\r\n    this.getFPS = function (RTCInboundRTPVideoStream) {\r\n        const fps = RTCInboundRTPVideoStream.framesDecoded - this.lastFrames;\r\n        this.lastFrames = RTCInboundRTPVideoStream.framesDecoded;\r\n        return fps;\r\n    };\r\n\r\n    this.timeSinceStart = function () {\r\n        return Date.now() - this.startTime;\r\n    };\r\n};\r\n\r\nStadiaPlusMonitor = new MonitorRunnable();\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/util/WebScraperRunnable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/util/WebScraperRunnable.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("const WebScraperRunnable = {\r\n    fetchData(userid, gameid) {\r\n        console.log({ userid, gameid })\r\n        return new Promise((resolve, reject) => {\r\n            fetch(\"https://stadia.google.com/profile/\" + userid + \"/detail/\" + gameid)\r\n            .then(response => response.text())\r\n            .then(text => {\r\n                const playData = text.match(new RegExp(\"\\\\[\\\\[\\\\[\\\"\" + gameid + \"\\\",.+\\\\n.+\\\\n,\\\\[([0-9]+)\"));\r\n                const achievementData = text.match(new RegExp(\"AF_initDataCallback\\\\(\\\\{ *key: *'ds:2'.*?data: *((.|\\\\n)*?)\\\\}\\\\)\"));\r\n                \r\n                if(playData == null) return;\r\n                \r\n                const data = JSON.parse(achievementData[1])[0];\r\n\r\n                console.log({data})\r\n    \r\n                const achievements = [];\r\n                for(const e of data[5][0]) {\r\n                    achievements.push({\r\n                        name: e[0],\r\n                        description: e[1],\r\n                        value: e[3],\r\n                        icon: e[8][0][0][1],\r\n                        game: e[6],\r\n                        id: e[7]\r\n                    });\r\n                }\r\n    \r\n                const user = {\r\n                    name: data[5][3][0][0],\r\n                    tag: data[5][3][0][1],\r\n                    avatar: data[5][3][1][1]\r\n                };\r\n    \r\n                resolve({\r\n                    game: {\r\n                        uuid: data[0][0],\r\n                        name: data[0][1]\r\n                    },\r\n                    achievements,\r\n                    user,\r\n                    time: playData[1]\r\n                });\r\n            })\r\n            .catch(reject);\r\n        });\r\n    }\r\n}\r\n\r\nthis.addEventListener('popstate', event => {\r\n    const uuid = event.srcElement.dataLayer.find(e => e.event === \"engagement_sessions\").app_id;\r\n    if(uuid == null) return;\r\n\r\n    const userId = document.querySelector('.ksZYgc.VGZcUb').getAttribute('data-player-id');\r\n    WebScraperRunnable.fetchData(userId, uuid)\r\n    .then(data => {\r\n        console.log(data);\r\n        const sandboxer = document.getElementById('web-scraper-sandboxer');\r\n        sandboxer.setAttribute('data', JSON.stringify(data));\r\n        sandboxer.click();\r\n    })\r\n    .catch(e => console.log(e))\r\n});");

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

/***/ "./src/Browser.ts":
/*!************************!*\
  !*** ./src/Browser.ts ***!
  \************************/
/*! exports provided: Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
class Browser {
    static init() {
        const version = navigator.appVersion.split(' ').find((e) => e.indexOf('Chrome') != -1).split('/')[1].split('.');
        let accumulator = 0;
        for (let i = 0; i < version.length; i++) {
            accumulator += version[i] * Math.pow(10, (version.length - i - 1) * 2);
        }
        this.version = accumulator;
    }
    static getVersion() {
        return this.version;
    }
}


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
class Component {
    constructor() {
        /**
         * The Component's name.
         */
        this.name = 'My Component';
        this.tag = "component";
    }
    /**
     * This method is called whenever the component should start loading.
     */
    load() {
        this.name = _Language__WEBPACK_IMPORTED_MODULE_0__["Language"].get(this.tag + '.name');
        this.id = 'stadiaplus_' + Math.floor(Math.random() * 999999);
        this.updateRenderer();
        this.onStart();
    }
    updateRenderer() {
        const renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        this.renderer = Array.from(renderers).find((renderer) => renderer.style.opacity !== '0');
    }
    /**
     * Returns whether this Component has an element in the DOM
     *
     * @returns {boolean}
     */
    exists() {
        if (this.renderer.style.opacity === '0')
            return false;
        return document.querySelector('#' + this.id) !== null;
    }
    /**
     * This method is called whenever the component is unloading.
     */
    unload() {
        this.onStop();
    }
    /**
     * This method is called when the Component should start.
     */
    onStart() { }
    /**
     * This method is called when the Component should stop.
     */
    onStop() { }
    /**
     * This method is called once every second.
     */
    onUpdate() { }
}


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
class ComponentLoader {
    constructor() {
        this.components = [];
    }
    /**
     * Registers a new component.
     *
     * @param {Component} component the component to register.
     */
    register(component) {
        this.components.push(component);
    }
    /**
     * Unregisters a component.
     *
     * @param {Component} component
     */
    unregister(component) {
        this.components.filter(e => { return e.id !== component.id; });
    }
    /**
     * Starts the component loader.
     */
    start() {
        _Storage__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].COMPONENTS.get((result) => {
            let storage = result.components;
            if (storage === undefined) {
                storage = {};
            }
            for (const component of this.components) {
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
            this.startTimer();
        });
    }
    /**
     * Stops the component loader.
     */
    stop() {
        this.components.forEach(component => {
            if (component.active)
                component.unload();
        });
        this.stopTimer();
    }
    startTimer() {
        const self = this;
        this.timer = setInterval(() => {
            self.components.forEach(component => {
                if (component.active)
                    component.onUpdate();
            });
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.timer);
    }
}


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
/* harmony import */ var _lang_pt_BR_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lang/pt-BR.json */ "./src/lang/pt-BR.json");
var _lang_pt_BR_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lang/pt-BR.json */ "./src/lang/pt-BR.json", 1);














const { chrome } = window;
class Language {
    constructor(name, tag, data) {
        this.data = {};
        this.tag = tag;
        this.name = name;
        this.data = data;
    }
    register() {
        Language.languages.push(this);
    }
    get(name, vars) {
        let keys = name.split(/\./g);
        let val = this.data;
        for (const key of keys) {
            val = val[key];
        }
        if (vars !== undefined) {
            for (const _var in vars) {
                val = val.split('{{' + _var + '}}').join(vars[_var]);
            }
        }
        return val;
    }
    setDefault() {
        Language.default = this;
    }
    static load(callback = (() => { })) {
        // Check for the first language that isn't equal to the default
        _Storage__WEBPACK_IMPORTED_MODULE_1__["SyncStorage"].LANGUAGE.get((result) => {
            let language = result[_Storage__WEBPACK_IMPORTED_MODULE_1__["SyncStorage"].LANGUAGE.tag];
            if (language === undefined || language === 'automatic') {
                language = this.automatic();
            }
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Using language configuration ' + language);
            this.languages.forEach((lang, index) => {
                if (lang.tag === language) {
                    this.current = lang;
                }
                if (index === this.languages.length - 1) {
                    callback();
                }
            });
        });
    }
    static set(language) {
        this.current = language;
    }
    static automatic() {
        return window.navigator.languages.find((l) => l.length >= 5 &&
            (this.default === undefined || l !== this.default.tag));
    }
    static init() {
        const lang_deDE = new Language('Deutsche (DE)', 'de-DE', _lang_de_DE_json__WEBPACK_IMPORTED_MODULE_7__);
        lang_deDE.register();
        const lang_esES = new Language('Español (ES)', 'es-ES', _lang_es_ES_json__WEBPACK_IMPORTED_MODULE_6__);
        lang_esES.register();
        const lang_enUS = new Language('English (US)', 'en-US', _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2__);
        lang_enUS.register();
        lang_enUS.setDefault();
        // const lang_enSTEEF = new Language('English (Steef)', 'en-STEEF', lang_enSTEEF_data);
        // lang_enSTEEF.register();
        const lang_frFR = new Language('Français (FR)', 'fr-FR', _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_4__);
        lang_frFR.register();
        const lang_itIT = new Language('Italiano (IT)', 'it-IT', _lang_it_IT_json__WEBPACK_IMPORTED_MODULE_5__);
        lang_itIT.register();
        const lang_svSE = new Language('Svenska (SE)', 'sv-SE', _lang_sv_SE_json__WEBPACK_IMPORTED_MODULE_3__);
        lang_svSE.register();
        const lang_ukUA = new Language('Українська (UA)', 'uk-UA', _lang_uk_UA_json__WEBPACK_IMPORTED_MODULE_8__);
        lang_ukUA.register();
        const lang_euES = new Language('Euskara (EU)', 'eu-ES', _lang_eu_ES_json__WEBPACK_IMPORTED_MODULE_9__);
        lang_euES.register();
        const lang_glES = new Language('Galego (GL)', 'gl-ES', _lang_gl_ES_json__WEBPACK_IMPORTED_MODULE_10__);
        lang_glES.register();
        const lang_ruRU = new Language('русский (RU)', 'ru-RU', _lang_ru_RU_json__WEBPACK_IMPORTED_MODULE_11__);
        lang_ruRU.register();
        const lang_nlBE = new Language('Nederlands (BE)', 'nl-BE', _lang_nl_BE_json__WEBPACK_IMPORTED_MODULE_12__);
        lang_nlBE.register();
        const lang_ptBR = new Language('Português (BR)', 'pt-BR', _lang_pt_BR_json__WEBPACK_IMPORTED_MODULE_13__);
        lang_ptBR.register();
    }
    static get(name, vars) {
        if (this.current === undefined) {
            this.current = this.default;
        }
        let val = this.current.get(name, vars);
        return val;
    }
}
Language.languages = [];


/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const prefix = '[Stadia+]';
class Logger {
    constructor() {
        this.info = function (...obj) {
            console.log(`${prefix} %c📃 ${obj.join(' ')}`, 'color: black');
        };
        this.warning = function (...obj) {
            console.log(`${prefix} %c😟 ${obj.join(' ')}`, 'color: orange');
        };
        this.error = function (...obj) {
            console.log(`${prefix} %c❌ ${obj.join(' ')}`, 'color: red; font-weight: 700');
        };
        this.component = function (...obj) {
            console.log(`${prefix} %c🧩 ${obj.join(' ')}`, 'color: darkgreen');
        };
        /**
         * Dubiously created by Adrian Cooney
         * @author http://adriancooney.github.io
         */
        this.image = function (url, width, height) {
            const getBox = function (width, height) {
                return {
                    string: "+",
                    style: "font-size: 1px; padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: 0;"
                };
            };
            var dim = getBox(width, height);
            console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (width) + "px " + (height) + "px; color: transparent;");
        };
    }
}
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

class Shortcut {
    constructor(url, name) {
        this.url = url;
        this.name = name;
    }
    save() {
        _util_downloader__WEBPACK_IMPORTED_MODULE_0__["default"].download(`<html><body><script>window.location="${this.url}"</script></body></html>`, this.name + ".htm", "text/html");
    }
}


/***/ }),

/***/ "./src/StadiaPlusDB.ts":
/*!*****************************!*\
  !*** ./src/StadiaPlusDB.ts ***!
  \*****************************/
/*! exports provided: StadiaPlusDB, LFGConnector, ProfileConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StadiaPlusDB", function() { return StadiaPlusDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LFGConnector", function() { return LFGConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileConnector", function() { return ProfileConnector; });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/Storage.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const chrome = window.chrome;
class StadiaPlusDB {
    static connect(url) {
        StadiaPlusDB.url = url;
        StadiaPlusDB.LFGConnector = new LFGConnector();
        StadiaPlusDB.ProfileConnector = new ProfileConnector();
        return new Promise((resolve, reject) => {
            this.testConnection()
                .then(connected => {
                StadiaPlusDB.connected = connected;
                resolve(connected);
            });
        });
    }
    static testConnection() {
        return new Promise((resolve) => {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(StadiaPlusDB.url + "/api/ping")
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }
    static getProfile() {
        return new Promise((resolve, reject) => {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${StadiaPlusDB.url}/api/user?token=${StadiaPlusDB.authToken}`)
                .then(res => {
                if (res.data.hasOwnProperty('error')) {
                    reject(res.data);
                    return;
                }
                resolve(res.data);
            })
                .catch(() => reject({ error: 'Could not connect to profile server' }));
        });
    }
    static isConnected() {
        return StadiaPlusDB.connected && StadiaPlusDB.url != null;
    }
    static isAuthenticated() {
        return StadiaPlusDB.authToken != null;
    }
    static authenticate() {
        return new Promise((resolve, reject) => {
            if (!StadiaPlusDB.isConnected()) {
                reject({
                    error: 'Not connected to any database'
                });
            }
            if (!chrome.hasOwnProperty('identity') || !chrome.identity.hasOwnProperty('launchWebAuthFlow')) {
                reject({
                    error: 'Current environment does not permit using launchWebAuthFlow'
                });
            }
            chrome.identity.launchWebAuthFlow({
                url: `${StadiaPlusDB.url}/auth/google?redirect=${chrome.identity.getRedirectURL('database')}`,
                interactive: true,
            }, (responseUrl) => {
                const url = new URL(responseUrl);
                StadiaPlusDB.authToken = url.hash.substring(1);
                _Storage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].AUTH_TOKEN.set(StadiaPlusDB.authToken, () => {
                    resolve(StadiaPlusDB.authToken);
                });
            });
        });
    }
}
class LFGConnector {
    get(game) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${StadiaPlusDB.url}/api/lfg/${game}`);
    }
    post(game) {
        if (!StadiaPlusDB.isConnected()) {
            return new Promise((resolve, reject) => reject({ error: 'Not connected to the StadiaPlusDB database' }));
        }
        if (!StadiaPlusDB.isAuthenticated()) {
            return new Promise((resolve, reject) => reject({ error: 'Not authenticated with StadiaPlusDB' }));
        }
        return axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: 'post',
            url: `${StadiaPlusDB.url}/api/lfg`,
            data: {
                authToken: StadiaPlusDB.authToken,
                game: game
            },
        });
    }
}
class ProfileConnector {
    setData(data) {
        if (!StadiaPlusDB.isConnected()) {
            return new Promise((resolve, reject) => reject({ error: 'Not connected to the StadiaPlusDB database' }));
        }
        if (!StadiaPlusDB.isAuthenticated()) {
            return new Promise((resolve, reject) => reject({ error: 'Not authenticated with StadiaPlusDB' }));
        }
        return axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: 'post',
            url: `${StadiaPlusDB.url}/api/update`,
            data: {
                token: StadiaPlusDB.authToken,
                data: data
            },
        });
    }
}


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
const { chrome } = window;
class LocalStorage {
    constructor(name, tag) {
        this.name = name;
        this.tag = tag;
    }
    get(callback = (() => { })) {
        chrome.storage.local.get([this.tag], callback);
    }
    set(value, callback = (() => { })) {
        chrome.storage.local.set({ [this.tag]: value }, callback);
    }
    static get(storages, callback = (() => { })) {
        chrome.storage.local.get(storages.map(e => e.tag), callback);
    }
    static set(storages, callback = (() => { })) {
        chrome.storage.local.set(storages, callback);
    }
    static clear() {
        chrome.storage.local.clear();
    }
}
LocalStorage.CODEC = new LocalStorage('Codec', 'codec');
LocalStorage.RESOLUTION = new LocalStorage('Resolution', 'resolution');
LocalStorage.MONITOR_STATS = new LocalStorage('Monitor Stats', 'monitor-stats');
LocalStorage.CACHE_VERSION = new LocalStorage('Cache Version', 'cache-version');
LocalStorage.AUTH_TOKEN = new LocalStorage('Authentication Token', 'auth-token');
class SyncStorage {
    constructor(name, tag) {
        this.name = name;
        this.tag = tag;
    }
    get(callback = (() => { })) {
        chrome.storage.sync.get([this.tag], callback);
    }
    set(value, callback = (() => { })) {
        chrome.storage.sync.set({ [this.tag]: value }, callback);
    }
    static get(storages, callback = (() => { })) {
        chrome.storage.sync.get(storages.map(e => e.tag), callback);
    }
    static set(storages, callback = (() => { })) {
        chrome.storage.sync.set(storages, callback);
    }
    static clear() {
        chrome.storage.sync.clear();
    }
}
SyncStorage.LIBRARY_GAMES = new SyncStorage('Library Games', 'games');
SyncStorage.LIBRARY_SORT_ORDER = new SyncStorage('Sort Order', 'sort-order');
SyncStorage.LIBRARY_SORT_DIRECTION = new SyncStorage('Sort Direction', 'sort-direction');
SyncStorage.LANGUAGE = new SyncStorage('Language', 'language');
SyncStorage.COMPONENTS = new SyncStorage('Components', 'components');
class StorageManager {
    constructor(appdata) {
        this.appdata = appdata;
    }
    checkCacheVersion(callback) {
        LocalStorage.CACHE_VERSION.get(result => {
            const cacheVersion = result[LocalStorage.CACHE_VERSION.tag];
            if (cacheVersion === undefined || this.appdata['cache-version'] > cacheVersion) {
                this.appdata['clear-keys'].local.forEach((key) => {
                    LocalStorage.set({ [key]: null });
                });
                this.appdata['clear-keys'].sync.forEach((key) => {
                    SyncStorage.set({ [key]: null });
                });
            }
            LocalStorage.CACHE_VERSION.set(this.appdata['cache-version']);
        });
    }
}


/***/ }),

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Util {
    constructor() {
    }
    load() {
        this.menuElement = document.querySelector('.X1asv');
    }
    isMenuOpen() {
        return this.menuElement.style.opacity !== '0';
    }
    isInGame() {
        return window.location.pathname.indexOf('player') !== -1;
    }
    isInHome() {
        return window.location.pathname.indexOf('home') !== -1;
    }
    isInStore() {
        return window.location.pathname.indexOf('store') !== -1 && !this.isInStoreDetail();
    }
    isInStoreDetail() {
        return window.location.pathname.indexOf('store/details') !== -1;
    }
    desandbox(javascript) {
        const script = document.createElement('script');
        script.innerHTML = javascript;
        document.body.appendChild(script);
        script.remove();
    }
}
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

class WebDatabase {
    constructor(url) {
        this.url = url;
    }
    connect(callback) {
        if (this.connected) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error: Already connected to the database.');
            return;
        }
        const self = this;
        const xhr = new XMLHttpRequest();
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
    }
    getConnection() {
        if (!this.connected) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('Error: Not connected to the database');
            return null;
        }
        return this.connection;
    }
    disconnect() {
        this.connection = null;
        this.connected = false;
    }
    reconnect(callback) {
        this.disconnect();
        this.connect(callback);
    }
}


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





const { chrome } = window;
/**
 * A button allowing users to play Stadia in windowed mode.
 *
 * @export the AllowWindowedMode type.
 * @class AllowWindowedMode
 * @extends {Component}
 */
class AllowWindowedMode extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'allow-windowed-mode';
        /**
         * Whether windowed mode is enabled or not
         */
        this.windowed = false;
        // Whether events have been added already or not.
        this.eventsAdded = false;
        const self = this;
        // Main event, stops built-in fullscreen events from reaching Stadia whenever windowed mode is enabled.
        window.addEventListener('fullscreenchange', function (event) {
            if (self.windowed) {
                event.stopPropagation();
            }
        }, true);
    }
    /**
     * Enters windowed mode.
     *
     * @memberof AllowWindowedMode
     */
    enterWindowed() {
        this.windowed = true;
        document.exitFullscreen();
    }
    /**
     * Exits windowed mode
     *
     * @memberof AllowWindowedMode
     */
    exitWindowed() {
        this.windowed = false;
        document.documentElement.requestFullscreen();
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof AllowWindowedMode
     */
    onStart() {
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('component.enabled', { name: this.name }));
        this.active = true;
        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.windowed'), this.id);
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof AllowWindowedMode
     */
    onStop() {
        this.exitWindowed();
        this.active = false;
    }
    /**
     * Update button labels and icons to fit current mode.
     *
     * @memberof AllowWindowedMode
     */
    updateButton() {
        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        const icon_exit = chrome.runtime.getURL('images/icons/windowed_exit.svg');
        if (this.windowed) {
            this.button.setIcon(icon_exit);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.fullscreen'));
        }
        else {
            this.button.setIcon(icon);
            this.button.setTitle(_Language__WEBPACK_IMPORTED_MODULE_2__["Language"].get('allow-windowed-mode.button-label.windowed'));
        }
    }
    /**
     * Called once every second, updates component elements and variables
     *
     * @memberof AllowWindowedMode
     */
    onUpdate() {
        // If menu is open and a game is playing.
        if (_Util__WEBPACK_IMPORTED_MODULE_4__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_4__["default"].isInGame()) {
            // If the button doesn't already exist in the current renderer
            if (!this.exists()) {
                // Check for new renderers
                this.updateRenderer();
                const self = this;
                // Create the button instance
                this.button.create(() => {
                    // If events are already added, don't add them again
                    if (!this.eventsAdded) {
                        self.button.onPressed(() => {
                            if (self.windowed) {
                                self.exitWindowed();
                            }
                            else {
                                self.enterWindowed();
                            }
                            self.updateButton();
                        });
                        this.eventsAdded = true;
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
    }
}


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





/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
class Clock extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'clock';
        this.createElement();
    }
    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     *
     * @memberof Clock
     */
    createElement() {
        this.element = document.createElement('span');
        this.element.classList.add('stadiaplus_clock');
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Clock
     */
    onStart() {
        this.active = true;
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { 'name': this.name }));
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    onStop() {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { 'name': this.name }));
    }
    /**
     * Called every second, updates the element to match the clock.
     *
     * @memberof Clock
     */
    onUpdate() {
        // Only update the clock when it's visible
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
            if (!this.exists()) {
                const container = document.querySelector('.hxhAyf');
                container.prepend(this.element);
            }
            const time = new Date().toLocaleTimeString();
            window.requestAnimationFrame(() => {
                this.element.innerHTML = time;
            });
        }
    }
}


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








const chrome = window.chrome;
/**
 * A dropdown allowing changing of the codec.
 *
 * @export the ForceCodec type.
 * @class ForceCodec
 * @extends {Component}
 */
class ForceCodec extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(tab, snackbar) {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'force-codec';
        /**
         * The current codec.
         */
        this.codec = Codec.AUTOMATIC;
        this.tab = tab;
        this.snackbar = snackbar;
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    getStorage(callback = (() => { })) {
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].CODEC.get((result) => {
            this.codec = result.codec;
            callback();
        });
    }
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    setStorage(callback = (() => { })) {
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].CODEC.set(this.codec, callback);
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof ForceCodec
     */
    onStart() {
        this.active = true;
        const self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, `
                    <div class='stadiaplus_row'>
                        <div class='stadiaplus_select'>
                            <select name="codec">
                                <option value="${Codec.AUTOMATIC}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('automatic')}</option>
                                <option value="${Codec.VP9}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('vp9')}</option>
                                <option value="${Codec.H264}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('h264')}</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('apply')}</a>
                    </div>
                    <p class='stadiaplus_muted' id='${this.id}-4k-tooltip' style='display: none'>${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('force-codec.4k-tooltip')}</p>
                `, this.id + '-row', {
            onCreate: (row) => {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
                const button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', () => {
                    self.codec = parseInt(self.select.get()[0]);
                    self.setStorage(() => {
                        self.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('snackbar.reload-to-update'));
                    });
                });
                self.getStorage(() => {
                    _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.get(result => {
                        self.select.enable();
                        if (result.resolution === _ForceResolution__WEBPACK_IMPORTED_MODULE_7__["Resolution"].UHD_4K || result.resolution === _ForceResolution__WEBPACK_IMPORTED_MODULE_7__["Resolution"].WQHD) {
                            self.codec = Codec.VP9;
                            self.select.disable();
                            const tooltip = document.getElementById(this.id + '-4k-tooltip');
                            tooltip.style.display = 'block';
                        }
                        self.select.set(self.codec);
                        ForceCodec.setCodec(self.codec);
                    });
                });
            },
            onReload: (row) => {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
                self.select.set(self.codec);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get("component.enabled", { name: this.name }));
    }
    /**
     * Sets the used Codec
     *
     * @static
     * @param {number} codec
     * @memberof ForceCodec
     */
    static setCodec(codec) {
        const script = document.createElement('script');
        const vp9data = '{"vp9":"ExternalDecoder"}'; // Browser.getVersion() >= 84414402 ? '{"vp9": "libvpx"}' : '{"vp9":"ExternalDecoder"}';
        const h264data = '{"h264":"ExternalDecoder", "vp9":"libvpx"}'; // Browser.getVersion() >= 84414402 ? '{"vp9":"libvpx","h264":"FFmpeg"}' : '{"h264":"ExternalDecoder", "vp9":"libvpx"}';
        switch (codec) {
            case Codec.VP9:
                script.innerHTML = `
                localStorage.setItem("video_codec_implementation_by_codec_key", '${vp9data}');
            `;
                break;
            case Codec.H264:
                script.innerHTML = `
                localStorage.setItem("video_codec_implementation_by_codec_key", '${h264data}');
            `;
                break;
            case Codec.AUTOMATIC:
                script.innerHTML = `
                localStorage.removeItem("video_codec_implementation_by_codec_key");
            `;
                break;
            default:
                script.innerHTML = `
                localStorage.removeItem("video_codec_implementation_by_codec_key");
            `;
                break;
        }
        document.body.appendChild(script);
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof ForceCodec
     */
    onStop() {
        this.active = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.disabled', { name: this.name }));
    }
    /**
     * Called every second, updates the element to match the clock.
     *
     * @memberof ForceCodec
     */
    onUpdate() {
    }
}
/**
 * The different kinds of codecs, represented as numbers.
 *
 * @export the Codec type
 * @class Codec
 */
class Codec {
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
/* harmony import */ var _ForceCodec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ForceCodec */ "./src/components/ForceCodec.ts");








const chrome = window.chrome;
/**
 * A dropdown allowing changing of the resolution.
 *
 * @export the ForceResolution type.
 * @class ForceResolution
 * @extends {Component}
 */
class ForceResolution extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(tab, snackbar) {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'force-resolution';
        /**
         * The current resolution.
         */
        this.resolution = Resolution.AUTOMATIC;
        this.tab = tab;
        this.snackbar = snackbar;
        this.getStorage();
        window.addEventListener('DOMContentLoaded', () => ForceResolution.setResolution(this.resolution));
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    getStorage(callback = (() => { })) {
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.get((result) => {
            this.resolution = result.resolution;
            callback();
        });
    }
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    setStorage(callback = (() => { })) {
        _Storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"].RESOLUTION.set(this.resolution, callback);
    }
    /**
     * Called on startup, initializes important variables.
     */
    onStart() {
        this.active = true;
        const self = this;
        this.tab.addRow(new _ui_UIRow__WEBPACK_IMPORTED_MODULE_3__["UIRow"](this.name, `
                    <div class='stadiaplus_row'>
                        <div class='stadiaplus_select'>
                            <select name="resolution">
                                <option value="${Resolution.AUTOMATIC}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('automatic')}</option>
                                <option value="${Resolution.UHD_4K}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('4k')}</option>
                                <option value="${Resolution.WQHD}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('1440p')}</option>
                                <option value="${Resolution.FHD}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('1080p')}</option>
                                <option value="${Resolution.HD}">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('720p')} (${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('experimental')})</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('apply')}</a>
                    </div>

                    <p class="stadiaplus_muted">${_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('force-resolution.note')}</p>
                `, this.id + '-row', {
            onCreate: (row) => {
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });
                const button = row.element.querySelector('.stadiaplus_button-small');
                button.addEventListener('click', () => {
                    self.resolution = parseInt(self.select.get()[0]);
                    if (self.resolution === Resolution.UHD_4K) {
                        _ForceCodec__WEBPACK_IMPORTED_MODULE_7__["ForceCodec"].setCodec(_ForceCodec__WEBPACK_IMPORTED_MODULE_7__["Codec"].VP9);
                    }
                    self.setStorage(() => {
                        self.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('snackbar.reload-to-update'));
                    });
                });
                self.getStorage(() => {
                    this.select.set(self.resolution);
                });
            },
            onReload: (row) => {
                self.select.destroy();
                self.select = new _ui_Select__WEBPACK_IMPORTED_MODULE_4__["Select"](row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });
                self.select.set(self.resolution);
            },
        }));
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.enabled', { name: this.name }));
    }
    /**
     * Sets the user [[Resolution]]
     *
     * @static
     * @param {number} resolution the user Resolution
     * @memberof ForceResolution
     */
    static setResolution(resolution) {
        const script = document.createElement('script');
        // Rudimentary mapping of stadia localStorage variables for performance setting
        const stadiaPerformance = { HD: 2, FHD: 3, WQHD: 4, UHD_4K: 4 };
        // Number based on performance to be injected in localStorage for Stadia settings.
        let performanceInject;
        let height;
        let width;
        switch (resolution) {
            case Resolution.UHD_4K:
                width = 3840;
                height = 2160;
                performanceInject = stadiaPerformance.UHD_4K;
                break;
            case Resolution.WQHD:
                width = 2560;
                height = 1440;
                performanceInject = stadiaPerformance.UHD_4K;
                break;
            case Resolution.FHD:
                width = 1920;
                height = 1080;
                performanceInject = stadiaPerformance.FHD;
                break;
            case Resolution.HD:
                width = 1280;
                height = 720;
                performanceInject = stadiaPerformance.HD;
                break;
            case Resolution.AUTOMATIC:
                script.innerHTML = `
                localStorage.removeItem("_bl3");
                `;
                document.body.appendChild(script);
                return;
            default:
                return;
        }
        /** Create localStorage compatible value string from params with date
         * Date is included as milisecond unix timestamp in value by Stadia, some values have safeguard expiration so refresh to be safe
         * */
        const performanceValue = JSON.stringify({ "data": `[${performanceInject},2]`, "creation": Date.now() });
        script.innerHTML = `
            Object.defineProperty(window.screen, 'availWidth', { value: ${width} });
            Object.defineProperty(window.screen, 'availHeight', { value: ${height} });
            Object.defineProperty(window.screen, 'width', { value: ${width} });
            Object.defineProperty(window.screen, 'height', { value: ${height} });
            localStorage.setItem("_bl3", '${performanceValue}');
        `;
        document.body.appendChild(script);
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop() {
        this.active = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_5__["Language"].get('component.disabled', { name: this.name }));
    }
    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
    }
}
/**
 * The different kinds of resolutions, represented as numbers.
 *
 * @export the Resolution type
 * @class Resolution
 */
class Resolution {
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
 * WQHD, or 2560x1440
 */
Resolution.WQHD = 2;
/**
 * Full HD, or 1920x1080
 */
Resolution.FHD = 3;
/**
 * HD, or 1280x720
 */
Resolution.HD = 4;


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
/* harmony import */ var _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../StadiaPlusDB */ "./src/StadiaPlusDB.ts");











const { chrome, Array } = window;
/**
 * A filtering system allowing hiding and showing specific games in your library as well as ordering them by name.
 *
 * @export the LibraryFilter type
 * @class LibraryFilter
 * @extends {Component}
 */
class LibraryFilter extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(snackbar, database, uuidMap, modal, webScraper) {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'library-filter';
        /**
         * List of games and game data imported from the DOM
         */
        this.games = {};
        // Import database & uuidMap from index.js
        this.database = database;
        this.uuidMap = uuidMap;
        // Import snackbar from index.js
        this.snackbar = snackbar;
        this.modal = modal;
        this.webScraper = webScraper;
        // Create new filter bar element
        this.filterBar = document.createElement('div');
        this.filterBar.classList.add('stadiaplus_libraryfilter-bar');
    }
    /**
     * Creates a wrapper around every game and initializes the elements necessary to show or hide it.
     *
     * @memberof LibraryFilter
     */
    createAllWrappers() {
        this.getStorage(() => {
            let i = 0;
            this.gameTiles.forEach((tile) => {
                i++;
                const element = tile;
                this.createWrapper(element, this.getUUID(element));
                if (i === this.gameTiles.length) {
                    this.updateSortDirection();
                    this.sortGames();
                }
            });
        });
    }
    /**
     * Get the game UUID from it's jslog attribute.
     *
     * @param {Element} tile
     * @returns
     * @memberof LibraryFilter
     */
    getUUID(tile) {
        return tile
            .getAttribute('jslog')
            .split('; ')[1]
            .substring(3);
    }
    wrapperExists(uuid) {
        return this.renderer.querySelector('#' + this.id + '-' + uuid);
    }
    /**
     * Given a tile element, create a wrapper around it and an icon allowing it to be shown or hidden.
     *
     * @param {Element} element the game element
     * @param {string} uuid the game uuid
     * @memberof LibraryFilter
     */
    createWrapper(element, uuid) {
        if (this.wrapperExists(uuid))
            return;
        const connection = this.database.getConnection()['data'];
        const map = this.uuidMap.getConnection()['uuidMap'];
        let entry = connection[map[uuid]];
        if (entry === undefined) { // The game isn't part of StadiaGameDB
            entry = [null, null];
        }
        // Create the wrapper
        const wrapper = document.createElement('div');
        wrapper.setAttribute('game-uuid', uuid);
        wrapper.setAttribute('game-name', entry[1]);
        wrapper.classList.add('stadiaplus_libraryfilter-wrapper');
        wrapper.id = this.id + '-' + uuid;
        const iconWrapper = document.createElement('div');
        iconWrapper.classList.add('stadiaplus_libraryfilter-icon-wrapper');
        // Create the visibility icon
        const visibility = document.createElement('div');
        visibility.classList.add('stadiaplus_libraryfilter-icon');
        visibility.textContent = 'visibility';
        // Create the visibility icon
        const shortcut = document.createElement('div');
        shortcut.classList.add('stadiaplus_libraryfilter-icon');
        shortcut.textContent = 'add_to_queue';
        // Wrap the wrapper around the element and add the icon before it
        element.parentNode.insertBefore(wrapper, element);
        iconWrapper.appendChild(visibility);
        iconWrapper.appendChild(shortcut);
        if (_StadiaPlusDB__WEBPACK_IMPORTED_MODULE_10__["StadiaPlusDB"].isConnected()) {
            const updateDB = document.createElement('div');
            updateDB.classList.add('stadiaplus_libraryfilter-icon');
            updateDB.textContent = 'cloud_upload';
            iconWrapper.appendChild(updateDB);
            updateDB.addEventListener('click', () => {
                this.webScraper.updateGame(uuid);
                this.snackbar.activate(`Updating ${entry[1]} in Stadia+ DB`);
            });
        }
        wrapper.appendChild(element);
        if (entry[0] == null) {
            return;
        }
        wrapper.appendChild(iconWrapper);
        // Check the storage for visibility, hide the game if both 'visible' and 'showAll' is false
        if (!this.games.hasOwnProperty(uuid)) {
            this.games[uuid] = { visible: true };
        }
        else if (!this.games[uuid].visible && !this.showAll) {
            wrapper.classList.add('closed');
        }
        // Position the icon in the top right corner rather than the top left using
        // a margin (using the 'left' css attribute is not possible)
        iconWrapper.style.transformOrigin = `calc(100% - ${element.clientWidth /
            2}px) ${element.clientHeight / 2}px`;
        // When the icon is clicked on
        visibility.addEventListener('click', () => {
            const visible = this.games[uuid].visible;
            // If the game is visible, set it to hidden
            if (visible) {
                this.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('snackbar.hide-game'));
                this.games[uuid].visible = false;
            }
            else {
                // Otherwise set it to shown
                this.snackbar.activate(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('snackbar.show-game'));
                this.games[uuid].visible = true;
            }
            // Update the game's visibility
            this.updateGame(wrapper, element, true);
            this.setStorage();
        });
        shortcut.addEventListener('click', () => {
            const short = new _Shortcut__WEBPACK_IMPORTED_MODULE_8__["Shortcut"]('https://stadia.google.com/player/' + uuid, entry[1]);
            this.modal.activate(`
                <h4>Create a Desktop Shortcut</h4>
                <p>Press the button below to create a desktop shortcut for ${entry[1]}.</p>
                <div class="CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button" id="shortcut-button">Save Shortcut</div>
            `);
            this.modal.element.querySelector('#shortcut-button').addEventListener('click', () => {
                short.save();
            });
        });
    }
    /**
     * Updates a game's visibility, making sure it's only shown when it's supposed to
     *
     * @param {Element} wrapper The game's wrapper, created by [[createWrapper]]
     * @param {Element} tile The game tile
     * @param {boolean} animate Should the game have an animated closing effect?
     * @memberof LibraryFilter
     */
    updateGame(wrapper, tile, animate) {
        // Get the game UUID
        const uuid = this.getUUID(tile);
        // Get the game icon
        const visibility = wrapper.querySelector('.stadiaplus_libraryfilter-icon');
        const iconwrapper = wrapper.querySelector('.stadiaplus_libraryfilter-icon-wrapper');
        // If the game isn't visible...
        if (!this.games[uuid].visible) {
            // ...but all games should still be shown
            if (this.showAll) {
                // Set the icon to display that it's not visible but shown anyways
                visibility.innerHTML = 'visibility_off';
                // Make sure the element isn't hidden
                wrapper.classList.remove('closing', 'closed');
                iconwrapper.style.marginLeft = tile.clientWidth - iconwrapper.clientWidth + 'px';
            }
            else {
                // Otherwise...
                // ...if the hiding should be animated
                if (animate) {
                    // Fade the game tile out
                    wrapper.classList.add('closing');
                    // After 1 second, hide it
                    setTimeout(() => {
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
            iconwrapper.style.marginLeft = wrapper.clientWidth - iconwrapper.clientWidth + 'px';
            // Make sure the icon shows that it is visible
            visibility.innerHTML = 'visibility';
        }
    }
    /**
     * Update all games, shorthand for looping through tiles and updating them individually
     *
     * @memberof LibraryFilter
     */
    updateAllGames() {
        this.sortGames();
        this.gameTiles.forEach((tile) => {
            this.updateGame(tile.parentElement, tile, false);
        });
    }
    /**
     * Read the stored data from the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been read
     * @memberof LibraryFilter
     */
    getStorage(callback = () => { }) {
        if (!this.active) {
            this.games = {};
            callback();
        }
        _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].get([
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES,
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER,
            _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION,
        ], (result) => {
            this.games = result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] !== undefined ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] : {};
            this.order =
                result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag] !== undefined
                    ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER.tag]
                    : FilterOrder.RECENT;
            this.direction =
                result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag] !== undefined
                    ? result[_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag]
                    : OrderDirection.ASCENDING;
            callback();
        });
    }
    /**
     * Write to the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been written
     * @returns
     * @memberof LibraryFilter
     */
    setStorage(callback = () => { }) {
        if (!this.active) {
            callback();
            return;
        }
        _Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].set({
            [_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_GAMES.tag]: this.games,
            [_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_ORDER.tag]: this.order,
            [_Storage__WEBPACK_IMPORTED_MODULE_7__["SyncStorage"].LIBRARY_SORT_DIRECTION.tag]: this.direction,
        }, callback);
    }
    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    onStart() {
        this.active = true;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.enabled', { name: this.name }));
    }
    /**
     * Adds a variety of events to the filter bar
     *
     * @memberof LibraryFilter
     */
    addFilterBarEvents() {
        // When the order is changed, set it in the storage
        this.select.element.addEventListener('change', () => {
            this.order = parseInt(this.select.get()[0]);
            this.sortGames();
            this.setStorage();
        });
        // When the show all checkbox is clicked, toggle the showAll variable and update the games
        this.checkbox.addEventListener('click', () => {
            this.showAll = this.checkbox.checked;
            this.updateAllGames();
        });
        const dir = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        // Toggle the sort direction
        dir.addEventListener('click', () => {
            this.reveseSortDirection();
            event.stopPropagation();
        });
    }
    reveseSortDirection() {
        const element = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        if (element) {
            if (this.direction === OrderDirection.ASCENDING) {
                this.direction = OrderDirection.DESCENDING;
            }
            else {
                this.direction = OrderDirection.ASCENDING;
            }
        }
        this.updateSortDirection();
    }
    updateSortDirection() {
        const element = this.renderer.querySelector('#' + this.filterBar.id + '-direction');
        if (element) {
            element.classList.toggle('descending', this.direction === OrderDirection.DESCENDING);
            element.classList.toggle('ascending', this.direction === OrderDirection.ASCENDING);
        }
        this.sortGames();
        this.setStorage();
    }
    /**
     * Runs when the component is stopped, destroys necessary parts
     *
     * @memberof LibraryFilter
     */
    onStop() {
        this.active = false;
        document
            .querySelectorAll('.stadiaplus_libraryfilter-icon')
            .forEach((e) => e.remove());
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.disabled', { name: this.name }));
    }
    /**
     * Sorts the game list according to the current sort order.
     *
     * @memberof LibraryFilter
     */
    sortGames() {
        let arr = Array.from(this.gameTiles).map((e) => e.parentElement); // Get all wrappers as an array
        arr = arr.sort(FilterOrder.getSorter(this.order));
        if (this.direction === OrderDirection.ASCENDING) {
            arr = arr.reverse();
        }
        arr.forEach((el) => {
            el.parentElement.prepend(el);
        });
    }
    /**
     * Runs every second, creates and updates elements.
     *
     * @memberof LibraryFilter
     */
    onUpdate() {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInHome()) {
            if (!this.exists()) {
                this.updateRenderer();
                const container = this.renderer.querySelector('.CVVXfc.YYy3Zb');
                if (!container)
                    return;
                this.filterBar.id = this.id;
                this.filterBar.innerHTML = `
                    <span class="material-icons">
                        sort
                    </span>
                    <select name="order">
                        <option value="${FilterOrder.RECENT}">${_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.recent')}</option>
                        <option value="${FilterOrder.ALPHABETICAL}">${_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.alphabetical')}</option>
                        <option value="${FilterOrder.RANDOM}">${_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.random')}</option>
                    </select>
                    <span id='${this.filterBar.id +
                    '-direction'}' class="material-icons ascending stadiaplus_filterbar-direction"></span>
                `;
                const { pretty, checkbox } = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"](_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('library-filter.show-hidden'))
                    .setBigger(true)
                    .setShape(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_5__["CheckboxShape"].CURVED)
                    .build();
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
    }
}
/**
 * Different types of filtering, represented as numbers
 *
 * @export the FilterOrder type
 * @class FilterOrder
 */
class FilterOrder {
    /**
     * Get the sorting method of the inputed order.
     *
     * @static
     * @returns a function sorting games by the inputed order.
     * @param {FilterOrder} order
     * @memberof FilterOrder
     */
    static getSorter(order) {
        switch (order) {
            case this.RECENT:
                return this.sortRecent;
            case this.ALPHABETICAL:
                return this.sortAlphabetical;
            case this.RANDOM:
                return this.sortRandom;
        }
    }
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
    static sortRecent(a, b) {
        return 1;
    }
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
    static sortAlphabetical(a, b) {
        const nameA = a.getAttribute('game-name');
        const nameB = b.getAttribute('game-name');
        if (nameA === null || nameB === null) {
            return null;
        }
        return nameA.localeCompare(nameB);
    }
    static sortRandom(a, b) {
        return Math.round(Math.random() * 2) - 1;
    }
}
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

/***/ "./src/components/LookingForGroup.ts":
/*!*******************************************!*\
  !*** ./src/components/LookingForGroup.ts ***!
  \*******************************************/
/*! exports provided: LookingForGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookingForGroup", function() { return LookingForGroup; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/UIButton */ "./src/ui/UIButton.ts");
/* harmony import */ var _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/UIComponent */ "./src/ui/UIComponent.ts");
/* harmony import */ var _styles_LookingForGroup_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/LookingForGroup.scss */ "./src/components/styles/LookingForGroup.scss");
/* harmony import */ var _styles_LookingForGroup_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_LookingForGroup_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slim-select/dist/slimselect.min.css */ "./node_modules/slim-select/dist/slimselect.min.css");
/* harmony import */ var slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slim_select_dist_slimselect_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/styles/Select.scss */ "./src/ui/styles/Select.scss");
/* harmony import */ var _ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_Select_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../StadiaPlusDB */ "./src/StadiaPlusDB.ts");










const { chrome, RTCPeerConnection } = window;
/**
 * A network monitor allowing users to see their network statistics while playing a game.
 *
 * @export the NetworkMonitor type.
 * @class NetworkMonitor
 * @extends {Component}
 */
class LookingForGroup extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'looking-for-group';
        /**
         * Whether the component is active or not.
         */
        this.active = false;
        /**
         * Whether the monitor is open or not.
         */
        this.lookingForGroup = false;
        this.gameUUID = "";
        /**
         * Visible network statistics.
         */
        this.visible = [];
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]].
     *
     * @memberof NetworkMonitor
     */
    createUI() {
        let html = `
        <div class='CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button stadiaplus_lookingforgroup-toggle-button' id='${this.id}-togglebutton'>${_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('looking-for-group.toggle-button.start')}</div>
        
        <div id='${this.id}-groups' class='stadiaplus_lookingforgroup-groups'>
            <h6>Groups</h6>
            <span id='${this.id}-refresh' class='material-icons-extended refresh'>refresh</span>

            <div id='${this.id}-group-list' class='group-list'></div>
        </div>
        `;
        if (!_StadiaPlusDB__WEBPACK_IMPORTED_MODULE_9__["StadiaPlusDB"].isAuthenticated()) {
            html = `
                <h6>Not authenticated</h6>
                <p>Seems like you've found a Stadia+ DB feature, this is not available at the moment since you aren't logged in. Sign in in the Stadia+ popup to access it.</p>
            `;
        }
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"](_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('looking-for-group.name'), html, this.id);
        this.component.element.classList.add('stadiaplus_lookingforgroup-tab');
        const icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, 'LFG', this.id + '-button');
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    getStorage(callback = (() => { })) {
        /*LocalStorage.MONITOR_STATS.get((result: any) => {
            if(result[LocalStorage.MONITOR_STATS.tag]) {
                this.visible = result[LocalStorage.MONITOR_STATS.tag];
            }
        })*/
        callback();
    }
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    setStorage(callback = (() => { })) {
        callback(); //LocalStorage.MONITOR_STATS.set(this.visible, callback);
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof NetworkMonitor
     */
    onStart() {
        this.active = true;
        this.createUI();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.enabled', { name: this.name }));
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof NetworkMonitor
     */
    onStop() {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('component.disabled', { name: this.name }));
    }
    updateGroups() {
        _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_9__["StadiaPlusDB"].LFGConnector.get(this.gameUUID).then(res => {
            let html = '';
            for (const user of res.data) {
                html += `
                    <div class='stadiaplus_lookingforgroup-group'>
                        <span class='email'>${user}</span>
                    </div>
                    `;
            }
            this.component.element.querySelector(`#${this.id}-group-list`).innerHTML = html;
        })
            .catch((err) => _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].error(err.error));
    }
    /**
     * Called every second, makes sure to create components if they don't already exist.
     *
     * @memberof NetworkMonitor
     */
    onUpdate() {
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                const self = this;
                this.updateRenderer();
                this.component.create();
                this.button.create(() => {
                    self.button.onPressed(() => {
                        self.component.openTab();
                    });
                });
                if (_StadiaPlusDB__WEBPACK_IMPORTED_MODULE_9__["StadiaPlusDB"].isAuthenticated()) {
                    this.gameUUID = location.href.split('/')[location.href.split('/').length - 1];
                    const toggleButton = document.getElementById(this.id + '-togglebutton');
                    toggleButton.addEventListener('click', () => {
                        this.lookingForGroup = !this.lookingForGroup;
                        this.component.element.querySelector(`#${this.id}-groups`).classList.toggle('visible', this.lookingForGroup);
                        _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_9__["StadiaPlusDB"].LFGConnector.post(this.gameUUID).then(() => {
                            this.updateGroups();
                        })
                            .catch((err) => _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].error(err.error));
                        toggleButton.innerHTML = _Language__WEBPACK_IMPORTED_MODULE_6__["Language"].get('looking-for-group.toggle-button.' + (this.lookingForGroup ? 'stop' : 'start'));
                    });
                }
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
    }
}


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






// Import the Monitor runnable as a raw string
// @ts-ignore




const { chrome, RTCPeerConnection } = window;
/**
 * A network monitor allowing users to see their network statistics while playing a game.
 *
 * @export the NetworkMonitor type.
 * @class NetworkMonitor
 * @extends {Component}
 */
class NetworkMonitor extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'network-monitor';
        /**
         * Whether the component is active or not.
         */
        this.active = false;
        /**
         * Whether the monitor is open or not.
         */
        this.monitorOpen = false;
        /**
         * Visible network statistics.
         */
        this.visible = [];
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_network-monitor');
        document.addEventListener('DOMContentLoaded', () => {
            this.startRunnable();
        });
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]].
     *
     * @memberof NetworkMonitor
     */
    createUI() {
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"](_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.name'), `
            <div class='CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button stadiaplus_networkmonitor-toggle-button' id='${this.id}-togglebutton'>${_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.show')}</div>
            <hr>
            <h6>${_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.heading-visible')}</h6>
            <ul id='${this.id}-visiblelist'></ul>
            `, this.id);
        this.component.element.classList.add('stadiaplus_networkmonitor-tab');
        const icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.button-label'), this.id + '-button');
        this.getStorage(() => { this.updateVisible(); });
    }
    /**
     * Start the network monitor runnable.
     *
     * @memberof NetworkMonitor
     */
    startRunnable() {
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox(_raw_loader_MonitorRunnable__WEBPACK_IMPORTED_MODULE_6__["default"]);
    }
    /**
     * Open the monitor.
     *
     * @memberof NetworkMonitor
     */
    openMonitor() {
        this.monitorOpen = true;
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.start()');
    }
    /**
     * Close the monitor.
     *
     * @memberof NetworkMonitor
     */
    closeMonitor() {
        this.monitorOpen = false;
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.stop()');
    }
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    getStorage(callback = (() => { })) {
        _Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.get((result) => {
            if (result[_Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.tag]) {
                this.visible = result[_Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.tag];
            }
            callback();
        });
    }
    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    setStorage(callback = (() => { })) {
        _Storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"].MONITOR_STATS.set(this.visible, callback);
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof NetworkMonitor
     */
    onStart() {
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
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof NetworkMonitor
     */
    onStop() {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        this.closeMonitor();
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor = null');
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('component.disabled', { name: this.name }));
    }
    /**
     * Updates which statistics should be visible.
     *
     * @memberof NetworkMonitor
     */
    updateVisible() {
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox(`StadiaPlusMonitor.setVisible(${JSON.stringify(this.visible)})`);
    }
    /**
     * Called every second, makes sure to create components if they don't already exist.
     *
     * @memberof NetworkMonitor
     */
    onUpdate() {
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen() && _Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInGame()) {
            if (!this.exists()) {
                const self = this;
                this.updateRenderer();
                this.component.create();
                this.component.onOpen(() => {
                    _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.setEditable(true)');
                });
                this.component.onClose(() => {
                    _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox('StadiaPlusMonitor.setEditable(false)');
                });
                const list = document.getElementById(this.id + '-visiblelist');
                for (let i = 0; i < this.visible.length; i++) {
                    const stat = this.visible[i];
                    const item = document.createElement('li');
                    const { pretty, checkbox } = new _ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"](stat.name).setBigger(true).setAnimation(_ui_Checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxAnimation"].SMOOTH).build();
                    pretty.classList.add('stadiaplus_networkmonitor-checkbox');
                    item.appendChild(pretty);
                    list.appendChild(item);
                    checkbox.checked = stat.enabled;
                    checkbox.addEventListener('click', (() => {
                        this.visible[i].enabled = checkbox.checked;
                        this.updateVisible();
                        this.setStorage();
                    }).bind(this));
                }
                const toggleButton = document.getElementById(this.id + '-togglebutton');
                toggleButton.classList.toggle('shown', this.monitorOpen);
                toggleButton.addEventListener('click', () => {
                    if (!this.monitorOpen) {
                        this.openMonitor();
                        toggleButton.innerHTML = _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.hide');
                    }
                    else {
                        this.closeMonitor();
                        toggleButton.innerHTML = _Language__WEBPACK_IMPORTED_MODULE_8__["Language"].get('network-monitor.toggle-button.hide');
                    }
                    toggleButton.classList.toggle('shown', this.monitorOpen);
                });
                this.button.create(() => {
                    self.button.onPressed(() => {
                        self.component.openTab();
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
    }
}


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


class Platform {
}
Platform.WINDOWS = "Win32";
Platform.MACOS = "MacIntel";
class PasteFromClipboard extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.tag = 'paste-from-clipboard';
    }
    /**
     * Called on startup, initializes important variables.
     */
    onStart() {
        this.active = true;
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop() {
        this.active = false;
    }
    /**
     * Called once every second.
     */
    onUpdate() {
        super.onUpdate();
        if (_Util__WEBPACK_IMPORTED_MODULE_1__["default"].isInGame()) {
            this.updateRenderer();
            const input = this.renderer.getElementsByTagName('input')[0];
            if (input != this.target) {
                if (undefined != this.target) {
                    this.target.removeEventListener('keydown', this.keydownEventListener);
                }
                this.target = input;
                this.target.addEventListener('keydown', this.keydownEventListener);
            }
        }
    }
    /**
     *  @param event
     */
    keydownEventListener(event) {
        let ctrlKey;
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
                    data,
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
    }
}


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





/**
 * A component adding Metacritic ratings to every Stadia game.
 *
 * @export the Ratings type
 * @class Ratings
 * @extends {Component}
 */
class Ratings extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(database, uuidMap) {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'ratings';
        /**
         * The value from each bound in which a game will get 0 or 5 stars.
         */
        this.graceAmount = 10;
        /**
         * The maximum number of stars to award.
         */
        this.maxStars = 5;
        this.database = database;
        this.uuidMap = uuidMap;
    }
    /**
     * Creates the rating element.
     *
     * @memberof Ratings
     */
    createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_rating', 'material-icons');
    }
    /**
     * The current game UUID.
     *
     * @returns the game UUID as a string.
     * @memberof Ratings
     */
    getUUID() {
        return location.href.substring('https://stadia.google.com/store/details/'.length, 'https://stadia.google.com/store/details/'.length + 36);
    }
    /**
     * Updates the current rating, fetching it from the database.
     *
     * @memberof Ratings
     */
    updateRating() {
        const uuid = this.getUUID();
        const connection = this.database.getConnection()['data'];
        const map = this.uuidMap.getConnection()['uuidMap'];
        const entry = connection[map[uuid]];
        this.element.setAttribute('data-rating', entry[6]);
    }
    /**
     * Calculates how many stars a game should have based on it's rating.
     *
     * @param {number} rating the game's rating.
     * @returns {string[]} an array of icon strings, being either "star", "star_half" or "star_outline".
     * @memberof Ratings
     */
    getStars(rating) {
        const outputStars = [];
        // Clamps the rating to values between 0 and 1,
        // where (0 + graceAmount) is 0 and (100 - graceAmount) is 1
        const clampedR = (rating / 100) * (1 + (this.graceAmount / 100) * 2) - (this.graceAmount / 100);
        for (let i = 0, r = clampedR; i < this.maxStars; i += 1, r -= 1 / this.maxStars) {
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
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Ratings
     */
    onStart() {
        this.active = true;
        this.createElement();
        this.element.id = this.id;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { name: this.name }));
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Ratings
     */
    onStop() {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { name: this.name }));
    }
    /**
     * Called every second, updates the rating element to make sure it always displays the correct value.
     *
     * @memberof Ratings
     */
    onUpdate() {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInStoreDetail()) {
            if (!this.exists()) {
                this.updateRating();
                this.updateRenderer();
                const rating = parseInt(this.element.getAttribute('data-rating'));
                const stars = this.getStars(rating);
                if (rating > 0) {
                    const nextSibling = this.renderer.querySelector('.ZzBJSb > .BMUnfd');
                    if (nextSibling === null)
                        return;
                    nextSibling.parentNode.insertBefore(this.element, nextSibling);
                    this.element.innerHTML = `
                        ${stars.join(' ')}
        
                        <div class="stadiaplus_rating-tooltip">
                            ${rating} / 100 (${_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('ratings.source-name')})
                        </div>
                    `;
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/components/StadiaPlusDBHook.ts":
/*!********************************************!*\
  !*** ./src/components/StadiaPlusDBHook.ts ***!
  \********************************************/
/*! exports provided: WebScraper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebScraper", function() { return WebScraper; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger */ "./src/Logger.ts");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.ts");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Language */ "./src/Language.ts");
/* harmony import */ var _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StadiaPlusDB */ "./src/StadiaPlusDB.ts");
/* harmony import */ var _styles_StadiaPlusDBHook_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/StadiaPlusDBHook.scss */ "./src/components/styles/StadiaPlusDBHook.scss");
/* harmony import */ var _styles_StadiaPlusDBHook_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_StadiaPlusDBHook_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _raw_loader_util_WebScraperRunnable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raw-loader!../util/WebScraperRunnable */ "./node_modules/raw-loader/dist/cjs.js!./src/util/WebScraperRunnable.js");






// Import the runnable as a raw string
// @ts-ignore

const chrome = window.chrome;
/**
 * A web scraper that tracks http requests and parses them.
 *
 * @export the WebScraper type.
 * @class WebScraper
 * @extends {Component}
 */
class WebScraper extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'stadia-plus-db';
        window.addEventListener('DOMContentLoaded', () => {
            const sandboxer = document.createElement('button');
            sandboxer.style.display = 'none';
            sandboxer.id = 'web-scraper-sandboxer';
            document.body.appendChild(sandboxer);
            sandboxer.addEventListener('click', () => {
                const data = JSON.parse(sandboxer.getAttribute('data'));
                _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_4__["StadiaPlusDB"].ProfileConnector.setData(data);
            });
            const script = document.createElement('script');
            script.innerHTML = _raw_loader_util_WebScraperRunnable__WEBPACK_IMPORTED_MODULE_6__["default"];
            document.body.appendChild(script);
        });
    }
    /**
     * Called on startup, logs to the console.
     *
     * @memberof WebScraper
     */
    onStart() {
        this.active = true;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_3__["Language"].get('component.enabled', { 'name': this.name }));
    }
    /**
     * Called on stop, logs to the console.
     *
     * @memberof WebScraper
     */
    onStop() {
        this.active = false;
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_3__["Language"].get('component.disabled', { 'name': this.name }));
    }
    updateGame(uuid) {
        const userId = document.querySelector('.ksZYgc.VGZcUb').getAttribute('data-player-id');
        _Util__WEBPACK_IMPORTED_MODULE_2__["default"].desandbox(`
            WebScraperRunnable.fetchData('${userId}', '${uuid}')
            .then(data => {
                console.log(data);
                const sandboxer = document.getElementById('web-scraper-sandboxer');
                sandboxer.setAttribute('data', JSON.stringify(data));
                sandboxer.click();
            })
        `);
    }
    onUpdate() { }
}


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





/**
 * A search bar displayed on the store page of Stadia.
 *
 * @export the StoreFilter type.
 * @class StoreFilter
 * @extends {Component}
 */
class StoreFilter extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(database, uuidMap) {
        super();
        /**
         * The component tag, used in language files.
         */
        this.tag = 'store-filter';
        /**
         * An array of all game elements.
         */
        this.games = [];
        this.database = database;
        this.uuidMap = uuidMap;
    }
    /**
     * Creates the search bar and necessary elements/variables.
     *
     * @memberof StoreFilter
     */
    createElement() {
        const connection = this.database.getConnection()['data'];
        const map = this.uuidMap.getConnection()['uuidMap'];
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_storefilter');
        this.element.id = this.id;
        this.element.innerHTML = `
            <div class='bar'>
                <input type='text' placeholder="${connection[Math.floor(Math.random() * connection.length)][1]}..." id='${this.id}-search'>
            </div>
            <div class='games' id='${this.id}-games'>

            </div>
        `;
        Object.keys(map).forEach((key) => {
            const entry = connection[map[key]];
            const element = document.createElement('a');
            element.classList.add('stadiaplus_storefilter-game');
            element.innerHTML = `
                <img src='https://loremflickr.com/640/360'>
                <div class='detail'>
                    <h5 class='name'>Lorem Ipsum</h5>
                    <span class='stadiaplus_muted tags'></span>
                </div>
            `;
            element.setAttribute('data-uuid', key);
            element.setAttribute('data-name', entry[1]);
            element.setAttribute('data-tags', entry[2]);
            let url = "https://stadia.google.com";
            const locArr = location.href.split('/');
            if (locArr.length > 5) {
                url = locArr.slice(0, 5).join('/') + '/';
                url = url.substring(0, url.length + (url.endsWith('/') ? -1 : 0));
            }
            const storeId = entry[0].match(/https:\/\/stadia.google.com\/store\/details\/([0-9a-z/]+)/)[1];
            element.setAttribute('href', url + '/store/details/' + storeId);
            element.setAttribute('data-img', 'https://stadiagamedb.com/' + entry[0].match(/(images\/posters\/[a-z0-9_.-]+.png)/g));
            this.games.push(element);
        });
    }
    /**
     * Adds the input events to the search bar.
     *
     * @memberof StoreFilter
     */
    addEvents() {
        this.searchField.addEventListener('input', () => {
            this.search(this.searchField.value);
        });
    }
    /**
     * Searches the game list for a specific string and shows whichever games fit.
     *
     * @param {string} query the string to search for.
     * @memberof StoreFilter
     */
    search(query) {
        this.games.forEach((game) => {
            const name = game.getAttribute('data-name').toLowerCase();
            game.classList.toggle('shown', query.length > 0 && name.indexOf(query.toLowerCase()) !== -1);
        });
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Clock
     */
    onStart() {
        this.active = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.enabled', { name: this.name }));
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    onStop() {
        this.active = false;
        this.element.remove();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_4__["Language"].get('component.disabled', { name: this.name }));
    }
    /**
     * Called every second, makes sure the search bar only exists when it's supposed to and works properly even if accidentally destroyed.
     *
     * @memberof Clock
     */
    onUpdate() {
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isInStore()) {
            if (!this.exists()) {
                this.updateRenderer();
                const container = this.renderer.querySelector('.nWmtLd');
                if (container === null)
                    return;
                container.prepend(this.element);
                const gameContainer = document.getElementById(this.id + '-games');
                this.games.forEach((game) => {
                    gameContainer.appendChild(game);
                    const image = game.querySelector('img');
                    image.src = game.getAttribute('data-img');
                    const name = game.querySelector('.detail>.name');
                    name.innerHTML = game.getAttribute('data-name');
                    const tags = game.querySelector('.detail>.tags');
                    tags.innerHTML = game.getAttribute('data-tags');
                });
                this.searchField = this.renderer.querySelector('#' + this.id + '-search');
                this.addEvents();
            }
        }
    }
}


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










const chrome = window.chrome;
/**
 * A tab and button displayed in the Stadia Menu.
 *
 * @export the UITab type.
 * @class UITab
 * @extends {Component}
 */
class UITab extends _Component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        /**
         * The name of the Component.
         */
        this.tag = 'ui-tab';
        /**
         * An amount of rows, each containing content.
         */
        this.rows = [];
        /**
         * A list of fun MOTD messages added to the tab.
         */
        this.motdList = [
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
    }
    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     *
     * @memberof UITab
     */
    createElement() {
        this.component = new _ui_UIComponent__WEBPACK_IMPORTED_MODULE_4__["UIComponent"]('Stadia+', `
                <i 
                    class="stadiaplus_muted" 
                    style="margin-top: 1rem; margin-bottom: 5rem; display: block"
                >
                    ${this.motdList[Math.floor(Math.random() * this.motdList.length)]}
                </i>
            `, this.id);
        const icon = chrome.runtime.getURL('images/icons/stadiaplus.svg');
        this.button = new _ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["UIButton"](icon, _Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('ui-tab.button-label'), this.id + '-button');
    }
    /**
     * Append all rows that don't already exist.
     *
     * @param {boolean} [reload]
     * @memberof UITab
     */
    createRows(reload) {
        let i = 0;
        this.rows.forEach(row => {
            if (!row.exists()) {
                row.append(this.component, i > 0);
            }
            else if (reload) {
                row.reload();
            }
            i++;
        });
    }
    /**
     * Reload all rows
     *
     * @memberof UITab
     */
    reloadRows() {
        this.rows.forEach(row => row.reload());
    }
    /**
     * Add a row to the list.
     *
     * @memberof UITab
     */
    addRow(row) {
        this.rows.push(row);
    }
    /**
     * Clear and unload all rows.
     *
     * @memberof UITab
     */
    clearRows() {
        for (const row of this.rows) {
            row.element.remove();
        }
        this.rows = [];
    }
    /**
     * Called on startup, initializes important variables.
     *
     * @memberof UITab
     */
    onStart() {
        this.active = true;
        this.createElement();
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('component.enabled', { name: this.name }));
    }
    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof UITab
     */
    onStop() {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();
        this.rows.forEach(row => {
            row.element.remove();
        });
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].component(_Language__WEBPACK_IMPORTED_MODULE_9__["Language"].get('component.disabled', { name: this.name }));
    }
    /**
     * Called every second, makes sure to create components if they don't already exist.
     *
     * @memberof UITab
     */
    onUpdate() {
        // Only create components if the menu is open already.
        if (_Util__WEBPACK_IMPORTED_MODULE_2__["default"].isMenuOpen()) {
            if (!this.exists()) {
                this.updateRenderer();
                this.component.create();
                this.createRows(true);
                const self = this;
                this.button.create(() => {
                    self.button.onPressed(() => {
                        this.createRows(true);
                        self.component.openTab();
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
    }
}


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

/***/ "./src/components/styles/LookingForGroup.scss":
/*!****************************************************!*\
  !*** ./src/components/styles/LookingForGroup.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LookingForGroup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/LookingForGroup.scss");

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

/***/ "./src/components/styles/StadiaPlusDBHook.scss":
/*!*****************************************************!*\
  !*** ./src/components/styles/StadiaPlusDBHook.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./StadiaPlusDBHook.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/StadiaPlusDBHook.scss");

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
/* harmony import */ var _Browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Browser */ "./src/Browser.ts");
/* harmony import */ var _components_LookingForGroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/LookingForGroup */ "./src/components/LookingForGroup.ts");
/* harmony import */ var _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./StadiaPlusDB */ "./src/StadiaPlusDB.ts");
/* harmony import */ var _components_StadiaPlusDBHook__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/StadiaPlusDBHook */ "./src/components/StadiaPlusDBHook.ts");



























// Always load languages first
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].init();
_Language__WEBPACK_IMPORTED_MODULE_14__["Language"].load();

_Browser__WEBPACK_IMPORTED_MODULE_21__["Browser"].init();

const storageManager = new _Storage__WEBPACK_IMPORTED_MODULE_17__["StorageManager"](_appdata_json__WEBPACK_IMPORTED_MODULE_18__);
storageManager.checkCacheVersion();

const loader = new _ComponentLoader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoader"]();
const snackbar = new _ui_Snackbar__WEBPACK_IMPORTED_MODULE_9__["Snackbar"]();
const modal = new _ui_Modal__WEBPACK_IMPORTED_MODULE_19__["Modal"]();
const tab = new _components_UITab__WEBPACK_IMPORTED_MODULE_5__["UITab"]();
const webScraper = new _components_StadiaPlusDBHook__WEBPACK_IMPORTED_MODULE_24__["WebScraper"]();

const database = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new _WebDatabase__WEBPACK_IMPORTED_MODULE_11__["WebDatabase"]('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect();

loader.register(new _components_Clock__WEBPACK_IMPORTED_MODULE_4__["Clock"]());
// loader.register(new PopupFix());
loader.register(new _components_LibraryFilter__WEBPACK_IMPORTED_MODULE_10__["LibraryFilter"](snackbar, database, uuidMap, modal, webScraper));
loader.register(new _components_ForceCodec__WEBPACK_IMPORTED_MODULE_6__["ForceCodec"](tab, snackbar));
loader.register(new _components_ForceResolution__WEBPACK_IMPORTED_MODULE_7__["ForceResolution"](tab, snackbar));
loader.register(tab);
loader.register(new _components_NetworkMonitor__WEBPACK_IMPORTED_MODULE_8__["NetworkMonitor"]());
loader.register(new _components_StoreFilter__WEBPACK_IMPORTED_MODULE_12__["StoreFilter"](database, uuidMap));
loader.register(new _components_Ratings__WEBPACK_IMPORTED_MODULE_13__["Ratings"](database, uuidMap));
loader.register(new _components_AllowWindowedMode__WEBPACK_IMPORTED_MODULE_15__["AllowWindowedMode"]());
loader.register(new _components_PasteFromClipboard__WEBPACK_IMPORTED_MODULE_16__["PasteFromClipboard"]());
loader.register(new _components_LookingForGroup__WEBPACK_IMPORTED_MODULE_22__["LookingForGroup"]());
loader.register(webScraper);

_StadiaPlusDB__WEBPACK_IMPORTED_MODULE_23__["StadiaPlusDB"].connect('http://localhost:3000')
.then(connected => {
    if(!connected) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('StadiaPlusDB was unable to connect, is the server down?');
        return;
    }

    _Storage__WEBPACK_IMPORTED_MODULE_17__["LocalStorage"].AUTH_TOKEN.get(response => {
        _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_23__["StadiaPlusDB"].authToken = response[_Storage__WEBPACK_IMPORTED_MODULE_17__["LocalStorage"].AUTH_TOKEN.tag];

        _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_23__["StadiaPlusDB"].getProfile()
        .then(console.log)
        .catch(() => {
            _StadiaPlusDB__WEBPACK_IMPORTED_MODULE_23__["StadiaPlusDB"].authToken = null;
            _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].error('dsajdosajdsaiojdao')
        });
    })
});

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
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"settings-button\":\"Settings\",\"help-and-faq\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Komponente {{name}} wurde aktiviert.\",\"disabled\":\"Komponente {{name}} wurde deaktiviert.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Uhr\"},\"force-codec\":{\"name\":\"Codec erzwingen\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Auflösung erzwingen\",\"note\":\"Anmerkung: Die gewählte Auflösung ist die Maximale, die Stadia verweden wird. Falls Ihr Computer diese Auflösung nicht darstellen kann oder nicht genug Bandbreite zu Verfügung steht, wird eine kleinere Auflösung verwendet.\"},\"library-filter\":{\"name\":\"Sammlungsfilter\",\"recent\":\"Neuste\",\"alphabetical\":\"Alphabetisch\",\"random\":\"Zufällig\",\"show-hidden\":\"Zeige Versteckte\"},\"network-monitor\":{\"name\":\"Netwerkmonitor\",\"heading-visible\":\"Sichtbare Statistiken\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Einfügen aus der Zwischenablage\"},\"ratings\":{\"name\":\"Bewertungen\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Seite neu laden um die Änderung anzuzeigen.\",\"hide-game\":\"Ein Spiel wurde versteckt.\",\"show-game\":\"Ein Spiel ist nicht mehr versteckt.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Anwenden\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/en-US.json":
/*!*****************************!*\
  !*** ./src/lang/en-US.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, profile, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"settings-button\":\"Settings\",\"help-and-faq\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"user-page\":{\"title\":\"Profile\",\"motd\":\"Hello {{name}}!\",\"login-with-google\":\"Login with Google\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Component {{name}} has been enabled.\",\"disabled\":\"Component {{name}} has been disabled.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Clock\"},\"force-codec\":{\"name\":\"Force Codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Force Resolution\",\"note\":\"Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.\"},\"library-filter\":{\"name\":\"Library Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alphabetical\",\"random\":\"Random\",\"show-hidden\":\"Show Hidden\"},\"network-monitor\":{\"name\":\"Network Monitor\",\"heading-visible\":\"Visible Stats\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Paste from Clipboard\"},\"ratings\":{\"name\":\"Ratings\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Store Filter\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Reload the page to see your changes.\",\"hide-game\":\"A game has been hidden.\",\"show-game\":\"A game is no longer hidden.\"},\"profile\":{\"name\":\"Profile\"},\"automatic\":\"Automatic\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/es-ES.json":
/*!*****************************!*\
  !*** ./src/lang/es-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Developed by {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"The extension is all ready to go. Just fire up Stadia and start playing! 🎮\",\"launch-button\":\"Launch Stadia\",\"settings-button\":\"Settings\",\"help-and-faq\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Settings\",\"language\":\"Language\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"El componente {{name}}  ha sido habilitado.\",\"disabled\":\"El componente {{name}} ha sido deshabilitado.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Reloj\"},\"force-codec\":{\"name\":\"Fuerza Códec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Fuerza Resolución\",\"note\":\"Nota: el valor establecido es la resolución máxima que Stadia intentará lograr. Si su computadora no es capaz de procesar la resolución o no está disponible con la opción de uso de datos actual, no se mostrará.\"},\"library-filter\":{\"name\":\"Filtro Biblioteca\",\"recent\":\"Reciente\",\"alphabetical\":\"Alfabético\",\"random\":\"Aleatorio\",\"show-hidden\":\"Mostrar oculto\"},\"network-monitor\":{\"name\":\"Monitor de red\",\"heading-visible\":\"Estadísticas visibles\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Pegar desde el portapapeles\"},\"ratings\":{\"name\":\"Calificaciones\",\"source-name\":\"Metacrítico\"},\"store-filter\":{\"name\":\"Filtro de tienda\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Vuelva a cargar la página para ver sus cambios.\",\"hide-game\":\"Un juego ha sido escondido.\",\"show-game\":\"Un juego ya no está oculto.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/eu-ES.json":
/*!*****************************!*\
  !*** ./src/lang/eu-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Egilea: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Luzapena prest dago. Ireki Stadia eta hasi jolasten! Egurra! 🎮\",\"launch-button\":\"Ireki Stadia\",\"settings-button\":\"Ezarpenak\",\"help-and-faq\":\"Laguntza & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Ezarpenak\",\"language\":\"Hizkuntza\",\"components\":\"Osagarriak\",\"edit-components\":\"Editatu osagarriak\"},\"developer-page\":{\"title\":\"Aurreratuak\",\"clear-cache-button\":\"Cachea ezabatu\",\"storage\":\"Biltegia\"},\"component-page\":{\"title\":\"Osagarriak\"}},\"component\":{\"enabled\":\"{{name}} gaitu egin da.\",\"disabled\":\"{{name}} desgaitu egin da.\"},\"allow-windowed-mode\":{\"name\":\"Onartu lehio-modua\",\"button-label\":{\"windowed\":\"Lehioan\",\"fullscreen\":\"Pantaila osoa\"}},\"clock\":{\"name\":\"Erlojua\"},\"force-codec\":{\"name\":\"Behartu codec\",\"4k-tooltip\":\"Codec hori ezin da gaitu 4K aukerarekin\"},\"force-resolution\":{\"name\":\"Behartu bereizmena\",\"note\":\"Oharra: jarritako balioa izango da Stadia ezartzen saiatuko den handiena. Zure ordenagailuak ezin badu bereizmen hori exekutatu  edota ez badator bat Stadiaren zure data-ezarpenekin ezin izango da gauzatu..\"},\"library-filter\":{\"name\":\"Bildumaren iragazkia\",\"recent\":\"Arestikoak\",\"alphabetical\":\"Alfabetikoa\",\"random\":\"Aliritzira\",\"show-hidden\":\"Erakutsi izkutatutakoak\"},\"network-monitor\":{\"name\":\"Sare-monitorea\",\"heading-visible\":\"Ikusteko estatistikak\",\"button-label\":\"Monitorea\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Itsatsi arbelean\"},\"ratings\":{\"name\":\"Balorazioak\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Denda-iragazkia\"},\"ui-tab\":{\"name\":\"Stadia+ UI Fitxa\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Orria birkargatu ezarritako aldaketak abiarazteko.\",\"hide-game\":\"Joku bat izkutatu egin da.\",\"show-game\":\"Joku bat jada ikusgai dago.\"},\"automatic\":\"Automatikoa\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Ezarri\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/fr-FR.json":
/*!*****************************!*\
  !*** ./src/lang/fr-FR.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Développé par {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'extension est prête. Lancez Stadia et commencez à jouer! 🎮\",\"launch-button\":\"Lancer Stadia\",\"settings-button\":\"Paramètres\",\"help-and-faq\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Paramètres\",\"language\":\"Langue\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Développeur\",\"clear-cache-button\":\"Vider le cache\",\"storage\":\"Stockage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Le composant {{name}} a été activé.\",\"disabled\":\"Le composant {{name}} a été désactivé.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Horloge\"},\"force-codec\":{\"name\":\"Forcer le codec\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Forcer la résolution\",\"note\":\"Remarque: la valeur définie est la résolution maximale que Stadia tentera d'atteindre. Si votre ordinateur ne peut pas afficher cette résolution ou que l'option de consommation des données ne le permet pas, elle ne sera pas utilisée.\"},\"library-filter\":{\"name\":\"Filtre de la bibliothèque\",\"recent\":\"Récent\",\"alphabetical\":\"Alphabétique\",\"random\":\"Aléatoire\",\"show-hidden\":\"Montrer caché(s)\"},\"network-monitor\":{\"name\":\"Moniteur réseau\",\"heading-visible\":\"Statistiques visibles\",\"button-label\":\"Moniteur\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Coller depuis le presse-papiers\"},\"ratings\":{\"name\":\"Évaluations\",\"source-name\":\"Métacritique\"},\"store-filter\":{\"name\":\"Filtre du magasin\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Rechargez la page pour voir vos modifications.\",\"hide-game\":\"Un jeu a été caché.\",\"show-game\":\"Un jeu n'est plus caché.\"},\"automatic\":\"Automatique\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Appliquer\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/gl-ES.json":
/*!*****************************!*\
  !*** ./src/lang/gl-ES.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Creado por {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"A extensión está lista. Inicia Stadia e lume! 🎮\",\"launch-button\":\"Inicia Stadia\",\"settings-button\":\"Configuración\",\"help-and-faq\":\"Axuda & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Configuración\",\"language\":\"Idioma\",\"components\":\"Compoñentes\",\"edit-components\":\"Edita os compoñentes\"},\"developer-page\":{\"title\":\"Avanzadas\",\"clear-cache-button\":\"Limpa a caché\",\"storage\":\"Almacenamento\"},\"component-page\":{\"title\":\"Compoñentes\"}},\"component\":{\"enabled\":\"Activouse {{name}}.\",\"disabled\":\"Desactivouse {{name}}.\"},\"allow-windowed-mode\":{\"name\":\"Permite o modo fiestra\",\"button-label\":{\"windowed\":\"En fiestra\",\"fullscreen\":\"Pantalla completa\"}},\"clock\":{\"name\":\"Reloxo\"},\"force-codec\":{\"name\":\"Forza códec\",\"4k-tooltip\":\"O códec seleccionado non está disponíbel ao seleccionar 4K\"},\"force-resolution\":{\"name\":\"Forza resolución\",\"note\":\"Aviso: o valor indicado será o máximo que Stadia intentará acadar. Se o teu computador non é compatíbel coa resolución ou esta supera o uso de datos que teñas configurado na conta, non se activará.\"},\"library-filter\":{\"name\":\"Filtrar\",\"recent\":\"Recentes\",\"alphabetical\":\"Alfabeticamente\",\"random\":\"Aleatoriamente\",\"show-hidden\":\"Mostrar agochados\"},\"network-monitor\":{\"name\":\"Monitor de rede\",\"heading-visible\":\"Estatísticas\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Pegar do portapapeis\"},\"ratings\":{\"name\":\"Valoracións\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtrar\"},\"ui-tab\":{\"name\":\"Pestaña UI de Stadia+\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Recarga a páxina para activar os cambios.\",\"hide-game\":\"Agochóuse un xogo.\",\"show-game\":\"Un xogo deixou de estar agochado.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/it-IT.json":
/*!*****************************!*\
  !*** ./src/lang/it-IT.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Sviluppato da {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"L'estensione è pronta per l'uso. Avvia Stadia e inizia a giocare! 🎮\",\"launch-button\":\"Avvia Stadia\",\"settings-button\":\"Impostazioni\",\"help-and-faq\":\"Aiuto & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Impostazioni\",\"language\":\"Lingua\",\"components\":\"Componenti\",\"edit-components\":\"Modifica Componenti\"},\"developer-page\":{\"title\":\"Sviluppatore\",\"clear-cache-button\":\"Pulisci Cache\",\"storage\":\"Archiviazione\"},\"component-page\":{\"title\":\"Componenti\"}},\"component\":{\"enabled\":\"Il componente {{name}} è stato attivato.\",\"disabled\":\"Il componente {{name}} è stato disattivato.\"},\"allow-windowed-mode\":{\"name\":\"Consentire la Modalità Finestra\",\"button-label\":{\"windowed\":\"Finestra\",\"fullscreen\":\"Schermo Intero\"}},\"clock\":{\"name\":\"Orologio\"},\"force-codec\":{\"name\":\"Forza Codec\",\"4k-tooltip\":\"Non è possibile forzare il codec quando si è in 4K\"},\"force-resolution\":{\"name\":\"Forza Risoluzione\",\"note\":\"Nota: il valore impostato è la massima risoluzione che Stadia tenterà di raggiungere. Se il tuo computer non è in grado di renderizzare la risoluzione, o non è disponibile con l'opzione di utilizzo dei dati corrente, questa non verrà visualizzata.\"},\"library-filter\":{\"name\":\"Filtro Libreria\",\"recent\":\"Recente\",\"alphabetical\":\"Alfabetico\",\"random\":\"Casuale\",\"show-hidden\":\"Mostra Nascosti\"},\"network-monitor\":{\"name\":\"Monitor di Rete\",\"heading-visible\":\"Statistiche Visibili\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Mostra Monitor di Rete\",\"hide\":\"Nascondi Monitor di Rete\"},\"stats\":{\"time\":\"Orario\",\"resolution\":\"Risoluzione\",\"fps\":\"FPS\",\"latency\":\"Latenza\",\"codec\":\"Codec\",\"traffic\":\"Traffico\",\"current-traffic\":\"Traffico Attuale\",\"average-traffic\":\"Traffico Medio\",\"packets-lost\":\"Pacchetti Persi\",\"average-packet-loss\":\"Perdita Media di Pacchetti\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Incolla dagli Appunti\"},\"ratings\":{\"name\":\"Valutazioni\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtro Negozio\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Ricarica la pagina per vedere i cambiamenti.\",\"hide-game\":\"Un gioco è stato nascosto.\",\"show-game\":\"Un gioco non è più nascosto.\"},\"automatic\":\"Automatico\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Applica\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/nl-BE.json":
/*!*****************************!*\
  !*** ./src/lang/nl-BE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Ontwikkeld door {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"De extentie is klaar. Je kan nu Stadia openen en beginnen spelen! 🎮\",\"launch-button\":\"Stadia starten\",\"settings-button\":\"Instellingen\",\"help-and-faq\":\"Help & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Instellingen\",\"language\":\"Taal\",\"components\":\"Componenten\",\"edit-components\":\"Componenten aanpassen\"},\"developer-page\":{\"title\":\"Ontwikkelaar\",\"clear-cache-button\":\"Cache wissen\",\"storage\":\"Opslag\"},\"component-page\":{\"title\":\"Componenten\"}},\"component\":{\"enabled\":\"Component {{name}} werd ingeschakeld.\",\"disabled\":\"Component {{name}} werd uitgeschakeld.\"},\"allow-windowed-mode\":{\"name\":\"Spelen in venster toestaan\",\"button-label\":{\"windowed\":\"In venster\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Klok\"},\"force-codec\":{\"name\":\"Codec forceren\",\"4k-tooltip\":\"Codec kan niet geforceerd worden wanneer je in 4K speelt\"},\"force-resolution\":{\"name\":\"Resolutie forceren\",\"note\":\"Merk op: Deze waarde is de maximale resolutie dat Stadia zal proberen te halen. Dit zal niet werken als je computer deze resolutie niet kan afspelen of als de resolutie niet beschikbaar is voor de dataverbruik selectie.\"},\"library-filter\":{\"name\":\"Bibliotheek Filter\",\"recent\":\"Recent\",\"alphabetical\":\"Alfabetisch\",\"random\":\"Willekeurig\",\"show-hidden\":\"Verborgen weergeven\"},\"network-monitor\":{\"name\":\"Netwerk Monitor\",\"heading-visible\":\"Zichtbare Stats\",\"button-label\":\"Monitor\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"ratings\":{\"name\":\"Scores\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filter bewaren\"},\"ui-tab\":{\"name\":\"Stadia+ UI Tab\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Herlaad de pagina om je aanpassingen te zien.\",\"hide-game\":\"Een spel werd verborgen.\",\"show-game\":\"Een spel is niet langer verborgen.\"},\"automatic\":\"Automatisch\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Toepassen\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/pt-BR.json":
/*!*****************************!*\
  !*** ./src/lang/pt-BR.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Desenvolvido por {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"A extensão está nos conformes! Inicie o Stadia e comece a jogar! 🎮\",\"launch-button\":\"Abrir Stadia\",\"settings-button\":\"Opções\",\"help-and-faq\":\"Ajuda & Perguntas Frequentas\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Opções\",\"language\":\"Idioma\",\"components\":\"Componentes\",\"edit-components\":\"Editar Componentes\"},\"developer-page\":{\"title\":\"Desenvolvedor\",\"clear-cache-button\":\"Limpar Cache\",\"storage\":\"Armazenamento\"},\"component-page\":{\"title\":\"Componentes\"}},\"component\":{\"enabled\":\"O componente {{name}} foi habilitado.\",\"disabled\":\"O component {{name}} foi desabilitado.\"},\"allow-windowed-mode\":{\"name\":\"Permitir modo janela\",\"button-label\":{\"windowed\":\"Janela\",\"fullscreen\":\"Tela Cheia\"}},\"clock\":{\"name\":\"Relógio\"},\"force-codec\":{\"name\":\"Forçar Codec\",\"4k-tooltip\":\"A opção de forçar codec não está disponível ao rodar jogos em 4K\"},\"force-resolution\":{\"name\":\"Forçar Resolução\",\"note\":\"Atenção: o valor selecionado é a resolução máxima que o Stadia tentará alcançar. Se o seu computador não for capaz de renderizar a resolução ou a opção não estiver disponível no plano de consumo de dados atual, a resolução não será aplicada.\"},\"library-filter\":{\"name\":\"Biblioteca de Filtros\",\"recent\":\"Recente\",\"alphabetical\":\"Alfábetica\",\"random\":\"Aleatório\",\"show-hidden\":\"Mostrar ocultos\"},\"network-monitor\":{\"name\":\"Monitoramento de Rede\",\"heading-visible\":\"Status Visíveis\",\"button-label\":\"Monitorar\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"ratings\":{\"name\":\"Avaliação\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Filtro da Loja\"},\"ui-tab\":{\"name\":\"Aba Stadia+ UI\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Recarregue a página para aplicar as mudanças.\",\"hide-game\":\"O jogo foi oculto.\",\"show-game\":\"O jogo não se encontra mais oculto.\"},\"automatic\":\"Automático\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Aplicar\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/ru-RU.json":
/*!*****************************!*\
  !*** ./src/lang/ru-RU.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Разработчик: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Расширение готово к работе. Запускай Stadia и начинай играть! 🎮\",\"launch-button\":\"Запустить Stadia\",\"settings-button\":\"Настройки\",\"help-and-faq\":\"Справка и FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Настройки\",\"language\":\"Язык\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Элемент {{name}} включён.\",\"disabled\":\"Элемент {{name}} отключен.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Часы\"},\"force-codec\":{\"name\":\"Принудительный запуск кодека\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Принудительная смена разрешения\",\"note\":\"Примечание: установливаемое значение - это максимальное разрешение, которое Stadia может достичь. Если ваш компьютер не может отобразить разрешение или оно не доступно с текущей скоростью передачи данных, оно не будет отображаться.\"},\"library-filter\":{\"name\":\"Фильтр\",\"recent\":\"Последние\",\"alphabetical\":\"Алфавитный\",\"random\":\"Случайные\",\"show-hidden\":\"Показать скрытые\"},\"network-monitor\":{\"name\":\"Мониторинг сети\",\"heading-visible\":\"Видимая статистика\",\"button-label\":\"Монитор\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Вставить из буфера обмена\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Сохранить фильтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Перезагрузите страницу, чтобы увидеть изменения.\",\"hide-game\":\"Игра скрыта.\",\"show-game\":\"Игра теперь отображается.\"},\"automatic\":\"Автоматически\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/sv-SE.json":
/*!*****************************!*\
  !*** ./src/lang/sv-SE.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Utvecklat av {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Tillägget är redo att köra. Bara starta Stadia och börja spela! 🎮\",\"launch-button\":\"Starta Stadia\",\"settings-button\":\"Inställningar\",\"help-and-faq\":\"Hjälp & FAQ\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Inställningar\",\"language\":\"Språk\",\"components\":\"Komponenter\",\"edit-components\":\"Redigera Komponenter\"},\"developer-page\":{\"title\":\"Utvecklare\",\"clear-cache-button\":\"Rensa Cache\",\"storage\":\"Lagring\"},\"component-page\":{\"title\":\"Komponenter\"}},\"component\":{\"enabled\":\"Komponenten {{name}} är nu aktiverad.\",\"disabled\":\"Komponenten {{name}} är inte längre aktiverad.\"},\"allow-windowed-mode\":{\"name\":\"Tillåt Fönsterläge\",\"button-label\":{\"windowed\":\"Fönster\",\"fullscreen\":\"Fullskärm\"}},\"clock\":{\"name\":\"Klocka\"},\"force-codec\":{\"name\":\"Påtvigad Codec\",\"4k-tooltip\":\"Påtvingad Codec är inte tillgängligt när du spelar i 4K\"},\"force-resolution\":{\"name\":\"Påtvingad Upplösning\",\"note\":\"Observera: det satta värdet är den maximala upplösningen Stadia kommer försöka uppnå. Om din dator inte klarar av att rendera upplösningen eller den inte är tillgänglig med dina nuvarande datainställningar kommer inte den påtvingade upplösningen visas.\"},\"library-filter\":{\"name\":\"Biblioteksfilter\",\"recent\":\"Senaste\",\"alphabetical\":\"Alfabetiskt\",\"random\":\"Slumpmässigt\",\"show-hidden\":\"Visa Gömda\"},\"network-monitor\":{\"name\":\"Nätverksövervakning\",\"heading-visible\":\"Synlig Statistik\",\"button-label\":\"Övervakning\",\"toggle-button\":{\"show\":\"Visa Nätverksövervakning\",\"hide\":\"Göm Nätverksövervakning\"},\"stats\":{\"time\":\"Tid\",\"resolution\":\"Upplösning\",\"fps\":\"FPS\",\"latency\":\"Latens\",\"codec\":\"Codec\",\"traffic\":\"Nätverkstrafik\",\"current-traffic\":\"Nuvarande Trafik\",\"average-traffic\":\"Genomsnittlig Trafik\",\"packets-lost\":\"Paket Tappade\",\"average-packet-loss\":\"Pakettappning\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Klistra in från Urklipp\"},\"ratings\":{\"name\":\"Recensioner\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Butiksfiltrering\"},\"ui-tab\":{\"name\":\"Stadia+ Gränssnittstabb\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Uppdatera sidan för att se dina ändringar.\",\"hide-game\":\"Ett spel har gömts.\",\"show-game\":\"Ett spel är inte längre gömt.\"},\"automatic\":\"Automatisk\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Tillämpa\",\"loading\":\"Laddar...\",\"experimental\":\"Experimentellt\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

/***/ }),

/***/ "./src/lang/uk-UA.json":
/*!*****************************!*\
  !*** ./src/lang/uk-UA.json ***!
  \*****************************/
/*! exports provided: popup, component, allow-windowed-mode, clock, force-codec, force-resolution, library-filter, network-monitor, paste-from-clipboard, ratings, store-filter, ui-tab, popup-fix, looking-for-group, stadia-plus-db, snackbar, automatic, vp9, h264, apply, loading, experimental, 4k, 1440p, 1080p, 720p, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"popup\":{\"footer\":{\"credit\":\"Розробник: {{name}}\"},\"main-page\":{\"title\":\"Stadia+\",\"ready-text\":\"Розширення готове до роботи. Просто запустіть Stadia і почніть грати! 🎮\",\"launch-button\":\"Запустити Stadia\",\"settings-button\":\"Налаштування\",\"help-and-faq\":\"Довідка та поширені запитання\",\"discord\":\"Discord\",\"reddit\":\"Reddit\",\"github\":\"Github\"},\"settings-page\":{\"title\":\"Налаштування\",\"language\":\"Мова\",\"components\":\"Components\",\"edit-components\":\"Edit Components\"},\"developer-page\":{\"title\":\"Developer\",\"clear-cache-button\":\"Clear Cache\",\"storage\":\"Storage\"},\"component-page\":{\"title\":\"Components\"}},\"component\":{\"enabled\":\"Компонент {{name}} увімкнено.\",\"disabled\":\"Компонент {{name}} вимкнено.\"},\"allow-windowed-mode\":{\"name\":\"Allow Windowed Mode\",\"button-label\":{\"windowed\":\"Windowed\",\"fullscreen\":\"Fullscreen\"}},\"clock\":{\"name\":\"Годинник\"},\"force-codec\":{\"name\":\"Примусити кодек\",\"4k-tooltip\":\"Forced Codec is not available when running in 4K\"},\"force-resolution\":{\"name\":\"Примусити розширення\",\"note\":\"Примітка: встановлене значення - це максимальна роздільна здатність, яку Stadia намагатиметься досягти. Якщо ваш комп'ютер не здатний рендерувати роздільну здатність або він недоступний із поточною опцією використання даних, він не відображатиметься.\"},\"library-filter\":{\"name\":\"Фільтрувати\",\"recent\":\"Останні\",\"alphabetical\":\"Алфавітний\",\"random\":\"Випадкові\",\"show-hidden\":\"Показати приховані\"},\"network-monitor\":{\"name\":\"Моніторинг мережі\",\"heading-visible\":\"Видима статистика\",\"button-label\":\"Монітор\",\"toggle-button\":{\"show\":\"Show Network Monitor\",\"hide\":\"Hide Network Monitor\"},\"stats\":{\"time\":\"Time\",\"resolution\":\"Resolution\",\"fps\":\"FPS\",\"latency\":\"Latency\",\"codec\":\"Codec\",\"traffic\":\"Traffic\",\"current-traffic\":\"Current Traffic\",\"average-traffic\":\"Average Traffic\",\"packets-lost\":\"Packets Lost\",\"average-packet-loss\":\"Average Packet Loss\",\"jitter-buffer\":\"Jitter Buffer\"}},\"paste-from-clipboard\":{\"name\":\"Вставити з буфера обміну\"},\"ratings\":{\"name\":\"Рейтинги\",\"source-name\":\"Metacritic\"},\"store-filter\":{\"name\":\"Зберегти фільтр\"},\"ui-tab\":{\"name\":\"Stadia+ UI Вкладка\",\"button-label\":\"Stadia+\"},\"popup-fix\":{\"name\":\"Popup Fix\"},\"looking-for-group\":{\"name\":\"Looking For Group\",\"toggle-button\":{\"start\":\"Look for a Group\",\"stop\":\"Stop Looking for Groups\"}},\"stadia-plus-db\":{\"name\":\"Stadia+ DB\"},\"snackbar\":{\"reload-to-update\":\"Перезавантажте сторінку, щоб побачити зміни.\",\"hide-game\":\"Гра прихована.\",\"show-game\":\"Гра більше не є прихованою.\"},\"automatic\":\"Автоматично\",\"vp9\":\"VP9\",\"h264\":\"H264\",\"apply\":\"Apply\",\"loading\":\"Loading...\",\"experimental\":\"Experimental\",\"4k\":\"4K\",\"1440p\":\"1440p\",\"1080p\":\"1080p\",\"720p\":\"720p\"}");

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

class Checkbox {
    constructor(label) {
        this.shape = CheckboxShape.DEFAULT;
        this.style = CheckboxStyle.DEFAULT;
        this.border = true;
        this.label = label;
    }
    setShape(shape) {
        this.shape = shape;
        return this;
    }
    setStyle(style) {
        this.style = style;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    setAnimation(animation) {
        this.animation = animation;
        return this;
    }
    setBorder(border) {
        this.border = border;
        return this;
    }
    setIcon(icon) {
        this.icon = icon;
        return this;
    }
    setDisabled(disabled) {
        this.disabled = disabled;
        return this;
    }
    setBigger(bigger) {
        this.bigger = bigger;
        return this;
    }
    build() {
        // Create element
        const element = document.createElement('div');
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
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.disabled = this.disabled;
        element.appendChild(checkbox);
        // Add state div
        const state = document.createElement('div');
        state.classList.add('state');
        // If colored, add color
        if (this.color) {
            state.classList.add(this.color);
        }
        // If has icon, add icon
        if (this.icon) {
            element.classList.add('p-icon');
            const icon = document.createElement('span');
            icon.classList.add('material-icons');
            icon.innerHTML = this.icon;
            state.appendChild(icon);
        }
        // Add label
        const label = document.createElement('label');
        label.innerHTML = this.label;
        state.appendChild(label);
        element.appendChild(state);
        return { pretty: element, checkbox };
    }
}
class CheckboxShape {
}
CheckboxShape.DEFAULT = null;
CheckboxShape.CURVED = 'p-curve';
CheckboxShape.ROUND = 'p-round';
class CheckboxStyle {
}
CheckboxStyle.DEFAULT = null;
CheckboxStyle.FILL = 'p-fill';
CheckboxStyle.THICK = 'p-thick';
class CheckboxColor {
}
CheckboxColor.BLUE = 'p-primary';
CheckboxColor.GREEN = 'p-success';
CheckboxColor.YELLOW = 'p-warning';
CheckboxColor.CYAN = 'p-info';
CheckboxColor.RED = 'p-danger';
class CheckboxAnimation {
}
CheckboxAnimation.SMOOTH = 'p-smooth';
CheckboxAnimation.JELLY = 'p-jelly';
CheckboxAnimation.TADA = 'p-tada';
CheckboxAnimation.ROTATE = 'p-rotate';
CheckboxAnimation.PULSE = 'p-pulse';


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

class Modal {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_modal');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('stadiaplus_modal-wrapper');
        this.content = document.createElement('div');
        this.content.classList.add('stadiaplus_modal-content');
        this.closeButton = document.createElement('i');
        this.closeButton.innerHTML = 'close';
        this.closeButton.classList.add('material-icons', 'stadiaplus_modal-close');
        const self = this;
        this.closeButton.addEventListener('click', () => {
            self.element.classList.remove('active');
        });
    }
    create() {
        document.body.appendChild(this.element);
        this.element.appendChild(this.wrapper);
        this.wrapper.appendChild(this.closeButton);
        this.wrapper.appendChild(this.content);
        this.element.addEventListener('click', () => this.close());
        this.wrapper.addEventListener('click', event => event.stopPropagation());
    }
    activate(content) {
        this.content.innerHTML = content;
        this.element.classList.add('active');
    }
    close() {
        this.element.classList.remove('active');
    }
}


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



class Select {
    constructor(element, options) {
        this.element = element;
        options.style = options.style !== undefined ? options.style : SelectStyle.DARK;
        options.onChange = options.onChange !== undefined ? options.onChange : () => { };
        options.beforeChange = options.beforeChange !== undefined ? options.beforeChange : () => { };
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
    disable() {
        this.element.classList.add('disabled');
    }
    enable() {
        this.element.classList.remove('disabled');
    }
    get() {
        return this.slimselect.selected();
    }
    set(...items) {
        if (items.length === 1) {
            // Just in case slimselect.set is faster
            this.slimselect.set(items[0]);
        }
        else {
            this.slimselect.setData(items);
        }
    }
    search(query) {
        return this.slimselect.search(query);
    }
    destroy() {
        if (this.slimselect !== undefined) {
            this.slimselect.destroy();
        }
        this.element.classList.remove('stadiaplus_dropdown');
        this.element = null;
    }
}
class SelectStyle {
}
SelectStyle.SLIMSELECT = null;
SelectStyle.SLIMSELECT_LARGE = 'style-slimselect-large';
SelectStyle.LIGHT = 'style-light';
SelectStyle.DARK = 'style-dark';


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

class Snackbar {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_snackbar');
        this.label = document.createElement('div');
        this.label.classList.add('stadiaplus_snackbar-label');
        this.closeButton = document.createElement('i');
        this.closeButton.innerHTML = 'close';
        this.closeButton.classList.add('material-icons', 'stadiaplus_snackbar-close');
        const self = this;
        this.closeButton.addEventListener('click', () => {
            self.element.classList.remove('active');
        });
    }
    create() {
        document.body.appendChild(this.element);
        this.element.appendChild(this.label);
        this.element.appendChild(this.closeButton);
    }
    activate(label) {
        this.label.innerHTML = label;
        this.element.classList.add('active');
        const self = this;
        window.setTimeout(() => {
            self.element.classList.remove('active');
        }, 5000);
    }
}


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

class UIButton {
    constructor(icon, title, id) {
        this.id = id;
        this.html = `
            <div class="Pyflbb" jsname="rZHESd">
                <div class="KEaHo">
                    <span class="X5peoe" jsname="pYFhU">
                        <img class="xduoyf uibutton-icon" src="${icon}">
                    </span>
                    <span class="caSJV uibutton-title">${title}</span>
                </div>
            </div>
        `;
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
    create(callback) {
        for (const container of UIButton.buttonContainers) {
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
    }
    setIcon(icon) {
        this.element.querySelector('.uibutton-icon').setAttribute('src', icon);
    }
    setTitle(title) {
        this.element.querySelector('.uibutton-title').innerHTML = title;
    }
    update() {
        if (!this.exists()) {
            this.create();
        }
    }
    exists() {
        return document.getElementById(this.id) !== null;
    }
    destroy() {
        this.element.remove();
        this.container.removeButton(this);
    }
    onPressed(func) {
        this.button.addEventListener('click', func);
        this.button.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                this.button.click();
            }
        });
    }
}
UIButton.buttonContainers = [];


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
class UIButtonContainer {
    constructor() {
        this.buttons = [];
        this.id = 'button-container-' + Math.floor(Math.random() * 9999);
        this.container = document.querySelector('.TZ0BN');
        this.wrapper = document.createElement('div');
        this.wrapper.id = this.id;
        this.wrapper.classList.add('ZgUMo', 'stadiaplus_ui-btn-wrapper');
        this.element = document.createElement('div');
        this.element.classList.add('E0Zk9b', 'stadiaplus_ui-btn-container');
    }
    exists() {
        return document.getElementById(this.id) !== null;
    }
    create(callback) {
        if (!this.exists()) {
            this.container = document.querySelector('.TZ0BN'); // Requery in case the container was deleted
            this.wrapper.appendChild(this.element);
            this.container.appendChild(this.wrapper);
        }
        this.buttons.forEach(button => {
            if (!button.exists()) {
                this.element.appendChild(button.element);
            }
        });
        if (callback)
            callback();
    }
    addButton(button) {
        if (this.buttons.indexOf(button) === -1) {
            this.buttons.push(button);
        }
    }
    removeButton(button) {
        this.buttons = this.buttons.filter(b => b.id !== button.id);
    }
}


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

class UIComponent {
    constructor(title, content, id) {
        this.openListeners = [];
        this.closeListeners = [];
        this.id = id;
        this.html = `
            <header>
                <div class="rkvT7c" jsaction="click:a4fUwd" jsname="GeGHKb">
                    <span class="DPvwYc tRqc3c" aria-hidden="true">arrow_back</span>
                </div>
                <span class="Q3wyyb">
                    <div class="CwCxFd">${title}</div>
                </span>
            </header>

            <div class="content">
                ${content}
            </div>
        `;
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.classList.add('stadiaplus_ui-component');
    }
    create() {
        const container = document.querySelector('.hxhAyf');
        if (!container)
            return;
        this.element.innerHTML = this.html;
        container.appendChild(this.element);
        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);
        const backBtn = document.querySelector(`#${this.id} > header > .rkvT7c`);
        const self = this;
        backBtn.addEventListener('click', () => {
            self.closeTab();
        });
    }
    openTab() {
        this.element.classList.add('open');
        this.open = true;
        this.openListeners.forEach(c => c());
    }
    closeTab() {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].info('Closing', this.id);
        this.element.classList.remove('open');
        this.open = false;
        this.closeListeners.forEach(c => c());
    }
    onOpen(callback) {
        if (callback)
            this.openListeners.push(callback);
    }
    onClose(callback) {
        if (callback)
            this.closeListeners.push(callback);
    }
}


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
class UIRow {
    constructor(title, content, id, options) {
        this.title = title;
        this.content = content;
        this.options = options;
        this.id = id;
        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.innerHTML = `
            <p>${this.title}</p>
            <div>
                ${this.content}
            </div>
        `;
        this.element.classList.add('stadiaplus_ui-row');
    }
    exists() {
        return document.getElementById(this.id);
    }
    destroy() {
        this.options.onDestroy(this);
        this.element.remove();
    }
    reload() {
        this.options.onReload(this);
    }
    append(component, useHr = false) {
        if (useHr) {
            component.element.appendChild(document.createElement('hr'));
        }
        component.element.appendChild(this.element);
        this.options.onCreate(this);
    }
}
class UIRowOptions {
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Nsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0ZvcmNlQ29kZWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xpYnJhcnlGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTG9va2luZ0Zvckdyb3VwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL05ldHdvcmtNb25pdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1JhdGluZ3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3RhZGlhUGx1c0RCSG9vay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9VSVRhYi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HcmlkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9CdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL01vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL1NuYWNrYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3M/MGY1ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Nb25pdG9yUnVubmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvV2ViU2NyYXBlclJ1bm5hYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmNzcz9iZTRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbGltLXNlbGVjdC9kaXN0L3NsaW1zZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9Ccm93c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGFuZ3VhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hvcnRjdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YWRpYVBsdXNEQi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViRGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsb3dXaW5kb3dlZE1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9yY2VDb2RlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JjZVJlc29sdXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb29raW5nRm9yR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmV0d29ya01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFzdGVGcm9tQ2xpcGJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JhdGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhZGlhUGx1c0RCSG9vay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdG9yZUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSVRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvQ2xvY2suc2Nzcz84YTIzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JjZUNvZGVjLnNjc3M/Mzg3MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9yY2VSZXNvbHV0aW9uLnNjc3M/NWI0NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvTGlicmFyeUZpbHRlci5zY3NzPzY5ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0xvb2tpbmdGb3JHcm91cC5zY3NzPzk2YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL05ldHdvcmtNb25pdG9yLnNjc3M/NjdjNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvUmF0aW5ncy5zY3NzPzkyZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1N0YWRpYVBsdXNEQkhvb2suc2Nzcz9iMzg4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdG9yZUZpbHRlci5zY3NzPzZjMjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1VJVGFiLnNjc3M/OGI0OSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9HbG9iYWwuc2Nzcz8wOWI2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvR3JpZC5zY3NzPzJmZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3M/OWFmOSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL01vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9TZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NuYWNrYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvVUlCdXR0b25Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSVJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3R5bGVzL0J1dHRvbi5zY3NzPzk5MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9Nb2RhbC5zY3NzP2Q5MzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3N0eWxlcy9TZWxlY3Quc2Nzcz83ZTdhIiwid2VicGFjazovLy8uL3NyYy91aS9zdHlsZXMvU25hY2tiYXIuc2Nzcz85YjczIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Rvd25sb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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QU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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cEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFD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UUFBUTs7QUFFM0Isd0NBQXdDLGFBQWE7QUFDckQ7O0FBRUE7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUIsdUNBQXVDLEVBQUUsT0FBTztBQUNwSCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsb0lBQW9JLHFCQUFxQjtBQUN6SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCLEVBQUU7O0FBRXBFLFNBQVM7Ozs7O0FBS1QsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sQ0FBQzs7QUFFYyx5RUFBVSxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByZXR0eSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXR0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eSBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbWluLXdpZHRoOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByZXR0eSAuc3RhdGUgbGFiZWwge1xcbiAgcG9zaXRpb246IGluaXRpYWw7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xcbiAgbWluLXdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSwgLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNiZGMzYzc7XFxufVxcbi5wcmV0dHkgLnN0YXRlLnAtaXMtaG92ZXIsIC5wcmV0dHkgLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHRhZGEge1xcbiAgMCUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDcpO1xcbiAgfVxcbiAgMzglIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1NSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuICA3MiUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDgxJSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNCk7XFxuICB9XFxuICA4OSUge1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDk1JSB7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamVsbHkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44NSwgMS4xNSwgMSk7XFxuICB9XFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2JkYzNjNztcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxLjVlbSByZ2JhKDE4OSwgMTk1LCAxOTksIDApO1xcbiAgfVxcbn1cXG4ucHJldHR5LnAtZGVmYXVsdC5wLWZpbGwgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5wcmV0dHkucC1kZWZhdWx0IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxufVxcbi5wcmV0dHkucC1kZWZhdWx0IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogY2FsYygxZW0gLyA3KTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucHJldHR5LnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuaWNvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YTY1NmI7XFxufVxcblxcbi5wcmV0dHkucC1zdmcgLnN0YXRlIC5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogY2FsYygxZW0gKyAycHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDFlbSArIDJweCk7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN2ZyAuc3RhdGUgc3ZnIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLnByZXR0eS5wLXN2ZyBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIC5zdmcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLWltYWdlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBjYWxjKDFlbSArIDJweCk7XFxuICBoZWlnaHQ6IGNhbGMoMWVtICsgMnB4KTtcXG4gIHRvcDogMDtcXG4gIHRvcDogY2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtaW1hZ2UgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dCB7XFxuICBtaW4td2lkdGg6IDJlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gIHdpZHRoOiAyZW07XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGhlaWdodDogY2FsYygxZW0gKyAycHgpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgdG9wOiBjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAxNiUpO1xcbiAgei1pbmRleDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsIHtcXG4gIHRleHQtaW5kZW50OiAyLjVlbTtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZTpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2NTZiO1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NTZiICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAxZW07XFxufVxcblxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIC5zdGF0ZTpiZWZvcmUge1xcbiAgaGVpZ2h0OiAwLjFlbTtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzcgIWltcG9ydGFudDtcXG4gIHRvcDogY2FsYyg1MCUgLSAwLjFlbSk7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogIzVhNjU2YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTY1NmIgIWltcG9ydGFudDtcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZTpub3QoLnAtaXMtaG92ZXIpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXIgfiAuc3RhdGUucC1pcy1ob3ZlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3ZlciB+IC5zdGF0ZS5wLWlzLWhvdmVyIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJldHR5LnAtaGFzLWZvY3VzIGlucHV0OmZvY3VzIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI2JkYzNjNztcXG59XFxuXFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGU6bm90KC5wLWlzLWluZGV0ZXJtaW5hdGUpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIH4gLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgfiAuc3RhdGUucC1pcy1pbmRldGVybWluYXRlIC5pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmYsXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSBpbWcge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7XFxufVxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb2ZmIC5pY29uIHtcXG4gIGNvbG9yOiAjYmRjM2M3O1xcbn1cXG4ucHJldHR5LnAtdG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1vbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuLnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtb2ZmIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldHR5LnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1wbGFpbi5wLXRvZ2dsZSAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbi5wcmV0dHkucC1wbGFpbi5wLXBsYWluIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuLnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxufVxcblxcbi5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YmVmb3JlLCAucHJldHR5LnAtY3VydmUgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLXNtb290aCBsYWJlbDphZnRlcixcXG4ucHJldHR5LnAtc21vb3RoIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggLnN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkICsgLnN0YXRlIC5pY29uLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcge1xcbiAgYW5pbWF0aW9uOiB6b29tIDAuMnMgZWFzZTtcXG59XFxuLnByZXR0eS5wLXNtb290aC5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDphZnRlciB7XFxuICBhbmltYXRpb246IHpvb20gMC4ycyBlYXNlO1xcbn1cXG4ucHJldHR5LnAtc21vb3RoLnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBpbWcsXFxuLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogdGFkYSAwLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAxIGFsdGVybmF0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSAuaWNvbixcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgLnN2ZyxcXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCArIC5zdGF0ZSBsYWJlbDpiZWZvcmUsXFxuLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkICsgLnN0YXRlIGxhYmVsOmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogamVsbHkgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgKyAuc3RhdGUgbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgLmljb24sXFxuLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSAuc3ZnLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgaW1nLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUgbGFiZWw6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJldHR5LnAtcHVsc2U6bm90KC5wLXN3aXRjaCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZSBsYWJlbDpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcztcXG59XFxuXFxuLnByZXR0eSBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmV0dHkgaW5wdXRbZGlzYWJsZWRdIH4gKiB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5wcmV0dHkucC1sb2NrZWQgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtcHJpbWFyeSAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIHN2ZyB7XFxuICBjb2xvcjogIzQyOGJjYTtcXG4gIHN0cm9rZTogIzQyOGJjYTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1wcmltYXJ5OmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyNDU2ODI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1NjgyICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtaW5mbyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIHN2ZyB7XFxuICBjb2xvcjogIzViYzBkZTtcXG4gIHN0cm9rZTogIzViYzBkZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1YmMwZGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1pbmZvOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMyMzkwYjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5MGIwICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtc3VjY2VzcyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIHN2ZyB7XFxuICBjb2xvcjogIzVjYjg1YztcXG4gIHN0cm9rZTogIzVjYjg1YztcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YyAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1zdWNjZXNzOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICMzNTc5MzU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3OTM1ICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgbGFiZWw6YWZ0ZXIsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtd2FybmluZyAuc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDpiZWZvcmUsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gc3ZnLCAucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbixcXG4ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIHN2ZyB7XFxuICBjb2xvcjogI2YwYWQ0ZTtcXG4gIHN0cm9rZTogI2YwYWQ0ZTtcXG59XFxuLnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNmMGFkNGU7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC13YXJuaW5nOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNjNzdjMTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc3YzExICFpbXBvcnRhbnQ7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlciBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXIgLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyIC5zdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5pY29uLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIC5zdmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBzdHJva2U6ICNmZmY7XFxufVxcbi5wcmV0dHkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciwgLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eSBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZyxcXG4ucHJldHR5IGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXItbyBzdmcsIC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sXFxuLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLFxcbi5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gc3ZnIHtcXG4gIGNvbG9yOiAjZDk1MzRmO1xcbiAgc3Ryb2tlOiAjZDk1MzRmO1xcbn1cXG4ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2VkIH4gLnN0YXRlLnAtZGFuZ2VyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XFxufVxcbi5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWQgfiAuc3RhdGUucC1kYW5nZXI6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZCB+IC5zdGF0ZS5wLWRhbmdlcjpiZWZvcmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTAyNjIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwMjYyMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmJlZm9yZSxcXG4ucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkucC1iaWdnZXIgLmljb24sXFxuLnByZXR0eS5wLWJpZ2dlciAuc3ZnLFxcbi5wcmV0dHkucC1iaWdnZXIgLmltZyB7XFxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XFxuICB0b3A6IGNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDM1JSkgIWltcG9ydGFudDtcXG59XFxuLnByZXR0eS5wLWJpZ2dlciBsYWJlbCB7XFxuICB0ZXh0LWluZGVudDogMS43ZW07XFxufVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAucHJldHR5IC5zdGF0ZTpiZWZvcmUsXFxuLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLFxcbi5wcmV0dHkgLnN0YXRlIGxhYmVsOmFmdGVyLFxcbi5wcmV0dHkgLnN0YXRlIC5pY29uIHtcXG4gICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Nsb2NrIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2J1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc3RhZGlhcGx1c19idXR0b24tc21hbGwge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKSwgb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjI1LCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3Npbmcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyLmNsb3NlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDQ7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNhM2M7XFxuICBtYXJnaW4tbGVmdDogLTY0cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yM3MgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMTUsIDEpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXIgLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnMgRXh0ZW5kZWRcXFwiO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgei1pbmRleDogNDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItd3JhcHBlcjpob3ZlciAuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24td3JhcHBlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci13cmFwcGVyOmhvdmVyIC5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbi13cmFwcGVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMyMzY7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zMiksIDAgMC4wNjI1cmVtIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2Ryb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItY2hlY2tib3gge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiYXJyb3dfZHJvcF9kb3duXFxcIjtcXG59XFxuLnN0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1iYXIgLnN0YWRpYXBsdXNfZmlsdGVyYmFyLWRpcmVjdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcbi5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyIC5zdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb24uYXNjZW5kaW5nIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4uc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWJhciAuc3RhZGlhcGx1c19maWx0ZXJiYXItZGlyZWN0aW9uLmRlc2NlbmRpbmcge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19sb29raW5nZm9yZ3JvdXAtZ3JvdXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zdGFkaWFwbHVzX2xvb2tpbmdmb3Jncm91cC1ncm91cHMudmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnN0YWRpYXBsdXNfbG9va2luZ2Zvcmdyb3VwLWdyb3VwcyA+IGg2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnN0YWRpYXBsdXNfbG9va2luZ2Zvcmdyb3VwLWdyb3VwcyAucmVmcmVzaCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3RhZGlhcGx1c19sb29raW5nZm9yZ3JvdXAtZ3JvdXBzIC5ncm91cC1saXN0IHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxNTA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciAqIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcbi5zdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLmVkaXRhYmxlIHtcXG4gIHotaW5kZXg6IDMwMDtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItdGFiIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxcmVtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfbmV0d29ya21vbml0b3ItY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19yYXRpbmcge1xcbiAgbWFyZ2luLXRvcDogLTFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc3RhZGlhcGx1c19yYXRpbmc6aG92ZXIgLnN0YWRpYXBsdXNfcmF0aW5nLXRvb2x0aXAge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxKTtcXG59XFxuLnN0YWRpYXBsdXNfcmF0aW5nIC5zdGFkaWFwbHVzX3JhdGluZy10b29sdGlwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29vZ2xlIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuOSk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQgMC4zcztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c193ZWItc2NyYXBlci1wb3B1cCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBtaWRkbGU7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyNDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zMiksIDAgMC4wNjI1cmVtIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcbi5zdGFkaWFwbHVzX3dlYi1zY3JhcGVyLXBvcHVwIC5zdGFkaWFwbHVzX3dlYi1zY3JhcGVyLWljb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29ucyBFeHRlbmRlZFxcXCI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uc3RhZGlhcGx1c193ZWItc2NyYXBlci1wb3B1cCAuc3RhZGlhcGx1c193ZWItc2NyYXBlci1pY29uLmxvYWRpbmcge1xcbiAgYW5pbWF0aW9uOiBzcGlubmluZyAxcyBsaW5lYXIgMHMgaW5maW5pdGU7XFxufVxcbkBrZXlmcmFtZXMgc3Bpbm5pbmcge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uc3RhZGlhcGx1c193ZWItc2NyYXBlci1wb3B1cCAuc3RhZGlhcGx1c193ZWItc2NyYXBlci10aXRsZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfd2ViLXNjcmFwZXItcG9wdXAgLnN0YWRpYXBsdXNfd2ViLXNjcmFwZXItYm9keSB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zMiksIDAgMC4wNjI1cmVtIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5iYXIge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuYmFyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcInNlYXJjaFxcXCI7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnMgRXh0ZW5kZWRcXFwiO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuYmFyIGlucHV0IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBmb250LWZhbWlseTogXFxcIkdvb2dsZSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG91dGxpbmU6ICNmZjc3M2QgM3B4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMC41cmVtIDAuNXJlbTtcXG59XFxuLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXIgLmdhbWVzIC5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyLWdhbWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogOTBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZS5zaG93biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3RhZGlhcGx1c19zdG9yZWZpbHRlciAuZ2FtZXMgLnN0YWRpYXBsdXNfc3RvcmVmaWx0ZXItZ2FtZSBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTQwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxufVxcbi5zdGFkaWFwbHVzX3N0b3JlZmlsdGVyIC5nYW1lcyAuc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lIC5kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbXV0ZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQge1xcbiAgLyogXFxuICAgKiAgIE11c3QgcmVtb3ZlIDIgeCBwYWRkaW5nIG9yIGl0IGRvZXNudCB3b3JrIFxcbiAgICovXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZTMwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG4uc3RhZGlhcGx1c191aS1jb21wb25lbnQub3BlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWNvbXBvbmVudCBoZWFkZXIgLkN3Q3hGZCB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcbi5zdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXIuRTBaazliIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnN0YWRpYXBsdXNfdWktYnV0dG9uIHtcXG4gIHdpZHRoOiAxMzAuNjc3cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5HcUxpNGQge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSkgY29udHJhc3QoMS4xKTtcXG59XFxuXFxuaHRtbCBib2R5IC5kU0d2emYge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbmh0bWwgYm9keSAuQ1ZWWGZjIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogaW5pdGlhbDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDg0ZDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MjU3ICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfcm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX211dGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhZGlhcGx1c19idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfYnV0dG9uLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDM0U0MztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc3RhZGlhcGx1c19tb2RhbCAuc3RhZGlhcGx1c19tb2RhbC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1heC13aWR0aDogMzMuMzMzJTtcXG4gIG1pbi13aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6ICMzMDMyMzY7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbn1cXG4uc3RhZGlhcGx1c19tb2RhbCAuc3RhZGlhcGx1c19tb2RhbC1jbG9zZSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5zdGFkaWFwbHVzX21vZGFsIC5zdGFkaWFwbHVzX21vZGFsLWNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zdGFkaWFwbHVzX21vZGFsLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XFxufVxcbi5zdGFkaWFwbHVzX21vZGFsLmFjdGl2ZSAuc3RhZGlhcGx1c19tb2RhbC13cmFwcGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGFkaWFwbHVzX2Ryb3Bkb3duLmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjM0MzRTQzO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCB7XFxuICBib3JkZXItY29sb3I6ICMzQzNFNDM7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzNFNDM7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0MzRTQzO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCxcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICM5Mzk1OUYgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAucGxhY2Vob2xkZXIsXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXBsdXMgc3BhbixcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1kYXJrLnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuLFxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWRhcmsuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1wbHVzIHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtZGFyay5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTM5NTlGO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCxcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1saWdodC5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAjY2NjY2NjIDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB3aWR0aDogMTgwcHg7XFxufVxcbi5zdGFkaWFwbHVzX2Ryb3Bkb3duLnN0eWxlLWxpZ2h0LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1wbHVzIHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1wbHVzIHNwYW4sXFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtbGlnaHQuc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjY2NjYztcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtc2xpbXNlbGVjdC1sYXJnZS5zcy1tYWluIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLnN0YWRpYXBsdXNfZHJvcGRvd24uc3R5bGUtc2xpbXNlbGVjdC1sYXJnZS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCxcXG4uc3RhZGlhcGx1c19kcm9wZG93bi5zdHlsZS1zbGltc2VsZWN0LWxhcmdlLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YWRpYXBsdXNfc25hY2tiYXIge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgei1pbmRleDogOTk5O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA4cHg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKDE2cHgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSwgb3BhY2l0eSAwLjE1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXG59XFxuLnN0YWRpYXBsdXNfc25hY2tiYXIuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN0YWRpYXBsdXNfc25hY2tiYXItbGFiZWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnN0YWRpYXBsdXNfc25hY2tiYXItY2xvc2Uge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5zdGFkaWFwbHVzX3NuYWNrYmFyLWNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3MtbWFpbntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt1c2VyLXNlbGVjdDpub25lO2NvbG9yOiM2NjY7d2lkdGg6MTAwJX0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVke2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjt3aWR0aDoxMDAlO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQuc3MtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZGNkZWUyO2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkLnNzLW9wZW4tYWJvdmV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZC5zcy1vcGVuLWJlbG93e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnBsYWNlaG9sZGVye2ZsZXg6MSAxIDEwMCU7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOmNhbGMoMTAwJSAtIDMwcHgpO2xpbmUtaGVpZ2h0OjFlbTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIsLnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgKntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5wbGFjZWhvbGRlciAqe3dpZHRoOmF1dG99LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAucGxhY2Vob2xkZXIgLnNzLWRpc2FibGVke2NvbG9yOiNkZWRlZGV9LnNzLW1haW4gLnNzLXNpbmdsZS1zZWxlY3RlZCAuc3MtZGVzZWxlY3R7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7ZmxleDowIDEgYXV0bzttYXJnaW46MCA2cHg7Zm9udC13ZWlnaHQ6NzAwfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWRlc2VsZWN0LnNzLWhpZGV7ZGlzcGxheTpub25lfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2ZsZXg6MCAxIGF1dG87bWFyZ2luOjAgNnB4fS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW57Ym9yZGVyOnNvbGlkICM2NjY7Ym9yZGVyLXdpZHRoOjAgMnB4IDJweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6M3B4O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxtYXJnaW4gLjJzfS5zcy1tYWluIC5zcy1zaW5nbGUtc2VsZWN0ZWQgLnNzLWFycm93IHNwYW4uYXJyb3ctdXB7dHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKTttYXJnaW46M3B4IDAgMH0uc3MtbWFpbiAuc3Mtc2luZ2xlLXNlbGVjdGVkIC5zcy1hcnJvdyBzcGFuLmFycm93LWRvd257dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bWFyZ2luOi0zcHggMCAwfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2N1cnNvcjpwb2ludGVyO21pbi1oZWlnaHQ6MzBweDt3aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDAgM3B4O2JvcmRlcjoxcHggc29saWQgI2RjZGVlMjtib3JkZXItcmFkaXVzOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNkY2RlZTI7Y3Vyc29yOm5vdC1hbGxvd2VkfS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy1kaXNhYmxlZHtjb2xvcjojNjY2fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZC5zcy1kaXNhYmxlZCAuc3MtdmFsdWVzIC5zcy12YWx1ZSAuc3MtdmFsdWUtZGVsZXRle2N1cnNvcjpub3QtYWxsb3dlZH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1hYm92ZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQuc3Mtb3Blbi1iZWxvd3tib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlc3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7ZmxleDoxIDEgMTAwJTt3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtZGlzYWJsZWR7ZGlzcGxheTpmbGV4O3BhZGRpbmc6NHB4IDVweDttYXJnaW46MnB4IDA7bGluZS1oZWlnaHQ6MWVtO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOiNkZWRlZGU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfUBrZXlmcmFtZXMgc2NhbGVJbnswJXt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2NhbGVPdXR7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX10b3t0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowfX0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLXZhbHVlcyAuc3MtdmFsdWV7ZGlzcGxheTpmbGV4O3VzZXItc2VsZWN0Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6M3B4IDVweDttYXJnaW46M3B4IDVweCAzcHggMDtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzU4OTdmYjtib3JkZXItcmFkaXVzOjRweDthbmltYXRpb24tbmFtZTpzY2FsZUluO2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGh9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlLnNzLW91dHthbmltYXRpb24tbmFtZTpzY2FsZU91dDthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy12YWx1ZXMgLnNzLXZhbHVlIC5zcy12YWx1ZS1kZWxldGV7bWFyZ2luOjAgMCAwIDVweDtjdXJzb3I6cG9pbnRlcn0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZHtkaXNwbGF5OmZsZXg7ZmxleDowIDEgM3B4O21hcmdpbjo5cHggMTJweCAwIDVweH0uc3MtbWFpbiAuc3MtbXVsdGktc2VsZWN0ZWQgLnNzLWFkZCAuc3MtcGx1c3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZDojNjY2O3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4O3dpZHRoOjJweDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnN9LnNzLW1haW4gLnNzLW11bHRpLXNlbGVjdGVkIC5zcy1hZGQgLnNzLXBsdXM6YWZ0ZXJ7YmFja2dyb3VuZDojNjY2O2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDoxMHB4O2xlZnQ6LTRweDt0b3A6NHB4fS5zcy1tYWluIC5zcy1tdWx0aS1zZWxlY3RlZCAuc3MtYWRkIC5zcy1wbHVzLnNzLWNyb3Nze3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zcy1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7bWFyZ2luOi0xcHggMCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7ei1pbmRleDoxMDEwO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLG9wYWNpdHkgLjJzO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGVZKDApfS5zcy1jb250ZW50LnNzLW9wZW57ZGlzcGxheTpibG9jaztvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlWSgxKX0uc3MtY29udGVudCAuc3Mtc2VhcmNoe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7cGFkZGluZzo4cHggOHB4IDZweH0uc3MtY29udGVudCAuc3Mtc2VhcmNoLnNzLWhpZGUsLnNzLWNvbnRlbnQgLnNzLXNlYXJjaC5zcy1oaWRlIGlucHV0e2hlaWdodDowO29wYWNpdHk6MDtwYWRkaW5nOjA7bWFyZ2luOjB9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dHtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXQ7ZmxleDoxIDEgYXV0bzt3aWR0aDoxMDAlO21pbi13aWR0aDowO2hlaWdodDozMHB4O3BhZGRpbmc6NnB4IDhweDttYXJnaW46MDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO291dGxpbmU6MDt0ZXh0LWFsaWduOmxlZnQ7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGR9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXJ7Y29sb3I6IzhhOGE4YTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnNzLWNvbnRlbnQgLnNzLXNlYXJjaCBpbnB1dDpmb2N1c3tib3gtc2hhZG93OjAgMCA1cHggIzU4OTdmYn0uc3MtY29udGVudCAuc3Mtc2VhcmNoIC5zcy1hZGRhYmxle2Rpc3BsYXk6aW5saW5lLWZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjIycHg7Zm9udC13ZWlnaHQ6NzAwO2ZsZXg6MCAwIDMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luOjAgMCAwIDhweDtib3JkZXI6MXB4IHNvbGlkICNkY2RlZTI7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNpemluZzpib3JkZXItYm94fS5zcy1jb250ZW50IC5zcy1hZGRhYmxle3BhZGRpbmctdG9wOjB9LnNzLWNvbnRlbnQgLnNzLWxpc3R7bWF4LWhlaWdodDoyMDBweDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87dGV4dC1hbGlnbjpsZWZ0fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cCAuc3Mtb3B0Z3JvdXAtbGFiZWx7cGFkZGluZzo2cHggMTBweDtmb250LXdlaWdodDo3MDB9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGdyb3VwIC5zcy1vcHRpb257cGFkZGluZzo2cHggNnB4IDZweCAyNXB4fS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxle2N1cnNvcjpwb2ludGVyfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNTg5N2ZifS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb257cGFkZGluZzo2cHggMTBweDtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lfS5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb24gKntkaXNwbGF5OmlubGluZS1ibG9ja30uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uLnNzLWhpZ2hsaWdodGVkLC5zcy1jb250ZW50IC5zcy1saXN0IC5zcy1vcHRpb246aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM1ODk3ZmJ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1kaXNhYmxlZHtjdXJzb3I6bm90LWFsbG93ZWQ7Y29sb3I6I2RlZGVkZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbjpub3QoLnNzLWRpc2FibGVkKS5zcy1vcHRpb24tc2VsZWN0ZWR7Y29sb3I6IzY2NjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODgsMTUxLDI1MSwuMSl9LnNzLWNvbnRlbnQgLnNzLWxpc3QgLnNzLW9wdGlvbi5zcy1oaWRle2Rpc3BsYXk6bm9uZX0uc3MtY29udGVudCAuc3MtbGlzdCAuc3Mtb3B0aW9uIC5zcy1zZWFyY2gtaGlnaGxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2ZmZmI4Y31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcmV0dHktY2hlY2tib3guc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiY29uc3QgTW9uaXRvclJ1bm5hYmxlID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcXHJcXG4gICAgdGhpcy5wZWVyQ29ubmVjdGlvbnMgPSBbXTtcXHJcXG4gICAgdGhpcy5vcmlnaW5hbFJUQztcXHJcXG4gICAgdGhpcy5zdGFydFRpbWU7XFxyXFxuICAgIHRoaXMuZWxlbWVudDtcXHJcXG4gICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xcclxcbiAgICB0aGlzLnggPSAwO1xcclxcbiAgICB0aGlzLnkgPSAwO1xcclxcblxcclxcbiAgICBjb25zdCBzZWxmID0gdGhpcztcXHJcXG4gICAgdGhpcy5vcmlnaW5hbFJUQyA9IFJUQ1BlZXJDb25uZWN0aW9uO1xcclxcbiAgICAoZnVuY3Rpb24gKE9yaWdpbmFsUlRDQ29ubmVjdGlvbikge1xcclxcbiAgICAgICAgc2VsZi5vcmlnaW5hbFJUQyA9IE9yaWdpbmFsUlRDQ29ubmVjdGlvbjtcXHJcXG5cXHJcXG4gICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKGFyZ3MpIHtcXHJcXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IE9yaWdpbmFsUlRDQ29ubmVjdGlvbihhcmdzKTtcXHJcXG4gICAgICAgICAgICBzZWxmLnBlZXJDb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pO1xcclxcbiAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xcclxcbiAgICAgICAgfTtcXHJcXG4gICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSA9IE9yaWdpbmFsUlRDQ29ubmVjdGlvbi5wcm90b3R5cGU7XFxyXFxuICAgIH0pKFJUQ1BlZXJDb25uZWN0aW9uKTtcXHJcXG5cXHJcXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yJyk7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPVxcclxcbiAgICAgICAgICAgICduZXR3b3JrbW9uaXRvci0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KTtcXHJcXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcXHJcXG5cXHJcXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcXHJcXG5cXHJcXG4gICAgICAgIHRoaXMuc2V0RWRpdGFibGUodHJ1ZSk7XFxyXFxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XFxyXFxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcXHJcXG4gICAgICAgIHRoaXMueCA9IHg7XFxyXFxuICAgICAgICB0aGlzLnkgPSB5O1xcclxcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xcclxcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XFxyXFxuXFxyXFxuICAgICAgICBjb25zdCBjb3JuZXJzID0ge1xcclxcbiAgICAgICAgICAgIHRsOiAxMCxcXHJcXG4gICAgICAgICAgICB0cjogMTAsXFxyXFxuICAgICAgICAgICAgYmw6IDEwLFxcclxcbiAgICAgICAgICAgIGJyOiAxMCxcXHJcXG4gICAgICAgIH07XFxyXFxuXFxyXFxuICAgICAgICBpZiAodGhpcy54IDwgMTApIHtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLnRsID0gMDtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLmJsID0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlmICh0aGlzLnkgPCAxMCkge1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMudGwgPSAwO1xcclxcbiAgICAgICAgICAgIGNvcm5lcnMudHIgPSAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoIC0gMTApIHtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLnRyID0gMDtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLmJyID0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlmICh0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gMTApIHtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLmJsID0gMDtcXHJcXG4gICAgICAgICAgICBjb3JuZXJzLmJyID0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVtcXHJcXG4gICAgICAgICAgICAnYm9yZGVyLXJhZGl1cydcXHJcXG4gICAgICAgIF0gPSBgJHtjb3JuZXJzLnRsfXB4ICR7Y29ybmVycy50cn1weCAke2Nvcm5lcnMuYnJ9cHggJHtjb3JuZXJzLmJsfXB4YDtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IFtdO1xcclxcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xcclxcbiAgICB0aGlzLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xcclxcbiAgICB0aGlzLnNldEVkaXRhYmxlID0gZnVuY3Rpb24gKGVkaXRhYmxlKSB7XFxyXFxuICAgICAgICB0aGlzLmVkaXRhYmxlID0gZWRpdGFibGU7XFxyXFxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGFibGUnLCBlZGl0YWJsZSk7XFxyXFxuXFxyXFxuICAgICAgICBpZiAoZWRpdGFibGUpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLm1vdXNlRXZlbnRzLnB1c2goXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogZG9jdW1lbnQsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2Vtb3ZlJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZXZlbnQpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmcpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAvLyBNaW5pbXVtIHggdmFsdWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoLCAvLyBNYXhpbXVtIHggdmFsdWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jbGllbnRYIC0gdGhpcy5vZmZzZXQueCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgLy8gTWluaW11bSB5IHZhbHVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0LCAvLyBNYXhpbXVtIHkgdmFsdWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZIC0gdGhpcy5vZmZzZXQueSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb3VzZWRvd24nLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZm46IChldmVudCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldC54ID0gZXZlbnQuY2xpZW50WCAtIHRoaXMueDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldC55ID0gZXZlbnQuY2xpZW50WSAtIHRoaXMueTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogZG9jdW1lbnQsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2V1cCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBmbjogKGV2ZW50KSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICB0aGlzLm1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PlxcclxcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudC50eXBlLCBldmVudC5mbiksXFxyXFxuICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT5cXHJcXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgZXZlbnQuZm4pLFxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuc2V0VmlzaWJsZSA9IGZ1bmN0aW9uICh2aXNpYmxlKSB7XFxyXFxuICAgICAgICB2aXNpYmxlLmZvckVhY2goZSA9PiB0aGlzLnZpc2libGVbZS5pZF0gPSBlKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLnNldEVkaXRhYmxlKGZhbHNlKTtcXHJcXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcXHJcXG5cXHJcXG4gICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uID0gdGhpcy5vcmlnaW5hbFJUQztcXHJcXG4gICAgICAgIHBlZXJDb25uZWN0aW9ucyA9IFtdO1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLnZpc2libGUgPSB7fTtcXHJcXG5cXHJcXG4gICAgdGhpcy5zdGF0cyA9IFtdO1xcclxcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIGlmICh0aGlzLnBlZXJDb25uZWN0aW9ucy5sZW5ndGggPiAxKSB7XFxyXFxuICAgICAgICAgIGNvbnN0IG9wZW5Db25uZWN0aW9ucyA9IHRoaXMucGVlckNvbm5lY3Rpb25zLmZpbHRlcih4ID0+IHguY29ubmVjdGlvblN0YXRlID09IFxcXCJjb25uZWN0ZWRcXFwiKTtcXHJcXG5cXHJcXG4gICAgICAgICAgb3BlbkNvbm5lY3Rpb25zWzFdLmdldFN0YXRzKCkudGhlbigoX3N0YXRzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHMgPSBBcnJheS5mcm9tKF9zdGF0cyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSA9IHRoaXMuZ2V0U3RhdCgoc3RhdCkgPT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtJyksXFxyXFxuICAgICAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IFJUQ0ljZUNhbmRpZGF0ZVBhaXIgPSB0aGlzLmdldFN0YXQoKHN0YXQpID0+XFxyXFxuICAgICAgICAgICAgICAgICAgICBzdGF0WzBdLnN0YXJ0c1dpdGgoJ1JUQ0ljZUNhbmRpZGF0ZVBhaXInKSxcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlciA9IHRoaXMuZ2V0U3RhdChcXHJcXG4gICAgICAgICAgICAgICAgICAgIChzdGF0KSA9PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRbMF0uc3RhcnRzV2l0aCgnUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcicpICYmXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdFsxXS5raW5kID09PSAndmlkZW8nLFxcclxcbiAgICAgICAgICAgICAgICApO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHV0aW9uID0gdGhpcy5nZXRSZXNvbHV0aW9uKFxcclxcbiAgICAgICAgICAgICAgICAgICAgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlcixcXHJcXG4gICAgICAgICAgICAgICAgKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgZnBzID0gdGhpcy5nZXRGUFMoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZW5jeSA9IHRoaXMuZ2V0TGF0ZW5jeShSVENJY2VDYW5kaWRhdGVQYWlyKSArICcgbXMnO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlYyA9IHRoaXMuZ2V0Q29kZWMoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxUcmFmZmljID0gdGhpcy50cmFuc2xhdGVCeXRlVW5pdHMoXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRvdGFsRG93bmxvYWQoUlRDSWNlQ2FuZGlkYXRlUGFpciksXFxyXFxuICAgICAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUcmFmZmljID1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlQml0VW5pdHMoXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREb3dubG9hZFNwZWVkKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpLFxcclxcbiAgICAgICAgICAgICAgICAgICAgKSArICcvcyc7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IGF2ZXJhZ2VUcmFmZmljID1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlQml0VW5pdHMoXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBdmVyYWdlRG93bmxvYWRTcGVlZChSVENJY2VDYW5kaWRhdGVQYWlyKSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICkgKyAnL3MnO1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBwYWNrZXRzTG9zdCA9IHRoaXMuZ2V0UGFja2V0c0xvc3QoXFxyXFxuICAgICAgICAgICAgICAgICAgICBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0sXFxyXFxuICAgICAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IGF2ZXJhZ2VQYWNrZXRMb3NzID1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXZlcmFnZVBhY2tldExvc3MoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSArICclJztcXHJcXG4gICAgICAgICAgICAgICAgY29uc3Qgaml0dGVyQnVmZmVyID1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Sml0dGVyQnVmZmVyKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIpICsgJyBtcyc7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gJyc7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ3RpbWUnXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZVN0cmluZyA9IHRpbWUudG9Mb2NhbGVTdHJpbmcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxoNT4ke3RpbWVTdHJpbmd9PC9oNT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx1bD4nO1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydyZXNvbHV0aW9uJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydyZXNvbHV0aW9uJ10ubmFtZX06ICR7cmVzb2x1dGlvbi53aWR0aH14JHtyZXNvbHV0aW9uLmhlaWdodH08L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnZnBzJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydmcHMnXS5uYW1lfTogJHtmcHN9PC9saT5gO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGVbJ2xhdGVuY3knXS5lbmFibGVkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8bGk+JHt0aGlzLnZpc2libGVbJ2xhdGVuY3knXS5uYW1lfTogJHtsYXRlbmN5fTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydjb2RlYyddLmVuYWJsZWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsnY29kZWMnXS5uYW1lfTogJHtjb2RlY308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsndHJhZmZpYyddLmVuYWJsZWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsndHJhZmZpYyddLm5hbWV9OiAke3RvdGFsVHJhZmZpY308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnY3VycmVudC10cmFmZmljJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydjdXJyZW50LXRyYWZmaWMnXS5uYW1lfTogJHtjdXJyZW50VHJhZmZpY308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnYXZlcmFnZS10cmFmZmljJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydhdmVyYWdlLXRyYWZmaWMnXS5uYW1lfTogJHthdmVyYWdlVHJhZmZpY308L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsncGFja2V0cy1sb3N0J10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydwYWNrZXRzLWxvc3QnXS5uYW1lfTogJHtwYWNrZXRzTG9zdH08L2xpPmA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZVsnYXZlcmFnZS1wYWNrZXQtbG9zcyddLmVuYWJsZWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxsaT4ke3RoaXMudmlzaWJsZVsnYXZlcmFnZS1wYWNrZXQtbG9zcyddLm5hbWV9OiAke2F2ZXJhZ2VQYWNrZXRMb3NzfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlWydqaXR0ZXItYnVmZmVyJ10uZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPiR7dGhpcy52aXNpYmxlWydqaXR0ZXItYnVmZmVyJ10ubmFtZX06ICR7aml0dGVyQnVmZmVyfTwvbGk+YDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8L3VsPic7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xcclxcbiAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcXHJcXG4gICAgICAgICAgICAgICAgPGg1PkVycm9yPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICBVaCBvaCwgc29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcuIFxcclxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmZWF0dXJlIGlzIHN0aWxsIHZlcnkgdW5zdGFibGUgYW5kIFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhlIGRldmVsb3BlciBrbm93cyB0aGVyZSBhcmUgcHJvYmxlbXMsIFxcclxcbiAgICAgICAgICAgICAgICAgICAgcGxlYXNlIHVuZGVyc3RhbmQgdGhhdCB0aGlzIGlzc3VlIGlzIFxcclxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlbHkgYmVpbmcgd29ya2VkIG9uLlxcclxcbiAgICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdzdGFkaWFwbHVzX211dGVkJz5FcnJvciBDb2RlOiAwMDEgLSBTdGF0cyB1bmF2YWlsYWJsZTwvcD5cXHJcXG4gICAgICAgICAgICBgO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xcclxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xcclxcbiAgICAgICAgICAgIH0sIDEwMDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldFN0YXQgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0cy5maW5kKGZpbHRlcilbMV07XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMudHJhbnNsYXRlQml0VW5pdHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcXHJcXG4gICAgICAgIGNvbnN0IHVuaXRzID0gWydiaXQnLCAna2JpdCcsICdNYml0JywgJ0diaXQnXTtcXHJcXG5cXHJcXG4gICAgICAgIGxldCBpID0gMDtcXHJcXG4gICAgICAgIHdoaWxlICh2YWx1ZSAvIDEwMDAgPj0gMSkge1xcclxcbiAgICAgICAgICAgIGkrKztcXHJcXG4gICAgICAgICAgICB2YWx1ZSAvPSAxMDAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcmV0dXJuIChcXHJcXG4gICAgICAgICAgICB2YWx1ZS50b1ByZWNpc2lvbig0KSArICcgJyArIHVuaXRzW01hdGgubWluKHVuaXRzLmxlbmd0aCAtIDEsIGkpXVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy50cmFuc2xhdGVCeXRlVW5pdHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcXHJcXG4gICAgICAgIGNvbnN0IHVuaXRzID0gWydCJywgJ2tCJywgJ01CJywgJ0dCJ107XFxyXFxuXFxyXFxuICAgICAgICBsZXQgaSA9IDA7XFxyXFxuICAgICAgICB3aGlsZSAodmFsdWUgLyAxMDAwID49IDEpIHtcXHJcXG4gICAgICAgICAgICBpKys7XFxyXFxuICAgICAgICAgICAgdmFsdWUgLz0gMTAwMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgdmFsdWUudG9QcmVjaXNpb24oNCkgKyAnICcgKyB1bml0c1tNYXRoLm1pbih1bml0cy5sZW5ndGggLSAxLCBpKV1cXHJcXG4gICAgICAgICk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0TGF0ZW5jeSA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxyXFxuICAgICAgICByZXR1cm4gUlRDSWNlQ2FuZGlkYXRlUGFpci5jdXJyZW50Um91bmRUcmlwVGltZSAqIDEwMDA7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0Sml0dGVyQnVmZmVyID0gZnVuY3Rpb24gKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIpIHtcXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgKFJUQ01lZGlhU3RyZWFtVHJhY2tfcmVjZWl2ZXIuaml0dGVyQnVmZmVyRGVsYXkgKiAxMDAwKSAvXFxyXFxuICAgICAgICAgICAgUlRDTWVkaWFTdHJlYW1UcmFja19yZWNlaXZlci5qaXR0ZXJCdWZmZXJFbWl0dGVkQ291bnRcXHJcXG4gICAgICAgICkudG9QcmVjaXNpb24oNCk7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0UGFja2V0c0xvc3QgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxyXFxuICAgICAgICByZXR1cm4gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0O1xcclxcbiAgICB9O1xcclxcblxcclxcbiAgICB0aGlzLmdldEF2ZXJhZ2VQYWNrZXRMb3NzID0gZnVuY3Rpb24gKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbSkge1xcclxcbiAgICAgICAgcmV0dXJuIChcXHJcXG4gICAgICAgICAgICAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0IC9cXHJcXG4gICAgICAgICAgICAgICAgKFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5wYWNrZXRzUmVjZWl2ZWQgK1xcclxcbiAgICAgICAgICAgICAgICAgICAgUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLnBhY2tldHNMb3N0KSkgKlxcclxcbiAgICAgICAgICAgIDEwMFxcclxcbiAgICAgICAgKS50b1ByZWNpc2lvbigyKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5sYXN0RG93bmxvYWQgPSAwO1xcclxcbiAgICB0aGlzLmdldERvd25sb2FkU3BlZWQgPSBmdW5jdGlvbiAoUlRDSWNlQ2FuZGlkYXRlUGFpcikge1xcclxcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSB0aGlzLmdldFRvdGFsRG93bmxvYWQoUlRDSWNlQ2FuZGlkYXRlUGFpcik7XFxyXFxuICAgICAgICBjb25zdCBzcGVlZCA9IGRvd25sb2FkIC0gdGhpcy5sYXN0RG93bmxvYWQ7XFxyXFxuICAgICAgICB0aGlzLmxhc3REb3dubG9hZCA9IGRvd25sb2FkO1xcclxcbiAgICAgICAgcmV0dXJuIHNwZWVkICogODtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRBdmVyYWdlRG93bmxvYWRTcGVlZCA9IGZ1bmN0aW9uIChSVENJY2VDYW5kaWRhdGVQYWlyKSB7XFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIHRoaXMuZ2V0VG90YWxEb3dubG9hZChSVENJY2VDYW5kaWRhdGVQYWlyKSAqIDggL1xcclxcbiAgICAgICAgICAgICh0aGlzLnRpbWVTaW5jZVN0YXJ0KCkgLyAxMDAwKVxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRUb3RhbERvd25sb2FkID0gZnVuY3Rpb24gKFJUQ0ljZUNhbmRpZGF0ZVBhaXIpIHtcXHJcXG4gICAgICAgIHJldHVybiBSVENJY2VDYW5kaWRhdGVQYWlyLmJ5dGVzUmVjZWl2ZWQ7XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIHRoaXMuZ2V0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uIChSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmZyYW1lV2lkdGgsXFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBSVENNZWRpYVN0cmVhbVRyYWNrX3JlY2VpdmVyLmZyYW1lSGVpZ2h0LFxcclxcbiAgICAgICAgfTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5nZXRDb2RlYyA9IGZ1bmN0aW9uIChSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0pIHtcXHJcXG4gICAgICAgIGNvbnN0IGNvZGVjU3RhdCA9IHRoaXMuZ2V0U3RhdChcXHJcXG4gICAgICAgICAgICAoc3RhdCkgPT4gc3RhdFswXSA9PT0gUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtLmNvZGVjSWQsXFxyXFxuICAgICAgICApO1xcclxcbiAgICAgICAgcmV0dXJuIGNvZGVjU3RhdC5taW1lVHlwZS5zdWJzdHJpbmcoJ3ZpZGVvLycubGVuZ3RoKTtcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy5sYXN0RnJhbWVzID0gMDtcXHJcXG4gICAgdGhpcy5nZXRGUFMgPSBmdW5jdGlvbiAoUlRDSW5ib3VuZFJUUFZpZGVvU3RyZWFtKSB7XFxyXFxuICAgICAgICBjb25zdCBmcHMgPSBSVENJbmJvdW5kUlRQVmlkZW9TdHJlYW0uZnJhbWVzRGVjb2RlZCAtIHRoaXMubGFzdEZyYW1lcztcXHJcXG4gICAgICAgIHRoaXMubGFzdEZyYW1lcyA9IFJUQ0luYm91bmRSVFBWaWRlb1N0cmVhbS5mcmFtZXNEZWNvZGVkO1xcclxcbiAgICAgICAgcmV0dXJuIGZwcztcXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgdGhpcy50aW1lU2luY2VTdGFydCA9IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XFxyXFxuICAgIH07XFxyXFxufTtcXHJcXG5cXHJcXG5TdGFkaWFQbHVzTW9uaXRvciA9IG5ldyBNb25pdG9yUnVubmFibGUoKTtcXHJcXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcImNvbnN0IFdlYlNjcmFwZXJSdW5uYWJsZSA9IHtcXHJcXG4gICAgZmV0Y2hEYXRhKHVzZXJpZCwgZ2FtZWlkKSB7XFxyXFxuICAgICAgICBjb25zb2xlLmxvZyh7IHVzZXJpZCwgZ2FtZWlkIH0pXFxyXFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xcclxcbiAgICAgICAgICAgIGZldGNoKFxcXCJodHRwczovL3N0YWRpYS5nb29nbGUuY29tL3Byb2ZpbGUvXFxcIiArIHVzZXJpZCArIFxcXCIvZGV0YWlsL1xcXCIgKyBnYW1laWQpXFxyXFxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxcclxcbiAgICAgICAgICAgIC50aGVuKHRleHQgPT4ge1xcclxcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5RGF0YSA9IHRleHQubWF0Y2gobmV3IFJlZ0V4cChcXFwiXFxcXFxcXFxbXFxcXFxcXFxbXFxcXFxcXFxbXFxcXFxcXCJcXFwiICsgZ2FtZWlkICsgXFxcIlxcXFxcXFwiLC4rXFxcXFxcXFxuLitcXFxcXFxcXG4sXFxcXFxcXFxbKFswLTldKylcXFwiKSk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IGFjaGlldmVtZW50RGF0YSA9IHRleHQubWF0Y2gobmV3IFJlZ0V4cChcXFwiQUZfaW5pdERhdGFDYWxsYmFja1xcXFxcXFxcKFxcXFxcXFxceyAqa2V5OiAqJ2RzOjInLio/ZGF0YTogKigoLnxcXFxcXFxcXG4pKj8pXFxcXFxcXFx9XFxcXFxcXFwpXFxcIikpO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgaWYocGxheURhdGEgPT0gbnVsbCkgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoYWNoaWV2ZW1lbnREYXRhWzFdKVswXTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2RhdGF9KVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgY29uc3QgYWNoaWV2ZW1lbnRzID0gW107XFxyXFxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBlIG9mIGRhdGFbNV1bMF0pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFjaGlldmVtZW50cy5wdXNoKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBlWzBdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlWzFdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlWzNdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGVbOF1bMF1bMF1bMV0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZTogZVs2XSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZVs3XVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhWzVdWzNdWzBdWzBdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBkYXRhWzVdWzNdWzBdWzFdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBkYXRhWzVdWzNdWzFdWzFdXFxyXFxuICAgICAgICAgICAgICAgIH07XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdhbWU6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBkYXRhWzBdWzBdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFbMF1bMV1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICBhY2hpZXZlbWVudHMsXFxyXFxuICAgICAgICAgICAgICAgICAgICB1c2VyLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogcGxheURhdGFbMV1cXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbnRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBldmVudCA9PiB7XFxyXFxuICAgIGNvbnN0IHV1aWQgPSBldmVudC5zcmNFbGVtZW50LmRhdGFMYXllci5maW5kKGUgPT4gZS5ldmVudCA9PT0gXFxcImVuZ2FnZW1lbnRfc2Vzc2lvbnNcXFwiKS5hcHBfaWQ7XFxyXFxuICAgIGlmKHV1aWQgPT0gbnVsbCkgcmV0dXJuO1xcclxcblxcclxcbiAgICBjb25zdCB1c2VySWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua3NaWWdjLlZHWmNVYicpLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXItaWQnKTtcXHJcXG4gICAgV2ViU2NyYXBlclJ1bm5hYmxlLmZldGNoRGF0YSh1c2VySWQsIHV1aWQpXFxyXFxuICAgIC50aGVuKGRhdGEgPT4ge1xcclxcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XFxyXFxuICAgICAgICBjb25zdCBzYW5kYm94ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViLXNjcmFwZXItc2FuZGJveGVyJyk7XFxyXFxuICAgICAgICBzYW5kYm94ZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xcclxcbiAgICAgICAgc2FuZGJveGVyLmNsaWNrKCk7XFxyXFxuICAgIH0pXFxyXFxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxcclxcbn0pO1wiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpbXNlbGVjdC5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNsaW1TZWxlY3Q9dCgpOmUuU2xpbVNlbGVjdD10KCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybihzPXt9LG4ubT1pPVtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQpe3Q9dHx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBpLmluaXRDdXN0b21FdmVudChlLHQuYnViYmxlcyx0LmNhbmNlbGFibGUsdC5kZXRhaWwpLGl9dmFyIG47dC5fX2VzTW9kdWxlPSEwLHQuaGFzQ2xhc3NJblRyZWU9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBzKGUsdCl7cmV0dXJuIHQmJmUmJmUuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5jb250YWlucyh0KT9lOm51bGx9cmV0dXJuIHMoZSx0KXx8ZnVuY3Rpb24gZSh0LGkpe3JldHVybiB0JiZ0IT09ZG9jdW1lbnQ/cyh0LGkpP3Q6ZSh0LnBhcmVudE5vZGUsaSk6bnVsbH0oZSx0KX0sdC5lbnN1cmVFbGVtZW50SW5WaWV3PWZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5zY3JvbGxUb3ArZS5vZmZzZXRUb3Ascz1pK2UuY2xpZW50SGVpZ2h0LG49dC5vZmZzZXRUb3AsYT1uK3QuY2xpZW50SGVpZ2h0O248aT9lLnNjcm9sbFRvcC09aS1uOnM8YSYmKGUuc2Nyb2xsVG9wKz1hLXMpfSx0LnB1dENvbnRlbnQ9ZnVuY3Rpb24oZSx0LGkpe3ZhciBzPWUub2Zmc2V0SGVpZ2h0LG49ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWk/bi50b3A6bi50b3AtcyxvPWk/bi5ib3R0b206bi5ib3R0b20rcztyZXR1cm4gYTw9MD9cImJlbG93XCI6bz49d2luZG93LmlubmVySGVpZ2h0P1wiYWJvdmVcIjppP3Q6XCJiZWxvd1wifSx0LmRlYm91bmNlPWZ1bmN0aW9uKG4sYSxvKXt2YXIgbDtyZXR1cm4gdm9pZCAwPT09YSYmKGE9MTAwKSx2b2lkIDA9PT1vJiYobz0hMSksZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspZVt0XT1hcmd1bWVudHNbdF07dmFyIGk9c2VsZixzPW8mJiFsO2NsZWFyVGltZW91dChsKSxsPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPW51bGwsb3x8bi5hcHBseShpLGUpfSxhKSxzJiZuLmFwcGx5KGksZSl9fSx0LmlzVmFsdWVJbkFycmF5T2ZPYmplY3RzPWZ1bmN0aW9uKGUsdCxpKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZVt0XT09PWk7Zm9yKHZhciBzPTAsbj1lO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO2lmKGEmJmFbdF0mJmFbdF09PT1pKXJldHVybiEwfXJldHVybiExfSx0LmhpZ2hsaWdodD1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ZSxuPW5ldyBSZWdFeHAoXCIoXCIrdC50cmltKCkrXCIpKD8hW148XSo+W148Pl0qPC8pXCIsXCJpXCIpO2lmKCFlLm1hdGNoKG4pKXJldHVybiBlO3ZhciBhPWUubWF0Y2gobikuaW5kZXgsbz1hK2UubWF0Y2gobilbMF0udG9TdHJpbmcoKS5sZW5ndGgsbD1lLnN1YnN0cmluZyhhLG8pO3JldHVybiBzPXMucmVwbGFjZShuLCc8bWFyayBjbGFzcz1cIicraSsnXCI+JytsK1wiPC9tYXJrPlwiKX0sXCJmdW5jdGlvblwiIT10eXBlb2Yobj13aW5kb3cpLkN1c3RvbUV2ZW50JiYocy5wcm90b3R5cGU9bi5FdmVudC5wcm90b3R5cGUsbi5DdXN0b21FdmVudD1zKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz0obi5wcm90b3R5cGUubmV3T3B0aW9uPWZ1bmN0aW9uKGUpe3JldHVybntpZDplLmlkP2UuaWQ6U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlP2UudmFsdWU6XCJcIix0ZXh0OmUudGV4dD9lLnRleHQ6XCJcIixpbm5lckhUTUw6ZS5pbm5lckhUTUw/ZS5pbm5lckhUTUw6XCJcIixzZWxlY3RlZDohIWUuc2VsZWN0ZWQmJmUuc2VsZWN0ZWQsZGlzcGxheTp2b2lkIDA9PT1lLmRpc3BsYXl8fGUuZGlzcGxheSxkaXNhYmxlZDohIWUuZGlzYWJsZWQmJmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6ISFlLnBsYWNlaG9sZGVyJiZlLnBsYWNlaG9sZGVyLGNsYXNzOmUuY2xhc3M/ZS5jbGFzczp2b2lkIDAsZGF0YTplLmRhdGE/ZS5kYXRhOnt9fX0sbi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGUpe3RoaXMuZGF0YS5wdXNoKHtpZDpTdHJpbmcoTWF0aC5mbG9vcigxZTgqTWF0aC5yYW5kb20oKSkpLHZhbHVlOmUudmFsdWUsdGV4dDplLnRleHQsaW5uZXJIVE1MOlwiXCIsc2VsZWN0ZWQ6ITEsZGlzcGxheTohMCxkaXNhYmxlZDohMSxwbGFjZWhvbGRlcjohMSxjbGFzczp2b2lkIDAsZGF0YTp7fX0pfSxuLnByb3RvdHlwZS5wYXJzZVNlbGVjdERhdGE9ZnVuY3Rpb24oKXt0aGlzLmRhdGE9W107Zm9yKHZhciBlPTAsdD10aGlzLm1haW4uc2VsZWN0LmVsZW1lbnQuY2hpbGROb2RlcztlPHQubGVuZ3RoO2UrKyl7dmFyIGk9dFtlXTtpZihcIk9QVEdST1VQXCI9PT1pLm5vZGVOYW1lKXtmb3IodmFyIHM9e2xhYmVsOmkubGFiZWwsb3B0aW9uczpbXX0sbj0wLGE9aS5jaGlsZE5vZGVzO248YS5sZW5ndGg7bisrKXt2YXIgbz1hW25dO2lmKFwiT1BUSU9OXCI9PT1vLm5vZGVOYW1lKXt2YXIgbD10aGlzLnB1bGxPcHRpb25EYXRhKG8pO3Mub3B0aW9ucy5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KX19dGhpcy5kYXRhLnB1c2gocyl9ZWxzZVwiT1BUSU9OXCI9PT1pLm5vZGVOYW1lJiYobD10aGlzLnB1bGxPcHRpb25EYXRhKGkpLHRoaXMuZGF0YS5wdXNoKGwpLGwucGxhY2Vob2xkZXImJlwiXCIhPT1sLnRleHQudHJpbSgpJiYodGhpcy5tYWluLmNvbmZpZy5wbGFjZWhvbGRlclRleHQ9bC50ZXh0KSl9fSxuLnByb3RvdHlwZS5wdWxsT3B0aW9uRGF0YT1mdW5jdGlvbihlKXtyZXR1cm57aWQ6ISFlLmRhdGFzZXQmJmUuZGF0YXNldC5pZHx8U3RyaW5nKE1hdGguZmxvb3IoMWU4Kk1hdGgucmFuZG9tKCkpKSx2YWx1ZTplLnZhbHVlLHRleHQ6ZS50ZXh0LGlubmVySFRNTDplLmlubmVySFRNTCxzZWxlY3RlZDplLnNlbGVjdGVkLGRpc2FibGVkOmUuZGlzYWJsZWQscGxhY2Vob2xkZXI6XCJ0cnVlXCI9PT1lLmRhdGFzZXQucGxhY2Vob2xkZXIsY2xhc3M6ZS5jbGFzc05hbWUsc3R5bGU6ZS5zdHlsZS5jc3NUZXh0LGRhdGE6ZS5kYXRhc2V0fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0PWZ1bmN0aW9uKCl7aWYodGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGU9W10sdD0wLGk9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50Lm9wdGlvbnM7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5zZWxlY3RlZCl7dmFyIG49dGhpcy5nZXRPYmplY3RGcm9tRGF0YShzLnZhbHVlLFwidmFsdWVcIik7biYmbi5pZCYmZS5wdXNoKG4uaWQpfX10aGlzLnNldFNlbGVjdGVkKGUsXCJpZFwiKX1lbHNle3ZhciBhPXRoaXMubWFpbi5zZWxlY3QuZWxlbWVudDtpZigtMSE9PWEuc2VsZWN0ZWRJbmRleCl7dmFyIG89YS5vcHRpb25zW2Euc2VsZWN0ZWRJbmRleF0udmFsdWU7dGhpcy5zZXRTZWxlY3RlZChvLFwidmFsdWVcIil9fX0sbi5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1cImlkXCIpO2Zvcih2YXIgaT0wLHM9dGhpcy5kYXRhO2k8cy5sZW5ndGg7aSsrKXt2YXIgbj1zW2ldO2lmKG4uaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW4ub3B0aW9ucztpZihhKWZvcih2YXIgbz0wLGw9YTtvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTtyLnBsYWNlaG9sZGVyfHwoci5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQocixlLHQpKX19fWVsc2Ugbi5zZWxlY3RlZD10aGlzLnNob3VsZEJlU2VsZWN0ZWQobixlLHQpfX0sbi5wcm90b3R5cGUuc2hvdWxkQmVTZWxlY3RlZD1mdW5jdGlvbihlLHQsaSl7aWYodm9pZCAwPT09aSYmKGk9XCJpZFwiKSxBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcz0wLG49dDtzPG4ubGVuZ3RoO3MrKyl7dmFyIGE9bltzXTtpZihpIGluIGUmJlN0cmluZyhlW2ldKT09PVN0cmluZyhhKSlyZXR1cm4hMH1lbHNlIGlmKGkgaW4gZSYmU3RyaW5nKGVbaV0pPT09U3RyaW5nKHQpKXJldHVybiEwO3JldHVybiExfSxuLnByb3RvdHlwZS5nZXRTZWxlY3RlZD1mdW5jdGlvbigpe2Zvcih2YXIgZT17dGV4dDpcIlwiLHBsYWNlaG9sZGVyOnRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0fSx0PVtdLGk9MCxzPXRoaXMuZGF0YTtpPHMubGVuZ3RoO2krKyl7dmFyIG49c1tpXTtpZihuLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpe2lmKG4uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKXt2YXIgYT1uLm9wdGlvbnM7aWYoYSlmb3IodmFyIG89MCxsPWE7bzxsLmxlbmd0aDtvKyspe3ZhciByPWxbb107ci5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gocik6ZT1yKX19fWVsc2Ugbi5zZWxlY3RlZCYmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT90LnB1c2gobik6ZT1uKX1yZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlP3Q6ZX0sbi5wcm90b3R5cGUuYWRkVG9TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT1bXSxzPXRoaXMuZ2V0U2VsZWN0ZWQoKTtpZihBcnJheS5pc0FycmF5KHMpKWZvcih2YXIgbj0wLGE9cztuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtpLnB1c2gob1t0XSl9aS5wdXNoKGUpLHRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLnJlbW92ZUZyb21TZWxlY3RlZD1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PVwiaWRcIiksdGhpcy5tYWluLmNvbmZpZy5pc011bHRpcGxlKXtmb3IodmFyIGk9W10scz0wLG49dGhpcy5nZXRTZWxlY3RlZCgpO3M8bi5sZW5ndGg7cysrKXt2YXIgYT1uW3NdO1N0cmluZyhhW3RdKSE9PVN0cmluZyhlKSYmaS5wdXNoKGFbdF0pfXRoaXMuc2V0U2VsZWN0ZWQoaSx0KX19LG4ucHJvdG90eXBlLm9uRGF0YUNoYW5nZT1mdW5jdGlvbigpe3RoaXMubWFpbi5vbkNoYW5nZSYmdGhpcy5pc09uQ2hhbmdlRW5hYmxlZCYmdGhpcy5tYWluLm9uQ2hhbmdlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRTZWxlY3RlZCgpKSkpfSxuLnByb3RvdHlwZS5nZXRPYmplY3RGcm9tRGF0YT1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PVwiaWRcIik7Zm9yKHZhciBpPTAscz10aGlzLmRhdGE7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYodCBpbiBuJiZTdHJpbmcoblt0XSk9PT1TdHJpbmcoZSkpcmV0dXJuIG47aWYobi5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBhPW47aWYoYS5vcHRpb25zKWZvcih2YXIgbz0wLGw9YS5vcHRpb25zO288bC5sZW5ndGg7bysrKXt2YXIgcj1sW29dO2lmKFN0cmluZyhyW3RdKT09PVN0cmluZyhlKSlyZXR1cm4gcn19fXJldHVybiBudWxsfSxuLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24obil7aWYoXCJcIiE9PSh0aGlzLnNlYXJjaFZhbHVlPW4pLnRyaW0oKSl7dmFyIGE9dGhpcy5tYWluLmNvbmZpZy5zZWFyY2hGaWx0ZXIsZT10aGlzLmRhdGEuc2xpY2UoMCk7bj1uLnRyaW0oKTt2YXIgdD1lLm1hcChmdW5jdGlvbihlKXtpZihlLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIHQ9ZSxpPVtdO2lmKHQub3B0aW9ucyYmKGk9dC5vcHRpb25zLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gYShlLG4pfSkpLDAhPT1pLmxlbmd0aCl7dmFyIHM9T2JqZWN0LmFzc2lnbih7fSx0KTtyZXR1cm4gcy5vcHRpb25zPWksc319cmV0dXJuIGUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0XCIpJiZhKGUsbik/ZTpudWxsfSk7dGhpcy5maWx0ZXJlZD10LmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pfWVsc2UgdGhpcy5maWx0ZXJlZD1udWxsfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMuY29udGVudE9wZW49ITEsdGhpcy5jb250ZW50UG9zaXRpb249XCJiZWxvd1wiLHRoaXMuaXNPbkNoYW5nZUVuYWJsZWQ9ITAsdGhpcy5tYWluPWUubWFpbix0aGlzLnNlYXJjaFZhbHVlPVwiXCIsdGhpcy5kYXRhPVtdLHRoaXMuZmlsdGVyZWQ9bnVsbCx0aGlzLnBhcnNlU2VsZWN0RGF0YSgpLHRoaXMuc2V0U2VsZWN0ZWRGcm9tU2VsZWN0KCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gdm9pZCAwIT09ZS50ZXh0fHwoY29uc29sZS5lcnJvcihcIkRhdGEgb2JqZWN0IG9wdGlvbiBtdXN0IGhhdmUgYXQgbGVhc3QgaGF2ZSBhIHRleHQgdmFsdWUuIENoZWNrIG9iamVjdDogXCIrSlNPTi5zdHJpbmdpZnkoZSkpLCExKX10LkRhdGE9cyx0LnZhbGlkYXRlRGF0YT1mdW5jdGlvbihlKXtpZighZSlyZXR1cm4gY29uc29sZS5lcnJvcihcIkRhdGEgbXVzdCBiZSBhbiBhcnJheSBvZiBvYmplY3RzXCIpLCExO2Zvcih2YXIgdD0wLGk9MCxzPWU7aTxzLmxlbmd0aDtpKyspe3ZhciBuPXNbaV07aWYobi5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKXtpZihuLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSl7dmFyIGE9bi5vcHRpb25zO2lmKGEpZm9yKHZhciBvPTAsbD1hO288bC5sZW5ndGg7bysrKXtyKGxbb10pfHx0Kyt9fX1lbHNlIHIobil8fHQrK31yZXR1cm4gMD09PXR9LHQudmFsaWRhdGVPcHRpb249cn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgcz1pKDMpLG49aSg0KSxhPWkoNSksbz1pKDEpLGw9aSgwKSxyPShjLnByb3RvdHlwZS52YWxpZGF0ZT1mdW5jdGlvbihlKXt2YXIgdD1cInN0cmluZ1wiPT10eXBlb2YgZS5zZWxlY3Q/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnNlbGVjdCk6ZS5zZWxlY3Q7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc2VsZWN0IGVsZW1lbnRcIik7aWYoXCJTRUxFQ1RcIiE9PXQudGFnTmFtZSl0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IGlzbnQgb2YgdHlwZSBzZWxlY3RcIik7cmV0dXJuIHR9LGMucHJvdG90eXBlLnNlbGVjdGVkPWZ1bmN0aW9uKCl7aWYodGhpcy5jb25maWcuaXNNdWx0aXBsZSl7Zm9yKHZhciBlPVtdLHQ9MCxpPW49dGhpcy5kYXRhLmdldFNlbGVjdGVkKCk7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07ZS5wdXNoKHMudmFsdWUpfXJldHVybiBlfXZhciBuO3JldHVybihuPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKT9uLnZhbHVlOlwiXCJ9LGMucHJvdG90eXBlLnNldD1mdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT10JiYodD1cInZhbHVlXCIpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCksdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmIUFycmF5LmlzQXJyYXkoZSk/dGhpcy5kYXRhLmFkZFRvU2VsZWN0ZWQoZSx0KTp0aGlzLmRhdGEuc2V0U2VsZWN0ZWQoZSx0KSx0aGlzLnNlbGVjdC5zZXRWYWx1ZSgpLHRoaXMuZGF0YS5vbkRhdGFDaGFuZ2UoKSx0aGlzLnJlbmRlcigpLGkmJnRoaXMuY2xvc2UoKX0sYy5wcm90b3R5cGUuc2V0U2VsZWN0ZWQ9ZnVuY3Rpb24oZSx0LGkscyl7dm9pZCAwPT09dCYmKHQ9XCJ2YWx1ZVwiKSx2b2lkIDA9PT1pJiYoaT0hMCksdm9pZCAwPT09cyYmKHM9ITApLHRoaXMuc2V0KGUsdCxpLHMpfSxjLnByb3RvdHlwZS5zZXREYXRhPWZ1bmN0aW9uKGUpe2lmKG8udmFsaWRhdGVEYXRhKGUpKXt2YXIgdD1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKSxpPXRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpO2lmKHRoaXMuY29uZmlnLmlzQWpheCYmaSlpZih0aGlzLmNvbmZpZy5pc011bHRpcGxlKWZvcih2YXIgcz0wLG49aS5yZXZlcnNlKCk7czxuLmxlbmd0aDtzKyspe3ZhciBhPW5bc107dC51bnNoaWZ0KGEpfWVsc2UgdC51bnNoaWZ0KHRoaXMuZGF0YS5nZXRTZWxlY3RlZCgpKSx0LnVuc2hpZnQoe3RleHQ6XCJcIixwbGFjZWhvbGRlcjohMH0pO3RoaXMuc2VsZWN0LmNyZWF0ZSh0KSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpfWVsc2UgY29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gcHJvYmxlbSBvbjogI1wiK3RoaXMuc2VsZWN0LmVsZW1lbnQuaWQpfSxjLnByb3RvdHlwZS5hZGREYXRhPWZ1bmN0aW9uKGUpe28udmFsaWRhdGVEYXRhKFtlXSk/KHRoaXMuZGF0YS5hZGQodGhpcy5kYXRhLm5ld09wdGlvbihlKSksdGhpcy5zZWxlY3QuY3JlYXRlKHRoaXMuZGF0YS5kYXRhKSx0aGlzLmRhdGEucGFyc2VTZWxlY3REYXRhKCksdGhpcy5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHRoaXMucmVuZGVyKCkpOmNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIHByb2JsZW0gb246ICNcIit0aGlzLnNlbGVjdC5lbGVtZW50LmlkKX0sYy5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5jb25maWcuaXNFbmFibGVkJiYhdGhpcy5kYXRhLmNvbnRlbnRPcGVuKXtpZih0aGlzLmJlZm9yZU9wZW4mJnRoaXMuYmVmb3JlT3BlbigpLHRoaXMuY29uZmlnLmlzTXVsdGlwbGUmJnRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkP3RoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LmFkZChcInNzLWNyb3NzXCIpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmKHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LWRvd25cIiksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmFycm93SWNvbi5hcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctdXBcIikpLHRoaXMuc2xpbVt0aGlzLmNvbmZpZy5pc011bHRpcGxlP1wibXVsdGlTZWxlY3RlZFwiOlwic2luZ2xlU2VsZWN0ZWRcIl0uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm92ZVwiPT09dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj90aGlzLmNvbmZpZy5vcGVuQWJvdmU6dGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLmNvbmZpZy5hZGRUb0JvZHkpe3ZhciB0PXRoaXMuc2xpbS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dGhpcy5zbGltLmNvbnRlbnQuc3R5bGUudG9wPXQudG9wK3QuaGVpZ2h0K3dpbmRvdy5zY3JvbGxZK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS5sZWZ0PXQubGVmdCt3aW5kb3cuc2Nyb2xsWCtcInB4XCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUud2lkdGg9dC53aWR0aCtcInB4XCJ9aWYodGhpcy5zbGltLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vcGVuKSxcInVwXCI9PT10aGlzLmNvbmZpZy5zaG93Q29udGVudC50b0xvd2VyQ2FzZSgpP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOlwiZG93blwiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQudG9Mb3dlckNhc2UoKT90aGlzLm1vdmVDb250ZW50QmVsb3coKTpcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodGhpcy5zbGltLmNvbnRlbnQsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbix0aGlzLmRhdGEuY29udGVudE9wZW4pP3RoaXMubW92ZUNvbnRlbnRBYm92ZSgpOnRoaXMubW92ZUNvbnRlbnRCZWxvdygpLCF0aGlzLmNvbmZpZy5pc011bHRpcGxlKXt2YXIgaT10aGlzLmRhdGEuZ2V0U2VsZWN0ZWQoKTtpZihpKXt2YXIgcz1pLmlkLG49dGhpcy5zbGltLmxpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCInK3MrJ1wiXScpO24mJmwuZW5zdXJlRWxlbWVudEluVmlldyh0aGlzLnNsaW0ubGlzdCxuKX19c2V0VGltZW91dChmdW5jdGlvbigpe2UuZGF0YS5jb250ZW50T3Blbj0hMCxlLmNvbmZpZy5zZWFyY2hGb2N1cyYmZS5zbGltLnNlYXJjaC5pbnB1dC5mb2N1cygpLGUuYWZ0ZXJPcGVuJiZlLmFmdGVyT3BlbigpfSx0aGlzLmNvbmZpZy50aW1lb3V0RGVsYXkpfX0sYy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuZGF0YS5jb250ZW50T3BlbiYmKHRoaXMuYmVmb3JlQ2xvc2UmJnRoaXMuYmVmb3JlQ2xvc2UoKSx0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD8odGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZC5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQmVsb3cpLHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLnBsdXMuY2xhc3NMaXN0LnJlbW92ZShcInNzLWNyb3NzXCIpKTp0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQmJih0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkFib3ZlKSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub3BlbkJlbG93KSx0aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuYXJyb3dJY29uLmFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLHRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZC5hcnJvd0ljb24uYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImFycm93LXVwXCIpKSx0aGlzLnNsaW0uY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW4pLHRoaXMuZGF0YS5jb250ZW50T3Blbj0hMSx0aGlzLnNlYXJjaChcIlwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5zbGltLmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksZS5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsZS5jb25maWcuaXNNdWx0aXBsZSYmZS5zbGltLm11bHRpU2VsZWN0ZWQ/KGUuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZS5jb25maWcub3BlbkJlbG93KSk6ZS5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5BYm92ZSksZS5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGUuY29uZmlnLm9wZW5CZWxvdykpLGUuc2xpbS5zZWFyY2guaW5wdXQuYmx1cigpLGUuYWZ0ZXJDbG9zZSYmZS5hZnRlckNsb3NlKCl9LHRoaXMuY29uZmlnLnRpbWVvdXREZWxheSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEFib3ZlPWZ1bmN0aW9uKCl7dmFyIGU9MDt0aGlzLmNvbmZpZy5pc011bHRpcGxlJiZ0aGlzLnNsaW0ubXVsdGlTZWxlY3RlZD9lPXRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYoZT10aGlzLnNsaW0uc2luZ2xlU2VsZWN0ZWQuY29udGFpbmVyLm9mZnNldEhlaWdodCk7dmFyIHQ9ZSt0aGlzLnNsaW0uY29udGVudC5vZmZzZXRIZWlnaHQtMTt0aGlzLnNsaW0uY29udGVudC5zdHlsZS5tYXJnaW49XCItXCIrdCtcInB4IDAgMCAwXCIsdGhpcy5zbGltLmNvbnRlbnQuc3R5bGUuaGVpZ2h0PXQtZSsxK1wicHhcIix0aGlzLnNsaW0uY29udGVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49XCJjZW50ZXIgYm90dG9tXCIsdGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImFib3ZlXCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkFib3ZlKSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5CZWxvdyksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5BYm92ZSkpfSxjLnByb3RvdHlwZS5tb3ZlQ29udGVudEJlbG93PWZ1bmN0aW9uKCl7dGhpcy5kYXRhLmNvbnRlbnRQb3NpdGlvbj1cImJlbG93XCIsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/KHRoaXMuc2xpbS5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub3BlbkJlbG93KSk6dGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9wZW5BYm92ZSksdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5CZWxvdykpfSxjLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITAsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSExLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITEsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmNvbmZpZy5pc0VuYWJsZWQ9ITEsdGhpcy5jb25maWcuaXNNdWx0aXBsZSYmdGhpcy5zbGltLm11bHRpU2VsZWN0ZWQ/dGhpcy5zbGltLm11bHRpU2VsZWN0ZWQuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuZGlzYWJsZWQpOnRoaXMuc2xpbS5zaW5nbGVTZWxlY3RlZCYmdGhpcy5zbGltLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmRpc2FibGVkKSx0aGlzLnNlbGVjdC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlcj0hMSx0aGlzLnNlbGVjdC5lbGVtZW50LmRpc2FibGVkPSEwLHRoaXMuc2xpbS5zZWFyY2guaW5wdXQuZGlzYWJsZWQ9ITAsdGhpcy5zZWxlY3QudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITB9LGMucHJvdG90eXBlLnNlYXJjaD1mdW5jdGlvbih0KXtpZih0aGlzLmRhdGEuc2VhcmNoVmFsdWUhPT10KWlmKHRoaXMuc2xpbS5zZWFyY2guaW5wdXQudmFsdWU9dCx0aGlzLmNvbmZpZy5pc0FqYXgpe3ZhciBpPXRoaXM7dGhpcy5jb25maWcuaXNTZWFyY2hpbmc9ITAsdGhpcy5yZW5kZXIoKSx0aGlzLmFqYXgmJnRoaXMuYWpheCh0LGZ1bmN0aW9uKGUpe2kuY29uZmlnLmlzU2VhcmNoaW5nPSExLEFycmF5LmlzQXJyYXkoZSk/KGUudW5zaGlmdCh7dGV4dDpcIlwiLHBsYWNlaG9sZGVyOiEwfSksaS5zZXREYXRhKGUpLGkuZGF0YS5zZWFyY2godCksaS5yZW5kZXIoKSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/aS5zbGltLm9wdGlvbnMoZSk6aS5yZW5kZXIoKX0pfWVsc2UgdGhpcy5kYXRhLnNlYXJjaCh0KSx0aGlzLnJlbmRlcigpfSxjLnByb3RvdHlwZS5zZXRTZWFyY2hUZXh0PWZ1bmN0aW9uKGUpe3RoaXMuY29uZmlnLnNlYXJjaFRleHQ9ZX0sYy5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dGhpcy5jb25maWcuaXNNdWx0aXBsZT90aGlzLnNsaW0udmFsdWVzKCk6KHRoaXMuc2xpbS5wbGFjZWhvbGRlcigpLHRoaXMuc2xpbS5kZXNlbGVjdCgpKSx0aGlzLnNsaW0ub3B0aW9ucygpfSxjLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPW51bGwpO3ZhciB0PWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLW1haW5cIik6dGhpcy5zbGltLmNvbnRhaW5lcixpPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNzaWQ9XCIrZStcIl1cIik6dGhpcy5zZWxlY3QuZWxlbWVudDtpZih0JiZpJiYoaS5zdHlsZS5kaXNwbGF5PVwiXCIsZGVsZXRlIGkuZGF0YXNldC5zc2lkLGkuc2xpbT1udWxsLHQucGFyZW50RWxlbWVudCYmdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHQpLHRoaXMuY29uZmlnLmFkZFRvQm9keSkpe3ZhciBzPWU/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitlK1wiLnNzLWNvbnRlbnRcIik6dGhpcy5zbGltLmNvbnRlbnQ7aWYoIXMpcmV0dXJuO2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocyl9fSxjKTtmdW5jdGlvbiBjKGUpe3ZhciB0PXRoaXM7dGhpcy5hamF4PW51bGwsdGhpcy5hZGRhYmxlPW51bGwsdGhpcy5iZWZvcmVPbkNoYW5nZT1udWxsLHRoaXMub25DaGFuZ2U9bnVsbCx0aGlzLmJlZm9yZU9wZW49bnVsbCx0aGlzLmFmdGVyT3Blbj1udWxsLHRoaXMuYmVmb3JlQ2xvc2U9bnVsbCx0aGlzLmFmdGVyQ2xvc2U9bnVsbDt2YXIgaT10aGlzLnZhbGlkYXRlKGUpO2kuZGF0YXNldC5zc2lkJiZ0aGlzLmRlc3Ryb3koaS5kYXRhc2V0LnNzaWQpLGUuYWpheCYmKHRoaXMuYWpheD1lLmFqYXgpLGUuYWRkYWJsZSYmKHRoaXMuYWRkYWJsZT1lLmFkZGFibGUpLHRoaXMuY29uZmlnPW5ldyBzLkNvbmZpZyh7c2VsZWN0OmksaXNBamF4OiEhZS5hamF4LHNob3dTZWFyY2g6ZS5zaG93U2VhcmNoLHNlYXJjaFBsYWNlaG9sZGVyOmUuc2VhcmNoUGxhY2Vob2xkZXIsc2VhcmNoVGV4dDplLnNlYXJjaFRleHQsc2VhcmNoaW5nVGV4dDplLnNlYXJjaGluZ1RleHQsc2VhcmNoRm9jdXM6ZS5zZWFyY2hGb2N1cyxzZWFyY2hIaWdobGlnaHQ6ZS5zZWFyY2hIaWdobGlnaHQsc2VhcmNoRmlsdGVyOmUuc2VhcmNoRmlsdGVyLGNsb3NlT25TZWxlY3Q6ZS5jbG9zZU9uU2VsZWN0LHNob3dDb250ZW50OmUuc2hvd0NvbnRlbnQscGxhY2Vob2xkZXJUZXh0OmUucGxhY2Vob2xkZXIsYWxsb3dEZXNlbGVjdDplLmFsbG93RGVzZWxlY3QsYWxsb3dEZXNlbGVjdE9wdGlvbjplLmFsbG93RGVzZWxlY3RPcHRpb24saGlkZVNlbGVjdGVkT3B0aW9uOmUuaGlkZVNlbGVjdGVkT3B0aW9uLGRlc2VsZWN0TGFiZWw6ZS5kZXNlbGVjdExhYmVsLGlzRW5hYmxlZDplLmlzRW5hYmxlZCx2YWx1ZXNVc2VUZXh0OmUudmFsdWVzVXNlVGV4dCxzaG93T3B0aW9uVG9vbHRpcHM6ZS5zaG93T3B0aW9uVG9vbHRpcHMsc2VsZWN0QnlHcm91cDplLnNlbGVjdEJ5R3JvdXAsbGltaXQ6ZS5saW1pdCx0aW1lb3V0RGVsYXk6ZS50aW1lb3V0RGVsYXksYWRkVG9Cb2R5OmUuYWRkVG9Cb2R5fSksdGhpcy5zZWxlY3Q9bmV3IG4uU2VsZWN0KHtzZWxlY3Q6aSxtYWluOnRoaXN9KSx0aGlzLmRhdGE9bmV3IG8uRGF0YSh7bWFpbjp0aGlzfSksdGhpcy5zbGltPW5ldyBhLlNsaW0oe21haW46dGhpc30pLHRoaXMuc2VsZWN0LmVsZW1lbnQucGFyZW50Tm9kZSYmdGhpcy5zZWxlY3QuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnNsaW0uY29udGFpbmVyLHRoaXMuc2VsZWN0LmVsZW1lbnQubmV4dFNpYmxpbmcpLGUuZGF0YT90aGlzLnNldERhdGEoZS5kYXRhKTp0aGlzLnJlbmRlcigpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UudGFyZ2V0JiYhbC5oYXNDbGFzc0luVHJlZShlLnRhcmdldCx0LmNvbmZpZy5pZCkmJnQuY2xvc2UoKX0pLFwiYXV0b1wiPT09dGhpcy5jb25maWcuc2hvd0NvbnRlbnQmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbC5kZWJvdW5jZShmdW5jdGlvbihlKXt0LmRhdGEuY29udGVudE9wZW4mJihcImFib3ZlXCI9PT1sLnB1dENvbnRlbnQodC5zbGltLmNvbnRlbnQsdC5kYXRhLmNvbnRlbnRQb3NpdGlvbix0LmRhdGEuY29udGVudE9wZW4pP3QubW92ZUNvbnRlbnRBYm92ZSgpOnQubW92ZUNvbnRlbnRCZWxvdygpKX0pLCExKSxlLmJlZm9yZU9uQ2hhbmdlJiYodGhpcy5iZWZvcmVPbkNoYW5nZT1lLmJlZm9yZU9uQ2hhbmdlKSxlLm9uQ2hhbmdlJiYodGhpcy5vbkNoYW5nZT1lLm9uQ2hhbmdlKSxlLmJlZm9yZU9wZW4mJih0aGlzLmJlZm9yZU9wZW49ZS5iZWZvcmVPcGVuKSxlLmFmdGVyT3BlbiYmKHRoaXMuYWZ0ZXJPcGVuPWUuYWZ0ZXJPcGVuKSxlLmJlZm9yZUNsb3NlJiYodGhpcy5iZWZvcmVDbG9zZT1lLmJlZm9yZUNsb3NlKSxlLmFmdGVyQ2xvc2UmJih0aGlzLmFmdGVyQ2xvc2U9ZS5hZnRlckNsb3NlKSx0aGlzLmNvbmZpZy5pc0VuYWJsZWR8fHRoaXMuZGlzYWJsZSgpfXQuZGVmYXVsdD1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZWFyY2hGaWx0ZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4tMSE9PWUudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodC50b0xvd2VyQ2FzZSgpKX0sbik7ZnVuY3Rpb24gbihlKXt0aGlzLmlkPVwiXCIsdGhpcy5pc011bHRpcGxlPSExLHRoaXMuaXNBamF4PSExLHRoaXMuaXNTZWFyY2hpbmc9ITEsdGhpcy5zaG93U2VhcmNoPSEwLHRoaXMuc2VhcmNoRm9jdXM9ITAsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITEsdGhpcy5jbG9zZU9uU2VsZWN0PSEwLHRoaXMuc2hvd0NvbnRlbnQ9XCJhdXRvXCIsdGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1cIlNlYXJjaFwiLHRoaXMuc2VhcmNoVGV4dD1cIk5vIFJlc3VsdHNcIix0aGlzLnNlYXJjaGluZ1RleHQ9XCJTZWFyY2hpbmcuLi5cIix0aGlzLnBsYWNlaG9sZGVyVGV4dD1cIlNlbGVjdCBWYWx1ZVwiLHRoaXMuYWxsb3dEZXNlbGVjdD0hMSx0aGlzLmFsbG93RGVzZWxlY3RPcHRpb249ITEsdGhpcy5oaWRlU2VsZWN0ZWRPcHRpb249ITEsdGhpcy5kZXNlbGVjdExhYmVsPVwieFwiLHRoaXMuaXNFbmFibGVkPSEwLHRoaXMudmFsdWVzVXNlVGV4dD0hMSx0aGlzLnNob3dPcHRpb25Ub29sdGlwcz0hMSx0aGlzLnNlbGVjdEJ5R3JvdXA9ITEsdGhpcy5saW1pdD0wLHRoaXMudGltZW91dERlbGF5PTIwMCx0aGlzLmFkZFRvQm9keT0hMSx0aGlzLm1haW49XCJzcy1tYWluXCIsdGhpcy5zaW5nbGVTZWxlY3RlZD1cInNzLXNpbmdsZS1zZWxlY3RlZFwiLHRoaXMuYXJyb3c9XCJzcy1hcnJvd1wiLHRoaXMubXVsdGlTZWxlY3RlZD1cInNzLW11bHRpLXNlbGVjdGVkXCIsdGhpcy5hZGQ9XCJzcy1hZGRcIix0aGlzLnBsdXM9XCJzcy1wbHVzXCIsdGhpcy52YWx1ZXM9XCJzcy12YWx1ZXNcIix0aGlzLnZhbHVlPVwic3MtdmFsdWVcIix0aGlzLnZhbHVlVGV4dD1cInNzLXZhbHVlLXRleHRcIix0aGlzLnZhbHVlRGVsZXRlPVwic3MtdmFsdWUtZGVsZXRlXCIsdGhpcy5jb250ZW50PVwic3MtY29udGVudFwiLHRoaXMub3Blbj1cInNzLW9wZW5cIix0aGlzLm9wZW5BYm92ZT1cInNzLW9wZW4tYWJvdmVcIix0aGlzLm9wZW5CZWxvdz1cInNzLW9wZW4tYmVsb3dcIix0aGlzLnNlYXJjaD1cInNzLXNlYXJjaFwiLHRoaXMuc2VhcmNoSGlnaGxpZ2h0ZXI9XCJzcy1zZWFyY2gtaGlnaGxpZ2h0XCIsdGhpcy5hZGRhYmxlPVwic3MtYWRkYWJsZVwiLHRoaXMubGlzdD1cInNzLWxpc3RcIix0aGlzLm9wdGdyb3VwPVwic3Mtb3B0Z3JvdXBcIix0aGlzLm9wdGdyb3VwTGFiZWw9XCJzcy1vcHRncm91cC1sYWJlbFwiLHRoaXMub3B0Z3JvdXBMYWJlbFNlbGVjdGFibGU9XCJzcy1vcHRncm91cC1sYWJlbC1zZWxlY3RhYmxlXCIsdGhpcy5vcHRpb249XCJzcy1vcHRpb25cIix0aGlzLm9wdGlvblNlbGVjdGVkPVwic3Mtb3B0aW9uLXNlbGVjdGVkXCIsdGhpcy5oaWdobGlnaHRlZD1cInNzLWhpZ2hsaWdodGVkXCIsdGhpcy5kaXNhYmxlZD1cInNzLWRpc2FibGVkXCIsdGhpcy5oaWRlPVwic3MtaGlkZVwiLHRoaXMuaWQ9XCJzcy1cIitNYXRoLmZsb29yKDFlNSpNYXRoLnJhbmRvbSgpKSx0aGlzLnN0eWxlPWUuc2VsZWN0LnN0eWxlLmNzc1RleHQsdGhpcy5jbGFzcz1lLnNlbGVjdC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLHRoaXMuaXNNdWx0aXBsZT1lLnNlbGVjdC5tdWx0aXBsZSx0aGlzLmlzQWpheD1lLmlzQWpheCx0aGlzLnNob3dTZWFyY2g9ITEhPT1lLnNob3dTZWFyY2gsdGhpcy5zZWFyY2hGb2N1cz0hMSE9PWUuc2VhcmNoRm9jdXMsdGhpcy5zZWFyY2hIaWdobGlnaHQ9ITA9PT1lLnNlYXJjaEhpZ2hsaWdodCx0aGlzLmNsb3NlT25TZWxlY3Q9ITEhPT1lLmNsb3NlT25TZWxlY3QsZS5zaG93Q29udGVudCYmKHRoaXMuc2hvd0NvbnRlbnQ9ZS5zaG93Q29udGVudCksdGhpcy5pc0VuYWJsZWQ9ITEhPT1lLmlzRW5hYmxlZCxlLnNlYXJjaFBsYWNlaG9sZGVyJiYodGhpcy5zZWFyY2hQbGFjZWhvbGRlcj1lLnNlYXJjaFBsYWNlaG9sZGVyKSxlLnNlYXJjaFRleHQmJih0aGlzLnNlYXJjaFRleHQ9ZS5zZWFyY2hUZXh0KSxlLnNlYXJjaGluZ1RleHQmJih0aGlzLnNlYXJjaGluZ1RleHQ9ZS5zZWFyY2hpbmdUZXh0KSxlLnBsYWNlaG9sZGVyVGV4dCYmKHRoaXMucGxhY2Vob2xkZXJUZXh0PWUucGxhY2Vob2xkZXJUZXh0KSx0aGlzLmFsbG93RGVzZWxlY3Q9ITA9PT1lLmFsbG93RGVzZWxlY3QsdGhpcy5hbGxvd0Rlc2VsZWN0T3B0aW9uPSEwPT09ZS5hbGxvd0Rlc2VsZWN0T3B0aW9uLHRoaXMuaGlkZVNlbGVjdGVkT3B0aW9uPSEwPT09ZS5oaWRlU2VsZWN0ZWRPcHRpb24sZS5kZXNlbGVjdExhYmVsJiYodGhpcy5kZXNlbGVjdExhYmVsPWUuZGVzZWxlY3RMYWJlbCksZS52YWx1ZXNVc2VUZXh0JiYodGhpcy52YWx1ZXNVc2VUZXh0PWUudmFsdWVzVXNlVGV4dCksZS5zaG93T3B0aW9uVG9vbHRpcHMmJih0aGlzLnNob3dPcHRpb25Ub29sdGlwcz1lLnNob3dPcHRpb25Ub29sdGlwcyksZS5zZWxlY3RCeUdyb3VwJiYodGhpcy5zZWxlY3RCeUdyb3VwPWUuc2VsZWN0QnlHcm91cCksZS5saW1pdCYmKHRoaXMubGltaXQ9ZS5saW1pdCksZS5zZWFyY2hGaWx0ZXImJih0aGlzLnNlYXJjaEZpbHRlcj1lLnNlYXJjaEZpbHRlciksbnVsbCE9ZS50aW1lb3V0RGVsYXkmJih0aGlzLnRpbWVvdXREZWxheT1lLnRpbWVvdXREZWxheSksdGhpcy5hZGRUb0JvZHk9ITA9PT1lLmFkZFRvQm9keX10LkNvbmZpZz1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwO3ZhciBzPShuLnByb3RvdHlwZS5zZXRWYWx1ZT1mdW5jdGlvbigpe2lmKHRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkpe2lmKHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZSlmb3IodmFyIGU9dGhpcy5tYWluLmRhdGEuZ2V0U2VsZWN0ZWQoKSx0PTAsaT10aGlzLmVsZW1lbnQub3B0aW9uczt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtzLnNlbGVjdGVkPSExO2Zvcih2YXIgbj0wLGE9ZTtuPGEubGVuZ3RoO24rKylhW25dLnZhbHVlPT09cy52YWx1ZSYmKHMuc2VsZWN0ZWQ9ITApfWVsc2UgZT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHRoaXMuZWxlbWVudC52YWx1ZT1lP2UudmFsdWU6XCJcIjt0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMSx0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSx0aGlzLm1haW4uZGF0YS5pc09uQ2hhbmdlRW5hYmxlZD0hMH19LG4ucHJvdG90eXBlLmFkZEF0dHJpYnV0ZXM9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQudGFiSW5kZXg9LTEsdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5lbGVtZW50LmRhdGFzZXQuc3NpZD10aGlzLm1haW4uY29uZmlnLmlkfSxuLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5zZXRTZWxlY3RlZEZyb21TZWxlY3QoKSx0Lm1haW4ucmVuZGVyKCl9KX0sbi5wcm90b3R5cGUuYWRkTXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5tYWluLmNvbmZpZy5pc0FqYXh8fCh0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7dC50cmlnZ2VyTXV0YXRpb25PYnNlcnZlciYmKHQubWFpbi5kYXRhLnBhcnNlU2VsZWN0RGF0YSgpLHQubWFpbi5kYXRhLnNldFNlbGVjdGVkRnJvbVNlbGVjdCgpLHQubWFpbi5yZW5kZXIoKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7XCJjbGFzc1wiPT09ZS5hdHRyaWJ1dGVOYW1lJiZ0Lm1haW4uc2xpbS51cGRhdGVDb250YWluZXJEaXZDbGFzcyh0Lm1haW4uc2xpbS5jb250YWluZXIpfSkpfSksdGhpcy5vYnNlcnZlTXV0YXRpb25PYnNlcnZlcigpKX0sbi5wcm90b3R5cGUub2JzZXJ2ZU11dGF0aW9uT2JzZXJ2ZXI9ZnVuY3Rpb24oKXt0aGlzLm11dGF0aW9uT2JzZXJ2ZXImJnRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCx7YXR0cmlidXRlczohMCxjaGlsZExpc3Q6ITAsY2hhcmFjdGVyRGF0YTohMH0pfSxuLnByb3RvdHlwZS5kaXNjb25uZWN0TXV0YXRpb25PYnNlcnZlcj1mdW5jdGlvbigpe3RoaXMubXV0YXRpb25PYnNlcnZlciYmdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKX0sbi5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5pbm5lckhUTUw9XCJcIjtmb3IodmFyIHQ9MCxpPWU7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07aWYocy5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpe3ZhciBuPXMsYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7aWYoYS5sYWJlbD1uLmxhYmVsLG4ub3B0aW9ucylmb3IodmFyIG89MCxsPW4ub3B0aW9ucztvPGwubGVuZ3RoO28rKyl7dmFyIHI9bFtvXTthLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlT3B0aW9uKHIpKX10aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYSl9ZWxzZSB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVPcHRpb24ocykpfX0sbi5wcm90b3R5cGUuY3JlYXRlT3B0aW9uPWZ1bmN0aW9uKHQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7cmV0dXJuIGkudmFsdWU9dC52YWx1ZXx8dC50ZXh0LGkuaW5uZXJIVE1MPXQuaW5uZXJIVE1MfHx0LnRleHQsdC5zZWxlY3RlZCYmKGkuc2VsZWN0ZWQ9dC5zZWxlY3RlZCksdC5kaXNhYmxlZCYmKGkuZGlzYWJsZWQ9ITApLHQucGxhY2Vob2xkZXImJmkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiLFwidHJ1ZVwiKSx0LmNsYXNzJiZ0LmNsYXNzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuY2xhc3NMaXN0LmFkZChlKX0pLHQuZGF0YSYmXCJvYmplY3RcIj09dHlwZW9mIHQuZGF0YSYmT2JqZWN0LmtleXModC5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2kuc2V0QXR0cmlidXRlKFwiZGF0YS1cIitlLHQuZGF0YVtlXSl9KSxpfSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMudHJpZ2dlck11dGF0aW9uT2JzZXJ2ZXI9ITAsdGhpcy5lbGVtZW50PWUuc2VsZWN0LHRoaXMubWFpbj1lLm1haW4sdGhpcy5lbGVtZW50LmRpc2FibGVkJiYodGhpcy5tYWluLmNvbmZpZy5pc0VuYWJsZWQ9ITEpLHRoaXMuYWRkQXR0cmlidXRlcygpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLm11dGF0aW9uT2JzZXJ2ZXI9bnVsbCx0aGlzLmFkZE11dGF0aW9uT2JzZXJ2ZXIoKSx0aGlzLmVsZW1lbnQuc2xpbT1lLm1haW59dC5TZWxlY3Q9c30sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMDt2YXIgYT1pKDApLG89aSgxKSxzPShuLnByb3RvdHlwZS5jb250YWluZXJEaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLnN0eWxlLmNzc1RleHQ9dGhpcy5tYWluLmNvbmZpZy5zdHlsZSx0aGlzLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzKGUpLGV9LG4ucHJvdG90eXBlLnVwZGF0ZUNvbnRhaW5lckRpdkNsYXNzPWZ1bmN0aW9uKGUpe3RoaXMubWFpbi5jb25maWcuY2xhc3M9dGhpcy5tYWluLnNlbGVjdC5lbGVtZW50LmNsYXNzTmFtZS5zcGxpdChcIiBcIiksZS5jbGFzc05hbWU9XCJcIixlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5pZCksZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcubWFpbik7Zm9yKHZhciB0PTAsaT10aGlzLm1haW4uY29uZmlnLmNsYXNzO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO1wiXCIhPT1zLnRyaW0oKSYmZS5jbGFzc0xpc3QuYWRkKHMpfX0sbi5wcm90b3R5cGUuc2luZ2xlU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zaW5nbGVTZWxlY3RlZCk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7aS5jbGFzc0xpc3QuYWRkKFwicGxhY2Vob2xkZXJcIiksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLmRlc2VsZWN0TGFiZWwscy5jbGFzc0xpc3QuYWRkKFwic3MtZGVzZWxlY3RcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdC5tYWluLmNvbmZpZy5pc0VuYWJsZWQmJnQubWFpbi5zZXQoXCJcIil9LGUuYXBwZW5kQ2hpbGQocyk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuYXJyb3cpO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiBhLmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpLG4uYXBwZW5kQ2hpbGQoYSksZS5hcHBlbmRDaGlsZChuKSxlLm9uY2xpY2s9ZnVuY3Rpb24oKXt0Lm1haW4uY29uZmlnLmlzRW5hYmxlZCYmKHQubWFpbi5kYXRhLmNvbnRlbnRPcGVuP3QubWFpbi5jbG9zZSgpOnQubWFpbi5vcGVuKCkpfSx7Y29udGFpbmVyOmUscGxhY2Vob2xkZXI6aSxkZXNlbGVjdDpzLGFycm93SWNvbjp7Y29udGFpbmVyOm4sYXJyb3c6YX19fSxuLnByb3RvdHlwZS5wbGFjZWhvbGRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMubWFpbi5kYXRhLmdldFNlbGVjdGVkKCk7aWYobnVsbD09PWV8fGUmJmUucGxhY2Vob2xkZXIpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3QuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnBsYWNlaG9sZGVyVGV4dCx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9dC5vdXRlckhUTUwpfWVsc2V7dmFyIGk9XCJcIjtlJiYoaT1lLmlubmVySFRNTCYmITAhPT10aGlzLm1haW4uY29uZmlnLnZhbHVlc1VzZVRleHQ/ZS5pbm5lckhUTUw6ZS50ZXh0KSx0aGlzLnNpbmdsZVNlbGVjdGVkJiYodGhpcy5zaW5nbGVTZWxlY3RlZC5wbGFjZWhvbGRlci5pbm5lckhUTUw9ZT9pOlwiXCIpfX0sbi5wcm90b3R5cGUuZGVzZWxlY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLnNpbmdsZVNlbGVjdGVkKXtpZighdGhpcy5tYWluLmNvbmZpZy5hbGxvd0Rlc2VsZWN0KXJldHVybiB2b2lkIHRoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik7XCJcIj09PXRoaXMubWFpbi5zZWxlY3RlZCgpP3RoaXMuc2luZ2xlU2VsZWN0ZWQuZGVzZWxlY3QuY2xhc3NMaXN0LmFkZChcInNzLWhpZGVcIik6dGhpcy5zaW5nbGVTZWxlY3RlZC5kZXNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic3MtaGlkZVwiKX19LG4ucHJvdG90eXBlLm11bHRpU2VsZWN0ZWREaXY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5tdWx0aVNlbGVjdGVkKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlcyksZS5hcHBlbmRDaGlsZChpKTt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZCk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIG4uY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnBsdXMpLG4ub25jbGljaz1mdW5jdGlvbihlKXt0Lm1haW4uZGF0YS5jb250ZW50T3BlbiYmKHQubWFpbi5jbG9zZSgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpfSxzLmFwcGVuZENoaWxkKG4pLGUuYXBwZW5kQ2hpbGQocyksZS5vbmNsaWNrPWZ1bmN0aW9uKGUpe3QubWFpbi5jb25maWcuaXNFbmFibGVkJiYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHQubWFpbi5jb25maWcudmFsdWVEZWxldGUpfHwodC5tYWluLmRhdGEuY29udGVudE9wZW4/dC5tYWluLmNsb3NlKCk6dC5tYWluLm9wZW4oKSkpfSx7Y29udGFpbmVyOmUsdmFsdWVzOmksYWRkOnMscGx1czpufX0sbi5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKCl7aWYodGhpcy5tdWx0aVNlbGVjdGVkKXtmb3IodmFyIGUsdD10aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmNoaWxkTm9kZXMsaT10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLHM9W10sbj0wLGE9dDtuPGEubGVuZ3RoO24rKyl7dmFyIG89YVtuXTtlPSEwO2Zvcih2YXIgbD0wLHI9aTtsPHIubGVuZ3RoO2wrKyl7dmFyIGM9cltsXTtTdHJpbmcoYy5pZCk9PT1TdHJpbmcoby5kYXRhc2V0LmlkKSYmKGU9ITEpfWUmJnMucHVzaChvKX1mb3IodmFyIGQ9MCxoPXM7ZDxoLmxlbmd0aDtkKyspe3ZhciB1PWhbZF07dS5jbGFzc0xpc3QuYWRkKFwic3Mtb3V0XCIpLHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMucmVtb3ZlQ2hpbGQodSl9Zm9yKHQ9dGhpcy5tdWx0aVNlbGVjdGVkLnZhbHVlcy5jaGlsZE5vZGVzLGM9MDtjPGkubGVuZ3RoO2MrKyl7ZT0hMTtmb3IodmFyIHA9MCxtPXQ7cDxtLmxlbmd0aDtwKyspbz1tW3BdLFN0cmluZyhpW2NdLmlkKT09PVN0cmluZyhvLmRhdGFzZXQuaWQpJiYoZT0hMCk7ZXx8KDAhPT10Lmxlbmd0aCYmSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudD8wPT09Yz90aGlzLm11bHRpU2VsZWN0ZWQudmFsdWVzLmluc2VydEJlZm9yZSh0aGlzLnZhbHVlRGl2KGlbY10pLHRbY10pOnRbYy0xXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLHRoaXMudmFsdWVEaXYoaVtjXSkpOnRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuYXBwZW5kQ2hpbGQodGhpcy52YWx1ZURpdihpW2NdKSkpfWlmKDA9PT1pLmxlbmd0aCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Zi5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuZGlzYWJsZWQpLGYuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcucGxhY2Vob2xkZXJUZXh0LHRoaXMubXVsdGlTZWxlY3RlZC52YWx1ZXMuaW5uZXJIVE1MPWYub3V0ZXJIVE1MfX19LG4ucHJvdG90eXBlLnZhbHVlRGl2PWZ1bmN0aW9uKGEpe3ZhciBvPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLnZhbHVlKSxlLmRhdGFzZXQuaWQ9YS5pZDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy52YWx1ZVRleHQpLHQuaW5uZXJIVE1MPWEuaW5uZXJIVE1MJiYhMCE9PXRoaXMubWFpbi5jb25maWcudmFsdWVzVXNlVGV4dD9hLmlubmVySFRNTDphLnRleHQsZS5hcHBlbmRDaGlsZCh0KTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gaS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcudmFsdWVEZWxldGUpLGkuaW5uZXJIVE1MPXRoaXMubWFpbi5jb25maWcuZGVzZWxlY3RMYWJlbCxpLm9uY2xpY2s9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ITE7aWYoby5tYWluLmNvbmZpZy5pc0VuYWJsZWQpe2lmKG8ubWFpbi5iZWZvcmVPbkNoYW5nZXx8KHQ9ITApLG8ubWFpbi5iZWZvcmVPbkNoYW5nZSl7Zm9yKHZhciBpPW8ubWFpbi5kYXRhLmdldFNlbGVjdGVkKCkscz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkpKSxuPTA7bjxzLmxlbmd0aDtuKyspc1tuXS5pZD09PWEuaWQmJnMuc3BsaWNlKG4sMSk7ITEhPT1vLm1haW4uYmVmb3JlT25DaGFuZ2UocykmJih0PSEwKX10JiYoby5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKGEuaWQsXCJpZFwiKSxvLm1haW4ucmVuZGVyKCksby5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLG8ubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKX19LGUuYXBwZW5kQ2hpbGQoaSksZX0sbi5wcm90b3R5cGUuY29udGVudERpdj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmNvbnRlbnQpLGV9LG4ucHJvdG90eXBlLnNlYXJjaERpdj1mdW5jdGlvbigpe3ZhciBuPXRoaXMsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5zZWFyY2gpO3ZhciB0PXtjb250YWluZXI6ZSxpbnB1dDpzfTtyZXR1cm4gdGhpcy5tYWluLmNvbmZpZy5zaG93U2VhcmNofHwoZS5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkscy5yZWFkT25seT0hMCkscy50eXBlPVwic2VhcmNoXCIscy5wbGFjZWhvbGRlcj10aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyLHMudGFiSW5kZXg9MCxzLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix0aGlzLm1haW4uY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jYXBpdGFsaXplXCIsXCJvZmZcIikscy5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIixcIm9mZlwiKSxzLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsXCJvZmZcIikscy5vbmNsaWNrPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcIlwiPT09ZS50YXJnZXQudmFsdWUmJm4ubWFpbi5zZWFyY2goXCJcIil9LDEwKX0scy5vbmtleWRvd249ZnVuY3Rpb24oZSl7XCJBcnJvd1VwXCI9PT1lLmtleT8obi5tYWluLm9wZW4oKSxuLmhpZ2hsaWdodFVwKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIkFycm93RG93blwiPT09ZS5rZXk/KG4ubWFpbi5vcGVuKCksbi5oaWdobGlnaHREb3duKCksZS5wcmV2ZW50RGVmYXVsdCgpKTpcIlRhYlwiPT09ZS5rZXk/bi5tYWluLmRhdGEuY29udGVudE9wZW4/bi5tYWluLmNsb3NlKCk6c2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSxuLm1haW4uY29uZmlnLnRpbWVvdXREZWxheSk6XCJFbnRlclwiPT09ZS5rZXkmJmUucHJldmVudERlZmF1bHQoKX0scy5vbmtleXVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O2lmKFwiRW50ZXJcIj09PWUua2V5KXtpZihuLm1haW4uYWRkYWJsZSYmZS5jdHJsS2V5KXJldHVybiBhLmNsaWNrKCksZS5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgaT1uLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIituLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKTtpJiZpLmNsaWNrKCl9ZWxzZVwiQXJyb3dVcFwiPT09ZS5rZXl8fFwiQXJyb3dEb3duXCI9PT1lLmtleXx8KFwiRXNjYXBlXCI9PT1lLmtleT9uLm1haW4uY2xvc2UoKTpuLm1haW4uY29uZmlnLnNob3dTZWFyY2gmJm4ubWFpbi5kYXRhLmNvbnRlbnRPcGVuP24ubWFpbi5zZWFyY2godC52YWx1ZSk6cy52YWx1ZT1cIlwiKTtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKX0scy5vbmZvY3VzPWZ1bmN0aW9uKCl7bi5tYWluLm9wZW4oKX0sZS5hcHBlbmRDaGlsZChzKSx0aGlzLm1haW4uYWRkYWJsZSYmKGEuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmFkZGFibGUpLGEuaW5uZXJIVE1MPVwiK1wiLGEub25jbGljaz1mdW5jdGlvbihlKXtpZihuLm1haW4uYWRkYWJsZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9bi5zZWFyY2guaW5wdXQudmFsdWU7aWYoXCJcIj09PXQudHJpbSgpKXJldHVybiB2b2lkIG4uc2VhcmNoLmlucHV0LmZvY3VzKCk7dmFyIGk9bi5tYWluLmFkZGFibGUodCkscz1cIlwiO2lmKCFpKXJldHVybjtcIm9iamVjdFwiPT10eXBlb2YgaT9vLnZhbGlkYXRlT3B0aW9uKGkpJiYobi5tYWluLmFkZERhdGEoaSkscz1pLnZhbHVlP2kudmFsdWU6aS50ZXh0KToobi5tYWluLmFkZERhdGEobi5tYWluLmRhdGEubmV3T3B0aW9uKHt0ZXh0OmksdmFsdWU6aX0pKSxzPWkpLG4ubWFpbi5zZWFyY2goXCJcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5zZXQocyxcInZhbHVlXCIsITEsITEpfSwxMDApLG4ubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCYmc2V0VGltZW91dChmdW5jdGlvbigpe24ubWFpbi5jbG9zZSgpfSwxMDApfX0sZS5hcHBlbmRDaGlsZChhKSx0LmFkZGFibGU9YSksdH0sbi5wcm90b3R5cGUuaGlnaGxpZ2h0VXA9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLnByZXZpb3VzU2libGluZztudWxsIT09dCYmdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5tYWluLmNvbmZpZy5kaXNhYmxlZCk7KXQ9dC5wcmV2aW91c1NpYmxpbmc7ZWxzZXt2YXIgaT10aGlzLmxpc3QucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO3Q9aVtpLmxlbmd0aC0xXX1pZih0JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWwpJiYodD1udWxsKSxudWxsPT09dCl7dmFyIHM9ZS5wYXJlbnROb2RlO2lmKHMuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZzLnByZXZpb3VzU2libGluZyl7dmFyIG49cy5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvckFsbChcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO24ubGVuZ3RoJiYodD1uW24ubGVuZ3RoLTFdKX19dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmhpZ2hsaWdodERvd249ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0PW51bGw7aWYoZSlmb3IodD1lLm5leHRTaWJsaW5nO251bGwhPT10JiZ0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKTspdD10Lm5leHRTaWJsaW5nO2Vsc2UgdD10aGlzLmxpc3QucXVlcnlTZWxlY3RvcihcIi5cIit0aGlzLm1haW4uY29uZmlnLm9wdGlvbitcIjpub3QoLlwiK3RoaXMubWFpbi5jb25maWcuZGlzYWJsZWQrXCIpXCIpO2lmKG51bGw9PT10JiZudWxsIT09ZSl7dmFyIGk9ZS5wYXJlbnROb2RlO2kuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMubWFpbi5jb25maWcub3B0Z3JvdXApJiZpLm5leHRTaWJsaW5nJiYodD1pLm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5tYWluLmNvbmZpZy5vcHRpb24rXCI6bm90KC5cIit0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkK1wiKVwiKSl9dCYmKGUmJmUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLmhpZ2hsaWdodGVkKSx0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5oaWdobGlnaHRlZCksYS5lbnN1cmVFbGVtZW50SW5WaWV3KHRoaXMubGlzdCx0KSl9LG4ucHJvdG90eXBlLmxpc3REaXY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5saXN0KSxlfSxuLnByb3RvdHlwZS5vcHRpb25zPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPVwiXCIpO3ZhciB0LGk9dGhpcy5tYWluLmRhdGEuZmlsdGVyZWR8fHRoaXMubWFpbi5kYXRhLmRhdGE7aWYoKHRoaXMubGlzdC5pbm5lckhUTUw9XCJcIikhPT1lKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD1lLHZvaWQgdGhpcy5saXN0LmFwcGVuZENoaWxkKHQpO2lmKHRoaXMubWFpbi5jb25maWcuaXNBamF4JiZ0aGlzLm1haW4uY29uZmlnLmlzU2VhcmNoaW5nKXJldHVybih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSx0LmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaGluZ1RleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQodCk7aWYoMD09PWkubGVuZ3RoKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBzLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHMuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxzLmlubmVySFRNTD10aGlzLm1haW4uY29uZmlnLnNlYXJjaFRleHQsdm9pZCB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQocyl9Zm9yKHZhciBuPWZ1bmN0aW9uKGUpe2lmKGUuaGFzT3duUHJvcGVydHkoXCJsYWJlbFwiKSl7dmFyIHQ9ZSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bi5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXApO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5jbGFzc0xpc3QuYWRkKGMubWFpbi5jb25maWcub3B0Z3JvdXBMYWJlbCksYy5tYWluLmNvbmZpZy5zZWxlY3RCeUdyb3VwJiZjLm1haW4uY29uZmlnLmlzTXVsdGlwbGUmJmkuY2xhc3NMaXN0LmFkZChjLm1haW4uY29uZmlnLm9wdGdyb3VwTGFiZWxTZWxlY3RhYmxlKSxpLmlubmVySFRNTD10LmxhYmVsLG4uYXBwZW5kQ2hpbGQoaSk7dmFyIHM9dC5vcHRpb25zO2lmKHMpe2Zvcih2YXIgYT0wLG89czthPG8ubGVuZ3RoO2ErKyl7dmFyIGw9b1thXTtuLmFwcGVuZENoaWxkKGMub3B0aW9uKGwpKX1pZihjLm1haW4uY29uZmlnLnNlbGVjdEJ5R3JvdXAmJmMubWFpbi5jb25maWcuaXNNdWx0aXBsZSl7dmFyIHI9YztpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO2Zvcih2YXIgdD0wLGk9bi5jaGlsZHJlbjt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTstMSE9PXMuY2xhc3NOYW1lLmluZGV4T2Yoci5tYWluLmNvbmZpZy5vcHRpb24pJiZzLmNsaWNrKCl9fSl9fWMubGlzdC5hcHBlbmRDaGlsZChuKX1lbHNlIGMubGlzdC5hcHBlbmRDaGlsZChjLm9wdGlvbihlKSl9LGM9dGhpcyxhPTAsbz1pO2E8by5sZW5ndGg7YSsrKW4ob1thXSl9LG4ucHJvdG90eXBlLm9wdGlvbj1mdW5jdGlvbihyKXtpZihyLnBsYWNlaG9sZGVyKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLGUuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmhpZGUpLGV9dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTGlzdC5hZGQodGhpcy5tYWluLmNvbmZpZy5vcHRpb24pLHIuY2xhc3MmJnIuY2xhc3Muc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5jbGFzc0xpc3QuYWRkKGUpfSksci5zdHlsZSYmKHQuc3R5bGUuY3NzVGV4dD1yLnN0eWxlKTt2YXIgYz10aGlzLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpO3QuZGF0YXNldC5pZD1yLmlkLHRoaXMubWFpbi5jb25maWcuc2VhcmNoSGlnaGxpZ2h0JiZ0aGlzLm1haW4uc2xpbSYmci5pbm5lckhUTUwmJlwiXCIhPT10aGlzLm1haW4uc2xpbS5zZWFyY2guaW5wdXQudmFsdWUudHJpbSgpP3QuaW5uZXJIVE1MPWEuaGlnaGxpZ2h0KHIuaW5uZXJIVE1MLHRoaXMubWFpbi5zbGltLnNlYXJjaC5pbnB1dC52YWx1ZSx0aGlzLm1haW4uY29uZmlnLnNlYXJjaEhpZ2hsaWdodGVyKTpyLmlubmVySFRNTCYmKHQuaW5uZXJIVE1MPXIuaW5uZXJIVE1MKSx0aGlzLm1haW4uY29uZmlnLnNob3dPcHRpb25Ub29sdGlwcyYmdC50ZXh0Q29udGVudCYmdC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHQudGV4dENvbnRlbnQpO3ZhciBkPXRoaXM7dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD10aGlzLmRhdGFzZXQuaWQ7aWYoITA9PT1yLnNlbGVjdGVkJiZkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb24pe3ZhciBpPSExO2lmKGQubWFpbi5iZWZvcmVPbkNoYW5nZSYmZC5tYWluLmNvbmZpZy5pc011bHRpcGxlfHwoaT0hMCksZC5tYWluLmJlZm9yZU9uQ2hhbmdlJiZkLm1haW4uY29uZmlnLmlzTXVsdGlwbGUpe2Zvcih2YXIgcz1kLm1haW4uZGF0YS5nZXRTZWxlY3RlZCgpLG49SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzKSksYT0wO2E8bi5sZW5ndGg7YSsrKW5bYV0uaWQ9PT10JiZuLnNwbGljZShhLDEpOyExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG4pJiYoaT0hMCl9aSYmKGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8oZC5tYWluLmRhdGEucmVtb3ZlRnJvbVNlbGVjdGVkKHQsXCJpZFwiKSxkLm1haW4ucmVuZGVyKCksZC5tYWluLnNlbGVjdC5zZXRWYWx1ZSgpLGQubWFpbi5kYXRhLm9uRGF0YUNoYW5nZSgpKTpkLm1haW4uc2V0KFwiXCIpKX1lbHNle2lmKHIuZGlzYWJsZWR8fHIuc2VsZWN0ZWQpcmV0dXJuO2lmKGQubWFpbi5jb25maWcubGltaXQmJkFycmF5LmlzQXJyYXkoYykmJmQubWFpbi5jb25maWcubGltaXQ8PWMubGVuZ3RoKXJldHVybjtpZihkLm1haW4uYmVmb3JlT25DaGFuZ2Upe3ZhciBvPXZvaWQgMCxsPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZC5tYWluLmRhdGEuZ2V0T2JqZWN0RnJvbURhdGEodCkpKTtsLnNlbGVjdGVkPSEwLGQubWFpbi5jb25maWcuaXNNdWx0aXBsZT8obz1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGMpKSkucHVzaChsKTpvPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobCkpLCExIT09ZC5tYWluLmJlZm9yZU9uQ2hhbmdlKG8pJiZkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9ZWxzZSBkLm1haW4uc2V0KHQsXCJpZFwiLGQubWFpbi5jb25maWcuY2xvc2VPblNlbGVjdCl9fSk7dmFyIGk9YyYmYS5pc1ZhbHVlSW5BcnJheU9mT2JqZWN0cyhjLFwiaWRcIixyLmlkKTtyZXR1cm4oci5kaXNhYmxlZHx8aSkmJih0Lm9uY2xpY2s9bnVsbCxkLm1haW4uY29uZmlnLmFsbG93RGVzZWxlY3RPcHRpb258fHQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmRpc2FibGVkKSxkLm1haW4uY29uZmlnLmhpZGVTZWxlY3RlZE9wdGlvbiYmdC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcuaGlkZSkpLGk/dC5jbGFzc0xpc3QuYWRkKHRoaXMubWFpbi5jb25maWcub3B0aW9uU2VsZWN0ZWQpOnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1haW4uY29uZmlnLm9wdGlvblNlbGVjdGVkKSx0fSxuKTtmdW5jdGlvbiBuKGUpe3RoaXMubWFpbj1lLm1haW4sdGhpcy5jb250YWluZXI9dGhpcy5jb250YWluZXJEaXYoKSx0aGlzLmNvbnRlbnQ9dGhpcy5jb250ZW50RGl2KCksdGhpcy5zZWFyY2g9dGhpcy5zZWFyY2hEaXYoKSx0aGlzLmxpc3Q9dGhpcy5saXN0RGl2KCksdGhpcy5vcHRpb25zKCksdGhpcy5zaW5nbGVTZWxlY3RlZD1udWxsLHRoaXMubXVsdGlTZWxlY3RlZD1udWxsLHRoaXMubWFpbi5jb25maWcuaXNNdWx0aXBsZT8odGhpcy5tdWx0aVNlbGVjdGVkPXRoaXMubXVsdGlTZWxlY3RlZERpdigpLHRoaXMubXVsdGlTZWxlY3RlZCYmdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aVNlbGVjdGVkLmNvbnRhaW5lcikpOih0aGlzLnNpbmdsZVNlbGVjdGVkPXRoaXMuc2luZ2xlU2VsZWN0ZWREaXYoKSx0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNpbmdsZVNlbGVjdGVkLmNvbnRhaW5lcikpLHRoaXMubWFpbi5jb25maWcuYWRkVG9Cb2R5Pyh0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm1haW4uY29uZmlnLmlkKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCkpOnRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuc2VhcmNoLmNvbnRhaW5lciksdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMubGlzdCl9dC5TbGltPXN9XSxuLmM9cyxuLmQ9ZnVuY3Rpb24oZSx0LGkpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDppfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIoaSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBzIGluIHQpbi5kKGkscyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHMpKTtyZXR1cm4gaX0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTIpKS5kZWZhdWx0O2Z1bmN0aW9uIG4oZSl7aWYoc1tlXSlyZXR1cm4gc1tlXS5leHBvcnRzO3ZhciB0PXNbZV09e2k6ZSxsOiExLGV4cG9ydHM6e319O3JldHVybiBpW2VdLmNhbGwodC5leHBvcnRzLHQsdC5leHBvcnRzLG4pLHQubD0hMCx0LmV4cG9ydHN9dmFyIGksc30pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZXhwb3J0IGNsYXNzIEJyb3dzZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmVyc2lvbjogbnVtYmVyO1xyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5zcGxpdCgnICcpIGFzIGFueSkuZmluZCgoZTogc3RyaW5nKSA9PiBlLmluZGV4T2YoJ0Nocm9tZScpICE9IC0xKS5zcGxpdCgnLycpWzFdLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIGxldCBhY2N1bXVsYXRvciA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZlcnNpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWNjdW11bGF0b3IgKz0gdmVyc2lvbltpXSAqIE1hdGgucG93KDEwLCAodmVyc2lvbi5sZW5ndGggLSBpIC0gMSkgKiAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IGFjY3VtdWxhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRWZXJzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlcnNpb247XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tIFwiLi9MYW5ndWFnZVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgZ2VuZXJpYyBjb21wb25lbnQgb2YgU3RhZGlhK1xyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBDb21wb25lbnQgdHlwZS5cclxuICogQGNsYXNzIENvbXBvbmVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBDb21wb25lbnQncyBuYW1lLlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSAnTXkgQ29tcG9uZW50JztcclxuICAgIHRhZzogc3RyaW5nID0gXCJjb21wb25lbnRcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBDb21wb25lbnQncyB1bmlxdWUgSUQsIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIG9uIGxvYWQuXHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGJvb2xlYW4ga2VlcGluZyB0cmFjayBvZiB3aGV0aGVyIHRoZSBDb21wb25lbnQgc2hvdWxkIHJlY2VpdmUgZXZlbnRzIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG5cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcmVuZGVyZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgc2hvdWxkIHN0YXJ0IGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIGxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gTGFuZ3VhZ2UuZ2V0KHRoaXMudGFnICsgJy5uYW1lJyk7XHJcbiAgICAgICAgdGhpcy5pZCA9ICdzdGFkaWFwbHVzXycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICB0aGlzLm9uU3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZW5kZXJlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZW5kZXJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGhzRTRlPmMtd2l6Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IChBcnJheSBhcyBhbnkpLmZyb20ocmVuZGVyZXJzKS5maW5kKChyZW5kZXJlcjogSFRNTEVsZW1lbnQpID0+IHJlbmRlcmVyLnN0eWxlLm9wYWNpdHkgIT09ICcwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGlzIENvbXBvbmVudCBoYXMgYW4gZWxlbWVudCBpbiB0aGUgRE9NXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGV4aXN0cygpOiBib29sZWFuIHtcclxuICAgICAgICBpZih0aGlzLnJlbmRlcmVyLnN0eWxlLm9wYWNpdHkgPT09ICcwJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQpICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSBjb21wb25lbnQgaXMgdW5sb2FkaW5nLlxyXG4gICAgICovXHJcbiAgICB1bmxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBDb21wb25lbnQgc2hvdWxkIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBDb21wb25lbnQgc2hvdWxkIHN0b3AuXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgb25jZSBldmVyeSBzZWNvbmQuXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi9TdG9yYWdlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuL0xhbmd1YWdlJztcclxuXHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgY2xhc3MgcmVzcG9uc2libGUgZm9yIGxvYWRpbmcgW1tDb21wb25lbnR8Q29tcG9uZW50c11dIGFuZCBkZWxpdmVyaW5nIGV2ZW50cy5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQ29tcG9uZW50TG9hZGVyIHR5cGUuXHJcbiAqIEBjbGFzcyBDb21wb25lbnRMb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50czogQ29tcG9uZW50W107XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlcnMgYSBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKGNvbXBvbmVudDpDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsdGVyKGUgPT4geyByZXR1cm4gZS5pZCAhPT0gY29tcG9uZW50LmlkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBjb21wb25lbnQgbG9hZGVyLlxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBTeW5jU3RvcmFnZS5DT01QT05FTlRTLmdldCgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdG9yYWdlID0gcmVzdWx0LmNvbXBvbmVudHM7XHJcbiAgICAgICAgICAgIGlmKHN0b3JhZ2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYoc3RvcmFnZVtjb21wb25lbnQudGFnXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVtjb21wb25lbnQudGFnXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVtjb21wb25lbnQudGFnXS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZW5hYmxlZCA9IHN0b3JhZ2VbY29tcG9uZW50LnRhZ10uZW5hYmxlZDtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuZW5hYmxlZCAmJiAhY29tcG9uZW50LmFjdGl2ZSkgY29tcG9uZW50LmxvYWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFN5bmNTdG9yYWdlLkNPTVBPTkVOVFMuc2V0KHN0b3JhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIGNvbXBvbmVudCBsb2FkZXIuXHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC51bmxvYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbXBvbmVudC5hY3RpdmUpIGNvbXBvbmVudC5vblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BUaW1lcigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XHJcbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi9TdG9yYWdlJztcclxuaW1wb3J0IGxhbmdfZW5VU19kYXRhIGZyb20gJy4vbGFuZy9lbi1VUy5qc29uJztcclxuaW1wb3J0IGxhbmdfc3ZTRV9kYXRhIGZyb20gJy4vbGFuZy9zdi1TRS5qc29uJztcclxuaW1wb3J0IGxhbmdfZnJGUl9kYXRhIGZyb20gJy4vbGFuZy9mci1GUi5qc29uJztcclxuaW1wb3J0IGxhbmdfaXRJVF9kYXRhIGZyb20gJy4vbGFuZy9pdC1JVC5qc29uJztcclxuaW1wb3J0IGxhbmdfZXNFU19kYXRhIGZyb20gJy4vbGFuZy9lcy1FUy5qc29uJztcclxuaW1wb3J0IGxhbmdfZGVERV9kYXRhIGZyb20gJy4vbGFuZy9kZS1ERS5qc29uJztcclxuaW1wb3J0IGxhbmdfdWtVQV9kYXRhIGZyb20gJy4vbGFuZy91ay1VQS5qc29uJztcclxuaW1wb3J0IGxhbmdfZW5TVEVFRl9kYXRhIGZyb20gJy4vbGFuZy9lbi1TVEVFRi5qc29uJztcclxuaW1wb3J0IGxhbmdfZXVFU19kYXRhIGZyb20gJy4vbGFuZy9ldS1FUy5qc29uJztcclxuaW1wb3J0IGxhbmdfZ2xFU19kYXRhIGZyb20gJy4vbGFuZy9nbC1FUy5qc29uJztcclxuaW1wb3J0IGxhbmdfcnVSVV9kYXRhIGZyb20gJy4vbGFuZy9ydS1SVS5qc29uJztcclxuaW1wb3J0IGxhbmdfbmxCRV9kYXRhIGZyb20gJy4vbGFuZy9ubC1CRS5qc29uJztcclxuaW1wb3J0IGxhbmdfcHRCUl9kYXRhIGZyb20gJy4vbGFuZy9wdC1CUi5qc29uJztcclxuXHJcbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3cgYXMgYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIExhbmd1YWdlIHtcclxuICAgIHRhZzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdGFnOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICBMYW5ndWFnZS5sYW5ndWFnZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZTogc3RyaW5nLCB2YXJzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBuYW1lLnNwbGl0KC9cXC4vZyk7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuZGF0YTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbFtrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IF92YXIgaW4gdmFycykge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCd7eycgKyBfdmFyICsgJ319Jykuam9pbih2YXJzW192YXJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbCBhcyBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVmYXVsdCgpIHtcclxuICAgICAgICBMYW5ndWFnZS5kZWZhdWx0ID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdID0gW107XHJcbiAgICBzdGF0aWMgZGVmYXVsdDogTGFuZ3VhZ2U7XHJcbiAgICBzdGF0aWMgY3VycmVudDogTGFuZ3VhZ2U7XHJcbiAgICBzdGF0aWMgbG9hZChjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRoZSBmaXJzdCBsYW5ndWFnZSB0aGF0IGlzbid0IGVxdWFsIHRvIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgU3luY1N0b3JhZ2UuTEFOR1VBR0UuZ2V0KChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFuZ3VhZ2UgPSByZXN1bHRbU3luY1N0b3JhZ2UuTEFOR1VBR0UudGFnXTtcclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlID09PSB1bmRlZmluZWQgfHwgbGFuZ3VhZ2UgPT09ICdhdXRvbWF0aWMnKSB7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMuYXV0b21hdGljKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZ2dlci5pbmZvKCdVc2luZyBsYW5ndWFnZSBjb25maWd1cmF0aW9uICcgKyBsYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZy50YWcgPT09IGxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGFuZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5sYW5ndWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQobGFuZ3VhZ2U6IExhbmd1YWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGF1dG9tYXRpYygpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzIGFzIGFueSkuZmluZChcclxuICAgICAgICAgICAgKGw6IHN0cmluZykgPT5cclxuICAgICAgICAgICAgICAgIGwubGVuZ3RoID49IDUgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLmRlZmF1bHQgPT09IHVuZGVmaW5lZCB8fCBsICE9PSB0aGlzLmRlZmF1bHQudGFnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbGFuZ19kZURFID0gbmV3IExhbmd1YWdlKCdEZXV0c2NoZSAoREUpJywgJ2RlLURFJywgbGFuZ19kZURFX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfZGVERS5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX2VzRVMgPSBuZXcgTGFuZ3VhZ2UoJ0VzcGHDsW9sIChFUyknLCAnZXMtRVMnLCBsYW5nX2VzRVNfZGF0YSk7XHJcbiAgICAgICAgbGFuZ19lc0VTLnJlZ2lzdGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhbmdfZW5VUyA9IG5ldyBMYW5ndWFnZSgnRW5nbGlzaCAoVVMpJywgJ2VuLVVTJywgbGFuZ19lblVTX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfZW5VUy5yZWdpc3RlcigpO1xyXG4gICAgICAgIGxhbmdfZW5VUy5zZXREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGxhbmdfZW5TVEVFRiA9IG5ldyBMYW5ndWFnZSgnRW5nbGlzaCAoU3RlZWYpJywgJ2VuLVNURUVGJywgbGFuZ19lblNURUVGX2RhdGEpO1xyXG4gICAgICAgIC8vIGxhbmdfZW5TVEVFRi5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX2ZyRlIgPSBuZXcgTGFuZ3VhZ2UoJ0ZyYW7Dp2FpcyAoRlIpJywgJ2ZyLUZSJywgbGFuZ19mckZSX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfZnJGUi5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX2l0SVQgPSBuZXcgTGFuZ3VhZ2UoJ0l0YWxpYW5vIChJVCknLCAnaXQtSVQnLCBsYW5nX2l0SVRfZGF0YSk7XHJcbiAgICAgICAgbGFuZ19pdElULnJlZ2lzdGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhbmdfc3ZTRSA9IG5ldyBMYW5ndWFnZSgnU3ZlbnNrYSAoU0UpJywgJ3N2LVNFJywgbGFuZ19zdlNFX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfc3ZTRS5yZWdpc3RlcigpO1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBsYW5nX3VrVUEgPSBuZXcgTGFuZ3VhZ2UoJ9Cj0LrRgNCw0ZfQvdGB0YzQutCwIChVQSknLCAndWstVUEnLCBsYW5nX3VrVUFfZGF0YSk7XHJcbiAgICAgICAgbGFuZ191a1VBLnJlZ2lzdGVyKCk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxhbmdfZXVFUyA9IG5ldyBMYW5ndWFnZSgnRXVza2FyYSAoRVUpJywgJ2V1LUVTJywgbGFuZ19ldUVTX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfZXVFUy5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX2dsRVMgPSBuZXcgTGFuZ3VhZ2UoJ0dhbGVnbyAoR0wpJywgJ2dsLUVTJywgbGFuZ19nbEVTX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfZ2xFUy5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX3J1UlUgPSBuZXcgTGFuZ3VhZ2UoJ9GA0YPRgdGB0LrQuNC5IChSVSknLCAncnUtUlUnLCBsYW5nX3J1UlVfZGF0YSk7XHJcbiAgICAgICAgbGFuZ19ydVJVLnJlZ2lzdGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhbmdfbmxCRSA9IG5ldyBMYW5ndWFnZSgnTmVkZXJsYW5kcyAoQkUpJywgJ25sLUJFJywgbGFuZ19ubEJFX2RhdGEpO1xyXG4gICAgICAgIGxhbmdfbmxCRS5yZWdpc3RlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBsYW5nX3B0QlIgPSBuZXcgTGFuZ3VhZ2UoJ1BvcnR1Z3XDqnMgKEJSKScsICdwdC1CUicsIGxhbmdfcHRCUl9kYXRhKTtcclxuICAgICAgICBsYW5nX3B0QlIucmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZywgdmFycz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmN1cnJlbnQuZ2V0KG5hbWUsIHZhcnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHByZWZpeDpzdHJpbmcgPSAnW1N0YWRpYStdJztcclxuXHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICBpbmZvID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPwn5ODICR7b2JqLmpvaW4oJyAnKX1gLCAnY29sb3I6IGJsYWNrJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiguLi5vYmo6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSAlY/CfmJ8gJHtvYmouam9pbignICcpfWAsICdjb2xvcjogb3JhbmdlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVycm9yID0gZnVuY3Rpb24oLi4ub2JqOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0gJWPinYwgJHtvYmouam9pbignICcpfWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogNzAwJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudCA9IGZ1bmN0aW9uKC4uLm9iajogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9ICVj8J+nqSAke29iai5qb2luKCcgJyl9YCwgJ2NvbG9yOiBkYXJrZ3JlZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIER1YmlvdXNseSBjcmVhdGVkIGJ5IEFkcmlhbiBDb29uZXlcclxuICAgICAqIEBhdXRob3IgaHR0cDovL2FkcmlhbmNvb25leS5naXRodWIuaW9cclxuICAgICAqL1xyXG4gICAgaW1hZ2UgPSBmdW5jdGlvbih1cmw6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBnZXRCb3ggPSBmdW5jdGlvbih3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZzogXCIrXCIsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJmb250LXNpemU6IDFweDsgcGFkZGluZzogXCIgKyBNYXRoLmZsb29yKGhlaWdodC8yKSArIFwicHggXCIgKyBNYXRoLmZsb29yKHdpZHRoLzIpICsgXCJweDsgbGluZS1oZWlnaHQ6IDA7XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRpbSA9IGdldEJveCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBkaW0uc3RyaW5nLCBkaW0uc3R5bGUgKyBcImJhY2tncm91bmQ6IHVybChcIiArIHVybCArIFwiKTsgYmFja2dyb3VuZC1zaXplOiBcIiArICh3aWR0aCkgKyBcInB4IFwiICsgKGhlaWdodCkgKyBcInB4OyBjb2xvcjogdHJhbnNwYXJlbnQ7XCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2dlcigpOyIsImltcG9ydCBkb3dubG9hZGVyIGZyb20gJy4vdXRpbC9kb3dubG9hZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9ydGN1dCB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgZG93bmxvYWRlci5kb3dubG9hZChgPGh0bWw+PGJvZHk+PHNjcmlwdD53aW5kb3cubG9jYXRpb249XCIke3RoaXMudXJsfVwiPC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD5gLCB0aGlzLm5hbWUgKyBcIi5odG1cIiwgXCJ0ZXh0L2h0bWxcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL1N0b3JhZ2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgY2hyb21lID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFkaWFQbHVzREIge1xyXG4gICAgc3RhdGljIExGR0Nvbm5lY3RvcjogTEZHQ29ubmVjdG9yO1xyXG4gICAgc3RhdGljIFByb2ZpbGVDb25uZWN0b3I6IFByb2ZpbGVDb25uZWN0b3I7XHJcbiAgICBcclxuICAgIHN0YXRpYyB1cmw6IHN0cmluZztcclxuICAgIHN0YXRpYyBhdXRoVG9rZW46IHN0cmluZztcclxuICAgIHN0YXRpYyBjb25uZWN0ZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgc3RhdGljIGNvbm5lY3QodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBTdGFkaWFQbHVzREIudXJsID0gdXJsO1xyXG4gICAgICAgIFN0YWRpYVBsdXNEQi5MRkdDb25uZWN0b3IgPSBuZXcgTEZHQ29ubmVjdG9yKCk7XHJcbiAgICAgICAgU3RhZGlhUGx1c0RCLlByb2ZpbGVDb25uZWN0b3IgPSBuZXcgUHJvZmlsZUNvbm5lY3RvcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRlc3RDb25uZWN0aW9uKClcclxuICAgICAgICAgICAgLnRoZW4oY29ubmVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgIFN0YWRpYVBsdXNEQi5jb25uZWN0ZWQgPSBjb25uZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoY29ubmVjdGVkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXN0Q29ubmVjdGlvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsgXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChTdGFkaWFQbHVzREIudXJsICsgXCIvYXBpL3BpbmdcIilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh0cnVlKSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHJlc29sdmUoZmFsc2UpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9maWxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IFxyXG4gICAgICAgICAgICBheGlvcy5nZXQoYCR7U3RhZGlhUGx1c0RCLnVybH0vYXBpL3VzZXI/dG9rZW49JHtTdGFkaWFQbHVzREIuYXV0aFRva2VufWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHJlamVjdCh7IGVycm9yOiAnQ291bGQgbm90IGNvbm5lY3QgdG8gcHJvZmlsZSBzZXJ2ZXInIH0pKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0Nvbm5lY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gU3RhZGlhUGx1c0RCLmNvbm5lY3RlZCAmJiBTdGFkaWFQbHVzREIudXJsICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gU3RhZGlhUGx1c0RCLmF1dGhUb2tlbiAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFTdGFkaWFQbHVzREIuaXNDb25uZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ05vdCBjb25uZWN0ZWQgdG8gYW55IGRhdGFiYXNlJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWNocm9tZS5oYXNPd25Qcm9wZXJ0eSgnaWRlbnRpdHknKSB8fCAhY2hyb21lLmlkZW50aXR5Lmhhc093blByb3BlcnR5KCdsYXVuY2hXZWJBdXRoRmxvdycpKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnQ3VycmVudCBlbnZpcm9ubWVudCBkb2VzIG5vdCBwZXJtaXQgdXNpbmcgbGF1bmNoV2ViQXV0aEZsb3cnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgY2hyb21lLmlkZW50aXR5LmxhdW5jaFdlYkF1dGhGbG93KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7U3RhZGlhUGx1c0RCLnVybH0vYXV0aC9nb29nbGU/cmVkaXJlY3Q9JHtjaHJvbWUuaWRlbnRpdHkuZ2V0UmVkaXJlY3RVUkwoJ2RhdGFiYXNlJyl9YCxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2VVcmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVzcG9uc2VVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YWRpYVBsdXNEQi5hdXRoVG9rZW4gPSB1cmwuaGFzaC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLkFVVEhfVE9LRU4uc2V0KFN0YWRpYVBsdXNEQi5hdXRoVG9rZW4sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShTdGFkaWFQbHVzREIuYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExGR0Nvbm5lY3RvciB7XHJcbiAgICBnZXQoZ2FtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke1N0YWRpYVBsdXNEQi51cmx9L2FwaS9sZmcvJHtnYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QoZ2FtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBpZighU3RhZGlhUGx1c0RCLmlzQ29ubmVjdGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdCh7IGVycm9yOiAnTm90IGNvbm5lY3RlZCB0byB0aGUgU3RhZGlhUGx1c0RCIGRhdGFiYXNlJyB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFTdGFkaWFQbHVzREIuaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdCh7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQgd2l0aCBTdGFkaWFQbHVzREInIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIHVybDogYCR7U3RhZGlhUGx1c0RCLnVybH0vYXBpL2xmZ2AsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhUb2tlbjogU3RhZGlhUGx1c0RCLmF1dGhUb2tlbixcclxuICAgICAgICAgICAgICAgIGdhbWU6IGdhbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbm5lY3RvciB7XHJcbiAgICBzZXREYXRhKGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYoIVN0YWRpYVBsdXNEQi5pc0Nvbm5lY3RlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QoeyBlcnJvcjogJ05vdCBjb25uZWN0ZWQgdG8gdGhlIFN0YWRpYVBsdXNEQiBkYXRhYmFzZScgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighU3RhZGlhUGx1c0RCLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QoeyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkIHdpdGggU3RhZGlhUGx1c0RCJyB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICB1cmw6IGAke1N0YWRpYVBsdXNEQi51cmx9L2FwaS91cGRhdGVgLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbjogU3RhZGlhUGx1c0RCLmF1dGhUb2tlbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBDT0RFQyA9IG5ldyBMb2NhbFN0b3JhZ2UoJ0NvZGVjJywgJ2NvZGVjJyk7XHJcbiAgICBzdGF0aWMgUkVTT0xVVElPTiA9IG5ldyBMb2NhbFN0b3JhZ2UoJ1Jlc29sdXRpb24nLCAncmVzb2x1dGlvbicpO1xyXG4gICAgc3RhdGljIE1PTklUT1JfU1RBVFMgPSBuZXcgTG9jYWxTdG9yYWdlKCdNb25pdG9yIFN0YXRzJywgJ21vbml0b3Itc3RhdHMnKTtcclxuICAgIHN0YXRpYyBDQUNIRV9WRVJTSU9OID0gbmV3IExvY2FsU3RvcmFnZSgnQ2FjaGUgVmVyc2lvbicsICdjYWNoZS12ZXJzaW9uJyk7XHJcbiAgICBzdGF0aWMgQVVUSF9UT0tFTiA9IG5ldyBMb2NhbFN0b3JhZ2UoJ0F1dGhlbnRpY2F0aW9uIFRva2VuJywgJ2F1dGgtdG9rZW4nKTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0YWc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbIHRoaXMudGFnIF0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWU6IGFueSwgY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFt0aGlzLnRhZ106IHZhbHVlIH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KHN0b3JhZ2VzOiBMb2NhbFN0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHN0b3JhZ2VzLm1hcChlID0+IGUudGFnKSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQoc3RvcmFnZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHN0b3JhZ2VzLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyKCkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeW5jU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgTElCUkFSWV9HQU1FUyA9IG5ldyBTeW5jU3RvcmFnZSgnTGlicmFyeSBHYW1lcycsICdnYW1lcycpO1xyXG4gICAgc3RhdGljIExJQlJBUllfU09SVF9PUkRFUiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBPcmRlcicsICdzb3J0LW9yZGVyJyk7XHJcbiAgICBzdGF0aWMgTElCUkFSWV9TT1JUX0RJUkVDVElPTiA9IG5ldyBTeW5jU3RvcmFnZSgnU29ydCBEaXJlY3Rpb24nLCAnc29ydC1kaXJlY3Rpb24nKTtcclxuICAgIHN0YXRpYyBMQU5HVUFHRSA9IG5ldyBTeW5jU3RvcmFnZSgnTGFuZ3VhZ2UnLCAnbGFuZ3VhZ2UnKTtcclxuICAgIHN0YXRpYyBDT01QT05FTlRTID0gbmV3IFN5bmNTdG9yYWdlKCdDb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0YWc6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0YWc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGNhbGxiYWNrOiAoKHJlc3VsdDogYW55KSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsgdGhpcy50YWcgXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2YWx1ZTogYW55LCBjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbdGhpcy50YWddOiB2YWx1ZSB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChzdG9yYWdlczogU3luY1N0b3JhZ2VbXSwgY2FsbGJhY2s6ICgocmVzdWx0OiBhbnkpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoc3RvcmFnZXMubWFwKGUgPT4gZS50YWcpLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldChzdG9yYWdlczoge1trZXk6IHN0cmluZ106IGFueX0sIGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChzdG9yYWdlcywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY2xlYXIoKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hbmFnZXIge1xyXG4gICAgYXBwZGF0YTogYW55O1xyXG4gICAgY29uc3RydWN0b3IoYXBwZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hcHBkYXRhID0gYXBwZGF0YTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tDYWNoZVZlcnNpb24oY2FsbGJhY2s6ICgpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5DQUNIRV9WRVJTSU9OLmdldChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYWNoZVZlcnNpb24gPSByZXN1bHRbTG9jYWxTdG9yYWdlLkNBQ0hFX1ZFUlNJT04udGFnXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNhY2hlVmVyc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuYXBwZGF0YVsnY2FjaGUtdmVyc2lvbiddID4gY2FjaGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGRhdGFbJ2NsZWFyLWtleXMnXS5sb2NhbC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZS5zZXQoe1trZXldOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZGF0YVsnY2xlYXIta2V5cyddLnN5bmMuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5zZXQoe1trZXldOiBudWxsfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2NhbFN0b3JhZ2UuQ0FDSEVfVkVSU0lPTi5zZXQodGhpcy5hcHBkYXRhWydjYWNoZS12ZXJzaW9uJ10pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJjbGFzcyBVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RhZGlhJ3MgbWVudSBiYXIgZWxlbWVudCwgdXNlZCB0byBrbm93IHdoZW4gdGhlIHBsYXllciBoYXMgb3BlbmVkIHRoZSBtZW51LlxyXG4gICAgICovXHJcbiAgICBtZW51RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlgxYXN2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNZW51T3BlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW51RWxlbWVudC5zdHlsZS5vcGFjaXR5ICE9PSAnMCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkdhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdwbGF5ZXInKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbkhvbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdob21lJykgIT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5TdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlJykgIT09IC0xICYmICF0aGlzLmlzSW5TdG9yZURldGFpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5TdG9yZURldGFpbCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ3N0b3JlL2RldGFpbHMnKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlc2FuZGJveChqYXZhc2NyaXB0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gamF2YXNjcmlwdDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlsKCk7IiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJEYXRhYmFzZSB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNvbm5lY3RlZDogYm9vbGVhbjtcclxuICAgIGNvbm5lY3Rpb246IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KGNhbGxiYWNrPzogKGNvbm5lY3Rpb246YW55KSA9PiB7fSkge1xyXG4gICAgICAgIGlmKHRoaXMuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3I6IEFscmVhZHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdGhpcy51cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0aW9uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5jb25uZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKCdFcnJvciB3aGVuIGNvbm5lY3RpbmcgdG8gZGF0YWJhc2U6JywgeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3Igd2hlbiBjb25uZWN0aW5nIHRvIGRhdGFiYXNlOicsIHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKG51bGwpOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25uZWN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgaWYoIXRoaXMuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignRXJyb3I6IE5vdCBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY29ubmVjdChjYWxsYmFjaz86IChjb25uZWN0aW9uOm9iamVjdCkgPT4ge30pIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3QoY2FsbGJhY2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5cclxuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdyBhcyBhbnk7XHJcblxyXG4vKipcclxuICogQSBidXR0b24gYWxsb3dpbmcgdXNlcnMgdG8gcGxheSBTdGFkaWEgaW4gd2luZG93ZWQgbW9kZS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgQWxsb3dXaW5kb3dlZE1vZGUgdHlwZS5cclxuICogQGNsYXNzIEFsbG93V2luZG93ZWRNb2RlXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWxsb3dXaW5kb3dlZE1vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnYWxsb3ctd2luZG93ZWQtbW9kZSc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gdG9nZ2xlIHdpbmRvd2VkIG1vZGUuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHdpbmRvd2VkIG1vZGUgaXMgZW5hYmxlZCBvciBub3RcclxuICAgICAqL1xyXG4gICAgd2luZG93ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gTWFpbiBldmVudCwgc3RvcHMgYnVpbHQtaW4gZnVsbHNjcmVlbiBldmVudHMgZnJvbSByZWFjaGluZyBTdGFkaWEgd2hlbmV2ZXIgd2luZG93ZWQgbW9kZSBpcyBlbmFibGVkLlxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAnZnVsbHNjcmVlbmNoYW5nZScsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYud2luZG93ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnRlcnMgd2luZG93ZWQgbW9kZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgZW50ZXJXaW5kb3dlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndpbmRvd2VkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhpdHMgd2luZG93ZWQgbW9kZVxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgZXhpdFdpbmRvd2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2luZG93ZWQgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KFxyXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1hZ2VzL2ljb25zL3dpbmRvd2VkLnN2ZycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKFxyXG4gICAgICAgICAgICBpY29uLFxyXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLndpbmRvd2VkJyksXHJcbiAgICAgICAgICAgIHRoaXMuaWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhpdFdpbmRvd2VkKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBidXR0b24gbGFiZWxzIGFuZCBpY29ucyB0byBmaXQgY3VycmVudCBtb2RlLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQnV0dG9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy93aW5kb3dlZC5zdmcnKTtcclxuICAgICAgICBjb25zdCBpY29uX2V4aXQgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoXHJcbiAgICAgICAgICAgICdpbWFnZXMvaWNvbnMvd2luZG93ZWRfZXhpdC5zdmcnXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMud2luZG93ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0SWNvbihpY29uX2V4aXQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRUaXRsZShcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlLmdldCgnYWxsb3ctd2luZG93ZWQtbW9kZS5idXR0b24tbGFiZWwuZnVsbHNjcmVlbicpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0SWNvbihpY29uKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0VGl0bGUoXHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2FsbG93LXdpbmRvd2VkLW1vZGUuYnV0dG9uLWxhYmVsLndpbmRvd2VkJylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hldGhlciBldmVudHMgaGF2ZSBiZWVuIGFkZGVkIGFscmVhZHkgb3Igbm90LlxyXG4gICAgZXZlbnRzQWRkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbmNlIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyBjb21wb25lbnQgZWxlbWVudHMgYW5kIHZhcmlhYmxlc1xyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgQWxsb3dXaW5kb3dlZE1vZGVcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWYgbWVudSBpcyBvcGVuIGFuZCBhIGdhbWUgaXMgcGxheWluZy5cclxuICAgICAgICBpZiAoVXRpbC5pc01lbnVPcGVuKCkgJiYgVXRpbC5pc0luR2FtZSgpKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBpbiB0aGUgY3VycmVudCByZW5kZXJlclxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBuZXcgcmVuZGVyZXJzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY3JlYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBldmVudHMgYXJlIGFscmVhZHkgYWRkZWQsIGRvbid0IGFkZCB0aGVtIGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50c0FkZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLm9uUHJlc3NlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi53aW5kb3dlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXhpdFdpbmRvd2VkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZW50ZXJXaW5kb3dlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvQ2xvY2suc2Nzcyc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIGNsb2NrIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENsb2NrIHR5cGUuXHJcbiAqIEBjbGFzcyBDbG9ja1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ2Nsb2NrJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjbG9jayBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgPHNwYW4+LCBhZGRzIHRoZSByaWdodCBjbGFzc2VzLCBhbmQgc3RvcmVzIGl0IGluIFtAbGluayAjZWxlbWVudF1cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2Nsb2NrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsnbmFtZSc6IHRoaXMubmFtZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyduYW1lJzogdGhpcy5uYW1lfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgY2xvY2sgd2hlbiBpdCdzIHZpc2libGVcclxuICAgICAgICBpZihVdGlsLmlzTWVudU9wZW4oKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh4aEF5ZicpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnByZXBlbmQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRpbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnQnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0ZvcmNlQ29kZWMuc2Nzcyc7XHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9VSVRhYic7XHJcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICcuLi91aS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBSZXNvbHV0aW9uIH0gZnJvbSAnLi9Gb3JjZVJlc29sdXRpb24nO1xyXG5pbXBvcnQgeyBCcm93c2VyIH0gZnJvbSAnLi4vQnJvd3Nlcic7XHJcblxyXG5jb25zdCBjaHJvbWUgPSAod2luZG93IGFzIGFueSkuY2hyb21lO1xyXG5cclxuLyoqXHJcbiAqIEEgZHJvcGRvd24gYWxsb3dpbmcgY2hhbmdpbmcgb2YgdGhlIGNvZGVjLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBGb3JjZUNvZGVjIHR5cGUuXHJcbiAqIEBjbGFzcyBGb3JjZUNvZGVjXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9yY2VDb2RlYyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICdmb3JjZS1jb2RlYyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBjb2RlYy5cclxuICAgICAqL1xyXG4gICAgY29kZWM6IG51bWJlciA9IENvZGVjLkFVVE9NQVRJQztcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBUaGUgY29kZWMgU2VsZWN0IGJveC5cclxuICAgICAqL1xyXG4gICAgc2VsZWN0OiBTZWxlY3Q7XHJcblxyXG4gICAgLyoqIFxyXG4gICAgICogVGhlIFN0YWRpYSsgVUkgVGFiLlxyXG4gICAgICovXHJcbiAgICB0YWI6IFVJVGFiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdsb2JhbCBzbmFja2Jhci5cclxuICAgICAqL1xyXG4gICAgc25hY2tiYXI6IFNuYWNrYmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhYjogVUlUYWIsIHNuYWNrYmFyOiBTbmFja2Jhcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiID0gdGFiO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5DT0RFQy5nZXQoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZWMgPSByZXN1bHQuY29kZWM7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuQ09ERUMuc2V0KHRoaXMuY29kZWMsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50YWIuYWRkUm93KFxyXG4gICAgICAgICAgICBuZXcgVUlSb3coXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19yb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGFkaWFwbHVzX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb2RlY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0NvZGVjLkFVVE9NQVRJQ31cIj4ke0xhbmd1YWdlLmdldCgnYXV0b21hdGljJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7Q29kZWMuVlA5fVwiPiR7TGFuZ3VhZ2UuZ2V0KCd2cDknKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtDb2RlYy5IMjY0fVwiPiR7TGFuZ3VhZ2UuZ2V0KCdoMjY0Jyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic3RhZGlhcGx1c19idXR0b24tc21hbGxcIj4ke0xhbmd1YWdlLmdldCgnYXBwbHknKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9J3N0YWRpYXBsdXNfbXV0ZWQnIGlkPScke3RoaXMuaWR9LTRrLXRvb2x0aXAnIHN0eWxlPSdkaXNwbGF5OiBub25lJz4ke0xhbmd1YWdlLmdldCgnZm9yY2UtY29kZWMuNGstdG9vbHRpcCcpfTwvcD5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogQ29kZWMuQVVUT01BVElDIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFkaWFwbHVzX2J1dHRvbi1zbWFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QuZ2V0KClbMF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0b3JhZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc25hY2tiYXIuYWN0aXZhdGUoTGFuZ3VhZ2UuZ2V0KCdzbmFja2Jhci5yZWxvYWQtdG8tdXBkYXRlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2UuUkVTT0xVVElPTi5nZXQocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQucmVzb2x1dGlvbiA9PT0gUmVzb2x1dGlvbi5VSERfNEsgfHwgcmVzdWx0LnJlc29sdXRpb24gPT09IFJlc29sdXRpb24uV1FIRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGVjID0gQ29kZWMuVlA5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5kaXNhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArICctNGstdG9vbHRpcCcpIGFzIEhUTUxFbGVtZW50OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0LnNldChzZWxmLmNvZGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3JjZUNvZGVjLnNldENvZGVjKHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IENvZGVjLkFVVE9NQVRJQyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3Quc2V0KHNlbGYuY29kZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldChcImNvbXBvbmVudC5lbmFibGVkXCIsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHVzZWQgQ29kZWNcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29kZWNcclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRDb2RlYyhjb2RlYzogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgY29uc3QgdnA5ZGF0YSA9ICd7XCJ2cDlcIjpcIkV4dGVybmFsRGVjb2RlclwifSc7IC8vIEJyb3dzZXIuZ2V0VmVyc2lvbigpID49IDg0NDE0NDAyID8gJ3tcInZwOVwiOiBcImxpYnZweFwifScgOiAne1widnA5XCI6XCJFeHRlcm5hbERlY29kZXJcIn0nO1xyXG4gICAgICAgIGNvbnN0IGgyNjRkYXRhID0gJ3tcImgyNjRcIjpcIkV4dGVybmFsRGVjb2RlclwiLCBcInZwOVwiOlwibGlidnB4XCJ9JzsgLy8gQnJvd3Nlci5nZXRWZXJzaW9uKCkgPj0gODQ0MTQ0MDIgPyAne1widnA5XCI6XCJsaWJ2cHhcIixcImgyNjRcIjpcIkZGbXBlZ1wifScgOiAne1wiaDI2NFwiOlwiRXh0ZXJuYWxEZWNvZGVyXCIsIFwidnA5XCI6XCJsaWJ2cHhcIn0nO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XHJcbiAgICAgICAgY2FzZSBDb2RlYy5WUDk6XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpZGVvX2NvZGVjX2ltcGxlbWVudGF0aW9uX2J5X2NvZGVjX2tleVwiLCAnJHt2cDlkYXRhfScpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBDb2RlYy5IMjY0OlxyXG4gICAgICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aWRlb19jb2RlY19pbXBsZW1lbnRhdGlvbl9ieV9jb2RlY19rZXlcIiwgJyR7aDI2NGRhdGF9Jyk7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIENvZGVjLkFVVE9NQVRJQzpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidmlkZW9fY29kZWNfaW1wbGVtZW50YXRpb25fYnlfY29kZWNfa2V5XCIpO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VDb2RlY1xyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGV2ZXJ5IHNlY29uZCwgdXBkYXRlcyB0aGUgZWxlbWVudCB0byBtYXRjaCB0aGUgY2xvY2suXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZUNvZGVjXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBraW5kcyBvZiBjb2RlY3MsIHJlcHJlc2VudGVkIGFzIG51bWJlcnMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIENvZGVjIHR5cGVcclxuICogQGNsYXNzIENvZGVjXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29kZWMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvbWF0aWMgY29kZWMsIGxldCBTdGFkaWEgZGVjaWRlIG9uIGl0J3Mgb3duLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZQOSBjb2RlYywgdXN1YWxseSB3b3JrcyBiZXR0ZXIgdGhhbiBIMjY0IGJ1dCBhdCB0aGUgY29zdCBvZiBsb3dlciBxdWFsaXR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVlA5ID0gMTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEgyNjQgY29kZWMsIGhpZ2ggcXVhbGl0eSBhbmQgTWFjLU9TIGNvbXBhdGlibGUgY29kZWMgYnV0IHdpdGggbGF0ZW5jeSBpc3N1ZXMuIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgSDI2NCA9IDI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9Gb3JjZVJlc29sdXRpb24uc2Nzcyc7XHJcbmltcG9ydCB7IFVJVGFiIH0gZnJvbSAnLi9VSVRhYic7XHJcbmltcG9ydCB7IFVJUm93LCBVSVJvd09wdGlvbnMgfSBmcm9tICcuLi91aS9VSVJvdyc7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uL3VpL1NlbGVjdCc7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi4vdWkvU25hY2tiYXInO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XHJcbmltcG9ydCB7IEZvcmNlQ29kZWMsIENvZGVjIH0gZnJvbSAnLi9Gb3JjZUNvZGVjJztcclxuXHJcbmNvbnN0IGNocm9tZSA9ICh3aW5kb3cgYXMgYW55KS5jaHJvbWU7XHJcblxyXG4vKipcclxuICogQSBkcm9wZG93biBhbGxvd2luZyBjaGFuZ2luZyBvZiB0aGUgcmVzb2x1dGlvbi5cclxuICpcclxuICogQGV4cG9ydCB0aGUgRm9yY2VSZXNvbHV0aW9uIHR5cGUuXHJcbiAqIEBjbGFzcyBGb3JjZVJlc29sdXRpb25cclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JjZVJlc29sdXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnZm9yY2UtcmVzb2x1dGlvbic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCByZXNvbHV0aW9uLlxyXG4gICAgICovXHJcbiAgICByZXNvbHV0aW9uOiBudW1iZXIgPSBSZXNvbHV0aW9uLkFVVE9NQVRJQztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZXNvbHV0aW9uIFNlbGVjdCBib3guXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdDogU2VsZWN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFN0YWRpYSsgVUkgVGFiXHJcbiAgICAgKi9cclxuICAgIHRhYjogVUlUYWI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ2xvYmFsIFNuYWNrYmFyXHJcbiAgICAgKi9cclxuICAgIHNuYWNrYmFyOiBTbmFja2JhcjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IodGFiOiBVSVRhYiwgc25hY2tiYXI6IFNuYWNrYmFyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWIgPSB0YWI7XHJcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gRm9yY2VSZXNvbHV0aW9uLnNldFJlc29sdXRpb24odGhpcy5yZXNvbHV0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHZhcmlhYmxlIHN0YXRlcyB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNocm9tZSBzdG9yYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRm9yY2VSZXNvbHV0aW9uXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5SRVNPTFVUSU9OLmdldCgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gcmVzdWx0LnJlc29sdXRpb247XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGNocm9tZSBzdG9yYWdlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZVJlc29sdXRpb25cclxuICAgICAqL1xyXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLlJFU09MVVRJT04uc2V0KHRoaXMucmVzb2x1dGlvbiwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGFiLmFkZFJvdyhcclxuICAgICAgICAgICAgbmV3IFVJUm93KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfcm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhZGlhcGx1c19zZWxlY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVzb2x1dGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke1Jlc29sdXRpb24uQVVUT01BVElDfVwiPiR7TGFuZ3VhZ2UuZ2V0KCdhdXRvbWF0aWMnKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLlVIRF80S31cIj4ke0xhbmd1YWdlLmdldCgnNGsnKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtSZXNvbHV0aW9uLldRSER9XCI+JHtMYW5ndWFnZS5nZXQoJzE0NDBwJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5GSER9XCI+JHtMYW5ndWFnZS5nZXQoJzEwODBwJyl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7UmVzb2x1dGlvbi5IRH1cIj4ke0xhbmd1YWdlLmdldCgnNzIwcCcpfSAoJHtMYW5ndWFnZS5nZXQoJ2V4cGVyaW1lbnRhbCcpfSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzdGFkaWFwbHVzX2J1dHRvbi1zbWFsbFwiPiR7TGFuZ3VhZ2UuZ2V0KCdhcHBseScpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGFkaWFwbHVzX211dGVkXCI+JHtMYW5ndWFnZS5nZXQoJ2ZvcmNlLXJlc29sdXRpb24ubm90ZScpfTwvcD5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICsgJy1yb3cnLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlOiAocm93OlVJUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ID0gbmV3IFNlbGVjdChyb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSwgeyBwbGFjZWhvbGRlcjogUmVzb2x1dGlvbi5BVVRPTUFUSUMgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSByb3cuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZGlhcGx1c19idXR0b24tc21hbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNvbHV0aW9uID0gcGFyc2VJbnQoc2VsZi5zZWxlY3QuZ2V0KClbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYucmVzb2x1dGlvbiA9PT0gUmVzb2x1dGlvbi5VSERfNEspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3JjZUNvZGVjLnNldENvZGVjKENvZGVjLlZQOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNuYWNrYmFyLmFjdGl2YXRlKExhbmd1YWdlLmdldCgnc25hY2tiYXIucmVsb2FkLXRvLXVwZGF0ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0U3RvcmFnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQoc2VsZi5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ6IChyb3c6VUlSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdCA9IG5ldyBTZWxlY3Qocm93LmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksIHsgcGxhY2Vob2xkZXI6IFJlc29sdXRpb24uQVVUT01BVElDIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdC5zZXQoc2VsZi5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdXNlciBbW1Jlc29sdXRpb25dXVxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIHRoZSB1c2VyIFJlc29sdXRpb25cclxuICAgICAqIEBtZW1iZXJvZiBGb3JjZVJlc29sdXRpb25cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldFJlc29sdXRpb24ocmVzb2x1dGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIC8vIFJ1ZGltZW50YXJ5IG1hcHBpbmcgb2Ygc3RhZGlhIGxvY2FsU3RvcmFnZSB2YXJpYWJsZXMgZm9yIHBlcmZvcm1hbmNlIHNldHRpbmdcclxuICAgICAgICBjb25zdCBzdGFkaWFQZXJmb3JtYW5jZSA9IHtIRDogMiwgRkhEOiAzLCBXUUhEOiA0LCBVSERfNEs6IDR9XHJcblxyXG4gICAgICAgIC8vIE51bWJlciBiYXNlZCBvbiBwZXJmb3JtYW5jZSB0byBiZSBpbmplY3RlZCBpbiBsb2NhbFN0b3JhZ2UgZm9yIFN0YWRpYSBzZXR0aW5ncy5cclxuICAgICAgICBsZXQgcGVyZm9ybWFuY2VJbmplY3Q7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IHdpZHRoO1xyXG4gICAgICAgIHN3aXRjaCAocmVzb2x1dGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uVUhEXzRLOlxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSAzODQwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjE2MDtcclxuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlSW5qZWN0ID0gc3RhZGlhUGVyZm9ybWFuY2UuVUhEXzRLO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJlc29sdXRpb24uV1FIRDpcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gMjU2MDtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDE0NDA7XHJcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZUluamVjdCA9IHN0YWRpYVBlcmZvcm1hbmNlLlVIRF80SztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSZXNvbHV0aW9uLkZIRDpcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZUluamVjdCA9IHN0YWRpYVBlcmZvcm1hbmNlLkZIRDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSZXNvbHV0aW9uLkhEOlxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSAxMjgwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gNzIwO1xyXG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2VJbmplY3QgPSBzdGFkaWFQZXJmb3JtYW5jZS5IRDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSZXNvbHV0aW9uLkFVVE9NQVRJQzpcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIl9ibDNcIik7XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKiBDcmVhdGUgbG9jYWxTdG9yYWdlIGNvbXBhdGlibGUgdmFsdWUgc3RyaW5nIGZyb20gcGFyYW1zIHdpdGggZGF0ZVxyXG4gICAgICAgICAqIERhdGUgaXMgaW5jbHVkZWQgYXMgbWlsaXNlY29uZCB1bml4IHRpbWVzdGFtcCBpbiB2YWx1ZSBieSBTdGFkaWEsIHNvbWUgdmFsdWVzIGhhdmUgc2FmZWd1YXJkIGV4cGlyYXRpb24gc28gcmVmcmVzaCB0byBiZSBzYWZlXHJcbiAgICAgICAgICogKi8gXHJcbiAgICAgICAgY29uc3QgcGVyZm9ybWFuY2VWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcImRhdGFcIjpgWyR7cGVyZm9ybWFuY2VJbmplY3R9LDJdYCxcImNyZWF0aW9uXCI6IERhdGUubm93KCl9KTtcclxuXHJcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdhdmFpbFdpZHRoJywgeyB2YWx1ZTogJHt3aWR0aH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnYXZhaWxIZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuc2NyZWVuLCAnd2lkdGgnLCB7IHZhbHVlOiAke3dpZHRofSB9KTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5zY3JlZW4sICdoZWlnaHQnLCB7IHZhbHVlOiAke2hlaWdodH0gfSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX2JsM1wiLCAnJHtwZXJmb3JtYW5jZVZhbHVlfScpO1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGNsb2NrLlxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkaWZmZXJlbnQga2luZHMgb2YgcmVzb2x1dGlvbnMsIHJlcHJlc2VudGVkIGFzIG51bWJlcnMuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFJlc29sdXRpb24gdHlwZVxyXG4gKiBAY2xhc3MgUmVzb2x1dGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlc29sdXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvbWF0aWMsIGxldCBTdGFkaWEgaGFuZGxlIHJlc29sdXRpb25zLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQVVUT01BVElDID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIDRLLCBvciAzODQweDIxNjBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFVIRF80SyA9IDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXUUhELCBvciAyNTYweDE0NDBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFdRSEQgPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVsbCBIRCwgb3IgMTkyMHgxMDgwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBGSEQgPSAzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSEQsIG9yIDEyODB4NzIwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBIRCA9IDQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy9MaWJyYXJ5RmlsdGVyLnNjc3MnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJy4uL3VpL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi4vdWkvU2VsZWN0JztcclxuaW1wb3J0IHsgV2ViRGF0YWJhc2UgfSBmcm9tICcuLi9XZWJEYXRhYmFzZSc7XHJcbmltcG9ydCB7IENoZWNrYm94LCBDaGVja2JveFNoYXBlIH0gZnJvbSAnLi4vdWkvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgU3luY1N0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlJztcclxuaW1wb3J0IHsgU2hvcnRjdXQgfSBmcm9tICcuLi9TaG9ydGN1dCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vdWkvTW9kYWwnO1xyXG5pbXBvcnQgJy4uL3VpL3N0eWxlcy9CdXR0b24uc2Nzcyc7XHJcbmltcG9ydCB7IFdlYlNjcmFwZXIgfSBmcm9tICcuL1N0YWRpYVBsdXNEQkhvb2snO1xyXG5pbXBvcnQgeyBTdGFkaWFQbHVzREIgfSBmcm9tICcuLi9TdGFkaWFQbHVzREInO1xyXG5cclxuY29uc3QgeyBjaHJvbWUsIEFycmF5IH0gPSB3aW5kb3cgYXMgYW55O1xyXG5cclxuLyoqXHJcbiAqIEEgZmlsdGVyaW5nIHN5c3RlbSBhbGxvd2luZyBoaWRpbmcgYW5kIHNob3dpbmcgc3BlY2lmaWMgZ2FtZXMgaW4geW91ciBsaWJyYXJ5IGFzIHdlbGwgYXMgb3JkZXJpbmcgdGhlbSBieSBuYW1lLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBMaWJyYXJ5RmlsdGVyIHR5cGVcclxuICogQGNsYXNzIExpYnJhcnlGaWx0ZXJcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5RmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ2xpYnJhcnktZmlsdGVyJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIExpc3Qgb2YgZ2FtZXMgYW5kIGdhbWUgZGF0YSBpbXBvcnRlZCBmcm9tIHRoZSBET01cclxuICAgICAqL1xyXG4gICAgZ2FtZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU25hY2tiYXIgdXNlZCB0byBkaXNwbGF5IG1lc3NhZ2VzIHdoZW4gaGlkaW5nIGFuZCBzaG93aW5nIGdhbWVzXHJcbiAgICAgKi9cclxuICAgIHNuYWNrYmFyOiBTbmFja2JhcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlciBiYXIgYWxsb3dpbmcgZm9yIGNvbnRyb2xzIG9mIHRoZSBsaWJyYXJ5IGZpbHRlclxyXG4gICAgICovXHJcbiAgICBmaWx0ZXJCYXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGJveCB1c2VkIHRvIG9yZGVyIHRoZSBnYW1lc1xyXG4gICAgICovXHJcbiAgICBzZWxlY3Q6IFNlbGVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbnQgZmlsdGVyaW5nIG9yZGVyXHJcbiAgICAgKi9cclxuICAgIG9yZGVyOiBGaWx0ZXJPcmRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3VsZCBhbGwgZ2FtZXMgYmUgc2hvd24gcmVnYXJkbGVzcyBpZiB0aGV5cmUgaGlkZGVuIG9yIG5vdD9cclxuICAgICAqL1xyXG4gICAgc2hvd0FsbDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrYm94IHNob3dpbmcgaGlkZGVuIGdhbWVzLlxyXG4gICAgICovXHJcbiAgICBjaGVja2JveDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXJlY3Rpb24gb2Ygd2hpY2ggZ2FtZXMgd2lsbCBiZSBvcmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBkaXJlY3Rpb246IE9yZGVyRGlyZWN0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsaXN0IG9mIGFsbCBnYW1lcyBpbiB5b3VyIGxpYnJhcnkuXHJcbiAgICAgKi9cclxuICAgIGdhbWVUaWxlczogTm9kZUxpc3Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFkaWFHYW1lREIgRGF0YWJhc2UuXHJcbiAgICAgKi9cclxuICAgIGRhdGFiYXNlOiBXZWJEYXRhYmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YWRpYUdhbWVEQiBVVUlEIE1hcC5cclxuICAgICAqL1xyXG4gICAgdXVpZE1hcDogV2ViRGF0YWJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVSSBNb2RhbFxyXG4gICAgICovXHJcbiAgICBtb2RhbDogTW9kYWw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXZWIgU2NyYXBlclxyXG4gICAgICovXHJcbiAgICB3ZWJTY3JhcGVyOiBXZWJTY3JhcGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNuYWNrYmFyOiBTbmFja2JhciwgZGF0YWJhc2U6IFdlYkRhdGFiYXNlLCB1dWlkTWFwOiBXZWJEYXRhYmFzZSwgbW9kYWw6IE1vZGFsLCB3ZWJTY3JhcGVyOiBXZWJTY3JhcGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8gSW1wb3J0IGRhdGFiYXNlICYgdXVpZE1hcCBmcm9tIGluZGV4LmpzXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xyXG4gICAgICAgIHRoaXMudXVpZE1hcCA9IHV1aWRNYXA7XHJcblxyXG4gICAgICAgIC8vIEltcG9ydCBzbmFja2JhciBmcm9tIGluZGV4LmpzXHJcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsID0gbW9kYWw7XHJcblxyXG4gICAgICAgIHRoaXMud2ViU2NyYXBlciA9IHdlYlNjcmFwZXI7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZmlsdGVyIGJhciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5maWx0ZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmZpbHRlckJhci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItYmFyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBhcm91bmQgZXZlcnkgZ2FtZSBhbmQgaW5pdGlhbGl6ZXMgdGhlIGVsZW1lbnRzIG5lY2Vzc2FyeSB0byBzaG93IG9yIGhpZGUgaXQuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlQWxsV3JhcHBlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGlsZSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXcmFwcGVyKGVsZW1lbnQsIHRoaXMuZ2V0VVVJRChlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuZ2FtZVRpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydERpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydEdhbWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBnYW1lIFVVSUQgZnJvbSBpdCdzIGpzbG9nIGF0dHJpYnV0ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRpbGVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBnZXRVVUlEKHRpbGU6IEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGlsZVxyXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdqc2xvZycpXHJcbiAgICAgICAgICAgIC5zcGxpdCgnOyAnKVsxXVxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyYXBwZXJFeGlzdHModXVpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkICsgJy0nICsgdXVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIHRpbGUgZWxlbWVudCwgY3JlYXRlIGEgd3JhcHBlciBhcm91bmQgaXQgYW5kIGFuIGljb24gYWxsb3dpbmcgaXQgdG8gYmUgc2hvd24gb3IgaGlkZGVuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0aGUgZ2FtZSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCB0aGUgZ2FtZSB1dWlkXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVXcmFwcGVyKGVsZW1lbnQ6IEVsZW1lbnQsIHV1aWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLndyYXBwZXJFeGlzdHModXVpZCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q29ubmVjdGlvbigpWydkYXRhJ107XHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xyXG4gICAgICAgIGxldCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW3V1aWRdXTtcclxuXHJcbiAgICAgICAgaWYoZW50cnkgPT09IHVuZGVmaW5lZCkgeyAvLyBUaGUgZ2FtZSBpc24ndCBwYXJ0IG9mIFN0YWRpYUdhbWVEQlxyXG4gICAgICAgICAgICBlbnRyeSA9IFsgbnVsbCwgbnVsbCBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB3cmFwcGVyXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdnYW1lLXV1aWQnLCB1dWlkKTtcclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnZ2FtZS1uYW1lJywgZW50cnlbMV0pO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLXdyYXBwZXInKTtcclxuICAgICAgICB3cmFwcGVyLmlkID0gdGhpcy5pZCArICctJyArIHV1aWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWNvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24td3JhcHBlcicpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHZpc2liaWxpdHkgaWNvblxyXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aXNpYmlsaXR5LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJyk7XHJcbiAgICAgICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9ICd2aXNpYmlsaXR5JztcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB2aXNpYmlsaXR5IGljb25cclxuICAgICAgICBjb25zdCBzaG9ydGN1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNob3J0Y3V0LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbGlicmFyeWZpbHRlci1pY29uJyk7XHJcbiAgICAgICAgc2hvcnRjdXQudGV4dENvbnRlbnQgPSAnYWRkX3RvX3F1ZXVlJztcclxuXHJcbiAgICAgICAgLy8gV3JhcCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGVsZW1lbnQgYW5kIGFkZCB0aGUgaWNvbiBiZWZvcmUgaXRcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xyXG4gICAgICAgIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKHZpc2liaWxpdHkpO1xyXG4gICAgICAgIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKHNob3J0Y3V0KTtcclxuXHJcbiAgICAgICAgaWYoU3RhZGlhUGx1c0RCLmlzQ29ubmVjdGVkKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlREIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdXBkYXRlREIuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nKTtcclxuICAgICAgICAgICAgdXBkYXRlREIudGV4dENvbnRlbnQgPSAnY2xvdWRfdXBsb2FkJztcclxuICAgICAgICAgICAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQodXBkYXRlREIpO1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlREIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYlNjcmFwZXIudXBkYXRlR2FtZSh1dWlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIuYWN0aXZhdGUoYFVwZGF0aW5nICR7ZW50cnlbMV19IGluIFN0YWRpYSsgREJgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmKGVudHJ5WzBdID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGljb25XcmFwcGVyKTtcclxuXHJcblxyXG4gICAgICAgIC8vIENoZWNrIHRoZSBzdG9yYWdlIGZvciB2aXNpYmlsaXR5LCBoaWRlIHRoZSBnYW1lIGlmIGJvdGggJ3Zpc2libGUnIGFuZCAnc2hvd0FsbCcgaXMgZmFsc2VcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZXMuaGFzT3duUHJvcGVydHkodXVpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lc1t1dWlkXSA9IHsgdmlzaWJsZTogdHJ1ZSB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSAmJiAhdGhpcy5zaG93QWxsKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgaWNvbiBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciByYXRoZXIgdGhhbiB0aGUgdG9wIGxlZnQgdXNpbmdcclxuICAgICAgICAvLyBhIG1hcmdpbiAodXNpbmcgdGhlICdsZWZ0JyBjc3MgYXR0cmlidXRlIGlzIG5vdCBwb3NzaWJsZSlcclxuICAgICAgICBpY29uV3JhcHBlci5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBgY2FsYygxMDAlIC0gJHtlbGVtZW50LmNsaWVudFdpZHRoIC9cclxuICAgICAgICAgICAgMn1weCkgJHtlbGVtZW50LmNsaWVudEhlaWdodCAvIDJ9cHhgO1xyXG5cclxuICAgICAgICAvLyBXaGVuIHRoZSBpY29uIGlzIGNsaWNrZWQgb25cclxuICAgICAgICB2aXNpYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5nYW1lc1t1dWlkXS52aXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGdhbWUgaXMgdmlzaWJsZSwgc2V0IGl0IHRvIGhpZGRlblxyXG4gICAgICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja2Jhci5hY3RpdmF0ZShMYW5ndWFnZS5nZXQoJ3NuYWNrYmFyLmhpZGUtZ2FtZScpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHNldCBpdCB0byBzaG93blxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja2Jhci5hY3RpdmF0ZShMYW5ndWFnZS5nZXQoJ3NuYWNrYmFyLnNob3ctZ2FtZScpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXNbdXVpZF0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZ2FtZSdzIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHYW1lKHdyYXBwZXIsIGVsZW1lbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBzaG9ydGN1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hvcnQgPSBuZXcgU2hvcnRjdXQoJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vcGxheWVyLycgKyB1dWlkLCBlbnRyeVsxXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZGFsLmFjdGl2YXRlKGBcclxuICAgICAgICAgICAgICAgIDxoND5DcmVhdGUgYSBEZXNrdG9wIFNob3J0Y3V0PC9oND5cclxuICAgICAgICAgICAgICAgIDxwPlByZXNzIHRoZSBidXR0b24gYmVsb3cgdG8gY3JlYXRlIGEgZGVza3RvcCBzaG9ydGN1dCBmb3IgJHtlbnRyeVsxXX0uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkNUdkRYZCBRQUF5V2QgRmp5MDVkIGl2V1VoYyBRU0RIeWMgcnBnWnpjIFJreUgxZSBzdGFkaWFwbHVzX2J1dHRvblwiIGlkPVwic2hvcnRjdXQtYnV0dG9uXCI+U2F2ZSBTaG9ydGN1dDwvZGl2PlxyXG4gICAgICAgICAgICBgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvcnRjdXQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydC5zYXZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGEgZ2FtZSdzIHZpc2liaWxpdHksIG1ha2luZyBzdXJlIGl0J3Mgb25seSBzaG93biB3aGVuIGl0J3Mgc3VwcG9zZWQgdG9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHdyYXBwZXIgVGhlIGdhbWUncyB3cmFwcGVyLCBjcmVhdGVkIGJ5IFtbY3JlYXRlV3JhcHBlcl1dXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRpbGUgVGhlIGdhbWUgdGlsZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhbmltYXRlIFNob3VsZCB0aGUgZ2FtZSBoYXZlIGFuIGFuaW1hdGVkIGNsb3NpbmcgZWZmZWN0P1xyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgdXBkYXRlR2FtZSh3cmFwcGVyOiBFbGVtZW50LCB0aWxlOiBFbGVtZW50LCBhbmltYXRlOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBnYW1lIFVVSURcclxuICAgICAgICBjb25zdCB1dWlkID0gdGhpcy5nZXRVVUlEKHRpbGUpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGdhbWUgaWNvblxyXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICcuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24nXHJcbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbndyYXBwZXIgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICcuc3RhZGlhcGx1c19saWJyYXJ5ZmlsdGVyLWljb24td3JhcHBlcidcclxuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpc24ndCB2aXNpYmxlLi4uXHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVzW3V1aWRdLnZpc2libGUpIHtcclxuICAgICAgICAgICAgLy8gLi4uYnV0IGFsbCBnYW1lcyBzaG91bGQgc3RpbGwgYmUgc2hvd25cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0FsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBpY29uIHRvIGRpc3BsYXkgdGhhdCBpdCdzIG5vdCB2aXNpYmxlIGJ1dCBzaG93biBhbnl3YXlzXHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5LmlubmVySFRNTCA9ICd2aXNpYmlsaXR5X29mZic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzbid0IGhpZGRlblxyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJywgJ2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWNvbndyYXBwZXIuc3R5bGUubWFyZ2luTGVmdCA9IHRpbGUuY2xpZW50V2lkdGggLSBpY29ud3JhcHBlci5jbGllbnRXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UuLi5cclxuICAgICAgICAgICAgICAgIC8vIC4uLmlmIHRoZSBoaWRpbmcgc2hvdWxkIGJlIGFuaW1hdGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZhZGUgdGhlIGdhbWUgdGlsZSBvdXRcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZ0ZXIgMSBzZWNvbmQsIGhpZGUgaXRcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCBub3JtYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyB2aXNpYmxlXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaWNvbiBzdGF5cyBpbiBwbGFjZSBhbmQgZG9lc24ndCBnZXQgcmVzZXQgYmFjayB0byB0aGUgdG9wIGxlZnQgY29ybmVyXHJcbiAgICAgICAgICAgIGljb253cmFwcGVyLnN0eWxlLm1hcmdpbkxlZnQgPSB3cmFwcGVyLmNsaWVudFdpZHRoIC0gaWNvbndyYXBwZXIuY2xpZW50V2lkdGggKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpY29uIHNob3dzIHRoYXQgaXQgaXMgdmlzaWJsZVxyXG4gICAgICAgICAgICB2aXNpYmlsaXR5LmlubmVySFRNTCA9ICd2aXNpYmlsaXR5JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgYWxsIGdhbWVzLCBzaG9ydGhhbmQgZm9yIGxvb3BpbmcgdGhyb3VnaCB0aWxlcyBhbmQgdXBkYXRpbmcgdGhlbSBpbmRpdmlkdWFsbHlcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGxHYW1lcygpIHtcclxuICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2FtZSh0aWxlLnBhcmVudEVsZW1lbnQsIHRpbGUgYXMgRWxlbWVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCB0aGUgc3RvcmVkIGRhdGEgZnJvbSB0aGUgc3luY2hyb25pemVkIGNocm9tZSBzdG9yYWdlIChzdG9yZWQgaW4geW91ciB1c2VyIGRhdGEpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAvLyBDYWxsYmFjayB0aGF0IGlzIHJ1biBhZnRlciB0aGUgZGF0YSBoYXMgYmVlbiByZWFkXHJcbiAgICAgKiBAbWVtYmVyb2YgTGlicmFyeUZpbHRlclxyXG4gICAgICovXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKSA9PiBhbnkgPSAoKSA9PiB7fSkge1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lcyA9IHt9O1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU3luY1N0b3JhZ2UuZ2V0KFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBTeW5jU3RvcmFnZS5MSUJSQVJZX0dBTUVTLFxyXG4gICAgICAgICAgICAgICAgU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX09SREVSLFxyXG4gICAgICAgICAgICAgICAgU3luY1N0b3JhZ2UuTElCUkFSWV9TT1JUX0RJUkVDVElPTixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVzID0gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXSAhPT0gdW5kZWZpbmVkID8gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlciA9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzdWx0W1N5bmNTdG9yYWdlLkxJQlJBUllfU09SVF9PUkRFUi50YWddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogRmlsdGVyT3JkZXIuUkVDRU5UO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLnRhZ10gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLnRhZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBPcmRlckRpcmVjdGlvbi5BU0NFTkRJTkc7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSB0byB0aGUgc3luY2hyb25pemVkIGNocm9tZSBzdG9yYWdlIChzdG9yZWQgaW4geW91ciB1c2VyIGRhdGEpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAvLyBDYWxsYmFjayB0aGF0IGlzIHJ1biBhZnRlciB0aGUgZGF0YSBoYXMgYmVlbiB3cml0dGVuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCkgPT4gYW55ID0gKCkgPT4ge30pIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFN5bmNTdG9yYWdlLnNldChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgW1N5bmNTdG9yYWdlLkxJQlJBUllfR0FNRVMudGFnXTogdGhpcy5nYW1lcyxcclxuICAgICAgICAgICAgICAgIFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfT1JERVIudGFnXTogdGhpcy5vcmRlcixcclxuICAgICAgICAgICAgICAgIFtTeW5jU3RvcmFnZS5MSUJSQVJZX1NPUlRfRElSRUNUSU9OLnRhZ106IHRoaXMuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW5zIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgbG9hZGVkXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChcclxuICAgICAgICAgICAgTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZW5hYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSB2YXJpZXR5IG9mIGV2ZW50cyB0byB0aGUgZmlsdGVyIGJhclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGFkZEZpbHRlckJhckV2ZW50cygpIHtcclxuICAgICAgICAvLyBXaGVuIHRoZSBvcmRlciBpcyBjaGFuZ2VkLCBzZXQgaXQgaW4gdGhlIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLnNlbGVjdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcmRlciA9IHBhcnNlSW50KHRoaXMuc2VsZWN0LmdldCgpWzBdKSBhcyBGaWx0ZXJPcmRlcjtcclxuICAgICAgICAgICAgdGhpcy5zb3J0R2FtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFdoZW4gdGhlIHNob3cgYWxsIGNoZWNrYm94IGlzIGNsaWNrZWQsIHRvZ2dsZSB0aGUgc2hvd0FsbCB2YXJpYWJsZSBhbmQgdXBkYXRlIHRoZSBnYW1lc1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FsbCA9ICh0aGlzLmNoZWNrYm94IGFzIGFueSkuY2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGxHYW1lcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICcjJyArIHRoaXMuZmlsdGVyQmFyLmlkICsgJy1kaXJlY3Rpb24nXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBUb2dnbGUgdGhlIHNvcnQgZGlyZWN0aW9uXHJcbiAgICAgICAgZGlyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJldmVzZVNvcnREaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXNlU29ydERpcmVjdGlvbigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnIycgKyB0aGlzLmZpbHRlckJhci5pZCArICctZGlyZWN0aW9uJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkRFU0NFTkRJTkc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZVNvcnREaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudDogRWxlbWVudCA9IHRoaXMucmVuZGVyZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJyMnICsgdGhpcy5maWx0ZXJCYXIuaWQgKyAnLWRpcmVjdGlvbidcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2Rlc2NlbmRpbmcnLCB0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uREVTQ0VORElORyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYXNjZW5kaW5nJywgdGhpcy5kaXJlY3Rpb24gPT09IE9yZGVyRGlyZWN0aW9uLkFTQ0VORElORyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvcnRHYW1lcygpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgc3RvcHBlZCwgZGVzdHJveXMgbmVjZXNzYXJ5IHBhcnRzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFkaWFwbHVzX2xpYnJhcnlmaWx0ZXItaWNvbicpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KFxyXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvcnRzIHRoZSBnYW1lIGxpc3QgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHNvcnQgb3JkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIExpYnJhcnlGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgc29ydEdhbWVzKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSAoQXJyYXkuZnJvbSh0aGlzLmdhbWVUaWxlcykgYXMgRWxlbWVudFtdKS5tYXAoXHJcbiAgICAgICAgICAgIChlKSA9PiBlLnBhcmVudEVsZW1lbnRcclxuICAgICAgICApOyAvLyBHZXQgYWxsIHdyYXBwZXJzIGFzIGFuIGFycmF5XHJcbiAgICAgICAgYXJyID0gYXJyLnNvcnQoRmlsdGVyT3JkZXIuZ2V0U29ydGVyKHRoaXMub3JkZXIpIGFzIGFueSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gT3JkZXJEaXJlY3Rpb24uQVNDRU5ESU5HKSB7XHJcbiAgICAgICAgICAgIGFyciA9IGFyci5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wcmVwZW5kKGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgZXZlcnkgc2Vjb25kLCBjcmVhdGVzIGFuZCB1cGRhdGVzIGVsZW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBMaWJyYXJ5RmlsdGVyXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChVdGlsLmlzSW5Ib21lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcuQ1ZWWGZjLllZeTNaYicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke0ZpbHRlck9yZGVyLlJFQ0VOVH1cIj4ke0xhbmd1YWdlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAnbGlicmFyeS1maWx0ZXIucmVjZW50J1xyXG4gICAgICAgICAgICAgICAgKX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJPcmRlci5BTFBIQUJFVElDQUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiPiR7TGFuZ3VhZ2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICdsaWJyYXJ5LWZpbHRlci5hbHBoYWJldGljYWwnXHJcbiAgICAgICAgICAgICAgICApfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtGaWx0ZXJPcmRlci5SQU5ET019XCI+JHtMYW5ndWFnZS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpYnJhcnktZmlsdGVyLnJhbmRvbSdcclxuICAgICAgICAgICAgICAgICl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9JyR7dGhpcy5maWx0ZXJCYXIuaWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLWRpcmVjdGlvbid9JyBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGFzY2VuZGluZyBzdGFkaWFwbHVzX2ZpbHRlcmJhci1kaXJlY3Rpb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcHJldHR5LCBjaGVja2JveCB9ID0gbmV3IENoZWNrYm94KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2xpYnJhcnktZmlsdGVyLnNob3ctaGlkZGVuJylcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEJpZ2dlcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRTaGFwZShDaGVja2JveFNoYXBlLkNVUlZFRClcclxuICAgICAgICAgICAgICAgICAgICAuYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX2ZpbHRlcmJhci1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCYXIuYXBwZW5kQ2hpbGQocHJldHR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3ggPSBjaGVja2JveDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVRpbGVzID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yQWxsKCcuR3FMaTRkJyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJCYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWxsV3JhcHBlcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdHlsZSB0aGUgY3VzdG9tIHNlbGVjdCBib3ggaW4gdGhlIGZpbHRlciBiYXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJhci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBsYWNlaG9sZGVyOiBGaWx0ZXJPcmRlci5SRUNFTlQgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZXQodGhpcy5vcmRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWx0ZXJCYXJFdmVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERpZmZlcmVudCB0eXBlcyBvZiBmaWx0ZXJpbmcsIHJlcHJlc2VudGVkIGFzIG51bWJlcnNcclxuICpcclxuICogQGV4cG9ydCB0aGUgRmlsdGVyT3JkZXIgdHlwZVxyXG4gKiBAY2xhc3MgRmlsdGVyT3JkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJPcmRlciB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgU3RhZGlhIHNvcnRpbmcsIHJlY2VudC9uZXcgZ2FtZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSRUNFTlQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxwaGFiZXRpY2FsIG9yZGVyLlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBtZW1iZXJvZiBGaWx0ZXJPcmRlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQUxQSEFCRVRJQ0FMID0gMTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSYW5kb20gb3JkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSQU5ET00gPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzb3J0aW5nIG1ldGhvZCBvZiB0aGUgaW5wdXRlZCBvcmRlci5cclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHNvcnRpbmcgZ2FtZXMgYnkgdGhlIGlucHV0ZWQgb3JkZXIuXHJcbiAgICAgKiBAcGFyYW0ge0ZpbHRlck9yZGVyfSBvcmRlclxyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRTb3J0ZXIob3JkZXI6IEZpbHRlck9yZGVyKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHN3aXRjaCAob3JkZXIpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLlJFQ0VOVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRSZWNlbnQ7XHJcblxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUxQSEFCRVRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEFscGhhYmV0aWNhbDtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SQU5ET006XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0UmFuZG9tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvcnQgYnkgcmVjZW50IGdhbWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0geyp9IGFcclxuICAgICAqIEBwYXJhbSB7Kn0gYlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB3aGljaCBwYXJhbWV0ZXIgaXMgd2hlcmUuXHJcbiAgICAgKiBAbWVtYmVyb2YgRmlsdGVyT3JkZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJlY2VudChhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTb3J0IGFscGhhYmV0aWNhbGx5LlxyXG4gICAgICogXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHsqfSBhXHJcbiAgICAgKiBAcGFyYW0geyp9IGJcclxuICAgICAqIEByZXR1cm5zIG51bWJlciByZXByZXNlbnRpbmcgd2hpY2ggcGFyYW1ldGVyIGlzIHdoZXJlLlxyXG4gICAgICogQG1lbWJlcm9mIEZpbHRlck9yZGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHNvcnRBbHBoYWJldGljYWwoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IG5hbWVBID0gYS5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCID0gYi5nZXRBdHRyaWJ1dGUoJ2dhbWUtbmFtZScpO1xyXG5cclxuICAgICAgICBpZiAobmFtZUEgPT09IG51bGwgfHwgbmFtZUIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lQik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ydFJhbmRvbShhOiBhbnksIGI6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyKSAtIDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnVtIGNvbnRhaW5pbmcgZGlmZmVyZW50IG9yZGVyIGRpcmVjdGlvbnNcclxuICpcclxuICogQGV4cG9ydCB0aGUgT3JkZXJEaXJlY3Rpb24gdHlwZS5cclxuICogQGVudW0ge251bWJlcn1cclxuICovXHJcbmV4cG9ydCBlbnVtIE9yZGVyRGlyZWN0aW9uIHtcclxuICAgIEFTQ0VORElORyxcclxuICAgIERFU0NFTkRJTkcsXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XHJcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWkvVUlDb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL0xvb2tpbmdGb3JHcm91cC5zY3NzJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi9MYW5ndWFnZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UnO1xyXG5pbXBvcnQgJ3NsaW0tc2VsZWN0L2Rpc3Qvc2xpbXNlbGVjdC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi91aS9zdHlsZXMvU2VsZWN0LnNjc3MnO1xyXG5pbXBvcnQgeyBTdGFkaWFQbHVzREIgfSBmcm9tICcuLi9TdGFkaWFQbHVzREInO1xyXG5cclxuY29uc3QgeyBjaHJvbWUsIFJUQ1BlZXJDb25uZWN0aW9uIH0gPSAod2luZG93IGFzIGFueSk7XHJcblxyXG4vKipcclxuICogQSBuZXR3b3JrIG1vbml0b3IgYWxsb3dpbmcgdXNlcnMgdG8gc2VlIHRoZWlyIG5ldHdvcmsgc3RhdGlzdGljcyB3aGlsZSBwbGF5aW5nIGEgZ2FtZS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgTmV0d29ya01vbml0b3IgdHlwZS5cclxuICogQGNsYXNzIE5ldHdvcmtNb25pdG9yXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9va2luZ0Zvckdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0YWcsIHVzZWQgaW4gbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIHRhZzogc3RyaW5nID0gJ2xvb2tpbmctZm9yLWdyb3VwJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YWIgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgdGFiRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbW9uaXRvciBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQ29tcG9uZW50XV0gdXNlZCB0byBkaXNwbGF5IHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudDogVUlDb21wb25lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUJ1dHRvbl1dIHVzZWQgdG8gb3BlbiB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBidXR0b246IFVJQnV0dG9uO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBhY3RpdmUgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIG1vbml0b3IgaXMgb3BlbiBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGxvb2tpbmdGb3JHcm91cDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGdhbWVVVUlEOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWaXNpYmxlIG5ldHdvcmsgc3RhdGlzdGljcy5cclxuICAgICAqL1xyXG4gICAgdmlzaWJsZTogYW55ID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgW1tVSUNvbXBvbmVudF1dIGFuZCBhIFtbVUlCdXR0b25dXS5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVVJKCkge1xyXG4gICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J0NUdkRYZCBRQUF5V2QgRmp5MDVkIGl2V1VoYyBRU0RIeWMgcnBnWnpjIFJreUgxZSBzdGFkaWFwbHVzX2J1dHRvbiBzdGFkaWFwbHVzX2xvb2tpbmdmb3Jncm91cC10b2dnbGUtYnV0dG9uJyBpZD0nJHt0aGlzLmlkfS10b2dnbGVidXR0b24nPiR7TGFuZ3VhZ2UuZ2V0KCdsb29raW5nLWZvci1ncm91cC50b2dnbGUtYnV0dG9uLnN0YXJ0Jyl9PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBpZD0nJHt0aGlzLmlkfS1ncm91cHMnIGNsYXNzPSdzdGFkaWFwbHVzX2xvb2tpbmdmb3Jncm91cC1ncm91cHMnPlxyXG4gICAgICAgICAgICA8aDY+R3JvdXBzPC9oNj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9JyR7dGhpcy5pZH0tcmVmcmVzaCcgY2xhc3M9J21hdGVyaWFsLWljb25zLWV4dGVuZGVkIHJlZnJlc2gnPnJlZnJlc2g8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPScke3RoaXMuaWR9LWdyb3VwLWxpc3QnIGNsYXNzPSdncm91cC1saXN0Jz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBpZighU3RhZGlhUGx1c0RCLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgICAgIGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICA8aDY+Tm90IGF1dGhlbnRpY2F0ZWQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHA+U2VlbXMgbGlrZSB5b3UndmUgZm91bmQgYSBTdGFkaWErIERCIGZlYXR1cmUsIHRoaXMgaXMgbm90IGF2YWlsYWJsZSBhdCB0aGUgbW9tZW50IHNpbmNlIHlvdSBhcmVuJ3QgbG9nZ2VkIGluLiBTaWduIGluIGluIHRoZSBTdGFkaWErIHBvcHVwIHRvIGFjY2VzcyBpdC48L3A+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxyXG4gICAgICAgICAgICBMYW5ndWFnZS5nZXQoJ2xvb2tpbmctZm9yLWdyb3VwLm5hbWUnKSxcclxuICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19sb29raW5nZm9yZ3JvdXAtdGFiJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltYWdlcy9pY29ucy9uZXR3b3JrLW1vbml0b3Iuc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVUlCdXR0b24oaWNvbiwgJ0xGRycsIHRoaXMuaWQgKyAnLWJ1dHRvbicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2hyb21lIHN0b3JhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBnZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICAvKkxvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLmdldCgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0W0xvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLnRhZ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHJlc3VsdFtMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy50YWddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkqL1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjaHJvbWUgc3RvcmFnZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIGN1cnJlbnQgdmFyaWFibGUgc3RhdGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KCgpID0+IGFueSl9IFtjYWxsYmFjaz0oKCkgPT4ge30pXSBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgc3RvcmFnZSB1cGRhdGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcclxuICAgICAqL1xyXG4gICAgc2V0U3RvcmFnZShjYWxsYmFjazogKCgpID0+IGFueSkgPSAoKCkgPT4ge30pKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTsgLy9Mb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy5zZXQodGhpcy52aXNpYmxlLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcclxuICAgICAgICBcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR3JvdXBzKCk6IHZvaWQge1xyXG4gICAgICAgIFN0YWRpYVBsdXNEQi5MRkdDb25uZWN0b3IuZ2V0KHRoaXMuZ2FtZVVVSUQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHVzZXIgb2YgcmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YWRpYXBsdXNfbG9va2luZ2Zvcmdyb3VwLWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2VtYWlsJz4ke3VzZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0tZ3JvdXAtbGlzdGApLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiBMb2dnZXIuZXJyb3IoZXJyLmVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idXR0b24ub25QcmVzc2VkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnQub3BlblRhYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoU3RhZGlhUGx1c0RCLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lVVVJRCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKVtsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoLTFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy10b2dnbGVidXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9va2luZ0Zvckdyb3VwID0gIXRoaXMubG9va2luZ0Zvckdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9LWdyb3Vwc2ApLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnLCB0aGlzLmxvb2tpbmdGb3JHcm91cCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFkaWFQbHVzREIuTEZHQ29ubmVjdG9yLnBvc3QodGhpcy5nYW1lVVVJRCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyb3VwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiBMb2dnZXIuZXJyb3IoZXJyLmVycm9yKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uaW5uZXJIVE1MID0gTGFuZ3VhZ2UuZ2V0KCdsb29raW5nLWZvci1ncm91cC50b2dnbGUtYnV0dG9uLicgKyAodGhpcy5sb29raW5nRm9yR3JvdXAgPyAnc3RvcCcgOiAnc3RhcnQnKSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuYnV0dG9uLmNvbnRhaW5lci5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY29udGFpbmVyLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jb21wb25lbnQub3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jbG9zZVRhYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFVJQnV0dG9uIH0gZnJvbSAnLi4vdWkvVUlCdXR0b24nO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL1VJQ29tcG9uZW50JztcclxuaW1wb3J0ICcuL3N0eWxlcy9OZXR3b3JrTW9uaXRvci5zY3NzJztcclxuXHJcbi8vIEltcG9ydCB0aGUgTW9uaXRvciBydW5uYWJsZSBhcyBhIHJhdyBzdHJpbmdcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgcnVubmFibGUgZnJvbSAnIXJhdy1sb2FkZXIhLi4vTW9uaXRvclJ1bm5hYmxlJztcclxuaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94QW5pbWF0aW9uIH0gZnJvbSAnLi4vdWkvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZSc7XHJcblxyXG5jb25zdCB7IGNocm9tZSwgUlRDUGVlckNvbm5lY3Rpb24gfSA9ICh3aW5kb3cgYXMgYW55KTtcclxuXHJcbi8qKlxyXG4gKiBBIG5ldHdvcmsgbW9uaXRvciBhbGxvd2luZyB1c2VycyB0byBzZWUgdGhlaXIgbmV0d29yayBzdGF0aXN0aWNzIHdoaWxlIHBsYXlpbmcgYSBnYW1lLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBOZXR3b3JrTW9uaXRvciB0eXBlLlxyXG4gKiBAY2xhc3MgTmV0d29ya01vbml0b3JcclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOZXR3b3JrTW9uaXRvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICduZXR3b3JrLW1vbml0b3InO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhYiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICB0YWJFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtb25pdG9yIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlDb21wb25lbnRdXSB1c2VkIHRvIGRpc3BsYXkgdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50OiBVSUNvbXBvbmVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBbW1VJQnV0dG9uXV0gdXNlZCB0byBvcGVuIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbjogVUlCdXR0b247XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgbW9uaXRvciBpcyBvcGVuIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgbW9uaXRvck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19uZXR3b3JrLW1vbml0b3InKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJ1bm5hYmxlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZpc2libGUgbmV0d29yayBzdGF0aXN0aWNzLlxyXG4gICAgICovXHJcbiAgICB2aXNpYmxlOiBhbnkgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBbW1VJQ29tcG9uZW50XV0gYW5kIGEgW1tVSUJ1dHRvbl1dLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcclxuICAgICAqL1xyXG4gICAgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgVUlDb21wb25lbnQoXHJcbiAgICAgICAgICAgIExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLm5hbWUnKSxcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdDVHZEWGQgUUFBeVdkIEZqeTA1ZCBpdldVaGMgUVNESHljIHJwZ1p6YyBSa3lIMWUgc3RhZGlhcGx1c19idXR0b24gc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvci10b2dnbGUtYnV0dG9uJyBpZD0nJHt0aGlzLmlkfS10b2dnbGVidXR0b24nPiR7TGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IudG9nZ2xlLWJ1dHRvbi5zaG93Jyl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGg2PiR7TGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3IuaGVhZGluZy12aXNpYmxlJyl9PC9oNj5cclxuICAgICAgICAgICAgPHVsIGlkPScke3RoaXMuaWR9LXZpc2libGVsaXN0Jz48L3VsPlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICB0aGlzLmlkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLXRhYicpO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvbmV0d29yay1tb25pdG9yLnN2ZycpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IFVJQnV0dG9uKGljb24sIExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLmJ1dHRvbi1sYWJlbCcpLCB0aGlzLmlkICsgJy1idXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCgpID0+IHsgdGhpcy51cGRhdGVWaXNpYmxlKCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCB0aGUgbmV0d29yayBtb25pdG9yIHJ1bm5hYmxlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBzdGFydFJ1bm5hYmxlKCkge1xyXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KHJ1bm5hYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gdGhlIG1vbml0b3IuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9wZW5Nb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9uaXRvck9wZW4gPSB0cnVlO1xyXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KCdTdGFkaWFQbHVzTW9uaXRvci5zdGFydCgpJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSB0aGUgbW9uaXRvci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgTmV0d29ya01vbml0b3JcclxuICAgICAqL1xyXG4gICAgY2xvc2VNb25pdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9uaXRvck9wZW4gPSBmYWxzZTtcclxuICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc3RvcCgpJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMgd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjaHJvbWUgc3RvcmFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geygoKSA9PiBhbnkpfSBbY2FsbGJhY2s9KCgpID0+IHt9KV0gY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHN0b3JhZ2UgdXBkYXRlLlxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2UoY2FsbGJhY2s6ICgoKSA9PiBhbnkpID0gKCgpID0+IHt9KSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLmdldCgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0W0xvY2FsU3RvcmFnZS5NT05JVE9SX1NUQVRTLnRhZ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHJlc3VsdFtMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy50YWddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGNocm9tZSBzdG9yYWdlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgY3VycmVudCB2YXJpYWJsZSBzdGF0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoKCkgPT4gYW55KX0gW2NhbGxiYWNrPSgoKSA9PiB7fSldIGNhbGxiYWNrIGNhbGxlZCBhZnRlciBzdG9yYWdlIHVwZGF0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlKGNhbGxiYWNrOiAoKCkgPT4gYW55KSA9ICgoKSA9PiB7fSkpIHtcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuTU9OSVRPUl9TVEFUUy5zZXQodGhpcy52aXNpYmxlLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRSdW5uYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVUkoKTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3RpbWUnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLnRpbWUnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdyZXNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5yZXNvbHV0aW9uJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZnBzJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5mcHMnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdsYXRlbmN5JyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5sYXRlbmN5JyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29kZWMnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLmNvZGVjJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAndHJhZmZpYycsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3Iuc3RhdHMudHJhZmZpYycpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2N1cnJlbnQtdHJhZmZpYycsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogTGFuZ3VhZ2UuZ2V0KCduZXR3b3JrLW1vbml0b3Iuc3RhdHMuY3VycmVudC10cmFmZmljJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnYXZlcmFnZS10cmFmZmljJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5hdmVyYWdlLXRyYWZmaWMnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdwYWNrZXRzLWxvc3QnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLnBhY2tldHMtbG9zdCcpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2F2ZXJhZ2UtcGFja2V0LWxvc3MnLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IExhbmd1YWdlLmdldCgnbmV0d29yay1tb25pdG9yLnN0YXRzLmF2ZXJhZ2UtcGFja2V0LWxvc3MnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdqaXR0ZXItYnVmZmVyJyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci5zdGF0cy5qaXR0ZXItYnVmZmVyJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yID0gbnVsbCcpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmRpc2FibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB3aGljaCBzdGF0aXN0aWNzIHNob3VsZCBiZSB2aXNpYmxlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBOZXR3b3JrTW9uaXRvclxyXG4gICAgICovXHJcbiAgICB1cGRhdGVWaXNpYmxlKCkge1xyXG4gICAgICAgIFV0aWwuZGVzYW5kYm94KGBTdGFkaWFQbHVzTW9uaXRvci5zZXRWaXNpYmxlKCR7SlNPTi5zdHJpbmdpZnkodGhpcy52aXNpYmxlKX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIE5ldHdvcmtNb25pdG9yXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSAmJiBVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uT3BlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5kZXNhbmRib3goJ1N0YWRpYVBsdXNNb25pdG9yLnNldEVkaXRhYmxlKHRydWUpJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkNsb3NlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBVdGlsLmRlc2FuZGJveCgnU3RhZGlhUGx1c01vbml0b3Iuc2V0RWRpdGFibGUoZmFsc2UpJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXZpc2libGVsaXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52aXNpYmxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdCA9IHRoaXMudmlzaWJsZVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwcmV0dHksIGNoZWNrYm94fSA9IG5ldyBDaGVja2JveChzdGF0Lm5hbWUpLnNldEJpZ2dlcih0cnVlKS5zZXRBbmltYXRpb24oQ2hlY2tib3hBbmltYXRpb24uU01PT1RIKS5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXR0eS5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX25ldHdvcmttb25pdG9yLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChwcmV0dHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHN0YXQuZW5hYmxlZDtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZVtpXS5lbmFibGVkID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyAnLXRvZ2dsZWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgdGhpcy5tb25pdG9yT3Blbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5tb25pdG9yT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci50b2dnbGUtYnV0dG9uLmhpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPSBMYW5ndWFnZS5nZXQoJ25ldHdvcmstbW9uaXRvci50b2dnbGUtYnV0dG9uLmhpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJywgdGhpcy5tb25pdG9yT3Blbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jcmVhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYnV0dG9uLm9uUHJlc3NlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW5UYWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbXBvbmVudC5vcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsb3NlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFVdGlsLmlzSW5HYW1lKCkgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keT4uc3RhZGlhcGx1c19uZXR3b3JrbW9uaXRvcicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb25pdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gICAgc3RhdGljIFdJTkRPV1M6IHN0cmluZyA9IFwiV2luMzJcIjtcclxuICAgIHN0YXRpYyBNQUNPUzogc3RyaW5nID0gXCJNYWNJbnRlbFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFzdGVGcm9tQ2xpcGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHRhZzogc3RyaW5nICA9ICdwYXN0ZS1mcm9tLWNsaXBib2FyZCc7XHJcblxyXG4gICAgcHJvdGVjdGVkIHRhcmdldDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdGFydHVwLCBpbml0aWFsaXplcyBpbXBvcnRhbnQgdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBvbiBzdG9wLCBtYWtlcyBzdXJlIHRvIGRpc3Bvc2Ugb2YgZWxlbWVudHMgYW5kIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb25jZSBldmVyeSBzZWNvbmQuXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uVXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGlmIChVdGlsLmlzSW5HYW1lKCkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZW5kZXJlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMucmVuZGVyZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duRXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBrZXlkb3duRXZlbnRMaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjdHJsS2V5OiBib29sZWFuO1xyXG4gICAgICAgIHN3aXRjaChuYXZpZ2F0b3IucGxhdGZvcm0pIHtcclxuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS5XSU5ET1dTOlxyXG4gICAgICAgICAgICAgICAgY3RybEtleSA9IGV2ZW50LmN0cmxLZXk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0uTUFDT1M6XHJcbiAgICAgICAgICAgICAgICBjdHJsS2V5ID0gZXZlbnQubWV0YUtleTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3RybEtleSAmJiAnS2V5VicgPT0gZXZlbnQuY29kZSkge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbihmdW5jdGlvbihkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBJbnB1dEV2ZW50KCdpbnB1dCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dEV2ZW50SW5pdFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcImluc2VydFRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBvc2luZzogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVJRXZlbnRJbml0XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnRJbml0XHJcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IFdlYkRhdGFiYXNlIH0gZnJvbSAnLi4vV2ViRGF0YWJhc2UnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL1JhdGluZ3Muc2Nzcyc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IGFkZGluZyBNZXRhY3JpdGljIHJhdGluZ3MgdG8gZXZlcnkgU3RhZGlhIGdhbWUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFJhdGluZ3MgdHlwZVxyXG4gKiBAY2xhc3MgUmF0aW5nc1xyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJhdGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAncmF0aW5ncyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmF0aW5nIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFN0YWRpYUdhbWVEQiBkYXRhYmFzZS5cclxuICAgICAqL1xyXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFN0YWRpYUdhbWVEQiBVVUlEIE1hcC5cclxuICAgICAqL1xyXG4gICAgdXVpZE1hcDogV2ViRGF0YWJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdmFsdWUgZnJvbSBlYWNoIGJvdW5kIGluIHdoaWNoIGEgZ2FtZSB3aWxsIGdldCAwIG9yIDUgc3RhcnMuXHJcbiAgICAgKi9cclxuICAgIGdyYWNlQW1vdW50OiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBzdGFycyB0byBhd2FyZC5cclxuICAgICAqL1xyXG4gICAgbWF4U3RhcnMgPSA1O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBXZWJEYXRhYmFzZSwgdXVpZE1hcDogV2ViRGF0YWJhc2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHJhdGluZyBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfcmF0aW5nJywgJ21hdGVyaWFsLWljb25zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBnYW1lIFVVSUQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgdGhlIGdhbWUgVVVJRCBhcyBhIHN0cmluZy5cclxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXHJcbiAgICAgKi9cclxuICAgIGdldFVVSUQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24uaHJlZi5zdWJzdHJpbmcoJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vc3RvcmUvZGV0YWlscy8nLmxlbmd0aCwgJ2h0dHBzOi8vc3RhZGlhLmdvb2dsZS5jb20vc3RvcmUvZGV0YWlscy8nLmxlbmd0aCArIDM2KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgcmF0aW5nLCBmZXRjaGluZyBpdCBmcm9tIHRoZSBkYXRhYmFzZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUmF0aW5nc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVSYXRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IHRoaXMuZ2V0VVVJRCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmRhdGFiYXNlLmdldENvbm5lY3Rpb24oKVsnZGF0YSddO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMudXVpZE1hcC5nZXRDb25uZWN0aW9uKClbJ3V1aWRNYXAnXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW3V1aWRdXTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1yYXRpbmcnLCBlbnRyeVs2XSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyBob3cgbWFueSBzdGFycyBhIGdhbWUgc2hvdWxkIGhhdmUgYmFzZWQgb24gaXQncyByYXRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGluZyB0aGUgZ2FtZSdzIHJhdGluZy5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gYW4gYXJyYXkgb2YgaWNvbiBzdHJpbmdzLCBiZWluZyBlaXRoZXIgXCJzdGFyXCIsIFwic3Rhcl9oYWxmXCIgb3IgXCJzdGFyX291dGxpbmVcIi5cclxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzIFxyXG4gICAgICovXHJcbiAgICBnZXRTdGFycyhyYXRpbmc6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBvdXRwdXRTdGFycyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDbGFtcHMgdGhlIHJhdGluZyB0byB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAxLFxyXG4gICAgICAgIC8vIHdoZXJlICgwICsgZ3JhY2VBbW91bnQpIGlzIDAgYW5kICgxMDAgLSBncmFjZUFtb3VudCkgaXMgMVxyXG4gICAgICAgIGNvbnN0IGNsYW1wZWRSID0gKHJhdGluZyAvIDEwMCkgKiAoMSArICh0aGlzLmdyYWNlQW1vdW50IC8gMTAwKSAqIDIpIC0gKHRoaXMuZ3JhY2VBbW91bnQgLyAxMDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgciA9IGNsYW1wZWRSOyBpIDwgdGhpcy5tYXhTdGFyczsgaSArPSAxLCByIC09IDEgLyB0aGlzLm1heFN0YXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChyID49IDEgLyB0aGlzLm1heFN0YXJzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRTdGFycy5wdXNoKCdzdGFyJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAociA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRTdGFycy5wdXNoKCdzdGFyX2hhbGYnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFN0YXJzLnB1c2goJ3N0YXJfb3V0bGluZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0U3RhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIFJhdGluZ3NcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgUmF0aW5nc1xyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIHVwZGF0ZXMgdGhlIHJhdGluZyBlbGVtZW50IHRvIG1ha2Ugc3VyZSBpdCBhbHdheXMgZGlzcGxheXMgdGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBSYXRpbmdzXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIGlmKFV0aWwuaXNJblN0b3JlRGV0YWlsKCkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmF0aW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXRpbmcgPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJhdGluZycpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJzID0gdGhpcy5nZXRTdGFycyhyYXRpbmcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocmF0aW5nID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcuWnpCSlNiID4gLkJNVW5mZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihuZXh0U2libGluZyA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXh0U2libGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmVsZW1lbnQsIG5leHRTaWJsaW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdGFycy5qb2luKCcgJyl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFkaWFwbHVzX3JhdGluZy10b29sdGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3JhdGluZ30gLyAxMDAgKCR7TGFuZ3VhZ2UuZ2V0KCdyYXRpbmdzLnNvdXJjZS1uYW1lJyl9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vTGFuZ3VhZ2UnO1xyXG5pbXBvcnQgeyBTdGFkaWFQbHVzREIgfSBmcm9tICcuLi9TdGFkaWFQbHVzREInO1xyXG5pbXBvcnQgJy4vc3R5bGVzL1N0YWRpYVBsdXNEQkhvb2suc2Nzcyc7XHJcblxyXG4vLyBJbXBvcnQgdGhlIHJ1bm5hYmxlIGFzIGEgcmF3IHN0cmluZ1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBydW5uYWJsZSBmcm9tICchcmF3LWxvYWRlciEuLi91dGlsL1dlYlNjcmFwZXJSdW5uYWJsZSc7XHJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJy4uLy4uL2RvY3MvYXNzZXRzL2pzL21haW4nO1xyXG5cclxuY29uc3QgY2hyb21lID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbi8qKlxyXG4gKiBBIHdlYiBzY3JhcGVyIHRoYXQgdHJhY2tzIGh0dHAgcmVxdWVzdHMgYW5kIHBhcnNlcyB0aGVtLlxyXG4gKlxyXG4gKiBAZXhwb3J0IHRoZSBXZWJTY3JhcGVyIHR5cGUuXHJcbiAqIEBjbGFzcyBXZWJTY3JhcGVyXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV2ViU2NyYXBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgdGFnLCB1c2VkIGluIGxhbmd1YWdlIGZpbGVzLlxyXG4gICAgICovXHJcbiAgICB0YWc6IHN0cmluZyA9ICdzdGFkaWEtcGx1cy1kYic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcG9wdXAgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgcG9wdXA6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgaW4gZ2FtZS5cclxuICAgICAqL1xyXG4gICAgaW5HYW1lOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzYW5kYm94ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc2FuZGJveGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNhbmRib3hlci5pZCA9ICd3ZWItc2NyYXBlci1zYW5kYm94ZXInO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhbmRib3hlcik7XHJcbiAgICAgICAgICAgIHNhbmRib3hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHNhbmRib3hlci5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSk7XHJcbiAgICAgICAgICAgICAgICBTdGFkaWFQbHVzREIuUHJvZmlsZUNvbm5lY3Rvci5zZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBydW5uYWJsZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgbG9ncyB0byB0aGUgY29uc29sZS5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIFdlYlNjcmFwZXJcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyduYW1lJzogdGhpcy5uYW1lfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIGxvZ3MgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBXZWJTY3JhcGVyXHJcbiAgICAgKi9cclxuICAgIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7J25hbWUnOiB0aGlzLm5hbWV9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR2FtZSh1dWlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua3NaWWdjLlZHWmNVYicpLmdldEF0dHJpYnV0ZSgnZGF0YS1wbGF5ZXItaWQnKTtcclxuICAgICAgICBVdGlsLmRlc2FuZGJveChgXHJcbiAgICAgICAgICAgIFdlYlNjcmFwZXJSdW5uYWJsZS5mZXRjaERhdGEoJyR7dXNlcklkfScsICcke3V1aWR9JylcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbmRib3hlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWItc2NyYXBlci1zYW5kYm94ZXInKTtcclxuICAgICAgICAgICAgICAgIHNhbmRib3hlci5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBzYW5kYm94ZXIuY2xpY2soKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHsgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudCc7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vTG9nZ2VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvU3RvcmVGaWx0ZXIuc2Nzcyc7XHJcbmltcG9ydCB7IFdlYkRhdGFiYXNlIH0gZnJvbSAnLi4vV2ViRGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuXHJcbi8qKlxyXG4gKiBBIHNlYXJjaCBiYXIgZGlzcGxheWVkIG9uIHRoZSBzdG9yZSBwYWdlIG9mIFN0YWRpYS5cclxuICpcclxuICogQGV4cG9ydCB0aGUgU3RvcmVGaWx0ZXIgdHlwZS5cclxuICogQGNsYXNzIFN0b3JlRmlsdGVyXHJcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RvcmVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IHRhZywgdXNlZCBpbiBsYW5ndWFnZSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAnc3RvcmUtZmlsdGVyJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZWFyY2ggYmFyIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSB0ZW1wbGF0ZSBlbGVtZW50IGZvciBpbmRpdmlkdWFsIGdhbWVzIGluIHRoZSBzZWFyY2ggYm94LlxyXG4gICAgICovXHJcbiAgICBnYW1lVGVtcGxhdGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFN0YWRpYUdhbWVEQiBkYXRhYmFzZS5cclxuICAgICAqL1xyXG4gICAgZGF0YWJhc2U6IFdlYkRhdGFiYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFN0YWRpYUdhbWVEQiBVVUlEIE1hcC5cclxuICAgICAqL1xyXG4gICAgdXVpZE1hcDogV2ViRGF0YWJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBhbGwgZ2FtZSBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgZ2FtZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZWFyY2ggaW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHNlYXJjaEZpZWxkOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogV2ViRGF0YWJhc2UsIHV1aWRNYXA6IFdlYkRhdGFiYXNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XHJcbiAgICAgICAgdGhpcy51dWlkTWFwID0gdXVpZE1hcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHNlYXJjaCBiYXIgYW5kIG5lY2Vzc2FyeSBlbGVtZW50cy92YXJpYWJsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFN0b3JlRmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHRoaXMuZGF0YWJhc2UuZ2V0Q29ubmVjdGlvbigpWydkYXRhJ107XHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy51dWlkTWFwLmdldENvbm5lY3Rpb24oKVsndXVpZE1hcCddO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zdG9yZWZpbHRlcicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmFyJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj1cIiR7Y29ubmVjdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb25uZWN0aW9uLmxlbmd0aCldWzFdfS4uLlwiIGlkPScke3RoaXMuaWR9LXNlYXJjaCc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnYW1lcycgaWQ9JyR7dGhpcy5pZH0tZ2FtZXMnPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGNvbm5lY3Rpb25bbWFwW2tleV1dO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zdG9yZWZpbHRlci1nYW1lJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8zNjAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGV0YWlsJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9J25hbWUnPkxvcmVtIElwc3VtPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3RhZGlhcGx1c19tdXRlZCB0YWdzJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcsIGtleSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRhZ3MnLCBlbnRyeVsyXSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL3N0YWRpYS5nb29nbGUuY29tXCIgYXMgYW55O1xyXG4gICAgICAgICAgICBjb25zdCBsb2NBcnIgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIGlmKGxvY0Fyci5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBsb2NBcnIuc2xpY2UoMCwgNSkuam9pbignLycpICsgJy8nO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoICsgKHVybC5lbmRzV2l0aCgnLycpID8gLTEgOiAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3RvcmVJZCA9IGVudHJ5WzBdLm1hdGNoKC9odHRwczpcXC9cXC9zdGFkaWEuZ29vZ2xlLmNvbVxcL3N0b3JlXFwvZGV0YWlsc1xcLyhbMC05YS16L10rKS8pWzFdO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCArICcvc3RvcmUvZGV0YWlscy8nICsgc3RvcmVJZCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWltZycsICdodHRwczovL3N0YWRpYWdhbWVkYi5jb20vJyArIGVudHJ5WzBdLm1hdGNoKC8oaW1hZ2VzXFwvcG9zdGVyc1xcL1thLXowLTlfLi1dKy5wbmcpL2cpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXMucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGlucHV0IGV2ZW50cyB0byB0aGUgc2VhcmNoIGJhci5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RvcmVGaWx0ZXJcclxuICAgICAqL1xyXG4gICAgYWRkRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKCh0aGlzLnNlYXJjaEZpZWxkIGFzIGFueSkudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VhcmNoZXMgdGhlIGdhbWUgbGlzdCBmb3IgYSBzcGVjaWZpYyBzdHJpbmcgYW5kIHNob3dzIHdoaWNoZXZlciBnYW1lcyBmaXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cclxuICAgICAqIEBtZW1iZXJvZiBTdG9yZUZpbHRlclxyXG4gICAgICovXHJcbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZXMuZm9yRWFjaCgoZ2FtZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZ2FtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGdhbWUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nLCBxdWVyeS5sZW5ndGggPiAwICYmIG5hbWUuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RhcnR1cCwgaW5pdGlhbGl6ZXMgaW1wb3J0YW50IHZhcmlhYmxlcy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIENsb2NrXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG5cclxuICAgICAgICBMb2dnZXIuY29tcG9uZW50KExhbmd1YWdlLmdldCgnY29tcG9uZW50LmVuYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gc3RvcCwgbWFrZXMgc3VyZSB0byBkaXNwb3NlIG9mIGVsZW1lbnRzIGFuZCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5kaXNhYmxlZCcsIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBldmVyeSBzZWNvbmQsIG1ha2VzIHN1cmUgdGhlIHNlYXJjaCBiYXIgb25seSBleGlzdHMgd2hlbiBpdCdzIHN1cHBvc2VkIHRvIGFuZCB3b3JrcyBwcm9wZXJseSBldmVuIGlmIGFjY2lkZW50YWxseSBkZXN0cm95ZWQuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBDbG9ja1xyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICBpZihVdGlsLmlzSW5TdG9yZSgpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLnF1ZXJ5U2VsZWN0b3IoJy5uV210TGQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb250YWluZXIgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHJlcGVuZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgJy1nYW1lcycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lcy5mb3JFYWNoKChnYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBnYW1lLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLWltZycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBnYW1lLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWw+Lm5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IGdhbWUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gZ2FtZS5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsPi50YWdzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncy5pbm5lckhUTUwgPSBnYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS10YWdzJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEZpZWxkID0gdGhpcy5yZW5kZXJlci5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQgKyAnLXNlYXJjaCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50JztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tICcuLi91aS9VSUJ1dHRvbic7XHJcbmltcG9ydCB7IFVJUm93IH0gZnJvbSAnLi4vdWkvVUlSb3cnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL1VJQ29tcG9uZW50JztcclxuaW1wb3J0ICcuL3N0eWxlcy9VSVRhYi5zY3NzJztcclxuaW1wb3J0ICcuLi91aS9zdHlsZXMvQnV0dG9uLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9HcmlkLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9UeXBvZ3JhcGh5LnNjc3MnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL0xhbmd1YWdlJztcclxuXHJcbmNvbnN0IGNocm9tZTogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmNocm9tZTtcclxuXHJcbi8qKlxyXG4gKiBBIHRhYiBhbmQgYnV0dG9uIGRpc3BsYXllZCBpbiB0aGUgU3RhZGlhIE1lbnUuXHJcbiAqXHJcbiAqIEBleHBvcnQgdGhlIFVJVGFiIHR5cGUuXHJcbiAqIEBjbGFzcyBVSVRhYlxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVJVGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgdGFnOiBzdHJpbmcgPSAndWktdGFiJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YWIgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgW1tVSUNvbXBvbmVudF1dIHVzZWQgdG8gZGlzcGxheSB0aGUgdGFiLlxyXG4gICAgICovXHJcbiAgICBjb21wb25lbnQ6IFVJQ29tcG9uZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFtbVUlCdXR0b25dXSB1c2VkIHRvIG9wZW4gdGhlIHRhYi5cclxuICAgICAqL1xyXG4gICAgYnV0dG9uOiBVSUJ1dHRvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGFtb3VudCBvZiByb3dzLCBlYWNoIGNvbnRhaW5pbmcgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgcm93czogVUlSb3dbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsaXN0IG9mIGZ1biBNT1REIG1lc3NhZ2VzIGFkZGVkIHRvIHRoZSB0YWIuXHJcbiAgICAgKi9cclxuICAgIG1vdGRMaXN0OiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnPGltZyBzcmM9XCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbW9qaXMvNjM2MjI3ODY0MDc2NzQ2NzcyLnBuZz92PTFcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4OyB3aWR0aDogMjRweFwiPicsXHJcbiAgICAgICAgXCJEb24ndCBsb29rIGhlcmUsIGxvb2sgYmVsb3chXCIsXHJcbiAgICAgICAgJ1JlYWxpdHkgY2FuIGJlIHdoYXRldmVyIEkgd2FudC4nLFxyXG4gICAgICAgICdJZiB5b3UgYXNrIG5pY2VseSwgU3RhZGlhIG1pZ2h0IGV2ZW4gZG8geW91ciBsYXVuZHJ5IGZvciB5b3UhJyxcclxuICAgICAgICAnSGF2ZSB5b3UgdHJpZWQgYXNraW5nIGN1c3RvbWVyIHN1cHBvcnQ/JyxcclxuICAgICAgICAnRm9sbG93IHUvbWFmcmFucyBvbiBSZWRkaXQhJyxcclxuICAgICAgICAnU3RhZGlhKywgbGlrZSBHb29nbGUrIGJ1dCBzdGlsbCBhbGl2ZS4nLFxyXG4gICAgICAgICdTdGFkaWEgaXMgRE9BLCBiZWxpZXZlIG1lLicsXHJcbiAgICAgICAgJ0dldCBhIGxvYWQgb2YgdGhpcyBndXksIHVzaW5nIGNocm9tZSBleHRlbnNpb25zIHRvIGltcHJvdmUgaGlzIFN0YWRpYSBleHBlcmllbmNlLicsXHJcbiAgICAgICAgXCJJJ20gdGVsbGluZyB5b3UsIGRvbid0IHRydXN0IHRoYXQgZ3V5LiBZb3Uga25vdywgdGhlIGd1eS5cIixcclxuICAgICAgICAnU2hvdXRvdXQgdG8gQ2hyaXMgYW5kIEdyYWNlIScsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIFNwbGl0bGluZ3MgeWV0PycsXHJcbiAgICAgICAgJ0Fsd2F5cyBjaGVjayB0aGUgcmF0aW5ncyBiZWZvcmUgeW91IGJ1eSBhIG5ldyBnYW1lLicsXHJcbiAgICAgICAgJ0hhdmUgeW91IHRyaWVkIEdlRm9yY2UgTm93PycsXHJcbiAgICAgICAgJ0EgaG90IGRvZyBpcyBkZWZpbml0ZWx5IG5vdCBhIHNhbmR3aWNoLicsXHJcbiAgICAgICAgJ0lkayBhYm91dCB5b3UsIGJ1dCBJIHJlYWxseSB3YW50IG9uZSBvZiB0aG9zZSBmYW5jeSBzbWFydCB0b2lsZXRzLicsXHJcbiAgICAgICAgJ0NocmlzIGlzIHR5cGluZyBndXlzISEnLFxyXG4gICAgICAgICdEb2VzIGFueW9uZSBoYXZlIGEgYnVkZHkgcGFzcyBJIGNvdWxkIGJvcnJvdz8nLFxyXG4gICAgICAgICdJIHBhaWQgJDEzOSBmb3IgdGhpcz8nLFxyXG4gICAgICAgICdJcyBGb3J0bml0ZSBvbiBTdGFkaWEgeWV0PycsXHJcbiAgICAgICAgJ3UvYmFjb25ydWxlcyB3YXMgdGhlIGZpcnN0IHRvIHNlZSA0ayEnLFxyXG4gICAgICAgICdTbyBkaWQgdGhlIHBlcnNvbiB0aGF0IG1hZGUgdGhlIHN0YWRpYSsgZXh0ZW5zaW9uIGdpdmUgdXAgb24gc3RhZGlhPycsXHJcbiAgICAgICAgJ0l0XFwncyBsaWtlIEdGTiwgYnV0IHdpdGhvdXQgYW55IHB1bGxlZCBnYW1lcy4nLFxyXG4gICAgICAgICdMb25nIGxpdmUgR2Vmb3JjZSBOb3crJyxcclxuICAgICAgICAnU3BlbmQgeW91ciBtb25leSBiZWZvcmUgaXQgcnVucyBvdXQuJyxcclxuICAgICAgICAnV2hlbiBkb2VzIFN0YWRpYSAyIGNvbWUgb3V0PycsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgW1tVSUNvbXBvbmVudF1dIGFuZCBhIFtbVUlCdXR0b25dXVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IFVJQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAnU3RhZGlhKycsXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhZGlhcGx1c19tdXRlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogNXJlbTsgZGlzcGxheTogYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW90ZExpc3RbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vdGRMaXN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgdGhpcy5pZCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWFnZXMvaWNvbnMvc3RhZGlhcGx1cy5zdmcnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IG5ldyBVSUJ1dHRvbihpY29uLCBMYW5ndWFnZS5nZXQoJ3VpLXRhYi5idXR0b24tbGFiZWwnKSwgdGhpcy5pZCArICctYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmQgYWxsIHJvd3MgdGhhdCBkb24ndCBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbG9hZF1cclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBjcmVhdGVSb3dzKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgaWYoIXJvdy5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZCh0aGlzLmNvbXBvbmVudCwgaSA+IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByb3cucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgYWxsIHJvd3NcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgcmVsb2FkUm93cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4gcm93LnJlbG9hZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHJvdyB0byB0aGUgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgYWRkUm93KHJvdzogVUlSb3cpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYW5kIHVubG9hZCBhbGwgcm93cy5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXHJcbiAgICAgKi9cclxuICAgIGNsZWFyUm93cygpOiB2b2lkIHtcclxuICAgICAgICBmb3IoY29uc3Qgcm93IG9mIHRoaXMucm93cykge1xyXG4gICAgICAgICAgICByb3cuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0YXJ0dXAsIGluaXRpYWxpemVzIGltcG9ydGFudCB2YXJpYWJsZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJvZiBVSVRhYlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmNvbXBvbmVudChMYW5ndWFnZS5nZXQoJ2NvbXBvbmVudC5lbmFibGVkJywgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIG9uIHN0b3AsIG1ha2VzIHN1cmUgdG8gZGlzcG9zZSBvZiBlbGVtZW50cyBhbmQgdmFyaWFibGVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyb2YgVUlUYWJcclxuICAgICAqL1xyXG4gICAgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXR0b24uZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgcm93LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZ2dlci5jb21wb25lbnQoTGFuZ3VhZ2UuZ2V0KCdjb21wb25lbnQuZGlzYWJsZWQnLCB7IG5hbWU6IHRoaXMubmFtZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgZXZlcnkgc2Vjb25kLCBtYWtlcyBzdXJlIHRvIGNyZWF0ZSBjb21wb25lbnRzIGlmIHRoZXkgZG9uJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlcm9mIFVJVGFiXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGNvbXBvbmVudHMgaWYgdGhlIG1lbnUgaXMgb3BlbiBhbHJlYWR5LlxyXG4gICAgICAgIGlmIChVdGlsLmlzTWVudU9wZW4oKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSb3dzKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY3JlYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmJ1dHRvbi5vblByZXNzZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvd3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50Lm9wZW5UYWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdGhpcy5idXR0b24uY29udGFpbmVyLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5jb250YWluZXIuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbXBvbmVudC5vcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmNsb3NlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DbG9jay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZvcmNlQ29kZWMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb3JjZVJlc29sdXRpb24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaWJyYXJ5RmlsdGVyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9va2luZ0Zvckdyb3VwLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTmV0d29ya01vbml0b3Iuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SYXRpbmdzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3RhZGlhUGx1c0RCSG9vay5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0b3JlRmlsdGVyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVUlUYWIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvR2xvYmFsLnNjc3MnXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuL0NvbXBvbmVudExvYWRlcic7XHJcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9jb21wb25lbnRzL0Nsb2NrJ1xyXG5pbXBvcnQgeyBVSVRhYiB9IGZyb20gJy4vY29tcG9uZW50cy9VSVRhYidcclxuaW1wb3J0IHsgRm9yY2VDb2RlYyB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JjZUNvZGVjJ1xyXG5pbXBvcnQgeyBGb3JjZVJlc29sdXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvRm9yY2VSZXNvbHV0aW9uJ1xyXG5pbXBvcnQgeyBOZXR3b3JrTW9uaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9OZXR3b3JrTW9uaXRvcic7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnLi91aS9TbmFja2Jhcic7XHJcbmltcG9ydCB7IExpYnJhcnlGaWx0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlicmFyeUZpbHRlcic7XHJcbmltcG9ydCB7IFdlYkRhdGFiYXNlIH0gZnJvbSAnLi9XZWJEYXRhYmFzZSc7XHJcbmltcG9ydCB7IFN0b3JlRmlsdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL1N0b3JlRmlsdGVyJztcclxuaW1wb3J0IHsgUmF0aW5ncyB9IGZyb20gJy4vY29tcG9uZW50cy9SYXRpbmdzJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuL0xhbmd1YWdlJztcclxuaW1wb3J0IHsgQWxsb3dXaW5kb3dlZE1vZGUgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxsb3dXaW5kb3dlZE1vZGUnO1xyXG5pbXBvcnQgeyBQYXN0ZUZyb21DbGlwYm9hcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvUGFzdGVGcm9tQ2xpcGJvYXJkJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBTdG9yYWdlTWFuYWdlciB9IGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCBhcHBkYXRhIGZyb20gJy4vYXBwZGF0YS5qc29uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL3VpL01vZGFsJztcclxuaW1wb3J0IHsgU2hvcnRjdXQgfSBmcm9tICcuL1Nob3J0Y3V0JztcclxuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gJy4vQnJvd3Nlcic7XHJcbmltcG9ydCB7IExvb2tpbmdGb3JHcm91cCB9IGZyb20gJy4vY29tcG9uZW50cy9Mb29raW5nRm9yR3JvdXAnO1xyXG5pbXBvcnQgeyBTdGFkaWFQbHVzREIgfSBmcm9tICcuL1N0YWRpYVBsdXNEQic7XHJcbmltcG9ydCB7IFdlYlNjcmFwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RhZGlhUGx1c0RCSG9vayc7XHJcblxyXG4vLyBBbHdheXMgbG9hZCBsYW5ndWFnZXMgZmlyc3RcclxuTGFuZ3VhZ2UuaW5pdCgpO1xyXG5MYW5ndWFnZS5sb2FkKCk7XHJcblxyXG5Ccm93c2VyLmluaXQoKTtcclxuXHJcbmNvbnN0IHN0b3JhZ2VNYW5hZ2VyID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKGFwcGRhdGEpO1xyXG5zdG9yYWdlTWFuYWdlci5jaGVja0NhY2hlVmVyc2lvbigpO1xyXG5cclxuY29uc3QgbG9hZGVyID0gbmV3IENvbXBvbmVudExvYWRlcigpO1xyXG5jb25zdCBzbmFja2JhciA9IG5ldyBTbmFja2JhcigpO1xyXG5jb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xyXG5jb25zdCB0YWIgPSBuZXcgVUlUYWIoKTtcclxuY29uc3Qgd2ViU2NyYXBlciA9IG5ldyBXZWJTY3JhcGVyKCk7XHJcblxyXG5jb25zdCBkYXRhYmFzZSA9IG5ldyBXZWJEYXRhYmFzZSgnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tL2RhdGEvZ2FtZWRiLmpzb24nKTtcclxuY29uc3QgdXVpZE1hcCA9IG5ldyBXZWJEYXRhYmFzZSgnaHR0cHM6Ly9zdGFkaWFnYW1lZGIuY29tL2RhdGEvdXVpZG1hcC5qc29uJyk7XHJcbmRhdGFiYXNlLmNvbm5lY3QoKTtcclxudXVpZE1hcC5jb25uZWN0KCk7XHJcblxyXG5sb2FkZXIucmVnaXN0ZXIobmV3IENsb2NrKCkpO1xyXG4vLyBsb2FkZXIucmVnaXN0ZXIobmV3IFBvcHVwRml4KCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IExpYnJhcnlGaWx0ZXIoc25hY2tiYXIsIGRhdGFiYXNlLCB1dWlkTWFwLCBtb2RhbCwgd2ViU2NyYXBlcikpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlQ29kZWModGFiLCBzbmFja2JhcikpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEZvcmNlUmVzb2x1dGlvbih0YWIsIHNuYWNrYmFyKSk7XHJcbmxvYWRlci5yZWdpc3Rlcih0YWIpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IE5ldHdvcmtNb25pdG9yKCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IFN0b3JlRmlsdGVyKGRhdGFiYXNlLCB1dWlkTWFwKSk7XHJcbmxvYWRlci5yZWdpc3RlcihuZXcgUmF0aW5ncyhkYXRhYmFzZSwgdXVpZE1hcCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IEFsbG93V2luZG93ZWRNb2RlKCkpO1xyXG5sb2FkZXIucmVnaXN0ZXIobmV3IFBhc3RlRnJvbUNsaXBib2FyZCgpKTtcclxubG9hZGVyLnJlZ2lzdGVyKG5ldyBMb29raW5nRm9yR3JvdXAoKSk7XHJcbmxvYWRlci5yZWdpc3Rlcih3ZWJTY3JhcGVyKTtcclxuXHJcblN0YWRpYVBsdXNEQi5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKVxyXG4udGhlbihjb25uZWN0ZWQgPT4ge1xyXG4gICAgaWYoIWNvbm5lY3RlZCkge1xyXG4gICAgICAgIExvZ2dlci5lcnJvcignU3RhZGlhUGx1c0RCIHdhcyB1bmFibGUgdG8gY29ubmVjdCwgaXMgdGhlIHNlcnZlciBkb3duPycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBMb2NhbFN0b3JhZ2UuQVVUSF9UT0tFTi5nZXQocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFN0YWRpYVBsdXNEQi5hdXRoVG9rZW4gPSByZXNwb25zZVtMb2NhbFN0b3JhZ2UuQVVUSF9UT0tFTi50YWddO1xyXG5cclxuICAgICAgICBTdGFkaWFQbHVzREIuZ2V0UHJvZmlsZSgpXHJcbiAgICAgICAgLnRoZW4oY29uc29sZS5sb2cpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgU3RhZGlhUGx1c0RCLmF1dGhUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcignZHNhamRvc2FqZHNhaW9qZGFvJylcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBVdGlsLmxvYWQoKTtcclxuICAgIHNuYWNrYmFyLmNyZWF0ZSgpO1xyXG4gICAgbW9kYWwuY3JlYXRlKCk7XHJcbiAgICBsb2FkZXIuc3RhcnQoKTtcclxufSkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dsb2JhbC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UeXBvZ3JhcGh5LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0eS1jaGVja2JveC9zcmMvcHJldHR5LWNoZWNrYm94LnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94IHtcclxuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2hhcGU6IHN0cmluZyA9IENoZWNrYm94U2hhcGUuREVGQVVMVDtcclxuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZyA9IENoZWNrYm94U3R5bGUuREVGQVVMVDtcclxuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGJvcmRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGljb246IHN0cmluZztcclxuICAgIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGJpZ2dlcjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNoYXBlKHNoYXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEFuaW1hdGlvbihhbmltYXRpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRCb3JkZXIoYm9yZGVyOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ib3JkZXIgPSBib3JkZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEljb24oaWNvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCaWdnZXIoYmlnZ2VyOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5iaWdnZXIgPSBiaWdnZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBtYWluIGNsYXNzZXNcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByZXR0eScsICdwLWRlZmF1bHQnKTtcclxuXHJcbiAgICAgICAgLy8gSWYgc3R5bGUgaXMgbm90IGRlZmF1bHQsIGFkZCBzdHlsZVxyXG4gICAgICAgIGlmKHRoaXMuc2hhcGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2hhcGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgc3R5bGUgaXMgbm90IGRlZmF1bHQsIGFkZCBzdHlsZVxyXG4gICAgICAgIGlmKHRoaXMuc3R5bGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc3R5bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYW5pbWF0ZWQsIGFkZCBhbmltYXRpb25cclxuICAgICAgICBpZih0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5hbmltYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IGJpZ2dlclxyXG4gICAgICAgIGlmKHRoaXMuYmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncC1iaWdnZXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBib3JkZXJcclxuICAgICAgICBpZighdGhpcy5ib3JkZXIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwLXBsYWluJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgY2hlY2tib3ggaW5wdXRcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICAgICAgICAvLyBBZGQgc3RhdGUgZGl2XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdGF0ZS5jbGFzc0xpc3QuYWRkKCdzdGF0ZScpO1xyXG5cclxuICAgICAgICAvLyBJZiBjb2xvcmVkLCBhZGQgY29sb3JcclxuICAgICAgICBpZih0aGlzLmNvbG9yKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBoYXMgaWNvbiwgYWRkIGljb25cclxuICAgICAgICBpZih0aGlzLmljb24pIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwLWljb24nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcclxuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSB0aGlzLmljb247XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBsYWJlbFxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSB0aGlzLmxhYmVsO1xyXG4gICAgICAgIHN0YXRlLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdGF0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7cHJldHR5OiBlbGVtZW50LCBjaGVja2JveH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNoYXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ1VSVkVEOiBzdHJpbmcgPSAncC1jdXJ2ZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EOiBzdHJpbmcgPSAncC1yb3VuZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFN0eWxlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgRklMTDogc3RyaW5nID0gJ3AtZmlsbCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRISUNLOiBzdHJpbmcgPSAncC10aGljayc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbG9yIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQkxVRTogc3RyaW5nID0gJ3AtcHJpbWFyeSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdSRUVOOiBzdHJpbmcgPSAncC1zdWNjZXNzJztcclxuICAgIHB1YmxpYyBzdGF0aWMgWUVMTE9XOiBzdHJpbmcgPSAncC13YXJuaW5nJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQ1lBTjogc3RyaW5nID0gJ3AtaW5mbyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJFRDogc3RyaW5nID0gJ3AtZGFuZ2VyJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94QW5pbWF0aW9uIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU01PT1RIOiBzdHJpbmcgPSAncC1zbW9vdGgnO1xyXG4gICAgcHVibGljIHN0YXRpYyBKRUxMWTogc3RyaW5nID0gJ3AtamVsbHknO1xyXG4gICAgcHVibGljIHN0YXRpYyBUQURBOiBzdHJpbmcgPSAncC10YWRhJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUk9UQVRFOiBzdHJpbmcgPSAncC1yb3RhdGUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBQVUxTRTogc3RyaW5nID0gJ3AtcHVsc2UnO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlcy9Nb2RhbC5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgd3JhcHBlcjogRWxlbWVudDtcclxuICAgIGNvbnRlbnQ6IEVsZW1lbnQ7XHJcbiAgICBjbG9zZUJ1dHRvbjogRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YWRpYXBsdXNfbW9kYWwnKTtcclxuXHJcbiAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX21vZGFsLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX21vZGFsLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnY2xvc2UnO1xyXG4gICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycsICdzdGFkaWFwbHVzX21vZGFsLWNsb3NlJyk7XHJcblxyXG4gICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgIHNlbGYuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XHJcbiAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUJ1dHRvbik7XHJcbiAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcclxuXHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gICAgICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2xpbVNlbGVjdCBmcm9tICdzbGltLXNlbGVjdCc7XHJcbmltcG9ydCAnc2xpbS1zZWxlY3QvZGlzdC9zbGltc2VsZWN0Lm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3VpL3N0eWxlcy9TZWxlY3Quc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0IHtcclxuICAgIHNsaW1zZWxlY3Q6IFNsaW1TZWxlY3Q7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG9wdGlvbnM6IFNlbGVjdE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICBvcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zdHlsZSA6IFNlbGVjdFN0eWxlLkRBUks7XHJcbiAgICAgICAgb3B0aW9ucy5vbkNoYW5nZSA9IG9wdGlvbnMub25DaGFuZ2UgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMub25DaGFuZ2UgOiAoKSA9PiB7fTtcclxuICAgICAgICBvcHRpb25zLmJlZm9yZUNoYW5nZSA9IG9wdGlvbnMuYmVmb3JlQ2hhbmdlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmJlZm9yZUNoYW5nZSA6ICgpID0+IHt9O1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgJ3N0YWRpYXBsdXNfZHJvcGRvd24nLFxyXG4gICAgICAgICAgICBvcHRpb25zLnN0eWxlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2xpbXNlbGVjdCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIGVsZW1lbnRzL2NvbnRhaW5lcnNcclxuICAgICAgICAgKiBoYXZlIGJlZW4gZGVsZXRlZCB3aXRob3V0IHByb3Blcmx5IGJlaW5nIGRlc3Ryb3llZC4gQXMgU3RhZGlhXHJcbiAgICAgICAgICogcnVucyBpbiBhIHZpcnR1YWwgRE9NLCB3ZSBoYXZlIG5vIGNvbnRyb2wgb2Ygd2hlbiB0aGUgRE9NIGNoYW5nZXNcclxuICAgICAgICAgKiB0aGVyZWZvcmUgd2UgY2FuJ3Qgc29sdmUgaXQgaW4gYSBwcm9wZXIgd2F5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogTGV0J3MganVzdCBob3BlIGdhcmJhZ2UgY29sbGVjdGlvbiB0YWtlcyBjYXJlIG9mIGl0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdCA9IG5ldyBTbGltU2VsZWN0KHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgc2hvd1NlYXJjaDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogb3B0aW9ucy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvcHRpb25zLm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlT25DaGFuZ2U6IG9wdGlvbnMuYmVmb3JlQ2hhbmdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNsaW1zZWxlY3Quc2VsZWN0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoLi4uaXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IGluIGNhc2Ugc2xpbXNlbGVjdC5zZXQgaXMgZmFzdGVyXHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXQoaXRlbXNbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbXNlbGVjdC5zZXREYXRhKGl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbGltc2VsZWN0LnNlYXJjaChxdWVyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zbGltc2VsZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zbGltc2VsZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3N0YWRpYXBsdXNfZHJvcGRvd24nKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0U3R5bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBTTElNU0VMRUNUOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBTTElNU0VMRUNUX0xBUkdFOiBzdHJpbmcgPSAnc3R5bGUtc2xpbXNlbGVjdC1sYXJnZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIExJR0hUOiBzdHJpbmcgPSAnc3R5bGUtbGlnaHQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBEQVJLOiBzdHJpbmcgPSAnc3R5bGUtZGFyayc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZWxlY3RPcHRpb25zIHtcclxuICAgIHBsYWNlaG9sZGVyPzogYW55O1xyXG4gICAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgICBvbkNoYW5nZT86IChpbmZvOiBhbnkpID0+IGFueTtcclxuICAgIGJlZm9yZUNoYW5nZT86IChpbmZvOiBhbnkpID0+IGFueTtcclxufVxyXG4iLCJpbXBvcnQgJy4vc3R5bGVzL1NuYWNrYmFyLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyIHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBsYWJlbDogRWxlbWVudDtcclxuICAgIGNsb3NlQnV0dG9uOiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zbmFja2JhcicpO1xyXG5cclxuICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIHRoaXMubGFiZWwuY2xhc3NMaXN0LmFkZCgnc3RhZGlhcGx1c19zbmFja2Jhci1sYWJlbCcpO1xyXG5cclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICdjbG9zZSc7XHJcbiAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywgJ3N0YWRpYXBsdXNfc25hY2tiYXItY2xvc2UnKTtcclxuXHJcbiAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgc2VsZi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XHJcbiAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jbG9zZUJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUobGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBzZWxmLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNTAwMClcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVJQnV0dG9uQ29udGFpbmVyIH0gZnJvbSBcIi4vVUlCdXR0b25Db250YWluZXJcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlCdXR0b24ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGh0bWw6IHN0cmluZztcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBjb250YWluZXI6IFVJQnV0dG9uQ29udGFpbmVyO1xyXG4gICAgYnV0dG9uOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBzdGF0aWMgYnV0dG9uQ29udGFpbmVyczogVUlCdXR0b25Db250YWluZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGljb246IHN0cmluZywgdGl0bGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmh0bWwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQeWZsYmJcIiBqc25hbWU9XCJyWkhFU2RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJLRWFIb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiWDVwZW9lXCIganNuYW1lPVwicFlGaFVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInhkdW95ZiB1aWJ1dHRvbi1pY29uXCIgc3JjPVwiJHtpY29ufVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhU0pWIHVpYnV0dG9uLXRpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ1B5ZjFiYicsICdzdGFkaWFwbHVzX3VpLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdDVHZEWGQnLCAnUUFBeVdkJywgJ1BqcGFjJywgJ3pjTVlkJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBmb3IoY29uc3QgY29udGFpbmVyIG9mIFVJQnV0dG9uLmJ1dHRvbkNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgaWYoY29udGFpbmVyLmJ1dHRvbnMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgVUlCdXR0b25Db250YWluZXIoKTtcclxuICAgICAgICAgICAgVUlCdXR0b24uYnV0dG9uQ29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQnV0dG9uKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZShjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWNvbihpY29uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpYnV0dG9uLWljb24nKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVpYnV0dG9uLXRpdGxlJykuaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXN0cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkgIT09IG51bGw7XHJcbiAgICB9IFxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUJ1dHRvbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByZXNzZWQoZnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVUlCdXR0b24gfSBmcm9tIFwiLi9VSUJ1dHRvblwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgICBidXR0b25zOiBVSUJ1dHRvbltdID0gW107XHJcbiAgICBjb250YWluZXI6IEVsZW1lbnQ7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHdyYXBwZXI6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9ICdidXR0b24tY29udGFpbmVyLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UWjBCTicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ1pnVU1vJywgJ3N0YWRpYXBsdXNfdWktYnRuLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0UwWms5YicsICdzdGFkaWFwbHVzX3VpLWJ0bi1jb250YWluZXInKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhpc3RzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRaMEJOJyk7IC8vIFJlcXVlcnkgaW4gY2FzZSB0aGUgY29udGFpbmVyIHdhcyBkZWxldGVkXHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgaWYoIWJ1dHRvbi5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbi5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihjYWxsYmFjaylcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuYnV0dG9ucy5pbmRleE9mKGJ1dHRvbikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmVCdXR0b24oYnV0dG9uOiBVSUJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuYnV0dG9ucy5maWx0ZXIoYiA9PiBiLmlkICE9PSBidXR0b24uaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi9Mb2dnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBodG1sOiBzdHJpbmc7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgb3BlbjogYm9vbGVhbjtcclxuICAgIG9wZW5MaXN0ZW5lcnM6ICgoKSA9PiB2b2lkKVtdID0gW107XHJcbiAgICBjbG9zZUxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJrdlQ3Y1wiIGpzYWN0aW9uPVwiY2xpY2s6YTRmVXdkXCIganNuYW1lPVwiR2VHSEtiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJEUHZ3WWMgdFJxYzNjXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+YXJyb3dfYmFjazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJRM3d5eWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ3dDeEZkXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgJHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3VpLWNvbXBvbmVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHhoQXlmJyk7XHJcbiAgICAgICAgaWYoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBSZVF1ZXJ5IGVsZW1lbnQgc2luY2Ugb3V0ZXJIVE1MIGJyZWFrcyBpdC5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGAjJHt0aGlzLmlkfSA+IGhlYWRlciA+IC5ya3ZUN2NgLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5jbG9zZVRhYigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5UYWIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcnMuZm9yRWFjaChjID0+IGMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VUYWIoKTogdm9pZCB7XHJcbiAgICAgICAgTG9nZ2VyLmluZm8oJ0Nsb3NpbmcnLCB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlTGlzdGVuZXJzLmZvckVhY2goYyA9PiBjKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihjYWxsYmFjaz86KCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcnMucHVzaChjYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGNhbGxiYWNrPzooKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYoY2FsbGJhY2spXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VMaXN0ZW5lcnMucHVzaChjYWxsYmFjaylcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSBcIi4vVUlDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSVJvdyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG9wdGlvbnM6IFVJUm93T3B0aW9ucztcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBpZDogc3RyaW5nLCBvcHRpb25zPzogVUlSb3dPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHA+JHt0aGlzLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICR7dGhpcy5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdGFkaWFwbHVzX3VpLXJvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4aXN0cygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUmVsb2FkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZChjb21wb25lbnQ6IFVJQ29tcG9uZW50LCB1c2VIcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYodXNlSHIpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVUlSb3dPcHRpb25zIHtcclxuICAgIG9uQ3JlYXRlPzogRnVuY3Rpb247XHJcbiAgICBvbkRlc3Ryb3k/OiBGdW5jdGlvbjtcclxuICAgIG9uUmVsb2FkPzogRnVuY3Rpb247XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0J1dHRvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0XCI6XCJodG1sXCJ9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaHRtbFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01vZGFsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRcIjpcImh0bWxcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJodG1sXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU25hY2tiYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydFwiOlwiaHRtbFwifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImh0bWxcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy9kb3dubG9hZC5qcyB2NC4yLCBieSBkYW5kYXZpczsgMjAwOC0yMDE2LiBbQ0NCWTJdIHNlZSBodHRwOi8vZGFubWwuY29tL2Rvd25sb2FkLmh0bWwgZm9yIHRlc3RzL3VzYWdlXHJcbi8vIHYxIGxhbmRlZCBhIEZGK0Nocm9tZSBjb21wYXQgd2F5IG9mIGRvd25sb2FkaW5nIHN0cmluZ3MgdG8gbG9jYWwgdW4tbmFtZWQgZmlsZXMsIHVwZ3JhZGVkIHRvIHVzZSBhIGhpZGRlbiBmcmFtZSBhbmQgb3B0aW9uYWwgbWltZVxyXG4vLyB2MiBhZGRlZCBuYW1lZCBmaWxlcyB2aWEgYVtkb3dubG9hZF0sIG1zU2F2ZUJsb2IsIElFICgxMCspIHN1cHBvcnQsIGFuZCB3aW5kb3cuVVJMIHN1cHBvcnQgZm9yIGxhcmdlcitmYXN0ZXIgc2F2ZXMgdGhhbiBkYXRhVVJMc1xyXG4vLyB2MyBhZGRlZCBkYXRhVVJMIGFuZCBCbG9iIElucHV0LCBiaW5kLXRvZ2dsZSBhcml0eSwgYW5kIGxlZ2FjeSBkYXRhVVJMIGZhbGxiYWNrIHdhcyBpbXByb3ZlZCB3aXRoIGZvcmNlLWRvd25sb2FkIG1pbWUgYW5kIGJhc2U2NCBzdXBwb3J0LiAzLjEgaW1wcm92ZWQgc2FmYXJpIGhhbmRsaW5nLlxyXG4vLyB2NCBhZGRzIEFNRC9VTUQsIGNvbW1vbkpTLCBhbmQgcGxhaW4gYnJvd3NlciBzdXBwb3J0XHJcbi8vIHY0LjEgYWRkcyB1cmwgZG93bmxvYWQgY2FwYWJpbGl0eSB2aWEgc29sbyBVUkwgYXJndW1lbnQgKHNhbWUgZG9tYWluL0NPUlMgb25seSlcclxuLy8gdjQuMiBhZGRzIHNlbWFudGljIHZhcmlhYmxlIG5hbWVzLCBsb25nIChvdmVyIDJNQikgZGF0YVVSTCBzdXBwb3J0LCBhbmQgaGlkZGVuIGJ5IGRlZmF1bHQgdGVtcCBhbmNob3JzXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ybmRtZS9kb3dubG9hZFxyXG5cclxubGV0IGRvd25sb2FkZXIgPSB7IGRvd25sb2FkKGNvbnRlbnQsIG5hbWUsIG1pbWUpIHt9IH07XHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXHJcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XHJcbiAgICAgICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXHJcbiAgICAgICAgLy8gbGlrZSBOb2RlLlxyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxyXG4gICAgICAgIGRvd25sb2FkZXIgPSB7IGRvd25sb2FkOiBmYWN0b3J5KCkgfTtcclxuICAgIH1cclxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRvd25sb2FkKGRhdGEsIHN0ckZpbGVOYW1lLCBzdHJNaW1lVHlwZSkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHdpbmRvdywgLy8gdGhpcyBzY3JpcHQgaXMgb25seSBmb3IgYnJvd3NlcnMgYW55d2F5Li4uXHJcbiAgICAgICAgICAgIGRlZmF1bHRNaW1lID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgLy8gdGhpcyBkZWZhdWx0IG1pbWUgYWxzbyB0cmlnZ2VycyBpZnJhbWUgZG93bmxvYWRzXHJcbiAgICAgICAgICAgIG1pbWVUeXBlID0gc3RyTWltZVR5cGUgfHwgZGVmYXVsdE1pbWUsXHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBkYXRhLFxyXG4gICAgICAgICAgICB1cmwgPSAhc3RyRmlsZU5hbWUgJiYgIXN0ck1pbWVUeXBlICYmIHBheWxvYWQsXHJcbiAgICAgICAgICAgIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxyXG4gICAgICAgICAgICB0b1N0cmluZyA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBTdHJpbmcoYSk7IH0sXHJcbiAgICAgICAgICAgIG15QmxvYiA9IChzZWxmLkJsb2IgfHwgc2VsZi5Nb3pCbG9iIHx8IHNlbGYuV2ViS2l0QmxvYiB8fCB0b1N0cmluZyksXHJcbiAgICAgICAgICAgIGZpbGVOYW1lID0gc3RyRmlsZU5hbWUgfHwgXCJkb3dubG9hZFwiLFxyXG4gICAgICAgICAgICBibG9iLFxyXG4gICAgICAgICAgICByZWFkZXI7XHJcbiAgICAgICAgbXlCbG9iID0gbXlCbG9iLmNhbGwgPyBteUJsb2IuYmluZChzZWxmKSA6IEJsb2I7XHJcblxyXG4gICAgICAgIGlmIChTdHJpbmcodGhpcykgPT09IFwidHJ1ZVwiKSB7IC8vcmV2ZXJzZSBhcmd1bWVudHMsIGFsbG93aW5nIGRvd25sb2FkLmJpbmQodHJ1ZSwgXCJ0ZXh0L3htbFwiLCBcImV4cG9ydC54bWxcIikgdG8gYWN0IGFzIGEgY2FsbGJhY2tcclxuICAgICAgICAgICAgcGF5bG9hZCA9IFtwYXlsb2FkLCBtaW1lVHlwZV07XHJcbiAgICAgICAgICAgIG1pbWVUeXBlID0gcGF5bG9hZFswXTtcclxuICAgICAgICAgICAgcGF5bG9hZCA9IHBheWxvYWRbMV07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHVybCAmJiB1cmwubGVuZ3RoIDwgMjA0OCkgeyAvLyBpZiBubyBmaWxlbmFtZSBhbmQgbm8gbWltZSwgYXNzdW1lIGEgdXJsIHdhcyBwYXNzZWQgYXMgdGhlIG9ubHkgYXJndW1lbnRcclxuICAgICAgICAgICAgZmlsZU5hbWUgPSB1cmwuc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiP1wiKVswXTtcclxuICAgICAgICAgICAgYW5jaG9yLmhyZWYgPSB1cmw7IC8vIGFzc2lnbiBocmVmIHByb3AgdG8gdGVtcCBhbmNob3JcclxuICAgICAgICAgICAgaWYgKGFuY2hvci5ocmVmLmluZGV4T2YodXJsKSAhPT0gLTEpIHsgLy8gaWYgdGhlIGJyb3dzZXIgZGV0ZXJtaW5lcyB0aGF0IGl0J3MgYSBwb3RlbnRpYWxseSB2YWxpZCB1cmwgcGF0aDpcclxuICAgICAgICAgICAgICAgIHZhciBhamF4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICBhamF4Lm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFqYXgucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG4gICAgICAgICAgICAgICAgYWpheC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2FkKGUudGFyZ2V0LnJlc3BvbnNlLCBmaWxlTmFtZSwgZGVmYXVsdE1pbWUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBhamF4LnNlbmQoKTsgfSwgMCk7IC8vIGFsbG93cyBzZXR0aW5nIGN1c3RvbSBhamF4IGhlYWRlcnMgdXNpbmcgdGhlIHJldHVybjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhamF4O1xyXG4gICAgICAgICAgICB9IC8vIGVuZCBpZiB2YWxpZCB1cmw/XHJcbiAgICAgICAgfSAvLyBlbmQgaWYgdXJsP1xyXG5cclxuXHJcbiAgICAgICAgLy9nbyBhaGVhZCBhbmQgZG93bmxvYWQgZGF0YVVSTHMgcmlnaHQgYXdheVxyXG4gICAgICAgIGlmICgvXmRhdGFcXDpbXFx3K1xcLV0rXFwvW1xcdytcXC1dK1ssO10vLnRlc3QocGF5bG9hZCkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmxlbmd0aCA+ICgxMDI0ICogMTAyNCAqIDEuOTk5KSAmJiBteUJsb2IgIT09IHRvU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gZGF0YVVybFRvQmxvYihwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlID0gcGF5bG9hZC50eXBlIHx8IGRlZmF1bHRNaW1lO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iID8gIC8vIElFMTAgY2FuJ3QgZG8gYVtkb3dubG9hZF0sIG9ubHkgQmxvYnM6XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IoZGF0YVVybFRvQmxvYihwYXlsb2FkKSwgZmlsZU5hbWUpIDpcclxuICAgICAgICAgICAgICAgICAgICBzYXZlcihwYXlsb2FkKTsgLy8gZXZlcnlvbmUgZWxzZSBjYW4gc2F2ZSBkYXRhVVJMcyB1bi1wcm9jZXNzZWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9Ly9lbmQgaWYgZGF0YVVSTCBwYXNzZWQ/XHJcblxyXG4gICAgICAgIGJsb2IgPSBwYXlsb2FkIGluc3RhbmNlb2YgbXlCbG9iID9cclxuICAgICAgICAgICAgcGF5bG9hZCA6XHJcbiAgICAgICAgICAgIG5ldyBteUJsb2IoW3BheWxvYWRdLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGF0YVVybFRvQmxvYihzdHJVcmwpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gc3RyVXJsLnNwbGl0KC9bOjssXS8pLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IHBhcnRzWzFdLFxyXG4gICAgICAgICAgICAgICAgZGVjb2RlciA9IHBhcnRzWzJdID09IFwiYmFzZTY0XCIgPyBhdG9iIDogZGVjb2RlVVJJQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgYmluRGF0YSA9IGRlY29kZXIocGFydHMucG9wKCkpLFxyXG4gICAgICAgICAgICAgICAgbXggPSBiaW5EYXRhLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgICAgICAgdWlBcnIgPSBuZXcgVWludDhBcnJheShteCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGk7IGkgPCBteDsgKytpKSB1aUFycltpXSA9IGJpbkRhdGEuY2hhckNvZGVBdChpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgbXlCbG9iKFt1aUFycl0sIHsgdHlwZTogdHlwZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVyKHVybCwgd2luTW9kZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCdkb3dubG9hZCcgaW4gYW5jaG9yKSB7IC8vaHRtbDUgQVtkb3dubG9hZF1cclxuICAgICAgICAgICAgICAgIGFuY2hvci5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGFuY2hvci5jbGFzc05hbWUgPSBcImRvd25sb2FkLWpzLWxpbmtcIjtcclxuICAgICAgICAgICAgICAgIGFuY2hvci5pbm5lckhUTUwgPSBcImRvd25sb2FkaW5nLi4uXCI7XHJcbiAgICAgICAgICAgICAgICBhbmNob3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5Nb2RlID09PSB0cnVlKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLlVSTC5yZXZva2VPYmplY3RVUkwoYW5jaG9yLmhyZWYpOyB9LCAyNTApOyB9XHJcbiAgICAgICAgICAgICAgICB9LCA2Nik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaGFuZGxlIG5vbi1hW2Rvd25sb2FkXSBzYWZhcmkgYXMgYmVzdCB3ZSBjYW46XHJcbiAgICAgICAgICAgIGlmICgvKFZlcnNpb24pXFwvKFxcZCspXFwuKFxcZCspKD86XFwuKFxcZCspKT8uKlNhZmFyaVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL15kYXRhOihbXFx3XFwvXFwtXFwrXSspLywgZGVmYXVsdE1pbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cub3Blbih1cmwpKSB7IC8vIHBvcHVwIGJsb2NrZWQsIG9mZmVyIGRpcmVjdCBkb3dubG9hZDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybShcIkRpc3BsYXlpbmcgTmV3IERvY3VtZW50XFxuXFxuVXNlIFNhdmUgQXMuLi4gdG8gZG93bmxvYWQsIHRoZW4gY2xpY2sgYmFjayB0byByZXR1cm4gdG8gdGhpcyBwYWdlLlwiKSkgeyBsb2NhdGlvbi5ocmVmID0gdXJsOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9kbyBpZnJhbWUgZGF0YVVSTCBkb3dubG9hZCAob2xkIGNoK0ZGKTpcclxuICAgICAgICAgICAgdmFyIGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF3aW5Nb2RlKSB7IC8vIGZvcmNlIGEgbWltZSB0aGF0IHdpbGwgZG93bmxvYWQ6XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBcImRhdGE6XCIgKyB1cmwucmVwbGFjZSgvXmRhdGE6KFtcXHdcXC9cXC1cXCtdKykvLCBkZWZhdWx0TWltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZi5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGYpOyB9LCAzMzMpO1xyXG5cclxuICAgICAgICB9Ly9lbmQgc2F2ZXJcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFMTArIDogKGhhcyBCbG9iLCBidXQgbm90IGFbZG93bmxvYWRdIG9yIFVSTClcclxuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLlVSTCkgeyAvLyBzaW1wbGUgZmFzdCBhbmQgbW9kZXJuIHdheSB1c2luZyBCbG9iIGFuZCBVUkw6XHJcbiAgICAgICAgICAgIHNhdmVyKHNlbGYuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG5vbi1CbG9iKCkrbm9uLVVSTCBicm93c2VyczpcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9iID09PSBcInN0cmluZ1wiIHx8IGJsb2IuY29uc3RydWN0b3IgPT09IHRvU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzYXZlcihcImRhdGE6XCIgKyBtaW1lVHlwZSArIFwiO2Jhc2U2NCxcIiArIHNlbGYuYnRvYShibG9iKSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoICh5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNhdmVyKFwiZGF0YTpcIiArIG1pbWVUeXBlICsgXCIsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoYmxvYikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCbG9iIGJ1dCBub3QgVVJMIHN1cHBvcnQ6XHJcbiAgICAgICAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgc2F2ZXIodGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9OyAvKiBlbmQgZG93bmxvYWQoKSAqL1xyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb3dubG9hZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=