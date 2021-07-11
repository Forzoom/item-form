'use strict';

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('core-js/modules/es.array.index-of');

require('core-js/modules/es.function.name');

require('core-js/modules/es.array.join');

require('core-js/modules/es.array.map');

require('core-js/modules/es.symbol');

require('core-js/modules/es.symbol.description');

require('core-js/modules/es.symbol.async-iterator');

require('core-js/modules/es.symbol.iterator');

require('core-js/modules/es.symbol.to-string-tag');

require('core-js/modules/es.array.for-each');

require('core-js/modules/es.array.iterator');

require('core-js/modules/es.array.slice');

require('core-js/modules/es.json.to-string-tag');

require('core-js/modules/es.math.to-string-tag');

require('core-js/modules/es.object.get-prototype-of');

require('core-js/modules/es.object.set-prototype-of');

require('core-js/modules/es.object.to-string');

require('core-js/modules/es.promise');

require('core-js/modules/es.regexp.to-string');

require('core-js/modules/es.string.iterator');

require('core-js/modules/web.dom-collections.for-each');

require('core-js/modules/web.dom-collections.iterator');

require('core-js/modules/es.number.constructor');

require('core-js/modules/es.array.filter');

require('core-js/modules/es.object.keys');

require('core-js/modules/es.array.concat');

var Vue = require('vue');

require('core-js/modules/es.array.splice');

require('core-js/modules/web.url');

