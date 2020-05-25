var Global = (function (exports) {
    'use strict';

    function createAppAPI(render) {
      return function createApp(rootComponents, rootProps) {
        var app = {
          use: function use() {},
          mixin: function mixin() {},
          component: function component() {},
          directive: function directive() {},
          mount: function mount() {},
          unmount: function unmount() {},
          provide: function provide() {}
        };
        console.log('Hello,I am App');
        return app;
      };
    }

    var createRenderer = function createRenderer() {

      function unmount() {}

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
        baseCreateApp: createAppAPI()
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

    exports.createApp = createApp;

    return exports;

}({}));
