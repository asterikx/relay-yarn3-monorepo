import {
  require_react
} from "./chunk-P4HP27VJ.js";
import {
  require_extends,
  require_objectWithoutPropertiesLoose
} from "./chunk-7A7HVDNK.js";
import {
  require_areEqual,
  require_browser,
  require_createForOfIteratorHelper,
  require_defineProperty,
  require_objectSpread2,
  require_relay_runtime,
  require_toConsumableArray,
  require_warning
} from "./chunk-K4SFTYGT.js";
import {
  require_interopRequireDefault
} from "./chunk-52LO7UMF.js";
import {
  __commonJS,
  init_define_global
} from "./chunk-WXFKU22Y.js";

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/ProfilerContext.js
var require_ProfilerContext = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/ProfilerContext.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var ProfilerContext = React.createContext({
      wrapPrepareQueryResource: function wrapPrepareQueryResource(cb) {
        return cb();
      }
    });
    module.exports = ProfilerContext;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayContext.js
var require_ReactRelayContext = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayContext.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var _require = require_relay_runtime();
    var createRelayContext = _require.__internal.createRelayContext;
    module.exports = createRelayContext(React);
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/ReactRelayContext.js
var require_ReactRelayContext2 = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/ReactRelayContext.js"(exports, module) {
    init_define_global();
    module.exports = require_ReactRelayContext();
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useRelayEnvironment.js
var require_useRelayEnvironment = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useRelayEnvironment.js"(exports, module) {
    init_define_global();
    "use strict";
    var ReactRelayContext = require_ReactRelayContext2();
    var invariant = require_browser();
    var _require = require_react();
    var useContext = _require.useContext;
    function useRelayEnvironment() {
      var context = useContext(ReactRelayContext);
      !(context != null) ? true ? invariant(false, "useRelayEnvironment: Expected to have found a Relay environment provided by a `RelayEnvironmentProvider` component. This usually means that useRelayEnvironment was used in a component that is not a descendant of a `RelayEnvironmentProvider`. Please make sure a `RelayEnvironmentProvider` has been rendered somewhere as a parent or ancestor of your component.") : invariant(false) : void 0;
      return context.environment;
    }
    module.exports = useRelayEnvironment;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/EntryPointContainer.react.js
var require_EntryPointContainer_react = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/EntryPointContainer.react.js"(exports, module) {
    init_define_global();
    "use strict";
    var ProfilerContext = require_ProfilerContext();
    var React = require_react();
    var useRelayEnvironment = require_useRelayEnvironment();
    var warning = require_warning();
    var _require = require_react();
    var useContext = _require.useContext;
    var useEffect = _require.useEffect;
    function EntryPointContainer(_ref) {
      var entryPointReference = _ref.entryPointReference, props = _ref.props;
      true ? warning(entryPointReference.isDisposed === false, "<EntryPointContainer>: Expected entryPointReference to not be disposed yet. This is because disposing the entrypoint marks it for future garbage collection, and as such may no longer be present in the Relay store. In the future, this will become a hard error.") : void 0;
      var getComponent = entryPointReference.getComponent, queries = entryPointReference.queries, entryPoints = entryPointReference.entryPoints, extraProps = entryPointReference.extraProps, rootModuleID = entryPointReference.rootModuleID;
      var Component = getComponent();
      var profilerContext = useContext(ProfilerContext);
      var environment = useRelayEnvironment();
      useEffect(function() {
        environment.__log({
          name: "entrypoint.root.consume",
          profilerContext,
          rootModuleID
        });
      }, [environment, profilerContext, rootModuleID]);
      return React.createElement(Component, {
        entryPoints,
        extraProps,
        props,
        queries
      });
    }
    module.exports = EntryPointContainer;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    init_define_global();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    init_define_global();
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/inheritsLoose.js
var require_inheritsLoose = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/inheritsLoose.js"(exports, module) {
    init_define_global();
    var setPrototypeOf = require_setPrototypeOf();
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      setPrototypeOf(subClass, superClass);
    }
    module.exports = _inheritsLoose;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayQueryRendererContext.js
var require_ReactRelayQueryRendererContext = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayQueryRendererContext.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    module.exports = React.createContext({
      rootIsQueryRenderer: false
    });
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/assertFragmentMap.js
var require_assertFragmentMap = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/assertFragmentMap.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    function assertFragmentMap(componentName, fragmentSpec) {
      !(fragmentSpec && typeof fragmentSpec === "object") ? true ? invariant(false, "Could not create Relay Container for `%s`. Expected a set of GraphQL fragments, got `%s` instead.", componentName, fragmentSpec) : invariant(false) : void 0;
      for (var key in fragmentSpec) {
        if (fragmentSpec.hasOwnProperty(key)) {
          var fragment = fragmentSpec[key];
          !(fragment && (typeof fragment === "object" || typeof fragment === "function")) ? true ? invariant(false, "Could not create Relay Container for `%s`. The value of fragment `%s` was expected to be a fragment, got `%s` instead.", componentName, key, fragment) : invariant(false) : void 0;
        }
      }
    }
    module.exports = assertFragmentMap;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/readContext.js
var require_readContext = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/readContext.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var _React$__SECRET_INTER = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var ReactCurrentDispatcher = _React$__SECRET_INTER.ReactCurrentDispatcher;
    var ReactCurrentOwner = _React$__SECRET_INTER.ReactCurrentOwner;
    function readContext(Context) {
      var dispatcher = ReactCurrentDispatcher != null ? ReactCurrentDispatcher.current : ReactCurrentOwner.currentDispatcher;
      return dispatcher.readContext(Context);
    }
    module.exports = readContext;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayContainerUtils.js
var require_ReactRelayContainerUtils = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayContainerUtils.js"(exports, module) {
    init_define_global();
    "use strict";
    function getComponentName(component) {
      return component.displayName || component.name || "Component";
    }
    function getContainerName(Component) {
      return "Relay(" + getComponentName(Component) + ")";
    }
    module.exports = {
      getComponentName,
      getContainerName
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/buildReactRelayContainer.js
var require_buildReactRelayContainer = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/buildReactRelayContainer.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _extends2 = _interopRequireDefault(require_extends());
    var React = require_react();
    var ReactRelayContext = require_ReactRelayContext();
    var ReactRelayQueryRendererContext = require_ReactRelayQueryRendererContext();
    var assertFragmentMap = require_assertFragmentMap();
    var invariant = require_browser();
    var readContext = require_readContext();
    var _require = require_ReactRelayContainerUtils();
    var getComponentName = _require.getComponentName;
    var getContainerName = _require.getContainerName;
    var _require2 = require_relay_runtime();
    var getFragment = _require2.getFragment;
    function buildReactRelayContainer(ComponentClass, fragmentSpec, createContainerWithFragments) {
      var containerName = getContainerName(ComponentClass);
      assertFragmentMap(getComponentName(ComponentClass), fragmentSpec);
      var fragments = {};
      for (var key in fragmentSpec) {
        fragments[key] = getFragment(fragmentSpec[key]);
      }
      var Container = createContainerWithFragments(ComponentClass, fragments);
      Container.displayName = containerName;
      function forwardRef(props, ref) {
        var _queryRendererContext;
        var context = readContext(ReactRelayContext);
        !(context != null) ? true ? invariant(false, "`%s` tried to render a context that was not valid this means that `%s` was rendered outside of a query renderer.", containerName, containerName) : invariant(false) : void 0;
        var queryRendererContext = readContext(ReactRelayQueryRendererContext);
        return React.createElement(Container, (0, _extends2["default"])({}, props, {
          __relayContext: context,
          __rootIsQueryRenderer: (_queryRendererContext = queryRendererContext === null || queryRendererContext === void 0 ? void 0 : queryRendererContext.rootIsQueryRenderer) !== null && _queryRendererContext !== void 0 ? _queryRendererContext : false,
          componentRef: props.componentRef || ref
        }));
      }
      forwardRef.displayName = containerName;
      var ForwardContainer = React.forwardRef(forwardRef);
      if (true) {
        ForwardContainer.__ComponentClass = ComponentClass;
        ForwardContainer.displayName = containerName;
      }
      return ForwardContainer;
    }
    module.exports = buildReactRelayContainer;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/getRootVariablesForFragments.js
var require_getRootVariablesForFragments = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/getRootVariablesForFragments.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _require = require_relay_runtime();
    var getSelector = _require.getSelector;
    function getRootVariablesForFragments(fragments, props) {
      var rootVariables = {};
      Object.keys(fragments).forEach(function(key) {
        var _selector$selectors$, _selector$selectors$2, _selector$owner$varia;
        var fragmentNode = fragments[key];
        var fragmentRef = props[key];
        var selector = getSelector(fragmentNode, fragmentRef);
        var fragmentOwnerVariables = selector != null && selector.kind === "PluralReaderSelector" ? (_selector$selectors$ = (_selector$selectors$2 = selector.selectors[0]) === null || _selector$selectors$2 === void 0 ? void 0 : _selector$selectors$2.owner.variables) !== null && _selector$selectors$ !== void 0 ? _selector$selectors$ : {} : (_selector$owner$varia = selector === null || selector === void 0 ? void 0 : selector.owner.variables) !== null && _selector$owner$varia !== void 0 ? _selector$owner$varia : {};
        rootVariables = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, rootVariables), fragmentOwnerVariables);
      });
      return rootVariables;
    }
    module.exports = getRootVariablesForFragments;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/isRelayEnvironment.js
var require_isRelayEnvironment = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/isRelayEnvironment.js"(exports, module) {
    init_define_global();
    "use strict";
    function isRelayEnvironment(environment) {
      return typeof environment === "object" && environment !== null && typeof environment.check === "function" && typeof environment.lookup === "function" && typeof environment.retain === "function" && typeof environment.execute === "function" && typeof environment.subscribe === "function";
    }
    module.exports = isRelayEnvironment;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/RelayContext.js