function _interopDefaultLegacy(e) {
  return e && _typeof2(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

!function (e) {
  var t,
      n,
      _o,
      i,
      c,
      d,
      _a,
      l = '<svg><symbol id="iconxiangyou" viewBox="0 0 1024 1024"><path d="M426.666667 256L366.506667 316.16 561.92 512l-195.413333 195.84L426.666667 768l256-256z"  ></path></symbol><symbol id="iconxiangji1" viewBox="0 0 1024 1024"><path d="M887.844571 314.148571h-112.091428c-26.075429 0-47.908571-21.174857-47.908572-47.945142V194.267429c0-26.075429-21.211429-47.908571-47.981714-47.908572H359.789714c-26.075429 0-47.908571 21.138286-47.908571 47.908572v72.630857c0 26.075429-21.174857 47.908571-47.945143 47.908571H151.844571c-26.112 0-47.945143 21.211429-47.945142 47.981714v496.274286c0 26.112 21.138286 47.981714 47.908571 47.981714h736.036571c26.075429 0 47.908571-21.174857 47.908572-47.945142V362.057143c0-26.112-21.101714-47.945143-47.908572-47.945143zM518.436571 759.698286a170.752 170.752 0 0 1-170.605714-170.605715c0-93.769143 76.836571-170.605714 170.605714-170.605714a170.752 170.752 0 0 1 170.605715 170.605714 170.752 170.752 0 0 1-170.605715 170.605715z"  ></path></symbol></svg>',
      s = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  function r() {
    d || (d = !0, i());
  }

  n = function n() {
    var e,
        t,
        n,
        o,
        i,
        c = document.createElement("div");
    c.innerHTML = l, l = null, (e = c.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (n = document.body).firstChild ? (o = t, (i = n.firstChild).parentNode.insertBefore(o, i)) : n.appendChild(t));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(n, 0) : (_o = function o() {
    document.removeEventListener("DOMContentLoaded", _o, !1), n();
  }, document.addEventListener("DOMContentLoaded", _o, !1)) : document.attachEvent && (i = n, c = e.document, d = !1, (_a = function a() {
    try {
      c.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(_a, 50);
    }

    r();
  })(), c.onreadystatechange = function () {
    "complete" == c.readyState && (c.onreadystatechange = null, r());
  });
}(window);
var script = {
  name: 'ItemTitle',
  props: {
    title: {
      type: String
    },
    titleHint: {
      type: String
    },
    isRequired: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}
/* script */


var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.title ? _c("div", {
    staticClass: "item-title"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n    "), _vm.isRequired ? _c("span", {
    staticClass: "item-title__asterisk"
  }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _vm.titleHint ? _c("span", {
    staticClass: "tips"
  }, [_vm._v(_vm._s(_vm.titleHint))]) : _vm._e()]) : _vm._e();
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6b774985_0", {
    source: ".item-title {\n  padding: 16px 0px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: bold;\n}\n.item-title__asterisk {\n  color: #FF1D1D;\n}\n.item-title .tips {\n  color: #999;\n  font-size: 12px;\n}\n",
    map: {
      "version": 3,
      "sources": ["title.vue"],
      "names": [],
      "mappings": "AAAA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,eAAe;AACjB",
      "file": "title.vue",
      "sourcesContent": [".item-title {\n  padding: 16px 0px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: bold;\n}\n.item-title__asterisk {\n  color: #FF1D1D;\n}\n.item-title .tips {\n  color: #999;\n  font-size: 12px;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var script$1 = {
  name: 'ItemButtonGroup',
  components: {
    ItemTitle: __vue_component__
  },
  props: {
    /** 内容 */
    value: {},

    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },
    options: {
      required: true,
      type: Array
    },
    readonly: {
      type: Boolean,
      default: false
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    onClickOption: function onClickOption(option) {
      this.$emit('input', option.value);
    }
  }
};
/* script */

var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-button-group"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }, _vm._l(_vm.options, function (option, index) {
    return _c("div", {
      key: index,
      staticClass: "item-button-item fl",
      staticStyle: {
        "text-align": "left"
      }
    }, [_c("MobileButton", {
      staticClass: "team-level",
      class: {
        selected: _vm.value == option.value
      },
      attrs: {
        name: "level-selected",
        "is-disabled": _vm.readonly
      },
      on: {
        click: function click($event) {
          return _vm.onClickOption(option);
        }
      }
    }, [_vm._v("\n                " + _vm._s(option.text) + "\n            ")])], 1);
  }), 0)], 1);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4484beaa_0", {
    source: ".item-button-group .item-button-item {\n  text-align: center;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n.item-button-group .item-button-item:last-of-type {\n  margin-right: 0;\n}\n",
    map: {
      "version": 3,
      "sources": ["buttonGroup.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB",
      "file": "buttonGroup.vue",
      "sourcesContent": [".item-button-group .item-button-item {\n  text-align: center;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n.item-button-group .item-button-item:last-of-type {\n  margin-right: 0;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports);

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});
/**
 * 是否是null或者undefined
 *
 * @param {} v 参数
 *
 * @return {boolean}
 */

function isUndef(v) {
  return v === null || v === undefined;
}
/**
 * @update(names, ids) 数据更新
 * @finish() 点击最后一级的情况下触发事件，可能使用于当点击最后一级的情况下，将关闭地址选择组件
 */


var script$2 = {
  name: 'Cascader',
  props: {
    /** 默认显示的位置内容 */
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /** 最大的level，默认为3，只允许显示 <= maxLevel 的内容 */
    maxLevel: {
      type: Number,
      default: 3
    },

    /** 获取列表数据 */
    fetchList: {
      required: true,
      type: Function
    }
  },
  data: function data() {
    return {
      /** 当前显示的level */
      level: 0,
      itemMap: {},
      listMap: {}
    };
  },
  computed: {
    list: function list() {
      return this.level === 0 ? this.listMap[0] : this.listMap[this.value[this.level - 1]];
    },

    /**
     * 如果没有的情况下，返回null
     *
     * @return {Number|null} 最后一级districtId，当没有districtIds时候返回null
     */
    lastId: function lastId() {
      var len = this.value.length;

      if (len === 0) {
        return null;
      }

      return this.value[len - 1];
    },

    /**
     * 指示下一列是否存在
     *
     * 1. 当前列数>=3的情况 -> false
     * 2. isUndef(lastDistrictId) -> true
     * 3. district的level达到标准的情况下 -> false
     * 4. !list == null && !(list.length === 0)
     */
    moreColumnVisible: function moreColumnVisible() {
      // 如果列数已经到达了3
      if (this.value.length >= this.maxLevel) {
        return false;
      } // 如果最后一个districtId不存在情况下，表明当前没有任何级别被选中


      var lastId = this.lastId; // 如果最后一级的list不存在，那么返回false

      if (isUndef(this.listMap[lastId]) || !this.listMap[lastId].length) {
        return false;
      }

      if (isUndef(lastId)) {
        return true;
      }

      return true;
    },

    /**
     * 所需要显示的面包屑导航
     *
     * - 当没有的情况下，将会默认显示一列内容
     */
    crumbs: function crumbs() {
      var _this = this;

      if (this.value.length > 0) {
        var result = this.value.map(function (id) {
          var item = _this.itemMap[id];
          return item ? item.name : '';
        });

        if (this.moreColumnVisible) {
          result.push('请选择');
        }

        return result;
      } else {
        return ['请选择'];
      }
    }
  },
  watch: {},
  methods: {
    innerFetchList: function () {
      var _innerFetchList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
        var ret, i, len;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetchList(item);

              case 2:
                ret = _context.sent;

                for (i = 0, len = ret.length; i < len; i++) {
                  this.$set(this.itemMap, ret[i].id, ret[i]);
                }

                this.$set(this.listMap, item.id, ret);
                this.$emit('itemMap', this.itemMap);
                this.$emit('listMap', this.listMap);
                return _context.abrupt("return", ret);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function innerFetchList(_x) {
        return _innerFetchList.apply(this, arguments);
      }

      return innerFetchList;
    }(),

    /**
     * 当address被点击
     *
     * @param {} id 行政区id
     * @param {} column 列数，从0开始
     */
    onClickItem: function () {
      var _onClickItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item, level) {
        var _this2 = this;

        var ids, list;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 删除被点击level开始之后的所有id，保留level之前的所有的id
                ids = this.value.slice(0, level); // 更新ids

                ids.push(item.id);
                _context2.next = 4;
                return this.innerFetchList(item);

              case 4:
                list = _context2.sent;

                if (list.length > 0) {
                  this.level = level + 1;
                }

                this.$emit('input', ids);
                this.$nextTick(function () {
                  if (!_this2.moreColumnVisible) {
                    _this2.$emit('finish');
                  }
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onClickItem(_x2, _x3) {
        return _onClickItem.apply(this, arguments);
      }

      return onClickItem;
    }(),

    /**
     * 点击面包屑的时候
     *
     * @param {} index 导航的位置
     */
    onClickCrumb: function onClickCrumb(level) {
      this.level = level;
    }
  },
  created: function created() {
    this.innerFetchList({
      id: 0,
      name: ''
    });

    if (this.value && this.value.length) {
      for (var i = 0, len = this.value.length; i < len; i++) {
        this.innerFetchList({
          id: this.value[i],
          name: ''
        });
      }
    }
  }
};
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "if-comp-cascader"
  }, [_c("div", {
    staticClass: "clearfix white-bg"
  }, _vm._l(_vm.crumbs, function (name, index) {
    return _c("div", {
      key: index,
      staticClass: "if-comp-cascader__crumb",
      class: {
        selected: _vm.level == index
      },
      on: {
        click: function click($event) {
          return _vm.onClickCrumb(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(name) + "\n        ")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "if-comp-cascader__level"
  }, _vm._l(_vm.list, function (item) {
    return _c("div", {
      key: item.id,
      staticClass: "if-comp-cascader__item after-line",
      class: {
        selected: item.id == _vm.value[_vm.level]
      },
      on: {
        click: function click($event) {
          return _vm.onClickItem(item, _vm.level);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n        ")]);
  }), 0)]);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0076a00e_0", {
    source: ".if-comp-cascader__crumb {\n  float: left;\n  padding: 7px 10px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n  border-bottom: 1px solid #fff;\n}\n.if-comp-cascader__crumb.selected {\n  border-bottom: 1px solid #fc4548;\n}\n.if-comp-cascader__level {\n  height: 216px;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n}\n.if-comp-cascader__item {\n  position: relative;\n  padding: 7px 20px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n}\n.if-comp-cascader__item:after {\n  left: 15px;\n}\n.if-comp-cascader__item.selected {\n  color: #fc4548;\n}\n.if-comp-cascader__item:last-child:after {\n  display: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["cascader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,6BAA6B;AAC/B;AACA;EACE,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,UAAU;AACZ;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf",
      "file": "cascader.vue",
      "sourcesContent": [".if-comp-cascader__crumb {\n  float: left;\n  padding: 7px 10px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n  border-bottom: 1px solid #fff;\n}\n.if-comp-cascader__crumb.selected {\n  border-bottom: 1px solid #fc4548;\n}\n.if-comp-cascader__level {\n  height: 216px;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n}\n.if-comp-cascader__item {\n  position: relative;\n  padding: 7px 20px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n}\n.if-comp-cascader__item:after {\n  left: 15px;\n}\n.if-comp-cascader__item.selected {\n  color: #fc4548;\n}\n.if-comp-cascader__item:last-child:after {\n  display: none;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

var script$3 = {
  name: 'ItemCascader',
  components: {
    ItemTitle: __vue_component__,
    Cascader: __vue_component__$2
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    fetchList: {
      required: true,
      type: Function
    },
    isValidate: {
      type: Boolean,
      default: true
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      visible: false,
      ids: [],
      itemMap: {}
    };
  },
  computed: {
    name: function name() {
      var _this = this;

      if (!this.itemMap) {
        return '';
      }

      return (this.value || []).map(function (id) {
        return _this.itemMap[id] ? _this.itemMap[id].name : '';
      }).join('');
    }
  },
  watch: {
    ids: function ids() {
      this.$emit('input', this.ids);
    }
  },
  methods: {
    onItemMapUpate: function onItemMapUpate(itemMap) {
      this.itemMap = itemMap;
    },
    onClickPlaceholder: function onClickPlaceholder() {
      this.visible = true;
    },
    onFinish: function onFinish() {
      this.visible = false;
    },
    innerFetchList: function () {
      var _innerFetchList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
        var ret, i, len;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetchList(item);

              case 2:
                ret = _context.sent;

                for (i = 0, len = ret.length; i < len; i++) {
                  this.$set(this.itemMap, ret[i].id, ret[i]);
                }

                return _context.abrupt("return", ret);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function innerFetchList(_x) {
        return _innerFetchList.apply(this, arguments);
      }

      return innerFetchList;
    }()
  },
  created: function created() {
    this.innerFetchList({
      id: 0,
      name: ''
    });

    if (this.value && this.value.length) {
      for (var i = 0, len = this.value.length; i < len; i++) {
        this.innerFetchList({
          id: this.value[i],
          name: ''
        });
      }
    }
  }
};
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-cascader__wrap"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-cascader",
    class: {
      placeholder: _vm.name.length === 0,
      "is-error": !_vm.isValidate
    },
    on: {
      click: _vm.onClickPlaceholder
    }
  }, [_vm._v("\n        " + _vm._s(_vm.name || _vm.placeholder) + "\n    ")]), _vm._v(" "), _c("van-popup", {
    attrs: {
      position: "bottom"
    },
    model: {
      value: _vm.visible,
      callback: function callback($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_c("Cascader", {
    attrs: {
      fetchList: _vm.fetchList
    },
    on: {
      itemMap: _vm.onItemMapUpate,
      finish: _vm.onFinish
    },
    model: {
      value: _vm.ids,
      callback: function callback($$v) {
        _vm.ids = $$v;
      },
      expression: "ids"
    }
  })], 1)], 1);
};

var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4c59fe57_0", {
    source: ".item-cascader {\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.item-cascader.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-cascader.placeholder {\n  color: #c8c8c8;\n}\n",
    map: {
      "version": 3,
      "sources": ["cascader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,cAAc;AAChB",
      "file": "cascader.vue",
      "sourcesContent": [".item-cascader {\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.item-cascader.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-cascader.placeholder {\n  color: #c8c8c8;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

var script$4 = {
  name: 'ItemInput',
  components: {
    ItemTitle: __vue_component__
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },
    // 内容
    value: {},
    name: {
      type: String
    },
    placeholder: {
      type: String
    },

    /** text | tel */
    type: {
      default: 'text'
    },

    /** 最大长度 */
    max: {
      type: Number
    },
    readonly: {
      type: Boolean
    },
    isValidate: {
      type: Boolean,
      default: true
    },
    parser: {
      type: Function
    },
    formatter: {
      type: Function
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      content: ''
    };
  },
  computed: {},
  watch: {
    '$props.value': function $propsValue(val) {
      this.content = this.formatter ? this.formatter(val) : val;
    },
    content: function content(val) {
      this.$emit('input', this.parser ? this.parser(val) : val);
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.$emit('blur');
    }
  },
  created: function created() {
    this.content = this.formatter ? this.formatter(this.value || '') : this.value || '';
  }
};
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _vm.type == "text" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "item-input",
    class: {
      "is-error": !_vm.isValidate
    },
    attrs: {
      type: "text",
      name: _vm.name,
      placeholder: _vm.placeholder,
      maxlength: _vm.max,
      readonly: _vm.readonly
    },
    domProps: {
      value: _vm.content
    },
    on: {
      blur: _vm.onBlur,
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.content = $event.target.value;
      }
    }
  }) : _vm.type == "tel" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "item-input",
    class: {
      "is-error": !_vm.isValidate
    },
    attrs: {
      type: "tel",
      name: _vm.name,
      maxlength: _vm.max,
      placeholder: _vm.placeholder,
      readonly: _vm.readonly
    },
    domProps: {
      value: _vm.content
    },
    on: {
      blur: _vm.onBlur,
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.content = $event.target.value;
      }
    }
  }) : _vm._e()], 1);
};

var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3ba113fe_0", {
    source: ".item-input {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-input::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-input.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n",
    map: {
      "version": 3,
      "sources": ["input.vue"],
      "names": [],
      "mappings": "AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA;EACE,+BAA+B;AACjC",
      "file": "input.vue",
      "sourcesContent": [".item-input {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-input::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-input.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, createInjector, undefined, undefined);

var script$5 = {
  name: 'List',
  props: {
    title: {
      type: String
    },

    /** 是否显示 */
    value: {
      required: true,
      type: Boolean
    },

    /** 选择列表 */
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /** 是否多选 */
    multiple: {
      type: Boolean,
      default: false
    },

    /** 按钮文本 */
    actionText: {
      type: String
    }
  },
  data: function data() {
    return {
      multipleValue: {}
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 选择队伍
     */
    onClickItem: function onClickItem(item) {
      if (!this.multiple) {
        this.$emit('select', item);
        this.$emit('input', false);
      } else {
        this.$set(this.multipleValue, item.value, !this.multipleValue[item.value]);
      }
    },
    onClickAction: function onClickAction() {
      if (this.multipleValue) {
        this.$emit('action', this.multipleValue);
      } else {
        this.$emit('action');
      }
    }
  }
};
/* script */

var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("van-popup", {
    staticClass: "if-comp-list",
    attrs: {
      value: _vm.value,
      position: "bottom"
    }
  }, [_vm.title ? _c("div", {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "if-comp-list__list"
  }, _vm._l(_vm.list, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "if-comp-list__list-item clearfix",
      class: {
        "color-red": _vm.multipleValue[item.value] || item.value === _vm.value
      },
      on: {
        click: function click($event) {
          return _vm.onClickItem(item);
        }
      }
    }, [_c("div", {
      staticClass: "left"
    }, [_vm._v(_vm._s(item.text))])]);
  }), 0), _vm._v(" "), _c("MobileButton", {
    staticClass: "btn-large bottom-fixed btn-rect",
    attrs: {
      name: "white-red",
      tag: "div",
      "class-list": ["btn-cancel"],
      "is-block": true
    },
    on: {
      click: _vm.onClickAction
    }
  }, [_c("div", [_vm._v(_vm._s(_vm.actionText))])])], 1);
};

