import {
  require_interopRequireDefault
} from "./chunk-52LO7UMF.js";
import {
  __commonJS,
  define_global_default,
  init_define_global
} from "./chunk-WXFKU22Y.js";

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/connection/ConnectionInterface.js
var require_ConnectionInterface = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/connection/ConnectionInterface.js"(exports, module) {
    init_define_global();
    "use strict";
    var CONNECTION_CALLS = {
      after: true,
      before: true,
      find: true,
      first: true,
      last: true,
      surrounds: true
    };
    var config = {
      CLIENT_MUTATION_ID: "clientMutationId",
      CURSOR: "cursor",
      EDGES: "edges",
      END_CURSOR: "endCursor",
      HAS_NEXT_PAGE: "hasNextPage",
      HAS_PREV_PAGE: "hasPreviousPage",
      NODE: "node",
      PAGE_INFO_TYPE: "PageInfo",
      PAGE_INFO: "pageInfo",
      START_CURSOR: "startCursor"
    };
    var ConnectionInterface = {
      inject: function inject(newConfig) {
        config = newConfig;
      },
      get: function get() {
        return config;
      },
      isConnectionCall: function isConnectionCall(call) {
        return CONNECTION_CALLS.hasOwnProperty(call.name);
      }
    };
    module.exports = ConnectionInterface;
  }
});

// .yarn/cache/invariant-npm-2.2.4-717fbdb119-cc3182d793.zip/node_modules/invariant/browser.js
var require_browser = __commonJS({
  ".yarn/cache/invariant-npm-2.2.4-717fbdb119-cc3182d793.zip/node_modules/invariant/browser.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayDefaultHandleKey.js
var require_RelayDefaultHandleKey = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayDefaultHandleKey.js"(exports, module) {
    init_define_global();
    "use strict";
    module.exports = {
      DEFAULT_HANDLE_KEY: ""
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getRelayHandleKey.js
var require_getRelayHandleKey = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getRelayHandleKey.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var _require = require_RelayDefaultHandleKey();
    var DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;
    function getRelayHandleKey(handleName, key, fieldName) {
      if (key && key !== DEFAULT_HANDLE_KEY) {
        return "__".concat(key, "_").concat(handleName);
      }
      !(fieldName != null) ? true ? invariant(false, "getRelayHandleKey: Expected either `fieldName` or `key` in `handle` to be provided") : invariant(false) : void 0;
      return "__".concat(fieldName, "_").concat(handleName);
    }
    module.exports = getRelayHandleKey;
  }
});

// .yarn/cache/fbjs-npm-3.0.0-938b39511d-85ec57d8db.zip/node_modules/fbjs/lib/emptyFunction.js
var require_emptyFunction = __commonJS({
  ".yarn/cache/fbjs-npm-3.0.0-938b39511d-85ec57d8db.zip/node_modules/fbjs/lib/emptyFunction.js"(exports, module) {
    init_define_global();
    "use strict";
    function makeEmptyFunction(arg) {
      return function() {
        return arg;
      };
    }
    var emptyFunction = function emptyFunction2() {
    };
    emptyFunction.thatReturns = makeEmptyFunction;
    emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction.thatReturnsThis = function() {
      return this;
    };
    emptyFunction.thatReturnsArgument = function(arg) {
      return arg;
    };
    module.exports = emptyFunction;
  }
});

// .yarn/cache/fbjs-npm-3.0.0-938b39511d-85ec57d8db.zip/node_modules/fbjs/lib/warning.js
var require_warning = __commonJS({
  ".yarn/cache/fbjs-npm-3.0.0-938b39511d-85ec57d8db.zip/node_modules/fbjs/lib/warning.js"(exports, module) {
    init_define_global();
    "use strict";
    var emptyFunction = require_emptyFunction();
    function printWarning(format) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var argIndex = 0;
      var message = "Warning: " + format.replace(/%s/g, function() {
        return args[argIndex++];
      });
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    }
    var warning = true ? function(condition, format) {
      if (format === void 0) {
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
        printWarning.apply(void 0, [format].concat(args));
      }
    } : emptyFunction;
    module.exports = warning;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/ClientID.js
var require_ClientID = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/ClientID.js"(exports, module) {
    init_define_global();
    "use strict";
    var PREFIX = "client:";
    function generateClientID(id, storageKey, index) {
      var key = id + ":" + storageKey;
      if (index != null) {
        key += ":" + index;
      }
      if (key.indexOf(PREFIX) !== 0) {
        key = PREFIX + key;
      }
      return key;
    }
    function isClientID(id) {
      return id.indexOf(PREFIX) === 0;
    }
    var localID = 0;
    function generateUniqueClientID() {
      return "".concat(PREFIX, "local:").concat(localID++);
    }
    module.exports = {
      generateClientID,
      generateUniqueClientID,
      isClientID
    };
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    init_define_global();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = _arrayLikeToArray;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js
var require_arrayWithoutHoles = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"(exports, module) {
    init_define_global();
    var arrayLikeToArray = require_arrayLikeToArray();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return arrayLikeToArray(arr);
    }
    module.exports = _arrayWithoutHoles;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/iterableToArray.js
var require_iterableToArray = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/iterableToArray.js"(exports, module) {
    init_define_global();
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    module.exports = _iterableToArray;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    init_define_global();
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return arrayLikeToArray(o, minLen);
    }
    module.exports = _unsupportedIterableToArray;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/nonIterableSpread.js
var require_nonIterableSpread = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/nonIterableSpread.js"(exports, module) {
    init_define_global();
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/toConsumableArray.js
var require_toConsumableArray = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/toConsumableArray.js"(exports, module) {
    init_define_global();
    var arrayWithoutHoles = require_arrayWithoutHoles();
    var iterableToArray = require_iterableToArray();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableSpread = require_nonIterableSpread();
    function _toConsumableArray(arr) {
      return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }
    module.exports = _toConsumableArray;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayConcreteNode.js
var require_RelayConcreteNode = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayConcreteNode.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayConcreteNode = {
      CONDITION: "Condition",
      CLIENT_COMPONENT: "ClientComponent",
      CLIENT_EXTENSION: "ClientExtension",
      DEFER: "Defer",
      CONNECTION: "Connection",
      FLIGHT_FIELD: "FlightField",
      FRAGMENT: "Fragment",
      FRAGMENT_SPREAD: "FragmentSpread",
      INLINE_DATA_FRAGMENT_SPREAD: "InlineDataFragmentSpread",
      INLINE_DATA_FRAGMENT: "InlineDataFragment",
      INLINE_FRAGMENT: "InlineFragment",
      LINKED_FIELD: "LinkedField",
      LINKED_HANDLE: "LinkedHandle",
      LITERAL: "Literal",
      LIST_VALUE: "ListValue",
      LOCAL_ARGUMENT: "LocalArgument",
      MODULE_IMPORT: "ModuleImport",
      RELAY_RESOLVER: "RelayResolver",
      REQUIRED_FIELD: "RequiredField",
      OBJECT_VALUE: "ObjectValue",
      OPERATION: "Operation",
      REQUEST: "Request",
      ROOT_ARGUMENT: "RootArgument",
      SCALAR_FIELD: "ScalarField",
      SCALAR_HANDLE: "ScalarHandle",
      SPLIT_OPERATION: "SplitOperation",
      STREAM: "Stream",
      TYPE_DISCRIMINATOR: "TypeDiscriminator",
      VARIABLE: "Variable"
    };
    module.exports = RelayConcreteNode;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/stableCopy.js
var require_stableCopy = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/stableCopy.js"(exports, module) {
    init_define_global();
    "use strict";
    function stableCopy(value) {
      if (!value || typeof value !== "object") {
        return value;
      }
      if (Array.isArray(value)) {
        return value.map(stableCopy);
      }
      var keys = Object.keys(value).sort();
      var stable = {};
      for (var i = 0; i < keys.length; i++) {
        stable[keys[i]] = stableCopy(value[keys[i]]);
      }
      return stable;
    }
    module.exports = stableCopy;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreUtils.js
var require_RelayStoreUtils = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreUtils.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var RelayConcreteNode = require_RelayConcreteNode();
    var getRelayHandleKey = require_getRelayHandleKey();
    var invariant = require_browser();
    var stableCopy = require_stableCopy();
    var VARIABLE = RelayConcreteNode.VARIABLE;
    var LITERAL = RelayConcreteNode.LITERAL;
    var OBJECT_VALUE = RelayConcreteNode.OBJECT_VALUE;
    var LIST_VALUE = RelayConcreteNode.LIST_VALUE;
    var MODULE_COMPONENT_KEY_PREFIX = "__module_component_";
    var MODULE_OPERATION_KEY_PREFIX = "__module_operation_";
    function getArgumentValue(arg, variables) {
      if (arg.kind === VARIABLE) {
        return getStableVariableValue(arg.variableName, variables);
      } else if (arg.kind === LITERAL) {
        return arg.value;
      } else if (arg.kind === OBJECT_VALUE) {
        var value = {};
        arg.fields.forEach(function(field) {
          value[field.name] = getArgumentValue(field, variables);
        });
        return value;
      } else if (arg.kind === LIST_VALUE) {
        var _value = [];
        arg.items.forEach(function(item) {
          item != null ? _value.push(getArgumentValue(item, variables)) : null;
        });
        return _value;
      }
    }
    function getArgumentValues(args, variables) {
      var values = {};
      args.forEach(function(arg) {
        values[arg.name] = getArgumentValue(arg, variables);
      });
      return values;
    }
    function getHandleStorageKey(handleField, variables) {
      var dynamicKey = handleField.dynamicKey, handle = handleField.handle, key = handleField.key, name = handleField.name, args = handleField.args, filters = handleField.filters;
      var handleName = getRelayHandleKey(handle, key, name);
      var filterArgs = null;
      if (args && filters && args.length !== 0 && filters.length !== 0) {
        filterArgs = args.filter(function(arg) {
          return filters.indexOf(arg.name) > -1;
        });
      }
      if (dynamicKey) {
        filterArgs = filterArgs != null ? [dynamicKey].concat((0, _toConsumableArray2["default"])(filterArgs)) : [dynamicKey];
      }
      if (filterArgs === null) {
        return handleName;
      } else {
        return formatStorageKey(handleName, getArgumentValues(filterArgs, variables));
      }
    }
    function getStorageKey(field, variables) {
      if (field.storageKey) {
        return field.storageKey;
      }
      var args = field.args, name = field.name;
      return args && args.length !== 0 ? formatStorageKey(name, getArgumentValues(args, variables)) : name;
    }
    function getStableStorageKey(name, args) {
      return formatStorageKey(name, stableCopy(args));
    }
    function formatStorageKey(name, argValues) {
      if (!argValues) {
        return name;
      }
      var values = [];
      for (var argName in argValues) {
        if (argValues.hasOwnProperty(argName)) {
          var value = argValues[argName];
          if (value != null) {
            var _JSON$stringify;
            values.push(argName + ":" + ((_JSON$stringify = JSON.stringify(value)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "undefined"));
          }
        }
      }
      return values.length === 0 ? name : name + "(".concat(values.join(","), ")");
    }
    function getStableVariableValue(name, variables) {
      !variables.hasOwnProperty(name) ? true ? invariant(false, "getVariableValue(): Undefined variable `%s`.", name) : invariant(false) : void 0;
      return stableCopy(variables[name]);
    }
    function getModuleComponentKey(documentName) {
      return "".concat(MODULE_COMPONENT_KEY_PREFIX).concat(documentName);
    }
    function getModuleOperationKey(documentName) {
      return "".concat(MODULE_OPERATION_KEY_PREFIX).concat(documentName);
    }
    var RelayStoreUtils = {
      FRAGMENTS_KEY: "__fragments",
      FRAGMENT_OWNER_KEY: "__fragmentOwner",
      FRAGMENT_PROP_NAME_KEY: "__fragmentPropName",
      MODULE_COMPONENT_KEY: "__module_component",
      ID_KEY: "__id",
      REF_KEY: "__ref",
      REFS_KEY: "__refs",
      ROOT_ID: "client:root",
      ROOT_TYPE: "__Root",
      TYPENAME_KEY: "__typename",
      INVALIDATED_AT_KEY: "__invalidated_at",
      IS_WITHIN_UNMATCHED_TYPE_REFINEMENT: "__isWithinUnmatchedTypeRefinement",
      formatStorageKey,
      getArgumentValue,
      getArgumentValues,
      getHandleStorageKey,
      getStorageKey,
      getStableStorageKey,
      getModuleComponentKey,
      getModuleOperationKey
    };
    module.exports = RelayStoreUtils;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/connection/ConnectionHandler.js
var require_ConnectionHandler = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/connection/ConnectionHandler.js"(exports, module) {
    init_define_global();
    "use strict";
    var ConnectionInterface = require_ConnectionInterface();
    var getRelayHandleKey = require_getRelayHandleKey();
    var invariant = require_browser();
    var warning = require_warning();
    var _require = require_ClientID();
    var generateClientID = _require.generateClientID;
    var _require2 = require_RelayStoreUtils();
    var getStableStorageKey = _require2.getStableStorageKey;
    var CONNECTION = "connection";
    var NEXT_EDGE_INDEX = "__connection_next_edge_index";
    function update(store, payload) {
      var record = store.get(payload.dataID);
      if (!record) {
        return;
      }
      var _ConnectionInterface$ = ConnectionInterface.get(), EDGES = _ConnectionInterface$.EDGES, END_CURSOR = _ConnectionInterface$.END_CURSOR, HAS_NEXT_PAGE = _ConnectionInterface$.HAS_NEXT_PAGE, HAS_PREV_PAGE = _ConnectionInterface$.HAS_PREV_PAGE, PAGE_INFO = _ConnectionInterface$.PAGE_INFO, PAGE_INFO_TYPE = _ConnectionInterface$.PAGE_INFO_TYPE, START_CURSOR = _ConnectionInterface$.START_CURSOR;
      var serverConnection = record.getLinkedRecord(payload.fieldKey);
      var serverPageInfo = serverConnection && serverConnection.getLinkedRecord(PAGE_INFO);
      if (!serverConnection) {
        record.setValue(null, payload.handleKey);
        return;
      }
      var clientConnectionID = generateClientID(record.getDataID(), payload.handleKey);
      var clientConnectionField = record.getLinkedRecord(payload.handleKey);
      var clientConnection = clientConnectionField !== null && clientConnectionField !== void 0 ? clientConnectionField : store.get(clientConnectionID);
      var clientPageInfo = clientConnection && clientConnection.getLinkedRecord(PAGE_INFO);
      if (!clientConnection) {
        var connection = store.create(clientConnectionID, serverConnection.getType());
        connection.setValue(0, NEXT_EDGE_INDEX);
        connection.copyFieldsFrom(serverConnection);
        var serverEdges = serverConnection.getLinkedRecords(EDGES);
        if (serverEdges) {
          serverEdges = serverEdges.map(function(edge) {
            return buildConnectionEdge(store, connection, edge);
          });
          connection.setLinkedRecords(serverEdges, EDGES);
        }
        record.setLinkedRecord(connection, payload.handleKey);
        clientPageInfo = store.create(generateClientID(connection.getDataID(), PAGE_INFO), PAGE_INFO_TYPE);
        clientPageInfo.setValue(false, HAS_NEXT_PAGE);
        clientPageInfo.setValue(false, HAS_PREV_PAGE);
        clientPageInfo.setValue(null, END_CURSOR);
        clientPageInfo.setValue(null, START_CURSOR);
        if (serverPageInfo) {
          clientPageInfo.copyFieldsFrom(serverPageInfo);
        }
        connection.setLinkedRecord(clientPageInfo, PAGE_INFO);
      } else {
        if (clientConnectionField == null) {
          record.setLinkedRecord(clientConnection, payload.handleKey);
        }
        var _connection = clientConnection;
        var _serverEdges = serverConnection.getLinkedRecords(EDGES);
        if (_serverEdges) {
          _serverEdges = _serverEdges.map(function(edge) {
            return buildConnectionEdge(store, _connection, edge);
          });
        }
        var prevEdges = _connection.getLinkedRecords(EDGES);
        var prevPageInfo = _connection.getLinkedRecord(PAGE_INFO);
        _connection.copyFieldsFrom(serverConnection);
        if (prevEdges) {
          _connection.setLinkedRecords(prevEdges, EDGES);
        }
        if (prevPageInfo) {
          _connection.setLinkedRecord(prevPageInfo, PAGE_INFO);
        }
        var nextEdges = [];
        var args = payload.args;
        if (prevEdges && _serverEdges) {
          if (args.after != null) {
            if (clientPageInfo && args.after === clientPageInfo.getValue(END_CURSOR)) {
              var nodeIDs = new Set();
              mergeEdges(prevEdges, nextEdges, nodeIDs);
              mergeEdges(_serverEdges, nextEdges, nodeIDs);
            } else {
              true ? warning(false, "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).", args.after, clientPageInfo && clientPageInfo.getValue(END_CURSOR)) : void 0;
              return;
            }
          } else if (args.before != null) {
            if (clientPageInfo && args.before === clientPageInfo.getValue(START_CURSOR)) {
              var _nodeIDs = new Set();
              mergeEdges(_serverEdges, nextEdges, _nodeIDs);
              mergeEdges(prevEdges, nextEdges, _nodeIDs);
            } else {
              true ? warning(false, "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).", args.before, clientPageInfo && clientPageInfo.getValue(START_CURSOR)) : void 0;
              return;
            }
          } else {
            nextEdges = _serverEdges;
          }
        } else if (_serverEdges) {
          nextEdges = _serverEdges;
        } else {
          nextEdges = prevEdges;
        }
        if (nextEdges != null && nextEdges !== prevEdges) {
          _connection.setLinkedRecords(nextEdges, EDGES);
        }
        if (clientPageInfo && serverPageInfo) {
          if (args.after == null && args.before == null) {
            clientPageInfo.copyFieldsFrom(serverPageInfo);
          } else if (args.before != null || args.after == null && args.last) {
            clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_PREV_PAGE), HAS_PREV_PAGE);
            var startCursor = serverPageInfo.getValue(START_CURSOR);
            if (typeof startCursor === "string") {
              clientPageInfo.setValue(startCursor, START_CURSOR);
            }
          } else if (args.after != null || args.before == null && args.first) {
            clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_NEXT_PAGE), HAS_NEXT_PAGE);
            var endCursor = serverPageInfo.getValue(END_CURSOR);
            if (typeof endCursor === "string") {
              clientPageInfo.setValue(endCursor, END_CURSOR);
            }
          }
        }
      }
    }
    function getConnection(record, key, filters) {
      var handleKey = getRelayHandleKey(CONNECTION, key, null);
      return record.getLinkedRecord(handleKey, filters);
    }
    function getConnectionID(recordID, key, filters) {
      var handleKey = getRelayHandleKey(CONNECTION, key, null);
      var storageKey = getStableStorageKey(handleKey, filters);
      return generateClientID(recordID, storageKey);
    }
    function insertEdgeAfter(record, newEdge, cursor) {
      var _ConnectionInterface$2 = ConnectionInterface.get(), CURSOR = _ConnectionInterface$2.CURSOR, EDGES = _ConnectionInterface$2.EDGES;
      var edges = record.getLinkedRecords(EDGES);
      if (!edges) {
        record.setLinkedRecords([newEdge], EDGES);
        return;
      }
      var nextEdges;
      if (cursor == null) {
        nextEdges = edges.concat(newEdge);
      } else {
        nextEdges = [];
        var foundCursor = false;
        for (var ii = 0; ii < edges.length; ii++) {
          var edge = edges[ii];
          nextEdges.push(edge);
          if (edge == null) {
            continue;
          }
          var edgeCursor = edge.getValue(CURSOR);
          if (cursor === edgeCursor) {
            nextEdges.push(newEdge);
            foundCursor = true;
          }
        }
        if (!foundCursor) {
          nextEdges.push(newEdge);
        }
      }
      record.setLinkedRecords(nextEdges, EDGES);
    }
    function createEdge(store, record, node, edgeType) {
      var _ConnectionInterface$3 = ConnectionInterface.get(), NODE = _ConnectionInterface$3.NODE;
      var edgeID = generateClientID(record.getDataID(), node.getDataID());
      var edge = store.get(edgeID);
      if (!edge) {
        edge = store.create(edgeID, edgeType);
      }
      edge.setLinkedRecord(node, NODE);
      if (edge.getValue("cursor") == null) {
        edge.setValue(null, "cursor");
      }
      return edge;
    }
    function insertEdgeBefore(record, newEdge, cursor) {
      var _ConnectionInterface$4 = ConnectionInterface.get(), CURSOR = _ConnectionInterface$4.CURSOR, EDGES = _ConnectionInterface$4.EDGES;
      var edges = record.getLinkedRecords(EDGES);
      if (!edges) {
        record.setLinkedRecords([newEdge], EDGES);
        return;
      }
      var nextEdges;
      if (cursor == null) {
        nextEdges = [newEdge].concat(edges);
      } else {
        nextEdges = [];
        var foundCursor = false;
        for (var ii = 0; ii < edges.length; ii++) {
          var edge = edges[ii];
          if (edge != null) {
            var edgeCursor = edge.getValue(CURSOR);
            if (cursor === edgeCursor) {
              nextEdges.push(newEdge);
              foundCursor = true;
            }
          }
          nextEdges.push(edge);
        }
        if (!foundCursor) {
          nextEdges.unshift(newEdge);
        }
      }
      record.setLinkedRecords(nextEdges, EDGES);
    }
    function deleteNode(record, nodeID) {
      var _ConnectionInterface$5 = ConnectionInterface.get(), EDGES = _ConnectionInterface$5.EDGES, NODE = _ConnectionInterface$5.NODE;
      var edges = record.getLinkedRecords(EDGES);
      if (!edges) {
        return;
      }
      var nextEdges;
      for (var ii = 0; ii < edges.length; ii++) {
        var edge = edges[ii];
        var node = edge && edge.getLinkedRecord(NODE);
        if (node != null && node.getDataID() === nodeID) {
          if (nextEdges === void 0) {
            nextEdges = edges.slice(0, ii);
          }
        } else if (nextEdges !== void 0) {
          nextEdges.push(edge);
        }
      }
      if (nextEdges !== void 0) {
        record.setLinkedRecords(nextEdges, EDGES);
      }
    }
    function buildConnectionEdge(store, connection, edge) {
      if (edge == null) {
        return edge;
      }
      var _ConnectionInterface$6 = ConnectionInterface.get(), EDGES = _ConnectionInterface$6.EDGES;
      var edgeIndex = connection.getValue(NEXT_EDGE_INDEX);
      !(typeof edgeIndex === "number") ? true ? invariant(false, "ConnectionHandler: Expected %s to be a number, got `%s`.", NEXT_EDGE_INDEX, edgeIndex) : invariant(false) : void 0;
      var edgeID = generateClientID(connection.getDataID(), EDGES, edgeIndex);
      var connectionEdge = store.create(edgeID, edge.getType());
      connectionEdge.copyFieldsFrom(edge);
      if (connectionEdge.getValue("cursor") == null) {
        connectionEdge.setValue(null, "cursor");
      }
      connection.setValue(edgeIndex + 1, NEXT_EDGE_INDEX);
      return connectionEdge;
    }
    function mergeEdges(sourceEdges, targetEdges, nodeIDs) {
      var _ConnectionInterface$7 = ConnectionInterface.get(), NODE = _ConnectionInterface$7.NODE;
      for (var ii = 0; ii < sourceEdges.length; ii++) {
        var edge = sourceEdges[ii];
        if (!edge) {
          continue;
        }
        var node = edge.getLinkedRecord(NODE);
        var nodeID = node && node.getDataID();
        if (nodeID) {
          if (nodeIDs.has(nodeID)) {
            continue;
          }
          nodeIDs.add(nodeID);
        }
        targetEdges.push(edge);
      }
    }
    module.exports = {
      buildConnectionEdge,
      createEdge,
      deleteNode,
      getConnection,
      getConnectionID,
      insertEdgeAfter,
      insertEdgeBefore,
      update
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/GraphQLTag.js
var require_GraphQLTag = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/GraphQLTag.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayConcreteNode = require_RelayConcreteNode();
    var invariant = require_browser();
    var warning = require_warning();
    function graphql(strings) {
      true ? true ? invariant(false, "graphql: Unexpected invocation at runtime. Either the Babel transform was not set up, or it failed to identify this call site. Make sure it is being used verbatim as `graphql`. Note also that there cannot be a space between graphql and the backtick that follows.") : invariant(false) : void 0;
    }
    function getNode(taggedNode) {
      var node = taggedNode;
      if (typeof node === "function") {
        node = node();
        true ? warning(false, "RelayGraphQLTag: node `%s` unexpectedly wrapped in a function.", node.kind === "Fragment" ? node.name : node.operation.name) : void 0;
      } else if (node["default"]) {
        node = node["default"];
      }
      return node;
    }
    function isFragment(node) {
      var fragment = getNode(node);
      return typeof fragment === "object" && fragment !== null && fragment.kind === RelayConcreteNode.FRAGMENT;
    }
    function isRequest(node) {
      var request = getNode(node);
      return typeof request === "object" && request !== null && request.kind === RelayConcreteNode.REQUEST;
    }
    function isInlineDataFragment(node) {
      var fragment = getNode(node);
      return typeof fragment === "object" && fragment !== null && fragment.kind === RelayConcreteNode.INLINE_DATA_FRAGMENT;
    }
    function getFragment(taggedNode) {
      var fragment = getNode(taggedNode);
      !isFragment(fragment) ? true ? invariant(false, "GraphQLTag: Expected a fragment, got `%s`.", JSON.stringify(fragment)) : invariant(false) : void 0;
      return fragment;
    }
    function getPaginationFragment(taggedNode) {
      var _fragment$metadata;
      var fragment = getFragment(taggedNode);
      var refetch = (_fragment$metadata = fragment.metadata) === null || _fragment$metadata === void 0 ? void 0 : _fragment$metadata.refetch;
      var connection = refetch === null || refetch === void 0 ? void 0 : refetch.connection;
      if (refetch === null || typeof refetch !== "object" || connection === null || typeof connection !== "object") {
        return null;
      }
      return fragment;
    }
    function getRefetchableFragment(taggedNode) {
      var _fragment$metadata2;
      var fragment = getFragment(taggedNode);
      var refetch = (_fragment$metadata2 = fragment.metadata) === null || _fragment$metadata2 === void 0 ? void 0 : _fragment$metadata2.refetch;
      if (refetch === null || typeof refetch !== "object") {
        return null;
      }
      return fragment;
    }
    function getRequest(taggedNode) {
      var request = getNode(taggedNode);
      !isRequest(request) ? true ? invariant(false, "GraphQLTag: Expected a request, got `%s`.", JSON.stringify(request)) : invariant(false) : void 0;
      return request;
    }
    function getInlineDataFragment(taggedNode) {
      var fragment = getNode(taggedNode);
      !isInlineDataFragment(fragment) ? true ? invariant(false, "GraphQLTag: Expected an inline data fragment, got `%s`.", JSON.stringify(fragment)) : invariant(false) : void 0;
      return fragment;
    }
    module.exports = {
      getFragment,
      getNode,
      getPaginationFragment,
      getRefetchableFragment,
      getRequest,
      getInlineDataFragment,
      graphql,
      isFragment,
      isRequest,
      isInlineDataFragment
    };
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var require_createForOfIteratorHelper = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js"(exports, module) {
    init_define_global();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return {
            s: F,
            n: function n() {
              if (i >= o.length)
                return {
                  done: true
                };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function e(_e) {
              throw _e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return {
        s: function s() {
          it = it.call(o);
        },
        n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function e(_e2) {
          didErr = true;
          err = _e2;
        },
        f: function f() {
          try {
            if (!normalCompletion && it["return"] != null)
              it["return"]();
          } finally {
            if (didErr)
              throw err;
          }
        }
      };
    }
    module.exports = _createForOfIteratorHelper;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/connection/MutationHandlers.js
var require_MutationHandlers = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/connection/MutationHandlers.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var ConnectionHandler = require_ConnectionHandler();
    var ConnectionInterface = require_ConnectionInterface();
    var invariant = require_browser();
    var warning = require_warning();
    var DeleteRecordHandler = {
      update: function update(store, payload) {
        var record = store.get(payload.dataID);
        if (record != null) {
          var idOrIds = record.getValue(payload.fieldKey);
          if (typeof idOrIds === "string") {
            store["delete"](idOrIds);
          } else if (Array.isArray(idOrIds)) {
            idOrIds.forEach(function(id) {
              if (typeof id === "string") {
                store["delete"](id);
              }
            });
          }
        }
      }
    };
    var DeleteEdgeHandler = {
      update: function update(store, payload) {
        var record = store.get(payload.dataID);
        if (record == null) {
          return;
        }
        var connections = payload.handleArgs.connections;
        !(connections != null) ? true ? invariant(false, "MutationHandlers: Expected connection IDs to be specified.") : invariant(false) : void 0;
        var idOrIds = record.getValue(payload.fieldKey);
        var idList = Array.isArray(idOrIds) ? idOrIds : [idOrIds];
        idList.forEach(function(id) {
          if (typeof id === "string") {
            var _iterator = (0, _createForOfIteratorHelper2["default"])(connections), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var connectionID = _step.value;
                var connection = store.get(connectionID);
                if (connection == null) {
                  true ? warning(false, "[Relay][Mutation] The connection with id '".concat(connectionID, "' doesn't exist.")) : void 0;
                  continue;
                }
                ConnectionHandler.deleteNode(connection, id);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        });
      }
    };
    var AppendEdgeHandler = {
      update: edgeUpdater(ConnectionHandler.insertEdgeAfter)
    };
    var PrependEdgeHandler = {
      update: edgeUpdater(ConnectionHandler.insertEdgeBefore)
    };
    var AppendNodeHandler = {
      update: nodeUpdater(ConnectionHandler.insertEdgeAfter)
    };
    var PrependNodeHandler = {
      update: nodeUpdater(ConnectionHandler.insertEdgeBefore)
    };
    function edgeUpdater(insertFn) {
      return function(store, payload) {
        var _serverEdges;
        var record = store.get(payload.dataID);
        if (record == null) {
          return;
        }
        var connections = payload.handleArgs.connections;
        !(connections != null) ? true ? invariant(false, "MutationHandlers: Expected connection IDs to be specified.") : invariant(false) : void 0;
        var singleServerEdge, serverEdges;
        try {
          singleServerEdge = record.getLinkedRecord(payload.fieldKey, payload.args);
        } catch (_unused) {
        }
        if (!singleServerEdge) {
          try {
            serverEdges = record.getLinkedRecords(payload.fieldKey, payload.args);
          } catch (_unused2) {
          }
        }
        if (singleServerEdge == null && serverEdges == null) {
          true ? warning(false, "MutationHandlers: Expected the server edge to be non-null.") : void 0;
          return;
        }
        var _ConnectionInterface$ = ConnectionInterface.get(), NODE = _ConnectionInterface$.NODE, EDGES = _ConnectionInterface$.EDGES;
        var serverEdgeList = (_serverEdges = serverEdges) !== null && _serverEdges !== void 0 ? _serverEdges : [singleServerEdge];
        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(serverEdgeList), _step2;
        try {
          var _loop = function _loop2() {
            var serverEdge = _step2.value;
            if (serverEdge == null) {
              return "continue";
            }
            var serverNode = serverEdge.getLinkedRecord("node");
            if (!serverNode) {
              return "continue";
            }
            var serverNodeId = serverNode.getDataID();
            var _iterator3 = (0, _createForOfIteratorHelper2["default"])(connections), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var connectionID = _step3.value;
                var connection = store.get(connectionID);
                if (connection == null) {
                  true ? warning(false, "[Relay][Mutation] The connection with id '".concat(connectionID, "' doesn't exist.")) : void 0;
                  continue;
                }
                var nodeAlreadyExistsInConnection = (_connection$getLinked = connection.getLinkedRecords(EDGES)) === null || _connection$getLinked === void 0 ? void 0 : _connection$getLinked.some(function(edge) {
                  var _edge$getLinkedRecord;
                  return (edge === null || edge === void 0 ? void 0 : (_edge$getLinkedRecord = edge.getLinkedRecord(NODE)) === null || _edge$getLinkedRecord === void 0 ? void 0 : _edge$getLinkedRecord.getDataID()) === serverNodeId;
                });
                if (nodeAlreadyExistsInConnection) {
                  continue;
                }
                var clientEdge = ConnectionHandler.buildConnectionEdge(store, connection, serverEdge);
                !(clientEdge != null) ? true ? invariant(false, "MutationHandlers: Failed to build the edge.") : invariant(false) : void 0;
                insertFn(connection, clientEdge);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _connection$getLinked;
            var _ret = _loop();
            if (_ret === "continue")
              continue;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      };
    }
    function nodeUpdater(insertFn) {
      return function(store, payload) {
        var _serverNodes;
        var record = store.get(payload.dataID);
        if (record == null) {
          return;
        }
        var _payload$handleArgs = payload.handleArgs, connections = _payload$handleArgs.connections, edgeTypeName = _payload$handleArgs.edgeTypeName;
        !(connections != null) ? true ? invariant(false, "MutationHandlers: Expected connection IDs to be specified.") : invariant(false) : void 0;
        !(edgeTypeName != null) ? true ? invariant(false, "MutationHandlers: Expected edge typename to be specified.") : invariant(false) : void 0;
        var singleServerNode;
        var serverNodes;
        try {
          singleServerNode = record.getLinkedRecord(payload.fieldKey, payload.args);
        } catch (_unused3) {
        }
        if (!singleServerNode) {
          try {
            serverNodes = record.getLinkedRecords(payload.fieldKey, payload.args);
          } catch (_unused4) {
          }
        }
        if (singleServerNode == null && serverNodes == null) {
          true ? warning(false, "MutationHandlers: Expected target node to exist.") : void 0;
          return;
        }
        var _ConnectionInterface$2 = ConnectionInterface.get(), NODE = _ConnectionInterface$2.NODE, EDGES = _ConnectionInterface$2.EDGES;
        var serverNodeList = (_serverNodes = serverNodes) !== null && _serverNodes !== void 0 ? _serverNodes : [singleServerNode];
        var _iterator4 = (0, _createForOfIteratorHelper2["default"])(serverNodeList), _step4;
        try {
          var _loop2 = function _loop22() {
            var serverNode = _step4.value;
            if (serverNode == null) {
              return "continue";
            }
            var serverNodeId = serverNode.getDataID();
            var _iterator5 = (0, _createForOfIteratorHelper2["default"])(connections), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                var connectionID = _step5.value;
                var connection = store.get(connectionID);
                if (connection == null) {
                  true ? warning(false, "[Relay][Mutation] The connection with id '".concat(connectionID, "' doesn't exist.")) : void 0;
                  continue;
                }
                var nodeAlreadyExistsInConnection = (_connection$getLinked2 = connection.getLinkedRecords(EDGES)) === null || _connection$getLinked2 === void 0 ? void 0 : _connection$getLinked2.some(function(edge) {
                  var _edge$getLinkedRecord2;
                  return (edge === null || edge === void 0 ? void 0 : (_edge$getLinkedRecord2 = edge.getLinkedRecord(NODE)) === null || _edge$getLinkedRecord2 === void 0 ? void 0 : _edge$getLinkedRecord2.getDataID()) === serverNodeId;
                });
                if (nodeAlreadyExistsInConnection) {
                  continue;
                }
                var clientEdge = ConnectionHandler.createEdge(store, connection, serverNode, edgeTypeName);
                !(clientEdge != null) ? true ? invariant(false, "MutationHandlers: Failed to build the edge.") : invariant(false) : void 0;
                insertFn(connection, clientEdge);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          };
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var _connection$getLinked2;
            var _ret2 = _loop2();
            if (_ret2 === "continue")
              continue;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      };
    }
    module.exports = {
      AppendEdgeHandler,
      DeleteRecordHandler,
      PrependEdgeHandler,
      AppendNodeHandler,
      PrependNodeHandler,
      DeleteEdgeHandler
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/PreloadableQueryRegistry.js
var require_PreloadableQueryRegistry = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/PreloadableQueryRegistry.js"(exports, module) {
    init_define_global();
    "use strict";
    var PreloadableQueryRegistry = function() {
      function PreloadableQueryRegistry2() {
        this._preloadableQueries = new Map();
        this._callbacks = new Map();
      }
      var _proto = PreloadableQueryRegistry2.prototype;
      _proto.set = function set(key, value) {
        this._preloadableQueries.set(key, value);
        var callbacks = this._callbacks.get(key);
        if (callbacks != null) {
          callbacks.forEach(function(cb) {
            try {
              cb(value);
            } catch (e) {
              setTimeout(function() {
                throw e;
              }, 0);
            }
          });
        }
      };
      _proto.get = function get(key) {
        return this._preloadableQueries.get(key);
      };
      _proto.onLoad = function onLoad(key, callback) {
        var _this$_callbacks$get;
        var callbacks = (_this$_callbacks$get = this._callbacks.get(key)) !== null && _this$_callbacks$get !== void 0 ? _this$_callbacks$get : new Set();
        callbacks.add(callback);
        var dispose = function dispose2() {
          callbacks["delete"](callback);
        };
        this._callbacks.set(key, callbacks);
        return {
          dispose
        };
      };
      _proto.clear = function clear() {
        this._preloadableQueries.clear();
      };
      return PreloadableQueryRegistry2;
    }();
    var preloadableQueryRegistry = new PreloadableQueryRegistry();
    module.exports = preloadableQueryRegistry;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    init_define_global();
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/objectSpread2.js
var require_objectSpread2 = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/objectSpread2.js"(exports, module) {
    init_define_global();
    var defineProperty = require_defineProperty();
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    module.exports = _objectSpread2;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayConcreteVariables.js
var require_RelayConcreteVariables = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayConcreteVariables.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var invariant = require_browser();
    function getFragmentVariables(fragment, rootVariables, argumentVariables) {
      var variables;
      fragment.argumentDefinitions.forEach(function(definition) {
        if (argumentVariables.hasOwnProperty(definition.name)) {
          return;
        }
        variables = variables || (0, _objectSpread2["default"])({}, argumentVariables);
        switch (definition.kind) {
          case "LocalArgument":
            variables[definition.name] = definition.defaultValue;
            break;
          case "RootArgument":
            if (!rootVariables.hasOwnProperty(definition.name)) {
              variables[definition.name] = void 0;
              break;
            }
            variables[definition.name] = rootVariables[definition.name];
            break;
          default:
            definition;
            true ? true ? invariant(false, "RelayConcreteVariables: Unexpected node kind `%s` in fragment `%s`.", definition.kind, fragment.name) : invariant(false) : void 0;
        }
      });
      return variables || argumentVariables;
    }
    function getOperationVariables(operation, variables) {
      var operationVariables = {};
      operation.argumentDefinitions.forEach(function(def) {
        var value = def.defaultValue;
        if (variables[def.name] != null) {
          value = variables[def.name];
        }
        operationVariables[def.name] = value;
      });
      return operationVariables;
    }
    module.exports = {
      getFragmentVariables,
      getOperationVariables
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayDeclarativeMutationConfig.js
var require_RelayDeclarativeMutationConfig = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayDeclarativeMutationConfig.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var ConnectionHandler = require_ConnectionHandler();
    var warning = require_warning();
    var MutationTypes = Object.freeze({
      RANGE_ADD: "RANGE_ADD",
      RANGE_DELETE: "RANGE_DELETE",
      NODE_DELETE: "NODE_DELETE"
    });
    var RangeOperations = Object.freeze({
      APPEND: "append",
      PREPEND: "prepend"
    });
    function convert(configs, request, optimisticUpdater, updater) {
      var configOptimisticUpdates = optimisticUpdater ? [optimisticUpdater] : [];
      var configUpdates = updater ? [updater] : [];
      configs.forEach(function(config) {
        switch (config.type) {
          case "NODE_DELETE":
            var nodeDeleteResult = nodeDelete(config, request);
            if (nodeDeleteResult) {
              configOptimisticUpdates.push(nodeDeleteResult);
              configUpdates.push(nodeDeleteResult);
            }
            break;
          case "RANGE_ADD":
            var rangeAddResult = rangeAdd(config, request);
            if (rangeAddResult) {
              configOptimisticUpdates.push(rangeAddResult);
              configUpdates.push(rangeAddResult);
            }
            break;
          case "RANGE_DELETE":
            var rangeDeleteResult = rangeDelete(config, request);
            if (rangeDeleteResult) {
              configOptimisticUpdates.push(rangeDeleteResult);
              configUpdates.push(rangeDeleteResult);
            }
            break;
        }
      });
      return {
        optimisticUpdater: function optimisticUpdater2(store, data) {
          configOptimisticUpdates.forEach(function(eachOptimisticUpdater) {
            eachOptimisticUpdater(store, data);
          });
        },
        updater: function updater2(store, data) {
          configUpdates.forEach(function(eachUpdater) {
            eachUpdater(store, data);
          });
        }
      };
    }
    function nodeDelete(config, request) {
      var deletedIDFieldName = config.deletedIDFieldName;
      var rootField = getRootField(request);
      if (!rootField) {
        return null;
      }
      return function(store, data) {
        var payload = store.getRootField(rootField);
        if (!payload) {
          return;
        }
        var deleteID = payload.getValue(deletedIDFieldName);
        var deleteIDs = Array.isArray(deleteID) ? deleteID : [deleteID];
        deleteIDs.forEach(function(id) {
          if (id && typeof id === "string") {
            store["delete"](id);
          }
        });
      };
    }
    function rangeAdd(config, request) {
      var parentID = config.parentID, connectionInfo = config.connectionInfo, edgeName = config.edgeName;
      if (!parentID) {
        true ? warning(false, "RelayDeclarativeMutationConfig: For mutation config RANGE_ADD to work you must include a parentID") : void 0;
        return null;
      }
      var rootField = getRootField(request);
      if (!connectionInfo || !rootField) {
        return null;
      }
      return function(store, data) {
        var parent = store.get(parentID);
        if (!parent) {
          return;
        }
        var payload = store.getRootField(rootField);
        if (!payload) {
          return;
        }
        var serverEdge = payload.getLinkedRecord(edgeName);
        var _iterator = (0, _createForOfIteratorHelper2["default"])(connectionInfo), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            if (!serverEdge) {
              continue;
            }
            var connection = ConnectionHandler.getConnection(parent, info.key, info.filters);
            if (!connection) {
              continue;
            }
            var clientEdge = ConnectionHandler.buildConnectionEdge(store, connection, serverEdge);
            if (!clientEdge) {
              continue;
            }
            switch (info.rangeBehavior) {
              case "append":
                ConnectionHandler.insertEdgeAfter(connection, clientEdge);
                break;
              case "prepend":
                ConnectionHandler.insertEdgeBefore(connection, clientEdge);
                break;
              default:
                true ? warning(false, "RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` will not work as expected in RelayModern, supported range behaviors are 'append', 'prepend'.", info.rangeBehavior) : void 0;
                break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };
    }
    function rangeDelete(config, request) {
      var parentID = config.parentID, connectionKeys = config.connectionKeys, pathToConnection = config.pathToConnection, deletedIDFieldName = config.deletedIDFieldName;
      if (!parentID) {
        true ? warning(false, "RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE to work you must include a parentID") : void 0;
        return null;
      }
      var rootField = getRootField(request);
      if (!rootField) {
        return null;
      }
      return function(store, data) {
        if (!data) {
          return;
        }
        var deleteIDs = [];
        var deletedIDField = data[rootField];
        if (deletedIDField && Array.isArray(deletedIDFieldName)) {
          var _iterator2 = (0, _createForOfIteratorHelper2["default"])(deletedIDFieldName), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var eachField = _step2.value;
              if (deletedIDField && typeof deletedIDField === "object") {
                deletedIDField = deletedIDField[eachField];
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (Array.isArray(deletedIDField)) {
            deletedIDField.forEach(function(idObject) {
              if (idObject && idObject.id && typeof idObject === "object" && typeof idObject.id === "string") {
                deleteIDs.push(idObject.id);
              }
            });
          } else if (deletedIDField && deletedIDField.id && typeof deletedIDField.id === "string") {
            deleteIDs.push(deletedIDField.id);
          }
        } else if (deletedIDField && typeof deletedIDFieldName === "string" && typeof deletedIDField === "object") {
          deletedIDField = deletedIDField[deletedIDFieldName];
          if (typeof deletedIDField === "string") {
            deleteIDs.push(deletedIDField);
          } else if (Array.isArray(deletedIDField)) {
            deletedIDField.forEach(function(id) {
              if (typeof id === "string") {
                deleteIDs.push(id);
              }
            });
          }
        }
        deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs);
      };
    }
    function deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs) {
      true ? warning(connectionKeys != null, "RelayDeclarativeMutationConfig: RANGE_DELETE must provide a connectionKeys") : void 0;
      var parent = store.get(parentID);
      if (!parent) {
        return;
      }
      if (pathToConnection.length < 2) {
        true ? warning(false, "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection must include at least parent and connection") : void 0;
        return;
      }
      var recordProxy = parent;
      for (var i = 1; i < pathToConnection.length - 1; i++) {
        if (recordProxy) {
          recordProxy = recordProxy.getLinkedRecord(pathToConnection[i]);
        }
      }
      if (!connectionKeys || !recordProxy) {
        true ? warning(false, "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection is incorrect. Unable to find connection with parentID: %s and path: %s", parentID, pathToConnection.toString()) : void 0;
        return;
      }
      var _iterator3 = (0, _createForOfIteratorHelper2["default"])(connectionKeys), _step3;
      try {
        var _loop = function _loop2() {
          var key = _step3.value;
          var connection = ConnectionHandler.getConnection(recordProxy, key.key, key.filters);
          if (connection) {
            deleteIDs.forEach(function(deleteID) {
              ConnectionHandler.deleteNode(connection, deleteID);
            });
          }
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    function getRootField(request) {
      if (request.fragment.selections && request.fragment.selections.length > 0 && request.fragment.selections[0].kind === "LinkedField") {
        return request.fragment.selections[0].name;
      }
      return null;
    }
    module.exports = {
      MutationTypes,
      RangeOperations,
      convert
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/RelayDefaultHandlerProvider.js
var require_RelayDefaultHandlerProvider = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/handlers/RelayDefaultHandlerProvider.js"(exports, module) {
    init_define_global();
    "use strict";
    var ConnectionHandler = require_ConnectionHandler();
    var MutationHandlers = require_MutationHandlers();
    var invariant = require_browser();
    function RelayDefaultHandlerProvider(handle) {
      switch (handle) {
        case "connection":
          return ConnectionHandler;
        case "deleteRecord":
          return MutationHandlers.DeleteRecordHandler;
        case "deleteEdge":
          return MutationHandlers.DeleteEdgeHandler;
        case "appendEdge":
          return MutationHandlers.AppendEdgeHandler;
        case "prependEdge":
          return MutationHandlers.PrependEdgeHandler;
        case "appendNode":
          return MutationHandlers.AppendNodeHandler;
        case "prependNode":
          return MutationHandlers.PrependNodeHandler;
      }
      true ? true ? invariant(false, "RelayDefaultHandlerProvider: No handler provided for `%s`.", handle) : invariant(false) : void 0;
    }
    module.exports = RelayDefaultHandlerProvider;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayError.js
var require_RelayError = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayError.js"(exports, module) {
    init_define_global();
    "use strict";
    function createError(type, name, messageFormat) {
      for (var _len = arguments.length, messageParams = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        messageParams[_key - 3] = arguments[_key];
      }
      var index = 0;
      var message = messageFormat.replace(/%s/g, function() {
        return String(messageParams[index++]);
      });
      var err = new Error(message);
      var error = Object.assign(err, {
        name,
        messageFormat,
        messageParams,
        type,
        taalOpcodes: [2, 2]
      });
      if (error.stack === void 0) {
        try {
          throw error;
        } catch (_unused) {
        }
      }
      return error;
    }
    module.exports = {
      create: function create(name, messageFormat) {
        for (var _len2 = arguments.length, messageParams = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          messageParams[_key2 - 2] = arguments[_key2];
        }
        return createError.apply(void 0, ["error", name, messageFormat].concat(messageParams));
      },
      createWarning: function createWarning(name, messageFormat) {
        for (var _len3 = arguments.length, messageParams = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          messageParams[_key3 - 2] = arguments[_key3];
        }
        return createError.apply(void 0, ["warn", name, messageFormat].concat(messageParams));
      }
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayFeatureFlags.js
var require_RelayFeatureFlags = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayFeatureFlags.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayFeatureFlags = {
      ENABLE_VARIABLE_CONNECTION_KEY: false,
      ENABLE_PARTIAL_RENDERING_DEFAULT: true,
      ENABLE_RELAY_CONTAINERS_SUSPENSE: true,
      ENABLE_PRECISE_TYPE_REFINEMENT: false,
      ENABLE_REACT_FLIGHT_COMPONENT_FIELD: false,
      ENABLE_REQUIRED_DIRECTIVES: false,
      ENABLE_RELAY_RESOLVERS: false,
      ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: false,
      ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: false,
      ENABLE_STORE_SUBSCRIPTIONS_REFACTOR: false,
      ENABLE_LOAD_QUERY_REQUEST_DEDUPING: true,
      ENABLE_DO_NOT_WRAP_LIVE_QUERY: false,
      ENABLE_NOTIFY_SUBSCRIPTION: false,
      ENABLE_UNIQUE_SUBSCRIPTION_ROOT: false,
      ENABLE_BATCHED_STORE_UPDATES: false
    };
    module.exports = RelayFeatureFlags;
  }
});

// .yarn/cache/fbjs-npm-3.0.0-938b39511d-85ec57d8db.zip/node_modules/fbjs/lib/areEqual.js
var require_areEqual = __commonJS({
  ".yarn/cache/fbjs-npm-3.0.0-938b39511d-85ec57d8db.zip/node_modules/fbjs/lib/areEqual.js"(exports, module) {
    init_define_global();
    "use strict";
    var aStackPool = [];
    var bStackPool = [];
    function areEqual(a, b) {
      var aStack = aStackPool.length ? aStackPool.pop() : [];
      var bStack = bStackPool.length ? bStackPool.pop() : [];
      var result = eq(a, b, aStack, bStack);
      aStack.length = 0;
      bStack.length = 0;
      aStackPool.push(aStack);
      bStackPool.push(bStack);
      return result;
    }
    function eq(a, b, aStack, bStack) {
      if (a === b) {
        return a !== 0 || 1 / a == 1 / b;
      }
      if (a == null || b == null) {
        return false;
      }
      if (typeof a != "object" || typeof b != "object") {
        return false;
      }
      var objToStr = Object.prototype.toString;
      var className = objToStr.call(a);
      if (className != objToStr.call(b)) {
        return false;
      }
      switch (className) {
        case "[object String]":
          return a == String(b);
        case "[object Number]":
          return isNaN(a) || isNaN(b) ? false : a == Number(b);
        case "[object Date]":
        case "[object Boolean]":
          return +a == +b;
        case "[object RegExp]":
          return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
      }
      var length = aStack.length;
      while (length--) {
        if (aStack[length] == a) {
          return bStack[length] == b;
        }
      }
      aStack.push(a);
      bStack.push(b);
      var size = 0;
      if (className === "[object Array]") {
        size = a.length;
        if (size !== b.length) {
          return false;
        }
        while (size--) {
          if (!eq(a[size], b[size], aStack, bStack)) {
            return false;
          }
        }
      } else {
        if (a.constructor !== b.constructor) {
          return false;
        }
        if (a.hasOwnProperty("valueOf") && b.hasOwnProperty("valueOf")) {
          return a.valueOf() == b.valueOf();
        }
        var keys = Object.keys(a);
        if (keys.length != Object.keys(b).length) {
          return false;
        }
        for (var i = 0; i < keys.length; i++) {
          if (!eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
            return false;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return true;
    }
    module.exports = areEqual;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/deepFreeze.js
var require_deepFreeze = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/deepFreeze.js"(exports, module) {
    init_define_global();
    "use strict";
    function deepFreeze(object) {
      Object.freeze(object);
      Object.getOwnPropertyNames(object).forEach(function(name) {
        var property = object[name];
        if (property && typeof property === "object" && !Object.isFrozen(property)) {
          deepFreeze(property);
        }
      });
      return object;
    }
    module.exports = deepFreeze;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernRecord.js
var require_RelayModernRecord = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernRecord.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var areEqual = require_areEqual();
    var deepFreeze = require_deepFreeze();
    var invariant = require_browser();
    var warning = require_warning();
    var _require = require_ClientID();
    var isClientID = _require.isClientID;
    var _require2 = require_RelayStoreUtils();
    var ID_KEY = _require2.ID_KEY;
    var REF_KEY = _require2.REF_KEY;
    var REFS_KEY = _require2.REFS_KEY;
    var TYPENAME_KEY = _require2.TYPENAME_KEY;
    var INVALIDATED_AT_KEY = _require2.INVALIDATED_AT_KEY;
    var ROOT_ID = _require2.ROOT_ID;
    function clone(record) {
      return (0, _objectSpread2["default"])({}, record);
    }
    function copyFields(source, sink) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          if (key !== ID_KEY && key !== TYPENAME_KEY) {
            sink[key] = source[key];
          }
        }
      }
    }
    function create(dataID, typeName) {
      var record = {};
      record[ID_KEY] = dataID;
      record[TYPENAME_KEY] = typeName;
      return record;
    }
    function getDataID(record) {
      return record[ID_KEY];
    }
    function getType(record) {
      return record[TYPENAME_KEY];
    }
    function getValue(record, storageKey) {
      var value = record[storageKey];
      if (value && typeof value === "object") {
        !(!value.hasOwnProperty(REF_KEY) && !value.hasOwnProperty(REFS_KEY)) ? true ? invariant(false, "RelayModernRecord.getValue(): Expected a scalar (non-link) value for `%s.%s` but found %s.", record[ID_KEY], storageKey, value.hasOwnProperty(REF_KEY) ? "a linked record" : "plural linked records") : invariant(false) : void 0;
      }
      return value;
    }
    function getLinkedRecordID(record, storageKey) {
      var link = record[storageKey];
      if (link == null) {
        return link;
      }
      !(typeof link === "object" && link && typeof link[REF_KEY] === "string") ? true ? invariant(false, "RelayModernRecord.getLinkedRecordID(): Expected `%s.%s` to be a linked ID, was `%s`.", record[ID_KEY], storageKey, JSON.stringify(link)) : invariant(false) : void 0;
      return link[REF_KEY];
    }
    function getLinkedRecordIDs(record, storageKey) {
      var links = record[storageKey];
      if (links == null) {
        return links;
      }
      !(typeof links === "object" && Array.isArray(links[REFS_KEY])) ? true ? invariant(false, "RelayModernRecord.getLinkedRecordIDs(): Expected `%s.%s` to contain an array of linked IDs, got `%s`.", record[ID_KEY], storageKey, JSON.stringify(links)) : invariant(false) : void 0;
      return links[REFS_KEY];
    }
    function getInvalidationEpoch(record) {
      if (record == null) {
        return null;
      }
      var invalidatedAt = record[INVALIDATED_AT_KEY];
      if (typeof invalidatedAt !== "number") {
        return null;
      }
      return invalidatedAt;
    }
    function update(prevRecord, nextRecord) {
      if (true) {
        var _getType, _getType2;
        var prevID = getDataID(prevRecord);
        var nextID = getDataID(nextRecord);
        true ? warning(prevID === nextID, "RelayModernRecord: Invalid record update, expected both versions of the record to have the same id, got `%s` and `%s`.", prevID, nextID) : void 0;
        var prevType = (_getType = getType(prevRecord)) !== null && _getType !== void 0 ? _getType : null;
        var nextType = (_getType2 = getType(nextRecord)) !== null && _getType2 !== void 0 ? _getType2 : null;
        true ? warning(isClientID(nextID) && nextID !== ROOT_ID || prevType === nextType, "RelayModernRecord: Invalid record update, expected both versions of record `%s` to have the same `%s` but got conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", prevID, TYPENAME_KEY, prevType, nextType) : void 0;
      }
      var updated = null;
      var keys = Object.keys(nextRecord);
      for (var ii = 0; ii < keys.length; ii++) {
        var key = keys[ii];
        if (updated || !areEqual(prevRecord[key], nextRecord[key])) {
          updated = updated !== null ? updated : (0, _objectSpread2["default"])({}, prevRecord);
          updated[key] = nextRecord[key];
        }
      }
      return updated !== null ? updated : prevRecord;
    }
    function merge(record1, record2) {
      if (true) {
        var _getType3, _getType4;
        var prevID = getDataID(record1);
        var nextID = getDataID(record2);
        true ? warning(prevID === nextID, "RelayModernRecord: Invalid record merge, expected both versions of the record to have the same id, got `%s` and `%s`.", prevID, nextID) : void 0;
        var prevType = (_getType3 = getType(record1)) !== null && _getType3 !== void 0 ? _getType3 : null;
        var nextType = (_getType4 = getType(record2)) !== null && _getType4 !== void 0 ? _getType4 : null;
        true ? warning(isClientID(nextID) && nextID !== ROOT_ID || prevType === nextType, "RelayModernRecord: Invalid record merge, expected both versions of record `%s` to have the same `%s` but got conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", prevID, TYPENAME_KEY, prevType, nextType) : void 0;
      }
      return Object.assign({}, record1, record2);
    }
    function freeze(record) {
      deepFreeze(record);
    }
    function setValue(record, storageKey, value) {
      if (true) {
        var prevID = getDataID(record);
        if (storageKey === ID_KEY) {
          true ? warning(prevID === value, "RelayModernRecord: Invalid field update, expected both versions of the record to have the same id, got `%s` and `%s`.", prevID, value) : void 0;
        } else if (storageKey === TYPENAME_KEY) {
          var _getType5;
          var prevType = (_getType5 = getType(record)) !== null && _getType5 !== void 0 ? _getType5 : null;
          var nextType = value !== null && value !== void 0 ? value : null;
          true ? warning(isClientID(getDataID(record)) && getDataID(record) !== ROOT_ID || prevType === nextType, "RelayModernRecord: Invalid field update, expected both versions of record `%s` to have the same `%s` but got conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", prevID, TYPENAME_KEY, prevType, nextType) : void 0;
        }
      }
      record[storageKey] = value;
    }
    function setLinkedRecordID(record, storageKey, linkedID) {
      var link = {};
      link[REF_KEY] = linkedID;
      record[storageKey] = link;
    }
    function setLinkedRecordIDs(record, storageKey, linkedIDs) {
      var links = {};
      links[REFS_KEY] = linkedIDs;
      record[storageKey] = links;
    }
    module.exports = {
      clone,
      copyFields,
      create,
      freeze,
      getDataID,
      getInvalidationEpoch,
      getLinkedRecordID,
      getLinkedRecordIDs,
      getType,
      getValue,
      merge,
      setValue,
      setLinkedRecordID,
      setLinkedRecordIDs,
      update
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/isPromise.js
var require_isPromise = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/isPromise.js"(exports, module) {
    init_define_global();
    "use strict";
    function isPromise(p) {
      return !!p && typeof p.then === "function";
    }
    module.exports = isPromise;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/RelayObservable.js
var require_RelayObservable = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/RelayObservable.js"(exports, module) {
    init_define_global();
    "use strict";
    var isPromise = require_isPromise();
    var hostReportError = swallowError;
    var RelayObservable = function() {
      RelayObservable2.create = function create(source) {
        return new RelayObservable2(source);
      };
      function RelayObservable2(source) {
        if (true) {
          if (!source || typeof source !== "function") {
            throw new Error("Source must be a Function: " + String(source));
          }
        }
        this._source = source;
      }
      RelayObservable2.onUnhandledError = function onUnhandledError(callback) {
        hostReportError = callback;
      };
      RelayObservable2.from = function from(obj) {
        return isObservable(obj) ? fromObservable(obj) : isPromise(obj) ? fromPromise(obj) : fromValue(obj);
      };
      var _proto = RelayObservable2.prototype;
      _proto["catch"] = function _catch(fn) {
        var _this = this;
        return RelayObservable2.create(function(sink) {
          var subscription;
          _this.subscribe({
            start: function start(sub) {
              subscription = sub;
            },
            next: sink.next,
            complete: sink.complete,
            error: function error(_error2) {
              try {
                fn(_error2).subscribe({
                  start: function start(sub) {
                    subscription = sub;
                  },
                  next: sink.next,
                  complete: sink.complete,
                  error: sink.error
                });
              } catch (error2) {
                sink.error(error2, true);
              }
            }
          });
          return function() {
            return subscription.unsubscribe();
          };
        });
      };
      _proto.concat = function concat(next) {
        var _this2 = this;
        return RelayObservable2.create(function(sink) {
          var current;
          _this2.subscribe({
            start: function start(subscription) {
              current = subscription;
            },
            next: sink.next,
            error: sink.error,
            complete: function complete() {
              current = next.subscribe(sink);
            }
          });
          return function() {
            current && current.unsubscribe();
          };
        });
      };
      _proto["do"] = function _do(observer) {
        var _this3 = this;
        return RelayObservable2.create(function(sink) {
          var both = function both2(action) {
            return function() {
              try {
                observer[action] && observer[action].apply(observer, arguments);
              } catch (error) {
                hostReportError(error, true);
              }
              sink[action] && sink[action].apply(sink, arguments);
            };
          };
          return _this3.subscribe({
            start: both("start"),
            next: both("next"),
            error: both("error"),
            complete: both("complete"),
            unsubscribe: both("unsubscribe")
          });
        });
      };
      _proto["finally"] = function _finally(fn) {
        var _this4 = this;
        return RelayObservable2.create(function(sink) {
          var subscription = _this4.subscribe(sink);
          return function() {
            subscription.unsubscribe();
            fn();
          };
        });
      };
      _proto.ifEmpty = function ifEmpty(alternate) {
        var _this5 = this;
        return RelayObservable2.create(function(sink) {
          var hasValue = false;
          var current = _this5.subscribe({
            next: function next(value) {
              hasValue = true;
              sink.next(value);
            },
            error: sink.error,
            complete: function complete() {
              if (hasValue) {
                sink.complete();
              } else {
                current = alternate.subscribe(sink);
              }
            }
          });
          return function() {
            current.unsubscribe();
          };
        });
      };
      _proto.subscribe = function subscribe(observer) {
        if (true) {
          if (!observer || typeof observer !== "object") {
            throw new Error("Observer must be an Object with callbacks: " + String(observer));
          }
        }
        return _subscribe(this._source, observer);
      };
      _proto.map = function map(fn) {
        var _this6 = this;
        return RelayObservable2.create(function(sink) {
          var subscription = _this6.subscribe({
            complete: sink.complete,
            error: sink.error,
            next: function next(value) {
              try {
                var mapValue = fn(value);
                sink.next(mapValue);
              } catch (error) {
                sink.error(error, true);
              }
            }
          });
          return function() {
            subscription.unsubscribe();
          };
        });
      };
      _proto.mergeMap = function mergeMap(fn) {
        var _this7 = this;
        return RelayObservable2.create(function(sink) {
          var subscriptions = [];
          function start(subscription) {
            this._sub = subscription;
            subscriptions.push(subscription);
          }
          function complete() {
            subscriptions.splice(subscriptions.indexOf(this._sub), 1);
            if (subscriptions.length === 0) {
              sink.complete();
            }
          }
          _this7.subscribe({
            start,
            next: function next(value) {
              try {
                if (!sink.closed) {
                  RelayObservable2.from(fn(value)).subscribe({
                    start,
                    next: sink.next,
                    error: sink.error,
                    complete
                  });
                }
              } catch (error) {
                sink.error(error, true);
              }
            },
            error: sink.error,
            complete
          });
          return function() {
            subscriptions.forEach(function(sub) {
              return sub.unsubscribe();
            });
            subscriptions.length = 0;
          };
        });
      };
      _proto.poll = function poll(pollInterval) {
        var _this8 = this;
        if (true) {
          if (typeof pollInterval !== "number" || pollInterval <= 0) {
            throw new Error("RelayObservable: Expected pollInterval to be positive, got: " + pollInterval);
          }
        }
        return RelayObservable2.create(function(sink) {
          var subscription;
          var timeout;
          var poll2 = function poll3() {
            subscription = _this8.subscribe({
              next: sink.next,
              error: sink.error,
              complete: function complete() {
                timeout = setTimeout(poll3, pollInterval);
              }
            });
          };
          poll2();
          return function() {
            clearTimeout(timeout);
            subscription.unsubscribe();
          };
        });
      };
      _proto.toPromise = function toPromise() {
        var _this9 = this;
        return new Promise(function(resolve, reject) {
          var resolved = false;
          _this9.subscribe({
            next: function next(val) {
              if (!resolved) {
                resolved = true;
                resolve(val);
              }
            },
            error: reject,
            complete: resolve
          });
        });
      };
      return RelayObservable2;
    }();
    function isObservable(obj) {
      return typeof obj === "object" && obj !== null && typeof obj.subscribe === "function";
    }
    function fromObservable(obj) {
      return obj instanceof RelayObservable ? obj : RelayObservable.create(function(sink) {
        return obj.subscribe(sink);
      });
    }
    function fromPromise(promise) {
      return RelayObservable.create(function(sink) {
        promise.then(function(value) {
          sink.next(value);
          sink.complete();
        }, sink.error);
      });
    }
    function fromValue(value) {
      return RelayObservable.create(function(sink) {
        sink.next(value);
        sink.complete();
      });
    }
    function _subscribe(source, observer) {
      var closed = false;
      var cleanup;
      var withClosed = function withClosed2(obj) {
        return Object.defineProperty(obj, "closed", {
          get: function get() {
            return closed;
          }
        });
      };
      function doCleanup() {
        if (cleanup) {
          if (cleanup.unsubscribe) {
            cleanup.unsubscribe();
          } else {
            try {
              cleanup();
            } catch (error) {
              hostReportError(error, true);
            }
          }
          cleanup = void 0;
        }
      }
      var subscription = withClosed({
        unsubscribe: function unsubscribe() {
          if (!closed) {
            closed = true;
            try {
              observer.unsubscribe && observer.unsubscribe(subscription);
            } catch (error) {
              hostReportError(error, true);
            } finally {
              doCleanup();
            }
          }
        }
      });
      try {
        observer.start && observer.start(subscription);
      } catch (error) {
        hostReportError(error, true);
      }
      if (closed) {
        return subscription;
      }
      var sink = withClosed({
        next: function next(value) {
          if (!closed && observer.next) {
            try {
              observer.next(value);
            } catch (error) {
              hostReportError(error, true);
            }
          }
        },
        error: function error(_error3, isUncaughtThrownError) {
          if (closed || !observer.error) {
            closed = true;
            hostReportError(_error3, isUncaughtThrownError || false);
            doCleanup();
          } else {
            closed = true;
            try {
              observer.error(_error3);
            } catch (error2) {
              hostReportError(error2, true);
            } finally {
              doCleanup();
            }
          }
        },
        complete: function complete() {
          if (!closed) {
            closed = true;
            try {
              observer.complete && observer.complete();
            } catch (error) {
              hostReportError(error, true);
            } finally {
              doCleanup();
            }
          }
        }
      });
      try {
        cleanup = source(sink);
      } catch (error) {
        sink.error(error, true);
      }
      if (true) {
        if (cleanup !== void 0 && typeof cleanup !== "function" && (!cleanup || typeof cleanup.unsubscribe !== "function")) {
          throw new Error("Returned cleanup function which cannot be called: " + String(cleanup));
        }
      }
      if (closed) {
        doCleanup();
      }
      return subscription;
    }
    function swallowError(_error, _isUncaughtThrownError) {
    }
    if (true) {
      RelayObservable.onUnhandledError(function(error, isUncaughtThrownError) {
        if (typeof fail === "function") {
          fail(String(error));
        } else if (isUncaughtThrownError) {
          setTimeout(function() {
            throw error;
          });
        } else if (typeof console !== "undefined") {
          console.error("RelayObservable: Unhandled Error", error);
        }
      });
    }
    module.exports = RelayObservable;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayRecordState.js
var require_RelayRecordState = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayRecordState.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayRecordState = {
      EXISTENT: "EXISTENT",
      NONEXISTENT: "NONEXISTENT",
      UNKNOWN: "UNKNOWN"
    };
    module.exports = RelayRecordState;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayRecordSourceMapImpl.js
var require_RelayRecordSourceMapImpl = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayRecordSourceMapImpl.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var RelayRecordState = require_RelayRecordState();
    var EXISTENT = RelayRecordState.EXISTENT;
    var NONEXISTENT = RelayRecordState.NONEXISTENT;
    var UNKNOWN = RelayRecordState.UNKNOWN;
    var RelayMapRecordSourceMapImpl = function() {
      function RelayMapRecordSourceMapImpl2(records) {
        var _this = this;
        this._records = new Map();
        if (records != null) {
          Object.keys(records).forEach(function(key) {
            _this._records.set(key, records[key]);
          });
        }
      }
      var _proto = RelayMapRecordSourceMapImpl2.prototype;
      _proto.clear = function clear() {
        this._records = new Map();
      };
      _proto["delete"] = function _delete(dataID) {
        this._records.set(dataID, null);
      };
      _proto.get = function get(dataID) {
        return this._records.get(dataID);
      };
      _proto.getRecordIDs = function getRecordIDs() {
        return Array.from(this._records.keys());
      };
      _proto.getStatus = function getStatus(dataID) {
        if (!this._records.has(dataID)) {
          return UNKNOWN;
        }
        return this._records.get(dataID) == null ? NONEXISTENT : EXISTENT;
      };
      _proto.has = function has(dataID) {
        return this._records.has(dataID);
      };
      _proto.remove = function remove(dataID) {
        this._records["delete"](dataID);
      };
      _proto.set = function set(dataID, record) {
        this._records.set(dataID, record);
      };
      _proto.size = function size() {
        return this._records.size;
      };
      _proto.toJSON = function toJSON() {
        var obj = {};
        var _iterator = (0, _createForOfIteratorHelper2["default"])(this._records), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
            obj[key] = value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return obj;
      };
      return RelayMapRecordSourceMapImpl2;
    }();
    module.exports = RelayMapRecordSourceMapImpl;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayRecordSource.js
var require_RelayRecordSource = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayRecordSource.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayRecordSourceMapImpl = require_RelayRecordSourceMapImpl();
    var RelayRecordSource = function() {
      function RelayRecordSource2(records) {
        return RelayRecordSource2.create(records);
      }
      RelayRecordSource2.create = function create(records) {
        return new RelayRecordSourceMapImpl(records);
      };
      return RelayRecordSource2;
    }();
    module.exports = RelayRecordSource;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernSelector.js
var require_RelayModernSelector = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernSelector.js"(exports, module) {
    init_define_global();
    "use strict";
    var areEqual = require_areEqual();
    var invariant = require_browser();
    var warning = require_warning();
    var _require = require_RelayConcreteVariables();
    var getFragmentVariables = _require.getFragmentVariables;
    var _require2 = require_RelayStoreUtils();
    var FRAGMENT_OWNER_KEY = _require2.FRAGMENT_OWNER_KEY;
    var FRAGMENTS_KEY = _require2.FRAGMENTS_KEY;
    var ID_KEY = _require2.ID_KEY;
    var IS_WITHIN_UNMATCHED_TYPE_REFINEMENT = _require2.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT;
    function getSingularSelector(fragment, item) {
      !(typeof item === "object" && item !== null && !Array.isArray(item)) ? true ? invariant(false, "RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`.", fragment.name, JSON.stringify(item)) : invariant(false) : void 0;
      var dataID = item[ID_KEY];
      var fragments = item[FRAGMENTS_KEY];
      var mixedOwner = item[FRAGMENT_OWNER_KEY];
      var isWithinUnmatchedTypeRefinement = item[IS_WITHIN_UNMATCHED_TYPE_REFINEMENT] === true;
      if (typeof dataID === "string" && typeof fragments === "object" && fragments !== null && typeof fragments[fragment.name] === "object" && fragments[fragment.name] !== null && typeof mixedOwner === "object" && mixedOwner !== null) {
        var owner = mixedOwner;
        var argumentVariables = fragments[fragment.name];
        var fragmentVariables = getFragmentVariables(fragment, owner.variables, argumentVariables);
        return createReaderSelector(fragment, dataID, fragmentVariables, owner, isWithinUnmatchedTypeRefinement);
      }
      if (true) {
        var stringifiedItem = JSON.stringify(item);
        if (stringifiedItem.length > 499) {
          stringifiedItem = stringifiedItem.substr(0, 498) + "\u2026";
        }
        true ? warning(false, "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`.", fragment.name, stringifiedItem, fragment.name) : void 0;
      }
      return null;
    }
    function getPluralSelector(fragment, items) {
      var selectors = null;
      items.forEach(function(item, ii) {
        var selector = item != null ? getSingularSelector(fragment, item) : null;
        if (selector != null) {
          selectors = selectors || [];
          selectors.push(selector);
        }
      });
      if (selectors == null) {
        return null;
      } else {
        return {
          kind: "PluralReaderSelector",
          selectors
        };
      }
    }
    function getSelector(fragment, item) {
      if (item == null) {
        return item;
      } else if (fragment.metadata && fragment.metadata.plural === true) {
        !Array.isArray(item) ? true ? invariant(false, "RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.", fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
        return getPluralSelector(fragment, item);
      } else {
        !!Array.isArray(item) ? true ? invariant(false, "RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`. Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.", fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
        return getSingularSelector(fragment, item);
      }
    }
    function getSelectorsFromObject(fragments, object) {
      var selectors = {};
      for (var _key in fragments) {
        if (fragments.hasOwnProperty(_key)) {
          var fragment = fragments[_key];
          var item = object[_key];
          selectors[_key] = getSelector(fragment, item);
        }
      }
      return selectors;
    }
    function getDataIDsFromObject(fragments, object) {
      var ids = {};
      for (var _key2 in fragments) {
        if (fragments.hasOwnProperty(_key2)) {
          var fragment = fragments[_key2];
          var item = object[_key2];
          ids[_key2] = getDataIDsFromFragment(fragment, item);
        }
      }
      return ids;
    }
    function getDataIDsFromFragment(fragment, item) {
      if (item == null) {
        return item;
      } else if (fragment.metadata && fragment.metadata.plural === true) {
        !Array.isArray(item) ? true ? invariant(false, "RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.", fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
        return getDataIDs(fragment, item);
      } else {
        !!Array.isArray(item) ? true ? invariant(false, "RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.", fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
        return getDataID(fragment, item);
      }
    }
    function getDataIDs(fragment, items) {
      var ids = null;
      items.forEach(function(item) {
        var id = item != null ? getDataID(fragment, item) : null;
        if (id != null) {
          ids = ids || [];
          ids.push(id);
        }
      });
      return ids;
    }
    function getDataID(fragment, item) {
      !(typeof item === "object" && item !== null && !Array.isArray(item)) ? true ? invariant(false, "RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`.", fragment.name, JSON.stringify(item)) : invariant(false) : void 0;
      var dataID = item[ID_KEY];
      if (typeof dataID === "string") {
        return dataID;
      }
      true ? warning(false, "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`, or `null` is passed as the fragment reference for `%s` if it's conditonally included and the condition isn't met.", fragment.name, JSON.stringify(item), fragment.name, fragment.name) : void 0;
      return null;
    }
    function getVariablesFromObject(fragments, object) {
      var variables = {};
      for (var _key3 in fragments) {
        if (fragments.hasOwnProperty(_key3)) {
          var fragment = fragments[_key3];
          var item = object[_key3];
          var itemVariables = getVariablesFromFragment(fragment, item);
          Object.assign(variables, itemVariables);
        }
      }
      return variables;
    }
    function getVariablesFromFragment(fragment, item) {
      var _fragment$metadata;
      if (item == null) {
        return {};
      } else if (((_fragment$metadata = fragment.metadata) === null || _fragment$metadata === void 0 ? void 0 : _fragment$metadata.plural) === true) {
        !Array.isArray(item) ? true ? invariant(false, "RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.", fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
        return getVariablesFromPluralFragment(fragment, item);
      } else {
        !!Array.isArray(item) ? true ? invariant(false, "RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.", fragment.name, JSON.stringify(item), fragment.name) : invariant(false) : void 0;
        return getVariablesFromSingularFragment(fragment, item) || {};
      }
    }
    function getVariablesFromSingularFragment(fragment, item) {
      var selector = getSingularSelector(fragment, item);
      if (!selector) {
        return null;
      }
      return selector.variables;
    }
    function getVariablesFromPluralFragment(fragment, items) {
      var variables = {};
      items.forEach(function(value, ii) {
        if (value != null) {
          var itemVariables = getVariablesFromSingularFragment(fragment, value);
          if (itemVariables != null) {
            Object.assign(variables, itemVariables);
          }
        }
      });
      return variables;
    }
    function areEqualSelectors(thisSelector, thatSelector) {
      return thisSelector.owner === thatSelector.owner && thisSelector.dataID === thatSelector.dataID && thisSelector.node === thatSelector.node && areEqual(thisSelector.variables, thatSelector.variables);
    }
    function createReaderSelector(fragment, dataID, variables, request) {
      var isWithinUnmatchedTypeRefinement = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      return {
        kind: "SingularReaderSelector",
        dataID,
        isWithinUnmatchedTypeRefinement,
        node: fragment,
        variables,
        owner: request
      };
    }
    function createNormalizationSelector(node, dataID, variables) {
      return {
        dataID,
        node,
        variables
      };
    }
    module.exports = {
      areEqualSelectors,
      createReaderSelector,
      createNormalizationSelector,
      getDataIDsFromFragment,
      getDataIDsFromObject,
      getSingularSelector,
      getPluralSelector,
      getSelector,
      getSelectorsFromObject,
      getVariablesFromSingularFragment,
      getVariablesFromPluralFragment,
      getVariablesFromFragment,
      getVariablesFromObject
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreReactFlightUtils.js
var require_RelayStoreReactFlightUtils = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreReactFlightUtils.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var _require = require_RelayModernRecord();
    var getType = _require.getType;
    var REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY = "executableDefinitions";
    var REACT_FLIGHT_TREE_STORAGE_KEY = "tree";
    var REACT_FLIGHT_TYPE_NAME = "ReactFlightComponent";
    function refineToReactFlightPayloadData(payload) {
      if (payload == null || typeof payload !== "object" || typeof payload.status !== "string" || !Array.isArray(payload.tree) && payload.tree !== null || !Array.isArray(payload.queries) || !Array.isArray(payload.fragments) || !Array.isArray(payload.errors)) {
        return null;
      }
      return payload;
    }
    function getReactFlightClientResponse(record) {
      !(getType(record) === REACT_FLIGHT_TYPE_NAME) ? true ? invariant(false, "getReactFlightClientResponse(): Expected a ReactFlightComponentRecord, got %s.", record) : invariant(false) : void 0;
      var response = record[REACT_FLIGHT_TREE_STORAGE_KEY];
      if (response != null) {
        return response;
      }
      return null;
    }
    module.exports = {
      REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
      REACT_FLIGHT_TREE_STORAGE_KEY,
      REACT_FLIGHT_TYPE_NAME,
      getReactFlightClientResponse,
      refineToReactFlightPayloadData
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/TypeID.js
var require_TypeID = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/TypeID.js"(exports, module) {
    init_define_global();
    "use strict";
    var PREFIX = "client:__type:";
    var TYPE_SCHEMA_TYPE = "__TypeSchema";
    function generateTypeID(typeName) {
      return PREFIX + typeName;
    }
    function isTypeID(id) {
      return id.indexOf(PREFIX) === 0;
    }
    module.exports = {
      generateTypeID,
      isTypeID,
      TYPE_SCHEMA_TYPE
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayResponseNormalizer.js
var require_RelayResponseNormalizer = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayResponseNormalizer.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayModernRecord = require_RelayModernRecord();
    var areEqual = require_areEqual();
    var invariant = require_browser();
    var warning = require_warning();
    var _require = require_RelayConcreteNode();
    var CONDITION = _require.CONDITION;
    var CLIENT_COMPONENT = _require.CLIENT_COMPONENT;
    var CLIENT_EXTENSION = _require.CLIENT_EXTENSION;
    var DEFER = _require.DEFER;
    var FLIGHT_FIELD = _require.FLIGHT_FIELD;
    var FRAGMENT_SPREAD = _require.FRAGMENT_SPREAD;
    var INLINE_FRAGMENT = _require.INLINE_FRAGMENT;
    var LINKED_FIELD = _require.LINKED_FIELD;
    var LINKED_HANDLE = _require.LINKED_HANDLE;
    var MODULE_IMPORT = _require.MODULE_IMPORT;
    var SCALAR_FIELD = _require.SCALAR_FIELD;
    var SCALAR_HANDLE = _require.SCALAR_HANDLE;
    var STREAM = _require.STREAM;
    var TYPE_DISCRIMINATOR = _require.TYPE_DISCRIMINATOR;
    var _require2 = require_ClientID();
    var generateClientID = _require2.generateClientID;
    var isClientID = _require2.isClientID;
    var _require3 = require_RelayModernSelector();
    var createNormalizationSelector = _require3.createNormalizationSelector;
    var _require4 = require_RelayStoreReactFlightUtils();
    var refineToReactFlightPayloadData = _require4.refineToReactFlightPayloadData;
    var REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY = _require4.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY;
    var REACT_FLIGHT_TREE_STORAGE_KEY = _require4.REACT_FLIGHT_TREE_STORAGE_KEY;
    var REACT_FLIGHT_TYPE_NAME = _require4.REACT_FLIGHT_TYPE_NAME;
    var _require5 = require_RelayStoreUtils();
    var getArgumentValues = _require5.getArgumentValues;
    var getHandleStorageKey = _require5.getHandleStorageKey;
    var getModuleComponentKey = _require5.getModuleComponentKey;
    var getModuleOperationKey = _require5.getModuleOperationKey;
    var getStorageKey = _require5.getStorageKey;
    var TYPENAME_KEY = _require5.TYPENAME_KEY;
    var ROOT_ID = _require5.ROOT_ID;
    var ROOT_TYPE = _require5.ROOT_TYPE;
    var _require6 = require_TypeID();
    var generateTypeID = _require6.generateTypeID;
    var TYPE_SCHEMA_TYPE = _require6.TYPE_SCHEMA_TYPE;
    function normalize(recordSource, selector, response, options) {
      var dataID = selector.dataID, node = selector.node, variables = selector.variables;
      var normalizer = new RelayResponseNormalizer(recordSource, variables, options);
      return normalizer.normalizeResponse(node, dataID, response);
    }
    var RelayResponseNormalizer = function() {
      function RelayResponseNormalizer2(recordSource, variables, options) {
        this._getDataId = options.getDataID;
        this._handleFieldPayloads = [];
        this._treatMissingFieldsAsNull = options.treatMissingFieldsAsNull;
        this._incrementalPlaceholders = [];
        this._isClientExtension = false;
        this._isUnmatchedAbstractType = false;
        this._moduleImportPayloads = [];
        this._path = options.path ? (0, _toConsumableArray2["default"])(options.path) : [];
        this._recordSource = recordSource;
        this._variables = variables;
        this._reactFlightPayloadDeserializer = options.reactFlightPayloadDeserializer;
        this._reactFlightServerErrorHandler = options.reactFlightServerErrorHandler;
        this._shouldProcessClientComponents = options.shouldProcessClientComponents;
      }
      var _proto = RelayResponseNormalizer2.prototype;
      _proto.normalizeResponse = function normalizeResponse(node, dataID, data) {
        var record = this._recordSource.get(dataID);
        !record ? true ? invariant(false, "RelayResponseNormalizer(): Expected root record `%s` to exist.", dataID) : invariant(false) : void 0;
        this._traverseSelections(node, record, data);
        return {
          errors: null,
          fieldPayloads: this._handleFieldPayloads,
          incrementalPlaceholders: this._incrementalPlaceholders,
          moduleImportPayloads: this._moduleImportPayloads,
          source: this._recordSource,
          isFinal: false
        };
      };
      _proto._getVariableValue = function _getVariableValue(name) {
        !this._variables.hasOwnProperty(name) ? true ? invariant(false, "RelayResponseNormalizer(): Undefined variable `%s`.", name) : invariant(false) : void 0;
        return this._variables[name];
      };
      _proto._getRecordType = function _getRecordType(data) {
        var typeName = data[TYPENAME_KEY];
        !(typeName != null) ? true ? invariant(false, "RelayResponseNormalizer(): Expected a typename for record `%s`.", JSON.stringify(data, null, 2)) : invariant(false) : void 0;
        return typeName;
      };
      _proto._traverseSelections = function _traverseSelections(node, record, data) {
        for (var i = 0; i < node.selections.length; i++) {
          var selection = node.selections[i];
          switch (selection.kind) {
            case SCALAR_FIELD:
            case LINKED_FIELD:
              this._normalizeField(node, selection, record, data);
              break;
            case CONDITION:
              var conditionValue = this._getVariableValue(selection.condition);
              if (conditionValue === selection.passingValue) {
                this._traverseSelections(selection, record, data);
              }
              break;
            case FRAGMENT_SPREAD: {
              this._traverseSelections(selection.fragment, record, data);
              break;
            }
            case INLINE_FRAGMENT: {
              var abstractKey = selection.abstractKey;
              if (abstractKey == null) {
                var _typeName = RelayModernRecord.getType(record);
                if (_typeName === selection.type) {
                  this._traverseSelections(selection, record, data);
                }
              } else if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
                var implementsInterface = data.hasOwnProperty(abstractKey);
                var _typeName2 = RelayModernRecord.getType(record);
                var typeID = generateTypeID(_typeName2);
                var typeRecord = this._recordSource.get(typeID);
                if (typeRecord == null) {
                  typeRecord = RelayModernRecord.create(typeID, TYPE_SCHEMA_TYPE);
                  this._recordSource.set(typeID, typeRecord);
                }
                RelayModernRecord.setValue(typeRecord, abstractKey, implementsInterface);
                if (implementsInterface) {
                  this._traverseSelections(selection, record, data);
                }
              } else {
                var _implementsInterface = data.hasOwnProperty(abstractKey);
                var parentIsUnmatchedAbstractType = this._isUnmatchedAbstractType;
                this._isUnmatchedAbstractType = this._isUnmatchedAbstractType || !_implementsInterface;
                this._traverseSelections(selection, record, data);
                this._isUnmatchedAbstractType = parentIsUnmatchedAbstractType;
              }
              break;
            }
            case TYPE_DISCRIMINATOR: {
              if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
                var _abstractKey = selection.abstractKey;
                var _implementsInterface2 = data.hasOwnProperty(_abstractKey);
                var _typeName3 = RelayModernRecord.getType(record);
                var _typeID = generateTypeID(_typeName3);
                var _typeRecord = this._recordSource.get(_typeID);
                if (_typeRecord == null) {
                  _typeRecord = RelayModernRecord.create(_typeID, TYPE_SCHEMA_TYPE);
                  this._recordSource.set(_typeID, _typeRecord);
                }
                RelayModernRecord.setValue(_typeRecord, _abstractKey, _implementsInterface2);
              }
              break;
            }
            case LINKED_HANDLE:
            case SCALAR_HANDLE:
              var args = selection.args ? getArgumentValues(selection.args, this._variables) : {};
              var fieldKey = getStorageKey(selection, this._variables);
              var handleKey = getHandleStorageKey(selection, this._variables);
              this._handleFieldPayloads.push({
                args,
                dataID: RelayModernRecord.getDataID(record),
                fieldKey,
                handle: selection.handle,
                handleKey,
                handleArgs: selection.handleArgs ? getArgumentValues(selection.handleArgs, this._variables) : {}
              });
              break;
            case MODULE_IMPORT:
              this._normalizeModuleImport(node, selection, record, data);
              break;
            case DEFER:
              this._normalizeDefer(selection, record, data);
              break;
            case STREAM:
              this._normalizeStream(selection, record, data);
              break;
            case CLIENT_EXTENSION:
              var isClientExtension = this._isClientExtension;
              this._isClientExtension = true;
              this._traverseSelections(selection, record, data);
              this._isClientExtension = isClientExtension;
              break;
            case CLIENT_COMPONENT:
              if (this._shouldProcessClientComponents === false) {
                break;
              }
              this._traverseSelections(selection.fragment, record, data);
              break;
            case FLIGHT_FIELD:
              if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
                this._normalizeFlightField(node, selection, record, data);
              } else {
                throw new Error("Flight fields are not yet supported.");
              }
              break;
            default:
              selection;
              true ? true ? invariant(false, "RelayResponseNormalizer(): Unexpected ast kind `%s`.", selection.kind) : invariant(false) : void 0;
          }
        }
      };
      _proto._normalizeDefer = function _normalizeDefer(defer, record, data) {
        var isDeferred = defer["if"] === null || this._getVariableValue(defer["if"]);
        if (true) {
          true ? warning(typeof isDeferred === "boolean", "RelayResponseNormalizer: Expected value for @defer `if` argument to be a boolean, got `%s`.", isDeferred) : void 0;
        }
        if (isDeferred === false) {
          this._traverseSelections(defer, record, data);
        } else {
          this._incrementalPlaceholders.push({
            kind: "defer",
            data,
            label: defer.label,
            path: (0, _toConsumableArray2["default"])(this._path),
            selector: createNormalizationSelector(defer, RelayModernRecord.getDataID(record), this._variables),
            typeName: RelayModernRecord.getType(record)
          });
        }
      };
      _proto._normalizeStream = function _normalizeStream(stream, record, data) {
        this._traverseSelections(stream, record, data);
        var isStreamed = stream["if"] === null || this._getVariableValue(stream["if"]);
        if (true) {
          true ? warning(typeof isStreamed === "boolean", "RelayResponseNormalizer: Expected value for @stream `if` argument to be a boolean, got `%s`.", isStreamed) : void 0;
        }
        if (isStreamed === true) {
          this._incrementalPlaceholders.push({
            kind: "stream",
            label: stream.label,
            path: (0, _toConsumableArray2["default"])(this._path),
            parentID: RelayModernRecord.getDataID(record),
            node: stream,
            variables: this._variables
          });
        }
      };
      _proto._normalizeModuleImport = function _normalizeModuleImport(parent, moduleImport, record, data) {
        !(typeof data === "object" && data) ? true ? invariant(false, "RelayResponseNormalizer: Expected data for @module to be an object.") : invariant(false) : void 0;
        var typeName = RelayModernRecord.getType(record);
        var componentKey = getModuleComponentKey(moduleImport.documentName);
        var componentReference = data[componentKey];
        RelayModernRecord.setValue(record, componentKey, componentReference !== null && componentReference !== void 0 ? componentReference : null);
        var operationKey = getModuleOperationKey(moduleImport.documentName);
        var operationReference = data[operationKey];
        RelayModernRecord.setValue(record, operationKey, operationReference !== null && operationReference !== void 0 ? operationReference : null);
        if (operationReference != null) {
          this._moduleImportPayloads.push({
            data,
            dataID: RelayModernRecord.getDataID(record),
            operationReference,
            path: (0, _toConsumableArray2["default"])(this._path),
            typeName,
            variables: this._variables
          });
        }
      };
      _proto._normalizeField = function _normalizeField(parent, selection, record, data) {
        !(typeof data === "object" && data) ? true ? invariant(false, "writeField(): Expected data for field `%s` to be an object.", selection.name) : invariant(false) : void 0;
        var responseKey = selection.alias || selection.name;
        var storageKey = getStorageKey(selection, this._variables);
        var fieldValue = data[responseKey];
        if (fieldValue == null) {
          if (fieldValue === void 0) {
            var isOptionalField = this._isClientExtension || this._isUnmatchedAbstractType;
            if (isOptionalField) {
              return;
            } else if (!this._treatMissingFieldsAsNull) {
              if (true) {
                true ? warning(false, "RelayResponseNormalizer: Payload did not contain a value for field `%s: %s`. Check that you are parsing with the same query that was used to fetch the payload.", responseKey, storageKey) : void 0;
              }
              return;
            }
          }
          if (true) {
            if (selection.kind === SCALAR_FIELD) {
              this._validateConflictingFieldsWithIdenticalId(record, storageKey, fieldValue);
            }
          }
          RelayModernRecord.setValue(record, storageKey, null);
          return;
        }
        if (selection.kind === SCALAR_FIELD) {
          if (true) {
            this._validateConflictingFieldsWithIdenticalId(record, storageKey, fieldValue);
          }
          RelayModernRecord.setValue(record, storageKey, fieldValue);
        } else if (selection.kind === LINKED_FIELD) {
          this._path.push(responseKey);
          if (selection.plural) {
            this._normalizePluralLink(selection, record, storageKey, fieldValue);
          } else {
            this._normalizeLink(selection, record, storageKey, fieldValue);
          }
          this._path.pop();
        } else {
          selection;
          true ? true ? invariant(false, "RelayResponseNormalizer(): Unexpected ast kind `%s` during normalization.", selection.kind) : invariant(false) : void 0;
        }
      };
      _proto._normalizeFlightField = function _normalizeFlightField(parent, selection, record, data) {
        var responseKey = selection.alias || selection.name;
        var storageKey = getStorageKey(selection, this._variables);
        var fieldValue = data[responseKey];
        if (fieldValue == null) {
          if (fieldValue === void 0) {
            if (this._isUnmatchedAbstractType) {
              return;
            } else if (!this._treatMissingFieldsAsNull) {
              if (true) {
                true ? warning(false, "RelayResponseNormalizer: Payload did not contain a value for field `%s: %s`. Check that you are parsing with the same query that was used to fetch the payload.", responseKey, storageKey) : void 0;
              }
              return;
            }
          }
          RelayModernRecord.setValue(record, storageKey, null);
          return;
        }
        var reactFlightPayload = refineToReactFlightPayloadData(fieldValue);
        var reactFlightPayloadDeserializer = this._reactFlightPayloadDeserializer;
        !(reactFlightPayload != null) ? true ? invariant(false, "RelayResponseNormalizer: Expected React Flight payload data to be an object with `status`, tree`, `queries` and `errors` properties, got `%s`.", fieldValue) : invariant(false) : void 0;
        !(typeof reactFlightPayloadDeserializer === "function") ? true ? invariant(false, "RelayResponseNormalizer: Expected reactFlightPayloadDeserializer to be a function, got `%s`.", reactFlightPayloadDeserializer) : invariant(false) : void 0;
        if (reactFlightPayload.errors.length > 0) {
          if (typeof this._reactFlightServerErrorHandler === "function") {
            this._reactFlightServerErrorHandler(reactFlightPayload.status, reactFlightPayload.errors);
          } else {
            true ? warning(false, "RelayResponseNormalizer: Received server errors for field `%s`.\n\n%s\n%s", responseKey, reactFlightPayload.errors[0].message, reactFlightPayload.errors[0].stack) : void 0;
          }
        }
        var reactFlightID = generateClientID(RelayModernRecord.getDataID(record), getStorageKey(selection, this._variables));
        var reactFlightClientResponseRecord = this._recordSource.get(reactFlightID);
        if (reactFlightClientResponseRecord == null) {
          reactFlightClientResponseRecord = RelayModernRecord.create(reactFlightID, REACT_FLIGHT_TYPE_NAME);
          this._recordSource.set(reactFlightID, reactFlightClientResponseRecord);
        }
        if (reactFlightPayload.tree == null) {
          true ? warning(false, "RelayResponseNormalizer: Expected `tree` not to be null. This typically indicates that a fatal server error prevented any Server Component rows from being written.") : void 0;
          RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_TREE_STORAGE_KEY, null);
          RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY, []);
          RelayModernRecord.setLinkedRecordID(record, storageKey, reactFlightID);
          return;
        }
        var reactFlightClientResponse = reactFlightPayloadDeserializer(reactFlightPayload.tree);
        RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_TREE_STORAGE_KEY, reactFlightClientResponse);
        var reachableExecutableDefinitions = [];
        var _iterator = (0, _createForOfIteratorHelper2["default"])(reactFlightPayload.queries), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var query = _step.value;
            if (query.response.data != null) {
              this._moduleImportPayloads.push({
                data: query.response.data,
                dataID: ROOT_ID,
                operationReference: query.module,
                path: [],
                typeName: ROOT_TYPE,
                variables: query.variables
              });
            }
            reachableExecutableDefinitions.push({
              module: query.module,
              variables: query.variables
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(reactFlightPayload.fragments), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var fragment = _step2.value;
            if (fragment.response.data != null) {
              this._moduleImportPayloads.push({
                data: fragment.response.data,
                dataID: fragment.__id,
                operationReference: fragment.module,
                path: [],
                typeName: fragment.__typename,
                variables: fragment.variables
              });
            }
            reachableExecutableDefinitions.push({
              module: fragment.module,
              variables: fragment.variables
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        RelayModernRecord.setValue(reactFlightClientResponseRecord, REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY, reachableExecutableDefinitions);
        RelayModernRecord.setLinkedRecordID(record, storageKey, reactFlightID);
      };
      _proto._normalizeLink = function _normalizeLink(field, record, storageKey, fieldValue) {
        var _field$concreteType;
        !(typeof fieldValue === "object" && fieldValue) ? true ? invariant(false, "RelayResponseNormalizer: Expected data for field `%s` to be an object.", storageKey) : invariant(false) : void 0;
        var nextID = this._getDataId(fieldValue, (_field$concreteType = field.concreteType) !== null && _field$concreteType !== void 0 ? _field$concreteType : this._getRecordType(fieldValue)) || RelayModernRecord.getLinkedRecordID(record, storageKey) || generateClientID(RelayModernRecord.getDataID(record), storageKey);
        !(typeof nextID === "string") ? true ? invariant(false, "RelayResponseNormalizer: Expected id on field `%s` to be a string.", storageKey) : invariant(false) : void 0;
        if (true) {
          this._validateConflictingLinkedFieldsWithIdenticalId(record, RelayModernRecord.getLinkedRecordID(record, storageKey), nextID, storageKey);
        }
        RelayModernRecord.setLinkedRecordID(record, storageKey, nextID);
        var nextRecord = this._recordSource.get(nextID);
        if (!nextRecord) {
          var _typeName4 = field.concreteType || this._getRecordType(fieldValue);
          nextRecord = RelayModernRecord.create(nextID, _typeName4);
          this._recordSource.set(nextID, nextRecord);
        } else if (true) {
          this._validateRecordType(nextRecord, field, fieldValue);
        }
        this._traverseSelections(field, nextRecord, fieldValue);
      };
      _proto._normalizePluralLink = function _normalizePluralLink(field, record, storageKey, fieldValue) {
        var _this = this;
        !Array.isArray(fieldValue) ? true ? invariant(false, "RelayResponseNormalizer: Expected data for field `%s` to be an array of objects.", storageKey) : invariant(false) : void 0;
        var prevIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);
        var nextIDs = [];
        fieldValue.forEach(function(item, nextIndex) {
          var _field$concreteType2;
          if (item == null) {
            nextIDs.push(item);
            return;
          }
          _this._path.push(String(nextIndex));
          !(typeof item === "object") ? true ? invariant(false, "RelayResponseNormalizer: Expected elements for field `%s` to be objects.", storageKey) : invariant(false) : void 0;
          var nextID = _this._getDataId(item, (_field$concreteType2 = field.concreteType) !== null && _field$concreteType2 !== void 0 ? _field$concreteType2 : _this._getRecordType(item)) || prevIDs && prevIDs[nextIndex] || generateClientID(RelayModernRecord.getDataID(record), storageKey, nextIndex);
          !(typeof nextID === "string") ? true ? invariant(false, "RelayResponseNormalizer: Expected id of elements of field `%s` to be strings.", storageKey) : invariant(false) : void 0;
          nextIDs.push(nextID);
          var nextRecord = _this._recordSource.get(nextID);
          if (!nextRecord) {
            var _typeName5 = field.concreteType || _this._getRecordType(item);
            nextRecord = RelayModernRecord.create(nextID, _typeName5);
            _this._recordSource.set(nextID, nextRecord);
          } else if (true) {
            _this._validateRecordType(nextRecord, field, item);
          }
          if (true) {
            if (prevIDs) {
              _this._validateConflictingLinkedFieldsWithIdenticalId(record, prevIDs[nextIndex], nextID, storageKey);
            }
          }
          _this._traverseSelections(field, nextRecord, item);
          _this._path.pop();
        });
        RelayModernRecord.setLinkedRecordIDs(record, storageKey, nextIDs);
      };
      _proto._validateRecordType = function _validateRecordType(record, field, payload) {
        var _field$concreteType3;
        var typeName = (_field$concreteType3 = field.concreteType) !== null && _field$concreteType3 !== void 0 ? _field$concreteType3 : this._getRecordType(payload);
        var dataID = RelayModernRecord.getDataID(record);
        true ? warning(isClientID(dataID) && dataID !== ROOT_ID || RelayModernRecord.getType(record) === typeName, "RelayResponseNormalizer: Invalid record `%s`. Expected %s to be consistent, but the record was assigned conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", dataID, TYPENAME_KEY, RelayModernRecord.getType(record), typeName) : void 0;
      };
      _proto._validateConflictingFieldsWithIdenticalId = function _validateConflictingFieldsWithIdenticalId(record, storageKey, fieldValue) {
        if (true) {
          var dataID = RelayModernRecord.getDataID(record);
          var previousValue = RelayModernRecord.getValue(record, storageKey);
          true ? warning(storageKey === TYPENAME_KEY || previousValue === void 0 || areEqual(previousValue, fieldValue), "RelayResponseNormalizer: Invalid record. The record contains two instances of the same id: `%s` with conflicting field, %s and its values: %s and %s. If two fields are different but share the same id, one field will overwrite the other.", dataID, storageKey, previousValue, fieldValue) : void 0;
        }
      };
      _proto._validateConflictingLinkedFieldsWithIdenticalId = function _validateConflictingLinkedFieldsWithIdenticalId(record, prevID, nextID, storageKey) {
        if (true) {
          true ? warning(prevID === void 0 || prevID === nextID, "RelayResponseNormalizer: Invalid record. The record contains references to the conflicting field, %s and its id values: %s and %s. We need to make sure that the record the field points to remains consistent or one field will overwrite the other.", storageKey, prevID, nextID) : void 0;
        }
      };
      return RelayResponseNormalizer2;
    }();
    module.exports = {
      normalize
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getOperation.js
var require_getOperation = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getOperation.js"(exports, module) {
    init_define_global();
    "use strict";
    var _require = require_RelayConcreteNode();
    var REQUEST = _require.REQUEST;
    var SPLIT_OPERATION = _require.SPLIT_OPERATION;
    function getOperation(node) {
      switch (node.kind) {
        case REQUEST:
          return node.operation;
        case SPLIT_OPERATION:
        default:
          return node;
      }
    }
    module.exports = getOperation;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/OperationExecutor.js
var require_OperationExecutor = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/OperationExecutor.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var RelayError = require_RelayError();
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayModernRecord = require_RelayModernRecord();
    var RelayObservable = require_RelayObservable();
    var RelayRecordSource = require_RelayRecordSource();
    var RelayResponseNormalizer = require_RelayResponseNormalizer();
    var getOperation = require_getOperation();
    var invariant = require_browser();
    var stableCopy = require_stableCopy();
    var warning = require_warning();
    var _require = require_ClientID();
    var generateClientID = _require.generateClientID;
    var generateUniqueClientID = _require.generateUniqueClientID;
    var _require2 = require_RelayModernSelector();
    var createNormalizationSelector = _require2.createNormalizationSelector;
    var createReaderSelector = _require2.createReaderSelector;
    var _require3 = require_RelayStoreUtils();
    var ROOT_TYPE = _require3.ROOT_TYPE;
    var TYPENAME_KEY = _require3.TYPENAME_KEY;
    var getStorageKey = _require3.getStorageKey;
    function execute(config) {
      return new Executor(config);
    }
    var Executor = function() {
      function Executor2(_ref) {
        var _this = this;
        var operation = _ref.operation, operationExecutions = _ref.operationExecutions, operationLoader = _ref.operationLoader, optimisticConfig = _ref.optimisticConfig, publishQueue = _ref.publishQueue, scheduler = _ref.scheduler, sink = _ref.sink, source = _ref.source, store = _ref.store, updater = _ref.updater, operationTracker = _ref.operationTracker, treatMissingFieldsAsNull = _ref.treatMissingFieldsAsNull, getDataID = _ref.getDataID, isClientPayload = _ref.isClientPayload, reactFlightPayloadDeserializer = _ref.reactFlightPayloadDeserializer, reactFlightServerErrorHandler = _ref.reactFlightServerErrorHandler, shouldProcessClientComponents = _ref.shouldProcessClientComponents;
        this._getDataID = getDataID;
        this._treatMissingFieldsAsNull = treatMissingFieldsAsNull;
        this._incrementalPayloadsPending = false;
        this._incrementalResults = new Map();
        this._nextSubscriptionId = 0;
        this._operation = operation;
        this._operationExecutions = operationExecutions;
        this._operationLoader = operationLoader;
        this._operationTracker = operationTracker;
        this._operationUpdateEpochs = new Map();
        this._optimisticUpdates = null;
        this._pendingModulePayloadsCount = 0;
        this._publishQueue = publishQueue;
        this._scheduler = scheduler;
        this._sink = sink;
        this._source = new Map();
        this._state = "started";
        this._store = store;
        this._subscriptions = new Map();
        this._updater = updater;
        this._isClientPayload = isClientPayload === true;
        this._reactFlightPayloadDeserializer = reactFlightPayloadDeserializer;
        this._reactFlightServerErrorHandler = reactFlightServerErrorHandler;
        this._isSubscriptionOperation = this._operation.request.node.params.operationKind === "subscription";
        this._shouldProcessClientComponents = shouldProcessClientComponents;
        var id = this._nextSubscriptionId++;
        source.subscribe({
          complete: function complete() {
            return _this._complete(id);
          },
          error: function error(_error2) {
            return _this._error(_error2);
          },
          next: function next(response) {
            try {
              _this._next(id, response);
            } catch (error) {
              sink.error(error);
            }
          },
          start: function start(subscription) {
            return _this._start(id, subscription);
          }
        });
        if (optimisticConfig != null) {
          this._processOptimisticResponse(optimisticConfig.response != null ? {
            data: optimisticConfig.response
          } : null, optimisticConfig.updater, false);
        }
      }
      var _proto = Executor2.prototype;
      _proto.cancel = function cancel() {
        var _this2 = this;
        if (this._state === "completed") {
          return;
        }
        this._state = "completed";
        this._operationExecutions["delete"](this._operation.request.identifier);
        if (this._subscriptions.size !== 0) {
          this._subscriptions.forEach(function(sub) {
            return sub.unsubscribe();
          });
          this._subscriptions.clear();
        }
        var optimisticUpdates = this._optimisticUpdates;
        if (optimisticUpdates !== null) {
          this._optimisticUpdates = null;
          optimisticUpdates.forEach(function(update) {
            return _this2._publishQueue.revertUpdate(update);
          });
          this._publishQueue.run();
        }
        this._incrementalResults.clear();
        this._completeOperationTracker();
        if (this._retainDisposable) {
          this._retainDisposable.dispose();
          this._retainDisposable = null;
        }
      };
      _proto._updateActiveState = function _updateActiveState() {
        var activeState;
        switch (this._state) {
          case "started": {
            activeState = "active";
            break;
          }
          case "loading_incremental": {
            activeState = "active";
            break;
          }
          case "completed": {
            activeState = "inactive";
            break;
          }
          case "loading_final": {
            activeState = this._pendingModulePayloadsCount > 0 ? "active" : "inactive";
            break;
          }
          default:
            this._state;
            true ? true ? invariant(false, "OperationExecutor: invalid executor state.") : invariant(false) : void 0;
        }
        this._operationExecutions.set(this._operation.request.identifier, activeState);
      };
      _proto._schedule = function _schedule(task) {
        var _this3 = this;
        var scheduler = this._scheduler;
        if (scheduler != null) {
          var _id2 = this._nextSubscriptionId++;
          RelayObservable.create(function(sink) {
            var cancellationToken = scheduler.schedule(function() {
              try {
                task();
                sink.complete();
              } catch (error) {
                sink.error(error);
              }
            });
            return function() {
              return scheduler.cancel(cancellationToken);
            };
          }).subscribe({
            complete: function complete() {
              return _this3._complete(_id2);
            },
            error: function error(_error3) {
              return _this3._error(_error3);
            },
            start: function start(subscription) {
              return _this3._start(_id2, subscription);
            }
          });
        } else {
          task();
        }
      };
      _proto._complete = function _complete(id) {
        this._subscriptions["delete"](id);
        if (this._subscriptions.size === 0) {
          this.cancel();
          this._sink.complete();
        }
      };
      _proto._error = function _error(error) {
        this.cancel();
        this._sink.error(error);
      };
      _proto._start = function _start(id, subscription) {
        this._subscriptions.set(id, subscription);
        this._updateActiveState();
      };
      _proto._next = function _next(_id, response) {
        var _this4 = this;
        this._schedule(function() {
          _this4._handleNext(response);
          _this4._maybeCompleteSubscriptionOperationTracking();
        });
      };
      _proto._handleErrorResponse = function _handleErrorResponse(responses) {
        var _this5 = this;
        var results = [];
        responses.forEach(function(response) {
          if (response.data === null && response.extensions != null && !response.hasOwnProperty("errors")) {
            return;
          } else if (response.data == null) {
            var errors = response.hasOwnProperty("errors") && response.errors != null ? response.errors : null;
            var messages = errors ? errors.map(function(_ref2) {
              var message = _ref2.message;
              return message;
            }).join("\n") : "(No errors)";
            var error = RelayError.create("RelayNetwork", "No data returned for operation `" + _this5._operation.request.node.params.name + "`, got error(s):\n" + messages + "\n\nSee the error `source` property for more information.");
            error.source = {
              errors,
              operation: _this5._operation.request.node,
              variables: _this5._operation.request.variables
            };
            error.stack;
            throw error;
          } else {
            var responseWithData = response;
            results.push(responseWithData);
          }
        });
        return results;
      };
      _proto._handleOptimisticResponses = function _handleOptimisticResponses(responses) {
        var _response$extensions;
        if (responses.length > 1) {
          if (responses.some(function(responsePart) {
            var _responsePart$extensi;
            return ((_responsePart$extensi = responsePart.extensions) === null || _responsePart$extensi === void 0 ? void 0 : _responsePart$extensi.isOptimistic) === true;
          })) {
            true ? true ? invariant(false, "Optimistic responses cannot be batched.") : invariant(false) : void 0;
          }
          return false;
        }
        var response = responses[0];
        var isOptimistic = ((_response$extensions = response.extensions) === null || _response$extensions === void 0 ? void 0 : _response$extensions.isOptimistic) === true;
        if (isOptimistic && this._state !== "started") {
          true ? true ? invariant(false, "OperationExecutor: optimistic payload received after server payload.") : invariant(false) : void 0;
        }
        if (isOptimistic) {
          this._processOptimisticResponse(response, null, this._treatMissingFieldsAsNull);
          this._sink.next(response);
          return true;
        }
        return false;
      };
      _proto._handleNext = function _handleNext(response) {
        if (this._state === "completed") {
          return;
        }
        var responses = Array.isArray(response) ? response : [response];
        var responsesWithData = this._handleErrorResponse(responses);
        if (responsesWithData.length === 0) {
          var isFinal = responses.some(function(x) {
            var _x$extensions;
            return ((_x$extensions = x.extensions) === null || _x$extensions === void 0 ? void 0 : _x$extensions.is_final) === true;
          });
          if (isFinal) {
            this._state = "loading_final";
            this._updateActiveState();
            this._incrementalPayloadsPending = false;
          }
          this._sink.next(response);
          return;
        }
        var isOptimistic = this._handleOptimisticResponses(responsesWithData);
        if (isOptimistic) {
          return;
        }
        var _partitionGraphQLResp = partitionGraphQLResponses(responsesWithData), nonIncrementalResponses = _partitionGraphQLResp[0], incrementalResponses = _partitionGraphQLResp[1];
        var hasNonIncrementalResponses = nonIncrementalResponses.length > 0;
        if (hasNonIncrementalResponses) {
          var payloadFollowups = this._processResponses(nonIncrementalResponses);
          if (!RelayFeatureFlags.ENABLE_BATCHED_STORE_UPDATES) {
            var updatedOwners = this._publishQueue.run(this._operation);
            this._updateOperationTracker(updatedOwners);
          }
          this._processPayloadFollowups(payloadFollowups);
          if (!RelayFeatureFlags.ENABLE_BATCHED_STORE_UPDATES) {
            if (this._incrementalPayloadsPending && !this._retainDisposable) {
              this._retainDisposable = this._store.retain(this._operation);
            }
          }
        }
        if (incrementalResponses.length > 0) {
          var _payloadFollowups = this._processIncrementalResponses(incrementalResponses);
          if (!RelayFeatureFlags.ENABLE_BATCHED_STORE_UPDATES) {
            var _updatedOwners = this._publishQueue.run();
            this._updateOperationTracker(_updatedOwners);
          }
          this._processPayloadFollowups(_payloadFollowups);
        }
        if (this._isSubscriptionOperation && RelayFeatureFlags.ENABLE_UNIQUE_SUBSCRIPTION_ROOT) {
          if (responsesWithData[0].extensions == null) {
            responsesWithData[0].extensions = {
              __relay_subscription_root_id: this._operation.fragment.dataID
            };
          } else {
            responsesWithData[0].extensions.__relay_subscription_root_id = this._operation.fragment.dataID;
          }
        }
        if (RelayFeatureFlags.ENABLE_BATCHED_STORE_UPDATES) {
          var _updatedOwners2 = this._publishQueue.run(hasNonIncrementalResponses ? this._operation : void 0);
          if (hasNonIncrementalResponses) {
            if (this._incrementalPayloadsPending && !this._retainDisposable) {
              this._retainDisposable = this._store.retain(this._operation);
            }
          }
          this._updateOperationTracker(_updatedOwners2);
        }
        this._sink.next(response);
      };
      _proto._processOptimisticResponse = function _processOptimisticResponse(response, updater, treatMissingFieldsAsNull) {
        var _this6 = this;
        !(this._optimisticUpdates === null) ? true ? invariant(false, "environment.execute: only support one optimistic response per execute.") : invariant(false) : void 0;
        if (response == null && updater == null) {
          return;
        }
        var optimisticUpdates = [];
        if (response) {
          var payload = normalizeResponse(response, this._operation.root, ROOT_TYPE, {
            getDataID: this._getDataID,
            path: [],
            reactFlightPayloadDeserializer: this._reactFlightPayloadDeserializer,
            reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
            shouldProcessClientComponents: this._shouldProcessClientComponents,
            treatMissingFieldsAsNull
          });
          validateOptimisticResponsePayload(payload);
          optimisticUpdates.push({
            operation: this._operation,
            payload,
            updater
          });
          this._processOptimisticFollowups(payload, optimisticUpdates);
        } else if (updater) {
          optimisticUpdates.push({
            operation: this._operation,
            payload: {
              errors: null,
              fieldPayloads: null,
              incrementalPlaceholders: null,
              moduleImportPayloads: null,
              source: RelayRecordSource.create(),
              isFinal: false
            },
            updater
          });
        }
        this._optimisticUpdates = optimisticUpdates;
        optimisticUpdates.forEach(function(update) {
          return _this6._publishQueue.applyUpdate(update);
        });
        this._publishQueue.run();
      };
      _proto._processOptimisticFollowups = function _processOptimisticFollowups(payload, optimisticUpdates) {
        if (payload.moduleImportPayloads && payload.moduleImportPayloads.length) {
          var moduleImportPayloads = payload.moduleImportPayloads;
          var operationLoader = this._operationLoader;
          !operationLoader ? true ? invariant(false, "RelayModernEnvironment: Expected an operationLoader to be configured when using `@match`.") : invariant(false) : void 0;
          var _iterator = (0, _createForOfIteratorHelper2["default"])(moduleImportPayloads), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var moduleImportPayload = _step.value;
              var operation = operationLoader.get(moduleImportPayload.operationReference);
              if (operation == null) {
                this._processAsyncOptimisticModuleImport(operationLoader, moduleImportPayload);
              } else {
                var moduleImportOptimisticUpdates = this._processOptimisticModuleImport(operation, moduleImportPayload);
                optimisticUpdates.push.apply(optimisticUpdates, (0, _toConsumableArray2["default"])(moduleImportOptimisticUpdates));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      };
      _proto._normalizeModuleImport = function _normalizeModuleImport(moduleImportPayload, operation) {
        var selector = createNormalizationSelector(operation, moduleImportPayload.dataID, moduleImportPayload.variables);
        return normalizeResponse({
          data: moduleImportPayload.data
        }, selector, moduleImportPayload.typeName, {
          getDataID: this._getDataID,
          path: moduleImportPayload.path,
          reactFlightPayloadDeserializer: this._reactFlightPayloadDeserializer,
          reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
          treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
          shouldProcessClientComponents: this._shouldProcessClientComponents
        });
      };
      _proto._processOptimisticModuleImport = function _processOptimisticModuleImport(normalizationRootNode, moduleImportPayload) {
        var operation = getOperation(normalizationRootNode);
        var optimisticUpdates = [];
        var modulePayload = this._normalizeModuleImport(moduleImportPayload, operation);
        validateOptimisticResponsePayload(modulePayload);
        optimisticUpdates.push({
          operation: this._operation,
          payload: modulePayload,
          updater: null
        });
        this._processOptimisticFollowups(modulePayload, optimisticUpdates);
        return optimisticUpdates;
      };
      _proto._processAsyncOptimisticModuleImport = function _processAsyncOptimisticModuleImport(operationLoader, moduleImportPayload) {
        var _this7 = this;
        operationLoader.load(moduleImportPayload.operationReference).then(function(operation) {
          if (operation == null || _this7._state !== "started") {
            return;
          }
          var moduleImportOptimisticUpdates = _this7._processOptimisticModuleImport(operation, moduleImportPayload);
          moduleImportOptimisticUpdates.forEach(function(update) {
            return _this7._publishQueue.applyUpdate(update);
          });
          if (_this7._optimisticUpdates == null) {
            true ? warning(false, "OperationExecutor: Unexpected ModuleImport optimistic update in operation %s." + _this7._operation.request.node.params.name) : void 0;
          } else {
            var _this$_optimisticUpda;
            (_this$_optimisticUpda = _this7._optimisticUpdates).push.apply(_this$_optimisticUpda, (0, _toConsumableArray2["default"])(moduleImportOptimisticUpdates));
            _this7._publishQueue.run();
          }
        });
      };
      _proto._processResponses = function _processResponses(responses) {
        var _this8 = this;
        if (this._optimisticUpdates !== null) {
          this._optimisticUpdates.forEach(function(update) {
            return _this8._publishQueue.revertUpdate(update);
          });
          this._optimisticUpdates = null;
        }
        this._incrementalPayloadsPending = false;
        this._incrementalResults.clear();
        this._source.clear();
        return responses.map(function(payloadPart) {
          var relayPayload = normalizeResponse(payloadPart, _this8._operation.root, ROOT_TYPE, {
            getDataID: _this8._getDataID,
            path: [],
            reactFlightPayloadDeserializer: _this8._reactFlightPayloadDeserializer,
            reactFlightServerErrorHandler: _this8._reactFlightServerErrorHandler,
            treatMissingFieldsAsNull: _this8._treatMissingFieldsAsNull,
            shouldProcessClientComponents: _this8._shouldProcessClientComponents
          });
          _this8._publishQueue.commitPayload(_this8._operation, relayPayload, _this8._updater);
          return relayPayload;
        });
      };
      _proto._processPayloadFollowups = function _processPayloadFollowups(payloads) {
        var _this9 = this;
        if (this._state === "completed") {
          return;
        }
        payloads.forEach(function(payload) {
          var incrementalPlaceholders = payload.incrementalPlaceholders, moduleImportPayloads = payload.moduleImportPayloads, isFinal = payload.isFinal;
          _this9._state = isFinal ? "loading_final" : "loading_incremental";
          _this9._updateActiveState();
          if (isFinal) {
            _this9._incrementalPayloadsPending = false;
          }
          if (moduleImportPayloads && moduleImportPayloads.length !== 0) {
            var operationLoader = _this9._operationLoader;
            !operationLoader ? true ? invariant(false, "RelayModernEnvironment: Expected an operationLoader to be configured when using `@match`.") : invariant(false) : void 0;
            moduleImportPayloads.forEach(function(moduleImportPayload) {
              _this9._processModuleImportPayload(moduleImportPayload, operationLoader);
            });
          }
          if (incrementalPlaceholders && incrementalPlaceholders.length !== 0) {
            _this9._incrementalPayloadsPending = _this9._state !== "loading_final";
            incrementalPlaceholders.forEach(function(incrementalPlaceholder) {
              _this9._processIncrementalPlaceholder(payload, incrementalPlaceholder);
            });
            if (_this9._isClientPayload || _this9._state === "loading_final") {
              true ? warning(_this9._isClientPayload, "RelayModernEnvironment: Operation `%s` contains @defer/@stream directives but was executed in non-streaming mode. See https://fburl.com/relay-incremental-delivery-non-streaming-warning.", _this9._operation.request.node.params.name) : void 0;
              var relayPayloads = [];
              incrementalPlaceholders.forEach(function(placeholder) {
                if (placeholder.kind === "defer") {
                  relayPayloads.push(_this9._processDeferResponse(placeholder.label, placeholder.path, placeholder, {
                    data: placeholder.data
                  }));
                }
              });
              if (relayPayloads.length > 0) {
                if (!RelayFeatureFlags.ENABLE_BATCHED_STORE_UPDATES) {
                  var updatedOwners = _this9._publishQueue.run();
                  _this9._updateOperationTracker(updatedOwners);
                }
                _this9._processPayloadFollowups(relayPayloads);
              }
            }
          }
        });
      };
      _proto._maybeCompleteSubscriptionOperationTracking = function _maybeCompleteSubscriptionOperationTracking() {
        if (!this._isSubscriptionOperation) {
          return;
        }
        if (this._pendingModulePayloadsCount === 0 && this._incrementalPayloadsPending === false) {
          this._completeOperationTracker();
        }
        if (RelayFeatureFlags.ENABLE_UNIQUE_SUBSCRIPTION_ROOT) {
          var nextID = generateUniqueClientID();
          this._operation = {
            request: this._operation.request,
            fragment: createReaderSelector(this._operation.fragment.node, nextID, this._operation.fragment.variables, this._operation.fragment.owner),
            root: createNormalizationSelector(this._operation.root.node, nextID, this._operation.root.variables)
          };
        }
      };
      _proto._processModuleImportPayload = function _processModuleImportPayload(moduleImportPayload, operationLoader) {
        var _this10 = this;
        var node = operationLoader.get(moduleImportPayload.operationReference);
        if (node != null) {
          var operation = getOperation(node);
          this._handleModuleImportPayload(moduleImportPayload, operation);
          this._maybeCompleteSubscriptionOperationTracking();
        } else {
          var _id3 = this._nextSubscriptionId++;
          this._pendingModulePayloadsCount++;
          var decrementPendingCount = function decrementPendingCount2() {
            _this10._pendingModulePayloadsCount--;
            _this10._maybeCompleteSubscriptionOperationTracking();
          };
          RelayObservable.from(new Promise(function(resolve, reject) {
            operationLoader.load(moduleImportPayload.operationReference).then(resolve, reject);
          })).map(function(operation2) {
            if (operation2 != null) {
              _this10._schedule(function() {
                _this10._handleModuleImportPayload(moduleImportPayload, getOperation(operation2));
                var updatedOwners = _this10._publishQueue.run();
                _this10._updateOperationTracker(updatedOwners);
              });
            }
          }).subscribe({
            complete: function complete() {
              _this10._complete(_id3);
              decrementPendingCount();
            },
            error: function error(_error4) {
              _this10._error(_error4);
              decrementPendingCount();
            },
            start: function start(subscription) {
              return _this10._start(_id3, subscription);
            }
          });
        }
      };
      _proto._handleModuleImportPayload = function _handleModuleImportPayload(moduleImportPayload, operation) {
        var relayPayload = this._normalizeModuleImport(moduleImportPayload, operation);
        this._publishQueue.commitPayload(this._operation, relayPayload);
        if (!RelayFeatureFlags.ENABLE_BATCHED_STORE_UPDATES) {
          var updatedOwners = this._publishQueue.run();
          this._updateOperationTracker(updatedOwners);
        }
        this._processPayloadFollowups([relayPayload]);
      };
      _proto._processIncrementalPlaceholder = function _processIncrementalPlaceholder(relayPayload, placeholder) {
        var _relayPayload$fieldPa;
        var label = placeholder.label, path = placeholder.path;
        var pathKey = path.map(String).join(".");
        var resultForLabel = this._incrementalResults.get(label);
        if (resultForLabel == null) {
          resultForLabel = new Map();
          this._incrementalResults.set(label, resultForLabel);
        }
        var resultForPath = resultForLabel.get(pathKey);
        var pendingResponses = resultForPath != null && resultForPath.kind === "response" ? resultForPath.responses : null;
        resultForLabel.set(pathKey, {
          kind: "placeholder",
          placeholder
        });
        var parentID;
        if (placeholder.kind === "stream") {
          parentID = placeholder.parentID;
        } else if (placeholder.kind === "defer") {
          parentID = placeholder.selector.dataID;
        } else {
          placeholder;
          true ? true ? invariant(false, "Unsupported incremental placeholder kind `%s`.", placeholder.kind) : invariant(false) : void 0;
        }
        var parentRecord = relayPayload.source.get(parentID);
        var parentPayloads = ((_relayPayload$fieldPa = relayPayload.fieldPayloads) !== null && _relayPayload$fieldPa !== void 0 ? _relayPayload$fieldPa : []).filter(function(fieldPayload) {
          var fieldID = generateClientID(fieldPayload.dataID, fieldPayload.fieldKey);
          return fieldPayload.dataID === parentID || fieldID === parentID;
        });
        !(parentRecord != null) ? true ? invariant(false, "RelayModernEnvironment: Expected record `%s` to exist.", parentID) : invariant(false) : void 0;
        var nextParentRecord;
        var nextParentPayloads;
        var previousParentEntry = this._source.get(parentID);
        if (previousParentEntry != null) {
          nextParentRecord = RelayModernRecord.update(previousParentEntry.record, parentRecord);
          var handlePayloads = new Map();
          var dedupePayload = function dedupePayload2(payload) {
            var key = stableStringify(payload);
            handlePayloads.set(key, payload);
          };
          previousParentEntry.fieldPayloads.forEach(dedupePayload);
          parentPayloads.forEach(dedupePayload);
          nextParentPayloads = Array.from(handlePayloads.values());
        } else {
          nextParentRecord = parentRecord;
          nextParentPayloads = parentPayloads;
        }
        this._source.set(parentID, {
          record: nextParentRecord,
          fieldPayloads: nextParentPayloads
        });
        if (pendingResponses != null) {
          var payloadFollowups = this._processIncrementalResponses(pendingResponses);
          if (!RelayFeatureFlags.ENABLE_BATCHED_STORE_UPDATES) {
            var updatedOwners = this._publishQueue.run();
            this._updateOperationTracker(updatedOwners);
          }
          this._processPayloadFollowups(payloadFollowups);
        }
      };
      _proto._processIncrementalResponses = function _processIncrementalResponses(incrementalResponses) {
        var _this11 = this;
        var relayPayloads = [];
        incrementalResponses.forEach(function(incrementalResponse) {
          var label = incrementalResponse.label, path = incrementalResponse.path, response = incrementalResponse.response;
          var resultForLabel = _this11._incrementalResults.get(label);
          if (resultForLabel == null) {
            resultForLabel = new Map();
            _this11._incrementalResults.set(label, resultForLabel);
          }
          if (label.indexOf("$defer$") !== -1) {
            var pathKey = path.map(String).join(".");
            var resultForPath = resultForLabel.get(pathKey);
            if (resultForPath == null) {
              resultForPath = {
                kind: "response",
                responses: [incrementalResponse]
              };
              resultForLabel.set(pathKey, resultForPath);
              return;
            } else if (resultForPath.kind === "response") {
              resultForPath.responses.push(incrementalResponse);
              return;
            }
            var placeholder = resultForPath.placeholder;
            !(placeholder.kind === "defer") ? true ? invariant(false, "RelayModernEnvironment: Expected data for path `%s` for label `%s` to be data for @defer, was `@%s`.", pathKey, label, placeholder.kind) : invariant(false) : void 0;
            relayPayloads.push(_this11._processDeferResponse(label, path, placeholder, response));
          } else {
            var _pathKey = path.slice(0, -2).map(String).join(".");
            var _resultForPath = resultForLabel.get(_pathKey);
            if (_resultForPath == null) {
              _resultForPath = {
                kind: "response",
                responses: [incrementalResponse]
              };
              resultForLabel.set(_pathKey, _resultForPath);
              return;
            } else if (_resultForPath.kind === "response") {
              _resultForPath.responses.push(incrementalResponse);
              return;
            }
            var _placeholder = _resultForPath.placeholder;
            !(_placeholder.kind === "stream") ? true ? invariant(false, "RelayModernEnvironment: Expected data for path `%s` for label `%s` to be data for @stream, was `@%s`.", _pathKey, label, _placeholder.kind) : invariant(false) : void 0;
            relayPayloads.push(_this11._processStreamResponse(label, path, _placeholder, response));
          }
        });
        return relayPayloads;
      };
      _proto._processDeferResponse = function _processDeferResponse(label, path, placeholder, response) {
        var parentID = placeholder.selector.dataID;
        var relayPayload = normalizeResponse(response, placeholder.selector, placeholder.typeName, {
          getDataID: this._getDataID,
          path: placeholder.path,
          reactFlightPayloadDeserializer: this._reactFlightPayloadDeserializer,
          reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
          treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
          shouldProcessClientComponents: this._shouldProcessClientComponents
        });
        this._publishQueue.commitPayload(this._operation, relayPayload);
        var parentEntry = this._source.get(parentID);
        !(parentEntry != null) ? true ? invariant(false, "RelayModernEnvironment: Expected the parent record `%s` for @defer data to exist.", parentID) : invariant(false) : void 0;
        var fieldPayloads = parentEntry.fieldPayloads;
        if (fieldPayloads.length !== 0) {
          var _response$extensions2;
          var handleFieldsRelayPayload = {
            errors: null,
            fieldPayloads,
            incrementalPlaceholders: null,
            moduleImportPayloads: null,
            source: RelayRecordSource.create(),
            isFinal: ((_response$extensions2 = response.extensions) === null || _response$extensions2 === void 0 ? void 0 : _response$extensions2.is_final) === true
          };
          this._publishQueue.commitPayload(this._operation, handleFieldsRelayPayload);
        }
        return relayPayload;
      };
      _proto._processStreamResponse = function _processStreamResponse(label, path, placeholder, response) {
        var parentID = placeholder.parentID, node = placeholder.node, variables = placeholder.variables;
        var field = node.selections[0];
        !(field != null && field.kind === "LinkedField" && field.plural === true) ? true ? invariant(false, "RelayModernEnvironment: Expected @stream to be used on a plural field.") : invariant(false) : void 0;
        var _this$_normalizeStrea = this._normalizeStreamItem(response, parentID, field, variables, path, placeholder.path), fieldPayloads = _this$_normalizeStrea.fieldPayloads, itemID = _this$_normalizeStrea.itemID, itemIndex = _this$_normalizeStrea.itemIndex, prevIDs = _this$_normalizeStrea.prevIDs, relayPayload = _this$_normalizeStrea.relayPayload, storageKey = _this$_normalizeStrea.storageKey;
        this._publishQueue.commitPayload(this._operation, relayPayload, function(store) {
          var currentParentRecord = store.get(parentID);
          if (currentParentRecord == null) {
            return;
          }
          var currentItems = currentParentRecord.getLinkedRecords(storageKey);
          if (currentItems == null) {
            return;
          }
          if (currentItems.length !== prevIDs.length || currentItems.some(function(currentItem, index) {
            return prevIDs[index] !== (currentItem && currentItem.getDataID());
          })) {
            return;
          }
          var nextItems = (0, _toConsumableArray2["default"])(currentItems);
          nextItems[itemIndex] = store.get(itemID);
          currentParentRecord.setLinkedRecords(nextItems, storageKey);
        });
        if (fieldPayloads.length !== 0) {
          var handleFieldsRelayPayload = {
            errors: null,
            fieldPayloads,
            incrementalPlaceholders: null,
            moduleImportPayloads: null,
            source: RelayRecordSource.create(),
            isFinal: false
          };
          this._publishQueue.commitPayload(this._operation, handleFieldsRelayPayload);
        }
        return relayPayload;
      };
      _proto._normalizeStreamItem = function _normalizeStreamItem(response, parentID, field, variables, path, normalizationPath) {
        var _field$alias, _field$concreteType, _this$_getDataID;
        var data = response.data;
        !(typeof data === "object") ? true ? invariant(false, "RelayModernEnvironment: Expected the GraphQL @stream payload `data` value to be an object.") : invariant(false) : void 0;
        var responseKey = (_field$alias = field.alias) !== null && _field$alias !== void 0 ? _field$alias : field.name;
        var storageKey = getStorageKey(field, variables);
        var parentEntry = this._source.get(parentID);
        !(parentEntry != null) ? true ? invariant(false, "RelayModernEnvironment: Expected the parent record `%s` for @stream data to exist.", parentID) : invariant(false) : void 0;
        var parentRecord = parentEntry.record, fieldPayloads = parentEntry.fieldPayloads;
        var prevIDs = RelayModernRecord.getLinkedRecordIDs(parentRecord, storageKey);
        !(prevIDs != null) ? true ? invariant(false, "RelayModernEnvironment: Expected record `%s` to have fetched field `%s` with @stream.", parentID, field.name) : invariant(false) : void 0;
        var finalPathEntry = path[path.length - 1];
        var itemIndex = parseInt(finalPathEntry, 10);
        !(itemIndex === finalPathEntry && itemIndex >= 0) ? true ? invariant(false, "RelayModernEnvironment: Expected path for @stream to end in a positive integer index, got `%s`", finalPathEntry) : invariant(false) : void 0;
        var typeName = (_field$concreteType = field.concreteType) !== null && _field$concreteType !== void 0 ? _field$concreteType : data[TYPENAME_KEY];
        !(typeof typeName === "string") ? true ? invariant(false, "RelayModernEnvironment: Expected @stream field `%s` to have a __typename.", field.name) : invariant(false) : void 0;
        var itemID = ((_this$_getDataID = this._getDataID(data, typeName)) !== null && _this$_getDataID !== void 0 ? _this$_getDataID : prevIDs && prevIDs[itemIndex]) || generateClientID(parentID, storageKey, itemIndex);
        !(typeof itemID === "string") ? true ? invariant(false, "RelayModernEnvironment: Expected id of elements of field `%s` to be strings.", storageKey) : invariant(false) : void 0;
        var selector = createNormalizationSelector(field, itemID, variables);
        var nextParentRecord = RelayModernRecord.clone(parentRecord);
        var nextIDs = (0, _toConsumableArray2["default"])(prevIDs);
        nextIDs[itemIndex] = itemID;
        RelayModernRecord.setLinkedRecordIDs(nextParentRecord, storageKey, nextIDs);
        this._source.set(parentID, {
          record: nextParentRecord,
          fieldPayloads
        });
        var relayPayload = normalizeResponse(response, selector, typeName, {
          getDataID: this._getDataID,
          path: [].concat((0, _toConsumableArray2["default"])(normalizationPath), [responseKey, String(itemIndex)]),
          reactFlightPayloadDeserializer: this._reactFlightPayloadDeserializer,
          reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
          treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
          shouldProcessClientComponents: this._shouldProcessClientComponents
        });
        return {
          fieldPayloads,
          itemID,
          itemIndex,
          prevIDs,
          relayPayload,
          storageKey
        };
      };
      _proto._updateOperationTracker = function _updateOperationTracker(updatedOwners) {
        if (updatedOwners != null && updatedOwners.length > 0) {
          this._operationTracker.update(this._operation.request, new Set(updatedOwners));
        }
      };
      _proto._completeOperationTracker = function _completeOperationTracker() {
        this._operationTracker.complete(this._operation.request);
      };
      return Executor2;
    }();
    function partitionGraphQLResponses(responses) {
      var nonIncrementalResponses = [];
      var incrementalResponses = [];
      responses.forEach(function(response) {
        if (response.path != null || response.label != null) {
          var label = response.label, path = response.path;
          if (label == null || path == null) {
            true ? true ? invariant(false, "OperationExecutor: invalid incremental payload, expected `path` and `label` to either both be null/undefined, or `path` to be an `Array<string | number>` and `label` to be a `string`.") : invariant(false) : void 0;
          }
          incrementalResponses.push({
            label,
            path,
            response
          });
        } else {
          nonIncrementalResponses.push(response);
        }
      });
      return [nonIncrementalResponses, incrementalResponses];
    }
    function normalizeResponse(response, selector, typeName, options) {
      var _response$extensions3;
      var data = response.data, errors = response.errors;
      var source = RelayRecordSource.create();
      var record = RelayModernRecord.create(selector.dataID, typeName);
      source.set(selector.dataID, record);
      var relayPayload = RelayResponseNormalizer.normalize(source, selector, data, options);
      return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, relayPayload), {}, {
        errors,
        isFinal: ((_response$extensions3 = response.extensions) === null || _response$extensions3 === void 0 ? void 0 : _response$extensions3.is_final) === true
      });
    }
    function stableStringify(value) {
      var _JSON$stringify;
      return (_JSON$stringify = JSON.stringify(stableCopy(value))) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "";
    }
    function validateOptimisticResponsePayload(payload) {
      var incrementalPlaceholders = payload.incrementalPlaceholders;
      if (incrementalPlaceholders != null && incrementalPlaceholders.length !== 0) {
        true ? true ? invariant(false, "OperationExecutor: optimistic responses cannot be returned for operations that use incremental data delivery (@defer, @stream, and @stream_connection).") : invariant(false) : void 0;
      }
    }
    module.exports = {
      execute
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayOperationTracker.js
var require_RelayOperationTracker = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayOperationTracker.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var invariant = require_browser();
    var RelayOperationTracker = function() {
      function RelayOperationTracker2() {
        this._ownersToPendingOperationsIdentifier = new Map();
        this._pendingOperationsToOwnersIdentifier = new Map();
        this._ownersIdentifierToPromise = new Map();
      }
      var _proto = RelayOperationTracker2.prototype;
      _proto.update = function update(pendingOperation, affectedOwners) {
        if (affectedOwners.size === 0) {
          return;
        }
        var pendingOperationIdentifier = pendingOperation.identifier;
        var newlyAffectedOwnersIdentifier = new Set();
        var _iterator = (0, _createForOfIteratorHelper2["default"])(affectedOwners), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var owner = _step.value;
            var ownerIdentifier = owner.identifier;
            var pendingOperationsAffectingOwner = this._ownersToPendingOperationsIdentifier.get(ownerIdentifier);
            if (pendingOperationsAffectingOwner != null) {
              if (!pendingOperationsAffectingOwner.has(pendingOperationIdentifier)) {
                pendingOperationsAffectingOwner.add(pendingOperationIdentifier);
                newlyAffectedOwnersIdentifier.add(ownerIdentifier);
              }
            } else {
              this._ownersToPendingOperationsIdentifier.set(ownerIdentifier, new Set([pendingOperationIdentifier]));
              newlyAffectedOwnersIdentifier.add(ownerIdentifier);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (newlyAffectedOwnersIdentifier.size === 0) {
          return;
        }
        var ownersAffectedByOperationIdentifier = this._pendingOperationsToOwnersIdentifier.get(pendingOperationIdentifier) || new Set();
        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(newlyAffectedOwnersIdentifier), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _ownerIdentifier = _step2.value;
            this._resolveOwnerResolvers(_ownerIdentifier);
            ownersAffectedByOperationIdentifier.add(_ownerIdentifier);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this._pendingOperationsToOwnersIdentifier.set(pendingOperationIdentifier, ownersAffectedByOperationIdentifier);
      };
      _proto.complete = function complete(pendingOperation) {
        var pendingOperationIdentifier = pendingOperation.identifier;
        var affectedOwnersIdentifier = this._pendingOperationsToOwnersIdentifier.get(pendingOperationIdentifier);
        if (affectedOwnersIdentifier == null) {
          return;
        }
        var completedOwnersIdentifier = new Set();
        var updatedOwnersIdentifier = new Set();
        var _iterator3 = (0, _createForOfIteratorHelper2["default"])(affectedOwnersIdentifier), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var ownerIdentifier = _step3.value;
            var pendingOperationsAffectingOwner = this._ownersToPendingOperationsIdentifier.get(ownerIdentifier);
            if (!pendingOperationsAffectingOwner) {
              continue;
            }
            pendingOperationsAffectingOwner["delete"](pendingOperationIdentifier);
            if (pendingOperationsAffectingOwner.size > 0) {
              updatedOwnersIdentifier.add(ownerIdentifier);
            } else {
              completedOwnersIdentifier.add(ownerIdentifier);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = (0, _createForOfIteratorHelper2["default"])(completedOwnersIdentifier), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var _ownerIdentifier2 = _step4.value;
            this._resolveOwnerResolvers(_ownerIdentifier2);
            this._ownersToPendingOperationsIdentifier["delete"](_ownerIdentifier2);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var _iterator5 = (0, _createForOfIteratorHelper2["default"])(updatedOwnersIdentifier), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var _ownerIdentifier3 = _step5.value;
            this._resolveOwnerResolvers(_ownerIdentifier3);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        this._pendingOperationsToOwnersIdentifier["delete"](pendingOperationIdentifier);
      };
      _proto._resolveOwnerResolvers = function _resolveOwnerResolvers(ownerIdentifier) {
        var promiseEntry = this._ownersIdentifierToPromise.get(ownerIdentifier);
        if (promiseEntry != null) {
          promiseEntry.resolve();
        }
        this._ownersIdentifierToPromise["delete"](ownerIdentifier);
      };
      _proto.getPromiseForPendingOperationsAffectingOwner = function getPromiseForPendingOperationsAffectingOwner(owner) {
        var ownerIdentifier = owner.identifier;
        if (!this._ownersToPendingOperationsIdentifier.has(ownerIdentifier)) {
          return null;
        }
        var cachedPromiseEntry = this._ownersIdentifierToPromise.get(ownerIdentifier);
        if (cachedPromiseEntry != null) {
          return cachedPromiseEntry.promise;
        }
        var resolve;
        var promise = new Promise(function(r) {
          resolve = r;
        });
        !(resolve != null) ? true ? invariant(false, "RelayOperationTracker: Expected resolver to be defined. If youare seeing this, it is likely a bug in Relay.") : invariant(false) : void 0;
        this._ownersIdentifierToPromise.set(ownerIdentifier, {
          promise,
          resolve
        });
        return promise;
      };
      return RelayOperationTracker2;
    }();
    module.exports = RelayOperationTracker;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/ResolverFragments.js
var require_ResolverFragments = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/ResolverFragments.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var _require = require_GraphQLTag();
    var getFragment = _require.getFragment;
    var _require2 = require_RelayModernSelector();
    var getSelector = _require2.getSelector;
    var contextStack = [];
    function withResolverContext(context, cb) {
      contextStack.push(context);
      try {
        return cb();
      } finally {
        contextStack.pop();
      }
    }
    function readFragment(fragmentInput, fragmentRef) {
      if (!contextStack.length) {
        throw new Error("readFragment should be called only from within a Relay Resolver function.");
      }
      var context = contextStack[contextStack.length - 1];
      var fragmentNode = getFragment(fragmentInput);
      var fragmentSelector = getSelector(fragmentNode, fragmentRef);
      !(fragmentSelector != null) ? true ? invariant(false, "Expected a selector for the fragment of the resolver ".concat(fragmentNode.name, ", but got null.")) : invariant(false) : void 0;
      !(fragmentSelector.kind === "SingularReaderSelector") ? true ? invariant(false, "Expected a singular reader selector for the fragment of the resolver ".concat(fragmentNode.name, ", but it was plural.")) : invariant(false) : void 0;
      return context.getDataForResolverFragment(fragmentSelector);
    }
    module.exports = {
      readFragment,
      withResolverContext
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayReader.js
var require_RelayReader = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayReader.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayModernRecord = require_RelayModernRecord();
    var invariant = require_browser();
    var _require = require_RelayConcreteNode();
    var CLIENT_EXTENSION = _require.CLIENT_EXTENSION;
    var CONDITION = _require.CONDITION;
    var DEFER = _require.DEFER;
    var FLIGHT_FIELD = _require.FLIGHT_FIELD;
    var FRAGMENT_SPREAD = _require.FRAGMENT_SPREAD;
    var INLINE_DATA_FRAGMENT_SPREAD = _require.INLINE_DATA_FRAGMENT_SPREAD;
    var INLINE_FRAGMENT = _require.INLINE_FRAGMENT;
    var LINKED_FIELD = _require.LINKED_FIELD;
    var MODULE_IMPORT = _require.MODULE_IMPORT;
    var REQUIRED_FIELD = _require.REQUIRED_FIELD;
    var RELAY_RESOLVER = _require.RELAY_RESOLVER;
    var SCALAR_FIELD = _require.SCALAR_FIELD;
    var STREAM = _require.STREAM;
    var _require2 = require_RelayStoreReactFlightUtils();
    var getReactFlightClientResponse = _require2.getReactFlightClientResponse;
    var _require3 = require_RelayStoreUtils();
    var FRAGMENTS_KEY = _require3.FRAGMENTS_KEY;
    var FRAGMENT_OWNER_KEY = _require3.FRAGMENT_OWNER_KEY;
    var FRAGMENT_PROP_NAME_KEY = _require3.FRAGMENT_PROP_NAME_KEY;
    var ID_KEY = _require3.ID_KEY;
    var IS_WITHIN_UNMATCHED_TYPE_REFINEMENT = _require3.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT;
    var MODULE_COMPONENT_KEY = _require3.MODULE_COMPONENT_KEY;
    var ROOT_ID = _require3.ROOT_ID;
    var getArgumentValues = _require3.getArgumentValues;
    var getStorageKey = _require3.getStorageKey;
    var getModuleComponentKey = _require3.getModuleComponentKey;
    var _require4 = require_ResolverFragments();
    var withResolverContext = _require4.withResolverContext;
    var _require5 = require_TypeID();
    var generateTypeID = _require5.generateTypeID;
    function read(recordSource, selector) {
      var reader = new RelayReader(recordSource, selector);
      return reader.read();
    }
    var RelayReader = function() {
      function RelayReader2(recordSource, selector) {
        this._isMissingData = false;
        this._isWithinUnmatchedTypeRefinement = false;
        this._missingRequiredFields = null;
        this._owner = selector.owner;
        this._recordSource = recordSource;
        this._seenRecords = new Set();
        this._selector = selector;
        this._variables = selector.variables;
      }
      var _proto = RelayReader2.prototype;
      _proto.read = function read2() {
        var _this$_selector = this._selector, node = _this$_selector.node, dataID = _this$_selector.dataID, isWithinUnmatchedTypeRefinement = _this$_selector.isWithinUnmatchedTypeRefinement;
        var abstractKey = node.abstractKey;
        var record = this._recordSource.get(dataID);
        var isDataExpectedToBePresent = !isWithinUnmatchedTypeRefinement;
        if (isDataExpectedToBePresent && abstractKey == null && record != null) {
          var recordType = RelayModernRecord.getType(record);
          if (recordType !== node.type && dataID !== ROOT_ID) {
            isDataExpectedToBePresent = false;
          }
        }
        if (isDataExpectedToBePresent && abstractKey != null && record != null && RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
          var _recordType = RelayModernRecord.getType(record);
          var typeID = generateTypeID(_recordType);
          var typeRecord = this._recordSource.get(typeID);
          var implementsInterface = typeRecord != null ? RelayModernRecord.getValue(typeRecord, abstractKey) : null;
          if (implementsInterface === false) {
            isDataExpectedToBePresent = false;
          } else if (implementsInterface == null) {
            this._isMissingData = true;
          }
        }
        this._isWithinUnmatchedTypeRefinement = !isDataExpectedToBePresent;
        var data = this._traverse(node, dataID, null);
        return {
          data,
          isMissingData: this._isMissingData && isDataExpectedToBePresent,
          seenRecords: this._seenRecords,
          selector: this._selector,
          missingRequiredFields: this._missingRequiredFields
        };
      };
      _proto._traverse = function _traverse(node, dataID, prevData) {
        var record = this._recordSource.get(dataID);
        this._seenRecords.add(dataID);
        if (record == null) {
          if (record === void 0) {
            this._isMissingData = true;
          }
          return record;
        }
        var data = prevData || {};
        var hadRequiredData = this._traverseSelections(node.selections, record, data);
        return hadRequiredData ? data : null;
      };
      _proto._getVariableValue = function _getVariableValue(name) {
        !this._variables.hasOwnProperty(name) ? true ? invariant(false, "RelayReader(): Undefined variable `%s`.", name) : invariant(false) : void 0;
        return this._variables[name];
      };
      _proto._maybeReportUnexpectedNull = function _maybeReportUnexpectedNull(fieldPath, action, record) {
        var _this$_missingRequire;
        if (((_this$_missingRequire = this._missingRequiredFields) === null || _this$_missingRequire === void 0 ? void 0 : _this$_missingRequire.action) === "THROW") {
          return;
        }
        var owner = this._selector.node.name;
        switch (action) {
          case "THROW":
            this._missingRequiredFields = {
              action,
              field: {
                path: fieldPath,
                owner
              }
            };
            return;
          case "LOG":
            if (this._missingRequiredFields == null) {
              this._missingRequiredFields = {
                action,
                fields: []
              };
            }
            this._missingRequiredFields.fields.push({
              path: fieldPath,
              owner
            });
            return;
          default:
            action;
        }
      };
      _proto._traverseSelections = function _traverseSelections(selections, record, data) {
        for (var i = 0; i < selections.length; i++) {
          var selection = selections[i];
          switch (selection.kind) {
            case REQUIRED_FIELD:
              !RelayFeatureFlags.ENABLE_REQUIRED_DIRECTIVES ? true ? invariant(false, 'RelayReader(): Encountered a `@required` directive at path "%s" in `%s` without the `ENABLE_REQUIRED_DIRECTIVES` feature flag enabled.', selection.path, this._selector.node.name) : invariant(false) : void 0;
              var fieldValue = this._readRequiredField(selection, record, data);
              if (fieldValue == null) {
                var action = selection.action;
                if (action !== "NONE") {
                  this._maybeReportUnexpectedNull(selection.path, action, record);
                }
                return false;
              }
              break;
            case SCALAR_FIELD:
              this._readScalar(selection, record, data);
              break;
            case LINKED_FIELD:
              if (selection.plural) {
                this._readPluralLink(selection, record, data);
              } else {
                this._readLink(selection, record, data);
              }
              break;
            case CONDITION:
              var conditionValue = this._getVariableValue(selection.condition);
              if (conditionValue === selection.passingValue) {
                var hasExpectedData = this._traverseSelections(selection.selections, record, data);
                if (!hasExpectedData) {
                  return false;
                }
              }
              break;
            case INLINE_FRAGMENT: {
              var abstractKey = selection.abstractKey;
              if (abstractKey == null) {
                var typeName = RelayModernRecord.getType(record);
                if (typeName != null && typeName === selection.type) {
                  var _hasExpectedData = this._traverseSelections(selection.selections, record, data);
                  if (!_hasExpectedData) {
                    return false;
                  }
                }
              } else if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
                var parentIsMissingData = this._isMissingData;
                var parentIsWithinUnmatchedTypeRefinement = this._isWithinUnmatchedTypeRefinement;
                var _typeName = RelayModernRecord.getType(record);
                var typeID = generateTypeID(_typeName);
                var typeRecord = this._recordSource.get(typeID);
                var implementsInterface = typeRecord != null ? RelayModernRecord.getValue(typeRecord, abstractKey) : null;
                this._isWithinUnmatchedTypeRefinement = parentIsWithinUnmatchedTypeRefinement || implementsInterface === false;
                this._traverseSelections(selection.selections, record, data);
                this._isWithinUnmatchedTypeRefinement = parentIsWithinUnmatchedTypeRefinement;
                if (implementsInterface === false) {
                  this._isMissingData = parentIsMissingData;
                } else if (implementsInterface == null) {
                  this._isMissingData = true;
                }
              } else {
                this._traverseSelections(selection.selections, record, data);
              }
              break;
            }
            case RELAY_RESOLVER: {
              if (!RelayFeatureFlags.ENABLE_RELAY_RESOLVERS) {
                throw new Error("Relay Resolver fields are not yet supported.");
              }
              this._readResolverField(selection, record, data);
              break;
            }
            case FRAGMENT_SPREAD:
              this._createFragmentPointer(selection, record, data);
              break;
            case MODULE_IMPORT:
              this._readModuleImport(selection, record, data);
              break;
            case INLINE_DATA_FRAGMENT_SPREAD:
              this._createInlineDataOrResolverFragmentPointer(selection, record, data);
              break;
            case DEFER:
            case CLIENT_EXTENSION: {
              var isMissingData = this._isMissingData;
              var _hasExpectedData2 = this._traverseSelections(selection.selections, record, data);
              this._isMissingData = isMissingData;
              if (!_hasExpectedData2) {
                return false;
              }
              break;
            }
            case STREAM: {
              var _hasExpectedData3 = this._traverseSelections(selection.selections, record, data);
              if (!_hasExpectedData3) {
                return false;
              }
              break;
            }
            case FLIGHT_FIELD:
              if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
                this._readFlightField(selection, record, data);
              } else {
                throw new Error("Flight fields are not yet supported.");
              }
              break;
            default:
              selection;
              true ? true ? invariant(false, "RelayReader(): Unexpected ast kind `%s`.", selection.kind) : invariant(false) : void 0;
          }
        }
        return true;
      };
      _proto._readRequiredField = function _readRequiredField(selection, record, data) {
        switch (selection.field.kind) {
          case SCALAR_FIELD:
            return this._readScalar(selection.field, record, data);
          case LINKED_FIELD:
            if (selection.field.plural) {
              return this._readPluralLink(selection.field, record, data);
            } else {
              return this._readLink(selection.field, record, data);
            }
          default:
            selection.field.kind;
            true ? true ? invariant(false, "RelayReader(): Unexpected ast kind `%s`.", selection.kind) : invariant(false) : void 0;
        }
      };
      _proto._readResolverField = function _readResolverField(selection, record, data) {
        var _this = this;
        var name = selection.name, alias = selection.alias, resolverModule = selection.resolverModule, fragment = selection.fragment;
        var key = {
          __id: RelayModernRecord.getDataID(record),
          __fragmentOwner: this._owner,
          __fragments: (0, _defineProperty2["default"])({}, fragment.name, {})
        };
        var resolverContext = {
          getDataForResolverFragment: function getDataForResolverFragment(singularReaderSelector) {
            var _resolverFragmentData;
            var resolverFragmentData = {};
            _this._createInlineDataOrResolverFragmentPointer(singularReaderSelector.node, record, resolverFragmentData);
            var answer = (_resolverFragmentData = resolverFragmentData[FRAGMENTS_KEY]) === null || _resolverFragmentData === void 0 ? void 0 : _resolverFragmentData[fragment.name];
            !(typeof answer === "object" && answer !== null) ? true ? invariant(false, "Expected reader data to contain a __fragments property with a property for the fragment named ".concat(fragment.name, ", but it is missing.")) : invariant(false) : void 0;
            return answer;
          }
        };
        var resolverResult = withResolverContext(resolverContext, function() {
          return resolverModule(key);
        });
        data[alias !== null && alias !== void 0 ? alias : name] = resolverResult;
        return resolverResult;
      };
      _proto._readFlightField = function _readFlightField(field, record, data) {
        var _field$alias;
        var applicationName = (_field$alias = field.alias) !== null && _field$alias !== void 0 ? _field$alias : field.name;
        var storageKey = getStorageKey(field, this._variables);
        var reactFlightClientResponseRecordID = RelayModernRecord.getLinkedRecordID(record, storageKey);
        if (reactFlightClientResponseRecordID == null) {
          data[applicationName] = reactFlightClientResponseRecordID;
          if (reactFlightClientResponseRecordID === void 0) {
            this._isMissingData = true;
          }
          return reactFlightClientResponseRecordID;
        }
        var reactFlightClientResponseRecord = this._recordSource.get(reactFlightClientResponseRecordID);
        this._seenRecords.add(reactFlightClientResponseRecordID);
        if (reactFlightClientResponseRecord == null) {
          data[applicationName] = reactFlightClientResponseRecord;
          if (reactFlightClientResponseRecord === void 0) {
            this._isMissingData = true;
          }
          return reactFlightClientResponseRecord;
        }
        var clientResponse = getReactFlightClientResponse(reactFlightClientResponseRecord);
        data[applicationName] = clientResponse;
        return clientResponse;
      };
      _proto._readScalar = function _readScalar(field, record, data) {
        var _field$alias2;
        var applicationName = (_field$alias2 = field.alias) !== null && _field$alias2 !== void 0 ? _field$alias2 : field.name;
        var storageKey = getStorageKey(field, this._variables);
        var value = RelayModernRecord.getValue(record, storageKey);
        if (value === void 0) {
          this._isMissingData = true;
        }
        data[applicationName] = value;
        return value;
      };
      _proto._readLink = function _readLink(field, record, data) {
        var _field$alias3;
        var applicationName = (_field$alias3 = field.alias) !== null && _field$alias3 !== void 0 ? _field$alias3 : field.name;
        var storageKey = getStorageKey(field, this._variables);
        var linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);
        if (linkedID == null) {
          data[applicationName] = linkedID;
          if (linkedID === void 0) {
            this._isMissingData = true;
          }
          return linkedID;
        }
        var prevData = data[applicationName];
        !(prevData == null || typeof prevData === "object") ? true ? invariant(false, "RelayReader(): Expected data for field `%s` on record `%s` to be an object, got `%s`.", applicationName, RelayModernRecord.getDataID(record), prevData) : invariant(false) : void 0;
        var value = this._traverse(field, linkedID, prevData);
        data[applicationName] = value;
        return value;
      };
      _proto._readPluralLink = function _readPluralLink(field, record, data) {
        var _this2 = this;
        var _field$alias4;
        var applicationName = (_field$alias4 = field.alias) !== null && _field$alias4 !== void 0 ? _field$alias4 : field.name;
        var storageKey = getStorageKey(field, this._variables);
        var linkedIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);
        if (linkedIDs == null) {
          data[applicationName] = linkedIDs;
          if (linkedIDs === void 0) {
            this._isMissingData = true;
          }
          return linkedIDs;
        }
        var prevData = data[applicationName];
        !(prevData == null || Array.isArray(prevData)) ? true ? invariant(false, "RelayReader(): Expected data for field `%s` on record `%s` to be an array, got `%s`.", applicationName, RelayModernRecord.getDataID(record), prevData) : invariant(false) : void 0;
        var linkedArray = prevData || [];
        linkedIDs.forEach(function(linkedID, nextIndex) {
          if (linkedID == null) {
            if (linkedID === void 0) {
              _this2._isMissingData = true;
            }
            linkedArray[nextIndex] = linkedID;
            return;
          }
          var prevItem = linkedArray[nextIndex];
          !(prevItem == null || typeof prevItem === "object") ? true ? invariant(false, "RelayReader(): Expected data for field `%s` on record `%s` to be an object, got `%s`.", applicationName, RelayModernRecord.getDataID(record), prevItem) : invariant(false) : void 0;
          linkedArray[nextIndex] = _this2._traverse(field, linkedID, prevItem);
        });
        data[applicationName] = linkedArray;
        return linkedArray;
      };
      _proto._readModuleImport = function _readModuleImport(moduleImport, record, data) {
        var componentKey = getModuleComponentKey(moduleImport.documentName);
        var component = RelayModernRecord.getValue(record, componentKey);
        if (component == null) {
          if (component === void 0) {
            this._isMissingData = true;
          }
          return;
        }
        this._createFragmentPointer({
          kind: "FragmentSpread",
          name: moduleImport.fragmentName,
          args: null
        }, record, data);
        data[FRAGMENT_PROP_NAME_KEY] = moduleImport.fragmentPropName;
        data[MODULE_COMPONENT_KEY] = component;
      };
      _proto._createFragmentPointer = function _createFragmentPointer(fragmentSpread, record, data) {
        var fragmentPointers = data[FRAGMENTS_KEY];
        if (fragmentPointers == null) {
          fragmentPointers = data[FRAGMENTS_KEY] = {};
        }
        !(typeof fragmentPointers === "object" && fragmentPointers != null) ? true ? invariant(false, "RelayReader: Expected fragment spread data to be an object, got `%s`.", fragmentPointers) : invariant(false) : void 0;
        if (data[ID_KEY] == null) {
          data[ID_KEY] = RelayModernRecord.getDataID(record);
        }
        fragmentPointers[fragmentSpread.name] = fragmentSpread.args ? getArgumentValues(fragmentSpread.args, this._variables) : {};
        data[FRAGMENT_OWNER_KEY] = this._owner;
        if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
          data[IS_WITHIN_UNMATCHED_TYPE_REFINEMENT] = this._isWithinUnmatchedTypeRefinement;
        }
      };
      _proto._createInlineDataOrResolverFragmentPointer = function _createInlineDataOrResolverFragmentPointer(fragmentSpreadOrFragment, record, data) {
        var fragmentPointers = data[FRAGMENTS_KEY];
        if (fragmentPointers == null) {
          fragmentPointers = data[FRAGMENTS_KEY] = {};
        }
        !(typeof fragmentPointers === "object" && fragmentPointers != null) ? true ? invariant(false, "RelayReader: Expected fragment spread data to be an object, got `%s`.", fragmentPointers) : invariant(false) : void 0;
        if (data[ID_KEY] == null) {
          data[ID_KEY] = RelayModernRecord.getDataID(record);
        }
        var inlineData = {};
        this._traverseSelections(fragmentSpreadOrFragment.selections, record, inlineData);
        fragmentPointers[fragmentSpreadOrFragment.name] = inlineData;
      };
      return RelayReader2;
    }();
    module.exports = {
      read
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordSourceMutator.js
var require_RelayRecordSourceMutator = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordSourceMutator.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayModernRecord = require_RelayModernRecord();
    var invariant = require_browser();
    var _require = require_RelayRecordState();
    var EXISTENT = _require.EXISTENT;
    var RelayRecordSourceMutator = function() {
      function RelayRecordSourceMutator2(base, sink) {
        this.__sources = [sink, base];
        this._base = base;
        this._sink = sink;
      }
      var _proto = RelayRecordSourceMutator2.prototype;
      _proto.unstable_getRawRecordWithChanges = function unstable_getRawRecordWithChanges(dataID) {
        var baseRecord = this._base.get(dataID);
        var sinkRecord = this._sink.get(dataID);
        if (sinkRecord === void 0) {
          if (baseRecord == null) {
            return baseRecord;
          }
          var nextRecord = RelayModernRecord.clone(baseRecord);
          if (true) {
            RelayModernRecord.freeze(nextRecord);
          }
          return nextRecord;
        } else if (sinkRecord === null) {
          return null;
        } else if (baseRecord != null) {
          var _nextRecord = RelayModernRecord.update(baseRecord, sinkRecord);
          if (true) {
            if (_nextRecord !== baseRecord) {
              RelayModernRecord.freeze(_nextRecord);
            }
          }
          return _nextRecord;
        } else {
          var _nextRecord2 = RelayModernRecord.clone(sinkRecord);
          if (true) {
            RelayModernRecord.freeze(_nextRecord2);
          }
          return _nextRecord2;
        }
      };
      _proto._getSinkRecord = function _getSinkRecord(dataID) {
        var sinkRecord = this._sink.get(dataID);
        if (!sinkRecord) {
          var baseRecord = this._base.get(dataID);
          !baseRecord ? true ? invariant(false, "RelayRecordSourceMutator: Cannot modify non-existent record `%s`.", dataID) : invariant(false) : void 0;
          sinkRecord = RelayModernRecord.create(dataID, RelayModernRecord.getType(baseRecord));
          this._sink.set(dataID, sinkRecord);
        }
        return sinkRecord;
      };
      _proto.copyFields = function copyFields(sourceID, sinkID) {
        var sinkSource = this._sink.get(sourceID);
        var baseSource = this._base.get(sourceID);
        !(sinkSource || baseSource) ? true ? invariant(false, "RelayRecordSourceMutator#copyFields(): Cannot copy fields from non-existent record `%s`.", sourceID) : invariant(false) : void 0;
        var sink = this._getSinkRecord(sinkID);
        if (baseSource) {
          RelayModernRecord.copyFields(baseSource, sink);
        }
        if (sinkSource) {
          RelayModernRecord.copyFields(sinkSource, sink);
        }
      };
      _proto.copyFieldsFromRecord = function copyFieldsFromRecord(record, sinkID) {
        var sink = this._getSinkRecord(sinkID);
        RelayModernRecord.copyFields(record, sink);
      };
      _proto.create = function create(dataID, typeName) {
        !(this._base.getStatus(dataID) !== EXISTENT && this._sink.getStatus(dataID) !== EXISTENT) ? true ? invariant(false, "RelayRecordSourceMutator#create(): Cannot create a record with id `%s`, this record already exists.", dataID) : invariant(false) : void 0;
        var record = RelayModernRecord.create(dataID, typeName);
        this._sink.set(dataID, record);
      };
      _proto["delete"] = function _delete(dataID) {
        this._sink["delete"](dataID);
      };
      _proto.getStatus = function getStatus(dataID) {
        return this._sink.has(dataID) ? this._sink.getStatus(dataID) : this._base.getStatus(dataID);
      };
      _proto.getType = function getType(dataID) {
        for (var ii = 0; ii < this.__sources.length; ii++) {
          var record = this.__sources[ii].get(dataID);
          if (record) {
            return RelayModernRecord.getType(record);
          } else if (record === null) {
            return null;
          }
        }
      };
      _proto.getValue = function getValue(dataID, storageKey) {
        for (var ii = 0; ii < this.__sources.length; ii++) {
          var record = this.__sources[ii].get(dataID);
          if (record) {
            var value = RelayModernRecord.getValue(record, storageKey);
            if (value !== void 0) {
              return value;
            }
          } else if (record === null) {
            return null;
          }
        }
      };
      _proto.setValue = function setValue(dataID, storageKey, value) {
        var sinkRecord = this._getSinkRecord(dataID);
        RelayModernRecord.setValue(sinkRecord, storageKey, value);
      };
      _proto.getLinkedRecordID = function getLinkedRecordID(dataID, storageKey) {
        for (var ii = 0; ii < this.__sources.length; ii++) {
          var record = this.__sources[ii].get(dataID);
          if (record) {
            var linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);
            if (linkedID !== void 0) {
              return linkedID;
            }
          } else if (record === null) {
            return null;
          }
        }
      };
      _proto.setLinkedRecordID = function setLinkedRecordID(dataID, storageKey, linkedID) {
        var sinkRecord = this._getSinkRecord(dataID);
        RelayModernRecord.setLinkedRecordID(sinkRecord, storageKey, linkedID);
      };
      _proto.getLinkedRecordIDs = function getLinkedRecordIDs(dataID, storageKey) {
        for (var ii = 0; ii < this.__sources.length; ii++) {
          var record = this.__sources[ii].get(dataID);
          if (record) {
            var linkedIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);
            if (linkedIDs !== void 0) {
              return linkedIDs;
            }
          } else if (record === null) {
            return null;
          }
        }
      };
      _proto.setLinkedRecordIDs = function setLinkedRecordIDs(dataID, storageKey, linkedIDs) {
        var sinkRecord = this._getSinkRecord(dataID);
        RelayModernRecord.setLinkedRecordIDs(sinkRecord, storageKey, linkedIDs);
      };
      return RelayRecordSourceMutator2;
    }();
    module.exports = RelayRecordSourceMutator;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordProxy.js
var require_RelayRecordProxy = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordProxy.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var _require = require_ClientID();
    var generateClientID = _require.generateClientID;
    var _require2 = require_RelayStoreUtils();
    var getStableStorageKey = _require2.getStableStorageKey;
    var RelayRecordProxy = function() {
      function RelayRecordProxy2(source, mutator, dataID) {
        this._dataID = dataID;
        this._mutator = mutator;
        this._source = source;
      }
      var _proto = RelayRecordProxy2.prototype;
      _proto.copyFieldsFrom = function copyFieldsFrom(source) {
        this._mutator.copyFields(source.getDataID(), this._dataID);
      };
      _proto.getDataID = function getDataID() {
        return this._dataID;
      };
      _proto.getType = function getType() {
        var type = this._mutator.getType(this._dataID);
        !(type != null) ? true ? invariant(false, "RelayRecordProxy: Cannot get the type of deleted record `%s`.", this._dataID) : invariant(false) : void 0;
        return type;
      };
      _proto.getValue = function getValue(name, args) {
        var storageKey = getStableStorageKey(name, args);
        return this._mutator.getValue(this._dataID, storageKey);
      };
      _proto.setValue = function setValue(value, name, args) {
        !isValidLeafValue(value) ? true ? invariant(false, "RelayRecordProxy#setValue(): Expected a scalar or array of scalars, got `%s`.", JSON.stringify(value)) : invariant(false) : void 0;
        var storageKey = getStableStorageKey(name, args);
        this._mutator.setValue(this._dataID, storageKey, value);
        return this;
      };
      _proto.getLinkedRecord = function getLinkedRecord(name, args) {
        var storageKey = getStableStorageKey(name, args);
        var linkedID = this._mutator.getLinkedRecordID(this._dataID, storageKey);
        return linkedID != null ? this._source.get(linkedID) : linkedID;
      };
      _proto.setLinkedRecord = function setLinkedRecord(record, name, args) {
        !(record instanceof RelayRecordProxy2) ? true ? invariant(false, "RelayRecordProxy#setLinkedRecord(): Expected a record, got `%s`.", record) : invariant(false) : void 0;
        var storageKey = getStableStorageKey(name, args);
        var linkedID = record.getDataID();
        this._mutator.setLinkedRecordID(this._dataID, storageKey, linkedID);
        return this;
      };
      _proto.getOrCreateLinkedRecord = function getOrCreateLinkedRecord(name, typeName, args) {
        var linkedRecord = this.getLinkedRecord(name, args);
        if (!linkedRecord) {
          var _this$_source$get;
          var storageKey = getStableStorageKey(name, args);
          var clientID = generateClientID(this.getDataID(), storageKey);
          linkedRecord = (_this$_source$get = this._source.get(clientID)) !== null && _this$_source$get !== void 0 ? _this$_source$get : this._source.create(clientID, typeName);
          this.setLinkedRecord(linkedRecord, name, args);
        }
        return linkedRecord;
      };
      _proto.getLinkedRecords = function getLinkedRecords(name, args) {
        var _this = this;
        var storageKey = getStableStorageKey(name, args);
        var linkedIDs = this._mutator.getLinkedRecordIDs(this._dataID, storageKey);
        if (linkedIDs == null) {
          return linkedIDs;
        }
        return linkedIDs.map(function(linkedID) {
          return linkedID != null ? _this._source.get(linkedID) : linkedID;
        });
      };
      _proto.setLinkedRecords = function setLinkedRecords(records, name, args) {
        !Array.isArray(records) ? true ? invariant(false, "RelayRecordProxy#setLinkedRecords(): Expected records to be an array, got `%s`.", records) : invariant(false) : void 0;
        var storageKey = getStableStorageKey(name, args);
        var linkedIDs = records.map(function(record) {
          return record && record.getDataID();
        });
        this._mutator.setLinkedRecordIDs(this._dataID, storageKey, linkedIDs);
        return this;
      };
      _proto.invalidateRecord = function invalidateRecord() {
        this._source.markIDForInvalidation(this._dataID);
      };
      return RelayRecordProxy2;
    }();
    function isValidLeafValue(value) {
      return value == null || typeof value !== "object" || Array.isArray(value) && value.every(isValidLeafValue);
    }
    module.exports = RelayRecordProxy;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordSourceProxy.js
var require_RelayRecordSourceProxy = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordSourceProxy.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayModernRecord = require_RelayModernRecord();
    var RelayRecordProxy = require_RelayRecordProxy();
    var invariant = require_browser();
    var _require = require_RelayRecordState();
    var EXISTENT = _require.EXISTENT;
    var NONEXISTENT = _require.NONEXISTENT;
    var _require2 = require_RelayStoreUtils();
    var ROOT_ID = _require2.ROOT_ID;
    var ROOT_TYPE = _require2.ROOT_TYPE;
    var RelayRecordSourceProxy = function() {
      function RelayRecordSourceProxy2(mutator, getDataID, handlerProvider) {
        this.__mutator = mutator;
        this._handlerProvider = handlerProvider || null;
        this._proxies = {};
        this._getDataID = getDataID;
        this._invalidatedStore = false;
        this._idsMarkedForInvalidation = new Set();
      }
      var _proto = RelayRecordSourceProxy2.prototype;
      _proto.publishSource = function publishSource(source, fieldPayloads) {
        var _this = this;
        var dataIDs = source.getRecordIDs();
        dataIDs.forEach(function(dataID) {
          var status = source.getStatus(dataID);
          if (status === EXISTENT) {
            var sourceRecord = source.get(dataID);
            if (sourceRecord) {
              if (_this.__mutator.getStatus(dataID) !== EXISTENT) {
                _this.create(dataID, RelayModernRecord.getType(sourceRecord));
              }
              _this.__mutator.copyFieldsFromRecord(sourceRecord, dataID);
            }
          } else if (status === NONEXISTENT) {
            _this["delete"](dataID);
          }
        });
        if (fieldPayloads && fieldPayloads.length) {
          fieldPayloads.forEach(function(fieldPayload) {
            var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
            !handler ? true ? invariant(false, "RelayModernEnvironment: Expected a handler to be provided for handle `%s`.", fieldPayload.handle) : invariant(false) : void 0;
            handler.update(_this, fieldPayload);
          });
        }
      };
      _proto.create = function create(dataID, typeName) {
        this.__mutator.create(dataID, typeName);
        delete this._proxies[dataID];
        var record = this.get(dataID);
        !record ? true ? invariant(false, "RelayRecordSourceProxy#create(): Expected the created record to exist.") : invariant(false) : void 0;
        return record;
      };
      _proto["delete"] = function _delete(dataID) {
        !(dataID !== ROOT_ID) ? true ? invariant(false, "RelayRecordSourceProxy#delete(): Cannot delete the root record.") : invariant(false) : void 0;
        delete this._proxies[dataID];
        this.__mutator["delete"](dataID);
      };
      _proto.get = function get(dataID) {
        if (!this._proxies.hasOwnProperty(dataID)) {
          var status = this.__mutator.getStatus(dataID);
          if (status === EXISTENT) {
            this._proxies[dataID] = new RelayRecordProxy(this, this.__mutator, dataID);
          } else {
            this._proxies[dataID] = status === NONEXISTENT ? null : void 0;
          }
        }
        return this._proxies[dataID];
      };
      _proto.getRoot = function getRoot() {
        var root = this.get(ROOT_ID);
        if (!root) {
          root = this.create(ROOT_ID, ROOT_TYPE);
        }
        !(root && root.getType() === ROOT_TYPE) ? true ? invariant(false, "RelayRecordSourceProxy#getRoot(): Expected the source to contain a root record, %s.", root == null ? "no root record found" : "found a root record of type `".concat(root.getType(), "`")) : invariant(false) : void 0;
        return root;
      };
      _proto.invalidateStore = function invalidateStore() {
        this._invalidatedStore = true;
      };
      _proto.isStoreMarkedForInvalidation = function isStoreMarkedForInvalidation() {
        return this._invalidatedStore;
      };
      _proto.markIDForInvalidation = function markIDForInvalidation(dataID) {
        this._idsMarkedForInvalidation.add(dataID);
      };
      _proto.getIDsMarkedForInvalidation = function getIDsMarkedForInvalidation() {
        return this._idsMarkedForInvalidation;
      };
      return RelayRecordSourceProxy2;
    }();
    module.exports = RelayRecordSourceProxy;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordSourceSelectorProxy.js
var require_RelayRecordSourceSelectorProxy = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/RelayRecordSourceSelectorProxy.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var _require = require_RelayStoreUtils();
    var getStorageKey = _require.getStorageKey;
    var ROOT_TYPE = _require.ROOT_TYPE;
    var RelayRecordSourceSelectorProxy = function() {
      function RelayRecordSourceSelectorProxy2(mutator, recordSource, readSelector) {
        this.__mutator = mutator;
        this.__recordSource = recordSource;
        this._readSelector = readSelector;
      }
      var _proto = RelayRecordSourceSelectorProxy2.prototype;
      _proto.create = function create(dataID, typeName) {
        return this.__recordSource.create(dataID, typeName);
      };
      _proto["delete"] = function _delete(dataID) {
        this.__recordSource["delete"](dataID);
      };
      _proto.get = function get(dataID) {
        return this.__recordSource.get(dataID);
      };
      _proto.getRoot = function getRoot() {
        return this.__recordSource.getRoot();
      };
      _proto.getOperationRoot = function getOperationRoot() {
        var root = this.__recordSource.get(this._readSelector.dataID);
        if (!root) {
          root = this.__recordSource.create(this._readSelector.dataID, ROOT_TYPE);
        }
        return root;
      };
      _proto._getRootField = function _getRootField(selector, fieldName, plural) {
        var field = selector.node.selections.find(function(selection) {
          return selection.kind === "LinkedField" && selection.name === fieldName;
        });
        !(field && field.kind === "LinkedField") ? true ? invariant(false, "RelayRecordSourceSelectorProxy#getRootField(): Cannot find root field `%s`, no such field is defined on GraphQL document `%s`.", fieldName, selector.node.name) : invariant(false) : void 0;
        !(field.plural === plural) ? true ? invariant(false, "RelayRecordSourceSelectorProxy#getRootField(): Expected root field `%s` to be %s.", fieldName, plural ? "plural" : "singular") : invariant(false) : void 0;
        return field;
      };
      _proto.getRootField = function getRootField(fieldName) {
        var field = this._getRootField(this._readSelector, fieldName, false);
        var storageKey = getStorageKey(field, this._readSelector.variables);
        return this.getOperationRoot().getLinkedRecord(storageKey);
      };
      _proto.getPluralRootField = function getPluralRootField(fieldName) {
        var field = this._getRootField(this._readSelector, fieldName, true);
        var storageKey = getStorageKey(field, this._readSelector.variables);
        return this.getOperationRoot().getLinkedRecords(storageKey);
      };
      _proto.invalidateStore = function invalidateStore() {
        this.__recordSource.invalidateStore();
      };
      return RelayRecordSourceSelectorProxy2;
    }();
    module.exports = RelayRecordSourceSelectorProxy;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayPublishQueue.js
var require_RelayPublishQueue = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayPublishQueue.js"(exports, module) {
    init_define_global();
    "use strict";
    var _global$ErrorUtils$ap;
    var _global$ErrorUtils;
    var RelayReader = require_RelayReader();
    var RelayRecordSource = require_RelayRecordSource();
    var RelayRecordSourceMutator = require_RelayRecordSourceMutator();
    var RelayRecordSourceProxy = require_RelayRecordSourceProxy();
    var RelayRecordSourceSelectorProxy = require_RelayRecordSourceSelectorProxy();
    var invariant = require_browser();
    var warning = require_warning();
    var applyWithGuard = (_global$ErrorUtils$ap = (_global$ErrorUtils = define_global_default.ErrorUtils) === null || _global$ErrorUtils === void 0 ? void 0 : _global$ErrorUtils.applyWithGuard) !== null && _global$ErrorUtils$ap !== void 0 ? _global$ErrorUtils$ap : function(callback, context, args, onError, name) {
      return callback.apply(context, args);
    };
    var RelayPublishQueue = function() {
      function RelayPublishQueue2(store, handlerProvider, getDataID) {
        this._hasStoreSnapshot = false;
        this._handlerProvider = handlerProvider || null;
        this._pendingBackupRebase = false;
        this._pendingData = new Set();
        this._pendingOptimisticUpdates = new Set();
        this._store = store;
        this._appliedOptimisticUpdates = new Set();
        this._gcHold = null;
        this._getDataID = getDataID;
      }
      var _proto = RelayPublishQueue2.prototype;
      _proto.applyUpdate = function applyUpdate(updater) {
        !(!this._appliedOptimisticUpdates.has(updater) && !this._pendingOptimisticUpdates.has(updater)) ? true ? invariant(false, "RelayPublishQueue: Cannot apply the same update function more than once concurrently.") : invariant(false) : void 0;
        this._pendingOptimisticUpdates.add(updater);
      };
      _proto.revertUpdate = function revertUpdate(updater) {
        if (this._pendingOptimisticUpdates.has(updater)) {
          this._pendingOptimisticUpdates["delete"](updater);
        } else if (this._appliedOptimisticUpdates.has(updater)) {
          this._pendingBackupRebase = true;
          this._appliedOptimisticUpdates["delete"](updater);
        }
      };
      _proto.revertAll = function revertAll() {
        this._pendingBackupRebase = true;
        this._pendingOptimisticUpdates.clear();
        this._appliedOptimisticUpdates.clear();
      };
      _proto.commitPayload = function commitPayload(operation, payload, updater) {
        this._pendingBackupRebase = true;
        this._pendingData.add({
          kind: "payload",
          operation,
          payload,
          updater
        });
      };
      _proto.commitUpdate = function commitUpdate(updater) {
        this._pendingBackupRebase = true;
        this._pendingData.add({
          kind: "updater",
          updater
        });
      };
      _proto.commitSource = function commitSource(source) {
        this._pendingBackupRebase = true;
        this._pendingData.add({
          kind: "source",
          source
        });
      };
      _proto.run = function run(sourceOperation) {
        if (true) {
          true ? warning(this._isRunning !== true, "A store update was detected within another store update. Please make sure new store updates aren't being executed within an updater function for a different update.") : void 0;
          this._isRunning = true;
        }
        if (this._pendingBackupRebase) {
          if (this._hasStoreSnapshot) {
            this._store.restore();
            this._hasStoreSnapshot = false;
          }
        }
        var invalidatedStore = this._commitData();
        if (this._pendingOptimisticUpdates.size || this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
          if (!this._hasStoreSnapshot) {
            this._store.snapshot();
            this._hasStoreSnapshot = true;
          }
          this._applyUpdates();
        }
        this._pendingBackupRebase = false;
        if (this._appliedOptimisticUpdates.size > 0) {
          if (!this._gcHold) {
            this._gcHold = this._store.holdGC();
          }
        } else {
          if (this._gcHold) {
            this._gcHold.dispose();
            this._gcHold = null;
          }
        }
        if (true) {
          this._isRunning = false;
        }
        return this._store.notify(sourceOperation, invalidatedStore);
      };
      _proto._publishSourceFromPayload = function _publishSourceFromPayload(pendingPayload) {
        var _this = this;
        var payload = pendingPayload.payload, operation = pendingPayload.operation, updater = pendingPayload.updater;
        var source = payload.source, fieldPayloads = payload.fieldPayloads;
        var mutator = new RelayRecordSourceMutator(this._store.getSource(), source);
        var recordSourceProxy = new RelayRecordSourceProxy(mutator, this._getDataID);
        if (fieldPayloads && fieldPayloads.length) {
          fieldPayloads.forEach(function(fieldPayload) {
            var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
            !handler ? true ? invariant(false, "RelayModernEnvironment: Expected a handler to be provided for handle `%s`.", fieldPayload.handle) : invariant(false) : void 0;
            handler.update(recordSourceProxy, fieldPayload);
          });
        }
        if (updater) {
          var selector = operation.fragment;
          !(selector != null) ? true ? invariant(false, "RelayModernEnvironment: Expected a selector to be provided with updater function.") : invariant(false) : void 0;
          var recordSourceSelectorProxy = new RelayRecordSourceSelectorProxy(mutator, recordSourceProxy, selector);
          var selectorData = lookupSelector(source, selector);
          updater(recordSourceSelectorProxy, selectorData);
        }
        var idsMarkedForInvalidation = recordSourceProxy.getIDsMarkedForInvalidation();
        this._store.publish(source, idsMarkedForInvalidation);
        return recordSourceProxy.isStoreMarkedForInvalidation();
      };
      _proto._commitData = function _commitData() {
        var _this2 = this;
        if (!this._pendingData.size) {
          return false;
        }
        var invalidatedStore = false;
        this._pendingData.forEach(function(data) {
          if (data.kind === "payload") {
            var payloadInvalidatedStore = _this2._publishSourceFromPayload(data);
            invalidatedStore = invalidatedStore || payloadInvalidatedStore;
          } else if (data.kind === "source") {
            var source = data.source;
            _this2._store.publish(source);
          } else {
            var updater = data.updater;
            var sink = RelayRecordSource.create();
            var mutator = new RelayRecordSourceMutator(_this2._store.getSource(), sink);
            var recordSourceProxy = new RelayRecordSourceProxy(mutator, _this2._getDataID);
            applyWithGuard(updater, null, [recordSourceProxy], null, "RelayPublishQueue:commitData");
            invalidatedStore = invalidatedStore || recordSourceProxy.isStoreMarkedForInvalidation();
            var idsMarkedForInvalidation = recordSourceProxy.getIDsMarkedForInvalidation();
            _this2._store.publish(sink, idsMarkedForInvalidation);
          }
        });
        this._pendingData.clear();
        return invalidatedStore;
      };
      _proto._applyUpdates = function _applyUpdates() {
        var _this3 = this;
        var sink = RelayRecordSource.create();
        var mutator = new RelayRecordSourceMutator(this._store.getSource(), sink);
        var recordSourceProxy = new RelayRecordSourceProxy(mutator, this._getDataID, this._handlerProvider);
        var processUpdate = function processUpdate2(optimisticUpdate) {
          if (optimisticUpdate.storeUpdater) {
            var storeUpdater = optimisticUpdate.storeUpdater;
            applyWithGuard(storeUpdater, null, [recordSourceProxy], null, "RelayPublishQueue:applyUpdates");
          } else {
            var operation = optimisticUpdate.operation, payload = optimisticUpdate.payload, updater = optimisticUpdate.updater;
            var source = payload.source, fieldPayloads = payload.fieldPayloads;
            var recordSourceSelectorProxy = new RelayRecordSourceSelectorProxy(mutator, recordSourceProxy, operation.fragment);
            var selectorData;
            if (source) {
              recordSourceProxy.publishSource(source, fieldPayloads);
              selectorData = lookupSelector(source, operation.fragment);
            }
            if (updater) {
              applyWithGuard(updater, null, [recordSourceSelectorProxy, selectorData], null, "RelayPublishQueue:applyUpdates");
            }
          }
        };
        if (this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
          this._appliedOptimisticUpdates.forEach(processUpdate);
        }
        if (this._pendingOptimisticUpdates.size) {
          this._pendingOptimisticUpdates.forEach(function(optimisticUpdate) {
            processUpdate(optimisticUpdate);
            _this3._appliedOptimisticUpdates.add(optimisticUpdate);
          });
          this._pendingOptimisticUpdates.clear();
        }
        this._store.publish(sink);
      };
      return RelayPublishQueue2;
    }();
    function lookupSelector(source, selector) {
      var selectorData = RelayReader.read(source, selector).data;
      if (true) {
        var deepFreeze = require_deepFreeze();
        if (selectorData) {
          deepFreeze(selectorData);
        }
      }
      return selectorData;
    }
    module.exports = RelayPublishQueue;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/ViewerPattern.js
var require_ViewerPattern = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/ViewerPattern.js"(exports, module) {
    init_define_global();
    "use strict";
    var _require = require_ClientID();
    var generateClientID = _require.generateClientID;
    var _require2 = require_RelayStoreUtils();
    var ROOT_ID = _require2.ROOT_ID;
    var VIEWER_ID = generateClientID(ROOT_ID, "viewer");
    var VIEWER_TYPE = "Viewer";
    module.exports = {
      VIEWER_ID,
      VIEWER_TYPE
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/defaultGetDataID.js
var require_defaultGetDataID = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/defaultGetDataID.js"(exports, module) {
    init_define_global();
    "use strict";
    var _require = require_ViewerPattern();
    var VIEWER_ID = _require.VIEWER_ID;
    var VIEWER_TYPE = _require.VIEWER_TYPE;
    function defaultGetDataID(fieldValue, typeName) {
      if (typeName === VIEWER_TYPE) {
        return fieldValue.id == null ? VIEWER_ID : fieldValue.id;
      }
      return fieldValue.id;
    }
    module.exports = defaultGetDataID;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/defaultRequiredFieldLogger.js
var require_defaultRequiredFieldLogger = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/defaultRequiredFieldLogger.js"(exports, module) {
    init_define_global();
    "use strict";
    var defaultRequiredFieldLogger = function defaultRequiredFieldLogger2(event) {
      if (event.kind === "missing_field.log") {
        throw new Error("Relay Environment Configuration Error (dev only): `@required(action: LOG)` requires that the Relay Environment be configured with a `requiredFieldLogger`.");
      }
    };
    module.exports = defaultRequiredFieldLogger;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/generateID.js
var require_generateID = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/generateID.js"(exports, module) {
    init_define_global();
    "use strict";
    var id = 1e5;
    function generateID() {
      return id++;
    }
    module.exports = generateID;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/StoreInspector.js
var require_StoreInspector = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/StoreInspector.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var inspect = function inspect2() {
    };
    if (true) {
      formattersInstalled = false;
      installDevtoolFormatters = function installDevtoolFormatters2() {
        var _window$devtoolsForma;
        if (formattersInstalled) {
          return;
        }
        formattersInstalled = true;
        if (window.devtoolsFormatters == null) {
          window.devtoolsFormatters = [];
        }
        if (!Array.isArray(window.devtoolsFormatters)) {
          return;
        }
        console.info('Make sure to select "Enable custom formatters" in the Chrome Developer Tools settings, tab "Preferences" under the "Console" section.');
        (_window$devtoolsForma = window.devtoolsFormatters).push.apply(_window$devtoolsForma, (0, _toConsumableArray2["default"])(createFormatters()));
      };
      createFormatters = function createFormatters2() {
        var listStyle = {
          style: "list-style-type: none; padding: 0; margin: 0 0 0 12px; font-style: normal"
        };
        var keyStyle = {
          style: "rgb(136, 19, 145)"
        };
        var nullStyle = {
          style: "color: #777"
        };
        var reference = function reference2(object, config) {
          return object == null ? ["span", nullStyle, "undefined"] : ["object", {
            object,
            config
          }];
        };
        var renderRecordHeader = function renderRecordHeader2(record) {
          return ["span", {
            style: "font-style: italic"
          }, record.__typename, ["span", nullStyle, ' {id: "', record.__id, '", \u2026}']];
        };
        var isRecord = function isRecord2(o) {
          return o != null && typeof o.__id === "string";
        };
        var RecordEntry = function RecordEntry2(key, value) {
          this.key = key;
          this.value = value;
        };
        var renderRecordEntries = function renderRecordEntries2(record) {
          var children = Object.keys(record).map(function(key) {
            return ["li", {}, ["object", {
              object: new RecordEntry(key, record[key])
            }]];
          });
          return ["ol", listStyle].concat((0, _toConsumableArray2["default"])(children));
        };
        var recordFormatter = {
          header: function header(obj) {
            if (!isRecord(obj)) {
              return null;
            }
            return renderRecordHeader(obj);
          },
          hasBody: function hasBody(obj) {
            return true;
          },
          body: function body(obj) {
            return renderRecordEntries(obj);
          }
        };
        var recordEntryFormatter = {
          header: function header(obj) {
            if (obj instanceof RecordEntry) {
              var value = isRecord(obj.value) ? renderRecordHeader(obj.value) : reference(obj.value);
              return ["span", keyStyle, obj.key, ": ", value];
            }
            return null;
          },
          hasBody: function hasBody(obj) {
            return isRecord(obj.value);
          },
          body: function body(obj) {
            return renderRecordEntries(obj.value);
          }
        };
        return [recordFormatter, recordEntryFormatter];
      };
      getWrappedRecord = function getWrappedRecord2(source, dataID) {
        var record = source.get(dataID);
        if (record == null) {
          return record;
        }
        return new Proxy((0, _objectSpread2["default"])({}, record), {
          get: function get(target, prop) {
            var value = target[prop];
            if (value == null) {
              return value;
            }
            if (typeof value === "object") {
              if (typeof value.__ref === "string") {
                return getWrappedRecord2(source, value.__ref);
              }
              if (Array.isArray(value.__refs)) {
                return value.__refs.map(function(ref) {
                  return getWrappedRecord2(source, ref);
                });
              }
            }
            return value;
          }
        });
      };
      inspect = function inspect2(environment, dataID) {
        installDevtoolFormatters();
        return getWrappedRecord(environment.getStore().getSource(), dataID !== null && dataID !== void 0 ? dataID : "client:root");
      };
    }
    var formattersInstalled;
    var installDevtoolFormatters;
    var createFormatters;
    var getWrappedRecord;
    module.exports = {
      inspect
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernEnvironment.js
var require_RelayModernEnvironment = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernEnvironment.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var OperationExecutor = require_OperationExecutor();
    var RelayDefaultHandlerProvider = require_RelayDefaultHandlerProvider();
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayObservable = require_RelayObservable();
    var RelayOperationTracker = require_RelayOperationTracker();
    var RelayPublishQueue = require_RelayPublishQueue();
    var RelayRecordSource = require_RelayRecordSource();
    var defaultGetDataID = require_defaultGetDataID();
    var defaultRequiredFieldLogger = require_defaultRequiredFieldLogger();
    var generateID = require_generateID();
    var invariant = require_browser();
    var RelayModernEnvironment = function() {
      function RelayModernEnvironment2(config) {
        var _this = this;
        var _config$log, _config$requiredField, _config$UNSTABLE_defa, _config$getDataID, _config$handlerProvid, _config$scheduler, _config$isServer, _config$operationTrac;
        this.configName = config.configName;
        this._treatMissingFieldsAsNull = config.treatMissingFieldsAsNull === true;
        var operationLoader = config.operationLoader;
        var reactFlightPayloadDeserializer = config.reactFlightPayloadDeserializer;
        var reactFlightServerErrorHandler = config.reactFlightServerErrorHandler;
        if (true) {
          if (operationLoader != null) {
            !(typeof operationLoader === "object" && typeof operationLoader.get === "function" && typeof operationLoader.load === "function") ? true ? invariant(false, "RelayModernEnvironment: Expected `operationLoader` to be an object with get() and load() functions, got `%s`.", operationLoader) : invariant(false) : void 0;
          }
          if (reactFlightPayloadDeserializer != null) {
            !(typeof reactFlightPayloadDeserializer === "function") ? true ? invariant(false, "RelayModernEnvironment: Expected `reactFlightPayloadDeserializer`  to be a function, got `%s`.", reactFlightPayloadDeserializer) : invariant(false) : void 0;
          }
        }
        this.__log = (_config$log = config.log) !== null && _config$log !== void 0 ? _config$log : emptyFunction;
        this.requiredFieldLogger = (_config$requiredField = config.requiredFieldLogger) !== null && _config$requiredField !== void 0 ? _config$requiredField : defaultRequiredFieldLogger;
        this._defaultRenderPolicy = ((_config$UNSTABLE_defa = config.UNSTABLE_defaultRenderPolicy) !== null && _config$UNSTABLE_defa !== void 0 ? _config$UNSTABLE_defa : RelayFeatureFlags.ENABLE_PARTIAL_RENDERING_DEFAULT === true) ? "partial" : "full";
        this._operationLoader = operationLoader;
        this._operationExecutions = new Map();
        this._network = this.__wrapNetworkWithLogObserver(config.network);
        this._getDataID = (_config$getDataID = config.getDataID) !== null && _config$getDataID !== void 0 ? _config$getDataID : defaultGetDataID;
        this._publishQueue = new RelayPublishQueue(config.store, (_config$handlerProvid = config.handlerProvider) !== null && _config$handlerProvid !== void 0 ? _config$handlerProvid : RelayDefaultHandlerProvider, this._getDataID);
        this._scheduler = (_config$scheduler = config.scheduler) !== null && _config$scheduler !== void 0 ? _config$scheduler : null;
        this._store = config.store;
        this.options = config.options;
        this._isServer = (_config$isServer = config.isServer) !== null && _config$isServer !== void 0 ? _config$isServer : false;
        this.__setNet = function(newNet) {
          return _this._network = _this.__wrapNetworkWithLogObserver(newNet);
        };
        if (true) {
          var _require = require_StoreInspector(), inspect = _require.inspect;
          this.DEBUG_inspect = function(dataID) {
            return inspect(_this, dataID);
          };
        }
        var _global = typeof define_global_default !== "undefined" ? define_global_default : typeof window !== "undefined" ? window : void 0;
        var devToolsHook = _global && _global.__RELAY_DEVTOOLS_HOOK__;
        if (devToolsHook) {
          devToolsHook.registerEnvironment(this);
        }
        this._missingFieldHandlers = config.missingFieldHandlers;
        this._operationTracker = (_config$operationTrac = config.operationTracker) !== null && _config$operationTrac !== void 0 ? _config$operationTrac : new RelayOperationTracker();
        this._reactFlightPayloadDeserializer = reactFlightPayloadDeserializer;
        this._reactFlightServerErrorHandler = reactFlightServerErrorHandler;
        this._shouldProcessClientComponents = config.shouldProcessClientComponents;
      }
      var _proto = RelayModernEnvironment2.prototype;
      _proto.getStore = function getStore() {
        return this._store;
      };
      _proto.getNetwork = function getNetwork() {
        return this._network;
      };
      _proto.getOperationTracker = function getOperationTracker() {
        return this._operationTracker;
      };
      _proto.isRequestActive = function isRequestActive(requestIdentifier) {
        var activeState = this._operationExecutions.get(requestIdentifier);
        return activeState === "active";
      };
      _proto.UNSTABLE_getDefaultRenderPolicy = function UNSTABLE_getDefaultRenderPolicy() {
        return this._defaultRenderPolicy;
      };
      _proto.applyUpdate = function applyUpdate(optimisticUpdate) {
        var _this2 = this;
        var dispose = function dispose2() {
          _this2._scheduleUpdates(function() {
            _this2._publishQueue.revertUpdate(optimisticUpdate);
            _this2._publishQueue.run();
          });
        };
        this._scheduleUpdates(function() {
          _this2._publishQueue.applyUpdate(optimisticUpdate);
          _this2._publishQueue.run();
        });
        return {
          dispose
        };
      };
      _proto.revertUpdate = function revertUpdate(update) {
        var _this3 = this;
        this._scheduleUpdates(function() {
          _this3._publishQueue.revertUpdate(update);
          _this3._publishQueue.run();
        });
      };
      _proto.replaceUpdate = function replaceUpdate(update, newUpdate) {
        var _this4 = this;
        this._scheduleUpdates(function() {
          _this4._publishQueue.revertUpdate(update);
          _this4._publishQueue.applyUpdate(newUpdate);
          _this4._publishQueue.run();
        });
      };
      _proto.applyMutation = function applyMutation(optimisticConfig) {
        var subscription = this._execute({
          createSource: function createSource() {
            return RelayObservable.create(function(_sink) {
            });
          },
          isClientPayload: false,
          operation: optimisticConfig.operation,
          optimisticConfig,
          updater: null
        }).subscribe({});
        return {
          dispose: function dispose() {
            return subscription.unsubscribe();
          }
        };
      };
      _proto.check = function check(operation) {
        if (this._missingFieldHandlers == null || this._missingFieldHandlers.length === 0) {
          return this._store.check(operation);
        }
        return this._checkSelectorAndHandleMissingFields(operation, this._missingFieldHandlers);
      };
      _proto.commitPayload = function commitPayload(operation, payload) {
        this._execute({
          createSource: function createSource() {
            return RelayObservable.from({
              data: payload
            });
          },
          isClientPayload: true,
          operation,
          optimisticConfig: null,
          updater: null
        }).subscribe({});
      };
      _proto.commitUpdate = function commitUpdate(updater) {
        var _this5 = this;
        this._scheduleUpdates(function() {
          _this5._publishQueue.commitUpdate(updater);
          _this5._publishQueue.run();
        });
      };
      _proto.lookup = function lookup(readSelector) {
        return this._store.lookup(readSelector);
      };
      _proto.subscribe = function subscribe(snapshot, callback) {
        return this._store.subscribe(snapshot, callback);
      };
      _proto.retain = function retain(operation) {
        return this._store.retain(operation);
      };
      _proto.isServer = function isServer() {
        return this._isServer;
      };
      _proto._checkSelectorAndHandleMissingFields = function _checkSelectorAndHandleMissingFields(operation, handlers) {
        var _this6 = this;
        var target = RelayRecordSource.create();
        var result = this._store.check(operation, {
          target,
          handlers
        });
        if (target.size() > 0) {
          this._scheduleUpdates(function() {
            _this6._publishQueue.commitSource(target);
            _this6._publishQueue.run();
          });
        }
        return result;
      };
      _proto._scheduleUpdates = function _scheduleUpdates(task) {
        var scheduler = this._scheduler;
        if (scheduler != null) {
          scheduler.schedule(task);
        } else {
          task();
        }
      };
      _proto.execute = function execute(_ref) {
        var _this7 = this;
        var operation = _ref.operation, updater = _ref.updater;
        return this._execute({
          createSource: function createSource() {
            return _this7._network.execute(operation.request.node.params, operation.request.variables, operation.request.cacheConfig || {}, null);
          },
          isClientPayload: false,
          operation,
          optimisticConfig: null,
          updater
        });
      };
      _proto.executeMutation = function executeMutation(_ref2) {
        var _this8 = this;
        var operation = _ref2.operation, optimisticResponse = _ref2.optimisticResponse, optimisticUpdater = _ref2.optimisticUpdater, updater = _ref2.updater, uploadables = _ref2.uploadables;
        var optimisticConfig;
        if (optimisticResponse || optimisticUpdater) {
          optimisticConfig = {
            operation,
            response: optimisticResponse,
            updater: optimisticUpdater
          };
        }
        return this._execute({
          createSource: function createSource() {
            return _this8._network.execute(operation.request.node.params, operation.request.variables, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, operation.request.cacheConfig), {}, {
              force: true
            }), uploadables);
          },
          isClientPayload: false,
          operation,
          optimisticConfig,
          updater
        });
      };
      _proto.executeWithSource = function executeWithSource(_ref3) {
        var operation = _ref3.operation, source = _ref3.source;
        return this._execute({
          createSource: function createSource() {
            return source;
          },
          isClientPayload: false,
          operation,
          optimisticConfig: null,
          updater: null
        });
      };
      _proto.toJSON = function toJSON() {
        var _this$configName;
        return "RelayModernEnvironment(".concat((_this$configName = this.configName) !== null && _this$configName !== void 0 ? _this$configName : "", ")");
      };
      _proto._execute = function _execute(_ref4) {
        var _this9 = this;
        var createSource = _ref4.createSource, isClientPayload = _ref4.isClientPayload, operation = _ref4.operation, optimisticConfig = _ref4.optimisticConfig, updater = _ref4.updater;
        return RelayObservable.create(function(sink) {
          var executor = OperationExecutor.execute({
            getDataID: _this9._getDataID,
            isClientPayload,
            operation,
            operationExecutions: _this9._operationExecutions,
            operationLoader: _this9._operationLoader,
            operationTracker: _this9._operationTracker,
            optimisticConfig,
            publishQueue: _this9._publishQueue,
            reactFlightPayloadDeserializer: _this9._reactFlightPayloadDeserializer,
            reactFlightServerErrorHandler: _this9._reactFlightServerErrorHandler,
            scheduler: _this9._scheduler,
            shouldProcessClientComponents: _this9._shouldProcessClientComponents,
            sink,
            source: createSource(),
            store: _this9._store,
            treatMissingFieldsAsNull: _this9._treatMissingFieldsAsNull,
            updater
          });
          return function() {
            return executor.cancel();
          };
        });
      };
      _proto.__wrapNetworkWithLogObserver = function __wrapNetworkWithLogObserver(network) {
        var that = this;
        return {
          execute: function execute(params, variables, cacheConfig, uploadables) {
            var transactionID = generateID();
            var log = that.__log;
            var logObserver = {
              start: function start(subscription) {
                log({
                  name: "network.start",
                  transactionID,
                  params,
                  variables,
                  cacheConfig
                });
              },
              next: function next(response) {
                log({
                  name: "network.next",
                  transactionID,
                  response
                });
              },
              error: function error(_error) {
                log({
                  name: "network.error",
                  transactionID,
                  error: _error
                });
              },
              complete: function complete() {
                log({
                  name: "network.complete",
                  transactionID
                });
              },
              unsubscribe: function unsubscribe() {
                log({
                  name: "network.unsubscribe",
                  transactionID
                });
              }
            };
            var logRequestInfo = function logRequestInfo2(info) {
              log({
                name: "network.info",
                transactionID,
                info
              });
            };
            return network.execute(params, variables, cacheConfig, uploadables, logRequestInfo)["do"](logObserver);
          }
        };
      };
      return RelayModernEnvironment2;
    }();
    RelayModernEnvironment.prototype["@@RelayModernEnvironment"] = true;
    function emptyFunction() {
    }
    module.exports = RelayModernEnvironment;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getRequestIdentifier.js
var require_getRequestIdentifier = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getRequestIdentifier.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var stableCopy = require_stableCopy();
    function getRequestIdentifier(parameters, variables) {
      var requestID = parameters.cacheID != null ? parameters.cacheID : parameters.id;
      !(requestID != null) ? true ? invariant(false, "getRequestIdentifier: Expected request `%s` to have either a valid `id` or `cacheID` property", parameters.name) : invariant(false) : void 0;
      return requestID + JSON.stringify(stableCopy(variables));
    }
    module.exports = getRequestIdentifier;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernOperationDescriptor.js
var require_RelayModernOperationDescriptor = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernOperationDescriptor.js"(exports, module) {
    init_define_global();
    "use strict";
    var deepFreeze = require_deepFreeze();
    var getRequestIdentifier = require_getRequestIdentifier();
    var _require = require_RelayConcreteVariables();
    var getOperationVariables = _require.getOperationVariables;
    var _require2 = require_RelayModernSelector();
    var createNormalizationSelector = _require2.createNormalizationSelector;
    var createReaderSelector = _require2.createReaderSelector;
    var _require3 = require_RelayStoreUtils();
    var ROOT_ID = _require3.ROOT_ID;
    function createOperationDescriptor(request, variables, cacheConfig) {
      var dataID = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ROOT_ID;
      var operation = request.operation;
      var operationVariables = getOperationVariables(operation, variables);
      var requestDescriptor = createRequestDescriptor(request, operationVariables, cacheConfig);
      var operationDescriptor = {
        fragment: createReaderSelector(request.fragment, dataID, operationVariables, requestDescriptor),
        request: requestDescriptor,
        root: createNormalizationSelector(operation, dataID, operationVariables)
      };
      if (true) {
        Object.freeze(operationDescriptor.fragment);
        Object.freeze(operationDescriptor.root);
        Object.freeze(operationDescriptor);
      }
      return operationDescriptor;
    }
    function createRequestDescriptor(request, variables, cacheConfig) {
      var requestDescriptor = {
        identifier: getRequestIdentifier(request.params, variables),
        node: request,
        variables,
        cacheConfig
      };
      if (true) {
        deepFreeze(variables);
        Object.freeze(request);
        Object.freeze(requestDescriptor);
      }
      return requestDescriptor;
    }
    module.exports = {
      createOperationDescriptor,
      createRequestDescriptor
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/cloneRelayHandleSourceField.js
var require_cloneRelayHandleSourceField = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/cloneRelayHandleSourceField.js"(exports, module) {
    init_define_global();
    "use strict";
    var areEqual = require_areEqual();
    var invariant = require_browser();
    var _require = require_RelayConcreteNode();
    var LINKED_FIELD = _require.LINKED_FIELD;
    var _require2 = require_RelayStoreUtils();
    var getHandleStorageKey = _require2.getHandleStorageKey;
    function cloneRelayHandleSourceField(handleField, selections, variables) {
      var sourceField = selections.find(function(source) {
        return source.kind === LINKED_FIELD && source.name === handleField.name && source.alias === handleField.alias && areEqual(source.args, handleField.args);
      });
      !(sourceField && sourceField.kind === LINKED_FIELD) ? true ? invariant(false, "cloneRelayHandleSourceField: Expected a corresponding source field for handle `%s`.", handleField.handle) : invariant(false) : void 0;
      var handleKey = getHandleStorageKey(handleField, variables);
      return {
        kind: "LinkedField",
        alias: sourceField.alias,
        name: handleKey,
        storageKey: handleKey,
        args: null,
        concreteType: sourceField.concreteType,
        plural: sourceField.plural,
        selections: sourceField.selections
      };
    }
    module.exports = cloneRelayHandleSourceField;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/cloneRelayScalarHandleSourceField.js
var require_cloneRelayScalarHandleSourceField = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/cloneRelayScalarHandleSourceField.js"(exports, module) {
    init_define_global();
    "use strict";
    var areEqual = require_areEqual();
    var invariant = require_browser();
    var _require = require_RelayConcreteNode();
    var SCALAR_FIELD = _require.SCALAR_FIELD;
    var _require2 = require_RelayStoreUtils();
    var getHandleStorageKey = _require2.getHandleStorageKey;
    function cloneRelayScalarHandleSourceField(handleField, selections, variables) {
      var sourceField = selections.find(function(source) {
        return source.kind === SCALAR_FIELD && source.name === handleField.name && source.alias === handleField.alias && areEqual(source.args, handleField.args);
      });
      !(sourceField && sourceField.kind === SCALAR_FIELD) ? true ? invariant(false, "cloneRelayScalarHandleSourceField: Expected a corresponding source field for handle `%s`.", handleField.handle) : invariant(false) : void 0;
      var handleKey = getHandleStorageKey(handleField, variables);
      return {
        kind: "ScalarField",
        alias: sourceField.alias,
        name: handleKey,
        storageKey: handleKey,
        args: null
      };
    }
    module.exports = cloneRelayScalarHandleSourceField;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/DataChecker.js
var require_DataChecker = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/DataChecker.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var RelayConcreteNode = require_RelayConcreteNode();
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayModernRecord = require_RelayModernRecord();
    var RelayRecordSourceMutator = require_RelayRecordSourceMutator();
    var RelayRecordSourceProxy = require_RelayRecordSourceProxy();
    var RelayStoreReactFlightUtils = require_RelayStoreReactFlightUtils();
    var RelayStoreUtils = require_RelayStoreUtils();
    var cloneRelayHandleSourceField = require_cloneRelayHandleSourceField();
    var cloneRelayScalarHandleSourceField = require_cloneRelayScalarHandleSourceField();
    var getOperation = require_getOperation();
    var invariant = require_browser();
    var _require = require_ClientID();
    var isClientID = _require.isClientID;
    var _require2 = require_RelayRecordState();
    var EXISTENT = _require2.EXISTENT;
    var UNKNOWN = _require2.UNKNOWN;
    var _require3 = require_TypeID();
    var generateTypeID = _require3.generateTypeID;
    var CONDITION = RelayConcreteNode.CONDITION;
    var CLIENT_COMPONENT = RelayConcreteNode.CLIENT_COMPONENT;
    var CLIENT_EXTENSION = RelayConcreteNode.CLIENT_EXTENSION;
    var DEFER = RelayConcreteNode.DEFER;
    var FLIGHT_FIELD = RelayConcreteNode.FLIGHT_FIELD;
    var FRAGMENT_SPREAD = RelayConcreteNode.FRAGMENT_SPREAD;
    var INLINE_FRAGMENT = RelayConcreteNode.INLINE_FRAGMENT;
    var LINKED_FIELD = RelayConcreteNode.LINKED_FIELD;
    var LINKED_HANDLE = RelayConcreteNode.LINKED_HANDLE;
    var MODULE_IMPORT = RelayConcreteNode.MODULE_IMPORT;
    var SCALAR_FIELD = RelayConcreteNode.SCALAR_FIELD;
    var SCALAR_HANDLE = RelayConcreteNode.SCALAR_HANDLE;
    var STREAM = RelayConcreteNode.STREAM;
    var TYPE_DISCRIMINATOR = RelayConcreteNode.TYPE_DISCRIMINATOR;
    var ROOT_ID = RelayStoreUtils.ROOT_ID;
    var getModuleOperationKey = RelayStoreUtils.getModuleOperationKey;
    var getStorageKey = RelayStoreUtils.getStorageKey;
    var getArgumentValues = RelayStoreUtils.getArgumentValues;
    function check(source, target, selector, handlers, operationLoader, getDataID, shouldProcessClientComponents) {
      var dataID = selector.dataID, node = selector.node, variables = selector.variables;
      var checker = new DataChecker(source, target, variables, handlers, operationLoader, getDataID, shouldProcessClientComponents);
      return checker.check(node, dataID);
    }
    var DataChecker = function() {
      function DataChecker2(source, target, variables, handlers, operationLoader, getDataID, shouldProcessClientComponents) {
        var mutator = new RelayRecordSourceMutator(source, target);
        this._mostRecentlyInvalidatedAt = null;
        this._handlers = handlers;
        this._mutator = mutator;
        this._operationLoader = operationLoader !== null && operationLoader !== void 0 ? operationLoader : null;
        this._recordSourceProxy = new RelayRecordSourceProxy(mutator, getDataID);
        this._recordWasMissing = false;
        this._source = source;
        this._variables = variables;
        this._shouldProcessClientComponents = shouldProcessClientComponents;
      }
      var _proto = DataChecker2.prototype;
      _proto.check = function check2(node, dataID) {
        this._traverse(node, dataID);
        return this._recordWasMissing === true ? {
          status: "missing",
          mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt
        } : {
          status: "available",
          mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt
        };
      };
      _proto._getVariableValue = function _getVariableValue(name) {
        !this._variables.hasOwnProperty(name) ? true ? invariant(false, "RelayAsyncLoader(): Undefined variable `%s`.", name) : invariant(false) : void 0;
        return this._variables[name];
      };
      _proto._handleMissing = function _handleMissing() {
        this._recordWasMissing = true;
      };
      _proto._getDataForHandlers = function _getDataForHandlers(field, dataID) {
        return {
          args: field.args ? getArgumentValues(field.args, this._variables) : {},
          record: this._source.get(dataID)
        };
      };
      _proto._handleMissingScalarField = function _handleMissingScalarField(field, dataID) {
        if (field.name === "id" && field.alias == null && isClientID(dataID)) {
          return void 0;
        }
        var _this$_getDataForHand = this._getDataForHandlers(field, dataID), args = _this$_getDataForHand.args, record = _this$_getDataForHand.record;
        var _iterator = (0, _createForOfIteratorHelper2["default"])(this._handlers), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var handler = _step.value;
            if (handler.kind === "scalar") {
              var newValue = handler.handle(field, record, args, this._recordSourceProxy);
              if (newValue !== void 0) {
                return newValue;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._handleMissing();
      };
      _proto._handleMissingLinkField = function _handleMissingLinkField(field, dataID) {
        var _this$_getDataForHand2 = this._getDataForHandlers(field, dataID), args = _this$_getDataForHand2.args, record = _this$_getDataForHand2.record;
        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(this._handlers), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var handler = _step2.value;
            if (handler.kind === "linked") {
              var newValue = handler.handle(field, record, args, this._recordSourceProxy);
              if (newValue !== void 0 && (newValue === null || this._mutator.getStatus(newValue) === EXISTENT)) {
                return newValue;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this._handleMissing();
      };
      _proto._handleMissingPluralLinkField = function _handleMissingPluralLinkField(field, dataID) {
        var _this = this;
        var _this$_getDataForHand3 = this._getDataForHandlers(field, dataID), args = _this$_getDataForHand3.args, record = _this$_getDataForHand3.record;
        var _iterator3 = (0, _createForOfIteratorHelper2["default"])(this._handlers), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var handler = _step3.value;
            if (handler.kind === "pluralLinked") {
              var newValue = handler.handle(field, record, args, this._recordSourceProxy);
              if (newValue != null) {
                var allItemsKnown = newValue.every(function(linkedID) {
                  return linkedID != null && _this._mutator.getStatus(linkedID) === EXISTENT;
                });
                if (allItemsKnown) {
                  return newValue;
                }
              } else if (newValue === null) {
                return null;
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this._handleMissing();
      };
      _proto._traverse = function _traverse(node, dataID) {
        var status = this._mutator.getStatus(dataID);
        if (status === UNKNOWN) {
          this._handleMissing();
        }
        if (status === EXISTENT) {
          var record = this._source.get(dataID);
          var invalidatedAt = RelayModernRecord.getInvalidationEpoch(record);
          if (invalidatedAt != null) {
            this._mostRecentlyInvalidatedAt = this._mostRecentlyInvalidatedAt != null ? Math.max(this._mostRecentlyInvalidatedAt, invalidatedAt) : invalidatedAt;
          }
          this._traverseSelections(node.selections, dataID);
        }
      };
      _proto._traverseSelections = function _traverseSelections(selections, dataID) {
        var _this2 = this;
        selections.forEach(function(selection) {
          switch (selection.kind) {
            case SCALAR_FIELD:
              _this2._checkScalar(selection, dataID);
              break;
            case LINKED_FIELD:
              if (selection.plural) {
                _this2._checkPluralLink(selection, dataID);
              } else {
                _this2._checkLink(selection, dataID);
              }
              break;
            case CONDITION:
              var conditionValue = _this2._getVariableValue(selection.condition);
              if (conditionValue === selection.passingValue) {
                _this2._traverseSelections(selection.selections, dataID);
              }
              break;
            case INLINE_FRAGMENT: {
              var abstractKey = selection.abstractKey;
              if (abstractKey == null) {
                var typeName = _this2._mutator.getType(dataID);
                if (typeName === selection.type) {
                  _this2._traverseSelections(selection.selections, dataID);
                }
              } else if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
                var recordType = _this2._mutator.getType(dataID);
                !(recordType != null) ? true ? invariant(false, "DataChecker: Expected record `%s` to have a known type", dataID) : invariant(false) : void 0;
                var typeID = generateTypeID(recordType);
                var implementsInterface = _this2._mutator.getValue(typeID, abstractKey);
                if (implementsInterface === true) {
                  _this2._traverseSelections(selection.selections, dataID);
                } else if (implementsInterface == null) {
                  _this2._handleMissing();
                }
              } else {
                _this2._traverseSelections(selection.selections, dataID);
              }
              break;
            }
            case LINKED_HANDLE: {
              var handleField = cloneRelayHandleSourceField(selection, selections, _this2._variables);
              if (handleField.plural) {
                _this2._checkPluralLink(handleField, dataID);
              } else {
                _this2._checkLink(handleField, dataID);
              }
              break;
            }
            case SCALAR_HANDLE: {
              var _handleField = cloneRelayScalarHandleSourceField(selection, selections, _this2._variables);
              _this2._checkScalar(_handleField, dataID);
              break;
            }
            case MODULE_IMPORT:
              _this2._checkModuleImport(selection, dataID);
              break;
            case DEFER:
            case STREAM:
              _this2._traverseSelections(selection.selections, dataID);
              break;
            case FRAGMENT_SPREAD:
              _this2._traverseSelections(selection.fragment.selections, dataID);
              break;
            case CLIENT_EXTENSION:
              var recordWasMissing = _this2._recordWasMissing;
              _this2._traverseSelections(selection.selections, dataID);
              _this2._recordWasMissing = recordWasMissing;
              break;
            case TYPE_DISCRIMINATOR:
              if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
                var _abstractKey = selection.abstractKey;
                var _recordType = _this2._mutator.getType(dataID);
                !(_recordType != null) ? true ? invariant(false, "DataChecker: Expected record `%s` to have a known type", dataID) : invariant(false) : void 0;
                var _typeID = generateTypeID(_recordType);
                var _implementsInterface = _this2._mutator.getValue(_typeID, _abstractKey);
                if (_implementsInterface == null) {
                  _this2._handleMissing();
                }
              }
              break;
            case FLIGHT_FIELD:
              if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
                _this2._checkFlightField(selection, dataID);
              } else {
                throw new Error("Flight fields are not yet supported.");
              }
              break;
            case CLIENT_COMPONENT:
              if (_this2._shouldProcessClientComponents === false) {
                break;
              }
              _this2._traverseSelections(selection.fragment.selections, dataID);
              break;
            default:
              selection;
              true ? true ? invariant(false, "RelayAsyncLoader(): Unexpected ast kind `%s`.", selection.kind) : invariant(false) : void 0;
          }
        });
      };
      _proto._checkModuleImport = function _checkModuleImport(moduleImport, dataID) {
        var operationLoader = this._operationLoader;
        !(operationLoader !== null) ? true ? invariant(false, "DataChecker: Expected an operationLoader to be configured when using `@module`.") : invariant(false) : void 0;
        var operationKey = getModuleOperationKey(moduleImport.documentName);
        var operationReference = this._mutator.getValue(dataID, operationKey);
        if (operationReference == null) {
          if (operationReference === void 0) {
            this._handleMissing();
          }
          return;
        }
        var normalizationRootNode = operationLoader.get(operationReference);
        if (normalizationRootNode != null) {
          var operation = getOperation(normalizationRootNode);
          this._traverse(operation, dataID);
        } else {
          this._handleMissing();
        }
      };
      _proto._checkScalar = function _checkScalar(field, dataID) {
        var storageKey = getStorageKey(field, this._variables);
        var fieldValue = this._mutator.getValue(dataID, storageKey);
        if (fieldValue === void 0) {
          fieldValue = this._handleMissingScalarField(field, dataID);
          if (fieldValue !== void 0) {
            this._mutator.setValue(dataID, storageKey, fieldValue);
          }
        }
      };
      _proto._checkLink = function _checkLink(field, dataID) {
        var storageKey = getStorageKey(field, this._variables);
        var linkedID = this._mutator.getLinkedRecordID(dataID, storageKey);
        if (linkedID === void 0) {
          linkedID = this._handleMissingLinkField(field, dataID);
          if (linkedID != null) {
            this._mutator.setLinkedRecordID(dataID, storageKey, linkedID);
          } else if (linkedID === null) {
            this._mutator.setValue(dataID, storageKey, null);
          }
        }
        if (linkedID != null) {
          this._traverse(field, linkedID);
        }
      };
      _proto._checkPluralLink = function _checkPluralLink(field, dataID) {
        var _this3 = this;
        var storageKey = getStorageKey(field, this._variables);
        var linkedIDs = this._mutator.getLinkedRecordIDs(dataID, storageKey);
        if (linkedIDs === void 0) {
          linkedIDs = this._handleMissingPluralLinkField(field, dataID);
          if (linkedIDs != null) {
            this._mutator.setLinkedRecordIDs(dataID, storageKey, linkedIDs);
          } else if (linkedIDs === null) {
            this._mutator.setValue(dataID, storageKey, null);
          }
        }
        if (linkedIDs) {
          linkedIDs.forEach(function(linkedID) {
            if (linkedID != null) {
              _this3._traverse(field, linkedID);
            }
          });
        }
      };
      _proto._checkFlightField = function _checkFlightField(field, dataID) {
        var storageKey = getStorageKey(field, this._variables);
        var linkedID = this._mutator.getLinkedRecordID(dataID, storageKey);
        if (linkedID == null) {
          if (linkedID === void 0) {
            this._handleMissing();
            return;
          }
          return;
        }
        var tree = this._mutator.getValue(linkedID, RelayStoreReactFlightUtils.REACT_FLIGHT_TREE_STORAGE_KEY);
        var reachableExecutableDefinitions = this._mutator.getValue(linkedID, RelayStoreReactFlightUtils.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY);
        if (tree == null || !Array.isArray(reachableExecutableDefinitions)) {
          this._handleMissing();
          return;
        }
        var operationLoader = this._operationLoader;
        !(operationLoader !== null) ? true ? invariant(false, "DataChecker: Expected an operationLoader to be configured when using React Flight.") : invariant(false) : void 0;
        var prevVariables = this._variables;
        var _iterator4 = (0, _createForOfIteratorHelper2["default"])(reachableExecutableDefinitions), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var definition = _step4.value;
            this._variables = definition.variables;
            var normalizationRootNode = operationLoader.get(definition.module);
            if (normalizationRootNode != null) {
              var operation = getOperation(normalizationRootNode);
              this._traverseSelections(operation.selections, ROOT_ID);
            } else {
              this._handleMissing();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this._variables = prevVariables;
      };
      return DataChecker2;
    }();
    module.exports = {
      check
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayOptimisticRecordSource.js
var require_RelayOptimisticRecordSource = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayOptimisticRecordSource.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var RelayRecordSource = require_RelayRecordSource();
    var UNPUBLISH_RECORD_SENTINEL = Object.freeze({
      __UNPUBLISH_RECORD_SENTINEL: true
    });
    var RelayOptimisticRecordSource = function() {
      function RelayOptimisticRecordSource2(base) {
        this._base = base;
        this._sink = RelayRecordSource.create();
      }
      var _proto = RelayOptimisticRecordSource2.prototype;
      _proto.has = function has(dataID) {
        if (this._sink.has(dataID)) {
          var sinkRecord = this._sink.get(dataID);
          return sinkRecord !== UNPUBLISH_RECORD_SENTINEL;
        } else {
          return this._base.has(dataID);
        }
      };
      _proto.get = function get(dataID) {
        if (this._sink.has(dataID)) {
          var sinkRecord = this._sink.get(dataID);
          if (sinkRecord === UNPUBLISH_RECORD_SENTINEL) {
            return void 0;
          } else {
            return sinkRecord;
          }
        } else {
          return this._base.get(dataID);
        }
      };
      _proto.getStatus = function getStatus(dataID) {
        var record = this.get(dataID);
        if (record === void 0) {
          return "UNKNOWN";
        } else if (record === null) {
          return "NONEXISTENT";
        } else {
          return "EXISTENT";
        }
      };
      _proto.clear = function clear() {
        this._base = RelayRecordSource.create();
        this._sink.clear();
      };
      _proto["delete"] = function _delete(dataID) {
        this._sink["delete"](dataID);
      };
      _proto.remove = function remove(dataID) {
        this._sink.set(dataID, UNPUBLISH_RECORD_SENTINEL);
      };
      _proto.set = function set(dataID, record) {
        this._sink.set(dataID, record);
      };
      _proto.getRecordIDs = function getRecordIDs() {
        return Object.keys(this.toJSON());
      };
      _proto.size = function size() {
        return Object.keys(this.toJSON()).length;
      };
      _proto.toJSON = function toJSON() {
        var _this = this;
        var merged = (0, _objectSpread2["default"])({}, this._base.toJSON());
        this._sink.getRecordIDs().forEach(function(dataID) {
          var record = _this.get(dataID);
          if (record === void 0) {
            delete merged[dataID];
          } else {
            merged[dataID] = record;
          }
        });
        return merged;
      };
      return RelayOptimisticRecordSource2;
    }();
    function create(base) {
      return new RelayOptimisticRecordSource(base);
    }
    module.exports = {
      create
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayReferenceMarker.js
var require_RelayReferenceMarker = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayReferenceMarker.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var RelayConcreteNode = require_RelayConcreteNode();
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayModernRecord = require_RelayModernRecord();
    var RelayStoreReactFlightUtils = require_RelayStoreReactFlightUtils();
    var RelayStoreUtils = require_RelayStoreUtils();
    var cloneRelayHandleSourceField = require_cloneRelayHandleSourceField();
    var getOperation = require_getOperation();
    var invariant = require_browser();
    var _require = require_TypeID();
    var generateTypeID = _require.generateTypeID;
    var CONDITION = RelayConcreteNode.CONDITION;
    var CLIENT_COMPONENT = RelayConcreteNode.CLIENT_COMPONENT;
    var CLIENT_EXTENSION = RelayConcreteNode.CLIENT_EXTENSION;
    var DEFER = RelayConcreteNode.DEFER;
    var FLIGHT_FIELD = RelayConcreteNode.FLIGHT_FIELD;
    var FRAGMENT_SPREAD = RelayConcreteNode.FRAGMENT_SPREAD;
    var INLINE_FRAGMENT = RelayConcreteNode.INLINE_FRAGMENT;
    var LINKED_FIELD = RelayConcreteNode.LINKED_FIELD;
    var MODULE_IMPORT = RelayConcreteNode.MODULE_IMPORT;
    var LINKED_HANDLE = RelayConcreteNode.LINKED_HANDLE;
    var SCALAR_FIELD = RelayConcreteNode.SCALAR_FIELD;
    var SCALAR_HANDLE = RelayConcreteNode.SCALAR_HANDLE;
    var STREAM = RelayConcreteNode.STREAM;
    var TYPE_DISCRIMINATOR = RelayConcreteNode.TYPE_DISCRIMINATOR;
    var ROOT_ID = RelayStoreUtils.ROOT_ID;
    var getStorageKey = RelayStoreUtils.getStorageKey;
    var getModuleOperationKey = RelayStoreUtils.getModuleOperationKey;
    function mark(recordSource, selector, references, operationLoader, shouldProcessClientComponents) {
      var dataID = selector.dataID, node = selector.node, variables = selector.variables;
      var marker = new RelayReferenceMarker(recordSource, variables, references, operationLoader, shouldProcessClientComponents);
      marker.mark(node, dataID);
    }
    var RelayReferenceMarker = function() {
      function RelayReferenceMarker2(recordSource, variables, references, operationLoader, shouldProcessClientComponents) {
        this._operationLoader = operationLoader !== null && operationLoader !== void 0 ? operationLoader : null;
        this._operationName = null;
        this._recordSource = recordSource;
        this._references = references;
        this._variables = variables;
        this._shouldProcessClientComponents = shouldProcessClientComponents;
      }
      var _proto = RelayReferenceMarker2.prototype;
      _proto.mark = function mark2(node, dataID) {
        if (node.kind === "Operation" || node.kind === "SplitOperation") {
          this._operationName = node.name;
        }
        this._traverse(node, dataID);
      };
      _proto._traverse = function _traverse(node, dataID) {
        this._references.add(dataID);
        var record = this._recordSource.get(dataID);
        if (record == null) {
          return;
        }
        this._traverseSelections(node.selections, record);
      };
      _proto._getVariableValue = function _getVariableValue(name) {
        !this._variables.hasOwnProperty(name) ? true ? invariant(false, "RelayReferenceMarker(): Undefined variable `%s`.", name) : invariant(false) : void 0;
        return this._variables[name];
      };
      _proto._traverseSelections = function _traverseSelections(selections, record) {
        var _this = this;
        selections.forEach(function(selection) {
          switch (selection.kind) {
            case LINKED_FIELD:
              if (selection.plural) {
                _this._traversePluralLink(selection, record);
              } else {
                _this._traverseLink(selection, record);
              }
              break;
            case CONDITION:
              var conditionValue = _this._getVariableValue(selection.condition);
              if (conditionValue === selection.passingValue) {
                _this._traverseSelections(selection.selections, record);
              }
              break;
            case INLINE_FRAGMENT:
              if (selection.abstractKey == null) {
                var typeName = RelayModernRecord.getType(record);
                if (typeName != null && typeName === selection.type) {
                  _this._traverseSelections(selection.selections, record);
                }
              } else if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
                var _typeName = RelayModernRecord.getType(record);
                var typeID = generateTypeID(_typeName);
                _this._references.add(typeID);
                _this._traverseSelections(selection.selections, record);
              } else {
                _this._traverseSelections(selection.selections, record);
              }
              break;
            case FRAGMENT_SPREAD:
              _this._traverseSelections(selection.fragment.selections, record);
              break;
            case LINKED_HANDLE:
              var handleField = cloneRelayHandleSourceField(selection, selections, _this._variables);
              if (handleField.plural) {
                _this._traversePluralLink(handleField, record);
              } else {
                _this._traverseLink(handleField, record);
              }
              break;
            case DEFER:
            case STREAM:
              _this._traverseSelections(selection.selections, record);
              break;
            case SCALAR_FIELD:
            case SCALAR_HANDLE:
              break;
            case TYPE_DISCRIMINATOR: {
              if (RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT) {
                var _typeName2 = RelayModernRecord.getType(record);
                var _typeID = generateTypeID(_typeName2);
                _this._references.add(_typeID);
              }
              break;
            }
            case MODULE_IMPORT:
              _this._traverseModuleImport(selection, record);
              break;
            case CLIENT_EXTENSION:
              _this._traverseSelections(selection.selections, record);
              break;
            case FLIGHT_FIELD:
              if (RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD) {
                _this._traverseFlightField(selection, record);
              } else {
                throw new Error("Flight fields are not yet supported.");
              }
              break;
            case CLIENT_COMPONENT:
              if (_this._shouldProcessClientComponents === false) {
                break;
              }
              _this._traverseSelections(selection.fragment.selections, record);
              break;
            default:
              selection;
              true ? true ? invariant(false, "RelayReferenceMarker: Unknown AST node `%s`.", selection) : invariant(false) : void 0;
          }
        });
      };
      _proto._traverseModuleImport = function _traverseModuleImport(moduleImport, record) {
        var _this$_operationName;
        var operationLoader = this._operationLoader;
        !(operationLoader !== null) ? true ? invariant(false, "RelayReferenceMarker: Expected an operationLoader to be configured when using `@module`. Could not load fragment `%s` in operation `%s`.", moduleImport.fragmentName, (_this$_operationName = this._operationName) !== null && _this$_operationName !== void 0 ? _this$_operationName : "(unknown)") : invariant(false) : void 0;
        var operationKey = getModuleOperationKey(moduleImport.documentName);
        var operationReference = RelayModernRecord.getValue(record, operationKey);
        if (operationReference == null) {
          return;
        }
        var normalizationRootNode = operationLoader.get(operationReference);
        if (normalizationRootNode != null) {
          var selections = getOperation(normalizationRootNode).selections;
          this._traverseSelections(selections, record);
        }
      };
      _proto._traverseLink = function _traverseLink(field, record) {
        var storageKey = getStorageKey(field, this._variables);
        var linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);
        if (linkedID == null) {
          return;
        }
        this._traverse(field, linkedID);
      };
      _proto._traversePluralLink = function _traversePluralLink(field, record) {
        var _this2 = this;
        var storageKey = getStorageKey(field, this._variables);
        var linkedIDs = RelayModernRecord.getLinkedRecordIDs(record, storageKey);
        if (linkedIDs == null) {
          return;
        }
        linkedIDs.forEach(function(linkedID) {
          if (linkedID != null) {
            _this2._traverse(field, linkedID);
          }
        });
      };
      _proto._traverseFlightField = function _traverseFlightField(field, record) {
        var storageKey = getStorageKey(field, this._variables);
        var linkedID = RelayModernRecord.getLinkedRecordID(record, storageKey);
        if (linkedID == null) {
          return;
        }
        this._references.add(linkedID);
        var reactFlightClientResponseRecord = this._recordSource.get(linkedID);
        if (reactFlightClientResponseRecord == null) {
          return;
        }
        var reachableExecutableDefinitions = RelayModernRecord.getValue(reactFlightClientResponseRecord, RelayStoreReactFlightUtils.REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY);
        if (!Array.isArray(reachableExecutableDefinitions)) {
          return;
        }
        var operationLoader = this._operationLoader;
        !(operationLoader !== null) ? true ? invariant(false, "DataChecker: Expected an operationLoader to be configured when using React Flight") : invariant(false) : void 0;
        var prevVariables = this._variables;
        var _iterator = (0, _createForOfIteratorHelper2["default"])(reachableExecutableDefinitions), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var definition = _step.value;
            this._variables = definition.variables;
            var operationReference = definition.module;
            var normalizationRootNode = operationLoader.get(operationReference);
            if (normalizationRootNode != null) {
              var operation = getOperation(normalizationRootNode);
              this._traverse(operation, ROOT_ID);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._variables = prevVariables;
      };
      return RelayReferenceMarker2;
    }();
    module.exports = {
      mark
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/hasOverlappingIDs.js
var require_hasOverlappingIDs = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/hasOverlappingIDs.js"(exports, module) {
    init_define_global();
    "use strict";
    var ITERATOR_KEY = Symbol.iterator;
    function hasOverlappingIDs(seenRecords, updatedRecordIDs) {
      var iterator = seenRecords[ITERATOR_KEY]();
      var next = iterator.next();
      while (!next.done) {
        var key = next.value;
        if (updatedRecordIDs.has(key)) {
          return true;
        }
        next = iterator.next();
      }
      return false;
    }
    module.exports = hasOverlappingIDs;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/recycleNodesInto.js
var require_recycleNodesInto = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/recycleNodesInto.js"(exports, module) {
    init_define_global();
    "use strict";
    var hasWeakSetDefined = typeof WeakSet !== "undefined";
    var hasWeakMapDefined = typeof WeakMap !== "undefined";
    function recycleNodesInto(prevData, nextData) {
      if (prevData === nextData || typeof prevData !== "object" || prevData instanceof Set || prevData instanceof Map || hasWeakSetDefined && prevData instanceof WeakSet || hasWeakMapDefined && prevData instanceof WeakMap || !prevData || typeof nextData !== "object" || nextData instanceof Set || nextData instanceof Map || hasWeakSetDefined && nextData instanceof WeakSet || hasWeakMapDefined && nextData instanceof WeakMap || !nextData) {
        return nextData;
      }
      var canRecycle = false;
      var prevArray = Array.isArray(prevData) ? prevData : null;
      var nextArray = Array.isArray(nextData) ? nextData : null;
      if (prevArray && nextArray) {
        canRecycle = nextArray.reduce(function(wasEqual, nextItem, ii) {
          var prevValue = prevArray[ii];
          var nextValue = recycleNodesInto(prevValue, nextItem);
          if (nextValue !== nextArray[ii]) {
            if (true) {
              if (!Object.isFrozen(nextArray)) {
                nextArray[ii] = nextValue;
              }
            } else {
              nextArray[ii] = nextValue;
            }
          }
          return wasEqual && nextValue === prevArray[ii];
        }, true) && prevArray.length === nextArray.length;
      } else if (!prevArray && !nextArray) {
        var prevObject = prevData;
        var nextObject = nextData;
        var prevKeys = Object.keys(prevObject);
        var nextKeys = Object.keys(nextObject);
        canRecycle = nextKeys.reduce(function(wasEqual, key) {
          var prevValue = prevObject[key];
          var nextValue = recycleNodesInto(prevValue, nextObject[key]);
          if (nextValue !== nextObject[key]) {
            if (true) {
              if (!Object.isFrozen(nextObject)) {
                nextObject[key] = nextValue;
              }
            } else {
              nextObject[key] = nextValue;
            }
          }
          return wasEqual && nextValue === prevObject[key];
        }, true) && prevKeys.length === nextKeys.length;
      }
      return canRecycle ? prevData : nextData;
    }
    module.exports = recycleNodesInto;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreSubscriptions.js
var require_RelayStoreSubscriptions = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreSubscriptions.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayReader = require_RelayReader();
    var deepFreeze = require_deepFreeze();
    var hasOverlappingIDs = require_hasOverlappingIDs();
    var recycleNodesInto = require_recycleNodesInto();
    var RelayStoreSubscriptions = function() {
      function RelayStoreSubscriptions2(log) {
        this._subscriptions = new Set();
        this.__log = log;
      }
      var _proto = RelayStoreSubscriptions2.prototype;
      _proto.subscribe = function subscribe(snapshot, callback) {
        var _this = this;
        var subscription = {
          backup: null,
          callback,
          snapshot,
          stale: false
        };
        var dispose = function dispose2() {
          _this._subscriptions["delete"](subscription);
        };
        this._subscriptions.add(subscription);
        return {
          dispose
        };
      };
      _proto.snapshotSubscriptions = function snapshotSubscriptions(source) {
        this._subscriptions.forEach(function(subscription) {
          if (!subscription.stale) {
            subscription.backup = subscription.snapshot;
            return;
          }
          var snapshot = subscription.snapshot;
          var backup = RelayReader.read(source, snapshot.selector);
          var nextData = recycleNodesInto(snapshot.data, backup.data);
          backup.data = nextData;
          subscription.backup = backup;
        });
      };
      _proto.restoreSubscriptions = function restoreSubscriptions() {
        this._subscriptions.forEach(function(subscription) {
          var backup = subscription.backup;
          subscription.backup = null;
          if (backup) {
            if (backup.data !== subscription.snapshot.data) {
              subscription.stale = true;
            }
            subscription.snapshot = {
              data: subscription.snapshot.data,
              isMissingData: backup.isMissingData,
              seenRecords: backup.seenRecords,
              selector: backup.selector,
              missingRequiredFields: backup.missingRequiredFields
            };
          } else {
            subscription.stale = true;
          }
        });
      };
      _proto.updateSubscriptions = function updateSubscriptions(source, updatedRecordIDs, updatedOwners, sourceOperation) {
        var _this2 = this;
        var hasUpdatedRecords = updatedRecordIDs.size !== 0;
        this._subscriptions.forEach(function(subscription) {
          var owner = _this2._updateSubscription(source, subscription, updatedRecordIDs, hasUpdatedRecords, sourceOperation);
          if (owner != null) {
            updatedOwners.push(owner);
          }
        });
      };
      _proto._updateSubscription = function _updateSubscription(source, subscription, updatedRecordIDs, hasUpdatedRecords, sourceOperation) {
        var backup = subscription.backup, callback = subscription.callback, snapshot = subscription.snapshot, stale = subscription.stale;
        var hasOverlappingUpdates = hasUpdatedRecords && hasOverlappingIDs(snapshot.seenRecords, updatedRecordIDs);
        if (!stale && !hasOverlappingUpdates) {
          return;
        }
        var nextSnapshot = hasOverlappingUpdates || !backup ? RelayReader.read(source, snapshot.selector) : backup;
        var nextData = recycleNodesInto(snapshot.data, nextSnapshot.data);
        nextSnapshot = {
          data: nextData,
          isMissingData: nextSnapshot.isMissingData,
          seenRecords: nextSnapshot.seenRecords,
          selector: nextSnapshot.selector,
          missingRequiredFields: nextSnapshot.missingRequiredFields
        };
        if (true) {
          deepFreeze(nextSnapshot);
        }
        subscription.snapshot = nextSnapshot;
        subscription.stale = false;
        if (nextSnapshot.data !== snapshot.data) {
          if (this.__log && RelayFeatureFlags.ENABLE_NOTIFY_SUBSCRIPTION) {
            this.__log({
              name: "store.notify.subscription",
              sourceOperation,
              snapshot,
              nextSnapshot
            });
          }
          callback(nextSnapshot);
          return snapshot.selector.owner;
        }
      };
      return RelayStoreSubscriptions2;
    }();
    module.exports = RelayStoreSubscriptions;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreSubscriptionsUsingMapByID.js
var require_RelayStoreSubscriptionsUsingMapByID = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayStoreSubscriptionsUsingMapByID.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayReader = require_RelayReader();
    var deepFreeze = require_deepFreeze();
    var recycleNodesInto = require_recycleNodesInto();
    var RelayStoreSubscriptionsUsingMapByID = function() {
      function RelayStoreSubscriptionsUsingMapByID2(log) {
        this._notifiedRevision = 0;
        this._snapshotRevision = 0;
        this._subscriptionsByDataId = new Map();
        this._staleSubscriptions = new Set();
        this.__log = log;
      }
      var _proto = RelayStoreSubscriptionsUsingMapByID2.prototype;
      _proto.subscribe = function subscribe(snapshot, callback) {
        var _this = this;
        var subscription = {
          backup: null,
          callback,
          notifiedRevision: this._notifiedRevision,
          snapshotRevision: this._snapshotRevision,
          snapshot
        };
        var dispose = function dispose2() {
          var _iterator = (0, _createForOfIteratorHelper2["default"])(snapshot.seenRecords), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var dataId2 = _step.value;
              var subscriptionsForDataId2 = _this._subscriptionsByDataId.get(dataId2);
              if (subscriptionsForDataId2 != null) {
                subscriptionsForDataId2["delete"](subscription);
                if (subscriptionsForDataId2.size === 0) {
                  _this._subscriptionsByDataId["delete"](dataId2);
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        };
        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(snapshot.seenRecords), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var dataId = _step2.value;
            var subscriptionsForDataId = this._subscriptionsByDataId.get(dataId);
            if (subscriptionsForDataId != null) {
              subscriptionsForDataId.add(subscription);
            } else {
              this._subscriptionsByDataId.set(dataId, new Set([subscription]));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return {
          dispose
        };
      };
      _proto.snapshotSubscriptions = function snapshotSubscriptions(source) {
        var _this2 = this;
        this._snapshotRevision++;
        this._subscriptionsByDataId.forEach(function(subscriptions) {
          subscriptions.forEach(function(subscription) {
            if (subscription.snapshotRevision === _this2._snapshotRevision) {
              return;
            }
            subscription.snapshotRevision = _this2._snapshotRevision;
            if (!_this2._staleSubscriptions.has(subscription)) {
              subscription.backup = subscription.snapshot;
              return;
            }
            var snapshot = subscription.snapshot;
            var backup = RelayReader.read(source, snapshot.selector);
            var nextData = recycleNodesInto(snapshot.data, backup.data);
            backup.data = nextData;
            subscription.backup = backup;
          });
        });
      };
      _proto.restoreSubscriptions = function restoreSubscriptions() {
        var _this3 = this;
        this._snapshotRevision++;
        this._subscriptionsByDataId.forEach(function(subscriptions) {
          subscriptions.forEach(function(subscription) {
            if (subscription.snapshotRevision === _this3._snapshotRevision) {
              return;
            }
            subscription.snapshotRevision = _this3._snapshotRevision;
            var backup = subscription.backup;
            subscription.backup = null;
            if (backup) {
              if (backup.data !== subscription.snapshot.data) {
                _this3._staleSubscriptions.add(subscription);
              }
              var prevSeenRecords = subscription.snapshot.seenRecords;
              subscription.snapshot = {
                data: subscription.snapshot.data,
                isMissingData: backup.isMissingData,
                seenRecords: backup.seenRecords,
                selector: backup.selector,
                missingRequiredFields: backup.missingRequiredFields
              };
              _this3._updateSubscriptionsMap(subscription, prevSeenRecords);
            } else {
              _this3._staleSubscriptions.add(subscription);
            }
          });
        });
      };
      _proto.updateSubscriptions = function updateSubscriptions(source, updatedRecordIDs, updatedOwners, sourceOperation) {
        var _this4 = this;
        this._notifiedRevision++;
        updatedRecordIDs.forEach(function(updatedRecordId) {
          var subcriptionsForDataId = _this4._subscriptionsByDataId.get(updatedRecordId);
          if (subcriptionsForDataId == null) {
            return;
          }
          subcriptionsForDataId.forEach(function(subscription) {
            if (subscription.notifiedRevision === _this4._notifiedRevision) {
              return;
            }
            var owner = _this4._updateSubscription(source, subscription, false, sourceOperation);
            if (owner != null) {
              updatedOwners.push(owner);
            }
          });
        });
        this._staleSubscriptions.forEach(function(subscription) {
          if (subscription.notifiedRevision === _this4._notifiedRevision) {
            return;
          }
          var owner = _this4._updateSubscription(source, subscription, true, sourceOperation);
          if (owner != null) {
            updatedOwners.push(owner);
          }
        });
        this._staleSubscriptions.clear();
      };
      _proto._updateSubscription = function _updateSubscription(source, subscription, stale, sourceOperation) {
        var backup = subscription.backup, callback = subscription.callback, snapshot = subscription.snapshot;
        var nextSnapshot = stale && backup != null ? backup : RelayReader.read(source, snapshot.selector);
        var nextData = recycleNodesInto(snapshot.data, nextSnapshot.data);
        nextSnapshot = {
          data: nextData,
          isMissingData: nextSnapshot.isMissingData,
          seenRecords: nextSnapshot.seenRecords,
          selector: nextSnapshot.selector,
          missingRequiredFields: nextSnapshot.missingRequiredFields
        };
        if (true) {
          deepFreeze(nextSnapshot);
        }
        var prevSeenRecords = subscription.snapshot.seenRecords;
        subscription.snapshot = nextSnapshot;
        subscription.notifiedRevision = this._notifiedRevision;
        this._updateSubscriptionsMap(subscription, prevSeenRecords);
        if (nextSnapshot.data !== snapshot.data) {
          if (this.__log && RelayFeatureFlags.ENABLE_NOTIFY_SUBSCRIPTION) {
            this.__log({
              name: "store.notify.subscription",
              sourceOperation,
              snapshot,
              nextSnapshot
            });
          }
          callback(nextSnapshot);
          return snapshot.selector.owner;
        }
      };
      _proto._updateSubscriptionsMap = function _updateSubscriptionsMap(subscription, prevSeenRecords) {
        var _iterator3 = (0, _createForOfIteratorHelper2["default"])(prevSeenRecords), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var dataId = _step3.value;
            var subscriptionsForDataId = this._subscriptionsByDataId.get(dataId);
            if (subscriptionsForDataId != null) {
              subscriptionsForDataId["delete"](subscription);
              if (subscriptionsForDataId.size === 0) {
                this._subscriptionsByDataId["delete"](dataId);
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = (0, _createForOfIteratorHelper2["default"])(subscription.snapshot.seenRecords), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var _dataId = _step4.value;
            var _subscriptionsForDataId = this._subscriptionsByDataId.get(_dataId);
            if (_subscriptionsForDataId != null) {
              _subscriptionsForDataId.add(subscription);
            } else {
              this._subscriptionsByDataId.set(_dataId, new Set([subscription]));
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      };
      return RelayStoreSubscriptionsUsingMapByID2;
    }();
    module.exports = RelayStoreSubscriptionsUsingMapByID;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/resolveImmediate.js
var require_resolveImmediate = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/resolveImmediate.js"(exports, module) {
    init_define_global();
    "use strict";
    var resolvedPromise = Promise.resolve();
    function resolveImmediate(callback) {
      resolvedPromise.then(callback)["catch"](throwNext);
    }
    function throwNext(error) {
      setTimeout(function() {
        throw error;
      }, 0);
    }
    module.exports = resolveImmediate;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernStore.js
var require_RelayModernStore = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernStore.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var DataChecker = require_DataChecker();
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayModernRecord = require_RelayModernRecord();
    var RelayOptimisticRecordSource = require_RelayOptimisticRecordSource();
    var RelayReader = require_RelayReader();
    var RelayReferenceMarker = require_RelayReferenceMarker();
    var RelayStoreReactFlightUtils = require_RelayStoreReactFlightUtils();
    var RelayStoreSubscriptions = require_RelayStoreSubscriptions();
    var RelayStoreSubscriptionsUsingMapByID = require_RelayStoreSubscriptionsUsingMapByID();
    var RelayStoreUtils = require_RelayStoreUtils();
    var deepFreeze = require_deepFreeze();
    var defaultGetDataID = require_defaultGetDataID();
    var invariant = require_browser();
    var resolveImmediate = require_resolveImmediate();
    var _require = require_RelayStoreUtils();
    var ROOT_ID = _require.ROOT_ID;
    var ROOT_TYPE = _require.ROOT_TYPE;
    var DEFAULT_RELEASE_BUFFER_SIZE = 10;
    var RelayModernStore = function() {
      function RelayModernStore2(source, options) {
        var _this = this;
        var _options$gcReleaseBuf, _options$gcScheduler, _options$getDataID, _options$log, _options$operationLoa;
        (0, _defineProperty2["default"])(this, "_gcStep", function() {
          if (_this._gcRun) {
            if (_this._gcRun.next().done) {
              _this._gcRun = null;
            } else {
              _this._gcScheduler(_this._gcStep);
            }
          }
        });
        if (true) {
          var storeIDs = source.getRecordIDs();
          for (var ii = 0; ii < storeIDs.length; ii++) {
            var record = source.get(storeIDs[ii]);
            if (record) {
              RelayModernRecord.freeze(record);
            }
          }
        }
        this._currentWriteEpoch = 0;
        this._gcHoldCounter = 0;
        this._gcReleaseBufferSize = (_options$gcReleaseBuf = options === null || options === void 0 ? void 0 : options.gcReleaseBufferSize) !== null && _options$gcReleaseBuf !== void 0 ? _options$gcReleaseBuf : DEFAULT_RELEASE_BUFFER_SIZE;
        this._gcRun = null;
        this._gcScheduler = (_options$gcScheduler = options === null || options === void 0 ? void 0 : options.gcScheduler) !== null && _options$gcScheduler !== void 0 ? _options$gcScheduler : resolveImmediate;
        this._getDataID = (_options$getDataID = options === null || options === void 0 ? void 0 : options.getDataID) !== null && _options$getDataID !== void 0 ? _options$getDataID : defaultGetDataID;
        this._globalInvalidationEpoch = null;
        this._invalidationSubscriptions = new Set();
        this._invalidatedRecordIDs = new Set();
        this.__log = (_options$log = options === null || options === void 0 ? void 0 : options.log) !== null && _options$log !== void 0 ? _options$log : null;
        this._queryCacheExpirationTime = options === null || options === void 0 ? void 0 : options.queryCacheExpirationTime;
        this._operationLoader = (_options$operationLoa = options === null || options === void 0 ? void 0 : options.operationLoader) !== null && _options$operationLoa !== void 0 ? _options$operationLoa : null;
        this._optimisticSource = null;
        this._recordSource = source;
        this._releaseBuffer = [];
        this._roots = new Map();
        this._shouldScheduleGC = false;
        this._storeSubscriptions = RelayFeatureFlags.ENABLE_STORE_SUBSCRIPTIONS_REFACTOR === true ? new RelayStoreSubscriptionsUsingMapByID(options === null || options === void 0 ? void 0 : options.log) : new RelayStoreSubscriptions(options === null || options === void 0 ? void 0 : options.log);
        this._updatedRecordIDs = new Set();
        this._shouldProcessClientComponents = options === null || options === void 0 ? void 0 : options.shouldProcessClientComponents;
        initializeRecordSource(this._recordSource);
      }
      var _proto = RelayModernStore2.prototype;
      _proto.getSource = function getSource() {
        var _this$_optimisticSour;
        return (_this$_optimisticSour = this._optimisticSource) !== null && _this$_optimisticSour !== void 0 ? _this$_optimisticSour : this._recordSource;
      };
      _proto.check = function check(operation, options) {
        var _this$_optimisticSour2, _options$target, _options$handlers;
        var selector = operation.root;
        var source = (_this$_optimisticSour2 = this._optimisticSource) !== null && _this$_optimisticSour2 !== void 0 ? _this$_optimisticSour2 : this._recordSource;
        var globalInvalidationEpoch = this._globalInvalidationEpoch;
        var rootEntry = this._roots.get(operation.request.identifier);
        var operationLastWrittenAt = rootEntry != null ? rootEntry.epoch : null;
        if (globalInvalidationEpoch != null) {
          if (operationLastWrittenAt == null || operationLastWrittenAt <= globalInvalidationEpoch) {
            return {
              status: "stale"
            };
          }
        }
        var target = (_options$target = options === null || options === void 0 ? void 0 : options.target) !== null && _options$target !== void 0 ? _options$target : source;
        var handlers = (_options$handlers = options === null || options === void 0 ? void 0 : options.handlers) !== null && _options$handlers !== void 0 ? _options$handlers : [];
        var operationAvailability = DataChecker.check(source, target, selector, handlers, this._operationLoader, this._getDataID, this._shouldProcessClientComponents);
        return getAvailabilityStatus(operationAvailability, operationLastWrittenAt, rootEntry === null || rootEntry === void 0 ? void 0 : rootEntry.fetchTime, this._queryCacheExpirationTime);
      };
      _proto.retain = function retain(operation) {
        var _this2 = this;
        var id = operation.request.identifier;
        var disposed = false;
        var dispose = function dispose2() {
          if (disposed) {
            return;
          }
          disposed = true;
          var rootEntry2 = _this2._roots.get(id);
          if (rootEntry2 == null) {
            return;
          }
          rootEntry2.refCount--;
          if (rootEntry2.refCount === 0) {
            var _queryCacheExpirationTime = _this2._queryCacheExpirationTime;
            var rootEntryIsStale = rootEntry2.fetchTime != null && _queryCacheExpirationTime != null && rootEntry2.fetchTime <= Date.now() - _queryCacheExpirationTime;
            if (rootEntryIsStale) {
              _this2._roots["delete"](id);
              _this2.scheduleGC();
            } else {
              _this2._releaseBuffer.push(id);
              if (_this2._releaseBuffer.length > _this2._gcReleaseBufferSize) {
                var _id = _this2._releaseBuffer.shift();
                _this2._roots["delete"](_id);
                _this2.scheduleGC();
              }
            }
          }
        };
        var rootEntry = this._roots.get(id);
        if (rootEntry != null) {
          if (rootEntry.refCount === 0) {
            this._releaseBuffer = this._releaseBuffer.filter(function(_id) {
              return _id !== id;
            });
          }
          rootEntry.refCount += 1;
        } else {
          this._roots.set(id, {
            operation,
            refCount: 1,
            epoch: null,
            fetchTime: null
          });
        }
        return {
          dispose
        };
      };
      _proto.lookup = function lookup(selector) {
        var source = this.getSource();
        var snapshot = RelayReader.read(source, selector);
        if (true) {
          deepFreeze(snapshot);
        }
        return snapshot;
      };
      _proto.notify = function notify(sourceOperation, invalidateStore) {
        var _this3 = this;
        var log = this.__log;
        if (log != null) {
          log({
            name: "store.notify.start",
            sourceOperation
          });
        }
        this._currentWriteEpoch++;
        if (invalidateStore === true) {
          this._globalInvalidationEpoch = this._currentWriteEpoch;
        }
        var source = this.getSource();
        var updatedOwners = [];
        this._storeSubscriptions.updateSubscriptions(source, this._updatedRecordIDs, updatedOwners, sourceOperation);
        this._invalidationSubscriptions.forEach(function(subscription) {
          _this3._updateInvalidationSubscription(subscription, invalidateStore === true);
        });
        if (log != null) {
          log({
            name: "store.notify.complete",
            sourceOperation,
            updatedRecordIDs: this._updatedRecordIDs,
            invalidatedRecordIDs: this._invalidatedRecordIDs
          });
        }
        this._updatedRecordIDs.clear();
        this._invalidatedRecordIDs.clear();
        if (sourceOperation != null) {
          var id = sourceOperation.request.identifier;
          var rootEntry = this._roots.get(id);
          if (rootEntry != null) {
            rootEntry.epoch = this._currentWriteEpoch;
            rootEntry.fetchTime = Date.now();
          } else if (sourceOperation.request.node.params.operationKind === "query" && this._gcReleaseBufferSize > 0 && this._releaseBuffer.length < this._gcReleaseBufferSize) {
            var temporaryRootEntry = {
              operation: sourceOperation,
              refCount: 0,
              epoch: this._currentWriteEpoch,
              fetchTime: Date.now()
            };
            this._releaseBuffer.push(id);
            this._roots.set(id, temporaryRootEntry);
          }
        }
        return updatedOwners;
      };
      _proto.publish = function publish(source, idsMarkedForInvalidation) {
        var _this$_optimisticSour3;
        var target = (_this$_optimisticSour3 = this._optimisticSource) !== null && _this$_optimisticSour3 !== void 0 ? _this$_optimisticSour3 : this._recordSource;
        updateTargetFromSource(target, source, this._currentWriteEpoch + 1, idsMarkedForInvalidation, this._updatedRecordIDs, this._invalidatedRecordIDs);
        var log = this.__log;
        if (log != null) {
          log({
            name: "store.publish",
            source,
            optimistic: target === this._optimisticSource
          });
        }
      };
      _proto.subscribe = function subscribe(snapshot, callback) {
        return this._storeSubscriptions.subscribe(snapshot, callback);
      };
      _proto.holdGC = function holdGC() {
        var _this4 = this;
        if (this._gcRun) {
          this._gcRun = null;
          this._shouldScheduleGC = true;
        }
        this._gcHoldCounter++;
        var dispose = function dispose2() {
          if (_this4._gcHoldCounter > 0) {
            _this4._gcHoldCounter--;
            if (_this4._gcHoldCounter === 0 && _this4._shouldScheduleGC) {
              _this4.scheduleGC();
              _this4._shouldScheduleGC = false;
            }
          }
        };
        return {
          dispose
        };
      };
      _proto.toJSON = function toJSON() {
        return "RelayModernStore()";
      };
      _proto.__getUpdatedRecordIDs = function __getUpdatedRecordIDs() {
        return this._updatedRecordIDs;
      };
      _proto.lookupInvalidationState = function lookupInvalidationState(dataIDs) {
        var _this5 = this;
        var invalidations = new Map();
        dataIDs.forEach(function(dataID) {
          var _RelayModernRecord$ge;
          var record = _this5.getSource().get(dataID);
          invalidations.set(dataID, (_RelayModernRecord$ge = RelayModernRecord.getInvalidationEpoch(record)) !== null && _RelayModernRecord$ge !== void 0 ? _RelayModernRecord$ge : null);
        });
        invalidations.set("global", this._globalInvalidationEpoch);
        return {
          dataIDs,
          invalidations
        };
      };
      _proto.checkInvalidationState = function checkInvalidationState(prevInvalidationState) {
        var latestInvalidationState = this.lookupInvalidationState(prevInvalidationState.dataIDs);
        var currentInvalidations = latestInvalidationState.invalidations;
        var prevInvalidations = prevInvalidationState.invalidations;
        if (currentInvalidations.get("global") !== prevInvalidations.get("global")) {
          return true;
        }
        var _iterator = (0, _createForOfIteratorHelper2["default"])(prevInvalidationState.dataIDs), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var dataID = _step.value;
            if (currentInvalidations.get(dataID) !== prevInvalidations.get(dataID)) {
              return true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return false;
      };
      _proto.subscribeToInvalidationState = function subscribeToInvalidationState(invalidationState, callback) {
        var _this6 = this;
        var subscription = {
          callback,
          invalidationState
        };
        var dispose = function dispose2() {
          _this6._invalidationSubscriptions["delete"](subscription);
        };
        this._invalidationSubscriptions.add(subscription);
        return {
          dispose
        };
      };
      _proto._updateInvalidationSubscription = function _updateInvalidationSubscription(subscription, invalidatedStore) {
        var _this7 = this;
        var callback = subscription.callback, invalidationState = subscription.invalidationState;
        var dataIDs = invalidationState.dataIDs;
        var isSubscribedToInvalidatedIDs = invalidatedStore || dataIDs.some(function(dataID) {
          return _this7._invalidatedRecordIDs.has(dataID);
        });
        if (!isSubscribedToInvalidatedIDs) {
          return;
        }
        callback();
      };
      _proto.snapshot = function snapshot() {
        !(this._optimisticSource == null) ? true ? invariant(false, "RelayModernStore: Unexpected call to snapshot() while a previous snapshot exists.") : invariant(false) : void 0;
        var log = this.__log;
        if (log != null) {
          log({
            name: "store.snapshot"
          });
        }
        this._storeSubscriptions.snapshotSubscriptions(this.getSource());
        if (this._gcRun) {
          this._gcRun = null;
          this._shouldScheduleGC = true;
        }
        this._optimisticSource = RelayOptimisticRecordSource.create(this.getSource());
      };
      _proto.restore = function restore() {
        !(this._optimisticSource != null) ? true ? invariant(false, "RelayModernStore: Unexpected call to restore(), expected a snapshot to exist (make sure to call snapshot()).") : invariant(false) : void 0;
        var log = this.__log;
        if (log != null) {
          log({
            name: "store.restore"
          });
        }
        this._optimisticSource = null;
        if (this._shouldScheduleGC) {
          this.scheduleGC();
        }
        this._storeSubscriptions.restoreSubscriptions();
      };
      _proto.scheduleGC = function scheduleGC() {
        if (this._gcHoldCounter > 0) {
          this._shouldScheduleGC = true;
          return;
        }
        if (this._gcRun) {
          return;
        }
        this._gcRun = this._collect();
        this._gcScheduler(this._gcStep);
      };
      _proto.__gc = function __gc() {
        if (this._optimisticSource != null) {
          return;
        }
        var gcRun = this._collect();
        while (!gcRun.next().done) {
        }
      };
      _proto._collect = function* _collect() {
        top:
          while (true) {
            var startEpoch = this._currentWriteEpoch;
            var references = new Set();
            var _iterator2 = (0, _createForOfIteratorHelper2["default"])(this._roots.values()), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var operation = _step2.value.operation;
                var selector = operation.root;
                RelayReferenceMarker.mark(this._recordSource, selector, references, this._operationLoader, this._shouldProcessClientComponents);
                yield;
                if (startEpoch !== this._currentWriteEpoch) {
                  continue top;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            var log = this.__log;
            if (log != null) {
              log({
                name: "store.gc",
                references
              });
            }
            if (references.size === 0) {
              this._recordSource.clear();
            } else {
              var storeIDs = this._recordSource.getRecordIDs();
              for (var ii = 0; ii < storeIDs.length; ii++) {
                var dataID = storeIDs[ii];
                if (!references.has(dataID)) {
                  this._recordSource.remove(dataID);
                }
              }
            }
            return;
          }
      };
      return RelayModernStore2;
    }();
    function initializeRecordSource(target) {
      if (!target.has(ROOT_ID)) {
        var rootRecord = RelayModernRecord.create(ROOT_ID, ROOT_TYPE);
        target.set(ROOT_ID, rootRecord);
      }
    }
    function updateTargetFromSource(target, source, currentWriteEpoch, idsMarkedForInvalidation, updatedRecordIDs, invalidatedRecordIDs) {
      if (idsMarkedForInvalidation) {
        idsMarkedForInvalidation.forEach(function(dataID2) {
          var targetRecord2 = target.get(dataID2);
          var sourceRecord2 = source.get(dataID2);
          if (sourceRecord2 === null) {
            return;
          }
          var nextRecord2;
          if (targetRecord2 != null) {
            nextRecord2 = RelayModernRecord.clone(targetRecord2);
          } else {
            nextRecord2 = sourceRecord2 != null ? RelayModernRecord.clone(sourceRecord2) : null;
          }
          if (!nextRecord2) {
            return;
          }
          RelayModernRecord.setValue(nextRecord2, RelayStoreUtils.INVALIDATED_AT_KEY, currentWriteEpoch);
          invalidatedRecordIDs.add(dataID2);
          target.set(dataID2, nextRecord2);
        });
      }
      var dataIDs = source.getRecordIDs();
      for (var ii = 0; ii < dataIDs.length; ii++) {
        var dataID = dataIDs[ii];
        var sourceRecord = source.get(dataID);
        var targetRecord = target.get(dataID);
        if (true) {
          if (sourceRecord) {
            RelayModernRecord.freeze(sourceRecord);
          }
        }
        if (sourceRecord && targetRecord) {
          var nextRecord = RelayModernRecord.getType(targetRecord) === RelayStoreReactFlightUtils.REACT_FLIGHT_TYPE_NAME ? sourceRecord : RelayModernRecord.update(targetRecord, sourceRecord);
          if (nextRecord !== targetRecord) {
            if (true) {
              RelayModernRecord.freeze(nextRecord);
            }
            updatedRecordIDs.add(dataID);
            target.set(dataID, nextRecord);
          }
        } else if (sourceRecord === null) {
          target["delete"](dataID);
          if (targetRecord !== null) {
            updatedRecordIDs.add(dataID);
          }
        } else if (sourceRecord) {
          target.set(dataID, sourceRecord);
          updatedRecordIDs.add(dataID);
        }
      }
    }
    function getAvailabilityStatus(operationAvailability, operationLastWrittenAt, operationFetchTime, queryCacheExpirationTime) {
      var mostRecentlyInvalidatedAt = operationAvailability.mostRecentlyInvalidatedAt, status = operationAvailability.status;
      if (typeof mostRecentlyInvalidatedAt === "number") {
        if (operationLastWrittenAt == null || mostRecentlyInvalidatedAt > operationLastWrittenAt) {
          return {
            status: "stale"
          };
        }
      }
      if (status === "missing") {
        return {
          status: "missing"
        };
      }
      if (operationFetchTime != null && queryCacheExpirationTime != null) {
        var isStale = operationFetchTime <= Date.now() - queryCacheExpirationTime;
        if (isStale) {
          return {
            status: "stale"
          };
        }
      }
      return {
        status: "available",
        fetchTime: operationFetchTime !== null && operationFetchTime !== void 0 ? operationFetchTime : null
      };
    }
    module.exports = RelayModernStore;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/ConvertToExecuteFunction.js
var require_ConvertToExecuteFunction = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/ConvertToExecuteFunction.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayObservable = require_RelayObservable();
    function convertFetch(fn) {
      return function fetch(request, variables, cacheConfig, uploadables, logRequestInfo) {
        var result = fn(request, variables, cacheConfig, uploadables, logRequestInfo);
        if (result instanceof Error) {
          return RelayObservable.create(function(sink) {
            return sink.error(result);
          });
        }
        return RelayObservable.from(result);
      };
    }
    module.exports = {
      convertFetch
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/RelayNetwork.js
var require_RelayNetwork = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/RelayNetwork.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var _require = require_ConvertToExecuteFunction();
    var convertFetch = _require.convertFetch;
    function create(fetchFn, subscribe) {
      var observeFetch = convertFetch(fetchFn);
      function execute(request, variables, cacheConfig, uploadables, logRequestInfo) {
        if (request.operationKind === "subscription") {
          !subscribe ? true ? invariant(false, "RelayNetwork: This network layer does not support Subscriptions. To use Subscriptions, provide a custom network layer.") : invariant(false) : void 0;
          !!uploadables ? true ? invariant(false, "RelayNetwork: Cannot provide uploadables while subscribing.") : invariant(false) : void 0;
          return subscribe(request, variables, cacheConfig);
        }
        var pollInterval = cacheConfig.poll;
        if (pollInterval != null) {
          !!uploadables ? true ? invariant(false, "RelayNetwork: Cannot provide uploadables while polling.") : invariant(false) : void 0;
          return observeFetch(request, variables, {
            force: true
          }).poll(pollInterval);
        }
        return observeFetch(request, variables, cacheConfig, uploadables, logRequestInfo);
      }
      return {
        execute
      };
    }
    module.exports = {
      create
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayProfiler.js
var require_RelayProfiler = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayProfiler.js"(exports, module) {
    init_define_global();
    "use strict";
    var profileHandlersByName = {};
    var defaultProfiler = {
      stop: function stop() {
      }
    };
    var RelayProfiler = {
      profile: function profile(name, state) {
        var handlers = profileHandlersByName[name];
        if (handlers && handlers.length > 0) {
          var stopHandlers = [];
          for (var ii = handlers.length - 1; ii >= 0; ii--) {
            var stopHandler = handlers[ii](name, state);
            stopHandlers.unshift(stopHandler);
          }
          return {
            stop: function stop(error) {
              stopHandlers.forEach(function(stopHandler2) {
                return stopHandler2(error);
              });
            }
          };
        }
        return defaultProfiler;
      },
      attachProfileHandler: function attachProfileHandler(name, handler) {
        if (!profileHandlersByName.hasOwnProperty(name)) {
          profileHandlersByName[name] = [];
        }
        profileHandlersByName[name].push(handler);
      },
      detachProfileHandler: function detachProfileHandler(name, handler) {
        if (profileHandlersByName.hasOwnProperty(name)) {
          removeFromArray(profileHandlersByName[name], handler);
        }
      }
    };
    function removeFromArray(array, element) {
      var index = array.indexOf(element);
      if (index !== -1) {
        array.splice(index, 1);
      }
    }
    module.exports = RelayProfiler;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/RelayQueryResponseCache.js
var require_RelayQueryResponseCache = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/network/RelayQueryResponseCache.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var invariant = require_browser();
    var stableCopy = require_stableCopy();
    var RelayQueryResponseCache = function() {
      function RelayQueryResponseCache2(_ref) {
        var size = _ref.size, ttl = _ref.ttl;
        !(size > 0) ? true ? invariant(false, "RelayQueryResponseCache: Expected the max cache size to be > 0, got `%s`.", size) : invariant(false) : void 0;
        !(ttl > 0) ? true ? invariant(false, "RelayQueryResponseCache: Expected the max ttl to be > 0, got `%s`.", ttl) : invariant(false) : void 0;
        this._responses = new Map();
        this._size = size;
        this._ttl = ttl;
      }
      var _proto = RelayQueryResponseCache2.prototype;
      _proto.clear = function clear() {
        this._responses.clear();
      };
      _proto.get = function get(queryID, variables) {
        var _this = this;
        var cacheKey = getCacheKey(queryID, variables);
        this._responses.forEach(function(response2, key) {
          if (!isCurrent(response2.fetchTime, _this._ttl)) {
            _this._responses["delete"](key);
          }
        });
        var response = this._responses.get(cacheKey);
        return response != null ? (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, response.payload), {}, {
          extensions: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, response.payload.extensions), {}, {
            cacheTimestamp: response.fetchTime
          })
        }) : null;
      };
      _proto.set = function set(queryID, variables, payload) {
        var fetchTime = Date.now();
        var cacheKey = getCacheKey(queryID, variables);
        this._responses["delete"](cacheKey);
        this._responses.set(cacheKey, {
          fetchTime,
          payload
        });
        if (this._responses.size > this._size) {
          var firstKey = this._responses.keys().next();
          if (!firstKey.done) {
            this._responses["delete"](firstKey.value);
          }
        }
      };
      return RelayQueryResponseCache2;
    }();
    function getCacheKey(queryID, variables) {
      return JSON.stringify(stableCopy({
        queryID,
        variables
      }));
    }
    function isCurrent(fetchTime, ttl) {
      return fetchTime + ttl >= Date.now();
    }
    module.exports = RelayQueryResponseCache;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayReplaySubject.js
var require_RelayReplaySubject = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/RelayReplaySubject.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var RelayObservable = require_RelayObservable();
    var invariant = require_browser();
    var RelayReplaySubject = function() {
      function RelayReplaySubject2() {
        var _this = this;
        (0, _defineProperty2["default"])(this, "_complete", false);
        (0, _defineProperty2["default"])(this, "_events", []);
        (0, _defineProperty2["default"])(this, "_sinks", new Set());
        (0, _defineProperty2["default"])(this, "_subscription", null);
        this._observable = RelayObservable.create(function(sink) {
          _this._sinks.add(sink);
          var events = _this._events;
          for (var i = 0; i < events.length; i++) {
            if (sink.closed) {
              break;
            }
            var event = events[i];
            switch (event.kind) {
              case "complete":
                sink.complete();
                break;
              case "error":
                sink.error(event.error);
                break;
              case "next":
                sink.next(event.data);
                break;
              default:
                event.kind;
                true ? true ? invariant(false, "RelayReplaySubject: Unknown event kind `%s`.", event.kind) : invariant(false) : void 0;
            }
          }
          return function() {
            _this._sinks["delete"](sink);
          };
        });
      }
      var _proto = RelayReplaySubject2.prototype;
      _proto.complete = function complete() {
        if (this._complete === true) {
          return;
        }
        this._complete = true;
        this._events.push({
          kind: "complete"
        });
        this._sinks.forEach(function(sink) {
          return sink.complete();
        });
      };
      _proto.error = function error(_error) {
        if (this._complete === true) {
          return;
        }
        this._complete = true;
        this._events.push({
          kind: "error",
          error: _error
        });
        this._sinks.forEach(function(sink) {
          return sink.error(_error);
        });
      };
      _proto.next = function next(data) {
        if (this._complete === true) {
          return;
        }
        this._events.push({
          kind: "next",
          data
        });
        this._sinks.forEach(function(sink) {
          return sink.next(data);
        });
      };
      _proto.subscribe = function subscribe(observer) {
        this._subscription = this._observable.subscribe(observer);
        return this._subscription;
      };
      _proto.unsubscribe = function unsubscribe() {
        if (this._subscription) {
          this._subscription.unsubscribe();
          this._subscription = null;
        }
      };
      _proto.getObserverCount = function getObserverCount() {
        return this._sinks.size;
      };
      return RelayReplaySubject2;
    }();
    module.exports = RelayReplaySubject;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/isRelayModernEnvironment.js
var require_isRelayModernEnvironment = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/isRelayModernEnvironment.js"(exports, module) {
    init_define_global();
    "use strict";
    function isRelayModernEnvironment(environment) {
      return Boolean(environment && environment["@@RelayModernEnvironment"]);
    }
    module.exports = isRelayModernEnvironment;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/applyOptimisticMutation.js
var require_applyOptimisticMutation = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/applyOptimisticMutation.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayDeclarativeMutationConfig = require_RelayDeclarativeMutationConfig();
    var invariant = require_browser();
    var isRelayModernEnvironment = require_isRelayModernEnvironment();
    var _require = require_GraphQLTag();
    var getRequest = _require.getRequest;
    var _require2 = require_RelayModernOperationDescriptor();
    var createOperationDescriptor = _require2.createOperationDescriptor;
    function applyOptimisticMutation(environment, config) {
      !isRelayModernEnvironment(environment) ? true ? invariant(false, "commitMutation: expected `environment` to be an instance of `RelayModernEnvironment`.") : invariant(false) : void 0;
      var mutation = getRequest(config.mutation);
      if (mutation.params.operationKind !== "mutation") {
        throw new Error("commitMutation: Expected mutation operation");
      }
      var optimisticUpdater = config.optimisticUpdater;
      var configs = config.configs, optimisticResponse = config.optimisticResponse, variables = config.variables;
      var operation = createOperationDescriptor(mutation, variables);
      if (configs) {
        var _RelayDeclarativeMuta = RelayDeclarativeMutationConfig.convert(configs, mutation, optimisticUpdater);
        optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
      }
      return environment.applyMutation({
        operation,
        response: optimisticResponse,
        updater: optimisticUpdater
      });
    }
    module.exports = applyOptimisticMutation;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/commitLocalUpdate.js
var require_commitLocalUpdate = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/commitLocalUpdate.js"(exports, module) {
    init_define_global();
    "use strict";
    function commitLocalUpdate(environment, updater) {
      environment.commitUpdate(updater);
    }
    module.exports = commitLocalUpdate;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/validateMutation.js
var require_validateMutation = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/validateMutation.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var warning = require_warning();
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var _require = require_RelayConcreteNode();
    var CONDITION = _require.CONDITION;
    var CLIENT_COMPONENT = _require.CLIENT_COMPONENT;
    var CLIENT_EXTENSION = _require.CLIENT_EXTENSION;
    var DEFER = _require.DEFER;
    var FLIGHT_FIELD = _require.FLIGHT_FIELD;
    var FRAGMENT_SPREAD = _require.FRAGMENT_SPREAD;
    var INLINE_FRAGMENT = _require.INLINE_FRAGMENT;
    var LINKED_FIELD = _require.LINKED_FIELD;
    var LINKED_HANDLE = _require.LINKED_HANDLE;
    var MODULE_IMPORT = _require.MODULE_IMPORT;
    var SCALAR_FIELD = _require.SCALAR_FIELD;
    var SCALAR_HANDLE = _require.SCALAR_HANDLE;
    var STREAM = _require.STREAM;
    var TYPE_DISCRIMINATOR = _require.TYPE_DISCRIMINATOR;
    var validateMutation = function validateMutation2() {
    };
    if (true) {
      addFieldToDiff = function addFieldToDiff2(path, diff, isScalar) {
        var deepLoc = diff;
        path.split(".").forEach(function(key, index, arr) {
          if (deepLoc[key] == null) {
            deepLoc[key] = {};
          }
          if (isScalar && index === arr.length - 1) {
            deepLoc[key] = "<scalar>";
          }
          deepLoc = deepLoc[key];
        });
      };
      validateMutation = function validateMutation2(optimisticResponse, mutation, variables) {
        var operationName = mutation.operation.name;
        var context = {
          path: "ROOT",
          visitedPaths: new Set(),
          variables: variables || {},
          missingDiff: {},
          extraDiff: {},
          moduleImportPaths: new Set()
        };
        validateSelections(optimisticResponse, mutation.operation.selections, context);
        validateOptimisticResponse(optimisticResponse, context);
        true ? warning(context.missingDiff.ROOT == null, "Expected `optimisticResponse` to match structure of server response for mutation `%s`, please define fields for all of\n%s", operationName, JSON.stringify(context.missingDiff.ROOT, null, 2)) : void 0;
        true ? warning(context.extraDiff.ROOT == null, "Expected `optimisticResponse` to match structure of server response for mutation `%s`, please remove all fields of\n%s", operationName, JSON.stringify(context.extraDiff.ROOT, null, 2)) : void 0;
      };
      validateSelections = function validateSelections2(optimisticResponse, selections, context) {
        selections.forEach(function(selection) {
          return validateSelection(optimisticResponse, selection, context);
        });
      };
      validateSelection = function validateSelection2(optimisticResponse, selection, context) {
        switch (selection.kind) {
          case CONDITION:
            validateSelections(optimisticResponse, selection.selections, context);
            return;
          case CLIENT_COMPONENT:
          case FRAGMENT_SPREAD:
            validateSelections(optimisticResponse, selection.fragment.selections, context);
            return;
          case SCALAR_FIELD:
          case LINKED_FIELD:
          case FLIGHT_FIELD:
            return validateField(optimisticResponse, selection, context);
          case INLINE_FRAGMENT:
            var type = selection.type;
            var isConcreteType = selection.abstractKey == null;
            selection.selections.forEach(function(subselection) {
              if (isConcreteType && optimisticResponse.__typename !== type) {
                return;
              }
              validateSelection2(optimisticResponse, subselection, context);
            });
            return;
          case CLIENT_EXTENSION:
            selection.selections.forEach(function(subselection) {
              validateSelection2(optimisticResponse, subselection, context);
            });
            return;
          case MODULE_IMPORT:
            return validateModuleImport(context);
          case LINKED_HANDLE:
          case SCALAR_HANDLE:
          case DEFER:
          case STREAM:
          case TYPE_DISCRIMINATOR: {
            return;
          }
          default:
            selection;
            return;
        }
      };
      validateModuleImport = function validateModuleImport2(context) {
        context.moduleImportPaths.add(context.path);
      };
      validateField = function validateField2(optimisticResponse, field, context) {
        var fieldName = field.alias || field.name;
        var path = "".concat(context.path, ".").concat(fieldName);
        context.visitedPaths.add(path);
        switch (field.kind) {
          case SCALAR_FIELD:
            if (hasOwnProperty.call(optimisticResponse, fieldName) === false) {
              addFieldToDiff(path, context.missingDiff, true);
            }
            return;
          case LINKED_FIELD:
            var selections = field.selections;
            if (optimisticResponse[fieldName] === null || hasOwnProperty.call(optimisticResponse, fieldName) && optimisticResponse[fieldName] === void 0) {
              return;
            }
            if (field.plural) {
              if (Array.isArray(optimisticResponse[fieldName])) {
                optimisticResponse[fieldName].forEach(function(r) {
                  if (r !== null) {
                    validateSelections(r, selections, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, context), {}, {
                      path
                    }));
                  }
                });
                return;
              } else {
                addFieldToDiff(path, context.missingDiff);
                return;
              }
            } else {
              if (optimisticResponse[fieldName] instanceof Object) {
                validateSelections(optimisticResponse[fieldName], selections, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, context), {}, {
                  path
                }));
                return;
              } else {
                addFieldToDiff(path, context.missingDiff);
                return;
              }
            }
          case FLIGHT_FIELD:
            if (optimisticResponse[fieldName] === null || hasOwnProperty.call(optimisticResponse, fieldName) && optimisticResponse[fieldName] === void 0) {
              return;
            }
            throw new Error("validateMutation: Flight fields are not compatible with optimistic updates, as React does not have the component code necessary to process new data on the client. Instead, you should update your code to require a full refetch of the Flight field so your UI can be updated.");
        }
      };
      validateOptimisticResponse = function validateOptimisticResponse2(optimisticResponse, context) {
        if (Array.isArray(optimisticResponse)) {
          optimisticResponse.forEach(function(r) {
            if (r instanceof Object) {
              validateOptimisticResponse2(r, context);
            }
          });
          return;
        }
        Object.keys(optimisticResponse).forEach(function(key) {
          var value = optimisticResponse[key];
          var path = "".concat(context.path, ".").concat(key);
          if (context.moduleImportPaths.has(path)) {
            return;
          }
          if (!context.visitedPaths.has(path)) {
            addFieldToDiff(path, context.extraDiff);
            return;
          }
          if (value instanceof Object) {
            validateOptimisticResponse2(value, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, context), {}, {
              path
            }));
          }
        });
      };
    }
    var addFieldToDiff;
    var validateSelections;
    var validateSelection;
    var validateModuleImport;
    var validateField;
    var validateOptimisticResponse;
    module.exports = validateMutation;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/commitMutation.js
var require_commitMutation = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/mutations/commitMutation.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var RelayDeclarativeMutationConfig = require_RelayDeclarativeMutationConfig();
    var invariant = require_browser();
    var isRelayModernEnvironment = require_isRelayModernEnvironment();
    var validateMutation = require_validateMutation();
    var warning = require_warning();
    var _require = require_GraphQLTag();
    var getRequest = _require.getRequest;
    var _require2 = require_ClientID();
    var generateUniqueClientID = _require2.generateUniqueClientID;
    var _require3 = require_RelayModernOperationDescriptor();
    var createOperationDescriptor = _require3.createOperationDescriptor;
    function commitMutation(environment, config) {
      !isRelayModernEnvironment(environment) ? true ? invariant(false, "commitMutation: expected `environment` to be an instance of `RelayModernEnvironment`.") : invariant(false) : void 0;
      var mutation = getRequest(config.mutation);
      if (mutation.params.operationKind !== "mutation") {
        throw new Error("commitMutation: Expected mutation operation");
      }
      if (mutation.kind !== "Request") {
        throw new Error("commitMutation: Expected mutation to be of type request");
      }
      var optimisticResponse = config.optimisticResponse, optimisticUpdater = config.optimisticUpdater, updater = config.updater;
      var configs = config.configs, cacheConfig = config.cacheConfig, onError = config.onError, onUnsubscribe = config.onUnsubscribe, variables = config.variables, uploadables = config.uploadables;
      var operation = createOperationDescriptor(mutation, variables, cacheConfig, generateUniqueClientID());
      if (typeof optimisticResponse === "function") {
        optimisticResponse = optimisticResponse();
        true ? warning(false, "commitMutation: Expected `optimisticResponse` to be an object, received a function.") : void 0;
      }
      if (true) {
        if (optimisticResponse instanceof Object) {
          validateMutation(optimisticResponse, mutation, variables);
        }
      }
      if (configs) {
        var _RelayDeclarativeMuta = RelayDeclarativeMutationConfig.convert(configs, mutation, optimisticUpdater, updater);
        optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
        updater = _RelayDeclarativeMuta.updater;
      }
      var errors = [];
      var subscription = environment.executeMutation({
        operation,
        optimisticResponse,
        optimisticUpdater,
        updater,
        uploadables
      }).subscribe({
        next: function next(payload) {
          if (Array.isArray(payload)) {
            payload.forEach(function(item) {
              if (item.errors) {
                errors.push.apply(errors, (0, _toConsumableArray2["default"])(item.errors));
              }
            });
          } else {
            if (payload.errors) {
              errors.push.apply(errors, (0, _toConsumableArray2["default"])(payload.errors));
            }
          }
        },
        complete: function complete() {
          var onCompleted = config.onCompleted;
          if (onCompleted) {
            var snapshot = environment.lookup(operation.fragment);
            onCompleted(snapshot.data, errors.length !== 0 ? errors : null);
          }
        },
        error: onError,
        unsubscribe: onUnsubscribe
      });
      return {
        dispose: subscription.unsubscribe
      };
    }
    module.exports = commitMutation;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/isScalarAndEqual.js
var require_isScalarAndEqual = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/isScalarAndEqual.js"(exports, module) {
    init_define_global();
    "use strict";
    function isScalarAndEqual(valueA, valueB) {
      return valueA === valueB && (valueA === null || typeof valueA !== "object");
    }
    module.exports = isScalarAndEqual;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/reportMissingRequiredFields.js
var require_reportMissingRequiredFields = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/reportMissingRequiredFields.js"(exports, module) {
    init_define_global();
    "use strict";
    function reportMissingRequiredFields(environment, missingRequiredFields) {
      switch (missingRequiredFields.action) {
        case "THROW": {
          var _missingRequiredField = missingRequiredFields.field, path = _missingRequiredField.path, owner = _missingRequiredField.owner;
          environment.requiredFieldLogger({
            kind: "missing_field.throw",
            owner,
            fieldPath: path
          });
          throw new Error("Relay: Missing @required value at path '".concat(path, "' in '").concat(owner, "'."));
        }
        case "LOG":
          missingRequiredFields.fields.forEach(function(_ref) {
            var path2 = _ref.path, owner2 = _ref.owner;
            environment.requiredFieldLogger({
              kind: "missing_field.log",
              owner: owner2,
              fieldPath: path2
            });
          });
          break;
        default: {
          missingRequiredFields.action;
        }
      }
    }
    module.exports = reportMissingRequiredFields;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/fetchQueryInternal.js
var require_fetchQueryInternal = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/fetchQueryInternal.js"(exports, module) {
    init_define_global();
    "use strict";
    var Observable = require_RelayObservable();
    var RelayReplaySubject = require_RelayReplaySubject();
    var invariant = require_browser();
    var WEAKMAP_SUPPORTED = typeof WeakMap === "function";
    var requestCachesByEnvironment = WEAKMAP_SUPPORTED ? new WeakMap() : new Map();
    function fetchQuery(environment, operation) {
      return fetchQueryDeduped(environment, operation.request.identifier, function() {
        return environment.execute({
          operation
        });
      });
    }
    function fetchQueryDeduped(environment, identifier, fetchFn) {
      return Observable.create(function(sink) {
        var requestCache = getRequestCache(environment);
        var cachedRequest = requestCache.get(identifier);
        if (!cachedRequest) {
          fetchFn()["finally"](function() {
            return requestCache["delete"](identifier);
          }).subscribe({
            start: function start(subscription) {
              cachedRequest = {
                identifier,
                subject: new RelayReplaySubject(),
                subjectForInFlightStatus: new RelayReplaySubject(),
                subscription
              };
              requestCache.set(identifier, cachedRequest);
            },
            next: function next(response) {
              var cachedReq = getCachedRequest(requestCache, identifier);
              cachedReq.subject.next(response);
              cachedReq.subjectForInFlightStatus.next(response);
            },
            error: function error(_error) {
              var cachedReq = getCachedRequest(requestCache, identifier);
              cachedReq.subject.error(_error);
              cachedReq.subjectForInFlightStatus.error(_error);
            },
            complete: function complete() {
              var cachedReq = getCachedRequest(requestCache, identifier);
              cachedReq.subject.complete();
              cachedReq.subjectForInFlightStatus.complete();
            },
            unsubscribe: function unsubscribe(subscription) {
              var cachedReq = getCachedRequest(requestCache, identifier);
              cachedReq.subject.unsubscribe();
              cachedReq.subjectForInFlightStatus.unsubscribe();
            }
          });
        }
        !(cachedRequest != null) ? true ? invariant(false, "[fetchQueryInternal] fetchQueryDeduped: Expected `start` to be called synchronously") : invariant(false) : void 0;
        return getObservableForCachedRequest(requestCache, cachedRequest).subscribe(sink);
      });
    }
    function getObservableForCachedRequest(requestCache, cachedRequest) {
      return Observable.create(function(sink) {
        var subscription = cachedRequest.subject.subscribe(sink);
        return function() {
          subscription.unsubscribe();
          var cachedRequestInstance = requestCache.get(cachedRequest.identifier);
          if (cachedRequestInstance) {
            var requestSubscription = cachedRequestInstance.subscription;
            if (requestSubscription != null && cachedRequestInstance.subject.getObserverCount() === 0) {
              requestSubscription.unsubscribe();
              requestCache["delete"](cachedRequest.identifier);
            }
          }
        };
      });
    }
    function getActiveStatusObservableForCachedRequest(environment, requestCache, cachedRequest) {
      return Observable.create(function(sink) {
        var subscription = cachedRequest.subjectForInFlightStatus.subscribe({
          error: sink.error,
          next: function next(response) {
            if (!environment.isRequestActive(cachedRequest.identifier)) {
              sink.complete();
              return;
            }
            sink.next();
          },
          complete: sink.complete,
          unsubscribe: sink.complete
        });
        return function() {
          subscription.unsubscribe();
        };
      });
    }
    function getPromiseForActiveRequest(environment, request) {
      var requestCache = getRequestCache(environment);
      var cachedRequest = requestCache.get(request.identifier);
      if (!cachedRequest) {
        return null;
      }
      if (!environment.isRequestActive(cachedRequest.identifier)) {
        return null;
      }
      return new Promise(function(resolve, reject) {
        var resolveOnNext = false;
        getActiveStatusObservableForCachedRequest(environment, requestCache, cachedRequest).subscribe({
          complete: resolve,
          error: reject,
          next: function next(response) {
            if (resolveOnNext) {
              resolve(response);
            }
          }
        });
        resolveOnNext = true;
      });
    }
    function getObservableForActiveRequest(environment, request) {
      var requestCache = getRequestCache(environment);
      var cachedRequest = requestCache.get(request.identifier);
      if (!cachedRequest) {
        return null;
      }
      if (!environment.isRequestActive(cachedRequest.identifier)) {
        return null;
      }
      return getActiveStatusObservableForCachedRequest(environment, requestCache, cachedRequest);
    }
    function getRequestCache(environment) {
      var cached = requestCachesByEnvironment.get(environment);
      if (cached != null) {
        return cached;
      }
      var requestCache = new Map();
      requestCachesByEnvironment.set(environment, requestCache);
      return requestCache;
    }
    function getCachedRequest(requestCache, identifier) {
      var cached = requestCache.get(identifier);
      !(cached != null) ? true ? invariant(false, "[fetchQueryInternal] getCachedRequest: Expected request to be cached") : invariant(false) : void 0;
      return cached;
    }
    module.exports = {
      fetchQuery,
      fetchQueryDeduped,
      getPromiseForActiveRequest,
      getObservableForActiveRequest
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernFragmentSpecResolver.js
var require_RelayModernFragmentSpecResolver = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/RelayModernFragmentSpecResolver.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var areEqual = require_areEqual();
    var invariant = require_browser();
    var isScalarAndEqual = require_isScalarAndEqual();
    var reportMissingRequiredFields = require_reportMissingRequiredFields();
    var warning = require_warning();
    var _require = require_fetchQueryInternal();
    var getPromiseForActiveRequest = _require.getPromiseForActiveRequest;
    var _require2 = require_RelayModernOperationDescriptor();
    var createRequestDescriptor = _require2.createRequestDescriptor;
    var _require3 = require_RelayModernSelector();
    var areEqualSelectors = _require3.areEqualSelectors;
    var createReaderSelector = _require3.createReaderSelector;
    var getSelectorsFromObject = _require3.getSelectorsFromObject;
    var RelayModernFragmentSpecResolver = function() {
      function RelayModernFragmentSpecResolver2(context, fragments, props, callback, rootIsQueryRenderer) {
        var _this = this;
        (0, _defineProperty2["default"])(this, "_onChange", function() {
          _this._stale = true;
          if (typeof _this._callback === "function") {
            _this._callback();
          }
        });
        this._callback = callback;
        this._context = context;
        this._data = {};
        this._fragments = fragments;
        this._props = {};
        this._resolvers = {};
        this._stale = false;
        this._rootIsQueryRenderer = rootIsQueryRenderer;
        this.setProps(props);
      }
      var _proto = RelayModernFragmentSpecResolver2.prototype;
      _proto.dispose = function dispose() {
        for (var _key in this._resolvers) {
          if (this._resolvers.hasOwnProperty(_key)) {
            disposeCallback(this._resolvers[_key]);
          }
        }
      };
      _proto.resolve = function resolve() {
        if (this._stale) {
          var prevData = this._data;
          var nextData;
          for (var _key2 in this._resolvers) {
            if (this._resolvers.hasOwnProperty(_key2)) {
              var resolver = this._resolvers[_key2];
              var prevItem = prevData[_key2];
              if (resolver) {
                var nextItem = resolver.resolve();
                if (nextData || nextItem !== prevItem) {
                  nextData = nextData || (0, _objectSpread2["default"])({}, prevData);
                  nextData[_key2] = nextItem;
                }
              } else {
                var prop = this._props[_key2];
                var _nextItem = prop !== void 0 ? prop : null;
                if (nextData || !isScalarAndEqual(_nextItem, prevItem)) {
                  nextData = nextData || (0, _objectSpread2["default"])({}, prevData);
                  nextData[_key2] = _nextItem;
                }
              }
            }
          }
          this._data = nextData || prevData;
          this._stale = false;
        }
        return this._data;
      };
      _proto.setCallback = function setCallback(callback) {
        this._callback = callback;
      };
      _proto.setProps = function setProps(props) {
        var ownedSelectors = getSelectorsFromObject(this._fragments, props);
        this._props = {};
        for (var _key3 in ownedSelectors) {
          if (ownedSelectors.hasOwnProperty(_key3)) {
            var ownedSelector = ownedSelectors[_key3];
            var resolver = this._resolvers[_key3];
            if (ownedSelector == null) {
              if (resolver != null) {
                resolver.dispose();
              }
              resolver = null;
            } else if (ownedSelector.kind === "PluralReaderSelector") {
              if (resolver == null) {
                resolver = new SelectorListResolver(this._context.environment, this._rootIsQueryRenderer, ownedSelector, this._onChange);
              } else {
                !(resolver instanceof SelectorListResolver) ? true ? invariant(false, "RelayModernFragmentSpecResolver: Expected prop `%s` to always be an array.", _key3) : invariant(false) : void 0;
                resolver.setSelector(ownedSelector);
              }
            } else {
              if (resolver == null) {
                resolver = new SelectorResolver(this._context.environment, this._rootIsQueryRenderer, ownedSelector, this._onChange);
              } else {
                !(resolver instanceof SelectorResolver) ? true ? invariant(false, "RelayModernFragmentSpecResolver: Expected prop `%s` to always be an object.", _key3) : invariant(false) : void 0;
                resolver.setSelector(ownedSelector);
              }
            }
            this._props[_key3] = props[_key3];
            this._resolvers[_key3] = resolver;
          }
        }
        this._stale = true;
      };
      _proto.setVariables = function setVariables(variables, request) {
        for (var _key4 in this._resolvers) {
          if (this._resolvers.hasOwnProperty(_key4)) {
            var resolver = this._resolvers[_key4];
            if (resolver) {
              resolver.setVariables(variables, request);
            }
          }
        }
        this._stale = true;
      };
      return RelayModernFragmentSpecResolver2;
    }();
    var SelectorResolver = function() {
      function SelectorResolver2(environment, rootIsQueryRenderer, selector, callback) {
        var _this2 = this;
        (0, _defineProperty2["default"])(this, "_onChange", function(snapshot) {
          _this2._data = snapshot.data;
          _this2._isMissingData = snapshot.isMissingData;
          _this2._missingRequiredFields = snapshot.missingRequiredFields;
          _this2._callback();
        });
        var _snapshot = environment.lookup(selector);
        this._callback = callback;
        this._data = _snapshot.data;
        this._isMissingData = _snapshot.isMissingData;
        this._missingRequiredFields = _snapshot.missingRequiredFields;
        this._environment = environment;
        this._rootIsQueryRenderer = rootIsQueryRenderer;
        this._selector = selector;
        this._subscription = environment.subscribe(_snapshot, this._onChange);
      }
      var _proto2 = SelectorResolver2.prototype;
      _proto2.dispose = function dispose() {
        if (this._subscription) {
          this._subscription.dispose();
          this._subscription = null;
        }
      };
      _proto2.resolve = function resolve() {
        if (RelayFeatureFlags.ENABLE_RELAY_CONTAINERS_SUSPENSE === true && this._isMissingData === true) {
          var _getPromiseForActiveR;
          var promise = (_getPromiseForActiveR = getPromiseForActiveRequest(this._environment, this._selector.owner)) !== null && _getPromiseForActiveR !== void 0 ? _getPromiseForActiveR : this._environment.getOperationTracker().getPromiseForPendingOperationsAffectingOwner(this._selector.owner);
          if (promise != null) {
            if (this._rootIsQueryRenderer) {
              true ? warning(false, "Relay: Relay Container for fragment `%s` has missing data and would suspend. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.", this._selector.node.name) : void 0;
            } else {
              true ? warning(false, "Relay: Relay Container for fragment `%s` suspended. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.", this._selector.node.name) : void 0;
              throw promise;
            }
          }
        }
        if (this._missingRequiredFields != null) {
          reportMissingRequiredFields(this._environment, this._missingRequiredFields);
        }
        return this._data;
      };
      _proto2.setSelector = function setSelector(selector) {
        if (this._subscription != null && areEqualSelectors(selector, this._selector)) {
          return;
        }
        this.dispose();
        var snapshot = this._environment.lookup(selector);
        this._data = snapshot.data;
        this._isMissingData = snapshot.isMissingData;
        this._missingRequiredFields = snapshot.missingRequiredFields;
        this._selector = selector;
        this._subscription = this._environment.subscribe(snapshot, this._onChange);
      };
      _proto2.setVariables = function setVariables(variables, request) {
        if (areEqual(variables, this._selector.variables)) {
          return;
        }
        var requestDescriptor = createRequestDescriptor(request, variables);
        var selector = createReaderSelector(this._selector.node, this._selector.dataID, variables, requestDescriptor);
        this.setSelector(selector);
      };
      return SelectorResolver2;
    }();
    var SelectorListResolver = function() {
      function SelectorListResolver2(environment, rootIsQueryRenderer, selector, callback) {
        var _this3 = this;
        (0, _defineProperty2["default"])(this, "_onChange", function(data) {
          _this3._stale = true;
          _this3._callback();
        });
        this._callback = callback;
        this._data = [];
        this._environment = environment;
        this._resolvers = [];
        this._stale = true;
        this._rootIsQueryRenderer = rootIsQueryRenderer;
        this.setSelector(selector);
      }
      var _proto3 = SelectorListResolver2.prototype;
      _proto3.dispose = function dispose() {
        this._resolvers.forEach(disposeCallback);
      };
      _proto3.resolve = function resolve() {
        if (this._stale) {
          var prevData = this._data;
          var nextData;
          for (var ii = 0; ii < this._resolvers.length; ii++) {
            var prevItem = prevData[ii];
            var nextItem = this._resolvers[ii].resolve();
            if (nextData || nextItem !== prevItem) {
              nextData = nextData || prevData.slice(0, ii);
              nextData.push(nextItem);
            }
          }
          if (!nextData && this._resolvers.length !== prevData.length) {
            nextData = prevData.slice(0, this._resolvers.length);
          }
          this._data = nextData || prevData;
          this._stale = false;
        }
        return this._data;
      };
      _proto3.setSelector = function setSelector(selector) {
        var selectors = selector.selectors;
        while (this._resolvers.length > selectors.length) {
          var resolver = this._resolvers.pop();
          resolver.dispose();
        }
        for (var ii = 0; ii < selectors.length; ii++) {
          if (ii < this._resolvers.length) {
            this._resolvers[ii].setSelector(selectors[ii]);
          } else {
            this._resolvers[ii] = new SelectorResolver(this._environment, this._rootIsQueryRenderer, selectors[ii], this._onChange);
          }
        }
        this._stale = true;
      };
      _proto3.setVariables = function setVariables(variables, request) {
        this._resolvers.forEach(function(resolver) {
          return resolver.setVariables(variables, request);
        });
        this._stale = true;
      };
      return SelectorListResolver2;
    }();
    function disposeCallback(disposable) {
      disposable && disposable.dispose();
    }
    module.exports = RelayModernFragmentSpecResolver;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/createFragmentSpecResolver.js
var require_createFragmentSpecResolver = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/createFragmentSpecResolver.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayModernFragmentSpecResolver = require_RelayModernFragmentSpecResolver();
    var warning = require_warning();
    function createFragmentSpecResolver(context, containerName, fragments, props, rootIsQueryRenderer, callback) {
      if (true) {
        var fragmentNames = Object.keys(fragments);
        fragmentNames.forEach(function(fragmentName) {
          var propValue = props[fragmentName];
          true ? warning(propValue !== void 0, "createFragmentSpecResolver: Expected prop `%s` to be supplied to `%s`, but got `undefined`. Pass an explicit `null` if this is intentional.", fragmentName, containerName) : void 0;
        });
      }
      return new RelayModernFragmentSpecResolver(context, fragments, props, callback, rootIsQueryRenderer);
    }
    module.exports = createFragmentSpecResolver;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/createPayloadFor3DField.js
var require_createPayloadFor3DField = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/createPayloadFor3DField.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _require = require_RelayStoreUtils();
    var getModuleComponentKey = _require.getModuleComponentKey;
    var getModuleOperationKey = _require.getModuleOperationKey;
    function createPayloadFor3DField(name, operation, component, response) {
      var data = (0, _objectSpread2["default"])({}, response);
      data[getModuleComponentKey(name)] = component;
      data[getModuleOperationKey(name)] = operation;
      return data;
    }
    module.exports = createPayloadFor3DField;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/createRelayContext.js
var require_createRelayContext = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/createRelayContext.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var relayContext;
    var firstReact;
    function createRelayContext(react) {
      if (!relayContext) {
        relayContext = react.createContext(null);
        if (true) {
          relayContext.displayName = "RelayContext";
        }
        firstReact = react;
      }
      !(react === firstReact) ? true ? invariant(false, "[createRelayContext]: You passing a different instance of React", react.version) : invariant(false) : void 0;
      return relayContext;
    }
    module.exports = createRelayContext;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/fetchQuery.js
var require_fetchQuery = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/fetchQuery.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var RelayObservable = require_RelayObservable();
    var fetchQueryInternal = require_fetchQueryInternal();
    var invariant = require_browser();
    var reportMissingRequiredFields = require_reportMissingRequiredFields();
    var _require = require_RelayModernOperationDescriptor();
    var createOperationDescriptor = _require.createOperationDescriptor;
    var _require2 = require_GraphQLTag();
    var getRequest = _require2.getRequest;
    function fetchQuery(environment, query, variables, options) {
      var _options$fetchPolicy;
      var queryNode = getRequest(query);
      !(queryNode.params.operationKind === "query") ? true ? invariant(false, "fetchQuery: Expected query operation") : invariant(false) : void 0;
      var networkCacheConfig = (0, _objectSpread2["default"])({
        force: true
      }, options === null || options === void 0 ? void 0 : options.networkCacheConfig);
      var operation = createOperationDescriptor(queryNode, variables, networkCacheConfig);
      var fetchPolicy = (_options$fetchPolicy = options === null || options === void 0 ? void 0 : options.fetchPolicy) !== null && _options$fetchPolicy !== void 0 ? _options$fetchPolicy : "network-only";
      function readData(snapshot) {
        if (snapshot.missingRequiredFields != null) {
          reportMissingRequiredFields(environment, snapshot.missingRequiredFields);
        }
        return snapshot.data;
      }
      switch (fetchPolicy) {
        case "network-only": {
          return getNetworkObservable(environment, operation).map(readData);
        }
        case "store-or-network": {
          if (environment.check(operation).status === "available") {
            return RelayObservable.from(environment.lookup(operation.fragment)).map(readData);
          }
          return getNetworkObservable(environment, operation).map(readData);
        }
        default:
          fetchPolicy;
          throw new Error("fetchQuery: Invalid fetchPolicy " + fetchPolicy);
      }
    }
    function getNetworkObservable(environment, operation) {
      return fetchQueryInternal.fetchQuery(environment, operation).map(function() {
        return environment.lookup(operation.fragment);
      });
    }
    module.exports = fetchQuery;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/fetchQuery_DEPRECATED.js
var require_fetchQuery_DEPRECATED = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/query/fetchQuery_DEPRECATED.js"(exports, module) {
    init_define_global();
    "use strict";
    var _require = require_RelayModernOperationDescriptor();
    var createOperationDescriptor = _require.createOperationDescriptor;
    var _require2 = require_GraphQLTag();
    var getRequest = _require2.getRequest;
    function fetchQuery_DEPRECATED(environment, taggedNode, variables, cacheConfig) {
      var query = getRequest(taggedNode);
      if (query.params.operationKind !== "query") {
        throw new Error("fetchQuery: Expected query operation");
      }
      var operation = createOperationDescriptor(query, variables, cacheConfig);
      return environment.execute({
        operation
      }).map(function() {
        return environment.lookup(operation.fragment).data;
      }).toPromise();
    }
    module.exports = fetchQuery_DEPRECATED;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/isEmptyObject.js
var require_isEmptyObject = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/isEmptyObject.js"(exports, module) {
    init_define_global();
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function isEmptyObject(obj) {
      for (var _key in obj) {
        if (hasOwnProperty.call(obj, _key)) {
          return false;
        }
      }
      return true;
    }
    module.exports = isEmptyObject;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getFragmentIdentifier.js
var require_getFragmentIdentifier = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/util/getFragmentIdentifier.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var isEmptyObject = require_isEmptyObject();
    var stableCopy = require_stableCopy();
    var _require = require_RelayModernSelector();
    var getDataIDsFromFragment = _require.getDataIDsFromFragment;
    var getVariablesFromFragment = _require.getVariablesFromFragment;
    var getSelector = _require.getSelector;
    function getFragmentIdentifier(fragmentNode, fragmentRef) {
      var selector = getSelector(fragmentNode, fragmentRef);
      var fragmentOwnerIdentifier = selector == null ? "null" : selector.kind === "SingularReaderSelector" ? selector.owner.identifier : "[" + selector.selectors.map(function(sel) {
        return sel.owner.identifier;
      }).join(",") + "]";
      var fragmentVariables = getVariablesFromFragment(fragmentNode, fragmentRef);
      var dataIDs = getDataIDsFromFragment(fragmentNode, fragmentRef);
      if (RelayFeatureFlags.ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION) {
        return fragmentOwnerIdentifier + "/" + fragmentNode.name + "/" + (fragmentVariables == null || isEmptyObject(fragmentVariables) ? "{}" : JSON.stringify(stableCopy(fragmentVariables))) + "/" + (typeof dataIDs === "undefined" ? "missing" : dataIDs == null ? "null" : Array.isArray(dataIDs) ? "[" + dataIDs.join(",") + "]" : dataIDs);
      } else {
        var _JSON$stringify;
        return fragmentOwnerIdentifier + "/" + fragmentNode.name + "/" + JSON.stringify(stableCopy(fragmentVariables)) + "/" + ((_JSON$stringify = JSON.stringify(dataIDs)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "missing");
      }
    }
    module.exports = getFragmentIdentifier;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/readInlineData.js
var require_readInlineData = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/store/readInlineData.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var _require = require_GraphQLTag();
    var getInlineDataFragment = _require.getInlineDataFragment;
    var _require2 = require_RelayStoreUtils();
    var FRAGMENTS_KEY = _require2.FRAGMENTS_KEY;
    function readInlineData(fragment, fragmentRef) {
      var _fragmentRef$FRAGMENT;
      var inlineDataFragment = getInlineDataFragment(fragment);
      if (fragmentRef == null) {
        return fragmentRef;
      }
      !(typeof fragmentRef === "object") ? true ? invariant(false, "readInlineData(): Expected an object, got `%s`.", typeof fragmentRef) : invariant(false) : void 0;
      var inlineData = (_fragmentRef$FRAGMENT = fragmentRef[FRAGMENTS_KEY]) === null || _fragmentRef$FRAGMENT === void 0 ? void 0 : _fragmentRef$FRAGMENT[inlineDataFragment.name];
      !(inlineData != null) ? true ? invariant(false, "readInlineData(): Expected fragment `%s` to be spread in the parent fragment.", inlineDataFragment.name) : invariant(false) : void 0;
      return inlineData;
    }
    module.exports = readInlineData;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/subscription/requestSubscription.js
var require_requestSubscription = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/subscription/requestSubscription.js"(exports, module) {
    init_define_global();
    "use strict";
    var RelayDeclarativeMutationConfig = require_RelayDeclarativeMutationConfig();
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var warning = require_warning();
    var _require = require_GraphQLTag();
    var getRequest = _require.getRequest;
    var _require2 = require_ClientID();
    var generateUniqueClientID = _require2.generateUniqueClientID;
    var _require3 = require_RelayModernOperationDescriptor();
    var createOperationDescriptor = _require3.createOperationDescriptor;
    var _require4 = require_RelayModernSelector();
    var createReaderSelector = _require4.createReaderSelector;
    function requestSubscription(environment, config) {
      var subscription = getRequest(config.subscription);
      if (subscription.params.operationKind !== "subscription") {
        throw new Error("requestSubscription: Must use Subscription operation");
      }
      var configs = config.configs, onCompleted = config.onCompleted, onError = config.onError, onNext = config.onNext, variables = config.variables, cacheConfig = config.cacheConfig;
      var operation = createOperationDescriptor(subscription, variables, cacheConfig, RelayFeatureFlags.ENABLE_UNIQUE_SUBSCRIPTION_ROOT ? generateUniqueClientID() : void 0);
      true ? warning(!(config.updater && configs), "requestSubscription: Expected only one of `updater` and `configs` to be provided") : void 0;
      var _ref = configs ? RelayDeclarativeMutationConfig.convert(configs, subscription, null, config.updater) : config, updater = _ref.updater;
      var sub = environment.execute({
        operation,
        updater
      }).map(function(responses) {
        var selector = operation.fragment;
        if (RelayFeatureFlags.ENABLE_UNIQUE_SUBSCRIPTION_ROOT) {
          var nextID;
          if (Array.isArray(responses)) {
            var _responses$, _responses$$extension;
            nextID = (_responses$ = responses[0]) === null || _responses$ === void 0 ? void 0 : (_responses$$extension = _responses$.extensions) === null || _responses$$extension === void 0 ? void 0 : _responses$$extension.__relay_subscription_root_id;
          } else {
            var _responses$extensions;
            nextID = (_responses$extensions = responses.extensions) === null || _responses$extensions === void 0 ? void 0 : _responses$extensions.__relay_subscription_root_id;
          }
          if (typeof nextID === "string") {
            selector = createReaderSelector(selector.node, nextID, selector.variables, selector.owner);
          }
        }
        var data = environment.lookup(selector).data;
        return data;
      }).subscribe({
        next: onNext,
        error: onError,
        complete: onCompleted
      });
      return {
        dispose: sub.unsubscribe
      };
    }
    module.exports = requestSubscription;
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/index.js
var require_lib = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/lib/index.js"(exports, module) {
    init_define_global();
    "use strict";
    var ConnectionHandler = require_ConnectionHandler();
    var ConnectionInterface = require_ConnectionInterface();
    var GraphQLTag = require_GraphQLTag();
    var MutationHandlers = require_MutationHandlers();
    var PreloadableQueryRegistry = require_PreloadableQueryRegistry();
    var RelayConcreteNode = require_RelayConcreteNode();
    var RelayConcreteVariables = require_RelayConcreteVariables();
    var RelayDeclarativeMutationConfig = require_RelayDeclarativeMutationConfig();
    var RelayDefaultHandleKey = require_RelayDefaultHandleKey();
    var RelayDefaultHandlerProvider = require_RelayDefaultHandlerProvider();
    var RelayError = require_RelayError();
    var RelayFeatureFlags = require_RelayFeatureFlags();
    var RelayModernEnvironment = require_RelayModernEnvironment();
    var RelayModernOperationDescriptor = require_RelayModernOperationDescriptor();
    var RelayModernRecord = require_RelayModernRecord();
    var RelayModernSelector = require_RelayModernSelector();
    var RelayModernStore = require_RelayModernStore();
    var RelayNetwork = require_RelayNetwork();
    var RelayObservable = require_RelayObservable();
    var RelayOperationTracker = require_RelayOperationTracker();
    var RelayProfiler = require_RelayProfiler();
    var RelayQueryResponseCache = require_RelayQueryResponseCache();
    var RelayRecordSource = require_RelayRecordSource();
    var RelayReplaySubject = require_RelayReplaySubject();
    var RelayStoreUtils = require_RelayStoreUtils();
    var ViewerPattern = require_ViewerPattern();
    var applyOptimisticMutation = require_applyOptimisticMutation();
    var commitLocalUpdate = require_commitLocalUpdate();
    var commitMutation = require_commitMutation();
    var createFragmentSpecResolver = require_createFragmentSpecResolver();
    var createPayloadFor3DField = require_createPayloadFor3DField();
    var createRelayContext = require_createRelayContext();
    var deepFreeze = require_deepFreeze();
    var fetchQuery = require_fetchQuery();
    var fetchQueryInternal = require_fetchQueryInternal();
    var fetchQuery_DEPRECATED = require_fetchQuery_DEPRECATED();
    var getFragmentIdentifier = require_getFragmentIdentifier();
    var getRelayHandleKey = require_getRelayHandleKey();
    var getRequestIdentifier = require_getRequestIdentifier();
    var isPromise = require_isPromise();
    var isRelayModernEnvironment = require_isRelayModernEnvironment();
    var isScalarAndEqual = require_isScalarAndEqual();
    var readInlineData = require_readInlineData();
    var recycleNodesInto = require_recycleNodesInto();
    var reportMissingRequiredFields = require_reportMissingRequiredFields();
    var requestSubscription = require_requestSubscription();
    var stableCopy = require_stableCopy();
    var _require = require_ClientID();
    var generateClientID = _require.generateClientID;
    var generateUniqueClientID = _require.generateUniqueClientID;
    var isClientID = _require.isClientID;
    if (true) {
      mapStr = typeof Map !== "function" ? "Map" : null;
      setStr = typeof Set !== "function" ? "Set" : null;
      promiseStr = typeof Promise !== "function" ? "Promise" : null;
      objStr = typeof Object.assign !== "function" ? "Object.assign" : null;
      if (mapStr || setStr || promiseStr || objStr) {
        throw new Error("relay-runtime requires ".concat([mapStr, setStr, promiseStr, objStr].filter(Boolean).join(", and "), " to exist. ") + "Use a polyfill to provide these for older browsers.");
      }
    }
    var mapStr;
    var setStr;
    var promiseStr;
    var objStr;
    module.exports = {
      Environment: RelayModernEnvironment,
      Network: RelayNetwork,
      Observable: RelayObservable,
      QueryResponseCache: RelayQueryResponseCache,
      RecordSource: RelayRecordSource,
      Record: RelayModernRecord,
      ReplaySubject: RelayReplaySubject,
      Store: RelayModernStore,
      areEqualSelectors: RelayModernSelector.areEqualSelectors,
      createFragmentSpecResolver,
      createNormalizationSelector: RelayModernSelector.createNormalizationSelector,
      createOperationDescriptor: RelayModernOperationDescriptor.createOperationDescriptor,
      createReaderSelector: RelayModernSelector.createReaderSelector,
      createRequestDescriptor: RelayModernOperationDescriptor.createRequestDescriptor,
      getDataIDsFromFragment: RelayModernSelector.getDataIDsFromFragment,
      getDataIDsFromObject: RelayModernSelector.getDataIDsFromObject,
      getNode: GraphQLTag.getNode,
      getFragment: GraphQLTag.getFragment,
      getInlineDataFragment: GraphQLTag.getInlineDataFragment,
      getModuleComponentKey: RelayStoreUtils.getModuleComponentKey,
      getModuleOperationKey: RelayStoreUtils.getModuleOperationKey,
      getPaginationFragment: GraphQLTag.getPaginationFragment,
      getPluralSelector: RelayModernSelector.getPluralSelector,
      getRefetchableFragment: GraphQLTag.getRefetchableFragment,
      getRequest: GraphQLTag.getRequest,
      getRequestIdentifier,
      getSelector: RelayModernSelector.getSelector,
      getSelectorsFromObject: RelayModernSelector.getSelectorsFromObject,
      getSingularSelector: RelayModernSelector.getSingularSelector,
      getStorageKey: RelayStoreUtils.getStorageKey,
      getVariablesFromFragment: RelayModernSelector.getVariablesFromFragment,
      getVariablesFromObject: RelayModernSelector.getVariablesFromObject,
      getVariablesFromPluralFragment: RelayModernSelector.getVariablesFromPluralFragment,
      getVariablesFromSingularFragment: RelayModernSelector.getVariablesFromSingularFragment,
      reportMissingRequiredFields,
      graphql: GraphQLTag.graphql,
      isFragment: GraphQLTag.isFragment,
      isInlineDataFragment: GraphQLTag.isInlineDataFragment,
      isRequest: GraphQLTag.isRequest,
      readInlineData,
      MutationTypes: RelayDeclarativeMutationConfig.MutationTypes,
      RangeOperations: RelayDeclarativeMutationConfig.RangeOperations,
      DefaultHandlerProvider: RelayDefaultHandlerProvider,
      ConnectionHandler,
      MutationHandlers,
      VIEWER_ID: ViewerPattern.VIEWER_ID,
      VIEWER_TYPE: ViewerPattern.VIEWER_TYPE,
      applyOptimisticMutation,
      commitLocalUpdate,
      commitMutation,
      fetchQuery,
      fetchQuery_DEPRECATED,
      isRelayModernEnvironment,
      requestSubscription,
      ConnectionInterface,
      PreloadableQueryRegistry,
      RelayProfiler,
      createPayloadFor3DField,
      RelayConcreteNode,
      RelayError,
      RelayFeatureFlags,
      DEFAULT_HANDLE_KEY: RelayDefaultHandleKey.DEFAULT_HANDLE_KEY,
      FRAGMENTS_KEY: RelayStoreUtils.FRAGMENTS_KEY,
      FRAGMENT_OWNER_KEY: RelayStoreUtils.FRAGMENT_OWNER_KEY,
      ID_KEY: RelayStoreUtils.ID_KEY,
      REF_KEY: RelayStoreUtils.REF_KEY,
      REFS_KEY: RelayStoreUtils.REFS_KEY,
      ROOT_ID: RelayStoreUtils.ROOT_ID,
      ROOT_TYPE: RelayStoreUtils.ROOT_TYPE,
      TYPENAME_KEY: RelayStoreUtils.TYPENAME_KEY,
      deepFreeze,
      generateClientID,
      generateUniqueClientID,
      getRelayHandleKey,
      isClientID,
      isPromise,
      isScalarAndEqual,
      recycleNodesInto,
      stableCopy,
      getFragmentIdentifier,
      __internal: {
        OperationTracker: RelayOperationTracker,
        createRelayContext,
        getOperationVariables: RelayConcreteVariables.getOperationVariables,
        fetchQuery: fetchQueryInternal.fetchQuery,
        fetchQueryDeduped: fetchQueryInternal.fetchQueryDeduped,
        getPromiseForActiveRequest: fetchQueryInternal.getPromiseForActiveRequest,
        getObservableForActiveRequest: fetchQueryInternal.getObservableForActiveRequest
      }
    };
  }
});

// .yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/index.js
var require_relay_runtime = __commonJS({
  ".yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/index.js"(exports, module) {
    init_define_global();
    module.exports = require_lib();
  }
});

export {
  require_browser,
  require_warning,
  require_toConsumableArray,
  require_createForOfIteratorHelper,
  require_defineProperty,
  require_objectSpread2,
  require_areEqual,
  require_relay_runtime
};
/**
 * Checks if two values are equal. Values may be primitives, arrays, or objects.
 * Returns true if both arguments have the same keys and values.
 *
 * @see http://underscorejs.org
 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * @license MIT
 */
//# sourceMappingURL=chunk-K4SFTYGT.js.map