var require_RelayContext = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/RelayContext.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var isRelayEnvironment = require_isRelayEnvironment();
    function assertRelayContext(relay) {
      !isRelayContext(relay) ? true ? invariant(false, "RelayContext: Expected `context.relay` to be an object conforming to the `RelayContext` interface, got `%s`.", relay) : invariant(false) : void 0;
      return relay;
    }
    function isRelayContext(context) {
      return typeof context === "object" && context !== null && !Array.isArray(context) && isRelayEnvironment(context.environment);
    }
    module.exports = {
      assertRelayContext,
      isRelayContext
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayFragmentContainer.js
var require_ReactRelayFragmentContainer = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayFragmentContainer.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inheritsLoose2 = _interopRequireDefault(require_inheritsLoose());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var React = require_react();
    var areEqual = require_areEqual();
    var buildReactRelayContainer = require_buildReactRelayContainer();
    var getRootVariablesForFragments = require_getRootVariablesForFragments();
    var _require = require_ReactRelayContainerUtils();
    var getContainerName = _require.getContainerName;
    var _require2 = require_RelayContext();
    var assertRelayContext = _require2.assertRelayContext;
    var _require3 = require_relay_runtime();
    var createFragmentSpecResolver = _require3.createFragmentSpecResolver;
    var getDataIDsFromObject = _require3.getDataIDsFromObject;
    var isScalarAndEqual = _require3.isScalarAndEqual;
    function createContainerWithFragments(Component, fragments) {
      var _class, _temp;
      var containerName = getContainerName(Component);
      return _temp = _class = function(_React$Component) {
        (0, _inheritsLoose2["default"])(_class2, _React$Component);
        function _class2(props) {
          var _props$__rootIsQueryR, _this;
          _this = _React$Component.call(this, props) || this;
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFragmentDataUpdate", function() {
            var resolverFromThisUpdate = _this.state.resolver;
            _this.setState(function(updatedState) {
              return resolverFromThisUpdate === updatedState.resolver ? {
                data: updatedState.resolver.resolve(),
                relayProp: getRelayProp(updatedState.relayProp.environment)
              } : null;
            });
          });
          var relayContext = assertRelayContext(props.__relayContext);
          var rootIsQueryRenderer = (_props$__rootIsQueryR = props.__rootIsQueryRenderer) !== null && _props$__rootIsQueryR !== void 0 ? _props$__rootIsQueryR : false;
          var resolver = createFragmentSpecResolver(relayContext, containerName, fragments, props, rootIsQueryRenderer);
          _this.state = {
            data: resolver.resolve(),
            prevProps: props,
            prevPropsContext: relayContext,
            relayProp: getRelayProp(relayContext.environment),
            resolver
          };
          return _this;
        }
        _class2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
          var _nextProps$__rootIsQu;
          var prevProps = prevState.prevProps;
          var relayContext = assertRelayContext(nextProps.__relayContext);
          var rootIsQueryRenderer = (_nextProps$__rootIsQu = nextProps.__rootIsQueryRenderer) !== null && _nextProps$__rootIsQu !== void 0 ? _nextProps$__rootIsQu : false;
          var prevIDs = getDataIDsFromObject(fragments, prevProps);
          var nextIDs = getDataIDsFromObject(fragments, nextProps);
          var resolver = prevState.resolver;
          if (prevState.prevPropsContext.environment !== relayContext.environment || !areEqual(prevIDs, nextIDs)) {
            resolver = createFragmentSpecResolver(relayContext, containerName, fragments, nextProps, rootIsQueryRenderer);
            return {
              data: resolver.resolve(),
              prevPropsContext: relayContext,
              prevProps: nextProps,
              relayProp: getRelayProp(relayContext.environment),
              resolver
            };
          } else {
            resolver.setProps(nextProps);
            var data = resolver.resolve();
            if (data !== prevState.data) {
              return {
                data,
                prevProps: nextProps,
                prevPropsContext: relayContext,
                relayProp: getRelayProp(relayContext.environment)
              };
            }
          }
          return null;
        };
        var _proto = _class2.prototype;
        _proto.componentDidMount = function componentDidMount() {
          this._subscribeToNewResolver();
          this._rerenderIfStoreHasChanged();
        };
        _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
          if (this.state.resolver !== prevState.resolver) {
            prevState.resolver.dispose();
            this._subscribeToNewResolver();
          }
          this._rerenderIfStoreHasChanged();
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
          this.state.resolver.dispose();
        };
        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          if (nextState.data !== this.state.data) {
            return true;
          }
          var keys = Object.keys(nextProps);
          for (var ii = 0; ii < keys.length; ii++) {
            var _key = keys[ii];
            if (_key === "__relayContext") {
              if (nextState.prevPropsContext.environment !== this.state.prevPropsContext.environment) {
                return true;
              }
            } else {
              if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
                return true;
              }
            }
          }
          return false;
        };
        _proto._rerenderIfStoreHasChanged = function _rerenderIfStoreHasChanged() {
          var _this$state = this.state, data = _this$state.data, resolver = _this$state.resolver;
          var maybeNewData = resolver.resolve();
          if (data !== maybeNewData) {
            this.setState({
              data: maybeNewData
            });
          }
        };
        _proto._subscribeToNewResolver = function _subscribeToNewResolver() {
          var resolver = this.state.resolver;
          resolver.setCallback(this._handleFragmentDataUpdate);
        };
        _proto.render = function render() {
          var _this$props = this.props, componentRef = _this$props.componentRef, __relayContext = _this$props.__relayContext, __rootIsQueryRenderer = _this$props.__rootIsQueryRenderer, props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["componentRef", "__relayContext", "__rootIsQueryRenderer"]);
          return React.createElement(Component, (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, props), this.state.data), {}, {
            ref: componentRef,
            relay: this.state.relayProp
          }));
        };
        return _class2;
      }(React.Component), (0, _defineProperty2["default"])(_class, "displayName", containerName), _temp;
    }
    function getRelayProp(environment) {
      return {
        environment
      };
    }
    function createContainer(Component, fragmentSpec) {
      return buildReactRelayContainer(Component, fragmentSpec, createContainerWithFragments);
    }
    module.exports = {
      createContainer
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayLocalQueryRenderer.js
var require_ReactRelayLocalQueryRenderer = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayLocalQueryRenderer.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var ReactRelayContext = require_ReactRelayContext();
    var ReactRelayQueryRendererContext = require_ReactRelayQueryRendererContext();
    var useLayoutEffect = React.useLayoutEffect;
    var useState = React.useState;
    var useRef = React.useRef;
    var useMemo = React.useMemo;
    var _require = require_relay_runtime();
    var createOperationDescriptor = _require.createOperationDescriptor;
    var deepFreeze = _require.deepFreeze;
    var getRequest = _require.getRequest;
    var areEqual = require_areEqual();
    var queryRendererContext = {
      rootIsQueryRenderer: true
    };
    function useDeepCompare(value) {
      var latestValue = React.useRef(value);
      if (!areEqual(latestValue.current, value)) {
        if (true) {
          deepFreeze(value);
        }
        latestValue.current = value;
      }
      return latestValue.current;
    }
    function ReactRelayLocalQueryRenderer(props) {
      var environment = props.environment, query = props.query, variables = props.variables, render = props.render;
      var latestVariables = useDeepCompare(variables);
      var operation = useMemo(function() {
        var request = getRequest(query);
        return createOperationDescriptor(request, latestVariables);
      }, [query, latestVariables]);
      var relayContext = useMemo(function() {
        return {
          environment
        };
      }, [environment]);
      var dataRef = useRef(null);
      var _useState = useState(null), forceUpdate = _useState[1];
      var cleanupFnRef = useRef(null);
      var snapshot = useMemo(function() {
        environment.check(operation);
        var res = environment.lookup(operation.fragment);
        dataRef.current = res.data;
        var retainDisposable = environment.retain(operation);
        var subscribeDisposable = environment.subscribe(res, function(newSnapshot) {
          dataRef.current = newSnapshot.data;
          forceUpdate(dataRef.current);
        });
        var disposed = false;
        function nextCleanupFn() {
          if (!disposed) {
            disposed = true;
            cleanupFnRef.current = null;
            retainDisposable.dispose();
            subscribeDisposable.dispose();
          }
        }
        if (cleanupFnRef.current) {
          cleanupFnRef.current();
        }
        cleanupFnRef.current = nextCleanupFn;
        return res;
      }, [environment, operation]);
      useLayoutEffect(function() {
        var cleanupFn = cleanupFnRef.current;
        return function() {
          cleanupFn && cleanupFn();
        };
      }, [snapshot]);
      return React.createElement(ReactRelayContext.Provider, {
        value: relayContext
      }, React.createElement(ReactRelayQueryRendererContext.Provider, {
        value: queryRendererContext
      }, render({
        props: dataRef.current
      })));
    }
    module.exports = ReactRelayLocalQueryRenderer;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayQueryFetcher.js
var require_ReactRelayQueryFetcher = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayQueryFetcher.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var invariant = require_browser();
    var _require = require_relay_runtime();
    var createOperationDescriptor = _require.createOperationDescriptor;
    var isRelayModernEnvironment = _require.isRelayModernEnvironment;
    var fetchQuery = _require.__internal.fetchQuery;
    var ReactRelayQueryFetcher = function() {
      function ReactRelayQueryFetcher2(args) {
        (0, _defineProperty2["default"])(this, "_selectionReferences", []);
        (0, _defineProperty2["default"])(this, "_callOnDataChangeWhenSet", false);
        if (args != null) {
          this._cacheSelectionReference = args.cacheSelectionReference;
          this._selectionReferences = args.selectionReferences;
        }
      }
      var _proto = ReactRelayQueryFetcher2.prototype;
      _proto.getSelectionReferences = function getSelectionReferences() {
        return {
          cacheSelectionReference: this._cacheSelectionReference,
          selectionReferences: this._selectionReferences
        };
      };
      _proto.lookupInStore = function lookupInStore(environment, operation, fetchPolicy) {
        if (fetchPolicy === "store-and-network" || fetchPolicy === "store-or-network") {
          if (environment.check(operation).status === "available") {
            this._retainCachedOperation(environment, operation);
            return environment.lookup(operation.fragment);
          }
        }
        return null;
      };
      _proto.execute = function execute(_ref) {
        var _this = this;
        var environment = _ref.environment, operation = _ref.operation, _ref$preservePrevious = _ref.preservePreviousReferences, preservePreviousReferences = _ref$preservePrevious === void 0 ? false : _ref$preservePrevious;
        var reference = environment.retain(operation);
        var error = function error2() {
          _this._selectionReferences = _this._selectionReferences.concat(reference);
        };
        var complete = function complete2() {
          if (!preservePreviousReferences) {
            _this.disposeSelectionReferences();
          }
          _this._selectionReferences = _this._selectionReferences.concat(reference);
        };
        var unsubscribe = function unsubscribe2() {
          _this._selectionReferences = _this._selectionReferences.concat(reference);
        };
        if (!isRelayModernEnvironment(environment)) {
          return environment.execute({
            operation
          })["do"]({
            error,
            complete,
            unsubscribe
          });
        }
        return fetchQuery(environment, operation)["do"]({
          error,
          complete,
          unsubscribe
        });
      };
      _proto.setOnDataChange = function setOnDataChange(onDataChange) {
        !this._fetchOptions ? true ? invariant(false, "ReactRelayQueryFetcher: `setOnDataChange` should have been called after having called `fetch`") : invariant(false) : void 0;
        if (typeof onDataChange === "function") {
          this._fetchOptions.onDataChangeCallbacks = this._fetchOptions.onDataChangeCallbacks || [];
          this._fetchOptions.onDataChangeCallbacks.push(onDataChange);
          if (this._callOnDataChangeWhenSet) {
            if (this._error != null) {
              onDataChange({
                error: this._error
              });
            } else if (this._snapshot != null) {
              onDataChange({
                snapshot: this._snapshot
              });
            }
          }
        }
      };
      _proto.fetch = function fetch(fetchOptions, cacheConfigOverride) {
        var _this2 = this;
        var environment = fetchOptions.environment, operation = fetchOptions.operation, onDataChange = fetchOptions.onDataChange;
        var fetchHasReturned = false;
        var _error;
        this.disposeRequest();
        var oldOnDataChangeCallbacks = this._fetchOptions && this._fetchOptions.onDataChangeCallbacks;
        this._fetchOptions = {
          environment,
          onDataChangeCallbacks: oldOnDataChangeCallbacks || [],
          operation
        };
        if (onDataChange && this._fetchOptions.onDataChangeCallbacks.indexOf(onDataChange) === -1) {
          this._fetchOptions.onDataChangeCallbacks.push(onDataChange);
        }
        var operationOverride = cacheConfigOverride ? createOperationDescriptor(operation.request.node, operation.request.variables, cacheConfigOverride) : operation;
        var request = this.execute({
          environment,
          operation: operationOverride
        })["finally"](function() {
          _this2._pendingRequest = null;
        }).subscribe({
          next: function next() {
            _this2._callOnDataChangeWhenSet = true;
            _this2._error = null;
            _this2._onQueryDataAvailable({
              notifyFirstResult: fetchHasReturned
            });
          },
          error: function error(err) {
            _this2._callOnDataChangeWhenSet = true;
            _this2._error = err;
            _this2._snapshot = null;
            var onDataChangeCallbacks = _this2._fetchOptions && _this2._fetchOptions.onDataChangeCallbacks;
            if (fetchHasReturned) {
              if (onDataChangeCallbacks) {
                onDataChangeCallbacks.forEach(function(onDataChange2) {
                  onDataChange2({
                    error: err
                  });
                });
              }
            } else {
              _error = err;
            }
          }
        });
        this._pendingRequest = {
          dispose: function dispose() {
            request.unsubscribe();
          }
        };
        fetchHasReturned = true;
        if (_error) {
          throw _error;
        }
        return this._snapshot;
      };
      _proto.retry = function retry(cacheConfigOverride) {
        !this._fetchOptions ? true ? invariant(false, "ReactRelayQueryFetcher: `retry` should be called after having called `fetch`") : invariant(false) : void 0;
        return this.fetch({
          environment: this._fetchOptions.environment,
          operation: this._fetchOptions.operation,
          onDataChange: null
        }, cacheConfigOverride);
      };
      _proto.dispose = function dispose() {
        this.disposeRequest();
        this.disposeSelectionReferences();
      };
      _proto.disposeRequest = function disposeRequest() {
        this._error = null;
        this._snapshot = null;
        if (this._pendingRequest) {
          this._pendingRequest.dispose();
        }
        if (this._rootSubscription) {
          this._rootSubscription.dispose();
          this._rootSubscription = null;
        }
      };
      _proto._retainCachedOperation = function _retainCachedOperation(environment, operation) {
        this._disposeCacheSelectionReference();
        this._cacheSelectionReference = environment.retain(operation);
      };
      _proto._disposeCacheSelectionReference = function _disposeCacheSelectionReference() {
        this._cacheSelectionReference && this._cacheSelectionReference.dispose();
        this._cacheSelectionReference = null;
      };
      _proto.disposeSelectionReferences = function disposeSelectionReferences() {
        this._disposeCacheSelectionReference();
        this._selectionReferences.forEach(function(r) {
          return r.dispose();
        });
        this._selectionReferences = [];
      };
      _proto._onQueryDataAvailable = function _onQueryDataAvailable(_ref2) {
        var _this3 = this;
        var notifyFirstResult = _ref2.notifyFirstResult;
        !this._fetchOptions ? true ? invariant(false, "ReactRelayQueryFetcher: `_onQueryDataAvailable` should have been called after having called `fetch`") : invariant(false) : void 0;
        var _this$_fetchOptions = this._fetchOptions, environment = _this$_fetchOptions.environment, onDataChangeCallbacks = _this$_fetchOptions.onDataChangeCallbacks, operation = _this$_fetchOptions.operation;
        if (this._snapshot) {
          return;
        }
        this._snapshot = environment.lookup(operation.fragment);
        this._rootSubscription = environment.subscribe(this._snapshot, function(snapshot2) {
          if (_this3._fetchOptions != null) {
            var maybeNewOnDataChangeCallbacks = _this3._fetchOptions.onDataChangeCallbacks;
            if (Array.isArray(maybeNewOnDataChangeCallbacks)) {
              maybeNewOnDataChangeCallbacks.forEach(function(onDataChange) {
                return onDataChange({
                  snapshot: snapshot2
                });
              });
            }
          }
        });
        if (this._snapshot && notifyFirstResult && Array.isArray(onDataChangeCallbacks)) {
          var snapshot = this._snapshot;
          onDataChangeCallbacks.forEach(function(onDataChange) {
            return onDataChange({
              snapshot
            });
          });
        }
      };
      return ReactRelayQueryFetcher2;
    }();
    module.exports = ReactRelayQueryFetcher;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayPaginationContainer.js
var require_ReactRelayPaginationContainer = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayPaginationContainer.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inheritsLoose2 = _interopRequireDefault(require_inheritsLoose());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _objectSpread3 = _interopRequireDefault(require_objectSpread2());
    var React = require_react();
    var ReactRelayContext = require_ReactRelayContext();
    var ReactRelayQueryFetcher = require_ReactRelayQueryFetcher();
    var areEqual = require_areEqual();
    var buildReactRelayContainer = require_buildReactRelayContainer();
    var getRootVariablesForFragments = require_getRootVariablesForFragments();
    var invariant = require_browser();
    var warning = require_warning();
    var _require = require_ReactRelayContainerUtils();
    var getComponentName = _require.getComponentName;
    var getContainerName = _require.getContainerName;
    var _require2 = require_RelayContext();
    var assertRelayContext = _require2.assertRelayContext;
    var _require3 = require_relay_runtime();
    var ConnectionInterface = _require3.ConnectionInterface;
    var Observable = _require3.Observable;
    var createFragmentSpecResolver = _require3.createFragmentSpecResolver;
    var createOperationDescriptor = _require3.createOperationDescriptor;
    var getDataIDsFromObject = _require3.getDataIDsFromObject;
    var getRequest = _require3.getRequest;
    var getSelector = _require3.getSelector;
    var getVariablesFromObject = _require3.getVariablesFromObject;
    var isScalarAndEqual = _require3.isScalarAndEqual;
    var FORWARD = "forward";
    function createGetConnectionFromProps(metadata) {
      var path = metadata.path;
      !path ? true ? invariant(false, "ReactRelayPaginationContainer: Unable to synthesize a getConnectionFromProps function.") : invariant(false) : void 0;
      return function(props) {
        var data = props[metadata.fragmentName];
        for (var i = 0; i < path.length; i++) {
          if (!data || typeof data !== "object") {
            return null;
          }
          data = data[path[i]];
        }
        return data;
      };
    }
    function createGetFragmentVariables(metadata) {
      var countVariable = metadata.count;
      !countVariable ? true ? invariant(false, "ReactRelayPaginationContainer: Unable to synthesize a getFragmentVariables function.") : invariant(false) : void 0;
      return function(prevVars, totalCount) {
        return (0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, prevVars), {}, (0, _defineProperty2["default"])({}, countVariable, totalCount));
      };
    }
    function findConnectionMetadata(fragments) {
      var foundConnectionMetadata = null;
      var isRelayModern = false;
      for (var fragmentName in fragments) {
        var fragment = fragments[fragmentName];
        var connectionMetadata = fragment.metadata && fragment.metadata.connection;
        if (fragment.metadata !== void 0) {
          isRelayModern = true;
        }
        if (connectionMetadata) {
          !(connectionMetadata.length === 1) ? true ? invariant(false, "ReactRelayPaginationContainer: Only a single @connection is supported, `%s` has %s.", fragmentName, connectionMetadata.length) : invariant(false) : void 0;
          !!foundConnectionMetadata ? true ? invariant(false, "ReactRelayPaginationContainer: Only a single fragment with @connection is supported.") : invariant(false) : void 0;
          foundConnectionMetadata = (0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, connectionMetadata[0]), {}, {
            fragmentName
          });
        }
      }
      !(!isRelayModern || foundConnectionMetadata !== null) ? true ? invariant(false, "ReactRelayPaginationContainer: A @connection directive must be present.") : invariant(false) : void 0;
      return foundConnectionMetadata || {};
    }
    function toObserver(observerOrCallback) {
      return typeof observerOrCallback === "function" ? {
        error: observerOrCallback,
        complete: observerOrCallback,
        unsubscribe: function unsubscribe(subscription) {
          typeof observerOrCallback === "function" && observerOrCallback();
        }
      } : observerOrCallback || {};
    }
    function createContainerWithFragments(Component, fragments, connectionConfig) {
      var _class, _temp;
      var componentName = getComponentName(Component);
      var containerName = getContainerName(Component);
      var metadata = findConnectionMetadata(fragments);
      var getConnectionFromProps = connectionConfig.getConnectionFromProps || createGetConnectionFromProps(metadata);
      var direction = connectionConfig.direction || metadata.direction;
      !direction ? true ? invariant(false, "ReactRelayPaginationContainer: Unable to infer direction of the connection, possibly because both first and last are provided.") : invariant(false) : void 0;
      var getFragmentVariables = connectionConfig.getFragmentVariables || createGetFragmentVariables(metadata);
      return _temp = _class = function(_React$Component) {
        (0, _inheritsLoose2["default"])(_class2, _React$Component);
        function _class2(props) {
          var _props$__rootIsQueryR, _this;
          _this = _React$Component.call(this, props) || this;
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFragmentDataUpdate", function() {
            _this.setState({
              data: _this._resolver.resolve()
            });
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_hasMore", function() {
            var connectionData = _this._getConnectionData();
            return !!(connectionData && connectionData.hasMore && connectionData.cursor);
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isLoading", function() {
            return !!_this._refetchSubscription;
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_refetchConnection", function(totalCount, observerOrCallback, refetchVariables) {
            if (!_this._canFetchPage("refetchConnection")) {
              return {
                dispose: function dispose() {
                }
              };
            }
            _this._refetchVariables = refetchVariables;
            var paginatingVariables = {
              count: totalCount,
              cursor: null,
              totalCount
            };
            var fetch = _this._fetchPage(paginatingVariables, toObserver(observerOrCallback), {
              force: true
            });
            return {
              dispose: fetch.unsubscribe
            };
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_loadMore", function(pageSize, observerOrCallback, options) {
            if (!_this._canFetchPage("loadMore")) {
              return {
                dispose: function dispose() {
                }
              };
            }
            var observer = toObserver(observerOrCallback);
            var connectionData = _this._getConnectionData();
            if (!connectionData) {
              Observable.create(function(sink) {
                return sink.complete();
              }).subscribe(observer);
              return null;
            }
            var totalCount = connectionData.edgeCount + pageSize;
            if (options && options.force) {
              return _this._refetchConnection(totalCount, observerOrCallback);
            }
            var _ConnectionInterface$ = ConnectionInterface.get(), END_CURSOR = _ConnectionInterface$.END_CURSOR, START_CURSOR = _ConnectionInterface$.START_CURSOR;
            var cursor = connectionData.cursor;
            true ? warning(cursor != null && cursor !== "", "ReactRelayPaginationContainer: Cannot `loadMore` without valid `%s` (got `%s`)", direction === FORWARD ? END_CURSOR : START_CURSOR, cursor) : void 0;
            var paginatingVariables = {
              count: pageSize,
              cursor,
              totalCount
            };
            var fetch = _this._fetchPage(paginatingVariables, observer, options);
            return {
              dispose: fetch.unsubscribe
            };
          });
          var relayContext = assertRelayContext(props.__relayContext);
          var rootIsQueryRenderer = (_props$__rootIsQueryR = props.__rootIsQueryRenderer) !== null && _props$__rootIsQueryR !== void 0 ? _props$__rootIsQueryR : false;
          _this._isARequestInFlight = false;
          _this._refetchSubscription = null;
          _this._refetchVariables = null;
          _this._resolver = createFragmentSpecResolver(relayContext, containerName, fragments, props, rootIsQueryRenderer, _this._handleFragmentDataUpdate);
          _this.state = {
            data: _this._resolver.resolve(),
            prevContext: relayContext,
            contextForChildren: relayContext,
            relayProp: _this._buildRelayProp(relayContext)
          };
          _this._isUnmounted = false;
          _this._hasFetched = false;
          return _this;
        }
        var _proto = _class2.prototype;
        _proto.componentDidMount = function componentDidMount() {
          this._isUnmounted = false;
        };
        _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
          var _nextProps$__rootIsQu;
          var relayContext = assertRelayContext(nextProps.__relayContext);
          var rootIsQueryRenderer = (_nextProps$__rootIsQu = nextProps.__rootIsQueryRenderer) !== null && _nextProps$__rootIsQu !== void 0 ? _nextProps$__rootIsQu : false;
          var prevIDs = getDataIDsFromObject(fragments, this.props);
          var nextIDs = getDataIDsFromObject(fragments, nextProps);
          var prevRootVariables = getRootVariablesForFragments(fragments, this.props);
          var nextRootVariables = getRootVariablesForFragments(fragments, nextProps);
          if (relayContext.environment !== this.state.prevContext.environment || !areEqual(prevRootVariables, nextRootVariables) || !areEqual(prevIDs, nextIDs)) {
            this._cleanup();
            this._resolver = createFragmentSpecResolver(relayContext, containerName, fragments, nextProps, rootIsQueryRenderer, this._handleFragmentDataUpdate);
            this.setState({
              prevContext: relayContext,
              contextForChildren: relayContext,
              relayProp: this._buildRelayProp(relayContext)
            });
          } else if (!this._hasFetched) {
            this._resolver.setProps(nextProps);
          }
          var data = this._resolver.resolve();
          if (data !== this.state.data) {
            this.setState({
              data
            });
          }
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
          this._isUnmounted = true;
          this._cleanup();
        };
        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          if (nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
            return true;
          }
          var keys = Object.keys(nextProps);
          for (var ii = 0; ii < keys.length; ii++) {
            var _key = keys[ii];
            if (_key === "__relayContext") {
              if (nextState.prevContext.environment !== this.state.prevContext.environment) {
                return true;
              }
            } else {
              if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
                return true;
              }
            }
          }
          return false;
        };
        _proto._buildRelayProp = function _buildRelayProp(relayContext) {
          return {
            hasMore: this._hasMore,
            isLoading: this._isLoading,
            loadMore: this._loadMore,
            refetchConnection: this._refetchConnection,
            environment: relayContext.environment
          };
        };
        _proto._getConnectionData = function _getConnectionData() {
          var _this$props = this.props, _ = _this$props.componentRef, restProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["componentRef"]);
          var props = (0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, restProps), this.state.data);
          var connectionData = getConnectionFromProps(props);
          if (connectionData == null) {
            return null;
          }
          var _ConnectionInterface$2 = ConnectionInterface.get(), EDGES = _ConnectionInterface$2.EDGES, PAGE_INFO = _ConnectionInterface$2.PAGE_INFO, HAS_NEXT_PAGE = _ConnectionInterface$2.HAS_NEXT_PAGE, HAS_PREV_PAGE = _ConnectionInterface$2.HAS_PREV_PAGE, END_CURSOR = _ConnectionInterface$2.END_CURSOR, START_CURSOR = _ConnectionInterface$2.START_CURSOR;
          !(typeof connectionData === "object") ? true ? invariant(false, "ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`to return `null` or a plain object with %s and %s properties, got `%s`.", componentName, EDGES, PAGE_INFO, connectionData) : invariant(false) : void 0;
          var edges = connectionData[EDGES];
          var pageInfo = connectionData[PAGE_INFO];
          if (edges == null || pageInfo == null) {
            return null;
          }
          !Array.isArray(edges) ? true ? invariant(false, "ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`to return an object with %s: Array, got `%s`.", componentName, EDGES, edges) : invariant(false) : void 0;
          !(typeof pageInfo === "object") ? true ? invariant(false, "ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`to return an object with %s: Object, got `%s`.", componentName, PAGE_INFO, pageInfo) : invariant(false) : void 0;
          var hasMore = direction === FORWARD ? pageInfo[HAS_NEXT_PAGE] : pageInfo[HAS_PREV_PAGE];
          var cursor = direction === FORWARD ? pageInfo[END_CURSOR] : pageInfo[START_CURSOR];
          if (typeof hasMore !== "boolean" || edges.length !== 0 && typeof cursor === "undefined") {
            true ? warning(false, "ReactRelayPaginationContainer: Cannot paginate without %s fields in `%s`. Be sure to fetch %s (got `%s`) and %s (got `%s`).", PAGE_INFO, componentName, direction === FORWARD ? HAS_NEXT_PAGE : HAS_PREV_PAGE, hasMore, direction === FORWARD ? END_CURSOR : START_CURSOR, cursor) : void 0;
            return null;
          }
          return {
            cursor,
            edgeCount: edges.length,
            hasMore
          };
        };
        _proto._getQueryFetcher = function _getQueryFetcher() {
          if (!this._queryFetcher) {
            this._queryFetcher = new ReactRelayQueryFetcher();
          }
          return this._queryFetcher;
        };
        _proto._canFetchPage = function _canFetchPage(method) {
          if (this._isUnmounted) {
            true ? warning(false, "ReactRelayPaginationContainer: Unexpected call of `%s` on unmounted container `%s`. It looks like some instances of your container still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger `%s` call.", method, containerName, method) : void 0;
            return false;
          }
          return true;
        };
        _proto._fetchPage = function _fetchPage(paginatingVariables, observer, options) {
          var _this2 = this;
          var _assertRelayContext = assertRelayContext(this.props.__relayContext), environment = _assertRelayContext.environment;
          var _this$props2 = this.props, _ = _this$props2.componentRef, __relayContext = _this$props2.__relayContext, __rootIsQueryRenderer = _this$props2.__rootIsQueryRenderer, restProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["componentRef", "__relayContext", "__rootIsQueryRenderer"]);
          var props = (0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, restProps), this.state.data);
          var fragmentVariables;
          var rootVariables = getRootVariablesForFragments(fragments, restProps);
          fragmentVariables = getVariablesFromObject(fragments, restProps);
          fragmentVariables = (0, _objectSpread3["default"])((0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, rootVariables), fragmentVariables), this._refetchVariables);
          var fetchVariables = connectionConfig.getVariables(props, {
            count: paginatingVariables.count,
            cursor: paginatingVariables.cursor
          }, fragmentVariables);
          !(typeof fetchVariables === "object" && fetchVariables !== null) ? true ? invariant(false, "ReactRelayPaginationContainer: Expected `getVariables()` to return an object, got `%s` in `%s`.", fetchVariables, componentName) : invariant(false) : void 0;
          fetchVariables = (0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, fetchVariables), this._refetchVariables);
          fragmentVariables = (0, _objectSpread3["default"])((0, _objectSpread3["default"])({}, fetchVariables), fragmentVariables);
          var cacheConfig = options ? {
            force: !!options.force
          } : void 0;
          if (cacheConfig != null && (options === null || options === void 0 ? void 0 : options.metadata) != null) {
            cacheConfig.metadata = options === null || options === void 0 ? void 0 : options.metadata;
          }
          var request = getRequest(connectionConfig.query);
          var operation = createOperationDescriptor(request, fetchVariables, cacheConfig);
          var refetchSubscription = null;
          if (this._refetchSubscription) {
            this._refetchSubscription.unsubscribe();
          }
          this._hasFetched = true;
          var onNext = function onNext2(payload, complete) {
            var prevData = _this2._resolver.resolve();
            _this2._resolver.setVariables(getFragmentVariables(fragmentVariables, paginatingVariables.totalCount), operation.request.node);
            var nextData = _this2._resolver.resolve();
            if (!areEqual(prevData, nextData)) {
              _this2.setState({
                data: nextData,
                contextForChildren: {
                  environment: _this2.props.__relayContext.environment
                }
              }, complete);
            } else {
              complete();
            }
          };
          var cleanup = function cleanup2() {
            if (_this2._refetchSubscription === refetchSubscription) {
              _this2._refetchSubscription = null;
              _this2._isARequestInFlight = false;
            }
          };
          this._isARequestInFlight = true;
          refetchSubscription = this._getQueryFetcher().execute({
            environment,
            operation,
            preservePreviousReferences: true
          }).mergeMap(function(payload) {
            return Observable.create(function(sink) {
              onNext(payload, function() {
                sink.next();
                sink.complete();
              });
            });
          })["do"]({
            error: cleanup,
            complete: cleanup,
            unsubscribe: cleanup
          }).subscribe(observer || {});
          this._refetchSubscription = this._isARequestInFlight ? refetchSubscription : null;
          return refetchSubscription;
        };
        _proto._cleanup = function _cleanup() {
          this._resolver.dispose();
          this._refetchVariables = null;
          this._hasFetched = false;
          if (this._refetchSubscription) {
            this._refetchSubscription.unsubscribe();
            this._refetchSubscription = null;
            this._isARequestInFlight = false;
          }
          if (this._queryFetcher) {
            this._queryFetcher.dispose();
          }
        };
        _proto.render = function render() {
          var _this$props3 = this.props, componentRef = _this$props3.componentRef, __relayContext = _this$props3.__relayContext, __rootIsQueryRenderer = _this$props3.__rootIsQueryRenderer, props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props3, ["componentRef", "__relayContext", "__rootIsQueryRenderer"]);
          return React.createElement(ReactRelayContext.Provider, {
            value: this.state.contextForChildren
          }, React.createElement(Component, (0, _extends2["default"])({}, props, this.state.data, {
            ref: componentRef,
            relay: this.state.relayProp
          })));
        };
        return _class2;
      }(React.Component), (0, _defineProperty2["default"])(_class, "displayName", containerName), _temp;
    }
    function createContainer(Component, fragmentSpec, connectionConfig) {
      return buildReactRelayContainer(Component, fragmentSpec, function(ComponentClass, fragments) {
        return createContainerWithFragments(ComponentClass, fragments, connectionConfig);
      });
    }
    module.exports = {
      createContainer
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayQueryRenderer.js
var require_ReactRelayQueryRenderer = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayQueryRenderer.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _inheritsLoose2 = _interopRequireDefault(require_inheritsLoose());
    var React = require_react();
    var ReactRelayContext = require_ReactRelayContext();
    var ReactRelayQueryFetcher = require_ReactRelayQueryFetcher();
    var ReactRelayQueryRendererContext = require_ReactRelayQueryRendererContext();
    var areEqual = require_areEqual();
    var _require = require_relay_runtime();
    var createOperationDescriptor = _require.createOperationDescriptor;
    var deepFreeze = _require.deepFreeze;
    var getRequest = _require.getRequest;
    var requestCache = {};
    var queryRendererContext = {
      rootIsQueryRenderer: true
    };
    var ReactRelayQueryRenderer = function(_React$Component) {
      (0, _inheritsLoose2["default"])(ReactRelayQueryRenderer2, _React$Component);
      function ReactRelayQueryRenderer2(props) {
        var _this;
        _this = _React$Component.call(this, props) || this;
        var retryCallbacks = {
          handleDataChange: null,
          handleRetryAfterError: null
        };
        var queryFetcher;
        var requestCacheKey;
        if (props.query) {
          var query = props.query;
          var request = getRequest(query);
          requestCacheKey = getRequestCacheKey(request.params, props.variables);
          queryFetcher = requestCache[requestCacheKey] ? requestCache[requestCacheKey].queryFetcher : new ReactRelayQueryFetcher();
        } else {
          queryFetcher = new ReactRelayQueryFetcher();
        }
        _this.state = (0, _objectSpread2["default"])({
          prevPropsEnvironment: props.environment,
          prevPropsVariables: props.variables,
          prevQuery: props.query,
          queryFetcher,
          retryCallbacks
        }, fetchQueryAndComputeStateFromProps(props, queryFetcher, retryCallbacks, requestCacheKey));
        return _this;
      }
      ReactRelayQueryRenderer2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.prevQuery !== nextProps.query || prevState.prevPropsEnvironment !== nextProps.environment || !areEqual(prevState.prevPropsVariables, nextProps.variables)) {
          var query = nextProps.query;
          var prevSelectionReferences = prevState.queryFetcher.getSelectionReferences();
          prevState.queryFetcher.disposeRequest();
          var queryFetcher;
          if (query) {
            var request = getRequest(query);
            var requestCacheKey = getRequestCacheKey(request.params, nextProps.variables);
            queryFetcher = requestCache[requestCacheKey] ? requestCache[requestCacheKey].queryFetcher : new ReactRelayQueryFetcher(prevSelectionReferences);
          } else {
            queryFetcher = new ReactRelayQueryFetcher(prevSelectionReferences);
          }
          return (0, _objectSpread2["default"])({
            prevQuery: nextProps.query,
            prevPropsEnvironment: nextProps.environment,
            prevPropsVariables: nextProps.variables,
            queryFetcher
          }, fetchQueryAndComputeStateFromProps(nextProps, queryFetcher, prevState.retryCallbacks));
        }
        return null;
      };
      var _proto = ReactRelayQueryRenderer2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        var _this2 = this;
        var _this$state = this.state, retryCallbacks = _this$state.retryCallbacks, queryFetcher = _this$state.queryFetcher, requestCacheKey = _this$state.requestCacheKey;
        if (requestCacheKey) {
          delete requestCache[requestCacheKey];
        }
        retryCallbacks.handleDataChange = function(params) {
          var error = params.error == null ? null : params.error;
          var snapshot = params.snapshot == null ? null : params.snapshot;
          _this2.setState(function(prevState) {
            var prevRequestCacheKey = prevState.requestCacheKey;
            if (prevRequestCacheKey) {
              delete requestCache[prevRequestCacheKey];
            }
            if (snapshot === prevState.snapshot && error === prevState.error) {
              return null;
            }
            return {
              renderProps: getRenderProps(error, snapshot, prevState.queryFetcher, prevState.retryCallbacks),
              snapshot,
              requestCacheKey: null
            };
          });
        };
        retryCallbacks.handleRetryAfterError = function(error) {
          return _this2.setState(function(prevState) {
            var prevRequestCacheKey = prevState.requestCacheKey;
            if (prevRequestCacheKey) {
              delete requestCache[prevRequestCacheKey];
            }
            return {
              renderProps: getLoadingRenderProps(),
              requestCacheKey: null
            };
          });
        };
        if (this.props.query) {
          queryFetcher.setOnDataChange(retryCallbacks.handleDataChange);
        }
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        var requestCacheKey = this.state.requestCacheKey;
        if (requestCacheKey) {
          delete requestCache[requestCacheKey];
          delete this.state.requestCacheKey;
        }
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.state.queryFetcher.dispose();
      };
      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return nextProps.render !== this.props.render || nextState.renderProps !== this.state.renderProps;
      };
      _proto.render = function render() {
        var _this$state2 = this.state, renderProps = _this$state2.renderProps, relayContext = _this$state2.relayContext;
        if (true) {
          deepFreeze(renderProps);
        }
        return React.createElement(ReactRelayContext.Provider, {
          value: relayContext
        }, React.createElement(ReactRelayQueryRendererContext.Provider, {
          value: queryRendererContext
        }, this.props.render(renderProps)));
      };
      return ReactRelayQueryRenderer2;
    }(React.Component);
    function getLoadingRenderProps() {
      return {
        error: null,
        props: null,
        retry: null
      };
    }
    function getEmptyRenderProps() {
      return {
        error: null,
        props: {},
        retry: null
      };
    }
    function getRenderProps(error, snapshot, queryFetcher, retryCallbacks) {
      return {
        error: error ? error : null,
        props: snapshot ? snapshot.data : null,
        retry: function retry(cacheConfigOverride) {
          var syncSnapshot = queryFetcher.retry(cacheConfigOverride);
          if (syncSnapshot && typeof retryCallbacks.handleDataChange === "function") {
            retryCallbacks.handleDataChange({
              snapshot: syncSnapshot
            });
          } else if (error && typeof retryCallbacks.handleRetryAfterError === "function") {
            retryCallbacks.handleRetryAfterError(error);
          }
        }
      };
    }
    function getRequestCacheKey(request, variables) {
      return JSON.stringify({
        id: request.cacheID ? request.cacheID : request.id,
        variables
      });
    }
    function fetchQueryAndComputeStateFromProps(props, queryFetcher, retryCallbacks, requestCacheKey) {
      var environment = props.environment, query = props.query, variables = props.variables, cacheConfig = props.cacheConfig;
      var genericEnvironment = environment;
      if (query) {
        var request = getRequest(query);
        var operation = createOperationDescriptor(request, variables, cacheConfig);
        var relayContext = {
          environment: genericEnvironment
        };
        if (typeof requestCacheKey === "string" && requestCache[requestCacheKey]) {
          var snapshot = requestCache[requestCacheKey].snapshot;
          if (snapshot) {
            return {
              error: null,
              relayContext,
              renderProps: getRenderProps(null, snapshot, queryFetcher, retryCallbacks),
              snapshot,
              requestCacheKey
            };
          } else {
            return {
              error: null,
              relayContext,
              renderProps: getLoadingRenderProps(),
              snapshot: null,
              requestCacheKey
            };
          }
        }
        try {
          var storeSnapshot = queryFetcher.lookupInStore(genericEnvironment, operation, props.fetchPolicy);
          var querySnapshot = queryFetcher.fetch({
            environment: genericEnvironment,
            onDataChange: retryCallbacks.handleDataChange,
            operation
          });
          var _snapshot = querySnapshot || storeSnapshot;
          requestCacheKey = requestCacheKey || getRequestCacheKey(request.params, props.variables);
          requestCache[requestCacheKey] = {
            queryFetcher,
            snapshot: _snapshot
          };
          if (!_snapshot) {
            return {
              error: null,
              relayContext,
              renderProps: getLoadingRenderProps(),
              snapshot: null,
              requestCacheKey
            };
          }
          return {
            error: null,
            relayContext,
            renderProps: getRenderProps(null, _snapshot, queryFetcher, retryCallbacks),
            snapshot: _snapshot,
            requestCacheKey
          };
        } catch (error) {
          return {
            error,
            relayContext,
            renderProps: getRenderProps(error, null, queryFetcher, retryCallbacks),
            snapshot: null,
            requestCacheKey
          };
        }
      } else {
        queryFetcher.dispose();
        var _relayContext = {
          environment: genericEnvironment
        };
        return {
          error: null,
          relayContext: _relayContext,
          renderProps: getEmptyRenderProps(),
          requestCacheKey: null
        };
      }
    }
    module.exports = ReactRelayQueryRenderer;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayRefetchContainer.js