var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1911c17d_0", {
    source: ".if-comp-list {\n  height: 100%;\n  color: #333;\n  overflow: scroll;\n}\n.if-comp-list .color-red {\n  color: #fc4548;\n}\n.if-comp-list .title {\n  position: relative;\n  padding: 10px 0;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  color: #333;\n  text-align: center;\n  border-bottom: 0;\n}\n.if-comp-list__list {\n  background-color: #fff;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.if-comp-list__list .left {\n  float: left;\n  white-space: normal;\n}\n.if-comp-list__list .right {\n  float: right;\n}\n.if-comp-list__list-item {\n  padding: 10px 15px;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: solid 1px #efefef;\n  white-space: normal;\n  box-sizing: border-box;\n}\n.if-comp-list__list-item:last-child {\n  margin-bottom: 45px;\n  border-bottom: solid 1px #efefef;\n}\n.if-comp-list .bottom-fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n",
    map: {
      "version": 3,
      "sources": ["list.vue"],
      "names": [],
      "mappings": "AAAA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;EAChC,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,gCAAgC;AAClC;AACA;EACE,eAAe;EACf,OAAO;EACP,QAAQ;EACR,SAAS;AACX",
      "file": "list.vue",
      "sourcesContent": [".if-comp-list {\n  height: 100%;\n  color: #333;\n  overflow: scroll;\n}\n.if-comp-list .color-red {\n  color: #fc4548;\n}\n.if-comp-list .title {\n  position: relative;\n  padding: 10px 0;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  color: #333;\n  text-align: center;\n  border-bottom: 0;\n}\n.if-comp-list__list {\n  background-color: #fff;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.if-comp-list__list .left {\n  float: left;\n  white-space: normal;\n}\n.if-comp-list__list .right {\n  float: right;\n}\n.if-comp-list__list-item {\n  padding: 10px 15px;\n  font-size: 16px;\n  line-height: 24px;\n  border-bottom: solid 1px #efefef;\n  white-space: normal;\n  box-sizing: border-box;\n}\n.if-comp-list__list-item:last-child {\n  margin-bottom: 45px;\n  border-bottom: solid 1px #efefef;\n}\n.if-comp-list .bottom-fixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, createInjector, undefined, undefined);

var script$6 = {
  name: 'ItemList',
  components: {
    ItemTitle: __vue_component__,
    List: __vue_component__$5
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },

    /** listTitle */
    listTitle: {
      type: String
    },

    /** value */
    value: {},

    /** 选项 */
    options: {},

    /** 是否允许多选 */
    multiple: {
      type: Boolean,
      default: false
    },

    /** 文本分割 */
    separator: {
      type: String,
      default: '、'
    },

    /** 占位 */
    placeholder: {
      type: String
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    textStr: function textStr() {
      if (this.multiple) {
        var map = {};
        var len = this.optionList.length;

        for (var i = 0; i < len; i++) {
          var option = this.optionList[i];
          map[option.value] = option.text;
        }

        return this.value.length > 0 ? this.value.map(function (value) {
          return map[value];
        }).join(this.separator) : this.placeholder;
      } else {
        return this.value || this.placeholder;
      }
    },
    isPlaceholder: function isPlaceholder() {
      return this.multiple ? !this.value.length : !this.value;
    },
    optionList: function optionList() {
      if (!this.options) {
        return [];
      } else if (typeof this.options === 'function') {
        return this.options();
      } else {
        return this.options;
      }
    }
  },
  watch: {},
  methods: {
    onClickSubject: function onClickSubject() {
      this.visible = true;
    },
    onClickAction: function onClickAction(mutlipleValue) {
      this.$emit('input', Object.keys(mutlipleValue).filter(function (key) {
        return mutlipleValue[key];
      }));
      this.visible = false;
    }
  }
};
/* script */

var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-list"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-list__inner",
    class: {
      placeholder: _vm.isPlaceholder
    },
    on: {
      click: _vm.onClickSubject
    }
  }, [_vm._v("\n        " + _vm._s(_vm.textStr) + "\n    ")]), _vm._v(" "), _c("List", {
    attrs: {
      list: _vm.optionList,
      title: _vm.listTitle,
      actionText: "确认",
      multiple: _vm.multiple
    },
    on: {
      action: _vm.onClickAction
    },
    model: {
      value: _vm.visible,
      callback: function callback($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  })], 1);
};

