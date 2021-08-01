import {
  require_relay_runtime
} from "./chunk-K4SFTYGT.js";
import "./chunk-52LO7UMF.js";
import {
  __commonJS,
  __toModule,
  define_global_default,
  init_define_global
} from "./chunk-WXFKU22Y.js";

// .yarn/cache/extract-files-npm-9.0.0-6ee13e6aab-c31781d090.zip/node_modules/extract-files/public/ReactNativeFile.js
var require_ReactNativeFile = __commonJS({
  ".yarn/cache/extract-files-npm-9.0.0-6ee13e6aab-c31781d090.zip/node_modules/extract-files/public/ReactNativeFile.js"(exports, module) {
    init_define_global();
    "use strict";
    module.exports = function ReactNativeFile(_ref) {
      var uri = _ref.uri, name = _ref.name, type = _ref.type;
      this.uri = uri;
      this.name = name;
      this.type = type;
    };
  }
});

// .yarn/cache/extract-files-npm-9.0.0-6ee13e6aab-c31781d090.zip/node_modules/extract-files/public/isExtractableFile.js
var require_isExtractableFile = __commonJS({
  ".yarn/cache/extract-files-npm-9.0.0-6ee13e6aab-c31781d090.zip/node_modules/extract-files/public/isExtractableFile.js"(exports, module) {
    init_define_global();
    "use strict";
    var ReactNativeFile = require_ReactNativeFile();
    module.exports = function isExtractableFile(value) {
      return typeof File !== "undefined" && value instanceof File || typeof Blob !== "undefined" && value instanceof Blob || value instanceof ReactNativeFile;
    };
  }
});

// .yarn/cache/extract-files-npm-9.0.0-6ee13e6aab-c31781d090.zip/node_modules/extract-files/public/extractFiles.js
var require_extractFiles = __commonJS({
  ".yarn/cache/extract-files-npm-9.0.0-6ee13e6aab-c31781d090.zip/node_modules/extract-files/public/extractFiles.js"(exports, module) {
    init_define_global();
    "use strict";
    var defaultIsExtractableFile = require_isExtractableFile();
    module.exports = function extractFiles(value, path, isExtractableFile) {
      if (path === void 0) {
        path = "";
      }
      if (isExtractableFile === void 0) {
        isExtractableFile = defaultIsExtractableFile;
      }
      var clone;
      var files = new Map();
      function addFile(paths, file) {
        var storedPaths = files.get(file);
        if (storedPaths)
          storedPaths.push.apply(storedPaths, paths);
        else
          files.set(file, paths);
      }
      if (isExtractableFile(value)) {
        clone = null;
        addFile([path], value);
      } else {
        var prefix = path ? path + "." : "";
        if (typeof FileList !== "undefined" && value instanceof FileList)
          clone = Array.prototype.map.call(value, function(file, i2) {
            addFile(["" + prefix + i2], file);
            return null;
          });
        else if (Array.isArray(value))
          clone = value.map(function(child, i2) {
            var result2 = extractFiles(child, "" + prefix + i2, isExtractableFile);
            result2.files.forEach(addFile);
            return result2.clone;
          });
        else if (value && value.constructor === Object) {
          clone = {};
          for (var i in value) {
            var result = extractFiles(value[i], "" + prefix + i, isExtractableFile);
            result.files.forEach(addFile);
            clone[i] = result.clone;
          }
        } else
          clone = value;
      }
      return {
        clone,
        files
      };
    };
  }
});

