/// <reference path="../AppDefinitions.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'system/EventType'], function(require, exports, __EventType__) {
    var EventType = __EventType__;

    var Loader = (function (_super) {
        __extends(Loader, _super);
        function Loader() {
            _super.call(this);
        }
        Loader.prototype.load = function (path) {
            $.get(path, _(this.dispatchLoad).bind(this));
        };

        Loader.prototype.dispatchLoad = function (data) {
            this.trigger('load', data);
        };
        return Loader;
    })(EventType);

    
    return Loader;
});
//# sourceMappingURL=Loader.js.map