var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4fc29b3d_0", {
    source: ".item-list__inner {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n.item-list .placeholder {\n  color: #c8c8c8;\n}\n",
    map: {
      "version": 3,
      "sources": ["list.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB",
      "file": "list.vue",
      "sourcesContent": [".item-list__inner {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n.item-list .placeholder {\n  color: #c8c8c8;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector, undefined, undefined);

var script$7 = {
  name: 'ItemSelect',
  components: {
    ItemTitle: __vue_component__
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },

    /** 内容 */
    value: {},
    name: {
      type: String
    },
    placeholder: {
      type: String
    },

    /** 是否提示为空 */
    blank: {
      type: Boolean,
      default: false
    },

    /** 对齐 */
    align: {
      type: String,
      default: 'left'
    },

    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false
    },

    /** 选择内容 */
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /** 是否错误 */
    isValidate: {
      type: Boolean,
      default: true
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      /** 内容 */
      content: ''
    };
  },
  computed: {},
  watch: {
    '$props.value': function $propsValue(val) {
      this.content = val;
    },
    content: function content(val) {
      this.$emit('input', val);
    }
  },
  methods: {},
  created: function created() {
    this.content = this.value;
  }
};
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-select__wrap"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-select",
    class: {
      "is-error": !_vm.isValidate
    }
  }, [_c("div", {
    staticClass: "single-line-left"
  }, [_vm._t("left")], 2), _vm._v(" "), _c("div", {
    staticClass: "single-line-right"
  }, [_vm._t("right")], 2), _vm._v(" "), _c("div", {
    staticClass: "single-line-center-wrapper overflow"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "select",
    class: {
      placeholder: _vm.value == null || _vm.value == ""
    },
    attrs: {
      disabled: _vm.disabled
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.content = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _vm._l(_vm.options, function (option, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                    " + _vm._s(option.text) + "\n                ")]);
  })], 2)])])], 1);
};

var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-dd88f8de_0", {
    source: ".item-select {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-select.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-select .select {\n  width: 100%;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n.item-select .select.padding-left {\n  padding-left: 10px;\n}\n.item-select .select.padding-right {\n  padding-right: 10px;\n}\n.item-select .select.left {\n  text-align: left;\n}\n.item-select .select.right {\n  text-align: right;\n}\n.item-select .select.center {\n  text-align: center;\n}\n.item-select .select.placeholder {\n  color: #c8c8c8;\n}\n.item-select.blank {\n  border-color: #fc4548;\n}\n.item-select.blank .input::-webkit-input-placeholder {\n  color: #fc4548;\n}\n",
    map: {
      "version": 3,
      "sources": ["select.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB",
      "file": "select.vue",
      "sourcesContent": [".item-select {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-select.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-select .select {\n  width: 100%;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n.item-select .select.padding-left {\n  padding-left: 10px;\n}\n.item-select .select.padding-right {\n  padding-right: 10px;\n}\n.item-select .select.left {\n  text-align: left;\n}\n.item-select .select.right {\n  text-align: right;\n}\n.item-select .select.center {\n  text-align: center;\n}\n.item-select .select.placeholder {\n  color: #c8c8c8;\n}\n.item-select.blank {\n  border-color: #fc4548;\n}\n.item-select.blank .input::-webkit-input-placeholder {\n  color: #fc4548;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = undefined;
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, createInjector, undefined, undefined);

var script$8 = {
  name: 'ItemTextarea',
  components: {
    ItemTitle: __vue_component__
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },

    /** 数据 */
    value: {},

    /** 占位 */
    placeholder: {
      type: [String, Number]
    },

    /** 最大长度 */
    max: {
      type: Number
    },

    /** is error */
    isValidate: {
      type: Boolean,
      default: true
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      content: ''
    };
  },
  computed: {},
  watch: {
    content: function content(val) {
      var vm = this;

      if (vm.max) {
        if (val.length > vm.max) {
          val = val.slice(0, vm.max);
        }

        vm.content = val;
      }

      vm.$emit('input', val);
    },
    '$props.value': function $propsValue(val) {
      this.content = val;
    }
  },
  methods: {},
  created: function created() {
    this.content = this.value || '';
  }
};
/* script */

var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-textarea__wrap"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-textarea",
    class: {
      "is-error": !_vm.isValidate
    }
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "textarea",
    attrs: {
      maxlength: _vm.max,
      placeholder: _vm.placeholder,
      rows: "6"
    },
    domProps: {
      value: _vm.content
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.content = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.max ? _c("div", {
    staticClass: "length"
  }, [_vm._v(_vm._s(_vm.content.length) + "/" + _vm._s(_vm.max))]) : _vm._e()])], 1);
};

var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2e4a09dc_0", {
    source: ".item-textarea {\n  background-color: #f2f2f2;\n}\n.item-textarea.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-textarea .textarea {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n  resize: none;\n}\n.item-textarea .textarea::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-textarea .length {\n  padding: 0px 15px 10px;\n  font-size: 12px;\n  line-height: 17px;\n  color: #999;\n  text-align: right;\n}\n",
    map: {
      "version": 3,
      "sources": ["textarea.vue"],
      "names": [],
      "mappings": "AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,iBAAiB;AACnB",
      "file": "textarea.vue",
      "sourcesContent": [".item-textarea {\n  background-color: #f2f2f2;\n}\n.item-textarea.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-textarea .textarea {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n  resize: none;\n}\n.item-textarea .textarea::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-textarea .length {\n  padding: 0px 15px 10px;\n  font-size: 12px;\n  line-height: 17px;\n  color: #999;\n  text-align: right;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = undefined;
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, createInjector, undefined, undefined);

var header = '<div class="ro-uploader-wrap" :class="containerClass" :style="containerStyle">';
var footer = '<div v-for="(image, index) in images" ' + ':key="index"' + 'class="ro-uploader-image-wrap"' + ':class="imageWrapClass"' + ':style="imageWrapStyle">' + '<div v-if="!lazyload" ' + 'class="ro-uploader-image"' + ':class="imageClass"' + ':style="[{\'background-image\': \'url(\' + transformImage(image) + \')\'}, imageStyle]"' + '@click="onClickImage(index)">' + '</div>' + '<div v-else ' + 'class="ro-uploader-image"' + ':class="imageClass"' + 'v-lazy:background-image="image"' + ':style="[imageStyle]"' + '@click="onClickImage(index)">' + '</div>' + '<div v-if="canModify" class="remove-wrapper" :class="removeClass" :style="removeStyle" @click="onClickRemove(index)"><div class="ro-uploader-remove"></div></div>' + '</div>' + '<slot name="request">' + '<div class="ro-uploader-image-wrap ro-uploader-request" ' + 'v-if="images.length < size && canModify"' + '@click="onClickRequest"' + ':class="requestClass"' + ':style="requestStyle">' + '</div>' + '</slot>' + '</div>';
/**
 * @load 当图片上传开始时
 * @finish 当图片上传结束时
 */

function factory(_Vue) {
  return _Vue.extend({
    name: 'Uploader',
    props: {
      /**
       * 允许上传图片个数
       */
      size: {
        type: Number,
        "default": 1
      },

      /**
       * 是否允许修改
       */
      canModify: {
        type: Boolean,
        "default": true
      },

      /**
       * 容器对象类
       */
      containerClass: {
        type: [Object, Array],
        "default": function _default() {
          return {};
        }
      },

      /**
       * 容器对象样式
       */
      containerStyle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },

      /**
       * 图片对象类
       */
      imageClass: {
        type: [Object, Array],
        "default": function _default() {
          return {};
        }
      },

      /**
       * 图片对象样式
       */
      imageStyle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },

      /**
       * wrap
       */
      imageWrapClass: {
        type: [Object, Array],
        "default": function _default() {
          return {};
        }
      },

      /**
       * wrap
       */
      imageWrapStyle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },

      /**
       * 请求对象类
       */
      requestClass: {
        type: [Object, Array],
        "default": function _default() {
          return {};
        }
      },

      /**
       * 请求对象样式
       */
      requestStyle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },

      /**
       * 删除按钮样式类
       */
      removeClass: {
        type: [Object, Array],
        "default": function _default() {
          return {};
        }
      },

      /**
       * 删除按钮样式
       */
      removeStyle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },

      /**
       * 调用lazyload，因为无法确定存在vue-lazyload库，所以默认false
       */
      lazyload: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {
        // 包含所有图片的数组
        images: []
      };
    },
    methods: {
      /**
       * 重置所有的images列表，不会触发任何的remove和add事件
       */
      setImages: function setImages(images) {
        var tmp = [];

        for (var i = 0, len = images.length; i < len; i++) {
          tmp.push(images[i]);
        }

        this.images = tmp;
      },

      /**
       * 添加图片
       *  将触发@add(image)事件
       *
       * @param {string} image
       *
       * @return {boolean} 成功返回true，否则返回false
       */
      add: function add(image) {
        if (this.images.length < this.size) {
          this.images.push(image);
          this.$emit('add', image);
          return true;
        }

        return false;
      },

      /**
       * 删除图片
       *  将触发@remove(index)事件
       *
       * @param {number} index
       *
       * @return {boolean} true表示删除成功，false表示失败
       */
      remove: function remove(index) {
        if (0 <= index && index < this.size) {
          this.images.splice(index, 1);
          this.$emit('remove', index);
          return true;
        }

        return false;
      },

      /**
       * 删除所有的图片
       */
      removeAll: function removeAll() {
        for (var i = 0, len = this.images.length; i < len; i++) {
          this.remove(i);
        }

        return true;
      },

      /**
       * 获得所有图片
       *
       * @return {Array<string>}
       */
      getImages: function getImages() {
        return this.images.slice(0);
      },

      /**
       * 当点击图片时触发
       *
       * @param {number} index
       */
      onClickImage: function onClickImage(index) {
        this.$emit('click', index);
      },

      /**
       * 当点击删除按钮时触发
       */
      onClickRemove: function onClickRemove(index) {
        this.remove(index);
      },

      /**
       * 当点击添加按钮时
       */
      onClickRequest: function onClickRequest() {
        this.$emit('request');
      },

      /**
       * 获得允许上传的容量
       */
      getSize: function getSize() {
        return this.size;
      },

      /**
       * 获得当前已经上传的图片的数量
       */
      getCount: function getCount() {
        return this.images.length;
      },

      /**
       * 获取image，在模板中使用
       */
      transformImage: function transformImage(image) {
        return image;
      }
    },
    template: header + footer
  });
}

