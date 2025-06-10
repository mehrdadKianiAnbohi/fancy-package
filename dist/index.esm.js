import $dbSRa$react, { useRef, useCallback, useState, useContext, useEffect, useMemo, createContext, forwardRef, cloneElement } from 'react';
import $4AOtR$reactdom, { flushSync } from 'react-dom';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=$dbSRa$react,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = $dbSRa$react;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? ($dbSRa$react).useLayoutEffect : ()=>{};

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (useRef)(null);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (useState)(defaultValue);
    let effect = (useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ ($dbSRa$react).createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /*#__PURE__*/ ($dbSRa$react).createContext(false);
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ($dbSRa$react).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM && process.env.NODE_ENV !== 'production') console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && process.env.NODE_ENV === 'test' ? 'react-aria' : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    let id = ($dbSRa$react).useId();
    let [didSSR] = (useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || process.env.NODE_ENV === 'test' ? 'react-aria' : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof ($dbSRa$react)['useId'] === 'function' ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof ($dbSRa$react)['useSyncExternalStore'] === 'function') return ($dbSRa$react)['useSyncExternalStore']($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (useContext)($b5e257d569688ac6$var$IsSSRContext);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$export$d41a04c74483c6ef = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let $bdb11010cef70236$var$registry;
if (typeof FinalizationRegistry !== 'undefined') $bdb11010cef70236$var$registry = new FinalizationRegistry((heldValue)=>{
    $bdb11010cef70236$export$d41a04c74483c6ef.delete(heldValue);
});
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (useState)(defaultId);
    let nextId = (useRef)(null);
    let res = ($b5e257d569688ac6$export$619500959fc48b26)(value);
    let cleanupRef = (useRef)(null);
    if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.register(cleanupRef, res);
    if ($bdb11010cef70236$var$canUseDOM) {
        const cacheIdRef = $bdb11010cef70236$export$d41a04c74483c6ef.get(res);
        if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
        else $bdb11010cef70236$export$d41a04c74483c6ef.set(res, [
            nextId
        ]);
    }
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.unregister(cleanupRef);
            $bdb11010cef70236$export$d41a04c74483c6ef.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $bdb11010cef70236$export$d41a04c74483c6ef.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = $bdb11010cef70236$export$d41a04c74483c6ef.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = ($1dbecbe27a04f9af$export$14d238f342723f25)(id);
    let updateId = (useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}

const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType property.
 */ function $431fbd86ca7dc216$var$isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
    return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in node;
}

let $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
    return $f4e2df6bd15f8569$var$_shadowDOM;
}

// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16


function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
    if (!($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (currentNode.tagName === 'SLOT' && currentNode.assignedSlot) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if (($431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document)=>{
    var _activeElement_shadowRoot;
    if (!($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement))activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
    if (($f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
        if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
}

// https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/ShadowTreeWalker.ts


class $dfc540311bf7f109$export$63eb3ababa9c55c4 {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(node) {
        if (!($d4ee10de306f2510$export$4282f70798064fe0)(this.root, node)) throw new Error('Cannot set currentNode to a node that is not contained by the root node.');
        const walkers = [];
        let curNode = node;
        let currentWalkerCurrentNode = node;
        this._currentNode = node;
        while(curNode && curNode !== this.root)if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            const shadowRoot = curNode;
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            walkers.push(walker);
            walker.currentNode = currentWalkerCurrentNode;
            this._currentSetFor.add(walker);
            curNode = currentWalkerCurrentNode = shadowRoot.host;
        } else curNode = curNode.parentNode;
        const walker = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
        });
        walkers.push(walker);
        walker.currentNode = currentWalkerCurrentNode;
        this._currentSetFor.add(walker);
        this._walkerStack = walkers;
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let currentNode = this.currentNode;
        let newNode = this.nextNode();
        if (!($d4ee10de306f2510$export$4282f70798064fe0)(currentNode, newNode)) {
            this.currentNode = currentNode;
            return null;
        }
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    lastChild() {
        let walker = this._walkerStack[0];
        let newNode = walker.lastChild();
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    nextNode() {
        const nextNode = this._walkerStack[0].nextNode();
        if (nextNode) {
            const shadowRoot = nextNode.shadowRoot;
            if (shadowRoot) {
                var _this_filter;
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(nextNode);
                else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    this.currentNode = nextNode;
                    return nextNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (nextNode) this.currentNode = nextNode;
            return nextNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    previousNode() {
        const currentWalker = this._walkerStack[0];
        if (currentWalker.currentNode === currentWalker.root) {
            if (this._currentSetFor.has(currentWalker)) {
                this._currentSetFor.delete(currentWalker);
                if (this._walkerStack.length > 1) {
                    this._walkerStack.shift();
                    let newNode = this.previousNode();
                    if (newNode) this.currentNode = newNode;
                    return newNode;
                } else return null;
            }
            return null;
        }
        const previousNode = currentWalker.previousNode();
        if (previousNode) {
            const shadowRoot = previousNode.shadowRoot;
            if (shadowRoot) {
                var _this_filter;
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(previousNode);
                else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    if (previousNode) this.currentNode = previousNode;
                    return previousNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.lastChild();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (previousNode) this.currentNode = previousNode;
            return previousNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.previousNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    /**
     * @deprecated
     */ nextSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ previousSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ parentNode() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    constructor(doc, root, whatToShow, filter){
        this._walkerStack = [];
        this._currentSetFor = new Set();
        this._acceptNode = (node)=>{
            if (node.nodeType === Node.ELEMENT_NODE) {
                const shadowRoot = node.shadowRoot;
                if (shadowRoot) {
                    const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                        acceptNode: this._acceptNode
                    });
                    this._walkerStack.unshift(walker);
                    return NodeFilter.FILTER_ACCEPT;
                } else {
                    var _this_filter;
                    if (typeof this.filter === 'function') return this.filter(node);
                    else if ((_this_filter = this.filter) === null || _this_filter === void 0 ? void 0 : _this_filter.acceptNode) return this.filter.acceptNode(node);
                    else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
                }
            }
            return NodeFilter.FILTER_SKIP;
        };
        this._doc = doc;
        this.root = root;
        this.filter = filter !== null && filter !== void 0 ? filter : null;
        this.whatToShow = whatToShow !== null && whatToShow !== void 0 ? whatToShow : NodeFilter.SHOW_ALL;
        this._currentNode = root;
        this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
        const shadowRoot = root.shadowRoot;
        if (shadowRoot) {
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(walker);
        }
    }
}
function $dfc540311bf7f109$export$4d0f8be8b12a7ef6(doc, root, whatToShow, filter) {
    if (($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return new $dfc540311bf7f109$export$63eb3ababa9c55c4(doc, root, whatToShow, filter);
    return doc.createTreeWalker(root, whatToShow, filter);
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = ($ff5963eb1fccf552$export$e08e3b67e392101e)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (clsx)(a, b);
            else if (key === 'id' && a && b) result.id = ($bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = $5dc95899b306f630$var$setRef(ref, value);
            hasCleanup || (hasCleanup = typeof cleanup == 'function');
            return cleanup;
        });
        if (hasCleanup) return ()=>{
            cleanups.forEach((cleanup, i)=>{
                if (typeof cleanup === 'function') cleanup();
                else $5dc95899b306f630$var$setRef(refs[i], null);
            });
        };
    };
}
function $5dc95899b306f630$var$setRef(ref, value) {
    if (typeof ref === 'function') return ref(value);
    else if (ref != null) ref.current = value;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch  {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
    if (process.env.NODE_ENV === 'test') return fn;
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
$c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
const $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
const $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if (($c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith('key')) && target.target === '_blank') {
        if (($c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = ($c87311424ea30a05$export$78551043582a6a98)() && ($c87311424ea30a05$export$9ac100e40613ea10)() && !($c87311424ea30a05$export$7bef049ce92e4224)() && process.env.NODE_ENV !== 'test' ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    ($7215afc6de606d6b$export$de79e2c695e052f3)(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
/**
 * Cleans up any elements that are no longer in the document.
 * This is necessary because we can't rely on transitionend events to fire
 * for elements that are removed from the document while transitioning.
 */ function $bbed8b41f857bcc0$var$cleanupDetachedElements() {
    for (const [eventTarget] of $bbed8b41f857bcc0$var$transitionsByElement)// Similar to `eventTarget instanceof Element && !eventTarget.isConnected`, but avoids
    // the explicit instanceof check, since it may be different in different contexts.
    if ('isConnected' in eventTarget && !eventTarget.isConnected) $bbed8b41f857bcc0$var$transitionsByElement.delete(eventTarget);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        $bbed8b41f857bcc0$var$cleanupDetachedElements();
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (useRef)(new Map());
    let addGlobalListener = (useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = ($bdb11010cef70236$export$f680877a34711e37)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(ref) {
    const objRef = (useRef)(null);
    const cleanupRef = (useRef)(undefined);
    const refEffect = (useCallback)((instance)=>{
        if (typeof ref === 'function') {
            const refCallback = ref;
            const refCleanup = refCallback(instance);
            return ()=>{
                if (typeof refCleanup === 'function') refCleanup();
                else refCallback(null);
            };
        } else if (ref) {
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        }
    }, [
        ref
    ]);
    return (useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (cleanupRef.current) {
                    cleanupRef.current();
                    cleanupRef.current = undefined;
                }
                if (value != null) cleanupRef.current = refEffect(value);
            }
        }), [
        refEffect
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (useRef)(true);
    const lastDeps = (useRef)(null);
    (useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (useEffect)(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}

function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref, box: box, onResize: onResize } = options;
    (useEffect)(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element, {
                box: box
            });
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref,
        box
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if (($cc38e7bd3fc7b213$export$2bb74740c4e19def)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !($cc38e7bd3fc7b213$export$2bb74740c4e19def)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
    const scrollParents = [];
    while(node && node !== document.documentElement){
        if (($cc38e7bd3fc7b213$export$2bb74740c4e19def)(node, checkForOverflow)) scrollParents.push(node);
        node = node.parentElement;
    }
    return scrollParents;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $5df64b3807dc15ee$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let isSSR = ($b5e257d569688ac6$export$535bd6ca7f90a273)();
    let [size, setSize] = (useState)(()=>isSSR ? {
            width: 0,
            height: 0
        } : $5df64b3807dc15ee$var$getViewportSize());
    (useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener('resize', onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener('resize', onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: $5df64b3807dc15ee$var$visualViewport && ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: $5df64b3807dc15ee$var$visualViewport && ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (useState)();
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)(handler);
    let isDisabled = handler == null;
    (useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left + scroll padding
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth, scrollPaddingTop: scrollPaddingTop, scrollPaddingRight: scrollPaddingRight, scrollPaddingBottom: scrollPaddingBottom, scrollPaddingLeft: scrollPaddingLeft } = getComputedStyle(scrollView);
    let borderAdjustedX = x + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = y + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    // Get scroll padding values as pixels - defaults to 0 if no scroll padding
    // is used.
    let scrollPaddingTopNumber = parseInt(scrollPaddingTop, 10) || 0;
    let scrollPaddingBottomNumber = parseInt(scrollPaddingBottom, 10) || 0;
    let scrollPaddingRightNumber = parseInt(scrollPaddingRight, 10) || 0;
    let scrollPaddingLeftNumber = parseInt(scrollPaddingLeft, 10) || 0;
    if (offsetX <= x + scrollPaddingLeftNumber) x = offsetX - parseInt(borderLeftWidth, 10) - scrollPaddingLeftNumber;
    else if (offsetX + width > maxX - scrollPaddingRightNumber) x += offsetX + width - maxX + scrollPaddingRightNumber;
    if (offsetY <= borderAdjustedY + scrollPaddingTopNumber) y = offsetY - parseInt(borderTopWidth, 10) - scrollPaddingTopNumber;
    else if (offsetY + height > maxY - scrollPaddingBottomNumber) y += offsetY + height - maxY + scrollPaddingBottomNumber;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (targetElement && document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: 'nearest'
                });
            }
        } else {
            let scrollParents = ($a40c673dc9f6d9c7$export$94ed1c92c7beeb22)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            for (let scrollParent of scrollParents)$2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
        }
    }
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if (($c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !($c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (useRef)(initialValue);
    let handleReset = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $d3f049242431219c$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (useState)(true);
    let isAnimationReady = isEntering && isReady;
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    $d3f049242431219c$var$useAnimation(ref, isAnimationReady, (useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function $d3f049242431219c$export$45fda7c47f93fd48(ref, isOpen) {
    let [exitState, setExitState] = (useState)(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    $d3f049242431219c$var$useAnimation(ref, isExiting, (useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function $d3f049242431219c$var$useAnimation(ref, isActive, onEnd) {
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.all(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (flushSync)(()=>{
                    onEnd();
                });
            }).catch(()=>{});
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}

const $b4b717babfbb907b$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])'
];
const $b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$b4b717babfbb907b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $b4b717babfbb907b$export$4c063cf1350e6fed(element) {
    return element.matches($b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR);
}
function $b4b717babfbb907b$export$bebd5a1431fec25d(element) {
    return element.matches($b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (useState)(value || defaultValue);
    let isControlledRef = (useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && process.env.NODE_ENV !== 'production') console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that
            // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === 'function') {
            if (process.env.NODE_ENV !== 'production') console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = ()=>event.defaultPrevented;
    // cancelBubble is technically deprecated in the spec, but still supported in all browsers.
    event.isPropagationStopped = ()=>event.cancelBubble;
    event.persist = ()=>{};
    return event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, 'target', {
        value: target
    });
    Object.defineProperty(event, 'currentTarget', {
        value: target
    });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) {
                    // For backward compatibility, dispatch a (fake) React synthetic event.
                    let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e);
                    dispatchBlur(event);
                }
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
function $8a9cb279dc87e130$export$cabe61c495ee3649(target) {
    // The browser will focus the nearest focusable ancestor of our target.
    while(target && !($b4b717babfbb907b$export$4c063cf1350e6fed)(target))target = target.parentElement;
    let window = ($431fbd86ca7dc216$export$f21a1ffae260145a)(target);
    let activeElement = window.document.activeElement;
    if (!activeElement || activeElement === target) return;
    $8a9cb279dc87e130$export$fda7da73ab5d4c48 = true;
    let isRefocusing = false;
    let onBlur = (e)=>{
        if (e.target === activeElement || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e)=>{
        if (e.target === activeElement || isRefocusing) {
            e.stopImmediatePropagation();
            // If there was no focusable ancestor, we don't expect a focus event.
            // Re-focus the original active element here.
            if (!target && !isRefocusing) {
                isRefocusing = true;
                ($7215afc6de606d6b$export$de79e2c695e052f3)(activeElement);
                cleanup();
            }
        }
    };
    let onFocus = (e)=>{
        if (e.target === target || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e)=>{
        if (e.target === target || isRefocusing) {
            e.stopImmediatePropagation();
            if (!isRefocusing) {
                isRefocusing = true;
                ($7215afc6de606d6b$export$de79e2c695e052f3)(activeElement);
                cleanup();
            }
        }
    };
    window.addEventListener('blur', onBlur, true);
    window.addEventListener('focusout', onFocusOut, true);
    window.addEventListener('focusin', onFocusIn, true);
    window.addEventListener('focus', onFocus, true);
    let cleanup = ()=>{
        cancelAnimationFrame(raf);
        window.removeEventListener('blur', onBlur, true);
        window.removeEventListener('focusout', onFocusOut, true);
        window.removeEventListener('focusin', onFocusIn, true);
        window.removeEventListener('focus', onFocus, true);
        $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
        isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = 'default';
let $14c0b72509d70225$var$savedUserSelect = '';
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if (($c87311424ea30a05$export$fedb369cb70207f1)()) {
        if ($14c0b72509d70225$var$state === 'default') {
            const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(target);
            $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        $14c0b72509d70225$var$state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style[property]);
        target.style[property] = 'none';
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if (($c87311424ea30a05$export$fedb369cb70207f1)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== 'disabled') return;
        $14c0b72509d70225$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            ($bbed8b41f857bcc0$export$24490316f764c430)(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === 'restoring') {
                    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || '';
                    $14c0b72509d70225$var$savedUserSelect = '';
                    $14c0b72509d70225$var$state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
            if (target.style[property] === 'none') target.style[property] = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = ($dbSRa$react).createContext({
    register: ()=>{}
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = 'PressResponderContext';

function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);

    return descriptor.value;
}

function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

    return privateMap.get(receiver);
}

function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}

function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}

function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}

function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}

function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions









function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (useContext)(($ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    if (context) {
        let { register: register, ...contextProps } = context;
        props = ($3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
        register();
    }
    ($e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (_class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent, state){
        (_class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        var _state_target;
        let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
        const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
        let x, y = 0;
        let clientX, clientY = null;
        if (originalEvent.clientX != null && originalEvent.clientY != null) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
        }
        if (rect) {
            if (clientX != null && clientY != null) {
                x = clientX - rect.left;
                y = clientY - rect.top;
            } else {
                x = rect.width / 2;
                y = rect.height / 2;
            }
        }
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
        this.x = x;
        this.y = y;
    }
}
const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol('linkClicked');
const $f6c31cce2adf654f$var$STYLE_ID = 'react-aria-pressable-style';
const $f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE = 'data-react-aria-pressable';
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, onClick: onClick, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, ref: domRef, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (useState)(false);
    let ref = (useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null,
        disposables: []
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let triggerPressStart = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressstart', pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent('pressend', pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent('press', pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    });
    let triggerPressUp = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new $f6c31cce2adf654f$var$PressEvent('pressup', pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        }
    });
    let cancelOnPointerExit = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let triggerClick = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    });
    let triggerSyntheticClick = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e, target)=>{
        // Some third-party libraries pass in onClick instead of onPress.
        // Create a fake mouse event and trigger onClick as well.
        // This matches the browser's native activation behavior for certain elements (e.g. button).
        // https://html.spec.whatwg.org/#activation
        // https://html.spec.whatwg.org/#fire-a-synthetic-pointer-event
        if (onClick) {
            let event = new MouseEvent('click', e);
            ($8a9cb279dc87e130$export$c2b7abe5d61ec696)(event, target);
            onClick(($8a9cb279dc87e130$export$525bc4921d56d4a)(event));
        }
    });
    let pressProps = (useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && ($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) {
                    var _state_metaKeyEvents;
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent), e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        state.pointerType = 'keyboard';
                        shouldStopPropagation = triggerPressStart(e, 'keyboard');
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                        // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                        let originalTarget = e.currentTarget;
                        let pressUp = (e)=>{
                            if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && ($d4ee10de306f2510$export$4282f70798064fe0)(originalTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e)) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard');
                        };
                        addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'keyup', ($ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && ($c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
                } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !($ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || ($6a7db85432448f7f$export$60278871457622de)(e.nativeEvent))) {
                        let stopPressStart = triggerPressStart(e, 'virtual');
                        let stopPressUp = triggerPressUp(e, 'virtual');
                        let stopPressEnd = triggerPressEnd(e, 'virtual');
                        triggerClick(e);
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    } else if (state.isPressed && state.pointerType !== 'keyboard') {
                        let pointerType = state.pointerType || e.nativeEvent.pointerType || 'virtual';
                        shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createEvent(e.currentTarget, e), pointerType, true);
                        state.isOverTarget = false;
                        triggerClick(e);
                        cancel(e);
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            var _state_metaKeyEvents;
            if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                var _state_metaKeyEvents1;
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e), e.key)) e.preventDefault();
                let target = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e);
                let wasPressed = ($d4ee10de306f2510$export$4282f70798064fe0)(state.target, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e));
                triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), 'keyboard', wasPressed);
                if (wasPressed) triggerSyntheticClick(e, state.target);
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== 'Enter' && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && ($d4ee10de306f2510$export$4282f70798064fe0)(state.target, target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
                    ($ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e, false);
                }
                state.isPressed = false;
                (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
            } else if (e.key === 'Meta' && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
                var _state_target;
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())(_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent('keyup', event));
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if (($6a7db85432448f7f$export$29bf1b5f2c56cf63)(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    // Release pointer capture so that touch interactions can leave the original target.
                    // This enables onPointerLeave and onPointerEnter to fire.
                    let target = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent);
                    if ('releasePointerCapture' in target) target.releasePointerCapture(e.pointerId);
                    addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'pointerup', onPointerUp, false);
                    addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'pointercancel', onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (e.button === 0) {
                    if (preventFocusOnPress) {
                        let dispose = ($8a9cb279dc87e130$export$cabe61c495ee3649)(e.target);
                        if (dispose) state.disposables.push(dispose);
                    }
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) || state.pointerType === 'virtual') return;
                // Only handle left clicks
                if (e.button === 0) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            pressProps.onPointerEnter = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = true;
                    triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                }
            };
            pressProps.onPointerLeave = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if (($d4ee10de306f2510$export$4282f70798064fe0)(state.target, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e)) && state.pointerType != null) {
                        // Wait for onClick to fire onPress. This avoids browser issues when the DOM
                        // is mutated between onPointerUp and onClick, and is more compatible with third party libraries.
                        // https://github.com/adobe/react-spectrum/issues/1513
                        // https://issues.chromium.org/issues/40732224
                        // However, iOS and Android do not focus or fire onClick after a long press.
                        // We work around this by triggering a click ourselves after a timeout.
                        // This timeout is canceled during the click event in case the real one fires first.
                        // The timeout must be at least 32ms, because Safari on iOS delays the click event on
                        // non-form elements without certain ARIA roles (for hover emulation).
                        // https://github.com/WebKit/WebKit/blob/dccfae42bb29bd4bdef052e469f604a9387241c0/Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm#L875-L892
                        let clicked = false;
                        let timeout = setTimeout(()=>{
                            if (state.isPressed && state.target instanceof HTMLElement) {
                                if (clicked) cancel(e);
                                else {
                                    ($7215afc6de606d6b$export$de79e2c695e052f3)(state.target);
                                    state.target.click();
                                }
                            }
                        }, 80);
                        // Use a capturing listener to track if a click occurred.
                        // If stopPropagation is called it may never reach our handler.
                        addGlobalListener(e.currentTarget, 'click', ()=>clicked = true, true);
                        state.disposables.push(()=>clearTimeout(timeout));
                    } else cancel(e);
                    // Ignore subsequent onPointerLeave event before onClick on touch devices.
                    state.isOverTarget = false;
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else if (process.env.NODE_ENV === 'test') {
            // NOTE: this fallback branch is entirely used by unit tests.
            // All browsers now support pointer events, but JSDOM still does not.
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = ($6a7db85432448f7f$export$60278871457622de)(e.nativeEvent) ? 'virtual' : 'mouse';
                // Flush sync so that focus moved during react re-renders occurs before we yield back to the browser.
                let shouldStopPropagation = (flushSync)(()=>triggerPressStart(e, state.pointerType));
                if (shouldStopPropagation) e.stopPropagation();
                if (preventFocusOnPress) {
                    let dispose = ($8a9cb279dc87e130$export$cabe61c495ee3649)(e.target);
                    if (dispose) state.disposables.push(dispose);
                }
                addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), 'mouseup', onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || 'mouse');
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if (state.target && state.target.contains(e.target) && state.pointerType != null) ;
                else cancel(e);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = 'touch';
                if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$16a4697467175487)(state.target);
                let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener(($431fbd86ca7dc216$export$f21a1ffae260145a)(e.currentTarget), 'scroll', onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
                    triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
                    triggerSyntheticClick(e.nativeEvent, state.target);
                } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (state.target && !allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                e.stopPropagation();
                if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
            };
            let onScroll = (e)=>{
                if (state.isPressed && ($d4ee10de306f2510$export$4282f70798064fe0)(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e), state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!($d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp,
        triggerClick,
        triggerSyntheticClick
    ]);
    // Avoid onClick delay for double tap to zoom by default.
    (useEffect)(()=>{
        if (!domRef || process.env.NODE_ENV === 'test') return;
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(domRef.current);
        if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($f6c31cce2adf654f$var$STYLE_ID)) return;
        const style = ownerDocument.createElement('style');
        style.id = $f6c31cce2adf654f$var$STYLE_ID;
        // touchAction: 'manipulation' is supposed to be equivalent, but in
        // Safari it causes onPointerCancel not to fire on scroll.
        // https://bugs.webkit.org/show_bug.cgi?id=240917
        style.textContent = `
@layer {
  [${$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
        ownerDocument.head.prepend(style);
    }, [
        domRef
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    (useEffect)(()=>{
        let state = ref.current;
        return ()=>{
            var _state_target;
            if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)((_state_target = state.target) !== null && _state_target !== void 0 ? _state_target : undefined);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps, {
            [$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE]: true
        })
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key, code: code } = event;
    const element = currentTarget;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof ($431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof ($431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === 'link' || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== 'Enter');
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
    let clientX = 0;
    let clientY = 0;
    if (e.targetTouches && e.targetTouches.length === 1) {
        clientX = e.targetTouches[0].clientX;
        clientY = e.targetTouches[0].clientY;
    }
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
    if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
    return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !($c87311424ea30a05$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if (($6a7db85432448f7f$export$60278871457622de)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document || ($8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e.isTrusted) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    if ($8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === 'undefined' || typeof document === 'undefined' || $507fabe10e71c6fb$export$d90243b58daecda7.get(($431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    documentObject.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (process.env.NODE_ENV === 'test') {
        documentObject.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (process.env.NODE_ENV === 'test') {
        documentObject.removeEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== 'pointer';
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    let document1 = ($431fbd86ca7dc216$export$b204af158042fbac)(e === null || e === void 0 ? void 0 : e.target);
    const IHTMLInputElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
    // For keyboard events that occur on a non-input element that will move focus into input element (aka ArrowLeft going from Datepicker button to the main input group)
    // we need to rely on the user passing isTextInput into here. This way we can skip toggling focus visiblity for said input element
    isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (useEffect)(()=>{
        let handler = (modality, e)=>{
            // We want to early return for any keyboard events that occur inside text inputs EXCEPT for Tab and Escape
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $3ad3f6e1647bc98d$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    const activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
    if (($507fabe10e71c6fb$export$630ff653c5ada6a9)() === 'virtual') {
        let lastFocusedElement = activeElement;
        ($bbed8b41f857bcc0$export$24490316f764c430)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) === lastFocusedElement && element.isConnected) ($7215afc6de606d6b$export$de79e2c695e052f3)(element);
        });
    } else ($7215afc6de606d6b$export$de79e2c695e052f3)(element);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(e.target);
        const activeElement = ownerDocument ? ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) : ($d4ee10de306f2510$export$cd4e5573fbe2b576)();
        if (e.target === e.currentTarget && activeElement === ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return undefined;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                if (shouldStopPropagation && process.env.NODE_ENV !== 'production') console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
                else shouldStopPropagation = true;
            },
            continuePropagation () {
                shouldStopPropagation = false;
            },
            isPropagationStopped () {
                return shouldStopPropagation;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: ($93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
            onKeyUp: ($93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




let $f645667febf57a63$export$f9762fab77588ecb = /*#__PURE__*/ ($dbSRa$react).createContext(null);
function $f645667febf57a63$var$useFocusableContext(ref) {
    let context = (useContext)($f645667febf57a63$export$f9762fab77588ecb) || {};
    ($e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
function $f645667febf57a63$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps } = ($a1ea59d68270f0dd$export$f8168d8dd8fd66e6)(props);
    let { keyboardProps: keyboardProps } = ($46d819fcbaf35654$export$8f71654801c2f7cd)(props);
    let interactions = ($3ef42575df84b30b$export$9d1611c77c2fe928)(focusProps, keyboardProps);
    let domProps = $f645667febf57a63$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (useRef)(props.autoFocus);
    (useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) ($3ad3f6e1647bc98d$export$80f3e147d781571c)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    // Always set a tabIndex so that Safari allows focusing native buttons and inputs.
    let tabIndex = props.excludeFromTabOrder ? -1 : 0;
    if (props.isDisabled) tabIndex = undefined;
    return {
        focusableProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)({
            ...interactions,
            tabIndex: tabIndex
        }, interactionProps)
    };
}

function $f1ab8c75478c6f73$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ ($dbSRa$react).createElement(($ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
        value: context
    }, children);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (useRef)({
        isFocusWithin: false
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let onBlur = (useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(e.target);
        const activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                if (state.current.isFocusWithin && !($d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, e.target)) {
                    let nativeEvent = new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: e.target
                    });
                    ($8a9cb279dc87e130$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
                    let event = ($8a9cb279dc87e130$export$525bc4921d56d4a)(nativeEvent);
                    onBlur(event);
                }
            }, {
                capture: true
            });
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus,
        addGlobalListener,
        onBlur
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These cannot be null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
    else if (process.env.NODE_ENV === 'test') document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
        else if (process.env.NODE_ENV === 'test') document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (useState)(false);
    let state = (useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            // When an element that is hovered over is removed, no pointerleave event is fired by the browser,
            // even though the originally hovered target may have shrunk in size so it is no longer hovered.
            // However, a pointerover event will be fired on the new target the mouse is over.
            // In Chrome this happens immediately. In Safari and Firefox, it happens upon moving the mouse one pixel.
            addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(event.target), 'pointerover', (e)=>{
                if (state.isHovered && state.target && !($d4ee10de306f2510$export$4282f70798064fe0)(state.target, e.target)) triggerHoverEnd(e, e.pointerType);
            }, {
                capture: true
            });
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            let target = state.target;
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered || !target) return;
            state.isHovered = false;
            removeAllGlobalListeners();
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else if (process.env.NODE_ENV === 'test') {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state,
        addGlobalListener,
        removeAllGlobalListeners
    ]);
    (useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref, onInteractOutside: onInteractOutside, isDisabled: isDisabled, onInteractOutsideStart: onInteractOutsideStart } = props;
    let stateRef = (useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onClick = (e)=>{
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            // Use click instead of pointerup to avoid Android Chrome issue
            // https://issues.chromium.org/issues/40732224
            documentObject.addEventListener('pointerdown', onPointerDown, true);
            documentObject.addEventListener('click', onClick, true);
            return ()=>{
                documentObject.removeEventListener('pointerdown', onPointerDown, true);
                documentObject.removeEventListener('click', onClick, true);
            };
        } else if (process.env.NODE_ENV === 'test') {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            documentObject.addEventListener('mousedown', onPointerDown, true);
            documentObject.addEventListener('mouseup', onMouseUp, true);
            documentObject.addEventListener('touchstart', onPointerDown, true);
            documentObject.addEventListener('touchend', onTouchEnd, true);
            return ()=>{
                documentObject.removeEventListener('mousedown', onPointerDown, true);
                documentObject.removeEventListener('mouseup', onMouseUp, true);
                documentObject.removeEventListener('touchstart', onPointerDown, true);
                documentObject.removeEventListener('touchend', onTouchEnd, true);
            };
        }
    }, [
        ref,
        isDisabled,
        onPointerDown,
        triggerInteractOutside
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    if (event.target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (event.target.closest('[data-react-aria-top-layer]')) return false;
    }
    if (!ref.current) return false;
    // When the event source is inside a Shadow DOM, event.target is just the shadow root.
    // Using event.composedPath instead means we can get the actual element inside the shadow root.
    // This only works if the shadow root is open, there is no way to detect if it is closed.
    // If the event composed path contains the ref, interaction is inside.
    return !event.composedPath().includes(ref.current);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


// Locale passed from server by PackageLocalizationProvider.
const $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    let locale = typeof window !== 'undefined' && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: ($148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = ($b5e257d569688ac6$export$535bd6ca7f90a273)();
    let [defaultLocale, setDefaultLocale] = (useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ ($dbSRa$react).createContext(null);
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = ($1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $5b160d28a433310d$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $5b160d28a433310d$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $5b160d28a433310d$var$cachedGlobalStrings = undefined;
class $5b160d28a433310d$export$c17fa47878dc55b6 {
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $5b160d28a433310d$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === 'undefined') return null;
        let locale = window[$5b160d28a433310d$var$localeSymbol];
        if ($5b160d28a433310d$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$5b160d28a433310d$var$stringsSymbol];
            if (!globalStrings) return null;
            $5b160d28a433310d$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$5b160d28a433310d$var$cachedGlobalStrings[pkg] = new $5b160d28a433310d$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $5b160d28a433310d$var$cachedGlobalStrings === null || $5b160d28a433310d$var$cachedGlobalStrings === void 0 ? void 0 : $5b160d28a433310d$var$cachedGlobalStrings[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
}
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $5b160d28a433310d$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6db58dc88e78b024$var$pluralRulesCache = new Map();
const $6db58dc88e78b024$var$numberFormatCache = new Map();
class $6db58dc88e78b024$export$2f817fcdc4b89ae0 {
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $6db58dc88e78b024$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new ($5b160d28a433310d$export$c17fa47878dc55b6)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
    return packageName && ($5b160d28a433310d$export$c17fa47878dc55b6).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
    return (useMemo)(()=>new ($6db58dc88e78b024$export$2f817fcdc4b89ae0)(locale, dictionary), [
        locale,
        dictionary
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
    return amount - numerator * Math.floor(amount / numerator);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $3b62074eb05584b2$var$EPOCH = 1721426; // 001/01/03 Julian C.E.
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
    year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
    let y1 = year - 1;
    let monthOffset = -2;
    if (month <= 2) monthOffset = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) monthOffset = -1;
    return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
    return era === 'BC' ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
    let era = 'AD';
    if (year <= 0) {
        era = 'BC';
        year = 1 - year;
    }
    return [
        era,
        year
    ];
}
const $3b62074eb05584b2$var$daysInMonth = {
    standard: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    leapyear: [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
};
class $3b62074eb05584b2$export$80ee6245ec4f29ec {
    fromJulianDay(jd) {
        let jd0 = jd;
        let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
        let quadricent = Math.floor(depoch / 146097);
        let dqc = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(depoch, 146097);
        let cent = Math.floor(dqc / 36524);
        let dcent = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(dqc, 36524);
        let quad = Math.floor(dcent / 1461);
        let dquad = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(dcent, 1461);
        let yindex = Math.floor(dquad / 365);
        let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
        let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
        let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
        let leapAdj = 2;
        if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1)) leapAdj = 0;
        else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) leapAdj = 1;
        let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
        let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, month, day);
    }
    toJulianDay(date) {
        return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 'leapyear' : 'standard'][date.month - 1];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMonthsInYear(date) {
        return 12;
    }
    getDaysInYear(date) {
        return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getYearsInEra(date) {
        return 9999;
    }
    getEras() {
        return [
            'BC',
            'AD'
        ];
    }
    isInverseEra(date) {
        return date.era === 'BC';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BC' ? 'AD' : 'BC';
            date.year = 1 - date.year;
        }
    }
    constructor(){
        this.identifier = 'gregory';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Data from https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json
// Locales starting on Sunday have been removed for compression.
const $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
    '001': 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1
};

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a, b) {
    b = ($11d87f3f76e88657$export$b4a036af3fc0b032)(b, a.calendar);
    return a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a, b) {
    b = ($11d87f3f76e88657$export$b4a036af3fc0b032)(b, a.calendar);
    // In the Japanese calendar, months can span multiple eras/years, so only compare the first of the month.
    a = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a);
    b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
    return a.era === b.era && a.year === b.year && a.month === b.month;
}
function $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(a, b) {
    return $14e0f24ef4ac5c92$export$dbc69fd56b53d5e(a.calendar, b.calendar) && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a, b);
}
function $14e0f24ef4ac5c92$export$dbc69fd56b53d5e(a, b) {
    var _a_isEqual, _b_isEqual;
    var _a_isEqual1, _ref;
    return (_ref = (_a_isEqual1 = (_a_isEqual = a.isEqual) === null || _a_isEqual === void 0 ? void 0 : _a_isEqual.call(a, b)) !== null && _a_isEqual1 !== void 0 ? _a_isEqual1 : (_b_isEqual = b.isEqual) === null || _b_isEqual === void 0 ? void 0 : _b_isEqual.call(b, a)) !== null && _ref !== void 0 ? _ref : a.identifier === b.identifier;
}
function $14e0f24ef4ac5c92$export$629b0a497aa65267(date, timeZone) {
    return $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone));
}
const $14e0f24ef4ac5c92$var$DAY_MAP = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
};
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale, firstDayOfWeek) {
    let julian = date.calendar.toJulianDay(date);
    // If julian is negative, then julian % 7 will be negative, so we adjust
    // accordingly.  Julian day 0 is Monday.
    let weekStart = firstDayOfWeek ? $14e0f24ef4ac5c92$var$DAY_MAP[firstDayOfWeek] : $14e0f24ef4ac5c92$var$getWeekStart(locale);
    let dayOfWeek = Math.ceil(julian + 1 - weekStart) % 7;
    if (dayOfWeek < 0) dayOfWeek += 7;
    return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
    return ($11d87f3f76e88657$export$1b96692a1ba042ac)(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
    return ($11d87f3f76e88657$export$93522d1a439f3617)($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a, b) {
    return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a, b) {
    return $14e0f24ef4ac5c92$var$timeToMs(a) - $14e0f24ef4ac5c92$var$timeToMs(b);
}
function $14e0f24ef4ac5c92$var$timeToMs(a) {
    return a.hour * 3600000 + a.minute * 60000 + a.second * 1000 + a.millisecond;
}
let $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
    // TODO: invalidate this somehow?
    if ($14e0f24ef4ac5c92$var$localTimeZone == null) $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
    // Use `subtract` instead of `set` so we don't get constrained in an era.
    return date.subtract({
        days: date.day - 1
    });
}
function $14e0f24ef4ac5c92$export$a2258d9c4118825c(date) {
    return date.add({
        days: date.calendar.getDaysInMonth(date) - date.day
    });
}
function $14e0f24ef4ac5c92$export$f91e89d3d0406102(date) {
    return $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date.subtract({
        months: date.month - 1
    }));
}
function $14e0f24ef4ac5c92$export$5412ac11713b72ad(date) {
    if (date.calendar.getMinimumMonthInYear) return date.calendar.getMinimumMonthInYear(date);
    return 1;
}
function $14e0f24ef4ac5c92$export$b2f4953d301981d5(date) {
    if (date.calendar.getMinimumDayInMonth) return date.calendar.getMinimumDayInMonth(date);
    return 1;
}
function $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale, firstDayOfWeek) {
    let dayOfWeek = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale, firstDayOfWeek);
    return date.subtract({
        days: dayOfWeek
    });
}
function $14e0f24ef4ac5c92$export$ef8b6d9133084f4e(date, locale, firstDayOfWeek) {
    return $14e0f24ef4ac5c92$export$42c81a444fbfb5d4(date, locale, firstDayOfWeek).add({
        days: 6
    });
}
const $14e0f24ef4ac5c92$var$cachedRegions = new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
    // If the Intl.Locale API is available, use it to get the region for the locale.
    // @ts-ignore
    if (Intl.Locale) {
        // Constructing an Intl.Locale is expensive, so cache the result.
        let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
        if (!region) {
            // @ts-ignore
            region = new Intl.Locale(locale).maximize().region;
            if (region) $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
        }
        return region;
    }
    // If not, just try splitting the string.
    // If the second part of the locale string is 'u',
    // then this is a unicode extension, so ignore it.
    // Otherwise, it should be the region.
    let part = locale.split('-')[1];
    return part === 'u' ? undefined : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
    // TODO: use Intl.Locale for this once browsers support the weekInfo property
    // https://github.com/tc39/proposal-intl-locale-info
    let region = $14e0f24ef4ac5c92$var$getRegion(locale);
    return region ? ($2fe286d2fb449abb$export$7a5acbd77d414bd9)[region] || 0 : 0;
}
function $14e0f24ef4ac5c92$export$ccc1b2479e7dd654(date, locale, firstDayOfWeek) {
    let days = date.calendar.getDaysInMonth(date);
    return Math.ceil(($14e0f24ef4ac5c92$export$2061056d06d7cdf7($14e0f24ef4ac5c92$export$a5a3b454ada2268e(date), locale, firstDayOfWeek) + days) / 7);
}
function $14e0f24ef4ac5c92$export$5c333a116e949cdd(a, b) {
    if (a && b) return a.compare(b) <= 0 ? a : b;
    return a || b;
}
function $14e0f24ef4ac5c92$export$a75f2bff57811055(a, b) {
    if (a && b) return a.compare(b) >= 0 ? a : b;
    return a || b;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.




function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
    date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
    let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
    return $11d87f3f76e88657$var$epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    let date = new Date();
    date.setUTCHours(hour, minute, second, millisecond);
    date.setUTCFullYear(year, month - 1, day);
    return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone) {
    // Fast path for UTC.
    if (timeZone === 'UTC') return 0;
    // Fast path: for local timezone after 1970, use native Date.
    if (ms > 0 && timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2)()) return new Date(ms).getTimezoneOffset() * -60000;
    let { year: year, month: month, day: day, hour: hour, minute: minute, second: second } = $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone);
    let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
    return utc - Math.floor(ms / 1000) * 1000;
}
const $11d87f3f76e88657$var$formattersByTimeZone = new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone) {
    let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            hour12: false,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
    }
    let parts = formatter.formatToParts(new Date(ms));
    let namedParts = {};
    for (let part of parts)if (part.type !== 'literal') namedParts[part.type] = part.value;
    return {
        // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
        year: namedParts.era === 'BC' || namedParts.era === 'B' ? -namedParts.year + 1 : +namedParts.year,
        month: +namedParts.month,
        day: +namedParts.day,
        hour: namedParts.hour === '24' ? 0 : +namedParts.hour,
        minute: +namedParts.minute,
        second: +namedParts.second
    };
}
const $11d87f3f76e88657$var$DAYMILLIS = 86400000;
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
    let found = earlier === later ? [
        earlier
    ] : [
        earlier,
        later
    ];
    return found.filter((absolute)=>$11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
    let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
    return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = 'compatible') {
    let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
    // Fast path: if the time zone is UTC, use native Date.
    if (timeZone === 'UTC') return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
    // Fast path: if the time zone is the local timezone and disambiguation is compatible, use native Date.
    if (timeZone === ($14e0f24ef4ac5c92$export$aa8b41735afcabd2)() && disambiguation === 'compatible') {
        dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
        // Don't use Date constructor here because two-digit years are interpreted in the 20th century.
        let date = new Date();
        let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(dateTime.era, dateTime.year);
        date.setFullYear(year, dateTime.month - 1, dateTime.day);
        date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
        return date.getTime();
    }
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
    let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
    let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
    if (valid.length === 1) return valid[0];
    if (valid.length > 1) switch(disambiguation){
        // 'compatible' means 'earlier' for "fall back" transitions
        case 'compatible':
        case 'earlier':
            return valid[0];
        case 'later':
            return valid[valid.length - 1];
        case 'reject':
            throw new RangeError('Multiple possible absolute times found');
    }
    switch(disambiguation){
        case 'earlier':
            return Math.min(ms - offsetBefore, ms - offsetAfter);
        // 'compatible' means 'later' for "spring forward" transitions
        case 'compatible':
        case 'later':
            return Math.max(ms - offsetBefore, ms - offsetAfter);
        case 'reject':
            throw new RangeError('No such absolute time found');
    }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = 'compatible') {
    return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone) {
    let offset = $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone);
    let date = new Date(ms + offset);
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let hour = date.getUTCHours();
    let minute = date.getUTCMinutes();
    let second = date.getUTCSeconds();
    let millisecond = date.getUTCMilliseconds();
    return new ($35ea8db9cb2ccb90$export$d3b7288e7994edea)(year < 1 ? 'BC' : 'AD', year < 1 ? -year + 1 : year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
    let hour = 0, minute = 0, second = 0, millisecond = 0;
    if ('timeZone' in date) ({ hour: hour, minute: minute, second: second, millisecond: millisecond } = date);
    else if ('hour' in date && !time) return date;
    if (time) ({ hour: hour, minute: minute, second: second, millisecond: millisecond } = time);
    return new ($35ea8db9cb2ccb90$export$ca871e8dbb80966f)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
    if (($14e0f24ef4ac5c92$export$dbc69fd56b53d5e)(date.calendar, calendar)) return date;
    let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
    let copy = date.copy();
    copy.calendar = calendar;
    copy.era = calendarDate.era;
    copy.year = calendarDate.year;
    copy.month = calendarDate.month;
    copy.day = calendarDate.day;
    ($735220c2d4774dd3$export$c4e2ecac49351ef2)(copy);
    return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
    if (date instanceof ($35ea8db9cb2ccb90$export$d3b7288e7994edea)) {
        if (date.timeZone === timeZone) return date;
        return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
    }
    let ms = $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation);
    return $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
    return new Date(ms);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
    let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
    return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone), date.calendar);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $735220c2d4774dd3$var$ONE_HOUR = 3600000;
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
    let mutableDate = date.copy();
    let days = 'hour' in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
    $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
    if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
    mutableDate.month += duration.months || 0;
    $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
    $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
    mutableDate.day += (duration.weeks || 0) * 7;
    mutableDate.day += duration.days || 0;
    mutableDate.day += days;
    $735220c2d4774dd3$var$balanceDay(mutableDate);
    if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
    // Constrain in case adding ended up with a date outside the valid range for the calendar system.
    // The behavior here is slightly different than when constraining in the `set` function in that
    // we adjust smaller fields to their minimum/maximum values rather than constraining each field
    // individually. This matches the general behavior of `add` vs `set` regarding how fields are balanced.
    if (mutableDate.year < 1) {
        mutableDate.year = 1;
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
    if (mutableDate.year > maxYear) {
        var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
        let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
        mutableDate.year = maxYear;
        mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
        mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    if (mutableDate.month < 1) {
        mutableDate.month = 1;
        mutableDate.day = 1;
    }
    let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
    if (mutableDate.month > maxMonth) {
        mutableDate.month = maxMonth;
        mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
    }
    mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
    return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
    var _date_calendar_isInverseEra, _date_calendar;
    if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date)) years = -years;
    date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
    while(date.month < 1){
        $735220c2d4774dd3$var$addYears(date, -1);
        date.month += date.calendar.getMonthsInYear(date);
    }
    let monthsInYear = 0;
    while(date.month > (monthsInYear = date.calendar.getMonthsInYear(date))){
        date.month -= monthsInYear;
        $735220c2d4774dd3$var$addYears(date, 1);
    }
}
function $735220c2d4774dd3$var$balanceDay(date) {
    while(date.day < 1){
        date.month--;
        $735220c2d4774dd3$var$balanceYearMonth(date);
        date.day += date.calendar.getDaysInMonth(date);
    }
    while(date.day > date.calendar.getDaysInMonth(date)){
        date.day -= date.calendar.getDaysInMonth(date);
        date.month++;
        $735220c2d4774dd3$var$balanceYearMonth(date);
    }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
    date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
    date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
    if (date.calendar.constrainDate) date.calendar.constrainDate(date);
    date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
    $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
    let inverseDuration = {};
    for(let key in duration)if (typeof duration[key] === 'number') inverseDuration[key] = -duration[key];
    return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
    return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
    let mutableDate = date.copy();
    if (fields.era != null) mutableDate.era = fields.era;
    if (fields.year != null) mutableDate.year = fields.year;
    if (fields.month != null) mutableDate.month = fields.month;
    if (fields.day != null) mutableDate.day = fields.day;
    $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
    return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
    let mutableValue = value.copy();
    if (fields.hour != null) mutableValue.hour = fields.hour;
    if (fields.minute != null) mutableValue.minute = fields.minute;
    if (fields.second != null) mutableValue.second = fields.second;
    if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
    $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
    return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
    time.second += Math.floor(time.millisecond / 1000);
    time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1000);
    time.minute += Math.floor(time.second / 60);
    time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
    time.hour += Math.floor(time.minute / 60);
    time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
    let days = Math.floor(time.hour / 24);
    time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
    return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
    time.millisecond = Math.max(0, Math.min(time.millisecond, 1000));
    time.second = Math.max(0, Math.min(time.second, 59));
    time.minute = Math.max(0, Math.min(time.minute, 59));
    time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a, b) {
    let result = a % b;
    if (result < 0) result += b;
    return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
    time.hour += duration.hours || 0;
    time.minute += duration.minutes || 0;
    time.second += duration.seconds || 0;
    time.millisecond += duration.milliseconds || 0;
    return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$7ed87b6bc2506470(time, duration) {
    let res = time.copy();
    $735220c2d4774dd3$var$addTimeFields(res, duration);
    return res;
}
function $735220c2d4774dd3$export$fe34d3a381cd7501(time, duration) {
    return $735220c2d4774dd3$export$7ed87b6bc2506470(time, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'era':
            {
                let eras = value.calendar.getEras();
                let eraIndex = eras.indexOf(value.era);
                if (eraIndex < 0) throw new Error('Invalid era: ' + value.era);
                eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
                mutable.era = eras[eraIndex];
                // Constrain the year and other fields within the era, so the era doesn't change when we balance below.
                $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
                break;
            }
        case 'year':
            var _mutable_calendar_isInverseEra, _mutable_calendar;
            if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable)) amount = -amount;
            // The year field should not cycle within the era as that can cause weird behavior affecting other fields.
            // We need to also allow values < 1 so that decrementing goes to the previous era. If we get -Infinity back
            // we know we wrapped around after reaching 9999 (the maximum), so set the year back to 1.
            mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
            if (mutable.year === -Infinity) mutable.year = 1;
            if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
            break;
        case 'month':
            mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'day':
            mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
    $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
    return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
    let mutable = value.copy();
    switch(field){
        case 'hour':
            {
                let hours = value.hour;
                let min = 0;
                let max = 23;
                if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
                    let isPM = hours >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
                break;
            }
        case 'minute':
            mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'second':
            mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
            break;
        case 'millisecond':
            mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
            break;
        default:
            throw new Error('Unsupported field ' + field);
    }
    return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min, max, round = false) {
    if (round) {
        value += Math.sign(amount);
        if (value < min) value = max;
        let div = Math.abs(amount);
        if (amount > 0) value = Math.ceil(value / div) * div;
        else value = Math.floor(value / div) * div;
        if (value > max) value = min;
    } else {
        value += amount;
        if (value < min) value = max - (min - value - 1);
        else if (value > max) value = min + (value - max - 1);
    }
    return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
    let ms;
    if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) {
        let res = $735220c2d4774dd3$export$e16d8520af44a096(($11d87f3f76e88657$export$b21e0b124e224484)(dateTime), {
            years: duration.years,
            months: duration.months,
            weeks: duration.weeks,
            days: duration.days
        });
        // Changing the date may change the timezone offset, so we need to recompute
        // using the 'compatible' disambiguation.
        ms = ($11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone);
    } else // Otherwise, preserve the offset of the original date.
    ms = ($11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
    // Perform time manipulation in milliseconds rather than on the original time fields to account for DST.
    // For example, adding one hour during a DST transition may result in the hour field staying the same or
    // skipping an hour. This results in the offset field changing value instead of the specified field.
    ms += duration.milliseconds || 0;
    ms += (duration.seconds || 0) * 1000;
    ms += (duration.minutes || 0) * 60000;
    ms += (duration.hours || 0) * 3600000;
    let res = ($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone);
    return ($11d87f3f76e88657$export$b4a036af3fc0b032)(res, dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
    return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
    // For date fields, we want the time to remain consistent and the UTC offset to potentially change to account for DST changes.
    // For time fields, we want the time to change by the amount given. This may result in the hour field staying the same, but the UTC
    // offset changing in the case of a backward DST transition, or skipping an hour in the case of a forward DST transition.
    switch(field){
        case 'hour':
            {
                let min = 0;
                let max = 23;
                if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
                    let isPM = dateTime.hour >= 12;
                    min = isPM ? 12 : 0;
                    max = isPM ? 23 : 11;
                }
                // The minimum and maximum hour may be affected by daylight saving time.
                // For example, it might jump forward at midnight, and skip 1am.
                // Or it might end at midnight and repeat the 11pm hour. To handle this, we get
                // the possible absolute times for the min and max, and find the maximum range
                // that is within the current day.
                let plainDateTime = ($11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
                let minDate = ($11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
                    hour: min
                }), new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
                let minAbsolute = [
                    ($11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, 'earlier'),
                    ($11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, 'later')
                ].filter((ms)=>($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone).day === minDate.day)[0];
                let maxDate = ($11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
                    hour: max
                }), new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
                let maxAbsolute = [
                    ($11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, 'earlier'),
                    ($11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, 'later')
                ].filter((ms)=>($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone).day === maxDate.day).pop();
                // Since hours may repeat, we need to operate on the absolute time in milliseconds.
                // This is done in hours from the Unix epoch so that cycleValue works correctly,
                // and then converted back to milliseconds.
                let ms = ($11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
                let hours = Math.floor(ms / $735220c2d4774dd3$var$ONE_HOUR);
                let remainder = ms % $735220c2d4774dd3$var$ONE_HOUR;
                ms = $735220c2d4774dd3$var$cycleValue(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
                // Now compute the new timezone offset, and convert the absolute time back to local time.
                return ($11d87f3f76e88657$export$b4a036af3fc0b032)(($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
            }
        case 'minute':
        case 'second':
        case 'millisecond':
            // @ts-ignore
            return $735220c2d4774dd3$export$dd02b3e0007dfe28(dateTime, field, amount, options);
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            {
                let res = $735220c2d4774dd3$export$d52ced6badfb9a4c(($11d87f3f76e88657$export$b21e0b124e224484)(dateTime), field, amount, options);
                let ms = ($11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone);
                return ($11d87f3f76e88657$export$b4a036af3fc0b032)(($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
            }
        default:
            throw new Error('Unsupported field ' + field);
    }
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
    // Set the date/time fields, and recompute the UTC offset to account for DST changes.
    // We also need to validate by converting back to a local time in case hours are skipped during forward DST transitions.
    let plainDateTime = ($11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
    let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56($735220c2d4774dd3$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
    // If the resulting plain date time values are equal, return the original time.
    // We don't want to change the offset when setting the time to the same value.
    if (res.compare(plainDateTime) === 0) return dateTime;
    let ms = ($11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone, disambiguation);
    return ($11d87f3f76e88657$export$b4a036af3fc0b032)(($11d87f3f76e88657$export$1b96692a1ba042ac)(ms, dateTime.timeZone), dateTime.calendar);
}

const $fae977aafc393c5c$var$DATE_RE = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/;
function $fae977aafc393c5c$export$6b862160d295c8e(value) {
    let m = value.match($fae977aafc393c5c$var$DATE_RE);
    if (!m) throw new Error('Invalid ISO 8601 date string: ' + value);
    let date = new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)($fae977aafc393c5c$var$parseNumber(m[1], 0, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1);
    date.day = $fae977aafc393c5c$var$parseNumber(m[3], 1, date.calendar.getDaysInMonth(date));
    return date;
}
function $fae977aafc393c5c$var$parseNumber(value, min, max) {
    let val = Number(value);
    if (val < min || val > max) throw new RangeError(`Value out of range: ${min} <= ${val} <= ${max}`);
    return val;
}
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}:${String(time.second).padStart(2, '0')}${time.millisecond ? String(time.millisecond / 1000).slice(1) : ''}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
    let gregorianDate = ($11d87f3f76e88657$export$b4a036af3fc0b032)(date, new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
    let year;
    if (gregorianDate.era === 'BC') year = gregorianDate.year === 1 ? '0000' : '-' + String(Math.abs(1 - gregorianDate.year)).padStart(6, '00');
    else year = String(gregorianDate.year).padStart(4, '0');
    return `${year}-${String(gregorianDate.month).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
    // @ts-ignore
    return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset) {
    let sign = Math.sign(offset) < 0 ? '-' : '+';
    offset = Math.abs(offset);
    let offsetHours = Math.floor(offset / 3600000);
    let offsetMinutes = offset % 3600000 / 60000;
    return `${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
    return `${$fae977aafc393c5c$export$4223de14708adc63(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $35ea8db9cb2ccb90$var$shiftArgs(args) {
    let calendar = typeof args[0] === 'object' ? args.shift() : new ($3b62074eb05584b2$export$80ee6245ec4f29ec)();
    let era;
    if (typeof args[0] === 'string') era = args.shift();
    else {
        let eras = calendar.getEras();
        era = eras[eras.length - 1];
    }
    let year = args.shift();
    let month = args.shift();
    let day = args.shift();
    return [
        calendar,
        era,
        year,
        month,
        day
    ];
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
// If that behavior is desired, use the AnyCalendarDate interface instead.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$99faa760c7908e4f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
        else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
    }
    /** Returns a new `CalendarDate` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
    }
    /** Returns a new `CalendarDate` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
    }
    /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$adaa4cf7ef1b65be)(this, fields);
    }
    /**
   * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */ toDate(timeZone) {
        return ($11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$60dfd74aa96791bd)(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        return ($14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
    }
    constructor(...args){
        (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
    }
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type1 = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$680ea196effce5f {
    /** Returns a copy of this time. */ copy() {
        return new $35ea8db9cb2ccb90$export$680ea196effce5f(this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `Time` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$7ed87b6bc2506470)(this, duration);
    }
    /** Returns a new `Time` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$fe34d3a381cd7501)(this, duration);
    }
    /** Returns a new `Time` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields);
    }
    /**
   * Returns a new `Time` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
    }
    /** Converts the time to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$f59dee82248f5ad4)(this);
    }
    /** Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. */ compare(b) {
        return ($14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, b);
    }
    constructor(hour = 0, minute = 0, second = 0, millisecond = 0){
        (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type1, {
            writable: true,
            value: void 0
        });
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        ($735220c2d4774dd3$export$7555de1e070510cb)(this);
    }
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type2 = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$ca871e8dbb80966f {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
        else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `CalendarDateTime` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
    }
    /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields) {
        return ($735220c2d4774dd3$export$adaa4cf7ef1b65be)(($735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields), fields);
    }
    /**
   * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        switch(field){
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return ($735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
            default:
                return ($735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
        }
    }
    /** Converts the date to a native JavaScript Date object in the given time zone. */ toDate(timeZone, disambiguation) {
        return ($11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone, disambiguation);
    }
    /** Converts the date to an ISO 8601 formatted string. */ toString() {
        return ($fae977aafc393c5c$export$4223de14708adc63)(this);
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        let res = ($14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
        if (res === 0) return ($14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, ($11d87f3f76e88657$export$b21e0b124e224484)(b));
        return res;
    }
    constructor(...args){
        (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type2, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
    }
}
var // This prevents TypeScript from allowing other types with the same fields to match.
// @ts-ignore
$35ea8db9cb2ccb90$var$_type3 = /*#__PURE__*/ new WeakMap();
class $35ea8db9cb2ccb90$export$d3b7288e7994edea {
    /** Returns a copy of this date. */ copy() {
        if (this.era) return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
        else return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    /** Returns a new `ZonedDateTime` with the given duration added to it. */ add(duration) {
        return ($735220c2d4774dd3$export$96b1d28349274637)(this, duration);
    }
    /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */ subtract(duration) {
        return ($735220c2d4774dd3$export$6814caac34ca03c7)(this, duration);
    }
    /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */ set(fields, disambiguation) {
        return ($735220c2d4774dd3$export$31b5430eb18be4f8)(this, fields, disambiguation);
    }
    /**
   * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
   * When the resulting value reaches the limits of the field, it wraps around.
   */ cycle(field, amount, options) {
        return ($735220c2d4774dd3$export$9a297d111fc86b79)(this, field, amount, options);
    }
    /** Converts the date to a native JavaScript Date object. */ toDate() {
        return ($11d87f3f76e88657$export$83aac07b4c37b25)(this);
    }
    /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */ toString() {
        return ($fae977aafc393c5c$export$bf79f1ebf4b18792)(this);
    }
    /** Converts the date to an ISO 8601 formatted string in UTC. */ toAbsoluteString() {
        return this.toDate().toISOString();
    }
    /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */ compare(b) {
        // TODO: Is this a bad idea??
        return this.toDate().getTime() - ($11d87f3f76e88657$export$84c95a83c799e074)(b, this.timeZone).toDate().getTime();
    }
    constructor(...args){
        (_class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type3, {
            writable: true,
            value: void 0
        });
        let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
        let timeZone = args.shift();
        let offset = args.shift();
        this.calendar = calendar;
        this.era = era;
        this.year = year;
        this.month = month;
        this.day = day;
        this.timeZone = timeZone;
        this.offset = offset;
        this.hour = args.shift() || 0;
        this.minute = args.shift() || 0;
        this.second = args.shift() || 0;
        this.millisecond = args.shift() || 0;
        ($735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from the TC39 Temporal proposal.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $62225008020f0a13$var$ERA_START_DATES = [
    [
        1868,
        9,
        8
    ],
    [
        1912,
        7,
        30
    ],
    [
        1926,
        12,
        25
    ],
    [
        1989,
        1,
        8
    ],
    [
        2019,
        5,
        1
    ]
];
const $62225008020f0a13$var$ERA_END_DATES = [
    [
        1912,
        7,
        29
    ],
    [
        1926,
        12,
        24
    ],
    [
        1989,
        1,
        7
    ],
    [
        2019,
        4,
        30
    ]
];
const $62225008020f0a13$var$ERA_ADDENDS = [
    1867,
    1911,
    1925,
    1988,
    2018
];
const $62225008020f0a13$var$ERA_NAMES = [
    'meiji',
    'taisho',
    'showa',
    'heisei',
    'reiwa'
];
function $62225008020f0a13$var$findEraFromGregorianDate(date) {
    const idx = $62225008020f0a13$var$ERA_START_DATES.findIndex(([year, month, day])=>{
        if (date.year < year) return true;
        if (date.year === year && date.month < month) return true;
        if (date.year === year && date.month === month && date.day < day) return true;
        return false;
    });
    if (idx === -1) return $62225008020f0a13$var$ERA_START_DATES.length - 1;
    if (idx === 0) return 0;
    return idx - 1;
}
function $62225008020f0a13$var$toGregorian(date) {
    let eraAddend = $62225008020f0a13$var$ERA_ADDENDS[$62225008020f0a13$var$ERA_NAMES.indexOf(date.era)];
    if (!eraAddend) throw new Error('Unknown era: ' + date.era);
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(date.year + eraAddend, date.month, date.day);
}
class $62225008020f0a13$export$b746ab2b60cdffbf extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(date);
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, $62225008020f0a13$var$ERA_NAMES[era], date.year - $62225008020f0a13$var$ERA_ADDENDS[era], date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($62225008020f0a13$var$toGregorian(date));
    }
    balanceDate(date) {
        let gregorianDate = $62225008020f0a13$var$toGregorian(date);
        let era = $62225008020f0a13$var$findEraFromGregorianDate(gregorianDate);
        if ($62225008020f0a13$var$ERA_NAMES[era] !== date.era) {
            date.era = $62225008020f0a13$var$ERA_NAMES[era];
            date.year = gregorianDate.year - $62225008020f0a13$var$ERA_ADDENDS[era];
        }
        // Constrain in case we went before the first supported era.
        this.constrainDate(date);
    }
    constrainDate(date) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let end = $62225008020f0a13$var$ERA_END_DATES[idx];
        if (end != null) {
            let [endYear, endMonth, endDay] = end;
            // Constrain the year to the maximum possible value in the era.
            // Then constrain the month and day fields within that.
            let maxYear = endYear - $62225008020f0a13$var$ERA_ADDENDS[idx];
            date.year = Math.max(1, Math.min(maxYear, date.year));
            if (date.year === maxYear) {
                date.month = Math.min(endMonth, date.month);
                if (date.month === endMonth) date.day = Math.min(endDay, date.day);
            }
        }
        if (date.year === 1 && idx >= 0) {
            let [, startMonth, startDay] = $62225008020f0a13$var$ERA_START_DATES[idx];
            date.month = Math.max(startMonth, date.month);
            if (date.month === startMonth) date.day = Math.max(startDay, date.day);
        }
    }
    getEras() {
        return $62225008020f0a13$var$ERA_NAMES;
    }
    getYearsInEra(date) {
        // Get the number of years in the era, taking into account the date's month and day fields.
        let era = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        let cur = $62225008020f0a13$var$ERA_START_DATES[era];
        let next = $62225008020f0a13$var$ERA_START_DATES[era + 1];
        if (next == null) // 9999 gregorian is the maximum year allowed.
        return 9999 - cur[0] + 1;
        let years = next[0] - cur[0];
        if (date.month < next[1] || date.month === next[1] && date.day < next[2]) years++;
        return years;
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($62225008020f0a13$var$toGregorian(date));
    }
    getMinimumMonthInYear(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start ? start[1] : 1;
    }
    getMinimumDayInMonth(date) {
        let start = $62225008020f0a13$var$getMinimums(date);
        return start && date.month === start[1] ? start[2] : 1;
    }
    constructor(...args){
        super(...args), this.identifier = 'japanese';
    }
}
function $62225008020f0a13$var$getMinimums(date) {
    if (date.year === 1) {
        let idx = $62225008020f0a13$var$ERA_NAMES.indexOf(date.era);
        return $62225008020f0a13$var$ERA_START_DATES[idx];
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $8d73d47422ca7302$var$BUDDHIST_ERA_START = -543;
class $8d73d47422ca7302$export$42d20a78301dee44 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
    fromJulianDay(jd) {
        let gregorianDate = super.fromJulianDay(jd);
        let year = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(gregorianDate.era, gregorianDate.year);
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year - $8d73d47422ca7302$var$BUDDHIST_ERA_START, gregorianDate.month, gregorianDate.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($8d73d47422ca7302$var$toGregorian(date));
    }
    getEras() {
        return [
            'BE'
        ];
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($8d73d47422ca7302$var$toGregorian(date));
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'buddhist';
    }
}
function $8d73d47422ca7302$var$toGregorian(date) {
    let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c)(date.year + $8d73d47422ca7302$var$BUDDHIST_ERA_START);
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, date.month, date.day);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $5f31bd6f0c8940b2$var$TAIWAN_ERA_START = 1911;
function $5f31bd6f0c8940b2$var$gregorianYear(date) {
    return date.era === 'minguo' ? date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START : 1 - date.year + $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
}
function $5f31bd6f0c8940b2$var$gregorianToTaiwan(year) {
    let y = year - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
    if (y > 0) return [
        'minguo',
        y
    ];
    else return [
        'before_minguo',
        1 - y
    ];
}
class $5f31bd6f0c8940b2$export$65e01080afcb0799 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
    fromJulianDay(jd) {
        let date = super.fromJulianDay(jd);
        let extendedYear = ($3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
        let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan(extendedYear);
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, date.month, date.day);
    }
    toJulianDay(date) {
        return super.toJulianDay($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    getEras() {
        return [
            'before_minguo',
            'minguo'
        ];
    }
    balanceDate(date) {
        let [era, year] = $5f31bd6f0c8940b2$var$gregorianToTaiwan($5f31bd6f0c8940b2$var$gregorianYear(date));
        date.era = era;
        date.year = year;
    }
    isInverseEra(date) {
        return date.era === 'before_minguo';
    }
    getDaysInMonth(date) {
        return super.getDaysInMonth($5f31bd6f0c8940b2$var$toGregorian(date));
    }
    getYearsInEra(date) {
        return date.era === 'before_minguo' ? 9999 : 9999 - $5f31bd6f0c8940b2$var$TAIWAN_ERA_START;
    }
    constructor(...args){
        super(...args), this.identifier = 'roc' // Republic of China
        ;
    }
}
function $5f31bd6f0c8940b2$var$toGregorian(date) {
    let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c)($5f31bd6f0c8940b2$var$gregorianYear(date));
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, date.month, date.day);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $f3ed2e4472ae7e25$var$PERSIAN_EPOCH = 1948320;
// Number of days from the start of the year to the start of each month.
const $f3ed2e4472ae7e25$var$MONTH_START = [
    0,
    31,
    62,
    93,
    124,
    155,
    186,
    216,
    246,
    276,
    306,
    336 // Esfand
];
class $f3ed2e4472ae7e25$export$37fccdbfd14c5939 {
    fromJulianDay(jd) {
        let daysSinceEpoch = jd - $f3ed2e4472ae7e25$var$PERSIAN_EPOCH;
        let year = 1 + Math.floor((33 * daysSinceEpoch + 3) / 12053);
        let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21) / 33);
        let dayOfYear = daysSinceEpoch - farvardin1;
        let month = dayOfYear < 216 ? Math.floor(dayOfYear / 31) : Math.floor((dayOfYear - 6) / 30);
        let day = dayOfYear - $f3ed2e4472ae7e25$var$MONTH_START[month] + 1;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year, month + 1, day);
    }
    toJulianDay(date) {
        let jd = $f3ed2e4472ae7e25$var$PERSIAN_EPOCH - 1 + 365 * (date.year - 1) + Math.floor((8 * date.year + 21) / 33);
        jd += $f3ed2e4472ae7e25$var$MONTH_START[date.month - 1];
        jd += date.day;
        return jd;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(date) {
        if (date.month <= 6) return 31;
        if (date.month <= 11) return 30;
        let isLeapYear = ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(25 * date.year + 11, 33) < 8;
        return isLeapYear ? 30 : 29;
    }
    getEras() {
        return [
            'AP'
        ];
    }
    getYearsInEra() {
        // 9378-10-10 persian is 9999-12-31 gregorian.
        // Round down to 9377 to set the maximum full year.
        return 9377;
    }
    constructor(){
        this.identifier = 'persian';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


// Starts in 78 AD,
const $82c358003bdda0a8$var$INDIAN_ERA_START = 78;
// The Indian year starts 80 days later than the Gregorian year.
const $82c358003bdda0a8$var$INDIAN_YEAR_START = 80;
class $82c358003bdda0a8$export$39f31c639fa15726 extends ($3b62074eb05584b2$export$80ee6245ec4f29ec) {
    fromJulianDay(jd) {
        // Gregorian date for Julian day
        let date = super.fromJulianDay(jd);
        // Year in Saka era
        let indianYear = date.year - $82c358003bdda0a8$var$INDIAN_ERA_START;
        // Day number in Gregorian year (starting from 0)
        let yDay = jd - ($3b62074eb05584b2$export$f297eb839006d339)(date.era, date.year, 1, 1);
        let leapMonth;
        if (yDay < $82c358003bdda0a8$var$INDIAN_YEAR_START) {
            //  Day is at the end of the preceding Saka year
            indianYear--;
            // Days in leapMonth this year, previous Gregorian year
            leapMonth = ($3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year - 1) ? 31 : 30;
            yDay += leapMonth + 155 + 90 + 10;
        } else {
            // Days in leapMonth this year
            leapMonth = ($3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year) ? 31 : 30;
            yDay -= $82c358003bdda0a8$var$INDIAN_YEAR_START;
        }
        let indianMonth;
        let indianDay;
        if (yDay < leapMonth) {
            indianMonth = 1;
            indianDay = yDay + 1;
        } else {
            let mDay = yDay - leapMonth;
            if (mDay < 155) {
                indianMonth = Math.floor(mDay / 31) + 2;
                indianDay = mDay % 31 + 1;
            } else {
                mDay -= 155;
                indianMonth = Math.floor(mDay / 30) + 7;
                indianDay = mDay % 30 + 1;
            }
        }
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, indianYear, indianMonth, indianDay);
    }
    toJulianDay(date) {
        let extendedYear = date.year + $82c358003bdda0a8$var$INDIAN_ERA_START;
        let [era, year] = ($3b62074eb05584b2$export$4475b7e617eb123c)(extendedYear);
        let leapMonth;
        let jd;
        if (($3b62074eb05584b2$export$553d7fa8e3805fc0)(year)) {
            leapMonth = 31;
            jd = ($3b62074eb05584b2$export$f297eb839006d339)(era, year, 3, 21);
        } else {
            leapMonth = 30;
            jd = ($3b62074eb05584b2$export$f297eb839006d339)(era, year, 3, 22);
        }
        if (date.month === 1) return jd + date.day - 1;
        jd += leapMonth + Math.min(date.month - 2, 5) * 31;
        if (date.month >= 8) jd += (date.month - 7) * 30;
        jd += date.day - 1;
        return jd;
    }
    getDaysInMonth(date) {
        if (date.month === 1 && ($3b62074eb05584b2$export$553d7fa8e3805fc0)(date.year + $82c358003bdda0a8$var$INDIAN_ERA_START)) return 31;
        if (date.month >= 2 && date.month <= 6) return 31;
        return 30;
    }
    getYearsInEra() {
        // 9999-12-31 gregorian is 9920-10-10 indian.
        // Round down to 9919 for the last full year.
        return 9919;
    }
    getEras() {
        return [
            'saka'
        ];
    }
    balanceDate() {}
    constructor(...args){
        super(...args), this.identifier = 'indian';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $f2f3e0e3a817edbd$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START = 1300;
const $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END = 1600;
const $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS = 460322;
function $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $f2f3e0e3a817edbd$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $f2f3e0e3a817edbd$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(calendar, year, month, day);
}
function $f2f3e0e3a817edbd$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $f2f3e0e3a817edbd$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $f2f3e0e3a817edbd$var$isLeapYear(date.year) ? 355 : 354;
    }
    getYearsInEra() {
        // 9999 gregorian
        return 9665;
    }
    getEras() {
        return [
            'AH'
        ];
    }
    constructor(){
        this.identifier = 'islamic-civil';
    }
}
class $f2f3e0e3a817edbd$export$37f0887f2f9d22f7 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $f2f3e0e3a817edbd$var$julianDayToIslamic(this, $f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $f2f3e0e3a817edbd$var$islamicToJulianDay($f2f3e0e3a817edbd$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args), this.identifier = 'islamic-tbla';
    }
}
// Generated by scripts/generate-umalqura.js
const $f2f3e0e3a817edbd$var$UMALQURA_DATA = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
let $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH;
let $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE;
function $f2f3e0e3a817edbd$var$umalquraYearStart(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_START_DAYS + $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
function $f2f3e0e3a817edbd$var$umalquraMonthLength(year, month) {
    let idx = year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START;
    let mask = 0x01 << 11 - (month - 1);
    if (($f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $f2f3e0e3a817edbd$var$umalquraMonthStart(year, month) {
    let day = $f2f3e0e3a817edbd$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
    return day;
}
function $f2f3e0e3a817edbd$var$umalquraYearLength(year) {
    return $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year + 1 - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START];
}
class $f2f3e0e3a817edbd$export$5baab4758c231076 extends $f2f3e0e3a817edbd$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        let days = jd - $f2f3e0e3a817edbd$var$CIVIL_EPOC;
        let startDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_START);
        let endDays = $f2f3e0e3a817edbd$var$umalquraYearStart($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $f2f3e0e3a817edbd$var$umalquraYearStart(y) + 1;
                let yearLength = $f2f3e0e3a817edbd$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $f2f3e0e3a817edbd$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, y, m, days - $f2f3e0e3a817edbd$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $f2f3e0e3a817edbd$var$CIVIL_EPOC + $f2f3e0e3a817edbd$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $f2f3e0e3a817edbd$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START || date.year > $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $f2f3e0e3a817edbd$var$umalquraYearLength(date.year);
    }
    constructor(){
        super(), this.identifier = 'islamic-umalqura';
        if (!$f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH) $f2f3e0e3a817edbd$var$UMALQURA_MONTHLENGTH = new Uint16Array(Uint8Array.from(atob($f2f3e0e3a817edbd$var$UMALQURA_DATA), (c)=>c.charCodeAt(0)).buffer);
        if (!$f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE) {
            $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($f2f3e0e3a817edbd$var$UMALQURA_YEAR_END - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START; year <= $f2f3e0e3a817edbd$var$UMALQURA_YEAR_END; year++){
                $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START_TABLE[year - $f2f3e0e3a817edbd$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $f2f3e0e3a817edbd$var$umalquraMonthLength(year, i);
            }
        }
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.


const $7c5f6fbf42389787$var$HEBREW_EPOCH = 347997;
// Hebrew date calculations are performed in terms of days, hours, and
// "parts" (or halakim), which are 1/1080 of an hour, or 3 1/3 seconds.
const $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
const $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
// An approximate value for the length of a lunar month.
// It is used to calculate the approximate year and month of a given
// absolute date.
const $7c5f6fbf42389787$var$MONTH_DAYS = 29;
const $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
const $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
function $7c5f6fbf42389787$var$isLeapYear(year) {
    return ($2b4dce13dd5a17fa$export$842a2cf37af977e1)(year * 7 + 1, 19) < 7;
}
// Test for delay of start of new year and to avoid
// Sunday, Wednesday, and Friday as start of the new year.
function $7c5f6fbf42389787$var$hebrewDelay1(year) {
    let months = Math.floor((235 * year - 234) / 19);
    let parts = 12084 + 13753 * months;
    let day = months * 29 + Math.floor(parts / 25920);
    if (($2b4dce13dd5a17fa$export$842a2cf37af977e1)(3 * (day + 1), 7) < 3) day += 1;
    return day;
}
// Check for delay in start of new year due to length of adjacent years
function $7c5f6fbf42389787$var$hebrewDelay2(year) {
    let last = $7c5f6fbf42389787$var$hebrewDelay1(year - 1);
    let present = $7c5f6fbf42389787$var$hebrewDelay1(year);
    let next = $7c5f6fbf42389787$var$hebrewDelay1(year + 1);
    if (next - present === 356) return 2;
    if (present - last === 382) return 1;
    return 0;
}
function $7c5f6fbf42389787$var$startOfYear(year) {
    return $7c5f6fbf42389787$var$hebrewDelay1(year) + $7c5f6fbf42389787$var$hebrewDelay2(year);
}
function $7c5f6fbf42389787$var$getDaysInYear(year) {
    return $7c5f6fbf42389787$var$startOfYear(year + 1) - $7c5f6fbf42389787$var$startOfYear(year);
}
function $7c5f6fbf42389787$var$getYearType(year) {
    let yearLength = $7c5f6fbf42389787$var$getDaysInYear(year);
    if (yearLength > 380) yearLength -= 30; // Subtract length of leap month.
    switch(yearLength){
        case 353:
            return 0; // deficient
        case 354:
            return 1; // normal
        case 355:
            return 2; // complete
    }
}
function $7c5f6fbf42389787$var$getDaysInMonth(year, month) {
    // Normalize month numbers from 1 - 13, even on non-leap years
    if (month >= 6 && !$7c5f6fbf42389787$var$isLeapYear(year)) month++;
    // First of all, dispose of fixed-length 29 day months
    if (month === 4 || month === 7 || month === 9 || month === 11 || month === 13) return 29;
    let yearType = $7c5f6fbf42389787$var$getYearType(year);
    // If it's Heshvan, days depend on length of year
    if (month === 2) return yearType === 2 ? 30 : 29;
    // Similarly, Kislev varies with the length of year
    if (month === 3) return yearType === 0 ? 29 : 30;
    // Adar I only exists in leap years
    if (month === 6) return $7c5f6fbf42389787$var$isLeapYear(year) ? 30 : 0;
    return 30;
}
class $7c5f6fbf42389787$export$ca405048b8fb5af {
    fromJulianDay(jd) {
        let d = jd - $7c5f6fbf42389787$var$HEBREW_EPOCH;
        let m = d * $7c5f6fbf42389787$var$DAY_PARTS / $7c5f6fbf42389787$var$MONTH_PARTS; // Months (approx)
        let year = Math.floor((19 * m + 234) / 235) + 1; // Years (approx)
        let ys = $7c5f6fbf42389787$var$startOfYear(year); // 1st day of year
        let dayOfYear = Math.floor(d - ys);
        // Because of the postponement rules, it's possible to guess wrong.  Fix it.
        while(dayOfYear < 1){
            year--;
            ys = $7c5f6fbf42389787$var$startOfYear(year);
            dayOfYear = Math.floor(d - ys);
        }
        // Now figure out which month we're in, and the date within that month
        let month = 1;
        let monthStart = 0;
        while(monthStart < dayOfYear){
            monthStart += $7c5f6fbf42389787$var$getDaysInMonth(year, month);
            month++;
        }
        month--;
        monthStart -= $7c5f6fbf42389787$var$getDaysInMonth(year, month);
        let day = dayOfYear - monthStart;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, year, month, day);
    }
    toJulianDay(date) {
        let jd = $7c5f6fbf42389787$var$startOfYear(date.year);
        for(let month = 1; month < date.month; month++)jd += $7c5f6fbf42389787$var$getDaysInMonth(date.year, month);
        return jd + date.day + $7c5f6fbf42389787$var$HEBREW_EPOCH;
    }
    getDaysInMonth(date) {
        return $7c5f6fbf42389787$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear(date) {
        return $7c5f6fbf42389787$var$isLeapYear(date.year) ? 13 : 12;
    }
    getDaysInYear(date) {
        return $7c5f6fbf42389787$var$getDaysInYear(date.year);
    }
    getYearsInEra() {
        // 6239 gregorian
        return 9999;
    }
    getEras() {
        return [
            'AM'
        ];
    }
    balanceYearMonth(date, previousDate) {
        // Keep date in the same month when switching between leap years and non leap years
        if (previousDate.year !== date.year) {
            if ($7c5f6fbf42389787$var$isLeapYear(previousDate.year) && !$7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month--;
            else if (!$7c5f6fbf42389787$var$isLeapYear(previousDate.year) && $7c5f6fbf42389787$var$isLeapYear(date.year) && previousDate.month > 6) date.month++;
        }
    }
    constructor(){
        this.identifier = 'hebrew';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $b956b2d7a6cf451f$var$ETHIOPIC_EPOCH = 1723856;
const $b956b2d7a6cf451f$var$COPTIC_EPOCH = 1824665;
// The delta between Amete Alem 1 and Amete Mihret 1
// AA 5501 = AM 1
const $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA = 5500;
function $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, day) {
    return epoch // difference from Julian epoch to 1,1,1
     + 365 * year // number of days from years
     + Math.floor(year / 4) // extra day of leap year
     + 30 * (month - 1 // number of days from months (1 based)
    ) + day - 1 // number of days for present month (1 based)
    ;
}
function $b956b2d7a6cf451f$var$julianDayToCE(epoch, jd) {
    let year = Math.floor(4 * (jd - epoch) / 1461);
    let month = 1 + Math.floor((jd - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, 1, 1)) / 30);
    let day = jd + 1 - $b956b2d7a6cf451f$var$ceToJulianDay(epoch, year, month, 1);
    return [
        year,
        month,
        day
    ];
}
function $b956b2d7a6cf451f$var$getLeapDay(year) {
    return Math.floor(year % 4 / 3);
}
function $b956b2d7a6cf451f$var$getDaysInMonth(year, month) {
    // The Ethiopian and Coptic calendars have 13 months, 12 of 30 days each and
    // an intercalary month at the end of the year of 5 or 6 days, depending whether
    // the year is a leap year or not. The Leap Year follows the same rules as the
    // Julian Calendar so that the extra month always has six days in the year before
    // a Julian Leap Year.
    if (month % 13 !== 0) // not intercalary month
    return 30;
    else // intercalary month 5 days + possible leap day
    return $b956b2d7a6cf451f$var$getLeapDay(year) + 5;
}
class $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        let era = 'AM';
        if (year <= 0) {
            era = 'AA';
            year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        }
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'AA') year -= $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        return $b956b2d7a6cf451f$var$getDaysInMonth(date.year, date.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(date) {
        return 365 + $b956b2d7a6cf451f$var$getLeapDay(date.year);
    }
    getYearsInEra(date) {
        // 9999-12-31 gregorian is 9992-20-02 ethiopic.
        // Round down to 9991 for the last full year.
        // AA 9999-01-01 ethiopic is 4506-09-30 gregorian.
        return date.era === 'AA' ? 9999 : 9991;
    }
    getEras() {
        return [
            'AA',
            'AM'
        ];
    }
    constructor(){
        this.identifier = 'ethiopic';
    }
}
class $b956b2d7a6cf451f$export$d72e0c37005a4914 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$ETHIOPIC_EPOCH, jd);
        year += $b956b2d7a6cf451f$var$AMETE_MIHRET_DELTA;
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, 'AA', year, month, day);
    }
    getEras() {
        return [
            'AA'
        ];
    }
    getYearsInEra() {
        // 9999-13-04 ethioaa is the maximum date, which is equivalent to 4506-09-29 gregorian.
        return 9999;
    }
    constructor(...args){
        super(...args), this.identifier = 'ethioaa' // also known as 'ethiopic-amete-alem' in ICU
        ;
    }
}
class $b956b2d7a6cf451f$export$fe6243cbe1a4b7c1 extends $b956b2d7a6cf451f$export$26ba6eab5e20cd7d {
    fromJulianDay(jd) {
        let [year, month, day] = $b956b2d7a6cf451f$var$julianDayToCE($b956b2d7a6cf451f$var$COPTIC_EPOCH, jd);
        let era = 'CE';
        if (year <= 0) {
            era = 'BCE';
            year = 1 - year;
        }
        return new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(this, era, year, month, day);
    }
    toJulianDay(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $b956b2d7a6cf451f$var$ceToJulianDay($b956b2d7a6cf451f$var$COPTIC_EPOCH, year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let year = date.year;
        if (date.era === 'BCE') year = 1 - year;
        return $b956b2d7a6cf451f$var$getDaysInMonth(year, date.month);
    }
    isInverseEra(date) {
        return date.era === 'BCE';
    }
    balanceDate(date) {
        if (date.year <= 0) {
            date.era = date.era === 'BCE' ? 'CE' : 'BCE';
            date.year = 1 - date.year;
        }
    }
    getEras() {
        return [
            'BCE',
            'CE'
        ];
    }
    getYearsInEra(date) {
        // 9999-12-30 gregorian is 9716-02-20 coptic.
        // Round down to 9715 for the last full year.
        // BCE 9999-01-01 coptic is BC 9716-06-15 gregorian.
        return date.era === 'BCE' ? 9999 : 9715;
    }
    constructor(...args){
        super(...args), this.identifier = 'coptic';
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








function $64244302c3013299$export$dd0bbc9b26defe37(name) {
    switch(name){
        case 'buddhist':
            return new ($8d73d47422ca7302$export$42d20a78301dee44)();
        case 'ethiopic':
            return new ($b956b2d7a6cf451f$export$26ba6eab5e20cd7d)();
        case 'ethioaa':
            return new ($b956b2d7a6cf451f$export$d72e0c37005a4914)();
        case 'coptic':
            return new ($b956b2d7a6cf451f$export$fe6243cbe1a4b7c1)();
        case 'hebrew':
            return new ($7c5f6fbf42389787$export$ca405048b8fb5af)();
        case 'indian':
            return new ($82c358003bdda0a8$export$39f31c639fa15726)();
        case 'islamic-civil':
            return new ($f2f3e0e3a817edbd$export$2066795aadd37bfc)();
        case 'islamic-tbla':
            return new ($f2f3e0e3a817edbd$export$37f0887f2f9d22f7)();
        case 'islamic-umalqura':
            return new ($f2f3e0e3a817edbd$export$5baab4758c231076)();
        case 'japanese':
            return new ($62225008020f0a13$export$b746ab2b60cdffbf)();
        case 'persian':
            return new ($f3ed2e4472ae7e25$export$37fccdbfd14c5939)();
        case 'roc':
            return new ($5f31bd6f0c8940b2$export$65e01080afcb0799)();
        case 'gregory':
        default:
            return new ($3b62074eb05584b2$export$80ee6245ec4f29ec)();
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $fb18d541ea1ad717$var$formatterCache = new Map();
class $fb18d541ea1ad717$export$ad991b66133851cf {
    /** Formats a date as a string according to the locale and format options passed to the constructor. */ format(value) {
        return this.formatter.format(value);
    }
    /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */ formatToParts(value) {
        return this.formatter.formatToParts(value);
    }
    /** Formats a date range as a string. */ formatRange(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRange === 'function') // @ts-ignore
        return this.formatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.formatter.format(start)} \u{2013} ${this.formatter.format(end)}`;
    }
    /** Formats a date range as an array of parts. */ formatRangeToParts(start, end) {
        // @ts-ignore
        if (typeof this.formatter.formatRangeToParts === 'function') // @ts-ignore
        return this.formatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.formatter.formatToParts(start);
        let endParts = this.formatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let resolvedOptions = this.formatter.resolvedOptions();
        if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
            if (!this.resolvedHourCycle) this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
            resolvedOptions.hourCycle = this.resolvedHourCycle;
            resolvedOptions.hour12 = this.resolvedHourCycle === 'h11' || this.resolvedHourCycle === 'h12';
        }
        // Safari uses a different name for the Ethiopic (Amete Alem) calendar.
        // https://bugs.webkit.org/show_bug.cgi?id=241564
        if (resolvedOptions.calendar === 'ethiopic-amete-alem') resolvedOptions.calendar = 'ethioaa';
        return resolvedOptions;
    }
    constructor(locale, options = {}){
        this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
        this.options = options;
    }
}
// There are multiple bugs involving the hour12 and hourCycle options in various browser engines.
//   - Chrome [1] (and the ECMA 402 spec [2]) resolve hour12: false in English and other locales to h24 (24:00 - 23:59)
//     rather than h23 (00:00 - 23:59). Same can happen with hour12: true in French, which Chrome resolves to h11 (00:00 - 11:59)
//     rather than h12 (12:00 - 11:59).
//   - WebKit returns an incorrect hourCycle resolved option in the French locale due to incorrect parsing of 'h' literal
//     in the resolved pattern. It also formats incorrectly when specifying the hourCycle option for the same reason. [3]
// [1] https://bugs.chromium.org/p/chromium/issues/detail?id=1045791
// [2] https://github.com/tc39/ecma402/issues/402
// [3] https://bugs.webkit.org/show_bug.cgi?id=229313
// https://github.com/unicode-org/cldr/blob/018b55eff7ceb389c7e3fc44e2f657eae3b10b38/common/supplemental/supplementalData.xml#L4774-L4802
const $fb18d541ea1ad717$var$hour12Preferences = {
    true: {
        // Only Japanese uses the h11 style for 12 hour time. All others use h12.
        ja: 'h11'
    },
    false: {
    }
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
    // Work around buggy hour12 behavior in Chrome / ECMA 402 spec by using hourCycle instead.
    // Only apply the workaround if the issue is detected, because the hourCycle option is buggy in Safari.
    if (typeof options.hour12 === 'boolean' && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
        options = {
            ...options
        };
        let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split('-')[0]];
        let defaultHourCycle = options.hour12 ? 'h12' : 'h23';
        options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
        delete options.hour12;
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey)) return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.DateTimeFormat(locale, options);
    $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
let $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
    if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null) $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        hour12: false
    }).format(new Date(2020, 2, 3, 0)) === '24';
    return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
let $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
    if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null) $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat('fr', {
        hour: 'numeric',
        hour12: false
    }).resolvedOptions().hourCycle === 'h12';
    return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
    if (!options.timeStyle && !options.hour) return undefined;
    // Work around buggy results in resolved hourCycle and hour12 options in WebKit.
    // Format the minimum possible hour and maximum possible hour in a day and parse the results.
    locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    locale += (locale.includes('-u-') ? '' : '-u') + '-nu-latn';
    let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
        ...options,
        timeZone: undefined // use local timezone
    });
    let min = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p)=>p.type === 'hour').value, 10);
    let max = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p)=>p.type === 'hour').value, 10);
    if (min === 0 && max === 23) return 'h23';
    if (min === 24 && max === 23) return 'h24';
    if (min === 0 && max === 11) return 'h11';
    if (min === 12 && max === 11) return 'h12';
    throw new Error('Unexpected hour cycle result');
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = ($5a387cc49350e6db$export$722debc0e56fea39)(options !== null && options !== void 0 ? options : {}, $896ba0a80a8f4d36$var$isEqual);
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (useMemo)(()=>new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, options), [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
const $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
    'latn',
    'arab',
    'hanidec',
    'deva',
    'beng'
];
class $6c7bd7858deea686$export$cd11ab140839f11d {
    /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */ parse(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
    }
    /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */ isValidPartialNumber(value, minValue, maxValue) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
    }
    /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */ getNumberingSystem(value) {
        return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        this.options = options;
    }
}
const $6c7bd7858deea686$var$numberParserCache = new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
    // First try the default numbering system for the provided locale
    let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
    // If that doesn't match, and the locale doesn't include a hard coded numbering system,
    // try each of the other supported numbering systems until we find one that matches.
    if (!locale.includes('-nu-') && !defaultParser.isValidPartialNumber(value)) {
        for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
            let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes('-u-') ? '-nu-' : '-u-nu-') + numberingSystem, options);
            if (parser.isValidPartialNumber(value)) return parser;
        }
    }
    return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
    if (!parser) {
        parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
        $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
    }
    return parser;
}
// The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.
class $6c7bd7858deea686$var$NumberParserImpl {
    parse(value) {
        // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
        let fullySanitizedValue = this.sanitize(value);
        if (this.symbols.group) // Remove group characters, and replace decimal points and numerals with ASCII values.
        fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, '');
        if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, '.');
        if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, '-');
        fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
        if (this.options.style === 'percent') {
            // javascript is bad at dividing by 100 and maintaining the same significant figures, so perform it on the string before parsing
            let isNegative = fullySanitizedValue.indexOf('-');
            fullySanitizedValue = fullySanitizedValue.replace('-', '');
            fullySanitizedValue = fullySanitizedValue.replace('+', '');
            let index = fullySanitizedValue.indexOf('.');
            if (index === -1) index = fullySanitizedValue.length;
            fullySanitizedValue = fullySanitizedValue.replace('.', '');
            if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
            else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
            else if (index - 2 === -2) fullySanitizedValue = '0.00';
            else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
            if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
        }
        let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
        if (isNaN(newValue)) return NaN;
        if (this.options.style === 'percent') {
            var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
            // extra step for rounding percents to what our formatter would output
            let options = {
                ...this.options,
                style: 'decimal',
                minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) + 2, 20),
                maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2, 20)
            };
            return new $6c7bd7858deea686$export$cd11ab140839f11d(this.locale, options).parse(new ($488c6ddbf4ef74c2$export$cc77c4ff7e8673c5)(this.locale, options).format(newValue));
        }
        // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
        if (this.options.currencySign === 'accounting' && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
        return newValue;
    }
    sanitize(value) {
        // Remove literals and whitespace, which are allowed anywhere in the string
        value = value.replace(this.symbols.literals, '');
        // Replace the ASCII minus sign with the minus sign used in the current locale
        // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
        if (this.symbols.minusSign) value = value.replace('-', this.symbols.minusSign);
        // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
        // instead they use the , (44) character or apparently the (1548) character.
        if (this.options.numberingSystem === 'arab') {
            if (this.symbols.decimal) {
                value = value.replace(',', this.symbols.decimal);
                value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
            }
            if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, '.', this.symbols.group);
        }
        // fr-FR group character is narrow non-breaking space, char code 8239 (U+202F), but that's not a key on the french keyboard,
        // so allow space and non-breaking space as a group char as well
        if (this.options.locale === 'fr-FR' && this.symbols.group) {
            value = $6c7bd7858deea686$var$replaceAll(value, ' ', this.symbols.group);
            value = $6c7bd7858deea686$var$replaceAll(value, /\u00A0/g, this.symbols.group);
        }
        return value;
    }
    isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
        value = this.sanitize(value);
        // Remove minus or plus sign, which must be at the start of the string.
        if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
        else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
        // Numbers cannot start with a group separator
        if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
        // Numbers that can't have any decimal values fail if a decimal character is typed
        if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
        // Remove numerals, groups, and decimals
        if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, '');
        value = value.replace(this.symbols.numeral, '');
        if (this.symbols.decimal) value = value.replace(this.symbols.decimal, '');
        // The number is valid if there are no remaining characters
        return value.length === 0;
    }
    constructor(locale, options = {}){
        this.locale = locale;
        // see https://tc39.es/ecma402/#sec-setnfdigitoptions, when using roundingIncrement, the maximumFractionDigits and minimumFractionDigits must be equal
        // by default, they are 0 and 3 respectively, so we set them to 0 if neither are set
        if (options.roundingIncrement !== 1 && options.roundingIncrement != null) {
            if (options.maximumFractionDigits == null && options.minimumFractionDigits == null) {
                options.maximumFractionDigits = 0;
                options.minimumFractionDigits = 0;
            } else if (options.maximumFractionDigits == null) options.maximumFractionDigits = options.minimumFractionDigits;
            else if (options.minimumFractionDigits == null) options.minimumFractionDigits = options.maximumFractionDigits;
        // if both are specified, let the normal Range Error be thrown
        }
        this.formatter = new Intl.NumberFormat(locale, options);
        this.options = this.formatter.resolvedOptions();
        this.symbols = $6c7bd7858deea686$var$getSymbols(locale, this.formatter, this.options, options);
        var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
        if (this.options.style === 'percent' && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) > 18)) console.warn('NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.');
    }
}
const $6c7bd7858deea686$var$nonLiteralParts = new Set([
    'decimal',
    'fraction',
    'integer',
    'minusSign',
    'plusSign',
    'group'
]);
// This list is derived from https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html#comparison and includes
// all unique numbers which we need to check in order to determine all the plural forms for a given locale.
// See: https://github.com/adobe/react-spectrum/pull/5134/files#r1337037855 for used script
const $6c7bd7858deea686$var$pluralNumbers = [
    0,
    4,
    2,
    1,
    11,
    20,
    3,
    7,
    100,
    21,
    0.1,
    1.1
];
function $6c7bd7858deea686$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
    var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
    // formatter needs access to all decimal places in order to generate the correct literal strings for the plural set
    let symbolFormatter = new Intl.NumberFormat(locale, {
        ...intlOptions,
        // Resets so we get the full range of symbols
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 21,
        roundingIncrement: 1,
        roundingPriority: 'auto',
        roundingMode: 'halfExpand'
    });
    // Note: some locale's don't add a group symbol until there is a ten thousands place
    let allParts = symbolFormatter.formatToParts(-10000.111);
    let posAllParts = symbolFormatter.formatToParts(10000.111);
    let pluralParts = $6c7bd7858deea686$var$pluralNumbers.map((n)=>symbolFormatter.formatToParts(n));
    var _allParts_find_value;
    let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p)=>p.type === 'minusSign')) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : '-';
    let plusSign = (_posAllParts_find = posAllParts.find((p)=>p.type === 'plusSign')) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
    // Safari does not support the signDisplay option, but our number parser polyfills it.
    // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
    if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'exceptZero' || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'always')) plusSign = '+';
    // If maximumSignificantDigits is 1 (the minimum) then we won't get decimal characters out of the above formatters
    // Percent also defaults to 0 fractionDigits, so we need to make a new one that isn't percent to get an accurate decimal
    let decimalParts = new Intl.NumberFormat(locale, {
        ...intlOptions,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).formatToParts(0.001);
    let decimal = (_decimalParts_find = decimalParts.find((p)=>p.type === 'decimal')) === null || _decimalParts_find === void 0 ? void 0 : _decimalParts_find.value;
    let group = (_allParts_find1 = allParts.find((p)=>p.type === 'group')) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
    // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
    // don't contribute to the numerical value
    let allPartsLiterals = allParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value));
    let pluralPartsLiterals = pluralParts.flatMap((p)=>p.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value)));
    let sortedLiterals = [
        ...new Set([
            ...allPartsLiterals,
            ...pluralPartsLiterals
        ])
    ].sort((a, b)=>b.length - a.length);
    let literals = sortedLiterals.length === 0 ? new RegExp('[\\p{White_Space}]', 'gu') : new RegExp(`${sortedLiterals.join('|')}|[\\p{White_Space}]`, 'gu');
    // These are for replacing non-latn characters with the latn equivalent
    let numerals = [
        ...new Intl.NumberFormat(intlOptions.locale, {
            useGrouping: false
        }).format(9876543210)
    ].reverse();
    let indexes = new Map(numerals.map((d, i)=>[
            d,
            i
        ]));
    let numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    let index = (d)=>String(indexes.get(d));
    return {
        minusSign: minusSign,
        plusSign: plusSign,
        decimal: decimal,
        group: group,
        literals: literals,
        numeral: numeral,
        index: index
    };
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
    if (str.replaceAll) return str.replaceAll(find, replace);
    return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = ($325a3faab7a68acd$export$a16aca283550c30d)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = 'button', isDisabled: isDisabled, onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, onPressChange: onPressChange, preventFocusOnPress: preventFocusOnPress, allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled, onClick: onClick, href: href, target: target, rel: rel, type: type = 'button' } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type: type,
        disabled: isDisabled
    };
    else additionalProps = {
        role: 'button',
        href: elementType === 'a' && !isDisabled ? href : undefined,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps: pressProps, isPressed: isPressed } = ($f6c31cce2adf654f$export$45712eceda6fad21)({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        onPressUp: onPressUp,
        onClick: onClick,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps } = ($f645667febf57a63$export$4c014de7c8940b4c)(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = ($3ef42575df84b30b$export$9d1611c77c2fe928)(focusableProps, pressProps, ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            'aria-current': props['aria-current']
        })
    };
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $645f2e67b85a24c9$var$isStyleVisible(element) {
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = element.ownerDocument.defaultView;
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== '#comment' && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ ($dbSRa$react).createContext(null);
const $9bf71ea28793e738$var$RESTORE_FOCUS_EVENT = 'react-aria-focus-scope-restore';
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children, contain: contain, restoreFocus: restoreFocus, autoFocus: autoFocus } = props;
    let startRef = (useRef)(null);
    let endRef = (useRef)(null);
    let scopeRef = (useRef)([]);
    let { parentNode: parentNode } = (useContext)($9bf71ea28793e738$var$FocusContext) || {};
    // Create a tree node here so we can add children to it even before it is added to the tree.
    let node = (useMemo)(()=>new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        }), [
        scopeRef
    ]);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        // If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
        // use the active scope as the parent instead of the parent from context. Layout effects run bottom
        // up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
        // that is being added should get the activeScope as its parent.
        let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
        if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
            let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
            if (activeNode) parent = activeNode;
        }
        // Add the node to the parent, and to the tree.
        parent.addChild(node);
        $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
    }, [
        node,
        parentNode
    ]);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let node = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (node) node.contain = !!contain;
    }, [
        contain
    ]);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        var _startRef_current;
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = (_startRef_current = startRef.current) === null || _startRef_current === void 0 ? void 0 : _startRef_current.nextSibling;
        let nodes = [];
        let stopPropagation = (e)=>e.stopPropagation();
        while(node && node !== endRef.current){
            nodes.push(node);
            // Stop custom restore focus event from propagating to parent focus scopes.
            node.addEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, stopPropagation);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
        return ()=>{
            for (let node of nodes)node.removeEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, stopPropagation);
        };
    }, [
        children
    ]);
    $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    // This needs to be an effect so that activeScope is updated after the FocusScope tree is complete.
    // It cannot be a useLayoutEffect because the parent of this node hasn't been attached in the tree yet.
    (useEffect)(()=>{
        const activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)(scopeRef.current ? scopeRef.current[0] : undefined));
        let scope = null;
        if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
            // We need to traverse the focusScope tree and find the bottom most scope that
            // contains the active element and set that as the activeScope.
            for (let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())if (node.scopeRef && $9bf71ea28793e738$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
            if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
        }
    }, [
        scopeRef
    ]);
    // This layout effect cleanup is so that the tree node is removed synchronously with react before the RAF
    // in useRestoreFocus cleanup runs.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        return ()=>{
            var _focusScopeTree_getTreeNode_parent, _focusScopeTree_getTreeNode;
            var _focusScopeTree_getTreeNode_parent_scopeRef;
            // Scope may have been re-parented.
            let parentScope = (_focusScopeTree_getTreeNode_parent_scopeRef = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : (_focusScopeTree_getTreeNode_parent = _focusScopeTree_getTreeNode.parent) === null || _focusScopeTree_getTreeNode_parent === void 0 ? void 0 : _focusScopeTree_getTreeNode_parent.scopeRef) !== null && _focusScopeTree_getTreeNode_parent_scopeRef !== void 0 ? _focusScopeTree_getTreeNode_parent_scopeRef : null;
            if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
            $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
        };
    }, [
        scopeRef
    ]);
    let focusManager = (useMemo)(()=>$9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
    let value = (useMemo)(()=>({
            focusManager: focusManager,
            parentNode: node
        }), [
        node,
        focusManager
    ]);
    return /*#__PURE__*/ ($dbSRa$react).createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: value
    }, /*#__PURE__*/ ($dbSRa$react).createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ ($dbSRa$react).createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    }));
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            var _scope_;
            let node = from || ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)((_scope_ = scope[0]) !== null && _scope_ !== void 0 ? _scope_ : undefined));
            let sentinel = scope[0].previousElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            var _scope_;
            let node = from || ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)((_scope_ = scope[0]) !== null && _scope_ !== void 0 ? _scope_ : undefined));
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.contain) return false;
        scope = scope.parent;
    }
    return true;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = (useRef)(undefined);
    let raf = (useRef)(undefined);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let scope = scopeRef.current;
        if (!contain) {
            // if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
            if (raf.current) {
                cancelAnimationFrame(raf.current);
                raf.current = undefined;
            }
            return;
        }
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(scope ? scope[0] : undefined);
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
            let focusedElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
            let scope = scopeRef.current;
            if (!scope || !$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: true
            }, scope);
            if (!focusedElement) return;
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e), scopeRef.current)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e);
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(($d4ee10de306f2510$export$e58f029f0fbfdb29)(e), scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope && $9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e);
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(()=>{
                // Patches infinite focus coersion loop for Android Talkback where the user isn't able to move the virtual cursor
                // if within a containing focus scope. Bug filed against Chrome: https://issuetracker.google.com/issues/384844019.
                // Note that this means focus can leave focus containing modals due to this, but it is isolated to Chrome Talkback.
                let modality = ($507fabe10e71c6fb$export$630ff653c5ada6a9)();
                let shouldSkipFocusRestore = (modality === 'virtual' || modality === null) && ($c87311424ea30a05$export$a11b0059900ceec8)() && ($c87311424ea30a05$export$6446a186d09e379e)();
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                let activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
                if (!shouldSkipFocusRestore && activeElement && $9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    let target = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e);
                    if (target && target.isConnected) {
                        var _focusedNode_current;
                        focusedNode.current = target;
                        (_focusedNode_current = focusedNode.current) === null || _focusedNode_current === void 0 ? void 0 : _focusedNode_current.focus();
                    } else if ($9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
                }
            });
        };
        ownerDocument.addEventListener('keydown', onKeyDown, false);
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusout', onBlur, false));
        return ()=>{
            ownerDocument.removeEventListener('keydown', onKeyDown, false);
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusout', onBlur, false));
        };
    }, [
        scopeRef,
        contain
    ]);
    // This is a useLayoutEffect so it is guaranteed to run before our async synthetic blur
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    if (!element) return false;
    if (!scope) return false;
    return scope.some((node)=>node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
    // If the element is within a top layer element (e.g. toasts), always allow moving focus there.
    if (element instanceof Element && element.closest('[data-react-aria-top-layer]')) return true;
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))){
        if (s && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    var _focusScopeTree_getTreeNode;
    let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
    while(parent){
        if (parent.scopeRef === ancestor) return true;
        parent = parent.parent;
    }
    return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, $3ad3f6e1647bc98d$export$80f3e147d781571c)(element);
    } catch  {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch  {
    // ignore
    }
}
function $9bf71ea28793e738$var$getFirstInScope(scope, tabbable = true) {
    let sentinel = scope[0].previousElementSibling;
    let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable: tabbable
    }, scope);
    walker.currentNode = sentinel;
    let nextNode = walker.nextNode();
    // If the scope does not contain a tabbable element, use the first focusable element.
    if (tabbable && !nextNode) {
        scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
        walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
            tabbable: false
        }, scope);
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
    }
    return nextNode;
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
    $9bf71ea28793e738$var$focusElement($9bf71ea28793e738$var$getFirstInScope(scope, tabbable));
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = ($dbSRa$react).useRef(autoFocus);
    (useEffect)(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(scopeRef.current ? scopeRef.current[0] : undefined);
            if (!$9bf71ea28793e738$var$isElementInScope(($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument), $9bf71ea28793e738$var$activeScope.current) && scopeRef.current) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, [
        scopeRef
    ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
    // tracks the active scope, in case restore and contain are both false.
    // if either are true, this is tracked in useRestoreFocus or useFocusContainment.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (restore || contain) return;
        let scope = scopeRef.current;
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(scope ? scope[0] : undefined);
        let onFocus = (e)=>{
            let target = ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e);
            if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
            else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
        };
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
        };
    }, [
        scopeRef,
        restore,
        contain
    ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.nodeToRestore) return false;
        scope = scope.parent;
    }
    return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    // eslint-disable-next-line no-restricted-globals
    const nodeToRestoreRef = (useRef)(typeof document !== 'undefined' ? ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)(scopeRef.current ? scopeRef.current[0] : undefined)) : null);
    // restoring scopes should all track if they are active regardless of contain, but contain already tracks it plus logic to contain the focus
    // restoring-non-containing scopes should only care if they become active so they can perform the restore
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let scope = scopeRef.current;
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(scope ? scope[0] : undefined);
        if (!restoreFocus || contain) return;
        let onFocus = ()=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument), scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
        };
        ownerDocument.addEventListener('focusin', onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener('focusin', onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener('focusin', onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener('focusin', onFocus, false));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        scopeRef,
        contain
    ]);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
            let focusedElement = ownerDocument.activeElement;
            if (!$9bf71ea28793e738$var$isElementInChildScope(focusedElement, scopeRef) || !$9bf71ea28793e738$var$shouldRestoreFocus(scopeRef)) return;
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ownerDocument.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nodeToRestore || !nodeToRestore.isConnected || nodeToRestore === ownerDocument.body) {
                nodeToRestore = undefined;
                treeNode.nodeToRestore = undefined;
            }
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInChildScope(nextElement, scopeRef)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInChildScope(nextElement, scopeRef));
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) ownerDocument.addEventListener('keydown', onKeyDown, true);
        return ()=>{
            if (!contain) ownerDocument.removeEventListener('keydown', onKeyDown, true);
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (!treeNode) return;
        var _nodeToRestoreRef_current;
        treeNode.nodeToRestore = (_nodeToRestoreRef_current = nodeToRestoreRef.current) !== null && _nodeToRestoreRef_current !== void 0 ? _nodeToRestoreRef_current : undefined;
        return ()=>{
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // if we already lost focus to the body and this was the active scope, then we should attempt to restore
            let activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
            if (restoreFocus && nodeToRestore && (activeElement && $9bf71ea28793e738$var$isElementInChildScope(activeElement, scopeRef) || activeElement === ownerDocument.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
                // freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
                let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
                requestAnimationFrame(()=>{
                    // Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
                    if (ownerDocument.activeElement === ownerDocument.body) {
                        // look up the tree starting with our scope to find a nodeToRestore still in the DOM
                        let treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.nodeToRestore && treeNode.nodeToRestore.isConnected) {
                                $9bf71ea28793e738$var$restoreFocusToElement(treeNode.nodeToRestore);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                        // If no nodeToRestore was found, focus the first element in the nearest
                        // ancestor scope that is still in the tree.
                        treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.scopeRef && treeNode.scopeRef.current && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
                                let node = $9bf71ea28793e738$var$getFirstInScope(treeNode.scopeRef.current, true);
                                $9bf71ea28793e738$var$restoreFocusToElement(node);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                    }
                });
            }
        };
    }, [
        scopeRef,
        restoreFocus
    ]);
}
function $9bf71ea28793e738$var$restoreFocusToElement(node) {
    // Dispatch a custom event that parent elements can intercept to customize focus restoration.
    // For example, virtualized collection components reuse DOM elements, so the original element
    // might still exist in the DOM but representing a different item.
    if (node.dispatchEvent(new CustomEvent($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT, {
        bubbles: true,
        cancelable: true
    }))) $9bf71ea28793e738$var$focusElement(node);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let filter = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? ($b4b717babfbb907b$export$bebd5a1431fec25d) : ($b4b717babfbb907b$export$4c063cf1350e6fed);
    // Ensure that root is an Element or fall back appropriately
    let rootElement = (root === null || root === void 0 ? void 0 : root.nodeType) === Node.ELEMENT_NODE ? root : null;
    // Determine the document to use
    let doc = ($431fbd86ca7dc216$export$b204af158042fbac)(rootElement);
    // Create a TreeWalker, ensuring the root is an Element or Document
    let walker = ($dfc540311bf7f109$export$4d0f8be8b12a7ef6)(doc, root || doc, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var _opts_from;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
            if (filter(node) && ($645f2e67b85a24c9$export$e989c0fffaa6b27a)(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)(root));
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || ($d4ee10de306f2510$export$cd4e5573fbe2b576)(($431fbd86ca7dc216$export$b204af158042fbac)(root));
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next !== null && next !== void 0 ? next : null;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                let lastNode = $9bf71ea28793e738$var$last(walker);
                if (!lastNode) // couldn't wrap
                return null;
                previousNode = lastNode;
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode !== null && previousNode !== void 0 ? previousNode : null;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next !== null && next !== void 0 ? next : null;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next = undefined;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
class $9bf71ea28793e738$var$Tree {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
        if (!parentNode) return;
        let node = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        if (!node) return;
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        if (parentNode) {
            parentNode.removeChild(node);
            if (children.size > 0) children.forEach((child)=>parentNode && parentNode.addChild(child));
        }
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        var _node_parent;
        let newTree = new $9bf71ea28793e738$var$Tree();
        var _node_parent_scopeRef;
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
        return newTree;
    }
    constructor(){
        this.fastMap = new Map();
        this.root = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
}
class $9bf71ea28793e738$var$TreeNode {
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
    constructor(props){
        this.children = new Set();
        this.contain = false;
        this.scopeRef = props.scopeRef;
    }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || ($507fabe10e71c6fb$export$b9b3dfddab17db27)()
    });
    let [isFocused, setFocused] = (useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    ($507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = ($a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}

var $39324ace0d945f59$exports = {};
$39324ace0d945f59$exports = {
    "dateRange": (args)=>`${args.startDate} \u{625}\u{644}\u{649} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
    "finishRangeSelectionPrompt": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{625}\u{646}\u{647}\u{627}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
    "maximumDate": `\u{622}\u{62E}\u{631} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
    "minimumDate": `\u{623}\u{648}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
    "next": `\u{627}\u{644}\u{62A}\u{627}\u{644}\u{64A}`,
    "previous": `\u{627}\u{644}\u{633}\u{627}\u{628}\u{642}`,
    "selectedDateDescription": (args)=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
    "todayDate": (args)=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${args.date}`,
    "todayDateSelected": (args)=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${args.date} \u{645}\u{62D}\u{62F}\u{62F}`
};

var $1830a539e98c7baf$exports = {};
$1830a539e98c7baf$exports = {
    "dateRange": (args)=>`${args.startDate} \u{434}\u{43E} ${args.endDate}`,
    "dateSelected": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{434}\u{43E}\u{432}\u{44A}\u{440}\u{448}\u{438}\u{442}\u{435} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
    "maximumDate": `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{44A}\u{440}\u{432}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{41D}\u{430}\u{43F}\u{440}\u{435}\u{434}`,
    "previous": `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
    "selectedDateDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{438}\u{441}\u{442}\u{44A}\u{43F}\u{438}\u{442}\u{435} \u{43A}\u{44A}\u{43C} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
    "todayDate": (args)=>`\u{414}\u{43D}\u{435}\u{441}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{414}\u{43D}\u{435}\u{441}, ${args.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};

var $f4b92528965aab97$exports = {};
$f4b92528965aab97$exports = {
    "dateRange": (args)=>`${args.startDate} a\u{17E} ${args.endDate}`,
    "dateSelected": (args)=>`Vybr\xe1no ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknut\xedm dokon\u{10D}\xedte v\xfdb\u{11B}r rozsahu dat`,
    "maximumDate": `Posledn\xed dostupn\xe9 datum`,
    "minimumDate": `Prvn\xed dostupn\xe9 datum`,
    "next": `Dal\u{161}\xed`,
    "previous": `P\u{159}edchoz\xed`,
    "selectedDateDescription": (args)=>`Vybran\xe9 datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybran\xe9 obdob\xed: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknut\xedm zah\xe1j\xedte v\xfdb\u{11B}r rozsahu dat`,
    "todayDate": (args)=>`Dnes, ${args.date}`,
    "todayDateSelected": (args)=>`Dnes, vybr\xe1no ${args.date}`
};

var $1cd578ef0547c8f1$exports = {};
$1cd578ef0547c8f1$exports = {
    "dateRange": (args)=>`${args.startDate} til ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valgt`,
    "finishRangeSelectionPrompt": `Klik for at fuldf\xf8re valg af datoomr\xe5de`,
    "maximumDate": `Sidste ledige dato`,
    "minimumDate": `F\xf8rste ledige dato`,
    "next": `N\xe6ste`,
    "previous": `Forrige`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt interval: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klik for at starte valg af datoomr\xe5de`,
    "todayDate": (args)=>`I dag, ${args.date}`,
    "todayDateSelected": (args)=>`I dag, ${args.date} valgt`
};

var $db55a8973925d619$exports = {};
$db55a8973925d619$exports = {
    "dateRange": (args)=>`${args.startDate} bis ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} ausgew\xe4hlt`,
    "finishRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beenden`,
    "maximumDate": `Letztes verf\xfcgbares Datum`,
    "minimumDate": `Erstes verf\xfcgbares Datum`,
    "next": `Weiter`,
    "previous": `Zur\xfcck`,
    "selectedDateDescription": (args)=>`Ausgew\xe4hltes Datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Ausgew\xe4hlter Bereich: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klicken, um die Auswahl des Datumsbereichs zu beginnen`,
    "todayDate": (args)=>`Heute, ${args.date}`,
    "todayDateSelected": (args)=>`Heute, ${args.date} ausgew\xe4hlt`
};

var $ec6937d58566d443$exports = {};
$ec6937d58566d443$exports = {
    "dateRange": (args)=>`${args.startDate} \u{3AD}\u{3C9}\u{3C2} ${args.endDate}`,
    "dateSelected": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BF}\u{3BB}\u{3BF}\u{3BA}\u{3BB}\u{3B7}\u{3C1}\u{3CE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
    "maximumDate": `\u{3A4}\u{3B5}\u{3BB}\u{3B5}\u{3C5}\u{3C4}\u{3B1}\u{3AF}\u{3B1} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
    "minimumDate": `\u{3A0}\u{3C1}\u{3CE}\u{3C4}\u{3B7} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
    "next": `\u{395}\u{3C0}\u{3CC}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "previous": `\u{3A0}\u{3C1}\u{3BF}\u{3B7}\u{3B3}\u{3BF}\u{3CD}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "selectedDateDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
    "todayDate": (args)=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${args.date}`
};

var $1f5cea0742dc284a$exports = {};
$1f5cea0742dc284a$exports = {
    "previous": `Previous`,
    "next": `Next`,
    "selectedDateDescription": (args)=>`Selected Date: ${args.date}`,
    "selectedRangeDescription": (args)=>`Selected Range: ${args.dateRange}`,
    "todayDate": (args)=>`Today, ${args.date}`,
    "todayDateSelected": (args)=>`Today, ${args.date} selected`,
    "dateSelected": (args)=>`${args.date} selected`,
    "startRangeSelectionPrompt": `Click to start selecting date range`,
    "finishRangeSelectionPrompt": `Click to finish selecting date range`,
    "minimumDate": `First available date`,
    "maximumDate": `Last available date`,
    "dateRange": (args)=>`${args.startDate} to ${args.endDate}`
};

var $2ca7ea366384817b$exports = {};
$2ca7ea366384817b$exports = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} seleccionado`,
    "finishRangeSelectionPrompt": `Haga clic para terminar de seleccionar rango de fechas`,
    "maximumDate": `\xdaltima fecha disponible`,
    "minimumDate": `Primera fecha disponible`,
    "next": `Siguiente`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Fecha seleccionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo seleccionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Haga clic para comenzar a seleccionar un rango de fechas`,
    "todayDate": (args)=>`Hoy, ${args.date}`,
    "todayDateSelected": (args)=>`Hoy, ${args.date} seleccionado`
};

var $97874a7fe9cd091f$exports = {};
$97874a7fe9cd091f$exports = {
    "dateRange": (args)=>`${args.startDate} kuni ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valitud`,
    "finishRangeSelectionPrompt": `Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks`,
    "maximumDate": `Viimane saadaolev kuup\xe4ev`,
    "minimumDate": `Esimene saadaolev kuup\xe4ev`,
    "next": `J\xe4rgmine`,
    "previous": `Eelmine`,
    "selectedDateDescription": (args)=>`Valitud kuup\xe4ev: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valitud vahemik: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kl\xf5psake kuup\xe4evavahemiku valimiseks`,
    "todayDate": (args)=>`T\xe4na, ${args.date}`,
    "todayDateSelected": (args)=>`T\xe4na, ${args.date} valitud`
};

var $5d376b7fce1a45b2$exports = {};
$5d376b7fce1a45b2$exports = {
    "dateRange": (args)=>`${args.startDate} \u{2013} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valittu`,
    "finishRangeSelectionPrompt": `Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
    "maximumDate": `Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
    "minimumDate": `Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
    "next": `Seuraava`,
    "previous": `Edellinen`,
    "selectedDateDescription": (args)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valittu aikav\xe4li: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
    "todayDate": (args)=>`T\xe4n\xe4\xe4n, ${args.date}`,
    "todayDateSelected": (args)=>`T\xe4n\xe4\xe4n, ${args.date} valittu`
};

var $3bf722b362aaf54d$exports = {};
$3bf722b362aaf54d$exports = {
    "dateRange": (args)=>`${args.startDate} \xe0 ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} s\xe9lectionn\xe9`,
    "finishRangeSelectionPrompt": `Cliquer pour finir de s\xe9lectionner la plage de dates`,
    "maximumDate": `Derni\xe8re date disponible`,
    "minimumDate": `Premi\xe8re date disponible`,
    "next": `Suivant`,
    "previous": `Pr\xe9c\xe9dent`,
    "selectedDateDescription": (args)=>`Date s\xe9lectionn\xe9e\xa0: ${args.date}`,
    "selectedRangeDescription": (args)=>`Plage s\xe9lectionn\xe9e\xa0: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates`,
    "todayDate": (args)=>`Aujourd'hui, ${args.date}`,
    "todayDateSelected": (args)=>`Aujourd\u{2019}hui, ${args.date} s\xe9lectionn\xe9`
};

var $38c43f8322316031$exports = {};
$38c43f8322316031$exports = {
    "dateRange": (args)=>`${args.startDate} \u{5E2}\u{5D3} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
    "finishRangeSelectionPrompt": `\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E1}\u{5D9}\u{5D9}\u{5DD} \u{5D0}\u{5EA} \u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
    "maximumDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5D0}\u{5D7}\u{5E8}\u{5D5}\u{5DF}`,
    "minimumDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5E8}\u{5D0}\u{5E9}\u{5D5}\u{5DF}`,
    "next": `\u{5D4}\u{5D1}\u{5D0}`,
    "previous": `\u{5D4}\u{5E7}\u{5D5}\u{5D3}\u{5DD}`,
    "selectedDateDescription": (args)=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5D1}\u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
    "todayDate": (args)=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${args.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};

var $c90e0f32b44630bf$exports = {};
$c90e0f32b44630bf$exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} odabran`,
    "finishRangeSelectionPrompt": `Kliknite da dovr\u{161}ite raspon odabranih datuma`,
    "maximumDate": `Posljednji raspolo\u{17E}ivi datum`,
    "minimumDate": `Prvi raspolo\u{17E}ivi datum`,
    "next": `Sljede\u{107}i`,
    "previous": `Prethodni`,
    "selectedDateDescription": (args)=>`Odabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Odabrani raspon: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite da zapo\u{10D}nete raspon odabranih datuma`,
    "todayDate": (args)=>`Danas, ${args.date}`,
    "todayDateSelected": (args)=>`Danas, odabran ${args.date}`
};

var $715875e6e7a338f4$exports = {};
$715875e6e7a338f4$exports = {
    "dateRange": (args)=>`${args.startDate}\u{2013}${args.endDate}`,
    "dateSelected": (args)=>`${args.date} kiv\xe1lasztva`,
    "finishRangeSelectionPrompt": `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez`,
    "maximumDate": `Utols\xf3 el\xe9rhet\u{151} d\xe1tum`,
    "minimumDate": `Az els\u{151} el\xe9rhet\u{151} d\xe1tum`,
    "next": `K\xf6vetkez\u{151}`,
    "previous": `El\u{151}z\u{151}`,
    "selectedDateDescription": (args)=>`Kijel\xf6lt d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Kijel\xf6lt tartom\xe1ny: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz`,
    "todayDate": (args)=>`Ma, ${args.date}`,
    "todayDateSelected": (args)=>`Ma, ${args.date} kijel\xf6lve`
};

var $37d77c66e34daccf$exports = {};
$37d77c66e34daccf$exports = {
    "dateRange": (args)=>`Da ${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selezionata`,
    "finishRangeSelectionPrompt": `Fai clic per completare la selezione dell\u{2019}intervallo di date`,
    "maximumDate": `Ultima data disponibile`,
    "minimumDate": `Prima data disponibile`,
    "next": `Successivo`,
    "previous": `Precedente`,
    "selectedDateDescription": (args)=>`Data selezionata: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervallo selezionato: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Fai clic per selezionare l\u{2019}intervallo di date`,
    "todayDate": (args)=>`Oggi, ${args.date}`,
    "todayDateSelected": (args)=>`Oggi, ${args.date} selezionata`
};

var $542f39aee29303c3$exports = {};
$542f39aee29303c3$exports = {
    "dateRange": (args)=>`${args.startDate} \u{304B}\u{3089} ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{3092}\u{9078}\u{629E}`,
    "finishRangeSelectionPrompt": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{7D42}\u{4E86}`,
    "maximumDate": `\u{6700}\u{7D42}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
    "minimumDate": `\u{6700}\u{521D}\u{306E}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
    "next": `\u{6B21}\u{3078}`,
    "previous": `\u{524D}\u{3078}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{958B}\u{59CB}`,
    "todayDate": (args)=>`\u{672C}\u{65E5}\u{3001}${args.date}`,
    "todayDateSelected": (args)=>`\u{672C}\u{65E5}\u{3001}${args.date} \u{3092}\u{9078}\u{629E}`
};

var $22a5f0623ea73e4f$exports = {};
$22a5f0623ea73e4f$exports = {
    "dateRange": (args)=>`${args.startDate} ~ ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} \u{C120}\u{D0DD}\u{B428}`,
    "finishRangeSelectionPrompt": `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C644}\u{B8CC}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
    "maximumDate": `\u{B9C8}\u{C9C0}\u{B9C9}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
    "minimumDate": `\u{CC98}\u{C74C}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
    "next": `\u{B2E4}\u{C74C}`,
    "previous": `\u{C774}\u{C804}`,
    "selectedDateDescription": (args)=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
    "todayDate": (args)=>`\u{C624}\u{B298}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{C624}\u{B298}, ${args.date} \u{C120}\u{D0DD}\u{B428}`
};

var $522380d13d62cba0$exports = {};
$522380d13d62cba0$exports = {
    "dateRange": (args)=>`Nuo ${args.startDate} iki ${args.endDate}`,
    "dateSelected": (args)=>`Pasirinkta ${args.date}`,
    "finishRangeSelectionPrompt": `Spustel\u{117}kite, kad baigtum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    "maximumDate": `Paskutin\u{117} galima data`,
    "minimumDate": `Pirmoji galima data`,
    "next": `Paskesnis`,
    "previous": `Ankstesnis`,
    "selectedDateDescription": (args)=>`Pasirinkta data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Pasirinktas intervalas: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Spustel\u{117}kite, kad prad\u{117}tum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
    "todayDate": (args)=>`\u{160}iandien, ${args.date}`,
    "todayDateSelected": (args)=>`\u{160}iandien, pasirinkta ${args.date}`
};

var $8a7bc830b2fe6485$exports = {};
$8a7bc830b2fe6485$exports = {
    "dateRange": (args)=>`No ${args.startDate} l\u{12B}dz ${args.endDate}`,
    "dateSelected": (args)=>`Atlas\u{12B}ts: ${args.date}`,
    "finishRangeSelectionPrompt": `Noklik\u{161}\u{137}iniet, lai pabeigtu datumu diapazona atlasi`,
    "maximumDate": `P\u{113}d\u{113}jais pieejamais datums`,
    "minimumDate": `Pirmais pieejamais datums`,
    "next": `T\u{101}l\u{101}k`,
    "previous": `Atpaka\u{13C}`,
    "selectedDateDescription": (args)=>`Atlas\u{12B}tais datums: ${args.date}`,
    "selectedRangeDescription": (args)=>`Atlas\u{12B}tais diapazons: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Noklik\u{161}\u{137}iniet, lai s\u{101}ktu datumu diapazona atlasi`,
    "todayDate": (args)=>`\u{160}odien, ${args.date}`,
    "todayDateSelected": (args)=>`Atlas\u{12B}ta \u{161}odiena, ${args.date}`
};

var $9fac9c044470683b$exports = {};
$9fac9c044470683b$exports = {
    "dateRange": (args)=>`${args.startDate} til ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} valgt`,
    "finishRangeSelectionPrompt": `Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de`,
    "maximumDate": `Siste tilgjengelige dato`,
    "minimumDate": `F\xf8rste tilgjengelige dato`,
    "next": `Neste`,
    "previous": `Forrige`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt omr\xe5de: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klikk for \xe5 starte valg av datoomr\xe5de`,
    "todayDate": (args)=>`I dag, ${args.date}`,
    "todayDateSelected": (args)=>`I dag, ${args.date} valgt`
};

var $b127d3569efb1449$exports = {};
$b127d3569efb1449$exports = {
    "dateRange": (args)=>`${args.startDate} tot ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} geselecteerd`,
    "finishRangeSelectionPrompt": `Klik om de selectie van het datumbereik te voltooien`,
    "maximumDate": `Laatste beschikbare datum`,
    "minimumDate": `Eerste beschikbare datum`,
    "next": `Volgende`,
    "previous": `Vorige`,
    "selectedDateDescription": (args)=>`Geselecteerde datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Geselecteerd bereik: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klik om het datumbereik te selecteren`,
    "todayDate": (args)=>`Vandaag, ${args.date}`,
    "todayDateSelected": (args)=>`Vandaag, ${args.date} geselecteerd`
};

var $51404a4090633490$exports = {};
$51404a4090633490$exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`Wybrano ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknij, aby zako\u{144}czy\u{107} wyb\xf3r zakresu dat`,
    "maximumDate": `Ostatnia dost\u{119}pna data`,
    "minimumDate": `Pierwsza dost\u{119}pna data`,
    "next": `Dalej`,
    "previous": `Wstecz`,
    "selectedDateDescription": (args)=>`Wybrana data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Wybrany zakres: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknij, aby rozpocz\u{105}\u{107} wyb\xf3r zakresu dat`,
    "todayDate": (args)=>`Dzisiaj, ${args.date}`,
    "todayDateSelected": (args)=>`Dzisiaj wybrano ${args.date}`
};

var $e5e6a3fe3b4527df$exports = {};
$e5e6a3fe3b4527df$exports = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selecionado`,
    "finishRangeSelectionPrompt": `Clique para concluir a sele\xe7\xe3o do intervalo de datas`,
    "maximumDate": `\xdaltima data dispon\xedvel`,
    "minimumDate": `Primeira data dispon\xedvel`,
    "next": `Pr\xf3ximo`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Clique para iniciar a sele\xe7\xe3o do intervalo de datas`,
    "todayDate": (args)=>`Hoje, ${args.date}`,
    "todayDateSelected": (args)=>`Hoje, ${args.date} selecionado`
};

var $c519dcadcbb1ee47$exports = {};
$c519dcadcbb1ee47$exports = {
    "dateRange": (args)=>`${args.startDate} a ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selecionado`,
    "finishRangeSelectionPrompt": `Clique para terminar de selecionar o intervalo de datas`,
    "maximumDate": `\xdaltima data dispon\xedvel`,
    "minimumDate": `Primeira data dispon\xedvel`,
    "next": `Pr\xf3ximo`,
    "previous": `Anterior`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Clique para come\xe7ar a selecionar o intervalo de datas`,
    "todayDate": (args)=>`Hoje, ${args.date}`,
    "todayDateSelected": (args)=>`Hoje, ${args.date} selecionado`
};

var $e5aa0186ca7889c6$exports = {};
$e5aa0186ca7889c6$exports = {
    "dateRange": (args)=>`De la ${args.startDate} p\xe2n\u{103} la ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} selectat\u{103}`,
    "finishRangeSelectionPrompt": `Ap\u{103}sa\u{163}i pentru a finaliza selec\u{163}ia razei pentru dat\u{103}`,
    "maximumDate": `Ultima dat\u{103} disponibil\u{103}`,
    "minimumDate": `Prima dat\u{103} disponibil\u{103}`,
    "next": `Urm\u{103}torul`,
    "previous": `\xcenainte`,
    "selectedDateDescription": (args)=>`Dat\u{103} selectat\u{103}: ${args.date}`,
    "selectedRangeDescription": (args)=>`Interval selectat: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Ap\u{103}sa\u{163}i pentru a \xeencepe selec\u{163}ia razei pentru dat\u{103}`,
    "todayDate": (args)=>`Ast\u{103}zi, ${args.date}`,
    "todayDateSelected": (args)=>`Azi, ${args.date} selectat\u{103}`
};

var $5b907f5fa3eee652$exports = {};
$5b907f5fa3eee652$exports = {
    "dateRange": (args)=>`\u{421} ${args.startDate} \u{43F}\u{43E} ${args.endDate}`,
    "dateSelected": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
    "maximumDate": `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{44F}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{435}\u{440}\u{432}\u{430}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{414}\u{430}\u{43B}\u{435}\u{435}`,
    "previous": `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
    "selectedDateDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
    "todayDate": (args)=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`
};

var $1b4c51359c99cf79$exports = {};
$1b4c51359c99cf79$exports = {
    "dateRange": (args)=>`Od ${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`Vybrat\xfd d\xe1tum ${args.date}`,
    "finishRangeSelectionPrompt": `Kliknut\xedm dokon\u{10D}\xedte v\xfdber rozsahu d\xe1tumov`,
    "maximumDate": `Posledn\xfd dostupn\xfd d\xe1tum`,
    "minimumDate": `Prv\xfd dostupn\xfd d\xe1tum`,
    "next": `Nasleduj\xface`,
    "previous": `Predch\xe1dzaj\xface`,
    "selectedDateDescription": (args)=>`Vybrat\xfd d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybrat\xfd rozsah: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov`,
    "todayDate": (args)=>`Dnes ${args.date}`,
    "todayDateSelected": (args)=>`Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${args.date}`
};

var $02e4e6a4608cc6f3$exports = {};
$02e4e6a4608cc6f3$exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} izbrano`,
    "finishRangeSelectionPrompt": `Kliknite za dokon\u{10D}anje izbire datumskega obsega`,
    "maximumDate": `Zadnji razpolo\u{17E}ljivi datum`,
    "minimumDate": `Prvi razpolo\u{17E}ljivi datum`,
    "next": `Naprej`,
    "previous": `Nazaj`,
    "selectedDateDescription": (args)=>`Izbrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izbrano obmo\u{10D}je: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite za za\u{10D}etek izbire datumskega obsega`,
    "todayDate": (args)=>`Danes, ${args.date}`,
    "todayDateSelected": (args)=>`Danes, ${args.date} izbrano`
};

var $6dd2fbaad93b6878$exports = {};
$6dd2fbaad93b6878$exports = {
    "dateRange": (args)=>`${args.startDate} do ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} izabran`,
    "finishRangeSelectionPrompt": `Kliknite da dovr\u{161}ite opseg izabranih datuma`,
    "maximumDate": `Zadnji raspolo\u{17E}ivi datum`,
    "minimumDate": `Prvi raspolo\u{17E}ivi datum`,
    "next": `Slede\u{107}i`,
    "previous": `Prethodni`,
    "selectedDateDescription": (args)=>`Izabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izabrani period: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Kliknite da zapo\u{10D}nete opseg izabranih datuma`,
    "todayDate": (args)=>`Danas, ${args.date}`,
    "todayDateSelected": (args)=>`Danas, izabran ${args.date}`
};

var $33ea59bfe6e804e0$exports = {};
$33ea59bfe6e804e0$exports = {
    "dateRange": (args)=>`${args.startDate} till ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} har valts`,
    "finishRangeSelectionPrompt": `Klicka f\xf6r att avsluta val av datumintervall`,
    "maximumDate": `Sista tillg\xe4ngliga datum`,
    "minimumDate": `F\xf6rsta tillg\xe4ngliga datum`,
    "next": `N\xe4sta`,
    "previous": `F\xf6reg\xe5ende`,
    "selectedDateDescription": (args)=>`Valt datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valt intervall: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Klicka f\xf6r att v\xe4lja datumintervall`,
    "todayDate": (args)=>`Idag, ${args.date}`,
    "todayDateSelected": (args)=>`Idag, ${args.date} har valts`
};

var $4603b0d0246969b2$exports = {};
$4603b0d0246969b2$exports = {
    "dateRange": (args)=>`${args.startDate} - ${args.endDate}`,
    "dateSelected": (args)=>`${args.date} se\xe7ildi`,
    "finishRangeSelectionPrompt": `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini tamamlamak i\xe7in t\u{131}klay\u{131}n`,
    "maximumDate": `Son m\xfcsait tarih`,
    "minimumDate": `\u{130}lk m\xfcsait tarih`,
    "next": `Sonraki`,
    "previous": `\xd6nceki`,
    "selectedDateDescription": (args)=>`Se\xe7ilen Tarih: ${args.date}`,
    "selectedRangeDescription": (args)=>`Se\xe7ilen Aral\u{131}k: ${args.dateRange}`,
    "startRangeSelectionPrompt": `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini ba\u{15F}latmak i\xe7in t\u{131}klay\u{131}n`,
    "todayDate": (args)=>`Bug\xfcn, ${args.date}`,
    "todayDateSelected": (args)=>`Bug\xfcn, ${args.date} se\xe7ildi`
};

var $82649816f530bb1b$exports = {};
$82649816f530bb1b$exports = {
    "dateRange": (args)=>`${args.startDate} \u{2014} ${args.endDate}`,
    "dateSelected": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
    "maximumDate": `\u{41E}\u{441}\u{442}\u{430}\u{43D}\u{43D}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "minimumDate": `\u{41F}\u{435}\u{440}\u{448}\u{430} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "next": `\u{41D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{438}\u{439}`,
    "previous": `\u{41F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{456}\u{439}`,
    "selectedDateDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
    "todayDate": (args)=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${args.date}`,
    "todayDateSelected": (args)=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${args.date}`
};

var $628e140a43dfb330$exports = {};
$628e140a43dfb330$exports = {
    "dateRange": (args)=>`${args.startDate} \u{81F3} ${args.endDate}`,
    "dateSelected": (args)=>`\u{5DF2}\u{9009}\u{62E9} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{5355}\u{51FB}\u{4EE5}\u{5B8C}\u{6210}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
    "maximumDate": `\u{6700}\u{540E}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "minimumDate": `\u{7B2C}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "next": `\u{4E0B}\u{4E00}\u{9875}`,
    "previous": `\u{4E0A}\u{4E00}\u{9875}`,
    "selectedDateDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{5355}\u{51FB}\u{4EE5}\u{5F00}\u{59CB}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
    "todayDate": (args)=>`\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${args.date}`,
    "todayDateSelected": (args)=>`\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${args.date}`
};

var $745937250cd4679c$exports = {};
$745937250cd4679c$exports = {
    "dateRange": (args)=>`${args.startDate} \u{81F3} ${args.endDate}`,
    "dateSelected": (args)=>`\u{5DF2}\u{9078}\u{53D6} ${args.date}`,
    "finishRangeSelectionPrompt": `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{5B8C}\u{6210}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
    "maximumDate": `\u{6700}\u{5F8C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "minimumDate": `\u{7B2C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
    "next": `\u{4E0B}\u{4E00}\u{9801}`,
    "previous": `\u{4E0A}\u{4E00}\u{9801}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${args.dateRange}`,
    "startRangeSelectionPrompt": `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{958B}\u{59CB}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
    "todayDate": (args)=>`\u{4ECA}\u{5929}\u{FF0C}${args.date}`,
    "todayDateSelected": (args)=>`\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${args.date}`
};

var $3904726b442bd9b2$exports = {};


































$3904726b442bd9b2$exports = {
    "ar-AE": $39324ace0d945f59$exports,
    "bg-BG": $1830a539e98c7baf$exports,
    "cs-CZ": $f4b92528965aab97$exports,
    "da-DK": $1cd578ef0547c8f1$exports,
    "de-DE": $db55a8973925d619$exports,
    "el-GR": $ec6937d58566d443$exports,
    "en-US": $1f5cea0742dc284a$exports,
    "es-ES": $2ca7ea366384817b$exports,
    "et-EE": $97874a7fe9cd091f$exports,
    "fi-FI": $5d376b7fce1a45b2$exports,
    "fr-FR": $3bf722b362aaf54d$exports,
    "he-IL": $38c43f8322316031$exports,
    "hr-HR": $c90e0f32b44630bf$exports,
    "hu-HU": $715875e6e7a338f4$exports,
    "it-IT": $37d77c66e34daccf$exports,
    "ja-JP": $542f39aee29303c3$exports,
    "ko-KR": $22a5f0623ea73e4f$exports,
    "lt-LT": $522380d13d62cba0$exports,
    "lv-LV": $8a7bc830b2fe6485$exports,
    "nb-NO": $9fac9c044470683b$exports,
    "nl-NL": $b127d3569efb1449$exports,
    "pl-PL": $51404a4090633490$exports,
    "pt-BR": $e5e6a3fe3b4527df$exports,
    "pt-PT": $c519dcadcbb1ee47$exports,
    "ro-RO": $e5aa0186ca7889c6$exports,
    "ru-RU": $5b907f5fa3eee652$exports,
    "sk-SK": $1b4c51359c99cf79$exports,
    "sl-SI": $02e4e6a4608cc6f3$exports,
    "sr-SP": $6dd2fbaad93b6878$exports,
    "sv-SE": $33ea59bfe6e804e0$exports,
    "tr-TR": $4603b0d0246969b2$exports,
    "uk-UA": $82649816f530bb1b$exports,
    "zh-CN": $628e140a43dfb330$exports,
    "zh-TW": $745937250cd4679c$exports
};

function $parcel$interopDefault$8(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $a074e1e2d0f0a665$export$653eddfc964b0f8a = new WeakMap();
function $a074e1e2d0f0a665$export$134cbb7fb09a9522(date) {
    return (date === null || date === void 0 ? void 0 : date.calendar.identifier) === 'gregory' && date.era === 'BC' ? 'short' : undefined;
}
function $a074e1e2d0f0a665$export$b6df97c887c38e1a(state) {
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$8($3904726b442bd9b2$exports))), '@react-aria/calendar');
    let start, end;
    var _state_value;
    if ('highlightedRange' in state) ({ start: start, end: end } = state.highlightedRange || {});
    else start = end = (_state_value = state.value) !== null && _state_value !== void 0 ? _state_value : undefined;
    let dateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era: $a074e1e2d0f0a665$export$134cbb7fb09a9522(start) || $a074e1e2d0f0a665$export$134cbb7fb09a9522(end),
        timeZone: state.timeZone
    });
    let anchorDate = 'anchorDate' in state ? state.anchorDate : null;
    return (useMemo)(()=>{
        // No message if currently selecting a range, or there is nothing highlighted.
        if (!anchorDate && start && end) {
            // Use a single date message if the start and end dates are the same day,
            // otherwise include both dates.
            if (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(start, end)) {
                let date = dateFormatter.format(start.toDate(state.timeZone));
                return stringFormatter.format('selectedDateDescription', {
                    date: date
                });
            } else {
                let dateRange = $a074e1e2d0f0a665$var$formatRange(dateFormatter, stringFormatter, start, end, state.timeZone);
                return stringFormatter.format('selectedRangeDescription', {
                    dateRange: dateRange
                });
            }
        }
        return '';
    }, [
        start,
        end,
        anchorDate,
        state.timeZone,
        stringFormatter,
        dateFormatter
    ]);
}
function $a074e1e2d0f0a665$export$31afe65d91ef6e8(startDate, endDate, timeZone, isAria) {
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$8($3904726b442bd9b2$exports))), '@react-aria/calendar');
    let era = $a074e1e2d0f0a665$export$134cbb7fb09a9522(startDate) || $a074e1e2d0f0a665$export$134cbb7fb09a9522(endDate);
    let monthFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        month: 'long',
        year: 'numeric',
        era: era,
        calendar: startDate.calendar.identifier,
        timeZone: timeZone
    });
    let dateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era: era,
        calendar: startDate.calendar.identifier,
        timeZone: timeZone
    });
    return (useMemo)(()=>{
        // Special case for month granularity. Format as a single month if only a
        // single month is visible, otherwise format as a range of months.
        if (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(startDate, ($14e0f24ef4ac5c92$export$a5a3b454ada2268e)(startDate))) {
            let startMonth = startDate;
            let endMonth = endDate;
            if (startDate.calendar.getFormattableMonth) startMonth = startDate.calendar.getFormattableMonth(startDate);
            if (endDate.calendar.getFormattableMonth) endMonth = endDate.calendar.getFormattableMonth(endDate);
            if (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(endDate, ($14e0f24ef4ac5c92$export$a2258d9c4118825c)(startDate))) return monthFormatter.format(startMonth.toDate(timeZone));
            else if (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(endDate, ($14e0f24ef4ac5c92$export$a2258d9c4118825c)(endDate))) return isAria ? $a074e1e2d0f0a665$var$formatRange(monthFormatter, stringFormatter, startMonth, endMonth, timeZone) : monthFormatter.formatRange(startMonth.toDate(timeZone), endMonth.toDate(timeZone));
        }
        return isAria ? $a074e1e2d0f0a665$var$formatRange(dateFormatter, stringFormatter, startDate, endDate, timeZone) : dateFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
    }, [
        startDate,
        endDate,
        monthFormatter,
        dateFormatter,
        stringFormatter,
        timeZone,
        isAria
    ]);
}
function $a074e1e2d0f0a665$var$formatRange(dateFormatter, stringFormatter, start, end, timeZone) {
    let parts = dateFormatter.formatRangeToParts(start.toDate(timeZone), end.toDate(timeZone));
    // Find the separator between the start and end date. This is determined
    // by finding the last shared literal before the end range.
    let separatorIndex = -1;
    for(let i = 0; i < parts.length; i++){
        let part = parts[i];
        if (part.source === 'shared' && part.type === 'literal') separatorIndex = i;
        else if (part.source === 'endRange') break;
    }
    // Now we can combine the parts into start and end strings.
    let startValue = '';
    let endValue = '';
    for(let i = 0; i < parts.length; i++){
        if (i < separatorIndex) startValue += parts[i].value;
        else if (i > separatorIndex) endValue += parts[i].value;
    }
    return stringFormatter.format('dateRange', {
        startDate: startValue,
        endDate: endValue
    });
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        // @ts-ignore
        if (!(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if ($319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.isAttached()) $319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
        }, 100);
        else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
    } else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $319e236875307eab$var$LiveAnnouncer {
    isAttached() {
        var _this_node;
        return (_this_node = this.node) === null || _this_node === void 0 ? void 0 : _this_node.isConnected;
    }
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
        var _this_assertiveLog, _this_politeLog;
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') (_this_assertiveLog = this.assertiveLog) === null || _this_assertiveLog === void 0 ? void 0 : _this_assertiveLog.appendChild(node);
        else (_this_politeLog = this.politeLog) === null || _this_politeLog === void 0 ? void 0 : _this_politeLog.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
    constructor(){
        this.node = null;
        this.assertiveLog = null;
        this.politeLog = null;
        if (typeof document !== 'undefined') {
            this.node = document.createElement('div');
            this.node.dataset.liveAnnouncer = 'true';
            // copied from VisuallyHidden
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            });
            this.assertiveLog = this.createLog('assertive');
            this.node.appendChild(this.assertiveLog);
            this.politeLog = this.createLog('polite');
            this.node.appendChild(this.politeLog);
            document.body.prepend(this.node);
        }
    }
}

function $parcel$interopDefault$7(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $c4acc1de3ab169cf$export$d652b3ea2d672d5b(props, state) {
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$7($3904726b442bd9b2$exports))), '@react-aria/calendar');
    let domProps = ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props);
    let title = ($a074e1e2d0f0a665$export$31afe65d91ef6e8)(state.visibleRange.start, state.visibleRange.end, state.timeZone, false);
    let visibleRangeDescription = ($a074e1e2d0f0a665$export$31afe65d91ef6e8)(state.visibleRange.start, state.visibleRange.end, state.timeZone, true);
    // Announce when the visible date range changes
    ($4f58c5f72bcf79f7$export$496315a1608d9602)(()=>{
        // only when pressing the Previous or Next button
        if (!state.isFocused) ($319e236875307eab$export$a9b970dcc4ae71a9)(visibleRangeDescription);
    }, [
        visibleRangeDescription
    ]);
    // Announce when the selected value changes
    let selectedDateDescription = ($a074e1e2d0f0a665$export$b6df97c887c38e1a)(state);
    ($4f58c5f72bcf79f7$export$496315a1608d9602)(()=>{
        if (selectedDateDescription) ($319e236875307eab$export$a9b970dcc4ae71a9)(selectedDateDescription, 'polite', 4000);
    // handle an update to the caption that describes the currently selected range, to announce the new value
    }, [
        selectedDateDescription
    ]);
    let errorMessageId = ($bdb11010cef70236$export$b4cc09c592e8fdb8)([
        Boolean(props.errorMessage),
        props.isInvalid,
        props.validationState
    ]);
    // Pass the label to the child grid elements.
    ($a074e1e2d0f0a665$export$653eddfc964b0f8a).set(state, {
        ariaLabel: props['aria-label'],
        ariaLabelledBy: props['aria-labelledby'],
        errorMessageId: errorMessageId,
        selectedDateDescription: selectedDateDescription
    });
    // If the next or previous buttons become disabled while they are focused, move focus to the calendar body.
    let [nextFocused, setNextFocused] = (useState)(false);
    let nextDisabled = props.isDisabled || state.isNextVisibleRangeInvalid();
    if (nextDisabled && nextFocused) {
        setNextFocused(false);
        state.setFocused(true);
    }
    let [previousFocused, setPreviousFocused] = (useState)(false);
    let previousDisabled = props.isDisabled || state.isPreviousVisibleRangeInvalid();
    if (previousDisabled && previousFocused) {
        setPreviousFocused(false);
        state.setFocused(true);
    }
    let labelProps = ($313b98861ee5dd6c$export$d6875122194c7b44)({
        id: props['id'],
        'aria-label': [
            props['aria-label'],
            visibleRangeDescription
        ].filter(Boolean).join(', '),
        'aria-labelledby': props['aria-labelledby']
    });
    return {
        calendarProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, labelProps, {
            role: 'application',
            'aria-details': props['aria-details'] || undefined,
            'aria-describedby': props['aria-describedby'] || undefined
        }),
        nextButtonProps: {
            onPress: ()=>state.focusNextPage(),
            'aria-label': stringFormatter.format('next'),
            isDisabled: nextDisabled,
            onFocusChange: setNextFocused
        },
        prevButtonProps: {
            onPress: ()=>state.focusPreviousPage(),
            'aria-label': stringFormatter.format('previous'),
            isDisabled: previousDisabled,
            onFocusChange: setPreviousFocused
        },
        errorMessageProps: {
            id: errorMessageId
        },
        title: title
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $9942cad8a072a530$export$3ee915f8151bd4f1(props, state) {
    return ($c4acc1de3ab169cf$export$d652b3ea2d672d5b)(props, state);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $e3031d1f8c9d64eb$export$cb95147730a423f5(props, state) {
    let { startDate: startDate = state.visibleRange.start, endDate: endDate = state.visibleRange.end, firstDayOfWeek: firstDayOfWeek } = props;
    let { direction: direction } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Enter':
            case ' ':
                e.preventDefault();
                state.selectFocusedDate();
                break;
            case 'PageUp':
                e.preventDefault();
                e.stopPropagation();
                state.focusPreviousSection(e.shiftKey);
                break;
            case 'PageDown':
                e.preventDefault();
                e.stopPropagation();
                state.focusNextSection(e.shiftKey);
                break;
            case 'End':
                e.preventDefault();
                e.stopPropagation();
                state.focusSectionEnd();
                break;
            case 'Home':
                e.preventDefault();
                e.stopPropagation();
                state.focusSectionStart();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') state.focusNextDay();
                else state.focusPreviousDay();
                break;
            case 'ArrowUp':
                e.preventDefault();
                e.stopPropagation();
                state.focusPreviousRow();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') state.focusPreviousDay();
                else state.focusNextDay();
                break;
            case 'ArrowDown':
                e.preventDefault();
                e.stopPropagation();
                state.focusNextRow();
                break;
            case 'Escape':
                // Cancel the selection.
                if ('setAnchorDate' in state) {
                    e.preventDefault();
                    state.setAnchorDate(null);
                }
                break;
        }
    };
    let visibleRangeDescription = ($a074e1e2d0f0a665$export$31afe65d91ef6e8)(startDate, endDate, state.timeZone, true);
    let { ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy } = ($a074e1e2d0f0a665$export$653eddfc964b0f8a).get(state);
    let labelProps = ($313b98861ee5dd6c$export$d6875122194c7b44)({
        'aria-label': [
            ariaLabel,
            visibleRangeDescription
        ].filter(Boolean).join(', '),
        'aria-labelledby': ariaLabelledBy
    });
    let dayFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        weekday: props.weekdayStyle || 'narrow',
        timeZone: state.timeZone
    });
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let weekDays = (useMemo)(()=>{
        let weekStart = ($14e0f24ef4ac5c92$export$42c81a444fbfb5d4)(($14e0f24ef4ac5c92$export$d0bdf45af03a6ea3)(state.timeZone), locale, firstDayOfWeek);
        return [
            ...new Array(7).keys()
        ].map((index)=>{
            let date = weekStart.add({
                days: index
            });
            let dateDay = date.toDate(state.timeZone);
            return dayFormatter.format(dateDay);
        });
    }, [
        locale,
        state.timeZone,
        dayFormatter,
        firstDayOfWeek
    ]);
    let weeksInMonth = ($14e0f24ef4ac5c92$export$ccc1b2479e7dd654)(startDate, locale, firstDayOfWeek);
    return {
        gridProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(labelProps, {
            role: 'grid',
            'aria-readonly': state.isReadOnly || undefined,
            'aria-disabled': state.isDisabled || undefined,
            'aria-multiselectable': 'highlightedRange' in state || undefined,
            onKeyDown: onKeyDown,
            onFocus: ()=>state.setFocused(true),
            onBlur: ()=>state.setFocused(false)
        }),
        headerProps: {
            // Column headers are hidden to screen readers to make navigating with a touch screen reader easier.
            // The day names are already included in the label of each cell, so there's no need to announce them twice.
            'aria-hidden': true
        },
        weekDays: weekDays,
        weeksInMonth: weeksInMonth
    };
}

function $parcel$interopDefault$6(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






function $36a0ac60f04457c5$export$136073280381448e(props, state, ref) {
    let { date: date, isDisabled: isDisabled } = props;
    let { errorMessageId: errorMessageId, selectedDateDescription: selectedDateDescription } = ($a074e1e2d0f0a665$export$653eddfc964b0f8a).get(state);
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$6($3904726b442bd9b2$exports))), '@react-aria/calendar');
    let dateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        era: ($a074e1e2d0f0a665$export$134cbb7fb09a9522)(date),
        timeZone: state.timeZone
    });
    let isSelected = state.isSelected(date);
    let isFocused = state.isCellFocused(date);
    isDisabled = isDisabled || state.isCellDisabled(date);
    let isUnavailable = state.isCellUnavailable(date);
    let isSelectable = !isDisabled && !isUnavailable;
    let isInvalid = state.isValueInvalid && Boolean('highlightedRange' in state ? !state.anchorDate && state.highlightedRange && date.compare(state.highlightedRange.start) >= 0 && date.compare(state.highlightedRange.end) <= 0 : state.value && ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(state.value, date));
    if (isInvalid) isSelected = true;
    // For performance, reuse the same date object as before if the new date prop is the same.
    // This allows subsequent useMemo results to be reused.
    date = ($5a387cc49350e6db$export$722debc0e56fea39)(date, ($14e0f24ef4ac5c92$export$91b62ebf2ba703ee));
    let nativeDate = (useMemo)(()=>date.toDate(state.timeZone), [
        date,
        state.timeZone
    ]);
    // aria-label should be localize Day of week, Month, Day and Year without Time.
    let isDateToday = ($14e0f24ef4ac5c92$export$629b0a497aa65267)(date, state.timeZone);
    let label = (useMemo)(()=>{
        let label = '';
        // If this is a range calendar, add a description of the full selected range
        // to the first and last selected date.
        if ('highlightedRange' in state && state.value && !state.anchorDate && (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.value.start) || ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.value.end))) label = selectedDateDescription + ', ';
        label += dateFormatter.format(nativeDate);
        if (isDateToday) // If date is today, set appropriate string depending on selected state:
        label = stringFormatter.format(isSelected ? 'todayDateSelected' : 'todayDate', {
            date: label
        });
        else if (isSelected) // If date is selected but not today:
        label = stringFormatter.format('dateSelected', {
            date: label
        });
        if (state.minValue && ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.minValue)) label += ', ' + stringFormatter.format('minimumDate');
        else if (state.maxValue && ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.maxValue)) label += ', ' + stringFormatter.format('maximumDate');
        return label;
    }, [
        dateFormatter,
        nativeDate,
        stringFormatter,
        isSelected,
        isDateToday,
        date,
        state,
        selectedDateDescription
    ]);
    // When a cell is focused and this is a range calendar, add a prompt to help
    // screenreader users know that they are in a range selection mode.
    let rangeSelectionPrompt = '';
    if ('anchorDate' in state && isFocused && !state.isReadOnly && isSelectable) {
        // If selection has started add "click to finish selecting range"
        if (state.anchorDate) rangeSelectionPrompt = stringFormatter.format('finishRangeSelectionPrompt');
        else rangeSelectionPrompt = stringFormatter.format('startRangeSelectionPrompt');
    }
    let descriptionProps = ($ef06256079686ba0$export$f8aeda7b10753fa1)(rangeSelectionPrompt);
    let isAnchorPressed = (useRef)(false);
    let isRangeBoundaryPressed = (useRef)(false);
    let touchDragTimerRef = (useRef)(undefined);
    let { pressProps: pressProps, isPressed: isPressed } = ($f6c31cce2adf654f$export$45712eceda6fad21)({
        // When dragging to select a range, we don't want dragging over the original anchor
        // again to trigger onPressStart. Cancel presses immediately when the pointer exits.
        shouldCancelOnPointerExit: 'anchorDate' in state && !!state.anchorDate,
        preventFocusOnPress: true,
        isDisabled: !isSelectable || state.isReadOnly,
        onPressStart (e) {
            if (state.isReadOnly) {
                state.setFocusedDate(date);
                return;
            }
            if ('highlightedRange' in state && !state.anchorDate && (e.pointerType === 'mouse' || e.pointerType === 'touch')) {
                // Allow dragging the start or end date of a range to modify it
                // rather than starting a new selection.
                // Don't allow dragging when invalid, or weird jumping behavior may occur as date ranges
                // are constrained to available dates. The user will need to select a new range in this case.
                if (state.highlightedRange && !isInvalid) {
                    if (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.highlightedRange.start)) {
                        state.setAnchorDate(state.highlightedRange.end);
                        state.setFocusedDate(date);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    } else if (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.highlightedRange.end)) {
                        state.setAnchorDate(state.highlightedRange.start);
                        state.setFocusedDate(date);
                        state.setDragging(true);
                        isRangeBoundaryPressed.current = true;
                        return;
                    }
                }
                let startDragging = ()=>{
                    state.setDragging(true);
                    touchDragTimerRef.current = undefined;
                    state.selectDate(date);
                    state.setFocusedDate(date);
                    isAnchorPressed.current = true;
                };
                // Start selection on mouse/touch down so users can drag to select a range.
                // On touch, delay dragging to determine if the user really meant to scroll.
                if (e.pointerType === 'touch') touchDragTimerRef.current = setTimeout(startDragging, 200);
                else startDragging();
            }
        },
        onPressEnd () {
            isRangeBoundaryPressed.current = false;
            isAnchorPressed.current = false;
            clearTimeout(touchDragTimerRef.current);
            touchDragTimerRef.current = undefined;
        },
        onPress () {
            // For non-range selection, always select on press up.
            if (!('anchorDate' in state) && !state.isReadOnly) {
                state.selectDate(date);
                state.setFocusedDate(date);
            }
        },
        onPressUp (e) {
            if (state.isReadOnly) return;
            // If the user tapped quickly, the date won't be selected yet and the
            // timer will still be in progress. In this case, select the date on touch up.
            // Timer is cleared in onPressEnd.
            if ('anchorDate' in state && touchDragTimerRef.current) {
                state.selectDate(date);
                state.setFocusedDate(date);
            }
            if ('anchorDate' in state) {
                if (isRangeBoundaryPressed.current) // When clicking on the start or end date of an already selected range,
                // start a new selection on press up to also allow dragging the date to
                // change the existing range.
                state.setAnchorDate(date);
                else if (state.anchorDate && !isAnchorPressed.current) {
                    // When releasing a drag or pressing the end date of a range, select it.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                } else if (e.pointerType === 'keyboard' && !state.anchorDate) {
                    // For range selection, auto-advance the focused date by one if using keyboard.
                    // This gives an indication that you're selecting a range rather than a single date.
                    // For mouse, this is unnecessary because users will see the indication on hover. For screen readers,
                    // there will be an announcement to "click to finish selecting range" (above).
                    state.selectDate(date);
                    let nextDay = date.add({
                        days: 1
                    });
                    if (state.isInvalid(nextDay)) nextDay = date.subtract({
                        days: 1
                    });
                    if (!state.isInvalid(nextDay)) state.setFocusedDate(nextDay);
                } else if (e.pointerType === 'virtual') {
                    // For screen readers, just select the date on click.
                    state.selectDate(date);
                    state.setFocusedDate(date);
                }
            }
        }
    });
    let tabIndex = undefined;
    if (!isDisabled) tabIndex = ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.focusedDate) ? 0 : -1;
    // Focus the button in the DOM when the state updates.
    (useEffect)(()=>{
        if (isFocused && ref.current) {
            ($7215afc6de606d6b$export$de79e2c695e052f3)(ref.current);
            // Scroll into view if navigating with a keyboard, otherwise
            // try not to shift the view under the user's mouse/finger.
            // If in a overlay, scrollIntoViewport will only cause scrolling
            // up to the overlay scroll body to prevent overlay shifting.
            // Also only scroll into view if the cell actually got focused.
            // There are some cases where the cell might be disabled or inside,
            // an inert container and we don't want to scroll then.
            if (($507fabe10e71c6fb$export$630ff653c5ada6a9)() !== 'pointer' && document.activeElement === ref.current) ($2f04cbc44ee30ce0$export$c826860796309d1b)(ref.current, {
                containingElement: ($62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
            });
        }
    }, [
        isFocused,
        ref
    ]);
    let cellDateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        day: 'numeric',
        timeZone: state.timeZone,
        calendar: date.calendar.identifier
    });
    let formattedDate = (useMemo)(()=>cellDateFormatter.formatToParts(nativeDate).find((part)=>part.type === 'day').value, [
        cellDateFormatter,
        nativeDate
    ]);
    return {
        cellProps: {
            role: 'gridcell',
            'aria-disabled': !isSelectable || undefined,
            'aria-selected': isSelected || undefined,
            'aria-invalid': isInvalid || undefined
        },
        buttonProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(pressProps, {
            onFocus () {
                if (!isDisabled) state.setFocusedDate(date);
            },
            tabIndex: tabIndex,
            role: 'button',
            'aria-disabled': !isSelectable || undefined,
            'aria-label': label,
            'aria-invalid': isInvalid || undefined,
            'aria-describedby': [
                isInvalid ? errorMessageId : undefined,
                descriptionProps['aria-describedby']
            ].filter(Boolean).join(' ') || undefined,
            onPointerEnter (e) {
                // Highlight the date on hover or drag over a date when selecting a range.
                if ('highlightDate' in state && (e.pointerType !== 'touch' || state.isDragging) && isSelectable) state.highlightDate(date);
            },
            onPointerDown (e) {
                // This is necessary on touch devices to allow dragging
                // outside the original pressed element.
                // (JSDOM does not support this)
                if ('releasePointerCapture' in e.target) e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu (e) {
                // Prevent context menu on long press.
                e.preventDefault();
            }
        }),
        isPressed: isPressed,
        isFocused: isFocused,
        isSelected: isSelected,
        isDisabled: isDisabled,
        isUnavailable: isUnavailable,
        isOutsideVisibleRange: date.compare(state.visibleRange.start) < 0 || date.compare(state.visibleRange.end) > 0,
        isInvalid: isInvalid,
        formattedDate: formattedDate
    };
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
    ...$e5be200c675c3b3a$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
    validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = (createContext)({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = '__formValidationState' + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === 'invalid');
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid: isInvalid,
        validationErrors: [],
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (useMemo)(()=>{
        if (!validate || value == null) return null;
        let validateErrors = $e5be200c675c3b3a$var$runValidate(validate, value);
        return $e5be200c675c3b3a$var$getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
    let serverErrorMessages = (useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$e5be200c675c3b3a$var$asArray(serverErrors[name])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let lastError = (useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (useState)(false);
    (useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
            if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $e5be200c675c3b3a$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return $e5be200c675c3b3a$var$asArray(e);
    }
    return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (validationBehavior === 'native' && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.disabled) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
        }
    });
    let onReset = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        state.resetValidation();
    });
    let onInvalid = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            ($507fabe10e71c6fb$export$8397ddfc504fdb9a)('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        state.commitValidation();
    });
    (useEffect)(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        input.addEventListener('invalid', onInvalid);
        input.addEventListener('change', onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', onReset);
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $e93e671b31057976$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $e93e671b31057976$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $e93e671b31057976$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = ($bdb11010cef70236$export$f680877a34711e37)(id);
    let labelId = ($bdb11010cef70236$export$f680877a34711e37)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel && process.env.NODE_ENV !== 'production') console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
    let fieldProps = ($313b98861ee5dd6c$export$d6875122194c7b44)({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = ($d191a55c9702f145$export$8467354a121f1b9f)(props);
    let descriptionId = ($bdb11010cef70236$export$b4cc09c592e8fdb8)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = ($bdb11010cef70236$export$b4cc09c592e8fdb8)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = ($3ef42575df84b30b$export$9d1611c77c2fe928)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $5c3e21d68f1c4674$var$styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
    let { style: style, isFocusable: isFocusable } = props;
    let [isFocused, setFocused] = (useState)(false);
    let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (useMemo)(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$5c3e21d68f1c4674$var$styles,
            ...style
        };
        else return $5c3e21d68f1c4674$var$styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children, elementType: Element = 'div', isFocusable: isFocusable, style: style, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
    return /*#__PURE__*/ ($dbSRa$react).createElement(Element, ($3ef42575df84b30b$export$9d1611c77c2fe928)(otherProps, visuallyHiddenProps), children);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = ($f645667febf57a63$export$4c014de7c8940b4c)(props, ref);
    let validationState = ($e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = ($2baaea4c71418dea$export$294aa081a6c6f55d)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    ($99facab73266f662$export$5add1d006293d136)(ref, value, setValue);
    ($e93e671b31057976$export$b8473d3665f3a75a)(props, validationState, ref);
    (useEffect)(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof ($431fbd86ca7dc216$export$f21a1ffae260145a)(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, 'defaultValue', {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            'aria-controls': props['aria-controls'],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt(($dbSRa$react).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}

var $ed6aae4e5f766f1e$exports = {};
$ed6aae4e5f766f1e$exports = {
    "Empty": `\u{641}\u{627}\u{631}\u{63A}`
};

var $38854e2b175151fa$exports = {};
$38854e2b175151fa$exports = {
    "Empty": `\u{418}\u{437}\u{43F}\u{440}\u{430}\u{437}\u{43D}\u{438}`
};

var $15b25ab20f3945b2$exports = {};
$15b25ab20f3945b2$exports = {
    "Empty": `Pr\xe1zdn\xe9`
};

var $692a4298b6b649a2$exports = {};
$692a4298b6b649a2$exports = {
    "Empty": `Tom`
};

var $1c6e1539193f1243$exports = {};
$1c6e1539193f1243$exports = {
    "Empty": `Leer`
};

var $1e8678632c464b6d$exports = {};
$1e8678632c464b6d$exports = {
    "Empty": `\u{386}\u{3B4}\u{3B5}\u{3B9}\u{3BF}`
};

var $4adc85d9bf5b9eed$exports = {};
$4adc85d9bf5b9eed$exports = {
    "Empty": `Empty`
};

var $41c4b2bb61dafbca$exports = {};
$41c4b2bb61dafbca$exports = {
    "Empty": `Vac\xedo`
};

var $405f8b24f5dd2a60$exports = {};
$405f8b24f5dd2a60$exports = {
    "Empty": `T\xfchjenda`
};

var $7efe3ed02b9b9dd4$exports = {};
$7efe3ed02b9b9dd4$exports = {
    "Empty": `Tyhj\xe4`
};

var $99fc4c101d92daf3$exports = {};
$99fc4c101d92daf3$exports = {
    "Empty": `Vide`
};

var $f9e155e6e8cacaa2$exports = {};
$f9e155e6e8cacaa2$exports = {
    "Empty": `\u{5E8}\u{5D9}\u{5E7}`
};

var $c31b5e8e9a249fd5$exports = {};
$c31b5e8e9a249fd5$exports = {
    "Empty": `Prazno`
};

var $9c5435bc17499bd9$exports = {};
$9c5435bc17499bd9$exports = {
    "Empty": `\xdcres`
};

var $6d1fc8e84d8165e1$exports = {};
$6d1fc8e84d8165e1$exports = {
    "Empty": `Vuoto`
};

var $46ea6b3641b83e71$exports = {};
$46ea6b3641b83e71$exports = {
    "Empty": `\u{7A7A}`
};

var $0e3cc9a288289dc5$exports = {};
$0e3cc9a288289dc5$exports = {
    "Empty": `\u{BE44}\u{C5B4} \u{C788}\u{C74C}`
};

var $4ff2bb25c0089ffb$exports = {};
$4ff2bb25c0089ffb$exports = {
    "Empty": `Tu\u{161}\u{10D}ias`
};

var $6cf33cd4c010a2fb$exports = {};
$6cf33cd4c010a2fb$exports = {
    "Empty": `Tuk\u{161}s`
};

var $5a9f8486f8b8837e$exports = {};
$5a9f8486f8b8837e$exports = {
    "Empty": `Tom`
};

var $583f94d807f6ecea$exports = {};
$583f94d807f6ecea$exports = {
    "Empty": `Leeg`
};

var $cc4dcfeea2b4050d$exports = {};
$cc4dcfeea2b4050d$exports = {
    "Empty": `Pusty`
};

var $68ac2954d56e12b4$exports = {};
$68ac2954d56e12b4$exports = {
    "Empty": `Vazio`
};

var $fdb0616f309780b0$exports = {};
$fdb0616f309780b0$exports = {
    "Empty": `Vazio`
};

var $fe1eccf4ee1d6f52$exports = {};
$fe1eccf4ee1d6f52$exports = {
    "Empty": `Gol`
};

var $a38b6c4e18725976$exports = {};
$a38b6c4e18725976$exports = {
    "Empty": `\u{41D}\u{435} \u{437}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}`
};

var $6c14ae2b766b652c$exports = {};
$6c14ae2b766b652c$exports = {
    "Empty": `Pr\xe1zdne`
};

var $8f1c9692e16dc5eb$exports = {};
$8f1c9692e16dc5eb$exports = {
    "Empty": `Prazen`
};

var $d2aa7abea627cafa$exports = {};
$d2aa7abea627cafa$exports = {
    "Empty": `Prazno`
};

var $676b82e4b56408e6$exports = {};
$676b82e4b56408e6$exports = {
    "Empty": `Tomt`
};

var $14c9042552d7ce08$exports = {};
$14c9042552d7ce08$exports = {
    "Empty": `Bo\u{15F}`
};

var $393254ebcb66c9f5$exports = {};
$393254ebcb66c9f5$exports = {
    "Empty": `\u{41F}\u{443}\u{441}\u{442}\u{43E}`
};

var $d49d621f310cf6ce$exports = {};
$d49d621f310cf6ce$exports = {
    "Empty": `\u{7A7A}`
};

var $94b60c866ca5dfe6$exports = {};
$94b60c866ca5dfe6$exports = {
    "Empty": `\u{7A7A}\u{767D}`
};

var $a99895ee3dc79e61$exports = {};


































$a99895ee3dc79e61$exports = {
    "ar-AE": $ed6aae4e5f766f1e$exports,
    "bg-BG": $38854e2b175151fa$exports,
    "cs-CZ": $15b25ab20f3945b2$exports,
    "da-DK": $692a4298b6b649a2$exports,
    "de-DE": $1c6e1539193f1243$exports,
    "el-GR": $1e8678632c464b6d$exports,
    "en-US": $4adc85d9bf5b9eed$exports,
    "es-ES": $41c4b2bb61dafbca$exports,
    "et-EE": $405f8b24f5dd2a60$exports,
    "fi-FI": $7efe3ed02b9b9dd4$exports,
    "fr-FR": $99fc4c101d92daf3$exports,
    "he-IL": $f9e155e6e8cacaa2$exports,
    "hr-HR": $c31b5e8e9a249fd5$exports,
    "hu-HU": $9c5435bc17499bd9$exports,
    "it-IT": $6d1fc8e84d8165e1$exports,
    "ja-JP": $46ea6b3641b83e71$exports,
    "ko-KR": $0e3cc9a288289dc5$exports,
    "lt-LT": $4ff2bb25c0089ffb$exports,
    "lv-LV": $6cf33cd4c010a2fb$exports,
    "nb-NO": $5a9f8486f8b8837e$exports,
    "nl-NL": $583f94d807f6ecea$exports,
    "pl-PL": $cc4dcfeea2b4050d$exports,
    "pt-BR": $68ac2954d56e12b4$exports,
    "pt-PT": $fdb0616f309780b0$exports,
    "ro-RO": $fe1eccf4ee1d6f52$exports,
    "ru-RU": $a38b6c4e18725976$exports,
    "sk-SK": $6c14ae2b766b652c$exports,
    "sl-SI": $8f1c9692e16dc5eb$exports,
    "sr-SP": $d2aa7abea627cafa$exports,
    "sv-SE": $676b82e4b56408e6$exports,
    "tr-TR": $14c9042552d7ce08$exports,
    "uk-UA": $393254ebcb66c9f5$exports,
    "zh-CN": $d49d621f310cf6ce$exports,
    "zh-TW": $94b60c866ca5dfe6$exports
};

function $parcel$interopDefault$5(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $d2e8511e6f209edf$export$e908e06f4b8e3402(props) {
    const _async = (useRef)(undefined);
    let { value: value, textValue: textValue, minValue: minValue, maxValue: maxValue, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, onIncrement: onIncrement, onIncrementPage: onIncrementPage, onDecrement: onDecrement, onDecrementPage: onDecrementPage, onDecrementToMin: onDecrementToMin, onIncrementToMax: onIncrementToMax } = props;
    const stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$5($a99895ee3dc79e61$exports))), '@react-aria/spinbutton');
    const clearAsync = ()=>clearTimeout(_async.current);
    (useEffect)(()=>{
        return ()=>clearAsync();
    }, []);
    let onKeyDown = (e)=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly) return;
        switch(e.key){
            case 'PageUp':
                if (onIncrementPage) {
                    e.preventDefault();
                    onIncrementPage === null || onIncrementPage === void 0 ? void 0 : onIncrementPage();
                    break;
                }
            // fallthrough!
            case 'ArrowUp':
            case 'Up':
                if (onIncrement) {
                    e.preventDefault();
                    onIncrement === null || onIncrement === void 0 ? void 0 : onIncrement();
                }
                break;
            case 'PageDown':
                if (onDecrementPage) {
                    e.preventDefault();
                    onDecrementPage === null || onDecrementPage === void 0 ? void 0 : onDecrementPage();
                    break;
                }
            // fallthrough
            case 'ArrowDown':
            case 'Down':
                if (onDecrement) {
                    e.preventDefault();
                    onDecrement === null || onDecrement === void 0 ? void 0 : onDecrement();
                }
                break;
            case 'Home':
                if (onDecrementToMin) {
                    e.preventDefault();
                    onDecrementToMin === null || onDecrementToMin === void 0 ? void 0 : onDecrementToMin();
                }
                break;
            case 'End':
                if (onIncrementToMax) {
                    e.preventDefault();
                    onIncrementToMax === null || onIncrementToMax === void 0 ? void 0 : onIncrementToMax();
                }
                break;
        }
    };
    let isFocused = (useRef)(false);
    let onFocus = ()=>{
        isFocused.current = true;
    };
    let onBlur = ()=>{
        isFocused.current = false;
    };
    // Replace Unicode hyphen-minus (U+002D) with minus sign (U+2212).
    // This ensures that macOS VoiceOver announces it as "minus" even with other characters between the minus sign
    // and the number (e.g. currency symbol). Otherwise it announces nothing because it assumes the character is a hyphen.
    // In addition, replace the empty string with the word "Empty" so that iOS VoiceOver does not read "50%" for an empty field.
    let ariaTextValue = textValue === '' ? stringFormatter.format('Empty') : (textValue || `${value}`).replace('-', '\u2212');
    (useEffect)(()=>{
        if (isFocused.current) {
            ($319e236875307eab$export$d10ae4f68404609a)('assertive');
            ($319e236875307eab$export$a9b970dcc4ae71a9)(ariaTextValue, 'assertive');
        }
    }, [
        ariaTextValue
    ]);
    const onIncrementPressStart = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((initialStepDelay)=>{
        clearAsync();
        onIncrement === null || onIncrement === void 0 ? void 0 : onIncrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (maxValue === undefined || isNaN(maxValue) || value === undefined || isNaN(value) || value < maxValue) onIncrementPressStart(60);
        }, initialStepDelay);
    });
    const onDecrementPressStart = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((initialStepDelay)=>{
        clearAsync();
        onDecrement === null || onDecrement === void 0 ? void 0 : onDecrement();
        // Start spinning after initial delay
        _async.current = window.setTimeout(()=>{
            if (minValue === undefined || isNaN(minValue) || value === undefined || isNaN(value) || value > minValue) onDecrementPressStart(60);
        }, initialStepDelay);
    });
    let cancelContextMenu = (e)=>{
        e.preventDefault();
    };
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': value !== undefined && !isNaN(value) ? value : undefined,
            'aria-valuetext': ariaTextValue,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-disabled': isDisabled || undefined,
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            onBlur: onBlur
        },
        incrementButtonProps: {
            onPressStart: ()=>{
                onIncrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        },
        decrementButtonProps: {
            onPressStart: ()=>{
                onDecrementPressStart(400);
                addGlobalListener(window, 'contextmenu', cancelContextMenu);
            },
            onPressEnd: ()=>{
                clearAsync();
                removeAllGlobalListeners();
            },
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $edcf132a9284368a$var$AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const $edcf132a9284368a$var$CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const $edcf132a9284368a$var$AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const $edcf132a9284368a$var$TOTAL_SIZE = {
    width: 'totalWidth',
    height: 'totalHeight'
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {};
let $edcf132a9284368a$var$visualViewport = typeof document !== 'undefined' ? window.visualViewport : null;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
    let scroll = {};
    var _visualViewport_scale;
    let isPinchZoomedIn = ((_visualViewport_scale = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.scale) !== null && _visualViewport_scale !== void 0 ? _visualViewport_scale : 1) > 1;
    if (containerNode.tagName === 'BODY') {
        let documentElement = document.documentElement;
        totalWidth = documentElement.clientWidth;
        totalHeight = documentElement.clientHeight;
        var _visualViewport_width;
        width = (_visualViewport_width = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
        var _visualViewport_height;
        height = (_visualViewport_height = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
        scroll.top = documentElement.scrollTop || containerNode.scrollTop;
        scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
        // The goal of the below is to get a top/left value that represents the top/left of the visual viewport with
        // respect to the layout viewport origin. This combined with the scrollTop/scrollLeft will allow us to calculate
        // coordinates/values with respect to the visual viewport or with respect to the layout viewport.
        if ($edcf132a9284368a$var$visualViewport) {
            top = $edcf132a9284368a$var$visualViewport.offsetTop;
            left = $edcf132a9284368a$var$visualViewport.offsetLeft;
        }
    } else {
        ({ width: width, height: height, top: top, left: left } = $edcf132a9284368a$var$getOffset(containerNode));
        scroll.top = containerNode.scrollTop;
        scroll.left = containerNode.scrollLeft;
        totalWidth = width;
        totalHeight = height;
    }
    if (($c87311424ea30a05$export$78551043582a6a98)() && (containerNode.tagName === 'BODY' || containerNode.tagName === 'HTML') && isPinchZoomedIn) {
        // Safari will report a non-zero scrollTop/Left for the non-scrolling body/HTML element when pinch zoomed in unlike other browsers.
        // Set to zero for parity calculations so we get consistent positioning of overlays across all browsers.
        // Also switch to visualViewport.pageTop/pageLeft so that we still accomodate for scroll positioning for body/HTML elements that are actually scrollable
        // before pinch zoom happens
        scroll.top = 0;
        scroll.left = 0;
        var _visualViewport_pageTop;
        top = (_visualViewport_pageTop = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.pageTop) !== null && _visualViewport_pageTop !== void 0 ? _visualViewport_pageTop : 0;
        var _visualViewport_pageLeft;
        left = (_visualViewport_pageLeft = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.pageLeft) !== null && _visualViewport_pageLeft !== void 0 ? _visualViewport_pageLeft : 0;
    }
    return {
        width: width,
        height: height,
        totalWidth: totalWidth,
        totalHeight: totalHeight,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $edcf132a9284368a$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
// Determines the amount of space required when moving the overlay to ensure it remains in the boundary
function $edcf132a9284368a$var$getDelta(axis, offset, size, // The dimensions of the boundary element that the popover is
// positioned within (most of the time this is the <body>).
boundaryDimensions, // The dimensions of the containing block element that the popover is
// positioned relative to (e.g. parent with position: relative).
// Usually this is the same as the boundary element, but if the popover
// is portaled somewhere other than the body and has an ancestor with
// position: relative/absolute, it will be different.
containerDimensions, padding, containerOffsetWithBoundary) {
    var _containerDimensions_scroll_axis;
    let containerScroll = (_containerDimensions_scroll_axis = containerDimensions.scroll[axis]) !== null && _containerDimensions_scroll_axis !== void 0 ? _containerDimensions_scroll_axis : 0;
    // The height/width of the boundary. Matches the axis along which we are adjusting the overlay position
    let boundarySize = boundaryDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
    // Calculate the edges of the boundary (accomodating for the boundary padding) and the edges of the overlay.
    // Note that these values are with respect to the visual viewport (aka 0,0 is the top left of the viewport)
    let boundaryStartEdge = boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + padding;
    let boundaryEndEdge = boundarySize + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] - padding;
    let startEdgeOffset = offset - containerScroll + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
    let endEdgeOffset = offset - containerScroll + size + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
    // If any of the overlay edges falls outside of the boundary, shift the overlay the required amount to align one of the overlay's
    // edges with the closest boundary edge.
    if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
    else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
    else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $edcf132a9284368a$var$parsePlacement(input) {
    if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = $edcf132a9284368a$var$AXIS[placement] || 'right';
    let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
    if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = 'center';
    let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
    let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
    $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset) {
    let { placement: placement, crossPlacement: crossPlacement, axis: axis, crossAxis: crossAxis, size: size, crossSize: crossSize } = placementInfo;
    let position = {};
    var _childOffset_crossAxis;
    // button position
    position[crossAxis] = (_childOffset_crossAxis = childOffset[crossAxis]) !== null && _childOffset_crossAxis !== void 0 ? _childOffset_crossAxis : 0;
    var _childOffset_crossSize, _overlaySize_crossSize, _childOffset_crossSize1, _overlaySize_crossSize1;
    if (crossPlacement === 'center') //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += (((_childOffset_crossSize = childOffset[crossSize]) !== null && _childOffset_crossSize !== void 0 ? _childOffset_crossSize : 0) - ((_overlaySize_crossSize = overlaySize[crossSize]) !== null && _overlaySize_crossSize !== void 0 ? _overlaySize_crossSize : 0)) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += ((_childOffset_crossSize1 = childOffset[crossSize]) !== null && _childOffset_crossSize1 !== void 0 ? _childOffset_crossSize1 : 0) - ((_overlaySize_crossSize1 = overlaySize[crossSize]) !== null && _overlaySize_crossSize1 !== void 0 ? _overlaySize_crossSize1 : 0);
     /* else {
    the overlay top should match the button top
  } */ 
    position[crossAxis] += crossOffset;
    // overlay top overlapping arrow with button bottom
    const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
    // overlay bottom overlapping arrow with button top
    const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
    position[crossAxis] = ($9446cca9a3875146$export$7d15b64cf5a3a4c4)(position[crossAxis], minPosition, maxPosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];
        position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection) {
    const containerHeight = isContainerPositioned ? containerOffsetWithBoundary.height : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE.height];
    var _position_bottom;
    // For cases where position is set via "bottom" instead of "top", we need to calculate the true overlay top with respect to the boundary. Reverse calculate this with the same method
    // used in computePosition.
    let overlayTop = position.top != null ? containerOffsetWithBoundary.top + position.top : containerOffsetWithBoundary.top + (containerHeight - ((_position_bottom = position.bottom) !== null && _position_bottom !== void 0 ? _position_bottom : 0) - overlayHeight);
    var _boundaryDimensions_scroll_top, _margins_top, _margins_bottom, _boundaryDimensions_scroll_top1, _margins_top1, _margins_bottom1;
    let maxHeight = heightGrowthDirection !== 'top' ? // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, boundaryDimensions.height + boundaryDimensions.top + ((_boundaryDimensions_scroll_top = boundaryDimensions.scroll.top) !== null && _boundaryDimensions_scroll_top !== void 0 ? _boundaryDimensions_scroll_top : 0) - overlayTop // this is the top of the overlay
     - (((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0) + padding // save additional space for margin and padding
    )) : Math.max(0, overlayTop + overlayHeight // this is the bottom of the overlay
     - (boundaryDimensions.top + ((_boundaryDimensions_scroll_top1 = boundaryDimensions.scroll.top) !== null && _boundaryDimensions_scroll_top1 !== void 0 ? _boundaryDimensions_scroll_top1 : 0) // this is the top of the boundary
    ) - (((_margins_top1 = margins.top) !== null && _margins_top1 !== void 0 ? _margins_top1 : 0) + ((_margins_bottom1 = margins.bottom) !== null && _margins_bottom1 !== void 0 ? _margins_bottom1 : 0) + padding // save additional space for margin and padding
    ));
    return Math.min(boundaryDimensions.height - padding * 2, maxHeight);
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement, axis: axis, size: size } = placementInfo;
    var _boundaryDimensions_scroll_axis, _margins_axis;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - ((_boundaryDimensions_scroll_axis = boundaryDimensions.scroll[axis]) !== null && _boundaryDimensions_scroll_axis !== void 0 ? _boundaryDimensions_scroll_axis : 0) + containerOffsetWithBoundary[axis] - ((_margins_axis = margins[axis]) !== null && _margins_axis !== void 0 ? _margins_axis : 0) - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
    var _margins_axis1;
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - ((_margins_axis1 = margins[axis]) !== null && _margins_axis1 !== void 0 ? _margins_axis1 : 0) - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset) {
    let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
    let { size: size, crossAxis: crossAxis, crossSize: crossSize, placement: placement, crossPlacement: crossPlacement } = placementInfo;
    let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    let normalizedOffset = offset;
    let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
        let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    // Determine the direction the height of the overlay can grow so that we can choose how to calculate the max height
    let heightGrowthDirection = 'bottom';
    if (placementInfo.axis === 'top') {
        if (placementInfo.placement === 'top') heightGrowthDirection = 'top';
        else if (placementInfo.placement === 'bottom') heightGrowthDirection = 'bottom';
    } else if (placementInfo.crossAxis === 'top') {
        if (placementInfo.crossPlacement === 'top') heightGrowthDirection = 'bottom';
        else if (placementInfo.crossPlacement === 'bottom') heightGrowthDirection = 'top';
    }
    let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let arrowPosition = {};
    // All values are transformed so that 0 is at the top/left of the overlay depending on the orientation
    // Prefer the arrow being in the center of the trigger/overlay anchor element
    // childOffset[crossAxis] + .5 * childOffset[crossSize] = absolute position with respect to the trigger's coordinate system that would place the arrow in the center of the trigger
    // position[crossAxis] - margins[AXIS[crossAxis]] = value use to transform the position to a value with respect to the overlay's coordinate system. A child element's (aka arrow) position absolute's "0"
    // is positioned after the margin of its parent (aka overlay) so we need to subtract it to get the proper coordinate transform
    let preferredArrowPosition = childOffset[crossAxis] + .5 * childOffset[crossSize] - position[crossAxis] - margins[$edcf132a9284368a$var$AXIS[crossAxis]];
    // Min/Max position limits for the arrow with respect to the overlay
    const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
    var _margins_left, _margins_right, _margins_top, _margins_bottom;
    // overlaySize[crossSize] - margins = true size of the overlay
    const overlayMargin = $edcf132a9284368a$var$AXIS[crossAxis] === 'left' ? ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0) : ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
    const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
    // Min/Max position limits for the arrow with respect to the trigger/overlay anchor element
    // Same margin accomodation done here as well as for the preferredArrowPosition
    const arrowOverlappingChildMinEdge = childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[$edcf132a9284368a$var$AXIS[crossAxis]]);
    const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[$edcf132a9284368a$var$AXIS[crossAxis]]);
    // Clamp the arrow positioning so that it always is within the bounds of the anchor and the overlay
    const arrowPositionOverlappingChild = ($9446cca9a3875146$export$7d15b64cf5a3a4c4)(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
    arrowPosition[crossAxis] = ($9446cca9a3875146$export$7d15b64cf5a3a4c4)(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement, targetNode: targetNode, overlayNode: overlayNode, scrollNode: scrollNode, padding: padding, shouldFlip: shouldFlip, boundaryElement: boundaryElement, offset: offset, crossOffset: crossOffset, maxHeight: maxHeight, arrowSize: arrowSize = 0, arrowBoundaryOffset: arrowBoundaryOffset = 0 } = opts;
    let container = overlayNode instanceof HTMLElement ? $edcf132a9284368a$var$getContainingBlock(overlayNode) : document.documentElement;
    let isViewportContainer = container === document.documentElement;
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isViewportContainer ? $edcf132a9284368a$var$getOffset(targetNode) : $edcf132a9284368a$var$getPosition(targetNode, container);
    if (!isViewportContainer) {
        let { marginTop: marginTop, marginLeft: marginLeft } = window.getComputedStyle(targetNode);
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = $edcf132a9284368a$var$getOffset(overlayNode);
    let margins = $edcf132a9284368a$var$getMargins(overlayNode);
    var _margins_left, _margins_right;
    overlaySize.width += ((_margins_left = margins.left) !== null && _margins_left !== void 0 ? _margins_left : 0) + ((_margins_right = margins.right) !== null && _margins_right !== void 0 ? _margins_right : 0);
    var _margins_top, _margins_bottom;
    overlaySize.height += ((_margins_top = margins.top) !== null && _margins_top !== void 0 ? _margins_top : 0) + ((_margins_bottom = margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : 0);
    let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
    let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
    let containerDimensions = $edcf132a9284368a$var$getContainerDimensions(container);
    // If the container is the HTML element wrapping the body element, the retrieved scrollTop/scrollLeft will be equal to the
    // body element's scroll. Set the container's scroll values to 0 since the overlay's edge position value in getDelta don't then need to be further offset
    // by the container scroll since they are essentially the same containing element and thus in the same coordinate system
    let containerOffsetWithBoundary = boundaryElement.tagName === 'BODY' ? $edcf132a9284368a$var$getOffset(container) : $edcf132a9284368a$var$getPosition(container, boundaryElement);
    if (container.tagName === 'HTML' && boundaryElement.tagName === 'BODY') {
        containerDimensions.scroll.top = 0;
        containerDimensions.scroll.left = 0;
    }
    return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset);
}
function $edcf132a9284368a$var$getOffset(node) {
    let { top: top, left: left, width: width, height: height } = node.getBoundingClientRect();
    let { scrollTop: scrollTop, scrollLeft: scrollLeft, clientTop: clientTop, clientLeft: clientLeft } = document.documentElement;
    return {
        top: top + scrollTop - clientTop,
        left: left + scrollLeft - clientLeft,
        width: width,
        height: height
    };
}
function $edcf132a9284368a$var$getPosition(node, parent) {
    let style = window.getComputedStyle(node);
    let offset;
    if (style.position === 'fixed') {
        let { top: top, left: left, width: width, height: height } = node.getBoundingClientRect();
        offset = {
            top: top,
            left: left,
            width: width,
            height: height
        };
    } else {
        offset = $edcf132a9284368a$var$getOffset(node);
        let parentOffset = $edcf132a9284368a$var$getOffset(parent);
        let parentStyle = window.getComputedStyle(parent);
        parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
        parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
        offset.top -= parentOffset.top;
        offset.left -= parentOffset.left;
    }
    offset.top -= parseInt(style.marginTop, 10) || 0;
    offset.left -= parseInt(style.marginLeft, 10) || 0;
    return offset;
}
// Returns the containing block of an element, which is the element that
// this element will be positioned relative to.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
function $edcf132a9284368a$var$getContainingBlock(node) {
    // The offsetParent of an element in most cases equals the containing block.
    // https://w3c.github.io/csswg-drafts/cssom-view/#dom-htmlelement-offsetparent
    let offsetParent = node.offsetParent;
    // The offsetParent algorithm terminates at the document body,
    // even if the body is not a containing block. Double check that
    // and use the documentElement if so.
    if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === 'static' && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
    // TODO(later): handle table elements?
    // The offsetParent can be null if the element has position: fixed, or a few other cases.
    // We have to walk up the tree manually in this case because fixed positioned elements
    // are still positioned relative to their containing block, which is not always the viewport.
    if (offsetParent == null) {
        offsetParent = node.parentElement;
        while(offsetParent && !$edcf132a9284368a$var$isContainingBlock(offsetParent))offsetParent = offsetParent.parentElement;
    }
    // Fall back to the viewport.
    return offsetParent || document.documentElement;
}
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
function $edcf132a9284368a$var$isContainingBlock(node) {
    let style = window.getComputedStyle(node);
    return style.transform !== 'none' || /transform|perspective/.test(style.willChange) || style.filter !== 'none' || style.contain === 'paint' || 'backdropFilter' in style && style.backdropFilter !== 'none' || 'WebkitBackdropFilter' in style && style.WebkitBackdropFilter !== 'none';
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $dd149f63282afbbf$export$f6211563215e3b37 = new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef, isOpen: isOpen, onClose: onClose } = opts;
    (useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            // Ignore scroll events on any input or textarea as the cursor position can cause it to scroll
            // such as in a combobox. Clicking the dropdown button places focus on the input, and if the
            // text inside the input extends beyond the 'end', then it will scroll so the cursor is visible at the end.
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener('scroll', onScroll, true);
        return ()=>{
            window.removeEventListener('scroll', onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




let $2a41e45df1593e64$var$visualViewport = typeof document !== 'undefined' ? window.visualViewport : null;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
    let { direction: direction } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let { arrowSize: arrowSize = 0, targetRef: targetRef, overlayRef: overlayRef, scrollRef: scrollRef = overlayRef, placement: placement = 'bottom', containerPadding: containerPadding = 12, shouldFlip: shouldFlip = true, boundaryElement: boundaryElement = typeof document !== 'undefined' ? document.body : null, offset: offset = 0, crossOffset: crossOffset = 0, shouldUpdatePosition: shouldUpdatePosition = true, isOpen: isOpen = true, onClose: onClose, maxHeight: maxHeight, arrowBoundaryOffset: arrowBoundaryOffset = 0 } = props;
    let [position, setPosition] = (useState)(null);
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight,
        arrowBoundaryOffset,
        arrowSize
    ];
    // Note, the position freezing breaks if body sizes itself dynamicly with the visual viewport but that might
    // just be a non-realistic use case
    // Upon opening a overlay, record the current visual viewport scale so we can freeze the overlay styles
    let lastScale = (useRef)($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale);
    (useEffect)(()=>{
        if (isOpen) lastScale.current = $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale;
    }, [
        isOpen
    ]);
    let updatePosition = (useCallback)(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
        if (($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale) !== lastScale.current) return;
        // Determine a scroll anchor based on the focused element.
        // This stores the offset of the anchor element from the scroll container
        // so it can be restored after repositioning. This way if the overlay height
        // changes, the focused element appears to stay in the same position.
        let anchor = null;
        if (scrollRef.current && scrollRef.current.contains(document.activeElement)) {
            var _document_activeElement;
            let anchorRect = (_document_activeElement = document.activeElement) === null || _document_activeElement === void 0 ? void 0 : _document_activeElement.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            var _anchorRect_top;
            // Anchor from the top if the offset is in the top half of the scrollable element,
            // otherwise anchor from the bottom.
            anchor = {
                type: 'top',
                offset: ((_anchorRect_top = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.top) !== null && _anchorRect_top !== void 0 ? _anchorRect_top : 0) - scrollRect.top
            };
            if (anchor.offset > scrollRect.height / 2) {
                anchor.type = 'bottom';
                var _anchorRect_bottom;
                anchor.offset = ((_anchorRect_bottom = anchorRect === null || anchorRect === void 0 ? void 0 : anchorRect.bottom) !== null && _anchorRect_bottom !== void 0 ? _anchorRect_bottom : 0) - scrollRect.bottom;
            }
        }
        // Always reset the overlay's previous max height if not defined by the user so that we can compensate for
        // RAC collections populating after a second render and properly set a correct max height + positioning when it populates.
        let overlay = overlayRef.current;
        if (!maxHeight && overlayRef.current) {
            var _window_visualViewport;
            overlay.style.top = '0px';
            overlay.style.bottom = '';
            var _window_visualViewport_height;
            overlay.style.maxHeight = ((_window_visualViewport_height = (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.height) !== null && _window_visualViewport_height !== void 0 ? _window_visualViewport_height : window.innerHeight) + 'px';
        }
        let position = ($edcf132a9284368a$export$b3ceb0cbf1056d98)({
            placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current || overlayRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight,
            arrowSize: arrowSize,
            arrowBoundaryOffset: arrowBoundaryOffset
        });
        if (!position.position) return;
        // Modify overlay styles directly so positioning happens immediately without the need of a second render
        // This is so we don't have to delay autoFocus scrolling or delay applying preventScroll for popovers
        overlay.style.top = '';
        overlay.style.bottom = '';
        overlay.style.left = '';
        overlay.style.right = '';
        Object.keys(position.position).forEach((key)=>overlay.style[key] = position.position[key] + 'px');
        overlay.style.maxHeight = position.maxHeight != null ? position.maxHeight + 'px' : '';
        // Restore scroll position relative to anchor element.
        if (anchor && document.activeElement && scrollRef.current) {
            let anchorRect = document.activeElement.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
            scrollRef.current.scrollTop += newOffset - anchor.offset;
        }
        // Trigger a set state for a second render anyway for arrow positioning
        setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updatePosition, deps);
    // Update position on window resize
    $2a41e45df1593e64$var$useResize(updatePosition);
    // Update position when the overlay changes size (might need to flip).
    ($9daab02d461809db$export$683480f191c0e3ea)({
        ref: overlayRef,
        onResize: updatePosition
    });
    // Update position when the target changes size (might need to flip).
    ($9daab02d461809db$export$683480f191c0e3ea)({
        ref: targetRef,
        onResize: updatePosition
    });
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = (useRef)(false);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        // Only reposition the overlay if a scroll event happens immediately as a result of resize (aka the virtual keyboard has appears)
        // We don't want to reposition the overlay if the user has pinch zoomed in and is scrolling the viewport around.
        let onScroll = ()=>{
            if (isResizing.current) onResize();
        };
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener('resize', onResize);
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener('scroll', onScroll);
        return ()=>{
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener('resize', onResize);
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener('scroll', onScroll);
        };
    }, [
        updatePosition
    ]);
    let close = (useCallback)(()=>{
        if (!isResizing.current) onClose === null || onClose === void 0 ? void 0 : onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    ($dd149f63282afbbf$export$18fc8428861184da)({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose && close
    });
    var _position_maxHeight, _position_placement;
    return {
        overlayProps: {
            style: {
                position: 'absolute',
                zIndex: 100000,
                ...position === null || position === void 0 ? void 0 : position.position,
                maxHeight: (_position_maxHeight = position === null || position === void 0 ? void 0 : position.maxHeight) !== null && _position_maxHeight !== void 0 ? _position_maxHeight : '100vh'
            }
        },
        placement: (_position_placement = position === null || position === void 0 ? void 0 : position.placement) !== null && _position_placement !== void 0 ? _position_placement : null,
        arrowProps: {
            'aria-hidden': 'true',
            role: 'presentation',
            style: {
                left: position === null || position === void 0 ? void 0 : position.arrowOffsetLeft,
                top: position === null || position === void 0 ? void 0 : position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $2a41e45df1593e64$var$useResize(onResize) {
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose, shouldCloseOnBlur: shouldCloseOnBlur, isOpen: isOpen, isDismissable: isDismissable = false, isKeyboardDismissDisabled: isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (useEffect)(()=>{
        if (isOpen && !$a11501f3d1d39e6c$var$visibleOverlays.includes(ref)) {
            $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
            return ()=>{
                let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
                if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
            };
        }
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack
    let onHide = ()=>{
        if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === 'Escape' && !isKeyboardDismissDisabled && !e.nativeEvent.isComposing) {
            e.stopPropagation();
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    ($e0b6e0b68ec7f50f$export$872b660ac5a1ff98)({
        ref: ref,
        onInteractOutside: isDismissable && isOpen ? onInteractOutside : undefined,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // Do not close if relatedTarget is null, which means focus is lost to the body.
            // That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
            // Clicking on the body to close the overlay should already be handled by useInteractOutside.
            // https://github.com/adobe/react-spectrum/issues/4130
            // https://github.com/adobe/react-spectrum/issues/4922
            //
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (!e.relatedTarget || ($9bf71ea28793e738$export$1258395f99bf9cbf)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $49c51c25361d4cd2$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled } = options;
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (isDisabled) return;
        $49c51c25361d4cd2$var$preventScrollCount++;
        if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
            if (($c87311424ea30a05$export$fedb369cb70207f1)()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
            else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
        }
        return ()=>{
            $49c51c25361d4cd2$var$preventScrollCount--;
            if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return ($ff5963eb1fccf552$export$e08e3b67e392101e)(scrollbarWidth > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
    ('scrollbarGutter' in document.documentElement.style ? $49c51c25361d4cd2$var$setStyle(document.documentElement, 'scrollbarGutter', 'stable') : $49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${scrollbarWidth}px`)), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let restoreScrollableStyles;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = ($62d8ded9296f3872$export$cfa2225e87938781)(e.target, true);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead.
        if (scrollable instanceof HTMLElement && window.getComputedStyle(scrollable).overscrollBehavior === 'auto') restoreScrollableStyles = $49c51c25361d4cd2$var$setStyle(scrollable, 'overscrollBehavior', 'contain');
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onTouchEnd = ()=>{
        if (restoreScrollableStyles) restoreScrollableStyles();
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
            setupStyles();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view.
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener('resize', ()=>$49c51c25361d4cd2$var$scrollIntoView(target), {
                        once: true
                    });
                }
            });
        }
    };
    let restoreStyles = null;
    let setupStyles = ()=>{
        if (restoreStyles) return;
        let onWindowScroll = ()=>{
            // Last resort. If the window scrolled, scroll it back to the top.
            // It should always be at the top because the body will have a negative margin (see below).
            window.scrollTo(0, 0);
        };
        // Record the original scroll position so we can restore it.
        // Then apply a negative margin to the body to offset it by the scroll position. This will
        // enable us to scroll the window to the top, which is required for the rest of this to work.
        let scrollX = window.pageXOffset;
        let scrollY = window.pageYOffset;
        restoreStyles = ($ff5963eb1fccf552$export$e08e3b67e392101e)($49c51c25361d4cd2$var$addEvent(window, 'scroll', onWindowScroll), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'), $49c51c25361d4cd2$var$setStyle(document.body, 'marginTop', `-${scrollY}px`), ()=>{
            window.scrollTo(scrollX, scrollY);
        });
        // Scroll to the top. The negative margin on the body will make this appear the same.
        window.scrollTo(0, 0);
    };
    let removeEvents = ($ff5963eb1fccf552$export$e08e3b67e392101e)($49c51c25361d4cd2$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'focus', onFocus, true));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreScrollableStyles === null || restoreScrollableStyles === void 0 ? void 0 : restoreScrollableStyles();
        restoreStyles === null || restoreStyles === void 0 ? void 0 : restoreStyles();
        removeEvents();
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    // internal function, so it's ok to ignore the difficult to fix type error
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = ($62d8ded9296f3872$export$cfa2225e87938781)(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = nextTarget.getBoundingClientRect().top;
            if (targetTop > scrollableTop + nextTarget.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        nextTarget = scrollable.parentElement;
    }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $96b38030c423d352$export$60d741e20e0aa309 = /*#__PURE__*/ (createContext)({});
function $96b38030c423d352$export$9fc1347d4195ccb3() {
    var _useContext;
    return (_useContext = (useContext)($96b38030c423d352$export$60d741e20e0aa309)) !== null && _useContext !== void 0 ? _useContext : {};
}

var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = {
    "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}`
};

var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = {
    "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`
};

var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = {
    "dismiss": `Odstranit`
};

var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = {
    "dismiss": `Luk`
};

var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = {
    "dismiss": `Schlie\xdfen`
};

var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = {
    "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`
};

var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = {
    "dismiss": `Dismiss`
};

var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = {
    "dismiss": `Descartar`
};

var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = {
    "dismiss": `L\xf5peta`
};

var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = {
    "dismiss": `Hylk\xe4\xe4`
};

var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = {
    "dismiss": `Rejeter`
};

var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = {
    "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`
};

var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = {
    "dismiss": `Odbaci`
};

var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = {
    "dismiss": `Elutas\xedt\xe1s`
};

var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = {
    "dismiss": `Ignora`
};

var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = {
    "dismiss": `\u{9589}\u{3058}\u{308B}`
};

var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = {
    "dismiss": `\u{BB34}\u{C2DC}`
};

var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = {
    "dismiss": `Atmesti`
};

var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = {
    "dismiss": `Ner\u{101}d\u{12B}t`
};

var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = {
    "dismiss": `Lukk`
};

var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = {
    "dismiss": `Negeren`
};

var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = {
    "dismiss": `Zignoruj`
};

var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = {
    "dismiss": `Descartar`
};

var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = {
    "dismiss": `Dispensar`
};

var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = {
    "dismiss": `Revocare`
};

var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = {
    "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`
};

var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = {
    "dismiss": `Zru\u{161}i\u{165}`
};

var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = {
    "dismiss": `Opusti`
};

var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = {
    "dismiss": `Odbaci`
};

var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = {
    "dismiss": `Avvisa`
};

var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = {
    "dismiss": `Kapat`
};

var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = {
    "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`
};

var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = {
    "dismiss": `\u{53D6}\u{6D88}`
};

var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = {
    "dismiss": `\u{95DC}\u{9589}`
};

var $a2f21f5f14f60553$exports = {};


































$a2f21f5f14f60553$exports = {
    "ar-AE": $773d5888b972f1cf$exports,
    "bg-BG": $d11f19852b941573$exports,
    "cs-CZ": $b983974c2ee1efb3$exports,
    "da-DK": $5809cc9d4e92de73$exports,
    "de-DE": $c68c2e4fc74398d1$exports,
    "el-GR": $0898b4c153db2b77$exports,
    "en-US": $6d74810286a15183$exports,
    "es-ES": $309d73dc65f78055$exports,
    "et-EE": $44ad94f7205cf593$exports,
    "fi-FI": $7c28f5687f0779a9$exports,
    "fr-FR": $e6d75df4b68bd73a$exports,
    "he-IL": $87505c9dab186d0f$exports,
    "hr-HR": $553439c3ffb3e492$exports,
    "hu-HU": $74cf411061b983a2$exports,
    "it-IT": $e933f298574dc435$exports,
    "ja-JP": $ac91fc9fe02f71f6$exports,
    "ko-KR": $52b96f86422025af$exports,
    "lt-LT": $c0d724c3e51dafa6$exports,
    "lv-LV": $c92899672a3fe72e$exports,
    "nb-NO": $9f576b39d8e7a9d6$exports,
    "nl-NL": $9d025808aeec81a7$exports,
    "pl-PL": $fce709921e2c0fa6$exports,
    "pt-BR": $2599cf0c4ab37f59$exports,
    "pt-PT": $3c220ae7ef8a35fd$exports,
    "ro-RO": $93562b5094072f54$exports,
    "ru-RU": $cd9e2abd0d06c7b4$exports,
    "sk-SK": $45375701f409adf1$exports,
    "sl-SI": $27fab53a576de9dd$exports,
    "sr-SP": $4438748d9952e7c7$exports,
    "sv-SE": $0936d7347ef4da4c$exports,
    "tr-TR": $29700c92185d38f8$exports,
    "uk-UA": $662ccaf2be4c25b3$exports,
    "zh-CN": $d80a27deda7cdb3c$exports,
    "zh-TW": $2b2734393847c884$exports
};

function $parcel$interopDefault$4(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss, ...otherProps } = props;
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$4($a2f21f5f14f60553$exports))), '@react-aria/overlays');
    let labels = ($313b98861ee5dd6c$export$d6875122194c7b44)(otherProps, stringFormatter.format('dismiss'));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ ($dbSRa$react).createElement(($5c3e21d68f1c4674$export$439d29a4e110a164), null, /*#__PURE__*/ ($dbSRa$react).createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick,
        style: {
            width: 1,
            height: 1
        }
    }));
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
let $5e3802645cc19319$var$observerStack = [];
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute('role') !== 'row') return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if (node.contains(target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        var _refCountMap_get;
        let refCount = (_refCountMap_get = $5e3802645cc19319$var$refCountMap.get(node)) !== null && _refCountMap_get !== void 0 ? _refCountMap_get : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute('aria-hidden') === 'true' && refCount === 0) return;
        if (refCount === 0) node.setAttribute('aria-hidden', 'true');
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList' || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target))) {
                for (let node of change.removedNodes)if (node instanceof Element) {
                    visibleNodes.delete(node);
                    hiddenNodes.delete(node);
                }
                for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === 'true' || node.dataset.reactAriaTopLayer === 'true')) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let observerWrapper = {
        visibleNodes: visibleNodes,
        hiddenNodes: hiddenNodes,
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    $5e3802645cc19319$var$observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $5e3802645cc19319$var$refCountMap.get(node);
            if (count == null) continue;
            if (count === 1) {
                node.removeAttribute('aria-hidden');
                $5e3802645cc19319$var$refCountMap.delete(node);
            } else $5e3802645cc19319$var$refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1]) {
            $5e3802645cc19319$var$observerStack.pop();
            if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].observe();
        } else $5e3802645cc19319$var$observerStack.splice($5e3802645cc19319$var$observerStack.indexOf(observerWrapper), 1);
    };
}
function $5e3802645cc19319$export$1020fa7f77e17884(element) {
    let observer = $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1];
    if (observer && !observer.visibleNodes.has(element)) {
        observer.visibleNodes.add(element);
        return ()=>{
            observer.visibleNodes.delete(element);
        };
    }
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f2f8a6077418541e$export$542a6fd13ac93354(props, state) {
    let { triggerRef: triggerRef, popoverRef: popoverRef, groupRef: groupRef, isNonModal: isNonModal, isKeyboardDismissDisabled: isKeyboardDismissDisabled, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    let isSubmenu = otherProps['trigger'] === 'SubmenuTrigger';
    let { overlayProps: overlayProps, underlayProps: underlayProps } = ($a11501f3d1d39e6c$export$ea8f71083e90600f)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal || isSubmenu,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, groupRef !== null && groupRef !== void 0 ? groupRef : popoverRef);
    let { overlayProps: positionProps, arrowProps: arrowProps, placement: placement } = ($2a41e45df1593e64$export$d39e1813b3bdd0e1)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal && !isSubmenu ? state.close : null
    });
    ($49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: isNonModal || !state.isOpen
    });
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (state.isOpen && popoverRef.current) {
            var _groupRef_current, _groupRef_current1;
            if (isNonModal) return ($5e3802645cc19319$export$1020fa7f77e17884)((_groupRef_current = groupRef === null || groupRef === void 0 ? void 0 : groupRef.current) !== null && _groupRef_current !== void 0 ? _groupRef_current : popoverRef.current);
            else return ($5e3802645cc19319$export$1c3ebcada18427bf)([
                (_groupRef_current1 = groupRef === null || groupRef === void 0 ? void 0 : groupRef.current) !== null && _groupRef_current1 !== void 0 ? _groupRef_current1 : popoverRef.current
            ]);
        }
    }, [
        isNonModal,
        state.isOpen,
        popoverRef,
        groupRef
    ]);
    return {
        popoverProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(overlayProps, positionProps),
        arrowProps: arrowProps,
        underlayProps: underlayProps,
        placement: placement
    };
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $337b884510726a0d$export$a2200b96afd16271 = /*#__PURE__*/ ($dbSRa$react).createContext(null);
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
    let isSSR = ($b5e257d569688ac6$export$535bd6ca7f90a273)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, isExiting: isExiting } = props;
    let [contain, setContain] = (useState)(false);
    let contextValue = (useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer: getContainer } = ($96b38030c423d352$export$9fc1347d4195ccb3)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ ($dbSRa$react).createElement(($9bf71ea28793e738$export$20e40289641fbbb6), {
        restoreFocus: true,
        contain: (props.shouldContainFocus || contain) && !isExiting
    }, contents);
    contents = /*#__PURE__*/ ($dbSRa$react).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ ($dbSRa$react).createElement(($f1ab8c75478c6f73$export$cf75428e0b9ed1ea), null, contents));
    return /*#__PURE__*/ ($4AOtR$reactdom).createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
    let ctx = (useContext)($337b884510726a0d$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $8ac8429251c45e4b$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps, underlayProps: underlayProps } = ($a11501f3d1d39e6c$export$ea8f71083e90600f)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    ($49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: !state.isOpen
    });
    ($337b884510726a0d$export$14c98a7594375490)();
    (useEffect)(()=>{
        if (state.isOpen && ref.current) return ($5e3802645cc19319$export$1c3ebcada18427bf)([
            ref.current
        ]);
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(overlayProps),
        underlayProps: underlayProps
    };
}

var $f23889fffbde9058$exports = {};
$f23889fffbde9058$exports = {
    "calendar": `\u{627}\u{644}\u{62A}\u{642}\u{648}\u{64A}\u{645}`,
    "day": `\u{64A}\u{648}\u{645}`,
    "dayPeriod": `\u{635}/\u{645}`,
    "endDate": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}`,
    "era": `\u{627}\u{644}\u{639}\u{635}\u{631}`,
    "hour": `\u{627}\u{644}\u{633}\u{627}\u{639}\u{627}\u{62A}`,
    "minute": `\u{627}\u{644}\u{62F}\u{642}\u{627}\u{626}\u{642}`,
    "month": `\u{627}\u{644}\u{634}\u{647}\u{631}`,
    "second": `\u{627}\u{644}\u{62B}\u{648}\u{627}\u{646}\u{64A}`,
    "selectedDateDescription": (args)=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.startDate} \u{625}\u{644}\u{649} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${args.time}`,
    "startDate": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621}`,
    "timeZoneName": `\u{627}\u{644}\u{62A}\u{648}\u{642}\u{64A}\u{62A}`,
    "weekday": `\u{627}\u{644}\u{64A}\u{648}\u{645}`,
    "year": `\u{627}\u{644}\u{633}\u{646}\u{629}`
};

var $09d9badaa8903929$exports = {};
$09d9badaa8903929$exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
    "day": `\u{434}\u{435}\u{43D}`,
    "dayPeriod": `\u{43F}\u{440}.\u{43E}\u{431}./\u{441}\u{43B}.\u{43E}\u{431}.`,
    "endDate": `\u{41A}\u{440}\u{430}\u{439}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{447}\u{430}\u{441}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
    "month": `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.startDate} \u{434}\u{43E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${args.time}`,
    "startDate": `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
    "weekday": `\u{434}\u{435}\u{43D} \u{43E}\u{442} \u{441}\u{435}\u{434}\u{43C}\u{438}\u{446}\u{430}\u{442}\u{430}`,
    "year": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`
};

var $151b77e0fd711730$exports = {};
$151b77e0fd711730$exports = {
    "calendar": `Kalend\xe1\u{159}`,
    "day": `den`,
    "dayPeriod": `\u{10D}\xe1st dne`,
    "endDate": `Kone\u{10D}n\xe9 datum`,
    "era": `letopo\u{10D}et`,
    "hour": `hodina`,
    "minute": `minuta`,
    "month": `m\u{11B}s\xedc`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Vybran\xe9 datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybran\xe9 obdob\xed: ${args.startDate} a\u{17E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vybran\xfd \u{10D}as: ${args.time}`,
    "startDate": `Po\u{10D}\xe1te\u{10D}n\xed datum`,
    "timeZoneName": `\u{10D}asov\xe9 p\xe1smo`,
    "weekday": `den v t\xfddnu`,
    "year": `rok`
};

var $61915aa8630b90a2$exports = {};
$61915aa8630b90a2$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `AM/PM`,
    "endDate": `Slutdato`,
    "era": `\xe6ra`,
    "hour": `time`,
    "minute": `minut`,
    "month": `m\xe5ned`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt interval: ${args.startDate} til ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valgt tidspunkt: ${args.time}`,
    "startDate": `Startdato`,
    "timeZoneName": `tidszone`,
    "weekday": `ugedag`,
    "year": `\xe5r`
};

var $35cea00159787840$exports = {};
$35cea00159787840$exports = {
    "calendar": `Kalender`,
    "day": `Tag`,
    "dayPeriod": `Tagesh\xe4lfte`,
    "endDate": `Enddatum`,
    "era": `Epoche`,
    "hour": `Stunde`,
    "minute": `Minute`,
    "month": `Monat`,
    "second": `Sekunde`,
    "selectedDateDescription": (args)=>`Ausgew\xe4hltes Datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Ausgew\xe4hlter Bereich: ${args.startDate} bis ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ausgew\xe4hlte Zeit: ${args.time}`,
    "startDate": `Anfangsdatum`,
    "timeZoneName": `Zeitzone`,
    "weekday": `Wochentag`,
    "year": `Jahr`
};

var $518b4e82b9eacafd$exports = {};
$518b4e82b9eacafd$exports = {
    "calendar": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BB}\u{3CC}\u{3B3}\u{3B9}\u{3BF}`,
    "day": `\u{3B7}\u{3BC}\u{3AD}\u{3C1}\u{3B1}`,
    "dayPeriod": `\u{3C0}.\u{3BC}./\u{3BC}.\u{3BC}.`,
    "endDate": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}`,
    "era": `\u{3C0}\u{3B5}\u{3C1}\u{3AF}\u{3BF}\u{3B4}\u{3BF}\u{3C2}`,
    "hour": `\u{3CE}\u{3C1}\u{3B1}`,
    "minute": `\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3CC}`,
    "month": `\u{3BC}\u{3AE}\u{3BD}\u{3B1}\u{3C2}`,
    "second": `\u{3B4}\u{3B5}\u{3C5}\u{3C4}\u{3B5}\u{3C1}\u{3CC}\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3BF}`,
    "selectedDateDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${args.startDate} \u{3AD}\u{3C9}\u{3C2} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${args.time}`,
    "startDate": `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2}`,
    "timeZoneName": `\u{3B6}\u{3CE}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}\u{3C2}`,
    "weekday": `\u{3BA}\u{3B1}\u{3B8}\u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3B9}\u{3BD}\u{3AE}`,
    "year": `\u{3AD}\u{3C4}\u{3BF}\u{3C2}`
};

var $1c2b297f7e2cf474$exports = {};
$1c2b297f7e2cf474$exports = {
    "era": `era`,
    "year": `year`,
    "month": `month`,
    "day": `day`,
    "hour": `hour`,
    "minute": `minute`,
    "second": `second`,
    "dayPeriod": `AM/PM`,
    "calendar": `Calendar`,
    "startDate": `Start Date`,
    "endDate": `End Date`,
    "weekday": `day of the week`,
    "timeZoneName": `time zone`,
    "selectedDateDescription": (args)=>`Selected Date: ${args.date}`,
    "selectedRangeDescription": (args)=>`Selected Range: ${args.startDate} to ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Selected Time: ${args.time}`
};

var $07f628a707cf9b18$exports = {};
$07f628a707cf9b18$exports = {
    "calendar": `Calendario`,
    "day": `d\xeda`,
    "dayPeriod": `a.\xa0m./p.\xa0m.`,
    "endDate": `Fecha final`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `mes`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Fecha seleccionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Rango seleccionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora seleccionada: ${args.time}`,
    "startDate": `Fecha de inicio`,
    "timeZoneName": `zona horaria`,
    "weekday": `d\xeda de la semana`,
    "year": `a\xf1o`
};

var $db553ffe17c7f4db$exports = {};
$db553ffe17c7f4db$exports = {
    "calendar": `Kalender`,
    "day": `p\xe4ev`,
    "dayPeriod": `enne/p\xe4rast l\xf5unat`,
    "endDate": `L\xf5ppkuup\xe4ev`,
    "era": `ajastu`,
    "hour": `tund`,
    "minute": `minut`,
    "month": `kuu`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valitud kuup\xe4ev: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valitud vahemik: ${args.startDate} kuni ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valitud aeg: ${args.time}`,
    "startDate": `Alguskuup\xe4ev`,
    "timeZoneName": `ajav\xf6\xf6nd`,
    "weekday": `n\xe4dalap\xe4ev`,
    "year": `aasta`
};

var $4afcfe00cd703f83$exports = {};
$4afcfe00cd703f83$exports = {
    "calendar": `Kalenteri`,
    "day": `p\xe4iv\xe4`,
    "dayPeriod": `vuorokaudenaika`,
    "endDate": `P\xe4\xe4ttymisp\xe4iv\xe4`,
    "era": `aikakausi`,
    "hour": `tunti`,
    "minute": `minuutti`,
    "month": `kuukausi`,
    "second": `sekunti`,
    "selectedDateDescription": (args)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valittu aikav\xe4li: ${args.startDate} \u{2013} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valittu aika: ${args.time}`,
    "startDate": `Alkamisp\xe4iv\xe4`,
    "timeZoneName": `aikavy\xf6hyke`,
    "weekday": `viikonp\xe4iv\xe4`,
    "year": `vuosi`
};

var $1d2645d18d4c5be0$exports = {};
$1d2645d18d4c5be0$exports = {
    "calendar": `Calendrier`,
    "day": `jour`,
    "dayPeriod": `cadran`,
    "endDate": `Date de fin`,
    "era": `\xe8re`,
    "hour": `heure`,
    "minute": `minute`,
    "month": `mois`,
    "second": `seconde`,
    "selectedDateDescription": (args)=>`Date s\xe9lectionn\xe9e\xa0: ${args.date}`,
    "selectedRangeDescription": (args)=>`Plage s\xe9lectionn\xe9e\xa0: ${args.startDate} au ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Heure choisie\xa0: ${args.time}`,
    "startDate": `Date de d\xe9but`,
    "timeZoneName": `fuseau horaire`,
    "weekday": `jour de la semaine`,
    "year": `ann\xe9e`
};

var $64cb6a9be1f6fa48$exports = {};
$64cb6a9be1f6fa48$exports = {
    "calendar": `\u{5DC}\u{5D5}\u{5D7} \u{5E9}\u{5E0}\u{5D4}`,
    "day": `\u{5D9}\u{5D5}\u{5DD}`,
    "dayPeriod": `\u{5DC}\u{5E4}\u{5E0}\u{5D4}\u{5F4}\u{5E6}/\u{5D0}\u{5D7}\u{5D4}\u{5F4}\u{5E6}`,
    "endDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E1}\u{5D9}\u{5D5}\u{5DD}`,
    "era": `\u{5EA}\u{5E7}\u{5D5}\u{5E4}\u{5D4}`,
    "hour": `\u{5E9}\u{5E2}\u{5D4}`,
    "minute": `\u{5D3}\u{5E7}\u{5D4}`,
    "month": `\u{5D7}\u{5D5}\u{5D3}\u{5E9}`,
    "second": `\u{5E9}\u{5E0}\u{5D9}\u{5D9}\u{5D4}`,
    "selectedDateDescription": (args)=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.startDate} \u{5E2}\u{5D3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${args.time}`,
    "startDate": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4}`,
    "timeZoneName": `\u{5D0}\u{5D6}\u{5D5}\u{5E8} \u{5D6}\u{5DE}\u{5DF}`,
    "weekday": `\u{5D9}\u{5D5}\u{5DD} \u{5D1}\u{5E9}\u{5D1}\u{5D5}\u{5E2}`,
    "year": `\u{5E9}\u{5E0}\u{5D4}`
};

var $2a1ef2e8050be27a$exports = {};
$2a1ef2e8050be27a$exports = {
    "calendar": `Kalendar`,
    "day": `dan`,
    "dayPeriod": `AM/PM`,
    "endDate": `Datum zavr\u{161}etka`,
    "era": `era`,
    "hour": `sat`,
    "minute": `minuta`,
    "month": `mjesec`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Odabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Odabrani raspon: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Odabrano vrijeme: ${args.time}`,
    "startDate": `Datum po\u{10D}etka`,
    "timeZoneName": `vremenska zona`,
    "weekday": `dan u tjednu`,
    "year": `godina`
};

var $ad429dca102acd0e$exports = {};
$ad429dca102acd0e$exports = {
    "calendar": `Napt\xe1r`,
    "day": `nap`,
    "dayPeriod": `napszak`,
    "endDate": `Befejez\u{151} d\xe1tum`,
    "era": `\xe9ra`,
    "hour": `\xf3ra`,
    "minute": `perc`,
    "month": `h\xf3nap`,
    "second": `m\xe1sodperc`,
    "selectedDateDescription": (args)=>`Kijel\xf6lt d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Kijel\xf6lt tartom\xe1ny: ${args.startDate}\u{2013}${args.endDate}`,
    "selectedTimeDescription": (args)=>`Kijel\xf6lt id\u{151}: ${args.time}`,
    "startDate": `Kezd\u{151} d\xe1tum`,
    "timeZoneName": `id\u{151}z\xf3na`,
    "weekday": `h\xe9t napja`,
    "year": `\xe9v`
};

var $6e68cb5d1cb97bd2$exports = {};
$6e68cb5d1cb97bd2$exports = {
    "calendar": `Calendario`,
    "day": `giorno`,
    "dayPeriod": `AM/PM`,
    "endDate": `Data finale`,
    "era": `era`,
    "hour": `ora`,
    "minute": `minuto`,
    "month": `mese`,
    "second": `secondo`,
    "selectedDateDescription": (args)=>`Data selezionata: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervallo selezionato: da ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ora selezionata: ${args.time}`,
    "startDate": `Data iniziale`,
    "timeZoneName": `fuso orario`,
    "weekday": `giorno della settimana`,
    "year": `anno`
};

var $a82ee9af063ee069$exports = {};
$a82ee9af063ee069$exports = {
    "calendar": `\u{30AB}\u{30EC}\u{30F3}\u{30C0}\u{30FC}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{5348}\u{524D}/\u{5348}\u{5F8C}`,
    "endDate": `\u{7D42}\u{4E86}\u{65E5}`,
    "era": `\u{6642}\u{4EE3}`,
    "hour": `\u{6642}`,
    "minute": `\u{5206}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${args.startDate} \u{304B}\u{3089} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${args.time}`,
    "startDate": `\u{958B}\u{59CB}\u{65E5}`,
    "timeZoneName": `\u{30BF}\u{30A4}\u{30E0}\u{30BE}\u{30FC}\u{30F3}`,
    "weekday": `\u{66DC}\u{65E5}`,
    "year": `\u{5E74}`
};

var $67e9091dbf37d4eb$exports = {};
$67e9091dbf37d4eb$exports = {
    "calendar": `\u{B2EC}\u{B825}`,
    "day": `\u{C77C}`,
    "dayPeriod": `\u{C624}\u{C804}/\u{C624}\u{D6C4}`,
    "endDate": `\u{C885}\u{B8CC}\u{C77C}`,
    "era": `\u{C5F0}\u{D638}`,
    "hour": `\u{C2DC}`,
    "minute": `\u{BD84}`,
    "month": `\u{C6D4}`,
    "second": `\u{CD08}`,
    "selectedDateDescription": (args)=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${args.startDate} ~ ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${args.time}`,
    "startDate": `\u{C2DC}\u{C791}\u{C77C}`,
    "timeZoneName": `\u{C2DC}\u{AC04}\u{B300}`,
    "weekday": `\u{C694}\u{C77C}`,
    "year": `\u{B144}`
};

var $75834f9729f653d1$exports = {};
$75834f9729f653d1$exports = {
    "calendar": `Kalendorius`,
    "day": `diena`,
    "dayPeriod": `iki piet\u{173} / po piet\u{173}`,
    "endDate": `Pabaigos data`,
    "era": `era`,
    "hour": `valanda`,
    "minute": `minut\u{117}`,
    "month": `m\u{117}nuo`,
    "second": `sekund\u{117}`,
    "selectedDateDescription": (args)=>`Pasirinkta data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Pasirinktas intervalas: nuo ${args.startDate} iki ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Pasirinktas laikas: ${args.time}`,
    "startDate": `Prad\u{17E}ios data`,
    "timeZoneName": `laiko juosta`,
    "weekday": `savait\u{117}s diena`,
    "year": `metai`
};

var $a2df2c2520b4a7f0$exports = {};
$a2df2c2520b4a7f0$exports = {
    "calendar": `Kalend\u{101}rs`,
    "day": `diena`,
    "dayPeriod": `priek\u{161}pusdien\u{101}/p\u{113}cpusdien\u{101}`,
    "endDate": `Beigu datums`,
    "era": `\u{113}ra`,
    "hour": `stundas`,
    "minute": `min\u{16B}tes`,
    "month": `m\u{113}nesis`,
    "second": `sekundes`,
    "selectedDateDescription": (args)=>`Atlas\u{12B}tais datums: ${args.date}`,
    "selectedRangeDescription": (args)=>`Atlas\u{12B}tais diapazons: no ${args.startDate} l\u{12B}dz ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Atlas\u{12B}tais laiks: ${args.time}`,
    "startDate": `S\u{101}kuma datums`,
    "timeZoneName": `laika josla`,
    "weekday": `ned\u{113}\u{13C}as diena`,
    "year": `gads`
};

var $aedcd71db4933ed5$exports = {};
$aedcd71db4933ed5$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `a.m./p.m.`,
    "endDate": `Sluttdato`,
    "era": `tidsalder`,
    "hour": `time`,
    "minute": `minutt`,
    "month": `m\xe5ned`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valgt dato: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valgt omr\xe5de: ${args.startDate} til ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Valgt tid: ${args.time}`,
    "startDate": `Startdato`,
    "timeZoneName": `tidssone`,
    "weekday": `ukedag`,
    "year": `\xe5r`
};

var $3b2df9e54353046c$exports = {};
$3b2df9e54353046c$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `a.m./p.m.`,
    "endDate": `Einddatum`,
    "era": `tijdperk`,
    "hour": `uur`,
    "minute": `minuut`,
    "month": `maand`,
    "second": `seconde`,
    "selectedDateDescription": (args)=>`Geselecteerde datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Geselecteerd bereik: ${args.startDate} tot ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Geselecteerde tijd: ${args.time}`,
    "startDate": `Startdatum`,
    "timeZoneName": `tijdzone`,
    "weekday": `dag van de week`,
    "year": `jaar`
};

var $c03fe977fcfafe93$exports = {};
$c03fe977fcfafe93$exports = {
    "calendar": `Kalendarz`,
    "day": `dzie\u{144}`,
    "dayPeriod": `rano / po po\u{142}udniu / wieczorem`,
    "endDate": `Data ko\u{144}cowa`,
    "era": `era`,
    "hour": `godzina`,
    "minute": `minuta`,
    "month": `miesi\u{105}c`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Wybrana data: ${args.date}`,
    "selectedRangeDescription": (args)=>`Wybrany zakres: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Wybrany czas: ${args.time}`,
    "startDate": `Data pocz\u{105}tkowa`,
    "timeZoneName": `strefa czasowa`,
    "weekday": `dzie\u{144} tygodnia`,
    "year": `rok`
};

var $569f006fc292345f$exports = {};
$569f006fc292345f$exports = {
    "calendar": `Calend\xe1rio`,
    "day": `dia`,
    "dayPeriod": `AM/PM`,
    "endDate": `Data final`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `m\xeas`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora selecionada: ${args.time}`,
    "startDate": `Data inicial`,
    "timeZoneName": `fuso hor\xe1rio`,
    "weekday": `dia da semana`,
    "year": `ano`
};

var $7c2494e14452f2dd$exports = {};
$7c2494e14452f2dd$exports = {
    "calendar": `Calend\xe1rio`,
    "day": `dia`,
    "dayPeriod": `am/pm`,
    "endDate": `Data de T\xe9rmino`,
    "era": `era`,
    "hour": `hora`,
    "minute": `minuto`,
    "month": `m\xeas`,
    "second": `segundo`,
    "selectedDateDescription": (args)=>`Data selecionada: ${args.date}`,
    "selectedRangeDescription": (args)=>`Intervalo selecionado: ${args.startDate} a ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Hora selecionada: ${args.time}`,
    "startDate": `Data de In\xedcio`,
    "timeZoneName": `fuso hor\xe1rio`,
    "weekday": `dia da semana`,
    "year": `ano`
};

var $eb82ef981b5592bf$exports = {};
$eb82ef981b5592bf$exports = {
    "calendar": `Calendar`,
    "day": `zi`,
    "dayPeriod": `a.m/p.m.`,
    "endDate": `Dat\u{103} final`,
    "era": `er\u{103}`,
    "hour": `or\u{103}`,
    "minute": `minut`,
    "month": `lun\u{103}`,
    "second": `secund\u{103}`,
    "selectedDateDescription": (args)=>`Dat\u{103} selectat\u{103}: ${args.date}`,
    "selectedRangeDescription": (args)=>`Interval selectat: de la ${args.startDate} p\xe2n\u{103} la ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Ora selectat\u{103}: ${args.time}`,
    "startDate": `Dat\u{103} \xeenceput`,
    "timeZoneName": `fus orar`,
    "weekday": `ziua din s\u{103}pt\u{103}m\xe2n\u{103}`,
    "year": `an`
};

var $6efa0e119f396950$exports = {};
$6efa0e119f396950$exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}\u{44C}`,
    "day": `\u{434}\u{435}\u{43D}\u{44C}`,
    "dayPeriod": `AM/PM`,
    "endDate": `\u{414}\u{430}\u{442}\u{430} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}`,
    "era": `\u{44D}\u{440}\u{430}`,
    "hour": `\u{447}\u{430}\u{441}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
    "month": `\u{43C}\u{435}\u{441}\u{44F}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${args.startDate} \u{43F}\u{43E} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${args.time}`,
    "startDate": `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{43E}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
    "weekday": `\u{434}\u{435}\u{43D}\u{44C} \u{43D}\u{435}\u{434}\u{435}\u{43B}\u{438}`,
    "year": `\u{433}\u{43E}\u{434}`
};

var $7f5e57085d7f5049$exports = {};
$7f5e57085d7f5049$exports = {
    "calendar": `Kalend\xe1r`,
    "day": `de\u{148}`,
    "dayPeriod": `AM/PM`,
    "endDate": `D\xe1tum ukon\u{10D}enia`,
    "era": `letopo\u{10D}et`,
    "hour": `hodina`,
    "minute": `min\xfata`,
    "month": `mesiac`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Vybrat\xfd d\xe1tum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Vybrat\xfd rozsah: od ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vybrat\xfd \u{10D}as: ${args.time}`,
    "startDate": `D\xe1tum za\u{10D}atia`,
    "timeZoneName": `\u{10D}asov\xe9 p\xe1smo`,
    "weekday": `de\u{148} t\xfd\u{17E}d\u{148}a`,
    "year": `rok`
};

var $578ee7c11dcdde7a$exports = {};
$578ee7c11dcdde7a$exports = {
    "calendar": `Koledar`,
    "day": `dan`,
    "dayPeriod": `dop/pop`,
    "endDate": `Datum konca`,
    "era": `doba`,
    "hour": `ura`,
    "minute": `minuta`,
    "month": `mesec`,
    "second": `sekunda`,
    "selectedDateDescription": (args)=>`Izbrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izbrano obmo\u{10D}je: ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Izbrani \u{10D}as: ${args.time}`,
    "startDate": `Datum za\u{10D}etka`,
    "timeZoneName": `\u{10D}asovni pas`,
    "weekday": `dan v tednu`,
    "year": `leto`
};

var $bbc3fd6cd0bc9d50$exports = {};
$bbc3fd6cd0bc9d50$exports = {
    "calendar": `Kalendar`,
    "day": `\u{434}\u{430}\u{43D}`,
    "dayPeriod": `\u{43F}\u{440}\u{435} \u{43F}\u{43E}\u{434}\u{43D}\u{435}/\u{43F}\u{43E} \u{43F}\u{43E}\u{434}\u{43D}\u{435}`,
    "endDate": `Datum zavr\u{161}etka`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{441}\u{430}\u{442}`,
    "minute": `\u{43C}\u{438}\u{43D}\u{443}\u{442}`,
    "month": `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`,
    "selectedDateDescription": (args)=>`Izabrani datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Izabrani opseg: od ${args.startDate} do ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Izabrano vreme: ${args.time}`,
    "startDate": `Datum po\u{10D}etka`,
    "timeZoneName": `\u{432}\u{440}\u{435}\u{43C}\u{435}\u{43D}\u{441}\u{43A}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
    "weekday": `\u{434}\u{430}\u{43D} \u{443} \u{43D}\u{435}\u{434}\u{435}\u{459}\u{438}`,
    "year": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`
};

var $0b04512118591d2a$exports = {};
$0b04512118591d2a$exports = {
    "calendar": `Kalender`,
    "day": `dag`,
    "dayPeriod": `fm/em`,
    "endDate": `Slutdatum`,
    "era": `era`,
    "hour": `timme`,
    "minute": `minut`,
    "month": `m\xe5nad`,
    "second": `sekund`,
    "selectedDateDescription": (args)=>`Valt datum: ${args.date}`,
    "selectedRangeDescription": (args)=>`Valt intervall: ${args.startDate} till ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Vald tid: ${args.time}`,
    "startDate": `Startdatum`,
    "timeZoneName": `tidszon`,
    "weekday": `veckodag`,
    "year": `\xe5r`
};

var $3a49d121fe4c9e1d$exports = {};
$3a49d121fe4c9e1d$exports = {
    "calendar": `Takvim`,
    "day": `g\xfcn`,
    "dayPeriod": `\xd6\xd6/\xd6S`,
    "endDate": `Biti\u{15F} Tarihi`,
    "era": `\xe7a\u{11F}`,
    "hour": `saat`,
    "minute": `dakika`,
    "month": `ay`,
    "second": `saniye`,
    "selectedDateDescription": (args)=>`Se\xe7ilen Tarih: ${args.date}`,
    "selectedRangeDescription": (args)=>`Se\xe7ilen Aral\u{131}k: ${args.startDate} - ${args.endDate}`,
    "selectedTimeDescription": (args)=>`Se\xe7ilen Zaman: ${args.time}`,
    "startDate": `Ba\u{15F}lang\u{131}\xe7 Tarihi`,
    "timeZoneName": `saat dilimi`,
    "weekday": `haftan\u{131}n g\xfcn\xfc`,
    "year": `y\u{131}l`
};

var $5ba21dbb8914919d$exports = {};
$5ba21dbb8914919d$exports = {
    "calendar": `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
    "day": `\u{434}\u{435}\u{43D}\u{44C}`,
    "dayPeriod": `\u{434}\u{43F}/\u{43F}\u{43F}`,
    "endDate": `\u{414}\u{430}\u{442}\u{430} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}`,
    "era": `\u{435}\u{440}\u{430}`,
    "hour": `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`,
    "minute": `\u{445}\u{432}\u{438}\u{43B}\u{438}\u{43D}\u{430}`,
    "month": `\u{43C}\u{456}\u{441}\u{44F}\u{446}\u{44C}`,
    "second": `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
    "selectedDateDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${args.date}`,
    "selectedRangeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${args.startDate} \u{2014} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${args.time}`,
    "startDate": `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443}`,
    "timeZoneName": `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{438}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
    "weekday": `\u{434}\u{435}\u{43D}\u{44C} \u{442}\u{438}\u{436}\u{43D}\u{44F}`,
    "year": `\u{440}\u{456}\u{43A}`
};

var $51078838e1b16cd7$exports = {};
$51078838e1b16cd7$exports = {
    "calendar": `\u{65E5}\u{5386}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
    "endDate": `\u{7ED3}\u{675F}\u{65E5}\u{671F}`,
    "era": `\u{7EAA}\u{5143}`,
    "hour": `\u{5C0F}\u{65F6}`,
    "minute": `\u{5206}\u{949F}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${args.startDate} \u{81F3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${args.time}`,
    "startDate": `\u{5F00}\u{59CB}\u{65E5}\u{671F}`,
    "timeZoneName": `\u{65F6}\u{533A}`,
    "weekday": `\u{5DE5}\u{4F5C}\u{65E5}`,
    "year": `\u{5E74}`
};

var $33fab8219207655a$exports = {};
$33fab8219207655a$exports = {
    "calendar": `\u{65E5}\u{66C6}`,
    "day": `\u{65E5}`,
    "dayPeriod": `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
    "endDate": `\u{7D50}\u{675F}\u{65E5}\u{671F}`,
    "era": `\u{7EAA}\u{5143}`,
    "hour": `\u{5C0F}\u{65F6}`,
    "minute": `\u{5206}\u{949F}`,
    "month": `\u{6708}`,
    "second": `\u{79D2}`,
    "selectedDateDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${args.date}`,
    "selectedRangeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${args.startDate} \u{81F3} ${args.endDate}`,
    "selectedTimeDescription": (args)=>`\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${args.time}`,
    "startDate": `\u{958B}\u{59CB}\u{65E5}\u{671F}`,
    "timeZoneName": `\u{65F6}\u{533A}`,
    "weekday": `\u{5DE5}\u{4F5C}\u{65E5}`,
    "year": `\u{5E74}`
};

var $dfb4eba373ed9493$exports = {};


































$dfb4eba373ed9493$exports = {
    "ar-AE": $f23889fffbde9058$exports,
    "bg-BG": $09d9badaa8903929$exports,
    "cs-CZ": $151b77e0fd711730$exports,
    "da-DK": $61915aa8630b90a2$exports,
    "de-DE": $35cea00159787840$exports,
    "el-GR": $518b4e82b9eacafd$exports,
    "en-US": $1c2b297f7e2cf474$exports,
    "es-ES": $07f628a707cf9b18$exports,
    "et-EE": $db553ffe17c7f4db$exports,
    "fi-FI": $4afcfe00cd703f83$exports,
    "fr-FR": $1d2645d18d4c5be0$exports,
    "he-IL": $64cb6a9be1f6fa48$exports,
    "hr-HR": $2a1ef2e8050be27a$exports,
    "hu-HU": $ad429dca102acd0e$exports,
    "it-IT": $6e68cb5d1cb97bd2$exports,
    "ja-JP": $a82ee9af063ee069$exports,
    "ko-KR": $67e9091dbf37d4eb$exports,
    "lt-LT": $75834f9729f653d1$exports,
    "lv-LV": $a2df2c2520b4a7f0$exports,
    "nb-NO": $aedcd71db4933ed5$exports,
    "nl-NL": $3b2df9e54353046c$exports,
    "pl-PL": $c03fe977fcfafe93$exports,
    "pt-BR": $569f006fc292345f$exports,
    "pt-PT": $7c2494e14452f2dd$exports,
    "ro-RO": $eb82ef981b5592bf$exports,
    "ru-RU": $6efa0e119f396950$exports,
    "sk-SK": $7f5e57085d7f5049$exports,
    "sl-SI": $578ee7c11dcdde7a$exports,
    "sr-SP": $bbc3fd6cd0bc9d50$exports,
    "sv-SE": $0b04512118591d2a$exports,
    "tr-TR": $3a49d121fe4c9e1d$exports,
    "uk-UA": $5ba21dbb8914919d$exports,
    "zh-CN": $51078838e1b16cd7$exports,
    "zh-TW": $33fab8219207655a$exports
};

function $3dfb0f96be0d6a08$export$4a931266a3838b86(state, ref, disableArrowNavigation) {
    let { direction: direction } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let focusManager = (useMemo)(()=>($9bf71ea28793e738$export$c5251b9e124bf29)(ref), [
        ref
    ]);
    // Open the popover on alt + arrow down
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target)) return;
        if (e.altKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp') && 'setOpen' in state) {
            e.preventDefault();
            e.stopPropagation();
            state.setOpen(true);
        }
        if (disableArrowNavigation) return;
        switch(e.key){
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') {
                    if (ref.current) {
                        let target = e.target;
                        let prev = $3dfb0f96be0d6a08$var$findNextSegment(ref.current, target.getBoundingClientRect().left, -1);
                        if (prev) prev.focus();
                    }
                } else focusManager.focusPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') {
                    if (ref.current) {
                        let target = e.target;
                        let next = $3dfb0f96be0d6a08$var$findNextSegment(ref.current, target.getBoundingClientRect().left, 1);
                        if (next) next.focus();
                    }
                } else focusManager.focusNext();
                break;
        }
    };
    // Focus the first placeholder segment from the end on mouse down/touch up in the field.
    let focusLast = ()=>{
        var _window_event;
        if (!ref.current) return;
        // Try to find the segment prior to the element that was clicked on.
        let target = (_window_event = window.event) === null || _window_event === void 0 ? void 0 : _window_event.target;
        let walker = ($9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
            tabbable: true
        });
        if (target) {
            walker.currentNode = target;
            target = walker.previousNode();
        }
        // If no target found, find the last element from the end.
        if (!target) {
            let last;
            do {
                last = walker.lastChild();
                if (last) target = last;
            }while (last);
        }
        // Now go backwards until we find an element that is not a placeholder.
        while(target === null || target === void 0 ? void 0 : target.hasAttribute('data-placeholder')){
            let prev = walker.previousNode();
            if (prev && prev.hasAttribute('data-placeholder')) target = prev;
            else break;
        }
        if (target) target.focus();
    };
    let { pressProps: pressProps } = ($f6c31cce2adf654f$export$45712eceda6fad21)({
        preventFocusOnPress: true,
        allowTextSelectionOnPress: true,
        onPressStart (e) {
            if (e.pointerType === 'mouse') focusLast();
        },
        onPress (e) {
            if (e.pointerType === 'touch' || e.pointerType === 'pen') focusLast();
        }
    });
    return ($3ef42575df84b30b$export$9d1611c77c2fe928)(pressProps, {
        onKeyDown: onKeyDown
    });
}
function $3dfb0f96be0d6a08$var$findNextSegment(group, fromX, direction) {
    let walker = ($9bf71ea28793e738$export$2d6ec8fc375ceafa)(group, {
        tabbable: true
    });
    let node = walker.nextNode();
    let closest = null;
    let closestDistance = Infinity;
    while(node){
        let x = node.getBoundingClientRect().left;
        let distance = x - fromX;
        let absoluteDistance = Math.abs(distance);
        if (Math.sign(distance) === direction && absoluteDistance < closestDistance) {
            closest = node;
            closestDistance = absoluteDistance;
        }
        node = walker.nextNode();
    }
    return closest;
}

function $parcel$interopDefault$3(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $16f0b7bb276bc17e$export$653eddfc964b0f8a = new WeakMap();
const $16f0b7bb276bc17e$export$300019f83c56d282 = '__role_' + Date.now();
const $16f0b7bb276bc17e$export$7b3062cd49e80452 = '__focusManager_' + Date.now();
function $16f0b7bb276bc17e$export$5591b0b878c1a989(props, state, ref) {
    var _state_value;
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = ($2baaea4c71418dea$export$294aa081a6c6f55d)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let valueOnFocus = (useRef)(null);
    let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
        ...props,
        onFocusWithin (e) {
            var _props_onFocus;
            valueOnFocus.current = state.value;
            (_props_onFocus = props.onFocus) === null || _props_onFocus === void 0 ? void 0 : _props_onFocus.call(props, e);
        },
        onBlurWithin: (e)=>{
            var _props_onBlur;
            state.confirmPlaceholder();
            if (state.value !== valueOnFocus.current) state.commitValidation();
            (_props_onBlur = props.onBlur) === null || _props_onBlur === void 0 ? void 0 : _props_onBlur.call(props, e);
        },
        onFocusWithinChange: props.onFocusChange
    });
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$3($dfb4eba373ed9493$exports))), '@react-aria/datepicker');
    let message = state.maxGranularity === 'hour' ? 'selectedTimeDescription' : 'selectedDateDescription';
    let field = state.maxGranularity === 'hour' ? 'time' : 'date';
    let description = state.value ? stringFormatter.format(message, {
        [field]: state.formatValue({
            month: 'long'
        })
    }) : '';
    let descProps = ($ef06256079686ba0$export$f8aeda7b10753fa1)(description);
    // If within a date picker or date range picker, the date field will have role="presentation" and an aria-describedby
    // will be passed in that references the value (e.g. entire range). Otherwise, add the field's value description.
    let describedBy = props[$16f0b7bb276bc17e$export$300019f83c56d282] === 'presentation' ? fieldProps['aria-describedby'] : [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let propsFocusManager = props[$16f0b7bb276bc17e$export$7b3062cd49e80452];
    let focusManager = (useMemo)(()=>propsFocusManager || ($9bf71ea28793e738$export$c5251b9e124bf29)(ref), [
        propsFocusManager,
        ref
    ]);
    let groupProps = ($3dfb0f96be0d6a08$export$4a931266a3838b86)(state, ref, props[$16f0b7bb276bc17e$export$300019f83c56d282] === 'presentation');
    // Pass labels and other information to segments.
    $16f0b7bb276bc17e$export$653eddfc964b0f8a.set(state, {
        ariaLabel: props['aria-label'],
        ariaLabelledBy: [
            labelProps.id,
            props['aria-labelledby']
        ].filter(Boolean).join(' ') || undefined,
        ariaDescribedBy: describedBy,
        focusManager: focusManager
    });
    let autoFocusRef = (useRef)(props.autoFocus);
    // When used within a date picker or date range picker, the field gets role="presentation"
    // rather than role="group". Since the date picker/date range picker already has a role="group"
    // with a label and description, and the segments are already labeled by this as well, this
    // avoids very verbose duplicate announcements.
    let fieldDOMProps;
    if (props[$16f0b7bb276bc17e$export$300019f83c56d282] === 'presentation') fieldDOMProps = {
        role: 'presentation'
    };
    else fieldDOMProps = ($3ef42575df84b30b$export$9d1611c77c2fe928)(fieldProps, {
        role: 'group',
        'aria-disabled': props.isDisabled || undefined,
        'aria-describedby': describedBy
    });
    (useEffect)(()=>{
        if (autoFocusRef.current) focusManager.focusFirst();
        autoFocusRef.current = false;
    }, [
        focusManager
    ]);
    ($99facab73266f662$export$5add1d006293d136)(props.inputRef, state.value, state.setValue);
    ($e93e671b31057976$export$b8473d3665f3a75a)({
        ...props,
        focus () {
            focusManager.focusFirst();
        }
    }, state, props.inputRef);
    let inputProps = {
        type: 'hidden',
        name: props.name,
        value: ((_state_value = state.value) === null || _state_value === void 0 ? void 0 : _state_value.toString()) || '',
        disabled: props.isDisabled
    };
    if (props.validationBehavior === 'native') {
        // Use a hidden <input type="text"> rather than <input type="hidden">
        // so that an empty value blocks HTML form submission when the field is required.
        inputProps.type = 'text';
        inputProps.hidden = true;
        inputProps.required = props.isRequired;
        // Ignore react warning.
        inputProps.onChange = ()=>{};
    }
    let domProps = ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props);
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        fieldProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, fieldDOMProps, groupProps, focusWithinProps, {
            onKeyDown (e) {
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (props.onKeyUp) props.onKeyUp(e);
            },
            style: {
                unicodeBidi: 'isolate'
            }
        }),
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}

function $parcel$interopDefault$2(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









function $6057a3d2a53a12fd$export$42df105a73306d51(props, state, ref) {
    let buttonId = ($bdb11010cef70236$export$f680877a34711e37)();
    let dialogId = ($bdb11010cef70236$export$f680877a34711e37)();
    let fieldId = ($bdb11010cef70236$export$f680877a34711e37)();
    let stringFormatter = ($fca6afa0e843324b$export$f12b703ca79dfbb1)((($parcel$interopDefault$2($dfb4eba373ed9493$exports))), '@react-aria/datepicker');
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = ($2baaea4c71418dea$export$294aa081a6c6f55d)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let groupProps = ($3dfb0f96be0d6a08$export$4a931266a3838b86)(state, ref);
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let date = state.formatValue(locale, {
        month: 'long'
    });
    let description = date ? stringFormatter.format('selectedDateDescription', {
        date: date
    }) : '';
    let descProps = ($ef06256079686ba0$export$f8aeda7b10753fa1)(description);
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let domProps = ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props);
    let focusManager = (useMemo)(()=>($9bf71ea28793e738$export$c5251b9e124bf29)(ref), [
        ref
    ]);
    let isFocused = (useRef)(false);
    let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
        ...props,
        isDisabled: state.isOpen,
        onBlurWithin: (e)=>{
            // Ignore when focus moves into the popover.
            let dialog = document.getElementById(dialogId);
            if (!(dialog === null || dialog === void 0 ? void 0 : dialog.contains(e.relatedTarget))) {
                var _props_onBlur, _props_onFocusChange;
                isFocused.current = false;
                (_props_onBlur = props.onBlur) === null || _props_onBlur === void 0 ? void 0 : _props_onBlur.call(props, e);
                (_props_onFocusChange = props.onFocusChange) === null || _props_onFocusChange === void 0 ? void 0 : _props_onFocusChange.call(props, false);
            }
        },
        onFocusWithin: (e)=>{
            if (!isFocused.current) {
                var _props_onFocus, _props_onFocusChange;
                isFocused.current = true;
                (_props_onFocus = props.onFocus) === null || _props_onFocus === void 0 ? void 0 : _props_onFocus.call(props, e);
                (_props_onFocusChange = props.onFocusChange) === null || _props_onFocusChange === void 0 ? void 0 : _props_onFocusChange.call(props, true);
            }
        }
    });
    return {
        groupProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-labelledby': labelledBy,
            'aria-describedby': ariaDescribedBy,
            onKeyDown (e) {
                if (state.isOpen) return;
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (state.isOpen) return;
                if (props.onKeyUp) props.onKeyUp(e);
            }
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        fieldProps: {
            ...fieldProps,
            id: fieldId,
            [($16f0b7bb276bc17e$export$300019f83c56d282)]: 'presentation',
            'aria-describedby': ariaDescribedBy,
            value: state.value,
            onChange: state.setValue,
            placeholderValue: props.placeholderValue,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            granularity: props.granularity,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isRequired: props.isRequired,
            validationBehavior: props.validationBehavior,
            // DatePicker owns the validation state for the date field.
            [($e5be200c675c3b3a$export$a763b9476acd3eb)]: state,
            autoFocus: props.autoFocus,
            name: props.name
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        buttonProps: {
            ...descProps,
            id: buttonId,
            'aria-haspopup': 'dialog',
            'aria-label': stringFormatter.format('calendar'),
            'aria-labelledby': `${buttonId} ${labelledBy}`,
            'aria-describedby': ariaDescribedBy,
            'aria-expanded': state.isOpen,
            isDisabled: props.isDisabled || props.isReadOnly,
            onPress: ()=>state.setOpen(true)
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${buttonId} ${labelledBy}`
        },
        calendarProps: {
            autoFocus: true,
            value: state.dateValue,
            onChange: state.setDateValue,
            minValue: props.minValue,
            maxValue: props.maxValue,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isDateUnavailable: props.isDateUnavailable,
            defaultFocusedValue: state.dateValue ? undefined : props.placeholderValue,
            isInvalid: state.isInvalid,
            errorMessage: typeof props.errorMessage === 'function' ? props.errorMessage(state.displayValidation) : props.errorMessage || state.displayValidation.validationErrors.join(' ')
        },
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}

function $parcel$interopDefault$1(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // @ts-ignore



function $3aeceb3a64eb8358$export$d42c60378c8168f8() {
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let dictionary = ($fca6afa0e843324b$export$87b761675e8eaa10)((($parcel$interopDefault$1($dfb4eba373ed9493$exports))), '@react-aria/datepicker');
    return (useMemo)(()=>{
        // Try to use Intl.DisplayNames if possible. It may be supported in browsers, but not support the dateTimeField
        // type as that was only added in v2. https://github.com/tc39/intl-displaynames-v2
        try {
            return new Intl.DisplayNames(locale, {
                type: 'dateTimeField'
            });
        } catch  {
            return new $3aeceb3a64eb8358$var$DisplayNamesPolyfill(locale, dictionary);
        }
    }, [
        locale,
        dictionary
    ]);
}
class $3aeceb3a64eb8358$var$DisplayNamesPolyfill {
    of(field) {
        return this.dictionary.getStringForLocale(field, this.locale);
    }
    constructor(locale, dictionary){
        this.locale = locale;
        this.dictionary = dictionary;
    }
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 







function $32489daedd52963e$export$1315d136e6f7581(segment, state, ref) {
    let enteredKeys = (useRef)('');
    let { locale: locale, direction: direction } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let displayNames = ($3aeceb3a64eb8358$export$d42c60378c8168f8)();
    let { ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy, ariaDescribedBy: ariaDescribedBy, focusManager: focusManager } = ($16f0b7bb276bc17e$export$653eddfc964b0f8a).get(state);
    let textValue = segment.isPlaceholder ? '' : segment.text;
    let options = (useMemo)(()=>state.dateFormatter.resolvedOptions(), [
        state.dateFormatter
    ]);
    let monthDateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        month: 'long',
        timeZone: options.timeZone
    });
    let hourDateFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        hour: 'numeric',
        hour12: options.hour12,
        timeZone: options.timeZone
    });
    if (segment.type === 'month' && !segment.isPlaceholder) {
        let monthTextValue = monthDateFormatter.format(state.dateValue);
        textValue = monthTextValue !== textValue ? `${textValue} \u{2013} ${monthTextValue}` : monthTextValue;
    } else if (segment.type === 'hour' && !segment.isPlaceholder) textValue = hourDateFormatter.format(state.dateValue);
    let { spinButtonProps: spinButtonProps } = ($d2e8511e6f209edf$export$e908e06f4b8e3402)({
        // The ARIA spec says aria-valuenow is optional if there's no value, but aXe seems to require it.
        // This doesn't seem to have any negative effects with real AT since we also use aria-valuetext.
        // https://github.com/dequelabs/axe-core/issues/3505
        value: segment.value,
        textValue: textValue,
        minValue: segment.minValue,
        maxValue: segment.maxValue,
        isDisabled: state.isDisabled,
        isReadOnly: state.isReadOnly || !segment.isEditable,
        isRequired: state.isRequired,
        onIncrement: ()=>{
            enteredKeys.current = '';
            state.increment(segment.type);
        },
        onDecrement: ()=>{
            enteredKeys.current = '';
            state.decrement(segment.type);
        },
        onIncrementPage: ()=>{
            enteredKeys.current = '';
            state.incrementPage(segment.type);
        },
        onDecrementPage: ()=>{
            enteredKeys.current = '';
            state.decrementPage(segment.type);
        },
        onIncrementToMax: ()=>{
            enteredKeys.current = '';
            if (segment.maxValue !== undefined) state.setSegment(segment.type, segment.maxValue);
        },
        onDecrementToMin: ()=>{
            enteredKeys.current = '';
            if (segment.minValue !== undefined) state.setSegment(segment.type, segment.minValue);
        }
    });
    let parser = (useMemo)(()=>new ($6c7bd7858deea686$export$cd11ab140839f11d)(locale, {
            maximumFractionDigits: 0
        }), [
        locale
    ]);
    let backspace = ()=>{
        if (segment.text === segment.placeholder) focusManager.focusPrevious();
        if (parser.isValidPartialNumber(segment.text) && !state.isReadOnly && !segment.isPlaceholder) {
            let newValue = segment.text.slice(0, -1);
            let parsed = parser.parse(newValue);
            newValue = parsed === 0 ? '' : newValue;
            if (newValue.length === 0 || parsed === 0) state.clearSegment(segment.type);
            else state.setSegment(segment.type, parsed);
            enteredKeys.current = newValue;
        } else if (segment.type === 'dayPeriod') state.clearSegment(segment.type);
    };
    let onKeyDown = (e)=>{
        // Firefox does not fire selectstart for Ctrl/Cmd + A
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1742153
        if (e.key === 'a' && (($c87311424ea30a05$export$9ac100e40613ea10)() ? e.metaKey : e.ctrlKey)) e.preventDefault();
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        switch(e.key){
            case 'Backspace':
            case 'Delete':
                // Safari on iOS does not fire beforeinput for the backspace key because the cursor is at the start.
                e.preventDefault();
                e.stopPropagation();
                backspace();
                break;
        }
    };
    // Safari dayPeriod option doesn't work...
    let { startsWith: startsWith } = ($bb77f239b46e8c72$export$3274cf84b703fff)({
        sensitivity: 'base'
    });
    let amPmFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        hour: 'numeric',
        hour12: true
    });
    let am = (useMemo)(()=>{
        let date = new Date();
        date.setHours(0);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod').value;
    }, [
        amPmFormatter
    ]);
    let pm = (useMemo)(()=>{
        let date = new Date();
        date.setHours(12);
        return amPmFormatter.formatToParts(date).find((part)=>part.type === 'dayPeriod').value;
    }, [
        amPmFormatter
    ]);
    // Get a list of formatted era names so users can type the first character to choose one.
    let eraFormatter = ($896ba0a80a8f4d36$export$85fd5fdf27bacc79)({
        year: 'numeric',
        era: 'narrow',
        timeZone: 'UTC'
    });
    let eras = (useMemo)(()=>{
        if (segment.type !== 'era') return [];
        let date = ($11d87f3f76e88657$export$b4a036af3fc0b032)(new ($35ea8db9cb2ccb90$export$99faa760c7908e4f)(1, 1, 1), state.calendar);
        let eras = state.calendar.getEras().map((era)=>{
            let eraDate = date.set({
                year: 1,
                month: 1,
                day: 1,
                era: era
            }).toDate('UTC');
            let parts = eraFormatter.formatToParts(eraDate);
            let formatted = parts.find((p)=>p.type === 'era').value;
            return {
                era: era,
                formatted: formatted
            };
        });
        // Remove the common prefix from formatted values. This is so that in calendars with eras like
        // ERA0 and ERA1 (e.g. Ethiopic), users can press "0" and "1" to select an era. In other cases,
        // the first letter is used.
        let prefixLength = $32489daedd52963e$var$commonPrefixLength(eras.map((era)=>era.formatted));
        if (prefixLength) for (let era of eras)era.formatted = era.formatted.slice(prefixLength);
        return eras;
    }, [
        eraFormatter,
        state.calendar,
        segment.type
    ]);
    let onInput = (key)=>{
        if (state.isDisabled || state.isReadOnly) return;
        let newValue = enteredKeys.current + key;
        switch(segment.type){
            case 'dayPeriod':
                if (startsWith(am, key)) state.setSegment('dayPeriod', 0);
                else if (startsWith(pm, key)) state.setSegment('dayPeriod', 12);
                else break;
                focusManager.focusNext();
                break;
            case 'era':
                {
                    let matched = eras.find((e)=>startsWith(e.formatted, key));
                    if (matched) {
                        state.setSegment('era', matched.era);
                        focusManager.focusNext();
                    }
                    break;
                }
            case 'day':
            case 'hour':
            case 'minute':
            case 'second':
            case 'month':
            case 'year':
                {
                    if (!parser.isValidPartialNumber(newValue)) return;
                    let numberValue = parser.parse(newValue);
                    let segmentValue = numberValue;
                    let allowsZero = segment.minValue === 0;
                    if (segment.type === 'hour' && state.dateFormatter.resolvedOptions().hour12) {
                        switch(state.dateFormatter.resolvedOptions().hourCycle){
                            case 'h11':
                                if (numberValue > 11) segmentValue = parser.parse(key);
                                break;
                            case 'h12':
                                allowsZero = false;
                                if (numberValue > 12) segmentValue = parser.parse(key);
                                break;
                        }
                        if (segment.value !== undefined && segment.value >= 12 && numberValue > 1) numberValue += 12;
                    } else if (segment.maxValue !== undefined && numberValue > segment.maxValue) segmentValue = parser.parse(key);
                    if (isNaN(numberValue)) return;
                    let shouldSetValue = segmentValue !== 0 || allowsZero;
                    if (shouldSetValue) state.setSegment(segment.type, segmentValue);
                    if (segment.maxValue !== undefined && (Number(numberValue + '0') > segment.maxValue || newValue.length >= String(segment.maxValue).length)) {
                        enteredKeys.current = '';
                        if (shouldSetValue) focusManager.focusNext();
                    } else enteredKeys.current = newValue;
                    break;
                }
        }
    };
    let onFocus = ()=>{
        enteredKeys.current = '';
        if (ref.current) ($2f04cbc44ee30ce0$export$c826860796309d1b)(ref.current, {
            containingElement: ($62d8ded9296f3872$export$cfa2225e87938781)(ref.current)
        });
        // Collapse selection to start or Chrome won't fire input events.
        let selection = window.getSelection();
        selection === null || selection === void 0 ? void 0 : selection.collapse(ref.current);
    };
    let documentRef = (useRef)(typeof document !== 'undefined' ? document : null);
    ($e9faafb641e167db$export$90fc3a17d93f704c)(documentRef, 'selectionchange', ()=>{
        var _ref_current;
        // Enforce that the selection is collapsed when inside a date segment.
        // Otherwise, when tapping on a segment in Android Chrome and then entering text,
        // composition events will be fired that break the DOM structure and crash the page.
        let selection = window.getSelection();
        if ((selection === null || selection === void 0 ? void 0 : selection.anchorNode) && ((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(selection === null || selection === void 0 ? void 0 : selection.anchorNode))) selection.collapse(ref.current);
    });
    let compositionRef = (useRef)('');
    ($e9faafb641e167db$export$90fc3a17d93f704c)(ref, 'beforeinput', (e)=>{
        if (!ref.current) return;
        e.preventDefault();
        switch(e.inputType){
            case 'deleteContentBackward':
            case 'deleteContentForward':
                if (parser.isValidPartialNumber(segment.text) && !state.isReadOnly) backspace();
                break;
            case 'insertCompositionText':
                // insertCompositionText cannot be canceled.
                // Record the current state of the element so we can restore it in the `input` event below.
                compositionRef.current = ref.current.textContent;
                // Safari gets stuck in a composition state unless we also assign to the value here.
                // eslint-disable-next-line no-self-assign
                ref.current.textContent = ref.current.textContent;
                break;
            default:
                if (e.data != null) onInput(e.data);
                break;
        }
    });
    ($e9faafb641e167db$export$90fc3a17d93f704c)(ref, 'input', (e)=>{
        let { inputType: inputType, data: data } = e;
        switch(inputType){
            case 'insertCompositionText':
                // Reset the DOM to how it was in the beforeinput event.
                if (ref.current) ref.current.textContent = compositionRef.current;
                // Android sometimes fires key presses of letters as composition events. Need to handle am/pm keys here too.
                // Can also happen e.g. with Pinyin keyboard on iOS.
                if (data != null && (startsWith(am, data) || startsWith(pm, data))) onInput(data);
                break;
        }
    });
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let element = ref.current;
        return ()=>{
            // If the focused segment is removed, focus the previous one, or the next one if there was no previous one.
            if (document.activeElement === element) {
                let prev = focusManager.focusPrevious();
                if (!prev) focusManager.focusNext();
            }
        };
    }, [
        ref,
        focusManager
    ]);
    // spinbuttons cannot be focused with VoiceOver on iOS.
    let touchPropOverrides = ($c87311424ea30a05$export$fedb369cb70207f1)() || segment.type === 'timeZoneName' ? {
        role: 'textbox',
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuetext': null,
        'aria-valuenow': null
    } : {};
    // Only apply aria-describedby to the first segment, unless the field is invalid. This avoids it being
    // read every time the user navigates to a new segment.
    let firstSegment = (useMemo)(()=>state.segments.find((s)=>s.isEditable), [
        state.segments
    ]);
    if (segment !== firstSegment && !state.isInvalid) ariaDescribedBy = undefined;
    let id = ($bdb11010cef70236$export$f680877a34711e37)();
    let isEditable = !state.isDisabled && !state.isReadOnly && segment.isEditable;
    // Prepend the label passed from the field to each segment name.
    // This is needed because VoiceOver on iOS does not announce groups.
    let name = segment.type === 'literal' ? '' : displayNames.of(segment.type);
    let labelProps = ($313b98861ee5dd6c$export$d6875122194c7b44)({
        'aria-label': `${name}${ariaLabel ? `, ${ariaLabel}` : ''}${ariaLabelledBy ? ', ' : ''}`,
        'aria-labelledby': ariaLabelledBy
    });
    // Literal segments should not be visible to screen readers. We don't really need any of the above,
    // but the rules of hooks mean hooks cannot be conditional so we have to put this condition here.
    if (segment.type === 'literal') return {
        segmentProps: {
            'aria-hidden': true
        }
    };
    let segmentStyle = {
        caretColor: 'transparent'
    };
    if (direction === 'rtl') {
        // While the bidirectional algorithm seems to work properly on inline elements with actual values, it returns different results for placeholder strings. 
        // To ensure placeholder render in correct format, we apply the CSS equivalent of LRE (left-to-right embedding). See https://www.unicode.org/reports/tr9/#Explicit_Directional_Embeddings.
        // However, we apply this to both placeholders and date segments with an actual value because the date segments will shift around when deleting otherwise. 
        segmentStyle.unicodeBidi = 'embed';
        let format = options[segment.type];
        if (format === 'numeric' || format === '2-digit') segmentStyle.direction = 'ltr';
    }
    return {
        segmentProps: ($3ef42575df84b30b$export$9d1611c77c2fe928)(spinButtonProps, labelProps, {
            id: id,
            ...touchPropOverrides,
            'aria-invalid': state.isInvalid ? 'true' : undefined,
            'aria-describedby': ariaDescribedBy,
            'aria-readonly': state.isReadOnly || !segment.isEditable ? 'true' : undefined,
            'data-placeholder': segment.isPlaceholder || undefined,
            contentEditable: isEditable,
            suppressContentEditableWarning: isEditable,
            spellCheck: isEditable ? 'false' : undefined,
            autoCorrect: isEditable ? 'off' : undefined,
            // Capitalization was changed in React 17...
            [parseInt(($dbSRa$react).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: isEditable ? 'next' : undefined,
            inputMode: state.isDisabled || segment.type === 'dayPeriod' || segment.type === 'era' || !isEditable ? undefined : 'numeric',
            tabIndex: state.isDisabled ? undefined : 0,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            style: segmentStyle,
            // Prevent pointer events from reaching useDatePickerGroup, and allow native browser behavior to focus the segment.
            onPointerDown (e) {
                e.stopPropagation();
            },
            onMouseDown (e) {
                e.stopPropagation();
            }
        })
    };
}
function $32489daedd52963e$var$commonPrefixLength(strings) {
    // Sort the strings, and compare the characters in the first and last to find the common prefix.
    strings.sort();
    let first = strings[0];
    let last = strings[strings.length - 1];
    for(let i = 0; i < first.length; i++){
        if (first[i] !== last[i]) return i;
    }
    return 0;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
    let { role: role = 'dialog' } = props;
    let titleId = ($bdb11010cef70236$export$b4cc09c592e8fdb8)();
    titleId = props['aria-label'] ? undefined : titleId;
    let isRefocusing = (useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (useEffect)(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            ($3ad3f6e1647bc98d$export$80f3e147d781571c)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    isRefocusing.current = true;
                    if (ref.current) {
                        ref.current.blur();
                        ($3ad3f6e1647bc98d$export$80f3e147d781571c)(ref.current);
                    }
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    ($337b884510726a0d$export$14c98a7594375490)();
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] || titleId,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        }
    };
}

const Button = ({ children, onClick, className, type = "button", disabled = false, }) => {
    const ref = useRef(null);
    const { buttonProps } = $701a24aa0da5b062$export$ea18c227d4417cc3({
        onPress: onClick,
        isDisabled: disabled,
        type,
    }, ref);
    return (jsxRuntimeExports.jsx("button", Object.assign({}, buttonProps, { ref: ref, className: clsx("px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50", className), children: children })));
};

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
(createContext)(null);
(createContext)(null);
(createContext)(null);
(createContext)(null);
(createContext)(null);
const $4e85f108e88277b8$export$d688439359537581 = (createContext)({});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $64fa3d84918910a7$export$c62b8e45d58ddad9 = Symbol('default');
function $64fa3d84918910a7$export$2881499e37b75b9a({ values: values, children: children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ ($dbSRa$react).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $64fa3d84918910a7$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values } = props;
    return (useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName: defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren: defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName !== null && computedClassName !== void 0 ? computedClassName : defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren !== null && computedChildren !== void 0 ? computedChildren : defaultChildren,
            'data-rac': ''
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values
    ]);
}
function $64fa3d84918910a7$export$fabf2dc03a41866e(context, slot) {
    let ctx = (useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let slotKey = slot || $64fa3d84918910a7$export$c62b8e45d58ddad9;
        if (!ctx.slots[slotKey]) {
            let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
            let errorMessage = slot ? `Invalid slot "${slot}".` : 'A slot prop is required.';
            throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
        }
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function $64fa3d84918910a7$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $64fa3d84918910a7$export$fabf2dc03a41866e(context, props.slot) || {};
    // @ts-ignore - TS says "Type 'unique symbol' cannot be used as an index type." but not sure why.
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = ($df56164dff5785e2$export$4338b53315abf666)((useMemo)(()=>($5dc95899b306f630$export$c9058316764c140e)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = ($3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    // mergeProps does not merge `style`. Adding this there might be a breaking change.
    if ('style' in contextProps && contextProps.style && 'style' in props && props.style) {
        if (typeof contextProps.style === 'function' || typeof props.style === 'function') // @ts-ignore
        mergedProps.style = (renderProps)=>{
            let contextStyle = typeof contextProps.style === 'function' ? contextProps.style(renderProps) : contextProps.style;
            let defaultStyle = {
                ...renderProps.defaultStyle,
                ...contextStyle
            };
            let style = typeof props.style === 'function' ? props.style({
                ...renderProps,
                defaultStyle: defaultStyle
            }) : props.style;
            return {
                ...defaultStyle,
                ...style
            };
        };
        else // @ts-ignore
        mergedProps.style = {
            ...contextProps.style,
            ...props.style
        };
    }
    return [
        mergedProps,
        mergedRef
    ];
}
function $64fa3d84918910a7$export$9d4c57ee4c6ffdd8(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (useState)(initialState);
    let hasRun = (useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $64fa3d84918910a7$export$ef03459518577ad4(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// React doesn't understand the <template> element, which doesn't have children like a normal element.
// It will throw an error during hydration when it expects the firstChild to contain content rendered
// on the server, when in reality, the browser will have placed this inside the `content` document fragment.
// This monkey patches the firstChild property for our special hidden template elements to work around this error.
// See https://github.com/facebook/react/issues/19932
if (typeof HTMLTemplateElement !== 'undefined') {
    const getFirstChild = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild').get;
    Object.defineProperty(HTMLTemplateElement.prototype, 'firstChild', {
        configurable: true,
        enumerable: true,
        get: function() {
            if (this.dataset.reactAriaHidden) return this.content.firstChild;
            else return getFirstChild.call(this);
        }
    });
}
const $f39a9eba43920ace$export$94b6d0abf7d33e8c = /*#__PURE__*/ (createContext)(false);
function $f39a9eba43920ace$export$86427a43e3e48ebb(fn) {
    let Wrapper = (props, ref)=>{
        let isHidden = (useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
        if (isHidden) return null;
        return fn(props, ref);
    };
    // @ts-ignore - for react dev tools
    Wrapper.displayName = fn.displayName || fn.name;
    return (forwardRef)(Wrapper);
}
function $f39a9eba43920ace$export$b5d7cc18bb8d2b59() {
    return (useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (createContext)({});
let $3985021b0ad6602f$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ ($f39a9eba43920ace$export$86427a43e3e48ebb)(function Input(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = ($6179b936705e76d3$export$ae780daf29e6d456)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = ($f7dceffc5ad7768b$export$4e328f61c538687f)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ ($dbSRa$react).createElement("input", {
        ...($3ef42575df84b30b$export$9d1611c77c2fe928)($3985021b0ad6602f$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $01b77f81d0f07f68$export$75b6ee27786ba447 = /*#__PURE__*/ (createContext)({});
const $01b77f81d0f07f68$export$b04be29aa201d4f5 = /*#__PURE__*/ ($f39a9eba43920ace$export$86427a43e3e48ebb)(function Label(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $01b77f81d0f07f68$export$75b6ee27786ba447);
    let { elementType: ElementType = 'label', ...labelProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ ($dbSRa$react).createElement(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});

const $d2b4bc8c273e7be6$export$24d547caef80ccd1 = /*#__PURE__*/ (createContext)({});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (createContext)({});

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $ee014567cb39d3f0$export$ff05c3ac10437e03 = /*#__PURE__*/ (createContext)(null);

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $f62d864046160412$export$eac50920cf2fd59a(date, minValue, maxValue) {
    return minValue != null && date.compare(minValue) < 0 || maxValue != null && date.compare(maxValue) > 0;
}
function $f62d864046160412$export$f4a51ff076cc9a09(date, duration, locale, minValue, maxValue) {
    let halfDuration = {};
    for(let key in duration){
        halfDuration[key] = Math.floor(duration[key] / 2);
        if (halfDuration[key] > 0 && duration[key] % 2 === 0) halfDuration[key]--;
    }
    let aligned = $f62d864046160412$export$144a00ba6044eb9(date, duration, locale).subtract(halfDuration);
    return $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $f62d864046160412$export$144a00ba6044eb9(date, duration, locale, minValue, maxValue) {
    // align to the start of the largest unit
    let aligned = date;
    if (duration.years) aligned = ($14e0f24ef4ac5c92$export$f91e89d3d0406102)(date);
    else if (duration.months) aligned = ($14e0f24ef4ac5c92$export$a5a3b454ada2268e)(date);
    else if (duration.weeks) aligned = ($14e0f24ef4ac5c92$export$42c81a444fbfb5d4)(date, locale);
    return $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $f62d864046160412$export$530edbfc915b2b04(date, duration, locale, minValue, maxValue) {
    let d = {
        ...duration
    };
    // subtract 1 from the smallest unit
    if (d.days) d.days--;
    else if (d.weeks) d.weeks--;
    else if (d.months) d.months--;
    else if (d.years) d.years--;
    let aligned = $f62d864046160412$export$144a00ba6044eb9(date, duration, locale).subtract(d);
    return $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue);
}
function $f62d864046160412$export$5bb865b12696a77d(date, aligned, duration, locale, minValue, maxValue) {
    if (minValue && date.compare(minValue) >= 0) {
        let newDate = ($14e0f24ef4ac5c92$export$a75f2bff57811055)(aligned, $f62d864046160412$export$144a00ba6044eb9(($11d87f3f76e88657$export$93522d1a439f3617)(minValue), duration, locale));
        if (newDate) aligned = newDate;
    }
    if (maxValue && date.compare(maxValue) <= 0) {
        let newDate = ($14e0f24ef4ac5c92$export$5c333a116e949cdd)(aligned, $f62d864046160412$export$530edbfc915b2b04(($11d87f3f76e88657$export$93522d1a439f3617)(maxValue), duration, locale));
        if (newDate) aligned = newDate;
    }
    return aligned;
}
function $f62d864046160412$export$4f5203c0d889109e(date, minValue, maxValue) {
    if (minValue) {
        let newDate = ($14e0f24ef4ac5c92$export$a75f2bff57811055)(date, ($11d87f3f76e88657$export$93522d1a439f3617)(minValue));
        if (newDate) date = newDate;
    }
    if (maxValue) {
        let newDate = ($14e0f24ef4ac5c92$export$5c333a116e949cdd)(date, ($11d87f3f76e88657$export$93522d1a439f3617)(maxValue));
        if (newDate) date = newDate;
    }
    return date;
}
function $f62d864046160412$export$a1d3911297b952d7(date, minValue, isDateUnavailable) {
    if (!isDateUnavailable) return date;
    while(date.compare(minValue) >= 0 && isDateUnavailable(date))date = date.subtract({
        days: 1
    });
    if (date.compare(minValue) >= 0) return date;
    return null;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $131cf43a05231e1e$export$6d095e787d2b5e1f(props) {
    let defaultFormatter = (useMemo)(()=>new ($fb18d541ea1ad717$export$ad991b66133851cf)(props.locale), [
        props.locale
    ]);
    let resolvedOptions = (useMemo)(()=>defaultFormatter.resolvedOptions(), [
        defaultFormatter
    ]);
    let { locale: locale, createCalendar: createCalendar, visibleDuration: visibleDuration = {
        months: 1
    }, minValue: minValue, maxValue: maxValue, selectionAlignment: selectionAlignment, isDateUnavailable: isDateUnavailable, pageBehavior: pageBehavior = 'visible', firstDayOfWeek: firstDayOfWeek } = props;
    let calendar = (useMemo)(()=>createCalendar(resolvedOptions.calendar), [
        createCalendar,
        resolvedOptions.calendar
    ]);
    var _props_defaultValue;
    let [value, setControlledValue] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let calendarDateValue = (useMemo)(()=>value ? ($11d87f3f76e88657$export$b4a036af3fc0b032)(($11d87f3f76e88657$export$93522d1a439f3617)(value), calendar) : null, [
        value,
        calendar
    ]);
    let timeZone = (useMemo)(()=>value && 'timeZone' in value ? value.timeZone : resolvedOptions.timeZone, [
        value,
        resolvedOptions.timeZone
    ]);
    let focusedCalendarDate = (useMemo)(()=>props.focusedValue ? ($f62d864046160412$export$4f5203c0d889109e)(($11d87f3f76e88657$export$b4a036af3fc0b032)(($11d87f3f76e88657$export$93522d1a439f3617)(props.focusedValue), calendar), minValue, maxValue) : undefined, [
        props.focusedValue,
        calendar,
        minValue,
        maxValue
    ]);
    let defaultFocusedCalendarDate = (useMemo)(()=>($f62d864046160412$export$4f5203c0d889109e)(props.defaultFocusedValue ? ($11d87f3f76e88657$export$b4a036af3fc0b032)(($11d87f3f76e88657$export$93522d1a439f3617)(props.defaultFocusedValue), calendar) : calendarDateValue || ($11d87f3f76e88657$export$b4a036af3fc0b032)(($14e0f24ef4ac5c92$export$d0bdf45af03a6ea3)(timeZone), calendar), minValue, maxValue), [
        props.defaultFocusedValue,
        calendarDateValue,
        timeZone,
        calendar,
        minValue,
        maxValue
    ]);
    let [focusedDate, setFocusedDate] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(focusedCalendarDate, defaultFocusedCalendarDate, props.onFocusChange);
    let [startDate, setStartDate] = (useState)(()=>{
        switch(selectionAlignment){
            case 'start':
                return ($f62d864046160412$export$144a00ba6044eb9)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'end':
                return ($f62d864046160412$export$530edbfc915b2b04)(focusedDate, visibleDuration, locale, minValue, maxValue);
            case 'center':
            default:
                return ($f62d864046160412$export$f4a51ff076cc9a09)(focusedDate, visibleDuration, locale, minValue, maxValue);
        }
    });
    let [isFocused, setFocused] = (useState)(props.autoFocus || false);
    let endDate = (useMemo)(()=>{
        let duration = {
            ...visibleDuration
        };
        if (duration.days) duration.days--;
        else duration.days = -1;
        return startDate.add(duration);
    }, [
        startDate,
        visibleDuration
    ]);
    // Reset focused date and visible range when calendar changes.
    let [lastCalendar, setLastCalendar] = (useState)(calendar);
    if (!($14e0f24ef4ac5c92$export$dbc69fd56b53d5e)(calendar, lastCalendar)) {
        let newFocusedDate = ($11d87f3f76e88657$export$b4a036af3fc0b032)(focusedDate, calendar);
        setStartDate(($f62d864046160412$export$f4a51ff076cc9a09)(newFocusedDate, visibleDuration, locale, minValue, maxValue));
        setFocusedDate(newFocusedDate);
        setLastCalendar(calendar);
    }
    if (($f62d864046160412$export$eac50920cf2fd59a)(focusedDate, minValue, maxValue)) // If the focused date was moved to an invalid value, it can't be focused, so constrain it.
    setFocusedDate(($f62d864046160412$export$4f5203c0d889109e)(focusedDate, minValue, maxValue));
    else if (focusedDate.compare(startDate) < 0) setStartDate(($f62d864046160412$export$530edbfc915b2b04)(focusedDate, visibleDuration, locale, minValue, maxValue));
    else if (focusedDate.compare(endDate) > 0) setStartDate(($f62d864046160412$export$144a00ba6044eb9)(focusedDate, visibleDuration, locale, minValue, maxValue));
    // Sets focus to a specific cell date
    function focusCell(date) {
        date = ($f62d864046160412$export$4f5203c0d889109e)(date, minValue, maxValue);
        setFocusedDate(date);
    }
    function setValue(newValue) {
        if (!props.isDisabled && !props.isReadOnly) {
            let localValue = newValue;
            if (localValue === null) {
                setControlledValue(null);
                return;
            }
            localValue = ($f62d864046160412$export$4f5203c0d889109e)(localValue, minValue, maxValue);
            localValue = ($f62d864046160412$export$a1d3911297b952d7)(localValue, startDate, isDateUnavailable);
            if (!localValue) return;
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            localValue = ($11d87f3f76e88657$export$b4a036af3fc0b032)(localValue, (value === null || value === void 0 ? void 0 : value.calendar) || new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
            // Preserve time if the input value had one.
            if (value && 'hour' in value) setControlledValue(value.set(localValue));
            else setControlledValue(localValue);
        }
    }
    let isUnavailable = (useMemo)(()=>{
        if (!calendarDateValue) return false;
        if (isDateUnavailable && isDateUnavailable(calendarDateValue)) return true;
        return ($f62d864046160412$export$eac50920cf2fd59a)(calendarDateValue, minValue, maxValue);
    }, [
        calendarDateValue,
        isDateUnavailable,
        minValue,
        maxValue
    ]);
    let isValueInvalid = props.isInvalid || props.validationState === 'invalid' || isUnavailable;
    let validationState = isValueInvalid ? 'invalid' : null;
    let pageDuration = (useMemo)(()=>{
        if (pageBehavior === 'visible') return visibleDuration;
        return $131cf43a05231e1e$var$unitDuration(visibleDuration);
    }, [
        pageBehavior,
        visibleDuration
    ]);
    var _props_isDisabled, _props_isReadOnly;
    return {
        isDisabled: (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : false,
        isReadOnly: (_props_isReadOnly = props.isReadOnly) !== null && _props_isReadOnly !== void 0 ? _props_isReadOnly : false,
        value: calendarDateValue,
        setValue: setValue,
        visibleRange: {
            start: startDate,
            end: endDate
        },
        minValue: minValue,
        maxValue: maxValue,
        focusedDate: focusedDate,
        timeZone: timeZone,
        validationState: validationState,
        isValueInvalid: isValueInvalid,
        setFocusedDate (date) {
            focusCell(date);
            setFocused(true);
        },
        focusNextDay () {
            focusCell(focusedDate.add({
                days: 1
            }));
        },
        focusPreviousDay () {
            focusCell(focusedDate.subtract({
                days: 1
            }));
        },
        focusNextRow () {
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                weeks: 1
            }));
        },
        focusPreviousRow () {
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                weeks: 1
            }));
        },
        focusNextPage () {
            let start = startDate.add(pageDuration);
            setFocusedDate(($f62d864046160412$export$4f5203c0d889109e)(focusedDate.add(pageDuration), minValue, maxValue));
            setStartDate(($f62d864046160412$export$144a00ba6044eb9)(($f62d864046160412$export$5bb865b12696a77d)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusPreviousPage () {
            let start = startDate.subtract(pageDuration);
            setFocusedDate(($f62d864046160412$export$4f5203c0d889109e)(focusedDate.subtract(pageDuration), minValue, maxValue));
            setStartDate(($f62d864046160412$export$144a00ba6044eb9)(($f62d864046160412$export$5bb865b12696a77d)(focusedDate, start, pageDuration, locale, minValue, maxValue), pageDuration, locale));
        },
        focusSectionStart () {
            if (visibleDuration.days) focusCell(startDate);
            else if (visibleDuration.weeks) focusCell(($14e0f24ef4ac5c92$export$42c81a444fbfb5d4)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell(($14e0f24ef4ac5c92$export$a5a3b454ada2268e)(focusedDate));
        },
        focusSectionEnd () {
            if (visibleDuration.days) focusCell(endDate);
            else if (visibleDuration.weeks) focusCell(($14e0f24ef4ac5c92$export$ef8b6d9133084f4e)(focusedDate, locale));
            else if (visibleDuration.months || visibleDuration.years) focusCell(($14e0f24ef4ac5c92$export$a2258d9c4118825c)(focusedDate));
        },
        focusNextSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.add($131cf43a05231e1e$var$unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusNextPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.add({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.add({
                years: 1
            }));
        },
        focusPreviousSection (larger) {
            if (!larger && !visibleDuration.days) {
                focusCell(focusedDate.subtract($131cf43a05231e1e$var$unitDuration(visibleDuration)));
                return;
            }
            if (visibleDuration.days) this.focusPreviousPage();
            else if (visibleDuration.weeks) focusCell(focusedDate.subtract({
                months: 1
            }));
            else if (visibleDuration.months || visibleDuration.years) focusCell(focusedDate.subtract({
                years: 1
            }));
        },
        selectFocusedDate () {
            if (!(isDateUnavailable && isDateUnavailable(focusedDate))) setValue(focusedDate);
        },
        selectDate (date) {
            setValue(date);
        },
        isFocused: isFocused,
        setFocused: setFocused,
        isInvalid (date) {
            return ($f62d864046160412$export$eac50920cf2fd59a)(date, minValue, maxValue);
        },
        isSelected (date) {
            return calendarDateValue != null && ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, calendarDateValue) && !this.isCellDisabled(date) && !this.isCellUnavailable(date);
        },
        isCellFocused (date) {
            return isFocused && focusedDate && ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, focusedDate);
        },
        isCellDisabled (date) {
            return props.isDisabled || date.compare(startDate) < 0 || date.compare(endDate) > 0 || this.isInvalid(date);
        },
        isCellUnavailable (date) {
            return props.isDateUnavailable ? props.isDateUnavailable(date) : false;
        },
        isPreviousVisibleRangeInvalid () {
            let prev = startDate.subtract({
                days: 1
            });
            return ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(prev, startDate) || this.isInvalid(prev);
        },
        isNextVisibleRangeInvalid () {
            // Adding may return the same date if we reached the end of time
            // according to the calendar system (e.g. 9999-12-31).
            let next = endDate.add({
                days: 1
            });
            return ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(next, endDate) || this.isInvalid(next);
        },
        getDatesInWeek (weekIndex, from = startDate) {
            let date = from.add({
                weeks: weekIndex
            });
            let dates = [];
            date = ($14e0f24ef4ac5c92$export$42c81a444fbfb5d4)(date, locale, firstDayOfWeek);
            // startOfWeek will clamp dates within the calendar system's valid range, which may
            // start in the middle of a week. In this case, add null placeholders.
            let dayOfWeek = ($14e0f24ef4ac5c92$export$2061056d06d7cdf7)(date, locale, firstDayOfWeek);
            for(let i = 0; i < dayOfWeek; i++)dates.push(null);
            while(dates.length < 7){
                dates.push(date);
                let nextDate = date.add({
                    days: 1
                });
                if (($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, nextDate)) break;
                date = nextDate;
            }
            // Add null placeholders if at the end of the calendar system.
            while(dates.length < 7)dates.push(null);
            return dates;
        }
    };
}
function $131cf43a05231e1e$var$unitDuration(duration) {
    let unit = {
        ...duration
    };
    for(let key in duration)unit[key] = 1;
    return unit;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    const open = (useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen: isOpen,
        setOpen: setOpen,
        open: open,
        close: close,
        toggle: toggle
    };
}

var $b3427c06585c22a0$exports = {};
$b3427c06585c22a0$exports = {
    "rangeOverflow": (args)=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${args.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
    "rangeReversed": `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621} \u{64A}\u{62C}\u{628} \u{623}\u{646} \u{64A}\u{643}\u{648}\u{646} \u{642}\u{628}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}.`,
    "rangeUnderflow": (args)=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${args.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
    "unavailableDate": `\u{627}\u{644}\u{628}\u{64A}\u{627}\u{646}\u{627}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}\u{629} \u{63A}\u{64A}\u{631} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`
};

var $d282528f459122b9$exports = {};
$d282528f459122b9$exports = {
    "rangeOverflow": (args)=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${args.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
    "rangeReversed": `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} \u{43F}\u{440}\u{435}\u{434}\u{438} \u{43A}\u{440}\u{430}\u{439}\u{43D}\u{430}\u{442}\u{430}.`,
    "rangeUnderflow": (args)=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${args.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
    "unavailableDate": `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435} \u{435} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430}.`
};

var $2d5eecd634a9ca45$exports = {};
$2d5eecd634a9ca45$exports = {
    "rangeOverflow": (args)=>`Hodnota mus\xed b\xfdt ${args.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
    "rangeReversed": `Datum zah\xe1jen\xed mus\xed p\u{159}edch\xe1zet datu ukon\u{10D}en\xed.`,
    "rangeUnderflow": (args)=>`Hodnota mus\xed b\xfdt ${args.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
    "unavailableDate": `Vybran\xe9 datum nen\xed k dispozici.`
};

var $c8e2288226c24a67$exports = {};
$c8e2288226c24a67$exports = {
    "rangeOverflow": (args)=>`V\xe6rdien skal v\xe6re ${args.maxValue} eller tidligere.`,
    "rangeReversed": `Startdatoen skal v\xe6re f\xf8r slutdatoen.`,
    "rangeUnderflow": (args)=>`V\xe6rdien skal v\xe6re ${args.minValue} eller nyere.`,
    "unavailableDate": `Den valgte dato er ikke tilg\xe6ngelig.`
};

var $6f5745e389c346d7$exports = {};
$6f5745e389c346d7$exports = {
    "rangeOverflow": (args)=>`Der Wert muss ${args.maxValue} oder fr\xfcher sein.`,
    "rangeReversed": `Das Anfangsdatum muss vor dem Enddatum liegen.`,
    "rangeUnderflow": (args)=>`Der Wert muss ${args.minValue} oder sp\xe4ter sein.`,
    "unavailableDate": `Das ausgew\xe4hlte Datum ist nicht verf\xfcgbar.`
};

var $8c882ccf4300d1da$exports = {};
$8c882ccf4300d1da$exports = {
    "rangeOverflow": (args)=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${args.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    "rangeReversed": `\u{397} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3C0}\u{3C1}\u{3B9}\u{3BD} \u{3B1}\u{3C0}\u{3CC} \u{3C4}\u{3B7}\u{3BD} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}.`,
    "rangeUnderflow": (args)=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${args.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
    "unavailableDate": `\u{397} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3B4}\u{3B5}\u{3BD} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7}.`
};

var $22195056771860be$exports = {};
$22195056771860be$exports = {
    "rangeUnderflow": (args)=>`Value must be ${args.minValue} or later.`,
    "rangeOverflow": (args)=>`Value must be ${args.maxValue} or earlier.`,
    "rangeReversed": `Start date must be before end date.`,
    "unavailableDate": `Selected date unavailable.`
};

var $cedfa43b4e2a5906$exports = {};
$cedfa43b4e2a5906$exports = {
    "rangeOverflow": (args)=>`El valor debe ser ${args.maxValue} o anterior.`,
    "rangeReversed": `La fecha de inicio debe ser anterior a la fecha de finalizaci\xf3n.`,
    "rangeUnderflow": (args)=>`El valor debe ser ${args.minValue} o posterior.`,
    "unavailableDate": `Fecha seleccionada no disponible.`
};

var $eeeaa8daee3601c7$exports = {};
$eeeaa8daee3601c7$exports = {
    "rangeOverflow": (args)=>`V\xe4\xe4rtus peab olema ${args.maxValue} v\xf5i varasem.`,
    "rangeReversed": `Alguskuup\xe4ev peab olema enne l\xf5ppkuup\xe4eva.`,
    "rangeUnderflow": (args)=>`V\xe4\xe4rtus peab olema ${args.minValue} v\xf5i hilisem.`,
    "unavailableDate": `Valitud kuup\xe4ev pole saadaval.`
};

var $35e0614a49b3bb40$exports = {};
$35e0614a49b3bb40$exports = {
    "rangeOverflow": (args)=>`Arvon on oltava ${args.maxValue} tai sit\xe4 aikaisempi.`,
    "rangeReversed": `Aloitusp\xe4iv\xe4n on oltava ennen lopetusp\xe4iv\xe4\xe4.`,
    "rangeUnderflow": (args)=>`Arvon on oltava ${args.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
    "unavailableDate": `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4 ei ole k\xe4ytett\xe4viss\xe4.`
};

var $929bc63f7705a78f$exports = {};
$929bc63f7705a78f$exports = {
    "rangeOverflow": (args)=>`La valeur doit \xeatre ${args.maxValue} ou ant\xe9rieure.`,
    "rangeReversed": `La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.`,
    "rangeUnderflow": (args)=>`La valeur doit \xeatre ${args.minValue} ou ult\xe9rieure.`,
    "unavailableDate": `La date s\xe9lectionn\xe9e n\u{2019}est pas disponible.`
};

var $9a28d073b034d183$exports = {};
$9a28d073b034d183$exports = {
    "rangeOverflow": (args)=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${args.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    "rangeReversed": `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} \u{5DC}\u{5E4}\u{5E0}\u{5D9} \u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E1}\u{5D9}\u{5D5}\u{5DD}.`,
    "rangeUnderflow": (args)=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${args.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
    "unavailableDate": `\u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E0}\u{5D1}\u{5D7}\u{5E8} \u{5D0}\u{5D9}\u{5E0}\u{5D5} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`
};

var $7743e79780ebcca3$exports = {};
$7743e79780ebcca3$exports = {
    "rangeOverflow": (args)=>`Vrijednost mora biti ${args.maxValue} ili ranije.`,
    "rangeReversed": `Datum po\u{10D}etka mora biti prije datuma zavr\u{161}etka.`,
    "rangeUnderflow": (args)=>`Vrijednost mora biti ${args.minValue} ili kasnije.`,
    "unavailableDate": `Odabrani datum nije dostupan.`
};

var $3351817a04898858$exports = {};
$3351817a04898858$exports = {
    "rangeOverflow": (args)=>`Az \xe9rt\xe9knek ${args.maxValue} vagy kor\xe1bbinak kell lennie.`,
    "rangeReversed": `A kezd\u{151} d\xe1tumnak a befejez\u{151} d\xe1tumn\xe1l kor\xe1bbinak kell lennie.`,
    "rangeUnderflow": (args)=>`Az \xe9rt\xe9knek ${args.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
    "unavailableDate": `A kiv\xe1lasztott d\xe1tum nem \xe9rhet\u{151} el.`
};

var $4120bdb1d03484db$exports = {};
$4120bdb1d03484db$exports = {
    "rangeOverflow": (args)=>`Il valore deve essere ${args.maxValue} o precedente.`,
    "rangeReversed": `La data di inizio deve essere antecedente alla data di fine.`,
    "rangeUnderflow": (args)=>`Il valore deve essere ${args.minValue} o successivo.`,
    "unavailableDate": `Data selezionata non disponibile.`
};

var $65e5e1569f34ea4f$exports = {};
$65e5e1569f34ea4f$exports = {
    "rangeOverflow": (args)=>`\u{5024}\u{306F} ${args.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "rangeReversed": `\u{958B}\u{59CB}\u{65E5}\u{306F}\u{7D42}\u{4E86}\u{65E5}\u{3088}\u{308A}\u{524D}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{5024}\u{306F} ${args.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
    "unavailableDate": `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8}\u{306F}\u{4F7F}\u{7528}\u{3067}\u{304D}\u{307E}\u{305B}\u{3093}\u{3002}`
};

var $d34552a7550967e7$exports = {};
$d34552a7550967e7$exports = {
    "rangeOverflow": (args)=>`\u{AC12}\u{C740} ${args.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "rangeReversed": `\u{C2DC}\u{C791}\u{C77C}\u{C740} \u{C885}\u{B8CC}\u{C77C} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "rangeUnderflow": (args)=>`\u{AC12}\u{C740} ${args.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
    "unavailableDate": `\u{C120}\u{D0DD}\u{D55C} \u{B0A0}\u{C9DC}\u{B97C} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}.`
};

var $8f855bffe63f6eca$exports = {};
$8f855bffe63f6eca$exports = {
    "rangeOverflow": (args)=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${args.maxValue} arba ankstesn\u{117}.`,
    "rangeReversed": `Prad\u{17E}ios data turi b\u{16B}ti ankstesn\u{117} nei pabaigos data.`,
    "rangeUnderflow": (args)=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${args.minValue} arba naujesn\u{117}.`,
    "unavailableDate": `Pasirinkta data nepasiekiama.`
};

var $ce40f46d09034645$exports = {};
$ce40f46d09034645$exports = {
    "rangeOverflow": (args)=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${args.maxValue} vai agr\u{101}kai.`,
    "rangeReversed": `S\u{101}kuma datumam ir j\u{101}b\u{16B}t pirms beigu datuma.`,
    "rangeUnderflow": (args)=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${args.minValue} vai v\u{113}l\u{101}kai.`,
    "unavailableDate": `Atlas\u{12B}tais datums nav pieejams.`
};

var $dd1a9a73340c793e$exports = {};
$dd1a9a73340c793e$exports = {
    "rangeOverflow": (args)=>`Verdien m\xe5 v\xe6re ${args.maxValue} eller tidligere.`,
    "rangeReversed": `Startdatoen m\xe5 v\xe6re f\xf8r sluttdatoen.`,
    "rangeUnderflow": (args)=>`Verdien m\xe5 v\xe6re ${args.minValue} eller senere.`,
    "unavailableDate": `Valgt dato utilgjengelig.`
};

var $4ee1fb3f0cbe6f59$exports = {};
$4ee1fb3f0cbe6f59$exports = {
    "rangeOverflow": (args)=>`Waarde moet ${args.maxValue} of eerder zijn.`,
    "rangeReversed": `De startdatum moet voor de einddatum liggen.`,
    "rangeUnderflow": (args)=>`Waarde moet ${args.minValue} of later zijn.`,
    "unavailableDate": `Geselecteerde datum niet beschikbaar.`
};

var $c85829aebb0bc94b$exports = {};
$c85829aebb0bc94b$exports = {
    "rangeOverflow": (args)=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${args.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
    "rangeReversed": `Data rozpocz\u{119}cia musi by\u{107} wcze\u{15B}niejsza ni\u{17C} data zako\u{144}czenia.`,
    "rangeUnderflow": (args)=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${args.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
    "unavailableDate": `Wybrana data jest niedost\u{119}pna.`
};

var $27f5cd2291ca8a02$exports = {};
$27f5cd2291ca8a02$exports = {
    "rangeOverflow": (args)=>`O valor deve ser ${args.maxValue} ou anterior.`,
    "rangeReversed": `A data inicial deve ser anterior \xe0 data final.`,
    "rangeUnderflow": (args)=>`O valor deve ser ${args.minValue} ou posterior.`,
    "unavailableDate": `Data selecionada indispon\xedvel.`
};

var $e046fdccd69bea8e$exports = {};
$e046fdccd69bea8e$exports = {
    "rangeOverflow": (args)=>`O valor tem de ser ${args.maxValue} ou anterior.`,
    "rangeReversed": `A data de in\xedcio deve ser anterior \xe0 data de fim.`,
    "rangeUnderflow": (args)=>`O valor tem de ser ${args.minValue} ou posterior.`,
    "unavailableDate": `Data selecionada indispon\xedvel.`
};

var $fa5f88e804986547$exports = {};
$fa5f88e804986547$exports = {
    "rangeOverflow": (args)=>`Valoarea trebuie s\u{103} fie ${args.maxValue} sau anterioar\u{103}.`,
    "rangeReversed": `Data de \xeenceput trebuie s\u{103} fie anterioar\u{103} datei de sf\xe2r\u{219}it.`,
    "rangeUnderflow": (args)=>`Valoarea trebuie s\u{103} fie ${args.minValue} sau ulterioar\u{103}.`,
    "unavailableDate": `Data selectat\u{103} nu este disponibil\u{103}.`
};

var $28e4714602d1b568$exports = {};
$28e4714602d1b568$exports = {
    "rangeOverflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${args.maxValue}.`,
    "rangeReversed": `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{430} \u{43F}\u{440}\u{435}\u{434}\u{448}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{434}\u{430}\u{442}\u{435} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}.`,
    "rangeUnderflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${args.minValue}.`,
    "unavailableDate": `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
};

var $4e3bc8cf783ad569$exports = {};
$4e3bc8cf783ad569$exports = {
    "rangeOverflow": (args)=>`Hodnota mus\xed by\u{165} ${args.maxValue} alebo skor\u{161}ia.`,
    "rangeReversed": `D\xe1tum za\u{10D}iatku mus\xed by\u{165} skor\u{161}\xed ako d\xe1tum konca.`,
    "rangeUnderflow": (args)=>`Hodnota mus\xed by\u{165} ${args.minValue} alebo neskor\u{161}ia.`,
    "unavailableDate": `Vybrat\xfd d\xe1tum je nedostupn\xfd.`
};

var $bee07513333bdc15$exports = {};
$bee07513333bdc15$exports = {
    "rangeOverflow": (args)=>`Vrednost mora biti ${args.maxValue} ali starej\u{161}a.`,
    "rangeReversed": `Za\u{10D}etni datum mora biti pred kon\u{10D}nim datumom.`,
    "rangeUnderflow": (args)=>`Vrednost mora biti ${args.minValue} ali novej\u{161}a.`,
    "unavailableDate": `Izbrani datum ni na voljo.`
};

var $7ed9c6fad16a15ec$exports = {};
$7ed9c6fad16a15ec$exports = {
    "rangeOverflow": (args)=>`Vrednost mora da bude ${args.maxValue} ili starija.`,
    "rangeReversed": `Datum po\u{10D}etka mora biti pre datuma zavr\u{161}etka.`,
    "rangeUnderflow": (args)=>`Vrednost mora da bude ${args.minValue} ili novija.`,
    "unavailableDate": `Izabrani datum nije dostupan.`
};

var $8bef6d5a236de86c$exports = {};
$8bef6d5a236de86c$exports = {
    "rangeOverflow": (args)=>`V\xe4rdet m\xe5ste vara ${args.maxValue} eller tidigare.`,
    "rangeReversed": `Startdatumet m\xe5ste vara f\xf6re slutdatumet.`,
    "rangeUnderflow": (args)=>`V\xe4rdet m\xe5ste vara ${args.minValue} eller senare.`,
    "unavailableDate": `Det valda datumet \xe4r inte tillg\xe4ngligt.`
};

var $098b9a2d2340cfc5$exports = {};
$098b9a2d2340cfc5$exports = {
    "rangeOverflow": (args)=>`De\u{11F}er, ${args.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
    "rangeReversed": `Ba\u{15F}lang\u{131}\xe7 tarihi biti\u{15F} tarihinden \xf6nce olmal\u{131}d\u{131}r.`,
    "rangeUnderflow": (args)=>`De\u{11F}er, ${args.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
    "unavailableDate": `Se\xe7ilen tarih kullan\u{131}lam\u{131}yor.`
};

var $54a862ea7fad7419$exports = {};
$54a862ea7fad7419$exports = {
    "rangeOverflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${args.maxValue}.`,
    "rangeReversed": `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443} \u{43C}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{434}\u{443}\u{432}\u{430}\u{442}\u{438} \u{434}\u{430}\u{442}\u{456} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}.`,
    "rangeUnderflow": (args)=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${args.minValue}.`,
    "unavailableDate": `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`
};

var $e6cc491d590dfda5$exports = {};
$e6cc491d590dfda5$exports = {
    "rangeOverflow": (args)=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${args.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
    "rangeReversed": `\u{5F00}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{987B}\u{65E9}\u{4E8E}\u{7ED3}\u{675F}\u{65E5}\u{671F}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${args.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
    "unavailableDate": `\u{6240}\u{9009}\u{65E5}\u{671F}\u{4E0D}\u{53EF}\u{7528}\u{3002}`
};

var $9aebf53181a474bd$exports = {};
$9aebf53181a474bd$exports = {
    "rangeOverflow": (args)=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${args.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
    "rangeReversed": `\u{958B}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{9808}\u{5728}\u{7D50}\u{675F}\u{65E5}\u{671F}\u{4E4B}\u{524D}\u{3002}`,
    "rangeUnderflow": (args)=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${args.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
    "unavailableDate": `\u{6240}\u{9078}\u{65E5}\u{671F}\u{7121}\u{6CD5}\u{4F7F}\u{7528}\u{3002}`
};

var $452ac34de8c2444e$exports = {};


































$452ac34de8c2444e$exports = {
    "ar-AE": $b3427c06585c22a0$exports,
    "bg-BG": $d282528f459122b9$exports,
    "cs-CZ": $2d5eecd634a9ca45$exports,
    "da-DK": $c8e2288226c24a67$exports,
    "de-DE": $6f5745e389c346d7$exports,
    "el-GR": $8c882ccf4300d1da$exports,
    "en-US": $22195056771860be$exports,
    "es-ES": $cedfa43b4e2a5906$exports,
    "et-EE": $eeeaa8daee3601c7$exports,
    "fi-FI": $35e0614a49b3bb40$exports,
    "fr-FR": $929bc63f7705a78f$exports,
    "he-IL": $9a28d073b034d183$exports,
    "hr-HR": $7743e79780ebcca3$exports,
    "hu-HU": $3351817a04898858$exports,
    "it-IT": $4120bdb1d03484db$exports,
    "ja-JP": $65e5e1569f34ea4f$exports,
    "ko-KR": $d34552a7550967e7$exports,
    "lt-LT": $8f855bffe63f6eca$exports,
    "lv-LV": $ce40f46d09034645$exports,
    "nb-NO": $dd1a9a73340c793e$exports,
    "nl-NL": $4ee1fb3f0cbe6f59$exports,
    "pl-PL": $c85829aebb0bc94b$exports,
    "pt-BR": $27f5cd2291ca8a02$exports,
    "pt-PT": $e046fdccd69bea8e$exports,
    "ro-RO": $fa5f88e804986547$exports,
    "ru-RU": $28e4714602d1b568$exports,
    "sk-SK": $4e3bc8cf783ad569$exports,
    "sl-SI": $bee07513333bdc15$exports,
    "sr-SP": $7ed9c6fad16a15ec$exports,
    "sv-SE": $8bef6d5a236de86c$exports,
    "tr-TR": $098b9a2d2340cfc5$exports,
    "uk-UA": $54a862ea7fad7419$exports,
    "zh-CN": $e6cc491d590dfda5$exports,
    "zh-TW": $9aebf53181a474bd$exports
};

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $35a22f14a1f04b11$var$dictionary = new ($5b160d28a433310d$export$c17fa47878dc55b6)((($parcel$interopDefault($452ac34de8c2444e$exports))));
function $35a22f14a1f04b11$var$getLocale() {
    // Match browser language setting here, NOT react-aria's I18nProvider, so that we match other browser-provided
    // validation messages, which to not respect our provider's language.
    // @ts-ignore
    return typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
}
function $35a22f14a1f04b11$export$f18627323ab57ac0(value, minValue, maxValue, isDateUnavailable, options) {
    let rangeOverflow = value != null && maxValue != null && value.compare(maxValue) > 0;
    let rangeUnderflow = value != null && minValue != null && value.compare(minValue) < 0;
    let isUnavailable = value != null && (isDateUnavailable === null || isDateUnavailable === void 0 ? void 0 : isDateUnavailable(value)) || false;
    let isInvalid = rangeOverflow || rangeUnderflow || isUnavailable;
    let errors = [];
    if (isInvalid) {
        let locale = $35a22f14a1f04b11$var$getLocale();
        let strings = ($5b160d28a433310d$export$c17fa47878dc55b6).getGlobalDictionaryForPackage('@react-stately/datepicker') || $35a22f14a1f04b11$var$dictionary;
        let formatter = new ($6db58dc88e78b024$export$2f817fcdc4b89ae0)(locale, strings);
        let dateFormatter = new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, $35a22f14a1f04b11$export$7e319ea407e63bc0({}, options));
        let timeZone = dateFormatter.resolvedOptions().timeZone;
        if (rangeUnderflow && minValue != null) errors.push(formatter.format('rangeUnderflow', {
            minValue: dateFormatter.format(minValue.toDate(timeZone))
        }));
        if (rangeOverflow && maxValue != null) errors.push(formatter.format('rangeOverflow', {
            maxValue: dateFormatter.format(maxValue.toDate(timeZone))
        }));
        if (isUnavailable) errors.push(formatter.format('unavailableDate'));
    }
    return {
        isInvalid: isInvalid,
        validationErrors: errors,
        validationDetails: {
            badInput: isUnavailable,
            customError: false,
            patternMismatch: false,
            rangeOverflow: rangeOverflow,
            rangeUnderflow: rangeUnderflow,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valueMissing: false,
            valid: !isInvalid
        }
    };
}
const $35a22f14a1f04b11$var$DEFAULT_FIELD_OPTIONS = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
};
const $35a22f14a1f04b11$var$TWO_DIGIT_FIELD_OPTIONS = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
function $35a22f14a1f04b11$export$7e319ea407e63bc0(fieldOptions, options) {
    let defaultFieldOptions = options.shouldForceLeadingZeros ? $35a22f14a1f04b11$var$TWO_DIGIT_FIELD_OPTIONS : $35a22f14a1f04b11$var$DEFAULT_FIELD_OPTIONS;
    fieldOptions = {
        ...defaultFieldOptions,
        ...fieldOptions
    };
    let granularity = options.granularity || 'minute';
    let keys = Object.keys(fieldOptions);
    var _options_maxGranularity;
    let startIdx = keys.indexOf((_options_maxGranularity = options.maxGranularity) !== null && _options_maxGranularity !== void 0 ? _options_maxGranularity : 'year');
    if (startIdx < 0) startIdx = 0;
    let endIdx = keys.indexOf(granularity);
    if (endIdx < 0) endIdx = 2;
    if (startIdx > endIdx) throw new Error('maxGranularity must be greater than granularity');
    let opts = keys.slice(startIdx, endIdx + 1).reduce((opts, key)=>{
        opts[key] = fieldOptions[key];
        return opts;
    }, {});
    if (options.hourCycle != null) opts.hour12 = options.hourCycle === 12;
    opts.timeZone = options.timeZone || 'UTC';
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    if (hasTime && options.timeZone && !options.hideTimeZone) opts.timeZoneName = 'short';
    if (options.showEra && startIdx === 0) opts.era = 'short';
    return opts;
}
function $35a22f14a1f04b11$export$c5221a78ef73c5e9(placeholderValue) {
    if (placeholderValue && 'hour' in placeholderValue) return placeholderValue;
    return new ($35ea8db9cb2ccb90$export$680ea196effce5f)();
}
function $35a22f14a1f04b11$export$61a490a80c552550(value, calendar) {
    if (value === null) return null;
    if (!value) return undefined;
    return ($11d87f3f76e88657$export$b4a036af3fc0b032)(value, calendar);
}
function $35a22f14a1f04b11$export$66aa2b09de4b1ea5(placeholderValue, granularity, calendar, timeZone) {
    if (placeholderValue) return $35a22f14a1f04b11$export$61a490a80c552550(placeholderValue, calendar);
    let date = ($11d87f3f76e88657$export$b4a036af3fc0b032)(($14e0f24ef4ac5c92$export$461939dd4422153)(timeZone !== null && timeZone !== void 0 ? timeZone : ($14e0f24ef4ac5c92$export$aa8b41735afcabd2)()).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }), calendar);
    if (granularity === 'year' || granularity === 'month' || granularity === 'day') return ($11d87f3f76e88657$export$93522d1a439f3617)(date);
    if (!timeZone) return ($11d87f3f76e88657$export$b21e0b124e224484)(date);
    return date;
}
function $35a22f14a1f04b11$export$2440da353cedad43(v, granularity) {
    // Compute default granularity and time zone from the value. If the value becomes null, keep the last values.
    let defaultTimeZone = v && 'timeZone' in v ? v.timeZone : undefined;
    let defaultGranularity = v && 'minute' in v ? 'minute' : 'day';
    // props.granularity must actually exist in the value if one is provided.
    if (v && granularity && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let [lastValue, setLastValue] = (useState)([
        defaultGranularity,
        defaultTimeZone
    ]);
    // If the granularity or time zone changed, update the last value.
    if (v && (lastValue[0] !== defaultGranularity || lastValue[1] !== defaultTimeZone)) setLastValue([
        defaultGranularity,
        defaultTimeZone
    ]);
    if (!granularity) granularity = v ? defaultGranularity : lastValue[0];
    let timeZone = v ? defaultTimeZone : lastValue[1];
    return [
        granularity,
        timeZone
    ];
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $ab5bf3f618090389$export$87194bb378cc3ac2(props) {
    let overlayState = ($fc909762b330b746$export$61c6a8c84e605fb6)(props);
    let [value, setValue] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, props.defaultValue || null, props.onChange);
    let v = value || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = ($35a22f14a1f04b11$export$2440da353cedad43)(v, props.granularity);
    let dateValue = value != null ? value.toDate(defaultTimeZone !== null && defaultTimeZone !== void 0 ? defaultTimeZone : 'UTC') : null;
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    var _props_shouldCloseOnSelect;
    let shouldCloseOnSelect = (_props_shouldCloseOnSelect = props.shouldCloseOnSelect) !== null && _props_shouldCloseOnSelect !== void 0 ? _props_shouldCloseOnSelect : true;
    let [selectedDate, setSelectedDate] = (useState)(null);
    let [selectedTime, setSelectedTime] = (useState)(null);
    if (value) {
        selectedDate = value;
        if ('hour' in value) selectedTime = value;
    }
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let showEra = (value === null || value === void 0 ? void 0 : value.calendar.identifier) === 'gregory' && value.era === 'BC';
    let formatOpts = (useMemo)(()=>({
            granularity: granularity,
            timeZone: defaultTimeZone,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            showEra: showEra
        }), [
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        props.hideTimeZone,
        showEra
    ]);
    let { minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let builtinValidation = (useMemo)(()=>($35a22f14a1f04b11$export$f18627323ab57ac0)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = ($e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
        ...props,
        value: value,
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    let commitValue = (date, time)=>{
        setValue('timeZone' in time ? time.set(($11d87f3f76e88657$export$93522d1a439f3617)(date)) : ($11d87f3f76e88657$export$b21e0b124e224484)(date, time));
        setSelectedDate(null);
        setSelectedTime(null);
        validation.commitValidation();
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let selectDate = (newValue)=>{
        let shouldClose = typeof shouldCloseOnSelect === 'function' ? shouldCloseOnSelect() : shouldCloseOnSelect;
        if (hasTime) {
            if (selectedTime || shouldClose) commitValue(newValue, selectedTime || ($35a22f14a1f04b11$export$c5221a78ef73c5e9)(props.defaultValue || props.placeholderValue));
            else setSelectedDate(newValue);
        } else {
            setValue(newValue);
            validation.commitValidation();
        }
        if (shouldClose) overlayState.setOpen(false);
    };
    let selectTime = (newValue)=>{
        if (selectedDate && newValue) commitValue(selectedDate, newValue);
        else setSelectedTime(newValue);
    };
    return {
        ...validation,
        value: value,
        setValue: setValue,
        dateValue: selectedDate,
        timeValue: selectedTime,
        setDateValue: selectDate,
        setTimeValue: selectTime,
        granularity: granularity,
        hasTime: hasTime,
        ...overlayState,
        setOpen (isOpen) {
            // Commit the selected date when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time was set and not the date, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !value && selectedDate && hasTime) commitValue(selectedDate, selectedTime || ($35a22f14a1f04b11$export$c5221a78ef73c5e9)(props.defaultValue || props.placeholderValue));
            overlayState.setOpen(isOpen);
        },
        validationState: validationState,
        isInvalid: isValueInvalid,
        formatValue (locale, fieldOptions) {
            if (!dateValue) return '';
            let formatOptions = ($35a22f14a1f04b11$export$7e319ea407e63bc0)(fieldOptions, formatOpts);
            let formatter = new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, formatOptions);
            return formatter.format(dateValue);
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = ($35a22f14a1f04b11$export$7e319ea407e63bc0)({}, newOptions);
            return new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, newFormatOptions);
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// These placeholders are based on the strings used by the <input type="date">
// implementations in Chrome and Firefox. Additional languages are supported
// here than React Spectrum's typical translations.
const $3e3ed55ab2966714$var$placeholders = new ($5b160d28a433310d$export$c17fa47878dc55b6)({
    ach: {
        year: 'mwaka',
        month: 'dwe',
        day: 'nino'
    },
    af: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    am: {
        year: "\u12D3\u12D3\u12D3\u12D3",
        month: "\u121A\u121C",
        day: "\u1240\u1240"
    },
    an: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    ar: {
        year: "\u0633\u0646\u0629",
        month: "\u0634\u0647\u0631",
        day: "\u064A\u0648\u0645"
    },
    ast: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    az: {
        year: 'iiii',
        month: 'aa',
        day: 'gg'
    },
    be: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    bg: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    bn: {
        year: 'yyyy',
        month: "\u09AE\u09BF\u09AE\u09BF",
        day: 'dd'
    },
    br: {
        year: 'bbbb',
        month: 'mm',
        day: 'dd'
    },
    bs: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    ca: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    cak: {
        year: 'jjjj',
        month: 'ii',
        day: "q'q'"
    },
    ckb: {
        year: "\u0633\u0627\u06B5",
        month: "\u0645\u0627\u0646\u06AF",
        day: "\u0695\u06C6\u0698"
    },
    cs: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    cy: {
        year: 'bbbb',
        month: 'mm',
        day: 'dd'
    },
    da: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    de: {
        year: 'jjjj',
        month: 'mm',
        day: 'tt'
    },
    dsb: {
        year: 'llll',
        month: 'mm',
        day: "\u017A\u017A"
    },
    el: {
        year: "\u03B5\u03B5\u03B5\u03B5",
        month: "\u03BC\u03BC",
        day: "\u03B7\u03B7"
    },
    en: {
        year: 'yyyy',
        month: 'mm',
        day: 'dd'
    },
    eo: {
        year: 'jjjj',
        month: 'mm',
        day: 'tt'
    },
    es: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    et: {
        year: 'aaaa',
        month: 'kk',
        day: 'pp'
    },
    eu: {
        year: 'uuuu',
        month: 'hh',
        day: 'ee'
    },
    fa: {
        year: "\u0633\u0627\u0644",
        month: "\u0645\u0627\u0647",
        day: "\u0631\u0648\u0632"
    },
    ff: {
        year: 'hhhh',
        month: 'll',
        day: "\xf1\xf1"
    },
    fi: {
        year: 'vvvv',
        month: 'kk',
        day: 'pp'
    },
    fr: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    fy: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    ga: {
        year: 'bbbb',
        month: 'mm',
        day: 'll'
    },
    gd: {
        year: 'bbbb',
        month: 'mm',
        day: 'll'
    },
    gl: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    he: {
        year: "\u05E9\u05E0\u05D4",
        month: "\u05D7\u05D5\u05D3\u05E9",
        day: "\u05D9\u05D5\u05DD"
    },
    hr: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    hsb: {
        year: 'llll',
        month: 'mm',
        day: 'dd'
    },
    hu: {
        year: "\xe9\xe9\xe9\xe9",
        month: 'hh',
        day: 'nn'
    },
    ia: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    id: {
        year: 'tttt',
        month: 'bb',
        day: 'hh'
    },
    it: {
        year: 'aaaa',
        month: 'mm',
        day: 'gg'
    },
    ja: {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    },
    ka: {
        year: "\u10EC\u10EC\u10EC\u10EC",
        month: "\u10D7\u10D7",
        day: "\u10E0\u10E0"
    },
    kk: {
        year: "\u0436\u0436\u0436\u0436",
        month: "\u0430\u0430",
        day: "\u043A\u043A"
    },
    kn: {
        year: "\u0CB5\u0CB5\u0CB5\u0CB5",
        month: "\u0CAE\u0CBF\u0CAE\u0CC0",
        day: "\u0CA6\u0CBF\u0CA6\u0CBF"
    },
    ko: {
        year: "\uC5F0\uB3C4",
        month: "\uC6D4",
        day: "\uC77C"
    },
    lb: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    lo: {
        year: "\u0E9B\u0E9B\u0E9B\u0E9B",
        month: "\u0E94\u0E94",
        day: "\u0EA7\u0EA7"
    },
    lt: {
        year: 'mmmm',
        month: 'mm',
        day: 'dd'
    },
    lv: {
        year: 'gggg',
        month: 'mm',
        day: 'dd'
    },
    meh: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    ml: {
        year: "\u0D35\u0D7C\u0D37\u0D02",
        month: "\u0D2E\u0D3E\u0D38\u0D02",
        day: "\u0D24\u0D40\u0D2F\u0D24\u0D3F"
    },
    ms: {
        year: 'tttt',
        month: 'mm',
        day: 'hh'
    },
    nl: {
        year: 'jjjj',
        month: 'mm',
        day: 'dd'
    },
    nn: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    no: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    oc: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    pl: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    pt: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    rm: {
        year: 'oooo',
        month: 'mm',
        day: 'dd'
    },
    ro: {
        year: 'aaaa',
        month: 'll',
        day: 'zz'
    },
    ru: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    sc: {
        year: 'aaaa',
        month: 'mm',
        day: 'dd'
    },
    scn: {
        year: 'aaaa',
        month: 'mm',
        day: 'jj'
    },
    sk: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    sl: {
        year: 'llll',
        month: 'mm',
        day: 'dd'
    },
    sr: {
        year: "\u0433\u0433\u0433\u0433",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    sv: {
        year: "\xe5\xe5\xe5\xe5",
        month: 'mm',
        day: 'dd'
    },
    szl: {
        year: 'rrrr',
        month: 'mm',
        day: 'dd'
    },
    tg: {
        year: "\u0441\u0441\u0441\u0441",
        month: "\u043C\u043C",
        day: "\u0440\u0440"
    },
    th: {
        year: "\u0E1B\u0E1B\u0E1B\u0E1B",
        month: "\u0E14\u0E14",
        day: "\u0E27\u0E27"
    },
    tr: {
        year: 'yyyy',
        month: 'aa',
        day: 'gg'
    },
    uk: {
        year: "\u0440\u0440\u0440\u0440",
        month: "\u043C\u043C",
        day: "\u0434\u0434"
    },
    'zh-CN': {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    },
    'zh-TW': {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
    }
}, 'en');
function $3e3ed55ab2966714$export$d3f5c5e0a5023fa0(field, value, locale) {
    // Use the actual placeholder value for the era and day period fields.
    if (field === 'era' || field === 'dayPeriod') return value;
    if (field === 'year' || field === 'month' || field === 'day') return $3e3ed55ab2966714$var$placeholders.getStringForLocale(field, locale);
    // For time fields (e.g. hour, minute, etc.), use two dashes as the placeholder.
    return "\u2013\u2013";
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $3c0fc76039f1c516$var$EDITABLE_SEGMENTS = {
    year: true,
    month: true,
    day: true,
    hour: true,
    minute: true,
    second: true,
    dayPeriod: true,
    era: true
};
const $3c0fc76039f1c516$var$PAGE_STEP = {
    year: 5,
    month: 2,
    day: 7,
    hour: 2,
    minute: 15,
    second: 15
};
const $3c0fc76039f1c516$var$TYPE_MAPPING = {
    // Node seems to convert everything to lowercase...
    dayperiod: 'dayPeriod',
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts#named_years
    relatedYear: 'year',
    yearName: 'literal',
    unknown: 'literal'
};
function $3c0fc76039f1c516$export$60e84778edff6d26(props) {
    let { locale: locale, createCalendar: createCalendar, hideTimeZone: hideTimeZone, isDisabled: isDisabled = false, isReadOnly: isReadOnly = false, isRequired: isRequired = false, minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let v = props.value || props.defaultValue || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = ($35a22f14a1f04b11$export$2440da353cedad43)(v, props.granularity);
    let timeZone = defaultTimeZone || 'UTC';
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let defaultFormatter = (useMemo)(()=>new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale), [
        locale
    ]);
    let calendar = (useMemo)(()=>createCalendar(defaultFormatter.resolvedOptions().calendar), [
        createCalendar,
        defaultFormatter
    ]);
    var _props_defaultValue;
    let [value, setDate] = ($458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let calendarValue = (useMemo)(()=>{
        var _convertValue;
        return (_convertValue = ($35a22f14a1f04b11$export$61a490a80c552550)(value, calendar)) !== null && _convertValue !== void 0 ? _convertValue : null;
    }, [
        value,
        calendar
    ]);
    // We keep track of the placeholder date separately in state so that onChange is not called
    // until all segments are set. If the value === null (not undefined), then assume the component
    // is controlled, so use the placeholder as the value until all segments are entered so it doesn't
    // change from uncontrolled to controlled and emit a warning.
    let [placeholderDate, setPlaceholderDate] = (useState)(()=>($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
    let val = calendarValue || placeholderDate;
    let showEra = calendar.identifier === 'gregory' && val.era === 'BC';
    let formatOpts = (useMemo)(()=>{
        var _props_maxGranularity;
        return {
            granularity: granularity,
            maxGranularity: (_props_maxGranularity = props.maxGranularity) !== null && _props_maxGranularity !== void 0 ? _props_maxGranularity : 'year',
            timeZone: defaultTimeZone,
            hideTimeZone: hideTimeZone,
            hourCycle: props.hourCycle,
            showEra: showEra,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros
        };
    }, [
        props.maxGranularity,
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        hideTimeZone,
        showEra
    ]);
    let opts = (useMemo)(()=>($35a22f14a1f04b11$export$7e319ea407e63bc0)({}, formatOpts), [
        formatOpts
    ]);
    let dateFormatter = (useMemo)(()=>new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, opts), [
        locale,
        opts
    ]);
    let resolvedOptions = (useMemo)(()=>dateFormatter.resolvedOptions(), [
        dateFormatter
    ]);
    // Determine how many editable segments there are for validation purposes.
    // The result is cached for performance.
    let allSegments = (useMemo)(()=>dateFormatter.formatToParts(new Date()).filter((seg)=>$3c0fc76039f1c516$var$EDITABLE_SEGMENTS[seg.type]).reduce((p, seg)=>(p[$3c0fc76039f1c516$var$TYPE_MAPPING[seg.type] || seg.type] = true, p), {}), [
        dateFormatter
    ]);
    let [validSegments, setValidSegments] = (useState)(()=>props.value || props.defaultValue ? {
            ...allSegments
        } : {});
    let clearedSegment = (useRef)(null);
    // Reset placeholder when calendar changes
    let lastCalendar = (useRef)(calendar);
    (useEffect)(()=>{
        if (!($14e0f24ef4ac5c92$export$dbc69fd56b53d5e)(calendar, lastCalendar.current)) {
            lastCalendar.current = calendar;
            setPlaceholderDate((placeholder)=>Object.keys(validSegments).length > 0 ? ($11d87f3f76e88657$export$b4a036af3fc0b032)(placeholder, calendar) : ($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
        }
    }, [
        calendar,
        granularity,
        validSegments,
        defaultTimeZone,
        props.placeholderValue
    ]);
    // If there is a value prop, and some segments were previously placeholders, mark them all as valid.
    if (value && Object.keys(validSegments).length < Object.keys(allSegments).length) {
        validSegments = {
            ...allSegments
        };
        setValidSegments(validSegments);
    }
    // If the value is set to null and all segments are valid, reset the placeholder.
    if (value == null && Object.keys(validSegments).length === Object.keys(allSegments).length) {
        validSegments = {};
        setValidSegments(validSegments);
        setPlaceholderDate(($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
    }
    // If all segments are valid, use the date from state, otherwise use the placeholder date.
    let displayValue = calendarValue && Object.keys(validSegments).length >= Object.keys(allSegments).length ? calendarValue : placeholderDate;
    let setValue = (newValue)=>{
        if (props.isDisabled || props.isReadOnly) return;
        let validKeys = Object.keys(validSegments);
        let allKeys = Object.keys(allSegments);
        // if all the segments are completed or a timefield with everything but am/pm set the time, also ignore when am/pm cleared
        if (newValue == null) {
            setDate(null);
            setPlaceholderDate(($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone));
            setValidSegments({});
        } else if (validKeys.length >= allKeys.length || validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod && clearedSegment.current !== 'dayPeriod') {
            // The display calendar should not have any effect on the emitted value.
            // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
            newValue = ($11d87f3f76e88657$export$b4a036af3fc0b032)(newValue, (v === null || v === void 0 ? void 0 : v.calendar) || new ($3b62074eb05584b2$export$80ee6245ec4f29ec)());
            setDate(newValue);
        } else setPlaceholderDate(newValue);
        clearedSegment.current = null;
    };
    let dateValue = (useMemo)(()=>displayValue.toDate(timeZone), [
        displayValue,
        timeZone
    ]);
    let segments = (useMemo)(()=>$3c0fc76039f1c516$var$processSegments(dateValue, validSegments, dateFormatter, resolvedOptions, displayValue, calendar, locale, granularity), [
        dateValue,
        validSegments,
        dateFormatter,
        resolvedOptions,
        displayValue,
        calendar,
        locale,
        granularity
    ]);
    // When the era field appears, mark it valid if the year field is already valid.
    // If the era field disappears, remove it from the valid segments.
    if (allSegments.era && validSegments.year && !validSegments.era) {
        validSegments.era = true;
        setValidSegments({
            ...validSegments
        });
    } else if (!allSegments.era && validSegments.era) {
        delete validSegments.era;
        setValidSegments({
            ...validSegments
        });
    }
    let markValid = (part)=>{
        validSegments[part] = true;
        if (part === 'year' && allSegments.era) validSegments.era = true;
        setValidSegments({
            ...validSegments
        });
    };
    let adjustSegment = (type, amount)=>{
        if (!validSegments[type]) {
            markValid(type);
            let validKeys = Object.keys(validSegments);
            let allKeys = Object.keys(allSegments);
            if (validKeys.length >= allKeys.length || validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod) setValue(displayValue);
        } else setValue($3c0fc76039f1c516$var$addSegment(displayValue, type, amount, resolvedOptions));
    };
    let builtinValidation = (useMemo)(()=>($35a22f14a1f04b11$export$f18627323ab57ac0)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = ($e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
        ...props,
        value: value,
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    var _props_maxGranularity;
    return {
        ...validation,
        value: calendarValue,
        dateValue: dateValue,
        calendar: calendar,
        setValue: setValue,
        segments: segments,
        dateFormatter: dateFormatter,
        validationState: validationState,
        isInvalid: isValueInvalid,
        granularity: granularity,
        maxGranularity: (_props_maxGranularity = props.maxGranularity) !== null && _props_maxGranularity !== void 0 ? _props_maxGranularity : 'year',
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        increment (part) {
            adjustSegment(part, 1);
        },
        decrement (part) {
            adjustSegment(part, -1);
        },
        incrementPage (part) {
            adjustSegment(part, $3c0fc76039f1c516$var$PAGE_STEP[part] || 1);
        },
        decrementPage (part) {
            adjustSegment(part, -($3c0fc76039f1c516$var$PAGE_STEP[part] || 1));
        },
        setSegment (part, v) {
            markValid(part);
            setValue($3c0fc76039f1c516$var$setSegment(displayValue, part, v, resolvedOptions));
        },
        confirmPlaceholder () {
            if (props.isDisabled || props.isReadOnly) return;
            // Confirm the placeholder if only the day period is not filled in.
            let validKeys = Object.keys(validSegments);
            let allKeys = Object.keys(allSegments);
            if (validKeys.length === allKeys.length - 1 && allSegments.dayPeriod && !validSegments.dayPeriod) {
                validSegments = {
                    ...allSegments
                };
                setValidSegments(validSegments);
                setValue(displayValue.copy());
            }
        },
        clearSegment (part) {
            delete validSegments[part];
            clearedSegment.current = part;
            setValidSegments({
                ...validSegments
            });
            let placeholder = ($35a22f14a1f04b11$export$66aa2b09de4b1ea5)(props.placeholderValue, granularity, calendar, defaultTimeZone);
            let value = displayValue;
            // Reset day period to default without changing the hour.
            if (part === 'dayPeriod' && 'hour' in displayValue && 'hour' in placeholder) {
                let isPM = displayValue.hour >= 12;
                let shouldBePM = placeholder.hour >= 12;
                if (isPM && !shouldBePM) value = displayValue.set({
                    hour: displayValue.hour - 12
                });
                else if (!isPM && shouldBePM) value = displayValue.set({
                    hour: displayValue.hour + 12
                });
            } else if (part === 'hour' && 'hour' in displayValue && displayValue.hour >= 12 && validSegments.dayPeriod) value = displayValue.set({
                hour: placeholder['hour'] + 12
            });
            else if (part in displayValue) value = displayValue.set({
                [part]: placeholder[part]
            });
            setDate(null);
            setValue(value);
        },
        formatValue (fieldOptions) {
            if (!calendarValue) return '';
            let formatOptions = ($35a22f14a1f04b11$export$7e319ea407e63bc0)(fieldOptions, formatOpts);
            let formatter = new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, formatOptions);
            return formatter.format(dateValue);
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = ($35a22f14a1f04b11$export$7e319ea407e63bc0)({}, newOptions);
            return new ($fb18d541ea1ad717$export$ad991b66133851cf)(locale, newFormatOptions);
        }
    };
}
function $3c0fc76039f1c516$var$processSegments(dateValue, validSegments, dateFormatter, resolvedOptions, displayValue, calendar, locale, granularity) {
    let timeValue = [
        'hour',
        'minute',
        'second'
    ];
    let segments = dateFormatter.formatToParts(dateValue);
    let processedSegments = [];
    for (let segment of segments){
        let type = $3c0fc76039f1c516$var$TYPE_MAPPING[segment.type] || segment.type;
        let isEditable = $3c0fc76039f1c516$var$EDITABLE_SEGMENTS[type];
        if (type === 'era' && calendar.getEras().length === 1) isEditable = false;
        let isPlaceholder = $3c0fc76039f1c516$var$EDITABLE_SEGMENTS[type] && !validSegments[type];
        let placeholder = $3c0fc76039f1c516$var$EDITABLE_SEGMENTS[type] ? ($3e3ed55ab2966714$export$d3f5c5e0a5023fa0)(type, segment.value, locale) : null;
        let dateSegment = {
            type: type,
            text: isPlaceholder ? placeholder : segment.value,
            ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, type, resolvedOptions),
            isPlaceholder: isPlaceholder,
            placeholder: placeholder,
            isEditable: isEditable
        };
        // There is an issue in RTL languages where time fields render (minute:hour) instead of (hour:minute).
        // To force an LTR direction on the time field since, we wrap the time segments in LRI (left-to-right) isolate unicode. See https://www.w3.org/International/questions/qa-bidi-unicode-controls.
        // These unicode characters will be added to the array of processed segments as literals and will mark the start and end of the embedded direction change. 
        if (type === 'hour') {
            // This marks the start of the embedded direction change. 
            processedSegments.push({
                type: 'literal',
                text: '\u2066',
                ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, 'literal', resolvedOptions),
                isPlaceholder: false,
                placeholder: '',
                isEditable: false
            });
            processedSegments.push(dateSegment);
            // This marks the end of the embedded direction change in the case that the granularity it set to "hour".
            if (type === granularity) processedSegments.push({
                type: 'literal',
                text: '\u2069',
                ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, 'literal', resolvedOptions),
                isPlaceholder: false,
                placeholder: '',
                isEditable: false
            });
        } else if (timeValue.includes(type) && type === granularity) {
            processedSegments.push(dateSegment);
            // This marks the end of the embedded direction change.
            processedSegments.push({
                type: 'literal',
                text: '\u2069',
                ...$3c0fc76039f1c516$var$getSegmentLimits(displayValue, 'literal', resolvedOptions),
                isPlaceholder: false,
                placeholder: '',
                isEditable: false
            });
        } else // We only want to "wrap" the unicode around segments that are hour, minute, or second. If they aren't, just process as normal. 
        processedSegments.push(dateSegment);
    }
    return processedSegments;
}
function $3c0fc76039f1c516$var$getSegmentLimits(date, type, options) {
    switch(type){
        case 'era':
            {
                let eras = date.calendar.getEras();
                return {
                    value: eras.indexOf(date.era),
                    minValue: 0,
                    maxValue: eras.length - 1
                };
            }
        case 'year':
            return {
                value: date.year,
                minValue: 1,
                maxValue: date.calendar.getYearsInEra(date)
            };
        case 'month':
            return {
                value: date.month,
                minValue: ($14e0f24ef4ac5c92$export$5412ac11713b72ad)(date),
                maxValue: date.calendar.getMonthsInYear(date)
            };
        case 'day':
            return {
                value: date.day,
                minValue: ($14e0f24ef4ac5c92$export$b2f4953d301981d5)(date),
                maxValue: date.calendar.getDaysInMonth(date)
            };
    }
    if ('hour' in date) switch(type){
        case 'dayPeriod':
            return {
                value: date.hour >= 12 ? 12 : 0,
                minValue: 0,
                maxValue: 12
            };
        case 'hour':
            if (options.hour12) {
                let isPM = date.hour >= 12;
                return {
                    value: date.hour,
                    minValue: isPM ? 12 : 0,
                    maxValue: isPM ? 23 : 11
                };
            }
            return {
                value: date.hour,
                minValue: 0,
                maxValue: 23
            };
        case 'minute':
            return {
                value: date.minute,
                minValue: 0,
                maxValue: 59
            };
        case 'second':
            return {
                value: date.second,
                minValue: 0,
                maxValue: 59
            };
    }
    return {};
}
function $3c0fc76039f1c516$var$addSegment(value, part, amount, options) {
    switch(part){
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            return value.cycle(part, amount, {
                round: part === 'year'
            });
    }
    if ('hour' in value) switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let isPM = hours >= 12;
                return value.set({
                    hour: isPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
        case 'minute':
        case 'second':
            return value.cycle(part, amount, {
                round: part !== 'hour',
                hourCycle: options.hour12 ? 12 : 24
            });
    }
    throw new Error('Unknown segment: ' + part);
}
function $3c0fc76039f1c516$var$setSegment(value, part, segmentValue, options) {
    switch(part){
        case 'day':
        case 'month':
        case 'year':
        case 'era':
            return value.set({
                [part]: segmentValue
            });
    }
    if ('hour' in value && typeof segmentValue === 'number') switch(part){
        case 'dayPeriod':
            {
                let hours = value.hour;
                let wasPM = hours >= 12;
                let isPM = segmentValue >= 12;
                if (isPM === wasPM) return value;
                return value.set({
                    hour: wasPM ? hours - 12 : hours + 12
                });
            }
        case 'hour':
            // In 12 hour time, ensure that AM/PM does not change
            if (options.hour12) {
                let hours = value.hour;
                let wasPM = hours >= 12;
                if (!wasPM && segmentValue === 12) segmentValue = 0;
                if (wasPM && segmentValue < 12) segmentValue += 12;
            }
        // fallthrough
        case 'minute':
        case 'second':
            return value.set({
                [part]: segmentValue
            });
    }
    throw new Error('Unknown segment: ' + part);
}

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $d3e0e05bdfcf66bd$export$c24727297075ec6a = /*#__PURE__*/ (createContext)(null);

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $a049562f99e7db0e$export$f9c6924e160136d1 = /*#__PURE__*/ (createContext)({});
const $a049562f99e7db0e$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (forwardRef)(function Group(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $a049562f99e7db0e$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = ($6179b936705e76d3$export$ae780daf29e6d456)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = ($f7dceffc5ad7768b$export$4e328f61c538687f)({
        within: true
    });
    isDisabled !== null && isDisabled !== void 0 ? isDisabled : isDisabled = !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid !== null && isInvalid !== void 0 ? isInvalid : isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    var _props_role, _props_slot;
    return /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...($3ef42575df84b30b$export$9d1611c77c2fe928)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: (_props_role = props.role) !== null && _props_role !== void 0 ? _props_role : 'group',
        slot: (_props_slot = props.slot) !== null && _props_slot !== void 0 ? _props_slot : undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined
    }, renderProps.children);
});

const $216918bed6669f72$export$2dc6166a7e65358c = /*#__PURE__*/ (createContext)({});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 










const $bcdf0525bf22703d$export$2129e27b3ef0d483 = /*#__PURE__*/ (createContext)(null);
const $bcdf0525bf22703d$export$2c73285ae9390cec = /*#__PURE__*/ ($f39a9eba43920ace$export$86427a43e3e48ebb)(function TextField(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $bcdf0525bf22703d$export$2129e27b3ef0d483);
    let { validationBehavior: formValidationBehavior } = ($64fa3d84918910a7$export$fabf2dc03a41866e)(($d3e0e05bdfcf66bd$export$c24727297075ec6a)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let inputRef = (useRef)(null);
    let [inputContextProps, mergedInputRef] = ($64fa3d84918910a7$export$29f1550f4b0d4415)({}, inputRef, ($3985021b0ad6602f$export$37fb8590cf2c088c));
    let [labelRef, label] = ($64fa3d84918910a7$export$9d4c57ee4c6ffdd8)(!props['aria-label'] && !props['aria-labelledby']);
    let [inputElementType, setInputElementType] = (useState)('input');
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = ($2d73ec29415bd339$export$712718f7aec83d5)({
        ...($64fa3d84918910a7$export$ef03459518577ad4)(props),
        inputElementType: inputElementType,
        label: label,
        validationBehavior: validationBehavior
    }, mergedInputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (useCallback)((el)=>{
        mergedInputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, [
        mergedInputRef
    ]);
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
    });
    let DOMProps = ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ ($dbSRa$react).createElement(($64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                ($01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                ($3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...($3ef42575df84b30b$export$9d1611c77c2fe928)(inputProps, inputContextProps),
                    ref: inputOrTextAreaRef
                }
            ],
            [
                ($216918bed6669f72$export$2dc6166a7e65358c),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                ($514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                ($ee014567cb39d3f0$export$ff05c3ac10437e03),
                validation
            ]
        ]
    }, renderProps.children));
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $dfd62f934fc76fed$export$3b805cea1f178355 = /*#__PURE__*/ (createContext)(null);
const $dfd62f934fc76fed$export$233dd9682e1ad64b = /*#__PURE__*/ (createContext)(null);
const $dfd62f934fc76fed$export$9e31dcedda1dadc7 = /*#__PURE__*/ (createContext)(null);
const $dfd62f934fc76fed$export$5e0fc348c00f87a0 = /*#__PURE__*/ (createContext)(null);
const $dfd62f934fc76fed$export$e1aef45b828286de = /*#__PURE__*/ (forwardRef)(function Calendar(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $dfd62f934fc76fed$export$3b805cea1f178355);
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let state = ($131cf43a05231e1e$export$6d095e787d2b5e1f)({
        ...props,
        locale: locale,
        createCalendar: props.createCalendar || ($64244302c3013299$export$dd0bbc9b26defe37)
    });
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps, title: title } = ($9942cad8a072a530$export$3ee915f8151bd4f1)(props, state);
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isValueInvalid
        },
        defaultClassName: 'react-aria-Calendar'
    });
    return /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...renderProps,
        ...calendarProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": state.isValueInvalid || undefined
    }, /*#__PURE__*/ ($dbSRa$react).createElement(($64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                ($d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        previous: prevButtonProps,
                        next: nextButtonProps
                    }
                }
            ],
            [
                ($4e85f108e88277b8$export$d688439359537581),
                {
                    'aria-hidden': true,
                    level: 2,
                    children: title
                }
            ],
            [
                $dfd62f934fc76fed$export$9e31dcedda1dadc7,
                state
            ],
            [
                $dfd62f934fc76fed$export$3b805cea1f178355,
                props
            ],
            [
                ($514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ ($dbSRa$react).createElement(($5c3e21d68f1c4674$export$439d29a4e110a164), null, /*#__PURE__*/ ($dbSRa$react).createElement("h2", null, calendarProps['aria-label'])), renderProps.children, /*#__PURE__*/ ($dbSRa$react).createElement(($5c3e21d68f1c4674$export$439d29a4e110a164), null, /*#__PURE__*/ ($dbSRa$react).createElement("button", {
        "aria-label": nextButtonProps['aria-label'],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    }))));
});
const $dfd62f934fc76fed$var$InternalCalendarGridContext = /*#__PURE__*/ (createContext)(null);
const $dfd62f934fc76fed$export$5bd780d491cfc46c = /*#__PURE__*/ (forwardRef)(function CalendarGrid(props, ref) {
    let calendarState = (useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let calenderProps = ($64fa3d84918910a7$export$fabf2dc03a41866e)($dfd62f934fc76fed$export$3b805cea1f178355);
    let rangeCalenderProps = ($64fa3d84918910a7$export$fabf2dc03a41866e)($dfd62f934fc76fed$export$233dd9682e1ad64b);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let startDate = state.visibleRange.start;
    if (props.offset) startDate = startDate.add(props.offset);
    var _calenderProps_firstDayOfWeek;
    let firstDayOfWeek = (_calenderProps_firstDayOfWeek = calenderProps === null || calenderProps === void 0 ? void 0 : calenderProps.firstDayOfWeek) !== null && _calenderProps_firstDayOfWeek !== void 0 ? _calenderProps_firstDayOfWeek : rangeCalenderProps === null || rangeCalenderProps === void 0 ? void 0 : rangeCalenderProps.firstDayOfWeek;
    let { gridProps: gridProps, headerProps: headerProps, weekDays: weekDays, weeksInMonth: weeksInMonth } = ($e3031d1f8c9d64eb$export$cb95147730a423f5)({
        startDate: startDate,
        endDate: ($14e0f24ef4ac5c92$export$a2258d9c4118825c)(startDate),
        weekdayStyle: props.weekdayStyle,
        firstDayOfWeek: firstDayOfWeek
    }, state);
    var _props_className;
    return /*#__PURE__*/ ($dbSRa$react).createElement($dfd62f934fc76fed$var$InternalCalendarGridContext.Provider, {
        value: {
            headerProps: headerProps,
            weekDays: weekDays,
            startDate: startDate,
            weeksInMonth: weeksInMonth
        }
    }, /*#__PURE__*/ ($dbSRa$react).createElement("table", {
        ...($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props),
        ...gridProps,
        ref: ref,
        style: props.style,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-CalendarGrid'
    }, typeof props.children !== 'function' ? props.children : /*#__PURE__*/ ($dbSRa$react).createElement(($dbSRa$react).Fragment, null, /*#__PURE__*/ ($dbSRa$react).createElement($dfd62f934fc76fed$export$22e2d15eaa4d2377, null, (day)=>/*#__PURE__*/ ($dbSRa$react).createElement($dfd62f934fc76fed$export$ad2135cac3a11b3d, null, day)), /*#__PURE__*/ ($dbSRa$react).createElement($dfd62f934fc76fed$export$e11f8ba65d857bff, null, props.children))));
});
function $dfd62f934fc76fed$var$CalendarGridHeader(props, ref) {
    let { children: children, style: style, className: className } = props;
    let { headerProps: headerProps, weekDays: weekDays } = (useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext);
    return /*#__PURE__*/ ($dbSRa$react).createElement("thead", {
        ...($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props),
        ...headerProps,
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarGridHeader'
    }, /*#__PURE__*/ ($dbSRa$react).createElement("tr", null, weekDays.map((day, key)=>/*#__PURE__*/ ($dbSRa$react).cloneElement(children(day), {
            key: key
        }))));
}
/**
 * A calendar grid header displays a row of week day names at the top of a month.
 */ const $dfd62f934fc76fed$export$22e2d15eaa4d2377 = /*#__PURE__*/ (forwardRef)($dfd62f934fc76fed$var$CalendarGridHeader);
function $dfd62f934fc76fed$var$CalendarHeaderCell(props, ref) {
    let { children: children, style: style, className: className } = props;
    return /*#__PURE__*/ ($dbSRa$react).createElement("th", {
        ...($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props),
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarHeaderCell'
    }, children);
}
/**
 * A calendar header cell displays a week day name at the top of a column within a calendar.
 */ const $dfd62f934fc76fed$export$ad2135cac3a11b3d = /*#__PURE__*/ (forwardRef)($dfd62f934fc76fed$var$CalendarHeaderCell);
function $dfd62f934fc76fed$var$CalendarGridBody(props, ref) {
    let { children: children, style: style, className: className } = props;
    let calendarState = (useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let { startDate: startDate, weeksInMonth: weeksInMonth } = (useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext);
    return /*#__PURE__*/ ($dbSRa$react).createElement("tbody", {
        ...($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props),
        ref: ref,
        style: style,
        className: className || 'react-aria-CalendarGridBody'
    }, [
        ...new Array(weeksInMonth).keys()
    ].map((weekIndex)=>/*#__PURE__*/ ($dbSRa$react).createElement("tr", {
            key: weekIndex
        }, state.getDatesInWeek(weekIndex, startDate).map((date, i)=>date ? /*#__PURE__*/ ($dbSRa$react).cloneElement(children(date), {
                key: i
            }) : /*#__PURE__*/ ($dbSRa$react).createElement("td", {
                key: i
            })))));
}
/**
 * A calendar grid body displays a grid of calendar cells within a month.
 */ const $dfd62f934fc76fed$export$e11f8ba65d857bff = /*#__PURE__*/ (forwardRef)($dfd62f934fc76fed$var$CalendarGridBody);
const $dfd62f934fc76fed$export$5d847498420df57b = /*#__PURE__*/ (forwardRef)(function CalendarCell({ date: date, ...otherProps }, ref) {
    let calendarState = (useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    var _useContext;
    let { startDate: currentMonth } = (_useContext = (useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext)) !== null && _useContext !== void 0 ? _useContext : {
        startDate: state.visibleRange.start
    };
    let buttonRef = (useRef)(null);
    let { cellProps: cellProps, buttonProps: buttonProps, ...states } = ($36a0ac60f04457c5$export$136073280381448e)({
        date: date
    }, state, buttonRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = ($6179b936705e76d3$export$ae780daf29e6d456)({
        ...otherProps,
        isDisabled: states.isDisabled
    });
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = ($f7dceffc5ad7768b$export$4e328f61c538687f)();
    isFocusVisible && (isFocusVisible = states.isFocused);
    let isOutsideMonth = !($14e0f24ef4ac5c92$export$a18c89cbd24170ff)(currentMonth, date);
    let isSelectionStart = false;
    let isSelectionEnd = false;
    if ('highlightedRange' in state && state.highlightedRange) {
        isSelectionStart = ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.highlightedRange.start);
        isSelectionEnd = ($14e0f24ef4ac5c92$export$ea39ec197993aef0)(date, state.highlightedRange.end);
    }
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        defaultChildren: states.formattedDate,
        defaultClassName: 'react-aria-CalendarCell',
        values: {
            date: date,
            isHovered: isHovered,
            isOutsideMonth: isOutsideMonth,
            isFocusVisible: isFocusVisible,
            isSelectionStart: isSelectionStart,
            isSelectionEnd: isSelectionEnd,
            ...states
        }
    });
    let dataAttrs = {
        'data-focused': states.isFocused || undefined,
        'data-hovered': isHovered || undefined,
        'data-pressed': states.isPressed || undefined,
        'data-unavailable': states.isUnavailable || undefined,
        'data-disabled': states.isDisabled || undefined,
        'data-focus-visible': isFocusVisible || undefined,
        'data-outside-visible-range': states.isOutsideVisibleRange || undefined,
        'data-outside-month': isOutsideMonth || undefined,
        'data-selected': states.isSelected || undefined,
        'data-selection-start': isSelectionStart || undefined,
        'data-selection-end': isSelectionEnd || undefined,
        'data-invalid': states.isInvalid || undefined
    };
    return /*#__PURE__*/ ($dbSRa$react).createElement("td", {
        ...cellProps,
        ref: ref
    }, /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...($3ef42575df84b30b$export$9d1611c77c2fe928)(($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(otherProps), buttonProps, focusProps, hoverProps, dataAttrs, renderProps),
        ref: buttonRef
    }));
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $44f671af83e7d9e0$export$2de4954e8ae13b9f = /*#__PURE__*/ (createContext)({
    placement: 'bottom'
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $07b14b47974efb58$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (createContext)(null);
// Stores a ref for the portal container for a group of popovers (e.g. submenus).
const $07b14b47974efb58$var$PopoverGroupContext = /*#__PURE__*/ (createContext)(null);
const $07b14b47974efb58$export$5b6b19405a83ff9d = /*#__PURE__*/ (forwardRef)(function Popover(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $07b14b47974efb58$export$9b9a0cd73afb7ca4);
    let contextState = (useContext)(($de32f1b87079253c$export$d2f961adcb0afbe));
    let localState = ($fc909762b330b746$export$61c6a8c84e605fb6)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = ($d3f049242431219c$export$45fda7c47f93fd48)(ref, state.isOpen) || props.isExiting || false;
    let isHidden = ($f39a9eba43920ace$export$b5d7cc18bb8d2b59)();
    let { direction: direction } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    // If we are in a hidden tree, we still need to preserve our children.
    if (isHidden) {
        let children = props.children;
        if (typeof children === 'function') children = children({
            trigger: props.trigger || null,
            placement: 'bottom',
            isEntering: false,
            isExiting: false,
            defaultChildren: null
        });
        return /*#__PURE__*/ ($dbSRa$react).createElement(($dbSRa$react).Fragment, null, children);
    }
    if (state && !state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ ($dbSRa$react).createElement($07b14b47974efb58$var$PopoverInner, {
        ...props,
        triggerRef: props.triggerRef,
        state: state,
        popoverRef: ref,
        isExiting: isExiting,
        dir: direction
    });
});
function $07b14b47974efb58$var$PopoverInner({ state: state, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, clearContexts: clearContexts, ...props }) {
    // Calculate the arrow size internally (and remove props.arrowSize from PopoverProps)
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (useRef)(null);
    let [arrowWidth, setArrowWidth] = (useState)(0);
    let containerRef = (useRef)(null);
    let groupCtx = (useContext)($07b14b47974efb58$var$PopoverGroupContext);
    let isSubPopover = groupCtx && props.trigger === 'SubmenuTrigger';
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    var _props_offset;
    let { popoverProps: popoverProps, underlayProps: underlayProps, arrowProps: arrowProps, placement: placement } = ($f2f8a6077418541e$export$542a6fd13ac93354)({
        ...props,
        offset: (_props_offset = props.offset) !== null && _props_offset !== void 0 ? _props_offset : 8,
        arrowSize: arrowWidth,
        // If this is a submenu/subdialog, use the root popover's container
        // to detect outside interaction and add aria-hidden.
        groupRef: isSubPopover ? groupCtx : containerRef
    }, state);
    let ref = props.popoverRef;
    let isEntering = ($d3f049242431219c$export$6d3443f2c48bfc20)(ref, !!placement) || props.isEntering || false;
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-Popover',
        values: {
            trigger: props.trigger || null,
            placement: placement,
            isEntering: isEntering,
            isExiting: isExiting
        }
    });
    // Automatically render Popover with role=dialog except when isNonModal is true,
    // or a dialog is already nested inside the popover.
    let shouldBeDialog = !props.isNonModal || props.trigger === 'SubmenuTrigger';
    let [isDialog, setDialog] = (useState)(false);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (ref.current) setDialog(shouldBeDialog && !ref.current.querySelector('[role=dialog]'));
    }, [
        ref,
        shouldBeDialog
    ]);
    // Focus the popover itself on mount, unless a child element is already focused.
    (useEffect)(()=>{
        if (isDialog && ref.current && !ref.current.contains(document.activeElement)) ($3ad3f6e1647bc98d$export$80f3e147d781571c)(ref.current);
    }, [
        isDialog,
        ref
    ]);
    let children = (useMemo)(()=>{
        let children = renderProps.children;
        if (clearContexts) for (let Context of clearContexts)children = /*#__PURE__*/ ($dbSRa$react).createElement(Context.Provider, {
            value: null
        }, children);
        return children;
    }, [
        renderProps.children,
        clearContexts
    ]);
    let style = {
        ...popoverProps.style,
        ...renderProps.style
    };
    let overlay = /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...($3ef42575df84b30b$export$9d1611c77c2fe928)(($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props), popoverProps),
        ...renderProps,
        role: isDialog ? 'dialog' : undefined,
        tabIndex: isDialog ? -1 : undefined,
        "aria-label": props['aria-label'],
        "aria-labelledby": props['aria-labelledby'],
        ref: ref,
        slot: props.slot || undefined,
        style: style,
        dir: props.dir,
        "data-trigger": props.trigger,
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined
    }, !props.isNonModal && /*#__PURE__*/ ($dbSRa$react).createElement(($86ea4cb521eb2e37$export$2317d149ed6f78c4), {
        onDismiss: state.close
    }), /*#__PURE__*/ ($dbSRa$react).createElement(($44f671af83e7d9e0$export$2de4954e8ae13b9f).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, children), /*#__PURE__*/ ($dbSRa$react).createElement(($86ea4cb521eb2e37$export$2317d149ed6f78c4), {
        onDismiss: state.close
    }));
    // If this is a root popover, render an extra div to act as the portal container for submenus/subdialogs.
    if (!isSubPopover) return /*#__PURE__*/ ($dbSRa$react).createElement(($337b884510726a0d$export$c6fdb837b070b4ff), {
        ...props,
        shouldContainFocus: isDialog,
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, !props.isNonModal && state.isOpen && /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        "data-testid": "underlay",
        ...underlayProps,
        style: {
            position: 'fixed',
            inset: 0
        }
    }), /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ref: containerRef,
        style: {
            display: 'contents'
        }
    }, /*#__PURE__*/ ($dbSRa$react).createElement($07b14b47974efb58$var$PopoverGroupContext.Provider, {
        value: containerRef
    }, overlay)));
    var _ref;
    // Submenus/subdialogs are mounted into the root popover's container.
    return /*#__PURE__*/ ($dbSRa$react).createElement(($337b884510726a0d$export$c6fdb837b070b4ff), {
        ...props,
        shouldContainFocus: isDialog,
        isExiting: isExiting,
        portalContainer: (_ref = UNSTABLE_portalContainer !== null && UNSTABLE_portalContainer !== void 0 ? UNSTABLE_portalContainer : groupCtx === null || groupCtx === void 0 ? void 0 : groupCtx.current) !== null && _ref !== void 0 ? _ref : undefined
    }, overlay);
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









const $de32f1b87079253c$export$8b93a07348a7730c = /*#__PURE__*/ (createContext)(null);
const $de32f1b87079253c$export$d2f961adcb0afbe = /*#__PURE__*/ (createContext)(null);
const $de32f1b87079253c$export$3ddf2d174ce01153 = /*#__PURE__*/ (forwardRef)(function Dialog(props, ref) {
    let originalAriaLabelledby = props['aria-labelledby'];
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $de32f1b87079253c$export$8b93a07348a7730c);
    let { dialogProps: dialogProps, titleProps: titleProps } = ($40df3f8667284809$export$d55e7ee900f34e93)({
        ...props,
        // Only pass aria-labelledby from props, not context.
        // Context is used as a fallback below.
        'aria-labelledby': originalAriaLabelledby
    }, ref);
    let state = (useContext)($de32f1b87079253c$export$d2f961adcb0afbe);
    if (!dialogProps['aria-label'] && !dialogProps['aria-labelledby']) {
        // If aria-labelledby exists on props, we know it came from context.
        // Use that as a fallback in case there is no title slot.
        if (props['aria-labelledby']) dialogProps['aria-labelledby'] = props['aria-labelledby'];
        else if (process.env.NODE_ENV !== 'production') console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.');
    }
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        defaultClassName: 'react-aria-Dialog',
        className: props.className,
        style: props.style,
        children: props.children,
        values: {
            close: (state === null || state === void 0 ? void 0 : state.close) || (()=>{})
        }
    });
    return /*#__PURE__*/ ($dbSRa$react).createElement("section", {
        ...($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props),
        ...dialogProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ ($dbSRa$react).createElement(($64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                ($4e85f108e88277b8$export$d688439359537581),
                {
                    slots: {
                        [($64fa3d84918910a7$export$c62b8e45d58ddad9)]: {},
                        title: {
                            ...titleProps,
                            level: 2
                        }
                    }
                }
            ],
            [
                ($d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        [($64fa3d84918910a7$export$c62b8e45d58ddad9)]: {},
                        close: {
                            onPress: ()=>state === null || state === void 0 ? void 0 : state.close()
                        }
                    }
                }
            ]
        ]
    }, renderProps.children));
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 











const $40825cdb76e74f70$export$7b3e670c86da5fe8 = /*#__PURE__*/ (createContext)(null);
const $40825cdb76e74f70$export$3b08bebcf796eea0 = /*#__PURE__*/ (createContext)(null);
const $40825cdb76e74f70$export$5d8dc44abd10a920 = /*#__PURE__*/ (createContext)(null);
const $40825cdb76e74f70$export$7edc06cf1783b30f = /*#__PURE__*/ (forwardRef)(function DateInput(props, ref) {
    // If state is provided by DateField/TimeField, just render.
    // Otherwise (e.g. in DatePicker), we need to call hooks and create state ourselves.
    let dateFieldState = (useContext)($40825cdb76e74f70$export$3b08bebcf796eea0);
    let timeFieldState = (useContext)($40825cdb76e74f70$export$5d8dc44abd10a920);
    return dateFieldState || timeFieldState ? /*#__PURE__*/ ($dbSRa$react).createElement($40825cdb76e74f70$var$DateInputInner, {
        ...props,
        ref: ref
    }) : /*#__PURE__*/ ($dbSRa$react).createElement($40825cdb76e74f70$var$DateInputStandalone, {
        ...props,
        ref: ref
    });
});
const $40825cdb76e74f70$var$DateInputStandalone = /*#__PURE__*/ (forwardRef)((props, ref)=>{
    let [dateFieldProps, fieldRef] = ($64fa3d84918910a7$export$29f1550f4b0d4415)({
        slot: props.slot
    }, ref, $40825cdb76e74f70$export$7b3e670c86da5fe8);
    let { locale: locale } = ($18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let state = ($3c0fc76039f1c516$export$60e84778edff6d26)({
        ...dateFieldProps,
        locale: locale,
        createCalendar: $64244302c3013299$export$dd0bbc9b26defe37
    });
    let inputRef = (useRef)(null);
    let { fieldProps: fieldProps, inputProps: inputProps } = ($16f0b7bb276bc17e$export$5591b0b878c1a989)({
        ...dateFieldProps,
        inputRef: inputRef
    }, state, fieldRef);
    return /*#__PURE__*/ ($dbSRa$react).createElement(($64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $40825cdb76e74f70$export$3b08bebcf796eea0,
                state
            ],
            [
                ($3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                ($a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    ...fieldProps,
                    ref: fieldRef,
                    isInvalid: state.isInvalid,
                    isDisabled: state.isDisabled
                }
            ]
        ]
    }, /*#__PURE__*/ ($dbSRa$react).createElement($40825cdb76e74f70$var$DateInputInner, props));
});
const $40825cdb76e74f70$var$DateInputInner = /*#__PURE__*/ (forwardRef)((props, ref)=>{
    let { className: className, children: children } = props;
    let dateFieldState = (useContext)($40825cdb76e74f70$export$3b08bebcf796eea0);
    let timeFieldState = (useContext)($40825cdb76e74f70$export$5d8dc44abd10a920);
    let state = dateFieldState !== null && dateFieldState !== void 0 ? dateFieldState : timeFieldState;
    return /*#__PURE__*/ ($dbSRa$react).createElement(($dbSRa$react).Fragment, null, /*#__PURE__*/ ($dbSRa$react).createElement(($a049562f99e7db0e$export$eb2fcfdbd7ba97d4), {
        ...props,
        ref: ref,
        slot: props.slot || undefined,
        className: className !== null && className !== void 0 ? className : 'react-aria-DateInput',
        isInvalid: state.isInvalid,
        isDisabled: state.isDisabled
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (cloneElement)(children(segment), {
            key: i
        }))), /*#__PURE__*/ ($dbSRa$react).createElement(($3985021b0ad6602f$export$f5b8910cec6cf069), null));
});
const $40825cdb76e74f70$export$336ab7fa954c4b5f = /*#__PURE__*/ (forwardRef)(function DateSegment({ segment: segment, ...otherProps }, ref) {
    let dateFieldState = (useContext)($40825cdb76e74f70$export$3b08bebcf796eea0);
    let timeFieldState = (useContext)($40825cdb76e74f70$export$5d8dc44abd10a920);
    let state = dateFieldState !== null && dateFieldState !== void 0 ? dateFieldState : timeFieldState;
    let domRef = ($df56164dff5785e2$export$4338b53315abf666)(ref);
    let { segmentProps: segmentProps } = ($32489daedd52963e$export$1315d136e6f7581)(segment, state, domRef);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = ($f7dceffc5ad7768b$export$4e328f61c538687f)();
    let { hoverProps: hoverProps, isHovered: isHovered } = ($6179b936705e76d3$export$ae780daf29e6d456)({
        ...otherProps,
        isDisabled: state.isDisabled || segment.type === 'literal'
    });
    let { isEditable: isEditable, ...segmentRest } = segment;
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        values: {
            ...segmentRest,
            isReadOnly: !isEditable,
            isInvalid: state.isInvalid,
            isDisabled: state.isDisabled,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        },
        defaultChildren: segment.text,
        defaultClassName: 'react-aria-DateSegment'
    });
    return /*#__PURE__*/ ($dbSRa$react).createElement("span", {
        ...($3ef42575df84b30b$export$9d1611c77c2fe928)(($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(otherProps), segmentProps, focusProps, hoverProps),
        ...renderProps,
        style: segmentProps.style,
        ref: domRef,
        "data-placeholder": segment.isPlaceholder || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-readonly": !isEditable || undefined,
        "data-disabled": state.isDisabled || undefined,
        "data-type": segment.type,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    });
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 














const $06d5b8ec9ee5d538$export$cf316c7f3b44c11e = /*#__PURE__*/ (createContext)(null);
const $06d5b8ec9ee5d538$export$50a10c048fdcdee9 = /*#__PURE__*/ (createContext)(null);
// Contexts to clear inside the popover.
const $06d5b8ec9ee5d538$var$CLEAR_CONTEXTS = [
    ($a049562f99e7db0e$export$f9c6924e160136d1),
    ($d2b4bc8c273e7be6$export$24d547caef80ccd1),
    ($01b77f81d0f07f68$export$75b6ee27786ba447),
    ($514c0188e459b4c0$export$9afb8bc826b033ea)
];
const $06d5b8ec9ee5d538$export$5109c6dd95d8fb00 = /*#__PURE__*/ (forwardRef)(function DatePicker(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $06d5b8ec9ee5d538$export$cf316c7f3b44c11e);
    let { validationBehavior: formValidationBehavior } = ($64fa3d84918910a7$export$fabf2dc03a41866e)(($d3e0e05bdfcf66bd$export$c24727297075ec6a)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let state = ($ab5bf3f618090389$export$87194bb378cc3ac2)({
        ...props,
        validationBehavior: validationBehavior
    });
    let groupRef = (useRef)(null);
    let [labelRef, label] = ($64fa3d84918910a7$export$9d4c57ee4c6ffdd8)(!props['aria-label'] && !props['aria-labelledby']);
    let { groupProps: groupProps, labelProps: labelProps, fieldProps: fieldProps, buttonProps: buttonProps, dialogProps: dialogProps, calendarProps: calendarProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = ($6057a3d2a53a12fd$export$42df105a73306d51)({
        ...($64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, groupRef);
    // Allows calendar width to match input group
    let [groupWidth, setGroupWidth] = (useState)(null);
    let onResize = (useCallback)(()=>{
        if (groupRef.current) setGroupWidth(groupRef.current.offsetWidth + 'px');
    }, []);
    ($9daab02d461809db$export$683480f191c0e3ea)({
        ref: groupRef,
        onResize: onResize
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = ($f7dceffc5ad7768b$export$4e328f61c538687f)({
        within: true
    });
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isInvalid,
            isOpen: state.isOpen
        },
        defaultClassName: 'react-aria-DatePicker'
    });
    let DOMProps = ($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ ($dbSRa$react).createElement(($64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $06d5b8ec9ee5d538$export$50a10c048fdcdee9,
                state
            ],
            [
                ($a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    ...groupProps,
                    ref: groupRef,
                    isInvalid: state.isInvalid
                }
            ],
            [
                ($40825cdb76e74f70$export$7b3e670c86da5fe8),
                fieldProps
            ],
            [
                ($d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    ...buttonProps,
                    isPressed: state.isOpen
                }
            ],
            [
                ($01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: 'span'
                }
            ],
            [
                ($dfd62f934fc76fed$export$3b805cea1f178355),
                calendarProps
            ],
            [
                ($de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                ($07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    trigger: 'DatePicker',
                    triggerRef: groupRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': groupWidth
                    },
                    clearContexts: $06d5b8ec9ee5d538$var$CLEAR_CONTEXTS
                }
            ],
            [
                ($de32f1b87079253c$export$8b93a07348a7730c),
                dialogProps
            ],
            [
                ($514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                ($ee014567cb39d3f0$export$ff05c3ac10437e03),
                validation
            ]
        ]
    }, /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...focusProps,
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focus-within": isFocused || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-open": state.isOpen || undefined
    }));
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $5cb03073d3f54797$export$a8a3e93435678ff9 = /*#__PURE__*/ (forwardRef)(function Heading(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, ($4e85f108e88277b8$export$d688439359537581));
    let { children: children, level: level = 3, className: className, ...domProps } = props;
    let Element = `h${level}`;
    return /*#__PURE__*/ ($dbSRa$react).createElement(Element, {
        ...domProps,
        ref: ref,
        className: className !== null && className !== void 0 ? className : 'react-aria-Heading'
    }, children);
});

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $f3f84453ead64de5$export$ab57792b9b6974a6 = /*#__PURE__*/ (createContext)(null);
const $f3f84453ead64de5$var$InternalModalContext = /*#__PURE__*/ (createContext)(null);
const $f3f84453ead64de5$export$2b77a92f1a5ad772 = /*#__PURE__*/ (forwardRef)(function Modal(props, ref) {
    let ctx = (useContext)($f3f84453ead64de5$var$InternalModalContext);
    if (ctx) return /*#__PURE__*/ ($dbSRa$react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...props,
        modalRef: ref
    }, props.children);
    let { isDismissable: isDismissable, isKeyboardDismissDisabled: isKeyboardDismissDisabled, isOpen: isOpen, defaultOpen: defaultOpen, onOpenChange: onOpenChange, children: children, isEntering: isEntering, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    return /*#__PURE__*/ ($dbSRa$react).createElement($f3f84453ead64de5$export$8948f78d83984c69, {
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        isEntering: isEntering,
        isExiting: isExiting,
        UNSTABLE_portalContainer: UNSTABLE_portalContainer,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, /*#__PURE__*/ ($dbSRa$react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...otherProps,
        modalRef: ref
    }, children));
});
function $f3f84453ead64de5$var$ModalOverlayWithForwardRef(props, ref) {
    [props, ref] = ($64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $f3f84453ead64de5$export$ab57792b9b6974a6);
    let contextState = (useContext)(($de32f1b87079253c$export$d2f961adcb0afbe));
    let localState = ($fc909762b330b746$export$61c6a8c84e605fb6)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let objectRef = ($df56164dff5785e2$export$4338b53315abf666)(ref);
    let modalRef = (useRef)(null);
    let isOverlayExiting = ($d3f049242431219c$export$45fda7c47f93fd48)(objectRef, state.isOpen);
    let isModalExiting = ($d3f049242431219c$export$45fda7c47f93fd48)(modalRef, state.isOpen);
    let isExiting = isOverlayExiting || isModalExiting || props.isExiting || false;
    let isSSR = ($b5e257d569688ac6$export$535bd6ca7f90a273)();
    if (!state.isOpen && !isExiting || isSSR) return null;
    return /*#__PURE__*/ ($dbSRa$react).createElement($f3f84453ead64de5$var$ModalOverlayInner, {
        ...props,
        state: state,
        isExiting: isExiting,
        overlayRef: objectRef,
        modalRef: modalRef
    });
}
const $f3f84453ead64de5$export$8948f78d83984c69 = /*#__PURE__*/ (forwardRef)($f3f84453ead64de5$var$ModalOverlayWithForwardRef);
function $f3f84453ead64de5$var$ModalOverlayInner({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    let modalRef = props.modalRef;
    let { state: state } = props;
    let { modalProps: modalProps, underlayProps: underlayProps } = ($8ac8429251c45e4b$export$dbc0f175b25fb0fb)(props, state, modalRef);
    let entering = ($d3f049242431219c$export$6d3443f2c48bfc20)(props.overlayRef) || props.isEntering || false;
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-ModalOverlay',
        values: {
            isEntering: entering,
            isExiting: props.isExiting,
            state: state
        }
    });
    let viewport = ($5df64b3807dc15ee$export$d699905dd57c73ca)();
    let style = {
        ...renderProps.style,
        '--visual-viewport-height': viewport.height + 'px'
    };
    return /*#__PURE__*/ ($dbSRa$react).createElement(($337b884510726a0d$export$c6fdb837b070b4ff), {
        isExiting: props.isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...($3ef42575df84b30b$export$9d1611c77c2fe928)(($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props), underlayProps),
        ...renderProps,
        style: style,
        ref: props.overlayRef,
        "data-entering": entering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ ($dbSRa$react).createElement(($64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $f3f84453ead64de5$var$InternalModalContext,
                {
                    modalProps: modalProps,
                    modalRef: modalRef,
                    isExiting: props.isExiting,
                    isDismissable: props.isDismissable
                }
            ],
            [
                ($de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ]
        ]
    }, renderProps.children)));
}
function $f3f84453ead64de5$var$ModalContent(props) {
    let { modalProps: modalProps, modalRef: modalRef, isExiting: isExiting, isDismissable: isDismissable } = (useContext)($f3f84453ead64de5$var$InternalModalContext);
    let state = (useContext)(($de32f1b87079253c$export$d2f961adcb0afbe));
    let mergedRefs = (useMemo)(()=>($5dc95899b306f630$export$c9058316764c140e)(props.modalRef, modalRef), [
        props.modalRef,
        modalRef
    ]);
    let ref = ($df56164dff5785e2$export$4338b53315abf666)(mergedRefs);
    let entering = ($d3f049242431219c$export$6d3443f2c48bfc20)(ref);
    let renderProps = ($64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-Modal',
        values: {
            isEntering: entering,
            isExiting: isExiting,
            state: state
        }
    });
    return /*#__PURE__*/ ($dbSRa$react).createElement("div", {
        ...($3ef42575df84b30b$export$9d1611c77c2fe928)(($65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props), modalProps),
        ...renderProps,
        ref: ref,
        "data-entering": entering || undefined,
        "data-exiting": isExiting || undefined
    }, isDismissable && /*#__PURE__*/ ($dbSRa$react).createElement(($86ea4cb521eb2e37$export$2317d149ed6f78c4), {
        onDismiss: state.close
    }), renderProps.children);
}

const Modal = ({ isOpen, onOpenChange, title, children, }) => {
    return (jsxRuntimeExports.jsx($f3f84453ead64de5$export$2b77a92f1a5ad772, { isOpen: isOpen, onOpenChange: onOpenChange, children: jsxRuntimeExports.jsxs($de32f1b87079253c$export$3ddf2d174ce01153, { className: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg", children: [jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [title && (jsxRuntimeExports.jsx($5cb03073d3f54797$export$a8a3e93435678ff9, { slot: "title", className: "text-lg font-medium", children: title })), jsxRuntimeExports.jsx(Button, { className: "text-gray-500 hover:text-black", onClick: () => onOpenChange(false), children: "x" })] }), jsxRuntimeExports.jsx("div", { children: children })] }) }));
};

const Input = (_a) => {
    var { label, error } = _a, props = __rest(_a, ["label", "error"]);
    return (jsxRuntimeExports.jsxs($bcdf0525bf22703d$export$2c73285ae9390cec, { children: [jsxRuntimeExports.jsx($01b77f81d0f07f68$export$b04be29aa201d4f5, { children: label }), jsxRuntimeExports.jsx($3985021b0ad6602f$export$f5b8910cec6cf069, Object.assign({}, props)), error && (jsxRuntimeExports.jsx("div", { role: "alert", style: { color: "red" }, children: error }))] }));
};

const DatePicker = () => {
    return (jsxRuntimeExports.jsxs($06d5b8ec9ee5d538$export$5109c6dd95d8fb00, { defaultValue: $fae977aafc393c5c$export$6b862160d295c8e("2024-06-01"), children: [jsxRuntimeExports.jsx($01b77f81d0f07f68$export$b04be29aa201d4f5, { children: "Pick a date" }), jsxRuntimeExports.jsx($40825cdb76e74f70$export$7edc06cf1783b30f, { className: "border px-2 py-1 rounded", children: (segment) => jsxRuntimeExports.jsx($40825cdb76e74f70$export$336ab7fa954c4b5f, { segment: segment }) }), jsxRuntimeExports.jsx($07b14b47974efb58$export$5b6b19405a83ff9d, { className: "border p-2 rounded mt-2 bg-white shadow", children: jsxRuntimeExports.jsx($dfd62f934fc76fed$export$e1aef45b828286de, { children: jsxRuntimeExports.jsx($dfd62f934fc76fed$export$5bd780d491cfc46c, { children: (date) => jsxRuntimeExports.jsx($dfd62f934fc76fed$export$5d847498420df57b, { date: date }) }) }) })] }));
};

export { Button, DatePicker, Input, Modal };
//# sourceMappingURL=index.esm.js.map
