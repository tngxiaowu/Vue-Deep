var Global = (function (exports) {
    'use strict';

    var baseCreateApp = function baseCreateApp() {
      console.log("I am base CreateApp");
    };

    var createRenderer = function createRenderer() {
      return {
        baseCreateApp: baseCreateApp
      };
    };

    var _createRenderer = createRenderer(),
        baseCreateApp$1 = _createRenderer.baseCreateApp;

    var createApp = function createApp() {
      var app = baseCreateApp$1.apply(void 0, arguments);
      return app;
    };

    exports.createApp = createApp;

    return exports;
}({}));