var isIOS = /iPhone/.test(navigator.userAgent);

function previewImage(image, images) {
  wx.previewImage({
    current: image,
    urls: images
  });
}
/**
 * @return {Promise} res
 *  - localIds: string[]
 */


function chooseImage(count) {
  return new Promise(function (resolve, reject) {
    wx.chooseImage({
      count: count,
      sizeType: ['compressed'],
      success: function success(res) {
        return resolve(res);
      },
      // @ts-ignore
      cancel: function cancel() {
        return reject(new Error('cancel'));
      },
      // @ts-ignore
      fail: function fail() {
        return reject(new Error('fail'));
      }
    });
  });
}
/**
 * 默认不显示progress
 * @param localId
 *
 * @return {Promise} res
 *  - serverId
 */


function uploadImage(localId) {
  return new Promise(function (resolve, reject) {
    wx.uploadImage({
      localId: localId,
      isShowProgressTips: 0,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(error) {
        reject(error);
      }
    });
  });
}
/**
 * 在iOS中可能转base64
 * @param localId
 *
 * @return {Promise<string>} imageData
 */


function getLocalImgData(localId) {
  if (!isIOS || !window.__wxjs_is_wkwebview) {
    return Promise.resolve(localId);
  }

  return new Promise(function (resolve, reject) {
    wx.getLocalImgData({
      localId: localId,
      success: function success(res) {
        return resolve(res.localData);
      }
    });
  });
}
/**
 * 上传图片到微信
 *
 * @return {Promise<WechatImage>}
 */


function uploadWechatImage(localId, transformLocalImageData) {
  return uploadImage(localId).then(function (res) {
    return new Promise(function (resolve) {
      getLocalImgData(localId).then(function (image) {
        resolve({
          url: image,
          localId: localId,
          image: image,
          serverId: res.serverId
        });
      });
    });
  })["catch"](function (error) {
    throw new Error(error.errMsg);
  });
}
/**
 * 
 */


function factory$1(_Vue, options) {
  var Uploader = factory(_Vue);
  return Uploader.extend({
    name: 'WechatUploader',
    props: {
      /**
       * 是否使用微信的预览内容
       */
      useWechatPreview: {
        type: Boolean,
        "default": true
      }
    },
    methods: {
      /**
       * 要求添加新的图片
       */
      onClickRequest: function onClickRequest() {
        this.request();
      },

      /**
       * 请求图片上传
       */
      request: function request() {
        var vm = this;
        vm.$emit('startRequest');
        return chooseImage(Math.min(9, vm.size - vm.images.length)).then(function (res) {
          vm.$emit('endRequest');
          var localIds = res.localIds;

          if (localIds.length === 0) {
            return;
          }

          vm.$emit('choose', res);
          vm.$emit('load');
          vm.$emit('startRequest');
          return vm.uploadWechatImages(localIds).then(function () {
            vm.$emit('finish');
            vm.$emit('endRequest');
          })["catch"](function (errMsg) {
            vm.$emit('error', errMsg);
          });
        })["catch"](function (error) {
          // cancel 或 fail 情况
          vm.$emit('endRequest');
        });
      },

      /**
       * 上传多张图片，需要保证一张上传完成之后，再上传另外一张
       */
      uploadWechatImages: function uploadWechatImages(localIds) {
        var vm = this;
        var localId = localIds.shift();
        return uploadWechatImage(localId, options.transformWXLocalImageData).then(function (image) {
          vm.add(image); // 没有内容，不再上传

          if (localIds.length == 0) {
            return;
          }

          return vm.uploadWechatImages(localIds);
        })["catch"](function (errMsg) {
          throw new Error(errMsg);
        });
      },
      transformImage: function transformImage(image) {
        return image.url;
      }
    },
    mounted: function mounted() {
      this.$on('click', function (index) {
        var images = this.images;
        previewImage(images[index].url, images.map(function (image) {
          return image.url;
        }));
      });
    }
  });
}
/**
 * 
 */


function factory$2(_Vue, options) {
  var Uploader = factory(_Vue);
  return Uploader.extend({
    name: 'InputUploader',
    props: {
      accept: {
        type: String
      }
    },
    methods: {
      /**
       * 要求添加新的图片
       */
      onClickRequest: function onClickRequest() {
        this.request();
      },

      /**
       * 请求图片上传
       */
      request: function request() {
        var $input = this.$refs.fileInput;

        if ($input) {
          $input.click();
        }
      },

      /**
       * 删除图片
       *  将触发@remove(index)事件
       *
       * @param {number} index
       *
       * @return {boolean} true表示删除成功，false表示失败
       */
      remove: function remove(index) {
        if (0 <= index && index < this.size) {
          var removed = this.images.splice(index, 1);

          for (var i = 0, len = removed.length; i < len; i++) {
            URL.revokeObjectURL(removed[i].objectUrl);
          }

          this.$emit('remove', index);
          return true;
        }

        return false;
      },
      onChangeInput: function onChangeInput() {
        var $input = this.$refs.fileInput;

        if ($input) {
          for (var i = 0, len = $input.files.length; i < len; i++) {
            // 如果此次循环已满，则不再循环
            if (this.images.length >= this.size) {
              return;
            }

            this.add({
              url: URL.createObjectURL($input.files[i]),
              file: $input.files[i],
              objectUrl: URL.createObjectURL($input.files[i])
            });
          }
        }
      },

      /**
       * 获取用于展示的image
       */
      transformImage: function transformImage(image) {
        return image.objectUrl || image.url;
      }
    },
    template: header + '<input ref="fileInput" class="ro-uploader-input" type="file" @change="onChangeInput" :multiple="(size - images.length) > 1" :accept="accept" />' + footer
  });
}

var WechatUploader = factory$1(Vue__default['default'], {
  transformWXLocalImageData: true
});
/**
 * 班级头像上传逻辑
 *
 * - @add 数据添加
 * - @remove 数据删除
 */

