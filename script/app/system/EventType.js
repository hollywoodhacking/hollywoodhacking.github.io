/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports"], function(require, exports) {
    var EventType = (function () {
        function EventType() {
            this.eventHash = {};
        }
        EventType.prototype.addListener = function (event, listener, context) {
            if (!this.eventStored(event)) {
                this.eventHash[event] = new Array();
            }

            this.eventHash[event].push({ listener: listener, context: context });
        };

        EventType.prototype.removeListener = function (event, listener) {
            if (this.eventStored(event)) {
                _(this.eventHash).forEach(function (record) {
                    if (listener === record.listener) {
                        record.listener = function () {
                        };
                        record.context = null;
                    }
                });
            }
        };

        EventType.prototype.trigger = function (event) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            if (this.eventStored(event)) {
                _(this.eventHash[event]).forEach(function (record) {
                    record.listener.apply(record.context, args);
                });
            }
        };

        EventType.prototype.removeAllListeners = function () {
            this.eventHash = {};
        };

        EventType.prototype.eventStored = function (event) {
            return typeof this.eventHash[event] !== 'undefined';
        };
        return EventType;
    })();

    
    return EventType;
});
//# sourceMappingURL=EventType.js.map
