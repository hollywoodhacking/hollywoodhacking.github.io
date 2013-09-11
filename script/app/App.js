/// <reference path="AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/EditorPresenter', 'Editor/EditorBuilder', 'AppView'], function(require, exports, __EditorPresenter__, __EditorBuilder__, __AppView__) {
    var EditorPresenter = __EditorPresenter__;
    var EditorBuilder = __EditorBuilder__;
    var AppView = __AppView__;

    var App = (function () {
        function App() {
            this.editorBuilder = EditorBuilder.create();
        }
        App.prototype.init = function (applicationView) {
            this.applicationView = applicationView;
            this.loadEditor();
        };

        App.prototype.keydown = function (key) {
            switch (key) {
                case 116:
                    this.loadEditor();
                    break;
                default:
                    this.editorPresenter.update(key);
                    break;
            }
        };

        App.prototype.loadEditor = function () {
            this.editorPresenter = this.editorBuilder.build(this.applicationView);
        };
        return App;
    })();

    
    return App;
});
//# sourceMappingURL=App.js.map