var script$9 = {
  name: 'Uploader',
  components: {
    WechatUploader: WechatUploader
  },
  props: {
    /** 提示内容 */
    hint: {
      type: String
    },

    /** 背景样式类 */
    backgroundStyle: {
      type: [Object, Array]
    },

    /** 是否未填写 */
    blank: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      // 图片内容
      image: null
    };
  },
  computed: {
    opacity: function opacity() {
      return this.image ? 1 : 0;
    }
  },
  watch: {},
  methods: {
    /**
     * 获得元素
     *
     * @return {} uploader
     */
    getImage: function getImage() {
      return this.image;
    },

    /**
     * 设置头像
     *
     * @param {} image 头像内容
     */
    setImage: function setImage(image) {
      var $uploader = this.$refs.uploader;
      $uploader.setImages([{
        url: image,
        image: image,
        serverId: null
      }]);
      this.image = image;
    },

    /**
     * 删除当前的图片信息
     */
    removeImage: function removeImage() {
      var $uploader = this.$refs.uploader;
      $uploader.setImages([]);
    },

    /**
     * 数据开始加载
     */
    onLoad: function onLoad() {
      this.$emit('load');
    },

    /**
     * 图片加载完成
     */
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * add事件
     *
     *  {image, serverId}
     */
    onAdd: function onAdd() {
      var $uploader = this.$refs.uploader;
      var images = $uploader.getImages();
      this.image = images[0].image;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['add'].concat(args));
    },

    /**
     * remove事件
     *
     *  {} 可能没有数据
     */
    onRemove: function onRemove() {
      this.image = null;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.$emit.apply(this, ['remove'].concat(args));
    }
  }
};
/* script */

var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "if-comp-uploader",
    class: {
      blank: _vm.blank
    }
  }, [_c("WechatUploader", {
    ref: "uploader",
    attrs: {
      size: 1,
      "can-modify": true,
      "container-class": ["loaderImg"],
      "container-style": {
        opacity: _vm.opacity,
        "z-index": 1,
        position: "relative"
      },
      "request-class": ["loaderImg"],
      "image-class": ["loaderImg"]
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "uploader-mock-background",
    style: _vm.backgroundStyle
  }, [_c("p", [_c("svg", {
    staticClass: "icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c("use", {
    attrs: {
      "xlink:href": "#iconxiangji1"
    }
  })])]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.hint))])])], 1);
};

var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;
/* style */

var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6bc96ab0_0", {
    source: ".if-comp-uploader {\n  position: relative;\n  width: 84px;\n  height: 84px;\n  border-radius: 3px;\n  border: 1px solid #eaeaea;\n  background-color: #fafafa;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.if-comp-uploader.blank {\n  border: 1px solid #fc4548;\n}\n.if-comp-uploader.blank .uploader-mock-background {\n  color: #fc4548;\n}\n.if-comp-uploader .icon {\n  font-size: 23px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-request.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n  margin-right: 0;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  position: relative;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .remove-wrapper {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  left: 0;\n  top: 61px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  line-height: 23px !important;\n  font-size: 14px !important;\n  left: 0;\n  top: 0 !important;\n  color: #666;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100% !important;\n  height: 0 !important;\n  content: '更换图片';\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 0 !important;\n  height: 0 !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.if-comp-uploader .loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .upLoaderImg {\n  width: 84px;\n  height: 84px;\n  position: absolute;\n}\n.if-comp-uploader .uploader-mock-background {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #000;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n",
    map: {
      "version": 3,
      "sources": ["uploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,OAAO;EACP,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,0BAA0B;EAC1B,OAAO;EACP,iBAAiB;EACjB,WAAW;EACX,+CAA+C;AACjD;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;EACf,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,6CAA6C;AAC/C;AACA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,gCAAgC;AAClC",
      "file": "uploader.vue",
      "sourcesContent": [".if-comp-uploader {\n  position: relative;\n  width: 84px;\n  height: 84px;\n  border-radius: 3px;\n  border: 1px solid #eaeaea;\n  background-color: #fafafa;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.if-comp-uploader.blank {\n  border: 1px solid #fc4548;\n}\n.if-comp-uploader.blank .uploader-mock-background {\n  color: #fc4548;\n}\n.if-comp-uploader .icon {\n  font-size: 23px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-request.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n  margin-right: 0;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  position: relative;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .remove-wrapper {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  left: 0;\n  top: 61px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  line-height: 23px !important;\n  font-size: 14px !important;\n  left: 0;\n  top: 0 !important;\n  color: #666;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100% !important;\n  height: 0 !important;\n  content: '更换图片';\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 0 !important;\n  height: 0 !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.if-comp-uploader .loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .upLoaderImg {\n  width: 84px;\n  height: 84px;\n  position: absolute;\n}\n.if-comp-uploader .uploader-mock-background {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #000;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = undefined;
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, createInjector, undefined, undefined);

var script$a = {
  name: 'ItemUploader',
  components: {
    ItemTitle: __vue_component__,
    Uploader: __vue_component__$9
  },
  props: {
    value: {},
    title: {
      type: String
    },
    titleHint: {
      type: String
    },

    /** 上传函数 */
    httpRequest: {
      required: true,
      type: Function
    },

    /** 是否自动上传 */
    autoUpload: {
      type: Boolean,
      default: true
    },

    /** 是否通过验证 */
    isValiate: {
      type: Boolean,
      default: true
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      /** 是否已经上传过图片，当已经上传的情况下，将不会再触发上传。可能存在判断出错的情况 */
      hasUploaded: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 添加二维码
     */
    onAdd: function onAdd(_ref) {
      var image = _ref.image,
          serverId = _ref.serverId;
      var imageInfo = {
        key: serverId,
        url: image,
        mode: 'wechat'
      };

      if (this.autoUpload) {
        this.upload(imageInfo);
      } else {
        this.$emit('input', imageInfo);
      }
    },

    /**
     * 删除二维码
     */
    onRemove: function onRemove() {
      this.$emit('input', null);
      this.hasUploaded = false;
    },
    onLoad: function onLoad() {
      this.$emit('load');
    },
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * 上传流程
     */
    upload: function () {
      var _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                image = image || this.value;

                if (!(this.hasUploaded || !image)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return this.httpRequest(image);

              case 5:
                result = _context.sent; // @ts-ignore

                this.$refs.uploader.setImage(result.url);
                this.$emit('input', result);
                this.hasUploaded = true;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function upload(_x) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),

    /**
     * 生命周期
     */
    beforeSubmit: function () {
      var _beforeSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.upload();

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeSubmit() {
        return _beforeSubmit.apply(this, arguments);
      }

      return beforeSubmit;
    }()
  },
  mounted: function mounted() {
    if (this.value) {
      // @ts-ignore
      this.$refs.uploader.setImage(this.value.url); // 如果已经有数据情况下，认为已经上传了

      this.hasUploaded = true;
    }
  }
};
/* script */

var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-uploader clearfix"
  }, [_c("Uploader", {
    ref: "uploader",
    staticClass: "item-uploader__uploader fr",
    attrs: {
      black: !_vm.isValiate
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-uploader__title"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _vm.titleHint ? _c("div", {
    staticClass: "title-hint"
  }, [_vm._v(_vm._s(_vm.titleHint))]) : _vm._e()], 1)], 1);
};

var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;
/* style */