// dep:react-relay-network-modern_es
init_define_global();

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/index.js
init_define_global();

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/RelayNetworkLayer.js
init_define_global();
var import_relay_runtime = __toModule(require_relay_runtime());

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/RelayRequest.js
init_define_global();

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/RRNLError.js
init_define_global();
var RRNLError = class extends Error {
  constructor(msg) {
    super(msg);
    this.name = "RRNLError";
  }
};

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/RelayRequest.js
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function getFormDataInterface() {
  return typeof window !== "undefined" && window.FormData || define_global_default && define_global_default.FormData;
}
var RelayRequest = class {
  constructor(operation, variables, cacheConfig, uploadables) {
    this.operation = operation;
    this.variables = variables;
    this.cacheConfig = cacheConfig;
    this.uploadables = uploadables;
    this.id = this.operation.id || this.operation.name || this._generateID();
    const fetchOpts = {
      method: "POST",
      headers: {},
      body: this.prepareBody()
    };
    this.controller = typeof window !== "undefined" && window.AbortController ? new window.AbortController() : null;
    if (this.controller)
      fetchOpts.signal = this.controller.signal;
    this.fetchOpts = fetchOpts;
  }
  getBody() {
    return this.fetchOpts.body;
  }
  prepareBody() {
    const {
      uploadables
    } = this;
    if (uploadables) {
      const _FormData_ = getFormDataInterface();
      if (!_FormData_) {
        throw new RRNLError("Uploading files without `FormData` interface does not supported.");
      }
      const formData = new _FormData_();
      formData.append("id", this.getID());
      formData.append("query", this.getQueryString());
      formData.append("variables", JSON.stringify(this.getVariables()));
      Object.keys(uploadables).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
          formData.append(key, uploadables[key]);
        }
      });
      return formData;
    }
    return JSON.stringify({
      id: this.getID(),
      query: this.getQueryString(),
      variables: this.getVariables()
    });
  }
  getID() {
    return this.id;
  }
  _generateID() {
    if (!this.constructor.lastGenId) {
      this.constructor.lastGenId = 0;
    }
    this.constructor.lastGenId += 1;
    return this.constructor.lastGenId.toString();
  }
  getQueryString() {
    return this.operation.text || "";
  }
  getVariables() {
    return this.variables;
  }
  isMutation() {
    return this.operation.operationKind === "mutation";
  }
  isFormData() {
    const _FormData_ = getFormDataInterface();
    return !!_FormData_ && this.fetchOpts.body instanceof _FormData_;
  }
  cancel() {
    if (this.controller) {
      this.controller.abort();
      return true;
    }
    return false;
  }
  clone() {
    const newRequest = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    newRequest.fetchOpts = _objectSpread({}, this.fetchOpts);
    newRequest.fetchOpts.headers = _objectSpread({}, this.fetchOpts.headers);
    return newRequest;
  }
};

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/fetchWithMiddleware.js
init_define_global();

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/createRequestError.js
init_define_global();
var RRNLRequestError = class extends RRNLError {
  constructor(msg) {
    super(msg);
    this.name = "RRNLRequestError";
  }
};
function formatGraphQLErrors(request, errors) {
  const CONTEXT_BEFORE = 20;
  const CONTEXT_LENGTH = 60;
  if (!request.getQueryString) {
    return errors.join("\n");
  }
  let queryLines = [];
  const queryString = request.getQueryString();
  if (queryString) {
    queryLines = queryString.split("\n");
  }
  return errors.map(({
    locations,
    message
  }, ii) => {
    const prefix = `${ii + 1}. `;
    const indent = " ".repeat(prefix.length);
    const locationMessage = locations && queryLines.length ? "\n" + locations.map(({
      column,
      line
    }) => {
      const queryLine = queryLines[line - 1];
      const offset = Math.min(column - 1, CONTEXT_BEFORE);
      return [queryLine.substr(column - 1 - offset, CONTEXT_LENGTH), `${" ".repeat(Math.max(offset, 0))}^^^`].map((messageLine) => indent + messageLine).join("\n");
    }).join("\n") : "";
    return prefix + message + locationMessage;
  }).join("\n");
}
function createRequestError(req, res) {
  let errorReason = "";
  if (!res) {
    errorReason = "Server return empty response.";
  } else if (res.errors) {
    if (req instanceof RelayRequest) {
      errorReason = formatGraphQLErrors(req, res.errors);
    } else {
      errorReason = JSON.stringify(res.errors);
    }
  } else if (!res.json) {
    errorReason = (res.text ? res.text : `Server return empty response with Status Code: ${res.status}.`) + (res ? `

${res.toString()}` : "");
  } else if (!res.data) {
    errorReason = "Server return empty response.data.\n\n" + res.toString();
  }
  const error = new RRNLRequestError(`Relay request for \`${req.getID()}\` failed by the following reasons:

${errorReason}`);
  error.req = req;
  error.res = res;
  return error;
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/RelayResponse.js
init_define_global();
var RelayResponse = class {
  static async createFromFetch(res) {
    const r = new RelayResponse();
    r._res = res;
    r.ok = res.ok;
    r.status = res.status;
    r.url = res.url;
    r.headers = res.headers;
    if (res.status < 200 || res.status >= 300) {
      r.text = await res.text();
    } else {
      r.processJsonData(await res.json());
    }
    return r;
  }
  static async createFromGraphQL(res) {
    const r = new RelayResponse();
    r._res = res;
    r.ok = true;
    r.status = 200;
    r.data = res.data;
    r.errors = res.errors;
    return r;
  }
  processJsonData(json) {
    this.json = json;
    if (json) {
      if (json.data)
        this.data = json.data;
      if (json.errors)
        this.errors = json.errors;
    }
  }
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
  toString() {
    return [`Response:`, `   Url: ${this.url || ""}`, `   Status code: ${this.status || ""}`, `   Status text: ${this.statusText || ""}`, `   Response headers: ${JSON.stringify(this.headers) || ""}`, `   Response body: ${JSON.stringify(this.json) || ""}`].join("\n");
  }
};

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/fetchWithMiddleware.js
function runFetch(req) {
  let {
    url
  } = req.fetchOpts;
  if (!url)
    url = "/graphql";
  if (!req.fetchOpts.headers.Accept)
    req.fetchOpts.headers.Accept = "*/*";
  if (!req.fetchOpts.headers["Content-Type"] && !req.isFormData()) {
    req.fetchOpts.headers["Content-Type"] = "application/json";
  }
  return fetch(url, req.fetchOpts);
}
var convertResponse = (next) => async (req) => {
  const resFromFetch = await next(req);
  const res = await RelayResponse.createFromFetch(resFromFetch);
  if (res.status && res.status >= 400) {
    throw createRequestError(req, res);
  }
  return res;
};
function fetchWithMiddleware(req, middlewares, rawFetchMiddlewares, noThrow) {
  const wrappedFetch = compose(...middlewares, convertResponse, ...rawFetchMiddlewares)(runFetch);
  return wrappedFetch(req).then((res) => {
    if (!noThrow && (!res || res.errors || !res.data)) {
      throw createRequestError(req, res);
    }
    return res;
  });
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  } else {
    const last = funcs[funcs.length - 1];
    const rest = funcs.slice(0, -1);
    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
  }
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/RelayNetworkLayer.js
var RelayNetworkLayer = class {
  constructor(middlewares, opts) {
    this._middlewares = [];
    this._rawMiddlewares = [];
    this._middlewaresSync = [];
    this.noThrow = false;
    const mws = Array.isArray(middlewares) ? middlewares : [middlewares];
    mws.forEach((mw) => {
      if (mw) {
        if (mw.execute) {
          this._middlewaresSync.push(mw.execute);
        } else if (mw.isRawMiddleware) {
          this._rawMiddlewares.push(mw);
        } else {
          this._middlewares.push(mw);
        }
      }
    });
    if (opts) {
      this.subscribeFn = opts.subscribeFn;
      this.noThrow = opts.noThrow === true;
      if (opts.beforeFetch) {
        this._middlewaresSync.push(opts.beforeFetch);
      }
    }
    this.fetchFn = (operation, variables, cacheConfig, uploadables) => {
      for (let i = 0; i < this._middlewaresSync.length; i++) {
        const res = this._middlewaresSync[i](operation, variables, cacheConfig, uploadables);
        if (res)
          return res;
      }
      return {
        subscribe: (sink) => {
          const req = new RelayRequest(operation, variables, cacheConfig, uploadables);
          const res = fetchWithMiddleware(req, this._middlewares, this._rawMiddlewares, this.noThrow);
          res.then((value) => {
            sink.next(value);
            sink.complete();
          }, (error) => {
            if (error && error.name && error.name === "AbortError") {
              sink.complete();
            } else
              sink.error(error);
          }).catch(() => {
          });
          return () => {
            req.cancel();
          };
        }
      };
    };
    const network = import_relay_runtime.Network.create(this.fetchFn, this.subscribeFn);
    this.execute = network.execute;
    this.executeWithEvents = network.executeWithEvents;
  }
};

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/batch.js
init_define_global();

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/utils.js
init_define_global();
function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/RelayRequestBatch.js
init_define_global();
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var RelayRequestBatch = class {
  constructor(requests) {
    this.requests = requests;
    this.fetchOpts = {
      method: "POST",
      headers: {},
      body: this.prepareBody()
    };
  }
  setFetchOption(name, value) {
    this.fetchOpts[name] = value;
  }
  setFetchOptions(opts) {
    this.fetchOpts = _objectSpread2({}, this.fetchOpts, opts);
  }
  getBody() {
    if (!this.fetchOpts.body) {
      this.fetchOpts.body = this.prepareBody();
    }
    return this.fetchOpts.body || "";
  }
  prepareBody() {
    return `[${this.requests.map((r) => r.getBody()).join(",")}]`;
  }
  getIds() {
    return this.requests.map((r) => r.getID());
  }
  getID() {
    return `BATCH_REQUEST:${this.getIds().join(":")}`;
  }
  isMutation() {
    return false;
  }
  isFormData() {
    return false;
  }
  clone() {
    const newRequest = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    newRequest.fetchOpts = _objectSpread2({}, this.fetchOpts);
    newRequest.fetchOpts.headers = _objectSpread2({}, this.fetchOpts.headers);
    return newRequest;
  }
  getVariables() {
    throw new RRNLError("Batch request does not have variables.");
  }
  getQueryString() {
    return this.prepareBody();
  }
};

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/batch.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var DEFAULT_BATCH_SIZE = 102400;
var RRNLBatchMiddlewareError = class extends RRNLError {
  constructor(msg) {
    super(msg);
    this.name = "RRNLBatchMiddlewareError";
  }
};
function batchMiddleware(options) {
  const opts = options || {};
  const batchTimeout = opts.batchTimeout || 0;
  const allowMutations = opts.allowMutations || false;
  const batchUrl = opts.batchUrl || "/graphql/batch";
  const maxBatchSize = opts.maxBatchSize || DEFAULT_BATCH_SIZE;
  const singleton = {};
  const fetchOpts = {};
  if (opts.method)
    fetchOpts.method = opts.method;
  if (opts.credentials)
    fetchOpts.credentials = opts.credentials;
  if (opts.mode)
    fetchOpts.mode = opts.mode;
  if (opts.cache)
    fetchOpts.cache = opts.cache;
  if (opts.redirect)
    fetchOpts.redirect = opts.redirect;
  if (opts.headers)
    fetchOpts.headersOrThunk = opts.headers;
  return (next) => (req) => {
    if (req.isMutation() && !allowMutations) {
      return next(req);
    }
    if (!(req instanceof RelayRequest)) {
      throw new RRNLBatchMiddlewareError("Relay batch middleware accepts only simple RelayRequest. Did you add batchMiddleware twice?");
    }
    if (req.isFormData()) {
      return next(req);
    }
    if (req.cacheConfig.skipBatch) {
      return next(req);
    }
    return passThroughBatch(req, next, {
      batchTimeout,
      batchUrl,
      singleton,
      maxBatchSize,
      fetchOpts
    });
  };
}
function passThroughBatch(req, next, opts) {
  const {
    singleton
  } = opts;
  const bodyLength = req.getBody().length;
  if (!bodyLength) {
    return next(req);
  }
  if (!singleton.batcher || !singleton.batcher.acceptRequests) {
    singleton.batcher = prepareNewBatcher(next, opts);
  }
  if (singleton.batcher.bodySize + bodyLength + 1 > opts.maxBatchSize) {
    singleton.batcher = prepareNewBatcher(next, opts);
  }
  singleton.batcher.bodySize += bodyLength + 1;
  return new Promise((resolve, reject) => {
    const {
      requestList
    } = singleton.batcher;
    const requestWrapper = {
      req,
      completeOk: (res) => {
        requestWrapper.done = true;
        resolve(res);
        requestWrapper.duplicates.forEach((r) => r.completeOk(res));
      },
      completeErr: (err) => {
        requestWrapper.done = true;
        reject(err);
        requestWrapper.duplicates.forEach((r) => r.completeErr(err));
      },
      done: false,
      duplicates: []
    };
    const duplicateIndex = requestList.findIndex((wrapper) => req.getBody() === wrapper.req.getBody());
    if (duplicateIndex !== -1) {
      requestList[duplicateIndex].duplicates.push(requestWrapper);
    } else {
      requestList.push(requestWrapper);
    }
  });
}
function prepareNewBatcher(next, opts) {
  const batcher = {
    bodySize: 2,
    requestList: [],
    acceptRequests: true
  };
  setTimeout(() => {
    batcher.acceptRequests = false;
    sendRequests(batcher.requestList, next, opts).then(() => finalizeUncompleted(batcher.requestList)).catch((e) => {
      if (e && e.name === "AbortError") {
        finalizeCanceled(batcher.requestList, e);
      } else {
        finalizeUncompleted(batcher.requestList);
      }
    });
  }, opts.batchTimeout);
  return batcher;
}
async function sendRequests(requestList, next, opts) {
  if (requestList.length === 1) {
    const wrapper = requestList[0];
    const res = await next(wrapper.req);
    wrapper.completeOk(res);
    wrapper.duplicates.forEach((r) => r.completeOk(res));
    return res;
  } else if (requestList.length > 1) {
    const batchRequest = new RelayRequestBatch(requestList.map((wrapper) => wrapper.req));
    const url = await (isFunction(opts.batchUrl) ? opts.batchUrl(requestList) : opts.batchUrl);
    batchRequest.setFetchOption("url", url);
    const _opts$fetchOpts = opts.fetchOpts, {
      headersOrThunk
    } = _opts$fetchOpts, fetchOpts = _objectWithoutProperties(_opts$fetchOpts, ["headersOrThunk"]);
    batchRequest.setFetchOptions(fetchOpts);
    if (headersOrThunk) {
      const headers = await (isFunction(headersOrThunk) ? headersOrThunk(batchRequest) : headersOrThunk);
      batchRequest.setFetchOption("headers", headers);
    }
    try {
      const batchResponse = await next(batchRequest);
      if (!batchResponse || !Array.isArray(batchResponse.json)) {
        throw new RRNLBatchMiddlewareError("Wrong response from server. Did your server support batch request?");
      }
      batchResponse.json.forEach((payload, index) => {
        if (!payload)
          return;
        const request = requestList[index];
        if (request) {
          const res = createSingleResponse(batchResponse, payload);
          request.completeOk(res);
        }
      });
      return batchResponse;
    } catch (e) {
      requestList.forEach((request) => request.completeErr(e));
    }
  }
  return Promise.resolve();
}
function finalizeCanceled(requestList, error) {
  requestList.forEach((request) => request.completeErr(error));
}
function finalizeUncompleted(requestList) {
  requestList.forEach((request, index) => {
    if (!request.done) {
      request.completeErr(new RRNLBatchMiddlewareError(`Server does not return response for request at index ${index}.
Response should have an array with ${requestList.length} item(s).`));
    }
  });
}
function createSingleResponse(batchResponse, json) {
  const data = json.payload || json;
  const res = batchResponse.clone();
  res.processJsonData(data);
  return res;
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/legacyBatch.js
init_define_global();
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var DEFAULT_BATCH_SIZE2 = 102400;
function legacyBatchMiddleware(options) {
  const opts = options || {};
  const batchTimeout = opts.batchTimeout || 0;
  const allowMutations = opts.allowMutations || false;
  const batchUrl = opts.batchUrl || "/graphql/batch";
  const maxBatchSize = opts.maxBatchSize || DEFAULT_BATCH_SIZE2;
  const singleton = {};
  const fetchOpts = {};
  if (opts.method)
    fetchOpts.method = opts.method;
  if (opts.credentials)
    fetchOpts.credentials = opts.credentials;
  if (opts.mode)
    fetchOpts.mode = opts.mode;
  if (opts.cache)
    fetchOpts.cache = opts.cache;
  if (opts.redirect)
    fetchOpts.redirect = opts.redirect;
  if (opts.headers)
    fetchOpts.headersOrThunk = opts.headers;
  return (next) => (req) => {
    if (req.isMutation() && !allowMutations) {
      return next(req);
    }
    if (!(req instanceof RelayRequest)) {
      throw new RRNLBatchMiddlewareError("Relay batch middleware accepts only simple RelayRequest. Did you add batchMiddleware twice?");
    }
    if (req.isFormData()) {
      return next(req);
    }
    return passThroughBatch2(req, next, {
      batchTimeout,
      batchUrl,
      singleton,
      maxBatchSize,
      fetchOpts
    });
  };
}
function passThroughBatch2(req, next, opts) {
  const {
    singleton
  } = opts;
  const bodyLength = req.fetchOpts.body.length;
  if (!bodyLength) {
    return next(req);
  }
  if (!singleton.batcher || !singleton.batcher.acceptRequests) {
    singleton.batcher = prepareNewBatcher2(next, opts);
  }
  if (singleton.batcher.bodySize + bodyLength + 1 > opts.maxBatchSize) {
    singleton.batcher = prepareNewBatcher2(next, opts);
  }
  singleton.batcher.bodySize += bodyLength + 1;
  return new Promise((resolve, reject) => {
    const relayReqId = req.getID();
    const {
      requestMap
    } = singleton.batcher;
    const requestWrapper = {
      req,
      completeOk: (res) => {
        requestWrapper.done = true;
        resolve(res);
        requestWrapper.duplicates.forEach((r) => r.completeOk(res));
      },
      completeErr: (err) => {
        requestWrapper.done = true;
        reject(err);
        requestWrapper.duplicates.forEach((r) => r.completeErr(err));
      },
      done: false,
      duplicates: []
    };
    if (requestMap[relayReqId]) {
      requestMap[relayReqId].duplicates.push(requestWrapper);
    } else {
      requestMap[relayReqId] = requestWrapper;
    }
  });
}
function prepareNewBatcher2(next, opts) {
  const batcher = {
    bodySize: 2,
    requestMap: {},
    acceptRequests: true
  };
  setTimeout(() => {
    batcher.acceptRequests = false;
    sendRequests2(batcher.requestMap, next, opts).then(() => finalizeUncompleted2(batcher.requestMap)).catch(() => finalizeUncompleted2(batcher.requestMap));
  }, opts.batchTimeout);
  return batcher;
}
async function sendRequests2(requestMap, next, opts) {
  const ids = Object.keys(requestMap);
  if (ids.length === 1) {
    const request = requestMap[ids[0]];
    const res = await next(request.req);
    request.completeOk(res);
    request.duplicates.forEach((r) => r.completeOk(res));
    return res;
  } else if (ids.length > 1) {
    const batchRequest = new RelayRequestBatch(ids.map((id) => requestMap[id].req));
    const url = await (isFunction(opts.batchUrl) ? opts.batchUrl(requestMap) : opts.batchUrl);
    batchRequest.setFetchOption("url", url);
    const _opts$fetchOpts = opts.fetchOpts, {
      headersOrThunk
    } = _opts$fetchOpts, fetchOpts = _objectWithoutProperties2(_opts$fetchOpts, ["headersOrThunk"]);
    batchRequest.setFetchOptions(fetchOpts);
    if (headersOrThunk) {
      const headers = await (isFunction(headersOrThunk) ? headersOrThunk(batchRequest) : headersOrThunk);
      batchRequest.setFetchOption("headers", headers);
    }
    try {
      const batchResponse = await next(batchRequest);
      if (!batchResponse || !Array.isArray(batchResponse.json)) {
        throw new RRNLBatchMiddlewareError("Wrong response from server. Did your server support batch request?");
      }
      batchResponse.json.forEach((payload) => {
        if (!payload)
          return;
        const request = requestMap[payload.id];
        if (request) {
          const res = createSingleResponse2(batchResponse, payload);
          request.completeOk(res);
        }
      });
      return batchResponse;
    } catch (e) {
      ids.forEach((id) => {
        requestMap[id].completeErr(e);
      });
    }
  }
  return Promise.resolve();
}
function finalizeUncompleted2(requestMap) {
  Object.keys(requestMap).forEach((id) => {
    const request = requestMap[id];
    if (!request.done) {
      request.completeErr(new RRNLBatchMiddlewareError(`Server does not return response for request with id ${id} 
Response should have following shape { "id": "${id}", "data": {} }`));
    }
  });
}
function createSingleResponse2(batchResponse, json) {
  const data = json.payload || json;
  const res = batchResponse.clone();
  res.processJsonData(data);
  return res;
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/retry.js
init_define_global();
function noopFn() {
}
var RRNLRetryMiddlewareError = class extends RRNLError {
  constructor(msg) {
    super(msg);
    this.name = "RRNLRetryMiddlewareError";
  }
};
function retryMiddleware(options) {
  const opts = options || {};
  const timeout = opts.fetchTimeout || 15e3;
  const retryDelays = opts.retryDelays || [1e3, 3e3];
  const statusCodes = opts.statusCodes || false;
  const logger = opts.logger === false ? () => {
  } : opts.logger || console.log.bind(console, "[RELAY-NETWORK]");
  const allowMutations = opts.allowMutations || false;
  const allowFormData = opts.allowFormData || false;
  const forceRetryFn = opts.forceRetry || false;
  const beforeRetry = opts.beforeRetry || false;
  let retryAfterMs = () => false;
  if (retryDelays) {
    if (Array.isArray(retryDelays)) {
      retryAfterMs = (attempt) => {
        if (retryDelays.length >= attempt) {
          return retryDelays[attempt];
        }
        return false;
      };
    } else if (isFunction(retryDelays)) {
      retryAfterMs = retryDelays;
    }
  }
  let timeoutAfterMs;
  if (typeof timeout === "number") {
    timeoutAfterMs = () => timeout;
  } else {
    timeoutAfterMs = timeout;
  }
  let retryOnStatusCode = (status, req, res) => {
    return res.status < 200 || res.status > 300;
  };
  if (statusCodes) {
    if (Array.isArray(statusCodes)) {
      retryOnStatusCode = (status, req, res) => statusCodes.indexOf(res.status) !== -1;
    } else if (isFunction(statusCodes)) {
      retryOnStatusCode = statusCodes;
    }
  }
  return (next) => (req) => {
    if (req.isMutation() && !allowMutations) {
      return next(req);
    }
    if (req.isFormData() && !allowFormData) {
      return next(req);
    }
    return makeRetriableRequest({
      req,
      next,
      timeoutAfterMs,
      retryAfterMs,
      retryOnStatusCode,
      forceRetryFn,
      beforeRetry,
      logger
    });
  };
}
async function makeRetriableRequest(o, delay = 0, attempt = 0, lastError = null) {
  const makeRetry = async (prevError) => {
    const retryDelay = o.retryAfterMs(attempt);
    if (retryDelay) {
      o.logger(prevError.message);
      o.logger(`will retry in ${retryDelay} milliseconds`);
      return makeRetriableRequest(o, retryDelay, attempt + 1, prevError);
    }
    throw prevError;
  };
  const makeRequest = async () => {
    try {
      const timeout = o.timeoutAfterMs(attempt);
      return await promiseWithTimeout(o.next(o.req), timeout, () => {
        const err = new RRNLRetryMiddlewareError(`Reached request timeout in ${timeout} ms`);
        return makeRetry(err);
      });
    } catch (e) {
      if (e && !e.res && !(e instanceof RRNLRetryMiddlewareError) && e.name !== "AbortError") {
        return makeRetry(e);
      }
      if (e && e.res && o.retryOnStatusCode(e.res.status, o.req, e.res)) {
        const err = new RRNLRetryMiddlewareError(`Wrong response status ${e.res.status}, retrying...`);
        return makeRetry(err);
      }
      throw e;
    }
  };
  if (attempt === 0) {
    return makeRequest();
  } else {
    const {
      promise,
      forceExec,
      abort
    } = delayedExecution(makeRequest, delay);
    if (o.forceRetryFn) {
      o.forceRetryFn(forceExec, delay);
    }
    if (o.beforeRetry) {
      o.beforeRetry({
        abort,
        forceRetry: forceExec,
        attempt,
        delay,
        lastError,
        req: o.req
      });
    }
    return promise;
  }
}
function delayedExecution(execFn, delay = 0) {
  let abort = noopFn;
  let forceExec = noopFn;
  if (delay <= 0) {
    return {
      abort,
      forceExec,
      promise: execFn()
    };
  }
  const promise = new Promise((resolve, reject) => {
    let delayId;
    abort = (msg) => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = null;
      }
      reject(new RRNLRetryMiddlewareError(msg || "Aborted in beforeRetry() callback"));
    };
    forceExec = () => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = null;
        resolve(execFn());
      }
    };
    delayId = setTimeout(() => {
      resolve(execFn());
    }, delay);
  });
  return {
    forceExec,
    abort,
    promise
  };
}
function promiseWithTimeout(promise, timeoutMS, onTimeout) {
  if (!timeoutMS) {
    return promise;
  }
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      onTimeout().then(resolve).catch(reject);
    }, timeoutMS);
    promise.then((res) => {
      clearTimeout(timeoutId);
      resolve(res);
    }).catch((err) => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/url.js
init_define_global();
function urlMiddleware(opts) {
  const {
    url,
    headers,
    method = "POST",
    credentials,
    mode,
    cache,
    redirect
  } = opts || {};
  const urlOrThunk = url || "/graphql";
  const headersOrThunk = headers;
  return (next) => async (req) => {
    req.fetchOpts.url = await (isFunction(urlOrThunk) ? urlOrThunk(req) : urlOrThunk);
    if (headersOrThunk) {
      req.fetchOpts.headers = await (isFunction(headersOrThunk) ? headersOrThunk(req) : headersOrThunk);
    }
    if (method)
      req.fetchOpts.method = method;
    if (credentials)
      req.fetchOpts.credentials = credentials;
    if (mode)
      req.fetchOpts.mode = mode;
    if (cache)
      req.fetchOpts.cache = cache;
    if (redirect)
      req.fetchOpts.redirect = redirect;
    return next(req);
  };
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/auth.js
init_define_global();
var RRNLAuthMiddlewareError = class extends RRNLError {
  constructor(msg) {
    super(msg);
    this.name = "RRNLAuthMiddlewareError";
  }
};
function authMiddleware(opts) {
  const {
    token: tokenOrThunk,
    tokenRefreshPromise,
    allowEmptyToken = false,
    prefix = "Bearer ",
    header = "Authorization"
  } = opts || {};
  let tokenRefreshInProgress = null;
  return (next) => async (req) => {
    try {
      const token = await (isFunction(tokenOrThunk) ? tokenOrThunk(req) : tokenOrThunk);
      if (!token && tokenRefreshPromise && !allowEmptyToken) {
        throw new RRNLAuthMiddlewareError("Empty token");
      }
      if (token) {
        req.fetchOpts.headers[header] = `${prefix}${token}`;
      }
      const res = await next(req);
      return res;
    } catch (e) {
      if (e && tokenRefreshPromise) {
        if (e.message === "Empty token" || e.res && e.res.status === 401) {
          if (tokenRefreshPromise) {
            if (!tokenRefreshInProgress) {
              tokenRefreshInProgress = Promise.resolve(tokenRefreshPromise(req, e.res)).then((newToken) => {
                tokenRefreshInProgress = null;
                return newToken;
              }).catch((err) => {
                tokenRefreshInProgress = null;
                throw err;
              });
            }
            return tokenRefreshInProgress.then((newToken) => {
              if (!newToken && !allowEmptyToken) {
                throw new RRNLAuthMiddlewareError("Empty token");
              }
              const newReq = req.clone();
              if (newToken) {
                newReq.fetchOpts.headers[header] = `${prefix}${newToken}`;
              } else {
                delete newReq.fetchOpts.headers[header];
              }
              return next(newReq);
            });
          }
        }
      }
      throw e;
    }
  };
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/perf.js
init_define_global();
function performanceMiddleware(opts) {
  const logger = opts && opts.logger || console.log.bind(console, "[RELAY-NETWORK]");
  return (next) => (req) => {
    const start = new Date().getTime();
    return next(req).then((res) => {
      const end = new Date().getTime();
      logger(`[${end - start}ms] ${req.getID()}`, req, res);
      return res;
    });
  };
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/logger.js
init_define_global();
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function loggerMiddleware(opts) {
  const logger = opts && opts.logger || console.log.bind(console, "[RELAY-NETWORK]");
  return (next) => (req) => {
    const start = new Date().getTime();
    logger(`Run ${req.getID()}`, req);
    return next(req).then((res) => {
      const end = new Date().getTime();
      let queryId;
      let queryData;
      if (req instanceof RelayRequest) {
        queryId = req.getID();
        queryData = {
          query: req.getQueryString(),
          variables: req.getVariables()
        };
      } else if (req instanceof RelayRequestBatch) {
        queryId = req.getID();
        queryData = {
          requestList: req.requests,
          responseList: res.json
        };
      } else {
        queryId = "CustomRequest";
        queryData = {};
      }
      logger(`Done ${queryId} in ${end - start}ms`, _objectSpread3({}, queryData, {
        req,
        res
      }));
      if (res.status !== 200) {
        logger(`Status ${res.status}: ${res.statusText || ""} for ${queryId}`);
      }
      return res;
    }, (error) => {
      if (error && error.name && error.name === "AbortError") {
        logger(`Cancelled ${req.getID()}`);
      }
      throw error;
    });
  };
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/error.js
init_define_global();
function _objectWithoutProperties3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function errorMiddleware(options) {
  const opts = options || {};
  const logger = opts.logger || console.error.bind(console);
  const prefix = opts.prefix || "[RELAY-NETWORK] GRAPHQL SERVER ERROR:\n\n";
  const disableServerMiddlewareTip = opts.disableServerMiddlewareTip || false;
  function displayErrors(errors, reqRes) {
    return errors.forEach((error) => {
      const {
        message,
        stack
      } = error, rest = _objectWithoutProperties3(error, ["message", "stack"]);
      let msg = `${prefix}`;
      const fmt = [];
      if (stack && Array.isArray(stack)) {
        msg = `${msg}%c${stack.shift()}
%c${stack.join("\n")}`;
        fmt.push("font-weight: bold;", "font-weight: normal;");
      } else {
        msg = `${msg}%c${message} %c`;
        fmt.push("font-weight: bold;", "font-weight: normal;");
      }
      if (rest && Object.keys(rest).length) {
        msg = `${msg}
  %O`;
        fmt.push(rest);
      }
      msg = `${msg}

%cRequest Response data:
  %c%O`;
      fmt.push("font-weight: bold;", "font-weight: normal;", reqRes);
      if (!stack && !disableServerMiddlewareTip) {
        msg = `${msg}

%cNotice:%c${noticeAbsentStack()}`;
        fmt.push("font-weight: bold;", "font-weight: normal;");
      }
      logger(`${msg}

`, ...fmt);
    });
  }
  return (next) => (req) => {
    return next(req).then((res) => {
      if (req instanceof RelayRequest) {
        if (Array.isArray(res.errors)) {
          displayErrors(res.errors, {
            req,
            res
          });
        }
      } else if (req instanceof RelayRequestBatch) {
        if (Array.isArray(res.json)) {
          res.json.forEach((payload) => {
            if (Array.isArray(payload.errors)) {
              displayErrors(payload.errors, {
                req,
                res
              });
            }
          });
        }
      }
      return res;
    });
  };
}
function noticeAbsentStack() {
  return `
    If you using 'express-graphql', you may get server stack-trace for error.
    Just tune 'formatError' to return 'stack' with stack-trace:

    import graphqlHTTP from 'express-graphql';

    const graphQLMiddleware = graphqlHTTP({
      schema: myGraphQLSchema,
      formatError: (error) => ({
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack.split('\\n') : null,
      })
    });

    app.use('/graphql', graphQLMiddleware);`;
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/cache.js
init_define_global();
var import_relay_runtime2 = __toModule(require_relay_runtime());
function cacheMiddleware(opts) {
  const {
    size,
    ttl,
    onInit,
    allowMutations,
    allowFormData,
    clearOnMutation,
    cacheErrors
  } = opts || {};
  const cache = new import_relay_runtime2.QueryResponseCache({
    size: size || 100,
    ttl: ttl || 15 * 60 * 1e3
  });
  if (isFunction(onInit)) {
    onInit(cache);
  }
  return (next) => async (req) => {
    if (req.isMutation()) {
      if (clearOnMutation) {
        cache.clear();
      }
      if (!allowMutations) {
        return next(req);
      }
    }
    if (req.isFormData() && !allowFormData) {
      return next(req);
    }
    if (req.cacheConfig && req.cacheConfig.force) {
      const queryId = req.getID();
      const variables = req.getVariables();
      const res = await next(req);
      if (!res.errors || res.errors && cacheErrors) {
        cache.set(queryId, variables, res);
      }
      return res;
    }
    try {
      const queryId = req.getID();
      const variables = req.getVariables();
      const cachedRes = cache.get(queryId, variables);
      if (cachedRes) {
        return cachedRes;
      }
      const res = await next(req);
      if (!res.errors || res.errors && cacheErrors) {
        cache.set(queryId, variables, res);
      }
      return res;
    } catch (e) {
      console.log(e);
    }
    return next(req);
  };
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/progress.js
init_define_global();
function createProgressHandler(opts) {
  const {
    onProgress,
    sizeHeader = "Content-Length"
  } = opts || {};
  return async (res) => {
    const {
      body,
      headers
    } = res;
    if (!body) {
      return;
    }
    const totalResponseSize = headers.get(sizeHeader);
    let totalSize = null;
    if (totalResponseSize !== null) {
      totalSize = parseInt(totalResponseSize, 10);
    }
    const reader = body.getReader();
    let completed = false;
    let runningTotal = 0;
    do {
      const step = await reader.read();
      const {
        done,
        value
      } = step;
      const length = value && value.length || 0;
      completed = done;
      if (!completed) {
        runningTotal += length;
        onProgress(runningTotal, totalSize);
      }
    } while (!completed);
  };
}
function progressMiddleware(opts) {
  const progressHandler = createProgressHandler(opts);
  const mw = (next) => async (req) => {
    const res = await next(req);
    progressHandler(res.clone());
    return res;
  };
  mw.isRawMiddleware = true;
  return mw;
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/upload.js
init_define_global();

// .yarn/cache/extract-files-npm-9.0.0-6ee13e6aab-c31781d090.zip/node_modules/extract-files/public/index.mjs
init_define_global();
var import_ReactNativeFile = __toModule(require_ReactNativeFile());
var import_extractFiles = __toModule(require_extractFiles());
var import_isExtractableFile = __toModule(require_isExtractableFile());

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/middlewares/upload.js
function uploadMiddleware() {
  return (next) => async (req) => {
    if (req instanceof RelayRequestBatch) {
      throw new Error("RelayRequestBatch is not supported");
    }
    const operations = {
      query: req.operation.text,
      variables: req.variables
    };
    const {
      clone: extractedOperations,
      files
    } = (0, import_extractFiles.default)(operations);
    if (files.size) {
      const formData = new FormData();
      formData.append("operations", JSON.stringify(extractedOperations));
      const pathMap = {};
      let i = 0;
      files.forEach((paths) => {
        pathMap[++i] = paths;
      });
      formData.append("map", JSON.stringify(pathMap));
      i = 0;
      files.forEach((paths, file) => {
        formData.append(++i, file, file.name);
      });
      req.fetchOpts.method = "POST";
      req.fetchOpts.body = formData;
      delete req.fetchOpts.headers["Content-Type"];
    }
    const res = await next(req);
    return res;
  };
}

// .yarn/__virtual__/react-relay-network-modern-virtual-3777a84ca4/0/cache/react-relay-network-modern-npm-6.0.0-05cbdb2575-ea6da6d260.zip/node_modules/react-relay-network-modern/es/express-middleware/graphqlBatchHTTPWrapper.js
init_define_global();
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function graphqlBatchHTTPWrapper_default(graphqlHTTPMiddleware) {
  return (req, res) => {
    const subResponses = [];
    return Promise.all(req.body.map((data) => new Promise((resolve) => {
      const subRequest = _objectSpread4({
        __proto__: req.__proto__
      }, req, {
        body: data
      });
      const subResponse = _objectSpread4({}, res, {
        status(st) {
          this.statusCode = st;
          return this;
        },
        set() {
          return this;
        },
        send(payload) {
          resolve({
            status: this.statusCode,
            id: data.id,
            payload
          });
        },
        setHeader() {
          return this;
        },
        header() {
        },
        write(payload) {
          this.payload = payload;
        },
        end(payload) {
          if (payload) {
            this.payload = payload;
          }
          resolve({
            status: this.statusCode,
            id: data.id,
            payload: this.payload
          });
        }
      });
      subResponses.push(subResponse);
      graphqlHTTPMiddleware(subRequest, subResponse);
    }))).then((responses) => {
      let response = "";
      responses.forEach(({
        status,
        id,
        payload
      }, idx) => {
        if (status) {
          res.status(status);
        }
        const comma = responses.length - 1 > idx ? "," : "";
        response += `{ "id":"${id}", "payload":${payload} }${comma}`;
      });
      res.set("Content-Type", "application/json");
      res.send(`[${response}]`);
    }).catch((err) => {
      res.status(500).send({
        error: err.message
      });
    });
  };
}
export {
  RRNLAuthMiddlewareError,
  RRNLBatchMiddlewareError,
  RRNLError,
  RRNLRequestError,
  RRNLRetryMiddlewareError,
  RelayNetworkLayer,
  RelayRequest as RelayNetworkLayerRequest,
  RelayRequestBatch as RelayNetworkLayerRequestBatch,
  RelayResponse as RelayNetworkLayerResponse,
  authMiddleware,
  batchMiddleware,
  cacheMiddleware,
  createRequestError,
  errorMiddleware,
  formatGraphQLErrors,
  graphqlBatchHTTPWrapper_default as graphqlBatchHTTPWrapper,
  legacyBatchMiddleware,
  loggerMiddleware,
  performanceMiddleware as perfMiddleware,
  progressMiddleware,
  retryMiddleware,
  uploadMiddleware,
  urlMiddleware
};
//# sourceMappingURL=react-relay-network-modern_es.js.map
