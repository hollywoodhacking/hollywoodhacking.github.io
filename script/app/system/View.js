/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports"], function(require, exports) {
    var View = (function () {
        function View(text) {
            this.$el = $(text);
        }
        View.prototype.$ = function (selector) {
            return this.$el.find(selector);
        };
        return View;
    })();

    
    return View;
});
//# sourceMappingURL=View.js.map
