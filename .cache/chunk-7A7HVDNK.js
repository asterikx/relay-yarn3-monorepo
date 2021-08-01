import {
  __commonJS,
  init_define_global
} from "./chunk-WXFKU22Y.js";

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    init_define_global();
    function _extends() {
      module.exports = _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
      return _extends.apply(this, arguments);
    }
    module.exports = _extends;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// .yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  ".yarn/cache/@babel-runtime-npm-7.14.8-177f7f6866-d2dd0ce51d.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    init_define_global();
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
    module.exports = _objectWithoutPropertiesLoose;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

export {
  require_extends,
  require_objectWithoutPropertiesLoose
};
//# sourceMappingURL=chunk-7A7HVDNK.js.map
