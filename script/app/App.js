/// <reference path="AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/Editor'], function(require, exports, __Editor__) {
    var Editor = __Editor__;

    var App = (function () {
        function App() {
            this.editor = new Editor('static/js.txt', 'javascript');
        }
        App.prototype.init = function () {
            $(document).keydown(_(this.keydown).bind(this));

            this.editor.init();
        };

        App.prototype.keydown = function (event) {
            this.editor.update(event);

            this.preventDefaults(event);
        };

        App.prototype.preventDefaults = function (event) {
            if (event.keyCode != 122) {
                if (event.preventDefault) {
                    event.preventDefault();
                }
                event.returnValue = false;
            }
        };
        return App;
    })();

    
    return App;
});
//# sourceMappingURL=App.js.map
