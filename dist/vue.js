var Vue = (function (exports) {
	'use strict';

	// runtime-core/src/apiCreateApp.ts
	function createAppAPI(render) {
	  return function createApp(rootComponents, rootProps) {
	    var app = {
	      _component: rootComponent,
	      use: function use() {},
	      mixin: function mixin() {},
	      component: function component() {},
	      directive: function directive() {},
	      // mount挂载方法
	      mount: function mount() {
	        var isMounted = false; // 判断是否已经加载

	        var context = createAppContext(); // 创建执行上下文内容

	        if (!isMounted) {
	          var vnode = createVNode(rootComponent, rootProps);
	          vnode.appContext = context;
	          render(vnode, rootContainer);
	          isMounted = true;
	          app._container = rootContainer;
	          return vnode.component.proxy;
	        } else if (__DEV__) {
	          console.log("App has already been mounted. Create a new app instance instead.");
	        }
	      } // 一些其他方法

	    };
	    return app;
	  };
	}

	var createRenderer = function createRenderer() {

	  function unmount() {} // 以及 其他一系列的辅助函数


	  var render = function render(vnode, container) {
	    if (vnode == null) {
	      if (container._vnode) {
	        unmount(container._vnode);
	      }
	    }
	    container._vnode = vnode;
	  };

	  return {
	    render: render,
	    baseCreateApp: createAppAPI(render)
	  };
	};

	var _createRenderer = createRenderer(),
	    baseCreateApp = _createRenderer.baseCreateApp;

	var createApp = function createApp() {
	  var app = baseCreateApp.apply(void 0, arguments);
	  var mount = app.mount;

	  app.mount = function () {};

	  return app;
	};

	var reactive = function reactive() {
	  console.log('reactive 待填坑');
	};

	exports.createApp = createApp;
	exports.reactive = reactive;

	return exports;

}({}));