var require_ReactRelayRefetchContainer = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/ReactRelayRefetchContainer.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inheritsLoose2 = _interopRequireDefault(require_inheritsLoose());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var React = require_react();
    var ReactRelayContext = require_ReactRelayContext();
    var ReactRelayQueryFetcher = require_ReactRelayQueryFetcher();
    var areEqual = require_areEqual();
    var buildReactRelayContainer = require_buildReactRelayContainer();
    var getRootVariablesForFragments = require_getRootVariablesForFragments();
    var warning = require_warning();
    var _require = require_ReactRelayContainerUtils();
    var getContainerName = _require.getContainerName;
    var _require2 = require_RelayContext();
    var assertRelayContext = _require2.assertRelayContext;
    var _require3 = require_relay_runtime();
    var Observable = _require3.Observable;
    var createFragmentSpecResolver = _require3.createFragmentSpecResolver;
    var createOperationDescriptor = _require3.createOperationDescriptor;
    var getDataIDsFromObject = _require3.getDataIDsFromObject;
    var getRequest = _require3.getRequest;
    var getSelector = _require3.getSelector;
    var getVariablesFromObject = _require3.getVariablesFromObject;
    var isScalarAndEqual = _require3.isScalarAndEqual;
    function createContainerWithFragments(Component, fragments, taggedNode) {
      var _class, _temp;
      var containerName = getContainerName(Component);
      return _temp = _class = function(_React$Component) {
        (0, _inheritsLoose2["default"])(_class2, _React$Component);
        function _class2(props) {
          var _props$__rootIsQueryR, _this;
          _this = _React$Component.call(this, props) || this;
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFragmentDataUpdate", function() {
            var resolverFromThisUpdate = _this.state.resolver;
            _this.setState(function(updatedState) {
              return resolverFromThisUpdate === updatedState.resolver ? {
                data: updatedState.resolver.resolve()
              } : null;
            });
          });
          (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_refetch", function(refetchVariables, renderVariables, observerOrCallback, options) {
            if (_this._isUnmounted) {
              true ? warning(false, "ReactRelayRefetchContainer: Unexpected call of `refetch` on unmounted container `%s`. It looks like some instances of your container still trying to refetch the data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger `refetch`.", containerName) : void 0;
              return {
                dispose: function dispose() {
                }
              };
            }
            var _assertRelayContext = assertRelayContext(_this.props.__relayContext), environment = _assertRelayContext.environment;
            var rootVariables = getRootVariablesForFragments(fragments, _this.props);
            var fetchVariables = typeof refetchVariables === "function" ? refetchVariables(_this._getFragmentVariables()) : refetchVariables;
            fetchVariables = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, rootVariables), fetchVariables);
            var fragmentVariables = renderVariables ? (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, fetchVariables), renderVariables) : fetchVariables;
            var cacheConfig = options ? {
              force: !!options.force
            } : void 0;
            if (cacheConfig != null && (options === null || options === void 0 ? void 0 : options.metadata) != null) {
              cacheConfig.metadata = options === null || options === void 0 ? void 0 : options.metadata;
            }
            var observer = typeof observerOrCallback === "function" ? {
              next: observerOrCallback,
              error: observerOrCallback
            } : observerOrCallback || {};
            var query = getRequest(taggedNode);
            var operation = createOperationDescriptor(query, fetchVariables, cacheConfig);
            _this.state.localVariables = fetchVariables;
            _this._refetchSubscription && _this._refetchSubscription.unsubscribe();
            var refetchSubscription;
            var storeSnapshot = _this._getQueryFetcher().lookupInStore(environment, operation, options === null || options === void 0 ? void 0 : options.fetchPolicy);
            if (storeSnapshot != null) {
              _this.state.resolver.setVariables(fragmentVariables, operation.request.node);
              _this.setState(function(latestState) {
                return {
                  data: latestState.resolver.resolve(),
                  contextForChildren: {
                    environment: _this.props.__relayContext.environment
                  }
                };
              }, function() {
                observer.next && observer.next();
                observer.complete && observer.complete();
              });
              return {
                dispose: function dispose() {
                }
              };
            }
            _this._getQueryFetcher().execute({
              environment,
              operation,
              preservePreviousReferences: true
            }).mergeMap(function(response) {
              _this.state.resolver.setVariables(fragmentVariables, operation.request.node);
              return Observable.create(function(sink) {
                return _this.setState(function(latestState) {
                  return {
                    data: latestState.resolver.resolve(),
                    contextForChildren: {
                      environment: _this.props.__relayContext.environment
                    }
                  };
                }, function() {
                  sink.next();
                  sink.complete();
                });
              });
            })["finally"](function() {
              if (_this._refetchSubscription === refetchSubscription) {
                _this._refetchSubscription = null;
              }
            }).subscribe((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, observer), {}, {
              start: function start(subscription) {
                _this._refetchSubscription = refetchSubscription = subscription;
                observer.start && observer.start(subscription);
              }
            }));
            return {
              dispose: function dispose() {
                refetchSubscription && refetchSubscription.unsubscribe();
              }
            };
          });
          var relayContext = assertRelayContext(props.__relayContext);
          var rootIsQueryRenderer = (_props$__rootIsQueryR = props.__rootIsQueryRenderer) !== null && _props$__rootIsQueryR !== void 0 ? _props$__rootIsQueryR : false;
          _this._refetchSubscription = null;
          var resolver = createFragmentSpecResolver(relayContext, containerName, fragments, props, rootIsQueryRenderer);
          _this.state = {
            data: resolver.resolve(),
            localVariables: null,
            prevProps: props,
            prevPropsContext: relayContext,
            contextForChildren: relayContext,
            relayProp: getRelayProp(relayContext.environment, _this._refetch),
            resolver
          };
          _this._isUnmounted = false;
          return _this;
        }
        var _proto = _class2.prototype;
        _proto.componentDidMount = function componentDidMount() {
          this._isUnmounted = false;
          this._subscribeToNewResolver();
        };
        _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
          if (this.state.resolver !== prevState.resolver) {
            prevState.resolver.dispose();
            this._queryFetcher && this._queryFetcher.dispose();
            this._refetchSubscription && this._refetchSubscription.unsubscribe();
            this._subscribeToNewResolver();
          }
        };
        _class2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
          var _nextProps$__rootIsQu;
          var prevProps = prevState.prevProps;
          var relayContext = assertRelayContext(nextProps.__relayContext);
          var rootIsQueryRenderer = (_nextProps$__rootIsQu = nextProps.__rootIsQueryRenderer) !== null && _nextProps$__rootIsQu !== void 0 ? _nextProps$__rootIsQu : false;
          var prevIDs = getDataIDsFromObject(fragments, prevProps);
          var nextIDs = getDataIDsFromObject(fragments, nextProps);
          var prevRootVariables = getRootVariablesForFragments(fragments, prevProps);
          var nextRootVariables = getRootVariablesForFragments(fragments, nextProps);
          var resolver = prevState.resolver;
          if (prevState.prevPropsContext.environment !== relayContext.environment || !areEqual(prevRootVariables, nextRootVariables) || !areEqual(prevIDs, nextIDs)) {
            resolver = createFragmentSpecResolver(relayContext, containerName, fragments, nextProps, rootIsQueryRenderer);
            return {
              data: resolver.resolve(),
              localVariables: null,
              prevProps: nextProps,
              prevPropsContext: relayContext,
              contextForChildren: relayContext,
              relayProp: getRelayProp(relayContext.environment, prevState.relayProp.refetch),
              resolver
            };
          } else if (!prevState.localVariables) {
            resolver.setProps(nextProps);
          }
          var data = resolver.resolve();
          if (data !== prevState.data) {
            return {
              data,
              prevProps: nextProps
            };
          }
          return null;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
          this._isUnmounted = true;
          this.state.resolver.dispose();
          this._queryFetcher && this._queryFetcher.dispose();
          this._refetchSubscription && this._refetchSubscription.unsubscribe();
        };
        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          if (nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
            return true;
          }
          var keys = Object.keys(nextProps);
          for (var ii = 0; ii < keys.length; ii++) {
            var _key = keys[ii];
            if (_key === "__relayContext") {
              if (this.state.prevPropsContext.environment !== nextState.prevPropsContext.environment) {
                return true;
              }
            } else {
              if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
                return true;
              }
            }
          }
          return false;
        };
        _proto._subscribeToNewResolver = function _subscribeToNewResolver() {
          var _this$state = this.state, data = _this$state.data, resolver = _this$state.resolver;
          resolver.setCallback(this._handleFragmentDataUpdate);
          var maybeNewData = resolver.resolve();
          if (data !== maybeNewData) {
            this.setState({
              data: maybeNewData
            });
          }
        };
        _proto._getFragmentVariables = function _getFragmentVariables() {
          return getVariablesFromObject(fragments, this.props);
        };
        _proto._getQueryFetcher = function _getQueryFetcher() {
          if (!this._queryFetcher) {
            this._queryFetcher = new ReactRelayQueryFetcher();
          }
          return this._queryFetcher;
        };
        _proto.render = function render() {
          var _this$props = this.props, componentRef = _this$props.componentRef, __relayContext = _this$props.__relayContext, __rootIsQueryRenderer = _this$props.__rootIsQueryRenderer, props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["componentRef", "__relayContext", "__rootIsQueryRenderer"]);
          var _this$state2 = this.state, relayProp = _this$state2.relayProp, contextForChildren = _this$state2.contextForChildren;
          return React.createElement(ReactRelayContext.Provider, {
            value: contextForChildren
          }, React.createElement(Component, (0, _extends2["default"])({}, props, this.state.data, {
            ref: componentRef,
            relay: relayProp
          })));
        };
        return _class2;
      }(React.Component), (0, _defineProperty2["default"])(_class, "displayName", containerName), _temp;
    }
    function getRelayProp(environment, refetch) {
      return {
        environment,
        refetch
      };
    }
    function createContainer(Component, fragmentSpec, taggedNode) {
      return buildReactRelayContainer(Component, fragmentSpec, function(ComponentClass, fragments) {
        return createContainerWithFragments(ComponentClass, fragments, taggedNode);
      });
    }
    module.exports = {
      createContainer
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/RelayEnvironmentProvider.js
var require_RelayEnvironmentProvider = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/RelayEnvironmentProvider.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var ReactRelayContext = require_ReactRelayContext2();
    var useMemo = React.useMemo;
    function RelayEnvironmentProvider(props) {
      var children = props.children, environment = props.environment;
      var context = useMemo(function() {
        return {
          environment
        };
      }, [environment]);
      return React.createElement(ReactRelayContext.Provider, {
        value: context
      }, children);
    }
    module.exports = RelayEnvironmentProvider;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/loadQuery.js
var require_loadQuery = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/loadQuery.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var React = require_react();
    var invariant = require_browser();
    var warning = require_warning();
    var _require = require_relay_runtime();
    var PreloadableQueryRegistry = _require.PreloadableQueryRegistry;
    var ReplaySubject = _require.ReplaySubject;
    var createOperationDescriptor = _require.createOperationDescriptor;
    var getRequest = _require.getRequest;
    var getRequestIdentifier = _require.getRequestIdentifier;
    var Observable = _require.Observable;
    var RelayFeatureFlags = _require.RelayFeatureFlags;
    var fetchQueryDeduped = _require.__internal.fetchQueryDeduped;
    var RenderDispatcher = null;
    var fetchKey = 100001;
    function useTrackLoadQueryInRender() {
      if (RenderDispatcher === null) {
        var _React$__SECRET_INTER, _React$__SECRET_INTER2;
        RenderDispatcher = (_React$__SECRET_INTER = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React$__SECRET_INTER === void 0 ? void 0 : (_React$__SECRET_INTER2 = _React$__SECRET_INTER.ReactCurrentDispatcher) === null || _React$__SECRET_INTER2 === void 0 ? void 0 : _React$__SECRET_INTER2.current;
      }
    }
    function loadQuery(environment, preloadableRequest, variables, options, environmentProviderOptions) {
      var _React$__SECRET_INTER3, _React$__SECRET_INTER4, _options$__nameForWar, _options$fetchPolicy;
      var CurrentDispatcher = (_React$__SECRET_INTER3 = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React$__SECRET_INTER3 === void 0 ? void 0 : (_React$__SECRET_INTER4 = _React$__SECRET_INTER3.ReactCurrentDispatcher) === null || _React$__SECRET_INTER4 === void 0 ? void 0 : _React$__SECRET_INTER4.current;
      true ? warning(RenderDispatcher == null || CurrentDispatcher !== RenderDispatcher, "Relay: `%s` should not be called inside a React render function.", (_options$__nameForWar = options === null || options === void 0 ? void 0 : options.__nameForWarning) !== null && _options$__nameForWar !== void 0 ? _options$__nameForWar : "loadQuery") : void 0;
      fetchKey++;
      var fetchPolicy = (_options$fetchPolicy = options === null || options === void 0 ? void 0 : options.fetchPolicy) !== null && _options$fetchPolicy !== void 0 ? _options$fetchPolicy : "store-or-network";
      var networkCacheConfig = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, options === null || options === void 0 ? void 0 : options.networkCacheConfig), {}, {
        force: true
      });
      var retainReference;
      var didExecuteNetworkSource = false;
      var executeWithNetworkSource = function executeWithNetworkSource2(operation, networkObservable2) {
        didExecuteNetworkSource = true;
        return environment.executeWithSource({
          operation,
          source: networkObservable2
        });
      };
      var executionSubject = new ReplaySubject();
      var returnedObservable = Observable.create(function(sink) {
        return executionSubject.subscribe(sink);
      });
      var unsubscribeFromNetworkRequest;
      var networkError = null;
      var didMakeNetworkRequest = false;
      var makeNetworkRequest = function makeNetworkRequest2(params2) {
        didMakeNetworkRequest = true;
        var observable;
        var subject = new ReplaySubject();
        if (RelayFeatureFlags.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === true) {
          var identifier = "raw-network-request-" + getRequestIdentifier(params2, variables);
          observable = fetchQueryDeduped(environment, identifier, function() {
            var network2 = environment.getNetwork();
            return network2.execute(params2, variables, networkCacheConfig);
          });
        } else {
          var network = environment.getNetwork();
          observable = network.execute(params2, variables, networkCacheConfig);
        }
        var _observable$subscribe = observable.subscribe({
          error: function error(err) {
            networkError = err;
            subject.error(err);
          },
          next: function next(data) {
            subject.next(data);
          },
          complete: function complete() {
            subject.complete();
          }
        }), unsubscribe = _observable$subscribe.unsubscribe;
        unsubscribeFromNetworkRequest = unsubscribe;
        return Observable.create(function(sink) {
          var subjectSubscription = subject.subscribe(sink);
          return function() {
            subjectSubscription.unsubscribe();
            unsubscribeFromNetworkRequest();
          };
        });
      };
      var unsubscribeFromExecution;
      var executeDeduped = function executeDeduped2(operation, fetchFn) {
        if (RelayFeatureFlags.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === true) {
          didMakeNetworkRequest = true;
        }
        var _fetchQueryDeduped$su = fetchQueryDeduped(environment, operation.request.identifier, fetchFn).subscribe({
          error: function error(err) {
            executionSubject.error(err);
          },
          next: function next(data) {
            executionSubject.next(data);
          },
          complete: function complete() {
            executionSubject.complete();
          }
        });
        unsubscribeFromExecution = _fetchQueryDeduped$su.unsubscribe;
      };
      var checkAvailabilityAndExecute = function checkAvailabilityAndExecute2(concreteRequest) {
        var operation = createOperationDescriptor(concreteRequest, variables, networkCacheConfig);
        retainReference = environment.retain(operation);
        if (fetchPolicy === "store-only") {
          return;
        }
        var shouldFetch = fetchPolicy !== "store-or-network" || environment.check(operation).status !== "available";
        if (shouldFetch) {
          executeDeduped(operation, function() {
            var networkObservable2 = makeNetworkRequest(concreteRequest.params);
            var executeObservable = executeWithNetworkSource(operation, networkObservable2);
            return executeObservable;
          });
        }
      };
      var params;
      var cancelOnLoadCallback;
      var queryId;
      if (preloadableRequest.kind === "PreloadableConcreteRequest") {
        var preloadableConcreteRequest = preloadableRequest;
        params = preloadableConcreteRequest.params;
        var _params = params;
        queryId = _params.id;
        !(queryId !== null) ? true ? invariant(false, "Relay: `loadQuery` requires that preloadable query `%s` has a persisted query id", params.name) : invariant(false) : void 0;
        var _module = PreloadableQueryRegistry.get(queryId);
        if (_module != null) {
          checkAvailabilityAndExecute(_module);
        } else {
          var networkObservable = fetchPolicy === "store-only" ? null : makeNetworkRequest(params);
          var _PreloadableQueryRegi = PreloadableQueryRegistry.onLoad(queryId, function(preloadedModule) {
            cancelOnLoadCallback();
            var operation = createOperationDescriptor(preloadedModule, variables, networkCacheConfig);
            retainReference = environment.retain(operation);
            if (networkObservable != null) {
              executeDeduped(operation, function() {
                return executeWithNetworkSource(operation, networkObservable);
              });
            }
          });
          cancelOnLoadCallback = _PreloadableQueryRegi.dispose;
        }
      } else {
        var graphQlTaggedNode = preloadableRequest;
        var request = getRequest(graphQlTaggedNode);
        params = request.params;
        queryId = params.cacheID != null ? params.cacheID : params.id;
        checkAvailabilityAndExecute(request);
      }
      var isDisposed = false;
      return {
        kind: "PreloadedQuery",
        environment,
        environmentProviderOptions,
        dispose: function dispose() {
          if (isDisposed) {
            return;
          }
          if (didExecuteNetworkSource) {
            unsubscribeFromExecution && unsubscribeFromExecution();
          } else {
            unsubscribeFromNetworkRequest && unsubscribeFromNetworkRequest();
          }
          retainReference && retainReference.dispose();
          cancelOnLoadCallback && cancelOnLoadCallback();
          isDisposed = true;
        },
        fetchKey,
        id: queryId,
        get isDisposed() {
          return isDisposed;
        },
        get networkError() {
          return networkError;
        },
        name: params.name,
        networkCacheConfig,
        fetchPolicy,
        source: didMakeNetworkRequest ? returnedObservable : void 0,
        variables
      };
    }
    module.exports = {
      loadQuery,
      useTrackLoadQueryInRender
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/loadEntryPoint.js
var require_loadEntryPoint = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/loadEntryPoint.js"(exports, module) {
    init_define_global();
    "use strict";
    var _require = require_loadQuery();
    var loadQuery = _require.loadQuery;
    function loadEntryPoint(environmentProvider, entryPoint, entryPointParams) {
      var loadingPromise = null;
      if (entryPoint.root.getModuleIfRequired() == null) {
        loadingPromise = entryPoint.root.load();
      }
      var preloadProps = entryPoint.getPreloadProps(entryPointParams);
      var queries = preloadProps.queries, entryPoints = preloadProps.entryPoints, extraProps = preloadProps.extraProps;
      var preloadedQueries = {};
      var preloadedEntryPoints = {};
      if (queries != null) {
        var queriesPropNames = Object.keys(queries);
        queriesPropNames.forEach(function(queryPropName) {
          var _queries$queryPropNam = queries[queryPropName], environmentProviderOptions = _queries$queryPropNam.environmentProviderOptions, options = _queries$queryPropNam.options, parameters = _queries$queryPropNam.parameters, variables = _queries$queryPropNam.variables;
          var environment = environmentProvider.getEnvironment(environmentProviderOptions);
          preloadedQueries[queryPropName] = loadQuery(environment, parameters, variables, {
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            networkCacheConfig: options === null || options === void 0 ? void 0 : options.networkCacheConfig,
            __nameForWarning: "loadEntryPoint"
          }, environmentProviderOptions);
        });
      }
      if (entryPoints != null) {
        var entryPointPropNames = Object.keys(entryPoints);
        entryPointPropNames.forEach(function(entryPointPropName) {
          var entryPointDescription = entryPoints[entryPointPropName];
          if (entryPointDescription == null) {
            return;
          }
          var nestedEntryPoint = entryPointDescription.entryPoint, nestedParams = entryPointDescription.entryPointParams;
          preloadedEntryPoints[entryPointPropName] = loadEntryPoint(environmentProvider, nestedEntryPoint, nestedParams);
        });
      }
      var isDisposed = false;
      return {
        dispose: function dispose() {
          if (isDisposed) {
            return;
          }
          if (preloadedQueries != null) {
            Object.values(preloadedQueries).forEach(function(_ref) {
              var innerDispose = _ref.dispose;
              innerDispose();
            });
          }
          if (preloadedEntryPoints != null) {
            Object.values(preloadedEntryPoints).forEach(function(_ref2) {
              var innerDispose = _ref2.dispose;
              innerDispose();
            });
          }
          isDisposed = true;
        },
        entryPoints: preloadedEntryPoints,
        extraProps: extraProps !== null && extraProps !== void 0 ? extraProps : null,
        getComponent: function getComponent() {
          var component = entryPoint.root.getModuleIfRequired();
          if (component == null) {
            var _loadingPromise;
            loadingPromise = (_loadingPromise = loadingPromise) !== null && _loadingPromise !== void 0 ? _loadingPromise : entryPoint.root.load();
            throw loadingPromise;
          }
          return component;
        },
        get isDisposed() {
          return isDisposed;
        },
        queries: preloadedQueries,
        rootModuleID: entryPoint.root.getModuleId()
      };
    }
    module.exports = loadEntryPoint;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useIsMountedRef.js
var require_useIsMountedRef = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useIsMountedRef.js"(exports, module) {
    init_define_global();
    "use strict";
    var _require = require_react();
    var useEffect = _require.useEffect;
    var useRef = _require.useRef;
    function useIsMountedRef() {
      var isMountedRef = useRef(true);
      useEffect(function() {
        isMountedRef.current = true;
        return function() {
          isMountedRef.current = false;
        };
      }, []);
      return isMountedRef;
    }
    module.exports = useIsMountedRef;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useEntryPointLoader.js
var require_useEntryPointLoader = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useEntryPointLoader.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var loadEntryPoint = require_loadEntryPoint();
    var useIsMountedRef = require_useIsMountedRef();
    var _require = require_loadQuery();
    var useTrackLoadQueryInRender = _require.useTrackLoadQueryInRender;
    var _require2 = require_react();
    var useCallback = _require2.useCallback;
    var useEffect = _require2.useEffect;
    var useRef = _require2.useRef;
    var useState = _require2.useState;
    var initialNullEntryPointReferenceState = {
      kind: "NullEntryPointReference"
    };
    function useLoadEntryPoint(environmentProvider, entryPoint, options) {
      var _options$TEST_ONLY__i, _options$TEST_ONLY__i2, _options$TEST_ONLY__i3, _options$TEST_ONLY__i4;
      useTrackLoadQueryInRender();
      var initialEntryPointReferenceInternal = (_options$TEST_ONLY__i = options === null || options === void 0 ? void 0 : (_options$TEST_ONLY__i2 = options.TEST_ONLY__initialEntryPointData) === null || _options$TEST_ONLY__i2 === void 0 ? void 0 : _options$TEST_ONLY__i2.entryPointReference) !== null && _options$TEST_ONLY__i !== void 0 ? _options$TEST_ONLY__i : initialNullEntryPointReferenceState;
      var initialEntryPointParamsInternal = (_options$TEST_ONLY__i3 = options === null || options === void 0 ? void 0 : (_options$TEST_ONLY__i4 = options.TEST_ONLY__initialEntryPointData) === null || _options$TEST_ONLY__i4 === void 0 ? void 0 : _options$TEST_ONLY__i4.entryPointParams) !== null && _options$TEST_ONLY__i3 !== void 0 ? _options$TEST_ONLY__i3 : null;
      var isMountedRef = useIsMountedRef();
      var undisposedEntryPointReferencesRef = useRef(new Set([initialEntryPointReferenceInternal]));
      var _useState = useState(initialEntryPointReferenceInternal), entryPointReference = _useState[0], setEntryPointReference = _useState[1];
      var _useState2 = useState(initialEntryPointParamsInternal), entryPointParams = _useState2[0], setEntryPointParams = _useState2[1];
      var disposeEntryPoint = useCallback(function() {
        if (isMountedRef.current) {
          var nullEntryPointReference = {
            kind: "NullEntryPointReference"
          };
          undisposedEntryPointReferencesRef.current.add(nullEntryPointReference);
          setEntryPointReference(nullEntryPointReference);
        }
      }, [setEntryPointReference, isMountedRef]);
      var entryPointLoaderCallback = useCallback(function(params) {
        if (isMountedRef.current) {
          var updatedEntryPointReference = loadEntryPoint(environmentProvider, entryPoint, params);
          undisposedEntryPointReferencesRef.current.add(updatedEntryPointReference);
          setEntryPointReference(updatedEntryPointReference);
          setEntryPointParams(params);
        }
      }, [environmentProvider, entryPoint, setEntryPointReference, isMountedRef]);
      var maybeHiddenOrFastRefresh = useRef(false);
      useEffect(function() {
        return function() {
          maybeHiddenOrFastRefresh.current = true;
        };
      }, []);
      useEffect(function() {
        if (maybeHiddenOrFastRefresh.current === true) {
          maybeHiddenOrFastRefresh.current = false;
          if (entryPointReference.kind !== "NullEntryPointReference" && entryPointParams != null) {
            entryPointLoaderCallback(entryPointParams);
          }
          return;
        }
        var undisposedEntryPointReferences = undisposedEntryPointReferencesRef.current;
        if (isMountedRef.current) {
          var _iterator = (0, _createForOfIteratorHelper2["default"])(undisposedEntryPointReferences), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var undisposedEntryPointReference = _step.value;
              if (undisposedEntryPointReference === entryPointReference) {
                break;
              }
              undisposedEntryPointReferences["delete"](undisposedEntryPointReference);
              if (undisposedEntryPointReference.kind !== "NullEntryPointReference") {
                undisposedEntryPointReference.dispose();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, [entryPointReference, entryPointParams, entryPointLoaderCallback, isMountedRef]);
      useEffect(function() {
        return function disposeAllRemainingEntryPointReferences() {
          var _iterator2 = (0, _createForOfIteratorHelper2["default"])(undisposedEntryPointReferencesRef.current), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var unhandledStateChange = _step2.value;
              if (unhandledStateChange.kind !== "NullEntryPointReference") {
                unhandledStateChange.dispose();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        };
      }, []);
      return [entryPointReference.kind === "NullEntryPointReference" ? null : entryPointReference, entryPointLoaderCallback, disposeEntryPoint];
    }
    module.exports = useLoadEntryPoint;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/LRUCache.js
var require_LRUCache = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/LRUCache.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var LRUCache = function() {
      function LRUCache2(capacity) {
        this._capacity = capacity;
        !(this._capacity > 0) ? true ? invariant(false, "LRUCache: Unable to create instance of cache with zero or negative capacity.") : invariant(false) : void 0;
        this._map = new Map();
      }
      var _proto = LRUCache2.prototype;
      _proto.set = function set(key, value) {
        this._map["delete"](key);
        this._map.set(key, value);
        if (this._map.size > this._capacity) {
          var firstKey = this._map.keys().next();
          if (!firstKey.done) {
            this._map["delete"](firstKey.value);
          }
        }
      };
      _proto.get = function get(key) {
        var value = this._map.get(key);
        if (value != null) {
          this._map["delete"](key);
          this._map.set(key, value);
        }
        return value;
      };
      _proto.has = function has(key) {
        return this._map.has(key);
      };
      _proto["delete"] = function _delete(key) {
        this._map["delete"](key);
      };
      _proto.size = function size() {
        return this._map.size;
      };
      _proto.capacity = function capacity() {
        return this._capacity - this._map.size;
      };
      _proto.clear = function clear() {
        this._map.clear();
      };
      return LRUCache2;
    }();
    function create(capacity) {
      return new LRUCache(capacity);
    }
    module.exports = {
      create
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/FragmentResource.js
var require_FragmentResource = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/FragmentResource.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var LRUCache = require_LRUCache();
    var invariant = require_browser();
    var _require = require_relay_runtime();
    var getPromiseForActiveRequest = _require.__internal.getPromiseForActiveRequest;
    var getFragmentIdentifier = _require.getFragmentIdentifier;
    var getSelector = _require.getSelector;
    var isPromise = _require.isPromise;
    var recycleNodesInto = _require.recycleNodesInto;
    var reportMissingRequiredFields = _require.reportMissingRequiredFields;
    var WEAKMAP_SUPPORTED = typeof WeakMap === "function";
    var CACHE_CAPACITY = 1e6;
    var CONSTANT_READONLY_EMPTY_ARRAY = Object.freeze([]);
    function isMissingData(snapshot) {
      if (Array.isArray(snapshot)) {
        return snapshot.some(function(s) {
          return s.isMissingData;
        });
      }
      return snapshot.isMissingData;
    }
    function getFragmentResult(cacheKey, snapshot) {
      if (Array.isArray(snapshot)) {
        return {
          cacheKey,
          snapshot,
          data: snapshot.map(function(s) {
            return s.data;
          })
        };
      }
      return {
        cacheKey,
        snapshot,
        data: snapshot.data
      };
    }
    function getPromiseForPendingOperationAffectingOwner(environment, request) {
      return environment.getOperationTracker().getPromiseForPendingOperationsAffectingOwner(request);
    }
    var FragmentResourceImpl = function() {
      function FragmentResourceImpl2(environment) {
        this._environment = environment;
        this._cache = LRUCache.create(CACHE_CAPACITY);
      }
      var _proto = FragmentResourceImpl2.prototype;
      _proto.read = function read(fragmentNode, fragmentRef, componentDisplayName, fragmentKey) {
        return this.readWithIdentifier(fragmentNode, fragmentRef, getFragmentIdentifier(fragmentNode, fragmentRef), componentDisplayName, fragmentKey);
      };
      _proto.readWithIdentifier = function readWithIdentifier(fragmentNode, fragmentRef, fragmentIdentifier, componentDisplayName, fragmentKey) {
        var _fragmentNode$metadat;
        var environment = this._environment;
        if (fragmentRef == null) {
          return {
            cacheKey: fragmentIdentifier,
            data: null,
            snapshot: null
          };
        }
        if ((fragmentNode === null || fragmentNode === void 0 ? void 0 : (_fragmentNode$metadat = fragmentNode.metadata) === null || _fragmentNode$metadat === void 0 ? void 0 : _fragmentNode$metadat.plural) === true) {
          !Array.isArray(fragmentRef) ? true ? invariant(false, "Relay: Expected fragment pointer%s for fragment `%s` to be an array, instead got `%s`. Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.", fragmentKey != null ? " for key `".concat(fragmentKey, "`") : "", fragmentNode.name, typeof fragmentRef, fragmentNode.name) : invariant(false) : void 0;
          if (fragmentRef.length === 0) {
            return {
              cacheKey: fragmentIdentifier,
              data: CONSTANT_READONLY_EMPTY_ARRAY,
              snapshot: CONSTANT_READONLY_EMPTY_ARRAY
            };
          }
        }
        var cachedValue = this._cache.get(fragmentIdentifier);
        if (cachedValue != null) {
          if (isPromise(cachedValue)) {
            throw cachedValue;
          }
          if (cachedValue.snapshot) {
            this._reportMissingRequiredFieldsInSnapshot(cachedValue.snapshot);
            return cachedValue;
          }
        }
        var fragmentSelector = getSelector(fragmentNode, fragmentRef);
        !(fragmentSelector != null) ? true ? invariant(false, "Relay: Expected to receive an object where `...%s` was spread, but the fragment reference was not found`. This is most likely the result of:\n- Forgetting to spread `%s` in `%s`'s parent's fragment.\n- Conditionally fetching `%s` but unconditionally passing %s prop to `%s`. If the parent fragment only fetches the fragment conditionally - with e.g. `@include`, `@skip`, or inside a `... on SomeType { }` spread  - then the fragment reference will not exist. In this case, pass `null` if the conditions for evaluating the fragment are not met (e.g. if the `@include(if)` value is false.)", fragmentNode.name, fragmentNode.name, componentDisplayName, fragmentNode.name, fragmentKey == null ? "a fragment reference" : "the `".concat(fragmentKey, "`"), componentDisplayName) : invariant(false) : void 0;
        var snapshot = fragmentSelector.kind === "PluralReaderSelector" ? fragmentSelector.selectors.map(function(s) {
          return environment.lookup(s);
        }) : environment.lookup(fragmentSelector);
        var fragmentOwner = fragmentSelector.kind === "PluralReaderSelector" ? fragmentSelector.selectors[0].owner : fragmentSelector.owner;
        if (!isMissingData(snapshot)) {
          this._reportMissingRequiredFieldsInSnapshot(snapshot);
          var fragmentResult = getFragmentResult(fragmentIdentifier, snapshot);
          this._cache.set(fragmentIdentifier, fragmentResult);
          return fragmentResult;
        }
        var networkPromise = this._getAndSavePromiseForFragmentRequestInFlight(fragmentIdentifier, fragmentNode, fragmentOwner);
        if (networkPromise != null) {
          throw networkPromise;
        }
        this._reportMissingRequiredFieldsInSnapshot(snapshot);
        return getFragmentResult(fragmentIdentifier, snapshot);
      };
      _proto._reportMissingRequiredFieldsInSnapshot = function _reportMissingRequiredFieldsInSnapshot(snapshot) {
        var _this = this;
        if (Array.isArray(snapshot)) {
          snapshot.forEach(function(s) {
            if (s.missingRequiredFields != null) {
              reportMissingRequiredFields(_this._environment, s.missingRequiredFields);
            }
          });
        } else {
          if (snapshot.missingRequiredFields != null) {
            reportMissingRequiredFields(this._environment, snapshot.missingRequiredFields);
          }
        }
      };
      _proto.readSpec = function readSpec(fragmentNodes, fragmentRefs, componentDisplayName) {
        var result = {};
        for (var _key in fragmentNodes) {
          result[_key] = this.read(fragmentNodes[_key], fragmentRefs[_key], componentDisplayName, _key);
        }
        return result;
      };
      _proto.subscribe = function subscribe(fragmentResult, callback) {
        var _this2 = this;
        var environment = this._environment;
        var cacheKey = fragmentResult.cacheKey;
        var renderedSnapshot = fragmentResult.snapshot;
        if (!renderedSnapshot) {
          return {
            dispose: function dispose() {
            }
          };
        }
        var _this$checkMissedUpda = this.checkMissedUpdates(fragmentResult), didMissUpdates = _this$checkMissedUpda[0], currentSnapshot = _this$checkMissedUpda[1];
        if (didMissUpdates) {
          callback();
        }
        var dataSubscriptions = [];
        if (Array.isArray(renderedSnapshot)) {
          !Array.isArray(currentSnapshot) ? true ? invariant(false, "Relay: Expected snapshots to be plural. If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
          currentSnapshot.forEach(function(snapshot, idx) {
            dataSubscriptions.push(environment.subscribe(snapshot, function(latestSnapshot) {
              _this2._updatePluralSnapshot(cacheKey, currentSnapshot, latestSnapshot, idx);
              callback();
            }));
          });
        } else {
          !(currentSnapshot != null && !Array.isArray(currentSnapshot)) ? true ? invariant(false, "Relay: Expected snapshot to be singular. If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
          dataSubscriptions.push(environment.subscribe(currentSnapshot, function(latestSnapshot) {
            _this2._cache.set(cacheKey, getFragmentResult(cacheKey, latestSnapshot));
            callback();
          }));
        }
        return {
          dispose: function dispose() {
            dataSubscriptions.map(function(s) {
              return s.dispose();
            });
            _this2._cache["delete"](cacheKey);
          }
        };
      };
      _proto.subscribeSpec = function subscribeSpec(fragmentResults, callback) {
        var _this3 = this;
        var disposables = Object.keys(fragmentResults).map(function(key) {
          return _this3.subscribe(fragmentResults[key], callback);
        });
        return {
          dispose: function dispose() {
            disposables.forEach(function(disposable) {
              disposable.dispose();
            });
          }
        };
      };
      _proto.checkMissedUpdates = function checkMissedUpdates(fragmentResult) {
        var environment = this._environment;
        var cacheKey = fragmentResult.cacheKey;
        var renderedSnapshot = fragmentResult.snapshot;
        if (!renderedSnapshot) {
          return [false, null];
        }
        var didMissUpdates = false;
        if (Array.isArray(renderedSnapshot)) {
          var currentSnapshots = [];
          renderedSnapshot.forEach(function(snapshot, idx) {
            var currentSnapshot2 = environment.lookup(snapshot.selector);
            var renderData2 = snapshot.data;
            var currentData2 = currentSnapshot2.data;
            var updatedData2 = recycleNodesInto(renderData2, currentData2);
            if (updatedData2 !== renderData2) {
              currentSnapshot2 = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, currentSnapshot2), {}, {
                data: updatedData2
              });
              didMissUpdates = true;
            }
            currentSnapshots[idx] = currentSnapshot2;
          });
          if (didMissUpdates) {
            this._cache.set(cacheKey, getFragmentResult(cacheKey, currentSnapshots));
          }
          return [didMissUpdates, currentSnapshots];
        }
        var currentSnapshot = environment.lookup(renderedSnapshot.selector);
        var renderData = renderedSnapshot.data;
        var currentData = currentSnapshot.data;
        var updatedData = recycleNodesInto(renderData, currentData);
        currentSnapshot = {
          data: updatedData,
          isMissingData: currentSnapshot.isMissingData,
          seenRecords: currentSnapshot.seenRecords,
          selector: currentSnapshot.selector,
          missingRequiredFields: currentSnapshot.missingRequiredFields
        };
        if (updatedData !== renderData) {
          this._cache.set(cacheKey, getFragmentResult(cacheKey, currentSnapshot));
          didMissUpdates = true;
        }
        return [didMissUpdates, currentSnapshot];
      };
      _proto.checkMissedUpdatesSpec = function checkMissedUpdatesSpec(fragmentResults) {
        var _this4 = this;
        return Object.keys(fragmentResults).some(function(key) {
          return _this4.checkMissedUpdates(fragmentResults[key])[0];
        });
      };
      _proto._getAndSavePromiseForFragmentRequestInFlight = function _getAndSavePromiseForFragmentRequestInFlight(cacheKey, fragmentNode, fragmentOwner) {
        var _this5 = this;
        var _getPromiseForActiveR;
        var environment = this._environment;
        var networkPromise = (_getPromiseForActiveR = getPromiseForActiveRequest(environment, fragmentOwner)) !== null && _getPromiseForActiveR !== void 0 ? _getPromiseForActiveR : getPromiseForPendingOperationAffectingOwner(environment, fragmentOwner);
        if (!networkPromise) {
          return null;
        }
        var promise = networkPromise.then(function() {
          _this5._cache["delete"](cacheKey);
        })["catch"](function(error) {
          _this5._cache["delete"](cacheKey);
        });
        this._cache.set(cacheKey, promise);
        var queryName = fragmentOwner.node.params.name;
        var fragmentName = fragmentNode.name;
        var promiseDisplayName = queryName === fragmentName ? "Relay(".concat(queryName, ")") : "Relay(".concat(queryName, ":").concat(fragmentName, ")");
        promise.displayName = promiseDisplayName;
        return promise;
      };
      _proto._updatePluralSnapshot = function _updatePluralSnapshot(cacheKey, baseSnapshots, latestSnapshot, idx) {
        var currentFragmentResult = this._cache.get(cacheKey);
        if (isPromise(currentFragmentResult)) {
          reportInvalidCachedData(latestSnapshot.selector.node.name);
          return;
        }
        var currentSnapshot = currentFragmentResult === null || currentFragmentResult === void 0 ? void 0 : currentFragmentResult.snapshot;
        if (currentSnapshot && !Array.isArray(currentSnapshot)) {
          reportInvalidCachedData(latestSnapshot.selector.node.name);
          return;
        }
        var nextSnapshots = currentSnapshot ? (0, _toConsumableArray2["default"])(currentSnapshot) : (0, _toConsumableArray2["default"])(baseSnapshots);
        nextSnapshots[idx] = latestSnapshot;
        this._cache.set(cacheKey, getFragmentResult(cacheKey, nextSnapshots));
      };
      return FragmentResourceImpl2;
    }();
    function reportInvalidCachedData(nodeName) {
      true ? true ? invariant(false, "Relay: Expected to find cached data for plural fragment `%s` when receiving a subscription. If you're seeing this, this is likely a bug in Relay.", nodeName) : invariant(false) : void 0;
    }
    function createFragmentResource(environment) {
      return new FragmentResourceImpl(environment);
    }
    var dataResources = WEAKMAP_SUPPORTED ? new WeakMap() : new Map();
    function getFragmentResourceForEnvironment(environment) {
      var cached = dataResources.get(environment);
      if (cached) {
        return cached;
      }
      var newDataResource = createFragmentResource(environment);
      dataResources.set(environment, newDataResource);
      return newDataResource;
    }
    module.exports = {
      createFragmentResource,
      getFragmentResourceForEnvironment
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useFragmentNode.js
var require_useFragmentNode = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useFragmentNode.js"(exports, module) {
    init_define_global();
    "use strict";
    var useRelayEnvironment = require_useRelayEnvironment();
    var warning = require_warning();
    var _require = require_FragmentResource();
    var getFragmentResourceForEnvironment = _require.getFragmentResourceForEnvironment;
    var _require2 = require_react();
    var useEffect = _require2.useEffect;
    var useRef = _require2.useRef;
    var useState = _require2.useState;
    var _require3 = require_relay_runtime();
    var getFragmentIdentifier = _require3.getFragmentIdentifier;
    function useFragmentNode(fragmentNode, fragmentRef, componentDisplayName) {
      var environment = useRelayEnvironment();
      var FragmentResource = getFragmentResourceForEnvironment(environment);
      var isMountedRef = useRef(false);
      var _useState = useState(0), forceUpdate = _useState[1];
      var fragmentIdentifier = getFragmentIdentifier(fragmentNode, fragmentRef);
      var fragmentResult = FragmentResource.readWithIdentifier(fragmentNode, fragmentRef, fragmentIdentifier, componentDisplayName);
      var isListeningForUpdatesRef = useRef(true);
      function enableStoreUpdates() {
        isListeningForUpdatesRef.current = true;
        var didMissUpdates = FragmentResource.checkMissedUpdates(fragmentResult)[0];
        if (didMissUpdates) {
          handleDataUpdate();
        }
      }
      function disableStoreUpdates() {
        isListeningForUpdatesRef.current = false;
      }
      function handleDataUpdate() {
        if (isMountedRef.current === false || isListeningForUpdatesRef.current === false) {
          return;
        }
        forceUpdate(function(count) {
          return count + 1;
        });
      }
      useEffect(function() {
        isMountedRef.current = true;
        var disposable = FragmentResource.subscribe(fragmentResult, handleDataUpdate);
        return function() {
          isMountedRef.current = false;
          disposable.dispose();
        };
      }, [environment, fragmentIdentifier]);
      if (true) {
        if (fragmentRef != null && (fragmentResult.data === void 0 || Array.isArray(fragmentResult.data) && fragmentResult.data.length > 0 && fragmentResult.data.every(function(data) {
          return data === void 0;
        }))) {
          true ? warning(false, "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.", fragmentNode.name, componentDisplayName, componentDisplayName) : void 0;
        }
      }
      return {
        data: fragmentResult.data,
        disableStoreUpdates,
        enableStoreUpdates
      };
    }
    module.exports = useFragmentNode;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useStaticFragmentNodeWarning.js
var require_useStaticFragmentNodeWarning = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useStaticFragmentNodeWarning.js"(exports, module) {
    init_define_global();
    "use strict";
    var warning = require_warning();
    var _require = require_react();
    var useRef = _require.useRef;
    function useStaticFragmentNodeWarning(fragmentNode, warningContext) {
      if (true) {
        var initialPropRef = useRef(fragmentNode.name);
        true ? warning(initialPropRef.current === fragmentNode.name, "Relay: The %s has to remain the same over the lifetime of a component. Changing it is not supported and will result in unexpected behavior.", warningContext) : void 0;
      }
    }
    module.exports = useStaticFragmentNodeWarning;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useFragment.js
var require_useFragment = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useFragment.js"(exports, module) {
    init_define_global();
    "use strict";
    var useFragmentNode = require_useFragmentNode();
    var useStaticFragmentNodeWarning = require_useStaticFragmentNodeWarning();
    var _require = require_loadQuery();
    var useTrackLoadQueryInRender = _require.useTrackLoadQueryInRender;
    var _require2 = require_react();
    var useDebugValue = _require2.useDebugValue;
    var _require3 = require_relay_runtime();
    var getFragment = _require3.getFragment;
    function useFragment(fragmentInput, fragmentRef) {
      useTrackLoadQueryInRender();
      var fragmentNode = getFragment(fragmentInput);
      useStaticFragmentNodeWarning(fragmentNode, "first argument of useFragment()");
      var _useFragmentNode = useFragmentNode(fragmentNode, fragmentRef, "useFragment()"), data = _useFragmentNode.data;
      if (true) {
        useDebugValue({
          fragment: fragmentNode.name,
          data
        });
      }
      return data;
    }
    module.exports = useFragment;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useFetchTrackingRef.js
var require_useFetchTrackingRef = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useFetchTrackingRef.js"(exports, module) {
    init_define_global();
    "use strict";
    var _require = require_react();
    var useCallback = _require.useCallback;
    var useEffect = _require.useEffect;
    var useRef = _require.useRef;
    function useFetchTrackingRef() {
      var subscriptionRef = useRef(null);
      var isFetchingRef = useRef(false);
      var disposeFetch = useCallback(function() {
        if (subscriptionRef.current != null) {
          subscriptionRef.current.unsubscribe();
          subscriptionRef.current = null;
        }
        isFetchingRef.current = false;
      }, []);
      var startFetch = useCallback(function(subscription) {
        subscriptionRef.current = subscription;
        isFetchingRef.current = true;
      }, []);
      var completeFetch = useCallback(function() {
        subscriptionRef.current = null;
        isFetchingRef.current = false;
      }, []);
      useEffect(function() {
        return disposeFetch;
      }, [disposeFetch]);
      return {
        isFetchingRef,
        startFetch,
        disposeFetch,
        completeFetch
      };
    }
    module.exports = useFetchTrackingRef;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/QueryResource.js
var require_QueryResource = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/QueryResource.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var LRUCache = require_LRUCache();
    var invariant = require_browser();
    var _require = require_relay_runtime();
    var isPromise = _require.isPromise;
    var CACHE_CAPACITY = 1e3;
    var DEFAULT_FETCH_POLICY = "store-or-network";
    var DATA_RETENTION_TIMEOUT = 5 * 60 * 1e3;
    var WEAKMAP_SUPPORTED = typeof WeakMap === "function";
    function getQueryCacheIdentifier(environment, operation, maybeFetchPolicy, maybeRenderPolicy, cacheBreaker) {
      var fetchPolicy = maybeFetchPolicy !== null && maybeFetchPolicy !== void 0 ? maybeFetchPolicy : DEFAULT_FETCH_POLICY;
      var renderPolicy = maybeRenderPolicy !== null && maybeRenderPolicy !== void 0 ? maybeRenderPolicy : environment.UNSTABLE_getDefaultRenderPolicy();
      var cacheIdentifier = "".concat(fetchPolicy, "-").concat(renderPolicy, "-").concat(operation.request.identifier);
      if (cacheBreaker != null) {
        return "".concat(cacheIdentifier, "-").concat(cacheBreaker);
      }
      return cacheIdentifier;
    }
    function getQueryResult(operation, cacheIdentifier) {
      var rootFragmentRef = {
        __id: operation.fragment.dataID,
        __fragments: (0, _defineProperty2["default"])({}, operation.fragment.node.name, operation.request.variables),
        __fragmentOwner: operation.request
      };
      return {
        cacheIdentifier,
        fragmentNode: operation.request.node.fragment,
        fragmentRef: rootFragmentRef,
        operation
      };
    }
    var nextID = 2e5;
    function createCacheEntry(cacheIdentifier, operation, value, networkSubscription, onDispose) {
      var currentValue = value;
      var retainCount = 0;
      var retainDisposable = null;
      var releaseTemporaryRetain = null;
      var currentNetworkSubscription = networkSubscription;
      var retain = function retain2(environment) {
        retainCount++;
        if (retainCount === 1) {
          retainDisposable = environment.retain(operation);
        }
        return {
          dispose: function dispose() {
            retainCount = Math.max(0, retainCount - 1);
            if (retainCount === 0) {
              !(retainDisposable != null) ? true ? invariant(false, "Relay: Expected disposable to release query to be defined.If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
              retainDisposable.dispose();
              retainDisposable = null;
            }
            onDispose(cacheEntry);
          }
        };
      };
      var cacheEntry = {
        cacheIdentifier,
        id: nextID++,
        getValue: function getValue() {
          return currentValue;
        },
        setValue: function setValue(val) {
          currentValue = val;
        },
        getRetainCount: function getRetainCount() {
          return retainCount;
        },
        getNetworkSubscription: function getNetworkSubscription() {
          return currentNetworkSubscription;
        },
        setNetworkSubscription: function setNetworkSubscription(subscription) {
          if (currentNetworkSubscription != null) {
            currentNetworkSubscription.unsubscribe();
          }
          currentNetworkSubscription = subscription;
        },
        temporaryRetain: function temporaryRetain(environment) {
          if (environment.isServer()) {
            return {
              dispose: function dispose() {
              }
            };
          }
          var disposable = retain(environment);
          var releaseQueryTimeout = null;
          var localReleaseTemporaryRetain = function localReleaseTemporaryRetain2() {
            clearTimeout(releaseQueryTimeout);
            releaseQueryTimeout = null;
            releaseTemporaryRetain = null;
            disposable.dispose();
            if (retainCount <= 0 && currentNetworkSubscription != null) {
              currentNetworkSubscription.unsubscribe();
            }
          };
          releaseQueryTimeout = setTimeout(localReleaseTemporaryRetain, DATA_RETENTION_TIMEOUT);
          if (releaseTemporaryRetain != null) {
            releaseTemporaryRetain();
          }
          releaseTemporaryRetain = localReleaseTemporaryRetain;
          return {
            dispose: function dispose() {
              releaseTemporaryRetain && releaseTemporaryRetain();
            }
          };
        },
        permanentRetain: function permanentRetain(environment) {
          var disposable = retain(environment);
          if (releaseTemporaryRetain != null) {
            releaseTemporaryRetain();
            releaseTemporaryRetain = null;
          }
          return {
            dispose: function dispose() {
              disposable.dispose();
              if (retainCount <= 0 && currentNetworkSubscription != null) {
                currentNetworkSubscription.unsubscribe();
              }
            }
          };
        }
      };
      return cacheEntry;
    }
    var QueryResourceImpl = function() {
      function QueryResourceImpl2(environment) {
        var _this = this;
        (0, _defineProperty2["default"])(this, "_clearCacheEntry", function(cacheEntry) {
          if (cacheEntry.getRetainCount() <= 0) {
            _this._cache["delete"](cacheEntry.cacheIdentifier);
          }
        });
        this._environment = environment;
        this._cache = LRUCache.create(CACHE_CAPACITY);
      }
      var _proto = QueryResourceImpl2.prototype;
      _proto.prepare = function prepare(operation, fetchObservable, maybeFetchPolicy, maybeRenderPolicy, observer, cacheBreaker, profilerContext) {
        var cacheIdentifier = getQueryCacheIdentifier(this._environment, operation, maybeFetchPolicy, maybeRenderPolicy, cacheBreaker);
        return this.prepareWithIdentifier(cacheIdentifier, operation, fetchObservable, maybeFetchPolicy, maybeRenderPolicy, observer, profilerContext);
      };
      _proto.prepareWithIdentifier = function prepareWithIdentifier(cacheIdentifier, operation, fetchObservable, maybeFetchPolicy, maybeRenderPolicy, observer, profilerContext) {
        var environment = this._environment;
        var fetchPolicy = maybeFetchPolicy !== null && maybeFetchPolicy !== void 0 ? maybeFetchPolicy : DEFAULT_FETCH_POLICY;
        var renderPolicy = maybeRenderPolicy !== null && maybeRenderPolicy !== void 0 ? maybeRenderPolicy : environment.UNSTABLE_getDefaultRenderPolicy();
        var cacheEntry = this._cache.get(cacheIdentifier);
        var temporaryRetainDisposable = null;
        if (cacheEntry == null) {
          cacheEntry = this._fetchAndSaveQuery(cacheIdentifier, operation, fetchObservable, fetchPolicy, renderPolicy, profilerContext, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, observer), {}, {
            unsubscribe: function unsubscribe(subscription) {
              if (temporaryRetainDisposable != null) {
                temporaryRetainDisposable.dispose();
              }
              var observerUnsubscribe = observer === null || observer === void 0 ? void 0 : observer.unsubscribe;
              observerUnsubscribe && observerUnsubscribe(subscription);
            }
          }));
        }
        temporaryRetainDisposable = cacheEntry.temporaryRetain(environment);
        var cachedValue = cacheEntry.getValue();
        if (isPromise(cachedValue) || cachedValue instanceof Error) {
          throw cachedValue;
        }
        return cachedValue;
      };
      _proto.retain = function retain(queryResult, profilerContext) {
        var environment = this._environment;
        var cacheIdentifier = queryResult.cacheIdentifier, operation = queryResult.operation;
        var cacheEntry = this._getOrCreateCacheEntry(cacheIdentifier, operation, queryResult, null);
        var disposable = cacheEntry.permanentRetain(environment);
        environment.__log({
          name: "queryresource.retain",
          profilerContext,
          resourceID: cacheEntry.id
        });
        return {
          dispose: function dispose() {
            disposable.dispose();
          }
        };
      };
      _proto.TESTS_ONLY__getCacheEntry = function TESTS_ONLY__getCacheEntry(operation, maybeFetchPolicy, maybeRenderPolicy, cacheBreaker) {
        var environment = this._environment;
        var cacheIdentifier = getQueryCacheIdentifier(environment, operation, maybeFetchPolicy, maybeRenderPolicy, cacheBreaker);
        return this._cache.get(cacheIdentifier);
      };
      _proto._getOrCreateCacheEntry = function _getOrCreateCacheEntry(cacheIdentifier, operation, value, networkSubscription) {
        var cacheEntry = this._cache.get(cacheIdentifier);
        if (cacheEntry == null) {
          cacheEntry = createCacheEntry(cacheIdentifier, operation, value, networkSubscription, this._clearCacheEntry);
          this._cache.set(cacheIdentifier, cacheEntry);
        }
        return cacheEntry;
      };
      _proto._fetchAndSaveQuery = function _fetchAndSaveQuery(cacheIdentifier, operation, fetchObservable, fetchPolicy, renderPolicy, profilerContext, observer) {
        var _this2 = this;
        var environment = this._environment;
        var queryAvailability = environment.check(operation);
        var queryStatus = queryAvailability.status;
        var hasFullQuery = queryStatus === "available";
        var canPartialRender = hasFullQuery || renderPolicy === "partial" && queryStatus !== "stale";
        var shouldFetch;
        var shouldAllowRender;
        var resolveNetworkPromise = function resolveNetworkPromise2() {
        };
        switch (fetchPolicy) {
          case "store-only": {
            shouldFetch = false;
            shouldAllowRender = true;
            break;
          }
          case "store-or-network": {
            shouldFetch = !hasFullQuery;
            shouldAllowRender = canPartialRender;
            break;
          }
          case "store-and-network": {
            shouldFetch = true;
            shouldAllowRender = canPartialRender;
            break;
          }
          case "network-only":
          default: {
            shouldFetch = true;
            shouldAllowRender = false;
            break;
          }
        }
        if (shouldAllowRender) {
          var queryResult = getQueryResult(operation, cacheIdentifier);
          var _cacheEntry = createCacheEntry(cacheIdentifier, operation, queryResult, null, this._clearCacheEntry);
          this._cache.set(cacheIdentifier, _cacheEntry);
        }
        if (shouldFetch) {
          var _queryResult = getQueryResult(operation, cacheIdentifier);
          var networkSubscription;
          fetchObservable.subscribe({
            start: function start(subscription) {
              networkSubscription = subscription;
              var cacheEntry2 = _this2._cache.get(cacheIdentifier);
              if (cacheEntry2) {
                cacheEntry2.setNetworkSubscription(networkSubscription);
              }
              var observerStart = observer === null || observer === void 0 ? void 0 : observer.start;
              observerStart && observerStart(subscription);
            },
            next: function next() {
              var snapshot = environment.lookup(operation.fragment);
              var cacheEntry2 = _this2._getOrCreateCacheEntry(cacheIdentifier, operation, _queryResult, networkSubscription);
              cacheEntry2.setValue(_queryResult);
              resolveNetworkPromise();
              var observerNext = observer === null || observer === void 0 ? void 0 : observer.next;
              observerNext && observerNext(snapshot);
            },
            error: function error(_error) {
              var cacheEntry2 = _this2._getOrCreateCacheEntry(cacheIdentifier, operation, _error, networkSubscription);
              cacheEntry2.setValue(_error);
              resolveNetworkPromise();
              networkSubscription = null;
              cacheEntry2.setNetworkSubscription(null);
              var observerError = observer === null || observer === void 0 ? void 0 : observer.error;
              observerError && observerError(_error);
            },
            complete: function complete() {
              resolveNetworkPromise();
              networkSubscription = null;
              var cacheEntry2 = _this2._cache.get(cacheIdentifier);
              if (cacheEntry2) {
                cacheEntry2.setNetworkSubscription(null);
              }
              var observerComplete2 = observer === null || observer === void 0 ? void 0 : observer.complete;
              observerComplete2 && observerComplete2();
            },
            unsubscribe: observer === null || observer === void 0 ? void 0 : observer.unsubscribe
          });
          var _cacheEntry2 = this._cache.get(cacheIdentifier);
          if (!_cacheEntry2) {
            var networkPromise = new Promise(function(resolve) {
              resolveNetworkPromise = resolve;
            });
            networkPromise.displayName = "Relay(" + operation.fragment.node.name + ")";
            _cacheEntry2 = createCacheEntry(cacheIdentifier, operation, networkPromise, networkSubscription, this._clearCacheEntry);
            this._cache.set(cacheIdentifier, _cacheEntry2);
          }
        } else {
          var observerComplete = observer === null || observer === void 0 ? void 0 : observer.complete;
          observerComplete && observerComplete();
        }
        var cacheEntry = this._cache.get(cacheIdentifier);
        !(cacheEntry != null) ? true ? invariant(false, "Relay: Expected to have cached a result when attempting to fetch query.If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
        environment.__log({
          name: "queryresource.fetch",
          resourceID: cacheEntry.id,
          operation,
          profilerContext,
          fetchPolicy,
          renderPolicy,
          queryAvailability,
          shouldFetch
        });
        return cacheEntry;
      };
      return QueryResourceImpl2;
    }();
    function createQueryResource(environment) {
      return new QueryResourceImpl(environment);
    }
    var dataResources = WEAKMAP_SUPPORTED ? new WeakMap() : new Map();
    function getQueryResourceForEnvironment(environment) {
      var cached = dataResources.get(environment);
      if (cached) {
        return cached;
      }
      var newDataResource = createQueryResource(environment);
      dataResources.set(environment, newDataResource);
      return newDataResource;
    }
    module.exports = {
      createQueryResource,
      getQueryResourceForEnvironment,
      getQueryCacheIdentifier
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useLazyLoadQueryNode.js
var require_useLazyLoadQueryNode = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useLazyLoadQueryNode.js"(exports, module) {
    init_define_global();
    "use strict";
    var ProfilerContext = require_ProfilerContext();
    var React = require_react();
    var useFetchTrackingRef = require_useFetchTrackingRef();
    var useFragmentNode = require_useFragmentNode();
    var useRelayEnvironment = require_useRelayEnvironment();
    var _require = require_QueryResource();
    var getQueryResourceForEnvironment = _require.getQueryResourceForEnvironment;
    var getQueryCacheIdentifier = _require.getQueryCacheIdentifier;
    var useContext = React.useContext;
    var useEffect = React.useEffect;
    var useState = React.useState;
    var useRef = React.useRef;
    function useLazyLoadQueryNode(_ref) {
      var query = _ref.query, componentDisplayName = _ref.componentDisplayName, fetchObservable = _ref.fetchObservable, fetchPolicy = _ref.fetchPolicy, fetchKey = _ref.fetchKey, renderPolicy = _ref.renderPolicy;
      var environment = useRelayEnvironment();
      var profilerContext = useContext(ProfilerContext);
      var QueryResource = getQueryResourceForEnvironment(environment);
      var _useState = useState(0), forceUpdateKey = _useState[0], forceUpdate = _useState[1];
      var _useFetchTrackingRef = useFetchTrackingRef(), startFetch = _useFetchTrackingRef.startFetch, completeFetch = _useFetchTrackingRef.completeFetch;
      var cacheBreaker = "".concat(forceUpdateKey, "-").concat(fetchKey !== null && fetchKey !== void 0 ? fetchKey : "");
      var cacheIdentifier = getQueryCacheIdentifier(environment, query, fetchPolicy, renderPolicy, cacheBreaker);
      var preparedQueryResult = profilerContext.wrapPrepareQueryResource(function() {
        return QueryResource.prepareWithIdentifier(cacheIdentifier, query, fetchObservable, fetchPolicy, renderPolicy, {
          start: startFetch,
          complete: completeFetch,
          error: completeFetch
        }, profilerContext);
      });
      var maybeHiddenOrFastRefresh = useRef(false);
      useEffect(function() {
        return function() {
          maybeHiddenOrFastRefresh.current = true;
        };
      }, []);
      useEffect(function() {
        if (maybeHiddenOrFastRefresh.current === true) {
          maybeHiddenOrFastRefresh.current = false;
          forceUpdate(function(n) {
            return n + 1;
          });
          return;
        }
        var disposable = QueryResource.retain(preparedQueryResult, profilerContext);
        return function() {
          disposable.dispose();
        };
      }, [environment, cacheIdentifier]);
      var fragmentNode = preparedQueryResult.fragmentNode, fragmentRef = preparedQueryResult.fragmentRef;
      var _useFragmentNode = useFragmentNode(fragmentNode, fragmentRef, componentDisplayName), data = _useFragmentNode.data;
      return data;
    }
    module.exports = useLazyLoadQueryNode;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useMemoVariables.js
var require_useMemoVariables = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useMemoVariables.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var areEqual = require_areEqual();
    var useMemo = React.useMemo;
    var useRef = React.useRef;
    var useState = React.useState;
    function useMemoVariables(variables) {
      var _variablesChangedGene2;
      var variablesChangedGenerationRef = useRef(0);
      var _useState = useState(variables), mirroredVariables = _useState[0], setMirroredVariables = _useState[1];
      var variablesChanged = !areEqual(variables, mirroredVariables);
      if (variablesChanged) {
        var _variablesChangedGene;
        variablesChangedGenerationRef.current = ((_variablesChangedGene = variablesChangedGenerationRef.current) !== null && _variablesChangedGene !== void 0 ? _variablesChangedGene : 0) + 1;
        setMirroredVariables(variables);
      }
      var memoVariables = useMemo(function() {
        return variables;
      }, [variablesChangedGenerationRef.current]);
      return [memoVariables, (_variablesChangedGene2 = variablesChangedGenerationRef.current) !== null && _variablesChangedGene2 !== void 0 ? _variablesChangedGene2 : 0];
    }
    module.exports = useMemoVariables;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useMemoOperationDescriptor.js
var require_useMemoOperationDescriptor = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useMemoOperationDescriptor.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var useMemoVariables = require_useMemoVariables();
    var _require = require_relay_runtime();
    var createOperationDescriptor = _require.createOperationDescriptor;
    var getRequest = _require.getRequest;
    var useMemo = React.useMemo;
    function useMemoOperationDescriptor(gqlQuery, variables, cacheConfig) {
      var _useMemoVariables = useMemoVariables(variables), memoVariables = _useMemoVariables[0];
      var _useMemoVariables2 = useMemoVariables(cacheConfig || {}), memoCacheConfig = _useMemoVariables2[0];
      return useMemo(function() {
        return createOperationDescriptor(getRequest(gqlQuery), memoVariables, memoCacheConfig);
      }, [gqlQuery, memoVariables, memoCacheConfig]);
    }
    module.exports = useMemoOperationDescriptor;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useLazyLoadQuery.js
var require_useLazyLoadQuery = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useLazyLoadQuery.js"(exports, module) {
    init_define_global();
    "use strict";
    var useLazyLoadQueryNode = require_useLazyLoadQueryNode();
    var useMemoOperationDescriptor = require_useMemoOperationDescriptor();
    var useRelayEnvironment = require_useRelayEnvironment();
    var _require = require_loadQuery();
    var useTrackLoadQueryInRender = _require.useTrackLoadQueryInRender;
    var _require2 = require_relay_runtime();
    var fetchQuery = _require2.__internal.fetchQuery;
    function useLazyLoadQuery(gqlQuery, variables, options) {
      useTrackLoadQueryInRender();
      var environment = useRelayEnvironment();
      var query = useMemoOperationDescriptor(gqlQuery, variables, options && options.networkCacheConfig ? options.networkCacheConfig : {
        force: true
      });
      var data = useLazyLoadQueryNode({
        componentDisplayName: "useLazyLoadQuery()",
        fetchKey: options === null || options === void 0 ? void 0 : options.fetchKey,
        fetchObservable: fetchQuery(environment, query),
        fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
        query,
        renderPolicy: options === null || options === void 0 ? void 0 : options.UNSTABLE_renderPolicy
      });
      return data;
    }
    module.exports = useLazyLoadQuery;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useMutation.js
var require_useMutation = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useMutation.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var React = require_react();
    var useRelayEnvironment = require_useRelayEnvironment();
    var _require = require_relay_runtime();
    var defaultCommitMutation = _require.commitMutation;
    var useState = React.useState;
    var useEffect = React.useEffect;
    var useRef = React.useRef;
    var useCallback = React.useCallback;
    var useIsMountedRef = require_useIsMountedRef();
    function useMutation(mutation) {
      var commitMutationFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultCommitMutation;
      var environment = useRelayEnvironment();
      var isMountedRef = useIsMountedRef();
      var environmentRef = useRef(environment);
      var mutationRef = useRef(mutation);
      var inFlightMutationsRef = useRef(new Set());
      var _useState = useState(false), isMutationInFlight = _useState[0], setMutationInFlight = _useState[1];
      var cleanup = useCallback(function(disposable) {
        if (environmentRef.current === environment && mutationRef.current === mutation) {
          inFlightMutationsRef.current["delete"](disposable);
          if (isMountedRef.current) {
            setMutationInFlight(inFlightMutationsRef.current.size > 0);
          }
        }
      }, [environment, isMountedRef, mutation]);
      useEffect(function() {
        if (environmentRef.current !== environment || mutationRef.current !== mutation) {
          inFlightMutationsRef.current = new Set();
          if (isMountedRef.current) {
            setMutationInFlight(false);
          }
          environmentRef.current = environment;
          mutationRef.current = mutation;
        }
      }, [environment, isMountedRef, mutation]);
      var commit = useCallback(function(config) {
        var disposable = commitMutationFn(environment, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, config), {}, {
          mutation,
          onCompleted: function onCompleted(response, errors) {
            cleanup(disposable);
            config.onCompleted && config.onCompleted(response, errors);
          },
          onError: function onError(error) {
            cleanup(disposable);
            config.onError && config.onError(error);
          },
          onUnsubscribe: function onUnsubscribe() {
            cleanup(disposable);
            config.onUnsubscribe && config.onUnsubscribe();
          }
        }));
        inFlightMutationsRef.current.add(disposable);
        if (isMountedRef.current) {
          setMutationInFlight(true);
        }
        return disposable;
      }, [cleanup, commitMutationFn, environment, isMountedRef, mutation]);
      return [commit, isMutationInFlight];
    }
    module.exports = useMutation;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getRefetchMetadata.js
var require_getRefetchMetadata = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getRefetchMetadata.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    function getRefetchMetadata(fragmentNode, componentDisplayName) {
      var _fragmentNode$metadat, _fragmentNode$metadat2;
      !(((_fragmentNode$metadat = fragmentNode.metadata) === null || _fragmentNode$metadat === void 0 ? void 0 : _fragmentNode$metadat.plural) !== true) ? true ? invariant(false, "Relay: getRefetchMetadata(): Expected fragment `%s` not to be plural when using `%s`. Remove `@relay(plural: true)` from fragment `%s` in order to use it with `%s`.", fragmentNode.name, componentDisplayName, fragmentNode.name, componentDisplayName) : invariant(false) : void 0;
      var refetchMetadata = (_fragmentNode$metadat2 = fragmentNode.metadata) === null || _fragmentNode$metadat2 === void 0 ? void 0 : _fragmentNode$metadat2.refetch;
      !(refetchMetadata != null) ? true ? invariant(false, "Relay: getRefetchMetadata(): Expected fragment `%s` to be refetchable when using `%s`. Did you forget to add a @refetchable directive to the fragment?", componentDisplayName, fragmentNode.name) : invariant(false) : void 0;
      var refetchableRequest = refetchMetadata.operation["default"] ? refetchMetadata.operation["default"] : refetchMetadata.operation;
      var fragmentRefPathInResponse = refetchMetadata.fragmentPathInResult;
      !(typeof refetchableRequest !== "string") ? true ? invariant(false, "Relay: getRefetchMetadata(): Expected refetch query to be an operation and not a string when using `%s`. If you're seeing this, this is likely a bug in Relay.", componentDisplayName) : invariant(false) : void 0;
      var identifierField = refetchMetadata.identifierField;
      !(identifierField == null || typeof identifierField === "string") ? true ? invariant(false, "Relay: getRefetchMetadata(): Expected `identifierField` to be a string.") : invariant(false) : void 0;
      return {
        fragmentRefPathInResponse,
        identifierField,
        refetchableRequest,
        refetchMetadata
      };
    }
    module.exports = getRefetchMetadata;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getPaginationMetadata.js
var require_getPaginationMetadata = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getPaginationMetadata.js"(exports, module) {
    init_define_global();
    "use strict";
    var getRefetchMetadata = require_getRefetchMetadata();
    var invariant = require_browser();
    function getPaginationMetadata(fragmentNode, componentDisplayName) {
      var _fragmentNode$metadat, _fragmentNode$metadat2;
      var _getRefetchMetadata = getRefetchMetadata(fragmentNode, componentDisplayName), paginationRequest = _getRefetchMetadata.refetchableRequest, refetchMetadata = _getRefetchMetadata.refetchMetadata;
      var paginationMetadata = refetchMetadata.connection;
      !(paginationMetadata != null) ? true ? invariant(false, "Relay: getPaginationMetadata(): Expected fragment `%s` to include a connection when using `%s`. Did you forget to add a @connection directive to the connection field in the fragment?", componentDisplayName, fragmentNode.name) : invariant(false) : void 0;
      var connectionPathInFragmentData = paginationMetadata.path;
      var connectionMetadata = ((_fragmentNode$metadat = (_fragmentNode$metadat2 = fragmentNode.metadata) === null || _fragmentNode$metadat2 === void 0 ? void 0 : _fragmentNode$metadat2.connection) !== null && _fragmentNode$metadat !== void 0 ? _fragmentNode$metadat : [])[0];
      !(connectionMetadata != null) ? true ? invariant(false, "Relay: getPaginationMetadata(): Expected fragment `%s` to include a connection when using `%s`. Did you forget to add a @connection directive to the connection field in the fragment?", componentDisplayName, fragmentNode.name) : invariant(false) : void 0;
      var identifierField = refetchMetadata.identifierField;
      !(identifierField == null || typeof identifierField === "string") ? true ? invariant(false, "Relay: getRefetchMetadata(): Expected `identifierField` to be a string.") : invariant(false) : void 0;
      return {
        connectionPathInFragmentData,
        identifierField,
        paginationRequest,
        paginationMetadata,
        stream: connectionMetadata.stream === true
      };
    }
    module.exports = getPaginationMetadata;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getPaginationVariables.js
var require_getPaginationVariables = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getPaginationVariables.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _objectSpread4 = _interopRequireDefault(require_objectSpread2());
    var invariant = require_browser();
    var warning = require_warning();
    function getPaginationVariables(direction, count, cursor, baseVariables, extraVariables, paginationMetadata) {
      var _objectSpread3;
      var backwardMetadata = paginationMetadata.backward, forwardMetadata = paginationMetadata.forward;
      if (direction === "backward") {
        var _objectSpread2;
        !(backwardMetadata != null && backwardMetadata.count != null && backwardMetadata.cursor != null) ? true ? invariant(false, "Relay: Expected backward pagination metadata to be available. If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
        true ? warning(!extraVariables.hasOwnProperty(backwardMetadata.cursor), "Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.", backwardMetadata.cursor) : void 0;
        true ? warning(!extraVariables.hasOwnProperty(backwardMetadata.count), "Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.", backwardMetadata.count) : void 0;
        var _paginationVariables = (0, _objectSpread4["default"])((0, _objectSpread4["default"])((0, _objectSpread4["default"])({}, baseVariables), extraVariables), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, backwardMetadata.cursor, cursor), (0, _defineProperty2["default"])(_objectSpread2, backwardMetadata.count, count), _objectSpread2));
        if (forwardMetadata && forwardMetadata.cursor) {
          _paginationVariables[forwardMetadata.cursor] = null;
        }
        if (forwardMetadata && forwardMetadata.count) {
          _paginationVariables[forwardMetadata.count] = null;
        }
        return _paginationVariables;
      }
      !(forwardMetadata != null && forwardMetadata.count != null && forwardMetadata.cursor != null) ? true ? invariant(false, "Relay: Expected forward pagination metadata to be available. If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
      true ? warning(!extraVariables.hasOwnProperty(forwardMetadata.cursor), "Relay: `UNSTABLE_extraVariables` provided by caller should not contain cursor variable `%s`. This variable is automatically determined by Relay.", forwardMetadata.cursor) : void 0;
      true ? warning(!extraVariables.hasOwnProperty(forwardMetadata.count), "Relay: `UNSTABLE_extraVariables` provided by caller should not contain count variable `%s`. This variable is automatically determined by Relay.", forwardMetadata.count) : void 0;
      var paginationVariables = (0, _objectSpread4["default"])((0, _objectSpread4["default"])((0, _objectSpread4["default"])({}, baseVariables), extraVariables), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, forwardMetadata.cursor, cursor), (0, _defineProperty2["default"])(_objectSpread3, forwardMetadata.count, count), _objectSpread3));
      if (backwardMetadata && backwardMetadata.cursor) {
        paginationVariables[backwardMetadata.cursor] = null;
      }
      if (backwardMetadata && backwardMetadata.count) {
        paginationVariables[backwardMetadata.count] = null;
      }
      return paginationVariables;
    }
    module.exports = getPaginationVariables;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getValueAtPath.js
var require_getValueAtPath = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/getValueAtPath.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var invariant = require_browser();
    function getValueAtPath(data, path) {
      var result = data;
      var _iterator = (0, _createForOfIteratorHelper2["default"])(path), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var key = _step.value;
          if (result == null) {
            return null;
          }
          if (typeof key === "number") {
            !Array.isArray(result) ? true ? invariant(false, "Relay: Expected an array when extracting value at path. If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
            result = result[key];
          } else {
            !(typeof result === "object" && !Array.isArray(result)) ? true ? invariant(false, "Relay: Expected an object when extracting value at path. If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
            result = result[key];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
    module.exports = getValueAtPath;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useIsOperationNodeActive.js
var require_useIsOperationNodeActive = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useIsOperationNodeActive.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var invariant = require_browser();
    var useRelayEnvironment = require_useRelayEnvironment();
    var _require = require_relay_runtime();
    var getObservableForActiveRequest = _require.__internal.getObservableForActiveRequest;
    var getSelector = _require.getSelector;
    var useEffect = React.useEffect;
    var useState = React.useState;
    var useMemo = React.useMemo;
    function useIsOperationNodeActive(fragmentNode, fragmentRef) {
      var environment = useRelayEnvironment();
      var observable = useMemo(function() {
        var selector = getSelector(fragmentNode, fragmentRef);
        if (selector == null) {
          return null;
        }
        !(selector.kind === "SingularReaderSelector") ? true ? invariant(false, "useIsOperationNodeActive: Plural fragments are not supported.") : invariant(false) : void 0;
        return getObservableForActiveRequest(environment, selector.owner);
      }, [environment, fragmentNode, fragmentRef]);
      var _useState = useState(observable != null), isActive = _useState[0], setIsActive = _useState[1];
      useEffect(function() {
        var subscription;
        setIsActive(observable != null);
        if (observable != null) {
          var onCompleteOrError = function onCompleteOrError2() {
            setIsActive(false);
          };
          subscription = observable.subscribe({
            complete: onCompleteOrError,
            error: onCompleteOrError
          });
        }
        return function() {
          if (subscription) {
            subscription.unsubscribe();
          }
        };
      }, [observable]);
      return isActive;
    }
    module.exports = useIsOperationNodeActive;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useLoadMoreFunction.js
var require_useLoadMoreFunction = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useLoadMoreFunction.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var getPaginationVariables = require_getPaginationVariables();
    var getValueAtPath = require_getValueAtPath();
    var invariant = require_browser();
    var useFetchTrackingRef = require_useFetchTrackingRef();
    var useIsMountedRef = require_useIsMountedRef();
    var useIsOperationNodeActive = require_useIsOperationNodeActive();
    var useRelayEnvironment = require_useRelayEnvironment();
    var warning = require_warning();
    var _require = require_react();
    var useCallback = _require.useCallback;
    var useEffect = _require.useEffect;
    var useState = _require.useState;
    var _require2 = require_relay_runtime();
    var ConnectionInterface = _require2.ConnectionInterface;
    var fetchQuery = _require2.__internal.fetchQuery;
    var createOperationDescriptor = _require2.createOperationDescriptor;
    var getSelector = _require2.getSelector;
    function useLoadMoreFunction(args) {
      var direction = args.direction, fragmentNode = args.fragmentNode, fragmentRef = args.fragmentRef, fragmentIdentifier = args.fragmentIdentifier, fragmentData = args.fragmentData, connectionPathInFragmentData = args.connectionPathInFragmentData, paginationRequest = args.paginationRequest, paginationMetadata = args.paginationMetadata, componentDisplayName = args.componentDisplayName, observer = args.observer, onReset = args.onReset, identifierField = args.identifierField;
      var environment = useRelayEnvironment();
      var _useFetchTrackingRef = useFetchTrackingRef(), isFetchingRef = _useFetchTrackingRef.isFetchingRef, startFetch = _useFetchTrackingRef.startFetch, disposeFetch = _useFetchTrackingRef.disposeFetch, completeFetch = _useFetchTrackingRef.completeFetch;
      var identifierValue = identifierField != null && fragmentData != null && typeof fragmentData === "object" ? fragmentData[identifierField] : null;
      var isMountedRef = useIsMountedRef();
      var _useState = useState(environment), mirroredEnvironment = _useState[0], setMirroredEnvironment = _useState[1];
      var _useState2 = useState(fragmentIdentifier), mirroredFragmentIdentifier = _useState2[0], setMirroredFragmentIdentifier = _useState2[1];
      var isParentQueryActive = useIsOperationNodeActive(fragmentNode, fragmentRef);
      var shouldReset = environment !== mirroredEnvironment || fragmentIdentifier !== mirroredFragmentIdentifier;
      if (shouldReset) {
        disposeFetch();
        onReset();
        setMirroredEnvironment(environment);
        setMirroredFragmentIdentifier(fragmentIdentifier);
      }
      var _getConnectionState = getConnectionState(direction, fragmentNode, fragmentData, connectionPathInFragmentData), cursor = _getConnectionState.cursor, hasMore = _getConnectionState.hasMore;
      useEffect(function() {
        return function() {
          disposeFetch();
        };
      }, [disposeFetch]);
      var loadMore = useCallback(function(count, options) {
        var onComplete = options === null || options === void 0 ? void 0 : options.onComplete;
        if (isMountedRef.current !== true) {
          true ? warning(false, "Relay: Unexpected fetch on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.", fragmentNode.name, componentDisplayName) : void 0;
          return {
            dispose: function dispose() {
            }
          };
        }
        var fragmentSelector = getSelector(fragmentNode, fragmentRef);
        if (isFetchingRef.current === true || fragmentData == null || isParentQueryActive) {
          if (fragmentSelector == null) {
            true ? warning(false, "Relay: Unexpected fetch while using a null fragment ref for fragment `%s` in `%s`. When fetching more items, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before paginating.", fragmentNode.name, componentDisplayName, componentDisplayName) : void 0;
          }
          if (onComplete) {
            onComplete(null);
          }
          return {
            dispose: function dispose() {
            }
          };
        }
        !(fragmentSelector != null && fragmentSelector.kind !== "PluralReaderSelector") ? true ? invariant(false, "Relay: Expected to be able to find a non-plural fragment owner for fragment `%s` when using `%s`. If you're seeing this, this is likely a bug in Relay.", fragmentNode.name, componentDisplayName) : invariant(false) : void 0;
        var parentVariables = fragmentSelector.owner.variables;
        var fragmentVariables = fragmentSelector.variables;
        var extraVariables = options === null || options === void 0 ? void 0 : options.UNSTABLE_extraVariables;
        var baseVariables = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, parentVariables), fragmentVariables);
        var paginationVariables = getPaginationVariables(direction, count, cursor, baseVariables, (0, _objectSpread2["default"])({}, extraVariables), paginationMetadata);
        if (identifierField != null) {
          if (typeof identifierValue !== "string") {
            true ? warning(false, "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.", identifierField, identifierValue) : void 0;
          }
          paginationVariables.id = identifierValue;
        }
        var paginationQuery = createOperationDescriptor(paginationRequest, paginationVariables, {
          force: true
        });
        fetchQuery(environment, paginationQuery).subscribe((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, observer), {}, {
          start: function start(subscription) {
            startFetch(subscription);
            observer.start && observer.start(subscription);
          },
          complete: function complete() {
            completeFetch();
            observer.complete && observer.complete();
            onComplete && onComplete(null);
          },
          error: function error(_error) {
            completeFetch();
            observer.error && observer.error(_error);
            onComplete && onComplete(_error);
          }
        }));
        return {
          dispose: disposeFetch
        };
      }, [environment, identifierValue, direction, cursor, startFetch, disposeFetch, completeFetch, isFetchingRef, isParentQueryActive, fragmentData, fragmentNode.name, fragmentRef, componentDisplayName]);
      return [loadMore, hasMore, disposeFetch];
    }
    function getConnectionState(direction, fragmentNode, fragmentData, connectionPathInFragmentData) {
      var _pageInfo$END_CURSOR, _pageInfo$START_CURSO;
      var _ConnectionInterface$ = ConnectionInterface.get(), EDGES = _ConnectionInterface$.EDGES, PAGE_INFO = _ConnectionInterface$.PAGE_INFO, HAS_NEXT_PAGE = _ConnectionInterface$.HAS_NEXT_PAGE, HAS_PREV_PAGE = _ConnectionInterface$.HAS_PREV_PAGE, END_CURSOR = _ConnectionInterface$.END_CURSOR, START_CURSOR = _ConnectionInterface$.START_CURSOR;
      var connection = getValueAtPath(fragmentData, connectionPathInFragmentData);
      if (connection == null) {
        return {
          cursor: null,
          hasMore: false
        };
      }
      !(typeof connection === "object") ? true ? invariant(false, "Relay: Expected connection in fragment `%s` to have been `null`, or a plain object with %s and %s properties. Instead got `%s`.", fragmentNode.name, EDGES, PAGE_INFO, connection) : invariant(false) : void 0;
      var edges = connection[EDGES];
      var pageInfo = connection[PAGE_INFO];
      if (edges == null || pageInfo == null) {
        return {
          cursor: null,
          hasMore: false
        };
      }
      !Array.isArray(edges) ? true ? invariant(false, "Relay: Expected connection in fragment `%s` to have a plural `%s` field. Instead got `%s`.", fragmentNode.name, EDGES, edges) : invariant(false) : void 0;
      !(typeof pageInfo === "object") ? true ? invariant(false, "Relay: Expected connection in fragment `%s` to have a `%s` field. Instead got `%s`.", fragmentNode.name, PAGE_INFO, pageInfo) : invariant(false) : void 0;
      var cursor = direction === "forward" ? (_pageInfo$END_CURSOR = pageInfo[END_CURSOR]) !== null && _pageInfo$END_CURSOR !== void 0 ? _pageInfo$END_CURSOR : null : (_pageInfo$START_CURSO = pageInfo[START_CURSOR]) !== null && _pageInfo$START_CURSO !== void 0 ? _pageInfo$START_CURSO : null;
      !(cursor === null || typeof cursor === "string") ? true ? invariant(false, "Relay: Expected page info for connection in fragment `%s` to have a valid `%s`. Instead got `%s`.", fragmentNode.name, START_CURSOR, cursor) : invariant(false) : void 0;
      var hasMore;
      if (direction === "forward") {
        hasMore = cursor != null && pageInfo[HAS_NEXT_PAGE] === true;
      } else {
        hasMore = cursor != null && pageInfo[HAS_PREV_PAGE] === true;
      }
      return {
        cursor,
        hasMore
      };
    }
    module.exports = useLoadMoreFunction;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useQueryLoader.js
var require_useQueryLoader = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useQueryLoader.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _createForOfIteratorHelper2 = _interopRequireDefault(require_createForOfIteratorHelper());
    var useIsMountedRef = require_useIsMountedRef();
    var useRelayEnvironment = require_useRelayEnvironment();
    var _require = require_loadQuery();
    var loadQuery = _require.loadQuery;
    var useTrackLoadQueryInRender = _require.useTrackLoadQueryInRender;
    var _require2 = require_react();
    var useCallback = _require2.useCallback;
    var useEffect = _require2.useEffect;
    var useRef = _require2.useRef;
    var useState = _require2.useState;
    var initialNullQueryReferenceState = {
      kind: "NullQueryReference"
    };
    function useQueryLoader(preloadableRequest, initialQueryReference) {
      var initialQueryReferenceInternal = initialQueryReference !== null && initialQueryReference !== void 0 ? initialQueryReference : initialNullQueryReferenceState;
      var environment = useRelayEnvironment();
      useTrackLoadQueryInRender();
      var isMountedRef = useIsMountedRef();
      var undisposedQueryReferencesRef = useRef(new Set([initialQueryReferenceInternal]));
      var _useState = useState(function() {
        return initialQueryReferenceInternal;
      }), queryReference = _useState[0], setQueryReference = _useState[1];
      var _useState2 = useState(function() {
        return initialQueryReferenceInternal;
      }), previousInitialQueryReference = _useState2[0], setPreviousInitialQueryReference = _useState2[1];
      if (initialQueryReferenceInternal !== previousInitialQueryReference) {
        undisposedQueryReferencesRef.current.add(initialQueryReferenceInternal);
        setPreviousInitialQueryReference(initialQueryReferenceInternal);
        setQueryReference(initialQueryReferenceInternal);
      }
      var disposeQuery = useCallback(function() {
        if (isMountedRef.current) {
          undisposedQueryReferencesRef.current.add(initialNullQueryReferenceState);
          setQueryReference(initialNullQueryReferenceState);
        }
      }, [isMountedRef]);
      var queryLoaderCallback = useCallback(function(variables, options) {
        var mergedOptions = options != null && options.hasOwnProperty("__environment") ? {
          fetchPolicy: options.fetchPolicy,
          networkCacheConfig: options.networkCacheConfig,
          __nameForWarning: options.__nameForWarning
        } : options;
        if (isMountedRef.current) {
          var _options$__environmen;
          var updatedQueryReference = loadQuery((_options$__environmen = options === null || options === void 0 ? void 0 : options.__environment) !== null && _options$__environmen !== void 0 ? _options$__environmen : environment, preloadableRequest, variables, mergedOptions);
          undisposedQueryReferencesRef.current.add(updatedQueryReference);
          setQueryReference(updatedQueryReference);
        }
      }, [environment, preloadableRequest, setQueryReference, isMountedRef]);
      var maybeHiddenOrFastRefresh = useRef(false);
      useEffect(function() {
        return function() {
          maybeHiddenOrFastRefresh.current = true;
        };
      }, []);
      useEffect(function() {
        if (maybeHiddenOrFastRefresh.current === true) {
          maybeHiddenOrFastRefresh.current = false;
          if (queryReference.kind !== "NullQueryReference") {
            queryLoaderCallback(queryReference.variables, {
              fetchPolicy: queryReference.fetchPolicy,
              networkCacheConfig: queryReference.networkCacheConfig
            });
          }
          return;
        }
        var undisposedQueryReferences = undisposedQueryReferencesRef.current;
        if (isMountedRef.current) {
          var _iterator = (0, _createForOfIteratorHelper2["default"])(undisposedQueryReferences), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var undisposedQueryReference = _step.value;
              if (undisposedQueryReference === queryReference) {
                break;
              }
              undisposedQueryReferences["delete"](undisposedQueryReference);
              if (undisposedQueryReference.kind !== "NullQueryReference") {
                undisposedQueryReference.dispose && undisposedQueryReference.dispose();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, [queryReference, isMountedRef, queryLoaderCallback]);
      useEffect(function() {
        return function disposeAllRemainingQueryReferences() {
          var _iterator2 = (0, _createForOfIteratorHelper2["default"])(undisposedQueryReferencesRef.current), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var unhandledStateChange = _step2.value;
              if (unhandledStateChange.kind !== "NullQueryReference") {
                unhandledStateChange.dispose && unhandledStateChange.dispose();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        };
      }, []);
      return [queryReference.kind === "NullQueryReference" ? null : queryReference, queryLoaderCallback, disposeQuery];
    }
    module.exports = useQueryLoader;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useRefetchableFragmentNode.js
var require_useRefetchableFragmentNode = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useRefetchableFragmentNode.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var ProfilerContext = require_ProfilerContext();
    var getRefetchMetadata = require_getRefetchMetadata();
    var getValueAtPath = require_getValueAtPath();
    var invariant = require_browser();
    var useFragmentNode = require_useFragmentNode();
    var useIsMountedRef = require_useIsMountedRef();
    var useQueryLoader = require_useQueryLoader();
    var useRelayEnvironment = require_useRelayEnvironment();
    var warning = require_warning();
    var _require = require_FragmentResource();
    var getFragmentResourceForEnvironment = _require.getFragmentResourceForEnvironment;
    var _require2 = require_QueryResource();
    var getQueryResourceForEnvironment = _require2.getQueryResourceForEnvironment;
    var _require3 = require_react();
    var useCallback = _require3.useCallback;
    var useContext = _require3.useContext;
    var useReducer = _require3.useReducer;
    var _require4 = require_relay_runtime();
    var fetchQuery = _require4.__internal.fetchQuery;
    var createOperationDescriptor = _require4.createOperationDescriptor;
    var getFragmentIdentifier = _require4.getFragmentIdentifier;
    var getSelector = _require4.getSelector;
    function reducer(state, action) {
      switch (action.type) {
        case "refetch": {
          var _action$refetchEnviro;
          return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), {}, {
            fetchPolicy: action.fetchPolicy,
            mirroredEnvironment: (_action$refetchEnviro = action.refetchEnvironment) !== null && _action$refetchEnviro !== void 0 ? _action$refetchEnviro : state.mirroredEnvironment,
            onComplete: action.onComplete,
            refetchEnvironment: action.refetchEnvironment,
            refetchQuery: action.refetchQuery,
            renderPolicy: action.renderPolicy
          });
        }
        case "reset": {
          return {
            fetchPolicy: void 0,
            mirroredEnvironment: action.environment,
            mirroredFragmentIdentifier: action.fragmentIdentifier,
            onComplete: void 0,
            refetchQuery: null,
            renderPolicy: void 0
          };
        }
        default: {
          action.type;
          throw new Error("useRefetchableFragmentNode: Unexpected action type");
        }
      }
    }
    function useRefetchableFragmentNode(fragmentNode, parentFragmentRef, componentDisplayName) {
      var parentEnvironment = useRelayEnvironment();
      var _getRefetchMetadata = getRefetchMetadata(fragmentNode, componentDisplayName), refetchableRequest = _getRefetchMetadata.refetchableRequest, fragmentRefPathInResponse = _getRefetchMetadata.fragmentRefPathInResponse, identifierField = _getRefetchMetadata.identifierField;
      var fragmentIdentifier = getFragmentIdentifier(fragmentNode, parentFragmentRef);
      var _useReducer = useReducer(reducer, {
        fetchPolicy: void 0,
        mirroredEnvironment: parentEnvironment,
        mirroredFragmentIdentifier: fragmentIdentifier,
        onComplete: void 0,
        refetchEnvironment: null,
        refetchQuery: null,
        renderPolicy: void 0
      }), refetchState = _useReducer[0], dispatch = _useReducer[1];
      var fetchPolicy = refetchState.fetchPolicy, mirroredEnvironment = refetchState.mirroredEnvironment, mirroredFragmentIdentifier = refetchState.mirroredFragmentIdentifier, onComplete = refetchState.onComplete, refetchEnvironment = refetchState.refetchEnvironment, refetchQuery = refetchState.refetchQuery, renderPolicy = refetchState.renderPolicy;
      var environment = refetchEnvironment !== null && refetchEnvironment !== void 0 ? refetchEnvironment : parentEnvironment;
      var QueryResource = getQueryResourceForEnvironment(environment);
      var FragmentResource = getFragmentResourceForEnvironment(environment);
      var profilerContext = useContext(ProfilerContext);
      var shouldReset = environment !== mirroredEnvironment || fragmentIdentifier !== mirroredFragmentIdentifier;
      var _useQueryLoader = useQueryLoader(refetchableRequest), queryRef = _useQueryLoader[0], loadQuery = _useQueryLoader[1], disposeQuery = _useQueryLoader[2];
      var fragmentRef = parentFragmentRef;
      if (shouldReset) {
        dispatch({
          type: "reset",
          environment,
          fragmentIdentifier
        });
        disposeQuery();
      } else if (refetchQuery != null && queryRef != null) {
        var debugPreviousIDAndTypename;
        if (true) {
          debugPreviousIDAndTypename = debugFunctions.getInitialIDAndType(refetchQuery.request.variables, fragmentRefPathInResponse, environment);
        }
        var handleQueryCompleted = function handleQueryCompleted2(maybeError) {
          onComplete && onComplete(maybeError !== null && maybeError !== void 0 ? maybeError : null);
        };
        var fetchObservable = queryRef.source != null ? queryRef.source : fetchQuery(environment, refetchQuery);
        var queryResult = profilerContext.wrapPrepareQueryResource(function() {
          return QueryResource.prepare(refetchQuery, fetchObservable, fetchPolicy, renderPolicy, {
            error: handleQueryCompleted,
            complete: function complete() {
              if (true) {
                debugFunctions.checkSameTypeAfterRefetch(debugPreviousIDAndTypename, environment, fragmentNode, componentDisplayName);
              }
              handleQueryCompleted();
            }
          }, queryRef.fetchKey, profilerContext);
        });
        var queryData = FragmentResource.read(queryResult.fragmentNode, queryResult.fragmentRef, componentDisplayName).data;
        !(queryData != null) ? true ? invariant(false, "Relay: Expected to be able to read refetch query response. If you're seeing this, this is likely a bug in Relay.") : invariant(false) : void 0;
        var refetchedFragmentRef = getValueAtPath(queryData, fragmentRefPathInResponse);
        fragmentRef = refetchedFragmentRef;
        if (true) {
          debugFunctions.checkSameIDAfterRefetch(debugPreviousIDAndTypename, fragmentRef, fragmentNode, componentDisplayName);
        }
      }
      var _useFragmentNode = useFragmentNode(fragmentNode, fragmentRef, componentDisplayName), fragmentData = _useFragmentNode.data, disableStoreUpdates = _useFragmentNode.disableStoreUpdates, enableStoreUpdates = _useFragmentNode.enableStoreUpdates;
      var refetch = useRefetchFunction(componentDisplayName, dispatch, disposeQuery, fragmentData, fragmentIdentifier, fragmentNode, fragmentRefPathInResponse, identifierField, loadQuery, parentFragmentRef, refetchableRequest);
      return {
        fragmentData,
        fragmentRef,
        refetch,
        disableStoreUpdates,
        enableStoreUpdates
      };
    }
    function useRefetchFunction(componentDisplayName, dispatch, disposeQuery, fragmentData, fragmentIdentifier, fragmentNode, fragmentRefPathInResponse, identifierField, loadQuery, parentFragmentRef, refetchableRequest) {
      var isMountedRef = useIsMountedRef();
      var identifierValue = identifierField != null && fragmentData != null && typeof fragmentData === "object" ? fragmentData[identifierField] : null;
      return useCallback(function(providedRefetchVariables, options) {
        if (isMountedRef.current !== true) {
          true ? warning(false, "Relay: Unexpected call to `refetch` on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.", fragmentNode.name, componentDisplayName) : void 0;
          return {
            dispose: function dispose() {
            }
          };
        }
        if (parentFragmentRef == null) {
          true ? warning(false, "Relay: Unexpected call to `refetch` while using a null fragment ref for fragment `%s` in `%s`. When calling `refetch`, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before calling `refetch`, or make sure you pass all required variables to `refetch`.", fragmentNode.name, componentDisplayName, componentDisplayName) : void 0;
        }
        var refetchEnvironment = options === null || options === void 0 ? void 0 : options.__environment;
        var fetchPolicy = options === null || options === void 0 ? void 0 : options.fetchPolicy;
        var renderPolicy = options === null || options === void 0 ? void 0 : options.UNSTABLE_renderPolicy;
        var onComplete = options === null || options === void 0 ? void 0 : options.onComplete;
        var fragmentSelector = getSelector(fragmentNode, parentFragmentRef);
        var parentVariables;
        var fragmentVariables;
        if (fragmentSelector == null) {
          parentVariables = {};
          fragmentVariables = {};
        } else if (fragmentSelector.kind === "PluralReaderSelector") {
          var _fragmentSelector$sel, _fragmentSelector$sel2, _fragmentSelector$sel3, _fragmentSelector$sel4;
          parentVariables = (_fragmentSelector$sel = (_fragmentSelector$sel2 = fragmentSelector.selectors[0]) === null || _fragmentSelector$sel2 === void 0 ? void 0 : _fragmentSelector$sel2.owner.variables) !== null && _fragmentSelector$sel !== void 0 ? _fragmentSelector$sel : {};
          fragmentVariables = (_fragmentSelector$sel3 = (_fragmentSelector$sel4 = fragmentSelector.selectors[0]) === null || _fragmentSelector$sel4 === void 0 ? void 0 : _fragmentSelector$sel4.variables) !== null && _fragmentSelector$sel3 !== void 0 ? _fragmentSelector$sel3 : {};
        } else {
          parentVariables = fragmentSelector.owner.variables;
          fragmentVariables = fragmentSelector.variables;
        }
        var refetchVariables = (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, parentVariables), fragmentVariables), providedRefetchVariables);
        if (identifierField != null && !providedRefetchVariables.hasOwnProperty("id")) {
          if (typeof identifierValue !== "string") {
            true ? warning(false, "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.", identifierField, identifierValue) : void 0;
          }
          refetchVariables.id = identifierValue;
        }
        var refetchQuery = createOperationDescriptor(refetchableRequest, refetchVariables, {
          force: true
        });
        loadQuery(refetchQuery.request.variables, {
          fetchPolicy,
          __environment: refetchEnvironment,
          __nameForWarning: "refetch"
        });
        dispatch({
          type: "refetch",
          fetchPolicy,
          onComplete,
          refetchEnvironment,
          refetchQuery,
          renderPolicy
        });
        return {
          dispose: disposeQuery
        };
      }, [fragmentIdentifier, dispatch, disposeQuery, identifierValue]);
    }
    var debugFunctions;
    if (true) {
      debugFunctions = {
        getInitialIDAndType: function getInitialIDAndType(memoRefetchVariables, fragmentRefPathInResponse, environment) {
          var _require5 = require_relay_runtime(), Record = _require5.Record;
          var id = memoRefetchVariables === null || memoRefetchVariables === void 0 ? void 0 : memoRefetchVariables.id;
          if (fragmentRefPathInResponse.length !== 1 || fragmentRefPathInResponse[0] !== "node" || id == null) {
            return null;
          }
          var recordSource = environment.getStore().getSource();
          var record = recordSource.get(id);
          var typename = record && Record.getType(record);
          if (typename == null) {
            return null;
          }
          return {
            id,
            typename
          };
        },
        checkSameTypeAfterRefetch: function checkSameTypeAfterRefetch(previousIDAndType, environment, fragmentNode, componentDisplayName) {
          var _require6 = require_relay_runtime(), Record = _require6.Record;
          if (!previousIDAndType) {
            return;
          }
          var recordSource = environment.getStore().getSource();
          var record = recordSource.get(previousIDAndType.id);
          var typename = record && Record.getType(record);
          if (typename !== previousIDAndType.typename) {
            true ? warning(false, "Relay: Call to `refetch` returned data with a different __typename: was `%s`, now `%s`, on `%s` in `%s`. Please make sure the server correctly implementsunique id requirement.", previousIDAndType.typename, typename, fragmentNode.name, componentDisplayName) : void 0;
          }
        },
        checkSameIDAfterRefetch: function checkSameIDAfterRefetch(previousIDAndTypename, refetchedFragmentRef, fragmentNode, componentDisplayName) {
          if (previousIDAndTypename == null) {
            return;
          }
          var _require7 = require_relay_runtime(), ID_KEY = _require7.ID_KEY;
          var resultID = refetchedFragmentRef[ID_KEY];
          if (resultID != null && resultID !== previousIDAndTypename.id) {
            true ? warning(false, "Relay: Call to `refetch` returned a different id, expected `%s`, got `%s`, on `%s` in `%s`. Please make sure the server correctly implements unique id requirement.", resultID, previousIDAndTypename.id, fragmentNode.name, componentDisplayName) : void 0;
          }
        }
      };
    }
    module.exports = useRefetchableFragmentNode;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/usePaginationFragment.js
var require_usePaginationFragment = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/usePaginationFragment.js"(exports, module) {
    init_define_global();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var getPaginationMetadata = require_getPaginationMetadata();
    var useLoadMoreFunction = require_useLoadMoreFunction();
    var useRefetchableFragmentNode = require_useRefetchableFragmentNode();
    var useStaticFragmentNodeWarning = require_useStaticFragmentNodeWarning();
    var _require = require_react();
    var useCallback = _require.useCallback;
    var useDebugValue = _require.useDebugValue;
    var useState = _require.useState;
    var _require2 = require_relay_runtime();
    var getFragment = _require2.getFragment;
    var getFragmentIdentifier = _require2.getFragmentIdentifier;
    function usePaginationFragment(fragmentInput, parentFragmentRef) {
      var fragmentNode = getFragment(fragmentInput);
      useStaticFragmentNodeWarning(fragmentNode, "first argument of usePaginationFragment()");
      var componentDisplayName = "usePaginationFragment()";
      var _getPaginationMetadat = getPaginationMetadata(fragmentNode, componentDisplayName), connectionPathInFragmentData = _getPaginationMetadat.connectionPathInFragmentData, paginationRequest = _getPaginationMetadat.paginationRequest, paginationMetadata = _getPaginationMetadat.paginationMetadata, identifierField = _getPaginationMetadat.identifierField;
      var _useRefetchableFragme = useRefetchableFragmentNode(fragmentNode, parentFragmentRef, componentDisplayName), fragmentData = _useRefetchableFragme.fragmentData, fragmentRef = _useRefetchableFragme.fragmentRef, refetch = _useRefetchableFragme.refetch;
      var fragmentIdentifier = getFragmentIdentifier(fragmentNode, fragmentRef);
      var _useLoadMore = useLoadMore({
        componentDisplayName,
        connectionPathInFragmentData,
        direction: "backward",
        fragmentData,
        fragmentIdentifier,
        fragmentNode,
        fragmentRef,
        identifierField,
        paginationMetadata,
        paginationRequest
      }), loadPrevious = _useLoadMore[0], hasPrevious = _useLoadMore[1], isLoadingPrevious = _useLoadMore[2], disposeFetchPrevious = _useLoadMore[3];
      var _useLoadMore2 = useLoadMore({
        componentDisplayName,
        connectionPathInFragmentData,
        direction: "forward",
        fragmentData,
        fragmentIdentifier,
        fragmentNode,
        fragmentRef,
        identifierField,
        paginationMetadata,
        paginationRequest
      }), loadNext = _useLoadMore2[0], hasNext = _useLoadMore2[1], isLoadingNext = _useLoadMore2[2], disposeFetchNext = _useLoadMore2[3];
      var refetchPagination = useCallback(function(variables, options) {
        disposeFetchNext();
        disposeFetchPrevious();
        return refetch(variables, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, options), {}, {
          __environment: void 0
        }));
      }, [disposeFetchNext, disposeFetchPrevious, refetch]);
      if (true) {
        useDebugValue({
          fragment: fragmentNode.name,
          data: fragmentData,
          hasNext,
          isLoadingNext,
          hasPrevious,
          isLoadingPrevious
        });
      }
      return {
        data: fragmentData,
        loadNext,
        loadPrevious,
        hasNext,
        hasPrevious,
        isLoadingNext,
        isLoadingPrevious,
        refetch: refetchPagination
      };
    }
    function useLoadMore(args) {
      var _useState = useState(false), isLoadingMore = _useState[0], setIsLoadingMore = _useState[1];
      var observer = {
        start: function start() {
          return setIsLoadingMore(true);
        },
        complete: function complete() {
          return setIsLoadingMore(false);
        },
        error: function error() {
          return setIsLoadingMore(false);
        }
      };
      var handleReset = function handleReset2() {
        return setIsLoadingMore(false);
      };
      var _useLoadMoreFunction = useLoadMoreFunction((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, args), {}, {
        observer,
        onReset: handleReset
      })), loadMore = _useLoadMoreFunction[0], hasMore = _useLoadMoreFunction[1], disposeFetch = _useLoadMoreFunction[2];
      return [loadMore, hasMore, isLoadingMore, disposeFetch];
    }
    module.exports = usePaginationFragment;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/usePreloadedQuery.js
var require_usePreloadedQuery = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/usePreloadedQuery.js"(exports, module) {
    init_define_global();
    "use strict";
    var invariant = require_browser();
    var useLazyLoadQueryNode = require_useLazyLoadQueryNode();
    var useMemoOperationDescriptor = require_useMemoOperationDescriptor();
    var useRelayEnvironment = require_useRelayEnvironment();
    var warning = require_warning();
    var _require = require_loadQuery();
    var useTrackLoadQueryInRender = _require.useTrackLoadQueryInRender;
    var _require2 = require_react();
    var useDebugValue = _require2.useDebugValue;
    var _require3 = require_relay_runtime();
    var _require3$__internal = _require3.__internal;
    var fetchQueryDeduped = _require3$__internal.fetchQueryDeduped;
    var fetchQuery = _require3$__internal.fetchQuery;
    function usePreloadedQuery(gqlQuery, preloadedQuery, options) {
      useTrackLoadQueryInRender();
      var environment = useRelayEnvironment();
      var fetchKey = preloadedQuery.fetchKey, fetchPolicy = preloadedQuery.fetchPolicy, source = preloadedQuery.source, variables = preloadedQuery.variables, networkCacheConfig = preloadedQuery.networkCacheConfig;
      var operation = useMemoOperationDescriptor(gqlQuery, variables, networkCacheConfig);
      var useLazyLoadQueryNodeParams;
      if (preloadedQuery.kind === "PreloadedQuery_DEPRECATED") {
        !(operation.request.node.params.name === preloadedQuery.name) ? true ? invariant(false, "usePreloadedQuery(): Expected data to be prefetched for query `%s`, got prefetch results for query `%s`.", operation.request.node.params.name, preloadedQuery.name) : invariant(false) : void 0;
        useLazyLoadQueryNodeParams = {
          componentDisplayName: "usePreloadedQuery()",
          fetchKey,
          fetchObservable: fetchQueryDeduped(environment, operation.request.identifier, function() {
            if (environment === preloadedQuery.environment && source != null) {
              return environment.executeWithSource({
                operation,
                source
              });
            } else {
              return environment.execute({
                operation
              });
            }
          }),
          fetchPolicy,
          query: operation,
          renderPolicy: options === null || options === void 0 ? void 0 : options.UNSTABLE_renderPolicy
        };
      } else {
        true ? warning(preloadedQuery.isDisposed === false, "usePreloadedQuery(): Expected preloadedQuery to not be disposed yet. This is because disposing the query marks it for future garbage collection, and as such query results may no longer be present in the Relay store. In the future, this will become a hard error.") : void 0;
        var fallbackFetchObservable = fetchQuery(environment, operation);
        var fetchObservable;
        if (source != null && environment === preloadedQuery.environment) {
          fetchObservable = source.ifEmpty(fallbackFetchObservable);
        } else if (environment !== preloadedQuery.environment) {
          true ? warning(false, "usePreloadedQuery(): usePreloadedQuery was passed a preloaded query that was created with a different environment than the one that is currently in context. In the future, this will become a hard error.") : void 0;
          fetchObservable = fallbackFetchObservable;
        } else {
          fetchObservable = fallbackFetchObservable;
        }
        useLazyLoadQueryNodeParams = {
          componentDisplayName: "usePreloadedQuery()",
          fetchObservable,
          fetchKey,
          fetchPolicy,
          query: operation,
          renderPolicy: options === null || options === void 0 ? void 0 : options.UNSTABLE_renderPolicy
        };
      }
      var data = useLazyLoadQueryNode(useLazyLoadQueryNodeParams);
      if (true) {
        useDebugValue({
          query: preloadedQuery.name,
          variables: preloadedQuery.variables,
          data,
          fetchKey,
          fetchPolicy,
          renderPolicy: options === null || options === void 0 ? void 0 : options.UNSTABLE_renderPolicy
        });
      }
      return data;
    }
    module.exports = usePreloadedQuery;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useRefetchableFragment.js
var require_useRefetchableFragment = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useRefetchableFragment.js"(exports, module) {
    init_define_global();
    "use strict";
    var useRefetchableFragmentNode = require_useRefetchableFragmentNode();
    var useStaticFragmentNodeWarning = require_useStaticFragmentNodeWarning();
    var _require = require_react();
    var useDebugValue = _require.useDebugValue;
    var _require2 = require_relay_runtime();
    var getFragment = _require2.getFragment;
    function useRefetchableFragment(fragmentInput, fragmentRef) {
      var fragmentNode = getFragment(fragmentInput);
      useStaticFragmentNodeWarning(fragmentNode, "first argument of useRefetchableFragment()");
      var _useRefetchableFragme = useRefetchableFragmentNode(fragmentNode, fragmentRef, "useRefetchableFragment()"), fragmentData = _useRefetchableFragme.fragmentData, refetch = _useRefetchableFragme.refetch;
      if (true) {
        useDebugValue({
          fragment: fragmentNode.name,
          data: fragmentData
        });
      }
      return [fragmentData, refetch];
    }
    module.exports = useRefetchableFragment;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useSubscribeToInvalidationState.js
var require_useSubscribeToInvalidationState = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useSubscribeToInvalidationState.js"(exports, module) {
    init_define_global();
    "use strict";
    var useRelayEnvironment = require_useRelayEnvironment();
    var _require = require_react();
    var useEffect = _require.useEffect;
    var useRef = _require.useRef;
    function useSubscribeToInvalidationState(dataIDs, callback) {
      var environment = useRelayEnvironment();
      var disposableRef = useRef(null);
      var stableDataIDs = Array.from(dataIDs).sort().join("");
      useEffect(function() {
        var store = environment.getStore();
        var invalidationState = store.lookupInvalidationState(dataIDs);
        var disposable = store.subscribeToInvalidationState(invalidationState, callback);
        disposableRef.current = disposable;
        return function() {
          return disposable.dispose();
        };
      }, [stableDataIDs, callback, environment]);
      return {
        dispose: function dispose() {
          if (disposableRef.current != null) {
            disposableRef.current.dispose();
          }
        }
      };
    }
    module.exports = useSubscribeToInvalidationState;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useSubscription.js
var require_useSubscription = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/relay-hooks/useSubscription.js"(exports, module) {
    init_define_global();
    "use strict";
    var React = require_react();
    var useRelayEnvironment = require_useRelayEnvironment();
    var _require = require_relay_runtime();
    var requestSubscription = _require.requestSubscription;
    function useSubscription(config, requestSubscriptionFn) {
      var actualRequestSubscription = requestSubscriptionFn !== null && requestSubscriptionFn !== void 0 ? requestSubscriptionFn : requestSubscription;
      var environment = useRelayEnvironment();
      React.useEffect(function() {
        var _requestSubscription = requestSubscription(environment, config), dispose = _requestSubscription.dispose;
        return dispose;
      }, [environment, config, actualRequestSubscription]);
    }
    module.exports = useSubscription;
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/index.js
var require_lib = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/lib/index.js"(exports, module) {
    init_define_global();
    "use strict";
    var EntryPointContainer = require_EntryPointContainer_react();
    var ReactRelayContext = require_ReactRelayContext();
    var ReactRelayFragmentContainer = require_ReactRelayFragmentContainer();
    var ReactRelayLocalQueryRenderer = require_ReactRelayLocalQueryRenderer();
    var ReactRelayPaginationContainer = require_ReactRelayPaginationContainer();
    var ReactRelayQueryRenderer = require_ReactRelayQueryRenderer();
    var ReactRelayRefetchContainer = require_ReactRelayRefetchContainer();
    var RelayEnvironmentProvider = require_RelayEnvironmentProvider();
    var RelayRuntime = require_relay_runtime();
    var loadEntryPoint = require_loadEntryPoint();
    var useEntryPointLoader = require_useEntryPointLoader();
    var useFragment = require_useFragment();
    var useLazyLoadQuery = require_useLazyLoadQuery();
    var useMutation = require_useMutation();
    var usePaginationFragment = require_usePaginationFragment();
    var usePreloadedQuery = require_usePreloadedQuery();
    var useQueryLoader = require_useQueryLoader();
    var useRefetchableFragment = require_useRefetchableFragment();
    var useRelayEnvironment = require_useRelayEnvironment();
    var useSubscribeToInvalidationState = require_useSubscribeToInvalidationState();
    var useSubscription = require_useSubscription();
    var _require = require_loadQuery();
    var loadQuery = _require.loadQuery;
    module.exports = {
      ConnectionHandler: RelayRuntime.ConnectionHandler,
      QueryRenderer: ReactRelayQueryRenderer,
      LocalQueryRenderer: ReactRelayLocalQueryRenderer,
      MutationTypes: RelayRuntime.MutationTypes,
      RangeOperations: RelayRuntime.RangeOperations,
      ReactRelayContext,
      applyOptimisticMutation: RelayRuntime.applyOptimisticMutation,
      commitLocalUpdate: RelayRuntime.commitLocalUpdate,
      commitMutation: RelayRuntime.commitMutation,
      createFragmentContainer: ReactRelayFragmentContainer.createContainer,
      createPaginationContainer: ReactRelayPaginationContainer.createContainer,
      createRefetchContainer: ReactRelayRefetchContainer.createContainer,
      fetchQuery_DEPRECATED: RelayRuntime.fetchQuery_DEPRECATED,
      graphql: RelayRuntime.graphql,
      readInlineData: RelayRuntime.readInlineData,
      requestSubscription: RelayRuntime.requestSubscription,
      EntryPointContainer,
      RelayEnvironmentProvider,
      fetchQuery: RelayRuntime.fetchQuery,
      loadQuery,
      loadEntryPoint,
      useFragment,
      useLazyLoadQuery,
      useEntryPointLoader,
      useQueryLoader,
      useMutation,
      usePaginationFragment,
      usePreloadedQuery,
      useRefetchableFragment,
      useRelayEnvironment,
      useSubscribeToInvalidationState,
      useSubscription
    };
  }
});

// .yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/index.js
var require_react_relay = __commonJS({
  ".yarn/__virtual__/react-relay-virtual-1a65d0e7ee/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/index.js"(exports, module) {
    init_define_global();
    module.exports = require_lib();
  }
});

// dep:react-relay
init_define_global();
var react_relay_default = require_react_relay();
export {
  react_relay_default as default
};
//# sourceMappingURL=react-relay.js.map
