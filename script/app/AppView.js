/// <reference path="AppDefinitions.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'system/View'], function(require, exports, __View__) {
    var View = __View__;

    var AppView = (function (_super) {
        __extends(AppView, _super);
        function AppView(selector) {
            _super.call(this, selector);
        }
        AppView.prototype.attachMainView = function (view) {
            var el = view.render();

            if (typeof this.mainView !== 'undefined') {
                this.mainView.remove();
            }

            this.mainView = view;
            this.$('#stage').append(el);
        };
        return AppView;
    })(View);

    
    return AppView;
});
