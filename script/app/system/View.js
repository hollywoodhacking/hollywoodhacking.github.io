/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports"], function(require, exports) {
    var View = (function () {
        function View(text) {
            this.$el = $(text);
            this.delegateEvents();
        }
        View.prototype.render = function () {
            return this.$el;
        };

        View.prototype.$ = function (selector) {
            return this.$el.find(selector);
        };

        View.prototype.delegateEvents = function () {
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;

            for (var key in this.events) {
                var method = _(this[this.events[key]]).bind(this);

                if (!method) {
                    continue;
                }

                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];

                if (selector === '') {
                    this.$el.on(eventName, method);
                } else {
                    this.$el.on(eventName, selector, method);
                }
            }
        };
        return View;
    })();

    
    return View;
});
//# sourceMappingURL=View.js.map
