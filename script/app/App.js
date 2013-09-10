/// <reference path="AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/EditorFactory', 'Editor/EditorPresenter', 'Editor/Loader'], function(require, exports, __EditorFactory__, __EditorPresenter__, __EditorLoader__) {
    var EditorFactory = __EditorFactory__;
    var EditorPresenter = __EditorPresenter__;
    var EditorLoader = __EditorLoader__;

    var App = (function () {
        function App() {
            this.editorFactory = EditorFactory.create();
        }
        App.prototype.init = function () {
            var _this = this;
            $(document).keydown(_(this.keydown).bind(this));

            var editorLoader = new EditorLoader();
            var editorView = this.editorFactory.createEditorView('javascript');

            editorLoader.addListener('load', function (data) {
                _this.editorPresenter = _this.editorFactory.createEditorPresenter(data);
                _this.editorPresenter.attachView(editorView);
            }, this);

            var element = editorView.render();

            $('#stage').append(element);

            editorLoader.load('static/js.txt');
        };

        App.prototype.keydown = function (event) {
            switch (event.which) {
                case 116:
                    break;
                case 122:
                    return true;
                default:
                    this.editorPresenter.update(event.which);
                    break;
            }

            this.preventDefaults(event);
            return false;
        };

        App.prototype.preventDefaults = function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            }

            return false;
        };
        return App;
    })();

    
    return App;
});
//# sourceMappingURL=App.js.map