var __vue_inject_styles__$a = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-35f40721_0", {
    source: ".item-uploader {\n  padding: 20px 0 0px;\n  text-align: center;\n}\n.item-uploader .ro-uploader-wrap {\n  width: 72px;\n  height: 72px;\n}\n.item-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  background-size: cover;\n  background-position: center;\n}\n.item-uploader__uploader {\n  margin-top: 15px;\n}\n.item-uploader__title {\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #101010;\n  text-align: left;\n  overflow: hidden;\n}\n.item-uploader__title .item-title {\n  padding: 6px 0 0px;\n}\n.item-uploader__title .title-hint {\n  margin-top: 4px;\n  color: #999;\n}\n",
    map: {
      "version": 3,
      "sources": ["uploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,WAAW;AACb",
      "file": "uploader.vue",
      "sourcesContent": [".item-uploader {\n  padding: 20px 0 0px;\n  text-align: center;\n}\n.item-uploader .ro-uploader-wrap {\n  width: 72px;\n  height: 72px;\n}\n.item-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  background-size: cover;\n  background-position: center;\n}\n.item-uploader__uploader {\n  margin-top: 15px;\n}\n.item-uploader__title {\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #101010;\n  text-align: left;\n  overflow: hidden;\n}\n.item-uploader__title .item-title {\n  padding: 6px 0 0px;\n}\n.item-uploader__title .title-hint {\n  margin-top: 4px;\n  color: #999;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = undefined;
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, createInjector, undefined, undefined);

var WechatUploader$1 = factory$1(Vue__default['default'], {
  transformWXLocalImageData: true
});
var script$b = {
  name: 'ItemMultiUploader',
  components: {
    ItemTitle: __vue_component__,
    WechatUploader: WechatUploader$1
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },

    /** 数据 */
    value: {},
    size: {
      type: Number,
      default: 9
    },

    /** 上传函数 */
    httpRequest: {
      required: true,
      type: Function
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 数据开始加载
     */
    onLoad: function onLoad() {
      this.$emit('load');
    },

    /**
     * 图片加载完成
     */
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * add事件
     *
     *  {image, serverId}
     */
    onAdd: function onAdd() {
      var $uploader = this.$refs.uploader;
      var images = $uploader.getImages();
      this.$emit('input', images.map(function (image) {
        var info = {
          key: image.serverId,
          url: image.url,
          // @ts-ignore
          mode: image.mode || 'wechat'
        };
        return info;
      }));

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['add'].concat(args));
    },

    /**
     * remove事件
     *
     *  {} 可能没有数据
     */
    onRemove: function onRemove() {
      var $uploader = this.$refs.uploader;
      var images = $uploader.getImages();
      this.$emit('input', images.map(function (image) {
        var info = {
          key: image.key,
          url: image.url,
          // @ts-ignore
          mode: image.mode || 'wechat'
        };
        return info;
      }));

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.$emit.apply(this, ['remove'].concat(args));
    },

    /**
     * 完成上传
     */
    upload: function () {
      var _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var rdatas, i, len, rdata;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all((this.value || []).map(function (image) {
                  return image.mode === 'wechat' ? _this.httpRequest(image) : null;
                }));

              case 2:
                rdatas = _context.sent;
                i = 0, len = rdatas.length;

              case 4:
                if (!(i < len)) {
                  _context.next = 14;
                  break;
                }

                rdata = rdatas[i];

                if (!(rdata === null)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("continue", 11);

              case 8:
                this.value[i].key = rdata.key;
                this.value[i].url = rdata.url;
                this.value[i].mode = 'file';

              case 11:
                i++;
                _context.next = 4;
                break;

              case 14:
                this.$emit('input', this.value);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function upload() {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),

    /**
     * 生命周期
     */
    beforeSubmit: function () {
      var _beforeSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.upload();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeSubmit() {
        return _beforeSubmit.apply(this, arguments);
      }

      return beforeSubmit;
    }()
  },
  mounted: function mounted() {
    if (this.value) {
      this.$refs.uploader.setImages(this.value.map(function (item) {
        return {
          image: item.url,
          serverId: item.key,
          mode: item.mode || 'file',
          key: item.key,
          url: item.url
        };
      }));
    }
  }
};
/* script */

var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-multi-uploader"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }, [_c("WechatUploader", {
    ref: "uploader",
    attrs: {
      size: _vm.size,
      "can-modify": true
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  })], 1)], 1);
};

var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;
/* style */

var __vue_inject_styles__$b = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-70a8527c_0", {
    source: ".item-multi-uploader .uploader-wrap {\n  padding: 8px 18px;\n}\n.item-multi-uploader .ro-uploader-wrap {\n  display: block;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  float: left;\n  position: relative;\n  margin-right: 0;\n  padding: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image {\n  vertical-align: middle;\n  width: 109px !important;\n  height: 109px !important;\n  background-position: center center;\n  border-radius: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 11px !important;\n  height: 11px !important;\n  font-size: 11px;\n  line-height: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  background-color: rgba(255, 255, 255, 0.8);\n  right: 6px;\n  top: 6px;\n  border-radius: 50%;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  background-color: #ccc;\n  transform: translate(-50%, -50%) rotateZ(45deg);\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  width: 1px;\n  height: 7px !important;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 7px !important;\n  height: 1px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request {\n  position: relative;\n  width: 109px !important;\n  height: 109px !important;\n  border: 1px dashed #ccc;\n  margin: 2px 0px 0px 2px;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  background-color: #ccc;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before {\n  width: 3px;\n  height: 36.33333333px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  width: 36.33333333px;\n  height: 3px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active {\n  border-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:after {\n  background-color: #999;\n}\n",
    map: {
      "version": 3,
      "sources": ["multiUploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EACxB,kCAAkC;EAClC,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,+BAA+B;EAC/B,0CAA0C;EAC1C,UAAU;EACV,QAAQ;EACR,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;EACtB,+CAA+C;AACjD;AACA;EACE,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;AACxB",
      "file": "multiUploader.vue",
      "sourcesContent": [".item-multi-uploader .uploader-wrap {\n  padding: 8px 18px;\n}\n.item-multi-uploader .ro-uploader-wrap {\n  display: block;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  float: left;\n  position: relative;\n  margin-right: 0;\n  padding: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image {\n  vertical-align: middle;\n  width: 109px !important;\n  height: 109px !important;\n  background-position: center center;\n  border-radius: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 11px !important;\n  height: 11px !important;\n  font-size: 11px;\n  line-height: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  background-color: rgba(255, 255, 255, 0.8);\n  right: 6px;\n  top: 6px;\n  border-radius: 50%;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  background-color: #ccc;\n  transform: translate(-50%, -50%) rotateZ(45deg);\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  width: 1px;\n  height: 7px !important;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 7px !important;\n  height: 1px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request {\n  position: relative;\n  width: 109px !important;\n  height: 109px !important;\n  border: 1px dashed #ccc;\n  margin: 2px 0px 0px 2px;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  background-color: #ccc;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before {\n  width: 3px;\n  height: 36.33333333px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  width: 36.33333333px;\n  height: 3px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active {\n  border-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:after {\n  background-color: #999;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = undefined;
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, createInjector, undefined, undefined);

var WechatUploader$2 = factory$1(Vue__default['default'], {
  transformWXLocalImageData: true
});
var InputUploader = factory$2(Vue__default['default']);
/**
 * 班级头像上传逻辑
 *
 * - @add 数据添加
 * - @remove 数据删除
 */

var script$c = {
  name: 'CommonUploader',
  components: {
    WechatUploader: WechatUploader$2,
    InputUploader: InputUploader
  },
  props: {
    /** 提示内容 */
    hint: {
      type: String
    },

    /** 背景样式类 */
    backgroundStyle: {
      type: [Object, Array]
    },

    /** 是否未填写 */
    blank: {
      type: Boolean,
      default: false
    },

    /** 类型 */
    type: {
      type: String,
      default: 'wechat'
    },

    /** 接受的文件类型，默认为 image/* ，只支持InputUploader中生效 */
    accept: {
      type: String,
      default: 'image/*'
    }
  },
  data: function data() {
    return {
      // 图片内容
      image: null
    };
  },
  computed: {
    opacity: function opacity() {
      return this.image ? 1 : 0;
    }
  },
  watch: {},
  methods: {
    /**
     * 获得元素
     *
     * @return {} uploader
     */
    getImage: function getImage() {
      return this.image;
    },

    /**
     * 设置头像
     *
     * @param {} image 头像内容
     */
    setImage: function setImage(image) {
      var $uploader = this.$refs.uploader;
      $uploader.setImages([{
        url: image,
        image: image
      }]);
      this.image = image;
    },

    /**
     * 删除当前的图片信息
     */
    removeImage: function removeImage() {
      var $uploader = this.$refs.uploader;
      $uploader.setImages([]);
    },

    /**
     * 数据开始加载
     */
    onLoad: function onLoad() {
      this.$emit('load');
    },

    /**
     * 图片加载完成
     */
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * add事件
     *
     *  {image, serverId}
     */
    onAdd: function onAdd() {
      var $uploader = this.$refs.uploader;
      var images = $uploader.getImages();
      this.image = images[0].url;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['add'].concat(args));
    },

    /**
     * remove事件
     *
     *  {} 可能没有数据
     */
    onRemove: function onRemove() {
      this.image = null;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.$emit.apply(this, ['remove'].concat(args));
    }
  }
};
/* script */

var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "if-comp-uploader",
    class: {
      blank: _vm.blank
    }
  }, [_vm.type === "wechat" ? _c("WechatUploader", {
    ref: "uploader",
    attrs: {
      size: 1,
      "can-modify": true,
      "container-class": ["loaderImg"],
      "container-style": {
        opacity: _vm.opacity,
        "z-index": 1,
        position: "relative"
      },
      "request-class": ["loaderImg"],
      "image-class": ["loaderImg"]
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  }) : _vm.type === "input" ? _c("InputUploader", {
    ref: "uploader",
    attrs: {
      size: 1,
      "can-modify": true,
      accept: _vm.accept,
      "container-class": ["loaderImg"],
      "container-style": {
        opacity: _vm.opacity,
        "z-index": 1,
        position: "relative"
      },
      "request-class": ["loaderImg"],
      "image-class": ["loaderImg"]
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "uploader-mock-background",
    style: _vm.backgroundStyle
  }, [_c("p", [_c("svg", {
    staticClass: "icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c("use", {
    attrs: {
      "xlink:href": "#iconxiangji1"
    }
  })])]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.hint))])])], 1);
};

var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;
/* style */

var __vue_inject_styles__$c = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-c51fdef6_0", {
    source: ".if-comp-uploader {\n  position: relative;\n  width: 84px;\n  height: 84px;\n  border-radius: 3px;\n  border: 1px solid #eaeaea;\n  background-color: #fafafa;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.if-comp-uploader.blank {\n  border: 1px solid #fc4548;\n}\n.if-comp-uploader.blank .uploader-mock-background {\n  color: #fc4548;\n}\n.if-comp-uploader .icon {\n  font-size: 23px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-request.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n  margin-right: 0;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  position: relative;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .remove-wrapper {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  left: 0;\n  top: 61px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  line-height: 23px !important;\n  font-size: 14px !important;\n  left: 0;\n  top: 0 !important;\n  color: #666;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100% !important;\n  height: 0 !important;\n  content: '更换图片';\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 0 !important;\n  height: 0 !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.if-comp-uploader .loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .upLoaderImg {\n  width: 84px;\n  height: 84px;\n  position: absolute;\n}\n.if-comp-uploader .uploader-mock-background {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #000;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n",
    map: {
      "version": 3,
      "sources": ["commonUploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,OAAO;EACP,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,0BAA0B;EAC1B,OAAO;EACP,iBAAiB;EACjB,WAAW;EACX,+CAA+C;AACjD;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;EACf,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,6CAA6C;AAC/C;AACA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,gCAAgC;AAClC",
      "file": "commonUploader.vue",
      "sourcesContent": [".if-comp-uploader {\n  position: relative;\n  width: 84px;\n  height: 84px;\n  border-radius: 3px;\n  border: 1px solid #eaeaea;\n  background-color: #fafafa;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.if-comp-uploader.blank {\n  border: 1px solid #fc4548;\n}\n.if-comp-uploader.blank .uploader-mock-background {\n  color: #fc4548;\n}\n.if-comp-uploader .icon {\n  font-size: 23px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-request.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n  margin-right: 0;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  position: relative;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .remove-wrapper {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  left: 0;\n  top: 61px;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  line-height: 23px !important;\n  font-size: 14px !important;\n  left: 0;\n  top: 0 !important;\n  color: #666;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100% !important;\n  height: 0 !important;\n  content: '更换图片';\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 0 !important;\n  height: 0 !important;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.if-comp-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.if-comp-uploader .loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.if-comp-uploader .upLoaderImg {\n  width: 84px;\n  height: 84px;\n  position: absolute;\n}\n.if-comp-uploader .uploader-mock-background {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #000;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = undefined;
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, createInjector, undefined, undefined);

var script$d = {
  name: 'ItemCommonUploader',
  components: {
    ItemTitle: __vue_component__,
    CommonUploader: __vue_component__$c
  },
  props: {
    value: {},
    title: {
      type: String
    },
    titleHint: {
      type: String
    },

    /** 上传函数 */
    httpRequest: {
      required: true,
      type: Function
    },

    /** 是否自动上传 */
    autoUpload: {
      type: Boolean,
      default: true
    },

    /** 是否通过验证 */
    isValiate: {
      type: Boolean,
      default: true
    },

    /** 显示星号 */
    asterisk: {
      type: Boolean,
      default: false
    },

    /** 类型 */
    type: {
      type: String,
      default: 'wechat'
    },

    /** 接受的文件类型，默认为 image/* ，只支持InputUploader中生效 */
    accept: {
      type: String,
      default: 'image/*'
    }
  },
  data: function data() {
    return {
      /** 是否已经上传过图片，当已经上传的情况下，将不会再触发上传。可能存在判断出错的情况 */
      hasUploaded: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 添加二维码
     */
    onAdd: function onAdd(image) {
      if (this.autoUpload) {
        this.upload(image);
      } else {
        this.$emit('input', image);
      }
    },

    /**
     * 删除二维码
     */
    onRemove: function onRemove() {
      this.$emit('input', null);
      this.hasUploaded = false;
    },
    onLoad: function onLoad() {
      this.$emit('load');
    },
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * 上传流程
     */
    upload: function () {
      var _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.hasUploaded || !image)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return this.httpRequest(image);

              case 4:
                result = _context.sent; // @ts-ignore

                this.$refs.uploader.setImage(result.url);
                this.$emit('input', result);
                this.hasUploaded = true;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function upload(_x) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),

    /**
     * 生命周期
     */
    beforeSubmit: function () {
      var _beforeSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.upload();

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeSubmit() {
        return _beforeSubmit.apply(this, arguments);
      }

      return beforeSubmit;
    }()
  },
  mounted: function mounted() {
    if (this.value) {
      // @ts-ignore
      this.$refs.uploader.setImage(this.value.url); // 如果已经有数据情况下，认为已经上传了

      this.hasUploaded = true;
    }
  }
};
/* script */

var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-uploader clearfix"
  }, [_c("CommonUploader", {
    ref: "uploader",
    staticClass: "item-uploader__uploader fr",
    attrs: {
      black: !_vm.isValiate,
      type: _vm.type,
      accept: _vm.accept
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-uploader__title"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint,
      "is-required": _vm.asterisk
    }
  }), _vm._v(" "), _vm.titleHint ? _c("div", {
    staticClass: "title-hint"
  }, [_vm._v(_vm._s(_vm.titleHint))]) : _vm._e()], 1)], 1);
};

var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;
/* style */

var __vue_inject_styles__$d = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4d107312_0", {
    source: ".item-uploader {\n  padding: 20px 0 0px;\n  text-align: center;\n}\n.item-uploader .ro-uploader-wrap {\n  width: 72px;\n  height: 72px;\n}\n.item-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  background-size: cover;\n  background-position: center;\n}\n.item-uploader__uploader {\n  margin-top: 15px;\n}\n.item-uploader__title {\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #101010;\n  text-align: left;\n  overflow: hidden;\n}\n.item-uploader__title .item-title {\n  padding: 6px 0 0px;\n}\n.item-uploader__title .title-hint {\n  margin-top: 4px;\n  color: #999;\n}\n",
    map: {
      "version": 3,
      "sources": ["commonUploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,WAAW;AACb",
      "file": "commonUploader.vue",
      "sourcesContent": [".item-uploader {\n  padding: 20px 0 0px;\n  text-align: center;\n}\n.item-uploader .ro-uploader-wrap {\n  width: 72px;\n  height: 72px;\n}\n.item-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  background-size: cover;\n  background-position: center;\n}\n.item-uploader__uploader {\n  margin-top: 15px;\n}\n.item-uploader__title {\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #101010;\n  text-align: left;\n  overflow: hidden;\n}\n.item-uploader__title .item-title {\n  padding: 6px 0 0px;\n}\n.item-uploader__title .title-hint {\n  margin-top: 4px;\n  color: #999;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = undefined;
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, createInjector, undefined, undefined);

exports.ItemButtonGroup = __vue_component__$1;
exports.ItemCascader = __vue_component__$3;
exports.ItemCommonUploader = __vue_component__$d;
exports.ItemInput = __vue_component__$4;
exports.ItemList = __vue_component__$6;
exports.ItemMultiUploader = __vue_component__$b;
exports.ItemSelect = __vue_component__$7;
exports.ItemTextarea = __vue_component__$8;
exports.ItemTitle = __vue_component__;
exports.ItemUploader = __vue_component__$a;
